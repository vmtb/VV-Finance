(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [192], {
        3298: function (e, r, t) {
            "use strict";
            t.d(r, {
                Z: function () {
                    return s
                }
            });
            var o = t(6265),
                n = t(5893),
                i = t(8347),
                c = t(2748),
                a = (0, t(5366).Z)("i", {
                    target: "ekxjhqm0"
                })("color:var(--color-1000);font-family:", (function (e) {
                    return e.iconStyle
                }), ";");

            function l(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    r && (o = o.filter((function (r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, o)
                }
                return t
            }
            var s = function (e) {
                var r = e.style,
                    t = void 0 === r ? c.z.REGULAR : r,
                    s = e.name,
                    m = e.className,
                    u = (0, i.Z)(e, ["style", "name", "className"]);
                return (0, n.jsx)(a, function (e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {};
                        r % 2 ? l(Object(t), !0).forEach((function (r) {
                            (0, o.Z)(e, r, t[r])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach((function (r) {
                            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                        }))
                    }
                    return e
                }({
                    iconStyle: t,
                    className: "icon icon-".concat(s, " ").concat(m || "")
                }, u))
            }
        },
        7077: function (e, r, t) {
            "use strict";
            t.d(r, {
                Z: function () {
                    return b
                }
            });
            var o = t(6265),
                n = t(5893),
                i = t(8347),
                c = t(1664),
                a = t(2748),
                l = t(5366),
                s = t(6168),
                m = t(279),
                u = t(3298);
            var f = (0, l.Z)("a", {
                    target: "e17xevre3"
                })({
                    name: "1sslvoa",
                    styles: "position:relative;margin-right:0.5rem;cursor:pointer;height:1.8rem;width:1.8rem"
                }),
                d = (0, l.Z)(s.Z, {
                    target: "e17xevre2"
                })("background:var(--color-900)!important;color:var(--color-000)!important;display:none!important;width:auto!important;min-width:8rem!important;height:auto!important;box-sizing:border-box;border-radius:0.4rem!important;opacity:1!important;font-size:1.5rem!important;padding:0.8rem 1.6rem!important;margin-left:1.7rem!important;", m.mq.fromDesktopSm, "{display:inline-block!important;}"),
                g = (0, l.Z)(u.Z, {
                    target: "e17xevre1"
                })("position:relative;background:transparent;font-size:1.8rem;text-align:center;height:1.8rem;width:1.8rem;transition:background 0.2s ease-in-out,color 0.2s ease-in-out;&::before{position:absolute;border-radius:50%;top:-0.7rem;left:-0.7rem;height:3.2rem;width:3.2rem;padding:0.7rem 0;background:transparent;transition:background 0.2s ease-in-out;}&:hover{", (function (e) {
                    return e.style === a.z.REGULAR && "font-family: ".concat(a.z.SOLID)
                }), ";color:var(--color-000);&::before{background:var(--color-1000);}}"),
                h = (0, l.Z)("button", {
                    target: "e17xevre0"
                })({
                    name: "1bh0txk",
                    styles: "background:transparent;border:none;cursor:pointer;padding:0;height:1.8rem;width:1.8rem;outline:none"
                });

            function p(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    r && (o = o.filter((function (r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, o)
                }
                return t
            }

            function v(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? p(Object(t), !0).forEach((function (r) {
                        (0, o.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach((function (r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }
            var b = function (e) {
                var r = e.className,
                    t = e.iconName,
                    o = void 0 === t ? a.u.COG : t,
                    l = e.onClick,
                    s = e.href,
                    m = e.tooltipId,
                    u = e.tooltipLabel,
                    p = e.tooltipPosition,
                    b = void 0 === p ? "right" : p,
                    O = e.style,
                    w = void 0 === O ? a.z.REGULAR : O,
                    y = (0, i.Z)(e, ["className", "iconName", "onClick", "href", "tooltipId", "tooltipLabel", "tooltipPosition", "style"]),
                    j = (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(g, {
                            name: o,
                            "data-tip": !0,
                            "data-for": m,
                            style: w
                        }), u && (0, n.jsx)(d, {
                            id: m,
                            place: b,
                            delayShow: 200,
                            arrowColor: "transparent",
                            effect: "solid",
                            children: u
                        })]
                    });
                return s ? (0, n.jsx)(c.default, {
                    href: s,
                    passHref: !0,
                    children: (0, n.jsx)(f, v(v({
                        className: r,
                        onClick: l
                    }, y), {}, {
                        children: j
                    }))
                }) : (0, n.jsx)(h, v(v({
                    className: r,
                    onClick: l
                }, y), {}, {
                    children: j
                }))
            }
        },
        2981: function (e, r, t) {
            "use strict";
            t.d(r, {
                Fy: function () {
                    return u
                },
                B4: function () {
                    return f
                },
                AE: function () {
                    return l
                },
                __: function () {
                    return a
                },
                rU: function () {
                    return s
                },
                Q8: function () {
                    return m
                },
                W_: function () {
                    return i
                },
                VF: function () {
                    return c
                }
            });
            var o = t(5366),
                n = t(279);
            var i = (0, o.Z)("p", {
                    target: "e1dq2ku18"
                })({
                    name: "hw4w3o",
                    styles: "color:var(--color-900);font-size:1.4rem;line-height:2rem;font-weight:400"
                }),
                c = (0, o.Z)("p", {
                    target: "e1dq2ku17"
                })({
                    name: "1ih5gzf",
                    styles: "color:var(--color-900);font-size:1.2rem;line-height:1.6rem;font-weight:400"
                }),
                a = (0, o.Z)("p", {
                    target: "e1dq2ku16"
                })("color:var(--color-900);padding-bottom:1rem;font-size:3.2rem;line-height:3.2rem;font-weight:700;", n.mq.fromMobileSm, "{font-size:4.8rem;line-height:4.8rem;font-weight:700;}"),
                l = ((0, o.Z)("p", {
                    target: "e1dq2ku15"
                })({
                    name: "usqubg",
                    styles: "color:var(--color-900);font-size:4rem;line-height:4rem;font-weight:700"
                }), (0, o.Z)("p", {
                    target: "e1dq2ku14"
                })("font-size:1.8rem;line-height:2.4rem;font-weight:700;color:var(--color-900);", n.mq.fromMobileSm, "{font-size:2.4rem;}")),
                s = (0, o.Z)("p", {
                    target: "e1dq2ku13"
                })({
                    name: "15z22vw",
                    styles: "color:var(--color-900);font-size:1.8rem;line-height:2.2rem;font-weight:700"
                }),
                m = (0, o.Z)("p", {
                    target: "e1dq2ku12"
                })({
                    name: "ccu866",
                    styles: "color:var(--color-900);font-size:1.4rem;line-height:2rem;font-weight:700"
                }),
                u = (0, o.Z)("p", {
                    target: "e1dq2ku11"
                })({
                    name: "nn0ial",
                    styles: "color:var(--color-900);font-size:1.8rem;line-height:2.6rem;font-weight:400"
                }),
                f = (0, o.Z)("p", {
                    target: "e1dq2ku10"
                })({
                    name: "1g7ibvt",
                    styles: "color:var(--color-900);font-size:1.6rem;line-height:2.4rem;font-weight:400"
                })
        },
        5385: function (e, r, t) {
            "use strict";
            t.d(r, {
                Z: function () {
                    return O
                }
            });
            var o = t(5893),
                n = t(5366),
                i = t(9527),
                c = t(279),
                a = t(6265),
                l = t(8347),
                s = t(1664),
                m = (0, n.Z)("a", {
                    target: "e10fgkrr0"
                })("color:", (function (e) {
                    return e.inverted ? "var(--color-100)" : "var(--color-1000)"
                }), ";text-decoration:", (function (e) {
                    return e.underline ? "underline" : "none"
                }), ";&:hover{color:", (function (e) {
                    return e.inverted ? "var(--color-100)" : "var(--color-1000)"
                }), ";text-decoration:underline;}");

            function u(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    r && (o = o.filter((function (r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, o)
                }
                return t
            }

            function f(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? u(Object(t), !0).forEach((function (r) {
                        (0, a.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach((function (r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }
            var d = function (e) {
                var r = e.href,
                    t = e.children,
                    n = (0, l.Z)(e, ["href", "children"]);
                return (0, o.jsx)(s.default, {
                    href: r,
                    passHref: !0,
                    children: (0, o.jsx)(m, f(f({}, n), {}, {
                        children: t
                    }))
                })
            };
            var g = (0, n.Z)("footer", {
                    target: "e1wilc0y4"
                })({
                    name: "1s7hkvl",
                    styles: "background:var(--color-1000)"
                }),
                h = (0, n.Z)("div", {
                    target: "e1wilc0y3"
                })((0, i.Uj)(), " grid-row-gap:4rem;", c.mq.fromDesktopSm, "{max-width:none;}"),
                p = (0, n.Z)("p", {
                    target: "e1wilc0y2"
                })("grid-column:1/-1;color:var(--color-500);", c.mq.fromTabletSm, "{grid-column:1/span 6;}"),
                v = (0, n.Z)("div", {
                    target: "e1wilc0y1"
                })("grid-column:1/-1;text-align:left;", c.mq.fromTabletSm, "{text-align:right;grid-column:-1/span 6;}"),
                b = (0, n.Z)(d, {
                    target: "e1wilc0y0"
                })("margin-right:3.2rem;", c.mq.fromTabletSm, "{margin-right:2.4rem;}&:last-child{margin-right:0rem;}");
            var O = function () {
                return (0, o.jsx)(g, {
                    children: (0, o.jsxs)(h, {
                        children: [(0, o.jsx)(p, {
                            children: "5euros \xa9 2021"
                        }), (0, o.jsxs)(v, {
                            children: [(0, o.jsx)(b, {
                                href: "/about",
                                inverted: !0,
                                children: "About"
                            }), (0, o.jsx)(b, {
                                href: "https://discord.gg/axBcZ7n",
                                inverted: !0,
                                children: "Discord"
                            })]
                        })]
                    })
                })
            }
        },
        2531: function (e, r, t) {
            "use strict";
            t.d(r, {
                Z: function () {
                    return h
                }
            });
            var o = t(5893),
                n = t(5387),
                i = t(279),
                c = t(1664),
                a = t(7077),
                l = t(5366),
                s = t(9527),
                m = (0, l.Z)("div", {
                    target: "e1ggfefr3"
                })((0, s.TF)(), " position:", (function (e) {
                    return e.locked ? "absolute" : "fixed"
                }), ";width:100%;margin:0;padding:0 3.2rem;top:1rem;height:64px;z-index:999;pointer-events:none;", i.mq.fromTabletSm, "{padding:0 4rem;}"),
                u = (0, l.Z)("div", {
                    target: "e1ggfefr2"
                })("height:9.6rem;grid-column:1/-2;grid-row:1;display:none;", i.mq.fromTabletSm, "{display:flex;}"),
                f = (0, l.Z)("a", {
                    target: "e1ggfefr1"
                })("margin-top:2.2rem;grid-column:1/3;width:100%;max-width:8rem;grid-row:1;pointer-events:all;", i.mq.fromTabletSm, "{margin-top:0;grid-row:2;}", i.mq.fromDesktopSm, "{grid-column:1/3;}svg{width:5.4rem;height:auto;path{fill:var(--color-1000);transition:fill 0.5s ease;}", i.mq.fromDesktopSm, "{width:8rem;}}"),
                d = (0, l.Z)("div", {
                    target: "e1ggfefr0"
                })("grid-column:-2/-1;margin-top:4rem;width:100%;display:flex;justify-content:flex-end;pointer-events:all;", i.mq.fromTabletSm, "{margin-top:0;align-items:center;}"),
                g = t(2748);
            var h = function (e) {
                var r = e.lockNav,
                    t = void 0 !== r && r,
                    l = (0, n.u)(),
                    s = l.isDarkMode ? g.u.LIGHTBULB_ON : g.u.MOON;
                return (0, o.jsxs)(m, {
                    locked: t,
                    children: [(0, o.jsx)(u, {}), (0, o.jsx)(d, {
                        children: (0, o.jsx)(a.Z, {
                            iconName: s,
                            onClick: function () {
                                l.isDarkMode ? l.setColorMode(i.Oj) : l.setColorMode(i.jZ)
                            }
                        })
                    }), (0, o.jsx)(c.default, {
                        href: "/",
                        passHref: !0,
                        children: (0, o.jsx)(f, {
                            children: (0, o.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 80 74",
                                children: (0, o.jsx)("g", {
                                    clipPath: "url(#clip0)",
                                    children: (0, o.jsx)("path", {
                                        d: "M57.192 36.691c-1.344.232-2.616.55-3.785.906-.658.2-3.258.995-6.567 2.69 0 0-.95.486-1.872 1.017-6.905 3.975-12.915 11.81-19.835 11.958-4.732.101-7.836-2.119-7.836-2.119a10.56 10.56 0 01-1.994-1.852c.148.11 2.58 1.846 5.304 2.485 4.009.94 9.695-2.557 11.425-3.643 2.08-1.305 1.59-1.312 5.774-4.195a123.864 123.864 0 015.546-3.596c.782-.479 1.446-.863 1.626-.966 1.398-.804 4.684-2.243 12.214-2.685zm-25.787-25.78s-1.76 1.825-3.386 2.152c-1.538.309-3.808-.628-3.808-.628s1.446-1.959 3.041-2.357c1.81-.45 4.153.832 4.153.832zm-8.189 8.294c.183-1.603 1.306-2.928 2.802-3.331 2.467-.66 4.267 1.638 4.236 1.692-.03.054-1.934-1.724-3.941-1.302-1.499.315-2.486 1.737-3.097 2.941zm.079.495c.545-1.52 1.938-2.556 3.484-2.607 2.55-.085 3.786 2.563 3.744 2.607-.041.045-1.496-2.115-3.544-2.159-1.531-.035-2.815 1.128-3.684 2.159zm0 .445c.986-1.277 2.631-1.832 4.118-1.401 2.45.708 2.808 3.608 2.755 3.64-.064 0-.777-2.48-2.704-3.154-1.446-.505-3.024.204-4.17.915zM10.047 71.304c5.176 3.064 10.547 2.765 13.451 2.604 2.8-.156 5.057-.674 10.272-2.54.511-.186 1.053-.382 1.626-.593l.167-.062a285.915 285.915 0 004.271-1.613c2.057-.797 3.86-1.524 5.46-2.18 1.015-.416 1.95-.803 2.817-1.16 4.013-1.661 6.589-2.705 9.094-3.112 1.29-.207 2.558-.248 3.994-.117.824.072 1.797.212 2.904.481.108.026.22.055.33.083.466.124.957.268 1.467.442 1.63.552 3.463 1.384 5.444 2.645 1.389-.74 3.776-2.255 5.706-5.03.53-.761 4.236-6.265 2.482-12.807-.61-2.282-1.733-4.13-3.02-5.6-1.174-1.344-2.483-2.377-3.652-3.145 0-.003-.004-.003-.004-.003a20.758 20.758 0 00-3.242-1.73c-2.056-.892-4.157-1.353-6.209-1.509a61.278 61.278 0 00-.83-2.566 56.212 56.212 0 00-4.442-9.66c-.89-1.536-4.837-8.157-12.364-14.765A63.239 63.239 0 0031.66 0s-.678 3.168 0 5.515a20.39 20.39 0 00-3.925.756c-1.607.48-2.456.744-3.287 1.55-.501.482-1.306 1.267-1.468 2.419-.095.71.07 1.414-.393 2.306-.073.14-.187.356-.4.59-.561.636-1.175.7-1.86 1.035 0 0-.92.452-1.545 1.27-1.267 1.655.298 5.469 2.495 7.66.77.768 2.258 2.251 3.935 2.172.336-.016.922-.108 1.795-.006.573.069 1.31.155 1.88.495.05.03.1.062.149.097 1.27.887 1.879 3.16 1.04 4.783-.6 1.16-1.745 1.614-2.379 1.865a4.991 4.991 0 01-1.673.355c-.717.038-1.553-.024-2.765-.076-1.426-.064-2.853-.02-4.28-.08-3.469-.149-8.226 1.753-11.625 4.525C.726 42.642.11 50.696.037 51.918c-.475 7.875 3.618 15.601 10.01 19.386"
                                    })
                                })
                            })
                        })
                    })]
                })
            }
        },
        2748: function (e, r, t) {
            "use strict";
            var o, n;
            t.d(r, {
                    z: function () {
                        return o
                    },
                    u: function () {
                        return n
                    }
                }),
                function (e) {
                    e.BRAND = "Font Awesome", e.SOLID = "Font Awesome", e.REGULAR = "Font"
                }(o || (o = {})),
                function (e) {
                    e.ARROW_TO_LEFT = "arrow-to-left", e.ARROW_TO_RIGHT = "arrow-to-right", e.BARS = "bars", e.CHEVRON_DOUBLE_LEFT = "chevron-double-left", e.CHEVRON_DOUBLE_RIGHT = "chevron-double-right", e.CHEVRON_LEFT = "chevron-left", e.CHEVRON_RIGHT = "chevron-right", e.COG = "cog", e.LIGHTBULB_ON = "lightbulb-on", e.MOON = "moon", e.TIMES = "times", e.DISCORD = "discord", e.TWITTER = "twitter"
                }(n || (n = {}))
        }
    }
]);