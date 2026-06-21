import "../chunks/DsnmJJEf.js";
import "../chunks/DL2WV3pP.js";
import {
    a6 as u,
    b as f,
    a as p,
    a7 as w,
    _ as s,
    a0 as t,
    f as x,
    Z as b,
    a9 as j
} from "../chunks/CqXL5qBA.js";
import {
    s as l
} from "../chunks/Dd-87xu5.js";
import {
    i as C
} from "../chunks/Dhdvka5c.js";
import {
    i as k
} from "../chunks/Bdw06FOb.js";
import {
    p as o
} from "../chunks/B-XBmSK_.js";
var L = f('<h1 class="errorCode svelte-1j96wlh"> </h1> <h2 class="errorMessage svelte-1j96wlh"> </h2>', 1),
    M = f('<main class="svelte-1j96wlh"><!></main>');

function E(h, v) {
    u(v, !1), k();
    var r = M(),
        n = s(r); {
        var c = a => {
            var i = L(),
                e = x(i),
                _ = s(e, !0);
            t(e);
            var m = b(e, 2),
                d = s(m, !0);
            t(m), j(g => {
                l(_, o.status), l(d, g)
            }, [() => o.error.message.toLowerCase()]), p(a, i)
        };
        C(n, a => {
            o.error && a(c)
        })
    }
    t(r), p(h, r), w()
}
export {
    E as component
};