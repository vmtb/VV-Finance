(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[405], {
		3800: function (e, r, t) {
			"use strict";
			t.d(r, {
				Z: function () {
					return b
				}
			});
			var o = t(6265),
				i = t(5893),
				a = t(8347),
				n = t(1664),
				l = t(5366),
				s = t(917),
				m = t(279);
			var c = function (e) {
					return (0, s.iv)("background:var(--color-900);border-radius:0.4rem;color:var(--color-100);padding:", e.short ? .8 : 1.6, "rem 2.4rem;transition:color 0.2s ease,background 0.2s ease;&:hover{background:var(--color-300);color:var(--color-100);}", "")
				},
				d = {
					name: "dbo0zz",
					styles: "background:var(--color-100);color:var(--color-900);&:hover{background:var(--color-900);color:var(--color-100);}"
				},
				u = {
					name: "161jua6",
					styles: "background:var(--color-300);color:var(--color-500);pointer-events:none;user-select:none;&:hover{color:var(--color-500);}"
				},
				g = (0, l.Z)("a", {
					target: "e6ul01d1"
				})("display:inline-block;white-space:nowrap;", (function (e) {
					return c(e)
				}), " ", (function (e) {
					return e.secondary && d
				}), " ", (function (e) {
					return e.disabled && u
				}), " ", m.mq.fromTabletSm, "{font-size:1.6rem;}"),
				f = (0, l.Z)("button", {
					target: "e6ul01d0"
				})("border:none;font-size:1.6rem;cursor:pointer;white-space:nowrap;", (function (e) {
					return c(e)
				}), " ", (function (e) {
					return e.secondary && d
				}), " &:disabled{background:var(--color-300);color:var(--color-500);}");

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

			function h(e) {
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

			function v(e) {
				var r = e.href,
					t = e.children,
					o = (0, a.Z)(e, ["href", "children"]);
				return (0, i.jsx)(n.default, {
					href: r,
					passHref: !0,
					children: (0, i.jsx)(g, h(h({}, o), {}, {
						children: t
					}))
				})
			}
			var b = function (e) {
				var r = e.href,
					t = (0, a.Z)(e, ["href"]);
				return r ? (0, i.jsx)(v, h({
					href: r
				}, t)) : (0, i.jsx)(f, h({}, t))
			}
		},
		873: function (e, r, t) {
			"use strict";
			t.d(r, {
				Z: function () {
					return a
				}
			});
			var o = t(5893),
				i = (0, t(5366).Z)("img", {
					target: "e1je4q6n0"
				})("height:", (function (e) {
					return e.imageHeight
				}), ";width:", (function (e) {
					return e.imageWidth
				}), ";object-fit:cover;object-position:top;border-radius:0.8rem;");
			var a = function (e) {
				var r = e.className,
					t = e.url,
					a = e.height,
					n = void 0 === a ? "100%" : a,
					l = e.width,
					s = void 0 === l ? "100%" : l,
					m = e.alt,
					c = e.loading;
				return (0, o.jsx)(i, {
					className: r,
					src: t,
					imageHeight: n,
					imageWidth: s,
					alt: m,
					loading: c
				})
			}
		},
		5554: function (e, r, t) {
			"use strict";
			t.d(r, {
				Z: function () {
					return a
				}
			});
			var o = t(5366),
				i = t(9527),
				a = (0, o.Z)("div", {
					target: "eq9a17o0"
				})((0, i.Uj)(), ";")
		},
		4719: function (e, r, t) {
			"use strict";
			t.d(r, {
				Z: function () {
					return s
				}
			});
			var o = t(5893),
				i = t(5366),
				a = t(2981);
			var n = (0, i.Z)("div", {
					target: "eibv1gc1"
				})({
					name: "1cls7c6",
					styles: "background:var(--color-tag-bg);margin:0 1rem 1rem 0;padding:0.4rem 0.8rem;border-radius:2px"
				}),
				l = (0, i.Z)(a.VF, {
					target: "eibv1gc0"
				})({
					name: "1rlb0ra",
					styles: "color:var(--color-tag-text)"
				});
			var s = function (e) {
				var r = e.children;
				return (0, o.jsx)(n, {
					children: (0, o.jsx)(l, {
						children: r
					})
				})
			}
		},
		4765: function (e, r, t) {
			"use strict";
			t.d(r, {
				Z: function () {
					return m
				}
			});
			var o = t(5893),
				i = t(2981),
				a = t(5366),
				n = t(279),
				l = (0, a.Z)("div", {
					target: "e1vvf2vt1"
				})("width:100%;display:flex;justify-content:space-between;grid-column:1/-1;margin-bottom:4.8rem;", n.mq.fromMobileLg, "{grid-column:1/-1;}", n.mq.fromTabletSm, "{grid-column:2/-1;}", n.mq.fromDesktopSm, "{grid-column:5/-1;}"),
				s = (0, a.Z)("div", {
					target: "e1vvf2vt0"
				})("");
			var m = function (e) {
				var r = e.sectionTitle,
					t = e.children;
				return (0, o.jsxs)(l, {
					children: [(0, o.jsx)(i.AE, {
						children: r
					}), (0, o.jsx)(s, {
						children: t
					})]
				})
			}
		},
		8408: function (e, r, t) {
			"use strict";
			t.r(r), t.d(r, {
				__N_SSG: function () {
					return ye
				},
				default: function () {
					return Ze
				}
			});
			var o = t(5893),
				i = t(2962),
				a = t(9008),
				n = t(3099),
				l = t(4121),
				s = t(7294),
				m = {
					amagami: "#CD342F",
					bisquedoll: "#729496",
					gksfd: "#546FB8",
					kanokari: "#FFB103",
					komi: "#CE5754",
					mxm: "#4DAAAF",
					shaved: "#9D7F70"
				},
				c = t(2748),
				d = t(9999),
				u = t(2981),
				g = t(4719),
				f = t(3800),
				p = t(5366),
				h = t(279),
				v = t(9527),
				b = t(873);
			var x = (0, p.Z)("div", {
					target: "ej9f53m10"
				})((0, v.Uj)(), " height:100%;", h.mq.fromTabletSm, "{min-height:20rem;position:relative;}"),
				j = (0, p.Z)("div", {
					target: "ej9f53m9"
				})("grid-column:1/-1;margin-top:5.4rem;z-index:20;text-align:left;display:flex;flex-direction:column;color:var(--color-900);padding-bottom:7.2rem;", h.mq.fromTabletSm, "{grid-column:2/span 9;margin-top:3.2rem;}", h.mq.fromTabletLg, "{grid-column:2/span 6;}", h.mq.fromDesktopSm, "{grid-column:5/span 9;}"),
				y = (0, p.Z)("div", {
					target: "ej9f53m8"
				})("margin-bottom:0.6rem;display:none;", h.mq.fromTabletSm, "{display:flex;flex-wrap:wrap;}"),
				Z = (0, p.Z)("div", {
					target: "ej9f53m7"
				})("display:flex;align-items:center;margin-top:1.6rem;", h.mq.fromTabletMd, "{margin-top:4rem;}a{color:var(--color-100);&:hover{color:var(--color-100);}}"),
				w = (0, p.Z)("div", {
					target: "ej9f53m6"
				})("margin-left:2.5rem;display:none;white-space:nowrap;", h.mq.fromTabletSm, "{display:flex;}"),
				k = (0, p.Z)("div", {
					target: "ej9f53m5"
				})("position:absolute;right:0;bottom:0;width:100%;height:100%;&::before{content:'';position:absolute;width:100%;height:calc(100% + 0.1rem);background:linear-gradient(180deg, var(--color-image-fade) 0%, var(--color-100) 100%);z-index:10;}", h.mq.fromTabletSm, "{max-width:60%;max-height:100%;}", h.mq.fromTabletLg, "{&::before{content:none;}}", h.mq.fromDesktopLg, "{right:20%;top:8rem;}", h.mq.fromDesktopXl, "{right:30%;}"),
				q = (0, p.Z)(u.__, {
					target: "ej9f53m4"
				})("color:", (function (e) {
					return e.color
				}), ";padding-bottom:1.6rem;"),
				S = (0, p.Z)(u.B4, {
					target: "ej9f53m3"
				})("grid-column:1/-1;color:var(--color-900);display:none;", h.mq.fromTabletMd, "{display:block;}"),
				z = (0, p.Z)(u.B4, {
					target: "ej9f53m2"
				})("color:", (function (e) {
					return e.color
				}), ";margin-right:0.5rem;"),
				T = (0, p.Z)(u.B4, {
					target: "ej9f53m1"
				})({
					name: "15575wy",
					styles: "color:var(--color-700);text-transform:capitalize"
				}),
				_ = (0, p.Z)(b.Z, {
					target: "ej9f53m0"
				})("height:100%;object-fit:cover;object-position:center top;max-height:100%;", h.mq.fromMobileSm, "{object-fit:contain;object-position:right bottom;}", h.mq.fromTabletSm, "{object-fit:contain;object-position:right 110%;}", h.mq.fromDesktopSm, "{object-fit:contain;object-position:right bottom;}", h.mq.fromDesktopLg, "{object-position:right top;transform:scale(1.5);}");
			var D = function (e) {
					var r = e.series,
						t = e.titleColor;
					return (0, o.jsxs)(x, {
						children: [(0, o.jsxs)(j, {
							children: [(0, o.jsx)(u.AE, {
								children: "Recommended"
							}), (0, o.jsx)(q, {
								color: t,
								children: r.title
							}), (0, o.jsx)(y, {
								children: r.genres.map((function (e) {
									return (0, o.jsx)(g.Z, {
										children: e
									}, e)
								}))
							}), (0, o.jsx)(S, {
								children: r.description
							}), (0, o.jsxs)(Z, {
								children: [(0, o.jsx)(f.Z, {
									href: "/perf/series/".concat(r.series_id),
									/**Change link of carousel checking out */
									short: !0,
									children: "Consulter le chapitre"
								}), (0, o.jsxs)(w, {
									children: [(0, o.jsx)(z, {
										color: t,
										children: "Chapitre ".concat(Math.max.apply(Math, (0, d.Z)(r.chapters.map((function (e) {
											return e.number
										})))))
									}), (0, o.jsx)(T, {
										children: "\u2022 ".concat(r.status)
									})]
								})]
							})]
						}), (0, o.jsx)(k, {
							children: (0, o.jsx)(_, {
								url: "/perf/media/covers/".concat(r.series_id, ".png"),
								alt: "Splash media for ".concat(r.title) /**Change link of carousel images */
							})
						})]
					})
				},
				O = t(7077),
				C = t(615);
			var M = (0, p.Z)("div", {
					target: "ezsfo597"
				})({
					name: "1dvvcld",
					styles: "position:relative;padding-bottom:1.4rem"
				}),
				L = (0, p.Z)(C.lr, {
					target: "ezsfo596"
				})({
					name: "j65gei",
					styles: "background:var(--color-100);.slide{background:transparent;}"
				}),
				E = (0, p.Z)("div", {
					target: "ezsfo595"
				})({
					name: "1d3w5wq",
					styles: "width:100%"
				}),
				N = (0, p.Z)("div", {
					target: "ezsfo594"
				})("position:relative;z-index:99;margin:-7.2rem 3.2rem 4rem;align-items:center;display:grid;grid-template-columns:repeat(6, minmax(0rem, 1fr));grid-column-gap:1.6rem;", h.mq.fromTabletSm, "{grid-template-columns:repeat(13, minmax(0rem, 1fr));grid-column-gap:2rem;margin:-7.2rem 4rem 4rem;}", h.mq.fromDesktopSm, "{grid-template-columns:repeat(24, minmax(0rem, 1fr));}"),
				P = (0, p.Z)("div", {
					target: "ezsfo593"
				})({
					name: "1uxo2mh",
					styles: "display:flex;align-items:center;grid-column:-2/-1;justify-content:flex-end"
				}),
				B = (0, p.Z)(O.Z, {
					target: "ezsfo592"
				})({
					name: "1a5nbzz",
					styles: "cursor:pointer;font-size:1.8rem;background:none;&:last-child{margin-left:2.4rem;}"
				}),
				F = (0, p.Z)("div", {
					target: "ezsfo591"
				})("display:flex;left:0;grid-column:1/-2;", h.mq.fromTabletSm, "{grid-column:2/-2;margin-left:5px;}", h.mq.fromDesktopSm, "{grid-column:5/-2;margin-left:0;}"),
				H = (0, p.Z)("div", {
					target: "ezsfo590"
				})("height:0.8rem;width:0.8rem;background:var(--color-1000);border-radius:0.4rem;margin-right:0.8rem;cursor:pointer;transition:opacity 0.2s ease;opacity:", (function (e) {
					return e.selected ? "1" : "0.15"
				}), ";&:last-child{margin-right:0;}&:hover{opacity:1;}");
			t(5739);
			var A = function (e) {
					var r = e.featured,
						t = s.useState(0),
						i = (0, l.Z)(t, 2),
						a = i[0],
						n = i[1],
						d = function (e) {
							n(e)
						};
					return (0, o.jsxs)(M, {
						children: [(0, o.jsx)(L, {
							selectedItem: a,
							onChange: function (e) {
								return d(e)
							},
							autoPlay: !0,
							infiniteLoop: !0,
							showThumbs: !1,
							showArrows: !1,
							showStatus: !1,
							showIndicators: !1,
							interval: 8e3,
							children: r.map((function (e) {
								return (0, o.jsx)(D, {
									series: e,
									titleColor: m[e.series_id]
								}, e.title)
							}))
						}), (0, o.jsx)(E, {
							children: (0, o.jsxs)(N, {
								children: [(0, o.jsx)(F, {
									children: r.map((function (e, r) {
										return (0, o.jsx)(H, {
											selected: a === r,
											onClick: function () {
												return d(r)
											}
										}, "carouse-dot-".concat(r))
									}))
								}), (0, o.jsxs)(P, {
									children: [(0, o.jsx)(B, {
										iconName: c.u.CHEVRON_LEFT,
										style: c.z.SOLID,
										onClick: function () {
											n(a - 1)
										}
									}), (0, o.jsx)(B, {
										iconName: c.u.CHEVRON_RIGHT,
										style: c.z.SOLID,
										onClick: function () {
											n(a + 1)
										}
									})]
								})]
							})
						})]
					})
				},
				U = t(5944),
				X = t(4263),
				I = t(1664);
			var R = (0, p.Z)(b.Z, {
					target: "e1eqdyam6"
				})((function (e) {
					return !e.theme.isDarkMode && "display: none;"
				}), " position:absolute;transform:translateZ(0) scale(1.02);filter:blur(20px);top:1.2rem;left:0;opacity:0;transition:opacity 0.3s ease-in-out;", h.mq.fromDesktopSm, "{height:32.2rem;}"),
				G = (0, p.Z)(b.Z, {
					target: "e1eqdyam5"
				})("transition:box-shadow 0.3s ease-in-out;position:relative;z-index:10;", h.mq.fromDesktopSm, "{height:32.2rem;}"),
				V = (0, p.Z)("a", {
					target: "e1eqdyam4"
				})("position:relative;width:100%;color:var(--color-900);cursor:pointer;&:hover{img:not(", R, "){", (function (e) {
					return !e.theme.isDarkMode && "box-shadow: var(--color-drop-shadow);"
				}), ";}", R, "{opacity:0.5;}}"),
				W = (0, p.Z)("div", {
					target: "e1eqdyam3"
				})({
					name: "adgtl9",
					styles: "display:flex;width:100%;margin-top:1.2rem;flex-direction:column"
				}),
				Y = (0, p.Z)("div", {
					target: "e1eqdyam2"
				})({
					name: "1kogdhe",
					styles: "display:flex;align-items:center;justify-content:space-between;margin-bottom:0.5rem"
				}),
				J = (0, p.Z)(u.rU, {
					target: "e1eqdyam1"
				})({
					name: "bnyg95",
					styles: "overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;padding:0 0.5rem 0 0"
				}),
				K = (0, p.Z)(u.W_, {
					target: "e1eqdyam0"
				})("color:", (function (e) {
					return e.theme.isDarkMode ? "var(--color-500)" : "var(--color-700"
				}), ";");
			var Q = function (e) {
					var r = e.series,
						t = e.chapter,
						o = e.onlyText,
						i = void 0 !== o && o;
					return (0, U.tZ)(I.default, {
						href: "/perf/series/".concat(r.series_id, "/").concat(t.number),
						passHref: !0,
						children: (0, U.BX)(V, {
							children: [!i && (0, U.BX)(U.HY, {
								children: [(0, U.tZ)(R, {
									url: r.cover_art.source,
									width: "100%",
									height: "22.4rem",
									alt: "Cover art for ".concat(r.title),
									loading: "lazy"
								}), (0, U.tZ)(G, {
									url: r.cover_art.source,
									width: "100%",
									height: "22.4rem",
									alt: "Cover art for ".concat(r.title),
									loading: "lazy"
								})]
							}), (0, U.BX)(W, {
								children: [(0, U.tZ)(Y, {
									children: (0, U.tZ)(J, {
										children: r.title
									})
								}), (0, U.tZ)(K, {
									children: 'Chapitre '.concat(t.number)
								})]
							})]
						})
					})
				},
				$ = t(6941),
				ee = t(4765),
				re = t(8254),
				te = t(5554),
				oe = (0, p.Z)(te.Z, {
					target: "e1jd9ees2"
				})("background-color:var(--color-000);", h.mq.fromTabletSm, "{grid-template-rows:72px 1fr;}"),
				ie = (h.mq.fromTabletSm, h.mq.fromDesktopSm, (0, p.Z)("div", {
					target: "e1jd9ees0"
				})("grid-row:3;grid-column:1/-1;display:grid;grid-template-columns:repeat(auto-fill, minmax(100%, 1fr));grid-gap:4rem 2rem;", h.mq.fromMobileSm, "{grid-template-columns:repeat(auto-fill, minmax(20rem, 1fr));}", h.mq.fromMobileLg, "{grid-template-columns:repeat(auto-fill, minmax(23rem, 1fr));}", h.mq.fromTabletSm, "{grid-column:2/-1;grid-gap:4.8rem 2rem;grid-template-columns:repeat(auto-fill, minmax(25rem, 1fr));}", h.mq.fromDesktopSm, "{grid-column:5/-1;grid-template-columns:repeat(auto-fill, minmax(20%, 1fr));}"));
			var ae = function (e) {
					var r = e.title,
						t = e.latests,
						i = void 0 === t ? [] : t,
						a = !(0, $.Z)((function (e) {
							return e.fromTabletSm
						}));
					return (0, o.jsxs)(oe, {
						children: [(0, o.jsx)(ee.Z, {
							sectionTitle: r
						}), (0, o.jsx)(ie, {
							children: i.map((function (e, r) {
								var t = (0, l.Z)(e, 2),
									i = t[0],
									n = t[1];
								return (0, o.jsx)(Q, {
									series: i,
									chapter: n,
									onlyText: a && r > 3
								}, i.series_id)
							}))
						})]
					})
				},
				ne = t(6168);
			var le = (0, p.Z)(b.Z, {
					target: "e1i4mxmu8"
				})((function (e) {
					return !e.theme.isDarkMode && "display: none;"
				}), " position:absolute;transform:translateZ(0) scale(1.02);filter:blur(20px);top:1.2rem;opacity:0;transition:opacity 0.3s ease-in-out;"),
				se = (0, p.Z)("a", {
					target: "e1i4mxmu7"
				})("display:flex;flex-direction:column;width:100%;height:100%;color:var(--color-900);&:hover{img:not(", le, "){", (function (e) {
					return !e.theme.isDarkMode && "box-shadow: var(--color-drop-shadow);"
				}), ";}", le, "{opacity:0.5;}}"),
				me = (0, p.Z)("div", {
					target: "e1i4mxmu6"
				})({
					name: "1xzue80",
					styles: "width:100%;padding-top:150%;position:relative;margin-bottom:1.6rem"
				}),
				ce = (0, p.Z)("div", {
					target: "e1i4mxmu5"
				})({
					name: "16hjiy4",
					styles: "position:relative;display:flex;flex-direction:column"
				}),
				de = (0, p.Z)(b.Z, {
					target: "e1i4mxmu4"
				})({
					name: "cg9jhx",
					styles: "transition:box-shadow 0.3s ease-in-out;position:absolute;top:0;z-index:10"
				}),
				ue = (0, p.Z)(u.rU, {
					target: "e1i4mxmu3"
				})({
					name: "11dmy8o",
					styles: "min-height:4rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis;overflow:hidden"
				}),
				ge = (0, p.Z)(ne.Z, {
					target: "e1i4mxmu2"
				})("width:30rem;padding:1.6rem!important;box-sizing:border-box;opacity:1!important;background:var(--color-900);backdrop-filter:blur(2rem)!important;-webkit-backdrop-filter:blur(2rem)!important;border-radius:0.8rem!important;color:var(--color-000);display:none!important;@supports not (-moz-appearance: none){background:rgba(0, 0, 0, 0.7)!important;backdrop-filter:blur(2rem)!important;-webkit-backdrop-filter:blur(2rem)!important;}", h.mq.fromTabletMd, "{display:inherit!important;}"),
				fe = (0, p.Z)(u.rU, {
					target: "e1i4mxmu1"
				})({
					name: "iu63gy",
					styles: "color:var(--color-tooltip-text);margin-bottom:1.7rem;text-transform:capitalize"
				}),
				pe = (0, p.Z)(u.B4, {
					target: "e1i4mxmu0"
				})({
					name: "oowpyy",
					styles: "color:var(--color-500)"
				});
			var he = function (e) {
				var r = e.series,
					t = r.title,
					i = r.cover_art,
					a = r.series_id,
					n = r.genres,
					l = r.status;
				return (0, o.jsxs)(o.Fragment, {
					children: [(0, o.jsx)(I.default, {
						href: "/perf/series/".concat(a),
						passHref: !0,
						children: (0, o.jsxs)(se, {
							"data-tip": !0,
							"data-for": "tip ".concat(a),
							children: [(0, o.jsxs)(me, {
								children: [(0, o.jsx)(le, {
									url: i.source,
									width: "100%",
									height: "100%",
									alt: "Cover art for ".concat(t),
									loading: "lazy",
									className: "blur-image"
								}), (0, o.jsx)(de, {
									url: i.source,
									width: "100%",
									height: "100%",
									alt: "Cover art for ".concat(t),
									loading: "lazy"
								})]
							}), (0, o.jsx)(ce, {
								children: (0, o.jsx)(ue, {
									children: t
								})
							})]
						})
					}), (0, o.jsxs)(ge, {
						id: "tip ".concat(a),
						place: "right",
						arrowColor: "transparent",
						children: [(0, o.jsxs)(fe, {
							children: [l, " \u2022 ", (0, X.Z)(r, void 0, !0)]
						}), (0, o.jsx)(pe, {
							children: n.map((function (e, r) {
								return (r ? ", " : "") + e
							}))
						})]
					})]
				})
			};
			var ve = (0, p.Z)("div", {
					target: "e1itzdfn1"
				})({
					name: "j8pbbh",
					styles: "background-color:var(--color-100)"
				}),
				be = (0, p.Z)("div", {
					target: "e1itzdfn0"
				})("grid-column:1/-1;display:grid;grid-template-columns:repeat(2, 1fr);grid-gap:2rem;", h.mq.fromMobileSm, "{grid-template-columns:repeat(2, 1fr);}", h.mq.fromMobileLg, "{grid-template-columns:repeat(3, 1fr);}", h.mq.fromTabletSm, "{grid-column:2/-1;grid-template-columns:repeat(3, 1fr);grid-gap:4rem 2rem;}", h.mq.fromTabletMd, "{grid-column:2/-1;grid-template-columns:repeat(4, 1fr);grid-gap:4rem 2rem;}", h.mq.fromDesktopSm, "{grid-column:5/-1;grid-template-columns:repeat(5, 1fr);}", h.mq.fromDesktopLg, "{grid-template-columns:repeat(6, 1fr);}");
			var xe = function (e) {
				var r = e.series,
					t = void 0 === r ? [] : r;
				return (0, o.jsx)(ve, {
					children: (0, o.jsxs)(te.Z, {
						children: [(0, o.jsx)(ee.Z, {
							sectionTitle: "Toutes les séries"
						}), (0, o.jsx)(be, {
							children: t.map((function (e) {
								return (0, o.jsx)(he, {
									series: e
								}, e.series_id)
							}))
						})]
					})
				})
			};
			var je = function (e) {
					var r = e.featured,
						t = e.latests,
						i = e.series;
					return (0, o.jsxs)(o.Fragment, {
						children: [(0, o.jsx)(A, {
							featured: r
						}), (0, o.jsx)(ae, {
							title: "Récents chapitres",
							latests: t
						}), (0, o.jsx)(xe, {
							series: i
						})]
					})
				},
				ye = !0;

			function Ze(e) {
				var r = e.series,
					t = e.latests,
					l = e.featured;
				return (0, o.jsxs)(n.Z, {
					children: [(0, o.jsx)(i.PB, {}), (0, o.jsxs)(a.default, {
						children: [(0, o.jsx)("title", {
							children: "PERF2"
						}), (0, o.jsx)("link", {
							rel: "icon",
							type: "image/png",
							href: "http://localhost/perf/assets/img/logo.png"
						})]
					}), (0, o.jsx)(je, {
						featured: l,
						latests: t,
						series: r
					})]
				})
			}
		},
		5301: function (e, r, t) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
				return t(8408)
			}])
		}
	},
	function (e) {
		e.O(0, [774, 662, 351, 950, 158, 192, 279], (function () {
			return r = 5301, e(e.s = r);
			var r
		}));
		var r = e.O();
		_N_E = r
	}
]);
