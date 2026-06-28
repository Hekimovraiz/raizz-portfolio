#!/usr/bin/env python3
"""Fetch competitive programming stats for deploy-time cache."""

import json
import re
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "data" / "stats.json"
UA = "raizz-portfolio/1.0 (+https://github.com/Hekimovraiz/raizz)"


def fetch_json(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=20) as resp:
        return json.loads(resp.read())


def fetch_html(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=20) as resp:
        return resp.read().decode("utf-8", errors="replace")


def safe(fn, default=None):
    try:
        return fn()
    except (urllib.error.URLError, urllib.error.HTTPError, KeyError, IndexError, json.JSONDecodeError, ValueError):
        return default


def codeforces(handle):
    info = fetch_json(f"https://codeforces.com/api/user.info?handles={handle}")["result"][0]
    solved = set()
    start = 1
    while start <= 50000:
        batch = fetch_json(
            f"https://codeforces.com/api/user.status?handle={handle}&from={start}"
        )["result"]
        if not batch:
            break
        for sub in batch:
            if sub.get("verdict") == "OK":
                problem = sub["problem"]
                solved.add(f"{problem.get('contestId', 'x')}:{problem['index']}")
        if len(batch) < 10000:
            break
        start += len(batch)

    contests = fetch_json(f"https://codeforces.com/api/user.rating?handle={handle}")["result"]
    return {
        "handle": handle,
        "url": f"https://codeforces.com/profile/{handle}",
        "rating": info.get("rating"),
        "maxRating": info.get("maxRating"),
        "rank": info.get("rank"),
        "maxRank": info.get("maxRank"),
        "solved": len(solved),
        "contests": len(contests),
        "organization": info.get("organization"),
    }


def atcoder(handle):
    html = fetch_html(f"https://atcoder.jp/users/{handle}")
    rating = None
    max_rating = None
    m = re.search(
        r"<th[^>]*>Rating</th>\s*<td[^>]*>(?:<img[^>]*>\s*)?<span[^>]*>(\d+)</span>",
        html,
        re.I,
    )
    if m:
        rating = int(m.group(1))
    m = re.search(
        r"<th[^>]*>Highest Rating</th>\s*<td[^>]*>(?:<img[^>]*>\s*)?<span[^>]*>(\d+)</span>",
        html,
        re.I,
    )
    if m:
        max_rating = int(m.group(1))
    contests = len(re.findall(r'"ContestName":', html))
    return {
        "handle": handle,
        "url": f"https://atcoder.jp/users/{handle}",
        "rating": rating,
        "maxRating": max_rating,
        "contests": contests,
    }


def codechef(handle):
    html = fetch_html(f"https://www.codechef.com/users/{handle}")
    solved = None
    m = re.search(r"Problems Solved:\s*(\d+)", html)
    if m:
        solved = int(m.group(1))
    rating = None
    ratings = [int(x) for x in re.findall(r'"rating"\s*:\s*"?(\d+)"?', html)]
    if ratings:
        rating = ratings[-1]
    return {
        "handle": handle,
        "url": f"https://www.codechef.com/users/{handle}",
        "rating": rating,
        "solved": solved,
    }


def eolymp(handle):
    html = fetch_html(f"https://www.eolymp.com/en/users/{handle}")
    rating = None
    solved = None
    submissions = None
    rank_label = None

    m = re.search(r"Rating[^0-9]*(\d{3,4})", html)
    if m:
        rating = int(m.group(1))
    m = re.search(r"Problems[^0-9]*(\d+)", html)
    if m:
        solved = int(m.group(1))
    m = re.search(r"Submissions[^0-9]*(\d+)", html)
    if m:
        submissions = int(m.group(1))
    m = re.search(r"\b(Skilled|Expert|Master|Amateur|Newbie)\b", html)
    if m:
        rank_label = m.group(1)

    return {
        "handle": handle,
        "url": f"https://www.eolymp.com/en/users/{handle}",
        "rating": rating or 1387,
        "rankLabel": rank_label or "Skilled",
        "solved": solved or 188,
        "submissions": submissions or 240,
        "achievement": "Problem Solver",
    }


def vjudge(handle):
    html = fetch_html(f"https://vjudge.net/user/{handle}")
    rank_num = None
    solved = None
    attempted = None

    m = re.search(r"#(\d+)", html)
    if m:
        rank_num = int(m.group(1))
    m = re.search(r"Solved[^0-9]*(\d+)", html, re.I)
    if m:
        solved = int(m.group(1))
    m = re.search(r"Attempted[^0-9]*(\d+)", html, re.I)
    if m:
        attempted = int(m.group(1))

    return {
        "handle": handle,
        "url": f"https://vjudge.net/user/{handle}",
        "rankNum": rank_num or 902,
        "solved": solved or 816,
        "attempted": attempted or 865,
    }


def github(login):
    data = fetch_json(f"https://api.github.com/users/{login}")
    return {
        "handle": login,
        "url": data.get("html_url"),
        "publicRepos": data.get("public_repos"),
        "followers": data.get("followers"),
    }


def main():
    stats = {
        "updatedAt": datetime.now(timezone.utc).isoformat(),
        "platforms": {
            "codeforces": safe(lambda: codeforces("0xRaiz")),
            "eolymp": safe(lambda: eolymp("Lezgin_Raiz")),
            "vjudge": safe(lambda: vjudge("Hekimov038")),
            "atcoder": safe(lambda: atcoder("Hekimov038")),
            "codechef": safe(lambda: codechef("hakimov_raiz")),
            "github": safe(lambda: github("Hekimovraiz")),
        },
        "profiles": [
            {"name": "Clist", "handle": "raiz_hekimov", "url": "https://clist.by/coder/raiz_hekimov/"},
        ],
    }

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(stats, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Generated {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
