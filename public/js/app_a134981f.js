(() => {
    var e = {
            7757: (e, t, r) => {
                e.exports = r(5666)
            },
            5666: e => {
                var t = function(e) {
                    "use strict";
                    var t, r = Object.prototype,
                        i = r.hasOwnProperty,
                        s = "function" == typeof Symbol ? Symbol : {},
                        n = s.iterator || "@@iterator",
                        a = s.asyncIterator || "@@asyncIterator",
                        o = s.toStringTag || "@@toStringTag";

                    function c(e, t, r) {
                        return Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[t]
                    }
                    try {
                        c({}, "")
                    } catch (e) {
                        c = function(e, t, r) {
                            return e[t] = r
                        }
                    }

                    function l(e, t, r, i) {
                        var s = t && t.prototype instanceof v ? t : v,
                            n = Object.create(s.prototype),
                            a = new T(i || []);
                        return n._invoke = function(e, t, r) {
                            var i = u;
                            return function(s, n) {
                                if (i === f) throw new Error("Generator is already running");
                                if (i === d) {
                                    if ("throw" === s) throw n;
                                    return I()
                                }
                                for (r.method = s, r.arg = n;;) {
                                    var a = r.delegate;
                                    if (a) {
                                        var o = k(a, r);
                                        if (o) {
                                            if (o === g) continue;
                                            return o
                                        }
                                    }
                                    if ("next" === r.method) r.sent = r._sent = r.arg;
                                    else if ("throw" === r.method) {
                                        if (i === u) throw i = d, r.arg;
                                        r.dispatchException(r.arg)
                                    } else "return" === r.method && r.abrupt("return", r.arg);
                                    i = f;
                                    var c = p(e, t, r);
                                    if ("normal" === c.type) {
                                        if (i = r.done ? d : h, c.arg === g) continue;
                                        return {
                                            value: c.arg,
                                            done: r.done
                                        }
                                    }
                                    "throw" === c.type && (i = d, r.method = "throw", r.arg = c.arg)
                                }
                            }
                        }(e, r, a), n
                    }

                    function p(e, t, r) {
                        try {
                            return {
                                type: "normal",
                                arg: e.call(t, r)
                            }
                        } catch (e) {
                            return {
                                type: "throw",
                                arg: e
                            }
                        }
                    }
                    e.wrap = l;
                    var u = "suspendedStart",
                        h = "suspendedYield",
                        f = "executing",
                        d = "completed",
                        g = {};

                    function v() {}

                    function y() {}

                    function m() {}
                    var _ = {};
                    c(_, n, (function() {
                        return this
                    }));
                    var w = Object.getPrototypeOf,
                        b = w && w(w($([])));
                    b && b !== r && i.call(b, n) && (_ = b);
                    var x = m.prototype = v.prototype = Object.create(_);

                    function j(e) {
                        ["next", "throw", "return"].forEach((function(t) {
                            c(e, t, (function(e) {
                                return this._invoke(t, e)
                            }))
                        }))
                    }

                    function L(e, t) {
                        function r(s, n, a, o) {
                            var c = p(e[s], e, n);
                            if ("throw" !== c.type) {
                                var l = c.arg,
                                    u = l.value;
                                return u && "object" == typeof u && i.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                                    r("next", e, a, o)
                                }), (function(e) {
                                    r("throw", e, a, o)
                                })) : t.resolve(u).then((function(e) {
                                    l.value = e, a(l)
                                }), (function(e) {
                                    return r("throw", e, a, o)
                                }))
                            }
                            o(c.arg)
                        }
                        var s;
                        this._invoke = function(e, i) {
                            function n() {
                                return new t((function(t, s) {
                                    r(e, i, t, s)
                                }))
                            }
                            return s = s ? s.then(n, n) : n()
                        }
                    }

                    function k(e, r) {
                        var i = e.iterator[r.method];
                        if (i === t) {
                            if (r.delegate = null, "throw" === r.method) {
                                if (e.iterator.return && (r.method = "return", r.arg = t, k(e, r), "throw" === r.method)) return g;
                                r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return g
                        }
                        var s = p(i, e.iterator, r.arg);
                        if ("throw" === s.type) return r.method = "throw", r.arg = s.arg, r.delegate = null, g;
                        var n = s.arg;
                        return n ? n.done ? (r[e.resultName] = n.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, g) : n : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, g)
                    }

                    function F(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                    }

                    function E(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t
                    }

                    function T(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], e.forEach(F, this), this.reset(!0)
                    }

                    function $(e) {
                        if (e) {
                            var r = e[n];
                            if (r) return r.call(e);
                            if ("function" == typeof e.next) return e;
                            if (!isNaN(e.length)) {
                                var s = -1,
                                    a = function r() {
                                        for (; ++s < e.length;)
                                            if (i.call(e, s)) return r.value = e[s], r.done = !1, r;
                                        return r.value = t, r.done = !0, r
                                    };
                                return a.next = a
                            }
                        }
                        return {
                            next: I
                        }
                    }

                    function I() {
                        return {
                            value: t,
                            done: !0
                        }
                    }
                    return y.prototype = m, c(x, "constructor", m), c(m, "constructor", y), y.displayName = c(m, o, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === y || "GeneratorFunction" === (t.displayName || t.name))
                    }, e.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, c(e, o, "GeneratorFunction")), e.prototype = Object.create(x), e
                    }, e.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }, j(L.prototype), c(L.prototype, a, (function() {
                        return this
                    })), e.AsyncIterator = L, e.async = function(t, r, i, s, n) {
                        void 0 === n && (n = Promise);
                        var a = new L(l(t, r, i, s), n);
                        return e.isGeneratorFunction(r) ? a : a.next().then((function(e) {
                            return e.done ? e.value : a.next()
                        }))
                    }, j(x), c(x, o, "Generator"), c(x, n, (function() {
                        return this
                    })), c(x, "toString", (function() {
                        return "[object Generator]"
                    })), e.keys = function(e) {
                        var t = [];
                        for (var r in e) t.push(r);
                        return t.reverse(),
                            function r() {
                                for (; t.length;) {
                                    var i = t.pop();
                                    if (i in e) return r.value = i, r.done = !1, r
                                }
                                return r.done = !0, r
                            }
                    }, e.values = $, T.prototype = {
                        constructor: T,
                        reset: function(e) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(E), !e)
                                for (var r in this) "t" === r.charAt(0) && i.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                        },
                        stop: function() {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval
                        },
                        dispatchException: function(e) {
                            if (this.done) throw e;
                            var r = this;

                            function s(i, s) {
                                return o.type = "throw", o.arg = e, r.next = i, s && (r.method = "next", r.arg = t), !!s
                            }
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var a = this.tryEntries[n],
                                    o = a.completion;
                                if ("root" === a.tryLoc) return s("end");
                                if (a.tryLoc <= this.prev) {
                                    var c = i.call(a, "catchLoc"),
                                        l = i.call(a, "finallyLoc");
                                    if (c && l) {
                                        if (this.prev < a.catchLoc) return s(a.catchLoc, !0);
                                        if (this.prev < a.finallyLoc) return s(a.finallyLoc)
                                    } else if (c) {
                                        if (this.prev < a.catchLoc) return s(a.catchLoc, !0)
                                    } else {
                                        if (!l) throw new Error("try statement without catch or finally");
                                        if (this.prev < a.finallyLoc) return s(a.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var s = this.tryEntries[r];
                                if (s.tryLoc <= this.prev && i.call(s, "finallyLoc") && this.prev < s.finallyLoc) {
                                    var n = s;
                                    break
                                }
                            }
                            n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc && (n = null);
                            var a = n ? n.completion : {};
                            return a.type = e, a.arg = t, n ? (this.method = "next", this.next = n.finallyLoc, g) : this.complete(a)
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var r = this.tryEntries[t];
                                if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), E(r), g
                            }
                        },
                        catch: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var r = this.tryEntries[t];
                                if (r.tryLoc === e) {
                                    var i = r.completion;
                                    if ("throw" === i.type) {
                                        var s = i.arg;
                                        E(r)
                                    }
                                    return s
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(e, r, i) {
                            return this.delegate = {
                                iterator: $(e),
                                resultName: r,
                                nextLoc: i
                            }, "next" === this.method && (this.arg = t), g
                        }
                    }, e
                }(e.exports);
                try {
                    regeneratorRuntime = t
                } catch (e) {
                    "object" == typeof globalThis ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t)
                }
            },
            1611: (e, t, r) => {
                var i = {
                    "./brownie.jpg": 6905,
                    "./charlotte-aux-poires.jpg": 4999,
                    "./compote-pomme-rhubarbe.jpg": 7939,
                    "./cookies.jpg": 6552,
                    "./courgettes-farcies-au-boeuf.jpg": 1405,
                    "./creme-dessert-au-chocolat.jpg": 2626,
                    "./creme-patissiere.jpg": 2753,
                    "./crepe-chocolat-banane.jpg": 4155,
                    "./croque-monsieur-a-la-dinde.jpg": 8882,
                    "./crumble-aux-pommes.jpg": 2423,
                    "./far-breton.jpg": 6618,
                    "./fondant-au-chocolat.jpg": 375,
                    "./frangipane.jpg": 463,
                    "./galette-bretonne-saucisse-et-fromage-a-raclette.jpg": 7334,
                    "./gratin-de-pates-a-la-tomate.jpg": 2303,
                    "./houmous-express.jpg": 1866,
                    "./jardiniere-de-legumes.jpg": 4405,
                    "./lasagne-courgettes-et-chevre.jpg": 8816,
                    "./limonade-de-coco.jpg": 2047,
                    "./limonade.jpg": 3175,
                    "./mousse-au-chocolat.jpg": 9614,
                    "./mousse-au-citron.jpg": 9236,
                    "./pain-perdu.jpg": 8087,
                    "./pates-carbonara.jpg": 5598,
                    "./pizza.jpg": 7117,
                    "./poisson-cru-a-la-tahitienne.jpg": 6153,
                    "./poulet-coco-reunionnais.jpg": 33,
                    "./puree-de-carottes.jpg": 4992,
                    "./puree-de-patate-douce.jpg": 170,
                    "./puree_de_pois_casses.jpg": 9883,
                    "./quiche-lorraine.jpg": 9344,
                    "./salade-de-pates.jpg": 5038,
                    "./salade-de-riz.jpg": 9568,
                    "./salade-machee-de patates.jpg": 3004,
                    "./salade-mediteranneene-fraiche-au-chevre.jpg": 3387,
                    "./salade-tomate-mozarella-et-pommes.jpg": 3015,
                    "./sandwich-au-saumon-fume.jpg": 5342,
                    "./shake-banane-kiwi.jpg": 5496,
                    "./smoothie-a-la-fraise.jpg": 3969,
                    "./smoothie-ananas-et-vanille.jpg": 6623,
                    "./smoothie-tropical.jpg": 4374,
                    "./soupe-a-l-oseille.jpg": 5543,
                    "./soupe-de-poirreaux.jpg": 7599,
                    "./soupe-de-tomates.jpg": 6735,
                    "./spaghettis-a-la-bolognaise.jpg": 3411,
                    "./tarte-au-citron.jpg": 2232,
                    "./tarte-au-thon.jpg": 7597,
                    "./tarte-aux-pommes.jpg": 2397,
                    "./tartelette-au-chocolat-et-aux-fraises.jpg": 4785,
                    "./tartiflette.jpg": 5795
                };

                function s(e) {
                    var t = n(e);
                    return r(t)
                }

                function n(e) {
                    if (!r.o(i, e)) {
                        var t = new Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND", t
                    }
                    return i[e]
                }
                s.keys = function() {
                    return Object.keys(i)
                }, s.resolve = n, e.exports = s, s.id = 1611
            },
            7947: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/clock.svg"
            },
            6905: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/brownie.jpg"
            },
            4999: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/charlotte-aux-poires.jpg"
            },
            7939: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/compote-pomme-rhubarbe.jpg"
            },
            6552: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/cookies.jpg"
            },
            1405: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/courgettes-farcies-au-boeuf.jpg"
            },
            2626: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/creme-dessert-au-chocolat.jpg"
            },
            2753: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/creme-patissiere.jpg"
            },
            4155: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/crepe-chocolat-banane.jpg"
            },
            8882: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/croque-monsieur-a-la-dinde.jpg"
            },
            2423: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/crumble-aux-pommes.jpg"
            },
            6618: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/far-breton.jpg"
            },
            375: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/fondant-au-chocolat.jpg"
            },
            463: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/frangipane.jpg"
            },
            7334: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/galette-bretonne-saucisse-et-fromage-a-raclette.jpg"
            },
            2303: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/gratin-de-pates-a-la-tomate.jpg"
            },
            1866: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/houmous-express.jpg"
            },
            4405: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/jardiniere-de-legumes.jpg"
            },
            8816: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/lasagne-courgettes-et-chevre.jpg"
            },
            2047: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/limonade-de-coco.jpg"
            },
            3175: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/limonade.jpg"
            },
            9614: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/mousse-au-chocolat.jpg"
            },
            9236: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/mousse-au-citron.jpg"
            },
            8087: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/pain-perdu.jpg"
            },
            5598: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/pates-carbonara.jpg"
            },
            7117: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/pizza.jpg"
            },
            6153: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/poisson-cru-a-la-tahitienne.jpg"
            },
            33: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/poulet-coco-reunionnais.jpg"
            },
            4992: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/puree-de-carottes.jpg"
            },
            170: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/puree-de-patate-douce.jpg"
            },
            9883: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/puree_de_pois_casses.jpg"
            },
            9344: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/quiche-lorraine.jpg"
            },
            5038: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/salade-de-pates.jpg"
            },
            9568: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/salade-de-riz.jpg"
            },
            3004: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/salade-machee-de patates.jpg"
            },
            3387: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/salade-mediteranneene-fraiche-au-chevre.jpg"
            },
            3015: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/salade-tomate-mozarella-et-pommes.jpg"
            },
            5342: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/sandwich-au-saumon-fume.jpg"
            },
            5496: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/shake-banane-kiwi.jpg"
            },
            3969: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/smoothie-a-la-fraise.jpg"
            },
            6623: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/smoothie-ananas-et-vanille.jpg"
            },
            4374: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/smoothie-tropical.jpg"
            },
            5543: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/soupe-a-l-oseille.jpg"
            },
            7599: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/soupe-de-poirreaux.jpg"
            },
            6735: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/soupe-de-tomates.jpg"
            },
            3411: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/spaghettis-a-la-bolognaise.jpg"
            },
            2232: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/tarte-au-citron.jpg"
            },
            7597: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/tarte-au-thon.jpg"
            },
            2397: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/tarte-aux-pommes.jpg"
            },
            4785: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/tartelette-au-chocolat-et-aux-fraises.jpg"
            },
            5795: (e, t, r) => {
                "use strict";
                e.exports = r.p + "assets/tartiflette.jpg"
            },
            2649: (e, t, r) => {
                "use strict";
                e.exports = r.p + "data/receipts.json"
            }
        },
        t = {};

    function r(i) {
        var s = t[i];
        if (void 0 !== s) return s.exports;
        var n = t[i] = {
            exports: {}
        };
        return e[i](n, n.exports, r), n.exports
    }
    r.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, {
            a: t
        }), t
    }, r.d = (e, t) => {
        for (var i in t) r.o(t, i) && !r.o(e, i) && Object.defineProperty(e, i, {
            enumerable: !0,
            get: t[i]
        })
    }, r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        var e;
        r.g.importScripts && (e = r.g.location + "");
        var t = r.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var i = t.getElementsByTagName("script");
            i.length && (e = i[i.length - 1].src)
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), r.p = e + "../"
    })(), (() => {
        "use strict";

        function e(e, t, r, i, s, n, a) {
            try {
                var o = e[n](a),
                    c = o.value
            } catch (e) {
                return void r(e)
            }
            o.done ? t(c) : Promise.resolve(c).then(i, s)
        }

        function t(t) {
            return function() {
                var r = this,
                    i = arguments;
                return new Promise((function(s, n) {
                    var a = t.apply(r, i);

                    function o(t) {
                        e(a, s, n, o, c, "next", t)
                    }

                    function c(t) {
                        e(a, s, n, o, c, "throw", t)
                    }
                    o(void 0)
                }))
            }
        }
        var i = r(7757),
            s = r.n(i);

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function o(e, t, r) {
            return t && a(e.prototype, t), r && a(e, r), Object.defineProperty(e, "prototype", {
                writable: !1
            }), e
        }
        var c = function() {
            function e(t) {
                n(this, e), this._url = t
            }
            var r;
            return o(e, [{
                key: "getAllReceipts",
                value: (r = t(s().mark((function e() {
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", fetch(this._url).then((function(e) {
                                    return e.json()
                                })).then((function(e) {
                                    return e.receipts
                                })).catch((function(e) {
                                    throw new Error("La requete getAllReceipts api a échoué : ", e)
                                })));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function() {
                    return r.apply(this, arguments)
                })
            }]), e
        }();

        function l(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
            return i
        }

        function p(e) {
            return function(e) {
                if (Array.isArray(e)) return l(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return l(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? l(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function u(e) {
            var t = e.toLowerCase();
            return t = (t = (t = (t = (t = t.replace(/[éèêë]/g, "e")).replace(/[àâ]/g, "a")).replace(/[ùû]/g, "u")).replace(/[îï]/g, "i")).replace(/[ç]/g, "c")
        }
        var h = function() {
                function e(t, r, i, s, a, o) {
                    n(this, e), this._label = t, this._category = r, this._placeholder = i, this._color = s, this._items = a, this._tag = o, this.$wrapperFiltersList = document.querySelector('[data-wrapper="filters"]'), this.$wrapperFilter = null, this.$wrapperNoResult = this._createNoResultHTML(), this.expandFilter = this.expandFilter.bind(this), this.openFilter = this.openFilter.bind(this), this.ariaControlInit = this.ariaControlInit.bind(this), this.closeFilter = this.closeFilter.bind(this), this._searchFilter = this._searchFilter.bind(this)
                }
                return o(e, [{
                    key: "filterHTMLComponent",
                    get: function() {
                        return this.$wrapperFilter
                    }
                }, {
                    key: "createFilterHtml",
                    value: function() {
                        this.$wrapperFilter = document.createElement("div"), this.$wrapperFilter.classList.add("filter", "bg-".concat(this._color), "rounded", "p-0", "me-3", "col-auto"), this.$wrapperFilter.dataset.label = this._label, this.$wrapperFilter.dataset.placeholder = this._placeholder, this.$wrapperFilter.tabIndex = "0", this.$wrapperFilter.ariaLabel = this._placeholder, this.$wrapperFilter.ariaExpanded = !1, this.$wrapperFilter.setAttribute("role", "listbox"), this.$wrapperFilter.innerHTML = '<input tabindex="-1" class="filter__input form-control border-0 bg-'.concat(this._color, ' text-white py-3 px-4" type="text" name="').concat(u(this._label), '" aria-label="').concat(this._label, '" id="').concat(u(this._label), '" placeholder="').concat(this._label, '" />'), this.updateFilterResultHtml(this._items), this.$wrapperFilter.querySelector("input").addEventListener("input", this._searchFilter), this.$wrapperFiltersList.appendChild(this.$wrapperFilter)
                    }
                }, {
                    key: "updateFilterResultHtml",
                    value: function(e) {
                        var t = this;
                        this._items = e, 0 === this._items.length ? (this.$wrapperFilter.classList.add("disabled"), this.$wrapperFilter.tabIndex = -1) : (this.$wrapperFilter.classList.remove("disabled"), this.$wrapperFilter.tabIndex = 0);
                        var r = document.createElement("ul");
                        r.classList.add("row", "filter__result", "flex-wrap", "m-0", "p-3", "pt-0", "list-unstyled", "text-white", "fs-6"), r.setAttribute("role", "listbox"), r.tabIndex = "-1";
                        var i = "";
                        this._items.forEach((function(e) {
                            i += '<li class="filter__item col-4  col-sm-6 col-md-4" role="option" tabindex="0" aria-label="'.concat(e, '" data-color="').concat(t._color, '" data-category="').concat(t._category, '">').concat(e, "</li>")
                        })), r.innerHTML = i, this.$wrapperFilter.querySelector("ul") && this.$wrapperFilter.querySelector("ul").remove(), this.$wrapperFilter.appendChild(r), this.$listItems = Array.from(this.$wrapperFilter.querySelectorAll(".filter__item"))
                    }
                }, {
                    key: "expandFilter",
                    value: function(e) {
                        e.stopPropagation(), e.target.classList.contains("filter") && (this.$wrapperFilter.classList.contains("filter--active") ? (this.$wrapperFilter.ariaExpanded = !1, this.closeFilter()) : (this.$wrapperFilter.ariaExpanded = !0, this.openFilter()))
                    }
                }, {
                    key: "openFilter",
                    value: function() {
                        this.$wrapperFilter.classList.add("filter--active"), this.$wrapperFilter.querySelector("input").placeholder = this._placeholder
                    }
                }, {
                    key: "closeFilter",
                    value: function() {
                        this.$wrapperFilter.classList.contains("filter--active") && (this.$wrapperFilter.classList.remove("filter--active"), this.$wrapperFilter.querySelector("input").placeholder = this._label, this.$wrapperFilter.querySelector("input").value = "", this.$wrapperFilter.querySelectorAll(".filter__item").forEach((function(e) {
                            e.style.display = "block"
                        })), this.$wrapperNoResult.remove())
                    }
                }, {
                    key: "ariaControlInit",
                    value: function(e) {
                        var t = this,
                            r = 0;
                        this.$wrapperFilter.addEventListener("keydown", (function(i) {
                            if (t.$wrapperFilter.classList.contains("filter--active")) switch (i.key) {
                                case "Tab":
                                    t.$wrapperFilter.ariaExpanded = !1, t.closeFilter();
                                    break;
                                case "Escape":
                                    document.activeElement === t.$wrapperFilter.querySelector("input") ? (t.$wrapperFilter.ariaExpanded = !1, t.$wrapperFilter.focus(), t.closeFilter(), t.$wrapperFilter.focus()) : (t.$wrapperFilter.querySelector("input").focus(), r = -1);
                                    break;
                                case "ArrowUp":
                                    i.preventDefault(), -1 === r && (r = t.$listItems.length - 1), t.$listItems[r].focus(), r--;
                                    break;
                                case "ArrowDown":
                                    i.preventDefault(), r === t.$listItems.length - 1 && (r = -1), r++, t.$listItems[r].focus();
                                    break;
                                case "Enter":
                                    i.preventDefault(), t.$listItems.includes(document.activeElement) && e(i)
                            } else " " !== i.key && "Enter" !== i.key || (i.preventDefault(), r = -1, t.$wrapperFilter.ariaExpanded = !0, t.openFilter(), t.$wrapperFilter.querySelector("input").focus())
                        }))
                    }
                }, {
                    key: "_searchFilter",
                    value: function(e) {
                        var t = this,
                            r = e.target.value,
                            i = [];
                        this.$listItems = [], e.target.parentNode.querySelectorAll(".filter__item").forEach((function(e) {
                            u(e.innerHTML).includes(u(r)) ? (e.style.display = "block", t.$listItems.push(e), i.push(e)) : e.style.display = "none"
                        })), 0 === i.length ? this.$wrapperFilter.appendChild(this.$wrapperNoResult) : this.$wrapperNoResult && this.$wrapperNoResult.remove()
                    }
                }, {
                    key: "_createNoResultHTML",
                    value: function() {
                        var e = document.createElement("p");
                        return e.classList.add("filter__result", "no-result", "m-0", "p-3", "pt-0", "text-white", "fs-6"), e.innerHTML = "Aucun résultat", e
                    }
                }]), e
            }(),
            f = function() {
                function e() {
                    n(this, e), this._listTags = [], this.$wrapperTags = document.querySelector('[data-wrapper="tags"]'), this.addTag = this.addTag.bind(this), this.removeTag = this.removeTag.bind(this), this.ariaControlInit = this.ariaControlInit.bind(this)
                }
                return o(e, [{
                    key: "listTags",
                    get: function() {
                        return this._listTags
                    }
                }, {
                    key: "addTag",
                    value: function(e) {
                        this._listTags.push({
                            value: e.innerHTML,
                            category: e.dataset.category
                        });
                        var t, r = this._createTagHtmlContent(e);
                        return this.$wrapperTags.querySelector("ul") ? t = this.$wrapperTags.querySelector("ul") : (t = this._createTagsHtmlContainer(), this.$wrapperTags.appendChild(t)), t.appendChild(r), r
                    }
                }, {
                    key: "removeTag",
                    value: function(e) {
                        this._listTags = this._listTags.filter((function(t) {
                            return !(t.value === e.innerHTML && t.category === e.dataset.category)
                        })), 0 === this._listTags.length && this.$wrapperTags.querySelector("ul").remove(), e.remove()
                    }
                }, {
                    key: "ariaControlInit",
                    value: function(e) {
                        this.$wrapperTags.addEventListener("keydown", (function(t) {
                            "Enter" === t.key && document.activeElement.classList.contains("tags__item") && (t.preventDefault(), e(t))
                        }))
                    }
                }, {
                    key: "_createTagsHtmlContainer",
                    value: function() {
                        var e = document.createElement("ul");
                        return e.classList.add("m-0", "p-0", "d-flex", "flex-row", "flex-wrap"), e.id = "tags__list", e
                    }
                }, {
                    key: "_createTagHtmlContent",
                    value: function(e) {
                        var t = e.dataset.color,
                            r = document.createElement("li");
                        return r.classList.add("tags__item", "mb-2", "me-2", "px-3", "py-2", "pe-5", "badge", "tag", "bg-".concat(t), "d-flex", "flex-row", "align-items-center"), r.innerHTML = e.innerHTML, r.dataset.category = e.dataset.category, r.tabIndex = "0", r
                    }
                }]), e
            }(),
            d = r(7947),
            g = function() {
                function e(t) {
                    n(this, e), this._data = t, this.$wrapperReceipts = document.querySelector('[data-wrapper="receipts"]'), this._receiptsList = [], this._listIngredients = [], this._listAppliances = [], this._listUstensils = [], this._initReceiptsObjects()
                }
                return o(e, [{
                    key: "receiptsList",
                    get: function() {
                        return this._receiptsList
                    }
                }, {
                    key: "ingredients",
                    get: function() {
                        return this._listIngredients
                    }
                }, {
                    key: "appliances",
                    get: function() {
                        return this._listAppliances
                    }
                }, {
                    key: "ustensils",
                    get: function() {
                        return this._listUstensils
                    }
                }, {
                    key: "createHTMLContent",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._receiptsList;
                        if (this.$wrapperReceipts.querySelector("#result") && this.$wrapperReceipts.querySelector("#result").remove(), 0 === e.length) this.$wrapperReceipts.innerHTML = '<p id="result" class="m-4 text-secondary">Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.</p>';
                        else {
                            var t = this.createHTMLContainer(),
                                r = 0;
                            e.forEach((function(e) {
                                t.append(e.createHTMLComponent(r)), r++
                            })), this.$wrapperReceipts.append(t)
                        }
                    }
                }, {
                    key: "createHTMLContainer",
                    value: function() {
                        var e = document.createElement("ul");
                        return e.classList.add("row", "justify-content-start", "m-0", "p-0", "list-unstyled"), e.id = "result", e
                    }
                }, {
                    key: "_initReceiptsObjects",
                    value: function() {
                        var e = this;
                        this._data.forEach((function(t) {
                            var r = new v(t);
                            e._receiptsList.push(r), e._listAppliances.push(r.appliance), e._listUstensils = e._listUstensils.concat(r.ustensils), e._listIngredients = e._listIngredients.concat(r.ingredients)
                        })), this._listAppliances = p(new Set(this._listAppliances)), this._listUstensils = p(new Set(this._listUstensils)), this._listIngredients = p(new Set(this._listIngredients))
                    }
                }]), e
            }(),
            v = function() {
                function e(t) {
                    n(this, e), this._id = t.id, this._name = t.name, this._servings = t.servings, this._time = t.time, this._image = t.image, this._description = t.description, this._ustensils = t.ustensils, this._ingredients = t.ingredients, this._appliance = t.appliance
                }
                return o(e, [{
                    key: "name",
                    get: function() {
                        return this._name
                    }
                }, {
                    key: "appliance",
                    get: function() {
                        return this._appliance
                    }
                }, {
                    key: "ustensils",
                    get: function() {
                        return this._ustensils
                    }
                }, {
                    key: "description",
                    get: function() {
                        return this._description
                    }
                }, {
                    key: "ingredients",
                    get: function() {
                        var e = [];
                        return this._ingredients.forEach((function(t) {
                            e.push(t.ingredient)
                        })), e
                    }
                }, {
                    key: "keywordsIngredients",
                    get: function() {
                        return u(this.ingredients.join("+")).split("+")
                    }
                }, {
                    key: "keywordsUstensils",
                    get: function() {
                        return u(this._ustensils.join("+")).split("+")
                    }
                }, {
                    key: "createHTMLComponent",
                    value: function(e) {
                        var t = document.createElement("li");
                        t.classList.add("col-xl-4", "col-md-6", "col-sm-12", "box", "px-4", "p-0", "mb-5");
                        var i = '\n      <article tabindex="0" class="card card--reveal'.concat(e, ' border-0 bg-light">\n        <img class="card-img-top" src="').concat(r(1611)("./" + this._image), '" alt="').concat(this._name, '" />\n        <div class="card-body" tabindex="0">\n          <div class="d-flex flex-row mt-2 mb-4 justify-content-between gap-2 ">\n            <h2 class="card-title col">').concat(this._name, '</h2>\n            <div class="col-4 d-flex flex-row align-items-center justify-content-end">\n              <svg class="me-2" width="20" height="20">\n                <use xlink:href="').concat(d, '#clock"/>\n              </svg>\n              <h3 class="card-subtitle">').concat(this._time, ' min</h3>\n            </div>\n          </div>\n          <div class="ingredients d-flex flex-row justify-content-between gap-2">\n            <p class="card-text col-6 m-0">').concat(this._description, "</p>\n          </div>\n        </div>\n      </article>\n    ");
                        return t.innerHTML = i, t.querySelector(".ingredients").prepend(this._createHTMLIngredients()), t
                    }
                }, {
                    key: "_createHTMLIngredients",
                    value: function() {
                        var e = document.createElement("ul");
                        e.classList.add("col-6");
                        var t = "";
                        return this._ingredients.forEach((function(e) {
                            t += "<li><strong>".concat(e.ingredient, " ").concat(e.quantity || e.unit ? ":" : "", "</strong> ").concat(e.quantity ? e.quantity : "", " ").concat(e.unit ? e.unit : "", "</li>")
                        })), e.innerHTML = t, e
                    }
                }]), e
            }();

        function y(e, t) {
            var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!r) {
                if (Array.isArray(e) || (r = function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return m(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r && e.constructor && (r = e.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return m(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                    r && (e = r);
                    var i = 0,
                        s = function() {};
                    return {
                        s,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: s
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var n, a = !0,
                o = !1;
            return {
                s: function() {
                    r = r.call(e)
                },
                n: function() {
                    var e = r.next();
                    return a = e.done, e
                },
                e: function(e) {
                    o = !0, n = e
                },
                f: function() {
                    try {
                        a || null == r.return || r.return()
                    } finally {
                        if (o) throw n
                    }
                }
            }
        }

        function m(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
            return i
        }
        var _ = function() {
                function e(t) {
                    n(this, e), this._data = t, this.$searchInput = document.querySelector("#search input"), this._tag = new f, this._receipts = new g(this._data), this._filterIngredients = new h("Ingrédients", "ingredients", "Rechercher un ingrédient", "blue", this._receipts.ingredients, this._tag), this._filterAppliances = new h("Appareils", "appliances", "Rechercher un appareil", "green", this._receipts.appliances, this._tag), this._filterUstensils = new h("Ustensiles", "ustensils", "Rechercher un ustensile", "red", this._receipts.ustensils, this._tag), this.search = this.search.bind(this), this.filtersClose = this.filtersClose.bind(this), this.displayResult = this.displayResult.bind(this), this.updateFiltersList = this.updateFiltersList.bind(this), this._addTagEvent = this._addTagEvent.bind(this), this._removeTagEvent = this._removeTagEvent.bind(this)
                }
                return o(e, [{
                    key: "init",
                    value: function() {
                        this._receipts.createHTMLContent(), this._filterIngredients.createFilterHtml(), this._filterAppliances.createFilterHtml(), this._filterUstensils.createFilterHtml(), this._filterIngredients.ariaControlInit(this._addTagEvent), this._filterAppliances.ariaControlInit(this._addTagEvent), this._filterUstensils.ariaControlInit(this._addTagEvent), this._filterEventInit(), this._tagEventInit(), this.$searchInput.addEventListener("input", this.search), this._tag.ariaControlInit(this._removeTagEvent)
                    }
                }, {
                    key: "displayResult",
                    value: function(e) {
                        this.updateFiltersList(e), this._receipts.createHTMLContent(e), this._tagEventInit()
                    }
                }, {
                    key: "search",
                    value: function() {
                        var e = u(this.$searchInput.value.replace(/\s+/g, "+")).split("+"),
                            t = [];
                        if (t = this.$searchInput.value.length >= 3 ? (t = (t = (t = (t = t.concat(this._searchByTitle(e, this._receipts.receiptsList))).concat(this._searchByDescription(e, this._receipts.receiptsList))).concat(this._searchByAppliance(e, this._receipts.receiptsList))).concat(this._searchByIngredients(e, this._receipts.receiptsList))).concat(this._searchByUstensils(e, this._receipts.receiptsList)) : this._receipts.receiptsList, this._tag.listTags.length > 0) {
                            var r, i = y(this._tag.listTags);
                            try {
                                for (i.s(); !(r = i.n()).done;) {
                                    var s = r.value,
                                        n = [u(s.value)];
                                    switch (s.category) {
                                        case "ingredients":
                                            t = this._searchByIngredients(n, t);
                                            break;
                                        case "appliances":
                                            t = this._searchByAppliance(n, t);
                                            break;
                                        case "ustensils":
                                            t = this._searchByUstensils(n, t)
                                    }
                                }
                            } catch (e) {
                                i.e(e)
                            } finally {
                                i.f()
                            }
                        }
                        t = p(new Set(t)), this.displayResult(t)
                    }
                }, {
                    key: "updateFiltersList",
                    value: function(e) {
                        var t, r = [],
                            i = [],
                            s = [],
                            n = y(e);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var a = t.value;
                                r.push(a.appliance), i = i.concat(a.ingredients), s = s.concat(a.ustensils);
                                var o, c = y(this._tag.listTags);
                                try {
                                    for (c.s(); !(o = c.n()).done;) {
                                        var l = o.value;
                                        switch (l.category) {
                                            case "ingredients":
                                                i.splice(i.indexOf(l.value), 1);
                                                break;
                                            case "ustensils":
                                                s.splice(s.indexOf(l.value), 1);
                                                break;
                                            case "appliances":
                                                r.splice(r.indexOf(l.value), 1)
                                        }
                                    }
                                } catch (e) {
                                    c.e(e)
                                } finally {
                                    c.f()
                                }
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                        r = p(new Set(r)), i = p(new Set(i)), s = p(new Set(s)), this._filterIngredients.updateFilterResultHtml(i), this._filterAppliances.updateFilterResultHtml(r), this._filterUstensils.updateFilterResultHtml(s)
                    }
                }, {
                    key: "filtersClose",
                    value: function() {
                        this._filterIngredients.closeFilter(), this._filterAppliances.closeFilter(), this._filterUstensils.closeFilter()
                    }
                }, {
                    key: "_searchByTitle",
                    value: function(e, t) {
                        var r, i = [],
                            s = e.join(" "),
                            n = y(t);
                        try {
                            for (n.s(); !(r = n.n()).done;) {
                                var a = r.value;
                                u(a.name).includes(s) && i.push(a)
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                        return i
                    }
                }, {
                    key: "_searchByDescription",
                    value: function(e, t) {
                        var r, i = [],
                            s = e.join(" "),
                            n = y(t);
                        try {
                            for (n.s(); !(r = n.n()).done;) {
                                var a = r.value;
                                u(a.description).includes(s) && i.push(a)
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                        return i
                    }
                }, {
                    key: "_searchByIngredients",
                    value: function(e, t) {
                        var r, i = [],
                            s = y(e);
                        try {
                            for (s.s(); !(r = s.n()).done;) {
                                var n, a = r.value,
                                    o = y(t);
                                try {
                                    for (o.s(); !(n = o.n()).done;) {
                                        var c, l = n.value,
                                            p = y(l.keywordsIngredients);
                                        try {
                                            for (p.s(); !(c = p.n()).done;) {
                                                c.value.includes(a) && a.length >= 3 && i.push(l)
                                            }
                                        } catch (e) {
                                            p.e(e)
                                        } finally {
                                            p.f()
                                        }
                                    }
                                } catch (e) {
                                    o.e(e)
                                } finally {
                                    o.f()
                                }
                            }
                        } catch (e) {
                            s.e(e)
                        } finally {
                            s.f()
                        }
                        return i
                    }
                }, {
                    key: "_searchByAppliance",
                    value: function(e, t) {
                        var r, i = [],
                            s = e.join(" "),
                            n = y(t);
                        try {
                            for (n.s(); !(r = n.n()).done;) {
                                var a = r.value;
                                u(a.appliance).includes(s) && i.push(a)
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                        return i
                    }
                }, {
                    key: "_searchByUstensils",
                    value: function(e, t) {
                        var r, i = [],
                            s = y(e);
                        try {
                            for (s.s(); !(r = s.n()).done;) {
                                var n, a = r.value,
                                    o = y(t);
                                try {
                                    for (o.s(); !(n = o.n()).done;) {
                                        var c, l = n.value,
                                            p = y(l.keywordsUstensils);
                                        try {
                                            for (p.s(); !(c = p.n()).done;) {
                                                c.value.includes(a) && a.length >= 3 && i.push(l)
                                            }
                                        } catch (e) {
                                            p.e(e)
                                        } finally {
                                            p.f()
                                        }
                                    }
                                } catch (e) {
                                    o.e(e)
                                } finally {
                                    o.f()
                                }
                            }
                        } catch (e) {
                            s.e(e)
                        } finally {
                            s.f()
                        }
                        return i
                    }
                }, {
                    key: "_addTagEvent",
                    value: function(e) {
                        this._tag.addTag(e.target).addEventListener("click", this._removeTagEvent), this.filtersClose(), this.search()
                    }
                }, {
                    key: "_removeTagEvent",
                    value: function(e) {
                        this.filtersClose(), this._tag.removeTag(e.target), this.search()
                    }
                }, {
                    key: "_filterEventInit",
                    value: function() {
                        var e = this;
                        this._filterIngredients.filterHTMLComponent.addEventListener("click", (function(t) {
                            e._filterAppliances.closeFilter(), e._filterUstensils.closeFilter(), e._filterIngredients.expandFilter(t)
                        })), this._filterAppliances.filterHTMLComponent.addEventListener("click", (function(t) {
                            e._filterIngredients.closeFilter(), e._filterUstensils.closeFilter(), e._filterAppliances.expandFilter(t)
                        })), this._filterUstensils.filterHTMLComponent.addEventListener("click", (function(t) {
                            e._filterIngredients.closeFilter(), e._filterAppliances.closeFilter(), e._filterUstensils.expandFilter(t)
                        })), document.querySelector("body").addEventListener("click", this.filtersClose)
                    }
                }, {
                    key: "_tagEventInit",
                    value: function() {
                        var e = this;
                        this._filterIngredients.filterHTMLComponent.querySelectorAll(".filter__item").forEach((function(t) {
                            t.addEventListener("click", e._addTagEvent)
                        })), this._filterAppliances.filterHTMLComponent.querySelectorAll(".filter__item").forEach((function(t) {
                            t.addEventListener("click", e._addTagEvent)
                        })), this._filterUstensils.filterHTMLComponent.querySelectorAll(".filter__item").forEach((function(t) {
                            t.addEventListener("click", e._addTagEvent)
                        }))
                    }
                }]), e
            }(),
            w = r(2649);

        function b() {
            return (b = t(s().mark((function e() {
                var t, r;
                return s().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return t = new c(w), e.next = 3, t.getAllReceipts();
                        case 3:
                            r = e.sent, new _(r).init();
                        case 6:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }! function() {
            b.apply(this, arguments)
        }()
    })()
})();
//# sourceMappingURL=app_a134981f.js.map