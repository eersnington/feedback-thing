// @ts-nocheck
function Cg(r, l) {
  for (var i = 0; i < l.length; i++) {
    const u = l[i];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const c in u)
        if (c !== "default" && !(c in r)) {
          const d = Object.getOwnPropertyDescriptor(u, c);
          d && Object.defineProperty(r, c, d.get ? d : {
            enumerable: !0,
            get: () => u[c]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
function vf(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var yf = { exports: {} }, wo = {}, qs = { exports: {} }, xe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dd;
function kg() {
  if (Dd) return xe;
  Dd = 1;
  var r = Symbol.for("react.element"), l = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), m = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), S = Symbol.iterator;
  function R(k) {
    return k === null || typeof k != "object" ? null : (k = S && k[S] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var _ = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, T = Object.assign, x = {};
  function P(k, I, de) {
    this.props = k, this.context = I, this.refs = x, this.updater = de || _;
  }
  P.prototype.isReactComponent = {}, P.prototype.setState = function(k, I) {
    if (typeof k != "object" && typeof k != "function" && k != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, I, "setState");
  }, P.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function A() {
  }
  A.prototype = P.prototype;
  function M(k, I, de) {
    this.props = k, this.context = I, this.refs = x, this.updater = de || _;
  }
  var j = M.prototype = new A();
  j.constructor = M, T(j, P.prototype), j.isPureReactComponent = !0;
  var z = Array.isArray, $ = Object.prototype.hasOwnProperty, J = { current: null }, H = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(k, I, de) {
    var ue, ye = {}, ge = null, Q = null;
    if (I != null) for (ue in I.ref !== void 0 && (Q = I.ref), I.key !== void 0 && (ge = "" + I.key), I) $.call(I, ue) && !H.hasOwnProperty(ue) && (ye[ue] = I[ue]);
    var re = arguments.length - 2;
    if (re === 1) ye.children = de;
    else if (1 < re) {
      for (var ve = Array(re), we = 0; we < re; we++) ve[we] = arguments[we + 2];
      ye.children = ve;
    }
    if (k && k.defaultProps) for (ue in re = k.defaultProps, re) ye[ue] === void 0 && (ye[ue] = re[ue]);
    return { $$typeof: r, type: k, key: ge, ref: Q, props: ye, _owner: J.current };
  }
  function pe(k, I) {
    return { $$typeof: r, type: k.type, key: I, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function fe(k) {
    return typeof k == "object" && k !== null && k.$$typeof === r;
  }
  function Se(k) {
    var I = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(de) {
      return I[de];
    });
  }
  var q = /\/+/g;
  function he(k, I) {
    return typeof k == "object" && k !== null && k.key != null ? Se("" + k.key) : I.toString(36);
  }
  function ae(k, I, de, ue, ye) {
    var ge = typeof k;
    (ge === "undefined" || ge === "boolean") && (k = null);
    var Q = !1;
    if (k === null) Q = !0;
    else switch (ge) {
      case "string":
      case "number":
        Q = !0;
        break;
      case "object":
        switch (k.$$typeof) {
          case r:
          case l:
            Q = !0;
        }
    }
    if (Q) return Q = k, ye = ye(Q), k = ue === "" ? "." + he(Q, 0) : ue, z(ye) ? (de = "", k != null && (de = k.replace(q, "$&/") + "/"), ae(ye, I, de, "", function(we) {
      return we;
    })) : ye != null && (fe(ye) && (ye = pe(ye, de + (!ye.key || Q && Q.key === ye.key ? "" : ("" + ye.key).replace(q, "$&/") + "/") + k)), I.push(ye)), 1;
    if (Q = 0, ue = ue === "" ? "." : ue + ":", z(k)) for (var re = 0; re < k.length; re++) {
      ge = k[re];
      var ve = ue + he(ge, re);
      Q += ae(ge, I, de, ve, ye);
    }
    else if (ve = R(k), typeof ve == "function") for (k = ve.call(k), re = 0; !(ge = k.next()).done; ) ge = ge.value, ve = ue + he(ge, re++), Q += ae(ge, I, de, ve, ye);
    else if (ge === "object") throw I = String(k), Error("Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead.");
    return Q;
  }
  function le(k, I, de) {
    if (k == null) return k;
    var ue = [], ye = 0;
    return ae(k, ue, "", "", function(ge) {
      return I.call(de, ge, ye++);
    }), ue;
  }
  function ce(k) {
    if (k._status === -1) {
      var I = k._result;
      I = I(), I.then(function(de) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = de);
      }, function(de) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = de);
      }), k._status === -1 && (k._status = 0, k._result = I);
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var G = { current: null }, D = { transition: null }, U = { ReactCurrentDispatcher: G, ReactCurrentBatchConfig: D, ReactCurrentOwner: J };
  function K() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return xe.Children = { map: le, forEach: function(k, I, de) {
    le(k, function() {
      I.apply(this, arguments);
    }, de);
  }, count: function(k) {
    var I = 0;
    return le(k, function() {
      I++;
    }), I;
  }, toArray: function(k) {
    return le(k, function(I) {
      return I;
    }) || [];
  }, only: function(k) {
    if (!fe(k)) throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, xe.Component = P, xe.Fragment = i, xe.Profiler = c, xe.PureComponent = M, xe.StrictMode = u, xe.Suspense = g, xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U, xe.act = K, xe.cloneElement = function(k, I, de) {
    if (k == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var ue = T({}, k.props), ye = k.key, ge = k.ref, Q = k._owner;
    if (I != null) {
      if (I.ref !== void 0 && (ge = I.ref, Q = J.current), I.key !== void 0 && (ye = "" + I.key), k.type && k.type.defaultProps) var re = k.type.defaultProps;
      for (ve in I) $.call(I, ve) && !H.hasOwnProperty(ve) && (ue[ve] = I[ve] === void 0 && re !== void 0 ? re[ve] : I[ve]);
    }
    var ve = arguments.length - 2;
    if (ve === 1) ue.children = de;
    else if (1 < ve) {
      re = Array(ve);
      for (var we = 0; we < ve; we++) re[we] = arguments[we + 2];
      ue.children = re;
    }
    return { $$typeof: r, type: k.type, key: ye, ref: ge, props: ue, _owner: Q };
  }, xe.createContext = function(k) {
    return k = { $$typeof: m, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: d, _context: k }, k.Consumer = k;
  }, xe.createElement = ne, xe.createFactory = function(k) {
    var I = ne.bind(null, k);
    return I.type = k, I;
  }, xe.createRef = function() {
    return { current: null };
  }, xe.forwardRef = function(k) {
    return { $$typeof: p, render: k };
  }, xe.isValidElement = fe, xe.lazy = function(k) {
    return { $$typeof: E, _payload: { _status: -1, _result: k }, _init: ce };
  }, xe.memo = function(k, I) {
    return { $$typeof: y, type: k, compare: I === void 0 ? null : I };
  }, xe.startTransition = function(k) {
    var I = D.transition;
    D.transition = {};
    try {
      k();
    } finally {
      D.transition = I;
    }
  }, xe.unstable_act = K, xe.useCallback = function(k, I) {
    return G.current.useCallback(k, I);
  }, xe.useContext = function(k) {
    return G.current.useContext(k);
  }, xe.useDebugValue = function() {
  }, xe.useDeferredValue = function(k) {
    return G.current.useDeferredValue(k);
  }, xe.useEffect = function(k, I) {
    return G.current.useEffect(k, I);
  }, xe.useId = function() {
    return G.current.useId();
  }, xe.useImperativeHandle = function(k, I, de) {
    return G.current.useImperativeHandle(k, I, de);
  }, xe.useInsertionEffect = function(k, I) {
    return G.current.useInsertionEffect(k, I);
  }, xe.useLayoutEffect = function(k, I) {
    return G.current.useLayoutEffect(k, I);
  }, xe.useMemo = function(k, I) {
    return G.current.useMemo(k, I);
  }, xe.useReducer = function(k, I, de) {
    return G.current.useReducer(k, I, de);
  }, xe.useRef = function(k) {
    return G.current.useRef(k);
  }, xe.useState = function(k) {
    return G.current.useState(k);
  }, xe.useSyncExternalStore = function(k, I, de) {
    return G.current.useSyncExternalStore(k, I, de);
  }, xe.useTransition = function() {
    return G.current.useTransition();
  }, xe.version = "18.3.1", xe;
}
var zd;
function ba() {
  return zd || (zd = 1, qs.exports = kg()), qs.exports;
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
var Fd;
function Eg() {
  if (Fd) return wo;
  Fd = 1;
  var r = ba(), l = Symbol.for("react.element"), i = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(p, g, y) {
    var E, S = {}, R = null, _ = null;
    y !== void 0 && (R = "" + y), g.key !== void 0 && (R = "" + g.key), g.ref !== void 0 && (_ = g.ref);
    for (E in g) u.call(g, E) && !d.hasOwnProperty(E) && (S[E] = g[E]);
    if (p && p.defaultProps) for (E in g = p.defaultProps, g) S[E] === void 0 && (S[E] = g[E]);
    return { $$typeof: l, type: p, key: R, ref: _, props: S, _owner: c.current };
  }
  return wo.Fragment = i, wo.jsx = m, wo.jsxs = m, wo;
}
yf.exports = Eg();
var b = yf.exports, da = {}, wf = { exports: {} }, at = {}, ea = { exports: {} }, ta = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wd;
function bg() {
  return Wd || (Wd = 1, function(r) {
    function l(D, U) {
      var K = D.length;
      D.push(U);
      e: for (; 0 < K; ) {
        var k = K - 1 >>> 1, I = D[k];
        if (0 < c(I, U)) D[k] = U, D[K] = I, K = k;
        else break e;
      }
    }
    function i(D) {
      return D.length === 0 ? null : D[0];
    }
    function u(D) {
      if (D.length === 0) return null;
      var U = D[0], K = D.pop();
      if (K !== U) {
        D[0] = K;
        e: for (var k = 0, I = D.length, de = I >>> 1; k < de; ) {
          var ue = 2 * (k + 1) - 1, ye = D[ue], ge = ue + 1, Q = D[ge];
          if (0 > c(ye, K)) ge < I && 0 > c(Q, ye) ? (D[k] = Q, D[ge] = K, k = ge) : (D[k] = ye, D[ue] = K, k = ue);
          else if (ge < I && 0 > c(Q, K)) D[k] = Q, D[ge] = K, k = ge;
          else break e;
        }
      }
      return U;
    }
    function c(D, U) {
      var K = D.sortIndex - U.sortIndex;
      return K !== 0 ? K : D.id - U.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      r.unstable_now = function() {
        return d.now();
      };
    } else {
      var m = Date, p = m.now();
      r.unstable_now = function() {
        return m.now() - p;
      };
    }
    var g = [], y = [], E = 1, S = null, R = 3, _ = !1, T = !1, x = !1, P = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, M = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function j(D) {
      for (var U = i(y); U !== null; ) {
        if (U.callback === null) u(y);
        else if (U.startTime <= D) u(y), U.sortIndex = U.expirationTime, l(g, U);
        else break;
        U = i(y);
      }
    }
    function z(D) {
      if (x = !1, j(D), !T) if (i(g) !== null) T = !0, ce($);
      else {
        var U = i(y);
        U !== null && G(z, U.startTime - D);
      }
    }
    function $(D, U) {
      T = !1, x && (x = !1, A(ne), ne = -1), _ = !0;
      var K = R;
      try {
        for (j(U), S = i(g); S !== null && (!(S.expirationTime > U) || D && !Se()); ) {
          var k = S.callback;
          if (typeof k == "function") {
            S.callback = null, R = S.priorityLevel;
            var I = k(S.expirationTime <= U);
            U = r.unstable_now(), typeof I == "function" ? S.callback = I : S === i(g) && u(g), j(U);
          } else u(g);
          S = i(g);
        }
        if (S !== null) var de = !0;
        else {
          var ue = i(y);
          ue !== null && G(z, ue.startTime - U), de = !1;
        }
        return de;
      } finally {
        S = null, R = K, _ = !1;
      }
    }
    var J = !1, H = null, ne = -1, pe = 5, fe = -1;
    function Se() {
      return !(r.unstable_now() - fe < pe);
    }
    function q() {
      if (H !== null) {
        var D = r.unstable_now();
        fe = D;
        var U = !0;
        try {
          U = H(!0, D);
        } finally {
          U ? he() : (J = !1, H = null);
        }
      } else J = !1;
    }
    var he;
    if (typeof M == "function") he = function() {
      M(q);
    };
    else if (typeof MessageChannel < "u") {
      var ae = new MessageChannel(), le = ae.port2;
      ae.port1.onmessage = q, he = function() {
        le.postMessage(null);
      };
    } else he = function() {
      P(q, 0);
    };
    function ce(D) {
      H = D, J || (J = !0, he());
    }
    function G(D, U) {
      ne = P(function() {
        D(r.unstable_now());
      }, U);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, r.unstable_continueExecution = function() {
      T || _ || (T = !0, ce($));
    }, r.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : pe = 0 < D ? Math.floor(1e3 / D) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return R;
    }, r.unstable_getFirstCallbackNode = function() {
      return i(g);
    }, r.unstable_next = function(D) {
      switch (R) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = R;
      }
      var K = R;
      R = U;
      try {
        return D();
      } finally {
        R = K;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(D, U) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var K = R;
      R = D;
      try {
        return U();
      } finally {
        R = K;
      }
    }, r.unstable_scheduleCallback = function(D, U, K) {
      var k = r.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? k + K : k) : K = k, D) {
        case 1:
          var I = -1;
          break;
        case 2:
          I = 250;
          break;
        case 5:
          I = 1073741823;
          break;
        case 4:
          I = 1e4;
          break;
        default:
          I = 5e3;
      }
      return I = K + I, D = { id: E++, callback: U, priorityLevel: D, startTime: K, expirationTime: I, sortIndex: -1 }, K > k ? (D.sortIndex = K, l(y, D), i(g) === null && D === i(y) && (x ? (A(ne), ne = -1) : x = !0, G(z, K - k))) : (D.sortIndex = I, l(g, D), T || _ || (T = !0, ce($))), D;
    }, r.unstable_shouldYield = Se, r.unstable_wrapCallback = function(D) {
      var U = R;
      return function() {
        var K = R;
        R = U;
        try {
          return D.apply(this, arguments);
        } finally {
          R = K;
        }
      };
    };
  }(ta)), ta;
}
var Bd;
function Pg() {
  return Bd || (Bd = 1, ea.exports = bg()), ea.exports;
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
var $d;
function Ng() {
  if ($d) return at;
  $d = 1;
  var r = ba(), l = Pg();
  function i(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var u = /* @__PURE__ */ new Set(), c = {};
  function d(e, t) {
    m(e, t), m(e + "Capture", t);
  }
  function m(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) u.add(t[e]);
  }
  var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), g = Object.prototype.hasOwnProperty, y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, E = {}, S = {};
  function R(e) {
    return g.call(S, e) ? !0 : g.call(E, e) ? !1 : y.test(e) ? S[e] = !0 : (E[e] = !0, !1);
  }
  function _(e, t, n, o) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function T(e, t, n, o) {
    if (t === null || typeof t > "u" || _(e, t, n, o)) return !0;
    if (o) return !1;
    if (n !== null) switch (n.type) {
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
  function x(e, t, n, o, s, a, f) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = o, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = f;
  }
  var P = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    P[e] = new x(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    P[t] = new x(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    P[e] = new x(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    P[e] = new x(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    P[e] = new x(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    P[e] = new x(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    P[e] = new x(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    P[e] = new x(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    P[e] = new x(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var A = /[\-:]([a-z])/g;
  function M(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      A,
      M
    );
    P[t] = new x(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(A, M);
    P[t] = new x(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(A, M);
    P[t] = new x(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    P[e] = new x(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), P.xlinkHref = new x("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    P[e] = new x(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function j(e, t, n, o) {
    var s = P.hasOwnProperty(t) ? P[t] : null;
    (s !== null ? s.type !== 0 : o || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (T(t, n, s, o) && (n = null), o || s === null ? R(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, o = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n))));
  }
  var z = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $ = Symbol.for("react.element"), J = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), pe = Symbol.for("react.profiler"), fe = Symbol.for("react.provider"), Se = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), he = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), le = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), G = Symbol.for("react.offscreen"), D = Symbol.iterator;
  function U(e) {
    return e === null || typeof e != "object" ? null : (e = D && e[D] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var K = Object.assign, k;
  function I(e) {
    if (k === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      k = t && t[1] || "";
    }
    return `
` + k + e;
  }
  var de = !1;
  function ue(e, t) {
    if (!e || de) return "";
    de = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (L) {
          var o = L;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (L) {
          o = L;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (L) {
          o = L;
        }
        e();
      }
    } catch (L) {
      if (L && o && typeof L.stack == "string") {
        for (var s = L.stack.split(`
`), a = o.stack.split(`
`), f = s.length - 1, v = a.length - 1; 1 <= f && 0 <= v && s[f] !== a[v]; ) v--;
        for (; 1 <= f && 0 <= v; f--, v--) if (s[f] !== a[v]) {
          if (f !== 1 || v !== 1)
            do
              if (f--, v--, 0 > v || s[f] !== a[v]) {
                var w = `
` + s[f].replace(" at new ", " at ");
                return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), w;
              }
            while (1 <= f && 0 <= v);
          break;
        }
      }
    } finally {
      de = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? I(e) : "";
  }
  function ye(e) {
    switch (e.tag) {
      case 5:
        return I(e.type);
      case 16:
        return I("Lazy");
      case 13:
        return I("Suspense");
      case 19:
        return I("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = ue(e.type, !1), e;
      case 11:
        return e = ue(e.type.render, !1), e;
      case 1:
        return e = ue(e.type, !0), e;
      default:
        return "";
    }
  }
  function ge(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case H:
        return "Fragment";
      case J:
        return "Portal";
      case pe:
        return "Profiler";
      case ne:
        return "StrictMode";
      case he:
        return "Suspense";
      case ae:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Se:
        return (e.displayName || "Context") + ".Consumer";
      case fe:
        return (e._context.displayName || "Context") + ".Provider";
      case q:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case le:
        return t = e.displayName || null, t !== null ? t : ge(e.type) || "Memo";
      case ce:
        t = e._payload, e = e._init;
        try {
          return ge(e(t));
        } catch {
        }
    }
    return null;
  }
  function Q(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
        return ge(t);
      case 8:
        return t === ne ? "StrictMode" : "Mode";
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
  function re(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ve(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function we(e) {
    var t = ve(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), o = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var s = n.get, a = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return s.call(this);
      }, set: function(f) {
        o = "" + f, a.call(this, f);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(f) {
        o = "" + f;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Ee(e) {
    e._valueTracker || (e._valueTracker = we(e));
  }
  function Ae(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), o = "";
    return e && (o = ve(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Qe(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function St(e, t) {
    var n = t.checked;
    return K({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Yn(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, o = t.checked != null ? t.checked : t.defaultChecked;
    n = re(t.value != null ? t.value : n), e._wrapperState = { initialChecked: o, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Gn(e, t) {
    t = t.checked, t != null && j(e, "checked", t, !1);
  }
  function _n(e, t) {
    Gn(e, t);
    var n = re(t.value), o = t.type;
    if (n != null) o === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (o === "submit" || o === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? al(e, t.type, n) : t.hasOwnProperty("defaultValue") && al(e, t.type, re(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Ka(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var o = t.type;
      if (!(o !== "submit" && o !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function al(e, t, n) {
    (t !== "number" || Qe(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Lr = Array.isArray;
  function Xn(e, t, n, o) {
    if (e = e.options, t) {
      t = {};
      for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && o && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + re(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          e[s].selected = !0, o && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ul(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return K({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Qa(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(i(92));
        if (Lr(n)) {
          if (1 < n.length) throw Error(i(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: re(n) };
  }
  function Ya(e, t) {
    var n = re(t.value), o = re(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), o != null && (e.defaultValue = "" + o);
  }
  function Ga(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Xa(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function cl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Xa(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Ro, Za = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, o, s) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, o, s);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Ro = Ro || document.createElement("div"), Ro.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ro.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Mr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ir = {
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
  }, Pm = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ir).forEach(function(e) {
    Pm.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Ir[t] = Ir[e];
    });
  });
  function Ja(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ir.hasOwnProperty(e) && Ir[e] ? ("" + t).trim() : t + "px";
  }
  function qa(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var o = n.indexOf("--") === 0, s = Ja(n, t[n], o);
      n === "float" && (n = "cssFloat"), o ? e.setProperty(n, s) : e[n] = s;
    }
  }
  var Nm = K({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function dl(e, t) {
    if (t) {
      if (Nm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function fl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
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
  var pl = null;
  function ml(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var hl = null, Zn = null, Jn = null;
  function eu(e) {
    if (e = ro(e)) {
      if (typeof hl != "function") throw Error(i(280));
      var t = e.stateNode;
      t && (t = Zo(t), hl(e.stateNode, e.type, t));
    }
  }
  function tu(e) {
    Zn ? Jn ? Jn.push(e) : Jn = [e] : Zn = e;
  }
  function nu() {
    if (Zn) {
      var e = Zn, t = Jn;
      if (Jn = Zn = null, eu(e), t) for (e = 0; e < t.length; e++) eu(t[e]);
    }
  }
  function ru(e, t) {
    return e(t);
  }
  function ou() {
  }
  var gl = !1;
  function iu(e, t, n) {
    if (gl) return e(t, n);
    gl = !0;
    try {
      return ru(e, t, n);
    } finally {
      gl = !1, (Zn !== null || Jn !== null) && (ou(), nu());
    }
  }
  function jr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var o = Zo(n);
    if (o === null) return null;
    n = o[t];
    e: switch (t) {
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
        (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(i(231, t, typeof n));
    return n;
  }
  var vl = !1;
  if (p) try {
    var Dr = {};
    Object.defineProperty(Dr, "passive", { get: function() {
      vl = !0;
    } }), window.addEventListener("test", Dr, Dr), window.removeEventListener("test", Dr, Dr);
  } catch {
    vl = !1;
  }
  function Rm(e, t, n, o, s, a, f, v, w) {
    var L = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, L);
    } catch (W) {
      this.onError(W);
    }
  }
  var zr = !1, _o = null, To = !1, yl = null, _m = { onError: function(e) {
    zr = !0, _o = e;
  } };
  function Tm(e, t, n, o, s, a, f, v, w) {
    zr = !1, _o = null, Rm.apply(_m, arguments);
  }
  function Om(e, t, n, o, s, a, f, v, w) {
    if (Tm.apply(this, arguments), zr) {
      if (zr) {
        var L = _o;
        zr = !1, _o = null;
      } else throw Error(i(198));
      To || (To = !0, yl = L);
    }
  }
  function Tn(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function lu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function su(e) {
    if (Tn(e) !== e) throw Error(i(188));
  }
  function Am(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Tn(e), t === null) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var n = e, o = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var a = s.alternate;
      if (a === null) {
        if (o = s.return, o !== null) {
          n = o;
          continue;
        }
        break;
      }
      if (s.child === a.child) {
        for (a = s.child; a; ) {
          if (a === n) return su(s), e;
          if (a === o) return su(s), t;
          a = a.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== o.return) n = s, o = a;
      else {
        for (var f = !1, v = s.child; v; ) {
          if (v === n) {
            f = !0, n = s, o = a;
            break;
          }
          if (v === o) {
            f = !0, o = s, n = a;
            break;
          }
          v = v.sibling;
        }
        if (!f) {
          for (v = a.child; v; ) {
            if (v === n) {
              f = !0, n = a, o = s;
              break;
            }
            if (v === o) {
              f = !0, o = a, n = s;
              break;
            }
            v = v.sibling;
          }
          if (!f) throw Error(i(189));
        }
      }
      if (n.alternate !== o) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? e : t;
  }
  function au(e) {
    return e = Am(e), e !== null ? uu(e) : null;
  }
  function uu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = uu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var cu = l.unstable_scheduleCallback, du = l.unstable_cancelCallback, Lm = l.unstable_shouldYield, Mm = l.unstable_requestPaint, De = l.unstable_now, Im = l.unstable_getCurrentPriorityLevel, wl = l.unstable_ImmediatePriority, fu = l.unstable_UserBlockingPriority, Oo = l.unstable_NormalPriority, jm = l.unstable_LowPriority, pu = l.unstable_IdlePriority, Ao = null, At = null;
  function Dm(e) {
    if (At && typeof At.onCommitFiberRoot == "function") try {
      At.onCommitFiberRoot(Ao, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ct = Math.clz32 ? Math.clz32 : Wm, zm = Math.log, Fm = Math.LN2;
  function Wm(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (zm(e) / Fm | 0) | 0;
  }
  var Lo = 64, Mo = 4194304;
  function Fr(e) {
    switch (e & -e) {
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
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Io(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var o = 0, s = e.suspendedLanes, a = e.pingedLanes, f = n & 268435455;
    if (f !== 0) {
      var v = f & ~s;
      v !== 0 ? o = Fr(v) : (a &= f, a !== 0 && (o = Fr(a)));
    } else f = n & ~s, f !== 0 ? o = Fr(f) : a !== 0 && (o = Fr(a));
    if (o === 0) return 0;
    if (t !== 0 && t !== o && !(t & s) && (s = o & -o, a = t & -t, s >= a || s === 16 && (a & 4194240) !== 0)) return t;
    if (o & 4 && (o |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= o; 0 < t; ) n = 31 - Ct(t), s = 1 << n, o |= e[n], t &= ~s;
    return o;
  }
  function Bm(e, t) {
    switch (e) {
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
  function $m(e, t) {
    for (var n = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
      var f = 31 - Ct(a), v = 1 << f, w = s[f];
      w === -1 ? (!(v & n) || v & o) && (s[f] = Bm(v, t)) : w <= t && (e.expiredLanes |= v), a &= ~v;
    }
  }
  function xl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function mu() {
    var e = Lo;
    return Lo <<= 1, !(Lo & 4194240) && (Lo = 64), e;
  }
  function Sl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Wr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ct(t), e[t] = n;
  }
  function Vm(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var o = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var s = 31 - Ct(n), a = 1 << s;
      t[s] = 0, o[s] = -1, e[s] = -1, n &= ~a;
    }
  }
  function Cl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var o = 31 - Ct(n), s = 1 << o;
      s & t | e[o] & t && (e[o] |= t), n &= ~s;
    }
  }
  var be = 0;
  function hu(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var gu, kl, vu, yu, wu, El = !1, jo = [], en = null, tn = null, nn = null, Br = /* @__PURE__ */ new Map(), $r = /* @__PURE__ */ new Map(), rn = [], Um = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function xu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        en = null;
        break;
      case "dragenter":
      case "dragleave":
        tn = null;
        break;
      case "mouseover":
      case "mouseout":
        nn = null;
        break;
      case "pointerover":
      case "pointerout":
        Br.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        $r.delete(t.pointerId);
    }
  }
  function Vr(e, t, n, o, s, a) {
    return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: o, nativeEvent: a, targetContainers: [s] }, t !== null && (t = ro(t), t !== null && kl(t)), e) : (e.eventSystemFlags |= o, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function Hm(e, t, n, o, s) {
    switch (t) {
      case "focusin":
        return en = Vr(en, e, t, n, o, s), !0;
      case "dragenter":
        return tn = Vr(tn, e, t, n, o, s), !0;
      case "mouseover":
        return nn = Vr(nn, e, t, n, o, s), !0;
      case "pointerover":
        var a = s.pointerId;
        return Br.set(a, Vr(Br.get(a) || null, e, t, n, o, s)), !0;
      case "gotpointercapture":
        return a = s.pointerId, $r.set(a, Vr($r.get(a) || null, e, t, n, o, s)), !0;
    }
    return !1;
  }
  function Su(e) {
    var t = On(e.target);
    if (t !== null) {
      var n = Tn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = lu(n), t !== null) {
            e.blockedOn = t, wu(e.priority, function() {
              vu(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Do(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Pl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var o = new n.constructor(n.type, n);
        pl = o, n.target.dispatchEvent(o), pl = null;
      } else return t = ro(n), t !== null && kl(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Cu(e, t, n) {
    Do(e) && n.delete(t);
  }
  function Km() {
    El = !1, en !== null && Do(en) && (en = null), tn !== null && Do(tn) && (tn = null), nn !== null && Do(nn) && (nn = null), Br.forEach(Cu), $r.forEach(Cu);
  }
  function Ur(e, t) {
    e.blockedOn === t && (e.blockedOn = null, El || (El = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, Km)));
  }
  function Hr(e) {
    function t(s) {
      return Ur(s, e);
    }
    if (0 < jo.length) {
      Ur(jo[0], e);
      for (var n = 1; n < jo.length; n++) {
        var o = jo[n];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (en !== null && Ur(en, e), tn !== null && Ur(tn, e), nn !== null && Ur(nn, e), Br.forEach(t), $r.forEach(t), n = 0; n < rn.length; n++) o = rn[n], o.blockedOn === e && (o.blockedOn = null);
    for (; 0 < rn.length && (n = rn[0], n.blockedOn === null); ) Su(n), n.blockedOn === null && rn.shift();
  }
  var qn = z.ReactCurrentBatchConfig, zo = !0;
  function Qm(e, t, n, o) {
    var s = be, a = qn.transition;
    qn.transition = null;
    try {
      be = 1, bl(e, t, n, o);
    } finally {
      be = s, qn.transition = a;
    }
  }
  function Ym(e, t, n, o) {
    var s = be, a = qn.transition;
    qn.transition = null;
    try {
      be = 4, bl(e, t, n, o);
    } finally {
      be = s, qn.transition = a;
    }
  }
  function bl(e, t, n, o) {
    if (zo) {
      var s = Pl(e, t, n, o);
      if (s === null) Vl(e, t, o, Fo, n), xu(e, o);
      else if (Hm(s, e, t, n, o)) o.stopPropagation();
      else if (xu(e, o), t & 4 && -1 < Um.indexOf(e)) {
        for (; s !== null; ) {
          var a = ro(s);
          if (a !== null && gu(a), a = Pl(e, t, n, o), a === null && Vl(e, t, o, Fo, n), a === s) break;
          s = a;
        }
        s !== null && o.stopPropagation();
      } else Vl(e, t, o, null, n);
    }
  }
  var Fo = null;
  function Pl(e, t, n, o) {
    if (Fo = null, e = ml(o), e = On(e), e !== null) if (t = Tn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = lu(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Fo = e, null;
  }
  function ku(e) {
    switch (e) {
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
        switch (Im()) {
          case wl:
            return 1;
          case fu:
            return 4;
          case Oo:
          case jm:
            return 16;
          case pu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var on = null, Nl = null, Wo = null;
  function Eu() {
    if (Wo) return Wo;
    var e, t = Nl, n = t.length, o, s = "value" in on ? on.value : on.textContent, a = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++) ;
    var f = n - e;
    for (o = 1; o <= f && t[n - o] === s[a - o]; o++) ;
    return Wo = s.slice(e, 1 < o ? 1 - o : void 0);
  }
  function Bo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function $o() {
    return !0;
  }
  function bu() {
    return !1;
  }
  function ut(e) {
    function t(n, o, s, a, f) {
      this._reactName = n, this._targetInst = s, this.type = o, this.nativeEvent = a, this.target = f, this.currentTarget = null;
      for (var v in e) e.hasOwnProperty(v) && (n = e[v], this[v] = n ? n(a) : a[v]);
      return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? $o : bu, this.isPropagationStopped = bu, this;
    }
    return K(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = $o);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = $o);
    }, persist: function() {
    }, isPersistent: $o }), t;
  }
  var er = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Rl = ut(er), Kr = K({}, er, { view: 0, detail: 0 }), Gm = ut(Kr), _l, Tl, Qr, Vo = K({}, Kr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Al, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Qr && (Qr && e.type === "mousemove" ? (_l = e.screenX - Qr.screenX, Tl = e.screenY - Qr.screenY) : Tl = _l = 0, Qr = e), _l);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Tl;
  } }), Pu = ut(Vo), Xm = K({}, Vo, { dataTransfer: 0 }), Zm = ut(Xm), Jm = K({}, Kr, { relatedTarget: 0 }), Ol = ut(Jm), qm = K({}, er, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), eh = ut(qm), th = K({}, er, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), nh = ut(th), rh = K({}, er, { data: 0 }), Nu = ut(rh), oh = {
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
  }, ih = {
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
  }, lh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function sh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = lh[e]) ? !!t[e] : !1;
  }
  function Al() {
    return sh;
  }
  var ah = K({}, Kr, { key: function(e) {
    if (e.key) {
      var t = oh[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Bo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ih[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Al, charCode: function(e) {
    return e.type === "keypress" ? Bo(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Bo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), uh = ut(ah), ch = K({}, Vo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ru = ut(ch), dh = K({}, Kr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Al }), fh = ut(dh), ph = K({}, er, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), mh = ut(ph), hh = K({}, Vo, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), gh = ut(hh), vh = [9, 13, 27, 32], Ll = p && "CompositionEvent" in window, Yr = null;
  p && "documentMode" in document && (Yr = document.documentMode);
  var yh = p && "TextEvent" in window && !Yr, _u = p && (!Ll || Yr && 8 < Yr && 11 >= Yr), Tu = " ", Ou = !1;
  function Au(e, t) {
    switch (e) {
      case "keyup":
        return vh.indexOf(t.keyCode) !== -1;
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
  function Lu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var tr = !1;
  function wh(e, t) {
    switch (e) {
      case "compositionend":
        return Lu(t);
      case "keypress":
        return t.which !== 32 ? null : (Ou = !0, Tu);
      case "textInput":
        return e = t.data, e === Tu && Ou ? null : e;
      default:
        return null;
    }
  }
  function xh(e, t) {
    if (tr) return e === "compositionend" || !Ll && Au(e, t) ? (e = Eu(), Wo = Nl = on = null, tr = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return _u && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Sh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Mu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Sh[e.type] : t === "textarea";
  }
  function Iu(e, t, n, o) {
    tu(o), t = Yo(t, "onChange"), 0 < t.length && (n = new Rl("onChange", "change", null, n, o), e.push({ event: n, listeners: t }));
  }
  var Gr = null, Xr = null;
  function Ch(e) {
    qu(e, 0);
  }
  function Uo(e) {
    var t = lr(e);
    if (Ae(t)) return e;
  }
  function kh(e, t) {
    if (e === "change") return t;
  }
  var ju = !1;
  if (p) {
    var Ml;
    if (p) {
      var Il = "oninput" in document;
      if (!Il) {
        var Du = document.createElement("div");
        Du.setAttribute("oninput", "return;"), Il = typeof Du.oninput == "function";
      }
      Ml = Il;
    } else Ml = !1;
    ju = Ml && (!document.documentMode || 9 < document.documentMode);
  }
  function zu() {
    Gr && (Gr.detachEvent("onpropertychange", Fu), Xr = Gr = null);
  }
  function Fu(e) {
    if (e.propertyName === "value" && Uo(Xr)) {
      var t = [];
      Iu(t, Xr, e, ml(e)), iu(Ch, t);
    }
  }
  function Eh(e, t, n) {
    e === "focusin" ? (zu(), Gr = t, Xr = n, Gr.attachEvent("onpropertychange", Fu)) : e === "focusout" && zu();
  }
  function bh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Uo(Xr);
  }
  function Ph(e, t) {
    if (e === "click") return Uo(t);
  }
  function Nh(e, t) {
    if (e === "input" || e === "change") return Uo(t);
  }
  function Rh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var kt = typeof Object.is == "function" ? Object.is : Rh;
  function Zr(e, t) {
    if (kt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), o = Object.keys(t);
    if (n.length !== o.length) return !1;
    for (o = 0; o < n.length; o++) {
      var s = n[o];
      if (!g.call(t, s) || !kt(e[s], t[s])) return !1;
    }
    return !0;
  }
  function Wu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Bu(e, t) {
    var n = Wu(e);
    e = 0;
    for (var o; n; ) {
      if (n.nodeType === 3) {
        if (o = e + n.textContent.length, e <= t && o >= t) return { node: n, offset: t - e };
        e = o;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Wu(n);
    }
  }
  function $u(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $u(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Vu() {
    for (var e = window, t = Qe(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Qe(e.document);
    }
    return t;
  }
  function jl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function _h(e) {
    var t = Vu(), n = e.focusedElem, o = e.selectionRange;
    if (t !== n && n && n.ownerDocument && $u(n.ownerDocument.documentElement, n)) {
      if (o !== null && jl(n)) {
        if (t = o.start, e = o.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var s = n.textContent.length, a = Math.min(o.start, s);
          o = o.end === void 0 ? a : Math.min(o.end, s), !e.extend && a > o && (s = o, o = a, a = s), s = Bu(n, a);
          var f = Bu(
            n,
            o
          );
          s && f && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== f.node || e.focusOffset !== f.offset) && (t = t.createRange(), t.setStart(s.node, s.offset), e.removeAllRanges(), a > o ? (e.addRange(t), e.extend(f.node, f.offset)) : (t.setEnd(f.node, f.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Th = p && "documentMode" in document && 11 >= document.documentMode, nr = null, Dl = null, Jr = null, zl = !1;
  function Uu(e, t, n) {
    var o = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    zl || nr == null || nr !== Qe(o) || (o = nr, "selectionStart" in o && jl(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Jr && Zr(Jr, o) || (Jr = o, o = Yo(Dl, "onSelect"), 0 < o.length && (t = new Rl("onSelect", "select", null, t, n), e.push({ event: t, listeners: o }), t.target = nr)));
  }
  function Ho(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var rr = { animationend: Ho("Animation", "AnimationEnd"), animationiteration: Ho("Animation", "AnimationIteration"), animationstart: Ho("Animation", "AnimationStart"), transitionend: Ho("Transition", "TransitionEnd") }, Fl = {}, Hu = {};
  p && (Hu = document.createElement("div").style, "AnimationEvent" in window || (delete rr.animationend.animation, delete rr.animationiteration.animation, delete rr.animationstart.animation), "TransitionEvent" in window || delete rr.transitionend.transition);
  function Ko(e) {
    if (Fl[e]) return Fl[e];
    if (!rr[e]) return e;
    var t = rr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Hu) return Fl[e] = t[n];
    return e;
  }
  var Ku = Ko("animationend"), Qu = Ko("animationiteration"), Yu = Ko("animationstart"), Gu = Ko("transitionend"), Xu = /* @__PURE__ */ new Map(), Zu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ln(e, t) {
    Xu.set(e, t), d(t, [e]);
  }
  for (var Wl = 0; Wl < Zu.length; Wl++) {
    var Bl = Zu[Wl], Oh = Bl.toLowerCase(), Ah = Bl[0].toUpperCase() + Bl.slice(1);
    ln(Oh, "on" + Ah);
  }
  ln(Ku, "onAnimationEnd"), ln(Qu, "onAnimationIteration"), ln(Yu, "onAnimationStart"), ln("dblclick", "onDoubleClick"), ln("focusin", "onFocus"), ln("focusout", "onBlur"), ln(Gu, "onTransitionEnd"), m("onMouseEnter", ["mouseout", "mouseover"]), m("onMouseLeave", ["mouseout", "mouseover"]), m("onPointerEnter", ["pointerout", "pointerover"]), m("onPointerLeave", ["pointerout", "pointerover"]), d("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), d("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), d("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), d("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), d("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var qr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Lh = new Set("cancel close invalid load scroll toggle".split(" ").concat(qr));
  function Ju(e, t, n) {
    var o = e.type || "unknown-event";
    e.currentTarget = n, Om(o, t, void 0, e), e.currentTarget = null;
  }
  function qu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var o = e[n], s = o.event;
      o = o.listeners;
      e: {
        var a = void 0;
        if (t) for (var f = o.length - 1; 0 <= f; f--) {
          var v = o[f], w = v.instance, L = v.currentTarget;
          if (v = v.listener, w !== a && s.isPropagationStopped()) break e;
          Ju(s, v, L), a = w;
        }
        else for (f = 0; f < o.length; f++) {
          if (v = o[f], w = v.instance, L = v.currentTarget, v = v.listener, w !== a && s.isPropagationStopped()) break e;
          Ju(s, v, L), a = w;
        }
      }
    }
    if (To) throw e = yl, To = !1, yl = null, e;
  }
  function Re(e, t) {
    var n = t[Gl];
    n === void 0 && (n = t[Gl] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    n.has(o) || (ec(t, e, 2, !1), n.add(o));
  }
  function $l(e, t, n) {
    var o = 0;
    t && (o |= 4), ec(n, e, o, t);
  }
  var Qo = "_reactListening" + Math.random().toString(36).slice(2);
  function eo(e) {
    if (!e[Qo]) {
      e[Qo] = !0, u.forEach(function(n) {
        n !== "selectionchange" && (Lh.has(n) || $l(n, !1, e), $l(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Qo] || (t[Qo] = !0, $l("selectionchange", !1, t));
    }
  }
  function ec(e, t, n, o) {
    switch (ku(t)) {
      case 1:
        var s = Qm;
        break;
      case 4:
        s = Ym;
        break;
      default:
        s = bl;
    }
    n = s.bind(null, t, n, e), s = void 0, !vl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), o ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
  }
  function Vl(e, t, n, o, s) {
    var a = o;
    if (!(t & 1) && !(t & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var f = o.tag;
      if (f === 3 || f === 4) {
        var v = o.stateNode.containerInfo;
        if (v === s || v.nodeType === 8 && v.parentNode === s) break;
        if (f === 4) for (f = o.return; f !== null; ) {
          var w = f.tag;
          if ((w === 3 || w === 4) && (w = f.stateNode.containerInfo, w === s || w.nodeType === 8 && w.parentNode === s)) return;
          f = f.return;
        }
        for (; v !== null; ) {
          if (f = On(v), f === null) return;
          if (w = f.tag, w === 5 || w === 6) {
            o = a = f;
            continue e;
          }
          v = v.parentNode;
        }
      }
      o = o.return;
    }
    iu(function() {
      var L = a, W = ml(n), B = [];
      e: {
        var F = Xu.get(e);
        if (F !== void 0) {
          var Y = Rl, Z = e;
          switch (e) {
            case "keypress":
              if (Bo(n) === 0) break e;
            case "keydown":
            case "keyup":
              Y = uh;
              break;
            case "focusin":
              Z = "focus", Y = Ol;
              break;
            case "focusout":
              Z = "blur", Y = Ol;
              break;
            case "beforeblur":
            case "afterblur":
              Y = Ol;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Y = Pu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Y = Zm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Y = fh;
              break;
            case Ku:
            case Qu:
            case Yu:
              Y = eh;
              break;
            case Gu:
              Y = mh;
              break;
            case "scroll":
              Y = Gm;
              break;
            case "wheel":
              Y = gh;
              break;
            case "copy":
            case "cut":
            case "paste":
              Y = nh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Y = Ru;
          }
          var ee = (t & 4) !== 0, ze = !ee && e === "scroll", N = ee ? F !== null ? F + "Capture" : null : F;
          ee = [];
          for (var C = L, O; C !== null; ) {
            O = C;
            var V = O.stateNode;
            if (O.tag === 5 && V !== null && (O = V, N !== null && (V = jr(C, N), V != null && ee.push(to(C, V, O)))), ze) break;
            C = C.return;
          }
          0 < ee.length && (F = new Y(F, Z, null, n, W), B.push({ event: F, listeners: ee }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (F = e === "mouseover" || e === "pointerover", Y = e === "mouseout" || e === "pointerout", F && n !== pl && (Z = n.relatedTarget || n.fromElement) && (On(Z) || Z[Wt])) break e;
          if ((Y || F) && (F = W.window === W ? W : (F = W.ownerDocument) ? F.defaultView || F.parentWindow : window, Y ? (Z = n.relatedTarget || n.toElement, Y = L, Z = Z ? On(Z) : null, Z !== null && (ze = Tn(Z), Z !== ze || Z.tag !== 5 && Z.tag !== 6) && (Z = null)) : (Y = null, Z = L), Y !== Z)) {
            if (ee = Pu, V = "onMouseLeave", N = "onMouseEnter", C = "mouse", (e === "pointerout" || e === "pointerover") && (ee = Ru, V = "onPointerLeave", N = "onPointerEnter", C = "pointer"), ze = Y == null ? F : lr(Y), O = Z == null ? F : lr(Z), F = new ee(V, C + "leave", Y, n, W), F.target = ze, F.relatedTarget = O, V = null, On(W) === L && (ee = new ee(N, C + "enter", Z, n, W), ee.target = O, ee.relatedTarget = ze, V = ee), ze = V, Y && Z) t: {
              for (ee = Y, N = Z, C = 0, O = ee; O; O = or(O)) C++;
              for (O = 0, V = N; V; V = or(V)) O++;
              for (; 0 < C - O; ) ee = or(ee), C--;
              for (; 0 < O - C; ) N = or(N), O--;
              for (; C--; ) {
                if (ee === N || N !== null && ee === N.alternate) break t;
                ee = or(ee), N = or(N);
              }
              ee = null;
            }
            else ee = null;
            Y !== null && tc(B, F, Y, ee, !1), Z !== null && ze !== null && tc(B, ze, Z, ee, !0);
          }
        }
        e: {
          if (F = L ? lr(L) : window, Y = F.nodeName && F.nodeName.toLowerCase(), Y === "select" || Y === "input" && F.type === "file") var te = kh;
          else if (Mu(F)) if (ju) te = Nh;
          else {
            te = bh;
            var oe = Eh;
          }
          else (Y = F.nodeName) && Y.toLowerCase() === "input" && (F.type === "checkbox" || F.type === "radio") && (te = Ph);
          if (te && (te = te(e, L))) {
            Iu(B, te, n, W);
            break e;
          }
          oe && oe(e, F, L), e === "focusout" && (oe = F._wrapperState) && oe.controlled && F.type === "number" && al(F, "number", F.value);
        }
        switch (oe = L ? lr(L) : window, e) {
          case "focusin":
            (Mu(oe) || oe.contentEditable === "true") && (nr = oe, Dl = L, Jr = null);
            break;
          case "focusout":
            Jr = Dl = nr = null;
            break;
          case "mousedown":
            zl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            zl = !1, Uu(B, n, W);
            break;
          case "selectionchange":
            if (Th) break;
          case "keydown":
          case "keyup":
            Uu(B, n, W);
        }
        var ie;
        if (Ll) e: {
          switch (e) {
            case "compositionstart":
              var se = "onCompositionStart";
              break e;
            case "compositionend":
              se = "onCompositionEnd";
              break e;
            case "compositionupdate":
              se = "onCompositionUpdate";
              break e;
          }
          se = void 0;
        }
        else tr ? Au(e, n) && (se = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (se = "onCompositionStart");
        se && (_u && n.locale !== "ko" && (tr || se !== "onCompositionStart" ? se === "onCompositionEnd" && tr && (ie = Eu()) : (on = W, Nl = "value" in on ? on.value : on.textContent, tr = !0)), oe = Yo(L, se), 0 < oe.length && (se = new Nu(se, e, null, n, W), B.push({ event: se, listeners: oe }), ie ? se.data = ie : (ie = Lu(n), ie !== null && (se.data = ie)))), (ie = yh ? wh(e, n) : xh(e, n)) && (L = Yo(L, "onBeforeInput"), 0 < L.length && (W = new Nu("onBeforeInput", "beforeinput", null, n, W), B.push({ event: W, listeners: L }), W.data = ie));
      }
      qu(B, t);
    });
  }
  function to(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Yo(e, t) {
    for (var n = t + "Capture", o = []; e !== null; ) {
      var s = e, a = s.stateNode;
      s.tag === 5 && a !== null && (s = a, a = jr(e, n), a != null && o.unshift(to(e, a, s)), a = jr(e, t), a != null && o.push(to(e, a, s))), e = e.return;
    }
    return o;
  }
  function or(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function tc(e, t, n, o, s) {
    for (var a = t._reactName, f = []; n !== null && n !== o; ) {
      var v = n, w = v.alternate, L = v.stateNode;
      if (w !== null && w === o) break;
      v.tag === 5 && L !== null && (v = L, s ? (w = jr(n, a), w != null && f.unshift(to(n, w, v))) : s || (w = jr(n, a), w != null && f.push(to(n, w, v)))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var Mh = /\r\n?/g, Ih = /\u0000|\uFFFD/g;
  function nc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Mh, `
`).replace(Ih, "");
  }
  function Go(e, t, n) {
    if (t = nc(t), nc(e) !== t && n) throw Error(i(425));
  }
  function Xo() {
  }
  var Ul = null, Hl = null;
  function Kl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ql = typeof setTimeout == "function" ? setTimeout : void 0, jh = typeof clearTimeout == "function" ? clearTimeout : void 0, rc = typeof Promise == "function" ? Promise : void 0, Dh = typeof queueMicrotask == "function" ? queueMicrotask : typeof rc < "u" ? function(e) {
    return rc.resolve(null).then(e).catch(zh);
  } : Ql;
  function zh(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Yl(e, t) {
    var n = t, o = 0;
    do {
      var s = n.nextSibling;
      if (e.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$") {
        if (o === 0) {
          e.removeChild(s), Hr(t);
          return;
        }
        o--;
      } else n !== "$" && n !== "$?" && n !== "$!" || o++;
      n = s;
    } while (n);
    Hr(t);
  }
  function sn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function oc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var ir = Math.random().toString(36).slice(2), Lt = "__reactFiber$" + ir, no = "__reactProps$" + ir, Wt = "__reactContainer$" + ir, Gl = "__reactEvents$" + ir, Fh = "__reactListeners$" + ir, Wh = "__reactHandles$" + ir;
  function On(e) {
    var t = e[Lt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Wt] || n[Lt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = oc(e); e !== null; ) {
          if (n = e[Lt]) return n;
          e = oc(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ro(e) {
    return e = e[Lt] || e[Wt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function lr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Zo(e) {
    return e[no] || null;
  }
  var Xl = [], sr = -1;
  function an(e) {
    return { current: e };
  }
  function _e(e) {
    0 > sr || (e.current = Xl[sr], Xl[sr] = null, sr--);
  }
  function Pe(e, t) {
    sr++, Xl[sr] = e.current, e.current = t;
  }
  var un = {}, Xe = an(un), rt = an(!1), An = un;
  function ar(e, t) {
    var n = e.type.contextTypes;
    if (!n) return un;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t) return o.__reactInternalMemoizedMaskedChildContext;
    var s = {}, a;
    for (a in n) s[a] = t[a];
    return o && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s;
  }
  function ot(e) {
    return e = e.childContextTypes, e != null;
  }
  function Jo() {
    _e(rt), _e(Xe);
  }
  function ic(e, t, n) {
    if (Xe.current !== un) throw Error(i(168));
    Pe(Xe, t), Pe(rt, n);
  }
  function lc(e, t, n) {
    var o = e.stateNode;
    if (t = t.childContextTypes, typeof o.getChildContext != "function") return n;
    o = o.getChildContext();
    for (var s in o) if (!(s in t)) throw Error(i(108, Q(e) || "Unknown", s));
    return K({}, n, o);
  }
  function qo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || un, An = Xe.current, Pe(Xe, e), Pe(rt, rt.current), !0;
  }
  function sc(e, t, n) {
    var o = e.stateNode;
    if (!o) throw Error(i(169));
    n ? (e = lc(e, t, An), o.__reactInternalMemoizedMergedChildContext = e, _e(rt), _e(Xe), Pe(Xe, e)) : _e(rt), Pe(rt, n);
  }
  var Bt = null, ei = !1, Zl = !1;
  function ac(e) {
    Bt === null ? Bt = [e] : Bt.push(e);
  }
  function Bh(e) {
    ei = !0, ac(e);
  }
  function cn() {
    if (!Zl && Bt !== null) {
      Zl = !0;
      var e = 0, t = be;
      try {
        var n = Bt;
        for (be = 1; e < n.length; e++) {
          var o = n[e];
          do
            o = o(!0);
          while (o !== null);
        }
        Bt = null, ei = !1;
      } catch (s) {
        throw Bt !== null && (Bt = Bt.slice(e + 1)), cu(wl, cn), s;
      } finally {
        be = t, Zl = !1;
      }
    }
    return null;
  }
  var ur = [], cr = 0, ti = null, ni = 0, ht = [], gt = 0, Ln = null, $t = 1, Vt = "";
  function Mn(e, t) {
    ur[cr++] = ni, ur[cr++] = ti, ti = e, ni = t;
  }
  function uc(e, t, n) {
    ht[gt++] = $t, ht[gt++] = Vt, ht[gt++] = Ln, Ln = e;
    var o = $t;
    e = Vt;
    var s = 32 - Ct(o) - 1;
    o &= ~(1 << s), n += 1;
    var a = 32 - Ct(t) + s;
    if (30 < a) {
      var f = s - s % 5;
      a = (o & (1 << f) - 1).toString(32), o >>= f, s -= f, $t = 1 << 32 - Ct(t) + s | n << s | o, Vt = a + e;
    } else $t = 1 << a | n << s | o, Vt = e;
  }
  function Jl(e) {
    e.return !== null && (Mn(e, 1), uc(e, 1, 0));
  }
  function ql(e) {
    for (; e === ti; ) ti = ur[--cr], ur[cr] = null, ni = ur[--cr], ur[cr] = null;
    for (; e === Ln; ) Ln = ht[--gt], ht[gt] = null, Vt = ht[--gt], ht[gt] = null, $t = ht[--gt], ht[gt] = null;
  }
  var ct = null, dt = null, Oe = !1, Et = null;
  function cc(e, t) {
    var n = xt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function dc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ct = e, dt = sn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ct = e, dt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ln !== null ? { id: $t, overflow: Vt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = xt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ct = e, dt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function es(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ts(e) {
    if (Oe) {
      var t = dt;
      if (t) {
        var n = t;
        if (!dc(e, t)) {
          if (es(e)) throw Error(i(418));
          t = sn(n.nextSibling);
          var o = ct;
          t && dc(e, t) ? cc(o, n) : (e.flags = e.flags & -4097 | 2, Oe = !1, ct = e);
        }
      } else {
        if (es(e)) throw Error(i(418));
        e.flags = e.flags & -4097 | 2, Oe = !1, ct = e;
      }
    }
  }
  function fc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ct = e;
  }
  function ri(e) {
    if (e !== ct) return !1;
    if (!Oe) return fc(e), Oe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Kl(e.type, e.memoizedProps)), t && (t = dt)) {
      if (es(e)) throw pc(), Error(i(418));
      for (; t; ) cc(e, t), t = sn(t.nextSibling);
    }
    if (fc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                dt = sn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        dt = null;
      }
    } else dt = ct ? sn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function pc() {
    for (var e = dt; e; ) e = sn(e.nextSibling);
  }
  function dr() {
    dt = ct = null, Oe = !1;
  }
  function ns(e) {
    Et === null ? Et = [e] : Et.push(e);
  }
  var $h = z.ReactCurrentBatchConfig;
  function oo(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(i(309));
          var o = n.stateNode;
        }
        if (!o) throw Error(i(147, e));
        var s = o, a = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(f) {
          var v = s.refs;
          f === null ? delete v[a] : v[a] = f;
        }, t._stringRef = a, t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!n._owner) throw Error(i(290, e));
    }
    return e;
  }
  function oi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function mc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function hc(e) {
    function t(N, C) {
      if (e) {
        var O = N.deletions;
        O === null ? (N.deletions = [C], N.flags |= 16) : O.push(C);
      }
    }
    function n(N, C) {
      if (!e) return null;
      for (; C !== null; ) t(N, C), C = C.sibling;
      return null;
    }
    function o(N, C) {
      for (N = /* @__PURE__ */ new Map(); C !== null; ) C.key !== null ? N.set(C.key, C) : N.set(C.index, C), C = C.sibling;
      return N;
    }
    function s(N, C) {
      return N = yn(N, C), N.index = 0, N.sibling = null, N;
    }
    function a(N, C, O) {
      return N.index = O, e ? (O = N.alternate, O !== null ? (O = O.index, O < C ? (N.flags |= 2, C) : O) : (N.flags |= 2, C)) : (N.flags |= 1048576, C);
    }
    function f(N) {
      return e && N.alternate === null && (N.flags |= 2), N;
    }
    function v(N, C, O, V) {
      return C === null || C.tag !== 6 ? (C = Qs(O, N.mode, V), C.return = N, C) : (C = s(C, O), C.return = N, C);
    }
    function w(N, C, O, V) {
      var te = O.type;
      return te === H ? W(N, C, O.props.children, V, O.key) : C !== null && (C.elementType === te || typeof te == "object" && te !== null && te.$$typeof === ce && mc(te) === C.type) ? (V = s(C, O.props), V.ref = oo(N, C, O), V.return = N, V) : (V = Ri(O.type, O.key, O.props, null, N.mode, V), V.ref = oo(N, C, O), V.return = N, V);
    }
    function L(N, C, O, V) {
      return C === null || C.tag !== 4 || C.stateNode.containerInfo !== O.containerInfo || C.stateNode.implementation !== O.implementation ? (C = Ys(O, N.mode, V), C.return = N, C) : (C = s(C, O.children || []), C.return = N, C);
    }
    function W(N, C, O, V, te) {
      return C === null || C.tag !== 7 ? (C = $n(O, N.mode, V, te), C.return = N, C) : (C = s(C, O), C.return = N, C);
    }
    function B(N, C, O) {
      if (typeof C == "string" && C !== "" || typeof C == "number") return C = Qs("" + C, N.mode, O), C.return = N, C;
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case $:
            return O = Ri(C.type, C.key, C.props, null, N.mode, O), O.ref = oo(N, null, C), O.return = N, O;
          case J:
            return C = Ys(C, N.mode, O), C.return = N, C;
          case ce:
            var V = C._init;
            return B(N, V(C._payload), O);
        }
        if (Lr(C) || U(C)) return C = $n(C, N.mode, O, null), C.return = N, C;
        oi(N, C);
      }
      return null;
    }
    function F(N, C, O, V) {
      var te = C !== null ? C.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number") return te !== null ? null : v(N, C, "" + O, V);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case $:
            return O.key === te ? w(N, C, O, V) : null;
          case J:
            return O.key === te ? L(N, C, O, V) : null;
          case ce:
            return te = O._init, F(
              N,
              C,
              te(O._payload),
              V
            );
        }
        if (Lr(O) || U(O)) return te !== null ? null : W(N, C, O, V, null);
        oi(N, O);
      }
      return null;
    }
    function Y(N, C, O, V, te) {
      if (typeof V == "string" && V !== "" || typeof V == "number") return N = N.get(O) || null, v(C, N, "" + V, te);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case $:
            return N = N.get(V.key === null ? O : V.key) || null, w(C, N, V, te);
          case J:
            return N = N.get(V.key === null ? O : V.key) || null, L(C, N, V, te);
          case ce:
            var oe = V._init;
            return Y(N, C, O, oe(V._payload), te);
        }
        if (Lr(V) || U(V)) return N = N.get(O) || null, W(C, N, V, te, null);
        oi(C, V);
      }
      return null;
    }
    function Z(N, C, O, V) {
      for (var te = null, oe = null, ie = C, se = C = 0, Ke = null; ie !== null && se < O.length; se++) {
        ie.index > se ? (Ke = ie, ie = null) : Ke = ie.sibling;
        var ke = F(N, ie, O[se], V);
        if (ke === null) {
          ie === null && (ie = Ke);
          break;
        }
        e && ie && ke.alternate === null && t(N, ie), C = a(ke, C, se), oe === null ? te = ke : oe.sibling = ke, oe = ke, ie = Ke;
      }
      if (se === O.length) return n(N, ie), Oe && Mn(N, se), te;
      if (ie === null) {
        for (; se < O.length; se++) ie = B(N, O[se], V), ie !== null && (C = a(ie, C, se), oe === null ? te = ie : oe.sibling = ie, oe = ie);
        return Oe && Mn(N, se), te;
      }
      for (ie = o(N, ie); se < O.length; se++) Ke = Y(ie, N, se, O[se], V), Ke !== null && (e && Ke.alternate !== null && ie.delete(Ke.key === null ? se : Ke.key), C = a(Ke, C, se), oe === null ? te = Ke : oe.sibling = Ke, oe = Ke);
      return e && ie.forEach(function(wn) {
        return t(N, wn);
      }), Oe && Mn(N, se), te;
    }
    function ee(N, C, O, V) {
      var te = U(O);
      if (typeof te != "function") throw Error(i(150));
      if (O = te.call(O), O == null) throw Error(i(151));
      for (var oe = te = null, ie = C, se = C = 0, Ke = null, ke = O.next(); ie !== null && !ke.done; se++, ke = O.next()) {
        ie.index > se ? (Ke = ie, ie = null) : Ke = ie.sibling;
        var wn = F(N, ie, ke.value, V);
        if (wn === null) {
          ie === null && (ie = Ke);
          break;
        }
        e && ie && wn.alternate === null && t(N, ie), C = a(wn, C, se), oe === null ? te = wn : oe.sibling = wn, oe = wn, ie = Ke;
      }
      if (ke.done) return n(
        N,
        ie
      ), Oe && Mn(N, se), te;
      if (ie === null) {
        for (; !ke.done; se++, ke = O.next()) ke = B(N, ke.value, V), ke !== null && (C = a(ke, C, se), oe === null ? te = ke : oe.sibling = ke, oe = ke);
        return Oe && Mn(N, se), te;
      }
      for (ie = o(N, ie); !ke.done; se++, ke = O.next()) ke = Y(ie, N, se, ke.value, V), ke !== null && (e && ke.alternate !== null && ie.delete(ke.key === null ? se : ke.key), C = a(ke, C, se), oe === null ? te = ke : oe.sibling = ke, oe = ke);
      return e && ie.forEach(function(Sg) {
        return t(N, Sg);
      }), Oe && Mn(N, se), te;
    }
    function ze(N, C, O, V) {
      if (typeof O == "object" && O !== null && O.type === H && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case $:
            e: {
              for (var te = O.key, oe = C; oe !== null; ) {
                if (oe.key === te) {
                  if (te = O.type, te === H) {
                    if (oe.tag === 7) {
                      n(N, oe.sibling), C = s(oe, O.props.children), C.return = N, N = C;
                      break e;
                    }
                  } else if (oe.elementType === te || typeof te == "object" && te !== null && te.$$typeof === ce && mc(te) === oe.type) {
                    n(N, oe.sibling), C = s(oe, O.props), C.ref = oo(N, oe, O), C.return = N, N = C;
                    break e;
                  }
                  n(N, oe);
                  break;
                } else t(N, oe);
                oe = oe.sibling;
              }
              O.type === H ? (C = $n(O.props.children, N.mode, V, O.key), C.return = N, N = C) : (V = Ri(O.type, O.key, O.props, null, N.mode, V), V.ref = oo(N, C, O), V.return = N, N = V);
            }
            return f(N);
          case J:
            e: {
              for (oe = O.key; C !== null; ) {
                if (C.key === oe) if (C.tag === 4 && C.stateNode.containerInfo === O.containerInfo && C.stateNode.implementation === O.implementation) {
                  n(N, C.sibling), C = s(C, O.children || []), C.return = N, N = C;
                  break e;
                } else {
                  n(N, C);
                  break;
                }
                else t(N, C);
                C = C.sibling;
              }
              C = Ys(O, N.mode, V), C.return = N, N = C;
            }
            return f(N);
          case ce:
            return oe = O._init, ze(N, C, oe(O._payload), V);
        }
        if (Lr(O)) return Z(N, C, O, V);
        if (U(O)) return ee(N, C, O, V);
        oi(N, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" ? (O = "" + O, C !== null && C.tag === 6 ? (n(N, C.sibling), C = s(C, O), C.return = N, N = C) : (n(N, C), C = Qs(O, N.mode, V), C.return = N, N = C), f(N)) : n(N, C);
    }
    return ze;
  }
  var fr = hc(!0), gc = hc(!1), ii = an(null), li = null, pr = null, rs = null;
  function os() {
    rs = pr = li = null;
  }
  function is(e) {
    var t = ii.current;
    _e(ii), e._currentValue = t;
  }
  function ls(e, t, n) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function mr(e, t) {
    li = e, rs = pr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (it = !0), e.firstContext = null);
  }
  function vt(e) {
    var t = e._currentValue;
    if (rs !== e) if (e = { context: e, memoizedValue: t, next: null }, pr === null) {
      if (li === null) throw Error(i(308));
      pr = e, li.dependencies = { lanes: 0, firstContext: e };
    } else pr = pr.next = e;
    return t;
  }
  var In = null;
  function ss(e) {
    In === null ? In = [e] : In.push(e);
  }
  function vc(e, t, n, o) {
    var s = t.interleaved;
    return s === null ? (n.next = n, ss(t)) : (n.next = s.next, s.next = n), t.interleaved = n, Ut(e, o);
  }
  function Ut(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var dn = !1;
  function as(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function yc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Ht(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function fn(e, t, n) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Ce & 2) {
      var s = o.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, Ut(e, n);
    }
    return s = o.interleaved, s === null ? (t.next = t, ss(o)) : (t.next = s.next, s.next = t), o.interleaved = t, Ut(e, n);
  }
  function si(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var o = t.lanes;
      o &= e.pendingLanes, n |= o, t.lanes = n, Cl(e, n);
    }
  }
  function wc(e, t) {
    var n = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, n === o)) {
      var s = null, a = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          a === null ? s = a = f : a = a.next = f, n = n.next;
        } while (n !== null);
        a === null ? s = a = t : a = a.next = t;
      } else s = a = t;
      n = { baseState: o.baseState, firstBaseUpdate: s, lastBaseUpdate: a, shared: o.shared, effects: o.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function ai(e, t, n, o) {
    var s = e.updateQueue;
    dn = !1;
    var a = s.firstBaseUpdate, f = s.lastBaseUpdate, v = s.shared.pending;
    if (v !== null) {
      s.shared.pending = null;
      var w = v, L = w.next;
      w.next = null, f === null ? a = L : f.next = L, f = w;
      var W = e.alternate;
      W !== null && (W = W.updateQueue, v = W.lastBaseUpdate, v !== f && (v === null ? W.firstBaseUpdate = L : v.next = L, W.lastBaseUpdate = w));
    }
    if (a !== null) {
      var B = s.baseState;
      f = 0, W = L = w = null, v = a;
      do {
        var F = v.lane, Y = v.eventTime;
        if ((o & F) === F) {
          W !== null && (W = W.next = {
            eventTime: Y,
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          });
          e: {
            var Z = e, ee = v;
            switch (F = t, Y = n, ee.tag) {
              case 1:
                if (Z = ee.payload, typeof Z == "function") {
                  B = Z.call(Y, B, F);
                  break e;
                }
                B = Z;
                break e;
              case 3:
                Z.flags = Z.flags & -65537 | 128;
              case 0:
                if (Z = ee.payload, F = typeof Z == "function" ? Z.call(Y, B, F) : Z, F == null) break e;
                B = K({}, B, F);
                break e;
              case 2:
                dn = !0;
            }
          }
          v.callback !== null && v.lane !== 0 && (e.flags |= 64, F = s.effects, F === null ? s.effects = [v] : F.push(v));
        } else Y = { eventTime: Y, lane: F, tag: v.tag, payload: v.payload, callback: v.callback, next: null }, W === null ? (L = W = Y, w = B) : W = W.next = Y, f |= F;
        if (v = v.next, v === null) {
          if (v = s.shared.pending, v === null) break;
          F = v, v = F.next, F.next = null, s.lastBaseUpdate = F, s.shared.pending = null;
        }
      } while (!0);
      if (W === null && (w = B), s.baseState = w, s.firstBaseUpdate = L, s.lastBaseUpdate = W, t = s.shared.interleaved, t !== null) {
        s = t;
        do
          f |= s.lane, s = s.next;
        while (s !== t);
      } else a === null && (s.shared.lanes = 0);
      zn |= f, e.lanes = f, e.memoizedState = B;
    }
  }
  function xc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var o = e[t], s = o.callback;
      if (s !== null) {
        if (o.callback = null, o = n, typeof s != "function") throw Error(i(191, s));
        s.call(o);
      }
    }
  }
  var io = {}, Mt = an(io), lo = an(io), so = an(io);
  function jn(e) {
    if (e === io) throw Error(i(174));
    return e;
  }
  function us(e, t) {
    switch (Pe(so, t), Pe(lo, e), Pe(Mt, io), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : cl(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = cl(t, e);
    }
    _e(Mt), Pe(Mt, t);
  }
  function hr() {
    _e(Mt), _e(lo), _e(so);
  }
  function Sc(e) {
    jn(so.current);
    var t = jn(Mt.current), n = cl(t, e.type);
    t !== n && (Pe(lo, e), Pe(Mt, n));
  }
  function cs(e) {
    lo.current === e && (_e(Mt), _e(lo));
  }
  var Le = an(0);
  function ui(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var ds = [];
  function fs() {
    for (var e = 0; e < ds.length; e++) ds[e]._workInProgressVersionPrimary = null;
    ds.length = 0;
  }
  var ci = z.ReactCurrentDispatcher, ps = z.ReactCurrentBatchConfig, Dn = 0, Me = null, Be = null, Ue = null, di = !1, ao = !1, uo = 0, Vh = 0;
  function Ze() {
    throw Error(i(321));
  }
  function ms(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!kt(e[n], t[n])) return !1;
    return !0;
  }
  function hs(e, t, n, o, s, a) {
    if (Dn = a, Me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ci.current = e === null || e.memoizedState === null ? Qh : Yh, e = n(o, s), ao) {
      a = 0;
      do {
        if (ao = !1, uo = 0, 25 <= a) throw Error(i(301));
        a += 1, Ue = Be = null, t.updateQueue = null, ci.current = Gh, e = n(o, s);
      } while (ao);
    }
    if (ci.current = mi, t = Be !== null && Be.next !== null, Dn = 0, Ue = Be = Me = null, di = !1, t) throw Error(i(300));
    return e;
  }
  function gs() {
    var e = uo !== 0;
    return uo = 0, e;
  }
  function It() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ue === null ? Me.memoizedState = Ue = e : Ue = Ue.next = e, Ue;
  }
  function yt() {
    if (Be === null) {
      var e = Me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Be.next;
    var t = Ue === null ? Me.memoizedState : Ue.next;
    if (t !== null) Ue = t, Be = e;
    else {
      if (e === null) throw Error(i(310));
      Be = e, e = { memoizedState: Be.memoizedState, baseState: Be.baseState, baseQueue: Be.baseQueue, queue: Be.queue, next: null }, Ue === null ? Me.memoizedState = Ue = e : Ue = Ue.next = e;
    }
    return Ue;
  }
  function co(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function vs(e) {
    var t = yt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var o = Be, s = o.baseQueue, a = n.pending;
    if (a !== null) {
      if (s !== null) {
        var f = s.next;
        s.next = a.next, a.next = f;
      }
      o.baseQueue = s = a, n.pending = null;
    }
    if (s !== null) {
      a = s.next, o = o.baseState;
      var v = f = null, w = null, L = a;
      do {
        var W = L.lane;
        if ((Dn & W) === W) w !== null && (w = w.next = { lane: 0, action: L.action, hasEagerState: L.hasEagerState, eagerState: L.eagerState, next: null }), o = L.hasEagerState ? L.eagerState : e(o, L.action);
        else {
          var B = {
            lane: W,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null
          };
          w === null ? (v = w = B, f = o) : w = w.next = B, Me.lanes |= W, zn |= W;
        }
        L = L.next;
      } while (L !== null && L !== a);
      w === null ? f = o : w.next = v, kt(o, t.memoizedState) || (it = !0), t.memoizedState = o, t.baseState = f, t.baseQueue = w, n.lastRenderedState = o;
    }
    if (e = n.interleaved, e !== null) {
      s = e;
      do
        a = s.lane, Me.lanes |= a, zn |= a, s = s.next;
      while (s !== e);
    } else s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ys(e) {
    var t = yt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var o = n.dispatch, s = n.pending, a = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = s = s.next;
      do
        a = e(a, f.action), f = f.next;
      while (f !== s);
      kt(a, t.memoizedState) || (it = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
    }
    return [a, o];
  }
  function Cc() {
  }
  function kc(e, t) {
    var n = Me, o = yt(), s = t(), a = !kt(o.memoizedState, s);
    if (a && (o.memoizedState = s, it = !0), o = o.queue, ws(Pc.bind(null, n, o, e), [e]), o.getSnapshot !== t || a || Ue !== null && Ue.memoizedState.tag & 1) {
      if (n.flags |= 2048, fo(9, bc.bind(null, n, o, s, t), void 0, null), He === null) throw Error(i(349));
      Dn & 30 || Ec(n, t, s);
    }
    return s;
  }
  function Ec(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function bc(e, t, n, o) {
    t.value = n, t.getSnapshot = o, Nc(t) && Rc(e);
  }
  function Pc(e, t, n) {
    return n(function() {
      Nc(t) && Rc(e);
    });
  }
  function Nc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !kt(e, n);
    } catch {
      return !0;
    }
  }
  function Rc(e) {
    var t = Ut(e, 1);
    t !== null && Rt(t, e, 1, -1);
  }
  function _c(e) {
    var t = It();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: co, lastRenderedState: e }, t.queue = e, e = e.dispatch = Kh.bind(null, Me, e), [t.memoizedState, e];
  }
  function fo(e, t, n, o) {
    return e = { tag: e, create: t, destroy: n, deps: o, next: null }, t = Me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Me.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (o = n.next, n.next = e, e.next = o, t.lastEffect = e)), e;
  }
  function Tc() {
    return yt().memoizedState;
  }
  function fi(e, t, n, o) {
    var s = It();
    Me.flags |= e, s.memoizedState = fo(1 | t, n, void 0, o === void 0 ? null : o);
  }
  function pi(e, t, n, o) {
    var s = yt();
    o = o === void 0 ? null : o;
    var a = void 0;
    if (Be !== null) {
      var f = Be.memoizedState;
      if (a = f.destroy, o !== null && ms(o, f.deps)) {
        s.memoizedState = fo(t, n, a, o);
        return;
      }
    }
    Me.flags |= e, s.memoizedState = fo(1 | t, n, a, o);
  }
  function Oc(e, t) {
    return fi(8390656, 8, e, t);
  }
  function ws(e, t) {
    return pi(2048, 8, e, t);
  }
  function Ac(e, t) {
    return pi(4, 2, e, t);
  }
  function Lc(e, t) {
    return pi(4, 4, e, t);
  }
  function Mc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Ic(e, t, n) {
    return n = n != null ? n.concat([e]) : null, pi(4, 4, Mc.bind(null, t, e), n);
  }
  function xs() {
  }
  function jc(e, t) {
    var n = yt();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    return o !== null && t !== null && ms(t, o[1]) ? o[0] : (n.memoizedState = [e, t], e);
  }
  function Dc(e, t) {
    var n = yt();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    return o !== null && t !== null && ms(t, o[1]) ? o[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function zc(e, t, n) {
    return Dn & 21 ? (kt(n, t) || (n = mu(), Me.lanes |= n, zn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, it = !0), e.memoizedState = n);
  }
  function Uh(e, t) {
    var n = be;
    be = n !== 0 && 4 > n ? n : 4, e(!0);
    var o = ps.transition;
    ps.transition = {};
    try {
      e(!1), t();
    } finally {
      be = n, ps.transition = o;
    }
  }
  function Fc() {
    return yt().memoizedState;
  }
  function Hh(e, t, n) {
    var o = gn(e);
    if (n = { lane: o, action: n, hasEagerState: !1, eagerState: null, next: null }, Wc(e)) Bc(t, n);
    else if (n = vc(e, t, n, o), n !== null) {
      var s = tt();
      Rt(n, e, o, s), $c(n, t, o);
    }
  }
  function Kh(e, t, n) {
    var o = gn(e), s = { lane: o, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Wc(e)) Bc(t, s);
    else {
      var a = e.alternate;
      if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
        var f = t.lastRenderedState, v = a(f, n);
        if (s.hasEagerState = !0, s.eagerState = v, kt(v, f)) {
          var w = t.interleaved;
          w === null ? (s.next = s, ss(t)) : (s.next = w.next, w.next = s), t.interleaved = s;
          return;
        }
      } catch {
      } finally {
      }
      n = vc(e, t, s, o), n !== null && (s = tt(), Rt(n, e, o, s), $c(n, t, o));
    }
  }
  function Wc(e) {
    var t = e.alternate;
    return e === Me || t !== null && t === Me;
  }
  function Bc(e, t) {
    ao = di = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function $c(e, t, n) {
    if (n & 4194240) {
      var o = t.lanes;
      o &= e.pendingLanes, n |= o, t.lanes = n, Cl(e, n);
    }
  }
  var mi = { readContext: vt, useCallback: Ze, useContext: Ze, useEffect: Ze, useImperativeHandle: Ze, useInsertionEffect: Ze, useLayoutEffect: Ze, useMemo: Ze, useReducer: Ze, useRef: Ze, useState: Ze, useDebugValue: Ze, useDeferredValue: Ze, useTransition: Ze, useMutableSource: Ze, useSyncExternalStore: Ze, useId: Ze, unstable_isNewReconciler: !1 }, Qh = { readContext: vt, useCallback: function(e, t) {
    return It().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: vt, useEffect: Oc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, fi(
      4194308,
      4,
      Mc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return fi(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return fi(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = It();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var o = It();
    return t = n !== void 0 ? n(t) : t, o.memoizedState = o.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, o.queue = e, e = e.dispatch = Hh.bind(null, Me, e), [o.memoizedState, e];
  }, useRef: function(e) {
    var t = It();
    return e = { current: e }, t.memoizedState = e;
  }, useState: _c, useDebugValue: xs, useDeferredValue: function(e) {
    return It().memoizedState = e;
  }, useTransition: function() {
    var e = _c(!1), t = e[0];
    return e = Uh.bind(null, e[1]), It().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var o = Me, s = It();
    if (Oe) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else {
      if (n = t(), He === null) throw Error(i(349));
      Dn & 30 || Ec(o, t, n);
    }
    s.memoizedState = n;
    var a = { value: n, getSnapshot: t };
    return s.queue = a, Oc(Pc.bind(
      null,
      o,
      a,
      e
    ), [e]), o.flags |= 2048, fo(9, bc.bind(null, o, a, n, t), void 0, null), n;
  }, useId: function() {
    var e = It(), t = He.identifierPrefix;
    if (Oe) {
      var n = Vt, o = $t;
      n = (o & ~(1 << 32 - Ct(o) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = uo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Vh++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Yh = {
    readContext: vt,
    useCallback: jc,
    useContext: vt,
    useEffect: ws,
    useImperativeHandle: Ic,
    useInsertionEffect: Ac,
    useLayoutEffect: Lc,
    useMemo: Dc,
    useReducer: vs,
    useRef: Tc,
    useState: function() {
      return vs(co);
    },
    useDebugValue: xs,
    useDeferredValue: function(e) {
      var t = yt();
      return zc(t, Be.memoizedState, e);
    },
    useTransition: function() {
      var e = vs(co)[0], t = yt().memoizedState;
      return [e, t];
    },
    useMutableSource: Cc,
    useSyncExternalStore: kc,
    useId: Fc,
    unstable_isNewReconciler: !1
  }, Gh = { readContext: vt, useCallback: jc, useContext: vt, useEffect: ws, useImperativeHandle: Ic, useInsertionEffect: Ac, useLayoutEffect: Lc, useMemo: Dc, useReducer: ys, useRef: Tc, useState: function() {
    return ys(co);
  }, useDebugValue: xs, useDeferredValue: function(e) {
    var t = yt();
    return Be === null ? t.memoizedState = e : zc(t, Be.memoizedState, e);
  }, useTransition: function() {
    var e = ys(co)[0], t = yt().memoizedState;
    return [e, t];
  }, useMutableSource: Cc, useSyncExternalStore: kc, useId: Fc, unstable_isNewReconciler: !1 };
  function bt(e, t) {
    if (e && e.defaultProps) {
      t = K({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ss(e, t, n, o) {
    t = e.memoizedState, n = n(o, t), n = n == null ? t : K({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var hi = { isMounted: function(e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var o = tt(), s = gn(e), a = Ht(o, s);
    a.payload = t, n != null && (a.callback = n), t = fn(e, a, s), t !== null && (Rt(t, e, s, o), si(t, e, s));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var o = tt(), s = gn(e), a = Ht(o, s);
    a.tag = 1, a.payload = t, n != null && (a.callback = n), t = fn(e, a, s), t !== null && (Rt(t, e, s, o), si(t, e, s));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = tt(), o = gn(e), s = Ht(n, o);
    s.tag = 2, t != null && (s.callback = t), t = fn(e, s, o), t !== null && (Rt(t, e, o, n), si(t, e, o));
  } };
  function Vc(e, t, n, o, s, a, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, a, f) : t.prototype && t.prototype.isPureReactComponent ? !Zr(n, o) || !Zr(s, a) : !0;
  }
  function Uc(e, t, n) {
    var o = !1, s = un, a = t.contextType;
    return typeof a == "object" && a !== null ? a = vt(a) : (s = ot(t) ? An : Xe.current, o = t.contextTypes, a = (o = o != null) ? ar(e, s) : un), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = hi, e.stateNode = t, t._reactInternals = e, o && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = a), t;
  }
  function Hc(e, t, n, o) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, o), t.state !== e && hi.enqueueReplaceState(t, t.state, null);
  }
  function Cs(e, t, n, o) {
    var s = e.stateNode;
    s.props = n, s.state = e.memoizedState, s.refs = {}, as(e);
    var a = t.contextType;
    typeof a == "object" && a !== null ? s.context = vt(a) : (a = ot(t) ? An : Xe.current, s.context = ar(e, a)), s.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Ss(e, t, a, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && hi.enqueueReplaceState(s, s.state, null), ai(e, n, s, o), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function gr(e, t) {
    try {
      var n = "", o = t;
      do
        n += ye(o), o = o.return;
      while (o);
      var s = n;
    } catch (a) {
      s = `
Error generating stack: ` + a.message + `
` + a.stack;
    }
    return { value: e, source: t, stack: s, digest: null };
  }
  function ks(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Es(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Xh = typeof WeakMap == "function" ? WeakMap : Map;
  function Kc(e, t, n) {
    n = Ht(-1, n), n.tag = 3, n.payload = { element: null };
    var o = t.value;
    return n.callback = function() {
      Ci || (Ci = !0, Fs = o), Es(e, t);
    }, n;
  }
  function Qc(e, t, n) {
    n = Ht(-1, n), n.tag = 3;
    var o = e.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var s = t.value;
      n.payload = function() {
        return o(s);
      }, n.callback = function() {
        Es(e, t);
      };
    }
    var a = e.stateNode;
    return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
      Es(e, t), typeof o != "function" && (mn === null ? mn = /* @__PURE__ */ new Set([this]) : mn.add(this));
      var f = t.stack;
      this.componentDidCatch(t.value, { componentStack: f !== null ? f : "" });
    }), n;
  }
  function Yc(e, t, n) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Xh();
      var s = /* @__PURE__ */ new Set();
      o.set(t, s);
    } else s = o.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), o.set(t, s));
    s.has(n) || (s.add(n), e = cg.bind(null, e, t, n), t.then(e, e));
  }
  function Gc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Xc(e, t, n, o, s) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = s, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ht(-1, 1), t.tag = 2, fn(n, t, 1))), n.lanes |= 1), e);
  }
  var Zh = z.ReactCurrentOwner, it = !1;
  function et(e, t, n, o) {
    t.child = e === null ? gc(t, null, n, o) : fr(t, e.child, n, o);
  }
  function Zc(e, t, n, o, s) {
    n = n.render;
    var a = t.ref;
    return mr(t, s), o = hs(e, t, n, o, a, s), n = gs(), e !== null && !it ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Kt(e, t, s)) : (Oe && n && Jl(t), t.flags |= 1, et(e, t, o, s), t.child);
  }
  function Jc(e, t, n, o, s) {
    if (e === null) {
      var a = n.type;
      return typeof a == "function" && !Ks(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, qc(e, t, a, o, s)) : (e = Ri(n.type, null, o, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (a = e.child, !(e.lanes & s)) {
      var f = a.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Zr, n(f, o) && e.ref === t.ref) return Kt(e, t, s);
    }
    return t.flags |= 1, e = yn(a, o), e.ref = t.ref, e.return = t, t.child = e;
  }
  function qc(e, t, n, o, s) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (Zr(a, o) && e.ref === t.ref) if (it = !1, t.pendingProps = o = a, (e.lanes & s) !== 0) e.flags & 131072 && (it = !0);
      else return t.lanes = e.lanes, Kt(e, t, s);
    }
    return bs(e, t, n, o, s);
  }
  function ed(e, t, n) {
    var o = t.pendingProps, s = o.children, a = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Pe(yr, ft), ft |= n;
    else {
      if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Pe(yr, ft), ft |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = a !== null ? a.baseLanes : n, Pe(yr, ft), ft |= o;
    }
    else a !== null ? (o = a.baseLanes | n, t.memoizedState = null) : o = n, Pe(yr, ft), ft |= o;
    return et(e, t, s, n), t.child;
  }
  function td(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function bs(e, t, n, o, s) {
    var a = ot(n) ? An : Xe.current;
    return a = ar(t, a), mr(t, s), n = hs(e, t, n, o, a, s), o = gs(), e !== null && !it ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Kt(e, t, s)) : (Oe && o && Jl(t), t.flags |= 1, et(e, t, n, s), t.child);
  }
  function nd(e, t, n, o, s) {
    if (ot(n)) {
      var a = !0;
      qo(t);
    } else a = !1;
    if (mr(t, s), t.stateNode === null) vi(e, t), Uc(t, n, o), Cs(t, n, o, s), o = !0;
    else if (e === null) {
      var f = t.stateNode, v = t.memoizedProps;
      f.props = v;
      var w = f.context, L = n.contextType;
      typeof L == "object" && L !== null ? L = vt(L) : (L = ot(n) ? An : Xe.current, L = ar(t, L));
      var W = n.getDerivedStateFromProps, B = typeof W == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      B || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (v !== o || w !== L) && Hc(t, f, o, L), dn = !1;
      var F = t.memoizedState;
      f.state = F, ai(t, o, f, s), w = t.memoizedState, v !== o || F !== w || rt.current || dn ? (typeof W == "function" && (Ss(t, n, W, o), w = t.memoizedState), (v = dn || Vc(t, n, v, o, F, w, L)) ? (B || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = o, t.memoizedState = w), f.props = o, f.state = w, f.context = L, o = v) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), o = !1);
    } else {
      f = t.stateNode, yc(e, t), v = t.memoizedProps, L = t.type === t.elementType ? v : bt(t.type, v), f.props = L, B = t.pendingProps, F = f.context, w = n.contextType, typeof w == "object" && w !== null ? w = vt(w) : (w = ot(n) ? An : Xe.current, w = ar(t, w));
      var Y = n.getDerivedStateFromProps;
      (W = typeof Y == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (v !== B || F !== w) && Hc(t, f, o, w), dn = !1, F = t.memoizedState, f.state = F, ai(t, o, f, s);
      var Z = t.memoizedState;
      v !== B || F !== Z || rt.current || dn ? (typeof Y == "function" && (Ss(t, n, Y, o), Z = t.memoizedState), (L = dn || Vc(t, n, L, o, F, Z, w) || !1) ? (W || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(o, Z, w), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(o, Z, w)), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || v === e.memoizedProps && F === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && F === e.memoizedState || (t.flags |= 1024), t.memoizedProps = o, t.memoizedState = Z), f.props = o, f.state = Z, f.context = w, o = L) : (typeof f.componentDidUpdate != "function" || v === e.memoizedProps && F === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && F === e.memoizedState || (t.flags |= 1024), o = !1);
    }
    return Ps(e, t, n, o, a, s);
  }
  function Ps(e, t, n, o, s, a) {
    td(e, t);
    var f = (t.flags & 128) !== 0;
    if (!o && !f) return s && sc(t, n, !1), Kt(e, t, a);
    o = t.stateNode, Zh.current = t;
    var v = f && typeof n.getDerivedStateFromError != "function" ? null : o.render();
    return t.flags |= 1, e !== null && f ? (t.child = fr(t, e.child, null, a), t.child = fr(t, null, v, a)) : et(e, t, v, a), t.memoizedState = o.state, s && sc(t, n, !0), t.child;
  }
  function rd(e) {
    var t = e.stateNode;
    t.pendingContext ? ic(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ic(e, t.context, !1), us(e, t.containerInfo);
  }
  function od(e, t, n, o, s) {
    return dr(), ns(s), t.flags |= 256, et(e, t, n, o), t.child;
  }
  var Ns = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Rs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function id(e, t, n) {
    var o = t.pendingProps, s = Le.current, a = !1, f = (t.flags & 128) !== 0, v;
    if ((v = f) || (v = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), v ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), Pe(Le, s & 1), e === null)
      return ts(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (f = o.children, e = o.fallback, a ? (o = t.mode, a = t.child, f = { mode: "hidden", children: f }, !(o & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = f) : a = _i(f, o, 0, null), e = $n(e, o, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = Rs(n), t.memoizedState = Ns, e) : _s(t, f));
    if (s = e.memoizedState, s !== null && (v = s.dehydrated, v !== null)) return Jh(e, t, f, o, v, s, n);
    if (a) {
      a = o.fallback, f = t.mode, s = e.child, v = s.sibling;
      var w = { mode: "hidden", children: o.children };
      return !(f & 1) && t.child !== s ? (o = t.child, o.childLanes = 0, o.pendingProps = w, t.deletions = null) : (o = yn(s, w), o.subtreeFlags = s.subtreeFlags & 14680064), v !== null ? a = yn(v, a) : (a = $n(a, f, n, null), a.flags |= 2), a.return = t, o.return = t, o.sibling = a, t.child = o, o = a, a = t.child, f = e.child.memoizedState, f = f === null ? Rs(n) : { baseLanes: f.baseLanes | n, cachePool: null, transitions: f.transitions }, a.memoizedState = f, a.childLanes = e.childLanes & ~n, t.memoizedState = Ns, o;
    }
    return a = e.child, e = a.sibling, o = yn(a, { mode: "visible", children: o.children }), !(t.mode & 1) && (o.lanes = n), o.return = t, o.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = o, t.memoizedState = null, o;
  }
  function _s(e, t) {
    return t = _i({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function gi(e, t, n, o) {
    return o !== null && ns(o), fr(t, e.child, null, n), e = _s(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Jh(e, t, n, o, s, a, f) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, o = ks(Error(i(422))), gi(e, t, f, o)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = o.fallback, s = t.mode, o = _i({ mode: "visible", children: o.children }, s, 0, null), a = $n(a, s, f, null), a.flags |= 2, o.return = t, a.return = t, o.sibling = a, t.child = o, t.mode & 1 && fr(t, e.child, null, f), t.child.memoizedState = Rs(f), t.memoizedState = Ns, a);
    if (!(t.mode & 1)) return gi(e, t, f, null);
    if (s.data === "$!") {
      if (o = s.nextSibling && s.nextSibling.dataset, o) var v = o.dgst;
      return o = v, a = Error(i(419)), o = ks(a, o, void 0), gi(e, t, f, o);
    }
    if (v = (f & e.childLanes) !== 0, it || v) {
      if (o = He, o !== null) {
        switch (f & -f) {
          case 4:
            s = 2;
            break;
          case 16:
            s = 8;
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
            s = 32;
            break;
          case 536870912:
            s = 268435456;
            break;
          default:
            s = 0;
        }
        s = s & (o.suspendedLanes | f) ? 0 : s, s !== 0 && s !== a.retryLane && (a.retryLane = s, Ut(e, s), Rt(o, e, s, -1));
      }
      return Hs(), o = ks(Error(i(421))), gi(e, t, f, o);
    }
    return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = dg.bind(null, e), s._reactRetry = t, null) : (e = a.treeContext, dt = sn(s.nextSibling), ct = t, Oe = !0, Et = null, e !== null && (ht[gt++] = $t, ht[gt++] = Vt, ht[gt++] = Ln, $t = e.id, Vt = e.overflow, Ln = t), t = _s(t, o.children), t.flags |= 4096, t);
  }
  function ld(e, t, n) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), ls(e.return, t, n);
  }
  function Ts(e, t, n, o, s) {
    var a = e.memoizedState;
    a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: o, tail: n, tailMode: s } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = o, a.tail = n, a.tailMode = s);
  }
  function sd(e, t, n) {
    var o = t.pendingProps, s = o.revealOrder, a = o.tail;
    if (et(e, t, o.children, n), o = Le.current, o & 2) o = o & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ld(e, n, t);
        else if (e.tag === 19) ld(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      o &= 1;
    }
    if (Pe(Le, o), !(t.mode & 1)) t.memoizedState = null;
    else switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; ) e = n.alternate, e !== null && ui(e) === null && (s = n), n = n.sibling;
        n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), Ts(t, !1, s, n, a);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && ui(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = n, n = s, s = e;
        }
        Ts(t, !0, n, null, a);
        break;
      case "together":
        Ts(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function vi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Kt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), zn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, n = yn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = yn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function qh(e, t, n) {
    switch (t.tag) {
      case 3:
        rd(t), dr();
        break;
      case 5:
        Sc(t);
        break;
      case 1:
        ot(t.type) && qo(t);
        break;
      case 4:
        us(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context, s = t.memoizedProps.value;
        Pe(ii, o._currentValue), o._currentValue = s;
        break;
      case 13:
        if (o = t.memoizedState, o !== null)
          return o.dehydrated !== null ? (Pe(Le, Le.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? id(e, t, n) : (Pe(Le, Le.current & 1), e = Kt(e, t, n), e !== null ? e.sibling : null);
        Pe(Le, Le.current & 1);
        break;
      case 19:
        if (o = (n & t.childLanes) !== 0, e.flags & 128) {
          if (o) return sd(e, t, n);
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Pe(Le, Le.current), o) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, ed(e, t, n);
    }
    return Kt(e, t, n);
  }
  var ad, Os, ud, cd;
  ad = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, Os = function() {
  }, ud = function(e, t, n, o) {
    var s = e.memoizedProps;
    if (s !== o) {
      e = t.stateNode, jn(Mt.current);
      var a = null;
      switch (n) {
        case "input":
          s = St(e, s), o = St(e, o), a = [];
          break;
        case "select":
          s = K({}, s, { value: void 0 }), o = K({}, o, { value: void 0 }), a = [];
          break;
        case "textarea":
          s = ul(e, s), o = ul(e, o), a = [];
          break;
        default:
          typeof s.onClick != "function" && typeof o.onClick == "function" && (e.onclick = Xo);
      }
      dl(n, o);
      var f;
      n = null;
      for (L in s) if (!o.hasOwnProperty(L) && s.hasOwnProperty(L) && s[L] != null) if (L === "style") {
        var v = s[L];
        for (f in v) v.hasOwnProperty(f) && (n || (n = {}), n[f] = "");
      } else L !== "dangerouslySetInnerHTML" && L !== "children" && L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && L !== "autoFocus" && (c.hasOwnProperty(L) ? a || (a = []) : (a = a || []).push(L, null));
      for (L in o) {
        var w = o[L];
        if (v = s?.[L], o.hasOwnProperty(L) && w !== v && (w != null || v != null)) if (L === "style") if (v) {
          for (f in v) !v.hasOwnProperty(f) || w && w.hasOwnProperty(f) || (n || (n = {}), n[f] = "");
          for (f in w) w.hasOwnProperty(f) && v[f] !== w[f] && (n || (n = {}), n[f] = w[f]);
        } else n || (a || (a = []), a.push(
          L,
          n
        )), n = w;
        else L === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, v = v ? v.__html : void 0, w != null && v !== w && (a = a || []).push(L, w)) : L === "children" ? typeof w != "string" && typeof w != "number" || (a = a || []).push(L, "" + w) : L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && (c.hasOwnProperty(L) ? (w != null && L === "onScroll" && Re("scroll", e), a || v === w || (a = [])) : (a = a || []).push(L, w));
      }
      n && (a = a || []).push("style", n);
      var L = a;
      (t.updateQueue = L) && (t.flags |= 4);
    }
  }, cd = function(e, t, n, o) {
    n !== o && (t.flags |= 4);
  };
  function po(e, t) {
    if (!Oe) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var o = null; n !== null; ) n.alternate !== null && (o = n), n = n.sibling;
        o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
    }
  }
  function Je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, o = 0;
    if (t) for (var s = e.child; s !== null; ) n |= s.lanes | s.childLanes, o |= s.subtreeFlags & 14680064, o |= s.flags & 14680064, s.return = e, s = s.sibling;
    else for (s = e.child; s !== null; ) n |= s.lanes | s.childLanes, o |= s.subtreeFlags, o |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= o, e.childLanes = n, t;
  }
  function eg(e, t, n) {
    var o = t.pendingProps;
    switch (ql(t), t.tag) {
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
        return Je(t), null;
      case 1:
        return ot(t.type) && Jo(), Je(t), null;
      case 3:
        return o = t.stateNode, hr(), _e(rt), _e(Xe), fs(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (e === null || e.child === null) && (ri(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Et !== null && ($s(Et), Et = null))), Os(e, t), Je(t), null;
      case 5:
        cs(t);
        var s = jn(so.current);
        if (n = t.type, e !== null && t.stateNode != null) ud(e, t, n, o, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(i(166));
            return Je(t), null;
          }
          if (e = jn(Mt.current), ri(t)) {
            o = t.stateNode, n = t.type;
            var a = t.memoizedProps;
            switch (o[Lt] = t, o[no] = a, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Re("cancel", o), Re("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Re("load", o);
                break;
              case "video":
              case "audio":
                for (s = 0; s < qr.length; s++) Re(qr[s], o);
                break;
              case "source":
                Re("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Re(
                  "error",
                  o
                ), Re("load", o);
                break;
              case "details":
                Re("toggle", o);
                break;
              case "input":
                Yn(o, a), Re("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!a.multiple }, Re("invalid", o);
                break;
              case "textarea":
                Qa(o, a), Re("invalid", o);
            }
            dl(n, a), s = null;
            for (var f in a) if (a.hasOwnProperty(f)) {
              var v = a[f];
              f === "children" ? typeof v == "string" ? o.textContent !== v && (a.suppressHydrationWarning !== !0 && Go(o.textContent, v, e), s = ["children", v]) : typeof v == "number" && o.textContent !== "" + v && (a.suppressHydrationWarning !== !0 && Go(
                o.textContent,
                v,
                e
              ), s = ["children", "" + v]) : c.hasOwnProperty(f) && v != null && f === "onScroll" && Re("scroll", o);
            }
            switch (n) {
              case "input":
                Ee(o), Ka(o, a, !0);
                break;
              case "textarea":
                Ee(o), Ga(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof a.onClick == "function" && (o.onclick = Xo);
            }
            o = s, t.updateQueue = o, o !== null && (t.flags |= 4);
          } else {
            f = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Xa(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = f.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof o.is == "string" ? e = f.createElement(n, { is: o.is }) : (e = f.createElement(n), n === "select" && (f = e, o.multiple ? f.multiple = !0 : o.size && (f.size = o.size))) : e = f.createElementNS(e, n), e[Lt] = t, e[no] = o, ad(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (f = fl(n, o), n) {
                case "dialog":
                  Re("cancel", e), Re("close", e), s = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Re("load", e), s = o;
                  break;
                case "video":
                case "audio":
                  for (s = 0; s < qr.length; s++) Re(qr[s], e);
                  s = o;
                  break;
                case "source":
                  Re("error", e), s = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Re(
                    "error",
                    e
                  ), Re("load", e), s = o;
                  break;
                case "details":
                  Re("toggle", e), s = o;
                  break;
                case "input":
                  Yn(e, o), s = St(e, o), Re("invalid", e);
                  break;
                case "option":
                  s = o;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!o.multiple }, s = K({}, o, { value: void 0 }), Re("invalid", e);
                  break;
                case "textarea":
                  Qa(e, o), s = ul(e, o), Re("invalid", e);
                  break;
                default:
                  s = o;
              }
              dl(n, s), v = s;
              for (a in v) if (v.hasOwnProperty(a)) {
                var w = v[a];
                a === "style" ? qa(e, w) : a === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && Za(e, w)) : a === "children" ? typeof w == "string" ? (n !== "textarea" || w !== "") && Mr(e, w) : typeof w == "number" && Mr(e, "" + w) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (c.hasOwnProperty(a) ? w != null && a === "onScroll" && Re("scroll", e) : w != null && j(e, a, w, f));
              }
              switch (n) {
                case "input":
                  Ee(e), Ka(e, o, !1);
                  break;
                case "textarea":
                  Ee(e), Ga(e);
                  break;
                case "option":
                  o.value != null && e.setAttribute("value", "" + re(o.value));
                  break;
                case "select":
                  e.multiple = !!o.multiple, a = o.value, a != null ? Xn(e, !!o.multiple, a, !1) : o.defaultValue != null && Xn(
                    e,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof s.onClick == "function" && (e.onclick = Xo);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Je(t), null;
      case 6:
        if (e && t.stateNode != null) cd(e, t, e.memoizedProps, o);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(i(166));
          if (n = jn(so.current), jn(Mt.current), ri(t)) {
            if (o = t.stateNode, n = t.memoizedProps, o[Lt] = t, (a = o.nodeValue !== n) && (e = ct, e !== null)) switch (e.tag) {
              case 3:
                Go(o.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Go(o.nodeValue, n, (e.mode & 1) !== 0);
            }
            a && (t.flags |= 4);
          } else o = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(o), o[Lt] = t, t.stateNode = o;
        }
        return Je(t), null;
      case 13:
        if (_e(Le), o = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Oe && dt !== null && t.mode & 1 && !(t.flags & 128)) pc(), dr(), t.flags |= 98560, a = !1;
          else if (a = ri(t), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(i(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(i(317));
              a[Lt] = t;
            } else dr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            Je(t), a = !1;
          } else Et !== null && ($s(Et), Et = null), a = !0;
          if (!a) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (o = o !== null, o !== (e !== null && e.memoizedState !== null) && o && (t.child.flags |= 8192, t.mode & 1 && (e === null || Le.current & 1 ? $e === 0 && ($e = 3) : Hs())), t.updateQueue !== null && (t.flags |= 4), Je(t), null);
      case 4:
        return hr(), Os(e, t), e === null && eo(t.stateNode.containerInfo), Je(t), null;
      case 10:
        return is(t.type._context), Je(t), null;
      case 17:
        return ot(t.type) && Jo(), Je(t), null;
      case 19:
        if (_e(Le), a = t.memoizedState, a === null) return Je(t), null;
        if (o = (t.flags & 128) !== 0, f = a.rendering, f === null) if (o) po(a, !1);
        else {
          if ($e !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (f = ui(e), f !== null) {
              for (t.flags |= 128, po(a, !1), o = f.updateQueue, o !== null && (t.updateQueue = o, t.flags |= 4), t.subtreeFlags = 0, o = n, n = t.child; n !== null; ) a = n, e = o, a.flags &= 14680066, f = a.alternate, f === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = f.childLanes, a.lanes = f.lanes, a.child = f.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = f.memoizedProps, a.memoizedState = f.memoizedState, a.updateQueue = f.updateQueue, a.type = f.type, e = f.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Pe(Le, Le.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          a.tail !== null && De() > wr && (t.flags |= 128, o = !0, po(a, !1), t.lanes = 4194304);
        }
        else {
          if (!o) if (e = ui(f), e !== null) {
            if (t.flags |= 128, o = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), po(a, !0), a.tail === null && a.tailMode === "hidden" && !f.alternate && !Oe) return Je(t), null;
          } else 2 * De() - a.renderingStartTime > wr && n !== 1073741824 && (t.flags |= 128, o = !0, po(a, !1), t.lanes = 4194304);
          a.isBackwards ? (f.sibling = t.child, t.child = f) : (n = a.last, n !== null ? n.sibling = f : t.child = f, a.last = f);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = De(), t.sibling = null, n = Le.current, Pe(Le, o ? n & 1 | 2 : n & 1), t) : (Je(t), null);
      case 22:
      case 23:
        return Us(), o = t.memoizedState !== null, e !== null && e.memoizedState !== null !== o && (t.flags |= 8192), o && t.mode & 1 ? ft & 1073741824 && (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Je(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function tg(e, t) {
    switch (ql(t), t.tag) {
      case 1:
        return ot(t.type) && Jo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return hr(), _e(rt), _e(Xe), fs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return cs(t), null;
      case 13:
        if (_e(Le), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(i(340));
          dr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return _e(Le), null;
      case 4:
        return hr(), null;
      case 10:
        return is(t.type._context), null;
      case 22:
      case 23:
        return Us(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var yi = !1, qe = !1, ng = typeof WeakSet == "function" ? WeakSet : Set, X = null;
  function vr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (o) {
      je(e, t, o);
    }
    else n.current = null;
  }
  function As(e, t, n) {
    try {
      n();
    } catch (o) {
      je(e, t, o);
    }
  }
  var dd = !1;
  function rg(e, t) {
    if (Ul = zo, e = Vu(), jl(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var o = n.getSelection && n.getSelection();
        if (o && o.rangeCount !== 0) {
          n = o.anchorNode;
          var s = o.anchorOffset, a = o.focusNode;
          o = o.focusOffset;
          try {
            n.nodeType, a.nodeType;
          } catch {
            n = null;
            break e;
          }
          var f = 0, v = -1, w = -1, L = 0, W = 0, B = e, F = null;
          t: for (; ; ) {
            for (var Y; B !== n || s !== 0 && B.nodeType !== 3 || (v = f + s), B !== a || o !== 0 && B.nodeType !== 3 || (w = f + o), B.nodeType === 3 && (f += B.nodeValue.length), (Y = B.firstChild) !== null; )
              F = B, B = Y;
            for (; ; ) {
              if (B === e) break t;
              if (F === n && ++L === s && (v = f), F === a && ++W === o && (w = f), (Y = B.nextSibling) !== null) break;
              B = F, F = B.parentNode;
            }
            B = Y;
          }
          n = v === -1 || w === -1 ? null : { start: v, end: w };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Hl = { focusedElem: e, selectionRange: n }, zo = !1, X = t; X !== null; ) if (t = X, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, X = e;
    else for (; X !== null; ) {
      t = X;
      try {
        var Z = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Z !== null) {
              var ee = Z.memoizedProps, ze = Z.memoizedState, N = t.stateNode, C = N.getSnapshotBeforeUpdate(t.elementType === t.type ? ee : bt(t.type, ee), ze);
              N.__reactInternalSnapshotBeforeUpdate = C;
            }
            break;
          case 3:
            var O = t.stateNode.containerInfo;
            O.nodeType === 1 ? O.textContent = "" : O.nodeType === 9 && O.documentElement && O.removeChild(O.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(i(163));
        }
      } catch (V) {
        je(t, t.return, V);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, X = e;
        break;
      }
      X = t.return;
    }
    return Z = dd, dd = !1, Z;
  }
  function mo(e, t, n) {
    var o = t.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var s = o = o.next;
      do {
        if ((s.tag & e) === e) {
          var a = s.destroy;
          s.destroy = void 0, a !== void 0 && As(t, n, a);
        }
        s = s.next;
      } while (s !== o);
    }
  }
  function wi(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var o = n.create;
          n.destroy = o();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Ls(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function fd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, fd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Lt], delete t[no], delete t[Gl], delete t[Fh], delete t[Wh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function pd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function md(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || pd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ms(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Xo));
    else if (o !== 4 && (e = e.child, e !== null)) for (Ms(e, t, n), e = e.sibling; e !== null; ) Ms(e, t, n), e = e.sibling;
  }
  function Is(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (o !== 4 && (e = e.child, e !== null)) for (Is(e, t, n), e = e.sibling; e !== null; ) Is(e, t, n), e = e.sibling;
  }
  var Ye = null, Pt = !1;
  function pn(e, t, n) {
    for (n = n.child; n !== null; ) hd(e, t, n), n = n.sibling;
  }
  function hd(e, t, n) {
    if (At && typeof At.onCommitFiberUnmount == "function") try {
      At.onCommitFiberUnmount(Ao, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        qe || vr(n, t);
      case 6:
        var o = Ye, s = Pt;
        Ye = null, pn(e, t, n), Ye = o, Pt = s, Ye !== null && (Pt ? (e = Ye, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ye.removeChild(n.stateNode));
        break;
      case 18:
        Ye !== null && (Pt ? (e = Ye, n = n.stateNode, e.nodeType === 8 ? Yl(e.parentNode, n) : e.nodeType === 1 && Yl(e, n), Hr(e)) : Yl(Ye, n.stateNode));
        break;
      case 4:
        o = Ye, s = Pt, Ye = n.stateNode.containerInfo, Pt = !0, pn(e, t, n), Ye = o, Pt = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!qe && (o = n.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          s = o = o.next;
          do {
            var a = s, f = a.destroy;
            a = a.tag, f !== void 0 && (a & 2 || a & 4) && As(n, t, f), s = s.next;
          } while (s !== o);
        }
        pn(e, t, n);
        break;
      case 1:
        if (!qe && (vr(n, t), o = n.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = n.memoizedProps, o.state = n.memoizedState, o.componentWillUnmount();
        } catch (v) {
          je(n, t, v);
        }
        pn(e, t, n);
        break;
      case 21:
        pn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (qe = (o = qe) || n.memoizedState !== null, pn(e, t, n), qe = o) : pn(e, t, n);
        break;
      default:
        pn(e, t, n);
    }
  }
  function gd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new ng()), t.forEach(function(o) {
        var s = fg.bind(null, e, o);
        n.has(o) || (n.add(o), o.then(s, s));
      });
    }
  }
  function Nt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var o = 0; o < n.length; o++) {
      var s = n[o];
      try {
        var a = e, f = t, v = f;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 5:
              Ye = v.stateNode, Pt = !1;
              break e;
            case 3:
              Ye = v.stateNode.containerInfo, Pt = !0;
              break e;
            case 4:
              Ye = v.stateNode.containerInfo, Pt = !0;
              break e;
          }
          v = v.return;
        }
        if (Ye === null) throw Error(i(160));
        hd(a, f, s), Ye = null, Pt = !1;
        var w = s.alternate;
        w !== null && (w.return = null), s.return = null;
      } catch (L) {
        je(s, t, L);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) vd(t, e), t = t.sibling;
  }
  function vd(e, t) {
    var n = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Nt(t, e), jt(e), o & 4) {
          try {
            mo(3, e, e.return), wi(3, e);
          } catch (ee) {
            je(e, e.return, ee);
          }
          try {
            mo(5, e, e.return);
          } catch (ee) {
            je(e, e.return, ee);
          }
        }
        break;
      case 1:
        Nt(t, e), jt(e), o & 512 && n !== null && vr(n, n.return);
        break;
      case 5:
        if (Nt(t, e), jt(e), o & 512 && n !== null && vr(n, n.return), e.flags & 32) {
          var s = e.stateNode;
          try {
            Mr(s, "");
          } catch (ee) {
            je(e, e.return, ee);
          }
        }
        if (o & 4 && (s = e.stateNode, s != null)) {
          var a = e.memoizedProps, f = n !== null ? n.memoizedProps : a, v = e.type, w = e.updateQueue;
          if (e.updateQueue = null, w !== null) try {
            v === "input" && a.type === "radio" && a.name != null && Gn(s, a), fl(v, f);
            var L = fl(v, a);
            for (f = 0; f < w.length; f += 2) {
              var W = w[f], B = w[f + 1];
              W === "style" ? qa(s, B) : W === "dangerouslySetInnerHTML" ? Za(s, B) : W === "children" ? Mr(s, B) : j(s, W, B, L);
            }
            switch (v) {
              case "input":
                _n(s, a);
                break;
              case "textarea":
                Ya(s, a);
                break;
              case "select":
                var F = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!a.multiple;
                var Y = a.value;
                Y != null ? Xn(s, !!a.multiple, Y, !1) : F !== !!a.multiple && (a.defaultValue != null ? Xn(
                  s,
                  !!a.multiple,
                  a.defaultValue,
                  !0
                ) : Xn(s, !!a.multiple, a.multiple ? [] : "", !1));
            }
            s[no] = a;
          } catch (ee) {
            je(e, e.return, ee);
          }
        }
        break;
      case 6:
        if (Nt(t, e), jt(e), o & 4) {
          if (e.stateNode === null) throw Error(i(162));
          s = e.stateNode, a = e.memoizedProps;
          try {
            s.nodeValue = a;
          } catch (ee) {
            je(e, e.return, ee);
          }
        }
        break;
      case 3:
        if (Nt(t, e), jt(e), o & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Hr(t.containerInfo);
        } catch (ee) {
          je(e, e.return, ee);
        }
        break;
      case 4:
        Nt(t, e), jt(e);
        break;
      case 13:
        Nt(t, e), jt(e), s = e.child, s.flags & 8192 && (a = s.memoizedState !== null, s.stateNode.isHidden = a, !a || s.alternate !== null && s.alternate.memoizedState !== null || (zs = De())), o & 4 && gd(e);
        break;
      case 22:
        if (W = n !== null && n.memoizedState !== null, e.mode & 1 ? (qe = (L = qe) || W, Nt(t, e), qe = L) : Nt(t, e), jt(e), o & 8192) {
          if (L = e.memoizedState !== null, (e.stateNode.isHidden = L) && !W && e.mode & 1) for (X = e, W = e.child; W !== null; ) {
            for (B = X = W; X !== null; ) {
              switch (F = X, Y = F.child, F.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mo(4, F, F.return);
                  break;
                case 1:
                  vr(F, F.return);
                  var Z = F.stateNode;
                  if (typeof Z.componentWillUnmount == "function") {
                    o = F, n = F.return;
                    try {
                      t = o, Z.props = t.memoizedProps, Z.state = t.memoizedState, Z.componentWillUnmount();
                    } catch (ee) {
                      je(o, n, ee);
                    }
                  }
                  break;
                case 5:
                  vr(F, F.return);
                  break;
                case 22:
                  if (F.memoizedState !== null) {
                    xd(B);
                    continue;
                  }
              }
              Y !== null ? (Y.return = F, X = Y) : xd(B);
            }
            W = W.sibling;
          }
          e: for (W = null, B = e; ; ) {
            if (B.tag === 5) {
              if (W === null) {
                W = B;
                try {
                  s = B.stateNode, L ? (a = s.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (v = B.stateNode, w = B.memoizedProps.style, f = w != null && w.hasOwnProperty("display") ? w.display : null, v.style.display = Ja("display", f));
                } catch (ee) {
                  je(e, e.return, ee);
                }
              }
            } else if (B.tag === 6) {
              if (W === null) try {
                B.stateNode.nodeValue = L ? "" : B.memoizedProps;
              } catch (ee) {
                je(e, e.return, ee);
              }
            } else if ((B.tag !== 22 && B.tag !== 23 || B.memoizedState === null || B === e) && B.child !== null) {
              B.child.return = B, B = B.child;
              continue;
            }
            if (B === e) break e;
            for (; B.sibling === null; ) {
              if (B.return === null || B.return === e) break e;
              W === B && (W = null), B = B.return;
            }
            W === B && (W = null), B.sibling.return = B.return, B = B.sibling;
          }
        }
        break;
      case 19:
        Nt(t, e), jt(e), o & 4 && gd(e);
        break;
      case 21:
        break;
      default:
        Nt(
          t,
          e
        ), jt(e);
    }
  }
  function jt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (pd(n)) {
              var o = n;
              break e;
            }
            n = n.return;
          }
          throw Error(i(160));
        }
        switch (o.tag) {
          case 5:
            var s = o.stateNode;
            o.flags & 32 && (Mr(s, ""), o.flags &= -33);
            var a = md(e);
            Is(e, a, s);
            break;
          case 3:
          case 4:
            var f = o.stateNode.containerInfo, v = md(e);
            Ms(e, v, f);
            break;
          default:
            throw Error(i(161));
        }
      } catch (w) {
        je(e, e.return, w);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function og(e, t, n) {
    X = e, yd(e);
  }
  function yd(e, t, n) {
    for (var o = (e.mode & 1) !== 0; X !== null; ) {
      var s = X, a = s.child;
      if (s.tag === 22 && o) {
        var f = s.memoizedState !== null || yi;
        if (!f) {
          var v = s.alternate, w = v !== null && v.memoizedState !== null || qe;
          v = yi;
          var L = qe;
          if (yi = f, (qe = w) && !L) for (X = s; X !== null; ) f = X, w = f.child, f.tag === 22 && f.memoizedState !== null ? Sd(s) : w !== null ? (w.return = f, X = w) : Sd(s);
          for (; a !== null; ) X = a, yd(a), a = a.sibling;
          X = s, yi = v, qe = L;
        }
        wd(e);
      } else s.subtreeFlags & 8772 && a !== null ? (a.return = s, X = a) : wd(e);
    }
  }
  function wd(e) {
    for (; X !== null; ) {
      var t = X;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              qe || wi(5, t);
              break;
            case 1:
              var o = t.stateNode;
              if (t.flags & 4 && !qe) if (n === null) o.componentDidMount();
              else {
                var s = t.elementType === t.type ? n.memoizedProps : bt(t.type, n.memoizedProps);
                o.componentDidUpdate(s, n.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var a = t.updateQueue;
              a !== null && xc(t, a, o);
              break;
            case 3:
              var f = t.updateQueue;
              if (f !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                xc(t, f, n);
              }
              break;
            case 5:
              var v = t.stateNode;
              if (n === null && t.flags & 4) {
                n = v;
                var w = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    w.autoFocus && n.focus();
                    break;
                  case "img":
                    w.src && (n.src = w.src);
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
                var L = t.alternate;
                if (L !== null) {
                  var W = L.memoizedState;
                  if (W !== null) {
                    var B = W.dehydrated;
                    B !== null && Hr(B);
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
              throw Error(i(163));
          }
          qe || t.flags & 512 && Ls(t);
        } catch (F) {
          je(t, t.return, F);
        }
      }
      if (t === e) {
        X = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, X = n;
        break;
      }
      X = t.return;
    }
  }
  function xd(e) {
    for (; X !== null; ) {
      var t = X;
      if (t === e) {
        X = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, X = n;
        break;
      }
      X = t.return;
    }
  }
  function Sd(e) {
    for (; X !== null; ) {
      var t = X;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              wi(4, t);
            } catch (w) {
              je(t, n, w);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == "function") {
              var s = t.return;
              try {
                o.componentDidMount();
              } catch (w) {
                je(t, s, w);
              }
            }
            var a = t.return;
            try {
              Ls(t);
            } catch (w) {
              je(t, a, w);
            }
            break;
          case 5:
            var f = t.return;
            try {
              Ls(t);
            } catch (w) {
              je(t, f, w);
            }
        }
      } catch (w) {
        je(t, t.return, w);
      }
      if (t === e) {
        X = null;
        break;
      }
      var v = t.sibling;
      if (v !== null) {
        v.return = t.return, X = v;
        break;
      }
      X = t.return;
    }
  }
  var ig = Math.ceil, xi = z.ReactCurrentDispatcher, js = z.ReactCurrentOwner, wt = z.ReactCurrentBatchConfig, Ce = 0, He = null, We = null, Ge = 0, ft = 0, yr = an(0), $e = 0, ho = null, zn = 0, Si = 0, Ds = 0, go = null, lt = null, zs = 0, wr = 1 / 0, Qt = null, Ci = !1, Fs = null, mn = null, ki = !1, hn = null, Ei = 0, vo = 0, Ws = null, bi = -1, Pi = 0;
  function tt() {
    return Ce & 6 ? De() : bi !== -1 ? bi : bi = De();
  }
  function gn(e) {
    return e.mode & 1 ? Ce & 2 && Ge !== 0 ? Ge & -Ge : $h.transition !== null ? (Pi === 0 && (Pi = mu()), Pi) : (e = be, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ku(e.type)), e) : 1;
  }
  function Rt(e, t, n, o) {
    if (50 < vo) throw vo = 0, Ws = null, Error(i(185));
    Wr(e, n, o), (!(Ce & 2) || e !== He) && (e === He && (!(Ce & 2) && (Si |= n), $e === 4 && vn(e, Ge)), st(e, o), n === 1 && Ce === 0 && !(t.mode & 1) && (wr = De() + 500, ei && cn()));
  }
  function st(e, t) {
    var n = e.callbackNode;
    $m(e, t);
    var o = Io(e, e === He ? Ge : 0);
    if (o === 0) n !== null && du(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = o & -o, e.callbackPriority !== t) {
      if (n != null && du(n), t === 1) e.tag === 0 ? Bh(kd.bind(null, e)) : ac(kd.bind(null, e)), Dh(function() {
        !(Ce & 6) && cn();
      }), n = null;
      else {
        switch (hu(o)) {
          case 1:
            n = wl;
            break;
          case 4:
            n = fu;
            break;
          case 16:
            n = Oo;
            break;
          case 536870912:
            n = pu;
            break;
          default:
            n = Oo;
        }
        n = Od(n, Cd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Cd(e, t) {
    if (bi = -1, Pi = 0, Ce & 6) throw Error(i(327));
    var n = e.callbackNode;
    if (xr() && e.callbackNode !== n) return null;
    var o = Io(e, e === He ? Ge : 0);
    if (o === 0) return null;
    if (o & 30 || o & e.expiredLanes || t) t = Ni(e, o);
    else {
      t = o;
      var s = Ce;
      Ce |= 2;
      var a = bd();
      (He !== e || Ge !== t) && (Qt = null, wr = De() + 500, Wn(e, t));
      do
        try {
          ag();
          break;
        } catch (v) {
          Ed(e, v);
        }
      while (!0);
      os(), xi.current = a, Ce = s, We !== null ? t = 0 : (He = null, Ge = 0, t = $e);
    }
    if (t !== 0) {
      if (t === 2 && (s = xl(e), s !== 0 && (o = s, t = Bs(e, s))), t === 1) throw n = ho, Wn(e, 0), vn(e, o), st(e, De()), n;
      if (t === 6) vn(e, o);
      else {
        if (s = e.current.alternate, !(o & 30) && !lg(s) && (t = Ni(e, o), t === 2 && (a = xl(e), a !== 0 && (o = a, t = Bs(e, a))), t === 1)) throw n = ho, Wn(e, 0), vn(e, o), st(e, De()), n;
        switch (e.finishedWork = s, e.finishedLanes = o, t) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            Bn(e, lt, Qt);
            break;
          case 3:
            if (vn(e, o), (o & 130023424) === o && (t = zs + 500 - De(), 10 < t)) {
              if (Io(e, 0) !== 0) break;
              if (s = e.suspendedLanes, (s & o) !== o) {
                tt(), e.pingedLanes |= e.suspendedLanes & s;
                break;
              }
              e.timeoutHandle = Ql(Bn.bind(null, e, lt, Qt), t);
              break;
            }
            Bn(e, lt, Qt);
            break;
          case 4:
            if (vn(e, o), (o & 4194240) === o) break;
            for (t = e.eventTimes, s = -1; 0 < o; ) {
              var f = 31 - Ct(o);
              a = 1 << f, f = t[f], f > s && (s = f), o &= ~a;
            }
            if (o = s, o = De() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * ig(o / 1960)) - o, 10 < o) {
              e.timeoutHandle = Ql(Bn.bind(null, e, lt, Qt), o);
              break;
            }
            Bn(e, lt, Qt);
            break;
          case 5:
            Bn(e, lt, Qt);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return st(e, De()), e.callbackNode === n ? Cd.bind(null, e) : null;
  }
  function Bs(e, t) {
    var n = go;
    return e.current.memoizedState.isDehydrated && (Wn(e, t).flags |= 256), e = Ni(e, t), e !== 2 && (t = lt, lt = n, t !== null && $s(t)), e;
  }
  function $s(e) {
    lt === null ? lt = e : lt.push.apply(lt, e);
  }
  function lg(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var o = 0; o < n.length; o++) {
          var s = n[o], a = s.getSnapshot;
          s = s.value;
          try {
            if (!kt(a(), s)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function vn(e, t) {
    for (t &= ~Ds, t &= ~Si, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Ct(t), o = 1 << n;
      e[n] = -1, t &= ~o;
    }
  }
  function kd(e) {
    if (Ce & 6) throw Error(i(327));
    xr();
    var t = Io(e, 0);
    if (!(t & 1)) return st(e, De()), null;
    var n = Ni(e, t);
    if (e.tag !== 0 && n === 2) {
      var o = xl(e);
      o !== 0 && (t = o, n = Bs(e, o));
    }
    if (n === 1) throw n = ho, Wn(e, 0), vn(e, t), st(e, De()), n;
    if (n === 6) throw Error(i(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Bn(e, lt, Qt), st(e, De()), null;
  }
  function Vs(e, t) {
    var n = Ce;
    Ce |= 1;
    try {
      return e(t);
    } finally {
      Ce = n, Ce === 0 && (wr = De() + 500, ei && cn());
    }
  }
  function Fn(e) {
    hn !== null && hn.tag === 0 && !(Ce & 6) && xr();
    var t = Ce;
    Ce |= 1;
    var n = wt.transition, o = be;
    try {
      if (wt.transition = null, be = 1, e) return e();
    } finally {
      be = o, wt.transition = n, Ce = t, !(Ce & 6) && cn();
    }
  }
  function Us() {
    ft = yr.current, _e(yr);
  }
  function Wn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, jh(n)), We !== null) for (n = We.return; n !== null; ) {
      var o = n;
      switch (ql(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && Jo();
          break;
        case 3:
          hr(), _e(rt), _e(Xe), fs();
          break;
        case 5:
          cs(o);
          break;
        case 4:
          hr();
          break;
        case 13:
          _e(Le);
          break;
        case 19:
          _e(Le);
          break;
        case 10:
          is(o.type._context);
          break;
        case 22:
        case 23:
          Us();
      }
      n = n.return;
    }
    if (He = e, We = e = yn(e.current, null), Ge = ft = t, $e = 0, ho = null, Ds = Si = zn = 0, lt = go = null, In !== null) {
      for (t = 0; t < In.length; t++) if (n = In[t], o = n.interleaved, o !== null) {
        n.interleaved = null;
        var s = o.next, a = n.pending;
        if (a !== null) {
          var f = a.next;
          a.next = s, o.next = f;
        }
        n.pending = o;
      }
      In = null;
    }
    return e;
  }
  function Ed(e, t) {
    do {
      var n = We;
      try {
        if (os(), ci.current = mi, di) {
          for (var o = Me.memoizedState; o !== null; ) {
            var s = o.queue;
            s !== null && (s.pending = null), o = o.next;
          }
          di = !1;
        }
        if (Dn = 0, Ue = Be = Me = null, ao = !1, uo = 0, js.current = null, n === null || n.return === null) {
          $e = 1, ho = t, We = null;
          break;
        }
        e: {
          var a = e, f = n.return, v = n, w = t;
          if (t = Ge, v.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var L = w, W = v, B = W.tag;
            if (!(W.mode & 1) && (B === 0 || B === 11 || B === 15)) {
              var F = W.alternate;
              F ? (W.updateQueue = F.updateQueue, W.memoizedState = F.memoizedState, W.lanes = F.lanes) : (W.updateQueue = null, W.memoizedState = null);
            }
            var Y = Gc(f);
            if (Y !== null) {
              Y.flags &= -257, Xc(Y, f, v, a, t), Y.mode & 1 && Yc(a, L, t), t = Y, w = L;
              var Z = t.updateQueue;
              if (Z === null) {
                var ee = /* @__PURE__ */ new Set();
                ee.add(w), t.updateQueue = ee;
              } else Z.add(w);
              break e;
            } else {
              if (!(t & 1)) {
                Yc(a, L, t), Hs();
                break e;
              }
              w = Error(i(426));
            }
          } else if (Oe && v.mode & 1) {
            var ze = Gc(f);
            if (ze !== null) {
              !(ze.flags & 65536) && (ze.flags |= 256), Xc(ze, f, v, a, t), ns(gr(w, v));
              break e;
            }
          }
          a = w = gr(w, v), $e !== 4 && ($e = 2), go === null ? go = [a] : go.push(a), a = f;
          do {
            switch (a.tag) {
              case 3:
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var N = Kc(a, w, t);
                wc(a, N);
                break e;
              case 1:
                v = w;
                var C = a.type, O = a.stateNode;
                if (!(a.flags & 128) && (typeof C.getDerivedStateFromError == "function" || O !== null && typeof O.componentDidCatch == "function" && (mn === null || !mn.has(O)))) {
                  a.flags |= 65536, t &= -t, a.lanes |= t;
                  var V = Qc(a, v, t);
                  wc(a, V);
                  break e;
                }
            }
            a = a.return;
          } while (a !== null);
        }
        Nd(n);
      } catch (te) {
        t = te, We === n && n !== null && (We = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function bd() {
    var e = xi.current;
    return xi.current = mi, e === null ? mi : e;
  }
  function Hs() {
    ($e === 0 || $e === 3 || $e === 2) && ($e = 4), He === null || !(zn & 268435455) && !(Si & 268435455) || vn(He, Ge);
  }
  function Ni(e, t) {
    var n = Ce;
    Ce |= 2;
    var o = bd();
    (He !== e || Ge !== t) && (Qt = null, Wn(e, t));
    do
      try {
        sg();
        break;
      } catch (s) {
        Ed(e, s);
      }
    while (!0);
    if (os(), Ce = n, xi.current = o, We !== null) throw Error(i(261));
    return He = null, Ge = 0, $e;
  }
  function sg() {
    for (; We !== null; ) Pd(We);
  }
  function ag() {
    for (; We !== null && !Lm(); ) Pd(We);
  }
  function Pd(e) {
    var t = Td(e.alternate, e, ft);
    e.memoizedProps = e.pendingProps, t === null ? Nd(e) : We = t, js.current = null;
  }
  function Nd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = tg(n, t), n !== null) {
          n.flags &= 32767, We = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          $e = 6, We = null;
          return;
        }
      } else if (n = eg(n, t, ft), n !== null) {
        We = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        We = t;
        return;
      }
      We = t = e;
    } while (t !== null);
    $e === 0 && ($e = 5);
  }
  function Bn(e, t, n) {
    var o = be, s = wt.transition;
    try {
      wt.transition = null, be = 1, ug(e, t, n, o);
    } finally {
      wt.transition = s, be = o;
    }
    return null;
  }
  function ug(e, t, n, o) {
    do
      xr();
    while (hn !== null);
    if (Ce & 6) throw Error(i(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var a = n.lanes | n.childLanes;
    if (Vm(e, a), e === He && (We = He = null, Ge = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ki || (ki = !0, Od(Oo, function() {
      return xr(), null;
    })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
      a = wt.transition, wt.transition = null;
      var f = be;
      be = 1;
      var v = Ce;
      Ce |= 4, js.current = null, rg(e, n), vd(n, e), _h(Hl), zo = !!Ul, Hl = Ul = null, e.current = n, og(n), Mm(), Ce = v, be = f, wt.transition = a;
    } else e.current = n;
    if (ki && (ki = !1, hn = e, Ei = s), a = e.pendingLanes, a === 0 && (mn = null), Dm(n.stateNode), st(e, De()), t !== null) for (o = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], o(s.value, { componentStack: s.stack, digest: s.digest });
    if (Ci) throw Ci = !1, e = Fs, Fs = null, e;
    return Ei & 1 && e.tag !== 0 && xr(), a = e.pendingLanes, a & 1 ? e === Ws ? vo++ : (vo = 0, Ws = e) : vo = 0, cn(), null;
  }
  function xr() {
    if (hn !== null) {
      var e = hu(Ei), t = wt.transition, n = be;
      try {
        if (wt.transition = null, be = 16 > e ? 16 : e, hn === null) var o = !1;
        else {
          if (e = hn, hn = null, Ei = 0, Ce & 6) throw Error(i(331));
          var s = Ce;
          for (Ce |= 4, X = e.current; X !== null; ) {
            var a = X, f = a.child;
            if (X.flags & 16) {
              var v = a.deletions;
              if (v !== null) {
                for (var w = 0; w < v.length; w++) {
                  var L = v[w];
                  for (X = L; X !== null; ) {
                    var W = X;
                    switch (W.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mo(8, W, a);
                    }
                    var B = W.child;
                    if (B !== null) B.return = W, X = B;
                    else for (; X !== null; ) {
                      W = X;
                      var F = W.sibling, Y = W.return;
                      if (fd(W), W === L) {
                        X = null;
                        break;
                      }
                      if (F !== null) {
                        F.return = Y, X = F;
                        break;
                      }
                      X = Y;
                    }
                  }
                }
                var Z = a.alternate;
                if (Z !== null) {
                  var ee = Z.child;
                  if (ee !== null) {
                    Z.child = null;
                    do {
                      var ze = ee.sibling;
                      ee.sibling = null, ee = ze;
                    } while (ee !== null);
                  }
                }
                X = a;
              }
            }
            if (a.subtreeFlags & 2064 && f !== null) f.return = a, X = f;
            else e: for (; X !== null; ) {
              if (a = X, a.flags & 2048) switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  mo(9, a, a.return);
              }
              var N = a.sibling;
              if (N !== null) {
                N.return = a.return, X = N;
                break e;
              }
              X = a.return;
            }
          }
          var C = e.current;
          for (X = C; X !== null; ) {
            f = X;
            var O = f.child;
            if (f.subtreeFlags & 2064 && O !== null) O.return = f, X = O;
            else e: for (f = C; X !== null; ) {
              if (v = X, v.flags & 2048) try {
                switch (v.tag) {
                  case 0:
                  case 11:
                  case 15:
                    wi(9, v);
                }
              } catch (te) {
                je(v, v.return, te);
              }
              if (v === f) {
                X = null;
                break e;
              }
              var V = v.sibling;
              if (V !== null) {
                V.return = v.return, X = V;
                break e;
              }
              X = v.return;
            }
          }
          if (Ce = s, cn(), At && typeof At.onPostCommitFiberRoot == "function") try {
            At.onPostCommitFiberRoot(Ao, e);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        be = n, wt.transition = t;
      }
    }
    return !1;
  }
  function Rd(e, t, n) {
    t = gr(n, t), t = Kc(e, t, 1), e = fn(e, t, 1), t = tt(), e !== null && (Wr(e, 1, t), st(e, t));
  }
  function je(e, t, n) {
    if (e.tag === 3) Rd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Rd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var o = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (mn === null || !mn.has(o))) {
          e = gr(n, e), e = Qc(t, e, 1), t = fn(t, e, 1), e = tt(), t !== null && (Wr(t, 1, e), st(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function cg(e, t, n) {
    var o = e.pingCache;
    o !== null && o.delete(t), t = tt(), e.pingedLanes |= e.suspendedLanes & n, He === e && (Ge & n) === n && ($e === 4 || $e === 3 && (Ge & 130023424) === Ge && 500 > De() - zs ? Wn(e, 0) : Ds |= n), st(e, t);
  }
  function _d(e, t) {
    t === 0 && (e.mode & 1 ? (t = Mo, Mo <<= 1, !(Mo & 130023424) && (Mo = 4194304)) : t = 1);
    var n = tt();
    e = Ut(e, t), e !== null && (Wr(e, t, n), st(e, n));
  }
  function dg(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), _d(e, n);
  }
  function fg(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode, s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    o !== null && o.delete(t), _d(e, n);
  }
  var Td;
  Td = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || rt.current) it = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return it = !1, qh(e, t, n);
      it = !!(e.flags & 131072);
    }
    else it = !1, Oe && t.flags & 1048576 && uc(t, ni, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var o = t.type;
        vi(e, t), e = t.pendingProps;
        var s = ar(t, Xe.current);
        mr(t, n), s = hs(null, t, o, e, s, n);
        var a = gs();
        return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ot(o) ? (a = !0, qo(t)) : a = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, as(t), s.updater = hi, t.stateNode = s, s._reactInternals = t, Cs(t, o, e, n), t = Ps(null, t, o, !0, a, n)) : (t.tag = 0, Oe && a && Jl(t), et(null, t, s, n), t = t.child), t;
      case 16:
        o = t.elementType;
        e: {
          switch (vi(e, t), e = t.pendingProps, s = o._init, o = s(o._payload), t.type = o, s = t.tag = mg(o), e = bt(o, e), s) {
            case 0:
              t = bs(null, t, o, e, n);
              break e;
            case 1:
              t = nd(null, t, o, e, n);
              break e;
            case 11:
              t = Zc(null, t, o, e, n);
              break e;
            case 14:
              t = Jc(null, t, o, bt(o.type, e), n);
              break e;
          }
          throw Error(i(
            306,
            o,
            ""
          ));
        }
        return t;
      case 0:
        return o = t.type, s = t.pendingProps, s = t.elementType === o ? s : bt(o, s), bs(e, t, o, s, n);
      case 1:
        return o = t.type, s = t.pendingProps, s = t.elementType === o ? s : bt(o, s), nd(e, t, o, s, n);
      case 3:
        e: {
          if (rd(t), e === null) throw Error(i(387));
          o = t.pendingProps, a = t.memoizedState, s = a.element, yc(e, t), ai(t, o, null, n);
          var f = t.memoizedState;
          if (o = f.element, a.isDehydrated) if (a = { element: o, isDehydrated: !1, cache: f.cache, pendingSuspenseBoundaries: f.pendingSuspenseBoundaries, transitions: f.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
            s = gr(Error(i(423)), t), t = od(e, t, o, n, s);
            break e;
          } else if (o !== s) {
            s = gr(Error(i(424)), t), t = od(e, t, o, n, s);
            break e;
          } else for (dt = sn(t.stateNode.containerInfo.firstChild), ct = t, Oe = !0, Et = null, n = gc(t, null, o, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (dr(), o === s) {
              t = Kt(e, t, n);
              break e;
            }
            et(e, t, o, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Sc(t), e === null && ts(t), o = t.type, s = t.pendingProps, a = e !== null ? e.memoizedProps : null, f = s.children, Kl(o, s) ? f = null : a !== null && Kl(o, a) && (t.flags |= 32), td(e, t), et(e, t, f, n), t.child;
      case 6:
        return e === null && ts(t), null;
      case 13:
        return id(e, t, n);
      case 4:
        return us(t, t.stateNode.containerInfo), o = t.pendingProps, e === null ? t.child = fr(t, null, o, n) : et(e, t, o, n), t.child;
      case 11:
        return o = t.type, s = t.pendingProps, s = t.elementType === o ? s : bt(o, s), Zc(e, t, o, s, n);
      case 7:
        return et(e, t, t.pendingProps, n), t.child;
      case 8:
        return et(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return et(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (o = t.type._context, s = t.pendingProps, a = t.memoizedProps, f = s.value, Pe(ii, o._currentValue), o._currentValue = f, a !== null) if (kt(a.value, f)) {
            if (a.children === s.children && !rt.current) {
              t = Kt(e, t, n);
              break e;
            }
          } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
            var v = a.dependencies;
            if (v !== null) {
              f = a.child;
              for (var w = v.firstContext; w !== null; ) {
                if (w.context === o) {
                  if (a.tag === 1) {
                    w = Ht(-1, n & -n), w.tag = 2;
                    var L = a.updateQueue;
                    if (L !== null) {
                      L = L.shared;
                      var W = L.pending;
                      W === null ? w.next = w : (w.next = W.next, W.next = w), L.pending = w;
                    }
                  }
                  a.lanes |= n, w = a.alternate, w !== null && (w.lanes |= n), ls(
                    a.return,
                    n,
                    t
                  ), v.lanes |= n;
                  break;
                }
                w = w.next;
              }
            } else if (a.tag === 10) f = a.type === t.type ? null : a.child;
            else if (a.tag === 18) {
              if (f = a.return, f === null) throw Error(i(341));
              f.lanes |= n, v = f.alternate, v !== null && (v.lanes |= n), ls(f, n, t), f = a.sibling;
            } else f = a.child;
            if (f !== null) f.return = a;
            else for (f = a; f !== null; ) {
              if (f === t) {
                f = null;
                break;
              }
              if (a = f.sibling, a !== null) {
                a.return = f.return, f = a;
                break;
              }
              f = f.return;
            }
            a = f;
          }
          et(e, t, s.children, n), t = t.child;
        }
        return t;
      case 9:
        return s = t.type, o = t.pendingProps.children, mr(t, n), s = vt(s), o = o(s), t.flags |= 1, et(e, t, o, n), t.child;
      case 14:
        return o = t.type, s = bt(o, t.pendingProps), s = bt(o.type, s), Jc(e, t, o, s, n);
      case 15:
        return qc(e, t, t.type, t.pendingProps, n);
      case 17:
        return o = t.type, s = t.pendingProps, s = t.elementType === o ? s : bt(o, s), vi(e, t), t.tag = 1, ot(o) ? (e = !0, qo(t)) : e = !1, mr(t, n), Uc(t, o, s), Cs(t, o, s, n), Ps(null, t, o, !0, e, n);
      case 19:
        return sd(e, t, n);
      case 22:
        return ed(e, t, n);
    }
    throw Error(i(156, t.tag));
  };
  function Od(e, t) {
    return cu(e, t);
  }
  function pg(e, t, n, o) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function xt(e, t, n, o) {
    return new pg(e, t, n, o);
  }
  function Ks(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function mg(e) {
    if (typeof e == "function") return Ks(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === q) return 11;
      if (e === le) return 14;
    }
    return 2;
  }
  function yn(e, t) {
    var n = e.alternate;
    return n === null ? (n = xt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Ri(e, t, n, o, s, a) {
    var f = 2;
    if (o = e, typeof e == "function") Ks(e) && (f = 1);
    else if (typeof e == "string") f = 5;
    else e: switch (e) {
      case H:
        return $n(n.children, s, a, t);
      case ne:
        f = 8, s |= 8;
        break;
      case pe:
        return e = xt(12, n, t, s | 2), e.elementType = pe, e.lanes = a, e;
      case he:
        return e = xt(13, n, t, s), e.elementType = he, e.lanes = a, e;
      case ae:
        return e = xt(19, n, t, s), e.elementType = ae, e.lanes = a, e;
      case G:
        return _i(n, s, a, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case fe:
            f = 10;
            break e;
          case Se:
            f = 9;
            break e;
          case q:
            f = 11;
            break e;
          case le:
            f = 14;
            break e;
          case ce:
            f = 16, o = null;
            break e;
        }
        throw Error(i(130, e == null ? e : typeof e, ""));
    }
    return t = xt(f, n, t, s), t.elementType = e, t.type = o, t.lanes = a, t;
  }
  function $n(e, t, n, o) {
    return e = xt(7, e, o, t), e.lanes = n, e;
  }
  function _i(e, t, n, o) {
    return e = xt(22, e, o, t), e.elementType = G, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Qs(e, t, n) {
    return e = xt(6, e, null, t), e.lanes = n, e;
  }
  function Ys(e, t, n) {
    return t = xt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function hg(e, t, n, o, s) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Sl(0), this.expirationTimes = Sl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Sl(0), this.identifierPrefix = o, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
  }
  function Gs(e, t, n, o, s, a, f, v, w) {
    return e = new hg(e, t, n, v, w), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = xt(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: o, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, as(a), e;
  }
  function gg(e, t, n) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: J, key: o == null ? null : "" + o, children: e, containerInfo: t, implementation: n };
  }
  function Ad(e) {
    if (!e) return un;
    e = e._reactInternals;
    e: {
      if (Tn(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (ot(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (ot(n)) return lc(e, n, t);
    }
    return t;
  }
  function Ld(e, t, n, o, s, a, f, v, w) {
    return e = Gs(n, o, !0, e, s, a, f, v, w), e.context = Ad(null), n = e.current, o = tt(), s = gn(n), a = Ht(o, s), a.callback = t ?? null, fn(n, a, s), e.current.lanes = s, Wr(e, s, o), st(e, o), e;
  }
  function Ti(e, t, n, o) {
    var s = t.current, a = tt(), f = gn(s);
    return n = Ad(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ht(a, f), t.payload = { element: e }, o = o === void 0 ? null : o, o !== null && (t.callback = o), e = fn(s, t, f), e !== null && (Rt(e, s, f, a), si(e, s, f)), f;
  }
  function Oi(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Md(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Xs(e, t) {
    Md(e, t), (e = e.alternate) && Md(e, t);
  }
  function vg() {
    return null;
  }
  var Id = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Zs(e) {
    this._internalRoot = e;
  }
  Ai.prototype.render = Zs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    Ti(e, t, null, null);
  }, Ai.prototype.unmount = Zs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Fn(function() {
        Ti(null, e, null, null);
      }), t[Wt] = null;
    }
  };
  function Ai(e) {
    this._internalRoot = e;
  }
  Ai.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = yu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < rn.length && t !== 0 && t < rn[n].priority; n++) ;
      rn.splice(n, 0, e), n === 0 && Su(e);
    }
  };
  function Js(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Li(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function jd() {
  }
  function yg(e, t, n, o, s) {
    if (s) {
      if (typeof o == "function") {
        var a = o;
        o = function() {
          var L = Oi(f);
          a.call(L);
        };
      }
      var f = Ld(t, o, e, 0, null, !1, !1, "", jd);
      return e._reactRootContainer = f, e[Wt] = f.current, eo(e.nodeType === 8 ? e.parentNode : e), Fn(), f;
    }
    for (; s = e.lastChild; ) e.removeChild(s);
    if (typeof o == "function") {
      var v = o;
      o = function() {
        var L = Oi(w);
        v.call(L);
      };
    }
    var w = Gs(e, 0, !1, null, null, !1, !1, "", jd);
    return e._reactRootContainer = w, e[Wt] = w.current, eo(e.nodeType === 8 ? e.parentNode : e), Fn(function() {
      Ti(t, w, n, o);
    }), w;
  }
  function Mi(e, t, n, o, s) {
    var a = n._reactRootContainer;
    if (a) {
      var f = a;
      if (typeof s == "function") {
        var v = s;
        s = function() {
          var w = Oi(f);
          v.call(w);
        };
      }
      Ti(t, f, e, s);
    } else f = yg(n, t, e, s, o);
    return Oi(f);
  }
  gu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Fr(t.pendingLanes);
          n !== 0 && (Cl(t, n | 1), st(t, De()), !(Ce & 6) && (wr = De() + 500, cn()));
        }
        break;
      case 13:
        Fn(function() {
          var o = Ut(e, 1);
          if (o !== null) {
            var s = tt();
            Rt(o, e, 1, s);
          }
        }), Xs(e, 1);
    }
  }, kl = function(e) {
    if (e.tag === 13) {
      var t = Ut(e, 134217728);
      if (t !== null) {
        var n = tt();
        Rt(t, e, 134217728, n);
      }
      Xs(e, 134217728);
    }
  }, vu = function(e) {
    if (e.tag === 13) {
      var t = gn(e), n = Ut(e, t);
      if (n !== null) {
        var o = tt();
        Rt(n, e, t, o);
      }
      Xs(e, t);
    }
  }, yu = function() {
    return be;
  }, wu = function(e, t) {
    var n = be;
    try {
      return be = e, t();
    } finally {
      be = n;
    }
  }, hl = function(e, t, n) {
    switch (t) {
      case "input":
        if (_n(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var o = n[t];
            if (o !== e && o.form === e.form) {
              var s = Zo(o);
              if (!s) throw Error(i(90));
              Ae(o), _n(o, s);
            }
          }
        }
        break;
      case "textarea":
        Ya(e, n);
        break;
      case "select":
        t = n.value, t != null && Xn(e, !!n.multiple, t, !1);
    }
  }, ru = Vs, ou = Fn;
  var wg = { usingClientEntryPoint: !1, Events: [ro, lr, Zo, tu, nu, Vs] }, yo = { findFiberByHostInstance: On, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, xg = { bundleType: yo.bundleType, version: yo.version, rendererPackageName: yo.rendererPackageName, rendererConfig: yo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: z.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = au(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: yo.findFiberByHostInstance || vg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ii = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ii.isDisabled && Ii.supportsFiber) try {
      Ao = Ii.inject(xg), At = Ii;
    } catch {
    }
  }
  return at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wg, at.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Js(t)) throw Error(i(200));
    return gg(e, t, null, n);
  }, at.createRoot = function(e, t) {
    if (!Js(e)) throw Error(i(299));
    var n = !1, o = "", s = Id;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Gs(e, 1, !1, null, null, n, !1, o, s), e[Wt] = t.current, eo(e.nodeType === 8 ? e.parentNode : e), new Zs(t);
  }, at.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = au(t), e = e === null ? null : e.stateNode, e;
  }, at.flushSync = function(e) {
    return Fn(e);
  }, at.hydrate = function(e, t, n) {
    if (!Li(t)) throw Error(i(200));
    return Mi(null, e, t, !0, n);
  }, at.hydrateRoot = function(e, t, n) {
    if (!Js(e)) throw Error(i(405));
    var o = n != null && n.hydratedSources || null, s = !1, a = "", f = Id;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (f = n.onRecoverableError)), t = Ld(t, null, e, 1, n ?? null, s, !1, a, f), e[Wt] = t.current, eo(e), o) for (e = 0; e < o.length; e++) n = o[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
      n,
      s
    );
    return new Ai(t);
  }, at.render = function(e, t, n) {
    if (!Li(t)) throw Error(i(200));
    return Mi(null, e, t, !1, n);
  }, at.unmountComponentAtNode = function(e) {
    if (!Li(e)) throw Error(i(40));
    return e._reactRootContainer ? (Fn(function() {
      Mi(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Wt] = null;
      });
    }), !0) : !1;
  }, at.unstable_batchedUpdates = Vs, at.unstable_renderSubtreeIntoContainer = function(e, t, n, o) {
    if (!Li(n)) throw Error(i(200));
    if (e == null || e._reactInternals === void 0) throw Error(i(38));
    return Mi(e, t, n, !1, o);
  }, at.version = "18.3.1-next-f1338f8080-20240426", at;
}
function xf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xf);
    } catch (r) {
      console.error(r);
    }
}
xf(), wf.exports = Ng();
var Qn = wf.exports;
const Rg = /* @__PURE__ */ vf(Qn);
var Vd = Qn;
da.createRoot = Vd.createRoot, da.hydrateRoot = Vd.hydrateRoot;
var h = ba();
const Cn = /* @__PURE__ */ vf(h), _g = /* @__PURE__ */ Cg({
  __proto__: null,
  default: Cn
}, [h]);
function Tg(r, l) {
  typeof r == "function" ? r(l) : r != null && (r.current = l);
}
function Sf(...r) {
  return (l) => r.forEach((i) => Tg(i, l));
}
function Fe(...r) {
  return h.useCallback(Sf(...r), r);
}
var Vn = h.forwardRef((r, l) => {
  const { children: i, ...u } = r, c = h.Children.toArray(i), d = c.find(Ag);
  if (d) {
    const m = d.props.children, p = c.map((g) => g === d ? h.Children.count(m) > 1 ? h.Children.only(null) : h.isValidElement(m) ? m.props.children : null : g);
    return /* @__PURE__ */ b.jsx(fa, { ...u, ref: l, children: h.isValidElement(m) ? h.cloneElement(m, void 0, p) : null });
  }
  return /* @__PURE__ */ b.jsx(fa, { ...u, ref: l, children: i });
});
Vn.displayName = "Slot";
var fa = h.forwardRef((r, l) => {
  const { children: i, ...u } = r;
  if (h.isValidElement(i)) {
    const c = Mg(i);
    return h.cloneElement(i, {
      ...Lg(u, i.props),
      // @ts-ignore
      ref: l ? Sf(l, c) : c
    });
  }
  return h.Children.count(i) > 1 ? h.Children.only(null) : null;
});
fa.displayName = "SlotClone";
var Og = ({ children: r }) => /* @__PURE__ */ b.jsx(b.Fragment, { children: r });
function Ag(r) {
  return h.isValidElement(r) && r.type === Og;
}
function Lg(r, l) {
  const i = { ...l };
  for (const u in l) {
    const c = r[u], d = l[u];
    /^on[A-Z]/.test(u) ? c && d ? i[u] = (...p) => {
      d(...p), c(...p);
    } : c && (i[u] = c) : u === "style" ? i[u] = { ...c, ...d } : u === "className" && (i[u] = [c, d].filter(Boolean).join(" "));
  }
  return { ...r, ...i };
}
function Mg(r) {
  let l = Object.getOwnPropertyDescriptor(r.props, "ref")?.get, i = l && "isReactWarning" in l && l.isReactWarning;
  return i ? r.ref : (l = Object.getOwnPropertyDescriptor(r, "ref")?.get, i = l && "isReactWarning" in l && l.isReactWarning, i ? r.props.ref : r.props.ref || r.ref);
}
function Cf(r) {
  var l, i, u = "";
  if (typeof r == "string" || typeof r == "number") u += r;
  else if (typeof r == "object") if (Array.isArray(r)) for (l = 0; l < r.length; l++) r[l] && (i = Cf(r[l])) && (u && (u += " "), u += i);
  else for (l in r) r[l] && (u && (u += " "), u += l);
  return u;
}
function Ig() {
  for (var r, l, i = 0, u = ""; i < arguments.length; ) (r = arguments[i++]) && (l = Cf(r)) && (u && (u += " "), u += l);
  return u;
}
const Ud = (r) => typeof r == "boolean" ? "".concat(r) : r === 0 ? "0" : r, Hd = Ig, Pa = (r, l) => (i) => {
  var u;
  if (l?.variants == null) return Hd(r, i?.class, i?.className);
  const { variants: c, defaultVariants: d } = l, m = Object.keys(c).map((y) => {
    const E = i?.[y], S = d?.[y];
    if (E === null) return null;
    const R = Ud(E) || Ud(S);
    return c[y][R];
  }), p = i && Object.entries(i).reduce((y, E) => {
    let [S, R] = E;
    return R === void 0 || (y[S] = R), y;
  }, {}), g = l == null || (u = l.compoundVariants) === null || u === void 0 ? void 0 : u.reduce((y, E) => {
    let { class: S, className: R, ..._ } = E;
    return Object.entries(_).every((T) => {
      let [x, P] = T;
      return Array.isArray(P) ? P.includes({
        ...d,
        ...p
      }[x]) : {
        ...d,
        ...p
      }[x] === P;
    }) ? [
      ...y,
      S,
      R
    ] : y;
  }, []);
  return Hd(r, m, g, i?.class, i?.className);
};
function kf(r) {
  var l, i, u = "";
  if (typeof r == "string" || typeof r == "number") u += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var c = r.length;
    for (l = 0; l < c; l++) r[l] && (i = kf(r[l])) && (u && (u += " "), u += i);
  } else for (i in r) r[i] && (u && (u += " "), u += i);
  return u;
}
function jg() {
  for (var r, l, i = 0, u = "", c = arguments.length; i < c; i++) (r = arguments[i]) && (l = kf(r)) && (u && (u += " "), u += l);
  return u;
}
const Na = "-", Dg = (r) => {
  const l = Fg(r), {
    conflictingClassGroups: i,
    conflictingClassGroupModifiers: u
  } = r;
  return {
    getClassGroupId: (m) => {
      const p = m.split(Na);
      return p[0] === "" && p.length !== 1 && p.shift(), Ef(p, l) || zg(m);
    },
    getConflictingClassGroupIds: (m, p) => {
      const g = i[m] || [];
      return p && u[m] ? [...g, ...u[m]] : g;
    }
  };
}, Ef = (r, l) => {
  if (r.length === 0)
    return l.classGroupId;
  const i = r[0], u = l.nextPart.get(i), c = u ? Ef(r.slice(1), u) : void 0;
  if (c)
    return c;
  if (l.validators.length === 0)
    return;
  const d = r.join(Na);
  return l.validators.find(({
    validator: m
  }) => m(d))?.classGroupId;
}, Kd = /^\[(.+)\]$/, zg = (r) => {
  if (Kd.test(r)) {
    const l = Kd.exec(r)[1], i = l?.substring(0, l.indexOf(":"));
    if (i)
      return "arbitrary.." + i;
  }
}, Fg = (r) => {
  const {
    theme: l,
    prefix: i
  } = r, u = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Bg(Object.entries(r.classGroups), i).forEach(([d, m]) => {
    pa(m, u, d, l);
  }), u;
}, pa = (r, l, i, u) => {
  r.forEach((c) => {
    if (typeof c == "string") {
      const d = c === "" ? l : Qd(l, c);
      d.classGroupId = i;
      return;
    }
    if (typeof c == "function") {
      if (Wg(c)) {
        pa(c(u), l, i, u);
        return;
      }
      l.validators.push({
        validator: c,
        classGroupId: i
      });
      return;
    }
    Object.entries(c).forEach(([d, m]) => {
      pa(m, Qd(l, d), i, u);
    });
  });
}, Qd = (r, l) => {
  let i = r;
  return l.split(Na).forEach((u) => {
    i.nextPart.has(u) || i.nextPart.set(u, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), i = i.nextPart.get(u);
  }), i;
}, Wg = (r) => r.isThemeGetter, Bg = (r, l) => l ? r.map(([i, u]) => {
  const c = u.map((d) => typeof d == "string" ? l + d : typeof d == "object" ? Object.fromEntries(Object.entries(d).map(([m, p]) => [l + m, p])) : d);
  return [i, c];
}) : r, $g = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let l = 0, i = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  const c = (d, m) => {
    i.set(d, m), l++, l > r && (l = 0, u = i, i = /* @__PURE__ */ new Map());
  };
  return {
    get(d) {
      let m = i.get(d);
      if (m !== void 0)
        return m;
      if ((m = u.get(d)) !== void 0)
        return c(d, m), m;
    },
    set(d, m) {
      i.has(d) ? i.set(d, m) : c(d, m);
    }
  };
}, bf = "!", Vg = (r) => {
  const {
    separator: l,
    experimentalParseClassName: i
  } = r, u = l.length === 1, c = l[0], d = l.length, m = (p) => {
    const g = [];
    let y = 0, E = 0, S;
    for (let P = 0; P < p.length; P++) {
      let A = p[P];
      if (y === 0) {
        if (A === c && (u || p.slice(P, P + d) === l)) {
          g.push(p.slice(E, P)), E = P + d;
          continue;
        }
        if (A === "/") {
          S = P;
          continue;
        }
      }
      A === "[" ? y++ : A === "]" && y--;
    }
    const R = g.length === 0 ? p : p.substring(E), _ = R.startsWith(bf), T = _ ? R.substring(1) : R, x = S && S > E ? S - E : void 0;
    return {
      modifiers: g,
      hasImportantModifier: _,
      baseClassName: T,
      maybePostfixModifierPosition: x
    };
  };
  return i ? (p) => i({
    className: p,
    parseClassName: m
  }) : m;
}, Ug = (r) => {
  if (r.length <= 1)
    return r;
  const l = [];
  let i = [];
  return r.forEach((u) => {
    u[0] === "[" ? (l.push(...i.sort(), u), i = []) : i.push(u);
  }), l.push(...i.sort()), l;
}, Hg = (r) => ({
  cache: $g(r.cacheSize),
  parseClassName: Vg(r),
  ...Dg(r)
}), Kg = /\s+/, Qg = (r, l) => {
  const {
    parseClassName: i,
    getClassGroupId: u,
    getConflictingClassGroupIds: c
  } = l, d = [], m = r.trim().split(Kg);
  let p = "";
  for (let g = m.length - 1; g >= 0; g -= 1) {
    const y = m[g], {
      modifiers: E,
      hasImportantModifier: S,
      baseClassName: R,
      maybePostfixModifierPosition: _
    } = i(y);
    let T = !!_, x = u(T ? R.substring(0, _) : R);
    if (!x) {
      if (!T) {
        p = y + (p.length > 0 ? " " + p : p);
        continue;
      }
      if (x = u(R), !x) {
        p = y + (p.length > 0 ? " " + p : p);
        continue;
      }
      T = !1;
    }
    const P = Ug(E).join(":"), A = S ? P + bf : P, M = A + x;
    if (d.includes(M))
      continue;
    d.push(M);
    const j = c(x, T);
    for (let z = 0; z < j.length; ++z) {
      const $ = j[z];
      d.push(A + $);
    }
    p = y + (p.length > 0 ? " " + p : p);
  }
  return p;
};
function Yg() {
  let r = 0, l, i, u = "";
  for (; r < arguments.length; )
    (l = arguments[r++]) && (i = Pf(l)) && (u && (u += " "), u += i);
  return u;
}
const Pf = (r) => {
  if (typeof r == "string")
    return r;
  let l, i = "";
  for (let u = 0; u < r.length; u++)
    r[u] && (l = Pf(r[u])) && (i && (i += " "), i += l);
  return i;
};
function Gg(r, ...l) {
  let i, u, c, d = m;
  function m(g) {
    const y = l.reduce((E, S) => S(E), r());
    return i = Hg(y), u = i.cache.get, c = i.cache.set, d = p, p(g);
  }
  function p(g) {
    const y = u(g);
    if (y)
      return y;
    const E = Qg(g, i);
    return c(g, E), E;
  }
  return function() {
    return d(Yg.apply(null, arguments));
  };
}
const Te = (r) => {
  const l = (i) => i[r] || [];
  return l.isThemeGetter = !0, l;
}, Nf = /^\[(?:([a-z-]+):)?(.+)\]$/i, Xg = /^\d+\/\d+$/, Zg = /* @__PURE__ */ new Set(["px", "full", "screen"]), Jg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, qg = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ev = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, tv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, nv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Yt = (r) => Er(r) || Zg.has(r) || Xg.test(r), xn = (r) => _r(r, "length", cv), Er = (r) => !!r && !Number.isNaN(Number(r)), na = (r) => _r(r, "number", Er), xo = (r) => !!r && Number.isInteger(Number(r)), rv = (r) => r.endsWith("%") && Er(r.slice(0, -1)), me = (r) => Nf.test(r), Sn = (r) => Jg.test(r), ov = /* @__PURE__ */ new Set(["length", "size", "percentage"]), iv = (r) => _r(r, ov, Rf), lv = (r) => _r(r, "position", Rf), sv = /* @__PURE__ */ new Set(["image", "url"]), av = (r) => _r(r, sv, fv), uv = (r) => _r(r, "", dv), So = () => !0, _r = (r, l, i) => {
  const u = Nf.exec(r);
  return u ? u[1] ? typeof l == "string" ? u[1] === l : l.has(u[1]) : i(u[2]) : !1;
}, cv = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  qg.test(r) && !ev.test(r)
), Rf = () => !1, dv = (r) => tv.test(r), fv = (r) => nv.test(r), pv = () => {
  const r = Te("colors"), l = Te("spacing"), i = Te("blur"), u = Te("brightness"), c = Te("borderColor"), d = Te("borderRadius"), m = Te("borderSpacing"), p = Te("borderWidth"), g = Te("contrast"), y = Te("grayscale"), E = Te("hueRotate"), S = Te("invert"), R = Te("gap"), _ = Te("gradientColorStops"), T = Te("gradientColorStopPositions"), x = Te("inset"), P = Te("margin"), A = Te("opacity"), M = Te("padding"), j = Te("saturate"), z = Te("scale"), $ = Te("sepia"), J = Te("skew"), H = Te("space"), ne = Te("translate"), pe = () => ["auto", "contain", "none"], fe = () => ["auto", "hidden", "clip", "visible", "scroll"], Se = () => ["auto", me, l], q = () => [me, l], he = () => ["", Yt, xn], ae = () => ["auto", Er, me], le = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ce = () => ["solid", "dashed", "dotted", "double", "none"], G = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], D = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], U = () => ["", "0", me], K = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], k = () => [Er, me];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [So],
      spacing: [Yt, xn],
      blur: ["none", "", Sn, me],
      brightness: k(),
      borderColor: [r],
      borderRadius: ["none", "", "full", Sn, me],
      borderSpacing: q(),
      borderWidth: he(),
      contrast: k(),
      grayscale: U(),
      hueRotate: k(),
      invert: U(),
      gap: q(),
      gradientColorStops: [r],
      gradientColorStopPositions: [rv, xn],
      inset: Se(),
      margin: Se(),
      opacity: k(),
      padding: q(),
      saturate: k(),
      scale: k(),
      sepia: U(),
      skew: k(),
      space: q(),
      translate: q()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", me]
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
        columns: [Sn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": K()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": K()
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
        object: [...le(), me]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: fe()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": fe()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": fe()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: pe()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": pe()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": pe()
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
        inset: [x]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [x]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [x]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [x]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [x]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [x]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [x]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [x]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [x]
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
        z: ["auto", xo, me]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: Se()
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
        flex: ["1", "auto", "initial", "none", me]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: U()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: U()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", xo, me]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [So]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", xo, me]
        }, me]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ae()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ae()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [So]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [xo, me]
        }, me]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ae()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ae()
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
        "auto-cols": ["auto", "min", "max", "fr", me]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", me]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [R]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [R]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [R]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...D()]
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
        content: ["normal", ...D(), "baseline"]
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
        "place-content": [...D(), "baseline"]
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
        p: [M]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [M]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [M]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [M]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [M]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [M]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [M]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [M]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [M]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [P]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [P]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [P]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [P]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [P]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [P]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [P]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [P]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [P]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [H]
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
        "space-y": [H]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", me, l]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [me, l, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [me, l, "none", "full", "min", "max", "fit", "prose", {
          screen: [Sn]
        }, Sn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [me, l, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [me, l, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [me, l, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [me, l, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Sn, xn]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", na]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [So]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", me]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Er, na]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Yt, me]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", me]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", me]
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
        placeholder: [r]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [A]
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
        text: [r]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [A]
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
        decoration: [...ce(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Yt, xn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Yt, me]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [r]
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
        indent: q()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", me]
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
        content: ["none", me]
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
        "bg-opacity": [A]
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
        bg: [...le(), lv]
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
        bg: ["auto", "cover", "contain", iv]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, av]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [r]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [T]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [T]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [T]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [_]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [_]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [_]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [d]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [d]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [d]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [d]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [d]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [d]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [d]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [d]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [d]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [d]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [d]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [d]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [d]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [d]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [d]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [p]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [p]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [p]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [p]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [p]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [p]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [p]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [p]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [p]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [A]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ce(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [p]
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
        "divide-y": [p]
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
        "divide-opacity": [A]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ce()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [c]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [c]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [c]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [c]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [c]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [c]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [c]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [c]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...ce()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Yt, me]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Yt, xn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [r]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: he()
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
        ring: [r]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [A]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Yt, xn]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [r]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Sn, uv]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [So]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [A]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...G(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": G()
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
        blur: [i]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [u]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [g]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Sn, me]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [y]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [E]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [S]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [j]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [$]
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
        "backdrop-blur": [i]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [u]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [g]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [y]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [E]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [S]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [A]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [j]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [$]
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
        "border-spacing": [m]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [m]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [m]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", me]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: k()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", me]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: k()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", me]
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
        scale: [z]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [z]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [z]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [xo, me]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [ne]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [ne]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [J]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [J]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", me]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", r]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", me]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [r]
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
        "scroll-m": q()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": q()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": q()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": q()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": q()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": q()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": q()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": q()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": q()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": q()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": q()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": q()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": q()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": q()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": q()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": q()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": q()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": q()
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
        "will-change": ["auto", "scroll", "contents", "transform", me]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [r, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Yt, xn, na]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [r, "none"]
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
}, mv = /* @__PURE__ */ Gg(pv);
function Ve(...r) {
  return mv(jg(r));
}
const hv = Pa(
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
), Vi = h.forwardRef(({ className: r, variant: l, size: i, asChild: u = !1, ...c }, d) => {
  const m = u ? Vn : "button";
  return /* @__PURE__ */ b.jsx(
    m,
    {
      className: Ve(hv({ variant: l, size: i, className: r })),
      ref: d,
      ...c
    }
  );
});
Vi.displayName = "Button";
var gv = [
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
], Ne = gv.reduce((r, l) => {
  const i = h.forwardRef((u, c) => {
    const { asChild: d, ...m } = u, p = d ? Vn : l;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ b.jsx(p, { ...m, ref: c });
  });
  return i.displayName = `Primitive.${l}`, { ...r, [l]: i };
}, {});
function vv(r, l) {
  r && Qn.flushSync(() => r.dispatchEvent(l));
}
var yv = "Label", _f = h.forwardRef((r, l) => /* @__PURE__ */ b.jsx(
  Ne.label,
  {
    ...r,
    ref: l,
    onMouseDown: (i) => {
      i.target.closest("button, input, select, textarea") || (r.onMouseDown?.(i), !i.defaultPrevented && i.detail > 1 && i.preventDefault());
    }
  }
));
_f.displayName = yv;
var Tf = _f;
const wv = Pa(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Ui = h.forwardRef(({ className: r, ...l }, i) => /* @__PURE__ */ b.jsx(Tf, { ref: i, className: Ve(wv(), r), ...l }));
Ui.displayName = Tf.displayName;
const Of = h.forwardRef(({ className: r, ...l }, i) => /* @__PURE__ */ b.jsx(
  "textarea",
  {
    className: Ve(
      "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      r
    ),
    ref: i,
    ...l
  }
));
Of.displayName = "Textarea";
function bo(r, l) {
  if (r == null) return {};
  var i = {}, u = Object.keys(r), c, d;
  for (d = 0; d < u.length; d++)
    c = u[d], !(l.indexOf(c) >= 0) && (i[c] = r[c]);
  return i;
}
var xv = ["color"], Sv = /* @__PURE__ */ h.forwardRef(function(r, l) {
  var i = r.color, u = i === void 0 ? "currentColor" : i, c = bo(r, xv);
  return h.createElement("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, c, {
    ref: l
  }), h.createElement("path", {
    d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
    fill: u,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Cv = ["color"], kv = /* @__PURE__ */ h.forwardRef(function(r, l) {
  var i = r.color, u = i === void 0 ? "currentColor" : i, c = bo(r, Cv);
  return h.createElement("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, c, {
    ref: l
  }), h.createElement("path", {
    d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
    fill: u,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Ev = ["color"], bv = /* @__PURE__ */ h.forwardRef(function(r, l) {
  var i = r.color, u = i === void 0 ? "currentColor" : i, c = bo(r, Ev);
  return h.createElement("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, c, {
    ref: l
  }), h.createElement("path", {
    d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
    fill: u,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Pv = ["color"], Nv = /* @__PURE__ */ h.forwardRef(function(r, l) {
  var i = r.color, u = i === void 0 ? "currentColor" : i, c = bo(r, Pv);
  return h.createElement("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, c, {
    ref: l
  }), h.createElement("path", {
    d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
    fill: u,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Rv = ["color"], _v = /* @__PURE__ */ h.forwardRef(function(r, l) {
  var i = r.color, u = i === void 0 ? "currentColor" : i, c = bo(r, Rv);
  return h.createElement("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, c, {
    ref: l
  }), h.createElement("path", {
    d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
    fill: u,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
function Yd(r, [l, i]) {
  return Math.min(i, Math.max(l, r));
}
function Ie(r, l, { checkForDefaultPrevented: i = !0 } = {}) {
  return function(c) {
    if (r?.(c), i === !1 || !c.defaultPrevented)
      return l?.(c);
  };
}
function Tv(r, l) {
  const i = h.createContext(l);
  function u(d) {
    const { children: m, ...p } = d, g = h.useMemo(() => p, Object.values(p));
    return /* @__PURE__ */ b.jsx(i.Provider, { value: g, children: m });
  }
  function c(d) {
    const m = h.useContext(i);
    if (m) return m;
    if (l !== void 0) return l;
    throw new Error(`\`${d}\` must be used within \`${r}\``);
  }
  return u.displayName = r + "Provider", [u, c];
}
function el(r, l = []) {
  let i = [];
  function u(d, m) {
    const p = h.createContext(m), g = i.length;
    i = [...i, m];
    function y(S) {
      const { scope: R, children: _, ...T } = S, x = R?.[r][g] || p, P = h.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ b.jsx(x.Provider, { value: P, children: _ });
    }
    function E(S, R) {
      const _ = R?.[r][g] || p, T = h.useContext(_);
      if (T) return T;
      if (m !== void 0) return m;
      throw new Error(`\`${S}\` must be used within \`${d}\``);
    }
    return y.displayName = d + "Provider", [y, E];
  }
  const c = () => {
    const d = i.map((m) => h.createContext(m));
    return function(p) {
      const g = p?.[r] || d;
      return h.useMemo(
        () => ({ [`__scope${r}`]: { ...p, [r]: g } }),
        [p, g]
      );
    };
  };
  return c.scopeName = r, [u, Ov(c, ...l)];
}
function Ov(...r) {
  const l = r[0];
  if (r.length === 1) return l;
  const i = () => {
    const u = r.map((c) => ({
      useScope: c(),
      scopeName: c.scopeName
    }));
    return function(d) {
      const m = u.reduce((p, { useScope: g, scopeName: y }) => {
        const S = g(d)[`__scope${y}`];
        return { ...p, ...S };
      }, {});
      return h.useMemo(() => ({ [`__scope${l.scopeName}`]: m }), [m]);
    };
  };
  return i.scopeName = l.scopeName, i;
}
function Av(r) {
  const l = r + "CollectionProvider", [i, u] = el(l), [c, d] = i(
    l,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), m = (_) => {
    const { scope: T, children: x } = _, P = Cn.useRef(null), A = Cn.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ b.jsx(c, { scope: T, itemMap: A, collectionRef: P, children: x });
  };
  m.displayName = l;
  const p = r + "CollectionSlot", g = Cn.forwardRef(
    (_, T) => {
      const { scope: x, children: P } = _, A = d(p, x), M = Fe(T, A.collectionRef);
      return /* @__PURE__ */ b.jsx(Vn, { ref: M, children: P });
    }
  );
  g.displayName = p;
  const y = r + "CollectionItemSlot", E = "data-radix-collection-item", S = Cn.forwardRef(
    (_, T) => {
      const { scope: x, children: P, ...A } = _, M = Cn.useRef(null), j = Fe(T, M), z = d(y, x);
      return Cn.useEffect(() => (z.itemMap.set(M, { ref: M, ...A }), () => void z.itemMap.delete(M))), /* @__PURE__ */ b.jsx(Vn, { [E]: "", ref: j, children: P });
    }
  );
  S.displayName = y;
  function R(_) {
    const T = d(r + "CollectionConsumer", _);
    return Cn.useCallback(() => {
      const P = T.collectionRef.current;
      if (!P) return [];
      const A = Array.from(P.querySelectorAll(`[${E}]`));
      return Array.from(T.itemMap.values()).sort(
        (z, $) => A.indexOf(z.ref.current) - A.indexOf($.ref.current)
      );
    }, [T.collectionRef, T.itemMap]);
  }
  return [
    { Provider: m, Slot: g, ItemSlot: S },
    R,
    u
  ];
}
var Lv = h.createContext(void 0);
function Mv(r) {
  const l = h.useContext(Lv);
  return r || l || "ltr";
}
function Xt(r) {
  const l = h.useRef(r);
  return h.useEffect(() => {
    l.current = r;
  }), h.useMemo(() => (...i) => l.current?.(...i), []);
}
function Iv(r, l = globalThis?.document) {
  const i = Xt(r);
  h.useEffect(() => {
    const u = (c) => {
      c.key === "Escape" && i(c);
    };
    return l.addEventListener("keydown", u, { capture: !0 }), () => l.removeEventListener("keydown", u, { capture: !0 });
  }, [i, l]);
}
var jv = "DismissableLayer", ma = "dismissableLayer.update", Dv = "dismissableLayer.pointerDownOutside", zv = "dismissableLayer.focusOutside", Gd, Af = h.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ra = h.forwardRef(
  (r, l) => {
    const {
      disableOutsidePointerEvents: i = !1,
      onEscapeKeyDown: u,
      onPointerDownOutside: c,
      onFocusOutside: d,
      onInteractOutside: m,
      onDismiss: p,
      ...g
    } = r, y = h.useContext(Af), [E, S] = h.useState(null), R = E?.ownerDocument ?? globalThis?.document, [, _] = h.useState({}), T = Fe(l, (H) => S(H)), x = Array.from(y.layers), [P] = [...y.layersWithOutsidePointerEventsDisabled].slice(-1), A = x.indexOf(P), M = E ? x.indexOf(E) : -1, j = y.layersWithOutsidePointerEventsDisabled.size > 0, z = M >= A, $ = Bv((H) => {
      const ne = H.target, pe = [...y.branches].some((fe) => fe.contains(ne));
      !z || pe || (c?.(H), m?.(H), H.defaultPrevented || p?.());
    }, R), J = $v((H) => {
      const ne = H.target;
      [...y.branches].some((fe) => fe.contains(ne)) || (d?.(H), m?.(H), H.defaultPrevented || p?.());
    }, R);
    return Iv((H) => {
      M === y.layers.size - 1 && (u?.(H), !H.defaultPrevented && p && (H.preventDefault(), p()));
    }, R), h.useEffect(() => {
      if (E)
        return i && (y.layersWithOutsidePointerEventsDisabled.size === 0 && (Gd = R.body.style.pointerEvents, R.body.style.pointerEvents = "none"), y.layersWithOutsidePointerEventsDisabled.add(E)), y.layers.add(E), Xd(), () => {
          i && y.layersWithOutsidePointerEventsDisabled.size === 1 && (R.body.style.pointerEvents = Gd);
        };
    }, [E, R, i, y]), h.useEffect(() => () => {
      E && (y.layers.delete(E), y.layersWithOutsidePointerEventsDisabled.delete(E), Xd());
    }, [E, y]), h.useEffect(() => {
      const H = () => _({});
      return document.addEventListener(ma, H), () => document.removeEventListener(ma, H);
    }, []), /* @__PURE__ */ b.jsx(
      Ne.div,
      {
        ...g,
        ref: T,
        style: {
          pointerEvents: j ? z ? "auto" : "none" : void 0,
          ...r.style
        },
        onFocusCapture: Ie(r.onFocusCapture, J.onFocusCapture),
        onBlurCapture: Ie(r.onBlurCapture, J.onBlurCapture),
        onPointerDownCapture: Ie(
          r.onPointerDownCapture,
          $.onPointerDownCapture
        )
      }
    );
  }
);
Ra.displayName = jv;
var Fv = "DismissableLayerBranch", Wv = h.forwardRef((r, l) => {
  const i = h.useContext(Af), u = h.useRef(null), c = Fe(l, u);
  return h.useEffect(() => {
    const d = u.current;
    if (d)
      return i.branches.add(d), () => {
        i.branches.delete(d);
      };
  }, [i.branches]), /* @__PURE__ */ b.jsx(Ne.div, { ...r, ref: c });
});
Wv.displayName = Fv;
function Bv(r, l = globalThis?.document) {
  const i = Xt(r), u = h.useRef(!1), c = h.useRef(() => {
  });
  return h.useEffect(() => {
    const d = (p) => {
      if (p.target && !u.current) {
        let g = function() {
          Lf(
            Dv,
            i,
            y,
            { discrete: !0 }
          );
        };
        const y = { originalEvent: p };
        p.pointerType === "touch" ? (l.removeEventListener("click", c.current), c.current = g, l.addEventListener("click", c.current, { once: !0 })) : g();
      } else
        l.removeEventListener("click", c.current);
      u.current = !1;
    }, m = window.setTimeout(() => {
      l.addEventListener("pointerdown", d);
    }, 0);
    return () => {
      window.clearTimeout(m), l.removeEventListener("pointerdown", d), l.removeEventListener("click", c.current);
    };
  }, [l, i]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => u.current = !0
  };
}
function $v(r, l = globalThis?.document) {
  const i = Xt(r), u = h.useRef(!1);
  return h.useEffect(() => {
    const c = (d) => {
      d.target && !u.current && Lf(zv, i, { originalEvent: d }, {
        discrete: !1
      });
    };
    return l.addEventListener("focusin", c), () => l.removeEventListener("focusin", c);
  }, [l, i]), {
    onFocusCapture: () => u.current = !0,
    onBlurCapture: () => u.current = !1
  };
}
function Xd() {
  const r = new CustomEvent(ma);
  document.dispatchEvent(r);
}
function Lf(r, l, i, { discrete: u }) {
  const c = i.originalEvent.target, d = new CustomEvent(r, { bubbles: !1, cancelable: !0, detail: i });
  l && c.addEventListener(r, l, { once: !0 }), u ? vv(c, d) : c.dispatchEvent(d);
}
var ra = 0;
function Mf() {
  h.useEffect(() => {
    const r = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", r[0] ?? Zd()), document.body.insertAdjacentElement("beforeend", r[1] ?? Zd()), ra++, () => {
      ra === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((l) => l.remove()), ra--;
    };
  }, []);
}
function Zd() {
  const r = document.createElement("span");
  return r.setAttribute("data-radix-focus-guard", ""), r.tabIndex = 0, r.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", r;
}
var oa = "focusScope.autoFocusOnMount", ia = "focusScope.autoFocusOnUnmount", Jd = { bubbles: !1, cancelable: !0 }, Vv = "FocusScope", _a = h.forwardRef((r, l) => {
  const {
    loop: i = !1,
    trapped: u = !1,
    onMountAutoFocus: c,
    onUnmountAutoFocus: d,
    ...m
  } = r, [p, g] = h.useState(null), y = Xt(c), E = Xt(d), S = h.useRef(null), R = Fe(l, (x) => g(x)), _ = h.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  h.useEffect(() => {
    if (u) {
      let x = function(j) {
        if (_.paused || !p) return;
        const z = j.target;
        p.contains(z) ? S.current = z : kn(S.current, { select: !0 });
      }, P = function(j) {
        if (_.paused || !p) return;
        const z = j.relatedTarget;
        z !== null && (p.contains(z) || kn(S.current, { select: !0 }));
      }, A = function(j) {
        if (document.activeElement === document.body)
          for (const $ of j)
            $.removedNodes.length > 0 && kn(p);
      };
      document.addEventListener("focusin", x), document.addEventListener("focusout", P);
      const M = new MutationObserver(A);
      return p && M.observe(p, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", x), document.removeEventListener("focusout", P), M.disconnect();
      };
    }
  }, [u, p, _.paused]), h.useEffect(() => {
    if (p) {
      ef.add(_);
      const x = document.activeElement;
      if (!p.contains(x)) {
        const A = new CustomEvent(oa, Jd);
        p.addEventListener(oa, y), p.dispatchEvent(A), A.defaultPrevented || (Uv(Gv(If(p)), { select: !0 }), document.activeElement === x && kn(p));
      }
      return () => {
        p.removeEventListener(oa, y), setTimeout(() => {
          const A = new CustomEvent(ia, Jd);
          p.addEventListener(ia, E), p.dispatchEvent(A), A.defaultPrevented || kn(x ?? document.body, { select: !0 }), p.removeEventListener(ia, E), ef.remove(_);
        }, 0);
      };
    }
  }, [p, y, E, _]);
  const T = h.useCallback(
    (x) => {
      if (!i && !u || _.paused) return;
      const P = x.key === "Tab" && !x.altKey && !x.ctrlKey && !x.metaKey, A = document.activeElement;
      if (P && A) {
        const M = x.currentTarget, [j, z] = Hv(M);
        j && z ? !x.shiftKey && A === z ? (x.preventDefault(), i && kn(j, { select: !0 })) : x.shiftKey && A === j && (x.preventDefault(), i && kn(z, { select: !0 })) : A === M && x.preventDefault();
      }
    },
    [i, u, _.paused]
  );
  return /* @__PURE__ */ b.jsx(Ne.div, { tabIndex: -1, ...m, ref: R, onKeyDown: T });
});
_a.displayName = Vv;
function Uv(r, { select: l = !1 } = {}) {
  const i = document.activeElement;
  for (const u of r)
    if (kn(u, { select: l }), document.activeElement !== i) return;
}
function Hv(r) {
  const l = If(r), i = qd(l, r), u = qd(l.reverse(), r);
  return [i, u];
}
function If(r) {
  const l = [], i = document.createTreeWalker(r, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (u) => {
      const c = u.tagName === "INPUT" && u.type === "hidden";
      return u.disabled || u.hidden || c ? NodeFilter.FILTER_SKIP : u.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; i.nextNode(); ) l.push(i.currentNode);
  return l;
}
function qd(r, l) {
  for (const i of r)
    if (!Kv(i, { upTo: l })) return i;
}
function Kv(r, { upTo: l }) {
  if (getComputedStyle(r).visibility === "hidden") return !0;
  for (; r; ) {
    if (l !== void 0 && r === l) return !1;
    if (getComputedStyle(r).display === "none") return !0;
    r = r.parentElement;
  }
  return !1;
}
function Qv(r) {
  return r instanceof HTMLInputElement && "select" in r;
}
function kn(r, { select: l = !1 } = {}) {
  if (r && r.focus) {
    const i = document.activeElement;
    r.focus({ preventScroll: !0 }), r !== i && Qv(r) && l && r.select();
  }
}
var ef = Yv();
function Yv() {
  let r = [];
  return {
    add(l) {
      const i = r[0];
      l !== i && i?.pause(), r = tf(r, l), r.unshift(l);
    },
    remove(l) {
      r = tf(r, l), r[0]?.resume();
    }
  };
}
function tf(r, l) {
  const i = [...r], u = i.indexOf(l);
  return u !== -1 && i.splice(u, 1), i;
}
function Gv(r) {
  return r.filter((l) => l.tagName !== "A");
}
var nt = globalThis?.document ? h.useLayoutEffect : () => {
}, Xv = _g.useId || (() => {
}), Zv = 0;
function br(r) {
  const [l, i] = h.useState(Xv());
  return nt(() => {
    i((u) => u ?? String(Zv++));
  }, [r]), l ? `radix-${l}` : "";
}
const Jv = ["top", "right", "bottom", "left"], zt = Math.min, pt = Math.max, Yi = Math.round, ji = Math.floor, En = (r) => ({
  x: r,
  y: r
}), qv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, e0 = {
  start: "end",
  end: "start"
};
function ha(r, l, i) {
  return pt(r, zt(l, i));
}
function Zt(r, l) {
  return typeof r == "function" ? r(l) : r;
}
function Jt(r) {
  return r.split("-")[0];
}
function Tr(r) {
  return r.split("-")[1];
}
function Ta(r) {
  return r === "x" ? "y" : "x";
}
function Oa(r) {
  return r === "y" ? "height" : "width";
}
function bn(r) {
  return ["top", "bottom"].includes(Jt(r)) ? "y" : "x";
}
function Aa(r) {
  return Ta(bn(r));
}
function t0(r, l, i) {
  i === void 0 && (i = !1);
  const u = Tr(r), c = Aa(r), d = Oa(c);
  let m = c === "x" ? u === (i ? "end" : "start") ? "right" : "left" : u === "start" ? "bottom" : "top";
  return l.reference[d] > l.floating[d] && (m = Gi(m)), [m, Gi(m)];
}
function n0(r) {
  const l = Gi(r);
  return [ga(r), l, ga(l)];
}
function ga(r) {
  return r.replace(/start|end/g, (l) => e0[l]);
}
function r0(r, l, i) {
  const u = ["left", "right"], c = ["right", "left"], d = ["top", "bottom"], m = ["bottom", "top"];
  switch (r) {
    case "top":
    case "bottom":
      return i ? l ? c : u : l ? u : c;
    case "left":
    case "right":
      return l ? d : m;
    default:
      return [];
  }
}
function o0(r, l, i, u) {
  const c = Tr(r);
  let d = r0(Jt(r), i === "start", u);
  return c && (d = d.map((m) => m + "-" + c), l && (d = d.concat(d.map(ga)))), d;
}
function Gi(r) {
  return r.replace(/left|right|bottom|top/g, (l) => qv[l]);
}
function i0(r) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...r
  };
}
function jf(r) {
  return typeof r != "number" ? i0(r) : {
    top: r,
    right: r,
    bottom: r,
    left: r
  };
}
function Xi(r) {
  const {
    x: l,
    y: i,
    width: u,
    height: c
  } = r;
  return {
    width: u,
    height: c,
    top: i,
    left: l,
    right: l + u,
    bottom: i + c,
    x: l,
    y: i
  };
}
function nf(r, l, i) {
  let {
    reference: u,
    floating: c
  } = r;
  const d = bn(l), m = Aa(l), p = Oa(m), g = Jt(l), y = d === "y", E = u.x + u.width / 2 - c.width / 2, S = u.y + u.height / 2 - c.height / 2, R = u[p] / 2 - c[p] / 2;
  let _;
  switch (g) {
    case "top":
      _ = {
        x: E,
        y: u.y - c.height
      };
      break;
    case "bottom":
      _ = {
        x: E,
        y: u.y + u.height
      };
      break;
    case "right":
      _ = {
        x: u.x + u.width,
        y: S
      };
      break;
    case "left":
      _ = {
        x: u.x - c.width,
        y: S
      };
      break;
    default:
      _ = {
        x: u.x,
        y: u.y
      };
  }
  switch (Tr(l)) {
    case "start":
      _[m] -= R * (i && y ? -1 : 1);
      break;
    case "end":
      _[m] += R * (i && y ? -1 : 1);
      break;
  }
  return _;
}
const l0 = async (r, l, i) => {
  const {
    placement: u = "bottom",
    strategy: c = "absolute",
    middleware: d = [],
    platform: m
  } = i, p = d.filter(Boolean), g = await (m.isRTL == null ? void 0 : m.isRTL(l));
  let y = await m.getElementRects({
    reference: r,
    floating: l,
    strategy: c
  }), {
    x: E,
    y: S
  } = nf(y, u, g), R = u, _ = {}, T = 0;
  for (let x = 0; x < p.length; x++) {
    const {
      name: P,
      fn: A
    } = p[x], {
      x: M,
      y: j,
      data: z,
      reset: $
    } = await A({
      x: E,
      y: S,
      initialPlacement: u,
      placement: R,
      strategy: c,
      middlewareData: _,
      rects: y,
      platform: m,
      elements: {
        reference: r,
        floating: l
      }
    });
    E = M ?? E, S = j ?? S, _ = {
      ..._,
      [P]: {
        ..._[P],
        ...z
      }
    }, $ && T <= 50 && (T++, typeof $ == "object" && ($.placement && (R = $.placement), $.rects && (y = $.rects === !0 ? await m.getElementRects({
      reference: r,
      floating: l,
      strategy: c
    }) : $.rects), {
      x: E,
      y: S
    } = nf(y, R, g)), x = -1);
  }
  return {
    x: E,
    y: S,
    placement: R,
    strategy: c,
    middlewareData: _
  };
};
async function ko(r, l) {
  var i;
  l === void 0 && (l = {});
  const {
    x: u,
    y: c,
    platform: d,
    rects: m,
    elements: p,
    strategy: g
  } = r, {
    boundary: y = "clippingAncestors",
    rootBoundary: E = "viewport",
    elementContext: S = "floating",
    altBoundary: R = !1,
    padding: _ = 0
  } = Zt(l, r), T = jf(_), P = p[R ? S === "floating" ? "reference" : "floating" : S], A = Xi(await d.getClippingRect({
    element: (i = await (d.isElement == null ? void 0 : d.isElement(P))) == null || i ? P : P.contextElement || await (d.getDocumentElement == null ? void 0 : d.getDocumentElement(p.floating)),
    boundary: y,
    rootBoundary: E,
    strategy: g
  })), M = S === "floating" ? {
    x: u,
    y: c,
    width: m.floating.width,
    height: m.floating.height
  } : m.reference, j = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(p.floating)), z = await (d.isElement == null ? void 0 : d.isElement(j)) ? await (d.getScale == null ? void 0 : d.getScale(j)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, $ = Xi(d.convertOffsetParentRelativeRectToViewportRelativeRect ? await d.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: p,
    rect: M,
    offsetParent: j,
    strategy: g
  }) : M);
  return {
    top: (A.top - $.top + T.top) / z.y,
    bottom: ($.bottom - A.bottom + T.bottom) / z.y,
    left: (A.left - $.left + T.left) / z.x,
    right: ($.right - A.right + T.right) / z.x
  };
}
const s0 = (r) => ({
  name: "arrow",
  options: r,
  async fn(l) {
    const {
      x: i,
      y: u,
      placement: c,
      rects: d,
      platform: m,
      elements: p,
      middlewareData: g
    } = l, {
      element: y,
      padding: E = 0
    } = Zt(r, l) || {};
    if (y == null)
      return {};
    const S = jf(E), R = {
      x: i,
      y: u
    }, _ = Aa(c), T = Oa(_), x = await m.getDimensions(y), P = _ === "y", A = P ? "top" : "left", M = P ? "bottom" : "right", j = P ? "clientHeight" : "clientWidth", z = d.reference[T] + d.reference[_] - R[_] - d.floating[T], $ = R[_] - d.reference[_], J = await (m.getOffsetParent == null ? void 0 : m.getOffsetParent(y));
    let H = J ? J[j] : 0;
    (!H || !await (m.isElement == null ? void 0 : m.isElement(J))) && (H = p.floating[j] || d.floating[T]);
    const ne = z / 2 - $ / 2, pe = H / 2 - x[T] / 2 - 1, fe = zt(S[A], pe), Se = zt(S[M], pe), q = fe, he = H - x[T] - Se, ae = H / 2 - x[T] / 2 + ne, le = ha(q, ae, he), ce = !g.arrow && Tr(c) != null && ae !== le && d.reference[T] / 2 - (ae < q ? fe : Se) - x[T] / 2 < 0, G = ce ? ae < q ? ae - q : ae - he : 0;
    return {
      [_]: R[_] + G,
      data: {
        [_]: le,
        centerOffset: ae - le - G,
        ...ce && {
          alignmentOffset: G
        }
      },
      reset: ce
    };
  }
}), a0 = function(r) {
  return r === void 0 && (r = {}), {
    name: "flip",
    options: r,
    async fn(l) {
      var i, u;
      const {
        placement: c,
        middlewareData: d,
        rects: m,
        initialPlacement: p,
        platform: g,
        elements: y
      } = l, {
        mainAxis: E = !0,
        crossAxis: S = !0,
        fallbackPlacements: R,
        fallbackStrategy: _ = "bestFit",
        fallbackAxisSideDirection: T = "none",
        flipAlignment: x = !0,
        ...P
      } = Zt(r, l);
      if ((i = d.arrow) != null && i.alignmentOffset)
        return {};
      const A = Jt(c), M = bn(p), j = Jt(p) === p, z = await (g.isRTL == null ? void 0 : g.isRTL(y.floating)), $ = R || (j || !x ? [Gi(p)] : n0(p)), J = T !== "none";
      !R && J && $.push(...o0(p, x, T, z));
      const H = [p, ...$], ne = await ko(l, P), pe = [];
      let fe = ((u = d.flip) == null ? void 0 : u.overflows) || [];
      if (E && pe.push(ne[A]), S) {
        const ae = t0(c, m, z);
        pe.push(ne[ae[0]], ne[ae[1]]);
      }
      if (fe = [...fe, {
        placement: c,
        overflows: pe
      }], !pe.every((ae) => ae <= 0)) {
        var Se, q;
        const ae = (((Se = d.flip) == null ? void 0 : Se.index) || 0) + 1, le = H[ae];
        if (le)
          return {
            data: {
              index: ae,
              overflows: fe
            },
            reset: {
              placement: le
            }
          };
        let ce = (q = fe.filter((G) => G.overflows[0] <= 0).sort((G, D) => G.overflows[1] - D.overflows[1])[0]) == null ? void 0 : q.placement;
        if (!ce)
          switch (_) {
            case "bestFit": {
              var he;
              const G = (he = fe.filter((D) => {
                if (J) {
                  const U = bn(D.placement);
                  return U === M || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  U === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((U) => U > 0).reduce((U, K) => U + K, 0)]).sort((D, U) => D[1] - U[1])[0]) == null ? void 0 : he[0];
              G && (ce = G);
              break;
            }
            case "initialPlacement":
              ce = p;
              break;
          }
        if (c !== ce)
          return {
            reset: {
              placement: ce
            }
          };
      }
      return {};
    }
  };
};
function rf(r, l) {
  return {
    top: r.top - l.height,
    right: r.right - l.width,
    bottom: r.bottom - l.height,
    left: r.left - l.width
  };
}
function of(r) {
  return Jv.some((l) => r[l] >= 0);
}
const u0 = function(r) {
  return r === void 0 && (r = {}), {
    name: "hide",
    options: r,
    async fn(l) {
      const {
        rects: i
      } = l, {
        strategy: u = "referenceHidden",
        ...c
      } = Zt(r, l);
      switch (u) {
        case "referenceHidden": {
          const d = await ko(l, {
            ...c,
            elementContext: "reference"
          }), m = rf(d, i.reference);
          return {
            data: {
              referenceHiddenOffsets: m,
              referenceHidden: of(m)
            }
          };
        }
        case "escaped": {
          const d = await ko(l, {
            ...c,
            altBoundary: !0
          }), m = rf(d, i.floating);
          return {
            data: {
              escapedOffsets: m,
              escaped: of(m)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function c0(r, l) {
  const {
    placement: i,
    platform: u,
    elements: c
  } = r, d = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), m = Jt(i), p = Tr(i), g = bn(i) === "y", y = ["left", "top"].includes(m) ? -1 : 1, E = d && g ? -1 : 1, S = Zt(l, r);
  let {
    mainAxis: R,
    crossAxis: _,
    alignmentAxis: T
  } = typeof S == "number" ? {
    mainAxis: S,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...S
  };
  return p && typeof T == "number" && (_ = p === "end" ? T * -1 : T), g ? {
    x: _ * E,
    y: R * y
  } : {
    x: R * y,
    y: _ * E
  };
}
const d0 = function(r) {
  return r === void 0 && (r = 0), {
    name: "offset",
    options: r,
    async fn(l) {
      var i, u;
      const {
        x: c,
        y: d,
        placement: m,
        middlewareData: p
      } = l, g = await c0(l, r);
      return m === ((i = p.offset) == null ? void 0 : i.placement) && (u = p.arrow) != null && u.alignmentOffset ? {} : {
        x: c + g.x,
        y: d + g.y,
        data: {
          ...g,
          placement: m
        }
      };
    }
  };
}, f0 = function(r) {
  return r === void 0 && (r = {}), {
    name: "shift",
    options: r,
    async fn(l) {
      const {
        x: i,
        y: u,
        placement: c
      } = l, {
        mainAxis: d = !0,
        crossAxis: m = !1,
        limiter: p = {
          fn: (P) => {
            let {
              x: A,
              y: M
            } = P;
            return {
              x: A,
              y: M
            };
          }
        },
        ...g
      } = Zt(r, l), y = {
        x: i,
        y: u
      }, E = await ko(l, g), S = bn(Jt(c)), R = Ta(S);
      let _ = y[R], T = y[S];
      if (d) {
        const P = R === "y" ? "top" : "left", A = R === "y" ? "bottom" : "right", M = _ + E[P], j = _ - E[A];
        _ = ha(M, _, j);
      }
      if (m) {
        const P = S === "y" ? "top" : "left", A = S === "y" ? "bottom" : "right", M = T + E[P], j = T - E[A];
        T = ha(M, T, j);
      }
      const x = p.fn({
        ...l,
        [R]: _,
        [S]: T
      });
      return {
        ...x,
        data: {
          x: x.x - i,
          y: x.y - u
        }
      };
    }
  };
}, p0 = function(r) {
  return r === void 0 && (r = {}), {
    options: r,
    fn(l) {
      const {
        x: i,
        y: u,
        placement: c,
        rects: d,
        middlewareData: m
      } = l, {
        offset: p = 0,
        mainAxis: g = !0,
        crossAxis: y = !0
      } = Zt(r, l), E = {
        x: i,
        y: u
      }, S = bn(c), R = Ta(S);
      let _ = E[R], T = E[S];
      const x = Zt(p, l), P = typeof x == "number" ? {
        mainAxis: x,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...x
      };
      if (g) {
        const j = R === "y" ? "height" : "width", z = d.reference[R] - d.floating[j] + P.mainAxis, $ = d.reference[R] + d.reference[j] - P.mainAxis;
        _ < z ? _ = z : _ > $ && (_ = $);
      }
      if (y) {
        var A, M;
        const j = R === "y" ? "width" : "height", z = ["top", "left"].includes(Jt(c)), $ = d.reference[S] - d.floating[j] + (z && ((A = m.offset) == null ? void 0 : A[S]) || 0) + (z ? 0 : P.crossAxis), J = d.reference[S] + d.reference[j] + (z ? 0 : ((M = m.offset) == null ? void 0 : M[S]) || 0) - (z ? P.crossAxis : 0);
        T < $ ? T = $ : T > J && (T = J);
      }
      return {
        [R]: _,
        [S]: T
      };
    }
  };
}, m0 = function(r) {
  return r === void 0 && (r = {}), {
    name: "size",
    options: r,
    async fn(l) {
      const {
        placement: i,
        rects: u,
        platform: c,
        elements: d
      } = l, {
        apply: m = () => {
        },
        ...p
      } = Zt(r, l), g = await ko(l, p), y = Jt(i), E = Tr(i), S = bn(i) === "y", {
        width: R,
        height: _
      } = u.floating;
      let T, x;
      y === "top" || y === "bottom" ? (T = y, x = E === (await (c.isRTL == null ? void 0 : c.isRTL(d.floating)) ? "start" : "end") ? "left" : "right") : (x = y, T = E === "end" ? "top" : "bottom");
      const P = _ - g.top - g.bottom, A = R - g.left - g.right, M = zt(_ - g[T], P), j = zt(R - g[x], A), z = !l.middlewareData.shift;
      let $ = M, J = j;
      if (S ? J = E || z ? zt(j, A) : A : $ = E || z ? zt(M, P) : P, z && !E) {
        const ne = pt(g.left, 0), pe = pt(g.right, 0), fe = pt(g.top, 0), Se = pt(g.bottom, 0);
        S ? J = R - 2 * (ne !== 0 || pe !== 0 ? ne + pe : pt(g.left, g.right)) : $ = _ - 2 * (fe !== 0 || Se !== 0 ? fe + Se : pt(g.top, g.bottom));
      }
      await m({
        ...l,
        availableWidth: J,
        availableHeight: $
      });
      const H = await c.getDimensions(d.floating);
      return R !== H.width || _ !== H.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Or(r) {
  return Df(r) ? (r.nodeName || "").toLowerCase() : "#document";
}
function mt(r) {
  var l;
  return (r == null || (l = r.ownerDocument) == null ? void 0 : l.defaultView) || window;
}
function qt(r) {
  var l;
  return (l = (Df(r) ? r.ownerDocument : r.document) || window.document) == null ? void 0 : l.documentElement;
}
function Df(r) {
  return r instanceof Node || r instanceof mt(r).Node;
}
function _t(r) {
  return r instanceof Element || r instanceof mt(r).Element;
}
function Ft(r) {
  return r instanceof HTMLElement || r instanceof mt(r).HTMLElement;
}
function lf(r) {
  return typeof ShadowRoot > "u" ? !1 : r instanceof ShadowRoot || r instanceof mt(r).ShadowRoot;
}
function Po(r) {
  const {
    overflow: l,
    overflowX: i,
    overflowY: u,
    display: c
  } = Tt(r);
  return /auto|scroll|overlay|hidden|clip/.test(l + u + i) && !["inline", "contents"].includes(c);
}
function h0(r) {
  return ["table", "td", "th"].includes(Or(r));
}
function tl(r) {
  return [":popover-open", ":modal"].some((l) => {
    try {
      return r.matches(l);
    } catch {
      return !1;
    }
  });
}
function La(r) {
  const l = Ma(), i = _t(r) ? Tt(r) : r;
  return i.transform !== "none" || i.perspective !== "none" || (i.containerType ? i.containerType !== "normal" : !1) || !l && (i.backdropFilter ? i.backdropFilter !== "none" : !1) || !l && (i.filter ? i.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((u) => (i.willChange || "").includes(u)) || ["paint", "layout", "strict", "content"].some((u) => (i.contain || "").includes(u));
}
function g0(r) {
  let l = Pn(r);
  for (; Ft(l) && !Rr(l); ) {
    if (La(l))
      return l;
    if (tl(l))
      return null;
    l = Pn(l);
  }
  return null;
}
function Ma() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Rr(r) {
  return ["html", "body", "#document"].includes(Or(r));
}
function Tt(r) {
  return mt(r).getComputedStyle(r);
}
function nl(r) {
  return _t(r) ? {
    scrollLeft: r.scrollLeft,
    scrollTop: r.scrollTop
  } : {
    scrollLeft: r.scrollX,
    scrollTop: r.scrollY
  };
}
function Pn(r) {
  if (Or(r) === "html")
    return r;
  const l = (
    // Step into the shadow DOM of the parent of a slotted node.
    r.assignedSlot || // DOM Element detected.
    r.parentNode || // ShadowRoot detected.
    lf(r) && r.host || // Fallback.
    qt(r)
  );
  return lf(l) ? l.host : l;
}
function zf(r) {
  const l = Pn(r);
  return Rr(l) ? r.ownerDocument ? r.ownerDocument.body : r.body : Ft(l) && Po(l) ? l : zf(l);
}
function Eo(r, l, i) {
  var u;
  l === void 0 && (l = []), i === void 0 && (i = !0);
  const c = zf(r), d = c === ((u = r.ownerDocument) == null ? void 0 : u.body), m = mt(c);
  if (d) {
    const p = va(m);
    return l.concat(m, m.visualViewport || [], Po(c) ? c : [], p && i ? Eo(p) : []);
  }
  return l.concat(c, Eo(c, [], i));
}
function va(r) {
  return r.parent && Object.getPrototypeOf(r.parent) ? r.frameElement : null;
}
function Ff(r) {
  const l = Tt(r);
  let i = parseFloat(l.width) || 0, u = parseFloat(l.height) || 0;
  const c = Ft(r), d = c ? r.offsetWidth : i, m = c ? r.offsetHeight : u, p = Yi(i) !== d || Yi(u) !== m;
  return p && (i = d, u = m), {
    width: i,
    height: u,
    $: p
  };
}
function Ia(r) {
  return _t(r) ? r : r.contextElement;
}
function Pr(r) {
  const l = Ia(r);
  if (!Ft(l))
    return En(1);
  const i = l.getBoundingClientRect(), {
    width: u,
    height: c,
    $: d
  } = Ff(l);
  let m = (d ? Yi(i.width) : i.width) / u, p = (d ? Yi(i.height) : i.height) / c;
  return (!m || !Number.isFinite(m)) && (m = 1), (!p || !Number.isFinite(p)) && (p = 1), {
    x: m,
    y: p
  };
}
const v0 = /* @__PURE__ */ En(0);
function Wf(r) {
  const l = mt(r);
  return !Ma() || !l.visualViewport ? v0 : {
    x: l.visualViewport.offsetLeft,
    y: l.visualViewport.offsetTop
  };
}
function y0(r, l, i) {
  return l === void 0 && (l = !1), !i || l && i !== mt(r) ? !1 : l;
}
function Un(r, l, i, u) {
  l === void 0 && (l = !1), i === void 0 && (i = !1);
  const c = r.getBoundingClientRect(), d = Ia(r);
  let m = En(1);
  l && (u ? _t(u) && (m = Pr(u)) : m = Pr(r));
  const p = y0(d, i, u) ? Wf(d) : En(0);
  let g = (c.left + p.x) / m.x, y = (c.top + p.y) / m.y, E = c.width / m.x, S = c.height / m.y;
  if (d) {
    const R = mt(d), _ = u && _t(u) ? mt(u) : u;
    let T = R, x = va(T);
    for (; x && u && _ !== T; ) {
      const P = Pr(x), A = x.getBoundingClientRect(), M = Tt(x), j = A.left + (x.clientLeft + parseFloat(M.paddingLeft)) * P.x, z = A.top + (x.clientTop + parseFloat(M.paddingTop)) * P.y;
      g *= P.x, y *= P.y, E *= P.x, S *= P.y, g += j, y += z, T = mt(x), x = va(T);
    }
  }
  return Xi({
    width: E,
    height: S,
    x: g,
    y
  });
}
function w0(r) {
  let {
    elements: l,
    rect: i,
    offsetParent: u,
    strategy: c
  } = r;
  const d = c === "fixed", m = qt(u), p = l ? tl(l.floating) : !1;
  if (u === m || p && d)
    return i;
  let g = {
    scrollLeft: 0,
    scrollTop: 0
  }, y = En(1);
  const E = En(0), S = Ft(u);
  if ((S || !S && !d) && ((Or(u) !== "body" || Po(m)) && (g = nl(u)), Ft(u))) {
    const R = Un(u);
    y = Pr(u), E.x = R.x + u.clientLeft, E.y = R.y + u.clientTop;
  }
  return {
    width: i.width * y.x,
    height: i.height * y.y,
    x: i.x * y.x - g.scrollLeft * y.x + E.x,
    y: i.y * y.y - g.scrollTop * y.y + E.y
  };
}
function x0(r) {
  return Array.from(r.getClientRects());
}
function Bf(r) {
  return Un(qt(r)).left + nl(r).scrollLeft;
}
function S0(r) {
  const l = qt(r), i = nl(r), u = r.ownerDocument.body, c = pt(l.scrollWidth, l.clientWidth, u.scrollWidth, u.clientWidth), d = pt(l.scrollHeight, l.clientHeight, u.scrollHeight, u.clientHeight);
  let m = -i.scrollLeft + Bf(r);
  const p = -i.scrollTop;
  return Tt(u).direction === "rtl" && (m += pt(l.clientWidth, u.clientWidth) - c), {
    width: c,
    height: d,
    x: m,
    y: p
  };
}
function C0(r, l) {
  const i = mt(r), u = qt(r), c = i.visualViewport;
  let d = u.clientWidth, m = u.clientHeight, p = 0, g = 0;
  if (c) {
    d = c.width, m = c.height;
    const y = Ma();
    (!y || y && l === "fixed") && (p = c.offsetLeft, g = c.offsetTop);
  }
  return {
    width: d,
    height: m,
    x: p,
    y: g
  };
}
function k0(r, l) {
  const i = Un(r, !0, l === "fixed"), u = i.top + r.clientTop, c = i.left + r.clientLeft, d = Ft(r) ? Pr(r) : En(1), m = r.clientWidth * d.x, p = r.clientHeight * d.y, g = c * d.x, y = u * d.y;
  return {
    width: m,
    height: p,
    x: g,
    y
  };
}
function sf(r, l, i) {
  let u;
  if (l === "viewport")
    u = C0(r, i);
  else if (l === "document")
    u = S0(qt(r));
  else if (_t(l))
    u = k0(l, i);
  else {
    const c = Wf(r);
    u = {
      ...l,
      x: l.x - c.x,
      y: l.y - c.y
    };
  }
  return Xi(u);
}
function $f(r, l) {
  const i = Pn(r);
  return i === l || !_t(i) || Rr(i) ? !1 : Tt(i).position === "fixed" || $f(i, l);
}
function E0(r, l) {
  const i = l.get(r);
  if (i)
    return i;
  let u = Eo(r, [], !1).filter((p) => _t(p) && Or(p) !== "body"), c = null;
  const d = Tt(r).position === "fixed";
  let m = d ? Pn(r) : r;
  for (; _t(m) && !Rr(m); ) {
    const p = Tt(m), g = La(m);
    !g && p.position === "fixed" && (c = null), (d ? !g && !c : !g && p.position === "static" && !!c && ["absolute", "fixed"].includes(c.position) || Po(m) && !g && $f(r, m)) ? u = u.filter((E) => E !== m) : c = p, m = Pn(m);
  }
  return l.set(r, u), u;
}
function b0(r) {
  let {
    element: l,
    boundary: i,
    rootBoundary: u,
    strategy: c
  } = r;
  const m = [...i === "clippingAncestors" ? tl(l) ? [] : E0(l, this._c) : [].concat(i), u], p = m[0], g = m.reduce((y, E) => {
    const S = sf(l, E, c);
    return y.top = pt(S.top, y.top), y.right = zt(S.right, y.right), y.bottom = zt(S.bottom, y.bottom), y.left = pt(S.left, y.left), y;
  }, sf(l, p, c));
  return {
    width: g.right - g.left,
    height: g.bottom - g.top,
    x: g.left,
    y: g.top
  };
}
function P0(r) {
  const {
    width: l,
    height: i
  } = Ff(r);
  return {
    width: l,
    height: i
  };
}
function N0(r, l, i) {
  const u = Ft(l), c = qt(l), d = i === "fixed", m = Un(r, !0, d, l);
  let p = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const g = En(0);
  if (u || !u && !d)
    if ((Or(l) !== "body" || Po(c)) && (p = nl(l)), u) {
      const S = Un(l, !0, d, l);
      g.x = S.x + l.clientLeft, g.y = S.y + l.clientTop;
    } else c && (g.x = Bf(c));
  const y = m.left + p.scrollLeft - g.x, E = m.top + p.scrollTop - g.y;
  return {
    x: y,
    y: E,
    width: m.width,
    height: m.height
  };
}
function la(r) {
  return Tt(r).position === "static";
}
function af(r, l) {
  return !Ft(r) || Tt(r).position === "fixed" ? null : l ? l(r) : r.offsetParent;
}
function Vf(r, l) {
  const i = mt(r);
  if (tl(r))
    return i;
  if (!Ft(r)) {
    let c = Pn(r);
    for (; c && !Rr(c); ) {
      if (_t(c) && !la(c))
        return c;
      c = Pn(c);
    }
    return i;
  }
  let u = af(r, l);
  for (; u && h0(u) && la(u); )
    u = af(u, l);
  return u && Rr(u) && la(u) && !La(u) ? i : u || g0(r) || i;
}
const R0 = async function(r) {
  const l = this.getOffsetParent || Vf, i = this.getDimensions, u = await i(r.floating);
  return {
    reference: N0(r.reference, await l(r.floating), r.strategy),
    floating: {
      x: 0,
      y: 0,
      width: u.width,
      height: u.height
    }
  };
};
function _0(r) {
  return Tt(r).direction === "rtl";
}
const T0 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: w0,
  getDocumentElement: qt,
  getClippingRect: b0,
  getOffsetParent: Vf,
  getElementRects: R0,
  getClientRects: x0,
  getDimensions: P0,
  getScale: Pr,
  isElement: _t,
  isRTL: _0
};
function O0(r, l) {
  let i = null, u;
  const c = qt(r);
  function d() {
    var p;
    clearTimeout(u), (p = i) == null || p.disconnect(), i = null;
  }
  function m(p, g) {
    p === void 0 && (p = !1), g === void 0 && (g = 1), d();
    const {
      left: y,
      top: E,
      width: S,
      height: R
    } = r.getBoundingClientRect();
    if (p || l(), !S || !R)
      return;
    const _ = ji(E), T = ji(c.clientWidth - (y + S)), x = ji(c.clientHeight - (E + R)), P = ji(y), M = {
      rootMargin: -_ + "px " + -T + "px " + -x + "px " + -P + "px",
      threshold: pt(0, zt(1, g)) || 1
    };
    let j = !0;
    function z($) {
      const J = $[0].intersectionRatio;
      if (J !== g) {
        if (!j)
          return m();
        J ? m(!1, J) : u = setTimeout(() => {
          m(!1, 1e-7);
        }, 1e3);
      }
      j = !1;
    }
    try {
      i = new IntersectionObserver(z, {
        ...M,
        // Handle <iframe>s
        root: c.ownerDocument
      });
    } catch {
      i = new IntersectionObserver(z, M);
    }
    i.observe(r);
  }
  return m(!0), d;
}
function A0(r, l, i, u) {
  u === void 0 && (u = {});
  const {
    ancestorScroll: c = !0,
    ancestorResize: d = !0,
    elementResize: m = typeof ResizeObserver == "function",
    layoutShift: p = typeof IntersectionObserver == "function",
    animationFrame: g = !1
  } = u, y = Ia(r), E = c || d ? [...y ? Eo(y) : [], ...Eo(l)] : [];
  E.forEach((A) => {
    c && A.addEventListener("scroll", i, {
      passive: !0
    }), d && A.addEventListener("resize", i);
  });
  const S = y && p ? O0(y, i) : null;
  let R = -1, _ = null;
  m && (_ = new ResizeObserver((A) => {
    let [M] = A;
    M && M.target === y && _ && (_.unobserve(l), cancelAnimationFrame(R), R = requestAnimationFrame(() => {
      var j;
      (j = _) == null || j.observe(l);
    })), i();
  }), y && !g && _.observe(y), _.observe(l));
  let T, x = g ? Un(r) : null;
  g && P();
  function P() {
    const A = Un(r);
    x && (A.x !== x.x || A.y !== x.y || A.width !== x.width || A.height !== x.height) && i(), x = A, T = requestAnimationFrame(P);
  }
  return i(), () => {
    var A;
    E.forEach((M) => {
      c && M.removeEventListener("scroll", i), d && M.removeEventListener("resize", i);
    }), S?.(), (A = _) == null || A.disconnect(), _ = null, g && cancelAnimationFrame(T);
  };
}
const L0 = d0, M0 = f0, I0 = a0, j0 = m0, D0 = u0, uf = s0, z0 = p0, F0 = (r, l, i) => {
  const u = /* @__PURE__ */ new Map(), c = {
    platform: T0,
    ...i
  }, d = {
    ...c.platform,
    _c: u
  };
  return l0(r, l, {
    ...c,
    platform: d
  });
};
var Hi = typeof document < "u" ? h.useLayoutEffect : h.useEffect;
function Zi(r, l) {
  if (r === l)
    return !0;
  if (typeof r != typeof l)
    return !1;
  if (typeof r == "function" && r.toString() === l.toString())
    return !0;
  let i, u, c;
  if (r && l && typeof r == "object") {
    if (Array.isArray(r)) {
      if (i = r.length, i !== l.length) return !1;
      for (u = i; u-- !== 0; )
        if (!Zi(r[u], l[u]))
          return !1;
      return !0;
    }
    if (c = Object.keys(r), i = c.length, i !== Object.keys(l).length)
      return !1;
    for (u = i; u-- !== 0; )
      if (!{}.hasOwnProperty.call(l, c[u]))
        return !1;
    for (u = i; u-- !== 0; ) {
      const d = c[u];
      if (!(d === "_owner" && r.$$typeof) && !Zi(r[d], l[d]))
        return !1;
    }
    return !0;
  }
  return r !== r && l !== l;
}
function Uf(r) {
  return typeof window > "u" ? 1 : (r.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function cf(r, l) {
  const i = Uf(r);
  return Math.round(l * i) / i;
}
function df(r) {
  const l = h.useRef(r);
  return Hi(() => {
    l.current = r;
  }), l;
}
function W0(r) {
  r === void 0 && (r = {});
  const {
    placement: l = "bottom",
    strategy: i = "absolute",
    middleware: u = [],
    platform: c,
    elements: {
      reference: d,
      floating: m
    } = {},
    transform: p = !0,
    whileElementsMounted: g,
    open: y
  } = r, [E, S] = h.useState({
    x: 0,
    y: 0,
    strategy: i,
    placement: l,
    middlewareData: {},
    isPositioned: !1
  }), [R, _] = h.useState(u);
  Zi(R, u) || _(u);
  const [T, x] = h.useState(null), [P, A] = h.useState(null), M = h.useCallback((G) => {
    G !== J.current && (J.current = G, x(G));
  }, []), j = h.useCallback((G) => {
    G !== H.current && (H.current = G, A(G));
  }, []), z = d || T, $ = m || P, J = h.useRef(null), H = h.useRef(null), ne = h.useRef(E), pe = g != null, fe = df(g), Se = df(c), q = h.useCallback(() => {
    if (!J.current || !H.current)
      return;
    const G = {
      placement: l,
      strategy: i,
      middleware: R
    };
    Se.current && (G.platform = Se.current), F0(J.current, H.current, G).then((D) => {
      const U = {
        ...D,
        isPositioned: !0
      };
      he.current && !Zi(ne.current, U) && (ne.current = U, Qn.flushSync(() => {
        S(U);
      }));
    });
  }, [R, l, i, Se]);
  Hi(() => {
    y === !1 && ne.current.isPositioned && (ne.current.isPositioned = !1, S((G) => ({
      ...G,
      isPositioned: !1
    })));
  }, [y]);
  const he = h.useRef(!1);
  Hi(() => (he.current = !0, () => {
    he.current = !1;
  }), []), Hi(() => {
    if (z && (J.current = z), $ && (H.current = $), z && $) {
      if (fe.current)
        return fe.current(z, $, q);
      q();
    }
  }, [z, $, q, fe, pe]);
  const ae = h.useMemo(() => ({
    reference: J,
    floating: H,
    setReference: M,
    setFloating: j
  }), [M, j]), le = h.useMemo(() => ({
    reference: z,
    floating: $
  }), [z, $]), ce = h.useMemo(() => {
    const G = {
      position: i,
      left: 0,
      top: 0
    };
    if (!le.floating)
      return G;
    const D = cf(le.floating, E.x), U = cf(le.floating, E.y);
    return p ? {
      ...G,
      transform: "translate(" + D + "px, " + U + "px)",
      ...Uf(le.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: i,
      left: D,
      top: U
    };
  }, [i, p, le.floating, E.x, E.y]);
  return h.useMemo(() => ({
    ...E,
    update: q,
    refs: ae,
    elements: le,
    floatingStyles: ce
  }), [E, q, ae, le, ce]);
}
const B0 = (r) => {
  function l(i) {
    return {}.hasOwnProperty.call(i, "current");
  }
  return {
    name: "arrow",
    options: r,
    fn(i) {
      const {
        element: u,
        padding: c
      } = typeof r == "function" ? r(i) : r;
      return u && l(u) ? u.current != null ? uf({
        element: u.current,
        padding: c
      }).fn(i) : {} : u ? uf({
        element: u,
        padding: c
      }).fn(i) : {};
    }
  };
}, $0 = (r, l) => ({
  ...L0(r),
  options: [r, l]
}), V0 = (r, l) => ({
  ...M0(r),
  options: [r, l]
}), U0 = (r, l) => ({
  ...z0(r),
  options: [r, l]
}), H0 = (r, l) => ({
  ...I0(r),
  options: [r, l]
}), K0 = (r, l) => ({
  ...j0(r),
  options: [r, l]
}), Q0 = (r, l) => ({
  ...D0(r),
  options: [r, l]
}), Y0 = (r, l) => ({
  ...B0(r),
  options: [r, l]
});
var G0 = "Arrow", Hf = h.forwardRef((r, l) => {
  const { children: i, width: u = 10, height: c = 5, ...d } = r;
  return /* @__PURE__ */ b.jsx(
    Ne.svg,
    {
      ...d,
      ref: l,
      width: u,
      height: c,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: r.asChild ? i : /* @__PURE__ */ b.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Hf.displayName = G0;
var X0 = Hf;
function Z0(r) {
  const [l, i] = h.useState(void 0);
  return nt(() => {
    if (r) {
      i({ width: r.offsetWidth, height: r.offsetHeight });
      const u = new ResizeObserver((c) => {
        if (!Array.isArray(c) || !c.length)
          return;
        const d = c[0];
        let m, p;
        if ("borderBoxSize" in d) {
          const g = d.borderBoxSize, y = Array.isArray(g) ? g[0] : g;
          m = y.inlineSize, p = y.blockSize;
        } else
          m = r.offsetWidth, p = r.offsetHeight;
        i({ width: m, height: p });
      });
      return u.observe(r, { box: "border-box" }), () => u.unobserve(r);
    } else
      i(void 0);
  }, [r]), l;
}
var ja = "Popper", [Kf, Qf] = el(ja), [J0, Yf] = Kf(ja), Gf = (r) => {
  const { __scopePopper: l, children: i } = r, [u, c] = h.useState(null);
  return /* @__PURE__ */ b.jsx(J0, { scope: l, anchor: u, onAnchorChange: c, children: i });
};
Gf.displayName = ja;
var Xf = "PopperAnchor", Zf = h.forwardRef(
  (r, l) => {
    const { __scopePopper: i, virtualRef: u, ...c } = r, d = Yf(Xf, i), m = h.useRef(null), p = Fe(l, m);
    return h.useEffect(() => {
      d.onAnchorChange(u?.current || m.current);
    }), u ? null : /* @__PURE__ */ b.jsx(Ne.div, { ...c, ref: p });
  }
);
Zf.displayName = Xf;
var Da = "PopperContent", [q0, ey] = Kf(Da), Jf = h.forwardRef(
  (r, l) => {
    const {
      __scopePopper: i,
      side: u = "bottom",
      sideOffset: c = 0,
      align: d = "center",
      alignOffset: m = 0,
      arrowPadding: p = 0,
      avoidCollisions: g = !0,
      collisionBoundary: y = [],
      collisionPadding: E = 0,
      sticky: S = "partial",
      hideWhenDetached: R = !1,
      updatePositionStrategy: _ = "optimized",
      onPlaced: T,
      ...x
    } = r, P = Yf(Da, i), [A, M] = h.useState(null), j = Fe(l, (Q) => M(Q)), [z, $] = h.useState(null), J = Z0(z), H = J?.width ?? 0, ne = J?.height ?? 0, pe = u + (d !== "center" ? "-" + d : ""), fe = typeof E == "number" ? E : { top: 0, right: 0, bottom: 0, left: 0, ...E }, Se = Array.isArray(y) ? y : [y], q = Se.length > 0, he = {
      padding: fe,
      boundary: Se.filter(ny),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: q
    }, { refs: ae, floatingStyles: le, placement: ce, isPositioned: G, middlewareData: D } = W0({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: pe,
      whileElementsMounted: (...Q) => A0(...Q, {
        animationFrame: _ === "always"
      }),
      elements: {
        reference: P.anchor
      },
      middleware: [
        $0({ mainAxis: c + ne, alignmentAxis: m }),
        g && V0({
          mainAxis: !0,
          crossAxis: !1,
          limiter: S === "partial" ? U0() : void 0,
          ...he
        }),
        g && H0({ ...he }),
        K0({
          ...he,
          apply: ({ elements: Q, rects: re, availableWidth: ve, availableHeight: we }) => {
            const { width: Ee, height: Ae } = re.reference, Qe = Q.floating.style;
            Qe.setProperty("--radix-popper-available-width", `${ve}px`), Qe.setProperty("--radix-popper-available-height", `${we}px`), Qe.setProperty("--radix-popper-anchor-width", `${Ee}px`), Qe.setProperty("--radix-popper-anchor-height", `${Ae}px`);
          }
        }),
        z && Y0({ element: z, padding: p }),
        ry({ arrowWidth: H, arrowHeight: ne }),
        R && Q0({ strategy: "referenceHidden", ...he })
      ]
    }), [U, K] = tp(ce), k = Xt(T);
    nt(() => {
      G && k?.();
    }, [G, k]);
    const I = D.arrow?.x, de = D.arrow?.y, ue = D.arrow?.centerOffset !== 0, [ye, ge] = h.useState();
    return nt(() => {
      A && ge(window.getComputedStyle(A).zIndex);
    }, [A]), /* @__PURE__ */ b.jsx(
      "div",
      {
        ref: ae.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...le,
          transform: G ? le.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ye,
          "--radix-popper-transform-origin": [
            D.transformOrigin?.x,
            D.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...D.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: r.dir,
        children: /* @__PURE__ */ b.jsx(
          q0,
          {
            scope: i,
            placedSide: U,
            onArrowChange: $,
            arrowX: I,
            arrowY: de,
            shouldHideArrow: ue,
            children: /* @__PURE__ */ b.jsx(
              Ne.div,
              {
                "data-side": U,
                "data-align": K,
                ...x,
                ref: j,
                style: {
                  ...x.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: G ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Jf.displayName = Da;
var qf = "PopperArrow", ty = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ep = h.forwardRef(function(l, i) {
  const { __scopePopper: u, ...c } = l, d = ey(qf, u), m = ty[d.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ b.jsx(
      "span",
      {
        ref: d.onArrowChange,
        style: {
          position: "absolute",
          left: d.arrowX,
          top: d.arrowY,
          [m]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[d.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[d.placedSide],
          visibility: d.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ b.jsx(
          X0,
          {
            ...c,
            ref: i,
            style: {
              ...c.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
ep.displayName = qf;
function ny(r) {
  return r !== null;
}
var ry = (r) => ({
  name: "transformOrigin",
  options: r,
  fn(l) {
    const { placement: i, rects: u, middlewareData: c } = l, m = c.arrow?.centerOffset !== 0, p = m ? 0 : r.arrowWidth, g = m ? 0 : r.arrowHeight, [y, E] = tp(i), S = { start: "0%", center: "50%", end: "100%" }[E], R = (c.arrow?.x ?? 0) + p / 2, _ = (c.arrow?.y ?? 0) + g / 2;
    let T = "", x = "";
    return y === "bottom" ? (T = m ? S : `${R}px`, x = `${-g}px`) : y === "top" ? (T = m ? S : `${R}px`, x = `${u.floating.height + g}px`) : y === "right" ? (T = `${-g}px`, x = m ? S : `${_}px`) : y === "left" && (T = `${u.floating.width + g}px`, x = m ? S : `${_}px`), { data: { x: T, y: x } };
  }
});
function tp(r) {
  const [l, i = "center"] = r.split("-");
  return [l, i];
}
var oy = Gf, iy = Zf, ly = Jf, sy = ep, ay = "Portal", za = h.forwardRef((r, l) => {
  const { container: i, ...u } = r, [c, d] = h.useState(!1);
  nt(() => d(!0), []);
  const m = i || c && globalThis?.document?.body;
  return m ? Rg.createPortal(/* @__PURE__ */ b.jsx(Ne.div, { ...u, ref: l }), m) : null;
});
za.displayName = ay;
function ya({
  prop: r,
  defaultProp: l,
  onChange: i = () => {
  }
}) {
  const [u, c] = uy({ defaultProp: l, onChange: i }), d = r !== void 0, m = d ? r : u, p = Xt(i), g = h.useCallback(
    (y) => {
      if (d) {
        const S = typeof y == "function" ? y(r) : y;
        S !== r && p(S);
      } else
        c(y);
    },
    [d, r, c, p]
  );
  return [m, g];
}
function uy({
  defaultProp: r,
  onChange: l
}) {
  const i = h.useState(r), [u] = i, c = h.useRef(u), d = Xt(l);
  return h.useEffect(() => {
    c.current !== u && (d(u), c.current = u);
  }, [u, c, d]), i;
}
function cy(r) {
  const l = h.useRef({ value: r, previous: r });
  return h.useMemo(() => (l.current.value !== r && (l.current.previous = l.current.value, l.current.value = r), l.current.previous), [r]);
}
var dy = "VisuallyHidden", np = h.forwardRef(
  (r, l) => /* @__PURE__ */ b.jsx(
    Ne.span,
    {
      ...r,
      ref: l,
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
        ...r.style
      }
    }
  )
);
np.displayName = dy;
var fy = function(r) {
  if (typeof document > "u")
    return null;
  var l = Array.isArray(r) ? r[0] : r;
  return l.ownerDocument.body;
}, Sr = /* @__PURE__ */ new WeakMap(), Di = /* @__PURE__ */ new WeakMap(), zi = {}, sa = 0, rp = function(r) {
  return r && (r.host || rp(r.parentNode));
}, py = function(r, l) {
  return l.map(function(i) {
    if (r.contains(i))
      return i;
    var u = rp(i);
    return u && r.contains(u) ? u : (console.error("aria-hidden", i, "in not contained inside", r, ". Doing nothing"), null);
  }).filter(function(i) {
    return !!i;
  });
}, my = function(r, l, i, u) {
  var c = py(l, Array.isArray(r) ? r : [r]);
  zi[i] || (zi[i] = /* @__PURE__ */ new WeakMap());
  var d = zi[i], m = [], p = /* @__PURE__ */ new Set(), g = new Set(c), y = function(S) {
    !S || p.has(S) || (p.add(S), y(S.parentNode));
  };
  c.forEach(y);
  var E = function(S) {
    !S || g.has(S) || Array.prototype.forEach.call(S.children, function(R) {
      if (p.has(R))
        E(R);
      else
        try {
          var _ = R.getAttribute(u), T = _ !== null && _ !== "false", x = (Sr.get(R) || 0) + 1, P = (d.get(R) || 0) + 1;
          Sr.set(R, x), d.set(R, P), m.push(R), x === 1 && T && Di.set(R, !0), P === 1 && R.setAttribute(i, "true"), T || R.setAttribute(u, "true");
        } catch (A) {
          console.error("aria-hidden: cannot operate on ", R, A);
        }
    });
  };
  return E(l), p.clear(), sa++, function() {
    m.forEach(function(S) {
      var R = Sr.get(S) - 1, _ = d.get(S) - 1;
      Sr.set(S, R), d.set(S, _), R || (Di.has(S) || S.removeAttribute(u), Di.delete(S)), _ || S.removeAttribute(i);
    }), sa--, sa || (Sr = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap(), Di = /* @__PURE__ */ new WeakMap(), zi = {});
  };
}, op = function(r, l, i) {
  i === void 0 && (i = "data-aria-hidden");
  var u = Array.from(Array.isArray(r) ? r : [r]), c = fy(r);
  return c ? (u.push.apply(u, Array.from(c.querySelectorAll("[aria-live]"))), my(u, c, i, "aria-hidden")) : function() {
    return null;
  };
}, Dt = function() {
  return Dt = Object.assign || function(l) {
    for (var i, u = 1, c = arguments.length; u < c; u++) {
      i = arguments[u];
      for (var d in i) Object.prototype.hasOwnProperty.call(i, d) && (l[d] = i[d]);
    }
    return l;
  }, Dt.apply(this, arguments);
};
function ip(r, l) {
  var i = {};
  for (var u in r) Object.prototype.hasOwnProperty.call(r, u) && l.indexOf(u) < 0 && (i[u] = r[u]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, u = Object.getOwnPropertySymbols(r); c < u.length; c++)
      l.indexOf(u[c]) < 0 && Object.prototype.propertyIsEnumerable.call(r, u[c]) && (i[u[c]] = r[u[c]]);
  return i;
}
function hy(r, l, i) {
  if (i || arguments.length === 2) for (var u = 0, c = l.length, d; u < c; u++)
    (d || !(u in l)) && (d || (d = Array.prototype.slice.call(l, 0, u)), d[u] = l[u]);
  return r.concat(d || Array.prototype.slice.call(l));
}
var Ki = "right-scroll-bar-position", Qi = "width-before-scroll-bar", gy = "with-scroll-bars-hidden", vy = "--removed-body-scroll-bar-size";
function aa(r, l) {
  return typeof r == "function" ? r(l) : r && (r.current = l), r;
}
function yy(r, l) {
  var i = h.useState(function() {
    return {
      // value
      value: r,
      // last callback
      callback: l,
      // "memoized" public interface
      facade: {
        get current() {
          return i.value;
        },
        set current(u) {
          var c = i.value;
          c !== u && (i.value = u, i.callback(u, c));
        }
      }
    };
  })[0];
  return i.callback = l, i.facade;
}
var wy = typeof window < "u" ? h.useLayoutEffect : h.useEffect, ff = /* @__PURE__ */ new WeakMap();
function xy(r, l) {
  var i = yy(null, function(u) {
    return r.forEach(function(c) {
      return aa(c, u);
    });
  });
  return wy(function() {
    var u = ff.get(i);
    if (u) {
      var c = new Set(u), d = new Set(r), m = i.current;
      c.forEach(function(p) {
        d.has(p) || aa(p, null);
      }), d.forEach(function(p) {
        c.has(p) || aa(p, m);
      });
    }
    ff.set(i, r);
  }, [r]), i;
}
function Sy(r) {
  return r;
}
function Cy(r, l) {
  l === void 0 && (l = Sy);
  var i = [], u = !1, c = {
    read: function() {
      if (u)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return i.length ? i[i.length - 1] : r;
    },
    useMedium: function(d) {
      var m = l(d, u);
      return i.push(m), function() {
        i = i.filter(function(p) {
          return p !== m;
        });
      };
    },
    assignSyncMedium: function(d) {
      for (u = !0; i.length; ) {
        var m = i;
        i = [], m.forEach(d);
      }
      i = {
        push: function(p) {
          return d(p);
        },
        filter: function() {
          return i;
        }
      };
    },
    assignMedium: function(d) {
      u = !0;
      var m = [];
      if (i.length) {
        var p = i;
        i = [], p.forEach(d), m = i;
      }
      var g = function() {
        var E = m;
        m = [], E.forEach(d);
      }, y = function() {
        return Promise.resolve().then(g);
      };
      y(), i = {
        push: function(E) {
          m.push(E), y();
        },
        filter: function(E) {
          return m = m.filter(E), i;
        }
      };
    }
  };
  return c;
}
function ky(r) {
  r === void 0 && (r = {});
  var l = Cy(null);
  return l.options = Dt({ async: !0, ssr: !1 }, r), l;
}
var lp = function(r) {
  var l = r.sideCar, i = ip(r, ["sideCar"]);
  if (!l)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var u = l.read();
  if (!u)
    throw new Error("Sidecar medium not found");
  return h.createElement(u, Dt({}, i));
};
lp.isSideCarExport = !0;
function Ey(r, l) {
  return r.useMedium(l), lp;
}
var sp = ky(), ua = function() {
}, rl = h.forwardRef(function(r, l) {
  var i = h.useRef(null), u = h.useState({
    onScrollCapture: ua,
    onWheelCapture: ua,
    onTouchMoveCapture: ua
  }), c = u[0], d = u[1], m = r.forwardProps, p = r.children, g = r.className, y = r.removeScrollBar, E = r.enabled, S = r.shards, R = r.sideCar, _ = r.noIsolation, T = r.inert, x = r.allowPinchZoom, P = r.as, A = P === void 0 ? "div" : P, M = r.gapMode, j = ip(r, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), z = R, $ = xy([i, l]), J = Dt(Dt({}, j), c);
  return h.createElement(
    h.Fragment,
    null,
    E && h.createElement(z, { sideCar: sp, removeScrollBar: y, shards: S, noIsolation: _, inert: T, setCallbacks: d, allowPinchZoom: !!x, lockRef: i, gapMode: M }),
    m ? h.cloneElement(h.Children.only(p), Dt(Dt({}, J), { ref: $ })) : h.createElement(A, Dt({}, J, { className: g, ref: $ }), p)
  );
});
rl.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
rl.classNames = {
  fullWidth: Qi,
  zeroRight: Ki
};
var by = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Py() {
  if (!document)
    return null;
  var r = document.createElement("style");
  r.type = "text/css";
  var l = by();
  return l && r.setAttribute("nonce", l), r;
}
function Ny(r, l) {
  r.styleSheet ? r.styleSheet.cssText = l : r.appendChild(document.createTextNode(l));
}
function Ry(r) {
  var l = document.head || document.getElementsByTagName("head")[0];
  l.appendChild(r);
}
var _y = function() {
  var r = 0, l = null;
  return {
    add: function(i) {
      r == 0 && (l = Py()) && (Ny(l, i), Ry(l)), r++;
    },
    remove: function() {
      r--, !r && l && (l.parentNode && l.parentNode.removeChild(l), l = null);
    }
  };
}, Ty = function() {
  var r = _y();
  return function(l, i) {
    h.useEffect(function() {
      return r.add(l), function() {
        r.remove();
      };
    }, [l && i]);
  };
}, ap = function() {
  var r = Ty(), l = function(i) {
    var u = i.styles, c = i.dynamic;
    return r(u, c), null;
  };
  return l;
}, Oy = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ca = function(r) {
  return parseInt(r || "", 10) || 0;
}, Ay = function(r) {
  var l = window.getComputedStyle(document.body), i = l[r === "padding" ? "paddingLeft" : "marginLeft"], u = l[r === "padding" ? "paddingTop" : "marginTop"], c = l[r === "padding" ? "paddingRight" : "marginRight"];
  return [ca(i), ca(u), ca(c)];
}, Ly = function(r) {
  if (r === void 0 && (r = "margin"), typeof window > "u")
    return Oy;
  var l = Ay(r), i = document.documentElement.clientWidth, u = window.innerWidth;
  return {
    left: l[0],
    top: l[1],
    right: l[2],
    gap: Math.max(0, u - i + l[2] - l[0])
  };
}, My = ap(), Nr = "data-scroll-locked", Iy = function(r, l, i, u) {
  var c = r.left, d = r.top, m = r.right, p = r.gap;
  return i === void 0 && (i = "margin"), `
  .`.concat(gy, ` {
   overflow: hidden `).concat(u, `;
   padding-right: `).concat(p, "px ").concat(u, `;
  }
  body[`).concat(Nr, `] {
    overflow: hidden `).concat(u, `;
    overscroll-behavior: contain;
    `).concat([
    l && "position: relative ".concat(u, ";"),
    i === "margin" && `
    padding-left: `.concat(c, `px;
    padding-top: `).concat(d, `px;
    padding-right: `).concat(m, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(p, "px ").concat(u, `;
    `),
    i === "padding" && "padding-right: ".concat(p, "px ").concat(u, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ki, ` {
    right: `).concat(p, "px ").concat(u, `;
  }
  
  .`).concat(Qi, ` {
    margin-right: `).concat(p, "px ").concat(u, `;
  }
  
  .`).concat(Ki, " .").concat(Ki, ` {
    right: 0 `).concat(u, `;
  }
  
  .`).concat(Qi, " .").concat(Qi, ` {
    margin-right: 0 `).concat(u, `;
  }
  
  body[`).concat(Nr, `] {
    `).concat(vy, ": ").concat(p, `px;
  }
`);
}, pf = function() {
  var r = parseInt(document.body.getAttribute(Nr) || "0", 10);
  return isFinite(r) ? r : 0;
}, jy = function() {
  h.useEffect(function() {
    return document.body.setAttribute(Nr, (pf() + 1).toString()), function() {
      var r = pf() - 1;
      r <= 0 ? document.body.removeAttribute(Nr) : document.body.setAttribute(Nr, r.toString());
    };
  }, []);
}, Dy = function(r) {
  var l = r.noRelative, i = r.noImportant, u = r.gapMode, c = u === void 0 ? "margin" : u;
  jy();
  var d = h.useMemo(function() {
    return Ly(c);
  }, [c]);
  return h.createElement(My, { styles: Iy(d, !l, c, i ? "" : "!important") });
}, wa = !1;
if (typeof window < "u")
  try {
    var Fi = Object.defineProperty({}, "passive", {
      get: function() {
        return wa = !0, !0;
      }
    });
    window.addEventListener("test", Fi, Fi), window.removeEventListener("test", Fi, Fi);
  } catch {
    wa = !1;
  }
var Cr = wa ? { passive: !1 } : !1, zy = function(r) {
  return r.tagName === "TEXTAREA";
}, up = function(r, l) {
  var i = window.getComputedStyle(r);
  return (
    // not-not-scrollable
    i[l] !== "hidden" && // contains scroll inside self
    !(i.overflowY === i.overflowX && !zy(r) && i[l] === "visible")
  );
}, Fy = function(r) {
  return up(r, "overflowY");
}, Wy = function(r) {
  return up(r, "overflowX");
}, mf = function(r, l) {
  var i = l.ownerDocument, u = l;
  do {
    typeof ShadowRoot < "u" && u instanceof ShadowRoot && (u = u.host);
    var c = cp(r, u);
    if (c) {
      var d = dp(r, u), m = d[1], p = d[2];
      if (m > p)
        return !0;
    }
    u = u.parentNode;
  } while (u && u !== i.body);
  return !1;
}, By = function(r) {
  var l = r.scrollTop, i = r.scrollHeight, u = r.clientHeight;
  return [
    l,
    i,
    u
  ];
}, $y = function(r) {
  var l = r.scrollLeft, i = r.scrollWidth, u = r.clientWidth;
  return [
    l,
    i,
    u
  ];
}, cp = function(r, l) {
  return r === "v" ? Fy(l) : Wy(l);
}, dp = function(r, l) {
  return r === "v" ? By(l) : $y(l);
}, Vy = function(r, l) {
  return r === "h" && l === "rtl" ? -1 : 1;
}, Uy = function(r, l, i, u, c) {
  var d = Vy(r, window.getComputedStyle(l).direction), m = d * u, p = i.target, g = l.contains(p), y = !1, E = m > 0, S = 0, R = 0;
  do {
    var _ = dp(r, p), T = _[0], x = _[1], P = _[2], A = x - P - d * T;
    (T || A) && cp(r, p) && (S += A, R += T), p instanceof ShadowRoot ? p = p.host : p = p.parentNode;
  } while (
    // portaled content
    !g && p !== document.body || // self content
    g && (l.contains(p) || l === p)
  );
  return (E && (Math.abs(S) < 1 || !c) || !E && (Math.abs(R) < 1 || !c)) && (y = !0), y;
}, Wi = function(r) {
  return "changedTouches" in r ? [r.changedTouches[0].clientX, r.changedTouches[0].clientY] : [0, 0];
}, hf = function(r) {
  return [r.deltaX, r.deltaY];
}, gf = function(r) {
  return r && "current" in r ? r.current : r;
}, Hy = function(r, l) {
  return r[0] === l[0] && r[1] === l[1];
}, Ky = function(r) {
  return `
  .block-interactivity-`.concat(r, ` {pointer-events: none;}
  .allow-interactivity-`).concat(r, ` {pointer-events: all;}
`);
}, Qy = 0, kr = [];
function Yy(r) {
  var l = h.useRef([]), i = h.useRef([0, 0]), u = h.useRef(), c = h.useState(Qy++)[0], d = h.useState(ap)[0], m = h.useRef(r);
  h.useEffect(function() {
    m.current = r;
  }, [r]), h.useEffect(function() {
    if (r.inert) {
      document.body.classList.add("block-interactivity-".concat(c));
      var x = hy([r.lockRef.current], (r.shards || []).map(gf), !0).filter(Boolean);
      return x.forEach(function(P) {
        return P.classList.add("allow-interactivity-".concat(c));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(c)), x.forEach(function(P) {
          return P.classList.remove("allow-interactivity-".concat(c));
        });
      };
    }
  }, [r.inert, r.lockRef.current, r.shards]);
  var p = h.useCallback(function(x, P) {
    if ("touches" in x && x.touches.length === 2)
      return !m.current.allowPinchZoom;
    var A = Wi(x), M = i.current, j = "deltaX" in x ? x.deltaX : M[0] - A[0], z = "deltaY" in x ? x.deltaY : M[1] - A[1], $, J = x.target, H = Math.abs(j) > Math.abs(z) ? "h" : "v";
    if ("touches" in x && H === "h" && J.type === "range")
      return !1;
    var ne = mf(H, J);
    if (!ne)
      return !0;
    if (ne ? $ = H : ($ = H === "v" ? "h" : "v", ne = mf(H, J)), !ne)
      return !1;
    if (!u.current && "changedTouches" in x && (j || z) && (u.current = $), !$)
      return !0;
    var pe = u.current || $;
    return Uy(pe, P, x, pe === "h" ? j : z, !0);
  }, []), g = h.useCallback(function(x) {
    var P = x;
    if (!(!kr.length || kr[kr.length - 1] !== d)) {
      var A = "deltaY" in P ? hf(P) : Wi(P), M = l.current.filter(function($) {
        return $.name === P.type && ($.target === P.target || P.target === $.shadowParent) && Hy($.delta, A);
      })[0];
      if (M && M.should) {
        P.cancelable && P.preventDefault();
        return;
      }
      if (!M) {
        var j = (m.current.shards || []).map(gf).filter(Boolean).filter(function($) {
          return $.contains(P.target);
        }), z = j.length > 0 ? p(P, j[0]) : !m.current.noIsolation;
        z && P.cancelable && P.preventDefault();
      }
    }
  }, []), y = h.useCallback(function(x, P, A, M) {
    var j = { name: x, delta: P, target: A, should: M, shadowParent: Gy(A) };
    l.current.push(j), setTimeout(function() {
      l.current = l.current.filter(function(z) {
        return z !== j;
      });
    }, 1);
  }, []), E = h.useCallback(function(x) {
    i.current = Wi(x), u.current = void 0;
  }, []), S = h.useCallback(function(x) {
    y(x.type, hf(x), x.target, p(x, r.lockRef.current));
  }, []), R = h.useCallback(function(x) {
    y(x.type, Wi(x), x.target, p(x, r.lockRef.current));
  }, []);
  h.useEffect(function() {
    return kr.push(d), r.setCallbacks({
      onScrollCapture: S,
      onWheelCapture: S,
      onTouchMoveCapture: R
    }), document.addEventListener("wheel", g, Cr), document.addEventListener("touchmove", g, Cr), document.addEventListener("touchstart", E, Cr), function() {
      kr = kr.filter(function(x) {
        return x !== d;
      }), document.removeEventListener("wheel", g, Cr), document.removeEventListener("touchmove", g, Cr), document.removeEventListener("touchstart", E, Cr);
    };
  }, []);
  var _ = r.removeScrollBar, T = r.inert;
  return h.createElement(
    h.Fragment,
    null,
    T ? h.createElement(d, { styles: Ky(c) }) : null,
    _ ? h.createElement(Dy, { gapMode: r.gapMode }) : null
  );
}
function Gy(r) {
  for (var l = null; r !== null; )
    r instanceof ShadowRoot && (l = r.host, r = r.host), r = r.parentNode;
  return l;
}
const Xy = Ey(sp, Yy);
var Fa = h.forwardRef(function(r, l) {
  return h.createElement(rl, Dt({}, r, { ref: l, sideCar: Xy }));
});
Fa.classNames = rl.classNames;
var Zy = [" ", "Enter", "ArrowUp", "ArrowDown"], Jy = [" ", "Enter"], No = "Select", [ol, il, qy] = Av(No), [Ar, n1] = el(No, [
  qy,
  Qf
]), ll = Qf(), [ew, Nn] = Ar(No), [tw, nw] = Ar(No), fp = (r) => {
  const {
    __scopeSelect: l,
    children: i,
    open: u,
    defaultOpen: c,
    onOpenChange: d,
    value: m,
    defaultValue: p,
    onValueChange: g,
    dir: y,
    name: E,
    autoComplete: S,
    disabled: R,
    required: _
  } = r, T = ll(l), [x, P] = h.useState(null), [A, M] = h.useState(null), [j, z] = h.useState(!1), $ = Mv(y), [J = !1, H] = ya({
    prop: u,
    defaultProp: c,
    onChange: d
  }), [ne, pe] = ya({
    prop: m,
    defaultProp: p,
    onChange: g
  }), fe = h.useRef(null), Se = x ? !!x.closest("form") : !0, [q, he] = h.useState(/* @__PURE__ */ new Set()), ae = Array.from(q).map((le) => le.props.value).join(";");
  return /* @__PURE__ */ b.jsx(oy, { ...T, children: /* @__PURE__ */ b.jsxs(
    ew,
    {
      required: _,
      scope: l,
      trigger: x,
      onTriggerChange: P,
      valueNode: A,
      onValueNodeChange: M,
      valueNodeHasChildren: j,
      onValueNodeHasChildrenChange: z,
      contentId: br(),
      value: ne,
      onValueChange: pe,
      open: J,
      onOpenChange: H,
      dir: $,
      triggerPointerDownPosRef: fe,
      disabled: R,
      children: [
        /* @__PURE__ */ b.jsx(ol.Provider, { scope: l, children: /* @__PURE__ */ b.jsx(
          tw,
          {
            scope: r.__scopeSelect,
            onNativeOptionAdd: h.useCallback((le) => {
              he((ce) => new Set(ce).add(le));
            }, []),
            onNativeOptionRemove: h.useCallback((le) => {
              he((ce) => {
                const G = new Set(ce);
                return G.delete(le), G;
              });
            }, []),
            children: i
          }
        ) }),
        Se ? /* @__PURE__ */ b.jsxs(
          Dp,
          {
            "aria-hidden": !0,
            required: _,
            tabIndex: -1,
            name: E,
            autoComplete: S,
            value: ne,
            onChange: (le) => pe(le.target.value),
            disabled: R,
            children: [
              ne === void 0 ? /* @__PURE__ */ b.jsx("option", { value: "" }) : null,
              Array.from(q)
            ]
          },
          ae
        ) : null
      ]
    }
  ) });
};
fp.displayName = No;
var pp = "SelectTrigger", mp = h.forwardRef(
  (r, l) => {
    const { __scopeSelect: i, disabled: u = !1, ...c } = r, d = ll(i), m = Nn(pp, i), p = m.disabled || u, g = Fe(l, m.onTriggerChange), y = il(i), [E, S, R] = zp((T) => {
      const x = y().filter((M) => !M.disabled), P = x.find((M) => M.value === m.value), A = Fp(x, T, P);
      A !== void 0 && m.onValueChange(A.value);
    }), _ = () => {
      p || (m.onOpenChange(!0), R());
    };
    return /* @__PURE__ */ b.jsx(iy, { asChild: !0, ...d, children: /* @__PURE__ */ b.jsx(
      Ne.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": m.contentId,
        "aria-expanded": m.open,
        "aria-required": m.required,
        "aria-autocomplete": "none",
        dir: m.dir,
        "data-state": m.open ? "open" : "closed",
        disabled: p,
        "data-disabled": p ? "" : void 0,
        "data-placeholder": jp(m.value) ? "" : void 0,
        ...c,
        ref: g,
        onClick: Ie(c.onClick, (T) => {
          T.currentTarget.focus();
        }),
        onPointerDown: Ie(c.onPointerDown, (T) => {
          const x = T.target;
          x.hasPointerCapture(T.pointerId) && x.releasePointerCapture(T.pointerId), T.button === 0 && T.ctrlKey === !1 && (_(), m.triggerPointerDownPosRef.current = {
            x: Math.round(T.pageX),
            y: Math.round(T.pageY)
          }, T.preventDefault());
        }),
        onKeyDown: Ie(c.onKeyDown, (T) => {
          const x = E.current !== "";
          !(T.ctrlKey || T.altKey || T.metaKey) && T.key.length === 1 && S(T.key), !(x && T.key === " ") && Zy.includes(T.key) && (_(), T.preventDefault());
        })
      }
    ) });
  }
);
mp.displayName = pp;
var hp = "SelectValue", gp = h.forwardRef(
  (r, l) => {
    const { __scopeSelect: i, className: u, style: c, children: d, placeholder: m = "", ...p } = r, g = Nn(hp, i), { onValueNodeHasChildrenChange: y } = g, E = d !== void 0, S = Fe(l, g.onValueNodeChange);
    return nt(() => {
      y(E);
    }, [y, E]), /* @__PURE__ */ b.jsx(
      Ne.span,
      {
        ...p,
        ref: S,
        style: { pointerEvents: "none" },
        children: jp(g.value) ? /* @__PURE__ */ b.jsx(b.Fragment, { children: m }) : d
      }
    );
  }
);
gp.displayName = hp;
var rw = "SelectIcon", vp = h.forwardRef(
  (r, l) => {
    const { __scopeSelect: i, children: u, ...c } = r;
    return /* @__PURE__ */ b.jsx(Ne.span, { "aria-hidden": !0, ...c, ref: l, children: u || "▼" });
  }
);
vp.displayName = rw;
var ow = "SelectPortal", yp = (r) => /* @__PURE__ */ b.jsx(za, { asChild: !0, ...r });
yp.displayName = ow;
var Hn = "SelectContent", wp = h.forwardRef(
  (r, l) => {
    const i = Nn(Hn, r.__scopeSelect), [u, c] = h.useState();
    if (nt(() => {
      c(new DocumentFragment());
    }, []), !i.open) {
      const d = u;
      return d ? Qn.createPortal(
        /* @__PURE__ */ b.jsx(xp, { scope: r.__scopeSelect, children: /* @__PURE__ */ b.jsx(ol.Slot, { scope: r.__scopeSelect, children: /* @__PURE__ */ b.jsx("div", { children: r.children }) }) }),
        d
      ) : null;
    }
    return /* @__PURE__ */ b.jsx(Sp, { ...r, ref: l });
  }
);
wp.displayName = Hn;
var Gt = 10, [xp, Rn] = Ar(Hn), iw = "SelectContentImpl", Sp = h.forwardRef(
  (r, l) => {
    const {
      __scopeSelect: i,
      position: u = "item-aligned",
      onCloseAutoFocus: c,
      onEscapeKeyDown: d,
      onPointerDownOutside: m,
      //
      // PopperContent props
      side: p,
      sideOffset: g,
      align: y,
      alignOffset: E,
      arrowPadding: S,
      collisionBoundary: R,
      collisionPadding: _,
      sticky: T,
      hideWhenDetached: x,
      avoidCollisions: P,
      //
      ...A
    } = r, M = Nn(Hn, i), [j, z] = h.useState(null), [$, J] = h.useState(null), H = Fe(l, (Q) => z(Q)), [ne, pe] = h.useState(null), [fe, Se] = h.useState(
      null
    ), q = il(i), [he, ae] = h.useState(!1), le = h.useRef(!1);
    h.useEffect(() => {
      if (j) return op(j);
    }, [j]), Mf();
    const ce = h.useCallback(
      (Q) => {
        const [re, ...ve] = q().map((Ae) => Ae.ref.current), [we] = ve.slice(-1), Ee = document.activeElement;
        for (const Ae of Q)
          if (Ae === Ee || (Ae?.scrollIntoView({ block: "nearest" }), Ae === re && $ && ($.scrollTop = 0), Ae === we && $ && ($.scrollTop = $.scrollHeight), Ae?.focus(), document.activeElement !== Ee)) return;
      },
      [q, $]
    ), G = h.useCallback(
      () => ce([ne, j]),
      [ce, ne, j]
    );
    h.useEffect(() => {
      he && G();
    }, [he, G]);
    const { onOpenChange: D, triggerPointerDownPosRef: U } = M;
    h.useEffect(() => {
      if (j) {
        let Q = { x: 0, y: 0 };
        const re = (we) => {
          Q = {
            x: Math.abs(Math.round(we.pageX) - (U.current?.x ?? 0)),
            y: Math.abs(Math.round(we.pageY) - (U.current?.y ?? 0))
          };
        }, ve = (we) => {
          Q.x <= 10 && Q.y <= 10 ? we.preventDefault() : j.contains(we.target) || D(!1), document.removeEventListener("pointermove", re), U.current = null;
        };
        return U.current !== null && (document.addEventListener("pointermove", re), document.addEventListener("pointerup", ve, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", re), document.removeEventListener("pointerup", ve, { capture: !0 });
        };
      }
    }, [j, D, U]), h.useEffect(() => {
      const Q = () => D(!1);
      return window.addEventListener("blur", Q), window.addEventListener("resize", Q), () => {
        window.removeEventListener("blur", Q), window.removeEventListener("resize", Q);
      };
    }, [D]);
    const [K, k] = zp((Q) => {
      const re = q().filter((Ee) => !Ee.disabled), ve = re.find((Ee) => Ee.ref.current === document.activeElement), we = Fp(re, Q, ve);
      we && setTimeout(() => we.ref.current.focus());
    }), I = h.useCallback(
      (Q, re, ve) => {
        const we = !le.current && !ve;
        (M.value !== void 0 && M.value === re || we) && (pe(Q), we && (le.current = !0));
      },
      [M.value]
    ), de = h.useCallback(() => j?.focus(), [j]), ue = h.useCallback(
      (Q, re, ve) => {
        const we = !le.current && !ve;
        (M.value !== void 0 && M.value === re || we) && Se(Q);
      },
      [M.value]
    ), ye = u === "popper" ? xa : Cp, ge = ye === xa ? {
      side: p,
      sideOffset: g,
      align: y,
      alignOffset: E,
      arrowPadding: S,
      collisionBoundary: R,
      collisionPadding: _,
      sticky: T,
      hideWhenDetached: x,
      avoidCollisions: P
    } : {};
    return /* @__PURE__ */ b.jsx(
      xp,
      {
        scope: i,
        content: j,
        viewport: $,
        onViewportChange: J,
        itemRefCallback: I,
        selectedItem: ne,
        onItemLeave: de,
        itemTextRefCallback: ue,
        focusSelectedItem: G,
        selectedItemText: fe,
        position: u,
        isPositioned: he,
        searchRef: K,
        children: /* @__PURE__ */ b.jsx(Fa, { as: Vn, allowPinchZoom: !0, children: /* @__PURE__ */ b.jsx(
          _a,
          {
            asChild: !0,
            trapped: M.open,
            onMountAutoFocus: (Q) => {
              Q.preventDefault();
            },
            onUnmountAutoFocus: Ie(c, (Q) => {
              M.trigger?.focus({ preventScroll: !0 }), Q.preventDefault();
            }),
            children: /* @__PURE__ */ b.jsx(
              Ra,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: d,
                onPointerDownOutside: m,
                onFocusOutside: (Q) => Q.preventDefault(),
                onDismiss: () => M.onOpenChange(!1),
                children: /* @__PURE__ */ b.jsx(
                  ye,
                  {
                    role: "listbox",
                    id: M.contentId,
                    "data-state": M.open ? "open" : "closed",
                    dir: M.dir,
                    onContextMenu: (Q) => Q.preventDefault(),
                    ...A,
                    ...ge,
                    onPlaced: () => ae(!0),
                    ref: H,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...A.style
                    },
                    onKeyDown: Ie(A.onKeyDown, (Q) => {
                      const re = Q.ctrlKey || Q.altKey || Q.metaKey;
                      if (Q.key === "Tab" && Q.preventDefault(), !re && Q.key.length === 1 && k(Q.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(Q.key)) {
                        let we = q().filter((Ee) => !Ee.disabled).map((Ee) => Ee.ref.current);
                        if (["ArrowUp", "End"].includes(Q.key) && (we = we.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(Q.key)) {
                          const Ee = Q.target, Ae = we.indexOf(Ee);
                          we = we.slice(Ae + 1);
                        }
                        setTimeout(() => ce(we)), Q.preventDefault();
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
Sp.displayName = iw;
var lw = "SelectItemAlignedPosition", Cp = h.forwardRef((r, l) => {
  const { __scopeSelect: i, onPlaced: u, ...c } = r, d = Nn(Hn, i), m = Rn(Hn, i), [p, g] = h.useState(null), [y, E] = h.useState(null), S = Fe(l, (H) => E(H)), R = il(i), _ = h.useRef(!1), T = h.useRef(!0), { viewport: x, selectedItem: P, selectedItemText: A, focusSelectedItem: M } = m, j = h.useCallback(() => {
    if (d.trigger && d.valueNode && p && y && x && P && A) {
      const H = d.trigger.getBoundingClientRect(), ne = y.getBoundingClientRect(), pe = d.valueNode.getBoundingClientRect(), fe = A.getBoundingClientRect();
      if (d.dir !== "rtl") {
        const Ee = fe.left - ne.left, Ae = pe.left - Ee, Qe = H.left - Ae, St = H.width + Qe, Yn = Math.max(St, ne.width), Gn = window.innerWidth - Gt, _n = Yd(Ae, [Gt, Gn - Yn]);
        p.style.minWidth = St + "px", p.style.left = _n + "px";
      } else {
        const Ee = ne.right - fe.right, Ae = window.innerWidth - pe.right - Ee, Qe = window.innerWidth - H.right - Ae, St = H.width + Qe, Yn = Math.max(St, ne.width), Gn = window.innerWidth - Gt, _n = Yd(Ae, [Gt, Gn - Yn]);
        p.style.minWidth = St + "px", p.style.right = _n + "px";
      }
      const Se = R(), q = window.innerHeight - Gt * 2, he = x.scrollHeight, ae = window.getComputedStyle(y), le = parseInt(ae.borderTopWidth, 10), ce = parseInt(ae.paddingTop, 10), G = parseInt(ae.borderBottomWidth, 10), D = parseInt(ae.paddingBottom, 10), U = le + ce + he + D + G, K = Math.min(P.offsetHeight * 5, U), k = window.getComputedStyle(x), I = parseInt(k.paddingTop, 10), de = parseInt(k.paddingBottom, 10), ue = H.top + H.height / 2 - Gt, ye = q - ue, ge = P.offsetHeight / 2, Q = P.offsetTop + ge, re = le + ce + Q, ve = U - re;
      if (re <= ue) {
        const Ee = P === Se[Se.length - 1].ref.current;
        p.style.bottom = "0px";
        const Ae = y.clientHeight - x.offsetTop - x.offsetHeight, Qe = Math.max(
          ye,
          ge + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (Ee ? de : 0) + Ae + G
        ), St = re + Qe;
        p.style.height = St + "px";
      } else {
        const Ee = P === Se[0].ref.current;
        p.style.top = "0px";
        const Qe = Math.max(
          ue,
          le + x.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (Ee ? I : 0) + ge
        ) + ve;
        p.style.height = Qe + "px", x.scrollTop = re - ue + x.offsetTop;
      }
      p.style.margin = `${Gt}px 0`, p.style.minHeight = K + "px", p.style.maxHeight = q + "px", u?.(), requestAnimationFrame(() => _.current = !0);
    }
  }, [
    R,
    d.trigger,
    d.valueNode,
    p,
    y,
    x,
    P,
    A,
    d.dir,
    u
  ]);
  nt(() => j(), [j]);
  const [z, $] = h.useState();
  nt(() => {
    y && $(window.getComputedStyle(y).zIndex);
  }, [y]);
  const J = h.useCallback(
    (H) => {
      H && T.current === !0 && (j(), M?.(), T.current = !1);
    },
    [j, M]
  );
  return /* @__PURE__ */ b.jsx(
    aw,
    {
      scope: i,
      contentWrapper: p,
      shouldExpandOnScrollRef: _,
      onScrollButtonChange: J,
      children: /* @__PURE__ */ b.jsx(
        "div",
        {
          ref: g,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: z
          },
          children: /* @__PURE__ */ b.jsx(
            Ne.div,
            {
              ...c,
              ref: S,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...c.style
              }
            }
          )
        }
      )
    }
  );
});
Cp.displayName = lw;
var sw = "SelectPopperPosition", xa = h.forwardRef((r, l) => {
  const {
    __scopeSelect: i,
    align: u = "start",
    collisionPadding: c = Gt,
    ...d
  } = r, m = ll(i);
  return /* @__PURE__ */ b.jsx(
    ly,
    {
      ...m,
      ...d,
      ref: l,
      align: u,
      collisionPadding: c,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...d.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
xa.displayName = sw;
var [aw, Wa] = Ar(Hn, {}), Sa = "SelectViewport", kp = h.forwardRef(
  (r, l) => {
    const { __scopeSelect: i, nonce: u, ...c } = r, d = Rn(Sa, i), m = Wa(Sa, i), p = Fe(l, d.onViewportChange), g = h.useRef(0);
    return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
      /* @__PURE__ */ b.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: u
        }
      ),
      /* @__PURE__ */ b.jsx(ol.Slot, { scope: i, children: /* @__PURE__ */ b.jsx(
        Ne.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...c,
          ref: p,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            overflow: "auto",
            ...c.style
          },
          onScroll: Ie(c.onScroll, (y) => {
            const E = y.currentTarget, { contentWrapper: S, shouldExpandOnScrollRef: R } = m;
            if (R?.current && S) {
              const _ = Math.abs(g.current - E.scrollTop);
              if (_ > 0) {
                const T = window.innerHeight - Gt * 2, x = parseFloat(S.style.minHeight), P = parseFloat(S.style.height), A = Math.max(x, P);
                if (A < T) {
                  const M = A + _, j = Math.min(T, M), z = M - j;
                  S.style.height = j + "px", S.style.bottom === "0px" && (E.scrollTop = z > 0 ? z : 0, S.style.justifyContent = "flex-end");
                }
              }
            }
            g.current = E.scrollTop;
          })
        }
      ) })
    ] });
  }
);
kp.displayName = Sa;
var Ep = "SelectGroup", [uw, cw] = Ar(Ep), dw = h.forwardRef(
  (r, l) => {
    const { __scopeSelect: i, ...u } = r, c = br();
    return /* @__PURE__ */ b.jsx(uw, { scope: i, id: c, children: /* @__PURE__ */ b.jsx(Ne.div, { role: "group", "aria-labelledby": c, ...u, ref: l }) });
  }
);
dw.displayName = Ep;
var bp = "SelectLabel", Pp = h.forwardRef(
  (r, l) => {
    const { __scopeSelect: i, ...u } = r, c = cw(bp, i);
    return /* @__PURE__ */ b.jsx(Ne.div, { id: c.id, ...u, ref: l });
  }
);
Pp.displayName = bp;
var Ji = "SelectItem", [fw, Np] = Ar(Ji), Rp = h.forwardRef(
  (r, l) => {
    const {
      __scopeSelect: i,
      value: u,
      disabled: c = !1,
      textValue: d,
      ...m
    } = r, p = Nn(Ji, i), g = Rn(Ji, i), y = p.value === u, [E, S] = h.useState(d ?? ""), [R, _] = h.useState(!1), T = Fe(
      l,
      (A) => g.itemRefCallback?.(A, u, c)
    ), x = br(), P = () => {
      c || (p.onValueChange(u), p.onOpenChange(!1));
    };
    if (u === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ b.jsx(
      fw,
      {
        scope: i,
        value: u,
        disabled: c,
        textId: x,
        isSelected: y,
        onItemTextChange: h.useCallback((A) => {
          S((M) => M || (A?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ b.jsx(
          ol.ItemSlot,
          {
            scope: i,
            value: u,
            disabled: c,
            textValue: E,
            children: /* @__PURE__ */ b.jsx(
              Ne.div,
              {
                role: "option",
                "aria-labelledby": x,
                "data-highlighted": R ? "" : void 0,
                "aria-selected": y && R,
                "data-state": y ? "checked" : "unchecked",
                "aria-disabled": c || void 0,
                "data-disabled": c ? "" : void 0,
                tabIndex: c ? void 0 : -1,
                ...m,
                ref: T,
                onFocus: Ie(m.onFocus, () => _(!0)),
                onBlur: Ie(m.onBlur, () => _(!1)),
                onPointerUp: Ie(m.onPointerUp, P),
                onPointerMove: Ie(m.onPointerMove, (A) => {
                  c ? g.onItemLeave?.() : A.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Ie(m.onPointerLeave, (A) => {
                  A.currentTarget === document.activeElement && g.onItemLeave?.();
                }),
                onKeyDown: Ie(m.onKeyDown, (A) => {
                  g.searchRef?.current !== "" && A.key === " " || (Jy.includes(A.key) && P(), A.key === " " && A.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Rp.displayName = Ji;
var Co = "SelectItemText", _p = h.forwardRef(
  (r, l) => {
    const { __scopeSelect: i, className: u, style: c, ...d } = r, m = Nn(Co, i), p = Rn(Co, i), g = Np(Co, i), y = nw(Co, i), [E, S] = h.useState(null), R = Fe(
      l,
      (A) => S(A),
      g.onItemTextChange,
      (A) => p.itemTextRefCallback?.(A, g.value, g.disabled)
    ), _ = E?.textContent, T = h.useMemo(
      () => /* @__PURE__ */ b.jsx("option", { value: g.value, disabled: g.disabled, children: _ }, g.value),
      [g.disabled, g.value, _]
    ), { onNativeOptionAdd: x, onNativeOptionRemove: P } = y;
    return nt(() => (x(T), () => P(T)), [x, P, T]), /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
      /* @__PURE__ */ b.jsx(Ne.span, { id: g.textId, ...d, ref: R }),
      g.isSelected && m.valueNode && !m.valueNodeHasChildren ? Qn.createPortal(d.children, m.valueNode) : null
    ] });
  }
);
_p.displayName = Co;
var Tp = "SelectItemIndicator", Op = h.forwardRef(
  (r, l) => {
    const { __scopeSelect: i, ...u } = r;
    return Np(Tp, i).isSelected ? /* @__PURE__ */ b.jsx(Ne.span, { "aria-hidden": !0, ...u, ref: l }) : null;
  }
);
Op.displayName = Tp;
var Ca = "SelectScrollUpButton", Ap = h.forwardRef((r, l) => {
  const i = Rn(Ca, r.__scopeSelect), u = Wa(Ca, r.__scopeSelect), [c, d] = h.useState(!1), m = Fe(l, u.onScrollButtonChange);
  return nt(() => {
    if (i.viewport && i.isPositioned) {
      let p = function() {
        const y = g.scrollTop > 0;
        d(y);
      };
      const g = i.viewport;
      return p(), g.addEventListener("scroll", p), () => g.removeEventListener("scroll", p);
    }
  }, [i.viewport, i.isPositioned]), c ? /* @__PURE__ */ b.jsx(
    Mp,
    {
      ...r,
      ref: m,
      onAutoScroll: () => {
        const { viewport: p, selectedItem: g } = i;
        p && g && (p.scrollTop = p.scrollTop - g.offsetHeight);
      }
    }
  ) : null;
});
Ap.displayName = Ca;
var ka = "SelectScrollDownButton", Lp = h.forwardRef((r, l) => {
  const i = Rn(ka, r.__scopeSelect), u = Wa(ka, r.__scopeSelect), [c, d] = h.useState(!1), m = Fe(l, u.onScrollButtonChange);
  return nt(() => {
    if (i.viewport && i.isPositioned) {
      let p = function() {
        const y = g.scrollHeight - g.clientHeight, E = Math.ceil(g.scrollTop) < y;
        d(E);
      };
      const g = i.viewport;
      return p(), g.addEventListener("scroll", p), () => g.removeEventListener("scroll", p);
    }
  }, [i.viewport, i.isPositioned]), c ? /* @__PURE__ */ b.jsx(
    Mp,
    {
      ...r,
      ref: m,
      onAutoScroll: () => {
        const { viewport: p, selectedItem: g } = i;
        p && g && (p.scrollTop = p.scrollTop + g.offsetHeight);
      }
    }
  ) : null;
});
Lp.displayName = ka;
var Mp = h.forwardRef((r, l) => {
  const { __scopeSelect: i, onAutoScroll: u, ...c } = r, d = Rn("SelectScrollButton", i), m = h.useRef(null), p = il(i), g = h.useCallback(() => {
    m.current !== null && (window.clearInterval(m.current), m.current = null);
  }, []);
  return h.useEffect(() => () => g(), [g]), nt(() => {
    p().find((E) => E.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [p]), /* @__PURE__ */ b.jsx(
    Ne.div,
    {
      "aria-hidden": !0,
      ...c,
      ref: l,
      style: { flexShrink: 0, ...c.style },
      onPointerDown: Ie(c.onPointerDown, () => {
        m.current === null && (m.current = window.setInterval(u, 50));
      }),
      onPointerMove: Ie(c.onPointerMove, () => {
        d.onItemLeave?.(), m.current === null && (m.current = window.setInterval(u, 50));
      }),
      onPointerLeave: Ie(c.onPointerLeave, () => {
        g();
      })
    }
  );
}), pw = "SelectSeparator", Ip = h.forwardRef(
  (r, l) => {
    const { __scopeSelect: i, ...u } = r;
    return /* @__PURE__ */ b.jsx(Ne.div, { "aria-hidden": !0, ...u, ref: l });
  }
);
Ip.displayName = pw;
var Ea = "SelectArrow", mw = h.forwardRef(
  (r, l) => {
    const { __scopeSelect: i, ...u } = r, c = ll(i), d = Nn(Ea, i), m = Rn(Ea, i);
    return d.open && m.position === "popper" ? /* @__PURE__ */ b.jsx(sy, { ...c, ...u, ref: l }) : null;
  }
);
mw.displayName = Ea;
function jp(r) {
  return r === "" || r === void 0;
}
var Dp = h.forwardRef(
  (r, l) => {
    const { value: i, ...u } = r, c = h.useRef(null), d = Fe(l, c), m = cy(i);
    return h.useEffect(() => {
      const p = c.current, g = window.HTMLSelectElement.prototype, E = Object.getOwnPropertyDescriptor(
        g,
        "value"
      ).set;
      if (m !== i && E) {
        const S = new Event("change", { bubbles: !0 });
        E.call(p, i), p.dispatchEvent(S);
      }
    }, [m, i]), /* @__PURE__ */ b.jsx(np, { asChild: !0, children: /* @__PURE__ */ b.jsx("select", { ...u, ref: d, defaultValue: i }) });
  }
);
Dp.displayName = "BubbleSelect";
function zp(r) {
  const l = Xt(r), i = h.useRef(""), u = h.useRef(0), c = h.useCallback(
    (m) => {
      const p = i.current + m;
      l(p), function g(y) {
        i.current = y, window.clearTimeout(u.current), y !== "" && (u.current = window.setTimeout(() => g(""), 1e3));
      }(p);
    },
    [l]
  ), d = h.useCallback(() => {
    i.current = "", window.clearTimeout(u.current);
  }, []);
  return h.useEffect(() => () => window.clearTimeout(u.current), []), [i, c, d];
}
function Fp(r, l, i) {
  const c = l.length > 1 && Array.from(l).every((y) => y === l[0]) ? l[0] : l, d = i ? r.indexOf(i) : -1;
  let m = hw(r, Math.max(d, 0));
  c.length === 1 && (m = m.filter((y) => y !== i));
  const g = m.find(
    (y) => y.textValue.toLowerCase().startsWith(c.toLowerCase())
  );
  return g !== i ? g : void 0;
}
function hw(r, l) {
  return r.map((i, u) => r[(l + u) % r.length]);
}
var gw = fp, Wp = mp, vw = gp, yw = vp, ww = yp, Bp = wp, xw = kp, $p = Pp, Vp = Rp, Sw = _p, Cw = Op, Up = Ap, Hp = Lp, Kp = Ip;
const kw = gw, Ew = vw, Qp = h.forwardRef(({ className: r, children: l, ...i }, u) => /* @__PURE__ */ b.jsxs(
  Wp,
  {
    ref: u,
    className: Ve(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      r
    ),
    ...i,
    children: [
      l,
      /* @__PURE__ */ b.jsx(yw, { asChild: !0, children: /* @__PURE__ */ b.jsx(Sv, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Qp.displayName = Wp.displayName;
const Yp = h.forwardRef(({ className: r, ...l }, i) => /* @__PURE__ */ b.jsx(
  Up,
  {
    ref: i,
    className: Ve("flex cursor-default items-center justify-center py-1", r),
    ...l,
    children: /* @__PURE__ */ b.jsx(Nv, {})
  }
));
Yp.displayName = Up.displayName;
const Gp = h.forwardRef(({ className: r, ...l }, i) => /* @__PURE__ */ b.jsx(
  Hp,
  {
    ref: i,
    className: Ve("flex cursor-default items-center justify-center py-1", r),
    ...l,
    children: /* @__PURE__ */ b.jsx(bv, {})
  }
));
Gp.displayName = Hp.displayName;
const Xp = h.forwardRef(({ className: r, children: l, position: i = "popper", ...u }, c) => /* @__PURE__ */ b.jsx(ww, { children: /* @__PURE__ */ b.jsxs(
  Bp,
  {
    ref: c,
    className: Ve(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      i === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      r
    ),
    position: i,
    ...u,
    children: [
      /* @__PURE__ */ b.jsx(Yp, {}),
      /* @__PURE__ */ b.jsx(
        xw,
        {
          className: Ve("p-1", i === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
          children: l
        }
      ),
      /* @__PURE__ */ b.jsx(Gp, {})
    ]
  }
) }));
Xp.displayName = Bp.displayName;
const bw = h.forwardRef(({ className: r, ...l }, i) => /* @__PURE__ */ b.jsx(
  $p,
  {
    ref: i,
    className: Ve("px-2 py-1.5 text-sm font-semibold", r),
    ...l
  }
));
bw.displayName = $p.displayName;
const Zp = h.forwardRef(({ className: r, children: l, ...i }, u) => /* @__PURE__ */ b.jsxs(
  Vp,
  {
    ref: u,
    className: Ve(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      r
    ),
    ...i,
    children: [
      /* @__PURE__ */ b.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ b.jsx(Cw, { children: /* @__PURE__ */ b.jsx(kv, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ b.jsx(Sw, { children: l })
    ]
  }
));
Zp.displayName = Vp.displayName;
const Pw = h.forwardRef(({ className: r, ...l }, i) => /* @__PURE__ */ b.jsx(
  Kp,
  {
    ref: i,
    className: Ve("-mx-1 my-1 h-px bg-muted", r),
    ...l
  }
));
Pw.displayName = Kp.displayName;
function Nw(r, l) {
  return h.useReducer((i, u) => l[i][u] ?? i, r);
}
var sl = (r) => {
  const { present: l, children: i } = r, u = Rw(l), c = typeof i == "function" ? i({ present: u.isPresent }) : h.Children.only(i), d = Fe(u.ref, _w(c));
  return typeof i == "function" || u.isPresent ? h.cloneElement(c, { ref: d }) : null;
};
sl.displayName = "Presence";
function Rw(r) {
  const [l, i] = h.useState(), u = h.useRef({}), c = h.useRef(r), d = h.useRef("none"), m = r ? "mounted" : "unmounted", [p, g] = Nw(m, {
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
  return h.useEffect(() => {
    const y = Bi(u.current);
    d.current = p === "mounted" ? y : "none";
  }, [p]), nt(() => {
    const y = u.current, E = c.current;
    if (E !== r) {
      const R = d.current, _ = Bi(y);
      r ? g("MOUNT") : _ === "none" || y?.display === "none" ? g("UNMOUNT") : g(E && R !== _ ? "ANIMATION_OUT" : "UNMOUNT"), c.current = r;
    }
  }, [r, g]), nt(() => {
    if (l) {
      const y = (S) => {
        const _ = Bi(u.current).includes(S.animationName);
        S.target === l && _ && Qn.flushSync(() => g("ANIMATION_END"));
      }, E = (S) => {
        S.target === l && (d.current = Bi(u.current));
      };
      return l.addEventListener("animationstart", E), l.addEventListener("animationcancel", y), l.addEventListener("animationend", y), () => {
        l.removeEventListener("animationstart", E), l.removeEventListener("animationcancel", y), l.removeEventListener("animationend", y);
      };
    } else
      g("ANIMATION_END");
  }, [l, g]), {
    isPresent: ["mounted", "unmountSuspended"].includes(p),
    ref: h.useCallback((y) => {
      y && (u.current = getComputedStyle(y)), i(y);
    }, [])
  };
}
function Bi(r) {
  return r?.animationName || "none";
}
function _w(r) {
  let l = Object.getOwnPropertyDescriptor(r.props, "ref")?.get, i = l && "isReactWarning" in l && l.isReactWarning;
  return i ? r.ref : (l = Object.getOwnPropertyDescriptor(r, "ref")?.get, i = l && "isReactWarning" in l && l.isReactWarning, i ? r.props.ref : r.props.ref || r.ref);
}
var Ba = "Dialog", [Jp, r1] = el(Ba), [Tw, Ot] = Jp(Ba), qp = (r) => {
  const {
    __scopeDialog: l,
    children: i,
    open: u,
    defaultOpen: c,
    onOpenChange: d,
    modal: m = !0
  } = r, p = h.useRef(null), g = h.useRef(null), [y = !1, E] = ya({
    prop: u,
    defaultProp: c,
    onChange: d
  });
  return /* @__PURE__ */ b.jsx(
    Tw,
    {
      scope: l,
      triggerRef: p,
      contentRef: g,
      contentId: br(),
      titleId: br(),
      descriptionId: br(),
      open: y,
      onOpenChange: E,
      onOpenToggle: h.useCallback(() => E((S) => !S), [E]),
      modal: m,
      children: i
    }
  );
};
qp.displayName = Ba;
var em = "DialogTrigger", tm = h.forwardRef(
  (r, l) => {
    const { __scopeDialog: i, ...u } = r, c = Ot(em, i), d = Fe(l, c.triggerRef);
    return /* @__PURE__ */ b.jsx(
      Ne.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": c.open,
        "aria-controls": c.contentId,
        "data-state": Ha(c.open),
        ...u,
        ref: d,
        onClick: Ie(r.onClick, c.onOpenToggle)
      }
    );
  }
);
tm.displayName = em;
var $a = "DialogPortal", [Ow, nm] = Jp($a, {
  forceMount: void 0
}), rm = (r) => {
  const { __scopeDialog: l, forceMount: i, children: u, container: c } = r, d = Ot($a, l);
  return /* @__PURE__ */ b.jsx(Ow, { scope: l, forceMount: i, children: h.Children.map(u, (m) => /* @__PURE__ */ b.jsx(sl, { present: i || d.open, children: /* @__PURE__ */ b.jsx(za, { asChild: !0, container: c, children: m }) })) });
};
rm.displayName = $a;
var qi = "DialogOverlay", om = h.forwardRef(
  (r, l) => {
    const i = nm(qi, r.__scopeDialog), { forceMount: u = i.forceMount, ...c } = r, d = Ot(qi, r.__scopeDialog);
    return d.modal ? /* @__PURE__ */ b.jsx(sl, { present: u || d.open, children: /* @__PURE__ */ b.jsx(Aw, { ...c, ref: l }) }) : null;
  }
);
om.displayName = qi;
var Aw = h.forwardRef(
  (r, l) => {
    const { __scopeDialog: i, ...u } = r, c = Ot(qi, i);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ b.jsx(Fa, { as: Vn, allowPinchZoom: !0, shards: [c.contentRef], children: /* @__PURE__ */ b.jsx(
        Ne.div,
        {
          "data-state": Ha(c.open),
          ...u,
          ref: l,
          style: { pointerEvents: "auto", ...u.style }
        }
      ) })
    );
  }
), Kn = "DialogContent", im = h.forwardRef(
  (r, l) => {
    const i = nm(Kn, r.__scopeDialog), { forceMount: u = i.forceMount, ...c } = r, d = Ot(Kn, r.__scopeDialog);
    return /* @__PURE__ */ b.jsx(sl, { present: u || d.open, children: d.modal ? /* @__PURE__ */ b.jsx(Lw, { ...c, ref: l }) : /* @__PURE__ */ b.jsx(Mw, { ...c, ref: l }) });
  }
);
im.displayName = Kn;
var Lw = h.forwardRef(
  (r, l) => {
    const i = Ot(Kn, r.__scopeDialog), u = h.useRef(null), c = Fe(l, i.contentRef, u);
    return h.useEffect(() => {
      const d = u.current;
      if (d) return op(d);
    }, []), /* @__PURE__ */ b.jsx(
      lm,
      {
        ...r,
        ref: c,
        trapFocus: i.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Ie(r.onCloseAutoFocus, (d) => {
          d.preventDefault(), i.triggerRef.current?.focus();
        }),
        onPointerDownOutside: Ie(r.onPointerDownOutside, (d) => {
          const m = d.detail.originalEvent, p = m.button === 0 && m.ctrlKey === !0;
          (m.button === 2 || p) && d.preventDefault();
        }),
        onFocusOutside: Ie(
          r.onFocusOutside,
          (d) => d.preventDefault()
        )
      }
    );
  }
), Mw = h.forwardRef(
  (r, l) => {
    const i = Ot(Kn, r.__scopeDialog), u = h.useRef(!1), c = h.useRef(!1);
    return /* @__PURE__ */ b.jsx(
      lm,
      {
        ...r,
        ref: l,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (d) => {
          r.onCloseAutoFocus?.(d), d.defaultPrevented || (u.current || i.triggerRef.current?.focus(), d.preventDefault()), u.current = !1, c.current = !1;
        },
        onInteractOutside: (d) => {
          r.onInteractOutside?.(d), d.defaultPrevented || (u.current = !0, d.detail.originalEvent.type === "pointerdown" && (c.current = !0));
          const m = d.target;
          i.triggerRef.current?.contains(m) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && c.current && d.preventDefault();
        }
      }
    );
  }
), lm = h.forwardRef(
  (r, l) => {
    const { __scopeDialog: i, trapFocus: u, onOpenAutoFocus: c, onCloseAutoFocus: d, ...m } = r, p = Ot(Kn, i), g = h.useRef(null), y = Fe(l, g);
    return Mf(), /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
      /* @__PURE__ */ b.jsx(
        _a,
        {
          asChild: !0,
          loop: !0,
          trapped: u,
          onMountAutoFocus: c,
          onUnmountAutoFocus: d,
          children: /* @__PURE__ */ b.jsx(
            Ra,
            {
              role: "dialog",
              id: p.contentId,
              "aria-describedby": p.descriptionId,
              "aria-labelledby": p.titleId,
              "data-state": Ha(p.open),
              ...m,
              ref: y,
              onDismiss: () => p.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
        /* @__PURE__ */ b.jsx(Iw, { titleId: p.titleId }),
        /* @__PURE__ */ b.jsx(Dw, { contentRef: g, descriptionId: p.descriptionId })
      ] })
    ] });
  }
), Va = "DialogTitle", sm = h.forwardRef(
  (r, l) => {
    const { __scopeDialog: i, ...u } = r, c = Ot(Va, i);
    return /* @__PURE__ */ b.jsx(Ne.h2, { id: c.titleId, ...u, ref: l });
  }
);
sm.displayName = Va;
var am = "DialogDescription", Ua = h.forwardRef(
  (r, l) => {
    const { __scopeDialog: i, ...u } = r, c = Ot(am, i);
    return /* @__PURE__ */ b.jsx(Ne.p, { id: c.descriptionId, ...u, ref: l });
  }
);
Ua.displayName = am;
var um = "DialogClose", cm = h.forwardRef(
  (r, l) => {
    const { __scopeDialog: i, ...u } = r, c = Ot(um, i);
    return /* @__PURE__ */ b.jsx(
      Ne.button,
      {
        type: "button",
        ...u,
        ref: l,
        onClick: Ie(r.onClick, () => c.onOpenChange(!1))
      }
    );
  }
);
cm.displayName = um;
function Ha(r) {
  return r ? "open" : "closed";
}
var dm = "DialogTitleWarning", [o1, fm] = Tv(dm, {
  contentName: Kn,
  titleName: Va,
  docsSlug: "dialog"
}), Iw = ({ titleId: r }) => {
  const l = fm(dm), i = `\`${l.contentName}\` requires a \`${l.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${l.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${l.docsSlug}`;
  return h.useEffect(() => {
    r && (document.getElementById(r) || console.error(i));
  }, [i, r]), null;
}, jw = "DialogDescriptionWarning", Dw = ({ contentRef: r, descriptionId: l }) => {
  const u = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${fm(jw).contentName}}.`;
  return h.useEffect(() => {
    const c = r.current?.getAttribute("aria-describedby");
    l && c && (document.getElementById(l) || console.warn(u));
  }, [u, r, l]), null;
}, zw = qp, Fw = tm, Ww = rm, pm = om, mm = im, hm = sm, gm = Ua, Bw = cm;
const $w = zw, Vw = Fw, Uw = Ww, vm = h.forwardRef(({ className: r, ...l }, i) => /* @__PURE__ */ b.jsx(
  pm,
  {
    ref: i,
    className: Ve(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      r
    ),
    ...l
  }
));
vm.displayName = pm.displayName;
const ym = h.forwardRef(
  ({ className: r, children: l, ...i }, u) => /* @__PURE__ */ b.jsxs(Uw, { children: [
    /* @__PURE__ */ b.jsx(vm, {}),
    /* @__PURE__ */ b.jsxs(
      mm,
      {
        ref: u,
        className: Ve(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          r
        ),
        ...i,
        children: [
          l,
          /* @__PURE__ */ b.jsxs(Bw, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
            /* @__PURE__ */ b.jsx(_v, { className: "h-4 w-4" }),
            /* @__PURE__ */ b.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] })
);
ym.displayName = mm.displayName;
const wm = ({ className: r, ...l }) => /* @__PURE__ */ b.jsx(
  "div",
  {
    className: Ve(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      r
    ),
    ...l
  }
);
wm.displayName = "DialogHeader";
const xm = h.forwardRef(({ className: r, ...l }, i) => /* @__PURE__ */ b.jsx(
  hm,
  {
    ref: i,
    className: Ve(
      "text-lg font-semibold leading-none tracking-tight",
      r
    ),
    ...l
  }
));
xm.displayName = hm.displayName;
const Hw = h.forwardRef(({ className: r, ...l }, i) => /* @__PURE__ */ b.jsx(
  gm,
  {
    ref: i,
    className: Ve("text-sm text-muted-foreground", r),
    ...l
  }
));
Hw.displayName = gm.displayName;
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kw = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Sm = (...r) => r.filter((l, i, u) => !!l && u.indexOf(l) === i).join(" ");
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Qw = {
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
const Yw = h.forwardRef(
  ({
    color: r = "currentColor",
    size: l = 24,
    strokeWidth: i = 2,
    absoluteStrokeWidth: u,
    className: c = "",
    children: d,
    iconNode: m,
    ...p
  }, g) => h.createElement(
    "svg",
    {
      ref: g,
      ...Qw,
      width: l,
      height: l,
      stroke: r,
      strokeWidth: u ? Number(i) * 24 / Number(l) : i,
      className: Sm("lucide", c),
      ...p
    },
    [
      ...m.map(([y, E]) => h.createElement(y, E)),
      ...Array.isArray(d) ? d : [d]
    ]
  )
);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cm = (r, l) => {
  const i = h.forwardRef(
    ({ className: u, ...c }, d) => h.createElement(Yw, {
      ref: d,
      iconNode: l,
      className: Sm(`lucide-${Kw(r)}`, u),
      ...c
    })
  );
  return i.displayName = `${r}`, i;
};
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gw = Cm("Camera", [
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
const Xw = Cm("Star", [
  [
    "polygon",
    {
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6"
    }
  ]
]), Zw = Pa(
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
), km = h.forwardRef(({ className: r, variant: l, ...i }, u) => /* @__PURE__ */ b.jsx(
  "div",
  {
    ref: u,
    role: "alert",
    className: Ve(Zw({ variant: l }), r),
    ...i
  }
));
km.displayName = "Alert";
const Em = h.forwardRef(({ className: r, ...l }, i) => /* @__PURE__ */ b.jsx(
  "h5",
  {
    ref: i,
    className: Ve("mb-1 font-medium leading-none tracking-tight", r),
    ...l
  }
));
Em.displayName = "AlertTitle";
const bm = h.forwardRef(({ className: r, ...l }, i) => /* @__PURE__ */ b.jsx(
  "div",
  {
    ref: i,
    className: Ve("text-sm [&_p]:leading-relaxed", r),
    ...l
  }
));
bm.displayName = "AlertDescription";
const $i = '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}.fbt-widget{--background: 0 0% 100%;--foreground: 0 0% 3.9%;--card: 0 0% 100%;--card-foreground: 0 0% 3.9%;--popover: 0 0% 100%;--popover-foreground: 0 0% 3.9%;--primary: 0 0% 9%;--primary-foreground: 0 0% 98%;--secondary: 0 0% 96.1%;--secondary-foreground: 0 0% 9%;--muted: 0 0% 96.1%;--muted-foreground: 0 0% 45.1%;--accent: 0 0% 96.1%;--accent-foreground: 0 0% 9%;--destructive: 0 84.2% 60.2%;--destructive-foreground: 0 0% 98%;--border: 0 0% 89.8%;--input: 0 0% 89.8%;--ring: 0 0% 3.9%;--chart-1: 12 76% 61%;--chart-2: 173 58% 39%;--chart-3: 197 37% 24%;--chart-4: 43 74% 66%;--chart-5: 27 87% 67%;--radius: .5rem}.dark .fbt-widget{--background: 0 0% 3.9%;--foreground: 0 0% 98%;--card: 0 0% 3.9%;--card-foreground: 0 0% 98%;--popover: 0 0% 3.9%;--popover-foreground: 0 0% 98%;--primary: 0 0% 98%;--primary-foreground: 0 0% 9%;--secondary: 0 0% 14.9%;--secondary-foreground: 0 0% 98%;--muted: 0 0% 14.9%;--muted-foreground: 0 0% 63.9%;--accent: 0 0% 14.9%;--accent-foreground: 0 0% 98%;--destructive: 0 62.8% 30.6%;--destructive-foreground: 0 0% 98%;--border: 0 0% 14.9%;--input: 0 0% 14.9%;--ring: 0 0% 83.1%;--chart-1: 220 70% 50%;--chart-2: 160 60% 45%;--chart-3: 30 80% 55%;--chart-4: 280 65% 60%;--chart-5: 340 75% 55%}*{border-color:hsl(var(--border))}body{background-color:hsl(var(--background));color:hsl(var(--foreground))}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.-right-10{right:-2.5rem}.bottom-1\\/2{bottom:50%}.left-\\[50\\%\\]{left:50%}.right-2{right:.5rem}.right-4{right:1rem}.top-4{top:1rem}.top-\\[50\\%\\]{top:50%}.z-50{z-index:50}.-mx-1{margin-left:-.25rem;margin-right:-.25rem}.my-1{margin-top:.25rem;margin-bottom:.25rem}.mb-1{margin-bottom:.25rem}.mr-2{margin-right:.5rem}.mt-4{margin-top:1rem}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.h-10{height:2.5rem}.h-2{height:.5rem}.h-3\\.5{height:.875rem}.h-4{height:1rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-px{height:1px}.max-h-96{max-height:24rem}.min-h-\\[60px\\]{min-height:60px}.w-2{width:.5rem}.w-3\\.5{width:.875rem}.w-4{width:1rem}.w-6{width:1.5rem}.w-9{width:2.25rem}.w-full{width:100%}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.max-w-lg{max-width:32rem}.origin-bottom-left{transform-origin:bottom left}.translate-x-\\[-50\\%\\]{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-\\[-50\\%\\]{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-90deg\\]{--tw-rotate: -90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-4{gap:1rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.375rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.375rem * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.whitespace-nowrap{white-space:nowrap}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xl{border-radius:.75rem}.rounded-b-lg{border-bottom-right-radius:var(--radius);border-bottom-left-radius:var(--radius)}.border{border-width:1px}.border-destructive\\/50{border-color:hsl(var(--destructive) / .5)}.border-input{border-color:hsl(var(--input))}.border-violet-300{--tw-border-opacity: 1;border-color:rgb(196 181 253 / var(--tw-border-opacity))}.bg-background{background-color:hsl(var(--background))}.bg-black\\/80{background-color:#000c}.bg-blue-400{--tw-bg-opacity: 1;background-color:rgb(96 165 250 / var(--tw-bg-opacity))}.bg-card{background-color:hsl(var(--card))}.bg-destructive{background-color:hsl(var(--destructive))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-muted{background-color:hsl(var(--muted))}.bg-popover{background-color:hsl(var(--popover))}.bg-primary{background-color:hsl(var(--primary))}.bg-red-300{--tw-bg-opacity: 1;background-color:rgb(252 165 165 / var(--tw-bg-opacity))}.bg-secondary{background-color:hsl(var(--secondary))}.bg-teal-300{--tw-bg-opacity: 1;background-color:rgb(94 234 212 / var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-violet-500{--tw-bg-opacity: 1;background-color:rgb(139 92 246 / var(--tw-bg-opacity))}.bg-yellow-300{--tw-bg-opacity: 1;background-color:rgb(253 224 71 / var(--tw-bg-opacity))}.fill-yellow-400{fill:#facc15}.p-0{padding:0}.p-1{padding:.25rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-8{padding-left:2rem;padding-right:2rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.pl-2{padding-left:.5rem}.pr-8{padding-right:2rem}.pt-0{padding-top:0}.text-center{text-align:center}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.text-card-foreground{color:hsl(var(--card-foreground))}.text-destructive{color:hsl(var(--destructive))}.text-destructive-foreground{color:hsl(var(--destructive-foreground))}.text-foreground{color:hsl(var(--foreground))}.text-gray-300{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-muted-foreground{color:hsl(var(--muted-foreground))}.text-popover-foreground{color:hsl(var(--popover-foreground))}.text-primary{color:hsl(var(--primary))}.text-primary-foreground{color:hsl(var(--primary-foreground))}.text-secondary-foreground{color:hsl(var(--secondary-foreground))}.text-violet-700{--tw-text-opacity: 1;color:rgb(109 40 217 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.text-yellow-400{--tw-text-opacity: 1;color:rgb(250 204 21 / var(--tw-text-opacity))}.underline-offset-4{text-underline-offset:4px}.opacity-50{opacity:.5}.opacity-70{opacity:.7}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring-offset-background{--tw-ring-offset-color: hsl(var(--background))}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}@keyframes enter{0%{opacity:var(--tw-enter-opacity, 1);transform:translate3d(var(--tw-enter-translate-x, 0),var(--tw-enter-translate-y, 0),0) scale3d(var(--tw-enter-scale, 1),var(--tw-enter-scale, 1),var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity, 1);transform:translate3d(var(--tw-exit-translate-x, 0),var(--tw-exit-translate-y, 0),0) scale3d(var(--tw-exit-scale, 1),var(--tw-exit-scale, 1),var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))}}.duration-200{animation-duration:.2s}.placeholder\\:text-muted-foreground::-moz-placeholder{color:hsl(var(--muted-foreground))}.placeholder\\:text-muted-foreground::placeholder{color:hsl(var(--muted-foreground))}.hover\\:bg-accent:hover{background-color:hsl(var(--accent))}.hover\\:bg-destructive\\/90:hover{background-color:hsl(var(--destructive) / .9)}.hover\\:bg-primary\\/90:hover{background-color:hsl(var(--primary) / .9)}.hover\\:bg-secondary\\/80:hover{background-color:hsl(var(--secondary) / .8)}.hover\\:bg-violet-50:hover{--tw-bg-opacity: 1;background-color:rgb(245 243 255 / var(--tw-bg-opacity))}.hover\\:bg-violet-600:hover{--tw-bg-opacity: 1;background-color:rgb(124 58 237 / var(--tw-bg-opacity))}.hover\\:text-accent-foreground:hover{color:hsl(var(--accent-foreground))}.hover\\:text-violet-500:hover{--tw-text-opacity: 1;color:rgb(139 92 246 / var(--tw-text-opacity))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}.focus\\:bg-accent:focus{background-color:hsl(var(--accent))}.focus\\:text-accent-foreground:focus{color:hsl(var(--accent-foreground))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-1:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-ring:focus{--tw-ring-color: hsl(var(--ring))}.focus\\:ring-violet-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(139 92 246 / var(--tw-ring-opacity))}.focus\\:ring-offset-2:focus{--tw-ring-offset-width: 2px}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-1:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-ring:focus-visible{--tw-ring-color: hsl(var(--ring))}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.peer:disabled~.peer-disabled\\:cursor-not-allowed{cursor:not-allowed}.peer:disabled~.peer-disabled\\:opacity-70{opacity:.7}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y: .25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x: -.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x: .25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y: -.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=open\\]\\:bg-accent[data-state=open]{background-color:hsl(var(--accent))}.data-\\[state\\=open\\]\\:text-muted-foreground[data-state=open]{color:hsl(var(--muted-foreground))}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation-name:enter;animation-duration:.15s;--tw-enter-opacity: initial;--tw-enter-scale: initial;--tw-enter-rotate: initial;--tw-enter-translate-x: initial;--tw-enter-translate-y: initial}.data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation-name:exit;animation-duration:.15s;--tw-exit-opacity: initial;--tw-exit-scale: initial;--tw-exit-rotate: initial;--tw-exit-translate-x: initial;--tw-exit-translate-y: initial}.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--tw-exit-opacity: 0}.data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--tw-enter-opacity: 0}.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale: .95}.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale: .95}.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom]{--tw-enter-translate-y: -.5rem}.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left]{--tw-enter-translate-x: .5rem}.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right]{--tw-enter-translate-x: -.5rem}.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top]{--tw-enter-translate-y: .5rem}.data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state=closed]{--tw-exit-translate-x: -50%}.data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state=closed]{--tw-exit-translate-y: -48%}.data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state=open]{--tw-enter-translate-x: -50%}.data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state=open]{--tw-enter-translate-y: -48%}.dark\\:border-destructive:is(.dark *){border-color:hsl(var(--destructive))}@media (min-width: 640px){.sm\\:max-w-\\[425px\\]{max-width:425px}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}.sm\\:space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.sm\\:rounded-lg{border-radius:var(--radius)}.sm\\:text-left{text-align:left}}.\\[\\&\\>span\\]\\:line-clamp-1>span{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.\\[\\&\\>svg\\+div\\]\\:translate-y-\\[-3px\\]>svg+div{--tw-translate-y: -3px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\[\\&\\>svg\\]\\:absolute>svg{position:absolute}.\\[\\&\\>svg\\]\\:left-4>svg{left:1rem}.\\[\\&\\>svg\\]\\:top-4>svg{top:1rem}.\\[\\&\\>svg\\]\\:text-destructive>svg{color:hsl(var(--destructive))}.\\[\\&\\>svg\\]\\:text-foreground>svg{color:hsl(var(--foreground))}.\\[\\&\\>svg\\~\\*\\]\\:pl-7>svg~*{padding-left:1.75rem}.\\[\\&_p\\]\\:leading-relaxed p{line-height:1.625}', Jw = [
  { value: "feature", label: "Feature", color: "bg-yellow-300" },
  { value: "bug", label: "Bug", color: "bg-red-300" },
  { value: "question", label: "General Question", color: "bg-blue-400" },
  { value: "other", label: "Other", color: "bg-teal-300" }
];
function qw({ projectId: r }) {
  const [l, i] = h.useState(""), [u, c] = h.useState(0), [d, m] = h.useState(""), [p, g] = h.useState(!1), y = async (S) => {
    if (S.preventDefault(), !r) {
      console.error("Project ID is missing");
      return;
    }
    (await fetch("/api/submit-feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ projectId: r, feedbackType: l, rating: u, feedback: d })
    })).ok && g(!1);
  }, E = () => {
    console.log("Taking screenshot...");
  };
  return r === null || r == null ? /* @__PURE__ */ b.jsxs(km, { variant: "destructive", children: [
    /* @__PURE__ */ b.jsx("style", { children: $i }),
    /* @__PURE__ */ b.jsx(Em, { className: "fbt-widget items-center justify-center text-center", children: "Error" }),
    /* @__PURE__ */ b.jsx(bm, { className: "fbt-widget items-center justify-center text-center", children: "Unable to load the feedback widget. Project ID is missing." }),
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
  ] }) : /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx("style", { children: $i }),
    /* @__PURE__ */ b.jsxs($w, { open: p, onOpenChange: g, children: [
      /* @__PURE__ */ b.jsx("style", { children: $i }),
      /* @__PURE__ */ b.jsx(Vw, { asChild: !0, children: /* @__PURE__ */ b.jsx(Vi, { className: "fbt-widget fixed -right-10 bottom-1/2 origin-bottom-left rotate-[-90deg] bg-violet-500 px-4 py-2 text-white hover:bg-violet-600", children: "Feedback" }) }),
      /* @__PURE__ */ b.jsxs(ym, { className: "fbt-widget sm:max-w-[425px] p-0", children: [
        /* @__PURE__ */ b.jsx("style", { children: $i }),
        /* @__PURE__ */ b.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ b.jsxs(wm, { children: [
            /* @__PURE__ */ b.jsx(xm, { className: "text-violet-700 text-xl font-semibold", children: "Send us your feedback" }),
            /* @__PURE__ */ b.jsx(Ua, {})
          ] }),
          /* @__PURE__ */ b.jsxs("form", { onSubmit: y, className: "mt-4 space-y-4", children: [
            /* @__PURE__ */ b.jsxs("div", { children: [
              /* @__PURE__ */ b.jsx(Ui, { htmlFor: "feedbackType", className: "text-violet-700", children: "Feedback Type" }),
              /* @__PURE__ */ b.jsxs(
                kw,
                {
                  value: l,
                  onValueChange: (S) => i(S),
                  className: "fbt-widget",
                  children: [
                    /* @__PURE__ */ b.jsx(
                      Qp,
                      {
                        id: "feedbackType",
                        className: "w-full border-violet-300 focus:ring-violet-500",
                        children: /* @__PURE__ */ b.jsx(Ew, { placeholder: "Select feedback type" })
                      }
                    ),
                    /* @__PURE__ */ b.jsx(Xp, { className: "fbt-widget", children: Jw.map((S) => /* @__PURE__ */ b.jsx(Zp, { value: S.value, children: /* @__PURE__ */ b.jsxs("div", { className: "flex items-center", children: [
                      /* @__PURE__ */ b.jsx(
                        "span",
                        {
                          className: `w-2 h-2 rounded-full mr-2 ${S.color}`
                        }
                      ),
                      S.label
                    ] }) }, S.value)) })
                  ]
                }
              )
            ] }),
            l === "feature" && /* @__PURE__ */ b.jsxs("div", { children: [
              /* @__PURE__ */ b.jsx(Ui, { className: "text-violet-700", children: "Feature Rating" }),
              /* @__PURE__ */ b.jsx("div", { className: "flex items-center", children: [1, 2, 3, 4, 5].map((S) => /* @__PURE__ */ b.jsx(
                Xw,
                {
                  className: `h-6 w-6 cursor-pointer ${S <= u ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`,
                  onClick: () => c(S)
                },
                S
              )) })
            ] }),
            l === "bug" && /* @__PURE__ */ b.jsx("div", { children: /* @__PURE__ */ b.jsxs(
              Vi,
              {
                type: "button",
                variant: "outline",
                onClick: E,
                className: "flex items-center border-violet-300 text-violet-700 hover:bg-violet-50",
                children: [
                  /* @__PURE__ */ b.jsx(Gw, { className: "mr-2 h-4 w-4" }),
                  "Take Screenshot"
                ]
              }
            ) }),
            /* @__PURE__ */ b.jsxs("div", { children: [
              /* @__PURE__ */ b.jsx(Ui, { htmlFor: "feedback", className: "text-violet-700", children: "Your Feedback" }),
              /* @__PURE__ */ b.jsx(
                Of,
                {
                  id: "feedback",
                  value: d,
                  onChange: (S) => m(S.target.value),
                  placeholder: "Please provide your feedback here...",
                  className: "w-full border-violet-300 focus:ring-violet-500",
                  rows: 4
                }
              )
            ] }),
            /* @__PURE__ */ b.jsx(
              Vi,
              {
                type: "submit",
                className: "w-full bg-violet-500 text-white hover:bg-violet-600",
                children: "Submit Feedback"
              }
            )
          ] })
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
    ] })
  ] });
}
const e1 = (r) => r.replace(/-([a-z])/g, (l, i) => i.toUpperCase());
class t1 extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const l = this.getPropsFromAttributes();
    da.createRoot(this.shadowRoot).render(/* @__PURE__ */ b.jsx(qw, { ...l }));
  }
  getPropsFromAttributes() {
    const l = {};
    for (const { name: i, value: u } of this.attributes)
      l[e1(i)] = u;
    return l;
  }
}
customElements.define("feedback-thing", t1);
