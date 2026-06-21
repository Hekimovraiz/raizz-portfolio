import {
    a3 as T,
    ao as D,
    aJ as I,
    M as L,
    p as v,
    au as O,
    n as w,
    aL as M,
    aM as N,
    aN as U,
    t as y,
    x as B,
    at as Y,
    aO as h,
    aj as $,
    aP as K,
    aQ as j,
    aR as q,
    aA as z,
    aS as C,
    aT as G,
    aU as J,
    aV as Q
} from "./CqXL5qBA.js";
import {
    s as V,
    g as Z
} from "./9HSwx7--.js";
let c = !1,
    p = Symbol();

function k(e, r, u) {
    const n = u[r] ? ? = {
        store: null,
        source: L(void 0),
        unsubscribe: I
    };
    if (n.store !== e && !(p in u))
        if (n.unsubscribe(), n.store = e ? ? null, e == null) n.source.v = void 0, n.unsubscribe = I;
        else {
            var s = !0;
            n.unsubscribe = V(e, i => {
                s ? n.source.v = i : O(n.source, i)
            }), s = !1
        }
    return e && p in u ? Z(e) : v(n.source)
}

function ee() {
    const e = {};

    function r() {
        T(() => {
            for (var u in e) e[u].unsubscribe();
            D(e, p, {
                enumerable: !1,
                value: !0
            })
        })
    }
    return [e, r]
}

function F(e) {
    var r = c;
    try {
        return c = !1, [e(), c]
    } finally {
        c = r
    }
}
const H = {
    get(e, r) {
        if (!e.exclude.includes(r)) return e.props[r]
    },
    set(e, r) {
        return !1
    },
    getOwnPropertyDescriptor(e, r) {
        if (!e.exclude.includes(r) && r in e.props) return {
            enumerable: !0,
            configurable: !0,
            value: e.props[r]
        }
    },
    has(e, r) {
        return e.exclude.includes(r) ? !1 : r in e.props
    },
    ownKeys(e) {
        return Reflect.ownKeys(e.props).filter(r => !e.exclude.includes(r))
    }
};

function re(e, r, u) {
    return new Proxy({
        props: e,
        exclude: r
    }, H)
}

function ne(e, r, u, n) {
    var s = !z || (u & C) !== 0,
        i = (u & q) !== 0,
        R = (u & j) !== 0,
        t = n,
        b = !0,
        P = () => (b && (b = !1, t = R ? w(n) : n), t),
        l;
    if (i) {
        var E = J in e || Q in e;
        l = M(e, r) ? .set ? ? (E && r in e ? a => e[r] = a : void 0)
    }
    var d, g = !1;
    i ? [d, g] = F(() => e[r]) : d = e[r], d === void 0 && n !== void 0 && (d = P(), l && (s && N(), l(d)));
    var f;
    if (s ? f = () => {
            var a = e[r];
            return a === void 0 ? P() : (b = !0, a)
        } : f = () => {
            var a = e[r];
            return a !== void 0 && (t = void 0), a === void 0 ? t : a
        }, s && (u & U) === 0) return f;
    if (l) {
        var x = e.$$legacy;
        return (function(a, o) {
            return arguments.length > 0 ? ((!s || !o || x || g) && l(o ? f() : a), a) : f()
        })
    }
    var S = !1,
        _ = ((u & G) !== 0 ? y : B)(() => (S = !1, f()));
    i && v(_);
    var A = $;
    return (function(a, o) {
        if (arguments.length > 0) {
            const m = o ? v(_) : s && i ? Y(a) : a;
            return O(_, m), S = !0, t !== void 0 && (t = m), a
        }
        return h && S || (A.f & K) !== 0 ? _.v : v(_)
    })
}
export {
    k as a, ne as p, re as r, ee as s
};