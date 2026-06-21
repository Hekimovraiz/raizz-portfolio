import {
    o as qe,
    s as mt
} from "./BgjQs8fC.js";
import {
    b as _t,
    H as be,
    S as ke,
    R as Se
} from "./BUApaBEI.js";
import {
    w as Re
} from "./9HSwx7--.js";
import {
    as as U,
    p as T,
    au as P,
    aI as Z,
    aC as De,
    aH as vt
} from "./CqXL5qBA.js";
new URL("sveltekit-internal://");

function wt(e, t) {
    return e === "/" || t === "ignore" ? e : t === "never" ? e.endsWith("/") ? e.slice(0, -1) : e : t === "always" && !e.endsWith("/") ? e + "/" : e
}

function yt(e) {
    return e.split("%25").map(decodeURI).join("%25")
}

function bt(e) {
    for (const t in e) e[t] = decodeURIComponent(e[t]);
    return e
}

function de({
    href: e
}) {
    return e.split("#")[0]
}

function kt(e, t, n, a = !1) {
    const r = new URL(e);
    Object.defineProperty(r, "searchParams", {
        value: new Proxy(r.searchParams, {
            get(o, s) {
                if (s === "get" || s === "getAll" || s === "has") return l => (n(l), o[s](l));
                t();
                const c = Reflect.get(o, s);
                return typeof c == "function" ? c.bind(o) : c
            }
        }),
        enumerable: !0,
        configurable: !0
    });
    const i = ["href", "pathname", "search", "toString", "toJSON"];
    a && i.push("hash");
    for (const o of i) Object.defineProperty(r, o, {
        get() {
            return t(), e[o]
        },
        enumerable: !0,
        configurable: !0
    });
    return r
}

function St(...e) {
    let t = 5381;
    for (const n of e)
        if (typeof n == "string") {
            let a = n.length;
            for (; a;) t = t * 33 ^ n.charCodeAt(--a)
        } else if (ArrayBuffer.isView(n)) {
        const a = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
        let r = a.length;
        for (; r;) t = t * 33 ^ a[--r]
    } else throw new TypeError("value must be a string or TypedArray");
    return (t >>> 0).toString(36)
}
const Rt = window.fetch;
window.fetch = (e, t) => ((e instanceof Request ? e.method : t ? .method || "GET") !== "GET" && M.delete(Ee(e)), Rt(e, t));
const M = new Map;

function Et(e, t) {
    const n = Ee(e, t),
        a = document.querySelector(n);
    if (a ? .textContent) {
        a.remove();
        let {
            body: r,
            ...i
        } = JSON.parse(a.textContent);
        const o = a.getAttribute("data-ttl");
        return o && M.set(n, {
            body: r,
            init: i,
            ttl: 1e3 * Number(o)
        }), a.getAttribute("data-b64") !== null && (r = _t(r)), Promise.resolve(new Response(r, i))
    }
    return window.fetch(e, t)
}

function xt(e, t, n) {
    if (M.size > 0) {
        const a = Ee(e, n),
            r = M.get(a);
        if (r) {
            if (performance.now() < r.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(n ? .cache)) return new Response(r.body, r.init);
            M.delete(a)
        }
    }
    return window.fetch(t, n)
}

function Ee(e, t) {
    let a = `script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;
    if (t ? .headers || t ? .body) {
        const r = [];
        t.headers && r.push([...new Headers(t.headers)].join(",")), t.body && (typeof t.body == "string" || ArrayBuffer.isView(t.body)) && r.push(t.body), a += `[data-hash="${St(...r)}"]`
    }
    return a
}
const Lt = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;

function At(e) {
    const t = [];
    return {
        pattern: e === "/" ? /^\/$/ : new RegExp(`^${Tt(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return t.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/([^]*))?";const i=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(i)return t.push({name:i[1],matcher:i[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const o=a.split(/\[(.+?)\](?!\])/);return"/"+o.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return he(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return he(String.fromCharCode(...c.slice(2).split("-").map(v=>parseInt(v,16))));const d=Lt.exec(c),[,h,f,u,p]=d;return t.push({name:u,matcher:p,optional:!!h,rest:!!f,chained:f?l===1&&o[0]==="":!1}),f?"([^]*?)":h?"([^/]*)?":"([^/]+?)"}return he(c)}).join("")}).join("")}/?$`),
        params: t
    }
}

function Ut(e) {
    return e !== "" && !/^\([^)]+\)$/.test(e)
}

function Tt(e) {
    return e.slice(1).split("/").filter(Ut)
}

function Pt(e, t, n) {
    const a = {},
        r = e.slice(1),
        i = r.filter(s => s !== void 0);
    let o = 0;
    for (let s = 0; s < t.length; s += 1) {
        const c = t[s];
        let l = r[s - o];
        if (c.chained && c.rest && o && (l = r.slice(s - o, s + 1).filter(d => d).join("/"), o = 0), l === void 0) {
            c.rest && (a[c.name] = "");
            continue
        }
        if (!c.matcher || n[c.matcher](l)) {
            a[c.name] = l;
            const d = t[s + 1],
                h = r[s + 1];
            d && !d.rest && d.optional && h && c.chained && (o = 0), !d && !h && Object.keys(a).length === i.length && (o = 0);
            continue
        }
        if (c.optional && c.chained) {
            o++;
            continue
        }
        return
    }
    if (!o) return a
}

function he(e) {
    return e.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&")
}

function It({
    nodes: e,
    server_loads: t,
    dictionary: n,
    matchers: a
}) {
    const r = new Set(t);
    return Object.entries(n).map(([s, [c, l, d]]) => {
        const {
            pattern: h,
            params: f
        } = At(s), u = {
            id: s,
            exec: p => {
                const v = h.exec(p);
                if (v) return Pt(v, f, a)
            },
            errors: [1, ...d || []].map(p => e[p]),
            layouts: [0, ...l || []].map(o),
            leaf: i(c)
        };
        return u.errors.length = u.layouts.length = Math.max(u.errors.length, u.layouts.length), u
    });

    function i(s) {
        const c = s < 0;
        return c && (s = ~s), [c, e[s]]
    }

    function o(s) {
        return s === void 0 ? s : [r.has(s), e[s]]
    }
}

function Ye(e, t = JSON.parse) {
    try {
        return t(sessionStorage[e])
    } catch {}
}

function Ve(e, t, n = JSON.stringify) {
    const a = n(t);
    try {
        sessionStorage[e] = a
    } catch {}
}
const L = globalThis.__sveltekit_k157o7 ? .base ? ? "",
    Ot = globalThis.__sveltekit_k157o7 ? .assets ? ? L ? ? "",
    Ct = "1775515606034",
    ze = "sveltekit:snapshot",
    Je = "sveltekit:scroll",
    Xe = "sveltekit:states",
    $t = "sveltekit:pageurl",
    B = "sveltekit:history",
    G = "sveltekit:navigation",
    N = {
        tap: 1,
        hover: 2,
        viewport: 3,
        eager: 4,
        off: -1,
        false: -1
    },
    xe = location.origin;

function Qe(e) {
    if (e instanceof URL) return e;
    let t = document.baseURI;
    if (!t) {
        const n = document.getElementsByTagName("base");
        t = n.length ? n[0].href : document.URL
    }
    return new URL(e, t)
}

function ce() {
    return {
        x: pageXOffset,
        y: pageYOffset
    }
}

function V(e, t) {
    return e.getAttribute(`data-sveltekit-${t}`)
}
const Be = { ...N,
    "": N.hover
};

function Ze(e) {
    let t = e.assignedSlot ? ? e.parentNode;
    return t ? .nodeType === 11 && (t = t.host), t
}

function et(e, t) {
    for (; e && e !== t;) {
        if (e.nodeName.toUpperCase() === "A" && e.hasAttribute("href")) return e;
        e = Ze(e)
    }
}

function me(e, t, n) {
    let a;
    try {
        if (a = new URL(e instanceof SVGAElement ? e.href.baseVal : e.href, document.baseURI), n && a.hash.match(/^#[^/]/)) {
            const s = location.hash.split("#")[1] || "/";
            a.hash = `#${s}${a.hash}`
        }
    } catch {}
    const r = e instanceof SVGAElement ? e.target.baseVal : e.target,
        i = !a || !!r || le(a, t, n) || (e.getAttribute("rel") || "").split(/\s+/).includes("external"),
        o = a ? .origin === xe && e.hasAttribute("download");
    return {
        url: a,
        external: i,
        target: r,
        download: o
    }
}

function ee(e) {
    let t = null,
        n = null,
        a = null,
        r = null,
        i = null,
        o = null,
        s = e;
    for (; s && s !== document.documentElement;) a === null && (a = V(s, "preload-code")), r === null && (r = V(s, "preload-data")), t === null && (t = V(s, "keepfocus")), n === null && (n = V(s, "noscroll")), i === null && (i = V(s, "reload")), o === null && (o = V(s, "replacestate")), s = Ze(s);

    function c(l) {
        switch (l) {
            case "":
            case "true":
                return !0;
            case "off":
            case "false":
                return !1;
            default:
                return
        }
    }
    return {
        preload_code: Be[a ? ? "off"],
        preload_data: Be[r ? ? "off"],
        keepfocus: c(t),
        noscroll: c(n),
        reload: c(i),
        replace_state: c(o)
    }
}

function He(e) {
    const t = Re(e);
    let n = !0;

    function a() {
        n = !0, t.update(o => o)
    }

    function r(o) {
        n = !1, t.set(o)
    }

    function i(o) {
        let s;
        return t.subscribe(c => {
            (s === void 0 || n && c !== s) && o(s = c)
        })
    }
    return {
        notify: a,
        set: r,
        subscribe: i
    }
}
const tt = {
    v: () => {}
};

function Nt() {
    const {
        set: e,
        subscribe: t
    } = Re(!1);
    let n;
    async function a() {
        clearTimeout(n);
        try {
            const r = await fetch(`${Ot}/_app/version.json`, {
                headers: {
                    pragma: "no-cache",
                    "cache-control": "no-cache"
                }
            });
            if (!r.ok) return !1;
            const o = (await r.json()).version !== Ct;
            return o && (e(!0), tt.v(), clearTimeout(n)), o
        } catch {
            return !1
        }
    }
    return {
        subscribe: t,
        check: a
    }
}

function le(e, t, n) {
    return e.origin !== xe || !e.pathname.startsWith(t) ? !0 : n ? e.pathname !== location.pathname : !1
}

function pn(e) {}
const nt = new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...nt];
const jt = new Set([...nt]);
[...jt];

function qt(e) {
    return e.filter(t => t != null)
}

function Le(e) {
    return e instanceof be || e instanceof ke ? e.status : 500
}

function Dt(e) {
    return e instanceof ke ? e.text : "Internal Error"
}
let k, W, pe;
const Vt = qe.toString().includes("$$") || /function \w+\(\) \{\}/.test(qe.toString());
Vt ? (k = {
    data: {},
    form: null,
    error: null,
    params: {},
    route: {
        id: null
    },
    state: {},
    status: -1,
    url: new URL("https://example.com")
}, W = {
    current: null
}, pe = {
    current: !1
}) : (k = new class {#
    e = U({});
    get data() {
        return T(this.#e)
    }
    set data(t) {
        P(this.#e, t)
    }#
    t = U(null);
    get form() {
        return T(this.#t)
    }
    set form(t) {
        P(this.#t, t)
    }#
    n = U(null);
    get error() {
        return T(this.#n)
    }
    set error(t) {
        P(this.#n, t)
    }#
    a = U({});
    get params() {
        return T(this.#a)
    }
    set params(t) {
        P(this.#a, t)
    }#
    r = U({
        id: null
    });
    get route() {
        return T(this.#r)
    }
    set route(t) {
        P(this.#r, t)
    }#
    o = U({});
    get state() {
        return T(this.#o)
    }
    set state(t) {
        P(this.#o, t)
    }#
    s = U(-1);
    get status() {
        return T(this.#s)
    }
    set status(t) {
        P(this.#s, t)
    }#
    i = U(new URL("https://example.com"));
    get url() {
        return T(this.#i)
    }
    set url(t) {
        P(this.#i, t)
    }
}, W = new class {#
    e = U(null);
    get current() {
        return T(this.#e)
    }
    set current(t) {
        P(this.#e, t)
    }
}, pe = new class {#
    e = U(!1);
    get current() {
        return T(this.#e)
    }
    set current(t) {
        P(this.#e, t)
    }
}, tt.v = () => pe.current = !0);

function at(e) {
    Object.assign(k, e)
}
const Ke = {
        spanContext() {
            return Bt
        },
        setAttribute() {
            return this
        },
        setAttributes() {
            return this
        },
        addEvent() {
            return this
        },
        setStatus() {
            return this
        },
        updateName() {
            return this
        },
        end() {
            return this
        },
        isRecording() {
            return !1
        },
        recordException() {
            return this
        },
        addLink() {
            return this
        },
        addLinks() {
            return this
        }
    },
    Bt = {
        traceId: "",
        spanId: "",
        traceFlags: 0
    },
    {
        onMount: Ht
    } = mt,
    Kt = new Set(["icon", "shortcut icon", "apple-touch-icon"]),
    q = Ye(Je) ? ? {},
    Y = Ye(ze) ? ? {},
    $ = {
        url: He({}),
        page: He({}),
        navigating: Re(null),
        updated: Nt()
    };

function Ae(e) {
    q[e] = ce()
}

function Mt(e, t) {
    let n = e + 1;
    for (; q[n];) delete q[n], n += 1;
    for (n = t + 1; Y[n];) delete Y[n], n += 1
}

function z(e, t = !1) {
    return t ? location.replace(e.href) : location.href = e.href, new Promise(() => {})
}
async function rt() {
    if ("serviceWorker" in navigator) {
        const e = await navigator.serviceWorker.getRegistration(L || "/");
        e && await e.update()
    }
}

function Me() {}
let Ue, _e, te, I, ve, w;
const ne = [],
    ae = [];
let E = null;

function we() {
    E ? .fork ? .then(e => e ? .discard()), E = null
}
const Q = new Map,
    Te = new Set,
    Ft = new Set,
    F = new Set;
let _ = {
        branch: [],
        error: null,
        url: null
    },
    ot = !1,
    re = !1,
    Fe = !0,
    J = !1,
    K = !1,
    st = !1,
    Pe = !1,
    Ie, y, x, j;
const oe = new Set,
    Ge = new Map;
async function vn(e, t, n) {
    globalThis.__sveltekit_k157o7 ? .data && globalThis.__sveltekit_k157o7.data, document.URL !== location.href && (location.href = location.href), w = e, await e.hooks.init ? .(), Ue = It(e), I = document.documentElement, ve = t, _e = e.nodes[0], te = e.nodes[1], _e(), te(), y = history.state ? .[B], x = history.state ? .[G], y || (y = x = Date.now(), history.replaceState({ ...history.state,
        [B]: y,
        [G]: x
    }, ""));
    const a = q[y];

    function r() {
        a && (history.scrollRestoration = "manual", scrollTo(a.x, a.y))
    }
    n ? (r(), await on(ve, n)) : (await H({
        type: "enter",
        url: Qe(w.hash ? ln(new URL(location.href)) : location.href),
        replace_state: !0
    }), r()), rn()
}

function Gt() {
    ne.length = 0, Pe = !1
}

function it(e) {
    ae.some(t => t ? .snapshot) && (Y[e] = ae.map(t => t ? .snapshot ? .capture()))
}

function ct(e) {
    Y[e] ? .forEach((t, n) => {
        ae[n] ? .snapshot ? .restore(t)
    })
}

function We() {
    Ae(y), Ve(Je, q), it(x), Ve(ze, Y)
}
async function Wt(e, t, n, a) {
    let r;
    t.invalidateAll && we(), await H({
        type: "goto",
        url: Qe(e),
        keepfocus: t.keepFocus,
        noscroll: t.noScroll,
        replace_state: t.replaceState,
        state: t.state,
        redirect_count: n,
        nav_token: a,
        accept: () => {
            t.invalidateAll && (Pe = !0, r = [...Ge.keys()]), t.invalidate && t.invalidate.forEach(an)
        }
    }), t.invalidateAll && Z().then(Z).then(() => {
        Ge.forEach(({
            resource: i
        }, o) => {
            r ? .includes(o) && i.refresh ? .()
        })
    })
}
async function Yt(e) {
    if (e.id !== E ? .id) {
        we();
        const t = {};
        if (oe.add(t), E = {
                id: e.id,
                token: t,
                promise: ft({ ...e,
                    preload: t
                }).then(n => (oe.delete(t), n.type === "loaded" && n.state.error && we(), n)),
                fork: null
            }, De) {
            const n = E;
            n.fork = n.promise.then(a => {
                if (n === E && a.type === "loaded") try {
                    return De(() => {
                        Ie.$set(a.props), at(a.props.page)
                    })
                } catch {}
                return null
            })
        }
    }
    return E.promise
}
async function ge(e) {
    const t = (await ue(e, !1)) ? .route;
    t && await Promise.all([...t.layouts, t.leaf].map(n => n ? .[1]()))
}
async function lt(e, t, n) {
    _ = e.state;
    const a = document.querySelector("style[data-sveltekit]");
    if (a && a.remove(), Object.assign(k, e.props.page), Ie = new w.root({
            target: t,
            props: { ...e.props,
                stores: $,
                components: ae
            },
            hydrate: n,
            sync: !1
        }), await Promise.resolve(), ct(x), n) {
        const r = {
            from: null,
            to: {
                params: _.params,
                route: {
                    id: _.route ? .id ? ? null
                },
                url: new URL(location.href)
            },
            willUnload: !1,
            type: "enter",
            complete: Promise.resolve()
        };
        F.forEach(i => i(r))
    }
    re = !0
}

function se({
    url: e,
    params: t,
    branch: n,
    status: a,
    error: r,
    route: i,
    form: o
}) {
    let s = "never";
    if (L && (e.pathname === L || e.pathname === L + "/")) s = "always";
    else
        for (const u of n) u ? .slash !== void 0 && (s = u.slash);
    e.pathname = wt(e.pathname, s), e.search = e.search;
    const c = {
        type: "loaded",
        state: {
            url: e,
            params: t,
            branch: n,
            error: r,
            route: i
        },
        props: {
            constructors: qt(n).map(u => u.node.component),
            page: je(k)
        }
    };
    o !== void 0 && (c.props.form = o);
    let l = {},
        d = !k,
        h = 0;
    for (let u = 0; u < Math.max(n.length, _.branch.length); u += 1) {
        const p = n[u],
            v = _.branch[u];
        p ? .data !== v ? .data && (d = !0), p && (l = { ...l,
            ...p.data
        }, d && (c.props[`data_${h}`] = l), h += 1)
    }
    return (!_.url || e.href !== _.url.href || _.error !== r || o !== void 0 && o !== k.form || d) && (c.props.page = {
        error: r,
        params: t,
        route: {
            id: i ? .id ? ? null
        },
        state: {},
        status: a,
        url: new URL(e),
        form: o ? ? null,
        data: d ? l : k.data
    }), c
}
async function Oe({
    loader: e,
    parent: t,
    url: n,
    params: a,
    route: r,
    server_data_node: i
}) {
    let o = null,
        s = !0;
    const c = {
            dependencies: new Set,
            params: new Set,
            parent: !1,
            route: !1,
            url: !1,
            search_params: new Set
        },
        l = await e();
    if (l.universal ? .load) {
        let d = function(...f) {
            for (const u of f) {
                const {
                    href: p
                } = new URL(u, n);
                c.dependencies.add(p)
            }
        };
        const h = {
            tracing: {
                enabled: !1,
                root: Ke,
                current: Ke
            },
            route: new Proxy(r, {
                get: (f, u) => (s && (c.route = !0), f[u])
            }),
            params: new Proxy(a, {
                get: (f, u) => (s && c.params.add(u), f[u])
            }),
            data: i ? .data ? ? null,
            url: kt(n, () => {
                s && (c.url = !0)
            }, f => {
                s && c.search_params.add(f)
            }, w.hash),
            async fetch(f, u) {
                f instanceof Request && (u = {
                    body: f.method === "GET" || f.method === "HEAD" ? void 0 : await f.blob(),
                    cache: f.cache,
                    credentials: f.credentials,
                    headers: [...f.headers].length > 0 ? f ? .headers : void 0,
                    integrity: f.integrity,
                    keepalive: f.keepalive,
                    method: f.method,
                    mode: f.mode,
                    redirect: f.redirect,
                    referrer: f.referrer,
                    referrerPolicy: f.referrerPolicy,
                    signal: f.signal,
                    ...u
                });
                const {
                    resolved: p,
                    promise: v
                } = ut(f, u, n);
                return s && d(p.href), v
            },
            setHeaders: () => {},
            depends: d,
            parent() {
                return s && (c.parent = !0), t()
            },
            untrack(f) {
                s = !1;
                try {
                    return f()
                } finally {
                    s = !0
                }
            }
        };
        o = await l.universal.load.call(null, h) ? ? null
    }
    return {
        node: l,
        loader: e,
        server: i,
        universal: l.universal ? .load ? {
            type: "data",
            data: o,
            uses: c
        } : null,
        data: o ? ? i ? .data ? ? null,
        slash: l.universal ? .trailingSlash ? ? i ? .slash
    }
}

function ut(e, t, n) {
    let a = e instanceof Request ? e.url : e;
    const r = new URL(a, n);
    r.origin === n.origin && (a = r.href.slice(n.origin.length));
    const i = re ? xt(a, r.href, t) : Et(a, t);
    return {
        resolved: r,
        promise: i
    }
}

function zt(e, t, n, a, r, i) {
    if (Pe) return !0;
    if (!r) return !1;
    if (r.parent && e || r.route && t || r.url && n) return !0;
    for (const o of r.search_params)
        if (a.has(o)) return !0;
    for (const o of r.params)
        if (i[o] !== _.params[o]) return !0;
    for (const o of r.dependencies)
        if (ne.some(s => s(new URL(o)))) return !0;
    return !1
}

function Ce(e, t) {
    return e ? .type === "data" ? e : e ? .type === "skip" ? t ? ? null : null
}

function Jt(e, t) {
    if (!e) return new Set(t.searchParams.keys());
    const n = new Set([...e.searchParams.keys(), ...t.searchParams.keys()]);
    for (const a of n) {
        const r = e.searchParams.getAll(a),
            i = t.searchParams.getAll(a);
        r.every(o => i.includes(o)) && i.every(o => r.includes(o)) && n.delete(a)
    }
    return n
}

function Xt({
    error: e,
    url: t,
    route: n,
    params: a
}) {
    return {
        type: "loaded",
        state: {
            error: e,
            url: t,
            route: n,
            params: a,
            branch: []
        },
        props: {
            page: je(k),
            constructors: []
        }
    }
}
async function ft({
    id: e,
    invalidating: t,
    url: n,
    params: a,
    route: r,
    preload: i
}) {
    if (E ? .id === e) return oe.delete(E.token), E.promise;
    const {
        errors: o,
        layouts: s,
        leaf: c
    } = r, l = [...s, c];
    o.forEach(m => m ? .().catch(() => {})), l.forEach(m => m ? .[1]().catch(() => {}));
    const d = _.url ? e !== ie(_.url) : !1,
        h = _.route ? r.id !== _.route.id : !1,
        f = Jt(_.url, n);
    let u = !1;
    const p = l.map(async (m, g) => {
        if (!m) return;
        const S = _.branch[g];
        return m[1] === S ? .loader && !zt(u, h, d, f, S.universal ? .uses, a) ? S : (u = !0, Oe({
            loader: m[1],
            url: n,
            params: a,
            route: r,
            parent: async () => {
                const O = {};
                for (let A = 0; A < g; A += 1) Object.assign(O, (await p[A]) ? .data);
                return O
            },
            server_data_node: Ce(m[0] ? {
                type: "skip"
            } : null, m[0] ? S ? .server : void 0)
        }))
    });
    for (const m of p) m.catch(() => {});
    const v = [];
    for (let m = 0; m < l.length; m += 1)
        if (l[m]) try {
            v.push(await p[m])
        } catch (g) {
            if (g instanceof Se) return {
                type: "redirect",
                location: g.location
            };
            if (oe.has(i)) return Xt({
                error: await X(g, {
                    params: a,
                    url: n,
                    route: {
                        id: r.id
                    }
                }),
                url: n,
                params: a,
                route: r
            });
            let S = Le(g),
                R;
            if (g instanceof be) R = g.body;
            else {
                if (await $.updated.check()) return await rt(), await z(n);
                R = await X(g, {
                    params: a,
                    url: n,
                    route: {
                        id: r.id
                    }
                })
            }
            const O = await Qt(m, v, o);
            return O ? se({
                url: n,
                params: a,
                branch: v.slice(0, O.idx).concat(O.node),
                status: S,
                error: R,
                route: r
            }) : await ht(n, {
                id: r.id
            }, R, S)
        } else v.push(void 0);
    return se({
        url: n,
        params: a,
        branch: v,
        status: 200,
        error: null,
        route: r,
        form: t ? void 0 : null
    })
}
async function Qt(e, t, n) {
    for (; e--;)
        if (n[e]) {
            let a = e;
            for (; !t[a];) a -= 1;
            try {
                return {
                    idx: a + 1,
                    node: {
                        node: await n[e](),
                        loader: n[e],
                        data: {},
                        server: null,
                        universal: null
                    }
                }
            } catch {
                continue
            }
        }
}
async function $e({
    status: e,
    error: t,
    url: n,
    route: a
}) {
    const r = {};
    let i = null;
    try {
        const o = await Oe({
                loader: _e,
                url: n,
                params: r,
                route: a,
                parent: () => Promise.resolve({}),
                server_data_node: Ce(i)
            }),
            s = {
                node: await te(),
                loader: te,
                universal: null,
                server: null,
                data: null
            };
        return se({
            url: n,
            params: r,
            branch: [o, s],
            status: e,
            error: t,
            route: null
        })
    } catch (o) {
        if (o instanceof Se) return Wt(new URL(o.location, location.href), {}, 0);
        throw o
    }
}
async function Zt(e) {
    const t = e.href;
    if (Q.has(t)) return Q.get(t);
    let n;
    try {
        const a = (async () => {
            let r = await w.hooks.reroute({
                url: new URL(e),
                fetch: async (i, o) => ut(i, o, e).promise
            }) ? ? e;
            if (typeof r == "string") {
                const i = new URL(e);
                w.hash ? i.hash = r : i.pathname = r, r = i
            }
            return r
        })();
        Q.set(t, a), n = await a
    } catch {
        Q.delete(t);
        return
    }
    return n
}
async function ue(e, t) {
    if (e && !le(e, L, w.hash)) {
        const n = await Zt(e);
        if (!n) return;
        const a = en(n);
        for (const r of Ue) {
            const i = r.exec(a);
            if (i) return {
                id: ie(e),
                invalidating: t,
                route: r,
                params: bt(i),
                url: e
            }
        }
    }
}

function en(e) {
    return yt(w.hash ? e.hash.replace(/^#/, "").replace(/[?#].+/, "") : e.pathname.slice(L.length)) || "/"
}

function ie(e) {
    return (w.hash ? e.hash.replace(/^#/, "") : e.pathname) + e.search
}

function dt({
    url: e,
    type: t,
    intent: n,
    delta: a,
    event: r
}) {
    let i = !1;
    const o = Ne(_, n, e, t);
    a !== void 0 && (o.navigation.delta = a), r !== void 0 && (o.navigation.event = r);
    const s = { ...o.navigation,
        cancel: () => {
            i = !0, o.reject(new Error("navigation cancelled"))
        }
    };
    return J || Te.forEach(c => c(s)), i ? null : o
}
async function H({
    type: e,
    url: t,
    popped: n,
    keepfocus: a,
    noscroll: r,
    replace_state: i,
    state: o = {},
    redirect_count: s = 0,
    nav_token: c = {},
    accept: l = Me,
    block: d = Me,
    event: h
}) {
    const f = j;
    j = c;
    const u = await ue(t, !1),
        p = e === "enter" ? Ne(_, u, t, e) : dt({
            url: t,
            type: e,
            delta: n ? .delta,
            intent: u,
            event: h
        });
    if (!p) {
        d(), j === c && (j = f);
        return
    }
    const v = y,
        m = x;
    l(), J = !0, re && p.navigation.type !== "enter" && $.navigating.set(W.current = p.navigation);
    let g = u && await ft(u);
    if (!g) {
        if (le(t, L, w.hash)) return await z(t, i);
        g = await ht(t, {
            id: null
        }, await X(new ke(404, "Not Found", `Not found: ${t.pathname}`), {
            url: t,
            params: {},
            route: {
                id: null
            }
        }), 404, i)
    }
    if (t = u ? .url || t, j !== c) return p.reject(new Error("navigation aborted")), !1;
    if (g.type === "redirect") {
        if (s < 20) {
            await H({
                type: e,
                url: new URL(g.location, t),
                popped: n,
                keepfocus: a,
                noscroll: r,
                replace_state: i,
                state: o,
                redirect_count: s + 1,
                nav_token: c
            }), p.fulfil(void 0);
            return
        }
        g = await $e({
            status: 500,
            error: await X(new Error("Redirect loop"), {
                url: t,
                params: {},
                route: {
                    id: null
                }
            }),
            url: t,
            route: {
                id: null
            }
        })
    } else g.props.page.status >= 400 && await $.updated.check() && (await rt(), await z(t, i));
    if (Gt(), Ae(v), it(m), g.props.page.url.pathname !== t.pathname && (t.pathname = g.props.page.url.pathname), o = n ? n.state : o, !n) {
        const b = i ? 0 : 1,
            D = {
                [B]: y += b,
                [G]: x += b,
                [Xe]: o
            };
        (i ? history.replaceState : history.pushState).call(history, D, "", t), i || Mt(y, x)
    }
    const S = u && E ? .id === u.id ? E.fork : null;
    E = null, g.props.page.state = o;
    let R;
    if (re) {
        const b = (await Promise.all(Array.from(Ft, C => C(p.navigation)))).filter(C => typeof C == "function");
        if (b.length > 0) {
            let C = function() {
                b.forEach(fe => {
                    F.delete(fe)
                })
            };
            b.push(C), b.forEach(fe => {
                F.add(fe)
            })
        }
        _ = g.state, g.props.page && (g.props.page.url = t);
        const D = S && await S;
        D ? R = D.commit() : (Ie.$set(g.props), at(g.props.page), R = vt ? .()), st = !0
    } else await lt(g, ve, !1);
    const {
        activeElement: O
    } = document;
    await R, await Z(), await Z();
    let A = n ? n.scroll : r ? ce() : null;
    if (Fe) {
        const b = t.hash && document.getElementById(pt(t));
        if (A) scrollTo(A.x, A.y);
        else if (b) {
            b.scrollIntoView();
            const {
                top: D,
                left: C
            } = b.getBoundingClientRect();
            A = {
                x: pageXOffset + C,
                y: pageYOffset + D
            }
        } else scrollTo(0, 0)
    }
    const gt = document.activeElement !== O && document.activeElement !== document.body;
    !a && !gt && cn(t, A), Fe = !0, g.props.page && Object.assign(k, g.props.page), J = !1, e === "popstate" && ct(x), p.fulfil(void 0), F.forEach(b => b(p.navigation)), $.navigating.set(W.current = null)
}
async function ht(e, t, n, a, r) {
    return e.origin === xe && e.pathname === location.pathname && !ot ? await $e({
        status: a,
        error: n,
        url: e,
        route: t
    }) : await z(e, r)
}

function tn() {
    let e, t, n;
    I.addEventListener("mousemove", s => {
        const c = s.target;
        clearTimeout(e), e = setTimeout(() => {
            i(c, N.hover)
        }, 20)
    });

    function a(s) {
        s.defaultPrevented || i(s.composedPath()[0], N.tap)
    }
    I.addEventListener("mousedown", a), I.addEventListener("touchstart", a, {
        passive: !0
    });
    const r = new IntersectionObserver(s => {
        for (const c of s) c.isIntersecting && (ge(new URL(c.target.href)), r.unobserve(c.target))
    }, {
        threshold: 0
    });
    async function i(s, c) {
        const l = et(s, I),
            d = l === t && c >= n;
        if (!l || d) return;
        const {
            url: h,
            external: f,
            download: u
        } = me(l, L, w.hash);
        if (f || u) return;
        const p = ee(l),
            v = h && ie(_.url) === ie(h);
        if (!(p.reload || v))
            if (c <= p.preload_data) {
                t = l, n = N.tap;
                const m = await ue(h, !1);
                if (!m) return;
                Yt(m)
            } else c <= p.preload_code && (t = l, n = c, ge(h))
    }

    function o() {
        r.disconnect();
        for (const s of I.querySelectorAll("a")) {
            const {
                url: c,
                external: l,
                download: d
            } = me(s, L, w.hash);
            if (l || d) continue;
            const h = ee(s);
            h.reload || (h.preload_code === N.viewport && r.observe(s), h.preload_code === N.eager && ge(c))
        }
    }
    F.add(o), o()
}

function X(e, t) {
    if (e instanceof be) return e.body;
    const n = Le(e),
        a = Dt(e);
    return w.hooks.handleError({
        error: e,
        event: t,
        status: n,
        message: a
    }) ? ? {
        message: a
    }
}

function nn(e, t) {
    Ht(() => (e.add(t), () => {
        e.delete(t)
    }))
}

function wn(e) {
    nn(Te, e)
}

function an(e) {
    if (typeof e == "function") ne.push(e);
    else {
        const {
            href: t
        } = new URL(e, location.href);
        ne.push(n => n.href === t)
    }
}

function rn() {
    history.scrollRestoration = "manual", addEventListener("beforeunload", t => {
        let n = !1;
        if (We(), !J) {
            const a = Ne(_, void 0, null, "leave"),
                r = { ...a.navigation,
                    cancel: () => {
                        n = !0, a.reject(new Error("navigation cancelled"))
                    }
                };
            Te.forEach(i => i(r))
        }
        n ? (t.preventDefault(), t.returnValue = "") : history.scrollRestoration = "auto"
    }), addEventListener("visibilitychange", () => {
        document.visibilityState === "hidden" && We()
    }), navigator.connection ? .saveData || tn(), I.addEventListener("click", async t => {
        if (t.button || t.which !== 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.defaultPrevented) return;
        const n = et(t.composedPath()[0], I);
        if (!n) return;
        const {
            url: a,
            external: r,
            target: i,
            download: o
        } = me(n, L, w.hash);
        if (!a) return;
        if (i === "_parent" || i === "_top") {
            if (window.parent !== window) return
        } else if (i && i !== "_self") return;
        const s = ee(n);
        if (!(n instanceof SVGAElement) && a.protocol !== location.protocol && !(a.protocol === "https:" || a.protocol === "http:") || o) return;
        const [l, d] = (w.hash ? a.hash.replace(/^#/, "") : a.href).split("#"), h = l === de(location);
        if (r || s.reload && (!h || !d)) {
            dt({
                url: a,
                type: "link",
                event: t
            }) ? J = !0 : t.preventDefault();
            return
        }
        if (d !== void 0 && h) {
            const [, f] = _.url.href.split("#");
            if (f === d) {
                if (t.preventDefault(), d === "" || d === "top" && n.ownerDocument.getElementById("top") === null) scrollTo({
                    top: 0
                });
                else {
                    const u = n.ownerDocument.getElementById(decodeURIComponent(d));
                    u && (u.scrollIntoView(), u.focus())
                }
                return
            }
            if (K = !0, Ae(y), e(a), !s.replace_state) return;
            K = !1
        }
        t.preventDefault(), await new Promise(f => {
            requestAnimationFrame(() => {
                setTimeout(f, 0)
            }), setTimeout(f, 100)
        }), await H({
            type: "link",
            url: a,
            keepfocus: s.keepfocus,
            noscroll: s.noscroll,
            replace_state: s.replace_state ? ? a.href === location.href,
            event: t
        })
    }), I.addEventListener("submit", t => {
        if (t.defaultPrevented) return;
        const n = HTMLFormElement.prototype.cloneNode.call(t.target),
            a = t.submitter;
        if ((a ? .formTarget || n.target) === "_blank" || (a ? .formMethod || n.method) !== "get") return;
        const o = new URL(a ? .hasAttribute("formaction") && a ? .formAction || n.action);
        if (le(o, L, !1)) return;
        const s = t.target,
            c = ee(s);
        if (c.reload) return;
        t.preventDefault(), t.stopPropagation();
        const l = new FormData(s, a);
        o.search = new URLSearchParams(l).toString(), H({
            type: "form",
            url: o,
            keepfocus: c.keepfocus,
            noscroll: c.noscroll,
            replace_state: c.replace_state ? ? o.href === location.href,
            event: t
        })
    }), addEventListener("popstate", async t => {
        if (!ye) {
            if (t.state ? .[B]) {
                const n = t.state[B];
                if (j = {}, n === y) return;
                const a = q[n],
                    r = t.state[Xe] ? ? {},
                    i = new URL(t.state[$t] ? ? location.href),
                    o = t.state[G],
                    s = _.url ? de(location) === de(_.url) : !1;
                if (o === x && (st || s)) {
                    r !== k.state && (k.state = r), e(i), q[y] = ce(), a && scrollTo(a.x, a.y), y = n;
                    return
                }
                const l = n - y;
                await H({
                    type: "popstate",
                    url: i,
                    popped: {
                        state: r,
                        scroll: a,
                        delta: l
                    },
                    accept: () => {
                        y = n, x = o
                    },
                    block: () => {
                        history.go(-l)
                    },
                    nav_token: j,
                    event: t
                })
            } else if (!K) {
                const n = new URL(location.href);
                e(n), w.hash && location.reload()
            }
        }
    }), addEventListener("hashchange", () => {
        K && (K = !1, history.replaceState({ ...history.state,
            [B]: ++y,
            [G]: x
        }, "", location.href))
    });
    for (const t of document.querySelectorAll("link")) Kt.has(t.rel) && (t.href = t.href);
    addEventListener("pageshow", t => {
        t.persisted && $.navigating.set(W.current = null)
    });

    function e(t) {
        _.url = k.url = t, $.page.set(je(k)), $.page.notify()
    }
}
async function on(e, {
    status: t = 200,
    error: n,
    node_ids: a,
    params: r,
    route: i,
    server_route: o,
    data: s,
    form: c
}) {
    ot = !0;
    const l = new URL(location.href);
    let d;
    ({
        params: r = {},
        route: i = {
            id: null
        }
    } = await ue(l, !1) || {}), d = Ue.find(({
        id: u
    }) => u === i.id);
    let h, f = !0;
    try {
        const u = a.map(async (v, m) => {
                const g = s[m];
                return g ? .uses && (g.uses = sn(g.uses)), Oe({
                    loader: w.nodes[v],
                    url: l,
                    params: r,
                    route: i,
                    parent: async () => {
                        const S = {};
                        for (let R = 0; R < m; R += 1) Object.assign(S, (await u[R]).data);
                        return S
                    },
                    server_data_node: Ce(g)
                })
            }),
            p = await Promise.all(u);
        if (d) {
            const v = d.layouts;
            for (let m = 0; m < v.length; m++) v[m] || p.splice(m, 0, void 0)
        }
        h = se({
            url: l,
            params: r,
            branch: p,
            status: t,
            error: n,
            form: c,
            route: d ? ? null
        })
    } catch (u) {
        if (u instanceof Se) {
            await z(new URL(u.location, location.href));
            return
        }
        h = await $e({
            status: Le(u),
            error: await X(u, {
                url: l,
                params: r,
                route: i
            }),
            url: l,
            route: i
        }), e.textContent = "", f = !1
    }
    h.props.page && (h.props.page.state = {}), await lt(h, e, f)
}

function sn(e) {
    return {
        dependencies: new Set(e ? .dependencies ? ? []),
        params: new Set(e ? .params ? ? []),
        parent: !!e ? .parent,
        route: !!e ? .route,
        url: !!e ? .url,
        search_params: new Set(e ? .search_params ? ? [])
    }
}
let ye = !1;

function cn(e, t = null) {
    const n = document.querySelector("[autofocus]");
    if (n) n.focus();
    else {
        const a = pt(e);
        if (a && document.getElementById(a)) {
            const {
                x: i,
                y: o
            } = t ? ? ce();
            setTimeout(() => {
                const s = history.state;
                ye = !0, location.replace(`#${a}`), w.hash && location.replace(e.hash), history.replaceState(s, "", e.hash), scrollTo(i, o), ye = !1
            })
        } else {
            const i = document.body,
                o = i.getAttribute("tabindex");
            i.tabIndex = -1, i.focus({
                preventScroll: !0,
                focusVisible: !1
            }), o !== null ? i.setAttribute("tabindex", o) : i.removeAttribute("tabindex")
        }
        const r = getSelection();
        if (r && r.type !== "None") {
            const i = [];
            for (let o = 0; o < r.rangeCount; o += 1) i.push(r.getRangeAt(o));
            setTimeout(() => {
                if (r.rangeCount === i.length) {
                    for (let o = 0; o < r.rangeCount; o += 1) {
                        const s = i[o],
                            c = r.getRangeAt(o);
                        if (s.commonAncestorContainer !== c.commonAncestorContainer || s.startContainer !== c.startContainer || s.endContainer !== c.endContainer || s.startOffset !== c.startOffset || s.endOffset !== c.endOffset) return
                    }
                    r.removeAllRanges()
                }
            })
        }
    }
}

function Ne(e, t, n, a) {
    let r, i;
    const o = new Promise((c, l) => {
        r = c, i = l
    });
    return o.catch(() => {}), {
        navigation: {
            from: {
                params: e.params,
                route: {
                    id: e.route ? .id ? ? null
                },
                url: e.url
            },
            to: n && {
                params: t ? .params ? ? null,
                route: {
                    id: t ? .route ? .id ? ? null
                },
                url: n
            },
            willUnload: !t,
            type: a,
            complete: o
        },
        fulfil: r,
        reject: i
    }
}

function je(e) {
    return {
        data: e.data,
        error: e.error,
        form: e.form,
        params: e.params,
        route: e.route,
        state: e.state,
        status: e.status,
        url: e.url
    }
}

function ln(e) {
    const t = new URL(e);
    return t.hash = decodeURIComponent(e.hash), t
}

function pt(e) {
    let t;
    if (w.hash) {
        const [, , n] = e.hash.split("#", 3);
        t = n ? ? ""
    } else t = e.hash.slice(1);
    return decodeURIComponent(t)
}
export {
    vn as a, wn as b, pn as l, k as p, $ as s
};