/* empty css             */ (function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        i(r);
    new MutationObserver((r) => {
        for (const s of r)
            if (s.type === "childList")
                for (const o of s.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function t(r) {
        const s = {};
        return (
            r.integrity && (s.integrity = r.integrity),
            r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
            r.crossOrigin === "use-credentials"
                ? (s.credentials = "include")
                : r.crossOrigin === "anonymous"
                ? (s.credentials = "omit")
                : (s.credentials = "same-origin"),
            s
        );
    }
    function i(r) {
        if (r.ep) return;
        r.ep = !0;
        const s = t(r);
        fetch(r.href, s);
    }
})();
function Vu(n) {
    return n &&
        n.__esModule &&
        Object.prototype.hasOwnProperty.call(n, "default")
        ? n.default
        : n;
}
var xa = { exports: {} };
function ba() {}
ba.prototype = {
    on: function (n, e, t) {
        var i = this.e || (this.e = {});
        return (i[n] || (i[n] = [])).push({ fn: e, ctx: t }), this;
    },
    once: function (n, e, t) {
        var i = this;
        function r() {
            i.off(n, r), e.apply(t, arguments);
        }
        return (r._ = e), this.on(n, r, t);
    },
    emit: function (n) {
        var e = [].slice.call(arguments, 1),
            t = ((this.e || (this.e = {}))[n] || []).slice(),
            i = 0,
            r = t.length;
        for (i; i < r; i++) t[i].fn.apply(t[i].ctx, e);
        return this;
    },
    off: function (n, e) {
        var t = this.e || (this.e = {}),
            i = t[n],
            r = [];
        if (i && e)
            for (var s = 0, o = i.length; s < o; s++)
                i[s].fn !== e && i[s].fn._ !== e && r.push(i[s]);
        return r.length ? (t[n] = r) : delete t[n], this;
    },
};
xa.exports = ba;
xa.exports.TinyEmitter = ba;
var Gu = xa.exports;
const Yu = Vu(Gu);
function Se(n, e) {
    return () => {
        const t = [...document.querySelectorAll(n)];
        t.forEach((i, r) => {
            e(i, r, t);
        });
    };
}
const Hu = Se(".js-cart-trigger", (n) => {
    const e = document.querySelector(".js-header-cart");
    n.addEventListener("click", () => {
        n.classList.toggle("is-active"),
            (e.style.display = n.classList.contains("is-active")
                ? "block"
                : "none");
        const { height: t } = e.getBoundingClientRect();
        document.body.style.setProperty("--panel-height", `${t}px`);
    });
});
function Ri(n) {
    if (n === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return n;
}
function Zl(n, e) {
    (n.prototype = Object.create(e.prototype)),
        (n.prototype.constructor = n),
        (n.__proto__ = e);
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Qt = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: { lineHeight: "" },
    },
    ln = { duration: 0.5, overwrite: !1, delay: 0 },
    Ta,
    wt,
    Oe,
    ai = 1e8,
    Ce = 1 / ai,
    Vo = Math.PI * 2,
    Xu = Vo / 4,
    qu = 0,
    Ql = Math.sqrt,
    ju = Math.cos,
    Wu = Math.sin,
    ot = function (e) {
        return typeof e == "string";
    },
    Ve = function (e) {
        return typeof e == "function";
    },
    Yi = function (e) {
        return typeof e == "number";
    },
    Sa = function (e) {
        return typeof e > "u";
    },
    Ai = function (e) {
        return typeof e == "object";
    },
    It = function (e) {
        return e !== !1;
    },
    Ea = function () {
        return typeof window < "u";
    },
    ds = function (e) {
        return Ve(e) || ot(e);
    },
    Jl =
        (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
        function () {},
    xt = Array.isArray,
    Go = /(?:-?\.?\d|\.)+/gi,
    ec = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Ur = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    uo = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    tc = /[+-]=-?[.\d]+/,
    ic = /[^,'"\[\]\s]+/gi,
    Uu = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Re,
    Ci,
    Yo,
    Ca,
    Jt = {},
    Vs = {},
    rc,
    nc = function (e) {
        return (Vs = Ir(e, Jt)) && Ft;
    },
    Pa = function (e, t) {
        return console.warn(
            "Invalid property",
            e,
            "set to",
            t,
            "Missing plugin? gsap.registerPlugin()"
        );
    },
    Kn = function (e, t) {
        return !t && console.warn(e);
    },
    sc = function (e, t) {
        return (e && (Jt[e] = t) && Vs && (Vs[e] = t)) || Jt;
    },
    Zn = function () {
        return 0;
    },
    Ku = { suppressEvents: !0, isStart: !0, kill: !1 },
    Ps = { suppressEvents: !0, kill: !1 },
    Zu = { suppressEvents: !0 },
    Ma = {},
    sr = [],
    Ho = {},
    oc,
    qt = {},
    fo = {},
    el = 30,
    Ms = [],
    ka = "",
    Oa = function (e) {
        var t = e[0],
            i,
            r;
        if ((Ai(t) || Ve(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
            for (r = Ms.length; r-- && !Ms[r].targetTest(t); );
            i = Ms[r];
        }
        for (r = e.length; r--; )
            (e[r] && (e[r]._gsap || (e[r]._gsap = new Oc(e[r], i)))) ||
                e.splice(r, 1);
        return e;
    },
    Sr = function (e) {
        return e._gsap || Oa(li(e))[0]._gsap;
    },
    ac = function (e, t, i) {
        return (i = e[t]) && Ve(i)
            ? e[t]()
            : (Sa(i) && e.getAttribute && e.getAttribute(t)) || i;
    },
    Rt = function (e, t) {
        return (e = e.split(",")).forEach(t) || e;
    },
    He = function (e) {
        return Math.round(e * 1e5) / 1e5 || 0;
    },
    st = function (e) {
        return Math.round(e * 1e7) / 1e7 || 0;
    },
    Qr = function (e, t) {
        var i = t.charAt(0),
            r = parseFloat(t.substr(2));
        return (
            (e = parseFloat(e)),
            i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
        );
    },
    Qu = function (e, t) {
        for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; );
        return r < i;
    },
    Gs = function () {
        var e = sr.length,
            t = sr.slice(0),
            i,
            r;
        for (Ho = {}, sr.length = 0, i = 0; i < e; i++)
            (r = t[i]),
                r &&
                    r._lazy &&
                    (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
    },
    lc = function (e, t, i, r) {
        sr.length && !wt && Gs(),
            e.render(t, i, wt && t < 0 && (e._initted || e._startAt)),
            sr.length && !wt && Gs();
    },
    cc = function (e) {
        var t = parseFloat(e);
        return (t || t === 0) && (e + "").match(ic).length < 2
            ? t
            : ot(e)
            ? e.trim()
            : e;
    },
    uc = function (e) {
        return e;
    },
    ui = function (e, t) {
        for (var i in t) i in e || (e[i] = t[i]);
        return e;
    },
    Ju = function (e) {
        return function (t, i) {
            for (var r in i)
                r in t ||
                    (r === "duration" && e) ||
                    r === "ease" ||
                    (t[r] = i[r]);
        };
    },
    Ir = function (e, t) {
        for (var i in t) e[i] = t[i];
        return e;
    },
    tl = function n(e, t) {
        for (var i in t)
            i !== "__proto__" &&
                i !== "constructor" &&
                i !== "prototype" &&
                (e[i] = Ai(t[i]) ? n(e[i] || (e[i] = {}), t[i]) : t[i]);
        return e;
    },
    Ys = function (e, t) {
        var i = {},
            r;
        for (r in e) r in t || (i[r] = e[r]);
        return i;
    },
    Rn = function (e) {
        var t = e.parent || Re,
            i = e.keyframes ? Ju(xt(e.keyframes)) : ui;
        if (It(e.inherit))
            for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
        return e;
    },
    ed = function (e, t) {
        for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i]; );
        return i < 0;
    },
    dc = function (e, t, i, r, s) {
        var o = e[r],
            a;
        if (s) for (a = t[s]; o && o[s] > a; ) o = o._prev;
        return (
            o
                ? ((t._next = o._next), (o._next = t))
                : ((t._next = e[i]), (e[i] = t)),
            t._next ? (t._next._prev = t) : (e[r] = t),
            (t._prev = o),
            (t.parent = t._dp = e),
            t
        );
    },
    no = function (e, t, i, r) {
        i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
        var s = t._prev,
            o = t._next;
        s ? (s._next = o) : e[i] === t && (e[i] = o),
            o ? (o._prev = s) : e[r] === t && (e[r] = s),
            (t._next = t._prev = t.parent = null);
    },
    lr = function (e, t) {
        e.parent &&
            (!t || e.parent.autoRemoveChildren) &&
            e.parent.remove &&
            e.parent.remove(e),
            (e._act = 0);
    },
    Er = function (e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
            for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
        return e;
    },
    td = function (e) {
        for (var t = e.parent; t && t.parent; )
            (t._dirty = 1), t.totalDuration(), (t = t.parent);
        return e;
    },
    Xo = function (e, t, i, r) {
        return (
            e._startAt &&
            (wt
                ? e._startAt.revert(Ps)
                : (e.vars.immediateRender && !e.vars.autoRevert) ||
                  e._startAt.render(t, !0, r))
        );
    },
    id = function n(e) {
        return !e || (e._ts && n(e.parent));
    },
    il = function (e) {
        return e._repeat ? cn(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    cn = function (e, t) {
        var i = Math.floor((e /= t));
        return e && i === e ? i - 1 : i;
    },
    Hs = function (e, t) {
        return (
            (e - t._start) * t._ts +
            (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
        );
    },
    so = function (e) {
        return (e._end = st(
            e._start + (e._tDur / Math.abs(e._ts || e._rts || Ce) || 0)
        ));
    },
    oo = function (e, t) {
        var i = e._dp;
        return (
            i &&
                i.smoothChildTiming &&
                e._ts &&
                ((e._start = st(
                    i._time -
                        (e._ts > 0
                            ? t / e._ts
                            : ((e._dirty ? e.totalDuration() : e._tDur) - t) /
                              -e._ts)
                )),
                so(e),
                i._dirty || Er(i, e)),
            e
        );
    },
    fc = function (e, t) {
        var i;
        if (
            ((t._time ||
                (!t._dur && t._initted) ||
                (t._start < e._time && (t._dur || !t.add))) &&
                ((i = Hs(e.rawTime(), t)),
                (!t._dur || ls(0, t.totalDuration(), i) - t._tTime > Ce) &&
                    t.render(i, !0)),
            Er(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
        ) {
            if (e._dur < e.duration())
                for (i = e; i._dp; )
                    i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
            e._zTime = -Ce;
        }
    },
    Mi = function (e, t, i, r) {
        return (
            t.parent && lr(t),
            (t._start = st(
                (Yi(i) ? i : i || e !== Re ? ni(e, i, t) : e._time) + t._delay
            )),
            (t._end = st(
                t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
            )),
            dc(e, t, "_first", "_last", e._sort ? "_start" : 0),
            qo(t) || (e._recent = t),
            r || fc(e, t),
            e._ts < 0 && oo(e, e._tTime),
            e
        );
    },
    pc = function (e, t) {
        return (
            (Jt.ScrollTrigger || Pa("scrollTrigger", t)) &&
            Jt.ScrollTrigger.create(t, e)
        );
    },
    hc = function (e, t, i, r, s) {
        if ((La(e, t, s), !e._initted)) return 1;
        if (
            !i &&
            e._pt &&
            !wt &&
            ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
            oc !== Wt.frame
        )
            return sr.push(e), (e._lazy = [s, r]), 1;
    },
    rd = function n(e) {
        var t = e.parent;
        return (
            t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || n(t))
        );
    },
    qo = function (e) {
        var t = e.data;
        return t === "isFromStart" || t === "isStart";
    },
    nd = function (e, t, i, r) {
        var s = e.ratio,
            o =
                t < 0 ||
                (!t &&
                    ((!e._start && rd(e) && !(!e._initted && qo(e))) ||
                        ((e._ts < 0 || e._dp._ts < 0) && !qo(e))))
                    ? 0
                    : 1,
            a = e._rDelay,
            l = 0,
            u,
            d,
            f;
        if (
            (a &&
                e._repeat &&
                ((l = ls(0, e._tDur, t)),
                (d = cn(l, a)),
                e._yoyo && d & 1 && (o = 1 - o),
                d !== cn(e._tTime, a) &&
                    ((s = 1 - o),
                    e.vars.repeatRefresh && e._initted && e.invalidate())),
            o !== s || wt || r || e._zTime === Ce || (!t && e._zTime))
        ) {
            if (!e._initted && hc(e, t, r, i, l)) return;
            for (
                f = e._zTime,
                    e._zTime = t || (i ? Ce : 0),
                    i || (i = t && !f),
                    e.ratio = o,
                    e._from && (o = 1 - o),
                    e._time = 0,
                    e._tTime = l,
                    u = e._pt;
                u;

            )
                u.r(o, u.d), (u = u._next);
            t < 0 && Xo(e, t, i, !0),
                e._onUpdate && !i && Zt(e, "onUpdate"),
                l && e._repeat && !i && e.parent && Zt(e, "onRepeat"),
                (t >= e._tDur || t < 0) &&
                    e.ratio === o &&
                    (o && lr(e, 1),
                    !i &&
                        !wt &&
                        (Zt(e, o ? "onComplete" : "onReverseComplete", !0),
                        e._prom && e._prom()));
        } else e._zTime || (e._zTime = t);
    },
    sd = function (e, t, i) {
        var r;
        if (i > t)
            for (r = e._first; r && r._start <= i; ) {
                if (r.data === "isPause" && r._start > t) return r;
                r = r._next;
            }
        else
            for (r = e._last; r && r._start >= i; ) {
                if (r.data === "isPause" && r._start < t) return r;
                r = r._prev;
            }
    },
    un = function (e, t, i, r) {
        var s = e._repeat,
            o = st(t) || 0,
            a = e._tTime / e._tDur;
        return (
            a && !r && (e._time *= o / e._dur),
            (e._dur = o),
            (e._tDur = s
                ? s < 0
                    ? 1e10
                    : st(o * (s + 1) + e._rDelay * s)
                : o),
            a > 0 && !r && oo(e, (e._tTime = e._tDur * a)),
            e.parent && so(e),
            i || Er(e.parent, e),
            e
        );
    },
    rl = function (e) {
        return e instanceof Mt ? Er(e) : un(e, e._dur);
    },
    od = { _start: 0, endTime: Zn, totalDuration: Zn },
    ni = function n(e, t, i) {
        var r = e.labels,
            s = e._recent || od,
            o = e.duration() >= ai ? s.endTime(!1) : e._dur,
            a,
            l,
            u;
        return ot(t) && (isNaN(t) || t in r)
            ? ((l = t.charAt(0)),
              (u = t.substr(-1) === "%"),
              (a = t.indexOf("=")),
              l === "<" || l === ">"
                  ? (a >= 0 && (t = t.replace(/=/, "")),
                    (l === "<" ? s._start : s.endTime(s._repeat >= 0)) +
                        (parseFloat(t.substr(1)) || 0) *
                            (u ? (a < 0 ? s : i).totalDuration() / 100 : 1))
                  : a < 0
                  ? (t in r || (r[t] = o), r[t])
                  : ((l = parseFloat(t.charAt(a - 1) + t.substr(a + 1))),
                    u &&
                        i &&
                        (l = (l / 100) * (xt(i) ? i[0] : i).totalDuration()),
                    a > 1 ? n(e, t.substr(0, a - 1), i) + l : o + l))
            : t == null
            ? o
            : +t;
    },
    zn = function (e, t, i) {
        var r = Yi(t[1]),
            s = (r ? 2 : 1) + (e < 2 ? 0 : 1),
            o = t[s],
            a,
            l;
        if ((r && (o.duration = t[1]), (o.parent = i), e)) {
            for (a = o, l = i; l && !("immediateRender" in a); )
                (a = l.vars.defaults || {}),
                    (l = It(l.vars.inherit) && l.parent);
            (o.immediateRender = It(a.immediateRender)),
                e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
        }
        return new Ue(t[0], o, t[s + 1]);
    },
    dr = function (e, t) {
        return e || e === 0 ? t(e) : t;
    },
    ls = function (e, t, i) {
        return i < e ? e : i > t ? t : i;
    },
    yt = function (e, t) {
        return !ot(e) || !(t = Uu.exec(e)) ? "" : t[1];
    },
    ad = function (e, t, i) {
        return dr(i, function (r) {
            return ls(e, t, r);
        });
    },
    jo = [].slice,
    gc = function (e, t) {
        return (
            e &&
            Ai(e) &&
            "length" in e &&
            ((!t && !e.length) || (e.length - 1 in e && Ai(e[0]))) &&
            !e.nodeType &&
            e !== Ci
        );
    },
    ld = function (e, t, i) {
        return (
            i === void 0 && (i = []),
            e.forEach(function (r) {
                var s;
                return (ot(r) && !t) || gc(r, 1)
                    ? (s = i).push.apply(s, li(r))
                    : i.push(r);
            }) || i
        );
    },
    li = function (e, t, i) {
        return Oe && !t && Oe.selector
            ? Oe.selector(e)
            : ot(e) && !i && (Yo || !dn())
            ? jo.call((t || Ca).querySelectorAll(e), 0)
            : xt(e)
            ? ld(e, i)
            : gc(e)
            ? jo.call(e, 0)
            : e
            ? [e]
            : [];
    },
    Wo = function (e) {
        return (
            (e = li(e)[0] || Kn("Invalid scope") || {}),
            function (t) {
                var i = e.current || e.nativeElement || e;
                return li(
                    t,
                    i.querySelectorAll
                        ? i
                        : i === e
                        ? Kn("Invalid scope") || Ca.createElement("div")
                        : e
                );
            }
        );
    },
    mc = function (e) {
        return e.sort(function () {
            return 0.5 - Math.random();
        });
    },
    _c = function (e) {
        if (Ve(e)) return e;
        var t = Ai(e) ? e : { each: e },
            i = Cr(t.ease),
            r = t.from || 0,
            s = parseFloat(t.base) || 0,
            o = {},
            a = r > 0 && r < 1,
            l = isNaN(r) || a,
            u = t.axis,
            d = r,
            f = r;
        return (
            ot(r)
                ? (d = f = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
                : !a && l && ((d = r[0]), (f = r[1])),
            function (p, c, g) {
                var h = (g || t).length,
                    y = o[h],
                    m,
                    _,
                    v,
                    w,
                    x,
                    O,
                    k,
                    E,
                    I;
                if (!y) {
                    if (
                        ((I = t.grid === "auto" ? 0 : (t.grid || [1, ai])[1]),
                        !I)
                    ) {
                        for (
                            k = -ai;
                            k < (k = g[I++].getBoundingClientRect().left) &&
                            I < h;

                        );
                        I < h && I--;
                    }
                    for (
                        y = o[h] = [],
                            m = l ? Math.min(I, h) * d - 0.5 : r % I,
                            _ =
                                I === ai
                                    ? 0
                                    : l
                                    ? (h * f) / I - 0.5
                                    : (r / I) | 0,
                            k = 0,
                            E = ai,
                            O = 0;
                        O < h;
                        O++
                    )
                        (v = (O % I) - m),
                            (w = _ - ((O / I) | 0)),
                            (y[O] = x =
                                u
                                    ? Math.abs(u === "y" ? w : v)
                                    : Ql(v * v + w * w)),
                            x > k && (k = x),
                            x < E && (E = x);
                    r === "random" && mc(y),
                        (y.max = k - E),
                        (y.min = E),
                        (y.v = h =
                            (parseFloat(t.amount) ||
                                parseFloat(t.each) *
                                    (I > h
                                        ? h - 1
                                        : u
                                        ? u === "y"
                                            ? h / I
                                            : I
                                        : Math.max(I, h / I)) ||
                                0) * (r === "edges" ? -1 : 1)),
                        (y.b = h < 0 ? s - h : s),
                        (y.u = yt(t.amount || t.each) || 0),
                        (i = i && h < 0 ? Pc(i) : i);
                }
                return (
                    (h = (y[p] - y.min) / y.max || 0),
                    st(y.b + (i ? i(h) : h) * y.v) + y.u
                );
            }
        );
    },
    Uo = function (e) {
        var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function (i) {
            var r = st(Math.round(parseFloat(i) / e) * e * t);
            return (r - (r % 1)) / t + (Yi(i) ? 0 : yt(i));
        };
    },
    vc = function (e, t) {
        var i = xt(e),
            r,
            s;
        return (
            !i &&
                Ai(e) &&
                ((r = i = e.radius || ai),
                e.values
                    ? ((e = li(e.values)), (s = !Yi(e[0])) && (r *= r))
                    : (e = Uo(e.increment))),
            dr(
                t,
                i
                    ? Ve(e)
                        ? function (o) {
                              return (s = e(o)), Math.abs(s - o) <= r ? s : o;
                          }
                        : function (o) {
                              for (
                                  var a = parseFloat(s ? o.x : o),
                                      l = parseFloat(s ? o.y : 0),
                                      u = ai,
                                      d = 0,
                                      f = e.length,
                                      p,
                                      c;
                                  f--;

                              )
                                  s
                                      ? ((p = e[f].x - a),
                                        (c = e[f].y - l),
                                        (p = p * p + c * c))
                                      : (p = Math.abs(e[f] - a)),
                                      p < u && ((u = p), (d = f));
                              return (
                                  (d = !r || u <= r ? e[d] : o),
                                  s || d === o || Yi(o) ? d : d + yt(o)
                              );
                          }
                    : Uo(e)
            )
        );
    },
    yc = function (e, t, i, r) {
        return dr(xt(e) ? !t : i === !0 ? !!(i = 0) : !r, function () {
            return xt(e)
                ? e[~~(Math.random() * e.length)]
                : (i = i || 1e-5) &&
                      (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
                      Math.floor(
                          Math.round(
                              (e - i / 2 + Math.random() * (t - e + i * 0.99)) /
                                  i
                          ) *
                              i *
                              r
                      ) / r;
        });
    },
    cd = function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
        return function (r) {
            return t.reduce(function (s, o) {
                return o(s);
            }, r);
        };
    },
    ud = function (e, t) {
        return function (i) {
            return e(parseFloat(i)) + (t || yt(i));
        };
    },
    dd = function (e, t, i) {
        return xc(e, t, 0, 1, i);
    },
    wc = function (e, t, i) {
        return dr(i, function (r) {
            return e[~~t(r)];
        });
    },
    fd = function n(e, t, i) {
        var r = t - e;
        return xt(e)
            ? wc(e, n(0, e.length), t)
            : dr(i, function (s) {
                  return ((r + ((s - e) % r)) % r) + e;
              });
    },
    pd = function n(e, t, i) {
        var r = t - e,
            s = r * 2;
        return xt(e)
            ? wc(e, n(0, e.length - 1), t)
            : dr(i, function (o) {
                  return (
                      (o = (s + ((o - e) % s)) % s || 0),
                      e + (o > r ? s - o : o)
                  );
              });
    },
    Qn = function (e) {
        for (var t = 0, i = "", r, s, o, a; ~(r = e.indexOf("random(", t)); )
            (o = e.indexOf(")", r)),
                (a = e.charAt(r + 7) === "["),
                (s = e.substr(r + 7, o - r - 7).match(a ? ic : Go)),
                (i +=
                    e.substr(t, r - t) +
                    yc(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
                (t = o + 1);
        return i + e.substr(t, e.length - t);
    },
    xc = function (e, t, i, r, s) {
        var o = t - e,
            a = r - i;
        return dr(s, function (l) {
            return i + (((l - e) / o) * a || 0);
        });
    },
    hd = function n(e, t, i, r) {
        var s = isNaN(e + t)
            ? 0
            : function (c) {
                  return (1 - c) * e + c * t;
              };
        if (!s) {
            var o = ot(e),
                a = {},
                l,
                u,
                d,
                f,
                p;
            if ((i === !0 && (r = 1) && (i = null), o))
                (e = { p: e }), (t = { p: t });
            else if (xt(e) && !xt(t)) {
                for (d = [], f = e.length, p = f - 2, u = 1; u < f; u++)
                    d.push(n(e[u - 1], e[u]));
                f--,
                    (s = function (g) {
                        g *= f;
                        var h = Math.min(p, ~~g);
                        return d[h](g - h);
                    }),
                    (i = t);
            } else r || (e = Ir(xt(e) ? [] : {}, e));
            if (!d) {
                for (l in t) Da.call(a, e, l, "get", t[l]);
                s = function (g) {
                    return Ra(g, a) || (o ? e.p : e);
                };
            }
        }
        return dr(i, s);
    },
    nl = function (e, t, i) {
        var r = e.labels,
            s = ai,
            o,
            a,
            l;
        for (o in r)
            (a = r[o] - t),
                a < 0 == !!i &&
                    a &&
                    s > (a = Math.abs(a)) &&
                    ((l = o), (s = a));
        return l;
    },
    Zt = function (e, t, i) {
        var r = e.vars,
            s = r[t],
            o = Oe,
            a = e._ctx,
            l,
            u,
            d;
        if (s)
            return (
                (l = r[t + "Params"]),
                (u = r.callbackScope || e),
                i && sr.length && Gs(),
                a && (Oe = a),
                (d = l ? s.apply(u, l) : s.call(u)),
                (Oe = o),
                d
            );
    },
    Tn = function (e) {
        return (
            lr(e),
            e.scrollTrigger && e.scrollTrigger.kill(!!wt),
            e.progress() < 1 && Zt(e, "onInterrupt"),
            e
        );
    },
    Kr,
    bc = [],
    Tc = function (e) {
        if (e)
            if (((e = (!e.name && e.default) || e), Ea() || e.headless)) {
                var t = e.name,
                    i = Ve(e),
                    r =
                        t && !i && e.init
                            ? function () {
                                  this._props = [];
                              }
                            : e,
                    s = {
                        init: Zn,
                        render: Ra,
                        add: Da,
                        kill: Od,
                        modifier: kd,
                        rawVars: 0,
                    },
                    o = {
                        targetTest: 0,
                        get: 0,
                        getSetter: Ia,
                        aliases: {},
                        register: 0,
                    };
                if ((dn(), e !== r)) {
                    if (qt[t]) return;
                    ui(r, ui(Ys(e, s), o)),
                        Ir(r.prototype, Ir(s, Ys(e, o))),
                        (qt[(r.prop = t)] = r),
                        e.targetTest && (Ms.push(r), (Ma[t] = 1)),
                        (t =
                            (t === "css"
                                ? "CSS"
                                : t.charAt(0).toUpperCase() + t.substr(1)) +
                            "Plugin");
                }
                sc(t, r), e.register && e.register(Ft, r, zt);
            } else bc.push(e);
    },
    be = 255,
    Sn = {
        aqua: [0, be, be],
        lime: [0, be, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, be],
        navy: [0, 0, 128],
        white: [be, be, be],
        olive: [128, 128, 0],
        yellow: [be, be, 0],
        orange: [be, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [be, 0, 0],
        pink: [be, 192, 203],
        cyan: [0, be, be],
        transparent: [be, be, be, 0],
    },
    po = function (e, t, i) {
        return (
            (e += e < 0 ? 1 : e > 1 ? -1 : 0),
            ((e * 6 < 1
                ? t + (i - t) * e * 6
                : e < 0.5
                ? i
                : e * 3 < 2
                ? t + (i - t) * (2 / 3 - e) * 6
                : t) *
                be +
                0.5) |
                0
        );
    },
    Sc = function (e, t, i) {
        var r = e ? (Yi(e) ? [e >> 16, (e >> 8) & be, e & be] : 0) : Sn.black,
            s,
            o,
            a,
            l,
            u,
            d,
            f,
            p,
            c,
            g;
        if (!r) {
            if (
                (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Sn[e])
            )
                r = Sn[e];
            else if (e.charAt(0) === "#") {
                if (
                    (e.length < 6 &&
                        ((s = e.charAt(1)),
                        (o = e.charAt(2)),
                        (a = e.charAt(3)),
                        (e =
                            "#" +
                            s +
                            s +
                            o +
                            o +
                            a +
                            a +
                            (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
                    e.length === 9)
                )
                    return (
                        (r = parseInt(e.substr(1, 6), 16)),
                        [
                            r >> 16,
                            (r >> 8) & be,
                            r & be,
                            parseInt(e.substr(7), 16) / 255,
                        ]
                    );
                (e = parseInt(e.substr(1), 16)),
                    (r = [e >> 16, (e >> 8) & be, e & be]);
            } else if (e.substr(0, 3) === "hsl") {
                if (((r = g = e.match(Go)), !t))
                    (l = (+r[0] % 360) / 360),
                        (u = +r[1] / 100),
                        (d = +r[2] / 100),
                        (o = d <= 0.5 ? d * (u + 1) : d + u - d * u),
                        (s = d * 2 - o),
                        r.length > 3 && (r[3] *= 1),
                        (r[0] = po(l + 1 / 3, s, o)),
                        (r[1] = po(l, s, o)),
                        (r[2] = po(l - 1 / 3, s, o));
                else if (~e.indexOf("="))
                    return (
                        (r = e.match(ec)), i && r.length < 4 && (r[3] = 1), r
                    );
            } else r = e.match(Go) || Sn.transparent;
            r = r.map(Number);
        }
        return (
            t &&
                !g &&
                ((s = r[0] / be),
                (o = r[1] / be),
                (a = r[2] / be),
                (f = Math.max(s, o, a)),
                (p = Math.min(s, o, a)),
                (d = (f + p) / 2),
                f === p
                    ? (l = u = 0)
                    : ((c = f - p),
                      (u = d > 0.5 ? c / (2 - f - p) : c / (f + p)),
                      (l =
                          f === s
                              ? (o - a) / c + (o < a ? 6 : 0)
                              : f === o
                              ? (a - s) / c + 2
                              : (s - o) / c + 4),
                      (l *= 60)),
                (r[0] = ~~(l + 0.5)),
                (r[1] = ~~(u * 100 + 0.5)),
                (r[2] = ~~(d * 100 + 0.5))),
            i && r.length < 4 && (r[3] = 1),
            r
        );
    },
    Ec = function (e) {
        var t = [],
            i = [],
            r = -1;
        return (
            e.split(or).forEach(function (s) {
                var o = s.match(Ur) || [];
                t.push.apply(t, o), i.push((r += o.length + 1));
            }),
            (t.c = i),
            t
        );
    },
    sl = function (e, t, i) {
        var r = "",
            s = (e + r).match(or),
            o = t ? "hsla(" : "rgba(",
            a = 0,
            l,
            u,
            d,
            f;
        if (!s) return e;
        if (
            ((s = s.map(function (p) {
                return (
                    (p = Sc(p, t, 1)) &&
                    o +
                        (t
                            ? p[0] + "," + p[1] + "%," + p[2] + "%," + p[3]
                            : p.join(",")) +
                        ")"
                );
            })),
            i && ((d = Ec(e)), (l = i.c), l.join(r) !== d.c.join(r)))
        )
            for (u = e.replace(or, "1").split(Ur), f = u.length - 1; a < f; a++)
                r +=
                    u[a] +
                    (~l.indexOf(a)
                        ? s.shift() || o + "0,0,0,0)"
                        : (d.length ? d : s.length ? s : i).shift());
        if (!u)
            for (u = e.split(or), f = u.length - 1; a < f; a++)
                r += u[a] + s[a];
        return r + u[f];
    },
    or = (function () {
        var n =
                "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
            e;
        for (e in Sn) n += "|" + e + "\\b";
        return new RegExp(n + ")", "gi");
    })(),
    gd = /hsl[a]?\(/,
    Cc = function (e) {
        var t = e.join(" "),
            i;
        if (((or.lastIndex = 0), or.test(t)))
            return (
                (i = gd.test(t)),
                (e[1] = sl(e[1], i)),
                (e[0] = sl(e[0], i, Ec(e[1]))),
                !0
            );
    },
    Jn,
    Wt = (function () {
        var n = Date.now,
            e = 500,
            t = 33,
            i = n(),
            r = i,
            s = 1e3 / 240,
            o = s,
            a = [],
            l,
            u,
            d,
            f,
            p,
            c,
            g = function h(y) {
                var m = n() - r,
                    _ = y === !0,
                    v,
                    w,
                    x,
                    O;
                if (
                    ((m > e || m < 0) && (i += m - t),
                    (r += m),
                    (x = r - i),
                    (v = x - o),
                    (v > 0 || _) &&
                        ((O = ++f.frame),
                        (p = x - f.time * 1e3),
                        (f.time = x = x / 1e3),
                        (o += v + (v >= s ? 4 : s - v)),
                        (w = 1)),
                    _ || (l = u(h)),
                    w)
                )
                    for (c = 0; c < a.length; c++) a[c](x, p, O, y);
            };
        return (
            (f = {
                time: 0,
                frame: 0,
                tick: function () {
                    g(!0);
                },
                deltaRatio: function (y) {
                    return p / (1e3 / (y || 60));
                },
                wake: function () {
                    rc &&
                        (!Yo &&
                            Ea() &&
                            ((Ci = Yo = window),
                            (Ca = Ci.document || {}),
                            (Jt.gsap = Ft),
                            (Ci.gsapVersions || (Ci.gsapVersions = [])).push(
                                Ft.version
                            ),
                            nc(
                                Vs ||
                                    Ci.GreenSockGlobals ||
                                    (!Ci.gsap && Ci) ||
                                    {}
                            ),
                            bc.forEach(Tc)),
                        (d =
                            typeof requestAnimationFrame < "u" &&
                            requestAnimationFrame),
                        l && f.sleep(),
                        (u =
                            d ||
                            function (y) {
                                return setTimeout(
                                    y,
                                    (o - f.time * 1e3 + 1) | 0
                                );
                            }),
                        (Jn = 1),
                        g(2));
                },
                sleep: function () {
                    (d ? cancelAnimationFrame : clearTimeout)(l),
                        (Jn = 0),
                        (u = Zn);
                },
                lagSmoothing: function (y, m) {
                    (e = y || 1 / 0), (t = Math.min(m || 33, e));
                },
                fps: function (y) {
                    (s = 1e3 / (y || 240)), (o = f.time * 1e3 + s);
                },
                add: function (y, m, _) {
                    var v = m
                        ? function (w, x, O, k) {
                              y(w, x, O, k), f.remove(v);
                          }
                        : y;
                    return f.remove(y), a[_ ? "unshift" : "push"](v), dn(), v;
                },
                remove: function (y, m) {
                    ~(m = a.indexOf(y)) && a.splice(m, 1) && c >= m && c--;
                },
                _listeners: a,
            }),
            f
        );
    })(),
    dn = function () {
        return !Jn && Wt.wake();
    },
    pe = {},
    md = /^[\d.\-M][\d.\-,\s]/,
    _d = /["']/g,
    vd = function (e) {
        for (
            var t = {},
                i = e.substr(1, e.length - 3).split(":"),
                r = i[0],
                s = 1,
                o = i.length,
                a,
                l,
                u;
            s < o;
            s++
        )
            (l = i[s]),
                (a = s !== o - 1 ? l.lastIndexOf(",") : l.length),
                (u = l.substr(0, a)),
                (t[r] = isNaN(u) ? u.replace(_d, "").trim() : +u),
                (r = l.substr(a + 1).trim());
        return t;
    },
    yd = function (e) {
        var t = e.indexOf("(") + 1,
            i = e.indexOf(")"),
            r = e.indexOf("(", t);
        return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i);
    },
    wd = function (e) {
        var t = (e + "").split("("),
            i = pe[t[0]];
        return i && t.length > 1 && i.config
            ? i.config.apply(
                  null,
                  ~e.indexOf("{") ? [vd(t[1])] : yd(e).split(",").map(cc)
              )
            : pe._CE && md.test(e)
            ? pe._CE("", e)
            : i;
    },
    Pc = function (e) {
        return function (t) {
            return 1 - e(1 - t);
        };
    },
    Mc = function n(e, t) {
        for (var i = e._first, r; i; )
            i instanceof Mt
                ? n(i, t)
                : i.vars.yoyoEase &&
                  (!i._yoyo || !i._repeat) &&
                  i._yoyo !== t &&
                  (i.timeline
                      ? n(i.timeline, t)
                      : ((r = i._ease),
                        (i._ease = i._yEase),
                        (i._yEase = r),
                        (i._yoyo = t))),
                (i = i._next);
    },
    Cr = function (e, t) {
        return (e && (Ve(e) ? e : pe[e] || wd(e))) || t;
    },
    $r = function (e, t, i, r) {
        i === void 0 &&
            (i = function (l) {
                return 1 - t(1 - l);
            }),
            r === void 0 &&
                (r = function (l) {
                    return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
                });
        var s = { easeIn: t, easeOut: i, easeInOut: r },
            o;
        return (
            Rt(e, function (a) {
                (pe[a] = Jt[a] = s), (pe[(o = a.toLowerCase())] = i);
                for (var l in s)
                    pe[
                        o +
                            (l === "easeIn"
                                ? ".in"
                                : l === "easeOut"
                                ? ".out"
                                : ".inOut")
                    ] = pe[a + "." + l] = s[l];
            }),
            s
        );
    },
    kc = function (e) {
        return function (t) {
            return t < 0.5
                ? (1 - e(1 - t * 2)) / 2
                : 0.5 + e((t - 0.5) * 2) / 2;
        };
    },
    ho = function n(e, t, i) {
        var r = t >= 1 ? t : 1,
            s = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
            o = (s / Vo) * (Math.asin(1 / r) || 0),
            a = function (d) {
                return d === 1
                    ? 1
                    : r * Math.pow(2, -10 * d) * Wu((d - o) * s) + 1;
            },
            l =
                e === "out"
                    ? a
                    : e === "in"
                    ? function (u) {
                          return 1 - a(1 - u);
                      }
                    : kc(a);
        return (
            (s = Vo / s),
            (l.config = function (u, d) {
                return n(e, u, d);
            }),
            l
        );
    },
    go = function n(e, t) {
        t === void 0 && (t = 1.70158);
        var i = function (o) {
                return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
            },
            r =
                e === "out"
                    ? i
                    : e === "in"
                    ? function (s) {
                          return 1 - i(1 - s);
                      }
                    : kc(i);
        return (
            (r.config = function (s) {
                return n(e, s);
            }),
            r
        );
    };
Rt("Linear,Quad,Cubic,Quart,Quint,Strong", function (n, e) {
    var t = e < 5 ? e + 1 : e;
    $r(
        n + ",Power" + (t - 1),
        e
            ? function (i) {
                  return Math.pow(i, t);
              }
            : function (i) {
                  return i;
              },
        function (i) {
            return 1 - Math.pow(1 - i, t);
        },
        function (i) {
            return i < 0.5
                ? Math.pow(i * 2, t) / 2
                : 1 - Math.pow((1 - i) * 2, t) / 2;
        }
    );
});
pe.Linear.easeNone = pe.none = pe.Linear.easeIn;
$r("Elastic", ho("in"), ho("out"), ho());
(function (n, e) {
    var t = 1 / e,
        i = 2 * t,
        r = 2.5 * t,
        s = function (a) {
            return a < t
                ? n * a * a
                : a < i
                ? n * Math.pow(a - 1.5 / e, 2) + 0.75
                : a < r
                ? n * (a -= 2.25 / e) * a + 0.9375
                : n * Math.pow(a - 2.625 / e, 2) + 0.984375;
        };
    $r(
        "Bounce",
        function (o) {
            return 1 - s(1 - o);
        },
        s
    );
})(7.5625, 2.75);
$r("Expo", function (n) {
    return n ? Math.pow(2, 10 * (n - 1)) : 0;
});
$r("Circ", function (n) {
    return -(Ql(1 - n * n) - 1);
});
$r("Sine", function (n) {
    return n === 1 ? 1 : -ju(n * Xu) + 1;
});
$r("Back", go("in"), go("out"), go());
pe.SteppedEase =
    pe.steps =
    Jt.SteppedEase =
        {
            config: function (e, t) {
                e === void 0 && (e = 1);
                var i = 1 / e,
                    r = e + (t ? 0 : 1),
                    s = t ? 1 : 0,
                    o = 1 - Ce;
                return function (a) {
                    return (((r * ls(0, o, a)) | 0) + s) * i;
                };
            },
        };
ln.ease = pe["quad.out"];
Rt(
    "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
    function (n) {
        return (ka += n + "," + n + "Params,");
    }
);
var Oc = function (e, t) {
        (this.id = qu++),
            (e._gsap = this),
            (this.target = e),
            (this.harness = t),
            (this.get = t ? t.get : ac),
            (this.set = t ? t.getSetter : Ia);
    },
    es = (function () {
        function n(t) {
            (this.vars = t),
                (this._delay = +t.delay || 0),
                (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                    ((this._rDelay = t.repeatDelay || 0),
                    (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
                (this._ts = 1),
                un(this, +t.duration, 1, 1),
                (this.data = t.data),
                Oe && ((this._ctx = Oe), Oe.data.push(this)),
                Jn || Wt.wake();
        }
        var e = n.prototype;
        return (
            (e.delay = function (i) {
                return i || i === 0
                    ? (this.parent &&
                          this.parent.smoothChildTiming &&
                          this.startTime(this._start + i - this._delay),
                      (this._delay = i),
                      this)
                    : this._delay;
            }),
            (e.duration = function (i) {
                return arguments.length
                    ? this.totalDuration(
                          this._repeat > 0
                              ? i + (i + this._rDelay) * this._repeat
                              : i
                      )
                    : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (i) {
                return arguments.length
                    ? ((this._dirty = 0),
                      un(
                          this,
                          this._repeat < 0
                              ? i
                              : (i - this._repeat * this._rDelay) /
                                    (this._repeat + 1)
                      ))
                    : this._tDur;
            }),
            (e.totalTime = function (i, r) {
                if ((dn(), !arguments.length)) return this._tTime;
                var s = this._dp;
                if (s && s.smoothChildTiming && this._ts) {
                    for (
                        oo(this, i), !s._dp || s.parent || fc(s, this);
                        s && s.parent;

                    )
                        s.parent._time !==
                            s._start +
                                (s._ts >= 0
                                    ? s._tTime / s._ts
                                    : (s.totalDuration() - s._tTime) /
                                      -s._ts) && s.totalTime(s._tTime, !0),
                            (s = s.parent);
                    !this.parent &&
                        this._dp.autoRemoveChildren &&
                        ((this._ts > 0 && i < this._tDur) ||
                            (this._ts < 0 && i > 0) ||
                            (!this._tDur && !i)) &&
                        Mi(this._dp, this, this._start - this._delay);
                }
                return (
                    (this._tTime !== i ||
                        (!this._dur && !r) ||
                        (this._initted && Math.abs(this._zTime) === Ce) ||
                        (!i &&
                            !this._initted &&
                            (this.add || this._ptLookup))) &&
                        (this._ts || (this._pTime = i), lc(this, i, r)),
                    this
                );
            }),
            (e.time = function (i, r) {
                return arguments.length
                    ? this.totalTime(
                          Math.min(this.totalDuration(), i + il(this)) %
                              (this._dur + this._rDelay) || (i ? this._dur : 0),
                          r
                      )
                    : this._time;
            }),
            (e.totalProgress = function (i, r) {
                return arguments.length
                    ? this.totalTime(this.totalDuration() * i, r)
                    : this.totalDuration()
                    ? Math.min(1, this._tTime / this._tDur)
                    : this.rawTime() > 0
                    ? 1
                    : 0;
            }),
            (e.progress = function (i, r) {
                return arguments.length
                    ? this.totalTime(
                          this.duration() *
                              (this._yoyo && !(this.iteration() & 1)
                                  ? 1 - i
                                  : i) +
                              il(this),
                          r
                      )
                    : this.duration()
                    ? Math.min(1, this._time / this._dur)
                    : this.rawTime() > 0
                    ? 1
                    : 0;
            }),
            (e.iteration = function (i, r) {
                var s = this.duration() + this._rDelay;
                return arguments.length
                    ? this.totalTime(this._time + (i - 1) * s, r)
                    : this._repeat
                    ? cn(this._tTime, s) + 1
                    : 1;
            }),
            (e.timeScale = function (i, r) {
                if (!arguments.length) return this._rts === -Ce ? 0 : this._rts;
                if (this._rts === i) return this;
                var s =
                    this.parent && this._ts
                        ? Hs(this.parent._time, this)
                        : this._tTime;
                return (
                    (this._rts = +i || 0),
                    (this._ts = this._ps || i === -Ce ? 0 : this._rts),
                    this.totalTime(
                        ls(-Math.abs(this._delay), this._tDur, s),
                        r !== !1
                    ),
                    so(this),
                    td(this)
                );
            }),
            (e.paused = function (i) {
                return arguments.length
                    ? (this._ps !== i &&
                          ((this._ps = i),
                          i
                              ? ((this._pTime =
                                    this._tTime ||
                                    Math.max(-this._delay, this.rawTime())),
                                (this._ts = this._act = 0))
                              : (dn(),
                                (this._ts = this._rts),
                                this.totalTime(
                                    this.parent &&
                                        !this.parent.smoothChildTiming
                                        ? this.rawTime()
                                        : this._tTime || this._pTime,
                                    this.progress() === 1 &&
                                        Math.abs(this._zTime) !== Ce &&
                                        (this._tTime -= Ce)
                                ))),
                      this)
                    : this._ps;
            }),
            (e.startTime = function (i) {
                if (arguments.length) {
                    this._start = i;
                    var r = this.parent || this._dp;
                    return (
                        r &&
                            (r._sort || !this.parent) &&
                            Mi(r, this, i - this._delay),
                        this
                    );
                }
                return this._start;
            }),
            (e.endTime = function (i) {
                return (
                    this._start +
                    (It(i) ? this.totalDuration() : this.duration()) /
                        Math.abs(this._ts || 1)
                );
            }),
            (e.rawTime = function (i) {
                var r = this.parent || this._dp;
                return r
                    ? i &&
                      (!this._ts ||
                          (this._repeat &&
                              this._time &&
                              this.totalProgress() < 1))
                        ? this._tTime % (this._dur + this._rDelay)
                        : this._ts
                        ? Hs(r.rawTime(i), this)
                        : this._tTime
                    : this._tTime;
            }),
            (e.revert = function (i) {
                i === void 0 && (i = Zu);
                var r = wt;
                return (
                    (wt = i),
                    (this._initted || this._startAt) &&
                        (this.timeline && this.timeline.revert(i),
                        this.totalTime(-0.01, i.suppressEvents)),
                    this.data !== "nested" && i.kill !== !1 && this.kill(),
                    (wt = r),
                    this
                );
            }),
            (e.globalTime = function (i) {
                for (var r = this, s = arguments.length ? i : r.rawTime(); r; )
                    (s = r._start + s / (Math.abs(r._ts) || 1)), (r = r._dp);
                return !this.parent && this._sat ? this._sat.globalTime(i) : s;
            }),
            (e.repeat = function (i) {
                return arguments.length
                    ? ((this._repeat = i === 1 / 0 ? -2 : i), rl(this))
                    : this._repeat === -2
                    ? 1 / 0
                    : this._repeat;
            }),
            (e.repeatDelay = function (i) {
                if (arguments.length) {
                    var r = this._time;
                    return (
                        (this._rDelay = i), rl(this), r ? this.time(r) : this
                    );
                }
                return this._rDelay;
            }),
            (e.yoyo = function (i) {
                return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
            }),
            (e.seek = function (i, r) {
                return this.totalTime(ni(this, i), It(r));
            }),
            (e.restart = function (i, r) {
                return this.play().totalTime(i ? -this._delay : 0, It(r));
            }),
            (e.play = function (i, r) {
                return (
                    i != null && this.seek(i, r), this.reversed(!1).paused(!1)
                );
            }),
            (e.reverse = function (i, r) {
                return (
                    i != null && this.seek(i || this.totalDuration(), r),
                    this.reversed(!0).paused(!1)
                );
            }),
            (e.pause = function (i, r) {
                return i != null && this.seek(i, r), this.paused(!0);
            }),
            (e.resume = function () {
                return this.paused(!1);
            }),
            (e.reversed = function (i) {
                return arguments.length
                    ? (!!i !== this.reversed() &&
                          this.timeScale(-this._rts || (i ? -Ce : 0)),
                      this)
                    : this._rts < 0;
            }),
            (e.invalidate = function () {
                return (
                    (this._initted = this._act = 0), (this._zTime = -Ce), this
                );
            }),
            (e.isActive = function () {
                var i = this.parent || this._dp,
                    r = this._start,
                    s;
                return !!(
                    !i ||
                    (this._ts &&
                        this._initted &&
                        i.isActive() &&
                        (s = i.rawTime(!0)) >= r &&
                        s < this.endTime(!0) - Ce)
                );
            }),
            (e.eventCallback = function (i, r, s) {
                var o = this.vars;
                return arguments.length > 1
                    ? (r
                          ? ((o[i] = r),
                            s && (o[i + "Params"] = s),
                            i === "onUpdate" && (this._onUpdate = r))
                          : delete o[i],
                      this)
                    : o[i];
            }),
            (e.then = function (i) {
                var r = this;
                return new Promise(function (s) {
                    var o = Ve(i) ? i : uc,
                        a = function () {
                            var u = r.then;
                            (r.then = null),
                                Ve(o) &&
                                    (o = o(r)) &&
                                    (o.then || o === r) &&
                                    (r.then = u),
                                s(o),
                                (r.then = u);
                        };
                    (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
                    (!r._tTime && r._ts < 0)
                        ? a()
                        : (r._prom = a);
                });
            }),
            (e.kill = function () {
                Tn(this);
            }),
            n
        );
    })();
ui(es.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -Ce,
    _prom: 0,
    _ps: !1,
    _rts: 1,
});
var Mt = (function (n) {
    Zl(e, n);
    function e(i, r) {
        var s;
        return (
            i === void 0 && (i = {}),
            (s = n.call(this, i) || this),
            (s.labels = {}),
            (s.smoothChildTiming = !!i.smoothChildTiming),
            (s.autoRemoveChildren = !!i.autoRemoveChildren),
            (s._sort = It(i.sortChildren)),
            Re && Mi(i.parent || Re, Ri(s), r),
            i.reversed && s.reverse(),
            i.paused && s.paused(!0),
            i.scrollTrigger && pc(Ri(s), i.scrollTrigger),
            s
        );
    }
    var t = e.prototype;
    return (
        (t.to = function (r, s, o) {
            return zn(0, arguments, this), this;
        }),
        (t.from = function (r, s, o) {
            return zn(1, arguments, this), this;
        }),
        (t.fromTo = function (r, s, o, a) {
            return zn(2, arguments, this), this;
        }),
        (t.set = function (r, s, o) {
            return (
                (s.duration = 0),
                (s.parent = this),
                Rn(s).repeatDelay || (s.repeat = 0),
                (s.immediateRender = !!s.immediateRender),
                new Ue(r, s, ni(this, o), 1),
                this
            );
        }),
        (t.call = function (r, s, o) {
            return Mi(this, Ue.delayedCall(0, r, s), o);
        }),
        (t.staggerTo = function (r, s, o, a, l, u, d) {
            return (
                (o.duration = s),
                (o.stagger = o.stagger || a),
                (o.onComplete = u),
                (o.onCompleteParams = d),
                (o.parent = this),
                new Ue(r, o, ni(this, l)),
                this
            );
        }),
        (t.staggerFrom = function (r, s, o, a, l, u, d) {
            return (
                (o.runBackwards = 1),
                (Rn(o).immediateRender = It(o.immediateRender)),
                this.staggerTo(r, s, o, a, l, u, d)
            );
        }),
        (t.staggerFromTo = function (r, s, o, a, l, u, d, f) {
            return (
                (a.startAt = o),
                (Rn(a).immediateRender = It(a.immediateRender)),
                this.staggerTo(r, s, a, l, u, d, f)
            );
        }),
        (t.render = function (r, s, o) {
            var a = this._time,
                l = this._dirty ? this.totalDuration() : this._tDur,
                u = this._dur,
                d = r <= 0 ? 0 : st(r),
                f = this._zTime < 0 != r < 0 && (this._initted || !u),
                p,
                c,
                g,
                h,
                y,
                m,
                _,
                v,
                w,
                x,
                O,
                k;
            if (
                (this !== Re && d > l && r >= 0 && (d = l),
                d !== this._tTime || o || f)
            ) {
                if (
                    (a !== this._time &&
                        u &&
                        ((d += this._time - a), (r += this._time - a)),
                    (p = d),
                    (w = this._start),
                    (v = this._ts),
                    (m = !v),
                    f &&
                        (u || (a = this._zTime),
                        (r || !s) && (this._zTime = r)),
                    this._repeat)
                ) {
                    if (
                        ((O = this._yoyo),
                        (y = u + this._rDelay),
                        this._repeat < -1 && r < 0)
                    )
                        return this.totalTime(y * 100 + r, s, o);
                    if (
                        ((p = st(d % y)),
                        d === l
                            ? ((h = this._repeat), (p = u))
                            : ((h = ~~(d / y)),
                              h && h === d / y && ((p = u), h--),
                              p > u && (p = u)),
                        (x = cn(this._tTime, y)),
                        !a &&
                            this._tTime &&
                            x !== h &&
                            this._tTime - x * y - this._dur <= 0 &&
                            (x = h),
                        O && h & 1 && ((p = u - p), (k = 1)),
                        h !== x && !this._lock)
                    ) {
                        var E = O && x & 1,
                            I = E === (O && h & 1);
                        if (
                            (h < x && (E = !E),
                            (a = E ? 0 : d % u ? u : d),
                            (this._lock = 1),
                            (this.render(
                                a || (k ? 0 : st(h * y)),
                                s,
                                !u
                            )._lock = 0),
                            (this._tTime = d),
                            !s && this.parent && Zt(this, "onRepeat"),
                            this.vars.repeatRefresh &&
                                !k &&
                                (this.invalidate()._lock = 1),
                            (a && a !== this._time) ||
                                m !== !this._ts ||
                                (this.vars.onRepeat &&
                                    !this.parent &&
                                    !this._act))
                        )
                            return this;
                        if (
                            ((u = this._dur),
                            (l = this._tDur),
                            I &&
                                ((this._lock = 2),
                                (a = E ? u : -1e-4),
                                this.render(a, !0),
                                this.vars.repeatRefresh &&
                                    !k &&
                                    this.invalidate()),
                            (this._lock = 0),
                            !this._ts && !m)
                        )
                            return this;
                        Mc(this, k);
                    }
                }
                if (
                    (this._hasPause &&
                        !this._forcing &&
                        this._lock < 2 &&
                        ((_ = sd(this, st(a), st(p))),
                        _ && (d -= p - (p = _._start))),
                    (this._tTime = d),
                    (this._time = p),
                    (this._act = !v),
                    this._initted ||
                        ((this._onUpdate = this.vars.onUpdate),
                        (this._initted = 1),
                        (this._zTime = r),
                        (a = 0)),
                    !a &&
                        p &&
                        !s &&
                        !h &&
                        (Zt(this, "onStart"), this._tTime !== d))
                )
                    return this;
                if (p >= a && r >= 0)
                    for (c = this._first; c; ) {
                        if (
                            ((g = c._next),
                            (c._act || p >= c._start) && c._ts && _ !== c)
                        ) {
                            if (c.parent !== this) return this.render(r, s, o);
                            if (
                                (c.render(
                                    c._ts > 0
                                        ? (p - c._start) * c._ts
                                        : (c._dirty
                                              ? c.totalDuration()
                                              : c._tDur) +
                                              (p - c._start) * c._ts,
                                    s,
                                    o
                                ),
                                p !== this._time || (!this._ts && !m))
                            ) {
                                (_ = 0), g && (d += this._zTime = -Ce);
                                break;
                            }
                        }
                        c = g;
                    }
                else {
                    c = this._last;
                    for (var P = r < 0 ? r : p; c; ) {
                        if (
                            ((g = c._prev),
                            (c._act || P <= c._end) && c._ts && _ !== c)
                        ) {
                            if (c.parent !== this) return this.render(r, s, o);
                            if (
                                (c.render(
                                    c._ts > 0
                                        ? (P - c._start) * c._ts
                                        : (c._dirty
                                              ? c.totalDuration()
                                              : c._tDur) +
                                              (P - c._start) * c._ts,
                                    s,
                                    o || (wt && (c._initted || c._startAt))
                                ),
                                p !== this._time || (!this._ts && !m))
                            ) {
                                (_ = 0), g && (d += this._zTime = P ? -Ce : Ce);
                                break;
                            }
                        }
                        c = g;
                    }
                }
                if (
                    _ &&
                    !s &&
                    (this.pause(),
                    (_.render(p >= a ? 0 : -Ce)._zTime = p >= a ? 1 : -1),
                    this._ts)
                )
                    return (this._start = w), so(this), this.render(r, s, o);
                this._onUpdate && !s && Zt(this, "onUpdate", !0),
                    ((d === l && this._tTime >= this.totalDuration()) ||
                        (!d && a)) &&
                        (w === this._start ||
                            Math.abs(v) !== Math.abs(this._ts)) &&
                        (this._lock ||
                            ((r || !u) &&
                                ((d === l && this._ts > 0) ||
                                    (!d && this._ts < 0)) &&
                                lr(this, 1),
                            !s &&
                                !(r < 0 && !a) &&
                                (d || a || !l) &&
                                (Zt(
                                    this,
                                    d === l && r >= 0
                                        ? "onComplete"
                                        : "onReverseComplete",
                                    !0
                                ),
                                this._prom &&
                                    !(d < l && this.timeScale() > 0) &&
                                    this._prom())));
            }
            return this;
        }),
        (t.add = function (r, s) {
            var o = this;
            if ((Yi(s) || (s = ni(this, s, r)), !(r instanceof es))) {
                if (xt(r))
                    return (
                        r.forEach(function (a) {
                            return o.add(a, s);
                        }),
                        this
                    );
                if (ot(r)) return this.addLabel(r, s);
                if (Ve(r)) r = Ue.delayedCall(0, r);
                else return this;
            }
            return this !== r ? Mi(this, r, s) : this;
        }),
        (t.getChildren = function (r, s, o, a) {
            r === void 0 && (r = !0),
                s === void 0 && (s = !0),
                o === void 0 && (o = !0),
                a === void 0 && (a = -ai);
            for (var l = [], u = this._first; u; )
                u._start >= a &&
                    (u instanceof Ue
                        ? s && l.push(u)
                        : (o && l.push(u),
                          r && l.push.apply(l, u.getChildren(!0, s, o)))),
                    (u = u._next);
            return l;
        }),
        (t.getById = function (r) {
            for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
                if (s[o].vars.id === r) return s[o];
        }),
        (t.remove = function (r) {
            return ot(r)
                ? this.removeLabel(r)
                : Ve(r)
                ? this.killTweensOf(r)
                : (no(this, r),
                  r === this._recent && (this._recent = this._last),
                  Er(this));
        }),
        (t.totalTime = function (r, s) {
            return arguments.length
                ? ((this._forcing = 1),
                  !this._dp &&
                      this._ts &&
                      (this._start = st(
                          Wt.time -
                              (this._ts > 0
                                  ? r / this._ts
                                  : (this.totalDuration() - r) / -this._ts)
                      )),
                  n.prototype.totalTime.call(this, r, s),
                  (this._forcing = 0),
                  this)
                : this._tTime;
        }),
        (t.addLabel = function (r, s) {
            return (this.labels[r] = ni(this, s)), this;
        }),
        (t.removeLabel = function (r) {
            return delete this.labels[r], this;
        }),
        (t.addPause = function (r, s, o) {
            var a = Ue.delayedCall(0, s || Zn, o);
            return (
                (a.data = "isPause"),
                (this._hasPause = 1),
                Mi(this, a, ni(this, r))
            );
        }),
        (t.removePause = function (r) {
            var s = this._first;
            for (r = ni(this, r); s; )
                s._start === r && s.data === "isPause" && lr(s), (s = s._next);
        }),
        (t.killTweensOf = function (r, s, o) {
            for (var a = this.getTweensOf(r, o), l = a.length; l--; )
                Qi !== a[l] && a[l].kill(r, s);
            return this;
        }),
        (t.getTweensOf = function (r, s) {
            for (var o = [], a = li(r), l = this._first, u = Yi(s), d; l; )
                l instanceof Ue
                    ? Qu(l._targets, a) &&
                      (u
                          ? (!Qi || (l._initted && l._ts)) &&
                            l.globalTime(0) <= s &&
                            l.globalTime(l.totalDuration()) > s
                          : !s || l.isActive()) &&
                      o.push(l)
                    : (d = l.getTweensOf(a, s)).length && o.push.apply(o, d),
                    (l = l._next);
            return o;
        }),
        (t.tweenTo = function (r, s) {
            s = s || {};
            var o = this,
                a = ni(o, r),
                l = s,
                u = l.startAt,
                d = l.onStart,
                f = l.onStartParams,
                p = l.immediateRender,
                c,
                g = Ue.to(
                    o,
                    ui(
                        {
                            ease: s.ease || "none",
                            lazy: !1,
                            immediateRender: !1,
                            time: a,
                            overwrite: "auto",
                            duration:
                                s.duration ||
                                Math.abs(
                                    (a -
                                        (u && "time" in u ? u.time : o._time)) /
                                        o.timeScale()
                                ) ||
                                Ce,
                            onStart: function () {
                                if ((o.pause(), !c)) {
                                    var y =
                                        s.duration ||
                                        Math.abs(
                                            (a -
                                                (u && "time" in u
                                                    ? u.time
                                                    : o._time)) /
                                                o.timeScale()
                                        );
                                    g._dur !== y &&
                                        un(g, y, 0, 1).render(g._time, !0, !0),
                                        (c = 1);
                                }
                                d && d.apply(g, f || []);
                            },
                        },
                        s
                    )
                );
            return p ? g.render(0) : g;
        }),
        (t.tweenFromTo = function (r, s, o) {
            return this.tweenTo(s, ui({ startAt: { time: ni(this, r) } }, o));
        }),
        (t.recent = function () {
            return this._recent;
        }),
        (t.nextLabel = function (r) {
            return r === void 0 && (r = this._time), nl(this, ni(this, r));
        }),
        (t.previousLabel = function (r) {
            return r === void 0 && (r = this._time), nl(this, ni(this, r), 1);
        }),
        (t.currentLabel = function (r) {
            return arguments.length
                ? this.seek(r, !0)
                : this.previousLabel(this._time + Ce);
        }),
        (t.shiftChildren = function (r, s, o) {
            o === void 0 && (o = 0);
            for (var a = this._first, l = this.labels, u; a; )
                a._start >= o && ((a._start += r), (a._end += r)),
                    (a = a._next);
            if (s) for (u in l) l[u] >= o && (l[u] += r);
            return Er(this);
        }),
        (t.invalidate = function (r) {
            var s = this._first;
            for (this._lock = 0; s; ) s.invalidate(r), (s = s._next);
            return n.prototype.invalidate.call(this, r);
        }),
        (t.clear = function (r) {
            r === void 0 && (r = !0);
            for (var s = this._first, o; s; )
                (o = s._next), this.remove(s), (s = o);
            return (
                this._dp && (this._time = this._tTime = this._pTime = 0),
                r && (this.labels = {}),
                Er(this)
            );
        }),
        (t.totalDuration = function (r) {
            var s = 0,
                o = this,
                a = o._last,
                l = ai,
                u,
                d,
                f;
            if (arguments.length)
                return o.timeScale(
                    (o._repeat < 0 ? o.duration() : o.totalDuration()) /
                        (o.reversed() ? -r : r)
                );
            if (o._dirty) {
                for (f = o.parent; a; )
                    (u = a._prev),
                        a._dirty && a.totalDuration(),
                        (d = a._start),
                        d > l && o._sort && a._ts && !o._lock
                            ? ((o._lock = 1),
                              (Mi(o, a, d - a._delay, 1)._lock = 0))
                            : (l = d),
                        d < 0 &&
                            a._ts &&
                            ((s -= d),
                            ((!f && !o._dp) || (f && f.smoothChildTiming)) &&
                                ((o._start += d / o._ts),
                                (o._time -= d),
                                (o._tTime -= d)),
                            o.shiftChildren(-d, !1, -1 / 0),
                            (l = 0)),
                        a._end > s && a._ts && (s = a._end),
                        (a = u);
                un(o, o === Re && o._time > s ? o._time : s, 1, 1),
                    (o._dirty = 0);
            }
            return o._tDur;
        }),
        (e.updateRoot = function (r) {
            if (
                (Re._ts && (lc(Re, Hs(r, Re)), (oc = Wt.frame)), Wt.frame >= el)
            ) {
                el += Qt.autoSleep || 120;
                var s = Re._first;
                if (
                    (!s || !s._ts) &&
                    Qt.autoSleep &&
                    Wt._listeners.length < 2
                ) {
                    for (; s && !s._ts; ) s = s._next;
                    s || Wt.sleep();
                }
            }
        }),
        e
    );
})(es);
ui(Mt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var xd = function (e, t, i, r, s, o, a) {
        var l = new zt(this._pt, e, t, 0, 1, zc, null, s),
            u = 0,
            d = 0,
            f,
            p,
            c,
            g,
            h,
            y,
            m,
            _;
        for (
            l.b = i,
                l.e = r,
                i += "",
                r += "",
                (m = ~r.indexOf("random(")) && (r = Qn(r)),
                o && ((_ = [i, r]), o(_, e, t), (i = _[0]), (r = _[1])),
                p = i.match(uo) || [];
            (f = uo.exec(r));

        )
            (g = f[0]),
                (h = r.substring(u, f.index)),
                c ? (c = (c + 1) % 5) : h.substr(-5) === "rgba(" && (c = 1),
                g !== p[d++] &&
                    ((y = parseFloat(p[d - 1]) || 0),
                    (l._pt = {
                        _next: l._pt,
                        p: h || d === 1 ? h : ",",
                        s: y,
                        c:
                            g.charAt(1) === "="
                                ? Qr(y, g) - y
                                : parseFloat(g) - y,
                        m: c && c < 4 ? Math.round : 0,
                    }),
                    (u = uo.lastIndex));
        return (
            (l.c = u < r.length ? r.substring(u, r.length) : ""),
            (l.fp = a),
            (tc.test(r) || m) && (l.e = 0),
            (this._pt = l),
            l
        );
    },
    Da = function (e, t, i, r, s, o, a, l, u, d) {
        Ve(r) && (r = r(s || 0, e, o));
        var f = e[t],
            p =
                i !== "get"
                    ? i
                    : Ve(f)
                    ? u
                        ? e[
                              t.indexOf("set") || !Ve(e["get" + t.substr(3)])
                                  ? t
                                  : "get" + t.substr(3)
                          ](u)
                        : e[t]()
                    : f,
            c = Ve(f) ? (u ? Cd : Ic) : Aa,
            g;
        if (
            (ot(r) &&
                (~r.indexOf("random(") && (r = Qn(r)),
                r.charAt(1) === "=" &&
                    ((g = Qr(p, r) + (yt(p) || 0)), (g || g === 0) && (r = g))),
            !d || p !== r || Ko)
        )
            return !isNaN(p * r) && r !== ""
                ? ((g = new zt(
                      this._pt,
                      e,
                      t,
                      +p || 0,
                      r - (p || 0),
                      typeof f == "boolean" ? Md : Rc,
                      0,
                      c
                  )),
                  u && (g.fp = u),
                  a && g.modifier(a, this, e),
                  (this._pt = g))
                : (!f && !(t in e) && Pa(t, r),
                  xd.call(this, e, t, p, r, c, l || Qt.stringFilter, u));
    },
    bd = function (e, t, i, r, s) {
        if (
            (Ve(e) && (e = Nn(e, s, t, i, r)),
            !Ai(e) || (e.style && e.nodeType) || xt(e) || Jl(e))
        )
            return ot(e) ? Nn(e, s, t, i, r) : e;
        var o = {},
            a;
        for (a in e) o[a] = Nn(e[a], s, t, i, r);
        return o;
    },
    Dc = function (e, t, i, r, s, o) {
        var a, l, u, d;
        if (
            qt[e] &&
            (a = new qt[e]()).init(
                s,
                a.rawVars ? t[e] : bd(t[e], r, s, o, i),
                i,
                r,
                o
            ) !== !1 &&
            ((i._pt = l =
                new zt(i._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
            i !== Kr)
        )
            for (
                u = i._ptLookup[i._targets.indexOf(s)], d = a._props.length;
                d--;

            )
                u[a._props[d]] = l;
        return a;
    },
    Qi,
    Ko,
    La = function n(e, t, i) {
        var r = e.vars,
            s = r.ease,
            o = r.startAt,
            a = r.immediateRender,
            l = r.lazy,
            u = r.onUpdate,
            d = r.runBackwards,
            f = r.yoyoEase,
            p = r.keyframes,
            c = r.autoRevert,
            g = e._dur,
            h = e._startAt,
            y = e._targets,
            m = e.parent,
            _ = m && m.data === "nested" ? m.vars.targets : y,
            v = e._overwrite === "auto" && !Ta,
            w = e.timeline,
            x,
            O,
            k,
            E,
            I,
            P,
            R,
            T,
            M,
            z,
            $,
            V,
            Y;
        if (
            (w && (!p || !s) && (s = "none"),
            (e._ease = Cr(s, ln.ease)),
            (e._yEase = f ? Pc(Cr(f === !0 ? s : f, ln.ease)) : 0),
            f &&
                e._yoyo &&
                !e._repeat &&
                ((f = e._yEase), (e._yEase = e._ease), (e._ease = f)),
            (e._from = !w && !!r.runBackwards),
            !w || (p && !r.stagger))
        ) {
            if (
                ((T = y[0] ? Sr(y[0]).harness : 0),
                (V = T && r[T.prop]),
                (x = Ys(r, Ma)),
                h &&
                    (h._zTime < 0 && h.progress(1),
                    t < 0 && d && a && !c
                        ? h.render(-1, !0)
                        : h.revert(d && g ? Ps : Ku),
                    (h._lazy = 0)),
                o)
            ) {
                if (
                    (lr(
                        (e._startAt = Ue.set(
                            y,
                            ui(
                                {
                                    data: "isStart",
                                    overwrite: !1,
                                    parent: m,
                                    immediateRender: !0,
                                    lazy: !h && It(l),
                                    startAt: null,
                                    delay: 0,
                                    onUpdate:
                                        u &&
                                        function () {
                                            return Zt(e, "onUpdate");
                                        },
                                    stagger: 0,
                                },
                                o
                            )
                        ))
                    ),
                    (e._startAt._dp = 0),
                    (e._startAt._sat = e),
                    t < 0 && (wt || (!a && !c)) && e._startAt.revert(Ps),
                    a && g && t <= 0 && i <= 0)
                ) {
                    t && (e._zTime = t);
                    return;
                }
            } else if (d && g && !h) {
                if (
                    (t && (a = !1),
                    (k = ui(
                        {
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: a && !h && It(l),
                            immediateRender: a,
                            stagger: 0,
                            parent: m,
                        },
                        x
                    )),
                    V && (k[T.prop] = V),
                    lr((e._startAt = Ue.set(y, k))),
                    (e._startAt._dp = 0),
                    (e._startAt._sat = e),
                    t < 0 &&
                        (wt
                            ? e._startAt.revert(Ps)
                            : e._startAt.render(-1, !0)),
                    (e._zTime = t),
                    !a)
                )
                    n(e._startAt, Ce, Ce);
                else if (!t) return;
            }
            for (
                e._pt = e._ptCache = 0, l = (g && It(l)) || (l && !g), O = 0;
                O < y.length;
                O++
            ) {
                if (
                    ((I = y[O]),
                    (R = I._gsap || Oa(y)[O]._gsap),
                    (e._ptLookup[O] = z = {}),
                    Ho[R.id] && sr.length && Gs(),
                    ($ = _ === y ? O : _.indexOf(I)),
                    T &&
                        (M = new T()).init(I, V || x, e, $, _) !== !1 &&
                        ((e._pt = E =
                            new zt(
                                e._pt,
                                I,
                                M.name,
                                0,
                                1,
                                M.render,
                                M,
                                0,
                                M.priority
                            )),
                        M._props.forEach(function (U) {
                            z[U] = E;
                        }),
                        M.priority && (P = 1)),
                    !T || V)
                )
                    for (k in x)
                        qt[k] && (M = Dc(k, x, e, $, I, _))
                            ? M.priority && (P = 1)
                            : (z[k] = E =
                                  Da.call(
                                      e,
                                      I,
                                      k,
                                      "get",
                                      x[k],
                                      $,
                                      _,
                                      0,
                                      r.stringFilter
                                  ));
                e._op && e._op[O] && e.kill(I, e._op[O]),
                    v &&
                        e._pt &&
                        ((Qi = e),
                        Re.killTweensOf(I, z, e.globalTime(t)),
                        (Y = !e.parent),
                        (Qi = 0)),
                    e._pt && l && (Ho[R.id] = 1);
            }
            P && Nc(e), e._onInit && e._onInit(e);
        }
        (e._onUpdate = u),
            (e._initted = (!e._op || e._pt) && !Y),
            p && t <= 0 && w.render(ai, !0, !0);
    },
    Td = function (e, t, i, r, s, o, a, l) {
        var u = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
            d,
            f,
            p,
            c;
        if (!u)
            for (
                u = e._ptCache[t] = [], p = e._ptLookup, c = e._targets.length;
                c--;

            ) {
                if (((d = p[c][t]), d && d.d && d.d._pt))
                    for (d = d.d._pt; d && d.p !== t && d.fp !== t; )
                        d = d._next;
                if (!d)
                    return (
                        (Ko = 1),
                        (e.vars[t] = "+=0"),
                        La(e, a),
                        (Ko = 0),
                        l ? Kn(t + " not eligible for reset") : 1
                    );
                u.push(d);
            }
        for (c = u.length; c--; )
            (f = u[c]),
                (d = f._pt || f),
                (d.s = (r || r === 0) && !s ? r : d.s + (r || 0) + o * d.c),
                (d.c = i - d.s),
                f.e && (f.e = He(i) + yt(f.e)),
                f.b && (f.b = d.s + yt(f.b));
    },
    Sd = function (e, t) {
        var i = e[0] ? Sr(e[0]).harness : 0,
            r = i && i.aliases,
            s,
            o,
            a,
            l;
        if (!r) return t;
        s = Ir({}, t);
        for (o in r)
            if (o in s)
                for (l = r[o].split(","), a = l.length; a--; ) s[l[a]] = s[o];
        return s;
    },
    Ed = function (e, t, i, r) {
        var s = t.ease || r || "power1.inOut",
            o,
            a;
        if (xt(t))
            (a = i[e] || (i[e] = [])),
                t.forEach(function (l, u) {
                    return a.push({
                        t: (u / (t.length - 1)) * 100,
                        v: l,
                        e: s,
                    });
                });
        else
            for (o in t)
                (a = i[o] || (i[o] = [])),
                    o === "ease" || a.push({ t: parseFloat(e), v: t[o], e: s });
    },
    Nn = function (e, t, i, r, s) {
        return Ve(e)
            ? e.call(t, i, r, s)
            : ot(e) && ~e.indexOf("random(")
            ? Qn(e)
            : e;
    },
    Lc = ka + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Ac = {};
Rt(Lc + ",id,stagger,delay,duration,paused,scrollTrigger", function (n) {
    return (Ac[n] = 1);
});
var Ue = (function (n) {
    Zl(e, n);
    function e(i, r, s, o) {
        var a;
        typeof r == "number" && ((s.duration = r), (r = s), (s = null)),
            (a = n.call(this, o ? r : Rn(r)) || this);
        var l = a.vars,
            u = l.duration,
            d = l.delay,
            f = l.immediateRender,
            p = l.stagger,
            c = l.overwrite,
            g = l.keyframes,
            h = l.defaults,
            y = l.scrollTrigger,
            m = l.yoyoEase,
            _ = r.parent || Re,
            v = (xt(i) || Jl(i) ? Yi(i[0]) : "length" in r) ? [i] : li(i),
            w,
            x,
            O,
            k,
            E,
            I,
            P,
            R;
        if (
            ((a._targets = v.length
                ? Oa(v)
                : Kn(
                      "GSAP target " + i + " not found. https://gsap.com",
                      !Qt.nullTargetWarn
                  ) || []),
            (a._ptLookup = []),
            (a._overwrite = c),
            g || p || ds(u) || ds(d))
        ) {
            if (
                ((r = a.vars),
                (w = a.timeline =
                    new Mt({
                        data: "nested",
                        defaults: h || {},
                        targets: _ && _.data === "nested" ? _.vars.targets : v,
                    })),
                w.kill(),
                (w.parent = w._dp = Ri(a)),
                (w._start = 0),
                p || ds(u) || ds(d))
            ) {
                if (((k = v.length), (P = p && _c(p)), Ai(p)))
                    for (E in p)
                        ~Lc.indexOf(E) && (R || (R = {}), (R[E] = p[E]));
                for (x = 0; x < k; x++)
                    (O = Ys(r, Ac)),
                        (O.stagger = 0),
                        m && (O.yoyoEase = m),
                        R && Ir(O, R),
                        (I = v[x]),
                        (O.duration = +Nn(u, Ri(a), x, I, v)),
                        (O.delay = (+Nn(d, Ri(a), x, I, v) || 0) - a._delay),
                        !p &&
                            k === 1 &&
                            O.delay &&
                            ((a._delay = d = O.delay),
                            (a._start += d),
                            (O.delay = 0)),
                        w.to(I, O, P ? P(x, I, v) : 0),
                        (w._ease = pe.none);
                w.duration() ? (u = d = 0) : (a.timeline = 0);
            } else if (g) {
                Rn(ui(w.vars.defaults, { ease: "none" })),
                    (w._ease = Cr(g.ease || r.ease || "none"));
                var T = 0,
                    M,
                    z,
                    $;
                if (xt(g))
                    g.forEach(function (V) {
                        return w.to(v, V, ">");
                    }),
                        w.duration();
                else {
                    O = {};
                    for (E in g)
                        E === "ease" ||
                            E === "easeEach" ||
                            Ed(E, g[E], O, g.easeEach);
                    for (E in O)
                        for (
                            M = O[E].sort(function (V, Y) {
                                return V.t - Y.t;
                            }),
                                T = 0,
                                x = 0;
                            x < M.length;
                            x++
                        )
                            (z = M[x]),
                                ($ = {
                                    ease: z.e,
                                    duration:
                                        ((z.t - (x ? M[x - 1].t : 0)) / 100) *
                                        u,
                                }),
                                ($[E] = z.v),
                                w.to(v, $, T),
                                (T += $.duration);
                    w.duration() < u &&
                        w.to({}, { duration: u - w.duration() });
                }
            }
            u || a.duration((u = w.duration()));
        } else a.timeline = 0;
        return (
            c === !0 && !Ta && ((Qi = Ri(a)), Re.killTweensOf(v), (Qi = 0)),
            Mi(_, Ri(a), s),
            r.reversed && a.reverse(),
            r.paused && a.paused(!0),
            (f ||
                (!u &&
                    !g &&
                    a._start === st(_._time) &&
                    It(f) &&
                    id(Ri(a)) &&
                    _.data !== "nested")) &&
                ((a._tTime = -Ce), a.render(Math.max(0, -d) || 0)),
            y && pc(Ri(a), y),
            a
        );
    }
    var t = e.prototype;
    return (
        (t.render = function (r, s, o) {
            var a = this._time,
                l = this._tDur,
                u = this._dur,
                d = r < 0,
                f = r > l - Ce && !d ? l : r < Ce ? 0 : r,
                p,
                c,
                g,
                h,
                y,
                m,
                _,
                v,
                w;
            if (!u) nd(this, r, s, o);
            else if (
                f !== this._tTime ||
                !r ||
                o ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== d)
            ) {
                if (((p = f), (v = this.timeline), this._repeat)) {
                    if (((h = u + this._rDelay), this._repeat < -1 && d))
                        return this.totalTime(h * 100 + r, s, o);
                    if (
                        ((p = st(f % h)),
                        f === l
                            ? ((g = this._repeat), (p = u))
                            : ((g = ~~(f / h)),
                              g && g === st(f / h) && ((p = u), g--),
                              p > u && (p = u)),
                        (m = this._yoyo && g & 1),
                        m && ((w = this._yEase), (p = u - p)),
                        (y = cn(this._tTime, h)),
                        p === a && !o && this._initted && g === y)
                    )
                        return (this._tTime = f), this;
                    g !== y &&
                        (v && this._yEase && Mc(v, m),
                        this.vars.repeatRefresh &&
                            !m &&
                            !this._lock &&
                            this._time !== h &&
                            this._initted &&
                            ((this._lock = o = 1),
                            (this.render(
                                st(h * g),
                                !0
                            ).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                    if (hc(this, d ? r : p, o, s, f))
                        return (this._tTime = 0), this;
                    if (
                        a !== this._time &&
                        !(o && this.vars.repeatRefresh && g !== y)
                    )
                        return this;
                    if (u !== this._dur) return this.render(r, s, o);
                }
                if (
                    ((this._tTime = f),
                    (this._time = p),
                    !this._act &&
                        this._ts &&
                        ((this._act = 1), (this._lazy = 0)),
                    (this.ratio = _ = (w || this._ease)(p / u)),
                    this._from && (this.ratio = _ = 1 - _),
                    p &&
                        !a &&
                        !s &&
                        !g &&
                        (Zt(this, "onStart"), this._tTime !== f))
                )
                    return this;
                for (c = this._pt; c; ) c.r(_, c.d), (c = c._next);
                (v &&
                    v.render(
                        r < 0 ? r : v._dur * v._ease(p / this._dur),
                        s,
                        o
                    )) ||
                    (this._startAt && (this._zTime = r)),
                    this._onUpdate &&
                        !s &&
                        (d && Xo(this, r, s, o), Zt(this, "onUpdate")),
                    this._repeat &&
                        g !== y &&
                        this.vars.onRepeat &&
                        !s &&
                        this.parent &&
                        Zt(this, "onRepeat"),
                    (f === this._tDur || !f) &&
                        this._tTime === f &&
                        (d && !this._onUpdate && Xo(this, r, !0, !0),
                        (r || !u) &&
                            ((f === this._tDur && this._ts > 0) ||
                                (!f && this._ts < 0)) &&
                            lr(this, 1),
                        !s &&
                            !(d && !a) &&
                            (f || a || m) &&
                            (Zt(
                                this,
                                f === l ? "onComplete" : "onReverseComplete",
                                !0
                            ),
                            this._prom &&
                                !(f < l && this.timeScale() > 0) &&
                                this._prom()));
            }
            return this;
        }),
        (t.targets = function () {
            return this._targets;
        }),
        (t.invalidate = function (r) {
            return (
                (!r || !this.vars.runBackwards) && (this._startAt = 0),
                (this._pt =
                    this._op =
                    this._onUpdate =
                    this._lazy =
                    this.ratio =
                        0),
                (this._ptLookup = []),
                this.timeline && this.timeline.invalidate(r),
                n.prototype.invalidate.call(this, r)
            );
        }),
        (t.resetTo = function (r, s, o, a, l) {
            Jn || Wt.wake(), this._ts || this.play();
            var u = Math.min(
                    this._dur,
                    (this._dp._time - this._start) * this._ts
                ),
                d;
            return (
                this._initted || La(this, u),
                (d = this._ease(u / this._dur)),
                Td(this, r, s, o, a, d, u, l)
                    ? this.resetTo(r, s, o, a, 1)
                    : (oo(this, 0),
                      this.parent ||
                          dc(
                              this._dp,
                              this,
                              "_first",
                              "_last",
                              this._dp._sort ? "_start" : 0
                          ),
                      this.render(0))
            );
        }),
        (t.kill = function (r, s) {
            if ((s === void 0 && (s = "all"), !r && (!s || s === "all")))
                return (
                    (this._lazy = this._pt = 0), this.parent ? Tn(this) : this
                );
            if (this.timeline) {
                var o = this.timeline.totalDuration();
                return (
                    this.timeline.killTweensOf(
                        r,
                        s,
                        Qi && Qi.vars.overwrite !== !0
                    )._first || Tn(this),
                    this.parent &&
                        o !== this.timeline.totalDuration() &&
                        un(this, (this._dur * this.timeline._tDur) / o, 0, 1),
                    this
                );
            }
            var a = this._targets,
                l = r ? li(r) : a,
                u = this._ptLookup,
                d = this._pt,
                f,
                p,
                c,
                g,
                h,
                y,
                m;
            if ((!s || s === "all") && ed(a, l))
                return s === "all" && (this._pt = 0), Tn(this);
            for (
                f = this._op = this._op || [],
                    s !== "all" &&
                        (ot(s) &&
                            ((h = {}),
                            Rt(s, function (_) {
                                return (h[_] = 1);
                            }),
                            (s = h)),
                        (s = Sd(a, s))),
                    m = a.length;
                m--;

            )
                if (~l.indexOf(a[m])) {
                    (p = u[m]),
                        s === "all"
                            ? ((f[m] = s), (g = p), (c = {}))
                            : ((c = f[m] = f[m] || {}), (g = s));
                    for (h in g)
                        (y = p && p[h]),
                            y &&
                                ((!("kill" in y.d) || y.d.kill(h) === !0) &&
                                    no(this, y, "_pt"),
                                delete p[h]),
                            c !== "all" && (c[h] = 1);
                }
            return this._initted && !this._pt && d && Tn(this), this;
        }),
        (e.to = function (r, s) {
            return new e(r, s, arguments[2]);
        }),
        (e.from = function (r, s) {
            return zn(1, arguments);
        }),
        (e.delayedCall = function (r, s, o, a) {
            return new e(s, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: r,
                onComplete: s,
                onReverseComplete: s,
                onCompleteParams: o,
                onReverseCompleteParams: o,
                callbackScope: a,
            });
        }),
        (e.fromTo = function (r, s, o) {
            return zn(2, arguments);
        }),
        (e.set = function (r, s) {
            return (
                (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(r, s)
            );
        }),
        (e.killTweensOf = function (r, s, o) {
            return Re.killTweensOf(r, s, o);
        }),
        e
    );
})(es);
ui(Ue.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Rt("staggerTo,staggerFrom,staggerFromTo", function (n) {
    Ue[n] = function () {
        var e = new Mt(),
            t = jo.call(arguments, 0);
        return t.splice(n === "staggerFromTo" ? 5 : 4, 0, 0), e[n].apply(e, t);
    };
});
var Aa = function (e, t, i) {
        return (e[t] = i);
    },
    Ic = function (e, t, i) {
        return e[t](i);
    },
    Cd = function (e, t, i, r) {
        return e[t](r.fp, i);
    },
    Pd = function (e, t, i) {
        return e.setAttribute(t, i);
    },
    Ia = function (e, t) {
        return Ve(e[t]) ? Ic : Sa(e[t]) && e.setAttribute ? Pd : Aa;
    },
    Rc = function (e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
    },
    Md = function (e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    zc = function (e, t) {
        var i = t._pt,
            r = "";
        if (!e && t.b) r = t.b;
        else if (e === 1 && t.e) r = t.e;
        else {
            for (; i; )
                (r =
                    i.p +
                    (i.m
                        ? i.m(i.s + i.c * e)
                        : Math.round((i.s + i.c * e) * 1e4) / 1e4) +
                    r),
                    (i = i._next);
            r += t.c;
        }
        t.set(t.t, t.p, r, t);
    },
    Ra = function (e, t) {
        for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    },
    kd = function (e, t, i, r) {
        for (var s = this._pt, o; s; )
            (o = s._next), s.p === r && s.modifier(e, t, i), (s = o);
    },
    Od = function (e) {
        for (var t = this._pt, i, r; t; )
            (r = t._next),
                (t.p === e && !t.op) || t.op === e
                    ? no(this, t, "_pt")
                    : t.dep || (i = 1),
                (t = r);
        return !i;
    },
    Dd = function (e, t, i, r) {
        r.mSet(e, t, r.m.call(r.tween, i, r.mt), r);
    },
    Nc = function (e) {
        for (var t = e._pt, i, r, s, o; t; ) {
            for (i = t._next, r = s; r && r.pr > t.pr; ) r = r._next;
            (t._prev = r ? r._prev : o) ? (t._prev._next = t) : (s = t),
                (t._next = r) ? (r._prev = t) : (o = t),
                (t = i);
        }
        e._pt = s;
    },
    zt = (function () {
        function n(t, i, r, s, o, a, l, u, d) {
            (this.t = i),
                (this.s = s),
                (this.c = o),
                (this.p = r),
                (this.r = a || Rc),
                (this.d = l || this),
                (this.set = u || Aa),
                (this.pr = d || 0),
                (this._next = t),
                t && (t._prev = this);
        }
        var e = n.prototype;
        return (
            (e.modifier = function (i, r, s) {
                (this.mSet = this.mSet || this.set),
                    (this.set = Dd),
                    (this.m = i),
                    (this.mt = s),
                    (this.tween = r);
            }),
            n
        );
    })();
Rt(
    ka +
        "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (n) {
        return (Ma[n] = 1);
    }
);
Jt.TweenMax = Jt.TweenLite = Ue;
Jt.TimelineLite = Jt.TimelineMax = Mt;
Re = new Mt({
    sortChildren: !1,
    defaults: ln,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0,
});
Qt.stringFilter = Cc;
var Pr = [],
    ks = {},
    Ld = [],
    ol = 0,
    Ad = 0,
    mo = function (e) {
        return (ks[e] || Ld).map(function (t) {
            return t();
        });
    },
    Zo = function () {
        var e = Date.now(),
            t = [];
        e - ol > 2 &&
            (mo("matchMediaInit"),
            Pr.forEach(function (i) {
                var r = i.queries,
                    s = i.conditions,
                    o,
                    a,
                    l,
                    u;
                for (a in r)
                    (o = Ci.matchMedia(r[a]).matches),
                        o && (l = 1),
                        o !== s[a] && ((s[a] = o), (u = 1));
                u && (i.revert(), l && t.push(i));
            }),
            mo("matchMediaRevert"),
            t.forEach(function (i) {
                return i.onMatch(i, function (r) {
                    return i.add(null, r);
                });
            }),
            (ol = e),
            mo("matchMedia"));
    },
    Fc = (function () {
        function n(t, i) {
            (this.selector = i && Wo(i)),
                (this.data = []),
                (this._r = []),
                (this.isReverted = !1),
                (this.id = Ad++),
                t && this.add(t);
        }
        var e = n.prototype;
        return (
            (e.add = function (i, r, s) {
                Ve(i) && ((s = r), (r = i), (i = Ve));
                var o = this,
                    a = function () {
                        var u = Oe,
                            d = o.selector,
                            f;
                        return (
                            u && u !== o && u.data.push(o),
                            s && (o.selector = Wo(s)),
                            (Oe = o),
                            (f = r.apply(o, arguments)),
                            Ve(f) && o._r.push(f),
                            (Oe = u),
                            (o.selector = d),
                            (o.isReverted = !1),
                            f
                        );
                    };
                return (
                    (o.last = a),
                    i === Ve
                        ? a(o, function (l) {
                              return o.add(null, l);
                          })
                        : i
                        ? (o[i] = a)
                        : a
                );
            }),
            (e.ignore = function (i) {
                var r = Oe;
                (Oe = null), i(this), (Oe = r);
            }),
            (e.getTweens = function () {
                var i = [];
                return (
                    this.data.forEach(function (r) {
                        return r instanceof n
                            ? i.push.apply(i, r.getTweens())
                            : r instanceof Ue &&
                                  !(r.parent && r.parent.data === "nested") &&
                                  i.push(r);
                    }),
                    i
                );
            }),
            (e.clear = function () {
                this._r.length = this.data.length = 0;
            }),
            (e.kill = function (i, r) {
                var s = this;
                if (
                    (i
                        ? (function () {
                              for (
                                  var a = s.getTweens(), l = s.data.length, u;
                                  l--;

                              )
                                  (u = s.data[l]),
                                      u.data === "isFlip" &&
                                          (u.revert(),
                                          u
                                              .getChildren(!0, !0, !1)
                                              .forEach(function (d) {
                                                  return a.splice(
                                                      a.indexOf(d),
                                                      1
                                                  );
                                              }));
                              for (
                                  a
                                      .map(function (d) {
                                          return {
                                              g:
                                                  d._dur ||
                                                  d._delay ||
                                                  (d._sat &&
                                                      !d._sat.vars
                                                          .immediateRender)
                                                      ? d.globalTime(0)
                                                      : -1 / 0,
                                              t: d,
                                          };
                                      })
                                      .sort(function (d, f) {
                                          return f.g - d.g || -1 / 0;
                                      })
                                      .forEach(function (d) {
                                          return d.t.revert(i);
                                      }),
                                      l = s.data.length;
                                  l--;

                              )
                                  (u = s.data[l]),
                                      u instanceof Mt
                                          ? u.data !== "nested" &&
                                            (u.scrollTrigger &&
                                                u.scrollTrigger.revert(),
                                            u.kill())
                                          : !(u instanceof Ue) &&
                                            u.revert &&
                                            u.revert(i);
                              s._r.forEach(function (d) {
                                  return d(i, s);
                              }),
                                  (s.isReverted = !0);
                          })()
                        : this.data.forEach(function (a) {
                              return a.kill && a.kill();
                          }),
                    this.clear(),
                    r)
                )
                    for (var o = Pr.length; o--; )
                        Pr[o].id === this.id && Pr.splice(o, 1);
            }),
            (e.revert = function (i) {
                this.kill(i || {});
            }),
            n
        );
    })(),
    Id = (function () {
        function n(t) {
            (this.contexts = []), (this.scope = t), Oe && Oe.data.push(this);
        }
        var e = n.prototype;
        return (
            (e.add = function (i, r, s) {
                Ai(i) || (i = { matches: i });
                var o = new Fc(0, s || this.scope),
                    a = (o.conditions = {}),
                    l,
                    u,
                    d;
                Oe && !o.selector && (o.selector = Oe.selector),
                    this.contexts.push(o),
                    (r = o.add("onMatch", r)),
                    (o.queries = i);
                for (u in i)
                    u === "all"
                        ? (d = 1)
                        : ((l = Ci.matchMedia(i[u])),
                          l &&
                              (Pr.indexOf(o) < 0 && Pr.push(o),
                              (a[u] = l.matches) && (d = 1),
                              l.addListener
                                  ? l.addListener(Zo)
                                  : l.addEventListener("change", Zo)));
                return (
                    d &&
                        r(o, function (f) {
                            return o.add(null, f);
                        }),
                    this
                );
            }),
            (e.revert = function (i) {
                this.kill(i || {});
            }),
            (e.kill = function (i) {
                this.contexts.forEach(function (r) {
                    return r.kill(i, !0);
                });
            }),
            n
        );
    })(),
    Xs = {
        registerPlugin: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
            t.forEach(function (r) {
                return Tc(r);
            });
        },
        timeline: function (e) {
            return new Mt(e);
        },
        getTweensOf: function (e, t) {
            return Re.getTweensOf(e, t);
        },
        getProperty: function (e, t, i, r) {
            ot(e) && (e = li(e)[0]);
            var s = Sr(e || {}).get,
                o = i ? uc : cc;
            return (
                i === "native" && (i = ""),
                e &&
                    (t
                        ? o(((qt[t] && qt[t].get) || s)(e, t, i, r))
                        : function (a, l, u) {
                              return o(((qt[a] && qt[a].get) || s)(e, a, l, u));
                          })
            );
        },
        quickSetter: function (e, t, i) {
            if (((e = li(e)), e.length > 1)) {
                var r = e.map(function (d) {
                        return Ft.quickSetter(d, t, i);
                    }),
                    s = r.length;
                return function (d) {
                    for (var f = s; f--; ) r[f](d);
                };
            }
            e = e[0] || {};
            var o = qt[t],
                a = Sr(e),
                l = (a.harness && (a.harness.aliases || {})[t]) || t,
                u = o
                    ? function (d) {
                          var f = new o();
                          (Kr._pt = 0),
                              f.init(e, i ? d + i : d, Kr, 0, [e]),
                              f.render(1, f),
                              Kr._pt && Ra(1, Kr);
                      }
                    : a.set(e, l);
            return o
                ? u
                : function (d) {
                      return u(e, l, i ? d + i : d, a, 1);
                  };
        },
        quickTo: function (e, t, i) {
            var r,
                s = Ft.to(
                    e,
                    Ir(
                        ((r = {}), (r[t] = "+=0.1"), (r.paused = !0), r),
                        i || {}
                    )
                ),
                o = function (l, u, d) {
                    return s.resetTo(t, l, u, d);
                };
            return (o.tween = s), o;
        },
        isTweening: function (e) {
            return Re.getTweensOf(e, !0).length > 0;
        },
        defaults: function (e) {
            return (
                e && e.ease && (e.ease = Cr(e.ease, ln.ease)), tl(ln, e || {})
            );
        },
        config: function (e) {
            return tl(Qt, e || {});
        },
        registerEffect: function (e) {
            var t = e.name,
                i = e.effect,
                r = e.plugins,
                s = e.defaults,
                o = e.extendTimeline;
            (r || "").split(",").forEach(function (a) {
                return (
                    a &&
                    !qt[a] &&
                    !Jt[a] &&
                    Kn(t + " effect requires " + a + " plugin.")
                );
            }),
                (fo[t] = function (a, l, u) {
                    return i(li(a), ui(l || {}, s), u);
                }),
                o &&
                    (Mt.prototype[t] = function (a, l, u) {
                        return this.add(
                            fo[t](a, Ai(l) ? l : (u = l) && {}, this),
                            u
                        );
                    });
        },
        registerEase: function (e, t) {
            pe[e] = Cr(t);
        },
        parseEase: function (e, t) {
            return arguments.length ? Cr(e, t) : pe;
        },
        getById: function (e) {
            return Re.getById(e);
        },
        exportRoot: function (e, t) {
            e === void 0 && (e = {});
            var i = new Mt(e),
                r,
                s;
            for (
                i.smoothChildTiming = It(e.smoothChildTiming),
                    Re.remove(i),
                    i._dp = 0,
                    i._time = i._tTime = Re._time,
                    r = Re._first;
                r;

            )
                (s = r._next),
                    (t ||
                        !(
                            !r._dur &&
                            r instanceof Ue &&
                            r.vars.onComplete === r._targets[0]
                        )) &&
                        Mi(i, r, r._start - r._delay),
                    (r = s);
            return Mi(Re, i, 0), i;
        },
        context: function (e, t) {
            return e ? new Fc(e, t) : Oe;
        },
        matchMedia: function (e) {
            return new Id(e);
        },
        matchMediaRefresh: function () {
            return (
                Pr.forEach(function (e) {
                    var t = e.conditions,
                        i,
                        r;
                    for (r in t) t[r] && ((t[r] = !1), (i = 1));
                    i && e.revert();
                }) || Zo()
            );
        },
        addEventListener: function (e, t) {
            var i = ks[e] || (ks[e] = []);
            ~i.indexOf(t) || i.push(t);
        },
        removeEventListener: function (e, t) {
            var i = ks[e],
                r = i && i.indexOf(t);
            r >= 0 && i.splice(r, 1);
        },
        utils: {
            wrap: fd,
            wrapYoyo: pd,
            distribute: _c,
            random: yc,
            snap: vc,
            normalize: dd,
            getUnit: yt,
            clamp: ad,
            splitColor: Sc,
            toArray: li,
            selector: Wo,
            mapRange: xc,
            pipe: cd,
            unitize: ud,
            interpolate: hd,
            shuffle: mc,
        },
        install: nc,
        effects: fo,
        ticker: Wt,
        updateRoot: Mt.updateRoot,
        plugins: qt,
        globalTimeline: Re,
        core: {
            PropTween: zt,
            globals: sc,
            Tween: Ue,
            Timeline: Mt,
            Animation: es,
            getCache: Sr,
            _removeLinkedListItem: no,
            reverting: function () {
                return wt;
            },
            context: function (e) {
                return e && Oe && (Oe.data.push(e), (e._ctx = Oe)), Oe;
            },
            suppressOverwrites: function (e) {
                return (Ta = e);
            },
        },
    };
Rt("to,from,fromTo,delayedCall,set,killTweensOf", function (n) {
    return (Xs[n] = Ue[n]);
});
Wt.add(Mt.updateRoot);
Kr = Xs.to({}, { duration: 0 });
var Rd = function (e, t) {
        for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
            i = i._next;
        return i;
    },
    zd = function (e, t) {
        var i = e._targets,
            r,
            s,
            o;
        for (r in t)
            for (s = i.length; s--; )
                (o = e._ptLookup[s][r]),
                    o &&
                        (o = o.d) &&
                        (o._pt && (o = Rd(o, r)),
                        o && o.modifier && o.modifier(t[r], e, i[s], r));
    },
    _o = function (e, t) {
        return {
            name: e,
            rawVars: 1,
            init: function (r, s, o) {
                o._onInit = function (a) {
                    var l, u;
                    if (
                        (ot(s) &&
                            ((l = {}),
                            Rt(s, function (d) {
                                return (l[d] = 1);
                            }),
                            (s = l)),
                        t)
                    ) {
                        l = {};
                        for (u in s) l[u] = t(s[u]);
                        s = l;
                    }
                    zd(a, s);
                };
            },
        };
    },
    Ft =
        Xs.registerPlugin(
            {
                name: "attr",
                init: function (e, t, i, r, s) {
                    var o, a, l;
                    this.tween = i;
                    for (o in t)
                        (l = e.getAttribute(o) || ""),
                            (a = this.add(
                                e,
                                "setAttribute",
                                (l || 0) + "",
                                t[o],
                                r,
                                s,
                                0,
                                0,
                                o
                            )),
                            (a.op = o),
                            (a.b = l),
                            this._props.push(o);
                },
                render: function (e, t) {
                    for (var i = t._pt; i; )
                        wt ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d),
                            (i = i._next);
                },
            },
            {
                name: "endArray",
                init: function (e, t) {
                    for (var i = t.length; i--; )
                        this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
                },
            },
            _o("roundProps", Uo),
            _o("modifiers"),
            _o("snap", vc)
        ) || Xs;
Ue.version = Mt.version = Ft.version = "3.12.5";
rc = 1;
Ea() && dn();
pe.Power0;
pe.Power1;
pe.Power2;
pe.Power3;
pe.Power4;
pe.Linear;
pe.Quad;
pe.Cubic;
pe.Quart;
pe.Quint;
pe.Strong;
pe.Elastic;
pe.Back;
pe.SteppedEase;
pe.Bounce;
pe.Sine;
pe.Expo;
pe.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var al,
    Ji,
    Jr,
    za,
    br,
    ll,
    Na,
    Nd = function () {
        return typeof window < "u";
    },
    Hi = {},
    vr = 180 / Math.PI,
    en = Math.PI / 180,
    Vr = Math.atan2,
    cl = 1e8,
    Fa = /([A-Z])/g,
    Fd = /(left|right|width|margin|padding|x)/i,
    Bd = /[\s,\(]\S/,
    ki = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity",
    },
    Qo = function (e, t) {
        return t.set(
            t.t,
            t.p,
            Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
            t
        );
    },
    $d = function (e, t) {
        return t.set(
            t.t,
            t.p,
            e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
            t
        );
    },
    Vd = function (e, t) {
        return t.set(
            t.t,
            t.p,
            e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
            t
        );
    },
    Gd = function (e, t) {
        var i = t.s + t.c * e;
        t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
    },
    Bc = function (e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    $c = function (e, t) {
        return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
    },
    Yd = function (e, t, i) {
        return (e.style[t] = i);
    },
    Hd = function (e, t, i) {
        return e.style.setProperty(t, i);
    },
    Xd = function (e, t, i) {
        return (e._gsap[t] = i);
    },
    qd = function (e, t, i) {
        return (e._gsap.scaleX = e._gsap.scaleY = i);
    },
    jd = function (e, t, i, r, s) {
        var o = e._gsap;
        (o.scaleX = o.scaleY = i), o.renderTransform(s, o);
    },
    Wd = function (e, t, i, r, s) {
        var o = e._gsap;
        (o[t] = i), o.renderTransform(s, o);
    },
    ze = "transform",
    Nt = ze + "Origin",
    Ud = function n(e, t) {
        var i = this,
            r = this.target,
            s = r.style,
            o = r._gsap;
        if (e in Hi && s) {
            if (((this.tfm = this.tfm || {}), e !== "transform"))
                (e = ki[e] || e),
                    ~e.indexOf(",")
                        ? e.split(",").forEach(function (a) {
                              return (i.tfm[a] = zi(r, a));
                          })
                        : (this.tfm[e] = o.x ? o[e] : zi(r, e)),
                    e === Nt && (this.tfm.zOrigin = o.zOrigin);
            else
                return ki.transform.split(",").forEach(function (a) {
                    return n.call(i, a, t);
                });
            if (this.props.indexOf(ze) >= 0) return;
            o.svg &&
                ((this.svgo = r.getAttribute("data-svg-origin")),
                this.props.push(Nt, t, "")),
                (e = ze);
        }
        (s || t) && this.props.push(e, t, s[e]);
    },
    Vc = function (e) {
        e.translate &&
            (e.removeProperty("translate"),
            e.removeProperty("scale"),
            e.removeProperty("rotate"));
    },
    Kd = function () {
        var e = this.props,
            t = this.target,
            i = t.style,
            r = t._gsap,
            s,
            o;
        for (s = 0; s < e.length; s += 3)
            e[s + 1]
                ? (t[e[s]] = e[s + 2])
                : e[s + 2]
                ? (i[e[s]] = e[s + 2])
                : i.removeProperty(
                      e[s].substr(0, 2) === "--"
                          ? e[s]
                          : e[s].replace(Fa, "-$1").toLowerCase()
                  );
        if (this.tfm) {
            for (o in this.tfm) r[o] = this.tfm[o];
            r.svg &&
                (r.renderTransform(),
                t.setAttribute("data-svg-origin", this.svgo || "")),
                (s = Na()),
                (!s || !s.isStart) &&
                    !i[ze] &&
                    (Vc(i),
                    r.zOrigin &&
                        i[Nt] &&
                        ((i[Nt] += " " + r.zOrigin + "px"),
                        (r.zOrigin = 0),
                        r.renderTransform()),
                    (r.uncache = 1));
        }
    },
    Gc = function (e, t) {
        var i = { target: e, props: [], revert: Kd, save: Ud };
        return (
            e._gsap || Ft.core.getCache(e),
            t &&
                t.split(",").forEach(function (r) {
                    return i.save(r);
                }),
            i
        );
    },
    Yc,
    Jo = function (e, t) {
        var i = Ji.createElementNS
            ? Ji.createElementNS(
                  (t || "http://www.w3.org/1999/xhtml").replace(
                      /^https/,
                      "http"
                  ),
                  e
              )
            : Ji.createElement(e);
        return i && i.style ? i : Ji.createElement(e);
    },
    Di = function n(e, t, i) {
        var r = getComputedStyle(e);
        return (
            r[t] ||
            r.getPropertyValue(t.replace(Fa, "-$1").toLowerCase()) ||
            r.getPropertyValue(t) ||
            (!i && n(e, fn(t) || t, 1)) ||
            ""
        );
    },
    ul = "O,Moz,ms,Ms,Webkit".split(","),
    fn = function (e, t, i) {
        var r = t || br,
            s = r.style,
            o = 5;
        if (e in s && !i) return e;
        for (
            e = e.charAt(0).toUpperCase() + e.substr(1);
            o-- && !(ul[o] + e in s);

        );
        return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? ul[o] : "") + e;
    },
    ea = function () {
        Nd() &&
            window.document &&
            ((al = window),
            (Ji = al.document),
            (Jr = Ji.documentElement),
            (br = Jo("div") || { style: {} }),
            Jo("div"),
            (ze = fn(ze)),
            (Nt = ze + "Origin"),
            (br.style.cssText =
                "border-width:0;line-height:0;position:absolute;padding:0"),
            (Yc = !!fn("perspective")),
            (Na = Ft.core.reverting),
            (za = 1));
    },
    vo = function n(e) {
        var t = Jo(
                "svg",
                (this.ownerSVGElement &&
                    this.ownerSVGElement.getAttribute("xmlns")) ||
                    "http://www.w3.org/2000/svg"
            ),
            i = this.parentNode,
            r = this.nextSibling,
            s = this.style.cssText,
            o;
        if (
            (Jr.appendChild(t),
            t.appendChild(this),
            (this.style.display = "block"),
            e)
        )
            try {
                (o = this.getBBox()),
                    (this._gsapBBox = this.getBBox),
                    (this.getBBox = n);
            } catch {}
        else this._gsapBBox && (o = this._gsapBBox());
        return (
            i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
            Jr.removeChild(t),
            (this.style.cssText = s),
            o
        );
    },
    dl = function (e, t) {
        for (var i = t.length; i--; )
            if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
    },
    Hc = function (e) {
        var t;
        try {
            t = e.getBBox();
        } catch {
            t = vo.call(e, !0);
        }
        return (
            (t && (t.width || t.height)) ||
                e.getBBox === vo ||
                (t = vo.call(e, !0)),
            t && !t.width && !t.x && !t.y
                ? {
                      x: +dl(e, ["x", "cx", "x1"]) || 0,
                      y: +dl(e, ["y", "cy", "y1"]) || 0,
                      width: 0,
                      height: 0,
                  }
                : t
        );
    },
    Xc = function (e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Hc(e));
    },
    Rr = function (e, t) {
        if (t) {
            var i = e.style,
                r;
            t in Hi && t !== Nt && (t = ze),
                i.removeProperty
                    ? ((r = t.substr(0, 2)),
                      (r === "ms" || t.substr(0, 6) === "webkit") &&
                          (t = "-" + t),
                      i.removeProperty(
                          r === "--" ? t : t.replace(Fa, "-$1").toLowerCase()
                      ))
                    : i.removeAttribute(t);
        }
    },
    er = function (e, t, i, r, s, o) {
        var a = new zt(e._pt, t, i, 0, 1, o ? $c : Bc);
        return (e._pt = a), (a.b = r), (a.e = s), e._props.push(i), a;
    },
    fl = { deg: 1, rad: 1, turn: 1 },
    Zd = { grid: 1, flex: 1 },
    cr = function n(e, t, i, r) {
        var s = parseFloat(i) || 0,
            o = (i + "").trim().substr((s + "").length) || "px",
            a = br.style,
            l = Fd.test(t),
            u = e.tagName.toLowerCase() === "svg",
            d = (u ? "client" : "offset") + (l ? "Width" : "Height"),
            f = 100,
            p = r === "px",
            c = r === "%",
            g,
            h,
            y,
            m;
        if (r === o || !s || fl[r] || fl[o]) return s;
        if (
            (o !== "px" && !p && (s = n(e, t, i, "px")),
            (m = e.getCTM && Xc(e)),
            (c || o === "%") && (Hi[t] || ~t.indexOf("adius")))
        )
            return (
                (g = m ? e.getBBox()[l ? "width" : "height"] : e[d]),
                He(c ? (s / g) * f : (s / 100) * g)
            );
        if (
            ((a[l ? "width" : "height"] = f + (p ? o : r)),
            (h =
                ~t.indexOf("adius") || (r === "em" && e.appendChild && !u)
                    ? e
                    : e.parentNode),
            m && (h = (e.ownerSVGElement || {}).parentNode),
            (!h || h === Ji || !h.appendChild) && (h = Ji.body),
            (y = h._gsap),
            y && c && y.width && l && y.time === Wt.time && !y.uncache)
        )
            return He((s / y.width) * f);
        if (c && (t === "height" || t === "width")) {
            var _ = e.style[t];
            (e.style[t] = f + r), (g = e[d]), _ ? (e.style[t] = _) : Rr(e, t);
        } else
            (c || o === "%") &&
                !Zd[Di(h, "display")] &&
                (a.position = Di(e, "position")),
                h === e && (a.position = "static"),
                h.appendChild(br),
                (g = br[d]),
                h.removeChild(br),
                (a.position = "absolute");
        return (
            l && c && ((y = Sr(h)), (y.time = Wt.time), (y.width = h[d])),
            He(p ? (g * s) / f : g && s ? (f / g) * s : 0)
        );
    },
    zi = function (e, t, i, r) {
        var s;
        return (
            za || ea(),
            t in ki &&
                t !== "transform" &&
                ((t = ki[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
            Hi[t] && t !== "transform"
                ? ((s = is(e, r)),
                  (s =
                      t !== "transformOrigin"
                          ? s[t]
                          : s.svg
                          ? s.origin
                          : js(Di(e, Nt)) + " " + s.zOrigin + "px"))
                : ((s = e.style[t]),
                  (!s || s === "auto" || r || ~(s + "").indexOf("calc(")) &&
                      (s =
                          (qs[t] && qs[t](e, t, i)) ||
                          Di(e, t) ||
                          ac(e, t) ||
                          (t === "opacity" ? 1 : 0))),
            i && !~(s + "").trim().indexOf(" ") ? cr(e, t, s, i) + i : s
        );
    },
    Qd = function (e, t, i, r) {
        if (!i || i === "none") {
            var s = fn(t, e, 1),
                o = s && Di(e, s, 1);
            o && o !== i
                ? ((t = s), (i = o))
                : t === "borderColor" && (i = Di(e, "borderTopColor"));
        }
        var a = new zt(this._pt, e.style, t, 0, 1, zc),
            l = 0,
            u = 0,
            d,
            f,
            p,
            c,
            g,
            h,
            y,
            m,
            _,
            v,
            w,
            x;
        if (
            ((a.b = i),
            (a.e = r),
            (i += ""),
            (r += ""),
            r === "auto" &&
                ((h = e.style[t]),
                (e.style[t] = r),
                (r = Di(e, t) || r),
                h ? (e.style[t] = h) : Rr(e, t)),
            (d = [i, r]),
            Cc(d),
            (i = d[0]),
            (r = d[1]),
            (p = i.match(Ur) || []),
            (x = r.match(Ur) || []),
            x.length)
        ) {
            for (; (f = Ur.exec(r)); )
                (y = f[0]),
                    (_ = r.substring(l, f.index)),
                    g
                        ? (g = (g + 1) % 5)
                        : (_.substr(-5) === "rgba(" ||
                              _.substr(-5) === "hsla(") &&
                          (g = 1),
                    y !== (h = p[u++] || "") &&
                        ((c = parseFloat(h) || 0),
                        (w = h.substr((c + "").length)),
                        y.charAt(1) === "=" && (y = Qr(c, y) + w),
                        (m = parseFloat(y)),
                        (v = y.substr((m + "").length)),
                        (l = Ur.lastIndex - v.length),
                        v ||
                            ((v = v || Qt.units[t] || w),
                            l === r.length && ((r += v), (a.e += v))),
                        w !== v && (c = cr(e, t, h, v) || 0),
                        (a._pt = {
                            _next: a._pt,
                            p: _ || u === 1 ? _ : ",",
                            s: c,
                            c: m - c,
                            m: (g && g < 4) || t === "zIndex" ? Math.round : 0,
                        }));
            a.c = l < r.length ? r.substring(l, r.length) : "";
        } else a.r = t === "display" && r === "none" ? $c : Bc;
        return tc.test(r) && (a.e = 0), (this._pt = a), a;
    },
    pl = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%",
    },
    Jd = function (e) {
        var t = e.split(" "),
            i = t[0],
            r = t[1] || "50%";
        return (
            (i === "top" || i === "bottom" || r === "left" || r === "right") &&
                ((e = i), (i = r), (r = e)),
            (t[0] = pl[i] || i),
            (t[1] = pl[r] || r),
            t.join(" ")
        );
    },
    ef = function (e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
            var i = t.t,
                r = i.style,
                s = t.u,
                o = i._gsap,
                a,
                l,
                u;
            if (s === "all" || s === !0) (r.cssText = ""), (l = 1);
            else
                for (s = s.split(","), u = s.length; --u > -1; )
                    (a = s[u]),
                        Hi[a] &&
                            ((l = 1), (a = a === "transformOrigin" ? Nt : ze)),
                        Rr(i, a);
            l &&
                (Rr(i, ze),
                o &&
                    (o.svg && i.removeAttribute("transform"),
                    is(i, 1),
                    (o.uncache = 1),
                    Vc(r)));
        }
    },
    qs = {
        clearProps: function (e, t, i, r, s) {
            if (s.data !== "isFromStart") {
                var o = (e._pt = new zt(e._pt, t, i, 0, 0, ef));
                return (
                    (o.u = r), (o.pr = -10), (o.tween = s), e._props.push(i), 1
                );
            }
        },
    },
    ts = [1, 0, 0, 1, 0, 0],
    qc = {},
    jc = function (e) {
        return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    hl = function (e) {
        var t = Di(e, ze);
        return jc(t) ? ts : t.substr(7).match(ec).map(He);
    },
    Ba = function (e, t) {
        var i = e._gsap || Sr(e),
            r = e.style,
            s = hl(e),
            o,
            a,
            l,
            u;
        return i.svg && e.getAttribute("transform")
            ? ((l = e.transform.baseVal.consolidate().matrix),
              (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
              s.join(",") === "1,0,0,1,0,0" ? ts : s)
            : (s === ts &&
                  !e.offsetParent &&
                  e !== Jr &&
                  !i.svg &&
                  ((l = r.display),
                  (r.display = "block"),
                  (o = e.parentNode),
                  (!o || !e.offsetParent) &&
                      ((u = 1), (a = e.nextElementSibling), Jr.appendChild(e)),
                  (s = hl(e)),
                  l ? (r.display = l) : Rr(e, "display"),
                  u &&
                      (a
                          ? o.insertBefore(e, a)
                          : o
                          ? o.appendChild(e)
                          : Jr.removeChild(e))),
              t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
    },
    ta = function (e, t, i, r, s, o) {
        var a = e._gsap,
            l = s || Ba(e, !0),
            u = a.xOrigin || 0,
            d = a.yOrigin || 0,
            f = a.xOffset || 0,
            p = a.yOffset || 0,
            c = l[0],
            g = l[1],
            h = l[2],
            y = l[3],
            m = l[4],
            _ = l[5],
            v = t.split(" "),
            w = parseFloat(v[0]) || 0,
            x = parseFloat(v[1]) || 0,
            O,
            k,
            E,
            I;
        i
            ? l !== ts &&
              (k = c * y - g * h) &&
              ((E = w * (y / k) + x * (-h / k) + (h * _ - y * m) / k),
              (I = w * (-g / k) + x * (c / k) - (c * _ - g * m) / k),
              (w = E),
              (x = I))
            : ((O = Hc(e)),
              (w = O.x + (~v[0].indexOf("%") ? (w / 100) * O.width : w)),
              (x =
                  O.y +
                  (~(v[1] || v[0]).indexOf("%") ? (x / 100) * O.height : x))),
            r || (r !== !1 && a.smooth)
                ? ((m = w - u),
                  (_ = x - d),
                  (a.xOffset = f + (m * c + _ * h) - m),
                  (a.yOffset = p + (m * g + _ * y) - _))
                : (a.xOffset = a.yOffset = 0),
            (a.xOrigin = w),
            (a.yOrigin = x),
            (a.smooth = !!r),
            (a.origin = t),
            (a.originIsAbsolute = !!i),
            (e.style[Nt] = "0px 0px"),
            o &&
                (er(o, a, "xOrigin", u, w),
                er(o, a, "yOrigin", d, x),
                er(o, a, "xOffset", f, a.xOffset),
                er(o, a, "yOffset", p, a.yOffset)),
            e.setAttribute("data-svg-origin", w + " " + x);
    },
    is = function (e, t) {
        var i = e._gsap || new Oc(e);
        if ("x" in i && !t && !i.uncache) return i;
        var r = e.style,
            s = i.scaleX < 0,
            o = "px",
            a = "deg",
            l = getComputedStyle(e),
            u = Di(e, Nt) || "0",
            d,
            f,
            p,
            c,
            g,
            h,
            y,
            m,
            _,
            v,
            w,
            x,
            O,
            k,
            E,
            I,
            P,
            R,
            T,
            M,
            z,
            $,
            V,
            Y,
            U,
            K,
            C,
            Z,
            re,
            _e,
            te,
            Ne;
        return (
            (d = f = p = h = y = m = _ = v = w = 0),
            (c = g = 1),
            (i.svg = !!(e.getCTM && Xc(e))),
            l.translate &&
                ((l.translate !== "none" ||
                    l.scale !== "none" ||
                    l.rotate !== "none") &&
                    (r[ze] =
                        (l.translate !== "none"
                            ? "translate3d(" +
                              (l.translate + " 0 0")
                                  .split(" ")
                                  .slice(0, 3)
                                  .join(", ") +
                              ") "
                            : "") +
                        (l.rotate !== "none"
                            ? "rotate(" + l.rotate + ") "
                            : "") +
                        (l.scale !== "none"
                            ? "scale(" + l.scale.split(" ").join(",") + ") "
                            : "") +
                        (l[ze] !== "none" ? l[ze] : "")),
                (r.scale = r.rotate = r.translate = "none")),
            (k = Ba(e, i.svg)),
            i.svg &&
                (i.uncache
                    ? ((U = e.getBBox()),
                      (u = i.xOrigin - U.x + "px " + (i.yOrigin - U.y) + "px"),
                      (Y = ""))
                    : (Y = !t && e.getAttribute("data-svg-origin")),
                ta(e, Y || u, !!Y || i.originIsAbsolute, i.smooth !== !1, k)),
            (x = i.xOrigin || 0),
            (O = i.yOrigin || 0),
            k !== ts &&
                ((R = k[0]),
                (T = k[1]),
                (M = k[2]),
                (z = k[3]),
                (d = $ = k[4]),
                (f = V = k[5]),
                k.length === 6
                    ? ((c = Math.sqrt(R * R + T * T)),
                      (g = Math.sqrt(z * z + M * M)),
                      (h = R || T ? Vr(T, R) * vr : 0),
                      (_ = M || z ? Vr(M, z) * vr + h : 0),
                      _ && (g *= Math.abs(Math.cos(_ * en))),
                      i.svg &&
                          ((d -= x - (x * R + O * M)),
                          (f -= O - (x * T + O * z))))
                    : ((Ne = k[6]),
                      (_e = k[7]),
                      (C = k[8]),
                      (Z = k[9]),
                      (re = k[10]),
                      (te = k[11]),
                      (d = k[12]),
                      (f = k[13]),
                      (p = k[14]),
                      (E = Vr(Ne, re)),
                      (y = E * vr),
                      E &&
                          ((I = Math.cos(-E)),
                          (P = Math.sin(-E)),
                          (Y = $ * I + C * P),
                          (U = V * I + Z * P),
                          (K = Ne * I + re * P),
                          (C = $ * -P + C * I),
                          (Z = V * -P + Z * I),
                          (re = Ne * -P + re * I),
                          (te = _e * -P + te * I),
                          ($ = Y),
                          (V = U),
                          (Ne = K)),
                      (E = Vr(-M, re)),
                      (m = E * vr),
                      E &&
                          ((I = Math.cos(-E)),
                          (P = Math.sin(-E)),
                          (Y = R * I - C * P),
                          (U = T * I - Z * P),
                          (K = M * I - re * P),
                          (te = z * P + te * I),
                          (R = Y),
                          (T = U),
                          (M = K)),
                      (E = Vr(T, R)),
                      (h = E * vr),
                      E &&
                          ((I = Math.cos(E)),
                          (P = Math.sin(E)),
                          (Y = R * I + T * P),
                          (U = $ * I + V * P),
                          (T = T * I - R * P),
                          (V = V * I - $ * P),
                          (R = Y),
                          ($ = U)),
                      y &&
                          Math.abs(y) + Math.abs(h) > 359.9 &&
                          ((y = h = 0), (m = 180 - m)),
                      (c = He(Math.sqrt(R * R + T * T + M * M))),
                      (g = He(Math.sqrt(V * V + Ne * Ne))),
                      (E = Vr($, V)),
                      (_ = Math.abs(E) > 2e-4 ? E * vr : 0),
                      (w = te ? 1 / (te < 0 ? -te : te) : 0)),
                i.svg &&
                    ((Y = e.getAttribute("transform")),
                    (i.forceCSS =
                        e.setAttribute("transform", "") || !jc(Di(e, ze))),
                    Y && e.setAttribute("transform", Y))),
            Math.abs(_) > 90 &&
                Math.abs(_) < 270 &&
                (s
                    ? ((c *= -1),
                      (_ += h <= 0 ? 180 : -180),
                      (h += h <= 0 ? 180 : -180))
                    : ((g *= -1), (_ += _ <= 0 ? 180 : -180))),
            (t = t || i.uncache),
            (i.x =
                d -
                ((i.xPercent =
                    d &&
                    ((!t && i.xPercent) ||
                        (Math.round(e.offsetWidth / 2) === Math.round(-d)
                            ? -50
                            : 0)))
                    ? (e.offsetWidth * i.xPercent) / 100
                    : 0) +
                o),
            (i.y =
                f -
                ((i.yPercent =
                    f &&
                    ((!t && i.yPercent) ||
                        (Math.round(e.offsetHeight / 2) === Math.round(-f)
                            ? -50
                            : 0)))
                    ? (e.offsetHeight * i.yPercent) / 100
                    : 0) +
                o),
            (i.z = p + o),
            (i.scaleX = He(c)),
            (i.scaleY = He(g)),
            (i.rotation = He(h) + a),
            (i.rotationX = He(y) + a),
            (i.rotationY = He(m) + a),
            (i.skewX = _ + a),
            (i.skewY = v + a),
            (i.transformPerspective = w + o),
            (i.zOrigin =
                parseFloat(u.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
                (r[Nt] = js(u)),
            (i.xOffset = i.yOffset = 0),
            (i.force3D = Qt.force3D),
            (i.renderTransform = i.svg ? rf : Yc ? Wc : tf),
            (i.uncache = 0),
            i
        );
    },
    js = function (e) {
        return (e = e.split(" "))[0] + " " + e[1];
    },
    yo = function (e, t, i) {
        var r = yt(t);
        return He(parseFloat(t) + parseFloat(cr(e, "x", i + "px", r))) + r;
    },
    tf = function (e, t) {
        (t.z = "0px"),
            (t.rotationY = t.rotationX = "0deg"),
            (t.force3D = 0),
            Wc(e, t);
    },
    hr = "0deg",
    yn = "0px",
    gr = ") ",
    Wc = function (e, t) {
        var i = t || this,
            r = i.xPercent,
            s = i.yPercent,
            o = i.x,
            a = i.y,
            l = i.z,
            u = i.rotation,
            d = i.rotationY,
            f = i.rotationX,
            p = i.skewX,
            c = i.skewY,
            g = i.scaleX,
            h = i.scaleY,
            y = i.transformPerspective,
            m = i.force3D,
            _ = i.target,
            v = i.zOrigin,
            w = "",
            x = (m === "auto" && e && e !== 1) || m === !0;
        if (v && (f !== hr || d !== hr)) {
            var O = parseFloat(d) * en,
                k = Math.sin(O),
                E = Math.cos(O),
                I;
            (O = parseFloat(f) * en),
                (I = Math.cos(O)),
                (o = yo(_, o, k * I * -v)),
                (a = yo(_, a, -Math.sin(O) * -v)),
                (l = yo(_, l, E * I * -v + v));
        }
        y !== yn && (w += "perspective(" + y + gr),
            (r || s) && (w += "translate(" + r + "%, " + s + "%) "),
            (x || o !== yn || a !== yn || l !== yn) &&
                (w +=
                    l !== yn || x
                        ? "translate3d(" + o + ", " + a + ", " + l + ") "
                        : "translate(" + o + ", " + a + gr),
            u !== hr && (w += "rotate(" + u + gr),
            d !== hr && (w += "rotateY(" + d + gr),
            f !== hr && (w += "rotateX(" + f + gr),
            (p !== hr || c !== hr) && (w += "skew(" + p + ", " + c + gr),
            (g !== 1 || h !== 1) && (w += "scale(" + g + ", " + h + gr),
            (_.style[ze] = w || "translate(0, 0)");
    },
    rf = function (e, t) {
        var i = t || this,
            r = i.xPercent,
            s = i.yPercent,
            o = i.x,
            a = i.y,
            l = i.rotation,
            u = i.skewX,
            d = i.skewY,
            f = i.scaleX,
            p = i.scaleY,
            c = i.target,
            g = i.xOrigin,
            h = i.yOrigin,
            y = i.xOffset,
            m = i.yOffset,
            _ = i.forceCSS,
            v = parseFloat(o),
            w = parseFloat(a),
            x,
            O,
            k,
            E,
            I;
        (l = parseFloat(l)),
            (u = parseFloat(u)),
            (d = parseFloat(d)),
            d && ((d = parseFloat(d)), (u += d), (l += d)),
            l || u
                ? ((l *= en),
                  (u *= en),
                  (x = Math.cos(l) * f),
                  (O = Math.sin(l) * f),
                  (k = Math.sin(l - u) * -p),
                  (E = Math.cos(l - u) * p),
                  u &&
                      ((d *= en),
                      (I = Math.tan(u - d)),
                      (I = Math.sqrt(1 + I * I)),
                      (k *= I),
                      (E *= I),
                      d &&
                          ((I = Math.tan(d)),
                          (I = Math.sqrt(1 + I * I)),
                          (x *= I),
                          (O *= I))),
                  (x = He(x)),
                  (O = He(O)),
                  (k = He(k)),
                  (E = He(E)))
                : ((x = f), (E = p), (O = k = 0)),
            ((v && !~(o + "").indexOf("px")) ||
                (w && !~(a + "").indexOf("px"))) &&
                ((v = cr(c, "x", o, "px")), (w = cr(c, "y", a, "px"))),
            (g || h || y || m) &&
                ((v = He(v + g - (g * x + h * k) + y)),
                (w = He(w + h - (g * O + h * E) + m))),
            (r || s) &&
                ((I = c.getBBox()),
                (v = He(v + (r / 100) * I.width)),
                (w = He(w + (s / 100) * I.height))),
            (I =
                "matrix(" +
                x +
                "," +
                O +
                "," +
                k +
                "," +
                E +
                "," +
                v +
                "," +
                w +
                ")"),
            c.setAttribute("transform", I),
            _ && (c.style[ze] = I);
    },
    nf = function (e, t, i, r, s) {
        var o = 360,
            a = ot(s),
            l = parseFloat(s) * (a && ~s.indexOf("rad") ? vr : 1),
            u = l - r,
            d = r + u + "deg",
            f,
            p;
        return (
            a &&
                ((f = s.split("_")[1]),
                f === "short" &&
                    ((u %= o), u !== u % (o / 2) && (u += u < 0 ? o : -o)),
                f === "cw" && u < 0
                    ? (u = ((u + o * cl) % o) - ~~(u / o) * o)
                    : f === "ccw" &&
                      u > 0 &&
                      (u = ((u - o * cl) % o) - ~~(u / o) * o)),
            (e._pt = p = new zt(e._pt, t, i, r, u, $d)),
            (p.e = d),
            (p.u = "deg"),
            e._props.push(i),
            p
        );
    },
    gl = function (e, t) {
        for (var i in t) e[i] = t[i];
        return e;
    },
    sf = function (e, t, i) {
        var r = gl({}, i._gsap),
            s = "perspective,force3D,transformOrigin,svgOrigin",
            o = i.style,
            a,
            l,
            u,
            d,
            f,
            p,
            c,
            g;
        r.svg
            ? ((u = i.getAttribute("transform")),
              i.setAttribute("transform", ""),
              (o[ze] = t),
              (a = is(i, 1)),
              Rr(i, ze),
              i.setAttribute("transform", u))
            : ((u = getComputedStyle(i)[ze]),
              (o[ze] = t),
              (a = is(i, 1)),
              (o[ze] = u));
        for (l in Hi)
            (u = r[l]),
                (d = a[l]),
                u !== d &&
                    s.indexOf(l) < 0 &&
                    ((c = yt(u)),
                    (g = yt(d)),
                    (f = c !== g ? cr(i, l, u, g) : parseFloat(u)),
                    (p = parseFloat(d)),
                    (e._pt = new zt(e._pt, a, l, f, p - f, Qo)),
                    (e._pt.u = g || 0),
                    e._props.push(l));
        gl(a, r);
    };
Rt("padding,margin,Width,Radius", function (n, e) {
    var t = "Top",
        i = "Right",
        r = "Bottom",
        s = "Left",
        o = (e < 3 ? [t, i, r, s] : [t + s, t + i, r + i, r + s]).map(function (
            a
        ) {
            return e < 2 ? n + a : "border" + a + n;
        });
    qs[e > 1 ? "border" + n : n] = function (a, l, u, d, f) {
        var p, c;
        if (arguments.length < 4)
            return (
                (p = o.map(function (g) {
                    return zi(a, g, u);
                })),
                (c = p.join(" ")),
                c.split(p[0]).length === 5 ? p[0] : c
            );
        (p = (d + "").split(" ")),
            (c = {}),
            o.forEach(function (g, h) {
                return (c[g] = p[h] = p[h] || p[((h - 1) / 2) | 0]);
            }),
            a.init(l, c, f);
    };
});
var Uc = {
    name: "css",
    register: ea,
    targetTest: function (e) {
        return e.style && e.nodeType;
    },
    init: function (e, t, i, r, s) {
        var o = this._props,
            a = e.style,
            l = i.vars.startAt,
            u,
            d,
            f,
            p,
            c,
            g,
            h,
            y,
            m,
            _,
            v,
            w,
            x,
            O,
            k,
            E;
        za || ea(),
            (this.styles = this.styles || Gc(e)),
            (E = this.styles.props),
            (this.tween = i);
        for (h in t)
            if (
                h !== "autoRound" &&
                ((d = t[h]), !(qt[h] && Dc(h, t, i, r, e, s)))
            ) {
                if (
                    ((c = typeof d),
                    (g = qs[h]),
                    c === "function" &&
                        ((d = d.call(i, r, e, s)), (c = typeof d)),
                    c === "string" && ~d.indexOf("random(") && (d = Qn(d)),
                    g)
                )
                    g(this, e, h, d, i) && (k = 1);
                else if (h.substr(0, 2) === "--")
                    (u = (getComputedStyle(e).getPropertyValue(h) + "").trim()),
                        (d += ""),
                        (or.lastIndex = 0),
                        or.test(u) || ((y = yt(u)), (m = yt(d))),
                        m ? y !== m && (u = cr(e, h, u, m) + m) : y && (d += y),
                        this.add(a, "setProperty", u, d, r, s, 0, 0, h),
                        o.push(h),
                        E.push(h, 0, a[h]);
                else if (c !== "undefined") {
                    if (
                        (l && h in l
                            ? ((u =
                                  typeof l[h] == "function"
                                      ? l[h].call(i, r, e, s)
                                      : l[h]),
                              ot(u) && ~u.indexOf("random(") && (u = Qn(u)),
                              yt(u + "") ||
                                  u === "auto" ||
                                  (u += Qt.units[h] || yt(zi(e, h)) || ""),
                              (u + "").charAt(1) === "=" && (u = zi(e, h)))
                            : (u = zi(e, h)),
                        (p = parseFloat(u)),
                        (_ =
                            c === "string" &&
                            d.charAt(1) === "=" &&
                            d.substr(0, 2)),
                        _ && (d = d.substr(2)),
                        (f = parseFloat(d)),
                        h in ki &&
                            (h === "autoAlpha" &&
                                (p === 1 &&
                                    zi(e, "visibility") === "hidden" &&
                                    f &&
                                    (p = 0),
                                E.push("visibility", 0, a.visibility),
                                er(
                                    this,
                                    a,
                                    "visibility",
                                    p ? "inherit" : "hidden",
                                    f ? "inherit" : "hidden",
                                    !f
                                )),
                            h !== "scale" &&
                                h !== "transform" &&
                                ((h = ki[h]),
                                ~h.indexOf(",") && (h = h.split(",")[0]))),
                        (v = h in Hi),
                        v)
                    ) {
                        if (
                            (this.styles.save(h),
                            w ||
                                ((x = e._gsap),
                                (x.renderTransform && !t.parseTransform) ||
                                    is(e, t.parseTransform),
                                (O = t.smoothOrigin !== !1 && x.smooth),
                                (w = this._pt =
                                    new zt(
                                        this._pt,
                                        a,
                                        ze,
                                        0,
                                        1,
                                        x.renderTransform,
                                        x,
                                        0,
                                        -1
                                    )),
                                (w.dep = 1)),
                            h === "scale")
                        )
                            (this._pt = new zt(
                                this._pt,
                                x,
                                "scaleY",
                                x.scaleY,
                                (_ ? Qr(x.scaleY, _ + f) : f) - x.scaleY || 0,
                                Qo
                            )),
                                (this._pt.u = 0),
                                o.push("scaleY", h),
                                (h += "X");
                        else if (h === "transformOrigin") {
                            E.push(Nt, 0, a[Nt]),
                                (d = Jd(d)),
                                x.svg
                                    ? ta(e, d, 0, O, 0, this)
                                    : ((m = parseFloat(d.split(" ")[2]) || 0),
                                      m !== x.zOrigin &&
                                          er(this, x, "zOrigin", x.zOrigin, m),
                                      er(this, a, h, js(u), js(d)));
                            continue;
                        } else if (h === "svgOrigin") {
                            ta(e, d, 1, O, 0, this);
                            continue;
                        } else if (h in qc) {
                            nf(this, x, h, p, _ ? Qr(p, _ + d) : d);
                            continue;
                        } else if (h === "smoothOrigin") {
                            er(this, x, "smooth", x.smooth, d);
                            continue;
                        } else if (h === "force3D") {
                            x[h] = d;
                            continue;
                        } else if (h === "transform") {
                            sf(this, d, e);
                            continue;
                        }
                    } else h in a || (h = fn(h) || h);
                    if (
                        v ||
                        ((f || f === 0) &&
                            (p || p === 0) &&
                            !Bd.test(d) &&
                            h in a)
                    )
                        (y = (u + "").substr((p + "").length)),
                            f || (f = 0),
                            (m = yt(d) || (h in Qt.units ? Qt.units[h] : y)),
                            y !== m && (p = cr(e, h, u, m)),
                            (this._pt = new zt(
                                this._pt,
                                v ? x : a,
                                h,
                                p,
                                (_ ? Qr(p, _ + f) : f) - p,
                                !v &&
                                (m === "px" || h === "zIndex") &&
                                t.autoRound !== !1
                                    ? Gd
                                    : Qo
                            )),
                            (this._pt.u = m || 0),
                            y !== m &&
                                m !== "%" &&
                                ((this._pt.b = u), (this._pt.r = Vd));
                    else if (h in a) Qd.call(this, e, h, u, _ ? _ + d : d);
                    else if (h in e)
                        this.add(e, h, u || e[h], _ ? _ + d : d, r, s);
                    else if (h !== "parseTransform") {
                        Pa(h, d);
                        continue;
                    }
                    v ||
                        (h in a ? E.push(h, 0, a[h]) : E.push(h, 1, u || e[h])),
                        o.push(h);
                }
            }
        k && Nc(this);
    },
    render: function (e, t) {
        if (t.tween._time || !Na())
            for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
        else t.styles.revert();
    },
    get: zi,
    aliases: ki,
    getSetter: function (e, t, i) {
        var r = ki[t];
        return (
            r && r.indexOf(",") < 0 && (t = r),
            t in Hi && t !== Nt && (e._gsap.x || zi(e, "x"))
                ? i && ll === i
                    ? t === "scale"
                        ? qd
                        : Xd
                    : (ll = i || {}) && (t === "scale" ? jd : Wd)
                : e.style && !Sa(e.style[t])
                ? Yd
                : ~t.indexOf("-")
                ? Hd
                : Ia(e, t)
        );
    },
    core: { _removeProperty: Rr, _getMatrix: Ba },
};
Ft.utils.checkPrefix = fn;
Ft.core.getStyleSaver = Gc;
(function (n, e, t, i) {
    var r = Rt(n + "," + e + "," + t, function (s) {
        Hi[s] = 1;
    });
    Rt(e, function (s) {
        (Qt.units[s] = "deg"), (qc[s] = 1);
    }),
        (ki[r[13]] = n + "," + e),
        Rt(i, function (s) {
            var o = s.split(":");
            ki[o[1]] = r[o[0]];
        });
})(
    "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
    "rotation,rotationX,rotationY,skewX,skewY",
    "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
    "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Rt(
    "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
    function (n) {
        Qt.units[n] = "px";
    }
);
Ft.registerPlugin(Uc);
var xe = Ft.registerPlugin(Uc) || Ft;
xe.core.Tween;
const De = {
        RESIZE: "app:resize",
        POINTER_MOVE: "app:pointer_move",
        OPEN_CART: "app:open_cart",
        OPEN_INFO_CARD: "app:open_info_card",
        OPEN_DETAIL_MODAL: "app:open_detail_modal",
        OPEN_GALLERY_MODAL: "app:open_gallery_modal",
        OPEN_FIND_MY_SIZE: "app:open_find_my_size",
        MAIN_PRODUCT_SLIDER_INIT: "app:main_product_slider_init",
        CLOSE_HEADER_DROPDOWN: "app:close_header_dropdown",
        MAIN_SLIDER_SWIPE: "app:main_slider_swipe",
    },
    of = Se(".js-dropdown-trigger", (n) => {
        const e = document.querySelector(".js-header"),
            t = [
                ...document.querySelectorAll(
                    ".js-dropdown-trigger,.js-dropdown-toggle,.js-header-mobile-menu"
                ),
            ],
            i = [
                ...document.querySelectorAll(
                    ".js-header-dropdown,.js-header-toggle-dropdown"
                ),
            ],
            {
                dataset: { menuTrigger: r },
                classList: s,
            } = n,
            o = document.querySelector(
                `.js-header-dropdown[data-parent="${r}"]`
            ),
            a = () => {
                s.remove("is-active"),
                    e.classList.remove("has-dropdown"),
                    (o.style.display = "none");
                const { height: f } = o.getBoundingClientRect();
                document.body.style.setProperty("--panel-height", `${f}px`);
            },
            l = ["search", "cart"].includes(r);
        l &&
            n.addEventListener("click", () => {
                if (s.contains("is-active")) return;
                t.forEach((p) => {
                    p.classList.remove("is-active");
                }),
                    i.forEach((p) => (p.style.display = "none")),
                    s.toggle("is-active"),
                    e.classList.add("has-dropdown"),
                    (o.style.display = s.contains("is-active")
                        ? "block"
                        : "none");
                const { height: f } = o.getBoundingClientRect();
                document.body.style.setProperty(
                    "--panel-height",
                    `${window.innerWidth > 1200 ? f + 4 : 2e3}px`
                );
            }),
            l ||
                ["mouseenter"].forEach((f) => {
                    n.addEventListener(f, () => {
                        if (s.contains("is-active")) return;
                        t.forEach((c) => {
                            c.classList.remove("is-active");
                        }),
                            i.forEach((c) => (c.style.display = "none")),
                            s.toggle("is-active"),
                            e.classList.add("has-dropdown"),
                            (o.style.display = s.contains("is-active")
                                ? "block"
                                : "none");
                        const { height: p } = o.getBoundingClientRect();
                        document.body.style.setProperty(
                            "--panel-height",
                            `${window.innerWidth > 1200 ? p + 4 : 2e3}px`
                        );
                    });
                });
        const u = () => {
            if (r !== "cart" || s.contains("is-active")) return;
            t.forEach((p) => {
                p.classList.remove("is-active");
            }),
                i.forEach((p) => (p.style.display = "none")),
                s.toggle("is-active"),
                e.classList.add("has-dropdown"),
                (o.style.display = s.contains("is-active") ? "block" : "none");
            const { height: f } = o.getBoundingClientRect();
            document.body.style.setProperty(
                "--panel-height",
                `${window.innerWidth > 1200 ? f + 4 : 2e3}px`
            );
        };
        window.e.on(De.CLOSE_HEADER_DROPDOWN, a),
            window.e.on(De.OPEN_CART, u),
            xe.matchMedia().add(
                "(min-width: 1200px)",
                () => (
                    a(),
                    () => {
                        a();
                    }
                )
            );
    }),
    af = Se(".js-header-bar", (n) => {
        const e = () => {
            const { height: t } = n.getBoundingClientRect();
            document.body.style.setProperty("--header-bar", `${t}px`);
        };
        e(), window.e.on(De.RESIZE, e);
    }),
    lf = Se(".js-header-menu", (n) => {
        const { style: e } = n,
            {
                dataset: { parent: t },
            } = n.closest("[data-parent]"),
            i = document.querySelector(`button[data-menu-trigger="${t}"`),
            r = () => {
                const s = i ? i.getBoundingClientRect().left : 0;
                e.setProperty("--pos", `${s}px`);
            };
        r(), window.e.on(De.RESIZE, r);
    }),
    cf = Se(".js-header-search", (n) => {
        const e = [
                ...document.querySelectorAll(
                    ".js-header-dropdown,.js-header-toggle-dropdown"
                ),
            ],
            t = n.querySelector("input"),
            i = n.querySelector("svg"),
            r = document.querySelector('[data-menu-trigger="search"]'),
            s = document.querySelector(".js-header-mobile-menu"),
            o = document.querySelector("#search-result");
        i.addEventListener("click", () => {
            e.forEach((a) => {
                a.style.display = "none";
            }),
                r.classList.remove("is-active"),
                s.classList.remove("is-active"),
                (t.value = ""),
                o && (o.innerHTML = ""),
                document.body.style.setProperty("--panel-height", "0px");
        });
    });
function ml(n) {
    return (
        n !== null &&
        typeof n == "object" &&
        "constructor" in n &&
        n.constructor === Object
    );
}
function $a(n, e) {
    n === void 0 && (n = {}),
        e === void 0 && (e = {}),
        Object.keys(e).forEach((t) => {
            typeof n[t] > "u"
                ? (n[t] = e[t])
                : ml(e[t]) &&
                  ml(n[t]) &&
                  Object.keys(e[t]).length > 0 &&
                  $a(n[t], e[t]);
        });
}
const Kc = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector() {
        return null;
    },
    querySelectorAll() {
        return [];
    },
    getElementById() {
        return null;
    },
    createEvent() {
        return { initEvent() {} };
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return [];
            },
        };
    },
    createElementNS() {
        return {};
    },
    importNode() {
        return null;
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
    },
};
function Xi() {
    const n = typeof document < "u" ? document : {};
    return $a(n, Kc), n;
}
const uf = {
    document: Kc,
    navigator: { userAgent: "" },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
        return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return "";
            },
        };
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {};
    },
    requestAnimationFrame(n) {
        return typeof setTimeout > "u" ? (n(), null) : setTimeout(n, 0);
    },
    cancelAnimationFrame(n) {
        typeof setTimeout > "u" || clearTimeout(n);
    },
};
function Bt() {
    const n = typeof window < "u" ? window : {};
    return $a(n, uf), n;
}
function Ui(n) {
    return (
        n === void 0 && (n = ""),
        n
            .trim()
            .split(" ")
            .filter((e) => !!e.trim())
    );
}
function df(n) {
    const e = n;
    Object.keys(e).forEach((t) => {
        try {
            e[t] = null;
        } catch {}
        try {
            delete e[t];
        } catch {}
    });
}
function Ws(n, e) {
    return e === void 0 && (e = 0), setTimeout(n, e);
}
function Mr() {
    return Date.now();
}
function ff(n) {
    const e = Bt();
    let t;
    return (
        e.getComputedStyle && (t = e.getComputedStyle(n, null)),
        !t && n.currentStyle && (t = n.currentStyle),
        t || (t = n.style),
        t
    );
}
function pf(n, e) {
    e === void 0 && (e = "x");
    const t = Bt();
    let i, r, s;
    const o = ff(n);
    return (
        t.WebKitCSSMatrix
            ? ((r = o.transform || o.webkitTransform),
              r.split(",").length > 6 &&
                  (r = r
                      .split(", ")
                      .map((a) => a.replace(",", "."))
                      .join(", ")),
              (s = new t.WebKitCSSMatrix(r === "none" ? "" : r)))
            : ((s =
                  o.MozTransform ||
                  o.OTransform ||
                  o.MsTransform ||
                  o.msTransform ||
                  o.transform ||
                  o
                      .getPropertyValue("transform")
                      .replace("translate(", "matrix(1, 0, 0, 1,")),
              (i = s.toString().split(","))),
        e === "x" &&
            (t.WebKitCSSMatrix
                ? (r = s.m41)
                : i.length === 16
                ? (r = parseFloat(i[12]))
                : (r = parseFloat(i[4]))),
        e === "y" &&
            (t.WebKitCSSMatrix
                ? (r = s.m42)
                : i.length === 16
                ? (r = parseFloat(i[13]))
                : (r = parseFloat(i[5]))),
        r || 0
    );
}
function En(n) {
    return (
        typeof n == "object" &&
        n !== null &&
        n.constructor &&
        Object.prototype.toString.call(n).slice(8, -1) === "Object"
    );
}
function hf(n) {
    return typeof window < "u" && typeof window.HTMLElement < "u"
        ? n instanceof HTMLElement
        : n && (n.nodeType === 1 || n.nodeType === 11);
}
function jt() {
    const n = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
        const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
        if (i != null && !hf(i)) {
            const r = Object.keys(Object(i)).filter((s) => e.indexOf(s) < 0);
            for (let s = 0, o = r.length; s < o; s += 1) {
                const a = r[s],
                    l = Object.getOwnPropertyDescriptor(i, a);
                l !== void 0 &&
                    l.enumerable &&
                    (En(n[a]) && En(i[a])
                        ? i[a].__swiper__
                            ? (n[a] = i[a])
                            : jt(n[a], i[a])
                        : !En(n[a]) && En(i[a])
                        ? ((n[a] = {}),
                          i[a].__swiper__ ? (n[a] = i[a]) : jt(n[a], i[a]))
                        : (n[a] = i[a]));
            }
        }
    }
    return n;
}
function fs(n, e, t) {
    n.style.setProperty(e, t);
}
function Zc(n) {
    let { swiper: e, targetPosition: t, side: i } = n;
    const r = Bt(),
        s = -e.translate;
    let o = null,
        a;
    const l = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
        r.cancelAnimationFrame(e.cssModeFrameID);
    const u = t > s ? "next" : "prev",
        d = (p, c) => (u === "next" && p >= c) || (u === "prev" && p <= c),
        f = () => {
            (a = new Date().getTime()), o === null && (o = a);
            const p = Math.max(Math.min((a - o) / l, 1), 0),
                c = 0.5 - Math.cos(p * Math.PI) / 2;
            let g = s + c * (t - s);
            if (
                (d(g, t) && (g = t), e.wrapperEl.scrollTo({ [i]: g }), d(g, t))
            ) {
                (e.wrapperEl.style.overflow = "hidden"),
                    (e.wrapperEl.style.scrollSnapType = ""),
                    setTimeout(() => {
                        (e.wrapperEl.style.overflow = ""),
                            e.wrapperEl.scrollTo({ [i]: g });
                    }),
                    r.cancelAnimationFrame(e.cssModeFrameID);
                return;
            }
            e.cssModeFrameID = r.requestAnimationFrame(f);
        };
    f();
}
function Qc(n) {
    return (
        n.querySelector(".swiper-slide-transform") ||
        (n.shadowRoot &&
            n.shadowRoot.querySelector(".swiper-slide-transform")) ||
        n
    );
}
function vi(n, e) {
    return (
        e === void 0 && (e = ""), [...n.children].filter((t) => t.matches(e))
    );
}
function Us(n) {
    try {
        console.warn(n);
        return;
    } catch {}
}
function rs(n, e) {
    e === void 0 && (e = []);
    const t = document.createElement(n);
    return t.classList.add(...(Array.isArray(e) ? e : Ui(e))), t;
}
function gf(n) {
    const e = Bt(),
        t = Xi(),
        i = n.getBoundingClientRect(),
        r = t.body,
        s = n.clientTop || r.clientTop || 0,
        o = n.clientLeft || r.clientLeft || 0,
        a = n === e ? e.scrollY : n.scrollTop,
        l = n === e ? e.scrollX : n.scrollLeft;
    return { top: i.top + a - s, left: i.left + l - o };
}
function mf(n, e) {
    const t = [];
    for (; n.previousElementSibling; ) {
        const i = n.previousElementSibling;
        e ? i.matches(e) && t.push(i) : t.push(i), (n = i);
    }
    return t;
}
function _f(n, e) {
    const t = [];
    for (; n.nextElementSibling; ) {
        const i = n.nextElementSibling;
        e ? i.matches(e) && t.push(i) : t.push(i), (n = i);
    }
    return t;
}
function tr(n, e) {
    return Bt().getComputedStyle(n, null).getPropertyValue(e);
}
function Ks(n) {
    let e = n,
        t;
    if (e) {
        for (t = 0; (e = e.previousSibling) !== null; )
            e.nodeType === 1 && (t += 1);
        return t;
    }
}
function Jc(n, e) {
    const t = [];
    let i = n.parentElement;
    for (; i; )
        e ? i.matches(e) && t.push(i) : t.push(i), (i = i.parentElement);
    return t;
}
function Os(n, e) {
    function t(i) {
        i.target === n &&
            (e.call(n, i), n.removeEventListener("transitionend", t));
    }
    e && n.addEventListener("transitionend", t);
}
function ia(n, e, t) {
    const i = Bt();
    return (
        n[e === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
            i
                .getComputedStyle(n, null)
                .getPropertyValue(e === "width" ? "margin-right" : "margin-top")
        ) +
        parseFloat(
            i
                .getComputedStyle(n, null)
                .getPropertyValue(
                    e === "width" ? "margin-left" : "margin-bottom"
                )
        )
    );
}
function tt(n) {
    return (Array.isArray(n) ? n : [n]).filter((e) => !!e);
}
let wo;
function vf() {
    const n = Bt(),
        e = Xi();
    return {
        smoothScroll:
            e.documentElement &&
            e.documentElement.style &&
            "scrollBehavior" in e.documentElement.style,
        touch: !!(
            "ontouchstart" in n ||
            (n.DocumentTouch && e instanceof n.DocumentTouch)
        ),
    };
}
function eu() {
    return wo || (wo = vf()), wo;
}
let xo;
function yf(n) {
    let { userAgent: e } = n === void 0 ? {} : n;
    const t = eu(),
        i = Bt(),
        r = i.navigator.platform,
        s = e || i.navigator.userAgent,
        o = { ios: !1, android: !1 },
        a = i.screen.width,
        l = i.screen.height,
        u = s.match(/(Android);?[\s\/]+([\d.]+)?/);
    let d = s.match(/(iPad).*OS\s([\d_]+)/);
    const f = s.match(/(iPod)(.*OS\s([\d_]+))?/),
        p = !d && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        c = r === "Win32";
    let g = r === "MacIntel";
    const h = [
        "1024x1366",
        "1366x1024",
        "834x1194",
        "1194x834",
        "834x1112",
        "1112x834",
        "768x1024",
        "1024x768",
        "820x1180",
        "1180x820",
        "810x1080",
        "1080x810",
    ];
    return (
        !d &&
            g &&
            t.touch &&
            h.indexOf(`${a}x${l}`) >= 0 &&
            ((d = s.match(/(Version)\/([\d.]+)/)),
            d || (d = [0, 1, "13_0_0"]),
            (g = !1)),
        u && !c && ((o.os = "android"), (o.android = !0)),
        (d || p || f) && ((o.os = "ios"), (o.ios = !0)),
        o
    );
}
function tu(n) {
    return n === void 0 && (n = {}), xo || (xo = yf(n)), xo;
}
let bo;
function wf() {
    const n = Bt(),
        e = tu();
    let t = !1;
    function i() {
        const a = n.navigator.userAgent.toLowerCase();
        return (
            a.indexOf("safari") >= 0 &&
            a.indexOf("chrome") < 0 &&
            a.indexOf("android") < 0
        );
    }
    if (i()) {
        const a = String(n.navigator.userAgent);
        if (a.includes("Version/")) {
            const [l, u] = a
                .split("Version/")[1]
                .split(" ")[0]
                .split(".")
                .map((d) => Number(d));
            t = l < 16 || (l === 16 && u < 2);
        }
    }
    const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
            n.navigator.userAgent
        ),
        s = i(),
        o = s || (r && e.ios);
    return {
        isSafari: t || s,
        needPerspectiveFix: t,
        need3dFix: o,
        isWebView: r,
    };
}
function xf() {
    return bo || (bo = wf()), bo;
}
function bf(n) {
    let { swiper: e, on: t, emit: i } = n;
    const r = Bt();
    let s = null,
        o = null;
    const a = () => {
            !e ||
                e.destroyed ||
                !e.initialized ||
                (i("beforeResize"), i("resize"));
        },
        l = () => {
            !e ||
                e.destroyed ||
                !e.initialized ||
                ((s = new ResizeObserver((f) => {
                    o = r.requestAnimationFrame(() => {
                        const { width: p, height: c } = e;
                        let g = p,
                            h = c;
                        f.forEach((y) => {
                            let {
                                contentBoxSize: m,
                                contentRect: _,
                                target: v,
                            } = y;
                            (v && v !== e.el) ||
                                ((g = _ ? _.width : (m[0] || m).inlineSize),
                                (h = _ ? _.height : (m[0] || m).blockSize));
                        }),
                            (g !== p || h !== c) && a();
                    });
                })),
                s.observe(e.el));
        },
        u = () => {
            o && r.cancelAnimationFrame(o),
                s && s.unobserve && e.el && (s.unobserve(e.el), (s = null));
        },
        d = () => {
            !e || e.destroyed || !e.initialized || i("orientationchange");
        };
    t("init", () => {
        if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
            l();
            return;
        }
        r.addEventListener("resize", a),
            r.addEventListener("orientationchange", d);
    }),
        t("destroy", () => {
            u(),
                r.removeEventListener("resize", a),
                r.removeEventListener("orientationchange", d);
        });
}
function Tf(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = [],
        o = Bt(),
        a = function (d, f) {
            f === void 0 && (f = {});
            const p = o.MutationObserver || o.WebkitMutationObserver,
                c = new p((g) => {
                    if (e.__preventObserver__) return;
                    if (g.length === 1) {
                        r("observerUpdate", g[0]);
                        return;
                    }
                    const h = function () {
                        r("observerUpdate", g[0]);
                    };
                    o.requestAnimationFrame
                        ? o.requestAnimationFrame(h)
                        : o.setTimeout(h, 0);
                });
            c.observe(d, {
                attributes: typeof f.attributes > "u" ? !0 : f.attributes,
                childList: typeof f.childList > "u" ? !0 : f.childList,
                characterData:
                    typeof f.characterData > "u" ? !0 : f.characterData,
            }),
                s.push(c);
        },
        l = () => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const d = Jc(e.hostEl);
                    for (let f = 0; f < d.length; f += 1) a(d[f]);
                }
                a(e.hostEl, { childList: e.params.observeSlideChildren }),
                    a(e.wrapperEl, { attributes: !1 });
            }
        },
        u = () => {
            s.forEach((d) => {
                d.disconnect();
            }),
                s.splice(0, s.length);
        };
    t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
        i("init", l),
        i("destroy", u);
}
var Sf = {
    on(n, e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof e != "function")
            return i;
        const r = t ? "unshift" : "push";
        return (
            n.split(" ").forEach((s) => {
                i.eventsListeners[s] || (i.eventsListeners[s] = []),
                    i.eventsListeners[s][r](e);
            }),
            i
        );
    },
    once(n, e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof e != "function")
            return i;
        function r() {
            i.off(n, r), r.__emitterProxy && delete r.__emitterProxy;
            for (var s = arguments.length, o = new Array(s), a = 0; a < s; a++)
                o[a] = arguments[a];
            e.apply(i, o);
        }
        return (r.__emitterProxy = e), i.on(n, r, t);
    },
    onAny(n, e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || typeof n != "function")
            return t;
        const i = e ? "unshift" : "push";
        return (
            t.eventsAnyListeners.indexOf(n) < 0 && t.eventsAnyListeners[i](n), t
        );
    },
    offAny(n) {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
            return e;
        const t = e.eventsAnyListeners.indexOf(n);
        return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
    },
    off(n, e) {
        const t = this;
        return (
            !t.eventsListeners ||
                t.destroyed ||
                !t.eventsListeners ||
                n.split(" ").forEach((i) => {
                    typeof e > "u"
                        ? (t.eventsListeners[i] = [])
                        : t.eventsListeners[i] &&
                          t.eventsListeners[i].forEach((r, s) => {
                              (r === e ||
                                  (r.__emitterProxy &&
                                      r.__emitterProxy === e)) &&
                                  t.eventsListeners[i].splice(s, 1);
                          });
                }),
            t
        );
    },
    emit() {
        const n = this;
        if (!n.eventsListeners || n.destroyed || !n.eventsListeners) return n;
        let e, t, i;
        for (var r = arguments.length, s = new Array(r), o = 0; o < r; o++)
            s[o] = arguments[o];
        return (
            typeof s[0] == "string" || Array.isArray(s[0])
                ? ((e = s[0]), (t = s.slice(1, s.length)), (i = n))
                : ((e = s[0].events), (t = s[0].data), (i = s[0].context || n)),
            t.unshift(i),
            (Array.isArray(e) ? e : e.split(" ")).forEach((l) => {
                n.eventsAnyListeners &&
                    n.eventsAnyListeners.length &&
                    n.eventsAnyListeners.forEach((u) => {
                        u.apply(i, [l, ...t]);
                    }),
                    n.eventsListeners &&
                        n.eventsListeners[l] &&
                        n.eventsListeners[l].forEach((u) => {
                            u.apply(i, t);
                        });
            }),
            n
        );
    },
};
function Ef() {
    const n = this;
    let e, t;
    const i = n.el;
    typeof n.params.width < "u" && n.params.width !== null
        ? (e = n.params.width)
        : (e = i.clientWidth),
        typeof n.params.height < "u" && n.params.height !== null
            ? (t = n.params.height)
            : (t = i.clientHeight),
        !((e === 0 && n.isHorizontal()) || (t === 0 && n.isVertical())) &&
            ((e =
                e -
                parseInt(tr(i, "padding-left") || 0, 10) -
                parseInt(tr(i, "padding-right") || 0, 10)),
            (t =
                t -
                parseInt(tr(i, "padding-top") || 0, 10) -
                parseInt(tr(i, "padding-bottom") || 0, 10)),
            Number.isNaN(e) && (e = 0),
            Number.isNaN(t) && (t = 0),
            Object.assign(n, {
                width: e,
                height: t,
                size: n.isHorizontal() ? e : t,
            }));
}
function Cf() {
    const n = this;
    function e(P, R) {
        return parseFloat(P.getPropertyValue(n.getDirectionLabel(R)) || 0);
    }
    const t = n.params,
        {
            wrapperEl: i,
            slidesEl: r,
            size: s,
            rtlTranslate: o,
            wrongRTL: a,
        } = n,
        l = n.virtual && t.virtual.enabled,
        u = l ? n.virtual.slides.length : n.slides.length,
        d = vi(r, `.${n.params.slideClass}, swiper-slide`),
        f = l ? n.virtual.slides.length : d.length;
    let p = [];
    const c = [],
        g = [];
    let h = t.slidesOffsetBefore;
    typeof h == "function" && (h = t.slidesOffsetBefore.call(n));
    let y = t.slidesOffsetAfter;
    typeof y == "function" && (y = t.slidesOffsetAfter.call(n));
    const m = n.snapGrid.length,
        _ = n.slidesGrid.length;
    let v = t.spaceBetween,
        w = -h,
        x = 0,
        O = 0;
    if (typeof s > "u") return;
    typeof v == "string" && v.indexOf("%") >= 0
        ? (v = (parseFloat(v.replace("%", "")) / 100) * s)
        : typeof v == "string" && (v = parseFloat(v)),
        (n.virtualSize = -v),
        d.forEach((P) => {
            o ? (P.style.marginLeft = "") : (P.style.marginRight = ""),
                (P.style.marginBottom = ""),
                (P.style.marginTop = "");
        }),
        t.centeredSlides &&
            t.cssMode &&
            (fs(i, "--swiper-centered-offset-before", ""),
            fs(i, "--swiper-centered-offset-after", ""));
    const k = t.grid && t.grid.rows > 1 && n.grid;
    k ? n.grid.initSlides(d) : n.grid && n.grid.unsetSlides();
    let E;
    const I =
        t.slidesPerView === "auto" &&
        t.breakpoints &&
        Object.keys(t.breakpoints).filter(
            (P) => typeof t.breakpoints[P].slidesPerView < "u"
        ).length > 0;
    for (let P = 0; P < f; P += 1) {
        E = 0;
        let R;
        if (
            (d[P] && (R = d[P]),
            k && n.grid.updateSlide(P, R, d),
            !(d[P] && tr(R, "display") === "none"))
        ) {
            if (t.slidesPerView === "auto") {
                I && (d[P].style[n.getDirectionLabel("width")] = "");
                const T = getComputedStyle(R),
                    M = R.style.transform,
                    z = R.style.webkitTransform;
                if (
                    (M && (R.style.transform = "none"),
                    z && (R.style.webkitTransform = "none"),
                    t.roundLengths)
                )
                    E = n.isHorizontal() ? ia(R, "width") : ia(R, "height");
                else {
                    const $ = e(T, "width"),
                        V = e(T, "padding-left"),
                        Y = e(T, "padding-right"),
                        U = e(T, "margin-left"),
                        K = e(T, "margin-right"),
                        C = T.getPropertyValue("box-sizing");
                    if (C && C === "border-box") E = $ + U + K;
                    else {
                        const { clientWidth: Z, offsetWidth: re } = R;
                        E = $ + V + Y + U + K + (re - Z);
                    }
                }
                M && (R.style.transform = M),
                    z && (R.style.webkitTransform = z),
                    t.roundLengths && (E = Math.floor(E));
            } else
                (E = (s - (t.slidesPerView - 1) * v) / t.slidesPerView),
                    t.roundLengths && (E = Math.floor(E)),
                    d[P] &&
                        (d[P].style[n.getDirectionLabel("width")] = `${E}px`);
            d[P] && (d[P].swiperSlideSize = E),
                g.push(E),
                t.centeredSlides
                    ? ((w = w + E / 2 + x / 2 + v),
                      x === 0 && P !== 0 && (w = w - s / 2 - v),
                      P === 0 && (w = w - s / 2 - v),
                      Math.abs(w) < 1 / 1e3 && (w = 0),
                      t.roundLengths && (w = Math.floor(w)),
                      O % t.slidesPerGroup === 0 && p.push(w),
                      c.push(w))
                    : (t.roundLengths && (w = Math.floor(w)),
                      (O - Math.min(n.params.slidesPerGroupSkip, O)) %
                          n.params.slidesPerGroup ===
                          0 && p.push(w),
                      c.push(w),
                      (w = w + E + v)),
                (n.virtualSize += E + v),
                (x = E),
                (O += 1);
        }
    }
    if (
        ((n.virtualSize = Math.max(n.virtualSize, s) + y),
        o &&
            a &&
            (t.effect === "slide" || t.effect === "coverflow") &&
            (i.style.width = `${n.virtualSize + v}px`),
        t.setWrapperSize &&
            (i.style[n.getDirectionLabel("width")] = `${n.virtualSize + v}px`),
        k && n.grid.updateWrapperSize(E, p),
        !t.centeredSlides)
    ) {
        const P = [];
        for (let R = 0; R < p.length; R += 1) {
            let T = p[R];
            t.roundLengths && (T = Math.floor(T)),
                p[R] <= n.virtualSize - s && P.push(T);
        }
        (p = P),
            Math.floor(n.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 &&
                p.push(n.virtualSize - s);
    }
    if (l && t.loop) {
        const P = g[0] + v;
        if (t.slidesPerGroup > 1) {
            const R = Math.ceil(
                    (n.virtual.slidesBefore + n.virtual.slidesAfter) /
                        t.slidesPerGroup
                ),
                T = P * t.slidesPerGroup;
            for (let M = 0; M < R; M += 1) p.push(p[p.length - 1] + T);
        }
        for (
            let R = 0;
            R < n.virtual.slidesBefore + n.virtual.slidesAfter;
            R += 1
        )
            t.slidesPerGroup === 1 && p.push(p[p.length - 1] + P),
                c.push(c[c.length - 1] + P),
                (n.virtualSize += P);
    }
    if ((p.length === 0 && (p = [0]), v !== 0)) {
        const P =
            n.isHorizontal() && o
                ? "marginLeft"
                : n.getDirectionLabel("marginRight");
        d.filter((R, T) =>
            !t.cssMode || t.loop ? !0 : T !== d.length - 1
        ).forEach((R) => {
            R.style[P] = `${v}px`;
        });
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
        let P = 0;
        g.forEach((T) => {
            P += T + (v || 0);
        }),
            (P -= v);
        const R = P - s;
        p = p.map((T) => (T <= 0 ? -h : T > R ? R + y : T));
    }
    if (t.centerInsufficientSlides) {
        let P = 0;
        g.forEach((T) => {
            P += T + (v || 0);
        }),
            (P -= v);
        const R = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
        if (P + R < s) {
            const T = (s - P - R) / 2;
            p.forEach((M, z) => {
                p[z] = M - T;
            }),
                c.forEach((M, z) => {
                    c[z] = M + T;
                });
        }
    }
    if (
        (Object.assign(n, {
            slides: d,
            snapGrid: p,
            slidesGrid: c,
            slidesSizesGrid: g,
        }),
        t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
    ) {
        fs(i, "--swiper-centered-offset-before", `${-p[0]}px`),
            fs(
                i,
                "--swiper-centered-offset-after",
                `${n.size / 2 - g[g.length - 1] / 2}px`
            );
        const P = -n.snapGrid[0],
            R = -n.slidesGrid[0];
        (n.snapGrid = n.snapGrid.map((T) => T + P)),
            (n.slidesGrid = n.slidesGrid.map((T) => T + R));
    }
    if (
        (f !== u && n.emit("slidesLengthChange"),
        p.length !== m &&
            (n.params.watchOverflow && n.checkOverflow(),
            n.emit("snapGridLengthChange")),
        c.length !== _ && n.emit("slidesGridLengthChange"),
        t.watchSlidesProgress && n.updateSlidesOffset(),
        n.emit("slidesUpdated"),
        !l && !t.cssMode && (t.effect === "slide" || t.effect === "fade"))
    ) {
        const P = `${t.containerModifierClass}backface-hidden`,
            R = n.el.classList.contains(P);
        f <= t.maxBackfaceHiddenSlides
            ? R || n.el.classList.add(P)
            : R && n.el.classList.remove(P);
    }
}
function Pf(n) {
    const e = this,
        t = [],
        i = e.virtual && e.params.virtual.enabled;
    let r = 0,
        s;
    typeof n == "number"
        ? e.setTransition(n)
        : n === !0 && e.setTransition(e.params.speed);
    const o = (a) => (i ? e.slides[e.getSlideIndexByData(a)] : e.slides[a]);
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
        if (e.params.centeredSlides)
            (e.visibleSlides || []).forEach((a) => {
                t.push(a);
            });
        else
            for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
                const a = e.activeIndex + s;
                if (a > e.slides.length && !i) break;
                t.push(o(a));
            }
    else t.push(o(e.activeIndex));
    for (s = 0; s < t.length; s += 1)
        if (typeof t[s] < "u") {
            const a = t[s].offsetHeight;
            r = a > r ? a : r;
        }
    (r || r === 0) && (e.wrapperEl.style.height = `${r}px`);
}
function Mf() {
    const n = this,
        e = n.slides,
        t = n.isElement
            ? n.isHorizontal()
                ? n.wrapperEl.offsetLeft
                : n.wrapperEl.offsetTop
            : 0;
    for (let i = 0; i < e.length; i += 1)
        e[i].swiperSlideOffset =
            (n.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) -
            t -
            n.cssOverflowAdjustment();
}
const _l = (n, e, t) => {
    e && !n.classList.contains(t)
        ? n.classList.add(t)
        : !e && n.classList.contains(t) && n.classList.remove(t);
};
function kf(n) {
    n === void 0 && (n = (this && this.translate) || 0);
    const e = this,
        t = e.params,
        { slides: i, rtlTranslate: r, snapGrid: s } = e;
    if (i.length === 0) return;
    typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let o = -n;
    r && (o = n), (e.visibleSlidesIndexes = []), (e.visibleSlides = []);
    let a = t.spaceBetween;
    typeof a == "string" && a.indexOf("%") >= 0
        ? (a = (parseFloat(a.replace("%", "")) / 100) * e.size)
        : typeof a == "string" && (a = parseFloat(a));
    for (let l = 0; l < i.length; l += 1) {
        const u = i[l];
        let d = u.swiperSlideOffset;
        t.cssMode && t.centeredSlides && (d -= i[0].swiperSlideOffset);
        const f =
                (o + (t.centeredSlides ? e.minTranslate() : 0) - d) /
                (u.swiperSlideSize + a),
            p =
                (o - s[0] + (t.centeredSlides ? e.minTranslate() : 0) - d) /
                (u.swiperSlideSize + a),
            c = -(o - d),
            g = c + e.slidesSizesGrid[l],
            h = c >= 0 && c <= e.size - e.slidesSizesGrid[l],
            y =
                (c >= 0 && c < e.size - 1) ||
                (g > 1 && g <= e.size) ||
                (c <= 0 && g >= e.size);
        y && (e.visibleSlides.push(u), e.visibleSlidesIndexes.push(l)),
            _l(u, y, t.slideVisibleClass),
            _l(u, h, t.slideFullyVisibleClass),
            (u.progress = r ? -f : f),
            (u.originalProgress = r ? -p : p);
    }
}
function Of(n) {
    const e = this;
    if (typeof n > "u") {
        const d = e.rtlTranslate ? -1 : 1;
        n = (e && e.translate && e.translate * d) || 0;
    }
    const t = e.params,
        i = e.maxTranslate() - e.minTranslate();
    let { progress: r, isBeginning: s, isEnd: o, progressLoop: a } = e;
    const l = s,
        u = o;
    if (i === 0) (r = 0), (s = !0), (o = !0);
    else {
        r = (n - e.minTranslate()) / i;
        const d = Math.abs(n - e.minTranslate()) < 1,
            f = Math.abs(n - e.maxTranslate()) < 1;
        (s = d || r <= 0), (o = f || r >= 1), d && (r = 0), f && (r = 1);
    }
    if (t.loop) {
        const d = e.getSlideIndexByData(0),
            f = e.getSlideIndexByData(e.slides.length - 1),
            p = e.slidesGrid[d],
            c = e.slidesGrid[f],
            g = e.slidesGrid[e.slidesGrid.length - 1],
            h = Math.abs(n);
        h >= p ? (a = (h - p) / g) : (a = (h + g - c) / g), a > 1 && (a -= 1);
    }
    Object.assign(e, {
        progress: r,
        progressLoop: a,
        isBeginning: s,
        isEnd: o,
    }),
        (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
            e.updateSlidesProgress(n),
        s && !l && e.emit("reachBeginning toEdge"),
        o && !u && e.emit("reachEnd toEdge"),
        ((l && !s) || (u && !o)) && e.emit("fromEdge"),
        e.emit("progress", r);
}
const To = (n, e, t) => {
    e && !n.classList.contains(t)
        ? n.classList.add(t)
        : !e && n.classList.contains(t) && n.classList.remove(t);
};
function Df() {
    const n = this,
        { slides: e, params: t, slidesEl: i, activeIndex: r } = n,
        s = n.virtual && t.virtual.enabled,
        o = n.grid && t.grid && t.grid.rows > 1,
        a = (f) => vi(i, `.${t.slideClass}${f}, swiper-slide${f}`)[0];
    let l, u, d;
    if (s)
        if (t.loop) {
            let f = r - n.virtual.slidesBefore;
            f < 0 && (f = n.virtual.slides.length + f),
                f >= n.virtual.slides.length && (f -= n.virtual.slides.length),
                (l = a(`[data-swiper-slide-index="${f}"]`));
        } else l = a(`[data-swiper-slide-index="${r}"]`);
    else
        o
            ? ((l = e.filter((f) => f.column === r)[0]),
              (d = e.filter((f) => f.column === r + 1)[0]),
              (u = e.filter((f) => f.column === r - 1)[0]))
            : (l = e[r]);
    l &&
        (o ||
            ((d = _f(l, `.${t.slideClass}, swiper-slide`)[0]),
            t.loop && !d && (d = e[0]),
            (u = mf(l, `.${t.slideClass}, swiper-slide`)[0]),
            t.loop && !u === 0 && (u = e[e.length - 1]))),
        e.forEach((f) => {
            To(f, f === l, t.slideActiveClass),
                To(f, f === d, t.slideNextClass),
                To(f, f === u, t.slidePrevClass);
        }),
        n.emitSlidesClasses();
}
const Ds = (n, e) => {
        if (!n || n.destroyed || !n.params) return;
        const t = () =>
                n.isElement ? "swiper-slide" : `.${n.params.slideClass}`,
            i = e.closest(t());
        if (i) {
            let r = i.querySelector(`.${n.params.lazyPreloaderClass}`);
            !r &&
                n.isElement &&
                (i.shadowRoot
                    ? (r = i.shadowRoot.querySelector(
                          `.${n.params.lazyPreloaderClass}`
                      ))
                    : requestAnimationFrame(() => {
                          i.shadowRoot &&
                              ((r = i.shadowRoot.querySelector(
                                  `.${n.params.lazyPreloaderClass}`
                              )),
                              r && r.remove());
                      })),
                r && r.remove();
        }
    },
    So = (n, e) => {
        if (!n.slides[e]) return;
        const t = n.slides[e].querySelector('[loading="lazy"]');
        t && t.removeAttribute("loading");
    },
    ra = (n) => {
        if (!n || n.destroyed || !n.params) return;
        let e = n.params.lazyPreloadPrevNext;
        const t = n.slides.length;
        if (!t || !e || e < 0) return;
        e = Math.min(e, t);
        const i =
                n.params.slidesPerView === "auto"
                    ? n.slidesPerViewDynamic()
                    : Math.ceil(n.params.slidesPerView),
            r = n.activeIndex;
        if (n.params.grid && n.params.grid.rows > 1) {
            const o = r,
                a = [o - e];
            a.push(...Array.from({ length: e }).map((l, u) => o + i + u)),
                n.slides.forEach((l, u) => {
                    a.includes(l.column) && So(n, u);
                });
            return;
        }
        const s = r + i - 1;
        if (n.params.rewind || n.params.loop)
            for (let o = r - e; o <= s + e; o += 1) {
                const a = ((o % t) + t) % t;
                (a < r || a > s) && So(n, a);
            }
        else
            for (
                let o = Math.max(r - e, 0);
                o <= Math.min(s + e, t - 1);
                o += 1
            )
                o !== r && (o > s || o < r) && So(n, o);
    };
function Lf(n) {
    const { slidesGrid: e, params: t } = n,
        i = n.rtlTranslate ? n.translate : -n.translate;
    let r;
    for (let s = 0; s < e.length; s += 1)
        typeof e[s + 1] < "u"
            ? i >= e[s] && i < e[s + 1] - (e[s + 1] - e[s]) / 2
                ? (r = s)
                : i >= e[s] && i < e[s + 1] && (r = s + 1)
            : i >= e[s] && (r = s);
    return t.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0), r;
}
function Af(n) {
    const e = this,
        t = e.rtlTranslate ? e.translate : -e.translate,
        {
            snapGrid: i,
            params: r,
            activeIndex: s,
            realIndex: o,
            snapIndex: a,
        } = e;
    let l = n,
        u;
    const d = (c) => {
        let g = c - e.virtual.slidesBefore;
        return (
            g < 0 && (g = e.virtual.slides.length + g),
            g >= e.virtual.slides.length && (g -= e.virtual.slides.length),
            g
        );
    };
    if ((typeof l > "u" && (l = Lf(e)), i.indexOf(t) >= 0)) u = i.indexOf(t);
    else {
        const c = Math.min(r.slidesPerGroupSkip, l);
        u = c + Math.floor((l - c) / r.slidesPerGroup);
    }
    if ((u >= i.length && (u = i.length - 1), l === s && !e.params.loop)) {
        u !== a && ((e.snapIndex = u), e.emit("snapIndexChange"));
        return;
    }
    if (l === s && e.params.loop && e.virtual && e.params.virtual.enabled) {
        e.realIndex = d(l);
        return;
    }
    const f = e.grid && r.grid && r.grid.rows > 1;
    let p;
    if (e.virtual && r.virtual.enabled && r.loop) p = d(l);
    else if (f) {
        const c = e.slides.filter((h) => h.column === l)[0];
        let g = parseInt(c.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(g) && (g = Math.max(e.slides.indexOf(c), 0)),
            (p = Math.floor(g / r.grid.rows));
    } else if (e.slides[l]) {
        const c = e.slides[l].getAttribute("data-swiper-slide-index");
        c ? (p = parseInt(c, 10)) : (p = l);
    } else p = l;
    Object.assign(e, {
        previousSnapIndex: a,
        snapIndex: u,
        previousRealIndex: o,
        realIndex: p,
        previousIndex: s,
        activeIndex: l,
    }),
        e.initialized && ra(e),
        e.emit("activeIndexChange"),
        e.emit("snapIndexChange"),
        (e.initialized || e.params.runCallbacksOnInit) &&
            (o !== p && e.emit("realIndexChange"), e.emit("slideChange"));
}
function If(n, e) {
    const t = this,
        i = t.params;
    let r = n.closest(`.${i.slideClass}, swiper-slide`);
    !r &&
        t.isElement &&
        e &&
        e.length > 1 &&
        e.includes(n) &&
        [...e.slice(e.indexOf(n) + 1, e.length)].forEach((a) => {
            !r &&
                a.matches &&
                a.matches(`.${i.slideClass}, swiper-slide`) &&
                (r = a);
        });
    let s = !1,
        o;
    if (r) {
        for (let a = 0; a < t.slides.length; a += 1)
            if (t.slides[a] === r) {
                (s = !0), (o = a);
                break;
            }
    }
    if (r && s)
        (t.clickedSlide = r),
            t.virtual && t.params.virtual.enabled
                ? (t.clickedIndex = parseInt(
                      r.getAttribute("data-swiper-slide-index"),
                      10
                  ))
                : (t.clickedIndex = o);
    else {
        (t.clickedSlide = void 0), (t.clickedIndex = void 0);
        return;
    }
    i.slideToClickedSlide &&
        t.clickedIndex !== void 0 &&
        t.clickedIndex !== t.activeIndex &&
        t.slideToClickedSlide();
}
var Rf = {
    updateSize: Ef,
    updateSlides: Cf,
    updateAutoHeight: Pf,
    updateSlidesOffset: Mf,
    updateSlidesProgress: kf,
    updateProgress: Of,
    updateSlidesClasses: Df,
    updateActiveIndex: Af,
    updateClickedSlide: If,
};
function zf(n) {
    n === void 0 && (n = this.isHorizontal() ? "x" : "y");
    const e = this,
        { params: t, rtlTranslate: i, translate: r, wrapperEl: s } = e;
    if (t.virtualTranslate) return i ? -r : r;
    if (t.cssMode) return r;
    let o = pf(s, n);
    return (o += e.cssOverflowAdjustment()), i && (o = -o), o || 0;
}
function Nf(n, e) {
    const t = this,
        { rtlTranslate: i, params: r, wrapperEl: s, progress: o } = t;
    let a = 0,
        l = 0;
    const u = 0;
    t.isHorizontal() ? (a = i ? -n : n) : (l = n),
        r.roundLengths && ((a = Math.floor(a)), (l = Math.floor(l))),
        (t.previousTranslate = t.translate),
        (t.translate = t.isHorizontal() ? a : l),
        r.cssMode
            ? (s[t.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  t.isHorizontal() ? -a : -l)
            : r.virtualTranslate ||
              (t.isHorizontal()
                  ? (a -= t.cssOverflowAdjustment())
                  : (l -= t.cssOverflowAdjustment()),
              (s.style.transform = `translate3d(${a}px, ${l}px, ${u}px)`));
    let d;
    const f = t.maxTranslate() - t.minTranslate();
    f === 0 ? (d = 0) : (d = (n - t.minTranslate()) / f),
        d !== o && t.updateProgress(n),
        t.emit("setTranslate", t.translate, e);
}
function Ff() {
    return -this.snapGrid[0];
}
function Bf() {
    return -this.snapGrid[this.snapGrid.length - 1];
}
function $f(n, e, t, i, r) {
    n === void 0 && (n = 0),
        e === void 0 && (e = this.params.speed),
        t === void 0 && (t = !0),
        i === void 0 && (i = !0);
    const s = this,
        { params: o, wrapperEl: a } = s;
    if (s.animating && o.preventInteractionOnTransition) return !1;
    const l = s.minTranslate(),
        u = s.maxTranslate();
    let d;
    if (
        (i && n > l ? (d = l) : i && n < u ? (d = u) : (d = n),
        s.updateProgress(d),
        o.cssMode)
    ) {
        const f = s.isHorizontal();
        if (e === 0) a[f ? "scrollLeft" : "scrollTop"] = -d;
        else {
            if (!s.support.smoothScroll)
                return (
                    Zc({
                        swiper: s,
                        targetPosition: -d,
                        side: f ? "left" : "top",
                    }),
                    !0
                );
            a.scrollTo({ [f ? "left" : "top"]: -d, behavior: "smooth" });
        }
        return !0;
    }
    return (
        e === 0
            ? (s.setTransition(0),
              s.setTranslate(d),
              t &&
                  (s.emit("beforeTransitionStart", e, r),
                  s.emit("transitionEnd")))
            : (s.setTransition(e),
              s.setTranslate(d),
              t &&
                  (s.emit("beforeTransitionStart", e, r),
                  s.emit("transitionStart")),
              s.animating ||
                  ((s.animating = !0),
                  s.onTranslateToWrapperTransitionEnd ||
                      (s.onTranslateToWrapperTransitionEnd = function (p) {
                          !s ||
                              s.destroyed ||
                              (p.target === this &&
                                  (s.wrapperEl.removeEventListener(
                                      "transitionend",
                                      s.onTranslateToWrapperTransitionEnd
                                  ),
                                  (s.onTranslateToWrapperTransitionEnd = null),
                                  delete s.onTranslateToWrapperTransitionEnd,
                                  (s.animating = !1),
                                  t && s.emit("transitionEnd")));
                      }),
                  s.wrapperEl.addEventListener(
                      "transitionend",
                      s.onTranslateToWrapperTransitionEnd
                  ))),
        !0
    );
}
var Vf = {
    getTranslate: zf,
    setTranslate: Nf,
    minTranslate: Ff,
    maxTranslate: Bf,
    translateTo: $f,
};
function Gf(n, e) {
    const t = this;
    t.params.cssMode ||
        ((t.wrapperEl.style.transitionDuration = `${n}ms`),
        (t.wrapperEl.style.transitionDelay = n === 0 ? "0ms" : "")),
        t.emit("setTransition", n, e);
}
function iu(n) {
    let { swiper: e, runCallbacks: t, direction: i, step: r } = n;
    const { activeIndex: s, previousIndex: o } = e;
    let a = i;
    if (
        (a || (s > o ? (a = "next") : s < o ? (a = "prev") : (a = "reset")),
        e.emit(`transition${r}`),
        t && s !== o)
    ) {
        if (a === "reset") {
            e.emit(`slideResetTransition${r}`);
            return;
        }
        e.emit(`slideChangeTransition${r}`),
            a === "next"
                ? e.emit(`slideNextTransition${r}`)
                : e.emit(`slidePrevTransition${r}`);
    }
}
function Yf(n, e) {
    n === void 0 && (n = !0);
    const t = this,
        { params: i } = t;
    i.cssMode ||
        (i.autoHeight && t.updateAutoHeight(),
        iu({ swiper: t, runCallbacks: n, direction: e, step: "Start" }));
}
function Hf(n, e) {
    n === void 0 && (n = !0);
    const t = this,
        { params: i } = t;
    (t.animating = !1),
        !i.cssMode &&
            (t.setTransition(0),
            iu({ swiper: t, runCallbacks: n, direction: e, step: "End" }));
}
var Xf = { setTransition: Gf, transitionStart: Yf, transitionEnd: Hf };
function qf(n, e, t, i, r) {
    n === void 0 && (n = 0),
        t === void 0 && (t = !0),
        typeof n == "string" && (n = parseInt(n, 10));
    const s = this;
    let o = n;
    o < 0 && (o = 0);
    const {
        params: a,
        snapGrid: l,
        slidesGrid: u,
        previousIndex: d,
        activeIndex: f,
        rtlTranslate: p,
        wrapperEl: c,
        enabled: g,
    } = s;
    if (
        (!g && !i && !r) ||
        s.destroyed ||
        (s.animating && a.preventInteractionOnTransition)
    )
        return !1;
    typeof e > "u" && (e = s.params.speed);
    const h = Math.min(s.params.slidesPerGroupSkip, o);
    let y = h + Math.floor((o - h) / s.params.slidesPerGroup);
    y >= l.length && (y = l.length - 1);
    const m = -l[y];
    if (a.normalizeSlideIndex)
        for (let v = 0; v < u.length; v += 1) {
            const w = -Math.floor(m * 100),
                x = Math.floor(u[v] * 100),
                O = Math.floor(u[v + 1] * 100);
            typeof u[v + 1] < "u"
                ? w >= x && w < O - (O - x) / 2
                    ? (o = v)
                    : w >= x && w < O && (o = v + 1)
                : w >= x && (o = v);
        }
    if (
        s.initialized &&
        o !== f &&
        ((!s.allowSlideNext &&
            (p
                ? m > s.translate && m > s.minTranslate()
                : m < s.translate && m < s.minTranslate())) ||
            (!s.allowSlidePrev &&
                m > s.translate &&
                m > s.maxTranslate() &&
                (f || 0) !== o))
    )
        return !1;
    o !== (d || 0) && t && s.emit("beforeSlideChangeStart"),
        s.updateProgress(m);
    let _;
    if (
        (o > f ? (_ = "next") : o < f ? (_ = "prev") : (_ = "reset"),
        (p && -m === s.translate) || (!p && m === s.translate))
    )
        return (
            s.updateActiveIndex(o),
            a.autoHeight && s.updateAutoHeight(),
            s.updateSlidesClasses(),
            a.effect !== "slide" && s.setTranslate(m),
            _ !== "reset" && (s.transitionStart(t, _), s.transitionEnd(t, _)),
            !1
        );
    if (a.cssMode) {
        const v = s.isHorizontal(),
            w = p ? m : -m;
        if (e === 0) {
            const x = s.virtual && s.params.virtual.enabled;
            x &&
                ((s.wrapperEl.style.scrollSnapType = "none"),
                (s._immediateVirtual = !0)),
                x && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
                    ? ((s._cssModeVirtualInitialSet = !0),
                      requestAnimationFrame(() => {
                          c[v ? "scrollLeft" : "scrollTop"] = w;
                      }))
                    : (c[v ? "scrollLeft" : "scrollTop"] = w),
                x &&
                    requestAnimationFrame(() => {
                        (s.wrapperEl.style.scrollSnapType = ""),
                            (s._immediateVirtual = !1);
                    });
        } else {
            if (!s.support.smoothScroll)
                return (
                    Zc({
                        swiper: s,
                        targetPosition: w,
                        side: v ? "left" : "top",
                    }),
                    !0
                );
            c.scrollTo({ [v ? "left" : "top"]: w, behavior: "smooth" });
        }
        return !0;
    }
    return (
        s.setTransition(e),
        s.setTranslate(m),
        s.updateActiveIndex(o),
        s.updateSlidesClasses(),
        s.emit("beforeTransitionStart", e, i),
        s.transitionStart(t, _),
        e === 0
            ? s.transitionEnd(t, _)
            : s.animating ||
              ((s.animating = !0),
              s.onSlideToWrapperTransitionEnd ||
                  (s.onSlideToWrapperTransitionEnd = function (w) {
                      !s ||
                          s.destroyed ||
                          (w.target === this &&
                              (s.wrapperEl.removeEventListener(
                                  "transitionend",
                                  s.onSlideToWrapperTransitionEnd
                              ),
                              (s.onSlideToWrapperTransitionEnd = null),
                              delete s.onSlideToWrapperTransitionEnd,
                              s.transitionEnd(t, _)));
                  }),
              s.wrapperEl.addEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
              )),
        !0
    );
}
function jf(n, e, t, i) {
    n === void 0 && (n = 0),
        t === void 0 && (t = !0),
        typeof n == "string" && (n = parseInt(n, 10));
    const r = this;
    if (r.destroyed) return;
    typeof e > "u" && (e = r.params.speed);
    const s = r.grid && r.params.grid && r.params.grid.rows > 1;
    let o = n;
    if (r.params.loop)
        if (r.virtual && r.params.virtual.enabled)
            o = o + r.virtual.slidesBefore;
        else {
            let a;
            if (s) {
                const p = o * r.params.grid.rows;
                a = r.slides.filter(
                    (c) => c.getAttribute("data-swiper-slide-index") * 1 === p
                )[0].column;
            } else a = r.getSlideIndexByData(o);
            const l = s
                    ? Math.ceil(r.slides.length / r.params.grid.rows)
                    : r.slides.length,
                { centeredSlides: u } = r.params;
            let d = r.params.slidesPerView;
            d === "auto"
                ? (d = r.slidesPerViewDynamic())
                : ((d = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
                  u && d % 2 === 0 && (d = d + 1));
            let f = l - a < d;
            if (
                (u && (f = f || a < Math.ceil(d / 2)),
                i && u && r.params.slidesPerView !== "auto" && !s && (f = !1),
                f)
            ) {
                const p = u
                    ? a < r.activeIndex
                        ? "prev"
                        : "next"
                    : a - r.activeIndex - 1 < r.params.slidesPerView
                    ? "next"
                    : "prev";
                r.loopFix({
                    direction: p,
                    slideTo: !0,
                    activeSlideIndex: p === "next" ? a + 1 : a - l + 1,
                    slideRealIndex: p === "next" ? r.realIndex : void 0,
                });
            }
            if (s) {
                const p = o * r.params.grid.rows;
                o = r.slides.filter(
                    (c) => c.getAttribute("data-swiper-slide-index") * 1 === p
                )[0].column;
            } else o = r.getSlideIndexByData(o);
        }
    return (
        requestAnimationFrame(() => {
            r.slideTo(o, e, t, i);
        }),
        r
    );
}
function Wf(n, e, t) {
    e === void 0 && (e = !0);
    const i = this,
        { enabled: r, params: s, animating: o } = i;
    if (!r || i.destroyed) return i;
    typeof n > "u" && (n = i.params.speed);
    let a = s.slidesPerGroup;
    s.slidesPerView === "auto" &&
        s.slidesPerGroup === 1 &&
        s.slidesPerGroupAuto &&
        (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const l = i.activeIndex < s.slidesPerGroupSkip ? 1 : a,
        u = i.virtual && s.virtual.enabled;
    if (s.loop) {
        if (o && !u && s.loopPreventsSliding) return !1;
        if (
            (i.loopFix({ direction: "next" }),
            (i._clientLeft = i.wrapperEl.clientLeft),
            i.activeIndex === i.slides.length - 1 && s.cssMode)
        )
            return (
                requestAnimationFrame(() => {
                    i.slideTo(i.activeIndex + l, n, e, t);
                }),
                !0
            );
    }
    return s.rewind && i.isEnd
        ? i.slideTo(0, n, e, t)
        : i.slideTo(i.activeIndex + l, n, e, t);
}
function Uf(n, e, t) {
    e === void 0 && (e = !0);
    const i = this,
        {
            params: r,
            snapGrid: s,
            slidesGrid: o,
            rtlTranslate: a,
            enabled: l,
            animating: u,
        } = i;
    if (!l || i.destroyed) return i;
    typeof n > "u" && (n = i.params.speed);
    const d = i.virtual && r.virtual.enabled;
    if (r.loop) {
        if (u && !d && r.loopPreventsSliding) return !1;
        i.loopFix({ direction: "prev" }),
            (i._clientLeft = i.wrapperEl.clientLeft);
    }
    const f = a ? i.translate : -i.translate;
    function p(m) {
        return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m);
    }
    const c = p(f),
        g = s.map((m) => p(m));
    let h = s[g.indexOf(c) - 1];
    if (typeof h > "u" && r.cssMode) {
        let m;
        s.forEach((_, v) => {
            c >= _ && (m = v);
        }),
            typeof m < "u" && (h = s[m > 0 ? m - 1 : m]);
    }
    let y = 0;
    if (
        (typeof h < "u" &&
            ((y = o.indexOf(h)),
            y < 0 && (y = i.activeIndex - 1),
            r.slidesPerView === "auto" &&
                r.slidesPerGroup === 1 &&
                r.slidesPerGroupAuto &&
                ((y = y - i.slidesPerViewDynamic("previous", !0) + 1),
                (y = Math.max(y, 0)))),
        r.rewind && i.isBeginning)
    ) {
        const m =
            i.params.virtual && i.params.virtual.enabled && i.virtual
                ? i.virtual.slides.length - 1
                : i.slides.length - 1;
        return i.slideTo(m, n, e, t);
    } else if (r.loop && i.activeIndex === 0 && r.cssMode)
        return (
            requestAnimationFrame(() => {
                i.slideTo(y, n, e, t);
            }),
            !0
        );
    return i.slideTo(y, n, e, t);
}
function Kf(n, e, t) {
    e === void 0 && (e = !0);
    const i = this;
    if (!i.destroyed)
        return (
            typeof n > "u" && (n = i.params.speed),
            i.slideTo(i.activeIndex, n, e, t)
        );
}
function Zf(n, e, t, i) {
    e === void 0 && (e = !0), i === void 0 && (i = 0.5);
    const r = this;
    if (r.destroyed) return;
    typeof n > "u" && (n = r.params.speed);
    let s = r.activeIndex;
    const o = Math.min(r.params.slidesPerGroupSkip, s),
        a = o + Math.floor((s - o) / r.params.slidesPerGroup),
        l = r.rtlTranslate ? r.translate : -r.translate;
    if (l >= r.snapGrid[a]) {
        const u = r.snapGrid[a],
            d = r.snapGrid[a + 1];
        l - u > (d - u) * i && (s += r.params.slidesPerGroup);
    } else {
        const u = r.snapGrid[a - 1],
            d = r.snapGrid[a];
        l - u <= (d - u) * i && (s -= r.params.slidesPerGroup);
    }
    return (
        (s = Math.max(s, 0)),
        (s = Math.min(s, r.slidesGrid.length - 1)),
        r.slideTo(s, n, e, t)
    );
}
function Qf() {
    const n = this;
    if (n.destroyed) return;
    const { params: e, slidesEl: t } = n,
        i =
            e.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : e.slidesPerView;
    let r = n.clickedIndex,
        s;
    const o = n.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
        if (n.animating) return;
        (s = parseInt(
            n.clickedSlide.getAttribute("data-swiper-slide-index"),
            10
        )),
            e.centeredSlides
                ? r < n.loopedSlides - i / 2 ||
                  r > n.slides.length - n.loopedSlides + i / 2
                    ? (n.loopFix(),
                      (r = n.getSlideIndex(
                          vi(t, `${o}[data-swiper-slide-index="${s}"]`)[0]
                      )),
                      Ws(() => {
                          n.slideTo(r);
                      }))
                    : n.slideTo(r)
                : r > n.slides.length - i
                ? (n.loopFix(),
                  (r = n.getSlideIndex(
                      vi(t, `${o}[data-swiper-slide-index="${s}"]`)[0]
                  )),
                  Ws(() => {
                      n.slideTo(r);
                  }))
                : n.slideTo(r);
    } else n.slideTo(r);
}
var Jf = {
    slideTo: qf,
    slideToLoop: jf,
    slideNext: Wf,
    slidePrev: Uf,
    slideReset: Kf,
    slideToClosest: Zf,
    slideToClickedSlide: Qf,
};
function ep(n) {
    const e = this,
        { params: t, slidesEl: i } = e;
    if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
    const r = () => {
            vi(i, `.${t.slideClass}, swiper-slide`).forEach((f, p) => {
                f.setAttribute("data-swiper-slide-index", p);
            });
        },
        s = e.grid && t.grid && t.grid.rows > 1,
        o = t.slidesPerGroup * (s ? t.grid.rows : 1),
        a = e.slides.length % o !== 0,
        l = s && e.slides.length % t.grid.rows !== 0,
        u = (d) => {
            for (let f = 0; f < d; f += 1) {
                const p = e.isElement
                    ? rs("swiper-slide", [t.slideBlankClass])
                    : rs("div", [t.slideClass, t.slideBlankClass]);
                e.slidesEl.append(p);
            }
        };
    if (a) {
        if (t.loopAddBlankSlides) {
            const d = o - (e.slides.length % o);
            u(d), e.recalcSlides(), e.updateSlides();
        } else
            Us(
                "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
            );
        r();
    } else if (l) {
        if (t.loopAddBlankSlides) {
            const d = t.grid.rows - (e.slides.length % t.grid.rows);
            u(d), e.recalcSlides(), e.updateSlides();
        } else
            Us(
                "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
            );
        r();
    } else r();
    e.loopFix({
        slideRealIndex: n,
        direction: t.centeredSlides ? void 0 : "next",
    });
}
function tp(n) {
    let {
        slideRealIndex: e,
        slideTo: t = !0,
        direction: i,
        setTranslate: r,
        activeSlideIndex: s,
        byController: o,
        byMousewheel: a,
    } = n === void 0 ? {} : n;
    const l = this;
    if (!l.params.loop) return;
    l.emit("beforeLoopFix");
    const {
            slides: u,
            allowSlidePrev: d,
            allowSlideNext: f,
            slidesEl: p,
            params: c,
        } = l,
        { centeredSlides: g } = c;
    if (
        ((l.allowSlidePrev = !0),
        (l.allowSlideNext = !0),
        l.virtual && c.virtual.enabled)
    ) {
        t &&
            (!c.centeredSlides && l.snapIndex === 0
                ? l.slideTo(l.virtual.slides.length, 0, !1, !0)
                : c.centeredSlides && l.snapIndex < c.slidesPerView
                ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
                : l.snapIndex === l.snapGrid.length - 1 &&
                  l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
            (l.allowSlidePrev = d),
            (l.allowSlideNext = f),
            l.emit("loopFix");
        return;
    }
    let h = c.slidesPerView;
    h === "auto"
        ? (h = l.slidesPerViewDynamic())
        : ((h = Math.ceil(parseFloat(c.slidesPerView, 10))),
          g && h % 2 === 0 && (h = h + 1));
    const y = c.slidesPerGroupAuto ? h : c.slidesPerGroup;
    let m = y;
    m % y !== 0 && (m += y - (m % y)),
        (m += c.loopAdditionalSlides),
        (l.loopedSlides = m);
    const _ = l.grid && c.grid && c.grid.rows > 1;
    u.length < h + m
        ? Us(
              "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
          )
        : _ &&
          c.grid.fill === "row" &&
          Us(
              "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
          );
    const v = [],
        w = [];
    let x = l.activeIndex;
    typeof s > "u"
        ? (s = l.getSlideIndex(
              u.filter((M) => M.classList.contains(c.slideActiveClass))[0]
          ))
        : (x = s);
    const O = i === "next" || !i,
        k = i === "prev" || !i;
    let E = 0,
        I = 0;
    const P = _ ? Math.ceil(u.length / c.grid.rows) : u.length,
        T = (_ ? u[s].column : s) + (g && typeof r > "u" ? -h / 2 + 0.5 : 0);
    if (T < m) {
        E = Math.max(m - T, y);
        for (let M = 0; M < m - T; M += 1) {
            const z = M - Math.floor(M / P) * P;
            if (_) {
                const $ = P - z - 1;
                for (let V = u.length - 1; V >= 0; V -= 1)
                    u[V].column === $ && v.push(V);
            } else v.push(P - z - 1);
        }
    } else if (T + h > P - m) {
        I = Math.max(T - (P - m * 2), y);
        for (let M = 0; M < I; M += 1) {
            const z = M - Math.floor(M / P) * P;
            _
                ? u.forEach(($, V) => {
                      $.column === z && w.push(V);
                  })
                : w.push(z);
        }
    }
    if (
        ((l.__preventObserver__ = !0),
        requestAnimationFrame(() => {
            l.__preventObserver__ = !1;
        }),
        k &&
            v.forEach((M) => {
                (u[M].swiperLoopMoveDOM = !0),
                    p.prepend(u[M]),
                    (u[M].swiperLoopMoveDOM = !1);
            }),
        O &&
            w.forEach((M) => {
                (u[M].swiperLoopMoveDOM = !0),
                    p.append(u[M]),
                    (u[M].swiperLoopMoveDOM = !1);
            }),
        l.recalcSlides(),
        c.slidesPerView === "auto"
            ? l.updateSlides()
            : _ &&
              ((v.length > 0 && k) || (w.length > 0 && O)) &&
              l.slides.forEach((M, z) => {
                  l.grid.updateSlide(z, M, l.slides);
              }),
        c.watchSlidesProgress && l.updateSlidesOffset(),
        t)
    ) {
        if (v.length > 0 && k) {
            if (typeof e > "u") {
                const M = l.slidesGrid[x],
                    $ = l.slidesGrid[x + E] - M;
                a
                    ? l.setTranslate(l.translate - $)
                    : (l.slideTo(x + Math.ceil(E), 0, !1, !0),
                      r &&
                          ((l.touchEventsData.startTranslate =
                              l.touchEventsData.startTranslate - $),
                          (l.touchEventsData.currentTranslate =
                              l.touchEventsData.currentTranslate - $)));
            } else if (r) {
                const M = _ ? v.length / c.grid.rows : v.length;
                l.slideTo(l.activeIndex + M, 0, !1, !0),
                    (l.touchEventsData.currentTranslate = l.translate);
            }
        } else if (w.length > 0 && O)
            if (typeof e > "u") {
                const M = l.slidesGrid[x],
                    $ = l.slidesGrid[x - I] - M;
                a
                    ? l.setTranslate(l.translate - $)
                    : (l.slideTo(x - I, 0, !1, !0),
                      r &&
                          ((l.touchEventsData.startTranslate =
                              l.touchEventsData.startTranslate - $),
                          (l.touchEventsData.currentTranslate =
                              l.touchEventsData.currentTranslate - $)));
            } else {
                const M = _ ? w.length / c.grid.rows : w.length;
                l.slideTo(l.activeIndex - M, 0, !1, !0);
            }
    }
    if (
        ((l.allowSlidePrev = d),
        (l.allowSlideNext = f),
        l.controller && l.controller.control && !o)
    ) {
        const M = {
            slideRealIndex: e,
            direction: i,
            setTranslate: r,
            activeSlideIndex: s,
            byController: !0,
        };
        Array.isArray(l.controller.control)
            ? l.controller.control.forEach((z) => {
                  !z.destroyed &&
                      z.params.loop &&
                      z.loopFix({
                          ...M,
                          slideTo:
                              z.params.slidesPerView === c.slidesPerView
                                  ? t
                                  : !1,
                      });
              })
            : l.controller.control instanceof l.constructor &&
              l.controller.control.params.loop &&
              l.controller.control.loopFix({
                  ...M,
                  slideTo:
                      l.controller.control.params.slidesPerView ===
                      c.slidesPerView
                          ? t
                          : !1,
              });
    }
    l.emit("loopFix");
}
function ip() {
    const n = this,
        { params: e, slidesEl: t } = n;
    if (!e.loop || (n.virtual && n.params.virtual.enabled)) return;
    n.recalcSlides();
    const i = [];
    n.slides.forEach((r) => {
        const s =
            typeof r.swiperSlideIndex > "u"
                ? r.getAttribute("data-swiper-slide-index") * 1
                : r.swiperSlideIndex;
        i[s] = r;
    }),
        n.slides.forEach((r) => {
            r.removeAttribute("data-swiper-slide-index");
        }),
        i.forEach((r) => {
            t.append(r);
        }),
        n.recalcSlides(),
        n.slideTo(n.realIndex, 0);
}
var rp = { loopCreate: ep, loopFix: tp, loopDestroy: ip };
function np(n) {
    const e = this;
    if (
        !e.params.simulateTouch ||
        (e.params.watchOverflow && e.isLocked) ||
        e.params.cssMode
    )
        return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0),
        (t.style.cursor = "move"),
        (t.style.cursor = n ? "grabbing" : "grab"),
        e.isElement &&
            requestAnimationFrame(() => {
                e.__preventObserver__ = !1;
            });
}
function sp() {
    const n = this;
    (n.params.watchOverflow && n.isLocked) ||
        n.params.cssMode ||
        (n.isElement && (n.__preventObserver__ = !0),
        (n[
            n.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
        ].style.cursor = ""),
        n.isElement &&
            requestAnimationFrame(() => {
                n.__preventObserver__ = !1;
            }));
}
var op = { setGrabCursor: np, unsetGrabCursor: sp };
function ap(n, e) {
    e === void 0 && (e = this);
    function t(i) {
        if (!i || i === Xi() || i === Bt()) return null;
        i.assignedSlot && (i = i.assignedSlot);
        const r = i.closest(n);
        return !r && !i.getRootNode ? null : r || t(i.getRootNode().host);
    }
    return t(e);
}
function vl(n, e, t) {
    const i = Bt(),
        { params: r } = n,
        s = r.edgeSwipeDetection,
        o = r.edgeSwipeThreshold;
    return s && (t <= o || t >= i.innerWidth - o)
        ? s === "prevent"
            ? (e.preventDefault(), !0)
            : !1
        : !0;
}
function lp(n) {
    const e = this,
        t = Xi();
    let i = n;
    i.originalEvent && (i = i.originalEvent);
    const r = e.touchEventsData;
    if (i.type === "pointerdown") {
        if (r.pointerId !== null && r.pointerId !== i.pointerId) return;
        r.pointerId = i.pointerId;
    } else
        i.type === "touchstart" &&
            i.targetTouches.length === 1 &&
            (r.touchId = i.targetTouches[0].identifier);
    if (i.type === "touchstart") {
        vl(e, i, i.targetTouches[0].pageX);
        return;
    }
    const { params: s, touches: o, enabled: a } = e;
    if (
        !a ||
        (!s.simulateTouch && i.pointerType === "mouse") ||
        (e.animating && s.preventInteractionOnTransition)
    )
        return;
    !e.animating && s.cssMode && s.loop && e.loopFix();
    let l = i.target;
    if (
        (s.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(l)) ||
        ("which" in i && i.which === 3) ||
        ("button" in i && i.button > 0) ||
        (r.isTouched && r.isMoved)
    )
        return;
    const u = !!s.noSwipingClass && s.noSwipingClass !== "",
        d = i.composedPath ? i.composedPath() : i.path;
    u && i.target && i.target.shadowRoot && d && (l = d[0]);
    const f = s.noSwipingSelector
            ? s.noSwipingSelector
            : `.${s.noSwipingClass}`,
        p = !!(i.target && i.target.shadowRoot);
    if (s.noSwiping && (p ? ap(f, l) : l.closest(f))) {
        e.allowClick = !0;
        return;
    }
    if (s.swipeHandler && !l.closest(s.swipeHandler)) return;
    (o.currentX = i.pageX), (o.currentY = i.pageY);
    const c = o.currentX,
        g = o.currentY;
    if (!vl(e, i, c)) return;
    Object.assign(r, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
    }),
        (o.startX = c),
        (o.startY = g),
        (r.touchStartTime = Mr()),
        (e.allowClick = !0),
        e.updateSize(),
        (e.swipeDirection = void 0),
        s.threshold > 0 && (r.allowThresholdMove = !1);
    let h = !0;
    l.matches(r.focusableElements) &&
        ((h = !1), l.nodeName === "SELECT" && (r.isTouched = !1)),
        t.activeElement &&
            t.activeElement.matches(r.focusableElements) &&
            t.activeElement !== l &&
            t.activeElement.blur();
    const y = h && e.allowTouchMove && s.touchStartPreventDefault;
    (s.touchStartForcePreventDefault || y) &&
        !l.isContentEditable &&
        i.preventDefault(),
        s.freeMode &&
            s.freeMode.enabled &&
            e.freeMode &&
            e.animating &&
            !s.cssMode &&
            e.freeMode.onTouchStart(),
        e.emit("touchStart", i);
}
function cp(n) {
    const e = Xi(),
        t = this,
        i = t.touchEventsData,
        { params: r, touches: s, rtlTranslate: o, enabled: a } = t;
    if (!a || (!r.simulateTouch && n.pointerType === "mouse")) return;
    let l = n;
    if (
        (l.originalEvent && (l = l.originalEvent),
        l.type === "pointermove" &&
            (i.touchId !== null || l.pointerId !== i.pointerId))
    )
        return;
    let u;
    if (l.type === "touchmove") {
        if (
            ((u = [...l.changedTouches].filter(
                (O) => O.identifier === i.touchId
            )[0]),
            !u || u.identifier !== i.touchId)
        )
            return;
    } else u = l;
    if (!i.isTouched) {
        i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", l);
        return;
    }
    const d = u.pageX,
        f = u.pageY;
    if (l.preventedByNestedSwiper) {
        (s.startX = d), (s.startY = f);
        return;
    }
    if (!t.allowTouchMove) {
        l.target.matches(i.focusableElements) || (t.allowClick = !1),
            i.isTouched &&
                (Object.assign(s, {
                    startX: d,
                    startY: f,
                    currentX: d,
                    currentY: f,
                }),
                (i.touchStartTime = Mr()));
        return;
    }
    if (r.touchReleaseOnEdges && !r.loop) {
        if (t.isVertical()) {
            if (
                (f < s.startY && t.translate <= t.maxTranslate()) ||
                (f > s.startY && t.translate >= t.minTranslate())
            ) {
                (i.isTouched = !1), (i.isMoved = !1);
                return;
            }
        } else if (
            (d < s.startX && t.translate <= t.maxTranslate()) ||
            (d > s.startX && t.translate >= t.minTranslate())
        )
            return;
    }
    if (
        e.activeElement &&
        l.target === e.activeElement &&
        l.target.matches(i.focusableElements)
    ) {
        (i.isMoved = !0), (t.allowClick = !1);
        return;
    }
    i.allowTouchCallbacks && t.emit("touchMove", l),
        (s.previousX = s.currentX),
        (s.previousY = s.currentY),
        (s.currentX = d),
        (s.currentY = f);
    const p = s.currentX - s.startX,
        c = s.currentY - s.startY;
    if (t.params.threshold && Math.sqrt(p ** 2 + c ** 2) < t.params.threshold)
        return;
    if (typeof i.isScrolling > "u") {
        let O;
        (t.isHorizontal() && s.currentY === s.startY) ||
        (t.isVertical() && s.currentX === s.startX)
            ? (i.isScrolling = !1)
            : p * p + c * c >= 25 &&
              ((O = (Math.atan2(Math.abs(c), Math.abs(p)) * 180) / Math.PI),
              (i.isScrolling = t.isHorizontal()
                  ? O > r.touchAngle
                  : 90 - O > r.touchAngle));
    }
    if (
        (i.isScrolling && t.emit("touchMoveOpposite", l),
        typeof i.startMoving > "u" &&
            (s.currentX !== s.startX || s.currentY !== s.startY) &&
            (i.startMoving = !0),
        i.isScrolling ||
            (l.type === "touchmove" && i.preventTouchMoveFromPointerMove))
    ) {
        i.isTouched = !1;
        return;
    }
    if (!i.startMoving) return;
    (t.allowClick = !1),
        !r.cssMode && l.cancelable && l.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && l.stopPropagation();
    let g = t.isHorizontal() ? p : c,
        h = t.isHorizontal()
            ? s.currentX - s.previousX
            : s.currentY - s.previousY;
    r.oneWayMovement &&
        ((g = Math.abs(g) * (o ? 1 : -1)), (h = Math.abs(h) * (o ? 1 : -1))),
        (s.diff = g),
        (g *= r.touchRatio),
        o && ((g = -g), (h = -h));
    const y = t.touchesDirection;
    (t.swipeDirection = g > 0 ? "prev" : "next"),
        (t.touchesDirection = h > 0 ? "prev" : "next");
    const m = t.params.loop && !r.cssMode,
        _ =
            (t.touchesDirection === "next" && t.allowSlideNext) ||
            (t.touchesDirection === "prev" && t.allowSlidePrev);
    if (!i.isMoved) {
        if (
            (m && _ && t.loopFix({ direction: t.swipeDirection }),
            (i.startTranslate = t.getTranslate()),
            t.setTransition(0),
            t.animating)
        ) {
            const O = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0,
                detail: { bySwiperTouchMove: !0 },
            });
            t.wrapperEl.dispatchEvent(O);
        }
        (i.allowMomentumBounce = !1),
            r.grabCursor &&
                (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
                t.setGrabCursor(!0),
            t.emit("sliderFirstMove", l);
    }
    let v;
    if (
        (new Date().getTime(),
        i.isMoved &&
            i.allowThresholdMove &&
            y !== t.touchesDirection &&
            m &&
            _ &&
            Math.abs(g) >= 1)
    ) {
        Object.assign(s, {
            startX: d,
            startY: f,
            currentX: d,
            currentY: f,
            startTranslate: i.currentTranslate,
        }),
            (i.loopSwapReset = !0),
            (i.startTranslate = i.currentTranslate);
        return;
    }
    t.emit("sliderMove", l),
        (i.isMoved = !0),
        (i.currentTranslate = g + i.startTranslate);
    let w = !0,
        x = r.resistanceRatio;
    if (
        (r.touchReleaseOnEdges && (x = 0),
        g > 0
            ? (m &&
                  _ &&
                  !v &&
                  i.allowThresholdMove &&
                  i.currentTranslate >
                      (r.centeredSlides
                          ? t.minTranslate() -
                            t.slidesSizesGrid[t.activeIndex + 1]
                          : t.minTranslate()) &&
                  t.loopFix({
                      direction: "prev",
                      setTranslate: !0,
                      activeSlideIndex: 0,
                  }),
              i.currentTranslate > t.minTranslate() &&
                  ((w = !1),
                  r.resistance &&
                      (i.currentTranslate =
                          t.minTranslate() -
                          1 +
                          (-t.minTranslate() + i.startTranslate + g) ** x)))
            : g < 0 &&
              (m &&
                  _ &&
                  !v &&
                  i.allowThresholdMove &&
                  i.currentTranslate <
                      (r.centeredSlides
                          ? t.maxTranslate() +
                            t.slidesSizesGrid[t.slidesSizesGrid.length - 1]
                          : t.maxTranslate()) &&
                  t.loopFix({
                      direction: "next",
                      setTranslate: !0,
                      activeSlideIndex:
                          t.slides.length -
                          (r.slidesPerView === "auto"
                              ? t.slidesPerViewDynamic()
                              : Math.ceil(parseFloat(r.slidesPerView, 10))),
                  }),
              i.currentTranslate < t.maxTranslate() &&
                  ((w = !1),
                  r.resistance &&
                      (i.currentTranslate =
                          t.maxTranslate() +
                          1 -
                          (t.maxTranslate() - i.startTranslate - g) ** x))),
        w && (l.preventedByNestedSwiper = !0),
        !t.allowSlideNext &&
            t.swipeDirection === "next" &&
            i.currentTranslate < i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
        !t.allowSlidePrev &&
            t.swipeDirection === "prev" &&
            i.currentTranslate > i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
        !t.allowSlidePrev &&
            !t.allowSlideNext &&
            (i.currentTranslate = i.startTranslate),
        r.threshold > 0)
    )
        if (Math.abs(g) > r.threshold || i.allowThresholdMove) {
            if (!i.allowThresholdMove) {
                (i.allowThresholdMove = !0),
                    (s.startX = s.currentX),
                    (s.startY = s.currentY),
                    (i.currentTranslate = i.startTranslate),
                    (s.diff = t.isHorizontal()
                        ? s.currentX - s.startX
                        : s.currentY - s.startY);
                return;
            }
        } else {
            i.currentTranslate = i.startTranslate;
            return;
        }
    !r.followFinger ||
        r.cssMode ||
        (((r.freeMode && r.freeMode.enabled && t.freeMode) ||
            r.watchSlidesProgress) &&
            (t.updateActiveIndex(), t.updateSlidesClasses()),
        r.freeMode &&
            r.freeMode.enabled &&
            t.freeMode &&
            t.freeMode.onTouchMove(),
        t.updateProgress(i.currentTranslate),
        t.setTranslate(i.currentTranslate));
}
function up(n) {
    const e = this,
        t = e.touchEventsData;
    let i = n;
    i.originalEvent && (i = i.originalEvent);
    let r;
    if (i.type === "touchend" || i.type === "touchcancel") {
        if (
            ((r = [...i.changedTouches].filter(
                (x) => x.identifier === t.touchId
            )[0]),
            !r || r.identifier !== t.touchId)
        )
            return;
    } else {
        if (t.touchId !== null || i.pointerId !== t.pointerId) return;
        r = i;
    }
    if (
        ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
            i.type
        ) &&
        !(
            ["pointercancel", "contextmenu"].includes(i.type) &&
            (e.browser.isSafari || e.browser.isWebView)
        )
    )
        return;
    (t.pointerId = null), (t.touchId = null);
    const {
        params: o,
        touches: a,
        rtlTranslate: l,
        slidesGrid: u,
        enabled: d,
    } = e;
    if (!d || (!o.simulateTouch && i.pointerType === "mouse")) return;
    if (
        (t.allowTouchCallbacks && e.emit("touchEnd", i),
        (t.allowTouchCallbacks = !1),
        !t.isTouched)
    ) {
        t.isMoved && o.grabCursor && e.setGrabCursor(!1),
            (t.isMoved = !1),
            (t.startMoving = !1);
        return;
    }
    o.grabCursor &&
        t.isMoved &&
        t.isTouched &&
        (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
        e.setGrabCursor(!1);
    const f = Mr(),
        p = f - t.touchStartTime;
    if (e.allowClick) {
        const x = i.path || (i.composedPath && i.composedPath());
        e.updateClickedSlide((x && x[0]) || i.target, x),
            e.emit("tap click", i),
            p < 300 &&
                f - t.lastClickTime < 300 &&
                e.emit("doubleTap doubleClick", i);
    }
    if (
        ((t.lastClickTime = Mr()),
        Ws(() => {
            e.destroyed || (e.allowClick = !0);
        }),
        !t.isTouched ||
            !t.isMoved ||
            !e.swipeDirection ||
            (a.diff === 0 && !t.loopSwapReset) ||
            (t.currentTranslate === t.startTranslate && !t.loopSwapReset))
    ) {
        (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
        return;
    }
    (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
    let c;
    if (
        (o.followFinger
            ? (c = l ? e.translate : -e.translate)
            : (c = -t.currentTranslate),
        o.cssMode)
    )
        return;
    if (o.freeMode && o.freeMode.enabled) {
        e.freeMode.onTouchEnd({ currentPos: c });
        return;
    }
    const g = c >= -e.maxTranslate() && !e.params.loop;
    let h = 0,
        y = e.slidesSizesGrid[0];
    for (
        let x = 0;
        x < u.length;
        x += x < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
    ) {
        const O = x < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
        typeof u[x + O] < "u"
            ? (g || (c >= u[x] && c < u[x + O])) &&
              ((h = x), (y = u[x + O] - u[x]))
            : (g || c >= u[x]) &&
              ((h = x), (y = u[u.length - 1] - u[u.length - 2]));
    }
    let m = null,
        _ = null;
    o.rewind &&
        (e.isBeginning
            ? (_ =
                  o.virtual && o.virtual.enabled && e.virtual
                      ? e.virtual.slides.length - 1
                      : e.slides.length - 1)
            : e.isEnd && (m = 0));
    const v = (c - u[h]) / y,
        w = h < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    if (p > o.longSwipesMs) {
        if (!o.longSwipes) {
            e.slideTo(e.activeIndex);
            return;
        }
        e.swipeDirection === "next" &&
            (v >= o.longSwipesRatio
                ? e.slideTo(o.rewind && e.isEnd ? m : h + w)
                : e.slideTo(h)),
            e.swipeDirection === "prev" &&
                (v > 1 - o.longSwipesRatio
                    ? e.slideTo(h + w)
                    : _ !== null && v < 0 && Math.abs(v) > o.longSwipesRatio
                    ? e.slideTo(_)
                    : e.slideTo(h));
    } else {
        if (!o.shortSwipes) {
            e.slideTo(e.activeIndex);
            return;
        }
        e.navigation &&
        (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl)
            ? i.target === e.navigation.nextEl
                ? e.slideTo(h + w)
                : e.slideTo(h)
            : (e.swipeDirection === "next" && e.slideTo(m !== null ? m : h + w),
              e.swipeDirection === "prev" && e.slideTo(_ !== null ? _ : h));
    }
}
function yl() {
    const n = this,
        { params: e, el: t } = n;
    if (t && t.offsetWidth === 0) return;
    e.breakpoints && n.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: r, snapGrid: s } = n,
        o = n.virtual && n.params.virtual.enabled;
    (n.allowSlideNext = !0),
        (n.allowSlidePrev = !0),
        n.updateSize(),
        n.updateSlides(),
        n.updateSlidesClasses();
    const a = o && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
    n.isEnd &&
    !n.isBeginning &&
    !n.params.centeredSlides &&
    !a
        ? n.slideTo(n.slides.length - 1, 0, !1, !0)
        : n.params.loop && !o
        ? n.slideToLoop(n.realIndex, 0, !1, !0)
        : n.slideTo(n.activeIndex, 0, !1, !0),
        n.autoplay &&
            n.autoplay.running &&
            n.autoplay.paused &&
            (clearTimeout(n.autoplay.resizeTimeout),
            (n.autoplay.resizeTimeout = setTimeout(() => {
                n.autoplay &&
                    n.autoplay.running &&
                    n.autoplay.paused &&
                    n.autoplay.resume();
            }, 500))),
        (n.allowSlidePrev = r),
        (n.allowSlideNext = i),
        n.params.watchOverflow && s !== n.snapGrid && n.checkOverflow();
}
function dp(n) {
    const e = this;
    e.enabled &&
        (e.allowClick ||
            (e.params.preventClicks && n.preventDefault(),
            e.params.preventClicksPropagation &&
                e.animating &&
                (n.stopPropagation(), n.stopImmediatePropagation())));
}
function fp() {
    const n = this,
        { wrapperEl: e, rtlTranslate: t, enabled: i } = n;
    if (!i) return;
    (n.previousTranslate = n.translate),
        n.isHorizontal()
            ? (n.translate = -e.scrollLeft)
            : (n.translate = -e.scrollTop),
        n.translate === 0 && (n.translate = 0),
        n.updateActiveIndex(),
        n.updateSlidesClasses();
    let r;
    const s = n.maxTranslate() - n.minTranslate();
    s === 0 ? (r = 0) : (r = (n.translate - n.minTranslate()) / s),
        r !== n.progress && n.updateProgress(t ? -n.translate : n.translate),
        n.emit("setTranslate", n.translate, !1);
}
function pp(n) {
    const e = this;
    Ds(e, n.target),
        !(
            e.params.cssMode ||
            (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
        ) && e.update();
}
function hp() {
    const n = this;
    n.documentTouchHandlerProceeded ||
        ((n.documentTouchHandlerProceeded = !0),
        n.params.touchReleaseOnEdges && (n.el.style.touchAction = "auto"));
}
const ru = (n, e) => {
    const t = Xi(),
        { params: i, el: r, wrapperEl: s, device: o } = n,
        a = !!i.nested,
        l = e === "on" ? "addEventListener" : "removeEventListener",
        u = e;
    !r ||
        typeof r == "string" ||
        (t[l]("touchstart", n.onDocumentTouchStart, {
            passive: !1,
            capture: a,
        }),
        r[l]("touchstart", n.onTouchStart, { passive: !1 }),
        r[l]("pointerdown", n.onTouchStart, { passive: !1 }),
        t[l]("touchmove", n.onTouchMove, { passive: !1, capture: a }),
        t[l]("pointermove", n.onTouchMove, { passive: !1, capture: a }),
        t[l]("touchend", n.onTouchEnd, { passive: !0 }),
        t[l]("pointerup", n.onTouchEnd, { passive: !0 }),
        t[l]("pointercancel", n.onTouchEnd, { passive: !0 }),
        t[l]("touchcancel", n.onTouchEnd, { passive: !0 }),
        t[l]("pointerout", n.onTouchEnd, { passive: !0 }),
        t[l]("pointerleave", n.onTouchEnd, { passive: !0 }),
        t[l]("contextmenu", n.onTouchEnd, { passive: !0 }),
        (i.preventClicks || i.preventClicksPropagation) &&
            r[l]("click", n.onClick, !0),
        i.cssMode && s[l]("scroll", n.onScroll),
        i.updateOnWindowResize
            ? n[u](
                  o.ios || o.android
                      ? "resize orientationchange observerUpdate"
                      : "resize observerUpdate",
                  yl,
                  !0
              )
            : n[u]("observerUpdate", yl, !0),
        r[l]("load", n.onLoad, { capture: !0 }));
};
function gp() {
    const n = this,
        { params: e } = n;
    (n.onTouchStart = lp.bind(n)),
        (n.onTouchMove = cp.bind(n)),
        (n.onTouchEnd = up.bind(n)),
        (n.onDocumentTouchStart = hp.bind(n)),
        e.cssMode && (n.onScroll = fp.bind(n)),
        (n.onClick = dp.bind(n)),
        (n.onLoad = pp.bind(n)),
        ru(n, "on");
}
function mp() {
    ru(this, "off");
}
var _p = { attachEvents: gp, detachEvents: mp };
const wl = (n, e) => n.grid && e.grid && e.grid.rows > 1;
function vp() {
    const n = this,
        { realIndex: e, initialized: t, params: i, el: r } = n,
        s = i.breakpoints;
    if (!s || (s && Object.keys(s).length === 0)) return;
    const o = n.getBreakpoint(s, n.params.breakpointsBase, n.el);
    if (!o || n.currentBreakpoint === o) return;
    const l = (o in s ? s[o] : void 0) || n.originalParams,
        u = wl(n, i),
        d = wl(n, l),
        f = n.params.grabCursor,
        p = l.grabCursor,
        c = i.enabled;
    u && !d
        ? (r.classList.remove(
              `${i.containerModifierClass}grid`,
              `${i.containerModifierClass}grid-column`
          ),
          n.emitContainerClasses())
        : !u &&
          d &&
          (r.classList.add(`${i.containerModifierClass}grid`),
          ((l.grid.fill && l.grid.fill === "column") ||
              (!l.grid.fill && i.grid.fill === "column")) &&
              r.classList.add(`${i.containerModifierClass}grid-column`),
          n.emitContainerClasses()),
        f && !p ? n.unsetGrabCursor() : !f && p && n.setGrabCursor(),
        ["navigation", "pagination", "scrollbar"].forEach((v) => {
            if (typeof l[v] > "u") return;
            const w = i[v] && i[v].enabled,
                x = l[v] && l[v].enabled;
            w && !x && n[v].disable(), !w && x && n[v].enable();
        });
    const g = l.direction && l.direction !== i.direction,
        h = i.loop && (l.slidesPerView !== i.slidesPerView || g),
        y = i.loop;
    g && t && n.changeDirection(), jt(n.params, l);
    const m = n.params.enabled,
        _ = n.params.loop;
    Object.assign(n, {
        allowTouchMove: n.params.allowTouchMove,
        allowSlideNext: n.params.allowSlideNext,
        allowSlidePrev: n.params.allowSlidePrev,
    }),
        c && !m ? n.disable() : !c && m && n.enable(),
        (n.currentBreakpoint = o),
        n.emit("_beforeBreakpoint", l),
        t &&
            (h
                ? (n.loopDestroy(), n.loopCreate(e), n.updateSlides())
                : !y && _
                ? (n.loopCreate(e), n.updateSlides())
                : y && !_ && n.loopDestroy()),
        n.emit("breakpoint", l);
}
function yp(n, e, t) {
    if ((e === void 0 && (e = "window"), !n || (e === "container" && !t)))
        return;
    let i = !1;
    const r = Bt(),
        s = e === "window" ? r.innerHeight : t.clientHeight,
        o = Object.keys(n).map((a) => {
            if (typeof a == "string" && a.indexOf("@") === 0) {
                const l = parseFloat(a.substr(1));
                return { value: s * l, point: a };
            }
            return { value: a, point: a };
        });
    o.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
    for (let a = 0; a < o.length; a += 1) {
        const { point: l, value: u } = o[a];
        e === "window"
            ? r.matchMedia(`(min-width: ${u}px)`).matches && (i = l)
            : u <= t.clientWidth && (i = l);
    }
    return i || "max";
}
var wp = { setBreakpoint: vp, getBreakpoint: yp };
function xp(n, e) {
    const t = [];
    return (
        n.forEach((i) => {
            typeof i == "object"
                ? Object.keys(i).forEach((r) => {
                      i[r] && t.push(e + r);
                  })
                : typeof i == "string" && t.push(e + i);
        }),
        t
    );
}
function bp() {
    const n = this,
        { classNames: e, params: t, rtl: i, el: r, device: s } = n,
        o = xp(
            [
                "initialized",
                t.direction,
                { "free-mode": n.params.freeMode && t.freeMode.enabled },
                { autoheight: t.autoHeight },
                { rtl: i },
                { grid: t.grid && t.grid.rows > 1 },
                {
                    "grid-column":
                        t.grid && t.grid.rows > 1 && t.grid.fill === "column",
                },
                { android: s.android },
                { ios: s.ios },
                { "css-mode": t.cssMode },
                { centered: t.cssMode && t.centeredSlides },
                { "watch-progress": t.watchSlidesProgress },
            ],
            t.containerModifierClass
        );
    e.push(...o), r.classList.add(...e), n.emitContainerClasses();
}
function Tp() {
    const n = this,
        { el: e, classNames: t } = n;
    !e ||
        typeof e == "string" ||
        (e.classList.remove(...t), n.emitContainerClasses());
}
var Sp = { addClasses: bp, removeClasses: Tp };
function Ep() {
    const n = this,
        { isLocked: e, params: t } = n,
        { slidesOffsetBefore: i } = t;
    if (i) {
        const r = n.slides.length - 1,
            s = n.slidesGrid[r] + n.slidesSizesGrid[r] + i * 2;
        n.isLocked = n.size > s;
    } else n.isLocked = n.snapGrid.length === 1;
    t.allowSlideNext === !0 && (n.allowSlideNext = !n.isLocked),
        t.allowSlidePrev === !0 && (n.allowSlidePrev = !n.isLocked),
        e && e !== n.isLocked && (n.isEnd = !1),
        e !== n.isLocked && n.emit(n.isLocked ? "lock" : "unlock");
}
var Cp = { checkOverflow: Ep },
    xl = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements:
            "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
    };
function Pp(n, e) {
    return function (i) {
        i === void 0 && (i = {});
        const r = Object.keys(i)[0],
            s = i[r];
        if (typeof s != "object" || s === null) {
            jt(e, i);
            return;
        }
        if (
            (n[r] === !0 && (n[r] = { enabled: !0 }),
            r === "navigation" &&
                n[r] &&
                n[r].enabled &&
                !n[r].prevEl &&
                !n[r].nextEl &&
                (n[r].auto = !0),
            ["pagination", "scrollbar"].indexOf(r) >= 0 &&
                n[r] &&
                n[r].enabled &&
                !n[r].el &&
                (n[r].auto = !0),
            !(r in n && "enabled" in s))
        ) {
            jt(e, i);
            return;
        }
        typeof n[r] == "object" && !("enabled" in n[r]) && (n[r].enabled = !0),
            n[r] || (n[r] = { enabled: !1 }),
            jt(e, i);
    };
}
const Eo = {
        eventsEmitter: Sf,
        update: Rf,
        translate: Vf,
        transition: Xf,
        slide: Jf,
        loop: rp,
        grabCursor: op,
        events: _p,
        breakpoints: wp,
        checkOverflow: Cp,
        classes: Sp,
    },
    Co = {};
class dt {
    constructor() {
        let e, t;
        for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++)
            r[s] = arguments[s];
        r.length === 1 &&
        r[0].constructor &&
        Object.prototype.toString.call(r[0]).slice(8, -1) === "Object"
            ? (t = r[0])
            : ([e, t] = r),
            t || (t = {}),
            (t = jt({}, t)),
            e && !t.el && (t.el = e);
        const o = Xi();
        if (
            t.el &&
            typeof t.el == "string" &&
            o.querySelectorAll(t.el).length > 1
        ) {
            const d = [];
            return (
                o.querySelectorAll(t.el).forEach((f) => {
                    const p = jt({}, t, { el: f });
                    d.push(new dt(p));
                }),
                d
            );
        }
        const a = this;
        (a.__swiper__ = !0),
            (a.support = eu()),
            (a.device = tu({ userAgent: t.userAgent })),
            (a.browser = xf()),
            (a.eventsListeners = {}),
            (a.eventsAnyListeners = []),
            (a.modules = [...a.__modules__]),
            t.modules &&
                Array.isArray(t.modules) &&
                a.modules.push(...t.modules);
        const l = {};
        a.modules.forEach((d) => {
            d({
                params: t,
                swiper: a,
                extendParams: Pp(t, l),
                on: a.on.bind(a),
                once: a.once.bind(a),
                off: a.off.bind(a),
                emit: a.emit.bind(a),
            });
        });
        const u = jt({}, xl, l);
        return (
            (a.params = jt({}, u, Co, t)),
            (a.originalParams = jt({}, a.params)),
            (a.passedParams = jt({}, t)),
            a.params &&
                a.params.on &&
                Object.keys(a.params.on).forEach((d) => {
                    a.on(d, a.params.on[d]);
                }),
            a.params && a.params.onAny && a.onAny(a.params.onAny),
            Object.assign(a, {
                enabled: a.params.enabled,
                el: e,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal() {
                    return a.params.direction === "horizontal";
                },
                isVertical() {
                    return a.params.direction === "vertical";
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                },
                allowSlideNext: a.params.allowSlideNext,
                allowSlidePrev: a.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: a.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    pointerId: null,
                    touchId: null,
                },
                allowClick: !0,
                allowTouchMove: a.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
            }),
            a.emit("_swiper"),
            a.params.init && a.init(),
            a
        );
    }
    getDirectionLabel(e) {
        return this.isHorizontal()
            ? e
            : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
              }[e];
    }
    getSlideIndex(e) {
        const { slidesEl: t, params: i } = this,
            r = vi(t, `.${i.slideClass}, swiper-slide`),
            s = Ks(r[0]);
        return Ks(e) - s;
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(
            this.slides.filter(
                (t) => t.getAttribute("data-swiper-slide-index") * 1 === e
            )[0]
        );
    }
    recalcSlides() {
        const e = this,
            { slidesEl: t, params: i } = e;
        e.slides = vi(t, `.${i.slideClass}, swiper-slide`);
    }
    enable() {
        const e = this;
        e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
    }
    disable() {
        const e = this;
        e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
    }
    setProgress(e, t) {
        const i = this;
        e = Math.min(Math.max(e, 0), 1);
        const r = i.minTranslate(),
            o = (i.maxTranslate() - r) * e + r;
        i.translateTo(o, typeof t > "u" ? 0 : t),
            i.updateActiveIndex(),
            i.updateSlidesClasses();
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
            .split(" ")
            .filter(
                (i) =>
                    i.indexOf("swiper") === 0 ||
                    i.indexOf(e.params.containerModifierClass) === 0
            );
        e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
        const t = this;
        return t.destroyed
            ? ""
            : e.className
                  .split(" ")
                  .filter(
                      (i) =>
                          i.indexOf("swiper-slide") === 0 ||
                          i.indexOf(t.params.slideClass) === 0
                  )
                  .join(" ");
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((i) => {
            const r = e.getSlideClasses(i);
            t.push({ slideEl: i, classNames: r }), e.emit("_slideClass", i, r);
        }),
            e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
        e === void 0 && (e = "current"), t === void 0 && (t = !1);
        const i = this,
            {
                params: r,
                slides: s,
                slidesGrid: o,
                slidesSizesGrid: a,
                size: l,
                activeIndex: u,
            } = i;
        let d = 1;
        if (typeof r.slidesPerView == "number") return r.slidesPerView;
        if (r.centeredSlides) {
            let f = s[u] ? Math.ceil(s[u].swiperSlideSize) : 0,
                p;
            for (let c = u + 1; c < s.length; c += 1)
                s[c] &&
                    !p &&
                    ((f += Math.ceil(s[c].swiperSlideSize)),
                    (d += 1),
                    f > l && (p = !0));
            for (let c = u - 1; c >= 0; c -= 1)
                s[c] &&
                    !p &&
                    ((f += s[c].swiperSlideSize), (d += 1), f > l && (p = !0));
        } else if (e === "current")
            for (let f = u + 1; f < s.length; f += 1)
                (t ? o[f] + a[f] - o[u] < l : o[f] - o[u] < l) && (d += 1);
        else for (let f = u - 1; f >= 0; f -= 1) o[u] - o[f] < l && (d += 1);
        return d;
    }
    update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: i } = e;
        i.breakpoints && e.setBreakpoint(),
            [...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
                o.complete && Ds(e, o);
            }),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses();
        function r() {
            const o = e.rtlTranslate ? e.translate * -1 : e.translate,
                a = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
            e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let s;
        if (i.freeMode && i.freeMode.enabled && !i.cssMode)
            r(), i.autoHeight && e.updateAutoHeight();
        else {
            if (
                (i.slidesPerView === "auto" || i.slidesPerView > 1) &&
                e.isEnd &&
                !i.centeredSlides
            ) {
                const o =
                    e.virtual && i.virtual.enabled
                        ? e.virtual.slides
                        : e.slides;
                s = e.slideTo(o.length - 1, 0, !1, !0);
            } else s = e.slideTo(e.activeIndex, 0, !1, !0);
            s || r();
        }
        i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
    }
    changeDirection(e, t) {
        t === void 0 && (t = !0);
        const i = this,
            r = i.params.direction;
        return (
            e || (e = r === "horizontal" ? "vertical" : "horizontal"),
            e === r ||
                (e !== "horizontal" && e !== "vertical") ||
                (i.el.classList.remove(
                    `${i.params.containerModifierClass}${r}`
                ),
                i.el.classList.add(`${i.params.containerModifierClass}${e}`),
                i.emitContainerClasses(),
                (i.params.direction = e),
                i.slides.forEach((s) => {
                    e === "vertical"
                        ? (s.style.width = "")
                        : (s.style.height = "");
                }),
                i.emit("changeDirection"),
                t && i.update()),
            i
        );
    }
    changeLanguageDirection(e) {
        const t = this;
        (t.rtl && e === "rtl") ||
            (!t.rtl && e === "ltr") ||
            ((t.rtl = e === "rtl"),
            (t.rtlTranslate = t.params.direction === "horizontal" && t.rtl),
            t.rtl
                ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
                  (t.el.dir = "rtl"))
                : (t.el.classList.remove(
                      `${t.params.containerModifierClass}rtl`
                  ),
                  (t.el.dir = "ltr")),
            t.update());
    }
    mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let i = e || t.params.el;
        if ((typeof i == "string" && (i = document.querySelector(i)), !i))
            return !1;
        (i.swiper = t),
            i.parentNode &&
                i.parentNode.host &&
                i.parentNode.host.nodeName ===
                    t.params.swiperElementNodeName.toUpperCase() &&
                (t.isElement = !0);
        const r = () =>
            `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let o =
            i && i.shadowRoot && i.shadowRoot.querySelector
                ? i.shadowRoot.querySelector(r())
                : vi(i, r())[0];
        return (
            !o &&
                t.params.createElements &&
                ((o = rs("div", t.params.wrapperClass)),
                i.append(o),
                vi(i, `.${t.params.slideClass}`).forEach((a) => {
                    o.append(a);
                })),
            Object.assign(t, {
                el: i,
                wrapperEl: o,
                slidesEl:
                    t.isElement && !i.parentNode.host.slideSlots
                        ? i.parentNode.host
                        : o,
                hostEl: t.isElement ? i.parentNode.host : i,
                mounted: !0,
                rtl:
                    i.dir.toLowerCase() === "rtl" ||
                    tr(i, "direction") === "rtl",
                rtlTranslate:
                    t.params.direction === "horizontal" &&
                    (i.dir.toLowerCase() === "rtl" ||
                        tr(i, "direction") === "rtl"),
                wrongRTL: tr(o, "display") === "-webkit-box",
            }),
            !0
        );
    }
    init(e) {
        const t = this;
        if (t.initialized || t.mount(e) === !1) return t;
        t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
                ? t.slideTo(
                      t.params.initialSlide + t.virtual.slidesBefore,
                      0,
                      t.params.runCallbacksOnInit,
                      !1,
                      !0
                  )
                : t.slideTo(
                      t.params.initialSlide,
                      0,
                      t.params.runCallbacksOnInit,
                      !1,
                      !0
                  ),
            t.params.loop && t.loopCreate(),
            t.attachEvents();
        const r = [...t.el.querySelectorAll('[loading="lazy"]')];
        return (
            t.isElement &&
                r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
            r.forEach((s) => {
                s.complete
                    ? Ds(t, s)
                    : s.addEventListener("load", (o) => {
                          Ds(t, o.target);
                      });
            }),
            ra(t),
            (t.initialized = !0),
            ra(t),
            t.emit("init"),
            t.emit("afterInit"),
            t
        );
    }
    destroy(e, t) {
        e === void 0 && (e = !0), t === void 0 && (t = !0);
        const i = this,
            { params: r, el: s, wrapperEl: o, slides: a } = i;
        return (
            typeof i.params > "u" ||
                i.destroyed ||
                (i.emit("beforeDestroy"),
                (i.initialized = !1),
                i.detachEvents(),
                r.loop && i.loopDestroy(),
                t &&
                    (i.removeClasses(),
                    s && typeof s != "string" && s.removeAttribute("style"),
                    o && o.removeAttribute("style"),
                    a &&
                        a.length &&
                        a.forEach((l) => {
                            l.classList.remove(
                                r.slideVisibleClass,
                                r.slideFullyVisibleClass,
                                r.slideActiveClass,
                                r.slideNextClass,
                                r.slidePrevClass
                            ),
                                l.removeAttribute("style"),
                                l.removeAttribute("data-swiper-slide-index");
                        })),
                i.emit("destroy"),
                Object.keys(i.eventsListeners).forEach((l) => {
                    i.off(l);
                }),
                e !== !1 &&
                    (i.el && typeof i.el != "string" && (i.el.swiper = null),
                    df(i)),
                (i.destroyed = !0)),
            null
        );
    }
    static extendDefaults(e) {
        jt(Co, e);
    }
    static get extendedDefaults() {
        return Co;
    }
    static get defaults() {
        return xl;
    }
    static installModule(e) {
        dt.prototype.__modules__ || (dt.prototype.__modules__ = []);
        const t = dt.prototype.__modules__;
        typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
        return Array.isArray(e)
            ? (e.forEach((t) => dt.installModule(t)), dt)
            : (dt.installModule(e), dt);
    }
}
Object.keys(Eo).forEach((n) => {
    Object.keys(Eo[n]).forEach((e) => {
        dt.prototype[e] = Eo[n][e];
    });
});
dt.use([bf, Tf]);
function Va(n, e, t, i) {
    return (
        n.params.createElements &&
            Object.keys(i).forEach((r) => {
                if (!t[r] && t.auto === !0) {
                    let s = vi(n.el, `.${i[r]}`)[0];
                    s ||
                        ((s = rs("div", i[r])),
                        (s.className = i[r]),
                        n.el.append(s)),
                        (t[r] = s),
                        (e[r] = s);
                }
            }),
        t
    );
}
function na(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    t({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled",
        },
    }),
        (e.navigation = { nextEl: null, prevEl: null });
    function s(g) {
        let h;
        return g &&
            typeof g == "string" &&
            e.isElement &&
            ((h = e.el.querySelector(g)), h)
            ? h
            : (g &&
                  (typeof g == "string" &&
                      (h = [...document.querySelectorAll(g)]),
                  e.params.uniqueNavElements &&
                  typeof g == "string" &&
                  h &&
                  h.length > 1 &&
                  e.el.querySelectorAll(g).length === 1
                      ? (h = e.el.querySelector(g))
                      : h && h.length === 1 && (h = h[0])),
              g && !h ? g : h);
    }
    function o(g, h) {
        const y = e.params.navigation;
        (g = tt(g)),
            g.forEach((m) => {
                m &&
                    (m.classList[h ? "add" : "remove"](
                        ...y.disabledClass.split(" ")
                    ),
                    m.tagName === "BUTTON" && (m.disabled = h),
                    e.params.watchOverflow &&
                        e.enabled &&
                        m.classList[e.isLocked ? "add" : "remove"](
                            y.lockClass
                        ));
            });
    }
    function a() {
        const { nextEl: g, prevEl: h } = e.navigation;
        if (e.params.loop) {
            o(h, !1), o(g, !1);
            return;
        }
        o(h, e.isBeginning && !e.params.rewind),
            o(g, e.isEnd && !e.params.rewind);
    }
    function l(g) {
        g.preventDefault(),
            !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
                (e.slidePrev(), r("navigationPrev"));
    }
    function u(g) {
        g.preventDefault(),
            !(e.isEnd && !e.params.loop && !e.params.rewind) &&
                (e.slideNext(), r("navigationNext"));
    }
    function d() {
        const g = e.params.navigation;
        if (
            ((e.params.navigation = Va(
                e,
                e.originalParams.navigation,
                e.params.navigation,
                { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !(g.nextEl || g.prevEl))
        )
            return;
        let h = s(g.nextEl),
            y = s(g.prevEl);
        Object.assign(e.navigation, { nextEl: h, prevEl: y }),
            (h = tt(h)),
            (y = tt(y));
        const m = (_, v) => {
            _ && _.addEventListener("click", v === "next" ? u : l),
                !e.enabled && _ && _.classList.add(...g.lockClass.split(" "));
        };
        h.forEach((_) => m(_, "next")), y.forEach((_) => m(_, "prev"));
    }
    function f() {
        let { nextEl: g, prevEl: h } = e.navigation;
        (g = tt(g)), (h = tt(h));
        const y = (m, _) => {
            m.removeEventListener("click", _ === "next" ? u : l),
                m.classList.remove(
                    ...e.params.navigation.disabledClass.split(" ")
                );
        };
        g.forEach((m) => y(m, "next")), h.forEach((m) => y(m, "prev"));
    }
    i("init", () => {
        e.params.navigation.enabled === !1 ? c() : (d(), a());
    }),
        i("toEdge fromEdge lock unlock", () => {
            a();
        }),
        i("destroy", () => {
            f();
        }),
        i("enable disable", () => {
            let { nextEl: g, prevEl: h } = e.navigation;
            if (((g = tt(g)), (h = tt(h)), e.enabled)) {
                a();
                return;
            }
            [...g, ...h]
                .filter((y) => !!y)
                .forEach((y) => y.classList.add(e.params.navigation.lockClass));
        }),
        i("click", (g, h) => {
            let { nextEl: y, prevEl: m } = e.navigation;
            (y = tt(y)), (m = tt(m));
            const _ = h.target;
            let v = m.includes(_) || y.includes(_);
            if (e.isElement && !v) {
                const w = h.path || (h.composedPath && h.composedPath());
                w && (v = w.find((x) => y.includes(x) || m.includes(x)));
            }
            if (e.params.navigation.hideOnClick && !v) {
                if (
                    e.pagination &&
                    e.params.pagination &&
                    e.params.pagination.clickable &&
                    (e.pagination.el === _ || e.pagination.el.contains(_))
                )
                    return;
                let w;
                y.length
                    ? (w = y[0].classList.contains(
                          e.params.navigation.hiddenClass
                      ))
                    : m.length &&
                      (w = m[0].classList.contains(
                          e.params.navigation.hiddenClass
                      )),
                    r(w === !0 ? "navigationShow" : "navigationHide"),
                    [...y, ...m]
                        .filter((x) => !!x)
                        .forEach((x) =>
                            x.classList.toggle(e.params.navigation.hiddenClass)
                        );
            }
        });
    const p = () => {
            e.el.classList.remove(
                ...e.params.navigation.navigationDisabledClass.split(" ")
            ),
                d(),
                a();
        },
        c = () => {
            e.el.classList.add(
                ...e.params.navigation.navigationDisabledClass.split(" ")
            ),
                f();
        };
    Object.assign(e.navigation, {
        enable: p,
        disable: c,
        update: a,
        init: d,
        destroy: f,
    });
}
function qr(n) {
    return (
        n === void 0 && (n = ""),
        `.${n
            .trim()
            .replace(/([\.:!+\/])/g, "\\$1")
            .replace(/ /g, ".")}`
    );
}
function Mp(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = "swiper-pagination";
    t({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (m) => m,
            formatFractionTotal: (m) => m,
            bulletClass: `${s}-bullet`,
            bulletActiveClass: `${s}-bullet-active`,
            modifierClass: `${s}-`,
            currentClass: `${s}-current`,
            totalClass: `${s}-total`,
            hiddenClass: `${s}-hidden`,
            progressbarFillClass: `${s}-progressbar-fill`,
            progressbarOppositeClass: `${s}-progressbar-opposite`,
            clickableClass: `${s}-clickable`,
            lockClass: `${s}-lock`,
            horizontalClass: `${s}-horizontal`,
            verticalClass: `${s}-vertical`,
            paginationDisabledClass: `${s}-disabled`,
        },
    }),
        (e.pagination = { el: null, bullets: [] });
    let o,
        a = 0;
    function l() {
        return (
            !e.params.pagination.el ||
            !e.pagination.el ||
            (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
        );
    }
    function u(m, _) {
        const { bulletActiveClass: v } = e.params.pagination;
        m &&
            ((m = m[`${_ === "prev" ? "previous" : "next"}ElementSibling`]),
            m &&
                (m.classList.add(`${v}-${_}`),
                (m = m[`${_ === "prev" ? "previous" : "next"}ElementSibling`]),
                m && m.classList.add(`${v}-${_}-${_}`)));
    }
    function d(m) {
        const _ = m.target.closest(qr(e.params.pagination.bulletClass));
        if (!_) return;
        m.preventDefault();
        const v = Ks(_) * e.params.slidesPerGroup;
        if (e.params.loop) {
            if (e.realIndex === v) return;
            e.slideToLoop(v);
        } else e.slideTo(v);
    }
    function f() {
        const m = e.rtl,
            _ = e.params.pagination;
        if (l()) return;
        let v = e.pagination.el;
        v = tt(v);
        let w, x;
        const O =
                e.virtual && e.params.virtual.enabled
                    ? e.virtual.slides.length
                    : e.slides.length,
            k = e.params.loop
                ? Math.ceil(O / e.params.slidesPerGroup)
                : e.snapGrid.length;
        if (
            (e.params.loop
                ? ((x = e.previousRealIndex || 0),
                  (w =
                      e.params.slidesPerGroup > 1
                          ? Math.floor(e.realIndex / e.params.slidesPerGroup)
                          : e.realIndex))
                : typeof e.snapIndex < "u"
                ? ((w = e.snapIndex), (x = e.previousSnapIndex))
                : ((x = e.previousIndex || 0), (w = e.activeIndex || 0)),
            _.type === "bullets" &&
                e.pagination.bullets &&
                e.pagination.bullets.length > 0)
        ) {
            const E = e.pagination.bullets;
            let I, P, R;
            if (
                (_.dynamicBullets &&
                    ((o = ia(E[0], e.isHorizontal() ? "width" : "height")),
                    v.forEach((T) => {
                        T.style[e.isHorizontal() ? "width" : "height"] = `${
                            o * (_.dynamicMainBullets + 4)
                        }px`;
                    }),
                    _.dynamicMainBullets > 1 &&
                        x !== void 0 &&
                        ((a += w - (x || 0)),
                        a > _.dynamicMainBullets - 1
                            ? (a = _.dynamicMainBullets - 1)
                            : a < 0 && (a = 0)),
                    (I = Math.max(w - a, 0)),
                    (P = I + (Math.min(E.length, _.dynamicMainBullets) - 1)),
                    (R = (P + I) / 2)),
                E.forEach((T) => {
                    const M = [
                        ...[
                            "",
                            "-next",
                            "-next-next",
                            "-prev",
                            "-prev-prev",
                            "-main",
                        ].map((z) => `${_.bulletActiveClass}${z}`),
                    ]
                        .map((z) =>
                            typeof z == "string" && z.includes(" ")
                                ? z.split(" ")
                                : z
                        )
                        .flat();
                    T.classList.remove(...M);
                }),
                v.length > 1)
            )
                E.forEach((T) => {
                    const M = Ks(T);
                    M === w
                        ? T.classList.add(..._.bulletActiveClass.split(" "))
                        : e.isElement && T.setAttribute("part", "bullet"),
                        _.dynamicBullets &&
                            (M >= I &&
                                M <= P &&
                                T.classList.add(
                                    ...`${_.bulletActiveClass}-main`.split(" ")
                                ),
                            M === I && u(T, "prev"),
                            M === P && u(T, "next"));
                });
            else {
                const T = E[w];
                if (
                    (T && T.classList.add(..._.bulletActiveClass.split(" ")),
                    e.isElement &&
                        E.forEach((M, z) => {
                            M.setAttribute(
                                "part",
                                z === w ? "bullet-active" : "bullet"
                            );
                        }),
                    _.dynamicBullets)
                ) {
                    const M = E[I],
                        z = E[P];
                    for (let $ = I; $ <= P; $ += 1)
                        E[$] &&
                            E[$].classList.add(
                                ...`${_.bulletActiveClass}-main`.split(" ")
                            );
                    u(M, "prev"), u(z, "next");
                }
            }
            if (_.dynamicBullets) {
                const T = Math.min(E.length, _.dynamicMainBullets + 4),
                    M = (o * T - o) / 2 - R * o,
                    z = m ? "right" : "left";
                E.forEach(($) => {
                    $.style[e.isHorizontal() ? z : "top"] = `${M}px`;
                });
            }
        }
        v.forEach((E, I) => {
            if (
                (_.type === "fraction" &&
                    (E.querySelectorAll(qr(_.currentClass)).forEach((P) => {
                        P.textContent = _.formatFractionCurrent(w + 1);
                    }),
                    E.querySelectorAll(qr(_.totalClass)).forEach((P) => {
                        P.textContent = _.formatFractionTotal(k);
                    })),
                _.type === "progressbar")
            ) {
                let P;
                _.progressbarOpposite
                    ? (P = e.isHorizontal() ? "vertical" : "horizontal")
                    : (P = e.isHorizontal() ? "horizontal" : "vertical");
                const R = (w + 1) / k;
                let T = 1,
                    M = 1;
                P === "horizontal" ? (T = R) : (M = R),
                    E.querySelectorAll(qr(_.progressbarFillClass)).forEach(
                        (z) => {
                            (z.style.transform = `translate3d(0,0,0) scaleX(${T}) scaleY(${M})`),
                                (z.style.transitionDuration = `${e.params.speed}ms`);
                        }
                    );
            }
            _.type === "custom" && _.renderCustom
                ? ((E.innerHTML = _.renderCustom(e, w + 1, k)),
                  I === 0 && r("paginationRender", E))
                : (I === 0 && r("paginationRender", E),
                  r("paginationUpdate", E)),
                e.params.watchOverflow &&
                    e.enabled &&
                    E.classList[e.isLocked ? "add" : "remove"](_.lockClass);
        });
    }
    function p() {
        const m = e.params.pagination;
        if (l()) return;
        const _ =
            e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.grid && e.params.grid.rows > 1
                ? e.slides.length / Math.ceil(e.params.grid.rows)
                : e.slides.length;
        let v = e.pagination.el;
        v = tt(v);
        let w = "";
        if (m.type === "bullets") {
            let x = e.params.loop
                ? Math.ceil(_ / e.params.slidesPerGroup)
                : e.snapGrid.length;
            e.params.freeMode && e.params.freeMode.enabled && x > _ && (x = _);
            for (let O = 0; O < x; O += 1)
                m.renderBullet
                    ? (w += m.renderBullet.call(e, O, m.bulletClass))
                    : (w += `<${m.bulletElement} ${
                          e.isElement ? 'part="bullet"' : ""
                      } class="${m.bulletClass}"></${m.bulletElement}>`);
        }
        m.type === "fraction" &&
            (m.renderFraction
                ? (w = m.renderFraction.call(e, m.currentClass, m.totalClass))
                : (w = `<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`)),
            m.type === "progressbar" &&
                (m.renderProgressbar
                    ? (w = m.renderProgressbar.call(e, m.progressbarFillClass))
                    : (w = `<span class="${m.progressbarFillClass}"></span>`)),
            (e.pagination.bullets = []),
            v.forEach((x) => {
                m.type !== "custom" && (x.innerHTML = w || ""),
                    m.type === "bullets" &&
                        e.pagination.bullets.push(
                            ...x.querySelectorAll(qr(m.bulletClass))
                        );
            }),
            m.type !== "custom" && r("paginationRender", v[0]);
    }
    function c() {
        e.params.pagination = Va(
            e,
            e.originalParams.pagination,
            e.params.pagination,
            { el: "swiper-pagination" }
        );
        const m = e.params.pagination;
        if (!m.el) return;
        let _;
        typeof m.el == "string" &&
            e.isElement &&
            (_ = e.el.querySelector(m.el)),
            !_ &&
                typeof m.el == "string" &&
                (_ = [...document.querySelectorAll(m.el)]),
            _ || (_ = m.el),
            !(!_ || _.length === 0) &&
                (e.params.uniqueNavElements &&
                    typeof m.el == "string" &&
                    Array.isArray(_) &&
                    _.length > 1 &&
                    ((_ = [...e.el.querySelectorAll(m.el)]),
                    _.length > 1 &&
                        (_ = _.filter((v) => Jc(v, ".swiper")[0] === e.el)[0])),
                Array.isArray(_) && _.length === 1 && (_ = _[0]),
                Object.assign(e.pagination, { el: _ }),
                (_ = tt(_)),
                _.forEach((v) => {
                    m.type === "bullets" &&
                        m.clickable &&
                        v.classList.add(...(m.clickableClass || "").split(" ")),
                        v.classList.add(m.modifierClass + m.type),
                        v.classList.add(
                            e.isHorizontal()
                                ? m.horizontalClass
                                : m.verticalClass
                        ),
                        m.type === "bullets" &&
                            m.dynamicBullets &&
                            (v.classList.add(
                                `${m.modifierClass}${m.type}-dynamic`
                            ),
                            (a = 0),
                            m.dynamicMainBullets < 1 &&
                                (m.dynamicMainBullets = 1)),
                        m.type === "progressbar" &&
                            m.progressbarOpposite &&
                            v.classList.add(m.progressbarOppositeClass),
                        m.clickable && v.addEventListener("click", d),
                        e.enabled || v.classList.add(m.lockClass);
                }));
    }
    function g() {
        const m = e.params.pagination;
        if (l()) return;
        let _ = e.pagination.el;
        _ &&
            ((_ = tt(_)),
            _.forEach((v) => {
                v.classList.remove(m.hiddenClass),
                    v.classList.remove(m.modifierClass + m.type),
                    v.classList.remove(
                        e.isHorizontal() ? m.horizontalClass : m.verticalClass
                    ),
                    m.clickable &&
                        (v.classList.remove(
                            ...(m.clickableClass || "").split(" ")
                        ),
                        v.removeEventListener("click", d));
            })),
            e.pagination.bullets &&
                e.pagination.bullets.forEach((v) =>
                    v.classList.remove(...m.bulletActiveClass.split(" "))
                );
    }
    i("changeDirection", () => {
        if (!e.pagination || !e.pagination.el) return;
        const m = e.params.pagination;
        let { el: _ } = e.pagination;
        (_ = tt(_)),
            _.forEach((v) => {
                v.classList.remove(m.horizontalClass, m.verticalClass),
                    v.classList.add(
                        e.isHorizontal() ? m.horizontalClass : m.verticalClass
                    );
            });
    }),
        i("init", () => {
            e.params.pagination.enabled === !1 ? y() : (c(), p(), f());
        }),
        i("activeIndexChange", () => {
            typeof e.snapIndex > "u" && f();
        }),
        i("snapIndexChange", () => {
            f();
        }),
        i("snapGridLengthChange", () => {
            p(), f();
        }),
        i("destroy", () => {
            g();
        }),
        i("enable disable", () => {
            let { el: m } = e.pagination;
            m &&
                ((m = tt(m)),
                m.forEach((_) =>
                    _.classList[e.enabled ? "remove" : "add"](
                        e.params.pagination.lockClass
                    )
                ));
        }),
        i("lock unlock", () => {
            f();
        }),
        i("click", (m, _) => {
            const v = _.target,
                w = tt(e.pagination.el);
            if (
                e.params.pagination.el &&
                e.params.pagination.hideOnClick &&
                w &&
                w.length > 0 &&
                !v.classList.contains(e.params.pagination.bulletClass)
            ) {
                if (
                    e.navigation &&
                    ((e.navigation.nextEl && v === e.navigation.nextEl) ||
                        (e.navigation.prevEl && v === e.navigation.prevEl))
                )
                    return;
                const x = w[0].classList.contains(
                    e.params.pagination.hiddenClass
                );
                r(x === !0 ? "paginationShow" : "paginationHide"),
                    w.forEach((O) =>
                        O.classList.toggle(e.params.pagination.hiddenClass)
                    );
            }
        });
    const h = () => {
            e.el.classList.remove(e.params.pagination.paginationDisabledClass);
            let { el: m } = e.pagination;
            m &&
                ((m = tt(m)),
                m.forEach((_) =>
                    _.classList.remove(
                        e.params.pagination.paginationDisabledClass
                    )
                )),
                c(),
                p(),
                f();
        },
        y = () => {
            e.el.classList.add(e.params.pagination.paginationDisabledClass);
            let { el: m } = e.pagination;
            m &&
                ((m = tt(m)),
                m.forEach((_) =>
                    _.classList.add(e.params.pagination.paginationDisabledClass)
                )),
                g();
        };
    Object.assign(e.pagination, {
        enable: h,
        disable: y,
        render: p,
        update: f,
        init: c,
        destroy: g,
    });
}
function Ga(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = Xi();
    let o = !1,
        a = null,
        l = null,
        u,
        d,
        f,
        p;
    t({
        scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
            scrollbarDisabledClass: "swiper-scrollbar-disabled",
            horizontalClass: "swiper-scrollbar-horizontal",
            verticalClass: "swiper-scrollbar-vertical",
        },
    }),
        (e.scrollbar = { el: null, dragEl: null });
    function c() {
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        const { scrollbar: T, rtlTranslate: M } = e,
            { dragEl: z, el: $ } = T,
            V = e.params.scrollbar,
            Y = e.params.loop ? e.progressLoop : e.progress;
        let U = d,
            K = (f - d) * Y;
        M
            ? ((K = -K),
              K > 0 ? ((U = d - K), (K = 0)) : -K + d > f && (U = f + K))
            : K < 0
            ? ((U = d + K), (K = 0))
            : K + d > f && (U = f - K),
            e.isHorizontal()
                ? ((z.style.transform = `translate3d(${K}px, 0, 0)`),
                  (z.style.width = `${U}px`))
                : ((z.style.transform = `translate3d(0px, ${K}px, 0)`),
                  (z.style.height = `${U}px`)),
            V.hide &&
                (clearTimeout(a),
                ($.style.opacity = 1),
                (a = setTimeout(() => {
                    ($.style.opacity = 0),
                        ($.style.transitionDuration = "400ms");
                }, 1e3)));
    }
    function g(T) {
        !e.params.scrollbar.el ||
            !e.scrollbar.el ||
            (e.scrollbar.dragEl.style.transitionDuration = `${T}ms`);
    }
    function h() {
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        const { scrollbar: T } = e,
            { dragEl: M, el: z } = T;
        (M.style.width = ""),
            (M.style.height = ""),
            (f = e.isHorizontal() ? z.offsetWidth : z.offsetHeight),
            (p =
                e.size /
                (e.virtualSize +
                    e.params.slidesOffsetBefore -
                    (e.params.centeredSlides ? e.snapGrid[0] : 0))),
            e.params.scrollbar.dragSize === "auto"
                ? (d = f * p)
                : (d = parseInt(e.params.scrollbar.dragSize, 10)),
            e.isHorizontal()
                ? (M.style.width = `${d}px`)
                : (M.style.height = `${d}px`),
            p >= 1 ? (z.style.display = "none") : (z.style.display = ""),
            e.params.scrollbar.hide && (z.style.opacity = 0),
            e.params.watchOverflow &&
                e.enabled &&
                T.el.classList[e.isLocked ? "add" : "remove"](
                    e.params.scrollbar.lockClass
                );
    }
    function y(T) {
        return e.isHorizontal() ? T.clientX : T.clientY;
    }
    function m(T) {
        const { scrollbar: M, rtlTranslate: z } = e,
            { el: $ } = M;
        let V;
        (V =
            (y(T) -
                gf($)[e.isHorizontal() ? "left" : "top"] -
                (u !== null ? u : d / 2)) /
            (f - d)),
            (V = Math.max(Math.min(V, 1), 0)),
            z && (V = 1 - V);
        const Y = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * V;
        e.updateProgress(Y),
            e.setTranslate(Y),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
    }
    function _(T) {
        const M = e.params.scrollbar,
            { scrollbar: z, wrapperEl: $ } = e,
            { el: V, dragEl: Y } = z;
        (o = !0),
            (u =
                T.target === Y
                    ? y(T) -
                      T.target.getBoundingClientRect()[
                          e.isHorizontal() ? "left" : "top"
                      ]
                    : null),
            T.preventDefault(),
            T.stopPropagation(),
            ($.style.transitionDuration = "100ms"),
            (Y.style.transitionDuration = "100ms"),
            m(T),
            clearTimeout(l),
            (V.style.transitionDuration = "0ms"),
            M.hide && (V.style.opacity = 1),
            e.params.cssMode &&
                (e.wrapperEl.style["scroll-snap-type"] = "none"),
            r("scrollbarDragStart", T);
    }
    function v(T) {
        const { scrollbar: M, wrapperEl: z } = e,
            { el: $, dragEl: V } = M;
        o &&
            (T.preventDefault && T.cancelable
                ? T.preventDefault()
                : (T.returnValue = !1),
            m(T),
            (z.style.transitionDuration = "0ms"),
            ($.style.transitionDuration = "0ms"),
            (V.style.transitionDuration = "0ms"),
            r("scrollbarDragMove", T));
    }
    function w(T) {
        const M = e.params.scrollbar,
            { scrollbar: z, wrapperEl: $ } = e,
            { el: V } = z;
        o &&
            ((o = !1),
            e.params.cssMode &&
                ((e.wrapperEl.style["scroll-snap-type"] = ""),
                ($.style.transitionDuration = "")),
            M.hide &&
                (clearTimeout(l),
                (l = Ws(() => {
                    (V.style.opacity = 0),
                        (V.style.transitionDuration = "400ms");
                }, 1e3))),
            r("scrollbarDragEnd", T),
            M.snapOnRelease && e.slideToClosest());
    }
    function x(T) {
        const { scrollbar: M, params: z } = e,
            $ = M.el;
        if (!$) return;
        const V = $,
            Y = z.passiveListeners ? { passive: !1, capture: !1 } : !1,
            U = z.passiveListeners ? { passive: !0, capture: !1 } : !1;
        if (!V) return;
        const K = T === "on" ? "addEventListener" : "removeEventListener";
        V[K]("pointerdown", _, Y),
            s[K]("pointermove", v, Y),
            s[K]("pointerup", w, U);
    }
    function O() {
        !e.params.scrollbar.el || !e.scrollbar.el || x("on");
    }
    function k() {
        !e.params.scrollbar.el || !e.scrollbar.el || x("off");
    }
    function E() {
        const { scrollbar: T, el: M } = e;
        e.params.scrollbar = Va(
            e,
            e.originalParams.scrollbar,
            e.params.scrollbar,
            { el: "swiper-scrollbar" }
        );
        const z = e.params.scrollbar;
        if (!z.el) return;
        let $;
        if (
            (typeof z.el == "string" &&
                e.isElement &&
                ($ = e.el.querySelector(z.el)),
            !$ && typeof z.el == "string")
        ) {
            if ((($ = s.querySelectorAll(z.el)), !$.length)) return;
        } else $ || ($ = z.el);
        e.params.uniqueNavElements &&
            typeof z.el == "string" &&
            $.length > 1 &&
            M.querySelectorAll(z.el).length === 1 &&
            ($ = M.querySelector(z.el)),
            $.length > 0 && ($ = $[0]),
            $.classList.add(
                e.isHorizontal() ? z.horizontalClass : z.verticalClass
            );
        let V;
        $ &&
            ((V = $.querySelector(qr(e.params.scrollbar.dragClass))),
            V || ((V = rs("div", e.params.scrollbar.dragClass)), $.append(V))),
            Object.assign(T, { el: $, dragEl: V }),
            z.draggable && O(),
            $ &&
                $.classList[e.enabled ? "remove" : "add"](
                    ...Ui(e.params.scrollbar.lockClass)
                );
    }
    function I() {
        const T = e.params.scrollbar,
            M = e.scrollbar.el;
        M &&
            M.classList.remove(
                ...Ui(e.isHorizontal() ? T.horizontalClass : T.verticalClass)
            ),
            k();
    }
    i("changeDirection", () => {
        if (!e.scrollbar || !e.scrollbar.el) return;
        const T = e.params.scrollbar;
        let { el: M } = e.scrollbar;
        (M = tt(M)),
            M.forEach((z) => {
                z.classList.remove(T.horizontalClass, T.verticalClass),
                    z.classList.add(
                        e.isHorizontal() ? T.horizontalClass : T.verticalClass
                    );
            });
    }),
        i("init", () => {
            e.params.scrollbar.enabled === !1 ? R() : (E(), h(), c());
        }),
        i("update resize observerUpdate lock unlock changeDirection", () => {
            h();
        }),
        i("setTranslate", () => {
            c();
        }),
        i("setTransition", (T, M) => {
            g(M);
        }),
        i("enable disable", () => {
            const { el: T } = e.scrollbar;
            T &&
                T.classList[e.enabled ? "remove" : "add"](
                    ...Ui(e.params.scrollbar.lockClass)
                );
        }),
        i("destroy", () => {
            I();
        });
    const P = () => {
            e.el.classList.remove(
                ...Ui(e.params.scrollbar.scrollbarDisabledClass)
            ),
                e.scrollbar.el &&
                    e.scrollbar.el.classList.remove(
                        ...Ui(e.params.scrollbar.scrollbarDisabledClass)
                    ),
                E(),
                h(),
                c();
        },
        R = () => {
            e.el.classList.add(
                ...Ui(e.params.scrollbar.scrollbarDisabledClass)
            ),
                e.scrollbar.el &&
                    e.scrollbar.el.classList.add(
                        ...Ui(e.params.scrollbar.scrollbarDisabledClass)
                    ),
                I();
        };
    Object.assign(e.scrollbar, {
        enable: P,
        disable: R,
        updateSize: h,
        setTranslate: c,
        init: E,
        destroy: I,
    });
}
function kp(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({
        thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs",
        },
    });
    let r = !1,
        s = !1;
    e.thumbs = { swiper: null };
    function o() {
        const u = e.thumbs.swiper;
        if (!u || u.destroyed) return;
        const d = u.clickedIndex,
            f = u.clickedSlide;
        if (
            (f &&
                f.classList.contains(e.params.thumbs.slideThumbActiveClass)) ||
            typeof d > "u" ||
            d === null
        )
            return;
        let p;
        u.params.loop
            ? (p = parseInt(
                  u.clickedSlide.getAttribute("data-swiper-slide-index"),
                  10
              ))
            : (p = d),
            e.params.loop ? e.slideToLoop(p) : e.slideTo(p);
    }
    function a() {
        const { thumbs: u } = e.params;
        if (r) return !1;
        r = !0;
        const d = e.constructor;
        if (u.swiper instanceof d)
            (e.thumbs.swiper = u.swiper),
                Object.assign(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                }),
                Object.assign(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                }),
                e.thumbs.swiper.update();
        else if (En(u.swiper)) {
            const f = Object.assign({}, u.swiper);
            Object.assign(f, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
            }),
                (e.thumbs.swiper = new d(f)),
                (s = !0);
        }
        return (
            e.thumbs.swiper.el.classList.add(
                e.params.thumbs.thumbsContainerClass
            ),
            e.thumbs.swiper.on("tap", o),
            !0
        );
    }
    function l(u) {
        const d = e.thumbs.swiper;
        if (!d || d.destroyed) return;
        const f =
            d.params.slidesPerView === "auto"
                ? d.slidesPerViewDynamic()
                : d.params.slidesPerView;
        let p = 1;
        const c = e.params.thumbs.slideThumbActiveClass;
        if (
            (e.params.slidesPerView > 1 &&
                !e.params.centeredSlides &&
                (p = e.params.slidesPerView),
            e.params.thumbs.multipleActiveThumbs || (p = 1),
            (p = Math.floor(p)),
            d.slides.forEach((y) => y.classList.remove(c)),
            d.params.loop || (d.params.virtual && d.params.virtual.enabled))
        )
            for (let y = 0; y < p; y += 1)
                vi(
                    d.slidesEl,
                    `[data-swiper-slide-index="${e.realIndex + y}"]`
                ).forEach((m) => {
                    m.classList.add(c);
                });
        else
            for (let y = 0; y < p; y += 1)
                d.slides[e.realIndex + y] &&
                    d.slides[e.realIndex + y].classList.add(c);
        const g = e.params.thumbs.autoScrollOffset,
            h = g && !d.params.loop;
        if (e.realIndex !== d.realIndex || h) {
            const y = d.activeIndex;
            let m, _;
            if (d.params.loop) {
                const v = d.slides.filter(
                    (w) =>
                        w.getAttribute("data-swiper-slide-index") ===
                        `${e.realIndex}`
                )[0];
                (m = d.slides.indexOf(v)),
                    (_ = e.activeIndex > e.previousIndex ? "next" : "prev");
            } else
                (m = e.realIndex), (_ = m > e.previousIndex ? "next" : "prev");
            h && (m += _ === "next" ? g : -1 * g),
                d.visibleSlidesIndexes &&
                    d.visibleSlidesIndexes.indexOf(m) < 0 &&
                    (d.params.centeredSlides
                        ? m > y
                            ? (m = m - Math.floor(f / 2) + 1)
                            : (m = m + Math.floor(f / 2) - 1)
                        : m > y && d.params.slidesPerGroup,
                    d.slideTo(m, u ? 0 : void 0));
        }
    }
    i("beforeInit", () => {
        const { thumbs: u } = e.params;
        if (!(!u || !u.swiper))
            if (
                typeof u.swiper == "string" ||
                u.swiper instanceof HTMLElement
            ) {
                const d = Xi(),
                    f = () => {
                        const c =
                            typeof u.swiper == "string"
                                ? d.querySelector(u.swiper)
                                : u.swiper;
                        if (c && c.swiper) (u.swiper = c.swiper), a(), l(!0);
                        else if (c) {
                            const g = (h) => {
                                (u.swiper = h.detail[0]),
                                    c.removeEventListener("init", g),
                                    a(),
                                    l(!0),
                                    u.swiper.update(),
                                    e.update();
                            };
                            c.addEventListener("init", g);
                        }
                        return c;
                    },
                    p = () => {
                        if (e.destroyed) return;
                        f() || requestAnimationFrame(p);
                    };
                requestAnimationFrame(p);
            } else a(), l(!0);
    }),
        i("slideChange update resize observerUpdate", () => {
            l();
        }),
        i("setTransition", (u, d) => {
            const f = e.thumbs.swiper;
            !f || f.destroyed || f.setTransition(d);
        }),
        i("beforeDestroy", () => {
            const u = e.thumbs.swiper;
            !u || u.destroyed || (s && u.destroy());
        }),
        Object.assign(e.thumbs, { init: a, update: l });
}
function nu(n) {
    let { swiper: e, extendParams: t, emit: i, once: r } = n;
    t({
        freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: 0.02,
        },
    });
    function s() {
        if (e.params.cssMode) return;
        const l = e.getTranslate();
        e.setTranslate(l),
            e.setTransition(0),
            (e.touchEventsData.velocities.length = 0),
            e.freeMode.onTouchEnd({
                currentPos: e.rtl ? e.translate : -e.translate,
            });
    }
    function o() {
        if (e.params.cssMode) return;
        const { touchEventsData: l, touches: u } = e;
        l.velocities.length === 0 &&
            l.velocities.push({
                position: u[e.isHorizontal() ? "startX" : "startY"],
                time: l.touchStartTime,
            }),
            l.velocities.push({
                position: u[e.isHorizontal() ? "currentX" : "currentY"],
                time: Mr(),
            });
    }
    function a(l) {
        let { currentPos: u } = l;
        if (e.params.cssMode) return;
        const {
                params: d,
                wrapperEl: f,
                rtlTranslate: p,
                snapGrid: c,
                touchEventsData: g,
            } = e,
            y = Mr() - g.touchStartTime;
        if (u < -e.minTranslate()) {
            e.slideTo(e.activeIndex);
            return;
        }
        if (u > -e.maxTranslate()) {
            e.slides.length < c.length
                ? e.slideTo(c.length - 1)
                : e.slideTo(e.slides.length - 1);
            return;
        }
        if (d.freeMode.momentum) {
            if (g.velocities.length > 1) {
                const E = g.velocities.pop(),
                    I = g.velocities.pop(),
                    P = E.position - I.position,
                    R = E.time - I.time;
                (e.velocity = P / R),
                    (e.velocity /= 2),
                    Math.abs(e.velocity) < d.freeMode.minimumVelocity &&
                        (e.velocity = 0),
                    (R > 150 || Mr() - E.time > 300) && (e.velocity = 0);
            } else e.velocity = 0;
            (e.velocity *= d.freeMode.momentumVelocityRatio),
                (g.velocities.length = 0);
            let m = 1e3 * d.freeMode.momentumRatio;
            const _ = e.velocity * m;
            let v = e.translate + _;
            p && (v = -v);
            let w = !1,
                x;
            const O =
                Math.abs(e.velocity) * 20 * d.freeMode.momentumBounceRatio;
            let k;
            if (v < e.maxTranslate())
                d.freeMode.momentumBounce
                    ? (v + e.maxTranslate() < -O && (v = e.maxTranslate() - O),
                      (x = e.maxTranslate()),
                      (w = !0),
                      (g.allowMomentumBounce = !0))
                    : (v = e.maxTranslate()),
                    d.loop && d.centeredSlides && (k = !0);
            else if (v > e.minTranslate())
                d.freeMode.momentumBounce
                    ? (v - e.minTranslate() > O && (v = e.minTranslate() + O),
                      (x = e.minTranslate()),
                      (w = !0),
                      (g.allowMomentumBounce = !0))
                    : (v = e.minTranslate()),
                    d.loop && d.centeredSlides && (k = !0);
            else if (d.freeMode.sticky) {
                let E;
                for (let I = 0; I < c.length; I += 1)
                    if (c[I] > -v) {
                        E = I;
                        break;
                    }
                Math.abs(c[E] - v) < Math.abs(c[E - 1] - v) ||
                e.swipeDirection === "next"
                    ? (v = c[E])
                    : (v = c[E - 1]),
                    (v = -v);
            }
            if (
                (k &&
                    r("transitionEnd", () => {
                        e.loopFix();
                    }),
                e.velocity !== 0)
            ) {
                if (
                    (p
                        ? (m = Math.abs((-v - e.translate) / e.velocity))
                        : (m = Math.abs((v - e.translate) / e.velocity)),
                    d.freeMode.sticky)
                ) {
                    const E = Math.abs((p ? -v : v) - e.translate),
                        I = e.slidesSizesGrid[e.activeIndex];
                    E < I
                        ? (m = d.speed)
                        : E < 2 * I
                        ? (m = d.speed * 1.5)
                        : (m = d.speed * 2.5);
                }
            } else if (d.freeMode.sticky) {
                e.slideToClosest();
                return;
            }
            d.freeMode.momentumBounce && w
                ? (e.updateProgress(x),
                  e.setTransition(m),
                  e.setTranslate(v),
                  e.transitionStart(!0, e.swipeDirection),
                  (e.animating = !0),
                  Os(f, () => {
                      !e ||
                          e.destroyed ||
                          !g.allowMomentumBounce ||
                          (i("momentumBounce"),
                          e.setTransition(d.speed),
                          setTimeout(() => {
                              e.setTranslate(x),
                                  Os(f, () => {
                                      !e || e.destroyed || e.transitionEnd();
                                  });
                          }, 0));
                  }))
                : e.velocity
                ? (i("_freeModeNoMomentumRelease"),
                  e.updateProgress(v),
                  e.setTransition(m),
                  e.setTranslate(v),
                  e.transitionStart(!0, e.swipeDirection),
                  e.animating ||
                      ((e.animating = !0),
                      Os(f, () => {
                          !e || e.destroyed || e.transitionEnd();
                      })))
                : e.updateProgress(v),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
        } else if (d.freeMode.sticky) {
            e.slideToClosest();
            return;
        } else d.freeMode && i("_freeModeNoMomentumRelease");
        (!d.freeMode.momentum || y >= d.longSwipesMs) &&
            (i("_freeModeStaticRelease"),
            e.updateProgress(),
            e.updateActiveIndex(),
            e.updateSlidesClasses());
    }
    Object.assign(e, {
        freeMode: { onTouchStart: s, onTouchMove: o, onTouchEnd: a },
    });
}
function Op(n) {
    const {
        effect: e,
        swiper: t,
        on: i,
        setTranslate: r,
        setTransition: s,
        overwriteParams: o,
        perspective: a,
        recreateShadows: l,
        getEffectParams: u,
    } = n;
    i("beforeInit", () => {
        if (t.params.effect !== e) return;
        t.classNames.push(`${t.params.containerModifierClass}${e}`),
            a &&
                a() &&
                t.classNames.push(`${t.params.containerModifierClass}3d`);
        const f = o ? o() : {};
        Object.assign(t.params, f), Object.assign(t.originalParams, f);
    }),
        i("setTranslate", () => {
            t.params.effect === e && r();
        }),
        i("setTransition", (f, p) => {
            t.params.effect === e && s(p);
        }),
        i("transitionEnd", () => {
            if (t.params.effect === e && l) {
                if (!u || !u().slideShadows) return;
                t.slides.forEach((f) => {
                    f.querySelectorAll(
                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    ).forEach((p) => p.remove());
                }),
                    l();
            }
        });
    let d;
    i("virtualUpdate", () => {
        t.params.effect === e &&
            (t.slides.length || (d = !0),
            requestAnimationFrame(() => {
                d && t.slides && t.slides.length && (r(), (d = !1));
            }));
    });
}
function Dp(n, e) {
    const t = Qc(e);
    return (
        t !== e &&
            ((t.style.backfaceVisibility = "hidden"),
            (t.style["-webkit-backface-visibility"] = "hidden")),
        t
    );
}
function Lp(n) {
    let { swiper: e, duration: t, transformElements: i, allSlides: r } = n;
    const { activeIndex: s } = e,
        o = (a) =>
            a.parentElement
                ? a.parentElement
                : e.slides.filter(
                      (u) => u.shadowRoot && u.shadowRoot === a.parentNode
                  )[0];
    if (e.params.virtualTranslate && t !== 0) {
        let a = !1,
            l;
        r
            ? (l = i)
            : (l = i.filter((u) => {
                  const d = u.classList.contains("swiper-slide-transform")
                      ? o(u)
                      : u;
                  return e.getSlideIndex(d) === s;
              })),
            l.forEach((u) => {
                Os(u, () => {
                    if (a || !e || e.destroyed) return;
                    (a = !0), (e.animating = !1);
                    const d = new window.CustomEvent("transitionend", {
                        bubbles: !0,
                        cancelable: !0,
                    });
                    e.wrapperEl.dispatchEvent(d);
                });
            });
    }
}
function Ap(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({ fadeEffect: { crossFade: !1 } }),
        Op({
            effect: "fade",
            swiper: e,
            on: i,
            setTranslate: () => {
                const { slides: o } = e,
                    a = e.params.fadeEffect;
                for (let l = 0; l < o.length; l += 1) {
                    const u = e.slides[l];
                    let f = -u.swiperSlideOffset;
                    e.params.virtualTranslate || (f -= e.translate);
                    let p = 0;
                    e.isHorizontal() || ((p = f), (f = 0));
                    const c = e.params.fadeEffect.crossFade
                            ? Math.max(1 - Math.abs(u.progress), 0)
                            : 1 + Math.min(Math.max(u.progress, -1), 0),
                        g = Dp(a, u);
                    (g.style.opacity = c),
                        (g.style.transform = `translate3d(${f}px, ${p}px, 0px)`);
                }
            },
            setTransition: (o) => {
                const a = e.slides.map((l) => Qc(l));
                a.forEach((l) => {
                    l.style.transitionDuration = `${o}ms`;
                }),
                    Lp({
                        swiper: e,
                        duration: o,
                        transformElements: a,
                        allSlides: !0,
                    });
            },
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !e.params.cssMode,
            }),
        });
}
const Ip = Se(".js-product-slider", (n) => {
        const e = n.querySelector(".js-main-product-magnify"),
            t = n.querySelector(".js-product-slider-main"),
            i = n.querySelector(".js-product-slider-thumbs"),
            r = n.querySelector(".js-thumb-product-slider-prev"),
            s = n.querySelector(".js-thumb-product-slider-next"),
            o = n.querySelector(".js-main-product-slider-prev"),
            a = n.querySelector(".js-main-product-slider-next"),
            l = n.querySelector(".js-main-product-pagination"),
            u = new dt(i, {
                modules: [na],
                direction: "vertical",
                autoHeight: !0,
                slidesPerView: 3,
                spaceBetween: 20,
                watchSlidesProgress: !0,
                navigation: { prevEl: r, nextEl: s, disabledClass: "disabled" },
            }),
            d = new dt(t, {
                modules: [kp, na, Mp],
                spaceBetween: 100,
                navigation: { prevEl: o, nextEl: a, disabledClass: "disabled" },
                pagination: {
                    el: l,
                    bulletClass: "c-product__main-pagination-bullet",
                    bulletActiveClass: "is-active",
                },
                thumbs: { swiper: u, autoScrollOffset: 1 },
            });
        window.e.emit(De.MAIN_PRODUCT_SLIDER_INIT, d),
            e.addEventListener("click", () => {
                xe.set(document.body, { overflow: "hidden" }),
                    window.e.emit(De.OPEN_GALLERY_MODAL);
            });
    }),
    Rp = Se(".js-related-products", (n) => {
        const e = n.querySelector(".swiper"),
            t = n.querySelector(".swiper-scrollbar");
        new dt(e, {
            modules: [Ga],
            slidesPerView: 2,
            spaceBetween: 5,
            scrollbar: { el: t, draggable: !0 },
            breakpoints: {
                1024: { slidesPerView: 3 },
                1200: { spaceBetween: 15, slidesPerView: 4 },
            },
        });
    }),
    zp = Se(".js-size-chart", (n) => {
        n.querySelector(".swiper");
        const e = n.querySelector(".swiper-scrollbar");
        new dt(n, {
            modules: [Ga, nu],
            freeMode: !0,
            slidesPerView: "auto",
            scrollbar: { el: e, draggable: !0, snapOnRelease: !1 },
        });
    });
/*!
 * matrix 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Bi,
    kr,
    Ya,
    ao,
    Cn,
    Ls,
    Zs,
    Fn,
    yi = "transform",
    sa = yi + "Origin",
    su,
    ou = function (e) {
        var t = e.ownerDocument || e;
        for (
            !(yi in e.style) &&
            ("msTransform" in e.style) &&
            ((yi = "msTransform"), (sa = yi + "Origin"));
            t.parentNode && (t = t.parentNode);

        );
        if (((kr = window), (Zs = new zr()), t)) {
            (Bi = t),
                (Ya = t.documentElement),
                (ao = t.body),
                (Fn = Bi.createElementNS("http://www.w3.org/2000/svg", "g")),
                (Fn.style.transform = "none");
            var i = t.createElement("div"),
                r = t.createElement("div"),
                s = t && (t.body || t.firstElementChild);
            s &&
                s.appendChild &&
                (s.appendChild(i),
                i.appendChild(r),
                i.setAttribute(
                    "style",
                    "position:static;transform:translate3d(0,0,1px)"
                ),
                (su = r.offsetParent !== i),
                s.removeChild(i));
        }
        return t;
    },
    Np = function (e) {
        for (var t, i; e && e !== ao; )
            (i = e._gsap),
                i && i.uncache && i.get(e, "x"),
                i &&
                    !i.scaleX &&
                    !i.scaleY &&
                    i.renderTransform &&
                    ((i.scaleX = i.scaleY = 1e-4),
                    i.renderTransform(1, i),
                    t ? t.push(i) : (t = [i])),
                (e = e.parentNode);
        return t;
    },
    au = [],
    lu = [],
    Fp = function () {
        return (
            kr.pageYOffset || Bi.scrollTop || Ya.scrollTop || ao.scrollTop || 0
        );
    },
    Bp = function () {
        return (
            kr.pageXOffset ||
            Bi.scrollLeft ||
            Ya.scrollLeft ||
            ao.scrollLeft ||
            0
        );
    },
    Ha = function (e) {
        return (
            e.ownerSVGElement ||
            ((e.tagName + "").toLowerCase() === "svg" ? e : null)
        );
    },
    $p = function n(e) {
        if (kr.getComputedStyle(e).position === "fixed") return !0;
        if (((e = e.parentNode), e && e.nodeType === 1)) return n(e);
    },
    Po = function n(e, t) {
        if (e.parentNode && (Bi || ou(e))) {
            var i = Ha(e),
                r = i
                    ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
                    : "http://www.w3.org/1999/xhtml",
                s = i ? (t ? "rect" : "g") : "div",
                o = t !== 2 ? 0 : 100,
                a = t === 3 ? 100 : 0,
                l =
                    "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                u = Bi.createElementNS
                    ? Bi.createElementNS(r.replace(/^https/, "http"), s)
                    : Bi.createElement(s);
            return (
                t &&
                    (i
                        ? (Ls || (Ls = n(e)),
                          u.setAttribute("width", 0.01),
                          u.setAttribute("height", 0.01),
                          u.setAttribute(
                              "transform",
                              "translate(" + o + "," + a + ")"
                          ),
                          Ls.appendChild(u))
                        : (Cn || ((Cn = n(e)), (Cn.style.cssText = l)),
                          (u.style.cssText =
                              l +
                              "width:0.1px;height:0.1px;top:" +
                              a +
                              "px;left:" +
                              o +
                              "px"),
                          Cn.appendChild(u))),
                u
            );
        }
        throw "Need document and parent.";
    },
    Vp = function (e) {
        for (var t = new zr(), i = 0; i < e.numberOfItems; i++)
            t.multiply(e.getItem(i).matrix);
        return t;
    },
    Gp = function (e) {
        var t = e.getCTM(),
            i;
        return (
            t ||
                ((i = e.style[yi]),
                (e.style[yi] = "none"),
                e.appendChild(Fn),
                (t = Fn.getCTM()),
                e.removeChild(Fn),
                i
                    ? (e.style[yi] = i)
                    : e.style.removeProperty(
                          yi.replace(/([A-Z])/g, "-$1").toLowerCase()
                      )),
            t || Zs.clone()
        );
    },
    Yp = function (e, t) {
        var i = Ha(e),
            r = e === i,
            s = i ? au : lu,
            o = e.parentNode,
            a,
            l,
            u,
            d,
            f,
            p;
        if (e === kr) return e;
        if (
            (s.length || s.push(Po(e, 1), Po(e, 2), Po(e, 3)),
            (a = i ? Ls : Cn),
            i)
        )
            r
                ? ((u = Gp(e)), (d = -u.e / u.a), (f = -u.f / u.d), (l = Zs))
                : e.getBBox
                ? ((u = e.getBBox()),
                  (l = e.transform ? e.transform.baseVal : {}),
                  (l = l.numberOfItems
                      ? l.numberOfItems > 1
                          ? Vp(l)
                          : l.getItem(0).matrix
                      : Zs),
                  (d = l.a * u.x + l.c * u.y),
                  (f = l.b * u.x + l.d * u.y))
                : ((l = new zr()), (d = f = 0)),
                (r ? i : o).appendChild(a),
                a.setAttribute(
                    "transform",
                    "matrix(" +
                        l.a +
                        "," +
                        l.b +
                        "," +
                        l.c +
                        "," +
                        l.d +
                        "," +
                        (l.e + d) +
                        "," +
                        (l.f + f) +
                        ")"
                );
        else {
            if (((d = f = 0), su))
                for (
                    l = e.offsetParent, u = e;
                    u && (u = u.parentNode) && u !== l && u.parentNode;

                )
                    (kr.getComputedStyle(u)[yi] + "").length > 4 &&
                        ((d = u.offsetLeft), (f = u.offsetTop), (u = 0));
            if (
                ((p = kr.getComputedStyle(e)),
                p.position !== "absolute" && p.position !== "fixed")
            )
                for (l = e.offsetParent; o && o !== l; )
                    (d += o.scrollLeft || 0),
                        (f += o.scrollTop || 0),
                        (o = o.parentNode);
            (u = a.style),
                (u.top = e.offsetTop - f + "px"),
                (u.left = e.offsetLeft - d + "px"),
                (u[yi] = p[yi]),
                (u[sa] = p[sa]),
                (u.position = p.position === "fixed" ? "fixed" : "absolute"),
                e.parentNode.appendChild(a);
        }
        return a;
    },
    Mo = function (e, t, i, r, s, o, a) {
        return (
            (e.a = t), (e.b = i), (e.c = r), (e.d = s), (e.e = o), (e.f = a), e
        );
    },
    zr = (function () {
        function n(t, i, r, s, o, a) {
            t === void 0 && (t = 1),
                i === void 0 && (i = 0),
                r === void 0 && (r = 0),
                s === void 0 && (s = 1),
                o === void 0 && (o = 0),
                a === void 0 && (a = 0),
                Mo(this, t, i, r, s, o, a);
        }
        var e = n.prototype;
        return (
            (e.inverse = function () {
                var i = this.a,
                    r = this.b,
                    s = this.c,
                    o = this.d,
                    a = this.e,
                    l = this.f,
                    u = i * o - r * s || 1e-10;
                return Mo(
                    this,
                    o / u,
                    -r / u,
                    -s / u,
                    i / u,
                    (s * l - o * a) / u,
                    -(i * l - r * a) / u
                );
            }),
            (e.multiply = function (i) {
                var r = this.a,
                    s = this.b,
                    o = this.c,
                    a = this.d,
                    l = this.e,
                    u = this.f,
                    d = i.a,
                    f = i.c,
                    p = i.b,
                    c = i.d,
                    g = i.e,
                    h = i.f;
                return Mo(
                    this,
                    d * r + p * o,
                    d * s + p * a,
                    f * r + c * o,
                    f * s + c * a,
                    l + g * r + h * o,
                    u + g * s + h * a
                );
            }),
            (e.clone = function () {
                return new n(this.a, this.b, this.c, this.d, this.e, this.f);
            }),
            (e.equals = function (i) {
                var r = this.a,
                    s = this.b,
                    o = this.c,
                    a = this.d,
                    l = this.e,
                    u = this.f;
                return (
                    r === i.a &&
                    s === i.b &&
                    o === i.c &&
                    a === i.d &&
                    l === i.e &&
                    u === i.f
                );
            }),
            (e.apply = function (i, r) {
                r === void 0 && (r = {});
                var s = i.x,
                    o = i.y,
                    a = this.a,
                    l = this.b,
                    u = this.c,
                    d = this.d,
                    f = this.e,
                    p = this.f;
                return (
                    (r.x = s * a + o * u + f || 0),
                    (r.y = s * l + o * d + p || 0),
                    r
                );
            }),
            n
        );
    })();
function xr(n, e, t, i) {
    if (!n || !n.parentNode || (Bi || ou(n)).documentElement === n)
        return new zr();
    var r = Np(n),
        s = Ha(n),
        o = s ? au : lu,
        a = Yp(n),
        l = o[0].getBoundingClientRect(),
        u = o[1].getBoundingClientRect(),
        d = o[2].getBoundingClientRect(),
        f = a.parentNode,
        p = $p(n),
        c = new zr(
            (u.left - l.left) / 100,
            (u.top - l.top) / 100,
            (d.left - l.left) / 100,
            (d.top - l.top) / 100,
            l.left + (p ? 0 : Bp()),
            l.top + (p ? 0 : Fp())
        );
    if ((f.removeChild(a), r))
        for (l = r.length; l--; )
            (u = r[l]), (u.scaleX = u.scaleY = 0), u.renderTransform(1, u);
    return e ? c.inverse() : c;
}
function bl(n) {
    if (n === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return n;
}
function Hp(n, e) {
    (n.prototype = Object.create(e.prototype)),
        (n.prototype.constructor = n),
        (n.__proto__ = e);
}
var de,
    Te,
    Ut,
    wi,
    $i,
    ko,
    Ni,
    oa,
    Pn,
    ir,
    cu,
    aa,
    ns,
    Xa,
    Mn,
    hi,
    kn,
    As,
    uu,
    la,
    Qs = 0,
    du = function () {
        return typeof window < "u";
    },
    fu = function () {
        return de || (du() && (de = window.gsap) && de.registerPlugin && de);
    },
    Zi = function (e) {
        return typeof e == "function";
    },
    Bn = function (e) {
        return typeof e == "object";
    },
    mi = function (e) {
        return typeof e > "u";
    },
    Is = function () {
        return !1;
    },
    $n = "transform",
    ca = "transformOrigin",
    ji = function (e) {
        return Math.round(e * 1e4) / 1e4;
    },
    wn = Array.isArray,
    ps = function (e, t) {
        var i = Ut.createElementNS
            ? Ut.createElementNS(
                  "http://www.w3.org/1999/xhtml".replace(/^https/, "http"),
                  e
              )
            : Ut.createElement(e);
        return i.style ? i : Ut.createElement(e);
    },
    Tl = 180 / Math.PI,
    mr = 1e20,
    Xp = new zr(),
    Wi =
        Date.now ||
        function () {
            return new Date().getTime();
        },
    Or = [],
    tn = {},
    qp = 0,
    jp = /^(?:a|input|textarea|button|select)$/i,
    Sl = 0,
    Gr = {},
    Ii = {},
    pu = function (e, t) {
        var i = {},
            r;
        for (r in e) i[r] = t ? e[r] * t : e[r];
        return i;
    },
    Wp = function (e, t) {
        for (var i in t) i in e || (e[i] = t[i]);
        return e;
    },
    El = function n(e, t) {
        for (var i = e.length, r; i--; )
            t
                ? (e[i].style.touchAction = t)
                : e[i].style.removeProperty("touch-action"),
                (r = e[i].children),
                r && r.length && n(r, t);
    },
    hu = function () {
        return Or.forEach(function (e) {
            return e();
        });
    },
    Up = function (e) {
        Or.push(e), Or.length === 1 && de.ticker.add(hu);
    },
    Cl = function () {
        return !Or.length && de.ticker.remove(hu);
    },
    Pl = function (e) {
        for (var t = Or.length; t--; ) Or[t] === e && Or.splice(t, 1);
        de.to(Cl, {
            overwrite: !0,
            delay: 15,
            duration: 0,
            onComplete: Cl,
            data: "_draggable",
        });
    },
    Kp = function (e, t) {
        for (var i in t) i in e || (e[i] = t[i]);
        return e;
    },
    et = function (e, t, i, r) {
        if (e.addEventListener) {
            var s = ns[t];
            (r = r || (cu ? { passive: !1 } : null)),
                e.addEventListener(s || t, i, r),
                s && t !== s && e.addEventListener(t, i, r);
        }
    },
    je = function (e, t, i, r) {
        if (e.removeEventListener) {
            var s = ns[t];
            e.removeEventListener(s || t, i, r),
                s && t !== s && e.removeEventListener(t, i, r);
        }
    },
    ii = function (e) {
        e.preventDefault && e.preventDefault(),
            e.preventManipulation && e.preventManipulation();
    },
    Zp = function (e, t) {
        for (var i = e.length; i--; ) if (e[i].identifier === t) return !0;
    },
    Qp = function n(e) {
        (Xa = e.touches && Qs < e.touches.length), je(e.target, "touchend", n);
    },
    Ml = function (e) {
        (Xa = e.touches && Qs < e.touches.length), et(e.target, "touchend", Qp);
    },
    rn = function (e) {
        return (
            Te.pageYOffset ||
            e.scrollTop ||
            e.documentElement.scrollTop ||
            e.body.scrollTop ||
            0
        );
    },
    nn = function (e) {
        return (
            Te.pageXOffset ||
            e.scrollLeft ||
            e.documentElement.scrollLeft ||
            e.body.scrollLeft ||
            0
        );
    },
    kl = function n(e, t) {
        et(e, "scroll", t), pn(e.parentNode) || n(e.parentNode, t);
    },
    Ol = function n(e, t) {
        je(e, "scroll", t), pn(e.parentNode) || n(e.parentNode, t);
    },
    pn = function (e) {
        return (
            !e ||
            e === wi ||
            e.nodeType === 9 ||
            e === Ut.body ||
            e === Te ||
            !e.nodeType ||
            !e.parentNode
        );
    },
    Dl = function (e, t) {
        var i = t === "x" ? "Width" : "Height",
            r = "scroll" + i,
            s = "client" + i;
        return Math.max(
            0,
            pn(e)
                ? Math.max(wi[r], $i[r]) - (Te["inner" + i] || wi[s] || $i[s])
                : e[r] - e[s]
        );
    },
    Oo = function n(e, t) {
        var i = Dl(e, "x"),
            r = Dl(e, "y");
        pn(e) ? (e = Ii) : n(e.parentNode, t),
            (e._gsMaxScrollX = i),
            (e._gsMaxScrollY = r),
            t ||
                ((e._gsScrollX = e.scrollLeft || 0),
                (e._gsScrollY = e.scrollTop || 0));
    },
    Do = function (e, t, i) {
        var r = e.style;
        r &&
            (mi(r[t]) && (t = Pn(t, e) || t),
            i == null
                ? r.removeProperty &&
                  r.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase())
                : (r[t] = i));
    },
    ss = function (e) {
        return Te.getComputedStyle(
            e instanceof Element ? e : e.host || (e.parentNode || {}).host || e
        );
    },
    _r = {},
    Yr = function (e) {
        if (e === Te)
            return (
                (_r.left = _r.top = 0),
                (_r.width = _r.right =
                    wi.clientWidth || e.innerWidth || $i.clientWidth || 0),
                (_r.height = _r.bottom =
                    (e.innerHeight || 0) - 20 < wi.clientHeight
                        ? wi.clientHeight
                        : e.innerHeight || $i.clientHeight || 0),
                _r
            );
        var t = e.ownerDocument || Ut,
            i = mi(e.pageX)
                ? !e.nodeType && !mi(e.left) && !mi(e.top)
                    ? e
                    : ir(e)[0].getBoundingClientRect()
                : {
                      left: e.pageX - nn(t),
                      top: e.pageY - rn(t),
                      right: e.pageX - nn(t) + 1,
                      bottom: e.pageY - rn(t) + 1,
                  };
        return (
            mi(i.right) && !mi(i.width)
                ? ((i.right = i.left + i.width), (i.bottom = i.top + i.height))
                : mi(i.width) &&
                  (i = {
                      width: i.right - i.left,
                      height: i.bottom - i.top,
                      right: i.right,
                      left: i.left,
                      bottom: i.bottom,
                      top: i.top,
                  }),
            i
        );
    },
    Ye = function (e, t, i) {
        var r = e.vars,
            s = r[i],
            o = e._listeners[t],
            a;
        return (
            Zi(s) &&
                (a = s.apply(
                    r.callbackScope || e,
                    r[i + "Params"] || [e.pointerEvent]
                )),
            o && e.dispatchEvent(t) === !1 && (a = !1),
            a
        );
    },
    Ll = function (e, t) {
        var i = ir(e)[0],
            r,
            s,
            o;
        return !i.nodeType && i !== Te
            ? mi(e.left)
                ? ((s = e.min || e.minX || e.minRotation || 0),
                  (r = e.min || e.minY || 0),
                  {
                      left: s,
                      top: r,
                      width: (e.max || e.maxX || e.maxRotation || 0) - s,
                      height: (e.max || e.maxY || 0) - r,
                  })
                : ((o = { x: 0, y: 0 }),
                  {
                      left: e.left - o.x,
                      top: e.top - o.y,
                      width: e.width,
                      height: e.height,
                  })
            : Jp(i, t);
    },
    ri = {},
    Jp = function (e, t) {
        t = ir(t)[0];
        var i = e.getBBox && e.ownerSVGElement,
            r = e.ownerDocument || Ut,
            s,
            o,
            a,
            l,
            u,
            d,
            f,
            p,
            c,
            g,
            h,
            y,
            m;
        if (e === Te)
            (a = rn(r)),
                (s = nn(r)),
                (o =
                    s +
                    (r.documentElement.clientWidth ||
                        e.innerWidth ||
                        r.body.clientWidth ||
                        0)),
                (l =
                    a +
                    ((e.innerHeight || 0) - 20 < r.documentElement.clientHeight
                        ? r.documentElement.clientHeight
                        : e.innerHeight || r.body.clientHeight || 0));
        else {
            if (t === Te || mi(t)) return e.getBoundingClientRect();
            (s = a = 0),
                i
                    ? ((g = e.getBBox()), (h = g.width), (y = g.height))
                    : (e.viewBox &&
                          (g = e.viewBox.baseVal) &&
                          ((s = g.x || 0),
                          (a = g.y || 0),
                          (h = g.width),
                          (y = g.height)),
                      h ||
                          ((m = ss(e)),
                          (g = m.boxSizing === "border-box"),
                          (h =
                              (parseFloat(m.width) || e.clientWidth || 0) +
                              (g
                                  ? 0
                                  : parseFloat(m.borderLeftWidth) +
                                    parseFloat(m.borderRightWidth))),
                          (y =
                              (parseFloat(m.height) || e.clientHeight || 0) +
                              (g
                                  ? 0
                                  : parseFloat(m.borderTopWidth) +
                                    parseFloat(m.borderBottomWidth))))),
                (o = h),
                (l = y);
        }
        return e === t
            ? { left: s, top: a, width: o - s, height: l - a }
            : ((u = xr(t, !0).multiply(xr(e))),
              (d = u.apply({ x: s, y: a })),
              (f = u.apply({ x: o, y: a })),
              (p = u.apply({ x: o, y: l })),
              (c = u.apply({ x: s, y: l })),
              (s = Math.min(d.x, f.x, p.x, c.x)),
              (a = Math.min(d.y, f.y, p.y, c.y)),
              {
                  left: s,
                  top: a,
                  width: Math.max(d.x, f.x, p.x, c.x) - s,
                  height: Math.max(d.y, f.y, p.y, c.y) - a,
              });
    },
    Lo = function (e, t, i, r, s, o) {
        var a = {},
            l,
            u,
            d;
        if (t)
            if (s !== 1 && t instanceof Array) {
                if (((a.end = l = []), (d = t.length), Bn(t[0])))
                    for (u = 0; u < d; u++) l[u] = pu(t[u], s);
                else for (u = 0; u < d; u++) l[u] = t[u] * s;
                (i += 1.1), (r -= 1.1);
            } else
                Zi(t)
                    ? (a.end = function (f) {
                          var p = t.call(e, f),
                              c,
                              g;
                          if (s !== 1)
                              if (Bn(p)) {
                                  c = {};
                                  for (g in p) c[g] = p[g] * s;
                                  p = c;
                              } else p *= s;
                          return p;
                      })
                    : (a.end = t);
        return (
            (i || i === 0) && (a.max = i),
            (r || r === 0) && (a.min = r),
            o && (a.velocity = 0),
            a
        );
    },
    eh = function n(e) {
        var t;
        return !e || !e.getAttribute || e === $i
            ? !1
            : (t = e.getAttribute("data-clickable")) === "true" ||
              (t !== "false" &&
                  (jp.test(e.nodeName + "") ||
                      e.getAttribute("contentEditable") === "true"))
            ? !0
            : n(e.parentNode);
    },
    hs = function (e, t) {
        for (var i = e.length, r; i--; )
            (r = e[i]),
                (r.ondragstart = r.onselectstart = t ? null : Is),
                de.set(r, { lazy: !0, userSelect: t ? "text" : "none" });
    },
    th = function n(e) {
        if (ss(e).position === "fixed") return !0;
        if (((e = e.parentNode), e && e.nodeType === 1)) return n(e);
    },
    gu,
    ua,
    ih = function (e, t) {
        (e = de.utils.toArray(e)[0]), (t = t || {});
        var i = document.createElement("div"),
            r = i.style,
            s = e.firstChild,
            o = 0,
            a = 0,
            l = e.scrollTop,
            u = e.scrollLeft,
            d = e.scrollWidth,
            f = e.scrollHeight,
            p = 0,
            c = 0,
            g = 0,
            h,
            y,
            m,
            _,
            v,
            w;
        gu && t.force3D !== !1
            ? ((v = "translate3d("), (w = "px,0px)"))
            : $n && ((v = "translate("), (w = "px)")),
            (this.scrollTop = function (x, O) {
                if (!arguments.length) return -this.top();
                this.top(-x, O);
            }),
            (this.scrollLeft = function (x, O) {
                if (!arguments.length) return -this.left();
                this.left(-x, O);
            }),
            (this.left = function (x, O) {
                if (!arguments.length) return -(e.scrollLeft + a);
                var k = e.scrollLeft - u,
                    E = a;
                if ((k > 2 || k < -2) && !O) {
                    (u = e.scrollLeft),
                        de.killTweensOf(this, { left: 1, scrollLeft: 1 }),
                        this.left(-u),
                        t.onKill && t.onKill();
                    return;
                }
                (x = -x),
                    x < 0
                        ? ((a = (x - 0.5) | 0), (x = 0))
                        : x > c
                        ? ((a = (x - c) | 0), (x = c))
                        : (a = 0),
                    (a || E) &&
                        (this._skip || (r[$n] = v + -a + "px," + -o + w),
                        a + p >= 0 && (r.paddingRight = a + p + "px")),
                    (e.scrollLeft = x | 0),
                    (u = e.scrollLeft);
            }),
            (this.top = function (x, O) {
                if (!arguments.length) return -(e.scrollTop + o);
                var k = e.scrollTop - l,
                    E = o;
                if ((k > 2 || k < -2) && !O) {
                    (l = e.scrollTop),
                        de.killTweensOf(this, { top: 1, scrollTop: 1 }),
                        this.top(-l),
                        t.onKill && t.onKill();
                    return;
                }
                (x = -x),
                    x < 0
                        ? ((o = (x - 0.5) | 0), (x = 0))
                        : x > g
                        ? ((o = (x - g) | 0), (x = g))
                        : (o = 0),
                    (o || E) &&
                        (this._skip || (r[$n] = v + -a + "px," + -o + w)),
                    (e.scrollTop = x | 0),
                    (l = e.scrollTop);
            }),
            (this.maxScrollTop = function () {
                return g;
            }),
            (this.maxScrollLeft = function () {
                return c;
            }),
            (this.disable = function () {
                for (s = i.firstChild; s; )
                    (_ = s.nextSibling), e.appendChild(s), (s = _);
                e === i.parentNode && e.removeChild(i);
            }),
            (this.enable = function () {
                if (((s = e.firstChild), s !== i)) {
                    for (; s; ) (_ = s.nextSibling), i.appendChild(s), (s = _);
                    e.appendChild(i), this.calibrate();
                }
            }),
            (this.calibrate = function (x) {
                var O = e.clientWidth === h,
                    k,
                    E,
                    I;
                (l = e.scrollTop),
                    (u = e.scrollLeft),
                    !(
                        O &&
                        e.clientHeight === y &&
                        i.offsetHeight === m &&
                        d === e.scrollWidth &&
                        f === e.scrollHeight &&
                        !x
                    ) &&
                        ((o || a) &&
                            ((E = this.left()),
                            (I = this.top()),
                            this.left(-e.scrollLeft),
                            this.top(-e.scrollTop)),
                        (k = ss(e)),
                        (!O || x) &&
                            ((r.display = "block"),
                            (r.width = "auto"),
                            (r.paddingRight = "0px"),
                            (p = Math.max(0, e.scrollWidth - e.clientWidth)),
                            p &&
                                (p +=
                                    parseFloat(k.paddingLeft) +
                                    (ua ? parseFloat(k.paddingRight) : 0))),
                        (r.display = "inline-block"),
                        (r.position = "relative"),
                        (r.overflow = "visible"),
                        (r.verticalAlign = "top"),
                        (r.boxSizing = "content-box"),
                        (r.width = "100%"),
                        (r.paddingRight = p + "px"),
                        ua && (r.paddingBottom = k.paddingBottom),
                        (h = e.clientWidth),
                        (y = e.clientHeight),
                        (d = e.scrollWidth),
                        (f = e.scrollHeight),
                        (c = e.scrollWidth - h),
                        (g = e.scrollHeight - y),
                        (m = i.offsetHeight),
                        (r.display = "block"),
                        (E || I) && (this.left(E), this.top(I)));
            }),
            (this.content = i),
            (this.element = e),
            (this._skip = !1),
            this.enable();
    },
    Ao = function (e) {
        if (du() && document.body) {
            var t = window && window.navigator;
            (Te = window),
                (Ut = document),
                (wi = Ut.documentElement),
                ($i = Ut.body),
                (ko = ps("div")),
                (As = !!window.PointerEvent),
                (Ni = ps("div")),
                (Ni.style.cssText =
                    "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab"),
                (kn = Ni.style.cursor === "grab" ? "grab" : "move"),
                (Mn = t && t.userAgent.toLowerCase().indexOf("android") !== -1),
                (aa =
                    ("ontouchstart" in wi && "orientation" in Te) ||
                    (t && (t.MaxTouchPoints > 0 || t.msMaxTouchPoints > 0))),
                (ua = (function () {
                    var i = ps("div"),
                        r = ps("div"),
                        s = r.style,
                        o = $i,
                        a;
                    return (
                        (s.display = "inline-block"),
                        (s.position = "relative"),
                        (i.style.cssText =
                            "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden"),
                        i.appendChild(r),
                        o.appendChild(i),
                        (a = r.offsetHeight + 18 > i.scrollHeight),
                        o.removeChild(i),
                        a
                    );
                })()),
                (ns = (function (i) {
                    for (
                        var r = i.split(","),
                            s = (
                                ("onpointerdown" in ko)
                                    ? "pointerdown,pointermove,pointerup,pointercancel"
                                    : ("onmspointerdown" in ko)
                                    ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
                                    : i
                            ).split(","),
                            o = {},
                            a = 4;
                        --a > -1;

                    )
                        (o[r[a]] = s[a]), (o[s[a]] = r[a]);
                    try {
                        wi.addEventListener(
                            "test",
                            null,
                            Object.defineProperty({}, "passive", {
                                get: function () {
                                    cu = 1;
                                },
                            })
                        );
                    } catch {}
                    return o;
                })("touchstart,touchmove,touchend,touchcancel")),
                et(Ut, "touchcancel", Is),
                et(Te, "touchmove", Is),
                $i && $i.addEventListener("touchstart", Is),
                et(Ut, "contextmenu", function () {
                    for (var i in tn) tn[i].isPressed && tn[i].endDrag();
                }),
                (de = oa = fu());
        }
        de
            ? ((hi = de.plugins.inertia),
              (uu = de.core.context || function () {}),
              (Pn = de.utils.checkPrefix),
              ($n = Pn($n)),
              (ca = Pn(ca)),
              (ir = de.utils.toArray),
              (la = de.core.getStyleSaver),
              (gu = !!Pn("perspective")))
            : e && console.warn("Please gsap.registerPlugin(Draggable)");
    },
    rh = (function () {
        function n(t) {
            (this._listeners = {}), (this.target = t || this);
        }
        var e = n.prototype;
        return (
            (e.addEventListener = function (i, r) {
                var s = this._listeners[i] || (this._listeners[i] = []);
                ~s.indexOf(r) || s.push(r);
            }),
            (e.removeEventListener = function (i, r) {
                var s = this._listeners[i],
                    o = s && s.indexOf(r);
                o >= 0 && s.splice(o, 1);
            }),
            (e.dispatchEvent = function (i) {
                var r = this,
                    s;
                return (
                    (this._listeners[i] || []).forEach(function (o) {
                        return (
                            o.call(r, { type: i, target: r.target }) === !1 &&
                            (s = !1)
                        );
                    }),
                    s
                );
            }),
            n
        );
    })(),
    gn = (function (n) {
        Hp(e, n);
        function e(t, i) {
            var r;
            (r = n.call(this) || this),
                oa || Ao(1),
                (t = ir(t)[0]),
                (r.styles = la && la(t, "transform,left,top")),
                hi || (hi = de.plugins.inertia),
                (r.vars = i = pu(i || {})),
                (r.target = t),
                (r.x = r.y = r.rotation = 0),
                (r.dragResistance = parseFloat(i.dragResistance) || 0),
                (r.edgeResistance = isNaN(i.edgeResistance)
                    ? 1
                    : parseFloat(i.edgeResistance) || 0),
                (r.lockAxis = i.lockAxis),
                (r.autoScroll = i.autoScroll || 0),
                (r.lockedAxis = null),
                (r.allowEventDefault = !!i.allowEventDefault),
                de.getProperty(t, "x");
            var s = (i.type || "x,y").toLowerCase(),
                o = ~s.indexOf("x") || ~s.indexOf("y"),
                a = s.indexOf("rotation") !== -1,
                l = a ? "rotation" : o ? "x" : "left",
                u = o ? "y" : "top",
                d = !!(~s.indexOf("x") || ~s.indexOf("left") || s === "scroll"),
                f = !!(~s.indexOf("y") || ~s.indexOf("top") || s === "scroll"),
                p = i.minimumMovement || 2,
                c = bl(r),
                g = ir(i.trigger || i.handle || t),
                h = {},
                y = 0,
                m = !1,
                _ = i.autoScrollMarginTop || 40,
                v = i.autoScrollMarginRight || 40,
                w = i.autoScrollMarginBottom || 40,
                x = i.autoScrollMarginLeft || 40,
                O = i.clickableTest || eh,
                k = 0,
                E = t._gsap || de.core.getCache(t),
                I = th(t),
                P = function (b, B) {
                    return parseFloat(E.get(t, b, B));
                },
                R = t.ownerDocument || Ut,
                T,
                M,
                z,
                $,
                V,
                Y,
                U,
                K,
                C,
                Z,
                re,
                _e,
                te,
                Ne,
                we,
                Ee,
                he,
                qe,
                at,
                ke,
                Ke,
                se,
                ne,
                ee,
                pt,
                D,
                Pe,
                $t,
                ei,
                Le,
                Fe,
                xi,
                di,
                Ge = function (b) {
                    return (
                        ii(b),
                        b.stopImmediatePropagation &&
                            b.stopImmediatePropagation(),
                        !1
                    );
                },
                Ze = function j(b) {
                    if (c.autoScroll && c.isDragging && (m || he)) {
                        var B = t,
                            S = c.autoScroll * 15,
                            L,
                            F,
                            A,
                            G,
                            N,
                            H,
                            W,
                            q;
                        for (
                            m = !1,
                                Ii.scrollTop =
                                    Te.pageYOffset != null
                                        ? Te.pageYOffset
                                        : R.documentElement.scrollTop != null
                                        ? R.documentElement.scrollTop
                                        : R.body.scrollTop,
                                Ii.scrollLeft =
                                    Te.pageXOffset != null
                                        ? Te.pageXOffset
                                        : R.documentElement.scrollLeft != null
                                        ? R.documentElement.scrollLeft
                                        : R.body.scrollLeft,
                                G = c.pointerX - Ii.scrollLeft,
                                N = c.pointerY - Ii.scrollTop;
                            B && !F;

                        )
                            (F = pn(B.parentNode)),
                                (L = F ? Ii : B.parentNode),
                                (A = F
                                    ? {
                                          bottom: Math.max(
                                              wi.clientHeight,
                                              Te.innerHeight || 0
                                          ),
                                          right: Math.max(
                                              wi.clientWidth,
                                              Te.innerWidth || 0
                                          ),
                                          left: 0,
                                          top: 0,
                                      }
                                    : L.getBoundingClientRect()),
                                (H = W = 0),
                                f &&
                                    ((q = L._gsMaxScrollY - L.scrollTop),
                                    q < 0
                                        ? (W = q)
                                        : N > A.bottom - w && q
                                        ? ((m = !0),
                                          (W = Math.min(
                                              q,
                                              (S *
                                                  (1 -
                                                      Math.max(
                                                          0,
                                                          A.bottom - N
                                                      ) /
                                                          w)) |
                                                  0
                                          )))
                                        : N < A.top + _ &&
                                          L.scrollTop &&
                                          ((m = !0),
                                          (W = -Math.min(
                                              L.scrollTop,
                                              (S *
                                                  (1 -
                                                      Math.max(0, N - A.top) /
                                                          _)) |
                                                  0
                                          ))),
                                    W && (L.scrollTop += W)),
                                d &&
                                    ((q = L._gsMaxScrollX - L.scrollLeft),
                                    q < 0
                                        ? (H = q)
                                        : G > A.right - v && q
                                        ? ((m = !0),
                                          (H = Math.min(
                                              q,
                                              (S *
                                                  (1 -
                                                      Math.max(0, A.right - G) /
                                                          v)) |
                                                  0
                                          )))
                                        : G < A.left + x &&
                                          L.scrollLeft &&
                                          ((m = !0),
                                          (H = -Math.min(
                                              L.scrollLeft,
                                              (S *
                                                  (1 -
                                                      Math.max(0, G - A.left) /
                                                          x)) |
                                                  0
                                          ))),
                                    H && (L.scrollLeft += H)),
                                F &&
                                    (H || W) &&
                                    (Te.scrollTo(L.scrollLeft, L.scrollTop),
                                    Yt(c.pointerX + H, c.pointerY + W)),
                                (B = L);
                    }
                    if (he) {
                        var ie = c.x,
                            ge = c.y;
                        a
                            ? ((c.deltaX = ie - parseFloat(E.rotation)),
                              (c.rotation = ie),
                              (E.rotation = ie + "deg"),
                              E.renderTransform(1, E))
                            : M
                            ? (f && ((c.deltaY = ge - M.top()), M.top(ge)),
                              d && ((c.deltaX = ie - M.left()), M.left(ie)))
                            : o
                            ? (f &&
                                  ((c.deltaY = ge - parseFloat(E.y)),
                                  (E.y = ge + "px")),
                              d &&
                                  ((c.deltaX = ie - parseFloat(E.x)),
                                  (E.x = ie + "px")),
                              E.renderTransform(1, E))
                            : (f &&
                                  ((c.deltaY =
                                      ge - parseFloat(t.style.top || 0)),
                                  (t.style.top = ge + "px")),
                              d &&
                                  ((c.deltaX =
                                      ie - parseFloat(t.style.left || 0)),
                                  (t.style.left = ie + "px"))),
                            K &&
                                !b &&
                                !$t &&
                                (($t = !0),
                                Ye(c, "drag", "onDrag") === !1 &&
                                    (d && (c.x -= c.deltaX),
                                    f && (c.y -= c.deltaY),
                                    j(!0)),
                                ($t = !1));
                    }
                    he = !1;
                },
                ve = function (b, B) {
                    var S = c.x,
                        L = c.y,
                        F,
                        A;
                    t._gsap || (E = de.core.getCache(t)),
                        E.uncache && de.getProperty(t, "x"),
                        o
                            ? ((c.x = parseFloat(E.x)), (c.y = parseFloat(E.y)))
                            : a
                            ? (c.x = c.rotation = parseFloat(E.rotation))
                            : M
                            ? ((c.y = M.top()), (c.x = M.left()))
                            : ((c.y =
                                  parseFloat(
                                      t.style.top || ((A = ss(t)) && A.top)
                                  ) || 0),
                              (c.x =
                                  parseFloat(t.style.left || (A || {}).left) ||
                                  0)),
                        (at || ke || Ke) &&
                            !B &&
                            (c.isDragging || c.isThrowing) &&
                            (Ke &&
                                ((Gr.x = c.x),
                                (Gr.y = c.y),
                                (F = Ke(Gr)),
                                F.x !== c.x && ((c.x = F.x), (he = !0)),
                                F.y !== c.y && ((c.y = F.y), (he = !0))),
                            at &&
                                ((F = at(c.x)),
                                F !== c.x &&
                                    ((c.x = F),
                                    a && (c.rotation = F),
                                    (he = !0))),
                            ke &&
                                ((F = ke(c.y)),
                                F !== c.y && (c.y = F),
                                (he = !0))),
                        he && Ze(!0),
                        b ||
                            ((c.deltaX = c.x - S),
                            (c.deltaY = c.y - L),
                            Ye(c, "throwupdate", "onThrowUpdate"));
                },
                bt = function (b, B, S, L) {
                    return (
                        B == null && (B = -mr),
                        S == null && (S = mr),
                        Zi(b)
                            ? function (F) {
                                  var A = c.isPressed
                                      ? 1 - c.edgeResistance
                                      : 1;
                                  return (
                                      b.call(
                                          c,
                                          (F > S
                                              ? S + (F - S) * A
                                              : F < B
                                              ? B + (F - B) * A
                                              : F) * L
                                      ) * L
                                  );
                              }
                            : wn(b)
                            ? function (F) {
                                  for (
                                      var A = b.length, G = 0, N = mr, H, W;
                                      --A > -1;

                                  )
                                      (H = b[A]),
                                          (W = H - F),
                                          W < 0 && (W = -W),
                                          W < N &&
                                              H >= B &&
                                              H <= S &&
                                              ((G = A), (N = W));
                                  return b[G];
                              }
                            : isNaN(b)
                            ? function (F) {
                                  return F;
                              }
                            : function () {
                                  return b * L;
                              }
                    );
                },
                Dt = function (b, B, S, L, F, A, G) {
                    return (
                        (A = A && A < mr ? A * A : mr),
                        Zi(b)
                            ? function (N) {
                                  var H = c.isPressed
                                          ? 1 - c.edgeResistance
                                          : 1,
                                      W = N.x,
                                      q = N.y,
                                      ie,
                                      ge,
                                      me;
                                  return (
                                      (N.x = W =
                                          W > S
                                              ? S + (W - S) * H
                                              : W < B
                                              ? B + (W - B) * H
                                              : W),
                                      (N.y = q =
                                          q > F
                                              ? F + (q - F) * H
                                              : q < L
                                              ? L + (q - L) * H
                                              : q),
                                      (ie = b.call(c, N)),
                                      ie !== N && ((N.x = ie.x), (N.y = ie.y)),
                                      G !== 1 && ((N.x *= G), (N.y *= G)),
                                      A < mr &&
                                          ((ge = N.x - W),
                                          (me = N.y - q),
                                          ge * ge + me * me > A &&
                                              ((N.x = W), (N.y = q))),
                                      N
                                  );
                              }
                            : wn(b)
                            ? function (N) {
                                  for (
                                      var H = b.length,
                                          W = 0,
                                          q = mr,
                                          ie,
                                          ge,
                                          me,
                                          ae;
                                      --H > -1;

                                  )
                                      (me = b[H]),
                                          (ie = me.x - N.x),
                                          (ge = me.y - N.y),
                                          (ae = ie * ie + ge * ge),
                                          ae < q && ((W = H), (q = ae));
                                  return q <= A ? b[W] : N;
                              }
                            : function (N) {
                                  return N;
                              }
                    );
                },
                Vt = function () {
                    var b, B, S, L;
                    (U = !1),
                        M
                            ? (M.calibrate(),
                              (c.minX = re = -M.maxScrollLeft()),
                              (c.minY = te = -M.maxScrollTop()),
                              (c.maxX = Z = c.maxY = _e = 0),
                              (U = !0))
                            : i.bounds &&
                              ((b = Ll(i.bounds, t.parentNode)),
                              a
                                  ? ((c.minX = re = b.left),
                                    (c.maxX = Z = b.left + b.width),
                                    (c.minY = te = c.maxY = _e = 0))
                                  : !mi(i.bounds.maxX) || !mi(i.bounds.maxY)
                                  ? ((b = i.bounds),
                                    (c.minX = re = b.minX),
                                    (c.minY = te = b.minY),
                                    (c.maxX = Z = b.maxX),
                                    (c.maxY = _e = b.maxY))
                                  : ((B = Ll(t, t.parentNode)),
                                    (c.minX = re =
                                        Math.round(
                                            P(l, "px") + b.left - B.left
                                        )),
                                    (c.minY = te =
                                        Math.round(P(u, "px") + b.top - B.top)),
                                    (c.maxX = Z =
                                        Math.round(re + (b.width - B.width))),
                                    (c.maxY = _e =
                                        Math.round(
                                            te + (b.height - B.height)
                                        ))),
                              re > Z &&
                                  ((c.minX = Z),
                                  (c.maxX = Z = re),
                                  (re = c.minX)),
                              te > _e &&
                                  ((c.minY = _e),
                                  (c.maxY = _e = te),
                                  (te = c.minY)),
                              a && ((c.minRotation = re), (c.maxRotation = Z)),
                              (U = !0)),
                        i.liveSnap &&
                            ((S =
                                i.liveSnap === !0 ? i.snap || {} : i.liveSnap),
                            (L = wn(S) || Zi(S)),
                            a
                                ? ((at = bt(L ? S : S.rotation, re, Z, 1)),
                                  (ke = null))
                                : S.points
                                ? (Ke = Dt(
                                      L ? S : S.points,
                                      re,
                                      Z,
                                      te,
                                      _e,
                                      S.radius,
                                      M ? -1 : 1
                                  ))
                                : (d &&
                                      (at = bt(
                                          L ? S : S.x || S.left || S.scrollLeft,
                                          re,
                                          Z,
                                          M ? -1 : 1
                                      )),
                                  f &&
                                      (ke = bt(
                                          L ? S : S.y || S.top || S.scrollTop,
                                          te,
                                          _e,
                                          M ? -1 : 1
                                      ))));
                },
                fr = function () {
                    (c.isThrowing = !1),
                        Ye(c, "throwcomplete", "onThrowComplete");
                },
                Be = function () {
                    c.isThrowing = !1;
                },
                qi = function (b, B) {
                    var S, L, F, A;
                    b && hi
                        ? (b === !0 &&
                              ((S = i.snap || i.liveSnap || {}),
                              (L = wn(S) || Zi(S)),
                              (b = {
                                  resistance:
                                      (i.throwResistance ||
                                          i.resistance ||
                                          1e3) / (a ? 10 : 1),
                              }),
                              a
                                  ? (b.rotation = Lo(
                                        c,
                                        L ? S : S.rotation,
                                        Z,
                                        re,
                                        1,
                                        B
                                    ))
                                  : (d &&
                                        (b[l] = Lo(
                                            c,
                                            L ? S : S.points || S.x || S.left,
                                            Z,
                                            re,
                                            M ? -1 : 1,
                                            B || c.lockedAxis === "x"
                                        )),
                                    f &&
                                        (b[u] = Lo(
                                            c,
                                            L ? S : S.points || S.y || S.top,
                                            _e,
                                            te,
                                            M ? -1 : 1,
                                            B || c.lockedAxis === "y"
                                        )),
                                    (S.points || (wn(S) && Bn(S[0]))) &&
                                        ((b.linkedProps = l + "," + u),
                                        (b.radius = S.radius)))),
                          (c.isThrowing = !0),
                          (A = isNaN(i.overshootTolerance)
                              ? i.edgeResistance === 1
                                  ? 0
                                  : 1 - c.edgeResistance + 0.2
                              : i.overshootTolerance),
                          b.duration ||
                              (b.duration = {
                                  max: Math.max(
                                      i.minDuration || 0,
                                      "maxDuration" in i ? i.maxDuration : 2
                                  ),
                                  min: isNaN(i.minDuration)
                                      ? A === 0 || (Bn(b) && b.resistance > 1e3)
                                          ? 0
                                          : 0.5
                                      : i.minDuration,
                                  overshoot: A,
                              }),
                          (c.tween = F =
                              de.to(M || t, {
                                  inertia: b,
                                  data: "_draggable",
                                  inherit: !1,
                                  onComplete: fr,
                                  onInterrupt: Be,
                                  onUpdate: i.fastMode ? Ye : ve,
                                  onUpdateParams: i.fastMode
                                      ? [c, "onthrowupdate", "onThrowUpdate"]
                                      : S && S.radius
                                      ? [!1, !0]
                                      : [],
                              })),
                          i.fastMode ||
                              (M && (M._skip = !0),
                              F.render(1e9, !0, !0),
                              ve(!0, !0),
                              (c.endX = c.x),
                              (c.endY = c.y),
                              a && (c.endRotation = c.x),
                              F.play(0),
                              ve(!0, !0),
                              M && (M._skip = !1)))
                        : U && c.applyBounds();
                },
                fi = function (b) {
                    var B = ee,
                        S;
                    (ee = xr(t.parentNode, !0)),
                        b &&
                            c.isPressed &&
                            !ee.equals(B || new zr()) &&
                            ((S = B.inverse().apply({ x: z, y: $ })),
                            ee.apply(S, S),
                            (z = S.x),
                            ($ = S.y)),
                        ee.equals(Xp) && (ee = null);
                },
                pi = function () {
                    var b = 1 - c.edgeResistance,
                        B = I ? nn(R) : 0,
                        S = I ? rn(R) : 0,
                        L,
                        F,
                        A;
                    o &&
                        ((E.x = P(l, "px") + "px"),
                        (E.y = P(u, "px") + "px"),
                        E.renderTransform()),
                        fi(!1),
                        (ri.x = c.pointerX - B),
                        (ri.y = c.pointerY - S),
                        ee && ee.apply(ri, ri),
                        (z = ri.x),
                        ($ = ri.y),
                        he && (Yt(c.pointerX, c.pointerY), Ze(!0)),
                        (xi = xr(t)),
                        M
                            ? (Vt(), (Y = M.top()), (V = M.left()))
                            : (ti() ? (ve(!0, !0), Vt()) : c.applyBounds(),
                              a
                                  ? ((L = t.ownerSVGElement
                                        ? [
                                              E.xOrigin - t.getBBox().x,
                                              E.yOrigin - t.getBBox().y,
                                          ]
                                        : (ss(t)[ca] || "0 0").split(" ")),
                                    (Ee = c.rotationOrigin =
                                        xr(t).apply({
                                            x: parseFloat(L[0]) || 0,
                                            y: parseFloat(L[1]) || 0,
                                        })),
                                    ve(!0, !0),
                                    (F = c.pointerX - Ee.x - B),
                                    (A = Ee.y - c.pointerY + S),
                                    (V = c.x),
                                    (Y = c.y = Math.atan2(A, F) * Tl))
                                  : ((Y = P(u, "px")), (V = P(l, "px")))),
                        U &&
                            b &&
                            (V > Z
                                ? (V = Z + (V - Z) / b)
                                : V < re && (V = re - (re - V) / b),
                            a ||
                                (Y > _e
                                    ? (Y = _e + (Y - _e) / b)
                                    : Y < te && (Y = te - (te - Y) / b))),
                        (c.startX = V = ji(V)),
                        (c.startY = Y = ji(Y));
                },
                ti = function () {
                    return c.tween && c.tween.isActive();
                },
                bi = function () {
                    Ni.parentNode &&
                        !ti() &&
                        !c.isDragging &&
                        Ni.parentNode.removeChild(Ni);
                },
                Gt = function (b, B) {
                    var S;
                    if (
                        !T ||
                        c.isPressed ||
                        !b ||
                        ((b.type === "mousedown" || b.type === "pointerdown") &&
                            !B &&
                            Wi() - k < 30 &&
                            ns[c.pointerEvent.type])
                    ) {
                        Fe && b && T && ii(b);
                        return;
                    }
                    if (
                        ((pt = ti()),
                        (di = !1),
                        (c.pointerEvent = b),
                        ns[b.type]
                            ? ((ne = ~b.type.indexOf("touch")
                                  ? b.currentTarget || b.target
                                  : R),
                              et(ne, "touchend", Ae),
                              et(ne, "touchmove", Q),
                              et(ne, "touchcancel", Ae),
                              et(R, "touchstart", Ml))
                            : ((ne = null), et(R, "mousemove", Q)),
                        (Pe = null),
                        (!As || !ne) &&
                            (et(R, "mouseup", Ae),
                            b && b.target && et(b.target, "mouseup", Ae)),
                        (se =
                            O.call(c, b.target) &&
                            i.dragClickables === !1 &&
                            !B),
                        se)
                    ) {
                        et(b.target, "change", Ae),
                            Ye(c, "pressInit", "onPressInit"),
                            Ye(c, "press", "onPress"),
                            hs(g, !0),
                            (Fe = !1);
                        return;
                    }
                    if (
                        ((D =
                            !ne ||
                            d === f ||
                            c.vars.allowNativeTouchScrolling === !1 ||
                            (c.vars.allowContextMenu &&
                                b &&
                                (b.ctrlKey || b.which > 2))
                                ? !1
                                : d
                                ? "y"
                                : "x"),
                        (Fe = !D && !c.allowEventDefault),
                        Fe && (ii(b), et(Te, "touchforcechange", ii)),
                        b.changedTouches
                            ? ((b = Ne = b.changedTouches[0]),
                              (we = b.identifier))
                            : b.pointerId
                            ? (we = b.pointerId)
                            : (Ne = we = null),
                        Qs++,
                        Up(Ze),
                        ($ = c.pointerY = b.pageY),
                        (z = c.pointerX = b.pageX),
                        Ye(c, "pressInit", "onPressInit"),
                        (D || c.autoScroll) && Oo(t.parentNode),
                        t.parentNode &&
                            c.autoScroll &&
                            !M &&
                            !a &&
                            t.parentNode._gsMaxScrollX &&
                            !Ni.parentNode &&
                            !t.getBBox &&
                            ((Ni.style.width = t.parentNode.scrollWidth + "px"),
                            t.parentNode.appendChild(Ni)),
                        pi(),
                        c.tween && c.tween.kill(),
                        (c.isThrowing = !1),
                        de.killTweensOf(M || t, h, !0),
                        M && de.killTweensOf(t, { scrollTo: 1 }, !0),
                        (c.tween = c.lockedAxis = null),
                        (i.zIndexBoost || (!a && !M && i.zIndexBoost !== !1)) &&
                            (t.style.zIndex = e.zIndex++),
                        (c.isPressed = !0),
                        (K = !!(i.onDrag || c._listeners.drag)),
                        (C = !!(i.onMove || c._listeners.move)),
                        i.cursor !== !1 || i.activeCursor)
                    )
                        for (S = g.length; --S > -1; )
                            de.set(g[S], {
                                cursor:
                                    i.activeCursor ||
                                    i.cursor ||
                                    (kn === "grab" ? "grabbing" : kn),
                            });
                    Ye(c, "press", "onPress");
                },
                Q = function (b) {
                    var B = b,
                        S,
                        L,
                        F,
                        A,
                        G,
                        N;
                    if (!T || Xa || !c.isPressed || !b) {
                        Fe && b && T && ii(b);
                        return;
                    }
                    if (((c.pointerEvent = b), (S = b.changedTouches), S)) {
                        if (((b = S[0]), b !== Ne && b.identifier !== we)) {
                            for (
                                A = S.length;
                                --A > -1 &&
                                (b = S[A]).identifier !== we &&
                                b.target !== t;

                            );
                            if (A < 0) return;
                        }
                    } else if (b.pointerId && we && b.pointerId !== we) return;
                    if (
                        ne &&
                        D &&
                        !Pe &&
                        ((ri.x = b.pageX - (I ? nn(R) : 0)),
                        (ri.y = b.pageY - (I ? rn(R) : 0)),
                        ee && ee.apply(ri, ri),
                        (L = ri.x),
                        (F = ri.y),
                        (G = Math.abs(L - z)),
                        (N = Math.abs(F - $)),
                        ((G !== N && (G > p || N > p)) || (Mn && D === Pe)) &&
                            ((Pe = G > N && d ? "x" : "y"),
                            D && Pe !== D && et(Te, "touchforcechange", ii),
                            c.vars.lockAxisOnTouchScroll !== !1 &&
                                d &&
                                f &&
                                ((c.lockedAxis = Pe === "x" ? "y" : "x"),
                                Zi(c.vars.onLockAxis) &&
                                    c.vars.onLockAxis.call(c, B)),
                            Mn && D === Pe))
                    ) {
                        Ae(B);
                        return;
                    }
                    !c.allowEventDefault &&
                    (!D || (Pe && D !== Pe)) &&
                    B.cancelable !== !1
                        ? (ii(B), (Fe = !0))
                        : Fe && (Fe = !1),
                        c.autoScroll && (m = !0),
                        Yt(b.pageX, b.pageY, C);
                },
                Yt = function (b, B, S) {
                    var L = 1 - c.dragResistance,
                        F = 1 - c.edgeResistance,
                        A = c.pointerX,
                        G = c.pointerY,
                        N = Y,
                        H = c.x,
                        W = c.y,
                        q = c.endX,
                        ie = c.endY,
                        ge = c.endRotation,
                        me = he,
                        ae,
                        ue,
                        ye,
                        J,
                        lt,
                        $e;
                    (c.pointerX = b),
                        (c.pointerY = B),
                        I && ((b -= nn(R)), (B -= rn(R))),
                        a
                            ? ((J = Math.atan2(Ee.y - B, b - Ee.x) * Tl),
                              (lt = c.y - J),
                              lt > 180
                                  ? ((Y -= 360), (c.y = J))
                                  : lt < -180 && ((Y += 360), (c.y = J)),
                              c.x !== V || Math.abs(Y - J) > p
                                  ? ((c.y = J), (ye = V + (Y - J) * L))
                                  : (ye = V))
                            : (ee &&
                                  (($e = b * ee.a + B * ee.c + ee.e),
                                  (B = b * ee.b + B * ee.d + ee.f),
                                  (b = $e)),
                              (ue = B - $),
                              (ae = b - z),
                              ue < p && ue > -p && (ue = 0),
                              ae < p && ae > -p && (ae = 0),
                              (c.lockAxis || c.lockedAxis) &&
                                  (ae || ue) &&
                                  (($e = c.lockedAxis),
                                  $e ||
                                      ((c.lockedAxis = $e =
                                          d && Math.abs(ae) > Math.abs(ue)
                                              ? "y"
                                              : f
                                              ? "x"
                                              : null),
                                      $e &&
                                          Zi(c.vars.onLockAxis) &&
                                          c.vars.onLockAxis.call(
                                              c,
                                              c.pointerEvent
                                          )),
                                  $e === "y"
                                      ? (ue = 0)
                                      : $e === "x" && (ae = 0)),
                              (ye = ji(V + ae * L)),
                              (J = ji(Y + ue * L))),
                        (at || ke || Ke) &&
                            (c.x !== ye || (c.y !== J && !a)) &&
                            (Ke &&
                                ((Gr.x = ye),
                                (Gr.y = J),
                                ($e = Ke(Gr)),
                                (ye = ji($e.x)),
                                (J = ji($e.y))),
                            at && (ye = ji(at(ye))),
                            ke && (J = ji(ke(J)))),
                        U &&
                            (ye > Z
                                ? (ye = Z + Math.round((ye - Z) * F))
                                : ye < re &&
                                  (ye = re + Math.round((ye - re) * F)),
                            a ||
                                (J > _e
                                    ? (J = Math.round(_e + (J - _e) * F))
                                    : J < te &&
                                      (J = Math.round(te + (J - te) * F)))),
                        (c.x !== ye || (c.y !== J && !a)) &&
                            (a
                                ? ((c.endRotation = c.x = c.endX = ye),
                                  (he = !0))
                                : (f && ((c.y = c.endY = J), (he = !0)),
                                  d && ((c.x = c.endX = ye), (he = !0))),
                            !S || Ye(c, "move", "onMove") !== !1
                                ? !c.isDragging &&
                                  c.isPressed &&
                                  ((c.isDragging = di = !0),
                                  Ye(c, "dragstart", "onDragStart"))
                                : ((c.pointerX = A),
                                  (c.pointerY = G),
                                  (Y = N),
                                  (c.x = H),
                                  (c.y = W),
                                  (c.endX = q),
                                  (c.endY = ie),
                                  (c.endRotation = ge),
                                  (he = me)));
                },
                Ae = function j(b, B) {
                    if (
                        !T ||
                        !c.isPressed ||
                        (b &&
                            we != null &&
                            !B &&
                            ((b.pointerId &&
                                b.pointerId !== we &&
                                b.target !== t) ||
                                (b.changedTouches &&
                                    !Zp(b.changedTouches, we))))
                    ) {
                        Fe && b && T && ii(b);
                        return;
                    }
                    c.isPressed = !1;
                    var S = b,
                        L = c.isDragging,
                        F =
                            c.vars.allowContextMenu &&
                            b &&
                            (b.ctrlKey || b.which > 2),
                        A = de.delayedCall(0.001, bi),
                        G,
                        N,
                        H,
                        W,
                        q;
                    if (
                        (ne
                            ? (je(ne, "touchend", j),
                              je(ne, "touchmove", Q),
                              je(ne, "touchcancel", j),
                              je(R, "touchstart", Ml))
                            : je(R, "mousemove", Q),
                        je(Te, "touchforcechange", ii),
                        (!As || !ne) &&
                            (je(R, "mouseup", j),
                            b && b.target && je(b.target, "mouseup", j)),
                        (he = !1),
                        L && ((y = Sl = Wi()), (c.isDragging = !1)),
                        Pl(Ze),
                        se && !F)
                    ) {
                        b && (je(b.target, "change", j), (c.pointerEvent = S)),
                            hs(g, !1),
                            Ye(c, "release", "onRelease"),
                            Ye(c, "click", "onClick"),
                            (se = !1);
                        return;
                    }
                    for (N = g.length; --N > -1; )
                        Do(
                            g[N],
                            "cursor",
                            i.cursor || (i.cursor !== !1 ? kn : null)
                        );
                    if ((Qs--, b)) {
                        if (
                            ((G = b.changedTouches),
                            G && ((b = G[0]), b !== Ne && b.identifier !== we))
                        ) {
                            for (
                                N = G.length;
                                --N > -1 &&
                                (b = G[N]).identifier !== we &&
                                b.target !== t;

                            );
                            if (N < 0 && !B) return;
                        }
                        (c.pointerEvent = S),
                            (c.pointerX = b.pageX),
                            (c.pointerY = b.pageY);
                    }
                    return (
                        F && S
                            ? (ii(S), (Fe = !0), Ye(c, "release", "onRelease"))
                            : S && !L
                            ? ((Fe = !1),
                              pt &&
                                  (i.snap || i.bounds) &&
                                  qi(i.inertia || i.throwProps),
                              Ye(c, "release", "onRelease"),
                              (!Mn || S.type !== "touchmove") &&
                                  S.type.indexOf("cancel") === -1 &&
                                  (Ye(c, "click", "onClick"),
                                  Wi() - k < 300 &&
                                      Ye(c, "doubleclick", "onDoubleClick"),
                                  (W = S.target || t),
                                  (k = Wi()),
                                  (q = function () {
                                      k !== ei &&
                                          c.enabled() &&
                                          !c.isPressed &&
                                          !S.defaultPrevented &&
                                          (W.click
                                              ? W.click()
                                              : R.createEvent &&
                                                ((H =
                                                    R.createEvent(
                                                        "MouseEvents"
                                                    )),
                                                H.initMouseEvent(
                                                    "click",
                                                    !0,
                                                    !0,
                                                    Te,
                                                    1,
                                                    c.pointerEvent.screenX,
                                                    c.pointerEvent.screenY,
                                                    c.pointerX,
                                                    c.pointerY,
                                                    !1,
                                                    !1,
                                                    !1,
                                                    !1,
                                                    0,
                                                    null
                                                ),
                                                W.dispatchEvent(H)));
                                  }),
                                  !Mn &&
                                      !S.defaultPrevented &&
                                      de.delayedCall(0.05, q)))
                            : (qi(i.inertia || i.throwProps),
                              !c.allowEventDefault &&
                              S &&
                              (i.dragClickables !== !1 ||
                                  !O.call(c, S.target)) &&
                              L &&
                              (!D || (Pe && D === Pe)) &&
                              S.cancelable !== !1
                                  ? ((Fe = !0), ii(S))
                                  : (Fe = !1),
                              Ye(c, "release", "onRelease")),
                        ti() && A.duration(c.tween.duration()),
                        L && Ye(c, "dragend", "onDragEnd"),
                        !0
                    );
                },
                ht = function (b) {
                    if (b && c.isDragging && !M) {
                        var B = b.target || t.parentNode,
                            S = B.scrollLeft - B._gsScrollX,
                            L = B.scrollTop - B._gsScrollY;
                        (S || L) &&
                            (ee
                                ? ((z -= S * ee.a + L * ee.c),
                                  ($ -= L * ee.d + S * ee.b))
                                : ((z -= S), ($ -= L)),
                            (B._gsScrollX += S),
                            (B._gsScrollY += L),
                            Yt(c.pointerX, c.pointerY));
                    }
                },
                Lt = function (b) {
                    var B = Wi(),
                        S = B - k < 100,
                        L = B - y < 50,
                        F = S && ei === k,
                        A = c.pointerEvent && c.pointerEvent.defaultPrevented,
                        G = S && Le === k,
                        N = b.isTrusted || (b.isTrusted == null && S && F);
                    if (
                        ((F || (L && c.vars.suppressClickOnDrag !== !1)) &&
                            b.stopImmediatePropagation &&
                            b.stopImmediatePropagation(),
                        S &&
                            !(
                                c.pointerEvent &&
                                c.pointerEvent.defaultPrevented
                            ) &&
                            (!F || (N && !G)))
                    ) {
                        N && F && (Le = k), (ei = k);
                        return;
                    }
                    (c.isPressed || L || S) &&
                        (!N || !b.detail || !S || A) &&
                        ii(b),
                        !S &&
                            !L &&
                            !di &&
                            (b && b.target && (c.pointerEvent = b),
                            Ye(c, "click", "onClick"));
                },
                Ti = function (b) {
                    return ee
                        ? {
                              x: b.x * ee.a + b.y * ee.c + ee.e,
                              y: b.x * ee.b + b.y * ee.d + ee.f,
                          }
                        : { x: b.x, y: b.y };
                };
            return (
                (qe = e.get(t)),
                qe && qe.kill(),
                (r.startDrag = function (j, b) {
                    var B, S, L, F;
                    Gt(j || c.pointerEvent, !0),
                        b &&
                            !c.hitTest(j || c.pointerEvent) &&
                            ((B = Yr(j || c.pointerEvent)),
                            (S = Yr(t)),
                            (L = Ti({
                                x: B.left + B.width / 2,
                                y: B.top + B.height / 2,
                            })),
                            (F = Ti({
                                x: S.left + S.width / 2,
                                y: S.top + S.height / 2,
                            })),
                            (z -= L.x - F.x),
                            ($ -= L.y - F.y)),
                        c.isDragging ||
                            ((c.isDragging = di = !0),
                            Ye(c, "dragstart", "onDragStart"));
                }),
                (r.drag = Q),
                (r.endDrag = function (j) {
                    return Ae(j || c.pointerEvent, !0);
                }),
                (r.timeSinceDrag = function () {
                    return c.isDragging ? 0 : (Wi() - y) / 1e3;
                }),
                (r.timeSinceClick = function () {
                    return (Wi() - k) / 1e3;
                }),
                (r.hitTest = function (j, b) {
                    return e.hitTest(c.target, j, b);
                }),
                (r.getDirection = function (j, b) {
                    var B =
                            j === "velocity" && hi
                                ? j
                                : Bn(j) && !a
                                ? "element"
                                : "start",
                        S,
                        L,
                        F,
                        A,
                        G,
                        N;
                    return (
                        B === "element" && ((G = Yr(c.target)), (N = Yr(j))),
                        (S =
                            B === "start"
                                ? c.x - V
                                : B === "velocity"
                                ? hi.getVelocity(t, l)
                                : G.left +
                                  G.width / 2 -
                                  (N.left + N.width / 2)),
                        a
                            ? S < 0
                                ? "counter-clockwise"
                                : "clockwise"
                            : ((b = b || 2),
                              (L =
                                  B === "start"
                                      ? c.y - Y
                                      : B === "velocity"
                                      ? hi.getVelocity(t, u)
                                      : G.top +
                                        G.height / 2 -
                                        (N.top + N.height / 2)),
                              (F = Math.abs(S / L)),
                              (A = F < 1 / b ? "" : S < 0 ? "left" : "right"),
                              F < b &&
                                  (A !== "" && (A += "-"),
                                  (A += L < 0 ? "up" : "down")),
                              A)
                    );
                }),
                (r.applyBounds = function (j, b) {
                    var B, S, L, F, A, G;
                    if (j && i.bounds !== j)
                        return (i.bounds = j), c.update(!0, b);
                    if ((ve(!0), Vt(), U && !ti())) {
                        if (
                            ((B = c.x),
                            (S = c.y),
                            B > Z ? (B = Z) : B < re && (B = re),
                            S > _e ? (S = _e) : S < te && (S = te),
                            (c.x !== B || c.y !== S) &&
                                ((L = !0),
                                (c.x = c.endX = B),
                                a ? (c.endRotation = B) : (c.y = c.endY = S),
                                (he = !0),
                                Ze(!0),
                                c.autoScroll && !c.isDragging))
                        )
                            for (
                                Oo(t.parentNode),
                                    F = t,
                                    Ii.scrollTop =
                                        Te.pageYOffset != null
                                            ? Te.pageYOffset
                                            : R.documentElement.scrollTop !=
                                              null
                                            ? R.documentElement.scrollTop
                                            : R.body.scrollTop,
                                    Ii.scrollLeft =
                                        Te.pageXOffset != null
                                            ? Te.pageXOffset
                                            : R.documentElement.scrollLeft !=
                                              null
                                            ? R.documentElement.scrollLeft
                                            : R.body.scrollLeft;
                                F && !G;

                            )
                                (G = pn(F.parentNode)),
                                    (A = G ? Ii : F.parentNode),
                                    f &&
                                        A.scrollTop > A._gsMaxScrollY &&
                                        (A.scrollTop = A._gsMaxScrollY),
                                    d &&
                                        A.scrollLeft > A._gsMaxScrollX &&
                                        (A.scrollLeft = A._gsMaxScrollX),
                                    (F = A);
                        c.isThrowing &&
                            (L ||
                                c.endX > Z ||
                                c.endX < re ||
                                c.endY > _e ||
                                c.endY < te) &&
                            qi(i.inertia || i.throwProps, L);
                    }
                    return c;
                }),
                (r.update = function (j, b, B) {
                    if (b && c.isPressed) {
                        var S = xr(t),
                            L = xi.apply({ x: c.x - V, y: c.y - Y }),
                            F = xr(t.parentNode, !0);
                        F.apply({ x: S.e - L.x, y: S.f - L.y }, L),
                            (c.x -= L.x - F.e),
                            (c.y -= L.y - F.f),
                            Ze(!0),
                            pi();
                    }
                    var A = c.x,
                        G = c.y;
                    return (
                        fi(!b),
                        j ? c.applyBounds() : (he && B && Ze(!0), ve(!0)),
                        b && (Yt(c.pointerX, c.pointerY), he && Ze(!0)),
                        c.isPressed &&
                            !b &&
                            ((d && Math.abs(A - c.x) > 0.01) ||
                                (f && Math.abs(G - c.y) > 0.01 && !a)) &&
                            pi(),
                        c.autoScroll &&
                            (Oo(t.parentNode, c.isDragging),
                            (m = c.isDragging),
                            Ze(!0),
                            Ol(t, ht),
                            kl(t, ht)),
                        c
                    );
                }),
                (r.enable = function (j) {
                    var b = { lazy: !0 },
                        B,
                        S,
                        L;
                    if (
                        (i.cursor !== !1 && (b.cursor = i.cursor || kn),
                        de.utils.checkPrefix("touchCallout") &&
                            (b.touchCallout = "none"),
                        j !== "soft")
                    ) {
                        for (
                            El(
                                g,
                                d === f
                                    ? "none"
                                    : (i.allowNativeTouchScrolling &&
                                          (t.scrollHeight === t.clientHeight) ==
                                              (t.scrollWidth ===
                                                  t.clientHeight)) ||
                                      i.allowEventDefault
                                    ? "manipulation"
                                    : d
                                    ? "pan-y"
                                    : "pan-x"
                            ),
                                S = g.length;
                            --S > -1;

                        )
                            (L = g[S]),
                                As || et(L, "mousedown", Gt),
                                et(L, "touchstart", Gt),
                                et(L, "click", Lt, !0),
                                de.set(L, b),
                                L.getBBox &&
                                    L.ownerSVGElement &&
                                    d !== f &&
                                    de.set(L.ownerSVGElement, {
                                        touchAction:
                                            i.allowNativeTouchScrolling ||
                                            i.allowEventDefault
                                                ? "manipulation"
                                                : d
                                                ? "pan-y"
                                                : "pan-x",
                                    }),
                                i.allowContextMenu || et(L, "contextmenu", Ge);
                        hs(g, !1);
                    }
                    return (
                        kl(t, ht),
                        (T = !0),
                        hi &&
                            j !== "soft" &&
                            hi.track(
                                M || t,
                                o ? "x,y" : a ? "rotation" : "top,left"
                            ),
                        (t._gsDragID = B = "d" + qp++),
                        (tn[B] = c),
                        M && (M.enable(), (M.element._gsDragID = B)),
                        (i.bounds || a) && pi(),
                        i.bounds && c.applyBounds(),
                        c
                    );
                }),
                (r.disable = function (j) {
                    for (var b = c.isDragging, B = g.length, S; --B > -1; )
                        Do(g[B], "cursor", null);
                    if (j !== "soft") {
                        for (El(g, null), B = g.length; --B > -1; )
                            (S = g[B]),
                                Do(S, "touchCallout", null),
                                je(S, "mousedown", Gt),
                                je(S, "touchstart", Gt),
                                je(S, "click", Lt, !0),
                                je(S, "contextmenu", Ge);
                        hs(g, !0),
                            ne &&
                                (je(ne, "touchcancel", Ae),
                                je(ne, "touchend", Ae),
                                je(ne, "touchmove", Q)),
                            je(R, "mouseup", Ae),
                            je(R, "mousemove", Q);
                    }
                    return (
                        Ol(t, ht),
                        (T = !1),
                        hi &&
                            j !== "soft" &&
                            (hi.untrack(
                                M || t,
                                o ? "x,y" : a ? "rotation" : "top,left"
                            ),
                            c.tween && c.tween.kill()),
                        M && M.disable(),
                        Pl(Ze),
                        (c.isDragging = c.isPressed = se = !1),
                        b && Ye(c, "dragend", "onDragEnd"),
                        c
                    );
                }),
                (r.enabled = function (j, b) {
                    return arguments.length
                        ? j
                            ? c.enable(b)
                            : c.disable(b)
                        : T;
                }),
                (r.kill = function () {
                    return (
                        (c.isThrowing = !1),
                        c.tween && c.tween.kill(),
                        c.disable(),
                        de.set(g, { clearProps: "userSelect" }),
                        delete tn[t._gsDragID],
                        c
                    );
                }),
                (r.revert = function () {
                    this.kill(), this.styles && this.styles.revert();
                }),
                ~s.indexOf("scroll") &&
                    ((M = r.scrollProxy =
                        new ih(
                            t,
                            Wp(
                                {
                                    onKill: function () {
                                        c.isPressed && Ae(null);
                                    },
                                },
                                i
                            )
                        )),
                    (t.style.overflowY = f && !aa ? "auto" : "hidden"),
                    (t.style.overflowX = d && !aa ? "auto" : "hidden"),
                    (t = M.content)),
                a ? (h.rotation = 1) : (d && (h[l] = 1), f && (h[u] = 1)),
                (E.force3D = "force3D" in i ? i.force3D : !0),
                uu(bl(r)),
                r.enable(),
                r
            );
        }
        return (
            (e.register = function (i) {
                (de = i), Ao();
            }),
            (e.create = function (i, r) {
                return (
                    oa || Ao(!0),
                    ir(i).map(function (s) {
                        return new e(s, r);
                    })
                );
            }),
            (e.get = function (i) {
                return tn[(ir(i)[0] || {})._gsDragID];
            }),
            (e.timeSinceDrag = function () {
                return (Wi() - Sl) / 1e3;
            }),
            (e.hitTest = function (i, r, s) {
                if (i === r) return !1;
                var o = Yr(i),
                    a = Yr(r),
                    l = o.top,
                    u = o.left,
                    d = o.right,
                    f = o.bottom,
                    p = o.width,
                    c = o.height,
                    g = a.left > d || a.right < u || a.top > f || a.bottom < l,
                    h,
                    y,
                    m;
                return g || !s
                    ? !g
                    : ((m = (s + "").indexOf("%") !== -1),
                      (s = parseFloat(s) || 0),
                      (h = {
                          left: Math.max(u, a.left),
                          top: Math.max(l, a.top),
                      }),
                      (h.width = Math.min(d, a.right) - h.left),
                      (h.height = Math.min(f, a.bottom) - h.top),
                      h.width < 0 || h.height < 0
                          ? !1
                          : m
                          ? ((s *= 0.01),
                            (y = h.width * h.height),
                            y >= p * c * s || y >= a.width * a.height * s)
                          : h.width > s && h.height > s);
            }),
            e
        );
    })(rh);
Kp(gn.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: !1,
    isPressed: !1,
});
gn.zIndex = 1e3;
gn.version = "3.12.5";
fu() && de.registerPlugin(gn);
xe.registerPlugin(gn);
const nh = Se(".js-constructions", (n) => {
    const e = n.querySelector(".js-constructions-dragger"),
        t = n.querySelector(".swiper-scrollbar");
    new dt(e, {
        modules: [nu, Ga],
        freeMode: !0,
        slidesPerView: "auto",
        scrollbar: { el: t, draggable: !0, snapOnRelease: !1 },
    });
    const i = [...document.querySelectorAll(".js-constructions-hotspot")];
    e.addEventListener("click", () => {
        i.forEach((r) => r.classList.remove("is-active"));
    });
});
xe.registerPlugin(gn);
const sh = Se(".js-constructions-hotspot", (n, e, t) => {
        const i = n.querySelector(".js-constructions-hotspot-btn"),
            r = n.querySelector(".js-constructions-hotspot-read-more"),
            {
                dataset: { title: s, descr: o, image: a, imageIcon: l },
            } = n;
        i.addEventListener("click", (u) => {
            if ((u.stopPropagation(), n.classList.contains("is-active"))) {
                n.classList.remove("is-active");
                return;
            }
            t.forEach((d) => d.classList.remove("is-active")),
                n.classList.toggle("is-active");
        }),
            r.addEventListener("click", (u) => {
                u.stopPropagation(),
                    window.e.emit(De.OPEN_DETAIL_MODAL, {
                        title: s,
                        description: o,
                        image: a,
                        icon: l,
                    });
            });
    }),
    oh = Se(".js-details-tabs", (n) => {
        const e = [...n.querySelectorAll(".js-details-tabs-btn")],
            t = [...document.querySelectorAll(".js-details-tabs-section")];
        e.forEach((i) => {
            i.addEventListener("click", () => {
                if (i.classList.contains("is-active")) return;
                const {
                        dataset: { tab: r },
                    } = i,
                    s = t.find(({ dataset: { section: o } }) => o === r);
                t.forEach((o) => o.classList.remove("is-active")),
                    e.forEach((o) => o.classList.remove("is-active")),
                    i.classList.add("is-active"),
                    s.classList.add("is-active");
            });
        });
    }),
    ah = Se(".js-detail-modal", (n) => {
        const e = n.querySelector(".js-detail-modal-bg"),
            t = n.querySelector(".js-detail-modal-content"),
            i = n.querySelector(".js-detail-modal-close"),
            r = n.querySelector(".js-detail-modal-icon"),
            s = n.querySelector(".js-detail-modal-image"),
            o = n.querySelector(".js-detail-modal-name"),
            a = n.querySelector(".js-detail-modal-description"),
            l = xe.timeline({ paused: !0 });
        l
            .fromTo(
                n,
                { autoAlpha: 0, pointerEvents: "none" },
                { autoAlpha: 1, pointerEvents: "all", duration: 0.01 }
            )
            .fromTo(
                t,
                { autoAlpha: 0, scale: 0.9 },
                { autoAlpha: 1, scale: 1, duration: 0.25 }
            )
            .fromTo(e, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 }, "<"),
            window.e.on(
                De.OPEN_DETAIL_MODAL,
                ({ title: u, description: d, image: f, icon: p }) => {
                    s.classList.toggle("hide", !f),
                        r.classList.toggle("hide", !p),
                        o.classList.toggle("hide", !u),
                        a.classList.toggle("hide", !d),
                        (r.src = p),
                        (s.src = f),
                        (o.innerHTML = u),
                        (a.innerHTML = d),
                        l.play();
                }
            ),
            e.addEventListener("click", () => {
                l.reverse();
            }),
            i.addEventListener("click", () => {
                l.reverse();
            });
    }),
    lh = Se(".js-product-gallery", (n) => {
        let e = 0;
        window.e.on(De.POINTER_MOVE, ({ clientY: l }) => {
            e = l;
        });
        const t = n.querySelector(".swiper"),
            i = n.querySelector(".js-product-gallery-prev"),
            r = n.querySelector(".js-product-gallery-next"),
            s = [...n.querySelectorAll(".js-product-gallery-item")],
            o = n.querySelector(".js-product-gallery-close");
        window.e.on(De.OPEN_GALLERY_MODAL, () => {
            xe.to(n, { pointerEvents: "all", autoAlpha: 1 });
        }),
            o.addEventListener("click", () => {
                xe.set(document.body, { overflow: "auto" }),
                    xe.to(n, { pointerEvents: "none", autoAlpha: 0 });
            });
        const a = new dt(t, {
            modules: [na, Ap],
            effect: "fade",
            fadeEffect: { crossFade: !0 },
            loop: !0,
            navigation: { prevEl: i, nextEl: r },
        });
        window.e.on(De.MAIN_PRODUCT_SLIDER_INIT, (l) => {
            a.on("slideChange", () => {
                l.slideTo(a.realIndex);
            });
        }),
            window.e.on(De.MAIN_SLIDER_SWIPE, (l) => {
                a.slideTo(l);
            }),
            s.forEach((l) => {
                let u = 0;
                xe.ticker.add(() => {
                    u = xe.utils.interpolate(u, e, 0.1);
                    const d = xe.utils.mapRange(
                        0,
                        window.innerHeight,
                        0,
                        window.innerHeight - l.scrollHeight,
                        u
                    );
                    l.style.transform = `translateY(${Math.min(d, 0)}px)`;
                });
            });
    }),
    ch = Se(".js-find-my-size-btn", (n) => {
        n.addEventListener("click", () => {
            window.e.emit(De.OPEN_FIND_MY_SIZE);
        });
    }),
    uh = Se(".js-find-my-size", (n) => {
        const e = n.querySelector(".js-find-my-size-bg"),
            t = n.querySelector(".js-find-my-size-content"),
            i = n.querySelector(".js-find-my-size-close"),
            r = xe.timeline({ paused: !0 });
        r
            .fromTo(
                n,
                { autoAlpha: 0, pointerEvents: "none" },
                { autoAlpha: 1, pointerEvents: "all", duration: 0.01 }
            )
            .fromTo(
                t,
                { autoAlpha: 0, scale: 0.9 },
                { autoAlpha: 1, scale: 1, duration: 0.25 }
            )
            .fromTo(e, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 }, "<"),
            window.e.on(De.OPEN_FIND_MY_SIZE, () => {
                r.play();
            }),
            e.addEventListener("click", () => {
                r.reverse();
            }),
            i.addEventListener("click", () => {
                r.reverse();
            });
    }),
    dh = Se(".js-header-back-area", (n) => {
        ["mouseenter", "click"].forEach((e) => {
            n.addEventListener(e, () => {
                console.log("ee"), window.e.emit(De.CLOSE_HEADER_DROPDOWN, !0);
            });
        });
    }),
    fh = Se(".js-header-mobile-menu", (n) => {
        const e = document.querySelector(".js-header"),
            t = document.querySelector(
                '.js-header-toggle-dropdown[data-parent="search"]'
            ),
            i = document.querySelector(".js-header-menu-list"),
            r = [...i.querySelectorAll(".js-header-dropdown")],
            s = [...document.querySelectorAll(".js-dropdown-trigger")],
            o = [
                ...document.querySelectorAll(
                    ".js-header-dropdown,.js-header-toggle-dropdown"
                ),
            ],
            { classList: a } = n,
            l = () => {
                a.remove("is-active"),
                    e.classList.remove("has-dropdown"),
                    (t.style.display = "none"),
                    r.forEach((d) => {
                        d.style.display = "none";
                    }),
                    document.body.style.setProperty("--panel-height", "0px");
            };
        n.addEventListener("click", () => {
            if (a.contains("is-active")) {
                l();
                return;
            }
            s.forEach((d) => {
                d.classList.remove("is-active");
            }),
                o.forEach((d) => (d.style.display = "none")),
                a.toggle("is-active"),
                e.classList.add("has-dropdown"),
                (t.style.display = "block"),
                r.forEach((d) => {
                    d.style.display = "block";
                }),
                i.getBoundingClientRect(),
                document.body.style.setProperty("--panel-height", "2000px");
        }),
            window.e.on(De.CLOSE_HEADER_DROPDOWN, l),
            xe.matchMedia().add(
                "(min-width: 1200px)",
                () => (
                    l(),
                    () => {
                        l();
                    }
                )
            );
    }),
    ph = Se(".js-header-menu-parent", (n) => {
        const e = n.nextElementSibling,
            t = xe.matchMedia();
        t.add("(max-width: 1200px)", () => {
            xe.set(e, { height: 0, overflow: "hidden" });
        }),
            n.addEventListener("click", () => {
                t.add(
                    "(max-width: 1200px)",
                    () => (
                        n.classList.toggle("is-open"),
                        xe.to(e, {
                            height: n.classList.contains("is-open")
                                ? "auto"
                                : 0,
                        }),
                        () => {
                            xe.to(e, { clearProps: "height" });
                        }
                    )
                );
            });
    }),
    hh = Se(".js-step", (n) => {
        const e = [...n.querySelectorAll(".js-step-number")],
            t = e[0],
            i = e.at(-1),
            r = document.createElement("span");
        r.classList.add("c-step__line"), t.append(r);
        const s = () => {
            const { bottom: o } = t.getBoundingClientRect(),
                { top: a } = i.getBoundingClientRect();
            document.body.style.setProperty(
                "--step-distance",
                `${(a - o).toFixed(2)}px`
            );
        };
        s(), window.e.on(De.RESIZE, s);
    });
function gh(n, e) {
    for (var t = 0; t < e.length; t++) {
        var i = e[t];
        (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(n, i.key, i);
    }
}
function mh(n, e, t) {
    return e && gh(n.prototype, e), n;
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var ft,
    Rs,
    Kt,
    rr,
    nr,
    sn,
    mu,
    yr,
    Vn,
    _u,
    Vi,
    gi,
    vu,
    yu = function () {
        return (
            ft ||
            (typeof window < "u" &&
                (ft = window.gsap) &&
                ft.registerPlugin &&
                ft)
        );
    },
    wu = 1,
    Zr = [],
    le = [],
    Li = [],
    Gn = Date.now,
    da = function (e, t) {
        return t;
    },
    _h = function () {
        var e = Vn.core,
            t = e.bridge || {},
            i = e._scrollers,
            r = e._proxies;
        i.push.apply(i, le),
            r.push.apply(r, Li),
            (le = i),
            (Li = r),
            (da = function (o, a) {
                return t[o](a);
            });
    },
    ar = function (e, t) {
        return ~Li.indexOf(e) && Li[Li.indexOf(e) + 1][t];
    },
    Yn = function (e) {
        return !!~_u.indexOf(e);
    },
    St = function (e, t, i, r, s) {
        return e.addEventListener(t, i, { passive: r !== !1, capture: !!s });
    },
    Tt = function (e, t, i, r) {
        return e.removeEventListener(t, i, !!r);
    },
    gs = "scrollLeft",
    ms = "scrollTop",
    fa = function () {
        return (Vi && Vi.isPressed) || le.cache++;
    },
    Js = function (e, t) {
        var i = function r(s) {
            if (s || s === 0) {
                wu && (Kt.history.scrollRestoration = "manual");
                var o = Vi && Vi.isPressed;
                (s = r.v = Math.round(s) || (Vi && Vi.iOS ? 1 : 0)),
                    e(s),
                    (r.cacheID = le.cache),
                    o && da("ss", s);
            } else
                (t || le.cache !== r.cacheID || da("ref")) &&
                    ((r.cacheID = le.cache), (r.v = e()));
            return r.v + r.offset;
        };
        return (i.offset = 0), e && i;
    },
    kt = {
        s: gs,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: Js(function (n) {
            return arguments.length
                ? Kt.scrollTo(n, it.sc())
                : Kt.pageXOffset || rr[gs] || nr[gs] || sn[gs] || 0;
        }),
    },
    it = {
        s: ms,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: kt,
        sc: Js(function (n) {
            return arguments.length
                ? Kt.scrollTo(kt.sc(), n)
                : Kt.pageYOffset || rr[ms] || nr[ms] || sn[ms] || 0;
        }),
    },
    At = function (e, t) {
        return (
            ((t && t._ctx && t._ctx.selector) || ft.utils.toArray)(e)[0] ||
            (typeof e == "string" && ft.config().nullTargetWarn !== !1
                ? console.warn("Element not found:", e)
                : null)
        );
    },
    ur = function (e, t) {
        var i = t.s,
            r = t.sc;
        Yn(e) && (e = rr.scrollingElement || nr);
        var s = le.indexOf(e),
            o = r === it.sc ? 1 : 2;
        !~s && (s = le.push(e) - 1), le[s + o] || St(e, "scroll", fa);
        var a = le[s + o],
            l =
                a ||
                (le[s + o] =
                    Js(ar(e, i), !0) ||
                    (Yn(e)
                        ? r
                        : Js(function (u) {
                              return arguments.length ? (e[i] = u) : e[i];
                          })));
        return (
            (l.target = e),
            a || (l.smooth = ft.getProperty(e, "scrollBehavior") === "smooth"),
            l
        );
    },
    pa = function (e, t, i) {
        var r = e,
            s = e,
            o = Gn(),
            a = o,
            l = t || 50,
            u = Math.max(500, l * 3),
            d = function (g, h) {
                var y = Gn();
                h || y - o > l
                    ? ((s = r), (r = g), (a = o), (o = y))
                    : i
                    ? (r += g)
                    : (r = s + ((g - s) / (y - a)) * (o - a));
            },
            f = function () {
                (s = r = i ? 0 : r), (a = o = 0);
            },
            p = function (g) {
                var h = a,
                    y = s,
                    m = Gn();
                return (
                    (g || g === 0) && g !== r && d(g),
                    o === a || m - a > u
                        ? 0
                        : ((r + (i ? y : -y)) / ((i ? m : o) - h)) * 1e3
                );
            };
        return { update: d, reset: f, getVelocity: p };
    },
    xn = function (e, t) {
        return (
            t && !e._gsapAllow && e.preventDefault(),
            e.changedTouches ? e.changedTouches[0] : e
        );
    },
    Al = function (e) {
        var t = Math.max.apply(Math, e),
            i = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(i) ? t : i;
    },
    xu = function () {
        (Vn = ft.core.globals().ScrollTrigger), Vn && Vn.core && _h();
    },
    bu = function (e) {
        return (
            (ft = e || yu()),
            !Rs &&
                ft &&
                typeof document < "u" &&
                document.body &&
                ((Kt = window),
                (rr = document),
                (nr = rr.documentElement),
                (sn = rr.body),
                (_u = [Kt, rr, nr, sn]),
                ft.utils.clamp,
                (vu = ft.core.context || function () {}),
                (yr = "onpointerenter" in sn ? "pointer" : "mouse"),
                (mu = Xe.isTouch =
                    Kt.matchMedia &&
                    Kt.matchMedia("(hover: none), (pointer: coarse)").matches
                        ? 1
                        : "ontouchstart" in Kt ||
                          navigator.maxTouchPoints > 0 ||
                          navigator.msMaxTouchPoints > 0
                        ? 2
                        : 0),
                (gi = Xe.eventTypes =
                    (
                        "ontouchstart" in nr
                            ? "touchstart,touchmove,touchcancel,touchend"
                            : "onpointerdown" in nr
                            ? "pointerdown,pointermove,pointercancel,pointerup"
                            : "mousedown,mousemove,mouseup,mouseup"
                    ).split(",")),
                setTimeout(function () {
                    return (wu = 0);
                }, 500),
                xu(),
                (Rs = 1)),
            Rs
        );
    };
kt.op = it;
le.cache = 0;
var Xe = (function () {
    function n(t) {
        this.init(t);
    }
    var e = n.prototype;
    return (
        (e.init = function (i) {
            Rs ||
                bu(ft) ||
                console.warn("Please gsap.registerPlugin(Observer)"),
                Vn || xu();
            var r = i.tolerance,
                s = i.dragMinimum,
                o = i.type,
                a = i.target,
                l = i.lineHeight,
                u = i.debounce,
                d = i.preventDefault,
                f = i.onStop,
                p = i.onStopDelay,
                c = i.ignore,
                g = i.wheelSpeed,
                h = i.event,
                y = i.onDragStart,
                m = i.onDragEnd,
                _ = i.onDrag,
                v = i.onPress,
                w = i.onRelease,
                x = i.onRight,
                O = i.onLeft,
                k = i.onUp,
                E = i.onDown,
                I = i.onChangeX,
                P = i.onChangeY,
                R = i.onChange,
                T = i.onToggleX,
                M = i.onToggleY,
                z = i.onHover,
                $ = i.onHoverEnd,
                V = i.onMove,
                Y = i.ignoreCheck,
                U = i.isNormalizer,
                K = i.onGestureStart,
                C = i.onGestureEnd,
                Z = i.onWheel,
                re = i.onEnable,
                _e = i.onDisable,
                te = i.onClick,
                Ne = i.scrollSpeed,
                we = i.capture,
                Ee = i.allowClicks,
                he = i.lockAxis,
                qe = i.onLockAxis;
            (this.target = a = At(a) || nr),
                (this.vars = i),
                c && (c = ft.utils.toArray(c)),
                (r = r || 1e-9),
                (s = s || 0),
                (g = g || 1),
                (Ne = Ne || 1),
                (o = o || "wheel,touch,pointer"),
                (u = u !== !1),
                l || (l = parseFloat(Kt.getComputedStyle(sn).lineHeight) || 22);
            var at,
                ke,
                Ke,
                se,
                ne,
                ee,
                pt,
                D = this,
                Pe = 0,
                $t = 0,
                ei = i.passive || !d,
                Le = ur(a, kt),
                Fe = ur(a, it),
                xi = Le(),
                di = Fe(),
                Ge =
                    ~o.indexOf("touch") &&
                    !~o.indexOf("pointer") &&
                    gi[0] === "pointerdown",
                Ze = Yn(a),
                ve = a.ownerDocument || rr,
                bt = [0, 0, 0],
                Dt = [0, 0, 0],
                Vt = 0,
                fr = function () {
                    return (Vt = Gn());
                },
                Be = function (L, F) {
                    return (
                        ((D.event = L) && c && ~c.indexOf(L.target)) ||
                        (F && Ge && L.pointerType !== "touch") ||
                        (Y && Y(L, F))
                    );
                },
                qi = function () {
                    D._vx.reset(), D._vy.reset(), ke.pause(), f && f(D);
                },
                fi = function () {
                    var L = (D.deltaX = Al(bt)),
                        F = (D.deltaY = Al(Dt)),
                        A = Math.abs(L) >= r,
                        G = Math.abs(F) >= r;
                    R && (A || G) && R(D, L, F, bt, Dt),
                        A &&
                            (x && D.deltaX > 0 && x(D),
                            O && D.deltaX < 0 && O(D),
                            I && I(D),
                            T && D.deltaX < 0 != Pe < 0 && T(D),
                            (Pe = D.deltaX),
                            (bt[0] = bt[1] = bt[2] = 0)),
                        G &&
                            (E && D.deltaY > 0 && E(D),
                            k && D.deltaY < 0 && k(D),
                            P && P(D),
                            M && D.deltaY < 0 != $t < 0 && M(D),
                            ($t = D.deltaY),
                            (Dt[0] = Dt[1] = Dt[2] = 0)),
                        (se || Ke) &&
                            (V && V(D), Ke && (_(D), (Ke = !1)), (se = !1)),
                        ee && !(ee = !1) && qe && qe(D),
                        ne && (Z(D), (ne = !1)),
                        (at = 0);
                },
                pi = function (L, F, A) {
                    (bt[A] += L),
                        (Dt[A] += F),
                        D._vx.update(L),
                        D._vy.update(F),
                        u ? at || (at = requestAnimationFrame(fi)) : fi();
                },
                ti = function (L, F) {
                    he &&
                        !pt &&
                        ((D.axis = pt = Math.abs(L) > Math.abs(F) ? "x" : "y"),
                        (ee = !0)),
                        pt !== "y" && ((bt[2] += L), D._vx.update(L, !0)),
                        pt !== "x" && ((Dt[2] += F), D._vy.update(F, !0)),
                        u ? at || (at = requestAnimationFrame(fi)) : fi();
                },
                bi = function (L) {
                    if (!Be(L, 1)) {
                        L = xn(L, d);
                        var F = L.clientX,
                            A = L.clientY,
                            G = F - D.x,
                            N = A - D.y,
                            H = D.isDragging;
                        (D.x = F),
                            (D.y = A),
                            (H ||
                                Math.abs(D.startX - F) >= s ||
                                Math.abs(D.startY - A) >= s) &&
                                (_ && (Ke = !0),
                                H || (D.isDragging = !0),
                                ti(G, N),
                                H || (y && y(D)));
                    }
                },
                Gt = (D.onPress = function (S) {
                    Be(S, 1) ||
                        (S && S.button) ||
                        ((D.axis = pt = null),
                        ke.pause(),
                        (D.isPressed = !0),
                        (S = xn(S)),
                        (Pe = $t = 0),
                        (D.startX = D.x = S.clientX),
                        (D.startY = D.y = S.clientY),
                        D._vx.reset(),
                        D._vy.reset(),
                        St(U ? a : ve, gi[1], bi, ei, !0),
                        (D.deltaX = D.deltaY = 0),
                        v && v(D));
                }),
                Q = (D.onRelease = function (S) {
                    if (!Be(S, 1)) {
                        Tt(U ? a : ve, gi[1], bi, !0);
                        var L = !isNaN(D.y - D.startY),
                            F = D.isDragging,
                            A =
                                F &&
                                (Math.abs(D.x - D.startX) > 3 ||
                                    Math.abs(D.y - D.startY) > 3),
                            G = xn(S);
                        !A &&
                            L &&
                            (D._vx.reset(),
                            D._vy.reset(),
                            d &&
                                Ee &&
                                ft.delayedCall(0.08, function () {
                                    if (
                                        Gn() - Vt > 300 &&
                                        !S.defaultPrevented
                                    ) {
                                        if (S.target.click) S.target.click();
                                        else if (ve.createEvent) {
                                            var N =
                                                ve.createEvent("MouseEvents");
                                            N.initMouseEvent(
                                                "click",
                                                !0,
                                                !0,
                                                Kt,
                                                1,
                                                G.screenX,
                                                G.screenY,
                                                G.clientX,
                                                G.clientY,
                                                !1,
                                                !1,
                                                !1,
                                                !1,
                                                0,
                                                null
                                            ),
                                                S.target.dispatchEvent(N);
                                        }
                                    }
                                })),
                            (D.isDragging = D.isGesturing = D.isPressed = !1),
                            f && F && !U && ke.restart(!0),
                            m && F && m(D),
                            w && w(D, A);
                    }
                }),
                Yt = function (L) {
                    return (
                        L.touches &&
                        L.touches.length > 1 &&
                        (D.isGesturing = !0) &&
                        K(L, D.isDragging)
                    );
                },
                Ae = function () {
                    return (D.isGesturing = !1) || C(D);
                },
                ht = function (L) {
                    if (!Be(L)) {
                        var F = Le(),
                            A = Fe();
                        pi((F - xi) * Ne, (A - di) * Ne, 1),
                            (xi = F),
                            (di = A),
                            f && ke.restart(!0);
                    }
                },
                Lt = function (L) {
                    if (!Be(L)) {
                        (L = xn(L, d)), Z && (ne = !0);
                        var F =
                            (L.deltaMode === 1
                                ? l
                                : L.deltaMode === 2
                                ? Kt.innerHeight
                                : 1) * g;
                        pi(L.deltaX * F, L.deltaY * F, 0),
                            f && !U && ke.restart(!0);
                    }
                },
                Ti = function (L) {
                    if (!Be(L)) {
                        var F = L.clientX,
                            A = L.clientY,
                            G = F - D.x,
                            N = A - D.y;
                        (D.x = F),
                            (D.y = A),
                            (se = !0),
                            f && ke.restart(!0),
                            (G || N) && ti(G, N);
                    }
                },
                j = function (L) {
                    (D.event = L), z(D);
                },
                b = function (L) {
                    (D.event = L), $(D);
                },
                B = function (L) {
                    return Be(L) || (xn(L, d) && te(D));
                };
            (ke = D._dc = ft.delayedCall(p || 0.25, qi).pause()),
                (D.deltaX = D.deltaY = 0),
                (D._vx = pa(0, 50, !0)),
                (D._vy = pa(0, 50, !0)),
                (D.scrollX = Le),
                (D.scrollY = Fe),
                (D.isDragging = D.isGesturing = D.isPressed = !1),
                vu(this),
                (D.enable = function (S) {
                    return (
                        D.isEnabled ||
                            (St(Ze ? ve : a, "scroll", fa),
                            o.indexOf("scroll") >= 0 &&
                                St(Ze ? ve : a, "scroll", ht, ei, we),
                            o.indexOf("wheel") >= 0 &&
                                St(a, "wheel", Lt, ei, we),
                            ((o.indexOf("touch") >= 0 && mu) ||
                                o.indexOf("pointer") >= 0) &&
                                (St(a, gi[0], Gt, ei, we),
                                St(ve, gi[2], Q),
                                St(ve, gi[3], Q),
                                Ee && St(a, "click", fr, !0, !0),
                                te && St(a, "click", B),
                                K && St(ve, "gesturestart", Yt),
                                C && St(ve, "gestureend", Ae),
                                z && St(a, yr + "enter", j),
                                $ && St(a, yr + "leave", b),
                                V && St(a, yr + "move", Ti)),
                            (D.isEnabled = !0),
                            S && S.type && Gt(S),
                            re && re(D)),
                        D
                    );
                }),
                (D.disable = function () {
                    D.isEnabled &&
                        (Zr.filter(function (S) {
                            return S !== D && Yn(S.target);
                        }).length || Tt(Ze ? ve : a, "scroll", fa),
                        D.isPressed &&
                            (D._vx.reset(),
                            D._vy.reset(),
                            Tt(U ? a : ve, gi[1], bi, !0)),
                        Tt(Ze ? ve : a, "scroll", ht, we),
                        Tt(a, "wheel", Lt, we),
                        Tt(a, gi[0], Gt, we),
                        Tt(ve, gi[2], Q),
                        Tt(ve, gi[3], Q),
                        Tt(a, "click", fr, !0),
                        Tt(a, "click", B),
                        Tt(ve, "gesturestart", Yt),
                        Tt(ve, "gestureend", Ae),
                        Tt(a, yr + "enter", j),
                        Tt(a, yr + "leave", b),
                        Tt(a, yr + "move", Ti),
                        (D.isEnabled = D.isPressed = D.isDragging = !1),
                        _e && _e(D));
                }),
                (D.kill = D.revert =
                    function () {
                        D.disable();
                        var S = Zr.indexOf(D);
                        S >= 0 && Zr.splice(S, 1), Vi === D && (Vi = 0);
                    }),
                Zr.push(D),
                U && Yn(a) && (Vi = D),
                D.enable(h);
        }),
        mh(n, [
            {
                key: "velocityX",
                get: function () {
                    return this._vx.getVelocity();
                },
            },
            {
                key: "velocityY",
                get: function () {
                    return this._vy.getVelocity();
                },
            },
        ]),
        n
    );
})();
Xe.version = "3.12.5";
Xe.create = function (n) {
    return new Xe(n);
};
Xe.register = bu;
Xe.getAll = function () {
    return Zr.slice();
};
Xe.getById = function (n) {
    return Zr.filter(function (e) {
        return e.vars.id === n;
    })[0];
};
yu() && ft.registerPlugin(Xe);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var X,
    jr,
    fe,
    Ie,
    _i,
    Me,
    Tu,
    eo,
    os,
    Hn,
    On,
    _s,
    _t,
    lo,
    ha,
    Ct,
    Il,
    Rl,
    Wr,
    Su,
    Io,
    Eu,
    Et,
    ga,
    Cu,
    Pu,
    Ki,
    ma,
    qa,
    on,
    ja,
    to,
    _a,
    Ro,
    vs = 1,
    vt = Date.now,
    zo = vt(),
    ci = 0,
    Dn = 0,
    zl = function (e, t, i) {
        var r = Xt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
        return (i["_" + t + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
    },
    Nl = function (e, t) {
        return t && (!Xt(e) || e.substr(0, 6) !== "clamp(")
            ? "clamp(" + e + ")"
            : e;
    },
    vh = function n() {
        return Dn && requestAnimationFrame(n);
    },
    Fl = function () {
        return (lo = 1);
    },
    Bl = function () {
        return (lo = 0);
    },
    Pi = function (e) {
        return e;
    },
    Ln = function (e) {
        return Math.round(e * 1e5) / 1e5 || 0;
    },
    Mu = function () {
        return typeof window < "u";
    },
    ku = function () {
        return X || (Mu() && (X = window.gsap) && X.registerPlugin && X);
    },
    Nr = function (e) {
        return !!~Tu.indexOf(e);
    },
    Ou = function (e) {
        return (
            (e === "Height" ? ja : fe["inner" + e]) ||
            _i["client" + e] ||
            Me["client" + e]
        );
    },
    Du = function (e) {
        return (
            ar(e, "getBoundingClientRect") ||
            (Nr(e)
                ? function () {
                      return ($s.width = fe.innerWidth), ($s.height = ja), $s;
                  }
                : function () {
                      return Fi(e);
                  })
        );
    },
    yh = function (e, t, i) {
        var r = i.d,
            s = i.d2,
            o = i.a;
        return (o = ar(e, "getBoundingClientRect"))
            ? function () {
                  return o()[r];
              }
            : function () {
                  return (t ? Ou(s) : e["client" + s]) || 0;
              };
    },
    wh = function (e, t) {
        return !t || ~Li.indexOf(e)
            ? Du(e)
            : function () {
                  return $s;
              };
    },
    Oi = function (e, t) {
        var i = t.s,
            r = t.d2,
            s = t.d,
            o = t.a;
        return Math.max(
            0,
            (i = "scroll" + r) && (o = ar(e, i))
                ? o() - Du(e)()[s]
                : Nr(e)
                ? (_i[i] || Me[i]) - Ou(r)
                : e[i] - e["offset" + r]
        );
    },
    ys = function (e, t) {
        for (var i = 0; i < Wr.length; i += 3)
            (!t || ~t.indexOf(Wr[i + 1])) && e(Wr[i], Wr[i + 1], Wr[i + 2]);
    },
    Xt = function (e) {
        return typeof e == "string";
    },
    Ot = function (e) {
        return typeof e == "function";
    },
    An = function (e) {
        return typeof e == "number";
    },
    wr = function (e) {
        return typeof e == "object";
    },
    bn = function (e, t, i) {
        return e && e.progress(t ? 0 : 1) && i && e.pause();
    },
    No = function (e, t) {
        if (e.enabled) {
            var i = e._ctx
                ? e._ctx.add(function () {
                      return t(e);
                  })
                : t(e);
            i && i.totalTime && (e.callbackAnimation = i);
        }
    },
    Hr = Math.abs,
    Lu = "left",
    Au = "top",
    Wa = "right",
    Ua = "bottom",
    Dr = "width",
    Lr = "height",
    Xn = "Right",
    qn = "Left",
    jn = "Top",
    Wn = "Bottom",
    We = "padding",
    si = "margin",
    hn = "Width",
    Ka = "Height",
    Je = "px",
    oi = function (e) {
        return fe.getComputedStyle(e);
    },
    xh = function (e) {
        var t = oi(e).position;
        e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
    },
    $l = function (e, t) {
        for (var i in t) i in e || (e[i] = t[i]);
        return e;
    },
    Fi = function (e, t) {
        var i =
                t &&
                oi(e)[ha] !== "matrix(1, 0, 0, 1, 0, 0)" &&
                X.to(e, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0,
                }).progress(1),
            r = e.getBoundingClientRect();
        return i && i.progress(0).kill(), r;
    },
    io = function (e, t) {
        var i = t.d2;
        return e["offset" + i] || e["client" + i] || 0;
    },
    Iu = function (e) {
        var t = [],
            i = e.labels,
            r = e.duration(),
            s;
        for (s in i) t.push(i[s] / r);
        return t;
    },
    bh = function (e) {
        return function (t) {
            return X.utils.snap(Iu(e), t);
        };
    },
    Za = function (e) {
        var t = X.utils.snap(e),
            i =
                Array.isArray(e) &&
                e.slice(0).sort(function (r, s) {
                    return r - s;
                });
        return i
            ? function (r, s, o) {
                  o === void 0 && (o = 0.001);
                  var a;
                  if (!s) return t(r);
                  if (s > 0) {
                      for (r -= o, a = 0; a < i.length; a++)
                          if (i[a] >= r) return i[a];
                      return i[a - 1];
                  } else
                      for (a = i.length, r += o; a--; )
                          if (i[a] <= r) return i[a];
                  return i[0];
              }
            : function (r, s, o) {
                  o === void 0 && (o = 0.001);
                  var a = t(r);
                  return !s || Math.abs(a - r) < o || a - r < 0 == s < 0
                      ? a
                      : t(s < 0 ? r - e : r + e);
              };
    },
    Th = function (e) {
        return function (t, i) {
            return Za(Iu(e))(t, i.direction);
        };
    },
    ws = function (e, t, i, r) {
        return i.split(",").forEach(function (s) {
            return e(t, s, r);
        });
    },
    nt = function (e, t, i, r, s) {
        return e.addEventListener(t, i, { passive: !r, capture: !!s });
    },
    rt = function (e, t, i, r) {
        return e.removeEventListener(t, i, !!r);
    },
    xs = function (e, t, i) {
        (i = i && i.wheelHandler),
            i && (e(t, "wheel", i), e(t, "touchmove", i));
    },
    Vl = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal",
    },
    bs = { toggleActions: "play", anticipatePin: 0 },
    ro = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    zs = function (e, t) {
        if (Xt(e)) {
            var i = e.indexOf("="),
                r = ~i
                    ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1))
                    : 0;
            ~i &&
                (e.indexOf("%") > i && (r *= t / 100),
                (e = e.substr(0, i - 1))),
                (e =
                    r +
                    (e in ro
                        ? ro[e] * t
                        : ~e.indexOf("%")
                        ? (parseFloat(e) * t) / 100
                        : parseFloat(e) || 0));
        }
        return e;
    },
    Ts = function (e, t, i, r, s, o, a, l) {
        var u = s.startColor,
            d = s.endColor,
            f = s.fontSize,
            p = s.indent,
            c = s.fontWeight,
            g = Ie.createElement("div"),
            h = Nr(i) || ar(i, "pinType") === "fixed",
            y = e.indexOf("scroller") !== -1,
            m = h ? Me : i,
            _ = e.indexOf("start") !== -1,
            v = _ ? u : d,
            w =
                "border-color:" +
                v +
                ";font-size:" +
                f +
                ";color:" +
                v +
                ";font-weight:" +
                c +
                ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return (
            (w += "position:" + ((y || l) && h ? "fixed;" : "absolute;")),
            (y || l || !h) &&
                (w += (r === it ? Wa : Ua) + ":" + (o + parseFloat(p)) + "px;"),
            a &&
                (w +=
                    "box-sizing:border-box;text-align:left;width:" +
                    a.offsetWidth +
                    "px;"),
            (g._isStart = _),
            g.setAttribute(
                "class",
                "gsap-marker-" + e + (t ? " marker-" + t : "")
            ),
            (g.style.cssText = w),
            (g.innerText = t || t === 0 ? e + "-" + t : e),
            m.children[0] ? m.insertBefore(g, m.children[0]) : m.appendChild(g),
            (g._offset = g["offset" + r.op.d2]),
            Ns(g, 0, r, _),
            g
        );
    },
    Ns = function (e, t, i, r) {
        var s = { display: "block" },
            o = i[r ? "os2" : "p2"],
            a = i[r ? "p2" : "os2"];
        (e._isFlipped = r),
            (s[i.a + "Percent"] = r ? -100 : 0),
            (s[i.a] = r ? "1px" : 0),
            (s["border" + o + hn] = 1),
            (s["border" + a + hn] = 0),
            (s[i.p] = t + "px"),
            X.set(e, s);
    },
    oe = [],
    va = {},
    as,
    Gl = function () {
        return vt() - ci > 34 && (as || (as = requestAnimationFrame(Gi)));
    },
    Xr = function () {
        (!Et || !Et.isPressed || Et.startX > Me.clientWidth) &&
            (le.cache++,
            Et ? as || (as = requestAnimationFrame(Gi)) : Gi(),
            ci || Br("scrollStart"),
            (ci = vt()));
    },
    Fo = function () {
        (Pu = fe.innerWidth), (Cu = fe.innerHeight);
    },
    In = function () {
        le.cache++,
            !_t &&
                !Eu &&
                !Ie.fullscreenElement &&
                !Ie.webkitFullscreenElement &&
                (!ga ||
                    Pu !== fe.innerWidth ||
                    Math.abs(fe.innerHeight - Cu) > fe.innerHeight * 0.25) &&
                eo.restart(!0);
    },
    Fr = {},
    Sh = [],
    Ru = function n() {
        return rt(ce, "scrollEnd", n) || Tr(!0);
    },
    Br = function (e) {
        return (
            (Fr[e] &&
                Fr[e].map(function (t) {
                    return t();
                })) ||
            Sh
        );
    },
    Ht = [],
    zu = function (e) {
        for (var t = 0; t < Ht.length; t += 5)
            (!e || (Ht[t + 4] && Ht[t + 4].query === e)) &&
                ((Ht[t].style.cssText = Ht[t + 1]),
                Ht[t].getBBox &&
                    Ht[t].setAttribute("transform", Ht[t + 2] || ""),
                (Ht[t + 3].uncache = 1));
    },
    Qa = function (e, t) {
        var i;
        for (Ct = 0; Ct < oe.length; Ct++)
            (i = oe[Ct]),
                i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
        (to = !0), t && zu(t), t || Br("revert");
    },
    Nu = function (e, t) {
        le.cache++,
            (t || !Pt) &&
                le.forEach(function (i) {
                    return Ot(i) && i.cacheID++ && (i.rec = 0);
                }),
            Xt(e) && (fe.history.scrollRestoration = qa = e);
    },
    Pt,
    Ar = 0,
    Yl,
    Eh = function () {
        if (Yl !== Ar) {
            var e = (Yl = Ar);
            requestAnimationFrame(function () {
                return e === Ar && Tr(!0);
            });
        }
    },
    Fu = function () {
        Me.appendChild(on),
            (ja = (!Et && on.offsetHeight) || fe.innerHeight),
            Me.removeChild(on);
    },
    Hl = function (e) {
        return os(
            ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
        ).forEach(function (t) {
            return (t.style.display = e ? "none" : "block");
        });
    },
    Tr = function (e, t) {
        if (ci && !e && !to) {
            nt(ce, "scrollEnd", Ru);
            return;
        }
        Fu(),
            (Pt = ce.isRefreshing = !0),
            le.forEach(function (r) {
                return Ot(r) && ++r.cacheID && (r.rec = r());
            });
        var i = Br("refreshInit");
        Su && ce.sort(),
            t || Qa(),
            le.forEach(function (r) {
                Ot(r) &&
                    (r.smooth && (r.target.style.scrollBehavior = "auto"),
                    r(0));
            }),
            oe.slice(0).forEach(function (r) {
                return r.refresh();
            }),
            (to = !1),
            oe.forEach(function (r) {
                if (r._subPinOffset && r.pin) {
                    var s = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
                        o = r.pin[s];
                    r.revert(!0, 1),
                        r.adjustPinSpacing(r.pin[s] - o),
                        r.refresh();
                }
            }),
            (_a = 1),
            Hl(!0),
            oe.forEach(function (r) {
                var s = Oi(r.scroller, r._dir),
                    o = r.vars.end === "max" || (r._endClamp && r.end > s),
                    a = r._startClamp && r.start >= s;
                (o || a) &&
                    r.setPositions(
                        a ? s - 1 : r.start,
                        o ? Math.max(a ? s : r.start + 1, s) : r.end,
                        !0
                    );
            }),
            Hl(!1),
            (_a = 0),
            i.forEach(function (r) {
                return r && r.render && r.render(-1);
            }),
            le.forEach(function (r) {
                Ot(r) &&
                    (r.smooth &&
                        requestAnimationFrame(function () {
                            return (r.target.style.scrollBehavior = "smooth");
                        }),
                    r.rec && r(r.rec));
            }),
            Nu(qa, 1),
            eo.pause(),
            Ar++,
            (Pt = 2),
            Gi(2),
            oe.forEach(function (r) {
                return Ot(r.vars.onRefresh) && r.vars.onRefresh(r);
            }),
            (Pt = ce.isRefreshing = !1),
            Br("refresh");
    },
    ya = 0,
    Fs = 1,
    Un,
    Gi = function (e) {
        if (e === 2 || (!Pt && !to)) {
            (ce.isUpdating = !0), Un && Un.update(0);
            var t = oe.length,
                i = vt(),
                r = i - zo >= 50,
                s = t && oe[0].scroll();
            if (
                ((Fs = ya > s ? -1 : 1),
                Pt || (ya = s),
                r &&
                    (ci && !lo && i - ci > 200 && ((ci = 0), Br("scrollEnd")),
                    (On = zo),
                    (zo = i)),
                Fs < 0)
            ) {
                for (Ct = t; Ct-- > 0; ) oe[Ct] && oe[Ct].update(0, r);
                Fs = 1;
            } else for (Ct = 0; Ct < t; Ct++) oe[Ct] && oe[Ct].update(0, r);
            ce.isUpdating = !1;
        }
        as = 0;
    },
    wa = [
        Lu,
        Au,
        Ua,
        Wa,
        si + Wn,
        si + Xn,
        si + jn,
        si + qn,
        "display",
        "flexShrink",
        "float",
        "zIndex",
        "gridColumnStart",
        "gridColumnEnd",
        "gridRowStart",
        "gridRowEnd",
        "gridArea",
        "justifySelf",
        "alignSelf",
        "placeSelf",
        "order",
    ],
    Bs = wa.concat([
        Dr,
        Lr,
        "boxSizing",
        "max" + hn,
        "max" + Ka,
        "position",
        si,
        We,
        We + jn,
        We + Xn,
        We + Wn,
        We + qn,
    ]),
    Ch = function (e, t, i) {
        an(i);
        var r = e._gsap;
        if (r.spacerIsNative) an(r.spacerState);
        else if (e._gsap.swappedIn) {
            var s = t.parentNode;
            s && (s.insertBefore(e, t), s.removeChild(t));
        }
        e._gsap.swappedIn = !1;
    },
    Bo = function (e, t, i, r) {
        if (!e._gsap.swappedIn) {
            for (var s = wa.length, o = t.style, a = e.style, l; s--; )
                (l = wa[s]), (o[l] = i[l]);
            (o.position = i.position === "absolute" ? "absolute" : "relative"),
                i.display === "inline" && (o.display = "inline-block"),
                (a[Ua] = a[Wa] = "auto"),
                (o.flexBasis = i.flexBasis || "auto"),
                (o.overflow = "visible"),
                (o.boxSizing = "border-box"),
                (o[Dr] = io(e, kt) + Je),
                (o[Lr] = io(e, it) + Je),
                (o[We] = a[si] = a[Au] = a[Lu] = "0"),
                an(r),
                (a[Dr] = a["max" + hn] = i[Dr]),
                (a[Lr] = a["max" + Ka] = i[Lr]),
                (a[We] = i[We]),
                e.parentNode !== t &&
                    (e.parentNode.insertBefore(t, e), t.appendChild(e)),
                (e._gsap.swappedIn = !0);
        }
    },
    Ph = /([A-Z])/g,
    an = function (e) {
        if (e) {
            var t = e.t.style,
                i = e.length,
                r = 0,
                s,
                o;
            for ((e.t._gsap || X.core.getCache(e.t)).uncache = 1; r < i; r += 2)
                (o = e[r + 1]),
                    (s = e[r]),
                    o
                        ? (t[s] = o)
                        : t[s] &&
                          t.removeProperty(s.replace(Ph, "-$1").toLowerCase());
        }
    },
    Ss = function (e) {
        for (var t = Bs.length, i = e.style, r = [], s = 0; s < t; s++)
            r.push(Bs[s], i[Bs[s]]);
        return (r.t = e), r;
    },
    Mh = function (e, t, i) {
        for (var r = [], s = e.length, o = i ? 8 : 0, a; o < s; o += 2)
            (a = e[o]), r.push(a, a in t ? t[a] : e[o + 1]);
        return (r.t = e.t), r;
    },
    $s = { left: 0, top: 0 },
    Xl = function (e, t, i, r, s, o, a, l, u, d, f, p, c, g) {
        Ot(e) && (e = e(l)),
            Xt(e) &&
                e.substr(0, 3) === "max" &&
                (e = p + (e.charAt(4) === "=" ? zs("0" + e.substr(3), i) : 0));
        var h = c ? c.time() : 0,
            y,
            m,
            _;
        if ((c && c.seek(0), isNaN(e) || (e = +e), An(e)))
            c &&
                (e = X.utils.mapRange(
                    c.scrollTrigger.start,
                    c.scrollTrigger.end,
                    0,
                    p,
                    e
                )),
                a && Ns(a, i, r, !0);
        else {
            Ot(t) && (t = t(l));
            var v = (e || "0").split(" "),
                w,
                x,
                O,
                k;
            (_ = At(t, l) || Me),
                (w = Fi(_) || {}),
                (!w || (!w.left && !w.top)) &&
                    oi(_).display === "none" &&
                    ((k = _.style.display),
                    (_.style.display = "block"),
                    (w = Fi(_)),
                    k
                        ? (_.style.display = k)
                        : _.style.removeProperty("display")),
                (x = zs(v[0], w[r.d])),
                (O = zs(v[1] || "0", i)),
                (e = w[r.p] - u[r.p] - d + x + s - O),
                a && Ns(a, O, r, i - O < 20 || (a._isStart && O > 20)),
                (i -= i - O);
        }
        if ((g && ((l[g] = e || -0.001), e < 0 && (e = 0)), o)) {
            var E = e + i,
                I = o._isStart;
            (y = "scroll" + r.d2),
                Ns(
                    o,
                    E,
                    r,
                    (I && E > 20) ||
                        (!I &&
                            (f ? Math.max(Me[y], _i[y]) : o.parentNode[y]) <=
                                E + 1)
                ),
                f &&
                    ((u = Fi(a)),
                    f &&
                        (o.style[r.op.p] =
                            u[r.op.p] - r.op.m - o._offset + Je));
        }
        return (
            c &&
                _ &&
                ((y = Fi(_)),
                c.seek(p),
                (m = Fi(_)),
                (c._caScrollDist = y[r.p] - m[r.p]),
                (e = (e / c._caScrollDist) * p)),
            c && c.seek(h),
            c ? e : Math.round(e)
        );
    },
    kh = /(webkit|moz|length|cssText|inset)/i,
    ql = function (e, t, i, r) {
        if (e.parentNode !== t) {
            var s = e.style,
                o,
                a;
            if (t === Me) {
                (e._stOrig = s.cssText), (a = oi(e));
                for (o in a)
                    !+o &&
                        !kh.test(o) &&
                        a[o] &&
                        typeof s[o] == "string" &&
                        o !== "0" &&
                        (s[o] = a[o]);
                (s.top = i), (s.left = r);
            } else s.cssText = e._stOrig;
            (X.core.getCache(e).uncache = 1), t.appendChild(e);
        }
    },
    Bu = function (e, t, i) {
        var r = t,
            s = r;
        return function (o) {
            var a = Math.round(e());
            return (
                a !== r &&
                    a !== s &&
                    Math.abs(a - r) > 3 &&
                    Math.abs(a - s) > 3 &&
                    ((o = a), i && i()),
                (s = r),
                (r = o),
                o
            );
        };
    },
    Es = function (e, t, i) {
        var r = {};
        (r[t.p] = "+=" + i), X.set(e, r);
    },
    jl = function (e, t) {
        var i = ur(e, t),
            r = "_scroll" + t.p2,
            s = function o(a, l, u, d, f) {
                var p = o.tween,
                    c = l.onComplete,
                    g = {};
                u = u || i();
                var h = Bu(i, u, function () {
                    p.kill(), (o.tween = 0);
                });
                return (
                    (f = (d && f) || 0),
                    (d = d || a - u),
                    p && p.kill(),
                    (l[r] = a),
                    (l.inherit = !1),
                    (l.modifiers = g),
                    (g[r] = function () {
                        return h(u + d * p.ratio + f * p.ratio * p.ratio);
                    }),
                    (l.onUpdate = function () {
                        le.cache++, o.tween && Gi();
                    }),
                    (l.onComplete = function () {
                        (o.tween = 0), c && c.call(p);
                    }),
                    (p = o.tween = X.to(e, l)),
                    p
                );
            };
        return (
            (e[r] = i),
            (i.wheelHandler = function () {
                return s.tween && s.tween.kill() && (s.tween = 0);
            }),
            nt(e, "wheel", i.wheelHandler),
            ce.isTouch && nt(e, "touchmove", i.wheelHandler),
            s
        );
    },
    ce = (function () {
        function n(t, i) {
            jr ||
                n.register(X) ||
                console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                ma(this),
                this.init(t, i);
        }
        var e = n.prototype;
        return (
            (e.init = function (i, r) {
                if (
                    ((this.progress = this.start = 0),
                    this.vars && this.kill(!0, !0),
                    !Dn)
                ) {
                    this.update = this.refresh = this.kill = Pi;
                    return;
                }
                i = $l(Xt(i) || An(i) || i.nodeType ? { trigger: i } : i, bs);
                var s = i,
                    o = s.onUpdate,
                    a = s.toggleClass,
                    l = s.id,
                    u = s.onToggle,
                    d = s.onRefresh,
                    f = s.scrub,
                    p = s.trigger,
                    c = s.pin,
                    g = s.pinSpacing,
                    h = s.invalidateOnRefresh,
                    y = s.anticipatePin,
                    m = s.onScrubComplete,
                    _ = s.onSnapComplete,
                    v = s.once,
                    w = s.snap,
                    x = s.pinReparent,
                    O = s.pinSpacer,
                    k = s.containerAnimation,
                    E = s.fastScrollEnd,
                    I = s.preventOverlaps,
                    P =
                        i.horizontal ||
                        (i.containerAnimation && i.horizontal !== !1)
                            ? kt
                            : it,
                    R = !f && f !== 0,
                    T = At(i.scroller || fe),
                    M = X.core.getCache(T),
                    z = Nr(T),
                    $ =
                        ("pinType" in i
                            ? i.pinType
                            : ar(T, "pinType") || (z && "fixed")) === "fixed",
                    V = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
                    Y = R && i.toggleActions.split(" "),
                    U = "markers" in i ? i.markers : bs.markers,
                    K = z ? 0 : parseFloat(oi(T)["border" + P.p2 + hn]) || 0,
                    C = this,
                    Z =
                        i.onRefreshInit &&
                        function () {
                            return i.onRefreshInit(C);
                        },
                    re = yh(T, z, P),
                    _e = wh(T, z),
                    te = 0,
                    Ne = 0,
                    we = 0,
                    Ee = ur(T, P),
                    he,
                    qe,
                    at,
                    ke,
                    Ke,
                    se,
                    ne,
                    ee,
                    pt,
                    D,
                    Pe,
                    $t,
                    ei,
                    Le,
                    Fe,
                    xi,
                    di,
                    Ge,
                    Ze,
                    ve,
                    bt,
                    Dt,
                    Vt,
                    fr,
                    Be,
                    qi,
                    fi,
                    pi,
                    ti,
                    bi,
                    Gt,
                    Q,
                    Yt,
                    Ae,
                    ht,
                    Lt,
                    Ti,
                    j,
                    b;
                if (
                    ((C._startClamp = C._endClamp = !1),
                    (C._dir = P),
                    (y *= 45),
                    (C.scroller = T),
                    (C.scroll = k ? k.time.bind(k) : Ee),
                    (ke = Ee()),
                    (C.vars = i),
                    (r = r || i.animation),
                    "refreshPriority" in i &&
                        ((Su = 1), i.refreshPriority === -9999 && (Un = C)),
                    (M.tweenScroll = M.tweenScroll || {
                        top: jl(T, it),
                        left: jl(T, kt),
                    }),
                    (C.tweenTo = he = M.tweenScroll[P.p]),
                    (C.scrubDuration = function (A) {
                        (Yt = An(A) && A),
                            Yt
                                ? Q
                                    ? Q.duration(A)
                                    : (Q = X.to(r, {
                                          ease: "expo",
                                          totalProgress: "+=0",
                                          inherit: !1,
                                          duration: Yt,
                                          paused: !0,
                                          onComplete: function () {
                                              return m && m(C);
                                          },
                                      }))
                                : (Q && Q.progress(1).kill(), (Q = 0));
                    }),
                    r &&
                        ((r.vars.lazy = !1),
                        (r._initted && !C.isReverted) ||
                            (r.vars.immediateRender !== !1 &&
                                i.immediateRender !== !1 &&
                                r.duration() &&
                                r.render(0, !0, !0)),
                        (C.animation = r.pause()),
                        (r.scrollTrigger = C),
                        C.scrubDuration(f),
                        (bi = 0),
                        l || (l = r.vars.id)),
                    w &&
                        ((!wr(w) || w.push) && (w = { snapTo: w }),
                        "scrollBehavior" in Me.style &&
                            X.set(z ? [Me, _i] : T, { scrollBehavior: "auto" }),
                        le.forEach(function (A) {
                            return (
                                Ot(A) &&
                                A.target ===
                                    (z ? Ie.scrollingElement || _i : T) &&
                                (A.smooth = !1)
                            );
                        }),
                        (at = Ot(w.snapTo)
                            ? w.snapTo
                            : w.snapTo === "labels"
                            ? bh(r)
                            : w.snapTo === "labelsDirectional"
                            ? Th(r)
                            : w.directional !== !1
                            ? function (A, G) {
                                  return Za(w.snapTo)(
                                      A,
                                      vt() - Ne < 500 ? 0 : G.direction
                                  );
                              }
                            : X.utils.snap(w.snapTo)),
                        (Ae = w.duration || { min: 0.1, max: 2 }),
                        (Ae = wr(Ae) ? Hn(Ae.min, Ae.max) : Hn(Ae, Ae)),
                        (ht = X.delayedCall(
                            w.delay || Yt / 2 || 0.1,
                            function () {
                                var A = Ee(),
                                    G = vt() - Ne < 500,
                                    N = he.tween;
                                if (
                                    (G || Math.abs(C.getVelocity()) < 10) &&
                                    !N &&
                                    !lo &&
                                    te !== A
                                ) {
                                    var H = (A - se) / Le,
                                        W = r && !R ? r.totalProgress() : H,
                                        q = G
                                            ? 0
                                            : ((W - Gt) / (vt() - On)) * 1e3 ||
                                              0,
                                        ie = X.utils.clamp(
                                            -H,
                                            1 - H,
                                            (Hr(q / 2) * q) / 0.185
                                        ),
                                        ge = H + (w.inertia === !1 ? 0 : ie),
                                        me,
                                        ae,
                                        ue = w,
                                        ye = ue.onStart,
                                        J = ue.onInterrupt,
                                        lt = ue.onComplete;
                                    if (
                                        ((me = at(ge, C)),
                                        An(me) || (me = ge),
                                        (ae = Math.round(se + me * Le)),
                                        A <= ne && A >= se && ae !== A)
                                    ) {
                                        if (
                                            N &&
                                            !N._initted &&
                                            N.data <= Hr(ae - A)
                                        )
                                            return;
                                        w.inertia === !1 && (ie = me - H),
                                            he(
                                                ae,
                                                {
                                                    duration: Ae(
                                                        Hr(
                                                            (Math.max(
                                                                Hr(ge - W),
                                                                Hr(me - W)
                                                            ) *
                                                                0.185) /
                                                                q /
                                                                0.05 || 0
                                                        )
                                                    ),
                                                    ease: w.ease || "power3",
                                                    data: Hr(ae - A),
                                                    onInterrupt: function () {
                                                        return (
                                                            ht.restart(!0) &&
                                                            J &&
                                                            J(C)
                                                        );
                                                    },
                                                    onComplete: function () {
                                                        C.update(),
                                                            (te = Ee()),
                                                            r &&
                                                                (Q
                                                                    ? Q.resetTo(
                                                                          "totalProgress",
                                                                          me,
                                                                          r._tTime /
                                                                              r._tDur
                                                                      )
                                                                    : r.progress(
                                                                          me
                                                                      )),
                                                            (bi = Gt =
                                                                r && !R
                                                                    ? r.totalProgress()
                                                                    : C.progress),
                                                            _ && _(C),
                                                            lt && lt(C);
                                                    },
                                                },
                                                A,
                                                ie * Le,
                                                ae - A - ie * Le
                                            ),
                                            ye && ye(C, he.tween);
                                    }
                                } else C.isActive && te !== A && ht.restart(!0);
                            }
                        ).pause())),
                    l && (va[l] = C),
                    (p = C.trigger = At(p || (c !== !0 && c))),
                    (b = p && p._gsap && p._gsap.stRevert),
                    b && (b = b(C)),
                    (c = c === !0 ? p : At(c)),
                    Xt(a) && (a = { targets: p, className: a }),
                    c &&
                        (g === !1 ||
                            g === si ||
                            (g =
                                !g &&
                                c.parentNode &&
                                c.parentNode.style &&
                                oi(c.parentNode).display === "flex"
                                    ? !1
                                    : We),
                        (C.pin = c),
                        (qe = X.core.getCache(c)),
                        qe.spacer
                            ? (Fe = qe.pinState)
                            : (O &&
                                  ((O = At(O)),
                                  O &&
                                      !O.nodeType &&
                                      (O = O.current || O.nativeElement),
                                  (qe.spacerIsNative = !!O),
                                  O && (qe.spacerState = Ss(O))),
                              (qe.spacer = Ge = O || Ie.createElement("div")),
                              Ge.classList.add("pin-spacer"),
                              l && Ge.classList.add("pin-spacer-" + l),
                              (qe.pinState = Fe = Ss(c))),
                        i.force3D !== !1 && X.set(c, { force3D: !0 }),
                        (C.spacer = Ge = qe.spacer),
                        (ti = oi(c)),
                        (fr = ti[g + P.os2]),
                        (ve = X.getProperty(c)),
                        (bt = X.quickSetter(c, P.a, Je)),
                        Bo(c, Ge, ti),
                        (di = Ss(c))),
                    U)
                ) {
                    ($t = wr(U) ? $l(U, Vl) : Vl),
                        (D = Ts("scroller-start", l, T, P, $t, 0)),
                        (Pe = Ts("scroller-end", l, T, P, $t, 0, D)),
                        (Ze = D["offset" + P.op.d2]);
                    var B = At(ar(T, "content") || T);
                    (ee = this.markerStart =
                        Ts("start", l, B, P, $t, Ze, 0, k)),
                        (pt = this.markerEnd =
                            Ts("end", l, B, P, $t, Ze, 0, k)),
                        k && (j = X.quickSetter([ee, pt], P.a, Je)),
                        !$ &&
                            !(Li.length && ar(T, "fixedMarkers") === !0) &&
                            (xh(z ? Me : T),
                            X.set([D, Pe], { force3D: !0 }),
                            (qi = X.quickSetter(D, P.a, Je)),
                            (pi = X.quickSetter(Pe, P.a, Je)));
                }
                if (k) {
                    var S = k.vars.onUpdate,
                        L = k.vars.onUpdateParams;
                    k.eventCallback("onUpdate", function () {
                        C.update(0, 0, 1), S && S.apply(k, L || []);
                    });
                }
                if (
                    ((C.previous = function () {
                        return oe[oe.indexOf(C) - 1];
                    }),
                    (C.next = function () {
                        return oe[oe.indexOf(C) + 1];
                    }),
                    (C.revert = function (A, G) {
                        if (!G) return C.kill(!0);
                        var N = A !== !1 || !C.enabled,
                            H = _t;
                        N !== C.isReverted &&
                            (N &&
                                ((Lt = Math.max(Ee(), C.scroll.rec || 0)),
                                (we = C.progress),
                                (Ti = r && r.progress())),
                            ee &&
                                [ee, pt, D, Pe].forEach(function (W) {
                                    return (W.style.display = N
                                        ? "none"
                                        : "block");
                                }),
                            N && ((_t = C), C.update(N)),
                            c &&
                                (!x || !C.isActive) &&
                                (N ? Ch(c, Ge, Fe) : Bo(c, Ge, oi(c), Be)),
                            N || C.update(N),
                            (_t = H),
                            (C.isReverted = N));
                    }),
                    (C.refresh = function (A, G, N, H) {
                        if (!((_t || !C.enabled) && !G)) {
                            if (c && A && ci) {
                                nt(n, "scrollEnd", Ru);
                                return;
                            }
                            !Pt && Z && Z(C),
                                (_t = C),
                                he.tween &&
                                    !N &&
                                    (he.tween.kill(), (he.tween = 0)),
                                Q && Q.pause(),
                                h && r && r.revert({ kill: !1 }).invalidate(),
                                C.isReverted || C.revert(!0, !0),
                                (C._subPinOffset = !1);
                            var W = re(),
                                q = _e(),
                                ie = k ? k.duration() : Oi(T, P),
                                ge = Le <= 0.01,
                                me = 0,
                                ae = H || 0,
                                ue = wr(N) ? N.end : i.end,
                                ye = i.endTrigger || p,
                                J = wr(N)
                                    ? N.start
                                    : i.start ||
                                      (i.start === 0 || !p
                                          ? 0
                                          : c
                                          ? "0 0"
                                          : "0 100%"),
                                lt = (C.pinnedContainer =
                                    i.pinnedContainer &&
                                    At(i.pinnedContainer, C)),
                                $e = (p && Math.max(0, oe.indexOf(C))) || 0,
                                ct = $e,
                                ut,
                                gt,
                                pr,
                                cs,
                                mt,
                                Qe,
                                Si,
                                co,
                                Ja,
                                mn,
                                Ei,
                                _n,
                                us;
                            for (
                                U &&
                                wr(N) &&
                                ((_n = X.getProperty(D, P.p)),
                                (us = X.getProperty(Pe, P.p)));
                                ct--;

                            )
                                (Qe = oe[ct]),
                                    Qe.end || Qe.refresh(0, 1) || (_t = C),
                                    (Si = Qe.pin),
                                    Si &&
                                        (Si === p || Si === c || Si === lt) &&
                                        !Qe.isReverted &&
                                        (mn || (mn = []),
                                        mn.unshift(Qe),
                                        Qe.revert(!0, !0)),
                                    Qe !== oe[ct] && ($e--, ct--);
                            for (
                                Ot(J) && (J = J(C)),
                                    J = zl(J, "start", C),
                                    se =
                                        Xl(
                                            J,
                                            p,
                                            W,
                                            P,
                                            Ee(),
                                            ee,
                                            D,
                                            C,
                                            q,
                                            K,
                                            $,
                                            ie,
                                            k,
                                            C._startClamp && "_startClamp"
                                        ) || (c ? -0.001 : 0),
                                    Ot(ue) && (ue = ue(C)),
                                    Xt(ue) &&
                                        !ue.indexOf("+=") &&
                                        (~ue.indexOf(" ")
                                            ? (ue =
                                                  (Xt(J)
                                                      ? J.split(" ")[0]
                                                      : "") + ue)
                                            : ((me = zs(ue.substr(2), W)),
                                              (ue = Xt(J)
                                                  ? J
                                                  : (k
                                                        ? X.utils.mapRange(
                                                              0,
                                                              k.duration(),
                                                              k.scrollTrigger
                                                                  .start,
                                                              k.scrollTrigger
                                                                  .end,
                                                              se
                                                          )
                                                        : se) + me),
                                              (ye = p))),
                                    ue = zl(ue, "end", C),
                                    ne =
                                        Math.max(
                                            se,
                                            Xl(
                                                ue || (ye ? "100% 0" : ie),
                                                ye,
                                                W,
                                                P,
                                                Ee() + me,
                                                pt,
                                                Pe,
                                                C,
                                                q,
                                                K,
                                                $,
                                                ie,
                                                k,
                                                C._endClamp && "_endClamp"
                                            )
                                        ) || -0.001,
                                    me = 0,
                                    ct = $e;
                                ct--;

                            )
                                (Qe = oe[ct]),
                                    (Si = Qe.pin),
                                    Si &&
                                        Qe.start - Qe._pinPush <= se &&
                                        !k &&
                                        Qe.end > 0 &&
                                        ((ut =
                                            Qe.end -
                                            (C._startClamp
                                                ? Math.max(0, Qe.start)
                                                : Qe.start)),
                                        ((Si === p &&
                                            Qe.start - Qe._pinPush < se) ||
                                            Si === lt) &&
                                            isNaN(J) &&
                                            (me += ut * (1 - Qe.progress)),
                                        Si === c && (ae += ut));
                            if (
                                ((se += me),
                                (ne += me),
                                C._startClamp && (C._startClamp += me),
                                C._endClamp &&
                                    !Pt &&
                                    ((C._endClamp = ne || -0.001),
                                    (ne = Math.min(ne, Oi(T, P)))),
                                (Le = ne - se || ((se -= 0.01) && 0.001)),
                                ge &&
                                    (we = X.utils.clamp(
                                        0,
                                        1,
                                        X.utils.normalize(se, ne, Lt)
                                    )),
                                (C._pinPush = ae),
                                ee &&
                                    me &&
                                    ((ut = {}),
                                    (ut[P.a] = "+=" + me),
                                    lt && (ut[P.p] = "-=" + Ee()),
                                    X.set([ee, pt], ut)),
                                c && !(_a && C.end >= Oi(T, P)))
                            )
                                (ut = oi(c)),
                                    (cs = P === it),
                                    (pr = Ee()),
                                    (Dt = parseFloat(ve(P.a)) + ae),
                                    !ie &&
                                        ne > 1 &&
                                        ((Ei = (
                                            z ? Ie.scrollingElement || _i : T
                                        ).style),
                                        (Ei = {
                                            style: Ei,
                                            value: Ei[
                                                "overflow" + P.a.toUpperCase()
                                            ],
                                        }),
                                        z &&
                                            oi(Me)[
                                                "overflow" + P.a.toUpperCase()
                                            ] !== "scroll" &&
                                            (Ei.style[
                                                "overflow" + P.a.toUpperCase()
                                            ] = "scroll")),
                                    Bo(c, Ge, ut),
                                    (di = Ss(c)),
                                    (gt = Fi(c, !0)),
                                    (co = $ && ur(T, cs ? kt : it)()),
                                    g
                                        ? ((Be = [g + P.os2, Le + ae + Je]),
                                          (Be.t = Ge),
                                          (ct =
                                              g === We
                                                  ? io(c, P) + Le + ae
                                                  : 0),
                                          ct &&
                                              (Be.push(P.d, ct + Je),
                                              Ge.style.flexBasis !== "auto" &&
                                                  (Ge.style.flexBasis =
                                                      ct + Je)),
                                          an(Be),
                                          lt &&
                                              oe.forEach(function (vn) {
                                                  vn.pin === lt &&
                                                      vn.vars.pinSpacing !==
                                                          !1 &&
                                                      (vn._subPinOffset = !0);
                                              }),
                                          $ && Ee(Lt))
                                        : ((ct = io(c, P)),
                                          ct &&
                                              Ge.style.flexBasis !== "auto" &&
                                              (Ge.style.flexBasis = ct + Je)),
                                    $ &&
                                        ((mt = {
                                            top:
                                                gt.top +
                                                (cs ? pr - se : co) +
                                                Je,
                                            left:
                                                gt.left +
                                                (cs ? co : pr - se) +
                                                Je,
                                            boxSizing: "border-box",
                                            position: "fixed",
                                        }),
                                        (mt[Dr] = mt["max" + hn] =
                                            Math.ceil(gt.width) + Je),
                                        (mt[Lr] = mt["max" + Ka] =
                                            Math.ceil(gt.height) + Je),
                                        (mt[si] =
                                            mt[si + jn] =
                                            mt[si + Xn] =
                                            mt[si + Wn] =
                                            mt[si + qn] =
                                                "0"),
                                        (mt[We] = ut[We]),
                                        (mt[We + jn] = ut[We + jn]),
                                        (mt[We + Xn] = ut[We + Xn]),
                                        (mt[We + Wn] = ut[We + Wn]),
                                        (mt[We + qn] = ut[We + qn]),
                                        (xi = Mh(Fe, mt, x)),
                                        Pt && Ee(0)),
                                    r
                                        ? ((Ja = r._initted),
                                          Io(1),
                                          r.render(r.duration(), !0, !0),
                                          (Vt = ve(P.a) - Dt + Le + ae),
                                          (fi = Math.abs(Le - Vt) > 1),
                                          $ &&
                                              fi &&
                                              xi.splice(xi.length - 2, 2),
                                          r.render(0, !0, !0),
                                          Ja || r.invalidate(!0),
                                          r.parent ||
                                              r.totalTime(r.totalTime()),
                                          Io(0))
                                        : (Vt = Le),
                                    Ei &&
                                        (Ei.value
                                            ? (Ei.style[
                                                  "overflow" + P.a.toUpperCase()
                                              ] = Ei.value)
                                            : Ei.style.removeProperty(
                                                  "overflow-" + P.a
                                              ));
                            else if (p && Ee() && !k)
                                for (gt = p.parentNode; gt && gt !== Me; )
                                    gt._pinOffset &&
                                        ((se -= gt._pinOffset),
                                        (ne -= gt._pinOffset)),
                                        (gt = gt.parentNode);
                            mn &&
                                mn.forEach(function (vn) {
                                    return vn.revert(!1, !0);
                                }),
                                (C.start = se),
                                (C.end = ne),
                                (ke = Ke = Pt ? Lt : Ee()),
                                !k &&
                                    !Pt &&
                                    (ke < Lt && Ee(Lt), (C.scroll.rec = 0)),
                                C.revert(!1, !0),
                                (Ne = vt()),
                                ht && ((te = -1), ht.restart(!0)),
                                (_t = 0),
                                r &&
                                    R &&
                                    (r._initted || Ti) &&
                                    r.progress() !== Ti &&
                                    r
                                        .progress(Ti || 0, !0)
                                        .render(r.time(), !0, !0),
                                (ge || we !== C.progress || k || h) &&
                                    (r &&
                                        !R &&
                                        r.totalProgress(
                                            k && se < -0.001 && !we
                                                ? X.utils.normalize(se, ne, 0)
                                                : we,
                                            !0
                                        ),
                                    (C.progress =
                                        ge || (ke - se) / Le === we ? 0 : we)),
                                c &&
                                    g &&
                                    (Ge._pinOffset = Math.round(
                                        C.progress * Vt
                                    )),
                                Q && Q.invalidate(),
                                isNaN(_n) ||
                                    ((_n -= X.getProperty(D, P.p)),
                                    (us -= X.getProperty(Pe, P.p)),
                                    Es(D, P, _n),
                                    Es(ee, P, _n - (H || 0)),
                                    Es(Pe, P, us),
                                    Es(pt, P, us - (H || 0))),
                                ge && !Pt && C.update(),
                                d && !Pt && !ei && ((ei = !0), d(C), (ei = !1));
                        }
                    }),
                    (C.getVelocity = function () {
                        return ((Ee() - Ke) / (vt() - On)) * 1e3 || 0;
                    }),
                    (C.endAnimation = function () {
                        bn(C.callbackAnimation),
                            r &&
                                (Q
                                    ? Q.progress(1)
                                    : r.paused()
                                    ? R || bn(r, C.direction < 0, 1)
                                    : bn(r, r.reversed()));
                    }),
                    (C.labelToScroll = function (A) {
                        return (
                            (r &&
                                r.labels &&
                                (se || C.refresh() || se) +
                                    (r.labels[A] / r.duration()) * Le) ||
                            0
                        );
                    }),
                    (C.getTrailing = function (A) {
                        var G = oe.indexOf(C),
                            N =
                                C.direction > 0
                                    ? oe.slice(0, G).reverse()
                                    : oe.slice(G + 1);
                        return (
                            Xt(A)
                                ? N.filter(function (H) {
                                      return H.vars.preventOverlaps === A;
                                  })
                                : N
                        ).filter(function (H) {
                            return C.direction > 0
                                ? H.end <= se
                                : H.start >= ne;
                        });
                    }),
                    (C.update = function (A, G, N) {
                        if (!(k && !N && !A)) {
                            var H = Pt === !0 ? Lt : C.scroll(),
                                W = A ? 0 : (H - se) / Le,
                                q = W < 0 ? 0 : W > 1 ? 1 : W || 0,
                                ie = C.progress,
                                ge,
                                me,
                                ae,
                                ue,
                                ye,
                                J,
                                lt,
                                $e;
                            if (
                                (G &&
                                    ((Ke = ke),
                                    (ke = k ? Ee() : H),
                                    w &&
                                        ((Gt = bi),
                                        (bi =
                                            r && !R ? r.totalProgress() : q))),
                                y &&
                                    c &&
                                    !_t &&
                                    !vs &&
                                    ci &&
                                    (!q && se < H + ((H - Ke) / (vt() - On)) * y
                                        ? (q = 1e-4)
                                        : q === 1 &&
                                          ne >
                                              H +
                                                  ((H - Ke) / (vt() - On)) *
                                                      y &&
                                          (q = 0.9999)),
                                q !== ie && C.enabled)
                            ) {
                                if (
                                    ((ge = C.isActive = !!q && q < 1),
                                    (me = !!ie && ie < 1),
                                    (J = ge !== me),
                                    (ye = J || !!q != !!ie),
                                    (C.direction = q > ie ? 1 : -1),
                                    (C.progress = q),
                                    ye &&
                                        !_t &&
                                        ((ae =
                                            q && !ie
                                                ? 0
                                                : q === 1
                                                ? 1
                                                : ie === 1
                                                ? 2
                                                : 3),
                                        R &&
                                            ((ue =
                                                (!J &&
                                                    Y[ae + 1] !== "none" &&
                                                    Y[ae + 1]) ||
                                                Y[ae]),
                                            ($e =
                                                r &&
                                                (ue === "complete" ||
                                                    ue === "reset" ||
                                                    ue in r)))),
                                    I &&
                                        (J || $e) &&
                                        ($e || f || !r) &&
                                        (Ot(I)
                                            ? I(C)
                                            : C.getTrailing(I).forEach(
                                                  function (pr) {
                                                      return pr.endAnimation();
                                                  }
                                              )),
                                    R ||
                                        (Q && !_t && !vs
                                            ? (Q._dp._time - Q._start !==
                                                  Q._time &&
                                                  Q.render(
                                                      Q._dp._time - Q._start
                                                  ),
                                              Q.resetTo
                                                  ? Q.resetTo(
                                                        "totalProgress",
                                                        q,
                                                        r._tTime / r._tDur
                                                    )
                                                  : ((Q.vars.totalProgress = q),
                                                    Q.invalidate().restart()))
                                            : r &&
                                              r.totalProgress(
                                                  q,
                                                  !!(_t && (Ne || A))
                                              )),
                                    c)
                                ) {
                                    if (
                                        (A && g && (Ge.style[g + P.os2] = fr),
                                        !$)
                                    )
                                        bt(Ln(Dt + Vt * q));
                                    else if (ye) {
                                        if (
                                            ((lt =
                                                !A &&
                                                q > ie &&
                                                ne + 1 > H &&
                                                H + 1 >= Oi(T, P)),
                                            x)
                                        )
                                            if (!A && (ge || lt)) {
                                                var ct = Fi(c, !0),
                                                    ut = H - se;
                                                ql(
                                                    c,
                                                    Me,
                                                    ct.top +
                                                        (P === it ? ut : 0) +
                                                        Je,
                                                    ct.left +
                                                        (P === it ? 0 : ut) +
                                                        Je
                                                );
                                            } else ql(c, Ge);
                                        an(ge || lt ? xi : di),
                                            (fi && q < 1 && ge) ||
                                                bt(
                                                    Dt +
                                                        (q === 1 && !lt
                                                            ? Vt
                                                            : 0)
                                                );
                                    }
                                }
                                w && !he.tween && !_t && !vs && ht.restart(!0),
                                    a &&
                                        (J || (v && q && (q < 1 || !Ro))) &&
                                        os(a.targets).forEach(function (pr) {
                                            return pr.classList[
                                                ge || v ? "add" : "remove"
                                            ](a.className);
                                        }),
                                    o && !R && !A && o(C),
                                    ye && !_t
                                        ? (R &&
                                              ($e &&
                                                  (ue === "complete"
                                                      ? r
                                                            .pause()
                                                            .totalProgress(1)
                                                      : ue === "reset"
                                                      ? r.restart(!0).pause()
                                                      : ue === "restart"
                                                      ? r.restart(!0)
                                                      : r[ue]()),
                                              o && o(C)),
                                          (J || !Ro) &&
                                              (u && J && No(C, u),
                                              V[ae] && No(C, V[ae]),
                                              v &&
                                                  (q === 1
                                                      ? C.kill(!1, 1)
                                                      : (V[ae] = 0)),
                                              J ||
                                                  ((ae = q === 1 ? 1 : 3),
                                                  V[ae] && No(C, V[ae]))),
                                          E &&
                                              !ge &&
                                              Math.abs(C.getVelocity()) >
                                                  (An(E) ? E : 2500) &&
                                              (bn(C.callbackAnimation),
                                              Q
                                                  ? Q.progress(1)
                                                  : bn(
                                                        r,
                                                        ue === "reverse"
                                                            ? 1
                                                            : !q,
                                                        1
                                                    )))
                                        : R && o && !_t && o(C);
                            }
                            if (pi) {
                                var gt = k
                                    ? (H / k.duration()) *
                                      (k._caScrollDist || 0)
                                    : H;
                                qi(gt + (D._isFlipped ? 1 : 0)), pi(gt);
                            }
                            j &&
                                j((-H / k.duration()) * (k._caScrollDist || 0));
                        }
                    }),
                    (C.enable = function (A, G) {
                        C.enabled ||
                            ((C.enabled = !0),
                            nt(T, "resize", In),
                            z || nt(T, "scroll", Xr),
                            Z && nt(n, "refreshInit", Z),
                            A !== !1 &&
                                ((C.progress = we = 0), (ke = Ke = te = Ee())),
                            G !== !1 && C.refresh());
                    }),
                    (C.getTween = function (A) {
                        return A && he ? he.tween : Q;
                    }),
                    (C.setPositions = function (A, G, N, H) {
                        if (k) {
                            var W = k.scrollTrigger,
                                q = k.duration(),
                                ie = W.end - W.start;
                            (A = W.start + (ie * A) / q),
                                (G = W.start + (ie * G) / q);
                        }
                        C.refresh(
                            !1,
                            !1,
                            {
                                start: Nl(A, N && !!C._startClamp),
                                end: Nl(G, N && !!C._endClamp),
                            },
                            H
                        ),
                            C.update();
                    }),
                    (C.adjustPinSpacing = function (A) {
                        if (Be && A) {
                            var G = Be.indexOf(P.d) + 1;
                            (Be[G] = parseFloat(Be[G]) + A + Je),
                                (Be[1] = parseFloat(Be[1]) + A + Je),
                                an(Be);
                        }
                    }),
                    (C.disable = function (A, G) {
                        if (
                            C.enabled &&
                            (A !== !1 && C.revert(!0, !0),
                            (C.enabled = C.isActive = !1),
                            G || (Q && Q.pause()),
                            (Lt = 0),
                            qe && (qe.uncache = 1),
                            Z && rt(n, "refreshInit", Z),
                            ht &&
                                (ht.pause(),
                                he.tween && he.tween.kill() && (he.tween = 0)),
                            !z)
                        ) {
                            for (var N = oe.length; N--; )
                                if (oe[N].scroller === T && oe[N] !== C) return;
                            rt(T, "resize", In), z || rt(T, "scroll", Xr);
                        }
                    }),
                    (C.kill = function (A, G) {
                        C.disable(A, G), Q && !G && Q.kill(), l && delete va[l];
                        var N = oe.indexOf(C);
                        N >= 0 && oe.splice(N, 1),
                            N === Ct && Fs > 0 && Ct--,
                            (N = 0),
                            oe.forEach(function (H) {
                                return H.scroller === C.scroller && (N = 1);
                            }),
                            N || Pt || (C.scroll.rec = 0),
                            r &&
                                ((r.scrollTrigger = null),
                                A && r.revert({ kill: !1 }),
                                G || r.kill()),
                            ee &&
                                [ee, pt, D, Pe].forEach(function (H) {
                                    return (
                                        H.parentNode &&
                                        H.parentNode.removeChild(H)
                                    );
                                }),
                            Un === C && (Un = 0),
                            c &&
                                (qe && (qe.uncache = 1),
                                (N = 0),
                                oe.forEach(function (H) {
                                    return H.pin === c && N++;
                                }),
                                N || (qe.spacer = 0)),
                            i.onKill && i.onKill(C);
                    }),
                    oe.push(C),
                    C.enable(!1, !1),
                    b && b(C),
                    r && r.add && !Le)
                ) {
                    var F = C.update;
                    (C.update = function () {
                        (C.update = F), se || ne || C.refresh();
                    }),
                        X.delayedCall(0.01, C.update),
                        (Le = 0.01),
                        (se = ne = 0);
                } else C.refresh();
                c && Eh();
            }),
            (n.register = function (i) {
                return (
                    jr ||
                        ((X = i || ku()),
                        Mu() && window.document && n.enable(),
                        (jr = Dn)),
                    jr
                );
            }),
            (n.defaults = function (i) {
                if (i) for (var r in i) bs[r] = i[r];
                return bs;
            }),
            (n.disable = function (i, r) {
                (Dn = 0),
                    oe.forEach(function (o) {
                        return o[r ? "kill" : "disable"](i);
                    }),
                    rt(fe, "wheel", Xr),
                    rt(Ie, "scroll", Xr),
                    clearInterval(_s),
                    rt(Ie, "touchcancel", Pi),
                    rt(Me, "touchstart", Pi),
                    ws(rt, Ie, "pointerdown,touchstart,mousedown", Fl),
                    ws(rt, Ie, "pointerup,touchend,mouseup", Bl),
                    eo.kill(),
                    ys(rt);
                for (var s = 0; s < le.length; s += 3)
                    xs(rt, le[s], le[s + 1]), xs(rt, le[s], le[s + 2]);
            }),
            (n.enable = function () {
                if (
                    ((fe = window),
                    (Ie = document),
                    (_i = Ie.documentElement),
                    (Me = Ie.body),
                    X &&
                        ((os = X.utils.toArray),
                        (Hn = X.utils.clamp),
                        (ma = X.core.context || Pi),
                        (Io = X.core.suppressOverwrites || Pi),
                        (qa = fe.history.scrollRestoration || "auto"),
                        (ya = fe.pageYOffset),
                        X.core.globals("ScrollTrigger", n),
                        Me))
                ) {
                    (Dn = 1),
                        (on = document.createElement("div")),
                        (on.style.height = "100vh"),
                        (on.style.position = "absolute"),
                        Fu(),
                        vh(),
                        Xe.register(X),
                        (n.isTouch = Xe.isTouch),
                        (Ki =
                            Xe.isTouch &&
                            /(iPad|iPhone|iPod|Mac)/g.test(
                                navigator.userAgent
                            )),
                        (ga = Xe.isTouch === 1),
                        nt(fe, "wheel", Xr),
                        (Tu = [fe, Ie, _i, Me]),
                        X.matchMedia
                            ? ((n.matchMedia = function (l) {
                                  var u = X.matchMedia(),
                                      d;
                                  for (d in l) u.add(d, l[d]);
                                  return u;
                              }),
                              X.addEventListener("matchMediaInit", function () {
                                  return Qa();
                              }),
                              X.addEventListener(
                                  "matchMediaRevert",
                                  function () {
                                      return zu();
                                  }
                              ),
                              X.addEventListener("matchMedia", function () {
                                  Tr(0, 1), Br("matchMedia");
                              }),
                              X.matchMedia(
                                  "(orientation: portrait)",
                                  function () {
                                      return Fo(), Fo;
                                  }
                              ))
                            : console.warn("Requires GSAP 3.11.0 or later"),
                        Fo(),
                        nt(Ie, "scroll", Xr);
                    var i = Me.style,
                        r = i.borderTopStyle,
                        s = X.core.Animation.prototype,
                        o,
                        a;
                    for (
                        s.revert ||
                            Object.defineProperty(s, "revert", {
                                value: function () {
                                    return this.time(-0.01, !0);
                                },
                            }),
                            i.borderTopStyle = "solid",
                            o = Fi(Me),
                            it.m = Math.round(o.top + it.sc()) || 0,
                            kt.m = Math.round(o.left + kt.sc()) || 0,
                            r
                                ? (i.borderTopStyle = r)
                                : i.removeProperty("border-top-style"),
                            _s = setInterval(Gl, 250),
                            X.delayedCall(0.5, function () {
                                return (vs = 0);
                            }),
                            nt(Ie, "touchcancel", Pi),
                            nt(Me, "touchstart", Pi),
                            ws(nt, Ie, "pointerdown,touchstart,mousedown", Fl),
                            ws(nt, Ie, "pointerup,touchend,mouseup", Bl),
                            ha = X.utils.checkPrefix("transform"),
                            Bs.push(ha),
                            jr = vt(),
                            eo = X.delayedCall(0.2, Tr).pause(),
                            Wr = [
                                Ie,
                                "visibilitychange",
                                function () {
                                    var l = fe.innerWidth,
                                        u = fe.innerHeight;
                                    Ie.hidden
                                        ? ((Il = l), (Rl = u))
                                        : (Il !== l || Rl !== u) && In();
                                },
                                Ie,
                                "DOMContentLoaded",
                                Tr,
                                fe,
                                "load",
                                Tr,
                                fe,
                                "resize",
                                In,
                            ],
                            ys(nt),
                            oe.forEach(function (l) {
                                return l.enable(0, 1);
                            }),
                            a = 0;
                        a < le.length;
                        a += 3
                    )
                        xs(rt, le[a], le[a + 1]), xs(rt, le[a], le[a + 2]);
                }
            }),
            (n.config = function (i) {
                "limitCallbacks" in i && (Ro = !!i.limitCallbacks);
                var r = i.syncInterval;
                (r && clearInterval(_s)) || ((_s = r) && setInterval(Gl, r)),
                    "ignoreMobileResize" in i &&
                        (ga = n.isTouch === 1 && i.ignoreMobileResize),
                    "autoRefreshEvents" in i &&
                        (ys(rt) || ys(nt, i.autoRefreshEvents || "none"),
                        (Eu =
                            (i.autoRefreshEvents + "").indexOf("resize") ===
                            -1));
            }),
            (n.scrollerProxy = function (i, r) {
                var s = At(i),
                    o = le.indexOf(s),
                    a = Nr(s);
                ~o && le.splice(o, a ? 6 : 2),
                    r &&
                        (a
                            ? Li.unshift(fe, r, Me, r, _i, r)
                            : Li.unshift(s, r));
            }),
            (n.clearMatchMedia = function (i) {
                oe.forEach(function (r) {
                    return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
                });
            }),
            (n.isInViewport = function (i, r, s) {
                var o = (Xt(i) ? At(i) : i).getBoundingClientRect(),
                    a = o[s ? Dr : Lr] * r || 0;
                return s
                    ? o.right - a > 0 && o.left + a < fe.innerWidth
                    : o.bottom - a > 0 && o.top + a < fe.innerHeight;
            }),
            (n.positionInViewport = function (i, r, s) {
                Xt(i) && (i = At(i));
                var o = i.getBoundingClientRect(),
                    a = o[s ? Dr : Lr],
                    l =
                        r == null
                            ? a / 2
                            : r in ro
                            ? ro[r] * a
                            : ~r.indexOf("%")
                            ? (parseFloat(r) * a) / 100
                            : parseFloat(r) || 0;
                return s
                    ? (o.left + l) / fe.innerWidth
                    : (o.top + l) / fe.innerHeight;
            }),
            (n.killAll = function (i) {
                if (
                    (oe.slice(0).forEach(function (s) {
                        return s.vars.id !== "ScrollSmoother" && s.kill();
                    }),
                    i !== !0)
                ) {
                    var r = Fr.killAll || [];
                    (Fr = {}),
                        r.forEach(function (s) {
                            return s();
                        });
                }
            }),
            n
        );
    })();
ce.version = "3.12.5";
ce.saveStyles = function (n) {
    return n
        ? os(n).forEach(function (e) {
              if (e && e.style) {
                  var t = Ht.indexOf(e);
                  t >= 0 && Ht.splice(t, 5),
                      Ht.push(
                          e,
                          e.style.cssText,
                          e.getBBox && e.getAttribute("transform"),
                          X.core.getCache(e),
                          ma()
                      );
              }
          })
        : Ht;
};
ce.revert = function (n, e) {
    return Qa(!n, e);
};
ce.create = function (n, e) {
    return new ce(n, e);
};
ce.refresh = function (n) {
    return n ? In() : (jr || ce.register()) && Tr(!0);
};
ce.update = function (n) {
    return ++le.cache && Gi(n === !0 ? 2 : 0);
};
ce.clearScrollMemory = Nu;
ce.maxScroll = function (n, e) {
    return Oi(n, e ? kt : it);
};
ce.getScrollFunc = function (n, e) {
    return ur(At(n), e ? kt : it);
};
ce.getById = function (n) {
    return va[n];
};
ce.getAll = function () {
    return oe.filter(function (n) {
        return n.vars.id !== "ScrollSmoother";
    });
};
ce.isScrolling = function () {
    return !!ci;
};
ce.snapDirectional = Za;
ce.addEventListener = function (n, e) {
    var t = Fr[n] || (Fr[n] = []);
    ~t.indexOf(e) || t.push(e);
};
ce.removeEventListener = function (n, e) {
    var t = Fr[n],
        i = t && t.indexOf(e);
    i >= 0 && t.splice(i, 1);
};
ce.batch = function (n, e) {
    var t = [],
        i = {},
        r = e.interval || 0.016,
        s = e.batchMax || 1e9,
        o = function (u, d) {
            var f = [],
                p = [],
                c = X.delayedCall(r, function () {
                    d(f, p), (f = []), (p = []);
                }).pause();
            return function (g) {
                f.length || c.restart(!0),
                    f.push(g.trigger),
                    p.push(g),
                    s <= f.length && c.progress(1);
            };
        },
        a;
    for (a in e)
        i[a] =
            a.substr(0, 2) === "on" && Ot(e[a]) && a !== "onRefreshInit"
                ? o(a, e[a])
                : e[a];
    return (
        Ot(s) &&
            ((s = s()),
            nt(ce, "refresh", function () {
                return (s = e.batchMax());
            })),
        os(n).forEach(function (l) {
            var u = {};
            for (a in i) u[a] = i[a];
            (u.trigger = l), t.push(ce.create(u));
        }),
        t
    );
};
var Wl = function (e, t, i, r) {
        return (
            t > r ? e(r) : t < 0 && e(0),
            i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
        );
    },
    $o = function n(e, t) {
        t === !0
            ? e.style.removeProperty("touch-action")
            : (e.style.touchAction =
                  t === !0
                      ? "auto"
                      : t
                      ? "pan-" + t + (Xe.isTouch ? " pinch-zoom" : "")
                      : "none"),
            e === _i && n(Me, t);
    },
    Cs = { auto: 1, scroll: 1 },
    Oh = function (e) {
        var t = e.event,
            i = e.target,
            r = e.axis,
            s = (t.changedTouches ? t.changedTouches[0] : t).target,
            o = s._gsap || X.core.getCache(s),
            a = vt(),
            l;
        if (!o._isScrollT || a - o._isScrollT > 2e3) {
            for (
                ;
                s &&
                s !== Me &&
                ((s.scrollHeight <= s.clientHeight &&
                    s.scrollWidth <= s.clientWidth) ||
                    !(Cs[(l = oi(s)).overflowY] || Cs[l.overflowX]));

            )
                s = s.parentNode;
            (o._isScroll =
                s &&
                s !== i &&
                !Nr(s) &&
                (Cs[(l = oi(s)).overflowY] || Cs[l.overflowX])),
                (o._isScrollT = a);
        }
        (o._isScroll || r === "x") &&
            (t.stopPropagation(), (t._gsapAllow = !0));
    },
    $u = function (e, t, i, r) {
        return Xe.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: (r = r && Oh),
            onPress: r,
            onDrag: r,
            onScroll: r,
            onEnable: function () {
                return i && nt(Ie, Xe.eventTypes[0], Kl, !1, !0);
            },
            onDisable: function () {
                return rt(Ie, Xe.eventTypes[0], Kl, !0);
            },
        });
    },
    Dh = /(input|label|select|textarea)/i,
    Ul,
    Kl = function (e) {
        var t = Dh.test(e.target.tagName);
        (t || Ul) && ((e._gsapAllow = !0), (Ul = t));
    },
    Lh = function (e) {
        wr(e) || (e = {}),
            (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
            e.type || (e.type = "wheel,touch"),
            (e.debounce = !!e.debounce),
            (e.id = e.id || "normalizer");
        var t = e,
            i = t.normalizeScrollX,
            r = t.momentum,
            s = t.allowNestedScroll,
            o = t.onRelease,
            a,
            l,
            u = At(e.target) || _i,
            d = X.core.globals().ScrollSmoother,
            f = d && d.get(),
            p =
                Ki &&
                ((e.content && At(e.content)) ||
                    (f && e.content !== !1 && !f.smooth() && f.content())),
            c = ur(u, it),
            g = ur(u, kt),
            h = 1,
            y =
                (Xe.isTouch && fe.visualViewport
                    ? fe.visualViewport.scale * fe.visualViewport.width
                    : fe.outerWidth) / fe.innerWidth,
            m = 0,
            _ = Ot(r)
                ? function () {
                      return r(a);
                  }
                : function () {
                      return r || 2.8;
                  },
            v,
            w,
            x = $u(u, e.type, !0, s),
            O = function () {
                return (w = !1);
            },
            k = Pi,
            E = Pi,
            I = function () {
                (l = Oi(u, it)),
                    (E = Hn(Ki ? 1 : 0, l)),
                    i && (k = Hn(0, Oi(u, kt))),
                    (v = Ar);
            },
            P = function () {
                (p._gsap.y = Ln(parseFloat(p._gsap.y) + c.offset) + "px"),
                    (p.style.transform =
                        "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                        parseFloat(p._gsap.y) +
                        ", 0, 1)"),
                    (c.offset = c.cacheID = 0);
            },
            R = function () {
                if (w) {
                    requestAnimationFrame(O);
                    var U = Ln(a.deltaY / 2),
                        K = E(c.v - U);
                    if (p && K !== c.v + c.offset) {
                        c.offset = K - c.v;
                        var C = Ln(
                            (parseFloat(p && p._gsap.y) || 0) - c.offset
                        );
                        (p.style.transform =
                            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                            C +
                            ", 0, 1)"),
                            (p._gsap.y = C + "px"),
                            (c.cacheID = le.cache),
                            Gi();
                    }
                    return !0;
                }
                c.offset && P(), (w = !0);
            },
            T,
            M,
            z,
            $,
            V = function () {
                I(),
                    T.isActive() &&
                        T.vars.scrollY > l &&
                        (c() > l
                            ? T.progress(1) && c(l)
                            : T.resetTo("scrollY", l));
            };
        return (
            p && X.set(p, { y: "+=0" }),
            (e.ignoreCheck = function (Y) {
                return (
                    (Ki && Y.type === "touchmove" && R()) ||
                    (h > 1.05 && Y.type !== "touchstart") ||
                    a.isGesturing ||
                    (Y.touches && Y.touches.length > 1)
                );
            }),
            (e.onPress = function () {
                w = !1;
                var Y = h;
                (h = Ln(
                    ((fe.visualViewport && fe.visualViewport.scale) || 1) / y
                )),
                    T.pause(),
                    Y !== h && $o(u, h > 1.01 ? !0 : i ? !1 : "x"),
                    (M = g()),
                    (z = c()),
                    I(),
                    (v = Ar);
            }),
            (e.onRelease = e.onGestureStart =
                function (Y, U) {
                    if ((c.offset && P(), !U)) $.restart(!0);
                    else {
                        le.cache++;
                        var K = _(),
                            C,
                            Z;
                        i &&
                            ((C = g()),
                            (Z = C + (K * 0.05 * -Y.velocityX) / 0.227),
                            (K *= Wl(g, C, Z, Oi(u, kt))),
                            (T.vars.scrollX = k(Z))),
                            (C = c()),
                            (Z = C + (K * 0.05 * -Y.velocityY) / 0.227),
                            (K *= Wl(c, C, Z, Oi(u, it))),
                            (T.vars.scrollY = E(Z)),
                            T.invalidate().duration(K).play(0.01),
                            ((Ki && T.vars.scrollY >= l) || C >= l - 1) &&
                                X.to({}, { onUpdate: V, duration: K });
                    }
                    o && o(Y);
                }),
            (e.onWheel = function () {
                T._ts && T.pause(), vt() - m > 1e3 && ((v = 0), (m = vt()));
            }),
            (e.onChange = function (Y, U, K, C, Z) {
                if (
                    (Ar !== v && I(),
                    U &&
                        i &&
                        g(
                            k(
                                C[2] === U
                                    ? M + (Y.startX - Y.x)
                                    : g() + U - C[1]
                            )
                        ),
                    K)
                ) {
                    c.offset && P();
                    var re = Z[2] === K,
                        _e = re ? z + Y.startY - Y.y : c() + K - Z[1],
                        te = E(_e);
                    re && _e !== te && (z += te - _e), c(te);
                }
                (K || U) && Gi();
            }),
            (e.onEnable = function () {
                $o(u, i ? !1 : "x"),
                    ce.addEventListener("refresh", V),
                    nt(fe, "resize", V),
                    c.smooth &&
                        ((c.target.style.scrollBehavior = "auto"),
                        (c.smooth = g.smooth = !1)),
                    x.enable();
            }),
            (e.onDisable = function () {
                $o(u, !0),
                    rt(fe, "resize", V),
                    ce.removeEventListener("refresh", V),
                    x.kill();
            }),
            (e.lockAxis = e.lockAxis !== !1),
            (a = new Xe(e)),
            (a.iOS = Ki),
            Ki && !c() && c(1),
            Ki && X.ticker.add(Pi),
            ($ = a._dc),
            (T = X.to(a, {
                ease: "power4",
                paused: !0,
                inherit: !1,
                scrollX: i ? "+=0.1" : "+=0",
                scrollY: "+=0.1",
                modifiers: {
                    scrollY: Bu(c, c(), function () {
                        return T.pause();
                    }),
                },
                onUpdate: Gi,
                onComplete: $.vars.onComplete,
            })),
            a
        );
    };
ce.sort = function (n) {
    return oe.sort(
        n ||
            function (e, t) {
                return (
                    (e.vars.refreshPriority || 0) * -1e6 +
                    e.start -
                    (t.start + (t.vars.refreshPriority || 0) * -1e6)
                );
            }
    );
};
ce.observe = function (n) {
    return new Xe(n);
};
ce.normalizeScroll = function (n) {
    if (typeof n > "u") return Et;
    if (n === !0 && Et) return Et.enable();
    if (n === !1) {
        Et && Et.kill(), (Et = n);
        return;
    }
    var e = n instanceof Xe ? n : Lh(n);
    return (
        Et && Et.target === e.target && Et.kill(), Nr(e.target) && (Et = e), e
    );
};
ce.core = {
    _getVelocityProp: pa,
    _inputObserver: $u,
    _scrollers: le,
    _proxies: Li,
    bridge: {
        ss: function () {
            ci || Br("scrollStart"), (ci = vt());
        },
        ref: function () {
            return _t;
        },
    },
};
ku() && X.registerPlugin(ce);
xe.registerPlugin(ce);
const Ah = Se(".js-spec-level", (n) => {
        xe.fromTo(
            n,
            { "--dot-position": 1 },
            {
                "--dot-position":
                    getComputedStyle(n).getPropertyValue("--dot-position"),
                duration: 1,
                scrollTrigger: {
                    trigger: n,
                    scroller: window,
                    start: "top bottom",
                    end: "top center",
                },
            }
        );
    }),
    Ih = Se(".js-product-variant", (n, e) => {
        const t = document.querySelector(".js-product-slider-main"),
            i = [...t.querySelectorAll(".swiper-slide")],
            r = n.querySelector("input").getAttribute("attr-img");
        console.log({ element: n, trigger: t, slides: i, image: r }),
            n.addEventListener("click", () => {
                console.log({
                    selected: i.find(
                        (s) => s.getAttribute("attr-img-url") === r
                    ),
                }),
                    window.e.emit(
                        De.MAIN_SLIDER_SWIPE,
                        i.indexOf(
                            i.find((s) => s.getAttribute("attr-img-url") === r)
                        )
                    );
            });
    }),
    Rh = Se(".js-header-close-dropdown", (n) => {
        ["mouseenter", "click"].forEach((e) => {
            n.addEventListener(e, () => {
                window.e.emit(De.CLOSE_HEADER_DROPDOWN);
            });
        });
    }),
    zh = Se(".js-info-card", (n) => {
        const e = n.querySelector(".js-info-card-bg"),
            t = n.querySelector(".js-info-card-content"),
            i = n.querySelector(".js-info-card-close"),
            {
                dataset: { card: r },
            } = n,
            s = xe.timeline({ paused: !0 });
        s
            .fromTo(
                n,
                { autoAlpha: 0, pointerEvents: "none" },
                { autoAlpha: 1, pointerEvents: "all", duration: 0.01 }
            )
            .fromTo(
                t,
                { autoAlpha: 0, scale: 0.9 },
                { autoAlpha: 1, scale: 1, duration: 0.25 }
            )
            .fromTo(
                [e, i],
                { autoAlpha: 0 },
                { autoAlpha: 1, duration: 0.25 },
                "<"
            ),
            window.e.on(De.OPEN_INFO_CARD, ({ target: o }) => {
                o === r && s.play();
            }),
            e.addEventListener("click", () => {
                s.reverse();
            }),
            i.addEventListener("click", () => {
                s.reverse();
            });
    }),
    Nh = Se(".js-info-card-trigger", (n) => {
        const {
            dataset: { card: e },
        } = n;
        n.addEventListener("click", () => {
            window.e.emit(De.OPEN_INFO_CARD, { target: e });
        });
    }),
    Fh = Se(".js-dropdown-toggle", (n) => {
        const e = document.querySelector(".js-header"),
            t = [
                ...document.querySelectorAll(
                    ".js-dropdown-trigger,.js-header-mobile-menu,.js-dropdown-toggle"
                ),
            ],
            i = [
                ...document.querySelectorAll(
                    ".js-header-dropdown,.js-header-toggle-dropdown"
                ),
            ],
            r = document.querySelector(
                `.js-header-toggle-dropdown[data-parent="${n.dataset.menuTrigger}"]`
            ),
            s = () => {
                t.forEach((l) => {
                    l.classList.remove("is-active");
                }),
                    i.forEach((l) => (l.style.display = "none")),
                    n.classList.add("is-active"),
                    e.classList.add("has-dropdown", "no-area"),
                    (r.style.display = "block");
                const { height: a } = r.getBoundingClientRect();
                document.body.style.setProperty(
                    "--panel-height",
                    `${window.innerWidth > 1200 ? a + 4 : 2e3}px`
                );
            },
            o = (a) => {
                a ||
                    (n.classList.remove("is-active"),
                    e.classList.remove("has-dropdown", "no-area"),
                    (r.style.display = "none"),
                    document.body.style.setProperty("--panel-height", "0px"));
            };
        n.addEventListener("click", () => {
            n.classList.contains("is-active") ? o() : s();
        }),
            window.e.on(De.CLOSE_HEADER_DROPDOWN, (a) => o(a));
    }),
    Bh = [
        [0, 25],
        [50, 0],
        [100, 25],
        [100, 75],
        [50, 100],
        [0, 75],
    ];
xe.registerPlugin(ce);
const $h = Se(".js-hexagon", (n) => {
        const {
                dataset: { skills: e },
            } = n,
            t = n.querySelector(".js-hexagon-gradient"),
            i = e.split(","),
            s = Bh.map(([o, a], l) => {
                const u = i[l],
                    d = xe.utils.mapRange(0, 5, 0.14, 1, u);
                return [
                    xe.utils.interpolate(50, o, d),
                    xe.utils.interpolate(50, a, d),
                ];
            })
                .map(([o, a]) => [`${o}%`, `${a}%`])
                .map((o) => o.join(" "))
                .join(", ");
        xe.fromTo(
            t,
            {
                clipPath:
                    "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%)",
            },
            {
                clipPath: `polygon(${s})`,
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: n,
                    scroller: window,
                    start: "top bottom",
                    end: "top center",
                },
            }
        );
    }),
    Vh = Se(".js-timeline", (n) => {
        console.log(n);
        const e = n.querySelector(".js-timeline-open-trigger"),
            t = n.querySelector(".js-timeline-close-trigger"),
            i = n.querySelector(".js-timeline-content");
        e.addEventListener("click", () => {
            xe.timeline()
                .set(e, { display: "none" })
                .set(t, { display: "grid" })
                .to(i, { height: "auto", duration: 1, ease: "power2.inOut" })
                .set(triggerContainer, { display: "none" });
        }),
            t.addEventListener("click", () => {
                xe.timeline()
                    .set(e, { display: "grid" })
                    .set(t, { display: "none" })
                    .to(i, { height: 400, duration: 1, ease: "power2.inOut" })
                    .set(triggerContainer, { display: "none" });
            });
    });
window.e = new Yu();
const Gh = () => window.e.emit(De.RESIZE),
    Yh = (n) => window.e.emit(De.POINTER_MOVE, n);
window.addEventListener("resize", Gh);
window.addEventListener("pointermove", Yh);
af();
lf();
dh();
fh();
ph();
Rh();
of();
Fh();
cf();
Hu();
lh();
Ip();
zp();
nh();
sh();
oh();
ah();
ch();
uh();
hh();
Ah();
Ih();
Rp();
zh();
Nh();
$h();
Vh();
console.log("aaaaaa");
