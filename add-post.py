#!/usr/bin/env python3
"""
add-post.py — raizz blog post creator
Run locally: python3 add-post.py
Then push to GitHub / Netlify to publish.
"""

import json, os, re, sys
from datetime import date

POSTS_JSON = os.path.join(os.path.dirname(__file__), "blog", "posts.json")
POSTS_DIR  = os.path.join(os.path.dirname(__file__), "blog", "posts")
WORDS_PER_MINUTE = 200

POST_TEMPLATE = """<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
    <title>{title} — raizz</title>
    <meta name="description" content="{excerpt}"/>
    <meta property="og:image" content="/assets/pfp.png"/>
    <meta property="og:image:alt" content="raizz — Raiz Hekimov"/>
    <meta name="twitter:image" content="/assets/pfp.png"/>
    <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"/>
    <link rel="stylesheet" href="/css/style.css"/>
    <style>
        .post-meta {{ font-family: 'Space Mono', monospace; font-size: .875rem; color: var(--txt-3); margin-bottom: 2rem; }}
        .post-content {{ color: var(--txt-2); }}
        .post-content p {{ font-size: 1.125rem; line-height: 1.75; }}
        .post-content h2 {{ color: var(--txt); border-bottom: 1px solid var(--bg-3); padding-bottom: .5rem; }}
        .post-content a {{ color: var(--txt); text-decoration: underline var(--bg-3) 2px; text-underline-offset: .2em; transition: text-decoration-color .2s; }}
        .post-content a:hover {{ text-decoration-color: var(--txt); }}
    </style>
</head>
<body>

<header>
    <div class="header-left">
        <a class="pfp-link" href="/" aria-label="homepage">
            <img class="pfp logo-svg" src="/assets/avatar.svg" alt="raizz logo" width="32" height="32"/>
        </a>
        <a href="/"><h1 class="site-title">raizz</h1></a>
    </div>
    <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="site-nav">
        <span class="menu-bar"></span>
        <span class="menu-bar"></span>
        <span class="menu-bar"></span>
    </button>
    <nav id="site-nav" class="site-nav">
        <a class="nav" href="/about.html"><span class="arrow">-></span><span class="slash">/</span>about</a>
        <a class="nav" href="/projects.html"><span class="arrow">-></span><span class="slash">/</span>projects</a>
        <a class="nav" href="/blog.html"><span class="arrow">-></span><span class="slash">/</span>blog</a>
        <a class="nav" href="/uses.html"><span class="arrow">-></span><span class="slash">/</span>uses</a>
        <a class="nav" href="/contact.html"><span class="arrow">-></span><span class="slash">/</span>contact</a>
    </nav>
</header>

<main class="page-enter">
    <a class="back" href="/blog.html"><span class="arrow">←</span>/blog</a>

    <h1>{title}</h1>
    <div class="post-meta" data-slug="{slug_id}">{date}</div>

    <div class="post-content content">
        <!-- ✍️  Write your post here -->
        <p>{excerpt}</p>

        <p>...</p>
    </div>
</main>

<footer class="site-footer">
    <p>© 2026 raizz · <a href="https://github.com/Hekimovraiz/raizz" target="_blank" rel="noopener">source</a></p>
</footer>

<script src="/js/main.js"></script>
</body>
</html>
"""

def slugify(text):
    text = text.lower().strip()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_-]+', '-', text)
    return text.strip('-')

def reading_minutes(html):
    text = re.sub(r'<[^>]+>', ' ', html)
    words = len(re.findall(r'\w+', text))
    return max(1, round(words / WORDS_PER_MINUTE))

def parse_tags(raw):
    return [t.strip().lower() for t in raw.split(',') if t.strip()]

def main():
    print("\\n── raizz blog post creator ──\\n")
    title   = input("Post title: ").strip()
    excerpt = input("Short excerpt (1-2 sentences): ").strip()
    tags_raw = input("Tags (comma-separated, e.g. linux, dev): ").strip()
    today   = date.today().isoformat()

    slug = slugify(title)
    slug_id = f"{today}-{slug}"
    filename = f"{slug_id}.html"
    filepath = os.path.join(POSTS_DIR, filename)

    if os.path.exists(filepath):
        print(f"\\n⚠️  File already exists: {filepath}")
        sys.exit(1)

    # Write HTML post file
    html = POST_TEMPLATE.format(title=title, excerpt=excerpt, date=today, slug=slug, slug_id=slug_id)
    os.makedirs(POSTS_DIR, exist_ok=True)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)

    tags = parse_tags(tags_raw)
    minutes = reading_minutes(html)

    # Update posts.json
    with open(POSTS_JSON, "r", encoding="utf-8") as f:
        posts = json.load(f)

    posts.append({
        "slug": slug_id,
        "title": title,
        "excerpt": excerpt,
        "date": today,
        "tags": tags,
        "readingMinutes": minutes
    })

    with open(POSTS_JSON, "w", encoding="utf-8") as f:
        json.dump(posts, f, indent=2, ensure_ascii=False)

    print(f"\\n✅  Created: blog/posts/{filename}")
    print(f"✅  Updated: blog/posts.json")
    print(f"✅  Reading time: {minutes} min · Tags: {', '.join(tags) if tags else 'none'}")
    print(f"\\n📝  Edit your post: {filepath}")
    print("\\n🚀  When ready, push to GitHub and Netlify will deploy automatically.\\n")

if __name__ == "__main__":
    main()
