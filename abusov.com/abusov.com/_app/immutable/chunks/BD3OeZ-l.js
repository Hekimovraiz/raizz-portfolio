import {
    a4 as o,
    h as f,
    j as i,
    g as p
} from "./CqXL5qBA.js";

function c(r, e) {
    f && i(p(r)), o(() => {
        var t = e();
        for (var s in t) {
            var a = t[s];
            a ? r.style.setProperty(s, a) : r.style.removeProperty(s)
        }
    })
}
export {
    c
};