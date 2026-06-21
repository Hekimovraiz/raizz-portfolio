import {
    _ as e
} from "./BXl3LOEh.js";
import "./DsnmJJEf.js";
import {
    a6 as K,
    c as a,
    f as d,
    a as i,
    a7 as M,
    p as g,
    a8 as w,
    b,
    a9 as T
} from "./CqXL5qBA.js";
import {
    e as V,
    r as j
} from "./DS87nQgO.js";
import {
    a as x
} from "./Jw0Ru-1b.js";
import {
    i as v
} from "./Dhdvka5c.js";
import {
    s as _
} from "./Ba2ddaxQ.js";
import {
    p as W
} from "./DAx4O-4V.js"; /* empty css        */
var N = b('<img class="svelte-3ned59"/>'),
    Q = b('<img class="svelte-3ned59"/>'),
    S = b('<img class="svelte-3ned59"/>');

function nt(G, r) {
    K(r, !0);
    let k = W(r, "sizes", 3, ""),
        h = W(r, "loading", 3, "eager");
    const U = w(() => r.image ? /^https?:\/\//.test(r.image) : !1),
        q = w(() => r.image ? r.image.endsWith(".gif") : !1);
    async function y(n) {
        if (n.endsWith(".gif")) {
            const t = Object.assign({
                "/src/content/projects/dubflow/dubs.gif": () => e(() =>
                    import ("./EVnZDFV3.js"), []).then(c => c.default)
            });
            for (const [c, O] of Object.entries(t))
                if (c.includes(n)) return await O()
        }
        const o = Object.assign({
            "/src/content/blog/atari/atari-games.png": () => e(() =>
                import ("./Cmny5ffk.js"), []).then(t => t.default),
            "/src/content/blog/atari/atari-transparent.png": () => e(() =>
                import ("./r4k6nJ_5.js"), []).then(t => t.default),
            "/src/content/blog/attention/transformer-diagram.png": () => e(() =>
                import ("./BOL7yu5d.js"), []).then(t => t.default),
            "/src/content/blog/bus/gttp.png": () => e(() =>
                import ("./DrFQMEMo.js"), []).then(t => t.default),
            "/src/content/blog/bus/histogram.png": () => e(() =>
                import ("./wxInPkfQ.js"), []).then(t => t.default),
            "/src/content/blog/bus/onebusaway.jpg": () => e(() =>
                import ("./DgasOL_p.js"), []).then(t => t.default),
            "/src/content/blog/bus/scatter.png": () => e(() =>
                import ("./C9QMC6gX.js"), []).then(t => t.default),
            "/src/content/blog/imagenet/alexnet-diagram.png": () => e(() =>
                import ("./BDDZM56L.js"), []).then(t => t.default),
            "/src/content/blog/imagenet/layer.png": () => e(() =>
                import ("./DQta1113.js"), []).then(t => t.default),
            "/src/content/blog/mac-ip-addressing/arp-resolution-process-temp.png": () => e(() =>
                import ("./Dzu7-OHF.js"), []).then(t => t.default),
            "/src/content/blog/mac-ip-addressing/hop-by-hop-data-journey-temp.png": () => e(() =>
                import ("./pNFuomc6.js"), []).then(t => t.default),
            "/src/content/blog/mac-ip-addressing/ipv4-vs-ipv6-comparison-temp.png": () => e(() =>
                import ("./DNCoa_fB.js"), []).then(t => t.default),
            "/src/content/blog/mac-ip-addressing/mac-address-anatomy-temp.png": () => e(() =>
                import ("./BFOgpTds.js"), []).then(t => t.default),
            "/src/content/blog/optimizing-sveltekit/beach.png": () => e(() =>
                import ("./CflKMtB0.js"), []).then(t => t.default),
            "/src/content/blog/optimizing-sveltekit/og-image.png": () => e(() =>
                import ("./Cnn9vJZ_.js"), []).then(t => t.default),
            "/src/content/blog/optimizing-sveltekit/pagespeed-desktop-optimized.png": () => e(() =>
                import ("./CciUfdi4.js"), []).then(t => t.default),
            "/src/content/blog/optimizing-sveltekit/pagespeed-desktop-unoptimized.png": () => e(() =>
                import ("./tUgASfba.js"), []).then(t => t.default),
            "/src/content/blog/optimizing-sveltekit/pagespeed-mobile-optimized.png": () => e(() =>
                import ("./8ME7VVaM.js"), []).then(t => t.default),
            "/src/content/blog/optimizing-sveltekit/pagespeed-mobile-unoptimized.png": () => e(() =>
                import ("./BYWhV2gA.js"), []).then(t => t.default),
            "/src/content/blog/optimizing-sveltekit/webpagetest-desktop-optimized.png": () => e(() =>
                import ("./CpUFEq3n.js"), []).then(t => t.default),
            "/src/content/blog/optimizing-sveltekit/webpagetest-desktop-unoptimized.png": () => e(() =>
                import ("./DBtBjk4u.js"), []).then(t => t.default),
            "/src/content/blog/optimizing-sveltekit/webpagetest-mobile-optimized.png": () => e(() =>
                import ("./JJoUCd6s.js"), []).then(t => t.default),
            "/src/content/blog/optimizing-sveltekit/webpagetest-mobile-unoptimized.png": () => e(() =>
                import ("./CFXsOv3-.js"), []).then(t => t.default),
            "/src/content/blog/spatial-page-transitions/og-image.png": () => e(() =>
                import ("./t42HsBiI.js"), []).then(t => t.default),
            "/src/content/blog/yolo/object-detection.jpg": () => e(() =>
                import ("./DWrsVQRf.js"), []).then(t => t.default),
            "/src/content/blog/yolo/yolo-architecture.png": () => e(() =>
                import ("./DOo_C2Tu.js"), []).then(t => t.default),
            "/src/content/projects/audibrief/audibrief.png": () => e(() =>
                import ("./jcl-BxQD.js"), []).then(t => t.default),
            "/src/content/projects/calculator/calculator.png": () => e(() =>
                import ("./Cr8QOGJc.js"), []).then(t => t.default),
            "/src/content/projects/calculator/calculator2.png": () => e(() =>
                import ("./D7VT_d8p.js"), []).then(t => t.default),
            "/src/content/projects/calculator/calculator3.png": () => e(() =>
                import ("./B5xwj76Q.js"), []).then(t => t.default),
            "/src/content/projects/calculator/calculator4.png": () => e(() =>
                import ("./BEUfThDL.js"), []).then(t => t.default),
            "/src/content/projects/cmail/cmail.png": () => e(() =>
                import ("./BrNdOwId.js"), []).then(t => t.default),
            "/src/content/projects/demeter/demeter-thumbnail.png": () => e(() =>
                import ("./BS2nWJXB.js"), []).then(t => t.default),
            "/src/content/projects/demeter/demeter.png": () => e(() =>
                import ("./DILyABpn.js"), []).then(t => t.default),
            "/src/content/projects/demeter/demeter2.png": () => e(() =>
                import ("./DGdERsJT.js"), []).then(t => t.default),
            "/src/content/projects/demeter/demeter3.png": () => e(() =>
                import ("./C-NUGOWq.js"), []).then(t => t.default),
            "/src/content/projects/demeter/demeter4.png": () => e(() =>
                import ("./CfVotVgp.js"), []).then(t => t.default),
            "/src/content/projects/demeter/demeter5.png": () => e(() =>
                import ("./DBu4haND.js"), []).then(t => t.default),
            "/src/content/projects/demeter/demeter6.png": () => e(() =>
                import ("./B5lI76fn.js"), []).then(t => t.default),
            "/src/content/projects/demeter/diagram.jpg": () => e(() =>
                import ("./CHncvA11.js"), []).then(t => t.default),
            "/src/content/projects/dubflow/diagram.jpg": () => e(() =>
                import ("./Bg0Xqxd7.js"), []).then(t => t.default),
            "/src/content/projects/dubflow/dubflow.png": () => e(() =>
                import ("./C2Mgksib.js"), []).then(t => t.default),
            "/src/content/projects/forgotten-europe/fep.png": () => e(() =>
                import ("./CZEW9wnn.js"), []).then(t => t.default),
            "/src/content/projects/forgotten-europe/fep2.png": () => e(() =>
                import ("./D-cyTQyK.js"), []).then(t => t.default),
            "/src/content/projects/forgotten-europe/fep3.png": () => e(() =>
                import ("./2tdvVVfu.js"), []).then(t => t.default),
            "/src/content/projects/forgotten-europe/fep4.png": () => e(() =>
                import ("./DOwL21df.js"), []).then(t => t.default),
            "/src/content/projects/forgotten-europe/fep5.png": () => e(() =>
                import ("./B-puK6IS.js"), []).then(t => t.default),
            "/src/content/projects/forklift/forklift-1.png": () => e(() =>
                import ("./BcfgtBLX.js"), []).then(t => t.default),
            "/src/content/projects/forklift/forklift-2.png": () => e(() =>
                import ("./CCFJBFkZ.js"), []).then(t => t.default),
            "/src/content/projects/forklift/forklift-3.png": () => e(() =>
                import ("./B_yCrvZf.js"), []).then(t => t.default),
            "/src/content/projects/forklift/forklift-4.png": () => e(() =>
                import ("./DSox45iz.js"), []).then(t => t.default),
            "/src/content/projects/forklift/forklift-5.png": () => e(() =>
                import ("./PbMNUvP2.js"), []).then(t => t.default),
            "/src/content/projects/forklift/forklift-6.png": () => e(() =>
                import ("./yJXtCZpL.js"), []).then(t => t.default),
            "/src/content/projects/gradenight/gradenight.png": () => e(() =>
                import ("./lkZjXW-h.js"), []).then(t => t.default),
            "/src/content/projects/gradenight/gradenight1.png": () => e(() =>
                import ("./zPSlP8RP.js"), []).then(t => t.default),
            "/src/content/projects/gradenight/gradenight2.png": () => e(() =>
                import ("./CuLiGU7c.js"), []).then(t => t.default),
            "/src/content/projects/littlemastersclub/lmc.png": () => e(() =>
                import ("./PtFo3QPJ.js"), []).then(t => t.default),
            "/src/content/projects/littlemastersclub/lmc2.png": () => e(() =>
                import ("./tS6MaqNY.js"), []).then(t => t.default),
            "/src/content/projects/littlemastersclub/lmc3.png": () => e(() =>
                import ("./B0fnJ_Qp.js"), []).then(t => t.default),
            "/src/content/projects/littlemastersclub/lmc4.png": () => e(() =>
                import ("./DOtpNMV8.js"), []).then(t => t.default),
            "/src/content/projects/littlemastersclub/lmc5.png": () => e(() =>
                import ("./CjEHkeBg.js"), []).then(t => t.default),
            "/src/content/projects/midnight/midnight-ctp.png": () => e(() =>
                import ("./C9ixFds_.js"), []).then(t => t.default),
            "/src/content/projects/midnight/midnight-mt.png": () => e(() =>
                import ("./tFSbpT59.js"), []).then(t => t.default),
            "/src/content/projects/midnight/midnight-v1.png": () => e(() =>
                import ("./CHL9Vtrn.js"), []).then(t => t.default),
            "/src/content/projects/midnight/midnight-vc.png": () => e(() =>
                import ("./DH-UjQ2n.js"), []).then(t => t.default),
            "/src/content/projects/midnight/midnight.png": () => e(() =>
                import ("./Ck6GBwdl.js"), []).then(t => t.default),
            "/src/content/projects/midnight/midnight2.png": () => e(() =>
                import ("./BUK-kXjT.js"), []).then(t => t.default),
            "/src/content/projects/number-alchemy/feature.png": () => e(() =>
                import ("./C_AEi4C9.js"), []).then(t => t.default),
            "/src/content/projects/number-alchemy/screen1.png": () => e(() =>
                import ("./C-zGejy_.js"), []).then(t => t.default),
            "/src/content/projects/number-alchemy/screen2.png": () => e(() =>
                import ("./CL4iqFi4.js"), []).then(t => t.default),
            "/src/content/projects/number-alchemy/screen3.png": () => e(() =>
                import ("./BozFTLhy.js"), []).then(t => t.default),
            "/src/content/projects/orbit/orbit-thumbnail.png": () => e(() =>
                import ("./C51I9cbJ.js"), []).then(t => t.default),
            "/src/content/projects/orbit/orbit.png": () => e(() =>
                import ("./Bc8P4r-P.js"), []).then(t => t.default),
            "/src/content/projects/orbit/orbit2.png": () => e(() =>
                import ("./CDHZ1Cva.js"), []).then(t => t.default),
            "/src/content/projects/orbit/orbit3.png": () => e(() =>
                import ("./vBQb4L6v.js"), []).then(t => t.default),
            "/src/content/projects/orbit/orbit4.png": () => e(() =>
                import ("./BTXOTbFj.js"), []).then(t => t.default),
            "/src/content/projects/papercut/papercut.png": () => e(() =>
                import ("./DHBp8704.js"), []).then(t => t.default),
            "/src/content/projects/papercut/papercut1.png": () => e(() =>
                import ("./Ctj4I6NE.js"), []).then(t => t.default),
            "/src/content/projects/papercut/papercut2.png": () => e(() =>
                import ("./xxvKP-u3.js"), []).then(t => t.default),
            "/src/content/projects/pinscout/pinscout.png": () => e(() =>
                import ("./B6Tl0PvU.js"), []).then(t => t.default),
            "/src/content/projects/pinscout/pinscout2.png": () => e(() =>
                import ("./B-fpHDdy.js"), []).then(t => t.default),
            "/src/content/projects/pinscout/pinscout3.png": () => e(() =>
                import ("./Dn7iZ9sr.js"), []).then(t => t.default),
            "/src/content/projects/pinscout/pinscout4.png": () => e(() =>
                import ("./C9xi3KmU.js"), []).then(t => t.default),
            "/src/content/projects/re-start/re-start.png": () => e(() =>
                import ("./Bl5CE2C0.js"), []).then(t => t.default),
            "/src/content/projects/respir/respir.png": () => e(() =>
                import ("./uZbBY3oH.js"), []).then(t => t.default),
            "/src/content/projects/respir/respir2.png": () => e(() =>
                import ("./B-kgQTlR.js"), []).then(t => t.default),
            "/src/content/projects/respir/respir3.png": () => e(() =>
                import ("./BBSDaUsV.js"), []).then(t => t.default),
            "/src/content/projects/respir/respir4.png": () => e(() =>
                import ("./DProu4tN.js"), []).then(t => t.default),
            "/src/content/projects/system24/s24-1.png": () => e(() =>
                import ("./DNmvxHd0.js"), []).then(t => t.default),
            "/src/content/projects/system24/s24-2.png": () => e(() =>
                import ("./Bo96bUw7.js"), []).then(t => t.default),
            "/src/content/projects/system24/s24-preview.png": () => e(() =>
                import ("./BwD5qlOS.js"), []).then(t => t.default),
            "/src/content/projects/system24/s24-ss.png": () => e(() =>
                import ("./CirTd3Dr.js"), []).then(t => t.default),
            "/src/content/projects/tuxmate/thumbnail-tuxmate.png": () => e(() =>
                import ("./BNxim3he.js"), []).then(t => t.default),
            "/src/content/projects/tuxmate/tuxmate1.png": () => e(() =>
                import ("./CmHyCj1Y.js"), []).then(t => t.default),
            "/src/content/projects/tuxmate/tuxmate2.png": () => e(() =>
                import ("./Bh2vnZrJ.js"), []).then(t => t.default),
            "/src/content/projects/tuxmate/tuxmate3.png": () => e(() =>
                import ("./CsyR8zid.js"), []).then(t => t.default),
            "/src/content/projects/tuxmate/tuxmate4.png": () => e(() =>
                import ("./BSXobjwq.js"), []).then(t => t.default),
            "/src/routes/uses/11.png": () => e(() =>
                import ("./BzDS1qAw.js"), []).then(t => t.default),
            "/src/routes/uses/22.png": () => e(() =>
                import ("./BtWqvYVN.js"), []).then(t => t.default),
            "/src/routes/uses/33.png": () => e(() =>
                import ("./C2S-v-G5.js"), []).then(t => t.default)
        });
        for (const [t, c] of Object.entries(o))
            if (t.includes(n)) return await c()
    }
    var z = a(),
        B = d(z); {
        var C = n => {
                var o = N();
                T(() => {
                    _(o, "src", r.image), _(o, "alt", r.alt), _(o, "loading", h()), _(o, "sizes", k())
                }), V("load", o, t => t.target.style.opacity = 1), j(o), i(n, o)
            },
            F = n => {
                var o = a(),
                    t = d(o); {
                    var c = u => {
                            var E = a(),
                                I = d(E);
                            x(I, () => y(r.image), null, (P, l) => {
                                var f = a(),
                                    A = d(f); {
                                    var D = m => {
                                        var p = Q();
                                        T(() => {
                                            _(p, "src", g(l)), _(p, "alt", r.alt), _(p, "loading", h())
                                        }), V("load", p, L => L.target.style.opacity = 1), j(p), i(m, p)
                                    };
                                    v(A, m => {
                                        g(l) && m(D)
                                    })
                                }
                                i(P, f)
                            }), i(u, E)
                        },
                        O = u => {
                            var E = a(),
                                I = d(E); {
                                var P = l => {
                                    var f = a(),
                                        A = d(f);
                                    x(A, () => y(r.image), null, (D, m) => {
                                        var p = a(),
                                            L = d(p); {
                                            var H = R => {
                                                var s = S();
                                                T(() => {
                                                    _(s, "src", g(m)), _(s, "alt", r.alt), _(s, "loading", h()), _(s, "sizes", k())
                                                }), V("load", s, J => J.target.style.opacity = 1), j(s), i(R, s)
                                            };
                                            v(L, R => {
                                                g(m) && R(H)
                                            })
                                        }
                                        i(D, p)
                                    }), i(l, f)
                                };
                                v(I, l => {
                                    r.image && l(P)
                                }, !0)
                            }
                            i(u, E)
                        };
                    v(t, u => {
                        g(q) ? u(c) : u(O, !1)
                    }, !0)
                }
                i(n, o)
            };
        v(B, n => {
            g(U) ? n(C) : n(F, !1)
        })
    }
    i(G, z), M()
}
export {
    nt as I
};