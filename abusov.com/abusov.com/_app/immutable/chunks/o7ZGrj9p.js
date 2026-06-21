import {
    e as c,
    h as p,
    v as f,
    a1 as _,
    a2 as d,
    a3 as h,
    E as l,
    B as u,
    k as m,
    g
} from "./CqXL5qBA.js";

function y(n, r, ...t) {
    var a = new u(n);
    c(() => {
        const e = r() ? ? null;
        a.ensure(e, e && (s => e(s, ...t)))
    }, l)
}

function E(n) {
    return (r, ...t) => {
        var a = n(...t),
            e;
        if (p) e = m, f();
        else {
            var s = a.render().trim(),
                o = _(s);
            e = g(o), r.before(e)
        }
        const i = a.setup ? .(e);
        d(e, e), typeof i == "function" && h(i)
    }
}
export {
    E as c, y as s
};