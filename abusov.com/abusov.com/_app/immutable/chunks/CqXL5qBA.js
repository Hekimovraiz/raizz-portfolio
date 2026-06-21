var Vt = Array.isArray,
    Gt = Array.prototype.indexOf,
    Bn = Array.from,
    Vn = Object.defineProperty,
    _e = Object.getOwnPropertyDescriptor,
    $t = Object.getOwnPropertyDescriptors,
    Kt = Object.prototype,
    zt = Array.prototype,
    ft = Object.getPrototypeOf,
    Qe = Object.isExtensible;

function Gn(e) {
    return typeof e == "function"
}
const $n = () => {};

function Kn(e) {
    return typeof e ? .then == "function"
}

function zn(e) {
    return e()
}

function Wt(e) {
    for (var t = 0; t < e.length; t++) e[t]()
}

function at() {
    var e, t, n = new Promise((r, s) => {
        e = r, t = s
    });
    return {
        promise: n,
        resolve: e,
        reject: t
    }
}
const y = 2,
    Se = 4,
    Re = 8,
    ot = 1 << 24,
    H = 16,
    U = 32,
    fe = 64,
    Ve = 128,
    I = 512,
    b = 1024,
    A = 2048,
    F = 4096,
    P = 8192,
    V = 16384,
    Ne = 32768,
    ye = 65536,
    je = 1 << 17,
    lt = 1 << 18,
    pe = 1 << 19,
    ut = 1 << 20,
    Wn = 1 << 25,
    ne = 32768,
    Le = 1 << 21,
    Ge = 1 << 22,
    G = 1 << 23,
    Q = Symbol("$state"),
    Xn = Symbol("legacy props"),
    Zn = Symbol(""),
    ae = new class extends Error {
        name = "StaleReactionError";
        message = "The reaction that called `getAbortSignal()` was re-run or destroyed"
    },
    Oe = 3,
    ct = 8;

function Xt(e) {
    throw new Error("https://svelte.dev/e/experimental_async_required")
}

function Zt(e) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component")
}

function Jt() {
    throw new Error("https://svelte.dev/e/missing_context")
}

function Qt() {
    throw new Error("https://svelte.dev/e/async_derived_orphan")
}

function en(e) {
    throw new Error("https://svelte.dev/e/effect_in_teardown")
}

function tn() {
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived")
}

function nn(e) {
    throw new Error("https://svelte.dev/e/effect_orphan")
}

function rn() {
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")
}

function sn() {
    throw new Error("https://svelte.dev/e/fork_discarded")
}

function fn() {
    throw new Error("https://svelte.dev/e/fork_timing")
}

function Qn() {
    throw new Error("https://svelte.dev/e/get_abort_signal_outside_reaction")
}

function er() {
    throw new Error("https://svelte.dev/e/hydration_failed")
}

function tr(e) {
    throw new Error("https://svelte.dev/e/lifecycle_legacy_only")
}

function nr(e) {
    throw new Error("https://svelte.dev/e/props_invalid_value")
}

function an() {
    throw new Error("https://svelte.dev/e/state_descriptors_fixed")
}

function on() {
    throw new Error("https://svelte.dev/e/state_prototype_fixed")
}

function ln() {
    throw new Error("https://svelte.dev/e/state_unsafe_mutation")
}

function rr() {
    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")
}
const sr = 1,
    ir = 2,
    fr = 4,
    ar = 8,
    or = 16,
    lr = 1,
    ur = 2,
    cr = 4,
    _r = 8,
    vr = 16,
    dr = 1,
    hr = 2,
    pr = 4,
    un = 1,
    cn = 2,
    _n = "[",
    vn = "[!",
    dn = "]",
    $e = {},
    E = Symbol(),
    mr = "http://www.w3.org/1999/xhtml",
    wr = "@attach";

function yr(e) {
    console.warn("https://svelte.dev/e/hydratable_missing_but_expected")
}

function Ke(e) {
    console.warn("https://svelte.dev/e/hydration_mismatch")
}

function gr() {
    console.warn("https://svelte.dev/e/select_multiple_invalid_value")
}

function Er() {
    console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")
}
let S = !1;

function br(e) {
    S = e
}
let m;

function re(e) {
    if (e === null) throw Ke(), $e;
    return m = e
}

function hn() {
    return re(W(m))
}

function Tr(e) {
    if (S) {
        if (W(m) !== null) throw Ke(), $e;
        m = e
    }
}

function xr(e = 1) {
    if (S) {
        for (var t = e, n = m; t--;) n = W(n);
        m = n
    }
}

function Ar(e = !0) {
    for (var t = 0, n = m;;) {
        if (n.nodeType === ct) {
            var r = n.data;
            if (r === dn) {
                if (t === 0) return n;
                t -= 1
            } else(r === _n || r === vn) && (t += 1)
        }
        var s = W(n);
        e && n.remove(), n = s
    }
}

function kr(e) {
    if (!e || e.nodeType !== ct) throw Ke(), $e;
    return e.data
}

function _t(e) {
    return e === this.v
}

function pn(e, t) {
    return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function"
}

function vt(e) {
    return !pn(e, this.v)
}
let Ce = !1;

function Sr() {
    Ce = !0
}
let w = null;

function ge(e) {
    w = e
}

function Rr() {
    const e = {};
    return [() => (yn(e) || Jt(), mn(e)), t => wn(e, t)]
}

function mn(e) {
    return Ie().get(e)
}

function wn(e, t) {
    return Ie().set(e, t), t
}

function yn(e) {
    return Ie().has(e)
}

function Nr() {
    return Ie()
}

function Or(e, t = !1, n) {
    w = {
        p: w,
        i: !1,
        c: null,
        e: null,
        s: e,
        x: null,
        l: Ce && !t ? {
            s: null,
            u: null,
            $: []
        } : null
    }
}

function Cr(e) {
    var t = w,
        n = t.e;
    if (n !== null) {
        t.e = null;
        for (var r of n) Nt(r)
    }
    return t.i = !0, w = t.p, {}
}

function me() {
    return !Ce || w !== null && w.l === null
}

function Ie(e) {
    return w === null && Zt(), w.c ? ? = new Map(gn(w) || void 0)
}

function gn(e) {
    let t = e.p;
    for (; t !== null;) {
        const n = t.c;
        if (n !== null) return n;
        t = t.p
    }
    return null
}
let Z = [];

function dt() {
    var e = Z;
    Z = [], Wt(e)
}

function En(e) {
    if (Z.length === 0 && !ve) {
        var t = Z;
        queueMicrotask(() => {
            t === Z && dt()
        })
    }
    Z.push(e)
}

function bn() {
    for (; Z.length > 0;) dt()
}

function Tn(e) {
    var t = p;
    if (t === null) return _.f |= G, e;
    if ((t.f & Ne) === 0) {
        if ((t.f & Ve) === 0) throw e;
        t.b.error(e)
    } else Ee(e, t)
}

function Ee(e, t) {
    for (; t !== null;) {
        if ((t.f & Ve) !== 0) try {
            t.b.error(e);
            return
        } catch (n) {
            e = n
        }
        t = t.parent
    }
    throw e
}
const J = new Set;
let h = null,
    x = null,
    N = [],
    De = null,
    qe = !1,
    ve = !1;
class K {
    committed = !1;
    current = new Map;
    previous = new Map;#
    t = new Set;#
    n = new Set;#
    e = 0;#
    r = 0;#
    i = null;#
    s = new Set;#
    f = new Set;
    skipped_effects = new Set;
    is_fork = !1;
    is_deferred() {
        return this.is_fork || this.#r > 0
    }
    process(t) {
        N = [], this.apply();
        var n = {
            parent: null,
            effect: null,
            effects: [],
            render_effects: []
        };
        for (const r of t) this.#o(r, n);
        this.is_fork || this.#u(), this.is_deferred() ? (this.#a(n.effects), this.#a(n.render_effects)) : (h = null, et(n.render_effects), et(n.effects), this.#i ? .resolve()), x = null
    }#
    o(t, n) {
        t.f ^= b;
        for (var r = t.first; r !== null;) {
            var s = r.f,
                i = (s & (U | fe)) !== 0,
                a = i && (s & b) !== 0,
                o = a || (s & P) !== 0 || this.skipped_effects.has(r);
            if ((r.f & Ve) !== 0 && r.b ? .is_pending() && (n = {
                    parent: n,
                    effect: r,
                    effects: [],
                    render_effects: []
                }), !o && r.fn !== null) {
                i ? r.f ^= b : (s & Se) !== 0 ? n.effects.push(r) : we(r) && ((r.f & H) !== 0 && this.#s.add(r), he(r));
                var f = r.first;
                if (f !== null) {
                    r = f;
                    continue
                }
            }
            var l = r.parent;
            for (r = r.next; r === null && l !== null;) l === n.effect && (this.#a(n.effects), this.#a(n.render_effects), n = n.parent), r = l.next, l = l.parent
        }
    }#
    a(t) {
        for (const n of t)(n.f & A) !== 0 ? this.#s.add(n) : (n.f & F) !== 0 && this.#f.add(n), this.#l(n.deps), g(n, b)
    }#
    l(t) {
        if (t !== null)
            for (const n of t)(n.f & y) === 0 || (n.f & ne) === 0 || (n.f ^= ne, this.#l(n.deps))
    }
    capture(t, n) {
        this.previous.has(t) || this.previous.set(t, n), (t.f & G) === 0 && (this.current.set(t, t.v), x ? .set(t, t.v))
    }
    activate() {
        h = this, this.apply()
    }
    deactivate() {
        h === this && (h = null, x = null)
    }
    flush() {
        if (this.activate(), N.length > 0) {
            if (He(), h !== null && h !== this) return
        } else this.#e === 0 && this.process([]);
        this.deactivate()
    }
    discard() {
        for (const t of this.#n) t(this);
        this.#n.clear()
    }#
    u() {
        if (this.#r === 0) {
            for (const t of this.#t) t();
            this.#t.clear()
        }
        this.#e === 0 && this.#c()
    }#
    c() {
        if (J.size > 1) {
            this.previous.clear();
            var t = x,
                n = !0,
                r = {
                    parent: null,
                    effect: null,
                    effects: [],
                    render_effects: []
                };
            for (const i of J) {
                if (i === this) {
                    n = !1;
                    continue
                }
                const a = [];
                for (const [f, l] of this.current) {
                    if (i.current.has(f))
                        if (n && l !== i.current.get(f)) i.current.set(f, l);
                        else continue;
                    a.push(f)
                }
                if (a.length === 0) continue;
                const o = [...i.current.keys()].filter(f => !this.current.has(f));
                if (o.length > 0) {
                    var s = N;
                    N = [];
                    const f = new Set,
                        l = new Map;
                    for (const u of a) ht(u, o, f, l);
                    if (N.length > 0) {
                        h = i, i.apply();
                        for (const u of N) i.#o(u, r);
                        i.deactivate()
                    }
                    N = s
                }
            }
            h = null, x = t
        }
        this.committed = !0, J.delete(this)
    }
    increment(t) {
        this.#e += 1, t && (this.#r += 1)
    }
    decrement(t) {
        this.#e -= 1, t && (this.#r -= 1), this.revive()
    }
    revive() {
        for (const t of this.#s) this.#f.delete(t), g(t, A), se(t);
        for (const t of this.#f) g(t, F), se(t);
        this.flush()
    }
    oncommit(t) {
        this.#t.add(t)
    }
    ondiscard(t) {
        this.#n.add(t)
    }
    settled() {
        return (this.#i ? ? = at()).promise
    }
    static ensure() {
        if (h === null) {
            const t = h = new K;
            J.add(h), ve || K.enqueue(() => {
                h === t && t.flush()
            })
        }
        return h
    }
    static enqueue(t) {
        En(t)
    }
    apply() {}
}

function Ye(e) {
    var t = ve;
    ve = !0;
    try {
        var n;
        for (e && (h !== null && He(), n = e());;) {
            if (bn(), N.length === 0 && (h ? .flush(), N.length === 0)) return De = null, n;
            He()
        }
    } finally {
        ve = t
    }
}

function He() {
    var e = ee;
    qe = !0;
    var t = null;
    try {
        var n = 0;
        for (Ae(!0); N.length > 0;) {
            var r = K.ensure();
            if (n++ > 1e3) {
                var s, i;
                xn()
            }
            r.process(N), $.clear()
        }
    } finally {
        qe = !1, Ae(e), De = null
    }
}

function xn() {
    try {
        rn()
    } catch (e) {
        Ee(e, De)
    }
}
let j = null;

function et(e) {
    var t = e.length;
    if (t !== 0) {
        for (var n = 0; n < t;) {
            var r = e[n++];
            if ((r.f & (V | P)) === 0 && we(r) && (j = new Set, he(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? It(r) : r.fn = null), j ? .size > 0)) {
                $.clear();
                for (const s of j) {
                    if ((s.f & (V | P)) !== 0) continue;
                    const i = [s];
                    let a = s.parent;
                    for (; a !== null;) j.has(a) && (j.delete(a), i.push(a)), a = a.parent;
                    for (let o = i.length - 1; o >= 0; o--) {
                        const f = i[o];
                        (f.f & (V | P)) === 0 && he(f)
                    }
                }
                j.clear()
            }
        }
        j = null
    }
}

function ht(e, t, n, r) {
    if (!n.has(e) && (n.add(e), e.reactions !== null))
        for (const s of e.reactions) {
            const i = s.f;
            (i & y) !== 0 ? ht(s, t, n, r) : (i & (Ge | H)) !== 0 && (i & A) === 0 && mt(s, t, r) && (g(s, A), se(s))
        }
}

function pt(e, t) {
    if (e.reactions !== null)
        for (const n of e.reactions) {
            const r = n.f;
            (r & y) !== 0 ? pt(n, t) : (r & je) !== 0 && (g(n, A), t.add(n))
        }
}

function mt(e, t, n) {
    const r = n.get(e);
    if (r !== void 0) return r;
    if (e.deps !== null)
        for (const s of e.deps) {
            if (t.includes(s)) return !0;
            if ((s.f & y) !== 0 && mt(s, t, n)) return n.set(s, !0), !0
        }
    return n.set(e, !1), !1
}

function se(e) {
    for (var t = De = e; t.parent !== null;) {
        t = t.parent;
        var n = t.f;
        if (qe && t === p && (n & H) !== 0 && (n & lt) === 0) return;
        if ((n & (fe | U)) !== 0) {
            if ((n & b) === 0) return;
            t.f ^= b
        }
    }
    N.push(t)
}

function Ir(e) {
    Xt(), h !== null && fn();
    var t = K.ensure();
    t.is_fork = !0, x = new Map;
    var n = !1,
        r = t.settled();
    Ye(e), x = null;
    for (var [s, i] of t.previous) s.v = i;
    return {
        commit: async () => {
            if (n) {
                await r;
                return
            }
            J.has(t) || sn(), n = !0, t.is_fork = !1;
            for (var [a, o] of t.current) a.v = o;
            Ye(() => {
                var f = new Set;
                for (var l of t.current.keys()) pt(l, f);
                Nn(f), bt()
            }), t.revive(), await r
        },
        discard: () => {
            !n && J.has(t) && (J.delete(t), t.discard())
        }
    }
}

function wt(e, t, n, r) {
    const s = me() ? ze : Sn;
    if (n.length === 0 && e.length === 0) {
        r(t.map(s));
        return
    }
    var i = h,
        a = p,
        o = An();

    function f() {
        Promise.all(n.map(l => kn(l))).then(l => {
            o();
            try {
                r([...t.map(s), ...l])
            } catch (u) {
                (a.f & V) === 0 && Ee(u, a)
            }
            i ? .deactivate(), be()
        }).catch(l => {
            Ee(l, a)
        })
    }
    e.length > 0 ? Promise.all(e).then(() => {
        o();
        try {
            return f()
        } finally {
            i ? .deactivate(), be()
        }
    }) : f()
}

function An() {
    var e = p,
        t = _,
        n = w,
        r = h;
    return function(i = !0) {
        le(e), z(t), ge(n), i && r ? .activate()
    }
}

function be() {
    le(null), z(null), ge(null)
}

function ze(e) {
    var t = y | A,
        n = _ !== null && (_.f & y) !== 0 ? _ : null;
    return p !== null && (p.f |= pe), {
        ctx: w,
        deps: null,
        effects: null,
        equals: _t,
        f: t,
        fn: e,
        reactions: null,
        rv: 0,
        v: E,
        wv: 0,
        parent: n ? ? p,
        ac: null
    }
}

function kn(e, t) {
    let n = p;
    n === null && Qt();
    var r = n.b,
        s = void 0,
        i = Xe(E),
        a = !_,
        o = new Map;
    return Pn(() => {
        var f = at();
        s = f.promise;
        try {
            Promise.resolve(e()).then(f.resolve, f.reject).then(() => {
                l === h && l.committed && l.deactivate(), be()
            })
        } catch (c) {
            f.reject(c), be()
        }
        var l = h;
        if (a) {
            var u = !r.is_pending();
            r.update_pending_count(1), l.increment(u), o.get(l) ? .reject(ae), o.delete(l), o.set(l, f)
        }
        const v = (c, d = void 0) => {
            if (l.activate(), d) d !== ae && (i.f |= G, Ue(i, d));
            else {
                (i.f & G) !== 0 && (i.f ^= G), Ue(i, c);
                for (const [C, Pe] of o) {
                    if (o.delete(C), C === l) break;
                    Pe.reject(ae)
                }
            }
            a && (r.update_pending_count(-1), l.decrement(u))
        };
        f.promise.then(v, c => v(null, c || "unknown"))
    }), Dn(() => {
        for (const f of o.values()) f.reject(ae)
    }), new Promise(f => {
        function l(u) {
            function v() {
                u === s ? f(i) : l(s)
            }
            u.then(v, v)
        }
        l(s)
    })
}

function Dr(e) {
    const t = ze(e);
    return Ft(t), t
}

function Sn(e) {
    const t = ze(e);
    return t.equals = vt, t
}

function yt(e) {
    var t = e.effects;
    if (t !== null) {
        e.effects = null;
        for (var n = 0; n < t.length; n += 1) M(t[n])
    }
}

function Rn(e) {
    for (var t = e.parent; t !== null;) {
        if ((t.f & y) === 0) return (t.f & V) === 0 ? t : null;
        t = t.parent
    }
    return null
}

function We(e) {
    var t, n = p;
    le(Rn(e));
    try {
        e.f &= ~ne, yt(e), t = Yt(e)
    } finally {
        le(n)
    }
    return t
}

function gt(e) {
    var t = We(e);
    if (e.equals(t) || (h ? .is_fork || (e.v = t), e.wv = Lt()), !ue)
        if (x !== null)(xe() || h ? .is_fork) && x.set(e, t);
        else {
            var n = (e.f & I) === 0 ? F : b;
            g(e, n)
        }
}
let Te = new Set;
const $ = new Map;

function Nn(e) {
    Te = e
}
let Et = !1;

function Xe(e, t) {
    var n = {
        f: 0,
        v: e,
        reactions: null,
        equals: _t,
        rv: 0,
        wv: 0
    };
    return n
}

function B(e, t) {
    const n = Xe(e);
    return Ft(n), n
}

function Pr(e, t = !1, n = !0) {
    const r = Xe(e);
    return t || (r.equals = vt), Ce && n && w !== null && w.l !== null && (w.l.s ? ? = []).push(r), r
}

function X(e, t, n = !1) {
    _ !== null && (!D || (_.f & je) !== 0) && me() && (_.f & (y | H | Ge | je)) !== 0 && !L ? .includes(e) && ln();
    let r = n ? ce(t) : t;
    return Ue(e, r)
}

function Ue(e, t) {
    if (!e.equals(t)) {
        var n = e.v;
        ue ? $.set(e, t) : $.set(e, n), e.v = t;
        var r = K.ensure();
        r.capture(e, n), (e.f & y) !== 0 && ((e.f & A) !== 0 && We(e), g(e, (e.f & I) !== 0 ? b : F)), e.wv = Lt(), Tt(e, A), me() && p !== null && (p.f & b) !== 0 && (p.f & (U | fe)) === 0 && (R === null ? qn([e]) : R.push(e)), !r.is_fork && Te.size > 0 && !Et && bt()
    }
    return t
}

function bt() {
    Et = !1;
    var e = ee;
    Ae(!0);
    const t = Array.from(Te);
    try {
        for (const n of t)(n.f & b) !== 0 && g(n, F), we(n) && he(n)
    } finally {
        Ae(e)
    }
    Te.clear()
}

function Fe(e) {
    X(e, e.v + 1)
}

function Tt(e, t) {
    var n = e.reactions;
    if (n !== null)
        for (var r = me(), s = n.length, i = 0; i < s; i++) {
            var a = n[i],
                o = a.f;
            if (!(!r && a === p)) {
                var f = (o & A) === 0;
                if (f && g(a, t), (o & y) !== 0) {
                    var l = a;
                    x ? .delete(l), (o & ne) === 0 && (o & I && (a.f |= ne), Tt(l, F))
                } else f && ((o & H) !== 0 && j !== null && j.add(a), se(a))
            }
        }
}

function ce(e) {
    if (typeof e != "object" || e === null || Q in e) return e;
    const t = ft(e);
    if (t !== Kt && t !== zt) return e;
    var n = new Map,
        r = Vt(e),
        s = B(0),
        i = te,
        a = o => {
            if (te === i) return o();
            var f = _,
                l = te;
            z(null), it(i);
            var u = o();
            return z(f), it(l), u
        };
    return r && n.set("length", B(e.length)), new Proxy(e, {
        defineProperty(o, f, l) {
            (!("value" in l) || l.configurable === !1 || l.enumerable === !1 || l.writable === !1) && an();
            var u = n.get(f);
            return u === void 0 ? u = a(() => {
                var v = B(l.value);
                return n.set(f, v), v
            }) : X(u, l.value, !0), !0
        },
        deleteProperty(o, f) {
            var l = n.get(f);
            if (l === void 0) {
                if (f in o) {
                    const u = a(() => B(E));
                    n.set(f, u), Fe(s)
                }
            } else X(l, E), Fe(s);
            return !0
        },
        get(o, f, l) {
            if (f === Q) return e;
            var u = n.get(f),
                v = f in o;
            if (u === void 0 && (!v || _e(o, f) ? .writable) && (u = a(() => {
                    var d = ce(v ? o[f] : E),
                        C = B(d);
                    return C
                }), n.set(f, u)), u !== void 0) {
                var c = oe(u);
                return c === E ? void 0 : c
            }
            return Reflect.get(o, f, l)
        },
        getOwnPropertyDescriptor(o, f) {
            var l = Reflect.getOwnPropertyDescriptor(o, f);
            if (l && "value" in l) {
                var u = n.get(f);
                u && (l.value = oe(u))
            } else if (l === void 0) {
                var v = n.get(f),
                    c = v ? .v;
                if (v !== void 0 && c !== E) return {
                    enumerable: !0,
                    configurable: !0,
                    value: c,
                    writable: !0
                }
            }
            return l
        },
        has(o, f) {
            if (f === Q) return !0;
            var l = n.get(f),
                u = l !== void 0 && l.v !== E || Reflect.has(o, f);
            if (l !== void 0 || p !== null && (!u || _e(o, f) ? .writable)) {
                l === void 0 && (l = a(() => {
                    var c = u ? ce(o[f]) : E,
                        d = B(c);
                    return d
                }), n.set(f, l));
                var v = oe(l);
                if (v === E) return !1
            }
            return u
        },
        set(o, f, l, u) {
            var v = n.get(f),
                c = f in o;
            if (r && f === "length")
                for (var d = l; d < v.v; d += 1) {
                    var C = n.get(d + "");
                    C !== void 0 ? X(C, E) : d in o && (C = a(() => B(E)), n.set(d + "", C))
                }
            if (v === void 0)(!c || _e(o, f) ? .writable) && (v = a(() => B(void 0)), X(v, ce(l)), n.set(f, v));
            else {
                c = v.v !== E;
                var Pe = a(() => ce(l));
                X(v, Pe)
            }
            var Ze = Reflect.getOwnPropertyDescriptor(o, f);
            if (Ze ? .set && Ze.set.call(u, l), !c) {
                if (r && typeof f == "string") {
                    var Je = n.get("length"),
                        Me = Number(f);
                    Number.isInteger(Me) && Me >= Je.v && X(Je, Me + 1)
                }
                Fe(s)
            }
            return !0
        },
        ownKeys(o) {
            oe(s);
            var f = Reflect.ownKeys(o).filter(v => {
                var c = n.get(v);
                return c === void 0 || c.v !== E
            });
            for (var [l, u] of n) u.v !== E && !(l in o) && f.push(l);
            return f
        },
        setPrototypeOf() {
            on()
        }
    })
}

function tt(e) {
    try {
        if (e !== null && typeof e == "object" && Q in e) return e[Q]
    } catch {}
    return e
}

function Mr(e, t) {
    return Object.is(tt(e), tt(t))
}
var nt, On, xt, At, kt;

function Fr() {
    if (nt === void 0) {
        nt = window, On = document, xt = /Firefox/.test(navigator.userAgent);
        var e = Element.prototype,
            t = Node.prototype,
            n = Text.prototype;
        At = _e(t, "firstChild").get, kt = _e(t, "nextSibling").get, Qe(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Qe(n) && (n.__t = void 0)
    }
}

function Y(e = "") {
    return document.createTextNode(e)
}

function ie(e) {
    return At.call(e)
}

function W(e) {
    return kt.call(e)
}

function jr(e, t) {
    if (!S) return ie(e);
    var n = ie(m);
    if (n === null) n = m.appendChild(Y());
    else if (t && n.nodeType !== Oe) {
        var r = Y();
        return n ? .before(r), re(r), r
    }
    return re(n), n
}

function Lr(e, t = !1) {
    if (!S) {
        var n = ie(e);
        return n instanceof Comment && n.data === "" ? W(n) : n
    }
    if (t && m ? .nodeType !== Oe) {
        var r = Y();
        return m ? .before(r), re(r), r
    }
    return m
}

function qr(e, t = 1, n = !1) {
    let r = S ? m : e;
    for (var s; t--;) s = r, r = W(r);
    if (!S) return r;
    if (n && r ? .nodeType !== Oe) {
        var i = Y();
        return r === null ? s ? .after(i) : r.before(i), re(i), i
    }
    return re(r), r
}

function Yr(e) {
    e.textContent = ""
}

function Cn() {
    return !1
}

function St(e) {
    var t = _,
        n = p;
    z(null), le(null);
    try {
        return e()
    } finally {
        z(t), le(n)
    }
}

function Rt(e) {
    p === null && (_ === null && nn(), tn()), ue && en()
}

function In(e, t) {
    var n = t.last;
    n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e)
}

function O(e, t, n) {
    var r = p;
    r !== null && (r.f & P) !== 0 && (e |= P);
    var s = {
        ctx: w,
        deps: null,
        nodes: null,
        f: e | A | I,
        first: null,
        fn: t,
        last: null,
        next: null,
        parent: r,
        b: r && r.b,
        prev: null,
        teardown: null,
        wv: 0,
        ac: null
    };
    if (n) try {
        he(s), s.f |= Ne
    } catch (o) {
        throw M(s), o
    } else t !== null && se(s);
    var i = s;
    if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && (i.f & pe) === 0 && (i = i.first, (e & H) !== 0 && (e & ye) !== 0 && i !== null && (i.f |= ye)), i !== null && (i.parent = r, r !== null && In(i, r), _ !== null && (_.f & y) !== 0 && (e & fe) === 0)) {
        var a = _;
        (a.effects ? ? = []).push(i)
    }
    return s
}

function xe() {
    return _ !== null && !D
}

function Dn(e) {
    const t = O(Re, null, !1);
    return g(t, b), t.teardown = e, t
}

function Hr(e) {
    Rt();
    var t = p.f,
        n = !_ && (t & U) !== 0 && (t & Ne) === 0;
    if (n) {
        var r = w;
        (r.e ? ? = []).push(e)
    } else return Nt(e)
}

function Nt(e) {
    return O(Se | ut, e, !1)
}

function Ur(e) {
    return Rt(), O(Re | ut, e, !0)
}

function Br(e) {
    K.ensure();
    const t = O(fe | pe, e, !0);
    return (n = {}) => new Promise(r => {
        n.outro ? Dt(t, () => {
            M(t), r(void 0)
        }) : (M(t), r(void 0))
    })
}

function Vr(e) {
    return O(Se, e, !1)
}

function Pn(e) {
    return O(Ge | pe, e, !0)
}

function Gr(e, t = 0) {
    return O(Re | t, e, !0)
}

function $r(e, t = [], n = [], r = []) {
    wt(r, t, n, s => {
        O(Re, () => e(...s.map(oe)), !0)
    })
}

function Kr(e, t = [], n = [], r = []) {
    var s = h,
        i = n.length > 0 || r.length > 0;
    i && s.increment(!0), wt(r, t, n, a => {
        O(Se, () => e(...a.map(oe)), !1), i && s.decrement(!0)
    })
}

function zr(e, t = 0) {
    var n = O(H | t, e, !0);
    return n
}

function Wr(e, t = 0) {
    var n = O(ot | t, e, !0);
    return n
}

function rt(e) {
    return O(U | pe, e, !0)
}

function Ot(e) {
    var t = e.teardown;
    if (t !== null) {
        const n = ue,
            r = _;
        st(!0), z(null);
        try {
            t.call(null)
        } finally {
            st(n), z(r)
        }
    }
}

function Ct(e, t = !1) {
    var n = e.first;
    for (e.first = e.last = null; n !== null;) {
        const s = n.ac;
        s !== null && St(() => {
            s.abort(ae)
        });
        var r = n.next;
        (n.f & fe) !== 0 ? n.parent = null : M(n, t), n = r
    }
}

function Mn(e) {
    for (var t = e.first; t !== null;) {
        var n = t.next;
        (t.f & U) === 0 && M(t), t = n
    }
}

function M(e, t = !0) {
    var n = !1;
    (t || (e.f & lt) !== 0) && e.nodes !== null && e.nodes.end !== null && (Fn(e.nodes.start, e.nodes.end), n = !0), Ct(e, t && !n), ke(e, 0), g(e, V);
    var r = e.nodes && e.nodes.t;
    if (r !== null)
        for (const i of r) i.stop();
    Ot(e);
    var s = e.parent;
    s !== null && s.first !== null && It(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null
}

function Fn(e, t) {
    for (; e !== null;) {
        var n = e === t ? null : W(e);
        e.remove(), e = n
    }
}

function It(e) {
    var t = e.parent,
        n = e.prev,
        r = e.next;
    n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n))
}

function Dt(e, t, n = !0) {
    var r = [];
    Pt(e, r, !0);
    var s = () => {
            n && M(e), t && t()
        },
        i = r.length;
    if (i > 0) {
        var a = () => --i || s();
        for (var o of r) o.out(a)
    } else s()
}

function Pt(e, t, n) {
    if ((e.f & P) === 0) {
        e.f ^= P;
        var r = e.nodes && e.nodes.t;
        if (r !== null)
            for (const o of r)(o.is_global || n) && t.push(o);
        for (var s = e.first; s !== null;) {
            var i = s.next,
                a = (s.f & ye) !== 0 || (s.f & U) !== 0 && (e.f & H) !== 0;
            Pt(s, t, a ? n : !1), s = i
        }
    }
}

function jn(e) {
    Mt(e, !0)
}

function Mt(e, t) {
    if ((e.f & P) !== 0) {
        e.f ^= P, (e.f & b) === 0 && (g(e, A), se(e));
        for (var n = e.first; n !== null;) {
            var r = n.next,
                s = (n.f & ye) !== 0 || (n.f & U) !== 0;
            Mt(n, s ? t : !1), n = r
        }
        var i = e.nodes && e.nodes.t;
        if (i !== null)
            for (const a of i)(a.is_global || t) && a.in()
    }
}

function Ln(e, t) {
    if (e.nodes)
        for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
            var s = n === r ? null : W(n);
            t.append(n), n = s
        }
}
let ee = !1;

function Ae(e) {
    ee = e
}
let ue = !1;

function st(e) {
    ue = e
}
let _ = null,
    D = !1;

function z(e) {
    _ = e
}
let p = null;

function le(e) {
    p = e
}
let L = null;

function Ft(e) {
    _ !== null && (L === null ? L = [e] : L.push(e))
}
let T = null,
    k = 0,
    R = null;

function qn(e) {
    R = e
}
let jt = 1,
    de = 0,
    te = de;

function it(e) {
    te = e
}

function Lt() {
    return ++jt
}

function we(e) {
    var t = e.f;
    if ((t & A) !== 0) return !0;
    if (t & y && (e.f &= ~ne), (t & F) !== 0) {
        var n = e.deps;
        if (n !== null)
            for (var r = n.length, s = 0; s < r; s++) {
                var i = n[s];
                if (we(i) && gt(i), i.wv > e.wv) return !0
            }(t & I) !== 0 && x === null && g(e, b)
    }
    return !1
}

function qt(e, t, n = !0) {
    var r = e.reactions;
    if (r !== null && !L ? .includes(e))
        for (var s = 0; s < r.length; s++) {
            var i = r[s];
            (i.f & y) !== 0 ? qt(i, t, !1) : t === i && (n ? g(i, A) : (i.f & b) !== 0 && g(i, F), se(i))
        }
}

function Yt(e) {
    var t = T,
        n = k,
        r = R,
        s = _,
        i = L,
        a = w,
        o = D,
        f = te,
        l = e.f;
    T = null, k = 0, R = null, _ = (l & (U | fe)) === 0 ? e : null, L = null, ge(e.ctx), D = !1, te = ++de, e.ac !== null && (St(() => {
        e.ac.abort(ae)
    }), e.ac = null);
    try {
        e.f |= Le;
        var u = e.fn,
            v = u(),
            c = e.deps;
        if (T !== null) {
            var d;
            if (ke(e, k), c !== null && k > 0)
                for (c.length = k + T.length, d = 0; d < T.length; d++) c[k + d] = T[d];
            else e.deps = c = T;
            if (xe() && (e.f & I) !== 0)
                for (d = k; d < c.length; d++)(c[d].reactions ? ? = []).push(e)
        } else c !== null && k < c.length && (ke(e, k), c.length = k);
        if (me() && R !== null && !D && c !== null && (e.f & (y | F | A)) === 0)
            for (d = 0; d < R.length; d++) qt(R[d], e);
        return s !== null && s !== e && (de++, R !== null && (r === null ? r = R : r.push(...R))), (e.f & G) !== 0 && (e.f ^= G), v
    } catch (C) {
        return Tn(C)
    } finally {
        e.f ^= Le, T = t, k = n, R = r, _ = s, L = i, ge(a), D = o, te = f
    }
}

function Yn(e, t) {
    let n = t.reactions;
    if (n !== null) {
        var r = Gt.call(n, e);
        if (r !== -1) {
            var s = n.length - 1;
            s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop())
        }
    }
    n === null && (t.f & y) !== 0 && (T === null || !T.includes(t)) && (g(t, F), (t.f & I) !== 0 && (t.f ^= I, t.f &= ~ne), yt(t), ke(t, 0))
}

function ke(e, t) {
    var n = e.deps;
    if (n !== null)
        for (var r = t; r < n.length; r++) Yn(e, n[r])
}

function he(e) {
    var t = e.f;
    if ((t & V) === 0) {
        g(e, b);
        var n = p,
            r = ee;
        p = e, ee = !0;
        try {
            (t & (H | ot)) !== 0 ? Mn(e) : Ct(e), Ot(e);
            var s = Yt(e);
            e.teardown = typeof s == "function" ? s : null, e.wv = jt;
            var i
        } finally {
            ee = r, p = n
        }
    }
}
async function Xr() {
    await Promise.resolve(), Ye()
}

function Zr() {
    return K.ensure().settled()
}

function oe(e) {
    var t = e.f,
        n = (t & y) !== 0;
    if (_ !== null && !D) {
        var r = p !== null && (p.f & V) !== 0;
        if (!r && !L ? .includes(e)) {
            var s = _.deps;
            if ((_.f & Le) !== 0) e.rv < de && (e.rv = de, T === null && s !== null && s[k] === e ? k++ : T === null ? T = [e] : T.includes(e) || T.push(e));
            else {
                (_.deps ? ? = []).push(e);
                var i = e.reactions;
                i === null ? e.reactions = [_] : i.includes(_) || i.push(_)
            }
        }
    }
    if (ue) {
        if ($.has(e)) return $.get(e);
        if (n) {
            var a = e,
                o = a.v;
            return ((a.f & b) === 0 && a.reactions !== null || Ut(a)) && (o = We(a)), $.set(a, o), o
        }
    } else n && (!x ? .has(e) || h ? .is_fork && !xe()) && (a = e, we(a) && gt(a), ee && xe() && (a.f & I) === 0 && Ht(a));
    if (x ? .has(e)) return x.get(e);
    if ((e.f & G) !== 0) throw e.v;
    return e.v
}

function Ht(e) {
    if (e.deps !== null) {
        e.f ^= I;
        for (const t of e.deps)(t.reactions ? ? = []).push(e), (t.f & y) !== 0 && (t.f & I) === 0 && Ht(t)
    }
}

function Ut(e) {
    if (e.v === E) return !0;
    if (e.deps === null) return !1;
    for (const t of e.deps)
        if ($.has(t) || (t.f & y) !== 0 && Ut(t)) return !0;
    return !1
}

function Jr(e) {
    var t = D;
    try {
        return D = !0, e()
    } finally {
        D = t
    }
}
const Hn = -7169;

function g(e, t) {
    e.f = e.f & Hn | t
}

function Qr(e) {
    if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
        if (Q in e) Be(e);
        else if (!Array.isArray(e))
            for (let t in e) {
                const n = e[t];
                typeof n == "object" && n && Q in n && Be(n)
            }
    }
}

function Be(e, t = new Set) {
    if (typeof e == "object" && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
        t.add(e), e instanceof Date && e.getTime();
        for (let r in e) try {
            Be(e[r], t)
        } catch {}
        const n = ft(e);
        if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
            const r = $t(n);
            for (let s in r) {
                const i = r[s].get;
                if (i) try {
                    i.call(e)
                } catch {}
            }
        }
    }
}

function Bt(e) {
    var t = document.createElement("template");
    return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content
}

function q(e, t) {
    var n = p;
    n.nodes === null && (n.nodes = {
        start: e,
        end: t,
        a: null,
        t: null
    })
}

function es(e, t) {
    var n = (t & un) !== 0,
        r = (t & cn) !== 0,
        s, i = !e.startsWith("<!>");
    return () => {
        if (S) return q(m, null), m;
        s === void 0 && (s = Bt(i ? e : "<!>" + e), n || (s = ie(s)));
        var a = r || xt ? document.importNode(s, !0) : s.cloneNode(!0);
        if (n) {
            var o = ie(a),
                f = a.lastChild;
            q(o, f)
        } else q(a, a);
        return a
    }
}

function Un(e, t, n = "svg") {
    var r = !e.startsWith("<!>"),
        s = `<${n}>${r?e:"<!>"+e}</${n}>`,
        i;
    return () => {
        if (S) return q(m, null), m;
        if (!i) {
            var a = Bt(s),
                o = ie(a);
            i = ie(o)
        }
        var f = i.cloneNode(!0);
        return q(f, f), f
    }
}

function ts(e, t) {
    return Un(e, t, "svg")
}

function ns(e = "") {
    if (!S) {
        var t = Y(e + "");
        return q(t, t), t
    }
    var n = m;
    return n.nodeType !== Oe && (n.before(n = Y()), re(n)), q(n, n), n
}

function rs() {
    if (S) return q(m, null), m;
    var e = document.createDocumentFragment(),
        t = document.createComment(""),
        n = Y();
    return e.append(t, n), q(t, n), e
}

function ss(e, t) {
    if (S) {
        var n = p;
        ((n.f & Ne) === 0 || n.nodes.end === null) && (n.nodes.end = m), hn();
        return
    }
    e !== null && e.before(t)
}
class is {
    anchor;#
    t = new Map;#
    n = new Map;#
    e = new Map;#
    r = new Set;#
    i = !0;
    constructor(t, n = !0) {
        this.anchor = t, this.#i = n
    }#
    s = () => {
        var t = h;
        if (this.#t.has(t)) {
            var n = this.#t.get(t),
                r = this.#n.get(n);
            if (r) jn(r), this.#r.delete(n);
            else {
                var s = this.#e.get(n);
                s && (this.#n.set(n, s.effect), this.#e.delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), r = s.effect)
            }
            for (const [i, a] of this.#t) {
                if (this.#t.delete(i), i === t) break;
                const o = this.#e.get(a);
                o && (M(o.effect), this.#e.delete(a))
            }
            for (const [i, a] of this.#n) {
                if (i === n || this.#r.has(i)) continue;
                const o = () => {
                    if (Array.from(this.#t.values()).includes(i)) {
                        var l = document.createDocumentFragment();
                        Ln(a, l), l.append(Y()), this.#e.set(i, {
                            effect: a,
                            fragment: l
                        })
                    } else M(a);
                    this.#r.delete(i), this.#n.delete(i)
                };
                this.#i || !r ? (this.#r.add(i), Dt(a, o, !1)) : o()
            }
        }
    };#
    f = t => {
        this.#t.delete(t);
        const n = Array.from(this.#t.values());
        for (const [r, s] of this.#e) n.includes(r) || (M(s.effect), this.#e.delete(r))
    };
    ensure(t, n) {
        var r = h,
            s = Cn();
        if (n && !this.#n.has(t) && !this.#e.has(t))
            if (s) {
                var i = document.createDocumentFragment(),
                    a = Y();
                i.append(a), this.#e.set(t, {
                    effect: rt(() => n(a)),
                    fragment: i
                })
            } else this.#n.set(t, rt(() => n(this.anchor)));
        if (this.#t.set(r, t), s) {
            for (const [o, f] of this.#n) o === t ? r.skipped_effects.delete(f) : r.skipped_effects.add(f);
            for (const [o, f] of this.#e) o === t ? r.skipped_effects.delete(f.effect) : r.skipped_effects.add(f.effect);
            r.oncommit(this.#s), r.ondiscard(this.#f)
        } else S && (this.anchor = m), this.#s()
    }
}
export {
    xr as $, Ar as A, is as B, ct as C, dn as D, ye as E, Ue as F, h as G, lt as H, Wn as I, rt as J, Cn as K, Xe as L, Pr as M, Bn as N, Vt as O, sr as P, or as Q, ir as R, jn as S, Dt as T, P as U, En as V, ar as W, Yr as X, M as Y, qr as Z, jr as _, ss as a, Ee as a$, Tr as a0, Bt as a1, q as a2, Dn as a3, Gr as a4, Sr as a5, Or as a6, Cr as a7, Dr as a8, $r as a9, Ce as aA, Rr as aB, Ir as aC, Nr as aD, mn as aE, yn as aF, wn as aG, Zr as aH, Xr as aI, $n as aJ, pn as aK, _e as aL, nr as aM, cr as aN, ue as aO, V as aP, vr as aQ, _r as aR, ur as aS, lr as aT, Q as aU, Xn as aV, xe as aW, Fe as aX, ge as aY, Tn as aZ, Ln as a_, me as aa, Kn as ab, An as ac, K as ad, be as ae, ve as af, Ye as ag, E as ah, ts as ai, p as aj, Fn as ak, Ke as al, $e as am, St as an, Vn as ao, z as ap, le as aq, _ as ar, B as as, ce as at, X as au, Xt as av, yr as aw, Zt as ax, Qn as ay, tr as az, es as b, rr as b0, pe as b1, Ve as b2, Er as b3, Fr as b4, _n as b5, er as b6, Br as b7, Vr as b8, ns as b9, Wr as ba, gr as bb, Mr as bc, wt as bd, wr as be, mr as bf, ft as bg, Zn as bh, $t as bi, H as bj, Ne as bk, pr as bl, dr as bm, hr as bn, Gn as bo, Kr as bp, On as bq, rs as c, Y as d, zr as e, Lr as f, ie as g, S as h, W as i, re as j, m as k, w as l, Hr as m, Jr as n, zn as o, oe as p, Qr as q, Wt as r, br as s, ze as t, Ur as u, hn as v, fr as w, Sn as x, kr as y, vn as z
};