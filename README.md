# raizz

Personal portfolio of [Raiz Hekimov](https://github.com/Hekimovraiz) — competitive programmer and software engineer from Qusar.

## Pages

- `/` — home
- `/about.html` — bio and competitive profiles
- `/projects.html` — open source work
- `/blog.html` — writing
- `/uses.html` — tools and setup
- `/contact.html` — get in touch

## Local development

```bash
python3 -m http.server 8765
```

Open [http://localhost:8765](http://localhost:8765).

## Blog posts

```bash
python3 add-post.py
```

This creates a post HTML file and updates `blog/posts.json`.

## Deploy

Deployed on [Netlify](https://www.netlify.com/). Push to GitHub and Netlify builds automatically — including `sitemap.xml` generation via `scripts/gen-sitemap.py`.

## Stack

Static HTML, CSS, and vanilla JavaScript. No framework.
