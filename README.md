# Raizz Portfolio

A minimalist, high-performance, and dark-themed developer portfolio and blog engine.

Built for competitive programmers and software engineers who value speed, simplicity, and absolute control.

**HTML5 · CSS3 · JavaScript · Python 3 · Netlify Ready · Local First**

Raizz Portfolio is a static-first web presence: it showcases your competitive programming stats, highlights your projects, provides a seamless dark-mode aesthetic, and includes a bespoke local blog generator without the overhead of heavy JavaScript frameworks.

It is heavily inspired by modern terminal environments (`>_` aesthetics) and minimalist web design.

> **Important**
> Raizz Portfolio is designed to be lightweight. It does not use React, Next.js, or Tailwind. All styling is pure Vanilla CSS, maintaining zero dependencies for the frontend.

## Why Raizz Portfolio?
Most modern portfolios are bloated with unnecessary JavaScript and thousands of node modules. Raizz takes a different approach:

- **Real performance** — pure HTML/CSS/JS ensuring near-instant load times and zero build steps.
- **Terminal aesthetic** — Space Mono typography, absolute dark mode, and sleek glassmorphism.
- **Custom Blog Engine** — write your posts locally using a Python script, no CMS database required.
- **Deploy anywhere** — drop the files on Vercel, Netlify, or GitHub Pages and it just works natively.

## Contents
- [Requirements](#requirements)
- [Quick Start](#quick-start)
- [Architecture & Files](#architecture--files)
- [Managing the Blog](#managing-the-blog)
- [Deployment (Netlify & Vercel)](#deployment-netlify--vercel)
- [Customization](#customization)
- [License](#license)

## Requirements

**Required**
- Git
- A web browser (Chrome, Edge, Yandex, Safari, etc.)

**For Blog Generation (Optional but Recommended)**
- Python 3.x or newer

## Quick start

### 1. Install and run locally
```bash
git clone https://github.com/Hekimovraiz/raizz-portfolio.git
cd raizz-portfolio

# Start a local static server
python3 -m http.server 3000
```
Open `http://localhost:3000` in your browser.

### 2. Configure your identity
Open `index.html` and `about.html` in your favorite code editor to update the metadata, bio, and competitive programming links to match your own profile.

## Architecture & Files

The repository is organized into focused, static elements.

```text
raizz-portfolio/
├── index.html           # Landing page
├── about.html           # Bio and competitive profiles
├── projects.html        # Showcase of OSS and side projects
├── blog.html            # Dynamic blog post feed
├── contact.html         # Social and email links
├── css/
│   └── style.css        # Core design system and variables
├── js/
│   └── main.js          # Navigation and UI logic
├── assets/
│   └── favicon.svg      # Terminal icon / branding
├── blog/
│   ├── posts.json       # Metadata index for blog posts
│   └── posts/           # Directory for generated HTML posts
├── add-post.py          # Python CLI tool for generating posts
└── netlify.toml         # Cache and routing headers for Netlify
```

## Managing the Blog
Raizz Portfolio ships with a bespoke local static site generator for your blog.

### 1. Create a new post
Run the generator script in your terminal:
```bash
python3 add-post.py
```
1. Enter your `Title`.
2. Enter your `Excerpt`.
3. The script automatically creates a properly formatted HTML file in `blog/posts/` and registers it securely in `blog/posts.json`.

### 2. Write your content
Open the newly generated HTML file (e.g., `blog/posts/YYYY-MM-DD-title.html`) and write your content inside the `<div class="post-content">` tag using standard HTML elements like `<p>`, `<h2>`, and `<blockquote>`.

## Deployment (Netlify & Vercel)

This project is tailored for instant deployment. 

**Netlify (Recommended):**
1. Push your repository to GitHub.
2. Log into Netlify and click **"Add new site" -> "Import an existing project"**.
3. Select your GitHub repository.
4. Leave the "Build command" empty (it's a static site).
5. Click **Deploy**.
*The included `netlify.toml` file will automatically configure optimal cache-control headers.*

**Vercel / GitHub Pages:**
The project works natively out of the box with zero configuration required. Just link the repository from your dashboard and hit deploy.

## Customization

### Theming
All colors and typography are controlled via standard CSS variables in `css/style.css`. Modifying these updates the entire application dynamically.

```css
:root {
    --bg:     hsl(220, 10%, 8%);
    --bg-2:   hsl(220, 10%, 11%);
    --txt:    hsl(220, 30%, 80%);
    --blue:   hsl(190, 70%, 50%);
}
```

## Developer & Author

**Raiz Hekimov**
- **GitHub:** [@Hekimovraiz](https://github.com/Hekimovraiz)
- **Codeforces:** [0xRaiz](https://codeforces.com/profile/0xRaiz)

## License
MIT License.
