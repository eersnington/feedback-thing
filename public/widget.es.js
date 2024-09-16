// @ts-nocheck

function Nm(e, r) {
  for (var n = 0; n < r.length; n++) {
    const o = r[n];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const s in o)
        if (s !== "default" && !(s in e)) {
          const l = Object.getOwnPropertyDescriptor(o, s);
          l &&
            Object.defineProperty(
              e,
              s,
              l.get
                ? l
                : {
                    enumerable: !0,
                    get: () => o[s],
                  },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
function Lp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Tp = { exports: {} },
  yo = {},
  wu = { exports: {} },
  yA = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ag;
function Mm() {
  if (Ag) return yA;
  Ag = 1;
  var e = Symbol.for("react.element"),
    r = Symbol.for("react.portal"),
    n = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    l = Symbol.for("react.provider"),
    c = Symbol.for("react.context"),
    f = Symbol.for("react.forward_ref"),
    B = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    w = Symbol.for("react.lazy"),
    h = Symbol.iterator;
  function v(H) {
    return H === null || typeof H != "object"
      ? null
      : ((H = (h && H[h]) || H["@@iterator"]),
        typeof H == "function" ? H : null);
  }
  var U = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Q = Object.assign,
    m = {};
  function F(H, N, cA) {
    (this.props = H),
      (this.context = N),
      (this.refs = m),
      (this.updater = cA || U);
  }
  (F.prototype.isReactComponent = {}),
    (F.prototype.setState = function (H, N) {
      if (typeof H != "object" && typeof H != "function" && H != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, H, N, "setState");
    }),
    (F.prototype.forceUpdate = function (H) {
      this.updater.enqueueForceUpdate(this, H, "forceUpdate");
    });
  function E() {}
  E.prototype = F.prototype;
  function I(H, N, cA) {
    (this.props = H),
      (this.context = N),
      (this.refs = m),
      (this.updater = cA || U);
  }
  var R = (I.prototype = new E());
  (R.constructor = I), Q(R, F.prototype), (R.isPureReactComponent = !0);
  var T = Array.isArray,
    k = Object.prototype.hasOwnProperty,
    O = { current: null },
    M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function X(H, N, cA) {
    var fA,
      wA = {},
      hA = null,
      $ = null;
    if (N != null)
      for (fA in (N.ref !== void 0 && ($ = N.ref),
      N.key !== void 0 && (hA = "" + N.key),
      N))
        k.call(N, fA) && !M.hasOwnProperty(fA) && (wA[fA] = N[fA]);
    var BA = arguments.length - 2;
    if (BA === 1) wA.children = cA;
    else if (1 < BA) {
      for (var CA = Array(BA), QA = 0; QA < BA; QA++)
        CA[QA] = arguments[QA + 2];
      wA.children = CA;
    }
    if (H && H.defaultProps)
      for (fA in ((BA = H.defaultProps), BA))
        wA[fA] === void 0 && (wA[fA] = BA[fA]);
    return {
      $$typeof: e,
      type: H,
      key: hA,
      ref: $,
      props: wA,
      _owner: O.current,
    };
  }
  function z(H, N) {
    return {
      $$typeof: e,
      type: H.type,
      key: N,
      ref: H.ref,
      props: H.props,
      _owner: H._owner,
    };
  }
  function nA(H) {
    return typeof H == "object" && H !== null && H.$$typeof === e;
  }
  function dA(H) {
    var N = { "=": "=0", ":": "=2" };
    return (
      "$" +
      H.replace(/[=:]/g, function (cA) {
        return N[cA];
      })
    );
  }
  var V = /\/+/g;
  function q(H, N) {
    return typeof H == "object" && H !== null && H.key != null
      ? dA("" + H.key)
      : N.toString(36);
  }
  function rA(H, N, cA, fA, wA) {
    var hA = typeof H;
    (hA === "undefined" || hA === "boolean") && (H = null);
    var $ = !1;
    if (H === null) $ = !0;
    else
      switch (hA) {
        case "string":
        case "number":
          $ = !0;
          break;
        case "object":
          switch (H.$$typeof) {
            case e:
            case r:
              $ = !0;
          }
      }
    if ($)
      return (
        ($ = H),
        (wA = wA($)),
        (H = fA === "" ? "." + q($, 0) : fA),
        T(wA)
          ? ((cA = ""),
            H != null && (cA = H.replace(V, "$&/") + "/"),
            rA(wA, N, cA, "", function (QA) {
              return QA;
            }))
          : wA != null &&
            (nA(wA) &&
              (wA = z(
                wA,
                cA +
                  (!wA.key || ($ && $.key === wA.key)
                    ? ""
                    : ("" + wA.key).replace(V, "$&/") + "/") +
                  H,
              )),
            N.push(wA)),
        1
      );
    if ((($ = 0), (fA = fA === "" ? "." : fA + ":"), T(H)))
      for (var BA = 0; BA < H.length; BA++) {
        hA = H[BA];
        var CA = fA + q(hA, BA);
        $ += rA(hA, N, cA, CA, wA);
      }
    else if (((CA = v(H)), typeof CA == "function"))
      for (H = CA.call(H), BA = 0; !(hA = H.next()).done; )
        (hA = hA.value), (CA = fA + q(hA, BA++)), ($ += rA(hA, N, cA, CA, wA));
    else if (hA === "object")
      throw (
        ((N = String(H)),
        Error(
          "Objects are not valid as a React child (found: " +
            (N === "[object Object]"
              ? "object with keys {" + Object.keys(H).join(", ") + "}"
              : N) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    return $;
  }
  function uA(H, N, cA) {
    if (H == null) return H;
    var fA = [],
      wA = 0;
    return (
      rA(H, fA, "", "", function (hA) {
        return N.call(cA, hA, wA++);
      }),
      fA
    );
  }
  function aA(H) {
    if (H._status === -1) {
      var N = H._result;
      (N = N()),
        N.then(
          function (cA) {
            (H._status === 0 || H._status === -1) &&
              ((H._status = 1), (H._result = cA));
          },
          function (cA) {
            (H._status === 0 || H._status === -1) &&
              ((H._status = 2), (H._result = cA));
          },
        ),
        H._status === -1 && ((H._status = 0), (H._result = N));
    }
    if (H._status === 1) return H._result.default;
    throw H._result;
  }
  var Z = { current: null },
    P = { transition: null },
    j = {
      ReactCurrentDispatcher: Z,
      ReactCurrentBatchConfig: P,
      ReactCurrentOwner: O,
    };
  function Y() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (yA.Children = {
      map: uA,
      forEach: function (H, N, cA) {
        uA(
          H,
          function () {
            N.apply(this, arguments);
          },
          cA,
        );
      },
      count: function (H) {
        var N = 0;
        return (
          uA(H, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (H) {
        return (
          uA(H, function (N) {
            return N;
          }) || []
        );
      },
      only: function (H) {
        if (!nA(H))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return H;
      },
    }),
    (yA.Component = F),
    (yA.Fragment = n),
    (yA.Profiler = s),
    (yA.PureComponent = I),
    (yA.StrictMode = o),
    (yA.Suspense = B),
    (yA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j),
    (yA.act = Y),
    (yA.cloneElement = function (H, N, cA) {
      if (H == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            H +
            ".",
        );
      var fA = Q({}, H.props),
        wA = H.key,
        hA = H.ref,
        $ = H._owner;
      if (N != null) {
        if (
          (N.ref !== void 0 && ((hA = N.ref), ($ = O.current)),
          N.key !== void 0 && (wA = "" + N.key),
          H.type && H.type.defaultProps)
        )
          var BA = H.type.defaultProps;
        for (CA in N)
          k.call(N, CA) &&
            !M.hasOwnProperty(CA) &&
            (fA[CA] = N[CA] === void 0 && BA !== void 0 ? BA[CA] : N[CA]);
      }
      var CA = arguments.length - 2;
      if (CA === 1) fA.children = cA;
      else if (1 < CA) {
        BA = Array(CA);
        for (var QA = 0; QA < CA; QA++) BA[QA] = arguments[QA + 2];
        fA.children = BA;
      }
      return {
        $$typeof: e,
        type: H.type,
        key: wA,
        ref: hA,
        props: fA,
        _owner: $,
      };
    }),
    (yA.createContext = function (H) {
      return (
        (H = {
          $$typeof: c,
          _currentValue: H,
          _currentValue2: H,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (H.Provider = { $$typeof: l, _context: H }),
        (H.Consumer = H)
      );
    }),
    (yA.createElement = X),
    (yA.createFactory = function (H) {
      var N = X.bind(null, H);
      return (N.type = H), N;
    }),
    (yA.createRef = function () {
      return { current: null };
    }),
    (yA.forwardRef = function (H) {
      return { $$typeof: f, render: H };
    }),
    (yA.isValidElement = nA),
    (yA.lazy = function (H) {
      return { $$typeof: w, _payload: { _status: -1, _result: H }, _init: aA };
    }),
    (yA.memo = function (H, N) {
      return { $$typeof: g, type: H, compare: N === void 0 ? null : N };
    }),
    (yA.startTransition = function (H) {
      var N = P.transition;
      P.transition = {};
      try {
        H();
      } finally {
        P.transition = N;
      }
    }),
    (yA.unstable_act = Y),
    (yA.useCallback = function (H, N) {
      return Z.current.useCallback(H, N);
    }),
    (yA.useContext = function (H) {
      return Z.current.useContext(H);
    }),
    (yA.useDebugValue = function () {}),
    (yA.useDeferredValue = function (H) {
      return Z.current.useDeferredValue(H);
    }),
    (yA.useEffect = function (H, N) {
      return Z.current.useEffect(H, N);
    }),
    (yA.useId = function () {
      return Z.current.useId();
    }),
    (yA.useImperativeHandle = function (H, N, cA) {
      return Z.current.useImperativeHandle(H, N, cA);
    }),
    (yA.useInsertionEffect = function (H, N) {
      return Z.current.useInsertionEffect(H, N);
    }),
    (yA.useLayoutEffect = function (H, N) {
      return Z.current.useLayoutEffect(H, N);
    }),
    (yA.useMemo = function (H, N) {
      return Z.current.useMemo(H, N);
    }),
    (yA.useReducer = function (H, N, cA) {
      return Z.current.useReducer(H, N, cA);
    }),
    (yA.useRef = function (H) {
      return Z.current.useRef(H);
    }),
    (yA.useState = function (H) {
      return Z.current.useState(H);
    }),
    (yA.useSyncExternalStore = function (H, N, cA) {
      return Z.current.useSyncExternalStore(H, N, cA);
    }),
    (yA.useTransition = function () {
      return Z.current.useTransition();
    }),
    (yA.version = "18.3.1"),
    yA
  );
}
var eg;
function Tc() {
  return eg || ((eg = 1), (wu.exports = Mm())), wu.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tg;
function Pm() {
  if (tg) return yo;
  tg = 1;
  var e = Tc(),
    r = Symbol.for("react.element"),
    n = Symbol.for("react.fragment"),
    o = Object.prototype.hasOwnProperty,
    s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, B, g) {
    var w,
      h = {},
      v = null,
      U = null;
    g !== void 0 && (v = "" + g),
      B.key !== void 0 && (v = "" + B.key),
      B.ref !== void 0 && (U = B.ref);
    for (w in B) o.call(B, w) && !l.hasOwnProperty(w) && (h[w] = B[w]);
    if (f && f.defaultProps)
      for (w in ((B = f.defaultProps), B)) h[w] === void 0 && (h[w] = B[w]);
    return {
      $$typeof: r,
      type: f,
      key: v,
      ref: U,
      props: h,
      _owner: s.current,
    };
  }
  return (yo.Fragment = n), (yo.jsx = c), (yo.jsxs = c), yo;
}
Tp.exports = Pm();
var b = Tp.exports,
  Yu = {},
  Dp = { exports: {} },
  Fe = {},
  hu = { exports: {} },
  vu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rg;
function _m() {
  return (
    rg ||
      ((rg = 1),
      (function (e) {
        function r(P, j) {
          var Y = P.length;
          P.push(j);
          A: for (; 0 < Y; ) {
            var H = (Y - 1) >>> 1,
              N = P[H];
            if (0 < s(N, j)) (P[H] = j), (P[Y] = N), (Y = H);
            else break A;
          }
        }
        function n(P) {
          return P.length === 0 ? null : P[0];
        }
        function o(P) {
          if (P.length === 0) return null;
          var j = P[0],
            Y = P.pop();
          if (Y !== j) {
            P[0] = Y;
            A: for (var H = 0, N = P.length, cA = N >>> 1; H < cA; ) {
              var fA = 2 * (H + 1) - 1,
                wA = P[fA],
                hA = fA + 1,
                $ = P[hA];
              if (0 > s(wA, Y))
                hA < N && 0 > s($, wA)
                  ? ((P[H] = $), (P[hA] = Y), (H = hA))
                  : ((P[H] = wA), (P[fA] = Y), (H = fA));
              else if (hA < N && 0 > s($, Y)) (P[H] = $), (P[hA] = Y), (H = hA);
              else break A;
            }
          }
          return j;
        }
        function s(P, j) {
          var Y = P.sortIndex - j.sortIndex;
          return Y !== 0 ? Y : P.id - j.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var l = performance;
          e.unstable_now = function () {
            return l.now();
          };
        } else {
          var c = Date,
            f = c.now();
          e.unstable_now = function () {
            return c.now() - f;
          };
        }
        var B = [],
          g = [],
          w = 1,
          h = null,
          v = 3,
          U = !1,
          Q = !1,
          m = !1,
          F = typeof setTimeout == "function" ? setTimeout : null,
          E = typeof clearTimeout == "function" ? clearTimeout : null,
          I = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function R(P) {
          for (var j = n(g); j !== null; ) {
            if (j.callback === null) o(g);
            else if (j.startTime <= P)
              o(g), (j.sortIndex = j.expirationTime), r(B, j);
            else break;
            j = n(g);
          }
        }
        function T(P) {
          if (((m = !1), R(P), !Q))
            if (n(B) !== null) (Q = !0), aA(k);
            else {
              var j = n(g);
              j !== null && Z(T, j.startTime - P);
            }
        }
        function k(P, j) {
          (Q = !1), m && ((m = !1), E(X), (X = -1)), (U = !0);
          var Y = v;
          try {
            for (
              R(j), h = n(B);
              h !== null && (!(h.expirationTime > j) || (P && !dA()));

            ) {
              var H = h.callback;
              if (typeof H == "function") {
                (h.callback = null), (v = h.priorityLevel);
                var N = H(h.expirationTime <= j);
                (j = e.unstable_now()),
                  typeof N == "function"
                    ? (h.callback = N)
                    : h === n(B) && o(B),
                  R(j);
              } else o(B);
              h = n(B);
            }
            if (h !== null) var cA = !0;
            else {
              var fA = n(g);
              fA !== null && Z(T, fA.startTime - j), (cA = !1);
            }
            return cA;
          } finally {
            (h = null), (v = Y), (U = !1);
          }
        }
        var O = !1,
          M = null,
          X = -1,
          z = 5,
          nA = -1;
        function dA() {
          return !(e.unstable_now() - nA < z);
        }
        function V() {
          if (M !== null) {
            var P = e.unstable_now();
            nA = P;
            var j = !0;
            try {
              j = M(!0, P);
            } finally {
              j ? q() : ((O = !1), (M = null));
            }
          } else O = !1;
        }
        var q;
        if (typeof I == "function")
          q = function () {
            I(V);
          };
        else if (typeof MessageChannel < "u") {
          var rA = new MessageChannel(),
            uA = rA.port2;
          (rA.port1.onmessage = V),
            (q = function () {
              uA.postMessage(null);
            });
        } else
          q = function () {
            F(V, 0);
          };
        function aA(P) {
          (M = P), O || ((O = !0), q());
        }
        function Z(P, j) {
          X = F(function () {
            P(e.unstable_now());
          }, j);
        }
        (e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (P) {
            P.callback = null;
          }),
          (e.unstable_continueExecution = function () {
            Q || U || ((Q = !0), aA(k));
          }),
          (e.unstable_forceFrameRate = function (P) {
            0 > P || 125 < P
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (z = 0 < P ? Math.floor(1e3 / P) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return v;
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return n(B);
          }),
          (e.unstable_next = function (P) {
            switch (v) {
              case 1:
              case 2:
              case 3:
                var j = 3;
                break;
              default:
                j = v;
            }
            var Y = v;
            v = j;
            try {
              return P();
            } finally {
              v = Y;
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (P, j) {
            switch (P) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                P = 3;
            }
            var Y = v;
            v = P;
            try {
              return j();
            } finally {
              v = Y;
            }
          }),
          (e.unstable_scheduleCallback = function (P, j, Y) {
            var H = e.unstable_now();
            switch (
              (typeof Y == "object" && Y !== null
                ? ((Y = Y.delay),
                  (Y = typeof Y == "number" && 0 < Y ? H + Y : H))
                : (Y = H),
              P)
            ) {
              case 1:
                var N = -1;
                break;
              case 2:
                N = 250;
                break;
              case 5:
                N = 1073741823;
                break;
              case 4:
                N = 1e4;
                break;
              default:
                N = 5e3;
            }
            return (
              (N = Y + N),
              (P = {
                id: w++,
                callback: j,
                priorityLevel: P,
                startTime: Y,
                expirationTime: N,
                sortIndex: -1,
              }),
              Y > H
                ? ((P.sortIndex = Y),
                  r(g, P),
                  n(B) === null &&
                    P === n(g) &&
                    (m ? (E(X), (X = -1)) : (m = !0), Z(T, Y - H)))
                : ((P.sortIndex = N), r(B, P), Q || U || ((Q = !0), aA(k))),
              P
            );
          }),
          (e.unstable_shouldYield = dA),
          (e.unstable_wrapCallback = function (P) {
            var j = v;
            return function () {
              var Y = v;
              v = j;
              try {
                return P.apply(this, arguments);
              } finally {
                v = Y;
              }
            };
          });
      })(vu)),
    vu
  );
}
var ng;
function Vm() {
  return ng || ((ng = 1), (hu.exports = _m())), hu.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var og;
function Gm() {
  if (og) return Fe;
  og = 1;
  var e = Tc(),
    r = Vm();
  function n(A) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + A,
        i = 1;
      i < arguments.length;
      i++
    )
      t += "&args[]=" + encodeURIComponent(arguments[i]);
    return (
      "Minified React error #" +
      A +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var o = /* @__PURE__ */ new Set(),
    s = {};
  function l(A, t) {
    c(A, t), c(A + "Capture", t);
  }
  function c(A, t) {
    for (s[A] = t, A = 0; A < t.length; A++) o.add(t[A]);
  }
  var f = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    B = Object.prototype.hasOwnProperty,
    g =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    w = {},
    h = {};
  function v(A) {
    return B.call(h, A)
      ? !0
      : B.call(w, A)
        ? !1
        : g.test(A)
          ? (h[A] = !0)
          : ((w[A] = !0), !1);
  }
  function U(A, t, i, a) {
    if (i !== null && i.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return a
          ? !1
          : i !== null
            ? !i.acceptsBooleans
            : ((A = A.toLowerCase().slice(0, 5)),
              A !== "data-" && A !== "aria-");
      default:
        return !1;
    }
  }
  function Q(A, t, i, a) {
    if (t === null || typeof t > "u" || U(A, t, i, a)) return !0;
    if (a) return !1;
    if (i !== null)
      switch (i.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function m(A, t, i, a, u, d, p) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = a),
      (this.attributeNamespace = u),
      (this.mustUseProperty = i),
      (this.propertyName = A),
      (this.type = t),
      (this.sanitizeURL = d),
      (this.removeEmptyString = p);
  }
  var F = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (A) {
      F[A] = new m(A, 0, !1, A, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (A) {
      var t = A[0];
      F[t] = new m(t, 1, !1, A[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (A) {
        F[A] = new m(A, 2, !1, A.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (A) {
      F[A] = new m(A, 2, !1, A, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (A) {
        F[A] = new m(A, 3, !1, A.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (A) {
      F[A] = new m(A, 3, !0, A, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (A) {
      F[A] = new m(A, 4, !1, A, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (A) {
      F[A] = new m(A, 6, !1, A, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (A) {
      F[A] = new m(A, 5, !1, A.toLowerCase(), null, !1, !1);
    });
  var E = /[\-:]([a-z])/g;
  function I(A) {
    return A[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (A) {
      var t = A.replace(E, I);
      F[t] = new m(t, 1, !1, A, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (A) {
        var t = A.replace(E, I);
        F[t] = new m(t, 1, !1, A, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (A) {
      var t = A.replace(E, I);
      F[t] = new m(t, 1, !1, A, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (A) {
      F[A] = new m(A, 1, !1, A.toLowerCase(), null, !1, !1);
    }),
    (F.xlinkHref = new m(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (A) {
      F[A] = new m(A, 1, !1, A.toLowerCase(), null, !0, !0);
    });
  function R(A, t, i, a) {
    var u = F.hasOwnProperty(t) ? F[t] : null;
    (u !== null
      ? u.type !== 0
      : a ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (Q(t, i, u, a) && (i = null),
      a || u === null
        ? v(t) &&
          (i === null ? A.removeAttribute(t) : A.setAttribute(t, "" + i))
        : u.mustUseProperty
          ? (A[u.propertyName] = i === null ? (u.type === 3 ? !1 : "") : i)
          : ((t = u.attributeName),
            (a = u.attributeNamespace),
            i === null
              ? A.removeAttribute(t)
              : ((u = u.type),
                (i = u === 3 || (u === 4 && i === !0) ? "" : "" + i),
                a ? A.setAttributeNS(a, t, i) : A.setAttribute(t, i))));
  }
  var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    k = Symbol.for("react.element"),
    O = Symbol.for("react.portal"),
    M = Symbol.for("react.fragment"),
    X = Symbol.for("react.strict_mode"),
    z = Symbol.for("react.profiler"),
    nA = Symbol.for("react.provider"),
    dA = Symbol.for("react.context"),
    V = Symbol.for("react.forward_ref"),
    q = Symbol.for("react.suspense"),
    rA = Symbol.for("react.suspense_list"),
    uA = Symbol.for("react.memo"),
    aA = Symbol.for("react.lazy"),
    Z = Symbol.for("react.offscreen"),
    P = Symbol.iterator;
  function j(A) {
    return A === null || typeof A != "object"
      ? null
      : ((A = (P && A[P]) || A["@@iterator"]),
        typeof A == "function" ? A : null);
  }
  var Y = Object.assign,
    H;
  function N(A) {
    if (H === void 0)
      try {
        throw Error();
      } catch (i) {
        var t = i.stack.trim().match(/\n( *(at )?)/);
        H = (t && t[1]) || "";
      }
    return (
      `
` +
      H +
      A
    );
  }
  var cA = !1;
  function fA(A, t) {
    if (!A || cA) return "";
    cA = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (K) {
            var a = K;
          }
          Reflect.construct(A, [], t);
        } else {
          try {
            t.call();
          } catch (K) {
            a = K;
          }
          A.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (K) {
          a = K;
        }
        A();
      }
    } catch (K) {
      if (K && a && typeof K.stack == "string") {
        for (
          var u = K.stack.split(`
`),
            d = a.stack.split(`
`),
            p = u.length - 1,
            y = d.length - 1;
          1 <= p && 0 <= y && u[p] !== d[y];

        )
          y--;
        for (; 1 <= p && 0 <= y; p--, y--)
          if (u[p] !== d[y]) {
            if (p !== 1 || y !== 1)
              do
                if ((p--, y--, 0 > y || u[p] !== d[y])) {
                  var x =
                    `
` + u[p].replace(" at new ", " at ");
                  return (
                    A.displayName &&
                      x.includes("<anonymous>") &&
                      (x = x.replace("<anonymous>", A.displayName)),
                    x
                  );
                }
              while (1 <= p && 0 <= y);
            break;
          }
      }
    } finally {
      (cA = !1), (Error.prepareStackTrace = i);
    }
    return (A = A ? A.displayName || A.name : "") ? N(A) : "";
  }
  function wA(A) {
    switch (A.tag) {
      case 5:
        return N(A.type);
      case 16:
        return N("Lazy");
      case 13:
        return N("Suspense");
      case 19:
        return N("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (A = fA(A.type, !1)), A;
      case 11:
        return (A = fA(A.type.render, !1)), A;
      case 1:
        return (A = fA(A.type, !0)), A;
      default:
        return "";
    }
  }
  function hA(A) {
    if (A == null) return null;
    if (typeof A == "function") return A.displayName || A.name || null;
    if (typeof A == "string") return A;
    switch (A) {
      case M:
        return "Fragment";
      case O:
        return "Portal";
      case z:
        return "Profiler";
      case X:
        return "StrictMode";
      case q:
        return "Suspense";
      case rA:
        return "SuspenseList";
    }
    if (typeof A == "object")
      switch (A.$$typeof) {
        case dA:
          return (A.displayName || "Context") + ".Consumer";
        case nA:
          return (A._context.displayName || "Context") + ".Provider";
        case V:
          var t = A.render;
          return (
            (A = A.displayName),
            A ||
              ((A = t.displayName || t.name || ""),
              (A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef")),
            A
          );
        case uA:
          return (
            (t = A.displayName || null), t !== null ? t : hA(A.type) || "Memo"
          );
        case aA:
          (t = A._payload), (A = A._init);
          try {
            return hA(A(t));
          } catch {}
      }
    return null;
  }
  function $(A) {
    var t = A.type;
    switch (A.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (A = t.render),
          (A = A.displayName || A.name || ""),
          t.displayName || (A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return hA(t);
      case 8:
        return t === X ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function BA(A) {
    switch (typeof A) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return A;
      case "object":
        return A;
      default:
        return "";
    }
  }
  function CA(A) {
    var t = A.type;
    return (
      (A = A.nodeName) &&
      A.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function QA(A) {
    var t = CA(A) ? "checked" : "value",
      i = Object.getOwnPropertyDescriptor(A.constructor.prototype, t),
      a = "" + A[t];
    if (
      !A.hasOwnProperty(t) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var u = i.get,
        d = i.set;
      return (
        Object.defineProperty(A, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (p) {
            (a = "" + p), d.call(this, p);
          },
        }),
        Object.defineProperty(A, t, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (p) {
            a = "" + p;
          },
          stopTracking: function () {
            (A._valueTracker = null), delete A[t];
          },
        }
      );
    }
  }
  function IA(A) {
    A._valueTracker || (A._valueTracker = QA(A));
  }
  function NA(A) {
    if (!A) return !1;
    var t = A._valueTracker;
    if (!t) return !0;
    var i = t.getValue(),
      a = "";
    return (
      A && (a = CA(A) ? (A.checked ? "true" : "false") : A.value),
      (A = a),
      A !== i ? (t.setValue(A), !0) : !1
    );
  }
  function oe(A) {
    if (
      ((A = A || (typeof document < "u" ? document : void 0)), typeof A > "u")
    )
      return null;
    try {
      return A.activeElement || A.body;
    } catch {
      return A.body;
    }
  }
  function Ge(A, t) {
    var i = t.checked;
    return Y({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: i ?? A._wrapperState.initialChecked,
    });
  }
  function Nr(A, t) {
    var i = t.defaultValue == null ? "" : t.defaultValue,
      a = t.checked != null ? t.checked : t.defaultChecked;
    (i = BA(t.value != null ? t.value : i)),
      (A._wrapperState = {
        initialChecked: a,
        initialValue: i,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Mr(A, t) {
    (t = t.checked), t != null && R(A, "checked", t, !1);
  }
  function gr(A, t) {
    Mr(A, t);
    var i = BA(t.value),
      a = t.type;
    if (i != null)
      a === "number"
        ? ((i === 0 && A.value === "") || A.value != i) && (A.value = "" + i)
        : A.value !== "" + i && (A.value = "" + i);
    else if (a === "submit" || a === "reset") {
      A.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Ea(A, t.type, i)
      : t.hasOwnProperty("defaultValue") && Ea(A, t.type, BA(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (A.defaultChecked = !!t.defaultChecked);
  }
  function lf(A, t, i) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var a = t.type;
      if (
        !(
          (a !== "submit" && a !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + A._wrapperState.initialValue),
        i || t === A.value || (A.value = t),
        (A.defaultValue = t);
    }
    (i = A.name),
      i !== "" && (A.name = ""),
      (A.defaultChecked = !!A._wrapperState.initialChecked),
      i !== "" && (A.name = i);
  }
  function Ea(A, t, i) {
    (t !== "number" || oe(A.ownerDocument) !== A) &&
      (i == null
        ? (A.defaultValue = "" + A._wrapperState.initialValue)
        : A.defaultValue !== "" + i && (A.defaultValue = "" + i));
  }
  var Rn = Array.isArray;
  function Pr(A, t, i, a) {
    if (((A = A.options), t)) {
      t = {};
      for (var u = 0; u < i.length; u++) t["$" + i[u]] = !0;
      for (i = 0; i < A.length; i++)
        (u = t.hasOwnProperty("$" + A[i].value)),
          A[i].selected !== u && (A[i].selected = u),
          u && a && (A[i].defaultSelected = !0);
    } else {
      for (i = "" + BA(i), t = null, u = 0; u < A.length; u++) {
        if (A[u].value === i) {
          (A[u].selected = !0), a && (A[u].defaultSelected = !0);
          return;
        }
        t !== null || A[u].disabled || (t = A[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function xa(A, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(n(91));
    return Y({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + A._wrapperState.initialValue,
    });
  }
  function uf(A, t) {
    var i = t.value;
    if (i == null) {
      if (((i = t.children), (t = t.defaultValue), i != null)) {
        if (t != null) throw Error(n(92));
        if (Rn(i)) {
          if (1 < i.length) throw Error(n(93));
          i = i[0];
        }
        t = i;
      }
      t == null && (t = ""), (i = t);
    }
    A._wrapperState = { initialValue: BA(i) };
  }
  function cf(A, t) {
    var i = BA(t.value),
      a = BA(t.defaultValue);
    i != null &&
      ((i = "" + i),
      i !== A.value && (A.value = i),
      t.defaultValue == null && A.defaultValue !== i && (A.defaultValue = i)),
      a != null && (A.defaultValue = "" + a);
  }
  function ff(A) {
    var t = A.textContent;
    t === A._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (A.value = t);
  }
  function df(A) {
    switch (A) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ia(A, t) {
    return A == null || A === "http://www.w3.org/1999/xhtml"
      ? df(t)
      : A === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : A;
  }
  var qo,
    Bf = (function (A) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, i, a, u) {
            MSApp.execUnsafeLocalFunction(function () {
              return A(t, i, a, u);
            });
          }
        : A;
    })(function (A, t) {
      if (A.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in A)
        A.innerHTML = t;
      else {
        for (
          qo = qo || document.createElement("div"),
            qo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = qo.firstChild;
          A.firstChild;

        )
          A.removeChild(A.firstChild);
        for (; t.firstChild; ) A.appendChild(t.firstChild);
      }
    });
  function On(A, t) {
    if (t) {
      var i = A.firstChild;
      if (i && i === A.lastChild && i.nodeType === 3) {
        i.nodeValue = t;
        return;
      }
    }
    A.textContent = t;
  }
  var Nn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    V0 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Nn).forEach(function (A) {
    V0.forEach(function (t) {
      (t = t + A.charAt(0).toUpperCase() + A.substring(1)), (Nn[t] = Nn[A]);
    });
  });
  function gf(A, t, i) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : i || typeof t != "number" || t === 0 || (Nn.hasOwnProperty(A) && Nn[A])
        ? ("" + t).trim()
        : t + "px";
  }
  function pf(A, t) {
    A = A.style;
    for (var i in t)
      if (t.hasOwnProperty(i)) {
        var a = i.indexOf("--") === 0,
          u = gf(i, t[i], a);
        i === "float" && (i = "cssFloat"), a ? A.setProperty(i, u) : (A[i] = u);
      }
  }
  var G0 = Y(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function Ha(A, t) {
    if (t) {
      if (G0[A] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(n(137, A));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(n(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(n(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(n(62));
    }
  }
  function Sa(A, t) {
    if (A.indexOf("-") === -1) return typeof t.is == "string";
    switch (A) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ba = null;
  function La(A) {
    return (
      (A = A.target || A.srcElement || window),
      A.correspondingUseElement && (A = A.correspondingUseElement),
      A.nodeType === 3 ? A.parentNode : A
    );
  }
  var Ta = null,
    _r = null,
    Vr = null;
  function wf(A) {
    if ((A = so(A))) {
      if (typeof Ta != "function") throw Error(n(280));
      var t = A.stateNode;
      t && ((t = Qi(t)), Ta(A.stateNode, A.type, t));
    }
  }
  function hf(A) {
    _r ? (Vr ? Vr.push(A) : (Vr = [A])) : (_r = A);
  }
  function vf() {
    if (_r) {
      var A = _r,
        t = Vr;
      if (((Vr = _r = null), wf(A), t)) for (A = 0; A < t.length; A++) wf(t[A]);
    }
  }
  function mf(A, t) {
    return A(t);
  }
  function Cf() {}
  var Da = !1;
  function Qf(A, t, i) {
    if (Da) return A(t, i);
    Da = !0;
    try {
      return mf(A, t, i);
    } finally {
      (Da = !1), (_r !== null || Vr !== null) && (Cf(), vf());
    }
  }
  function Mn(A, t) {
    var i = A.stateNode;
    if (i === null) return null;
    var a = Qi(i);
    if (a === null) return null;
    i = a[t];
    A: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((A = A.type),
          (a = !(
            A === "button" ||
            A === "input" ||
            A === "select" ||
            A === "textarea"
          ))),
          (A = !a);
        break A;
      default:
        A = !1;
    }
    if (A) return null;
    if (i && typeof i != "function") throw Error(n(231, t, typeof i));
    return i;
  }
  var Ka = !1;
  if (f)
    try {
      var Pn = {};
      Object.defineProperty(Pn, "passive", {
        get: function () {
          Ka = !0;
        },
      }),
        window.addEventListener("test", Pn, Pn),
        window.removeEventListener("test", Pn, Pn);
    } catch {
      Ka = !1;
    }
  function W0(A, t, i, a, u, d, p, y, x) {
    var K = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(i, K);
    } catch (G) {
      this.onError(G);
    }
  }
  var _n = !1,
    Ai = null,
    ei = !1,
    ka = null,
    j0 = {
      onError: function (A) {
        (_n = !0), (Ai = A);
      },
    };
  function X0(A, t, i, a, u, d, p, y, x) {
    (_n = !1), (Ai = null), W0.apply(j0, arguments);
  }
  function z0(A, t, i, a, u, d, p, y, x) {
    if ((X0.apply(this, arguments), _n)) {
      if (_n) {
        var K = Ai;
        (_n = !1), (Ai = null);
      } else throw Error(n(198));
      ei || ((ei = !0), (ka = K));
    }
  }
  function pr(A) {
    var t = A,
      i = A;
    if (A.alternate) for (; t.return; ) t = t.return;
    else {
      A = t;
      do (t = A), t.flags & 4098 && (i = t.return), (A = t.return);
      while (A);
    }
    return t.tag === 3 ? i : null;
  }
  function yf(A) {
    if (A.tag === 13) {
      var t = A.memoizedState;
      if (
        (t === null && ((A = A.alternate), A !== null && (t = A.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Uf(A) {
    if (pr(A) !== A) throw Error(n(188));
  }
  function J0(A) {
    var t = A.alternate;
    if (!t) {
      if (((t = pr(A)), t === null)) throw Error(n(188));
      return t !== A ? null : A;
    }
    for (var i = A, a = t; ; ) {
      var u = i.return;
      if (u === null) break;
      var d = u.alternate;
      if (d === null) {
        if (((a = u.return), a !== null)) {
          i = a;
          continue;
        }
        break;
      }
      if (u.child === d.child) {
        for (d = u.child; d; ) {
          if (d === i) return Uf(u), A;
          if (d === a) return Uf(u), t;
          d = d.sibling;
        }
        throw Error(n(188));
      }
      if (i.return !== a.return) (i = u), (a = d);
      else {
        for (var p = !1, y = u.child; y; ) {
          if (y === i) {
            (p = !0), (i = u), (a = d);
            break;
          }
          if (y === a) {
            (p = !0), (a = u), (i = d);
            break;
          }
          y = y.sibling;
        }
        if (!p) {
          for (y = d.child; y; ) {
            if (y === i) {
              (p = !0), (i = d), (a = u);
              break;
            }
            if (y === a) {
              (p = !0), (a = d), (i = u);
              break;
            }
            y = y.sibling;
          }
          if (!p) throw Error(n(189));
        }
      }
      if (i.alternate !== a) throw Error(n(190));
    }
    if (i.tag !== 3) throw Error(n(188));
    return i.stateNode.current === i ? A : t;
  }
  function Ff(A) {
    return (A = J0(A)), A !== null ? Ef(A) : null;
  }
  function Ef(A) {
    if (A.tag === 5 || A.tag === 6) return A;
    for (A = A.child; A !== null; ) {
      var t = Ef(A);
      if (t !== null) return t;
      A = A.sibling;
    }
    return null;
  }
  var xf = r.unstable_scheduleCallback,
    If = r.unstable_cancelCallback,
    Y0 = r.unstable_shouldYield,
    Z0 = r.unstable_requestPaint,
    GA = r.unstable_now,
    $0 = r.unstable_getCurrentPriorityLevel,
    Ra = r.unstable_ImmediatePriority,
    Hf = r.unstable_UserBlockingPriority,
    ti = r.unstable_NormalPriority,
    q0 = r.unstable_LowPriority,
    Sf = r.unstable_IdlePriority,
    ri = null,
    rt = null;
  function Av(A) {
    if (rt && typeof rt.onCommitFiberRoot == "function")
      try {
        rt.onCommitFiberRoot(ri, A, void 0, (A.current.flags & 128) === 128);
      } catch {}
  }
  var We = Math.clz32 ? Math.clz32 : rv,
    ev = Math.log,
    tv = Math.LN2;
  function rv(A) {
    return (A >>>= 0), A === 0 ? 32 : (31 - ((ev(A) / tv) | 0)) | 0;
  }
  var ni = 64,
    oi = 4194304;
  function Vn(A) {
    switch (A & -A) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return A & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return A & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return A;
    }
  }
  function ii(A, t) {
    var i = A.pendingLanes;
    if (i === 0) return 0;
    var a = 0,
      u = A.suspendedLanes,
      d = A.pingedLanes,
      p = i & 268435455;
    if (p !== 0) {
      var y = p & ~u;
      y !== 0 ? (a = Vn(y)) : ((d &= p), d !== 0 && (a = Vn(d)));
    } else (p = i & ~u), p !== 0 ? (a = Vn(p)) : d !== 0 && (a = Vn(d));
    if (a === 0) return 0;
    if (
      t !== 0 &&
      t !== a &&
      !(t & u) &&
      ((u = a & -a), (d = t & -t), u >= d || (u === 16 && (d & 4194240) !== 0))
    )
      return t;
    if ((a & 4 && (a |= i & 16), (t = A.entangledLanes), t !== 0))
      for (A = A.entanglements, t &= a; 0 < t; )
        (i = 31 - We(t)), (u = 1 << i), (a |= A[i]), (t &= ~u);
    return a;
  }
  function nv(A, t) {
    switch (A) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ov(A, t) {
    for (
      var i = A.suspendedLanes,
        a = A.pingedLanes,
        u = A.expirationTimes,
        d = A.pendingLanes;
      0 < d;

    ) {
      var p = 31 - We(d),
        y = 1 << p,
        x = u[p];
      x === -1
        ? (!(y & i) || y & a) && (u[p] = nv(y, t))
        : x <= t && (A.expiredLanes |= y),
        (d &= ~y);
    }
  }
  function Oa(A) {
    return (
      (A = A.pendingLanes & -1073741825),
      A !== 0 ? A : A & 1073741824 ? 1073741824 : 0
    );
  }
  function bf() {
    var A = ni;
    return (ni <<= 1), !(ni & 4194240) && (ni = 64), A;
  }
  function Na(A) {
    for (var t = [], i = 0; 31 > i; i++) t.push(A);
    return t;
  }
  function Gn(A, t, i) {
    (A.pendingLanes |= t),
      t !== 536870912 && ((A.suspendedLanes = 0), (A.pingedLanes = 0)),
      (A = A.eventTimes),
      (t = 31 - We(t)),
      (A[t] = i);
  }
  function iv(A, t) {
    var i = A.pendingLanes & ~t;
    (A.pendingLanes = t),
      (A.suspendedLanes = 0),
      (A.pingedLanes = 0),
      (A.expiredLanes &= t),
      (A.mutableReadLanes &= t),
      (A.entangledLanes &= t),
      (t = A.entanglements);
    var a = A.eventTimes;
    for (A = A.expirationTimes; 0 < i; ) {
      var u = 31 - We(i),
        d = 1 << u;
      (t[u] = 0), (a[u] = -1), (A[u] = -1), (i &= ~d);
    }
  }
  function Ma(A, t) {
    var i = (A.entangledLanes |= t);
    for (A = A.entanglements; i; ) {
      var a = 31 - We(i),
        u = 1 << a;
      (u & t) | (A[a] & t) && (A[a] |= t), (i &= ~u);
    }
  }
  var HA = 0;
  function Lf(A) {
    return (
      (A &= -A), 1 < A ? (4 < A ? (A & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Tf,
    Pa,
    Df,
    Kf,
    kf,
    _a = !1,
    si = [],
    Lt = null,
    Tt = null,
    Dt = null,
    Wn = /* @__PURE__ */ new Map(),
    jn = /* @__PURE__ */ new Map(),
    Kt = [],
    sv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Rf(A, t) {
    switch (A) {
      case "focusin":
      case "focusout":
        Lt = null;
        break;
      case "dragenter":
      case "dragleave":
        Tt = null;
        break;
      case "mouseover":
      case "mouseout":
        Dt = null;
        break;
      case "pointerover":
      case "pointerout":
        Wn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        jn.delete(t.pointerId);
    }
  }
  function Xn(A, t, i, a, u, d) {
    return A === null || A.nativeEvent !== d
      ? ((A = {
          blockedOn: t,
          domEventName: i,
          eventSystemFlags: a,
          nativeEvent: d,
          targetContainers: [u],
        }),
        t !== null && ((t = so(t)), t !== null && Pa(t)),
        A)
      : ((A.eventSystemFlags |= a),
        (t = A.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        A);
  }
  function av(A, t, i, a, u) {
    switch (t) {
      case "focusin":
        return (Lt = Xn(Lt, A, t, i, a, u)), !0;
      case "dragenter":
        return (Tt = Xn(Tt, A, t, i, a, u)), !0;
      case "mouseover":
        return (Dt = Xn(Dt, A, t, i, a, u)), !0;
      case "pointerover":
        var d = u.pointerId;
        return Wn.set(d, Xn(Wn.get(d) || null, A, t, i, a, u)), !0;
      case "gotpointercapture":
        return (
          (d = u.pointerId), jn.set(d, Xn(jn.get(d) || null, A, t, i, a, u)), !0
        );
    }
    return !1;
  }
  function Of(A) {
    var t = wr(A.target);
    if (t !== null) {
      var i = pr(t);
      if (i !== null) {
        if (((t = i.tag), t === 13)) {
          if (((t = yf(i)), t !== null)) {
            (A.blockedOn = t),
              kf(A.priority, function () {
                Df(i);
              });
            return;
          }
        } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          A.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    A.blockedOn = null;
  }
  function ai(A) {
    if (A.blockedOn !== null) return !1;
    for (var t = A.targetContainers; 0 < t.length; ) {
      var i = Ga(A.domEventName, A.eventSystemFlags, t[0], A.nativeEvent);
      if (i === null) {
        i = A.nativeEvent;
        var a = new i.constructor(i.type, i);
        (ba = a), i.target.dispatchEvent(a), (ba = null);
      } else return (t = so(i)), t !== null && Pa(t), (A.blockedOn = i), !1;
      t.shift();
    }
    return !0;
  }
  function Nf(A, t, i) {
    ai(A) && i.delete(t);
  }
  function lv() {
    (_a = !1),
      Lt !== null && ai(Lt) && (Lt = null),
      Tt !== null && ai(Tt) && (Tt = null),
      Dt !== null && ai(Dt) && (Dt = null),
      Wn.forEach(Nf),
      jn.forEach(Nf);
  }
  function zn(A, t) {
    A.blockedOn === t &&
      ((A.blockedOn = null),
      _a ||
        ((_a = !0),
        r.unstable_scheduleCallback(r.unstable_NormalPriority, lv)));
  }
  function Jn(A) {
    function t(u) {
      return zn(u, A);
    }
    if (0 < si.length) {
      zn(si[0], A);
      for (var i = 1; i < si.length; i++) {
        var a = si[i];
        a.blockedOn === A && (a.blockedOn = null);
      }
    }
    for (
      Lt !== null && zn(Lt, A),
        Tt !== null && zn(Tt, A),
        Dt !== null && zn(Dt, A),
        Wn.forEach(t),
        jn.forEach(t),
        i = 0;
      i < Kt.length;
      i++
    )
      (a = Kt[i]), a.blockedOn === A && (a.blockedOn = null);
    for (; 0 < Kt.length && ((i = Kt[0]), i.blockedOn === null); )
      Of(i), i.blockedOn === null && Kt.shift();
  }
  var Gr = T.ReactCurrentBatchConfig,
    li = !0;
  function uv(A, t, i, a) {
    var u = HA,
      d = Gr.transition;
    Gr.transition = null;
    try {
      (HA = 1), Va(A, t, i, a);
    } finally {
      (HA = u), (Gr.transition = d);
    }
  }
  function cv(A, t, i, a) {
    var u = HA,
      d = Gr.transition;
    Gr.transition = null;
    try {
      (HA = 4), Va(A, t, i, a);
    } finally {
      (HA = u), (Gr.transition = d);
    }
  }
  function Va(A, t, i, a) {
    if (li) {
      var u = Ga(A, t, i, a);
      if (u === null) sl(A, t, a, ui, i), Rf(A, a);
      else if (av(u, A, t, i, a)) a.stopPropagation();
      else if ((Rf(A, a), t & 4 && -1 < sv.indexOf(A))) {
        for (; u !== null; ) {
          var d = so(u);
          if (
            (d !== null && Tf(d),
            (d = Ga(A, t, i, a)),
            d === null && sl(A, t, a, ui, i),
            d === u)
          )
            break;
          u = d;
        }
        u !== null && a.stopPropagation();
      } else sl(A, t, a, null, i);
    }
  }
  var ui = null;
  function Ga(A, t, i, a) {
    if (((ui = null), (A = La(a)), (A = wr(A)), A !== null))
      if (((t = pr(A)), t === null)) A = null;
      else if (((i = t.tag), i === 13)) {
        if (((A = yf(t)), A !== null)) return A;
        A = null;
      } else if (i === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        A = null;
      } else t !== A && (A = null);
    return (ui = A), null;
  }
  function Mf(A) {
    switch (A) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch ($0()) {
          case Ra:
            return 1;
          case Hf:
            return 4;
          case ti:
          case q0:
            return 16;
          case Sf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var kt = null,
    Wa = null,
    ci = null;
  function Pf() {
    if (ci) return ci;
    var A,
      t = Wa,
      i = t.length,
      a,
      u = "value" in kt ? kt.value : kt.textContent,
      d = u.length;
    for (A = 0; A < i && t[A] === u[A]; A++);
    var p = i - A;
    for (a = 1; a <= p && t[i - a] === u[d - a]; a++);
    return (ci = u.slice(A, 1 < a ? 1 - a : void 0));
  }
  function fi(A) {
    var t = A.keyCode;
    return (
      "charCode" in A
        ? ((A = A.charCode), A === 0 && t === 13 && (A = 13))
        : (A = t),
      A === 10 && (A = 13),
      32 <= A || A === 13 ? A : 0
    );
  }
  function di() {
    return !0;
  }
  function _f() {
    return !1;
  }
  function xe(A) {
    function t(i, a, u, d, p) {
      (this._reactName = i),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = d),
        (this.target = p),
        (this.currentTarget = null);
      for (var y in A)
        A.hasOwnProperty(y) && ((i = A[y]), (this[y] = i ? i(d) : d[y]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? di
          : _f),
        (this.isPropagationStopped = _f),
        this
      );
    }
    return (
      Y(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault
              ? i.preventDefault()
              : typeof i.returnValue != "unknown" && (i.returnValue = !1),
            (this.isDefaultPrevented = di));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
            (this.isPropagationStopped = di));
        },
        persist: function () {},
        isPersistent: di,
      }),
      t
    );
  }
  var Wr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (A) {
        return A.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ja = xe(Wr),
    Yn = Y({}, Wr, { view: 0, detail: 0 }),
    fv = xe(Yn),
    Xa,
    za,
    Zn,
    Bi = Y({}, Yn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ya,
      button: 0,
      buttons: 0,
      relatedTarget: function (A) {
        return A.relatedTarget === void 0
          ? A.fromElement === A.srcElement
            ? A.toElement
            : A.fromElement
          : A.relatedTarget;
      },
      movementX: function (A) {
        return "movementX" in A
          ? A.movementX
          : (A !== Zn &&
              (Zn && A.type === "mousemove"
                ? ((Xa = A.screenX - Zn.screenX), (za = A.screenY - Zn.screenY))
                : (za = Xa = 0),
              (Zn = A)),
            Xa);
      },
      movementY: function (A) {
        return "movementY" in A ? A.movementY : za;
      },
    }),
    Vf = xe(Bi),
    dv = Y({}, Bi, { dataTransfer: 0 }),
    Bv = xe(dv),
    gv = Y({}, Yn, { relatedTarget: 0 }),
    Ja = xe(gv),
    pv = Y({}, Wr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    wv = xe(pv),
    hv = Y({}, Wr, {
      clipboardData: function (A) {
        return "clipboardData" in A ? A.clipboardData : window.clipboardData;
      },
    }),
    vv = xe(hv),
    mv = Y({}, Wr, { data: 0 }),
    Gf = xe(mv),
    Cv = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Qv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    yv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Uv(A) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(A)
      : (A = yv[A])
        ? !!t[A]
        : !1;
  }
  function Ya() {
    return Uv;
  }
  var Fv = Y({}, Yn, {
      key: function (A) {
        if (A.key) {
          var t = Cv[A.key] || A.key;
          if (t !== "Unidentified") return t;
        }
        return A.type === "keypress"
          ? ((A = fi(A)), A === 13 ? "Enter" : String.fromCharCode(A))
          : A.type === "keydown" || A.type === "keyup"
            ? Qv[A.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ya,
      charCode: function (A) {
        return A.type === "keypress" ? fi(A) : 0;
      },
      keyCode: function (A) {
        return A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
      },
      which: function (A) {
        return A.type === "keypress"
          ? fi(A)
          : A.type === "keydown" || A.type === "keyup"
            ? A.keyCode
            : 0;
      },
    }),
    Ev = xe(Fv),
    xv = Y({}, Bi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Wf = xe(xv),
    Iv = Y({}, Yn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ya,
    }),
    Hv = xe(Iv),
    Sv = Y({}, Wr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    bv = xe(Sv),
    Lv = Y({}, Bi, {
      deltaX: function (A) {
        return "deltaX" in A
          ? A.deltaX
          : "wheelDeltaX" in A
            ? -A.wheelDeltaX
            : 0;
      },
      deltaY: function (A) {
        return "deltaY" in A
          ? A.deltaY
          : "wheelDeltaY" in A
            ? -A.wheelDeltaY
            : "wheelDelta" in A
              ? -A.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Tv = xe(Lv),
    Dv = [9, 13, 27, 32],
    Za = f && "CompositionEvent" in window,
    $n = null;
  f && "documentMode" in document && ($n = document.documentMode);
  var Kv = f && "TextEvent" in window && !$n,
    jf = f && (!Za || ($n && 8 < $n && 11 >= $n)),
    Xf = " ",
    zf = !1;
  function Jf(A, t) {
    switch (A) {
      case "keyup":
        return Dv.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Yf(A) {
    return (A = A.detail), typeof A == "object" && "data" in A ? A.data : null;
  }
  var jr = !1;
  function kv(A, t) {
    switch (A) {
      case "compositionend":
        return Yf(t);
      case "keypress":
        return t.which !== 32 ? null : ((zf = !0), Xf);
      case "textInput":
        return (A = t.data), A === Xf && zf ? null : A;
      default:
        return null;
    }
  }
  function Rv(A, t) {
    if (jr)
      return A === "compositionend" || (!Za && Jf(A, t))
        ? ((A = Pf()), (ci = Wa = kt = null), (jr = !1), A)
        : null;
    switch (A) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return jf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ov = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Zf(A) {
    var t = A && A.nodeName && A.nodeName.toLowerCase();
    return t === "input" ? !!Ov[A.type] : t === "textarea";
  }
  function $f(A, t, i, a) {
    hf(a),
      (t = vi(t, "onChange")),
      0 < t.length &&
        ((i = new ja("onChange", "change", null, i, a)),
        A.push({ event: i, listeners: t }));
  }
  var qn = null,
    Ao = null;
  function Nv(A) {
    pd(A, 0);
  }
  function gi(A) {
    var t = Zr(A);
    if (NA(t)) return A;
  }
  function Mv(A, t) {
    if (A === "change") return t;
  }
  var qf = !1;
  if (f) {
    var $a;
    if (f) {
      var qa = "oninput" in document;
      if (!qa) {
        var Ad = document.createElement("div");
        Ad.setAttribute("oninput", "return;"),
          (qa = typeof Ad.oninput == "function");
      }
      $a = qa;
    } else $a = !1;
    qf = $a && (!document.documentMode || 9 < document.documentMode);
  }
  function ed() {
    qn && (qn.detachEvent("onpropertychange", td), (Ao = qn = null));
  }
  function td(A) {
    if (A.propertyName === "value" && gi(Ao)) {
      var t = [];
      $f(t, Ao, A, La(A)), Qf(Nv, t);
    }
  }
  function Pv(A, t, i) {
    A === "focusin"
      ? (ed(), (qn = t), (Ao = i), qn.attachEvent("onpropertychange", td))
      : A === "focusout" && ed();
  }
  function _v(A) {
    if (A === "selectionchange" || A === "keyup" || A === "keydown")
      return gi(Ao);
  }
  function Vv(A, t) {
    if (A === "click") return gi(t);
  }
  function Gv(A, t) {
    if (A === "input" || A === "change") return gi(t);
  }
  function Wv(A, t) {
    return (A === t && (A !== 0 || 1 / A === 1 / t)) || (A !== A && t !== t);
  }
  var je = typeof Object.is == "function" ? Object.is : Wv;
  function eo(A, t) {
    if (je(A, t)) return !0;
    if (
      typeof A != "object" ||
      A === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var i = Object.keys(A),
      a = Object.keys(t);
    if (i.length !== a.length) return !1;
    for (a = 0; a < i.length; a++) {
      var u = i[a];
      if (!B.call(t, u) || !je(A[u], t[u])) return !1;
    }
    return !0;
  }
  function rd(A) {
    for (; A && A.firstChild; ) A = A.firstChild;
    return A;
  }
  function nd(A, t) {
    var i = rd(A);
    A = 0;
    for (var a; i; ) {
      if (i.nodeType === 3) {
        if (((a = A + i.textContent.length), A <= t && a >= t))
          return { node: i, offset: t - A };
        A = a;
      }
      A: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break A;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = rd(i);
    }
  }
  function od(A, t) {
    return A && t
      ? A === t
        ? !0
        : A && A.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? od(A, t.parentNode)
            : "contains" in A
              ? A.contains(t)
              : A.compareDocumentPosition
                ? !!(A.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function id() {
    for (var A = window, t = oe(); t instanceof A.HTMLIFrameElement; ) {
      try {
        var i = typeof t.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) A = t.contentWindow;
      else break;
      t = oe(A.document);
    }
    return t;
  }
  function Al(A) {
    var t = A && A.nodeName && A.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (A.type === "text" ||
          A.type === "search" ||
          A.type === "tel" ||
          A.type === "url" ||
          A.type === "password")) ||
        t === "textarea" ||
        A.contentEditable === "true")
    );
  }
  function jv(A) {
    var t = id(),
      i = A.focusedElem,
      a = A.selectionRange;
    if (
      t !== i &&
      i &&
      i.ownerDocument &&
      od(i.ownerDocument.documentElement, i)
    ) {
      if (a !== null && Al(i)) {
        if (
          ((t = a.start),
          (A = a.end),
          A === void 0 && (A = t),
          "selectionStart" in i)
        )
          (i.selectionStart = t),
            (i.selectionEnd = Math.min(A, i.value.length));
        else if (
          ((A = ((t = i.ownerDocument || document) && t.defaultView) || window),
          A.getSelection)
        ) {
          A = A.getSelection();
          var u = i.textContent.length,
            d = Math.min(a.start, u);
          (a = a.end === void 0 ? d : Math.min(a.end, u)),
            !A.extend && d > a && ((u = a), (a = d), (d = u)),
            (u = nd(i, d));
          var p = nd(i, a);
          u &&
            p &&
            (A.rangeCount !== 1 ||
              A.anchorNode !== u.node ||
              A.anchorOffset !== u.offset ||
              A.focusNode !== p.node ||
              A.focusOffset !== p.offset) &&
            ((t = t.createRange()),
            t.setStart(u.node, u.offset),
            A.removeAllRanges(),
            d > a
              ? (A.addRange(t), A.extend(p.node, p.offset))
              : (t.setEnd(p.node, p.offset), A.addRange(t)));
        }
      }
      for (t = [], A = i; (A = A.parentNode); )
        A.nodeType === 1 &&
          t.push({ element: A, left: A.scrollLeft, top: A.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < t.length; i++)
        (A = t[i]),
          (A.element.scrollLeft = A.left),
          (A.element.scrollTop = A.top);
    }
  }
  var Xv = f && "documentMode" in document && 11 >= document.documentMode,
    Xr = null,
    el = null,
    to = null,
    tl = !1;
  function sd(A, t, i) {
    var a =
      i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    tl ||
      Xr == null ||
      Xr !== oe(a) ||
      ((a = Xr),
      "selectionStart" in a && Al(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (to && eo(to, a)) ||
        ((to = a),
        (a = vi(el, "onSelect")),
        0 < a.length &&
          ((t = new ja("onSelect", "select", null, t, i)),
          A.push({ event: t, listeners: a }),
          (t.target = Xr))));
  }
  function pi(A, t) {
    var i = {};
    return (
      (i[A.toLowerCase()] = t.toLowerCase()),
      (i["Webkit" + A] = "webkit" + t),
      (i["Moz" + A] = "moz" + t),
      i
    );
  }
  var zr = {
      animationend: pi("Animation", "AnimationEnd"),
      animationiteration: pi("Animation", "AnimationIteration"),
      animationstart: pi("Animation", "AnimationStart"),
      transitionend: pi("Transition", "TransitionEnd"),
    },
    rl = {},
    ad = {};
  f &&
    ((ad = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete zr.animationend.animation,
      delete zr.animationiteration.animation,
      delete zr.animationstart.animation),
    "TransitionEvent" in window || delete zr.transitionend.transition);
  function wi(A) {
    if (rl[A]) return rl[A];
    if (!zr[A]) return A;
    var t = zr[A],
      i;
    for (i in t) if (t.hasOwnProperty(i) && i in ad) return (rl[A] = t[i]);
    return A;
  }
  var ld = wi("animationend"),
    ud = wi("animationiteration"),
    cd = wi("animationstart"),
    fd = wi("transitionend"),
    dd = /* @__PURE__ */ new Map(),
    Bd =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Rt(A, t) {
    dd.set(A, t), l(t, [A]);
  }
  for (var nl = 0; nl < Bd.length; nl++) {
    var ol = Bd[nl],
      zv = ol.toLowerCase(),
      Jv = ol[0].toUpperCase() + ol.slice(1);
    Rt(zv, "on" + Jv);
  }
  Rt(ld, "onAnimationEnd"),
    Rt(ud, "onAnimationIteration"),
    Rt(cd, "onAnimationStart"),
    Rt("dblclick", "onDoubleClick"),
    Rt("focusin", "onFocus"),
    Rt("focusout", "onBlur"),
    Rt(fd, "onTransitionEnd"),
    c("onMouseEnter", ["mouseout", "mouseover"]),
    c("onMouseLeave", ["mouseout", "mouseover"]),
    c("onPointerEnter", ["pointerout", "pointerover"]),
    c("onPointerLeave", ["pointerout", "pointerover"]),
    l(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    l(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    l(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    l(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    l(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var ro =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Yv = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(ro),
    );
  function gd(A, t, i) {
    var a = A.type || "unknown-event";
    (A.currentTarget = i), z0(a, t, void 0, A), (A.currentTarget = null);
  }
  function pd(A, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < A.length; i++) {
      var a = A[i],
        u = a.event;
      a = a.listeners;
      A: {
        var d = void 0;
        if (t)
          for (var p = a.length - 1; 0 <= p; p--) {
            var y = a[p],
              x = y.instance,
              K = y.currentTarget;
            if (((y = y.listener), x !== d && u.isPropagationStopped()))
              break A;
            gd(u, y, K), (d = x);
          }
        else
          for (p = 0; p < a.length; p++) {
            if (
              ((y = a[p]),
              (x = y.instance),
              (K = y.currentTarget),
              (y = y.listener),
              x !== d && u.isPropagationStopped())
            )
              break A;
            gd(u, y, K), (d = x);
          }
      }
    }
    if (ei) throw ((A = ka), (ei = !1), (ka = null), A);
  }
  function DA(A, t) {
    var i = t[dl];
    i === void 0 && (i = t[dl] = /* @__PURE__ */ new Set());
    var a = A + "__bubble";
    i.has(a) || (wd(t, A, 2, !1), i.add(a));
  }
  function il(A, t, i) {
    var a = 0;
    t && (a |= 4), wd(i, A, a, t);
  }
  var hi = "_reactListening" + Math.random().toString(36).slice(2);
  function no(A) {
    if (!A[hi]) {
      (A[hi] = !0),
        o.forEach(function (i) {
          i !== "selectionchange" && (Yv.has(i) || il(i, !1, A), il(i, !0, A));
        });
      var t = A.nodeType === 9 ? A : A.ownerDocument;
      t === null || t[hi] || ((t[hi] = !0), il("selectionchange", !1, t));
    }
  }
  function wd(A, t, i, a) {
    switch (Mf(t)) {
      case 1:
        var u = uv;
        break;
      case 4:
        u = cv;
        break;
      default:
        u = Va;
    }
    (i = u.bind(null, t, i, A)),
      (u = void 0),
      !Ka ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      a
        ? u !== void 0
          ? A.addEventListener(t, i, { capture: !0, passive: u })
          : A.addEventListener(t, i, !0)
        : u !== void 0
          ? A.addEventListener(t, i, { passive: u })
          : A.addEventListener(t, i, !1);
  }
  function sl(A, t, i, a, u) {
    var d = a;
    if (!(t & 1) && !(t & 2) && a !== null)
      A: for (;;) {
        if (a === null) return;
        var p = a.tag;
        if (p === 3 || p === 4) {
          var y = a.stateNode.containerInfo;
          if (y === u || (y.nodeType === 8 && y.parentNode === u)) break;
          if (p === 4)
            for (p = a.return; p !== null; ) {
              var x = p.tag;
              if (
                (x === 3 || x === 4) &&
                ((x = p.stateNode.containerInfo),
                x === u || (x.nodeType === 8 && x.parentNode === u))
              )
                return;
              p = p.return;
            }
          for (; y !== null; ) {
            if (((p = wr(y)), p === null)) return;
            if (((x = p.tag), x === 5 || x === 6)) {
              a = d = p;
              continue A;
            }
            y = y.parentNode;
          }
        }
        a = a.return;
      }
    Qf(function () {
      var K = d,
        G = La(i),
        W = [];
      A: {
        var _ = dd.get(A);
        if (_ !== void 0) {
          var eA = ja,
            iA = A;
          switch (A) {
            case "keypress":
              if (fi(i) === 0) break A;
            case "keydown":
            case "keyup":
              eA = Ev;
              break;
            case "focusin":
              (iA = "focus"), (eA = Ja);
              break;
            case "focusout":
              (iA = "blur"), (eA = Ja);
              break;
            case "beforeblur":
            case "afterblur":
              eA = Ja;
              break;
            case "click":
              if (i.button === 2) break A;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              eA = Vf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              eA = Bv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              eA = Hv;
              break;
            case ld:
            case ud:
            case cd:
              eA = wv;
              break;
            case fd:
              eA = bv;
              break;
            case "scroll":
              eA = fv;
              break;
            case "wheel":
              eA = Tv;
              break;
            case "copy":
            case "cut":
            case "paste":
              eA = vv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              eA = Wf;
          }
          var sA = (t & 4) !== 0,
            WA = !sA && A === "scroll",
            L = sA ? (_ !== null ? _ + "Capture" : null) : _;
          sA = [];
          for (var S = K, D; S !== null; ) {
            D = S;
            var J = D.stateNode;
            if (
              (D.tag === 5 &&
                J !== null &&
                ((D = J),
                L !== null &&
                  ((J = Mn(S, L)), J != null && sA.push(oo(S, J, D)))),
              WA)
            )
              break;
            S = S.return;
          }
          0 < sA.length &&
            ((_ = new eA(_, iA, null, i, G)),
            W.push({ event: _, listeners: sA }));
        }
      }
      if (!(t & 7)) {
        A: {
          if (
            ((_ = A === "mouseover" || A === "pointerover"),
            (eA = A === "mouseout" || A === "pointerout"),
            _ &&
              i !== ba &&
              (iA = i.relatedTarget || i.fromElement) &&
              (wr(iA) || iA[Bt]))
          )
            break A;
          if (
            (eA || _) &&
            ((_ =
              G.window === G
                ? G
                : (_ = G.ownerDocument)
                  ? _.defaultView || _.parentWindow
                  : window),
            eA
              ? ((iA = i.relatedTarget || i.toElement),
                (eA = K),
                (iA = iA ? wr(iA) : null),
                iA !== null &&
                  ((WA = pr(iA)),
                  iA !== WA || (iA.tag !== 5 && iA.tag !== 6)) &&
                  (iA = null))
              : ((eA = null), (iA = K)),
            eA !== iA)
          ) {
            if (
              ((sA = Vf),
              (J = "onMouseLeave"),
              (L = "onMouseEnter"),
              (S = "mouse"),
              (A === "pointerout" || A === "pointerover") &&
                ((sA = Wf),
                (J = "onPointerLeave"),
                (L = "onPointerEnter"),
                (S = "pointer")),
              (WA = eA == null ? _ : Zr(eA)),
              (D = iA == null ? _ : Zr(iA)),
              (_ = new sA(J, S + "leave", eA, i, G)),
              (_.target = WA),
              (_.relatedTarget = D),
              (J = null),
              wr(G) === K &&
                ((sA = new sA(L, S + "enter", iA, i, G)),
                (sA.target = D),
                (sA.relatedTarget = WA),
                (J = sA)),
              (WA = J),
              eA && iA)
            )
              e: {
                for (sA = eA, L = iA, S = 0, D = sA; D; D = Jr(D)) S++;
                for (D = 0, J = L; J; J = Jr(J)) D++;
                for (; 0 < S - D; ) (sA = Jr(sA)), S--;
                for (; 0 < D - S; ) (L = Jr(L)), D--;
                for (; S--; ) {
                  if (sA === L || (L !== null && sA === L.alternate)) break e;
                  (sA = Jr(sA)), (L = Jr(L));
                }
                sA = null;
              }
            else sA = null;
            eA !== null && hd(W, _, eA, sA, !1),
              iA !== null && WA !== null && hd(W, WA, iA, sA, !0);
          }
        }
        A: {
          if (
            ((_ = K ? Zr(K) : window),
            (eA = _.nodeName && _.nodeName.toLowerCase()),
            eA === "select" || (eA === "input" && _.type === "file"))
          )
            var lA = Mv;
          else if (Zf(_))
            if (qf) lA = Gv;
            else {
              lA = _v;
              var gA = Pv;
            }
          else
            (eA = _.nodeName) &&
              eA.toLowerCase() === "input" &&
              (_.type === "checkbox" || _.type === "radio") &&
              (lA = Vv);
          if (lA && (lA = lA(A, K))) {
            $f(W, lA, i, G);
            break A;
          }
          gA && gA(A, _, K),
            A === "focusout" &&
              (gA = _._wrapperState) &&
              gA.controlled &&
              _.type === "number" &&
              Ea(_, "number", _.value);
        }
        switch (((gA = K ? Zr(K) : window), A)) {
          case "focusin":
            (Zf(gA) || gA.contentEditable === "true") &&
              ((Xr = gA), (el = K), (to = null));
            break;
          case "focusout":
            to = el = Xr = null;
            break;
          case "mousedown":
            tl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (tl = !1), sd(W, i, G);
            break;
          case "selectionchange":
            if (Xv) break;
          case "keydown":
          case "keyup":
            sd(W, i, G);
        }
        var pA;
        if (Za)
          A: {
            switch (A) {
              case "compositionstart":
                var vA = "onCompositionStart";
                break A;
              case "compositionend":
                vA = "onCompositionEnd";
                break A;
              case "compositionupdate":
                vA = "onCompositionUpdate";
                break A;
            }
            vA = void 0;
          }
        else
          jr
            ? Jf(A, i) && (vA = "onCompositionEnd")
            : A === "keydown" &&
              i.keyCode === 229 &&
              (vA = "onCompositionStart");
        vA &&
          (jf &&
            i.locale !== "ko" &&
            (jr || vA !== "onCompositionStart"
              ? vA === "onCompositionEnd" && jr && (pA = Pf())
              : ((kt = G),
                (Wa = "value" in kt ? kt.value : kt.textContent),
                (jr = !0))),
          (gA = vi(K, vA)),
          0 < gA.length &&
            ((vA = new Gf(vA, A, null, i, G)),
            W.push({ event: vA, listeners: gA }),
            pA
              ? (vA.data = pA)
              : ((pA = Yf(i)), pA !== null && (vA.data = pA)))),
          (pA = Kv ? kv(A, i) : Rv(A, i)) &&
            ((K = vi(K, "onBeforeInput")),
            0 < K.length &&
              ((G = new Gf("onBeforeInput", "beforeinput", null, i, G)),
              W.push({ event: G, listeners: K }),
              (G.data = pA)));
      }
      pd(W, t);
    });
  }
  function oo(A, t, i) {
    return { instance: A, listener: t, currentTarget: i };
  }
  function vi(A, t) {
    for (var i = t + "Capture", a = []; A !== null; ) {
      var u = A,
        d = u.stateNode;
      u.tag === 5 &&
        d !== null &&
        ((u = d),
        (d = Mn(A, i)),
        d != null && a.unshift(oo(A, d, u)),
        (d = Mn(A, t)),
        d != null && a.push(oo(A, d, u))),
        (A = A.return);
    }
    return a;
  }
  function Jr(A) {
    if (A === null) return null;
    do A = A.return;
    while (A && A.tag !== 5);
    return A || null;
  }
  function hd(A, t, i, a, u) {
    for (var d = t._reactName, p = []; i !== null && i !== a; ) {
      var y = i,
        x = y.alternate,
        K = y.stateNode;
      if (x !== null && x === a) break;
      y.tag === 5 &&
        K !== null &&
        ((y = K),
        u
          ? ((x = Mn(i, d)), x != null && p.unshift(oo(i, x, y)))
          : u || ((x = Mn(i, d)), x != null && p.push(oo(i, x, y)))),
        (i = i.return);
    }
    p.length !== 0 && A.push({ event: t, listeners: p });
  }
  var Zv = /\r\n?/g,
    $v = /\u0000|\uFFFD/g;
  function vd(A) {
    return (typeof A == "string" ? A : "" + A)
      .replace(
        Zv,
        `
`,
      )
      .replace($v, "");
  }
  function mi(A, t, i) {
    if (((t = vd(t)), vd(A) !== t && i)) throw Error(n(425));
  }
  function Ci() {}
  var al = null,
    ll = null;
  function ul(A, t) {
    return (
      A === "textarea" ||
      A === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var cl = typeof setTimeout == "function" ? setTimeout : void 0,
    qv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    md = typeof Promise == "function" ? Promise : void 0,
    Am =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof md < "u"
          ? function (A) {
              return md.resolve(null).then(A).catch(em);
            }
          : cl;
  function em(A) {
    setTimeout(function () {
      throw A;
    });
  }
  function fl(A, t) {
    var i = t,
      a = 0;
    do {
      var u = i.nextSibling;
      if ((A.removeChild(i), u && u.nodeType === 8))
        if (((i = u.data), i === "/$")) {
          if (a === 0) {
            A.removeChild(u), Jn(t);
            return;
          }
          a--;
        } else (i !== "$" && i !== "$?" && i !== "$!") || a++;
      i = u;
    } while (i);
    Jn(t);
  }
  function Ot(A) {
    for (; A != null; A = A.nextSibling) {
      var t = A.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = A.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return A;
  }
  function Cd(A) {
    A = A.previousSibling;
    for (var t = 0; A; ) {
      if (A.nodeType === 8) {
        var i = A.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (t === 0) return A;
          t--;
        } else i === "/$" && t++;
      }
      A = A.previousSibling;
    }
    return null;
  }
  var Yr = Math.random().toString(36).slice(2),
    nt = "__reactFiber$" + Yr,
    io = "__reactProps$" + Yr,
    Bt = "__reactContainer$" + Yr,
    dl = "__reactEvents$" + Yr,
    tm = "__reactListeners$" + Yr,
    rm = "__reactHandles$" + Yr;
  function wr(A) {
    var t = A[nt];
    if (t) return t;
    for (var i = A.parentNode; i; ) {
      if ((t = i[Bt] || i[nt])) {
        if (
          ((i = t.alternate),
          t.child !== null || (i !== null && i.child !== null))
        )
          for (A = Cd(A); A !== null; ) {
            if ((i = A[nt])) return i;
            A = Cd(A);
          }
        return t;
      }
      (A = i), (i = A.parentNode);
    }
    return null;
  }
  function so(A) {
    return (
      (A = A[nt] || A[Bt]),
      !A || (A.tag !== 5 && A.tag !== 6 && A.tag !== 13 && A.tag !== 3)
        ? null
        : A
    );
  }
  function Zr(A) {
    if (A.tag === 5 || A.tag === 6) return A.stateNode;
    throw Error(n(33));
  }
  function Qi(A) {
    return A[io] || null;
  }
  var Bl = [],
    $r = -1;
  function Nt(A) {
    return { current: A };
  }
  function KA(A) {
    0 > $r || ((A.current = Bl[$r]), (Bl[$r] = null), $r--);
  }
  function bA(A, t) {
    $r++, (Bl[$r] = A.current), (A.current = t);
  }
  var Mt = {},
    ue = Nt(Mt),
    me = Nt(!1),
    hr = Mt;
  function qr(A, t) {
    var i = A.type.contextTypes;
    if (!i) return Mt;
    var a = A.stateNode;
    if (a && a.__reactInternalMemoizedUnmaskedChildContext === t)
      return a.__reactInternalMemoizedMaskedChildContext;
    var u = {},
      d;
    for (d in i) u[d] = t[d];
    return (
      a &&
        ((A = A.stateNode),
        (A.__reactInternalMemoizedUnmaskedChildContext = t),
        (A.__reactInternalMemoizedMaskedChildContext = u)),
      u
    );
  }
  function Ce(A) {
    return (A = A.childContextTypes), A != null;
  }
  function yi() {
    KA(me), KA(ue);
  }
  function Qd(A, t, i) {
    if (ue.current !== Mt) throw Error(n(168));
    bA(ue, t), bA(me, i);
  }
  function yd(A, t, i) {
    var a = A.stateNode;
    if (((t = t.childContextTypes), typeof a.getChildContext != "function"))
      return i;
    a = a.getChildContext();
    for (var u in a) if (!(u in t)) throw Error(n(108, $(A) || "Unknown", u));
    return Y({}, i, a);
  }
  function Ui(A) {
    return (
      (A =
        ((A = A.stateNode) && A.__reactInternalMemoizedMergedChildContext) ||
        Mt),
      (hr = ue.current),
      bA(ue, A),
      bA(me, me.current),
      !0
    );
  }
  function Ud(A, t, i) {
    var a = A.stateNode;
    if (!a) throw Error(n(169));
    i
      ? ((A = yd(A, t, hr)),
        (a.__reactInternalMemoizedMergedChildContext = A),
        KA(me),
        KA(ue),
        bA(ue, A))
      : KA(me),
      bA(me, i);
  }
  var gt = null,
    Fi = !1,
    gl = !1;
  function Fd(A) {
    gt === null ? (gt = [A]) : gt.push(A);
  }
  function nm(A) {
    (Fi = !0), Fd(A);
  }
  function Pt() {
    if (!gl && gt !== null) {
      gl = !0;
      var A = 0,
        t = HA;
      try {
        var i = gt;
        for (HA = 1; A < i.length; A++) {
          var a = i[A];
          do a = a(!0);
          while (a !== null);
        }
        (gt = null), (Fi = !1);
      } catch (u) {
        throw (gt !== null && (gt = gt.slice(A + 1)), xf(Ra, Pt), u);
      } finally {
        (HA = t), (gl = !1);
      }
    }
    return null;
  }
  var An = [],
    en = 0,
    Ei = null,
    xi = 0,
    De = [],
    Ke = 0,
    vr = null,
    pt = 1,
    wt = "";
  function mr(A, t) {
    (An[en++] = xi), (An[en++] = Ei), (Ei = A), (xi = t);
  }
  function Ed(A, t, i) {
    (De[Ke++] = pt), (De[Ke++] = wt), (De[Ke++] = vr), (vr = A);
    var a = pt;
    A = wt;
    var u = 32 - We(a) - 1;
    (a &= ~(1 << u)), (i += 1);
    var d = 32 - We(t) + u;
    if (30 < d) {
      var p = u - (u % 5);
      (d = (a & ((1 << p) - 1)).toString(32)),
        (a >>= p),
        (u -= p),
        (pt = (1 << (32 - We(t) + u)) | (i << u) | a),
        (wt = d + A);
    } else (pt = (1 << d) | (i << u) | a), (wt = A);
  }
  function pl(A) {
    A.return !== null && (mr(A, 1), Ed(A, 1, 0));
  }
  function wl(A) {
    for (; A === Ei; )
      (Ei = An[--en]), (An[en] = null), (xi = An[--en]), (An[en] = null);
    for (; A === vr; )
      (vr = De[--Ke]),
        (De[Ke] = null),
        (wt = De[--Ke]),
        (De[Ke] = null),
        (pt = De[--Ke]),
        (De[Ke] = null);
  }
  var Ie = null,
    He = null,
    RA = !1,
    Xe = null;
  function xd(A, t) {
    var i = Ne(5, null, null, 0);
    (i.elementType = "DELETED"),
      (i.stateNode = t),
      (i.return = A),
      (t = A.deletions),
      t === null ? ((A.deletions = [i]), (A.flags |= 16)) : t.push(i);
  }
  function Id(A, t) {
    switch (A.tag) {
      case 5:
        var i = A.type;
        return (
          (t =
            t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((A.stateNode = t), (Ie = A), (He = Ot(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = A.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((A.stateNode = t), (Ie = A), (He = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((i = vr !== null ? { id: pt, overflow: wt } : null),
              (A.memoizedState = {
                dehydrated: t,
                treeContext: i,
                retryLane: 1073741824,
              }),
              (i = Ne(18, null, null, 0)),
              (i.stateNode = t),
              (i.return = A),
              (A.child = i),
              (Ie = A),
              (He = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function hl(A) {
    return (A.mode & 1) !== 0 && (A.flags & 128) === 0;
  }
  function vl(A) {
    if (RA) {
      var t = He;
      if (t) {
        var i = t;
        if (!Id(A, t)) {
          if (hl(A)) throw Error(n(418));
          t = Ot(i.nextSibling);
          var a = Ie;
          t && Id(A, t)
            ? xd(a, i)
            : ((A.flags = (A.flags & -4097) | 2), (RA = !1), (Ie = A));
        }
      } else {
        if (hl(A)) throw Error(n(418));
        (A.flags = (A.flags & -4097) | 2), (RA = !1), (Ie = A);
      }
    }
  }
  function Hd(A) {
    for (
      A = A.return;
      A !== null && A.tag !== 5 && A.tag !== 3 && A.tag !== 13;

    )
      A = A.return;
    Ie = A;
  }
  function Ii(A) {
    if (A !== Ie) return !1;
    if (!RA) return Hd(A), (RA = !0), !1;
    var t;
    if (
      ((t = A.tag !== 3) &&
        !(t = A.tag !== 5) &&
        ((t = A.type),
        (t = t !== "head" && t !== "body" && !ul(A.type, A.memoizedProps))),
      t && (t = He))
    ) {
      if (hl(A)) throw (Sd(), Error(n(418)));
      for (; t; ) xd(A, t), (t = Ot(t.nextSibling));
    }
    if ((Hd(A), A.tag === 13)) {
      if (((A = A.memoizedState), (A = A !== null ? A.dehydrated : null), !A))
        throw Error(n(317));
      A: {
        for (A = A.nextSibling, t = 0; A; ) {
          if (A.nodeType === 8) {
            var i = A.data;
            if (i === "/$") {
              if (t === 0) {
                He = Ot(A.nextSibling);
                break A;
              }
              t--;
            } else (i !== "$" && i !== "$!" && i !== "$?") || t++;
          }
          A = A.nextSibling;
        }
        He = null;
      }
    } else He = Ie ? Ot(A.stateNode.nextSibling) : null;
    return !0;
  }
  function Sd() {
    for (var A = He; A; ) A = Ot(A.nextSibling);
  }
  function tn() {
    (He = Ie = null), (RA = !1);
  }
  function ml(A) {
    Xe === null ? (Xe = [A]) : Xe.push(A);
  }
  var om = T.ReactCurrentBatchConfig;
  function ao(A, t, i) {
    if (
      ((A = i.ref),
      A !== null && typeof A != "function" && typeof A != "object")
    ) {
      if (i._owner) {
        if (((i = i._owner), i)) {
          if (i.tag !== 1) throw Error(n(309));
          var a = i.stateNode;
        }
        if (!a) throw Error(n(147, A));
        var u = a,
          d = "" + A;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === d
          ? t.ref
          : ((t = function (p) {
              var y = u.refs;
              p === null ? delete y[d] : (y[d] = p);
            }),
            (t._stringRef = d),
            t);
      }
      if (typeof A != "string") throw Error(n(284));
      if (!i._owner) throw Error(n(290, A));
    }
    return A;
  }
  function Hi(A, t) {
    throw (
      ((A = Object.prototype.toString.call(t)),
      Error(
        n(
          31,
          A === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : A,
        ),
      ))
    );
  }
  function bd(A) {
    var t = A._init;
    return t(A._payload);
  }
  function Ld(A) {
    function t(L, S) {
      if (A) {
        var D = L.deletions;
        D === null ? ((L.deletions = [S]), (L.flags |= 16)) : D.push(S);
      }
    }
    function i(L, S) {
      if (!A) return null;
      for (; S !== null; ) t(L, S), (S = S.sibling);
      return null;
    }
    function a(L, S) {
      for (L = /* @__PURE__ */ new Map(); S !== null; )
        S.key !== null ? L.set(S.key, S) : L.set(S.index, S), (S = S.sibling);
      return L;
    }
    function u(L, S) {
      return (L = Jt(L, S)), (L.index = 0), (L.sibling = null), L;
    }
    function d(L, S, D) {
      return (
        (L.index = D),
        A
          ? ((D = L.alternate),
            D !== null
              ? ((D = D.index), D < S ? ((L.flags |= 2), S) : D)
              : ((L.flags |= 2), S))
          : ((L.flags |= 1048576), S)
      );
    }
    function p(L) {
      return A && L.alternate === null && (L.flags |= 2), L;
    }
    function y(L, S, D, J) {
      return S === null || S.tag !== 6
        ? ((S = cu(D, L.mode, J)), (S.return = L), S)
        : ((S = u(S, D)), (S.return = L), S);
    }
    function x(L, S, D, J) {
      var lA = D.type;
      return lA === M
        ? G(L, S, D.props.children, J, D.key)
        : S !== null &&
            (S.elementType === lA ||
              (typeof lA == "object" &&
                lA !== null &&
                lA.$$typeof === aA &&
                bd(lA) === S.type))
          ? ((J = u(S, D.props)), (J.ref = ao(L, S, D)), (J.return = L), J)
          : ((J = qi(D.type, D.key, D.props, null, L.mode, J)),
            (J.ref = ao(L, S, D)),
            (J.return = L),
            J);
    }
    function K(L, S, D, J) {
      return S === null ||
        S.tag !== 4 ||
        S.stateNode.containerInfo !== D.containerInfo ||
        S.stateNode.implementation !== D.implementation
        ? ((S = fu(D, L.mode, J)), (S.return = L), S)
        : ((S = u(S, D.children || [])), (S.return = L), S);
    }
    function G(L, S, D, J, lA) {
      return S === null || S.tag !== 7
        ? ((S = Ir(D, L.mode, J, lA)), (S.return = L), S)
        : ((S = u(S, D)), (S.return = L), S);
    }
    function W(L, S, D) {
      if ((typeof S == "string" && S !== "") || typeof S == "number")
        return (S = cu("" + S, L.mode, D)), (S.return = L), S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case k:
            return (
              (D = qi(S.type, S.key, S.props, null, L.mode, D)),
              (D.ref = ao(L, null, S)),
              (D.return = L),
              D
            );
          case O:
            return (S = fu(S, L.mode, D)), (S.return = L), S;
          case aA:
            var J = S._init;
            return W(L, J(S._payload), D);
        }
        if (Rn(S) || j(S))
          return (S = Ir(S, L.mode, D, null)), (S.return = L), S;
        Hi(L, S);
      }
      return null;
    }
    function _(L, S, D, J) {
      var lA = S !== null ? S.key : null;
      if ((typeof D == "string" && D !== "") || typeof D == "number")
        return lA !== null ? null : y(L, S, "" + D, J);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case k:
            return D.key === lA ? x(L, S, D, J) : null;
          case O:
            return D.key === lA ? K(L, S, D, J) : null;
          case aA:
            return (lA = D._init), _(L, S, lA(D._payload), J);
        }
        if (Rn(D) || j(D)) return lA !== null ? null : G(L, S, D, J, null);
        Hi(L, D);
      }
      return null;
    }
    function eA(L, S, D, J, lA) {
      if ((typeof J == "string" && J !== "") || typeof J == "number")
        return (L = L.get(D) || null), y(S, L, "" + J, lA);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case k:
            return (
              (L = L.get(J.key === null ? D : J.key) || null), x(S, L, J, lA)
            );
          case O:
            return (
              (L = L.get(J.key === null ? D : J.key) || null), K(S, L, J, lA)
            );
          case aA:
            var gA = J._init;
            return eA(L, S, D, gA(J._payload), lA);
        }
        if (Rn(J) || j(J)) return (L = L.get(D) || null), G(S, L, J, lA, null);
        Hi(S, J);
      }
      return null;
    }
    function iA(L, S, D, J) {
      for (
        var lA = null, gA = null, pA = S, vA = (S = 0), re = null;
        pA !== null && vA < D.length;
        vA++
      ) {
        pA.index > vA ? ((re = pA), (pA = null)) : (re = pA.sibling);
        var EA = _(L, pA, D[vA], J);
        if (EA === null) {
          pA === null && (pA = re);
          break;
        }
        A && pA && EA.alternate === null && t(L, pA),
          (S = d(EA, S, vA)),
          gA === null ? (lA = EA) : (gA.sibling = EA),
          (gA = EA),
          (pA = re);
      }
      if (vA === D.length) return i(L, pA), RA && mr(L, vA), lA;
      if (pA === null) {
        for (; vA < D.length; vA++)
          (pA = W(L, D[vA], J)),
            pA !== null &&
              ((S = d(pA, S, vA)),
              gA === null ? (lA = pA) : (gA.sibling = pA),
              (gA = pA));
        return RA && mr(L, vA), lA;
      }
      for (pA = a(L, pA); vA < D.length; vA++)
        (re = eA(pA, L, vA, D[vA], J)),
          re !== null &&
            (A &&
              re.alternate !== null &&
              pA.delete(re.key === null ? vA : re.key),
            (S = d(re, S, vA)),
            gA === null ? (lA = re) : (gA.sibling = re),
            (gA = re));
      return (
        A &&
          pA.forEach(function (Yt) {
            return t(L, Yt);
          }),
        RA && mr(L, vA),
        lA
      );
    }
    function sA(L, S, D, J) {
      var lA = j(D);
      if (typeof lA != "function") throw Error(n(150));
      if (((D = lA.call(D)), D == null)) throw Error(n(151));
      for (
        var gA = (lA = null), pA = S, vA = (S = 0), re = null, EA = D.next();
        pA !== null && !EA.done;
        vA++, EA = D.next()
      ) {
        pA.index > vA ? ((re = pA), (pA = null)) : (re = pA.sibling);
        var Yt = _(L, pA, EA.value, J);
        if (Yt === null) {
          pA === null && (pA = re);
          break;
        }
        A && pA && Yt.alternate === null && t(L, pA),
          (S = d(Yt, S, vA)),
          gA === null ? (lA = Yt) : (gA.sibling = Yt),
          (gA = Yt),
          (pA = re);
      }
      if (EA.done) return i(L, pA), RA && mr(L, vA), lA;
      if (pA === null) {
        for (; !EA.done; vA++, EA = D.next())
          (EA = W(L, EA.value, J)),
            EA !== null &&
              ((S = d(EA, S, vA)),
              gA === null ? (lA = EA) : (gA.sibling = EA),
              (gA = EA));
        return RA && mr(L, vA), lA;
      }
      for (pA = a(L, pA); !EA.done; vA++, EA = D.next())
        (EA = eA(pA, L, vA, EA.value, J)),
          EA !== null &&
            (A &&
              EA.alternate !== null &&
              pA.delete(EA.key === null ? vA : EA.key),
            (S = d(EA, S, vA)),
            gA === null ? (lA = EA) : (gA.sibling = EA),
            (gA = EA));
      return (
        A &&
          pA.forEach(function (Om) {
            return t(L, Om);
          }),
        RA && mr(L, vA),
        lA
      );
    }
    function WA(L, S, D, J) {
      if (
        (typeof D == "object" &&
          D !== null &&
          D.type === M &&
          D.key === null &&
          (D = D.props.children),
        typeof D == "object" && D !== null)
      ) {
        switch (D.$$typeof) {
          case k:
            A: {
              for (var lA = D.key, gA = S; gA !== null; ) {
                if (gA.key === lA) {
                  if (((lA = D.type), lA === M)) {
                    if (gA.tag === 7) {
                      i(L, gA.sibling),
                        (S = u(gA, D.props.children)),
                        (S.return = L),
                        (L = S);
                      break A;
                    }
                  } else if (
                    gA.elementType === lA ||
                    (typeof lA == "object" &&
                      lA !== null &&
                      lA.$$typeof === aA &&
                      bd(lA) === gA.type)
                  ) {
                    i(L, gA.sibling),
                      (S = u(gA, D.props)),
                      (S.ref = ao(L, gA, D)),
                      (S.return = L),
                      (L = S);
                    break A;
                  }
                  i(L, gA);
                  break;
                } else t(L, gA);
                gA = gA.sibling;
              }
              D.type === M
                ? ((S = Ir(D.props.children, L.mode, J, D.key)),
                  (S.return = L),
                  (L = S))
                : ((J = qi(D.type, D.key, D.props, null, L.mode, J)),
                  (J.ref = ao(L, S, D)),
                  (J.return = L),
                  (L = J));
            }
            return p(L);
          case O:
            A: {
              for (gA = D.key; S !== null; ) {
                if (S.key === gA)
                  if (
                    S.tag === 4 &&
                    S.stateNode.containerInfo === D.containerInfo &&
                    S.stateNode.implementation === D.implementation
                  ) {
                    i(L, S.sibling),
                      (S = u(S, D.children || [])),
                      (S.return = L),
                      (L = S);
                    break A;
                  } else {
                    i(L, S);
                    break;
                  }
                else t(L, S);
                S = S.sibling;
              }
              (S = fu(D, L.mode, J)), (S.return = L), (L = S);
            }
            return p(L);
          case aA:
            return (gA = D._init), WA(L, S, gA(D._payload), J);
        }
        if (Rn(D)) return iA(L, S, D, J);
        if (j(D)) return sA(L, S, D, J);
        Hi(L, D);
      }
      return (typeof D == "string" && D !== "") || typeof D == "number"
        ? ((D = "" + D),
          S !== null && S.tag === 6
            ? (i(L, S.sibling), (S = u(S, D)), (S.return = L), (L = S))
            : (i(L, S), (S = cu(D, L.mode, J)), (S.return = L), (L = S)),
          p(L))
        : i(L, S);
    }
    return WA;
  }
  var rn = Ld(!0),
    Td = Ld(!1),
    Si = Nt(null),
    bi = null,
    nn = null,
    Cl = null;
  function Ql() {
    Cl = nn = bi = null;
  }
  function yl(A) {
    var t = Si.current;
    KA(Si), (A._currentValue = t);
  }
  function Ul(A, t, i) {
    for (; A !== null; ) {
      var a = A.alternate;
      if (
        ((A.childLanes & t) !== t
          ? ((A.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        A === i)
      )
        break;
      A = A.return;
    }
  }
  function on(A, t) {
    (bi = A),
      (Cl = nn = null),
      (A = A.dependencies),
      A !== null &&
        A.firstContext !== null &&
        (A.lanes & t && (Qe = !0), (A.firstContext = null));
  }
  function ke(A) {
    var t = A._currentValue;
    if (Cl !== A)
      if (((A = { context: A, memoizedValue: t, next: null }), nn === null)) {
        if (bi === null) throw Error(n(308));
        (nn = A), (bi.dependencies = { lanes: 0, firstContext: A });
      } else nn = nn.next = A;
    return t;
  }
  var Cr = null;
  function Fl(A) {
    Cr === null ? (Cr = [A]) : Cr.push(A);
  }
  function Dd(A, t, i, a) {
    var u = t.interleaved;
    return (
      u === null ? ((i.next = i), Fl(t)) : ((i.next = u.next), (u.next = i)),
      (t.interleaved = i),
      ht(A, a)
    );
  }
  function ht(A, t) {
    A.lanes |= t;
    var i = A.alternate;
    for (i !== null && (i.lanes |= t), i = A, A = A.return; A !== null; )
      (A.childLanes |= t),
        (i = A.alternate),
        i !== null && (i.childLanes |= t),
        (i = A),
        (A = A.return);
    return i.tag === 3 ? i.stateNode : null;
  }
  var _t = !1;
  function El(A) {
    A.updateQueue = {
      baseState: A.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Kd(A, t) {
    (A = A.updateQueue),
      t.updateQueue === A &&
        (t.updateQueue = {
          baseState: A.baseState,
          firstBaseUpdate: A.firstBaseUpdate,
          lastBaseUpdate: A.lastBaseUpdate,
          shared: A.shared,
          effects: A.effects,
        });
  }
  function vt(A, t) {
    return {
      eventTime: A,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Vt(A, t, i) {
    var a = A.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), FA & 2)) {
      var u = a.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (a.pending = t),
        ht(A, i)
      );
    }
    return (
      (u = a.interleaved),
      u === null ? ((t.next = t), Fl(a)) : ((t.next = u.next), (u.next = t)),
      (a.interleaved = t),
      ht(A, i)
    );
  }
  function Li(A, t, i) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (i & 4194240) !== 0))
    ) {
      var a = t.lanes;
      (a &= A.pendingLanes), (i |= a), (t.lanes = i), Ma(A, i);
    }
  }
  function kd(A, t) {
    var i = A.updateQueue,
      a = A.alternate;
    if (a !== null && ((a = a.updateQueue), i === a)) {
      var u = null,
        d = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var p = {
            eventTime: i.eventTime,
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          };
          d === null ? (u = d = p) : (d = d.next = p), (i = i.next);
        } while (i !== null);
        d === null ? (u = d = t) : (d = d.next = t);
      } else u = d = t;
      (i = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: d,
        shared: a.shared,
        effects: a.effects,
      }),
        (A.updateQueue = i);
      return;
    }
    (A = i.lastBaseUpdate),
      A === null ? (i.firstBaseUpdate = t) : (A.next = t),
      (i.lastBaseUpdate = t);
  }
  function Ti(A, t, i, a) {
    var u = A.updateQueue;
    _t = !1;
    var d = u.firstBaseUpdate,
      p = u.lastBaseUpdate,
      y = u.shared.pending;
    if (y !== null) {
      u.shared.pending = null;
      var x = y,
        K = x.next;
      (x.next = null), p === null ? (d = K) : (p.next = K), (p = x);
      var G = A.alternate;
      G !== null &&
        ((G = G.updateQueue),
        (y = G.lastBaseUpdate),
        y !== p &&
          (y === null ? (G.firstBaseUpdate = K) : (y.next = K),
          (G.lastBaseUpdate = x)));
    }
    if (d !== null) {
      var W = u.baseState;
      (p = 0), (G = K = x = null), (y = d);
      do {
        var _ = y.lane,
          eA = y.eventTime;
        if ((a & _) === _) {
          G !== null &&
            (G = G.next =
              {
                eventTime: eA,
                lane: 0,
                tag: y.tag,
                payload: y.payload,
                callback: y.callback,
                next: null,
              });
          A: {
            var iA = A,
              sA = y;
            switch (((_ = t), (eA = i), sA.tag)) {
              case 1:
                if (((iA = sA.payload), typeof iA == "function")) {
                  W = iA.call(eA, W, _);
                  break A;
                }
                W = iA;
                break A;
              case 3:
                iA.flags = (iA.flags & -65537) | 128;
              case 0:
                if (
                  ((iA = sA.payload),
                  (_ = typeof iA == "function" ? iA.call(eA, W, _) : iA),
                  _ == null)
                )
                  break A;
                W = Y({}, W, _);
                break A;
              case 2:
                _t = !0;
            }
          }
          y.callback !== null &&
            y.lane !== 0 &&
            ((A.flags |= 64),
            (_ = u.effects),
            _ === null ? (u.effects = [y]) : _.push(y));
        } else
          (eA = {
            eventTime: eA,
            lane: _,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null,
          }),
            G === null ? ((K = G = eA), (x = W)) : (G = G.next = eA),
            (p |= _);
        if (((y = y.next), y === null)) {
          if (((y = u.shared.pending), y === null)) break;
          (_ = y),
            (y = _.next),
            (_.next = null),
            (u.lastBaseUpdate = _),
            (u.shared.pending = null);
        }
      } while (!0);
      if (
        (G === null && (x = W),
        (u.baseState = x),
        (u.firstBaseUpdate = K),
        (u.lastBaseUpdate = G),
        (t = u.shared.interleaved),
        t !== null)
      ) {
        u = t;
        do (p |= u.lane), (u = u.next);
        while (u !== t);
      } else d === null && (u.shared.lanes = 0);
      (Ur |= p), (A.lanes = p), (A.memoizedState = W);
    }
  }
  function Rd(A, t, i) {
    if (((A = t.effects), (t.effects = null), A !== null))
      for (t = 0; t < A.length; t++) {
        var a = A[t],
          u = a.callback;
        if (u !== null) {
          if (((a.callback = null), (a = i), typeof u != "function"))
            throw Error(n(191, u));
          u.call(a);
        }
      }
  }
  var lo = {},
    ot = Nt(lo),
    uo = Nt(lo),
    co = Nt(lo);
  function Qr(A) {
    if (A === lo) throw Error(n(174));
    return A;
  }
  function xl(A, t) {
    switch ((bA(co, t), bA(uo, A), bA(ot, lo), (A = t.nodeType), A)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ia(null, "");
        break;
      default:
        (A = A === 8 ? t.parentNode : t),
          (t = A.namespaceURI || null),
          (A = A.tagName),
          (t = Ia(t, A));
    }
    KA(ot), bA(ot, t);
  }
  function sn() {
    KA(ot), KA(uo), KA(co);
  }
  function Od(A) {
    Qr(co.current);
    var t = Qr(ot.current),
      i = Ia(t, A.type);
    t !== i && (bA(uo, A), bA(ot, i));
  }
  function Il(A) {
    uo.current === A && (KA(ot), KA(uo));
  }
  var MA = Nt(0);
  function Di(A) {
    for (var t = A; t !== null; ) {
      if (t.tag === 13) {
        var i = t.memoizedState;
        if (
          i !== null &&
          ((i = i.dehydrated), i === null || i.data === "$?" || i.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === A) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === A) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Hl = [];
  function Sl() {
    for (var A = 0; A < Hl.length; A++)
      Hl[A]._workInProgressVersionPrimary = null;
    Hl.length = 0;
  }
  var Ki = T.ReactCurrentDispatcher,
    bl = T.ReactCurrentBatchConfig,
    yr = 0,
    PA = null,
    ZA = null,
    ee = null,
    ki = !1,
    fo = !1,
    Bo = 0,
    im = 0;
  function ce() {
    throw Error(n(321));
  }
  function Ll(A, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < A.length; i++)
      if (!je(A[i], t[i])) return !1;
    return !0;
  }
  function Tl(A, t, i, a, u, d) {
    if (
      ((yr = d),
      (PA = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Ki.current = A === null || A.memoizedState === null ? um : cm),
      (A = i(a, u)),
      fo)
    ) {
      d = 0;
      do {
        if (((fo = !1), (Bo = 0), 25 <= d)) throw Error(n(301));
        (d += 1),
          (ee = ZA = null),
          (t.updateQueue = null),
          (Ki.current = fm),
          (A = i(a, u));
      } while (fo);
    }
    if (
      ((Ki.current = Ni),
      (t = ZA !== null && ZA.next !== null),
      (yr = 0),
      (ee = ZA = PA = null),
      (ki = !1),
      t)
    )
      throw Error(n(300));
    return A;
  }
  function Dl() {
    var A = Bo !== 0;
    return (Bo = 0), A;
  }
  function it() {
    var A = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ee === null ? (PA.memoizedState = ee = A) : (ee = ee.next = A), ee;
  }
  function Re() {
    if (ZA === null) {
      var A = PA.alternate;
      A = A !== null ? A.memoizedState : null;
    } else A = ZA.next;
    var t = ee === null ? PA.memoizedState : ee.next;
    if (t !== null) (ee = t), (ZA = A);
    else {
      if (A === null) throw Error(n(310));
      (ZA = A),
        (A = {
          memoizedState: ZA.memoizedState,
          baseState: ZA.baseState,
          baseQueue: ZA.baseQueue,
          queue: ZA.queue,
          next: null,
        }),
        ee === null ? (PA.memoizedState = ee = A) : (ee = ee.next = A);
    }
    return ee;
  }
  function go(A, t) {
    return typeof t == "function" ? t(A) : t;
  }
  function Kl(A) {
    var t = Re(),
      i = t.queue;
    if (i === null) throw Error(n(311));
    i.lastRenderedReducer = A;
    var a = ZA,
      u = a.baseQueue,
      d = i.pending;
    if (d !== null) {
      if (u !== null) {
        var p = u.next;
        (u.next = d.next), (d.next = p);
      }
      (a.baseQueue = u = d), (i.pending = null);
    }
    if (u !== null) {
      (d = u.next), (a = a.baseState);
      var y = (p = null),
        x = null,
        K = d;
      do {
        var G = K.lane;
        if ((yr & G) === G)
          x !== null &&
            (x = x.next =
              {
                lane: 0,
                action: K.action,
                hasEagerState: K.hasEagerState,
                eagerState: K.eagerState,
                next: null,
              }),
            (a = K.hasEagerState ? K.eagerState : A(a, K.action));
        else {
          var W = {
            lane: G,
            action: K.action,
            hasEagerState: K.hasEagerState,
            eagerState: K.eagerState,
            next: null,
          };
          x === null ? ((y = x = W), (p = a)) : (x = x.next = W),
            (PA.lanes |= G),
            (Ur |= G);
        }
        K = K.next;
      } while (K !== null && K !== d);
      x === null ? (p = a) : (x.next = y),
        je(a, t.memoizedState) || (Qe = !0),
        (t.memoizedState = a),
        (t.baseState = p),
        (t.baseQueue = x),
        (i.lastRenderedState = a);
    }
    if (((A = i.interleaved), A !== null)) {
      u = A;
      do (d = u.lane), (PA.lanes |= d), (Ur |= d), (u = u.next);
      while (u !== A);
    } else u === null && (i.lanes = 0);
    return [t.memoizedState, i.dispatch];
  }
  function kl(A) {
    var t = Re(),
      i = t.queue;
    if (i === null) throw Error(n(311));
    i.lastRenderedReducer = A;
    var a = i.dispatch,
      u = i.pending,
      d = t.memoizedState;
    if (u !== null) {
      i.pending = null;
      var p = (u = u.next);
      do (d = A(d, p.action)), (p = p.next);
      while (p !== u);
      je(d, t.memoizedState) || (Qe = !0),
        (t.memoizedState = d),
        t.baseQueue === null && (t.baseState = d),
        (i.lastRenderedState = d);
    }
    return [d, a];
  }
  function Nd() {}
  function Md(A, t) {
    var i = PA,
      a = Re(),
      u = t(),
      d = !je(a.memoizedState, u);
    if (
      (d && ((a.memoizedState = u), (Qe = !0)),
      (a = a.queue),
      Rl(Vd.bind(null, i, a, A), [A]),
      a.getSnapshot !== t || d || (ee !== null && ee.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        po(9, _d.bind(null, i, a, u, t), void 0, null),
        te === null)
      )
        throw Error(n(349));
      yr & 30 || Pd(i, t, u);
    }
    return u;
  }
  function Pd(A, t, i) {
    (A.flags |= 16384),
      (A = { getSnapshot: t, value: i }),
      (t = PA.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (PA.updateQueue = t),
          (t.stores = [A]))
        : ((i = t.stores), i === null ? (t.stores = [A]) : i.push(A));
  }
  function _d(A, t, i, a) {
    (t.value = i), (t.getSnapshot = a), Gd(t) && Wd(A);
  }
  function Vd(A, t, i) {
    return i(function () {
      Gd(t) && Wd(A);
    });
  }
  function Gd(A) {
    var t = A.getSnapshot;
    A = A.value;
    try {
      var i = t();
      return !je(A, i);
    } catch {
      return !0;
    }
  }
  function Wd(A) {
    var t = ht(A, 1);
    t !== null && Ze(t, A, 1, -1);
  }
  function jd(A) {
    var t = it();
    return (
      typeof A == "function" && (A = A()),
      (t.memoizedState = t.baseState = A),
      (A = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: go,
        lastRenderedState: A,
      }),
      (t.queue = A),
      (A = A.dispatch = lm.bind(null, PA, A)),
      [t.memoizedState, A]
    );
  }
  function po(A, t, i, a) {
    return (
      (A = { tag: A, create: t, destroy: i, deps: a, next: null }),
      (t = PA.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (PA.updateQueue = t),
          (t.lastEffect = A.next = A))
        : ((i = t.lastEffect),
          i === null
            ? (t.lastEffect = A.next = A)
            : ((a = i.next), (i.next = A), (A.next = a), (t.lastEffect = A))),
      A
    );
  }
  function Xd() {
    return Re().memoizedState;
  }
  function Ri(A, t, i, a) {
    var u = it();
    (PA.flags |= A),
      (u.memoizedState = po(1 | t, i, void 0, a === void 0 ? null : a));
  }
  function Oi(A, t, i, a) {
    var u = Re();
    a = a === void 0 ? null : a;
    var d = void 0;
    if (ZA !== null) {
      var p = ZA.memoizedState;
      if (((d = p.destroy), a !== null && Ll(a, p.deps))) {
        u.memoizedState = po(t, i, d, a);
        return;
      }
    }
    (PA.flags |= A), (u.memoizedState = po(1 | t, i, d, a));
  }
  function zd(A, t) {
    return Ri(8390656, 8, A, t);
  }
  function Rl(A, t) {
    return Oi(2048, 8, A, t);
  }
  function Jd(A, t) {
    return Oi(4, 2, A, t);
  }
  function Yd(A, t) {
    return Oi(4, 4, A, t);
  }
  function Zd(A, t) {
    if (typeof t == "function")
      return (
        (A = A()),
        t(A),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (A = A()),
        (t.current = A),
        function () {
          t.current = null;
        }
      );
  }
  function $d(A, t, i) {
    return (
      (i = i != null ? i.concat([A]) : null), Oi(4, 4, Zd.bind(null, t, A), i)
    );
  }
  function Ol() {}
  function qd(A, t) {
    var i = Re();
    t = t === void 0 ? null : t;
    var a = i.memoizedState;
    return a !== null && t !== null && Ll(t, a[1])
      ? a[0]
      : ((i.memoizedState = [A, t]), A);
  }
  function AB(A, t) {
    var i = Re();
    t = t === void 0 ? null : t;
    var a = i.memoizedState;
    return a !== null && t !== null && Ll(t, a[1])
      ? a[0]
      : ((A = A()), (i.memoizedState = [A, t]), A);
  }
  function eB(A, t, i) {
    return yr & 21
      ? (je(i, t) ||
          ((i = bf()), (PA.lanes |= i), (Ur |= i), (A.baseState = !0)),
        t)
      : (A.baseState && ((A.baseState = !1), (Qe = !0)), (A.memoizedState = i));
  }
  function sm(A, t) {
    var i = HA;
    (HA = i !== 0 && 4 > i ? i : 4), A(!0);
    var a = bl.transition;
    bl.transition = {};
    try {
      A(!1), t();
    } finally {
      (HA = i), (bl.transition = a);
    }
  }
  function tB() {
    return Re().memoizedState;
  }
  function am(A, t, i) {
    var a = Xt(A);
    if (
      ((i = {
        lane: a,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      rB(A))
    )
      nB(t, i);
    else if (((i = Dd(A, t, i, a)), i !== null)) {
      var u = we();
      Ze(i, A, a, u), oB(i, t, a);
    }
  }
  function lm(A, t, i) {
    var a = Xt(A),
      u = {
        lane: a,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (rB(A)) nB(t, u);
    else {
      var d = A.alternate;
      if (
        A.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = t.lastRenderedReducer), d !== null)
      )
        try {
          var p = t.lastRenderedState,
            y = d(p, i);
          if (((u.hasEagerState = !0), (u.eagerState = y), je(y, p))) {
            var x = t.interleaved;
            x === null
              ? ((u.next = u), Fl(t))
              : ((u.next = x.next), (x.next = u)),
              (t.interleaved = u);
            return;
          }
        } catch {
        } finally {
        }
      (i = Dd(A, t, u, a)),
        i !== null && ((u = we()), Ze(i, A, a, u), oB(i, t, a));
    }
  }
  function rB(A) {
    var t = A.alternate;
    return A === PA || (t !== null && t === PA);
  }
  function nB(A, t) {
    fo = ki = !0;
    var i = A.pending;
    i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (A.pending = t);
  }
  function oB(A, t, i) {
    if (i & 4194240) {
      var a = t.lanes;
      (a &= A.pendingLanes), (i |= a), (t.lanes = i), Ma(A, i);
    }
  }
  var Ni = {
      readContext: ke,
      useCallback: ce,
      useContext: ce,
      useEffect: ce,
      useImperativeHandle: ce,
      useInsertionEffect: ce,
      useLayoutEffect: ce,
      useMemo: ce,
      useReducer: ce,
      useRef: ce,
      useState: ce,
      useDebugValue: ce,
      useDeferredValue: ce,
      useTransition: ce,
      useMutableSource: ce,
      useSyncExternalStore: ce,
      useId: ce,
      unstable_isNewReconciler: !1,
    },
    um = {
      readContext: ke,
      useCallback: function (A, t) {
        return (it().memoizedState = [A, t === void 0 ? null : t]), A;
      },
      useContext: ke,
      useEffect: zd,
      useImperativeHandle: function (A, t, i) {
        return (
          (i = i != null ? i.concat([A]) : null),
          Ri(4194308, 4, Zd.bind(null, t, A), i)
        );
      },
      useLayoutEffect: function (A, t) {
        return Ri(4194308, 4, A, t);
      },
      useInsertionEffect: function (A, t) {
        return Ri(4, 2, A, t);
      },
      useMemo: function (A, t) {
        var i = it();
        return (
          (t = t === void 0 ? null : t),
          (A = A()),
          (i.memoizedState = [A, t]),
          A
        );
      },
      useReducer: function (A, t, i) {
        var a = it();
        return (
          (t = i !== void 0 ? i(t) : t),
          (a.memoizedState = a.baseState = t),
          (A = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: A,
            lastRenderedState: t,
          }),
          (a.queue = A),
          (A = A.dispatch = am.bind(null, PA, A)),
          [a.memoizedState, A]
        );
      },
      useRef: function (A) {
        var t = it();
        return (A = { current: A }), (t.memoizedState = A);
      },
      useState: jd,
      useDebugValue: Ol,
      useDeferredValue: function (A) {
        return (it().memoizedState = A);
      },
      useTransition: function () {
        var A = jd(!1),
          t = A[0];
        return (A = sm.bind(null, A[1])), (it().memoizedState = A), [t, A];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (A, t, i) {
        var a = PA,
          u = it();
        if (RA) {
          if (i === void 0) throw Error(n(407));
          i = i();
        } else {
          if (((i = t()), te === null)) throw Error(n(349));
          yr & 30 || Pd(a, t, i);
        }
        u.memoizedState = i;
        var d = { value: i, getSnapshot: t };
        return (
          (u.queue = d),
          zd(Vd.bind(null, a, d, A), [A]),
          (a.flags |= 2048),
          po(9, _d.bind(null, a, d, i, t), void 0, null),
          i
        );
      },
      useId: function () {
        var A = it(),
          t = te.identifierPrefix;
        if (RA) {
          var i = wt,
            a = pt;
          (i = (a & ~(1 << (32 - We(a) - 1))).toString(32) + i),
            (t = ":" + t + "R" + i),
            (i = Bo++),
            0 < i && (t += "H" + i.toString(32)),
            (t += ":");
        } else (i = im++), (t = ":" + t + "r" + i.toString(32) + ":");
        return (A.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    cm = {
      readContext: ke,
      useCallback: qd,
      useContext: ke,
      useEffect: Rl,
      useImperativeHandle: $d,
      useInsertionEffect: Jd,
      useLayoutEffect: Yd,
      useMemo: AB,
      useReducer: Kl,
      useRef: Xd,
      useState: function () {
        return Kl(go);
      },
      useDebugValue: Ol,
      useDeferredValue: function (A) {
        var t = Re();
        return eB(t, ZA.memoizedState, A);
      },
      useTransition: function () {
        var A = Kl(go)[0],
          t = Re().memoizedState;
        return [A, t];
      },
      useMutableSource: Nd,
      useSyncExternalStore: Md,
      useId: tB,
      unstable_isNewReconciler: !1,
    },
    fm = {
      readContext: ke,
      useCallback: qd,
      useContext: ke,
      useEffect: Rl,
      useImperativeHandle: $d,
      useInsertionEffect: Jd,
      useLayoutEffect: Yd,
      useMemo: AB,
      useReducer: kl,
      useRef: Xd,
      useState: function () {
        return kl(go);
      },
      useDebugValue: Ol,
      useDeferredValue: function (A) {
        var t = Re();
        return ZA === null ? (t.memoizedState = A) : eB(t, ZA.memoizedState, A);
      },
      useTransition: function () {
        var A = kl(go)[0],
          t = Re().memoizedState;
        return [A, t];
      },
      useMutableSource: Nd,
      useSyncExternalStore: Md,
      useId: tB,
      unstable_isNewReconciler: !1,
    };
  function ze(A, t) {
    if (A && A.defaultProps) {
      (t = Y({}, t)), (A = A.defaultProps);
      for (var i in A) t[i] === void 0 && (t[i] = A[i]);
      return t;
    }
    return t;
  }
  function Nl(A, t, i, a) {
    (t = A.memoizedState),
      (i = i(a, t)),
      (i = i == null ? t : Y({}, t, i)),
      (A.memoizedState = i),
      A.lanes === 0 && (A.updateQueue.baseState = i);
  }
  var Mi = {
    isMounted: function (A) {
      return (A = A._reactInternals) ? pr(A) === A : !1;
    },
    enqueueSetState: function (A, t, i) {
      A = A._reactInternals;
      var a = we(),
        u = Xt(A),
        d = vt(a, u);
      (d.payload = t),
        i != null && (d.callback = i),
        (t = Vt(A, d, u)),
        t !== null && (Ze(t, A, u, a), Li(t, A, u));
    },
    enqueueReplaceState: function (A, t, i) {
      A = A._reactInternals;
      var a = we(),
        u = Xt(A),
        d = vt(a, u);
      (d.tag = 1),
        (d.payload = t),
        i != null && (d.callback = i),
        (t = Vt(A, d, u)),
        t !== null && (Ze(t, A, u, a), Li(t, A, u));
    },
    enqueueForceUpdate: function (A, t) {
      A = A._reactInternals;
      var i = we(),
        a = Xt(A),
        u = vt(i, a);
      (u.tag = 2),
        t != null && (u.callback = t),
        (t = Vt(A, u, a)),
        t !== null && (Ze(t, A, a, i), Li(t, A, a));
    },
  };
  function iB(A, t, i, a, u, d, p) {
    return (
      (A = A.stateNode),
      typeof A.shouldComponentUpdate == "function"
        ? A.shouldComponentUpdate(a, d, p)
        : t.prototype && t.prototype.isPureReactComponent
          ? !eo(i, a) || !eo(u, d)
          : !0
    );
  }
  function sB(A, t, i) {
    var a = !1,
      u = Mt,
      d = t.contextType;
    return (
      typeof d == "object" && d !== null
        ? (d = ke(d))
        : ((u = Ce(t) ? hr : ue.current),
          (a = t.contextTypes),
          (d = (a = a != null) ? qr(A, u) : Mt)),
      (t = new t(i, d)),
      (A.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Mi),
      (A.stateNode = t),
      (t._reactInternals = A),
      a &&
        ((A = A.stateNode),
        (A.__reactInternalMemoizedUnmaskedChildContext = u),
        (A.__reactInternalMemoizedMaskedChildContext = d)),
      t
    );
  }
  function aB(A, t, i, a) {
    (A = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(i, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(i, a),
      t.state !== A && Mi.enqueueReplaceState(t, t.state, null);
  }
  function Ml(A, t, i, a) {
    var u = A.stateNode;
    (u.props = i), (u.state = A.memoizedState), (u.refs = {}), El(A);
    var d = t.contextType;
    typeof d == "object" && d !== null
      ? (u.context = ke(d))
      : ((d = Ce(t) ? hr : ue.current), (u.context = qr(A, d))),
      (u.state = A.memoizedState),
      (d = t.getDerivedStateFromProps),
      typeof d == "function" && (Nl(A, t, d, i), (u.state = A.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function" ||
        (typeof u.UNSAFE_componentWillMount != "function" &&
          typeof u.componentWillMount != "function") ||
        ((t = u.state),
        typeof u.componentWillMount == "function" && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == "function" &&
          u.UNSAFE_componentWillMount(),
        t !== u.state && Mi.enqueueReplaceState(u, u.state, null),
        Ti(A, i, u, a),
        (u.state = A.memoizedState)),
      typeof u.componentDidMount == "function" && (A.flags |= 4194308);
  }
  function an(A, t) {
    try {
      var i = "",
        a = t;
      do (i += wA(a)), (a = a.return);
      while (a);
      var u = i;
    } catch (d) {
      u =
        `
Error generating stack: ` +
        d.message +
        `
` +
        d.stack;
    }
    return { value: A, source: t, stack: u, digest: null };
  }
  function Pl(A, t, i) {
    return { value: A, source: null, stack: i ?? null, digest: t ?? null };
  }
  function _l(A, t) {
    try {
      console.error(t.value);
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  var dm = typeof WeakMap == "function" ? WeakMap : Map;
  function lB(A, t, i) {
    (i = vt(-1, i)), (i.tag = 3), (i.payload = { element: null });
    var a = t.value;
    return (
      (i.callback = function () {
        Xi || ((Xi = !0), (ru = a)), _l(A, t);
      }),
      i
    );
  }
  function uB(A, t, i) {
    (i = vt(-1, i)), (i.tag = 3);
    var a = A.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = t.value;
      (i.payload = function () {
        return a(u);
      }),
        (i.callback = function () {
          _l(A, t);
        });
    }
    var d = A.stateNode;
    return (
      d !== null &&
        typeof d.componentDidCatch == "function" &&
        (i.callback = function () {
          _l(A, t),
            typeof a != "function" &&
              (Wt === null
                ? (Wt = /* @__PURE__ */ new Set([this]))
                : Wt.add(this));
          var p = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: p !== null ? p : "",
          });
        }),
      i
    );
  }
  function cB(A, t, i) {
    var a = A.pingCache;
    if (a === null) {
      a = A.pingCache = new dm();
      var u = /* @__PURE__ */ new Set();
      a.set(t, u);
    } else
      (u = a.get(t)),
        u === void 0 && ((u = /* @__PURE__ */ new Set()), a.set(t, u));
    u.has(i) || (u.add(i), (A = xm.bind(null, A, t, i)), t.then(A, A));
  }
  function fB(A) {
    do {
      var t;
      if (
        ((t = A.tag === 13) &&
          ((t = A.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return A;
      A = A.return;
    } while (A !== null);
    return null;
  }
  function dB(A, t, i, a, u) {
    return A.mode & 1
      ? ((A.flags |= 65536), (A.lanes = u), A)
      : (A === t
          ? (A.flags |= 65536)
          : ((A.flags |= 128),
            (i.flags |= 131072),
            (i.flags &= -52805),
            i.tag === 1 &&
              (i.alternate === null
                ? (i.tag = 17)
                : ((t = vt(-1, 1)), (t.tag = 2), Vt(i, t, 1))),
            (i.lanes |= 1)),
        A);
  }
  var Bm = T.ReactCurrentOwner,
    Qe = !1;
  function pe(A, t, i, a) {
    t.child = A === null ? Td(t, null, i, a) : rn(t, A.child, i, a);
  }
  function BB(A, t, i, a, u) {
    i = i.render;
    var d = t.ref;
    return (
      on(t, u),
      (a = Tl(A, t, i, a, d, u)),
      (i = Dl()),
      A !== null && !Qe
        ? ((t.updateQueue = A.updateQueue),
          (t.flags &= -2053),
          (A.lanes &= ~u),
          mt(A, t, u))
        : (RA && i && pl(t), (t.flags |= 1), pe(A, t, a, u), t.child)
    );
  }
  function gB(A, t, i, a, u) {
    if (A === null) {
      var d = i.type;
      return typeof d == "function" &&
        !uu(d) &&
        d.defaultProps === void 0 &&
        i.compare === null &&
        i.defaultProps === void 0
        ? ((t.tag = 15), (t.type = d), pB(A, t, d, a, u))
        : ((A = qi(i.type, null, a, t, t.mode, u)),
          (A.ref = t.ref),
          (A.return = t),
          (t.child = A));
    }
    if (((d = A.child), !(A.lanes & u))) {
      var p = d.memoizedProps;
      if (
        ((i = i.compare), (i = i !== null ? i : eo), i(p, a) && A.ref === t.ref)
      )
        return mt(A, t, u);
    }
    return (
      (t.flags |= 1),
      (A = Jt(d, a)),
      (A.ref = t.ref),
      (A.return = t),
      (t.child = A)
    );
  }
  function pB(A, t, i, a, u) {
    if (A !== null) {
      var d = A.memoizedProps;
      if (eo(d, a) && A.ref === t.ref)
        if (((Qe = !1), (t.pendingProps = a = d), (A.lanes & u) !== 0))
          A.flags & 131072 && (Qe = !0);
        else return (t.lanes = A.lanes), mt(A, t, u);
    }
    return Vl(A, t, i, a, u);
  }
  function wB(A, t, i) {
    var a = t.pendingProps,
      u = a.children,
      d = A !== null ? A.memoizedState : null;
    if (a.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          bA(un, Se),
          (Se |= i);
      else {
        if (!(i & 1073741824))
          return (
            (A = d !== null ? d.baseLanes | i : i),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: A,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            bA(un, Se),
            (Se |= A),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (a = d !== null ? d.baseLanes : i),
          bA(un, Se),
          (Se |= a);
      }
    else
      d !== null ? ((a = d.baseLanes | i), (t.memoizedState = null)) : (a = i),
        bA(un, Se),
        (Se |= a);
    return pe(A, t, u, i), t.child;
  }
  function hB(A, t) {
    var i = t.ref;
    ((A === null && i !== null) || (A !== null && A.ref !== i)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Vl(A, t, i, a, u) {
    var d = Ce(i) ? hr : ue.current;
    return (
      (d = qr(t, d)),
      on(t, u),
      (i = Tl(A, t, i, a, d, u)),
      (a = Dl()),
      A !== null && !Qe
        ? ((t.updateQueue = A.updateQueue),
          (t.flags &= -2053),
          (A.lanes &= ~u),
          mt(A, t, u))
        : (RA && a && pl(t), (t.flags |= 1), pe(A, t, i, u), t.child)
    );
  }
  function vB(A, t, i, a, u) {
    if (Ce(i)) {
      var d = !0;
      Ui(t);
    } else d = !1;
    if ((on(t, u), t.stateNode === null))
      _i(A, t), sB(t, i, a), Ml(t, i, a, u), (a = !0);
    else if (A === null) {
      var p = t.stateNode,
        y = t.memoizedProps;
      p.props = y;
      var x = p.context,
        K = i.contextType;
      typeof K == "object" && K !== null
        ? (K = ke(K))
        : ((K = Ce(i) ? hr : ue.current), (K = qr(t, K)));
      var G = i.getDerivedStateFromProps,
        W =
          typeof G == "function" ||
          typeof p.getSnapshotBeforeUpdate == "function";
      W ||
        (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
          typeof p.componentWillReceiveProps != "function") ||
        ((y !== a || x !== K) && aB(t, p, a, K)),
        (_t = !1);
      var _ = t.memoizedState;
      (p.state = _),
        Ti(t, a, p, u),
        (x = t.memoizedState),
        y !== a || _ !== x || me.current || _t
          ? (typeof G == "function" && (Nl(t, i, G, a), (x = t.memoizedState)),
            (y = _t || iB(t, i, y, a, _, x, K))
              ? (W ||
                  (typeof p.UNSAFE_componentWillMount != "function" &&
                    typeof p.componentWillMount != "function") ||
                  (typeof p.componentWillMount == "function" &&
                    p.componentWillMount(),
                  typeof p.UNSAFE_componentWillMount == "function" &&
                    p.UNSAFE_componentWillMount()),
                typeof p.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof p.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = x)),
            (p.props = a),
            (p.state = x),
            (p.context = K),
            (a = y))
          : (typeof p.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1));
    } else {
      (p = t.stateNode),
        Kd(A, t),
        (y = t.memoizedProps),
        (K = t.type === t.elementType ? y : ze(t.type, y)),
        (p.props = K),
        (W = t.pendingProps),
        (_ = p.context),
        (x = i.contextType),
        typeof x == "object" && x !== null
          ? (x = ke(x))
          : ((x = Ce(i) ? hr : ue.current), (x = qr(t, x)));
      var eA = i.getDerivedStateFromProps;
      (G =
        typeof eA == "function" ||
        typeof p.getSnapshotBeforeUpdate == "function") ||
        (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
          typeof p.componentWillReceiveProps != "function") ||
        ((y !== W || _ !== x) && aB(t, p, a, x)),
        (_t = !1),
        (_ = t.memoizedState),
        (p.state = _),
        Ti(t, a, p, u);
      var iA = t.memoizedState;
      y !== W || _ !== iA || me.current || _t
        ? (typeof eA == "function" && (Nl(t, i, eA, a), (iA = t.memoizedState)),
          (K = _t || iB(t, i, K, a, _, iA, x) || !1)
            ? (G ||
                (typeof p.UNSAFE_componentWillUpdate != "function" &&
                  typeof p.componentWillUpdate != "function") ||
                (typeof p.componentWillUpdate == "function" &&
                  p.componentWillUpdate(a, iA, x),
                typeof p.UNSAFE_componentWillUpdate == "function" &&
                  p.UNSAFE_componentWillUpdate(a, iA, x)),
              typeof p.componentDidUpdate == "function" && (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof p.componentDidUpdate != "function" ||
                (y === A.memoizedProps && _ === A.memoizedState) ||
                (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate != "function" ||
                (y === A.memoizedProps && _ === A.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = iA)),
          (p.props = a),
          (p.state = iA),
          (p.context = x),
          (a = K))
        : (typeof p.componentDidUpdate != "function" ||
            (y === A.memoizedProps && _ === A.memoizedState) ||
            (t.flags |= 4),
          typeof p.getSnapshotBeforeUpdate != "function" ||
            (y === A.memoizedProps && _ === A.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return Gl(A, t, i, a, d, u);
  }
  function Gl(A, t, i, a, u, d) {
    hB(A, t);
    var p = (t.flags & 128) !== 0;
    if (!a && !p) return u && Ud(t, i, !1), mt(A, t, d);
    (a = t.stateNode), (Bm.current = t);
    var y =
      p && typeof i.getDerivedStateFromError != "function" ? null : a.render();
    return (
      (t.flags |= 1),
      A !== null && p
        ? ((t.child = rn(t, A.child, null, d)), (t.child = rn(t, null, y, d)))
        : pe(A, t, y, d),
      (t.memoizedState = a.state),
      u && Ud(t, i, !0),
      t.child
    );
  }
  function mB(A) {
    var t = A.stateNode;
    t.pendingContext
      ? Qd(A, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Qd(A, t.context, !1),
      xl(A, t.containerInfo);
  }
  function CB(A, t, i, a, u) {
    return tn(), ml(u), (t.flags |= 256), pe(A, t, i, a), t.child;
  }
  var Wl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function jl(A) {
    return { baseLanes: A, cachePool: null, transitions: null };
  }
  function QB(A, t, i) {
    var a = t.pendingProps,
      u = MA.current,
      d = !1,
      p = (t.flags & 128) !== 0,
      y;
    if (
      ((y = p) ||
        (y = A !== null && A.memoizedState === null ? !1 : (u & 2) !== 0),
      y
        ? ((d = !0), (t.flags &= -129))
        : (A === null || A.memoizedState !== null) && (u |= 1),
      bA(MA, u & 1),
      A === null)
    )
      return (
        vl(t),
        (A = t.memoizedState),
        A !== null && ((A = A.dehydrated), A !== null)
          ? (t.mode & 1
              ? A.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((p = a.children),
            (A = a.fallback),
            d
              ? ((a = t.mode),
                (d = t.child),
                (p = { mode: "hidden", children: p }),
                !(a & 1) && d !== null
                  ? ((d.childLanes = 0), (d.pendingProps = p))
                  : (d = As(p, a, 0, null)),
                (A = Ir(A, a, i, null)),
                (d.return = t),
                (A.return = t),
                (d.sibling = A),
                (t.child = d),
                (t.child.memoizedState = jl(i)),
                (t.memoizedState = Wl),
                A)
              : Xl(t, p))
      );
    if (((u = A.memoizedState), u !== null && ((y = u.dehydrated), y !== null)))
      return gm(A, t, p, a, y, u, i);
    if (d) {
      (d = a.fallback), (p = t.mode), (u = A.child), (y = u.sibling);
      var x = { mode: "hidden", children: a.children };
      return (
        !(p & 1) && t.child !== u
          ? ((a = t.child),
            (a.childLanes = 0),
            (a.pendingProps = x),
            (t.deletions = null))
          : ((a = Jt(u, x)), (a.subtreeFlags = u.subtreeFlags & 14680064)),
        y !== null ? (d = Jt(y, d)) : ((d = Ir(d, p, i, null)), (d.flags |= 2)),
        (d.return = t),
        (a.return = t),
        (a.sibling = d),
        (t.child = a),
        (a = d),
        (d = t.child),
        (p = A.child.memoizedState),
        (p =
          p === null
            ? jl(i)
            : {
                baseLanes: p.baseLanes | i,
                cachePool: null,
                transitions: p.transitions,
              }),
        (d.memoizedState = p),
        (d.childLanes = A.childLanes & ~i),
        (t.memoizedState = Wl),
        a
      );
    }
    return (
      (d = A.child),
      (A = d.sibling),
      (a = Jt(d, { mode: "visible", children: a.children })),
      !(t.mode & 1) && (a.lanes = i),
      (a.return = t),
      (a.sibling = null),
      A !== null &&
        ((i = t.deletions),
        i === null ? ((t.deletions = [A]), (t.flags |= 16)) : i.push(A)),
      (t.child = a),
      (t.memoizedState = null),
      a
    );
  }
  function Xl(A, t) {
    return (
      (t = As({ mode: "visible", children: t }, A.mode, 0, null)),
      (t.return = A),
      (A.child = t)
    );
  }
  function Pi(A, t, i, a) {
    return (
      a !== null && ml(a),
      rn(t, A.child, null, i),
      (A = Xl(t, t.pendingProps.children)),
      (A.flags |= 2),
      (t.memoizedState = null),
      A
    );
  }
  function gm(A, t, i, a, u, d, p) {
    if (i)
      return t.flags & 256
        ? ((t.flags &= -257), (a = Pl(Error(n(422)))), Pi(A, t, p, a))
        : t.memoizedState !== null
          ? ((t.child = A.child), (t.flags |= 128), null)
          : ((d = a.fallback),
            (u = t.mode),
            (a = As({ mode: "visible", children: a.children }, u, 0, null)),
            (d = Ir(d, u, p, null)),
            (d.flags |= 2),
            (a.return = t),
            (d.return = t),
            (a.sibling = d),
            (t.child = a),
            t.mode & 1 && rn(t, A.child, null, p),
            (t.child.memoizedState = jl(p)),
            (t.memoizedState = Wl),
            d);
    if (!(t.mode & 1)) return Pi(A, t, p, null);
    if (u.data === "$!") {
      if (((a = u.nextSibling && u.nextSibling.dataset), a)) var y = a.dgst;
      return (
        (a = y), (d = Error(n(419))), (a = Pl(d, a, void 0)), Pi(A, t, p, a)
      );
    }
    if (((y = (p & A.childLanes) !== 0), Qe || y)) {
      if (((a = te), a !== null)) {
        switch (p & -p) {
          case 4:
            u = 2;
            break;
          case 16:
            u = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            u = 32;
            break;
          case 536870912:
            u = 268435456;
            break;
          default:
            u = 0;
        }
        (u = u & (a.suspendedLanes | p) ? 0 : u),
          u !== 0 &&
            u !== d.retryLane &&
            ((d.retryLane = u), ht(A, u), Ze(a, A, u, -1));
      }
      return lu(), (a = Pl(Error(n(421)))), Pi(A, t, p, a);
    }
    return u.data === "$?"
      ? ((t.flags |= 128),
        (t.child = A.child),
        (t = Im.bind(null, A)),
        (u._reactRetry = t),
        null)
      : ((A = d.treeContext),
        (He = Ot(u.nextSibling)),
        (Ie = t),
        (RA = !0),
        (Xe = null),
        A !== null &&
          ((De[Ke++] = pt),
          (De[Ke++] = wt),
          (De[Ke++] = vr),
          (pt = A.id),
          (wt = A.overflow),
          (vr = t)),
        (t = Xl(t, a.children)),
        (t.flags |= 4096),
        t);
  }
  function yB(A, t, i) {
    A.lanes |= t;
    var a = A.alternate;
    a !== null && (a.lanes |= t), Ul(A.return, t, i);
  }
  function zl(A, t, i, a, u) {
    var d = A.memoizedState;
    d === null
      ? (A.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: i,
          tailMode: u,
        })
      : ((d.isBackwards = t),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = a),
        (d.tail = i),
        (d.tailMode = u));
  }
  function UB(A, t, i) {
    var a = t.pendingProps,
      u = a.revealOrder,
      d = a.tail;
    if ((pe(A, t, a.children, i), (a = MA.current), a & 2))
      (a = (a & 1) | 2), (t.flags |= 128);
    else {
      if (A !== null && A.flags & 128)
        A: for (A = t.child; A !== null; ) {
          if (A.tag === 13) A.memoizedState !== null && yB(A, i, t);
          else if (A.tag === 19) yB(A, i, t);
          else if (A.child !== null) {
            (A.child.return = A), (A = A.child);
            continue;
          }
          if (A === t) break A;
          for (; A.sibling === null; ) {
            if (A.return === null || A.return === t) break A;
            A = A.return;
          }
          (A.sibling.return = A.return), (A = A.sibling);
        }
      a &= 1;
    }
    if ((bA(MA, a), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (u) {
        case "forwards":
          for (i = t.child, u = null; i !== null; )
            (A = i.alternate),
              A !== null && Di(A) === null && (u = i),
              (i = i.sibling);
          (i = u),
            i === null
              ? ((u = t.child), (t.child = null))
              : ((u = i.sibling), (i.sibling = null)),
            zl(t, !1, u, i, d);
          break;
        case "backwards":
          for (i = null, u = t.child, t.child = null; u !== null; ) {
            if (((A = u.alternate), A !== null && Di(A) === null)) {
              t.child = u;
              break;
            }
            (A = u.sibling), (u.sibling = i), (i = u), (u = A);
          }
          zl(t, !0, i, null, d);
          break;
        case "together":
          zl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function _i(A, t) {
    !(t.mode & 1) &&
      A !== null &&
      ((A.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function mt(A, t, i) {
    if (
      (A !== null && (t.dependencies = A.dependencies),
      (Ur |= t.lanes),
      !(i & t.childLanes))
    )
      return null;
    if (A !== null && t.child !== A.child) throw Error(n(153));
    if (t.child !== null) {
      for (
        A = t.child, i = Jt(A, A.pendingProps), t.child = i, i.return = t;
        A.sibling !== null;

      )
        (A = A.sibling),
          (i = i.sibling = Jt(A, A.pendingProps)),
          (i.return = t);
      i.sibling = null;
    }
    return t.child;
  }
  function pm(A, t, i) {
    switch (t.tag) {
      case 3:
        mB(t), tn();
        break;
      case 5:
        Od(t);
        break;
      case 1:
        Ce(t.type) && Ui(t);
        break;
      case 4:
        xl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var a = t.type._context,
          u = t.memoizedProps.value;
        bA(Si, a._currentValue), (a._currentValue = u);
        break;
      case 13:
        if (((a = t.memoizedState), a !== null))
          return a.dehydrated !== null
            ? (bA(MA, MA.current & 1), (t.flags |= 128), null)
            : i & t.child.childLanes
              ? QB(A, t, i)
              : (bA(MA, MA.current & 1),
                (A = mt(A, t, i)),
                A !== null ? A.sibling : null);
        bA(MA, MA.current & 1);
        break;
      case 19:
        if (((a = (i & t.childLanes) !== 0), A.flags & 128)) {
          if (a) return UB(A, t, i);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          bA(MA, MA.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), wB(A, t, i);
    }
    return mt(A, t, i);
  }
  var FB, Jl, EB, xB;
  (FB = function (A, t) {
    for (var i = t.child; i !== null; ) {
      if (i.tag === 5 || i.tag === 6) A.appendChild(i.stateNode);
      else if (i.tag !== 4 && i.child !== null) {
        (i.child.return = i), (i = i.child);
        continue;
      }
      if (i === t) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === t) return;
        i = i.return;
      }
      (i.sibling.return = i.return), (i = i.sibling);
    }
  }),
    (Jl = function () {}),
    (EB = function (A, t, i, a) {
      var u = A.memoizedProps;
      if (u !== a) {
        (A = t.stateNode), Qr(ot.current);
        var d = null;
        switch (i) {
          case "input":
            (u = Ge(A, u)), (a = Ge(A, a)), (d = []);
            break;
          case "select":
            (u = Y({}, u, { value: void 0 })),
              (a = Y({}, a, { value: void 0 })),
              (d = []);
            break;
          case "textarea":
            (u = xa(A, u)), (a = xa(A, a)), (d = []);
            break;
          default:
            typeof u.onClick != "function" &&
              typeof a.onClick == "function" &&
              (A.onclick = Ci);
        }
        Ha(i, a);
        var p;
        i = null;
        for (K in u)
          if (!a.hasOwnProperty(K) && u.hasOwnProperty(K) && u[K] != null)
            if (K === "style") {
              var y = u[K];
              for (p in y) y.hasOwnProperty(p) && (i || (i = {}), (i[p] = ""));
            } else
              K !== "dangerouslySetInnerHTML" &&
                K !== "children" &&
                K !== "suppressContentEditableWarning" &&
                K !== "suppressHydrationWarning" &&
                K !== "autoFocus" &&
                (s.hasOwnProperty(K)
                  ? d || (d = [])
                  : (d = d || []).push(K, null));
        for (K in a) {
          var x = a[K];
          if (
            ((y = u?.[K]),
            a.hasOwnProperty(K) && x !== y && (x != null || y != null))
          )
            if (K === "style")
              if (y) {
                for (p in y)
                  !y.hasOwnProperty(p) ||
                    (x && x.hasOwnProperty(p)) ||
                    (i || (i = {}), (i[p] = ""));
                for (p in x)
                  x.hasOwnProperty(p) &&
                    y[p] !== x[p] &&
                    (i || (i = {}), (i[p] = x[p]));
              } else i || (d || (d = []), d.push(K, i)), (i = x);
            else
              K === "dangerouslySetInnerHTML"
                ? ((x = x ? x.__html : void 0),
                  (y = y ? y.__html : void 0),
                  x != null && y !== x && (d = d || []).push(K, x))
                : K === "children"
                  ? (typeof x != "string" && typeof x != "number") ||
                    (d = d || []).push(K, "" + x)
                  : K !== "suppressContentEditableWarning" &&
                    K !== "suppressHydrationWarning" &&
                    (s.hasOwnProperty(K)
                      ? (x != null && K === "onScroll" && DA("scroll", A),
                        d || y === x || (d = []))
                      : (d = d || []).push(K, x));
        }
        i && (d = d || []).push("style", i);
        var K = d;
        (t.updateQueue = K) && (t.flags |= 4);
      }
    }),
    (xB = function (A, t, i, a) {
      i !== a && (t.flags |= 4);
    });
  function wo(A, t) {
    if (!RA)
      switch (A.tailMode) {
        case "hidden":
          t = A.tail;
          for (var i = null; t !== null; )
            t.alternate !== null && (i = t), (t = t.sibling);
          i === null ? (A.tail = null) : (i.sibling = null);
          break;
        case "collapsed":
          i = A.tail;
          for (var a = null; i !== null; )
            i.alternate !== null && (a = i), (i = i.sibling);
          a === null
            ? t || A.tail === null
              ? (A.tail = null)
              : (A.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function fe(A) {
    var t = A.alternate !== null && A.alternate.child === A.child,
      i = 0,
      a = 0;
    if (t)
      for (var u = A.child; u !== null; )
        (i |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 14680064),
          (a |= u.flags & 14680064),
          (u.return = A),
          (u = u.sibling);
    else
      for (u = A.child; u !== null; )
        (i |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = A),
          (u = u.sibling);
    return (A.subtreeFlags |= a), (A.childLanes = i), t;
  }
  function wm(A, t, i) {
    var a = t.pendingProps;
    switch ((wl(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return fe(t), null;
      case 1:
        return Ce(t.type) && yi(), fe(t), null;
      case 3:
        return (
          (a = t.stateNode),
          sn(),
          KA(me),
          KA(ue),
          Sl(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (A === null || A.child === null) &&
            (Ii(t)
              ? (t.flags |= 4)
              : A === null ||
                (A.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Xe !== null && (iu(Xe), (Xe = null)))),
          Jl(A, t),
          fe(t),
          null
        );
      case 5:
        Il(t);
        var u = Qr(co.current);
        if (((i = t.type), A !== null && t.stateNode != null))
          EB(A, t, i, a, u),
            A.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(n(166));
            return fe(t), null;
          }
          if (((A = Qr(ot.current)), Ii(t))) {
            (a = t.stateNode), (i = t.type);
            var d = t.memoizedProps;
            switch (((a[nt] = t), (a[io] = d), (A = (t.mode & 1) !== 0), i)) {
              case "dialog":
                DA("cancel", a), DA("close", a);
                break;
              case "iframe":
              case "object":
              case "embed":
                DA("load", a);
                break;
              case "video":
              case "audio":
                for (u = 0; u < ro.length; u++) DA(ro[u], a);
                break;
              case "source":
                DA("error", a);
                break;
              case "img":
              case "image":
              case "link":
                DA("error", a), DA("load", a);
                break;
              case "details":
                DA("toggle", a);
                break;
              case "input":
                Nr(a, d), DA("invalid", a);
                break;
              case "select":
                (a._wrapperState = { wasMultiple: !!d.multiple }),
                  DA("invalid", a);
                break;
              case "textarea":
                uf(a, d), DA("invalid", a);
            }
            Ha(i, d), (u = null);
            for (var p in d)
              if (d.hasOwnProperty(p)) {
                var y = d[p];
                p === "children"
                  ? typeof y == "string"
                    ? a.textContent !== y &&
                      (d.suppressHydrationWarning !== !0 &&
                        mi(a.textContent, y, A),
                      (u = ["children", y]))
                    : typeof y == "number" &&
                      a.textContent !== "" + y &&
                      (d.suppressHydrationWarning !== !0 &&
                        mi(a.textContent, y, A),
                      (u = ["children", "" + y]))
                  : s.hasOwnProperty(p) &&
                    y != null &&
                    p === "onScroll" &&
                    DA("scroll", a);
              }
            switch (i) {
              case "input":
                IA(a), lf(a, d, !0);
                break;
              case "textarea":
                IA(a), ff(a);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (a.onclick = Ci);
            }
            (a = u), (t.updateQueue = a), a !== null && (t.flags |= 4);
          } else {
            (p = u.nodeType === 9 ? u : u.ownerDocument),
              A === "http://www.w3.org/1999/xhtml" && (A = df(i)),
              A === "http://www.w3.org/1999/xhtml"
                ? i === "script"
                  ? ((A = p.createElement("div")),
                    (A.innerHTML = "<script></script>"),
                    (A = A.removeChild(A.firstChild)))
                  : typeof a.is == "string"
                    ? (A = p.createElement(i, { is: a.is }))
                    : ((A = p.createElement(i)),
                      i === "select" &&
                        ((p = A),
                        a.multiple
                          ? (p.multiple = !0)
                          : a.size && (p.size = a.size)))
                : (A = p.createElementNS(A, i)),
              (A[nt] = t),
              (A[io] = a),
              FB(A, t, !1, !1),
              (t.stateNode = A);
            A: {
              switch (((p = Sa(i, a)), i)) {
                case "dialog":
                  DA("cancel", A), DA("close", A), (u = a);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  DA("load", A), (u = a);
                  break;
                case "video":
                case "audio":
                  for (u = 0; u < ro.length; u++) DA(ro[u], A);
                  u = a;
                  break;
                case "source":
                  DA("error", A), (u = a);
                  break;
                case "img":
                case "image":
                case "link":
                  DA("error", A), DA("load", A), (u = a);
                  break;
                case "details":
                  DA("toggle", A), (u = a);
                  break;
                case "input":
                  Nr(A, a), (u = Ge(A, a)), DA("invalid", A);
                  break;
                case "option":
                  u = a;
                  break;
                case "select":
                  (A._wrapperState = { wasMultiple: !!a.multiple }),
                    (u = Y({}, a, { value: void 0 })),
                    DA("invalid", A);
                  break;
                case "textarea":
                  uf(A, a), (u = xa(A, a)), DA("invalid", A);
                  break;
                default:
                  u = a;
              }
              Ha(i, u), (y = u);
              for (d in y)
                if (y.hasOwnProperty(d)) {
                  var x = y[d];
                  d === "style"
                    ? pf(A, x)
                    : d === "dangerouslySetInnerHTML"
                      ? ((x = x ? x.__html : void 0), x != null && Bf(A, x))
                      : d === "children"
                        ? typeof x == "string"
                          ? (i !== "textarea" || x !== "") && On(A, x)
                          : typeof x == "number" && On(A, "" + x)
                        : d !== "suppressContentEditableWarning" &&
                          d !== "suppressHydrationWarning" &&
                          d !== "autoFocus" &&
                          (s.hasOwnProperty(d)
                            ? x != null && d === "onScroll" && DA("scroll", A)
                            : x != null && R(A, d, x, p));
                }
              switch (i) {
                case "input":
                  IA(A), lf(A, a, !1);
                  break;
                case "textarea":
                  IA(A), ff(A);
                  break;
                case "option":
                  a.value != null && A.setAttribute("value", "" + BA(a.value));
                  break;
                case "select":
                  (A.multiple = !!a.multiple),
                    (d = a.value),
                    d != null
                      ? Pr(A, !!a.multiple, d, !1)
                      : a.defaultValue != null &&
                        Pr(A, !!a.multiple, a.defaultValue, !0);
                  break;
                default:
                  typeof u.onClick == "function" && (A.onclick = Ci);
              }
              switch (i) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a = !!a.autoFocus;
                  break A;
                case "img":
                  a = !0;
                  break A;
                default:
                  a = !1;
              }
            }
            a && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return fe(t), null;
      case 6:
        if (A && t.stateNode != null) xB(A, t, A.memoizedProps, a);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(n(166));
          if (((i = Qr(co.current)), Qr(ot.current), Ii(t))) {
            if (
              ((a = t.stateNode),
              (i = t.memoizedProps),
              (a[nt] = t),
              (d = a.nodeValue !== i) && ((A = Ie), A !== null))
            )
              switch (A.tag) {
                case 3:
                  mi(a.nodeValue, i, (A.mode & 1) !== 0);
                  break;
                case 5:
                  A.memoizedProps.suppressHydrationWarning !== !0 &&
                    mi(a.nodeValue, i, (A.mode & 1) !== 0);
              }
            d && (t.flags |= 4);
          } else
            (a = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(a)),
              (a[nt] = t),
              (t.stateNode = a);
        }
        return fe(t), null;
      case 13:
        if (
          (KA(MA),
          (a = t.memoizedState),
          A === null ||
            (A.memoizedState !== null && A.memoizedState.dehydrated !== null))
        ) {
          if (RA && He !== null && t.mode & 1 && !(t.flags & 128))
            Sd(), tn(), (t.flags |= 98560), (d = !1);
          else if (((d = Ii(t)), a !== null && a.dehydrated !== null)) {
            if (A === null) {
              if (!d) throw Error(n(318));
              if (
                ((d = t.memoizedState),
                (d = d !== null ? d.dehydrated : null),
                !d)
              )
                throw Error(n(317));
              d[nt] = t;
            } else
              tn(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            fe(t), (d = !1);
          } else Xe !== null && (iu(Xe), (Xe = null)), (d = !0);
          if (!d) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = i), t)
          : ((a = a !== null),
            a !== (A !== null && A.memoizedState !== null) &&
              a &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (A === null || MA.current & 1 ? $A === 0 && ($A = 3) : lu())),
            t.updateQueue !== null && (t.flags |= 4),
            fe(t),
            null);
      case 4:
        return (
          sn(),
          Jl(A, t),
          A === null && no(t.stateNode.containerInfo),
          fe(t),
          null
        );
      case 10:
        return yl(t.type._context), fe(t), null;
      case 17:
        return Ce(t.type) && yi(), fe(t), null;
      case 19:
        if ((KA(MA), (d = t.memoizedState), d === null)) return fe(t), null;
        if (((a = (t.flags & 128) !== 0), (p = d.rendering), p === null))
          if (a) wo(d, !1);
          else {
            if ($A !== 0 || (A !== null && A.flags & 128))
              for (A = t.child; A !== null; ) {
                if (((p = Di(A)), p !== null)) {
                  for (
                    t.flags |= 128,
                      wo(d, !1),
                      a = p.updateQueue,
                      a !== null && ((t.updateQueue = a), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      a = i,
                      i = t.child;
                    i !== null;

                  )
                    (d = i),
                      (A = a),
                      (d.flags &= 14680066),
                      (p = d.alternate),
                      p === null
                        ? ((d.childLanes = 0),
                          (d.lanes = A),
                          (d.child = null),
                          (d.subtreeFlags = 0),
                          (d.memoizedProps = null),
                          (d.memoizedState = null),
                          (d.updateQueue = null),
                          (d.dependencies = null),
                          (d.stateNode = null))
                        : ((d.childLanes = p.childLanes),
                          (d.lanes = p.lanes),
                          (d.child = p.child),
                          (d.subtreeFlags = 0),
                          (d.deletions = null),
                          (d.memoizedProps = p.memoizedProps),
                          (d.memoizedState = p.memoizedState),
                          (d.updateQueue = p.updateQueue),
                          (d.type = p.type),
                          (A = p.dependencies),
                          (d.dependencies =
                            A === null
                              ? null
                              : {
                                  lanes: A.lanes,
                                  firstContext: A.firstContext,
                                })),
                      (i = i.sibling);
                  return bA(MA, (MA.current & 1) | 2), t.child;
                }
                A = A.sibling;
              }
            d.tail !== null &&
              GA() > cn &&
              ((t.flags |= 128), (a = !0), wo(d, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((A = Di(p)), A !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (i = A.updateQueue),
                i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                wo(d, !0),
                d.tail === null &&
                  d.tailMode === "hidden" &&
                  !p.alternate &&
                  !RA)
              )
                return fe(t), null;
            } else
              2 * GA() - d.renderingStartTime > cn &&
                i !== 1073741824 &&
                ((t.flags |= 128), (a = !0), wo(d, !1), (t.lanes = 4194304));
          d.isBackwards
            ? ((p.sibling = t.child), (t.child = p))
            : ((i = d.last),
              i !== null ? (i.sibling = p) : (t.child = p),
              (d.last = p));
        }
        return d.tail !== null
          ? ((t = d.tail),
            (d.rendering = t),
            (d.tail = t.sibling),
            (d.renderingStartTime = GA()),
            (t.sibling = null),
            (i = MA.current),
            bA(MA, a ? (i & 1) | 2 : i & 1),
            t)
          : (fe(t), null);
      case 22:
      case 23:
        return (
          au(),
          (a = t.memoizedState !== null),
          A !== null && (A.memoizedState !== null) !== a && (t.flags |= 8192),
          a && t.mode & 1
            ? Se & 1073741824 &&
              (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : fe(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(n(156, t.tag));
  }
  function hm(A, t) {
    switch ((wl(t), t.tag)) {
      case 1:
        return (
          Ce(t.type) && yi(),
          (A = t.flags),
          A & 65536 ? ((t.flags = (A & -65537) | 128), t) : null
        );
      case 3:
        return (
          sn(),
          KA(me),
          KA(ue),
          Sl(),
          (A = t.flags),
          A & 65536 && !(A & 128) ? ((t.flags = (A & -65537) | 128), t) : null
        );
      case 5:
        return Il(t), null;
      case 13:
        if (
          (KA(MA), (A = t.memoizedState), A !== null && A.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(n(340));
          tn();
        }
        return (
          (A = t.flags), A & 65536 ? ((t.flags = (A & -65537) | 128), t) : null
        );
      case 19:
        return KA(MA), null;
      case 4:
        return sn(), null;
      case 10:
        return yl(t.type._context), null;
      case 22:
      case 23:
        return au(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Vi = !1,
    de = !1,
    vm = typeof WeakSet == "function" ? WeakSet : Set,
    oA = null;
  function ln(A, t) {
    var i = A.ref;
    if (i !== null)
      if (typeof i == "function")
        try {
          i(null);
        } catch (a) {
          VA(A, t, a);
        }
      else i.current = null;
  }
  function Yl(A, t, i) {
    try {
      i();
    } catch (a) {
      VA(A, t, a);
    }
  }
  var IB = !1;
  function mm(A, t) {
    if (((al = li), (A = id()), Al(A))) {
      if ("selectionStart" in A)
        var i = { start: A.selectionStart, end: A.selectionEnd };
      else
        A: {
          i = ((i = A.ownerDocument) && i.defaultView) || window;
          var a = i.getSelection && i.getSelection();
          if (a && a.rangeCount !== 0) {
            i = a.anchorNode;
            var u = a.anchorOffset,
              d = a.focusNode;
            a = a.focusOffset;
            try {
              i.nodeType, d.nodeType;
            } catch {
              i = null;
              break A;
            }
            var p = 0,
              y = -1,
              x = -1,
              K = 0,
              G = 0,
              W = A,
              _ = null;
            e: for (;;) {
              for (
                var eA;
                W !== i || (u !== 0 && W.nodeType !== 3) || (y = p + u),
                  W !== d || (a !== 0 && W.nodeType !== 3) || (x = p + a),
                  W.nodeType === 3 && (p += W.nodeValue.length),
                  (eA = W.firstChild) !== null;

              )
                (_ = W), (W = eA);
              for (;;) {
                if (W === A) break e;
                if (
                  (_ === i && ++K === u && (y = p),
                  _ === d && ++G === a && (x = p),
                  (eA = W.nextSibling) !== null)
                )
                  break;
                (W = _), (_ = W.parentNode);
              }
              W = eA;
            }
            i = y === -1 || x === -1 ? null : { start: y, end: x };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (
      ll = { focusedElem: A, selectionRange: i }, li = !1, oA = t;
      oA !== null;

    )
      if (
        ((t = oA), (A = t.child), (t.subtreeFlags & 1028) !== 0 && A !== null)
      )
        (A.return = t), (oA = A);
      else
        for (; oA !== null; ) {
          t = oA;
          try {
            var iA = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (iA !== null) {
                    var sA = iA.memoizedProps,
                      WA = iA.memoizedState,
                      L = t.stateNode,
                      S = L.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? sA : ze(t.type, sA),
                        WA,
                      );
                    L.__reactInternalSnapshotBeforeUpdate = S;
                  }
                  break;
                case 3:
                  var D = t.stateNode.containerInfo;
                  D.nodeType === 1
                    ? (D.textContent = "")
                    : D.nodeType === 9 &&
                      D.documentElement &&
                      D.removeChild(D.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(n(163));
              }
          } catch (J) {
            VA(t, t.return, J);
          }
          if (((A = t.sibling), A !== null)) {
            (A.return = t.return), (oA = A);
            break;
          }
          oA = t.return;
        }
    return (iA = IB), (IB = !1), iA;
  }
  function ho(A, t, i) {
    var a = t.updateQueue;
    if (((a = a !== null ? a.lastEffect : null), a !== null)) {
      var u = (a = a.next);
      do {
        if ((u.tag & A) === A) {
          var d = u.destroy;
          (u.destroy = void 0), d !== void 0 && Yl(t, i, d);
        }
        u = u.next;
      } while (u !== a);
    }
  }
  function Gi(A, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var i = (t = t.next);
      do {
        if ((i.tag & A) === A) {
          var a = i.create;
          i.destroy = a();
        }
        i = i.next;
      } while (i !== t);
    }
  }
  function Zl(A) {
    var t = A.ref;
    if (t !== null) {
      var i = A.stateNode;
      switch (A.tag) {
        case 5:
          A = i;
          break;
        default:
          A = i;
      }
      typeof t == "function" ? t(A) : (t.current = A);
    }
  }
  function HB(A) {
    var t = A.alternate;
    t !== null && ((A.alternate = null), HB(t)),
      (A.child = null),
      (A.deletions = null),
      (A.sibling = null),
      A.tag === 5 &&
        ((t = A.stateNode),
        t !== null &&
          (delete t[nt],
          delete t[io],
          delete t[dl],
          delete t[tm],
          delete t[rm])),
      (A.stateNode = null),
      (A.return = null),
      (A.dependencies = null),
      (A.memoizedProps = null),
      (A.memoizedState = null),
      (A.pendingProps = null),
      (A.stateNode = null),
      (A.updateQueue = null);
  }
  function SB(A) {
    return A.tag === 5 || A.tag === 3 || A.tag === 4;
  }
  function bB(A) {
    A: for (;;) {
      for (; A.sibling === null; ) {
        if (A.return === null || SB(A.return)) return null;
        A = A.return;
      }
      for (
        A.sibling.return = A.return, A = A.sibling;
        A.tag !== 5 && A.tag !== 6 && A.tag !== 18;

      ) {
        if (A.flags & 2 || A.child === null || A.tag === 4) continue A;
        (A.child.return = A), (A = A.child);
      }
      if (!(A.flags & 2)) return A.stateNode;
    }
  }
  function $l(A, t, i) {
    var a = A.tag;
    if (a === 5 || a === 6)
      (A = A.stateNode),
        t
          ? i.nodeType === 8
            ? i.parentNode.insertBefore(A, t)
            : i.insertBefore(A, t)
          : (i.nodeType === 8
              ? ((t = i.parentNode), t.insertBefore(A, i))
              : ((t = i), t.appendChild(A)),
            (i = i._reactRootContainer),
            i != null || t.onclick !== null || (t.onclick = Ci));
    else if (a !== 4 && ((A = A.child), A !== null))
      for ($l(A, t, i), A = A.sibling; A !== null; )
        $l(A, t, i), (A = A.sibling);
  }
  function ql(A, t, i) {
    var a = A.tag;
    if (a === 5 || a === 6)
      (A = A.stateNode), t ? i.insertBefore(A, t) : i.appendChild(A);
    else if (a !== 4 && ((A = A.child), A !== null))
      for (ql(A, t, i), A = A.sibling; A !== null; )
        ql(A, t, i), (A = A.sibling);
  }
  var ie = null,
    Je = !1;
  function Gt(A, t, i) {
    for (i = i.child; i !== null; ) LB(A, t, i), (i = i.sibling);
  }
  function LB(A, t, i) {
    if (rt && typeof rt.onCommitFiberUnmount == "function")
      try {
        rt.onCommitFiberUnmount(ri, i);
      } catch {}
    switch (i.tag) {
      case 5:
        de || ln(i, t);
      case 6:
        var a = ie,
          u = Je;
        (ie = null),
          Gt(A, t, i),
          (ie = a),
          (Je = u),
          ie !== null &&
            (Je
              ? ((A = ie),
                (i = i.stateNode),
                A.nodeType === 8
                  ? A.parentNode.removeChild(i)
                  : A.removeChild(i))
              : ie.removeChild(i.stateNode));
        break;
      case 18:
        ie !== null &&
          (Je
            ? ((A = ie),
              (i = i.stateNode),
              A.nodeType === 8
                ? fl(A.parentNode, i)
                : A.nodeType === 1 && fl(A, i),
              Jn(A))
            : fl(ie, i.stateNode));
        break;
      case 4:
        (a = ie),
          (u = Je),
          (ie = i.stateNode.containerInfo),
          (Je = !0),
          Gt(A, t, i),
          (ie = a),
          (Je = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !de &&
          ((a = i.updateQueue), a !== null && ((a = a.lastEffect), a !== null))
        ) {
          u = a = a.next;
          do {
            var d = u,
              p = d.destroy;
            (d = d.tag),
              p !== void 0 && (d & 2 || d & 4) && Yl(i, t, p),
              (u = u.next);
          } while (u !== a);
        }
        Gt(A, t, i);
        break;
      case 1:
        if (
          !de &&
          (ln(i, t),
          (a = i.stateNode),
          typeof a.componentWillUnmount == "function")
        )
          try {
            (a.props = i.memoizedProps),
              (a.state = i.memoizedState),
              a.componentWillUnmount();
          } catch (y) {
            VA(i, t, y);
          }
        Gt(A, t, i);
        break;
      case 21:
        Gt(A, t, i);
        break;
      case 22:
        i.mode & 1
          ? ((de = (a = de) || i.memoizedState !== null), Gt(A, t, i), (de = a))
          : Gt(A, t, i);
        break;
      default:
        Gt(A, t, i);
    }
  }
  function TB(A) {
    var t = A.updateQueue;
    if (t !== null) {
      A.updateQueue = null;
      var i = A.stateNode;
      i === null && (i = A.stateNode = new vm()),
        t.forEach(function (a) {
          var u = Hm.bind(null, A, a);
          i.has(a) || (i.add(a), a.then(u, u));
        });
    }
  }
  function Ye(A, t) {
    var i = t.deletions;
    if (i !== null)
      for (var a = 0; a < i.length; a++) {
        var u = i[a];
        try {
          var d = A,
            p = t,
            y = p;
          A: for (; y !== null; ) {
            switch (y.tag) {
              case 5:
                (ie = y.stateNode), (Je = !1);
                break A;
              case 3:
                (ie = y.stateNode.containerInfo), (Je = !0);
                break A;
              case 4:
                (ie = y.stateNode.containerInfo), (Je = !0);
                break A;
            }
            y = y.return;
          }
          if (ie === null) throw Error(n(160));
          LB(d, p, u), (ie = null), (Je = !1);
          var x = u.alternate;
          x !== null && (x.return = null), (u.return = null);
        } catch (K) {
          VA(u, t, K);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) DB(t, A), (t = t.sibling);
  }
  function DB(A, t) {
    var i = A.alternate,
      a = A.flags;
    switch (A.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Ye(t, A), st(A), a & 4)) {
          try {
            ho(3, A, A.return), Gi(3, A);
          } catch (sA) {
            VA(A, A.return, sA);
          }
          try {
            ho(5, A, A.return);
          } catch (sA) {
            VA(A, A.return, sA);
          }
        }
        break;
      case 1:
        Ye(t, A), st(A), a & 512 && i !== null && ln(i, i.return);
        break;
      case 5:
        if (
          (Ye(t, A),
          st(A),
          a & 512 && i !== null && ln(i, i.return),
          A.flags & 32)
        ) {
          var u = A.stateNode;
          try {
            On(u, "");
          } catch (sA) {
            VA(A, A.return, sA);
          }
        }
        if (a & 4 && ((u = A.stateNode), u != null)) {
          var d = A.memoizedProps,
            p = i !== null ? i.memoizedProps : d,
            y = A.type,
            x = A.updateQueue;
          if (((A.updateQueue = null), x !== null))
            try {
              y === "input" && d.type === "radio" && d.name != null && Mr(u, d),
                Sa(y, p);
              var K = Sa(y, d);
              for (p = 0; p < x.length; p += 2) {
                var G = x[p],
                  W = x[p + 1];
                G === "style"
                  ? pf(u, W)
                  : G === "dangerouslySetInnerHTML"
                    ? Bf(u, W)
                    : G === "children"
                      ? On(u, W)
                      : R(u, G, W, K);
              }
              switch (y) {
                case "input":
                  gr(u, d);
                  break;
                case "textarea":
                  cf(u, d);
                  break;
                case "select":
                  var _ = u._wrapperState.wasMultiple;
                  u._wrapperState.wasMultiple = !!d.multiple;
                  var eA = d.value;
                  eA != null
                    ? Pr(u, !!d.multiple, eA, !1)
                    : _ !== !!d.multiple &&
                      (d.defaultValue != null
                        ? Pr(u, !!d.multiple, d.defaultValue, !0)
                        : Pr(u, !!d.multiple, d.multiple ? [] : "", !1));
              }
              u[io] = d;
            } catch (sA) {
              VA(A, A.return, sA);
            }
        }
        break;
      case 6:
        if ((Ye(t, A), st(A), a & 4)) {
          if (A.stateNode === null) throw Error(n(162));
          (u = A.stateNode), (d = A.memoizedProps);
          try {
            u.nodeValue = d;
          } catch (sA) {
            VA(A, A.return, sA);
          }
        }
        break;
      case 3:
        if (
          (Ye(t, A), st(A), a & 4 && i !== null && i.memoizedState.isDehydrated)
        )
          try {
            Jn(t.containerInfo);
          } catch (sA) {
            VA(A, A.return, sA);
          }
        break;
      case 4:
        Ye(t, A), st(A);
        break;
      case 13:
        Ye(t, A),
          st(A),
          (u = A.child),
          u.flags & 8192 &&
            ((d = u.memoizedState !== null),
            (u.stateNode.isHidden = d),
            !d ||
              (u.alternate !== null && u.alternate.memoizedState !== null) ||
              (tu = GA())),
          a & 4 && TB(A);
        break;
      case 22:
        if (
          ((G = i !== null && i.memoizedState !== null),
          A.mode & 1 ? ((de = (K = de) || G), Ye(t, A), (de = K)) : Ye(t, A),
          st(A),
          a & 8192)
        ) {
          if (
            ((K = A.memoizedState !== null),
            (A.stateNode.isHidden = K) && !G && A.mode & 1)
          )
            for (oA = A, G = A.child; G !== null; ) {
              for (W = oA = G; oA !== null; ) {
                switch (((_ = oA), (eA = _.child), _.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ho(4, _, _.return);
                    break;
                  case 1:
                    ln(_, _.return);
                    var iA = _.stateNode;
                    if (typeof iA.componentWillUnmount == "function") {
                      (a = _), (i = _.return);
                      try {
                        (t = a),
                          (iA.props = t.memoizedProps),
                          (iA.state = t.memoizedState),
                          iA.componentWillUnmount();
                      } catch (sA) {
                        VA(a, i, sA);
                      }
                    }
                    break;
                  case 5:
                    ln(_, _.return);
                    break;
                  case 22:
                    if (_.memoizedState !== null) {
                      RB(W);
                      continue;
                    }
                }
                eA !== null ? ((eA.return = _), (oA = eA)) : RB(W);
              }
              G = G.sibling;
            }
          A: for (G = null, W = A; ; ) {
            if (W.tag === 5) {
              if (G === null) {
                G = W;
                try {
                  (u = W.stateNode),
                    K
                      ? ((d = u.style),
                        typeof d.setProperty == "function"
                          ? d.setProperty("display", "none", "important")
                          : (d.display = "none"))
                      : ((y = W.stateNode),
                        (x = W.memoizedProps.style),
                        (p =
                          x != null && x.hasOwnProperty("display")
                            ? x.display
                            : null),
                        (y.style.display = gf("display", p)));
                } catch (sA) {
                  VA(A, A.return, sA);
                }
              }
            } else if (W.tag === 6) {
              if (G === null)
                try {
                  W.stateNode.nodeValue = K ? "" : W.memoizedProps;
                } catch (sA) {
                  VA(A, A.return, sA);
                }
            } else if (
              ((W.tag !== 22 && W.tag !== 23) ||
                W.memoizedState === null ||
                W === A) &&
              W.child !== null
            ) {
              (W.child.return = W), (W = W.child);
              continue;
            }
            if (W === A) break A;
            for (; W.sibling === null; ) {
              if (W.return === null || W.return === A) break A;
              G === W && (G = null), (W = W.return);
            }
            G === W && (G = null),
              (W.sibling.return = W.return),
              (W = W.sibling);
          }
        }
        break;
      case 19:
        Ye(t, A), st(A), a & 4 && TB(A);
        break;
      case 21:
        break;
      default:
        Ye(t, A), st(A);
    }
  }
  function st(A) {
    var t = A.flags;
    if (t & 2) {
      try {
        A: {
          for (var i = A.return; i !== null; ) {
            if (SB(i)) {
              var a = i;
              break A;
            }
            i = i.return;
          }
          throw Error(n(160));
        }
        switch (a.tag) {
          case 5:
            var u = a.stateNode;
            a.flags & 32 && (On(u, ""), (a.flags &= -33));
            var d = bB(A);
            ql(A, d, u);
            break;
          case 3:
          case 4:
            var p = a.stateNode.containerInfo,
              y = bB(A);
            $l(A, y, p);
            break;
          default:
            throw Error(n(161));
        }
      } catch (x) {
        VA(A, A.return, x);
      }
      A.flags &= -3;
    }
    t & 4096 && (A.flags &= -4097);
  }
  function Cm(A, t, i) {
    (oA = A), KB(A);
  }
  function KB(A, t, i) {
    for (var a = (A.mode & 1) !== 0; oA !== null; ) {
      var u = oA,
        d = u.child;
      if (u.tag === 22 && a) {
        var p = u.memoizedState !== null || Vi;
        if (!p) {
          var y = u.alternate,
            x = (y !== null && y.memoizedState !== null) || de;
          y = Vi;
          var K = de;
          if (((Vi = p), (de = x) && !K))
            for (oA = u; oA !== null; )
              (p = oA),
                (x = p.child),
                p.tag === 22 && p.memoizedState !== null
                  ? OB(u)
                  : x !== null
                    ? ((x.return = p), (oA = x))
                    : OB(u);
          for (; d !== null; ) (oA = d), KB(d), (d = d.sibling);
          (oA = u), (Vi = y), (de = K);
        }
        kB(A);
      } else
        u.subtreeFlags & 8772 && d !== null
          ? ((d.return = u), (oA = d))
          : kB(A);
    }
  }
  function kB(A) {
    for (; oA !== null; ) {
      var t = oA;
      if (t.flags & 8772) {
        var i = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                de || Gi(5, t);
                break;
              case 1:
                var a = t.stateNode;
                if (t.flags & 4 && !de)
                  if (i === null) a.componentDidMount();
                  else {
                    var u =
                      t.elementType === t.type
                        ? i.memoizedProps
                        : ze(t.type, i.memoizedProps);
                    a.componentDidUpdate(
                      u,
                      i.memoizedState,
                      a.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var d = t.updateQueue;
                d !== null && Rd(t, d, a);
                break;
              case 3:
                var p = t.updateQueue;
                if (p !== null) {
                  if (((i = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        i = t.child.stateNode;
                        break;
                      case 1:
                        i = t.child.stateNode;
                    }
                  Rd(t, p, i);
                }
                break;
              case 5:
                var y = t.stateNode;
                if (i === null && t.flags & 4) {
                  i = y;
                  var x = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      x.autoFocus && i.focus();
                      break;
                    case "img":
                      x.src && (i.src = x.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var K = t.alternate;
                  if (K !== null) {
                    var G = K.memoizedState;
                    if (G !== null) {
                      var W = G.dehydrated;
                      W !== null && Jn(W);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(n(163));
            }
          de || (t.flags & 512 && Zl(t));
        } catch (_) {
          VA(t, t.return, _);
        }
      }
      if (t === A) {
        oA = null;
        break;
      }
      if (((i = t.sibling), i !== null)) {
        (i.return = t.return), (oA = i);
        break;
      }
      oA = t.return;
    }
  }
  function RB(A) {
    for (; oA !== null; ) {
      var t = oA;
      if (t === A) {
        oA = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        (i.return = t.return), (oA = i);
        break;
      }
      oA = t.return;
    }
  }
  function OB(A) {
    for (; oA !== null; ) {
      var t = oA;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var i = t.return;
            try {
              Gi(4, t);
            } catch (x) {
              VA(t, i, x);
            }
            break;
          case 1:
            var a = t.stateNode;
            if (typeof a.componentDidMount == "function") {
              var u = t.return;
              try {
                a.componentDidMount();
              } catch (x) {
                VA(t, u, x);
              }
            }
            var d = t.return;
            try {
              Zl(t);
            } catch (x) {
              VA(t, d, x);
            }
            break;
          case 5:
            var p = t.return;
            try {
              Zl(t);
            } catch (x) {
              VA(t, p, x);
            }
        }
      } catch (x) {
        VA(t, t.return, x);
      }
      if (t === A) {
        oA = null;
        break;
      }
      var y = t.sibling;
      if (y !== null) {
        (y.return = t.return), (oA = y);
        break;
      }
      oA = t.return;
    }
  }
  var Qm = Math.ceil,
    Wi = T.ReactCurrentDispatcher,
    Au = T.ReactCurrentOwner,
    Oe = T.ReactCurrentBatchConfig,
    FA = 0,
    te = null,
    JA = null,
    se = 0,
    Se = 0,
    un = Nt(0),
    $A = 0,
    vo = null,
    Ur = 0,
    ji = 0,
    eu = 0,
    mo = null,
    ye = null,
    tu = 0,
    cn = 1 / 0,
    Ct = null,
    Xi = !1,
    ru = null,
    Wt = null,
    zi = !1,
    jt = null,
    Ji = 0,
    Co = 0,
    nu = null,
    Yi = -1,
    Zi = 0;
  function we() {
    return FA & 6 ? GA() : Yi !== -1 ? Yi : (Yi = GA());
  }
  function Xt(A) {
    return A.mode & 1
      ? FA & 2 && se !== 0
        ? se & -se
        : om.transition !== null
          ? (Zi === 0 && (Zi = bf()), Zi)
          : ((A = HA),
            A !== 0 ||
              ((A = window.event), (A = A === void 0 ? 16 : Mf(A.type))),
            A)
      : 1;
  }
  function Ze(A, t, i, a) {
    if (50 < Co) throw ((Co = 0), (nu = null), Error(n(185)));
    Gn(A, i, a),
      (!(FA & 2) || A !== te) &&
        (A === te && (!(FA & 2) && (ji |= i), $A === 4 && zt(A, se)),
        Ue(A, a),
        i === 1 &&
          FA === 0 &&
          !(t.mode & 1) &&
          ((cn = GA() + 500), Fi && Pt()));
  }
  function Ue(A, t) {
    var i = A.callbackNode;
    ov(A, t);
    var a = ii(A, A === te ? se : 0);
    if (a === 0)
      i !== null && If(i), (A.callbackNode = null), (A.callbackPriority = 0);
    else if (((t = a & -a), A.callbackPriority !== t)) {
      if ((i != null && If(i), t === 1))
        A.tag === 0 ? nm(MB.bind(null, A)) : Fd(MB.bind(null, A)),
          Am(function () {
            !(FA & 6) && Pt();
          }),
          (i = null);
      else {
        switch (Lf(a)) {
          case 1:
            i = Ra;
            break;
          case 4:
            i = Hf;
            break;
          case 16:
            i = ti;
            break;
          case 536870912:
            i = Sf;
            break;
          default:
            i = ti;
        }
        i = zB(i, NB.bind(null, A));
      }
      (A.callbackPriority = t), (A.callbackNode = i);
    }
  }
  function NB(A, t) {
    if (((Yi = -1), (Zi = 0), FA & 6)) throw Error(n(327));
    var i = A.callbackNode;
    if (fn() && A.callbackNode !== i) return null;
    var a = ii(A, A === te ? se : 0);
    if (a === 0) return null;
    if (a & 30 || a & A.expiredLanes || t) t = $i(A, a);
    else {
      t = a;
      var u = FA;
      FA |= 2;
      var d = _B();
      (te !== A || se !== t) && ((Ct = null), (cn = GA() + 500), Er(A, t));
      do
        try {
          Fm();
          break;
        } catch (y) {
          PB(A, y);
        }
      while (!0);
      Ql(),
        (Wi.current = d),
        (FA = u),
        JA !== null ? (t = 0) : ((te = null), (se = 0), (t = $A));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((u = Oa(A)), u !== 0 && ((a = u), (t = ou(A, u)))),
        t === 1)
      )
        throw ((i = vo), Er(A, 0), zt(A, a), Ue(A, GA()), i);
      if (t === 6) zt(A, a);
      else {
        if (
          ((u = A.current.alternate),
          !(a & 30) &&
            !ym(u) &&
            ((t = $i(A, a)),
            t === 2 && ((d = Oa(A)), d !== 0 && ((a = d), (t = ou(A, d)))),
            t === 1))
        )
          throw ((i = vo), Er(A, 0), zt(A, a), Ue(A, GA()), i);
        switch (((A.finishedWork = u), (A.finishedLanes = a), t)) {
          case 0:
          case 1:
            throw Error(n(345));
          case 2:
            xr(A, ye, Ct);
            break;
          case 3:
            if (
              (zt(A, a),
              (a & 130023424) === a && ((t = tu + 500 - GA()), 10 < t))
            ) {
              if (ii(A, 0) !== 0) break;
              if (((u = A.suspendedLanes), (u & a) !== a)) {
                we(), (A.pingedLanes |= A.suspendedLanes & u);
                break;
              }
              A.timeoutHandle = cl(xr.bind(null, A, ye, Ct), t);
              break;
            }
            xr(A, ye, Ct);
            break;
          case 4:
            if ((zt(A, a), (a & 4194240) === a)) break;
            for (t = A.eventTimes, u = -1; 0 < a; ) {
              var p = 31 - We(a);
              (d = 1 << p), (p = t[p]), p > u && (u = p), (a &= ~d);
            }
            if (
              ((a = u),
              (a = GA() - a),
              (a =
                (120 > a
                  ? 120
                  : 480 > a
                    ? 480
                    : 1080 > a
                      ? 1080
                      : 1920 > a
                        ? 1920
                        : 3e3 > a
                          ? 3e3
                          : 4320 > a
                            ? 4320
                            : 1960 * Qm(a / 1960)) - a),
              10 < a)
            ) {
              A.timeoutHandle = cl(xr.bind(null, A, ye, Ct), a);
              break;
            }
            xr(A, ye, Ct);
            break;
          case 5:
            xr(A, ye, Ct);
            break;
          default:
            throw Error(n(329));
        }
      }
    }
    return Ue(A, GA()), A.callbackNode === i ? NB.bind(null, A) : null;
  }
  function ou(A, t) {
    var i = mo;
    return (
      A.current.memoizedState.isDehydrated && (Er(A, t).flags |= 256),
      (A = $i(A, t)),
      A !== 2 && ((t = ye), (ye = i), t !== null && iu(t)),
      A
    );
  }
  function iu(A) {
    ye === null ? (ye = A) : ye.push.apply(ye, A);
  }
  function ym(A) {
    for (var t = A; ; ) {
      if (t.flags & 16384) {
        var i = t.updateQueue;
        if (i !== null && ((i = i.stores), i !== null))
          for (var a = 0; a < i.length; a++) {
            var u = i[a],
              d = u.getSnapshot;
            u = u.value;
            try {
              if (!je(d(), u)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((i = t.child), t.subtreeFlags & 16384 && i !== null))
        (i.return = t), (t = i);
      else {
        if (t === A) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === A) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function zt(A, t) {
    for (
      t &= ~eu,
        t &= ~ji,
        A.suspendedLanes |= t,
        A.pingedLanes &= ~t,
        A = A.expirationTimes;
      0 < t;

    ) {
      var i = 31 - We(t),
        a = 1 << i;
      (A[i] = -1), (t &= ~a);
    }
  }
  function MB(A) {
    if (FA & 6) throw Error(n(327));
    fn();
    var t = ii(A, 0);
    if (!(t & 1)) return Ue(A, GA()), null;
    var i = $i(A, t);
    if (A.tag !== 0 && i === 2) {
      var a = Oa(A);
      a !== 0 && ((t = a), (i = ou(A, a)));
    }
    if (i === 1) throw ((i = vo), Er(A, 0), zt(A, t), Ue(A, GA()), i);
    if (i === 6) throw Error(n(345));
    return (
      (A.finishedWork = A.current.alternate),
      (A.finishedLanes = t),
      xr(A, ye, Ct),
      Ue(A, GA()),
      null
    );
  }
  function su(A, t) {
    var i = FA;
    FA |= 1;
    try {
      return A(t);
    } finally {
      (FA = i), FA === 0 && ((cn = GA() + 500), Fi && Pt());
    }
  }
  function Fr(A) {
    jt !== null && jt.tag === 0 && !(FA & 6) && fn();
    var t = FA;
    FA |= 1;
    var i = Oe.transition,
      a = HA;
    try {
      if (((Oe.transition = null), (HA = 1), A)) return A();
    } finally {
      (HA = a), (Oe.transition = i), (FA = t), !(FA & 6) && Pt();
    }
  }
  function au() {
    (Se = un.current), KA(un);
  }
  function Er(A, t) {
    (A.finishedWork = null), (A.finishedLanes = 0);
    var i = A.timeoutHandle;
    if ((i !== -1 && ((A.timeoutHandle = -1), qv(i)), JA !== null))
      for (i = JA.return; i !== null; ) {
        var a = i;
        switch ((wl(a), a.tag)) {
          case 1:
            (a = a.type.childContextTypes), a != null && yi();
            break;
          case 3:
            sn(), KA(me), KA(ue), Sl();
            break;
          case 5:
            Il(a);
            break;
          case 4:
            sn();
            break;
          case 13:
            KA(MA);
            break;
          case 19:
            KA(MA);
            break;
          case 10:
            yl(a.type._context);
            break;
          case 22:
          case 23:
            au();
        }
        i = i.return;
      }
    if (
      ((te = A),
      (JA = A = Jt(A.current, null)),
      (se = Se = t),
      ($A = 0),
      (vo = null),
      (eu = ji = Ur = 0),
      (ye = mo = null),
      Cr !== null)
    ) {
      for (t = 0; t < Cr.length; t++)
        if (((i = Cr[t]), (a = i.interleaved), a !== null)) {
          i.interleaved = null;
          var u = a.next,
            d = i.pending;
          if (d !== null) {
            var p = d.next;
            (d.next = u), (a.next = p);
          }
          i.pending = a;
        }
      Cr = null;
    }
    return A;
  }
  function PB(A, t) {
    do {
      var i = JA;
      try {
        if ((Ql(), (Ki.current = Ni), ki)) {
          for (var a = PA.memoizedState; a !== null; ) {
            var u = a.queue;
            u !== null && (u.pending = null), (a = a.next);
          }
          ki = !1;
        }
        if (
          ((yr = 0),
          (ee = ZA = PA = null),
          (fo = !1),
          (Bo = 0),
          (Au.current = null),
          i === null || i.return === null)
        ) {
          ($A = 1), (vo = t), (JA = null);
          break;
        }
        A: {
          var d = A,
            p = i.return,
            y = i,
            x = t;
          if (
            ((t = se),
            (y.flags |= 32768),
            x !== null && typeof x == "object" && typeof x.then == "function")
          ) {
            var K = x,
              G = y,
              W = G.tag;
            if (!(G.mode & 1) && (W === 0 || W === 11 || W === 15)) {
              var _ = G.alternate;
              _
                ? ((G.updateQueue = _.updateQueue),
                  (G.memoizedState = _.memoizedState),
                  (G.lanes = _.lanes))
                : ((G.updateQueue = null), (G.memoizedState = null));
            }
            var eA = fB(p);
            if (eA !== null) {
              (eA.flags &= -257),
                dB(eA, p, y, d, t),
                eA.mode & 1 && cB(d, K, t),
                (t = eA),
                (x = K);
              var iA = t.updateQueue;
              if (iA === null) {
                var sA = /* @__PURE__ */ new Set();
                sA.add(x), (t.updateQueue = sA);
              } else iA.add(x);
              break A;
            } else {
              if (!(t & 1)) {
                cB(d, K, t), lu();
                break A;
              }
              x = Error(n(426));
            }
          } else if (RA && y.mode & 1) {
            var WA = fB(p);
            if (WA !== null) {
              !(WA.flags & 65536) && (WA.flags |= 256),
                dB(WA, p, y, d, t),
                ml(an(x, y));
              break A;
            }
          }
          (d = x = an(x, y)),
            $A !== 4 && ($A = 2),
            mo === null ? (mo = [d]) : mo.push(d),
            (d = p);
          do {
            switch (d.tag) {
              case 3:
                (d.flags |= 65536), (t &= -t), (d.lanes |= t);
                var L = lB(d, x, t);
                kd(d, L);
                break A;
              case 1:
                y = x;
                var S = d.type,
                  D = d.stateNode;
                if (
                  !(d.flags & 128) &&
                  (typeof S.getDerivedStateFromError == "function" ||
                    (D !== null &&
                      typeof D.componentDidCatch == "function" &&
                      (Wt === null || !Wt.has(D))))
                ) {
                  (d.flags |= 65536), (t &= -t), (d.lanes |= t);
                  var J = uB(d, y, t);
                  kd(d, J);
                  break A;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        GB(i);
      } catch (lA) {
        (t = lA), JA === i && i !== null && (JA = i = i.return);
        continue;
      }
      break;
    } while (!0);
  }
  function _B() {
    var A = Wi.current;
    return (Wi.current = Ni), A === null ? Ni : A;
  }
  function lu() {
    ($A === 0 || $A === 3 || $A === 2) && ($A = 4),
      te === null || (!(Ur & 268435455) && !(ji & 268435455)) || zt(te, se);
  }
  function $i(A, t) {
    var i = FA;
    FA |= 2;
    var a = _B();
    (te !== A || se !== t) && ((Ct = null), Er(A, t));
    do
      try {
        Um();
        break;
      } catch (u) {
        PB(A, u);
      }
    while (!0);
    if ((Ql(), (FA = i), (Wi.current = a), JA !== null)) throw Error(n(261));
    return (te = null), (se = 0), $A;
  }
  function Um() {
    for (; JA !== null; ) VB(JA);
  }
  function Fm() {
    for (; JA !== null && !Y0(); ) VB(JA);
  }
  function VB(A) {
    var t = XB(A.alternate, A, Se);
    (A.memoizedProps = A.pendingProps),
      t === null ? GB(A) : (JA = t),
      (Au.current = null);
  }
  function GB(A) {
    var t = A;
    do {
      var i = t.alternate;
      if (((A = t.return), t.flags & 32768)) {
        if (((i = hm(i, t)), i !== null)) {
          (i.flags &= 32767), (JA = i);
          return;
        }
        if (A !== null)
          (A.flags |= 32768), (A.subtreeFlags = 0), (A.deletions = null);
        else {
          ($A = 6), (JA = null);
          return;
        }
      } else if (((i = wm(i, t, Se)), i !== null)) {
        JA = i;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        JA = t;
        return;
      }
      JA = t = A;
    } while (t !== null);
    $A === 0 && ($A = 5);
  }
  function xr(A, t, i) {
    var a = HA,
      u = Oe.transition;
    try {
      (Oe.transition = null), (HA = 1), Em(A, t, i, a);
    } finally {
      (Oe.transition = u), (HA = a);
    }
    return null;
  }
  function Em(A, t, i, a) {
    do fn();
    while (jt !== null);
    if (FA & 6) throw Error(n(327));
    i = A.finishedWork;
    var u = A.finishedLanes;
    if (i === null) return null;
    if (((A.finishedWork = null), (A.finishedLanes = 0), i === A.current))
      throw Error(n(177));
    (A.callbackNode = null), (A.callbackPriority = 0);
    var d = i.lanes | i.childLanes;
    if (
      (iv(A, d),
      A === te && ((JA = te = null), (se = 0)),
      (!(i.subtreeFlags & 2064) && !(i.flags & 2064)) ||
        zi ||
        ((zi = !0),
        zB(ti, function () {
          return fn(), null;
        })),
      (d = (i.flags & 15990) !== 0),
      i.subtreeFlags & 15990 || d)
    ) {
      (d = Oe.transition), (Oe.transition = null);
      var p = HA;
      HA = 1;
      var y = FA;
      (FA |= 4),
        (Au.current = null),
        mm(A, i),
        DB(i, A),
        jv(ll),
        (li = !!al),
        (ll = al = null),
        (A.current = i),
        Cm(i),
        Z0(),
        (FA = y),
        (HA = p),
        (Oe.transition = d);
    } else A.current = i;
    if (
      (zi && ((zi = !1), (jt = A), (Ji = u)),
      (d = A.pendingLanes),
      d === 0 && (Wt = null),
      Av(i.stateNode),
      Ue(A, GA()),
      t !== null)
    )
      for (a = A.onRecoverableError, i = 0; i < t.length; i++)
        (u = t[i]), a(u.value, { componentStack: u.stack, digest: u.digest });
    if (Xi) throw ((Xi = !1), (A = ru), (ru = null), A);
    return (
      Ji & 1 && A.tag !== 0 && fn(),
      (d = A.pendingLanes),
      d & 1 ? (A === nu ? Co++ : ((Co = 0), (nu = A))) : (Co = 0),
      Pt(),
      null
    );
  }
  function fn() {
    if (jt !== null) {
      var A = Lf(Ji),
        t = Oe.transition,
        i = HA;
      try {
        if (((Oe.transition = null), (HA = 16 > A ? 16 : A), jt === null))
          var a = !1;
        else {
          if (((A = jt), (jt = null), (Ji = 0), FA & 6)) throw Error(n(331));
          var u = FA;
          for (FA |= 4, oA = A.current; oA !== null; ) {
            var d = oA,
              p = d.child;
            if (oA.flags & 16) {
              var y = d.deletions;
              if (y !== null) {
                for (var x = 0; x < y.length; x++) {
                  var K = y[x];
                  for (oA = K; oA !== null; ) {
                    var G = oA;
                    switch (G.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ho(8, G, d);
                    }
                    var W = G.child;
                    if (W !== null) (W.return = G), (oA = W);
                    else
                      for (; oA !== null; ) {
                        G = oA;
                        var _ = G.sibling,
                          eA = G.return;
                        if ((HB(G), G === K)) {
                          oA = null;
                          break;
                        }
                        if (_ !== null) {
                          (_.return = eA), (oA = _);
                          break;
                        }
                        oA = eA;
                      }
                  }
                }
                var iA = d.alternate;
                if (iA !== null) {
                  var sA = iA.child;
                  if (sA !== null) {
                    iA.child = null;
                    do {
                      var WA = sA.sibling;
                      (sA.sibling = null), (sA = WA);
                    } while (sA !== null);
                  }
                }
                oA = d;
              }
            }
            if (d.subtreeFlags & 2064 && p !== null) (p.return = d), (oA = p);
            else
              A: for (; oA !== null; ) {
                if (((d = oA), d.flags & 2048))
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ho(9, d, d.return);
                  }
                var L = d.sibling;
                if (L !== null) {
                  (L.return = d.return), (oA = L);
                  break A;
                }
                oA = d.return;
              }
          }
          var S = A.current;
          for (oA = S; oA !== null; ) {
            p = oA;
            var D = p.child;
            if (p.subtreeFlags & 2064 && D !== null) (D.return = p), (oA = D);
            else
              A: for (p = S; oA !== null; ) {
                if (((y = oA), y.flags & 2048))
                  try {
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Gi(9, y);
                    }
                  } catch (lA) {
                    VA(y, y.return, lA);
                  }
                if (y === p) {
                  oA = null;
                  break A;
                }
                var J = y.sibling;
                if (J !== null) {
                  (J.return = y.return), (oA = J);
                  break A;
                }
                oA = y.return;
              }
          }
          if (
            ((FA = u),
            Pt(),
            rt && typeof rt.onPostCommitFiberRoot == "function")
          )
            try {
              rt.onPostCommitFiberRoot(ri, A);
            } catch {}
          a = !0;
        }
        return a;
      } finally {
        (HA = i), (Oe.transition = t);
      }
    }
    return !1;
  }
  function WB(A, t, i) {
    (t = an(i, t)),
      (t = lB(A, t, 1)),
      (A = Vt(A, t, 1)),
      (t = we()),
      A !== null && (Gn(A, 1, t), Ue(A, t));
  }
  function VA(A, t, i) {
    if (A.tag === 3) WB(A, A, i);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          WB(t, A, i);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Wt === null || !Wt.has(a)))
          ) {
            (A = an(i, A)),
              (A = uB(t, A, 1)),
              (t = Vt(t, A, 1)),
              (A = we()),
              t !== null && (Gn(t, 1, A), Ue(t, A));
            break;
          }
        }
        t = t.return;
      }
  }
  function xm(A, t, i) {
    var a = A.pingCache;
    a !== null && a.delete(t),
      (t = we()),
      (A.pingedLanes |= A.suspendedLanes & i),
      te === A &&
        (se & i) === i &&
        ($A === 4 || ($A === 3 && (se & 130023424) === se && 500 > GA() - tu)
          ? Er(A, 0)
          : (eu |= i)),
      Ue(A, t);
  }
  function jB(A, t) {
    t === 0 &&
      (A.mode & 1
        ? ((t = oi), (oi <<= 1), !(oi & 130023424) && (oi = 4194304))
        : (t = 1));
    var i = we();
    (A = ht(A, t)), A !== null && (Gn(A, t, i), Ue(A, i));
  }
  function Im(A) {
    var t = A.memoizedState,
      i = 0;
    t !== null && (i = t.retryLane), jB(A, i);
  }
  function Hm(A, t) {
    var i = 0;
    switch (A.tag) {
      case 13:
        var a = A.stateNode,
          u = A.memoizedState;
        u !== null && (i = u.retryLane);
        break;
      case 19:
        a = A.stateNode;
        break;
      default:
        throw Error(n(314));
    }
    a !== null && a.delete(t), jB(A, i);
  }
  var XB;
  XB = function (A, t, i) {
    if (A !== null)
      if (A.memoizedProps !== t.pendingProps || me.current) Qe = !0;
      else {
        if (!(A.lanes & i) && !(t.flags & 128)) return (Qe = !1), pm(A, t, i);
        Qe = !!(A.flags & 131072);
      }
    else (Qe = !1), RA && t.flags & 1048576 && Ed(t, xi, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var a = t.type;
        _i(A, t), (A = t.pendingProps);
        var u = qr(t, ue.current);
        on(t, i), (u = Tl(null, t, a, A, u, i));
        var d = Dl();
        return (
          (t.flags |= 1),
          typeof u == "object" &&
          u !== null &&
          typeof u.render == "function" &&
          u.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ce(a) ? ((d = !0), Ui(t)) : (d = !1),
              (t.memoizedState =
                u.state !== null && u.state !== void 0 ? u.state : null),
              El(t),
              (u.updater = Mi),
              (t.stateNode = u),
              (u._reactInternals = t),
              Ml(t, a, A, i),
              (t = Gl(null, t, a, !0, d, i)))
            : ((t.tag = 0), RA && d && pl(t), pe(null, t, u, i), (t = t.child)),
          t
        );
      case 16:
        a = t.elementType;
        A: {
          switch (
            (_i(A, t),
            (A = t.pendingProps),
            (u = a._init),
            (a = u(a._payload)),
            (t.type = a),
            (u = t.tag = bm(a)),
            (A = ze(a, A)),
            u)
          ) {
            case 0:
              t = Vl(null, t, a, A, i);
              break A;
            case 1:
              t = vB(null, t, a, A, i);
              break A;
            case 11:
              t = BB(null, t, a, A, i);
              break A;
            case 14:
              t = gB(null, t, a, ze(a.type, A), i);
              break A;
          }
          throw Error(n(306, a, ""));
        }
        return t;
      case 0:
        return (
          (a = t.type),
          (u = t.pendingProps),
          (u = t.elementType === a ? u : ze(a, u)),
          Vl(A, t, a, u, i)
        );
      case 1:
        return (
          (a = t.type),
          (u = t.pendingProps),
          (u = t.elementType === a ? u : ze(a, u)),
          vB(A, t, a, u, i)
        );
      case 3:
        A: {
          if ((mB(t), A === null)) throw Error(n(387));
          (a = t.pendingProps),
            (d = t.memoizedState),
            (u = d.element),
            Kd(A, t),
            Ti(t, a, null, i);
          var p = t.memoizedState;
          if (((a = p.element), d.isDehydrated))
            if (
              ((d = {
                element: a,
                isDehydrated: !1,
                cache: p.cache,
                pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
                transitions: p.transitions,
              }),
              (t.updateQueue.baseState = d),
              (t.memoizedState = d),
              t.flags & 256)
            ) {
              (u = an(Error(n(423)), t)), (t = CB(A, t, a, i, u));
              break A;
            } else if (a !== u) {
              (u = an(Error(n(424)), t)), (t = CB(A, t, a, i, u));
              break A;
            } else
              for (
                He = Ot(t.stateNode.containerInfo.firstChild),
                  Ie = t,
                  RA = !0,
                  Xe = null,
                  i = Td(t, null, a, i),
                  t.child = i;
                i;

              )
                (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
          else {
            if ((tn(), a === u)) {
              t = mt(A, t, i);
              break A;
            }
            pe(A, t, a, i);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Od(t),
          A === null && vl(t),
          (a = t.type),
          (u = t.pendingProps),
          (d = A !== null ? A.memoizedProps : null),
          (p = u.children),
          ul(a, u) ? (p = null) : d !== null && ul(a, d) && (t.flags |= 32),
          hB(A, t),
          pe(A, t, p, i),
          t.child
        );
      case 6:
        return A === null && vl(t), null;
      case 13:
        return QB(A, t, i);
      case 4:
        return (
          xl(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          A === null ? (t.child = rn(t, null, a, i)) : pe(A, t, a, i),
          t.child
        );
      case 11:
        return (
          (a = t.type),
          (u = t.pendingProps),
          (u = t.elementType === a ? u : ze(a, u)),
          BB(A, t, a, u, i)
        );
      case 7:
        return pe(A, t, t.pendingProps, i), t.child;
      case 8:
        return pe(A, t, t.pendingProps.children, i), t.child;
      case 12:
        return pe(A, t, t.pendingProps.children, i), t.child;
      case 10:
        A: {
          if (
            ((a = t.type._context),
            (u = t.pendingProps),
            (d = t.memoizedProps),
            (p = u.value),
            bA(Si, a._currentValue),
            (a._currentValue = p),
            d !== null)
          )
            if (je(d.value, p)) {
              if (d.children === u.children && !me.current) {
                t = mt(A, t, i);
                break A;
              }
            } else
              for (d = t.child, d !== null && (d.return = t); d !== null; ) {
                var y = d.dependencies;
                if (y !== null) {
                  p = d.child;
                  for (var x = y.firstContext; x !== null; ) {
                    if (x.context === a) {
                      if (d.tag === 1) {
                        (x = vt(-1, i & -i)), (x.tag = 2);
                        var K = d.updateQueue;
                        if (K !== null) {
                          K = K.shared;
                          var G = K.pending;
                          G === null
                            ? (x.next = x)
                            : ((x.next = G.next), (G.next = x)),
                            (K.pending = x);
                        }
                      }
                      (d.lanes |= i),
                        (x = d.alternate),
                        x !== null && (x.lanes |= i),
                        Ul(d.return, i, t),
                        (y.lanes |= i);
                      break;
                    }
                    x = x.next;
                  }
                } else if (d.tag === 10) p = d.type === t.type ? null : d.child;
                else if (d.tag === 18) {
                  if (((p = d.return), p === null)) throw Error(n(341));
                  (p.lanes |= i),
                    (y = p.alternate),
                    y !== null && (y.lanes |= i),
                    Ul(p, i, t),
                    (p = d.sibling);
                } else p = d.child;
                if (p !== null) p.return = d;
                else
                  for (p = d; p !== null; ) {
                    if (p === t) {
                      p = null;
                      break;
                    }
                    if (((d = p.sibling), d !== null)) {
                      (d.return = p.return), (p = d);
                      break;
                    }
                    p = p.return;
                  }
                d = p;
              }
          pe(A, t, u.children, i), (t = t.child);
        }
        return t;
      case 9:
        return (
          (u = t.type),
          (a = t.pendingProps.children),
          on(t, i),
          (u = ke(u)),
          (a = a(u)),
          (t.flags |= 1),
          pe(A, t, a, i),
          t.child
        );
      case 14:
        return (
          (a = t.type),
          (u = ze(a, t.pendingProps)),
          (u = ze(a.type, u)),
          gB(A, t, a, u, i)
        );
      case 15:
        return pB(A, t, t.type, t.pendingProps, i);
      case 17:
        return (
          (a = t.type),
          (u = t.pendingProps),
          (u = t.elementType === a ? u : ze(a, u)),
          _i(A, t),
          (t.tag = 1),
          Ce(a) ? ((A = !0), Ui(t)) : (A = !1),
          on(t, i),
          sB(t, a, u),
          Ml(t, a, u, i),
          Gl(null, t, a, !0, A, i)
        );
      case 19:
        return UB(A, t, i);
      case 22:
        return wB(A, t, i);
    }
    throw Error(n(156, t.tag));
  };
  function zB(A, t) {
    return xf(A, t);
  }
  function Sm(A, t, i, a) {
    (this.tag = A),
      (this.key = i),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ne(A, t, i, a) {
    return new Sm(A, t, i, a);
  }
  function uu(A) {
    return (A = A.prototype), !(!A || !A.isReactComponent);
  }
  function bm(A) {
    if (typeof A == "function") return uu(A) ? 1 : 0;
    if (A != null) {
      if (((A = A.$$typeof), A === V)) return 11;
      if (A === uA) return 14;
    }
    return 2;
  }
  function Jt(A, t) {
    var i = A.alternate;
    return (
      i === null
        ? ((i = Ne(A.tag, t, A.key, A.mode)),
          (i.elementType = A.elementType),
          (i.type = A.type),
          (i.stateNode = A.stateNode),
          (i.alternate = A),
          (A.alternate = i))
        : ((i.pendingProps = t),
          (i.type = A.type),
          (i.flags = 0),
          (i.subtreeFlags = 0),
          (i.deletions = null)),
      (i.flags = A.flags & 14680064),
      (i.childLanes = A.childLanes),
      (i.lanes = A.lanes),
      (i.child = A.child),
      (i.memoizedProps = A.memoizedProps),
      (i.memoizedState = A.memoizedState),
      (i.updateQueue = A.updateQueue),
      (t = A.dependencies),
      (i.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (i.sibling = A.sibling),
      (i.index = A.index),
      (i.ref = A.ref),
      i
    );
  }
  function qi(A, t, i, a, u, d) {
    var p = 2;
    if (((a = A), typeof A == "function")) uu(A) && (p = 1);
    else if (typeof A == "string") p = 5;
    else
      A: switch (A) {
        case M:
          return Ir(i.children, u, d, t);
        case X:
          (p = 8), (u |= 8);
          break;
        case z:
          return (
            (A = Ne(12, i, t, u | 2)), (A.elementType = z), (A.lanes = d), A
          );
        case q:
          return (A = Ne(13, i, t, u)), (A.elementType = q), (A.lanes = d), A;
        case rA:
          return (A = Ne(19, i, t, u)), (A.elementType = rA), (A.lanes = d), A;
        case Z:
          return As(i, u, d, t);
        default:
          if (typeof A == "object" && A !== null)
            switch (A.$$typeof) {
              case nA:
                p = 10;
                break A;
              case dA:
                p = 9;
                break A;
              case V:
                p = 11;
                break A;
              case uA:
                p = 14;
                break A;
              case aA:
                (p = 16), (a = null);
                break A;
            }
          throw Error(n(130, A == null ? A : typeof A, ""));
      }
    return (
      (t = Ne(p, i, t, u)), (t.elementType = A), (t.type = a), (t.lanes = d), t
    );
  }
  function Ir(A, t, i, a) {
    return (A = Ne(7, A, a, t)), (A.lanes = i), A;
  }
  function As(A, t, i, a) {
    return (
      (A = Ne(22, A, a, t)),
      (A.elementType = Z),
      (A.lanes = i),
      (A.stateNode = { isHidden: !1 }),
      A
    );
  }
  function cu(A, t, i) {
    return (A = Ne(6, A, null, t)), (A.lanes = i), A;
  }
  function fu(A, t, i) {
    return (
      (t = Ne(4, A.children !== null ? A.children : [], A.key, t)),
      (t.lanes = i),
      (t.stateNode = {
        containerInfo: A.containerInfo,
        pendingChildren: null,
        implementation: A.implementation,
      }),
      t
    );
  }
  function Lm(A, t, i, a, u) {
    (this.tag = t),
      (this.containerInfo = A),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Na(0)),
      (this.expirationTimes = Na(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Na(0)),
      (this.identifierPrefix = a),
      (this.onRecoverableError = u),
      (this.mutableSourceEagerHydrationData = null);
  }
  function du(A, t, i, a, u, d, p, y, x) {
    return (
      (A = new Lm(A, t, i, y, x)),
      t === 1 ? ((t = 1), d === !0 && (t |= 8)) : (t = 0),
      (d = Ne(3, null, null, t)),
      (A.current = d),
      (d.stateNode = A),
      (d.memoizedState = {
        element: a,
        isDehydrated: i,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      El(d),
      A
    );
  }
  function Tm(A, t, i) {
    var a =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: O,
      key: a == null ? null : "" + a,
      children: A,
      containerInfo: t,
      implementation: i,
    };
  }
  function JB(A) {
    if (!A) return Mt;
    A = A._reactInternals;
    A: {
      if (pr(A) !== A || A.tag !== 1) throw Error(n(170));
      var t = A;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break A;
          case 1:
            if (Ce(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break A;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(n(171));
    }
    if (A.tag === 1) {
      var i = A.type;
      if (Ce(i)) return yd(A, i, t);
    }
    return t;
  }
  function YB(A, t, i, a, u, d, p, y, x) {
    return (
      (A = du(i, a, !0, A, u, d, p, y, x)),
      (A.context = JB(null)),
      (i = A.current),
      (a = we()),
      (u = Xt(i)),
      (d = vt(a, u)),
      (d.callback = t ?? null),
      Vt(i, d, u),
      (A.current.lanes = u),
      Gn(A, u, a),
      Ue(A, a),
      A
    );
  }
  function es(A, t, i, a) {
    var u = t.current,
      d = we(),
      p = Xt(u);
    return (
      (i = JB(i)),
      t.context === null ? (t.context = i) : (t.pendingContext = i),
      (t = vt(d, p)),
      (t.payload = { element: A }),
      (a = a === void 0 ? null : a),
      a !== null && (t.callback = a),
      (A = Vt(u, t, p)),
      A !== null && (Ze(A, u, p, d), Li(A, u, p)),
      p
    );
  }
  function ts(A) {
    if (((A = A.current), !A.child)) return null;
    switch (A.child.tag) {
      case 5:
        return A.child.stateNode;
      default:
        return A.child.stateNode;
    }
  }
  function ZB(A, t) {
    if (((A = A.memoizedState), A !== null && A.dehydrated !== null)) {
      var i = A.retryLane;
      A.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function Bu(A, t) {
    ZB(A, t), (A = A.alternate) && ZB(A, t);
  }
  function Dm() {
    return null;
  }
  var $B =
    typeof reportError == "function"
      ? reportError
      : function (A) {
          console.error(A);
        };
  function gu(A) {
    this._internalRoot = A;
  }
  (rs.prototype.render = gu.prototype.render =
    function (A) {
      var t = this._internalRoot;
      if (t === null) throw Error(n(409));
      es(A, t, null, null);
    }),
    (rs.prototype.unmount = gu.prototype.unmount =
      function () {
        var A = this._internalRoot;
        if (A !== null) {
          this._internalRoot = null;
          var t = A.containerInfo;
          Fr(function () {
            es(null, A, null, null);
          }),
            (t[Bt] = null);
        }
      });
  function rs(A) {
    this._internalRoot = A;
  }
  rs.prototype.unstable_scheduleHydration = function (A) {
    if (A) {
      var t = Kf();
      A = { blockedOn: null, target: A, priority: t };
      for (var i = 0; i < Kt.length && t !== 0 && t < Kt[i].priority; i++);
      Kt.splice(i, 0, A), i === 0 && Of(A);
    }
  };
  function pu(A) {
    return !(!A || (A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11));
  }
  function ns(A) {
    return !(
      !A ||
      (A.nodeType !== 1 &&
        A.nodeType !== 9 &&
        A.nodeType !== 11 &&
        (A.nodeType !== 8 || A.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function qB() {}
  function Km(A, t, i, a, u) {
    if (u) {
      if (typeof a == "function") {
        var d = a;
        a = function () {
          var K = ts(p);
          d.call(K);
        };
      }
      var p = YB(t, a, A, 0, null, !1, !1, "", qB);
      return (
        (A._reactRootContainer = p),
        (A[Bt] = p.current),
        no(A.nodeType === 8 ? A.parentNode : A),
        Fr(),
        p
      );
    }
    for (; (u = A.lastChild); ) A.removeChild(u);
    if (typeof a == "function") {
      var y = a;
      a = function () {
        var K = ts(x);
        y.call(K);
      };
    }
    var x = du(A, 0, !1, null, null, !1, !1, "", qB);
    return (
      (A._reactRootContainer = x),
      (A[Bt] = x.current),
      no(A.nodeType === 8 ? A.parentNode : A),
      Fr(function () {
        es(t, x, i, a);
      }),
      x
    );
  }
  function os(A, t, i, a, u) {
    var d = i._reactRootContainer;
    if (d) {
      var p = d;
      if (typeof u == "function") {
        var y = u;
        u = function () {
          var x = ts(p);
          y.call(x);
        };
      }
      es(t, p, A, u);
    } else p = Km(i, t, A, u, a);
    return ts(p);
  }
  (Tf = function (A) {
    switch (A.tag) {
      case 3:
        var t = A.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var i = Vn(t.pendingLanes);
          i !== 0 &&
            (Ma(t, i | 1), Ue(t, GA()), !(FA & 6) && ((cn = GA() + 500), Pt()));
        }
        break;
      case 13:
        Fr(function () {
          var a = ht(A, 1);
          if (a !== null) {
            var u = we();
            Ze(a, A, 1, u);
          }
        }),
          Bu(A, 1);
    }
  }),
    (Pa = function (A) {
      if (A.tag === 13) {
        var t = ht(A, 134217728);
        if (t !== null) {
          var i = we();
          Ze(t, A, 134217728, i);
        }
        Bu(A, 134217728);
      }
    }),
    (Df = function (A) {
      if (A.tag === 13) {
        var t = Xt(A),
          i = ht(A, t);
        if (i !== null) {
          var a = we();
          Ze(i, A, t, a);
        }
        Bu(A, t);
      }
    }),
    (Kf = function () {
      return HA;
    }),
    (kf = function (A, t) {
      var i = HA;
      try {
        return (HA = A), t();
      } finally {
        HA = i;
      }
    }),
    (Ta = function (A, t, i) {
      switch (t) {
        case "input":
          if ((gr(A, i), (t = i.name), i.type === "radio" && t != null)) {
            for (i = A; i.parentNode; ) i = i.parentNode;
            for (
              i = i.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < i.length;
              t++
            ) {
              var a = i[t];
              if (a !== A && a.form === A.form) {
                var u = Qi(a);
                if (!u) throw Error(n(90));
                NA(a), gr(a, u);
              }
            }
          }
          break;
        case "textarea":
          cf(A, i);
          break;
        case "select":
          (t = i.value), t != null && Pr(A, !!i.multiple, t, !1);
      }
    }),
    (mf = su),
    (Cf = Fr);
  var km = { usingClientEntryPoint: !1, Events: [so, Zr, Qi, hf, vf, su] },
    Qo = {
      findFiberByHostInstance: wr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Rm = {
      bundleType: Qo.bundleType,
      version: Qo.version,
      rendererPackageName: Qo.rendererPackageName,
      rendererConfig: Qo.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: T.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (A) {
        return (A = Ff(A)), A === null ? null : A.stateNode;
      },
      findFiberByHostInstance: Qo.findFiberByHostInstance || Dm,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var is = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!is.isDisabled && is.supportsFiber)
      try {
        (ri = is.inject(Rm)), (rt = is);
      } catch {}
  }
  return (
    (Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = km),
    (Fe.createPortal = function (A, t) {
      var i =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!pu(t)) throw Error(n(200));
      return Tm(A, t, null, i);
    }),
    (Fe.createRoot = function (A, t) {
      if (!pu(A)) throw Error(n(299));
      var i = !1,
        a = "",
        u = $B;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (i = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        (t = du(A, 1, !1, null, null, i, !1, a, u)),
        (A[Bt] = t.current),
        no(A.nodeType === 8 ? A.parentNode : A),
        new gu(t)
      );
    }),
    (Fe.findDOMNode = function (A) {
      if (A == null) return null;
      if (A.nodeType === 1) return A;
      var t = A._reactInternals;
      if (t === void 0)
        throw typeof A.render == "function"
          ? Error(n(188))
          : ((A = Object.keys(A).join(",")), Error(n(268, A)));
      return (A = Ff(t)), (A = A === null ? null : A.stateNode), A;
    }),
    (Fe.flushSync = function (A) {
      return Fr(A);
    }),
    (Fe.hydrate = function (A, t, i) {
      if (!ns(t)) throw Error(n(200));
      return os(null, A, t, !0, i);
    }),
    (Fe.hydrateRoot = function (A, t, i) {
      if (!pu(A)) throw Error(n(405));
      var a = (i != null && i.hydratedSources) || null,
        u = !1,
        d = "",
        p = $B;
      if (
        (i != null &&
          (i.unstable_strictMode === !0 && (u = !0),
          i.identifierPrefix !== void 0 && (d = i.identifierPrefix),
          i.onRecoverableError !== void 0 && (p = i.onRecoverableError)),
        (t = YB(t, null, A, 1, i ?? null, u, !1, d, p)),
        (A[Bt] = t.current),
        no(A),
        a)
      )
        for (A = 0; A < a.length; A++)
          (i = a[A]),
            (u = i._getVersion),
            (u = u(i._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [i, u])
              : t.mutableSourceEagerHydrationData.push(i, u);
      return new rs(t);
    }),
    (Fe.render = function (A, t, i) {
      if (!ns(t)) throw Error(n(200));
      return os(null, A, t, !1, i);
    }),
    (Fe.unmountComponentAtNode = function (A) {
      if (!ns(A)) throw Error(n(40));
      return A._reactRootContainer
        ? (Fr(function () {
            os(null, null, A, !1, function () {
              (A._reactRootContainer = null), (A[Bt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Fe.unstable_batchedUpdates = su),
    (Fe.unstable_renderSubtreeIntoContainer = function (A, t, i, a) {
      if (!ns(i)) throw Error(n(200));
      if (A == null || A._reactInternals === void 0) throw Error(n(38));
      return os(A, t, i, !1, a);
    }),
    (Fe.version = "18.3.1-next-f1338f8080-20240426"),
    Fe
  );
}
function Kp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kp);
    } catch (e) {
      console.error(e);
    }
}
Kp(), (Dp.exports = Gm());
var Or = Dp.exports;
const Wm = /* @__PURE__ */ Lp(Or);
var ig = Or;
(Yu.createRoot = ig.createRoot), (Yu.hydrateRoot = ig.hydrateRoot);
var C = Tc();
const qt = /* @__PURE__ */ Lp(C),
  jm = /* @__PURE__ */ Nm(
    {
      __proto__: null,
      default: qt,
    },
    [C],
  );
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Zu = function (e, r) {
  return (
    (Zu =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (n, o) {
          n.__proto__ = o;
        }) ||
      function (n, o) {
        for (var s in o)
          Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
      }),
    Zu(e, r)
  );
};
function et(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError(
      "Class extends value " + String(r) + " is not a constructor or null",
    );
  Zu(e, r);
  function n() {
    this.constructor = e;
  }
  e.prototype =
    r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
}
var $u = function () {
  return (
    ($u =
      Object.assign ||
      function (r) {
        for (var n, o = 1, s = arguments.length; o < s; o++) {
          n = arguments[o];
          for (var l in n)
            Object.prototype.hasOwnProperty.call(n, l) && (r[l] = n[l]);
        }
        return r;
      }),
    $u.apply(this, arguments)
  );
};
function he(e, r, n, o) {
  function s(l) {
    return l instanceof n
      ? l
      : new n(function (c) {
          c(l);
        });
  }
  return new (n || (n = Promise))(function (l, c) {
    function f(w) {
      try {
        g(o.next(w));
      } catch (h) {
        c(h);
      }
    }
    function B(w) {
      try {
        g(o.throw(w));
      } catch (h) {
        c(h);
      }
    }
    function g(w) {
      w.done ? l(w.value) : s(w.value).then(f, B);
    }
    g((o = o.apply(e, [])).next());
  });
}
function Be(e, r) {
  var n = {
      label: 0,
      sent: function () {
        if (l[0] & 1) throw l[1];
        return l[1];
      },
      trys: [],
      ops: [],
    },
    o,
    s,
    l,
    c;
  return (
    (c = { next: f(0), throw: f(1), return: f(2) }),
    typeof Symbol == "function" &&
      (c[Symbol.iterator] = function () {
        return this;
      }),
    c
  );
  function f(g) {
    return function (w) {
      return B([g, w]);
    };
  }
  function B(g) {
    if (o) throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (
          ((o = 1),
          s &&
            (l =
              g[0] & 2
                ? s.return
                : g[0]
                  ? s.throw || ((l = s.return) && l.call(s), 0)
                  : s.next) &&
            !(l = l.call(s, g[1])).done)
        )
          return l;
        switch (((s = 0), l && (g = [g[0] & 2, l.value]), g[0])) {
          case 0:
          case 1:
            l = g;
            break;
          case 4:
            return n.label++, { value: g[1], done: !1 };
          case 5:
            n.label++, (s = g[1]), (g = [0]);
            continue;
          case 7:
            (g = n.ops.pop()), n.trys.pop();
            continue;
          default:
            if (
              ((l = n.trys),
              !(l = l.length > 0 && l[l.length - 1]) &&
                (g[0] === 6 || g[0] === 2))
            ) {
              n = 0;
              continue;
            }
            if (g[0] === 3 && (!l || (g[1] > l[0] && g[1] < l[3]))) {
              n.label = g[1];
              break;
            }
            if (g[0] === 6 && n.label < l[1]) {
              (n.label = l[1]), (l = g);
              break;
            }
            if (l && n.label < l[2]) {
              (n.label = l[2]), n.ops.push(g);
              break;
            }
            l[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        g = r.call(e, n);
      } catch (w) {
        (g = [6, w]), (s = 0);
      } finally {
        o = l = 0;
      }
    if (g[0] & 5) throw g[1];
    return { value: g[0] ? g[1] : void 0, done: !0 };
  }
}
function ss(e, r, n) {
  if (arguments.length === 2)
    for (var o = 0, s = r.length, l; o < s; o++)
      (l || !(o in r)) &&
        (l || (l = Array.prototype.slice.call(r, 0, o)), (l[o] = r[o]));
  return e.concat(l || r);
}
var xt =
    /** @class */
    (function () {
      function e(r, n, o, s) {
        (this.left = r), (this.top = n), (this.width = o), (this.height = s);
      }
      return (
        (e.prototype.add = function (r, n, o, s) {
          return new e(
            this.left + r,
            this.top + n,
            this.width + o,
            this.height + s,
          );
        }),
        (e.fromClientRect = function (r, n) {
          return new e(
            n.left + r.windowBounds.left,
            n.top + r.windowBounds.top,
            n.width,
            n.height,
          );
        }),
        (e.fromDOMRectList = function (r, n) {
          var o = Array.from(n).find(function (s) {
            return s.width !== 0;
          });
          return o
            ? new e(
                o.left + r.windowBounds.left,
                o.top + r.windowBounds.top,
                o.width,
                o.height,
              )
            : e.EMPTY;
        }),
        (e.EMPTY = new e(0, 0, 0, 0)),
        e
      );
    })(),
  aa = function (e, r) {
    return xt.fromClientRect(e, r.getBoundingClientRect());
  },
  Xm = function (e) {
    var r = e.body,
      n = e.documentElement;
    if (!r || !n) throw new Error("Unable to get document size");
    var o = Math.max(
        Math.max(r.scrollWidth, n.scrollWidth),
        Math.max(r.offsetWidth, n.offsetWidth),
        Math.max(r.clientWidth, n.clientWidth),
      ),
      s = Math.max(
        Math.max(r.scrollHeight, n.scrollHeight),
        Math.max(r.offsetHeight, n.offsetHeight),
        Math.max(r.clientHeight, n.clientHeight),
      );
    return new xt(0, 0, o, s);
  },
  la = function (e) {
    for (var r = [], n = 0, o = e.length; n < o; ) {
      var s = e.charCodeAt(n++);
      if (s >= 55296 && s <= 56319 && n < o) {
        var l = e.charCodeAt(n++);
        (l & 64512) === 56320
          ? r.push(((s & 1023) << 10) + (l & 1023) + 65536)
          : (r.push(s), n--);
      } else r.push(s);
    }
    return r;
  },
  XA = function () {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, e);
    var n = e.length;
    if (!n) return "";
    for (var o = [], s = -1, l = ""; ++s < n; ) {
      var c = e[s];
      c <= 65535
        ? o.push(c)
        : ((c -= 65536), o.push((c >> 10) + 55296, (c % 1024) + 56320)),
        (s + 1 === n || o.length > 16384) &&
          ((l += String.fromCharCode.apply(String, o)), (o.length = 0));
    }
    return l;
  },
  sg = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  zm = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var as = 0; as < sg.length; as++) zm[sg.charCodeAt(as)] = as;
var ag = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  So = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ls = 0; ls < ag.length; ls++) So[ag.charCodeAt(ls)] = ls;
var Jm = function (e) {
    var r = e.length * 0.75,
      n = e.length,
      o,
      s = 0,
      l,
      c,
      f,
      B;
    e[e.length - 1] === "=" && (r--, e[e.length - 2] === "=" && r--);
    var g =
        typeof ArrayBuffer < "u" &&
        typeof Uint8Array < "u" &&
        typeof Uint8Array.prototype.slice < "u"
          ? new ArrayBuffer(r)
          : new Array(r),
      w = Array.isArray(g) ? g : new Uint8Array(g);
    for (o = 0; o < n; o += 4)
      (l = So[e.charCodeAt(o)]),
        (c = So[e.charCodeAt(o + 1)]),
        (f = So[e.charCodeAt(o + 2)]),
        (B = So[e.charCodeAt(o + 3)]),
        (w[s++] = (l << 2) | (c >> 4)),
        (w[s++] = ((c & 15) << 4) | (f >> 2)),
        (w[s++] = ((f & 3) << 6) | (B & 63));
    return g;
  },
  Ym = function (e) {
    for (var r = e.length, n = [], o = 0; o < r; o += 2)
      n.push((e[o + 1] << 8) | e[o]);
    return n;
  },
  Zm = function (e) {
    for (var r = e.length, n = [], o = 0; o < r; o += 4)
      n.push((e[o + 3] << 24) | (e[o + 2] << 16) | (e[o + 1] << 8) | e[o]);
    return n;
  },
  Lr = 5,
  Dc = 11,
  mu = 2,
  $m = Dc - Lr,
  kp = 65536 >> Lr,
  qm = 1 << Lr,
  Cu = qm - 1,
  AC = 1024 >> Lr,
  eC = kp + AC,
  tC = eC,
  rC = 32,
  nC = tC + rC,
  oC = 65536 >> Dc,
  iC = 1 << $m,
  sC = iC - 1,
  lg = function (e, r, n) {
    return e.slice
      ? e.slice(r, n)
      : new Uint16Array(Array.prototype.slice.call(e, r, n));
  },
  aC = function (e, r, n) {
    return e.slice
      ? e.slice(r, n)
      : new Uint32Array(Array.prototype.slice.call(e, r, n));
  },
  lC = function (e, r) {
    var n = Jm(e),
      o = Array.isArray(n) ? Zm(n) : new Uint32Array(n),
      s = Array.isArray(n) ? Ym(n) : new Uint16Array(n),
      l = 24,
      c = lg(s, l / 2, o[4] / 2),
      f = o[5] === 2 ? lg(s, (l + o[4]) / 2) : aC(o, Math.ceil((l + o[4]) / 4));
    return new uC(o[0], o[1], o[2], o[3], c, f);
  },
  uC =
    /** @class */
    (function () {
      function e(r, n, o, s, l, c) {
        (this.initialValue = r),
          (this.errorValue = n),
          (this.highStart = o),
          (this.highValueIndex = s),
          (this.index = l),
          (this.data = c);
      }
      return (
        (e.prototype.get = function (r) {
          var n;
          if (r >= 0) {
            if (r < 55296 || (r > 56319 && r <= 65535))
              return (
                (n = this.index[r >> Lr]),
                (n = (n << mu) + (r & Cu)),
                this.data[n]
              );
            if (r <= 65535)
              return (
                (n = this.index[kp + ((r - 55296) >> Lr)]),
                (n = (n << mu) + (r & Cu)),
                this.data[n]
              );
            if (r < this.highStart)
              return (
                (n = nC - oC + (r >> Dc)),
                (n = this.index[n]),
                (n += (r >> Lr) & sC),
                (n = this.index[n]),
                (n = (n << mu) + (r & Cu)),
                this.data[n]
              );
            if (r <= 1114111) return this.data[this.highValueIndex];
          }
          return this.errorValue;
        }),
        e
      );
    })(),
  ug = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  cC = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var us = 0; us < ug.length; us++) cC[ug.charCodeAt(us)] = us;
var fC =
    "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",
  cg = 50,
  dC = 1,
  Rp = 2,
  Op = 3,
  BC = 4,
  gC = 5,
  fg = 7,
  Np = 8,
  dg = 9,
  nr = 10,
  qu = 11,
  Bg = 12,
  Ac = 13,
  pC = 14,
  bo = 15,
  ec = 16,
  cs = 17,
  Uo = 18,
  wC = 19,
  gg = 20,
  tc = 21,
  Fo = 22,
  Qu = 23,
  dn = 24,
  be = 25,
  Lo = 26,
  To = 27,
  Bn = 28,
  hC = 29,
  Sr = 30,
  vC = 31,
  fs = 32,
  ds = 33,
  rc = 34,
  nc = 35,
  oc = 36,
  Vo = 37,
  ic = 38,
  Rs = 39,
  Os = 40,
  yu = 41,
  Mp = 42,
  mC = 43,
  CC = [9001, 65288],
  Pp = "!",
  UA = "×",
  Bs = "÷",
  sc = lC(fC),
  Qt = [Sr, oc],
  ac = [dC, Rp, Op, gC],
  _p = [nr, Np],
  pg = [To, Lo],
  QC = ac.concat(_p),
  wg = [ic, Rs, Os, rc, nc],
  yC = [bo, Ac],
  UC = function (e, r) {
    r === void 0 && (r = "strict");
    var n = [],
      o = [],
      s = [];
    return (
      e.forEach(function (l, c) {
        var f = sc.get(l);
        if (
          (f > cg ? (s.push(!0), (f -= cg)) : s.push(!1),
          ["normal", "auto", "loose"].indexOf(r) !== -1 &&
            [8208, 8211, 12316, 12448].indexOf(l) !== -1)
        )
          return o.push(c), n.push(ec);
        if (f === BC || f === qu) {
          if (c === 0) return o.push(c), n.push(Sr);
          var B = n[c - 1];
          return QC.indexOf(B) === -1
            ? (o.push(o[c - 1]), n.push(B))
            : (o.push(c), n.push(Sr));
        }
        if ((o.push(c), f === vC)) return n.push(r === "strict" ? tc : Vo);
        if (f === Mp || f === hC) return n.push(Sr);
        if (f === mC)
          return (l >= 131072 && l <= 196605) || (l >= 196608 && l <= 262141)
            ? n.push(Vo)
            : n.push(Sr);
        n.push(f);
      }),
      [o, n, s]
    );
  },
  Uu = function (e, r, n, o) {
    var s = o[n];
    if (Array.isArray(e) ? e.indexOf(s) !== -1 : e === s)
      for (var l = n; l <= o.length; ) {
        l++;
        var c = o[l];
        if (c === r) return !0;
        if (c !== nr) break;
      }
    if (s === nr)
      for (var l = n; l > 0; ) {
        l--;
        var f = o[l];
        if (Array.isArray(e) ? e.indexOf(f) !== -1 : e === f)
          for (var B = n; B <= o.length; ) {
            B++;
            var c = o[B];
            if (c === r) return !0;
            if (c !== nr) break;
          }
        if (f !== nr) break;
      }
    return !1;
  },
  hg = function (e, r) {
    for (var n = e; n >= 0; ) {
      var o = r[n];
      if (o === nr) n--;
      else return o;
    }
    return 0;
  },
  FC = function (e, r, n, o, s) {
    if (n[o] === 0) return UA;
    var l = o - 1;
    if (Array.isArray(s) && s[l] === !0) return UA;
    var c = l - 1,
      f = l + 1,
      B = r[l],
      g = c >= 0 ? r[c] : 0,
      w = r[f];
    if (B === Rp && w === Op) return UA;
    if (ac.indexOf(B) !== -1) return Pp;
    if (ac.indexOf(w) !== -1 || _p.indexOf(w) !== -1) return UA;
    if (hg(l, r) === Np) return Bs;
    if (
      sc.get(e[l]) === qu ||
      ((B === fs || B === ds) && sc.get(e[f]) === qu) ||
      B === fg ||
      w === fg ||
      B === dg ||
      ([nr, Ac, bo].indexOf(B) === -1 && w === dg) ||
      [cs, Uo, wC, dn, Bn].indexOf(w) !== -1 ||
      hg(l, r) === Fo ||
      Uu(Qu, Fo, l, r) ||
      Uu([cs, Uo], tc, l, r) ||
      Uu(Bg, Bg, l, r)
    )
      return UA;
    if (B === nr) return Bs;
    if (B === Qu || w === Qu) return UA;
    if (w === ec || B === ec) return Bs;
    if (
      [Ac, bo, tc].indexOf(w) !== -1 ||
      B === pC ||
      (g === oc && yC.indexOf(B) !== -1) ||
      (B === Bn && w === oc) ||
      w === gg ||
      (Qt.indexOf(w) !== -1 && B === be) ||
      (Qt.indexOf(B) !== -1 && w === be) ||
      (B === To && [Vo, fs, ds].indexOf(w) !== -1) ||
      ([Vo, fs, ds].indexOf(B) !== -1 && w === Lo) ||
      (Qt.indexOf(B) !== -1 && pg.indexOf(w) !== -1) ||
      (pg.indexOf(B) !== -1 && Qt.indexOf(w) !== -1) || // (PR | PO) × ( OP | HY )? NU
      ([To, Lo].indexOf(B) !== -1 &&
        (w === be || ([Fo, bo].indexOf(w) !== -1 && r[f + 1] === be))) || // ( OP | HY ) × NU
      ([Fo, bo].indexOf(B) !== -1 && w === be) || // NU ×	(NU | SY | IS)
      (B === be && [be, Bn, dn].indexOf(w) !== -1)
    )
      return UA;
    if ([be, Bn, dn, cs, Uo].indexOf(w) !== -1)
      for (var h = l; h >= 0; ) {
        var v = r[h];
        if (v === be) return UA;
        if ([Bn, dn].indexOf(v) !== -1) h--;
        else break;
      }
    if ([To, Lo].indexOf(w) !== -1)
      for (var h = [cs, Uo].indexOf(B) !== -1 ? c : l; h >= 0; ) {
        var v = r[h];
        if (v === be) return UA;
        if ([Bn, dn].indexOf(v) !== -1) h--;
        else break;
      }
    if (
      (ic === B && [ic, Rs, rc, nc].indexOf(w) !== -1) ||
      ([Rs, rc].indexOf(B) !== -1 && [Rs, Os].indexOf(w) !== -1) ||
      ([Os, nc].indexOf(B) !== -1 && w === Os) ||
      (wg.indexOf(B) !== -1 && [gg, Lo].indexOf(w) !== -1) ||
      (wg.indexOf(w) !== -1 && B === To) ||
      (Qt.indexOf(B) !== -1 && Qt.indexOf(w) !== -1) ||
      (B === dn && Qt.indexOf(w) !== -1) ||
      (Qt.concat(be).indexOf(B) !== -1 &&
        w === Fo &&
        CC.indexOf(e[f]) === -1) ||
      (Qt.concat(be).indexOf(w) !== -1 && B === Uo)
    )
      return UA;
    if (B === yu && w === yu) {
      for (var U = n[l], Q = 1; U > 0 && (U--, r[U] === yu); ) Q++;
      if (Q % 2 !== 0) return UA;
    }
    return B === fs && w === ds ? UA : Bs;
  },
  EC = function (e, r) {
    r || (r = { lineBreak: "normal", wordBreak: "normal" });
    var n = UC(e, r.lineBreak),
      o = n[0],
      s = n[1],
      l = n[2];
    (r.wordBreak === "break-all" || r.wordBreak === "break-word") &&
      (s = s.map(function (f) {
        return [be, Sr, Mp].indexOf(f) !== -1 ? Vo : f;
      }));
    var c =
      r.wordBreak === "keep-all"
        ? l.map(function (f, B) {
            return f && e[B] >= 19968 && e[B] <= 40959;
          })
        : void 0;
    return [o, s, c];
  },
  xC =
    /** @class */
    (function () {
      function e(r, n, o, s) {
        (this.codePoints = r),
          (this.required = n === Pp),
          (this.start = o),
          (this.end = s);
      }
      return (
        (e.prototype.slice = function () {
          return XA.apply(void 0, this.codePoints.slice(this.start, this.end));
        }),
        e
      );
    })(),
  IC = function (e, r) {
    var n = la(e),
      o = EC(n, r),
      s = o[0],
      l = o[1],
      c = o[2],
      f = n.length,
      B = 0,
      g = 0;
    return {
      next: function () {
        if (g >= f) return { done: !0, value: null };
        for (var w = UA; g < f && (w = FC(n, l, s, ++g, c)) === UA; );
        if (w !== UA || g === f) {
          var h = new xC(n, w, B, g);
          return (B = g), { value: h, done: !1 };
        }
        return { done: !0, value: null };
      },
    };
  },
  HC = 1,
  SC = 2,
  zo = 4,
  vg = 8,
  js = 10,
  mg = 47,
  Oo = 92,
  bC = 9,
  LC = 32,
  gs = 34,
  Eo = 61,
  TC = 35,
  DC = 36,
  KC = 37,
  ps = 39,
  ws = 40,
  xo = 41,
  kC = 95,
  Ee = 45,
  RC = 33,
  OC = 60,
  NC = 62,
  MC = 64,
  PC = 91,
  _C = 93,
  VC = 61,
  GC = 123,
  hs = 63,
  WC = 125,
  Cg = 124,
  jC = 126,
  XC = 128,
  Qg = 65533,
  Fu = 42,
  br = 43,
  zC = 44,
  JC = 58,
  YC = 59,
  Go = 46,
  ZC = 0,
  $C = 8,
  qC = 11,
  AQ = 14,
  eQ = 31,
  tQ = 127,
  at = -1,
  Vp = 48,
  Gp = 97,
  Wp = 101,
  rQ = 102,
  nQ = 117,
  oQ = 122,
  jp = 65,
  Xp = 69,
  zp = 70,
  iQ = 85,
  sQ = 90,
  ge = function (e) {
    return e >= Vp && e <= 57;
  },
  aQ = function (e) {
    return e >= 55296 && e <= 57343;
  },
  gn = function (e) {
    return ge(e) || (e >= jp && e <= zp) || (e >= Gp && e <= rQ);
  },
  lQ = function (e) {
    return e >= Gp && e <= oQ;
  },
  uQ = function (e) {
    return e >= jp && e <= sQ;
  },
  cQ = function (e) {
    return lQ(e) || uQ(e);
  },
  fQ = function (e) {
    return e >= XC;
  },
  vs = function (e) {
    return e === js || e === bC || e === LC;
  },
  Xs = function (e) {
    return cQ(e) || fQ(e) || e === kC;
  },
  yg = function (e) {
    return Xs(e) || ge(e) || e === Ee;
  },
  dQ = function (e) {
    return (e >= ZC && e <= $C) || e === qC || (e >= AQ && e <= eQ) || e === tQ;
  },
  rr = function (e, r) {
    return e !== Oo ? !1 : r !== js;
  },
  ms = function (e, r, n) {
    return e === Ee ? Xs(r) || rr(r, n) : Xs(e) ? !0 : !!(e === Oo && rr(e, r));
  },
  Eu = function (e, r, n) {
    return e === br || e === Ee
      ? ge(r)
        ? !0
        : r === Go && ge(n)
      : ge(e === Go ? r : e);
  },
  BQ = function (e) {
    var r = 0,
      n = 1;
    (e[r] === br || e[r] === Ee) && (e[r] === Ee && (n = -1), r++);
    for (var o = []; ge(e[r]); ) o.push(e[r++]);
    var s = o.length ? parseInt(XA.apply(void 0, o), 10) : 0;
    e[r] === Go && r++;
    for (var l = []; ge(e[r]); ) l.push(e[r++]);
    var c = l.length,
      f = c ? parseInt(XA.apply(void 0, l), 10) : 0;
    (e[r] === Xp || e[r] === Wp) && r++;
    var B = 1;
    (e[r] === br || e[r] === Ee) && (e[r] === Ee && (B = -1), r++);
    for (var g = []; ge(e[r]); ) g.push(e[r++]);
    var w = g.length ? parseInt(XA.apply(void 0, g), 10) : 0;
    return n * (s + f * Math.pow(10, -c)) * Math.pow(10, B * w);
  },
  gQ = {
    type: 2,
    /* LEFT_PARENTHESIS_TOKEN */
  },
  pQ = {
    type: 3,
    /* RIGHT_PARENTHESIS_TOKEN */
  },
  wQ = {
    type: 4,
    /* COMMA_TOKEN */
  },
  hQ = {
    type: 13,
    /* SUFFIX_MATCH_TOKEN */
  },
  vQ = {
    type: 8,
    /* PREFIX_MATCH_TOKEN */
  },
  mQ = {
    type: 21,
    /* COLUMN_TOKEN */
  },
  CQ = {
    type: 9,
    /* DASH_MATCH_TOKEN */
  },
  QQ = {
    type: 10,
    /* INCLUDE_MATCH_TOKEN */
  },
  yQ = {
    type: 11,
    /* LEFT_CURLY_BRACKET_TOKEN */
  },
  UQ = {
    type: 12,
    /* RIGHT_CURLY_BRACKET_TOKEN */
  },
  FQ = {
    type: 14,
    /* SUBSTRING_MATCH_TOKEN */
  },
  Cs = {
    type: 23,
    /* BAD_URL_TOKEN */
  },
  EQ = {
    type: 1,
    /* BAD_STRING_TOKEN */
  },
  xQ = {
    type: 25,
    /* CDO_TOKEN */
  },
  IQ = {
    type: 24,
    /* CDC_TOKEN */
  },
  HQ = {
    type: 26,
    /* COLON_TOKEN */
  },
  SQ = {
    type: 27,
    /* SEMICOLON_TOKEN */
  },
  bQ = {
    type: 28,
    /* LEFT_SQUARE_BRACKET_TOKEN */
  },
  LQ = {
    type: 29,
    /* RIGHT_SQUARE_BRACKET_TOKEN */
  },
  TQ = {
    type: 31,
    /* WHITESPACE_TOKEN */
  },
  lc = {
    type: 32,
    /* EOF_TOKEN */
  },
  Jp =
    /** @class */
    (function () {
      function e() {
        this._value = [];
      }
      return (
        (e.prototype.write = function (r) {
          this._value = this._value.concat(la(r));
        }),
        (e.prototype.read = function () {
          for (var r = [], n = this.consumeToken(); n !== lc; )
            r.push(n), (n = this.consumeToken());
          return r;
        }),
        (e.prototype.consumeToken = function () {
          var r = this.consumeCodePoint();
          switch (r) {
            case gs:
              return this.consumeStringToken(gs);
            case TC:
              var n = this.peekCodePoint(0),
                o = this.peekCodePoint(1),
                s = this.peekCodePoint(2);
              if (yg(n) || rr(o, s)) {
                var l = ms(n, o, s) ? SC : HC,
                  c = this.consumeName();
                return { type: 5, value: c, flags: l };
              }
              break;
            case DC:
              if (this.peekCodePoint(0) === Eo)
                return this.consumeCodePoint(), hQ;
              break;
            case ps:
              return this.consumeStringToken(ps);
            case ws:
              return gQ;
            case xo:
              return pQ;
            case Fu:
              if (this.peekCodePoint(0) === Eo)
                return this.consumeCodePoint(), FQ;
              break;
            case br:
              if (Eu(r, this.peekCodePoint(0), this.peekCodePoint(1)))
                return this.reconsumeCodePoint(r), this.consumeNumericToken();
              break;
            case zC:
              return wQ;
            case Ee:
              var f = r,
                B = this.peekCodePoint(0),
                g = this.peekCodePoint(1);
              if (Eu(f, B, g))
                return this.reconsumeCodePoint(r), this.consumeNumericToken();
              if (ms(f, B, g))
                return this.reconsumeCodePoint(r), this.consumeIdentLikeToken();
              if (B === Ee && g === NC)
                return this.consumeCodePoint(), this.consumeCodePoint(), IQ;
              break;
            case Go:
              if (Eu(r, this.peekCodePoint(0), this.peekCodePoint(1)))
                return this.reconsumeCodePoint(r), this.consumeNumericToken();
              break;
            case mg:
              if (this.peekCodePoint(0) === Fu)
                for (this.consumeCodePoint(); ; ) {
                  var w = this.consumeCodePoint();
                  if (w === Fu && ((w = this.consumeCodePoint()), w === mg))
                    return this.consumeToken();
                  if (w === at) return this.consumeToken();
                }
              break;
            case JC:
              return HQ;
            case YC:
              return SQ;
            case OC:
              if (
                this.peekCodePoint(0) === RC &&
                this.peekCodePoint(1) === Ee &&
                this.peekCodePoint(2) === Ee
              )
                return this.consumeCodePoint(), this.consumeCodePoint(), xQ;
              break;
            case MC:
              var h = this.peekCodePoint(0),
                v = this.peekCodePoint(1),
                U = this.peekCodePoint(2);
              if (ms(h, v, U)) {
                var c = this.consumeName();
                return { type: 7, value: c };
              }
              break;
            case PC:
              return bQ;
            case Oo:
              if (rr(r, this.peekCodePoint(0)))
                return this.reconsumeCodePoint(r), this.consumeIdentLikeToken();
              break;
            case _C:
              return LQ;
            case VC:
              if (this.peekCodePoint(0) === Eo)
                return this.consumeCodePoint(), vQ;
              break;
            case GC:
              return yQ;
            case WC:
              return UQ;
            case nQ:
            case iQ:
              var Q = this.peekCodePoint(0),
                m = this.peekCodePoint(1);
              return (
                Q === br &&
                  (gn(m) || m === hs) &&
                  (this.consumeCodePoint(), this.consumeUnicodeRangeToken()),
                this.reconsumeCodePoint(r),
                this.consumeIdentLikeToken()
              );
            case Cg:
              if (this.peekCodePoint(0) === Eo)
                return this.consumeCodePoint(), CQ;
              if (this.peekCodePoint(0) === Cg)
                return this.consumeCodePoint(), mQ;
              break;
            case jC:
              if (this.peekCodePoint(0) === Eo)
                return this.consumeCodePoint(), QQ;
              break;
            case at:
              return lc;
          }
          return vs(r)
            ? (this.consumeWhiteSpace(), TQ)
            : ge(r)
              ? (this.reconsumeCodePoint(r), this.consumeNumericToken())
              : Xs(r)
                ? (this.reconsumeCodePoint(r), this.consumeIdentLikeToken())
                : { type: 6, value: XA(r) };
        }),
        (e.prototype.consumeCodePoint = function () {
          var r = this._value.shift();
          return typeof r > "u" ? -1 : r;
        }),
        (e.prototype.reconsumeCodePoint = function (r) {
          this._value.unshift(r);
        }),
        (e.prototype.peekCodePoint = function (r) {
          return r >= this._value.length ? -1 : this._value[r];
        }),
        (e.prototype.consumeUnicodeRangeToken = function () {
          for (var r = [], n = this.consumeCodePoint(); gn(n) && r.length < 6; )
            r.push(n), (n = this.consumeCodePoint());
          for (var o = !1; n === hs && r.length < 6; )
            r.push(n), (n = this.consumeCodePoint()), (o = !0);
          if (o) {
            var s = parseInt(
                XA.apply(
                  void 0,
                  r.map(function (B) {
                    return B === hs ? Vp : B;
                  }),
                ),
                16,
              ),
              l = parseInt(
                XA.apply(
                  void 0,
                  r.map(function (B) {
                    return B === hs ? zp : B;
                  }),
                ),
                16,
              );
            return { type: 30, start: s, end: l };
          }
          var c = parseInt(XA.apply(void 0, r), 16);
          if (this.peekCodePoint(0) === Ee && gn(this.peekCodePoint(1))) {
            this.consumeCodePoint(), (n = this.consumeCodePoint());
            for (var f = []; gn(n) && f.length < 6; )
              f.push(n), (n = this.consumeCodePoint());
            var l = parseInt(XA.apply(void 0, f), 16);
            return { type: 30, start: c, end: l };
          } else return { type: 30, start: c, end: c };
        }),
        (e.prototype.consumeIdentLikeToken = function () {
          var r = this.consumeName();
          return r.toLowerCase() === "url" && this.peekCodePoint(0) === ws
            ? (this.consumeCodePoint(), this.consumeUrlToken())
            : this.peekCodePoint(0) === ws
              ? (this.consumeCodePoint(), { type: 19, value: r })
              : { type: 20, value: r };
        }),
        (e.prototype.consumeUrlToken = function () {
          var r = [];
          if ((this.consumeWhiteSpace(), this.peekCodePoint(0) === at))
            return { type: 22, value: "" };
          var n = this.peekCodePoint(0);
          if (n === ps || n === gs) {
            var o = this.consumeStringToken(this.consumeCodePoint());
            return o.type === 0 &&
              (this.consumeWhiteSpace(),
              this.peekCodePoint(0) === at || this.peekCodePoint(0) === xo)
              ? (this.consumeCodePoint(), { type: 22, value: o.value })
              : (this.consumeBadUrlRemnants(), Cs);
          }
          for (;;) {
            var s = this.consumeCodePoint();
            if (s === at || s === xo)
              return { type: 22, value: XA.apply(void 0, r) };
            if (vs(s))
              return (
                this.consumeWhiteSpace(),
                this.peekCodePoint(0) === at || this.peekCodePoint(0) === xo
                  ? (this.consumeCodePoint(),
                    { type: 22, value: XA.apply(void 0, r) })
                  : (this.consumeBadUrlRemnants(), Cs)
              );
            if (s === gs || s === ps || s === ws || dQ(s))
              return this.consumeBadUrlRemnants(), Cs;
            if (s === Oo)
              if (rr(s, this.peekCodePoint(0)))
                r.push(this.consumeEscapedCodePoint());
              else return this.consumeBadUrlRemnants(), Cs;
            else r.push(s);
          }
        }),
        (e.prototype.consumeWhiteSpace = function () {
          for (; vs(this.peekCodePoint(0)); ) this.consumeCodePoint();
        }),
        (e.prototype.consumeBadUrlRemnants = function () {
          for (;;) {
            var r = this.consumeCodePoint();
            if (r === xo || r === at) return;
            rr(r, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
          }
        }),
        (e.prototype.consumeStringSlice = function (r) {
          for (var n = 5e4, o = ""; r > 0; ) {
            var s = Math.min(n, r);
            (o += XA.apply(void 0, this._value.splice(0, s))), (r -= s);
          }
          return this._value.shift(), o;
        }),
        (e.prototype.consumeStringToken = function (r) {
          var n = "",
            o = 0;
          do {
            var s = this._value[o];
            if (s === at || s === void 0 || s === r)
              return (n += this.consumeStringSlice(o)), { type: 0, value: n };
            if (s === js) return this._value.splice(0, o), EQ;
            if (s === Oo) {
              var l = this._value[o + 1];
              l !== at &&
                l !== void 0 &&
                (l === js
                  ? ((n += this.consumeStringSlice(o)),
                    (o = -1),
                    this._value.shift())
                  : rr(s, l) &&
                    ((n += this.consumeStringSlice(o)),
                    (n += XA(this.consumeEscapedCodePoint())),
                    (o = -1)));
            }
            o++;
          } while (!0);
        }),
        (e.prototype.consumeNumber = function () {
          var r = [],
            n = zo,
            o = this.peekCodePoint(0);
          for (
            (o === br || o === Ee) && r.push(this.consumeCodePoint());
            ge(this.peekCodePoint(0));

          )
            r.push(this.consumeCodePoint());
          o = this.peekCodePoint(0);
          var s = this.peekCodePoint(1);
          if (o === Go && ge(s))
            for (
              r.push(this.consumeCodePoint(), this.consumeCodePoint()), n = vg;
              ge(this.peekCodePoint(0));

            )
              r.push(this.consumeCodePoint());
          (o = this.peekCodePoint(0)), (s = this.peekCodePoint(1));
          var l = this.peekCodePoint(2);
          if (
            (o === Xp || o === Wp) &&
            (((s === br || s === Ee) && ge(l)) || ge(s))
          )
            for (
              r.push(this.consumeCodePoint(), this.consumeCodePoint()), n = vg;
              ge(this.peekCodePoint(0));

            )
              r.push(this.consumeCodePoint());
          return [BQ(r), n];
        }),
        (e.prototype.consumeNumericToken = function () {
          var r = this.consumeNumber(),
            n = r[0],
            o = r[1],
            s = this.peekCodePoint(0),
            l = this.peekCodePoint(1),
            c = this.peekCodePoint(2);
          if (ms(s, l, c)) {
            var f = this.consumeName();
            return { type: 15, number: n, flags: o, unit: f };
          }
          return s === KC
            ? (this.consumeCodePoint(), { type: 16, number: n, flags: o })
            : { type: 17, number: n, flags: o };
        }),
        (e.prototype.consumeEscapedCodePoint = function () {
          var r = this.consumeCodePoint();
          if (gn(r)) {
            for (var n = XA(r); gn(this.peekCodePoint(0)) && n.length < 6; )
              n += XA(this.consumeCodePoint());
            vs(this.peekCodePoint(0)) && this.consumeCodePoint();
            var o = parseInt(n, 16);
            return o === 0 || aQ(o) || o > 1114111 ? Qg : o;
          }
          return r === at ? Qg : r;
        }),
        (e.prototype.consumeName = function () {
          for (var r = ""; ; ) {
            var n = this.consumeCodePoint();
            if (yg(n)) r += XA(n);
            else if (rr(n, this.peekCodePoint(0)))
              r += XA(this.consumeEscapedCodePoint());
            else return this.reconsumeCodePoint(n), r;
          }
        }),
        e
      );
    })(),
  Yp =
    /** @class */
    (function () {
      function e(r) {
        this._tokens = r;
      }
      return (
        (e.create = function (r) {
          var n = new Jp();
          return n.write(r), new e(n.read());
        }),
        (e.parseValue = function (r) {
          return e.create(r).parseComponentValue();
        }),
        (e.parseValues = function (r) {
          return e.create(r).parseComponentValues();
        }),
        (e.prototype.parseComponentValue = function () {
          for (var r = this.consumeToken(); r.type === 31; )
            r = this.consumeToken();
          if (r.type === 32)
            throw new SyntaxError(
              "Error parsing CSS component value, unexpected EOF",
            );
          this.reconsumeToken(r);
          var n = this.consumeComponentValue();
          do r = this.consumeToken();
          while (r.type === 31);
          if (r.type === 32) return n;
          throw new SyntaxError(
            "Error parsing CSS component value, multiple values found when expecting only one",
          );
        }),
        (e.prototype.parseComponentValues = function () {
          for (var r = []; ; ) {
            var n = this.consumeComponentValue();
            if (n.type === 32) return r;
            r.push(n), r.push();
          }
        }),
        (e.prototype.consumeComponentValue = function () {
          var r = this.consumeToken();
          switch (r.type) {
            case 11:
            case 28:
            case 2:
              return this.consumeSimpleBlock(r.type);
            case 19:
              return this.consumeFunction(r);
          }
          return r;
        }),
        (e.prototype.consumeSimpleBlock = function (r) {
          for (var n = { type: r, values: [] }, o = this.consumeToken(); ; ) {
            if (o.type === 32 || KQ(o, r)) return n;
            this.reconsumeToken(o),
              n.values.push(this.consumeComponentValue()),
              (o = this.consumeToken());
          }
        }),
        (e.prototype.consumeFunction = function (r) {
          for (
            var n = {
              name: r.value,
              values: [],
              type: 18,
              /* FUNCTION */
            };
            ;

          ) {
            var o = this.consumeToken();
            if (o.type === 32 || o.type === 3) return n;
            this.reconsumeToken(o), n.values.push(this.consumeComponentValue());
          }
        }),
        (e.prototype.consumeToken = function () {
          var r = this._tokens.shift();
          return typeof r > "u" ? lc : r;
        }),
        (e.prototype.reconsumeToken = function (r) {
          this._tokens.unshift(r);
        }),
        e
      );
    })(),
  Jo = function (e) {
    return e.type === 15;
  },
  Ln = function (e) {
    return e.type === 17;
  },
  SA = function (e) {
    return e.type === 20;
  },
  DQ = function (e) {
    return e.type === 0;
  },
  uc = function (e, r) {
    return SA(e) && e.value === r;
  },
  Zp = function (e) {
    return e.type !== 31;
  },
  Sn = function (e) {
    return e.type !== 31 && e.type !== 4;
  },
  ft = function (e) {
    var r = [],
      n = [];
    return (
      e.forEach(function (o) {
        if (o.type === 4) {
          if (n.length === 0)
            throw new Error("Error parsing function args, zero tokens for arg");
          r.push(n), (n = []);
          return;
        }
        o.type !== 31 && n.push(o);
      }),
      n.length && r.push(n),
      r
    );
  },
  KQ = function (e, r) {
    return (r === 11 && e.type === 12) || (r === 28 && e.type === 29)
      ? !0
      : r === 2 && e.type === 3;
  },
  lr = function (e) {
    return e.type === 17 || e.type === 15;
  },
  YA = function (e) {
    return e.type === 16 || lr(e);
  },
  $p = function (e) {
    return e.length > 1 ? [e[0], e[1]] : [e[0]];
  },
  le = {
    type: 17,
    number: 0,
    flags: zo,
  },
  Kc = {
    type: 16,
    number: 50,
    flags: zo,
  },
  or = {
    type: 16,
    number: 100,
    flags: zo,
  },
  Do = function (e, r, n) {
    var o = e[0],
      s = e[1];
    return [LA(o, r), LA(typeof s < "u" ? s : o, n)];
  },
  LA = function (e, r) {
    if (e.type === 16) return (e.number / 100) * r;
    if (Jo(e))
      switch (e.unit) {
        case "rem":
        case "em":
          return 16 * e.number;
        case "px":
        default:
          return e.number;
      }
    return e.number;
  },
  qp = "deg",
  Aw = "grad",
  ew = "rad",
  tw = "turn",
  ua = {
    name: "angle",
    parse: function (e, r) {
      if (r.type === 15)
        switch (r.unit) {
          case qp:
            return (Math.PI * r.number) / 180;
          case Aw:
            return (Math.PI / 200) * r.number;
          case ew:
            return r.number;
          case tw:
            return Math.PI * 2 * r.number;
        }
      throw new Error("Unsupported angle type");
    },
  },
  rw = function (e) {
    return (
      e.type === 15 &&
      (e.unit === qp || e.unit === Aw || e.unit === ew || e.unit === tw)
    );
  },
  nw = function (e) {
    var r = e
      .filter(SA)
      .map(function (n) {
        return n.value;
      })
      .join(" ");
    switch (r) {
      case "to bottom right":
      case "to right bottom":
      case "left top":
      case "top left":
        return [le, le];
      case "to top":
      case "bottom":
        return _e(0);
      case "to bottom left":
      case "to left bottom":
      case "right top":
      case "top right":
        return [le, or];
      case "to right":
      case "left":
        return _e(90);
      case "to top left":
      case "to left top":
      case "right bottom":
      case "bottom right":
        return [or, or];
      case "to bottom":
      case "top":
        return _e(180);
      case "to top right":
      case "to right top":
      case "left bottom":
      case "bottom left":
        return [or, le];
      case "to left":
      case "right":
        return _e(270);
    }
    return 0;
  },
  _e = function (e) {
    return (Math.PI * e) / 180;
  },
  sr = {
    name: "color",
    parse: function (e, r) {
      if (r.type === 18) {
        var n = kQ[r.name];
        if (typeof n > "u")
          throw new Error(
            'Attempting to parse an unsupported color function "' +
              r.name +
              '"',
          );
        return n(e, r.values);
      }
      if (r.type === 5) {
        if (r.value.length === 3) {
          var o = r.value.substring(0, 1),
            s = r.value.substring(1, 2),
            l = r.value.substring(2, 3);
          return ir(
            parseInt(o + o, 16),
            parseInt(s + s, 16),
            parseInt(l + l, 16),
            1,
          );
        }
        if (r.value.length === 4) {
          var o = r.value.substring(0, 1),
            s = r.value.substring(1, 2),
            l = r.value.substring(2, 3),
            c = r.value.substring(3, 4);
          return ir(
            parseInt(o + o, 16),
            parseInt(s + s, 16),
            parseInt(l + l, 16),
            parseInt(c + c, 16) / 255,
          );
        }
        if (r.value.length === 6) {
          var o = r.value.substring(0, 2),
            s = r.value.substring(2, 4),
            l = r.value.substring(4, 6);
          return ir(parseInt(o, 16), parseInt(s, 16), parseInt(l, 16), 1);
        }
        if (r.value.length === 8) {
          var o = r.value.substring(0, 2),
            s = r.value.substring(2, 4),
            l = r.value.substring(4, 6),
            c = r.value.substring(6, 8);
          return ir(
            parseInt(o, 16),
            parseInt(s, 16),
            parseInt(l, 16),
            parseInt(c, 16) / 255,
          );
        }
      }
      if (r.type === 20) {
        var f = Et[r.value.toUpperCase()];
        if (typeof f < "u") return f;
      }
      return Et.TRANSPARENT;
    },
  },
  ar = function (e) {
    return (255 & e) === 0;
  },
  ne = function (e) {
    var r = 255 & e,
      n = 255 & (e >> 8),
      o = 255 & (e >> 16),
      s = 255 & (e >> 24);
    return r < 255
      ? "rgba(" + s + "," + o + "," + n + "," + r / 255 + ")"
      : "rgb(" + s + "," + o + "," + n + ")";
  },
  ir = function (e, r, n, o) {
    return (
      ((e << 24) | (r << 16) | (n << 8) | (Math.round(o * 255) << 0)) >>> 0
    );
  },
  Ug = function (e, r) {
    if (e.type === 17) return e.number;
    if (e.type === 16) {
      var n = r === 3 ? 1 : 255;
      return r === 3 ? (e.number / 100) * n : Math.round((e.number / 100) * n);
    }
    return 0;
  },
  Fg = function (e, r) {
    var n = r.filter(Sn);
    if (n.length === 3) {
      var o = n.map(Ug),
        s = o[0],
        l = o[1],
        c = o[2];
      return ir(s, l, c, 1);
    }
    if (n.length === 4) {
      var f = n.map(Ug),
        s = f[0],
        l = f[1],
        c = f[2],
        B = f[3];
      return ir(s, l, c, B);
    }
    return 0;
  };
function xu(e, r, n) {
  return (
    n < 0 && (n += 1),
    n >= 1 && (n -= 1),
    n < 1 / 6
      ? (r - e) * n * 6 + e
      : n < 1 / 2
        ? r
        : n < 2 / 3
          ? (r - e) * 6 * (2 / 3 - n) + e
          : e
  );
}
var Eg = function (e, r) {
    var n = r.filter(Sn),
      o = n[0],
      s = n[1],
      l = n[2],
      c = n[3],
      f = (o.type === 17 ? _e(o.number) : ua.parse(e, o)) / (Math.PI * 2),
      B = YA(s) ? s.number / 100 : 0,
      g = YA(l) ? l.number / 100 : 0,
      w = typeof c < "u" && YA(c) ? LA(c, 1) : 1;
    if (B === 0) return ir(g * 255, g * 255, g * 255, 1);
    var h = g <= 0.5 ? g * (B + 1) : g + B - g * B,
      v = g * 2 - h,
      U = xu(v, h, f + 1 / 3),
      Q = xu(v, h, f),
      m = xu(v, h, f - 1 / 3);
    return ir(U * 255, Q * 255, m * 255, w);
  },
  kQ = {
    hsl: Eg,
    hsla: Eg,
    rgb: Fg,
    rgba: Fg,
  },
  No = function (e, r) {
    return sr.parse(e, Yp.create(r).parseComponentValue());
  },
  Et = {
    ALICEBLUE: 4042850303,
    ANTIQUEWHITE: 4209760255,
    AQUA: 16777215,
    AQUAMARINE: 2147472639,
    AZURE: 4043309055,
    BEIGE: 4126530815,
    BISQUE: 4293182719,
    BLACK: 255,
    BLANCHEDALMOND: 4293643775,
    BLUE: 65535,
    BLUEVIOLET: 2318131967,
    BROWN: 2771004159,
    BURLYWOOD: 3736635391,
    CADETBLUE: 1604231423,
    CHARTREUSE: 2147418367,
    CHOCOLATE: 3530104575,
    CORAL: 4286533887,
    CORNFLOWERBLUE: 1687547391,
    CORNSILK: 4294499583,
    CRIMSON: 3692313855,
    CYAN: 16777215,
    DARKBLUE: 35839,
    DARKCYAN: 9145343,
    DARKGOLDENROD: 3095837695,
    DARKGRAY: 2846468607,
    DARKGREEN: 6553855,
    DARKGREY: 2846468607,
    DARKKHAKI: 3182914559,
    DARKMAGENTA: 2332068863,
    DARKOLIVEGREEN: 1433087999,
    DARKORANGE: 4287365375,
    DARKORCHID: 2570243327,
    DARKRED: 2332033279,
    DARKSALMON: 3918953215,
    DARKSEAGREEN: 2411499519,
    DARKSLATEBLUE: 1211993087,
    DARKSLATEGRAY: 793726975,
    DARKSLATEGREY: 793726975,
    DARKTURQUOISE: 13554175,
    DARKVIOLET: 2483082239,
    DEEPPINK: 4279538687,
    DEEPSKYBLUE: 12582911,
    DIMGRAY: 1768516095,
    DIMGREY: 1768516095,
    DODGERBLUE: 512819199,
    FIREBRICK: 2988581631,
    FLORALWHITE: 4294635775,
    FORESTGREEN: 579543807,
    FUCHSIA: 4278255615,
    GAINSBORO: 3705462015,
    GHOSTWHITE: 4177068031,
    GOLD: 4292280575,
    GOLDENROD: 3668254975,
    GRAY: 2155905279,
    GREEN: 8388863,
    GREENYELLOW: 2919182335,
    GREY: 2155905279,
    HONEYDEW: 4043305215,
    HOTPINK: 4285117695,
    INDIANRED: 3445382399,
    INDIGO: 1258324735,
    IVORY: 4294963455,
    KHAKI: 4041641215,
    LAVENDER: 3873897215,
    LAVENDERBLUSH: 4293981695,
    LAWNGREEN: 2096890111,
    LEMONCHIFFON: 4294626815,
    LIGHTBLUE: 2916673279,
    LIGHTCORAL: 4034953471,
    LIGHTCYAN: 3774873599,
    LIGHTGOLDENRODYELLOW: 4210742015,
    LIGHTGRAY: 3553874943,
    LIGHTGREEN: 2431553791,
    LIGHTGREY: 3553874943,
    LIGHTPINK: 4290167295,
    LIGHTSALMON: 4288707327,
    LIGHTSEAGREEN: 548580095,
    LIGHTSKYBLUE: 2278488831,
    LIGHTSLATEGRAY: 2005441023,
    LIGHTSLATEGREY: 2005441023,
    LIGHTSTEELBLUE: 2965692159,
    LIGHTYELLOW: 4294959359,
    LIME: 16711935,
    LIMEGREEN: 852308735,
    LINEN: 4210091775,
    MAGENTA: 4278255615,
    MAROON: 2147483903,
    MEDIUMAQUAMARINE: 1724754687,
    MEDIUMBLUE: 52735,
    MEDIUMORCHID: 3126187007,
    MEDIUMPURPLE: 2473647103,
    MEDIUMSEAGREEN: 1018393087,
    MEDIUMSLATEBLUE: 2070474495,
    MEDIUMSPRINGGREEN: 16423679,
    MEDIUMTURQUOISE: 1221709055,
    MEDIUMVIOLETRED: 3340076543,
    MIDNIGHTBLUE: 421097727,
    MINTCREAM: 4127193855,
    MISTYROSE: 4293190143,
    MOCCASIN: 4293178879,
    NAVAJOWHITE: 4292783615,
    NAVY: 33023,
    OLDLACE: 4260751103,
    OLIVE: 2155872511,
    OLIVEDRAB: 1804477439,
    ORANGE: 4289003775,
    ORANGERED: 4282712319,
    ORCHID: 3664828159,
    PALEGOLDENROD: 4008225535,
    PALEGREEN: 2566625535,
    PALETURQUOISE: 2951671551,
    PALEVIOLETRED: 3681588223,
    PAPAYAWHIP: 4293907967,
    PEACHPUFF: 4292524543,
    PERU: 3448061951,
    PINK: 4290825215,
    PLUM: 3718307327,
    POWDERBLUE: 2967529215,
    PURPLE: 2147516671,
    REBECCAPURPLE: 1714657791,
    RED: 4278190335,
    ROSYBROWN: 3163525119,
    ROYALBLUE: 1097458175,
    SADDLEBROWN: 2336560127,
    SALMON: 4202722047,
    SANDYBROWN: 4104413439,
    SEAGREEN: 780883967,
    SEASHELL: 4294307583,
    SIENNA: 2689740287,
    SILVER: 3233857791,
    SKYBLUE: 2278484991,
    SLATEBLUE: 1784335871,
    SLATEGRAY: 1887473919,
    SLATEGREY: 1887473919,
    SNOW: 4294638335,
    SPRINGGREEN: 16744447,
    STEELBLUE: 1182971135,
    TAN: 3535047935,
    TEAL: 8421631,
    THISTLE: 3636451583,
    TOMATO: 4284696575,
    TRANSPARENT: 0,
    TURQUOISE: 1088475391,
    VIOLET: 4001558271,
    WHEAT: 4125012991,
    WHITE: 4294967295,
    WHITESMOKE: 4126537215,
    YELLOW: 4294902015,
    YELLOWGREEN: 2597139199,
  },
  RQ = {
    name: "background-clip",
    initialValue: "border-box",
    prefix: !1,
    type: 1,
    parse: function (e, r) {
      return r.map(function (n) {
        if (SA(n))
          switch (n.value) {
            case "padding-box":
              return 1;
            case "content-box":
              return 2;
          }
        return 0;
      });
    },
  },
  OQ = {
    name: "background-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color",
  },
  ca = function (e, r) {
    var n = sr.parse(e, r[0]),
      o = r[1];
    return o && YA(o) ? { color: n, stop: o } : { color: n, stop: null };
  },
  xg = function (e, r) {
    var n = e[0],
      o = e[e.length - 1];
    n.stop === null && (n.stop = le), o.stop === null && (o.stop = or);
    for (var s = [], l = 0, c = 0; c < e.length; c++) {
      var f = e[c].stop;
      if (f !== null) {
        var B = LA(f, r);
        B > l ? s.push(B) : s.push(l), (l = B);
      } else s.push(null);
    }
    for (var g = null, c = 0; c < s.length; c++) {
      var w = s[c];
      if (w === null) g === null && (g = c);
      else if (g !== null) {
        for (
          var h = c - g, v = s[g - 1], U = (w - v) / (h + 1), Q = 1;
          Q <= h;
          Q++
        )
          s[g + Q - 1] = U * Q;
        g = null;
      }
    }
    return e.map(function (m, F) {
      var E = m.color;
      return { color: E, stop: Math.max(Math.min(1, s[F] / r), 0) };
    });
  },
  NQ = function (e, r, n) {
    var o = r / 2,
      s = n / 2,
      l = LA(e[0], r) - o,
      c = s - LA(e[1], n);
    return (Math.atan2(c, l) + Math.PI * 2) % (Math.PI * 2);
  },
  MQ = function (e, r, n) {
    var o = typeof e == "number" ? e : NQ(e, r, n),
      s = Math.abs(r * Math.sin(o)) + Math.abs(n * Math.cos(o)),
      l = r / 2,
      c = n / 2,
      f = s / 2,
      B = Math.sin(o - Math.PI / 2) * f,
      g = Math.cos(o - Math.PI / 2) * f;
    return [s, l - g, l + g, c - B, c + B];
  },
  $e = function (e, r) {
    return Math.sqrt(e * e + r * r);
  },
  Ig = function (e, r, n, o, s) {
    var l = [
      [0, 0],
      [0, r],
      [e, 0],
      [e, r],
    ];
    return l.reduce(
      function (c, f) {
        var B = f[0],
          g = f[1],
          w = $e(n - B, o - g);
        return (s ? w < c.optimumDistance : w > c.optimumDistance)
          ? {
              optimumCorner: f,
              optimumDistance: w,
            }
          : c;
      },
      {
        optimumDistance: s ? 1 / 0 : -1 / 0,
        optimumCorner: null,
      },
    ).optimumCorner;
  },
  PQ = function (e, r, n, o, s) {
    var l = 0,
      c = 0;
    switch (e.size) {
      case 0:
        e.shape === 0
          ? (l = c =
              Math.min(
                Math.abs(r),
                Math.abs(r - o),
                Math.abs(n),
                Math.abs(n - s),
              ))
          : e.shape === 1 &&
            ((l = Math.min(Math.abs(r), Math.abs(r - o))),
            (c = Math.min(Math.abs(n), Math.abs(n - s))));
        break;
      case 2:
        if (e.shape === 0)
          l = c = Math.min(
            $e(r, n),
            $e(r, n - s),
            $e(r - o, n),
            $e(r - o, n - s),
          );
        else if (e.shape === 1) {
          var f =
              Math.min(Math.abs(n), Math.abs(n - s)) /
              Math.min(Math.abs(r), Math.abs(r - o)),
            B = Ig(o, s, r, n, !0),
            g = B[0],
            w = B[1];
          (l = $e(g - r, (w - n) / f)), (c = f * l);
        }
        break;
      case 1:
        e.shape === 0
          ? (l = c =
              Math.max(
                Math.abs(r),
                Math.abs(r - o),
                Math.abs(n),
                Math.abs(n - s),
              ))
          : e.shape === 1 &&
            ((l = Math.max(Math.abs(r), Math.abs(r - o))),
            (c = Math.max(Math.abs(n), Math.abs(n - s))));
        break;
      case 3:
        if (e.shape === 0)
          l = c = Math.max(
            $e(r, n),
            $e(r, n - s),
            $e(r - o, n),
            $e(r - o, n - s),
          );
        else if (e.shape === 1) {
          var f =
              Math.max(Math.abs(n), Math.abs(n - s)) /
              Math.max(Math.abs(r), Math.abs(r - o)),
            h = Ig(o, s, r, n, !1),
            g = h[0],
            w = h[1];
          (l = $e(g - r, (w - n) / f)), (c = f * l);
        }
        break;
    }
    return (
      Array.isArray(e.size) &&
        ((l = LA(e.size[0], o)),
        (c = e.size.length === 2 ? LA(e.size[1], s) : l)),
      [l, c]
    );
  },
  _Q = function (e, r) {
    var n = _e(180),
      o = [];
    return (
      ft(r).forEach(function (s, l) {
        if (l === 0) {
          var c = s[0];
          if (c.type === 20 && c.value === "to") {
            n = nw(s);
            return;
          } else if (rw(c)) {
            n = ua.parse(e, c);
            return;
          }
        }
        var f = ca(e, s);
        o.push(f);
      }),
      {
        angle: n,
        stops: o,
        type: 1,
        /* LINEAR_GRADIENT */
      }
    );
  },
  Qs = function (e, r) {
    var n = _e(180),
      o = [];
    return (
      ft(r).forEach(function (s, l) {
        if (l === 0) {
          var c = s[0];
          if (
            c.type === 20 &&
            ["top", "left", "right", "bottom"].indexOf(c.value) !== -1
          ) {
            n = nw(s);
            return;
          } else if (rw(c)) {
            n = (ua.parse(e, c) + _e(270)) % _e(360);
            return;
          }
        }
        var f = ca(e, s);
        o.push(f);
      }),
      {
        angle: n,
        stops: o,
        type: 1,
        /* LINEAR_GRADIENT */
      }
    );
  },
  VQ = function (e, r) {
    var n = _e(180),
      o = [],
      s = 1,
      l = 0,
      c = 3,
      f = [];
    return (
      ft(r).forEach(function (B, g) {
        var w = B[0];
        if (g === 0) {
          if (SA(w) && w.value === "linear") {
            s = 1;
            return;
          } else if (SA(w) && w.value === "radial") {
            s = 2;
            return;
          }
        }
        if (w.type === 18) {
          if (w.name === "from") {
            var h = sr.parse(e, w.values[0]);
            o.push({ stop: le, color: h });
          } else if (w.name === "to") {
            var h = sr.parse(e, w.values[0]);
            o.push({ stop: or, color: h });
          } else if (w.name === "color-stop") {
            var v = w.values.filter(Sn);
            if (v.length === 2) {
              var h = sr.parse(e, v[1]),
                U = v[0];
              Ln(U) &&
                o.push({
                  stop: { type: 16, number: U.number * 100, flags: U.flags },
                  color: h,
                });
            }
          }
        }
      }),
      s === 1
        ? {
            angle: (n + _e(180)) % _e(360),
            stops: o,
            type: s,
          }
        : { size: c, shape: l, stops: o, position: f, type: s }
    );
  },
  ow = "closest-side",
  iw = "farthest-side",
  sw = "closest-corner",
  aw = "farthest-corner",
  lw = "circle",
  uw = "ellipse",
  cw = "cover",
  fw = "contain",
  GQ = function (e, r) {
    var n = 0,
      o = 3,
      s = [],
      l = [];
    return (
      ft(r).forEach(function (c, f) {
        var B = !0;
        if (f === 0) {
          var g = !1;
          B = c.reduce(function (h, v) {
            if (g)
              if (SA(v))
                switch (v.value) {
                  case "center":
                    return l.push(Kc), h;
                  case "top":
                  case "left":
                    return l.push(le), h;
                  case "right":
                  case "bottom":
                    return l.push(or), h;
                }
              else (YA(v) || lr(v)) && l.push(v);
            else if (SA(v))
              switch (v.value) {
                case lw:
                  return (n = 0), !1;
                case uw:
                  return (n = 1), !1;
                case "at":
                  return (g = !0), !1;
                case ow:
                  return (o = 0), !1;
                case cw:
                case iw:
                  return (o = 1), !1;
                case fw:
                case sw:
                  return (o = 2), !1;
                case aw:
                  return (o = 3), !1;
              }
            else if (lr(v) || YA(v))
              return Array.isArray(o) || (o = []), o.push(v), !1;
            return h;
          }, B);
        }
        if (B) {
          var w = ca(e, c);
          s.push(w);
        }
      }),
      {
        size: o,
        shape: n,
        stops: s,
        position: l,
        type: 2,
        /* RADIAL_GRADIENT */
      }
    );
  },
  ys = function (e, r) {
    var n = 0,
      o = 3,
      s = [],
      l = [];
    return (
      ft(r).forEach(function (c, f) {
        var B = !0;
        if (
          (f === 0
            ? (B = c.reduce(function (w, h) {
                if (SA(h))
                  switch (h.value) {
                    case "center":
                      return l.push(Kc), !1;
                    case "top":
                    case "left":
                      return l.push(le), !1;
                    case "right":
                    case "bottom":
                      return l.push(or), !1;
                  }
                else if (YA(h) || lr(h)) return l.push(h), !1;
                return w;
              }, B))
            : f === 1 &&
              (B = c.reduce(function (w, h) {
                if (SA(h))
                  switch (h.value) {
                    case lw:
                      return (n = 0), !1;
                    case uw:
                      return (n = 1), !1;
                    case fw:
                    case ow:
                      return (o = 0), !1;
                    case iw:
                      return (o = 1), !1;
                    case sw:
                      return (o = 2), !1;
                    case cw:
                    case aw:
                      return (o = 3), !1;
                  }
                else if (lr(h) || YA(h))
                  return Array.isArray(o) || (o = []), o.push(h), !1;
                return w;
              }, B)),
          B)
        ) {
          var g = ca(e, c);
          s.push(g);
        }
      }),
      {
        size: o,
        shape: n,
        stops: s,
        position: l,
        type: 2,
        /* RADIAL_GRADIENT */
      }
    );
  },
  WQ = function (e) {
    return e.type === 1;
  },
  jQ = function (e) {
    return e.type === 2;
  },
  kc = {
    name: "image",
    parse: function (e, r) {
      if (r.type === 22) {
        var n = {
          url: r.value,
          type: 0,
          /* URL */
        };
        return e.cache.addImage(r.value), n;
      }
      if (r.type === 18) {
        var o = dw[r.name];
        if (typeof o > "u")
          throw new Error(
            'Attempting to parse an unsupported image function "' +
              r.name +
              '"',
          );
        return o(e, r.values);
      }
      throw new Error("Unsupported image type " + r.type);
    },
  };
function XQ(e) {
  return (
    !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!dw[e.name])
  );
}
var dw = {
    "linear-gradient": _Q,
    "-moz-linear-gradient": Qs,
    "-ms-linear-gradient": Qs,
    "-o-linear-gradient": Qs,
    "-webkit-linear-gradient": Qs,
    "radial-gradient": GQ,
    "-moz-radial-gradient": ys,
    "-ms-radial-gradient": ys,
    "-o-radial-gradient": ys,
    "-webkit-radial-gradient": ys,
    "-webkit-gradient": VQ,
  },
  zQ = {
    name: "background-image",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (e, r) {
      if (r.length === 0) return [];
      var n = r[0];
      return n.type === 20 && n.value === "none"
        ? []
        : r
            .filter(function (o) {
              return Sn(o) && XQ(o);
            })
            .map(function (o) {
              return kc.parse(e, o);
            });
    },
  },
  JQ = {
    name: "background-origin",
    initialValue: "border-box",
    prefix: !1,
    type: 1,
    parse: function (e, r) {
      return r.map(function (n) {
        if (SA(n))
          switch (n.value) {
            case "padding-box":
              return 1;
            case "content-box":
              return 2;
          }
        return 0;
      });
    },
  },
  YQ = {
    name: "background-position",
    initialValue: "0% 0%",
    type: 1,
    prefix: !1,
    parse: function (e, r) {
      return ft(r)
        .map(function (n) {
          return n.filter(YA);
        })
        .map($p);
    },
  },
  ZQ = {
    name: "background-repeat",
    initialValue: "repeat",
    prefix: !1,
    type: 1,
    parse: function (e, r) {
      return ft(r)
        .map(function (n) {
          return n
            .filter(SA)
            .map(function (o) {
              return o.value;
            })
            .join(" ");
        })
        .map($Q);
    },
  },
  $Q = function (e) {
    switch (e) {
      case "no-repeat":
        return 1;
      case "repeat-x":
      case "repeat no-repeat":
        return 2;
      case "repeat-y":
      case "no-repeat repeat":
        return 3;
      case "repeat":
      default:
        return 0;
    }
  },
  Fn;
(function (e) {
  (e.AUTO = "auto"), (e.CONTAIN = "contain"), (e.COVER = "cover");
})(Fn || (Fn = {}));
var qQ = {
    name: "background-size",
    initialValue: "0",
    prefix: !1,
    type: 1,
    parse: function (e, r) {
      return ft(r).map(function (n) {
        return n.filter(Ay);
      });
    },
  },
  Ay = function (e) {
    return SA(e) || YA(e);
  },
  fa = function (e) {
    return {
      name: "border-" + e + "-color",
      initialValue: "transparent",
      prefix: !1,
      type: 3,
      format: "color",
    };
  },
  ey = fa("top"),
  ty = fa("right"),
  ry = fa("bottom"),
  ny = fa("left"),
  da = function (e) {
    return {
      name: "border-radius-" + e,
      initialValue: "0 0",
      prefix: !1,
      type: 1,
      parse: function (r, n) {
        return $p(n.filter(YA));
      },
    };
  },
  oy = da("top-left"),
  iy = da("top-right"),
  sy = da("bottom-right"),
  ay = da("bottom-left"),
  Ba = function (e) {
    return {
      name: "border-" + e + "-style",
      initialValue: "solid",
      prefix: !1,
      type: 2,
      parse: function (r, n) {
        switch (n) {
          case "none":
            return 0;
          case "dashed":
            return 2;
          case "dotted":
            return 3;
          case "double":
            return 4;
        }
        return 1;
      },
    };
  },
  ly = Ba("top"),
  uy = Ba("right"),
  cy = Ba("bottom"),
  fy = Ba("left"),
  ga = function (e) {
    return {
      name: "border-" + e + "-width",
      initialValue: "0",
      type: 0,
      prefix: !1,
      parse: function (r, n) {
        return Jo(n) ? n.number : 0;
      },
    };
  },
  dy = ga("top"),
  By = ga("right"),
  gy = ga("bottom"),
  py = ga("left"),
  wy = {
    name: "color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color",
  },
  hy = {
    name: "direction",
    initialValue: "ltr",
    prefix: !1,
    type: 2,
    parse: function (e, r) {
      switch (r) {
        case "rtl":
          return 1;
        case "ltr":
        default:
          return 0;
      }
    },
  },
  vy = {
    name: "display",
    initialValue: "inline-block",
    prefix: !1,
    type: 1,
    parse: function (e, r) {
      return r.filter(SA).reduce(
        function (n, o) {
          return n | my(o.value);
        },
        0,
        /* NONE */
      );
    },
  },
  my = function (e) {
    switch (e) {
      case "block":
      case "-webkit-box":
        return 2;
      case "inline":
        return 4;
      case "run-in":
        return 8;
      case "flow":
        return 16;
      case "flow-root":
        return 32;
      case "table":
        return 64;
      case "flex":
      case "-webkit-flex":
        return 128;
      case "grid":
      case "-ms-grid":
        return 256;
      case "ruby":
        return 512;
      case "subgrid":
        return 1024;
      case "list-item":
        return 2048;
      case "table-row-group":
        return 4096;
      case "table-header-group":
        return 8192;
      case "table-footer-group":
        return 16384;
      case "table-row":
        return 32768;
      case "table-cell":
        return 65536;
      case "table-column-group":
        return 131072;
      case "table-column":
        return 262144;
      case "table-caption":
        return 524288;
      case "ruby-base":
        return 1048576;
      case "ruby-text":
        return 2097152;
      case "ruby-base-container":
        return 4194304;
      case "ruby-text-container":
        return 8388608;
      case "contents":
        return 16777216;
      case "inline-block":
        return 33554432;
      case "inline-list-item":
        return 67108864;
      case "inline-table":
        return 134217728;
      case "inline-flex":
        return 268435456;
      case "inline-grid":
        return 536870912;
    }
    return 0;
  },
  Cy = {
    name: "float",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (e, r) {
      switch (r) {
        case "left":
          return 1;
        case "right":
          return 2;
        case "inline-start":
          return 3;
        case "inline-end":
          return 4;
      }
      return 0;
    },
  },
  Qy = {
    name: "letter-spacing",
    initialValue: "0",
    prefix: !1,
    type: 0,
    parse: function (e, r) {
      return r.type === 20 && r.value === "normal"
        ? 0
        : r.type === 17 || r.type === 15
          ? r.number
          : 0;
    },
  },
  zs;
(function (e) {
  (e.NORMAL = "normal"), (e.STRICT = "strict");
})(zs || (zs = {}));
var yy = {
    name: "line-break",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (e, r) {
      switch (r) {
        case "strict":
          return zs.STRICT;
        case "normal":
        default:
          return zs.NORMAL;
      }
    },
  },
  Uy = {
    name: "line-height",
    initialValue: "normal",
    prefix: !1,
    type: 4,
    /* TOKEN_VALUE */
  },
  Hg = function (e, r) {
    return SA(e) && e.value === "normal"
      ? 1.2 * r
      : e.type === 17
        ? r * e.number
        : YA(e)
          ? LA(e, r)
          : r;
  },
  Fy = {
    name: "list-style-image",
    initialValue: "none",
    type: 0,
    prefix: !1,
    parse: function (e, r) {
      return r.type === 20 && r.value === "none" ? null : kc.parse(e, r);
    },
  },
  Ey = {
    name: "list-style-position",
    initialValue: "outside",
    prefix: !1,
    type: 2,
    parse: function (e, r) {
      switch (r) {
        case "inside":
          return 0;
        case "outside":
        default:
          return 1;
      }
    },
  },
  cc = {
    name: "list-style-type",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (e, r) {
      switch (r) {
        case "disc":
          return 0;
        case "circle":
          return 1;
        case "square":
          return 2;
        case "decimal":
          return 3;
        case "cjk-decimal":
          return 4;
        case "decimal-leading-zero":
          return 5;
        case "lower-roman":
          return 6;
        case "upper-roman":
          return 7;
        case "lower-greek":
          return 8;
        case "lower-alpha":
          return 9;
        case "upper-alpha":
          return 10;
        case "arabic-indic":
          return 11;
        case "armenian":
          return 12;
        case "bengali":
          return 13;
        case "cambodian":
          return 14;
        case "cjk-earthly-branch":
          return 15;
        case "cjk-heavenly-stem":
          return 16;
        case "cjk-ideographic":
          return 17;
        case "devanagari":
          return 18;
        case "ethiopic-numeric":
          return 19;
        case "georgian":
          return 20;
        case "gujarati":
          return 21;
        case "gurmukhi":
          return 22;
        case "hebrew":
          return 22;
        case "hiragana":
          return 23;
        case "hiragana-iroha":
          return 24;
        case "japanese-formal":
          return 25;
        case "japanese-informal":
          return 26;
        case "kannada":
          return 27;
        case "katakana":
          return 28;
        case "katakana-iroha":
          return 29;
        case "khmer":
          return 30;
        case "korean-hangul-formal":
          return 31;
        case "korean-hanja-formal":
          return 32;
        case "korean-hanja-informal":
          return 33;
        case "lao":
          return 34;
        case "lower-armenian":
          return 35;
        case "malayalam":
          return 36;
        case "mongolian":
          return 37;
        case "myanmar":
          return 38;
        case "oriya":
          return 39;
        case "persian":
          return 40;
        case "simp-chinese-formal":
          return 41;
        case "simp-chinese-informal":
          return 42;
        case "tamil":
          return 43;
        case "telugu":
          return 44;
        case "thai":
          return 45;
        case "tibetan":
          return 46;
        case "trad-chinese-formal":
          return 47;
        case "trad-chinese-informal":
          return 48;
        case "upper-armenian":
          return 49;
        case "disclosure-open":
          return 50;
        case "disclosure-closed":
          return 51;
        case "none":
        default:
          return -1;
      }
    },
  },
  pa = function (e) {
    return {
      name: "margin-" + e,
      initialValue: "0",
      prefix: !1,
      type: 4,
      /* TOKEN_VALUE */
    };
  },
  xy = pa("top"),
  Iy = pa("right"),
  Hy = pa("bottom"),
  Sy = pa("left"),
  by = {
    name: "overflow",
    initialValue: "visible",
    prefix: !1,
    type: 1,
    parse: function (e, r) {
      return r.filter(SA).map(function (n) {
        switch (n.value) {
          case "hidden":
            return 1;
          case "scroll":
            return 2;
          case "clip":
            return 3;
          case "auto":
            return 4;
          case "visible":
          default:
            return 0;
        }
      });
    },
  },
  Ly = {
    name: "overflow-wrap",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (e, r) {
      switch (r) {
        case "break-word":
          return "break-word";
        case "normal":
        default:
          return "normal";
      }
    },
  },
  wa = function (e) {
    return {
      name: "padding-" + e,
      initialValue: "0",
      prefix: !1,
      type: 3,
      format: "length-percentage",
    };
  },
  Ty = wa("top"),
  Dy = wa("right"),
  Ky = wa("bottom"),
  ky = wa("left"),
  Ry = {
    name: "text-align",
    initialValue: "left",
    prefix: !1,
    type: 2,
    parse: function (e, r) {
      switch (r) {
        case "right":
          return 2;
        case "center":
        case "justify":
          return 1;
        case "left":
        default:
          return 0;
      }
    },
  },
  Oy = {
    name: "position",
    initialValue: "static",
    prefix: !1,
    type: 2,
    parse: function (e, r) {
      switch (r) {
        case "relative":
          return 1;
        case "absolute":
          return 2;
        case "fixed":
          return 3;
        case "sticky":
          return 4;
      }
      return 0;
    },
  },
  Ny = {
    name: "text-shadow",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (e, r) {
      return r.length === 1 && uc(r[0], "none")
        ? []
        : ft(r).map(function (n) {
            for (
              var o = {
                  color: Et.TRANSPARENT,
                  offsetX: le,
                  offsetY: le,
                  blur: le,
                },
                s = 0,
                l = 0;
              l < n.length;
              l++
            ) {
              var c = n[l];
              lr(c)
                ? (s === 0
                    ? (o.offsetX = c)
                    : s === 1
                      ? (o.offsetY = c)
                      : (o.blur = c),
                  s++)
                : (o.color = sr.parse(e, c));
            }
            return o;
          });
    },
  },
  My = {
    name: "text-transform",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (e, r) {
      switch (r) {
        case "uppercase":
          return 2;
        case "lowercase":
          return 1;
        case "capitalize":
          return 3;
      }
      return 0;
    },
  },
  Py = {
    name: "transform",
    initialValue: "none",
    prefix: !0,
    type: 0,
    parse: function (e, r) {
      if (r.type === 20 && r.value === "none") return null;
      if (r.type === 18) {
        var n = Gy[r.name];
        if (typeof n > "u")
          throw new Error(
            'Attempting to parse an unsupported transform function "' +
              r.name +
              '"',
          );
        return n(r.values);
      }
      return null;
    },
  },
  _y = function (e) {
    var r = e
      .filter(function (n) {
        return n.type === 17;
      })
      .map(function (n) {
        return n.number;
      });
    return r.length === 6 ? r : null;
  },
  Vy = function (e) {
    var r = e
        .filter(function (B) {
          return B.type === 17;
        })
        .map(function (B) {
          return B.number;
        }),
      n = r[0],
      o = r[1];
    r[2], r[3];
    var s = r[4],
      l = r[5];
    r[6], r[7], r[8], r[9], r[10], r[11];
    var c = r[12],
      f = r[13];
    return r[14], r[15], r.length === 16 ? [n, o, s, l, c, f] : null;
  },
  Gy = {
    matrix: _y,
    matrix3d: Vy,
  },
  Sg = {
    type: 16,
    number: 50,
    flags: zo,
  },
  Wy = [Sg, Sg],
  jy = {
    name: "transform-origin",
    initialValue: "50% 50%",
    prefix: !0,
    type: 1,
    parse: function (e, r) {
      var n = r.filter(YA);
      return n.length !== 2 ? Wy : [n[0], n[1]];
    },
  },
  Xy = {
    name: "visible",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (e, r) {
      switch (r) {
        case "hidden":
          return 1;
        case "collapse":
          return 2;
        case "visible":
        default:
          return 0;
      }
    },
  },
  Mo;
(function (e) {
  (e.NORMAL = "normal"), (e.BREAK_ALL = "break-all"), (e.KEEP_ALL = "keep-all");
})(Mo || (Mo = {}));
var zy = {
    name: "word-break",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (e, r) {
      switch (r) {
        case "break-all":
          return Mo.BREAK_ALL;
        case "keep-all":
          return Mo.KEEP_ALL;
        case "normal":
        default:
          return Mo.NORMAL;
      }
    },
  },
  Jy = {
    name: "z-index",
    initialValue: "auto",
    prefix: !1,
    type: 0,
    parse: function (e, r) {
      if (r.type === 20) return { auto: !0, order: 0 };
      if (Ln(r)) return { auto: !1, order: r.number };
      throw new Error("Invalid z-index number parsed");
    },
  },
  Bw = {
    name: "time",
    parse: function (e, r) {
      if (r.type === 15)
        switch (r.unit.toLowerCase()) {
          case "s":
            return 1e3 * r.number;
          case "ms":
            return r.number;
        }
      throw new Error("Unsupported time type");
    },
  },
  Yy = {
    name: "opacity",
    initialValue: "1",
    type: 0,
    prefix: !1,
    parse: function (e, r) {
      return Ln(r) ? r.number : 1;
    },
  },
  Zy = {
    name: "text-decoration-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color",
  },
  $y = {
    name: "text-decoration-line",
    initialValue: "none",
    prefix: !1,
    type: 1,
    parse: function (e, r) {
      return r
        .filter(SA)
        .map(function (n) {
          switch (n.value) {
            case "underline":
              return 1;
            case "overline":
              return 2;
            case "line-through":
              return 3;
            case "none":
              return 4;
          }
          return 0;
        })
        .filter(function (n) {
          return n !== 0;
        });
    },
  },
  qy = {
    name: "font-family",
    initialValue: "",
    prefix: !1,
    type: 1,
    parse: function (e, r) {
      var n = [],
        o = [];
      return (
        r.forEach(function (s) {
          switch (s.type) {
            case 20:
            case 0:
              n.push(s.value);
              break;
            case 17:
              n.push(s.number.toString());
              break;
            case 4:
              o.push(n.join(" ")), (n.length = 0);
              break;
          }
        }),
        n.length && o.push(n.join(" ")),
        o.map(function (s) {
          return s.indexOf(" ") === -1 ? s : "'" + s + "'";
        })
      );
    },
  },
  AU = {
    name: "font-size",
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length",
  },
  eU = {
    name: "font-weight",
    initialValue: "normal",
    type: 0,
    prefix: !1,
    parse: function (e, r) {
      if (Ln(r)) return r.number;
      if (SA(r))
        switch (r.value) {
          case "bold":
            return 700;
          case "normal":
          default:
            return 400;
        }
      return 400;
    },
  },
  tU = {
    name: "font-variant",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (e, r) {
      return r.filter(SA).map(function (n) {
        return n.value;
      });
    },
  },
  rU = {
    name: "font-style",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (e, r) {
      switch (r) {
        case "oblique":
          return "oblique";
        case "italic":
          return "italic";
        case "normal":
        default:
          return "normal";
      }
    },
  },
  qA = function (e, r) {
    return (e & r) !== 0;
  },
  nU = {
    name: "content",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (e, r) {
      if (r.length === 0) return [];
      var n = r[0];
      return n.type === 20 && n.value === "none" ? [] : r;
    },
  },
  oU = {
    name: "counter-increment",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function (e, r) {
      if (r.length === 0) return null;
      var n = r[0];
      if (n.type === 20 && n.value === "none") return null;
      for (var o = [], s = r.filter(Zp), l = 0; l < s.length; l++) {
        var c = s[l],
          f = s[l + 1];
        if (c.type === 20) {
          var B = f && Ln(f) ? f.number : 1;
          o.push({ counter: c.value, increment: B });
        }
      }
      return o;
    },
  },
  iU = {
    name: "counter-reset",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function (e, r) {
      if (r.length === 0) return [];
      for (var n = [], o = r.filter(Zp), s = 0; s < o.length; s++) {
        var l = o[s],
          c = o[s + 1];
        if (SA(l) && l.value !== "none") {
          var f = c && Ln(c) ? c.number : 0;
          n.push({ counter: l.value, reset: f });
        }
      }
      return n;
    },
  },
  sU = {
    name: "duration",
    initialValue: "0s",
    prefix: !1,
    type: 1,
    parse: function (e, r) {
      return r.filter(Jo).map(function (n) {
        return Bw.parse(e, n);
      });
    },
  },
  aU = {
    name: "quotes",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function (e, r) {
      if (r.length === 0) return null;
      var n = r[0];
      if (n.type === 20 && n.value === "none") return null;
      var o = [],
        s = r.filter(DQ);
      if (s.length % 2 !== 0) return null;
      for (var l = 0; l < s.length; l += 2) {
        var c = s[l].value,
          f = s[l + 1].value;
        o.push({ open: c, close: f });
      }
      return o;
    },
  },
  bg = function (e, r, n) {
    if (!e) return "";
    var o = e[Math.min(r, e.length - 1)];
    return o ? (n ? o.open : o.close) : "";
  },
  lU = {
    name: "box-shadow",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (e, r) {
      return r.length === 1 && uc(r[0], "none")
        ? []
        : ft(r).map(function (n) {
            for (
              var o = {
                  color: 255,
                  offsetX: le,
                  offsetY: le,
                  blur: le,
                  spread: le,
                  inset: !1,
                },
                s = 0,
                l = 0;
              l < n.length;
              l++
            ) {
              var c = n[l];
              uc(c, "inset")
                ? (o.inset = !0)
                : lr(c)
                  ? (s === 0
                      ? (o.offsetX = c)
                      : s === 1
                        ? (o.offsetY = c)
                        : s === 2
                          ? (o.blur = c)
                          : (o.spread = c),
                    s++)
                  : (o.color = sr.parse(e, c));
            }
            return o;
          });
    },
  },
  uU = {
    name: "paint-order",
    initialValue: "normal",
    prefix: !1,
    type: 1,
    parse: function (e, r) {
      var n = [
          0, 1, 2,
          /* MARKERS */
        ],
        o = [];
      return (
        r.filter(SA).forEach(function (s) {
          switch (s.value) {
            case "stroke":
              o.push(
                1,
                /* STROKE */
              );
              break;
            case "fill":
              o.push(
                0,
                /* FILL */
              );
              break;
            case "markers":
              o.push(
                2,
                /* MARKERS */
              );
              break;
          }
        }),
        n.forEach(function (s) {
          o.indexOf(s) === -1 && o.push(s);
        }),
        o
      );
    },
  },
  cU = {
    name: "-webkit-text-stroke-color",
    initialValue: "currentcolor",
    prefix: !1,
    type: 3,
    format: "color",
  },
  fU = {
    name: "-webkit-text-stroke-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function (e, r) {
      return Jo(r) ? r.number : 0;
    },
  },
  dU =
    /** @class */
    (function () {
      function e(r, n) {
        var o, s;
        (this.animationDuration = tA(r, sU, n.animationDuration)),
          (this.backgroundClip = tA(r, RQ, n.backgroundClip)),
          (this.backgroundColor = tA(r, OQ, n.backgroundColor)),
          (this.backgroundImage = tA(r, zQ, n.backgroundImage)),
          (this.backgroundOrigin = tA(r, JQ, n.backgroundOrigin)),
          (this.backgroundPosition = tA(r, YQ, n.backgroundPosition)),
          (this.backgroundRepeat = tA(r, ZQ, n.backgroundRepeat)),
          (this.backgroundSize = tA(r, qQ, n.backgroundSize)),
          (this.borderTopColor = tA(r, ey, n.borderTopColor)),
          (this.borderRightColor = tA(r, ty, n.borderRightColor)),
          (this.borderBottomColor = tA(r, ry, n.borderBottomColor)),
          (this.borderLeftColor = tA(r, ny, n.borderLeftColor)),
          (this.borderTopLeftRadius = tA(r, oy, n.borderTopLeftRadius)),
          (this.borderTopRightRadius = tA(r, iy, n.borderTopRightRadius)),
          (this.borderBottomRightRadius = tA(r, sy, n.borderBottomRightRadius)),
          (this.borderBottomLeftRadius = tA(r, ay, n.borderBottomLeftRadius)),
          (this.borderTopStyle = tA(r, ly, n.borderTopStyle)),
          (this.borderRightStyle = tA(r, uy, n.borderRightStyle)),
          (this.borderBottomStyle = tA(r, cy, n.borderBottomStyle)),
          (this.borderLeftStyle = tA(r, fy, n.borderLeftStyle)),
          (this.borderTopWidth = tA(r, dy, n.borderTopWidth)),
          (this.borderRightWidth = tA(r, By, n.borderRightWidth)),
          (this.borderBottomWidth = tA(r, gy, n.borderBottomWidth)),
          (this.borderLeftWidth = tA(r, py, n.borderLeftWidth)),
          (this.boxShadow = tA(r, lU, n.boxShadow)),
          (this.color = tA(r, wy, n.color)),
          (this.direction = tA(r, hy, n.direction)),
          (this.display = tA(r, vy, n.display)),
          (this.float = tA(r, Cy, n.cssFloat)),
          (this.fontFamily = tA(r, qy, n.fontFamily)),
          (this.fontSize = tA(r, AU, n.fontSize)),
          (this.fontStyle = tA(r, rU, n.fontStyle)),
          (this.fontVariant = tA(r, tU, n.fontVariant)),
          (this.fontWeight = tA(r, eU, n.fontWeight)),
          (this.letterSpacing = tA(r, Qy, n.letterSpacing)),
          (this.lineBreak = tA(r, yy, n.lineBreak)),
          (this.lineHeight = tA(r, Uy, n.lineHeight)),
          (this.listStyleImage = tA(r, Fy, n.listStyleImage)),
          (this.listStylePosition = tA(r, Ey, n.listStylePosition)),
          (this.listStyleType = tA(r, cc, n.listStyleType)),
          (this.marginTop = tA(r, xy, n.marginTop)),
          (this.marginRight = tA(r, Iy, n.marginRight)),
          (this.marginBottom = tA(r, Hy, n.marginBottom)),
          (this.marginLeft = tA(r, Sy, n.marginLeft)),
          (this.opacity = tA(r, Yy, n.opacity));
        var l = tA(r, by, n.overflow);
        (this.overflowX = l[0]),
          (this.overflowY = l[l.length > 1 ? 1 : 0]),
          (this.overflowWrap = tA(r, Ly, n.overflowWrap)),
          (this.paddingTop = tA(r, Ty, n.paddingTop)),
          (this.paddingRight = tA(r, Dy, n.paddingRight)),
          (this.paddingBottom = tA(r, Ky, n.paddingBottom)),
          (this.paddingLeft = tA(r, ky, n.paddingLeft)),
          (this.paintOrder = tA(r, uU, n.paintOrder)),
          (this.position = tA(r, Oy, n.position)),
          (this.textAlign = tA(r, Ry, n.textAlign)),
          (this.textDecorationColor = tA(
            r,
            Zy,
            (o = n.textDecorationColor) !== null && o !== void 0 ? o : n.color,
          )),
          (this.textDecorationLine = tA(
            r,
            $y,
            (s = n.textDecorationLine) !== null && s !== void 0
              ? s
              : n.textDecoration,
          )),
          (this.textShadow = tA(r, Ny, n.textShadow)),
          (this.textTransform = tA(r, My, n.textTransform)),
          (this.transform = tA(r, Py, n.transform)),
          (this.transformOrigin = tA(r, jy, n.transformOrigin)),
          (this.visibility = tA(r, Xy, n.visibility)),
          (this.webkitTextStrokeColor = tA(r, cU, n.webkitTextStrokeColor)),
          (this.webkitTextStrokeWidth = tA(r, fU, n.webkitTextStrokeWidth)),
          (this.wordBreak = tA(r, zy, n.wordBreak)),
          (this.zIndex = tA(r, Jy, n.zIndex));
      }
      return (
        (e.prototype.isVisible = function () {
          return this.display > 0 && this.opacity > 0 && this.visibility === 0;
        }),
        (e.prototype.isTransparent = function () {
          return ar(this.backgroundColor);
        }),
        (e.prototype.isTransformed = function () {
          return this.transform !== null;
        }),
        (e.prototype.isPositioned = function () {
          return this.position !== 0;
        }),
        (e.prototype.isPositionedWithZIndex = function () {
          return this.isPositioned() && !this.zIndex.auto;
        }),
        (e.prototype.isFloating = function () {
          return this.float !== 0;
        }),
        (e.prototype.isInlineLevel = function () {
          return (
            qA(
              this.display,
              4,
              /* INLINE */
            ) ||
            qA(
              this.display,
              33554432,
              /* INLINE_BLOCK */
            ) ||
            qA(
              this.display,
              268435456,
              /* INLINE_FLEX */
            ) ||
            qA(
              this.display,
              536870912,
              /* INLINE_GRID */
            ) ||
            qA(
              this.display,
              67108864,
              /* INLINE_LIST_ITEM */
            ) ||
            qA(
              this.display,
              134217728,
              /* INLINE_TABLE */
            )
          );
        }),
        e
      );
    })(),
  BU =
    /** @class */
    /* @__PURE__ */ (function () {
      function e(r, n) {
        (this.content = tA(r, nU, n.content)),
          (this.quotes = tA(r, aU, n.quotes));
      }
      return e;
    })(),
  Lg =
    /** @class */
    /* @__PURE__ */ (function () {
      function e(r, n) {
        (this.counterIncrement = tA(r, oU, n.counterIncrement)),
          (this.counterReset = tA(r, iU, n.counterReset));
      }
      return e;
    })(),
  tA = function (e, r, n) {
    var o = new Jp(),
      s = n !== null && typeof n < "u" ? n.toString() : r.initialValue;
    o.write(s);
    var l = new Yp(o.read());
    switch (r.type) {
      case 2:
        var c = l.parseComponentValue();
        return r.parse(e, SA(c) ? c.value : r.initialValue);
      case 0:
        return r.parse(e, l.parseComponentValue());
      case 1:
        return r.parse(e, l.parseComponentValues());
      case 4:
        return l.parseComponentValue();
      case 3:
        switch (r.format) {
          case "angle":
            return ua.parse(e, l.parseComponentValue());
          case "color":
            return sr.parse(e, l.parseComponentValue());
          case "image":
            return kc.parse(e, l.parseComponentValue());
          case "length":
            var f = l.parseComponentValue();
            return lr(f) ? f : le;
          case "length-percentage":
            var B = l.parseComponentValue();
            return YA(B) ? B : le;
          case "time":
            return Bw.parse(e, l.parseComponentValue());
        }
        break;
    }
  },
  gU = "data-html2canvas-debug",
  pU = function (e) {
    var r = e.getAttribute(gU);
    switch (r) {
      case "all":
        return 1;
      case "clone":
        return 2;
      case "parse":
        return 3;
      case "render":
        return 4;
      default:
        return 0;
    }
  },
  fc = function (e, r) {
    var n = pU(e);
    return n === 1 || r === n;
  },
  dt =
    /** @class */
    /* @__PURE__ */ (function () {
      function e(r, n) {
        if (
          ((this.context = r),
          (this.textNodes = []),
          (this.elements = []),
          (this.flags = 0),
          fc(
            n,
            3,
            /* PARSE */
          ))
        )
          debugger;
        (this.styles = new dU(r, window.getComputedStyle(n, null))),
          gc(n) &&
            (this.styles.animationDuration.some(function (o) {
              return o > 0;
            }) && (n.style.animationDuration = "0s"),
            this.styles.transform !== null && (n.style.transform = "none")),
          (this.bounds = aa(this.context, n)),
          fc(
            n,
            4,
            /* RENDER */
          ) && (this.flags |= 16);
      }
      return e;
    })(),
  wU =
    "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",
  Tg = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Ko = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Us = 0; Us < Tg.length; Us++) Ko[Tg.charCodeAt(Us)] = Us;
var hU = function (e) {
    var r = e.length * 0.75,
      n = e.length,
      o,
      s = 0,
      l,
      c,
      f,
      B;
    e[e.length - 1] === "=" && (r--, e[e.length - 2] === "=" && r--);
    var g =
        typeof ArrayBuffer < "u" &&
        typeof Uint8Array < "u" &&
        typeof Uint8Array.prototype.slice < "u"
          ? new ArrayBuffer(r)
          : new Array(r),
      w = Array.isArray(g) ? g : new Uint8Array(g);
    for (o = 0; o < n; o += 4)
      (l = Ko[e.charCodeAt(o)]),
        (c = Ko[e.charCodeAt(o + 1)]),
        (f = Ko[e.charCodeAt(o + 2)]),
        (B = Ko[e.charCodeAt(o + 3)]),
        (w[s++] = (l << 2) | (c >> 4)),
        (w[s++] = ((c & 15) << 4) | (f >> 2)),
        (w[s++] = ((f & 3) << 6) | (B & 63));
    return g;
  },
  vU = function (e) {
    for (var r = e.length, n = [], o = 0; o < r; o += 2)
      n.push((e[o + 1] << 8) | e[o]);
    return n;
  },
  mU = function (e) {
    for (var r = e.length, n = [], o = 0; o < r; o += 4)
      n.push((e[o + 3] << 24) | (e[o + 2] << 16) | (e[o + 1] << 8) | e[o]);
    return n;
  },
  Tr = 5,
  Rc = 11,
  Iu = 2,
  CU = Rc - Tr,
  gw = 65536 >> Tr,
  QU = 1 << Tr,
  Hu = QU - 1,
  yU = 1024 >> Tr,
  UU = gw + yU,
  FU = UU,
  EU = 32,
  xU = FU + EU,
  IU = 65536 >> Rc,
  HU = 1 << CU,
  SU = HU - 1,
  Dg = function (e, r, n) {
    return e.slice
      ? e.slice(r, n)
      : new Uint16Array(Array.prototype.slice.call(e, r, n));
  },
  bU = function (e, r, n) {
    return e.slice
      ? e.slice(r, n)
      : new Uint32Array(Array.prototype.slice.call(e, r, n));
  },
  LU = function (e, r) {
    var n = hU(e),
      o = Array.isArray(n) ? mU(n) : new Uint32Array(n),
      s = Array.isArray(n) ? vU(n) : new Uint16Array(n),
      l = 24,
      c = Dg(s, l / 2, o[4] / 2),
      f = o[5] === 2 ? Dg(s, (l + o[4]) / 2) : bU(o, Math.ceil((l + o[4]) / 4));
    return new TU(o[0], o[1], o[2], o[3], c, f);
  },
  TU =
    /** @class */
    (function () {
      function e(r, n, o, s, l, c) {
        (this.initialValue = r),
          (this.errorValue = n),
          (this.highStart = o),
          (this.highValueIndex = s),
          (this.index = l),
          (this.data = c);
      }
      return (
        (e.prototype.get = function (r) {
          var n;
          if (r >= 0) {
            if (r < 55296 || (r > 56319 && r <= 65535))
              return (
                (n = this.index[r >> Tr]),
                (n = (n << Iu) + (r & Hu)),
                this.data[n]
              );
            if (r <= 65535)
              return (
                (n = this.index[gw + ((r - 55296) >> Tr)]),
                (n = (n << Iu) + (r & Hu)),
                this.data[n]
              );
            if (r < this.highStart)
              return (
                (n = xU - IU + (r >> Rc)),
                (n = this.index[n]),
                (n += (r >> Tr) & SU),
                (n = this.index[n]),
                (n = (n << Iu) + (r & Hu)),
                this.data[n]
              );
            if (r <= 1114111) return this.data[this.highValueIndex];
          }
          return this.errorValue;
        }),
        e
      );
    })(),
  Kg = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  DU = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Fs = 0; Fs < Kg.length; Fs++) DU[Kg.charCodeAt(Fs)] = Fs;
var KU = 1,
  Su = 2,
  bu = 3,
  kg = 4,
  Rg = 5,
  kU = 7,
  Og = 8,
  Lu = 9,
  Tu = 10,
  Ng = 11,
  Mg = 12,
  Pg = 13,
  _g = 14,
  Du = 15,
  RU = function (e) {
    for (var r = [], n = 0, o = e.length; n < o; ) {
      var s = e.charCodeAt(n++);
      if (s >= 55296 && s <= 56319 && n < o) {
        var l = e.charCodeAt(n++);
        (l & 64512) === 56320
          ? r.push(((s & 1023) << 10) + (l & 1023) + 65536)
          : (r.push(s), n--);
      } else r.push(s);
    }
    return r;
  },
  OU = function () {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, e);
    var n = e.length;
    if (!n) return "";
    for (var o = [], s = -1, l = ""; ++s < n; ) {
      var c = e[s];
      c <= 65535
        ? o.push(c)
        : ((c -= 65536), o.push((c >> 10) + 55296, (c % 1024) + 56320)),
        (s + 1 === n || o.length > 16384) &&
          ((l += String.fromCharCode.apply(String, o)), (o.length = 0));
    }
    return l;
  },
  NU = LU(wU),
  Me = "×",
  Ku = "÷",
  MU = function (e) {
    return NU.get(e);
  },
  PU = function (e, r, n) {
    var o = n - 2,
      s = r[o],
      l = r[n - 1],
      c = r[n];
    if (l === Su && c === bu) return Me;
    if (l === Su || l === bu || l === kg || c === Su || c === bu || c === kg)
      return Ku;
    if (
      (l === Og && [Og, Lu, Ng, Mg].indexOf(c) !== -1) ||
      ((l === Ng || l === Lu) && (c === Lu || c === Tu)) ||
      ((l === Mg || l === Tu) && c === Tu) ||
      c === Pg ||
      c === Rg ||
      c === kU ||
      l === KU
    )
      return Me;
    if (l === Pg && c === _g) {
      for (; s === Rg; ) s = r[--o];
      if (s === _g) return Me;
    }
    if (l === Du && c === Du) {
      for (var f = 0; s === Du; ) f++, (s = r[--o]);
      if (f % 2 === 0) return Me;
    }
    return Ku;
  },
  _U = function (e) {
    var r = RU(e),
      n = r.length,
      o = 0,
      s = 0,
      l = r.map(MU);
    return {
      next: function () {
        if (o >= n) return { done: !0, value: null };
        for (var c = Me; o < n && (c = PU(r, l, ++o)) === Me; );
        if (c !== Me || o === n) {
          var f = OU.apply(null, r.slice(s, o));
          return (s = o), { value: f, done: !1 };
        }
        return { done: !0, value: null };
      },
    };
  },
  VU = function (e) {
    for (var r = _U(e), n = [], o; !(o = r.next()).done; )
      o.value && n.push(o.value.slice());
    return n;
  },
  GU = function (e) {
    var r = 123;
    if (e.createRange) {
      var n = e.createRange();
      if (n.getBoundingClientRect) {
        var o = e.createElement("boundtest");
        (o.style.height = r + "px"),
          (o.style.display = "block"),
          e.body.appendChild(o),
          n.selectNode(o);
        var s = n.getBoundingClientRect(),
          l = Math.round(s.height);
        if ((e.body.removeChild(o), l === r)) return !0;
      }
    }
    return !1;
  },
  WU = function (e) {
    var r = e.createElement("boundtest");
    (r.style.width = "50px"),
      (r.style.display = "block"),
      (r.style.fontSize = "12px"),
      (r.style.letterSpacing = "0px"),
      (r.style.wordSpacing = "0px"),
      e.body.appendChild(r);
    var n = e.createRange();
    r.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var o = r.firstChild,
      s = la(o.data).map(function (B) {
        return XA(B);
      }),
      l = 0,
      c = {},
      f = s.every(function (B, g) {
        n.setStart(o, l), n.setEnd(o, l + B.length);
        var w = n.getBoundingClientRect();
        l += B.length;
        var h = w.x > c.x || w.y > c.y;
        return (c = w), g === 0 ? !0 : h;
      });
    return e.body.removeChild(r), f;
  },
  jU = function () {
    return typeof new Image().crossOrigin < "u";
  },
  XU = function () {
    return typeof new XMLHttpRequest().responseType == "string";
  },
  zU = function (e) {
    var r = new Image(),
      n = e.createElement("canvas"),
      o = n.getContext("2d");
    if (!o) return !1;
    r.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      o.drawImage(r, 0, 0), n.toDataURL();
    } catch {
      return !1;
    }
    return !0;
  },
  Vg = function (e) {
    return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
  },
  JU = function (e) {
    var r = e.createElement("canvas"),
      n = 100;
    (r.width = n), (r.height = n);
    var o = r.getContext("2d");
    if (!o) return Promise.reject(!1);
    (o.fillStyle = "rgb(0, 255, 0)"), o.fillRect(0, 0, n, n);
    var s = new Image(),
      l = r.toDataURL();
    s.src = l;
    var c = dc(n, n, 0, 0, s);
    return (
      (o.fillStyle = "red"),
      o.fillRect(0, 0, n, n),
      Gg(c)
        .then(function (f) {
          o.drawImage(f, 0, 0);
          var B = o.getImageData(0, 0, n, n).data;
          (o.fillStyle = "red"), o.fillRect(0, 0, n, n);
          var g = e.createElement("div");
          return (
            (g.style.backgroundImage = "url(" + l + ")"),
            (g.style.height = n + "px"),
            Vg(B) ? Gg(dc(n, n, 0, 0, g)) : Promise.reject(!1)
          );
        })
        .then(function (f) {
          return o.drawImage(f, 0, 0), Vg(o.getImageData(0, 0, n, n).data);
        })
        .catch(function () {
          return !1;
        })
    );
  },
  dc = function (e, r, n, o, s) {
    var l = "http://www.w3.org/2000/svg",
      c = document.createElementNS(l, "svg"),
      f = document.createElementNS(l, "foreignObject");
    return (
      c.setAttributeNS(null, "width", e.toString()),
      c.setAttributeNS(null, "height", r.toString()),
      f.setAttributeNS(null, "width", "100%"),
      f.setAttributeNS(null, "height", "100%"),
      f.setAttributeNS(null, "x", n.toString()),
      f.setAttributeNS(null, "y", o.toString()),
      f.setAttributeNS(null, "externalResourcesRequired", "true"),
      c.appendChild(f),
      f.appendChild(s),
      c
    );
  },
  Gg = function (e) {
    return new Promise(function (r, n) {
      var o = new Image();
      (o.onload = function () {
        return r(o);
      }),
        (o.onerror = n),
        (o.src =
          "data:image/svg+xml;charset=utf-8," +
          encodeURIComponent(new XMLSerializer().serializeToString(e)));
    });
  },
  ae = {
    get SUPPORT_RANGE_BOUNDS() {
      var e = GU(document);
      return Object.defineProperty(ae, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
    },
    get SUPPORT_WORD_BREAKING() {
      var e = ae.SUPPORT_RANGE_BOUNDS && WU(document);
      return (
        Object.defineProperty(ae, "SUPPORT_WORD_BREAKING", { value: e }), e
      );
    },
    get SUPPORT_SVG_DRAWING() {
      var e = zU(document);
      return Object.defineProperty(ae, "SUPPORT_SVG_DRAWING", { value: e }), e;
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
      var e =
        typeof Array.from == "function" && typeof window.fetch == "function"
          ? JU(document)
          : Promise.resolve(!1);
      return (
        Object.defineProperty(ae, "SUPPORT_FOREIGNOBJECT_DRAWING", {
          value: e,
        }),
        e
      );
    },
    get SUPPORT_CORS_IMAGES() {
      var e = jU();
      return Object.defineProperty(ae, "SUPPORT_CORS_IMAGES", { value: e }), e;
    },
    get SUPPORT_RESPONSE_TYPE() {
      var e = XU();
      return (
        Object.defineProperty(ae, "SUPPORT_RESPONSE_TYPE", { value: e }), e
      );
    },
    get SUPPORT_CORS_XHR() {
      var e = "withCredentials" in new XMLHttpRequest();
      return Object.defineProperty(ae, "SUPPORT_CORS_XHR", { value: e }), e;
    },
    get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
      var e = !!(typeof Intl < "u" && Intl.Segmenter);
      return (
        Object.defineProperty(ae, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
          value: e,
        }),
        e
      );
    },
  },
  Po =
    /** @class */
    /* @__PURE__ */ (function () {
      function e(r, n) {
        (this.text = r), (this.bounds = n);
      }
      return e;
    })(),
  YU = function (e, r, n, o) {
    var s = qU(r, n),
      l = [],
      c = 0;
    return (
      s.forEach(function (f) {
        if (n.textDecorationLine.length || f.trim().length > 0)
          if (ae.SUPPORT_RANGE_BOUNDS) {
            var B = Wg(o, c, f.length).getClientRects();
            if (B.length > 1) {
              var g = Oc(f),
                w = 0;
              g.forEach(function (v) {
                l.push(
                  new Po(
                    v,
                    xt.fromDOMRectList(
                      e,
                      Wg(o, w + c, v.length).getClientRects(),
                    ),
                  ),
                ),
                  (w += v.length);
              });
            } else l.push(new Po(f, xt.fromDOMRectList(e, B)));
          } else {
            var h = o.splitText(f.length);
            l.push(new Po(f, ZU(e, o))), (o = h);
          }
        else ae.SUPPORT_RANGE_BOUNDS || (o = o.splitText(f.length));
        c += f.length;
      }),
      l
    );
  },
  ZU = function (e, r) {
    var n = r.ownerDocument;
    if (n) {
      var o = n.createElement("html2canvaswrapper");
      o.appendChild(r.cloneNode(!0));
      var s = r.parentNode;
      if (s) {
        s.replaceChild(o, r);
        var l = aa(e, o);
        return o.firstChild && s.replaceChild(o.firstChild, o), l;
      }
    }
    return xt.EMPTY;
  },
  Wg = function (e, r, n) {
    var o = e.ownerDocument;
    if (!o) throw new Error("Node has no owner document");
    var s = o.createRange();
    return s.setStart(e, r), s.setEnd(e, r + n), s;
  },
  Oc = function (e) {
    if (ae.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var r = new Intl.Segmenter(void 0, { granularity: "grapheme" });
      return Array.from(r.segment(e)).map(function (n) {
        return n.segment;
      });
    }
    return VU(e);
  },
  $U = function (e, r) {
    if (ae.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var n = new Intl.Segmenter(void 0, {
        granularity: "word",
      });
      return Array.from(n.segment(e)).map(function (o) {
        return o.segment;
      });
    }
    return eF(e, r);
  },
  qU = function (e, r) {
    return r.letterSpacing !== 0 ? Oc(e) : $U(e, r);
  },
  AF = [32, 160, 4961, 65792, 65793, 4153, 4241],
  eF = function (e, r) {
    for (
      var n = IC(e, {
          lineBreak: r.lineBreak,
          wordBreak:
            r.overflowWrap === "break-word" ? "break-word" : r.wordBreak,
        }),
        o = [],
        s,
        l = function () {
          if (s.value) {
            var c = s.value.slice(),
              f = la(c),
              B = "";
            f.forEach(function (g) {
              AF.indexOf(g) === -1
                ? (B += XA(g))
                : (B.length && o.push(B), o.push(XA(g)), (B = ""));
            }),
              B.length && o.push(B);
          }
        };
      !(s = n.next()).done;

    )
      l();
    return o;
  },
  tF =
    /** @class */
    /* @__PURE__ */ (function () {
      function e(r, n, o) {
        (this.text = rF(n.data, o.textTransform)),
          (this.textBounds = YU(r, this.text, o, n));
      }
      return e;
    })(),
  rF = function (e, r) {
    switch (r) {
      case 1:
        return e.toLowerCase();
      case 3:
        return e.replace(nF, oF);
      case 2:
        return e.toUpperCase();
      default:
        return e;
    }
  },
  nF = /(^|\s|:|-|\(|\))([a-z])/g,
  oF = function (e, r, n) {
    return e.length > 0 ? r + n.toUpperCase() : e;
  },
  pw =
    /** @class */
    (function (e) {
      et(r, e);
      function r(n, o) {
        var s = e.call(this, n, o) || this;
        return (
          (s.src = o.currentSrc || o.src),
          (s.intrinsicWidth = o.naturalWidth),
          (s.intrinsicHeight = o.naturalHeight),
          s.context.cache.addImage(s.src),
          s
        );
      }
      return r;
    })(dt),
  ww =
    /** @class */
    (function (e) {
      et(r, e);
      function r(n, o) {
        var s = e.call(this, n, o) || this;
        return (
          (s.canvas = o),
          (s.intrinsicWidth = o.width),
          (s.intrinsicHeight = o.height),
          s
        );
      }
      return r;
    })(dt),
  hw =
    /** @class */
    (function (e) {
      et(r, e);
      function r(n, o) {
        var s = e.call(this, n, o) || this,
          l = new XMLSerializer(),
          c = aa(n, o);
        return (
          o.setAttribute("width", c.width + "px"),
          o.setAttribute("height", c.height + "px"),
          (s.svg =
            "data:image/svg+xml," + encodeURIComponent(l.serializeToString(o))),
          (s.intrinsicWidth = o.width.baseVal.value),
          (s.intrinsicHeight = o.height.baseVal.value),
          s.context.cache.addImage(s.svg),
          s
        );
      }
      return r;
    })(dt),
  vw =
    /** @class */
    (function (e) {
      et(r, e);
      function r(n, o) {
        var s = e.call(this, n, o) || this;
        return (s.value = o.value), s;
      }
      return r;
    })(dt),
  Bc =
    /** @class */
    (function (e) {
      et(r, e);
      function r(n, o) {
        var s = e.call(this, n, o) || this;
        return (
          (s.start = o.start),
          (s.reversed = typeof o.reversed == "boolean" && o.reversed === !0),
          s
        );
      }
      return r;
    })(dt),
  iF = [
    {
      type: 15,
      flags: 0,
      unit: "px",
      number: 3,
    },
  ],
  sF = [
    {
      type: 16,
      flags: 0,
      number: 50,
    },
  ],
  aF = function (e) {
    return e.width > e.height
      ? new xt(e.left + (e.width - e.height) / 2, e.top, e.height, e.height)
      : e.width < e.height
        ? new xt(e.left, e.top + (e.height - e.width) / 2, e.width, e.width)
        : e;
  },
  lF = function (e) {
    var r = e.type === uF ? new Array(e.value.length + 1).join("•") : e.value;
    return r.length === 0 ? e.placeholder || "" : r;
  },
  Js = "checkbox",
  Ys = "radio",
  uF = "password",
  jg = 707406591,
  Nc =
    /** @class */
    (function (e) {
      et(r, e);
      function r(n, o) {
        var s = e.call(this, n, o) || this;
        switch (
          ((s.type = o.type.toLowerCase()),
          (s.checked = o.checked),
          (s.value = lF(o)),
          (s.type === Js || s.type === Ys) &&
            ((s.styles.backgroundColor = 3739148031),
            (s.styles.borderTopColor =
              s.styles.borderRightColor =
              s.styles.borderBottomColor =
              s.styles.borderLeftColor =
                2779096575),
            (s.styles.borderTopWidth =
              s.styles.borderRightWidth =
              s.styles.borderBottomWidth =
              s.styles.borderLeftWidth =
                1),
            (s.styles.borderTopStyle =
              s.styles.borderRightStyle =
              s.styles.borderBottomStyle =
              s.styles.borderLeftStyle =
                1),
            (s.styles.backgroundClip = [
              0,
              /* BORDER_BOX */
            ]),
            (s.styles.backgroundOrigin = [
              0,
              /* BORDER_BOX */
            ]),
            (s.bounds = aF(s.bounds))),
          s.type)
        ) {
          case Js:
            s.styles.borderTopRightRadius =
              s.styles.borderTopLeftRadius =
              s.styles.borderBottomRightRadius =
              s.styles.borderBottomLeftRadius =
                iF;
            break;
          case Ys:
            s.styles.borderTopRightRadius =
              s.styles.borderTopLeftRadius =
              s.styles.borderBottomRightRadius =
              s.styles.borderBottomLeftRadius =
                sF;
            break;
        }
        return s;
      }
      return r;
    })(dt),
  mw =
    /** @class */
    (function (e) {
      et(r, e);
      function r(n, o) {
        var s = e.call(this, n, o) || this,
          l = o.options[o.selectedIndex || 0];
        return (s.value = (l && l.text) || ""), s;
      }
      return r;
    })(dt),
  Cw =
    /** @class */
    (function (e) {
      et(r, e);
      function r(n, o) {
        var s = e.call(this, n, o) || this;
        return (s.value = o.value), s;
      }
      return r;
    })(dt),
  Qw =
    /** @class */
    (function (e) {
      et(r, e);
      function r(n, o) {
        var s = e.call(this, n, o) || this;
        (s.src = o.src),
          (s.width = parseInt(o.width, 10) || 0),
          (s.height = parseInt(o.height, 10) || 0),
          (s.backgroundColor = s.styles.backgroundColor);
        try {
          if (
            o.contentWindow &&
            o.contentWindow.document &&
            o.contentWindow.document.documentElement
          ) {
            s.tree = Uw(n, o.contentWindow.document.documentElement);
            var l = o.contentWindow.document.documentElement
                ? No(
                    n,
                    getComputedStyle(o.contentWindow.document.documentElement)
                      .backgroundColor,
                  )
                : Et.TRANSPARENT,
              c = o.contentWindow.document.body
                ? No(
                    n,
                    getComputedStyle(o.contentWindow.document.body)
                      .backgroundColor,
                  )
                : Et.TRANSPARENT;
            s.backgroundColor = ar(l)
              ? ar(c)
                ? s.styles.backgroundColor
                : c
              : l;
          }
        } catch {}
        return s;
      }
      return r;
    })(dt),
  cF = ["OL", "UL", "MENU"],
  Ns = function (e, r, n, o) {
    for (var s = r.firstChild, l = void 0; s; s = l)
      if (((l = s.nextSibling), Fw(s) && s.data.trim().length > 0))
        n.textNodes.push(new tF(e, s, n.styles));
      else if (Un(s))
        if (Hw(s) && s.assignedNodes)
          s.assignedNodes().forEach(function (f) {
            return Ns(e, f, n, o);
          });
        else {
          var c = yw(e, s);
          c.styles.isVisible() &&
            (fF(s, c, o) ? (c.flags |= 4) : dF(c.styles) && (c.flags |= 2),
            cF.indexOf(s.tagName) !== -1 && (c.flags |= 8),
            n.elements.push(c),
            s.slot,
            s.shadowRoot
              ? Ns(e, s.shadowRoot, c, o)
              : !Zs(s) && !Ew(s) && !$s(s) && Ns(e, s, c, o));
        }
  },
  yw = function (e, r) {
    return pc(r)
      ? new pw(e, r)
      : xw(r)
        ? new ww(e, r)
        : Ew(r)
          ? new hw(e, r)
          : BF(r)
            ? new vw(e, r)
            : gF(r)
              ? new Bc(e, r)
              : pF(r)
                ? new Nc(e, r)
                : $s(r)
                  ? new mw(e, r)
                  : Zs(r)
                    ? new Cw(e, r)
                    : Iw(r)
                      ? new Qw(e, r)
                      : new dt(e, r);
  },
  Uw = function (e, r) {
    var n = yw(e, r);
    return (n.flags |= 4), Ns(e, r, n, n), n;
  },
  fF = function (e, r, n) {
    return (
      r.styles.isPositionedWithZIndex() ||
      r.styles.opacity < 1 ||
      r.styles.isTransformed() ||
      (Mc(e) && n.styles.isTransparent())
    );
  },
  dF = function (e) {
    return e.isPositioned() || e.isFloating();
  },
  Fw = function (e) {
    return e.nodeType === Node.TEXT_NODE;
  },
  Un = function (e) {
    return e.nodeType === Node.ELEMENT_NODE;
  },
  gc = function (e) {
    return Un(e) && typeof e.style < "u" && !Ms(e);
  },
  Ms = function (e) {
    return typeof e.className == "object";
  },
  BF = function (e) {
    return e.tagName === "LI";
  },
  gF = function (e) {
    return e.tagName === "OL";
  },
  pF = function (e) {
    return e.tagName === "INPUT";
  },
  wF = function (e) {
    return e.tagName === "HTML";
  },
  Ew = function (e) {
    return e.tagName === "svg";
  },
  Mc = function (e) {
    return e.tagName === "BODY";
  },
  xw = function (e) {
    return e.tagName === "CANVAS";
  },
  Xg = function (e) {
    return e.tagName === "VIDEO";
  },
  pc = function (e) {
    return e.tagName === "IMG";
  },
  Iw = function (e) {
    return e.tagName === "IFRAME";
  },
  zg = function (e) {
    return e.tagName === "STYLE";
  },
  hF = function (e) {
    return e.tagName === "SCRIPT";
  },
  Zs = function (e) {
    return e.tagName === "TEXTAREA";
  },
  $s = function (e) {
    return e.tagName === "SELECT";
  },
  Hw = function (e) {
    return e.tagName === "SLOT";
  },
  Jg = function (e) {
    return e.tagName.indexOf("-") > 0;
  },
  vF =
    /** @class */
    (function () {
      function e() {
        this.counters = {};
      }
      return (
        (e.prototype.getCounterValue = function (r) {
          var n = this.counters[r];
          return n && n.length ? n[n.length - 1] : 1;
        }),
        (e.prototype.getCounterValues = function (r) {
          var n = this.counters[r];
          return n || [];
        }),
        (e.prototype.pop = function (r) {
          var n = this;
          r.forEach(function (o) {
            return n.counters[o].pop();
          });
        }),
        (e.prototype.parse = function (r) {
          var n = this,
            o = r.counterIncrement,
            s = r.counterReset,
            l = !0;
          o !== null &&
            o.forEach(function (f) {
              var B = n.counters[f.counter];
              B &&
                f.increment !== 0 &&
                ((l = !1),
                B.length || B.push(1),
                (B[Math.max(0, B.length - 1)] += f.increment));
            });
          var c = [];
          return (
            l &&
              s.forEach(function (f) {
                var B = n.counters[f.counter];
                c.push(f.counter),
                  B || (B = n.counters[f.counter] = []),
                  B.push(f.reset);
              }),
            c
          );
        }),
        e
      );
    })(),
  Yg = {
    integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    values: [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ],
  },
  Zg = {
    integers: [
      9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400,
      300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2,
      1,
    ],
    values: [
      "Ք",
      "Փ",
      "Ւ",
      "Ց",
      "Ր",
      "Տ",
      "Վ",
      "Ս",
      "Ռ",
      "Ջ",
      "Պ",
      "Չ",
      "Ո",
      "Շ",
      "Ն",
      "Յ",
      "Մ",
      "Ճ",
      "Ղ",
      "Ձ",
      "Հ",
      "Կ",
      "Ծ",
      "Խ",
      "Լ",
      "Ի",
      "Ժ",
      "Թ",
      "Ը",
      "Է",
      "Զ",
      "Ե",
      "Դ",
      "Գ",
      "Բ",
      "Ա",
    ],
  },
  mF = {
    integers: [
      1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90,
      80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3,
      2, 1,
    ],
    values: [
      "י׳",
      "ט׳",
      "ח׳",
      "ז׳",
      "ו׳",
      "ה׳",
      "ד׳",
      "ג׳",
      "ב׳",
      "א׳",
      "ת",
      "ש",
      "ר",
      "ק",
      "צ",
      "פ",
      "ע",
      "ס",
      "נ",
      "מ",
      "ל",
      "כ",
      "יט",
      "יח",
      "יז",
      "טז",
      "טו",
      "י",
      "ט",
      "ח",
      "ז",
      "ו",
      "ה",
      "ד",
      "ג",
      "ב",
      "א",
    ],
  },
  CF = {
    integers: [
      1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500,
      400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4,
      3, 2, 1,
    ],
    values: [
      "ჵ",
      "ჰ",
      "ჯ",
      "ჴ",
      "ხ",
      "ჭ",
      "წ",
      "ძ",
      "ც",
      "ჩ",
      "შ",
      "ყ",
      "ღ",
      "ქ",
      "ფ",
      "ჳ",
      "ტ",
      "ს",
      "რ",
      "ჟ",
      "პ",
      "ო",
      "ჲ",
      "ნ",
      "მ",
      "ლ",
      "კ",
      "ი",
      "თ",
      "ჱ",
      "ზ",
      "ვ",
      "ე",
      "დ",
      "გ",
      "ბ",
      "ა",
    ],
  },
  pn = function (e, r, n, o, s, l) {
    return e < r || e > n
      ? Wo(e, s, l.length > 0)
      : o.integers.reduce(function (c, f, B) {
          for (; e >= f; ) (e -= f), (c += o.values[B]);
          return c;
        }, "") + l;
  },
  Sw = function (e, r, n, o) {
    var s = "";
    do n || e--, (s = o(e) + s), (e /= r);
    while (e * r >= r);
    return s;
  },
  jA = function (e, r, n, o, s) {
    var l = n - r + 1;
    return (
      (e < 0 ? "-" : "") +
      (Sw(Math.abs(e), l, o, function (c) {
        return XA(Math.floor(c % l) + r);
      }) +
        s)
    );
  },
  Hr = function (e, r, n) {
    n === void 0 && (n = ". ");
    var o = r.length;
    return (
      Sw(Math.abs(e), o, !1, function (s) {
        return r[Math.floor(s % o)];
      }) + n
    );
  },
  Qn = 1,
  Ar = 2,
  er = 4,
  ko = 8,
  yt = function (e, r, n, o, s, l) {
    if (e < -9999 || e > 9999) return Wo(e, 4, s.length > 0);
    var c = Math.abs(e),
      f = s;
    if (c === 0) return r[0] + f;
    for (var B = 0; c > 0 && B <= 4; B++) {
      var g = c % 10;
      g === 0 && qA(l, Qn) && f !== ""
        ? (f = r[g] + f)
        : g > 1 ||
            (g === 1 && B === 0) ||
            (g === 1 && B === 1 && qA(l, Ar)) ||
            (g === 1 && B === 1 && qA(l, er) && e > 100) ||
            (g === 1 && B > 1 && qA(l, ko))
          ? (f = r[g] + (B > 0 ? n[B - 1] : "") + f)
          : g === 1 && B > 0 && (f = n[B - 1] + f),
        (c = Math.floor(c / 10));
    }
    return (e < 0 ? o : "") + f;
  },
  $g = "十百千萬",
  qg = "拾佰仟萬",
  Ap = "マイナス",
  ku = "마이너스",
  Wo = function (e, r, n) {
    var o = n ? ". " : "",
      s = n ? "、" : "",
      l = n ? ", " : "",
      c = n ? " " : "";
    switch (r) {
      case 0:
        return "•" + c;
      case 1:
        return "◦" + c;
      case 2:
        return "◾" + c;
      case 5:
        var f = jA(e, 48, 57, !0, o);
        return f.length < 4 ? "0" + f : f;
      case 4:
        return Hr(e, "〇一二三四五六七八九", s);
      case 6:
        return pn(e, 1, 3999, Yg, 3, o).toLowerCase();
      case 7:
        return pn(e, 1, 3999, Yg, 3, o);
      case 8:
        return jA(e, 945, 969, !1, o);
      case 9:
        return jA(e, 97, 122, !1, o);
      case 10:
        return jA(e, 65, 90, !1, o);
      case 11:
        return jA(e, 1632, 1641, !0, o);
      case 12:
      case 49:
        return pn(e, 1, 9999, Zg, 3, o);
      case 35:
        return pn(e, 1, 9999, Zg, 3, o).toLowerCase();
      case 13:
        return jA(e, 2534, 2543, !0, o);
      case 14:
      case 30:
        return jA(e, 6112, 6121, !0, o);
      case 15:
        return Hr(e, "子丑寅卯辰巳午未申酉戌亥", s);
      case 16:
        return Hr(e, "甲乙丙丁戊己庚辛壬癸", s);
      case 17:
      case 48:
        return yt(e, "零一二三四五六七八九", $g, "負", s, Ar | er | ko);
      case 47:
        return yt(e, "零壹貳參肆伍陸柒捌玖", qg, "負", s, Qn | Ar | er | ko);
      case 42:
        return yt(e, "零一二三四五六七八九", $g, "负", s, Ar | er | ko);
      case 41:
        return yt(e, "零壹贰叁肆伍陆柒捌玖", qg, "负", s, Qn | Ar | er | ko);
      case 26:
        return yt(e, "〇一二三四五六七八九", "十百千万", Ap, s, 0);
      case 25:
        return yt(e, "零壱弐参四伍六七八九", "拾百千万", Ap, s, Qn | Ar | er);
      case 31:
        return yt(e, "영일이삼사오육칠팔구", "십백천만", ku, l, Qn | Ar | er);
      case 33:
        return yt(e, "零一二三四五六七八九", "十百千萬", ku, l, 0);
      case 32:
        return yt(e, "零壹貳參四五六七八九", "拾百千", ku, l, Qn | Ar | er);
      case 18:
        return jA(e, 2406, 2415, !0, o);
      case 20:
        return pn(e, 1, 19999, CF, 3, o);
      case 21:
        return jA(e, 2790, 2799, !0, o);
      case 22:
        return jA(e, 2662, 2671, !0, o);
      case 22:
        return pn(e, 1, 10999, mF, 3, o);
      case 23:
        return Hr(
          e,
          "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん",
        );
      case 24:
        return Hr(
          e,
          "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす",
        );
      case 27:
        return jA(e, 3302, 3311, !0, o);
      case 28:
        return Hr(
          e,
          "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",
          s,
        );
      case 29:
        return Hr(
          e,
          "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",
          s,
        );
      case 34:
        return jA(e, 3792, 3801, !0, o);
      case 37:
        return jA(e, 6160, 6169, !0, o);
      case 38:
        return jA(e, 4160, 4169, !0, o);
      case 39:
        return jA(e, 2918, 2927, !0, o);
      case 40:
        return jA(e, 1776, 1785, !0, o);
      case 43:
        return jA(e, 3046, 3055, !0, o);
      case 44:
        return jA(e, 3174, 3183, !0, o);
      case 45:
        return jA(e, 3664, 3673, !0, o);
      case 46:
        return jA(e, 3872, 3881, !0, o);
      case 3:
      default:
        return jA(e, 48, 57, !0, o);
    }
  },
  bw = "data-html2canvas-ignore",
  ep =
    /** @class */
    (function () {
      function e(r, n, o) {
        if (
          ((this.context = r),
          (this.options = o),
          (this.scrolledElements = []),
          (this.referenceElement = n),
          (this.counters = new vF()),
          (this.quoteDepth = 0),
          !n.ownerDocument)
        )
          throw new Error("Cloned element does not have an owner document");
        this.documentElement = this.cloneNode(
          n.ownerDocument.documentElement,
          !1,
        );
      }
      return (
        (e.prototype.toIFrame = function (r, n) {
          var o = this,
            s = QF(r, n);
          if (!s.contentWindow)
            return Promise.reject("Unable to find iframe window");
          var l = r.defaultView.pageXOffset,
            c = r.defaultView.pageYOffset,
            f = s.contentWindow,
            B = f.document,
            g = FF(s).then(function () {
              return he(o, void 0, void 0, function () {
                var w, h;
                return Be(this, function (v) {
                  switch (v.label) {
                    case 0:
                      return (
                        this.scrolledElements.forEach(HF),
                        f &&
                          (f.scrollTo(n.left, n.top),
                          /(iPad|iPhone|iPod)/g.test(navigator.userAgent) &&
                            (f.scrollY !== n.top || f.scrollX !== n.left) &&
                            (this.context.logger.warn(
                              "Unable to restore scroll position for cloned document",
                            ),
                            (this.context.windowBounds =
                              this.context.windowBounds.add(
                                f.scrollX - n.left,
                                f.scrollY - n.top,
                                0,
                                0,
                              )))),
                        (w = this.options.onclone),
                        (h = this.clonedReferenceElement),
                        typeof h > "u"
                          ? [
                              2,
                              Promise.reject(
                                "Error finding the " +
                                  this.referenceElement.nodeName +
                                  " in the cloned document",
                              ),
                            ]
                          : B.fonts && B.fonts.ready
                            ? [4, B.fonts.ready]
                            : [3, 2]
                      );
                    case 1:
                      v.sent(), (v.label = 2);
                    case 2:
                      return /(AppleWebKit)/g.test(navigator.userAgent)
                        ? [4, UF(B)]
                        : [3, 4];
                    case 3:
                      v.sent(), (v.label = 4);
                    case 4:
                      return typeof w == "function"
                        ? [
                            2,
                            Promise.resolve()
                              .then(function () {
                                return w(B, h);
                              })
                              .then(function () {
                                return s;
                              }),
                          ]
                        : [2, s];
                  }
                });
              });
            });
          return (
            B.open(),
            B.write(xF(document.doctype) + "<html></html>"),
            IF(this.referenceElement.ownerDocument, l, c),
            B.replaceChild(
              B.adoptNode(this.documentElement),
              B.documentElement,
            ),
            B.close(),
            g
          );
        }),
        (e.prototype.createElementClone = function (r) {
          if (
            fc(
              r,
              2,
              /* CLONE */
            )
          )
            debugger;
          if (xw(r)) return this.createCanvasClone(r);
          if (Xg(r)) return this.createVideoClone(r);
          if (zg(r)) return this.createStyleClone(r);
          var n = r.cloneNode(!1);
          return (
            pc(n) &&
              (pc(r) &&
                r.currentSrc &&
                r.currentSrc !== r.src &&
                ((n.src = r.currentSrc), (n.srcset = "")),
              n.loading === "lazy" && (n.loading = "eager")),
            Jg(n) ? this.createCustomElementClone(n) : n
          );
        }),
        (e.prototype.createCustomElementClone = function (r) {
          var n = document.createElement("html2canvascustomelement");
          return Ru(r.style, n), n;
        }),
        (e.prototype.createStyleClone = function (r) {
          try {
            var n = r.sheet;
            if (n && n.cssRules) {
              var o = [].slice.call(n.cssRules, 0).reduce(function (l, c) {
                  return c && typeof c.cssText == "string" ? l + c.cssText : l;
                }, ""),
                s = r.cloneNode(!1);
              return (s.textContent = o), s;
            }
          } catch (l) {
            if (
              (this.context.logger.error(
                "Unable to access cssRules property",
                l,
              ),
              l.name !== "SecurityError")
            )
              throw l;
          }
          return r.cloneNode(!1);
        }),
        (e.prototype.createCanvasClone = function (r) {
          var n;
          if (this.options.inlineImages && r.ownerDocument) {
            var o = r.ownerDocument.createElement("img");
            try {
              return (o.src = r.toDataURL()), o;
            } catch {
              this.context.logger.info(
                "Unable to inline canvas contents, canvas is tainted",
                r,
              );
            }
          }
          var s = r.cloneNode(!1);
          try {
            (s.width = r.width), (s.height = r.height);
            var l = r.getContext("2d"),
              c = s.getContext("2d");
            if (c)
              if (!this.options.allowTaint && l)
                c.putImageData(l.getImageData(0, 0, r.width, r.height), 0, 0);
              else {
                var f =
                  (n = r.getContext("webgl2")) !== null && n !== void 0
                    ? n
                    : r.getContext("webgl");
                if (f) {
                  var B = f.getContextAttributes();
                  B?.preserveDrawingBuffer === !1 &&
                    this.context.logger.warn(
                      "Unable to clone WebGL context as it has preserveDrawingBuffer=false",
                      r,
                    );
                }
                c.drawImage(r, 0, 0);
              }
            return s;
          } catch {
            this.context.logger.info(
              "Unable to clone canvas as it is tainted",
              r,
            );
          }
          return s;
        }),
        (e.prototype.createVideoClone = function (r) {
          var n = r.ownerDocument.createElement("canvas");
          (n.width = r.offsetWidth), (n.height = r.offsetHeight);
          var o = n.getContext("2d");
          try {
            return (
              o &&
                (o.drawImage(r, 0, 0, n.width, n.height),
                this.options.allowTaint ||
                  o.getImageData(0, 0, n.width, n.height)),
              n
            );
          } catch {
            this.context.logger.info(
              "Unable to clone video as it is tainted",
              r,
            );
          }
          var s = r.ownerDocument.createElement("canvas");
          return (s.width = r.offsetWidth), (s.height = r.offsetHeight), s;
        }),
        (e.prototype.appendChildNode = function (r, n, o) {
          (!Un(n) ||
            (!hF(n) &&
              !n.hasAttribute(bw) &&
              (typeof this.options.ignoreElements != "function" ||
                !this.options.ignoreElements(n)))) &&
            (!this.options.copyStyles || !Un(n) || !zg(n)) &&
            r.appendChild(this.cloneNode(n, o));
        }),
        (e.prototype.cloneChildNodes = function (r, n, o) {
          for (
            var s = this,
              l = r.shadowRoot ? r.shadowRoot.firstChild : r.firstChild;
            l;
            l = l.nextSibling
          )
            if (Un(l) && Hw(l) && typeof l.assignedNodes == "function") {
              var c = l.assignedNodes();
              c.length &&
                c.forEach(function (f) {
                  return s.appendChildNode(n, f, o);
                });
            } else this.appendChildNode(n, l, o);
        }),
        (e.prototype.cloneNode = function (r, n) {
          if (Fw(r)) return document.createTextNode(r.data);
          if (!r.ownerDocument) return r.cloneNode(!1);
          var o = r.ownerDocument.defaultView;
          if (o && Un(r) && (gc(r) || Ms(r))) {
            var s = this.createElementClone(r);
            s.style.transitionProperty = "none";
            var l = o.getComputedStyle(r),
              c = o.getComputedStyle(r, ":before"),
              f = o.getComputedStyle(r, ":after");
            this.referenceElement === r &&
              gc(s) &&
              (this.clonedReferenceElement = s),
              Mc(s) && LF(s);
            var B = this.counters.parse(new Lg(this.context, l)),
              g = this.resolvePseudoContent(r, s, c, _o.BEFORE);
            Jg(r) && (n = !0),
              Xg(r) || this.cloneChildNodes(r, s, n),
              g && s.insertBefore(g, s.firstChild);
            var w = this.resolvePseudoContent(r, s, f, _o.AFTER);
            return (
              w && s.appendChild(w),
              this.counters.pop(B),
              ((l && (this.options.copyStyles || Ms(r)) && !Iw(r)) || n) &&
                Ru(l, s),
              (r.scrollTop !== 0 || r.scrollLeft !== 0) &&
                this.scrolledElements.push([s, r.scrollLeft, r.scrollTop]),
              (Zs(r) || $s(r)) && (Zs(s) || $s(s)) && (s.value = r.value),
              s
            );
          }
          return r.cloneNode(!1);
        }),
        (e.prototype.resolvePseudoContent = function (r, n, o, s) {
          var l = this;
          if (o) {
            var c = o.content,
              f = n.ownerDocument;
            if (
              !(
                !f ||
                !c ||
                c === "none" ||
                c === "-moz-alt-content" ||
                o.display === "none"
              )
            ) {
              this.counters.parse(new Lg(this.context, o));
              var B = new BU(this.context, o),
                g = f.createElement("html2canvaspseudoelement");
              Ru(o, g),
                B.content.forEach(function (h) {
                  if (h.type === 0) g.appendChild(f.createTextNode(h.value));
                  else if (h.type === 22) {
                    var v = f.createElement("img");
                    (v.src = h.value),
                      (v.style.opacity = "1"),
                      g.appendChild(v);
                  } else if (h.type === 18) {
                    if (h.name === "attr") {
                      var U = h.values.filter(SA);
                      U.length &&
                        g.appendChild(
                          f.createTextNode(r.getAttribute(U[0].value) || ""),
                        );
                    } else if (h.name === "counter") {
                      var Q = h.values.filter(Sn),
                        m = Q[0],
                        F = Q[1];
                      if (m && SA(m)) {
                        var E = l.counters.getCounterValue(m.value),
                          I = F && SA(F) ? cc.parse(l.context, F.value) : 3;
                        g.appendChild(f.createTextNode(Wo(E, I, !1)));
                      }
                    } else if (h.name === "counters") {
                      var R = h.values.filter(Sn),
                        m = R[0],
                        T = R[1],
                        F = R[2];
                      if (m && SA(m)) {
                        var k = l.counters.getCounterValues(m.value),
                          O = F && SA(F) ? cc.parse(l.context, F.value) : 3,
                          M = T && T.type === 0 ? T.value : "",
                          X = k
                            .map(function (dA) {
                              return Wo(dA, O, !1);
                            })
                            .join(M);
                        g.appendChild(f.createTextNode(X));
                      }
                    }
                  } else if (h.type === 20)
                    switch (h.value) {
                      case "open-quote":
                        g.appendChild(
                          f.createTextNode(bg(B.quotes, l.quoteDepth++, !0)),
                        );
                        break;
                      case "close-quote":
                        g.appendChild(
                          f.createTextNode(bg(B.quotes, --l.quoteDepth, !1)),
                        );
                        break;
                      default:
                        g.appendChild(f.createTextNode(h.value));
                    }
                }),
                (g.className = wc + " " + hc);
              var w = s === _o.BEFORE ? " " + wc : " " + hc;
              return (
                Ms(n) ? (n.className.baseValue += w) : (n.className += w), g
              );
            }
          }
        }),
        (e.destroy = function (r) {
          return r.parentNode ? (r.parentNode.removeChild(r), !0) : !1;
        }),
        e
      );
    })(),
  _o;
(function (e) {
  (e[(e.BEFORE = 0)] = "BEFORE"), (e[(e.AFTER = 1)] = "AFTER");
})(_o || (_o = {}));
var QF = function (e, r) {
    var n = e.createElement("iframe");
    return (
      (n.className = "html2canvas-container"),
      (n.style.visibility = "hidden"),
      (n.style.position = "fixed"),
      (n.style.left = "-10000px"),
      (n.style.top = "0px"),
      (n.style.border = "0"),
      (n.width = r.width.toString()),
      (n.height = r.height.toString()),
      (n.scrolling = "no"),
      n.setAttribute(bw, "true"),
      e.body.appendChild(n),
      n
    );
  },
  yF = function (e) {
    return new Promise(function (r) {
      if (e.complete) {
        r();
        return;
      }
      if (!e.src) {
        r();
        return;
      }
      (e.onload = r), (e.onerror = r);
    });
  },
  UF = function (e) {
    return Promise.all([].slice.call(e.images, 0).map(yF));
  },
  FF = function (e) {
    return new Promise(function (r, n) {
      var o = e.contentWindow;
      if (!o) return n("No window assigned for iframe");
      var s = o.document;
      o.onload = e.onload = function () {
        o.onload = e.onload = null;
        var l = setInterval(function () {
          s.body.childNodes.length > 0 &&
            s.readyState === "complete" &&
            (clearInterval(l), r(e));
        }, 50);
      };
    });
  },
  EF = [
    "all",
    "d",
    "content",
    // Safari shows pseudoelements if content is set
  ],
  Ru = function (e, r) {
    for (var n = e.length - 1; n >= 0; n--) {
      var o = e.item(n);
      EF.indexOf(o) === -1 && r.style.setProperty(o, e.getPropertyValue(o));
    }
    return r;
  },
  xF = function (e) {
    var r = "";
    return (
      e &&
        ((r += "<!DOCTYPE "),
        e.name && (r += e.name),
        e.internalSubset && (r += e.internalSubset),
        e.publicId && (r += '"' + e.publicId + '"'),
        e.systemId && (r += '"' + e.systemId + '"'),
        (r += ">")),
      r
    );
  },
  IF = function (e, r, n) {
    e &&
      e.defaultView &&
      (r !== e.defaultView.pageXOffset || n !== e.defaultView.pageYOffset) &&
      e.defaultView.scrollTo(r, n);
  },
  HF = function (e) {
    var r = e[0],
      n = e[1],
      o = e[2];
    (r.scrollLeft = n), (r.scrollTop = o);
  },
  SF = ":before",
  bF = ":after",
  wc = "___html2canvas___pseudoelement_before",
  hc = "___html2canvas___pseudoelement_after",
  tp = `{
    content: "" !important;
    display: none !important;
}`,
  LF = function (e) {
    TF(
      e,
      "." +
        wc +
        SF +
        tp +
        `
         .` +
        hc +
        bF +
        tp,
    );
  },
  TF = function (e, r) {
    var n = e.ownerDocument;
    if (n) {
      var o = n.createElement("style");
      (o.textContent = r), e.appendChild(o);
    }
  },
  Lw =
    /** @class */
    (function () {
      function e() {}
      return (
        (e.getOrigin = function (r) {
          var n = e._link;
          return n
            ? ((n.href = r),
              (n.href = n.href),
              n.protocol + n.hostname + n.port)
            : "about:blank";
        }),
        (e.isSameOrigin = function (r) {
          return e.getOrigin(r) === e._origin;
        }),
        (e.setContext = function (r) {
          (e._link = r.document.createElement("a")),
            (e._origin = e.getOrigin(r.location.href));
        }),
        (e._origin = "about:blank"),
        e
      );
    })(),
  DF =
    /** @class */
    (function () {
      function e(r, n) {
        (this.context = r), (this._options = n), (this._cache = {});
      }
      return (
        (e.prototype.addImage = function (r) {
          var n = Promise.resolve();
          return (
            this.has(r) ||
              ((Nu(r) || OF(r)) &&
                (this._cache[r] = this.loadImage(r)).catch(function () {})),
            n
          );
        }),
        (e.prototype.match = function (r) {
          return this._cache[r];
        }),
        (e.prototype.loadImage = function (r) {
          return he(this, void 0, void 0, function () {
            var n,
              o,
              s,
              l,
              c = this;
            return Be(this, function (f) {
              switch (f.label) {
                case 0:
                  return (
                    (n = Lw.isSameOrigin(r)),
                    (o =
                      !Ou(r) &&
                      this._options.useCORS === !0 &&
                      ae.SUPPORT_CORS_IMAGES &&
                      !n),
                    (s =
                      !Ou(r) &&
                      !n &&
                      !Nu(r) &&
                      typeof this._options.proxy == "string" &&
                      ae.SUPPORT_CORS_XHR &&
                      !o),
                    !n &&
                    this._options.allowTaint === !1 &&
                    !Ou(r) &&
                    !Nu(r) &&
                    !s &&
                    !o
                      ? [
                          2,
                          /*return*/
                        ]
                      : ((l = r), s ? [4, this.proxy(l)] : [3, 2])
                  );
                case 1:
                  (l = f.sent()), (f.label = 2);
                case 2:
                  return (
                    this.context.logger.debug(
                      "Added image " + r.substring(0, 256),
                    ),
                    [
                      4,
                      new Promise(function (B, g) {
                        var w = new Image();
                        (w.onload = function () {
                          return B(w);
                        }),
                          (w.onerror = g),
                          (NF(l) || o) && (w.crossOrigin = "anonymous"),
                          (w.src = l),
                          w.complete === !0 &&
                            setTimeout(function () {
                              return B(w);
                            }, 500),
                          c._options.imageTimeout > 0 &&
                            setTimeout(function () {
                              return g(
                                "Timed out (" +
                                  c._options.imageTimeout +
                                  "ms) loading image",
                              );
                            }, c._options.imageTimeout);
                      }),
                    ]
                  );
                case 3:
                  return [2, f.sent()];
              }
            });
          });
        }),
        (e.prototype.has = function (r) {
          return typeof this._cache[r] < "u";
        }),
        (e.prototype.keys = function () {
          return Promise.resolve(Object.keys(this._cache));
        }),
        (e.prototype.proxy = function (r) {
          var n = this,
            o = this._options.proxy;
          if (!o) throw new Error("No proxy defined");
          var s = r.substring(0, 256);
          return new Promise(function (l, c) {
            var f = ae.SUPPORT_RESPONSE_TYPE ? "blob" : "text",
              B = new XMLHttpRequest();
            (B.onload = function () {
              if (B.status === 200)
                if (f === "text") l(B.response);
                else {
                  var h = new FileReader();
                  h.addEventListener(
                    "load",
                    function () {
                      return l(h.result);
                    },
                    !1,
                  ),
                    h.addEventListener(
                      "error",
                      function (v) {
                        return c(v);
                      },
                      !1,
                    ),
                    h.readAsDataURL(B.response);
                }
              else
                c(
                  "Failed to proxy resource " +
                    s +
                    " with status code " +
                    B.status,
                );
            }),
              (B.onerror = c);
            var g = o.indexOf("?") > -1 ? "&" : "?";
            if (
              (B.open(
                "GET",
                "" +
                  o +
                  g +
                  "url=" +
                  encodeURIComponent(r) +
                  "&responseType=" +
                  f,
              ),
              f !== "text" &&
                B instanceof XMLHttpRequest &&
                (B.responseType = f),
              n._options.imageTimeout)
            ) {
              var w = n._options.imageTimeout;
              (B.timeout = w),
                (B.ontimeout = function () {
                  return c("Timed out (" + w + "ms) proxying " + s);
                });
            }
            B.send();
          });
        }),
        e
      );
    })(),
  KF = /^data:image\/svg\+xml/i,
  kF = /^data:image\/.*;base64,/i,
  RF = /^data:image\/.*/i,
  OF = function (e) {
    return ae.SUPPORT_SVG_DRAWING || !MF(e);
  },
  Ou = function (e) {
    return RF.test(e);
  },
  NF = function (e) {
    return kF.test(e);
  },
  Nu = function (e) {
    return e.substr(0, 4) === "blob";
  },
  MF = function (e) {
    return e.substr(-3).toLowerCase() === "svg" || KF.test(e);
  },
  AA =
    /** @class */
    (function () {
      function e(r, n) {
        (this.type = 0), (this.x = r), (this.y = n);
      }
      return (
        (e.prototype.add = function (r, n) {
          return new e(this.x + r, this.y + n);
        }),
        e
      );
    })(),
  wn = function (e, r, n) {
    return new AA(e.x + (r.x - e.x) * n, e.y + (r.y - e.y) * n);
  },
  Es =
    /** @class */
    (function () {
      function e(r, n, o, s) {
        (this.type = 1),
          (this.start = r),
          (this.startControl = n),
          (this.endControl = o),
          (this.end = s);
      }
      return (
        (e.prototype.subdivide = function (r, n) {
          var o = wn(this.start, this.startControl, r),
            s = wn(this.startControl, this.endControl, r),
            l = wn(this.endControl, this.end, r),
            c = wn(o, s, r),
            f = wn(s, l, r),
            B = wn(c, f, r);
          return n ? new e(this.start, o, c, B) : new e(B, f, l, this.end);
        }),
        (e.prototype.add = function (r, n) {
          return new e(
            this.start.add(r, n),
            this.startControl.add(r, n),
            this.endControl.add(r, n),
            this.end.add(r, n),
          );
        }),
        (e.prototype.reverse = function () {
          return new e(
            this.end,
            this.endControl,
            this.startControl,
            this.start,
          );
        }),
        e
      );
    })(),
  Pe = function (e) {
    return e.type === 1;
  },
  PF =
    /** @class */
    /* @__PURE__ */ (function () {
      function e(r) {
        var n = r.styles,
          o = r.bounds,
          s = Do(n.borderTopLeftRadius, o.width, o.height),
          l = s[0],
          c = s[1],
          f = Do(n.borderTopRightRadius, o.width, o.height),
          B = f[0],
          g = f[1],
          w = Do(n.borderBottomRightRadius, o.width, o.height),
          h = w[0],
          v = w[1],
          U = Do(n.borderBottomLeftRadius, o.width, o.height),
          Q = U[0],
          m = U[1],
          F = [];
        F.push((l + B) / o.width),
          F.push((Q + h) / o.width),
          F.push((c + m) / o.height),
          F.push((g + v) / o.height);
        var E = Math.max.apply(Math, F);
        E > 1 &&
          ((l /= E),
          (c /= E),
          (B /= E),
          (g /= E),
          (h /= E),
          (v /= E),
          (Q /= E),
          (m /= E));
        var I = o.width - B,
          R = o.height - v,
          T = o.width - h,
          k = o.height - m,
          O = n.borderTopWidth,
          M = n.borderRightWidth,
          X = n.borderBottomWidth,
          z = n.borderLeftWidth,
          nA = LA(n.paddingTop, r.bounds.width),
          dA = LA(n.paddingRight, r.bounds.width),
          V = LA(n.paddingBottom, r.bounds.width),
          q = LA(n.paddingLeft, r.bounds.width);
        (this.topLeftBorderDoubleOuterBox =
          l > 0 || c > 0
            ? OA(
                o.left + z / 3,
                o.top + O / 3,
                l - z / 3,
                c - O / 3,
                xA.TOP_LEFT,
              )
            : new AA(o.left + z / 3, o.top + O / 3)),
          (this.topRightBorderDoubleOuterBox =
            l > 0 || c > 0
              ? OA(
                  o.left + I,
                  o.top + O / 3,
                  B - M / 3,
                  g - O / 3,
                  xA.TOP_RIGHT,
                )
              : new AA(o.left + o.width - M / 3, o.top + O / 3)),
          (this.bottomRightBorderDoubleOuterBox =
            h > 0 || v > 0
              ? OA(o.left + T, o.top + R, h - M / 3, v - X / 3, xA.BOTTOM_RIGHT)
              : new AA(o.left + o.width - M / 3, o.top + o.height - X / 3)),
          (this.bottomLeftBorderDoubleOuterBox =
            Q > 0 || m > 0
              ? OA(
                  o.left + z / 3,
                  o.top + k,
                  Q - z / 3,
                  m - X / 3,
                  xA.BOTTOM_LEFT,
                )
              : new AA(o.left + z / 3, o.top + o.height - X / 3)),
          (this.topLeftBorderDoubleInnerBox =
            l > 0 || c > 0
              ? OA(
                  o.left + (z * 2) / 3,
                  o.top + (O * 2) / 3,
                  l - (z * 2) / 3,
                  c - (O * 2) / 3,
                  xA.TOP_LEFT,
                )
              : new AA(o.left + (z * 2) / 3, o.top + (O * 2) / 3)),
          (this.topRightBorderDoubleInnerBox =
            l > 0 || c > 0
              ? OA(
                  o.left + I,
                  o.top + (O * 2) / 3,
                  B - (M * 2) / 3,
                  g - (O * 2) / 3,
                  xA.TOP_RIGHT,
                )
              : new AA(o.left + o.width - (M * 2) / 3, o.top + (O * 2) / 3)),
          (this.bottomRightBorderDoubleInnerBox =
            h > 0 || v > 0
              ? OA(
                  o.left + T,
                  o.top + R,
                  h - (M * 2) / 3,
                  v - (X * 2) / 3,
                  xA.BOTTOM_RIGHT,
                )
              : new AA(
                  o.left + o.width - (M * 2) / 3,
                  o.top + o.height - (X * 2) / 3,
                )),
          (this.bottomLeftBorderDoubleInnerBox =
            Q > 0 || m > 0
              ? OA(
                  o.left + (z * 2) / 3,
                  o.top + k,
                  Q - (z * 2) / 3,
                  m - (X * 2) / 3,
                  xA.BOTTOM_LEFT,
                )
              : new AA(o.left + (z * 2) / 3, o.top + o.height - (X * 2) / 3)),
          (this.topLeftBorderStroke =
            l > 0 || c > 0
              ? OA(
                  o.left + z / 2,
                  o.top + O / 2,
                  l - z / 2,
                  c - O / 2,
                  xA.TOP_LEFT,
                )
              : new AA(o.left + z / 2, o.top + O / 2)),
          (this.topRightBorderStroke =
            l > 0 || c > 0
              ? OA(
                  o.left + I,
                  o.top + O / 2,
                  B - M / 2,
                  g - O / 2,
                  xA.TOP_RIGHT,
                )
              : new AA(o.left + o.width - M / 2, o.top + O / 2)),
          (this.bottomRightBorderStroke =
            h > 0 || v > 0
              ? OA(o.left + T, o.top + R, h - M / 2, v - X / 2, xA.BOTTOM_RIGHT)
              : new AA(o.left + o.width - M / 2, o.top + o.height - X / 2)),
          (this.bottomLeftBorderStroke =
            Q > 0 || m > 0
              ? OA(
                  o.left + z / 2,
                  o.top + k,
                  Q - z / 2,
                  m - X / 2,
                  xA.BOTTOM_LEFT,
                )
              : new AA(o.left + z / 2, o.top + o.height - X / 2)),
          (this.topLeftBorderBox =
            l > 0 || c > 0
              ? OA(o.left, o.top, l, c, xA.TOP_LEFT)
              : new AA(o.left, o.top)),
          (this.topRightBorderBox =
            B > 0 || g > 0
              ? OA(o.left + I, o.top, B, g, xA.TOP_RIGHT)
              : new AA(o.left + o.width, o.top)),
          (this.bottomRightBorderBox =
            h > 0 || v > 0
              ? OA(o.left + T, o.top + R, h, v, xA.BOTTOM_RIGHT)
              : new AA(o.left + o.width, o.top + o.height)),
          (this.bottomLeftBorderBox =
            Q > 0 || m > 0
              ? OA(o.left, o.top + k, Q, m, xA.BOTTOM_LEFT)
              : new AA(o.left, o.top + o.height)),
          (this.topLeftPaddingBox =
            l > 0 || c > 0
              ? OA(
                  o.left + z,
                  o.top + O,
                  Math.max(0, l - z),
                  Math.max(0, c - O),
                  xA.TOP_LEFT,
                )
              : new AA(o.left + z, o.top + O)),
          (this.topRightPaddingBox =
            B > 0 || g > 0
              ? OA(
                  o.left + Math.min(I, o.width - M),
                  o.top + O,
                  I > o.width + M ? 0 : Math.max(0, B - M),
                  Math.max(0, g - O),
                  xA.TOP_RIGHT,
                )
              : new AA(o.left + o.width - M, o.top + O)),
          (this.bottomRightPaddingBox =
            h > 0 || v > 0
              ? OA(
                  o.left + Math.min(T, o.width - z),
                  o.top + Math.min(R, o.height - X),
                  Math.max(0, h - M),
                  Math.max(0, v - X),
                  xA.BOTTOM_RIGHT,
                )
              : new AA(o.left + o.width - M, o.top + o.height - X)),
          (this.bottomLeftPaddingBox =
            Q > 0 || m > 0
              ? OA(
                  o.left + z,
                  o.top + Math.min(k, o.height - X),
                  Math.max(0, Q - z),
                  Math.max(0, m - X),
                  xA.BOTTOM_LEFT,
                )
              : new AA(o.left + z, o.top + o.height - X)),
          (this.topLeftContentBox =
            l > 0 || c > 0
              ? OA(
                  o.left + z + q,
                  o.top + O + nA,
                  Math.max(0, l - (z + q)),
                  Math.max(0, c - (O + nA)),
                  xA.TOP_LEFT,
                )
              : new AA(o.left + z + q, o.top + O + nA)),
          (this.topRightContentBox =
            B > 0 || g > 0
              ? OA(
                  o.left + Math.min(I, o.width + z + q),
                  o.top + O + nA,
                  I > o.width + z + q ? 0 : B - z + q,
                  g - (O + nA),
                  xA.TOP_RIGHT,
                )
              : new AA(o.left + o.width - (M + dA), o.top + O + nA)),
          (this.bottomRightContentBox =
            h > 0 || v > 0
              ? OA(
                  o.left + Math.min(T, o.width - (z + q)),
                  o.top + Math.min(R, o.height + O + nA),
                  Math.max(0, h - (M + dA)),
                  v - (X + V),
                  xA.BOTTOM_RIGHT,
                )
              : new AA(
                  o.left + o.width - (M + dA),
                  o.top + o.height - (X + V),
                )),
          (this.bottomLeftContentBox =
            Q > 0 || m > 0
              ? OA(
                  o.left + z + q,
                  o.top + k,
                  Math.max(0, Q - (z + q)),
                  m - (X + V),
                  xA.BOTTOM_LEFT,
                )
              : new AA(o.left + z + q, o.top + o.height - (X + V)));
      }
      return e;
    })(),
  xA;
(function (e) {
  (e[(e.TOP_LEFT = 0)] = "TOP_LEFT"),
    (e[(e.TOP_RIGHT = 1)] = "TOP_RIGHT"),
    (e[(e.BOTTOM_RIGHT = 2)] = "BOTTOM_RIGHT"),
    (e[(e.BOTTOM_LEFT = 3)] = "BOTTOM_LEFT");
})(xA || (xA = {}));
var OA = function (e, r, n, o, s) {
    var l = 4 * ((Math.sqrt(2) - 1) / 3),
      c = n * l,
      f = o * l,
      B = e + n,
      g = r + o;
    switch (s) {
      case xA.TOP_LEFT:
        return new Es(
          new AA(e, g),
          new AA(e, g - f),
          new AA(B - c, r),
          new AA(B, r),
        );
      case xA.TOP_RIGHT:
        return new Es(
          new AA(e, r),
          new AA(e + c, r),
          new AA(B, g - f),
          new AA(B, g),
        );
      case xA.BOTTOM_RIGHT:
        return new Es(
          new AA(B, r),
          new AA(B, r + f),
          new AA(e + c, g),
          new AA(e, g),
        );
      case xA.BOTTOM_LEFT:
      default:
        return new Es(
          new AA(B, g),
          new AA(B - c, g),
          new AA(e, r + f),
          new AA(e, r),
        );
    }
  },
  qs = function (e) {
    return [
      e.topLeftBorderBox,
      e.topRightBorderBox,
      e.bottomRightBorderBox,
      e.bottomLeftBorderBox,
    ];
  },
  _F = function (e) {
    return [
      e.topLeftContentBox,
      e.topRightContentBox,
      e.bottomRightContentBox,
      e.bottomLeftContentBox,
    ];
  },
  Aa = function (e) {
    return [
      e.topLeftPaddingBox,
      e.topRightPaddingBox,
      e.bottomRightPaddingBox,
      e.bottomLeftPaddingBox,
    ];
  },
  VF =
    /** @class */
    /* @__PURE__ */ (function () {
      function e(r, n, o) {
        (this.offsetX = r),
          (this.offsetY = n),
          (this.matrix = o),
          (this.type = 0),
          (this.target = 6);
      }
      return e;
    })(),
  xs =
    /** @class */
    /* @__PURE__ */ (function () {
      function e(r, n) {
        (this.path = r), (this.target = n), (this.type = 1);
      }
      return e;
    })(),
  GF =
    /** @class */
    /* @__PURE__ */ (function () {
      function e(r) {
        (this.opacity = r), (this.type = 2), (this.target = 6);
      }
      return e;
    })(),
  WF = function (e) {
    return e.type === 0;
  },
  Tw = function (e) {
    return e.type === 1;
  },
  jF = function (e) {
    return e.type === 2;
  },
  rp = function (e, r) {
    return e.length === r.length
      ? e.some(function (n, o) {
          return n === r[o];
        })
      : !1;
  },
  XF = function (e, r, n, o, s) {
    return e.map(function (l, c) {
      switch (c) {
        case 0:
          return l.add(r, n);
        case 1:
          return l.add(r + o, n);
        case 2:
          return l.add(r + o, n + s);
        case 3:
          return l.add(r, n + s);
      }
      return l;
    });
  },
  Dw =
    /** @class */
    /* @__PURE__ */ (function () {
      function e(r) {
        (this.element = r),
          (this.inlineLevel = []),
          (this.nonInlineLevel = []),
          (this.negativeZIndex = []),
          (this.zeroOrAutoZIndexOrTransformedOrOpacity = []),
          (this.positiveZIndex = []),
          (this.nonPositionedFloats = []),
          (this.nonPositionedInlineLevel = []);
      }
      return e;
    })(),
  Kw =
    /** @class */
    (function () {
      function e(r, n) {
        if (
          ((this.container = r),
          (this.parent = n),
          (this.effects = []),
          (this.curves = new PF(this.container)),
          this.container.styles.opacity < 1 &&
            this.effects.push(new GF(this.container.styles.opacity)),
          this.container.styles.transform !== null)
        ) {
          var o =
              this.container.bounds.left +
              this.container.styles.transformOrigin[0].number,
            s =
              this.container.bounds.top +
              this.container.styles.transformOrigin[1].number,
            l = this.container.styles.transform;
          this.effects.push(new VF(o, s, l));
        }
        if (this.container.styles.overflowX !== 0) {
          var c = qs(this.curves),
            f = Aa(this.curves);
          rp(c, f)
            ? this.effects.push(
                new xs(
                  c,
                  6,
                  /* CONTENT */
                ),
              )
            : (this.effects.push(
                new xs(
                  c,
                  2,
                  /* BACKGROUND_BORDERS */
                ),
              ),
              this.effects.push(
                new xs(
                  f,
                  4,
                  /* CONTENT */
                ),
              ));
        }
      }
      return (
        (e.prototype.getEffects = function (r) {
          for (
            var n =
                [
                  2, 3,
                  /* FIXED */
                ].indexOf(this.container.styles.position) === -1,
              o = this.parent,
              s = this.effects.slice(0);
            o;

          ) {
            var l = o.effects.filter(function (B) {
              return !Tw(B);
            });
            if (n || o.container.styles.position !== 0 || !o.parent) {
              if (
                (s.unshift.apply(s, l),
                (n =
                  [
                    2, 3,
                    /* FIXED */
                  ].indexOf(o.container.styles.position) === -1),
                o.container.styles.overflowX !== 0)
              ) {
                var c = qs(o.curves),
                  f = Aa(o.curves);
                rp(c, f) ||
                  s.unshift(
                    new xs(
                      f,
                      6,
                      /* CONTENT */
                    ),
                  );
              }
            } else s.unshift.apply(s, l);
            o = o.parent;
          }
          return s.filter(function (B) {
            return qA(B.target, r);
          });
        }),
        e
      );
    })(),
  vc = function (e, r, n, o) {
    e.container.elements.forEach(function (s) {
      var l = qA(
          s.flags,
          4,
          /* CREATES_REAL_STACKING_CONTEXT */
        ),
        c = qA(
          s.flags,
          2,
          /* CREATES_STACKING_CONTEXT */
        ),
        f = new Kw(s, e);
      qA(
        s.styles.display,
        2048,
        /* LIST_ITEM */
      ) && o.push(f);
      var B = qA(
        s.flags,
        8,
        /* IS_LIST_OWNER */
      )
        ? []
        : o;
      if (l || c) {
        var g = l || s.styles.isPositioned() ? n : r,
          w = new Dw(f);
        if (
          s.styles.isPositioned() ||
          s.styles.opacity < 1 ||
          s.styles.isTransformed()
        ) {
          var h = s.styles.zIndex.order;
          if (h < 0) {
            var v = 0;
            g.negativeZIndex.some(function (Q, m) {
              return h > Q.element.container.styles.zIndex.order
                ? ((v = m), !1)
                : v > 0;
            }),
              g.negativeZIndex.splice(v, 0, w);
          } else if (h > 0) {
            var U = 0;
            g.positiveZIndex.some(function (Q, m) {
              return h >= Q.element.container.styles.zIndex.order
                ? ((U = m + 1), !1)
                : U > 0;
            }),
              g.positiveZIndex.splice(U, 0, w);
          } else g.zeroOrAutoZIndexOrTransformedOrOpacity.push(w);
        } else
          s.styles.isFloating()
            ? g.nonPositionedFloats.push(w)
            : g.nonPositionedInlineLevel.push(w);
        vc(f, w, l ? w : n, B);
      } else
        s.styles.isInlineLevel()
          ? r.inlineLevel.push(f)
          : r.nonInlineLevel.push(f),
          vc(f, r, n, B);
      qA(
        s.flags,
        8,
        /* IS_LIST_OWNER */
      ) && kw(s, B);
    });
  },
  kw = function (e, r) {
    for (
      var n = e instanceof Bc ? e.start : 1,
        o = e instanceof Bc ? e.reversed : !1,
        s = 0;
      s < r.length;
      s++
    ) {
      var l = r[s];
      l.container instanceof vw &&
        typeof l.container.value == "number" &&
        l.container.value !== 0 &&
        (n = l.container.value),
        (l.listValue = Wo(n, l.container.styles.listStyleType, !0)),
        (n += o ? -1 : 1);
    }
  },
  zF = function (e) {
    var r = new Kw(e, null),
      n = new Dw(r),
      o = [];
    return vc(r, n, n, o), kw(r.container, o), n;
  },
  np = function (e, r) {
    switch (r) {
      case 0:
        return Ve(
          e.topLeftBorderBox,
          e.topLeftPaddingBox,
          e.topRightBorderBox,
          e.topRightPaddingBox,
        );
      case 1:
        return Ve(
          e.topRightBorderBox,
          e.topRightPaddingBox,
          e.bottomRightBorderBox,
          e.bottomRightPaddingBox,
        );
      case 2:
        return Ve(
          e.bottomRightBorderBox,
          e.bottomRightPaddingBox,
          e.bottomLeftBorderBox,
          e.bottomLeftPaddingBox,
        );
      case 3:
      default:
        return Ve(
          e.bottomLeftBorderBox,
          e.bottomLeftPaddingBox,
          e.topLeftBorderBox,
          e.topLeftPaddingBox,
        );
    }
  },
  JF = function (e, r) {
    switch (r) {
      case 0:
        return Ve(
          e.topLeftBorderBox,
          e.topLeftBorderDoubleOuterBox,
          e.topRightBorderBox,
          e.topRightBorderDoubleOuterBox,
        );
      case 1:
        return Ve(
          e.topRightBorderBox,
          e.topRightBorderDoubleOuterBox,
          e.bottomRightBorderBox,
          e.bottomRightBorderDoubleOuterBox,
        );
      case 2:
        return Ve(
          e.bottomRightBorderBox,
          e.bottomRightBorderDoubleOuterBox,
          e.bottomLeftBorderBox,
          e.bottomLeftBorderDoubleOuterBox,
        );
      case 3:
      default:
        return Ve(
          e.bottomLeftBorderBox,
          e.bottomLeftBorderDoubleOuterBox,
          e.topLeftBorderBox,
          e.topLeftBorderDoubleOuterBox,
        );
    }
  },
  YF = function (e, r) {
    switch (r) {
      case 0:
        return Ve(
          e.topLeftBorderDoubleInnerBox,
          e.topLeftPaddingBox,
          e.topRightBorderDoubleInnerBox,
          e.topRightPaddingBox,
        );
      case 1:
        return Ve(
          e.topRightBorderDoubleInnerBox,
          e.topRightPaddingBox,
          e.bottomRightBorderDoubleInnerBox,
          e.bottomRightPaddingBox,
        );
      case 2:
        return Ve(
          e.bottomRightBorderDoubleInnerBox,
          e.bottomRightPaddingBox,
          e.bottomLeftBorderDoubleInnerBox,
          e.bottomLeftPaddingBox,
        );
      case 3:
      default:
        return Ve(
          e.bottomLeftBorderDoubleInnerBox,
          e.bottomLeftPaddingBox,
          e.topLeftBorderDoubleInnerBox,
          e.topLeftPaddingBox,
        );
    }
  },
  ZF = function (e, r) {
    switch (r) {
      case 0:
        return Is(e.topLeftBorderStroke, e.topRightBorderStroke);
      case 1:
        return Is(e.topRightBorderStroke, e.bottomRightBorderStroke);
      case 2:
        return Is(e.bottomRightBorderStroke, e.bottomLeftBorderStroke);
      case 3:
      default:
        return Is(e.bottomLeftBorderStroke, e.topLeftBorderStroke);
    }
  },
  Is = function (e, r) {
    var n = [];
    return (
      Pe(e) ? n.push(e.subdivide(0.5, !1)) : n.push(e),
      Pe(r) ? n.push(r.subdivide(0.5, !0)) : n.push(r),
      n
    );
  },
  Ve = function (e, r, n, o) {
    var s = [];
    return (
      Pe(e) ? s.push(e.subdivide(0.5, !1)) : s.push(e),
      Pe(n) ? s.push(n.subdivide(0.5, !0)) : s.push(n),
      Pe(o) ? s.push(o.subdivide(0.5, !0).reverse()) : s.push(o),
      Pe(r) ? s.push(r.subdivide(0.5, !1).reverse()) : s.push(r),
      s
    );
  },
  Rw = function (e) {
    var r = e.bounds,
      n = e.styles;
    return r.add(
      n.borderLeftWidth,
      n.borderTopWidth,
      -(n.borderRightWidth + n.borderLeftWidth),
      -(n.borderTopWidth + n.borderBottomWidth),
    );
  },
  ea = function (e) {
    var r = e.styles,
      n = e.bounds,
      o = LA(r.paddingLeft, n.width),
      s = LA(r.paddingRight, n.width),
      l = LA(r.paddingTop, n.width),
      c = LA(r.paddingBottom, n.width);
    return n.add(
      o + r.borderLeftWidth,
      l + r.borderTopWidth,
      -(r.borderRightWidth + r.borderLeftWidth + o + s),
      -(r.borderTopWidth + r.borderBottomWidth + l + c),
    );
  },
  $F = function (e, r) {
    return e === 0 ? r.bounds : e === 2 ? ea(r) : Rw(r);
  },
  qF = function (e, r) {
    return e === 0 ? r.bounds : e === 2 ? ea(r) : Rw(r);
  },
  Mu = function (e, r, n) {
    var o = $F(yn(e.styles.backgroundOrigin, r), e),
      s = qF(yn(e.styles.backgroundClip, r), e),
      l = AE(yn(e.styles.backgroundSize, r), n, o),
      c = l[0],
      f = l[1],
      B = Do(yn(e.styles.backgroundPosition, r), o.width - c, o.height - f),
      g = eE(yn(e.styles.backgroundRepeat, r), B, l, o, s),
      w = Math.round(o.left + B[0]),
      h = Math.round(o.top + B[1]);
    return [g, w, h, c, f];
  },
  hn = function (e) {
    return SA(e) && e.value === Fn.AUTO;
  },
  Hs = function (e) {
    return typeof e == "number";
  },
  AE = function (e, r, n) {
    var o = r[0],
      s = r[1],
      l = r[2],
      c = e[0],
      f = e[1];
    if (!c) return [0, 0];
    if (YA(c) && f && YA(f)) return [LA(c, n.width), LA(f, n.height)];
    var B = Hs(l);
    if (SA(c) && (c.value === Fn.CONTAIN || c.value === Fn.COVER)) {
      if (Hs(l)) {
        var g = n.width / n.height;
        return g < l != (c.value === Fn.COVER)
          ? [n.width, n.width / l]
          : [n.height * l, n.height];
      }
      return [n.width, n.height];
    }
    var w = Hs(o),
      h = Hs(s),
      v = w || h;
    if (hn(c) && (!f || hn(f))) {
      if (w && h) return [o, s];
      if (!B && !v) return [n.width, n.height];
      if (v && B) {
        var U = w ? o : s * l,
          Q = h ? s : o / l;
        return [U, Q];
      }
      var m = w ? o : n.width,
        F = h ? s : n.height;
      return [m, F];
    }
    if (B) {
      var E = 0,
        I = 0;
      return (
        YA(c) ? (E = LA(c, n.width)) : YA(f) && (I = LA(f, n.height)),
        hn(c) ? (E = I * l) : (!f || hn(f)) && (I = E / l),
        [E, I]
      );
    }
    var R = null,
      T = null;
    if (
      (YA(c) ? (R = LA(c, n.width)) : f && YA(f) && (T = LA(f, n.height)),
      R !== null && (!f || hn(f)) && (T = w && h ? (R / o) * s : n.height),
      T !== null && hn(c) && (R = w && h ? (T / s) * o : n.width),
      R !== null && T !== null)
    )
      return [R, T];
    throw new Error("Unable to calculate background-size for element");
  },
  yn = function (e, r) {
    var n = e[r];
    return typeof n > "u" ? e[0] : n;
  },
  eE = function (e, r, n, o, s) {
    var l = r[0],
      c = r[1],
      f = n[0],
      B = n[1];
    switch (e) {
      case 2:
        return [
          new AA(Math.round(o.left), Math.round(o.top + c)),
          new AA(Math.round(o.left + o.width), Math.round(o.top + c)),
          new AA(Math.round(o.left + o.width), Math.round(B + o.top + c)),
          new AA(Math.round(o.left), Math.round(B + o.top + c)),
        ];
      case 3:
        return [
          new AA(Math.round(o.left + l), Math.round(o.top)),
          new AA(Math.round(o.left + l + f), Math.round(o.top)),
          new AA(Math.round(o.left + l + f), Math.round(o.height + o.top)),
          new AA(Math.round(o.left + l), Math.round(o.height + o.top)),
        ];
      case 1:
        return [
          new AA(Math.round(o.left + l), Math.round(o.top + c)),
          new AA(Math.round(o.left + l + f), Math.round(o.top + c)),
          new AA(Math.round(o.left + l + f), Math.round(o.top + c + B)),
          new AA(Math.round(o.left + l), Math.round(o.top + c + B)),
        ];
      default:
        return [
          new AA(Math.round(s.left), Math.round(s.top)),
          new AA(Math.round(s.left + s.width), Math.round(s.top)),
          new AA(Math.round(s.left + s.width), Math.round(s.height + s.top)),
          new AA(Math.round(s.left), Math.round(s.height + s.top)),
        ];
    }
  },
  tE =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  op = "Hidden Text",
  rE =
    /** @class */
    (function () {
      function e(r) {
        (this._data = {}), (this._document = r);
      }
      return (
        (e.prototype.parseMetrics = function (r, n) {
          var o = this._document.createElement("div"),
            s = this._document.createElement("img"),
            l = this._document.createElement("span"),
            c = this._document.body;
          (o.style.visibility = "hidden"),
            (o.style.fontFamily = r),
            (o.style.fontSize = n),
            (o.style.margin = "0"),
            (o.style.padding = "0"),
            (o.style.whiteSpace = "nowrap"),
            c.appendChild(o),
            (s.src = tE),
            (s.width = 1),
            (s.height = 1),
            (s.style.margin = "0"),
            (s.style.padding = "0"),
            (s.style.verticalAlign = "baseline"),
            (l.style.fontFamily = r),
            (l.style.fontSize = n),
            (l.style.margin = "0"),
            (l.style.padding = "0"),
            l.appendChild(this._document.createTextNode(op)),
            o.appendChild(l),
            o.appendChild(s);
          var f = s.offsetTop - l.offsetTop + 2;
          o.removeChild(l),
            o.appendChild(this._document.createTextNode(op)),
            (o.style.lineHeight = "normal"),
            (s.style.verticalAlign = "super");
          var B = s.offsetTop - o.offsetTop + 2;
          return c.removeChild(o), { baseline: f, middle: B };
        }),
        (e.prototype.getMetrics = function (r, n) {
          var o = r + " " + n;
          return (
            typeof this._data[o] > "u" &&
              (this._data[o] = this.parseMetrics(r, n)),
            this._data[o]
          );
        }),
        e
      );
    })(),
  Ow =
    /** @class */
    /* @__PURE__ */ (function () {
      function e(r, n) {
        (this.context = r), (this.options = n);
      }
      return e;
    })(),
  nE = 1e4,
  oE =
    /** @class */
    (function (e) {
      et(r, e);
      function r(n, o) {
        var s = e.call(this, n, o) || this;
        return (
          (s._activeEffects = []),
          (s.canvas = o.canvas ? o.canvas : document.createElement("canvas")),
          (s.ctx = s.canvas.getContext("2d")),
          o.canvas ||
            ((s.canvas.width = Math.floor(o.width * o.scale)),
            (s.canvas.height = Math.floor(o.height * o.scale)),
            (s.canvas.style.width = o.width + "px"),
            (s.canvas.style.height = o.height + "px")),
          (s.fontMetrics = new rE(document)),
          s.ctx.scale(s.options.scale, s.options.scale),
          s.ctx.translate(-o.x, -o.y),
          (s.ctx.textBaseline = "bottom"),
          (s._activeEffects = []),
          s.context.logger.debug(
            "Canvas renderer initialized (" +
              o.width +
              "x" +
              o.height +
              ") with scale " +
              o.scale,
          ),
          s
        );
      }
      return (
        (r.prototype.applyEffects = function (n) {
          for (var o = this; this._activeEffects.length; ) this.popEffect();
          n.forEach(function (s) {
            return o.applyEffect(s);
          });
        }),
        (r.prototype.applyEffect = function (n) {
          this.ctx.save(),
            jF(n) && (this.ctx.globalAlpha = n.opacity),
            WF(n) &&
              (this.ctx.translate(n.offsetX, n.offsetY),
              this.ctx.transform(
                n.matrix[0],
                n.matrix[1],
                n.matrix[2],
                n.matrix[3],
                n.matrix[4],
                n.matrix[5],
              ),
              this.ctx.translate(-n.offsetX, -n.offsetY)),
            Tw(n) && (this.path(n.path), this.ctx.clip()),
            this._activeEffects.push(n);
        }),
        (r.prototype.popEffect = function () {
          this._activeEffects.pop(), this.ctx.restore();
        }),
        (r.prototype.renderStack = function (n) {
          return he(this, void 0, void 0, function () {
            var o;
            return Be(this, function (s) {
              switch (s.label) {
                case 0:
                  return (
                    (o = n.element.container.styles),
                    o.isVisible() ? [4, this.renderStackContent(n)] : [3, 2]
                  );
                case 1:
                  s.sent(), (s.label = 2);
                case 2:
                  return [
                    2,
                    /*return*/
                  ];
              }
            });
          });
        }),
        (r.prototype.renderNode = function (n) {
          return he(this, void 0, void 0, function () {
            return Be(this, function (o) {
              switch (o.label) {
                case 0:
                  if (
                    qA(
                      n.container.flags,
                      16,
                      /* DEBUG_RENDER */
                    )
                  )
                    debugger;
                  return n.container.styles.isVisible()
                    ? [4, this.renderNodeBackgroundAndBorders(n)]
                    : [3, 3];
                case 1:
                  return o.sent(), [4, this.renderNodeContent(n)];
                case 2:
                  o.sent(), (o.label = 3);
                case 3:
                  return [
                    2,
                    /*return*/
                  ];
              }
            });
          });
        }),
        (r.prototype.renderTextWithLetterSpacing = function (n, o, s) {
          var l = this;
          if (o === 0)
            this.ctx.fillText(n.text, n.bounds.left, n.bounds.top + s);
          else {
            var c = Oc(n.text);
            c.reduce(function (f, B) {
              return (
                l.ctx.fillText(B, f, n.bounds.top + s),
                f + l.ctx.measureText(B).width
              );
            }, n.bounds.left);
          }
        }),
        (r.prototype.createFontStyle = function (n) {
          var o = n.fontVariant
              .filter(function (c) {
                return c === "normal" || c === "small-caps";
              })
              .join(""),
            s = uE(n.fontFamily).join(", "),
            l = Jo(n.fontSize)
              ? "" + n.fontSize.number + n.fontSize.unit
              : n.fontSize.number + "px";
          return [[n.fontStyle, o, n.fontWeight, l, s].join(" "), s, l];
        }),
        (r.prototype.renderTextNode = function (n, o) {
          return he(this, void 0, void 0, function () {
            var s,
              l,
              c,
              f,
              B,
              g,
              w,
              h,
              v = this;
            return Be(this, function (U) {
              return (
                (s = this.createFontStyle(o)),
                (l = s[0]),
                (c = s[1]),
                (f = s[2]),
                (this.ctx.font = l),
                (this.ctx.direction = o.direction === 1 ? "rtl" : "ltr"),
                (this.ctx.textAlign = "left"),
                (this.ctx.textBaseline = "alphabetic"),
                (B = this.fontMetrics.getMetrics(c, f)),
                (g = B.baseline),
                (w = B.middle),
                (h = o.paintOrder),
                n.textBounds.forEach(function (Q) {
                  h.forEach(function (m) {
                    switch (m) {
                      case 0:
                        (v.ctx.fillStyle = ne(o.color)),
                          v.renderTextWithLetterSpacing(Q, o.letterSpacing, g);
                        var F = o.textShadow;
                        F.length &&
                          Q.text.trim().length &&
                          (F.slice(0)
                            .reverse()
                            .forEach(function (E) {
                              (v.ctx.shadowColor = ne(E.color)),
                                (v.ctx.shadowOffsetX =
                                  E.offsetX.number * v.options.scale),
                                (v.ctx.shadowOffsetY =
                                  E.offsetY.number * v.options.scale),
                                (v.ctx.shadowBlur = E.blur.number),
                                v.renderTextWithLetterSpacing(
                                  Q,
                                  o.letterSpacing,
                                  g,
                                );
                            }),
                          (v.ctx.shadowColor = ""),
                          (v.ctx.shadowOffsetX = 0),
                          (v.ctx.shadowOffsetY = 0),
                          (v.ctx.shadowBlur = 0)),
                          o.textDecorationLine.length &&
                            ((v.ctx.fillStyle = ne(
                              o.textDecorationColor || o.color,
                            )),
                            o.textDecorationLine.forEach(function (E) {
                              switch (E) {
                                case 1:
                                  v.ctx.fillRect(
                                    Q.bounds.left,
                                    Math.round(Q.bounds.top + g),
                                    Q.bounds.width,
                                    1,
                                  );
                                  break;
                                case 2:
                                  v.ctx.fillRect(
                                    Q.bounds.left,
                                    Math.round(Q.bounds.top),
                                    Q.bounds.width,
                                    1,
                                  );
                                  break;
                                case 3:
                                  v.ctx.fillRect(
                                    Q.bounds.left,
                                    Math.ceil(Q.bounds.top + w),
                                    Q.bounds.width,
                                    1,
                                  );
                                  break;
                              }
                            }));
                        break;
                      case 1:
                        o.webkitTextStrokeWidth &&
                          Q.text.trim().length &&
                          ((v.ctx.strokeStyle = ne(o.webkitTextStrokeColor)),
                          (v.ctx.lineWidth = o.webkitTextStrokeWidth),
                          (v.ctx.lineJoin = window.chrome ? "miter" : "round"),
                          v.ctx.strokeText(
                            Q.text,
                            Q.bounds.left,
                            Q.bounds.top + g,
                          )),
                          (v.ctx.strokeStyle = ""),
                          (v.ctx.lineWidth = 0),
                          (v.ctx.lineJoin = "miter");
                        break;
                    }
                  });
                }),
                [
                  2,
                  /*return*/
                ]
              );
            });
          });
        }),
        (r.prototype.renderReplacedElement = function (n, o, s) {
          if (s && n.intrinsicWidth > 0 && n.intrinsicHeight > 0) {
            var l = ea(n),
              c = Aa(o);
            this.path(c),
              this.ctx.save(),
              this.ctx.clip(),
              this.ctx.drawImage(
                s,
                0,
                0,
                n.intrinsicWidth,
                n.intrinsicHeight,
                l.left,
                l.top,
                l.width,
                l.height,
              ),
              this.ctx.restore();
          }
        }),
        (r.prototype.renderNodeContent = function (n) {
          return he(this, void 0, void 0, function () {
            var o,
              s,
              l,
              c,
              f,
              B,
              I,
              I,
              g,
              w,
              h,
              v,
              T,
              U,
              Q,
              k,
              m,
              F,
              E,
              I,
              R,
              T,
              k;
            return Be(this, function (O) {
              switch (O.label) {
                case 0:
                  this.applyEffects(
                    n.getEffects(
                      4,
                      /* CONTENT */
                    ),
                  ),
                    (o = n.container),
                    (s = n.curves),
                    (l = o.styles),
                    (c = 0),
                    (f = o.textNodes),
                    (O.label = 1);
                case 1:
                  return c < f.length
                    ? ((B = f[c]), [4, this.renderTextNode(B, l)])
                    : [3, 4];
                case 2:
                  O.sent(), (O.label = 3);
                case 3:
                  return c++, [3, 1];
                case 4:
                  if (!(o instanceof pw)) return [3, 8];
                  O.label = 5;
                case 5:
                  return (
                    O.trys.push([5, 7, , 8]),
                    [4, this.context.cache.match(o.src)]
                  );
                case 6:
                  return (
                    (I = O.sent()), this.renderReplacedElement(o, s, I), [3, 8]
                  );
                case 7:
                  return (
                    O.sent(),
                    this.context.logger.error("Error loading image " + o.src),
                    [3, 8]
                  );
                case 8:
                  if (
                    (o instanceof ww &&
                      this.renderReplacedElement(o, s, o.canvas),
                    !(o instanceof hw))
                  )
                    return [3, 12];
                  O.label = 9;
                case 9:
                  return (
                    O.trys.push([9, 11, , 12]),
                    [4, this.context.cache.match(o.svg)]
                  );
                case 10:
                  return (
                    (I = O.sent()), this.renderReplacedElement(o, s, I), [3, 12]
                  );
                case 11:
                  return (
                    O.sent(),
                    this.context.logger.error(
                      "Error loading svg " + o.svg.substring(0, 255),
                    ),
                    [3, 12]
                  );
                case 12:
                  return o instanceof Qw && o.tree
                    ? ((g = new r(this.context, {
                        scale: this.options.scale,
                        backgroundColor: o.backgroundColor,
                        x: 0,
                        y: 0,
                        width: o.width,
                        height: o.height,
                      })),
                      [4, g.render(o.tree)])
                    : [3, 14];
                case 13:
                  (w = O.sent()),
                    o.width &&
                      o.height &&
                      this.ctx.drawImage(
                        w,
                        0,
                        0,
                        o.width,
                        o.height,
                        o.bounds.left,
                        o.bounds.top,
                        o.bounds.width,
                        o.bounds.height,
                      ),
                    (O.label = 14);
                case 14:
                  if (
                    (o instanceof Nc &&
                      ((h = Math.min(o.bounds.width, o.bounds.height)),
                      o.type === Js
                        ? o.checked &&
                          (this.ctx.save(),
                          this.path([
                            new AA(
                              o.bounds.left + h * 0.39363,
                              o.bounds.top + h * 0.79,
                            ),
                            new AA(
                              o.bounds.left + h * 0.16,
                              o.bounds.top + h * 0.5549,
                            ),
                            new AA(
                              o.bounds.left + h * 0.27347,
                              o.bounds.top + h * 0.44071,
                            ),
                            new AA(
                              o.bounds.left + h * 0.39694,
                              o.bounds.top + h * 0.5649,
                            ),
                            new AA(
                              o.bounds.left + h * 0.72983,
                              o.bounds.top + h * 0.23,
                            ),
                            new AA(
                              o.bounds.left + h * 0.84,
                              o.bounds.top + h * 0.34085,
                            ),
                            new AA(
                              o.bounds.left + h * 0.39363,
                              o.bounds.top + h * 0.79,
                            ),
                          ]),
                          (this.ctx.fillStyle = ne(jg)),
                          this.ctx.fill(),
                          this.ctx.restore())
                        : o.type === Ys &&
                          o.checked &&
                          (this.ctx.save(),
                          this.ctx.beginPath(),
                          this.ctx.arc(
                            o.bounds.left + h / 2,
                            o.bounds.top + h / 2,
                            h / 4,
                            0,
                            Math.PI * 2,
                            !0,
                          ),
                          (this.ctx.fillStyle = ne(jg)),
                          this.ctx.fill(),
                          this.ctx.restore())),
                    iE(o) && o.value.length)
                  ) {
                    switch (
                      ((v = this.createFontStyle(l)),
                      (T = v[0]),
                      (U = v[1]),
                      (Q = this.fontMetrics.getMetrics(T, U).baseline),
                      (this.ctx.font = T),
                      (this.ctx.fillStyle = ne(l.color)),
                      (this.ctx.textBaseline = "alphabetic"),
                      (this.ctx.textAlign = aE(o.styles.textAlign)),
                      (k = ea(o)),
                      (m = 0),
                      o.styles.textAlign)
                    ) {
                      case 1:
                        m += k.width / 2;
                        break;
                      case 2:
                        m += k.width;
                        break;
                    }
                    (F = k.add(m, 0, 0, -k.height / 2 + 1)),
                      this.ctx.save(),
                      this.path([
                        new AA(k.left, k.top),
                        new AA(k.left + k.width, k.top),
                        new AA(k.left + k.width, k.top + k.height),
                        new AA(k.left, k.top + k.height),
                      ]),
                      this.ctx.clip(),
                      this.renderTextWithLetterSpacing(
                        new Po(o.value, F),
                        l.letterSpacing,
                        Q,
                      ),
                      this.ctx.restore(),
                      (this.ctx.textBaseline = "alphabetic"),
                      (this.ctx.textAlign = "left");
                  }
                  if (
                    !qA(
                      o.styles.display,
                      2048,
                      /* LIST_ITEM */
                    )
                  )
                    return [3, 20];
                  if (o.styles.listStyleImage === null) return [3, 19];
                  if (((E = o.styles.listStyleImage), E.type !== 0))
                    return [3, 18];
                  (I = void 0), (R = E.url), (O.label = 15);
                case 15:
                  return (
                    O.trys.push([15, 17, , 18]),
                    [4, this.context.cache.match(R)]
                  );
                case 16:
                  return (
                    (I = O.sent()),
                    this.ctx.drawImage(
                      I,
                      o.bounds.left - (I.width + 10),
                      o.bounds.top,
                    ),
                    [3, 18]
                  );
                case 17:
                  return (
                    O.sent(),
                    this.context.logger.error(
                      "Error loading list-style-image " + R,
                    ),
                    [3, 18]
                  );
                case 18:
                  return [3, 20];
                case 19:
                  n.listValue &&
                    o.styles.listStyleType !== -1 &&
                    ((T = this.createFontStyle(l)[0]),
                    (this.ctx.font = T),
                    (this.ctx.fillStyle = ne(l.color)),
                    (this.ctx.textBaseline = "middle"),
                    (this.ctx.textAlign = "right"),
                    (k = new xt(
                      o.bounds.left,
                      o.bounds.top + LA(o.styles.paddingTop, o.bounds.width),
                      o.bounds.width,
                      Hg(l.lineHeight, l.fontSize.number) / 2 + 1,
                    )),
                    this.renderTextWithLetterSpacing(
                      new Po(n.listValue, k),
                      l.letterSpacing,
                      Hg(l.lineHeight, l.fontSize.number) / 2 + 2,
                    ),
                    (this.ctx.textBaseline = "bottom"),
                    (this.ctx.textAlign = "left")),
                    (O.label = 20);
                case 20:
                  return [
                    2,
                    /*return*/
                  ];
              }
            });
          });
        }),
        (r.prototype.renderStackContent = function (n) {
          return he(this, void 0, void 0, function () {
            var o, s, E, l, c, E, f, B, E, g, w, E, h, v, E, U, Q, E, m, F, E;
            return Be(this, function (I) {
              switch (I.label) {
                case 0:
                  if (
                    qA(
                      n.element.container.flags,
                      16,
                      /* DEBUG_RENDER */
                    )
                  )
                    debugger;
                  return [4, this.renderNodeBackgroundAndBorders(n.element)];
                case 1:
                  I.sent(), (o = 0), (s = n.negativeZIndex), (I.label = 2);
                case 2:
                  return o < s.length
                    ? ((E = s[o]), [4, this.renderStack(E)])
                    : [3, 5];
                case 3:
                  I.sent(), (I.label = 4);
                case 4:
                  return o++, [3, 2];
                case 5:
                  return [4, this.renderNodeContent(n.element)];
                case 6:
                  I.sent(), (l = 0), (c = n.nonInlineLevel), (I.label = 7);
                case 7:
                  return l < c.length
                    ? ((E = c[l]), [4, this.renderNode(E)])
                    : [3, 10];
                case 8:
                  I.sent(), (I.label = 9);
                case 9:
                  return l++, [3, 7];
                case 10:
                  (f = 0), (B = n.nonPositionedFloats), (I.label = 11);
                case 11:
                  return f < B.length
                    ? ((E = B[f]), [4, this.renderStack(E)])
                    : [3, 14];
                case 12:
                  I.sent(), (I.label = 13);
                case 13:
                  return f++, [3, 11];
                case 14:
                  (g = 0), (w = n.nonPositionedInlineLevel), (I.label = 15);
                case 15:
                  return g < w.length
                    ? ((E = w[g]), [4, this.renderStack(E)])
                    : [3, 18];
                case 16:
                  I.sent(), (I.label = 17);
                case 17:
                  return g++, [3, 15];
                case 18:
                  (h = 0), (v = n.inlineLevel), (I.label = 19);
                case 19:
                  return h < v.length
                    ? ((E = v[h]), [4, this.renderNode(E)])
                    : [3, 22];
                case 20:
                  I.sent(), (I.label = 21);
                case 21:
                  return h++, [3, 19];
                case 22:
                  (U = 0),
                    (Q = n.zeroOrAutoZIndexOrTransformedOrOpacity),
                    (I.label = 23);
                case 23:
                  return U < Q.length
                    ? ((E = Q[U]), [4, this.renderStack(E)])
                    : [3, 26];
                case 24:
                  I.sent(), (I.label = 25);
                case 25:
                  return U++, [3, 23];
                case 26:
                  (m = 0), (F = n.positiveZIndex), (I.label = 27);
                case 27:
                  return m < F.length
                    ? ((E = F[m]), [4, this.renderStack(E)])
                    : [3, 30];
                case 28:
                  I.sent(), (I.label = 29);
                case 29:
                  return m++, [3, 27];
                case 30:
                  return [
                    2,
                    /*return*/
                  ];
              }
            });
          });
        }),
        (r.prototype.mask = function (n) {
          this.ctx.beginPath(),
            this.ctx.moveTo(0, 0),
            this.ctx.lineTo(this.canvas.width, 0),
            this.ctx.lineTo(this.canvas.width, this.canvas.height),
            this.ctx.lineTo(0, this.canvas.height),
            this.ctx.lineTo(0, 0),
            this.formatPath(n.slice(0).reverse()),
            this.ctx.closePath();
        }),
        (r.prototype.path = function (n) {
          this.ctx.beginPath(), this.formatPath(n), this.ctx.closePath();
        }),
        (r.prototype.formatPath = function (n) {
          var o = this;
          n.forEach(function (s, l) {
            var c = Pe(s) ? s.start : s;
            l === 0 ? o.ctx.moveTo(c.x, c.y) : o.ctx.lineTo(c.x, c.y),
              Pe(s) &&
                o.ctx.bezierCurveTo(
                  s.startControl.x,
                  s.startControl.y,
                  s.endControl.x,
                  s.endControl.y,
                  s.end.x,
                  s.end.y,
                );
          });
        }),
        (r.prototype.renderRepeat = function (n, o, s, l) {
          this.path(n),
            (this.ctx.fillStyle = o),
            this.ctx.translate(s, l),
            this.ctx.fill(),
            this.ctx.translate(-s, -l);
        }),
        (r.prototype.resizeImage = function (n, o, s) {
          var l;
          if (n.width === o && n.height === s) return n;
          var c =
              (l = this.canvas.ownerDocument) !== null && l !== void 0
                ? l
                : document,
            f = c.createElement("canvas");
          (f.width = Math.max(1, o)), (f.height = Math.max(1, s));
          var B = f.getContext("2d");
          return B.drawImage(n, 0, 0, n.width, n.height, 0, 0, o, s), f;
        }),
        (r.prototype.renderBackgroundImage = function (n) {
          return he(this, void 0, void 0, function () {
            var o, s, l, c, f, B;
            return Be(this, function (g) {
              switch (g.label) {
                case 0:
                  (o = n.styles.backgroundImage.length - 1),
                    (s = function (w) {
                      var h,
                        v,
                        U,
                        nA,
                        aA,
                        Z,
                        q,
                        rA,
                        X,
                        Q,
                        nA,
                        aA,
                        Z,
                        q,
                        rA,
                        m,
                        F,
                        E,
                        I,
                        R,
                        T,
                        k,
                        O,
                        M,
                        X,
                        z,
                        nA,
                        dA,
                        V,
                        q,
                        rA,
                        uA,
                        aA,
                        Z,
                        P,
                        j,
                        Y,
                        H,
                        N,
                        cA,
                        fA,
                        wA;
                      return Be(this, function (hA) {
                        switch (hA.label) {
                          case 0:
                            if (w.type !== 0) return [3, 5];
                            (h = void 0), (v = w.url), (hA.label = 1);
                          case 1:
                            return (
                              hA.trys.push([1, 3, , 4]),
                              [4, l.context.cache.match(v)]
                            );
                          case 2:
                            return (h = hA.sent()), [3, 4];
                          case 3:
                            return (
                              hA.sent(),
                              l.context.logger.error(
                                "Error loading background-image " + v,
                              ),
                              [3, 4]
                            );
                          case 4:
                            return (
                              h &&
                                ((U = Mu(n, o, [
                                  h.width,
                                  h.height,
                                  h.width / h.height,
                                ])),
                                (nA = U[0]),
                                (aA = U[1]),
                                (Z = U[2]),
                                (q = U[3]),
                                (rA = U[4]),
                                (X = l.ctx.createPattern(
                                  l.resizeImage(h, q, rA),
                                  "repeat",
                                )),
                                l.renderRepeat(nA, X, aA, Z)),
                              [3, 6]
                            );
                          case 5:
                            WQ(w)
                              ? ((Q = Mu(n, o, [null, null, null])),
                                (nA = Q[0]),
                                (aA = Q[1]),
                                (Z = Q[2]),
                                (q = Q[3]),
                                (rA = Q[4]),
                                (m = MQ(w.angle, q, rA)),
                                (F = m[0]),
                                (E = m[1]),
                                (I = m[2]),
                                (R = m[3]),
                                (T = m[4]),
                                (k = document.createElement("canvas")),
                                (k.width = q),
                                (k.height = rA),
                                (O = k.getContext("2d")),
                                (M = O.createLinearGradient(E, R, I, T)),
                                xg(w.stops, F).forEach(function ($) {
                                  return M.addColorStop($.stop, ne($.color));
                                }),
                                (O.fillStyle = M),
                                O.fillRect(0, 0, q, rA),
                                q > 0 &&
                                  rA > 0 &&
                                  ((X = l.ctx.createPattern(k, "repeat")),
                                  l.renderRepeat(nA, X, aA, Z)))
                              : jQ(w) &&
                                ((z = Mu(n, o, [null, null, null])),
                                (nA = z[0]),
                                (dA = z[1]),
                                (V = z[2]),
                                (q = z[3]),
                                (rA = z[4]),
                                (uA =
                                  w.position.length === 0 ? [Kc] : w.position),
                                (aA = LA(uA[0], q)),
                                (Z = LA(uA[uA.length - 1], rA)),
                                (P = PQ(w, aA, Z, q, rA)),
                                (j = P[0]),
                                (Y = P[1]),
                                j > 0 &&
                                  Y > 0 &&
                                  ((H = l.ctx.createRadialGradient(
                                    dA + aA,
                                    V + Z,
                                    0,
                                    dA + aA,
                                    V + Z,
                                    j,
                                  )),
                                  xg(w.stops, j * 2).forEach(function ($) {
                                    return H.addColorStop($.stop, ne($.color));
                                  }),
                                  l.path(nA),
                                  (l.ctx.fillStyle = H),
                                  j !== Y
                                    ? ((N =
                                        n.bounds.left + 0.5 * n.bounds.width),
                                      (cA =
                                        n.bounds.top + 0.5 * n.bounds.height),
                                      (fA = Y / j),
                                      (wA = 1 / fA),
                                      l.ctx.save(),
                                      l.ctx.translate(N, cA),
                                      l.ctx.transform(1, 0, 0, fA, 0, 0),
                                      l.ctx.translate(-N, -cA),
                                      l.ctx.fillRect(
                                        dA,
                                        wA * (V - cA) + cA,
                                        q,
                                        rA * wA,
                                      ),
                                      l.ctx.restore())
                                    : l.ctx.fill())),
                              (hA.label = 6);
                          case 6:
                            return (
                              o--,
                              [
                                2,
                                /*return*/
                              ]
                            );
                        }
                      });
                    }),
                    (l = this),
                    (c = 0),
                    (f = n.styles.backgroundImage.slice(0).reverse()),
                    (g.label = 1);
                case 1:
                  return c < f.length ? ((B = f[c]), [5, s(B)]) : [3, 4];
                case 2:
                  g.sent(), (g.label = 3);
                case 3:
                  return c++, [3, 1];
                case 4:
                  return [
                    2,
                    /*return*/
                  ];
              }
            });
          });
        }),
        (r.prototype.renderSolidBorder = function (n, o, s) {
          return he(this, void 0, void 0, function () {
            return Be(this, function (l) {
              return (
                this.path(np(s, o)),
                (this.ctx.fillStyle = ne(n)),
                this.ctx.fill(),
                [
                  2,
                  /*return*/
                ]
              );
            });
          });
        }),
        (r.prototype.renderDoubleBorder = function (n, o, s, l) {
          return he(this, void 0, void 0, function () {
            var c, f;
            return Be(this, function (B) {
              switch (B.label) {
                case 0:
                  return o < 3 ? [4, this.renderSolidBorder(n, s, l)] : [3, 2];
                case 1:
                  return (
                    B.sent(),
                    [
                      2,
                      /*return*/
                    ]
                  );
                case 2:
                  return (
                    (c = JF(l, s)),
                    this.path(c),
                    (this.ctx.fillStyle = ne(n)),
                    this.ctx.fill(),
                    (f = YF(l, s)),
                    this.path(f),
                    this.ctx.fill(),
                    [
                      2,
                      /*return*/
                    ]
                  );
              }
            });
          });
        }),
        (r.prototype.renderNodeBackgroundAndBorders = function (n) {
          return he(this, void 0, void 0, function () {
            var o,
              s,
              l,
              c,
              f,
              B,
              g,
              w,
              h = this;
            return Be(this, function (v) {
              switch (v.label) {
                case 0:
                  return (
                    this.applyEffects(
                      n.getEffects(
                        2,
                        /* BACKGROUND_BORDERS */
                      ),
                    ),
                    (o = n.container.styles),
                    (s = !ar(o.backgroundColor) || o.backgroundImage.length),
                    (l = [
                      {
                        style: o.borderTopStyle,
                        color: o.borderTopColor,
                        width: o.borderTopWidth,
                      },
                      {
                        style: o.borderRightStyle,
                        color: o.borderRightColor,
                        width: o.borderRightWidth,
                      },
                      {
                        style: o.borderBottomStyle,
                        color: o.borderBottomColor,
                        width: o.borderBottomWidth,
                      },
                      {
                        style: o.borderLeftStyle,
                        color: o.borderLeftColor,
                        width: o.borderLeftWidth,
                      },
                    ]),
                    (c = sE(yn(o.backgroundClip, 0), n.curves)),
                    s || o.boxShadow.length
                      ? (this.ctx.save(),
                        this.path(c),
                        this.ctx.clip(),
                        ar(o.backgroundColor) ||
                          ((this.ctx.fillStyle = ne(o.backgroundColor)),
                          this.ctx.fill()),
                        [4, this.renderBackgroundImage(n.container)])
                      : [3, 2]
                  );
                case 1:
                  v.sent(),
                    this.ctx.restore(),
                    o.boxShadow
                      .slice(0)
                      .reverse()
                      .forEach(function (U) {
                        h.ctx.save();
                        var Q = qs(n.curves),
                          m = U.inset ? 0 : nE,
                          F = XF(
                            Q,
                            -m + (U.inset ? 1 : -1) * U.spread.number,
                            (U.inset ? 1 : -1) * U.spread.number,
                            U.spread.number * (U.inset ? -2 : 2),
                            U.spread.number * (U.inset ? -2 : 2),
                          );
                        U.inset
                          ? (h.path(Q), h.ctx.clip(), h.mask(F))
                          : (h.mask(Q), h.ctx.clip(), h.path(F)),
                          (h.ctx.shadowOffsetX = U.offsetX.number + m),
                          (h.ctx.shadowOffsetY = U.offsetY.number),
                          (h.ctx.shadowColor = ne(U.color)),
                          (h.ctx.shadowBlur = U.blur.number),
                          (h.ctx.fillStyle = U.inset
                            ? ne(U.color)
                            : "rgba(0,0,0,1)"),
                          h.ctx.fill(),
                          h.ctx.restore();
                      }),
                    (v.label = 2);
                case 2:
                  (f = 0), (B = 0), (g = l), (v.label = 3);
                case 3:
                  return B < g.length
                    ? ((w = g[B]),
                      w.style !== 0 && !ar(w.color) && w.width > 0
                        ? w.style !== 2
                          ? [3, 5]
                          : [
                              4,
                              this.renderDashedDottedBorder(
                                w.color,
                                w.width,
                                f,
                                n.curves,
                                2,
                                /* DASHED */
                              ),
                            ]
                        : [3, 11])
                    : [3, 13];
                case 4:
                  return v.sent(), [3, 11];
                case 5:
                  return w.style !== 3
                    ? [3, 7]
                    : [
                        4,
                        this.renderDashedDottedBorder(
                          w.color,
                          w.width,
                          f,
                          n.curves,
                          3,
                          /* DOTTED */
                        ),
                      ];
                case 6:
                  return v.sent(), [3, 11];
                case 7:
                  return w.style !== 4
                    ? [3, 9]
                    : [
                        4,
                        this.renderDoubleBorder(w.color, w.width, f, n.curves),
                      ];
                case 8:
                  return v.sent(), [3, 11];
                case 9:
                  return [4, this.renderSolidBorder(w.color, f, n.curves)];
                case 10:
                  v.sent(), (v.label = 11);
                case 11:
                  f++, (v.label = 12);
                case 12:
                  return B++, [3, 3];
                case 13:
                  return [
                    2,
                    /*return*/
                  ];
              }
            });
          });
        }),
        (r.prototype.renderDashedDottedBorder = function (n, o, s, l, c) {
          return he(this, void 0, void 0, function () {
            var f, B, g, w, h, v, U, Q, m, F, E, I, R, T, k, O, k, O;
            return Be(this, function (M) {
              return (
                this.ctx.save(),
                (f = ZF(l, s)),
                (B = np(l, s)),
                c === 2 && (this.path(B), this.ctx.clip()),
                Pe(B[0])
                  ? ((g = B[0].start.x), (w = B[0].start.y))
                  : ((g = B[0].x), (w = B[0].y)),
                Pe(B[1])
                  ? ((h = B[1].end.x), (v = B[1].end.y))
                  : ((h = B[1].x), (v = B[1].y)),
                s === 0 || s === 2
                  ? (U = Math.abs(g - h))
                  : (U = Math.abs(w - v)),
                this.ctx.beginPath(),
                c === 3 ? this.formatPath(f) : this.formatPath(B.slice(0, 2)),
                (Q = o < 3 ? o * 3 : o * 2),
                (m = o < 3 ? o * 2 : o),
                c === 3 && ((Q = o), (m = o)),
                (F = !0),
                U <= Q * 2
                  ? (F = !1)
                  : U <= Q * 2 + m
                    ? ((E = U / (2 * Q + m)), (Q *= E), (m *= E))
                    : ((I = Math.floor((U + m) / (Q + m))),
                      (R = (U - I * Q) / (I - 1)),
                      (T = (U - (I + 1) * Q) / I),
                      (m =
                        T <= 0 || Math.abs(m - R) < Math.abs(m - T) ? R : T)),
                F &&
                  (c === 3
                    ? this.ctx.setLineDash([0, Q + m])
                    : this.ctx.setLineDash([Q, m])),
                c === 3
                  ? ((this.ctx.lineCap = "round"), (this.ctx.lineWidth = o))
                  : (this.ctx.lineWidth = o * 2 + 1.1),
                (this.ctx.strokeStyle = ne(n)),
                this.ctx.stroke(),
                this.ctx.setLineDash([]),
                c === 2 &&
                  (Pe(B[0]) &&
                    ((k = B[3]),
                    (O = B[0]),
                    this.ctx.beginPath(),
                    this.formatPath([
                      new AA(k.end.x, k.end.y),
                      new AA(O.start.x, O.start.y),
                    ]),
                    this.ctx.stroke()),
                  Pe(B[1]) &&
                    ((k = B[1]),
                    (O = B[2]),
                    this.ctx.beginPath(),
                    this.formatPath([
                      new AA(k.end.x, k.end.y),
                      new AA(O.start.x, O.start.y),
                    ]),
                    this.ctx.stroke())),
                this.ctx.restore(),
                [
                  2,
                  /*return*/
                ]
              );
            });
          });
        }),
        (r.prototype.render = function (n) {
          return he(this, void 0, void 0, function () {
            var o;
            return Be(this, function (s) {
              switch (s.label) {
                case 0:
                  return (
                    this.options.backgroundColor &&
                      ((this.ctx.fillStyle = ne(this.options.backgroundColor)),
                      this.ctx.fillRect(
                        this.options.x,
                        this.options.y,
                        this.options.width,
                        this.options.height,
                      )),
                    (o = zF(n)),
                    [4, this.renderStack(o)]
                  );
                case 1:
                  return s.sent(), this.applyEffects([]), [2, this.canvas];
              }
            });
          });
        }),
        r
      );
    })(Ow),
  iE = function (e) {
    return e instanceof Cw || e instanceof mw
      ? !0
      : e instanceof Nc && e.type !== Ys && e.type !== Js;
  },
  sE = function (e, r) {
    switch (e) {
      case 0:
        return qs(r);
      case 2:
        return _F(r);
      case 1:
      default:
        return Aa(r);
    }
  },
  aE = function (e) {
    switch (e) {
      case 1:
        return "center";
      case 2:
        return "right";
      case 0:
      default:
        return "left";
    }
  },
  lE = ["-apple-system", "system-ui"],
  uE = function (e) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent)
      ? e.filter(function (r) {
          return lE.indexOf(r) === -1;
        })
      : e;
  },
  cE =
    /** @class */
    (function (e) {
      et(r, e);
      function r(n, o) {
        var s = e.call(this, n, o) || this;
        return (
          (s.canvas = o.canvas ? o.canvas : document.createElement("canvas")),
          (s.ctx = s.canvas.getContext("2d")),
          (s.options = o),
          (s.canvas.width = Math.floor(o.width * o.scale)),
          (s.canvas.height = Math.floor(o.height * o.scale)),
          (s.canvas.style.width = o.width + "px"),
          (s.canvas.style.height = o.height + "px"),
          s.ctx.scale(s.options.scale, s.options.scale),
          s.ctx.translate(-o.x, -o.y),
          s.context.logger.debug(
            "EXPERIMENTAL ForeignObject renderer initialized (" +
              o.width +
              "x" +
              o.height +
              " at " +
              o.x +
              "," +
              o.y +
              ") with scale " +
              o.scale,
          ),
          s
        );
      }
      return (
        (r.prototype.render = function (n) {
          return he(this, void 0, void 0, function () {
            var o, s;
            return Be(this, function (l) {
              switch (l.label) {
                case 0:
                  return (
                    (o = dc(
                      this.options.width * this.options.scale,
                      this.options.height * this.options.scale,
                      this.options.scale,
                      this.options.scale,
                      n,
                    )),
                    [4, fE(o)]
                  );
                case 1:
                  return (
                    (s = l.sent()),
                    this.options.backgroundColor &&
                      ((this.ctx.fillStyle = ne(this.options.backgroundColor)),
                      this.ctx.fillRect(
                        0,
                        0,
                        this.options.width * this.options.scale,
                        this.options.height * this.options.scale,
                      )),
                    this.ctx.drawImage(
                      s,
                      -this.options.x * this.options.scale,
                      -this.options.y * this.options.scale,
                    ),
                    [2, this.canvas]
                  );
              }
            });
          });
        }),
        r
      );
    })(Ow),
  fE = function (e) {
    return new Promise(function (r, n) {
      var o = new Image();
      (o.onload = function () {
        r(o);
      }),
        (o.onerror = n),
        (o.src =
          "data:image/svg+xml;charset=utf-8," +
          encodeURIComponent(new XMLSerializer().serializeToString(e)));
    });
  },
  dE =
    /** @class */
    (function () {
      function e(r) {
        var n = r.id,
          o = r.enabled;
        (this.id = n), (this.enabled = o), (this.start = Date.now());
      }
      return (
        (e.prototype.debug = function () {
          for (var r = [], n = 0; n < arguments.length; n++)
            r[n] = arguments[n];
          this.enabled &&
            (typeof window < "u" &&
            window.console &&
            typeof console.debug == "function"
              ? console.debug.apply(
                  console,
                  ss([this.id, this.getTime() + "ms"], r),
                )
              : this.info.apply(this, r));
        }),
        (e.prototype.getTime = function () {
          return Date.now() - this.start;
        }),
        (e.prototype.info = function () {
          for (var r = [], n = 0; n < arguments.length; n++)
            r[n] = arguments[n];
          this.enabled &&
            typeof window < "u" &&
            window.console &&
            typeof console.info == "function" &&
            console.info.apply(
              console,
              ss([this.id, this.getTime() + "ms"], r),
            );
        }),
        (e.prototype.warn = function () {
          for (var r = [], n = 0; n < arguments.length; n++)
            r[n] = arguments[n];
          this.enabled &&
            (typeof window < "u" &&
            window.console &&
            typeof console.warn == "function"
              ? console.warn.apply(
                  console,
                  ss([this.id, this.getTime() + "ms"], r),
                )
              : this.info.apply(this, r));
        }),
        (e.prototype.error = function () {
          for (var r = [], n = 0; n < arguments.length; n++)
            r[n] = arguments[n];
          this.enabled &&
            (typeof window < "u" &&
            window.console &&
            typeof console.error == "function"
              ? console.error.apply(
                  console,
                  ss([this.id, this.getTime() + "ms"], r),
                )
              : this.info.apply(this, r));
        }),
        (e.instances = {}),
        e
      );
    })(),
  BE =
    /** @class */
    (function () {
      function e(r, n) {
        var o;
        (this.windowBounds = n),
          (this.instanceName = "#" + e.instanceCount++),
          (this.logger = new dE({ id: this.instanceName, enabled: r.logging })),
          (this.cache =
            (o = r.cache) !== null && o !== void 0 ? o : new DF(this, r));
      }
      return (e.instanceCount = 1), e;
    })(),
  gE = function (e, r) {
    return r === void 0 && (r = {}), pE(e, r);
  };
typeof window < "u" && Lw.setContext(window);
var pE = function (e, r) {
    return he(void 0, void 0, void 0, function () {
      var n,
        o,
        s,
        l,
        c,
        f,
        B,
        g,
        w,
        h,
        v,
        U,
        Q,
        m,
        F,
        E,
        I,
        R,
        T,
        k,
        M,
        O,
        M,
        X,
        z,
        nA,
        dA,
        V,
        q,
        rA,
        uA,
        aA,
        Z,
        P,
        j,
        Y,
        H,
        N,
        cA,
        fA;
      return Be(this, function (wA) {
        switch (wA.label) {
          case 0:
            if (!e || typeof e != "object")
              return [
                2,
                Promise.reject("Invalid element provided as first argument"),
              ];
            if (((n = e.ownerDocument), !n))
              throw new Error("Element is not attached to a Document");
            if (((o = n.defaultView), !o))
              throw new Error("Document is not attached to a Window");
            return (
              (s = {
                allowTaint:
                  (X = r.allowTaint) !== null && X !== void 0 ? X : !1,
                imageTimeout:
                  (z = r.imageTimeout) !== null && z !== void 0 ? z : 15e3,
                proxy: r.proxy,
                useCORS: (nA = r.useCORS) !== null && nA !== void 0 ? nA : !1,
              }),
              (l = $u(
                {
                  logging: (dA = r.logging) !== null && dA !== void 0 ? dA : !0,
                  cache: r.cache,
                },
                s,
              )),
              (c = {
                windowWidth:
                  (V = r.windowWidth) !== null && V !== void 0
                    ? V
                    : o.innerWidth,
                windowHeight:
                  (q = r.windowHeight) !== null && q !== void 0
                    ? q
                    : o.innerHeight,
                scrollX:
                  (rA = r.scrollX) !== null && rA !== void 0
                    ? rA
                    : o.pageXOffset,
                scrollY:
                  (uA = r.scrollY) !== null && uA !== void 0
                    ? uA
                    : o.pageYOffset,
              }),
              (f = new xt(c.scrollX, c.scrollY, c.windowWidth, c.windowHeight)),
              (B = new BE(l, f)),
              (g =
                (aA = r.foreignObjectRendering) !== null && aA !== void 0
                  ? aA
                  : !1),
              (w = {
                allowTaint:
                  (Z = r.allowTaint) !== null && Z !== void 0 ? Z : !1,
                onclone: r.onclone,
                ignoreElements: r.ignoreElements,
                inlineImages: g,
                copyStyles: g,
              }),
              B.logger.debug(
                "Starting document clone with size " +
                  f.width +
                  "x" +
                  f.height +
                  " scrolled to " +
                  -f.left +
                  "," +
                  -f.top,
              ),
              (h = new ep(B, e, w)),
              (v = h.clonedReferenceElement),
              v
                ? [4, h.toIFrame(n, f)]
                : [2, Promise.reject("Unable to find element in cloned iframe")]
            );
          case 1:
            return (
              (U = wA.sent()),
              (Q = Mc(v) || wF(v) ? Xm(v.ownerDocument) : aa(B, v)),
              (m = Q.width),
              (F = Q.height),
              (E = Q.left),
              (I = Q.top),
              (R = wE(B, v, r.backgroundColor)),
              (T = {
                canvas: r.canvas,
                backgroundColor: R,
                scale:
                  (j =
                    (P = r.scale) !== null && P !== void 0
                      ? P
                      : o.devicePixelRatio) !== null && j !== void 0
                    ? j
                    : 1,
                x: ((Y = r.x) !== null && Y !== void 0 ? Y : 0) + E,
                y: ((H = r.y) !== null && H !== void 0 ? H : 0) + I,
                width:
                  (N = r.width) !== null && N !== void 0 ? N : Math.ceil(m),
                height:
                  (cA = r.height) !== null && cA !== void 0 ? cA : Math.ceil(F),
              }),
              g
                ? (B.logger.debug(
                    "Document cloned, using foreign object rendering",
                  ),
                  (M = new cE(B, T)),
                  [4, M.render(v)])
                : [3, 3]
            );
          case 2:
            return (k = wA.sent()), [3, 5];
          case 3:
            return (
              B.logger.debug(
                "Document cloned, element located at " +
                  E +
                  "," +
                  I +
                  " with size " +
                  m +
                  "x" +
                  F +
                  " using computed rendering",
              ),
              B.logger.debug("Starting DOM parsing"),
              (O = Uw(B, v)),
              R === O.styles.backgroundColor &&
                (O.styles.backgroundColor = Et.TRANSPARENT),
              B.logger.debug(
                "Starting renderer for element at " +
                  T.x +
                  "," +
                  T.y +
                  " with size " +
                  T.width +
                  "x" +
                  T.height,
              ),
              (M = new oE(B, T)),
              [4, M.render(O)]
            );
          case 4:
            (k = wA.sent()), (wA.label = 5);
          case 5:
            return (
              (!((fA = r.removeContainer) !== null && fA !== void 0) || fA) &&
                (ep.destroy(U) ||
                  B.logger.error(
                    "Cannot detach cloned iframe as it is not in the DOM anymore",
                  )),
              B.logger.debug("Finished rendering"),
              [2, k]
            );
        }
      });
    });
  },
  wE = function (e, r, n) {
    var o = r.ownerDocument,
      s = o.documentElement
        ? No(e, getComputedStyle(o.documentElement).backgroundColor)
        : Et.TRANSPARENT,
      l = o.body
        ? No(e, getComputedStyle(o.body).backgroundColor)
        : Et.TRANSPARENT,
      c =
        typeof n == "string"
          ? No(e, n)
          : n === null
            ? Et.TRANSPARENT
            : 4294967295;
    return r === o.documentElement ? (ar(s) ? (ar(l) ? c : l) : s) : c;
  };
function hE(e, r) {
  typeof e == "function" ? e(r) : e != null && (e.current = r);
}
function Nw(...e) {
  return (r) => e.forEach((n) => hE(n, r));
}
function zA(...e) {
  return C.useCallback(Nw(...e), e);
}
var Dr = C.forwardRef((e, r) => {
  const { children: n, ...o } = e,
    s = C.Children.toArray(n),
    l = s.find(mE);
  if (l) {
    const c = l.props.children,
      f = s.map((B) =>
        B === l
          ? C.Children.count(c) > 1
            ? C.Children.only(null)
            : C.isValidElement(c)
              ? c.props.children
              : null
          : B,
      );
    return /* @__PURE__ */ b.jsx(mc, {
      ...o,
      ref: r,
      children: C.isValidElement(c) ? C.cloneElement(c, void 0, f) : null,
    });
  }
  return /* @__PURE__ */ b.jsx(mc, { ...o, ref: r, children: n });
});
Dr.displayName = "Slot";
var mc = C.forwardRef((e, r) => {
  const { children: n, ...o } = e;
  if (C.isValidElement(n)) {
    const s = QE(n);
    return C.cloneElement(n, {
      ...CE(o, n.props),
      // @ts-ignore
      ref: r ? Nw(r, s) : s,
    });
  }
  return C.Children.count(n) > 1 ? C.Children.only(null) : null;
});
mc.displayName = "SlotClone";
var vE = ({ children: e }) =>
  /* @__PURE__ */ b.jsx(b.Fragment, { children: e });
function mE(e) {
  return C.isValidElement(e) && e.type === vE;
}
function CE(e, r) {
  const n = { ...r };
  for (const o in r) {
    const s = e[o],
      l = r[o];
    /^on[A-Z]/.test(o)
      ? s && l
        ? (n[o] = (...f) => {
            l(...f), s(...f);
          })
        : s && (n[o] = s)
      : o === "style"
        ? (n[o] = { ...s, ...l })
        : o === "className" && (n[o] = [s, l].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function QE(e) {
  let r = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    n = r && "isReactWarning" in r && r.isReactWarning;
  return n
    ? e.ref
    : ((r = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (n = r && "isReactWarning" in r && r.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Mw(e) {
  var r,
    n,
    o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (r = 0; r < e.length; r++)
        e[r] && (n = Mw(e[r])) && (o && (o += " "), (o += n));
    else for (r in e) e[r] && (o && (o += " "), (o += r));
  return o;
}
function yE() {
  for (var e, r, n = 0, o = ""; n < arguments.length; )
    (e = arguments[n++]) && (r = Mw(e)) && (o && (o += " "), (o += r));
  return o;
}
const ip = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  sp = yE,
  Pc = (e, r) => (n) => {
    var o;
    if (r?.variants == null) return sp(e, n?.class, n?.className);
    const { variants: s, defaultVariants: l } = r,
      c = Object.keys(s).map((g) => {
        const w = n?.[g],
          h = l?.[g];
        if (w === null) return null;
        const v = ip(w) || ip(h);
        return s[g][v];
      }),
      f =
        n &&
        Object.entries(n).reduce((g, w) => {
          let [h, v] = w;
          return v === void 0 || (g[h] = v), g;
        }, {}),
      B =
        r == null || (o = r.compoundVariants) === null || o === void 0
          ? void 0
          : o.reduce((g, w) => {
              let { class: h, className: v, ...U } = w;
              return Object.entries(U).every((Q) => {
                let [m, F] = Q;
                return Array.isArray(F)
                  ? F.includes(
                      {
                        ...l,
                        ...f,
                      }[m],
                    )
                  : {
                      ...l,
                      ...f,
                    }[m] === F;
              })
                ? [...g, h, v]
                : g;
            }, []);
    return sp(e, c, B, n?.class, n?.className);
  };
function Pw(e) {
  var r,
    n,
    o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (r = 0; r < s; r++)
        e[r] && (n = Pw(e[r])) && (o && (o += " "), (o += n));
    } else for (n in e) e[n] && (o && (o += " "), (o += n));
  return o;
}
function UE() {
  for (var e, r, n = 0, o = "", s = arguments.length; n < s; n++)
    (e = arguments[n]) && (r = Pw(e)) && (o && (o += " "), (o += r));
  return o;
}
const _c = "-",
  FE = (e) => {
    const r = xE(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: o } = e;
    return {
      getClassGroupId: (c) => {
        const f = c.split(_c);
        return f[0] === "" && f.length !== 1 && f.shift(), _w(f, r) || EE(c);
      },
      getConflictingClassGroupIds: (c, f) => {
        const B = n[c] || [];
        return f && o[c] ? [...B, ...o[c]] : B;
      },
    };
  },
  _w = (e, r) => {
    if (e.length === 0) return r.classGroupId;
    const n = e[0],
      o = r.nextPart.get(n),
      s = o ? _w(e.slice(1), o) : void 0;
    if (s) return s;
    if (r.validators.length === 0) return;
    const l = e.join(_c);
    return r.validators.find(({ validator: c }) => c(l))?.classGroupId;
  },
  ap = /^\[(.+)\]$/,
  EE = (e) => {
    if (ap.test(e)) {
      const r = ap.exec(e)[1],
        n = r?.substring(0, r.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  xE = (e) => {
    const { theme: r, prefix: n } = e,
      o = {
        nextPart: /* @__PURE__ */ new Map(),
        validators: [],
      };
    return (
      HE(Object.entries(e.classGroups), n).forEach(([l, c]) => {
        Cc(c, o, l, r);
      }),
      o
    );
  },
  Cc = (e, r, n, o) => {
    e.forEach((s) => {
      if (typeof s == "string") {
        const l = s === "" ? r : lp(r, s);
        l.classGroupId = n;
        return;
      }
      if (typeof s == "function") {
        if (IE(s)) {
          Cc(s(o), r, n, o);
          return;
        }
        r.validators.push({
          validator: s,
          classGroupId: n,
        });
        return;
      }
      Object.entries(s).forEach(([l, c]) => {
        Cc(c, lp(r, l), n, o);
      });
    });
  },
  lp = (e, r) => {
    let n = e;
    return (
      r.split(_c).forEach((o) => {
        n.nextPart.has(o) ||
          n.nextPart.set(o, {
            nextPart: /* @__PURE__ */ new Map(),
            validators: [],
          }),
          (n = n.nextPart.get(o));
      }),
      n
    );
  },
  IE = (e) => e.isThemeGetter,
  HE = (e, r) =>
    r
      ? e.map(([n, o]) => {
          const s = o.map((l) =>
            typeof l == "string"
              ? r + l
              : typeof l == "object"
                ? Object.fromEntries(
                    Object.entries(l).map(([c, f]) => [r + c, f]),
                  )
                : l,
          );
          return [n, s];
        })
      : e,
  SE = (e) => {
    if (e < 1)
      return {
        get: () => {},
        set: () => {},
      };
    let r = 0,
      n = /* @__PURE__ */ new Map(),
      o = /* @__PURE__ */ new Map();
    const s = (l, c) => {
      n.set(l, c),
        r++,
        r > e && ((r = 0), (o = n), (n = /* @__PURE__ */ new Map()));
    };
    return {
      get(l) {
        let c = n.get(l);
        if (c !== void 0) return c;
        if ((c = o.get(l)) !== void 0) return s(l, c), c;
      },
      set(l, c) {
        n.has(l) ? n.set(l, c) : s(l, c);
      },
    };
  },
  Vw = "!",
  bE = (e) => {
    const { separator: r, experimentalParseClassName: n } = e,
      o = r.length === 1,
      s = r[0],
      l = r.length,
      c = (f) => {
        const B = [];
        let g = 0,
          w = 0,
          h;
        for (let F = 0; F < f.length; F++) {
          let E = f[F];
          if (g === 0) {
            if (E === s && (o || f.slice(F, F + l) === r)) {
              B.push(f.slice(w, F)), (w = F + l);
              continue;
            }
            if (E === "/") {
              h = F;
              continue;
            }
          }
          E === "[" ? g++ : E === "]" && g--;
        }
        const v = B.length === 0 ? f : f.substring(w),
          U = v.startsWith(Vw),
          Q = U ? v.substring(1) : v,
          m = h && h > w ? h - w : void 0;
        return {
          modifiers: B,
          hasImportantModifier: U,
          baseClassName: Q,
          maybePostfixModifierPosition: m,
        };
      };
    return n
      ? (f) =>
          n({
            className: f,
            parseClassName: c,
          })
      : c;
  },
  LE = (e) => {
    if (e.length <= 1) return e;
    const r = [];
    let n = [];
    return (
      e.forEach((o) => {
        o[0] === "[" ? (r.push(...n.sort(), o), (n = [])) : n.push(o);
      }),
      r.push(...n.sort()),
      r
    );
  },
  TE = (e) => ({
    cache: SE(e.cacheSize),
    parseClassName: bE(e),
    ...FE(e),
  }),
  DE = /\s+/,
  KE = (e, r) => {
    const {
        parseClassName: n,
        getClassGroupId: o,
        getConflictingClassGroupIds: s,
      } = r,
      l = [],
      c = e.trim().split(DE);
    let f = "";
    for (let B = c.length - 1; B >= 0; B -= 1) {
      const g = c[B],
        {
          modifiers: w,
          hasImportantModifier: h,
          baseClassName: v,
          maybePostfixModifierPosition: U,
        } = n(g);
      let Q = !!U,
        m = o(Q ? v.substring(0, U) : v);
      if (!m) {
        if (!Q) {
          f = g + (f.length > 0 ? " " + f : f);
          continue;
        }
        if (((m = o(v)), !m)) {
          f = g + (f.length > 0 ? " " + f : f);
          continue;
        }
        Q = !1;
      }
      const F = LE(w).join(":"),
        E = h ? F + Vw : F,
        I = E + m;
      if (l.includes(I)) continue;
      l.push(I);
      const R = s(m, Q);
      for (let T = 0; T < R.length; ++T) {
        const k = R[T];
        l.push(E + k);
      }
      f = g + (f.length > 0 ? " " + f : f);
    }
    return f;
  };
function kE() {
  let e = 0,
    r,
    n,
    o = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (n = Gw(r)) && (o && (o += " "), (o += n));
  return o;
}
const Gw = (e) => {
  if (typeof e == "string") return e;
  let r,
    n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (r = Gw(e[o])) && (n && (n += " "), (n += r));
  return n;
};
function RE(e, ...r) {
  let n,
    o,
    s,
    l = c;
  function c(B) {
    const g = r.reduce((w, h) => h(w), e());
    return (n = TE(g)), (o = n.cache.get), (s = n.cache.set), (l = f), f(B);
  }
  function f(B) {
    const g = o(B);
    if (g) return g;
    const w = KE(B, n);
    return s(B, w), w;
  }
  return function () {
    return l(kE.apply(null, arguments));
  };
}
const kA = (e) => {
    const r = (n) => n[e] || [];
    return (r.isThemeGetter = !0), r;
  },
  Ww = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  OE = /^\d+\/\d+$/,
  NE = /* @__PURE__ */ new Set(["px", "full", "screen"]),
  ME = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  PE =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  _E = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  VE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  GE =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ut = (e) => En(e) || NE.has(e) || OE.test(e),
  Zt = (e) => Tn(e, "length", $E),
  En = (e) => !!e && !Number.isNaN(Number(e)),
  Pu = (e) => Tn(e, "number", En),
  Io = (e) => !!e && Number.isInteger(Number(e)),
  WE = (e) => e.endsWith("%") && En(e.slice(0, -1)),
  mA = (e) => Ww.test(e),
  $t = (e) => ME.test(e),
  jE = /* @__PURE__ */ new Set(["length", "size", "percentage"]),
  XE = (e) => Tn(e, jE, jw),
  zE = (e) => Tn(e, "position", jw),
  JE = /* @__PURE__ */ new Set(["image", "url"]),
  YE = (e) => Tn(e, JE, A1),
  ZE = (e) => Tn(e, "", qE),
  Ho = () => !0,
  Tn = (e, r, n) => {
    const o = Ww.exec(e);
    return o
      ? o[1]
        ? typeof r == "string"
          ? o[1] === r
          : r.has(o[1])
        : n(o[2])
      : !1;
  },
  $E = (e) =>
    // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
    // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
    // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
    PE.test(e) && !_E.test(e),
  jw = () => !1,
  qE = (e) => VE.test(e),
  A1 = (e) => GE.test(e),
  e1 = () => {
    const e = kA("colors"),
      r = kA("spacing"),
      n = kA("blur"),
      o = kA("brightness"),
      s = kA("borderColor"),
      l = kA("borderRadius"),
      c = kA("borderSpacing"),
      f = kA("borderWidth"),
      B = kA("contrast"),
      g = kA("grayscale"),
      w = kA("hueRotate"),
      h = kA("invert"),
      v = kA("gap"),
      U = kA("gradientColorStops"),
      Q = kA("gradientColorStopPositions"),
      m = kA("inset"),
      F = kA("margin"),
      E = kA("opacity"),
      I = kA("padding"),
      R = kA("saturate"),
      T = kA("scale"),
      k = kA("sepia"),
      O = kA("skew"),
      M = kA("space"),
      X = kA("translate"),
      z = () => ["auto", "contain", "none"],
      nA = () => ["auto", "hidden", "clip", "visible", "scroll"],
      dA = () => ["auto", mA, r],
      V = () => [mA, r],
      q = () => ["", Ut, Zt],
      rA = () => ["auto", En, mA],
      uA = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      aA = () => ["solid", "dashed", "dotted", "double", "none"],
      Z = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      P = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      j = () => ["", "0", mA],
      Y = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      H = () => [En, mA];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Ho],
        spacing: [Ut, Zt],
        blur: ["none", "", $t, mA],
        brightness: H(),
        borderColor: [e],
        borderRadius: ["none", "", "full", $t, mA],
        borderSpacing: V(),
        borderWidth: q(),
        contrast: H(),
        grayscale: j(),
        hueRotate: H(),
        invert: j(),
        gap: V(),
        gradientColorStops: [e],
        gradientColorStopPositions: [WE, Zt],
        inset: dA(),
        margin: dA(),
        opacity: H(),
        padding: V(),
        saturate: H(),
        scale: H(),
        sepia: j(),
        skew: H(),
        space: V(),
        translate: V(),
      },
      classGroups: {
        // Layout
        /**
         * Aspect Ratio
         * @see https://tailwindcss.com/docs/aspect-ratio
         */
        aspect: [
          {
            aspect: ["auto", "square", "video", mA],
          },
        ],
        /**
         * Container
         * @see https://tailwindcss.com/docs/container
         */
        container: ["container"],
        /**
         * Columns
         * @see https://tailwindcss.com/docs/columns
         */
        columns: [
          {
            columns: [$t],
          },
        ],
        /**
         * Break After
         * @see https://tailwindcss.com/docs/break-after
         */
        "break-after": [
          {
            "break-after": Y(),
          },
        ],
        /**
         * Break Before
         * @see https://tailwindcss.com/docs/break-before
         */
        "break-before": [
          {
            "break-before": Y(),
          },
        ],
        /**
         * Break Inside
         * @see https://tailwindcss.com/docs/break-inside
         */
        "break-inside": [
          {
            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
          },
        ],
        /**
         * Box Decoration Break
         * @see https://tailwindcss.com/docs/box-decoration-break
         */
        "box-decoration": [
          {
            "box-decoration": ["slice", "clone"],
          },
        ],
        /**
         * Box Sizing
         * @see https://tailwindcss.com/docs/box-sizing
         */
        box: [
          {
            box: ["border", "content"],
          },
        ],
        /**
         * Display
         * @see https://tailwindcss.com/docs/display
         */
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        /**
         * Floats
         * @see https://tailwindcss.com/docs/float
         */
        float: [
          {
            float: ["right", "left", "none", "start", "end"],
          },
        ],
        /**
         * Clear
         * @see https://tailwindcss.com/docs/clear
         */
        clear: [
          {
            clear: ["left", "right", "both", "none", "start", "end"],
          },
        ],
        /**
         * Isolation
         * @see https://tailwindcss.com/docs/isolation
         */
        isolation: ["isolate", "isolation-auto"],
        /**
         * Object Fit
         * @see https://tailwindcss.com/docs/object-fit
         */
        "object-fit": [
          {
            object: ["contain", "cover", "fill", "none", "scale-down"],
          },
        ],
        /**
         * Object Position
         * @see https://tailwindcss.com/docs/object-position
         */
        "object-position": [
          {
            object: [...uA(), mA],
          },
        ],
        /**
         * Overflow
         * @see https://tailwindcss.com/docs/overflow
         */
        overflow: [
          {
            overflow: nA(),
          },
        ],
        /**
         * Overflow X
         * @see https://tailwindcss.com/docs/overflow
         */
        "overflow-x": [
          {
            "overflow-x": nA(),
          },
        ],
        /**
         * Overflow Y
         * @see https://tailwindcss.com/docs/overflow
         */
        "overflow-y": [
          {
            "overflow-y": nA(),
          },
        ],
        /**
         * Overscroll Behavior
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        overscroll: [
          {
            overscroll: z(),
          },
        ],
        /**
         * Overscroll Behavior X
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        "overscroll-x": [
          {
            "overscroll-x": z(),
          },
        ],
        /**
         * Overscroll Behavior Y
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        "overscroll-y": [
          {
            "overscroll-y": z(),
          },
        ],
        /**
         * Position
         * @see https://tailwindcss.com/docs/position
         */
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        /**
         * Top / Right / Bottom / Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        inset: [
          {
            inset: [m],
          },
        ],
        /**
         * Right / Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        "inset-x": [
          {
            "inset-x": [m],
          },
        ],
        /**
         * Top / Bottom
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        "inset-y": [
          {
            "inset-y": [m],
          },
        ],
        /**
         * Start
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        start: [
          {
            start: [m],
          },
        ],
        /**
         * End
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        end: [
          {
            end: [m],
          },
        ],
        /**
         * Top
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        top: [
          {
            top: [m],
          },
        ],
        /**
         * Right
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        right: [
          {
            right: [m],
          },
        ],
        /**
         * Bottom
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        bottom: [
          {
            bottom: [m],
          },
        ],
        /**
         * Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        left: [
          {
            left: [m],
          },
        ],
        /**
         * Visibility
         * @see https://tailwindcss.com/docs/visibility
         */
        visibility: ["visible", "invisible", "collapse"],
        /**
         * Z-Index
         * @see https://tailwindcss.com/docs/z-index
         */
        z: [
          {
            z: ["auto", Io, mA],
          },
        ],
        // Flexbox and Grid
        /**
         * Flex Basis
         * @see https://tailwindcss.com/docs/flex-basis
         */
        basis: [
          {
            basis: dA(),
          },
        ],
        /**
         * Flex Direction
         * @see https://tailwindcss.com/docs/flex-direction
         */
        "flex-direction": [
          {
            flex: ["row", "row-reverse", "col", "col-reverse"],
          },
        ],
        /**
         * Flex Wrap
         * @see https://tailwindcss.com/docs/flex-wrap
         */
        "flex-wrap": [
          {
            flex: ["wrap", "wrap-reverse", "nowrap"],
          },
        ],
        /**
         * Flex
         * @see https://tailwindcss.com/docs/flex
         */
        flex: [
          {
            flex: ["1", "auto", "initial", "none", mA],
          },
        ],
        /**
         * Flex Grow
         * @see https://tailwindcss.com/docs/flex-grow
         */
        grow: [
          {
            grow: j(),
          },
        ],
        /**
         * Flex Shrink
         * @see https://tailwindcss.com/docs/flex-shrink
         */
        shrink: [
          {
            shrink: j(),
          },
        ],
        /**
         * Order
         * @see https://tailwindcss.com/docs/order
         */
        order: [
          {
            order: ["first", "last", "none", Io, mA],
          },
        ],
        /**
         * Grid Template Columns
         * @see https://tailwindcss.com/docs/grid-template-columns
         */
        "grid-cols": [
          {
            "grid-cols": [Ho],
          },
        ],
        /**
         * Grid Column Start / End
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-start-end": [
          {
            col: [
              "auto",
              {
                span: ["full", Io, mA],
              },
              mA,
            ],
          },
        ],
        /**
         * Grid Column Start
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-start": [
          {
            "col-start": rA(),
          },
        ],
        /**
         * Grid Column End
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-end": [
          {
            "col-end": rA(),
          },
        ],
        /**
         * Grid Template Rows
         * @see https://tailwindcss.com/docs/grid-template-rows
         */
        "grid-rows": [
          {
            "grid-rows": [Ho],
          },
        ],
        /**
         * Grid Row Start / End
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-start-end": [
          {
            row: [
              "auto",
              {
                span: [Io, mA],
              },
              mA,
            ],
          },
        ],
        /**
         * Grid Row Start
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-start": [
          {
            "row-start": rA(),
          },
        ],
        /**
         * Grid Row End
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-end": [
          {
            "row-end": rA(),
          },
        ],
        /**
         * Grid Auto Flow
         * @see https://tailwindcss.com/docs/grid-auto-flow
         */
        "grid-flow": [
          {
            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
          },
        ],
        /**
         * Grid Auto Columns
         * @see https://tailwindcss.com/docs/grid-auto-columns
         */
        "auto-cols": [
          {
            "auto-cols": ["auto", "min", "max", "fr", mA],
          },
        ],
        /**
         * Grid Auto Rows
         * @see https://tailwindcss.com/docs/grid-auto-rows
         */
        "auto-rows": [
          {
            "auto-rows": ["auto", "min", "max", "fr", mA],
          },
        ],
        /**
         * Gap
         * @see https://tailwindcss.com/docs/gap
         */
        gap: [
          {
            gap: [v],
          },
        ],
        /**
         * Gap X
         * @see https://tailwindcss.com/docs/gap
         */
        "gap-x": [
          {
            "gap-x": [v],
          },
        ],
        /**
         * Gap Y
         * @see https://tailwindcss.com/docs/gap
         */
        "gap-y": [
          {
            "gap-y": [v],
          },
        ],
        /**
         * Justify Content
         * @see https://tailwindcss.com/docs/justify-content
         */
        "justify-content": [
          {
            justify: ["normal", ...P()],
          },
        ],
        /**
         * Justify Items
         * @see https://tailwindcss.com/docs/justify-items
         */
        "justify-items": [
          {
            "justify-items": ["start", "end", "center", "stretch"],
          },
        ],
        /**
         * Justify Self
         * @see https://tailwindcss.com/docs/justify-self
         */
        "justify-self": [
          {
            "justify-self": ["auto", "start", "end", "center", "stretch"],
          },
        ],
        /**
         * Align Content
         * @see https://tailwindcss.com/docs/align-content
         */
        "align-content": [
          {
            content: ["normal", ...P(), "baseline"],
          },
        ],
        /**
         * Align Items
         * @see https://tailwindcss.com/docs/align-items
         */
        "align-items": [
          {
            items: ["start", "end", "center", "baseline", "stretch"],
          },
        ],
        /**
         * Align Self
         * @see https://tailwindcss.com/docs/align-self
         */
        "align-self": [
          {
            self: ["auto", "start", "end", "center", "stretch", "baseline"],
          },
        ],
        /**
         * Place Content
         * @see https://tailwindcss.com/docs/place-content
         */
        "place-content": [
          {
            "place-content": [...P(), "baseline"],
          },
        ],
        /**
         * Place Items
         * @see https://tailwindcss.com/docs/place-items
         */
        "place-items": [
          {
            "place-items": ["start", "end", "center", "baseline", "stretch"],
          },
        ],
        /**
         * Place Self
         * @see https://tailwindcss.com/docs/place-self
         */
        "place-self": [
          {
            "place-self": ["auto", "start", "end", "center", "stretch"],
          },
        ],
        // Spacing
        /**
         * Padding
         * @see https://tailwindcss.com/docs/padding
         */
        p: [
          {
            p: [I],
          },
        ],
        /**
         * Padding X
         * @see https://tailwindcss.com/docs/padding
         */
        px: [
          {
            px: [I],
          },
        ],
        /**
         * Padding Y
         * @see https://tailwindcss.com/docs/padding
         */
        py: [
          {
            py: [I],
          },
        ],
        /**
         * Padding Start
         * @see https://tailwindcss.com/docs/padding
         */
        ps: [
          {
            ps: [I],
          },
        ],
        /**
         * Padding End
         * @see https://tailwindcss.com/docs/padding
         */
        pe: [
          {
            pe: [I],
          },
        ],
        /**
         * Padding Top
         * @see https://tailwindcss.com/docs/padding
         */
        pt: [
          {
            pt: [I],
          },
        ],
        /**
         * Padding Right
         * @see https://tailwindcss.com/docs/padding
         */
        pr: [
          {
            pr: [I],
          },
        ],
        /**
         * Padding Bottom
         * @see https://tailwindcss.com/docs/padding
         */
        pb: [
          {
            pb: [I],
          },
        ],
        /**
         * Padding Left
         * @see https://tailwindcss.com/docs/padding
         */
        pl: [
          {
            pl: [I],
          },
        ],
        /**
         * Margin
         * @see https://tailwindcss.com/docs/margin
         */
        m: [
          {
            m: [F],
          },
        ],
        /**
         * Margin X
         * @see https://tailwindcss.com/docs/margin
         */
        mx: [
          {
            mx: [F],
          },
        ],
        /**
         * Margin Y
         * @see https://tailwindcss.com/docs/margin
         */
        my: [
          {
            my: [F],
          },
        ],
        /**
         * Margin Start
         * @see https://tailwindcss.com/docs/margin
         */
        ms: [
          {
            ms: [F],
          },
        ],
        /**
         * Margin End
         * @see https://tailwindcss.com/docs/margin
         */
        me: [
          {
            me: [F],
          },
        ],
        /**
         * Margin Top
         * @see https://tailwindcss.com/docs/margin
         */
        mt: [
          {
            mt: [F],
          },
        ],
        /**
         * Margin Right
         * @see https://tailwindcss.com/docs/margin
         */
        mr: [
          {
            mr: [F],
          },
        ],
        /**
         * Margin Bottom
         * @see https://tailwindcss.com/docs/margin
         */
        mb: [
          {
            mb: [F],
          },
        ],
        /**
         * Margin Left
         * @see https://tailwindcss.com/docs/margin
         */
        ml: [
          {
            ml: [F],
          },
        ],
        /**
         * Space Between X
         * @see https://tailwindcss.com/docs/space
         */
        "space-x": [
          {
            "space-x": [M],
          },
        ],
        /**
         * Space Between X Reverse
         * @see https://tailwindcss.com/docs/space
         */
        "space-x-reverse": ["space-x-reverse"],
        /**
         * Space Between Y
         * @see https://tailwindcss.com/docs/space
         */
        "space-y": [
          {
            "space-y": [M],
          },
        ],
        /**
         * Space Between Y Reverse
         * @see https://tailwindcss.com/docs/space
         */
        "space-y-reverse": ["space-y-reverse"],
        // Sizing
        /**
         * Width
         * @see https://tailwindcss.com/docs/width
         */
        w: [
          {
            w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", mA, r],
          },
        ],
        /**
         * Min-Width
         * @see https://tailwindcss.com/docs/min-width
         */
        "min-w": [
          {
            "min-w": [mA, r, "min", "max", "fit"],
          },
        ],
        /**
         * Max-Width
         * @see https://tailwindcss.com/docs/max-width
         */
        "max-w": [
          {
            "max-w": [
              mA,
              r,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              {
                screen: [$t],
              },
              $t,
            ],
          },
        ],
        /**
         * Height
         * @see https://tailwindcss.com/docs/height
         */
        h: [
          {
            h: [mA, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"],
          },
        ],
        /**
         * Min-Height
         * @see https://tailwindcss.com/docs/min-height
         */
        "min-h": [
          {
            "min-h": [mA, r, "min", "max", "fit", "svh", "lvh", "dvh"],
          },
        ],
        /**
         * Max-Height
         * @see https://tailwindcss.com/docs/max-height
         */
        "max-h": [
          {
            "max-h": [mA, r, "min", "max", "fit", "svh", "lvh", "dvh"],
          },
        ],
        /**
         * Size
         * @see https://tailwindcss.com/docs/size
         */
        size: [
          {
            size: [mA, r, "auto", "min", "max", "fit"],
          },
        ],
        // Typography
        /**
         * Font Size
         * @see https://tailwindcss.com/docs/font-size
         */
        "font-size": [
          {
            text: ["base", $t, Zt],
          },
        ],
        /**
         * Font Smoothing
         * @see https://tailwindcss.com/docs/font-smoothing
         */
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        /**
         * Font Style
         * @see https://tailwindcss.com/docs/font-style
         */
        "font-style": ["italic", "not-italic"],
        /**
         * Font Weight
         * @see https://tailwindcss.com/docs/font-weight
         */
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Pu,
            ],
          },
        ],
        /**
         * Font Family
         * @see https://tailwindcss.com/docs/font-family
         */
        "font-family": [
          {
            font: [Ho],
          },
        ],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-normal": ["normal-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-ordinal": ["ordinal"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-slashed-zero": ["slashed-zero"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        /**
         * Letter Spacing
         * @see https://tailwindcss.com/docs/letter-spacing
         */
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              mA,
            ],
          },
        ],
        /**
         * Line Clamp
         * @see https://tailwindcss.com/docs/line-clamp
         */
        "line-clamp": [
          {
            "line-clamp": ["none", En, Pu],
          },
        ],
        /**
         * Line Height
         * @see https://tailwindcss.com/docs/line-height
         */
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Ut,
              mA,
            ],
          },
        ],
        /**
         * List Style Image
         * @see https://tailwindcss.com/docs/list-style-image
         */
        "list-image": [
          {
            "list-image": ["none", mA],
          },
        ],
        /**
         * List Style Type
         * @see https://tailwindcss.com/docs/list-style-type
         */
        "list-style-type": [
          {
            list: ["none", "disc", "decimal", mA],
          },
        ],
        /**
         * List Style Position
         * @see https://tailwindcss.com/docs/list-style-position
         */
        "list-style-position": [
          {
            list: ["inside", "outside"],
          },
        ],
        /**
         * Placeholder Color
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://tailwindcss.com/docs/placeholder-color
         */
        "placeholder-color": [
          {
            placeholder: [e],
          },
        ],
        /**
         * Placeholder Opacity
         * @see https://tailwindcss.com/docs/placeholder-opacity
         */
        "placeholder-opacity": [
          {
            "placeholder-opacity": [E],
          },
        ],
        /**
         * Text Alignment
         * @see https://tailwindcss.com/docs/text-align
         */
        "text-alignment": [
          {
            text: ["left", "center", "right", "justify", "start", "end"],
          },
        ],
        /**
         * Text Color
         * @see https://tailwindcss.com/docs/text-color
         */
        "text-color": [
          {
            text: [e],
          },
        ],
        /**
         * Text Opacity
         * @see https://tailwindcss.com/docs/text-opacity
         */
        "text-opacity": [
          {
            "text-opacity": [E],
          },
        ],
        /**
         * Text Decoration
         * @see https://tailwindcss.com/docs/text-decoration
         */
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        /**
         * Text Decoration Style
         * @see https://tailwindcss.com/docs/text-decoration-style
         */
        "text-decoration-style": [
          {
            decoration: [...aA(), "wavy"],
          },
        ],
        /**
         * Text Decoration Thickness
         * @see https://tailwindcss.com/docs/text-decoration-thickness
         */
        "text-decoration-thickness": [
          {
            decoration: ["auto", "from-font", Ut, Zt],
          },
        ],
        /**
         * Text Underline Offset
         * @see https://tailwindcss.com/docs/text-underline-offset
         */
        "underline-offset": [
          {
            "underline-offset": ["auto", Ut, mA],
          },
        ],
        /**
         * Text Decoration Color
         * @see https://tailwindcss.com/docs/text-decoration-color
         */
        "text-decoration-color": [
          {
            decoration: [e],
          },
        ],
        /**
         * Text Transform
         * @see https://tailwindcss.com/docs/text-transform
         */
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        /**
         * Text Overflow
         * @see https://tailwindcss.com/docs/text-overflow
         */
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        /**
         * Text Wrap
         * @see https://tailwindcss.com/docs/text-wrap
         */
        "text-wrap": [
          {
            text: ["wrap", "nowrap", "balance", "pretty"],
          },
        ],
        /**
         * Text Indent
         * @see https://tailwindcss.com/docs/text-indent
         */
        indent: [
          {
            indent: V(),
          },
        ],
        /**
         * Vertical Alignment
         * @see https://tailwindcss.com/docs/vertical-align
         */
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              mA,
            ],
          },
        ],
        /**
         * Whitespace
         * @see https://tailwindcss.com/docs/whitespace
         */
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        /**
         * Word Break
         * @see https://tailwindcss.com/docs/word-break
         */
        break: [
          {
            break: ["normal", "words", "all", "keep"],
          },
        ],
        /**
         * Hyphens
         * @see https://tailwindcss.com/docs/hyphens
         */
        hyphens: [
          {
            hyphens: ["none", "manual", "auto"],
          },
        ],
        /**
         * Content
         * @see https://tailwindcss.com/docs/content
         */
        content: [
          {
            content: ["none", mA],
          },
        ],
        // Backgrounds
        /**
         * Background Attachment
         * @see https://tailwindcss.com/docs/background-attachment
         */
        "bg-attachment": [
          {
            bg: ["fixed", "local", "scroll"],
          },
        ],
        /**
         * Background Clip
         * @see https://tailwindcss.com/docs/background-clip
         */
        "bg-clip": [
          {
            "bg-clip": ["border", "padding", "content", "text"],
          },
        ],
        /**
         * Background Opacity
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://tailwindcss.com/docs/background-opacity
         */
        "bg-opacity": [
          {
            "bg-opacity": [E],
          },
        ],
        /**
         * Background Origin
         * @see https://tailwindcss.com/docs/background-origin
         */
        "bg-origin": [
          {
            "bg-origin": ["border", "padding", "content"],
          },
        ],
        /**
         * Background Position
         * @see https://tailwindcss.com/docs/background-position
         */
        "bg-position": [
          {
            bg: [...uA(), zE],
          },
        ],
        /**
         * Background Repeat
         * @see https://tailwindcss.com/docs/background-repeat
         */
        "bg-repeat": [
          {
            bg: [
              "no-repeat",
              {
                repeat: ["", "x", "y", "round", "space"],
              },
            ],
          },
        ],
        /**
         * Background Size
         * @see https://tailwindcss.com/docs/background-size
         */
        "bg-size": [
          {
            bg: ["auto", "cover", "contain", XE],
          },
        ],
        /**
         * Background Image
         * @see https://tailwindcss.com/docs/background-image
         */
        "bg-image": [
          {
            bg: [
              "none",
              {
                "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
              },
              YE,
            ],
          },
        ],
        /**
         * Background Color
         * @see https://tailwindcss.com/docs/background-color
         */
        "bg-color": [
          {
            bg: [e],
          },
        ],
        /**
         * Gradient Color Stops From Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-from-pos": [
          {
            from: [Q],
          },
        ],
        /**
         * Gradient Color Stops Via Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-via-pos": [
          {
            via: [Q],
          },
        ],
        /**
         * Gradient Color Stops To Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-to-pos": [
          {
            to: [Q],
          },
        ],
        /**
         * Gradient Color Stops From
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-from": [
          {
            from: [U],
          },
        ],
        /**
         * Gradient Color Stops Via
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-via": [
          {
            via: [U],
          },
        ],
        /**
         * Gradient Color Stops To
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-to": [
          {
            to: [U],
          },
        ],
        // Borders
        /**
         * Border Radius
         * @see https://tailwindcss.com/docs/border-radius
         */
        rounded: [
          {
            rounded: [l],
          },
        ],
        /**
         * Border Radius Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-s": [
          {
            "rounded-s": [l],
          },
        ],
        /**
         * Border Radius End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-e": [
          {
            "rounded-e": [l],
          },
        ],
        /**
         * Border Radius Top
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-t": [
          {
            "rounded-t": [l],
          },
        ],
        /**
         * Border Radius Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-r": [
          {
            "rounded-r": [l],
          },
        ],
        /**
         * Border Radius Bottom
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-b": [
          {
            "rounded-b": [l],
          },
        ],
        /**
         * Border Radius Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-l": [
          {
            "rounded-l": [l],
          },
        ],
        /**
         * Border Radius Start Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-ss": [
          {
            "rounded-ss": [l],
          },
        ],
        /**
         * Border Radius Start End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-se": [
          {
            "rounded-se": [l],
          },
        ],
        /**
         * Border Radius End End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-ee": [
          {
            "rounded-ee": [l],
          },
        ],
        /**
         * Border Radius End Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-es": [
          {
            "rounded-es": [l],
          },
        ],
        /**
         * Border Radius Top Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-tl": [
          {
            "rounded-tl": [l],
          },
        ],
        /**
         * Border Radius Top Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-tr": [
          {
            "rounded-tr": [l],
          },
        ],
        /**
         * Border Radius Bottom Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-br": [
          {
            "rounded-br": [l],
          },
        ],
        /**
         * Border Radius Bottom Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-bl": [
          {
            "rounded-bl": [l],
          },
        ],
        /**
         * Border Width
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w": [
          {
            border: [f],
          },
        ],
        /**
         * Border Width X
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-x": [
          {
            "border-x": [f],
          },
        ],
        /**
         * Border Width Y
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-y": [
          {
            "border-y": [f],
          },
        ],
        /**
         * Border Width Start
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-s": [
          {
            "border-s": [f],
          },
        ],
        /**
         * Border Width End
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-e": [
          {
            "border-e": [f],
          },
        ],
        /**
         * Border Width Top
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-t": [
          {
            "border-t": [f],
          },
        ],
        /**
         * Border Width Right
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-r": [
          {
            "border-r": [f],
          },
        ],
        /**
         * Border Width Bottom
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-b": [
          {
            "border-b": [f],
          },
        ],
        /**
         * Border Width Left
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-l": [
          {
            "border-l": [f],
          },
        ],
        /**
         * Border Opacity
         * @see https://tailwindcss.com/docs/border-opacity
         */
        "border-opacity": [
          {
            "border-opacity": [E],
          },
        ],
        /**
         * Border Style
         * @see https://tailwindcss.com/docs/border-style
         */
        "border-style": [
          {
            border: [...aA(), "hidden"],
          },
        ],
        /**
         * Divide Width X
         * @see https://tailwindcss.com/docs/divide-width
         */
        "divide-x": [
          {
            "divide-x": [f],
          },
        ],
        /**
         * Divide Width X Reverse
         * @see https://tailwindcss.com/docs/divide-width
         */
        "divide-x-reverse": ["divide-x-reverse"],
        /**
         * Divide Width Y
         * @see https://tailwindcss.com/docs/divide-width
         */
        "divide-y": [
          {
            "divide-y": [f],
          },
        ],
        /**
         * Divide Width Y Reverse
         * @see https://tailwindcss.com/docs/divide-width
         */
        "divide-y-reverse": ["divide-y-reverse"],
        /**
         * Divide Opacity
         * @see https://tailwindcss.com/docs/divide-opacity
         */
        "divide-opacity": [
          {
            "divide-opacity": [E],
          },
        ],
        /**
         * Divide Style
         * @see https://tailwindcss.com/docs/divide-style
         */
        "divide-style": [
          {
            divide: aA(),
          },
        ],
        /**
         * Border Color
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color": [
          {
            border: [s],
          },
        ],
        /**
         * Border Color X
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-x": [
          {
            "border-x": [s],
          },
        ],
        /**
         * Border Color Y
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-y": [
          {
            "border-y": [s],
          },
        ],
        /**
         * Border Color Top
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-t": [
          {
            "border-t": [s],
          },
        ],
        /**
         * Border Color Right
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-r": [
          {
            "border-r": [s],
          },
        ],
        /**
         * Border Color Bottom
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-b": [
          {
            "border-b": [s],
          },
        ],
        /**
         * Border Color Left
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-l": [
          {
            "border-l": [s],
          },
        ],
        /**
         * Divide Color
         * @see https://tailwindcss.com/docs/divide-color
         */
        "divide-color": [
          {
            divide: [s],
          },
        ],
        /**
         * Outline Style
         * @see https://tailwindcss.com/docs/outline-style
         */
        "outline-style": [
          {
            outline: ["", ...aA()],
          },
        ],
        /**
         * Outline Offset
         * @see https://tailwindcss.com/docs/outline-offset
         */
        "outline-offset": [
          {
            "outline-offset": [Ut, mA],
          },
        ],
        /**
         * Outline Width
         * @see https://tailwindcss.com/docs/outline-width
         */
        "outline-w": [
          {
            outline: [Ut, Zt],
          },
        ],
        /**
         * Outline Color
         * @see https://tailwindcss.com/docs/outline-color
         */
        "outline-color": [
          {
            outline: [e],
          },
        ],
        /**
         * Ring Width
         * @see https://tailwindcss.com/docs/ring-width
         */
        "ring-w": [
          {
            ring: q(),
          },
        ],
        /**
         * Ring Width Inset
         * @see https://tailwindcss.com/docs/ring-width
         */
        "ring-w-inset": ["ring-inset"],
        /**
         * Ring Color
         * @see https://tailwindcss.com/docs/ring-color
         */
        "ring-color": [
          {
            ring: [e],
          },
        ],
        /**
         * Ring Opacity
         * @see https://tailwindcss.com/docs/ring-opacity
         */
        "ring-opacity": [
          {
            "ring-opacity": [E],
          },
        ],
        /**
         * Ring Offset Width
         * @see https://tailwindcss.com/docs/ring-offset-width
         */
        "ring-offset-w": [
          {
            "ring-offset": [Ut, Zt],
          },
        ],
        /**
         * Ring Offset Color
         * @see https://tailwindcss.com/docs/ring-offset-color
         */
        "ring-offset-color": [
          {
            "ring-offset": [e],
          },
        ],
        // Effects
        /**
         * Box Shadow
         * @see https://tailwindcss.com/docs/box-shadow
         */
        shadow: [
          {
            shadow: ["", "inner", "none", $t, ZE],
          },
        ],
        /**
         * Box Shadow Color
         * @see https://tailwindcss.com/docs/box-shadow-color
         */
        "shadow-color": [
          {
            shadow: [Ho],
          },
        ],
        /**
         * Opacity
         * @see https://tailwindcss.com/docs/opacity
         */
        opacity: [
          {
            opacity: [E],
          },
        ],
        /**
         * Mix Blend Mode
         * @see https://tailwindcss.com/docs/mix-blend-mode
         */
        "mix-blend": [
          {
            "mix-blend": [...Z(), "plus-lighter", "plus-darker"],
          },
        ],
        /**
         * Background Blend Mode
         * @see https://tailwindcss.com/docs/background-blend-mode
         */
        "bg-blend": [
          {
            "bg-blend": Z(),
          },
        ],
        // Filters
        /**
         * Filter
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://tailwindcss.com/docs/filter
         */
        filter: [
          {
            filter: ["", "none"],
          },
        ],
        /**
         * Blur
         * @see https://tailwindcss.com/docs/blur
         */
        blur: [
          {
            blur: [n],
          },
        ],
        /**
         * Brightness
         * @see https://tailwindcss.com/docs/brightness
         */
        brightness: [
          {
            brightness: [o],
          },
        ],
        /**
         * Contrast
         * @see https://tailwindcss.com/docs/contrast
         */
        contrast: [
          {
            contrast: [B],
          },
        ],
        /**
         * Drop Shadow
         * @see https://tailwindcss.com/docs/drop-shadow
         */
        "drop-shadow": [
          {
            "drop-shadow": ["", "none", $t, mA],
          },
        ],
        /**
         * Grayscale
         * @see https://tailwindcss.com/docs/grayscale
         */
        grayscale: [
          {
            grayscale: [g],
          },
        ],
        /**
         * Hue Rotate
         * @see https://tailwindcss.com/docs/hue-rotate
         */
        "hue-rotate": [
          {
            "hue-rotate": [w],
          },
        ],
        /**
         * Invert
         * @see https://tailwindcss.com/docs/invert
         */
        invert: [
          {
            invert: [h],
          },
        ],
        /**
         * Saturate
         * @see https://tailwindcss.com/docs/saturate
         */
        saturate: [
          {
            saturate: [R],
          },
        ],
        /**
         * Sepia
         * @see https://tailwindcss.com/docs/sepia
         */
        sepia: [
          {
            sepia: [k],
          },
        ],
        /**
         * Backdrop Filter
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://tailwindcss.com/docs/backdrop-filter
         */
        "backdrop-filter": [
          {
            "backdrop-filter": ["", "none"],
          },
        ],
        /**
         * Backdrop Blur
         * @see https://tailwindcss.com/docs/backdrop-blur
         */
        "backdrop-blur": [
          {
            "backdrop-blur": [n],
          },
        ],
        /**
         * Backdrop Brightness
         * @see https://tailwindcss.com/docs/backdrop-brightness
         */
        "backdrop-brightness": [
          {
            "backdrop-brightness": [o],
          },
        ],
        /**
         * Backdrop Contrast
         * @see https://tailwindcss.com/docs/backdrop-contrast
         */
        "backdrop-contrast": [
          {
            "backdrop-contrast": [B],
          },
        ],
        /**
         * Backdrop Grayscale
         * @see https://tailwindcss.com/docs/backdrop-grayscale
         */
        "backdrop-grayscale": [
          {
            "backdrop-grayscale": [g],
          },
        ],
        /**
         * Backdrop Hue Rotate
         * @see https://tailwindcss.com/docs/backdrop-hue-rotate
         */
        "backdrop-hue-rotate": [
          {
            "backdrop-hue-rotate": [w],
          },
        ],
        /**
         * Backdrop Invert
         * @see https://tailwindcss.com/docs/backdrop-invert
         */
        "backdrop-invert": [
          {
            "backdrop-invert": [h],
          },
        ],
        /**
         * Backdrop Opacity
         * @see https://tailwindcss.com/docs/backdrop-opacity
         */
        "backdrop-opacity": [
          {
            "backdrop-opacity": [E],
          },
        ],
        /**
         * Backdrop Saturate
         * @see https://tailwindcss.com/docs/backdrop-saturate
         */
        "backdrop-saturate": [
          {
            "backdrop-saturate": [R],
          },
        ],
        /**
         * Backdrop Sepia
         * @see https://tailwindcss.com/docs/backdrop-sepia
         */
        "backdrop-sepia": [
          {
            "backdrop-sepia": [k],
          },
        ],
        // Tables
        /**
         * Border Collapse
         * @see https://tailwindcss.com/docs/border-collapse
         */
        "border-collapse": [
          {
            border: ["collapse", "separate"],
          },
        ],
        /**
         * Border Spacing
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing": [
          {
            "border-spacing": [c],
          },
        ],
        /**
         * Border Spacing X
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing-x": [
          {
            "border-spacing-x": [c],
          },
        ],
        /**
         * Border Spacing Y
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing-y": [
          {
            "border-spacing-y": [c],
          },
        ],
        /**
         * Table Layout
         * @see https://tailwindcss.com/docs/table-layout
         */
        "table-layout": [
          {
            table: ["auto", "fixed"],
          },
        ],
        /**
         * Caption Side
         * @see https://tailwindcss.com/docs/caption-side
         */
        caption: [
          {
            caption: ["top", "bottom"],
          },
        ],
        // Transitions and Animation
        /**
         * Tranisition Property
         * @see https://tailwindcss.com/docs/transition-property
         */
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              mA,
            ],
          },
        ],
        /**
         * Transition Duration
         * @see https://tailwindcss.com/docs/transition-duration
         */
        duration: [
          {
            duration: H(),
          },
        ],
        /**
         * Transition Timing Function
         * @see https://tailwindcss.com/docs/transition-timing-function
         */
        ease: [
          {
            ease: ["linear", "in", "out", "in-out", mA],
          },
        ],
        /**
         * Transition Delay
         * @see https://tailwindcss.com/docs/transition-delay
         */
        delay: [
          {
            delay: H(),
          },
        ],
        /**
         * Animation
         * @see https://tailwindcss.com/docs/animation
         */
        animate: [
          {
            animate: ["none", "spin", "ping", "pulse", "bounce", mA],
          },
        ],
        // Transforms
        /**
         * Transform
         * @see https://tailwindcss.com/docs/transform
         */
        transform: [
          {
            transform: ["", "gpu", "none"],
          },
        ],
        /**
         * Scale
         * @see https://tailwindcss.com/docs/scale
         */
        scale: [
          {
            scale: [T],
          },
        ],
        /**
         * Scale X
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-x": [
          {
            "scale-x": [T],
          },
        ],
        /**
         * Scale Y
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-y": [
          {
            "scale-y": [T],
          },
        ],
        /**
         * Rotate
         * @see https://tailwindcss.com/docs/rotate
         */
        rotate: [
          {
            rotate: [Io, mA],
          },
        ],
        /**
         * Translate X
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-x": [
          {
            "translate-x": [X],
          },
        ],
        /**
         * Translate Y
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-y": [
          {
            "translate-y": [X],
          },
        ],
        /**
         * Skew X
         * @see https://tailwindcss.com/docs/skew
         */
        "skew-x": [
          {
            "skew-x": [O],
          },
        ],
        /**
         * Skew Y
         * @see https://tailwindcss.com/docs/skew
         */
        "skew-y": [
          {
            "skew-y": [O],
          },
        ],
        /**
         * Transform Origin
         * @see https://tailwindcss.com/docs/transform-origin
         */
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              mA,
            ],
          },
        ],
        // Interactivity
        /**
         * Accent Color
         * @see https://tailwindcss.com/docs/accent-color
         */
        accent: [
          {
            accent: ["auto", e],
          },
        ],
        /**
         * Appearance
         * @see https://tailwindcss.com/docs/appearance
         */
        appearance: [
          {
            appearance: ["none", "auto"],
          },
        ],
        /**
         * Cursor
         * @see https://tailwindcss.com/docs/cursor
         */
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              mA,
            ],
          },
        ],
        /**
         * Caret Color
         * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
         */
        "caret-color": [
          {
            caret: [e],
          },
        ],
        /**
         * Pointer Events
         * @see https://tailwindcss.com/docs/pointer-events
         */
        "pointer-events": [
          {
            "pointer-events": ["none", "auto"],
          },
        ],
        /**
         * Resize
         * @see https://tailwindcss.com/docs/resize
         */
        resize: [
          {
            resize: ["none", "y", "x", ""],
          },
        ],
        /**
         * Scroll Behavior
         * @see https://tailwindcss.com/docs/scroll-behavior
         */
        "scroll-behavior": [
          {
            scroll: ["auto", "smooth"],
          },
        ],
        /**
         * Scroll Margin
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-m": [
          {
            "scroll-m": V(),
          },
        ],
        /**
         * Scroll Margin X
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mx": [
          {
            "scroll-mx": V(),
          },
        ],
        /**
         * Scroll Margin Y
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-my": [
          {
            "scroll-my": V(),
          },
        ],
        /**
         * Scroll Margin Start
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-ms": [
          {
            "scroll-ms": V(),
          },
        ],
        /**
         * Scroll Margin End
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-me": [
          {
            "scroll-me": V(),
          },
        ],
        /**
         * Scroll Margin Top
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mt": [
          {
            "scroll-mt": V(),
          },
        ],
        /**
         * Scroll Margin Right
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mr": [
          {
            "scroll-mr": V(),
          },
        ],
        /**
         * Scroll Margin Bottom
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mb": [
          {
            "scroll-mb": V(),
          },
        ],
        /**
         * Scroll Margin Left
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-ml": [
          {
            "scroll-ml": V(),
          },
        ],
        /**
         * Scroll Padding
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-p": [
          {
            "scroll-p": V(),
          },
        ],
        /**
         * Scroll Padding X
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-px": [
          {
            "scroll-px": V(),
          },
        ],
        /**
         * Scroll Padding Y
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-py": [
          {
            "scroll-py": V(),
          },
        ],
        /**
         * Scroll Padding Start
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-ps": [
          {
            "scroll-ps": V(),
          },
        ],
        /**
         * Scroll Padding End
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pe": [
          {
            "scroll-pe": V(),
          },
        ],
        /**
         * Scroll Padding Top
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pt": [
          {
            "scroll-pt": V(),
          },
        ],
        /**
         * Scroll Padding Right
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pr": [
          {
            "scroll-pr": V(),
          },
        ],
        /**
         * Scroll Padding Bottom
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pb": [
          {
            "scroll-pb": V(),
          },
        ],
        /**
         * Scroll Padding Left
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pl": [
          {
            "scroll-pl": V(),
          },
        ],
        /**
         * Scroll Snap Align
         * @see https://tailwindcss.com/docs/scroll-snap-align
         */
        "snap-align": [
          {
            snap: ["start", "end", "center", "align-none"],
          },
        ],
        /**
         * Scroll Snap Stop
         * @see https://tailwindcss.com/docs/scroll-snap-stop
         */
        "snap-stop": [
          {
            snap: ["normal", "always"],
          },
        ],
        /**
         * Scroll Snap Type
         * @see https://tailwindcss.com/docs/scroll-snap-type
         */
        "snap-type": [
          {
            snap: ["none", "x", "y", "both"],
          },
        ],
        /**
         * Scroll Snap Type Strictness
         * @see https://tailwindcss.com/docs/scroll-snap-type
         */
        "snap-strictness": [
          {
            snap: ["mandatory", "proximity"],
          },
        ],
        /**
         * Touch Action
         * @see https://tailwindcss.com/docs/touch-action
         */
        touch: [
          {
            touch: ["auto", "none", "manipulation"],
          },
        ],
        /**
         * Touch Action X
         * @see https://tailwindcss.com/docs/touch-action
         */
        "touch-x": [
          {
            "touch-pan": ["x", "left", "right"],
          },
        ],
        /**
         * Touch Action Y
         * @see https://tailwindcss.com/docs/touch-action
         */
        "touch-y": [
          {
            "touch-pan": ["y", "up", "down"],
          },
        ],
        /**
         * Touch Action Pinch Zoom
         * @see https://tailwindcss.com/docs/touch-action
         */
        "touch-pz": ["touch-pinch-zoom"],
        /**
         * User Select
         * @see https://tailwindcss.com/docs/user-select
         */
        select: [
          {
            select: ["none", "text", "all", "auto"],
          },
        ],
        /**
         * Will Change
         * @see https://tailwindcss.com/docs/will-change
         */
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", mA],
          },
        ],
        // SVG
        /**
         * Fill
         * @see https://tailwindcss.com/docs/fill
         */
        fill: [
          {
            fill: [e, "none"],
          },
        ],
        /**
         * Stroke Width
         * @see https://tailwindcss.com/docs/stroke-width
         */
        "stroke-w": [
          {
            stroke: [Ut, Zt, Pu],
          },
        ],
        /**
         * Stroke
         * @see https://tailwindcss.com/docs/stroke
         */
        stroke: [
          {
            stroke: [e, "none"],
          },
        ],
        // Accessibility
        /**
         * Screen Readers
         * @see https://tailwindcss.com/docs/screen-readers
         */
        sr: ["sr-only", "not-sr-only"],
        /**
         * Forced Color Adjust
         * @see https://tailwindcss.com/docs/forced-color-adjust
         */
        "forced-color-adjust": [
          {
            "forced-color-adjust": ["auto", "none"],
          },
        ],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: {
        "font-size": ["leading"],
      },
    };
  },
  t1 = /* @__PURE__ */ RE(e1);
function Ae(...e) {
  return t1(UE(e));
}
const r1 = Pc(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline:
            "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    },
  ),
  Ps = C.forwardRef(
    ({ className: e, variant: r, size: n, asChild: o = !1, ...s }, l) => {
      const c = o ? Dr : "button";
      return /* @__PURE__ */ b.jsx(c, {
        className: Ae(r1({ variant: r, size: n, className: e })),
        ref: l,
        ...s,
      });
    },
  );
Ps.displayName = "Button";
var n1 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  TA = n1.reduce((e, r) => {
    const n = C.forwardRef((o, s) => {
      const { asChild: l, ...c } = o,
        f = l ? Dr : r;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        /* @__PURE__ */ b.jsx(f, { ...c, ref: s })
      );
    });
    return (n.displayName = `Primitive.${r}`), { ...e, [r]: n };
  }, {});
function o1(e, r) {
  e && Or.flushSync(() => e.dispatchEvent(r));
}
var i1 = "Label",
  Xw = C.forwardRef((e, r) =>
    /* @__PURE__ */ b.jsx(TA.label, {
      ...e,
      ref: r,
      onMouseDown: (n) => {
        n.target.closest("button, input, select, textarea") ||
          (e.onMouseDown?.(n),
          !n.defaultPrevented && n.detail > 1 && n.preventDefault());
      },
    }),
  );
Xw.displayName = i1;
var zw = Xw;
const s1 = Pc(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  ),
  _s = C.forwardRef(({ className: e, ...r }, n) =>
    /* @__PURE__ */ b.jsx(zw, { ref: n, className: Ae(s1(), e), ...r }),
  );
_s.displayName = zw.displayName;
const Jw = C.forwardRef(({ className: e, ...r }, n) =>
  /* @__PURE__ */ b.jsx("textarea", {
    className: Ae(
      "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e,
    ),
    ref: n,
    ...r,
  }),
);
Jw.displayName = "Textarea";
function Yo(e, r) {
  if (e == null) return {};
  var n = {},
    o = Object.keys(e),
    s,
    l;
  for (l = 0; l < o.length; l++)
    (s = o[l]), !(r.indexOf(s) >= 0) && (n[s] = e[s]);
  return n;
}
var a1 = ["color"],
  l1 = /* @__PURE__ */ C.forwardRef(function (e, r) {
    var n = e.color,
      o = n === void 0 ? "currentColor" : n,
      s = Yo(e, a1);
    return C.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        s,
        {
          ref: r,
        },
      ),
      C.createElement("path", {
        d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
        fill: o,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  u1 = ["color"],
  c1 = /* @__PURE__ */ C.forwardRef(function (e, r) {
    var n = e.color,
      o = n === void 0 ? "currentColor" : n,
      s = Yo(e, u1);
    return C.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        s,
        {
          ref: r,
        },
      ),
      C.createElement("path", {
        d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
        fill: o,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  f1 = ["color"],
  d1 = /* @__PURE__ */ C.forwardRef(function (e, r) {
    var n = e.color,
      o = n === void 0 ? "currentColor" : n,
      s = Yo(e, f1);
    return C.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        s,
        {
          ref: r,
        },
      ),
      C.createElement("path", {
        d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
        fill: o,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  B1 = ["color"],
  g1 = /* @__PURE__ */ C.forwardRef(function (e, r) {
    var n = e.color,
      o = n === void 0 ? "currentColor" : n,
      s = Yo(e, B1);
    return C.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        s,
        {
          ref: r,
        },
      ),
      C.createElement("path", {
        d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
        fill: o,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  p1 = ["color"],
  w1 = /* @__PURE__ */ C.forwardRef(function (e, r) {
    var n = e.color,
      o = n === void 0 ? "currentColor" : n,
      s = Yo(e, p1);
    return C.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        s,
        {
          ref: r,
        },
      ),
      C.createElement("path", {
        d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
        fill: o,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  });
function up(e, [r, n]) {
  return Math.min(n, Math.max(r, e));
}
function _A(e, r, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (s) {
    if ((e?.(s), n === !1 || !s.defaultPrevented)) return r?.(s);
  };
}
function h1(e, r) {
  const n = C.createContext(r);
  function o(l) {
    const { children: c, ...f } = l,
      B = C.useMemo(() => f, Object.values(f));
    return /* @__PURE__ */ b.jsx(n.Provider, { value: B, children: c });
  }
  function s(l) {
    const c = C.useContext(n);
    if (c) return c;
    if (r !== void 0) return r;
    throw new Error(`\`${l}\` must be used within \`${e}\``);
  }
  return (o.displayName = e + "Provider"), [o, s];
}
function ha(e, r = []) {
  let n = [];
  function o(l, c) {
    const f = C.createContext(c),
      B = n.length;
    n = [...n, c];
    function g(h) {
      const { scope: v, children: U, ...Q } = h,
        m = v?.[e][B] || f,
        F = C.useMemo(() => Q, Object.values(Q));
      return /* @__PURE__ */ b.jsx(m.Provider, { value: F, children: U });
    }
    function w(h, v) {
      const U = v?.[e][B] || f,
        Q = C.useContext(U);
      if (Q) return Q;
      if (c !== void 0) return c;
      throw new Error(`\`${h}\` must be used within \`${l}\``);
    }
    return (g.displayName = l + "Provider"), [g, w];
  }
  const s = () => {
    const l = n.map((c) => C.createContext(c));
    return function (f) {
      const B = f?.[e] || l;
      return C.useMemo(() => ({ [`__scope${e}`]: { ...f, [e]: B } }), [f, B]);
    };
  };
  return (s.scopeName = e), [o, v1(s, ...r)];
}
function v1(...e) {
  const r = e[0];
  if (e.length === 1) return r;
  const n = () => {
    const o = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName,
    }));
    return function (l) {
      const c = o.reduce((f, { useScope: B, scopeName: g }) => {
        const h = B(l)[`__scope${g}`];
        return { ...f, ...h };
      }, {});
      return C.useMemo(() => ({ [`__scope${r.scopeName}`]: c }), [c]);
    };
  };
  return (n.scopeName = r.scopeName), n;
}
function m1(e) {
  const r = e + "CollectionProvider",
    [n, o] = ha(r),
    [s, l] = n(r, {
      collectionRef: { current: null },
      itemMap: /* @__PURE__ */ new Map(),
    }),
    c = (U) => {
      const { scope: Q, children: m } = U,
        F = qt.useRef(null),
        E = qt.useRef(/* @__PURE__ */ new Map()).current;
      return /* @__PURE__ */ b.jsx(s, {
        scope: Q,
        itemMap: E,
        collectionRef: F,
        children: m,
      });
    };
  c.displayName = r;
  const f = e + "CollectionSlot",
    B = qt.forwardRef((U, Q) => {
      const { scope: m, children: F } = U,
        E = l(f, m),
        I = zA(Q, E.collectionRef);
      return /* @__PURE__ */ b.jsx(Dr, { ref: I, children: F });
    });
  B.displayName = f;
  const g = e + "CollectionItemSlot",
    w = "data-radix-collection-item",
    h = qt.forwardRef((U, Q) => {
      const { scope: m, children: F, ...E } = U,
        I = qt.useRef(null),
        R = zA(Q, I),
        T = l(g, m);
      return (
        qt.useEffect(
          () => (
            T.itemMap.set(I, { ref: I, ...E }), () => void T.itemMap.delete(I)
          ),
        ),
        /* @__PURE__ */ b.jsx(Dr, { [w]: "", ref: R, children: F })
      );
    });
  h.displayName = g;
  function v(U) {
    const Q = l(e + "CollectionConsumer", U);
    return qt.useCallback(() => {
      const F = Q.collectionRef.current;
      if (!F) return [];
      const E = Array.from(F.querySelectorAll(`[${w}]`));
      return Array.from(Q.itemMap.values()).sort(
        (T, k) => E.indexOf(T.ref.current) - E.indexOf(k.ref.current),
      );
    }, [Q.collectionRef, Q.itemMap]);
  }
  return [{ Provider: c, Slot: B, ItemSlot: h }, v, o];
}
var C1 = C.createContext(void 0);
function Q1(e) {
  const r = C.useContext(C1);
  return e || r || "ltr";
}
function It(e) {
  const r = C.useRef(e);
  return (
    C.useEffect(() => {
      r.current = e;
    }),
    C.useMemo(
      () =>
        (...n) =>
          r.current?.(...n),
      [],
    )
  );
}
function y1(e, r = globalThis?.document) {
  const n = It(e);
  C.useEffect(() => {
    const o = (s) => {
      s.key === "Escape" && n(s);
    };
    return (
      r.addEventListener("keydown", o, { capture: !0 }),
      () => r.removeEventListener("keydown", o, { capture: !0 })
    );
  }, [n, r]);
}
var U1 = "DismissableLayer",
  Qc = "dismissableLayer.update",
  F1 = "dismissableLayer.pointerDownOutside",
  E1 = "dismissableLayer.focusOutside",
  cp,
  Yw = C.createContext({
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set(),
  }),
  Vc = C.forwardRef((e, r) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: s,
        onFocusOutside: l,
        onInteractOutside: c,
        onDismiss: f,
        ...B
      } = e,
      g = C.useContext(Yw),
      [w, h] = C.useState(null),
      v = w?.ownerDocument ?? globalThis?.document,
      [, U] = C.useState({}),
      Q = zA(r, (M) => h(M)),
      m = Array.from(g.layers),
      [F] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1),
      E = m.indexOf(F),
      I = w ? m.indexOf(w) : -1,
      R = g.layersWithOutsidePointerEventsDisabled.size > 0,
      T = I >= E,
      k = H1((M) => {
        const X = M.target,
          z = [...g.branches].some((nA) => nA.contains(X));
        !T || z || (s?.(M), c?.(M), M.defaultPrevented || f?.());
      }, v),
      O = S1((M) => {
        const X = M.target;
        [...g.branches].some((nA) => nA.contains(X)) ||
          (l?.(M), c?.(M), M.defaultPrevented || f?.());
      }, v);
    return (
      y1((M) => {
        I === g.layers.size - 1 &&
          (o?.(M), !M.defaultPrevented && f && (M.preventDefault(), f()));
      }, v),
      C.useEffect(() => {
        if (w)
          return (
            n &&
              (g.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((cp = v.body.style.pointerEvents),
                (v.body.style.pointerEvents = "none")),
              g.layersWithOutsidePointerEventsDisabled.add(w)),
            g.layers.add(w),
            fp(),
            () => {
              n &&
                g.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (v.body.style.pointerEvents = cp);
            }
          );
      }, [w, v, n, g]),
      C.useEffect(
        () => () => {
          w &&
            (g.layers.delete(w),
            g.layersWithOutsidePointerEventsDisabled.delete(w),
            fp());
        },
        [w, g],
      ),
      C.useEffect(() => {
        const M = () => U({});
        return (
          document.addEventListener(Qc, M),
          () => document.removeEventListener(Qc, M)
        );
      }, []),
      /* @__PURE__ */ b.jsx(TA.div, {
        ...B,
        ref: Q,
        style: {
          pointerEvents: R ? (T ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: _A(e.onFocusCapture, O.onFocusCapture),
        onBlurCapture: _A(e.onBlurCapture, O.onBlurCapture),
        onPointerDownCapture: _A(
          e.onPointerDownCapture,
          k.onPointerDownCapture,
        ),
      })
    );
  });
Vc.displayName = U1;
var x1 = "DismissableLayerBranch",
  I1 = C.forwardRef((e, r) => {
    const n = C.useContext(Yw),
      o = C.useRef(null),
      s = zA(r, o);
    return (
      C.useEffect(() => {
        const l = o.current;
        if (l)
          return (
            n.branches.add(l),
            () => {
              n.branches.delete(l);
            }
          );
      }, [n.branches]),
      /* @__PURE__ */ b.jsx(TA.div, { ...e, ref: s })
    );
  });
I1.displayName = x1;
function H1(e, r = globalThis?.document) {
  const n = It(e),
    o = C.useRef(!1),
    s = C.useRef(() => {});
  return (
    C.useEffect(() => {
      const l = (f) => {
          if (f.target && !o.current) {
            let B = function () {
              Zw(F1, n, g, { discrete: !0 });
            };
            const g = { originalEvent: f };
            f.pointerType === "touch"
              ? (r.removeEventListener("click", s.current),
                (s.current = B),
                r.addEventListener("click", s.current, { once: !0 }))
              : B();
          } else r.removeEventListener("click", s.current);
          o.current = !1;
        },
        c = window.setTimeout(() => {
          r.addEventListener("pointerdown", l);
        }, 0);
      return () => {
        window.clearTimeout(c),
          r.removeEventListener("pointerdown", l),
          r.removeEventListener("click", s.current);
      };
    }, [r, n]),
    {
      // ensures we check React component tree (not just DOM tree)
      onPointerDownCapture: () => (o.current = !0),
    }
  );
}
function S1(e, r = globalThis?.document) {
  const n = It(e),
    o = C.useRef(!1);
  return (
    C.useEffect(() => {
      const s = (l) => {
        l.target &&
          !o.current &&
          Zw(
            E1,
            n,
            { originalEvent: l },
            {
              discrete: !1,
            },
          );
      };
      return (
        r.addEventListener("focusin", s),
        () => r.removeEventListener("focusin", s)
      );
    }, [r, n]),
    {
      onFocusCapture: () => (o.current = !0),
      onBlurCapture: () => (o.current = !1),
    }
  );
}
function fp() {
  const e = new CustomEvent(Qc);
  document.dispatchEvent(e);
}
function Zw(e, r, n, { discrete: o }) {
  const s = n.originalEvent.target,
    l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  r && s.addEventListener(e, r, { once: !0 }),
    o ? o1(s, l) : s.dispatchEvent(l);
}
var _u = 0;
function $w() {
  C.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? dp()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? dp()),
      _u++,
      () => {
        _u === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((r) => r.remove()),
          _u--;
      }
    );
  }, []);
}
function dp() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText =
      "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
var Vu = "focusScope.autoFocusOnMount",
  Gu = "focusScope.autoFocusOnUnmount",
  Bp = { bubbles: !1, cancelable: !0 },
  b1 = "FocusScope",
  Gc = C.forwardRef((e, r) => {
    const {
        loop: n = !1,
        trapped: o = !1,
        onMountAutoFocus: s,
        onUnmountAutoFocus: l,
        ...c
      } = e,
      [f, B] = C.useState(null),
      g = It(s),
      w = It(l),
      h = C.useRef(null),
      v = zA(r, (m) => B(m)),
      U = C.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    C.useEffect(() => {
      if (o) {
        let m = function (R) {
            if (U.paused || !f) return;
            const T = R.target;
            f.contains(T) ? (h.current = T) : tr(h.current, { select: !0 });
          },
          F = function (R) {
            if (U.paused || !f) return;
            const T = R.relatedTarget;
            T !== null && (f.contains(T) || tr(h.current, { select: !0 }));
          },
          E = function (R) {
            if (document.activeElement === document.body)
              for (const k of R) k.removedNodes.length > 0 && tr(f);
          };
        document.addEventListener("focusin", m),
          document.addEventListener("focusout", F);
        const I = new MutationObserver(E);
        return (
          f && I.observe(f, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", m),
              document.removeEventListener("focusout", F),
              I.disconnect();
          }
        );
      }
    }, [o, f, U.paused]),
      C.useEffect(() => {
        if (f) {
          pp.add(U);
          const m = document.activeElement;
          if (!f.contains(m)) {
            const E = new CustomEvent(Vu, Bp);
            f.addEventListener(Vu, g),
              f.dispatchEvent(E),
              E.defaultPrevented ||
                (L1(R1(qw(f)), { select: !0 }),
                document.activeElement === m && tr(f));
          }
          return () => {
            f.removeEventListener(Vu, g),
              setTimeout(() => {
                const E = new CustomEvent(Gu, Bp);
                f.addEventListener(Gu, w),
                  f.dispatchEvent(E),
                  E.defaultPrevented || tr(m ?? document.body, { select: !0 }),
                  f.removeEventListener(Gu, w),
                  pp.remove(U);
              }, 0);
          };
        }
      }, [f, g, w, U]);
    const Q = C.useCallback(
      (m) => {
        if ((!n && !o) || U.paused) return;
        const F = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey,
          E = document.activeElement;
        if (F && E) {
          const I = m.currentTarget,
            [R, T] = T1(I);
          R && T
            ? !m.shiftKey && E === T
              ? (m.preventDefault(), n && tr(R, { select: !0 }))
              : m.shiftKey &&
                E === R &&
                (m.preventDefault(), n && tr(T, { select: !0 }))
            : E === I && m.preventDefault();
        }
      },
      [n, o, U.paused],
    );
    return /* @__PURE__ */ b.jsx(TA.div, {
      tabIndex: -1,
      ...c,
      ref: v,
      onKeyDown: Q,
    });
  });
Gc.displayName = b1;
function L1(e, { select: r = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if ((tr(o, { select: r }), document.activeElement !== n)) return;
}
function T1(e) {
  const r = qw(e),
    n = gp(r, e),
    o = gp(r.reverse(), e);
  return [n, o];
}
function qw(e) {
  const r = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (o) => {
        const s = o.tagName === "INPUT" && o.type === "hidden";
        return o.disabled || o.hidden || s
          ? NodeFilter.FILTER_SKIP
          : o.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) r.push(n.currentNode);
  return r;
}
function gp(e, r) {
  for (const n of e) if (!D1(n, { upTo: r })) return n;
}
function D1(e, { upTo: r }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (r !== void 0 && e === r) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function K1(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function tr(e, { select: r = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && K1(e) && r && e.select();
  }
}
var pp = k1();
function k1() {
  let e = [];
  return {
    add(r) {
      const n = e[0];
      r !== n && n?.pause(), (e = wp(e, r)), e.unshift(r);
    },
    remove(r) {
      (e = wp(e, r)), e[0]?.resume();
    },
  };
}
function wp(e, r) {
  const n = [...e],
    o = n.indexOf(r);
  return o !== -1 && n.splice(o, 1), n;
}
function R1(e) {
  return e.filter((r) => r.tagName !== "A");
}
var ve = globalThis?.document ? C.useLayoutEffect : () => {},
  O1 = jm.useId || (() => {}),
  N1 = 0;
function xn(e) {
  const [r, n] = C.useState(O1());
  return (
    ve(() => {
      n((o) => o ?? String(N1++));
    }, [e]),
    r ? `radix-${r}` : ""
  );
}
const M1 = ["top", "right", "bottom", "left"],
  ut = Math.min,
  Le = Math.max,
  ta = Math.round,
  Ss = Math.floor,
  ur = (e) => ({
    x: e,
    y: e,
  }),
  P1 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom",
  },
  _1 = {
    start: "end",
    end: "start",
  };
function yc(e, r, n) {
  return Le(e, ut(r, n));
}
function Ht(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function St(e) {
  return e.split("-")[0];
}
function Dn(e) {
  return e.split("-")[1];
}
function Wc(e) {
  return e === "x" ? "y" : "x";
}
function jc(e) {
  return e === "y" ? "height" : "width";
}
function cr(e) {
  return ["top", "bottom"].includes(St(e)) ? "y" : "x";
}
function Xc(e) {
  return Wc(cr(e));
}
function V1(e, r, n) {
  n === void 0 && (n = !1);
  const o = Dn(e),
    s = Xc(e),
    l = jc(s);
  let c =
    s === "x"
      ? o === (n ? "end" : "start")
        ? "right"
        : "left"
      : o === "start"
        ? "bottom"
        : "top";
  return r.reference[l] > r.floating[l] && (c = ra(c)), [c, ra(c)];
}
function G1(e) {
  const r = ra(e);
  return [Uc(e), r, Uc(r)];
}
function Uc(e) {
  return e.replace(/start|end/g, (r) => _1[r]);
}
function W1(e, r, n) {
  const o = ["left", "right"],
    s = ["right", "left"],
    l = ["top", "bottom"],
    c = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (r ? s : o) : r ? o : s;
    case "left":
    case "right":
      return r ? l : c;
    default:
      return [];
  }
}
function j1(e, r, n, o) {
  const s = Dn(e);
  let l = W1(St(e), n === "start", o);
  return (
    s && ((l = l.map((c) => c + "-" + s)), r && (l = l.concat(l.map(Uc)))), l
  );
}
function ra(e) {
  return e.replace(/left|right|bottom|top/g, (r) => P1[r]);
}
function X1(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e,
  };
}
function Ah(e) {
  return typeof e != "number"
    ? X1(e)
    : {
        top: e,
        right: e,
        bottom: e,
        left: e,
      };
}
function na(e) {
  const { x: r, y: n, width: o, height: s } = e;
  return {
    width: o,
    height: s,
    top: n,
    left: r,
    right: r + o,
    bottom: n + s,
    x: r,
    y: n,
  };
}
function hp(e, r, n) {
  let { reference: o, floating: s } = e;
  const l = cr(r),
    c = Xc(r),
    f = jc(c),
    B = St(r),
    g = l === "y",
    w = o.x + o.width / 2 - s.width / 2,
    h = o.y + o.height / 2 - s.height / 2,
    v = o[f] / 2 - s[f] / 2;
  let U;
  switch (B) {
    case "top":
      U = {
        x: w,
        y: o.y - s.height,
      };
      break;
    case "bottom":
      U = {
        x: w,
        y: o.y + o.height,
      };
      break;
    case "right":
      U = {
        x: o.x + o.width,
        y: h,
      };
      break;
    case "left":
      U = {
        x: o.x - s.width,
        y: h,
      };
      break;
    default:
      U = {
        x: o.x,
        y: o.y,
      };
  }
  switch (Dn(r)) {
    case "start":
      U[c] -= v * (n && g ? -1 : 1);
      break;
    case "end":
      U[c] += v * (n && g ? -1 : 1);
      break;
  }
  return U;
}
const z1 = async (e, r, n) => {
  const {
      placement: o = "bottom",
      strategy: s = "absolute",
      middleware: l = [],
      platform: c,
    } = n,
    f = l.filter(Boolean),
    B = await (c.isRTL == null ? void 0 : c.isRTL(r));
  let g = await c.getElementRects({
      reference: e,
      floating: r,
      strategy: s,
    }),
    { x: w, y: h } = hp(g, o, B),
    v = o,
    U = {},
    Q = 0;
  for (let m = 0; m < f.length; m++) {
    const { name: F, fn: E } = f[m],
      {
        x: I,
        y: R,
        data: T,
        reset: k,
      } = await E({
        x: w,
        y: h,
        initialPlacement: o,
        placement: v,
        strategy: s,
        middlewareData: U,
        rects: g,
        platform: c,
        elements: {
          reference: e,
          floating: r,
        },
      });
    (w = I ?? w),
      (h = R ?? h),
      (U = {
        ...U,
        [F]: {
          ...U[F],
          ...T,
        },
      }),
      k &&
        Q <= 50 &&
        (Q++,
        typeof k == "object" &&
          (k.placement && (v = k.placement),
          k.rects &&
            (g =
              k.rects === !0
                ? await c.getElementRects({
                    reference: e,
                    floating: r,
                    strategy: s,
                  })
                : k.rects),
          ({ x: w, y: h } = hp(g, v, B))),
        (m = -1));
  }
  return {
    x: w,
    y: h,
    placement: v,
    strategy: s,
    middlewareData: U,
  };
};
async function jo(e, r) {
  var n;
  r === void 0 && (r = {});
  const { x: o, y: s, platform: l, rects: c, elements: f, strategy: B } = e,
    {
      boundary: g = "clippingAncestors",
      rootBoundary: w = "viewport",
      elementContext: h = "floating",
      altBoundary: v = !1,
      padding: U = 0,
    } = Ht(r, e),
    Q = Ah(U),
    F = f[v ? (h === "floating" ? "reference" : "floating") : h],
    E = na(
      await l.getClippingRect({
        element:
          (n = await (l.isElement == null ? void 0 : l.isElement(F))) == null ||
          n
            ? F
            : F.contextElement ||
              (await (l.getDocumentElement == null
                ? void 0
                : l.getDocumentElement(f.floating))),
        boundary: g,
        rootBoundary: w,
        strategy: B,
      }),
    ),
    I =
      h === "floating"
        ? {
            x: o,
            y: s,
            width: c.floating.width,
            height: c.floating.height,
          }
        : c.reference,
    R = await (l.getOffsetParent == null
      ? void 0
      : l.getOffsetParent(f.floating)),
    T = (await (l.isElement == null ? void 0 : l.isElement(R)))
      ? (await (l.getScale == null ? void 0 : l.getScale(R))) || {
          x: 1,
          y: 1,
        }
      : {
          x: 1,
          y: 1,
        },
    k = na(
      l.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: f,
            rect: I,
            offsetParent: R,
            strategy: B,
          })
        : I,
    );
  return {
    top: (E.top - k.top + Q.top) / T.y,
    bottom: (k.bottom - E.bottom + Q.bottom) / T.y,
    left: (E.left - k.left + Q.left) / T.x,
    right: (k.right - E.right + Q.right) / T.x,
  };
}
const J1 = (e) => ({
    name: "arrow",
    options: e,
    async fn(r) {
      const {
          x: n,
          y: o,
          placement: s,
          rects: l,
          platform: c,
          elements: f,
          middlewareData: B,
        } = r,
        { element: g, padding: w = 0 } = Ht(e, r) || {};
      if (g == null) return {};
      const h = Ah(w),
        v = {
          x: n,
          y: o,
        },
        U = Xc(s),
        Q = jc(U),
        m = await c.getDimensions(g),
        F = U === "y",
        E = F ? "top" : "left",
        I = F ? "bottom" : "right",
        R = F ? "clientHeight" : "clientWidth",
        T = l.reference[Q] + l.reference[U] - v[U] - l.floating[Q],
        k = v[U] - l.reference[U],
        O = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(g));
      let M = O ? O[R] : 0;
      (!M || !(await (c.isElement == null ? void 0 : c.isElement(O)))) &&
        (M = f.floating[R] || l.floating[Q]);
      const X = T / 2 - k / 2,
        z = M / 2 - m[Q] / 2 - 1,
        nA = ut(h[E], z),
        dA = ut(h[I], z),
        V = nA,
        q = M - m[Q] - dA,
        rA = M / 2 - m[Q] / 2 + X,
        uA = yc(V, rA, q),
        aA =
          !B.arrow &&
          Dn(s) != null &&
          rA !== uA &&
          l.reference[Q] / 2 - (rA < V ? nA : dA) - m[Q] / 2 < 0,
        Z = aA ? (rA < V ? rA - V : rA - q) : 0;
      return {
        [U]: v[U] + Z,
        data: {
          [U]: uA,
          centerOffset: rA - uA - Z,
          ...(aA && {
            alignmentOffset: Z,
          }),
        },
        reset: aA,
      };
    },
  }),
  Y1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(r) {
          var n, o;
          const {
              placement: s,
              middlewareData: l,
              rects: c,
              initialPlacement: f,
              platform: B,
              elements: g,
            } = r,
            {
              mainAxis: w = !0,
              crossAxis: h = !0,
              fallbackPlacements: v,
              fallbackStrategy: U = "bestFit",
              fallbackAxisSideDirection: Q = "none",
              flipAlignment: m = !0,
              ...F
            } = Ht(e, r);
          if ((n = l.arrow) != null && n.alignmentOffset) return {};
          const E = St(s),
            I = cr(f),
            R = St(f) === f,
            T = await (B.isRTL == null ? void 0 : B.isRTL(g.floating)),
            k = v || (R || !m ? [ra(f)] : G1(f)),
            O = Q !== "none";
          !v && O && k.push(...j1(f, m, Q, T));
          const M = [f, ...k],
            X = await jo(r, F),
            z = [];
          let nA = ((o = l.flip) == null ? void 0 : o.overflows) || [];
          if ((w && z.push(X[E]), h)) {
            const rA = V1(s, c, T);
            z.push(X[rA[0]], X[rA[1]]);
          }
          if (
            ((nA = [
              ...nA,
              {
                placement: s,
                overflows: z,
              },
            ]),
            !z.every((rA) => rA <= 0))
          ) {
            var dA, V;
            const rA = (((dA = l.flip) == null ? void 0 : dA.index) || 0) + 1,
              uA = M[rA];
            if (uA)
              return {
                data: {
                  index: rA,
                  overflows: nA,
                },
                reset: {
                  placement: uA,
                },
              };
            let aA =
              (V = nA
                .filter((Z) => Z.overflows[0] <= 0)
                .sort((Z, P) => Z.overflows[1] - P.overflows[1])[0]) == null
                ? void 0
                : V.placement;
            if (!aA)
              switch (U) {
                case "bestFit": {
                  var q;
                  const Z =
                    (q = nA
                      .filter((P) => {
                        if (O) {
                          const j = cr(P.placement);
                          return (
                            j === I || // Create a bias to the `y` side axis due to horizontal
                            // reading directions favoring greater width.
                            j === "y"
                          );
                        }
                        return !0;
                      })
                      .map((P) => [
                        P.placement,
                        P.overflows
                          .filter((j) => j > 0)
                          .reduce((j, Y) => j + Y, 0),
                      ])
                      .sort((P, j) => P[1] - j[1])[0]) == null
                      ? void 0
                      : q[0];
                  Z && (aA = Z);
                  break;
                }
                case "initialPlacement":
                  aA = f;
                  break;
              }
            if (s !== aA)
              return {
                reset: {
                  placement: aA,
                },
              };
          }
          return {};
        },
      }
    );
  };
function vp(e, r) {
  return {
    top: e.top - r.height,
    right: e.right - r.width,
    bottom: e.bottom - r.height,
    left: e.left - r.width,
  };
}
function mp(e) {
  return M1.some((r) => e[r] >= 0);
}
const Z1 = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(r) {
        const { rects: n } = r,
          { strategy: o = "referenceHidden", ...s } = Ht(e, r);
        switch (o) {
          case "referenceHidden": {
            const l = await jo(r, {
                ...s,
                elementContext: "reference",
              }),
              c = vp(l, n.reference);
            return {
              data: {
                referenceHiddenOffsets: c,
                referenceHidden: mp(c),
              },
            };
          }
          case "escaped": {
            const l = await jo(r, {
                ...s,
                altBoundary: !0,
              }),
              c = vp(l, n.floating);
            return {
              data: {
                escapedOffsets: c,
                escaped: mp(c),
              },
            };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function $1(e, r) {
  const { placement: n, platform: o, elements: s } = e,
    l = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)),
    c = St(n),
    f = Dn(n),
    B = cr(n) === "y",
    g = ["left", "top"].includes(c) ? -1 : 1,
    w = l && B ? -1 : 1,
    h = Ht(r, e);
  let {
    mainAxis: v,
    crossAxis: U,
    alignmentAxis: Q,
  } = typeof h == "number"
    ? {
        mainAxis: h,
        crossAxis: 0,
        alignmentAxis: null,
      }
    : {
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null,
        ...h,
      };
  return (
    f && typeof Q == "number" && (U = f === "end" ? Q * -1 : Q),
    B
      ? {
          x: U * w,
          y: v * g,
        }
      : {
          x: v * g,
          y: U * w,
        }
  );
}
const q1 = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(r) {
          var n, o;
          const { x: s, y: l, placement: c, middlewareData: f } = r,
            B = await $1(r, e);
          return c === ((n = f.offset) == null ? void 0 : n.placement) &&
            (o = f.arrow) != null &&
            o.alignmentOffset
            ? {}
            : {
                x: s + B.x,
                y: l + B.y,
                data: {
                  ...B,
                  placement: c,
                },
              };
        },
      }
    );
  },
  Ax = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(r) {
          const { x: n, y: o, placement: s } = r,
            {
              mainAxis: l = !0,
              crossAxis: c = !1,
              limiter: f = {
                fn: (F) => {
                  let { x: E, y: I } = F;
                  return {
                    x: E,
                    y: I,
                  };
                },
              },
              ...B
            } = Ht(e, r),
            g = {
              x: n,
              y: o,
            },
            w = await jo(r, B),
            h = cr(St(s)),
            v = Wc(h);
          let U = g[v],
            Q = g[h];
          if (l) {
            const F = v === "y" ? "top" : "left",
              E = v === "y" ? "bottom" : "right",
              I = U + w[F],
              R = U - w[E];
            U = yc(I, U, R);
          }
          if (c) {
            const F = h === "y" ? "top" : "left",
              E = h === "y" ? "bottom" : "right",
              I = Q + w[F],
              R = Q - w[E];
            Q = yc(I, Q, R);
          }
          const m = f.fn({
            ...r,
            [v]: U,
            [h]: Q,
          });
          return {
            ...m,
            data: {
              x: m.x - n,
              y: m.y - o,
            },
          };
        },
      }
    );
  },
  ex = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(r) {
          const { x: n, y: o, placement: s, rects: l, middlewareData: c } = r,
            { offset: f = 0, mainAxis: B = !0, crossAxis: g = !0 } = Ht(e, r),
            w = {
              x: n,
              y: o,
            },
            h = cr(s),
            v = Wc(h);
          let U = w[v],
            Q = w[h];
          const m = Ht(f, r),
            F =
              typeof m == "number"
                ? {
                    mainAxis: m,
                    crossAxis: 0,
                  }
                : {
                    mainAxis: 0,
                    crossAxis: 0,
                    ...m,
                  };
          if (B) {
            const R = v === "y" ? "height" : "width",
              T = l.reference[v] - l.floating[R] + F.mainAxis,
              k = l.reference[v] + l.reference[R] - F.mainAxis;
            U < T ? (U = T) : U > k && (U = k);
          }
          if (g) {
            var E, I;
            const R = v === "y" ? "width" : "height",
              T = ["top", "left"].includes(St(s)),
              k =
                l.reference[h] -
                l.floating[R] +
                ((T && ((E = c.offset) == null ? void 0 : E[h])) || 0) +
                (T ? 0 : F.crossAxis),
              O =
                l.reference[h] +
                l.reference[R] +
                (T ? 0 : ((I = c.offset) == null ? void 0 : I[h]) || 0) -
                (T ? F.crossAxis : 0);
            Q < k ? (Q = k) : Q > O && (Q = O);
          }
          return {
            [v]: U,
            [h]: Q,
          };
        },
      }
    );
  },
  tx = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(r) {
          const { placement: n, rects: o, platform: s, elements: l } = r,
            { apply: c = () => {}, ...f } = Ht(e, r),
            B = await jo(r, f),
            g = St(n),
            w = Dn(n),
            h = cr(n) === "y",
            { width: v, height: U } = o.floating;
          let Q, m;
          g === "top" || g === "bottom"
            ? ((Q = g),
              (m =
                w ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(l.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((m = g), (Q = w === "end" ? "top" : "bottom"));
          const F = U - B.top - B.bottom,
            E = v - B.left - B.right,
            I = ut(U - B[Q], F),
            R = ut(v - B[m], E),
            T = !r.middlewareData.shift;
          let k = I,
            O = R;
          if (
            (h ? (O = w || T ? ut(R, E) : E) : (k = w || T ? ut(I, F) : F),
            T && !w)
          ) {
            const X = Le(B.left, 0),
              z = Le(B.right, 0),
              nA = Le(B.top, 0),
              dA = Le(B.bottom, 0);
            h
              ? (O = v - 2 * (X !== 0 || z !== 0 ? X + z : Le(B.left, B.right)))
              : (k =
                  U -
                  2 * (nA !== 0 || dA !== 0 ? nA + dA : Le(B.top, B.bottom)));
          }
          await c({
            ...r,
            availableWidth: O,
            availableHeight: k,
          });
          const M = await s.getDimensions(l.floating);
          return v !== M.width || U !== M.height
            ? {
                reset: {
                  rects: !0,
                },
              }
            : {};
        },
      }
    );
  };
function Kn(e) {
  return eh(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Te(e) {
  var r;
  return (
    (e == null || (r = e.ownerDocument) == null ? void 0 : r.defaultView) ||
    window
  );
}
function bt(e) {
  var r;
  return (r = (eh(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : r.documentElement;
}
function eh(e) {
  return e instanceof Node || e instanceof Te(e).Node;
}
function qe(e) {
  return e instanceof Element || e instanceof Te(e).Element;
}
function ct(e) {
  return e instanceof HTMLElement || e instanceof Te(e).HTMLElement;
}
function Cp(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Te(e).ShadowRoot;
}
function Zo(e) {
  const { overflow: r, overflowX: n, overflowY: o, display: s } = At(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(r + o + n) &&
    !["inline", "contents"].includes(s)
  );
}
function rx(e) {
  return ["table", "td", "th"].includes(Kn(e));
}
function va(e) {
  return [":popover-open", ":modal"].some((r) => {
    try {
      return e.matches(r);
    } catch {
      return !1;
    }
  });
}
function zc(e) {
  const r = Jc(),
    n = qe(e) ? At(e) : e;
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!r && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!r && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((o) =>
      (n.willChange || "").includes(o),
    ) ||
    ["paint", "layout", "strict", "content"].some((o) =>
      (n.contain || "").includes(o),
    )
  );
}
function nx(e) {
  let r = fr(e);
  for (; ct(r) && !bn(r); ) {
    if (zc(r)) return r;
    if (va(r)) return null;
    r = fr(r);
  }
  return null;
}
function Jc() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function bn(e) {
  return ["html", "body", "#document"].includes(Kn(e));
}
function At(e) {
  return Te(e).getComputedStyle(e);
}
function ma(e) {
  return qe(e)
    ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop,
      }
    : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY,
      };
}
function fr(e) {
  if (Kn(e) === "html") return e;
  const r =
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    (Cp(e) && e.host) || // Fallback.
    bt(e);
  return Cp(r) ? r.host : r;
}
function th(e) {
  const r = fr(e);
  return bn(r)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : ct(r) && Zo(r)
      ? r
      : th(r);
}
function Xo(e, r, n) {
  var o;
  r === void 0 && (r = []), n === void 0 && (n = !0);
  const s = th(e),
    l = s === ((o = e.ownerDocument) == null ? void 0 : o.body),
    c = Te(s);
  if (l) {
    const f = Fc(c);
    return r.concat(
      c,
      c.visualViewport || [],
      Zo(s) ? s : [],
      f && n ? Xo(f) : [],
    );
  }
  return r.concat(s, Xo(s, [], n));
}
function Fc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function rh(e) {
  const r = At(e);
  let n = parseFloat(r.width) || 0,
    o = parseFloat(r.height) || 0;
  const s = ct(e),
    l = s ? e.offsetWidth : n,
    c = s ? e.offsetHeight : o,
    f = ta(n) !== l || ta(o) !== c;
  return (
    f && ((n = l), (o = c)),
    {
      width: n,
      height: o,
      $: f,
    }
  );
}
function Yc(e) {
  return qe(e) ? e : e.contextElement;
}
function In(e) {
  const r = Yc(e);
  if (!ct(r)) return ur(1);
  const n = r.getBoundingClientRect(),
    { width: o, height: s, $: l } = rh(r);
  let c = (l ? ta(n.width) : n.width) / o,
    f = (l ? ta(n.height) : n.height) / s;
  return (
    (!c || !Number.isFinite(c)) && (c = 1),
    (!f || !Number.isFinite(f)) && (f = 1),
    {
      x: c,
      y: f,
    }
  );
}
const ox = /* @__PURE__ */ ur(0);
function nh(e) {
  const r = Te(e);
  return !Jc() || !r.visualViewport
    ? ox
    : {
        x: r.visualViewport.offsetLeft,
        y: r.visualViewport.offsetTop,
      };
}
function ix(e, r, n) {
  return r === void 0 && (r = !1), !n || (r && n !== Te(e)) ? !1 : r;
}
function Kr(e, r, n, o) {
  r === void 0 && (r = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(),
    l = Yc(e);
  let c = ur(1);
  r && (o ? qe(o) && (c = In(o)) : (c = In(e)));
  const f = ix(l, n, o) ? nh(l) : ur(0);
  let B = (s.left + f.x) / c.x,
    g = (s.top + f.y) / c.y,
    w = s.width / c.x,
    h = s.height / c.y;
  if (l) {
    const v = Te(l),
      U = o && qe(o) ? Te(o) : o;
    let Q = v,
      m = Fc(Q);
    for (; m && o && U !== Q; ) {
      const F = In(m),
        E = m.getBoundingClientRect(),
        I = At(m),
        R = E.left + (m.clientLeft + parseFloat(I.paddingLeft)) * F.x,
        T = E.top + (m.clientTop + parseFloat(I.paddingTop)) * F.y;
      (B *= F.x),
        (g *= F.y),
        (w *= F.x),
        (h *= F.y),
        (B += R),
        (g += T),
        (Q = Te(m)),
        (m = Fc(Q));
    }
  }
  return na({
    width: w,
    height: h,
    x: B,
    y: g,
  });
}
function sx(e) {
  let { elements: r, rect: n, offsetParent: o, strategy: s } = e;
  const l = s === "fixed",
    c = bt(o),
    f = r ? va(r.floating) : !1;
  if (o === c || (f && l)) return n;
  let B = {
      scrollLeft: 0,
      scrollTop: 0,
    },
    g = ur(1);
  const w = ur(0),
    h = ct(o);
  if (
    (h || (!h && !l)) &&
    ((Kn(o) !== "body" || Zo(c)) && (B = ma(o)), ct(o))
  ) {
    const v = Kr(o);
    (g = In(o)), (w.x = v.x + o.clientLeft), (w.y = v.y + o.clientTop);
  }
  return {
    width: n.width * g.x,
    height: n.height * g.y,
    x: n.x * g.x - B.scrollLeft * g.x + w.x,
    y: n.y * g.y - B.scrollTop * g.y + w.y,
  };
}
function ax(e) {
  return Array.from(e.getClientRects());
}
function oh(e) {
  return Kr(bt(e)).left + ma(e).scrollLeft;
}
function lx(e) {
  const r = bt(e),
    n = ma(e),
    o = e.ownerDocument.body,
    s = Le(r.scrollWidth, r.clientWidth, o.scrollWidth, o.clientWidth),
    l = Le(r.scrollHeight, r.clientHeight, o.scrollHeight, o.clientHeight);
  let c = -n.scrollLeft + oh(e);
  const f = -n.scrollTop;
  return (
    At(o).direction === "rtl" && (c += Le(r.clientWidth, o.clientWidth) - s),
    {
      width: s,
      height: l,
      x: c,
      y: f,
    }
  );
}
function ux(e, r) {
  const n = Te(e),
    o = bt(e),
    s = n.visualViewport;
  let l = o.clientWidth,
    c = o.clientHeight,
    f = 0,
    B = 0;
  if (s) {
    (l = s.width), (c = s.height);
    const g = Jc();
    (!g || (g && r === "fixed")) && ((f = s.offsetLeft), (B = s.offsetTop));
  }
  return {
    width: l,
    height: c,
    x: f,
    y: B,
  };
}
function cx(e, r) {
  const n = Kr(e, !0, r === "fixed"),
    o = n.top + e.clientTop,
    s = n.left + e.clientLeft,
    l = ct(e) ? In(e) : ur(1),
    c = e.clientWidth * l.x,
    f = e.clientHeight * l.y,
    B = s * l.x,
    g = o * l.y;
  return {
    width: c,
    height: f,
    x: B,
    y: g,
  };
}
function Qp(e, r, n) {
  let o;
  if (r === "viewport") o = ux(e, n);
  else if (r === "document") o = lx(bt(e));
  else if (qe(r)) o = cx(r, n);
  else {
    const s = nh(e);
    o = {
      ...r,
      x: r.x - s.x,
      y: r.y - s.y,
    };
  }
  return na(o);
}
function ih(e, r) {
  const n = fr(e);
  return n === r || !qe(n) || bn(n)
    ? !1
    : At(n).position === "fixed" || ih(n, r);
}
function fx(e, r) {
  const n = r.get(e);
  if (n) return n;
  let o = Xo(e, [], !1).filter((f) => qe(f) && Kn(f) !== "body"),
    s = null;
  const l = At(e).position === "fixed";
  let c = l ? fr(e) : e;
  for (; qe(c) && !bn(c); ) {
    const f = At(c),
      B = zc(c);
    !B && f.position === "fixed" && (s = null),
      (
        l
          ? !B && !s
          : (!B &&
              f.position === "static" &&
              !!s &&
              ["absolute", "fixed"].includes(s.position)) ||
            (Zo(c) && !B && ih(e, c))
      )
        ? (o = o.filter((w) => w !== c))
        : (s = f),
      (c = fr(c));
  }
  return r.set(e, o), o;
}
function dx(e) {
  let { element: r, boundary: n, rootBoundary: o, strategy: s } = e;
  const c = [
      ...(n === "clippingAncestors"
        ? va(r)
          ? []
          : fx(r, this._c)
        : [].concat(n)),
      o,
    ],
    f = c[0],
    B = c.reduce(
      (g, w) => {
        const h = Qp(r, w, s);
        return (
          (g.top = Le(h.top, g.top)),
          (g.right = ut(h.right, g.right)),
          (g.bottom = ut(h.bottom, g.bottom)),
          (g.left = Le(h.left, g.left)),
          g
        );
      },
      Qp(r, f, s),
    );
  return {
    width: B.right - B.left,
    height: B.bottom - B.top,
    x: B.left,
    y: B.top,
  };
}
function Bx(e) {
  const { width: r, height: n } = rh(e);
  return {
    width: r,
    height: n,
  };
}
function gx(e, r, n) {
  const o = ct(r),
    s = bt(r),
    l = n === "fixed",
    c = Kr(e, !0, l, r);
  let f = {
    scrollLeft: 0,
    scrollTop: 0,
  };
  const B = ur(0);
  if (o || (!o && !l))
    if (((Kn(r) !== "body" || Zo(s)) && (f = ma(r)), o)) {
      const h = Kr(r, !0, l, r);
      (B.x = h.x + r.clientLeft), (B.y = h.y + r.clientTop);
    } else s && (B.x = oh(s));
  const g = c.left + f.scrollLeft - B.x,
    w = c.top + f.scrollTop - B.y;
  return {
    x: g,
    y: w,
    width: c.width,
    height: c.height,
  };
}
function Wu(e) {
  return At(e).position === "static";
}
function yp(e, r) {
  return !ct(e) || At(e).position === "fixed"
    ? null
    : r
      ? r(e)
      : e.offsetParent;
}
function sh(e, r) {
  const n = Te(e);
  if (va(e)) return n;
  if (!ct(e)) {
    let s = fr(e);
    for (; s && !bn(s); ) {
      if (qe(s) && !Wu(s)) return s;
      s = fr(s);
    }
    return n;
  }
  let o = yp(e, r);
  for (; o && rx(o) && Wu(o); ) o = yp(o, r);
  return o && bn(o) && Wu(o) && !zc(o) ? n : o || nx(e) || n;
}
const px = async function (e) {
  const r = this.getOffsetParent || sh,
    n = this.getDimensions,
    o = await n(e.floating);
  return {
    reference: gx(e.reference, await r(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height,
    },
  };
};
function wx(e) {
  return At(e).direction === "rtl";
}
const hx = {
  convertOffsetParentRelativeRectToViewportRelativeRect: sx,
  getDocumentElement: bt,
  getClippingRect: dx,
  getOffsetParent: sh,
  getElementRects: px,
  getClientRects: ax,
  getDimensions: Bx,
  getScale: In,
  isElement: qe,
  isRTL: wx,
};
function vx(e, r) {
  let n = null,
    o;
  const s = bt(e);
  function l() {
    var f;
    clearTimeout(o), (f = n) == null || f.disconnect(), (n = null);
  }
  function c(f, B) {
    f === void 0 && (f = !1), B === void 0 && (B = 1), l();
    const { left: g, top: w, width: h, height: v } = e.getBoundingClientRect();
    if ((f || r(), !h || !v)) return;
    const U = Ss(w),
      Q = Ss(s.clientWidth - (g + h)),
      m = Ss(s.clientHeight - (w + v)),
      F = Ss(g),
      I = {
        rootMargin: -U + "px " + -Q + "px " + -m + "px " + -F + "px",
        threshold: Le(0, ut(1, B)) || 1,
      };
    let R = !0;
    function T(k) {
      const O = k[0].intersectionRatio;
      if (O !== B) {
        if (!R) return c();
        O
          ? c(!1, O)
          : (o = setTimeout(() => {
              c(!1, 1e-7);
            }, 1e3));
      }
      R = !1;
    }
    try {
      n = new IntersectionObserver(T, {
        ...I,
        // Handle <iframe>s
        root: s.ownerDocument,
      });
    } catch {
      n = new IntersectionObserver(T, I);
    }
    n.observe(e);
  }
  return c(!0), l;
}
function mx(e, r, n, o) {
  o === void 0 && (o = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: l = !0,
      elementResize: c = typeof ResizeObserver == "function",
      layoutShift: f = typeof IntersectionObserver == "function",
      animationFrame: B = !1,
    } = o,
    g = Yc(e),
    w = s || l ? [...(g ? Xo(g) : []), ...Xo(r)] : [];
  w.forEach((E) => {
    s &&
      E.addEventListener("scroll", n, {
        passive: !0,
      }),
      l && E.addEventListener("resize", n);
  });
  const h = g && f ? vx(g, n) : null;
  let v = -1,
    U = null;
  c &&
    ((U = new ResizeObserver((E) => {
      let [I] = E;
      I &&
        I.target === g &&
        U &&
        (U.unobserve(r),
        cancelAnimationFrame(v),
        (v = requestAnimationFrame(() => {
          var R;
          (R = U) == null || R.observe(r);
        }))),
        n();
    })),
    g && !B && U.observe(g),
    U.observe(r));
  let Q,
    m = B ? Kr(e) : null;
  B && F();
  function F() {
    const E = Kr(e);
    m &&
      (E.x !== m.x ||
        E.y !== m.y ||
        E.width !== m.width ||
        E.height !== m.height) &&
      n(),
      (m = E),
      (Q = requestAnimationFrame(F));
  }
  return (
    n(),
    () => {
      var E;
      w.forEach((I) => {
        s && I.removeEventListener("scroll", n),
          l && I.removeEventListener("resize", n);
      }),
        h?.(),
        (E = U) == null || E.disconnect(),
        (U = null),
        B && cancelAnimationFrame(Q);
    }
  );
}
const Cx = q1,
  Qx = Ax,
  yx = Y1,
  Ux = tx,
  Fx = Z1,
  Up = J1,
  Ex = ex,
  xx = (e, r, n) => {
    const o = /* @__PURE__ */ new Map(),
      s = {
        platform: hx,
        ...n,
      },
      l = {
        ...s.platform,
        _c: o,
      };
    return z1(e, r, {
      ...s,
      platform: l,
    });
  };
var Vs = typeof document < "u" ? C.useLayoutEffect : C.useEffect;
function oa(e, r) {
  if (e === r) return !0;
  if (typeof e != typeof r) return !1;
  if (typeof e == "function" && e.toString() === r.toString()) return !0;
  let n, o, s;
  if (e && r && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== r.length)) return !1;
      for (o = n; o-- !== 0; ) if (!oa(e[o], r[o])) return !1;
      return !0;
    }
    if (((s = Object.keys(e)), (n = s.length), n !== Object.keys(r).length))
      return !1;
    for (o = n; o-- !== 0; ) if (!{}.hasOwnProperty.call(r, s[o])) return !1;
    for (o = n; o-- !== 0; ) {
      const l = s[o];
      if (!(l === "_owner" && e.$$typeof) && !oa(e[l], r[l])) return !1;
    }
    return !0;
  }
  return e !== e && r !== r;
}
function ah(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Fp(e, r) {
  const n = ah(e);
  return Math.round(r * n) / n;
}
function Ep(e) {
  const r = C.useRef(e);
  return (
    Vs(() => {
      r.current = e;
    }),
    r
  );
}
function Ix(e) {
  e === void 0 && (e = {});
  const {
      placement: r = "bottom",
      strategy: n = "absolute",
      middleware: o = [],
      platform: s,
      elements: { reference: l, floating: c } = {},
      transform: f = !0,
      whileElementsMounted: B,
      open: g,
    } = e,
    [w, h] = C.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: r,
      middlewareData: {},
      isPositioned: !1,
    }),
    [v, U] = C.useState(o);
  oa(v, o) || U(o);
  const [Q, m] = C.useState(null),
    [F, E] = C.useState(null),
    I = C.useCallback((Z) => {
      Z !== O.current && ((O.current = Z), m(Z));
    }, []),
    R = C.useCallback((Z) => {
      Z !== M.current && ((M.current = Z), E(Z));
    }, []),
    T = l || Q,
    k = c || F,
    O = C.useRef(null),
    M = C.useRef(null),
    X = C.useRef(w),
    z = B != null,
    nA = Ep(B),
    dA = Ep(s),
    V = C.useCallback(() => {
      if (!O.current || !M.current) return;
      const Z = {
        placement: r,
        strategy: n,
        middleware: v,
      };
      dA.current && (Z.platform = dA.current),
        xx(O.current, M.current, Z).then((P) => {
          const j = {
            ...P,
            isPositioned: !0,
          };
          q.current &&
            !oa(X.current, j) &&
            ((X.current = j),
            Or.flushSync(() => {
              h(j);
            }));
        });
    }, [v, r, n, dA]);
  Vs(() => {
    g === !1 &&
      X.current.isPositioned &&
      ((X.current.isPositioned = !1),
      h((Z) => ({
        ...Z,
        isPositioned: !1,
      })));
  }, [g]);
  const q = C.useRef(!1);
  Vs(
    () => (
      (q.current = !0),
      () => {
        q.current = !1;
      }
    ),
    [],
  ),
    Vs(() => {
      if ((T && (O.current = T), k && (M.current = k), T && k)) {
        if (nA.current) return nA.current(T, k, V);
        V();
      }
    }, [T, k, V, nA, z]);
  const rA = C.useMemo(
      () => ({
        reference: O,
        floating: M,
        setReference: I,
        setFloating: R,
      }),
      [I, R],
    ),
    uA = C.useMemo(
      () => ({
        reference: T,
        floating: k,
      }),
      [T, k],
    ),
    aA = C.useMemo(() => {
      const Z = {
        position: n,
        left: 0,
        top: 0,
      };
      if (!uA.floating) return Z;
      const P = Fp(uA.floating, w.x),
        j = Fp(uA.floating, w.y);
      return f
        ? {
            ...Z,
            transform: "translate(" + P + "px, " + j + "px)",
            ...(ah(uA.floating) >= 1.5 && {
              willChange: "transform",
            }),
          }
        : {
            position: n,
            left: P,
            top: j,
          };
    }, [n, f, uA.floating, w.x, w.y]);
  return C.useMemo(
    () => ({
      ...w,
      update: V,
      refs: rA,
      elements: uA,
      floatingStyles: aA,
    }),
    [w, V, rA, uA, aA],
  );
}
const Hx = (e) => {
    function r(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: o, padding: s } = typeof e == "function" ? e(n) : e;
        return o && r(o)
          ? o.current != null
            ? Up({
                element: o.current,
                padding: s,
              }).fn(n)
            : {}
          : o
            ? Up({
                element: o,
                padding: s,
              }).fn(n)
            : {};
      },
    };
  },
  Sx = (e, r) => ({
    ...Cx(e),
    options: [e, r],
  }),
  bx = (e, r) => ({
    ...Qx(e),
    options: [e, r],
  }),
  Lx = (e, r) => ({
    ...Ex(e),
    options: [e, r],
  }),
  Tx = (e, r) => ({
    ...yx(e),
    options: [e, r],
  }),
  Dx = (e, r) => ({
    ...Ux(e),
    options: [e, r],
  }),
  Kx = (e, r) => ({
    ...Fx(e),
    options: [e, r],
  }),
  kx = (e, r) => ({
    ...Hx(e),
    options: [e, r],
  });
var Rx = "Arrow",
  lh = C.forwardRef((e, r) => {
    const { children: n, width: o = 10, height: s = 5, ...l } = e;
    return /* @__PURE__ */ b.jsx(TA.svg, {
      ...l,
      ref: r,
      width: o,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild
        ? n
        : /* @__PURE__ */ b.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
lh.displayName = Rx;
var Ox = lh;
function Nx(e) {
  const [r, n] = C.useState(void 0);
  return (
    ve(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const o = new ResizeObserver((s) => {
          if (!Array.isArray(s) || !s.length) return;
          const l = s[0];
          let c, f;
          if ("borderBoxSize" in l) {
            const B = l.borderBoxSize,
              g = Array.isArray(B) ? B[0] : B;
            (c = g.inlineSize), (f = g.blockSize);
          } else (c = e.offsetWidth), (f = e.offsetHeight);
          n({ width: c, height: f });
        });
        return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
      } else n(void 0);
    }, [e]),
    r
  );
}
var Zc = "Popper",
  [uh, ch] = ha(Zc),
  [Mx, fh] = uh(Zc),
  dh = (e) => {
    const { __scopePopper: r, children: n } = e,
      [o, s] = C.useState(null);
    return /* @__PURE__ */ b.jsx(Mx, {
      scope: r,
      anchor: o,
      onAnchorChange: s,
      children: n,
    });
  };
dh.displayName = Zc;
var Bh = "PopperAnchor",
  gh = C.forwardRef((e, r) => {
    const { __scopePopper: n, virtualRef: o, ...s } = e,
      l = fh(Bh, n),
      c = C.useRef(null),
      f = zA(r, c);
    return (
      C.useEffect(() => {
        l.onAnchorChange(o?.current || c.current);
      }),
      o ? null : /* @__PURE__ */ b.jsx(TA.div, { ...s, ref: f })
    );
  });
gh.displayName = Bh;
var $c = "PopperContent",
  [Px, _x] = uh($c),
  ph = C.forwardRef((e, r) => {
    const {
        __scopePopper: n,
        side: o = "bottom",
        sideOffset: s = 0,
        align: l = "center",
        alignOffset: c = 0,
        arrowPadding: f = 0,
        avoidCollisions: B = !0,
        collisionBoundary: g = [],
        collisionPadding: w = 0,
        sticky: h = "partial",
        hideWhenDetached: v = !1,
        updatePositionStrategy: U = "optimized",
        onPlaced: Q,
        ...m
      } = e,
      F = fh($c, n),
      [E, I] = C.useState(null),
      R = zA(r, ($) => I($)),
      [T, k] = C.useState(null),
      O = Nx(T),
      M = O?.width ?? 0,
      X = O?.height ?? 0,
      z = o + (l !== "center" ? "-" + l : ""),
      nA =
        typeof w == "number"
          ? w
          : { top: 0, right: 0, bottom: 0, left: 0, ...w },
      dA = Array.isArray(g) ? g : [g],
      V = dA.length > 0,
      q = {
        padding: nA,
        boundary: dA.filter(Gx),
        // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
        altBoundary: V,
      },
      {
        refs: rA,
        floatingStyles: uA,
        placement: aA,
        isPositioned: Z,
        middlewareData: P,
      } = Ix({
        // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
        strategy: "fixed",
        placement: z,
        whileElementsMounted: (...$) =>
          mx(...$, {
            animationFrame: U === "always",
          }),
        elements: {
          reference: F.anchor,
        },
        middleware: [
          Sx({ mainAxis: s + X, alignmentAxis: c }),
          B &&
            bx({
              mainAxis: !0,
              crossAxis: !1,
              limiter: h === "partial" ? Lx() : void 0,
              ...q,
            }),
          B && Tx({ ...q }),
          Dx({
            ...q,
            apply: ({
              elements: $,
              rects: BA,
              availableWidth: CA,
              availableHeight: QA,
            }) => {
              const { width: IA, height: NA } = BA.reference,
                oe = $.floating.style;
              oe.setProperty("--radix-popper-available-width", `${CA}px`),
                oe.setProperty("--radix-popper-available-height", `${QA}px`),
                oe.setProperty("--radix-popper-anchor-width", `${IA}px`),
                oe.setProperty("--radix-popper-anchor-height", `${NA}px`);
            },
          }),
          T && kx({ element: T, padding: f }),
          Wx({ arrowWidth: M, arrowHeight: X }),
          v && Kx({ strategy: "referenceHidden", ...q }),
        ],
      }),
      [j, Y] = vh(aA),
      H = It(Q);
    ve(() => {
      Z && H?.();
    }, [Z, H]);
    const N = P.arrow?.x,
      cA = P.arrow?.y,
      fA = P.arrow?.centerOffset !== 0,
      [wA, hA] = C.useState();
    return (
      ve(() => {
        E && hA(window.getComputedStyle(E).zIndex);
      }, [E]),
      /* @__PURE__ */ b.jsx("div", {
        ref: rA.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...uA,
          transform: Z ? uA.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: wA,
          "--radix-popper-transform-origin": [
            P.transformOrigin?.x,
            P.transformOrigin?.y,
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...(P.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: /* @__PURE__ */ b.jsx(Px, {
          scope: n,
          placedSide: j,
          onArrowChange: k,
          arrowX: N,
          arrowY: cA,
          shouldHideArrow: fA,
          children: /* @__PURE__ */ b.jsx(TA.div, {
            "data-side": j,
            "data-align": Y,
            ...m,
            ref: R,
            style: {
              ...m.style,
              // if the PopperContent hasn't been placed yet (not all measurements done)
              // we prevent animations so that users's animation don't kick in too early referring wrong sides
              animation: Z ? void 0 : "none",
            },
          }),
        }),
      })
    );
  });
ph.displayName = $c;
var wh = "PopperArrow",
  Vx = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right",
  },
  hh = C.forwardRef(function (r, n) {
    const { __scopePopper: o, ...s } = r,
      l = _x(wh, o),
      c = Vx[l.placedSide];
    return (
      // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
      // doesn't report size as we'd expect on SVG elements.
      // it reports their bounding box which is effectively the largest path inside the SVG.
      /* @__PURE__ */ b.jsx("span", {
        ref: l.onArrowChange,
        style: {
          position: "absolute",
          left: l.arrowX,
          top: l.arrowY,
          [c]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0",
          }[l.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)",
          }[l.placedSide],
          visibility: l.shouldHideArrow ? "hidden" : void 0,
        },
        children: /* @__PURE__ */ b.jsx(Ox, {
          ...s,
          ref: n,
          style: {
            ...s.style,
            // ensures the element can be measured correctly (mostly for if SVG)
            display: "block",
          },
        }),
      })
    );
  });
hh.displayName = wh;
function Gx(e) {
  return e !== null;
}
var Wx = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(r) {
    const { placement: n, rects: o, middlewareData: s } = r,
      c = s.arrow?.centerOffset !== 0,
      f = c ? 0 : e.arrowWidth,
      B = c ? 0 : e.arrowHeight,
      [g, w] = vh(n),
      h = { start: "0%", center: "50%", end: "100%" }[w],
      v = (s.arrow?.x ?? 0) + f / 2,
      U = (s.arrow?.y ?? 0) + B / 2;
    let Q = "",
      m = "";
    return (
      g === "bottom"
        ? ((Q = c ? h : `${v}px`), (m = `${-B}px`))
        : g === "top"
          ? ((Q = c ? h : `${v}px`), (m = `${o.floating.height + B}px`))
          : g === "right"
            ? ((Q = `${-B}px`), (m = c ? h : `${U}px`))
            : g === "left" &&
              ((Q = `${o.floating.width + B}px`), (m = c ? h : `${U}px`)),
      { data: { x: Q, y: m } }
    );
  },
});
function vh(e) {
  const [r, n = "center"] = e.split("-");
  return [r, n];
}
var jx = dh,
  Xx = gh,
  zx = ph,
  Jx = hh,
  Yx = "Portal",
  qc = C.forwardRef((e, r) => {
    const { container: n, ...o } = e,
      [s, l] = C.useState(!1);
    ve(() => l(!0), []);
    const c = n || (s && globalThis?.document?.body);
    return c
      ? Wm.createPortal(/* @__PURE__ */ b.jsx(TA.div, { ...o, ref: r }), c)
      : null;
  });
qc.displayName = Yx;
function Ec({ prop: e, defaultProp: r, onChange: n = () => {} }) {
  const [o, s] = Zx({ defaultProp: r, onChange: n }),
    l = e !== void 0,
    c = l ? e : o,
    f = It(n),
    B = C.useCallback(
      (g) => {
        if (l) {
          const h = typeof g == "function" ? g(e) : g;
          h !== e && f(h);
        } else s(g);
      },
      [l, e, s, f],
    );
  return [c, B];
}
function Zx({ defaultProp: e, onChange: r }) {
  const n = C.useState(e),
    [o] = n,
    s = C.useRef(o),
    l = It(r);
  return (
    C.useEffect(() => {
      s.current !== o && (l(o), (s.current = o));
    }, [o, s, l]),
    n
  );
}
function $x(e) {
  const r = C.useRef({ value: e, previous: e });
  return C.useMemo(
    () => (
      r.current.value !== e &&
        ((r.current.previous = r.current.value), (r.current.value = e)),
      r.current.previous
    ),
    [e],
  );
}
var qx = "VisuallyHidden",
  mh = C.forwardRef((e, r) =>
    /* @__PURE__ */ b.jsx(TA.span, {
      ...e,
      ref: r,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    }),
  );
mh.displayName = qx;
var AI = function (e) {
    if (typeof document > "u") return null;
    var r = Array.isArray(e) ? e[0] : e;
    return r.ownerDocument.body;
  },
  vn = /* @__PURE__ */ new WeakMap(),
  bs = /* @__PURE__ */ new WeakMap(),
  Ls = {},
  ju = 0,
  Ch = function (e) {
    return e && (e.host || Ch(e.parentNode));
  },
  eI = function (e, r) {
    return r
      .map(function (n) {
        if (e.contains(n)) return n;
        var o = Ch(n);
        return o && e.contains(o)
          ? o
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  tI = function (e, r, n, o) {
    var s = eI(r, Array.isArray(e) ? e : [e]);
    Ls[n] || (Ls[n] = /* @__PURE__ */ new WeakMap());
    var l = Ls[n],
      c = [],
      f = /* @__PURE__ */ new Set(),
      B = new Set(s),
      g = function (h) {
        !h || f.has(h) || (f.add(h), g(h.parentNode));
      };
    s.forEach(g);
    var w = function (h) {
      !h ||
        B.has(h) ||
        Array.prototype.forEach.call(h.children, function (v) {
          if (f.has(v)) w(v);
          else
            try {
              var U = v.getAttribute(o),
                Q = U !== null && U !== "false",
                m = (vn.get(v) || 0) + 1,
                F = (l.get(v) || 0) + 1;
              vn.set(v, m),
                l.set(v, F),
                c.push(v),
                m === 1 && Q && bs.set(v, !0),
                F === 1 && v.setAttribute(n, "true"),
                Q || v.setAttribute(o, "true");
            } catch (E) {
              console.error("aria-hidden: cannot operate on ", v, E);
            }
        });
    };
    return (
      w(r),
      f.clear(),
      ju++,
      function () {
        c.forEach(function (h) {
          var v = vn.get(h) - 1,
            U = l.get(h) - 1;
          vn.set(h, v),
            l.set(h, U),
            v || (bs.has(h) || h.removeAttribute(o), bs.delete(h)),
            U || h.removeAttribute(n);
        }),
          ju--,
          ju ||
            ((vn = /* @__PURE__ */ new WeakMap()),
            (vn = /* @__PURE__ */ new WeakMap()),
            (bs = /* @__PURE__ */ new WeakMap()),
            (Ls = {}));
      }
    );
  },
  Qh = function (e, r, n) {
    n === void 0 && (n = "data-aria-hidden");
    var o = Array.from(Array.isArray(e) ? e : [e]),
      s = AI(e);
    return s
      ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live]"))),
        tI(o, s, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  lt = function () {
    return (
      (lt =
        Object.assign ||
        function (r) {
          for (var n, o = 1, s = arguments.length; o < s; o++) {
            n = arguments[o];
            for (var l in n)
              Object.prototype.hasOwnProperty.call(n, l) && (r[l] = n[l]);
          }
          return r;
        }),
      lt.apply(this, arguments)
    );
  };
function yh(e, r) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) &&
      r.indexOf(o) < 0 &&
      (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      r.indexOf(o[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[s]) &&
        (n[o[s]] = e[o[s]]);
  return n;
}
function rI(e, r, n) {
  if (n || arguments.length === 2)
    for (var o = 0, s = r.length, l; o < s; o++)
      (l || !(o in r)) &&
        (l || (l = Array.prototype.slice.call(r, 0, o)), (l[o] = r[o]));
  return e.concat(l || Array.prototype.slice.call(r));
}
var Gs = "right-scroll-bar-position",
  Ws = "width-before-scroll-bar",
  nI = "with-scroll-bars-hidden",
  oI = "--removed-body-scroll-bar-size";
function Xu(e, r) {
  return typeof e == "function" ? e(r) : e && (e.current = r), e;
}
function iI(e, r) {
  var n = C.useState(function () {
    return {
      // value
      value: e,
      // last callback
      callback: r,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(o) {
          var s = n.value;
          s !== o && ((n.value = o), n.callback(o, s));
        },
      },
    };
  })[0];
  return (n.callback = r), n.facade;
}
var sI = typeof window < "u" ? C.useLayoutEffect : C.useEffect,
  xp = /* @__PURE__ */ new WeakMap();
function aI(e, r) {
  var n = iI(null, function (o) {
    return e.forEach(function (s) {
      return Xu(s, o);
    });
  });
  return (
    sI(
      function () {
        var o = xp.get(n);
        if (o) {
          var s = new Set(o),
            l = new Set(e),
            c = n.current;
          s.forEach(function (f) {
            l.has(f) || Xu(f, null);
          }),
            l.forEach(function (f) {
              s.has(f) || Xu(f, c);
            });
        }
        xp.set(n, e);
      },
      [e],
    ),
    n
  );
}
function lI(e) {
  return e;
}
function uI(e, r) {
  r === void 0 && (r = lI);
  var n = [],
    o = !1,
    s = {
      read: function () {
        if (o)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (l) {
        var c = r(l, o);
        return (
          n.push(c),
          function () {
            n = n.filter(function (f) {
              return f !== c;
            });
          }
        );
      },
      assignSyncMedium: function (l) {
        for (o = !0; n.length; ) {
          var c = n;
          (n = []), c.forEach(l);
        }
        n = {
          push: function (f) {
            return l(f);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (l) {
        o = !0;
        var c = [];
        if (n.length) {
          var f = n;
          (n = []), f.forEach(l), (c = n);
        }
        var B = function () {
            var w = c;
            (c = []), w.forEach(l);
          },
          g = function () {
            return Promise.resolve().then(B);
          };
        g(),
          (n = {
            push: function (w) {
              c.push(w), g();
            },
            filter: function (w) {
              return (c = c.filter(w)), n;
            },
          });
      },
    };
  return s;
}
function cI(e) {
  e === void 0 && (e = {});
  var r = uI(null);
  return (r.options = lt({ async: !0, ssr: !1 }, e)), r;
}
var Uh = function (e) {
  var r = e.sideCar,
    n = yh(e, ["sideCar"]);
  if (!r)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var o = r.read();
  if (!o) throw new Error("Sidecar medium not found");
  return C.createElement(o, lt({}, n));
};
Uh.isSideCarExport = !0;
function fI(e, r) {
  return e.useMedium(r), Uh;
}
var Fh = cI(),
  zu = function () {},
  Ca = C.forwardRef(function (e, r) {
    var n = C.useRef(null),
      o = C.useState({
        onScrollCapture: zu,
        onWheelCapture: zu,
        onTouchMoveCapture: zu,
      }),
      s = o[0],
      l = o[1],
      c = e.forwardProps,
      f = e.children,
      B = e.className,
      g = e.removeScrollBar,
      w = e.enabled,
      h = e.shards,
      v = e.sideCar,
      U = e.noIsolation,
      Q = e.inert,
      m = e.allowPinchZoom,
      F = e.as,
      E = F === void 0 ? "div" : F,
      I = e.gapMode,
      R = yh(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      T = v,
      k = aI([n, r]),
      O = lt(lt({}, R), s);
    return C.createElement(
      C.Fragment,
      null,
      w &&
        C.createElement(T, {
          sideCar: Fh,
          removeScrollBar: g,
          shards: h,
          noIsolation: U,
          inert: Q,
          setCallbacks: l,
          allowPinchZoom: !!m,
          lockRef: n,
          gapMode: I,
        }),
      c
        ? C.cloneElement(C.Children.only(f), lt(lt({}, O), { ref: k }))
        : C.createElement(E, lt({}, O, { className: B, ref: k }), f),
    );
  });
Ca.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1,
};
Ca.classNames = {
  fullWidth: Ws,
  zeroRight: Gs,
};
var dI = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function BI() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var r = dI();
  return r && e.setAttribute("nonce", r), e;
}
function gI(e, r) {
  e.styleSheet
    ? (e.styleSheet.cssText = r)
    : e.appendChild(document.createTextNode(r));
}
function pI(e) {
  var r = document.head || document.getElementsByTagName("head")[0];
  r.appendChild(e);
}
var wI = function () {
    var e = 0,
      r = null;
    return {
      add: function (n) {
        e == 0 && (r = BI()) && (gI(r, n), pI(r)), e++;
      },
      remove: function () {
        e--,
          !e && r && (r.parentNode && r.parentNode.removeChild(r), (r = null));
      },
    };
  },
  hI = function () {
    var e = wI();
    return function (r, n) {
      C.useEffect(
        function () {
          return (
            e.add(r),
            function () {
              e.remove();
            }
          );
        },
        [r && n],
      );
    };
  },
  Eh = function () {
    var e = hI(),
      r = function (n) {
        var o = n.styles,
          s = n.dynamic;
        return e(o, s), null;
      };
    return r;
  },
  vI = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0,
  },
  Ju = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  mI = function (e) {
    var r = window.getComputedStyle(document.body),
      n = r[e === "padding" ? "paddingLeft" : "marginLeft"],
      o = r[e === "padding" ? "paddingTop" : "marginTop"],
      s = r[e === "padding" ? "paddingRight" : "marginRight"];
    return [Ju(n), Ju(o), Ju(s)];
  },
  CI = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return vI;
    var r = mI(e),
      n = document.documentElement.clientWidth,
      o = window.innerWidth;
    return {
      left: r[0],
      top: r[1],
      right: r[2],
      gap: Math.max(0, o - n + r[2] - r[0]),
    };
  },
  QI = Eh(),
  Hn = "data-scroll-locked",
  yI = function (e, r, n, o) {
    var s = e.left,
      l = e.top,
      c = e.right,
      f = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          nI,
          ` {
   overflow: hidden `,
        )
        .concat(
          o,
          `;
   padding-right: `,
        )
        .concat(f, "px ")
        .concat(
          o,
          `;
  }
  body[`,
        )
        .concat(
          Hn,
          `] {
    overflow: hidden `,
        )
        .concat(
          o,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            r && "position: relative ".concat(o, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  s,
                  `px;
    padding-top: `,
                )
                .concat(
                  l,
                  `px;
    padding-right: `,
                )
                .concat(
                  c,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(f, "px ")
                .concat(
                  o,
                  `;
    `,
                ),
            n === "padding" &&
              "padding-right: ".concat(f, "px ").concat(o, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          Gs,
          ` {
    right: `,
        )
        .concat(f, "px ")
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(
          Ws,
          ` {
    margin-right: `,
        )
        .concat(f, "px ")
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(Gs, " .")
        .concat(
          Gs,
          ` {
    right: 0 `,
        )
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(Ws, " .")
        .concat(
          Ws,
          ` {
    margin-right: 0 `,
        )
        .concat(
          o,
          `;
  }
  
  body[`,
        )
        .concat(
          Hn,
          `] {
    `,
        )
        .concat(oI, ": ")
        .concat(
          f,
          `px;
  }
`,
        )
    );
  },
  Ip = function () {
    var e = parseInt(document.body.getAttribute(Hn) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  UI = function () {
    C.useEffect(function () {
      return (
        document.body.setAttribute(Hn, (Ip() + 1).toString()),
        function () {
          var e = Ip() - 1;
          e <= 0
            ? document.body.removeAttribute(Hn)
            : document.body.setAttribute(Hn, e.toString());
        }
      );
    }, []);
  },
  FI = function (e) {
    var r = e.noRelative,
      n = e.noImportant,
      o = e.gapMode,
      s = o === void 0 ? "margin" : o;
    UI();
    var l = C.useMemo(
      function () {
        return CI(s);
      },
      [s],
    );
    return C.createElement(QI, { styles: yI(l, !r, s, n ? "" : "!important") });
  },
  xc = !1;
if (typeof window < "u")
  try {
    var Ts = Object.defineProperty({}, "passive", {
      get: function () {
        return (xc = !0), !0;
      },
    });
    window.addEventListener("test", Ts, Ts),
      window.removeEventListener("test", Ts, Ts);
  } catch {
    xc = !1;
  }
var mn = xc ? { passive: !1 } : !1,
  EI = function (e) {
    return e.tagName === "TEXTAREA";
  },
  xh = function (e, r) {
    var n = window.getComputedStyle(e);
    return (
      // not-not-scrollable
      n[r] !== "hidden" && // contains scroll inside self
      !(n.overflowY === n.overflowX && !EI(e) && n[r] === "visible")
    );
  },
  xI = function (e) {
    return xh(e, "overflowY");
  },
  II = function (e) {
    return xh(e, "overflowX");
  },
  Hp = function (e, r) {
    var n = r.ownerDocument,
      o = r;
    do {
      typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
      var s = Ih(e, o);
      if (s) {
        var l = Hh(e, o),
          c = l[1],
          f = l[2];
        if (c > f) return !0;
      }
      o = o.parentNode;
    } while (o && o !== n.body);
    return !1;
  },
  HI = function (e) {
    var r = e.scrollTop,
      n = e.scrollHeight,
      o = e.clientHeight;
    return [r, n, o];
  },
  SI = function (e) {
    var r = e.scrollLeft,
      n = e.scrollWidth,
      o = e.clientWidth;
    return [r, n, o];
  },
  Ih = function (e, r) {
    return e === "v" ? xI(r) : II(r);
  },
  Hh = function (e, r) {
    return e === "v" ? HI(r) : SI(r);
  },
  bI = function (e, r) {
    return e === "h" && r === "rtl" ? -1 : 1;
  },
  LI = function (e, r, n, o, s) {
    var l = bI(e, window.getComputedStyle(r).direction),
      c = l * o,
      f = n.target,
      B = r.contains(f),
      g = !1,
      w = c > 0,
      h = 0,
      v = 0;
    do {
      var U = Hh(e, f),
        Q = U[0],
        m = U[1],
        F = U[2],
        E = m - F - l * Q;
      (Q || E) && Ih(e, f) && ((h += E), (v += Q)),
        f instanceof ShadowRoot ? (f = f.host) : (f = f.parentNode);
    } while (
      // portaled content
      (!B && f !== document.body) || // self content
      (B && (r.contains(f) || r === f))
    );
    return (
      ((w && (Math.abs(h) < 1 || !s)) || (!w && (Math.abs(v) < 1 || !s))) &&
        (g = !0),
      g
    );
  },
  Ds = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Sp = function (e) {
    return [e.deltaX, e.deltaY];
  },
  bp = function (e) {
    return e && "current" in e ? e.current : e;
  },
  TI = function (e, r) {
    return e[0] === r[0] && e[1] === r[1];
  },
  DI = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  KI = 0,
  Cn = [];
function kI(e) {
  var r = C.useRef([]),
    n = C.useRef([0, 0]),
    o = C.useRef(),
    s = C.useState(KI++)[0],
    l = C.useState(Eh)[0],
    c = C.useRef(e);
  C.useEffect(
    function () {
      c.current = e;
    },
    [e],
  ),
    C.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(s));
          var m = rI([e.lockRef.current], (e.shards || []).map(bp), !0).filter(
            Boolean,
          );
          return (
            m.forEach(function (F) {
              return F.classList.add("allow-interactivity-".concat(s));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(s)),
                m.forEach(function (F) {
                  return F.classList.remove("allow-interactivity-".concat(s));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var f = C.useCallback(function (m, F) {
      if ("touches" in m && m.touches.length === 2)
        return !c.current.allowPinchZoom;
      var E = Ds(m),
        I = n.current,
        R = "deltaX" in m ? m.deltaX : I[0] - E[0],
        T = "deltaY" in m ? m.deltaY : I[1] - E[1],
        k,
        O = m.target,
        M = Math.abs(R) > Math.abs(T) ? "h" : "v";
      if ("touches" in m && M === "h" && O.type === "range") return !1;
      var X = Hp(M, O);
      if (!X) return !0;
      if ((X ? (k = M) : ((k = M === "v" ? "h" : "v"), (X = Hp(M, O))), !X))
        return !1;
      if (
        (!o.current && "changedTouches" in m && (R || T) && (o.current = k), !k)
      )
        return !0;
      var z = o.current || k;
      return LI(z, F, m, z === "h" ? R : T, !0);
    }, []),
    B = C.useCallback(function (m) {
      var F = m;
      if (!(!Cn.length || Cn[Cn.length - 1] !== l)) {
        var E = "deltaY" in F ? Sp(F) : Ds(F),
          I = r.current.filter(function (k) {
            return (
              k.name === F.type &&
              (k.target === F.target || F.target === k.shadowParent) &&
              TI(k.delta, E)
            );
          })[0];
        if (I && I.should) {
          F.cancelable && F.preventDefault();
          return;
        }
        if (!I) {
          var R = (c.current.shards || [])
              .map(bp)
              .filter(Boolean)
              .filter(function (k) {
                return k.contains(F.target);
              }),
            T = R.length > 0 ? f(F, R[0]) : !c.current.noIsolation;
          T && F.cancelable && F.preventDefault();
        }
      }
    }, []),
    g = C.useCallback(function (m, F, E, I) {
      var R = { name: m, delta: F, target: E, should: I, shadowParent: RI(E) };
      r.current.push(R),
        setTimeout(function () {
          r.current = r.current.filter(function (T) {
            return T !== R;
          });
        }, 1);
    }, []),
    w = C.useCallback(function (m) {
      (n.current = Ds(m)), (o.current = void 0);
    }, []),
    h = C.useCallback(function (m) {
      g(m.type, Sp(m), m.target, f(m, e.lockRef.current));
    }, []),
    v = C.useCallback(function (m) {
      g(m.type, Ds(m), m.target, f(m, e.lockRef.current));
    }, []);
  C.useEffect(function () {
    return (
      Cn.push(l),
      e.setCallbacks({
        onScrollCapture: h,
        onWheelCapture: h,
        onTouchMoveCapture: v,
      }),
      document.addEventListener("wheel", B, mn),
      document.addEventListener("touchmove", B, mn),
      document.addEventListener("touchstart", w, mn),
      function () {
        (Cn = Cn.filter(function (m) {
          return m !== l;
        })),
          document.removeEventListener("wheel", B, mn),
          document.removeEventListener("touchmove", B, mn),
          document.removeEventListener("touchstart", w, mn);
      }
    );
  }, []);
  var U = e.removeScrollBar,
    Q = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    Q ? C.createElement(l, { styles: DI(s) }) : null,
    U ? C.createElement(FI, { gapMode: e.gapMode }) : null,
  );
}
function RI(e) {
  for (var r = null; e !== null; )
    e instanceof ShadowRoot && ((r = e.host), (e = e.host)), (e = e.parentNode);
  return r;
}
const OI = fI(Fh, kI);
var Af = C.forwardRef(function (e, r) {
  return C.createElement(Ca, lt({}, e, { ref: r, sideCar: OI }));
});
Af.classNames = Ca.classNames;
var NI = [" ", "Enter", "ArrowUp", "ArrowDown"],
  MI = [" ", "Enter"],
  $o = "Select",
  [Qa, ya, PI] = m1($o),
  [kn, WH] = ha($o, [PI, ch]),
  Ua = ch(),
  [_I, dr] = kn($o),
  [VI, GI] = kn($o),
  Sh = (e) => {
    const {
        __scopeSelect: r,
        children: n,
        open: o,
        defaultOpen: s,
        onOpenChange: l,
        value: c,
        defaultValue: f,
        onValueChange: B,
        dir: g,
        name: w,
        autoComplete: h,
        disabled: v,
        required: U,
      } = e,
      Q = Ua(r),
      [m, F] = C.useState(null),
      [E, I] = C.useState(null),
      [R, T] = C.useState(!1),
      k = Q1(g),
      [O = !1, M] = Ec({
        prop: o,
        defaultProp: s,
        onChange: l,
      }),
      [X, z] = Ec({
        prop: c,
        defaultProp: f,
        onChange: B,
      }),
      nA = C.useRef(null),
      dA = m ? !!m.closest("form") : !0,
      [V, q] = C.useState(/* @__PURE__ */ new Set()),
      rA = Array.from(V)
        .map((uA) => uA.props.value)
        .join(";");
    return /* @__PURE__ */ b.jsx(jx, {
      ...Q,
      children: /* @__PURE__ */ b.jsxs(_I, {
        required: U,
        scope: r,
        trigger: m,
        onTriggerChange: F,
        valueNode: E,
        onValueNodeChange: I,
        valueNodeHasChildren: R,
        onValueNodeHasChildrenChange: T,
        contentId: xn(),
        value: X,
        onValueChange: z,
        open: O,
        onOpenChange: M,
        dir: k,
        triggerPointerDownPosRef: nA,
        disabled: v,
        children: [
          /* @__PURE__ */ b.jsx(Qa.Provider, {
            scope: r,
            children: /* @__PURE__ */ b.jsx(VI, {
              scope: e.__scopeSelect,
              onNativeOptionAdd: C.useCallback((uA) => {
                q((aA) => new Set(aA).add(uA));
              }, []),
              onNativeOptionRemove: C.useCallback((uA) => {
                q((aA) => {
                  const Z = new Set(aA);
                  return Z.delete(uA), Z;
                });
              }, []),
              children: n,
            }),
          }),
          dA
            ? /* @__PURE__ */ b.jsxs(
                e0,
                {
                  "aria-hidden": !0,
                  required: U,
                  tabIndex: -1,
                  name: w,
                  autoComplete: h,
                  value: X,
                  onChange: (uA) => z(uA.target.value),
                  disabled: v,
                  children: [
                    X === void 0
                      ? /* @__PURE__ */ b.jsx("option", { value: "" })
                      : null,
                    Array.from(V),
                  ],
                },
                rA,
              )
            : null,
        ],
      }),
    });
  };
Sh.displayName = $o;
var bh = "SelectTrigger",
  Lh = C.forwardRef((e, r) => {
    const { __scopeSelect: n, disabled: o = !1, ...s } = e,
      l = Ua(n),
      c = dr(bh, n),
      f = c.disabled || o,
      B = zA(r, c.onTriggerChange),
      g = ya(n),
      [w, h, v] = t0((Q) => {
        const m = g().filter((I) => !I.disabled),
          F = m.find((I) => I.value === c.value),
          E = r0(m, Q, F);
        E !== void 0 && c.onValueChange(E.value);
      }),
      U = () => {
        f || (c.onOpenChange(!0), v());
      };
    return /* @__PURE__ */ b.jsx(Xx, {
      asChild: !0,
      ...l,
      children: /* @__PURE__ */ b.jsx(TA.button, {
        type: "button",
        role: "combobox",
        "aria-controls": c.contentId,
        "aria-expanded": c.open,
        "aria-required": c.required,
        "aria-autocomplete": "none",
        dir: c.dir,
        "data-state": c.open ? "open" : "closed",
        disabled: f,
        "data-disabled": f ? "" : void 0,
        "data-placeholder": A0(c.value) ? "" : void 0,
        ...s,
        ref: B,
        onClick: _A(s.onClick, (Q) => {
          Q.currentTarget.focus();
        }),
        onPointerDown: _A(s.onPointerDown, (Q) => {
          const m = Q.target;
          m.hasPointerCapture(Q.pointerId) &&
            m.releasePointerCapture(Q.pointerId),
            Q.button === 0 &&
              Q.ctrlKey === !1 &&
              (U(),
              (c.triggerPointerDownPosRef.current = {
                x: Math.round(Q.pageX),
                y: Math.round(Q.pageY),
              }),
              Q.preventDefault());
        }),
        onKeyDown: _A(s.onKeyDown, (Q) => {
          const m = w.current !== "";
          !(Q.ctrlKey || Q.altKey || Q.metaKey) &&
            Q.key.length === 1 &&
            h(Q.key),
            !(m && Q.key === " ") &&
              NI.includes(Q.key) &&
              (U(), Q.preventDefault());
        }),
      }),
    });
  });
Lh.displayName = bh;
var Th = "SelectValue",
  Dh = C.forwardRef((e, r) => {
    const {
        __scopeSelect: n,
        className: o,
        style: s,
        children: l,
        placeholder: c = "",
        ...f
      } = e,
      B = dr(Th, n),
      { onValueNodeHasChildrenChange: g } = B,
      w = l !== void 0,
      h = zA(r, B.onValueNodeChange);
    return (
      ve(() => {
        g(w);
      }, [g, w]),
      /* @__PURE__ */ b.jsx(TA.span, {
        ...f,
        ref: h,
        style: { pointerEvents: "none" },
        children: A0(B.value)
          ? /* @__PURE__ */ b.jsx(b.Fragment, { children: c })
          : l,
      })
    );
  });
Dh.displayName = Th;
var WI = "SelectIcon",
  Kh = C.forwardRef((e, r) => {
    const { __scopeSelect: n, children: o, ...s } = e;
    return /* @__PURE__ */ b.jsx(TA.span, {
      "aria-hidden": !0,
      ...s,
      ref: r,
      children: o || "▼",
    });
  });
Kh.displayName = WI;
var jI = "SelectPortal",
  kh = (e) => /* @__PURE__ */ b.jsx(qc, { asChild: !0, ...e });
kh.displayName = jI;
var kr = "SelectContent",
  Rh = C.forwardRef((e, r) => {
    const n = dr(kr, e.__scopeSelect),
      [o, s] = C.useState();
    if (
      (ve(() => {
        s(new DocumentFragment());
      }, []),
      !n.open)
    ) {
      const l = o;
      return l
        ? Or.createPortal(
            /* @__PURE__ */ b.jsx(Oh, {
              scope: e.__scopeSelect,
              children: /* @__PURE__ */ b.jsx(Qa.Slot, {
                scope: e.__scopeSelect,
                children: /* @__PURE__ */ b.jsx("div", {
                  children: e.children,
                }),
              }),
            }),
            l,
          )
        : null;
    }
    return /* @__PURE__ */ b.jsx(Nh, { ...e, ref: r });
  });
Rh.displayName = kr;
var Ft = 10,
  [Oh, Br] = kn(kr),
  XI = "SelectContentImpl",
  Nh = C.forwardRef((e, r) => {
    const {
        __scopeSelect: n,
        position: o = "item-aligned",
        onCloseAutoFocus: s,
        onEscapeKeyDown: l,
        onPointerDownOutside: c,
        //
        // PopperContent props
        side: f,
        sideOffset: B,
        align: g,
        alignOffset: w,
        arrowPadding: h,
        collisionBoundary: v,
        collisionPadding: U,
        sticky: Q,
        hideWhenDetached: m,
        avoidCollisions: F,
        //
        ...E
      } = e,
      I = dr(kr, n),
      [R, T] = C.useState(null),
      [k, O] = C.useState(null),
      M = zA(r, ($) => T($)),
      [X, z] = C.useState(null),
      [nA, dA] = C.useState(null),
      V = ya(n),
      [q, rA] = C.useState(!1),
      uA = C.useRef(!1);
    C.useEffect(() => {
      if (R) return Qh(R);
    }, [R]),
      $w();
    const aA = C.useCallback(
        ($) => {
          const [BA, ...CA] = V().map((NA) => NA.ref.current),
            [QA] = CA.slice(-1),
            IA = document.activeElement;
          for (const NA of $)
            if (
              NA === IA ||
              (NA?.scrollIntoView({ block: "nearest" }),
              NA === BA && k && (k.scrollTop = 0),
              NA === QA && k && (k.scrollTop = k.scrollHeight),
              NA?.focus(),
              document.activeElement !== IA)
            )
              return;
        },
        [V, k],
      ),
      Z = C.useCallback(() => aA([X, R]), [aA, X, R]);
    C.useEffect(() => {
      q && Z();
    }, [q, Z]);
    const { onOpenChange: P, triggerPointerDownPosRef: j } = I;
    C.useEffect(() => {
      if (R) {
        let $ = { x: 0, y: 0 };
        const BA = (QA) => {
            $ = {
              x: Math.abs(Math.round(QA.pageX) - (j.current?.x ?? 0)),
              y: Math.abs(Math.round(QA.pageY) - (j.current?.y ?? 0)),
            };
          },
          CA = (QA) => {
            $.x <= 10 && $.y <= 10
              ? QA.preventDefault()
              : R.contains(QA.target) || P(!1),
              document.removeEventListener("pointermove", BA),
              (j.current = null);
          };
        return (
          j.current !== null &&
            (document.addEventListener("pointermove", BA),
            document.addEventListener("pointerup", CA, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", BA),
              document.removeEventListener("pointerup", CA, { capture: !0 });
          }
        );
      }
    }, [R, P, j]),
      C.useEffect(() => {
        const $ = () => P(!1);
        return (
          window.addEventListener("blur", $),
          window.addEventListener("resize", $),
          () => {
            window.removeEventListener("blur", $),
              window.removeEventListener("resize", $);
          }
        );
      }, [P]);
    const [Y, H] = t0(($) => {
        const BA = V().filter((IA) => !IA.disabled),
          CA = BA.find((IA) => IA.ref.current === document.activeElement),
          QA = r0(BA, $, CA);
        QA && setTimeout(() => QA.ref.current.focus());
      }),
      N = C.useCallback(
        ($, BA, CA) => {
          const QA = !uA.current && !CA;
          ((I.value !== void 0 && I.value === BA) || QA) &&
            (z($), QA && (uA.current = !0));
        },
        [I.value],
      ),
      cA = C.useCallback(() => R?.focus(), [R]),
      fA = C.useCallback(
        ($, BA, CA) => {
          const QA = !uA.current && !CA;
          ((I.value !== void 0 && I.value === BA) || QA) && dA($);
        },
        [I.value],
      ),
      wA = o === "popper" ? Ic : Mh,
      hA =
        wA === Ic
          ? {
              side: f,
              sideOffset: B,
              align: g,
              alignOffset: w,
              arrowPadding: h,
              collisionBoundary: v,
              collisionPadding: U,
              sticky: Q,
              hideWhenDetached: m,
              avoidCollisions: F,
            }
          : {};
    return /* @__PURE__ */ b.jsx(Oh, {
      scope: n,
      content: R,
      viewport: k,
      onViewportChange: O,
      itemRefCallback: N,
      selectedItem: X,
      onItemLeave: cA,
      itemTextRefCallback: fA,
      focusSelectedItem: Z,
      selectedItemText: nA,
      position: o,
      isPositioned: q,
      searchRef: Y,
      children: /* @__PURE__ */ b.jsx(Af, {
        as: Dr,
        allowPinchZoom: !0,
        children: /* @__PURE__ */ b.jsx(Gc, {
          asChild: !0,
          trapped: I.open,
          onMountAutoFocus: ($) => {
            $.preventDefault();
          },
          onUnmountAutoFocus: _A(s, ($) => {
            I.trigger?.focus({ preventScroll: !0 }), $.preventDefault();
          }),
          children: /* @__PURE__ */ b.jsx(Vc, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: l,
            onPointerDownOutside: c,
            onFocusOutside: ($) => $.preventDefault(),
            onDismiss: () => I.onOpenChange(!1),
            children: /* @__PURE__ */ b.jsx(wA, {
              role: "listbox",
              id: I.contentId,
              "data-state": I.open ? "open" : "closed",
              dir: I.dir,
              onContextMenu: ($) => $.preventDefault(),
              ...E,
              ...hA,
              onPlaced: () => rA(!0),
              ref: M,
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none",
                ...E.style,
              },
              onKeyDown: _A(E.onKeyDown, ($) => {
                const BA = $.ctrlKey || $.altKey || $.metaKey;
                if (
                  ($.key === "Tab" && $.preventDefault(),
                  !BA && $.key.length === 1 && H($.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes($.key))
                ) {
                  let QA = V()
                    .filter((IA) => !IA.disabled)
                    .map((IA) => IA.ref.current);
                  if (
                    (["ArrowUp", "End"].includes($.key) &&
                      (QA = QA.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes($.key))
                  ) {
                    const IA = $.target,
                      NA = QA.indexOf(IA);
                    QA = QA.slice(NA + 1);
                  }
                  setTimeout(() => aA(QA)), $.preventDefault();
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
Nh.displayName = XI;
var zI = "SelectItemAlignedPosition",
  Mh = C.forwardRef((e, r) => {
    const { __scopeSelect: n, onPlaced: o, ...s } = e,
      l = dr(kr, n),
      c = Br(kr, n),
      [f, B] = C.useState(null),
      [g, w] = C.useState(null),
      h = zA(r, (M) => w(M)),
      v = ya(n),
      U = C.useRef(!1),
      Q = C.useRef(!0),
      {
        viewport: m,
        selectedItem: F,
        selectedItemText: E,
        focusSelectedItem: I,
      } = c,
      R = C.useCallback(() => {
        if (l.trigger && l.valueNode && f && g && m && F && E) {
          const M = l.trigger.getBoundingClientRect(),
            X = g.getBoundingClientRect(),
            z = l.valueNode.getBoundingClientRect(),
            nA = E.getBoundingClientRect();
          if (l.dir !== "rtl") {
            const IA = nA.left - X.left,
              NA = z.left - IA,
              oe = M.left - NA,
              Ge = M.width + oe,
              Nr = Math.max(Ge, X.width),
              Mr = window.innerWidth - Ft,
              gr = up(NA, [Ft, Mr - Nr]);
            (f.style.minWidth = Ge + "px"), (f.style.left = gr + "px");
          } else {
            const IA = X.right - nA.right,
              NA = window.innerWidth - z.right - IA,
              oe = window.innerWidth - M.right - NA,
              Ge = M.width + oe,
              Nr = Math.max(Ge, X.width),
              Mr = window.innerWidth - Ft,
              gr = up(NA, [Ft, Mr - Nr]);
            (f.style.minWidth = Ge + "px"), (f.style.right = gr + "px");
          }
          const dA = v(),
            V = window.innerHeight - Ft * 2,
            q = m.scrollHeight,
            rA = window.getComputedStyle(g),
            uA = parseInt(rA.borderTopWidth, 10),
            aA = parseInt(rA.paddingTop, 10),
            Z = parseInt(rA.borderBottomWidth, 10),
            P = parseInt(rA.paddingBottom, 10),
            j = uA + aA + q + P + Z,
            Y = Math.min(F.offsetHeight * 5, j),
            H = window.getComputedStyle(m),
            N = parseInt(H.paddingTop, 10),
            cA = parseInt(H.paddingBottom, 10),
            fA = M.top + M.height / 2 - Ft,
            wA = V - fA,
            hA = F.offsetHeight / 2,
            $ = F.offsetTop + hA,
            BA = uA + aA + $,
            CA = j - BA;
          if (BA <= fA) {
            const IA = F === dA[dA.length - 1].ref.current;
            f.style.bottom = "0px";
            const NA = g.clientHeight - m.offsetTop - m.offsetHeight,
              oe = Math.max(
                wA,
                hA + // viewport might have padding bottom, include it to avoid a scrollable viewport
                  (IA ? cA : 0) +
                  NA +
                  Z,
              ),
              Ge = BA + oe;
            f.style.height = Ge + "px";
          } else {
            const IA = F === dA[0].ref.current;
            f.style.top = "0px";
            const oe =
              Math.max(
                fA,
                uA +
                  m.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
                  (IA ? N : 0) +
                  hA,
              ) + CA;
            (f.style.height = oe + "px"), (m.scrollTop = BA - fA + m.offsetTop);
          }
          (f.style.margin = `${Ft}px 0`),
            (f.style.minHeight = Y + "px"),
            (f.style.maxHeight = V + "px"),
            o?.(),
            requestAnimationFrame(() => (U.current = !0));
        }
      }, [v, l.trigger, l.valueNode, f, g, m, F, E, l.dir, o]);
    ve(() => R(), [R]);
    const [T, k] = C.useState();
    ve(() => {
      g && k(window.getComputedStyle(g).zIndex);
    }, [g]);
    const O = C.useCallback(
      (M) => {
        M && Q.current === !0 && (R(), I?.(), (Q.current = !1));
      },
      [R, I],
    );
    return /* @__PURE__ */ b.jsx(YI, {
      scope: n,
      contentWrapper: f,
      shouldExpandOnScrollRef: U,
      onScrollButtonChange: O,
      children: /* @__PURE__ */ b.jsx("div", {
        ref: B,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: T,
        },
        children: /* @__PURE__ */ b.jsx(TA.div, {
          ...s,
          ref: h,
          style: {
            // When we get the height of the content, it includes borders. If we were to set
            // the height without having `boxSizing: 'border-box'` it would be too big.
            boxSizing: "border-box",
            // We need to ensure the content doesn't get taller than the wrapper
            maxHeight: "100%",
            ...s.style,
          },
        }),
      }),
    });
  });
Mh.displayName = zI;
var JI = "SelectPopperPosition",
  Ic = C.forwardRef((e, r) => {
    const {
        __scopeSelect: n,
        align: o = "start",
        collisionPadding: s = Ft,
        ...l
      } = e,
      c = Ua(n);
    return /* @__PURE__ */ b.jsx(zx, {
      ...c,
      ...l,
      ref: r,
      align: o,
      collisionPadding: s,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...l.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
Ic.displayName = JI;
var [YI, ef] = kn(kr, {}),
  Hc = "SelectViewport",
  Ph = C.forwardRef((e, r) => {
    const { __scopeSelect: n, nonce: o, ...s } = e,
      l = Br(Hc, n),
      c = ef(Hc, n),
      f = zA(r, l.onViewportChange),
      B = C.useRef(0);
    return /* @__PURE__ */ b.jsxs(b.Fragment, {
      children: [
        /* @__PURE__ */ b.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: o,
        }),
        /* @__PURE__ */ b.jsx(Qa.Slot, {
          scope: n,
          children: /* @__PURE__ */ b.jsx(TA.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...s,
            ref: f,
            style: {
              // we use position: 'relative' here on the `viewport` so that when we call
              // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
              // (independent of the scrollUpButton).
              position: "relative",
              flex: 1,
              overflow: "auto",
              ...s.style,
            },
            onScroll: _A(s.onScroll, (g) => {
              const w = g.currentTarget,
                { contentWrapper: h, shouldExpandOnScrollRef: v } = c;
              if (v?.current && h) {
                const U = Math.abs(B.current - w.scrollTop);
                if (U > 0) {
                  const Q = window.innerHeight - Ft * 2,
                    m = parseFloat(h.style.minHeight),
                    F = parseFloat(h.style.height),
                    E = Math.max(m, F);
                  if (E < Q) {
                    const I = E + U,
                      R = Math.min(Q, I),
                      T = I - R;
                    (h.style.height = R + "px"),
                      h.style.bottom === "0px" &&
                        ((w.scrollTop = T > 0 ? T : 0),
                        (h.style.justifyContent = "flex-end"));
                  }
                }
              }
              B.current = w.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
Ph.displayName = Hc;
var _h = "SelectGroup",
  [ZI, $I] = kn(_h),
  qI = C.forwardRef((e, r) => {
    const { __scopeSelect: n, ...o } = e,
      s = xn();
    return /* @__PURE__ */ b.jsx(ZI, {
      scope: n,
      id: s,
      children: /* @__PURE__ */ b.jsx(TA.div, {
        role: "group",
        "aria-labelledby": s,
        ...o,
        ref: r,
      }),
    });
  });
qI.displayName = _h;
var Vh = "SelectLabel",
  Gh = C.forwardRef((e, r) => {
    const { __scopeSelect: n, ...o } = e,
      s = $I(Vh, n);
    return /* @__PURE__ */ b.jsx(TA.div, { id: s.id, ...o, ref: r });
  });
Gh.displayName = Vh;
var ia = "SelectItem",
  [AH, Wh] = kn(ia),
  jh = C.forwardRef((e, r) => {
    const {
        __scopeSelect: n,
        value: o,
        disabled: s = !1,
        textValue: l,
        ...c
      } = e,
      f = dr(ia, n),
      B = Br(ia, n),
      g = f.value === o,
      [w, h] = C.useState(l ?? ""),
      [v, U] = C.useState(!1),
      Q = zA(r, (E) => B.itemRefCallback?.(E, o, s)),
      m = xn(),
      F = () => {
        s || (f.onValueChange(o), f.onOpenChange(!1));
      };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.",
      );
    return /* @__PURE__ */ b.jsx(AH, {
      scope: n,
      value: o,
      disabled: s,
      textId: m,
      isSelected: g,
      onItemTextChange: C.useCallback((E) => {
        h((I) => I || (E?.textContent ?? "").trim());
      }, []),
      children: /* @__PURE__ */ b.jsx(Qa.ItemSlot, {
        scope: n,
        value: o,
        disabled: s,
        textValue: w,
        children: /* @__PURE__ */ b.jsx(TA.div, {
          role: "option",
          "aria-labelledby": m,
          "data-highlighted": v ? "" : void 0,
          "aria-selected": g && v,
          "data-state": g ? "checked" : "unchecked",
          "aria-disabled": s || void 0,
          "data-disabled": s ? "" : void 0,
          tabIndex: s ? void 0 : -1,
          ...c,
          ref: Q,
          onFocus: _A(c.onFocus, () => U(!0)),
          onBlur: _A(c.onBlur, () => U(!1)),
          onPointerUp: _A(c.onPointerUp, F),
          onPointerMove: _A(c.onPointerMove, (E) => {
            s
              ? B.onItemLeave?.()
              : E.currentTarget.focus({ preventScroll: !0 });
          }),
          onPointerLeave: _A(c.onPointerLeave, (E) => {
            E.currentTarget === document.activeElement && B.onItemLeave?.();
          }),
          onKeyDown: _A(c.onKeyDown, (E) => {
            (B.searchRef?.current !== "" && E.key === " ") ||
              (MI.includes(E.key) && F(), E.key === " " && E.preventDefault());
          }),
        }),
      }),
    });
  });
jh.displayName = ia;
var Ro = "SelectItemText",
  Xh = C.forwardRef((e, r) => {
    const { __scopeSelect: n, className: o, style: s, ...l } = e,
      c = dr(Ro, n),
      f = Br(Ro, n),
      B = Wh(Ro, n),
      g = GI(Ro, n),
      [w, h] = C.useState(null),
      v = zA(
        r,
        (E) => h(E),
        B.onItemTextChange,
        (E) => f.itemTextRefCallback?.(E, B.value, B.disabled),
      ),
      U = w?.textContent,
      Q = C.useMemo(
        () =>
          /* @__PURE__ */ b.jsx(
            "option",
            { value: B.value, disabled: B.disabled, children: U },
            B.value,
          ),
        [B.disabled, B.value, U],
      ),
      { onNativeOptionAdd: m, onNativeOptionRemove: F } = g;
    return (
      ve(() => (m(Q), () => F(Q)), [m, F, Q]),
      /* @__PURE__ */ b.jsxs(b.Fragment, {
        children: [
          /* @__PURE__ */ b.jsx(TA.span, { id: B.textId, ...l, ref: v }),
          B.isSelected && c.valueNode && !c.valueNodeHasChildren
            ? Or.createPortal(l.children, c.valueNode)
            : null,
        ],
      })
    );
  });
Xh.displayName = Ro;
var zh = "SelectItemIndicator",
  Jh = C.forwardRef((e, r) => {
    const { __scopeSelect: n, ...o } = e;
    return Wh(zh, n).isSelected
      ? /* @__PURE__ */ b.jsx(TA.span, { "aria-hidden": !0, ...o, ref: r })
      : null;
  });
Jh.displayName = zh;
var Sc = "SelectScrollUpButton",
  Yh = C.forwardRef((e, r) => {
    const n = Br(Sc, e.__scopeSelect),
      o = ef(Sc, e.__scopeSelect),
      [s, l] = C.useState(!1),
      c = zA(r, o.onScrollButtonChange);
    return (
      ve(() => {
        if (n.viewport && n.isPositioned) {
          let f = function () {
            const g = B.scrollTop > 0;
            l(g);
          };
          const B = n.viewport;
          return (
            f(),
            B.addEventListener("scroll", f),
            () => B.removeEventListener("scroll", f)
          );
        }
      }, [n.viewport, n.isPositioned]),
      s
        ? /* @__PURE__ */ b.jsx($h, {
            ...e,
            ref: c,
            onAutoScroll: () => {
              const { viewport: f, selectedItem: B } = n;
              f && B && (f.scrollTop = f.scrollTop - B.offsetHeight);
            },
          })
        : null
    );
  });
Yh.displayName = Sc;
var bc = "SelectScrollDownButton",
  Zh = C.forwardRef((e, r) => {
    const n = Br(bc, e.__scopeSelect),
      o = ef(bc, e.__scopeSelect),
      [s, l] = C.useState(!1),
      c = zA(r, o.onScrollButtonChange);
    return (
      ve(() => {
        if (n.viewport && n.isPositioned) {
          let f = function () {
            const g = B.scrollHeight - B.clientHeight,
              w = Math.ceil(B.scrollTop) < g;
            l(w);
          };
          const B = n.viewport;
          return (
            f(),
            B.addEventListener("scroll", f),
            () => B.removeEventListener("scroll", f)
          );
        }
      }, [n.viewport, n.isPositioned]),
      s
        ? /* @__PURE__ */ b.jsx($h, {
            ...e,
            ref: c,
            onAutoScroll: () => {
              const { viewport: f, selectedItem: B } = n;
              f && B && (f.scrollTop = f.scrollTop + B.offsetHeight);
            },
          })
        : null
    );
  });
Zh.displayName = bc;
var $h = C.forwardRef((e, r) => {
    const { __scopeSelect: n, onAutoScroll: o, ...s } = e,
      l = Br("SelectScrollButton", n),
      c = C.useRef(null),
      f = ya(n),
      B = C.useCallback(() => {
        c.current !== null &&
          (window.clearInterval(c.current), (c.current = null));
      }, []);
    return (
      C.useEffect(() => () => B(), [B]),
      ve(() => {
        f()
          .find((w) => w.ref.current === document.activeElement)
          ?.ref.current?.scrollIntoView({ block: "nearest" });
      }, [f]),
      /* @__PURE__ */ b.jsx(TA.div, {
        "aria-hidden": !0,
        ...s,
        ref: r,
        style: { flexShrink: 0, ...s.style },
        onPointerDown: _A(s.onPointerDown, () => {
          c.current === null && (c.current = window.setInterval(o, 50));
        }),
        onPointerMove: _A(s.onPointerMove, () => {
          l.onItemLeave?.(),
            c.current === null && (c.current = window.setInterval(o, 50));
        }),
        onPointerLeave: _A(s.onPointerLeave, () => {
          B();
        }),
      })
    );
  }),
  eH = "SelectSeparator",
  qh = C.forwardRef((e, r) => {
    const { __scopeSelect: n, ...o } = e;
    return /* @__PURE__ */ b.jsx(TA.div, { "aria-hidden": !0, ...o, ref: r });
  });
qh.displayName = eH;
var Lc = "SelectArrow",
  tH = C.forwardRef((e, r) => {
    const { __scopeSelect: n, ...o } = e,
      s = Ua(n),
      l = dr(Lc, n),
      c = Br(Lc, n);
    return l.open && c.position === "popper"
      ? /* @__PURE__ */ b.jsx(Jx, { ...s, ...o, ref: r })
      : null;
  });
tH.displayName = Lc;
function A0(e) {
  return e === "" || e === void 0;
}
var e0 = C.forwardRef((e, r) => {
  const { value: n, ...o } = e,
    s = C.useRef(null),
    l = zA(r, s),
    c = $x(n);
  return (
    C.useEffect(() => {
      const f = s.current,
        B = window.HTMLSelectElement.prototype,
        w = Object.getOwnPropertyDescriptor(B, "value").set;
      if (c !== n && w) {
        const h = new Event("change", { bubbles: !0 });
        w.call(f, n), f.dispatchEvent(h);
      }
    }, [c, n]),
    /* @__PURE__ */ b.jsx(mh, {
      asChild: !0,
      children: /* @__PURE__ */ b.jsx("select", {
        ...o,
        ref: l,
        defaultValue: n,
      }),
    })
  );
});
e0.displayName = "BubbleSelect";
function t0(e) {
  const r = It(e),
    n = C.useRef(""),
    o = C.useRef(0),
    s = C.useCallback(
      (c) => {
        const f = n.current + c;
        r(f),
          (function B(g) {
            (n.current = g),
              window.clearTimeout(o.current),
              g !== "" && (o.current = window.setTimeout(() => B(""), 1e3));
          })(f);
      },
      [r],
    ),
    l = C.useCallback(() => {
      (n.current = ""), window.clearTimeout(o.current);
    }, []);
  return C.useEffect(() => () => window.clearTimeout(o.current), []), [n, s, l];
}
function r0(e, r, n) {
  const s = r.length > 1 && Array.from(r).every((g) => g === r[0]) ? r[0] : r,
    l = n ? e.indexOf(n) : -1;
  let c = rH(e, Math.max(l, 0));
  s.length === 1 && (c = c.filter((g) => g !== n));
  const B = c.find((g) =>
    g.textValue.toLowerCase().startsWith(s.toLowerCase()),
  );
  return B !== n ? B : void 0;
}
function rH(e, r) {
  return e.map((n, o) => e[(r + o) % e.length]);
}
var nH = Sh,
  n0 = Lh,
  oH = Dh,
  iH = Kh,
  sH = kh,
  o0 = Rh,
  aH = Ph,
  i0 = Gh,
  s0 = jh,
  lH = Xh,
  uH = Jh,
  a0 = Yh,
  l0 = Zh,
  u0 = qh;
const cH = nH,
  fH = oH,
  c0 = C.forwardRef(({ className: e, children: r, ...n }, o) =>
    /* @__PURE__ */ b.jsxs(n0, {
      ref: o,
      className: Ae(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        e,
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ b.jsx(iH, {
          asChild: !0,
          children: /* @__PURE__ */ b.jsx(l1, {
            className: "h-4 w-4 opacity-50",
          }),
        }),
      ],
    }),
  );
c0.displayName = n0.displayName;
const f0 = C.forwardRef(({ className: e, ...r }, n) =>
  /* @__PURE__ */ b.jsx(a0, {
    ref: n,
    className: Ae("flex cursor-default items-center justify-center py-1", e),
    ...r,
    children: /* @__PURE__ */ b.jsx(g1, {}),
  }),
);
f0.displayName = a0.displayName;
const d0 = C.forwardRef(({ className: e, ...r }, n) =>
  /* @__PURE__ */ b.jsx(l0, {
    ref: n,
    className: Ae("flex cursor-default items-center justify-center py-1", e),
    ...r,
    children: /* @__PURE__ */ b.jsx(d1, {}),
  }),
);
d0.displayName = l0.displayName;
const B0 = C.forwardRef(
  ({ className: e, children: r, position: n = "popper", ...o }, s) =>
    /* @__PURE__ */ b.jsx(sH, {
      children: /* @__PURE__ */ b.jsxs(o0, {
        ref: s,
        className: Ae(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          n === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          e,
        ),
        position: n,
        ...o,
        children: [
          /* @__PURE__ */ b.jsx(f0, {}),
          /* @__PURE__ */ b.jsx(aH, {
            className: Ae(
              "p-1",
              n === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
            ),
            children: r,
          }),
          /* @__PURE__ */ b.jsx(d0, {}),
        ],
      }),
    }),
);
B0.displayName = o0.displayName;
const dH = C.forwardRef(({ className: e, ...r }, n) =>
  /* @__PURE__ */ b.jsx(i0, {
    ref: n,
    className: Ae("px-2 py-1.5 text-sm font-semibold", e),
    ...r,
  }),
);
dH.displayName = i0.displayName;
const g0 = C.forwardRef(({ className: e, children: r, ...n }, o) =>
  /* @__PURE__ */ b.jsxs(s0, {
    ref: o,
    className: Ae(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e,
    ),
    ...n,
    children: [
      /* @__PURE__ */ b.jsx("span", {
        className:
          "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
        children: /* @__PURE__ */ b.jsx(uH, {
          children: /* @__PURE__ */ b.jsx(c1, { className: "h-4 w-4" }),
        }),
      }),
      /* @__PURE__ */ b.jsx(lH, { children: r }),
    ],
  }),
);
g0.displayName = s0.displayName;
const BH = C.forwardRef(({ className: e, ...r }, n) =>
  /* @__PURE__ */ b.jsx(u0, {
    ref: n,
    className: Ae("-mx-1 my-1 h-px bg-muted", e),
    ...r,
  }),
);
BH.displayName = u0.displayName;
function gH(e, r) {
  return C.useReducer((n, o) => r[n][o] ?? n, e);
}
var Fa = (e) => {
  const { present: r, children: n } = e,
    o = pH(r),
    s =
      typeof n == "function" ? n({ present: o.isPresent }) : C.Children.only(n),
    l = zA(o.ref, wH(s));
  return typeof n == "function" || o.isPresent
    ? C.cloneElement(s, { ref: l })
    : null;
};
Fa.displayName = "Presence";
function pH(e) {
  const [r, n] = C.useState(),
    o = C.useRef({}),
    s = C.useRef(e),
    l = C.useRef("none"),
    c = e ? "mounted" : "unmounted",
    [f, B] = gH(c, {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended",
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted",
      },
      unmounted: {
        MOUNT: "mounted",
      },
    });
  return (
    C.useEffect(() => {
      const g = Ks(o.current);
      l.current = f === "mounted" ? g : "none";
    }, [f]),
    ve(() => {
      const g = o.current,
        w = s.current;
      if (w !== e) {
        const v = l.current,
          U = Ks(g);
        e
          ? B("MOUNT")
          : U === "none" || g?.display === "none"
            ? B("UNMOUNT")
            : B(w && v !== U ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = e);
      }
    }, [e, B]),
    ve(() => {
      if (r) {
        const g = (h) => {
            const U = Ks(o.current).includes(h.animationName);
            h.target === r && U && Or.flushSync(() => B("ANIMATION_END"));
          },
          w = (h) => {
            h.target === r && (l.current = Ks(o.current));
          };
        return (
          r.addEventListener("animationstart", w),
          r.addEventListener("animationcancel", g),
          r.addEventListener("animationend", g),
          () => {
            r.removeEventListener("animationstart", w),
              r.removeEventListener("animationcancel", g),
              r.removeEventListener("animationend", g);
          }
        );
      } else B("ANIMATION_END");
    }, [r, B]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(f),
      ref: C.useCallback((g) => {
        g && (o.current = getComputedStyle(g)), n(g);
      }, []),
    }
  );
}
function Ks(e) {
  return e?.animationName || "none";
}
function wH(e) {
  let r = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    n = r && "isReactWarning" in r && r.isReactWarning;
  return n
    ? e.ref
    : ((r = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (n = r && "isReactWarning" in r && r.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var tf = "Dialog",
  [p0, jH] = ha(tf),
  [hH, tt] = p0(tf),
  w0 = (e) => {
    const {
        __scopeDialog: r,
        children: n,
        open: o,
        defaultOpen: s,
        onOpenChange: l,
        modal: c = !0,
      } = e,
      f = C.useRef(null),
      B = C.useRef(null),
      [g = !1, w] = Ec({
        prop: o,
        defaultProp: s,
        onChange: l,
      });
    return /* @__PURE__ */ b.jsx(hH, {
      scope: r,
      triggerRef: f,
      contentRef: B,
      contentId: xn(),
      titleId: xn(),
      descriptionId: xn(),
      open: g,
      onOpenChange: w,
      onOpenToggle: C.useCallback(() => w((h) => !h), [w]),
      modal: c,
      children: n,
    });
  };
w0.displayName = tf;
var h0 = "DialogTrigger",
  v0 = C.forwardRef((e, r) => {
    const { __scopeDialog: n, ...o } = e,
      s = tt(h0, n),
      l = zA(r, s.triggerRef);
    return /* @__PURE__ */ b.jsx(TA.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": s.open,
      "aria-controls": s.contentId,
      "data-state": sf(s.open),
      ...o,
      ref: l,
      onClick: _A(e.onClick, s.onOpenToggle),
    });
  });
v0.displayName = h0;
var rf = "DialogPortal",
  [vH, m0] = p0(rf, {
    forceMount: void 0,
  }),
  C0 = (e) => {
    const { __scopeDialog: r, forceMount: n, children: o, container: s } = e,
      l = tt(rf, r);
    return /* @__PURE__ */ b.jsx(vH, {
      scope: r,
      forceMount: n,
      children: C.Children.map(o, (c) =>
        /* @__PURE__ */ b.jsx(Fa, {
          present: n || l.open,
          children: /* @__PURE__ */ b.jsx(qc, {
            asChild: !0,
            container: s,
            children: c,
          }),
        }),
      ),
    });
  };
C0.displayName = rf;
var sa = "DialogOverlay",
  Q0 = C.forwardRef((e, r) => {
    const n = m0(sa, e.__scopeDialog),
      { forceMount: o = n.forceMount, ...s } = e,
      l = tt(sa, e.__scopeDialog);
    return l.modal
      ? /* @__PURE__ */ b.jsx(Fa, {
          present: o || l.open,
          children: /* @__PURE__ */ b.jsx(mH, { ...s, ref: r }),
        })
      : null;
  });
Q0.displayName = sa;
var mH = C.forwardRef((e, r) => {
    const { __scopeDialog: n, ...o } = e,
      s = tt(sa, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ b.jsx(Af, {
        as: Dr,
        allowPinchZoom: !0,
        shards: [s.contentRef],
        children: /* @__PURE__ */ b.jsx(TA.div, {
          "data-state": sf(s.open),
          ...o,
          ref: r,
          style: { pointerEvents: "auto", ...o.style },
        }),
      })
    );
  }),
  Rr = "DialogContent",
  y0 = C.forwardRef((e, r) => {
    const n = m0(Rr, e.__scopeDialog),
      { forceMount: o = n.forceMount, ...s } = e,
      l = tt(Rr, e.__scopeDialog);
    return /* @__PURE__ */ b.jsx(Fa, {
      present: o || l.open,
      children: l.modal
        ? /* @__PURE__ */ b.jsx(CH, { ...s, ref: r })
        : /* @__PURE__ */ b.jsx(QH, { ...s, ref: r }),
    });
  });
y0.displayName = Rr;
var CH = C.forwardRef((e, r) => {
    const n = tt(Rr, e.__scopeDialog),
      o = C.useRef(null),
      s = zA(r, n.contentRef, o);
    return (
      C.useEffect(() => {
        const l = o.current;
        if (l) return Qh(l);
      }, []),
      /* @__PURE__ */ b.jsx(U0, {
        ...e,
        ref: s,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: _A(e.onCloseAutoFocus, (l) => {
          l.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: _A(e.onPointerDownOutside, (l) => {
          const c = l.detail.originalEvent,
            f = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || f) && l.preventDefault();
        }),
        onFocusOutside: _A(e.onFocusOutside, (l) => l.preventDefault()),
      })
    );
  }),
  QH = C.forwardRef((e, r) => {
    const n = tt(Rr, e.__scopeDialog),
      o = C.useRef(!1),
      s = C.useRef(!1);
    return /* @__PURE__ */ b.jsx(U0, {
      ...e,
      ref: r,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (l) => {
        e.onCloseAutoFocus?.(l),
          l.defaultPrevented ||
            (o.current || n.triggerRef.current?.focus(), l.preventDefault()),
          (o.current = !1),
          (s.current = !1);
      },
      onInteractOutside: (l) => {
        e.onInteractOutside?.(l),
          l.defaultPrevented ||
            ((o.current = !0),
            l.detail.originalEvent.type === "pointerdown" && (s.current = !0));
        const c = l.target;
        n.triggerRef.current?.contains(c) && l.preventDefault(),
          l.detail.originalEvent.type === "focusin" &&
            s.current &&
            l.preventDefault();
      },
    });
  }),
  U0 = C.forwardRef((e, r) => {
    const {
        __scopeDialog: n,
        trapFocus: o,
        onOpenAutoFocus: s,
        onCloseAutoFocus: l,
        ...c
      } = e,
      f = tt(Rr, n),
      B = C.useRef(null),
      g = zA(r, B);
    return (
      $w(),
      /* @__PURE__ */ b.jsxs(b.Fragment, {
        children: [
          /* @__PURE__ */ b.jsx(Gc, {
            asChild: !0,
            loop: !0,
            trapped: o,
            onMountAutoFocus: s,
            onUnmountAutoFocus: l,
            children: /* @__PURE__ */ b.jsx(Vc, {
              role: "dialog",
              id: f.contentId,
              "aria-describedby": f.descriptionId,
              "aria-labelledby": f.titleId,
              "data-state": sf(f.open),
              ...c,
              ref: g,
              onDismiss: () => f.onOpenChange(!1),
            }),
          }),
          /* @__PURE__ */ b.jsxs(b.Fragment, {
            children: [
              /* @__PURE__ */ b.jsx(yH, { titleId: f.titleId }),
              /* @__PURE__ */ b.jsx(FH, {
                contentRef: B,
                descriptionId: f.descriptionId,
              }),
            ],
          }),
        ],
      })
    );
  }),
  nf = "DialogTitle",
  F0 = C.forwardRef((e, r) => {
    const { __scopeDialog: n, ...o } = e,
      s = tt(nf, n);
    return /* @__PURE__ */ b.jsx(TA.h2, { id: s.titleId, ...o, ref: r });
  });
F0.displayName = nf;
var E0 = "DialogDescription",
  of = C.forwardRef((e, r) => {
    const { __scopeDialog: n, ...o } = e,
      s = tt(E0, n);
    return /* @__PURE__ */ b.jsx(TA.p, { id: s.descriptionId, ...o, ref: r });
  });
of.displayName = E0;
var x0 = "DialogClose",
  I0 = C.forwardRef((e, r) => {
    const { __scopeDialog: n, ...o } = e,
      s = tt(x0, n);
    return /* @__PURE__ */ b.jsx(TA.button, {
      type: "button",
      ...o,
      ref: r,
      onClick: _A(e.onClick, () => s.onOpenChange(!1)),
    });
  });
I0.displayName = x0;
function sf(e) {
  return e ? "open" : "closed";
}
var H0 = "DialogTitleWarning",
  [XH, S0] = h1(H0, {
    contentName: Rr,
    titleName: nf,
    docsSlug: "dialog",
  }),
  yH = ({ titleId: e }) => {
    const r = S0(H0),
      n = `\`${r.contentName}\` requires a \`${r.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${r.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${r.docsSlug}`;
    return (
      C.useEffect(() => {
        e && (document.getElementById(e) || console.error(n));
      }, [n, e]),
      null
    );
  },
  UH = "DialogDescriptionWarning",
  FH = ({ contentRef: e, descriptionId: r }) => {
    const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${S0(UH).contentName}}.`;
    return (
      C.useEffect(() => {
        const s = e.current?.getAttribute("aria-describedby");
        r && s && (document.getElementById(r) || console.warn(o));
      }, [o, e, r]),
      null
    );
  },
  EH = w0,
  xH = v0,
  IH = C0,
  b0 = Q0,
  L0 = y0,
  T0 = F0,
  D0 = of,
  HH = I0;
const SH = EH,
  bH = xH,
  LH = IH,
  K0 = C.forwardRef(({ className: e, ...r }, n) =>
    /* @__PURE__ */ b.jsx(b0, {
      ref: n,
      className: Ae(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e,
      ),
      ...r,
    }),
  );
K0.displayName = b0.displayName;
const k0 = C.forwardRef(({ className: e, children: r, ...n }, o) =>
  /* @__PURE__ */ b.jsxs(LH, {
    children: [
      /* @__PURE__ */ b.jsx(K0, {}),
      /* @__PURE__ */ b.jsxs(L0, {
        ref: o,
        className: Ae(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          e,
        ),
        ...n,
        children: [
          r,
          /* @__PURE__ */ b.jsxs(HH, {
            className:
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [
              /* @__PURE__ */ b.jsx(w1, { className: "h-4 w-4" }),
              /* @__PURE__ */ b.jsx("span", {
                className: "sr-only",
                children: "Close",
              }),
            ],
          }),
        ],
      }),
    ],
  }),
);
k0.displayName = L0.displayName;
const R0 = ({ className: e, ...r }) =>
  /* @__PURE__ */ b.jsx("div", {
    className: Ae("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...r,
  });
R0.displayName = "DialogHeader";
const O0 = C.forwardRef(({ className: e, ...r }, n) =>
  /* @__PURE__ */ b.jsx(T0, {
    ref: n,
    className: Ae("text-lg font-semibold leading-none tracking-tight", e),
    ...r,
  }),
);
O0.displayName = T0.displayName;
const TH = C.forwardRef(({ className: e, ...r }, n) =>
  /* @__PURE__ */ b.jsx(D0, {
    ref: n,
    className: Ae("text-sm text-muted-foreground", e),
    ...r,
  }),
);
TH.displayName = D0.displayName;
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DH = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  N0 = (...e) => e.filter((r, n, o) => !!r && o.indexOf(r) === n).join(" ");
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var KH = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kH = C.forwardRef(
  (
    {
      color: e = "currentColor",
      size: r = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: o,
      className: s = "",
      children: l,
      iconNode: c,
      ...f
    },
    B,
  ) =>
    C.createElement(
      "svg",
      {
        ref: B,
        ...KH,
        width: r,
        height: r,
        stroke: e,
        strokeWidth: o ? (Number(n) * 24) / Number(r) : n,
        className: N0("lucide", s),
        ...f,
      },
      [
        ...c.map(([g, w]) => C.createElement(g, w)),
        ...(Array.isArray(l) ? l : [l]),
      ],
    ),
);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const af = (e, r) => {
  const n = C.forwardRef(({ className: o, ...s }, l) =>
    C.createElement(kH, {
      ref: l,
      iconNode: r,
      className: N0(`lucide-${DH(e)}`, o),
      ...s,
    }),
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RH = af("Camera", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg",
    },
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OH = af("Loader", [
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
  ["path", { d: "M18 12h4", key: "wj9ykh" }],
  ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
  ["path", { d: "M12 18v4", key: "jadmvz" }],
  ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
  ["path", { d: "M2 12h4", key: "j09sii" }],
  ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NH = af("Star", [
    [
      "polygon",
      {
        points:
          "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
        key: "8f66p6",
      },
    ],
  ]),
  MH = Pc(
    "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
    {
      variants: {
        variant: {
          default: "bg-background text-foreground",
          destructive:
            "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    },
  ),
  M0 = C.forwardRef(({ className: e, variant: r, ...n }, o) =>
    /* @__PURE__ */ b.jsx("div", {
      ref: o,
      role: "alert",
      className: Ae(MH({ variant: r }), e),
      ...n,
    }),
  );
M0.displayName = "Alert";
const P0 = C.forwardRef(({ className: e, ...r }, n) =>
  /* @__PURE__ */ b.jsx("h5", {
    ref: n,
    className: Ae("mb-1 font-medium leading-none tracking-tight", e),
    ...r,
  }),
);
P0.displayName = "AlertTitle";
const _0 = C.forwardRef(({ className: e, ...r }, n) =>
  /* @__PURE__ */ b.jsx("div", {
    ref: n,
    className: Ae("text-sm [&_p]:leading-relaxed", e),
    ...r,
  }),
);
_0.displayName = "AlertDescription";
const ks =
    '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}.fbt-widget{--background: 0 0% 100%;--foreground: 0 0% 3.9%;--card: 0 0% 100%;--card-foreground: 0 0% 3.9%;--popover: 0 0% 100%;--popover-foreground: 0 0% 3.9%;--primary: 0 0% 9%;--primary-foreground: 0 0% 98%;--secondary: 0 0% 96.1%;--secondary-foreground: 0 0% 9%;--muted: 0 0% 96.1%;--muted-foreground: 0 0% 45.1%;--accent: 0 0% 96.1%;--accent-foreground: 0 0% 9%;--destructive: 0 84.2% 60.2%;--destructive-foreground: 0 0% 98%;--border: 0 0% 89.8%;--input: 0 0% 89.8%;--ring: 0 0% 3.9%;--chart-1: 12 76% 61%;--chart-2: 173 58% 39%;--chart-3: 197 37% 24%;--chart-4: 43 74% 66%;--chart-5: 27 87% 67%;--radius: .5rem}.dark .fbt-widget{--background: 0 0% 3.9%;--foreground: 0 0% 98%;--card: 0 0% 3.9%;--card-foreground: 0 0% 98%;--popover: 0 0% 3.9%;--popover-foreground: 0 0% 98%;--primary: 0 0% 98%;--primary-foreground: 0 0% 9%;--secondary: 0 0% 14.9%;--secondary-foreground: 0 0% 98%;--muted: 0 0% 14.9%;--muted-foreground: 0 0% 63.9%;--accent: 0 0% 14.9%;--accent-foreground: 0 0% 98%;--destructive: 0 62.8% 30.6%;--destructive-foreground: 0 0% 98%;--border: 0 0% 14.9%;--input: 0 0% 14.9%;--ring: 0 0% 83.1%;--chart-1: 220 70% 50%;--chart-2: 160 60% 45%;--chart-3: 30 80% 55%;--chart-4: 280 65% 60%;--chart-5: 340 75% 55%}*{border-color:hsl(var(--border))}body{background-color:hsl(var(--background));color:hsl(var(--foreground))}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.-right-10{right:-2.5rem}.bottom-1\\/2{bottom:50%}.bottom-4{bottom:1rem}.left-\\[50\\%\\]{left:50%}.right-2{right:.5rem}.right-4{right:1rem}.top-4{top:1rem}.top-\\[50\\%\\]{top:50%}.z-50{z-index:50}.-mx-1{margin-left:-.25rem;margin-right:-.25rem}.my-1{margin-top:.25rem;margin-bottom:.25rem}.mb-1{margin-bottom:.25rem}.mr-2{margin-right:.5rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.h-10{height:2.5rem}.h-2{height:.5rem}.h-3\\.5{height:.875rem}.h-4{height:1rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-auto{height:auto}.h-px{height:1px}.max-h-96{max-height:24rem}.min-h-\\[60px\\]{min-height:60px}.w-2{width:.5rem}.w-3\\.5{width:.875rem}.w-4{width:1rem}.w-6{width:1.5rem}.w-9{width:2.25rem}.w-full{width:100%}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.max-w-full{max-width:100%}.max-w-lg{max-width:32rem}.origin-bottom-left{transform-origin:bottom left}.translate-x-\\[-50\\%\\]{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-\\[-50\\%\\]{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-90deg\\]{--tw-rotate: -90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-4{gap:1rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.375rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.375rem * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.whitespace-nowrap{white-space:nowrap}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xl{border-radius:.75rem}.rounded-b-lg{border-bottom-right-radius:var(--radius);border-bottom-left-radius:var(--radius)}.border{border-width:1px}.border-destructive\\/50{border-color:hsl(var(--destructive) / .5)}.border-input{border-color:hsl(var(--input))}.border-violet-300{--tw-border-opacity: 1;border-color:rgb(196 181 253 / var(--tw-border-opacity))}.bg-background{background-color:hsl(var(--background))}.bg-black\\/80{background-color:#000c}.bg-blue-400{--tw-bg-opacity: 1;background-color:rgb(96 165 250 / var(--tw-bg-opacity))}.bg-card{background-color:hsl(var(--card))}.bg-destructive{background-color:hsl(var(--destructive))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-green-500{--tw-bg-opacity: 1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))}.bg-muted{background-color:hsl(var(--muted))}.bg-popover{background-color:hsl(var(--popover))}.bg-primary{background-color:hsl(var(--primary))}.bg-red-300{--tw-bg-opacity: 1;background-color:rgb(252 165 165 / var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.bg-secondary{background-color:hsl(var(--secondary))}.bg-teal-300{--tw-bg-opacity: 1;background-color:rgb(94 234 212 / var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-violet-500{--tw-bg-opacity: 1;background-color:rgb(139 92 246 / var(--tw-bg-opacity))}.bg-yellow-300{--tw-bg-opacity: 1;background-color:rgb(253 224 71 / var(--tw-bg-opacity))}.fill-yellow-400{fill:#facc15}.p-0{padding:0}.p-1{padding:.25rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-8{padding-left:2rem;padding-right:2rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.pl-2{padding-left:.5rem}.pr-8{padding-right:2rem}.pt-0{padding-top:0}.text-center{text-align:center}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.text-card-foreground{color:hsl(var(--card-foreground))}.text-destructive{color:hsl(var(--destructive))}.text-destructive-foreground{color:hsl(var(--destructive-foreground))}.text-foreground{color:hsl(var(--foreground))}.text-gray-300{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-muted-foreground{color:hsl(var(--muted-foreground))}.text-popover-foreground{color:hsl(var(--popover-foreground))}.text-primary{color:hsl(var(--primary))}.text-primary-foreground{color:hsl(var(--primary-foreground))}.text-secondary-foreground{color:hsl(var(--secondary-foreground))}.text-violet-700{--tw-text-opacity: 1;color:rgb(109 40 217 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.text-yellow-400{--tw-text-opacity: 1;color:rgb(250 204 21 / var(--tw-text-opacity))}.underline-offset-4{text-underline-offset:4px}.opacity-50{opacity:.5}.opacity-70{opacity:.7}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring-offset-background{--tw-ring-offset-color: hsl(var(--background))}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-500{transition-duration:.5s}@keyframes enter{0%{opacity:var(--tw-enter-opacity, 1);transform:translate3d(var(--tw-enter-translate-x, 0),var(--tw-enter-translate-y, 0),0) scale3d(var(--tw-enter-scale, 1),var(--tw-enter-scale, 1),var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity, 1);transform:translate3d(var(--tw-exit-translate-x, 0),var(--tw-exit-translate-y, 0),0) scale3d(var(--tw-exit-scale, 1),var(--tw-exit-scale, 1),var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))}}.duration-200{animation-duration:.2s}.duration-500{animation-duration:.5s}.placeholder\\:text-muted-foreground::-moz-placeholder{color:hsl(var(--muted-foreground))}.placeholder\\:text-muted-foreground::placeholder{color:hsl(var(--muted-foreground))}.hover\\:bg-accent:hover{background-color:hsl(var(--accent))}.hover\\:bg-destructive\\/90:hover{background-color:hsl(var(--destructive) / .9)}.hover\\:bg-primary\\/90:hover{background-color:hsl(var(--primary) / .9)}.hover\\:bg-secondary\\/80:hover{background-color:hsl(var(--secondary) / .8)}.hover\\:bg-violet-50:hover{--tw-bg-opacity: 1;background-color:rgb(245 243 255 / var(--tw-bg-opacity))}.hover\\:bg-violet-600:hover{--tw-bg-opacity: 1;background-color:rgb(124 58 237 / var(--tw-bg-opacity))}.hover\\:text-accent-foreground:hover{color:hsl(var(--accent-foreground))}.hover\\:text-violet-500:hover{--tw-text-opacity: 1;color:rgb(139 92 246 / var(--tw-text-opacity))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}.focus\\:bg-accent:focus{background-color:hsl(var(--accent))}.focus\\:text-accent-foreground:focus{color:hsl(var(--accent-foreground))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-1:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-ring:focus{--tw-ring-color: hsl(var(--ring))}.focus\\:ring-violet-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(139 92 246 / var(--tw-ring-opacity))}.focus\\:ring-offset-2:focus{--tw-ring-offset-width: 2px}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-1:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-ring:focus-visible{--tw-ring-color: hsl(var(--ring))}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.peer:disabled~.peer-disabled\\:cursor-not-allowed{cursor:not-allowed}.peer:disabled~.peer-disabled\\:opacity-70{opacity:.7}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y: .25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x: -.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x: .25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y: -.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=open\\]\\:bg-accent[data-state=open]{background-color:hsl(var(--accent))}.data-\\[state\\=open\\]\\:text-muted-foreground[data-state=open]{color:hsl(var(--muted-foreground))}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation-name:enter;animation-duration:.15s;--tw-enter-opacity: initial;--tw-enter-scale: initial;--tw-enter-rotate: initial;--tw-enter-translate-x: initial;--tw-enter-translate-y: initial}.data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation-name:exit;animation-duration:.15s;--tw-exit-opacity: initial;--tw-exit-scale: initial;--tw-exit-rotate: initial;--tw-exit-translate-x: initial;--tw-exit-translate-y: initial}.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--tw-exit-opacity: 0}.data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--tw-enter-opacity: 0}.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale: .95}.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale: .95}.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom]{--tw-enter-translate-y: -.5rem}.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left]{--tw-enter-translate-x: .5rem}.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right]{--tw-enter-translate-x: -.5rem}.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top]{--tw-enter-translate-y: .5rem}.data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state=closed]{--tw-exit-translate-x: -50%}.data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state=closed]{--tw-exit-translate-y: -48%}.data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state=open]{--tw-enter-translate-x: -50%}.data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state=open]{--tw-enter-translate-y: -48%}.dark\\:border-destructive:is(.dark *){border-color:hsl(var(--destructive))}@media (min-width: 640px){.sm\\:max-w-\\[425px\\]{max-width:425px}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}.sm\\:space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.sm\\:rounded-lg{border-radius:var(--radius)}.sm\\:text-left{text-align:left}}.\\[\\&\\>span\\]\\:line-clamp-1>span{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.\\[\\&\\>svg\\+div\\]\\:translate-y-\\[-3px\\]>svg+div{--tw-translate-y: -3px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\[\\&\\>svg\\]\\:absolute>svg{position:absolute}.\\[\\&\\>svg\\]\\:left-4>svg{left:1rem}.\\[\\&\\>svg\\]\\:top-4>svg{top:1rem}.\\[\\&\\>svg\\]\\:text-destructive>svg{color:hsl(var(--destructive))}.\\[\\&\\>svg\\]\\:text-foreground>svg{color:hsl(var(--foreground))}.\\[\\&\\>svg\\~\\*\\]\\:pl-7>svg~*{padding-left:1.75rem}.\\[\\&_p\\]\\:leading-relaxed p{line-height:1.625}',
  PH = [
    { value: "feature", label: "Feature", color: "bg-yellow-300" },
    { value: "bug", label: "Bug", color: "bg-red-300" },
    { value: "question", label: "General Question", color: "bg-blue-400" },
    { value: "other", label: "Other", color: "bg-teal-300" },
  ];
function _H({ projectId: e }) {
  const [r, n] = C.useState(""),
    [o, s] = C.useState(0),
    [l, c] = C.useState(""),
    [f, B] = C.useState(!1),
    [g, w] = C.useState(!1),
    [h, v] = C.useState(null),
    [U, Q] = C.useState(!1),
    [m, F] = C.useState(null),
    E = C.useRef(null),
    [I, R] = C.useState(null),
    [T, k] = C.useState(null),
    O = (V, q) => {
      F({ message: V, type: q }), setTimeout(() => F(null), 5e3);
    },
    M = async (V) => {
      V.preventDefault(), Q(!0);
      try {
        const q = await fetch(
          "https://sreenington-nextjs-test.loca.lt/api/submit-feedback",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              projectId: e,
              type: r,
              rating: r === "feature" ? o : void 0,
              feedback: l,
              screenshot: h,
            }),
          },
        );
        if (!q.ok) {
          const rA = await q.json();
          throw new Error(rA.error || "Failed to submit feedback");
        }
        O("Feedback submitted successfully!", "success"),
          n(""),
          s(0),
          c(""),
          v(null),
          B(!1);
      } catch (q) {
        console.error("Error submitting feedback:", q),
          O(q.message, "error"),
          B(!1);
      } finally {
        Q(!1);
      }
    },
    X = () => {
      B(!1),
        setTimeout(() => {
          w(!0);
        }, 100);
    },
    z = (V) => {
      g && R({ x: V.clientX, y: V.clientY });
    },
    nA = (V) => {
      g && I && k({ x: V.clientX, y: V.clientY });
    },
    dA = async () => {
      if (g && I && T) {
        const V = Math.min(I.x, T.x),
          q = Math.min(I.y, T.y),
          rA = Math.abs(T.x - I.x),
          uA = Math.abs(T.y - I.y),
          Z = (
            await gE(document.body, {
              x: V,
              y: q,
              width: rA,
              height: uA,
              useCORS: !0,
              allowTaint: !0,
            })
          ).toDataURL();
        v(Z), w(!1), R(null), k(null), B(!0);
      }
    };
  return (
    C.useEffect(() => {
      if (g)
        return (
          document.addEventListener("mousedown", z),
          document.addEventListener("mousemove", nA),
          document.addEventListener("mouseup", dA),
          () => {
            document.removeEventListener("mousedown", z),
              document.removeEventListener("mousemove", nA),
              document.removeEventListener("mouseup", dA);
          }
        );
    }, [g, I, T]),
    e === null || e == null
      ? /* @__PURE__ */ b.jsxs(M0, {
          variant: "destructive",
          children: [
            /* @__PURE__ */ b.jsx("style", { children: ks }),
            /* @__PURE__ */ b.jsx(P0, {
              className: "fbt-widget items-center justify-center text-center",
              children: "Error",
            }),
            /* @__PURE__ */ b.jsx(_0, {
              className: "fbt-widget items-center justify-center text-center",
              children:
                "Unable to load the feedback widget. Project ID is missing.",
            }),
            /* @__PURE__ */ b.jsx("div", {
              className: "flex justify-center mt-4",
              children: /* @__PURE__ */ b.jsxs("a", {
                href: "https://www.feedbackthing.pro",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "flex items-center space-x-2 text-sm text-gray-500 hover:text-violet-500 transition-colors",
                children: [
                  /* @__PURE__ */ b.jsx("img", {
                    src: "https://www.feedbackthing.pro/favicon.ico",
                    alt: "Feedbackthing Logo",
                    className: "h-4 w-4",
                  }),
                  /* @__PURE__ */ b.jsx("span", {
                    children: "Powered by feedbackthing.pro",
                  }),
                ],
              }),
            }),
          ],
        })
      : /* @__PURE__ */ b.jsxs(b.Fragment, {
          children: [
            /* @__PURE__ */ b.jsx("style", { children: ks }),
            g &&
              /* @__PURE__ */ b.jsx("div", {
                ref: E,
                style: {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  cursor: "crosshair",
                  zIndex: 9999,
                },
                children:
                  I &&
                  T &&
                  /* @__PURE__ */ b.jsx("div", {
                    style: {
                      position: "absolute",
                      left: Math.min(I.x, T.x),
                      top: Math.min(I.y, T.y),
                      width: Math.abs(T.x - I.x),
                      height: Math.abs(T.y - I.y),
                      border: "2px solid #4CAF50",
                      backgroundColor: "rgba(76, 175, 80, 0.1)",
                    },
                  }),
              }),
            /* @__PURE__ */ b.jsxs(SH, {
              open: f,
              onOpenChange: B,
              children: [
                /* @__PURE__ */ b.jsx("style", { children: ks }),
                /* @__PURE__ */ b.jsx(bH, {
                  asChild: !0,
                  children: /* @__PURE__ */ b.jsx(Ps, {
                    className:
                      "fbt-widget fixed -right-10 bottom-1/2 origin-bottom-left rotate-[-90deg] bg-violet-500 px-4 py-2 text-white hover:bg-violet-600",
                    children: "Feedback",
                  }),
                }),
                /* @__PURE__ */ b.jsxs(k0, {
                  className: "fbt-widget sm:max-w-[425px] p-0",
                  children: [
                    /* @__PURE__ */ b.jsx("style", { children: ks }),
                    /* @__PURE__ */ b.jsxs("div", {
                      className: "p-6",
                      children: [
                        /* @__PURE__ */ b.jsxs(R0, {
                          children: [
                            /* @__PURE__ */ b.jsx(O0, {
                              className:
                                "text-violet-700 text-xl font-semibold",
                              children: "Send us your feedback",
                            }),
                            /* @__PURE__ */ b.jsx(of, {}),
                          ],
                        }),
                        /* @__PURE__ */ b.jsxs("form", {
                          onSubmit: M,
                          className: "mt-4 space-y-4",
                          children: [
                            /* @__PURE__ */ b.jsxs("div", {
                              children: [
                                /* @__PURE__ */ b.jsx(_s, {
                                  htmlFor: "feedbackType",
                                  className: "text-violet-700",
                                  children: "Feedback Type",
                                }),
                                /* @__PURE__ */ b.jsxs(cH, {
                                  value: r,
                                  onValueChange: (V) => n(V),
                                  className: "fbt-widget",
                                  children: [
                                    /* @__PURE__ */ b.jsx(c0, {
                                      id: "feedbackType",
                                      className:
                                        "w-full border-violet-300 focus:ring-violet-500",
                                      children: /* @__PURE__ */ b.jsx(fH, {
                                        placeholder: "Select feedback type",
                                      }),
                                    }),
                                    /* @__PURE__ */ b.jsx(B0, {
                                      className: "fbt-widget",
                                      children: PH.map((V) =>
                                        /* @__PURE__ */ b.jsx(
                                          g0,
                                          {
                                            value: V.value,
                                            children: /* @__PURE__ */ b.jsxs(
                                              "div",
                                              {
                                                className: "flex items-center",
                                                children: [
                                                  /* @__PURE__ */ b.jsx(
                                                    "span",
                                                    {
                                                      className: `w-2 h-2 rounded-full mr-2 ${V.color}`,
                                                    },
                                                  ),
                                                  V.label,
                                                ],
                                              },
                                            ),
                                          },
                                          V.value,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            r === "feature" &&
                              /* @__PURE__ */ b.jsxs("div", {
                                children: [
                                  /* @__PURE__ */ b.jsx(_s, {
                                    className: "text-violet-700",
                                    children: "Feature Rating",
                                  }),
                                  /* @__PURE__ */ b.jsx("div", {
                                    className: "flex items-center",
                                    children: [1, 2, 3, 4, 5].map((V) =>
                                      /* @__PURE__ */ b.jsx(
                                        NH,
                                        {
                                          className: `h-6 w-6 cursor-pointer ${V <= o ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`,
                                          onClick: () => s(V),
                                        },
                                        V,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            r === "bug" &&
                              /* @__PURE__ */ b.jsxs("div", {
                                children: [
                                  /* @__PURE__ */ b.jsxs(Ps, {
                                    type: "button",
                                    variant: "outline",
                                    onClick: X,
                                    className:
                                      "flex items-center border-violet-300 text-violet-700 hover:bg-violet-50",
                                    children: [
                                      /* @__PURE__ */ b.jsx(RH, {
                                        className: "mr-2 h-4 w-4",
                                      }),
                                      "Take Screenshot",
                                    ],
                                  }),
                                  h &&
                                    /* @__PURE__ */ b.jsx("div", {
                                      className: "mt-2",
                                      children: /* @__PURE__ */ b.jsx("img", {
                                        src: h,
                                        alt: "Screenshot",
                                        className: "max-w-full h-auto",
                                      }),
                                    }),
                                ],
                              }),
                            /* @__PURE__ */ b.jsxs("div", {
                              children: [
                                /* @__PURE__ */ b.jsx(_s, {
                                  htmlFor: "feedback",
                                  className: "text-violet-700",
                                  children: "Your Feedback",
                                }),
                                /* @__PURE__ */ b.jsx(Jw, {
                                  id: "feedback",
                                  value: l,
                                  onChange: (V) => c(V.target.value),
                                  placeholder:
                                    "Please provide your feedback here...",
                                  className:
                                    "w-full border-violet-300 focus:ring-violet-500",
                                  rows: 4,
                                }),
                              ],
                            }),
                            /* @__PURE__ */ b.jsx(Ps, {
                              type: "submit",
                              className:
                                "w-full bg-violet-500 text-white hover:bg-violet-600",
                              disabled: U,
                              children: U
                                ? /* @__PURE__ */ b.jsxs(b.Fragment, {
                                    children: [
                                      /* @__PURE__ */ b.jsx(OH, {
                                        className: "mr-2 h-4 w-4 animate-spin",
                                      }),
                                      "Submitting...",
                                    ],
                                  })
                                : "Submit Feedback",
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ b.jsx("div", {
                      className:
                        "bg-gray-50 p-4 flex justify-center rounded-b-lg",
                      children: /* @__PURE__ */ b.jsxs("a", {
                        href: "https://www.feedbackthing.pro",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "flex items-center space-x-2 text-sm text-gray-500 hover:text-violet-500 transition-colors",
                        children: [
                          /* @__PURE__ */ b.jsx("img", {
                            src: "https://www.feedbackthing.pro/favicon.ico",
                            alt: "Feedbackthing Logo",
                            className: "h-4 w-4",
                          }),
                          /* @__PURE__ */ b.jsx("span", {
                            children: "Powered by feedbackthing.pro",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            m &&
              /* @__PURE__ */ b.jsx("div", {
                className: `fixed bottom-4 right-4 z-50 ${m.type === "error" ? "bg-red-500" : "bg-green-500"} text-white p-4 rounded-md shadow-lg transition-opacity duration-500 fbt-widget`,
                style: {
                  opacity: 1,
                  animation: "fadeOut 5s forwards",
                },
                children: m.message,
              }),
            /* @__PURE__ */ b.jsx("style", {
              jsx: !0,
              children: `
        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `,
            }),
          ],
        })
  );
}
const VH = (e) => e.replace(/-([a-z])/g, (r, n) => n.toUpperCase());
class GH extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const r = this.getPropsFromAttributes();
    Yu.createRoot(this.shadowRoot).render(/* @__PURE__ */ b.jsx(_H, { ...r }));
  }
  getPropsFromAttributes() {
    const r = {};
    for (const { name: n, value: o } of this.attributes) r[VH(n)] = o;
    return r;
  }
}
customElements.define("feedback-thing", GH);
