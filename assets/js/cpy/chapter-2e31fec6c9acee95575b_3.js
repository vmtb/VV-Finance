(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[217], {
		5276: function (e, r, t) {
			"use strict";
			t.r(r), t.d(r, {
				__N_SSG: function () {
					return Fe
				},
				default: function () {
					return Me
				}
			});
			var n, o, i, a = t(5893),
				c = t(2962),
				s = t(9008),
				l = t(4263),
				d = t(2522),
				u = t(3099),
				m = t(4121),
				f = t(7294),
				p = t(6486),
				g = t.n(p);
			! function (e) {
				e.HEIGHT = "height", e.WIDTH = "width", e.NATIVE = "native"
			}(n || (n = {})),
			function (e) {
				e.LTR = "ltr", e.RTL = "rtl", e.LS = "ls"
			}(o || (o = {})),
			function (e) {
				e.HG = "hasgap", e.NG = "nogap"
			}(i || (i = {}));
			var h = t(2748),
				v = t(6265),
				b = t(6941);

			function w(e, r) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					r && (n = n.filter((function (r) {
						return Object.getOwnPropertyDescriptor(e, r).enumerable
					}))), t.push.apply(t, n)
				}
				return t
			}

			function y(e) {
				for (var r = 1; r < arguments.length; r++) {
					var t = null != arguments[r] ? arguments[r] : {};
					r % 2 ? w(Object(t), !0).forEach((function (r) {
						(0, v.Z)(e, r, t[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach((function (r) {
						Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
					}))
				}
				return e
			}

			function x(e, r) {
				switch (r.action) {
					case "SET_DIRECTION":
						return y(y({}, e), {}, {
							direction: r.data.direction
						});
					case "SET_FIT":
						return y(y({}, e), {}, {
							fit: r.data.fit
						});
					case "SET_PAGE_GAP":
						return y(y({}, e), {}, {
							pageGap: r.data.pageGap
						});
					case "SET_MEDIA":
						return y(y({}, e), {}, {
							device: {
								isDesktop: r.data.isDesktop,
								hideDrawer: !r.data.isDesktop
							}
						});
					case "HIDE_NAVIGATON":
						return y(y({}, e), {}, {
							device: {
								isDesktop: !!e.device && e.device.isDesktop,
								hideDrawer: r.data.hideDrawer
							}
						});
					default:
						return e
				}
			}
			var j = function (e) {
					var r = (0, b.Z)((function (e) {
							return e.fromDesktopSm
						})),
						t = (0, f.useReducer)(x, y(y({}, e), {}, {
							device: {
								isDesktop: r,
								hideDrawer: !r
							}
						})),
						a = t[0],
						c = t[1];
					return (0, f.useEffect)((function () {
						return document.body.style.position = r ? "fixed" : "", c({
								action: "SET_MEDIA",
								data: {
									isDesktop: r
								}
							}),
							function () {
								document.body.style.position = ""
							}
					}), [r]), (0, f.useEffect)((function () {
						var e = localStorage.getItem("readDirection"),
							r = localStorage.getItem("fitType"),
							t = localStorage.getItem("pageGap"),
							a = document.getElementById('pageMode').innerText || o.LTR,
							s = r || n.NATIVE,
							l = t || i.HG;
						c({
							action: "SET_FIT",
							data: {
								fit: s
							}
						}), c({
							action: "SET_DIRECTION",
							data: {
								direction: a
							}
						}), c({
							action: "SET_PAGE_GAP",
							data: {
								pageGap: l
							}
						})
					}), []), [a, c]
				},
				T = function (e) {
					var r = e.currentView,
						t = e.direction,
						n = e.pagesPerView,
						i = e.pages,
						a = e.chapters,
						c = e.seriesId,
						s = e.selectedChapter,
						l = (0, f.useState)(r),
						d = l[0],
						u = l[1],
						m = Math.ceil(i.length / n),
						g = (0, f.useCallback)((function (e) {
							if (e >= m || e < 0) {
								var r = e < 0,
									t = a.findIndex((function (e) {
										return e.number === s
									})) + (r ? 1 : -1);
								if (!(0, p.inRange)(t, 0, a.length)) return void(window.location.href = "/perf/series/".concat(c)); /**Change link of start viewing page on reader */
								var n = a[t].number,
									o = r ? "#last" : "";
								window.location.href = "/perf/series/".concat(c, "/").concat(n).concat(o) /**Change link of end viewing page on reader */
							} else {
								u(e), history.replaceState(history.state, "", "#".concat(e >= m ? m : e + 1));
								var i = document.getElementById("view");
								i && (i.scrollTop = 0)
							}
						}), [a, m, s, c]),
						h = (0, f.useCallback)((function (e) {
							e.preventDefault();
							var r = t === o.RTL ? -1 : 1;
							g(d + r)
						}), [d, t, g]),
						v = (0, f.useCallback)((function (e) {
							e.preventDefault();
							var r = t === o.RTL ? 1 : -1;
							g(d + r)
						}), [d, t, g]),
						b = (0, f.useCallback)((function (e) {
							e.preventDefault();
							var r = t === o.RTL ? 0 : m - 1;
							g(r)
						}), [t, m, g]),
						w = (0, f.useCallback)((function (e) {
							e.preventDefault();
							var r = t === o.RTL ? m - 1 : 0;
							g(r)
						}), [t, m, g]);
					return {
						currentView: d,
						setView: g,
						onPageRight: h,
						onPageLeft: v,
						onPageFarRight: b,
						onPageFarLeft: w
					}
				},
				k = {
					menuScrollBuffer: 150
				},
				O = t(5944),
				D = t(5366),
				S = t(2981),
				E = (0, D.Z)("div", {
					target: "e9874od2"
				})("height:1rem;width:1rem;margin-right:1.6rem;border-radius:0.5rem;transition:border 0.2s ease;background:", (function (e) {
					return e.disabled ? "var(--color-300)" : "var(--color-100)"
				}), ";border:0.2rem solid ", (function (e) {
					return e.selected ? "var(--color-100)" : "var(--color-500)"
				}), ";"),
				C = (0, D.Z)(S.W_, {
					target: "e9874od1"
				})("color:", (function (e) {
					return e.disabled ? "var(--color-500)" : e.selected ? "var(--color-100)" : "var(--color-900)"
				}), ";transition:color 0.2s ease;"),
				L = (0, D.Z)("div", {
					target: "e9874od0"
				})("display:flex;align-items:center;padding:1.8rem 3.8rem 1.8rem 1.6rem;border-radius:0.4rem;cursor:", (function (e) {
					return e.disabled ? "not-allowed" : "pointer"
				}), ";transition:background 0.2s ease;background:", (function (e) {
					return e.disabled ? "var(--color-300)" : e.selected ? "var(--color-900)" : "var(--color-100)"
				}), ";&:hover{background:", (function (e) {
					return e.disabled ? "var(--color-300)" : "var(--color-900)"
				}), ";", E, "{background:", (function (e) {
					return e.disabled ? "" : "var(--color-100)"
				}), ";border:0.2rem solid ", (function (e) {
					return e.disabled ? "var(--color-500)" : "var(--color-100)"
				}), ";}", C, "{color:", (function (e) {
					return e.disabled ? "var(--color-500)" : "var(--color-100)"
				}), ";}}");
			var R = function (e) {
					var r = e.onClick,
						t = e.selected,
						n = e.children,
						o = e.disabled,
						i = void 0 !== o && o;
					return (0, O.BX)(L, {
						selected: t,
						disabled: i,
						onClick: i ? function () {
							return null
						} : r,
						children: [(0, O.tZ)(E, {
							selected: t,
							disabled: i
						}), (0, O.tZ)(C, {
							selected: t,
							disabled: i,
							children: n
						})]
					})
				},
				P = t(279),
				Z = (0, D.Z)("div", {
					target: "edyt7gm0"
				})("width:100%;display:flex;flex-direction:column;>div{width:100%;margin-bottom:1.6rem;&:last-child{margin-bottom:0;}}", P.mq.fromTabletSm, "{flex-direction:row;>div{margin-bottom:0;margin-right:1.6rem;&:last-child{margin-right:0;}}}"),
				I = t(8347),
				N = t(3253),
				G = t.n(N);

			function _(e, r) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					r && (n = n.filter((function (r) {
						return Object.getOwnPropertyDescriptor(e, r).enumerable
					}))), t.push.apply(t, n)
				}
				return t
			}

			function q(e) {
				for (var r = 1; r < arguments.length; r++) {
					var t = null != arguments[r] ? arguments[r] : {};
					r % 2 ? _(Object(t), !0).forEach((function (r) {
						(0, v.Z)(e, r, t[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach((function (r) {
						Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
					}))
				}
				return e
			}
			var A = function (e) {
					var r = e.className,
						t = (0, I.Z)(e, ["className"]),
						n = r && r.split(" ") || ["Modal"],
						o = (0, m.Z)(n, 1)[0],
						i = o ? {
							portalClassName: o,
							overlayClassName: "".concat(o, "-overlay"),
							className: "".concat(o, "-content")
						} : {};
					return (0, a.jsx)(G(), q(q({}, i), t))
				},
				H = t(7077),
				z = t(9527);
			var V = (0, D.Z)(S.AE, {
					target: "e16o9lc34"
				})({
					name: "1yp7290",
					styles: "margin-bottom:2rem"
				}),
				F = (0, D.Z)("div", {
					target: "e16o9lc33"
				})({
					name: "1d4t9vx",
					styles: "display:flex;flex-direction:column;margin-top:3.2rem;@-moz-document url-prefix(){&:last-child{margin-bottom:4rem;}}"
				}),
				M = (0, D.Z)(S.rU, {
					target: "e16o9lc32"
				})({
					name: "1yp7290",
					styles: "margin-bottom:2rem"
				}),
				B = (0, D.Z)(H.Z, {
					target: "e16o9lc31"
				})({
					name: "1tuq2qe",
					styles: "position:absolute;top:3.6rem;right:3.2rem"
				}),
				U = (0, D.Z)(A, {
					target: "e16o9lc30"
				})("&-overlay{", (0, z.Uj)(), " background:rgba(152, 152, 152, 0.5);position:fixed;top:0;right:0;bottom:0;left:0;height:100vh;z-index:9999;backdrop-filter:blur(0.8rem);}&-content{background-color:var(--color-000);outline:none;border-radius:0.5rem;padding:4rem 3.2rem;z-index:99999;grid-column:1/-1;grid-row:1;max-height:100%;overflow-y:auto;position:relative;align-self:center;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}", P.mq.fromTabletLg, "{grid-column:2/-2;}", P.mq.fromDesktopSm, "{grid-column:6/-6;}", P.mq.fromDesktopLg, "{grid-column:8/-8;}", P.mq.fromDesktopXl, "{grid-column:9/-9;}@-moz-document url-prefix(){padding-bottom:0;}}");
			var X = function (e) {
				var r = e.isOpen,
					t = e.closeModal,
					c = e.settings,
					s = c.direction === o.LTR,
					l = c.direction === o.RTL,
					d = c.direction === o.LS,
					u = c.fit === n.NATIVE,
					m = c.fit === n.WIDTH,
					f = c.pageGap === i.HG,
					p = c.pageGap === i.NG;
				return (0, a.jsxs)(U, {
					isOpen: r,
					onRequestClose: t,
					ariaHideApp: !1,
					children: [(0, a.jsx)(V, {
						children: "Paramètres du lecteur"
					}), (0, a.jsxs)("div", {
						children: [(0, a.jsxs)(F, {
							children: [(0, a.jsx)(M, {
								children: "Sens de lecture"
							}), (0, a.jsxs)(Z, {
								children: [(0, a.jsx)(R, {
									selected: s,
									onClick: function () {
										return c.onChangeDirection(o.LTR)
									},
									children: "De la Gauche vers la Droite"
								}), (0, a.jsx)(R, {
									selected: l,
									onClick: function () {
										return c.onChangeDirection(o.RTL)
									},
									children: "De la Droite vers la Gauche"
								}), (0, a.jsx)(R, {
									selected: d,
									onClick: function () {
										return c.onChangeDirection(o.LS)
									},
									children: "Du Haut vers le Bas"
								})]
							})]
						}), (0, a.jsxs)(F, {
							children: [(0, a.jsx)(M, {
								children: "Mise à l'échelle des pages"
							}), (0, a.jsxs)(Z, {
								children: [(0, a.jsx)(R, {
									selected: m,
									onClick: function () {
										return c.onChangeFit(n.WIDTH)
									},
									children: "Ajustement horizontal"
								}), (0, a.jsx)(R, {
									selected: u,
									onClick: function () {
										return c.onChangeFit(n.NATIVE)
									},
									children: "Ajustement à l'écran"
								})]
							})]
						}), d && (0, a.jsxs)(F, {
							children: [(0, a.jsx)(M, {
								children: "Ecart de page"
							}), (0, a.jsxs)(Z, {
								children: [(0, a.jsx)(R, {
									selected: f,
									onClick: function () {
										return c.onChangePageGap(i.HG)
									},
									children: "Activé"
								}), (0, a.jsx)(R, {
									selected: p,
									onClick: function () {
										return c.onChangePageGap(i.NG)
									},
									children: "Désactivé"
								})]
							})]
						})]
					}), (0, a.jsx)(B, {
						iconName: h.u.TIMES,
						style: h.z.SOLID,
						onClick: t
					})]
				})
			};
			var W = t(1664),
				Y = t(6168),
				J = t(3298);
			var K = (0, D.Z)(J.Z, {
					target: "e1ra8pg43"
				})({
					name: "8p2zyf",
					styles: "position:absolute;margin-top:0.4rem;transition:margin-left 0.3s ease"
				}),
				Q = (0, D.Z)("a", {
					target: "e1ra8pg42"
				})("align-items:flex-start;display:flex;z-index:99;position:relative;&:hover ", K, "{margin-left:-1rem;}"),
				$ = (0, D.Z)(Y.Z, {
					target: "e1ra8pg41"
				})({
					name: "1mszhjp",
					styles: "background:var(--color-900);box-sizing:border-box;border-radius:0.4rem!important;color:var(--color-000);font-size:1.5rem!important;height:auto!important;min-width:8rem!important;opacity:1!important;padding:0.8rem 1.6rem!important;width:auto!important"
				}),
				ee = (0, D.Z)(S.rU, {
					target: "e1ra8pg40"
				})({
					name: "879ic9",
					styles: "margin-left:20px"
				});
			var re = function (e) {
					var r = e.className,
						t = e.seriesId,
						n = e.seriesName;
					return (0, a.jsxs)("div", {
						className: r,
						children: [(0, a.jsx)(W.default, {
							href: "/perf/series/".concat(t),
							/**Change link of back on reader */
							passHref: !0,
							children: (0, a.jsxs)(Q, {
								"data-tip": !0,
								"data-for": "returnTip",
								children: [(0, a.jsx)(K, {
									name: h.u.CHEVRON_LEFT,
									style: h.z.SOLID
								}), (0, a.jsx)(ee, {
									children: n
								})]
							})
						}), (0, a.jsx)($, {
							id: "returnTip",
							place: "top",
							delayShow: 200,
							arrowColor: "transparent",
							effect: "float",
							children: "Back to Series"
						})]
					})
				},
				te = t(6569);
			var ne = (0, D.Z)(te.Z, {
					target: "e1bbxwa58"
				})("margin-bottom:2rem;padding:2.4rem 1.6rem;min-height:9.3rem;&:last-child{margin-bottom:calc(100vh - 39rem);", P.mq.fromTabletSm, "{margin-bottom:calc(100vh - 49.6rem);}}"),
				oe = (0, D.Z)(re, {
					target: "e1bbxwa57"
				})({
					name: "1azpx8r",
					styles: "margin-bottom:20px"
				}),
				ie = (0, D.Z)("div", {
					target: "e1bbxwa56"
				})("grid-column:1/-1;grid-row:2;padding:0 3.2rem;z-index:10;", P.mq.fromTabletSm, "{grid-column:1/5;padding:0 4rem;display:grid;grid-template-rows:3.2rem 7.4rem 1fr;}", P.mq.fromDesktopSm, "{grid-column:1/5;grid-row:1;padding:0rem;grid-template-rows:22.6rem 6rem 1fr;}", P.mq.fromDesktopLg, "{grid-column:1/5;max-width:30rem;}"),
				ae = (0, D.Z)("div", {
					target: "e1bbxwa55"
				})("display:flex;margin-bottom:4rem;", P.mq.fromTabletSm, "{grid-column:1;grid-row:2/2;margin-bottom:4.8rem;}position:relative;"),
				ce = {
					name: "scqpsy",
					styles: "transform:translateX(0);transition:transform 0.4s ease"
				},
				se = {
					name: "1jg4fak",
					styles: "grid-column:0/2;transform:translateX(-150%);transition:transform 0.4s ease"
				},
				le = (0, D.Z)("div", {
					target: "e1bbxwa54"
				})("position:relative;display:flex;flex-direction:column;min-width:0;", P.mq.fromTabletSm, "{height:calc(100vh - 3.2rem);position:relative;grid-column:1/1;grid-row:3/-1;}", (function (e) {
					return e.hidden ? se : ce
				}), ";"),
				de = (0, D.Z)("div", {
					target: "e1bbxwa53"
				})("height:calc(100vh - 29.6rem);overflow:hidden;", P.mq.fromTabletSm, "{height:calc(100vh - 40rem);}"),
				ue = (0, D.Z)("div", {
					target: "e1bbxwa52"
				})("display:flex;flex-direction:column;overflow:scroll;max-height:100%;flex-grow:1;z-index:99;position:relative;&::-webkit-scrollbar{display:none;}-ms-overflow-style:none;scrollbar-width:none;", P.mq.fromTabletSm, "{position:relative;grid-row:2;}"),
				me = (0, D.Z)(H.Z, {
					target: "e1bbxwa51"
				})({
					name: "1x7eu3g",
					styles: "margin-right:4.6rem"
				}),
				fe = (0, D.Z)(H.Z, {
					target: "e1bbxwa50"
				})("i{transform:", (function (e) {
					return e.invertIcon ? "scaleX(-1)" : "scaleX(1)"
				}), ";transition:transform 0.3s ease;}");

			function pe(e, r) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					r && (n = n.filter((function (r) {
						return Object.getOwnPropertyDescriptor(e, r).enumerable
					}))), t.push.apply(t, n)
				}
				return t
			}
			var ge = function (e) {
				var r, t, n, o = e.chapters,
					i = e.seriesId,
					c = e.selectedChapter,
					s = e.seriesName,
					l = e.direction,
					d = e.fit,
					u = e.pageGap,
					m = e.hideDrawer,
					p = e.onChangeDirection,
					g = e.onChangeFit,
					b = e.onChangePageGap,
					w = e.onChangeDrawerVisibility,
					y = (0, f.useRef)(null),
					x = (0, f.useState)(!1),
					j = x[0],
					T = x[1];
				r = "js-showDrawer", t = j || !m, n = "undefined" !== typeof document ? document.body : void 0, (0, f.useEffect)((function () {
					if ((null === n || void 0 === n ? void 0 : n.classList.contains(r)) !== !!t) return t ? t && (null === n || void 0 === n || n.classList.add(r)) : null === n || void 0 === n || n.classList.remove(r),
						function () {
							return null === n || void 0 === n ? void 0 : n.classList.remove(r)
						}
				}), [n, r, !!t]), (0, f.useEffect)((function () {
					var e;
					(null === (e = y.current) || void 0 === e ? void 0 : e.parentNode) instanceof HTMLElement && (y.current.parentNode.scrollTop = y.current.offsetTop - 116)
				}));
				var k = o.sort((function (e, r) {
						return r.number - e.number
					})),
					O = {
						direction: l,
						fit: d,
						pageGap: u,
						onChangeDirection: p,
						onChangeFit: g,
						onChangePageGap: b
					};
				return (0, a.jsxs)(ie, {
					children: [(0, a.jsx)(X, {
						isOpen: j,
						closeModal: function () {
							return T(!1)
						},
						settings: O
					}), (0, a.jsxs)(ae, {
						children: [(0, a.jsx)(me, {
							iconName: h.u.COG,
							style: h.z.REGULAR,
							onClick: function () {
								return T(!0)
							},
							tooltipLabel: "Paramètres",
							tooltipId: "settings-tip"
						}), (0, a.jsx)(fe, {
							iconName: h.u.ARROW_TO_LEFT,
							onClick: function () {
								w(!m)
							},
							tooltipLabel: m ? "Expand" : "Collapse",
							tooltipId: "collapse-tip",
							invertIcon: !!m
						})]
					}), (0, a.jsxs)(le, {
						hidden: m,
						children: [(0, a.jsx)(oe, {
							seriesId: i,
							seriesName: s
						}), (0, a.jsx)(de, {
							children: (0, a.jsx)(ue, {
								children: k.map((function (e) {
									var r = e.number === c,
										t = r ? {
											ref: y
										} : {};
									return (0, a.jsx)(ne, function (e) {
										for (var r = 1; r < arguments.length; r++) {
											var t = null != arguments[r] ? arguments[r] : {};
											r % 2 ? pe(Object(t), !0).forEach((function (r) {
												(0, v.Z)(e, r, t[r])
											})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : pe(Object(t)).forEach((function (r) {
												Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
											}))
										}
										return e
									}({
										href: "/perf/series/".concat(i, "/").concat(e.number),
										/*Change adress of clicking serie on reader*/
										chapter: e,
										selected: r
									}, t), 5)
								}))
							})
						})]
					})]
				})
			};
			var he = {
					name: "hnvul0",
					styles: "opacity:1;transition:opacity 0.2s ease"
				},
				ve = (0, D.Z)("div", {
					target: "eyy9jqy1"
				})("position:relative;height:10rem;width:100%;bottom:10rem;opacity:0;transition:opacity 0.3s ease;pointer-events:auto;", (function (e) {
					return e.show && he
				}), " &:hover{", he, ";}", P.mq.fromDesktopSm, "{bottom:36rem;pointer-events:none;}"),
				be = (0, D.Z)("div", {
					target: "eyy9jqy0"
				})("position:absolute;bottom:4.8rem;left:50%;transform:translate(-50%, -50%);display:flex;flex-direction:row;justify-content:space-around;padding:0.8rem;border-radius:0.4rem;color:var(--color-1000);background-color:var(--color-900);pointer-events:auto;", P.mq.fromDesktopSm, "{bottom:5.6rem;}");
			var we = function (e) {
					var r = e.currentView,
						t = e.children,
						n = (0, f.useState)(!1),
						o = n[0],
						i = n[1];
					return (0, f.useEffect)((function () {
						i(!0), setTimeout((function () {
							return i(!1)
						}), 500)
					}), [r]), (0, a.jsx)(ve, {
						show: o,
						children: (0, a.jsx)(be, {
							children: t
						})
					})
				},
				ye = t(917);
			var xe = {
					name: "bw2383",
					styles: "object-fit:contain;grid-row-start:2;grid-column-start:2;max-width:100%;min-width:0;width:100%;height:auto;&::-webkit-scrollbar{display:none;}-ms-overflow-style:none;scrollbar-width:none"
				},
				je = (0, ye.iv)("max-height:100vh;min-height:0;height:auto;max-width:100%;min-width:0;object-fit:contain;grid-row-start:2;grid-column-start:2;", P.mq.fromDesktopSm, "{max-height:calc(100vh - 10px);}", ""),
				Te = (0, D.Z)("img", {
					target: "e2yy4xk1"
				})((function (e) {
					return e.fit === n.WIDTH ? xe : je
				}), ";"),
				ke = (0, ye.iv)("min-width:100%;width:100%;max-height:100vh;height:100%;overflow:auto;display:flex;position:relative;justify-content:center;flex-direction:column;", P.mq.fromTabletSm, "{padding:0 0.5rem;}", P.mq.fromDesktopSm, "{max-height:calc(100vh - 10px);}", ""),
				Oe = (0, D.Z)("div", {
					target: "e2yy4xk0"
				})("cursor:pointer;", (function (e) {
					return e.fit === n.WIDTH ? function (e) {
						return (0, ye.iv)("min-width:100%;width:100%;height:100%;flex-shrink:1;position:relative;display:grid;", e.direction !== o.LS && "\n    grid-template-rows: minmax(0px, 1fr) 1fr minmax(0px, 1fr);\n  ", " justify-content:center;&::-webkit-scrollbar{display:none;}-ms-overflow-style:none;scrollbar-width:none;", "")
					}(e) : ke
				}), ";");
			var De = function (e) {
					var r = e.pages,
						t = e.viewNum,
						n = e.viewLimit,
						o = e.fit,
						i = e.pageId,
						c = void 0 === i ? "" : i,
						s = e.direction,
						l = t < n;
					return (0, a.jsx)(Oe, {
						fit: o,
						id: c,
						direction: s,
						children: r.map((function (e, n) {
							return (0, a.jsx)(Te, {
								fit: o,
								src: l ? e.source : void 0,
								alt: "Page ".concat(t * r.length + n + 1)
							}, "comic-image-".concat(n))
						}))
					})
				},
				Se = t(8254),
				Ee = t(7314);

			function Ce(e, r) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					r && (n = n.filter((function (r) {
						return Object.getOwnPropertyDescriptor(e, r).enumerable
					}))), t.push.apply(t, n)
				}
				return t
			}

			function Le(e) {
				for (var r = 1; r < arguments.length; r++) {
					var t = null != arguments[r] ? arguments[r] : {};
					r % 2 ? Ce(Object(t), !0).forEach((function (r) {
						(0, v.Z)(e, r, t[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ce(Object(t)).forEach((function (r) {
						Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
					}))
				}
				return e
			}
			var Re = function (e) {
				var r = e.className,
					t = (0, I.Z)(e, ["className"]),
					n = r && r.split(" ") || ["SwipeablesViews"],
					o = (0, m.Z)(n, 1)[0],
					i = o ? {
						slideClassName: "".concat(o, "-slide")
					} : {};
				return (0, a.jsx)(Ee.Z, Le(Le(Le({}, i), t), {}, {
					ref: null
				}))
			};
			var Pe = {
					name: "1gkgxck",
					styles: "cursor:not-allowed;padding:0.4rem 0.8rem;margin:0 0.2rem;>i{color:var(--color-500);}&:hover,&:active{background:transparent;>i{color:var(--color-500);}}"
				},
				Ze = (0, D.Z)(S.B4, {
					target: "ecxhasv8"
				})({
					name: "1gqy8p",
					styles: "color:var(--color-000);text-align:center;margin:0 1.2rem;min-width:5rem;white-space:nowrap"
				}),
				Ie = (0, D.Z)("button", {
					target: "ecxhasv7"
				})("background:transparent;padding:0.4rem 0.8rem;margin:0 0.2rem;border:none;border-radius:0.4rem;>i{color:var(--color-100);}&:hover,&:active{filter:none;background-color:var(--color-100);>i{color:var(--color-1000);}}", (function (e) {
					return e.disabled && Pe
				}), ";"),
				Ne = (0, D.Z)("div", {
					target: "ecxhasv6"
				})((0, z.Uj)(), " position:relative;grid-template-rows:13rem 5.8rem 100vh;grid-column-gap:0;padding:0;width:100vw;height:100%;margin:0;", P.mq.fromTabletSm, "{padding:0;grid-template-rows:15rem 9rem 100vh;grid-row-gap:1.6rem;}", P.mq.fromDesktopSm, "{padding:0 4rem;height:calc(100vh - 1rem);max-width:100%;grid-template-rows:1fr;grid-gap:0;}"),
				Ge = (0, D.Z)("div", {
					target: "ecxhasv5"
				})("background-color:var(--color-100);grid-row:3/-1;grid-column:1/-1;width:100%;position:relative;user-select:none;", P.mq.fromTabletSm, "{grid-column:", (function (e) {
					return e.expanded ? "1/-1" : "5/-1"
				}), ";z-index:20;}", P.mq.fromDesktopSm, "{background-color:var(--color-000);grid-column-start:", (function (e) {
					return e.expanded ? "3" : "6"
				}), ";grid-column-end:-1;grid-row:1;}"),
				_e = (0, D.Z)("div", {
					target: "ecxhasv4"
				})("width:100%;position:relative;grid-row:1;max-height:calc(100vh - 1rem);overflow-y:scroll;grid-row:3/-1;grid-column:1/-1;cursor:pointer;user-select:none;&::-webkit-scrollbar{display:none;}-ms-overflow-style:none;scrollbar-width:none;>div{height:unset;", (function (e) {
					return e.gapStyle === i.HG && "margin-bottom: 1.6rem;"
				}), ";}", P.mq.fromTabletSm, "{grid-column:", (function (e) {
					return e.expanded ? "1/-1" : "5/-1"
				}), ";z-index:20;}", P.mq.fromDesktopSm, "{background-color:var(--color-000);grid-column-start:", (function (e) {
					return e.expanded ? "3" : "6"
				}), ";grid-column-end:-1;grid-row:1;}"),
				qe = (0, D.Z)(Re, {
					target: "ecxhasv3"
				})("&-slide[aria-hidden='true']{visibility:hidden;transition-delay:0.35s;}&-slide[aria-hidden='false']{visibility:visible;}&-slide{height:100vh;width:100%;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}", P.mq.fromDesktopSm, "{height:calc(100vh - 1rem);}}"),
				Ae = (P.mq.fromTabletSm, P.mq.fromTabletSm, P.mq.fromTabletMd, P.mq.fromDesktopSm, P.mq.fromDesktopSm, P.mq.fromDesktopLg, {
					name: "sx4ymz",
					styles: "opacity:0;pointer-events:none"
				}),
				He = (0, D.Z)("div", {
					target: "ecxhasv0"
				})("position:absolute;width:100%;height:100%;background:", (function (e) {
					return e.theme.isDarkMode ? "rgba(31, 31, 31, 0.5)" : "rgba(152, 152, 152, 0.5)"
				}), ";-webkit-backdrop-filter:blur(0.8rem);backdrop-filter:blur(0.8rem);z-index:9;opacity:1;transition:opacity 0.5s ease;", (function (e) {
					return e.hidden && Ae
				}), " ", P.mq.fromTabletSm, "{display:none;}"),
				ze = ["Alt", "Control", "Meta", "Shift", "AltGraph"];
			var Ve = function (e) {
					var r = e.pages,
						t = e.pagesPerView,
						c = void 0 === t ? 1 : t,
						s = e.preloadLimit,
						l = void 0 === s ? 5 : s,
						d = e.chapters,
						u = e.selectedChapter,
						v = e.seriesId,
						b = e.seriesName,
						w = j({
							direction: o.RTL,
							fit: n.NATIVE,
							pageGap: i.HG
						}),
						y = (0, m.Z)(w, 2),
						x = y[0],
						O = x.fit,
						D = x.direction,
						S = x.pageGap,
						E = x.device,
						C = y[1],
						L = T({
							currentView: 0,
							chapters: d,
							pages: r,
							pagesPerView: c,
							seriesId: v,
							direction: D,
							selectedChapter: u
						}),
						R = L.currentView,
						P = L.onPageLeft,
						Z = L.onPageRight,
						I = L.onPageFarLeft,
						N = L.onPageFarRight,
						G = L.setView,
						_ = (0, f.useMemo)((function () {
							return (0, p.chunk)(r, c)
						}), [r, c]),
						q = _.length,
						A = R + l,
						H = R + 1 === _.length,
						z = 0 === R,
						V = D === o.RTL ? z : H,
						F = D === o.RTL ? H : z,
						M = (0, f.useRef)(!1),
						B = (0, f.useRef)(0),
						U = (0, f.useRef)(!1),
						X = (0, f.useRef)(0),
						W = (0, f.useRef)(!1),
						Y = (0, f.useRef)(null),
						K = (0, f.useRef)(-1),
						Q = (0, f.useRef)(!1),
						$ = (0, f.useCallback)((function () {
							Q.current = !1
						}), []),
						ee = (0, f.useCallback)((function () {
							var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
								t = D === o.LS ? Y.current : null === (e = document.querySelector("#page-".concat(R))) || void 0 === e ? void 0 : e.parentElement,
								n = 22;
							if (t) {
								var i = function e() {
									setTimeout((function () {
										t.scroll({
											top: t.scrollTop + r * n,
											behavior: "auto"
										}), Q.current ? K.current = window.requestAnimationFrame(e) : window.cancelAnimationFrame(K.current)
									}), 1e3 / 60)
								};
								K.current = window.requestAnimationFrame(i)
							}
						}), [R, D]),
						re = (0, f.useCallback)((function (e) {
							if (!ze.map((function (r) {
									return !!e.getModifierState(r)
								})).some((function (e) {
									return e
								}))) switch (e.key) {
								case "ArrowLeft":
									P(e);
									break;
								case "ArrowRight":
									Z(e)
							}
						}), [P, Z]),
						te = (0, f.useCallback)((function (e) {
							if (!ze.map((function (r) {
									return !!e.getModifierState(r)
								})).some((function (e) {
									return e
								}))) switch (e.key) {
								case "ArrowUp":
									Q.current || ee(-1), Q.current = !0, e.preventDefault();
									break;
								case "ArrowDown":
									Q.current || ee(1), Q.current = !0, e.preventDefault()
							}
						}), [ee]),
						ne = g().throttle((function () {
							if (Y.current) {
								var e = function (e, r) {
									if (r.scrollHeight - r.scrollTop == r.clientHeight) return e - 1;
									for (var t = 0; t < e; t++) {
										var n = document.getElementById("page-".concat(t));
										if (!n) return e - 1;
										if (n.offsetTop == r.scrollTop) return t;
										if (r.scrollTop < 0) return t;
										if (n.offsetTop > r.scrollTop) return t - 1
									}
									return e - 1
								}(q, Y.current);
								Y.current.scrollTop < B.current ? (U.current && !W.current ? X.current += Y.current.scrollTop - B.current : X.current = 0, U.current = !0) : Y.current.scrollTop > B.current && (U.current || W.current ? X.current = 0 : X.current += Y.current.scrollTop - B.current, U.current = !1), B.current = Y.current.scrollTop, null !== E && void 0 !== E && E.hideDrawer && (U.current && X.current < -k.menuScrollBuffer ? document.documentElement.scroll({
									top: 0,
									behavior: "smooth"
								}) : X.current > k.menuScrollBuffer && document.documentElement.scroll({
									top: 1e3,
									behavior: "smooth"
								})), !M.current && e < R || (M.current = !0, G(e))
							}
						}), 250),
						oe = (0, f.useCallback)((function () {
							if (window.location.href.includes("#")) {
								var e = window.location.hash.substr(1),
									r = parseInt(e) - 1;
								"last" === e ? G(q - 1) : r && (0, p.inRange)(r, 1, q + 1) ? R !== r && G(r) : history.replaceState(history.state, "", " ")
							}
						}), [q, R, G]);
					return (0, f.useEffect)((function () {
						return document.addEventListener("keydown", re, !1), document.addEventListener("keydown", te, !1), document.addEventListener("keyup", $, !1), window.addEventListener("hashchange", oe, !1),
							function () {
								document.removeEventListener("keydown", re), window.removeEventListener("hashchange", oe), document.removeEventListener("keydown", te, !1), document.removeEventListener("keyup", $, !1)
							}
					}), [te, oe, re, $]), (0, f.useEffect)((function () {
						oe()
					}), []), (0, a.jsxs)(Ne, {
						id: "reader-container",
						children: [(0, a.jsx)(ge, {
							chapters: d,
							seriesId: v,
							selectedChapter: u,
							seriesName: b,
							direction: D,
							fit: O,
							pageGap: S,
							hideDrawer: null === E || void 0 === E ? void 0 : E.hideDrawer,
							onChangeDirection: function (e) {
								localStorage.setItem("readDirection", e), C({
									action: "SET_DIRECTION",
									data: {
										direction: e
									}
								})
							},
							onChangeFit: function (e) {
								localStorage.setItem("fitType", e), C({
									action: "SET_FIT",
									data: {
										fit: e
									}
								})
							},
							onChangePageGap: function (e) {
								localStorage.setItem("pageGap", e), C({
									action: "SET_PAGE_GAP",
									data: {
										pageGap: e
									}
								})
							},
							onChangeDrawerVisibility: function (e) {
								e ? setTimeout((function () {
									W.current = !1
								}), 400) : W.current = !0, C({
									action: "HIDE_NAVIGATON",
									data: {
										hideDrawer: e
									}
								})
							}
						}), D === o.LS && (0, a.jsx)(_e, {
							expanded: !(null === E || void 0 === E || !E.hideDrawer),
							onClick: function (e) {
								if (e.preventDefault(), Y.current) {
									var t = function (e) {
											if (!(e.currentTarget instanceof HTMLElement)) return 0;
											var r = e.currentTarget.getBoundingClientRect(),
												t = r.height,
												n = r.y;
											return e.pageY - n < t / 2 ? -1 : 1
										}(e),
										n = Y.current.scrollTop === Y.current.scrollHeight - Y.current.offsetHeight && 1 === t,
										o = 0 === Y.current.scrollTop && -1 === t;
									if (n) return G(r.length);
									if (o) return G(-1);
									var i = Y.current.scrollTop + .7 * Y.current.clientHeight * t;
									Y.current.scroll({
										top: i,
										behavior: "smooth"
									})
								}
							},
							onScroll: ne,
							onLoad: function () {
								!M.current && function (e) {
									var r, t;
									Y.current && (e !== q - 1 ? Y.current.scroll({
										top: null === (r = document.getElementById("page-".concat(e))) || void 0 === r ? void 0 : r.offsetTop
									}) : Y.current.scroll({
										top: null === (t = document.getElementById("page-".concat(q - 1))) || void 0 === t ? void 0 : t.offsetTop
									}))
								}(R)
							},
							gapStyle: S,
							ref: Y,
							id: "long-strip-container",
							children: _.map((function (e, r) {
								return (0, a.jsx)(De, {
									fit: O,
									pages: e,
									viewTotal: _.length,
									viewNum: r,
									viewLimit: q,
									pageId: "page-".concat(r),
									direction: D
								}, r)
							}))
						}), D !== o.LS && (0, a.jsxs)(Ge, {
							expanded: !(null === E || void 0 === E || !E.hideDrawer),
							children: [(0, a.jsx)(qe, {
								axis: {
									rtl: "x-reverse",
									ltr: "x"
								} [D],
								style: {
									height: "100%"
								},
								containerStyle: {
									height: "100%"
								},
								index: R,
								onSwitching: function (e) {
									var r = 0 | e;
									r !== R && G(r)
								},
								id: "view",
								onClick: function (e) {
									e.preventDefault(), G(R + function (e, r) {
										if (!(e.currentTarget instanceof HTMLElement)) return 0;
										var t = e.currentTarget.getBoundingClientRect(),
											n = t.width,
											i = t.x;
										return e.pageX - i < n / 2 ? r === o.RTL ? 1 : -1 : r === o.RTL ? -1 : 1
									}(e, D))
								},
								children: _.map((function (e, r) {
									return (0, a.jsx)(De, {
										fit: O,
										pages: e,
										viewTotal: _.length,
										viewNum: r,
										viewLimit: A,
										pageId: "page-".concat(r),
										direction: D
									}, r)
								}))
							}), (0, a.jsxs)(we, {
								currentView: R,
								children: [(0, a.jsx)(Ie, {
									onClick: I,
									disabled: F,
									children: (0, a.jsx)(J.Z, {
										style: h.z.REGULAR,
										name: h.u.CHEVRON_DOUBLE_LEFT
									})
								}), (0, a.jsx)(Ie, {
									onClick: P,
									children: (0, a.jsx)(J.Z, {
										style: h.z.REGULAR,
										name: h.u.CHEVRON_LEFT
									})
								}), (0, a.jsx)(Ze, {
									children: "".concat(R + 1, " / ").concat(_.length)
								}), (0, a.jsx)(Ie, {
									onClick: Z,
									children: (0, a.jsx)(J.Z, {
										style: h.z.REGULAR,
										name: h.u.CHEVRON_RIGHT
									})
								}), (0, a.jsx)(Ie, {
									onClick: N,
									disabled: V,
									children: (0, a.jsx)(J.Z, {
										style: h.z.REGULAR,
										name: h.u.CHEVRON_DOUBLE_RIGHT
									})
								})]
							})]
						}), (0, a.jsx)(He, {
							hidden: null === E || void 0 === E ? void 0 : E.hideDrawer
						})]
					})
				},
				Fe = !0;

			function Me(e) {
				var r = e.series,
					t = e.chapter,
					n = e.pages;
				if (!r || !t || !n) return (0, a.jsx)(d.Z, {});
				return (0, a.jsxs)(u.Z, {
					showFooter: !1,
					lockNav: !0,
					children: [(0, a.jsx)(c.PB, {
						title: "".concat((0, l.Z)(r, t), " - ").concat(r.title, " - PERF"),
						description: r.description,
						twitter: {
							cardType: "summary",
							site: "5euros.org",
							handle: "bcscanlations"
						},
						openGraph: {
							type: "website",
							images: [{
								url: "".concat(r.cover_art.source),
								width: r.cover_art.width,
								height: r.cover_art.height,
								alt: "Cover art for ".concat(r.title)
							}],
							locale: "en_US",
							site_name: "PERF"
						}
					}), (0, a.jsxs)(s.default, {
						children: [(0, a.jsx)("title", {
							children: "".concat((0, l.Z)(r, t), " - ").concat(r.title, " - PERF")
						}), (0, a.jsx)("link", {
							rel: "icon",
							type: "image/png",
							href: "http://localhost/perf/assets/img/logo2.png"
						}), (0, a.jsx)("link", {
							rel: "stylesheet",
							href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
						})]
					}), (0, a.jsx)(Ve, {
						selectedChapter: t.number,
						chapters: r.chapters,
						pages: n.map((function (e) {
							return {
								source: e
							}
						})),
						seriesId: r.series_id,
						onChangeChapter: function (e, t) {
							var n = t > 0 ? "" : "#last";
							location.href = "/series/".concat(r.series_id, "/").concat(e).concat(n)
						},
						seriesName: r.title
					})]
				})
			}
		},
		8837: function (e, r, t) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/series/[series]/[chapter]", function () {
				return t(5276)
			}])
		}
	},
	function (e) {
		e.O(0, [774, 662, 351, 950, 357, 192, 279, 641], (function () {
			return r = 8837, e(e.s = r);
			var r
		}));
		var r = e.O();
		_N_E = r
	}
]);
