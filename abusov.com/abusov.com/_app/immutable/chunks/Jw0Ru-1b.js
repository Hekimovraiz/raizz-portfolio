import {
    h as n,
    v as A,
    aa as w,
    e as x,
    ab as b,
    z as B,
    j as D,
    A as L,
    s as c,
    B as S,
    V as H,
    F as v,
    L as p,
    M as E,
    ac as M,
    ad as R,
    ae as j,
    af as q,
    ag as z,
    ah as F
} from "./CqXL5qBA.js";
const T = 0,
    _ = 1;

function O(h, g, y, r, l) {
    n && A();
    var d = w(),
        t = F,
        i = d ? p(t) : E(t, !1, !1),
        f = d ? p(t) : E(t, !1, !1),
        a = new S(h);
    x(() => {
        var u = g(),
            m = !1;
        let I = n && b(u) === (h.data === B);
        if (I && (D(L()), c(!1)), b(u)) {
            var k = M(),
                N = !1;
            const s = e => {
                if (!m) {
                    N = !0, k(!1), R.ensure(), n && c(!1);
                    try {
                        e()
                    } finally {
                        j(), q || z()
                    }
                }
            };
            u.then(e => {
                s(() => {
                    v(i, e), a.ensure(_, r && (o => r(o, i)))
                })
            }, e => {
                s(() => {
                    if (v(f, e), a.ensure(_, l && (o => l(o, f))), !l) throw f.v
                })
            }), n ? a.ensure(T, y) : H(() => {
                N || s(() => {
                    a.ensure(T, y)
                })
            })
        } else v(i, u), a.ensure(_, r && (s => r(s, i)));
        return I && c(!0), () => {
            m = !0
        }
    })
}
export {
    O as a
};