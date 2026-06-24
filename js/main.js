/* ── Mobile hamburger menu ───────────────────────────────── */
(function () {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('site-nav');
    if (!toggle || !nav) return;

    function closeMenu() {
        toggle.classList.remove('is-open');
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
        document.body.classList.remove('menu-open');
    }

    function openMenu() {
        toggle.classList.add('is-open');
        nav.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-label', 'Close menu');
        document.body.classList.add('menu-open');
    }

    toggle.addEventListener('click', () => {
        if (nav.classList.contains('is-open')) closeMenu();
        else openMenu();
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });

    window.matchMedia('(max-width: 850px)').addEventListener('change', (e) => {
        if (!e.matches) closeMenu();
    });
})();

/* ── Header scroll behaviour ─────────────────────────────── */
(function () {
    const header = document.querySelector('header');
    if (!header) return;

    const isHome = document.body.dataset.page === 'home';
    const isMobile = () => window.matchMedia('(max-width: 850px)').matches;

    if (isHome) {
        if (!isMobile()) header.classList.add('home-header');
        window.addEventListener('scroll', () => {
            if (isMobile()) {
                header.classList.remove('home-header');
                return;
            }
            if (window.scrollY > 60) {
                header.classList.remove('home-header');
            } else {
                header.classList.add('home-header');
            }
        }, { passive: true });
    } else {
        let lastY = window.scrollY;
        window.addEventListener('scroll', () => {
            if (isMobile()) {
                header.classList.remove('hide-header');
                return;
            }
            const y = window.scrollY;
            if (y > lastY && y > 80) {
                header.classList.add('hide-header');
            } else {
                header.classList.remove('hide-header');
            }
            lastY = y;
        }, { passive: true });
    }

    const seg = window.location.pathname.split('/').filter(Boolean)[0];
    let activeHref = null;
    if (seg && seg !== 'index.html') {
        activeHref = seg === 'blog' ? '/blog.html' : '/' + (seg.endsWith('.html') ? seg : seg + '.html');
    }

    if (activeHref) {
        document.querySelectorAll('a.nav').forEach(a => {
            if (a.getAttribute('href') === activeHref) {
                a.style.color = 'var(--txt-0)';
            }
        });
    }
})();

function formatDate(iso) {
    return new Date(iso).toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'
    });
}

/* ── Recent posts (home page) ────────────────────────────── */
async function loadRecentPosts() {
    const container = document.getElementById('recent-posts');
    if (!container) return;

    try {
        const res = await fetch('/blog/posts.json');
        const posts = await res.json();

        if (!posts.length) {
            container.closest('.recent-posts-wrap')?.remove();
            return;
        }

        const recent = posts
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3);

        container.innerHTML = recent.map(p => `
            <a class="recent-post-link" href="/blog/posts/${p.slug}.html">
                <span class="recent-arrow">-></span>${p.title}
            </a>
        `).join('');
    } catch {
        container.closest('.recent-posts-wrap')?.remove();
    }
}

/* ── Blog loader (blog.html only) ───────────────────────── */
async function loadBlogPosts() {
    const container = document.getElementById('blog-posts');
    if (!container) return;

    try {
        const res = await fetch('/blog/posts.json');
        const posts = await res.json();

        if (!posts.length) {
            container.innerHTML = `<p class="blog-empty">// no posts yet — check back soon</p>`;
            return;
        }

        container.innerHTML = posts
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map(p => `
                <a class="blog-card" href="/blog/posts/${p.slug}.html">
                    <div class="blog-date">${formatDate(p.date)}</div>
                    <div class="blog-title">
                        ${p.title}
                        <span class="blog-arrow">↗</span>
                    </div>
                    <p class="blog-excerpt">${p.excerpt}</p>
                </a>
            `).join('');
    } catch {
        container.innerHTML = `<p class="blog-empty">// no posts yet — check back soon</p>`;
    }
}

loadRecentPosts();
loadBlogPosts();
