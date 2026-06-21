import "../chunks/DsnmJJEf.js";
import {
    aa as et,
    e as at,
    h as rt,
    v as st,
    B as nt,
    aj as ot,
    E as it,
    bj as ct,
    bk as lt,
    b8 as ft,
    n as ut,
    bl as pt,
    bm as mt,
    bn as vt,
    an as Z,
    bo as dt,
    V as ht,
    aJ as F,
    ai as gt,
    a as M,
    a6 as X,
    a7 as Y,
    b as O,
    f as z,
    Z as d,
    a9 as R,
    bp as _t,
    bq as bt,
    as as U,
    at as yt,
    _ as q,
    au as V,
    p as N,
    a8 as G,
    a0 as E,
    $ as wt
} from "../chunks/CqXL5qBA.js";
import {
    a as kt,
    c as xt,
    s as Tt
} from "../chunks/Dd-87xu5.js";
import {
    s as Pt
} from "../chunks/o7ZGrj9p.js";
import {
    c as St
} from "../chunks/BD3OeZ-l.js";
import {
    e as Nt,
    i as jt
} from "../chunks/DdKNC-Eu.js";
import {
    s as g,
    b as Ct
} from "../chunks/Ba2ddaxQ.js";
import {
    p as k
} from "../chunks/B-XBmSK_.js";
import "../chunks/DL2WV3pP.js";
import {
    i as Et
} from "../chunks/Dhdvka5c.js";
import {
    h as It
} from "../chunks/WLrLCz0C.js";
import {
    p as H,
    s as qt,
    a as Ft
} from "../chunks/DAx4O-4V.js";
import {
    s as Mt,
    b as Ot
} from "../chunks/CJ9S1oSB.js";
import {
    o as At
} from "../chunks/DS87nQgO.js";

function Rt(e, t, a) {
    rt && st();
    var r = new nt(e),
        s = !et();
    at(() => {
        var n = t();
        s && n !== null && typeof n == "object" && (n = {}), r.ensure(n, a)
    })
}
const $t = () => performance.now(),
    j = {
        tick: e => requestAnimationFrame(e),
        now: () => $t(),
        tasks: new Set
    };

function tt() {
    const e = j.now();
    j.tasks.forEach(t => {
        t.c(e) || (j.tasks.delete(t), t.f())
    }), j.tasks.size !== 0 && j.tick(tt)
}

function Bt(e) {
    let t;
    return j.tasks.size === 0 && j.tick(tt), {
        promise: new Promise(a => {
            j.tasks.add(t = {
                c: e,
                f: a
            })
        }),
        abort() {
            j.tasks.delete(t)
        }
    }
}

function A(e, t) {
    Z(() => {
        e.dispatchEvent(new CustomEvent(t))
    })
}

function Lt(e) {
    if (e === "float") return "cssFloat";
    if (e === "offset") return "cssOffset";
    if (e.startsWith("--")) return e;
    const t = e.split("-");
    return t.length === 1 ? t[0] : t[0] + t.slice(1).map(a => a[0].toUpperCase() + a.slice(1)).join("")
}

function J(e) {
    const t = {},
        a = e.split(";");
    for (const r of a) {
        const [s, n] = r.split(":");
        if (!s || n === void 0) break;
        const f = Lt(s.trim());
        t[f] = n.trim()
    }
    return t
}
const zt = e => e;

function K(e, t, a, r) {
    var s = (e & mt) !== 0,
        n = (e & vt) !== 0,
        f = s && n,
        _ = (e & pt) !== 0,
        b = f ? "both" : s ? "in" : "out",
        m, p = t.inert,
        x = t.style.overflow,
        u, v;

    function h() {
        return Z(() => m ? ? = a()(t, r ? .() ? ? {}, {
            direction: b
        }))
    }
    var l = {
            is_global: _,
            in () {
                if (t.inert = p, !s) {
                    v ? .abort(), v ? .reset ? .();
                    return
                }
                n || u ? .abort(), A(t, "introstart"), u = D(t, h(), v, 1, () => {
                    A(t, "introend"), u ? .abort(), u = m = void 0, t.style.overflow = x
                })
            },
            out(w) {
                if (!n) {
                    w ? .(), m = void 0;
                    return
                }
                t.inert = !0, A(t, "outrostart"), v = D(t, h(), u, 0, () => {
                    A(t, "outroend"), w ? .()
                })
            },
            stop: () => {
                u ? .abort(), v ? .abort()
            }
        },
        o = ot;
    if ((o.nodes.t ? ? = []).push(l), s && kt) {
        var c = _;
        if (!c) {
            for (var i = o.parent; i && (i.f & it) !== 0;)
                for (;
                    (i = i.parent) && (i.f & ct) === 0;);
            c = !i || (i.f & lt) !== 0
        }
        c && ft(() => {
            ut(() => l.in())
        })
    }
}

function D(e, t, a, r, s) {
    var n = r === 1;
    if (dt(t)) {
        var f, _ = !1;
        return ht(() => {
            if (!_) {
                var o = t({
                    direction: n ? "in" : "out"
                });
                f = D(e, o, a, r, s)
            }
        }), {
            abort: () => {
                _ = !0, f ? .abort()
            },
            deactivate: () => f.deactivate(),
            reset: () => f.reset(),
            t: () => f.t()
        }
    }
    if (a ? .deactivate(), !t ? .duration) return s(), {
        abort: F,
        deactivate: F,
        reset: F,
        t: () => r
    };
    const {
        delay: b = 0,
        css: m,
        tick: p,
        easing: x = zt
    } = t;
    var u = [];
    if (n && a === void 0 && (p && p(0, 1), m)) {
        var v = J(m(0, 1));
        u.push(v, v)
    }
    var h = () => 1 - r,
        l = e.animate(u, {
            duration: b,
            fill: "forwards"
        });
    return l.onfinish = () => {
        l.cancel();
        var o = a ? .t() ? ? 1 - r;
        a ? .abort();
        var c = r - o,
            i = t.duration * Math.abs(c),
            w = [];
        if (i > 0) {
            var y = !1;
            if (m)
                for (var T = Math.ceil(i / 16.666666666666668), C = 0; C <= T; C += 1) {
                    var I = o + c * x(C / T),
                        S = J(m(I, 1 - I));
                    w.push(S), y || = S.overflow === "hidden"
                }
            y && (e.style.overflow = "hidden"), h = () => {
                var P = l.currentTime;
                return o + c * x(P / i)
            }, p && Bt(() => {
                if (l.playState !== "running") return !1;
                var P = h();
                return p(P, 1 - P), !0
            })
        }
        l = e.animate(w, {
            duration: i,
            fill: "forwards"
        }), l.onfinish = () => {
            h = () => r, p ? .(r, 1 - r), s()
        }
    }, {
        abort: () => {
            l && (l.cancel(), l.effect = null, l.onfinish = F)
        },
        deactivate: () => {
            s = F
        },
        reset: () => {
            r === 0 && p ? .(1, 0)
        },
        t: () => h()
    }
}
const Dt = !0,
    Ut = () => ({
        meta: {
            title: "abusov",
            description: "my website/portfolio/blog."
        }
    }),
    ye = Object.freeze(Object.defineProperty({
        __proto__: null,
        load: Ut,
        prerender: Dt
    }, Symbol.toStringTag, {
        value: "Module"
    }));
var Vt = gt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="-14.06 2.36 292.69 259.89" class="svelte-1l8nvlt"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="19.844"><path d="m71.107 238.27 122.37-211.95" stroke="#bd63ee"></path><path d="M193.48 238.27 71.11 26.32" stroke="#6262ee"></path><path d="M9.9219 132.29h244.74" stroke="#26bbd9"></path></g></svg>');

function Gt(e) {
    var t = Vt();
    M(e, t)
}
const Ht = () => {
        const e = Mt;
        return {
            page: {
                subscribe: e.page.subscribe
            },
            navigating: {
                subscribe: e.navigating.subscribe
            },
            updated: e.updated
        }
    },
    Jt = {
        subscribe(e) {
            return Ht().page.subscribe(e)
        }
    };
var Kt = O('<meta property="og:image"/> <meta property="og:image:width"/> <meta property="og:image:height"/> <meta property="og:image:alt"/> <meta name="twitter:image"/> <meta name="twitter:image:alt"/>', 1),
    Qt = O('<meta name="description"/> <meta property="og:site_name" content="abusov.com"/> <meta property="og:title"/> <meta property="og:type"/> <meta property="og:description"/> <meta property="og:url"/> <meta name="twitter:card" content="summary"/> <meta name="twitter:site" content="@abusov"/> <meta name="twitter:creator" content="@abusov"/> <meta name="twitter:title"/> <meta name="twitter:description"/> <!>', 1);

function Wt(e, t) {
    X(t, !0);
    const a = () => Ft(Jt, "$page", r),
        [r, s] = qt();
    let n = H(t, "type", 3, "website"),
        f = H(t, "image", 3, null);
    It("38sjwj", _ => {
        var b = Qt(),
            m = z(b),
            p = d(m, 4),
            x = d(p, 2),
            u = d(x, 2),
            v = d(u, 2),
            h = d(v, 8),
            l = d(h, 2),
            o = d(l, 2); {
            var c = i => {
                var w = Kt(),
                    y = z(w),
                    T = d(y, 2),
                    C = d(T, 2),
                    I = d(C, 2),
                    S = d(I, 2),
                    P = d(S, 2);
                R(() => {
                    g(y, "content", "https://abusov.com" + f().img.src), g(T, "content", f().img.w), g(C, "content", f().img.h), g(I, "content", t.title), g(S, "content", "https://abusov.com" + f().img.src), g(P, "content", t.title)
                }), M(i, w)
            };
            Et(o, i => {
                f() ? .img && i(c)
            })
        }
        R(() => {
            g(m, "content", t.description), g(p, "content", t.title), g(x, "content", n()), g(u, "content", t.description), g(v, "content", a().url.href), g(h, "content", t.title), g(l, "content", t.description)
        }), _t(() => {
            bt.title = t.title ? ? ""
        }), M(_, b)
    }), Y(), s()
}

function Zt(e) {
    const t = e - 1;
    return t * t * t + 1
}

function Q(e) {
    const t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
    return t ? [parseFloat(t[1]), t[2] || "px"] : [e, "px"]
}

function W(e, {
    delay: t = 0,
    duration: a = 400,
    easing: r = Zt,
    x: s = 0,
    y: n = 0,
    opacity: f = 0
} = {}) {
    const _ = getComputedStyle(e),
        b = +_.opacity,
        m = _.transform === "none" ? "" : _.transform,
        p = b * (1 - f),
        [x, u] = Q(s),
        [v, h] = Q(n);
    return {
        delay: t,
        duration: a,
        easing: r,
        css: (l, o) => `
			transform: ${m} translate(${(1-l)*x}${u}, ${(1-l)*v}${h});
			opacity: ${b-p*o}`
    }
}
class Xt {#
    t;#
    e;
    constructor(t, a) {
        this.#t = t, this.#e = xt(a)
    }
    get current() {
        return this.#e(), this.#t()
    }
}
const Yt = /\(.+\)/,
    te = new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class ee extends Xt {
    constructor(t, a) {
        let r = Yt.test(t) || t.split(/[\s,]+/).some(n => te.has(n.trim())) ? t : `(${t})`;
        const s = window.matchMedia(r);
        super(() => s.matches, n => At(s, "change", n))
    }
}
const ae = new ee("(prefers-reduced-motion: reduce)");
var re = O('<a class="nav svelte-12qhfyh"><span class="arrow">-></span><span class="slash">/</span> </a>'),
    se = O('<div class="transition svelte-12qhfyh"><!></div>'),
    ne = O('<!> <header data-sveltekit-noscroll=""><div class="row svelte-12qhfyh"><a class="pfp svelte-12qhfyh" href="/" aria-label="homepage" data-umami-event="Logo Click"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></a> <a href="/" data-umami-event="Site Title Click"><h1 class="svelte-12qhfyh">abusov</h1></a></div> <nav class="svelte-12qhfyh"></nav></header> <div class="container svelte-12qhfyh" data-sveltekit-noscroll=""><!></div>', 1);

function we(e, t) {
    X(t, !0);
    const a = [{
        name: "about",
        path: "/about"
    }, {
        name: "projects",
        path: "/projects"
    }, {
        name: "blog",
        path: "/blog"
    }, {
        name: "uses",
        path: "/uses"
    }, {
        name: "contact",
        path: "/contact"
    }];
    let r = U(yt(k.url.pathname)),
        s = U("");
    Ot(o => {
        o.to ? .url.pathname && (V(s, N(r), !0), V(r, o.to.url.pathname, !0)), console.log(N(r), N(s))
    });

    function n(o, c) {
        const i = o.replace(/\/$/, ""),
            w = N(s).replace(/\/$/, "");
        let y = i.split("/").length,
            T = w.split("/").length;
        const C = "/" + i.split("/")[1],
            I = "/" + w.split("/")[1];
        let S = a.findIndex(L => L.path === C),
            P = a.findIndex(L => L.path === I);
        o === "/" && (S = P, y = 1), N(s) === "/" && (P = S, T = 1);
        let $ = S - P,
            B = y - T;
        return c && ($ *= -1, B *= -1), ae.current && ($ *= 0, B *= 0), {
            duration: 150,
            delay: c ? 0 : 50,
            x: `${$*20}vh`,
            y: `${B*20}vh`
        }
    }
    var f = ne(),
        _ = z(f); {
        let o = G(() => k.error ? k.status : k.data.meta.title),
            c = G(() => k.error ? k.error.message : k.data.meta.description);
        Wt(_, {
            get title() {
                return N(o)
            },
            get description() {
                return N(c)
            },
            get type() {
                return k.data.meta.type
            },
            get image() {
                return k.data.meta.image
            }
        })
    }
    var b = d(_, 2);
    let m;
    var p = q(b),
        x = q(p),
        u = q(x);
    St(u, () => ({
        "--width": "2rem",
        "--height": "2rem"
    })), Gt(u.lastChild), E(u), E(x), wt(2), E(p);
    var v = d(p, 2);
    Nt(v, 21, () => a, jt, (o, c) => {
        let i = () => N(c).name,
            w = () => N(c).path;
        var y = re(),
            T = d(q(y), 2, !0);
        E(y), R(() => {
            g(y, "href", w()), g(y, "data-umami-event", `Nav Click: ${i()}`), Tt(T, i())
        }), M(o, y)
    }), E(v), E(b);
    var h = d(b, 2),
        l = q(h);
    Rt(l, () => k.url.pathname, o => {
        var c = se(),
            i = q(c);
        Pt(i, () => t.children ? ? F), E(c), K(1, c, () => W, () => n(k.url.pathname, !1)), K(2, c, () => W, () => n(k.url.pathname, !0)), M(o, c)
    }), E(h), R(() => m = Ct(b, 1, "svelte-12qhfyh", null, m, {
        home: k.url.pathname === "/"
    })), M(e, f), Y()
}
export {
    we as component, ye as universal
};