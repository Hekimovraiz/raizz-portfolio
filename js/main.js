/* ── Header scroll behaviour ─────────────────────────────── */
(function () {
    const header = document.querySelector('header');
    if (!header) return;

    const isHome = document.body.dataset.page === 'home';

    if (isHome) {
        header.classList.add('home-header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 60) {
                header.classList.remove('home-header');
            } else {
                header.classList.add('home-header');
            }
        }, { passive: true });
    } else {
        let lastY = window.scrollY;
        window.addEventListener('scroll', () => {
            const y = window.scrollY;
            if (y > lastY && y > 80) {
                header.classList.add('hide-header');
            } else {
                header.classList.remove('hide-header');
            }
            lastY = y;
        }, { passive: true });
    }

    /* Active nav link highlight */
    const path = '/' + window.location.pathname.split('/')[1];
    document.querySelectorAll('a.nav').forEach(a => {
        if (a.getAttribute('href') === path) {
            a.style.color = 'var(--txt-0)';
        }
    });
})();

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

function formatDate(iso) {
    return new Date(iso).toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'
    });
}

loadBlogPosts();
