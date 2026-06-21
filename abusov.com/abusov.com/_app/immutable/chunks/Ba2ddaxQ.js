import {
    V as D,
    ba as K,
    Y as P,
    J as q,
    b8 as z,
    h as N,
    O as m,
    bb as x,
    bc as rr,
    a3 as er,
    bd as fr,
    p as ir,
    be as tr,
    s as U,
    ah as sr,
    bf as ur,
    bg as ar,
    bh as or,
    bi as lr
} from "./CqXL5qBA.js";
import {
    c as cr,
    f as nr,
    d as vr,
    n as dr,
    g as br
} from "./DS87nQgO.js";

function gr(r, i) {
    if (i) {
        const e = document.body;
        r.autofocus = !0, D(() => {
            document.activeElement === e && r.focus()
        })
    }
}
let V = !1;

function _r() {
    V || (V = !0, document.addEventListener("reset", r => {
        Promise.resolve().then(() => {
            if (!r.defaultPrevented)
                for (const i of r.target.elements) i.__on_r ? .()
        })
    }, {
        capture: !0
    }))
}

function hr(r, i) {
    var e = void 0,
        f;
    K(() => {
        e !== (e = i()) && (f && (P(f), f = null), e && (f = q(() => {
            z(() => e(r))
        })))
    })
}

function F(r) {
    var i, e, f = "";
    if (typeof r == "string" || typeof r == "number") f += r;
    else if (typeof r == "object")
        if (Array.isArray(r)) {
            var t = r.length;
            for (i = 0; i < t; i++) r[i] && (e = F(r[i])) && (f && (f += " "), f += e)
        } else
            for (e in r) r[e] && (f && (f += " "), f += e);
    return f
}

function Ar() {
    for (var r, i, e = 0, f = "", t = arguments.length; e < t; e++)(r = arguments[e]) && (i = F(r)) && (f && (f += " "), f += i);
    return f
}

function pr(r) {
    return typeof r == "object" ? Ar(r) : r ? ? ""
}
const Y = [...` 	
\r\f \v\uFEFF`];

function Nr(r, i, e) {
    var f = r == null ? "" : "" + r;
    if (i && (f = f ? f + " " + i : i), e) {
        for (var t in e)
            if (e[t]) f = f ? f + " " + t : t;
            else if (f.length)
            for (var s = t.length, o = 0;
                (o = f.indexOf(t, o)) >= 0;) {
                var c = o + s;
                (o === 0 || Y.includes(f[o - 1])) && (c === f.length || Y.includes(f[c])) ? f = (o === 0 ? "" : f.substring(0, o)) + f.substring(c + 1): o = c
            }
    }
    return f === "" ? null : f
}

function H(r, i = !1) {
    var e = i ? " !important;" : ";",
        f = "";
    for (var t in r) {
        var s = r[t];
        s != null && s !== "" && (f += " " + t + ": " + s + e)
    }
    return f
}

function w(r) {
    return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r
}

function Sr(r, i) {
    if (i) {
        var e = "",
            f, t;
        if (Array.isArray(i) ? (f = i[0], t = i[1]) : f = i, r) {
            r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
            var s = !1,
                o = 0,
                c = !1,
                d = [];
            f && d.push(...Object.keys(f).map(w)), t && d.push(...Object.keys(t).map(w));
            var n = 0,
                _ = -1;
            const E = r.length;
            for (var v = 0; v < E; v++) {
                var u = r[v];
                if (c ? u === "/" && r[v - 1] === "*" && (c = !1) : s ? s === u && (s = !1) : u === "/" && r[v + 1] === "*" ? c = !0 : u === '"' || u === "'" ? s = u : u === "(" ? o++ : u === ")" && o--, !c && s === !1 && o === 0) {
                    if (u === ":" && _ === -1) _ = v;
                    else if (u === ";" || v === E - 1) {
                        if (_ !== -1) {
                            var S = w(r.substring(n, _).trim());
                            if (!d.includes(S)) {
                                u !== ";" && v++;
                                var p = r.substring(n, v).trim();
                                e += " " + p + ";"
                            }
                        }
                        n = v + 1, _ = -1
                    }
                }
            }
        }
        return f && (e += H(f)), t && (e += H(t, !0)), e = e.trim(), e === "" ? null : e
    }
    return r == null ? null : String(r)
}

function Er(r, i, e, f, t, s) {
    var o = r.__className;
    if (N || o !== e || o === void 0) {
        var c = Nr(e, f, s);
        (!N || c !== r.getAttribute("class")) && (c == null ? r.removeAttribute("class") : i ? r.className = c : r.setAttribute("class", c)), r.__className = e
    } else if (s && t !== s)
        for (var d in s) {
            var n = !!s[d];
            (t == null || n !== !!t[d]) && r.classList.toggle(d, n)
        }
    return s
}

function M(r, i = {}, e, f) {
    for (var t in e) {
        var s = e[t];
        i[t] !== s && (e[t] == null ? r.style.removeProperty(t) : r.style.setProperty(t, s, f))
    }
}

function Lr(r, i, e, f) {
    var t = r.__style;
    if (N || t !== i) {
        var s = Sr(i, f);
        (!N || s !== r.getAttribute("style")) && (s == null ? r.removeAttribute("style") : r.style.cssText = s), r.__style = i
    } else f && (Array.isArray(f) ? (M(r, e ? .[0], f[0]), M(r, e ? .[1], f[1], "important")) : M(r, e, f));
    return f
}

function $(r, i, e = !1) {
    if (r.multiple) {
        if (i == null) return;
        if (!m(i)) return x();
        for (var f of r.options) f.selected = i.includes(R(f));
        return
    }
    for (f of r.options) {
        var t = R(f);
        if (rr(t, i)) {
            f.selected = !0;
            return
        }
    }(!e || i !== void 0) && (r.selectedIndex = -1)
}

function Tr(r) {
    var i = new MutationObserver(() => {
        $(r, r.__value)
    });
    i.observe(r, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["value"]
    }), er(() => {
        i.disconnect()
    })
}

function R(r) {
    return "__value" in r ? r.__value : r.value
}
const O = Symbol("class"),
    y = Symbol("style"),
    G = Symbol("is custom element"),
    J = Symbol("is html");

function Or(r) {
    if (N) {
        var i = !1,
            e = () => {
                if (!i) {
                    if (i = !0, r.hasAttribute("value")) {
                        var f = r.value;
                        I(r, "value", null), r.value = f
                    }
                    if (r.hasAttribute("checked")) {
                        var t = r.checked;
                        I(r, "checked", null), r.checked = t
                    }
                }
            };
        r.__on_r = e, D(e), _r()
    }
}

function yr(r, i) {
    i ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected")
}

function I(r, i, e, f) {
    var t = Z(r);
    N && (t[i] = r.getAttribute(i), i === "src" || i === "srcset" || i === "href" && r.nodeName === "LINK") || t[i] !== (t[i] = e) && (i === "loading" && (r[or] = e), e == null ? r.removeAttribute(i) : typeof e != "string" && Q(r).includes(i) ? r[i] = e : r.setAttribute(i, e))
}

function Ir(r, i, e, f, t = !1, s = !1) {
    if (N && t && r.tagName === "INPUT") {
        var o = r,
            c = o.type === "checkbox" ? "defaultChecked" : "defaultValue";
        c in e || Or(o)
    }
    var d = Z(r),
        n = d[G],
        _ = !d[J];
    let v = N && n;
    v && U(!1);
    var u = i || {},
        S = r.tagName === "OPTION";
    for (var p in i) p in e || (e[p] = null);
    e.class ? e.class = pr(e.class) : e[O] && (e.class = null), e[y] && (e.style ? ? = null);
    var E = Q(r);
    for (const a in e) {
        let l = e[a];
        if (S && a === "value" && l == null) {
            r.value = r.__value = "", u[a] = l;
            continue
        }
        if (a === "class") {
            var T = r.namespaceURI === "http://www.w3.org/1999/xhtml";
            Er(r, T, l, f, i ? .[O], e[O]), u[a] = l, u[O] = e[O];
            continue
        }
        if (a === "style") {
            Lr(r, l, i ? .[y], e[y]), u[a] = l, u[y] = e[y];
            continue
        }
        var h = u[a];
        if (!(l === h && !(l === void 0 && r.hasAttribute(a)))) {
            u[a] = l;
            var j = a[0] + a[1];
            if (j !== "$$")
                if (j === "on") {
                    const A = {},
                        L = "$$" + a;
                    let b = a.slice(2);
                    var C = br(b);
                    if (cr(b) && (b = b.slice(0, -7), A.capture = !0), !C && h) {
                        if (l != null) continue;
                        r.removeEventListener(b, u[L], A), u[L] = null
                    }
                    if (l != null)
                        if (C) r[`__${b}`] = l, vr([b]);
                        else {
                            let W = function(X) {
                                u[a].call(this, X)
                            };
                            u[L] = nr(b, r, W, A)
                        }
                    else C && (r[`__${b}`] = void 0)
                } else if (a === "style") I(r, a, l);
            else if (a === "autofocus") gr(r, !!l);
            else if (!n && (a === "__value" || a === "value" && l != null)) r.value = r.__value = l;
            else if (a === "selected" && S) yr(r, l);
            else {
                var g = a;
                _ || (g = dr(g));
                var k = g === "defaultValue" || g === "defaultChecked";
                if (l == null && !n && !k)
                    if (d[a] = null, g === "value" || g === "checked") {
                        let A = r;
                        const L = i === void 0;
                        if (g === "value") {
                            let b = A.defaultValue;
                            A.removeAttribute(g), A.defaultValue = b, A.value = A.__value = L ? b : null
                        } else {
                            let b = A.defaultChecked;
                            A.removeAttribute(g), A.defaultChecked = b, A.checked = L ? b : !1
                        }
                    } else r.removeAttribute(a);
                else k || E.includes(g) && (n || typeof l != "string") ? (r[g] = l, g in d && (d[g] = sr)) : typeof l != "function" && I(r, g, l)
            }
        }
    }
    return v && U(!0), u
}

function Mr(r, i, e = [], f = [], t = [], s, o = !1, c = !1) {
    fr(t, e, f, d => {
        var n = void 0,
            _ = {},
            v = r.nodeName === "SELECT",
            u = !1;
        if (K(() => {
                var p = i(...d.map(ir)),
                    E = Ir(r, n, p, s, o, c);
                u && v && "value" in p && $(r, p.value);
                for (let h of Object.getOwnPropertySymbols(_)) p[h] || P(_[h]);
                for (let h of Object.getOwnPropertySymbols(p)) {
                    var T = p[h];
                    h.description === tr && (!n || T !== n[h]) && (_[h] && P(_[h]), _[h] = q(() => hr(r, () => T))), E[h] = T
                }
                n = E
            }), v) {
            var S = r;
            z(() => {
                $(S, n.value, !0), Tr(S)
            })
        }
        u = !0
    })
}

function Z(r) {
    return r.__attributes ? ? = {
        [G]: r.nodeName.includes("-"),
        [J]: r.namespaceURI === ur
    }
}
var B = new Map;

function Q(r) {
    var i = r.getAttribute("is") || r.nodeName,
        e = B.get(i);
    if (e) return e;
    B.set(i, e = []);
    for (var f, t = r, s = Element.prototype; s !== t;) {
        f = lr(t);
        for (var o in f) f[o].set && e.push(o);
        t = ar(t)
    }
    return e
}
export {
    Mr as a, Er as b, Lr as c, I as s
};