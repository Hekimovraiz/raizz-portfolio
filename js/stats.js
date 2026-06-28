const CF_RANK_COLORS = {
    'newbie': '#808080',
    'pupil': '#008000',
    'specialist': '#03a89e',
    'expert': '#0000ff',
    'candidate master': '#aa00aa',
    'master': '#ff8c00',
    'international master': '#ff8c00',
    'grandmaster': '#ff0000',
};

function cfRankColor(rank) {
    return CF_RANK_COLORS[(rank || '').toLowerCase()] || 'var(--txt-2)';
}

function formatRank(rank) {
    if (!rank) return null;
    return rank.replace(/\b\w/g, c => c.toUpperCase());
}

function statLine(label, value) {
    if (value === null || value === undefined || value === '') return '';
    return `<div class="cp-stat-row"><span class="cp-stat-label">${label}</span><span class="cp-stat-value">${value}</span></div>`;
}

function renderPlatformCard(name, data, accent) {
    const ratingHtml = data.rating != null
        ? `<span class="cp-rating" style="color:${accent}">${data.rating}</span>`
        : null;
    const rankText = data.rankLabel || formatRank(data.rank);
    const rankNumText = data.rankNum != null ? `#${data.rankNum}` : null;

    const rows = [
        statLine('rating', ratingHtml),
        statLine('max', data.maxRating),
        statLine('rank', rankText),
        statLine('rank #', rankNumText),
        statLine('solved', data.solved),
        statLine('attempted', data.attempted),
        statLine('submissions', data.submissions),
        statLine('contests', data.contests),
        statLine('repos', data.publicRepos),
        statLine('followers', data.followers),
        statLine('badge', data.achievement),
    ].filter(Boolean).join('');

    return `
        <a class="cp-card" href="${data.url}" target="_blank" rel="noopener">
            <div class="cp-card-head">
                <span class="cp-platform">${name}</span>
                <span class="cp-handle">${data.handle}</span>
                <span class="cp-ext">↗</span>
            </div>
            <div class="cp-card-body">${rows || '<div class="cp-stat-row"><span class="cp-stat-label">profile</span><span class="cp-stat-value">linked</span></div>'}</div>
        </a>
    `;
}

function renderProfileCard(profile) {
    return `
        <a class="cp-card cp-card-muted" href="${profile.url}" target="_blank" rel="noopener">
            <div class="cp-card-head">
                <span class="cp-platform">${profile.name}</span>
                <span class="cp-handle">${profile.handle}</span>
                <span class="cp-ext">↗</span>
            </div>
        </a>
    `;
}

async function fetchLiveCodeforces(handle) {
    const res = await fetch(`https://codeforces.com/api/user.info?handles=${encodeURIComponent(handle)}`);
    const data = await res.json();
    if (data.status !== 'OK' || !data.result.length) throw new Error('Codeforces API failed');
    const user = data.result[0];
    return {
        handle: user.handle,
        url: `https://codeforces.com/profile/${user.handle}`,
        rating: user.rating,
        maxRating: user.maxRating,
        rank: user.rank,
        maxRank: user.maxRank,
        organization: user.organization,
    };
}

async function loadCompetitiveStats() {
    const grid = document.getElementById('cp-stats-grid');
    const updatedEl = document.getElementById('cp-stats-updated');
    if (!grid) return;

    let stats = null;
    try {
        const res = await fetch('/data/stats.json');
        stats = await res.json();
    } catch {
        grid.innerHTML = '<p class="cp-stats-error">// stats unavailable</p>';
        return;
    }

    const cf = { ...(stats.platforms.codeforces || {}) };
    try {
        const live = await fetchLiveCodeforces(cf.handle || '0xRaiz');
        Object.assign(cf, live);
        if (updatedEl) updatedEl.textContent = `// live Codeforces · cached stats ${new Date(stats.updatedAt).toLocaleString('en-GB')}`;
    } catch {
        if (updatedEl) updatedEl.textContent = `// cached stats · ${new Date(stats.updatedAt).toLocaleString('en-GB')}`;
    }

    const cards = [];
    const order = [
        ['Codeforces', 'codeforces', cfRankColor(cf.rank)],
        ['Eolymp', 'eolymp', '#2d8a4e'],
        ['VJudge', 'vjudge', 'var(--purple)'],
        ['AtCoder', 'atcoder', 'var(--txt-0)'],
        ['CodeChef', 'codechef', '#5b4638'],
        ['GitHub', 'github', 'var(--purple)'],
    ];

    for (const [name, key, accent] of order) {
        const data = key === 'codeforces' ? cf : stats.platforms[key];
        if (data) cards.push(renderPlatformCard(name, data, accent));
    }

    (stats.profiles || []).forEach(profile => cards.push(renderProfileCard(profile)));
    grid.innerHTML = cards.join('');
}

loadCompetitiveStats();
