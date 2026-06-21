import {
    av as d,
    h as g,
    aw as y,
    ax as o,
    m as b,
    ay as h,
    ar as i,
    l as n,
    O as v,
    az as f,
    aA as x,
    n as r,
    aB as C,
    ag as w,
    aC as S,
    aD as k,
    aE as A,
    aF as D,
    aG as E,
    aH as O,
    aI as j
} from "./CqXL5qBA.js";
import {
    h as z,
    m as M,
    u as P
} from "./Dd-87xu5.js";
import {
    c as U
} from "./o7ZGrj9p.js";

function $(t, e) {
    if (d(), g) {
        const a = window.__svelte ? .h;
        if (a ? .has(t)) return a.get(t);
        y()
    }
    return e()
}

function q() {
    return i === null && h(), (i.ac ? ? = new AbortController).signal
}

function _(t) {
    n === null && o(), x && n.l !== null ? c(n).m.push(t) : b(() => {
        const e = r(t);
        if (typeof e == "function") return e
    })
}

function B(t) {
    n === null && o(), _(() => () => r(t))
}

function F(t, e, {
    bubbles: a = !1,
    cancelable: l = !1
} = {}) {
    return new CustomEvent(t, {
        detail: e,
        bubbles: a,
        cancelable: l
    })
}

function G() {
    const t = n;
    return t === null && o(), (e, a, l) => {
        const s = t.s.$$events ? .[e];
        if (s) {
            const m = v(s) ? s.slice() : [s],
                u = F(e, a, l);
            for (const p of m) p.call(t.x, u);
            return !u.defaultPrevented
        }
        return !0
    }
}

function H(t) {
    n === null && o(), n.l === null && f(), c(n).b.push(t)
}

function I(t) {
    n === null && o(), n.l === null && f(), c(n).a.push(t)
}

function c(t) {
    var e = t.l;
    return e.u ? ? = {
        a: [],
        b: [],
        m: []
    }
}
const K = Object.freeze(Object.defineProperty({
    __proto__: null,
    afterUpdate: I,
    beforeUpdate: H,
    createContext: C,
    createEventDispatcher: G,
    createRawSnippet: U,
    flushSync: w,
    fork: S,
    getAbortSignal: q,
    getAllContexts: k,
    getContext: A,
    hasContext: D,
    hydratable: $,
    hydrate: z,
    mount: M,
    onDestroy: B,
    onMount: _,
    setContext: E,
    settled: O,
    tick: j,
    unmount: P,
    untrack: r
}, Symbol.toStringTag, {
    value: "Module"
}));
export {
    _ as o, K as s
};