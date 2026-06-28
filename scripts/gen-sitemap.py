#!/usr/bin/env python3
"""Generate sitemap.xml — uses Netlify URL env var when available."""

import json
import os
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = os.environ.get("URL", "http://localhost:8765").rstrip("/")

STATIC_PAGES = [
    "/",
    "/about.html",
    "/projects.html",
    "/blog.html",
    "/uses.html",
    "/contact.html",
    "/cv.html",
]

posts_path = ROOT / "blog" / "posts.json"
if posts_path.exists():
    with open(posts_path, encoding="utf-8") as f:
        for post in json.load(f):
            STATIC_PAGES.append(f"/blog/posts/{post['slug']}.html")

urls = "\n".join(
    f"  <url><loc>{BASE}{path if path != '/' else '/'}</loc></url>"
    for path in STATIC_PAGES
)

sitemap = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{urls}
</urlset>
"""

(ROOT / "sitemap.xml").write_text(sitemap, encoding="utf-8")
print(f"Generated sitemap.xml with base {BASE}")
