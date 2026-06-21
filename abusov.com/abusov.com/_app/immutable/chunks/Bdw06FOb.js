import {
    l as d,
    u as m,
    m as i,
    n as g,
    r as l,
    o as b,
    p,
    q as v,
    t as h
} from "./CqXL5qBA.js";

function x(n = !1) {
    const t = d,
        e = t.l.u;
    if (!e) return;
    let f = () => v(t.s);
    if (n) {
        let o = 0,
            s = {};
        const _ = h(() => {
            let c = !1;
            const a = t.s;
            for (const r in a) a[r] !== s[r] && (s[r] = a[r], c = !0);
            return c && o++, o
        });
        f = () => p(_)
    }
    e.b.length && m(() => {
        u(t, f), l(e.b)
    }), i(() => {
        const o = g(() => e.m.map(b));
        return () => {
            for (const s of o) typeof s == "function" && s()
        }
    }), e.a.length && i(() => {
        u(t, f), l(e.a)
    })
}

function u(n, t) {
    if (n.l.s)
        for (const e of n.l.s) p(e);
    t()
}
export {
    x as i
};