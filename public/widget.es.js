function Pm(e, r) {
  for (var n = 0; n < r.length; n++) {
    const o = r[n];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const s in o)
        if (s !== "default" && !(s in e)) {
          const l = Object.getOwnPropertyDescriptor(o, s);
          l && Object.defineProperty(e, s, l.get ? l : {
            enumerable: !0,
            get: () => o[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Tp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dp = { exports: {} }, yo = {}, wc = { exports: {} }, yA = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tg;
function _m() {
  if (tg) return yA;
  tg = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.iterator;
  function v(I) {
    return I === null || typeof I != "object" ? null : (I = h && I[h] || I["@@iterator"], typeof I == "function" ? I : null);
  }
  var U = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Q = Object.assign, C = {};
  function E(I, M, cA) {
    this.props = I, this.context = M, this.refs = C, this.updater = cA || U;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(I, M) {
    if (typeof I != "object" && typeof I != "function" && I != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, I, M, "setState");
  }, E.prototype.forceUpdate = function(I) {
    this.updater.enqueueForceUpdate(this, I, "forceUpdate");
  };
  function F() {
  }
  F.prototype = E.prototype;
  function H(I, M, cA) {
    this.props = I, this.context = M, this.refs = C, this.updater = cA || U;
  }
  var k = H.prototype = new F();
  k.constructor = H, Q(k, E.prototype), k.isPureReactComponent = !0;
  var K = Array.isArray, R = Object.prototype.hasOwnProperty, O = { current: null }, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function X(I, M, cA) {
    var uA, wA = {}, hA = null, Y = null;
    if (M != null) for (uA in M.ref !== void 0 && (Y = M.ref), M.key !== void 0 && (hA = "" + M.key), M) R.call(M, uA) && !P.hasOwnProperty(uA) && (wA[uA] = M[uA]);
    var fA = arguments.length - 2;
    if (fA === 1) wA.children = cA;
    else if (1 < fA) {
      for (var CA = Array(fA), QA = 0; QA < fA; QA++) CA[QA] = arguments[QA + 2];
      wA.children = CA;
    }
    if (I && I.defaultProps) for (uA in fA = I.defaultProps, fA) wA[uA] === void 0 && (wA[uA] = fA[uA]);
    return { $$typeof: e, type: I, key: hA, ref: Y, props: wA, _owner: O.current };
  }
  function J(I, M) {
    return { $$typeof: e, type: I.type, key: M, ref: I.ref, props: I.props, _owner: I._owner };
  }
  function sA(I) {
    return typeof I == "object" && I !== null && I.$$typeof === e;
  }
  function pA(I) {
    var M = { "=": "=0", ":": "=2" };
    return "$" + I.replace(/[=:]/g, function(cA) {
      return M[cA];
    });
  }
  var Z = /\/+/g;
  function $(I, M) {
    return typeof I == "object" && I !== null && I.key != null ? pA("" + I.key) : M.toString(36);
  }
  function nA(I, M, cA, uA, wA) {
    var hA = typeof I;
    (hA === "undefined" || hA === "boolean") && (I = null);
    var Y = !1;
    if (I === null) Y = !0;
    else switch (hA) {
      case "string":
      case "number":
        Y = !0;
        break;
      case "object":
        switch (I.$$typeof) {
          case e:
          case r:
            Y = !0;
        }
    }
    if (Y) return Y = I, wA = wA(Y), I = uA === "" ? "." + $(Y, 0) : uA, K(wA) ? (cA = "", I != null && (cA = I.replace(Z, "$&/") + "/"), nA(wA, M, cA, "", function(QA) {
      return QA;
    })) : wA != null && (sA(wA) && (wA = J(wA, cA + (!wA.key || Y && Y.key === wA.key ? "" : ("" + wA.key).replace(Z, "$&/") + "/") + I)), M.push(wA)), 1;
    if (Y = 0, uA = uA === "" ? "." : uA + ":", K(I)) for (var fA = 0; fA < I.length; fA++) {
      hA = I[fA];
      var CA = uA + $(hA, fA);
      Y += nA(hA, M, cA, CA, wA);
    }
    else if (CA = v(I), typeof CA == "function") for (I = CA.call(I), fA = 0; !(hA = I.next()).done; ) hA = hA.value, CA = uA + $(hA, fA++), Y += nA(hA, M, cA, CA, wA);
    else if (hA === "object") throw M = String(I), Error("Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(I).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead.");
    return Y;
  }
  function gA(I, M, cA) {
    if (I == null) return I;
    var uA = [], wA = 0;
    return nA(I, uA, "", "", function(hA) {
      return M.call(cA, hA, wA++);
    }), uA;
  }
  function oA(I) {
    if (I._status === -1) {
      var M = I._result;
      M = M(), M.then(function(cA) {
        (I._status === 0 || I._status === -1) && (I._status = 1, I._result = cA);
      }, function(cA) {
        (I._status === 0 || I._status === -1) && (I._status = 2, I._result = cA);
      }), I._status === -1 && (I._status = 0, I._result = M);
    }
    if (I._status === 1) return I._result.default;
    throw I._result;
  }
  var eA = { current: null }, N = { transition: null }, W = { ReactCurrentDispatcher: eA, ReactCurrentBatchConfig: N, ReactCurrentOwner: O };
  function j() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return yA.Children = { map: gA, forEach: function(I, M, cA) {
    gA(I, function() {
      M.apply(this, arguments);
    }, cA);
  }, count: function(I) {
    var M = 0;
    return gA(I, function() {
      M++;
    }), M;
  }, toArray: function(I) {
    return gA(I, function(M) {
      return M;
    }) || [];
  }, only: function(I) {
    if (!sA(I)) throw Error("React.Children.only expected to receive a single React element child.");
    return I;
  } }, yA.Component = E, yA.Fragment = n, yA.Profiler = s, yA.PureComponent = H, yA.StrictMode = o, yA.Suspense = B, yA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W, yA.act = j, yA.cloneElement = function(I, M, cA) {
    if (I == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + I + ".");
    var uA = Q({}, I.props), wA = I.key, hA = I.ref, Y = I._owner;
    if (M != null) {
      if (M.ref !== void 0 && (hA = M.ref, Y = O.current), M.key !== void 0 && (wA = "" + M.key), I.type && I.type.defaultProps) var fA = I.type.defaultProps;
      for (CA in M) R.call(M, CA) && !P.hasOwnProperty(CA) && (uA[CA] = M[CA] === void 0 && fA !== void 0 ? fA[CA] : M[CA]);
    }
    var CA = arguments.length - 2;
    if (CA === 1) uA.children = cA;
    else if (1 < CA) {
      fA = Array(CA);
      for (var QA = 0; QA < CA; QA++) fA[QA] = arguments[QA + 2];
      uA.children = fA;
    }
    return { $$typeof: e, type: I.type, key: wA, ref: hA, props: uA, _owner: Y };
  }, yA.createContext = function(I) {
    return I = { $$typeof: u, _currentValue: I, _currentValue2: I, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, I.Provider = { $$typeof: l, _context: I }, I.Consumer = I;
  }, yA.createElement = X, yA.createFactory = function(I) {
    var M = X.bind(null, I);
    return M.type = I, M;
  }, yA.createRef = function() {
    return { current: null };
  }, yA.forwardRef = function(I) {
    return { $$typeof: f, render: I };
  }, yA.isValidElement = sA, yA.lazy = function(I) {
    return { $$typeof: p, _payload: { _status: -1, _result: I }, _init: oA };
  }, yA.memo = function(I, M) {
    return { $$typeof: g, type: I, compare: M === void 0 ? null : M };
  }, yA.startTransition = function(I) {
    var M = N.transition;
    N.transition = {};
    try {
      I();
    } finally {
      N.transition = M;
    }
  }, yA.unstable_act = j, yA.useCallback = function(I, M) {
    return eA.current.useCallback(I, M);
  }, yA.useContext = function(I) {
    return eA.current.useContext(I);
  }, yA.useDebugValue = function() {
  }, yA.useDeferredValue = function(I) {
    return eA.current.useDeferredValue(I);
  }, yA.useEffect = function(I, M) {
    return eA.current.useEffect(I, M);
  }, yA.useId = function() {
    return eA.current.useId();
  }, yA.useImperativeHandle = function(I, M, cA) {
    return eA.current.useImperativeHandle(I, M, cA);
  }, yA.useInsertionEffect = function(I, M) {
    return eA.current.useInsertionEffect(I, M);
  }, yA.useLayoutEffect = function(I, M) {
    return eA.current.useLayoutEffect(I, M);
  }, yA.useMemo = function(I, M) {
    return eA.current.useMemo(I, M);
  }, yA.useReducer = function(I, M, cA) {
    return eA.current.useReducer(I, M, cA);
  }, yA.useRef = function(I) {
    return eA.current.useRef(I);
  }, yA.useState = function(I) {
    return eA.current.useState(I);
  }, yA.useSyncExternalStore = function(I, M, cA) {
    return eA.current.useSyncExternalStore(I, M, cA);
  }, yA.useTransition = function() {
    return eA.current.useTransition();
  }, yA.version = "18.3.1", yA;
}
var rg;
function ku() {
  return rg || (rg = 1, wc.exports = _m()), wc.exports;
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
var ng;
function Vm() {
  if (ng) return yo;
  ng = 1;
  var e = ku(), r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(f, B, g) {
    var p, h = {}, v = null, U = null;
    g !== void 0 && (v = "" + g), B.key !== void 0 && (v = "" + B.key), B.ref !== void 0 && (U = B.ref);
    for (p in B) o.call(B, p) && !l.hasOwnProperty(p) && (h[p] = B[p]);
    if (f && f.defaultProps) for (p in B = f.defaultProps, B) h[p] === void 0 && (h[p] = B[p]);
    return { $$typeof: r, type: f, key: v, ref: U, props: h, _owner: s.current };
  }
  return yo.Fragment = n, yo.jsx = u, yo.jsxs = u, yo;
}
Dp.exports = Vm();
var b = Dp.exports, $c = {}, Kp = { exports: {} }, Fe = {}, hc = { exports: {} }, vc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var og;
function Gm() {
  return og || (og = 1, function(e) {
    function r(N, W) {
      var j = N.length;
      N.push(W);
      A: for (; 0 < j; ) {
        var I = j - 1 >>> 1, M = N[I];
        if (0 < s(M, W)) N[I] = W, N[j] = M, j = I;
        else break A;
      }
    }
    function n(N) {
      return N.length === 0 ? null : N[0];
    }
    function o(N) {
      if (N.length === 0) return null;
      var W = N[0], j = N.pop();
      if (j !== W) {
        N[0] = j;
        A: for (var I = 0, M = N.length, cA = M >>> 1; I < cA; ) {
          var uA = 2 * (I + 1) - 1, wA = N[uA], hA = uA + 1, Y = N[hA];
          if (0 > s(wA, j)) hA < M && 0 > s(Y, wA) ? (N[I] = Y, N[hA] = j, I = hA) : (N[I] = wA, N[uA] = j, I = uA);
          else if (hA < M && 0 > s(Y, j)) N[I] = Y, N[hA] = j, I = hA;
          else break A;
        }
      }
      return W;
    }
    function s(N, W) {
      var j = N.sortIndex - W.sortIndex;
      return j !== 0 ? j : N.id - W.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var l = performance;
      e.unstable_now = function() {
        return l.now();
      };
    } else {
      var u = Date, f = u.now();
      e.unstable_now = function() {
        return u.now() - f;
      };
    }
    var B = [], g = [], p = 1, h = null, v = 3, U = !1, Q = !1, C = !1, E = typeof setTimeout == "function" ? setTimeout : null, F = typeof clearTimeout == "function" ? clearTimeout : null, H = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function k(N) {
      for (var W = n(g); W !== null; ) {
        if (W.callback === null) o(g);
        else if (W.startTime <= N) o(g), W.sortIndex = W.expirationTime, r(B, W);
        else break;
        W = n(g);
      }
    }
    function K(N) {
      if (C = !1, k(N), !Q) if (n(B) !== null) Q = !0, oA(R);
      else {
        var W = n(g);
        W !== null && eA(K, W.startTime - N);
      }
    }
    function R(N, W) {
      Q = !1, C && (C = !1, F(X), X = -1), U = !0;
      var j = v;
      try {
        for (k(W), h = n(B); h !== null && (!(h.expirationTime > W) || N && !pA()); ) {
          var I = h.callback;
          if (typeof I == "function") {
            h.callback = null, v = h.priorityLevel;
            var M = I(h.expirationTime <= W);
            W = e.unstable_now(), typeof M == "function" ? h.callback = M : h === n(B) && o(B), k(W);
          } else o(B);
          h = n(B);
        }
        if (h !== null) var cA = !0;
        else {
          var uA = n(g);
          uA !== null && eA(K, uA.startTime - W), cA = !1;
        }
        return cA;
      } finally {
        h = null, v = j, U = !1;
      }
    }
    var O = !1, P = null, X = -1, J = 5, sA = -1;
    function pA() {
      return !(e.unstable_now() - sA < J);
    }
    function Z() {
      if (P !== null) {
        var N = e.unstable_now();
        sA = N;
        var W = !0;
        try {
          W = P(!0, N);
        } finally {
          W ? $() : (O = !1, P = null);
        }
      } else O = !1;
    }
    var $;
    if (typeof H == "function") $ = function() {
      H(Z);
    };
    else if (typeof MessageChannel < "u") {
      var nA = new MessageChannel(), gA = nA.port2;
      nA.port1.onmessage = Z, $ = function() {
        gA.postMessage(null);
      };
    } else $ = function() {
      E(Z, 0);
    };
    function oA(N) {
      P = N, O || (O = !0, $());
    }
    function eA(N, W) {
      X = E(function() {
        N(e.unstable_now());
      }, W);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
      N.callback = null;
    }, e.unstable_continueExecution = function() {
      Q || U || (Q = !0, oA(R));
    }, e.unstable_forceFrameRate = function(N) {
      0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : J = 0 < N ? Math.floor(1e3 / N) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return v;
    }, e.unstable_getFirstCallbackNode = function() {
      return n(B);
    }, e.unstable_next = function(N) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = v;
      }
      var j = v;
      v = W;
      try {
        return N();
      } finally {
        v = j;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(N, W) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var j = v;
      v = N;
      try {
        return W();
      } finally {
        v = j;
      }
    }, e.unstable_scheduleCallback = function(N, W, j) {
      var I = e.unstable_now();
      switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? I + j : I) : j = I, N) {
        case 1:
          var M = -1;
          break;
        case 2:
          M = 250;
          break;
        case 5:
          M = 1073741823;
          break;
        case 4:
          M = 1e4;
          break;
        default:
          M = 5e3;
      }
      return M = j + M, N = { id: p++, callback: W, priorityLevel: N, startTime: j, expirationTime: M, sortIndex: -1 }, j > I ? (N.sortIndex = j, r(g, N), n(B) === null && N === n(g) && (C ? (F(X), X = -1) : C = !0, eA(K, j - I))) : (N.sortIndex = M, r(B, N), Q || U || (Q = !0, oA(R))), N;
    }, e.unstable_shouldYield = pA, e.unstable_wrapCallback = function(N) {
      var W = v;
      return function() {
        var j = v;
        v = W;
        try {
          return N.apply(this, arguments);
        } finally {
          v = j;
        }
      };
    };
  }(vc)), vc;
}
var ig;
function Wm() {
  return ig || (ig = 1, hc.exports = Gm()), hc.exports;
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
var sg;
function jm() {
  if (sg) return Fe;
  sg = 1;
  var e = ku(), r = Wm();
  function n(A) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + A, i = 1; i < arguments.length; i++) t += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + A + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var o = /* @__PURE__ */ new Set(), s = {};
  function l(A, t) {
    u(A, t), u(A + "Capture", t);
  }
  function u(A, t) {
    for (s[A] = t, A = 0; A < t.length; A++) o.add(t[A]);
  }
  var f = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), B = Object.prototype.hasOwnProperty, g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, p = {}, h = {};
  function v(A) {
    return B.call(h, A) ? !0 : B.call(p, A) ? !1 : g.test(A) ? h[A] = !0 : (p[A] = !0, !1);
  }
  function U(A, t, i, a) {
    if (i !== null && i.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return a ? !1 : i !== null ? !i.acceptsBooleans : (A = A.toLowerCase().slice(0, 5), A !== "data-" && A !== "aria-");
      default:
        return !1;
    }
  }
  function Q(A, t, i, a) {
    if (t === null || typeof t > "u" || U(A, t, i, a)) return !0;
    if (a) return !1;
    if (i !== null) switch (i.type) {
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
  function C(A, t, i, a, c, d, w) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = a, this.attributeNamespace = c, this.mustUseProperty = i, this.propertyName = A, this.type = t, this.sanitizeURL = d, this.removeEmptyString = w;
  }
  var E = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(A) {
    E[A] = new C(A, 0, !1, A, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(A) {
    var t = A[0];
    E[t] = new C(t, 1, !1, A[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(A) {
    E[A] = new C(A, 2, !1, A.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(A) {
    E[A] = new C(A, 2, !1, A, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(A) {
    E[A] = new C(A, 3, !1, A.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(A) {
    E[A] = new C(A, 3, !0, A, null, !1, !1);
  }), ["capture", "download"].forEach(function(A) {
    E[A] = new C(A, 4, !1, A, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(A) {
    E[A] = new C(A, 6, !1, A, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(A) {
    E[A] = new C(A, 5, !1, A.toLowerCase(), null, !1, !1);
  });
  var F = /[\-:]([a-z])/g;
  function H(A) {
    return A[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(A) {
    var t = A.replace(
      F,
      H
    );
    E[t] = new C(t, 1, !1, A, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(A) {
    var t = A.replace(F, H);
    E[t] = new C(t, 1, !1, A, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(A) {
    var t = A.replace(F, H);
    E[t] = new C(t, 1, !1, A, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(A) {
    E[A] = new C(A, 1, !1, A.toLowerCase(), null, !1, !1);
  }), E.xlinkHref = new C("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(A) {
    E[A] = new C(A, 1, !1, A.toLowerCase(), null, !0, !0);
  });
  function k(A, t, i, a) {
    var c = E.hasOwnProperty(t) ? E[t] : null;
    (c !== null ? c.type !== 0 : a || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Q(t, i, c, a) && (i = null), a || c === null ? v(t) && (i === null ? A.removeAttribute(t) : A.setAttribute(t, "" + i)) : c.mustUseProperty ? A[c.propertyName] = i === null ? c.type === 3 ? !1 : "" : i : (t = c.attributeName, a = c.attributeNamespace, i === null ? A.removeAttribute(t) : (c = c.type, i = c === 3 || c === 4 && i === !0 ? "" : "" + i, a ? A.setAttributeNS(a, t, i) : A.setAttribute(t, i))));
  }
  var K = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, R = Symbol.for("react.element"), O = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), sA = Symbol.for("react.provider"), pA = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), nA = Symbol.for("react.suspense_list"), gA = Symbol.for("react.memo"), oA = Symbol.for("react.lazy"), eA = Symbol.for("react.offscreen"), N = Symbol.iterator;
  function W(A) {
    return A === null || typeof A != "object" ? null : (A = N && A[N] || A["@@iterator"], typeof A == "function" ? A : null);
  }
  var j = Object.assign, I;
  function M(A) {
    if (I === void 0) try {
      throw Error();
    } catch (i) {
      var t = i.stack.trim().match(/\n( *(at )?)/);
      I = t && t[1] || "";
    }
    return `
` + I + A;
  }
  var cA = !1;
  function uA(A, t) {
    if (!A || cA) return "";
    cA = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (D) {
          var a = D;
        }
        Reflect.construct(A, [], t);
      } else {
        try {
          t.call();
        } catch (D) {
          a = D;
        }
        A.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (D) {
          a = D;
        }
        A();
      }
    } catch (D) {
      if (D && a && typeof D.stack == "string") {
        for (var c = D.stack.split(`
`), d = a.stack.split(`
`), w = c.length - 1, y = d.length - 1; 1 <= w && 0 <= y && c[w] !== d[y]; ) y--;
        for (; 1 <= w && 0 <= y; w--, y--) if (c[w] !== d[y]) {
          if (w !== 1 || y !== 1)
            do
              if (w--, y--, 0 > y || c[w] !== d[y]) {
                var x = `
` + c[w].replace(" at new ", " at ");
                return A.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", A.displayName)), x;
              }
            while (1 <= w && 0 <= y);
          break;
        }
      }
    } finally {
      cA = !1, Error.prepareStackTrace = i;
    }
    return (A = A ? A.displayName || A.name : "") ? M(A) : "";
  }
  function wA(A) {
    switch (A.tag) {
      case 5:
        return M(A.type);
      case 16:
        return M("Lazy");
      case 13:
        return M("Suspense");
      case 19:
        return M("SuspenseList");
      case 0:
      case 2:
      case 15:
        return A = uA(A.type, !1), A;
      case 11:
        return A = uA(A.type.render, !1), A;
      case 1:
        return A = uA(A.type, !0), A;
      default:
        return "";
    }
  }
  function hA(A) {
    if (A == null) return null;
    if (typeof A == "function") return A.displayName || A.name || null;
    if (typeof A == "string") return A;
    switch (A) {
      case P:
        return "Fragment";
      case O:
        return "Portal";
      case J:
        return "Profiler";
      case X:
        return "StrictMode";
      case $:
        return "Suspense";
      case nA:
        return "SuspenseList";
    }
    if (typeof A == "object") switch (A.$$typeof) {
      case pA:
        return (A.displayName || "Context") + ".Consumer";
      case sA:
        return (A._context.displayName || "Context") + ".Provider";
      case Z:
        var t = A.render;
        return A = A.displayName, A || (A = t.displayName || t.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
      case gA:
        return t = A.displayName || null, t !== null ? t : hA(A.type) || "Memo";
      case oA:
        t = A._payload, A = A._init;
        try {
          return hA(A(t));
        } catch {
        }
    }
    return null;
  }
  function Y(A) {
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
        return A = t.render, A = A.displayName || A.name || "", t.displayName || (A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef");
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
  function fA(A) {
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
    return (A = A.nodeName) && A.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function QA(A) {
    var t = CA(A) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(A.constructor.prototype, t), a = "" + A[t];
    if (!A.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var c = i.get, d = i.set;
      return Object.defineProperty(A, t, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(w) {
        a = "" + w, d.call(this, w);
      } }), Object.defineProperty(A, t, { enumerable: i.enumerable }), { getValue: function() {
        return a;
      }, setValue: function(w) {
        a = "" + w;
      }, stopTracking: function() {
        A._valueTracker = null, delete A[t];
      } };
    }
  }
  function IA(A) {
    A._valueTracker || (A._valueTracker = QA(A));
  }
  function NA(A) {
    if (!A) return !1;
    var t = A._valueTracker;
    if (!t) return !0;
    var i = t.getValue(), a = "";
    return A && (a = CA(A) ? A.checked ? "true" : "false" : A.value), A = a, A !== i ? (t.setValue(A), !0) : !1;
  }
  function oe(A) {
    if (A = A || (typeof document < "u" ? document : void 0), typeof A > "u") return null;
    try {
      return A.activeElement || A.body;
    } catch {
      return A.body;
    }
  }
  function Ge(A, t) {
    var i = t.checked;
    return j({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: i ?? A._wrapperState.initialChecked });
  }
  function Nr(A, t) {
    var i = t.defaultValue == null ? "" : t.defaultValue, a = t.checked != null ? t.checked : t.defaultChecked;
    i = fA(t.value != null ? t.value : i), A._wrapperState = { initialChecked: a, initialValue: i, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Mr(A, t) {
    t = t.checked, t != null && k(A, "checked", t, !1);
  }
  function gr(A, t) {
    Mr(A, t);
    var i = fA(t.value), a = t.type;
    if (i != null) a === "number" ? (i === 0 && A.value === "" || A.value != i) && (A.value = "" + i) : A.value !== "" + i && (A.value = "" + i);
    else if (a === "submit" || a === "reset") {
      A.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ea(A, t.type, i) : t.hasOwnProperty("defaultValue") && Ea(A, t.type, fA(t.defaultValue)), t.checked == null && t.defaultChecked != null && (A.defaultChecked = !!t.defaultChecked);
  }
  function uf(A, t, i) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var a = t.type;
      if (!(a !== "submit" && a !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + A._wrapperState.initialValue, i || t === A.value || (A.value = t), A.defaultValue = t;
    }
    i = A.name, i !== "" && (A.name = ""), A.defaultChecked = !!A._wrapperState.initialChecked, i !== "" && (A.name = i);
  }
  function Ea(A, t, i) {
    (t !== "number" || oe(A.ownerDocument) !== A) && (i == null ? A.defaultValue = "" + A._wrapperState.initialValue : A.defaultValue !== "" + i && (A.defaultValue = "" + i));
  }
  var Rn = Array.isArray;
  function Pr(A, t, i, a) {
    if (A = A.options, t) {
      t = {};
      for (var c = 0; c < i.length; c++) t["$" + i[c]] = !0;
      for (i = 0; i < A.length; i++) c = t.hasOwnProperty("$" + A[i].value), A[i].selected !== c && (A[i].selected = c), c && a && (A[i].defaultSelected = !0);
    } else {
      for (i = "" + fA(i), t = null, c = 0; c < A.length; c++) {
        if (A[c].value === i) {
          A[c].selected = !0, a && (A[c].defaultSelected = !0);
          return;
        }
        t !== null || A[c].disabled || (t = A[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function xa(A, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(n(91));
    return j({}, t, { value: void 0, defaultValue: void 0, children: "" + A._wrapperState.initialValue });
  }
  function ff(A, t) {
    var i = t.value;
    if (i == null) {
      if (i = t.children, t = t.defaultValue, i != null) {
        if (t != null) throw Error(n(92));
        if (Rn(i)) {
          if (1 < i.length) throw Error(n(93));
          i = i[0];
        }
        t = i;
      }
      t == null && (t = ""), i = t;
    }
    A._wrapperState = { initialValue: fA(i) };
  }
  function df(A, t) {
    var i = fA(t.value), a = fA(t.defaultValue);
    i != null && (i = "" + i, i !== A.value && (A.value = i), t.defaultValue == null && A.defaultValue !== i && (A.defaultValue = i)), a != null && (A.defaultValue = "" + a);
  }
  function Bf(A) {
    var t = A.textContent;
    t === A._wrapperState.initialValue && t !== "" && t !== null && (A.value = t);
  }
  function gf(A) {
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
    return A == null || A === "http://www.w3.org/1999/xhtml" ? gf(t) : A === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : A;
  }
  var qo, pf = function(A) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, a, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return A(t, i, a, c);
      });
    } : A;
  }(function(A, t) {
    if (A.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in A) A.innerHTML = t;
    else {
      for (qo = qo || document.createElement("div"), qo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = qo.firstChild; A.firstChild; ) A.removeChild(A.firstChild);
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
    strokeWidth: !0
  }, W0 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Nn).forEach(function(A) {
    W0.forEach(function(t) {
      t = t + A.charAt(0).toUpperCase() + A.substring(1), Nn[t] = Nn[A];
    });
  });
  function wf(A, t, i) {
    return t == null || typeof t == "boolean" || t === "" ? "" : i || typeof t != "number" || t === 0 || Nn.hasOwnProperty(A) && Nn[A] ? ("" + t).trim() : t + "px";
  }
  function hf(A, t) {
    A = A.style;
    for (var i in t) if (t.hasOwnProperty(i)) {
      var a = i.indexOf("--") === 0, c = wf(i, t[i], a);
      i === "float" && (i = "cssFloat"), a ? A.setProperty(i, c) : A[i] = c;
    }
  }
  var j0 = j({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ha(A, t) {
    if (t) {
      if (j0[A] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(n(137, A));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(n(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(n(61));
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
    return A = A.target || A.srcElement || window, A.correspondingUseElement && (A = A.correspondingUseElement), A.nodeType === 3 ? A.parentNode : A;
  }
  var Ta = null, _r = null, Vr = null;
  function vf(A) {
    if (A = so(A)) {
      if (typeof Ta != "function") throw Error(n(280));
      var t = A.stateNode;
      t && (t = Qi(t), Ta(A.stateNode, A.type, t));
    }
  }
  function mf(A) {
    _r ? Vr ? Vr.push(A) : Vr = [A] : _r = A;
  }
  function Cf() {
    if (_r) {
      var A = _r, t = Vr;
      if (Vr = _r = null, vf(A), t) for (A = 0; A < t.length; A++) vf(t[A]);
    }
  }
  function Qf(A, t) {
    return A(t);
  }
  function yf() {
  }
  var Da = !1;
  function Uf(A, t, i) {
    if (Da) return A(t, i);
    Da = !0;
    try {
      return Qf(A, t, i);
    } finally {
      Da = !1, (_r !== null || Vr !== null) && (yf(), Cf());
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
        (a = !a.disabled) || (A = A.type, a = !(A === "button" || A === "input" || A === "select" || A === "textarea")), A = !a;
        break A;
      default:
        A = !1;
    }
    if (A) return null;
    if (i && typeof i != "function") throw Error(n(231, t, typeof i));
    return i;
  }
  var Ka = !1;
  if (f) try {
    var Pn = {};
    Object.defineProperty(Pn, "passive", { get: function() {
      Ka = !0;
    } }), window.addEventListener("test", Pn, Pn), window.removeEventListener("test", Pn, Pn);
  } catch {
    Ka = !1;
  }
  function X0(A, t, i, a, c, d, w, y, x) {
    var D = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(i, D);
    } catch (V) {
      this.onError(V);
    }
  }
  var _n = !1, Ai = null, ei = !1, ka = null, z0 = { onError: function(A) {
    _n = !0, Ai = A;
  } };
  function J0(A, t, i, a, c, d, w, y, x) {
    _n = !1, Ai = null, X0.apply(z0, arguments);
  }
  function Y0(A, t, i, a, c, d, w, y, x) {
    if (J0.apply(this, arguments), _n) {
      if (_n) {
        var D = Ai;
        _n = !1, Ai = null;
      } else throw Error(n(198));
      ei || (ei = !0, ka = D);
    }
  }
  function pr(A) {
    var t = A, i = A;
    if (A.alternate) for (; t.return; ) t = t.return;
    else {
      A = t;
      do
        t = A, t.flags & 4098 && (i = t.return), A = t.return;
      while (A);
    }
    return t.tag === 3 ? i : null;
  }
  function Ff(A) {
    if (A.tag === 13) {
      var t = A.memoizedState;
      if (t === null && (A = A.alternate, A !== null && (t = A.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Ef(A) {
    if (pr(A) !== A) throw Error(n(188));
  }
  function Z0(A) {
    var t = A.alternate;
    if (!t) {
      if (t = pr(A), t === null) throw Error(n(188));
      return t !== A ? null : A;
    }
    for (var i = A, a = t; ; ) {
      var c = i.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (a = c.return, a !== null) {
          i = a;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === i) return Ef(c), A;
          if (d === a) return Ef(c), t;
          d = d.sibling;
        }
        throw Error(n(188));
      }
      if (i.return !== a.return) i = c, a = d;
      else {
        for (var w = !1, y = c.child; y; ) {
          if (y === i) {
            w = !0, i = c, a = d;
            break;
          }
          if (y === a) {
            w = !0, a = c, i = d;
            break;
          }
          y = y.sibling;
        }
        if (!w) {
          for (y = d.child; y; ) {
            if (y === i) {
              w = !0, i = d, a = c;
              break;
            }
            if (y === a) {
              w = !0, a = d, i = c;
              break;
            }
            y = y.sibling;
          }
          if (!w) throw Error(n(189));
        }
      }
      if (i.alternate !== a) throw Error(n(190));
    }
    if (i.tag !== 3) throw Error(n(188));
    return i.stateNode.current === i ? A : t;
  }
  function xf(A) {
    return A = Z0(A), A !== null ? If(A) : null;
  }
  function If(A) {
    if (A.tag === 5 || A.tag === 6) return A;
    for (A = A.child; A !== null; ) {
      var t = If(A);
      if (t !== null) return t;
      A = A.sibling;
    }
    return null;
  }
  var Hf = r.unstable_scheduleCallback, Sf = r.unstable_cancelCallback, $0 = r.unstable_shouldYield, q0 = r.unstable_requestPaint, GA = r.unstable_now, Av = r.unstable_getCurrentPriorityLevel, Ra = r.unstable_ImmediatePriority, bf = r.unstable_UserBlockingPriority, ti = r.unstable_NormalPriority, ev = r.unstable_LowPriority, Lf = r.unstable_IdlePriority, ri = null, rt = null;
  function tv(A) {
    if (rt && typeof rt.onCommitFiberRoot == "function") try {
      rt.onCommitFiberRoot(ri, A, void 0, (A.current.flags & 128) === 128);
    } catch {
    }
  }
  var We = Math.clz32 ? Math.clz32 : ov, rv = Math.log, nv = Math.LN2;
  function ov(A) {
    return A >>>= 0, A === 0 ? 32 : 31 - (rv(A) / nv | 0) | 0;
  }
  var ni = 64, oi = 4194304;
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
    var a = 0, c = A.suspendedLanes, d = A.pingedLanes, w = i & 268435455;
    if (w !== 0) {
      var y = w & ~c;
      y !== 0 ? a = Vn(y) : (d &= w, d !== 0 && (a = Vn(d)));
    } else w = i & ~c, w !== 0 ? a = Vn(w) : d !== 0 && (a = Vn(d));
    if (a === 0) return 0;
    if (t !== 0 && t !== a && !(t & c) && (c = a & -a, d = t & -t, c >= d || c === 16 && (d & 4194240) !== 0)) return t;
    if (a & 4 && (a |= i & 16), t = A.entangledLanes, t !== 0) for (A = A.entanglements, t &= a; 0 < t; ) i = 31 - We(t), c = 1 << i, a |= A[i], t &= ~c;
    return a;
  }
  function iv(A, t) {
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
  function sv(A, t) {
    for (var i = A.suspendedLanes, a = A.pingedLanes, c = A.expirationTimes, d = A.pendingLanes; 0 < d; ) {
      var w = 31 - We(d), y = 1 << w, x = c[w];
      x === -1 ? (!(y & i) || y & a) && (c[w] = iv(y, t)) : x <= t && (A.expiredLanes |= y), d &= ~y;
    }
  }
  function Oa(A) {
    return A = A.pendingLanes & -1073741825, A !== 0 ? A : A & 1073741824 ? 1073741824 : 0;
  }
  function Tf() {
    var A = ni;
    return ni <<= 1, !(ni & 4194240) && (ni = 64), A;
  }
  function Na(A) {
    for (var t = [], i = 0; 31 > i; i++) t.push(A);
    return t;
  }
  function Gn(A, t, i) {
    A.pendingLanes |= t, t !== 536870912 && (A.suspendedLanes = 0, A.pingedLanes = 0), A = A.eventTimes, t = 31 - We(t), A[t] = i;
  }
  function av(A, t) {
    var i = A.pendingLanes & ~t;
    A.pendingLanes = t, A.suspendedLanes = 0, A.pingedLanes = 0, A.expiredLanes &= t, A.mutableReadLanes &= t, A.entangledLanes &= t, t = A.entanglements;
    var a = A.eventTimes;
    for (A = A.expirationTimes; 0 < i; ) {
      var c = 31 - We(i), d = 1 << c;
      t[c] = 0, a[c] = -1, A[c] = -1, i &= ~d;
    }
  }
  function Ma(A, t) {
    var i = A.entangledLanes |= t;
    for (A = A.entanglements; i; ) {
      var a = 31 - We(i), c = 1 << a;
      c & t | A[a] & t && (A[a] |= t), i &= ~c;
    }
  }
  var HA = 0;
  function Df(A) {
    return A &= -A, 1 < A ? 4 < A ? A & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Kf, Pa, kf, Rf, Of, _a = !1, si = [], bt = null, Lt = null, Tt = null, Wn = /* @__PURE__ */ new Map(), jn = /* @__PURE__ */ new Map(), Dt = [], lv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Nf(A, t) {
    switch (A) {
      case "focusin":
      case "focusout":
        bt = null;
        break;
      case "dragenter":
      case "dragleave":
        Lt = null;
        break;
      case "mouseover":
      case "mouseout":
        Tt = null;
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
  function Xn(A, t, i, a, c, d) {
    return A === null || A.nativeEvent !== d ? (A = { blockedOn: t, domEventName: i, eventSystemFlags: a, nativeEvent: d, targetContainers: [c] }, t !== null && (t = so(t), t !== null && Pa(t)), A) : (A.eventSystemFlags |= a, t = A.targetContainers, c !== null && t.indexOf(c) === -1 && t.push(c), A);
  }
  function cv(A, t, i, a, c) {
    switch (t) {
      case "focusin":
        return bt = Xn(bt, A, t, i, a, c), !0;
      case "dragenter":
        return Lt = Xn(Lt, A, t, i, a, c), !0;
      case "mouseover":
        return Tt = Xn(Tt, A, t, i, a, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Wn.set(d, Xn(Wn.get(d) || null, A, t, i, a, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, jn.set(d, Xn(jn.get(d) || null, A, t, i, a, c)), !0;
    }
    return !1;
  }
  function Mf(A) {
    var t = wr(A.target);
    if (t !== null) {
      var i = pr(t);
      if (i !== null) {
        if (t = i.tag, t === 13) {
          if (t = Ff(i), t !== null) {
            A.blockedOn = t, Of(A.priority, function() {
              kf(i);
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
        ba = a, i.target.dispatchEvent(a), ba = null;
      } else return t = so(i), t !== null && Pa(t), A.blockedOn = i, !1;
      t.shift();
    }
    return !0;
  }
  function Pf(A, t, i) {
    ai(A) && i.delete(t);
  }
  function uv() {
    _a = !1, bt !== null && ai(bt) && (bt = null), Lt !== null && ai(Lt) && (Lt = null), Tt !== null && ai(Tt) && (Tt = null), Wn.forEach(Pf), jn.forEach(Pf);
  }
  function zn(A, t) {
    A.blockedOn === t && (A.blockedOn = null, _a || (_a = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, uv)));
  }
  function Jn(A) {
    function t(c) {
      return zn(c, A);
    }
    if (0 < si.length) {
      zn(si[0], A);
      for (var i = 1; i < si.length; i++) {
        var a = si[i];
        a.blockedOn === A && (a.blockedOn = null);
      }
    }
    for (bt !== null && zn(bt, A), Lt !== null && zn(Lt, A), Tt !== null && zn(Tt, A), Wn.forEach(t), jn.forEach(t), i = 0; i < Dt.length; i++) a = Dt[i], a.blockedOn === A && (a.blockedOn = null);
    for (; 0 < Dt.length && (i = Dt[0], i.blockedOn === null); ) Mf(i), i.blockedOn === null && Dt.shift();
  }
  var Gr = K.ReactCurrentBatchConfig, li = !0;
  function fv(A, t, i, a) {
    var c = HA, d = Gr.transition;
    Gr.transition = null;
    try {
      HA = 1, Va(A, t, i, a);
    } finally {
      HA = c, Gr.transition = d;
    }
  }
  function dv(A, t, i, a) {
    var c = HA, d = Gr.transition;
    Gr.transition = null;
    try {
      HA = 4, Va(A, t, i, a);
    } finally {
      HA = c, Gr.transition = d;
    }
  }
  function Va(A, t, i, a) {
    if (li) {
      var c = Ga(A, t, i, a);
      if (c === null) sl(A, t, a, ci, i), Nf(A, a);
      else if (cv(c, A, t, i, a)) a.stopPropagation();
      else if (Nf(A, a), t & 4 && -1 < lv.indexOf(A)) {
        for (; c !== null; ) {
          var d = so(c);
          if (d !== null && Kf(d), d = Ga(A, t, i, a), d === null && sl(A, t, a, ci, i), d === c) break;
          c = d;
        }
        c !== null && a.stopPropagation();
      } else sl(A, t, a, null, i);
    }
  }
  var ci = null;
  function Ga(A, t, i, a) {
    if (ci = null, A = La(a), A = wr(A), A !== null) if (t = pr(A), t === null) A = null;
    else if (i = t.tag, i === 13) {
      if (A = Ff(t), A !== null) return A;
      A = null;
    } else if (i === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      A = null;
    } else t !== A && (A = null);
    return ci = A, null;
  }
  function _f(A) {
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
        switch (Av()) {
          case Ra:
            return 1;
          case bf:
            return 4;
          case ti:
          case ev:
            return 16;
          case Lf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Kt = null, Wa = null, ui = null;
  function Vf() {
    if (ui) return ui;
    var A, t = Wa, i = t.length, a, c = "value" in Kt ? Kt.value : Kt.textContent, d = c.length;
    for (A = 0; A < i && t[A] === c[A]; A++) ;
    var w = i - A;
    for (a = 1; a <= w && t[i - a] === c[d - a]; a++) ;
    return ui = c.slice(A, 1 < a ? 1 - a : void 0);
  }
  function fi(A) {
    var t = A.keyCode;
    return "charCode" in A ? (A = A.charCode, A === 0 && t === 13 && (A = 13)) : A = t, A === 10 && (A = 13), 32 <= A || A === 13 ? A : 0;
  }
  function di() {
    return !0;
  }
  function Gf() {
    return !1;
  }
  function xe(A) {
    function t(i, a, c, d, w) {
      this._reactName = i, this._targetInst = c, this.type = a, this.nativeEvent = d, this.target = w, this.currentTarget = null;
      for (var y in A) A.hasOwnProperty(y) && (i = A[y], this[y] = i ? i(d) : d[y]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? di : Gf, this.isPropagationStopped = Gf, this;
    }
    return j(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var i = this.nativeEvent;
      i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = di);
    }, stopPropagation: function() {
      var i = this.nativeEvent;
      i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = di);
    }, persist: function() {
    }, isPersistent: di }), t;
  }
  var Wr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(A) {
    return A.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ja = xe(Wr), Yn = j({}, Wr, { view: 0, detail: 0 }), Bv = xe(Yn), Xa, za, Zn, Bi = j({}, Yn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ya, button: 0, buttons: 0, relatedTarget: function(A) {
    return A.relatedTarget === void 0 ? A.fromElement === A.srcElement ? A.toElement : A.fromElement : A.relatedTarget;
  }, movementX: function(A) {
    return "movementX" in A ? A.movementX : (A !== Zn && (Zn && A.type === "mousemove" ? (Xa = A.screenX - Zn.screenX, za = A.screenY - Zn.screenY) : za = Xa = 0, Zn = A), Xa);
  }, movementY: function(A) {
    return "movementY" in A ? A.movementY : za;
  } }), Wf = xe(Bi), gv = j({}, Bi, { dataTransfer: 0 }), pv = xe(gv), wv = j({}, Yn, { relatedTarget: 0 }), Ja = xe(wv), hv = j({}, Wr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), vv = xe(hv), mv = j({}, Wr, { clipboardData: function(A) {
    return "clipboardData" in A ? A.clipboardData : window.clipboardData;
  } }), Cv = xe(mv), Qv = j({}, Wr, { data: 0 }), jf = xe(Qv), yv = {
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
    MozPrintableKey: "Unidentified"
  }, Uv = {
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
    224: "Meta"
  }, Fv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ev(A) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(A) : (A = Fv[A]) ? !!t[A] : !1;
  }
  function Ya() {
    return Ev;
  }
  var xv = j({}, Yn, { key: function(A) {
    if (A.key) {
      var t = yv[A.key] || A.key;
      if (t !== "Unidentified") return t;
    }
    return A.type === "keypress" ? (A = fi(A), A === 13 ? "Enter" : String.fromCharCode(A)) : A.type === "keydown" || A.type === "keyup" ? Uv[A.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ya, charCode: function(A) {
    return A.type === "keypress" ? fi(A) : 0;
  }, keyCode: function(A) {
    return A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
  }, which: function(A) {
    return A.type === "keypress" ? fi(A) : A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
  } }), Iv = xe(xv), Hv = j({}, Bi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Xf = xe(Hv), Sv = j({}, Yn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ya }), bv = xe(Sv), Lv = j({}, Wr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Tv = xe(Lv), Dv = j({}, Bi, {
    deltaX: function(A) {
      return "deltaX" in A ? A.deltaX : "wheelDeltaX" in A ? -A.wheelDeltaX : 0;
    },
    deltaY: function(A) {
      return "deltaY" in A ? A.deltaY : "wheelDeltaY" in A ? -A.wheelDeltaY : "wheelDelta" in A ? -A.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Kv = xe(Dv), kv = [9, 13, 27, 32], Za = f && "CompositionEvent" in window, $n = null;
  f && "documentMode" in document && ($n = document.documentMode);
  var Rv = f && "TextEvent" in window && !$n, zf = f && (!Za || $n && 8 < $n && 11 >= $n), Jf = " ", Yf = !1;
  function Zf(A, t) {
    switch (A) {
      case "keyup":
        return kv.indexOf(t.keyCode) !== -1;
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
  function $f(A) {
    return A = A.detail, typeof A == "object" && "data" in A ? A.data : null;
  }
  var jr = !1;
  function Ov(A, t) {
    switch (A) {
      case "compositionend":
        return $f(t);
      case "keypress":
        return t.which !== 32 ? null : (Yf = !0, Jf);
      case "textInput":
        return A = t.data, A === Jf && Yf ? null : A;
      default:
        return null;
    }
  }
  function Nv(A, t) {
    if (jr) return A === "compositionend" || !Za && Zf(A, t) ? (A = Vf(), ui = Wa = Kt = null, jr = !1, A) : null;
    switch (A) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return zf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Mv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function qf(A) {
    var t = A && A.nodeName && A.nodeName.toLowerCase();
    return t === "input" ? !!Mv[A.type] : t === "textarea";
  }
  function Ad(A, t, i, a) {
    mf(a), t = vi(t, "onChange"), 0 < t.length && (i = new ja("onChange", "change", null, i, a), A.push({ event: i, listeners: t }));
  }
  var qn = null, Ao = null;
  function Pv(A) {
    hd(A, 0);
  }
  function gi(A) {
    var t = Zr(A);
    if (NA(t)) return A;
  }
  function _v(A, t) {
    if (A === "change") return t;
  }
  var ed = !1;
  if (f) {
    var $a;
    if (f) {
      var qa = "oninput" in document;
      if (!qa) {
        var td = document.createElement("div");
        td.setAttribute("oninput", "return;"), qa = typeof td.oninput == "function";
      }
      $a = qa;
    } else $a = !1;
    ed = $a && (!document.documentMode || 9 < document.documentMode);
  }
  function rd() {
    qn && (qn.detachEvent("onpropertychange", nd), Ao = qn = null);
  }
  function nd(A) {
    if (A.propertyName === "value" && gi(Ao)) {
      var t = [];
      Ad(t, Ao, A, La(A)), Uf(Pv, t);
    }
  }
  function Vv(A, t, i) {
    A === "focusin" ? (rd(), qn = t, Ao = i, qn.attachEvent("onpropertychange", nd)) : A === "focusout" && rd();
  }
  function Gv(A) {
    if (A === "selectionchange" || A === "keyup" || A === "keydown") return gi(Ao);
  }
  function Wv(A, t) {
    if (A === "click") return gi(t);
  }
  function jv(A, t) {
    if (A === "input" || A === "change") return gi(t);
  }
  function Xv(A, t) {
    return A === t && (A !== 0 || 1 / A === 1 / t) || A !== A && t !== t;
  }
  var je = typeof Object.is == "function" ? Object.is : Xv;
  function eo(A, t) {
    if (je(A, t)) return !0;
    if (typeof A != "object" || A === null || typeof t != "object" || t === null) return !1;
    var i = Object.keys(A), a = Object.keys(t);
    if (i.length !== a.length) return !1;
    for (a = 0; a < i.length; a++) {
      var c = i[a];
      if (!B.call(t, c) || !je(A[c], t[c])) return !1;
    }
    return !0;
  }
  function od(A) {
    for (; A && A.firstChild; ) A = A.firstChild;
    return A;
  }
  function id(A, t) {
    var i = od(A);
    A = 0;
    for (var a; i; ) {
      if (i.nodeType === 3) {
        if (a = A + i.textContent.length, A <= t && a >= t) return { node: i, offset: t - A };
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
      i = od(i);
    }
  }
  function sd(A, t) {
    return A && t ? A === t ? !0 : A && A.nodeType === 3 ? !1 : t && t.nodeType === 3 ? sd(A, t.parentNode) : "contains" in A ? A.contains(t) : A.compareDocumentPosition ? !!(A.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ad() {
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
    return t && (t === "input" && (A.type === "text" || A.type === "search" || A.type === "tel" || A.type === "url" || A.type === "password") || t === "textarea" || A.contentEditable === "true");
  }
  function zv(A) {
    var t = ad(), i = A.focusedElem, a = A.selectionRange;
    if (t !== i && i && i.ownerDocument && sd(i.ownerDocument.documentElement, i)) {
      if (a !== null && Al(i)) {
        if (t = a.start, A = a.end, A === void 0 && (A = t), "selectionStart" in i) i.selectionStart = t, i.selectionEnd = Math.min(A, i.value.length);
        else if (A = (t = i.ownerDocument || document) && t.defaultView || window, A.getSelection) {
          A = A.getSelection();
          var c = i.textContent.length, d = Math.min(a.start, c);
          a = a.end === void 0 ? d : Math.min(a.end, c), !A.extend && d > a && (c = a, a = d, d = c), c = id(i, d);
          var w = id(
            i,
            a
          );
          c && w && (A.rangeCount !== 1 || A.anchorNode !== c.node || A.anchorOffset !== c.offset || A.focusNode !== w.node || A.focusOffset !== w.offset) && (t = t.createRange(), t.setStart(c.node, c.offset), A.removeAllRanges(), d > a ? (A.addRange(t), A.extend(w.node, w.offset)) : (t.setEnd(w.node, w.offset), A.addRange(t)));
        }
      }
      for (t = [], A = i; A = A.parentNode; ) A.nodeType === 1 && t.push({ element: A, left: A.scrollLeft, top: A.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < t.length; i++) A = t[i], A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
    }
  }
  var Jv = f && "documentMode" in document && 11 >= document.documentMode, Xr = null, el = null, to = null, tl = !1;
  function ld(A, t, i) {
    var a = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    tl || Xr == null || Xr !== oe(a) || (a = Xr, "selectionStart" in a && Al(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), to && eo(to, a) || (to = a, a = vi(el, "onSelect"), 0 < a.length && (t = new ja("onSelect", "select", null, t, i), A.push({ event: t, listeners: a }), t.target = Xr)));
  }
  function pi(A, t) {
    var i = {};
    return i[A.toLowerCase()] = t.toLowerCase(), i["Webkit" + A] = "webkit" + t, i["Moz" + A] = "moz" + t, i;
  }
  var zr = { animationend: pi("Animation", "AnimationEnd"), animationiteration: pi("Animation", "AnimationIteration"), animationstart: pi("Animation", "AnimationStart"), transitionend: pi("Transition", "TransitionEnd") }, rl = {}, cd = {};
  f && (cd = document.createElement("div").style, "AnimationEvent" in window || (delete zr.animationend.animation, delete zr.animationiteration.animation, delete zr.animationstart.animation), "TransitionEvent" in window || delete zr.transitionend.transition);
  function wi(A) {
    if (rl[A]) return rl[A];
    if (!zr[A]) return A;
    var t = zr[A], i;
    for (i in t) if (t.hasOwnProperty(i) && i in cd) return rl[A] = t[i];
    return A;
  }
  var ud = wi("animationend"), fd = wi("animationiteration"), dd = wi("animationstart"), Bd = wi("transitionend"), gd = /* @__PURE__ */ new Map(), pd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function kt(A, t) {
    gd.set(A, t), l(t, [A]);
  }
  for (var nl = 0; nl < pd.length; nl++) {
    var ol = pd[nl], Yv = ol.toLowerCase(), Zv = ol[0].toUpperCase() + ol.slice(1);
    kt(Yv, "on" + Zv);
  }
  kt(ud, "onAnimationEnd"), kt(fd, "onAnimationIteration"), kt(dd, "onAnimationStart"), kt("dblclick", "onDoubleClick"), kt("focusin", "onFocus"), kt("focusout", "onBlur"), kt(Bd, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ro = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), $v = new Set("cancel close invalid load scroll toggle".split(" ").concat(ro));
  function wd(A, t, i) {
    var a = A.type || "unknown-event";
    A.currentTarget = i, Y0(a, t, void 0, A), A.currentTarget = null;
  }
  function hd(A, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < A.length; i++) {
      var a = A[i], c = a.event;
      a = a.listeners;
      A: {
        var d = void 0;
        if (t) for (var w = a.length - 1; 0 <= w; w--) {
          var y = a[w], x = y.instance, D = y.currentTarget;
          if (y = y.listener, x !== d && c.isPropagationStopped()) break A;
          wd(c, y, D), d = x;
        }
        else for (w = 0; w < a.length; w++) {
          if (y = a[w], x = y.instance, D = y.currentTarget, y = y.listener, x !== d && c.isPropagationStopped()) break A;
          wd(c, y, D), d = x;
        }
      }
    }
    if (ei) throw A = ka, ei = !1, ka = null, A;
  }
  function DA(A, t) {
    var i = t[dl];
    i === void 0 && (i = t[dl] = /* @__PURE__ */ new Set());
    var a = A + "__bubble";
    i.has(a) || (vd(t, A, 2, !1), i.add(a));
  }
  function il(A, t, i) {
    var a = 0;
    t && (a |= 4), vd(i, A, a, t);
  }
  var hi = "_reactListening" + Math.random().toString(36).slice(2);
  function no(A) {
    if (!A[hi]) {
      A[hi] = !0, o.forEach(function(i) {
        i !== "selectionchange" && ($v.has(i) || il(i, !1, A), il(i, !0, A));
      });
      var t = A.nodeType === 9 ? A : A.ownerDocument;
      t === null || t[hi] || (t[hi] = !0, il("selectionchange", !1, t));
    }
  }
  function vd(A, t, i, a) {
    switch (_f(t)) {
      case 1:
        var c = fv;
        break;
      case 4:
        c = dv;
        break;
      default:
        c = Va;
    }
    i = c.bind(null, t, i, A), c = void 0, !Ka || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (c = !0), a ? c !== void 0 ? A.addEventListener(t, i, { capture: !0, passive: c }) : A.addEventListener(t, i, !0) : c !== void 0 ? A.addEventListener(t, i, { passive: c }) : A.addEventListener(t, i, !1);
  }
  function sl(A, t, i, a, c) {
    var d = a;
    if (!(t & 1) && !(t & 2) && a !== null) A: for (; ; ) {
      if (a === null) return;
      var w = a.tag;
      if (w === 3 || w === 4) {
        var y = a.stateNode.containerInfo;
        if (y === c || y.nodeType === 8 && y.parentNode === c) break;
        if (w === 4) for (w = a.return; w !== null; ) {
          var x = w.tag;
          if ((x === 3 || x === 4) && (x = w.stateNode.containerInfo, x === c || x.nodeType === 8 && x.parentNode === c)) return;
          w = w.return;
        }
        for (; y !== null; ) {
          if (w = wr(y), w === null) return;
          if (x = w.tag, x === 5 || x === 6) {
            a = d = w;
            continue A;
          }
          y = y.parentNode;
        }
      }
      a = a.return;
    }
    Uf(function() {
      var D = d, V = La(i), G = [];
      A: {
        var _ = gd.get(A);
        if (_ !== void 0) {
          var AA = ja, iA = A;
          switch (A) {
            case "keypress":
              if (fi(i) === 0) break A;
            case "keydown":
            case "keyup":
              AA = Iv;
              break;
            case "focusin":
              iA = "focus", AA = Ja;
              break;
            case "focusout":
              iA = "blur", AA = Ja;
              break;
            case "beforeblur":
            case "afterblur":
              AA = Ja;
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
              AA = Wf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              AA = pv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              AA = bv;
              break;
            case ud:
            case fd:
            case dd:
              AA = vv;
              break;
            case Bd:
              AA = Tv;
              break;
            case "scroll":
              AA = Bv;
              break;
            case "wheel":
              AA = Kv;
              break;
            case "copy":
            case "cut":
            case "paste":
              AA = Cv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              AA = Xf;
          }
          var aA = (t & 4) !== 0, WA = !aA && A === "scroll", L = aA ? _ !== null ? _ + "Capture" : null : _;
          aA = [];
          for (var S = D, T; S !== null; ) {
            T = S;
            var z = T.stateNode;
            if (T.tag === 5 && z !== null && (T = z, L !== null && (z = Mn(S, L), z != null && aA.push(oo(S, z, T)))), WA) break;
            S = S.return;
          }
          0 < aA.length && (_ = new AA(_, iA, null, i, V), G.push({ event: _, listeners: aA }));
        }
      }
      if (!(t & 7)) {
        A: {
          if (_ = A === "mouseover" || A === "pointerover", AA = A === "mouseout" || A === "pointerout", _ && i !== ba && (iA = i.relatedTarget || i.fromElement) && (wr(iA) || iA[Bt])) break A;
          if ((AA || _) && (_ = V.window === V ? V : (_ = V.ownerDocument) ? _.defaultView || _.parentWindow : window, AA ? (iA = i.relatedTarget || i.toElement, AA = D, iA = iA ? wr(iA) : null, iA !== null && (WA = pr(iA), iA !== WA || iA.tag !== 5 && iA.tag !== 6) && (iA = null)) : (AA = null, iA = D), AA !== iA)) {
            if (aA = Wf, z = "onMouseLeave", L = "onMouseEnter", S = "mouse", (A === "pointerout" || A === "pointerover") && (aA = Xf, z = "onPointerLeave", L = "onPointerEnter", S = "pointer"), WA = AA == null ? _ : Zr(AA), T = iA == null ? _ : Zr(iA), _ = new aA(z, S + "leave", AA, i, V), _.target = WA, _.relatedTarget = T, z = null, wr(V) === D && (aA = new aA(L, S + "enter", iA, i, V), aA.target = T, aA.relatedTarget = WA, z = aA), WA = z, AA && iA) e: {
              for (aA = AA, L = iA, S = 0, T = aA; T; T = Jr(T)) S++;
              for (T = 0, z = L; z; z = Jr(z)) T++;
              for (; 0 < S - T; ) aA = Jr(aA), S--;
              for (; 0 < T - S; ) L = Jr(L), T--;
              for (; S--; ) {
                if (aA === L || L !== null && aA === L.alternate) break e;
                aA = Jr(aA), L = Jr(L);
              }
              aA = null;
            }
            else aA = null;
            AA !== null && md(G, _, AA, aA, !1), iA !== null && WA !== null && md(G, WA, iA, aA, !0);
          }
        }
        A: {
          if (_ = D ? Zr(D) : window, AA = _.nodeName && _.nodeName.toLowerCase(), AA === "select" || AA === "input" && _.type === "file") var lA = _v;
          else if (qf(_)) if (ed) lA = jv;
          else {
            lA = Gv;
            var dA = Vv;
          }
          else (AA = _.nodeName) && AA.toLowerCase() === "input" && (_.type === "checkbox" || _.type === "radio") && (lA = Wv);
          if (lA && (lA = lA(A, D))) {
            Ad(G, lA, i, V);
            break A;
          }
          dA && dA(A, _, D), A === "focusout" && (dA = _._wrapperState) && dA.controlled && _.type === "number" && Ea(_, "number", _.value);
        }
        switch (dA = D ? Zr(D) : window, A) {
          case "focusin":
            (qf(dA) || dA.contentEditable === "true") && (Xr = dA, el = D, to = null);
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
            tl = !1, ld(G, i, V);
            break;
          case "selectionchange":
            if (Jv) break;
          case "keydown":
          case "keyup":
            ld(G, i, V);
        }
        var BA;
        if (Za) A: {
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
        else jr ? Zf(A, i) && (vA = "onCompositionEnd") : A === "keydown" && i.keyCode === 229 && (vA = "onCompositionStart");
        vA && (zf && i.locale !== "ko" && (jr || vA !== "onCompositionStart" ? vA === "onCompositionEnd" && jr && (BA = Vf()) : (Kt = V, Wa = "value" in Kt ? Kt.value : Kt.textContent, jr = !0)), dA = vi(D, vA), 0 < dA.length && (vA = new jf(vA, A, null, i, V), G.push({ event: vA, listeners: dA }), BA ? vA.data = BA : (BA = $f(i), BA !== null && (vA.data = BA)))), (BA = Rv ? Ov(A, i) : Nv(A, i)) && (D = vi(D, "onBeforeInput"), 0 < D.length && (V = new jf("onBeforeInput", "beforeinput", null, i, V), G.push({ event: V, listeners: D }), V.data = BA));
      }
      hd(G, t);
    });
  }
  function oo(A, t, i) {
    return { instance: A, listener: t, currentTarget: i };
  }
  function vi(A, t) {
    for (var i = t + "Capture", a = []; A !== null; ) {
      var c = A, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Mn(A, i), d != null && a.unshift(oo(A, d, c)), d = Mn(A, t), d != null && a.push(oo(A, d, c))), A = A.return;
    }
    return a;
  }
  function Jr(A) {
    if (A === null) return null;
    do
      A = A.return;
    while (A && A.tag !== 5);
    return A || null;
  }
  function md(A, t, i, a, c) {
    for (var d = t._reactName, w = []; i !== null && i !== a; ) {
      var y = i, x = y.alternate, D = y.stateNode;
      if (x !== null && x === a) break;
      y.tag === 5 && D !== null && (y = D, c ? (x = Mn(i, d), x != null && w.unshift(oo(i, x, y))) : c || (x = Mn(i, d), x != null && w.push(oo(i, x, y)))), i = i.return;
    }
    w.length !== 0 && A.push({ event: t, listeners: w });
  }
  var qv = /\r\n?/g, Am = /\u0000|\uFFFD/g;
  function Cd(A) {
    return (typeof A == "string" ? A : "" + A).replace(qv, `
`).replace(Am, "");
  }
  function mi(A, t, i) {
    if (t = Cd(t), Cd(A) !== t && i) throw Error(n(425));
  }
  function Ci() {
  }
  var al = null, ll = null;
  function cl(A, t) {
    return A === "textarea" || A === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ul = typeof setTimeout == "function" ? setTimeout : void 0, em = typeof clearTimeout == "function" ? clearTimeout : void 0, Qd = typeof Promise == "function" ? Promise : void 0, tm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qd < "u" ? function(A) {
    return Qd.resolve(null).then(A).catch(rm);
  } : ul;
  function rm(A) {
    setTimeout(function() {
      throw A;
    });
  }
  function fl(A, t) {
    var i = t, a = 0;
    do {
      var c = i.nextSibling;
      if (A.removeChild(i), c && c.nodeType === 8) if (i = c.data, i === "/$") {
        if (a === 0) {
          A.removeChild(c), Jn(t);
          return;
        }
        a--;
      } else i !== "$" && i !== "$?" && i !== "$!" || a++;
      i = c;
    } while (i);
    Jn(t);
  }
  function Rt(A) {
    for (; A != null; A = A.nextSibling) {
      var t = A.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = A.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return A;
  }
  function yd(A) {
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
  var Yr = Math.random().toString(36).slice(2), nt = "__reactFiber$" + Yr, io = "__reactProps$" + Yr, Bt = "__reactContainer$" + Yr, dl = "__reactEvents$" + Yr, nm = "__reactListeners$" + Yr, om = "__reactHandles$" + Yr;
  function wr(A) {
    var t = A[nt];
    if (t) return t;
    for (var i = A.parentNode; i; ) {
      if (t = i[Bt] || i[nt]) {
        if (i = t.alternate, t.child !== null || i !== null && i.child !== null) for (A = yd(A); A !== null; ) {
          if (i = A[nt]) return i;
          A = yd(A);
        }
        return t;
      }
      A = i, i = A.parentNode;
    }
    return null;
  }
  function so(A) {
    return A = A[nt] || A[Bt], !A || A.tag !== 5 && A.tag !== 6 && A.tag !== 13 && A.tag !== 3 ? null : A;
  }
  function Zr(A) {
    if (A.tag === 5 || A.tag === 6) return A.stateNode;
    throw Error(n(33));
  }
  function Qi(A) {
    return A[io] || null;
  }
  var Bl = [], $r = -1;
  function Ot(A) {
    return { current: A };
  }
  function KA(A) {
    0 > $r || (A.current = Bl[$r], Bl[$r] = null, $r--);
  }
  function bA(A, t) {
    $r++, Bl[$r] = A.current, A.current = t;
  }
  var Nt = {}, ce = Ot(Nt), me = Ot(!1), hr = Nt;
  function qr(A, t) {
    var i = A.type.contextTypes;
    if (!i) return Nt;
    var a = A.stateNode;
    if (a && a.__reactInternalMemoizedUnmaskedChildContext === t) return a.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in i) c[d] = t[d];
    return a && (A = A.stateNode, A.__reactInternalMemoizedUnmaskedChildContext = t, A.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Ce(A) {
    return A = A.childContextTypes, A != null;
  }
  function yi() {
    KA(me), KA(ce);
  }
  function Ud(A, t, i) {
    if (ce.current !== Nt) throw Error(n(168));
    bA(ce, t), bA(me, i);
  }
  function Fd(A, t, i) {
    var a = A.stateNode;
    if (t = t.childContextTypes, typeof a.getChildContext != "function") return i;
    a = a.getChildContext();
    for (var c in a) if (!(c in t)) throw Error(n(108, Y(A) || "Unknown", c));
    return j({}, i, a);
  }
  function Ui(A) {
    return A = (A = A.stateNode) && A.__reactInternalMemoizedMergedChildContext || Nt, hr = ce.current, bA(ce, A), bA(me, me.current), !0;
  }
  function Ed(A, t, i) {
    var a = A.stateNode;
    if (!a) throw Error(n(169));
    i ? (A = Fd(A, t, hr), a.__reactInternalMemoizedMergedChildContext = A, KA(me), KA(ce), bA(ce, A)) : KA(me), bA(me, i);
  }
  var gt = null, Fi = !1, gl = !1;
  function xd(A) {
    gt === null ? gt = [A] : gt.push(A);
  }
  function im(A) {
    Fi = !0, xd(A);
  }
  function Mt() {
    if (!gl && gt !== null) {
      gl = !0;
      var A = 0, t = HA;
      try {
        var i = gt;
        for (HA = 1; A < i.length; A++) {
          var a = i[A];
          do
            a = a(!0);
          while (a !== null);
        }
        gt = null, Fi = !1;
      } catch (c) {
        throw gt !== null && (gt = gt.slice(A + 1)), Hf(Ra, Mt), c;
      } finally {
        HA = t, gl = !1;
      }
    }
    return null;
  }
  var An = [], en = 0, Ei = null, xi = 0, De = [], Ke = 0, vr = null, pt = 1, wt = "";
  function mr(A, t) {
    An[en++] = xi, An[en++] = Ei, Ei = A, xi = t;
  }
  function Id(A, t, i) {
    De[Ke++] = pt, De[Ke++] = wt, De[Ke++] = vr, vr = A;
    var a = pt;
    A = wt;
    var c = 32 - We(a) - 1;
    a &= ~(1 << c), i += 1;
    var d = 32 - We(t) + c;
    if (30 < d) {
      var w = c - c % 5;
      d = (a & (1 << w) - 1).toString(32), a >>= w, c -= w, pt = 1 << 32 - We(t) + c | i << c | a, wt = d + A;
    } else pt = 1 << d | i << c | a, wt = A;
  }
  function pl(A) {
    A.return !== null && (mr(A, 1), Id(A, 1, 0));
  }
  function wl(A) {
    for (; A === Ei; ) Ei = An[--en], An[en] = null, xi = An[--en], An[en] = null;
    for (; A === vr; ) vr = De[--Ke], De[Ke] = null, wt = De[--Ke], De[Ke] = null, pt = De[--Ke], De[Ke] = null;
  }
  var Ie = null, He = null, RA = !1, Xe = null;
  function Hd(A, t) {
    var i = Ne(5, null, null, 0);
    i.elementType = "DELETED", i.stateNode = t, i.return = A, t = A.deletions, t === null ? (A.deletions = [i], A.flags |= 16) : t.push(i);
  }
  function Sd(A, t) {
    switch (A.tag) {
      case 5:
        var i = A.type;
        return t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (A.stateNode = t, Ie = A, He = Rt(t.firstChild), !0) : !1;
      case 6:
        return t = A.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (A.stateNode = t, Ie = A, He = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (i = vr !== null ? { id: pt, overflow: wt } : null, A.memoizedState = { dehydrated: t, treeContext: i, retryLane: 1073741824 }, i = Ne(18, null, null, 0), i.stateNode = t, i.return = A, A.child = i, Ie = A, He = null, !0) : !1;
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
        if (!Sd(A, t)) {
          if (hl(A)) throw Error(n(418));
          t = Rt(i.nextSibling);
          var a = Ie;
          t && Sd(A, t) ? Hd(a, i) : (A.flags = A.flags & -4097 | 2, RA = !1, Ie = A);
        }
      } else {
        if (hl(A)) throw Error(n(418));
        A.flags = A.flags & -4097 | 2, RA = !1, Ie = A;
      }
    }
  }
  function bd(A) {
    for (A = A.return; A !== null && A.tag !== 5 && A.tag !== 3 && A.tag !== 13; ) A = A.return;
    Ie = A;
  }
  function Ii(A) {
    if (A !== Ie) return !1;
    if (!RA) return bd(A), RA = !0, !1;
    var t;
    if ((t = A.tag !== 3) && !(t = A.tag !== 5) && (t = A.type, t = t !== "head" && t !== "body" && !cl(A.type, A.memoizedProps)), t && (t = He)) {
      if (hl(A)) throw Ld(), Error(n(418));
      for (; t; ) Hd(A, t), t = Rt(t.nextSibling);
    }
    if (bd(A), A.tag === 13) {
      if (A = A.memoizedState, A = A !== null ? A.dehydrated : null, !A) throw Error(n(317));
      A: {
        for (A = A.nextSibling, t = 0; A; ) {
          if (A.nodeType === 8) {
            var i = A.data;
            if (i === "/$") {
              if (t === 0) {
                He = Rt(A.nextSibling);
                break A;
              }
              t--;
            } else i !== "$" && i !== "$!" && i !== "$?" || t++;
          }
          A = A.nextSibling;
        }
        He = null;
      }
    } else He = Ie ? Rt(A.stateNode.nextSibling) : null;
    return !0;
  }
  function Ld() {
    for (var A = He; A; ) A = Rt(A.nextSibling);
  }
  function tn() {
    He = Ie = null, RA = !1;
  }
  function ml(A) {
    Xe === null ? Xe = [A] : Xe.push(A);
  }
  var sm = K.ReactCurrentBatchConfig;
  function ao(A, t, i) {
    if (A = i.ref, A !== null && typeof A != "function" && typeof A != "object") {
      if (i._owner) {
        if (i = i._owner, i) {
          if (i.tag !== 1) throw Error(n(309));
          var a = i.stateNode;
        }
        if (!a) throw Error(n(147, A));
        var c = a, d = "" + A;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === d ? t.ref : (t = function(w) {
          var y = c.refs;
          w === null ? delete y[d] : y[d] = w;
        }, t._stringRef = d, t);
      }
      if (typeof A != "string") throw Error(n(284));
      if (!i._owner) throw Error(n(290, A));
    }
    return A;
  }
  function Hi(A, t) {
    throw A = Object.prototype.toString.call(t), Error(n(31, A === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : A));
  }
  function Td(A) {
    var t = A._init;
    return t(A._payload);
  }
  function Dd(A) {
    function t(L, S) {
      if (A) {
        var T = L.deletions;
        T === null ? (L.deletions = [S], L.flags |= 16) : T.push(S);
      }
    }
    function i(L, S) {
      if (!A) return null;
      for (; S !== null; ) t(L, S), S = S.sibling;
      return null;
    }
    function a(L, S) {
      for (L = /* @__PURE__ */ new Map(); S !== null; ) S.key !== null ? L.set(S.key, S) : L.set(S.index, S), S = S.sibling;
      return L;
    }
    function c(L, S) {
      return L = zt(L, S), L.index = 0, L.sibling = null, L;
    }
    function d(L, S, T) {
      return L.index = T, A ? (T = L.alternate, T !== null ? (T = T.index, T < S ? (L.flags |= 2, S) : T) : (L.flags |= 2, S)) : (L.flags |= 1048576, S);
    }
    function w(L) {
      return A && L.alternate === null && (L.flags |= 2), L;
    }
    function y(L, S, T, z) {
      return S === null || S.tag !== 6 ? (S = uc(T, L.mode, z), S.return = L, S) : (S = c(S, T), S.return = L, S);
    }
    function x(L, S, T, z) {
      var lA = T.type;
      return lA === P ? V(L, S, T.props.children, z, T.key) : S !== null && (S.elementType === lA || typeof lA == "object" && lA !== null && lA.$$typeof === oA && Td(lA) === S.type) ? (z = c(S, T.props), z.ref = ao(L, S, T), z.return = L, z) : (z = qi(T.type, T.key, T.props, null, L.mode, z), z.ref = ao(L, S, T), z.return = L, z);
    }
    function D(L, S, T, z) {
      return S === null || S.tag !== 4 || S.stateNode.containerInfo !== T.containerInfo || S.stateNode.implementation !== T.implementation ? (S = fc(T, L.mode, z), S.return = L, S) : (S = c(S, T.children || []), S.return = L, S);
    }
    function V(L, S, T, z, lA) {
      return S === null || S.tag !== 7 ? (S = Ir(T, L.mode, z, lA), S.return = L, S) : (S = c(S, T), S.return = L, S);
    }
    function G(L, S, T) {
      if (typeof S == "string" && S !== "" || typeof S == "number") return S = uc("" + S, L.mode, T), S.return = L, S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case R:
            return T = qi(S.type, S.key, S.props, null, L.mode, T), T.ref = ao(L, null, S), T.return = L, T;
          case O:
            return S = fc(S, L.mode, T), S.return = L, S;
          case oA:
            var z = S._init;
            return G(L, z(S._payload), T);
        }
        if (Rn(S) || W(S)) return S = Ir(S, L.mode, T, null), S.return = L, S;
        Hi(L, S);
      }
      return null;
    }
    function _(L, S, T, z) {
      var lA = S !== null ? S.key : null;
      if (typeof T == "string" && T !== "" || typeof T == "number") return lA !== null ? null : y(L, S, "" + T, z);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case R:
            return T.key === lA ? x(L, S, T, z) : null;
          case O:
            return T.key === lA ? D(L, S, T, z) : null;
          case oA:
            return lA = T._init, _(
              L,
              S,
              lA(T._payload),
              z
            );
        }
        if (Rn(T) || W(T)) return lA !== null ? null : V(L, S, T, z, null);
        Hi(L, T);
      }
      return null;
    }
    function AA(L, S, T, z, lA) {
      if (typeof z == "string" && z !== "" || typeof z == "number") return L = L.get(T) || null, y(S, L, "" + z, lA);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case R:
            return L = L.get(z.key === null ? T : z.key) || null, x(S, L, z, lA);
          case O:
            return L = L.get(z.key === null ? T : z.key) || null, D(S, L, z, lA);
          case oA:
            var dA = z._init;
            return AA(L, S, T, dA(z._payload), lA);
        }
        if (Rn(z) || W(z)) return L = L.get(T) || null, V(S, L, z, lA, null);
        Hi(S, z);
      }
      return null;
    }
    function iA(L, S, T, z) {
      for (var lA = null, dA = null, BA = S, vA = S = 0, re = null; BA !== null && vA < T.length; vA++) {
        BA.index > vA ? (re = BA, BA = null) : re = BA.sibling;
        var EA = _(L, BA, T[vA], z);
        if (EA === null) {
          BA === null && (BA = re);
          break;
        }
        A && BA && EA.alternate === null && t(L, BA), S = d(EA, S, vA), dA === null ? lA = EA : dA.sibling = EA, dA = EA, BA = re;
      }
      if (vA === T.length) return i(L, BA), RA && mr(L, vA), lA;
      if (BA === null) {
        for (; vA < T.length; vA++) BA = G(L, T[vA], z), BA !== null && (S = d(BA, S, vA), dA === null ? lA = BA : dA.sibling = BA, dA = BA);
        return RA && mr(L, vA), lA;
      }
      for (BA = a(L, BA); vA < T.length; vA++) re = AA(BA, L, vA, T[vA], z), re !== null && (A && re.alternate !== null && BA.delete(re.key === null ? vA : re.key), S = d(re, S, vA), dA === null ? lA = re : dA.sibling = re, dA = re);
      return A && BA.forEach(function(Jt) {
        return t(L, Jt);
      }), RA && mr(L, vA), lA;
    }
    function aA(L, S, T, z) {
      var lA = W(T);
      if (typeof lA != "function") throw Error(n(150));
      if (T = lA.call(T), T == null) throw Error(n(151));
      for (var dA = lA = null, BA = S, vA = S = 0, re = null, EA = T.next(); BA !== null && !EA.done; vA++, EA = T.next()) {
        BA.index > vA ? (re = BA, BA = null) : re = BA.sibling;
        var Jt = _(L, BA, EA.value, z);
        if (Jt === null) {
          BA === null && (BA = re);
          break;
        }
        A && BA && Jt.alternate === null && t(L, BA), S = d(Jt, S, vA), dA === null ? lA = Jt : dA.sibling = Jt, dA = Jt, BA = re;
      }
      if (EA.done) return i(
        L,
        BA
      ), RA && mr(L, vA), lA;
      if (BA === null) {
        for (; !EA.done; vA++, EA = T.next()) EA = G(L, EA.value, z), EA !== null && (S = d(EA, S, vA), dA === null ? lA = EA : dA.sibling = EA, dA = EA);
        return RA && mr(L, vA), lA;
      }
      for (BA = a(L, BA); !EA.done; vA++, EA = T.next()) EA = AA(BA, L, vA, EA.value, z), EA !== null && (A && EA.alternate !== null && BA.delete(EA.key === null ? vA : EA.key), S = d(EA, S, vA), dA === null ? lA = EA : dA.sibling = EA, dA = EA);
      return A && BA.forEach(function(Mm) {
        return t(L, Mm);
      }), RA && mr(L, vA), lA;
    }
    function WA(L, S, T, z) {
      if (typeof T == "object" && T !== null && T.type === P && T.key === null && (T = T.props.children), typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case R:
            A: {
              for (var lA = T.key, dA = S; dA !== null; ) {
                if (dA.key === lA) {
                  if (lA = T.type, lA === P) {
                    if (dA.tag === 7) {
                      i(L, dA.sibling), S = c(dA, T.props.children), S.return = L, L = S;
                      break A;
                    }
                  } else if (dA.elementType === lA || typeof lA == "object" && lA !== null && lA.$$typeof === oA && Td(lA) === dA.type) {
                    i(L, dA.sibling), S = c(dA, T.props), S.ref = ao(L, dA, T), S.return = L, L = S;
                    break A;
                  }
                  i(L, dA);
                  break;
                } else t(L, dA);
                dA = dA.sibling;
              }
              T.type === P ? (S = Ir(T.props.children, L.mode, z, T.key), S.return = L, L = S) : (z = qi(T.type, T.key, T.props, null, L.mode, z), z.ref = ao(L, S, T), z.return = L, L = z);
            }
            return w(L);
          case O:
            A: {
              for (dA = T.key; S !== null; ) {
                if (S.key === dA) if (S.tag === 4 && S.stateNode.containerInfo === T.containerInfo && S.stateNode.implementation === T.implementation) {
                  i(L, S.sibling), S = c(S, T.children || []), S.return = L, L = S;
                  break A;
                } else {
                  i(L, S);
                  break;
                }
                else t(L, S);
                S = S.sibling;
              }
              S = fc(T, L.mode, z), S.return = L, L = S;
            }
            return w(L);
          case oA:
            return dA = T._init, WA(L, S, dA(T._payload), z);
        }
        if (Rn(T)) return iA(L, S, T, z);
        if (W(T)) return aA(L, S, T, z);
        Hi(L, T);
      }
      return typeof T == "string" && T !== "" || typeof T == "number" ? (T = "" + T, S !== null && S.tag === 6 ? (i(L, S.sibling), S = c(S, T), S.return = L, L = S) : (i(L, S), S = uc(T, L.mode, z), S.return = L, L = S), w(L)) : i(L, S);
    }
    return WA;
  }
  var rn = Dd(!0), Kd = Dd(!1), Si = Ot(null), bi = null, nn = null, Cl = null;
  function Ql() {
    Cl = nn = bi = null;
  }
  function yl(A) {
    var t = Si.current;
    KA(Si), A._currentValue = t;
  }
  function Ul(A, t, i) {
    for (; A !== null; ) {
      var a = A.alternate;
      if ((A.childLanes & t) !== t ? (A.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), A === i) break;
      A = A.return;
    }
  }
  function on(A, t) {
    bi = A, Cl = nn = null, A = A.dependencies, A !== null && A.firstContext !== null && (A.lanes & t && (Qe = !0), A.firstContext = null);
  }
  function ke(A) {
    var t = A._currentValue;
    if (Cl !== A) if (A = { context: A, memoizedValue: t, next: null }, nn === null) {
      if (bi === null) throw Error(n(308));
      nn = A, bi.dependencies = { lanes: 0, firstContext: A };
    } else nn = nn.next = A;
    return t;
  }
  var Cr = null;
  function Fl(A) {
    Cr === null ? Cr = [A] : Cr.push(A);
  }
  function kd(A, t, i, a) {
    var c = t.interleaved;
    return c === null ? (i.next = i, Fl(t)) : (i.next = c.next, c.next = i), t.interleaved = i, ht(A, a);
  }
  function ht(A, t) {
    A.lanes |= t;
    var i = A.alternate;
    for (i !== null && (i.lanes |= t), i = A, A = A.return; A !== null; ) A.childLanes |= t, i = A.alternate, i !== null && (i.childLanes |= t), i = A, A = A.return;
    return i.tag === 3 ? i.stateNode : null;
  }
  var Pt = !1;
  function El(A) {
    A.updateQueue = { baseState: A.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Rd(A, t) {
    A = A.updateQueue, t.updateQueue === A && (t.updateQueue = { baseState: A.baseState, firstBaseUpdate: A.firstBaseUpdate, lastBaseUpdate: A.lastBaseUpdate, shared: A.shared, effects: A.effects });
  }
  function vt(A, t) {
    return { eventTime: A, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function _t(A, t, i) {
    var a = A.updateQueue;
    if (a === null) return null;
    if (a = a.shared, FA & 2) {
      var c = a.pending;
      return c === null ? t.next = t : (t.next = c.next, c.next = t), a.pending = t, ht(A, i);
    }
    return c = a.interleaved, c === null ? (t.next = t, Fl(a)) : (t.next = c.next, c.next = t), a.interleaved = t, ht(A, i);
  }
  function Li(A, t, i) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (i & 4194240) !== 0)) {
      var a = t.lanes;
      a &= A.pendingLanes, i |= a, t.lanes = i, Ma(A, i);
    }
  }
  function Od(A, t) {
    var i = A.updateQueue, a = A.alternate;
    if (a !== null && (a = a.updateQueue, i === a)) {
      var c = null, d = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var w = { eventTime: i.eventTime, lane: i.lane, tag: i.tag, payload: i.payload, callback: i.callback, next: null };
          d === null ? c = d = w : d = d.next = w, i = i.next;
        } while (i !== null);
        d === null ? c = d = t : d = d.next = t;
      } else c = d = t;
      i = { baseState: a.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: a.shared, effects: a.effects }, A.updateQueue = i;
      return;
    }
    A = i.lastBaseUpdate, A === null ? i.firstBaseUpdate = t : A.next = t, i.lastBaseUpdate = t;
  }
  function Ti(A, t, i, a) {
    var c = A.updateQueue;
    Pt = !1;
    var d = c.firstBaseUpdate, w = c.lastBaseUpdate, y = c.shared.pending;
    if (y !== null) {
      c.shared.pending = null;
      var x = y, D = x.next;
      x.next = null, w === null ? d = D : w.next = D, w = x;
      var V = A.alternate;
      V !== null && (V = V.updateQueue, y = V.lastBaseUpdate, y !== w && (y === null ? V.firstBaseUpdate = D : y.next = D, V.lastBaseUpdate = x));
    }
    if (d !== null) {
      var G = c.baseState;
      w = 0, V = D = x = null, y = d;
      do {
        var _ = y.lane, AA = y.eventTime;
        if ((a & _) === _) {
          V !== null && (V = V.next = {
            eventTime: AA,
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          });
          A: {
            var iA = A, aA = y;
            switch (_ = t, AA = i, aA.tag) {
              case 1:
                if (iA = aA.payload, typeof iA == "function") {
                  G = iA.call(AA, G, _);
                  break A;
                }
                G = iA;
                break A;
              case 3:
                iA.flags = iA.flags & -65537 | 128;
              case 0:
                if (iA = aA.payload, _ = typeof iA == "function" ? iA.call(AA, G, _) : iA, _ == null) break A;
                G = j({}, G, _);
                break A;
              case 2:
                Pt = !0;
            }
          }
          y.callback !== null && y.lane !== 0 && (A.flags |= 64, _ = c.effects, _ === null ? c.effects = [y] : _.push(y));
        } else AA = { eventTime: AA, lane: _, tag: y.tag, payload: y.payload, callback: y.callback, next: null }, V === null ? (D = V = AA, x = G) : V = V.next = AA, w |= _;
        if (y = y.next, y === null) {
          if (y = c.shared.pending, y === null) break;
          _ = y, y = _.next, _.next = null, c.lastBaseUpdate = _, c.shared.pending = null;
        }
      } while (!0);
      if (V === null && (x = G), c.baseState = x, c.firstBaseUpdate = D, c.lastBaseUpdate = V, t = c.shared.interleaved, t !== null) {
        c = t;
        do
          w |= c.lane, c = c.next;
        while (c !== t);
      } else d === null && (c.shared.lanes = 0);
      Ur |= w, A.lanes = w, A.memoizedState = G;
    }
  }
  function Nd(A, t, i) {
    if (A = t.effects, t.effects = null, A !== null) for (t = 0; t < A.length; t++) {
      var a = A[t], c = a.callback;
      if (c !== null) {
        if (a.callback = null, a = i, typeof c != "function") throw Error(n(191, c));
        c.call(a);
      }
    }
  }
  var lo = {}, ot = Ot(lo), co = Ot(lo), uo = Ot(lo);
  function Qr(A) {
    if (A === lo) throw Error(n(174));
    return A;
  }
  function xl(A, t) {
    switch (bA(uo, t), bA(co, A), bA(ot, lo), A = t.nodeType, A) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ia(null, "");
        break;
      default:
        A = A === 8 ? t.parentNode : t, t = A.namespaceURI || null, A = A.tagName, t = Ia(t, A);
    }
    KA(ot), bA(ot, t);
  }
  function sn() {
    KA(ot), KA(co), KA(uo);
  }
  function Md(A) {
    Qr(uo.current);
    var t = Qr(ot.current), i = Ia(t, A.type);
    t !== i && (bA(co, A), bA(ot, i));
  }
  function Il(A) {
    co.current === A && (KA(ot), KA(co));
  }
  var MA = Ot(0);
  function Di(A) {
    for (var t = A; t !== null; ) {
      if (t.tag === 13) {
        var i = t.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || i.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === A) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === A) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Hl = [];
  function Sl() {
    for (var A = 0; A < Hl.length; A++) Hl[A]._workInProgressVersionPrimary = null;
    Hl.length = 0;
  }
  var Ki = K.ReactCurrentDispatcher, bl = K.ReactCurrentBatchConfig, yr = 0, PA = null, ZA = null, ee = null, ki = !1, fo = !1, Bo = 0, am = 0;
  function ue() {
    throw Error(n(321));
  }
  function Ll(A, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < A.length; i++) if (!je(A[i], t[i])) return !1;
    return !0;
  }
  function Tl(A, t, i, a, c, d) {
    if (yr = d, PA = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ki.current = A === null || A.memoizedState === null ? fm : dm, A = i(a, c), fo) {
      d = 0;
      do {
        if (fo = !1, Bo = 0, 25 <= d) throw Error(n(301));
        d += 1, ee = ZA = null, t.updateQueue = null, Ki.current = Bm, A = i(a, c);
      } while (fo);
    }
    if (Ki.current = Ni, t = ZA !== null && ZA.next !== null, yr = 0, ee = ZA = PA = null, ki = !1, t) throw Error(n(300));
    return A;
  }
  function Dl() {
    var A = Bo !== 0;
    return Bo = 0, A;
  }
  function it() {
    var A = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ee === null ? PA.memoizedState = ee = A : ee = ee.next = A, ee;
  }
  function Re() {
    if (ZA === null) {
      var A = PA.alternate;
      A = A !== null ? A.memoizedState : null;
    } else A = ZA.next;
    var t = ee === null ? PA.memoizedState : ee.next;
    if (t !== null) ee = t, ZA = A;
    else {
      if (A === null) throw Error(n(310));
      ZA = A, A = { memoizedState: ZA.memoizedState, baseState: ZA.baseState, baseQueue: ZA.baseQueue, queue: ZA.queue, next: null }, ee === null ? PA.memoizedState = ee = A : ee = ee.next = A;
    }
    return ee;
  }
  function go(A, t) {
    return typeof t == "function" ? t(A) : t;
  }
  function Kl(A) {
    var t = Re(), i = t.queue;
    if (i === null) throw Error(n(311));
    i.lastRenderedReducer = A;
    var a = ZA, c = a.baseQueue, d = i.pending;
    if (d !== null) {
      if (c !== null) {
        var w = c.next;
        c.next = d.next, d.next = w;
      }
      a.baseQueue = c = d, i.pending = null;
    }
    if (c !== null) {
      d = c.next, a = a.baseState;
      var y = w = null, x = null, D = d;
      do {
        var V = D.lane;
        if ((yr & V) === V) x !== null && (x = x.next = { lane: 0, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }), a = D.hasEagerState ? D.eagerState : A(a, D.action);
        else {
          var G = {
            lane: V,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          };
          x === null ? (y = x = G, w = a) : x = x.next = G, PA.lanes |= V, Ur |= V;
        }
        D = D.next;
      } while (D !== null && D !== d);
      x === null ? w = a : x.next = y, je(a, t.memoizedState) || (Qe = !0), t.memoizedState = a, t.baseState = w, t.baseQueue = x, i.lastRenderedState = a;
    }
    if (A = i.interleaved, A !== null) {
      c = A;
      do
        d = c.lane, PA.lanes |= d, Ur |= d, c = c.next;
      while (c !== A);
    } else c === null && (i.lanes = 0);
    return [t.memoizedState, i.dispatch];
  }
  function kl(A) {
    var t = Re(), i = t.queue;
    if (i === null) throw Error(n(311));
    i.lastRenderedReducer = A;
    var a = i.dispatch, c = i.pending, d = t.memoizedState;
    if (c !== null) {
      i.pending = null;
      var w = c = c.next;
      do
        d = A(d, w.action), w = w.next;
      while (w !== c);
      je(d, t.memoizedState) || (Qe = !0), t.memoizedState = d, t.baseQueue === null && (t.baseState = d), i.lastRenderedState = d;
    }
    return [d, a];
  }
  function Pd() {
  }
  function _d(A, t) {
    var i = PA, a = Re(), c = t(), d = !je(a.memoizedState, c);
    if (d && (a.memoizedState = c, Qe = !0), a = a.queue, Rl(Wd.bind(null, i, a, A), [A]), a.getSnapshot !== t || d || ee !== null && ee.memoizedState.tag & 1) {
      if (i.flags |= 2048, po(9, Gd.bind(null, i, a, c, t), void 0, null), te === null) throw Error(n(349));
      yr & 30 || Vd(i, t, c);
    }
    return c;
  }
  function Vd(A, t, i) {
    A.flags |= 16384, A = { getSnapshot: t, value: i }, t = PA.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, PA.updateQueue = t, t.stores = [A]) : (i = t.stores, i === null ? t.stores = [A] : i.push(A));
  }
  function Gd(A, t, i, a) {
    t.value = i, t.getSnapshot = a, jd(t) && Xd(A);
  }
  function Wd(A, t, i) {
    return i(function() {
      jd(t) && Xd(A);
    });
  }
  function jd(A) {
    var t = A.getSnapshot;
    A = A.value;
    try {
      var i = t();
      return !je(A, i);
    } catch {
      return !0;
    }
  }
  function Xd(A) {
    var t = ht(A, 1);
    t !== null && Ze(t, A, 1, -1);
  }
  function zd(A) {
    var t = it();
    return typeof A == "function" && (A = A()), t.memoizedState = t.baseState = A, A = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: go, lastRenderedState: A }, t.queue = A, A = A.dispatch = um.bind(null, PA, A), [t.memoizedState, A];
  }
  function po(A, t, i, a) {
    return A = { tag: A, create: t, destroy: i, deps: a, next: null }, t = PA.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, PA.updateQueue = t, t.lastEffect = A.next = A) : (i = t.lastEffect, i === null ? t.lastEffect = A.next = A : (a = i.next, i.next = A, A.next = a, t.lastEffect = A)), A;
  }
  function Jd() {
    return Re().memoizedState;
  }
  function Ri(A, t, i, a) {
    var c = it();
    PA.flags |= A, c.memoizedState = po(1 | t, i, void 0, a === void 0 ? null : a);
  }
  function Oi(A, t, i, a) {
    var c = Re();
    a = a === void 0 ? null : a;
    var d = void 0;
    if (ZA !== null) {
      var w = ZA.memoizedState;
      if (d = w.destroy, a !== null && Ll(a, w.deps)) {
        c.memoizedState = po(t, i, d, a);
        return;
      }
    }
    PA.flags |= A, c.memoizedState = po(1 | t, i, d, a);
  }
  function Yd(A, t) {
    return Ri(8390656, 8, A, t);
  }
  function Rl(A, t) {
    return Oi(2048, 8, A, t);
  }
  function Zd(A, t) {
    return Oi(4, 2, A, t);
  }
  function $d(A, t) {
    return Oi(4, 4, A, t);
  }
  function qd(A, t) {
    if (typeof t == "function") return A = A(), t(A), function() {
      t(null);
    };
    if (t != null) return A = A(), t.current = A, function() {
      t.current = null;
    };
  }
  function AB(A, t, i) {
    return i = i != null ? i.concat([A]) : null, Oi(4, 4, qd.bind(null, t, A), i);
  }
  function Ol() {
  }
  function eB(A, t) {
    var i = Re();
    t = t === void 0 ? null : t;
    var a = i.memoizedState;
    return a !== null && t !== null && Ll(t, a[1]) ? a[0] : (i.memoizedState = [A, t], A);
  }
  function tB(A, t) {
    var i = Re();
    t = t === void 0 ? null : t;
    var a = i.memoizedState;
    return a !== null && t !== null && Ll(t, a[1]) ? a[0] : (A = A(), i.memoizedState = [A, t], A);
  }
  function rB(A, t, i) {
    return yr & 21 ? (je(i, t) || (i = Tf(), PA.lanes |= i, Ur |= i, A.baseState = !0), t) : (A.baseState && (A.baseState = !1, Qe = !0), A.memoizedState = i);
  }
  function lm(A, t) {
    var i = HA;
    HA = i !== 0 && 4 > i ? i : 4, A(!0);
    var a = bl.transition;
    bl.transition = {};
    try {
      A(!1), t();
    } finally {
      HA = i, bl.transition = a;
    }
  }
  function nB() {
    return Re().memoizedState;
  }
  function cm(A, t, i) {
    var a = jt(A);
    if (i = { lane: a, action: i, hasEagerState: !1, eagerState: null, next: null }, oB(A)) iB(t, i);
    else if (i = kd(A, t, i, a), i !== null) {
      var c = we();
      Ze(i, A, a, c), sB(i, t, a);
    }
  }
  function um(A, t, i) {
    var a = jt(A), c = { lane: a, action: i, hasEagerState: !1, eagerState: null, next: null };
    if (oB(A)) iB(t, c);
    else {
      var d = A.alternate;
      if (A.lanes === 0 && (d === null || d.lanes === 0) && (d = t.lastRenderedReducer, d !== null)) try {
        var w = t.lastRenderedState, y = d(w, i);
        if (c.hasEagerState = !0, c.eagerState = y, je(y, w)) {
          var x = t.interleaved;
          x === null ? (c.next = c, Fl(t)) : (c.next = x.next, x.next = c), t.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      i = kd(A, t, c, a), i !== null && (c = we(), Ze(i, A, a, c), sB(i, t, a));
    }
  }
  function oB(A) {
    var t = A.alternate;
    return A === PA || t !== null && t === PA;
  }
  function iB(A, t) {
    fo = ki = !0;
    var i = A.pending;
    i === null ? t.next = t : (t.next = i.next, i.next = t), A.pending = t;
  }
  function sB(A, t, i) {
    if (i & 4194240) {
      var a = t.lanes;
      a &= A.pendingLanes, i |= a, t.lanes = i, Ma(A, i);
    }
  }
  var Ni = { readContext: ke, useCallback: ue, useContext: ue, useEffect: ue, useImperativeHandle: ue, useInsertionEffect: ue, useLayoutEffect: ue, useMemo: ue, useReducer: ue, useRef: ue, useState: ue, useDebugValue: ue, useDeferredValue: ue, useTransition: ue, useMutableSource: ue, useSyncExternalStore: ue, useId: ue, unstable_isNewReconciler: !1 }, fm = { readContext: ke, useCallback: function(A, t) {
    return it().memoizedState = [A, t === void 0 ? null : t], A;
  }, useContext: ke, useEffect: Yd, useImperativeHandle: function(A, t, i) {
    return i = i != null ? i.concat([A]) : null, Ri(
      4194308,
      4,
      qd.bind(null, t, A),
      i
    );
  }, useLayoutEffect: function(A, t) {
    return Ri(4194308, 4, A, t);
  }, useInsertionEffect: function(A, t) {
    return Ri(4, 2, A, t);
  }, useMemo: function(A, t) {
    var i = it();
    return t = t === void 0 ? null : t, A = A(), i.memoizedState = [A, t], A;
  }, useReducer: function(A, t, i) {
    var a = it();
    return t = i !== void 0 ? i(t) : t, a.memoizedState = a.baseState = t, A = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: A, lastRenderedState: t }, a.queue = A, A = A.dispatch = cm.bind(null, PA, A), [a.memoizedState, A];
  }, useRef: function(A) {
    var t = it();
    return A = { current: A }, t.memoizedState = A;
  }, useState: zd, useDebugValue: Ol, useDeferredValue: function(A) {
    return it().memoizedState = A;
  }, useTransition: function() {
    var A = zd(!1), t = A[0];
    return A = lm.bind(null, A[1]), it().memoizedState = A, [t, A];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(A, t, i) {
    var a = PA, c = it();
    if (RA) {
      if (i === void 0) throw Error(n(407));
      i = i();
    } else {
      if (i = t(), te === null) throw Error(n(349));
      yr & 30 || Vd(a, t, i);
    }
    c.memoizedState = i;
    var d = { value: i, getSnapshot: t };
    return c.queue = d, Yd(Wd.bind(
      null,
      a,
      d,
      A
    ), [A]), a.flags |= 2048, po(9, Gd.bind(null, a, d, i, t), void 0, null), i;
  }, useId: function() {
    var A = it(), t = te.identifierPrefix;
    if (RA) {
      var i = wt, a = pt;
      i = (a & ~(1 << 32 - We(a) - 1)).toString(32) + i, t = ":" + t + "R" + i, i = Bo++, 0 < i && (t += "H" + i.toString(32)), t += ":";
    } else i = am++, t = ":" + t + "r" + i.toString(32) + ":";
    return A.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, dm = {
    readContext: ke,
    useCallback: eB,
    useContext: ke,
    useEffect: Rl,
    useImperativeHandle: AB,
    useInsertionEffect: Zd,
    useLayoutEffect: $d,
    useMemo: tB,
    useReducer: Kl,
    useRef: Jd,
    useState: function() {
      return Kl(go);
    },
    useDebugValue: Ol,
    useDeferredValue: function(A) {
      var t = Re();
      return rB(t, ZA.memoizedState, A);
    },
    useTransition: function() {
      var A = Kl(go)[0], t = Re().memoizedState;
      return [A, t];
    },
    useMutableSource: Pd,
    useSyncExternalStore: _d,
    useId: nB,
    unstable_isNewReconciler: !1
  }, Bm = { readContext: ke, useCallback: eB, useContext: ke, useEffect: Rl, useImperativeHandle: AB, useInsertionEffect: Zd, useLayoutEffect: $d, useMemo: tB, useReducer: kl, useRef: Jd, useState: function() {
    return kl(go);
  }, useDebugValue: Ol, useDeferredValue: function(A) {
    var t = Re();
    return ZA === null ? t.memoizedState = A : rB(t, ZA.memoizedState, A);
  }, useTransition: function() {
    var A = kl(go)[0], t = Re().memoizedState;
    return [A, t];
  }, useMutableSource: Pd, useSyncExternalStore: _d, useId: nB, unstable_isNewReconciler: !1 };
  function ze(A, t) {
    if (A && A.defaultProps) {
      t = j({}, t), A = A.defaultProps;
      for (var i in A) t[i] === void 0 && (t[i] = A[i]);
      return t;
    }
    return t;
  }
  function Nl(A, t, i, a) {
    t = A.memoizedState, i = i(a, t), i = i == null ? t : j({}, t, i), A.memoizedState = i, A.lanes === 0 && (A.updateQueue.baseState = i);
  }
  var Mi = { isMounted: function(A) {
    return (A = A._reactInternals) ? pr(A) === A : !1;
  }, enqueueSetState: function(A, t, i) {
    A = A._reactInternals;
    var a = we(), c = jt(A), d = vt(a, c);
    d.payload = t, i != null && (d.callback = i), t = _t(A, d, c), t !== null && (Ze(t, A, c, a), Li(t, A, c));
  }, enqueueReplaceState: function(A, t, i) {
    A = A._reactInternals;
    var a = we(), c = jt(A), d = vt(a, c);
    d.tag = 1, d.payload = t, i != null && (d.callback = i), t = _t(A, d, c), t !== null && (Ze(t, A, c, a), Li(t, A, c));
  }, enqueueForceUpdate: function(A, t) {
    A = A._reactInternals;
    var i = we(), a = jt(A), c = vt(i, a);
    c.tag = 2, t != null && (c.callback = t), t = _t(A, c, a), t !== null && (Ze(t, A, a, i), Li(t, A, a));
  } };
  function aB(A, t, i, a, c, d, w) {
    return A = A.stateNode, typeof A.shouldComponentUpdate == "function" ? A.shouldComponentUpdate(a, d, w) : t.prototype && t.prototype.isPureReactComponent ? !eo(i, a) || !eo(c, d) : !0;
  }
  function lB(A, t, i) {
    var a = !1, c = Nt, d = t.contextType;
    return typeof d == "object" && d !== null ? d = ke(d) : (c = Ce(t) ? hr : ce.current, a = t.contextTypes, d = (a = a != null) ? qr(A, c) : Nt), t = new t(i, d), A.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Mi, A.stateNode = t, t._reactInternals = A, a && (A = A.stateNode, A.__reactInternalMemoizedUnmaskedChildContext = c, A.__reactInternalMemoizedMaskedChildContext = d), t;
  }
  function cB(A, t, i, a) {
    A = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, a), t.state !== A && Mi.enqueueReplaceState(t, t.state, null);
  }
  function Ml(A, t, i, a) {
    var c = A.stateNode;
    c.props = i, c.state = A.memoizedState, c.refs = {}, El(A);
    var d = t.contextType;
    typeof d == "object" && d !== null ? c.context = ke(d) : (d = Ce(t) ? hr : ce.current, c.context = qr(A, d)), c.state = A.memoizedState, d = t.getDerivedStateFromProps, typeof d == "function" && (Nl(A, t, d, i), c.state = A.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (t = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), t !== c.state && Mi.enqueueReplaceState(c, c.state, null), Ti(A, i, c, a), c.state = A.memoizedState), typeof c.componentDidMount == "function" && (A.flags |= 4194308);
  }
  function an(A, t) {
    try {
      var i = "", a = t;
      do
        i += wA(a), a = a.return;
      while (a);
      var c = i;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: A, source: t, stack: c, digest: null };
  }
  function Pl(A, t, i) {
    return { value: A, source: null, stack: i ?? null, digest: t ?? null };
  }
  function _l(A, t) {
    try {
      console.error(t.value);
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  var gm = typeof WeakMap == "function" ? WeakMap : Map;
  function uB(A, t, i) {
    i = vt(-1, i), i.tag = 3, i.payload = { element: null };
    var a = t.value;
    return i.callback = function() {
      Xi || (Xi = !0, rc = a), _l(A, t);
    }, i;
  }
  function fB(A, t, i) {
    i = vt(-1, i), i.tag = 3;
    var a = A.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var c = t.value;
      i.payload = function() {
        return a(c);
      }, i.callback = function() {
        _l(A, t);
      };
    }
    var d = A.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (i.callback = function() {
      _l(A, t), typeof a != "function" && (Gt === null ? Gt = /* @__PURE__ */ new Set([this]) : Gt.add(this));
      var w = t.stack;
      this.componentDidCatch(t.value, { componentStack: w !== null ? w : "" });
    }), i;
  }
  function dB(A, t, i) {
    var a = A.pingCache;
    if (a === null) {
      a = A.pingCache = new gm();
      var c = /* @__PURE__ */ new Set();
      a.set(t, c);
    } else c = a.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), a.set(t, c));
    c.has(i) || (c.add(i), A = Hm.bind(null, A, t, i), t.then(A, A));
  }
  function BB(A) {
    do {
      var t;
      if ((t = A.tag === 13) && (t = A.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return A;
      A = A.return;
    } while (A !== null);
    return null;
  }
  function gB(A, t, i, a, c) {
    return A.mode & 1 ? (A.flags |= 65536, A.lanes = c, A) : (A === t ? A.flags |= 65536 : (A.flags |= 128, i.flags |= 131072, i.flags &= -52805, i.tag === 1 && (i.alternate === null ? i.tag = 17 : (t = vt(-1, 1), t.tag = 2, _t(i, t, 1))), i.lanes |= 1), A);
  }
  var pm = K.ReactCurrentOwner, Qe = !1;
  function pe(A, t, i, a) {
    t.child = A === null ? Kd(t, null, i, a) : rn(t, A.child, i, a);
  }
  function pB(A, t, i, a, c) {
    i = i.render;
    var d = t.ref;
    return on(t, c), a = Tl(A, t, i, a, d, c), i = Dl(), A !== null && !Qe ? (t.updateQueue = A.updateQueue, t.flags &= -2053, A.lanes &= ~c, mt(A, t, c)) : (RA && i && pl(t), t.flags |= 1, pe(A, t, a, c), t.child);
  }
  function wB(A, t, i, a, c) {
    if (A === null) {
      var d = i.type;
      return typeof d == "function" && !cc(d) && d.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (t.tag = 15, t.type = d, hB(A, t, d, a, c)) : (A = qi(i.type, null, a, t, t.mode, c), A.ref = t.ref, A.return = t, t.child = A);
    }
    if (d = A.child, !(A.lanes & c)) {
      var w = d.memoizedProps;
      if (i = i.compare, i = i !== null ? i : eo, i(w, a) && A.ref === t.ref) return mt(A, t, c);
    }
    return t.flags |= 1, A = zt(d, a), A.ref = t.ref, A.return = t, t.child = A;
  }
  function hB(A, t, i, a, c) {
    if (A !== null) {
      var d = A.memoizedProps;
      if (eo(d, a) && A.ref === t.ref) if (Qe = !1, t.pendingProps = a = d, (A.lanes & c) !== 0) A.flags & 131072 && (Qe = !0);
      else return t.lanes = A.lanes, mt(A, t, c);
    }
    return Vl(A, t, i, a, c);
  }
  function vB(A, t, i) {
    var a = t.pendingProps, c = a.children, d = A !== null ? A.memoizedState : null;
    if (a.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, bA(cn, Se), Se |= i;
    else {
      if (!(i & 1073741824)) return A = d !== null ? d.baseLanes | i : i, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: A, cachePool: null, transitions: null }, t.updateQueue = null, bA(cn, Se), Se |= A, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, a = d !== null ? d.baseLanes : i, bA(cn, Se), Se |= a;
    }
    else d !== null ? (a = d.baseLanes | i, t.memoizedState = null) : a = i, bA(cn, Se), Se |= a;
    return pe(A, t, c, i), t.child;
  }
  function mB(A, t) {
    var i = t.ref;
    (A === null && i !== null || A !== null && A.ref !== i) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Vl(A, t, i, a, c) {
    var d = Ce(i) ? hr : ce.current;
    return d = qr(t, d), on(t, c), i = Tl(A, t, i, a, d, c), a = Dl(), A !== null && !Qe ? (t.updateQueue = A.updateQueue, t.flags &= -2053, A.lanes &= ~c, mt(A, t, c)) : (RA && a && pl(t), t.flags |= 1, pe(A, t, i, c), t.child);
  }
  function CB(A, t, i, a, c) {
    if (Ce(i)) {
      var d = !0;
      Ui(t);
    } else d = !1;
    if (on(t, c), t.stateNode === null) _i(A, t), lB(t, i, a), Ml(t, i, a, c), a = !0;
    else if (A === null) {
      var w = t.stateNode, y = t.memoizedProps;
      w.props = y;
      var x = w.context, D = i.contextType;
      typeof D == "object" && D !== null ? D = ke(D) : (D = Ce(i) ? hr : ce.current, D = qr(t, D));
      var V = i.getDerivedStateFromProps, G = typeof V == "function" || typeof w.getSnapshotBeforeUpdate == "function";
      G || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (y !== a || x !== D) && cB(t, w, a, D), Pt = !1;
      var _ = t.memoizedState;
      w.state = _, Ti(t, a, w, c), x = t.memoizedState, y !== a || _ !== x || me.current || Pt ? (typeof V == "function" && (Nl(t, i, V, a), x = t.memoizedState), (y = Pt || aB(t, i, y, a, _, x, D)) ? (G || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (typeof w.componentWillMount == "function" && w.componentWillMount(), typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount()), typeof w.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof w.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = x), w.props = a, w.state = x, w.context = D, a = y) : (typeof w.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      w = t.stateNode, Rd(A, t), y = t.memoizedProps, D = t.type === t.elementType ? y : ze(t.type, y), w.props = D, G = t.pendingProps, _ = w.context, x = i.contextType, typeof x == "object" && x !== null ? x = ke(x) : (x = Ce(i) ? hr : ce.current, x = qr(t, x));
      var AA = i.getDerivedStateFromProps;
      (V = typeof AA == "function" || typeof w.getSnapshotBeforeUpdate == "function") || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (y !== G || _ !== x) && cB(t, w, a, x), Pt = !1, _ = t.memoizedState, w.state = _, Ti(t, a, w, c);
      var iA = t.memoizedState;
      y !== G || _ !== iA || me.current || Pt ? (typeof AA == "function" && (Nl(t, i, AA, a), iA = t.memoizedState), (D = Pt || aB(t, i, D, a, _, iA, x) || !1) ? (V || typeof w.UNSAFE_componentWillUpdate != "function" && typeof w.componentWillUpdate != "function" || (typeof w.componentWillUpdate == "function" && w.componentWillUpdate(a, iA, x), typeof w.UNSAFE_componentWillUpdate == "function" && w.UNSAFE_componentWillUpdate(a, iA, x)), typeof w.componentDidUpdate == "function" && (t.flags |= 4), typeof w.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof w.componentDidUpdate != "function" || y === A.memoizedProps && _ === A.memoizedState || (t.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || y === A.memoizedProps && _ === A.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = iA), w.props = a, w.state = iA, w.context = x, a = D) : (typeof w.componentDidUpdate != "function" || y === A.memoizedProps && _ === A.memoizedState || (t.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || y === A.memoizedProps && _ === A.memoizedState || (t.flags |= 1024), a = !1);
    }
    return Gl(A, t, i, a, d, c);
  }
  function Gl(A, t, i, a, c, d) {
    mB(A, t);
    var w = (t.flags & 128) !== 0;
    if (!a && !w) return c && Ed(t, i, !1), mt(A, t, d);
    a = t.stateNode, pm.current = t;
    var y = w && typeof i.getDerivedStateFromError != "function" ? null : a.render();
    return t.flags |= 1, A !== null && w ? (t.child = rn(t, A.child, null, d), t.child = rn(t, null, y, d)) : pe(A, t, y, d), t.memoizedState = a.state, c && Ed(t, i, !0), t.child;
  }
  function QB(A) {
    var t = A.stateNode;
    t.pendingContext ? Ud(A, t.pendingContext, t.pendingContext !== t.context) : t.context && Ud(A, t.context, !1), xl(A, t.containerInfo);
  }
  function yB(A, t, i, a, c) {
    return tn(), ml(c), t.flags |= 256, pe(A, t, i, a), t.child;
  }
  var Wl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function jl(A) {
    return { baseLanes: A, cachePool: null, transitions: null };
  }
  function UB(A, t, i) {
    var a = t.pendingProps, c = MA.current, d = !1, w = (t.flags & 128) !== 0, y;
    if ((y = w) || (y = A !== null && A.memoizedState === null ? !1 : (c & 2) !== 0), y ? (d = !0, t.flags &= -129) : (A === null || A.memoizedState !== null) && (c |= 1), bA(MA, c & 1), A === null)
      return vl(t), A = t.memoizedState, A !== null && (A = A.dehydrated, A !== null) ? (t.mode & 1 ? A.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (w = a.children, A = a.fallback, d ? (a = t.mode, d = t.child, w = { mode: "hidden", children: w }, !(a & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = w) : d = As(w, a, 0, null), A = Ir(A, a, i, null), d.return = t, A.return = t, d.sibling = A, t.child = d, t.child.memoizedState = jl(i), t.memoizedState = Wl, A) : Xl(t, w));
    if (c = A.memoizedState, c !== null && (y = c.dehydrated, y !== null)) return wm(A, t, w, a, y, c, i);
    if (d) {
      d = a.fallback, w = t.mode, c = A.child, y = c.sibling;
      var x = { mode: "hidden", children: a.children };
      return !(w & 1) && t.child !== c ? (a = t.child, a.childLanes = 0, a.pendingProps = x, t.deletions = null) : (a = zt(c, x), a.subtreeFlags = c.subtreeFlags & 14680064), y !== null ? d = zt(y, d) : (d = Ir(d, w, i, null), d.flags |= 2), d.return = t, a.return = t, a.sibling = d, t.child = a, a = d, d = t.child, w = A.child.memoizedState, w = w === null ? jl(i) : { baseLanes: w.baseLanes | i, cachePool: null, transitions: w.transitions }, d.memoizedState = w, d.childLanes = A.childLanes & ~i, t.memoizedState = Wl, a;
    }
    return d = A.child, A = d.sibling, a = zt(d, { mode: "visible", children: a.children }), !(t.mode & 1) && (a.lanes = i), a.return = t, a.sibling = null, A !== null && (i = t.deletions, i === null ? (t.deletions = [A], t.flags |= 16) : i.push(A)), t.child = a, t.memoizedState = null, a;
  }
  function Xl(A, t) {
    return t = As({ mode: "visible", children: t }, A.mode, 0, null), t.return = A, A.child = t;
  }
  function Pi(A, t, i, a) {
    return a !== null && ml(a), rn(t, A.child, null, i), A = Xl(t, t.pendingProps.children), A.flags |= 2, t.memoizedState = null, A;
  }
  function wm(A, t, i, a, c, d, w) {
    if (i)
      return t.flags & 256 ? (t.flags &= -257, a = Pl(Error(n(422))), Pi(A, t, w, a)) : t.memoizedState !== null ? (t.child = A.child, t.flags |= 128, null) : (d = a.fallback, c = t.mode, a = As({ mode: "visible", children: a.children }, c, 0, null), d = Ir(d, c, w, null), d.flags |= 2, a.return = t, d.return = t, a.sibling = d, t.child = a, t.mode & 1 && rn(t, A.child, null, w), t.child.memoizedState = jl(w), t.memoizedState = Wl, d);
    if (!(t.mode & 1)) return Pi(A, t, w, null);
    if (c.data === "$!") {
      if (a = c.nextSibling && c.nextSibling.dataset, a) var y = a.dgst;
      return a = y, d = Error(n(419)), a = Pl(d, a, void 0), Pi(A, t, w, a);
    }
    if (y = (w & A.childLanes) !== 0, Qe || y) {
      if (a = te, a !== null) {
        switch (w & -w) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (a.suspendedLanes | w) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, ht(A, c), Ze(a, A, c, -1));
      }
      return lc(), a = Pl(Error(n(421))), Pi(A, t, w, a);
    }
    return c.data === "$?" ? (t.flags |= 128, t.child = A.child, t = Sm.bind(null, A), c._reactRetry = t, null) : (A = d.treeContext, He = Rt(c.nextSibling), Ie = t, RA = !0, Xe = null, A !== null && (De[Ke++] = pt, De[Ke++] = wt, De[Ke++] = vr, pt = A.id, wt = A.overflow, vr = t), t = Xl(t, a.children), t.flags |= 4096, t);
  }
  function FB(A, t, i) {
    A.lanes |= t;
    var a = A.alternate;
    a !== null && (a.lanes |= t), Ul(A.return, t, i);
  }
  function zl(A, t, i, a, c) {
    var d = A.memoizedState;
    d === null ? A.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: i, tailMode: c } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = a, d.tail = i, d.tailMode = c);
  }
  function EB(A, t, i) {
    var a = t.pendingProps, c = a.revealOrder, d = a.tail;
    if (pe(A, t, a.children, i), a = MA.current, a & 2) a = a & 1 | 2, t.flags |= 128;
    else {
      if (A !== null && A.flags & 128) A: for (A = t.child; A !== null; ) {
        if (A.tag === 13) A.memoizedState !== null && FB(A, i, t);
        else if (A.tag === 19) FB(A, i, t);
        else if (A.child !== null) {
          A.child.return = A, A = A.child;
          continue;
        }
        if (A === t) break A;
        for (; A.sibling === null; ) {
          if (A.return === null || A.return === t) break A;
          A = A.return;
        }
        A.sibling.return = A.return, A = A.sibling;
      }
      a &= 1;
    }
    if (bA(MA, a), !(t.mode & 1)) t.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (i = t.child, c = null; i !== null; ) A = i.alternate, A !== null && Di(A) === null && (c = i), i = i.sibling;
        i = c, i === null ? (c = t.child, t.child = null) : (c = i.sibling, i.sibling = null), zl(t, !1, c, i, d);
        break;
      case "backwards":
        for (i = null, c = t.child, t.child = null; c !== null; ) {
          if (A = c.alternate, A !== null && Di(A) === null) {
            t.child = c;
            break;
          }
          A = c.sibling, c.sibling = i, i = c, c = A;
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
    !(t.mode & 1) && A !== null && (A.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function mt(A, t, i) {
    if (A !== null && (t.dependencies = A.dependencies), Ur |= t.lanes, !(i & t.childLanes)) return null;
    if (A !== null && t.child !== A.child) throw Error(n(153));
    if (t.child !== null) {
      for (A = t.child, i = zt(A, A.pendingProps), t.child = i, i.return = t; A.sibling !== null; ) A = A.sibling, i = i.sibling = zt(A, A.pendingProps), i.return = t;
      i.sibling = null;
    }
    return t.child;
  }
  function hm(A, t, i) {
    switch (t.tag) {
      case 3:
        QB(t), tn();
        break;
      case 5:
        Md(t);
        break;
      case 1:
        Ce(t.type) && Ui(t);
        break;
      case 4:
        xl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var a = t.type._context, c = t.memoizedProps.value;
        bA(Si, a._currentValue), a._currentValue = c;
        break;
      case 13:
        if (a = t.memoizedState, a !== null)
          return a.dehydrated !== null ? (bA(MA, MA.current & 1), t.flags |= 128, null) : i & t.child.childLanes ? UB(A, t, i) : (bA(MA, MA.current & 1), A = mt(A, t, i), A !== null ? A.sibling : null);
        bA(MA, MA.current & 1);
        break;
      case 19:
        if (a = (i & t.childLanes) !== 0, A.flags & 128) {
          if (a) return EB(A, t, i);
          t.flags |= 128;
        }
        if (c = t.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), bA(MA, MA.current), a) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, vB(A, t, i);
    }
    return mt(A, t, i);
  }
  var xB, Jl, IB, HB;
  xB = function(A, t) {
    for (var i = t.child; i !== null; ) {
      if (i.tag === 5 || i.tag === 6) A.appendChild(i.stateNode);
      else if (i.tag !== 4 && i.child !== null) {
        i.child.return = i, i = i.child;
        continue;
      }
      if (i === t) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === t) return;
        i = i.return;
      }
      i.sibling.return = i.return, i = i.sibling;
    }
  }, Jl = function() {
  }, IB = function(A, t, i, a) {
    var c = A.memoizedProps;
    if (c !== a) {
      A = t.stateNode, Qr(ot.current);
      var d = null;
      switch (i) {
        case "input":
          c = Ge(A, c), a = Ge(A, a), d = [];
          break;
        case "select":
          c = j({}, c, { value: void 0 }), a = j({}, a, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = xa(A, c), a = xa(A, a), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof a.onClick == "function" && (A.onclick = Ci);
      }
      Ha(i, a);
      var w;
      i = null;
      for (D in c) if (!a.hasOwnProperty(D) && c.hasOwnProperty(D) && c[D] != null) if (D === "style") {
        var y = c[D];
        for (w in y) y.hasOwnProperty(w) && (i || (i = {}), i[w] = "");
      } else D !== "dangerouslySetInnerHTML" && D !== "children" && D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && D !== "autoFocus" && (s.hasOwnProperty(D) ? d || (d = []) : (d = d || []).push(D, null));
      for (D in a) {
        var x = a[D];
        if (y = c?.[D], a.hasOwnProperty(D) && x !== y && (x != null || y != null)) if (D === "style") if (y) {
          for (w in y) !y.hasOwnProperty(w) || x && x.hasOwnProperty(w) || (i || (i = {}), i[w] = "");
          for (w in x) x.hasOwnProperty(w) && y[w] !== x[w] && (i || (i = {}), i[w] = x[w]);
        } else i || (d || (d = []), d.push(
          D,
          i
        )), i = x;
        else D === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, y = y ? y.__html : void 0, x != null && y !== x && (d = d || []).push(D, x)) : D === "children" ? typeof x != "string" && typeof x != "number" || (d = d || []).push(D, "" + x) : D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && (s.hasOwnProperty(D) ? (x != null && D === "onScroll" && DA("scroll", A), d || y === x || (d = [])) : (d = d || []).push(D, x));
      }
      i && (d = d || []).push("style", i);
      var D = d;
      (t.updateQueue = D) && (t.flags |= 4);
    }
  }, HB = function(A, t, i, a) {
    i !== a && (t.flags |= 4);
  };
  function wo(A, t) {
    if (!RA) switch (A.tailMode) {
      case "hidden":
        t = A.tail;
        for (var i = null; t !== null; ) t.alternate !== null && (i = t), t = t.sibling;
        i === null ? A.tail = null : i.sibling = null;
        break;
      case "collapsed":
        i = A.tail;
        for (var a = null; i !== null; ) i.alternate !== null && (a = i), i = i.sibling;
        a === null ? t || A.tail === null ? A.tail = null : A.tail.sibling = null : a.sibling = null;
    }
  }
  function fe(A) {
    var t = A.alternate !== null && A.alternate.child === A.child, i = 0, a = 0;
    if (t) for (var c = A.child; c !== null; ) i |= c.lanes | c.childLanes, a |= c.subtreeFlags & 14680064, a |= c.flags & 14680064, c.return = A, c = c.sibling;
    else for (c = A.child; c !== null; ) i |= c.lanes | c.childLanes, a |= c.subtreeFlags, a |= c.flags, c.return = A, c = c.sibling;
    return A.subtreeFlags |= a, A.childLanes = i, t;
  }
  function vm(A, t, i) {
    var a = t.pendingProps;
    switch (wl(t), t.tag) {
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
        return a = t.stateNode, sn(), KA(me), KA(ce), Sl(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (A === null || A.child === null) && (Ii(t) ? t.flags |= 4 : A === null || A.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Xe !== null && (ic(Xe), Xe = null))), Jl(A, t), fe(t), null;
      case 5:
        Il(t);
        var c = Qr(uo.current);
        if (i = t.type, A !== null && t.stateNode != null) IB(A, t, i, a, c), A.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(n(166));
            return fe(t), null;
          }
          if (A = Qr(ot.current), Ii(t)) {
            a = t.stateNode, i = t.type;
            var d = t.memoizedProps;
            switch (a[nt] = t, a[io] = d, A = (t.mode & 1) !== 0, i) {
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
                for (c = 0; c < ro.length; c++) DA(ro[c], a);
                break;
              case "source":
                DA("error", a);
                break;
              case "img":
              case "image":
              case "link":
                DA(
                  "error",
                  a
                ), DA("load", a);
                break;
              case "details":
                DA("toggle", a);
                break;
              case "input":
                Nr(a, d), DA("invalid", a);
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d.multiple }, DA("invalid", a);
                break;
              case "textarea":
                ff(a, d), DA("invalid", a);
            }
            Ha(i, d), c = null;
            for (var w in d) if (d.hasOwnProperty(w)) {
              var y = d[w];
              w === "children" ? typeof y == "string" ? a.textContent !== y && (d.suppressHydrationWarning !== !0 && mi(a.textContent, y, A), c = ["children", y]) : typeof y == "number" && a.textContent !== "" + y && (d.suppressHydrationWarning !== !0 && mi(
                a.textContent,
                y,
                A
              ), c = ["children", "" + y]) : s.hasOwnProperty(w) && y != null && w === "onScroll" && DA("scroll", a);
            }
            switch (i) {
              case "input":
                IA(a), uf(a, d, !0);
                break;
              case "textarea":
                IA(a), Bf(a);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (a.onclick = Ci);
            }
            a = c, t.updateQueue = a, a !== null && (t.flags |= 4);
          } else {
            w = c.nodeType === 9 ? c : c.ownerDocument, A === "http://www.w3.org/1999/xhtml" && (A = gf(i)), A === "http://www.w3.org/1999/xhtml" ? i === "script" ? (A = w.createElement("div"), A.innerHTML = "<script><\/script>", A = A.removeChild(A.firstChild)) : typeof a.is == "string" ? A = w.createElement(i, { is: a.is }) : (A = w.createElement(i), i === "select" && (w = A, a.multiple ? w.multiple = !0 : a.size && (w.size = a.size))) : A = w.createElementNS(A, i), A[nt] = t, A[io] = a, xB(A, t, !1, !1), t.stateNode = A;
            A: {
              switch (w = Sa(i, a), i) {
                case "dialog":
                  DA("cancel", A), DA("close", A), c = a;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  DA("load", A), c = a;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ro.length; c++) DA(ro[c], A);
                  c = a;
                  break;
                case "source":
                  DA("error", A), c = a;
                  break;
                case "img":
                case "image":
                case "link":
                  DA(
                    "error",
                    A
                  ), DA("load", A), c = a;
                  break;
                case "details":
                  DA("toggle", A), c = a;
                  break;
                case "input":
                  Nr(A, a), c = Ge(A, a), DA("invalid", A);
                  break;
                case "option":
                  c = a;
                  break;
                case "select":
                  A._wrapperState = { wasMultiple: !!a.multiple }, c = j({}, a, { value: void 0 }), DA("invalid", A);
                  break;
                case "textarea":
                  ff(A, a), c = xa(A, a), DA("invalid", A);
                  break;
                default:
                  c = a;
              }
              Ha(i, c), y = c;
              for (d in y) if (y.hasOwnProperty(d)) {
                var x = y[d];
                d === "style" ? hf(A, x) : d === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, x != null && pf(A, x)) : d === "children" ? typeof x == "string" ? (i !== "textarea" || x !== "") && On(A, x) : typeof x == "number" && On(A, "" + x) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (s.hasOwnProperty(d) ? x != null && d === "onScroll" && DA("scroll", A) : x != null && k(A, d, x, w));
              }
              switch (i) {
                case "input":
                  IA(A), uf(A, a, !1);
                  break;
                case "textarea":
                  IA(A), Bf(A);
                  break;
                case "option":
                  a.value != null && A.setAttribute("value", "" + fA(a.value));
                  break;
                case "select":
                  A.multiple = !!a.multiple, d = a.value, d != null ? Pr(A, !!a.multiple, d, !1) : a.defaultValue != null && Pr(
                    A,
                    !!a.multiple,
                    a.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (A.onclick = Ci);
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
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return fe(t), null;
      case 6:
        if (A && t.stateNode != null) HB(A, t, A.memoizedProps, a);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(n(166));
          if (i = Qr(uo.current), Qr(ot.current), Ii(t)) {
            if (a = t.stateNode, i = t.memoizedProps, a[nt] = t, (d = a.nodeValue !== i) && (A = Ie, A !== null)) switch (A.tag) {
              case 3:
                mi(a.nodeValue, i, (A.mode & 1) !== 0);
                break;
              case 5:
                A.memoizedProps.suppressHydrationWarning !== !0 && mi(a.nodeValue, i, (A.mode & 1) !== 0);
            }
            d && (t.flags |= 4);
          } else a = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(a), a[nt] = t, t.stateNode = a;
        }
        return fe(t), null;
      case 13:
        if (KA(MA), a = t.memoizedState, A === null || A.memoizedState !== null && A.memoizedState.dehydrated !== null) {
          if (RA && He !== null && t.mode & 1 && !(t.flags & 128)) Ld(), tn(), t.flags |= 98560, d = !1;
          else if (d = Ii(t), a !== null && a.dehydrated !== null) {
            if (A === null) {
              if (!d) throw Error(n(318));
              if (d = t.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(n(317));
              d[nt] = t;
            } else tn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            fe(t), d = !1;
          } else Xe !== null && (ic(Xe), Xe = null), d = !0;
          if (!d) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = i, t) : (a = a !== null, a !== (A !== null && A.memoizedState !== null) && a && (t.child.flags |= 8192, t.mode & 1 && (A === null || MA.current & 1 ? $A === 0 && ($A = 3) : lc())), t.updateQueue !== null && (t.flags |= 4), fe(t), null);
      case 4:
        return sn(), Jl(A, t), A === null && no(t.stateNode.containerInfo), fe(t), null;
      case 10:
        return yl(t.type._context), fe(t), null;
      case 17:
        return Ce(t.type) && yi(), fe(t), null;
      case 19:
        if (KA(MA), d = t.memoizedState, d === null) return fe(t), null;
        if (a = (t.flags & 128) !== 0, w = d.rendering, w === null) if (a) wo(d, !1);
        else {
          if ($A !== 0 || A !== null && A.flags & 128) for (A = t.child; A !== null; ) {
            if (w = Di(A), w !== null) {
              for (t.flags |= 128, wo(d, !1), a = w.updateQueue, a !== null && (t.updateQueue = a, t.flags |= 4), t.subtreeFlags = 0, a = i, i = t.child; i !== null; ) d = i, A = a, d.flags &= 14680066, w = d.alternate, w === null ? (d.childLanes = 0, d.lanes = A, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = w.childLanes, d.lanes = w.lanes, d.child = w.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = w.memoizedProps, d.memoizedState = w.memoizedState, d.updateQueue = w.updateQueue, d.type = w.type, A = w.dependencies, d.dependencies = A === null ? null : { lanes: A.lanes, firstContext: A.firstContext }), i = i.sibling;
              return bA(MA, MA.current & 1 | 2), t.child;
            }
            A = A.sibling;
          }
          d.tail !== null && GA() > un && (t.flags |= 128, a = !0, wo(d, !1), t.lanes = 4194304);
        }
        else {
          if (!a) if (A = Di(w), A !== null) {
            if (t.flags |= 128, a = !0, i = A.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), wo(d, !0), d.tail === null && d.tailMode === "hidden" && !w.alternate && !RA) return fe(t), null;
          } else 2 * GA() - d.renderingStartTime > un && i !== 1073741824 && (t.flags |= 128, a = !0, wo(d, !1), t.lanes = 4194304);
          d.isBackwards ? (w.sibling = t.child, t.child = w) : (i = d.last, i !== null ? i.sibling = w : t.child = w, d.last = w);
        }
        return d.tail !== null ? (t = d.tail, d.rendering = t, d.tail = t.sibling, d.renderingStartTime = GA(), t.sibling = null, i = MA.current, bA(MA, a ? i & 1 | 2 : i & 1), t) : (fe(t), null);
      case 22:
      case 23:
        return ac(), a = t.memoizedState !== null, A !== null && A.memoizedState !== null !== a && (t.flags |= 8192), a && t.mode & 1 ? Se & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : fe(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(n(156, t.tag));
  }
  function mm(A, t) {
    switch (wl(t), t.tag) {
      case 1:
        return Ce(t.type) && yi(), A = t.flags, A & 65536 ? (t.flags = A & -65537 | 128, t) : null;
      case 3:
        return sn(), KA(me), KA(ce), Sl(), A = t.flags, A & 65536 && !(A & 128) ? (t.flags = A & -65537 | 128, t) : null;
      case 5:
        return Il(t), null;
      case 13:
        if (KA(MA), A = t.memoizedState, A !== null && A.dehydrated !== null) {
          if (t.alternate === null) throw Error(n(340));
          tn();
        }
        return A = t.flags, A & 65536 ? (t.flags = A & -65537 | 128, t) : null;
      case 19:
        return KA(MA), null;
      case 4:
        return sn(), null;
      case 10:
        return yl(t.type._context), null;
      case 22:
      case 23:
        return ac(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Vi = !1, de = !1, Cm = typeof WeakSet == "function" ? WeakSet : Set, rA = null;
  function ln(A, t) {
    var i = A.ref;
    if (i !== null) if (typeof i == "function") try {
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
  var SB = !1;
  function Qm(A, t) {
    if (al = li, A = ad(), Al(A)) {
      if ("selectionStart" in A) var i = { start: A.selectionStart, end: A.selectionEnd };
      else A: {
        i = (i = A.ownerDocument) && i.defaultView || window;
        var a = i.getSelection && i.getSelection();
        if (a && a.rangeCount !== 0) {
          i = a.anchorNode;
          var c = a.anchorOffset, d = a.focusNode;
          a = a.focusOffset;
          try {
            i.nodeType, d.nodeType;
          } catch {
            i = null;
            break A;
          }
          var w = 0, y = -1, x = -1, D = 0, V = 0, G = A, _ = null;
          e: for (; ; ) {
            for (var AA; G !== i || c !== 0 && G.nodeType !== 3 || (y = w + c), G !== d || a !== 0 && G.nodeType !== 3 || (x = w + a), G.nodeType === 3 && (w += G.nodeValue.length), (AA = G.firstChild) !== null; )
              _ = G, G = AA;
            for (; ; ) {
              if (G === A) break e;
              if (_ === i && ++D === c && (y = w), _ === d && ++V === a && (x = w), (AA = G.nextSibling) !== null) break;
              G = _, _ = G.parentNode;
            }
            G = AA;
          }
          i = y === -1 || x === -1 ? null : { start: y, end: x };
        } else i = null;
      }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (ll = { focusedElem: A, selectionRange: i }, li = !1, rA = t; rA !== null; ) if (t = rA, A = t.child, (t.subtreeFlags & 1028) !== 0 && A !== null) A.return = t, rA = A;
    else for (; rA !== null; ) {
      t = rA;
      try {
        var iA = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (iA !== null) {
              var aA = iA.memoizedProps, WA = iA.memoizedState, L = t.stateNode, S = L.getSnapshotBeforeUpdate(t.elementType === t.type ? aA : ze(t.type, aA), WA);
              L.__reactInternalSnapshotBeforeUpdate = S;
            }
            break;
          case 3:
            var T = t.stateNode.containerInfo;
            T.nodeType === 1 ? T.textContent = "" : T.nodeType === 9 && T.documentElement && T.removeChild(T.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(n(163));
        }
      } catch (z) {
        VA(t, t.return, z);
      }
      if (A = t.sibling, A !== null) {
        A.return = t.return, rA = A;
        break;
      }
      rA = t.return;
    }
    return iA = SB, SB = !1, iA;
  }
  function ho(A, t, i) {
    var a = t.updateQueue;
    if (a = a !== null ? a.lastEffect : null, a !== null) {
      var c = a = a.next;
      do {
        if ((c.tag & A) === A) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Yl(t, i, d);
        }
        c = c.next;
      } while (c !== a);
    }
  }
  function Gi(A, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var i = t = t.next;
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
      typeof t == "function" ? t(A) : t.current = A;
    }
  }
  function bB(A) {
    var t = A.alternate;
    t !== null && (A.alternate = null, bB(t)), A.child = null, A.deletions = null, A.sibling = null, A.tag === 5 && (t = A.stateNode, t !== null && (delete t[nt], delete t[io], delete t[dl], delete t[nm], delete t[om])), A.stateNode = null, A.return = null, A.dependencies = null, A.memoizedProps = null, A.memoizedState = null, A.pendingProps = null, A.stateNode = null, A.updateQueue = null;
  }
  function LB(A) {
    return A.tag === 5 || A.tag === 3 || A.tag === 4;
  }
  function TB(A) {
    A: for (; ; ) {
      for (; A.sibling === null; ) {
        if (A.return === null || LB(A.return)) return null;
        A = A.return;
      }
      for (A.sibling.return = A.return, A = A.sibling; A.tag !== 5 && A.tag !== 6 && A.tag !== 18; ) {
        if (A.flags & 2 || A.child === null || A.tag === 4) continue A;
        A.child.return = A, A = A.child;
      }
      if (!(A.flags & 2)) return A.stateNode;
    }
  }
  function $l(A, t, i) {
    var a = A.tag;
    if (a === 5 || a === 6) A = A.stateNode, t ? i.nodeType === 8 ? i.parentNode.insertBefore(A, t) : i.insertBefore(A, t) : (i.nodeType === 8 ? (t = i.parentNode, t.insertBefore(A, i)) : (t = i, t.appendChild(A)), i = i._reactRootContainer, i != null || t.onclick !== null || (t.onclick = Ci));
    else if (a !== 4 && (A = A.child, A !== null)) for ($l(A, t, i), A = A.sibling; A !== null; ) $l(A, t, i), A = A.sibling;
  }
  function ql(A, t, i) {
    var a = A.tag;
    if (a === 5 || a === 6) A = A.stateNode, t ? i.insertBefore(A, t) : i.appendChild(A);
    else if (a !== 4 && (A = A.child, A !== null)) for (ql(A, t, i), A = A.sibling; A !== null; ) ql(A, t, i), A = A.sibling;
  }
  var ie = null, Je = !1;
  function Vt(A, t, i) {
    for (i = i.child; i !== null; ) DB(A, t, i), i = i.sibling;
  }
  function DB(A, t, i) {
    if (rt && typeof rt.onCommitFiberUnmount == "function") try {
      rt.onCommitFiberUnmount(ri, i);
    } catch {
    }
    switch (i.tag) {
      case 5:
        de || ln(i, t);
      case 6:
        var a = ie, c = Je;
        ie = null, Vt(A, t, i), ie = a, Je = c, ie !== null && (Je ? (A = ie, i = i.stateNode, A.nodeType === 8 ? A.parentNode.removeChild(i) : A.removeChild(i)) : ie.removeChild(i.stateNode));
        break;
      case 18:
        ie !== null && (Je ? (A = ie, i = i.stateNode, A.nodeType === 8 ? fl(A.parentNode, i) : A.nodeType === 1 && fl(A, i), Jn(A)) : fl(ie, i.stateNode));
        break;
      case 4:
        a = ie, c = Je, ie = i.stateNode.containerInfo, Je = !0, Vt(A, t, i), ie = a, Je = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!de && (a = i.updateQueue, a !== null && (a = a.lastEffect, a !== null))) {
          c = a = a.next;
          do {
            var d = c, w = d.destroy;
            d = d.tag, w !== void 0 && (d & 2 || d & 4) && Yl(i, t, w), c = c.next;
          } while (c !== a);
        }
        Vt(A, t, i);
        break;
      case 1:
        if (!de && (ln(i, t), a = i.stateNode, typeof a.componentWillUnmount == "function")) try {
          a.props = i.memoizedProps, a.state = i.memoizedState, a.componentWillUnmount();
        } catch (y) {
          VA(i, t, y);
        }
        Vt(A, t, i);
        break;
      case 21:
        Vt(A, t, i);
        break;
      case 22:
        i.mode & 1 ? (de = (a = de) || i.memoizedState !== null, Vt(A, t, i), de = a) : Vt(A, t, i);
        break;
      default:
        Vt(A, t, i);
    }
  }
  function KB(A) {
    var t = A.updateQueue;
    if (t !== null) {
      A.updateQueue = null;
      var i = A.stateNode;
      i === null && (i = A.stateNode = new Cm()), t.forEach(function(a) {
        var c = bm.bind(null, A, a);
        i.has(a) || (i.add(a), a.then(c, c));
      });
    }
  }
  function Ye(A, t) {
    var i = t.deletions;
    if (i !== null) for (var a = 0; a < i.length; a++) {
      var c = i[a];
      try {
        var d = A, w = t, y = w;
        A: for (; y !== null; ) {
          switch (y.tag) {
            case 5:
              ie = y.stateNode, Je = !1;
              break A;
            case 3:
              ie = y.stateNode.containerInfo, Je = !0;
              break A;
            case 4:
              ie = y.stateNode.containerInfo, Je = !0;
              break A;
          }
          y = y.return;
        }
        if (ie === null) throw Error(n(160));
        DB(d, w, c), ie = null, Je = !1;
        var x = c.alternate;
        x !== null && (x.return = null), c.return = null;
      } catch (D) {
        VA(c, t, D);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) kB(t, A), t = t.sibling;
  }
  function kB(A, t) {
    var i = A.alternate, a = A.flags;
    switch (A.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ye(t, A), st(A), a & 4) {
          try {
            ho(3, A, A.return), Gi(3, A);
          } catch (aA) {
            VA(A, A.return, aA);
          }
          try {
            ho(5, A, A.return);
          } catch (aA) {
            VA(A, A.return, aA);
          }
        }
        break;
      case 1:
        Ye(t, A), st(A), a & 512 && i !== null && ln(i, i.return);
        break;
      case 5:
        if (Ye(t, A), st(A), a & 512 && i !== null && ln(i, i.return), A.flags & 32) {
          var c = A.stateNode;
          try {
            On(c, "");
          } catch (aA) {
            VA(A, A.return, aA);
          }
        }
        if (a & 4 && (c = A.stateNode, c != null)) {
          var d = A.memoizedProps, w = i !== null ? i.memoizedProps : d, y = A.type, x = A.updateQueue;
          if (A.updateQueue = null, x !== null) try {
            y === "input" && d.type === "radio" && d.name != null && Mr(c, d), Sa(y, w);
            var D = Sa(y, d);
            for (w = 0; w < x.length; w += 2) {
              var V = x[w], G = x[w + 1];
              V === "style" ? hf(c, G) : V === "dangerouslySetInnerHTML" ? pf(c, G) : V === "children" ? On(c, G) : k(c, V, G, D);
            }
            switch (y) {
              case "input":
                gr(c, d);
                break;
              case "textarea":
                df(c, d);
                break;
              case "select":
                var _ = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var AA = d.value;
                AA != null ? Pr(c, !!d.multiple, AA, !1) : _ !== !!d.multiple && (d.defaultValue != null ? Pr(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Pr(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[io] = d;
          } catch (aA) {
            VA(A, A.return, aA);
          }
        }
        break;
      case 6:
        if (Ye(t, A), st(A), a & 4) {
          if (A.stateNode === null) throw Error(n(162));
          c = A.stateNode, d = A.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (aA) {
            VA(A, A.return, aA);
          }
        }
        break;
      case 3:
        if (Ye(t, A), st(A), a & 4 && i !== null && i.memoizedState.isDehydrated) try {
          Jn(t.containerInfo);
        } catch (aA) {
          VA(A, A.return, aA);
        }
        break;
      case 4:
        Ye(t, A), st(A);
        break;
      case 13:
        Ye(t, A), st(A), c = A.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (tc = GA())), a & 4 && KB(A);
        break;
      case 22:
        if (V = i !== null && i.memoizedState !== null, A.mode & 1 ? (de = (D = de) || V, Ye(t, A), de = D) : Ye(t, A), st(A), a & 8192) {
          if (D = A.memoizedState !== null, (A.stateNode.isHidden = D) && !V && A.mode & 1) for (rA = A, V = A.child; V !== null; ) {
            for (G = rA = V; rA !== null; ) {
              switch (_ = rA, AA = _.child, _.tag) {
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
                    a = _, i = _.return;
                    try {
                      t = a, iA.props = t.memoizedProps, iA.state = t.memoizedState, iA.componentWillUnmount();
                    } catch (aA) {
                      VA(a, i, aA);
                    }
                  }
                  break;
                case 5:
                  ln(_, _.return);
                  break;
                case 22:
                  if (_.memoizedState !== null) {
                    NB(G);
                    continue;
                  }
              }
              AA !== null ? (AA.return = _, rA = AA) : NB(G);
            }
            V = V.sibling;
          }
          A: for (V = null, G = A; ; ) {
            if (G.tag === 5) {
              if (V === null) {
                V = G;
                try {
                  c = G.stateNode, D ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (y = G.stateNode, x = G.memoizedProps.style, w = x != null && x.hasOwnProperty("display") ? x.display : null, y.style.display = wf("display", w));
                } catch (aA) {
                  VA(A, A.return, aA);
                }
              }
            } else if (G.tag === 6) {
              if (V === null) try {
                G.stateNode.nodeValue = D ? "" : G.memoizedProps;
              } catch (aA) {
                VA(A, A.return, aA);
              }
            } else if ((G.tag !== 22 && G.tag !== 23 || G.memoizedState === null || G === A) && G.child !== null) {
              G.child.return = G, G = G.child;
              continue;
            }
            if (G === A) break A;
            for (; G.sibling === null; ) {
              if (G.return === null || G.return === A) break A;
              V === G && (V = null), G = G.return;
            }
            V === G && (V = null), G.sibling.return = G.return, G = G.sibling;
          }
        }
        break;
      case 19:
        Ye(t, A), st(A), a & 4 && KB(A);
        break;
      case 21:
        break;
      default:
        Ye(
          t,
          A
        ), st(A);
    }
  }
  function st(A) {
    var t = A.flags;
    if (t & 2) {
      try {
        A: {
          for (var i = A.return; i !== null; ) {
            if (LB(i)) {
              var a = i;
              break A;
            }
            i = i.return;
          }
          throw Error(n(160));
        }
        switch (a.tag) {
          case 5:
            var c = a.stateNode;
            a.flags & 32 && (On(c, ""), a.flags &= -33);
            var d = TB(A);
            ql(A, d, c);
            break;
          case 3:
          case 4:
            var w = a.stateNode.containerInfo, y = TB(A);
            $l(A, y, w);
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
  function ym(A, t, i) {
    rA = A, RB(A);
  }
  function RB(A, t, i) {
    for (var a = (A.mode & 1) !== 0; rA !== null; ) {
      var c = rA, d = c.child;
      if (c.tag === 22 && a) {
        var w = c.memoizedState !== null || Vi;
        if (!w) {
          var y = c.alternate, x = y !== null && y.memoizedState !== null || de;
          y = Vi;
          var D = de;
          if (Vi = w, (de = x) && !D) for (rA = c; rA !== null; ) w = rA, x = w.child, w.tag === 22 && w.memoizedState !== null ? MB(c) : x !== null ? (x.return = w, rA = x) : MB(c);
          for (; d !== null; ) rA = d, RB(d), d = d.sibling;
          rA = c, Vi = y, de = D;
        }
        OB(A);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, rA = d) : OB(A);
    }
  }
  function OB(A) {
    for (; rA !== null; ) {
      var t = rA;
      if (t.flags & 8772) {
        var i = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              de || Gi(5, t);
              break;
            case 1:
              var a = t.stateNode;
              if (t.flags & 4 && !de) if (i === null) a.componentDidMount();
              else {
                var c = t.elementType === t.type ? i.memoizedProps : ze(t.type, i.memoizedProps);
                a.componentDidUpdate(c, i.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
              }
              var d = t.updateQueue;
              d !== null && Nd(t, d, a);
              break;
            case 3:
              var w = t.updateQueue;
              if (w !== null) {
                if (i = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    i = t.child.stateNode;
                    break;
                  case 1:
                    i = t.child.stateNode;
                }
                Nd(t, w, i);
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
                var D = t.alternate;
                if (D !== null) {
                  var V = D.memoizedState;
                  if (V !== null) {
                    var G = V.dehydrated;
                    G !== null && Jn(G);
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
          de || t.flags & 512 && Zl(t);
        } catch (_) {
          VA(t, t.return, _);
        }
      }
      if (t === A) {
        rA = null;
        break;
      }
      if (i = t.sibling, i !== null) {
        i.return = t.return, rA = i;
        break;
      }
      rA = t.return;
    }
  }
  function NB(A) {
    for (; rA !== null; ) {
      var t = rA;
      if (t === A) {
        rA = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        i.return = t.return, rA = i;
        break;
      }
      rA = t.return;
    }
  }
  function MB(A) {
    for (; rA !== null; ) {
      var t = rA;
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
              var c = t.return;
              try {
                a.componentDidMount();
              } catch (x) {
                VA(t, c, x);
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
            var w = t.return;
            try {
              Zl(t);
            } catch (x) {
              VA(t, w, x);
            }
        }
      } catch (x) {
        VA(t, t.return, x);
      }
      if (t === A) {
        rA = null;
        break;
      }
      var y = t.sibling;
      if (y !== null) {
        y.return = t.return, rA = y;
        break;
      }
      rA = t.return;
    }
  }
  var Um = Math.ceil, Wi = K.ReactCurrentDispatcher, Ac = K.ReactCurrentOwner, Oe = K.ReactCurrentBatchConfig, FA = 0, te = null, JA = null, se = 0, Se = 0, cn = Ot(0), $A = 0, vo = null, Ur = 0, ji = 0, ec = 0, mo = null, ye = null, tc = 0, un = 1 / 0, Ct = null, Xi = !1, rc = null, Gt = null, zi = !1, Wt = null, Ji = 0, Co = 0, nc = null, Yi = -1, Zi = 0;
  function we() {
    return FA & 6 ? GA() : Yi !== -1 ? Yi : Yi = GA();
  }
  function jt(A) {
    return A.mode & 1 ? FA & 2 && se !== 0 ? se & -se : sm.transition !== null ? (Zi === 0 && (Zi = Tf()), Zi) : (A = HA, A !== 0 || (A = window.event, A = A === void 0 ? 16 : _f(A.type)), A) : 1;
  }
  function Ze(A, t, i, a) {
    if (50 < Co) throw Co = 0, nc = null, Error(n(185));
    Gn(A, i, a), (!(FA & 2) || A !== te) && (A === te && (!(FA & 2) && (ji |= i), $A === 4 && Xt(A, se)), Ue(A, a), i === 1 && FA === 0 && !(t.mode & 1) && (un = GA() + 500, Fi && Mt()));
  }
  function Ue(A, t) {
    var i = A.callbackNode;
    sv(A, t);
    var a = ii(A, A === te ? se : 0);
    if (a === 0) i !== null && Sf(i), A.callbackNode = null, A.callbackPriority = 0;
    else if (t = a & -a, A.callbackPriority !== t) {
      if (i != null && Sf(i), t === 1) A.tag === 0 ? im(_B.bind(null, A)) : xd(_B.bind(null, A)), tm(function() {
        !(FA & 6) && Mt();
      }), i = null;
      else {
        switch (Df(a)) {
          case 1:
            i = Ra;
            break;
          case 4:
            i = bf;
            break;
          case 16:
            i = ti;
            break;
          case 536870912:
            i = Lf;
            break;
          default:
            i = ti;
        }
        i = YB(i, PB.bind(null, A));
      }
      A.callbackPriority = t, A.callbackNode = i;
    }
  }
  function PB(A, t) {
    if (Yi = -1, Zi = 0, FA & 6) throw Error(n(327));
    var i = A.callbackNode;
    if (fn() && A.callbackNode !== i) return null;
    var a = ii(A, A === te ? se : 0);
    if (a === 0) return null;
    if (a & 30 || a & A.expiredLanes || t) t = $i(A, a);
    else {
      t = a;
      var c = FA;
      FA |= 2;
      var d = GB();
      (te !== A || se !== t) && (Ct = null, un = GA() + 500, Er(A, t));
      do
        try {
          xm();
          break;
        } catch (y) {
          VB(A, y);
        }
      while (!0);
      Ql(), Wi.current = d, FA = c, JA !== null ? t = 0 : (te = null, se = 0, t = $A);
    }
    if (t !== 0) {
      if (t === 2 && (c = Oa(A), c !== 0 && (a = c, t = oc(A, c))), t === 1) throw i = vo, Er(A, 0), Xt(A, a), Ue(A, GA()), i;
      if (t === 6) Xt(A, a);
      else {
        if (c = A.current.alternate, !(a & 30) && !Fm(c) && (t = $i(A, a), t === 2 && (d = Oa(A), d !== 0 && (a = d, t = oc(A, d))), t === 1)) throw i = vo, Er(A, 0), Xt(A, a), Ue(A, GA()), i;
        switch (A.finishedWork = c, A.finishedLanes = a, t) {
          case 0:
          case 1:
            throw Error(n(345));
          case 2:
            xr(A, ye, Ct);
            break;
          case 3:
            if (Xt(A, a), (a & 130023424) === a && (t = tc + 500 - GA(), 10 < t)) {
              if (ii(A, 0) !== 0) break;
              if (c = A.suspendedLanes, (c & a) !== a) {
                we(), A.pingedLanes |= A.suspendedLanes & c;
                break;
              }
              A.timeoutHandle = ul(xr.bind(null, A, ye, Ct), t);
              break;
            }
            xr(A, ye, Ct);
            break;
          case 4:
            if (Xt(A, a), (a & 4194240) === a) break;
            for (t = A.eventTimes, c = -1; 0 < a; ) {
              var w = 31 - We(a);
              d = 1 << w, w = t[w], w > c && (c = w), a &= ~d;
            }
            if (a = c, a = GA() - a, a = (120 > a ? 120 : 480 > a ? 480 : 1080 > a ? 1080 : 1920 > a ? 1920 : 3e3 > a ? 3e3 : 4320 > a ? 4320 : 1960 * Um(a / 1960)) - a, 10 < a) {
              A.timeoutHandle = ul(xr.bind(null, A, ye, Ct), a);
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
    return Ue(A, GA()), A.callbackNode === i ? PB.bind(null, A) : null;
  }
  function oc(A, t) {
    var i = mo;
    return A.current.memoizedState.isDehydrated && (Er(A, t).flags |= 256), A = $i(A, t), A !== 2 && (t = ye, ye = i, t !== null && ic(t)), A;
  }
  function ic(A) {
    ye === null ? ye = A : ye.push.apply(ye, A);
  }
  function Fm(A) {
    for (var t = A; ; ) {
      if (t.flags & 16384) {
        var i = t.updateQueue;
        if (i !== null && (i = i.stores, i !== null)) for (var a = 0; a < i.length; a++) {
          var c = i[a], d = c.getSnapshot;
          c = c.value;
          try {
            if (!je(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (i = t.child, t.subtreeFlags & 16384 && i !== null) i.return = t, t = i;
      else {
        if (t === A) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === A) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Xt(A, t) {
    for (t &= ~ec, t &= ~ji, A.suspendedLanes |= t, A.pingedLanes &= ~t, A = A.expirationTimes; 0 < t; ) {
      var i = 31 - We(t), a = 1 << i;
      A[i] = -1, t &= ~a;
    }
  }
  function _B(A) {
    if (FA & 6) throw Error(n(327));
    fn();
    var t = ii(A, 0);
    if (!(t & 1)) return Ue(A, GA()), null;
    var i = $i(A, t);
    if (A.tag !== 0 && i === 2) {
      var a = Oa(A);
      a !== 0 && (t = a, i = oc(A, a));
    }
    if (i === 1) throw i = vo, Er(A, 0), Xt(A, t), Ue(A, GA()), i;
    if (i === 6) throw Error(n(345));
    return A.finishedWork = A.current.alternate, A.finishedLanes = t, xr(A, ye, Ct), Ue(A, GA()), null;
  }
  function sc(A, t) {
    var i = FA;
    FA |= 1;
    try {
      return A(t);
    } finally {
      FA = i, FA === 0 && (un = GA() + 500, Fi && Mt());
    }
  }
  function Fr(A) {
    Wt !== null && Wt.tag === 0 && !(FA & 6) && fn();
    var t = FA;
    FA |= 1;
    var i = Oe.transition, a = HA;
    try {
      if (Oe.transition = null, HA = 1, A) return A();
    } finally {
      HA = a, Oe.transition = i, FA = t, !(FA & 6) && Mt();
    }
  }
  function ac() {
    Se = cn.current, KA(cn);
  }
  function Er(A, t) {
    A.finishedWork = null, A.finishedLanes = 0;
    var i = A.timeoutHandle;
    if (i !== -1 && (A.timeoutHandle = -1, em(i)), JA !== null) for (i = JA.return; i !== null; ) {
      var a = i;
      switch (wl(a), a.tag) {
        case 1:
          a = a.type.childContextTypes, a != null && yi();
          break;
        case 3:
          sn(), KA(me), KA(ce), Sl();
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
          ac();
      }
      i = i.return;
    }
    if (te = A, JA = A = zt(A.current, null), se = Se = t, $A = 0, vo = null, ec = ji = Ur = 0, ye = mo = null, Cr !== null) {
      for (t = 0; t < Cr.length; t++) if (i = Cr[t], a = i.interleaved, a !== null) {
        i.interleaved = null;
        var c = a.next, d = i.pending;
        if (d !== null) {
          var w = d.next;
          d.next = c, a.next = w;
        }
        i.pending = a;
      }
      Cr = null;
    }
    return A;
  }
  function VB(A, t) {
    do {
      var i = JA;
      try {
        if (Ql(), Ki.current = Ni, ki) {
          for (var a = PA.memoizedState; a !== null; ) {
            var c = a.queue;
            c !== null && (c.pending = null), a = a.next;
          }
          ki = !1;
        }
        if (yr = 0, ee = ZA = PA = null, fo = !1, Bo = 0, Ac.current = null, i === null || i.return === null) {
          $A = 1, vo = t, JA = null;
          break;
        }
        A: {
          var d = A, w = i.return, y = i, x = t;
          if (t = se, y.flags |= 32768, x !== null && typeof x == "object" && typeof x.then == "function") {
            var D = x, V = y, G = V.tag;
            if (!(V.mode & 1) && (G === 0 || G === 11 || G === 15)) {
              var _ = V.alternate;
              _ ? (V.updateQueue = _.updateQueue, V.memoizedState = _.memoizedState, V.lanes = _.lanes) : (V.updateQueue = null, V.memoizedState = null);
            }
            var AA = BB(w);
            if (AA !== null) {
              AA.flags &= -257, gB(AA, w, y, d, t), AA.mode & 1 && dB(d, D, t), t = AA, x = D;
              var iA = t.updateQueue;
              if (iA === null) {
                var aA = /* @__PURE__ */ new Set();
                aA.add(x), t.updateQueue = aA;
              } else iA.add(x);
              break A;
            } else {
              if (!(t & 1)) {
                dB(d, D, t), lc();
                break A;
              }
              x = Error(n(426));
            }
          } else if (RA && y.mode & 1) {
            var WA = BB(w);
            if (WA !== null) {
              !(WA.flags & 65536) && (WA.flags |= 256), gB(WA, w, y, d, t), ml(an(x, y));
              break A;
            }
          }
          d = x = an(x, y), $A !== 4 && ($A = 2), mo === null ? mo = [d] : mo.push(d), d = w;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, t &= -t, d.lanes |= t;
                var L = uB(d, x, t);
                Od(d, L);
                break A;
              case 1:
                y = x;
                var S = d.type, T = d.stateNode;
                if (!(d.flags & 128) && (typeof S.getDerivedStateFromError == "function" || T !== null && typeof T.componentDidCatch == "function" && (Gt === null || !Gt.has(T)))) {
                  d.flags |= 65536, t &= -t, d.lanes |= t;
                  var z = fB(d, y, t);
                  Od(d, z);
                  break A;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        jB(i);
      } catch (lA) {
        t = lA, JA === i && i !== null && (JA = i = i.return);
        continue;
      }
      break;
    } while (!0);
  }
  function GB() {
    var A = Wi.current;
    return Wi.current = Ni, A === null ? Ni : A;
  }
  function lc() {
    ($A === 0 || $A === 3 || $A === 2) && ($A = 4), te === null || !(Ur & 268435455) && !(ji & 268435455) || Xt(te, se);
  }
  function $i(A, t) {
    var i = FA;
    FA |= 2;
    var a = GB();
    (te !== A || se !== t) && (Ct = null, Er(A, t));
    do
      try {
        Em();
        break;
      } catch (c) {
        VB(A, c);
      }
    while (!0);
    if (Ql(), FA = i, Wi.current = a, JA !== null) throw Error(n(261));
    return te = null, se = 0, $A;
  }
  function Em() {
    for (; JA !== null; ) WB(JA);
  }
  function xm() {
    for (; JA !== null && !$0(); ) WB(JA);
  }
  function WB(A) {
    var t = JB(A.alternate, A, Se);
    A.memoizedProps = A.pendingProps, t === null ? jB(A) : JA = t, Ac.current = null;
  }
  function jB(A) {
    var t = A;
    do {
      var i = t.alternate;
      if (A = t.return, t.flags & 32768) {
        if (i = mm(i, t), i !== null) {
          i.flags &= 32767, JA = i;
          return;
        }
        if (A !== null) A.flags |= 32768, A.subtreeFlags = 0, A.deletions = null;
        else {
          $A = 6, JA = null;
          return;
        }
      } else if (i = vm(i, t, Se), i !== null) {
        JA = i;
        return;
      }
      if (t = t.sibling, t !== null) {
        JA = t;
        return;
      }
      JA = t = A;
    } while (t !== null);
    $A === 0 && ($A = 5);
  }
  function xr(A, t, i) {
    var a = HA, c = Oe.transition;
    try {
      Oe.transition = null, HA = 1, Im(A, t, i, a);
    } finally {
      Oe.transition = c, HA = a;
    }
    return null;
  }
  function Im(A, t, i, a) {
    do
      fn();
    while (Wt !== null);
    if (FA & 6) throw Error(n(327));
    i = A.finishedWork;
    var c = A.finishedLanes;
    if (i === null) return null;
    if (A.finishedWork = null, A.finishedLanes = 0, i === A.current) throw Error(n(177));
    A.callbackNode = null, A.callbackPriority = 0;
    var d = i.lanes | i.childLanes;
    if (av(A, d), A === te && (JA = te = null, se = 0), !(i.subtreeFlags & 2064) && !(i.flags & 2064) || zi || (zi = !0, YB(ti, function() {
      return fn(), null;
    })), d = (i.flags & 15990) !== 0, i.subtreeFlags & 15990 || d) {
      d = Oe.transition, Oe.transition = null;
      var w = HA;
      HA = 1;
      var y = FA;
      FA |= 4, Ac.current = null, Qm(A, i), kB(i, A), zv(ll), li = !!al, ll = al = null, A.current = i, ym(i), q0(), FA = y, HA = w, Oe.transition = d;
    } else A.current = i;
    if (zi && (zi = !1, Wt = A, Ji = c), d = A.pendingLanes, d === 0 && (Gt = null), tv(i.stateNode), Ue(A, GA()), t !== null) for (a = A.onRecoverableError, i = 0; i < t.length; i++) c = t[i], a(c.value, { componentStack: c.stack, digest: c.digest });
    if (Xi) throw Xi = !1, A = rc, rc = null, A;
    return Ji & 1 && A.tag !== 0 && fn(), d = A.pendingLanes, d & 1 ? A === nc ? Co++ : (Co = 0, nc = A) : Co = 0, Mt(), null;
  }
  function fn() {
    if (Wt !== null) {
      var A = Df(Ji), t = Oe.transition, i = HA;
      try {
        if (Oe.transition = null, HA = 16 > A ? 16 : A, Wt === null) var a = !1;
        else {
          if (A = Wt, Wt = null, Ji = 0, FA & 6) throw Error(n(331));
          var c = FA;
          for (FA |= 4, rA = A.current; rA !== null; ) {
            var d = rA, w = d.child;
            if (rA.flags & 16) {
              var y = d.deletions;
              if (y !== null) {
                for (var x = 0; x < y.length; x++) {
                  var D = y[x];
                  for (rA = D; rA !== null; ) {
                    var V = rA;
                    switch (V.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ho(8, V, d);
                    }
                    var G = V.child;
                    if (G !== null) G.return = V, rA = G;
                    else for (; rA !== null; ) {
                      V = rA;
                      var _ = V.sibling, AA = V.return;
                      if (bB(V), V === D) {
                        rA = null;
                        break;
                      }
                      if (_ !== null) {
                        _.return = AA, rA = _;
                        break;
                      }
                      rA = AA;
                    }
                  }
                }
                var iA = d.alternate;
                if (iA !== null) {
                  var aA = iA.child;
                  if (aA !== null) {
                    iA.child = null;
                    do {
                      var WA = aA.sibling;
                      aA.sibling = null, aA = WA;
                    } while (aA !== null);
                  }
                }
                rA = d;
              }
            }
            if (d.subtreeFlags & 2064 && w !== null) w.return = d, rA = w;
            else A: for (; rA !== null; ) {
              if (d = rA, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  ho(9, d, d.return);
              }
              var L = d.sibling;
              if (L !== null) {
                L.return = d.return, rA = L;
                break A;
              }
              rA = d.return;
            }
          }
          var S = A.current;
          for (rA = S; rA !== null; ) {
            w = rA;
            var T = w.child;
            if (w.subtreeFlags & 2064 && T !== null) T.return = w, rA = T;
            else A: for (w = S; rA !== null; ) {
              if (y = rA, y.flags & 2048) try {
                switch (y.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Gi(9, y);
                }
              } catch (lA) {
                VA(y, y.return, lA);
              }
              if (y === w) {
                rA = null;
                break A;
              }
              var z = y.sibling;
              if (z !== null) {
                z.return = y.return, rA = z;
                break A;
              }
              rA = y.return;
            }
          }
          if (FA = c, Mt(), rt && typeof rt.onPostCommitFiberRoot == "function") try {
            rt.onPostCommitFiberRoot(ri, A);
          } catch {
          }
          a = !0;
        }
        return a;
      } finally {
        HA = i, Oe.transition = t;
      }
    }
    return !1;
  }
  function XB(A, t, i) {
    t = an(i, t), t = uB(A, t, 1), A = _t(A, t, 1), t = we(), A !== null && (Gn(A, 1, t), Ue(A, t));
  }
  function VA(A, t, i) {
    if (A.tag === 3) XB(A, A, i);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        XB(t, A, i);
        break;
      } else if (t.tag === 1) {
        var a = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Gt === null || !Gt.has(a))) {
          A = an(i, A), A = fB(t, A, 1), t = _t(t, A, 1), A = we(), t !== null && (Gn(t, 1, A), Ue(t, A));
          break;
        }
      }
      t = t.return;
    }
  }
  function Hm(A, t, i) {
    var a = A.pingCache;
    a !== null && a.delete(t), t = we(), A.pingedLanes |= A.suspendedLanes & i, te === A && (se & i) === i && ($A === 4 || $A === 3 && (se & 130023424) === se && 500 > GA() - tc ? Er(A, 0) : ec |= i), Ue(A, t);
  }
  function zB(A, t) {
    t === 0 && (A.mode & 1 ? (t = oi, oi <<= 1, !(oi & 130023424) && (oi = 4194304)) : t = 1);
    var i = we();
    A = ht(A, t), A !== null && (Gn(A, t, i), Ue(A, i));
  }
  function Sm(A) {
    var t = A.memoizedState, i = 0;
    t !== null && (i = t.retryLane), zB(A, i);
  }
  function bm(A, t) {
    var i = 0;
    switch (A.tag) {
      case 13:
        var a = A.stateNode, c = A.memoizedState;
        c !== null && (i = c.retryLane);
        break;
      case 19:
        a = A.stateNode;
        break;
      default:
        throw Error(n(314));
    }
    a !== null && a.delete(t), zB(A, i);
  }
  var JB;
  JB = function(A, t, i) {
    if (A !== null) if (A.memoizedProps !== t.pendingProps || me.current) Qe = !0;
    else {
      if (!(A.lanes & i) && !(t.flags & 128)) return Qe = !1, hm(A, t, i);
      Qe = !!(A.flags & 131072);
    }
    else Qe = !1, RA && t.flags & 1048576 && Id(t, xi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var a = t.type;
        _i(A, t), A = t.pendingProps;
        var c = qr(t, ce.current);
        on(t, i), c = Tl(null, t, a, A, c, i);
        var d = Dl();
        return t.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ce(a) ? (d = !0, Ui(t)) : d = !1, t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, El(t), c.updater = Mi, t.stateNode = c, c._reactInternals = t, Ml(t, a, A, i), t = Gl(null, t, a, !0, d, i)) : (t.tag = 0, RA && d && pl(t), pe(null, t, c, i), t = t.child), t;
      case 16:
        a = t.elementType;
        A: {
          switch (_i(A, t), A = t.pendingProps, c = a._init, a = c(a._payload), t.type = a, c = t.tag = Tm(a), A = ze(a, A), c) {
            case 0:
              t = Vl(null, t, a, A, i);
              break A;
            case 1:
              t = CB(null, t, a, A, i);
              break A;
            case 11:
              t = pB(null, t, a, A, i);
              break A;
            case 14:
              t = wB(null, t, a, ze(a.type, A), i);
              break A;
          }
          throw Error(n(
            306,
            a,
            ""
          ));
        }
        return t;
      case 0:
        return a = t.type, c = t.pendingProps, c = t.elementType === a ? c : ze(a, c), Vl(A, t, a, c, i);
      case 1:
        return a = t.type, c = t.pendingProps, c = t.elementType === a ? c : ze(a, c), CB(A, t, a, c, i);
      case 3:
        A: {
          if (QB(t), A === null) throw Error(n(387));
          a = t.pendingProps, d = t.memoizedState, c = d.element, Rd(A, t), Ti(t, a, null, i);
          var w = t.memoizedState;
          if (a = w.element, d.isDehydrated) if (d = { element: a, isDehydrated: !1, cache: w.cache, pendingSuspenseBoundaries: w.pendingSuspenseBoundaries, transitions: w.transitions }, t.updateQueue.baseState = d, t.memoizedState = d, t.flags & 256) {
            c = an(Error(n(423)), t), t = yB(A, t, a, i, c);
            break A;
          } else if (a !== c) {
            c = an(Error(n(424)), t), t = yB(A, t, a, i, c);
            break A;
          } else for (He = Rt(t.stateNode.containerInfo.firstChild), Ie = t, RA = !0, Xe = null, i = Kd(t, null, a, i), t.child = i; i; ) i.flags = i.flags & -3 | 4096, i = i.sibling;
          else {
            if (tn(), a === c) {
              t = mt(A, t, i);
              break A;
            }
            pe(A, t, a, i);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Md(t), A === null && vl(t), a = t.type, c = t.pendingProps, d = A !== null ? A.memoizedProps : null, w = c.children, cl(a, c) ? w = null : d !== null && cl(a, d) && (t.flags |= 32), mB(A, t), pe(A, t, w, i), t.child;
      case 6:
        return A === null && vl(t), null;
      case 13:
        return UB(A, t, i);
      case 4:
        return xl(t, t.stateNode.containerInfo), a = t.pendingProps, A === null ? t.child = rn(t, null, a, i) : pe(A, t, a, i), t.child;
      case 11:
        return a = t.type, c = t.pendingProps, c = t.elementType === a ? c : ze(a, c), pB(A, t, a, c, i);
      case 7:
        return pe(A, t, t.pendingProps, i), t.child;
      case 8:
        return pe(A, t, t.pendingProps.children, i), t.child;
      case 12:
        return pe(A, t, t.pendingProps.children, i), t.child;
      case 10:
        A: {
          if (a = t.type._context, c = t.pendingProps, d = t.memoizedProps, w = c.value, bA(Si, a._currentValue), a._currentValue = w, d !== null) if (je(d.value, w)) {
            if (d.children === c.children && !me.current) {
              t = mt(A, t, i);
              break A;
            }
          } else for (d = t.child, d !== null && (d.return = t); d !== null; ) {
            var y = d.dependencies;
            if (y !== null) {
              w = d.child;
              for (var x = y.firstContext; x !== null; ) {
                if (x.context === a) {
                  if (d.tag === 1) {
                    x = vt(-1, i & -i), x.tag = 2;
                    var D = d.updateQueue;
                    if (D !== null) {
                      D = D.shared;
                      var V = D.pending;
                      V === null ? x.next = x : (x.next = V.next, V.next = x), D.pending = x;
                    }
                  }
                  d.lanes |= i, x = d.alternate, x !== null && (x.lanes |= i), Ul(
                    d.return,
                    i,
                    t
                  ), y.lanes |= i;
                  break;
                }
                x = x.next;
              }
            } else if (d.tag === 10) w = d.type === t.type ? null : d.child;
            else if (d.tag === 18) {
              if (w = d.return, w === null) throw Error(n(341));
              w.lanes |= i, y = w.alternate, y !== null && (y.lanes |= i), Ul(w, i, t), w = d.sibling;
            } else w = d.child;
            if (w !== null) w.return = d;
            else for (w = d; w !== null; ) {
              if (w === t) {
                w = null;
                break;
              }
              if (d = w.sibling, d !== null) {
                d.return = w.return, w = d;
                break;
              }
              w = w.return;
            }
            d = w;
          }
          pe(A, t, c.children, i), t = t.child;
        }
        return t;
      case 9:
        return c = t.type, a = t.pendingProps.children, on(t, i), c = ke(c), a = a(c), t.flags |= 1, pe(A, t, a, i), t.child;
      case 14:
        return a = t.type, c = ze(a, t.pendingProps), c = ze(a.type, c), wB(A, t, a, c, i);
      case 15:
        return hB(A, t, t.type, t.pendingProps, i);
      case 17:
        return a = t.type, c = t.pendingProps, c = t.elementType === a ? c : ze(a, c), _i(A, t), t.tag = 1, Ce(a) ? (A = !0, Ui(t)) : A = !1, on(t, i), lB(t, a, c), Ml(t, a, c, i), Gl(null, t, a, !0, A, i);
      case 19:
        return EB(A, t, i);
      case 22:
        return vB(A, t, i);
    }
    throw Error(n(156, t.tag));
  };
  function YB(A, t) {
    return Hf(A, t);
  }
  function Lm(A, t, i, a) {
    this.tag = A, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ne(A, t, i, a) {
    return new Lm(A, t, i, a);
  }
  function cc(A) {
    return A = A.prototype, !(!A || !A.isReactComponent);
  }
  function Tm(A) {
    if (typeof A == "function") return cc(A) ? 1 : 0;
    if (A != null) {
      if (A = A.$$typeof, A === Z) return 11;
      if (A === gA) return 14;
    }
    return 2;
  }
  function zt(A, t) {
    var i = A.alternate;
    return i === null ? (i = Ne(A.tag, t, A.key, A.mode), i.elementType = A.elementType, i.type = A.type, i.stateNode = A.stateNode, i.alternate = A, A.alternate = i) : (i.pendingProps = t, i.type = A.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = A.flags & 14680064, i.childLanes = A.childLanes, i.lanes = A.lanes, i.child = A.child, i.memoizedProps = A.memoizedProps, i.memoizedState = A.memoizedState, i.updateQueue = A.updateQueue, t = A.dependencies, i.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, i.sibling = A.sibling, i.index = A.index, i.ref = A.ref, i;
  }
  function qi(A, t, i, a, c, d) {
    var w = 2;
    if (a = A, typeof A == "function") cc(A) && (w = 1);
    else if (typeof A == "string") w = 5;
    else A: switch (A) {
      case P:
        return Ir(i.children, c, d, t);
      case X:
        w = 8, c |= 8;
        break;
      case J:
        return A = Ne(12, i, t, c | 2), A.elementType = J, A.lanes = d, A;
      case $:
        return A = Ne(13, i, t, c), A.elementType = $, A.lanes = d, A;
      case nA:
        return A = Ne(19, i, t, c), A.elementType = nA, A.lanes = d, A;
      case eA:
        return As(i, c, d, t);
      default:
        if (typeof A == "object" && A !== null) switch (A.$$typeof) {
          case sA:
            w = 10;
            break A;
          case pA:
            w = 9;
            break A;
          case Z:
            w = 11;
            break A;
          case gA:
            w = 14;
            break A;
          case oA:
            w = 16, a = null;
            break A;
        }
        throw Error(n(130, A == null ? A : typeof A, ""));
    }
    return t = Ne(w, i, t, c), t.elementType = A, t.type = a, t.lanes = d, t;
  }
  function Ir(A, t, i, a) {
    return A = Ne(7, A, a, t), A.lanes = i, A;
  }
  function As(A, t, i, a) {
    return A = Ne(22, A, a, t), A.elementType = eA, A.lanes = i, A.stateNode = { isHidden: !1 }, A;
  }
  function uc(A, t, i) {
    return A = Ne(6, A, null, t), A.lanes = i, A;
  }
  function fc(A, t, i) {
    return t = Ne(4, A.children !== null ? A.children : [], A.key, t), t.lanes = i, t.stateNode = { containerInfo: A.containerInfo, pendingChildren: null, implementation: A.implementation }, t;
  }
  function Dm(A, t, i, a, c) {
    this.tag = t, this.containerInfo = A, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Na(0), this.expirationTimes = Na(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Na(0), this.identifierPrefix = a, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function dc(A, t, i, a, c, d, w, y, x) {
    return A = new Dm(A, t, i, y, x), t === 1 ? (t = 1, d === !0 && (t |= 8)) : t = 0, d = Ne(3, null, null, t), A.current = d, d.stateNode = A, d.memoizedState = { element: a, isDehydrated: i, cache: null, transitions: null, pendingSuspenseBoundaries: null }, El(d), A;
  }
  function Km(A, t, i) {
    var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: O, key: a == null ? null : "" + a, children: A, containerInfo: t, implementation: i };
  }
  function ZB(A) {
    if (!A) return Nt;
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
      if (Ce(i)) return Fd(A, i, t);
    }
    return t;
  }
  function $B(A, t, i, a, c, d, w, y, x) {
    return A = dc(i, a, !0, A, c, d, w, y, x), A.context = ZB(null), i = A.current, a = we(), c = jt(i), d = vt(a, c), d.callback = t ?? null, _t(i, d, c), A.current.lanes = c, Gn(A, c, a), Ue(A, a), A;
  }
  function es(A, t, i, a) {
    var c = t.current, d = we(), w = jt(c);
    return i = ZB(i), t.context === null ? t.context = i : t.pendingContext = i, t = vt(d, w), t.payload = { element: A }, a = a === void 0 ? null : a, a !== null && (t.callback = a), A = _t(c, t, w), A !== null && (Ze(A, c, w, d), Li(A, c, w)), w;
  }
  function ts(A) {
    if (A = A.current, !A.child) return null;
    switch (A.child.tag) {
      case 5:
        return A.child.stateNode;
      default:
        return A.child.stateNode;
    }
  }
  function qB(A, t) {
    if (A = A.memoizedState, A !== null && A.dehydrated !== null) {
      var i = A.retryLane;
      A.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function Bc(A, t) {
    qB(A, t), (A = A.alternate) && qB(A, t);
  }
  function km() {
    return null;
  }
  var Ag = typeof reportError == "function" ? reportError : function(A) {
    console.error(A);
  };
  function gc(A) {
    this._internalRoot = A;
  }
  rs.prototype.render = gc.prototype.render = function(A) {
    var t = this._internalRoot;
    if (t === null) throw Error(n(409));
    es(A, t, null, null);
  }, rs.prototype.unmount = gc.prototype.unmount = function() {
    var A = this._internalRoot;
    if (A !== null) {
      this._internalRoot = null;
      var t = A.containerInfo;
      Fr(function() {
        es(null, A, null, null);
      }), t[Bt] = null;
    }
  };
  function rs(A) {
    this._internalRoot = A;
  }
  rs.prototype.unstable_scheduleHydration = function(A) {
    if (A) {
      var t = Rf();
      A = { blockedOn: null, target: A, priority: t };
      for (var i = 0; i < Dt.length && t !== 0 && t < Dt[i].priority; i++) ;
      Dt.splice(i, 0, A), i === 0 && Mf(A);
    }
  };
  function pc(A) {
    return !(!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11);
  }
  function ns(A) {
    return !(!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11 && (A.nodeType !== 8 || A.nodeValue !== " react-mount-point-unstable "));
  }
  function eg() {
  }
  function Rm(A, t, i, a, c) {
    if (c) {
      if (typeof a == "function") {
        var d = a;
        a = function() {
          var D = ts(w);
          d.call(D);
        };
      }
      var w = $B(t, a, A, 0, null, !1, !1, "", eg);
      return A._reactRootContainer = w, A[Bt] = w.current, no(A.nodeType === 8 ? A.parentNode : A), Fr(), w;
    }
    for (; c = A.lastChild; ) A.removeChild(c);
    if (typeof a == "function") {
      var y = a;
      a = function() {
        var D = ts(x);
        y.call(D);
      };
    }
    var x = dc(A, 0, !1, null, null, !1, !1, "", eg);
    return A._reactRootContainer = x, A[Bt] = x.current, no(A.nodeType === 8 ? A.parentNode : A), Fr(function() {
      es(t, x, i, a);
    }), x;
  }
  function os(A, t, i, a, c) {
    var d = i._reactRootContainer;
    if (d) {
      var w = d;
      if (typeof c == "function") {
        var y = c;
        c = function() {
          var x = ts(w);
          y.call(x);
        };
      }
      es(t, w, A, c);
    } else w = Rm(i, t, A, c, a);
    return ts(w);
  }
  Kf = function(A) {
    switch (A.tag) {
      case 3:
        var t = A.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var i = Vn(t.pendingLanes);
          i !== 0 && (Ma(t, i | 1), Ue(t, GA()), !(FA & 6) && (un = GA() + 500, Mt()));
        }
        break;
      case 13:
        Fr(function() {
          var a = ht(A, 1);
          if (a !== null) {
            var c = we();
            Ze(a, A, 1, c);
          }
        }), Bc(A, 1);
    }
  }, Pa = function(A) {
    if (A.tag === 13) {
      var t = ht(A, 134217728);
      if (t !== null) {
        var i = we();
        Ze(t, A, 134217728, i);
      }
      Bc(A, 134217728);
    }
  }, kf = function(A) {
    if (A.tag === 13) {
      var t = jt(A), i = ht(A, t);
      if (i !== null) {
        var a = we();
        Ze(i, A, t, a);
      }
      Bc(A, t);
    }
  }, Rf = function() {
    return HA;
  }, Of = function(A, t) {
    var i = HA;
    try {
      return HA = A, t();
    } finally {
      HA = i;
    }
  }, Ta = function(A, t, i) {
    switch (t) {
      case "input":
        if (gr(A, i), t = i.name, i.type === "radio" && t != null) {
          for (i = A; i.parentNode; ) i = i.parentNode;
          for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < i.length; t++) {
            var a = i[t];
            if (a !== A && a.form === A.form) {
              var c = Qi(a);
              if (!c) throw Error(n(90));
              NA(a), gr(a, c);
            }
          }
        }
        break;
      case "textarea":
        df(A, i);
        break;
      case "select":
        t = i.value, t != null && Pr(A, !!i.multiple, t, !1);
    }
  }, Qf = sc, yf = Fr;
  var Om = { usingClientEntryPoint: !1, Events: [so, Zr, Qi, mf, Cf, sc] }, Qo = { findFiberByHostInstance: wr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Nm = { bundleType: Qo.bundleType, version: Qo.version, rendererPackageName: Qo.rendererPackageName, rendererConfig: Qo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: K.ReactCurrentDispatcher, findHostInstanceByFiber: function(A) {
    return A = xf(A), A === null ? null : A.stateNode;
  }, findFiberByHostInstance: Qo.findFiberByHostInstance || km, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var is = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!is.isDisabled && is.supportsFiber) try {
      ri = is.inject(Nm), rt = is;
    } catch {
    }
  }
  return Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Om, Fe.createPortal = function(A, t) {
    var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!pc(t)) throw Error(n(200));
    return Km(A, t, null, i);
  }, Fe.createRoot = function(A, t) {
    if (!pc(A)) throw Error(n(299));
    var i = !1, a = "", c = Ag;
    return t != null && (t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = dc(A, 1, !1, null, null, i, !1, a, c), A[Bt] = t.current, no(A.nodeType === 8 ? A.parentNode : A), new gc(t);
  }, Fe.findDOMNode = function(A) {
    if (A == null) return null;
    if (A.nodeType === 1) return A;
    var t = A._reactInternals;
    if (t === void 0)
      throw typeof A.render == "function" ? Error(n(188)) : (A = Object.keys(A).join(","), Error(n(268, A)));
    return A = xf(t), A = A === null ? null : A.stateNode, A;
  }, Fe.flushSync = function(A) {
    return Fr(A);
  }, Fe.hydrate = function(A, t, i) {
    if (!ns(t)) throw Error(n(200));
    return os(null, A, t, !0, i);
  }, Fe.hydrateRoot = function(A, t, i) {
    if (!pc(A)) throw Error(n(405));
    var a = i != null && i.hydratedSources || null, c = !1, d = "", w = Ag;
    if (i != null && (i.unstable_strictMode === !0 && (c = !0), i.identifierPrefix !== void 0 && (d = i.identifierPrefix), i.onRecoverableError !== void 0 && (w = i.onRecoverableError)), t = $B(t, null, A, 1, i ?? null, c, !1, d, w), A[Bt] = t.current, no(A), a) for (A = 0; A < a.length; A++) i = a[A], c = i._getVersion, c = c(i._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [i, c] : t.mutableSourceEagerHydrationData.push(
      i,
      c
    );
    return new rs(t);
  }, Fe.render = function(A, t, i) {
    if (!ns(t)) throw Error(n(200));
    return os(null, A, t, !1, i);
  }, Fe.unmountComponentAtNode = function(A) {
    if (!ns(A)) throw Error(n(40));
    return A._reactRootContainer ? (Fr(function() {
      os(null, null, A, !1, function() {
        A._reactRootContainer = null, A[Bt] = null;
      });
    }), !0) : !1;
  }, Fe.unstable_batchedUpdates = sc, Fe.unstable_renderSubtreeIntoContainer = function(A, t, i, a) {
    if (!ns(i)) throw Error(n(200));
    if (A == null || A._reactInternals === void 0) throw Error(n(38));
    return os(A, t, i, !1, a);
  }, Fe.version = "18.3.1-next-f1338f8080-20240426", Fe;
}
function kp() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kp);
    } catch (e) {
      console.error(e);
    }
}
kp(), Kp.exports = jm();
var Or = Kp.exports;
const Xm = /* @__PURE__ */ Tp(Or);
var ag = Or;
$c.createRoot = ag.createRoot, $c.hydrateRoot = ag.hydrateRoot;
var m = ku();
const $t = /* @__PURE__ */ Tp(m), zm = /* @__PURE__ */ Pm({
  __proto__: null,
  default: $t
}, [m]);
function Jm(e, r) {
  typeof e == "function" ? e(r) : e != null && (e.current = r);
}
function Rp(...e) {
  return (r) => e.forEach((n) => Jm(n, r));
}
function zA(...e) {
  return m.useCallback(Rp(...e), e);
}
var Dr = m.forwardRef((e, r) => {
  const { children: n, ...o } = e, s = m.Children.toArray(n), l = s.find(Zm);
  if (l) {
    const u = l.props.children, f = s.map((B) => B === l ? m.Children.count(u) > 1 ? m.Children.only(null) : m.isValidElement(u) ? u.props.children : null : B);
    return /* @__PURE__ */ b.jsx(qc, { ...o, ref: r, children: m.isValidElement(u) ? m.cloneElement(u, void 0, f) : null });
  }
  return /* @__PURE__ */ b.jsx(qc, { ...o, ref: r, children: n });
});
Dr.displayName = "Slot";
var qc = m.forwardRef((e, r) => {
  const { children: n, ...o } = e;
  if (m.isValidElement(n)) {
    const s = qm(n);
    return m.cloneElement(n, {
      ...$m(o, n.props),
      // @ts-ignore
      ref: r ? Rp(r, s) : s
    });
  }
  return m.Children.count(n) > 1 ? m.Children.only(null) : null;
});
qc.displayName = "SlotClone";
var Ym = ({ children: e }) => /* @__PURE__ */ b.jsx(b.Fragment, { children: e });
function Zm(e) {
  return m.isValidElement(e) && e.type === Ym;
}
function $m(e, r) {
  const n = { ...r };
  for (const o in r) {
    const s = e[o], l = r[o];
    /^on[A-Z]/.test(o) ? s && l ? n[o] = (...f) => {
      l(...f), s(...f);
    } : s && (n[o] = s) : o === "style" ? n[o] = { ...s, ...l } : o === "className" && (n[o] = [s, l].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function qm(e) {
  let r = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = r && "isReactWarning" in r && r.isReactWarning;
  return n ? e.ref : (r = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = r && "isReactWarning" in r && r.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Op(e) {
  var r, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (r = 0; r < e.length; r++) e[r] && (n = Op(e[r])) && (o && (o += " "), o += n);
  else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function AC() {
  for (var e, r, n = 0, o = ""; n < arguments.length; ) (e = arguments[n++]) && (r = Op(e)) && (o && (o += " "), o += r);
  return o;
}
const lg = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, cg = AC, Ru = (e, r) => (n) => {
  var o;
  if (r?.variants == null) return cg(e, n?.class, n?.className);
  const { variants: s, defaultVariants: l } = r, u = Object.keys(s).map((g) => {
    const p = n?.[g], h = l?.[g];
    if (p === null) return null;
    const v = lg(p) || lg(h);
    return s[g][v];
  }), f = n && Object.entries(n).reduce((g, p) => {
    let [h, v] = p;
    return v === void 0 || (g[h] = v), g;
  }, {}), B = r == null || (o = r.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((g, p) => {
    let { class: h, className: v, ...U } = p;
    return Object.entries(U).every((Q) => {
      let [C, E] = Q;
      return Array.isArray(E) ? E.includes({
        ...l,
        ...f
      }[C]) : {
        ...l,
        ...f
      }[C] === E;
    }) ? [
      ...g,
      h,
      v
    ] : g;
  }, []);
  return cg(e, u, B, n?.class, n?.className);
};
function Np(e) {
  var r, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (r = 0; r < s; r++) e[r] && (n = Np(e[r])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function eC() {
  for (var e, r, n = 0, o = "", s = arguments.length; n < s; n++) (e = arguments[n]) && (r = Np(e)) && (o && (o += " "), o += r);
  return o;
}
const Ou = "-", tC = (e) => {
  const r = nC(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (u) => {
      const f = u.split(Ou);
      return f[0] === "" && f.length !== 1 && f.shift(), Mp(f, r) || rC(u);
    },
    getConflictingClassGroupIds: (u, f) => {
      const B = n[u] || [];
      return f && o[u] ? [...B, ...o[u]] : B;
    }
  };
}, Mp = (e, r) => {
  if (e.length === 0)
    return r.classGroupId;
  const n = e[0], o = r.nextPart.get(n), s = o ? Mp(e.slice(1), o) : void 0;
  if (s)
    return s;
  if (r.validators.length === 0)
    return;
  const l = e.join(Ou);
  return r.validators.find(({
    validator: u
  }) => u(l))?.classGroupId;
}, ug = /^\[(.+)\]$/, rC = (e) => {
  if (ug.test(e)) {
    const r = ug.exec(e)[1], n = r?.substring(0, r.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, nC = (e) => {
  const {
    theme: r,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return iC(Object.entries(e.classGroups), n).forEach(([l, u]) => {
    Au(u, o, l, r);
  }), o;
}, Au = (e, r, n, o) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const l = s === "" ? r : fg(r, s);
      l.classGroupId = n;
      return;
    }
    if (typeof s == "function") {
      if (oC(s)) {
        Au(s(o), r, n, o);
        return;
      }
      r.validators.push({
        validator: s,
        classGroupId: n
      });
      return;
    }
    Object.entries(s).forEach(([l, u]) => {
      Au(u, fg(r, l), n, o);
    });
  });
}, fg = (e, r) => {
  let n = e;
  return r.split(Ou).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, oC = (e) => e.isThemeGetter, iC = (e, r) => r ? e.map(([n, o]) => {
  const s = o.map((l) => typeof l == "string" ? r + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([u, f]) => [r + u, f])) : l);
  return [n, s];
}) : e, sC = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const s = (l, u) => {
    n.set(l, u), r++, r > e && (r = 0, o = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(l) {
      let u = n.get(l);
      if (u !== void 0)
        return u;
      if ((u = o.get(l)) !== void 0)
        return s(l, u), u;
    },
    set(l, u) {
      n.has(l) ? n.set(l, u) : s(l, u);
    }
  };
}, Pp = "!", aC = (e) => {
  const {
    separator: r,
    experimentalParseClassName: n
  } = e, o = r.length === 1, s = r[0], l = r.length, u = (f) => {
    const B = [];
    let g = 0, p = 0, h;
    for (let E = 0; E < f.length; E++) {
      let F = f[E];
      if (g === 0) {
        if (F === s && (o || f.slice(E, E + l) === r)) {
          B.push(f.slice(p, E)), p = E + l;
          continue;
        }
        if (F === "/") {
          h = E;
          continue;
        }
      }
      F === "[" ? g++ : F === "]" && g--;
    }
    const v = B.length === 0 ? f : f.substring(p), U = v.startsWith(Pp), Q = U ? v.substring(1) : v, C = h && h > p ? h - p : void 0;
    return {
      modifiers: B,
      hasImportantModifier: U,
      baseClassName: Q,
      maybePostfixModifierPosition: C
    };
  };
  return n ? (f) => n({
    className: f,
    parseClassName: u
  }) : u;
}, lC = (e) => {
  if (e.length <= 1)
    return e;
  const r = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (r.push(...n.sort(), o), n = []) : n.push(o);
  }), r.push(...n.sort()), r;
}, cC = (e) => ({
  cache: sC(e.cacheSize),
  parseClassName: aC(e),
  ...tC(e)
}), uC = /\s+/, fC = (e, r) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: s
  } = r, l = [], u = e.trim().split(uC);
  let f = "";
  for (let B = u.length - 1; B >= 0; B -= 1) {
    const g = u[B], {
      modifiers: p,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: U
    } = n(g);
    let Q = !!U, C = o(Q ? v.substring(0, U) : v);
    if (!C) {
      if (!Q) {
        f = g + (f.length > 0 ? " " + f : f);
        continue;
      }
      if (C = o(v), !C) {
        f = g + (f.length > 0 ? " " + f : f);
        continue;
      }
      Q = !1;
    }
    const E = lC(p).join(":"), F = h ? E + Pp : E, H = F + C;
    if (l.includes(H))
      continue;
    l.push(H);
    const k = s(C, Q);
    for (let K = 0; K < k.length; ++K) {
      const R = k[K];
      l.push(F + R);
    }
    f = g + (f.length > 0 ? " " + f : f);
  }
  return f;
};
function dC() {
  let e = 0, r, n, o = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (n = _p(r)) && (o && (o += " "), o += n);
  return o;
}
const _p = (e) => {
  if (typeof e == "string")
    return e;
  let r, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (r = _p(e[o])) && (n && (n += " "), n += r);
  return n;
};
function BC(e, ...r) {
  let n, o, s, l = u;
  function u(B) {
    const g = r.reduce((p, h) => h(p), e());
    return n = cC(g), o = n.cache.get, s = n.cache.set, l = f, f(B);
  }
  function f(B) {
    const g = o(B);
    if (g)
      return g;
    const p = fC(B, n);
    return s(B, p), p;
  }
  return function() {
    return l(dC.apply(null, arguments));
  };
}
const kA = (e) => {
  const r = (n) => n[e] || [];
  return r.isThemeGetter = !0, r;
}, Vp = /^\[(?:([a-z-]+):)?(.+)\]$/i, gC = /^\d+\/\d+$/, pC = /* @__PURE__ */ new Set(["px", "full", "screen"]), wC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, hC = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, vC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, mC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, CC = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Qt = (e) => Fn(e) || pC.has(e) || gC.test(e), Yt = (e) => Ln(e, "length", HC), Fn = (e) => !!e && !Number.isNaN(Number(e)), mc = (e) => Ln(e, "number", Fn), Uo = (e) => !!e && Number.isInteger(Number(e)), QC = (e) => e.endsWith("%") && Fn(e.slice(0, -1)), mA = (e) => Vp.test(e), Zt = (e) => wC.test(e), yC = /* @__PURE__ */ new Set(["length", "size", "percentage"]), UC = (e) => Ln(e, yC, Gp), FC = (e) => Ln(e, "position", Gp), EC = /* @__PURE__ */ new Set(["image", "url"]), xC = (e) => Ln(e, EC, bC), IC = (e) => Ln(e, "", SC), Fo = () => !0, Ln = (e, r, n) => {
  const o = Vp.exec(e);
  return o ? o[1] ? typeof r == "string" ? o[1] === r : r.has(o[1]) : n(o[2]) : !1;
}, HC = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  hC.test(e) && !vC.test(e)
), Gp = () => !1, SC = (e) => mC.test(e), bC = (e) => CC.test(e), LC = () => {
  const e = kA("colors"), r = kA("spacing"), n = kA("blur"), o = kA("brightness"), s = kA("borderColor"), l = kA("borderRadius"), u = kA("borderSpacing"), f = kA("borderWidth"), B = kA("contrast"), g = kA("grayscale"), p = kA("hueRotate"), h = kA("invert"), v = kA("gap"), U = kA("gradientColorStops"), Q = kA("gradientColorStopPositions"), C = kA("inset"), E = kA("margin"), F = kA("opacity"), H = kA("padding"), k = kA("saturate"), K = kA("scale"), R = kA("sepia"), O = kA("skew"), P = kA("space"), X = kA("translate"), J = () => ["auto", "contain", "none"], sA = () => ["auto", "hidden", "clip", "visible", "scroll"], pA = () => ["auto", mA, r], Z = () => [mA, r], $ = () => ["", Qt, Yt], nA = () => ["auto", Fn, mA], gA = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], oA = () => ["solid", "dashed", "dotted", "double", "none"], eA = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], N = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], W = () => ["", "0", mA], j = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], I = () => [Fn, mA];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Fo],
      spacing: [Qt, Yt],
      blur: ["none", "", Zt, mA],
      brightness: I(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Zt, mA],
      borderSpacing: Z(),
      borderWidth: $(),
      contrast: I(),
      grayscale: W(),
      hueRotate: I(),
      invert: W(),
      gap: Z(),
      gradientColorStops: [e],
      gradientColorStopPositions: [QC, Yt],
      inset: pA(),
      margin: pA(),
      opacity: I(),
      padding: Z(),
      saturate: I(),
      scale: I(),
      sepia: W(),
      skew: I(),
      space: Z(),
      translate: Z()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", mA]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Zt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": j()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": j()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...gA(), mA]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: sA()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": sA()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": sA()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: J()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": J()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": J()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [C]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [C]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [C]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [C]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [C]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [C]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [C]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [C]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [C]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Uo, mA]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: pA()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", mA]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: W()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: W()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Uo, mA]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Fo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Uo, mA]
        }, mA]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": nA()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": nA()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Fo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Uo, mA]
        }, mA]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": nA()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": nA()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", mA]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", mA]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [v]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [v]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [v]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...N()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...N(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...N(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [H]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [H]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [H]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [H]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [H]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [H]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [H]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [H]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [H]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [E]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [E]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [E]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [E]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [E]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [E]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [E]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [E]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [E]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [P]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [P]
      }],
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
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", mA, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [mA, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [mA, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [Zt]
        }, Zt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [mA, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [mA, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [mA, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [mA, r, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Zt, Yt]
      }],
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
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", mc]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Fo]
      }],
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
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", mA]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Fn, mc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Qt, mA]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", mA]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", mA]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [F]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [F]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...oA(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Qt, Yt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Qt, mA]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: Z()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", mA]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", mA]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [F]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...gA(), FC]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", UC]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, xC]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [Q]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [Q]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [Q]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [U]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [U]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [U]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [l]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [l]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [l]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [l]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [l]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [l]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [l]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [l]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [l]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [l]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [l]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [l]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [l]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [l]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [l]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [f]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [f]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [f]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [f]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [f]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [f]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [f]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [f]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [f]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [F]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...oA(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [f]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [f]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [F]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: oA()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [s]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [s]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [s]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [s]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [s]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [s]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [s]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [s]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...oA()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Qt, mA]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Qt, Yt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: $()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [F]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Qt, Yt]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Zt, IC]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Fo]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [F]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...eA(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": eA()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [o]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [B]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Zt, mA]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [g]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [p]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [h]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [k]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [R]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [o]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [B]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [g]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [p]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [h]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [F]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [k]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [R]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [u]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [u]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [u]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", mA]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: I()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", mA]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: I()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", mA]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [K]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [K]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [K]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Uo, mA]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [X]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [X]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [O]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [O]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", mA]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", mA]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": Z()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": Z()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": Z()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": Z()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": Z()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": Z()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": Z()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": Z()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": Z()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": Z()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": Z()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": Z()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": Z()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": Z()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": Z()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": Z()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": Z()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": Z()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", mA]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Qt, Yt, mc]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
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
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
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
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, TC = /* @__PURE__ */ BC(LC);
function Ae(...e) {
  return TC(eC(e));
}
const DC = Ru(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Gs = m.forwardRef(
  ({ className: e, variant: r, size: n, asChild: o = !1, ...s }, l) => {
    const u = o ? Dr : "button";
    return /* @__PURE__ */ b.jsx(
      u,
      {
        className: Ae(DC({ variant: r, size: n, className: e })),
        ref: l,
        ...s
      }
    );
  }
);
Gs.displayName = "Button";
function _A(e, r, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(s) {
    if (e?.(s), n === !1 || !s.defaultPrevented)
      return r?.(s);
  };
}
function KC(e, r) {
  const n = m.createContext(r);
  function o(l) {
    const { children: u, ...f } = l, B = m.useMemo(() => f, Object.values(f));
    return /* @__PURE__ */ b.jsx(n.Provider, { value: B, children: u });
  }
  function s(l) {
    const u = m.useContext(n);
    if (u) return u;
    if (r !== void 0) return r;
    throw new Error(`\`${l}\` must be used within \`${e}\``);
  }
  return o.displayName = e + "Provider", [o, s];
}
function sa(e, r = []) {
  let n = [];
  function o(l, u) {
    const f = m.createContext(u), B = n.length;
    n = [...n, u];
    function g(h) {
      const { scope: v, children: U, ...Q } = h, C = v?.[e][B] || f, E = m.useMemo(() => Q, Object.values(Q));
      return /* @__PURE__ */ b.jsx(C.Provider, { value: E, children: U });
    }
    function p(h, v) {
      const U = v?.[e][B] || f, Q = m.useContext(U);
      if (Q) return Q;
      if (u !== void 0) return u;
      throw new Error(`\`${h}\` must be used within \`${l}\``);
    }
    return g.displayName = l + "Provider", [g, p];
  }
  const s = () => {
    const l = n.map((u) => m.createContext(u));
    return function(f) {
      const B = f?.[e] || l;
      return m.useMemo(
        () => ({ [`__scope${e}`]: { ...f, [e]: B } }),
        [f, B]
      );
    };
  };
  return s.scopeName = e, [o, kC(s, ...r)];
}
function kC(...e) {
  const r = e[0];
  if (e.length === 1) return r;
  const n = () => {
    const o = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(l) {
      const u = o.reduce((f, { useScope: B, scopeName: g }) => {
        const h = B(l)[`__scope${g}`];
        return { ...f, ...h };
      }, {});
      return m.useMemo(() => ({ [`__scope${r.scopeName}`]: u }), [u]);
    };
  };
  return n.scopeName = r.scopeName, n;
}
var ve = globalThis?.document ? m.useLayoutEffect : () => {
}, RC = zm.useId || (() => {
}), OC = 0;
function En(e) {
  const [r, n] = m.useState(RC());
  return ve(() => {
    n((o) => o ?? String(OC++));
  }, [e]), r ? `radix-${r}` : "";
}
function xt(e) {
  const r = m.useRef(e);
  return m.useEffect(() => {
    r.current = e;
  }), m.useMemo(() => (...n) => r.current?.(...n), []);
}
function eu({
  prop: e,
  defaultProp: r,
  onChange: n = () => {
  }
}) {
  const [o, s] = NC({ defaultProp: r, onChange: n }), l = e !== void 0, u = l ? e : o, f = xt(n), B = m.useCallback(
    (g) => {
      if (l) {
        const h = typeof g == "function" ? g(e) : g;
        h !== e && f(h);
      } else
        s(g);
    },
    [l, e, s, f]
  );
  return [u, B];
}
function NC({
  defaultProp: e,
  onChange: r
}) {
  const n = m.useState(e), [o] = n, s = m.useRef(o), l = xt(r);
  return m.useEffect(() => {
    s.current !== o && (l(o), s.current = o);
  }, [o, s, l]), n;
}
var MC = [
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
  "ul"
], TA = MC.reduce((e, r) => {
  const n = m.forwardRef((o, s) => {
    const { asChild: l, ...u } = o, f = l ? Dr : r;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ b.jsx(f, { ...u, ref: s });
  });
  return n.displayName = `Primitive.${r}`, { ...e, [r]: n };
}, {});
function PC(e, r) {
  e && Or.flushSync(() => e.dispatchEvent(r));
}
function _C(e, r = globalThis?.document) {
  const n = xt(e);
  m.useEffect(() => {
    const o = (s) => {
      s.key === "Escape" && n(s);
    };
    return r.addEventListener("keydown", o, { capture: !0 }), () => r.removeEventListener("keydown", o, { capture: !0 });
  }, [n, r]);
}
var VC = "DismissableLayer", tu = "dismissableLayer.update", GC = "dismissableLayer.pointerDownOutside", WC = "dismissableLayer.focusOutside", dg, Wp = m.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Nu = m.forwardRef(
  (e, r) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: s,
      onFocusOutside: l,
      onInteractOutside: u,
      onDismiss: f,
      ...B
    } = e, g = m.useContext(Wp), [p, h] = m.useState(null), v = p?.ownerDocument ?? globalThis?.document, [, U] = m.useState({}), Q = zA(r, (P) => h(P)), C = Array.from(g.layers), [E] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1), F = C.indexOf(E), H = p ? C.indexOf(p) : -1, k = g.layersWithOutsidePointerEventsDisabled.size > 0, K = H >= F, R = zC((P) => {
      const X = P.target, J = [...g.branches].some((sA) => sA.contains(X));
      !K || J || (s?.(P), u?.(P), P.defaultPrevented || f?.());
    }, v), O = JC((P) => {
      const X = P.target;
      [...g.branches].some((sA) => sA.contains(X)) || (l?.(P), u?.(P), P.defaultPrevented || f?.());
    }, v);
    return _C((P) => {
      H === g.layers.size - 1 && (o?.(P), !P.defaultPrevented && f && (P.preventDefault(), f()));
    }, v), m.useEffect(() => {
      if (p)
        return n && (g.layersWithOutsidePointerEventsDisabled.size === 0 && (dg = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), g.layersWithOutsidePointerEventsDisabled.add(p)), g.layers.add(p), Bg(), () => {
          n && g.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = dg);
        };
    }, [p, v, n, g]), m.useEffect(() => () => {
      p && (g.layers.delete(p), g.layersWithOutsidePointerEventsDisabled.delete(p), Bg());
    }, [p, g]), m.useEffect(() => {
      const P = () => U({});
      return document.addEventListener(tu, P), () => document.removeEventListener(tu, P);
    }, []), /* @__PURE__ */ b.jsx(
      TA.div,
      {
        ...B,
        ref: Q,
        style: {
          pointerEvents: k ? K ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: _A(e.onFocusCapture, O.onFocusCapture),
        onBlurCapture: _A(e.onBlurCapture, O.onBlurCapture),
        onPointerDownCapture: _A(
          e.onPointerDownCapture,
          R.onPointerDownCapture
        )
      }
    );
  }
);
Nu.displayName = VC;
var jC = "DismissableLayerBranch", XC = m.forwardRef((e, r) => {
  const n = m.useContext(Wp), o = m.useRef(null), s = zA(r, o);
  return m.useEffect(() => {
    const l = o.current;
    if (l)
      return n.branches.add(l), () => {
        n.branches.delete(l);
      };
  }, [n.branches]), /* @__PURE__ */ b.jsx(TA.div, { ...e, ref: s });
});
XC.displayName = jC;
function zC(e, r = globalThis?.document) {
  const n = xt(e), o = m.useRef(!1), s = m.useRef(() => {
  });
  return m.useEffect(() => {
    const l = (f) => {
      if (f.target && !o.current) {
        let B = function() {
          jp(
            GC,
            n,
            g,
            { discrete: !0 }
          );
        };
        const g = { originalEvent: f };
        f.pointerType === "touch" ? (r.removeEventListener("click", s.current), s.current = B, r.addEventListener("click", s.current, { once: !0 })) : B();
      } else
        r.removeEventListener("click", s.current);
      o.current = !1;
    }, u = window.setTimeout(() => {
      r.addEventListener("pointerdown", l);
    }, 0);
    return () => {
      window.clearTimeout(u), r.removeEventListener("pointerdown", l), r.removeEventListener("click", s.current);
    };
  }, [r, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function JC(e, r = globalThis?.document) {
  const n = xt(e), o = m.useRef(!1);
  return m.useEffect(() => {
    const s = (l) => {
      l.target && !o.current && jp(WC, n, { originalEvent: l }, {
        discrete: !1
      });
    };
    return r.addEventListener("focusin", s), () => r.removeEventListener("focusin", s);
  }, [r, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function Bg() {
  const e = new CustomEvent(tu);
  document.dispatchEvent(e);
}
function jp(e, r, n, { discrete: o }) {
  const s = n.originalEvent.target, l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  r && s.addEventListener(e, r, { once: !0 }), o ? PC(s, l) : s.dispatchEvent(l);
}
var Cc = "focusScope.autoFocusOnMount", Qc = "focusScope.autoFocusOnUnmount", gg = { bubbles: !1, cancelable: !0 }, YC = "FocusScope", Mu = m.forwardRef((e, r) => {
  const {
    loop: n = !1,
    trapped: o = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: l,
    ...u
  } = e, [f, B] = m.useState(null), g = xt(s), p = xt(l), h = m.useRef(null), v = zA(r, (C) => B(C)), U = m.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  m.useEffect(() => {
    if (o) {
      let C = function(k) {
        if (U.paused || !f) return;
        const K = k.target;
        f.contains(K) ? h.current = K : qt(h.current, { select: !0 });
      }, E = function(k) {
        if (U.paused || !f) return;
        const K = k.relatedTarget;
        K !== null && (f.contains(K) || qt(h.current, { select: !0 }));
      }, F = function(k) {
        if (document.activeElement === document.body)
          for (const R of k)
            R.removedNodes.length > 0 && qt(f);
      };
      document.addEventListener("focusin", C), document.addEventListener("focusout", E);
      const H = new MutationObserver(F);
      return f && H.observe(f, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", C), document.removeEventListener("focusout", E), H.disconnect();
      };
    }
  }, [o, f, U.paused]), m.useEffect(() => {
    if (f) {
      wg.add(U);
      const C = document.activeElement;
      if (!f.contains(C)) {
        const F = new CustomEvent(Cc, gg);
        f.addEventListener(Cc, g), f.dispatchEvent(F), F.defaultPrevented || (ZC(tQ(Xp(f)), { select: !0 }), document.activeElement === C && qt(f));
      }
      return () => {
        f.removeEventListener(Cc, g), setTimeout(() => {
          const F = new CustomEvent(Qc, gg);
          f.addEventListener(Qc, p), f.dispatchEvent(F), F.defaultPrevented || qt(C ?? document.body, { select: !0 }), f.removeEventListener(Qc, p), wg.remove(U);
        }, 0);
      };
    }
  }, [f, g, p, U]);
  const Q = m.useCallback(
    (C) => {
      if (!n && !o || U.paused) return;
      const E = C.key === "Tab" && !C.altKey && !C.ctrlKey && !C.metaKey, F = document.activeElement;
      if (E && F) {
        const H = C.currentTarget, [k, K] = $C(H);
        k && K ? !C.shiftKey && F === K ? (C.preventDefault(), n && qt(k, { select: !0 })) : C.shiftKey && F === k && (C.preventDefault(), n && qt(K, { select: !0 })) : F === H && C.preventDefault();
      }
    },
    [n, o, U.paused]
  );
  return /* @__PURE__ */ b.jsx(TA.div, { tabIndex: -1, ...u, ref: v, onKeyDown: Q });
});
Mu.displayName = YC;
function ZC(e, { select: r = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (qt(o, { select: r }), document.activeElement !== n) return;
}
function $C(e) {
  const r = Xp(e), n = pg(r, e), o = pg(r.reverse(), e);
  return [n, o];
}
function Xp(e) {
  const r = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const s = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || s ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) r.push(n.currentNode);
  return r;
}
function pg(e, r) {
  for (const n of e)
    if (!qC(n, { upTo: r })) return n;
}
function qC(e, { upTo: r }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (r !== void 0 && e === r) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function AQ(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function qt(e, { select: r = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && AQ(e) && r && e.select();
  }
}
var wg = eQ();
function eQ() {
  let e = [];
  return {
    add(r) {
      const n = e[0];
      r !== n && n?.pause(), e = hg(e, r), e.unshift(r);
    },
    remove(r) {
      e = hg(e, r), e[0]?.resume();
    }
  };
}
function hg(e, r) {
  const n = [...e], o = n.indexOf(r);
  return o !== -1 && n.splice(o, 1), n;
}
function tQ(e) {
  return e.filter((r) => r.tagName !== "A");
}
var rQ = "Portal", Pu = m.forwardRef((e, r) => {
  const { container: n, ...o } = e, [s, l] = m.useState(!1);
  ve(() => l(!0), []);
  const u = n || s && globalThis?.document?.body;
  return u ? Xm.createPortal(/* @__PURE__ */ b.jsx(TA.div, { ...o, ref: r }), u) : null;
});
Pu.displayName = rQ;
function nQ(e, r) {
  return m.useReducer((n, o) => r[n][o] ?? n, e);
}
var aa = (e) => {
  const { present: r, children: n } = e, o = oQ(r), s = typeof n == "function" ? n({ present: o.isPresent }) : m.Children.only(n), l = zA(o.ref, iQ(s));
  return typeof n == "function" || o.isPresent ? m.cloneElement(s, { ref: l }) : null;
};
aa.displayName = "Presence";
function oQ(e) {
  const [r, n] = m.useState(), o = m.useRef({}), s = m.useRef(e), l = m.useRef("none"), u = e ? "mounted" : "unmounted", [f, B] = nQ(u, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return m.useEffect(() => {
    const g = ss(o.current);
    l.current = f === "mounted" ? g : "none";
  }, [f]), ve(() => {
    const g = o.current, p = s.current;
    if (p !== e) {
      const v = l.current, U = ss(g);
      e ? B("MOUNT") : U === "none" || g?.display === "none" ? B("UNMOUNT") : B(p && v !== U ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, B]), ve(() => {
    if (r) {
      const g = (h) => {
        const U = ss(o.current).includes(h.animationName);
        h.target === r && U && Or.flushSync(() => B("ANIMATION_END"));
      }, p = (h) => {
        h.target === r && (l.current = ss(o.current));
      };
      return r.addEventListener("animationstart", p), r.addEventListener("animationcancel", g), r.addEventListener("animationend", g), () => {
        r.removeEventListener("animationstart", p), r.removeEventListener("animationcancel", g), r.removeEventListener("animationend", g);
      };
    } else
      B("ANIMATION_END");
  }, [r, B]), {
    isPresent: ["mounted", "unmountSuspended"].includes(f),
    ref: m.useCallback((g) => {
      g && (o.current = getComputedStyle(g)), n(g);
    }, [])
  };
}
function ss(e) {
  return e?.animationName || "none";
}
function iQ(e) {
  let r = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = r && "isReactWarning" in r && r.isReactWarning;
  return n ? e.ref : (r = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = r && "isReactWarning" in r && r.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var yc = 0;
function zp() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? vg()), document.body.insertAdjacentElement("beforeend", e[1] ?? vg()), yc++, () => {
      yc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((r) => r.remove()), yc--;
    };
  }, []);
}
function vg() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var lt = function() {
  return lt = Object.assign || function(r) {
    for (var n, o = 1, s = arguments.length; o < s; o++) {
      n = arguments[o];
      for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (r[l] = n[l]);
    }
    return r;
  }, lt.apply(this, arguments);
};
function Jp(e, r) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && r.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      r.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]]);
  return n;
}
function sQ(e, r, n) {
  if (n || arguments.length === 2) for (var o = 0, s = r.length, l; o < s; o++)
    (l || !(o in r)) && (l || (l = Array.prototype.slice.call(r, 0, o)), l[o] = r[o]);
  return e.concat(l || Array.prototype.slice.call(r));
}
var ks = "right-scroll-bar-position", Rs = "width-before-scroll-bar", aQ = "with-scroll-bars-hidden", lQ = "--removed-body-scroll-bar-size";
function Uc(e, r) {
  return typeof e == "function" ? e(r) : e && (e.current = r), e;
}
function cQ(e, r) {
  var n = m.useState(function() {
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
          s !== o && (n.value = o, n.callback(o, s));
        }
      }
    };
  })[0];
  return n.callback = r, n.facade;
}
var uQ = typeof window < "u" ? m.useLayoutEffect : m.useEffect, mg = /* @__PURE__ */ new WeakMap();
function fQ(e, r) {
  var n = cQ(null, function(o) {
    return e.forEach(function(s) {
      return Uc(s, o);
    });
  });
  return uQ(function() {
    var o = mg.get(n);
    if (o) {
      var s = new Set(o), l = new Set(e), u = n.current;
      s.forEach(function(f) {
        l.has(f) || Uc(f, null);
      }), l.forEach(function(f) {
        s.has(f) || Uc(f, u);
      });
    }
    mg.set(n, e);
  }, [e]), n;
}
function dQ(e) {
  return e;
}
function BQ(e, r) {
  r === void 0 && (r = dQ);
  var n = [], o = !1, s = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(l) {
      var u = r(l, o);
      return n.push(u), function() {
        n = n.filter(function(f) {
          return f !== u;
        });
      };
    },
    assignSyncMedium: function(l) {
      for (o = !0; n.length; ) {
        var u = n;
        n = [], u.forEach(l);
      }
      n = {
        push: function(f) {
          return l(f);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(l) {
      o = !0;
      var u = [];
      if (n.length) {
        var f = n;
        n = [], f.forEach(l), u = n;
      }
      var B = function() {
        var p = u;
        u = [], p.forEach(l);
      }, g = function() {
        return Promise.resolve().then(B);
      };
      g(), n = {
        push: function(p) {
          u.push(p), g();
        },
        filter: function(p) {
          return u = u.filter(p), n;
        }
      };
    }
  };
  return s;
}
function gQ(e) {
  e === void 0 && (e = {});
  var r = BQ(null);
  return r.options = lt({ async: !0, ssr: !1 }, e), r;
}
var Yp = function(e) {
  var r = e.sideCar, n = Jp(e, ["sideCar"]);
  if (!r)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = r.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return m.createElement(o, lt({}, n));
};
Yp.isSideCarExport = !0;
function pQ(e, r) {
  return e.useMedium(r), Yp;
}
var Zp = gQ(), Fc = function() {
}, la = m.forwardRef(function(e, r) {
  var n = m.useRef(null), o = m.useState({
    onScrollCapture: Fc,
    onWheelCapture: Fc,
    onTouchMoveCapture: Fc
  }), s = o[0], l = o[1], u = e.forwardProps, f = e.children, B = e.className, g = e.removeScrollBar, p = e.enabled, h = e.shards, v = e.sideCar, U = e.noIsolation, Q = e.inert, C = e.allowPinchZoom, E = e.as, F = E === void 0 ? "div" : E, H = e.gapMode, k = Jp(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), K = v, R = fQ([n, r]), O = lt(lt({}, k), s);
  return m.createElement(
    m.Fragment,
    null,
    p && m.createElement(K, { sideCar: Zp, removeScrollBar: g, shards: h, noIsolation: U, inert: Q, setCallbacks: l, allowPinchZoom: !!C, lockRef: n, gapMode: H }),
    u ? m.cloneElement(m.Children.only(f), lt(lt({}, O), { ref: R })) : m.createElement(F, lt({}, O, { className: B, ref: R }), f)
  );
});
la.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
la.classNames = {
  fullWidth: Rs,
  zeroRight: ks
};
var wQ = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function hQ() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var r = wQ();
  return r && e.setAttribute("nonce", r), e;
}
function vQ(e, r) {
  e.styleSheet ? e.styleSheet.cssText = r : e.appendChild(document.createTextNode(r));
}
function mQ(e) {
  var r = document.head || document.getElementsByTagName("head")[0];
  r.appendChild(e);
}
var CQ = function() {
  var e = 0, r = null;
  return {
    add: function(n) {
      e == 0 && (r = hQ()) && (vQ(r, n), mQ(r)), e++;
    },
    remove: function() {
      e--, !e && r && (r.parentNode && r.parentNode.removeChild(r), r = null);
    }
  };
}, QQ = function() {
  var e = CQ();
  return function(r, n) {
    m.useEffect(function() {
      return e.add(r), function() {
        e.remove();
      };
    }, [r && n]);
  };
}, $p = function() {
  var e = QQ(), r = function(n) {
    var o = n.styles, s = n.dynamic;
    return e(o, s), null;
  };
  return r;
}, yQ = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ec = function(e) {
  return parseInt(e || "", 10) || 0;
}, UQ = function(e) {
  var r = window.getComputedStyle(document.body), n = r[e === "padding" ? "paddingLeft" : "marginLeft"], o = r[e === "padding" ? "paddingTop" : "marginTop"], s = r[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ec(n), Ec(o), Ec(s)];
}, FQ = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return yQ;
  var r = UQ(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: r[0],
    top: r[1],
    right: r[2],
    gap: Math.max(0, o - n + r[2] - r[0])
  };
}, EQ = $p(), xn = "data-scroll-locked", xQ = function(e, r, n, o) {
  var s = e.left, l = e.top, u = e.right, f = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(aQ, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(f, "px ").concat(o, `;
  }
  body[`).concat(xn, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    r && "position: relative ".concat(o, ";"),
    n === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(l, `px;
    padding-right: `).concat(u, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(f, "px ").concat(o, `;
    `),
    n === "padding" && "padding-right: ".concat(f, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(ks, ` {
    right: `).concat(f, "px ").concat(o, `;
  }
  
  .`).concat(Rs, ` {
    margin-right: `).concat(f, "px ").concat(o, `;
  }
  
  .`).concat(ks, " .").concat(ks, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Rs, " .").concat(Rs, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(xn, `] {
    `).concat(lQ, ": ").concat(f, `px;
  }
`);
}, Cg = function() {
  var e = parseInt(document.body.getAttribute(xn) || "0", 10);
  return isFinite(e) ? e : 0;
}, IQ = function() {
  m.useEffect(function() {
    return document.body.setAttribute(xn, (Cg() + 1).toString()), function() {
      var e = Cg() - 1;
      e <= 0 ? document.body.removeAttribute(xn) : document.body.setAttribute(xn, e.toString());
    };
  }, []);
}, HQ = function(e) {
  var r = e.noRelative, n = e.noImportant, o = e.gapMode, s = o === void 0 ? "margin" : o;
  IQ();
  var l = m.useMemo(function() {
    return FQ(s);
  }, [s]);
  return m.createElement(EQ, { styles: xQ(l, !r, s, n ? "" : "!important") });
}, ru = !1;
if (typeof window < "u")
  try {
    var as = Object.defineProperty({}, "passive", {
      get: function() {
        return ru = !0, !0;
      }
    });
    window.addEventListener("test", as, as), window.removeEventListener("test", as, as);
  } catch {
    ru = !1;
  }
var dn = ru ? { passive: !1 } : !1, SQ = function(e) {
  return e.tagName === "TEXTAREA";
}, qp = function(e, r) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[r] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !SQ(e) && n[r] === "visible")
  );
}, bQ = function(e) {
  return qp(e, "overflowY");
}, LQ = function(e) {
  return qp(e, "overflowX");
}, Qg = function(e, r) {
  var n = r.ownerDocument, o = r;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var s = Aw(e, o);
    if (s) {
      var l = ew(e, o), u = l[1], f = l[2];
      if (u > f)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, TQ = function(e) {
  var r = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    r,
    n,
    o
  ];
}, DQ = function(e) {
  var r = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    r,
    n,
    o
  ];
}, Aw = function(e, r) {
  return e === "v" ? bQ(r) : LQ(r);
}, ew = function(e, r) {
  return e === "v" ? TQ(r) : DQ(r);
}, KQ = function(e, r) {
  return e === "h" && r === "rtl" ? -1 : 1;
}, kQ = function(e, r, n, o, s) {
  var l = KQ(e, window.getComputedStyle(r).direction), u = l * o, f = n.target, B = r.contains(f), g = !1, p = u > 0, h = 0, v = 0;
  do {
    var U = ew(e, f), Q = U[0], C = U[1], E = U[2], F = C - E - l * Q;
    (Q || F) && Aw(e, f) && (h += F, v += Q), f instanceof ShadowRoot ? f = f.host : f = f.parentNode;
  } while (
    // portaled content
    !B && f !== document.body || // self content
    B && (r.contains(f) || r === f)
  );
  return (p && (Math.abs(h) < 1 || !s) || !p && (Math.abs(v) < 1 || !s)) && (g = !0), g;
}, ls = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, yg = function(e) {
  return [e.deltaX, e.deltaY];
}, Ug = function(e) {
  return e && "current" in e ? e.current : e;
}, RQ = function(e, r) {
  return e[0] === r[0] && e[1] === r[1];
}, OQ = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, NQ = 0, Bn = [];
function MQ(e) {
  var r = m.useRef([]), n = m.useRef([0, 0]), o = m.useRef(), s = m.useState(NQ++)[0], l = m.useState($p)[0], u = m.useRef(e);
  m.useEffect(function() {
    u.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var C = sQ([e.lockRef.current], (e.shards || []).map(Ug), !0).filter(Boolean);
      return C.forEach(function(E) {
        return E.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), C.forEach(function(E) {
          return E.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var f = m.useCallback(function(C, E) {
    if ("touches" in C && C.touches.length === 2)
      return !u.current.allowPinchZoom;
    var F = ls(C), H = n.current, k = "deltaX" in C ? C.deltaX : H[0] - F[0], K = "deltaY" in C ? C.deltaY : H[1] - F[1], R, O = C.target, P = Math.abs(k) > Math.abs(K) ? "h" : "v";
    if ("touches" in C && P === "h" && O.type === "range")
      return !1;
    var X = Qg(P, O);
    if (!X)
      return !0;
    if (X ? R = P : (R = P === "v" ? "h" : "v", X = Qg(P, O)), !X)
      return !1;
    if (!o.current && "changedTouches" in C && (k || K) && (o.current = R), !R)
      return !0;
    var J = o.current || R;
    return kQ(J, E, C, J === "h" ? k : K, !0);
  }, []), B = m.useCallback(function(C) {
    var E = C;
    if (!(!Bn.length || Bn[Bn.length - 1] !== l)) {
      var F = "deltaY" in E ? yg(E) : ls(E), H = r.current.filter(function(R) {
        return R.name === E.type && (R.target === E.target || E.target === R.shadowParent) && RQ(R.delta, F);
      })[0];
      if (H && H.should) {
        E.cancelable && E.preventDefault();
        return;
      }
      if (!H) {
        var k = (u.current.shards || []).map(Ug).filter(Boolean).filter(function(R) {
          return R.contains(E.target);
        }), K = k.length > 0 ? f(E, k[0]) : !u.current.noIsolation;
        K && E.cancelable && E.preventDefault();
      }
    }
  }, []), g = m.useCallback(function(C, E, F, H) {
    var k = { name: C, delta: E, target: F, should: H, shadowParent: PQ(F) };
    r.current.push(k), setTimeout(function() {
      r.current = r.current.filter(function(K) {
        return K !== k;
      });
    }, 1);
  }, []), p = m.useCallback(function(C) {
    n.current = ls(C), o.current = void 0;
  }, []), h = m.useCallback(function(C) {
    g(C.type, yg(C), C.target, f(C, e.lockRef.current));
  }, []), v = m.useCallback(function(C) {
    g(C.type, ls(C), C.target, f(C, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return Bn.push(l), e.setCallbacks({
      onScrollCapture: h,
      onWheelCapture: h,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", B, dn), document.addEventListener("touchmove", B, dn), document.addEventListener("touchstart", p, dn), function() {
      Bn = Bn.filter(function(C) {
        return C !== l;
      }), document.removeEventListener("wheel", B, dn), document.removeEventListener("touchmove", B, dn), document.removeEventListener("touchstart", p, dn);
    };
  }, []);
  var U = e.removeScrollBar, Q = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    Q ? m.createElement(l, { styles: OQ(s) }) : null,
    U ? m.createElement(HQ, { gapMode: e.gapMode }) : null
  );
}
function PQ(e) {
  for (var r = null; e !== null; )
    e instanceof ShadowRoot && (r = e.host, e = e.host), e = e.parentNode;
  return r;
}
const _Q = pQ(Zp, MQ);
var _u = m.forwardRef(function(e, r) {
  return m.createElement(la, lt({}, e, { ref: r, sideCar: _Q }));
});
_u.classNames = la.classNames;
var VQ = function(e) {
  if (typeof document > "u")
    return null;
  var r = Array.isArray(e) ? e[0] : e;
  return r.ownerDocument.body;
}, gn = /* @__PURE__ */ new WeakMap(), cs = /* @__PURE__ */ new WeakMap(), us = {}, xc = 0, tw = function(e) {
  return e && (e.host || tw(e.parentNode));
}, GQ = function(e, r) {
  return r.map(function(n) {
    if (e.contains(n))
      return n;
    var o = tw(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, WQ = function(e, r, n, o) {
  var s = GQ(r, Array.isArray(e) ? e : [e]);
  us[n] || (us[n] = /* @__PURE__ */ new WeakMap());
  var l = us[n], u = [], f = /* @__PURE__ */ new Set(), B = new Set(s), g = function(h) {
    !h || f.has(h) || (f.add(h), g(h.parentNode));
  };
  s.forEach(g);
  var p = function(h) {
    !h || B.has(h) || Array.prototype.forEach.call(h.children, function(v) {
      if (f.has(v))
        p(v);
      else
        try {
          var U = v.getAttribute(o), Q = U !== null && U !== "false", C = (gn.get(v) || 0) + 1, E = (l.get(v) || 0) + 1;
          gn.set(v, C), l.set(v, E), u.push(v), C === 1 && Q && cs.set(v, !0), E === 1 && v.setAttribute(n, "true"), Q || v.setAttribute(o, "true");
        } catch (F) {
          console.error("aria-hidden: cannot operate on ", v, F);
        }
    });
  };
  return p(r), f.clear(), xc++, function() {
    u.forEach(function(h) {
      var v = gn.get(h) - 1, U = l.get(h) - 1;
      gn.set(h, v), l.set(h, U), v || (cs.has(h) || h.removeAttribute(o), cs.delete(h)), U || h.removeAttribute(n);
    }), xc--, xc || (gn = /* @__PURE__ */ new WeakMap(), gn = /* @__PURE__ */ new WeakMap(), cs = /* @__PURE__ */ new WeakMap(), us = {});
  };
}, rw = function(e, r, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), s = VQ(e);
  return s ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live]"))), WQ(o, s, n, "aria-hidden")) : function() {
    return null;
  };
}, Vu = "Dialog", [nw, JH] = sa(Vu), [jQ, et] = nw(Vu), ow = (e) => {
  const {
    __scopeDialog: r,
    children: n,
    open: o,
    defaultOpen: s,
    onOpenChange: l,
    modal: u = !0
  } = e, f = m.useRef(null), B = m.useRef(null), [g = !1, p] = eu({
    prop: o,
    defaultProp: s,
    onChange: l
  });
  return /* @__PURE__ */ b.jsx(
    jQ,
    {
      scope: r,
      triggerRef: f,
      contentRef: B,
      contentId: En(),
      titleId: En(),
      descriptionId: En(),
      open: g,
      onOpenChange: p,
      onOpenToggle: m.useCallback(() => p((h) => !h), [p]),
      modal: u,
      children: n
    }
  );
};
ow.displayName = Vu;
var iw = "DialogTrigger", sw = m.forwardRef(
  (e, r) => {
    const { __scopeDialog: n, ...o } = e, s = et(iw, n), l = zA(r, s.triggerRef);
    return /* @__PURE__ */ b.jsx(
      TA.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": ju(s.open),
        ...o,
        ref: l,
        onClick: _A(e.onClick, s.onOpenToggle)
      }
    );
  }
);
sw.displayName = iw;
var Gu = "DialogPortal", [XQ, aw] = nw(Gu, {
  forceMount: void 0
}), lw = (e) => {
  const { __scopeDialog: r, forceMount: n, children: o, container: s } = e, l = et(Gu, r);
  return /* @__PURE__ */ b.jsx(XQ, { scope: r, forceMount: n, children: m.Children.map(o, (u) => /* @__PURE__ */ b.jsx(aa, { present: n || l.open, children: /* @__PURE__ */ b.jsx(Pu, { asChild: !0, container: s, children: u }) })) });
};
lw.displayName = Gu;
var Ws = "DialogOverlay", cw = m.forwardRef(
  (e, r) => {
    const n = aw(Ws, e.__scopeDialog), { forceMount: o = n.forceMount, ...s } = e, l = et(Ws, e.__scopeDialog);
    return l.modal ? /* @__PURE__ */ b.jsx(aa, { present: o || l.open, children: /* @__PURE__ */ b.jsx(zQ, { ...s, ref: r }) }) : null;
  }
);
cw.displayName = Ws;
var zQ = m.forwardRef(
  (e, r) => {
    const { __scopeDialog: n, ...o } = e, s = et(Ws, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ b.jsx(_u, { as: Dr, allowPinchZoom: !0, shards: [s.contentRef], children: /* @__PURE__ */ b.jsx(
        TA.div,
        {
          "data-state": ju(s.open),
          ...o,
          ref: r,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }
), Kr = "DialogContent", uw = m.forwardRef(
  (e, r) => {
    const n = aw(Kr, e.__scopeDialog), { forceMount: o = n.forceMount, ...s } = e, l = et(Kr, e.__scopeDialog);
    return /* @__PURE__ */ b.jsx(aa, { present: o || l.open, children: l.modal ? /* @__PURE__ */ b.jsx(JQ, { ...s, ref: r }) : /* @__PURE__ */ b.jsx(YQ, { ...s, ref: r }) });
  }
);
uw.displayName = Kr;
var JQ = m.forwardRef(
  (e, r) => {
    const n = et(Kr, e.__scopeDialog), o = m.useRef(null), s = zA(r, n.contentRef, o);
    return m.useEffect(() => {
      const l = o.current;
      if (l) return rw(l);
    }, []), /* @__PURE__ */ b.jsx(
      fw,
      {
        ...e,
        ref: s,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: _A(e.onCloseAutoFocus, (l) => {
          l.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: _A(e.onPointerDownOutside, (l) => {
          const u = l.detail.originalEvent, f = u.button === 0 && u.ctrlKey === !0;
          (u.button === 2 || f) && l.preventDefault();
        }),
        onFocusOutside: _A(
          e.onFocusOutside,
          (l) => l.preventDefault()
        )
      }
    );
  }
), YQ = m.forwardRef(
  (e, r) => {
    const n = et(Kr, e.__scopeDialog), o = m.useRef(!1), s = m.useRef(!1);
    return /* @__PURE__ */ b.jsx(
      fw,
      {
        ...e,
        ref: r,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (l) => {
          e.onCloseAutoFocus?.(l), l.defaultPrevented || (o.current || n.triggerRef.current?.focus(), l.preventDefault()), o.current = !1, s.current = !1;
        },
        onInteractOutside: (l) => {
          e.onInteractOutside?.(l), l.defaultPrevented || (o.current = !0, l.detail.originalEvent.type === "pointerdown" && (s.current = !0));
          const u = l.target;
          n.triggerRef.current?.contains(u) && l.preventDefault(), l.detail.originalEvent.type === "focusin" && s.current && l.preventDefault();
        }
      }
    );
  }
), fw = m.forwardRef(
  (e, r) => {
    const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: s, onCloseAutoFocus: l, ...u } = e, f = et(Kr, n), B = m.useRef(null), g = zA(r, B);
    return zp(), /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
      /* @__PURE__ */ b.jsx(
        Mu,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: s,
          onUnmountAutoFocus: l,
          children: /* @__PURE__ */ b.jsx(
            Nu,
            {
              role: "dialog",
              id: f.contentId,
              "aria-describedby": f.descriptionId,
              "aria-labelledby": f.titleId,
              "data-state": ju(f.open),
              ...u,
              ref: g,
              onDismiss: () => f.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
        /* @__PURE__ */ b.jsx(ZQ, { titleId: f.titleId }),
        /* @__PURE__ */ b.jsx(qQ, { contentRef: B, descriptionId: f.descriptionId })
      ] })
    ] });
  }
), Wu = "DialogTitle", dw = m.forwardRef(
  (e, r) => {
    const { __scopeDialog: n, ...o } = e, s = et(Wu, n);
    return /* @__PURE__ */ b.jsx(TA.h2, { id: s.titleId, ...o, ref: r });
  }
);
dw.displayName = Wu;
var Bw = "DialogDescription", gw = m.forwardRef(
  (e, r) => {
    const { __scopeDialog: n, ...o } = e, s = et(Bw, n);
    return /* @__PURE__ */ b.jsx(TA.p, { id: s.descriptionId, ...o, ref: r });
  }
);
gw.displayName = Bw;
var pw = "DialogClose", ww = m.forwardRef(
  (e, r) => {
    const { __scopeDialog: n, ...o } = e, s = et(pw, n);
    return /* @__PURE__ */ b.jsx(
      TA.button,
      {
        type: "button",
        ...o,
        ref: r,
        onClick: _A(e.onClick, () => s.onOpenChange(!1))
      }
    );
  }
);
ww.displayName = pw;
function ju(e) {
  return e ? "open" : "closed";
}
var hw = "DialogTitleWarning", [YH, vw] = KC(hw, {
  contentName: Kr,
  titleName: Wu,
  docsSlug: "dialog"
}), ZQ = ({ titleId: e }) => {
  const r = vw(hw), n = `\`${r.contentName}\` requires a \`${r.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${r.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${r.docsSlug}`;
  return m.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, $Q = "DialogDescriptionWarning", qQ = ({ contentRef: e, descriptionId: r }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${vw($Q).contentName}}.`;
  return m.useEffect(() => {
    const s = e.current?.getAttribute("aria-describedby");
    r && s && (document.getElementById(r) || console.warn(o));
  }, [o, e, r]), null;
}, Ay = ow, ey = sw, ty = lw, mw = cw, Cw = uw, Qw = dw, yw = gw, ry = ww;
function zo(e, r) {
  if (e == null) return {};
  var n = {}, o = Object.keys(e), s, l;
  for (l = 0; l < o.length; l++)
    s = o[l], !(r.indexOf(s) >= 0) && (n[s] = e[s]);
  return n;
}
var ny = ["color"], oy = /* @__PURE__ */ m.forwardRef(function(e, r) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, s = zo(e, ny);
  return m.createElement("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, s, {
    ref: r
  }), m.createElement("path", {
    d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
    fill: o,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), iy = ["color"], sy = /* @__PURE__ */ m.forwardRef(function(e, r) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, s = zo(e, iy);
  return m.createElement("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, s, {
    ref: r
  }), m.createElement("path", {
    d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
    fill: o,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), ay = ["color"], ly = /* @__PURE__ */ m.forwardRef(function(e, r) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, s = zo(e, ay);
  return m.createElement("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, s, {
    ref: r
  }), m.createElement("path", {
    d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
    fill: o,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), cy = ["color"], uy = /* @__PURE__ */ m.forwardRef(function(e, r) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, s = zo(e, cy);
  return m.createElement("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, s, {
    ref: r
  }), m.createElement("path", {
    d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
    fill: o,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), fy = ["color"], dy = /* @__PURE__ */ m.forwardRef(function(e, r) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, s = zo(e, fy);
  return m.createElement("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, s, {
    ref: r
  }), m.createElement("path", {
    d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
    fill: o,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
const By = Ay, gy = ey, py = ty, Uw = m.forwardRef(({ className: e, ...r }, n) => /* @__PURE__ */ b.jsx(
  mw,
  {
    ref: n,
    className: Ae(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...r
  }
));
Uw.displayName = mw.displayName;
const Fw = m.forwardRef(({ className: e, children: r, ...n }, o) => /* @__PURE__ */ b.jsxs(py, { children: [
  /* @__PURE__ */ b.jsx(Uw, {}),
  /* @__PURE__ */ b.jsxs(
    Cw,
    {
      ref: o,
      className: Ae(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ b.jsxs(ry, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ b.jsx(dy, { className: "h-4 w-4" }),
          /* @__PURE__ */ b.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Fw.displayName = Cw.displayName;
const Ew = ({
  className: e,
  ...r
}) => /* @__PURE__ */ b.jsx(
  "div",
  {
    className: Ae(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...r
  }
);
Ew.displayName = "DialogHeader";
const xw = m.forwardRef(({ className: e, ...r }, n) => /* @__PURE__ */ b.jsx(
  Qw,
  {
    ref: n,
    className: Ae(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...r
  }
));
xw.displayName = Qw.displayName;
const wy = m.forwardRef(({ className: e, ...r }, n) => /* @__PURE__ */ b.jsx(
  yw,
  {
    ref: n,
    className: Ae("text-sm text-muted-foreground", e),
    ...r
  }
));
wy.displayName = yw.displayName;
const hy = Ru(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Iw = m.forwardRef(({ className: e, variant: r, ...n }, o) => /* @__PURE__ */ b.jsx(
  "div",
  {
    ref: o,
    role: "alert",
    className: Ae(hy({ variant: r }), e),
    ...n
  }
));
Iw.displayName = "Alert";
const Hw = m.forwardRef(({ className: e, ...r }, n) => /* @__PURE__ */ b.jsx(
  "h5",
  {
    ref: n,
    className: Ae("mb-1 font-medium leading-none tracking-tight", e),
    ...r
  }
));
Hw.displayName = "AlertTitle";
const Sw = m.forwardRef(({ className: e, ...r }, n) => /* @__PURE__ */ b.jsx(
  "div",
  {
    ref: n,
    className: Ae("text-sm [&_p]:leading-relaxed", e),
    ...r
  }
));
Sw.displayName = "AlertDescription";
var vy = "Label", bw = m.forwardRef((e, r) => /* @__PURE__ */ b.jsx(
  TA.label,
  {
    ...e,
    ref: r,
    onMouseDown: (n) => {
      n.target.closest("button, input, select, textarea") || (e.onMouseDown?.(n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
bw.displayName = vy;
var Lw = bw;
const my = Ru(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Os = m.forwardRef(({ className: e, ...r }, n) => /* @__PURE__ */ b.jsx(
  Lw,
  {
    ref: n,
    className: Ae(my(), e),
    ...r
  }
));
Os.displayName = Lw.displayName;
const Tw = m.forwardRef(
  ({ className: e, ...r }, n) => /* @__PURE__ */ b.jsx(
    "textarea",
    {
      className: Ae(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...r
    }
  )
);
Tw.displayName = "Textarea";
function Fg(e, [r, n]) {
  return Math.min(n, Math.max(r, e));
}
function Cy(e) {
  const r = e + "CollectionProvider", [n, o] = sa(r), [s, l] = n(
    r,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), u = (U) => {
    const { scope: Q, children: C } = U, E = $t.useRef(null), F = $t.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ b.jsx(s, { scope: Q, itemMap: F, collectionRef: E, children: C });
  };
  u.displayName = r;
  const f = e + "CollectionSlot", B = $t.forwardRef(
    (U, Q) => {
      const { scope: C, children: E } = U, F = l(f, C), H = zA(Q, F.collectionRef);
      return /* @__PURE__ */ b.jsx(Dr, { ref: H, children: E });
    }
  );
  B.displayName = f;
  const g = e + "CollectionItemSlot", p = "data-radix-collection-item", h = $t.forwardRef(
    (U, Q) => {
      const { scope: C, children: E, ...F } = U, H = $t.useRef(null), k = zA(Q, H), K = l(g, C);
      return $t.useEffect(() => (K.itemMap.set(H, { ref: H, ...F }), () => void K.itemMap.delete(H))), /* @__PURE__ */ b.jsx(Dr, { [p]: "", ref: k, children: E });
    }
  );
  h.displayName = g;
  function v(U) {
    const Q = l(e + "CollectionConsumer", U);
    return $t.useCallback(() => {
      const E = Q.collectionRef.current;
      if (!E) return [];
      const F = Array.from(E.querySelectorAll(`[${p}]`));
      return Array.from(Q.itemMap.values()).sort(
        (K, R) => F.indexOf(K.ref.current) - F.indexOf(R.ref.current)
      );
    }, [Q.collectionRef, Q.itemMap]);
  }
  return [
    { Provider: u, Slot: B, ItemSlot: h },
    v,
    o
  ];
}
var Qy = m.createContext(void 0);
function yy(e) {
  const r = m.useContext(Qy);
  return e || r || "ltr";
}
const Uy = ["top", "right", "bottom", "left"], ar = Math.min, Le = Math.max, js = Math.round, fs = Math.floor, lr = (e) => ({
  x: e,
  y: e
}), Fy = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ey = {
  start: "end",
  end: "start"
};
function nu(e, r, n) {
  return Le(e, ar(r, n));
}
function It(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function Ht(e) {
  return e.split("-")[0];
}
function Tn(e) {
  return e.split("-")[1];
}
function Xu(e) {
  return e === "x" ? "y" : "x";
}
function zu(e) {
  return e === "y" ? "height" : "width";
}
function cr(e) {
  return ["top", "bottom"].includes(Ht(e)) ? "y" : "x";
}
function Ju(e) {
  return Xu(cr(e));
}
function xy(e, r, n) {
  n === void 0 && (n = !1);
  const o = Tn(e), s = Ju(e), l = zu(s);
  let u = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return r.reference[l] > r.floating[l] && (u = Xs(u)), [u, Xs(u)];
}
function Iy(e) {
  const r = Xs(e);
  return [ou(e), r, ou(r)];
}
function ou(e) {
  return e.replace(/start|end/g, (r) => Ey[r]);
}
function Hy(e, r, n) {
  const o = ["left", "right"], s = ["right", "left"], l = ["top", "bottom"], u = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? r ? s : o : r ? o : s;
    case "left":
    case "right":
      return r ? l : u;
    default:
      return [];
  }
}
function Sy(e, r, n, o) {
  const s = Tn(e);
  let l = Hy(Ht(e), n === "start", o);
  return s && (l = l.map((u) => u + "-" + s), r && (l = l.concat(l.map(ou)))), l;
}
function Xs(e) {
  return e.replace(/left|right|bottom|top/g, (r) => Fy[r]);
}
function by(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Dw(e) {
  return typeof e != "number" ? by(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function zs(e) {
  const {
    x: r,
    y: n,
    width: o,
    height: s
  } = e;
  return {
    width: o,
    height: s,
    top: n,
    left: r,
    right: r + o,
    bottom: n + s,
    x: r,
    y: n
  };
}
function Eg(e, r, n) {
  let {
    reference: o,
    floating: s
  } = e;
  const l = cr(r), u = Ju(r), f = zu(u), B = Ht(r), g = l === "y", p = o.x + o.width / 2 - s.width / 2, h = o.y + o.height / 2 - s.height / 2, v = o[f] / 2 - s[f] / 2;
  let U;
  switch (B) {
    case "top":
      U = {
        x: p,
        y: o.y - s.height
      };
      break;
    case "bottom":
      U = {
        x: p,
        y: o.y + o.height
      };
      break;
    case "right":
      U = {
        x: o.x + o.width,
        y: h
      };
      break;
    case "left":
      U = {
        x: o.x - s.width,
        y: h
      };
      break;
    default:
      U = {
        x: o.x,
        y: o.y
      };
  }
  switch (Tn(r)) {
    case "start":
      U[u] -= v * (n && g ? -1 : 1);
      break;
    case "end":
      U[u] += v * (n && g ? -1 : 1);
      break;
  }
  return U;
}
const Ly = async (e, r, n) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: l = [],
    platform: u
  } = n, f = l.filter(Boolean), B = await (u.isRTL == null ? void 0 : u.isRTL(r));
  let g = await u.getElementRects({
    reference: e,
    floating: r,
    strategy: s
  }), {
    x: p,
    y: h
  } = Eg(g, o, B), v = o, U = {}, Q = 0;
  for (let C = 0; C < f.length; C++) {
    const {
      name: E,
      fn: F
    } = f[C], {
      x: H,
      y: k,
      data: K,
      reset: R
    } = await F({
      x: p,
      y: h,
      initialPlacement: o,
      placement: v,
      strategy: s,
      middlewareData: U,
      rects: g,
      platform: u,
      elements: {
        reference: e,
        floating: r
      }
    });
    p = H ?? p, h = k ?? h, U = {
      ...U,
      [E]: {
        ...U[E],
        ...K
      }
    }, R && Q <= 50 && (Q++, typeof R == "object" && (R.placement && (v = R.placement), R.rects && (g = R.rects === !0 ? await u.getElementRects({
      reference: e,
      floating: r,
      strategy: s
    }) : R.rects), {
      x: p,
      y: h
    } = Eg(g, v, B)), C = -1);
  }
  return {
    x: p,
    y: h,
    placement: v,
    strategy: s,
    middlewareData: U
  };
};
async function Vo(e, r) {
  var n;
  r === void 0 && (r = {});
  const {
    x: o,
    y: s,
    platform: l,
    rects: u,
    elements: f,
    strategy: B
  } = e, {
    boundary: g = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: h = "floating",
    altBoundary: v = !1,
    padding: U = 0
  } = It(r, e), Q = Dw(U), E = f[v ? h === "floating" ? "reference" : "floating" : h], F = zs(await l.getClippingRect({
    element: (n = await (l.isElement == null ? void 0 : l.isElement(E))) == null || n ? E : E.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(f.floating)),
    boundary: g,
    rootBoundary: p,
    strategy: B
  })), H = h === "floating" ? {
    x: o,
    y: s,
    width: u.floating.width,
    height: u.floating.height
  } : u.reference, k = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(f.floating)), K = await (l.isElement == null ? void 0 : l.isElement(k)) ? await (l.getScale == null ? void 0 : l.getScale(k)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, R = zs(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: f,
    rect: H,
    offsetParent: k,
    strategy: B
  }) : H);
  return {
    top: (F.top - R.top + Q.top) / K.y,
    bottom: (R.bottom - F.bottom + Q.bottom) / K.y,
    left: (F.left - R.left + Q.left) / K.x,
    right: (R.right - F.right + Q.right) / K.x
  };
}
const Ty = (e) => ({
  name: "arrow",
  options: e,
  async fn(r) {
    const {
      x: n,
      y: o,
      placement: s,
      rects: l,
      platform: u,
      elements: f,
      middlewareData: B
    } = r, {
      element: g,
      padding: p = 0
    } = It(e, r) || {};
    if (g == null)
      return {};
    const h = Dw(p), v = {
      x: n,
      y: o
    }, U = Ju(s), Q = zu(U), C = await u.getDimensions(g), E = U === "y", F = E ? "top" : "left", H = E ? "bottom" : "right", k = E ? "clientHeight" : "clientWidth", K = l.reference[Q] + l.reference[U] - v[U] - l.floating[Q], R = v[U] - l.reference[U], O = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(g));
    let P = O ? O[k] : 0;
    (!P || !await (u.isElement == null ? void 0 : u.isElement(O))) && (P = f.floating[k] || l.floating[Q]);
    const X = K / 2 - R / 2, J = P / 2 - C[Q] / 2 - 1, sA = ar(h[F], J), pA = ar(h[H], J), Z = sA, $ = P - C[Q] - pA, nA = P / 2 - C[Q] / 2 + X, gA = nu(Z, nA, $), oA = !B.arrow && Tn(s) != null && nA !== gA && l.reference[Q] / 2 - (nA < Z ? sA : pA) - C[Q] / 2 < 0, eA = oA ? nA < Z ? nA - Z : nA - $ : 0;
    return {
      [U]: v[U] + eA,
      data: {
        [U]: gA,
        centerOffset: nA - gA - eA,
        ...oA && {
          alignmentOffset: eA
        }
      },
      reset: oA
    };
  }
}), Dy = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(r) {
      var n, o;
      const {
        placement: s,
        middlewareData: l,
        rects: u,
        initialPlacement: f,
        platform: B,
        elements: g
      } = r, {
        mainAxis: p = !0,
        crossAxis: h = !0,
        fallbackPlacements: v,
        fallbackStrategy: U = "bestFit",
        fallbackAxisSideDirection: Q = "none",
        flipAlignment: C = !0,
        ...E
      } = It(e, r);
      if ((n = l.arrow) != null && n.alignmentOffset)
        return {};
      const F = Ht(s), H = cr(f), k = Ht(f) === f, K = await (B.isRTL == null ? void 0 : B.isRTL(g.floating)), R = v || (k || !C ? [Xs(f)] : Iy(f)), O = Q !== "none";
      !v && O && R.push(...Sy(f, C, Q, K));
      const P = [f, ...R], X = await Vo(r, E), J = [];
      let sA = ((o = l.flip) == null ? void 0 : o.overflows) || [];
      if (p && J.push(X[F]), h) {
        const nA = xy(s, u, K);
        J.push(X[nA[0]], X[nA[1]]);
      }
      if (sA = [...sA, {
        placement: s,
        overflows: J
      }], !J.every((nA) => nA <= 0)) {
        var pA, Z;
        const nA = (((pA = l.flip) == null ? void 0 : pA.index) || 0) + 1, gA = P[nA];
        if (gA)
          return {
            data: {
              index: nA,
              overflows: sA
            },
            reset: {
              placement: gA
            }
          };
        let oA = (Z = sA.filter((eA) => eA.overflows[0] <= 0).sort((eA, N) => eA.overflows[1] - N.overflows[1])[0]) == null ? void 0 : Z.placement;
        if (!oA)
          switch (U) {
            case "bestFit": {
              var $;
              const eA = ($ = sA.filter((N) => {
                if (O) {
                  const W = cr(N.placement);
                  return W === H || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  W === "y";
                }
                return !0;
              }).map((N) => [N.placement, N.overflows.filter((W) => W > 0).reduce((W, j) => W + j, 0)]).sort((N, W) => N[1] - W[1])[0]) == null ? void 0 : $[0];
              eA && (oA = eA);
              break;
            }
            case "initialPlacement":
              oA = f;
              break;
          }
        if (s !== oA)
          return {
            reset: {
              placement: oA
            }
          };
      }
      return {};
    }
  };
};
function xg(e, r) {
  return {
    top: e.top - r.height,
    right: e.right - r.width,
    bottom: e.bottom - r.height,
    left: e.left - r.width
  };
}
function Ig(e) {
  return Uy.some((r) => e[r] >= 0);
}
const Ky = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(r) {
      const {
        rects: n
      } = r, {
        strategy: o = "referenceHidden",
        ...s
      } = It(e, r);
      switch (o) {
        case "referenceHidden": {
          const l = await Vo(r, {
            ...s,
            elementContext: "reference"
          }), u = xg(l, n.reference);
          return {
            data: {
              referenceHiddenOffsets: u,
              referenceHidden: Ig(u)
            }
          };
        }
        case "escaped": {
          const l = await Vo(r, {
            ...s,
            altBoundary: !0
          }), u = xg(l, n.floating);
          return {
            data: {
              escapedOffsets: u,
              escaped: Ig(u)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function ky(e, r) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = e, l = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), u = Ht(n), f = Tn(n), B = cr(n) === "y", g = ["left", "top"].includes(u) ? -1 : 1, p = l && B ? -1 : 1, h = It(r, e);
  let {
    mainAxis: v,
    crossAxis: U,
    alignmentAxis: Q
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return f && typeof Q == "number" && (U = f === "end" ? Q * -1 : Q), B ? {
    x: U * p,
    y: v * g
  } : {
    x: v * g,
    y: U * p
  };
}
const Ry = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(r) {
      var n, o;
      const {
        x: s,
        y: l,
        placement: u,
        middlewareData: f
      } = r, B = await ky(r, e);
      return u === ((n = f.offset) == null ? void 0 : n.placement) && (o = f.arrow) != null && o.alignmentOffset ? {} : {
        x: s + B.x,
        y: l + B.y,
        data: {
          ...B,
          placement: u
        }
      };
    }
  };
}, Oy = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(r) {
      const {
        x: n,
        y: o,
        placement: s
      } = r, {
        mainAxis: l = !0,
        crossAxis: u = !1,
        limiter: f = {
          fn: (E) => {
            let {
              x: F,
              y: H
            } = E;
            return {
              x: F,
              y: H
            };
          }
        },
        ...B
      } = It(e, r), g = {
        x: n,
        y: o
      }, p = await Vo(r, B), h = cr(Ht(s)), v = Xu(h);
      let U = g[v], Q = g[h];
      if (l) {
        const E = v === "y" ? "top" : "left", F = v === "y" ? "bottom" : "right", H = U + p[E], k = U - p[F];
        U = nu(H, U, k);
      }
      if (u) {
        const E = h === "y" ? "top" : "left", F = h === "y" ? "bottom" : "right", H = Q + p[E], k = Q - p[F];
        Q = nu(H, Q, k);
      }
      const C = f.fn({
        ...r,
        [v]: U,
        [h]: Q
      });
      return {
        ...C,
        data: {
          x: C.x - n,
          y: C.y - o,
          enabled: {
            [v]: l,
            [h]: u
          }
        }
      };
    }
  };
}, Ny = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(r) {
      const {
        x: n,
        y: o,
        placement: s,
        rects: l,
        middlewareData: u
      } = r, {
        offset: f = 0,
        mainAxis: B = !0,
        crossAxis: g = !0
      } = It(e, r), p = {
        x: n,
        y: o
      }, h = cr(s), v = Xu(h);
      let U = p[v], Q = p[h];
      const C = It(f, r), E = typeof C == "number" ? {
        mainAxis: C,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...C
      };
      if (B) {
        const k = v === "y" ? "height" : "width", K = l.reference[v] - l.floating[k] + E.mainAxis, R = l.reference[v] + l.reference[k] - E.mainAxis;
        U < K ? U = K : U > R && (U = R);
      }
      if (g) {
        var F, H;
        const k = v === "y" ? "width" : "height", K = ["top", "left"].includes(Ht(s)), R = l.reference[h] - l.floating[k] + (K && ((F = u.offset) == null ? void 0 : F[h]) || 0) + (K ? 0 : E.crossAxis), O = l.reference[h] + l.reference[k] + (K ? 0 : ((H = u.offset) == null ? void 0 : H[h]) || 0) - (K ? E.crossAxis : 0);
        Q < R ? Q = R : Q > O && (Q = O);
      }
      return {
        [v]: U,
        [h]: Q
      };
    }
  };
}, My = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(r) {
      var n, o;
      const {
        placement: s,
        rects: l,
        platform: u,
        elements: f
      } = r, {
        apply: B = () => {
        },
        ...g
      } = It(e, r), p = await Vo(r, g), h = Ht(s), v = Tn(s), U = cr(s) === "y", {
        width: Q,
        height: C
      } = l.floating;
      let E, F;
      h === "top" || h === "bottom" ? (E = h, F = v === (await (u.isRTL == null ? void 0 : u.isRTL(f.floating)) ? "start" : "end") ? "left" : "right") : (F = h, E = v === "end" ? "top" : "bottom");
      const H = C - p.top - p.bottom, k = Q - p.left - p.right, K = ar(C - p[E], H), R = ar(Q - p[F], k), O = !r.middlewareData.shift;
      let P = K, X = R;
      if ((n = r.middlewareData.shift) != null && n.enabled.x && (X = k), (o = r.middlewareData.shift) != null && o.enabled.y && (P = H), O && !v) {
        const sA = Le(p.left, 0), pA = Le(p.right, 0), Z = Le(p.top, 0), $ = Le(p.bottom, 0);
        U ? X = Q - 2 * (sA !== 0 || pA !== 0 ? sA + pA : Le(p.left, p.right)) : P = C - 2 * (Z !== 0 || $ !== 0 ? Z + $ : Le(p.top, p.bottom));
      }
      await B({
        ...r,
        availableWidth: X,
        availableHeight: P
      });
      const J = await u.getDimensions(f.floating);
      return Q !== J.width || C !== J.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ca() {
  return typeof window < "u";
}
function Dn(e) {
  return Kw(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Te(e) {
  var r;
  return (e == null || (r = e.ownerDocument) == null ? void 0 : r.defaultView) || window;
}
function ut(e) {
  var r;
  return (r = (Kw(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : r.documentElement;
}
function Kw(e) {
  return ca() ? e instanceof Node || e instanceof Te(e).Node : !1;
}
function qe(e) {
  return ca() ? e instanceof Element || e instanceof Te(e).Element : !1;
}
function ct(e) {
  return ca() ? e instanceof HTMLElement || e instanceof Te(e).HTMLElement : !1;
}
function Hg(e) {
  return !ca() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Te(e).ShadowRoot;
}
function Jo(e) {
  const {
    overflow: r,
    overflowX: n,
    overflowY: o,
    display: s
  } = At(e);
  return /auto|scroll|overlay|hidden|clip/.test(r + o + n) && !["inline", "contents"].includes(s);
}
function Py(e) {
  return ["table", "td", "th"].includes(Dn(e));
}
function ua(e) {
  return [":popover-open", ":modal"].some((r) => {
    try {
      return e.matches(r);
    } catch {
      return !1;
    }
  });
}
function Yu(e) {
  const r = Zu(), n = qe(e) ? At(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !r && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !r && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function _y(e) {
  let r = ur(e);
  for (; ct(r) && !Sn(r); ) {
    if (Yu(r))
      return r;
    if (ua(r))
      return null;
    r = ur(r);
  }
  return null;
}
function Zu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Sn(e) {
  return ["html", "body", "#document"].includes(Dn(e));
}
function At(e) {
  return Te(e).getComputedStyle(e);
}
function fa(e) {
  return qe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ur(e) {
  if (Dn(e) === "html")
    return e;
  const r = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Hg(e) && e.host || // Fallback.
    ut(e)
  );
  return Hg(r) ? r.host : r;
}
function kw(e) {
  const r = ur(e);
  return Sn(r) ? e.ownerDocument ? e.ownerDocument.body : e.body : ct(r) && Jo(r) ? r : kw(r);
}
function Go(e, r, n) {
  var o;
  r === void 0 && (r = []), n === void 0 && (n = !0);
  const s = kw(e), l = s === ((o = e.ownerDocument) == null ? void 0 : o.body), u = Te(s);
  if (l) {
    const f = iu(u);
    return r.concat(u, u.visualViewport || [], Jo(s) ? s : [], f && n ? Go(f) : []);
  }
  return r.concat(s, Go(s, [], n));
}
function iu(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Rw(e) {
  const r = At(e);
  let n = parseFloat(r.width) || 0, o = parseFloat(r.height) || 0;
  const s = ct(e), l = s ? e.offsetWidth : n, u = s ? e.offsetHeight : o, f = js(n) !== l || js(o) !== u;
  return f && (n = l, o = u), {
    width: n,
    height: o,
    $: f
  };
}
function $u(e) {
  return qe(e) ? e : e.contextElement;
}
function In(e) {
  const r = $u(e);
  if (!ct(r))
    return lr(1);
  const n = r.getBoundingClientRect(), {
    width: o,
    height: s,
    $: l
  } = Rw(r);
  let u = (l ? js(n.width) : n.width) / o, f = (l ? js(n.height) : n.height) / s;
  return (!u || !Number.isFinite(u)) && (u = 1), (!f || !Number.isFinite(f)) && (f = 1), {
    x: u,
    y: f
  };
}
const Vy = /* @__PURE__ */ lr(0);
function Ow(e) {
  const r = Te(e);
  return !Zu() || !r.visualViewport ? Vy : {
    x: r.visualViewport.offsetLeft,
    y: r.visualViewport.offsetTop
  };
}
function Gy(e, r, n) {
  return r === void 0 && (r = !1), !n || r && n !== Te(e) ? !1 : r;
}
function kr(e, r, n, o) {
  r === void 0 && (r = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), l = $u(e);
  let u = lr(1);
  r && (o ? qe(o) && (u = In(o)) : u = In(e));
  const f = Gy(l, n, o) ? Ow(l) : lr(0);
  let B = (s.left + f.x) / u.x, g = (s.top + f.y) / u.y, p = s.width / u.x, h = s.height / u.y;
  if (l) {
    const v = Te(l), U = o && qe(o) ? Te(o) : o;
    let Q = v, C = iu(Q);
    for (; C && o && U !== Q; ) {
      const E = In(C), F = C.getBoundingClientRect(), H = At(C), k = F.left + (C.clientLeft + parseFloat(H.paddingLeft)) * E.x, K = F.top + (C.clientTop + parseFloat(H.paddingTop)) * E.y;
      B *= E.x, g *= E.y, p *= E.x, h *= E.y, B += k, g += K, Q = Te(C), C = iu(Q);
    }
  }
  return zs({
    width: p,
    height: h,
    x: B,
    y: g
  });
}
function Wy(e) {
  let {
    elements: r,
    rect: n,
    offsetParent: o,
    strategy: s
  } = e;
  const l = s === "fixed", u = ut(o), f = r ? ua(r.floating) : !1;
  if (o === u || f && l)
    return n;
  let B = {
    scrollLeft: 0,
    scrollTop: 0
  }, g = lr(1);
  const p = lr(0), h = ct(o);
  if ((h || !h && !l) && ((Dn(o) !== "body" || Jo(u)) && (B = fa(o)), ct(o))) {
    const v = kr(o);
    g = In(o), p.x = v.x + o.clientLeft, p.y = v.y + o.clientTop;
  }
  return {
    width: n.width * g.x,
    height: n.height * g.y,
    x: n.x * g.x - B.scrollLeft * g.x + p.x,
    y: n.y * g.y - B.scrollTop * g.y + p.y
  };
}
function jy(e) {
  return Array.from(e.getClientRects());
}
function su(e, r) {
  const n = fa(e).scrollLeft;
  return r ? r.left + n : kr(ut(e)).left + n;
}
function Xy(e) {
  const r = ut(e), n = fa(e), o = e.ownerDocument.body, s = Le(r.scrollWidth, r.clientWidth, o.scrollWidth, o.clientWidth), l = Le(r.scrollHeight, r.clientHeight, o.scrollHeight, o.clientHeight);
  let u = -n.scrollLeft + su(e);
  const f = -n.scrollTop;
  return At(o).direction === "rtl" && (u += Le(r.clientWidth, o.clientWidth) - s), {
    width: s,
    height: l,
    x: u,
    y: f
  };
}
function zy(e, r) {
  const n = Te(e), o = ut(e), s = n.visualViewport;
  let l = o.clientWidth, u = o.clientHeight, f = 0, B = 0;
  if (s) {
    l = s.width, u = s.height;
    const g = Zu();
    (!g || g && r === "fixed") && (f = s.offsetLeft, B = s.offsetTop);
  }
  return {
    width: l,
    height: u,
    x: f,
    y: B
  };
}
function Jy(e, r) {
  const n = kr(e, !0, r === "fixed"), o = n.top + e.clientTop, s = n.left + e.clientLeft, l = ct(e) ? In(e) : lr(1), u = e.clientWidth * l.x, f = e.clientHeight * l.y, B = s * l.x, g = o * l.y;
  return {
    width: u,
    height: f,
    x: B,
    y: g
  };
}
function Sg(e, r, n) {
  let o;
  if (r === "viewport")
    o = zy(e, n);
  else if (r === "document")
    o = Xy(ut(e));
  else if (qe(r))
    o = Jy(r, n);
  else {
    const s = Ow(e);
    o = {
      ...r,
      x: r.x - s.x,
      y: r.y - s.y
    };
  }
  return zs(o);
}
function Nw(e, r) {
  const n = ur(e);
  return n === r || !qe(n) || Sn(n) ? !1 : At(n).position === "fixed" || Nw(n, r);
}
function Yy(e, r) {
  const n = r.get(e);
  if (n)
    return n;
  let o = Go(e, [], !1).filter((f) => qe(f) && Dn(f) !== "body"), s = null;
  const l = At(e).position === "fixed";
  let u = l ? ur(e) : e;
  for (; qe(u) && !Sn(u); ) {
    const f = At(u), B = Yu(u);
    !B && f.position === "fixed" && (s = null), (l ? !B && !s : !B && f.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || Jo(u) && !B && Nw(e, u)) ? o = o.filter((p) => p !== u) : s = f, u = ur(u);
  }
  return r.set(e, o), o;
}
function Zy(e) {
  let {
    element: r,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = e;
  const u = [...n === "clippingAncestors" ? ua(r) ? [] : Yy(r, this._c) : [].concat(n), o], f = u[0], B = u.reduce((g, p) => {
    const h = Sg(r, p, s);
    return g.top = Le(h.top, g.top), g.right = ar(h.right, g.right), g.bottom = ar(h.bottom, g.bottom), g.left = Le(h.left, g.left), g;
  }, Sg(r, f, s));
  return {
    width: B.right - B.left,
    height: B.bottom - B.top,
    x: B.left,
    y: B.top
  };
}
function $y(e) {
  const {
    width: r,
    height: n
  } = Rw(e);
  return {
    width: r,
    height: n
  };
}
function qy(e, r, n) {
  const o = ct(r), s = ut(r), l = n === "fixed", u = kr(e, !0, l, r);
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const B = lr(0);
  if (o || !o && !l)
    if ((Dn(r) !== "body" || Jo(s)) && (f = fa(r)), o) {
      const U = kr(r, !0, l, r);
      B.x = U.x + r.clientLeft, B.y = U.y + r.clientTop;
    } else s && (B.x = su(s));
  let g = 0, p = 0;
  if (s && !o && !l) {
    const U = s.getBoundingClientRect();
    p = U.top + f.scrollTop, g = U.left + f.scrollLeft - // RTL <body> scrollbar.
    su(s, U);
  }
  const h = u.left + f.scrollLeft - B.x - g, v = u.top + f.scrollTop - B.y - p;
  return {
    x: h,
    y: v,
    width: u.width,
    height: u.height
  };
}
function Ic(e) {
  return At(e).position === "static";
}
function bg(e, r) {
  if (!ct(e) || At(e).position === "fixed")
    return null;
  if (r)
    return r(e);
  let n = e.offsetParent;
  return ut(e) === n && (n = n.ownerDocument.body), n;
}
function Mw(e, r) {
  const n = Te(e);
  if (ua(e))
    return n;
  if (!ct(e)) {
    let s = ur(e);
    for (; s && !Sn(s); ) {
      if (qe(s) && !Ic(s))
        return s;
      s = ur(s);
    }
    return n;
  }
  let o = bg(e, r);
  for (; o && Py(o) && Ic(o); )
    o = bg(o, r);
  return o && Sn(o) && Ic(o) && !Yu(o) ? n : o || _y(e) || n;
}
const AU = async function(e) {
  const r = this.getOffsetParent || Mw, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: qy(e.reference, await r(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function eU(e) {
  return At(e).direction === "rtl";
}
const tU = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Wy,
  getDocumentElement: ut,
  getClippingRect: Zy,
  getOffsetParent: Mw,
  getElementRects: AU,
  getClientRects: jy,
  getDimensions: $y,
  getScale: In,
  isElement: qe,
  isRTL: eU
};
function rU(e, r) {
  let n = null, o;
  const s = ut(e);
  function l() {
    var f;
    clearTimeout(o), (f = n) == null || f.disconnect(), n = null;
  }
  function u(f, B) {
    f === void 0 && (f = !1), B === void 0 && (B = 1), l();
    const {
      left: g,
      top: p,
      width: h,
      height: v
    } = e.getBoundingClientRect();
    if (f || r(), !h || !v)
      return;
    const U = fs(p), Q = fs(s.clientWidth - (g + h)), C = fs(s.clientHeight - (p + v)), E = fs(g), H = {
      rootMargin: -U + "px " + -Q + "px " + -C + "px " + -E + "px",
      threshold: Le(0, ar(1, B)) || 1
    };
    let k = !0;
    function K(R) {
      const O = R[0].intersectionRatio;
      if (O !== B) {
        if (!k)
          return u();
        O ? u(!1, O) : o = setTimeout(() => {
          u(!1, 1e-7);
        }, 1e3);
      }
      k = !1;
    }
    try {
      n = new IntersectionObserver(K, {
        ...H,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(K, H);
    }
    n.observe(e);
  }
  return u(!0), l;
}
function nU(e, r, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: l = !0,
    elementResize: u = typeof ResizeObserver == "function",
    layoutShift: f = typeof IntersectionObserver == "function",
    animationFrame: B = !1
  } = o, g = $u(e), p = s || l ? [...g ? Go(g) : [], ...Go(r)] : [];
  p.forEach((F) => {
    s && F.addEventListener("scroll", n, {
      passive: !0
    }), l && F.addEventListener("resize", n);
  });
  const h = g && f ? rU(g, n) : null;
  let v = -1, U = null;
  u && (U = new ResizeObserver((F) => {
    let [H] = F;
    H && H.target === g && U && (U.unobserve(r), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var k;
      (k = U) == null || k.observe(r);
    })), n();
  }), g && !B && U.observe(g), U.observe(r));
  let Q, C = B ? kr(e) : null;
  B && E();
  function E() {
    const F = kr(e);
    C && (F.x !== C.x || F.y !== C.y || F.width !== C.width || F.height !== C.height) && n(), C = F, Q = requestAnimationFrame(E);
  }
  return n(), () => {
    var F;
    p.forEach((H) => {
      s && H.removeEventListener("scroll", n), l && H.removeEventListener("resize", n);
    }), h?.(), (F = U) == null || F.disconnect(), U = null, B && cancelAnimationFrame(Q);
  };
}
const oU = Ry, iU = Oy, sU = Dy, aU = My, lU = Ky, Lg = Ty, cU = Ny, uU = (e, r, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: tU,
    ...n
  }, l = {
    ...s.platform,
    _c: o
  };
  return Ly(e, r, {
    ...s,
    platform: l
  });
};
var Ns = typeof document < "u" ? m.useLayoutEffect : m.useEffect;
function Js(e, r) {
  if (e === r)
    return !0;
  if (typeof e != typeof r)
    return !1;
  if (typeof e == "function" && e.toString() === r.toString())
    return !0;
  let n, o, s;
  if (e && r && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== r.length) return !1;
      for (o = n; o-- !== 0; )
        if (!Js(e[o], r[o]))
          return !1;
      return !0;
    }
    if (s = Object.keys(e), n = s.length, n !== Object.keys(r).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(r, s[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const l = s[o];
      if (!(l === "_owner" && e.$$typeof) && !Js(e[l], r[l]))
        return !1;
    }
    return !0;
  }
  return e !== e && r !== r;
}
function Pw(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Tg(e, r) {
  const n = Pw(e);
  return Math.round(r * n) / n;
}
function Hc(e) {
  const r = m.useRef(e);
  return Ns(() => {
    r.current = e;
  }), r;
}
function fU(e) {
  e === void 0 && (e = {});
  const {
    placement: r = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: s,
    elements: {
      reference: l,
      floating: u
    } = {},
    transform: f = !0,
    whileElementsMounted: B,
    open: g
  } = e, [p, h] = m.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: r,
    middlewareData: {},
    isPositioned: !1
  }), [v, U] = m.useState(o);
  Js(v, o) || U(o);
  const [Q, C] = m.useState(null), [E, F] = m.useState(null), H = m.useCallback((N) => {
    N !== O.current && (O.current = N, C(N));
  }, []), k = m.useCallback((N) => {
    N !== P.current && (P.current = N, F(N));
  }, []), K = l || Q, R = u || E, O = m.useRef(null), P = m.useRef(null), X = m.useRef(p), J = B != null, sA = Hc(B), pA = Hc(s), Z = Hc(g), $ = m.useCallback(() => {
    if (!O.current || !P.current)
      return;
    const N = {
      placement: r,
      strategy: n,
      middleware: v
    };
    pA.current && (N.platform = pA.current), uU(O.current, P.current, N).then((W) => {
      const j = {
        ...W,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: Z.current !== !1
      };
      nA.current && !Js(X.current, j) && (X.current = j, Or.flushSync(() => {
        h(j);
      }));
    });
  }, [v, r, n, pA, Z]);
  Ns(() => {
    g === !1 && X.current.isPositioned && (X.current.isPositioned = !1, h((N) => ({
      ...N,
      isPositioned: !1
    })));
  }, [g]);
  const nA = m.useRef(!1);
  Ns(() => (nA.current = !0, () => {
    nA.current = !1;
  }), []), Ns(() => {
    if (K && (O.current = K), R && (P.current = R), K && R) {
      if (sA.current)
        return sA.current(K, R, $);
      $();
    }
  }, [K, R, $, sA, J]);
  const gA = m.useMemo(() => ({
    reference: O,
    floating: P,
    setReference: H,
    setFloating: k
  }), [H, k]), oA = m.useMemo(() => ({
    reference: K,
    floating: R
  }), [K, R]), eA = m.useMemo(() => {
    const N = {
      position: n,
      left: 0,
      top: 0
    };
    if (!oA.floating)
      return N;
    const W = Tg(oA.floating, p.x), j = Tg(oA.floating, p.y);
    return f ? {
      ...N,
      transform: "translate(" + W + "px, " + j + "px)",
      ...Pw(oA.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: W,
      top: j
    };
  }, [n, f, oA.floating, p.x, p.y]);
  return m.useMemo(() => ({
    ...p,
    update: $,
    refs: gA,
    elements: oA,
    floatingStyles: eA
  }), [p, $, gA, oA, eA]);
}
const dU = (e) => {
  function r(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: s
      } = typeof e == "function" ? e(n) : e;
      return o && r(o) ? o.current != null ? Lg({
        element: o.current,
        padding: s
      }).fn(n) : {} : o ? Lg({
        element: o,
        padding: s
      }).fn(n) : {};
    }
  };
}, BU = (e, r) => ({
  ...oU(e),
  options: [e, r]
}), gU = (e, r) => ({
  ...iU(e),
  options: [e, r]
}), pU = (e, r) => ({
  ...cU(e),
  options: [e, r]
}), wU = (e, r) => ({
  ...sU(e),
  options: [e, r]
}), hU = (e, r) => ({
  ...aU(e),
  options: [e, r]
}), vU = (e, r) => ({
  ...lU(e),
  options: [e, r]
}), mU = (e, r) => ({
  ...dU(e),
  options: [e, r]
});
var CU = "Arrow", _w = m.forwardRef((e, r) => {
  const { children: n, width: o = 10, height: s = 5, ...l } = e;
  return /* @__PURE__ */ b.jsx(
    TA.svg,
    {
      ...l,
      ref: r,
      width: o,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ b.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
_w.displayName = CU;
var QU = _w;
function yU(e) {
  const [r, n] = m.useState(void 0);
  return ve(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const l = s[0];
        let u, f;
        if ("borderBoxSize" in l) {
          const B = l.borderBoxSize, g = Array.isArray(B) ? B[0] : B;
          u = g.inlineSize, f = g.blockSize;
        } else
          u = e.offsetWidth, f = e.offsetHeight;
        n({ width: u, height: f });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [e]), r;
}
var qu = "Popper", [Vw, Gw] = sa(qu), [UU, Ww] = Vw(qu), jw = (e) => {
  const { __scopePopper: r, children: n } = e, [o, s] = m.useState(null);
  return /* @__PURE__ */ b.jsx(UU, { scope: r, anchor: o, onAnchorChange: s, children: n });
};
jw.displayName = qu;
var Xw = "PopperAnchor", zw = m.forwardRef(
  (e, r) => {
    const { __scopePopper: n, virtualRef: o, ...s } = e, l = Ww(Xw, n), u = m.useRef(null), f = zA(r, u);
    return m.useEffect(() => {
      l.onAnchorChange(o?.current || u.current);
    }), o ? null : /* @__PURE__ */ b.jsx(TA.div, { ...s, ref: f });
  }
);
zw.displayName = Xw;
var Af = "PopperContent", [FU, EU] = Vw(Af), Jw = m.forwardRef(
  (e, r) => {
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: s = 0,
      align: l = "center",
      alignOffset: u = 0,
      arrowPadding: f = 0,
      avoidCollisions: B = !0,
      collisionBoundary: g = [],
      collisionPadding: p = 0,
      sticky: h = "partial",
      hideWhenDetached: v = !1,
      updatePositionStrategy: U = "optimized",
      onPlaced: Q,
      ...C
    } = e, E = Ww(Af, n), [F, H] = m.useState(null), k = zA(r, (Y) => H(Y)), [K, R] = m.useState(null), O = yU(K), P = O?.width ?? 0, X = O?.height ?? 0, J = o + (l !== "center" ? "-" + l : ""), sA = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, pA = Array.isArray(g) ? g : [g], Z = pA.length > 0, $ = {
      padding: sA,
      boundary: pA.filter(IU),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: Z
    }, { refs: nA, floatingStyles: gA, placement: oA, isPositioned: eA, middlewareData: N } = fU({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: J,
      whileElementsMounted: (...Y) => nU(...Y, {
        animationFrame: U === "always"
      }),
      elements: {
        reference: E.anchor
      },
      middleware: [
        BU({ mainAxis: s + X, alignmentAxis: u }),
        B && gU({
          mainAxis: !0,
          crossAxis: !1,
          limiter: h === "partial" ? pU() : void 0,
          ...$
        }),
        B && wU({ ...$ }),
        hU({
          ...$,
          apply: ({ elements: Y, rects: fA, availableWidth: CA, availableHeight: QA }) => {
            const { width: IA, height: NA } = fA.reference, oe = Y.floating.style;
            oe.setProperty("--radix-popper-available-width", `${CA}px`), oe.setProperty("--radix-popper-available-height", `${QA}px`), oe.setProperty("--radix-popper-anchor-width", `${IA}px`), oe.setProperty("--radix-popper-anchor-height", `${NA}px`);
          }
        }),
        K && mU({ element: K, padding: f }),
        HU({ arrowWidth: P, arrowHeight: X }),
        v && vU({ strategy: "referenceHidden", ...$ })
      ]
    }), [W, j] = $w(oA), I = xt(Q);
    ve(() => {
      eA && I?.();
    }, [eA, I]);
    const M = N.arrow?.x, cA = N.arrow?.y, uA = N.arrow?.centerOffset !== 0, [wA, hA] = m.useState();
    return ve(() => {
      F && hA(window.getComputedStyle(F).zIndex);
    }, [F]), /* @__PURE__ */ b.jsx(
      "div",
      {
        ref: nA.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...gA,
          transform: eA ? gA.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: wA,
          "--radix-popper-transform-origin": [
            N.transformOrigin?.x,
            N.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...N.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ b.jsx(
          FU,
          {
            scope: n,
            placedSide: W,
            onArrowChange: R,
            arrowX: M,
            arrowY: cA,
            shouldHideArrow: uA,
            children: /* @__PURE__ */ b.jsx(
              TA.div,
              {
                "data-side": W,
                "data-align": j,
                ...C,
                ref: k,
                style: {
                  ...C.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: eA ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Jw.displayName = Af;
var Yw = "PopperArrow", xU = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Zw = m.forwardRef(function(r, n) {
  const { __scopePopper: o, ...s } = r, l = EU(Yw, o), u = xU[l.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ b.jsx(
      "span",
      {
        ref: l.onArrowChange,
        style: {
          position: "absolute",
          left: l.arrowX,
          top: l.arrowY,
          [u]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[l.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[l.placedSide],
          visibility: l.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ b.jsx(
          QU,
          {
            ...s,
            ref: n,
            style: {
              ...s.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Zw.displayName = Yw;
function IU(e) {
  return e !== null;
}
var HU = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(r) {
    const { placement: n, rects: o, middlewareData: s } = r, u = s.arrow?.centerOffset !== 0, f = u ? 0 : e.arrowWidth, B = u ? 0 : e.arrowHeight, [g, p] = $w(n), h = { start: "0%", center: "50%", end: "100%" }[p], v = (s.arrow?.x ?? 0) + f / 2, U = (s.arrow?.y ?? 0) + B / 2;
    let Q = "", C = "";
    return g === "bottom" ? (Q = u ? h : `${v}px`, C = `${-B}px`) : g === "top" ? (Q = u ? h : `${v}px`, C = `${o.floating.height + B}px`) : g === "right" ? (Q = `${-B}px`, C = u ? h : `${U}px`) : g === "left" && (Q = `${o.floating.width + B}px`, C = u ? h : `${U}px`), { data: { x: Q, y: C } };
  }
});
function $w(e) {
  const [r, n = "center"] = e.split("-");
  return [r, n];
}
var SU = jw, bU = zw, LU = Jw, TU = Zw;
function DU(e) {
  const r = m.useRef({ value: e, previous: e });
  return m.useMemo(() => (r.current.value !== e && (r.current.previous = r.current.value, r.current.value = e), r.current.previous), [e]);
}
var KU = "VisuallyHidden", qw = m.forwardRef(
  (e, r) => /* @__PURE__ */ b.jsx(
    TA.span,
    {
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
        ...e.style
      }
    }
  )
);
qw.displayName = KU;
var kU = [" ", "Enter", "ArrowUp", "ArrowDown"], RU = [" ", "Enter"], Yo = "Select", [da, Ba, OU] = Cy(Yo), [Kn, ZH] = sa(Yo, [
  OU,
  Gw
]), ga = Gw(), [NU, dr] = Kn(Yo), [MU, PU] = Kn(Yo), Ah = (e) => {
  const {
    __scopeSelect: r,
    children: n,
    open: o,
    defaultOpen: s,
    onOpenChange: l,
    value: u,
    defaultValue: f,
    onValueChange: B,
    dir: g,
    name: p,
    autoComplete: h,
    disabled: v,
    required: U
  } = e, Q = ga(r), [C, E] = m.useState(null), [F, H] = m.useState(null), [k, K] = m.useState(!1), R = yy(g), [O = !1, P] = eu({
    prop: o,
    defaultProp: s,
    onChange: l
  }), [X, J] = eu({
    prop: u,
    defaultProp: f,
    onChange: B
  }), sA = m.useRef(null), pA = C ? !!C.closest("form") : !0, [Z, $] = m.useState(/* @__PURE__ */ new Set()), nA = Array.from(Z).map((gA) => gA.props.value).join(";");
  return /* @__PURE__ */ b.jsx(SU, { ...Q, children: /* @__PURE__ */ b.jsxs(
    NU,
    {
      required: U,
      scope: r,
      trigger: C,
      onTriggerChange: E,
      valueNode: F,
      onValueNodeChange: H,
      valueNodeHasChildren: k,
      onValueNodeHasChildrenChange: K,
      contentId: En(),
      value: X,
      onValueChange: J,
      open: O,
      onOpenChange: P,
      dir: R,
      triggerPointerDownPosRef: sA,
      disabled: v,
      children: [
        /* @__PURE__ */ b.jsx(da.Provider, { scope: r, children: /* @__PURE__ */ b.jsx(
          MU,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: m.useCallback((gA) => {
              $((oA) => new Set(oA).add(gA));
            }, []),
            onNativeOptionRemove: m.useCallback((gA) => {
              $((oA) => {
                const eA = new Set(oA);
                return eA.delete(gA), eA;
              });
            }, []),
            children: n
          }
        ) }),
        pA ? /* @__PURE__ */ b.jsxs(
          Fh,
          {
            "aria-hidden": !0,
            required: U,
            tabIndex: -1,
            name: p,
            autoComplete: h,
            value: X,
            onChange: (gA) => J(gA.target.value),
            disabled: v,
            children: [
              X === void 0 ? /* @__PURE__ */ b.jsx("option", { value: "" }) : null,
              Array.from(Z)
            ]
          },
          nA
        ) : null
      ]
    }
  ) });
};
Ah.displayName = Yo;
var eh = "SelectTrigger", th = m.forwardRef(
  (e, r) => {
    const { __scopeSelect: n, disabled: o = !1, ...s } = e, l = ga(n), u = dr(eh, n), f = u.disabled || o, B = zA(r, u.onTriggerChange), g = Ba(n), [p, h, v] = Eh((Q) => {
      const C = g().filter((H) => !H.disabled), E = C.find((H) => H.value === u.value), F = xh(C, Q, E);
      F !== void 0 && u.onValueChange(F.value);
    }), U = () => {
      f || (u.onOpenChange(!0), v());
    };
    return /* @__PURE__ */ b.jsx(bU, { asChild: !0, ...l, children: /* @__PURE__ */ b.jsx(
      TA.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": u.contentId,
        "aria-expanded": u.open,
        "aria-required": u.required,
        "aria-autocomplete": "none",
        dir: u.dir,
        "data-state": u.open ? "open" : "closed",
        disabled: f,
        "data-disabled": f ? "" : void 0,
        "data-placeholder": Uh(u.value) ? "" : void 0,
        ...s,
        ref: B,
        onClick: _A(s.onClick, (Q) => {
          Q.currentTarget.focus();
        }),
        onPointerDown: _A(s.onPointerDown, (Q) => {
          const C = Q.target;
          C.hasPointerCapture(Q.pointerId) && C.releasePointerCapture(Q.pointerId), Q.button === 0 && Q.ctrlKey === !1 && (U(), u.triggerPointerDownPosRef.current = {
            x: Math.round(Q.pageX),
            y: Math.round(Q.pageY)
          }, Q.preventDefault());
        }),
        onKeyDown: _A(s.onKeyDown, (Q) => {
          const C = p.current !== "";
          !(Q.ctrlKey || Q.altKey || Q.metaKey) && Q.key.length === 1 && h(Q.key), !(C && Q.key === " ") && kU.includes(Q.key) && (U(), Q.preventDefault());
        })
      }
    ) });
  }
);
th.displayName = eh;
var rh = "SelectValue", nh = m.forwardRef(
  (e, r) => {
    const { __scopeSelect: n, className: o, style: s, children: l, placeholder: u = "", ...f } = e, B = dr(rh, n), { onValueNodeHasChildrenChange: g } = B, p = l !== void 0, h = zA(r, B.onValueNodeChange);
    return ve(() => {
      g(p);
    }, [g, p]), /* @__PURE__ */ b.jsx(
      TA.span,
      {
        ...f,
        ref: h,
        style: { pointerEvents: "none" },
        children: Uh(B.value) ? /* @__PURE__ */ b.jsx(b.Fragment, { children: u }) : l
      }
    );
  }
);
nh.displayName = rh;
var _U = "SelectIcon", oh = m.forwardRef(
  (e, r) => {
    const { __scopeSelect: n, children: o, ...s } = e;
    return /* @__PURE__ */ b.jsx(TA.span, { "aria-hidden": !0, ...s, ref: r, children: o || "▼" });
  }
);
oh.displayName = _U;
var VU = "SelectPortal", ih = (e) => /* @__PURE__ */ b.jsx(Pu, { asChild: !0, ...e });
ih.displayName = VU;
var Rr = "SelectContent", sh = m.forwardRef(
  (e, r) => {
    const n = dr(Rr, e.__scopeSelect), [o, s] = m.useState();
    if (ve(() => {
      s(new DocumentFragment());
    }, []), !n.open) {
      const l = o;
      return l ? Or.createPortal(
        /* @__PURE__ */ b.jsx(ah, { scope: e.__scopeSelect, children: /* @__PURE__ */ b.jsx(da.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ b.jsx("div", { children: e.children }) }) }),
        l
      ) : null;
    }
    return /* @__PURE__ */ b.jsx(lh, { ...e, ref: r });
  }
);
sh.displayName = Rr;
var Ft = 10, [ah, Br] = Kn(Rr), GU = "SelectContentImpl", lh = m.forwardRef(
  (e, r) => {
    const {
      __scopeSelect: n,
      position: o = "item-aligned",
      onCloseAutoFocus: s,
      onEscapeKeyDown: l,
      onPointerDownOutside: u,
      //
      // PopperContent props
      side: f,
      sideOffset: B,
      align: g,
      alignOffset: p,
      arrowPadding: h,
      collisionBoundary: v,
      collisionPadding: U,
      sticky: Q,
      hideWhenDetached: C,
      avoidCollisions: E,
      //
      ...F
    } = e, H = dr(Rr, n), [k, K] = m.useState(null), [R, O] = m.useState(null), P = zA(r, (Y) => K(Y)), [X, J] = m.useState(null), [sA, pA] = m.useState(
      null
    ), Z = Ba(n), [$, nA] = m.useState(!1), gA = m.useRef(!1);
    m.useEffect(() => {
      if (k) return rw(k);
    }, [k]), zp();
    const oA = m.useCallback(
      (Y) => {
        const [fA, ...CA] = Z().map((NA) => NA.ref.current), [QA] = CA.slice(-1), IA = document.activeElement;
        for (const NA of Y)
          if (NA === IA || (NA?.scrollIntoView({ block: "nearest" }), NA === fA && R && (R.scrollTop = 0), NA === QA && R && (R.scrollTop = R.scrollHeight), NA?.focus(), document.activeElement !== IA)) return;
      },
      [Z, R]
    ), eA = m.useCallback(
      () => oA([X, k]),
      [oA, X, k]
    );
    m.useEffect(() => {
      $ && eA();
    }, [$, eA]);
    const { onOpenChange: N, triggerPointerDownPosRef: W } = H;
    m.useEffect(() => {
      if (k) {
        let Y = { x: 0, y: 0 };
        const fA = (QA) => {
          Y = {
            x: Math.abs(Math.round(QA.pageX) - (W.current?.x ?? 0)),
            y: Math.abs(Math.round(QA.pageY) - (W.current?.y ?? 0))
          };
        }, CA = (QA) => {
          Y.x <= 10 && Y.y <= 10 ? QA.preventDefault() : k.contains(QA.target) || N(!1), document.removeEventListener("pointermove", fA), W.current = null;
        };
        return W.current !== null && (document.addEventListener("pointermove", fA), document.addEventListener("pointerup", CA, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", fA), document.removeEventListener("pointerup", CA, { capture: !0 });
        };
      }
    }, [k, N, W]), m.useEffect(() => {
      const Y = () => N(!1);
      return window.addEventListener("blur", Y), window.addEventListener("resize", Y), () => {
        window.removeEventListener("blur", Y), window.removeEventListener("resize", Y);
      };
    }, [N]);
    const [j, I] = Eh((Y) => {
      const fA = Z().filter((IA) => !IA.disabled), CA = fA.find((IA) => IA.ref.current === document.activeElement), QA = xh(fA, Y, CA);
      QA && setTimeout(() => QA.ref.current.focus());
    }), M = m.useCallback(
      (Y, fA, CA) => {
        const QA = !gA.current && !CA;
        (H.value !== void 0 && H.value === fA || QA) && (J(Y), QA && (gA.current = !0));
      },
      [H.value]
    ), cA = m.useCallback(() => k?.focus(), [k]), uA = m.useCallback(
      (Y, fA, CA) => {
        const QA = !gA.current && !CA;
        (H.value !== void 0 && H.value === fA || QA) && pA(Y);
      },
      [H.value]
    ), wA = o === "popper" ? au : ch, hA = wA === au ? {
      side: f,
      sideOffset: B,
      align: g,
      alignOffset: p,
      arrowPadding: h,
      collisionBoundary: v,
      collisionPadding: U,
      sticky: Q,
      hideWhenDetached: C,
      avoidCollisions: E
    } : {};
    return /* @__PURE__ */ b.jsx(
      ah,
      {
        scope: n,
        content: k,
        viewport: R,
        onViewportChange: O,
        itemRefCallback: M,
        selectedItem: X,
        onItemLeave: cA,
        itemTextRefCallback: uA,
        focusSelectedItem: eA,
        selectedItemText: sA,
        position: o,
        isPositioned: $,
        searchRef: j,
        children: /* @__PURE__ */ b.jsx(_u, { as: Dr, allowPinchZoom: !0, children: /* @__PURE__ */ b.jsx(
          Mu,
          {
            asChild: !0,
            trapped: H.open,
            onMountAutoFocus: (Y) => {
              Y.preventDefault();
            },
            onUnmountAutoFocus: _A(s, (Y) => {
              H.trigger?.focus({ preventScroll: !0 }), Y.preventDefault();
            }),
            children: /* @__PURE__ */ b.jsx(
              Nu,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: l,
                onPointerDownOutside: u,
                onFocusOutside: (Y) => Y.preventDefault(),
                onDismiss: () => H.onOpenChange(!1),
                children: /* @__PURE__ */ b.jsx(
                  wA,
                  {
                    role: "listbox",
                    id: H.contentId,
                    "data-state": H.open ? "open" : "closed",
                    dir: H.dir,
                    onContextMenu: (Y) => Y.preventDefault(),
                    ...F,
                    ...hA,
                    onPlaced: () => nA(!0),
                    ref: P,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...F.style
                    },
                    onKeyDown: _A(F.onKeyDown, (Y) => {
                      const fA = Y.ctrlKey || Y.altKey || Y.metaKey;
                      if (Y.key === "Tab" && Y.preventDefault(), !fA && Y.key.length === 1 && I(Y.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(Y.key)) {
                        let QA = Z().filter((IA) => !IA.disabled).map((IA) => IA.ref.current);
                        if (["ArrowUp", "End"].includes(Y.key) && (QA = QA.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(Y.key)) {
                          const IA = Y.target, NA = QA.indexOf(IA);
                          QA = QA.slice(NA + 1);
                        }
                        setTimeout(() => oA(QA)), Y.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
lh.displayName = GU;
var WU = "SelectItemAlignedPosition", ch = m.forwardRef((e, r) => {
  const { __scopeSelect: n, onPlaced: o, ...s } = e, l = dr(Rr, n), u = Br(Rr, n), [f, B] = m.useState(null), [g, p] = m.useState(null), h = zA(r, (P) => p(P)), v = Ba(n), U = m.useRef(!1), Q = m.useRef(!0), { viewport: C, selectedItem: E, selectedItemText: F, focusSelectedItem: H } = u, k = m.useCallback(() => {
    if (l.trigger && l.valueNode && f && g && C && E && F) {
      const P = l.trigger.getBoundingClientRect(), X = g.getBoundingClientRect(), J = l.valueNode.getBoundingClientRect(), sA = F.getBoundingClientRect();
      if (l.dir !== "rtl") {
        const IA = sA.left - X.left, NA = J.left - IA, oe = P.left - NA, Ge = P.width + oe, Nr = Math.max(Ge, X.width), Mr = window.innerWidth - Ft, gr = Fg(NA, [Ft, Mr - Nr]);
        f.style.minWidth = Ge + "px", f.style.left = gr + "px";
      } else {
        const IA = X.right - sA.right, NA = window.innerWidth - J.right - IA, oe = window.innerWidth - P.right - NA, Ge = P.width + oe, Nr = Math.max(Ge, X.width), Mr = window.innerWidth - Ft, gr = Fg(NA, [Ft, Mr - Nr]);
        f.style.minWidth = Ge + "px", f.style.right = gr + "px";
      }
      const pA = v(), Z = window.innerHeight - Ft * 2, $ = C.scrollHeight, nA = window.getComputedStyle(g), gA = parseInt(nA.borderTopWidth, 10), oA = parseInt(nA.paddingTop, 10), eA = parseInt(nA.borderBottomWidth, 10), N = parseInt(nA.paddingBottom, 10), W = gA + oA + $ + N + eA, j = Math.min(E.offsetHeight * 5, W), I = window.getComputedStyle(C), M = parseInt(I.paddingTop, 10), cA = parseInt(I.paddingBottom, 10), uA = P.top + P.height / 2 - Ft, wA = Z - uA, hA = E.offsetHeight / 2, Y = E.offsetTop + hA, fA = gA + oA + Y, CA = W - fA;
      if (fA <= uA) {
        const IA = E === pA[pA.length - 1].ref.current;
        f.style.bottom = "0px";
        const NA = g.clientHeight - C.offsetTop - C.offsetHeight, oe = Math.max(
          wA,
          hA + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (IA ? cA : 0) + NA + eA
        ), Ge = fA + oe;
        f.style.height = Ge + "px";
      } else {
        const IA = E === pA[0].ref.current;
        f.style.top = "0px";
        const oe = Math.max(
          uA,
          gA + C.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (IA ? M : 0) + hA
        ) + CA;
        f.style.height = oe + "px", C.scrollTop = fA - uA + C.offsetTop;
      }
      f.style.margin = `${Ft}px 0`, f.style.minHeight = j + "px", f.style.maxHeight = Z + "px", o?.(), requestAnimationFrame(() => U.current = !0);
    }
  }, [
    v,
    l.trigger,
    l.valueNode,
    f,
    g,
    C,
    E,
    F,
    l.dir,
    o
  ]);
  ve(() => k(), [k]);
  const [K, R] = m.useState();
  ve(() => {
    g && R(window.getComputedStyle(g).zIndex);
  }, [g]);
  const O = m.useCallback(
    (P) => {
      P && Q.current === !0 && (k(), H?.(), Q.current = !1);
    },
    [k, H]
  );
  return /* @__PURE__ */ b.jsx(
    XU,
    {
      scope: n,
      contentWrapper: f,
      shouldExpandOnScrollRef: U,
      onScrollButtonChange: O,
      children: /* @__PURE__ */ b.jsx(
        "div",
        {
          ref: B,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: K
          },
          children: /* @__PURE__ */ b.jsx(
            TA.div,
            {
              ...s,
              ref: h,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...s.style
              }
            }
          )
        }
      )
    }
  );
});
ch.displayName = WU;
var jU = "SelectPopperPosition", au = m.forwardRef((e, r) => {
  const {
    __scopeSelect: n,
    align: o = "start",
    collisionPadding: s = Ft,
    ...l
  } = e, u = ga(n);
  return /* @__PURE__ */ b.jsx(
    LU,
    {
      ...u,
      ...l,
      ref: r,
      align: o,
      collisionPadding: s,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...l.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
au.displayName = jU;
var [XU, ef] = Kn(Rr, {}), lu = "SelectViewport", uh = m.forwardRef(
  (e, r) => {
    const { __scopeSelect: n, nonce: o, ...s } = e, l = Br(lu, n), u = ef(lu, n), f = zA(r, l.onViewportChange), B = m.useRef(0);
    return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
      /* @__PURE__ */ b.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ b.jsx(da.Slot, { scope: n, children: /* @__PURE__ */ b.jsx(
        TA.div,
        {
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
            ...s.style
          },
          onScroll: _A(s.onScroll, (g) => {
            const p = g.currentTarget, { contentWrapper: h, shouldExpandOnScrollRef: v } = u;
            if (v?.current && h) {
              const U = Math.abs(B.current - p.scrollTop);
              if (U > 0) {
                const Q = window.innerHeight - Ft * 2, C = parseFloat(h.style.minHeight), E = parseFloat(h.style.height), F = Math.max(C, E);
                if (F < Q) {
                  const H = F + U, k = Math.min(Q, H), K = H - k;
                  h.style.height = k + "px", h.style.bottom === "0px" && (p.scrollTop = K > 0 ? K : 0, h.style.justifyContent = "flex-end");
                }
              }
            }
            B.current = p.scrollTop;
          })
        }
      ) })
    ] });
  }
);
uh.displayName = lu;
var fh = "SelectGroup", [zU, JU] = Kn(fh), YU = m.forwardRef(
  (e, r) => {
    const { __scopeSelect: n, ...o } = e, s = En();
    return /* @__PURE__ */ b.jsx(zU, { scope: n, id: s, children: /* @__PURE__ */ b.jsx(TA.div, { role: "group", "aria-labelledby": s, ...o, ref: r }) });
  }
);
YU.displayName = fh;
var dh = "SelectLabel", Bh = m.forwardRef(
  (e, r) => {
    const { __scopeSelect: n, ...o } = e, s = JU(dh, n);
    return /* @__PURE__ */ b.jsx(TA.div, { id: s.id, ...o, ref: r });
  }
);
Bh.displayName = dh;
var Ys = "SelectItem", [ZU, gh] = Kn(Ys), ph = m.forwardRef(
  (e, r) => {
    const {
      __scopeSelect: n,
      value: o,
      disabled: s = !1,
      textValue: l,
      ...u
    } = e, f = dr(Ys, n), B = Br(Ys, n), g = f.value === o, [p, h] = m.useState(l ?? ""), [v, U] = m.useState(!1), Q = zA(
      r,
      (F) => B.itemRefCallback?.(F, o, s)
    ), C = En(), E = () => {
      s || (f.onValueChange(o), f.onOpenChange(!1));
    };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ b.jsx(
      ZU,
      {
        scope: n,
        value: o,
        disabled: s,
        textId: C,
        isSelected: g,
        onItemTextChange: m.useCallback((F) => {
          h((H) => H || (F?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ b.jsx(
          da.ItemSlot,
          {
            scope: n,
            value: o,
            disabled: s,
            textValue: p,
            children: /* @__PURE__ */ b.jsx(
              TA.div,
              {
                role: "option",
                "aria-labelledby": C,
                "data-highlighted": v ? "" : void 0,
                "aria-selected": g && v,
                "data-state": g ? "checked" : "unchecked",
                "aria-disabled": s || void 0,
                "data-disabled": s ? "" : void 0,
                tabIndex: s ? void 0 : -1,
                ...u,
                ref: Q,
                onFocus: _A(u.onFocus, () => U(!0)),
                onBlur: _A(u.onBlur, () => U(!1)),
                onPointerUp: _A(u.onPointerUp, E),
                onPointerMove: _A(u.onPointerMove, (F) => {
                  s ? B.onItemLeave?.() : F.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: _A(u.onPointerLeave, (F) => {
                  F.currentTarget === document.activeElement && B.onItemLeave?.();
                }),
                onKeyDown: _A(u.onKeyDown, (F) => {
                  B.searchRef?.current !== "" && F.key === " " || (RU.includes(F.key) && E(), F.key === " " && F.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
ph.displayName = Ys;
var So = "SelectItemText", wh = m.forwardRef(
  (e, r) => {
    const { __scopeSelect: n, className: o, style: s, ...l } = e, u = dr(So, n), f = Br(So, n), B = gh(So, n), g = PU(So, n), [p, h] = m.useState(null), v = zA(
      r,
      (F) => h(F),
      B.onItemTextChange,
      (F) => f.itemTextRefCallback?.(F, B.value, B.disabled)
    ), U = p?.textContent, Q = m.useMemo(
      () => /* @__PURE__ */ b.jsx("option", { value: B.value, disabled: B.disabled, children: U }, B.value),
      [B.disabled, B.value, U]
    ), { onNativeOptionAdd: C, onNativeOptionRemove: E } = g;
    return ve(() => (C(Q), () => E(Q)), [C, E, Q]), /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
      /* @__PURE__ */ b.jsx(TA.span, { id: B.textId, ...l, ref: v }),
      B.isSelected && u.valueNode && !u.valueNodeHasChildren ? Or.createPortal(l.children, u.valueNode) : null
    ] });
  }
);
wh.displayName = So;
var hh = "SelectItemIndicator", vh = m.forwardRef(
  (e, r) => {
    const { __scopeSelect: n, ...o } = e;
    return gh(hh, n).isSelected ? /* @__PURE__ */ b.jsx(TA.span, { "aria-hidden": !0, ...o, ref: r }) : null;
  }
);
vh.displayName = hh;
var cu = "SelectScrollUpButton", mh = m.forwardRef((e, r) => {
  const n = Br(cu, e.__scopeSelect), o = ef(cu, e.__scopeSelect), [s, l] = m.useState(!1), u = zA(r, o.onScrollButtonChange);
  return ve(() => {
    if (n.viewport && n.isPositioned) {
      let f = function() {
        const g = B.scrollTop > 0;
        l(g);
      };
      const B = n.viewport;
      return f(), B.addEventListener("scroll", f), () => B.removeEventListener("scroll", f);
    }
  }, [n.viewport, n.isPositioned]), s ? /* @__PURE__ */ b.jsx(
    Qh,
    {
      ...e,
      ref: u,
      onAutoScroll: () => {
        const { viewport: f, selectedItem: B } = n;
        f && B && (f.scrollTop = f.scrollTop - B.offsetHeight);
      }
    }
  ) : null;
});
mh.displayName = cu;
var uu = "SelectScrollDownButton", Ch = m.forwardRef((e, r) => {
  const n = Br(uu, e.__scopeSelect), o = ef(uu, e.__scopeSelect), [s, l] = m.useState(!1), u = zA(r, o.onScrollButtonChange);
  return ve(() => {
    if (n.viewport && n.isPositioned) {
      let f = function() {
        const g = B.scrollHeight - B.clientHeight, p = Math.ceil(B.scrollTop) < g;
        l(p);
      };
      const B = n.viewport;
      return f(), B.addEventListener("scroll", f), () => B.removeEventListener("scroll", f);
    }
  }, [n.viewport, n.isPositioned]), s ? /* @__PURE__ */ b.jsx(
    Qh,
    {
      ...e,
      ref: u,
      onAutoScroll: () => {
        const { viewport: f, selectedItem: B } = n;
        f && B && (f.scrollTop = f.scrollTop + B.offsetHeight);
      }
    }
  ) : null;
});
Ch.displayName = uu;
var Qh = m.forwardRef((e, r) => {
  const { __scopeSelect: n, onAutoScroll: o, ...s } = e, l = Br("SelectScrollButton", n), u = m.useRef(null), f = Ba(n), B = m.useCallback(() => {
    u.current !== null && (window.clearInterval(u.current), u.current = null);
  }, []);
  return m.useEffect(() => () => B(), [B]), ve(() => {
    f().find((p) => p.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [f]), /* @__PURE__ */ b.jsx(
    TA.div,
    {
      "aria-hidden": !0,
      ...s,
      ref: r,
      style: { flexShrink: 0, ...s.style },
      onPointerDown: _A(s.onPointerDown, () => {
        u.current === null && (u.current = window.setInterval(o, 50));
      }),
      onPointerMove: _A(s.onPointerMove, () => {
        l.onItemLeave?.(), u.current === null && (u.current = window.setInterval(o, 50));
      }),
      onPointerLeave: _A(s.onPointerLeave, () => {
        B();
      })
    }
  );
}), $U = "SelectSeparator", yh = m.forwardRef(
  (e, r) => {
    const { __scopeSelect: n, ...o } = e;
    return /* @__PURE__ */ b.jsx(TA.div, { "aria-hidden": !0, ...o, ref: r });
  }
);
yh.displayName = $U;
var fu = "SelectArrow", qU = m.forwardRef(
  (e, r) => {
    const { __scopeSelect: n, ...o } = e, s = ga(n), l = dr(fu, n), u = Br(fu, n);
    return l.open && u.position === "popper" ? /* @__PURE__ */ b.jsx(TU, { ...s, ...o, ref: r }) : null;
  }
);
qU.displayName = fu;
function Uh(e) {
  return e === "" || e === void 0;
}
var Fh = m.forwardRef(
  (e, r) => {
    const { value: n, ...o } = e, s = m.useRef(null), l = zA(r, s), u = DU(n);
    return m.useEffect(() => {
      const f = s.current, B = window.HTMLSelectElement.prototype, p = Object.getOwnPropertyDescriptor(
        B,
        "value"
      ).set;
      if (u !== n && p) {
        const h = new Event("change", { bubbles: !0 });
        p.call(f, n), f.dispatchEvent(h);
      }
    }, [u, n]), /* @__PURE__ */ b.jsx(qw, { asChild: !0, children: /* @__PURE__ */ b.jsx("select", { ...o, ref: l, defaultValue: n }) });
  }
);
Fh.displayName = "BubbleSelect";
function Eh(e) {
  const r = xt(e), n = m.useRef(""), o = m.useRef(0), s = m.useCallback(
    (u) => {
      const f = n.current + u;
      r(f), function B(g) {
        n.current = g, window.clearTimeout(o.current), g !== "" && (o.current = window.setTimeout(() => B(""), 1e3));
      }(f);
    },
    [r]
  ), l = m.useCallback(() => {
    n.current = "", window.clearTimeout(o.current);
  }, []);
  return m.useEffect(() => () => window.clearTimeout(o.current), []), [n, s, l];
}
function xh(e, r, n) {
  const s = r.length > 1 && Array.from(r).every((g) => g === r[0]) ? r[0] : r, l = n ? e.indexOf(n) : -1;
  let u = AF(e, Math.max(l, 0));
  s.length === 1 && (u = u.filter((g) => g !== n));
  const B = u.find(
    (g) => g.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return B !== n ? B : void 0;
}
function AF(e, r) {
  return e.map((n, o) => e[(r + o) % e.length]);
}
var eF = Ah, Ih = th, tF = nh, rF = oh, nF = ih, Hh = sh, oF = uh, Sh = Bh, bh = ph, iF = wh, sF = vh, Lh = mh, Th = Ch, Dh = yh;
const aF = eF, lF = tF, Kh = m.forwardRef(({ className: e, children: r, ...n }, o) => /* @__PURE__ */ b.jsxs(
  Ih,
  {
    ref: o,
    className: Ae(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      r,
      /* @__PURE__ */ b.jsx(rF, { asChild: !0, children: /* @__PURE__ */ b.jsx(oy, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Kh.displayName = Ih.displayName;
const kh = m.forwardRef(({ className: e, ...r }, n) => /* @__PURE__ */ b.jsx(
  Lh,
  {
    ref: n,
    className: Ae(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...r,
    children: /* @__PURE__ */ b.jsx(uy, {})
  }
));
kh.displayName = Lh.displayName;
const Rh = m.forwardRef(({ className: e, ...r }, n) => /* @__PURE__ */ b.jsx(
  Th,
  {
    ref: n,
    className: Ae(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...r,
    children: /* @__PURE__ */ b.jsx(ly, {})
  }
));
Rh.displayName = Th.displayName;
const Oh = m.forwardRef(({ className: e, children: r, position: n = "popper", ...o }, s) => /* @__PURE__ */ b.jsx(nF, { children: /* @__PURE__ */ b.jsxs(
  Hh,
  {
    ref: s,
    className: Ae(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...o,
    children: [
      /* @__PURE__ */ b.jsx(kh, {}),
      /* @__PURE__ */ b.jsx(
        oF,
        {
          className: Ae(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: r
        }
      ),
      /* @__PURE__ */ b.jsx(Rh, {})
    ]
  }
) }));
Oh.displayName = Hh.displayName;
const cF = m.forwardRef(({ className: e, ...r }, n) => /* @__PURE__ */ b.jsx(
  Sh,
  {
    ref: n,
    className: Ae("px-2 py-1.5 text-sm font-semibold", e),
    ...r
  }
));
cF.displayName = Sh.displayName;
const Nh = m.forwardRef(({ className: e, children: r, ...n }, o) => /* @__PURE__ */ b.jsxs(
  bh,
  {
    ref: o,
    className: Ae(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ b.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ b.jsx(sF, { children: /* @__PURE__ */ b.jsx(sy, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ b.jsx(iF, { children: r })
    ]
  }
));
Nh.displayName = bh.displayName;
const uF = m.forwardRef(({ className: e, ...r }, n) => /* @__PURE__ */ b.jsx(
  Dh,
  {
    ref: n,
    className: Ae("-mx-1 my-1 h-px bg-muted", e),
    ...r
  }
));
uF.displayName = Dh.displayName;
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fF = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Mh = (...e) => e.filter((r, n, o) => !!r && o.indexOf(r) === n).join(" ");
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var dF = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BF = m.forwardRef(
  ({
    color: e = "currentColor",
    size: r = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: l,
    iconNode: u,
    ...f
  }, B) => m.createElement(
    "svg",
    {
      ref: B,
      ...dF,
      width: r,
      height: r,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(r) : n,
      className: Mh("lucide", s),
      ...f
    },
    [
      ...u.map(([g, p]) => m.createElement(g, p)),
      ...Array.isArray(l) ? l : [l]
    ]
  )
);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tf = (e, r) => {
  const n = m.forwardRef(
    ({ className: o, ...s }, l) => m.createElement(BF, {
      ref: l,
      iconNode: r,
      className: Mh(`lucide-${fF(e)}`, o),
      ...s
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gF = tf("Camera", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pF = tf("Loader", [
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
  ["path", { d: "M18 12h4", key: "wj9ykh" }],
  ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
  ["path", { d: "M12 18v4", key: "jadmvz" }],
  ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
  ["path", { d: "M2 12h4", key: "j09sii" }],
  ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wF = tf("Star", [
  [
    "polygon",
    {
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6"
    }
  ]
]), hF = [
  { value: "feature", label: "Feature", color: "bg-yellow-300" },
  { value: "bug", label: "Bug", color: "bg-red-300" },
  { value: "question", label: "General Question", color: "bg-blue-400" },
  { value: "other", label: "Other", color: "bg-teal-300" }
], vF = ({
  projectId: e,
  setToast: r,
  setIsOpen: n,
  handleScreenshot: o,
  screenshot: s
}) => {
  const [l, u] = m.useState(""), [f, B] = m.useState(0), [g, p] = m.useState(""), [h, v] = m.useState(!1), [U, Q] = m.useState({}), C = () => {
    const F = {};
    return l || (F.feedbackType = "Please select a feedback type"), g.trim() || (F.feedback = "Please provide your feedback"), l === "feature" && f === 0 && (F.rating = "Please provide a rating"), Q(F), Object.keys(F).length === 0;
  }, E = async (F) => {
    if (F.preventDefault(), !!C()) {
      v(!0);
      try {
        const H = new FormData();
        if (H.append("projectId", e), H.append("type", l), l === "feature" && H.append("rating", f.toString()), H.append("feedback", g), s) {
          const R = await (await fetch(s)).blob();
          H.append("screenshot", R, "screenshot.png");
        }
        const k = await fetch(
          "https://sreenington-nextjs-test.loca.lt/api/submit-feedback",
          {
            method: "POST",
            body: H
          }
        );
        if (!k.ok) {
          const K = await k.json();
          throw new Error(K.error || "Failed to submit feedback");
        }
        r({
          message: "Feedback submitted successfully!",
          type: "success"
        }), u(""), B(0), p(""), n(!1);
      } catch (H) {
        console.error("Error submitting feedback:", H), r({ message: H.message, type: "error" });
      } finally {
        v(!1);
      }
    }
  };
  return /* @__PURE__ */ b.jsxs("form", { onSubmit: E, className: "mt-4 space-y-4", children: [
    /* @__PURE__ */ b.jsxs("div", { children: [
      /* @__PURE__ */ b.jsx(Os, { htmlFor: "feedbackType", className: "text-violet-700", children: "Feedback Type" }),
      /* @__PURE__ */ b.jsxs(
        aF,
        {
          value: l,
          onValueChange: (F) => u(F),
          children: [
            /* @__PURE__ */ b.jsx(
              Kh,
              {
                id: "feedbackType",
                className: "fbt-widget w-full border-violet-300 focus:ring-violet-500",
                children: /* @__PURE__ */ b.jsx(lF, { placeholder: "Select feedback type" })
              }
            ),
            /* @__PURE__ */ b.jsx(Oh, { className: "fbt-widget", children: hF.map((F) => /* @__PURE__ */ b.jsx(Nh, { value: F.value, children: /* @__PURE__ */ b.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ b.jsx(
                "span",
                {
                  className: `w-2 h-2 rounded-full mr-2 ${F.color}`
                }
              ),
              F.label
            ] }) }, F.value)) })
          ]
        }
      ),
      U.feedbackType && /* @__PURE__ */ b.jsx("p", { className: "text-red-500 text-sm mt-1", children: U.feedbackType })
    ] }),
    l === "feature" && /* @__PURE__ */ b.jsxs("div", { children: [
      /* @__PURE__ */ b.jsx(Os, { className: "text-violet-700", children: "Feature Rating" }),
      /* @__PURE__ */ b.jsx("div", { className: "flex items-center", children: [1, 2, 3, 4, 5].map((F) => /* @__PURE__ */ b.jsx(
        wF,
        {
          className: `h-6 w-6 cursor-pointer ${F <= f ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`,
          onClick: () => B(F)
        },
        F
      )) })
    ] }),
    l === "bug" && /* @__PURE__ */ b.jsxs("div", { children: [
      /* @__PURE__ */ b.jsxs(
        Gs,
        {
          type: "button",
          variant: "outline",
          onClick: o,
          className: "flex items-center border-violet-300 text-violet-700 hover:bg-violet-50",
          children: [
            /* @__PURE__ */ b.jsx(gF, { className: "mr-2 h-4 w-4" }),
            "Take Screenshot"
          ]
        }
      ),
      s && /* @__PURE__ */ b.jsx("div", { className: "mt-2", children: /* @__PURE__ */ b.jsx(
        "img",
        {
          src: s,
          alt: "Screenshot",
          className: "max-w-full h-auto"
        }
      ) })
    ] }),
    /* @__PURE__ */ b.jsxs("div", { children: [
      /* @__PURE__ */ b.jsx(Os, { htmlFor: "feedback", className: "text-violet-700", children: "Your Feedback" }),
      /* @__PURE__ */ b.jsx(
        Tw,
        {
          id: "feedback",
          value: g,
          onChange: (F) => p(F.target.value),
          placeholder: "Please provide your feedback here...",
          className: "w-full border-violet-300 focus:ring-violet-500",
          rows: 4
        }
      )
    ] }),
    /* @__PURE__ */ b.jsx(
      Gs,
      {
        type: "submit",
        className: "w-full bg-violet-500 text-white hover:bg-violet-600",
        disabled: h,
        children: h ? /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
          /* @__PURE__ */ b.jsx(pF, { className: "mr-2 h-4 w-4 animate-spin" }),
          "Submitting..."
        ] }) : "Submit Feedback"
      }
    )
  ] });
};
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
var du = function(e, r) {
  return du = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, o) {
    n.__proto__ = o;
  } || function(n, o) {
    for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
  }, du(e, r);
};
function tt(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  du(e, r);
  function n() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
}
var Bu = function() {
  return Bu = Object.assign || function(r) {
    for (var n, o = 1, s = arguments.length; o < s; o++) {
      n = arguments[o];
      for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (r[l] = n[l]);
    }
    return r;
  }, Bu.apply(this, arguments);
};
function he(e, r, n, o) {
  function s(l) {
    return l instanceof n ? l : new n(function(u) {
      u(l);
    });
  }
  return new (n || (n = Promise))(function(l, u) {
    function f(p) {
      try {
        g(o.next(p));
      } catch (h) {
        u(h);
      }
    }
    function B(p) {
      try {
        g(o.throw(p));
      } catch (h) {
        u(h);
      }
    }
    function g(p) {
      p.done ? l(p.value) : s(p.value).then(f, B);
    }
    g((o = o.apply(e, [])).next());
  });
}
function Be(e, r) {
  var n = { label: 0, sent: function() {
    if (l[0] & 1) throw l[1];
    return l[1];
  }, trys: [], ops: [] }, o, s, l, u;
  return u = { next: f(0), throw: f(1), return: f(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function f(g) {
    return function(p) {
      return B([g, p]);
    };
  }
  function B(g) {
    if (o) throw new TypeError("Generator is already executing.");
    for (; n; ) try {
      if (o = 1, s && (l = g[0] & 2 ? s.return : g[0] ? s.throw || ((l = s.return) && l.call(s), 0) : s.next) && !(l = l.call(s, g[1])).done) return l;
      switch (s = 0, l && (g = [g[0] & 2, l.value]), g[0]) {
        case 0:
        case 1:
          l = g;
          break;
        case 4:
          return n.label++, { value: g[1], done: !1 };
        case 5:
          n.label++, s = g[1], g = [0];
          continue;
        case 7:
          g = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (l = n.trys, !(l = l.length > 0 && l[l.length - 1]) && (g[0] === 6 || g[0] === 2)) {
            n = 0;
            continue;
          }
          if (g[0] === 3 && (!l || g[1] > l[0] && g[1] < l[3])) {
            n.label = g[1];
            break;
          }
          if (g[0] === 6 && n.label < l[1]) {
            n.label = l[1], l = g;
            break;
          }
          if (l && n.label < l[2]) {
            n.label = l[2], n.ops.push(g);
            break;
          }
          l[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      g = r.call(e, n);
    } catch (p) {
      g = [6, p], s = 0;
    } finally {
      o = l = 0;
    }
    if (g[0] & 5) throw g[1];
    return { value: g[0] ? g[1] : void 0, done: !0 };
  }
}
function ds(e, r, n) {
  if (arguments.length === 2) for (var o = 0, s = r.length, l; o < s; o++)
    (l || !(o in r)) && (l || (l = Array.prototype.slice.call(r, 0, o)), l[o] = r[o]);
  return e.concat(l || r);
}
var St = (
  /** @class */
  function() {
    function e(r, n, o, s) {
      this.left = r, this.top = n, this.width = o, this.height = s;
    }
    return e.prototype.add = function(r, n, o, s) {
      return new e(this.left + r, this.top + n, this.width + o, this.height + s);
    }, e.fromClientRect = function(r, n) {
      return new e(n.left + r.windowBounds.left, n.top + r.windowBounds.top, n.width, n.height);
    }, e.fromDOMRectList = function(r, n) {
      var o = Array.from(n).find(function(s) {
        return s.width !== 0;
      });
      return o ? new e(o.left + r.windowBounds.left, o.top + r.windowBounds.top, o.width, o.height) : e.EMPTY;
    }, e.EMPTY = new e(0, 0, 0, 0), e;
  }()
), pa = function(e, r) {
  return St.fromClientRect(e, r.getBoundingClientRect());
}, mF = function(e) {
  var r = e.body, n = e.documentElement;
  if (!r || !n)
    throw new Error("Unable to get document size");
  var o = Math.max(Math.max(r.scrollWidth, n.scrollWidth), Math.max(r.offsetWidth, n.offsetWidth), Math.max(r.clientWidth, n.clientWidth)), s = Math.max(Math.max(r.scrollHeight, n.scrollHeight), Math.max(r.offsetHeight, n.offsetHeight), Math.max(r.clientHeight, n.clientHeight));
  return new St(0, 0, o, s);
}, wa = function(e) {
  for (var r = [], n = 0, o = e.length; n < o; ) {
    var s = e.charCodeAt(n++);
    if (s >= 55296 && s <= 56319 && n < o) {
      var l = e.charCodeAt(n++);
      (l & 64512) === 56320 ? r.push(((s & 1023) << 10) + (l & 1023) + 65536) : (r.push(s), n--);
    } else
      r.push(s);
  }
  return r;
}, XA = function() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var n = e.length;
  if (!n)
    return "";
  for (var o = [], s = -1, l = ""; ++s < n; ) {
    var u = e[s];
    u <= 65535 ? o.push(u) : (u -= 65536, o.push((u >> 10) + 55296, u % 1024 + 56320)), (s + 1 === n || o.length > 16384) && (l += String.fromCharCode.apply(String, o), o.length = 0);
  }
  return l;
}, Dg = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", CF = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Bs = 0; Bs < Dg.length; Bs++)
  CF[Dg.charCodeAt(Bs)] = Bs;
var Kg = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bo = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var gs = 0; gs < Kg.length; gs++)
  bo[Kg.charCodeAt(gs)] = gs;
var QF = function(e) {
  var r = e.length * 0.75, n = e.length, o, s = 0, l, u, f, B;
  e[e.length - 1] === "=" && (r--, e[e.length - 2] === "=" && r--);
  var g = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(r) : new Array(r), p = Array.isArray(g) ? g : new Uint8Array(g);
  for (o = 0; o < n; o += 4)
    l = bo[e.charCodeAt(o)], u = bo[e.charCodeAt(o + 1)], f = bo[e.charCodeAt(o + 2)], B = bo[e.charCodeAt(o + 3)], p[s++] = l << 2 | u >> 4, p[s++] = (u & 15) << 4 | f >> 2, p[s++] = (f & 3) << 6 | B & 63;
  return g;
}, yF = function(e) {
  for (var r = e.length, n = [], o = 0; o < r; o += 2)
    n.push(e[o + 1] << 8 | e[o]);
  return n;
}, UF = function(e) {
  for (var r = e.length, n = [], o = 0; o < r; o += 4)
    n.push(e[o + 3] << 24 | e[o + 2] << 16 | e[o + 1] << 8 | e[o]);
  return n;
}, Lr = 5, rf = 11, Sc = 2, FF = rf - Lr, Ph = 65536 >> Lr, EF = 1 << Lr, bc = EF - 1, xF = 1024 >> Lr, IF = Ph + xF, HF = IF, SF = 32, bF = HF + SF, LF = 65536 >> rf, TF = 1 << FF, DF = TF - 1, kg = function(e, r, n) {
  return e.slice ? e.slice(r, n) : new Uint16Array(Array.prototype.slice.call(e, r, n));
}, KF = function(e, r, n) {
  return e.slice ? e.slice(r, n) : new Uint32Array(Array.prototype.slice.call(e, r, n));
}, kF = function(e, r) {
  var n = QF(e), o = Array.isArray(n) ? UF(n) : new Uint32Array(n), s = Array.isArray(n) ? yF(n) : new Uint16Array(n), l = 24, u = kg(s, l / 2, o[4] / 2), f = o[5] === 2 ? kg(s, (l + o[4]) / 2) : KF(o, Math.ceil((l + o[4]) / 4));
  return new RF(o[0], o[1], o[2], o[3], u, f);
}, RF = (
  /** @class */
  function() {
    function e(r, n, o, s, l, u) {
      this.initialValue = r, this.errorValue = n, this.highStart = o, this.highValueIndex = s, this.index = l, this.data = u;
    }
    return e.prototype.get = function(r) {
      var n;
      if (r >= 0) {
        if (r < 55296 || r > 56319 && r <= 65535)
          return n = this.index[r >> Lr], n = (n << Sc) + (r & bc), this.data[n];
        if (r <= 65535)
          return n = this.index[Ph + (r - 55296 >> Lr)], n = (n << Sc) + (r & bc), this.data[n];
        if (r < this.highStart)
          return n = bF - LF + (r >> rf), n = this.index[n], n += r >> Lr & DF, n = this.index[n], n = (n << Sc) + (r & bc), this.data[n];
        if (r <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), Rg = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", OF = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ps = 0; ps < Rg.length; ps++)
  OF[Rg.charCodeAt(ps)] = ps;
var NF = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Og = 50, MF = 1, _h = 2, Vh = 3, PF = 4, _F = 5, Ng = 7, Gh = 8, Mg = 9, rr = 10, gu = 11, Pg = 12, pu = 13, VF = 14, Lo = 15, wu = 16, ws = 17, Eo = 18, GF = 19, _g = 20, hu = 21, xo = 22, Lc = 23, pn = 24, be = 25, To = 26, Do = 27, wn = 28, WF = 29, Sr = 30, jF = 31, hs = 32, vs = 33, vu = 34, mu = 35, Cu = 36, Wo = 37, Qu = 38, Ms = 39, Ps = 40, Tc = 41, Wh = 42, XF = 43, zF = [9001, 65288], jh = "!", UA = "×", ms = "÷", yu = kF(NF), yt = [Sr, Cu], Uu = [MF, _h, Vh, _F], Xh = [rr, Gh], Vg = [Do, To], JF = Uu.concat(Xh), Gg = [Qu, Ms, Ps, vu, mu], YF = [Lo, pu], ZF = function(e, r) {
  r === void 0 && (r = "strict");
  var n = [], o = [], s = [];
  return e.forEach(function(l, u) {
    var f = yu.get(l);
    if (f > Og ? (s.push(!0), f -= Og) : s.push(!1), ["normal", "auto", "loose"].indexOf(r) !== -1 && [8208, 8211, 12316, 12448].indexOf(l) !== -1)
      return o.push(u), n.push(wu);
    if (f === PF || f === gu) {
      if (u === 0)
        return o.push(u), n.push(Sr);
      var B = n[u - 1];
      return JF.indexOf(B) === -1 ? (o.push(o[u - 1]), n.push(B)) : (o.push(u), n.push(Sr));
    }
    if (o.push(u), f === jF)
      return n.push(r === "strict" ? hu : Wo);
    if (f === Wh || f === WF)
      return n.push(Sr);
    if (f === XF)
      return l >= 131072 && l <= 196605 || l >= 196608 && l <= 262141 ? n.push(Wo) : n.push(Sr);
    n.push(f);
  }), [o, n, s];
}, Dc = function(e, r, n, o) {
  var s = o[n];
  if (Array.isArray(e) ? e.indexOf(s) !== -1 : e === s)
    for (var l = n; l <= o.length; ) {
      l++;
      var u = o[l];
      if (u === r)
        return !0;
      if (u !== rr)
        break;
    }
  if (s === rr)
    for (var l = n; l > 0; ) {
      l--;
      var f = o[l];
      if (Array.isArray(e) ? e.indexOf(f) !== -1 : e === f)
        for (var B = n; B <= o.length; ) {
          B++;
          var u = o[B];
          if (u === r)
            return !0;
          if (u !== rr)
            break;
        }
      if (f !== rr)
        break;
    }
  return !1;
}, Wg = function(e, r) {
  for (var n = e; n >= 0; ) {
    var o = r[n];
    if (o === rr)
      n--;
    else
      return o;
  }
  return 0;
}, $F = function(e, r, n, o, s) {
  if (n[o] === 0)
    return UA;
  var l = o - 1;
  if (Array.isArray(s) && s[l] === !0)
    return UA;
  var u = l - 1, f = l + 1, B = r[l], g = u >= 0 ? r[u] : 0, p = r[f];
  if (B === _h && p === Vh)
    return UA;
  if (Uu.indexOf(B) !== -1)
    return jh;
  if (Uu.indexOf(p) !== -1 || Xh.indexOf(p) !== -1)
    return UA;
  if (Wg(l, r) === Gh)
    return ms;
  if (yu.get(e[l]) === gu || (B === hs || B === vs) && yu.get(e[f]) === gu || B === Ng || p === Ng || B === Mg || [rr, pu, Lo].indexOf(B) === -1 && p === Mg || [ws, Eo, GF, pn, wn].indexOf(p) !== -1 || Wg(l, r) === xo || Dc(Lc, xo, l, r) || Dc([ws, Eo], hu, l, r) || Dc(Pg, Pg, l, r))
    return UA;
  if (B === rr)
    return ms;
  if (B === Lc || p === Lc)
    return UA;
  if (p === wu || B === wu)
    return ms;
  if ([pu, Lo, hu].indexOf(p) !== -1 || B === VF || g === Cu && YF.indexOf(B) !== -1 || B === wn && p === Cu || p === _g || yt.indexOf(p) !== -1 && B === be || yt.indexOf(B) !== -1 && p === be || B === Do && [Wo, hs, vs].indexOf(p) !== -1 || [Wo, hs, vs].indexOf(B) !== -1 && p === To || yt.indexOf(B) !== -1 && Vg.indexOf(p) !== -1 || Vg.indexOf(B) !== -1 && yt.indexOf(p) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [Do, To].indexOf(B) !== -1 && (p === be || [xo, Lo].indexOf(p) !== -1 && r[f + 1] === be) || // ( OP | HY ) × NU
  [xo, Lo].indexOf(B) !== -1 && p === be || // NU ×	(NU | SY | IS)
  B === be && [be, wn, pn].indexOf(p) !== -1)
    return UA;
  if ([be, wn, pn, ws, Eo].indexOf(p) !== -1)
    for (var h = l; h >= 0; ) {
      var v = r[h];
      if (v === be)
        return UA;
      if ([wn, pn].indexOf(v) !== -1)
        h--;
      else
        break;
    }
  if ([Do, To].indexOf(p) !== -1)
    for (var h = [ws, Eo].indexOf(B) !== -1 ? u : l; h >= 0; ) {
      var v = r[h];
      if (v === be)
        return UA;
      if ([wn, pn].indexOf(v) !== -1)
        h--;
      else
        break;
    }
  if (Qu === B && [Qu, Ms, vu, mu].indexOf(p) !== -1 || [Ms, vu].indexOf(B) !== -1 && [Ms, Ps].indexOf(p) !== -1 || [Ps, mu].indexOf(B) !== -1 && p === Ps || Gg.indexOf(B) !== -1 && [_g, To].indexOf(p) !== -1 || Gg.indexOf(p) !== -1 && B === Do || yt.indexOf(B) !== -1 && yt.indexOf(p) !== -1 || B === pn && yt.indexOf(p) !== -1 || yt.concat(be).indexOf(B) !== -1 && p === xo && zF.indexOf(e[f]) === -1 || yt.concat(be).indexOf(p) !== -1 && B === Eo)
    return UA;
  if (B === Tc && p === Tc) {
    for (var U = n[l], Q = 1; U > 0 && (U--, r[U] === Tc); )
      Q++;
    if (Q % 2 !== 0)
      return UA;
  }
  return B === hs && p === vs ? UA : ms;
}, qF = function(e, r) {
  r || (r = { lineBreak: "normal", wordBreak: "normal" });
  var n = ZF(e, r.lineBreak), o = n[0], s = n[1], l = n[2];
  (r.wordBreak === "break-all" || r.wordBreak === "break-word") && (s = s.map(function(f) {
    return [be, Sr, Wh].indexOf(f) !== -1 ? Wo : f;
  }));
  var u = r.wordBreak === "keep-all" ? l.map(function(f, B) {
    return f && e[B] >= 19968 && e[B] <= 40959;
  }) : void 0;
  return [o, s, u];
}, AE = (
  /** @class */
  function() {
    function e(r, n, o, s) {
      this.codePoints = r, this.required = n === jh, this.start = o, this.end = s;
    }
    return e.prototype.slice = function() {
      return XA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, e;
  }()
), eE = function(e, r) {
  var n = wa(e), o = qF(n, r), s = o[0], l = o[1], u = o[2], f = n.length, B = 0, g = 0;
  return {
    next: function() {
      if (g >= f)
        return { done: !0, value: null };
      for (var p = UA; g < f && (p = $F(n, l, s, ++g, u)) === UA; )
        ;
      if (p !== UA || g === f) {
        var h = new AE(n, p, B, g);
        return B = g, { value: h, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, tE = 1, rE = 2, Zo = 4, jg = 8, Zs = 10, Xg = 47, Oo = 92, nE = 9, oE = 32, Cs = 34, Io = 61, iE = 35, sE = 36, aE = 37, Qs = 39, ys = 40, Ho = 41, lE = 95, Ee = 45, cE = 33, uE = 60, fE = 62, dE = 64, BE = 91, gE = 93, pE = 61, wE = 123, Us = 63, hE = 125, zg = 124, vE = 126, mE = 128, Jg = 65533, Kc = 42, br = 43, CE = 44, QE = 58, yE = 59, jo = 46, UE = 0, FE = 8, EE = 11, xE = 14, IE = 31, HE = 127, at = -1, zh = 48, Jh = 97, Yh = 101, SE = 102, bE = 117, LE = 122, Zh = 65, $h = 69, qh = 70, TE = 85, DE = 90, ge = function(e) {
  return e >= zh && e <= 57;
}, KE = function(e) {
  return e >= 55296 && e <= 57343;
}, hn = function(e) {
  return ge(e) || e >= Zh && e <= qh || e >= Jh && e <= SE;
}, kE = function(e) {
  return e >= Jh && e <= LE;
}, RE = function(e) {
  return e >= Zh && e <= DE;
}, OE = function(e) {
  return kE(e) || RE(e);
}, NE = function(e) {
  return e >= mE;
}, Fs = function(e) {
  return e === Zs || e === nE || e === oE;
}, $s = function(e) {
  return OE(e) || NE(e) || e === lE;
}, Yg = function(e) {
  return $s(e) || ge(e) || e === Ee;
}, ME = function(e) {
  return e >= UE && e <= FE || e === EE || e >= xE && e <= IE || e === HE;
}, tr = function(e, r) {
  return e !== Oo ? !1 : r !== Zs;
}, Es = function(e, r, n) {
  return e === Ee ? $s(r) || tr(r, n) : $s(e) ? !0 : !!(e === Oo && tr(e, r));
}, kc = function(e, r, n) {
  return e === br || e === Ee ? ge(r) ? !0 : r === jo && ge(n) : ge(e === jo ? r : e);
}, PE = function(e) {
  var r = 0, n = 1;
  (e[r] === br || e[r] === Ee) && (e[r] === Ee && (n = -1), r++);
  for (var o = []; ge(e[r]); )
    o.push(e[r++]);
  var s = o.length ? parseInt(XA.apply(void 0, o), 10) : 0;
  e[r] === jo && r++;
  for (var l = []; ge(e[r]); )
    l.push(e[r++]);
  var u = l.length, f = u ? parseInt(XA.apply(void 0, l), 10) : 0;
  (e[r] === $h || e[r] === Yh) && r++;
  var B = 1;
  (e[r] === br || e[r] === Ee) && (e[r] === Ee && (B = -1), r++);
  for (var g = []; ge(e[r]); )
    g.push(e[r++]);
  var p = g.length ? parseInt(XA.apply(void 0, g), 10) : 0;
  return n * (s + f * Math.pow(10, -u)) * Math.pow(10, B * p);
}, _E = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, VE = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, GE = {
  type: 4
  /* COMMA_TOKEN */
}, WE = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, jE = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, XE = {
  type: 21
  /* COLUMN_TOKEN */
}, zE = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, JE = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, YE = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, ZE = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, $E = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, xs = {
  type: 23
  /* BAD_URL_TOKEN */
}, qE = {
  type: 1
  /* BAD_STRING_TOKEN */
}, A1 = {
  type: 25
  /* CDO_TOKEN */
}, e1 = {
  type: 24
  /* CDC_TOKEN */
}, t1 = {
  type: 26
  /* COLON_TOKEN */
}, r1 = {
  type: 27
  /* SEMICOLON_TOKEN */
}, n1 = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, o1 = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, i1 = {
  type: 31
  /* WHITESPACE_TOKEN */
}, Fu = {
  type: 32
  /* EOF_TOKEN */
}, A0 = (
  /** @class */
  function() {
    function e() {
      this._value = [];
    }
    return e.prototype.write = function(r) {
      this._value = this._value.concat(wa(r));
    }, e.prototype.read = function() {
      for (var r = [], n = this.consumeToken(); n !== Fu; )
        r.push(n), n = this.consumeToken();
      return r;
    }, e.prototype.consumeToken = function() {
      var r = this.consumeCodePoint();
      switch (r) {
        case Cs:
          return this.consumeStringToken(Cs);
        case iE:
          var n = this.peekCodePoint(0), o = this.peekCodePoint(1), s = this.peekCodePoint(2);
          if (Yg(n) || tr(o, s)) {
            var l = Es(n, o, s) ? rE : tE, u = this.consumeName();
            return { type: 5, value: u, flags: l };
          }
          break;
        case sE:
          if (this.peekCodePoint(0) === Io)
            return this.consumeCodePoint(), WE;
          break;
        case Qs:
          return this.consumeStringToken(Qs);
        case ys:
          return _E;
        case Ho:
          return VE;
        case Kc:
          if (this.peekCodePoint(0) === Io)
            return this.consumeCodePoint(), $E;
          break;
        case br:
          if (kc(r, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(r), this.consumeNumericToken();
          break;
        case CE:
          return GE;
        case Ee:
          var f = r, B = this.peekCodePoint(0), g = this.peekCodePoint(1);
          if (kc(f, B, g))
            return this.reconsumeCodePoint(r), this.consumeNumericToken();
          if (Es(f, B, g))
            return this.reconsumeCodePoint(r), this.consumeIdentLikeToken();
          if (B === Ee && g === fE)
            return this.consumeCodePoint(), this.consumeCodePoint(), e1;
          break;
        case jo:
          if (kc(r, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(r), this.consumeNumericToken();
          break;
        case Xg:
          if (this.peekCodePoint(0) === Kc)
            for (this.consumeCodePoint(); ; ) {
              var p = this.consumeCodePoint();
              if (p === Kc && (p = this.consumeCodePoint(), p === Xg))
                return this.consumeToken();
              if (p === at)
                return this.consumeToken();
            }
          break;
        case QE:
          return t1;
        case yE:
          return r1;
        case uE:
          if (this.peekCodePoint(0) === cE && this.peekCodePoint(1) === Ee && this.peekCodePoint(2) === Ee)
            return this.consumeCodePoint(), this.consumeCodePoint(), A1;
          break;
        case dE:
          var h = this.peekCodePoint(0), v = this.peekCodePoint(1), U = this.peekCodePoint(2);
          if (Es(h, v, U)) {
            var u = this.consumeName();
            return { type: 7, value: u };
          }
          break;
        case BE:
          return n1;
        case Oo:
          if (tr(r, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(r), this.consumeIdentLikeToken();
          break;
        case gE:
          return o1;
        case pE:
          if (this.peekCodePoint(0) === Io)
            return this.consumeCodePoint(), jE;
          break;
        case wE:
          return YE;
        case hE:
          return ZE;
        case bE:
        case TE:
          var Q = this.peekCodePoint(0), C = this.peekCodePoint(1);
          return Q === br && (hn(C) || C === Us) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(r), this.consumeIdentLikeToken();
        case zg:
          if (this.peekCodePoint(0) === Io)
            return this.consumeCodePoint(), zE;
          if (this.peekCodePoint(0) === zg)
            return this.consumeCodePoint(), XE;
          break;
        case vE:
          if (this.peekCodePoint(0) === Io)
            return this.consumeCodePoint(), JE;
          break;
        case at:
          return Fu;
      }
      return Fs(r) ? (this.consumeWhiteSpace(), i1) : ge(r) ? (this.reconsumeCodePoint(r), this.consumeNumericToken()) : $s(r) ? (this.reconsumeCodePoint(r), this.consumeIdentLikeToken()) : { type: 6, value: XA(r) };
    }, e.prototype.consumeCodePoint = function() {
      var r = this._value.shift();
      return typeof r > "u" ? -1 : r;
    }, e.prototype.reconsumeCodePoint = function(r) {
      this._value.unshift(r);
    }, e.prototype.peekCodePoint = function(r) {
      return r >= this._value.length ? -1 : this._value[r];
    }, e.prototype.consumeUnicodeRangeToken = function() {
      for (var r = [], n = this.consumeCodePoint(); hn(n) && r.length < 6; )
        r.push(n), n = this.consumeCodePoint();
      for (var o = !1; n === Us && r.length < 6; )
        r.push(n), n = this.consumeCodePoint(), o = !0;
      if (o) {
        var s = parseInt(XA.apply(void 0, r.map(function(B) {
          return B === Us ? zh : B;
        })), 16), l = parseInt(XA.apply(void 0, r.map(function(B) {
          return B === Us ? qh : B;
        })), 16);
        return { type: 30, start: s, end: l };
      }
      var u = parseInt(XA.apply(void 0, r), 16);
      if (this.peekCodePoint(0) === Ee && hn(this.peekCodePoint(1))) {
        this.consumeCodePoint(), n = this.consumeCodePoint();
        for (var f = []; hn(n) && f.length < 6; )
          f.push(n), n = this.consumeCodePoint();
        var l = parseInt(XA.apply(void 0, f), 16);
        return { type: 30, start: u, end: l };
      } else
        return { type: 30, start: u, end: u };
    }, e.prototype.consumeIdentLikeToken = function() {
      var r = this.consumeName();
      return r.toLowerCase() === "url" && this.peekCodePoint(0) === ys ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === ys ? (this.consumeCodePoint(), { type: 19, value: r }) : { type: 20, value: r };
    }, e.prototype.consumeUrlToken = function() {
      var r = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === at)
        return { type: 22, value: "" };
      var n = this.peekCodePoint(0);
      if (n === Qs || n === Cs) {
        var o = this.consumeStringToken(this.consumeCodePoint());
        return o.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === at || this.peekCodePoint(0) === Ho) ? (this.consumeCodePoint(), { type: 22, value: o.value }) : (this.consumeBadUrlRemnants(), xs);
      }
      for (; ; ) {
        var s = this.consumeCodePoint();
        if (s === at || s === Ho)
          return { type: 22, value: XA.apply(void 0, r) };
        if (Fs(s))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === at || this.peekCodePoint(0) === Ho ? (this.consumeCodePoint(), { type: 22, value: XA.apply(void 0, r) }) : (this.consumeBadUrlRemnants(), xs);
        if (s === Cs || s === Qs || s === ys || ME(s))
          return this.consumeBadUrlRemnants(), xs;
        if (s === Oo)
          if (tr(s, this.peekCodePoint(0)))
            r.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), xs;
        else
          r.push(s);
      }
    }, e.prototype.consumeWhiteSpace = function() {
      for (; Fs(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, e.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var r = this.consumeCodePoint();
        if (r === Ho || r === at)
          return;
        tr(r, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, e.prototype.consumeStringSlice = function(r) {
      for (var n = 5e4, o = ""; r > 0; ) {
        var s = Math.min(n, r);
        o += XA.apply(void 0, this._value.splice(0, s)), r -= s;
      }
      return this._value.shift(), o;
    }, e.prototype.consumeStringToken = function(r) {
      var n = "", o = 0;
      do {
        var s = this._value[o];
        if (s === at || s === void 0 || s === r)
          return n += this.consumeStringSlice(o), { type: 0, value: n };
        if (s === Zs)
          return this._value.splice(0, o), qE;
        if (s === Oo) {
          var l = this._value[o + 1];
          l !== at && l !== void 0 && (l === Zs ? (n += this.consumeStringSlice(o), o = -1, this._value.shift()) : tr(s, l) && (n += this.consumeStringSlice(o), n += XA(this.consumeEscapedCodePoint()), o = -1));
        }
        o++;
      } while (!0);
    }, e.prototype.consumeNumber = function() {
      var r = [], n = Zo, o = this.peekCodePoint(0);
      for ((o === br || o === Ee) && r.push(this.consumeCodePoint()); ge(this.peekCodePoint(0)); )
        r.push(this.consumeCodePoint());
      o = this.peekCodePoint(0);
      var s = this.peekCodePoint(1);
      if (o === jo && ge(s))
        for (r.push(this.consumeCodePoint(), this.consumeCodePoint()), n = jg; ge(this.peekCodePoint(0)); )
          r.push(this.consumeCodePoint());
      o = this.peekCodePoint(0), s = this.peekCodePoint(1);
      var l = this.peekCodePoint(2);
      if ((o === $h || o === Yh) && ((s === br || s === Ee) && ge(l) || ge(s)))
        for (r.push(this.consumeCodePoint(), this.consumeCodePoint()), n = jg; ge(this.peekCodePoint(0)); )
          r.push(this.consumeCodePoint());
      return [PE(r), n];
    }, e.prototype.consumeNumericToken = function() {
      var r = this.consumeNumber(), n = r[0], o = r[1], s = this.peekCodePoint(0), l = this.peekCodePoint(1), u = this.peekCodePoint(2);
      if (Es(s, l, u)) {
        var f = this.consumeName();
        return { type: 15, number: n, flags: o, unit: f };
      }
      return s === aE ? (this.consumeCodePoint(), { type: 16, number: n, flags: o }) : { type: 17, number: n, flags: o };
    }, e.prototype.consumeEscapedCodePoint = function() {
      var r = this.consumeCodePoint();
      if (hn(r)) {
        for (var n = XA(r); hn(this.peekCodePoint(0)) && n.length < 6; )
          n += XA(this.consumeCodePoint());
        Fs(this.peekCodePoint(0)) && this.consumeCodePoint();
        var o = parseInt(n, 16);
        return o === 0 || KE(o) || o > 1114111 ? Jg : o;
      }
      return r === at ? Jg : r;
    }, e.prototype.consumeName = function() {
      for (var r = ""; ; ) {
        var n = this.consumeCodePoint();
        if (Yg(n))
          r += XA(n);
        else if (tr(n, this.peekCodePoint(0)))
          r += XA(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(n), r;
      }
    }, e;
  }()
), e0 = (
  /** @class */
  function() {
    function e(r) {
      this._tokens = r;
    }
    return e.create = function(r) {
      var n = new A0();
      return n.write(r), new e(n.read());
    }, e.parseValue = function(r) {
      return e.create(r).parseComponentValue();
    }, e.parseValues = function(r) {
      return e.create(r).parseComponentValues();
    }, e.prototype.parseComponentValue = function() {
      for (var r = this.consumeToken(); r.type === 31; )
        r = this.consumeToken();
      if (r.type === 32)
        throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      this.reconsumeToken(r);
      var n = this.consumeComponentValue();
      do
        r = this.consumeToken();
      while (r.type === 31);
      if (r.type === 32)
        return n;
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    }, e.prototype.parseComponentValues = function() {
      for (var r = []; ; ) {
        var n = this.consumeComponentValue();
        if (n.type === 32)
          return r;
        r.push(n), r.push();
      }
    }, e.prototype.consumeComponentValue = function() {
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
    }, e.prototype.consumeSimpleBlock = function(r) {
      for (var n = { type: r, values: [] }, o = this.consumeToken(); ; ) {
        if (o.type === 32 || a1(o, r))
          return n;
        this.reconsumeToken(o), n.values.push(this.consumeComponentValue()), o = this.consumeToken();
      }
    }, e.prototype.consumeFunction = function(r) {
      for (var n = {
        name: r.value,
        values: [],
        type: 18
        /* FUNCTION */
      }; ; ) {
        var o = this.consumeToken();
        if (o.type === 32 || o.type === 3)
          return n;
        this.reconsumeToken(o), n.values.push(this.consumeComponentValue());
      }
    }, e.prototype.consumeToken = function() {
      var r = this._tokens.shift();
      return typeof r > "u" ? Fu : r;
    }, e.prototype.reconsumeToken = function(r) {
      this._tokens.unshift(r);
    }, e;
  }()
), $o = function(e) {
  return e.type === 15;
}, kn = function(e) {
  return e.type === 17;
}, SA = function(e) {
  return e.type === 20;
}, s1 = function(e) {
  return e.type === 0;
}, Eu = function(e, r) {
  return SA(e) && e.value === r;
}, t0 = function(e) {
  return e.type !== 31;
}, bn = function(e) {
  return e.type !== 31 && e.type !== 4;
}, ft = function(e) {
  var r = [], n = [];
  return e.forEach(function(o) {
    if (o.type === 4) {
      if (n.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      r.push(n), n = [];
      return;
    }
    o.type !== 31 && n.push(o);
  }), n.length && r.push(n), r;
}, a1 = function(e, r) {
  return r === 11 && e.type === 12 || r === 28 && e.type === 29 ? !0 : r === 2 && e.type === 3;
}, fr = function(e) {
  return e.type === 17 || e.type === 15;
}, YA = function(e) {
  return e.type === 16 || fr(e);
}, r0 = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, le = {
  type: 17,
  number: 0,
  flags: Zo
}, nf = {
  type: 16,
  number: 50,
  flags: Zo
}, nr = {
  type: 16,
  number: 100,
  flags: Zo
}, Ko = function(e, r, n) {
  var o = e[0], s = e[1];
  return [LA(o, r), LA(typeof s < "u" ? s : o, n)];
}, LA = function(e, r) {
  if (e.type === 16)
    return e.number / 100 * r;
  if ($o(e))
    switch (e.unit) {
      case "rem":
      case "em":
        return 16 * e.number;
      case "px":
      default:
        return e.number;
    }
  return e.number;
}, n0 = "deg", o0 = "grad", i0 = "rad", s0 = "turn", ha = {
  name: "angle",
  parse: function(e, r) {
    if (r.type === 15)
      switch (r.unit) {
        case n0:
          return Math.PI * r.number / 180;
        case o0:
          return Math.PI / 200 * r.number;
        case i0:
          return r.number;
        case s0:
          return Math.PI * 2 * r.number;
      }
    throw new Error("Unsupported angle type");
  }
}, a0 = function(e) {
  return e.type === 15 && (e.unit === n0 || e.unit === o0 || e.unit === i0 || e.unit === s0);
}, l0 = function(e) {
  var r = e.filter(SA).map(function(n) {
    return n.value;
  }).join(" ");
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
      return [le, nr];
    case "to right":
    case "left":
      return _e(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [nr, nr];
    case "to bottom":
    case "top":
      return _e(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [nr, le];
    case "to left":
    case "right":
      return _e(270);
  }
  return 0;
}, _e = function(e) {
  return Math.PI * e / 180;
}, ir = {
  name: "color",
  parse: function(e, r) {
    if (r.type === 18) {
      var n = l1[r.name];
      if (typeof n > "u")
        throw new Error('Attempting to parse an unsupported color function "' + r.name + '"');
      return n(e, r.values);
    }
    if (r.type === 5) {
      if (r.value.length === 3) {
        var o = r.value.substring(0, 1), s = r.value.substring(1, 2), l = r.value.substring(2, 3);
        return or(parseInt(o + o, 16), parseInt(s + s, 16), parseInt(l + l, 16), 1);
      }
      if (r.value.length === 4) {
        var o = r.value.substring(0, 1), s = r.value.substring(1, 2), l = r.value.substring(2, 3), u = r.value.substring(3, 4);
        return or(parseInt(o + o, 16), parseInt(s + s, 16), parseInt(l + l, 16), parseInt(u + u, 16) / 255);
      }
      if (r.value.length === 6) {
        var o = r.value.substring(0, 2), s = r.value.substring(2, 4), l = r.value.substring(4, 6);
        return or(parseInt(o, 16), parseInt(s, 16), parseInt(l, 16), 1);
      }
      if (r.value.length === 8) {
        var o = r.value.substring(0, 2), s = r.value.substring(2, 4), l = r.value.substring(4, 6), u = r.value.substring(6, 8);
        return or(parseInt(o, 16), parseInt(s, 16), parseInt(l, 16), parseInt(u, 16) / 255);
      }
    }
    if (r.type === 20) {
      var f = Et[r.value.toUpperCase()];
      if (typeof f < "u")
        return f;
    }
    return Et.TRANSPARENT;
  }
}, sr = function(e) {
  return (255 & e) === 0;
}, ne = function(e) {
  var r = 255 & e, n = 255 & e >> 8, o = 255 & e >> 16, s = 255 & e >> 24;
  return r < 255 ? "rgba(" + s + "," + o + "," + n + "," + r / 255 + ")" : "rgb(" + s + "," + o + "," + n + ")";
}, or = function(e, r, n, o) {
  return (e << 24 | r << 16 | n << 8 | Math.round(o * 255) << 0) >>> 0;
}, Zg = function(e, r) {
  if (e.type === 17)
    return e.number;
  if (e.type === 16) {
    var n = r === 3 ? 1 : 255;
    return r === 3 ? e.number / 100 * n : Math.round(e.number / 100 * n);
  }
  return 0;
}, $g = function(e, r) {
  var n = r.filter(bn);
  if (n.length === 3) {
    var o = n.map(Zg), s = o[0], l = o[1], u = o[2];
    return or(s, l, u, 1);
  }
  if (n.length === 4) {
    var f = n.map(Zg), s = f[0], l = f[1], u = f[2], B = f[3];
    return or(s, l, u, B);
  }
  return 0;
};
function Rc(e, r, n) {
  return n < 0 && (n += 1), n >= 1 && (n -= 1), n < 1 / 6 ? (r - e) * n * 6 + e : n < 1 / 2 ? r : n < 2 / 3 ? (r - e) * 6 * (2 / 3 - n) + e : e;
}
var qg = function(e, r) {
  var n = r.filter(bn), o = n[0], s = n[1], l = n[2], u = n[3], f = (o.type === 17 ? _e(o.number) : ha.parse(e, o)) / (Math.PI * 2), B = YA(s) ? s.number / 100 : 0, g = YA(l) ? l.number / 100 : 0, p = typeof u < "u" && YA(u) ? LA(u, 1) : 1;
  if (B === 0)
    return or(g * 255, g * 255, g * 255, 1);
  var h = g <= 0.5 ? g * (B + 1) : g + B - g * B, v = g * 2 - h, U = Rc(v, h, f + 1 / 3), Q = Rc(v, h, f), C = Rc(v, h, f - 1 / 3);
  return or(U * 255, Q * 255, C * 255, p);
}, l1 = {
  hsl: qg,
  hsla: qg,
  rgb: $g,
  rgba: $g
}, No = function(e, r) {
  return ir.parse(e, e0.create(r).parseComponentValue());
}, Et = {
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
  YELLOWGREEN: 2597139199
}, c1 = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, r) {
    return r.map(function(n) {
      if (SA(n))
        switch (n.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, u1 = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, va = function(e, r) {
  var n = ir.parse(e, r[0]), o = r[1];
  return o && YA(o) ? { color: n, stop: o } : { color: n, stop: null };
}, Ap = function(e, r) {
  var n = e[0], o = e[e.length - 1];
  n.stop === null && (n.stop = le), o.stop === null && (o.stop = nr);
  for (var s = [], l = 0, u = 0; u < e.length; u++) {
    var f = e[u].stop;
    if (f !== null) {
      var B = LA(f, r);
      B > l ? s.push(B) : s.push(l), l = B;
    } else
      s.push(null);
  }
  for (var g = null, u = 0; u < s.length; u++) {
    var p = s[u];
    if (p === null)
      g === null && (g = u);
    else if (g !== null) {
      for (var h = u - g, v = s[g - 1], U = (p - v) / (h + 1), Q = 1; Q <= h; Q++)
        s[g + Q - 1] = U * Q;
      g = null;
    }
  }
  return e.map(function(C, E) {
    var F = C.color;
    return { color: F, stop: Math.max(Math.min(1, s[E] / r), 0) };
  });
}, f1 = function(e, r, n) {
  var o = r / 2, s = n / 2, l = LA(e[0], r) - o, u = s - LA(e[1], n);
  return (Math.atan2(u, l) + Math.PI * 2) % (Math.PI * 2);
}, d1 = function(e, r, n) {
  var o = typeof e == "number" ? e : f1(e, r, n), s = Math.abs(r * Math.sin(o)) + Math.abs(n * Math.cos(o)), l = r / 2, u = n / 2, f = s / 2, B = Math.sin(o - Math.PI / 2) * f, g = Math.cos(o - Math.PI / 2) * f;
  return [s, l - g, l + g, u - B, u + B];
}, $e = function(e, r) {
  return Math.sqrt(e * e + r * r);
}, ep = function(e, r, n, o, s) {
  var l = [
    [0, 0],
    [0, r],
    [e, 0],
    [e, r]
  ];
  return l.reduce(function(u, f) {
    var B = f[0], g = f[1], p = $e(n - B, o - g);
    return (s ? p < u.optimumDistance : p > u.optimumDistance) ? {
      optimumCorner: f,
      optimumDistance: p
    } : u;
  }, {
    optimumDistance: s ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, B1 = function(e, r, n, o, s) {
  var l = 0, u = 0;
  switch (e.size) {
    case 0:
      e.shape === 0 ? l = u = Math.min(Math.abs(r), Math.abs(r - o), Math.abs(n), Math.abs(n - s)) : e.shape === 1 && (l = Math.min(Math.abs(r), Math.abs(r - o)), u = Math.min(Math.abs(n), Math.abs(n - s)));
      break;
    case 2:
      if (e.shape === 0)
        l = u = Math.min($e(r, n), $e(r, n - s), $e(r - o, n), $e(r - o, n - s));
      else if (e.shape === 1) {
        var f = Math.min(Math.abs(n), Math.abs(n - s)) / Math.min(Math.abs(r), Math.abs(r - o)), B = ep(o, s, r, n, !0), g = B[0], p = B[1];
        l = $e(g - r, (p - n) / f), u = f * l;
      }
      break;
    case 1:
      e.shape === 0 ? l = u = Math.max(Math.abs(r), Math.abs(r - o), Math.abs(n), Math.abs(n - s)) : e.shape === 1 && (l = Math.max(Math.abs(r), Math.abs(r - o)), u = Math.max(Math.abs(n), Math.abs(n - s)));
      break;
    case 3:
      if (e.shape === 0)
        l = u = Math.max($e(r, n), $e(r, n - s), $e(r - o, n), $e(r - o, n - s));
      else if (e.shape === 1) {
        var f = Math.max(Math.abs(n), Math.abs(n - s)) / Math.max(Math.abs(r), Math.abs(r - o)), h = ep(o, s, r, n, !1), g = h[0], p = h[1];
        l = $e(g - r, (p - n) / f), u = f * l;
      }
      break;
  }
  return Array.isArray(e.size) && (l = LA(e.size[0], o), u = e.size.length === 2 ? LA(e.size[1], s) : l), [l, u];
}, g1 = function(e, r) {
  var n = _e(180), o = [];
  return ft(r).forEach(function(s, l) {
    if (l === 0) {
      var u = s[0];
      if (u.type === 20 && u.value === "to") {
        n = l0(s);
        return;
      } else if (a0(u)) {
        n = ha.parse(e, u);
        return;
      }
    }
    var f = va(e, s);
    o.push(f);
  }), {
    angle: n,
    stops: o,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Is = function(e, r) {
  var n = _e(180), o = [];
  return ft(r).forEach(function(s, l) {
    if (l === 0) {
      var u = s[0];
      if (u.type === 20 && ["top", "left", "right", "bottom"].indexOf(u.value) !== -1) {
        n = l0(s);
        return;
      } else if (a0(u)) {
        n = (ha.parse(e, u) + _e(270)) % _e(360);
        return;
      }
    }
    var f = va(e, s);
    o.push(f);
  }), {
    angle: n,
    stops: o,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, p1 = function(e, r) {
  var n = _e(180), o = [], s = 1, l = 0, u = 3, f = [];
  return ft(r).forEach(function(B, g) {
    var p = B[0];
    if (g === 0) {
      if (SA(p) && p.value === "linear") {
        s = 1;
        return;
      } else if (SA(p) && p.value === "radial") {
        s = 2;
        return;
      }
    }
    if (p.type === 18) {
      if (p.name === "from") {
        var h = ir.parse(e, p.values[0]);
        o.push({ stop: le, color: h });
      } else if (p.name === "to") {
        var h = ir.parse(e, p.values[0]);
        o.push({ stop: nr, color: h });
      } else if (p.name === "color-stop") {
        var v = p.values.filter(bn);
        if (v.length === 2) {
          var h = ir.parse(e, v[1]), U = v[0];
          kn(U) && o.push({
            stop: { type: 16, number: U.number * 100, flags: U.flags },
            color: h
          });
        }
      }
    }
  }), s === 1 ? {
    angle: (n + _e(180)) % _e(360),
    stops: o,
    type: s
  } : { size: u, shape: l, stops: o, position: f, type: s };
}, c0 = "closest-side", u0 = "farthest-side", f0 = "closest-corner", d0 = "farthest-corner", B0 = "circle", g0 = "ellipse", p0 = "cover", w0 = "contain", w1 = function(e, r) {
  var n = 0, o = 3, s = [], l = [];
  return ft(r).forEach(function(u, f) {
    var B = !0;
    if (f === 0) {
      var g = !1;
      B = u.reduce(function(h, v) {
        if (g)
          if (SA(v))
            switch (v.value) {
              case "center":
                return l.push(nf), h;
              case "top":
              case "left":
                return l.push(le), h;
              case "right":
              case "bottom":
                return l.push(nr), h;
            }
          else (YA(v) || fr(v)) && l.push(v);
        else if (SA(v))
          switch (v.value) {
            case B0:
              return n = 0, !1;
            case g0:
              return n = 1, !1;
            case "at":
              return g = !0, !1;
            case c0:
              return o = 0, !1;
            case p0:
            case u0:
              return o = 1, !1;
            case w0:
            case f0:
              return o = 2, !1;
            case d0:
              return o = 3, !1;
          }
        else if (fr(v) || YA(v))
          return Array.isArray(o) || (o = []), o.push(v), !1;
        return h;
      }, B);
    }
    if (B) {
      var p = va(e, u);
      s.push(p);
    }
  }), {
    size: o,
    shape: n,
    stops: s,
    position: l,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, Hs = function(e, r) {
  var n = 0, o = 3, s = [], l = [];
  return ft(r).forEach(function(u, f) {
    var B = !0;
    if (f === 0 ? B = u.reduce(function(p, h) {
      if (SA(h))
        switch (h.value) {
          case "center":
            return l.push(nf), !1;
          case "top":
          case "left":
            return l.push(le), !1;
          case "right":
          case "bottom":
            return l.push(nr), !1;
        }
      else if (YA(h) || fr(h))
        return l.push(h), !1;
      return p;
    }, B) : f === 1 && (B = u.reduce(function(p, h) {
      if (SA(h))
        switch (h.value) {
          case B0:
            return n = 0, !1;
          case g0:
            return n = 1, !1;
          case w0:
          case c0:
            return o = 0, !1;
          case u0:
            return o = 1, !1;
          case f0:
            return o = 2, !1;
          case p0:
          case d0:
            return o = 3, !1;
        }
      else if (fr(h) || YA(h))
        return Array.isArray(o) || (o = []), o.push(h), !1;
      return p;
    }, B)), B) {
      var g = va(e, u);
      s.push(g);
    }
  }), {
    size: o,
    shape: n,
    stops: s,
    position: l,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, h1 = function(e) {
  return e.type === 1;
}, v1 = function(e) {
  return e.type === 2;
}, of = {
  name: "image",
  parse: function(e, r) {
    if (r.type === 22) {
      var n = {
        url: r.value,
        type: 0
        /* URL */
      };
      return e.cache.addImage(r.value), n;
    }
    if (r.type === 18) {
      var o = h0[r.name];
      if (typeof o > "u")
        throw new Error('Attempting to parse an unsupported image function "' + r.name + '"');
      return o(e, r.values);
    }
    throw new Error("Unsupported image type " + r.type);
  }
};
function m1(e) {
  return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!h0[e.name]);
}
var h0 = {
  "linear-gradient": g1,
  "-moz-linear-gradient": Is,
  "-ms-linear-gradient": Is,
  "-o-linear-gradient": Is,
  "-webkit-linear-gradient": Is,
  "radial-gradient": w1,
  "-moz-radial-gradient": Hs,
  "-ms-radial-gradient": Hs,
  "-o-radial-gradient": Hs,
  "-webkit-radial-gradient": Hs,
  "-webkit-gradient": p1
}, C1 = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, r) {
    if (r.length === 0)
      return [];
    var n = r[0];
    return n.type === 20 && n.value === "none" ? [] : r.filter(function(o) {
      return bn(o) && m1(o);
    }).map(function(o) {
      return of.parse(e, o);
    });
  }
}, Q1 = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, r) {
    return r.map(function(n) {
      if (SA(n))
        switch (n.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, y1 = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(e, r) {
    return ft(r).map(function(n) {
      return n.filter(YA);
    }).map(r0);
  }
}, U1 = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(e, r) {
    return ft(r).map(function(n) {
      return n.filter(SA).map(function(o) {
        return o.value;
      }).join(" ");
    }).map(F1);
  }
}, F1 = function(e) {
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
}, Hn;
(function(e) {
  e.AUTO = "auto", e.CONTAIN = "contain", e.COVER = "cover";
})(Hn || (Hn = {}));
var E1 = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(e, r) {
    return ft(r).map(function(n) {
      return n.filter(x1);
    });
  }
}, x1 = function(e) {
  return SA(e) || YA(e);
}, ma = function(e) {
  return {
    name: "border-" + e + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, I1 = ma("top"), H1 = ma("right"), S1 = ma("bottom"), b1 = ma("left"), Ca = function(e) {
  return {
    name: "border-radius-" + e,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(r, n) {
      return r0(n.filter(YA));
    }
  };
}, L1 = Ca("top-left"), T1 = Ca("top-right"), D1 = Ca("bottom-right"), K1 = Ca("bottom-left"), Qa = function(e) {
  return {
    name: "border-" + e + "-style",
    initialValue: "solid",
    prefix: !1,
    type: 2,
    parse: function(r, n) {
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
    }
  };
}, k1 = Qa("top"), R1 = Qa("right"), O1 = Qa("bottom"), N1 = Qa("left"), ya = function(e) {
  return {
    name: "border-" + e + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(r, n) {
      return $o(n) ? n.number : 0;
    }
  };
}, M1 = ya("top"), P1 = ya("right"), _1 = ya("bottom"), V1 = ya("left"), G1 = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, W1 = {
  name: "direction",
  initialValue: "ltr",
  prefix: !1,
  type: 2,
  parse: function(e, r) {
    switch (r) {
      case "rtl":
        return 1;
      case "ltr":
      default:
        return 0;
    }
  }
}, j1 = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(e, r) {
    return r.filter(SA).reduce(
      function(n, o) {
        return n | X1(o.value);
      },
      0
      /* NONE */
    );
  }
}, X1 = function(e) {
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
}, z1 = {
  name: "float",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, r) {
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
  }
}, J1 = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(e, r) {
    return r.type === 20 && r.value === "normal" ? 0 : r.type === 17 || r.type === 15 ? r.number : 0;
  }
}, qs;
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(qs || (qs = {}));
var Y1 = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, r) {
    switch (r) {
      case "strict":
        return qs.STRICT;
      case "normal":
      default:
        return qs.NORMAL;
    }
  }
}, Z1 = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, tp = function(e, r) {
  return SA(e) && e.value === "normal" ? 1.2 * r : e.type === 17 ? r * e.number : YA(e) ? LA(e, r) : r;
}, $1 = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(e, r) {
    return r.type === 20 && r.value === "none" ? null : of.parse(e, r);
  }
}, q1 = {
  name: "list-style-position",
  initialValue: "outside",
  prefix: !1,
  type: 2,
  parse: function(e, r) {
    switch (r) {
      case "inside":
        return 0;
      case "outside":
      default:
        return 1;
    }
  }
}, xu = {
  name: "list-style-type",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, r) {
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
  }
}, Ua = function(e) {
  return {
    name: "margin-" + e,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, Ax = Ua("top"), ex = Ua("right"), tx = Ua("bottom"), rx = Ua("left"), nx = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: function(e, r) {
    return r.filter(SA).map(function(n) {
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
  }
}, ox = {
  name: "overflow-wrap",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, r) {
    switch (r) {
      case "break-word":
        return "break-word";
      case "normal":
      default:
        return "normal";
    }
  }
}, Fa = function(e) {
  return {
    name: "padding-" + e,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, ix = Fa("top"), sx = Fa("right"), ax = Fa("bottom"), lx = Fa("left"), cx = {
  name: "text-align",
  initialValue: "left",
  prefix: !1,
  type: 2,
  parse: function(e, r) {
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
  }
}, ux = {
  name: "position",
  initialValue: "static",
  prefix: !1,
  type: 2,
  parse: function(e, r) {
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
  }
}, fx = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, r) {
    return r.length === 1 && Eu(r[0], "none") ? [] : ft(r).map(function(n) {
      for (var o = {
        color: Et.TRANSPARENT,
        offsetX: le,
        offsetY: le,
        blur: le
      }, s = 0, l = 0; l < n.length; l++) {
        var u = n[l];
        fr(u) ? (s === 0 ? o.offsetX = u : s === 1 ? o.offsetY = u : o.blur = u, s++) : o.color = ir.parse(e, u);
      }
      return o;
    });
  }
}, dx = {
  name: "text-transform",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, r) {
    switch (r) {
      case "uppercase":
        return 2;
      case "lowercase":
        return 1;
      case "capitalize":
        return 3;
    }
    return 0;
  }
}, Bx = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(e, r) {
    if (r.type === 20 && r.value === "none")
      return null;
    if (r.type === 18) {
      var n = wx[r.name];
      if (typeof n > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + r.name + '"');
      return n(r.values);
    }
    return null;
  }
}, gx = function(e) {
  var r = e.filter(function(n) {
    return n.type === 17;
  }).map(function(n) {
    return n.number;
  });
  return r.length === 6 ? r : null;
}, px = function(e) {
  var r = e.filter(function(B) {
    return B.type === 17;
  }).map(function(B) {
    return B.number;
  }), n = r[0], o = r[1];
  r[2], r[3];
  var s = r[4], l = r[5];
  r[6], r[7], r[8], r[9], r[10], r[11];
  var u = r[12], f = r[13];
  return r[14], r[15], r.length === 16 ? [n, o, s, l, u, f] : null;
}, wx = {
  matrix: gx,
  matrix3d: px
}, rp = {
  type: 16,
  number: 50,
  flags: Zo
}, hx = [rp, rp], vx = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(e, r) {
    var n = r.filter(YA);
    return n.length !== 2 ? hx : [n[0], n[1]];
  }
}, mx = {
  name: "visible",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, r) {
    switch (r) {
      case "hidden":
        return 1;
      case "collapse":
        return 2;
      case "visible":
      default:
        return 0;
    }
  }
}, Mo;
(function(e) {
  e.NORMAL = "normal", e.BREAK_ALL = "break-all", e.KEEP_ALL = "keep-all";
})(Mo || (Mo = {}));
var Cx = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, r) {
    switch (r) {
      case "break-all":
        return Mo.BREAK_ALL;
      case "keep-all":
        return Mo.KEEP_ALL;
      case "normal":
      default:
        return Mo.NORMAL;
    }
  }
}, Qx = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(e, r) {
    if (r.type === 20)
      return { auto: !0, order: 0 };
    if (kn(r))
      return { auto: !1, order: r.number };
    throw new Error("Invalid z-index number parsed");
  }
}, v0 = {
  name: "time",
  parse: function(e, r) {
    if (r.type === 15)
      switch (r.unit.toLowerCase()) {
        case "s":
          return 1e3 * r.number;
        case "ms":
          return r.number;
      }
    throw new Error("Unsupported time type");
  }
}, yx = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(e, r) {
    return kn(r) ? r.number : 1;
  }
}, Ux = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Fx = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: function(e, r) {
    return r.filter(SA).map(function(n) {
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
    }).filter(function(n) {
      return n !== 0;
    });
  }
}, Ex = {
  name: "font-family",
  initialValue: "",
  prefix: !1,
  type: 1,
  parse: function(e, r) {
    var n = [], o = [];
    return r.forEach(function(s) {
      switch (s.type) {
        case 20:
        case 0:
          n.push(s.value);
          break;
        case 17:
          n.push(s.number.toString());
          break;
        case 4:
          o.push(n.join(" ")), n.length = 0;
          break;
      }
    }), n.length && o.push(n.join(" ")), o.map(function(s) {
      return s.indexOf(" ") === -1 ? s : "'" + s + "'";
    });
  }
}, xx = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, Ix = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(e, r) {
    if (kn(r))
      return r.number;
    if (SA(r))
      switch (r.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, Hx = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, r) {
    return r.filter(SA).map(function(n) {
      return n.value;
    });
  }
}, Sx = {
  name: "font-style",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, r) {
    switch (r) {
      case "oblique":
        return "oblique";
      case "italic":
        return "italic";
      case "normal":
      default:
        return "normal";
    }
  }
}, qA = function(e, r) {
  return (e & r) !== 0;
}, bx = {
  name: "content",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, r) {
    if (r.length === 0)
      return [];
    var n = r[0];
    return n.type === 20 && n.value === "none" ? [] : r;
  }
}, Lx = {
  name: "counter-increment",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, r) {
    if (r.length === 0)
      return null;
    var n = r[0];
    if (n.type === 20 && n.value === "none")
      return null;
    for (var o = [], s = r.filter(t0), l = 0; l < s.length; l++) {
      var u = s[l], f = s[l + 1];
      if (u.type === 20) {
        var B = f && kn(f) ? f.number : 1;
        o.push({ counter: u.value, increment: B });
      }
    }
    return o;
  }
}, Tx = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, r) {
    if (r.length === 0)
      return [];
    for (var n = [], o = r.filter(t0), s = 0; s < o.length; s++) {
      var l = o[s], u = o[s + 1];
      if (SA(l) && l.value !== "none") {
        var f = u && kn(u) ? u.number : 0;
        n.push({ counter: l.value, reset: f });
      }
    }
    return n;
  }
}, Dx = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(e, r) {
    return r.filter($o).map(function(n) {
      return v0.parse(e, n);
    });
  }
}, Kx = {
  name: "quotes",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, r) {
    if (r.length === 0)
      return null;
    var n = r[0];
    if (n.type === 20 && n.value === "none")
      return null;
    var o = [], s = r.filter(s1);
    if (s.length % 2 !== 0)
      return null;
    for (var l = 0; l < s.length; l += 2) {
      var u = s[l].value, f = s[l + 1].value;
      o.push({ open: u, close: f });
    }
    return o;
  }
}, np = function(e, r, n) {
  if (!e)
    return "";
  var o = e[Math.min(r, e.length - 1)];
  return o ? n ? o.open : o.close : "";
}, kx = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, r) {
    return r.length === 1 && Eu(r[0], "none") ? [] : ft(r).map(function(n) {
      for (var o = {
        color: 255,
        offsetX: le,
        offsetY: le,
        blur: le,
        spread: le,
        inset: !1
      }, s = 0, l = 0; l < n.length; l++) {
        var u = n[l];
        Eu(u, "inset") ? o.inset = !0 : fr(u) ? (s === 0 ? o.offsetX = u : s === 1 ? o.offsetY = u : s === 2 ? o.blur = u : o.spread = u, s++) : o.color = ir.parse(e, u);
      }
      return o;
    });
  }
}, Rx = {
  name: "paint-order",
  initialValue: "normal",
  prefix: !1,
  type: 1,
  parse: function(e, r) {
    var n = [
      0,
      1,
      2
      /* MARKERS */
    ], o = [];
    return r.filter(SA).forEach(function(s) {
      switch (s.value) {
        case "stroke":
          o.push(
            1
            /* STROKE */
          );
          break;
        case "fill":
          o.push(
            0
            /* FILL */
          );
          break;
        case "markers":
          o.push(
            2
            /* MARKERS */
          );
          break;
      }
    }), n.forEach(function(s) {
      o.indexOf(s) === -1 && o.push(s);
    }), o;
  }
}, Ox = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, Nx = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(e, r) {
    return $o(r) ? r.number : 0;
  }
}, Mx = (
  /** @class */
  function() {
    function e(r, n) {
      var o, s;
      this.animationDuration = tA(r, Dx, n.animationDuration), this.backgroundClip = tA(r, c1, n.backgroundClip), this.backgroundColor = tA(r, u1, n.backgroundColor), this.backgroundImage = tA(r, C1, n.backgroundImage), this.backgroundOrigin = tA(r, Q1, n.backgroundOrigin), this.backgroundPosition = tA(r, y1, n.backgroundPosition), this.backgroundRepeat = tA(r, U1, n.backgroundRepeat), this.backgroundSize = tA(r, E1, n.backgroundSize), this.borderTopColor = tA(r, I1, n.borderTopColor), this.borderRightColor = tA(r, H1, n.borderRightColor), this.borderBottomColor = tA(r, S1, n.borderBottomColor), this.borderLeftColor = tA(r, b1, n.borderLeftColor), this.borderTopLeftRadius = tA(r, L1, n.borderTopLeftRadius), this.borderTopRightRadius = tA(r, T1, n.borderTopRightRadius), this.borderBottomRightRadius = tA(r, D1, n.borderBottomRightRadius), this.borderBottomLeftRadius = tA(r, K1, n.borderBottomLeftRadius), this.borderTopStyle = tA(r, k1, n.borderTopStyle), this.borderRightStyle = tA(r, R1, n.borderRightStyle), this.borderBottomStyle = tA(r, O1, n.borderBottomStyle), this.borderLeftStyle = tA(r, N1, n.borderLeftStyle), this.borderTopWidth = tA(r, M1, n.borderTopWidth), this.borderRightWidth = tA(r, P1, n.borderRightWidth), this.borderBottomWidth = tA(r, _1, n.borderBottomWidth), this.borderLeftWidth = tA(r, V1, n.borderLeftWidth), this.boxShadow = tA(r, kx, n.boxShadow), this.color = tA(r, G1, n.color), this.direction = tA(r, W1, n.direction), this.display = tA(r, j1, n.display), this.float = tA(r, z1, n.cssFloat), this.fontFamily = tA(r, Ex, n.fontFamily), this.fontSize = tA(r, xx, n.fontSize), this.fontStyle = tA(r, Sx, n.fontStyle), this.fontVariant = tA(r, Hx, n.fontVariant), this.fontWeight = tA(r, Ix, n.fontWeight), this.letterSpacing = tA(r, J1, n.letterSpacing), this.lineBreak = tA(r, Y1, n.lineBreak), this.lineHeight = tA(r, Z1, n.lineHeight), this.listStyleImage = tA(r, $1, n.listStyleImage), this.listStylePosition = tA(r, q1, n.listStylePosition), this.listStyleType = tA(r, xu, n.listStyleType), this.marginTop = tA(r, Ax, n.marginTop), this.marginRight = tA(r, ex, n.marginRight), this.marginBottom = tA(r, tx, n.marginBottom), this.marginLeft = tA(r, rx, n.marginLeft), this.opacity = tA(r, yx, n.opacity);
      var l = tA(r, nx, n.overflow);
      this.overflowX = l[0], this.overflowY = l[l.length > 1 ? 1 : 0], this.overflowWrap = tA(r, ox, n.overflowWrap), this.paddingTop = tA(r, ix, n.paddingTop), this.paddingRight = tA(r, sx, n.paddingRight), this.paddingBottom = tA(r, ax, n.paddingBottom), this.paddingLeft = tA(r, lx, n.paddingLeft), this.paintOrder = tA(r, Rx, n.paintOrder), this.position = tA(r, ux, n.position), this.textAlign = tA(r, cx, n.textAlign), this.textDecorationColor = tA(r, Ux, (o = n.textDecorationColor) !== null && o !== void 0 ? o : n.color), this.textDecorationLine = tA(r, Fx, (s = n.textDecorationLine) !== null && s !== void 0 ? s : n.textDecoration), this.textShadow = tA(r, fx, n.textShadow), this.textTransform = tA(r, dx, n.textTransform), this.transform = tA(r, Bx, n.transform), this.transformOrigin = tA(r, vx, n.transformOrigin), this.visibility = tA(r, mx, n.visibility), this.webkitTextStrokeColor = tA(r, Ox, n.webkitTextStrokeColor), this.webkitTextStrokeWidth = tA(r, Nx, n.webkitTextStrokeWidth), this.wordBreak = tA(r, Cx, n.wordBreak), this.zIndex = tA(r, Qx, n.zIndex);
    }
    return e.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, e.prototype.isTransparent = function() {
      return sr(this.backgroundColor);
    }, e.prototype.isTransformed = function() {
      return this.transform !== null;
    }, e.prototype.isPositioned = function() {
      return this.position !== 0;
    }, e.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, e.prototype.isFloating = function() {
      return this.float !== 0;
    }, e.prototype.isInlineLevel = function() {
      return qA(
        this.display,
        4
        /* INLINE */
      ) || qA(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || qA(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || qA(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || qA(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || qA(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, e;
  }()
), Px = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(r, n) {
      this.content = tA(r, bx, n.content), this.quotes = tA(r, Kx, n.quotes);
    }
    return e;
  }()
), op = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(r, n) {
      this.counterIncrement = tA(r, Lx, n.counterIncrement), this.counterReset = tA(r, Tx, n.counterReset);
    }
    return e;
  }()
), tA = function(e, r, n) {
  var o = new A0(), s = n !== null && typeof n < "u" ? n.toString() : r.initialValue;
  o.write(s);
  var l = new e0(o.read());
  switch (r.type) {
    case 2:
      var u = l.parseComponentValue();
      return r.parse(e, SA(u) ? u.value : r.initialValue);
    case 0:
      return r.parse(e, l.parseComponentValue());
    case 1:
      return r.parse(e, l.parseComponentValues());
    case 4:
      return l.parseComponentValue();
    case 3:
      switch (r.format) {
        case "angle":
          return ha.parse(e, l.parseComponentValue());
        case "color":
          return ir.parse(e, l.parseComponentValue());
        case "image":
          return of.parse(e, l.parseComponentValue());
        case "length":
          var f = l.parseComponentValue();
          return fr(f) ? f : le;
        case "length-percentage":
          var B = l.parseComponentValue();
          return YA(B) ? B : le;
        case "time":
          return v0.parse(e, l.parseComponentValue());
      }
      break;
  }
}, _x = "data-html2canvas-debug", Vx = function(e) {
  var r = e.getAttribute(_x);
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
}, Iu = function(e, r) {
  var n = Vx(e);
  return n === 1 || r === n;
}, dt = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(r, n) {
      if (this.context = r, this.textNodes = [], this.elements = [], this.flags = 0, Iu(
        n,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new Mx(r, window.getComputedStyle(n, null)), bu(n) && (this.styles.animationDuration.some(function(o) {
        return o > 0;
      }) && (n.style.animationDuration = "0s"), this.styles.transform !== null && (n.style.transform = "none")), this.bounds = pa(this.context, n), Iu(
        n,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return e;
  }()
), Gx = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", ip = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ko = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ss = 0; Ss < ip.length; Ss++)
  ko[ip.charCodeAt(Ss)] = Ss;
var Wx = function(e) {
  var r = e.length * 0.75, n = e.length, o, s = 0, l, u, f, B;
  e[e.length - 1] === "=" && (r--, e[e.length - 2] === "=" && r--);
  var g = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(r) : new Array(r), p = Array.isArray(g) ? g : new Uint8Array(g);
  for (o = 0; o < n; o += 4)
    l = ko[e.charCodeAt(o)], u = ko[e.charCodeAt(o + 1)], f = ko[e.charCodeAt(o + 2)], B = ko[e.charCodeAt(o + 3)], p[s++] = l << 2 | u >> 4, p[s++] = (u & 15) << 4 | f >> 2, p[s++] = (f & 3) << 6 | B & 63;
  return g;
}, jx = function(e) {
  for (var r = e.length, n = [], o = 0; o < r; o += 2)
    n.push(e[o + 1] << 8 | e[o]);
  return n;
}, Xx = function(e) {
  for (var r = e.length, n = [], o = 0; o < r; o += 4)
    n.push(e[o + 3] << 24 | e[o + 2] << 16 | e[o + 1] << 8 | e[o]);
  return n;
}, Tr = 5, sf = 11, Oc = 2, zx = sf - Tr, m0 = 65536 >> Tr, Jx = 1 << Tr, Nc = Jx - 1, Yx = 1024 >> Tr, Zx = m0 + Yx, $x = Zx, qx = 32, AI = $x + qx, eI = 65536 >> sf, tI = 1 << zx, rI = tI - 1, sp = function(e, r, n) {
  return e.slice ? e.slice(r, n) : new Uint16Array(Array.prototype.slice.call(e, r, n));
}, nI = function(e, r, n) {
  return e.slice ? e.slice(r, n) : new Uint32Array(Array.prototype.slice.call(e, r, n));
}, oI = function(e, r) {
  var n = Wx(e), o = Array.isArray(n) ? Xx(n) : new Uint32Array(n), s = Array.isArray(n) ? jx(n) : new Uint16Array(n), l = 24, u = sp(s, l / 2, o[4] / 2), f = o[5] === 2 ? sp(s, (l + o[4]) / 2) : nI(o, Math.ceil((l + o[4]) / 4));
  return new iI(o[0], o[1], o[2], o[3], u, f);
}, iI = (
  /** @class */
  function() {
    function e(r, n, o, s, l, u) {
      this.initialValue = r, this.errorValue = n, this.highStart = o, this.highValueIndex = s, this.index = l, this.data = u;
    }
    return e.prototype.get = function(r) {
      var n;
      if (r >= 0) {
        if (r < 55296 || r > 56319 && r <= 65535)
          return n = this.index[r >> Tr], n = (n << Oc) + (r & Nc), this.data[n];
        if (r <= 65535)
          return n = this.index[m0 + (r - 55296 >> Tr)], n = (n << Oc) + (r & Nc), this.data[n];
        if (r < this.highStart)
          return n = AI - eI + (r >> sf), n = this.index[n], n += r >> Tr & rI, n = this.index[n], n = (n << Oc) + (r & Nc), this.data[n];
        if (r <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), ap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", sI = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var bs = 0; bs < ap.length; bs++)
  sI[ap.charCodeAt(bs)] = bs;
var aI = 1, Mc = 2, Pc = 3, lp = 4, cp = 5, lI = 7, up = 8, _c = 9, Vc = 10, fp = 11, dp = 12, Bp = 13, gp = 14, Gc = 15, cI = function(e) {
  for (var r = [], n = 0, o = e.length; n < o; ) {
    var s = e.charCodeAt(n++);
    if (s >= 55296 && s <= 56319 && n < o) {
      var l = e.charCodeAt(n++);
      (l & 64512) === 56320 ? r.push(((s & 1023) << 10) + (l & 1023) + 65536) : (r.push(s), n--);
    } else
      r.push(s);
  }
  return r;
}, uI = function() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var n = e.length;
  if (!n)
    return "";
  for (var o = [], s = -1, l = ""; ++s < n; ) {
    var u = e[s];
    u <= 65535 ? o.push(u) : (u -= 65536, o.push((u >> 10) + 55296, u % 1024 + 56320)), (s + 1 === n || o.length > 16384) && (l += String.fromCharCode.apply(String, o), o.length = 0);
  }
  return l;
}, fI = oI(Gx), Me = "×", Wc = "÷", dI = function(e) {
  return fI.get(e);
}, BI = function(e, r, n) {
  var o = n - 2, s = r[o], l = r[n - 1], u = r[n];
  if (l === Mc && u === Pc)
    return Me;
  if (l === Mc || l === Pc || l === lp || u === Mc || u === Pc || u === lp)
    return Wc;
  if (l === up && [up, _c, fp, dp].indexOf(u) !== -1 || (l === fp || l === _c) && (u === _c || u === Vc) || (l === dp || l === Vc) && u === Vc || u === Bp || u === cp || u === lI || l === aI)
    return Me;
  if (l === Bp && u === gp) {
    for (; s === cp; )
      s = r[--o];
    if (s === gp)
      return Me;
  }
  if (l === Gc && u === Gc) {
    for (var f = 0; s === Gc; )
      f++, s = r[--o];
    if (f % 2 === 0)
      return Me;
  }
  return Wc;
}, gI = function(e) {
  var r = cI(e), n = r.length, o = 0, s = 0, l = r.map(dI);
  return {
    next: function() {
      if (o >= n)
        return { done: !0, value: null };
      for (var u = Me; o < n && (u = BI(r, l, ++o)) === Me; )
        ;
      if (u !== Me || o === n) {
        var f = uI.apply(null, r.slice(s, o));
        return s = o, { value: f, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, pI = function(e) {
  for (var r = gI(e), n = [], o; !(o = r.next()).done; )
    o.value && n.push(o.value.slice());
  return n;
}, wI = function(e) {
  var r = 123;
  if (e.createRange) {
    var n = e.createRange();
    if (n.getBoundingClientRect) {
      var o = e.createElement("boundtest");
      o.style.height = r + "px", o.style.display = "block", e.body.appendChild(o), n.selectNode(o);
      var s = n.getBoundingClientRect(), l = Math.round(s.height);
      if (e.body.removeChild(o), l === r)
        return !0;
    }
  }
  return !1;
}, hI = function(e) {
  var r = e.createElement("boundtest");
  r.style.width = "50px", r.style.display = "block", r.style.fontSize = "12px", r.style.letterSpacing = "0px", r.style.wordSpacing = "0px", e.body.appendChild(r);
  var n = e.createRange();
  r.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var o = r.firstChild, s = wa(o.data).map(function(B) {
    return XA(B);
  }), l = 0, u = {}, f = s.every(function(B, g) {
    n.setStart(o, l), n.setEnd(o, l + B.length);
    var p = n.getBoundingClientRect();
    l += B.length;
    var h = p.x > u.x || p.y > u.y;
    return u = p, g === 0 ? !0 : h;
  });
  return e.body.removeChild(r), f;
}, vI = function() {
  return typeof new Image().crossOrigin < "u";
}, mI = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, CI = function(e) {
  var r = new Image(), n = e.createElement("canvas"), o = n.getContext("2d");
  if (!o)
    return !1;
  r.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    o.drawImage(r, 0, 0), n.toDataURL();
  } catch {
    return !1;
  }
  return !0;
}, pp = function(e) {
  return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
}, QI = function(e) {
  var r = e.createElement("canvas"), n = 100;
  r.width = n, r.height = n;
  var o = r.getContext("2d");
  if (!o)
    return Promise.reject(!1);
  o.fillStyle = "rgb(0, 255, 0)", o.fillRect(0, 0, n, n);
  var s = new Image(), l = r.toDataURL();
  s.src = l;
  var u = Hu(n, n, 0, 0, s);
  return o.fillStyle = "red", o.fillRect(0, 0, n, n), wp(u).then(function(f) {
    o.drawImage(f, 0, 0);
    var B = o.getImageData(0, 0, n, n).data;
    o.fillStyle = "red", o.fillRect(0, 0, n, n);
    var g = e.createElement("div");
    return g.style.backgroundImage = "url(" + l + ")", g.style.height = n + "px", pp(B) ? wp(Hu(n, n, 0, 0, g)) : Promise.reject(!1);
  }).then(function(f) {
    return o.drawImage(f, 0, 0), pp(o.getImageData(0, 0, n, n).data);
  }).catch(function() {
    return !1;
  });
}, Hu = function(e, r, n, o, s) {
  var l = "http://www.w3.org/2000/svg", u = document.createElementNS(l, "svg"), f = document.createElementNS(l, "foreignObject");
  return u.setAttributeNS(null, "width", e.toString()), u.setAttributeNS(null, "height", r.toString()), f.setAttributeNS(null, "width", "100%"), f.setAttributeNS(null, "height", "100%"), f.setAttributeNS(null, "x", n.toString()), f.setAttributeNS(null, "y", o.toString()), f.setAttributeNS(null, "externalResourcesRequired", "true"), u.appendChild(f), f.appendChild(s), u;
}, wp = function(e) {
  return new Promise(function(r, n) {
    var o = new Image();
    o.onload = function() {
      return r(o);
    }, o.onerror = n, o.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, ae = {
  get SUPPORT_RANGE_BOUNDS() {
    var e = wI(document);
    return Object.defineProperty(ae, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
  },
  get SUPPORT_WORD_BREAKING() {
    var e = ae.SUPPORT_RANGE_BOUNDS && hI(document);
    return Object.defineProperty(ae, "SUPPORT_WORD_BREAKING", { value: e }), e;
  },
  get SUPPORT_SVG_DRAWING() {
    var e = CI(document);
    return Object.defineProperty(ae, "SUPPORT_SVG_DRAWING", { value: e }), e;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var e = typeof Array.from == "function" && typeof window.fetch == "function" ? QI(document) : Promise.resolve(!1);
    return Object.defineProperty(ae, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
  },
  get SUPPORT_CORS_IMAGES() {
    var e = vI();
    return Object.defineProperty(ae, "SUPPORT_CORS_IMAGES", { value: e }), e;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var e = mI();
    return Object.defineProperty(ae, "SUPPORT_RESPONSE_TYPE", { value: e }), e;
  },
  get SUPPORT_CORS_XHR() {
    var e = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(ae, "SUPPORT_CORS_XHR", { value: e }), e;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var e = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(ae, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: e }), e;
  }
}, Po = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(r, n) {
      this.text = r, this.bounds = n;
    }
    return e;
  }()
), yI = function(e, r, n, o) {
  var s = EI(r, n), l = [], u = 0;
  return s.forEach(function(f) {
    if (n.textDecorationLine.length || f.trim().length > 0)
      if (ae.SUPPORT_RANGE_BOUNDS) {
        var B = hp(o, u, f.length).getClientRects();
        if (B.length > 1) {
          var g = af(f), p = 0;
          g.forEach(function(v) {
            l.push(new Po(v, St.fromDOMRectList(e, hp(o, p + u, v.length).getClientRects()))), p += v.length;
          });
        } else
          l.push(new Po(f, St.fromDOMRectList(e, B)));
      } else {
        var h = o.splitText(f.length);
        l.push(new Po(f, UI(e, o))), o = h;
      }
    else ae.SUPPORT_RANGE_BOUNDS || (o = o.splitText(f.length));
    u += f.length;
  }), l;
}, UI = function(e, r) {
  var n = r.ownerDocument;
  if (n) {
    var o = n.createElement("html2canvaswrapper");
    o.appendChild(r.cloneNode(!0));
    var s = r.parentNode;
    if (s) {
      s.replaceChild(o, r);
      var l = pa(e, o);
      return o.firstChild && s.replaceChild(o.firstChild, o), l;
    }
  }
  return St.EMPTY;
}, hp = function(e, r, n) {
  var o = e.ownerDocument;
  if (!o)
    throw new Error("Node has no owner document");
  var s = o.createRange();
  return s.setStart(e, r), s.setEnd(e, r + n), s;
}, af = function(e) {
  if (ae.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var r = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(r.segment(e)).map(function(n) {
      return n.segment;
    });
  }
  return pI(e);
}, FI = function(e, r) {
  if (ae.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var n = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(n.segment(e)).map(function(o) {
      return o.segment;
    });
  }
  return II(e, r);
}, EI = function(e, r) {
  return r.letterSpacing !== 0 ? af(e) : FI(e, r);
}, xI = [32, 160, 4961, 65792, 65793, 4153, 4241], II = function(e, r) {
  for (var n = eE(e, {
    lineBreak: r.lineBreak,
    wordBreak: r.overflowWrap === "break-word" ? "break-word" : r.wordBreak
  }), o = [], s, l = function() {
    if (s.value) {
      var u = s.value.slice(), f = wa(u), B = "";
      f.forEach(function(g) {
        xI.indexOf(g) === -1 ? B += XA(g) : (B.length && o.push(B), o.push(XA(g)), B = "");
      }), B.length && o.push(B);
    }
  }; !(s = n.next()).done; )
    l();
  return o;
}, HI = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(r, n, o) {
      this.text = SI(n.data, o.textTransform), this.textBounds = yI(r, this.text, o, n);
    }
    return e;
  }()
), SI = function(e, r) {
  switch (r) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(bI, LI);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, bI = /(^|\s|:|-|\(|\))([a-z])/g, LI = function(e, r, n) {
  return e.length > 0 ? r + n.toUpperCase() : e;
}, C0 = (
  /** @class */
  function(e) {
    tt(r, e);
    function r(n, o) {
      var s = e.call(this, n, o) || this;
      return s.src = o.currentSrc || o.src, s.intrinsicWidth = o.naturalWidth, s.intrinsicHeight = o.naturalHeight, s.context.cache.addImage(s.src), s;
    }
    return r;
  }(dt)
), Q0 = (
  /** @class */
  function(e) {
    tt(r, e);
    function r(n, o) {
      var s = e.call(this, n, o) || this;
      return s.canvas = o, s.intrinsicWidth = o.width, s.intrinsicHeight = o.height, s;
    }
    return r;
  }(dt)
), y0 = (
  /** @class */
  function(e) {
    tt(r, e);
    function r(n, o) {
      var s = e.call(this, n, o) || this, l = new XMLSerializer(), u = pa(n, o);
      return o.setAttribute("width", u.width + "px"), o.setAttribute("height", u.height + "px"), s.svg = "data:image/svg+xml," + encodeURIComponent(l.serializeToString(o)), s.intrinsicWidth = o.width.baseVal.value, s.intrinsicHeight = o.height.baseVal.value, s.context.cache.addImage(s.svg), s;
    }
    return r;
  }(dt)
), U0 = (
  /** @class */
  function(e) {
    tt(r, e);
    function r(n, o) {
      var s = e.call(this, n, o) || this;
      return s.value = o.value, s;
    }
    return r;
  }(dt)
), Su = (
  /** @class */
  function(e) {
    tt(r, e);
    function r(n, o) {
      var s = e.call(this, n, o) || this;
      return s.start = o.start, s.reversed = typeof o.reversed == "boolean" && o.reversed === !0, s;
    }
    return r;
  }(dt)
), TI = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], DI = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], KI = function(e) {
  return e.width > e.height ? new St(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new St(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e;
}, kI = function(e) {
  var r = e.type === RI ? new Array(e.value.length + 1).join("•") : e.value;
  return r.length === 0 ? e.placeholder || "" : r;
}, Aa = "checkbox", ea = "radio", RI = "password", vp = 707406591, lf = (
  /** @class */
  function(e) {
    tt(r, e);
    function r(n, o) {
      var s = e.call(this, n, o) || this;
      switch (s.type = o.type.toLowerCase(), s.checked = o.checked, s.value = kI(o), (s.type === Aa || s.type === ea) && (s.styles.backgroundColor = 3739148031, s.styles.borderTopColor = s.styles.borderRightColor = s.styles.borderBottomColor = s.styles.borderLeftColor = 2779096575, s.styles.borderTopWidth = s.styles.borderRightWidth = s.styles.borderBottomWidth = s.styles.borderLeftWidth = 1, s.styles.borderTopStyle = s.styles.borderRightStyle = s.styles.borderBottomStyle = s.styles.borderLeftStyle = 1, s.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], s.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], s.bounds = KI(s.bounds)), s.type) {
        case Aa:
          s.styles.borderTopRightRadius = s.styles.borderTopLeftRadius = s.styles.borderBottomRightRadius = s.styles.borderBottomLeftRadius = TI;
          break;
        case ea:
          s.styles.borderTopRightRadius = s.styles.borderTopLeftRadius = s.styles.borderBottomRightRadius = s.styles.borderBottomLeftRadius = DI;
          break;
      }
      return s;
    }
    return r;
  }(dt)
), F0 = (
  /** @class */
  function(e) {
    tt(r, e);
    function r(n, o) {
      var s = e.call(this, n, o) || this, l = o.options[o.selectedIndex || 0];
      return s.value = l && l.text || "", s;
    }
    return r;
  }(dt)
), E0 = (
  /** @class */
  function(e) {
    tt(r, e);
    function r(n, o) {
      var s = e.call(this, n, o) || this;
      return s.value = o.value, s;
    }
    return r;
  }(dt)
), x0 = (
  /** @class */
  function(e) {
    tt(r, e);
    function r(n, o) {
      var s = e.call(this, n, o) || this;
      s.src = o.src, s.width = parseInt(o.width, 10) || 0, s.height = parseInt(o.height, 10) || 0, s.backgroundColor = s.styles.backgroundColor;
      try {
        if (o.contentWindow && o.contentWindow.document && o.contentWindow.document.documentElement) {
          s.tree = H0(n, o.contentWindow.document.documentElement);
          var l = o.contentWindow.document.documentElement ? No(n, getComputedStyle(o.contentWindow.document.documentElement).backgroundColor) : Et.TRANSPARENT, u = o.contentWindow.document.body ? No(n, getComputedStyle(o.contentWindow.document.body).backgroundColor) : Et.TRANSPARENT;
          s.backgroundColor = sr(l) ? sr(u) ? s.styles.backgroundColor : u : l;
        }
      } catch {
      }
      return s;
    }
    return r;
  }(dt)
), OI = ["OL", "UL", "MENU"], _s = function(e, r, n, o) {
  for (var s = r.firstChild, l = void 0; s; s = l)
    if (l = s.nextSibling, S0(s) && s.data.trim().length > 0)
      n.textNodes.push(new HI(e, s, n.styles));
    else if (Un(s))
      if (D0(s) && s.assignedNodes)
        s.assignedNodes().forEach(function(f) {
          return _s(e, f, n, o);
        });
      else {
        var u = I0(e, s);
        u.styles.isVisible() && (NI(s, u, o) ? u.flags |= 4 : MI(u.styles) && (u.flags |= 2), OI.indexOf(s.tagName) !== -1 && (u.flags |= 8), n.elements.push(u), s.slot, s.shadowRoot ? _s(e, s.shadowRoot, u, o) : !ta(s) && !b0(s) && !ra(s) && _s(e, s, u, o));
      }
}, I0 = function(e, r) {
  return Lu(r) ? new C0(e, r) : L0(r) ? new Q0(e, r) : b0(r) ? new y0(e, r) : PI(r) ? new U0(e, r) : _I(r) ? new Su(e, r) : VI(r) ? new lf(e, r) : ra(r) ? new F0(e, r) : ta(r) ? new E0(e, r) : T0(r) ? new x0(e, r) : new dt(e, r);
}, H0 = function(e, r) {
  var n = I0(e, r);
  return n.flags |= 4, _s(e, r, n, n), n;
}, NI = function(e, r, n) {
  return r.styles.isPositionedWithZIndex() || r.styles.opacity < 1 || r.styles.isTransformed() || cf(e) && n.styles.isTransparent();
}, MI = function(e) {
  return e.isPositioned() || e.isFloating();
}, S0 = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, Un = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, bu = function(e) {
  return Un(e) && typeof e.style < "u" && !Vs(e);
}, Vs = function(e) {
  return typeof e.className == "object";
}, PI = function(e) {
  return e.tagName === "LI";
}, _I = function(e) {
  return e.tagName === "OL";
}, VI = function(e) {
  return e.tagName === "INPUT";
}, GI = function(e) {
  return e.tagName === "HTML";
}, b0 = function(e) {
  return e.tagName === "svg";
}, cf = function(e) {
  return e.tagName === "BODY";
}, L0 = function(e) {
  return e.tagName === "CANVAS";
}, mp = function(e) {
  return e.tagName === "VIDEO";
}, Lu = function(e) {
  return e.tagName === "IMG";
}, T0 = function(e) {
  return e.tagName === "IFRAME";
}, Cp = function(e) {
  return e.tagName === "STYLE";
}, WI = function(e) {
  return e.tagName === "SCRIPT";
}, ta = function(e) {
  return e.tagName === "TEXTAREA";
}, ra = function(e) {
  return e.tagName === "SELECT";
}, D0 = function(e) {
  return e.tagName === "SLOT";
}, Qp = function(e) {
  return e.tagName.indexOf("-") > 0;
}, jI = (
  /** @class */
  function() {
    function e() {
      this.counters = {};
    }
    return e.prototype.getCounterValue = function(r) {
      var n = this.counters[r];
      return n && n.length ? n[n.length - 1] : 1;
    }, e.prototype.getCounterValues = function(r) {
      var n = this.counters[r];
      return n || [];
    }, e.prototype.pop = function(r) {
      var n = this;
      r.forEach(function(o) {
        return n.counters[o].pop();
      });
    }, e.prototype.parse = function(r) {
      var n = this, o = r.counterIncrement, s = r.counterReset, l = !0;
      o !== null && o.forEach(function(f) {
        var B = n.counters[f.counter];
        B && f.increment !== 0 && (l = !1, B.length || B.push(1), B[Math.max(0, B.length - 1)] += f.increment);
      });
      var u = [];
      return l && s.forEach(function(f) {
        var B = n.counters[f.counter];
        u.push(f.counter), B || (B = n.counters[f.counter] = []), B.push(f.reset);
      }), u;
    }, e;
  }()
), yp = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, Up = {
  integers: [
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
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
    "Ա"
  ]
}, XI = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    19,
    18,
    17,
    16,
    15,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
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
    "א"
  ]
}, zI = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
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
    "ა"
  ]
}, vn = function(e, r, n, o, s, l) {
  return e < r || e > n ? Xo(e, s, l.length > 0) : o.integers.reduce(function(u, f, B) {
    for (; e >= f; )
      e -= f, u += o.values[B];
    return u;
  }, "") + l;
}, K0 = function(e, r, n, o) {
  var s = "";
  do
    n || e--, s = o(e) + s, e /= r;
  while (e * r >= r);
  return s;
}, jA = function(e, r, n, o, s) {
  var l = n - r + 1;
  return (e < 0 ? "-" : "") + (K0(Math.abs(e), l, o, function(u) {
    return XA(Math.floor(u % l) + r);
  }) + s);
}, Hr = function(e, r, n) {
  n === void 0 && (n = ". ");
  var o = r.length;
  return K0(Math.abs(e), o, !1, function(s) {
    return r[Math.floor(s % o)];
  }) + n;
}, Qn = 1, Ar = 2, er = 4, Ro = 8, Ut = function(e, r, n, o, s, l) {
  if (e < -9999 || e > 9999)
    return Xo(e, 4, s.length > 0);
  var u = Math.abs(e), f = s;
  if (u === 0)
    return r[0] + f;
  for (var B = 0; u > 0 && B <= 4; B++) {
    var g = u % 10;
    g === 0 && qA(l, Qn) && f !== "" ? f = r[g] + f : g > 1 || g === 1 && B === 0 || g === 1 && B === 1 && qA(l, Ar) || g === 1 && B === 1 && qA(l, er) && e > 100 || g === 1 && B > 1 && qA(l, Ro) ? f = r[g] + (B > 0 ? n[B - 1] : "") + f : g === 1 && B > 0 && (f = n[B - 1] + f), u = Math.floor(u / 10);
  }
  return (e < 0 ? o : "") + f;
}, Fp = "十百千萬", Ep = "拾佰仟萬", xp = "マイナス", jc = "마이너스", Xo = function(e, r, n) {
  var o = n ? ". " : "", s = n ? "、" : "", l = n ? ", " : "", u = n ? " " : "";
  switch (r) {
    case 0:
      return "•" + u;
    case 1:
      return "◦" + u;
    case 2:
      return "◾" + u;
    case 5:
      var f = jA(e, 48, 57, !0, o);
      return f.length < 4 ? "0" + f : f;
    case 4:
      return Hr(e, "〇一二三四五六七八九", s);
    case 6:
      return vn(e, 1, 3999, yp, 3, o).toLowerCase();
    case 7:
      return vn(e, 1, 3999, yp, 3, o);
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
      return vn(e, 1, 9999, Up, 3, o);
    case 35:
      return vn(e, 1, 9999, Up, 3, o).toLowerCase();
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
      return Ut(e, "零一二三四五六七八九", Fp, "負", s, Ar | er | Ro);
    case 47:
      return Ut(e, "零壹貳參肆伍陸柒捌玖", Ep, "負", s, Qn | Ar | er | Ro);
    case 42:
      return Ut(e, "零一二三四五六七八九", Fp, "负", s, Ar | er | Ro);
    case 41:
      return Ut(e, "零壹贰叁肆伍陆柒捌玖", Ep, "负", s, Qn | Ar | er | Ro);
    case 26:
      return Ut(e, "〇一二三四五六七八九", "十百千万", xp, s, 0);
    case 25:
      return Ut(e, "零壱弐参四伍六七八九", "拾百千万", xp, s, Qn | Ar | er);
    case 31:
      return Ut(e, "영일이삼사오육칠팔구", "십백천만", jc, l, Qn | Ar | er);
    case 33:
      return Ut(e, "零一二三四五六七八九", "十百千萬", jc, l, 0);
    case 32:
      return Ut(e, "零壹貳參四五六七八九", "拾百千", jc, l, Qn | Ar | er);
    case 18:
      return jA(e, 2406, 2415, !0, o);
    case 20:
      return vn(e, 1, 19999, zI, 3, o);
    case 21:
      return jA(e, 2790, 2799, !0, o);
    case 22:
      return jA(e, 2662, 2671, !0, o);
    case 22:
      return vn(e, 1, 10999, XI, 3, o);
    case 23:
      return Hr(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return Hr(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return jA(e, 3302, 3311, !0, o);
    case 28:
      return Hr(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", s);
    case 29:
      return Hr(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", s);
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
}, k0 = "data-html2canvas-ignore", Ip = (
  /** @class */
  function() {
    function e(r, n, o) {
      if (this.context = r, this.options = o, this.scrolledElements = [], this.referenceElement = n, this.counters = new jI(), this.quoteDepth = 0, !n.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(n.ownerDocument.documentElement, !1);
    }
    return e.prototype.toIFrame = function(r, n) {
      var o = this, s = JI(r, n);
      if (!s.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var l = r.defaultView.pageXOffset, u = r.defaultView.pageYOffset, f = s.contentWindow, B = f.document, g = $I(s).then(function() {
        return he(o, void 0, void 0, function() {
          var p, h;
          return Be(this, function(v) {
            switch (v.label) {
              case 0:
                return this.scrolledElements.forEach(tH), f && (f.scrollTo(n.left, n.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (f.scrollY !== n.top || f.scrollX !== n.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(f.scrollX - n.left, f.scrollY - n.top, 0, 0))), p = this.options.onclone, h = this.clonedReferenceElement, typeof h > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : B.fonts && B.fonts.ready ? [4, B.fonts.ready] : [3, 2];
              case 1:
                v.sent(), v.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, ZI(B)] : [3, 4];
              case 3:
                v.sent(), v.label = 4;
              case 4:
                return typeof p == "function" ? [2, Promise.resolve().then(function() {
                  return p(B, h);
                }).then(function() {
                  return s;
                })] : [2, s];
            }
          });
        });
      });
      return B.open(), B.write(AH(document.doctype) + "<html></html>"), eH(this.referenceElement.ownerDocument, l, u), B.replaceChild(B.adoptNode(this.documentElement), B.documentElement), B.close(), g;
    }, e.prototype.createElementClone = function(r) {
      if (Iu(
        r,
        2
        /* CLONE */
      ))
        debugger;
      if (L0(r))
        return this.createCanvasClone(r);
      if (mp(r))
        return this.createVideoClone(r);
      if (Cp(r))
        return this.createStyleClone(r);
      var n = r.cloneNode(!1);
      return Lu(n) && (Lu(r) && r.currentSrc && r.currentSrc !== r.src && (n.src = r.currentSrc, n.srcset = ""), n.loading === "lazy" && (n.loading = "eager")), Qp(n) ? this.createCustomElementClone(n) : n;
    }, e.prototype.createCustomElementClone = function(r) {
      var n = document.createElement("html2canvascustomelement");
      return Xc(r.style, n), n;
    }, e.prototype.createStyleClone = function(r) {
      try {
        var n = r.sheet;
        if (n && n.cssRules) {
          var o = [].slice.call(n.cssRules, 0).reduce(function(l, u) {
            return u && typeof u.cssText == "string" ? l + u.cssText : l;
          }, ""), s = r.cloneNode(!1);
          return s.textContent = o, s;
        }
      } catch (l) {
        if (this.context.logger.error("Unable to access cssRules property", l), l.name !== "SecurityError")
          throw l;
      }
      return r.cloneNode(!1);
    }, e.prototype.createCanvasClone = function(r) {
      var n;
      if (this.options.inlineImages && r.ownerDocument) {
        var o = r.ownerDocument.createElement("img");
        try {
          return o.src = r.toDataURL(), o;
        } catch {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", r);
        }
      }
      var s = r.cloneNode(!1);
      try {
        s.width = r.width, s.height = r.height;
        var l = r.getContext("2d"), u = s.getContext("2d");
        if (u)
          if (!this.options.allowTaint && l)
            u.putImageData(l.getImageData(0, 0, r.width, r.height), 0, 0);
          else {
            var f = (n = r.getContext("webgl2")) !== null && n !== void 0 ? n : r.getContext("webgl");
            if (f) {
              var B = f.getContextAttributes();
              B?.preserveDrawingBuffer === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", r);
            }
            u.drawImage(r, 0, 0);
          }
        return s;
      } catch {
        this.context.logger.info("Unable to clone canvas as it is tainted", r);
      }
      return s;
    }, e.prototype.createVideoClone = function(r) {
      var n = r.ownerDocument.createElement("canvas");
      n.width = r.offsetWidth, n.height = r.offsetHeight;
      var o = n.getContext("2d");
      try {
        return o && (o.drawImage(r, 0, 0, n.width, n.height), this.options.allowTaint || o.getImageData(0, 0, n.width, n.height)), n;
      } catch {
        this.context.logger.info("Unable to clone video as it is tainted", r);
      }
      var s = r.ownerDocument.createElement("canvas");
      return s.width = r.offsetWidth, s.height = r.offsetHeight, s;
    }, e.prototype.appendChildNode = function(r, n, o) {
      (!Un(n) || !WI(n) && !n.hasAttribute(k0) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(n))) && (!this.options.copyStyles || !Un(n) || !Cp(n)) && r.appendChild(this.cloneNode(n, o));
    }, e.prototype.cloneChildNodes = function(r, n, o) {
      for (var s = this, l = r.shadowRoot ? r.shadowRoot.firstChild : r.firstChild; l; l = l.nextSibling)
        if (Un(l) && D0(l) && typeof l.assignedNodes == "function") {
          var u = l.assignedNodes();
          u.length && u.forEach(function(f) {
            return s.appendChildNode(n, f, o);
          });
        } else
          this.appendChildNode(n, l, o);
    }, e.prototype.cloneNode = function(r, n) {
      if (S0(r))
        return document.createTextNode(r.data);
      if (!r.ownerDocument)
        return r.cloneNode(!1);
      var o = r.ownerDocument.defaultView;
      if (o && Un(r) && (bu(r) || Vs(r))) {
        var s = this.createElementClone(r);
        s.style.transitionProperty = "none";
        var l = o.getComputedStyle(r), u = o.getComputedStyle(r, ":before"), f = o.getComputedStyle(r, ":after");
        this.referenceElement === r && bu(s) && (this.clonedReferenceElement = s), cf(s) && oH(s);
        var B = this.counters.parse(new op(this.context, l)), g = this.resolvePseudoContent(r, s, u, _o.BEFORE);
        Qp(r) && (n = !0), mp(r) || this.cloneChildNodes(r, s, n), g && s.insertBefore(g, s.firstChild);
        var p = this.resolvePseudoContent(r, s, f, _o.AFTER);
        return p && s.appendChild(p), this.counters.pop(B), (l && (this.options.copyStyles || Vs(r)) && !T0(r) || n) && Xc(l, s), (r.scrollTop !== 0 || r.scrollLeft !== 0) && this.scrolledElements.push([s, r.scrollLeft, r.scrollTop]), (ta(r) || ra(r)) && (ta(s) || ra(s)) && (s.value = r.value), s;
      }
      return r.cloneNode(!1);
    }, e.prototype.resolvePseudoContent = function(r, n, o, s) {
      var l = this;
      if (o) {
        var u = o.content, f = n.ownerDocument;
        if (!(!f || !u || u === "none" || u === "-moz-alt-content" || o.display === "none")) {
          this.counters.parse(new op(this.context, o));
          var B = new Px(this.context, o), g = f.createElement("html2canvaspseudoelement");
          Xc(o, g), B.content.forEach(function(h) {
            if (h.type === 0)
              g.appendChild(f.createTextNode(h.value));
            else if (h.type === 22) {
              var v = f.createElement("img");
              v.src = h.value, v.style.opacity = "1", g.appendChild(v);
            } else if (h.type === 18) {
              if (h.name === "attr") {
                var U = h.values.filter(SA);
                U.length && g.appendChild(f.createTextNode(r.getAttribute(U[0].value) || ""));
              } else if (h.name === "counter") {
                var Q = h.values.filter(bn), C = Q[0], E = Q[1];
                if (C && SA(C)) {
                  var F = l.counters.getCounterValue(C.value), H = E && SA(E) ? xu.parse(l.context, E.value) : 3;
                  g.appendChild(f.createTextNode(Xo(F, H, !1)));
                }
              } else if (h.name === "counters") {
                var k = h.values.filter(bn), C = k[0], K = k[1], E = k[2];
                if (C && SA(C)) {
                  var R = l.counters.getCounterValues(C.value), O = E && SA(E) ? xu.parse(l.context, E.value) : 3, P = K && K.type === 0 ? K.value : "", X = R.map(function(pA) {
                    return Xo(pA, O, !1);
                  }).join(P);
                  g.appendChild(f.createTextNode(X));
                }
              }
            } else if (h.type === 20)
              switch (h.value) {
                case "open-quote":
                  g.appendChild(f.createTextNode(np(B.quotes, l.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  g.appendChild(f.createTextNode(np(B.quotes, --l.quoteDepth, !1)));
                  break;
                default:
                  g.appendChild(f.createTextNode(h.value));
              }
          }), g.className = Tu + " " + Du;
          var p = s === _o.BEFORE ? " " + Tu : " " + Du;
          return Vs(n) ? n.className.baseValue += p : n.className += p, g;
        }
      }
    }, e.destroy = function(r) {
      return r.parentNode ? (r.parentNode.removeChild(r), !0) : !1;
    }, e;
  }()
), _o;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(_o || (_o = {}));
var JI = function(e, r) {
  var n = e.createElement("iframe");
  return n.className = "html2canvas-container", n.style.visibility = "hidden", n.style.position = "fixed", n.style.left = "-10000px", n.style.top = "0px", n.style.border = "0", n.width = r.width.toString(), n.height = r.height.toString(), n.scrolling = "no", n.setAttribute(k0, "true"), e.body.appendChild(n), n;
}, YI = function(e) {
  return new Promise(function(r) {
    if (e.complete) {
      r();
      return;
    }
    if (!e.src) {
      r();
      return;
    }
    e.onload = r, e.onerror = r;
  });
}, ZI = function(e) {
  return Promise.all([].slice.call(e.images, 0).map(YI));
}, $I = function(e) {
  return new Promise(function(r, n) {
    var o = e.contentWindow;
    if (!o)
      return n("No window assigned for iframe");
    var s = o.document;
    o.onload = e.onload = function() {
      o.onload = e.onload = null;
      var l = setInterval(function() {
        s.body.childNodes.length > 0 && s.readyState === "complete" && (clearInterval(l), r(e));
      }, 50);
    };
  });
}, qI = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], Xc = function(e, r) {
  for (var n = e.length - 1; n >= 0; n--) {
    var o = e.item(n);
    qI.indexOf(o) === -1 && r.style.setProperty(o, e.getPropertyValue(o));
  }
  return r;
}, AH = function(e) {
  var r = "";
  return e && (r += "<!DOCTYPE ", e.name && (r += e.name), e.internalSubset && (r += e.internalSubset), e.publicId && (r += '"' + e.publicId + '"'), e.systemId && (r += '"' + e.systemId + '"'), r += ">"), r;
}, eH = function(e, r, n) {
  e && e.defaultView && (r !== e.defaultView.pageXOffset || n !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(r, n);
}, tH = function(e) {
  var r = e[0], n = e[1], o = e[2];
  r.scrollLeft = n, r.scrollTop = o;
}, rH = ":before", nH = ":after", Tu = "___html2canvas___pseudoelement_before", Du = "___html2canvas___pseudoelement_after", Hp = `{
    content: "" !important;
    display: none !important;
}`, oH = function(e) {
  iH(e, "." + Tu + rH + Hp + `
         .` + Du + nH + Hp);
}, iH = function(e, r) {
  var n = e.ownerDocument;
  if (n) {
    var o = n.createElement("style");
    o.textContent = r, e.appendChild(o);
  }
}, R0 = (
  /** @class */
  function() {
    function e() {
    }
    return e.getOrigin = function(r) {
      var n = e._link;
      return n ? (n.href = r, n.href = n.href, n.protocol + n.hostname + n.port) : "about:blank";
    }, e.isSameOrigin = function(r) {
      return e.getOrigin(r) === e._origin;
    }, e.setContext = function(r) {
      e._link = r.document.createElement("a"), e._origin = e.getOrigin(r.location.href);
    }, e._origin = "about:blank", e;
  }()
), sH = (
  /** @class */
  function() {
    function e(r, n) {
      this.context = r, this._options = n, this._cache = {};
    }
    return e.prototype.addImage = function(r) {
      var n = Promise.resolve();
      return this.has(r) || (Jc(r) || uH(r)) && (this._cache[r] = this.loadImage(r)).catch(function() {
      }), n;
    }, e.prototype.match = function(r) {
      return this._cache[r];
    }, e.prototype.loadImage = function(r) {
      return he(this, void 0, void 0, function() {
        var n, o, s, l, u = this;
        return Be(this, function(f) {
          switch (f.label) {
            case 0:
              return n = R0.isSameOrigin(r), o = !zc(r) && this._options.useCORS === !0 && ae.SUPPORT_CORS_IMAGES && !n, s = !zc(r) && !n && !Jc(r) && typeof this._options.proxy == "string" && ae.SUPPORT_CORS_XHR && !o, !n && this._options.allowTaint === !1 && !zc(r) && !Jc(r) && !s && !o ? [
                2
                /*return*/
              ] : (l = r, s ? [4, this.proxy(l)] : [3, 2]);
            case 1:
              l = f.sent(), f.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + r.substring(0, 256)), [4, new Promise(function(B, g) {
                var p = new Image();
                p.onload = function() {
                  return B(p);
                }, p.onerror = g, (fH(l) || o) && (p.crossOrigin = "anonymous"), p.src = l, p.complete === !0 && setTimeout(function() {
                  return B(p);
                }, 500), u._options.imageTimeout > 0 && setTimeout(function() {
                  return g("Timed out (" + u._options.imageTimeout + "ms) loading image");
                }, u._options.imageTimeout);
              })];
            case 3:
              return [2, f.sent()];
          }
        });
      });
    }, e.prototype.has = function(r) {
      return typeof this._cache[r] < "u";
    }, e.prototype.keys = function() {
      return Promise.resolve(Object.keys(this._cache));
    }, e.prototype.proxy = function(r) {
      var n = this, o = this._options.proxy;
      if (!o)
        throw new Error("No proxy defined");
      var s = r.substring(0, 256);
      return new Promise(function(l, u) {
        var f = ae.SUPPORT_RESPONSE_TYPE ? "blob" : "text", B = new XMLHttpRequest();
        B.onload = function() {
          if (B.status === 200)
            if (f === "text")
              l(B.response);
            else {
              var h = new FileReader();
              h.addEventListener("load", function() {
                return l(h.result);
              }, !1), h.addEventListener("error", function(v) {
                return u(v);
              }, !1), h.readAsDataURL(B.response);
            }
          else
            u("Failed to proxy resource " + s + " with status code " + B.status);
        }, B.onerror = u;
        var g = o.indexOf("?") > -1 ? "&" : "?";
        if (B.open("GET", "" + o + g + "url=" + encodeURIComponent(r) + "&responseType=" + f), f !== "text" && B instanceof XMLHttpRequest && (B.responseType = f), n._options.imageTimeout) {
          var p = n._options.imageTimeout;
          B.timeout = p, B.ontimeout = function() {
            return u("Timed out (" + p + "ms) proxying " + s);
          };
        }
        B.send();
      });
    }, e;
  }()
), aH = /^data:image\/svg\+xml/i, lH = /^data:image\/.*;base64,/i, cH = /^data:image\/.*/i, uH = function(e) {
  return ae.SUPPORT_SVG_DRAWING || !dH(e);
}, zc = function(e) {
  return cH.test(e);
}, fH = function(e) {
  return lH.test(e);
}, Jc = function(e) {
  return e.substr(0, 4) === "blob";
}, dH = function(e) {
  return e.substr(-3).toLowerCase() === "svg" || aH.test(e);
}, q = (
  /** @class */
  function() {
    function e(r, n) {
      this.type = 0, this.x = r, this.y = n;
    }
    return e.prototype.add = function(r, n) {
      return new e(this.x + r, this.y + n);
    }, e;
  }()
), mn = function(e, r, n) {
  return new q(e.x + (r.x - e.x) * n, e.y + (r.y - e.y) * n);
}, Ls = (
  /** @class */
  function() {
    function e(r, n, o, s) {
      this.type = 1, this.start = r, this.startControl = n, this.endControl = o, this.end = s;
    }
    return e.prototype.subdivide = function(r, n) {
      var o = mn(this.start, this.startControl, r), s = mn(this.startControl, this.endControl, r), l = mn(this.endControl, this.end, r), u = mn(o, s, r), f = mn(s, l, r), B = mn(u, f, r);
      return n ? new e(this.start, o, u, B) : new e(B, f, l, this.end);
    }, e.prototype.add = function(r, n) {
      return new e(this.start.add(r, n), this.startControl.add(r, n), this.endControl.add(r, n), this.end.add(r, n));
    }, e.prototype.reverse = function() {
      return new e(this.end, this.endControl, this.startControl, this.start);
    }, e;
  }()
), Pe = function(e) {
  return e.type === 1;
}, BH = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(r) {
      var n = r.styles, o = r.bounds, s = Ko(n.borderTopLeftRadius, o.width, o.height), l = s[0], u = s[1], f = Ko(n.borderTopRightRadius, o.width, o.height), B = f[0], g = f[1], p = Ko(n.borderBottomRightRadius, o.width, o.height), h = p[0], v = p[1], U = Ko(n.borderBottomLeftRadius, o.width, o.height), Q = U[0], C = U[1], E = [];
      E.push((l + B) / o.width), E.push((Q + h) / o.width), E.push((u + C) / o.height), E.push((g + v) / o.height);
      var F = Math.max.apply(Math, E);
      F > 1 && (l /= F, u /= F, B /= F, g /= F, h /= F, v /= F, Q /= F, C /= F);
      var H = o.width - B, k = o.height - v, K = o.width - h, R = o.height - C, O = n.borderTopWidth, P = n.borderRightWidth, X = n.borderBottomWidth, J = n.borderLeftWidth, sA = LA(n.paddingTop, r.bounds.width), pA = LA(n.paddingRight, r.bounds.width), Z = LA(n.paddingBottom, r.bounds.width), $ = LA(n.paddingLeft, r.bounds.width);
      this.topLeftBorderDoubleOuterBox = l > 0 || u > 0 ? OA(o.left + J / 3, o.top + O / 3, l - J / 3, u - O / 3, xA.TOP_LEFT) : new q(o.left + J / 3, o.top + O / 3), this.topRightBorderDoubleOuterBox = l > 0 || u > 0 ? OA(o.left + H, o.top + O / 3, B - P / 3, g - O / 3, xA.TOP_RIGHT) : new q(o.left + o.width - P / 3, o.top + O / 3), this.bottomRightBorderDoubleOuterBox = h > 0 || v > 0 ? OA(o.left + K, o.top + k, h - P / 3, v - X / 3, xA.BOTTOM_RIGHT) : new q(o.left + o.width - P / 3, o.top + o.height - X / 3), this.bottomLeftBorderDoubleOuterBox = Q > 0 || C > 0 ? OA(o.left + J / 3, o.top + R, Q - J / 3, C - X / 3, xA.BOTTOM_LEFT) : new q(o.left + J / 3, o.top + o.height - X / 3), this.topLeftBorderDoubleInnerBox = l > 0 || u > 0 ? OA(o.left + J * 2 / 3, o.top + O * 2 / 3, l - J * 2 / 3, u - O * 2 / 3, xA.TOP_LEFT) : new q(o.left + J * 2 / 3, o.top + O * 2 / 3), this.topRightBorderDoubleInnerBox = l > 0 || u > 0 ? OA(o.left + H, o.top + O * 2 / 3, B - P * 2 / 3, g - O * 2 / 3, xA.TOP_RIGHT) : new q(o.left + o.width - P * 2 / 3, o.top + O * 2 / 3), this.bottomRightBorderDoubleInnerBox = h > 0 || v > 0 ? OA(o.left + K, o.top + k, h - P * 2 / 3, v - X * 2 / 3, xA.BOTTOM_RIGHT) : new q(o.left + o.width - P * 2 / 3, o.top + o.height - X * 2 / 3), this.bottomLeftBorderDoubleInnerBox = Q > 0 || C > 0 ? OA(o.left + J * 2 / 3, o.top + R, Q - J * 2 / 3, C - X * 2 / 3, xA.BOTTOM_LEFT) : new q(o.left + J * 2 / 3, o.top + o.height - X * 2 / 3), this.topLeftBorderStroke = l > 0 || u > 0 ? OA(o.left + J / 2, o.top + O / 2, l - J / 2, u - O / 2, xA.TOP_LEFT) : new q(o.left + J / 2, o.top + O / 2), this.topRightBorderStroke = l > 0 || u > 0 ? OA(o.left + H, o.top + O / 2, B - P / 2, g - O / 2, xA.TOP_RIGHT) : new q(o.left + o.width - P / 2, o.top + O / 2), this.bottomRightBorderStroke = h > 0 || v > 0 ? OA(o.left + K, o.top + k, h - P / 2, v - X / 2, xA.BOTTOM_RIGHT) : new q(o.left + o.width - P / 2, o.top + o.height - X / 2), this.bottomLeftBorderStroke = Q > 0 || C > 0 ? OA(o.left + J / 2, o.top + R, Q - J / 2, C - X / 2, xA.BOTTOM_LEFT) : new q(o.left + J / 2, o.top + o.height - X / 2), this.topLeftBorderBox = l > 0 || u > 0 ? OA(o.left, o.top, l, u, xA.TOP_LEFT) : new q(o.left, o.top), this.topRightBorderBox = B > 0 || g > 0 ? OA(o.left + H, o.top, B, g, xA.TOP_RIGHT) : new q(o.left + o.width, o.top), this.bottomRightBorderBox = h > 0 || v > 0 ? OA(o.left + K, o.top + k, h, v, xA.BOTTOM_RIGHT) : new q(o.left + o.width, o.top + o.height), this.bottomLeftBorderBox = Q > 0 || C > 0 ? OA(o.left, o.top + R, Q, C, xA.BOTTOM_LEFT) : new q(o.left, o.top + o.height), this.topLeftPaddingBox = l > 0 || u > 0 ? OA(o.left + J, o.top + O, Math.max(0, l - J), Math.max(0, u - O), xA.TOP_LEFT) : new q(o.left + J, o.top + O), this.topRightPaddingBox = B > 0 || g > 0 ? OA(o.left + Math.min(H, o.width - P), o.top + O, H > o.width + P ? 0 : Math.max(0, B - P), Math.max(0, g - O), xA.TOP_RIGHT) : new q(o.left + o.width - P, o.top + O), this.bottomRightPaddingBox = h > 0 || v > 0 ? OA(o.left + Math.min(K, o.width - J), o.top + Math.min(k, o.height - X), Math.max(0, h - P), Math.max(0, v - X), xA.BOTTOM_RIGHT) : new q(o.left + o.width - P, o.top + o.height - X), this.bottomLeftPaddingBox = Q > 0 || C > 0 ? OA(o.left + J, o.top + Math.min(R, o.height - X), Math.max(0, Q - J), Math.max(0, C - X), xA.BOTTOM_LEFT) : new q(o.left + J, o.top + o.height - X), this.topLeftContentBox = l > 0 || u > 0 ? OA(o.left + J + $, o.top + O + sA, Math.max(0, l - (J + $)), Math.max(0, u - (O + sA)), xA.TOP_LEFT) : new q(o.left + J + $, o.top + O + sA), this.topRightContentBox = B > 0 || g > 0 ? OA(o.left + Math.min(H, o.width + J + $), o.top + O + sA, H > o.width + J + $ ? 0 : B - J + $, g - (O + sA), xA.TOP_RIGHT) : new q(o.left + o.width - (P + pA), o.top + O + sA), this.bottomRightContentBox = h > 0 || v > 0 ? OA(o.left + Math.min(K, o.width - (J + $)), o.top + Math.min(k, o.height + O + sA), Math.max(0, h - (P + pA)), v - (X + Z), xA.BOTTOM_RIGHT) : new q(o.left + o.width - (P + pA), o.top + o.height - (X + Z)), this.bottomLeftContentBox = Q > 0 || C > 0 ? OA(o.left + J + $, o.top + R, Math.max(0, Q - (J + $)), C - (X + Z), xA.BOTTOM_LEFT) : new q(o.left + J + $, o.top + o.height - (X + Z));
    }
    return e;
  }()
), xA;
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(xA || (xA = {}));
var OA = function(e, r, n, o, s) {
  var l = 4 * ((Math.sqrt(2) - 1) / 3), u = n * l, f = o * l, B = e + n, g = r + o;
  switch (s) {
    case xA.TOP_LEFT:
      return new Ls(new q(e, g), new q(e, g - f), new q(B - u, r), new q(B, r));
    case xA.TOP_RIGHT:
      return new Ls(new q(e, r), new q(e + u, r), new q(B, g - f), new q(B, g));
    case xA.BOTTOM_RIGHT:
      return new Ls(new q(B, r), new q(B, r + f), new q(e + u, g), new q(e, g));
    case xA.BOTTOM_LEFT:
    default:
      return new Ls(new q(B, g), new q(B - u, g), new q(e, r + f), new q(e, r));
  }
}, na = function(e) {
  return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox];
}, gH = function(e) {
  return [
    e.topLeftContentBox,
    e.topRightContentBox,
    e.bottomRightContentBox,
    e.bottomLeftContentBox
  ];
}, oa = function(e) {
  return [
    e.topLeftPaddingBox,
    e.topRightPaddingBox,
    e.bottomRightPaddingBox,
    e.bottomLeftPaddingBox
  ];
}, pH = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(r, n, o) {
      this.offsetX = r, this.offsetY = n, this.matrix = o, this.type = 0, this.target = 6;
    }
    return e;
  }()
), Ts = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(r, n) {
      this.path = r, this.target = n, this.type = 1;
    }
    return e;
  }()
), wH = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(r) {
      this.opacity = r, this.type = 2, this.target = 6;
    }
    return e;
  }()
), hH = function(e) {
  return e.type === 0;
}, O0 = function(e) {
  return e.type === 1;
}, vH = function(e) {
  return e.type === 2;
}, Sp = function(e, r) {
  return e.length === r.length ? e.some(function(n, o) {
    return n === r[o];
  }) : !1;
}, mH = function(e, r, n, o, s) {
  return e.map(function(l, u) {
    switch (u) {
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
}, N0 = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(r) {
      this.element = r, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return e;
  }()
), M0 = (
  /** @class */
  function() {
    function e(r, n) {
      if (this.container = r, this.parent = n, this.effects = [], this.curves = new BH(this.container), this.container.styles.opacity < 1 && this.effects.push(new wH(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var o = this.container.bounds.left + this.container.styles.transformOrigin[0].number, s = this.container.bounds.top + this.container.styles.transformOrigin[1].number, l = this.container.styles.transform;
        this.effects.push(new pH(o, s, l));
      }
      if (this.container.styles.overflowX !== 0) {
        var u = na(this.curves), f = oa(this.curves);
        Sp(u, f) ? this.effects.push(new Ts(
          u,
          6
          /* CONTENT */
        )) : (this.effects.push(new Ts(
          u,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new Ts(
          f,
          4
          /* CONTENT */
        )));
      }
    }
    return e.prototype.getEffects = function(r) {
      for (var n = [
        2,
        3
        /* FIXED */
      ].indexOf(this.container.styles.position) === -1, o = this.parent, s = this.effects.slice(0); o; ) {
        var l = o.effects.filter(function(B) {
          return !O0(B);
        });
        if (n || o.container.styles.position !== 0 || !o.parent) {
          if (s.unshift.apply(s, l), n = [
            2,
            3
            /* FIXED */
          ].indexOf(o.container.styles.position) === -1, o.container.styles.overflowX !== 0) {
            var u = na(o.curves), f = oa(o.curves);
            Sp(u, f) || s.unshift(new Ts(
              f,
              6
              /* CONTENT */
            ));
          }
        } else
          s.unshift.apply(s, l);
        o = o.parent;
      }
      return s.filter(function(B) {
        return qA(B.target, r);
      });
    }, e;
  }()
), Ku = function(e, r, n, o) {
  e.container.elements.forEach(function(s) {
    var l = qA(
      s.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), u = qA(
      s.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), f = new M0(s, e);
    qA(
      s.styles.display,
      2048
      /* LIST_ITEM */
    ) && o.push(f);
    var B = qA(
      s.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : o;
    if (l || u) {
      var g = l || s.styles.isPositioned() ? n : r, p = new N0(f);
      if (s.styles.isPositioned() || s.styles.opacity < 1 || s.styles.isTransformed()) {
        var h = s.styles.zIndex.order;
        if (h < 0) {
          var v = 0;
          g.negativeZIndex.some(function(Q, C) {
            return h > Q.element.container.styles.zIndex.order ? (v = C, !1) : v > 0;
          }), g.negativeZIndex.splice(v, 0, p);
        } else if (h > 0) {
          var U = 0;
          g.positiveZIndex.some(function(Q, C) {
            return h >= Q.element.container.styles.zIndex.order ? (U = C + 1, !1) : U > 0;
          }), g.positiveZIndex.splice(U, 0, p);
        } else
          g.zeroOrAutoZIndexOrTransformedOrOpacity.push(p);
      } else
        s.styles.isFloating() ? g.nonPositionedFloats.push(p) : g.nonPositionedInlineLevel.push(p);
      Ku(f, p, l ? p : n, B);
    } else
      s.styles.isInlineLevel() ? r.inlineLevel.push(f) : r.nonInlineLevel.push(f), Ku(f, r, n, B);
    qA(
      s.flags,
      8
      /* IS_LIST_OWNER */
    ) && P0(s, B);
  });
}, P0 = function(e, r) {
  for (var n = e instanceof Su ? e.start : 1, o = e instanceof Su ? e.reversed : !1, s = 0; s < r.length; s++) {
    var l = r[s];
    l.container instanceof U0 && typeof l.container.value == "number" && l.container.value !== 0 && (n = l.container.value), l.listValue = Xo(n, l.container.styles.listStyleType, !0), n += o ? -1 : 1;
  }
}, CH = function(e) {
  var r = new M0(e, null), n = new N0(r), o = [];
  return Ku(r, n, n, o), P0(r.container, o), n;
}, bp = function(e, r) {
  switch (r) {
    case 0:
      return Ve(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
    case 1:
      return Ve(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
    case 2:
      return Ve(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return Ve(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox);
  }
}, QH = function(e, r) {
  switch (r) {
    case 0:
      return Ve(e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox, e.topRightBorderBox, e.topRightBorderDoubleOuterBox);
    case 1:
      return Ve(e.topRightBorderBox, e.topRightBorderDoubleOuterBox, e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox);
    case 2:
      return Ve(e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox, e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return Ve(e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox, e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox);
  }
}, yH = function(e, r) {
  switch (r) {
    case 0:
      return Ve(e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox, e.topRightBorderDoubleInnerBox, e.topRightPaddingBox);
    case 1:
      return Ve(e.topRightBorderDoubleInnerBox, e.topRightPaddingBox, e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox);
    case 2:
      return Ve(e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox, e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return Ve(e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox, e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox);
  }
}, UH = function(e, r) {
  switch (r) {
    case 0:
      return Ds(e.topLeftBorderStroke, e.topRightBorderStroke);
    case 1:
      return Ds(e.topRightBorderStroke, e.bottomRightBorderStroke);
    case 2:
      return Ds(e.bottomRightBorderStroke, e.bottomLeftBorderStroke);
    case 3:
    default:
      return Ds(e.bottomLeftBorderStroke, e.topLeftBorderStroke);
  }
}, Ds = function(e, r) {
  var n = [];
  return Pe(e) ? n.push(e.subdivide(0.5, !1)) : n.push(e), Pe(r) ? n.push(r.subdivide(0.5, !0)) : n.push(r), n;
}, Ve = function(e, r, n, o) {
  var s = [];
  return Pe(e) ? s.push(e.subdivide(0.5, !1)) : s.push(e), Pe(n) ? s.push(n.subdivide(0.5, !0)) : s.push(n), Pe(o) ? s.push(o.subdivide(0.5, !0).reverse()) : s.push(o), Pe(r) ? s.push(r.subdivide(0.5, !1).reverse()) : s.push(r), s;
}, _0 = function(e) {
  var r = e.bounds, n = e.styles;
  return r.add(n.borderLeftWidth, n.borderTopWidth, -(n.borderRightWidth + n.borderLeftWidth), -(n.borderTopWidth + n.borderBottomWidth));
}, ia = function(e) {
  var r = e.styles, n = e.bounds, o = LA(r.paddingLeft, n.width), s = LA(r.paddingRight, n.width), l = LA(r.paddingTop, n.width), u = LA(r.paddingBottom, n.width);
  return n.add(o + r.borderLeftWidth, l + r.borderTopWidth, -(r.borderRightWidth + r.borderLeftWidth + o + s), -(r.borderTopWidth + r.borderBottomWidth + l + u));
}, FH = function(e, r) {
  return e === 0 ? r.bounds : e === 2 ? ia(r) : _0(r);
}, EH = function(e, r) {
  return e === 0 ? r.bounds : e === 2 ? ia(r) : _0(r);
}, Yc = function(e, r, n) {
  var o = FH(yn(e.styles.backgroundOrigin, r), e), s = EH(yn(e.styles.backgroundClip, r), e), l = xH(yn(e.styles.backgroundSize, r), n, o), u = l[0], f = l[1], B = Ko(yn(e.styles.backgroundPosition, r), o.width - u, o.height - f), g = IH(yn(e.styles.backgroundRepeat, r), B, l, o, s), p = Math.round(o.left + B[0]), h = Math.round(o.top + B[1]);
  return [g, p, h, u, f];
}, Cn = function(e) {
  return SA(e) && e.value === Hn.AUTO;
}, Ks = function(e) {
  return typeof e == "number";
}, xH = function(e, r, n) {
  var o = r[0], s = r[1], l = r[2], u = e[0], f = e[1];
  if (!u)
    return [0, 0];
  if (YA(u) && f && YA(f))
    return [LA(u, n.width), LA(f, n.height)];
  var B = Ks(l);
  if (SA(u) && (u.value === Hn.CONTAIN || u.value === Hn.COVER)) {
    if (Ks(l)) {
      var g = n.width / n.height;
      return g < l != (u.value === Hn.COVER) ? [n.width, n.width / l] : [n.height * l, n.height];
    }
    return [n.width, n.height];
  }
  var p = Ks(o), h = Ks(s), v = p || h;
  if (Cn(u) && (!f || Cn(f))) {
    if (p && h)
      return [o, s];
    if (!B && !v)
      return [n.width, n.height];
    if (v && B) {
      var U = p ? o : s * l, Q = h ? s : o / l;
      return [U, Q];
    }
    var C = p ? o : n.width, E = h ? s : n.height;
    return [C, E];
  }
  if (B) {
    var F = 0, H = 0;
    return YA(u) ? F = LA(u, n.width) : YA(f) && (H = LA(f, n.height)), Cn(u) ? F = H * l : (!f || Cn(f)) && (H = F / l), [F, H];
  }
  var k = null, K = null;
  if (YA(u) ? k = LA(u, n.width) : f && YA(f) && (K = LA(f, n.height)), k !== null && (!f || Cn(f)) && (K = p && h ? k / o * s : n.height), K !== null && Cn(u) && (k = p && h ? K / s * o : n.width), k !== null && K !== null)
    return [k, K];
  throw new Error("Unable to calculate background-size for element");
}, yn = function(e, r) {
  var n = e[r];
  return typeof n > "u" ? e[0] : n;
}, IH = function(e, r, n, o, s) {
  var l = r[0], u = r[1], f = n[0], B = n[1];
  switch (e) {
    case 2:
      return [
        new q(Math.round(o.left), Math.round(o.top + u)),
        new q(Math.round(o.left + o.width), Math.round(o.top + u)),
        new q(Math.round(o.left + o.width), Math.round(B + o.top + u)),
        new q(Math.round(o.left), Math.round(B + o.top + u))
      ];
    case 3:
      return [
        new q(Math.round(o.left + l), Math.round(o.top)),
        new q(Math.round(o.left + l + f), Math.round(o.top)),
        new q(Math.round(o.left + l + f), Math.round(o.height + o.top)),
        new q(Math.round(o.left + l), Math.round(o.height + o.top))
      ];
    case 1:
      return [
        new q(Math.round(o.left + l), Math.round(o.top + u)),
        new q(Math.round(o.left + l + f), Math.round(o.top + u)),
        new q(Math.round(o.left + l + f), Math.round(o.top + u + B)),
        new q(Math.round(o.left + l), Math.round(o.top + u + B))
      ];
    default:
      return [
        new q(Math.round(s.left), Math.round(s.top)),
        new q(Math.round(s.left + s.width), Math.round(s.top)),
        new q(Math.round(s.left + s.width), Math.round(s.height + s.top)),
        new q(Math.round(s.left), Math.round(s.height + s.top))
      ];
  }
}, HH = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Lp = "Hidden Text", SH = (
  /** @class */
  function() {
    function e(r) {
      this._data = {}, this._document = r;
    }
    return e.prototype.parseMetrics = function(r, n) {
      var o = this._document.createElement("div"), s = this._document.createElement("img"), l = this._document.createElement("span"), u = this._document.body;
      o.style.visibility = "hidden", o.style.fontFamily = r, o.style.fontSize = n, o.style.margin = "0", o.style.padding = "0", o.style.whiteSpace = "nowrap", u.appendChild(o), s.src = HH, s.width = 1, s.height = 1, s.style.margin = "0", s.style.padding = "0", s.style.verticalAlign = "baseline", l.style.fontFamily = r, l.style.fontSize = n, l.style.margin = "0", l.style.padding = "0", l.appendChild(this._document.createTextNode(Lp)), o.appendChild(l), o.appendChild(s);
      var f = s.offsetTop - l.offsetTop + 2;
      o.removeChild(l), o.appendChild(this._document.createTextNode(Lp)), o.style.lineHeight = "normal", s.style.verticalAlign = "super";
      var B = s.offsetTop - o.offsetTop + 2;
      return u.removeChild(o), { baseline: f, middle: B };
    }, e.prototype.getMetrics = function(r, n) {
      var o = r + " " + n;
      return typeof this._data[o] > "u" && (this._data[o] = this.parseMetrics(r, n)), this._data[o];
    }, e;
  }()
), V0 = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(r, n) {
      this.context = r, this.options = n;
    }
    return e;
  }()
), bH = 1e4, LH = (
  /** @class */
  function(e) {
    tt(r, e);
    function r(n, o) {
      var s = e.call(this, n, o) || this;
      return s._activeEffects = [], s.canvas = o.canvas ? o.canvas : document.createElement("canvas"), s.ctx = s.canvas.getContext("2d"), o.canvas || (s.canvas.width = Math.floor(o.width * o.scale), s.canvas.height = Math.floor(o.height * o.scale), s.canvas.style.width = o.width + "px", s.canvas.style.height = o.height + "px"), s.fontMetrics = new SH(document), s.ctx.scale(s.options.scale, s.options.scale), s.ctx.translate(-o.x, -o.y), s.ctx.textBaseline = "bottom", s._activeEffects = [], s.context.logger.debug("Canvas renderer initialized (" + o.width + "x" + o.height + ") with scale " + o.scale), s;
    }
    return r.prototype.applyEffects = function(n) {
      for (var o = this; this._activeEffects.length; )
        this.popEffect();
      n.forEach(function(s) {
        return o.applyEffect(s);
      });
    }, r.prototype.applyEffect = function(n) {
      this.ctx.save(), vH(n) && (this.ctx.globalAlpha = n.opacity), hH(n) && (this.ctx.translate(n.offsetX, n.offsetY), this.ctx.transform(n.matrix[0], n.matrix[1], n.matrix[2], n.matrix[3], n.matrix[4], n.matrix[5]), this.ctx.translate(-n.offsetX, -n.offsetY)), O0(n) && (this.path(n.path), this.ctx.clip()), this._activeEffects.push(n);
    }, r.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, r.prototype.renderStack = function(n) {
      return he(this, void 0, void 0, function() {
        var o;
        return Be(this, function(s) {
          switch (s.label) {
            case 0:
              return o = n.element.container.styles, o.isVisible() ? [4, this.renderStackContent(n)] : [3, 2];
            case 1:
              s.sent(), s.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.renderNode = function(n) {
      return he(this, void 0, void 0, function() {
        return Be(this, function(o) {
          switch (o.label) {
            case 0:
              if (qA(
                n.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return n.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(n)] : [3, 3];
            case 1:
              return o.sent(), [4, this.renderNodeContent(n)];
            case 2:
              o.sent(), o.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.renderTextWithLetterSpacing = function(n, o, s) {
      var l = this;
      if (o === 0)
        this.ctx.fillText(n.text, n.bounds.left, n.bounds.top + s);
      else {
        var u = af(n.text);
        u.reduce(function(f, B) {
          return l.ctx.fillText(B, f, n.bounds.top + s), f + l.ctx.measureText(B).width;
        }, n.bounds.left);
      }
    }, r.prototype.createFontStyle = function(n) {
      var o = n.fontVariant.filter(function(u) {
        return u === "normal" || u === "small-caps";
      }).join(""), s = RH(n.fontFamily).join(", "), l = $o(n.fontSize) ? "" + n.fontSize.number + n.fontSize.unit : n.fontSize.number + "px";
      return [
        [n.fontStyle, o, n.fontWeight, l, s].join(" "),
        s,
        l
      ];
    }, r.prototype.renderTextNode = function(n, o) {
      return he(this, void 0, void 0, function() {
        var s, l, u, f, B, g, p, h, v = this;
        return Be(this, function(U) {
          return s = this.createFontStyle(o), l = s[0], u = s[1], f = s[2], this.ctx.font = l, this.ctx.direction = o.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", B = this.fontMetrics.getMetrics(u, f), g = B.baseline, p = B.middle, h = o.paintOrder, n.textBounds.forEach(function(Q) {
            h.forEach(function(C) {
              switch (C) {
                case 0:
                  v.ctx.fillStyle = ne(o.color), v.renderTextWithLetterSpacing(Q, o.letterSpacing, g);
                  var E = o.textShadow;
                  E.length && Q.text.trim().length && (E.slice(0).reverse().forEach(function(F) {
                    v.ctx.shadowColor = ne(F.color), v.ctx.shadowOffsetX = F.offsetX.number * v.options.scale, v.ctx.shadowOffsetY = F.offsetY.number * v.options.scale, v.ctx.shadowBlur = F.blur.number, v.renderTextWithLetterSpacing(Q, o.letterSpacing, g);
                  }), v.ctx.shadowColor = "", v.ctx.shadowOffsetX = 0, v.ctx.shadowOffsetY = 0, v.ctx.shadowBlur = 0), o.textDecorationLine.length && (v.ctx.fillStyle = ne(o.textDecorationColor || o.color), o.textDecorationLine.forEach(function(F) {
                    switch (F) {
                      case 1:
                        v.ctx.fillRect(Q.bounds.left, Math.round(Q.bounds.top + g), Q.bounds.width, 1);
                        break;
                      case 2:
                        v.ctx.fillRect(Q.bounds.left, Math.round(Q.bounds.top), Q.bounds.width, 1);
                        break;
                      case 3:
                        v.ctx.fillRect(Q.bounds.left, Math.ceil(Q.bounds.top + p), Q.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  o.webkitTextStrokeWidth && Q.text.trim().length && (v.ctx.strokeStyle = ne(o.webkitTextStrokeColor), v.ctx.lineWidth = o.webkitTextStrokeWidth, v.ctx.lineJoin = window.chrome ? "miter" : "round", v.ctx.strokeText(Q.text, Q.bounds.left, Q.bounds.top + g)), v.ctx.strokeStyle = "", v.ctx.lineWidth = 0, v.ctx.lineJoin = "miter";
                  break;
              }
            });
          }), [
            2
            /*return*/
          ];
        });
      });
    }, r.prototype.renderReplacedElement = function(n, o, s) {
      if (s && n.intrinsicWidth > 0 && n.intrinsicHeight > 0) {
        var l = ia(n), u = oa(o);
        this.path(u), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(s, 0, 0, n.intrinsicWidth, n.intrinsicHeight, l.left, l.top, l.width, l.height), this.ctx.restore();
      }
    }, r.prototype.renderNodeContent = function(n) {
      return he(this, void 0, void 0, function() {
        var o, s, l, u, f, B, H, H, g, p, h, v, K, U, Q, R, C, E, F, H, k, K, R;
        return Be(this, function(O) {
          switch (O.label) {
            case 0:
              this.applyEffects(n.getEffects(
                4
                /* CONTENT */
              )), o = n.container, s = n.curves, l = o.styles, u = 0, f = o.textNodes, O.label = 1;
            case 1:
              return u < f.length ? (B = f[u], [4, this.renderTextNode(B, l)]) : [3, 4];
            case 2:
              O.sent(), O.label = 3;
            case 3:
              return u++, [3, 1];
            case 4:
              if (!(o instanceof C0)) return [3, 8];
              O.label = 5;
            case 5:
              return O.trys.push([5, 7, , 8]), [4, this.context.cache.match(o.src)];
            case 6:
              return H = O.sent(), this.renderReplacedElement(o, s, H), [3, 8];
            case 7:
              return O.sent(), this.context.logger.error("Error loading image " + o.src), [3, 8];
            case 8:
              if (o instanceof Q0 && this.renderReplacedElement(o, s, o.canvas), !(o instanceof y0)) return [3, 12];
              O.label = 9;
            case 9:
              return O.trys.push([9, 11, , 12]), [4, this.context.cache.match(o.svg)];
            case 10:
              return H = O.sent(), this.renderReplacedElement(o, s, H), [3, 12];
            case 11:
              return O.sent(), this.context.logger.error("Error loading svg " + o.svg.substring(0, 255)), [3, 12];
            case 12:
              return o instanceof x0 && o.tree ? (g = new r(this.context, {
                scale: this.options.scale,
                backgroundColor: o.backgroundColor,
                x: 0,
                y: 0,
                width: o.width,
                height: o.height
              }), [4, g.render(o.tree)]) : [3, 14];
            case 13:
              p = O.sent(), o.width && o.height && this.ctx.drawImage(p, 0, 0, o.width, o.height, o.bounds.left, o.bounds.top, o.bounds.width, o.bounds.height), O.label = 14;
            case 14:
              if (o instanceof lf && (h = Math.min(o.bounds.width, o.bounds.height), o.type === Aa ? o.checked && (this.ctx.save(), this.path([
                new q(o.bounds.left + h * 0.39363, o.bounds.top + h * 0.79),
                new q(o.bounds.left + h * 0.16, o.bounds.top + h * 0.5549),
                new q(o.bounds.left + h * 0.27347, o.bounds.top + h * 0.44071),
                new q(o.bounds.left + h * 0.39694, o.bounds.top + h * 0.5649),
                new q(o.bounds.left + h * 0.72983, o.bounds.top + h * 0.23),
                new q(o.bounds.left + h * 0.84, o.bounds.top + h * 0.34085),
                new q(o.bounds.left + h * 0.39363, o.bounds.top + h * 0.79)
              ]), this.ctx.fillStyle = ne(vp), this.ctx.fill(), this.ctx.restore()) : o.type === ea && o.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(o.bounds.left + h / 2, o.bounds.top + h / 2, h / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = ne(vp), this.ctx.fill(), this.ctx.restore())), TH(o) && o.value.length) {
                switch (v = this.createFontStyle(l), K = v[0], U = v[1], Q = this.fontMetrics.getMetrics(K, U).baseline, this.ctx.font = K, this.ctx.fillStyle = ne(l.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = KH(o.styles.textAlign), R = ia(o), C = 0, o.styles.textAlign) {
                  case 1:
                    C += R.width / 2;
                    break;
                  case 2:
                    C += R.width;
                    break;
                }
                E = R.add(C, 0, 0, -R.height / 2 + 1), this.ctx.save(), this.path([
                  new q(R.left, R.top),
                  new q(R.left + R.width, R.top),
                  new q(R.left + R.width, R.top + R.height),
                  new q(R.left, R.top + R.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Po(o.value, E), l.letterSpacing, Q), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!qA(
                o.styles.display,
                2048
                /* LIST_ITEM */
              )) return [3, 20];
              if (o.styles.listStyleImage === null) return [3, 19];
              if (F = o.styles.listStyleImage, F.type !== 0) return [3, 18];
              H = void 0, k = F.url, O.label = 15;
            case 15:
              return O.trys.push([15, 17, , 18]), [4, this.context.cache.match(k)];
            case 16:
              return H = O.sent(), this.ctx.drawImage(H, o.bounds.left - (H.width + 10), o.bounds.top), [3, 18];
            case 17:
              return O.sent(), this.context.logger.error("Error loading list-style-image " + k), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              n.listValue && o.styles.listStyleType !== -1 && (K = this.createFontStyle(l)[0], this.ctx.font = K, this.ctx.fillStyle = ne(l.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", R = new St(o.bounds.left, o.bounds.top + LA(o.styles.paddingTop, o.bounds.width), o.bounds.width, tp(l.lineHeight, l.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Po(n.listValue, R), l.letterSpacing, tp(l.lineHeight, l.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), O.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.renderStackContent = function(n) {
      return he(this, void 0, void 0, function() {
        var o, s, F, l, u, F, f, B, F, g, p, F, h, v, F, U, Q, F, C, E, F;
        return Be(this, function(H) {
          switch (H.label) {
            case 0:
              if (qA(
                n.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(n.element)];
            case 1:
              H.sent(), o = 0, s = n.negativeZIndex, H.label = 2;
            case 2:
              return o < s.length ? (F = s[o], [4, this.renderStack(F)]) : [3, 5];
            case 3:
              H.sent(), H.label = 4;
            case 4:
              return o++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(n.element)];
            case 6:
              H.sent(), l = 0, u = n.nonInlineLevel, H.label = 7;
            case 7:
              return l < u.length ? (F = u[l], [4, this.renderNode(F)]) : [3, 10];
            case 8:
              H.sent(), H.label = 9;
            case 9:
              return l++, [3, 7];
            case 10:
              f = 0, B = n.nonPositionedFloats, H.label = 11;
            case 11:
              return f < B.length ? (F = B[f], [4, this.renderStack(F)]) : [3, 14];
            case 12:
              H.sent(), H.label = 13;
            case 13:
              return f++, [3, 11];
            case 14:
              g = 0, p = n.nonPositionedInlineLevel, H.label = 15;
            case 15:
              return g < p.length ? (F = p[g], [4, this.renderStack(F)]) : [3, 18];
            case 16:
              H.sent(), H.label = 17;
            case 17:
              return g++, [3, 15];
            case 18:
              h = 0, v = n.inlineLevel, H.label = 19;
            case 19:
              return h < v.length ? (F = v[h], [4, this.renderNode(F)]) : [3, 22];
            case 20:
              H.sent(), H.label = 21;
            case 21:
              return h++, [3, 19];
            case 22:
              U = 0, Q = n.zeroOrAutoZIndexOrTransformedOrOpacity, H.label = 23;
            case 23:
              return U < Q.length ? (F = Q[U], [4, this.renderStack(F)]) : [3, 26];
            case 24:
              H.sent(), H.label = 25;
            case 25:
              return U++, [3, 23];
            case 26:
              C = 0, E = n.positiveZIndex, H.label = 27;
            case 27:
              return C < E.length ? (F = E[C], [4, this.renderStack(F)]) : [3, 30];
            case 28:
              H.sent(), H.label = 29;
            case 29:
              return C++, [3, 27];
            case 30:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.mask = function(n) {
      this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(n.slice(0).reverse()), this.ctx.closePath();
    }, r.prototype.path = function(n) {
      this.ctx.beginPath(), this.formatPath(n), this.ctx.closePath();
    }, r.prototype.formatPath = function(n) {
      var o = this;
      n.forEach(function(s, l) {
        var u = Pe(s) ? s.start : s;
        l === 0 ? o.ctx.moveTo(u.x, u.y) : o.ctx.lineTo(u.x, u.y), Pe(s) && o.ctx.bezierCurveTo(s.startControl.x, s.startControl.y, s.endControl.x, s.endControl.y, s.end.x, s.end.y);
      });
    }, r.prototype.renderRepeat = function(n, o, s, l) {
      this.path(n), this.ctx.fillStyle = o, this.ctx.translate(s, l), this.ctx.fill(), this.ctx.translate(-s, -l);
    }, r.prototype.resizeImage = function(n, o, s) {
      var l;
      if (n.width === o && n.height === s)
        return n;
      var u = (l = this.canvas.ownerDocument) !== null && l !== void 0 ? l : document, f = u.createElement("canvas");
      f.width = Math.max(1, o), f.height = Math.max(1, s);
      var B = f.getContext("2d");
      return B.drawImage(n, 0, 0, n.width, n.height, 0, 0, o, s), f;
    }, r.prototype.renderBackgroundImage = function(n) {
      return he(this, void 0, void 0, function() {
        var o, s, l, u, f, B;
        return Be(this, function(g) {
          switch (g.label) {
            case 0:
              o = n.styles.backgroundImage.length - 1, s = function(p) {
                var h, v, U, sA, oA, eA, $, nA, X, Q, sA, oA, eA, $, nA, C, E, F, H, k, K, R, O, P, X, J, sA, pA, Z, $, nA, gA, oA, eA, N, W, j, I, M, cA, uA, wA;
                return Be(this, function(hA) {
                  switch (hA.label) {
                    case 0:
                      if (p.type !== 0) return [3, 5];
                      h = void 0, v = p.url, hA.label = 1;
                    case 1:
                      return hA.trys.push([1, 3, , 4]), [4, l.context.cache.match(v)];
                    case 2:
                      return h = hA.sent(), [3, 4];
                    case 3:
                      return hA.sent(), l.context.logger.error("Error loading background-image " + v), [3, 4];
                    case 4:
                      return h && (U = Yc(n, o, [
                        h.width,
                        h.height,
                        h.width / h.height
                      ]), sA = U[0], oA = U[1], eA = U[2], $ = U[3], nA = U[4], X = l.ctx.createPattern(l.resizeImage(h, $, nA), "repeat"), l.renderRepeat(sA, X, oA, eA)), [3, 6];
                    case 5:
                      h1(p) ? (Q = Yc(n, o, [null, null, null]), sA = Q[0], oA = Q[1], eA = Q[2], $ = Q[3], nA = Q[4], C = d1(p.angle, $, nA), E = C[0], F = C[1], H = C[2], k = C[3], K = C[4], R = document.createElement("canvas"), R.width = $, R.height = nA, O = R.getContext("2d"), P = O.createLinearGradient(F, k, H, K), Ap(p.stops, E).forEach(function(Y) {
                        return P.addColorStop(Y.stop, ne(Y.color));
                      }), O.fillStyle = P, O.fillRect(0, 0, $, nA), $ > 0 && nA > 0 && (X = l.ctx.createPattern(R, "repeat"), l.renderRepeat(sA, X, oA, eA))) : v1(p) && (J = Yc(n, o, [
                        null,
                        null,
                        null
                      ]), sA = J[0], pA = J[1], Z = J[2], $ = J[3], nA = J[4], gA = p.position.length === 0 ? [nf] : p.position, oA = LA(gA[0], $), eA = LA(gA[gA.length - 1], nA), N = B1(p, oA, eA, $, nA), W = N[0], j = N[1], W > 0 && j > 0 && (I = l.ctx.createRadialGradient(pA + oA, Z + eA, 0, pA + oA, Z + eA, W), Ap(p.stops, W * 2).forEach(function(Y) {
                        return I.addColorStop(Y.stop, ne(Y.color));
                      }), l.path(sA), l.ctx.fillStyle = I, W !== j ? (M = n.bounds.left + 0.5 * n.bounds.width, cA = n.bounds.top + 0.5 * n.bounds.height, uA = j / W, wA = 1 / uA, l.ctx.save(), l.ctx.translate(M, cA), l.ctx.transform(1, 0, 0, uA, 0, 0), l.ctx.translate(-M, -cA), l.ctx.fillRect(pA, wA * (Z - cA) + cA, $, nA * wA), l.ctx.restore()) : l.ctx.fill())), hA.label = 6;
                    case 6:
                      return o--, [
                        2
                        /*return*/
                      ];
                  }
                });
              }, l = this, u = 0, f = n.styles.backgroundImage.slice(0).reverse(), g.label = 1;
            case 1:
              return u < f.length ? (B = f[u], [5, s(B)]) : [3, 4];
            case 2:
              g.sent(), g.label = 3;
            case 3:
              return u++, [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.renderSolidBorder = function(n, o, s) {
      return he(this, void 0, void 0, function() {
        return Be(this, function(l) {
          return this.path(bp(s, o)), this.ctx.fillStyle = ne(n), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, r.prototype.renderDoubleBorder = function(n, o, s, l) {
      return he(this, void 0, void 0, function() {
        var u, f;
        return Be(this, function(B) {
          switch (B.label) {
            case 0:
              return o < 3 ? [4, this.renderSolidBorder(n, s, l)] : [3, 2];
            case 1:
              return B.sent(), [
                2
                /*return*/
              ];
            case 2:
              return u = QH(l, s), this.path(u), this.ctx.fillStyle = ne(n), this.ctx.fill(), f = yH(l, s), this.path(f), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.renderNodeBackgroundAndBorders = function(n) {
      return he(this, void 0, void 0, function() {
        var o, s, l, u, f, B, g, p, h = this;
        return Be(this, function(v) {
          switch (v.label) {
            case 0:
              return this.applyEffects(n.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), o = n.container.styles, s = !sr(o.backgroundColor) || o.backgroundImage.length, l = [
                { style: o.borderTopStyle, color: o.borderTopColor, width: o.borderTopWidth },
                { style: o.borderRightStyle, color: o.borderRightColor, width: o.borderRightWidth },
                { style: o.borderBottomStyle, color: o.borderBottomColor, width: o.borderBottomWidth },
                { style: o.borderLeftStyle, color: o.borderLeftColor, width: o.borderLeftWidth }
              ], u = DH(yn(o.backgroundClip, 0), n.curves), s || o.boxShadow.length ? (this.ctx.save(), this.path(u), this.ctx.clip(), sr(o.backgroundColor) || (this.ctx.fillStyle = ne(o.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(n.container)]) : [3, 2];
            case 1:
              v.sent(), this.ctx.restore(), o.boxShadow.slice(0).reverse().forEach(function(U) {
                h.ctx.save();
                var Q = na(n.curves), C = U.inset ? 0 : bH, E = mH(Q, -C + (U.inset ? 1 : -1) * U.spread.number, (U.inset ? 1 : -1) * U.spread.number, U.spread.number * (U.inset ? -2 : 2), U.spread.number * (U.inset ? -2 : 2));
                U.inset ? (h.path(Q), h.ctx.clip(), h.mask(E)) : (h.mask(Q), h.ctx.clip(), h.path(E)), h.ctx.shadowOffsetX = U.offsetX.number + C, h.ctx.shadowOffsetY = U.offsetY.number, h.ctx.shadowColor = ne(U.color), h.ctx.shadowBlur = U.blur.number, h.ctx.fillStyle = U.inset ? ne(U.color) : "rgba(0,0,0,1)", h.ctx.fill(), h.ctx.restore();
              }), v.label = 2;
            case 2:
              f = 0, B = 0, g = l, v.label = 3;
            case 3:
              return B < g.length ? (p = g[B], p.style !== 0 && !sr(p.color) && p.width > 0 ? p.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
                p.color,
                p.width,
                f,
                n.curves,
                2
                /* DASHED */
              )] : [3, 11]) : [3, 13];
            case 4:
              return v.sent(), [3, 11];
            case 5:
              return p.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(
                p.color,
                p.width,
                f,
                n.curves,
                3
                /* DOTTED */
              )];
            case 6:
              return v.sent(), [3, 11];
            case 7:
              return p.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(p.color, p.width, f, n.curves)];
            case 8:
              return v.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(p.color, f, n.curves)];
            case 10:
              v.sent(), v.label = 11;
            case 11:
              f++, v.label = 12;
            case 12:
              return B++, [3, 3];
            case 13:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.renderDashedDottedBorder = function(n, o, s, l, u) {
      return he(this, void 0, void 0, function() {
        var f, B, g, p, h, v, U, Q, C, E, F, H, k, K, R, O, R, O;
        return Be(this, function(P) {
          return this.ctx.save(), f = UH(l, s), B = bp(l, s), u === 2 && (this.path(B), this.ctx.clip()), Pe(B[0]) ? (g = B[0].start.x, p = B[0].start.y) : (g = B[0].x, p = B[0].y), Pe(B[1]) ? (h = B[1].end.x, v = B[1].end.y) : (h = B[1].x, v = B[1].y), s === 0 || s === 2 ? U = Math.abs(g - h) : U = Math.abs(p - v), this.ctx.beginPath(), u === 3 ? this.formatPath(f) : this.formatPath(B.slice(0, 2)), Q = o < 3 ? o * 3 : o * 2, C = o < 3 ? o * 2 : o, u === 3 && (Q = o, C = o), E = !0, U <= Q * 2 ? E = !1 : U <= Q * 2 + C ? (F = U / (2 * Q + C), Q *= F, C *= F) : (H = Math.floor((U + C) / (Q + C)), k = (U - H * Q) / (H - 1), K = (U - (H + 1) * Q) / H, C = K <= 0 || Math.abs(C - k) < Math.abs(C - K) ? k : K), E && (u === 3 ? this.ctx.setLineDash([0, Q + C]) : this.ctx.setLineDash([Q, C])), u === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = o) : this.ctx.lineWidth = o * 2 + 1.1, this.ctx.strokeStyle = ne(n), this.ctx.stroke(), this.ctx.setLineDash([]), u === 2 && (Pe(B[0]) && (R = B[3], O = B[0], this.ctx.beginPath(), this.formatPath([new q(R.end.x, R.end.y), new q(O.start.x, O.start.y)]), this.ctx.stroke()), Pe(B[1]) && (R = B[1], O = B[2], this.ctx.beginPath(), this.formatPath([new q(R.end.x, R.end.y), new q(O.start.x, O.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, r.prototype.render = function(n) {
      return he(this, void 0, void 0, function() {
        var o;
        return Be(this, function(s) {
          switch (s.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = ne(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), o = CH(n), [4, this.renderStack(o)];
            case 1:
              return s.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, r;
  }(V0)
), TH = function(e) {
  return e instanceof E0 || e instanceof F0 ? !0 : e instanceof lf && e.type !== ea && e.type !== Aa;
}, DH = function(e, r) {
  switch (e) {
    case 0:
      return na(r);
    case 2:
      return gH(r);
    case 1:
    default:
      return oa(r);
  }
}, KH = function(e) {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, kH = ["-apple-system", "system-ui"], RH = function(e) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(r) {
    return kH.indexOf(r) === -1;
  }) : e;
}, OH = (
  /** @class */
  function(e) {
    tt(r, e);
    function r(n, o) {
      var s = e.call(this, n, o) || this;
      return s.canvas = o.canvas ? o.canvas : document.createElement("canvas"), s.ctx = s.canvas.getContext("2d"), s.options = o, s.canvas.width = Math.floor(o.width * o.scale), s.canvas.height = Math.floor(o.height * o.scale), s.canvas.style.width = o.width + "px", s.canvas.style.height = o.height + "px", s.ctx.scale(s.options.scale, s.options.scale), s.ctx.translate(-o.x, -o.y), s.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + o.width + "x" + o.height + " at " + o.x + "," + o.y + ") with scale " + o.scale), s;
    }
    return r.prototype.render = function(n) {
      return he(this, void 0, void 0, function() {
        var o, s;
        return Be(this, function(l) {
          switch (l.label) {
            case 0:
              return o = Hu(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, n), [4, NH(o)];
            case 1:
              return s = l.sent(), this.options.backgroundColor && (this.ctx.fillStyle = ne(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(s, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, r;
  }(V0)
), NH = function(e) {
  return new Promise(function(r, n) {
    var o = new Image();
    o.onload = function() {
      r(o);
    }, o.onerror = n, o.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, MH = (
  /** @class */
  function() {
    function e(r) {
      var n = r.id, o = r.enabled;
      this.id = n, this.enabled = o, this.start = Date.now();
    }
    return e.prototype.debug = function() {
      for (var r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, ds([this.id, this.getTime() + "ms"], r)) : this.info.apply(this, r));
    }, e.prototype.getTime = function() {
      return Date.now() - this.start;
    }, e.prototype.info = function() {
      for (var r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, ds([this.id, this.getTime() + "ms"], r));
    }, e.prototype.warn = function() {
      for (var r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, ds([this.id, this.getTime() + "ms"], r)) : this.info.apply(this, r));
    }, e.prototype.error = function() {
      for (var r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, ds([this.id, this.getTime() + "ms"], r)) : this.info.apply(this, r));
    }, e.instances = {}, e;
  }()
), PH = (
  /** @class */
  function() {
    function e(r, n) {
      var o;
      this.windowBounds = n, this.instanceName = "#" + e.instanceCount++, this.logger = new MH({ id: this.instanceName, enabled: r.logging }), this.cache = (o = r.cache) !== null && o !== void 0 ? o : new sH(this, r);
    }
    return e.instanceCount = 1, e;
  }()
), _H = function(e, r) {
  return r === void 0 && (r = {}), VH(e, r);
};
typeof window < "u" && R0.setContext(window);
var VH = function(e, r) {
  return he(void 0, void 0, void 0, function() {
    var n, o, s, l, u, f, B, g, p, h, v, U, Q, C, E, F, H, k, K, R, P, O, P, X, J, sA, pA, Z, $, nA, gA, oA, eA, N, W, j, I, M, cA, uA;
    return Be(this, function(wA) {
      switch (wA.label) {
        case 0:
          if (!e || typeof e != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (n = e.ownerDocument, !n)
            throw new Error("Element is not attached to a Document");
          if (o = n.defaultView, !o)
            throw new Error("Document is not attached to a Window");
          return s = {
            allowTaint: (X = r.allowTaint) !== null && X !== void 0 ? X : !1,
            imageTimeout: (J = r.imageTimeout) !== null && J !== void 0 ? J : 15e3,
            proxy: r.proxy,
            useCORS: (sA = r.useCORS) !== null && sA !== void 0 ? sA : !1
          }, l = Bu({ logging: (pA = r.logging) !== null && pA !== void 0 ? pA : !0, cache: r.cache }, s), u = {
            windowWidth: (Z = r.windowWidth) !== null && Z !== void 0 ? Z : o.innerWidth,
            windowHeight: ($ = r.windowHeight) !== null && $ !== void 0 ? $ : o.innerHeight,
            scrollX: (nA = r.scrollX) !== null && nA !== void 0 ? nA : o.pageXOffset,
            scrollY: (gA = r.scrollY) !== null && gA !== void 0 ? gA : o.pageYOffset
          }, f = new St(u.scrollX, u.scrollY, u.windowWidth, u.windowHeight), B = new PH(l, f), g = (oA = r.foreignObjectRendering) !== null && oA !== void 0 ? oA : !1, p = {
            allowTaint: (eA = r.allowTaint) !== null && eA !== void 0 ? eA : !1,
            onclone: r.onclone,
            ignoreElements: r.ignoreElements,
            inlineImages: g,
            copyStyles: g
          }, B.logger.debug("Starting document clone with size " + f.width + "x" + f.height + " scrolled to " + -f.left + "," + -f.top), h = new Ip(B, e, p), v = h.clonedReferenceElement, v ? [4, h.toIFrame(n, f)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return U = wA.sent(), Q = cf(v) || GI(v) ? mF(v.ownerDocument) : pa(B, v), C = Q.width, E = Q.height, F = Q.left, H = Q.top, k = GH(B, v, r.backgroundColor), K = {
            canvas: r.canvas,
            backgroundColor: k,
            scale: (W = (N = r.scale) !== null && N !== void 0 ? N : o.devicePixelRatio) !== null && W !== void 0 ? W : 1,
            x: ((j = r.x) !== null && j !== void 0 ? j : 0) + F,
            y: ((I = r.y) !== null && I !== void 0 ? I : 0) + H,
            width: (M = r.width) !== null && M !== void 0 ? M : Math.ceil(C),
            height: (cA = r.height) !== null && cA !== void 0 ? cA : Math.ceil(E)
          }, g ? (B.logger.debug("Document cloned, using foreign object rendering"), P = new OH(B, K), [4, P.render(v)]) : [3, 3];
        case 2:
          return R = wA.sent(), [3, 5];
        case 3:
          return B.logger.debug("Document cloned, element located at " + F + "," + H + " with size " + C + "x" + E + " using computed rendering"), B.logger.debug("Starting DOM parsing"), O = H0(B, v), k === O.styles.backgroundColor && (O.styles.backgroundColor = Et.TRANSPARENT), B.logger.debug("Starting renderer for element at " + K.x + "," + K.y + " with size " + K.width + "x" + K.height), P = new LH(B, K), [4, P.render(O)];
        case 4:
          R = wA.sent(), wA.label = 5;
        case 5:
          return (!((uA = r.removeContainer) !== null && uA !== void 0) || uA) && (Ip.destroy(U) || B.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), B.logger.debug("Finished rendering"), [2, R];
      }
    });
  });
}, GH = function(e, r, n) {
  var o = r.ownerDocument, s = o.documentElement ? No(e, getComputedStyle(o.documentElement).backgroundColor) : Et.TRANSPARENT, l = o.body ? No(e, getComputedStyle(o.body).backgroundColor) : Et.TRANSPARENT, u = typeof n == "string" ? No(e, n) : n === null ? Et.TRANSPARENT : 4294967295;
  return r === o.documentElement ? sr(s) ? sr(l) ? u : l : s : u;
};
const WH = ({
  setScreenshot: e,
  setIsCapturing: r,
  setIsOpen: n
}) => {
  const [o, s] = m.useState(null), [l, u] = m.useState(null), f = m.useRef(null), B = (h) => {
    s({ x: h.clientX, y: h.clientY });
  }, g = (h) => {
    o && u({ x: h.clientX, y: h.clientY });
  }, p = async () => {
    if (o && l) {
      const h = Math.min(o.x, l.x), v = Math.min(o.y, l.y), U = Math.abs(l.x - o.x), Q = Math.abs(l.y - o.y), E = (await _H(document.body, {
        x: h,
        y: v,
        width: U,
        height: Q,
        useCORS: !0,
        allowTaint: !0
      })).toDataURL("image/png");
      e(E), r(!1), n(!0);
    }
  };
  return m.useEffect(() => (document.addEventListener("mousedown", B), document.addEventListener("mousemove", g), document.addEventListener("mouseup", p), () => {
    document.removeEventListener("mousedown", B), document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", p);
  }), [o, l]), /* @__PURE__ */ b.jsx(
    "div",
    {
      ref: f,
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        cursor: "crosshair",
        zIndex: 9999
      },
      children: o && l && /* @__PURE__ */ b.jsx(
        "div",
        {
          style: {
            position: "absolute",
            left: Math.min(o.x, l.x),
            top: Math.min(o.y, l.y),
            width: Math.abs(l.x - o.x),
            height: Math.abs(l.y - o.y),
            border: "2px solid #4CAF50",
            backgroundColor: "rgba(76, 175, 80, 0.1)"
          }
        }
      )
    }
  );
}, jH = ({ toast: e }) => {
  const [r, n] = m.useState(!1);
  return m.useEffect(() => {
    if (e) {
      n(!0);
      const o = setTimeout(() => {
        n(!1);
      }, 5e3);
      return () => clearTimeout(o);
    }
  }, [e]), e ? /* @__PURE__ */ b.jsx(
    "div",
    {
      className: `fixed bottom-4 right-4 z-50 ${e.type === "error" ? "bg-red-500" : "bg-green-500"} text-white p-4 rounded-md shadow-lg transition-opacity duration-500 fbt-widget`,
      style: {
        opacity: r ? 1 : 0,
        transition: "opacity 0.5s ease-in-out"
      },
      children: e.message
    }
  ) : null;
}, Zc = '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}.fbt-widget{--background: 0 0% 100%;--foreground: 0 0% 3.9%;--card: 0 0% 100%;--card-foreground: 0 0% 3.9%;--popover: 0 0% 100%;--popover-foreground: 0 0% 3.9%;--primary: 0 0% 9%;--primary-foreground: 0 0% 98%;--secondary: 0 0% 96.1%;--secondary-foreground: 0 0% 9%;--muted: 0 0% 96.1%;--muted-foreground: 0 0% 45.1%;--accent: 0 0% 96.1%;--accent-foreground: 0 0% 9%;--destructive: 0 84.2% 60.2%;--destructive-foreground: 0 0% 98%;--border: 0 0% 89.8%;--input: 0 0% 89.8%;--ring: 0 0% 3.9%;--chart-1: 12 76% 61%;--chart-2: 173 58% 39%;--chart-3: 197 37% 24%;--chart-4: 43 74% 66%;--chart-5: 27 87% 67%;--radius: .5rem}.dark .fbt-widget{--background: 0 0% 3.9%;--foreground: 0 0% 98%;--card: 0 0% 3.9%;--card-foreground: 0 0% 98%;--popover: 0 0% 3.9%;--popover-foreground: 0 0% 98%;--primary: 0 0% 98%;--primary-foreground: 0 0% 9%;--secondary: 0 0% 14.9%;--secondary-foreground: 0 0% 98%;--muted: 0 0% 14.9%;--muted-foreground: 0 0% 63.9%;--accent: 0 0% 14.9%;--accent-foreground: 0 0% 98%;--destructive: 0 62.8% 30.6%;--destructive-foreground: 0 0% 98%;--border: 0 0% 14.9%;--input: 0 0% 14.9%;--ring: 0 0% 83.1%;--chart-1: 220 70% 50%;--chart-2: 160 60% 45%;--chart-3: 30 80% 55%;--chart-4: 280 65% 60%;--chart-5: 340 75% 55%}*{border-color:hsl(var(--border))}body{background-color:hsl(var(--background));color:hsl(var(--foreground))}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.-right-10{right:-2.5rem}.bottom-1\\/2{bottom:50%}.bottom-4{bottom:1rem}.left-\\[50\\%\\]{left:50%}.right-2{right:.5rem}.right-4{right:1rem}.top-4{top:1rem}.top-\\[50\\%\\]{top:50%}.z-50{z-index:50}.-mx-1{margin-left:-.25rem;margin-right:-.25rem}.my-1{margin-top:.25rem;margin-bottom:.25rem}.mb-1{margin-bottom:.25rem}.mr-2{margin-right:.5rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.h-10{height:2.5rem}.h-2{height:.5rem}.h-3\\.5{height:.875rem}.h-4{height:1rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-auto{height:auto}.h-px{height:1px}.max-h-96{max-height:24rem}.min-h-\\[60px\\]{min-height:60px}.w-2{width:.5rem}.w-3\\.5{width:.875rem}.w-4{width:1rem}.w-6{width:1.5rem}.w-9{width:2.25rem}.w-full{width:100%}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.max-w-full{max-width:100%}.max-w-lg{max-width:32rem}.origin-bottom-left{transform-origin:bottom left}.translate-x-\\[-50\\%\\]{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-\\[-50\\%\\]{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-90deg\\]{--tw-rotate: -90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-4{gap:1rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.375rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.375rem * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.whitespace-nowrap{white-space:nowrap}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xl{border-radius:.75rem}.rounded-b-lg{border-bottom-right-radius:var(--radius);border-bottom-left-radius:var(--radius)}.border{border-width:1px}.border-destructive\\/50{border-color:hsl(var(--destructive) / .5)}.border-input{border-color:hsl(var(--input))}.border-violet-300{--tw-border-opacity: 1;border-color:rgb(196 181 253 / var(--tw-border-opacity))}.bg-background{background-color:hsl(var(--background))}.bg-black\\/80{background-color:#000c}.bg-blue-400{--tw-bg-opacity: 1;background-color:rgb(96 165 250 / var(--tw-bg-opacity))}.bg-card{background-color:hsl(var(--card))}.bg-destructive{background-color:hsl(var(--destructive))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-green-500{--tw-bg-opacity: 1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))}.bg-muted{background-color:hsl(var(--muted))}.bg-popover{background-color:hsl(var(--popover))}.bg-primary{background-color:hsl(var(--primary))}.bg-red-300{--tw-bg-opacity: 1;background-color:rgb(252 165 165 / var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.bg-secondary{background-color:hsl(var(--secondary))}.bg-teal-300{--tw-bg-opacity: 1;background-color:rgb(94 234 212 / var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-violet-500{--tw-bg-opacity: 1;background-color:rgb(139 92 246 / var(--tw-bg-opacity))}.bg-yellow-300{--tw-bg-opacity: 1;background-color:rgb(253 224 71 / var(--tw-bg-opacity))}.fill-yellow-400{fill:#facc15}.p-0{padding:0}.p-1{padding:.25rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-8{padding-left:2rem;padding-right:2rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.pl-2{padding-left:.5rem}.pr-8{padding-right:2rem}.pt-0{padding-top:0}.text-center{text-align:center}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.text-card-foreground{color:hsl(var(--card-foreground))}.text-destructive{color:hsl(var(--destructive))}.text-destructive-foreground{color:hsl(var(--destructive-foreground))}.text-foreground{color:hsl(var(--foreground))}.text-gray-300{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-muted-foreground{color:hsl(var(--muted-foreground))}.text-popover-foreground{color:hsl(var(--popover-foreground))}.text-primary{color:hsl(var(--primary))}.text-primary-foreground{color:hsl(var(--primary-foreground))}.text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.text-secondary-foreground{color:hsl(var(--secondary-foreground))}.text-violet-700{--tw-text-opacity: 1;color:rgb(109 40 217 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.text-yellow-400{--tw-text-opacity: 1;color:rgb(250 204 21 / var(--tw-text-opacity))}.underline-offset-4{text-underline-offset:4px}.opacity-50{opacity:.5}.opacity-70{opacity:.7}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring-offset-background{--tw-ring-offset-color: hsl(var(--background))}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-500{transition-duration:.5s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}@keyframes enter{0%{opacity:var(--tw-enter-opacity, 1);transform:translate3d(var(--tw-enter-translate-x, 0),var(--tw-enter-translate-y, 0),0) scale3d(var(--tw-enter-scale, 1),var(--tw-enter-scale, 1),var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity, 1);transform:translate3d(var(--tw-exit-translate-x, 0),var(--tw-exit-translate-y, 0),0) scale3d(var(--tw-exit-scale, 1),var(--tw-exit-scale, 1),var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))}}.duration-200{animation-duration:.2s}.duration-500{animation-duration:.5s}.ease-in-out{animation-timing-function:cubic-bezier(.4,0,.2,1)}.placeholder\\:text-muted-foreground::-moz-placeholder{color:hsl(var(--muted-foreground))}.placeholder\\:text-muted-foreground::placeholder{color:hsl(var(--muted-foreground))}.hover\\:bg-accent:hover{background-color:hsl(var(--accent))}.hover\\:bg-destructive\\/90:hover{background-color:hsl(var(--destructive) / .9)}.hover\\:bg-primary\\/90:hover{background-color:hsl(var(--primary) / .9)}.hover\\:bg-secondary\\/80:hover{background-color:hsl(var(--secondary) / .8)}.hover\\:bg-violet-50:hover{--tw-bg-opacity: 1;background-color:rgb(245 243 255 / var(--tw-bg-opacity))}.hover\\:bg-violet-600:hover{--tw-bg-opacity: 1;background-color:rgb(124 58 237 / var(--tw-bg-opacity))}.hover\\:text-accent-foreground:hover{color:hsl(var(--accent-foreground))}.hover\\:text-violet-500:hover{--tw-text-opacity: 1;color:rgb(139 92 246 / var(--tw-text-opacity))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}.focus\\:bg-accent:focus{background-color:hsl(var(--accent))}.focus\\:text-accent-foreground:focus{color:hsl(var(--accent-foreground))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-1:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-ring:focus{--tw-ring-color: hsl(var(--ring))}.focus\\:ring-violet-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(139 92 246 / var(--tw-ring-opacity))}.focus\\:ring-offset-2:focus{--tw-ring-offset-width: 2px}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-1:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-ring:focus-visible{--tw-ring-color: hsl(var(--ring))}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.peer:disabled~.peer-disabled\\:cursor-not-allowed{cursor:not-allowed}.peer:disabled~.peer-disabled\\:opacity-70{opacity:.7}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y: .25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x: -.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x: .25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y: -.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=open\\]\\:bg-accent[data-state=open]{background-color:hsl(var(--accent))}.data-\\[state\\=open\\]\\:text-muted-foreground[data-state=open]{color:hsl(var(--muted-foreground))}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation-name:enter;animation-duration:.15s;--tw-enter-opacity: initial;--tw-enter-scale: initial;--tw-enter-rotate: initial;--tw-enter-translate-x: initial;--tw-enter-translate-y: initial}.data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation-name:exit;animation-duration:.15s;--tw-exit-opacity: initial;--tw-exit-scale: initial;--tw-exit-rotate: initial;--tw-exit-translate-x: initial;--tw-exit-translate-y: initial}.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--tw-exit-opacity: 0}.data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--tw-enter-opacity: 0}.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale: .95}.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale: .95}.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom]{--tw-enter-translate-y: -.5rem}.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left]{--tw-enter-translate-x: .5rem}.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right]{--tw-enter-translate-x: -.5rem}.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top]{--tw-enter-translate-y: .5rem}.data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state=closed]{--tw-exit-translate-x: -50%}.data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state=closed]{--tw-exit-translate-y: -48%}.data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state=open]{--tw-enter-translate-x: -50%}.data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state=open]{--tw-enter-translate-y: -48%}.dark\\:border-destructive:is(.dark *){border-color:hsl(var(--destructive))}@media (min-width: 640px){.sm\\:max-w-\\[425px\\]{max-width:425px}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}.sm\\:space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.sm\\:rounded-lg{border-radius:var(--radius)}.sm\\:text-left{text-align:left}}.\\[\\&\\>span\\]\\:line-clamp-1>span{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.\\[\\&\\>svg\\+div\\]\\:translate-y-\\[-3px\\]>svg+div{--tw-translate-y: -3px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\[\\&\\>svg\\]\\:absolute>svg{position:absolute}.\\[\\&\\>svg\\]\\:left-4>svg{left:1rem}.\\[\\&\\>svg\\]\\:top-4>svg{top:1rem}.\\[\\&\\>svg\\]\\:text-destructive>svg{color:hsl(var(--destructive))}.\\[\\&\\>svg\\]\\:text-foreground>svg{color:hsl(var(--foreground))}.\\[\\&\\>svg\\~\\*\\]\\:pl-7>svg~*{padding-left:1.75rem}.\\[\\&_p\\]\\:leading-relaxed p{line-height:1.625}', XH = ({ projectId: e }) => {
  const [r, n] = m.useState(!1), [o, s] = m.useState(!1), [l, u] = m.useState(null), [f, B] = m.useState(
    null
  );
  if (e == null)
    return /* @__PURE__ */ b.jsxs(Iw, { variant: "destructive", children: [
      /* @__PURE__ */ b.jsx("style", { children: Zc }),
      /* @__PURE__ */ b.jsx(Hw, { className: "fbt-widget items-center justify-center text-center", children: "Error" }),
      /* @__PURE__ */ b.jsx(Sw, { className: "fbt-widget items-center justify-center text-center", children: "Unable to load the feedback widget. Project ID is missing." }),
      /* @__PURE__ */ b.jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ b.jsxs(
        "a",
        {
          href: "https://www.feedbackthing.pro",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center space-x-2 text-sm text-gray-500 hover:text-violet-500 transition-colors",
          children: [
            /* @__PURE__ */ b.jsx(
              "img",
              {
                src: "https://www.feedbackthing.pro/favicon.ico",
                alt: "Feedbackthing Logo",
                className: "h-4 w-4"
              }
            ),
            /* @__PURE__ */ b.jsx("span", { children: "Powered by feedbackthing.pro" })
          ]
        }
      ) })
    ] });
  const g = () => {
    n(!1), setTimeout(() => {
      s(!0);
    }, 100);
  };
  return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx("style", { children: Zc }),
    /* @__PURE__ */ b.jsxs(By, { open: r, onOpenChange: n, children: [
      /* @__PURE__ */ b.jsx(gy, { asChild: !0, children: /* @__PURE__ */ b.jsx(Gs, { className: "fbt-widget fixed -right-10 bottom-1/2 origin-bottom-left rotate-[-90deg] bg-violet-500 px-4 py-2 text-white hover:bg-violet-600", children: "Feedback" }) }),
      /* @__PURE__ */ b.jsxs(Fw, { className: "fbt-widget sm:max-w-[425px] p-0", children: [
        /* @__PURE__ */ b.jsx("style", { children: Zc }),
        /* @__PURE__ */ b.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ b.jsx(Ew, { children: /* @__PURE__ */ b.jsx(xw, { className: "text-violet-700 text-xl font-semibold", children: "Send us your feedback" }) }),
          /* @__PURE__ */ b.jsx(
            vF,
            {
              projectId: e,
              setToast: B,
              setIsOpen: n,
              handleScreenshot: g,
              screenshot: l
            }
          )
        ] }),
        /* @__PURE__ */ b.jsx("div", { className: "bg-gray-50 p-4 flex justify-center rounded-b-lg", children: /* @__PURE__ */ b.jsxs(
          "a",
          {
            href: "https://www.feedbackthing.pro",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center space-x-2 text-sm text-gray-500 hover:text-violet-500 transition-colors",
            children: [
              /* @__PURE__ */ b.jsx(
                "img",
                {
                  src: "https://www.feedbackthing.pro/favicon.ico",
                  alt: "Feedbackthing Logo",
                  className: "h-4 w-4"
                }
              ),
              /* @__PURE__ */ b.jsx("span", { children: "Powered by feedbackthing.pro" })
            ]
          }
        ) })
      ] })
    ] }),
    o && /* @__PURE__ */ b.jsx(
      WH,
      {
        setScreenshot: u,
        setIsCapturing: s,
        setIsOpen: n
      }
    ),
    /* @__PURE__ */ b.jsx(jH, { toast: f })
  ] });
}, zH = (e) => e.replace(/-([a-z])/g, (r, n) => n.toUpperCase());
class G0 extends HTMLElement {
  constructor() {
    super(), this.root = null, this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const r = this.getPropsFromAttributes();
    this.shadowRoot && (this.root = $c.createRoot(this.shadowRoot), this.root.render(/* @__PURE__ */ b.jsx(XH, { ...r })));
  }
  disconnectedCallback() {
    this.root && this.root.unmount();
  }
  getPropsFromAttributes() {
    const r = {};
    for (const { name: n, value: o } of this.attributes)
      r[zH(n)] = o;
    return r;
  }
}
customElements.define("feedback-widget", G0);
customElements.define("feedback-thing", G0);
