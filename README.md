# raizz

Personal portfolio of [Raiz Hekimov](https://github.com/Hekimovraiz) — competitive programmer and software engineer from Qusar.

## Pages

- `/` — home
- `/about.html` — bio and competitive profiles
- `/projects.html` — open source work
- `/blog.html` — writing
- `/uses.html` — tools and setup
- `/contact.html` — get in touch
- `/cv.html` — printable CV

## Local development

```bash
python3 -m http.server 8765
```

Open [http://localhost:8765](http://localhost:8765).

## Blog posts

Static blog — no server required. Posts are HTML files plus a JSON manifest; Netlify rebuilds on every push.

```bash
python3 add-post.py
```

This creates `blog/posts/YYYY-MM-DD-slug.html` and updates `blog/posts.json`. Edit the HTML file, then:

```bash
git add blog/
git commit -m "Add blog post: your title"
git push
```

Netlify detects the push, runs `scripts/gen-sitemap.py`, and publishes the updated site.

## Deploy

Deployed on [Netlify](https://www.netlify.com/). Connect the GitHub repo once; every push to the main branch triggers an automatic build and deploy.

Build settings (already in `netlify.toml`):

- **Publish directory:** `.` (repo root)
- **Build command:** `python3 scripts/gen-sitemap.py` (generates `sitemap.xml` with blog URLs)

No backend, database, or always-on server needed.

## Stack

Static HTML, CSS, and vanilla JavaScript. No framework.
