(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[641], {
		6569: function (r, e, t) {
			"use strict";
			t.d(e, {
				Z: function () {
					return g
				}
			});
			var o = t(6265),
				n = t(5893),
				a = t(8347),
				c = t(7294),
				i = t(1664),
				l = t(5366),
				s = t(917),
				d = t(2981);
			var u = (0, l.Z)(d.rU, {
					target: "e1ba5g7u2"
				})({
					name: "5c1t2k",
					styles: "margin-bottom:0.5rem;transition:color 0.2s ease"
				}),
				h = (0, l.Z)(d.W_, {
					target: "e1ba5g7u1"
				})("color:", (function (r) {
					return r.theme.isDarkMode ? "var(--color-500)" : "var(--color-700)"
				}), ";transition:color 0.2s ease;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"),
				v = function (r) {
					return (0, s.iv)("background:var(--color-900);", u, "{color:var(--color-100);}", h, "{color:", r.isDarkMode ? " var(--color-700)" : " var(--color-300)", ";}", "")
				},
				f = (0, l.Z)("a", {
					target: "e1ba5g7u0"
				})("width:100%;height:9.3rem;display:flex;justify-content:center;flex-direction:column;background:var(--color-chapterSelectBG);transition:background 0.2s ease;border-radius:0.4rem;padding:0 1.6rem;", h, "{color:", (function (r) {
					return r.theme.isDarkMode ? "var(--color-500)" : "var(--color-700)"
				}), ";}&:hover{", (function (r) {
					return v(r.theme)
				}), ";}", (function (r) {
					return r.selected && v(r.theme)
				}), " ", (function (r) {
					return r.disabled && (e = r.theme, (0, s.iv)("background:var(--color-100);", u, "{color:", e.isDarkMode ? "var(--color-700)" : "var(--color-500)", ";}", h, "{color:", e.isDarkMode ? "var(--color-700)" : "var(--color-500)", ";}&:hover{background:var(--color-100);", u, "{color:", e.isDarkMode ? "var(--color-700)" : "var(--color-500)", ";}", h, "{color:", e.isDarkMode ? "var(--color-700)" : "var(--color-500)", ";}}", ""));
					var e
				}), ";");

			function p(r, e) {
				var t = Object.keys(r);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(r);
					e && (o = o.filter((function (e) {
						return Object.getOwnPropertyDescriptor(r, e).enumerable
					}))), t.push.apply(t, o)
				}
				return t
			}

			function b(r) {
				for (var e = 1; e < arguments.length; e++) {
					var t = null != arguments[e] ? arguments[e] : {};
					e % 2 ? p(Object(t), !0).forEach((function (e) {
						(0, o.Z)(r, e, t[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach((function (e) {
						Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e))
					}))
				}
				return r
			}
			var g = c.forwardRef((function (r, e) {
				var t = r.chapter,
					o = r.className,
					c = r.selected,
					l = void 0 !== c && c,
					s = r.disabled,
					d = void 0 !== s && s,
					v = r.href,
					p = (0, a.Z)(r, ["chapter", "className", "selected", "disabled", "href"]),
					g = t.display_number || t.number;
				return (0, n.jsx)(i.default, {
					href: v,
					passHref: !0,
					children: (0, n.jsx)(f, b(b({
						onClick: d ? function (r) {
							r.preventDefault()
						} : void 0,
						selected: l,
						disabled: d,
						className: o,
						ref: e,
						title: t.title
					}, p), {}, {
						children: t.title && "oneshot" === t.title.toLowerCase() ? (0, n.jsx)(u, {
							children: t.title
						}) : (0, n.jsxs)(n.Fragment, {
							children: [(0, n.jsx)(u, {
								children: -1 === g ? "A suivre" : "Chapitre ".concat(g)
							}), (0, n.jsx)(h, {
								children: t.title
							})]
						})
					}))
				})
			}))
		},
		2522: function (r, e, t) {
			"use strict";
			t.d(e, {
				Z: function () {
					return v
				}
			});
			var o = t(5893),
				n = t(3099),
				a = t(7261),
				c = t(5366),
				i = t(917),
				l = t(279);

			function s() {
				var r = (0, a.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);
				return s = function () {
					return r
				}, r
			}
			var d = (0, c.Z)("div", {
					target: "ei7vqgq1"
				})({
					name: "gjsliq",
					styles: "height:calc(100vh - 10px);width:100vw;display:flex;justify-content:center;align-items:center"
				}),
				u = (0, i.F4)(s()),
				h = (0, c.Z)("div", {
					target: "ei7vqgq0"
				})("display:inline-block;width:100px;height:100px;", l.mq.fromTabletMd, "{width:80px;height:80px;}&:after{content:' ';display:block;width:80px;height:80px;margin:8px;border-radius:50%;border:6px solid var(--color-1000);border-color:var(--color-1000) transparent var(--color-1000) transparent;animation:", u, " 1.5s linear infinite;", l.mq.fromTabletMd, "{width:54px;height:54px;}}");
			var v = function () {
				return (0, o.jsx)(n.Z, {
					showFooter: !1,
					showNav: !1,
					children: (0, o.jsx)(d, {
						children: (0, o.jsx)(h, {})
					})
				})
			}
		}
	}
]);
