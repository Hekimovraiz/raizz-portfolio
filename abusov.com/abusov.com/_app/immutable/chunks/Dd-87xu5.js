import {
    aW as W,
    p as M,
    L as V,
    a4 as X,
    n as z,
    aX as C,
    V as $,
    k as u,
    h as c,
    aj as m,
    e as J,
    v as U,
    C as k,
    z as Z,
    J as _,
    ad as g,
    T as R,
    d as j,
    aq as S,
    ap as v,
    aY as Y,
    aZ as G,
    ar as x,
    l as q,
    a_ as K,
    F as Q,
    Y as w,
    j as E,
    $ as ee,
    A as te,
    a$ as L,
    b0 as se,
    E as ie,
    b1 as ne,
    b2 as re,
    b3 as ae,
    b4 as N,
    g as he,
    b5 as oe,
    i as le,
    am as A,
    s as y,
    b6 as fe,
    X as de,
    N as _e,
    b7 as ue,
    a6 as ce,
    a2 as pe,
    D as ge,
    al as ve,
    a7 as ye
} from "./CqXL5qBA.js";
import {
    a as be,
    b as H,
    h as b,
    i as me
} from "./DS87nQgO.js";

function Ee(i) {
    let e = 0,
        t = V(0),
        n;
    return () => {
        W() && (M(t), X(() => (e === 0 && (n = z(() => i(() => C(t)))), e += 1, () => {
            $(() => {
                e -= 1, e === 0 && (n ? .(), n = void 0, C(t))
            })
        })))
    }
}
var Te = ie | ne | re;

function Re(i, e, t) {
    new we(i, e, t)
}
class we {
    parent;#
    s = !1;#
    t;#
    g = c ? u : null;#
    n;#
    d;#
    r;#
    i = null;#
    e = null;#
    a = null;#
    h = null;#
    o = null;#
    _ = 0;#
    l = 0;#
    u = !1;#
    f = null;#
    b = Ee(() => (this.#f = V(this.#_), () => {
        this.#f = null
    }));
    constructor(e, t, n) {
        this.#t = e, this.#n = t, this.#d = n, this.parent = m.b, this.#s = !!this.#n.pending, this.#r = J(() => {
            if (m.b = this, c) {
                const s = this.#g;
                U(), s.nodeType === k && s.data === Z ? this.#E() : this.#m()
            } else {
                var o = this.#v();
                try {
                    this.#i = _(() => n(o))
                } catch (s) {
                    this.error(s)
                }
                this.#l > 0 ? this.#p() : this.#s = !1
            }
            return () => {
                this.#o ? .remove()
            }
        }, Te), c && (this.#t = u)
    }#
    m() {
        try {
            this.#i = _(() => this.#d(this.#t))
        } catch (e) {
            this.error(e)
        }
        this.#s = !1
    }#
    E() {
        const e = this.#n.pending;
        e && (this.#e = _(() => e(this.#t)), g.enqueue(() => {
            var t = this.#v();
            this.#i = this.#c(() => (g.ensure(), _(() => this.#d(t)))), this.#l > 0 ? this.#p() : (R(this.#e, () => {
                this.#e = null
            }), this.#s = !1)
        }))
    }#
    v() {
        var e = this.#t;
        return this.#s && (this.#o = j(), this.#t.before(this.#o), e = this.#o), e
    }
    is_pending() {
        return this.#s || !!this.parent && this.parent.is_pending()
    }
    has_pending_snippet() {
        return !!this.#n.pending
    }#
    c(e) {
        var t = m,
            n = x,
            o = q;
        S(this.#r), v(this.#r), Y(this.#r.ctx);
        try {
            return e()
        } catch (s) {
            return G(s), null
        } finally {
            S(t), v(n), Y(o)
        }
    }#
    p() {
        const e = this.#n.pending;
        this.#i !== null && (this.#h = document.createDocumentFragment(), this.#h.append(this.#o), K(this.#i, this.#h)), this.#e === null && (this.#e = _(() => e(this.#t)))
    }#
    y(e) {
        if (!this.has_pending_snippet()) {
            this.parent && this.parent.#y(e);
            return
        }
        this.#l += e, this.#l === 0 && (this.#s = !1, this.#e && R(this.#e, () => {
            this.#e = null
        }), this.#h && (this.#t.before(this.#h), this.#h = null))
    }
    update_pending_count(e) {
        this.#y(e), this.#_ += e, this.#f && Q(this.#f, this.#_)
    }
    get_effect_pending() {
        return this.#b(), M(this.#f)
    }
    error(e) {
        var t = this.#n.onerror;
        let n = this.#n.failed;
        if (this.#u || !t && !n) throw e;
        this.#i && (w(this.#i), this.#i = null), this.#e && (w(this.#e), this.#e = null), this.#a && (w(this.#a), this.#a = null), c && (E(this.#g), ee(), E(te()));
        var o = !1,
            s = !1;
        const r = () => {
            if (o) {
                ae();
                return
            }
            o = !0, s && se(), g.ensure(), this.#_ = 0, this.#a !== null && R(this.#a, () => {
                this.#a = null
            }), this.#s = this.has_pending_snippet(), this.#i = this.#c(() => (this.#u = !1, _(() => this.#d(this.#t)))), this.#l > 0 ? this.#p() : this.#s = !1
        };
        var l = x;
        try {
            v(null), s = !0, t ? .(e, r), s = !1
        } catch (f) {
            L(f, this.#r && this.#r.parent)
        } finally {
            v(l)
        }
        n && $(() => {
            this.#a = this.#c(() => {
                g.ensure(), this.#u = !0;
                try {
                    return _(() => {
                        n(this.#t, () => e, () => r)
                    })
                } catch (f) {
                    return L(f, this.#r.parent), null
                } finally {
                    this.#u = !1
                }
            })
        })
    }
}
let I = !0;

function ke(i, e) {
    var t = e == null ? "" : typeof e == "object" ? e + "" : e;
    t !== (i.__t ? ? = i.nodeValue) && (i.__t = t, i.nodeValue = t + "")
}

function Ne(i, e) {
    return B(i, e)
}

function Fe(i, e) {
    N(), e.intro = e.intro ? ? !1;
    const t = e.target,
        n = c,
        o = u;
    try {
        for (var s = he(t); s && (s.nodeType !== k || s.data !== oe);) s = le(s);
        if (!s) throw A;
        y(!0), E(s);
        const r = B(i, { ...e,
            anchor: s
        });
        return y(!1), r
    } catch (r) {
        if (r instanceof Error && r.message.split(`
`).some(l => l.startsWith("https://svelte.dev/e/"))) throw r;
        return r !== A && console.warn("Failed to hydrate: ", r), e.recover === !1 && fe(), N(), de(t), y(!1), Ne(i, e)
    } finally {
        y(n), E(o)
    }
}
const p = new Map;

function B(i, {
    target: e,
    anchor: t,
    props: n = {},
    events: o,
    context: s,
    intro: r = !0
}) {
    N();
    var l = new Set,
        f = d => {
            for (var h = 0; h < d.length; h++) {
                var a = d[h];
                if (!l.has(a)) {
                    l.add(a);
                    var F = me(a);
                    e.addEventListener(a, b, {
                        passive: F
                    });
                    var O = p.get(a);
                    O === void 0 ? (document.addEventListener(a, b, {
                        passive: F
                    }), p.set(a, 1)) : p.set(a, O + 1)
                }
            }
        };
    f(_e(be)), H.add(f);
    var T = void 0,
        P = ue(() => {
            var d = t ? ? e.appendChild(j());
            return Re(d, {
                pending: () => {}
            }, h => {
                if (s) {
                    ce({});
                    var a = q;
                    a.c = s
                }
                if (o && (n.$$events = o), c && pe(h, null), I = r, T = i(h, n) || {}, I = !0, c && (m.nodes.end = u, u === null || u.nodeType !== k || u.data !== ge)) throw ve(), A;
                s && ye()
            }), () => {
                for (var h of l) {
                    e.removeEventListener(h, b);
                    var a = p.get(h);
                    --a === 0 ? (document.removeEventListener(h, b), p.delete(h)) : p.set(h, a)
                }
                H.delete(f), d !== t && d.parentNode ? .removeChild(d)
            }
        });
    return D.set(T, P), T
}
let D = new WeakMap;

function Oe(i, e) {
    const t = D.get(i);
    return t ? (D.delete(i), t(e)) : Promise.resolve()
}
export {
    I as a, Ee as c, Fe as h, Ne as m, ke as s, Oe as u
};