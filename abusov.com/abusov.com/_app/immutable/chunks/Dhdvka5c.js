import {
    e as c,
    h as _,
    v as o,
    E as d,
    y,
    z as E,
    A as T,
    j as b,
    B as v,
    s as f
} from "./CqXL5qBA.js";

function g(t, i, h = !1) {
    _ && o();
    var r = new v(t),
        u = h ? d : 0;

    function n(a, s) {
        if (_) {
            const l = y(t) === E;
            if (a === l) {
                var e = T();
                b(e), r.anchor = e, f(!1), r.ensure(a, s), f(!0);
                return
            }
        }
        r.ensure(a, s)
    }
    c(() => {
        var a = !1;
        i((s, e = !0) => {
            a = !0, n(e, s)
        }), a || n(!1, null)
    }, u)
}
export {
    g as i
};