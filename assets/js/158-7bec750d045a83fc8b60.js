 (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
     [158], {
         5944: function (e, t, n) {
             "use strict";
             n.d(t, {
                 HY: function () {
                     return o
                 },
                 tZ: function () {
                     return s
                 },
                 BX: function () {
                     return a
                 }
             });
             n(7294), n(8204);
             var r = n(5387),
                 i = (n(8679), n(4199), n(5893)),
                 o = i.Fragment;

             function s(e, t, n) {
                 return r.h.call(t, "css") ? (0, i.jsx)(r.E, (0, r.c)(e, t), n) : (0, i.jsx)(e, t, n)
             }

             function a(e, t, n) {
                 return r.h.call(t, "css") ? (0, i.jsxs)(r.E, (0, r.c)(e, t), n) : (0, i.jsxs)(e, t, n)
             }
         },
         4184: function (e, t) {
             var n;
             ! function () {
                 "use strict";
                 var r = {}.hasOwnProperty;

                 function i() {
                     for (var e = [], t = 0; t < arguments.length; t++) {
                         var n = arguments[t];
                         if (n) {
                             var o = typeof n;
                             if ("string" === o || "number" === o) e.push(n);
                             else if (Array.isArray(n)) {
                                 if (n.length) {
                                     var s = i.apply(null, n);
                                     s && e.push(s)
                                 }
                             } else if ("object" === o)
                                 if (n.toString === Object.prototype.toString)
                                     for (var a in n) r.call(n, a) && n[a] && e.push(a);
                                 else e.push(n.toString())
                         }
                     }
                     return e.join(" ")
                 }
                 e.exports ? (i.default = i, e.exports = i) : void 0 === (n = function () {
                     return i
                 }.apply(t, [])) || (e.exports = n)
             }()
         },
         5739: function () {},
         5093: function (e, t, n) {
             "use strict";

             function r(e, t) {
                 (null == t || t > e.length) && (t = e.length);
                 for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                 return r
             }
             n.d(t, {
                 Z: function () {
                     return r
                 }
             })
         },
         4121: function (e, t, n) {
             "use strict";
             n.d(t, {
                 Z: function () {
                     return i
                 }
             });
             var r = n(355);

             function i(e, t) {
                 return function (e) {
                     if (Array.isArray(e)) return e
                 }(e) || function (e, t) {
                     if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
                         var n = [],
                             r = !0,
                             i = !1,
                             o = void 0;
                         try {
                             for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                         } catch (u) {
                             i = !0, o = u
                         } finally {
                             try {
                                 r || null == a.return || a.return()
                             } finally {
                                 if (i) throw o
                             }
                         }
                         return n
                     }
                 }(e, t) || (0, r.Z)(e, t) || function () {
                     throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                 }()
             }
         },
         9999: function (e, t, n) {
             "use strict";
             n.d(t, {
                 Z: function () {
                     return o
                 }
             });
             var r = n(5093);
             var i = n(355);

             function o(e) {
                 return function (e) {
                     if (Array.isArray(e)) return (0, r.Z)(e)
                 }(e) || function (e) {
                     if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                 }(e) || (0, i.Z)(e) || function () {
                     throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                 }()
             }
         },
         355: function (e, t, n) {
             "use strict";
             n.d(t, {
                 Z: function () {
                     return i
                 }
             });
             var r = n(5093);

             function i(e, t) {
                 if (e) {
                     if ("string" === typeof e) return (0, r.Z)(e, t);
                     var n = Object.prototype.toString.call(e).slice(8, -1);
                     return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? (0, r.Z)(e, t) : void 0
                 }
             }
         },
         6995: function (e, t, n) {
             var r, i, o;
             i = [t, n(8532)], void 0 === (o = "function" === typeof (r = function (e, t) {
                 "use strict";
                 Object.defineProperty(e, "__esModule", {
                     value: !0
                 });
                 var n = r(t);

                 function r(e) {
                     return e && e.__esModule ? e : {
                         default: e
                     }
                 }
                 e.default = n.default
             }) ? r.apply(t, i) : r) || (e.exports = o)
         },
         8532: function (e, t, n) {
             var r, i, o;
             i = [t, n(7294), n(5697)], void 0 === (o = "function" === typeof (r = function (e, t, n) {
                 "use strict";
                 Object.defineProperty(e, "__esModule", {
                     value: !0
                 }), e.setHasSupportToCaptureOption = d;
                 var r = o(t),
                     i = o(n);

                 function o(e) {
                     return e && e.__esModule ? e : {
                         default: e
                     }
                 }
                 var s = Object.assign || function (e) {
                     for (var t = 1; t < arguments.length; t++) {
                         var n = arguments[t];
                         for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                     }
                     return e
                 };

                 function a(e, t) {
                     var n = {};
                     for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                     return n
                 }

                 function u(e, t) {
                     if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                 }
                 var l = function () {
                     function e(e, t) {
                         for (var n = 0; n < t.length; n++) {
                             var r = t[n];
                             r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                         }
                     }
                     return function (t, n, r) {
                         return n && e(t.prototype, n), r && e(t, r), t
                     }
                 }();

                 function c(e, t) {
                     if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                     return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                 }

                 function p(e, t) {
                     if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                     e.prototype = Object.create(t && t.prototype, {
                         constructor: {
                             value: e,
                             enumerable: !1,
                             writable: !0,
                             configurable: !0
                         }
                     }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                 }
                 var f = !1;

                 function d(e) {
                     f = e
                 }
                 try {
                     addEventListener("test", null, Object.defineProperty({}, "capture", {
                         get: function () {
                             d(!0)
                         }
                     }))
                 } catch (y) {}

                 function h() {
                     var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                         capture: !0
                     };
                     return f ? e : e.capture
                 }

                 function m(e) {
                     if ("touches" in e) {
                         var t = e.touches[0];
                         return {
                             x: t.pageX,
                             y: t.pageY
                         }
                     }
                     return {
                         x: e.screenX,
                         y: e.screenY
                     }
                 }
                 var v = function (e) {
                     function t() {
                         var e;
                         u(this, t);
                         for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                         var o = c(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(r)));
                         return o._handleSwipeStart = o._handleSwipeStart.bind(o), o._handleSwipeMove = o._handleSwipeMove.bind(o), o._handleSwipeEnd = o._handleSwipeEnd.bind(o), o._onMouseDown = o._onMouseDown.bind(o), o._onMouseMove = o._onMouseMove.bind(o), o._onMouseUp = o._onMouseUp.bind(o), o._setSwiperRef = o._setSwiperRef.bind(o), o
                     }
                     return p(t, e), l(t, [{
                         key: "componentDidMount",
                         value: function () {
                             this.swiper && this.swiper.addEventListener("touchmove", this._handleSwipeMove, h({
                                 capture: !0,
                                 passive: !1
                             }))
                         }
                     }, {
                         key: "componentWillUnmount",
                         value: function () {
                             this.swiper && this.swiper.removeEventListener("touchmove", this._handleSwipeMove, h({
                                 capture: !0,
                                 passive: !1
                             }))
                         }
                     }, {
                         key: "_onMouseDown",
                         value: function (e) {
                             this.props.allowMouseEvents && (this.mouseDown = !0, document.addEventListener("mouseup", this._onMouseUp), document.addEventListener("mousemove", this._onMouseMove), this._handleSwipeStart(e))
                         }
                     }, {
                         key: "_onMouseMove",
                         value: function (e) {
                             this.mouseDown && this._handleSwipeMove(e)
                         }
                     }, {
                         key: "_onMouseUp",
                         value: function (e) {
                             this.mouseDown = !1, document.removeEventListener("mouseup", this._onMouseUp), document.removeEventListener("mousemove", this._onMouseMove), this._handleSwipeEnd(e)
                         }
                     }, {
                         key: "_handleSwipeStart",
                         value: function (e) {
                             var t = m(e),
                                 n = t.x,
                                 r = t.y;
                             this.moveStart = {
                                 x: n,
                                 y: r
                             }, this.props.onSwipeStart(e)
                         }
                     }, {
                         key: "_handleSwipeMove",
                         value: function (e) {
                             if (this.moveStart) {
                                 var t = m(e),
                                     n = t.x,
                                     r = t.y,
                                     i = n - this.moveStart.x,
                                     o = r - this.moveStart.y;
                                 this.moving = !0, this.props.onSwipeMove({
                                     x: i,
                                     y: o
                                 }, e) && e.cancelable && e.preventDefault(), this.movePosition = {
                                     deltaX: i,
                                     deltaY: o
                                 }
                             }
                         }
                     }, {
                         key: "_handleSwipeEnd",
                         value: function (e) {
                             this.props.onSwipeEnd(e);
                             var t = this.props.tolerance;
                             this.moving && this.movePosition && (this.movePosition.deltaX < -t ? this.props.onSwipeLeft(1, e) : this.movePosition.deltaX > t && this.props.onSwipeRight(1, e), this.movePosition.deltaY < -t ? this.props.onSwipeUp(1, e) : this.movePosition.deltaY > t && this.props.onSwipeDown(1, e)), this.moveStart = null, this.moving = !1, this.movePosition = null
                         }
                     }, {
                         key: "_setSwiperRef",
                         value: function (e) {
                             this.swiper = e, this.props.innerRef(e)
                         }
                     }, {
                         key: "render",
                         value: function () {
                             var e = this.props,
                                 t = (e.tagName, e.className),
                                 n = e.style,
                                 i = e.children,
                                 o = (e.allowMouseEvents, e.onSwipeUp, e.onSwipeDown, e.onSwipeLeft, e.onSwipeRight, e.onSwipeStart, e.onSwipeMove, e.onSwipeEnd, e.innerRef, e.tolerance, a(e, ["tagName", "className", "style", "children", "allowMouseEvents", "onSwipeUp", "onSwipeDown", "onSwipeLeft", "onSwipeRight", "onSwipeStart", "onSwipeMove", "onSwipeEnd", "innerRef", "tolerance"]));
                             return r.default.createElement(this.props.tagName, s({
                                 ref: this._setSwiperRef,
                                 onMouseDown: this._onMouseDown,
                                 onTouchStart: this._handleSwipeStart,
                                 onTouchEnd: this._handleSwipeEnd,
                                 className: t,
                                 style: n
                             }, o), i)
                         }
                     }]), t
                 }(t.Component);
                 v.displayName = "ReactSwipe", v.propTypes = {
                     tagName: i.default.string,
                     className: i.default.string,
                     style: i.default.object,
                     children: i.default.node,
                     allowMouseEvents: i.default.bool,
                     onSwipeUp: i.default.func,
                     onSwipeDown: i.default.func,
                     onSwipeLeft: i.default.func,
                     onSwipeRight: i.default.func,
                     onSwipeStart: i.default.func,
                     onSwipeMove: i.default.func,
                     onSwipeEnd: i.default.func,
                     innerRef: i.default.func,
                     tolerance: i.default.number.isRequired
                 }, v.defaultProps = {
                     tagName: "div",
                     allowMouseEvents: !1,
                     onSwipeUp: function () {},
                     onSwipeDown: function () {},
                     onSwipeLeft: function () {},
                     onSwipeRight: function () {},
                     onSwipeStart: function () {},
                     onSwipeMove: function () {},
                     onSwipeEnd: function () {},
                     innerRef: function () {},
                     tolerance: 0
                 }, e.default = v
             }) ? r.apply(t, i) : r) || (e.exports = o)
         },
         2751: function (e, t) {
             "use strict";
             Object.defineProperty(t, "__esModule", {
                 value: !0
             }), t.default = void 0;
             t.default = function (e, t, n) {
                 var r = 0 === e ? e : e + t;
                 return "translate3d" + ("(" + ("horizontal" === n ? [r, 0, 0] : [0, r, 0]).join(",") + ")")
             }
         },
         6632: function (e, t, n) {
             "use strict";
             Object.defineProperty(t, "__esModule", {
                 value: !0
             }), t.default = void 0;
             var r = function (e) {
                     if (e && e.__esModule) return e;
                     if (null === e || "object" !== d(e) && "function" !== typeof e) return {
                         default: e
                     };
                     var t = f();
                     if (t && t.has(e)) return t.get(e);
                     var n = {},
                         r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                     for (var i in e)
                         if (Object.prototype.hasOwnProperty.call(e, i)) {
                             var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                             o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                         } n.default = e, t && t.set(e, n);
                     return n
                 }(n(7294)),
                 i = p(n(3935)),
                 o = p(n(6995)),
                 s = p(n(5702)),
                 a = p(n(2751)),
                 u = p(n(5040)),
                 l = p(n(6513)),
                 c = p(n(885));

             function p(e) {
                 return e && e.__esModule ? e : {
                     default: e
                 }
             }

             function f() {
                 if ("function" !== typeof WeakMap) return null;
                 var e = new WeakMap;
                 return f = function () {
                     return e
                 }, e
             }

             function d(e) {
                 return (d = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                     return typeof e
                 } : function (e) {
                     return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                 })(e)
             }

             function h(e, t) {
                 var n = Object.keys(e);
                 if (Object.getOwnPropertySymbols) {
                     var r = Object.getOwnPropertySymbols(e);
                     t && (r = r.filter((function (t) {
                         return Object.getOwnPropertyDescriptor(e, t).enumerable
                     }))), n.push.apply(n, r)
                 }
                 return n
             }

             function m(e) {
                 for (var t = 1; t < arguments.length; t++) {
                     var n = null != arguments[t] ? arguments[t] : {};
                     t % 2 ? h(Object(n), !0).forEach((function (t) {
                         P(e, t, n[t])
                     })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function (t) {
                         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                     }))
                 }
                 return e
             }

             function v() {
                 return (v = Object.assign || function (e) {
                     for (var t = 1; t < arguments.length; t++) {
                         var n = arguments[t];
                         for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                     }
                     return e
                 }).apply(this, arguments)
             }

             function y(e, t) {
                 for (var n = 0; n < t.length; n++) {
                     var r = t[n];
                     r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                 }
             }

             function b(e, t) {
                 return (b = Object.setPrototypeOf || function (e, t) {
                     return e.__proto__ = t, e
                 })(e, t)
             }

             function w(e) {
                 var t = function () {
                     if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                     if (Reflect.construct.sham) return !1;
                     if ("function" === typeof Proxy) return !0;
                     try {
                         return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                     } catch (e) {
                         return !1
                     }
                 }();
                 return function () {
                     var n, r = O(e);
                     if (t) {
                         var i = O(this).constructor;
                         n = Reflect.construct(r, arguments, i)
                     } else n = r.apply(this, arguments);
                     return S(this, n)
                 }
             }

             function S(e, t) {
                 return !t || "object" !== d(t) && "function" !== typeof t ? g(e) : t
             }

             function g(e) {
                 if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                 return e
             }

             function O(e) {
                 return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                     return e.__proto__ || Object.getPrototypeOf(e)
                 })(e)
             }

             function P(e, t, n) {
                 return t in e ? Object.defineProperty(e, t, {
                     value: n,
                     enumerable: !0,
                     configurable: !0,
                     writable: !0
                 }) : e[t] = n, e
             }
             var R = function () {},
                 E = function (e) {
                     ! function (e, t) {
                         if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                         e.prototype = Object.create(t && t.prototype, {
                             constructor: {
                                 value: e,
                                 writable: !0,
                                 configurable: !0
                             }
                         }), t && b(e, t)
                     }(d, e);
                     var t, n, p, f = w(d);

                     function d(e) {
                         var t;
                         return function (e, t) {
                             if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                         }(this, d), P(g(t = f.call(this, e)), "thumbsRef", void 0), P(g(t), "carouselWrapperRef", void 0), P(g(t), "listRef", void 0), P(g(t), "itemsRef", void 0), P(g(t), "timer", void 0), P(g(t), "setThumbsRef", (function (e) {
                             t.thumbsRef = e
                         })), P(g(t), "setCarouselWrapperRef", (function (e) {
                             t.carouselWrapperRef = e
                         })), P(g(t), "setListRef", (function (e) {
                             t.listRef = e
                         })), P(g(t), "setItemsRef", (function (e, n) {
                             t.itemsRef || (t.itemsRef = []), t.itemsRef[n] = e
                         })), P(g(t), "autoPlay", (function () {
                             r.Children.count(t.props.children) <= 1 || (t.clearAutoPlay(), t.timer = setTimeout((function () {
                                 t.increment()
                             }), t.props.interval))
                         })), P(g(t), "clearAutoPlay", (function () {
                             t.timer && clearTimeout(t.timer)
                         })), P(g(t), "resetAutoPlay", (function () {
                             t.clearAutoPlay(), t.autoPlay()
                         })), P(g(t), "stopOnHover", (function () {
                             t.setState({
                                 isMouseEntered: !0
                             }, t.clearAutoPlay)
                         })), P(g(t), "startOnLeave", (function () {
                             t.setState({
                                 isMouseEntered: !1
                             }, t.autoPlay)
                         })), P(g(t), "isFocusWithinTheCarousel", (function () {
                             return !!t.carouselWrapperRef && !((0, l.default)().activeElement !== t.carouselWrapperRef && !t.carouselWrapperRef.contains((0, l.default)().activeElement))
                         })), P(g(t), "navigateWithKeyboard", (function (e) {
                             if (t.isFocusWithinTheCarousel()) {
                                 var n = "horizontal" === t.props.axis,
                                     r = n ? 37 : 38;
                                 (n ? 39 : 40) === e.keyCode ? t.increment() : r === e.keyCode && t.decrement()
                             }
                         })), P(g(t), "updateSizes", (function () {
                             if (t.state.initialized && t.itemsRef && 0 !== t.itemsRef.length) {
                                 var e = "horizontal" === t.props.axis,
                                     n = t.itemsRef[0];
                                 if (n) {
                                     var r = e ? n.clientWidth : n.clientHeight;
                                     t.setState({
                                         itemSize: r
                                     }), t.thumbsRef && t.thumbsRef.updateSizes()
                                 }
                             }
                         })), P(g(t), "setMountState", (function () {
                             t.setState({
                                 hasMount: !0
                             }), t.updateSizes()
                         })), P(g(t), "handleClickItem", (function (e, n) {
                             0 !== r.Children.count(t.props.children) && (t.state.cancelClick ? t.setState({
                                 cancelClick: !1
                             }) : (t.props.onClickItem(e, n), e !== t.state.selectedItem && t.setState({
                                 selectedItem: e
                             })))
                         })), P(g(t), "handleOnChange", (function (e, n) {
                             r.Children.count(t.props.children) <= 1 || t.props.onChange(e, n)
                         })), P(g(t), "handleClickThumb", (function (e, n) {
                             t.props.onClickThumb(e, n), t.moveTo(e)
                         })), P(g(t), "onSwipeStart", (function (e) {
                             t.setState({
                                 swiping: !0
                             }), t.props.onSwipeStart(e), t.clearAutoPlay()
                         })), P(g(t), "onSwipeEnd", (function (e) {
                             t.setState({
                                 swiping: !1,
                                 cancelClick: !1,
                                 swipeMovementStarted: !1
                             }), t.props.onSwipeEnd(e), t.autoPlay()
                         })), P(g(t), "onSwipeMove", (function (e, n) {
                             t.props.onSwipeMove(n);
                             var i = "horizontal" === t.props.axis,
                                 o = r.Children.count(t.props.children),
                                 s = t.getPosition(t.state.selectedItem),
                                 a = t.props.infiniteLoop ? t.getPosition(o - 1) - 100 : t.getPosition(o - 1),
                                 u = i ? e.x : e.y,
                                 l = u;
                             0 === s && u > 0 && (l = 0), s === a && u < 0 && (l = 0);
                             var c = s + 100 / (t.state.itemSize / l),
                                 p = Math.abs(u) > t.props.swipeScrollTolerance;
                             return t.props.infiniteLoop && p && (0 === t.state.selectedItem && c > -100 ? c -= 100 * o : t.state.selectedItem === o - 1 && c < 100 * -o && (c += 100 * o)), (!t.props.preventMovementUntilSwipeScrollTolerance || p || t.state.swipeMovementStarted) && (t.state.swipeMovementStarted || t.setState({
                                 swipeMovementStarted: !0
                             }), t.setPosition(c)), p && !t.state.cancelClick && t.setState({
                                 cancelClick: !0
                             }), p
                         })), P(g(t), "setPosition", (function (e, n) {
                             var r = i.default.findDOMNode(t.listRef);
                             r instanceof HTMLElement && (["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach((function (n) {
                                 r.style[n] = (0, a.default)(e, "%", t.props.axis)
                             })), n && r.offsetLeft)
                         })), P(g(t), "resetPosition", (function () {
                             var e = t.getPosition(t.state.selectedItem);
                             t.setPosition(e)
                         })), P(g(t), "decrement", (function () {
                             var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                                 n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                             t.moveTo(t.state.selectedItem - ("number" === typeof e ? e : 1), n)
                         })), P(g(t), "increment", (function () {
                             var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                                 n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                             t.moveTo(t.state.selectedItem + ("number" === typeof e ? e : 1), n)
                         })), P(g(t), "moveTo", (function (e, n) {
                             if ("number" === typeof e) {
                                 var i = r.Children.count(t.props.children) - 1,
                                     o = t.props.infiniteLoop && !n && (e < 0 || e > i),
                                     s = e;
                                 e < 0 && (e = t.props.infiniteLoop ? i : 0), e > i && (e = t.props.infiniteLoop ? 0 : i), o ? t.setState({
                                     swiping: !0
                                 }, (function () {
                                     s < 0 ? t.props.centerMode && t.props.centerSlidePercentage && "horizontal" === t.props.axis ? t.setPosition(-(i + 2) * t.props.centerSlidePercentage - (100 - t.props.centerSlidePercentage) / 2, !0) : t.setPosition(100 * -(i + 2), !0) : s > i && t.setPosition(0, !0), t.selectItem({
                                         selectedItem: e,
                                         swiping: !1
                                     })
                                 })) : t.selectItem({
                                     selectedItem: e
                                 }), t.state.autoPlay && !1 === t.state.isMouseEntered && t.resetAutoPlay()
                             }
                         })), P(g(t), "onClickNext", (function () {
                             t.increment(1, !1)
                         })), P(g(t), "onClickPrev", (function () {
                             t.decrement(1, !1)
                         })), P(g(t), "onSwipeForward", (function () {
                             t.increment(1, !0), t.props.emulateTouch && t.setState({
                                 cancelClick: !0
                             })
                         })), P(g(t), "onSwipeBackwards", (function () {
                             t.decrement(1, !0), t.props.emulateTouch && t.setState({
                                 cancelClick: !0
                             })
                         })), P(g(t), "changeItem", (function (e) {
                             return function (n) {
                                 (function (e) {
                                     return !!e && e.hasOwnProperty("key")
                                 })(n) && "Enter" !== n.key || t.moveTo(e)
                             }
                         })), P(g(t), "selectItem", (function (e, n) {
                             t.setState(e, n), t.handleOnChange(e.selectedItem, r.Children.toArray(t.props.children)[e.selectedItem])
                         })), P(g(t), "getInitialImage", (function () {
                             var e = t.props.selectedItem,
                                 n = t.itemsRef && t.itemsRef[e];
                             return (n && n.getElementsByTagName("img") || [])[0]
                         })), P(g(t), "getVariableItemHeight", (function (e) {
                             var n = t.itemsRef && t.itemsRef[e];
                             if (t.state.hasMount && n && n.children.length) {
                                 var r = n.children[0].getElementsByTagName("img") || [];
                                 if (r.length > 0) {
                                     var i = r[0];
                                     if (!i.complete) {
                                         i.addEventListener("load", (function e() {
                                             t.forceUpdate(), i.removeEventListener("load", e)
                                         }))
                                     }
                                 }
                                 var o = (r[0] || n.children[0]).clientHeight;
                                 return o > 0 ? o : null
                             }
                             return null
                         })), t.state = {
                             initialized: !1,
                             selectedItem: e.selectedItem,
                             hasMount: !1,
                             isMouseEntered: !1,
                             autoPlay: e.autoPlay,
                             swiping: !1,
                             swipeMovementStarted: !1,
                             cancelClick: !1,
                             itemSize: 1
                         }, t
                     }
                     return t = d, (n = [{
                         key: "componentDidMount",
                         value: function () {
                             this.props.children && this.setupCarousel()
                         }
                     }, {
                         key: "componentDidUpdate",
                         value: function (e, t) {
                             e.children || !this.props.children || this.state.initialized || this.setupCarousel(), !e.autoFocus && this.props.autoFocus && this.forceFocus(), t.swiping && !this.state.swiping && this.resetPosition(), e.selectedItem === this.props.selectedItem && e.centerMode === this.props.centerMode || (this.updateSizes(), this.moveTo(this.props.selectedItem)), e.autoPlay !== this.props.autoPlay && (this.props.autoPlay ? this.setupAutoPlay() : this.destroyAutoPlay(), this.setState({
                                 autoPlay: this.props.autoPlay
                             }))
                         }
                     }, {
                         key: "componentWillUnmount",
                         value: function () {
                             this.destroyCarousel()
                         }
                     }, {
                         key: "setupCarousel",
                         value: function () {
                             var e = this;
                             this.bindEvents(), this.state.autoPlay && r.Children.count(this.props.children) > 1 && this.setupAutoPlay(), this.props.autoFocus && this.forceFocus(), this.setState({
                                 initialized: !0
                             }, (function () {
                                 var t = e.getInitialImage();
                                 t && !t.complete ? t.addEventListener("load", e.setMountState) : e.setMountState()
                             }))
                         }
                     }, {
                         key: "destroyCarousel",
                         value: function () {
                             this.state.initialized && (this.unbindEvents(), this.destroyAutoPlay())
                         }
                     }, {
                         key: "setupAutoPlay",
                         value: function () {
                             this.autoPlay();
                             var e = this.carouselWrapperRef;
                             this.props.stopOnHover && e && (e.addEventListener("mouseenter", this.stopOnHover), e.addEventListener("mouseleave", this.startOnLeave))
                         }
                     }, {
                         key: "destroyAutoPlay",
                         value: function () {
                             this.clearAutoPlay();
                             var e = this.carouselWrapperRef;
                             this.props.stopOnHover && e && (e.removeEventListener("mouseenter", this.stopOnHover), e.removeEventListener("mouseleave", this.startOnLeave))
                         }
                     }, {
                         key: "bindEvents",
                         value: function () {
                             (0, c.default)().addEventListener("resize", this.updateSizes), (0, c.default)().addEventListener("DOMContentLoaded", this.updateSizes), this.props.useKeyboardArrows && (0, l.default)().addEventListener("keydown", this.navigateWithKeyboard)
                         }
                     }, {
                         key: "unbindEvents",
                         value: function () {
                             (0, c.default)().removeEventListener("resize", this.updateSizes), (0, c.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
                             var e = this.getInitialImage();
                             e && e.removeEventListener("load", this.setMountState), this.props.useKeyboardArrows && (0, l.default)().removeEventListener("keydown", this.navigateWithKeyboard)
                         }
                     }, {
                         key: "forceFocus",
                         value: function () {
                             var e;
                             null === (e = this.carouselWrapperRef) || void 0 === e || e.focus()
                         }
                     }, {
                         key: "getPosition",
                         value: function (e) {
                             if (this.props.infiniteLoop && ++e, 0 === e) return 0;
                             var t = r.Children.count(this.props.children);
                             if (this.props.centerMode && "horizontal" === this.props.axis) {
                                 var n = -e * this.props.centerSlidePercentage,
                                     i = t - 1;
                                 return e && (e !== i || this.props.infiniteLoop) ? n += (100 - this.props.centerSlidePercentage) / 2 : e === i && (n += 100 - this.props.centerSlidePercentage), n
                             }
                             return 100 * -e
                         }
                     }, {
                         key: "renderItems",
                         value: function (e) {
                             var t = this;
                             return this.props.children ? r.Children.map(this.props.children, (function (n, i) {
                                 var o = {
                                         ref: function (e) {
                                             return t.setItemsRef(e, i)
                                         },
                                         key: "itemKey" + i + (e ? "clone" : ""),
                                         className: s.default.ITEM(!0, i === t.state.selectedItem),
                                         onClick: t.handleClickItem.bind(t, i, n)
                                     },
                                     a = {};
                                 return t.props.centerMode && "horizontal" === t.props.axis && (a.style = {
                                     minWidth: t.props.centerSlidePercentage + "%"
                                 }), r.default.createElement("li", v({}, o, a), t.props.renderItem(n, {
                                     isSelected: i === t.state.selectedItem
                                 }))
                             })) : []
                         }
                     }, {
                         key: "renderControls",
                         value: function () {
                             var e = this,
                                 t = this.props,
                                 n = t.showIndicators,
                                 i = t.labels,
                                 o = t.renderIndicator,
                                 s = t.children;
                             return n ? r.default.createElement("ul", {
                                 className: "control-dots"
                             }, r.Children.map(s, (function (t, n) {
                                 return o && o(e.changeItem(n), n === e.state.selectedItem, n, i.item)
                             }))) : null
                         }
                     }, {
                         key: "renderStatus",
                         value: function () {
                             return this.props.showStatus ? r.default.createElement("p", {
                                 className: "carousel-status"
                             }, this.props.statusFormatter(this.state.selectedItem + 1, r.Children.count(this.props.children))) : null
                         }
                     }, {
                         key: "renderThumbs",
                         value: function () {
                             return this.props.showThumbs && this.props.children && 0 !== r.Children.count(this.props.children) ? r.default.createElement(u.default, {
                                 ref: this.setThumbsRef,
                                 onSelectItem: this.handleClickThumb,
                                 selectedItem: this.state.selectedItem,
                                 transitionTime: this.props.transitionTime,
                                 thumbWidth: this.props.thumbWidth,
                                 labels: this.props.labels
                             }, this.props.renderThumbs(this.props.children)) : null
                         }
                     }, {
                         key: "render",
                         value: function () {
                             var e = this;
                             if (!this.props.children || 0 === r.Children.count(this.props.children)) return null;
                             var t = this.props.swipeable && r.Children.count(this.props.children) > 1,
                                 n = "horizontal" === this.props.axis,
                                 i = this.props.showArrows && r.Children.count(this.props.children) > 1,
                                 u = i && (this.state.selectedItem > 0 || this.props.infiniteLoop) || !1,
                                 l = i && (this.state.selectedItem < r.Children.count(this.props.children) - 1 || this.props.infiniteLoop) || !1,
                                 c = {},
                                 p = this.getPosition(this.state.selectedItem),
                                 f = (0, a.default)(p, "%", this.props.axis),
                                 d = this.props.transitionTime + "ms";
                             c = {
                                 WebkitTransform: f,
                                 MozTransform: f,
                                 MsTransform: f,
                                 OTransform: f,
                                 transform: f,
                                 msTransform: f
                             }, this.state.swiping || (c = m(m({}, c), {}, {
                                 WebkitTransitionDuration: d,
                                 MozTransitionDuration: d,
                                 MsTransitionDuration: d,
                                 OTransitionDuration: d,
                                 transitionDuration: d,
                                 msTransitionDuration: d
                             }));
                             var h = this.renderItems(!0),
                                 y = h.shift(),
                                 b = h.pop(),
                                 w = {
                                     className: s.default.SLIDER(!0, this.state.swiping),
                                     onSwipeMove: this.onSwipeMove,
                                     onSwipeStart: this.onSwipeStart,
                                     onSwipeEnd: this.onSwipeEnd,
                                     style: c,
                                     tolerance: this.props.swipeScrollTolerance
                                 },
                                 S = {};
                             if (n) {
                                 if (w.onSwipeLeft = this.onSwipeForward, w.onSwipeRight = this.onSwipeBackwards, this.props.dynamicHeight) {
                                     var g = this.getVariableItemHeight(this.state.selectedItem);
                                     w.style.height = g || "auto", S.height = g || "auto"
                                 }
                             } else w.onSwipeUp = "natural" === this.props.verticalSwipe ? this.onSwipeBackwards : this.onSwipeForward, w.onSwipeDown = "natural" === this.props.verticalSwipe ? this.onSwipeForward : this.onSwipeBackwards, w.style.height = this.state.itemSize, S.height = this.state.itemSize;
                             return r.default.createElement("div", {
                                 className: s.default.ROOT(this.props.className),
                                 ref: this.setCarouselWrapperRef,
                                 tabIndex: 0
                             }, r.default.createElement("div", {
                                 className: s.default.CAROUSEL(!0),
                                 style: {
                                     width: this.props.width
                                 }
                             }, this.renderControls(), this.props.renderArrowPrev(this.onClickPrev, u, this.props.labels.leftArrow), r.default.createElement("div", {
                                 className: s.default.WRAPPER(!0, this.props.axis),
                                 style: S
                             }, t ? r.default.createElement(o.default, v({
                                 tagName: "ul",
                                 innerRef: this.setListRef
                             }, w, {
                                 allowMouseEvents: this.props.emulateTouch
                             }), this.props.infiniteLoop && b, this.renderItems(), this.props.infiniteLoop && y) : r.default.createElement("ul", {
                                 className: s.default.SLIDER(!0, this.state.swiping),
                                 ref: function (t) {
                                     return e.setListRef(t)
                                 },
                                 style: c
                             }, this.props.infiniteLoop && b, this.renderItems(), this.props.infiniteLoop && y)), this.props.renderArrowNext(this.onClickNext, l, this.props.labels.rightArrow), this.renderStatus()), this.renderThumbs())
                         }
                     }]) && y(t.prototype, n), p && y(t, p), d
                 }(r.default.Component);
             t.default = E, P(E, "displayName", "Carousel"), P(E, "defaultProps", {
                 axis: "horizontal",
                 centerSlidePercentage: 80,
                 interval: 3e3,
                 labels: {
                     leftArrow: "previous slide / item",
                     rightArrow: "next slide / item",
                     item: "slide item"
                 },
                 onClickItem: R,
                 onClickThumb: R,
                 onChange: R,
                 onSwipeStart: function () {},
                 onSwipeEnd: function () {},
                 onSwipeMove: function () {
                     return !1
                 },
                 preventMovementUntilSwipeScrollTolerance: !1,
                 renderArrowPrev: function (e, t, n) {
                     return r.default.createElement("button", {
                         type: "button",
                         "aria-label": n,
                         className: s.default.ARROW_PREV(!t),
                         onClick: e
                     })
                 },
                 renderArrowNext: function (e, t, n) {
                     return r.default.createElement("button", {
                         type: "button",
                         "aria-label": n,
                         className: s.default.ARROW_NEXT(!t),
                         onClick: e
                     })
                 },
                 renderIndicator: function (e, t, n, i) {
                     return r.default.createElement("li", {
                         className: s.default.DOT(t),
                         onClick: e,
                         onKeyDown: e,
                         value: n,
                         key: n,
                         role: "button",
                         tabIndex: 0,
                         "aria-label": "".concat(i, " ").concat(n + 1)
                     })
                 },
                 renderItem: function (e) {
                     return e
                 },
                 renderThumbs: function (e) {
                     var t = r.Children.map(e, (function (e) {
                         var t = e;
                         if ("img" !== e.type && (t = r.Children.toArray(e.props.children).find((function (e) {
                                 return "img" === e.type
                             }))),
                             t)
                             return t
                     }));
                     return 0 === t.filter((function (e) {
                         return e
                     })).length ? (console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"), []) : t
                 },
                 statusFormatter: function (e, t) {
                     return "".concat(e, " of ").concat(t)
                 },
                 selectedItem: 0,
                 showArrows: !0,
                 showIndicators: !0,
                 showStatus: !0,
                 showThumbs: false,
                 stopOnHover: !0,
                 swipeScrollTolerance: 5,
                 swipeable: !0,
                 transitionTime: 350,
                 verticalSwipe: "standard",
                 width: "100%"
             })
         },
         5040: function (e, t, n) {
             "use strict";
             Object.defineProperty(t, "__esModule", {
                 value: !0
             }), t.default = void 0;
             var r = function (e) {
                     if (e && e.__esModule) return e;
                     if (null === e || "object" !== p(e) && "function" !== typeof e) return {
                         default: e
                     };
                     var t = c();
                     if (t && t.has(e)) return t.get(e);
                     var n = {},
                         r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                     for (var i in e)
                         if (Object.prototype.hasOwnProperty.call(e, i)) {
                             var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                             o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                         } n.default = e, t && t.set(e, n);
                     return n
                 }(n(7294)),
                 i = l(n(5702)),
                 o = n(4528),
                 s = l(n(2751)),
                 a = l(n(6995)),
                 u = l(n(885));

             function l(e) {
                 return e && e.__esModule ? e : {
                     default: e
                 }
             }

             function c() {
                 if ("function" !== typeof WeakMap) return null;
                 var e = new WeakMap;
                 return c = function () {
                     return e
                 }, e
             }

             function p(e) {
                 return (p = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                     return typeof e
                 } : function (e) {
                     return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                 })(e)
             }

             function f() {
                 return (f = Object.assign || function (e) {
                     for (var t = 1; t < arguments.length; t++) {
                         var n = arguments[t];
                         for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                     }
                     return e
                 }).apply(this, arguments)
             }

             function d(e, t) {
                 for (var n = 0; n < t.length; n++) {
                     var r = t[n];
                     r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                 }
             }

             function h(e, t) {
                 return (h = Object.setPrototypeOf || function (e, t) {
                     return e.__proto__ = t, e
                 })(e, t)
             }

             function m(e) {
                 var t = function () {
                     if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                     if (Reflect.construct.sham) return !1;
                     if ("function" === typeof Proxy) return !0;
                     try {
                         return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                     } catch (e) {
                         return !1
                     }
                 }();
                 return function () {
                     var n, r = b(e);
                     if (t) {
                         var i = b(this).constructor;
                         n = Reflect.construct(r, arguments, i)
                     } else n = r.apply(this, arguments);
                     return v(this, n)
                 }
             }

             function v(e, t) {
                 return !t || "object" !== p(t) && "function" !== typeof t ? y(e) : t
             }

             function y(e) {
                 if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                 return e
             }

             function b(e) {
                 return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                     return e.__proto__ || Object.getPrototypeOf(e)
                 })(e)
             }

             function w(e, t, n) {
                 return t in e ? Object.defineProperty(e, t, {
                     value: n,
                     enumerable: !0,
                     configurable: !0,
                     writable: !0
                 }) : e[t] = n, e
             }
             var S = function (e) {
                 ! function (e, t) {
                     if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                     e.prototype = Object.create(t && t.prototype, {
                         constructor: {
                             value: e,
                             writable: !0,
                             configurable: !0
                         }
                     }), t && h(e, t)
                 }(p, e);
                 var t, n, l, c = m(p);

                 function p(e) {
                     var t;
                     return function (e, t) {
                         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                     }(this, p), w(y(t = c.call(this, e)), "itemsWrapperRef", void 0), w(y(t), "itemsListRef", void 0), w(y(t), "thumbsRef", void 0), w(y(t), "setItemsWrapperRef", (function (e) {
                         t.itemsWrapperRef = e
                     })), w(y(t), "setItemsListRef", (function (e) {
                         t.itemsListRef = e
                     })), w(y(t), "setThumbsRef", (function (e, n) {
                         t.thumbsRef || (t.thumbsRef = []), t.thumbsRef[n] = e
                     })), w(y(t), "updateSizes", (function () {
                         if (t.props.children && t.itemsWrapperRef && t.thumbsRef) {
                             var e = r.Children.count(t.props.children),
                                 n = t.itemsWrapperRef.clientWidth,
                                 i = t.props.thumbWidth ? t.props.thumbWidth : (0, o.outerWidth)(t.thumbsRef[0]),
                                 s = Math.floor(n / i),
                                 a = e - s,
                                 u = s < e;
                             t.setState((function (e, n) {
                                 return {
                                     itemSize: i,
                                     visibleItems: s,
                                     firstItem: u ? t.getFirstItem(n.selectedItem) : 0,
                                     lastPosition: a,
                                     showArrows: u
                                 }
                             }))
                         }
                     })), w(y(t), "handleClickItem", (function (e, n, r) {
                         if (! function (e) {
                                 return e.hasOwnProperty("key")
                             }(r) || "Enter" === r.key) {
                             var i = t.props.onSelectItem;
                             "function" === typeof i && i(e, n)
                         }
                     })), w(y(t), "onSwipeStart", (function () {
                         t.setState({
                             swiping: !0
                         })
                     })), w(y(t), "onSwipeEnd", (function () {
                         t.setState({
                             swiping: !1
                         })
                     })), w(y(t), "onSwipeMove", (function (e) {
                         var n = e.x;
                         if (!t.state.itemSize || !t.itemsWrapperRef) return !1;
                         var r = -t.state.firstItem * t.state.itemSize;
                         0 === r && n > 0 && (n = 0), r === -t.state.visibleItems * t.state.itemSize && n < 0 && (n = 0);
                         var i = r + 100 / (t.itemsWrapperRef.clientWidth / n);
                         return t.itemsListRef && ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach((function (e) {
                             t.itemsListRef.style[e] = (0, s.default)(i, "%", t.props.axis)
                         })), !0
                     })), w(y(t), "slideRight", (function (e) {
                         t.moveTo(t.state.firstItem - ("number" === typeof e ? e : 1))
                     })), w(y(t), "slideLeft", (function (e) {
                         t.moveTo(t.state.firstItem + ("number" === typeof e ? e : 1))
                     })), w(y(t), "moveTo", (function (e) {
                         e = (e = e < 0 ? 0 : e) >= t.state.lastPosition ? t.state.lastPosition : e, t.setState({
                             firstItem: e
                         })
                     })), t.state = {
                         selectedItem: e.selectedItem,
                         swiping: !1,
                         showArrows: !1,
                         firstItem: 0,
                         visibleItems: 0,
                         lastPosition: 0
                     }, t
                 }
                 return t = p, (n = [{
                     key: "componentDidMount",
                     value: function () {
                         this.setupThumbs()
                     }
                 }, {
                     key: "UNSAFE_componentWillReceiveProps",
                     value: function (e) {
                         e.selectedItem !== this.state.selectedItem && this.setState({
                             selectedItem: e.selectedItem,
                             firstItem: this.getFirstItem(e.selectedItem)
                         })
                     }
                 }, {
                     key: "componentDidUpdate",
                     value: function (e) {
                         this.props.children !== e.children && this.updateSizes()
                     }
                 }, {
                     key: "componentWillUnmount",
                     value: function () {
                         this.destroyThumbs()
                     }
                 }, {
                     key: "setupThumbs",
                     value: function () {
                         (0, u.default)().addEventListener("resize", this.updateSizes), (0, u.default)().addEventListener("DOMContentLoaded", this.updateSizes), this.updateSizes()
                     }
                 }, {
                     key: "destroyThumbs",
                     value: function () {
                         (0, u.default)().removeEventListener("resize", this.updateSizes), (0, u.default)().removeEventListener("DOMContentLoaded", this.updateSizes)
                     }
                 }, {
                     key: "getFirstItem",
                     value: function (e) {
                         var t = e;
                         return e >= this.state.lastPosition && (t = this.state.lastPosition), e < this.state.firstItem + this.state.visibleItems && (t = this.state.firstItem), e < this.state.firstItem && (t = e), t
                     }
                 }, {
                     key: "renderItems",
                     value: function () {
                         var e = this;
                         return this.props.children.map((function (t, n) {
                             var o = i.default.ITEM(!1, n === e.state.selectedItem),
                                 s = {
                                     key: n,
                                     ref: function (t) {
                                         return e.setThumbsRef(t, n)
                                     },
                                     className: o,
                                     onClick: e.handleClickItem.bind(e, n, e.props.children[n]),
                                     onKeyDown: e.handleClickItem.bind(e, n, e.props.children[n]),
                                     "aria-label": "".concat(e.props.labels.item, " ").concat(n + 1),
                                     style: {
                                         width: e.props.thumbWidth
                                     }
                                 };
                             return r.default.createElement("li", f({}, s, {
                                 role: "button",
                                 tabIndex: 0
                             }), t)
                         }))
                     }
                 }, {
                     key: "render",
                     value: function () {
                         var e = this;
                         if (!this.props.children) return null;
                         var t, n = r.Children.count(this.props.children) > 1,
                             o = this.state.showArrows && this.state.firstItem > 0,
                             u = this.state.showArrows && this.state.firstItem < this.state.lastPosition,
                             l = -this.state.firstItem * (this.state.itemSize || 0),
                             c = (0, s.default)(l, "px", this.props.axis),
                             p = this.props.transitionTime + "ms";
                         return t = {
                             WebkitTransform: c,
                             MozTransform: c,
                             MsTransform: c,
                             OTransform: c,
                             transform: c,
                             msTransform: c,
                             WebkitTransitionDuration: p,
                             MozTransitionDuration: p,
                             MsTransitionDuration: p,
                             OTransitionDuration: p,
                             transitionDuration: p,
                             msTransitionDuration: p
                         }, r.default.createElement("div", {
                             className: i.default.CAROUSEL(!1)
                         }, r.default.createElement("div", {
                             className: i.default.WRAPPER(!1),
                             ref: this.setItemsWrapperRef
                         }, r.default.createElement("button", {
                             type: "button",
                             className: i.default.ARROW_PREV(!o),
                             onClick: function () {
                                 return e.slideRight()
                             },
                             "aria-label": this.props.labels.leftArrow
                         }), n ? r.default.createElement(a.default, {
                             tagName: "ul",
                             className: i.default.SLIDER(!1, this.state.swiping),
                             onSwipeLeft: this.slideLeft,
                             onSwipeRight: this.slideRight,
                             onSwipeMove: this.onSwipeMove,
                             onSwipeStart: this.onSwipeStart,
                             onSwipeEnd: this.onSwipeEnd,
                             style: t,
                             innerRef: this.setItemsListRef
                         }, this.renderItems()) : r.default.createElement("ul", {
                             className: i.default.SLIDER(!1, this.state.swiping),
                             ref: function (t) {
                                 return e.setItemsListRef(t)
                             },
                             style: t
                         }, this.renderItems()), r.default.createElement("button", {
                             type: "button",
                             className: i.default.ARROW_NEXT(!u),
                             onClick: function () {
                                 return e.slideLeft()
                             },
                             "aria-label": this.props.labels.rightArrow
                         })))
                     }
                 }]) && d(t.prototype, n), l && d(t, l), p
             }(r.Component);
             t.default = S, w(S, "displayName", "Thumbs"), w(S, "defaultProps", {
                 axis: "horizontal",
                 labels: {
                     leftArrow: "previous slide / item",
                     rightArrow: "next slide / item",
                     item: "slide item"
                 },
                 selectedItem: 0,
                 thumbWidth: 80,
                 transitionTime: 350
             })
         },
         5702: function (e, t, n) {
             "use strict";
             Object.defineProperty(t, "__esModule", {
                 value: !0
             }), t.default = void 0;
             var r, i = (r = n(4184)) && r.__esModule ? r : {
                 default: r
             };
             var o = {
                 ROOT: function (e) {
                     return (0, i.default)(function (e, t, n) {
                         return t in e ? Object.defineProperty(e, t, {
                             value: n,
                             enumerable: !0,
                             configurable: !0,
                             writable: !0
                         }) : e[t] = n, e
                     }({
                         "carousel-root": !0
                     }, e || "", !!e))
                 },
                 CAROUSEL: function (e) {
                     return (0, i.default)({
                         carousel: !0,
                         "carousel-slider": e
                     })
                 },
                 WRAPPER: function (e, t) {
                     return (0, i.default)({
                         "thumbs-wrapper": !e,
                         "slider-wrapper": e,
                         "axis-horizontal": "horizontal" === t,
                         "axis-vertical": "horizontal" !== t
                     })
                 },
                 SLIDER: function (e, t) {
                     return (0, i.default)({
                         thumbs: !e,
                         slider: e,
                         animated: !t
                     })
                 },
                 ITEM: function (e, t, n) {
                     return (0, i.default)({
                         thumb: !e,
                         slide: e,
                         selected: t,
                         previous: n
                     })
                 },
                 ARROW_PREV: function (e) {
                     return (0, i.default)({
                         "control-arrow control-prev": !0,
                         "control-disabled": e
                     })
                 },
                 ARROW_NEXT: function (e) {
                     return (0, i.default)({
                         "control-arrow control-next": !0,
                         "control-disabled": e
                     })
                 },
                 DOT: function (e) {
                     return (0, i.default)({
                         dot: !0,
                         selected: e
                     })
                 }
             };
             t.default = o
         },
         4528: function (e, t) {
             "use strict";
             Object.defineProperty(t, "__esModule", {
                 value: !0
             }), t.outerWidth = void 0;
             t.outerWidth = function (e) {
                 var t = e.offsetWidth,
                     n = getComputedStyle(e);
                 return t += parseInt(n.marginLeft) + parseInt(n.marginRight)
             }
         },
         615: function (e, t, n) {
             "use strict";
             Object.defineProperty(t, "lr", {
                 enumerable: !0,
                 get: function () {
                     return r.default
                 }
             });
             var r = o(n(6632)),
                 i = o(n(5040));

             function o(e) {
                 return e && e.__esModule ? e : {
                     default: e
                 }
             }
         },
         6513: function (e, t) {
             "use strict";
             Object.defineProperty(t, "__esModule", {
                 value: !0
             }), t.default = void 0;
             t.default = function () {
                 return document
             }
         },
         885: function (e, t) {
             "use strict";
             Object.defineProperty(t, "__esModule", {
                 value: !0
             }), t.default = void 0;
             t.default = function () {
                 return window
             }
         }
     }
 ]);