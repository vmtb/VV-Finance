(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        9910: function (t, e, o) {
            "use strict";
            o.r(e), o.d(e, {
                default: function () {
                    return j
                }
            });
            var n = o(5893),
                r = o(6265),
                l = o(917),
                c = o(523),
                i = o.n(c),
                s = o(1163),
                a = o(7294),
                f = "G-RVW7TPB3K9";

            function u() {
                var t = (0, s.useRouter)();
                (0, a.useEffect)((function () {
                    var e = function (t) {
                        return function (t) {
                            window.gtag("config", f, {
                                page_path: t
                            })
                        }(t)
                    };
                    return t.events.on("routeChangeComplete", e),
                        function () {
                            t.events.off("routeChangeComplete", e)
                        }
                }), [t.events])
            }
            var d = o(9527),
                p = o(9008),
                m = o(5387),
                h = o(279),
                v = "--initial-color-mode",
                y = function () {
                    var t = "(function() {\n    function getInitialColorMode() {\n      const localIsDark = window.localStorage.getItem('".concat(h.Vw, "');\n\n      if (localIsDark) {\n        return localIsDark;\n      }\n\n      const mediaPreference = window.matchMedia('(prefers-color-scheme: dark)');\n\n      if (mediaPreference) {\n        return mediaPreference.matches ? '").concat(h.jZ, "' : '").concat(h.Oj, "';\n      }\n\n      return '").concat(h.Oj, "';\n    }\n    const colorMode = getInitialColorMode();\n    const root = document.documentElement;\n\n    root.setAttribute('dark-mode', colorMode)\n    root.style.setProperty('").concat(v, "', colorMode);\n  })()");
                    return (0, n.jsx)(p.default, {
                        children: (0, n.jsx)("script", {
                            className: "color-scheme-script",
                            dangerouslySetInnerHTML: {
                                __html: t
                            }
                        })
                    })
                },
                b = function (t) {
                    var e = t.children,
                        o = (0, a.useState)(),
                        r = o[0],
                        l = o[1];
                    (0, a.useEffect)((function () {
                        var t = window.document.documentElement.style.getPropertyValue(v),
                            e = function (t) {
                                t.key === h.Vw && t.newValue && t.newValue !== r && l(t.newValue), t.key || l(matchMedia("(prefers-color-scheme: dark)").matches ? h.jZ : h.Oj)
                            };
                        return window.addEventListener("storage", e), l(t),
                            function () {
                                return window.removeEventListener("storage", e)
                            }
                    }), []), (0, a.useEffect)((function () {
                        if (r) {
                            var t = document.documentElement;
                            localStorage.setItem(h.Vw, r), t.setAttribute("dark-mode", r)
                        }
                    }), [r]);
                    var c = (0, a.useCallback)((function (t) {
                        document.documentElement.classList.contains("color-mode--transition") || (document.documentElement.classList.add("color-mode--transition"), l(t), setTimeout((function () {
                            document.documentElement.classList.remove("color-mode--transition")
                        }), 500))
                    }), []);
                    return (0, n.jsx)(m.a, {
                        theme: {
                            isDarkMode: r === h.jZ,
                            setColorMode: c
                        },
                        children: e
                    })
                };
            o(932), o(9318);

            function w(t, e) {
                var o = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), o.push.apply(o, n)
                }
                return o
            }

            function g(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? w(Object(o), !0).forEach((function (e) {
                        (0, r.Z)(t, e, o[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : w(Object(o)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                    }))
                }
                return t
            }

            function j(t) {
                var e = t.Component,
                    o = t.pageProps;
                return u(), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(y, {}), (0, n.jsx)(l.xB, {
                        styles: d.ZP
                    }), (0, n.jsx)(b, {
                        children: (0, n.jsx)(e, g({}, o))
                    })]
                })
            }
            i().polyfill()
        },
        6363: function (t, e, o) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
                return o(9910)
            }])
        },
        932: function () {},
        9318: function () {},
        1163: function (t, e, o) {
            t.exports = o(2441)
        },
        523: function (t) {
            ! function () {
                "use strict";
                t.exports = {
                    polyfill: function () {
                        var t = window,
                            e = document;
                        if (!("scrollBehavior" in e.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
                            var o, n = t.HTMLElement || t.Element,
                                r = {
                                    scroll: t.scroll || t.scrollTo,
                                    scrollBy: t.scrollBy,
                                    elementScroll: n.prototype.scroll || i,
                                    scrollIntoView: n.prototype.scrollIntoView
                                },
                                l = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                                c = (o = t.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(o) ? 1 : 0);
                            t.scroll = t.scrollTo = function () {
                                void 0 !== arguments[0] && (!0 !== s(arguments[0]) ? m.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : r.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                            }, t.scrollBy = function () {
                                void 0 !== arguments[0] && (s(arguments[0]) ? r.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : m.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                            }, n.prototype.scroll = n.prototype.scrollTo = function () {
                                if (void 0 !== arguments[0])
                                    if (!0 !== s(arguments[0])) {
                                        var t = arguments[0].left,
                                            e = arguments[0].top;
                                        m.call(this, this, "undefined" === typeof t ? this.scrollLeft : ~~t, "undefined" === typeof e ? this.scrollTop : ~~e)
                                    } else {
                                        if ("number" === typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                        r.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                    }
                            }, n.prototype.scrollBy = function () {
                                void 0 !== arguments[0] && (!0 !== s(arguments[0]) ? this.scroll({
                                    left: ~~arguments[0].left + this.scrollLeft,
                                    top: ~~arguments[0].top + this.scrollTop,
                                    behavior: arguments[0].behavior
                                }) : r.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                            }, n.prototype.scrollIntoView = function () {
                                if (!0 !== s(arguments[0])) {
                                    var o = d(this),
                                        n = o.getBoundingClientRect(),
                                        l = this.getBoundingClientRect();
                                    o !== e.body ? (m.call(this, o, o.scrollLeft + l.left - n.left, o.scrollTop + l.top - n.top), "fixed" !== t.getComputedStyle(o).position && t.scrollBy({
                                        left: n.left,
                                        top: n.top,
                                        behavior: "smooth"
                                    })) : t.scrollBy({
                                        left: l.left,
                                        top: l.top,
                                        behavior: "smooth"
                                    })
                                } else r.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                            }
                        }

                        function i(t, e) {
                            this.scrollLeft = t, this.scrollTop = e
                        }

                        function s(t) {
                            if (null === t || "object" !== typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
                            if ("object" === typeof t && "smooth" === t.behavior) return !1;
                            throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                        }

                        function a(t, e) {
                            return "Y" === e ? t.clientHeight + c < t.scrollHeight : "X" === e ? t.clientWidth + c < t.scrollWidth : void 0
                        }

                        function f(e, o) {
                            var n = t.getComputedStyle(e, null)["overflow" + o];
                            return "auto" === n || "scroll" === n
                        }

                        function u(t) {
                            var e = a(t, "Y") && f(t, "Y"),
                                o = a(t, "X") && f(t, "X");
                            return e || o
                        }

                        function d(t) {
                            for (; t !== e.body && !1 === u(t);) t = t.parentNode || t.host;
                            return t
                        }

                        function p(e) {
                            var o, n, r, c, i = (l() - e.startTime) / 468;
                            c = i = i > 1 ? 1 : i, o = .5 * (1 - Math.cos(Math.PI * c)), n = e.startX + (e.x - e.startX) * o, r = e.startY + (e.y - e.startY) * o, e.method.call(e.scrollable, n, r), n === e.x && r === e.y || t.requestAnimationFrame(p.bind(t, e))
                        }

                        function m(o, n, c) {
                            var s, a, f, u, d = l();
                            o === e.body ? (s = t, a = t.scrollX || t.pageXOffset, f = t.scrollY || t.pageYOffset, u = r.scroll) : (s = o, a = o.scrollLeft, f = o.scrollTop, u = i), p({
                                scrollable: s,
                                method: u,
                                startTime: d,
                                startX: a,
                                startY: f,
                                x: n,
                                y: c
                            })
                        }
                    }
                }
            }()
        }
    },
    function (t) {
        var e = function (e) {
            return t(t.s = e)
        };
        t.O(0, [774, 351], (function () {
            return e(6363), e(2441)
        }));
        var o = t.O();
        _N_E = o
    }
]);