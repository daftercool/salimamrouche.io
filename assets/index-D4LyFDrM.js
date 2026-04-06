function Wf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o);
          l && Object.defineProperty(e, o, l.get ? l : {
            enumerable: !0,
            get: () => r[o]
          })
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
    value: "Module"
  }))
}(function() {
  const t = document.createElement("link")
    .relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(
    o);
  new MutationObserver(o => {
      for (const l of o)
        if (l.type === "childList")
          for (const i of l.addedNodes) i.tagName === "LINK" && i.rel ===
            "modulepreload" && r(i)
    })
    .observe(document, {
      childList: !0,
      subtree: !0
    });

  function n(o) {
    const l = {};
    return o.integrity && (l.integrity = o.integrity), o.referrerPolicy && (l
        .referrerPolicy = o.referrerPolicy), o.crossOrigin ===
      "use-credentials" ? l.credentials = "include" : o.crossOrigin ===
      "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l
  }

  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l)
  }
})();

function mu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e,
    "default") ? e.default : e
}
var hu = {
    exports: {}
  },
  Do = {},
  vu = {
    exports: {}
  },
  A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sr = Symbol.for("react.element"),
  Hf = Symbol.for("react.portal"),
  Qf = Symbol.for("react.fragment"),
  Kf = Symbol.for("react.strict_mode"),
  Gf = Symbol.for("react.profiler"),
  Yf = Symbol.for("react.provider"),
  Xf = Symbol.for("react.context"),
  Zf = Symbol.for("react.forward_ref"),
  Jf = Symbol.for("react.suspense"),
  qf = Symbol.for("react.memo"),
  ep = Symbol.for("react.lazy"),
  bs = Symbol.iterator;

function tp(e) {
  return e === null || typeof e != "object" ? null : (e = bs && e[bs] || e[
    "@@iterator"], typeof e == "function" ? e : null)
}
var gu = {
    isMounted: function() {
      return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
  },
  yu = Object.assign,
  xu = {};

function Rn(e, t, n) {
  this.props = e, this.context = t, this.refs = xu, this.updater = n || gu
}
Rn.prototype.isReactComponent = {};
Rn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState")
};
Rn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function wu() {}
wu.prototype = Rn.prototype;

function Di(e, t, n) {
  this.props = e, this.context = t, this.refs = xu, this.updater = n || gu
}
var Fi = Di.prototype = new wu;
Fi.constructor = Di;
yu(Fi, Rn.prototype);
Fi.isPureReactComponent = !0;
var $s = Array.isArray,
  Su = Object.prototype.hasOwnProperty,
  Ui = {
    current: null
  },
  Eu = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };

function ku(e, t, n) {
  var r, o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t
        .key), t) Su.call(t, r) && !Eu.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a
  }
  if (e && e.defaultProps)
    for (r in s = e.defaultProps, s) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: Sr,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Ui.current
  }
}

function np(e, t) {
  return {
    $$typeof: Sr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  }
}

function bi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Sr
}

function rp(e) {
  var t = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n]
  })
}
var Vs = /\/+/g;

function ol(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? rp("" + e.key) :
    t.toString(36)
}

function Gr(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (l) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Sr:
        case Hf:
          i = !0
      }
  }
  if (i) return i = e, o = o(i), e = r === "" ? "." + ol(i, 0) : r, $s(o) ? (n =
    "", e != null && (n = e.replace(Vs, "$&/") + "/"), Gr(o, t, n, "",
      function(u) {
        return u
      })) : o != null && (bi(o) && (o = np(o, n + (!o.key || i && i.key ===
    o.key ? "" : ("" + o.key)
    .replace(Vs, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", $s(e))
    for (var s = 0; s < e.length; s++) {
      l = e[s];
      var a = r + ol(l, s);
      i += Gr(l, t, n, a, o)
    } else if (a = tp(e), typeof a == "function")
      for (e = a.call(e), s = 0; !(l = e.next())
        .done;) l = l.value, a = r + ol(l, s++), i += Gr(l, t, n, a, o);
    else if (l === "object") throw t = String(e), Error(
    "Objects are not valid as a React child (found: " + (t ===
      "[object Object]" ? "object with keys {" + Object.keys(e)
      .join(", ") + "}" : t) +
    "). If you meant to render a collection of children, use an array instead."
  );
  return i
}

function jr(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return Gr(e, r, "", "", function(l) {
    return t.call(n, l, o++)
  }), r
}

function op(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result =
        n)
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result =
        n)
    }), e._status === -1 && (e._status = 0, e._result = t)
  }
  if (e._status === 1) return e._result.default;
  throw e._result
}
var he = {
    current: null
  },
  Yr = {
    transition: null
  },
  lp = {
    ReactCurrentDispatcher: he,
    ReactCurrentBatchConfig: Yr,
    ReactCurrentOwner: Ui
  };

function Cu() {
  throw Error("act(...) is not supported in production builds of React.")
}
A.Children = {
  map: jr,
  forEach: function(e, t, n) {
    jr(e, function() {
      t.apply(this, arguments)
    }, n)
  },
  count: function(e) {
    var t = 0;
    return jr(e, function() {
      t++
    }), t
  },
  toArray: function(e) {
    return jr(e, function(t) {
      return t
    }) || []
  },
  only: function(e) {
    if (!bi(e)) throw Error(
      "React.Children.only expected to receive a single React element child."
    );
    return e
  }
};
A.Component = Rn;
A.Fragment = Qf;
A.Profiler = Gf;
A.PureComponent = Di;
A.StrictMode = Kf;
A.Suspense = Jf;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lp;
A.act = Cu;
A.cloneElement = function(e, t, n) {
  if (e == null) throw Error(
    "React.cloneElement(...): The argument must be a React element, but you passed " +
    e + ".");
  var r = yu({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (l = t.ref, i = Ui.current), t.key !== void 0 && (
        o = "" + t.key), e.type && e.type.defaultProps) var s = e.type
      .defaultProps;
    for (a in t) Su.call(t, a) && !Eu.hasOwnProperty(a) && (r[a] = t[a] ===
      void 0 && s !== void 0 ? s[a] : t[a])
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s
  }
  return {
    $$typeof: Sr,
    type: e.type,
    key: o,
    ref: l,
    props: r,
    _owner: i
  }
};
A.createContext = function(e) {
  return e = {
    $$typeof: Xf,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  }, e.Provider = {
    $$typeof: Yf,
    _context: e
  }, e.Consumer = e
};
A.createElement = ku;
A.createFactory = function(e) {
  var t = ku.bind(null, e);
  return t.type = e, t
};
A.createRef = function() {
  return {
    current: null
  }
};
A.forwardRef = function(e) {
  return {
    $$typeof: Zf,
    render: e
  }
};
A.isValidElement = bi;
A.lazy = function(e) {
  return {
    $$typeof: ep,
    _payload: {
      _status: -1,
      _result: e
    },
    _init: op
  }
};
A.memo = function(e, t) {
  return {
    $$typeof: qf,
    type: e,
    compare: t === void 0 ? null : t
  }
};
A.startTransition = function(e) {
  var t = Yr.transition;
  Yr.transition = {};
  try {
    e()
  } finally {
    Yr.transition = t
  }
};
A.unstable_act = Cu;
A.useCallback = function(e, t) {
  return he.current.useCallback(e, t)
};
A.useContext = function(e) {
  return he.current.useContext(e)
};
A.useDebugValue = function() {};
A.useDeferredValue = function(e) {
  return he.current.useDeferredValue(e)
};
A.useEffect = function(e, t) {
  return he.current.useEffect(e, t)
};
A.useId = function() {
  return he.current.useId()
};
A.useImperativeHandle = function(e, t, n) {
  return he.current.useImperativeHandle(e, t, n)
};
A.useInsertionEffect = function(e, t) {
  return he.current.useInsertionEffect(e, t)
};
A.useLayoutEffect = function(e, t) {
  return he.current.useLayoutEffect(e, t)
};
A.useMemo = function(e, t) {
  return he.current.useMemo(e, t)
};
A.useReducer = function(e, t, n) {
  return he.current.useReducer(e, t, n)
};
A.useRef = function(e) {
  return he.current.useRef(e)
};
A.useState = function(e) {
  return he.current.useState(e)
};
A.useSyncExternalStore = function(e, t, n) {
  return he.current.useSyncExternalStore(e, t, n)
};
A.useTransition = function() {
  return he.current.useTransition()
};
A.version = "18.3.1";
vu.exports = A;
var g = vu.exports;
const ht = mu(g),
  Nu = Wf({
    __proto__: null,
    default: ht
  }, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ip = g,
  sp = Symbol.for("react.element"),
  ap = Symbol.for("react.fragment"),
  up = Object.prototype.hasOwnProperty,
  cp = ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  dp = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };

function Pu(e, t, n) {
  var r, o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !==
    void 0 && (i = t.ref);
  for (r in t) up.call(t, r) && !dp.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: sp,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: cp.current
  }
}
Do.Fragment = ap;
Do.jsx = Pu;
Do.jsxs = Pu;
hu.exports = Do;
var h = hu.exports,
  Tu = {
    exports: {}
  },
  Re = {},
  _u = {
    exports: {}
  },
  ju = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(T, R) {
    var M = T.length;
    T.push(R);
    e: for (; 0 < M;) {
      var F = M - 1 >>> 1,
        X = T[F];
      if (0 < o(X, R)) T[F] = R, T[M] = X, M = F;
      else break e
    }
  }

  function n(T) {
    return T.length === 0 ? null : T[0]
  }

  function r(T) {
    if (T.length === 0) return null;
    var R = T[0],
      M = T.pop();
    if (M !== R) {
      T[0] = M;
      e: for (var F = 0, X = T.length, et = X >>> 1; F < et;) {
        var Ge = 2 * (F + 1) - 1,
          rl = T[Ge],
          Ft = Ge + 1,
          _r = T[Ft];
        if (0 > o(rl, M)) Ft < X && 0 > o(_r, rl) ? (T[F] = _r, T[Ft] = M,
          F = Ft) : (T[F] = rl, T[Ge] = M, F = Ge);
        else if (Ft < X && 0 > o(_r, M)) T[F] = _r, T[Ft] = M, F = Ft;
        else break e
      }
    }
    return R
  }

  function o(T, R) {
    var M = T.sortIndex - R.sortIndex;
    return M !== 0 ? M : T.id - R.id
  }
  if (typeof performance == "object" && typeof performance.now ==
    "function") {
    var l = performance;
    e.unstable_now = function() {
      return l.now()
    }
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function() {
      return i.now() - s
    }
  }
  var a = [],
    u = [],
    f = 1,
    p = null,
    v = 3,
    S = !1,
    E = !1,
    y = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator
    .scheduling.isInputPending !== void 0 && navigator.scheduling
    .isInputPending.bind(navigator.scheduling);

  function m(T) {
    for (var R = n(u); R !== null;) {
      if (R.callback === null) r(u);
      else if (R.startTime <= T) r(u), R.sortIndex = R.expirationTime, t(a,
        R);
      else break;
      R = n(u)
    }
  }

  function w(T) {
    if (y = !1, m(T), !E)
      if (n(a) !== null) E = !0, le(C);
      else {
        var R = n(u);
        R !== null && Oe(w, R.startTime - T)
      }
  }

  function C(T, R) {
    E = !1, y && (y = !1, d(_), _ = -1), S = !0;
    var M = v;
    try {
      for (m(R), p = n(a); p !== null && (!(p.expirationTime > R) || T && !
          Y());) {
        var F = p.callback;
        if (typeof F == "function") {
          p.callback = null, v = p.priorityLevel;
          var X = F(p.expirationTime <= R);
          R = e.unstable_now(), typeof X == "function" ? p.callback = X :
            p === n(a) && r(a), m(R)
        } else r(a);
        p = n(a)
      }
      if (p !== null) var et = !0;
      else {
        var Ge = n(u);
        Ge !== null && Oe(w, Ge.startTime - R), et = !1
      }
      return et
    } finally {
      p = null, v = M, S = !1
    }
  }
  var P = !1,
    N = null,
    _ = -1,
    D = 5,
    L = -1;

  function Y() {
    return !(e.unstable_now() - L < D)
  }

  function z() {
    if (N !== null) {
      var T = e.unstable_now();
      L = T;
      var R = !0;
      try {
        R = N(!0, T)
      } finally {
        R ? Ce() : (P = !1, N = null)
      }
    } else P = !1
  }
  var Ce;
  if (typeof c == "function") Ce = function() {
    c(z)
  };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel,
      oe = I.port2;
    I.port1.onmessage = z, Ce = function() {
      oe.postMessage(null)
    }
  } else Ce = function() {
    x(z, 0)
  };

  function le(T) {
    N = T, P || (P = !0, Ce())
  }

  function Oe(T, R) {
    _ = x(function() {
      T(e.unstable_now())
    }, R)
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e
    .unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e
    .unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e
    .unstable_cancelCallback = function(T) {
      T.callback = null
    }, e.unstable_continueExecution = function() {
      E || S || (E = !0, le(C))
    }, e.unstable_forceFrameRate = function(T) {
      0 > T || 125 < T ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : D = 0 < T ? Math.floor(1e3 / T) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
      return v
    }, e.unstable_getFirstCallbackNode = function() {
      return n(a)
    }, e.unstable_next = function(T) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = v
      }
      var M = v;
      v = R;
      try {
        return T()
      } finally {
        v = M
      }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint =
    function() {}, e.unstable_runWithPriority = function(T, R) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3
      }
      var M = v;
      v = T;
      try {
        return R()
      } finally {
        v = M
      }
    }, e.unstable_scheduleCallback = function(T, R, M) {
      var F = e.unstable_now();
      switch (typeof M == "object" && M !== null ? (M = M.delay, M =
          typeof M == "number" && 0 < M ? F + M : F) : M = F, T) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3
      }
      return X = M + X, T = {
        id: f++,
        callback: R,
        priorityLevel: T,
        startTime: M,
        expirationTime: X,
        sortIndex: -1
      }, M > F ? (T.sortIndex = M, t(u, T), n(a) === null && T === n(u) && (
        y ? (d(_), _ = -1) : y = !0, Oe(w, M - F))) : (T.sortIndex = X, t(a,
        T), E || S || (E = !0, le(C))), T
    }, e.unstable_shouldYield = Y, e.unstable_wrapCallback = function(T) {
      var R = v;
      return function() {
        var M = v;
        v = R;
        try {
          return T.apply(this, arguments)
        } finally {
          v = M
        }
      }
    }
})(ju);
_u.exports = ju;
var fp = _u.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pp = g,
  je = fp;

function k(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n =
      1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(
    arguments[n]);
  return "Minified React error #" + e + "; visit " + t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Ru = new Set,
  or = {};

function Jt(e, t) {
  En(e, t), En(e + "Capture", t)
}

function En(e, t) {
  for (or[e] = t, e = 0; e < t.length; e++) Ru.add(t[e])
}
var st = !(typeof window > "u" || typeof window.document > "u" || typeof window
    .document.createElement > "u"),
  zl = Object.prototype.hasOwnProperty,
  mp =
  /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Bs = {},
  Ws = {};

function hp(e) {
  return zl.call(Ws, e) ? !0 : zl.call(Bs, e) ? !1 : mp.test(e) ? Ws[e] = !0 : (
    Bs[e] = !0, !1)
}

function vp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase()
        .slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1
  }
}

function gp(e, t, n, r) {
  if (t === null || typeof t > "u" || vp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t
  }
  return !1
}

function ve(e, t, n, r, o, l, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r,
    this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName =
    e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
.split(" ")
  .forEach(function(e) {
    ae[e] = new ve(e, 0, !1, e, null, !1, !1)
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"]
].forEach(function(e) {
  var t = e[0];
  ae[t] = new ve(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ae[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"]
.forEach(function(e) {
  ae[e] = new ve(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
.split(" ")
  .forEach(function(e) {
    ae[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1, !1)
  });
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ae[e] = new ve(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
  ae[e] = new ve(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ae[e] = new ve(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
  ae[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var $i = /[\-:]([a-z])/g;

function Vi(e) {
  return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
.split(" ")
  .forEach(function(e) {
    var t = e.replace($i, Vi);
    ae[t] = new ve(t, 1, !1, e, null, !1, !1)
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split
  (" ")
  .forEach(function(e) {
    var t = e.replace($i, Vi);
    ae[t] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
  });
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace($i, Vi);
  ae[t] = new ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !
    1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ae[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
ae.xlinkHref = new ve("xlinkHref", 1, !1, "xlink:href",
  "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ae[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Bi(e, t, n, r) {
  var o = ae.hasOwnProperty(t) ? ae[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !==
    "O" || t[1] !== "n" && t[1] !== "N") && (gp(t, n, o, r) && (n = null), r ||
    o === null ? hp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t,
      "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type ===
    3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n ===
      null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n ===
        !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))
  )
}
var dt = pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Rr = Symbol.for("react.element"),
  tn = Symbol.for("react.portal"),
  nn = Symbol.for("react.fragment"),
  Wi = Symbol.for("react.strict_mode"),
  Al = Symbol.for("react.profiler"),
  Lu = Symbol.for("react.provider"),
  Iu = Symbol.for("react.context"),
  Hi = Symbol.for("react.forward_ref"),
  Dl = Symbol.for("react.suspense"),
  Fl = Symbol.for("react.suspense_list"),
  Qi = Symbol.for("react.memo"),
  vt = Symbol.for("react.lazy"),
  Mu = Symbol.for("react.offscreen"),
  Hs = Symbol.iterator;

function On(e) {
  return e === null || typeof e != "object" ? null : (e = Hs && e[Hs] || e[
    "@@iterator"], typeof e == "function" ? e : null)
}
var G = Object.assign,
  ll;

function Wn(e) {
  if (ll === void 0) try {
    throw Error()
  } catch (n) {
    var t = n.stack.trim()
      .match(/\n( *(at )?)/);
    ll = t && t[1] || ""
  }
  return `
` + ll + e
}
var il = !1;

function sl(e, t) {
  if (!e || il) return "";
  il = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
          throw Error()
        }, Object.defineProperty(t.prototype, "props", {
          set: function() {
            throw Error()
          }
        }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split(`
`), l = r.stack.split(`
`), i = o.length - 1, s = l.length - 1; 1 <= i && 0 <= s && o[i] !== l[s];)
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (o[i] !== l[s]) {
          if (i !== 1 || s !== 1)
            do
              if (i--, s--, 0 > s || o[i] !== l[s]) {
                var a = `
` + o[i].replace(" at new ", " at ");
                return e.displayName && a.includes("<anonymous>") && (a = a
                  .replace("<anonymous>", e.displayName)), a
              } while (1 <= i && 0 <= s);
          break
        }
    }
  } finally {
    il = !1, Error.prepareStackTrace = n
  }
  return (e = e ? e.displayName || e.name : "") ? Wn(e) : ""
}

function yp(e) {
  switch (e.tag) {
    case 5:
      return Wn(e.type);
    case 16:
      return Wn("Lazy");
    case 13:
      return Wn("Suspense");
    case 19:
      return Wn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = sl(e.type, !1), e;
    case 11:
      return e = sl(e.type.render, !1), e;
    case 1:
      return e = sl(e.type, !0), e;
    default:
      return ""
  }
}

function Ul(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case nn:
      return "Fragment";
    case tn:
      return "Portal";
    case Al:
      return "Profiler";
    case Wi:
      return "StrictMode";
    case Dl:
      return "Suspense";
    case Fl:
      return "SuspenseList"
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Iu:
      return (e.displayName || "Context") + ".Consumer";
    case Lu:
      return (e._context.displayName || "Context") + ".Provider";
    case Hi:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e =
        e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Qi:
      return t = e.displayName || null, t !== null ? t : Ul(e.type) || "Memo";
    case vt:
      t = e._payload, e = e._init;
      try {
        return Ul(e(t))
      } catch {}
  }
  return null
}

function xp(e) {
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
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (
        e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
      return Ul(t);
    case 8:
      return t === Wi ? "StrictMode" : "Mode";
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
      if (typeof t == "string") return t
  }
  return null
}

function Lt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return ""
  }
}

function Ou(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" ||
    t === "radio")
}

function wp(e) {
  var t = Ou(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" &&
    typeof n.set == "function") {
    var o = n.get,
      l = n.set;
    return Object.defineProperty(e, t, {
      configurable: !0,
      get: function() {
        return o.call(this)
      },
      set: function(i) {
        r = "" + i, l.call(this, i)
      }
    }), Object.defineProperty(e, t, {
      enumerable: n.enumerable
    }), {
      getValue: function() {
        return r
      },
      setValue: function(i) {
        r = "" + i
      },
      stopTracking: function() {
        e._valueTracker = null, delete e[t]
      }
    }
  }
}

function Lr(e) {
  e._valueTracker || (e._valueTracker = wp(e))
}

function zu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return e && (r = Ou(e) ? e.checked ? "true" : "false" : e.value), e = r, e !==
    n ? (t.setValue(e), !0) : !1
}

function uo(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}

function bl(e, t) {
  var n = t.checked;
  return G({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  })
}

function Qs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  n = Lt(t.value != null ? t.value : n), e._wrapperState = {
    initialChecked: r,
    initialValue: n,
    controlled: t.type === "checkbox" || t.type === "radio" ? t.checked !=
      null : t.value != null
  }
}

function Au(e, t) {
  t = t.checked, t != null && Bi(e, "checked", t, !1)
}

function $l(e, t) {
  Au(e, t);
  var n = Lt(t.value),
    r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) &&
    (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return
  }
  t.hasOwnProperty("value") ? Vl(e, t.type, n) : t.hasOwnProperty(
      "defaultValue") && Vl(e, t.type, Lt(t.defaultValue)), t.checked == null &&
    t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Ks(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !==
        null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t),
      e.defaultValue = t
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState
    .initialChecked, n !== "" && (e.name = n)
}

function Vl(e, t, n) {
  (t !== "number" || uo(e.ownerDocument) !== e) && (n == null ? e.defaultValue =
    "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e
      .defaultValue = "" + n))
}
var Hn = Array.isArray;

function mn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n]
      .selected !== o && (e[n].selected = o), o && r && (e[n]
        .defaultSelected = !0)
  } else {
    for (n = "" + Lt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}

function Bl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return G({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue
  })
}

function Gs(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(k(92));
      if (Hn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0]
      }
      t = n
    }
    t == null && (t = ""), n = t
  }
  e._wrapperState = {
    initialValue: Lt(n)
  }
}

function Du(e, t) {
  var n = Lt(t.value),
    r = Lt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue ==
    null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e
    .defaultValue = "" + r)
}

function Ys(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Fu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml"
  }
}

function Wl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Fu(t) : e ===
    "http://www.w3.org/2000/svg" && t === "foreignObject" ?
    "http://www.w3.org/1999/xhtml" : e
}
var Ir, Uu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n,
    r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o)
    })
  } : e
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e
    .innerHTML = t;
  else {
    for (Ir = Ir || document.createElement("div"), Ir.innerHTML = "<svg>" +
      t.valueOf()
      .toString() + "</svg>", t = Ir.firstChild; e.firstChild;) e
      .removeChild(e.firstChild);
    for (; t.firstChild;) e.appendChild(t.firstChild)
  }
});

function lr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return
    }
  }
  e.textContent = t
}
var Gn = {
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
  },
  Sp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Gn)
  .forEach(function(e) {
    Sp.forEach(function(t) {
      t = t + e.charAt(0)
        .toUpperCase() + e.substring(1), Gn[t] = Gn[e]
    })
  });

function bu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t !=
    "number" || t === 0 || Gn.hasOwnProperty(e) && Gn[e] ? ("" + t)
    .trim() : t + "px"
}

function $u(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = bu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
    }
}
var Ep = G({
  menuitem: !0
}, {
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
  wbr: !0
});

function Hl(e, t) {
  if (t) {
    if (Ep[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t
          .dangerouslySetInnerHTML)) throw Error(k(61))
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62))
  }
}

function Ql(e, t) {
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
      return !0
  }
}
var Kl = null;

function Ki(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (
    e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Gl = null,
  hn = null,
  vn = null;

function Xs(e) {
  if (e = Cr(e)) {
    if (typeof Gl != "function") throw Error(k(280));
    var t = e.stateNode;
    t && (t = Vo(t), Gl(e.stateNode, e.type, t))
  }
}

function Vu(e) {
  hn ? vn ? vn.push(e) : vn = [e] : hn = e
}

function Bu() {
  if (hn) {
    var e = hn,
      t = vn;
    if (vn = hn = null, Xs(e), t)
      for (e = 0; e < t.length; e++) Xs(t[e])
  }
}

function Wu(e, t) {
  return e(t)
}

function Hu() {}
var al = !1;

function Qu(e, t, n) {
  if (al) return e(t, n);
  al = !0;
  try {
    return Wu(e, t, n)
  } finally {
    al = !1, (hn !== null || vn !== null) && (Hu(), Bu())
  }
}

function ir(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Vo(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e ===
        "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n
}
var Yl = !1;
if (st) try {
  var zn = {};
  Object.defineProperty(zn, "passive", {
    get: function() {
      Yl = !0
    }
  }), window.addEventListener("test", zn, zn), window.removeEventListener(
    "test", zn, zn)
} catch {
  Yl = !1
}

function kp(e, t, n, r, o, l, i, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u)
  } catch (f) {
    this.onError(f)
  }
}
var Yn = !1,
  co = null,
  fo = !1,
  Xl = null,
  Cp = {
    onError: function(e) {
      Yn = !0, co = e
    }
  };

function Np(e, t, n, r, o, l, i, s, a) {
  Yn = !1, co = null, kp.apply(Cp, arguments)
}

function Pp(e, t, n, r, o, l, i, s, a) {
  if (Np.apply(this, arguments), Yn) {
    if (Yn) {
      var u = co;
      Yn = !1, co = null
    } else throw Error(k(198));
    fo || (fo = !0, Xl = u)
  }
}

function qt(e) {
  var t = e,
    n = e;
  if (e.alternate)
    for (; t.return;) t = t.return;
  else {
    e = t;
    do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
  }
  return t.tag === 3 ? n : null
}

function Ku(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)),
      t !== null) return t.dehydrated
  }
  return null
}

function Zs(e) {
  if (qt(e) !== e) throw Error(k(188))
}

function Tp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = qt(e), t === null) throw Error(k(188));
    return t !== e ? null : e
  }
  for (var n = e, r = t;;) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue
      }
      break
    }
    if (o.child === l.child) {
      for (l = o.child; l;) {
        if (l === n) return Zs(o), e;
        if (l === r) return Zs(o), t;
        l = l.sibling
      }
      throw Error(k(188))
    }
    if (n.return !== r.return) n = o, r = l;
    else {
      for (var i = !1, s = o.child; s;) {
        if (s === n) {
          i = !0, n = o, r = l;
          break
        }
        if (s === r) {
          i = !0, r = o, n = l;
          break
        }
        s = s.sibling
      }
      if (!i) {
        for (s = l.child; s;) {
          if (s === n) {
            i = !0, n = l, r = o;
            break
          }
          if (s === r) {
            i = !0, r = l, n = o;
            break
          }
          s = s.sibling
        }
        if (!i) throw Error(k(189))
      }
    }
    if (n.alternate !== r) throw Error(k(190))
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t
}

function Gu(e) {
  return e = Tp(e), e !== null ? Yu(e) : null
}

function Yu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null;) {
    var t = Yu(e);
    if (t !== null) return t;
    e = e.sibling
  }
  return null
}
var Xu = je.unstable_scheduleCallback,
  Js = je.unstable_cancelCallback,
  _p = je.unstable_shouldYield,
  jp = je.unstable_requestPaint,
  J = je.unstable_now,
  Rp = je.unstable_getCurrentPriorityLevel,
  Gi = je.unstable_ImmediatePriority,
  Zu = je.unstable_UserBlockingPriority,
  po = je.unstable_NormalPriority,
  Lp = je.unstable_LowPriority,
  Ju = je.unstable_IdlePriority,
  Fo = null,
  Je = null;

function Ip(e) {
  if (Je && typeof Je.onCommitFiberRoot == "function") try {
    Je.onCommitFiberRoot(Fo, e, void 0, (e.current.flags & 128) === 128)
  } catch {}
}
var He = Math.clz32 ? Math.clz32 : zp,
  Mp = Math.log,
  Op = Math.LN2;

function zp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Mp(e) / Op | 0) | 0
}
var Mr = 64,
  Or = 4194304;

function Qn(e) {
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
      return e
  }
}

function mo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~o;
    s !== 0 ? r = Qn(s) : (l &= i, l !== 0 && (r = Qn(l)))
  } else i = n & ~o, i !== 0 ? r = Qn(i) : l !== 0 && (r = Qn(l));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o ===
      16 && (l & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t;) n = 31 - He(t), o = 1 << n, r |=
      e[n], t &= ~o;
  return r
}

function Ap(e, t) {
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
      return -1
  }
}

function Dp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e
      .pendingLanes; 0 < l;) {
    var i = 31 - He(l),
      s = 1 << i,
      a = o[i];
    a === -1 ? (!(s & n) || s & r) && (o[i] = Ap(s, t)) : a <= t && (e
      .expiredLanes |= s), l &= ~s
  }
}

function Zl(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ?
    1073741824 : 0
}

function qu() {
  var e = Mr;
  return Mr <<= 1, !(Mr & 4194240) && (Mr = 64), e
}

function ul(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t
}

function Er(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes =
    0), e = e.eventTimes, t = 31 - He(t), e[t] = n
}

function Fp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &=
    t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n;) {
    var o = 31 - He(n),
      l = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l
  }
}

function Yi(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n;) {
    var r = 31 - He(n),
      o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o
  }
}
var b = 0;

function ec(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var tc, Xi, nc, rc, oc, Jl = !1,
  zr = [],
  kt = null,
  Ct = null,
  Nt = null,
  sr = new Map,
  ar = new Map,
  yt = [],
  Up =
  "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit"
  .split(" ");

function qs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      kt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ct = null;
      break;
    case "mouseover":
    case "mouseout":
      Nt = null;
      break;
    case "pointerover":
    case "pointerout":
      sr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ar.delete(t.pointerId)
  }
}

function An(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l ? (e = {
    blockedOn: t,
    domEventName: n,
    eventSystemFlags: r,
    nativeEvent: l,
    targetContainers: [o]
  }, t !== null && (t = Cr(t), t !== null && Xi(t)), e) : (e
    .eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(
      o) === -1 && t.push(o), e)
}

function bp(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return kt = An(kt, e, t, n, r, o), !0;
    case "dragenter":
      return Ct = An(Ct, e, t, n, r, o), !0;
    case "mouseover":
      return Nt = An(Nt, e, t, n, r, o), !0;
    case "pointerover":
      var l = o.pointerId;
      return sr.set(l, An(sr.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return l = o.pointerId, ar.set(l, An(ar.get(l) || null, e, t, n, r, o)), !
        0
  }
  return !1
}

function lc(e) {
  var t = $t(e.target);
  if (t !== null) {
    var n = qt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ku(n), t !== null) {
          e.blockedOn = t, oc(e.priority, function() {
            nc(n)
          });
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return
      }
    }
  }
  e.blockedOn = null
}

function Xr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
    var n = ql(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Kl = r, n.target.dispatchEvent(r), Kl = null
    } else return t = Cr(n), t !== null && Xi(t), e.blockedOn = n, !1;
    t.shift()
  }
  return !0
}

function ea(e, t, n) {
  Xr(e) && n.delete(t)
}

function $p() {
  Jl = !1, kt !== null && Xr(kt) && (kt = null), Ct !== null && Xr(Ct) && (Ct =
    null), Nt !== null && Xr(Nt) && (Nt = null), sr.forEach(ea), ar.forEach(
    ea)
}

function Dn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Jl || (Jl = !0, je
    .unstable_scheduleCallback(je.unstable_NormalPriority, $p)))
}

function ur(e) {
  function t(o) {
    return Dn(o, e)
  }
  if (0 < zr.length) {
    Dn(zr[0], e);
    for (var n = 1; n < zr.length; n++) {
      var r = zr[n];
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (kt !== null && Dn(kt, e), Ct !== null && Dn(Ct, e), Nt !== null && Dn(Nt,
      e), sr.forEach(t), ar.forEach(t), n = 0; n < yt.length; n++) r = yt[n], r
    .blockedOn === e && (r.blockedOn = null);
  for (; 0 < yt.length && (n = yt[0], n.blockedOn === null);) lc(n), n
    .blockedOn === null && yt.shift()
}
var gn = dt.ReactCurrentBatchConfig,
  ho = !0;

function Vp(e, t, n, r) {
  var o = b,
    l = gn.transition;
  gn.transition = null;
  try {
    b = 1, Zi(e, t, n, r)
  } finally {
    b = o, gn.transition = l
  }
}

function Bp(e, t, n, r) {
  var o = b,
    l = gn.transition;
  gn.transition = null;
  try {
    b = 4, Zi(e, t, n, r)
  } finally {
    b = o, gn.transition = l
  }
}

function Zi(e, t, n, r) {
  if (ho) {
    var o = ql(e, t, n, r);
    if (o === null) xl(e, t, r, vo, n), qs(e, r);
    else if (bp(o, e, t, n, r)) r.stopPropagation();
    else if (qs(e, r), t & 4 && -1 < Up.indexOf(e)) {
      for (; o !== null;) {
        var l = Cr(o);
        if (l !== null && tc(l), l = ql(e, t, n, r), l === null && xl(e, t, r,
            vo, n), l === o) break;
        o = l
      }
      o !== null && r.stopPropagation()
    } else xl(e, t, r, null, n)
  }
}
var vo = null;

function ql(e, t, n, r) {
  if (vo = null, e = Ki(r), e = $t(e), e !== null)
    if (t = qt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
    if (e = Ku(t), e !== null) return e;
    e = null
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t
      .stateNode.containerInfo : null;
    e = null
  } else t !== e && (e = null);
  return vo = e, null
}

function ic(e) {
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
      switch (Rp()) {
        case Gi:
          return 1;
        case Zu:
          return 4;
        case po:
        case Lp:
          return 16;
        case Ju:
          return 536870912;
        default:
          return 16
      }
    default:
      return 16
  }
}
var wt = null,
  Ji = null,
  Zr = null;

function sc() {
  if (Zr) return Zr;
  var e, t = Ji,
    n = t.length,
    r, o = "value" in wt ? wt.value : wt.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return Zr = o.slice(e, 1 < r ? 1 - r : void 0)
}

function Jr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) :
    e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Ar() {
  return !0
}

function ta() {
  return !1
}

function Le(e) {
  function t(n, r, o, l, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent =
      l, this.target = i, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[
      s]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l
        .defaultPrevented : l.returnValue === !1) ? Ar : ta, this
      .isPropagationStopped = ta, this
  }
  return G(t.prototype, {
    preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n
        .returnValue != "unknown" && (n.returnValue = !1), this
        .isDefaultPrevented = Ar)
    },
    stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n
        .cancelBubble != "unknown" && (n.cancelBubble = !0), this
        .isPropagationStopped = Ar)
    },
    persist: function() {},
    isPersistent: Ar
  }), t
}
var Ln = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  qi = Le(Ln),
  kr = G({}, Ln, {
    view: 0,
    detail: 0
  }),
  Wp = Le(kr),
  cl, dl, Fn, Uo = G({}, kr, {
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
    getModifierState: es,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e
        .toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Fn && (Fn && e.type ===
        "mousemove" ? (cl = e.screenX - Fn.screenX, dl = e.screenY - Fn
          .screenY) : dl = cl = 0, Fn = e), cl)
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : dl
    }
  }),
  na = Le(Uo),
  Hp = G({}, Uo, {
    dataTransfer: 0
  }),
  Qp = Le(Hp),
  Kp = G({}, kr, {
    relatedTarget: 0
  }),
  fl = Le(Kp),
  Gp = G({}, Ln, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  Yp = Le(Gp),
  Xp = G({}, Ln, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData
    }
  }),
  Zp = Le(Xp),
  Jp = G({}, Ln, {
    data: 0
  }),
  ra = Le(Jp),
  qp = {
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
  },
  em = {
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
  },
  tm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };

function nm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = tm[e]) ? !!t[e] : !1
}

function es() {
  return nm
}
var rm = G({}, kr, {
    key: function(e) {
      if (e.key) {
        var t = qp[e.key] || e.key;
        if (t !== "Unidentified") return t
      }
      return e.type === "keypress" ? (e = Jr(e), e === 13 ? "Enter" : String
          .fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ?
        em[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: es,
    charCode: function(e) {
      return e.type === "keypress" ? Jr(e) : 0
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
      return e.type === "keypress" ? Jr(e) : e.type === "keydown" || e
        .type === "keyup" ? e.keyCode : 0
    }
  }),
  om = Le(rm),
  lm = G({}, Uo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  oa = Le(lm),
  im = G({}, kr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: es
  }),
  sm = Le(im),
  am = G({}, Ln, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  um = Le(am),
  cm = G({}, Uo, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e
        .wheelDeltaX : 0
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e
        .wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  dm = Le(cm),
  fm = [9, 13, 27, 32],
  ts = st && "CompositionEvent" in window,
  Xn = null;
st && "documentMode" in document && (Xn = document.documentMode);
var pm = st && "TextEvent" in window && !Xn,
  ac = st && (!ts || Xn && 8 < Xn && 11 >= Xn),
  la = " ",
  ia = !1;

function uc(e, t) {
  switch (e) {
    case "keyup":
      return fm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1
  }
}

function cc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var rn = !1;

function mm(e, t) {
  switch (e) {
    case "compositionend":
      return cc(t);
    case "keypress":
      return t.which !== 32 ? null : (ia = !0, la);
    case "textInput":
      return e = t.data, e === la && ia ? null : e;
    default:
      return null
  }
}

function hm(e, t) {
  if (rn) return e === "compositionend" || !ts && uc(e, t) ? (e = sc(), Zr =
    Ji = wt = null, rn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which)
      }
      return null;
    case "compositionend":
      return ac && t.locale !== "ko" ? null : t.data;
    default:
      return null
  }
}
var vm = {
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
  week: !0
};

function sa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!vm[e.type] : t === "textarea"
}

function dc(e, t, n, r) {
  Vu(r), t = go(t, "onChange"), 0 < t.length && (n = new qi("onChange",
    "change", null, n, r), e.push({
    event: n,
    listeners: t
  }))
}
var Zn = null,
  cr = null;

function gm(e) {
  Ec(e, 0)
}

function bo(e) {
  var t = sn(e);
  if (zu(t)) return e
}

function ym(e, t) {
  if (e === "change") return t
}
var fc = !1;
if (st) {
  var pl;
  if (st) {
    var ml = "oninput" in document;
    if (!ml) {
      var aa = document.createElement("div");
      aa.setAttribute("oninput", "return;"), ml = typeof aa.oninput ==
        "function"
    }
    pl = ml
  } else pl = !1;
  fc = pl && (!document.documentMode || 9 < document.documentMode)
}

function ua() {
  Zn && (Zn.detachEvent("onpropertychange", pc), cr = Zn = null)
}

function pc(e) {
  if (e.propertyName === "value" && bo(cr)) {
    var t = [];
    dc(t, cr, e, Ki(e)), Qu(gm, t)
  }
}

function xm(e, t, n) {
  e === "focusin" ? (ua(), Zn = t, cr = n, Zn.attachEvent("onpropertychange",
    pc)) : e === "focusout" && ua()
}

function wm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return bo(cr)
}

function Sm(e, t) {
  if (e === "click") return bo(t)
}

function Em(e, t) {
  if (e === "input" || e === "change") return bo(t)
}

function km(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ke = typeof Object.is == "function" ? Object.is : km;

function dr(e, t) {
  if (Ke(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!zl.call(t, o) || !Ke(e[o], t[o])) return !1
  }
  return !0
}

function ca(e) {
  for (; e && e.firstChild;) e = e.firstChild;
  return e
}

function da(e, t) {
  var n = ca(e);
  e = 0;
  for (var r; n;) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return {
        node: n,
        offset: t - e
      };
      e = r
    }
    e: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = ca(n)
  }
}

function mc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t
    .nodeType === 3 ? mc(e, t.parentNode) : "contains" in e ? e.contains(t) : e
    .compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function hc() {
  for (var e = window, t = uo(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = typeof t.contentWindow.location.href == "string"
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow;
    else break;
    t = uo(e.document)
  }
  return t
}

function ns(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e
      .type === "tel" || e.type === "url" || e.type === "password") || t ===
    "textarea" || e.contentEditable === "true")
}

function Cm(e) {
  var t = hc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && mc(n.ownerDocument.documentElement,
      n)) {
    if (r !== null && ns(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in
        n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
        e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length,
          l = Math.min(r.start, o);
        r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (
          o = r, r = l, l = o), o = da(n, l);
        var i = da(n, r);
        o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e
          .anchorOffset !== o.offset || e.focusNode !== i.node || e
          .focusOffset !== i.offset) && (t = t.createRange(), t.setStart(o
          .node, o.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e
          .extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e
          .addRange(t)))
      }
    }
    for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
      element: e,
      left: e.scrollLeft,
      top: e.scrollTop
    });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
  }
}
var Nm = st && "documentMode" in document && 11 >= document.documentMode,
  on = null,
  ei = null,
  Jn = null,
  ti = !1;

function fa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ti || on == null || on !== uo(r) || (r = on, "selectionStart" in r && ns(r) ?
    r = {
      start: r.selectionStart,
      end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window)
      .getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
      }), Jn && dr(Jn, r) || (Jn = r, r = go(ei, "onSelect"), 0 < r.length &&
      (t = new qi("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
      }), t.target = on)))
}

function Dr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t, n
}
var ln = {
    animationend: Dr("Animation", "AnimationEnd"),
    animationiteration: Dr("Animation", "AnimationIteration"),
    animationstart: Dr("Animation", "AnimationStart"),
    transitionend: Dr("Transition", "TransitionEnd")
  },
  hl = {},
  vc = {};
st && (vc = document.createElement("div")
  .style, "AnimationEvent" in window || (delete ln.animationend.animation,
    delete ln.animationiteration.animation, delete ln.animationstart.animation
  ), "TransitionEvent" in window || delete ln.transitionend.transition);

function $o(e) {
  if (hl[e]) return hl[e];
  if (!ln[e]) return e;
  var t = ln[e],
    n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in vc) return hl[e] = t[n];
  return e
}
var gc = $o("animationend"),
  yc = $o("animationiteration"),
  xc = $o("animationstart"),
  wc = $o("transitionend"),
  Sc = new Map,
  pa =
  "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel"
  .split(" ");

function zt(e, t) {
  Sc.set(e, t), Jt(t, [e])
}
for (var vl = 0; vl < pa.length; vl++) {
  var gl = pa[vl],
    Pm = gl.toLowerCase(),
    Tm = gl[0].toUpperCase() + gl.slice(1);
  zt(Pm, "on" + Tm)
}
zt(gc, "onAnimationEnd");
zt(yc, "onAnimationIteration");
zt(xc, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt(wc, "onTransitionEnd");
En("onMouseEnter", ["mouseout", "mouseover"]);
En("onMouseLeave", ["mouseout", "mouseover"]);
En("onPointerEnter", ["pointerout", "pointerover"]);
En("onPointerLeave", ["pointerout", "pointerover"]);
Jt("onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " "));
Jt("onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange"
  .split(" "));
Jt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jt("onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "));
Jt("onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Jt("onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Kn =
  "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting"
  .split(" "),
  _m = new Set("cancel close invalid load scroll toggle".split(" ")
    .concat(Kn));

function ma(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Pp(r, t, void 0, e), e.currentTarget = null
}

function Ec(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            a = s.instance,
            u = s.currentTarget;
          if (s = s.listener, a !== l && o.isPropagationStopped()) break e;
          ma(o, s, u), l = a
        } else
          for (i = 0; i < r.length; i++) {
            if (s = r[i], a = s.instance, u = s.currentTarget, s = s.listener,
              a !== l && o.isPropagationStopped()) break e;
            ma(o, s, u), l = a
          }
    }
  }
  if (fo) throw e = Xl, fo = !1, Xl = null, e
}

function B(e, t) {
  var n = t[ii];
  n === void 0 && (n = t[ii] = new Set);
  var r = e + "__bubble";
  n.has(r) || (kc(t, e, 2, !1), n.add(r))
}

function yl(e, t, n) {
  var r = 0;
  t && (r |= 4), kc(n, e, r, t)
}
var Fr = "_reactListening" + Math.random()
  .toString(36)
  .slice(2);

function fr(e) {
  if (!e[Fr]) {
    e[Fr] = !0, Ru.forEach(function(n) {
      n !== "selectionchange" && (_m.has(n) || yl(n, !1, e), yl(n, !0, e))
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Fr] || (t[Fr] = !0, yl("selectionchange", !1, t))
  }
}

function kc(e, t, n, r) {
  switch (ic(t)) {
    case 1:
      var o = Vp;
      break;
    case 4:
      o = Bp;
      break;
    default:
      o = Zi
  }
  n = o.bind(null, t, n, e), o = void 0, !Yl || t !== "touchstart" && t !==
    "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e
    .addEventListener(t, n, {
      capture: !0,
      passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t,
      n, {
        passive: o
      }) : e.addEventListener(t, n, !1)
}

function xl(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var s = r.stateNode.containerInfo;
      if (s === o || s.nodeType === 8 && s.parentNode === o) break;
      if (i === 4)
        for (i = r.return; i !== null;) {
          var a = i.tag;
          if ((a === 3 || a === 4) && (a = i.stateNode.containerInfo, a ===
              o || a.nodeType === 8 && a.parentNode === o)) return;
          i = i.return
        }
      for (; s !== null;) {
        if (i = $t(s), i === null) return;
        if (a = i.tag, a === 5 || a === 6) {
          r = l = i;
          continue e
        }
        s = s.parentNode
      }
    }
    r = r.return
  }
  Qu(function() {
    var u = l,
      f = Ki(n),
      p = [];
    e: {
      var v = Sc.get(e);
      if (v !== void 0) {
        var S = qi,
          E = e;
        switch (e) {
          case "keypress":
            if (Jr(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = om;
            break;
          case "focusin":
            E = "focus", S = fl;
            break;
          case "focusout":
            E = "blur", S = fl;
            break;
          case "beforeblur":
          case "afterblur":
            S = fl;
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
            S = na;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = Qp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = sm;
            break;
          case gc:
          case yc:
          case xc:
            S = Yp;
            break;
          case wc:
            S = um;
            break;
          case "scroll":
            S = Wp;
            break;
          case "wheel":
            S = dm;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Zp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = oa
        }
        var y = (t & 4) !== 0,
          x = !y && e === "scroll",
          d = y ? v !== null ? v + "Capture" : null : v;
        y = [];
        for (var c = u, m; c !== null;) {
          m = c;
          var w = m.stateNode;
          if (m.tag === 5 && w !== null && (m = w, d !== null && (w = ir(
              c, d), w != null && y.push(pr(c, w, m)))), x) break;
          c = c.return
        }
        0 < y.length && (v = new S(v, E, null, n, f), p.push({
          event: v,
          listeners: y
        }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", S = e ===
          "mouseout" || e === "pointerout", v && n !== Kl && (E = n
            .relatedTarget || n.fromElement) && ($t(E) || E[at])) break e;
        if ((S || v) && (v = f.window === f ? f : (v = f.ownerDocument) ? v
            .defaultView || v.parentWindow : window, S ? (E = n
              .relatedTarget || n.toElement, S = u, E = E ? $t(E) : null,
              E !== null && (x = qt(E), E !== x || E.tag !== 5 && E.tag !==
                6) && (E = null)) : (S = null, E = u), S !== E)) {
          if (y = na, w = "onMouseLeave", d = "onMouseEnter", c = "mouse", (
              e === "pointerout" || e === "pointerover") && (y = oa, w =
              "onPointerLeave", d = "onPointerEnter", c = "pointer"), x =
            S == null ? v : sn(S), m = E == null ? v : sn(E), v = new y(w,
              c + "leave", S, n, f), v.target = x, v.relatedTarget = m, w =
            null, $t(f) === u && (y = new y(d, c + "enter", E, n, f), y
              .target = m, y.relatedTarget = x, w = y), x = w, S && E) t: {
            for (y = S, d = E, c = 0, m = y; m; m = en(m)) c++;
            for (m = 0, w = d; w; w = en(w)) m++;
            for (; 0 < c - m;) y = en(y),
            c--;
            for (; 0 < m - c;) d = en(d),
            m--;
            for (; c--;) {
              if (y === d || d !== null && y === d.alternate) break t;
              y = en(y), d = en(d)
            }
            y = null
          }
          else y = null;
          S !== null && ha(p, v, S, y, !1), E !== null && x !== null && ha(
            p, x, E, y, !0)
        }
      }
      e: {
        if (v = u ? sn(u) : window, S = v.nodeName && v.nodeName
          .toLowerCase(), S === "select" || S === "input" && v.type ===
          "file") var C = ym;
        else if (sa(v))
          if (fc) C = Em;
          else {
            C = wm;
            var P = xm
          }
        else(S = v.nodeName) && S.toLowerCase() === "input" && (v.type ===
          "checkbox" || v.type === "radio") && (C = Sm);
        if (C && (C = C(e, u))) {
          dc(p, C, n, f);
          break e
        }
        P && P(e, v, u),
        e === "focusout" && (P = v._wrapperState) && P.controlled && v
        .type === "number" && Vl(v, "number", v.value)
      }
      switch (P = u ? sn(u) : window, e) {
        case "focusin":
          (sa(P) || P.contentEditable === "true") && (on = P, ei = u, Jn =
            null);
          break;
        case "focusout":
          Jn = ei = on = null;
          break;
        case "mousedown":
          ti = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ti = !1, fa(p, n, f);
          break;
        case "selectionchange":
          if (Nm) break;
        case "keydown":
        case "keyup":
          fa(p, n, f)
      }
      var N;
      if (ts) e: {
        switch (e) {
          case "compositionstart":
            var _ = "onCompositionStart";
            break e;
          case "compositionend":
            _ = "onCompositionEnd";
            break e;
          case "compositionupdate":
            _ = "onCompositionUpdate";
            break e
        }
        _ = void 0
      }
      else rn ? uc(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n
        .keyCode === 229 && (_ = "onCompositionStart");_ && (ac && n
        .locale !== "ko" && (rn || _ !== "onCompositionStart" ? _ ===
          "onCompositionEnd" && rn && (N = sc()) : (wt = f, Ji = "value" in
            wt ? wt.value : wt.textContent, rn = !0)), P = go(u, _), 0 < P
        .length && (_ = new ra(_, e, null, n, f), p.push({
          event: _,
          listeners: P
        }), N ? _.data = N : (N = cc(n), N !== null && (_.data = N)))),
      (N = pm ? mm(e, n) : hm(e, n)) && (u = go(u, "onBeforeInput"), 0 < u
        .length && (f = new ra("onBeforeInput", "beforeinput", null, n, f),
          p.push({
            event: f,
            listeners: u
          }), f.data = N))
    }
    Ec(p, t)
  })
}

function pr(e, t, n) {
  return {
    instance: e,
    listener: t,
    currentTarget: n
  }
}

function go(e, t) {
  for (var n = t + "Capture", r = []; e !== null;) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 && l !== null && (o = l, l = ir(e, n), l != null && r.unshift(
        pr(e, l, o)), l = ir(e, t), l != null && r.push(pr(e, l, o))), e = e
      .return
  }
  return r
}

function en(e) {
  if (e === null) return null;
  do e = e.return; while (e && e.tag !== 5);
  return e || null
}

function ha(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r;) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 && u !== null && (s = u, o ? (a = ir(n, l), a != null && i
      .unshift(pr(n, a, s))) : o || (a = ir(n, l), a != null && i.push(pr(n,
      a, s)))), n = n.return
  }
  i.length !== 0 && e.push({
    event: t,
    listeners: i
  })
}
var jm = /\r\n?/g,
  Rm = /\u0000|\uFFFD/g;

function va(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(jm, `
`)
    .replace(Rm, "")
}

function Ur(e, t, n) {
  if (t = va(t), va(e) !== t && n) throw Error(k(425))
}

function yo() {}
var ni = null,
  ri = null;

function oi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children ==
    "string" || typeof t.children == "number" || typeof t
    .dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !==
    null && t.dangerouslySetInnerHTML.__html != null
}
var li = typeof setTimeout == "function" ? setTimeout : void 0,
  Lm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ga = typeof Promise == "function" ? Promise : void 0,
  Im = typeof queueMicrotask == "function" ? queueMicrotask : typeof ga < "u" ?
  function(e) {
    return ga.resolve(null)
      .then(e)
      .catch(Mm)
  } : li;

function Mm(e) {
  setTimeout(function() {
    throw e
  })
}

function wl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), ur(t);
          return
        }
        r--
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o
  } while (n);
  ur(t)
}

function Pt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null
    }
  }
  return e
}

function ya(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--
      } else n === "/$" && t++
    }
    e = e.previousSibling
  }
  return null
}
var In = Math.random()
  .toString(36)
  .slice(2),
  Ze = "__reactFiber$" + In,
  mr = "__reactProps$" + In,
  at = "__reactContainer$" + In,
  ii = "__reactEvents$" + In,
  Om = "__reactListeners$" + In,
  zm = "__reactHandles$" + In;

function $t(e) {
  var t = e[Ze];
  if (t) return t;
  for (var n = e.parentNode; n;) {
    if (t = n[at] || n[Ze]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = ya(e); e !== null;) {
          if (n = e[Ze]) return n;
          e = ya(e)
        }
      return t
    }
    e = n, n = e.parentNode
  }
  return null
}

function Cr(e) {
  return e = e[Ze] || e[at], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 &&
    e.tag !== 3 ? null : e
}

function sn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33))
}

function Vo(e) {
  return e[mr] || null
}
var si = [],
  an = -1;

function At(e) {
  return {
    current: e
  }
}

function W(e) {
  0 > an || (e.current = si[an], si[an] = null, an--)
}

function $(e, t) {
  an++, si[an] = e.current, e.current = t
}
var It = {},
  fe = At(It),
  xe = At(!1),
  Qt = It;

function kn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return It;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r
    .__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext =
    t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function we(e) {
  return e = e.childContextTypes, e != null
}

function xo() {
  W(xe), W(fe)
}

function xa(e, t, n) {
  if (fe.current !== It) throw Error(k(168));
  $(fe, t), $(xe, n)
}

function Cc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t)) throw Error(k(108, xp(e) || "Unknown", o));
  return G({}, n, r)
}

function wo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext ||
    It, Qt = fe.current, $(fe, e), $(xe, xe.current), !0
}

function wa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n ? (e = Cc(e, t, Qt), r.__reactInternalMemoizedMergedChildContext = e, W(xe),
    W(fe), $(fe, e)) : W(xe), $(xe, n)
}
var rt = null,
  Bo = !1,
  Sl = !1;

function Nc(e) {
  rt === null ? rt = [e] : rt.push(e)
}

function Am(e) {
  Bo = !0, Nc(e)
}

function Dt() {
  if (!Sl && rt !== null) {
    Sl = !0;
    var e = 0,
      t = b;
    try {
      var n = rt;
      for (b = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0); while (r !== null)
      }
      rt = null, Bo = !1
    } catch (o) {
      throw rt !== null && (rt = rt.slice(e + 1)), Xu(Gi, Dt), o
    } finally {
      b = t, Sl = !1
    }
  }
  return null
}
var un = [],
  cn = 0,
  So = null,
  Eo = 0,
  ze = [],
  Ae = 0,
  Kt = null,
  ot = 1,
  lt = "";

function Ut(e, t) {
  un[cn++] = Eo, un[cn++] = So, So = e, Eo = t
}

function Pc(e, t, n) {
  ze[Ae++] = ot, ze[Ae++] = lt, ze[Ae++] = Kt, Kt = e;
  var r = ot;
  e = lt;
  var o = 32 - He(r) - 1;
  r &= ~(1 << o), n += 1;
  var l = 32 - He(t) + o;
  if (30 < l) {
    var i = o - o % 5;
    l = (r & (1 << i) - 1)
      .toString(32), r >>= i, o -= i, ot = 1 << 32 - He(t) + o | n << o | r,
      lt = l + e
  } else ot = 1 << l | n << o | r, lt = e
}

function rs(e) {
  e.return !== null && (Ut(e, 1), Pc(e, 1, 0))
}

function os(e) {
  for (; e === So;) So = un[--cn], un[cn] = null, Eo = un[--cn], un[cn] = null;
  for (; e === Kt;) Kt = ze[--Ae], ze[Ae] = null, lt = ze[--Ae], ze[Ae] = null,
    ot = ze[--Ae], ze[Ae] = null
}
var _e = null,
  Te = null,
  H = !1,
  We = null;

function Tc(e, t) {
  var n = De(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions,
    t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Sa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName
        .toLowerCase() ? null : t, t !== null ? (e.stateNode = t, _e = e, Te =
          Pt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !==
        null ? (e.stateNode = t, _e = e, Te = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Kt !== null ? {
          id: ot,
          overflow: lt
        } : null, e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 1073741824
        }, n = De(18, null, null, 0), n.stateNode = t, n.return = e, e.child =
        n, _e = e, Te = null, !0) : !1;
    default:
      return !1
  }
}

function ai(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function ui(e) {
  if (H) {
    var t = Te;
    if (t) {
      var n = t;
      if (!Sa(e, t)) {
        if (ai(e)) throw Error(k(418));
        t = Pt(n.nextSibling);
        var r = _e;
        t && Sa(e, t) ? Tc(r, n) : (e.flags = e.flags & -4097 | 2, H = !1, _e =
          e)
      }
    } else {
      if (ai(e)) throw Error(k(418));
      e.flags = e.flags & -4097 | 2, H = !1, _e = e
    }
  }
}

function Ea(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return;
  _e = e
}

function br(e) {
  if (e !== _e) return !1;
  if (!H) return Ea(e), H = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !==
      "head" && t !== "body" && !oi(e.type, e.memoizedProps)), t && (t = Te)) {
    if (ai(e)) throw _c(), Error(k(418));
    for (; t;) Tc(e, t), t = Pt(t.nextSibling)
  }
  if (Ea(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Te = Pt(e.nextSibling);
              break e
            }
            t--
          } else n !== "$" && n !== "$!" && n !== "$?" || t++
        }
        e = e.nextSibling
      }
      Te = null
    }
  } else Te = _e ? Pt(e.stateNode.nextSibling) : null;
  return !0
}

function _c() {
  for (var e = Te; e;) e = Pt(e.nextSibling)
}

function Cn() {
  Te = _e = null, H = !1
}

function ls(e) {
  We === null ? We = [e] : We.push(e)
}
var Dm = dt.ReactCurrentBatchConfig;

function Un(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode
      }
      if (!r) throw Error(k(147, e));
      var o = r,
        l = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref
        ._stringRef === l ? t.ref : (t = function(i) {
          var s = o.refs;
          i === null ? delete s[l] : s[l] = i
        }, t._stringRef = l, t)
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e))
  }
  return e
}

function $r(e, t) {
  throw e = Object.prototype.toString.call(t), Error(k(31, e ===
    "[object Object]" ? "object with keys {" + Object.keys(t)
    .join(", ") + "}" : e))
}

function ka(e) {
  var t = e._init;
  return t(e._payload)
}

function jc(e) {
  function t(d, c) {
    if (e) {
      var m = d.deletions;
      m === null ? (d.deletions = [c], d.flags |= 16) : m.push(c)
    }
  }

  function n(d, c) {
    if (!e) return null;
    for (; c !== null;) t(d, c), c = c.sibling;
    return null
  }

  function r(d, c) {
    for (d = new Map; c !== null;) c.key !== null ? d.set(c.key, c) : d.set(c
      .index, c), c = c.sibling;
    return d
  }

  function o(d, c) {
    return d = Rt(d, c), d.index = 0, d.sibling = null, d
  }

  function l(d, c, m) {
    return d.index = m, e ? (m = d.alternate, m !== null ? (m = m.index, m < c ?
      (d.flags |= 2, c) : m) : (d.flags |= 2, c)) : (d.flags |= 1048576, c)
  }

  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d
  }

  function s(d, c, m, w) {
    return c === null || c.tag !== 6 ? (c = _l(m, d.mode, w), c.return = d, c) :
      (c = o(c, m), c.return = d, c)
  }

  function a(d, c, m, w) {
    var C = m.type;
    return C === nn ? f(d, c, m.props.children, w, m.key) : c !== null && (c
      .elementType === C || typeof C == "object" && C !== null && C
      .$$typeof === vt && ka(C) === c.type) ? (w = o(c, m.props), w.ref = Un(
      d, c, m), w.return = d, w) : (w = lo(m.type, m.key, m.props, null, d
      .mode, w), w.ref = Un(d, c, m), w.return = d, w)
  }

  function u(d, c, m, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== m
      .containerInfo || c.stateNode.implementation !== m.implementation ? (c =
        jl(m, d.mode, w), c.return = d, c) : (c = o(c, m.children || []), c
        .return = d, c)
  }

  function f(d, c, m, w, C) {
    return c === null || c.tag !== 7 ? (c = Ht(m, d.mode, w, C), c.return = d,
      c) : (c = o(c, m), c.return = d, c)
  }

  function p(d, c, m) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = _l(
      "" + c, d.mode, m), c.return = d, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Rr:
          return m = lo(c.type, c.key, c.props, null, d.mode, m), m.ref = Un(d,
            null, c), m.return = d, m;
        case tn:
          return c = jl(c, d.mode, m), c.return = d, c;
        case vt:
          var w = c._init;
          return p(d, w(c._payload), m)
      }
      if (Hn(c) || On(c)) return c = Ht(c, d.mode, m, null), c.return = d, c;
      $r(d, c)
    }
    return null
  }

  function v(d, c, m, w) {
    var C = c !== null ? c.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return C !==
      null ? null : s(d, c, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Rr:
          return m.key === C ? a(d, c, m, w) : null;
        case tn:
          return m.key === C ? u(d, c, m, w) : null;
        case vt:
          return C = m._init, v(d, c, C(m._payload), w)
      }
      if (Hn(m) || On(m)) return C !== null ? null : f(d, c, m, w, null);
      $r(d, m)
    }
    return null
  }

  function S(d, c, m, w, C) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return d = d
      .get(m) || null, s(c, d, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Rr:
          return d = d.get(w.key === null ? m : w.key) || null, a(c, d, w, C);
        case tn:
          return d = d.get(w.key === null ? m : w.key) || null, u(c, d, w, C);
        case vt:
          var P = w._init;
          return S(d, c, m, P(w._payload), C)
      }
      if (Hn(w) || On(w)) return d = d.get(m) || null, f(c, d, w, C, null);
      $r(c, w)
    }
    return null
  }

  function E(d, c, m, w) {
    for (var C = null, P = null, N = c, _ = c = 0, D = null; N !== null && _ < m
      .length; _++) {
      N.index > _ ? (D = N, N = null) : D = N.sibling;
      var L = v(d, N, m[_], w);
      if (L === null) {
        N === null && (N = D);
        break
      }
      e && N && L.alternate === null && t(d, N), c = l(L, c, _), P === null ?
        C = L : P.sibling = L, P = L, N = D
    }
    if (_ === m.length) return n(d, N), H && Ut(d, _), C;
    if (N === null) {
      for (; _ < m.length; _++) N = p(d, m[_], w), N !== null && (c = l(N, c,
        _), P === null ? C = N : P.sibling = N, P = N);
      return H && Ut(d, _), C
    }
    for (N = r(d, N); _ < m.length; _++) D = S(N, d, _, m[_], w), D !== null &&
      (e && D.alternate !== null && N.delete(D.key === null ? _ : D.key), c = l(
        D, c, _), P === null ? C = D : P.sibling = D, P = D);
    return e && N.forEach(function(Y) {
      return t(d, Y)
    }), H && Ut(d, _), C
  }

  function y(d, c, m, w) {
    var C = On(m);
    if (typeof C != "function") throw Error(k(150));
    if (m = C.call(m), m == null) throw Error(k(151));
    for (var P = C = null, N = c, _ = c = 0, D = null, L = m.next(); N !==
      null && !L.done; _++, L = m.next()) {
      N.index > _ ? (D = N, N = null) : D = N.sibling;
      var Y = v(d, N, L.value, w);
      if (Y === null) {
        N === null && (N = D);
        break
      }
      e && N && Y.alternate === null && t(d, N), c = l(Y, c, _), P === null ?
        C = Y : P.sibling = Y, P = Y, N = D
    }
    if (L.done) return n(d, N), H && Ut(d, _), C;
    if (N === null) {
      for (; !L.done; _++, L = m.next()) L = p(d, L.value, w), L !== null && (
        c = l(L, c, _), P === null ? C = L : P.sibling = L, P = L);
      return H && Ut(d, _), C
    }
    for (N = r(d, N); !L.done; _++, L = m.next()) L = S(N, d, _, L.value, w),
      L !== null && (e && L.alternate !== null && N.delete(L.key === null ? _ :
        L.key), c = l(L, c, _), P === null ? C = L : P.sibling = L, P = L);
    return e && N.forEach(function(z) {
      return t(d, z)
    }), H && Ut(d, _), C
  }

  function x(d, c, m, w) {
    if (typeof m == "object" && m !== null && m.type === nn && m.key === null &&
      (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Rr:
          e: {
            for (var C = m.key, P = c; P !== null;) {
              if (P.key === C) {
                if (C = m.type, C === nn) {
                  if (P.tag === 7) {
                    n(d, P.sibling), c = o(P, m.props.children), c.return = d,
                      d = c;
                    break e
                  }
                } else if (P.elementType === C || typeof C == "object" &&
                  C !== null && C.$$typeof === vt && ka(C) === P.type) {
                  n(d, P.sibling), c = o(P, m.props), c.ref = Un(d, P, m), c
                    .return = d, d = c;
                  break e
                }
                n(d, P);
                break
              } else t(d, P);
              P = P.sibling
            }
            m.type === nn ? (c = Ht(m.props.children, d.mode, w, m.key), c
              .return = d, d = c) : (w = lo(m.type, m.key, m.props, null, d
              .mode, w), w.ref = Un(d, c, m), w.return = d, d = w)
          }
          return i(d);
        case tn:
          e: {
            for (P = m.key; c !== null;) {
              if (c.key === P)
                if (c.tag === 4 && c.stateNode.containerInfo === m
                  .containerInfo && c.stateNode.implementation === m
                  .implementation) {
                  n(d, c.sibling), c = o(c, m.children || []), c.return = d,
                    d = c;
                  break e
                } else {
                  n(d, c);
                  break
                }
              else t(d, c);
              c = c.sibling
            }
            c = jl(m, d.mode, w),
            c.return = d,
            d = c
          }
          return i(d);
        case vt:
          return P = m._init, x(d, c, P(m._payload), w)
      }
      if (Hn(m)) return E(d, c, m, w);
      if (On(m)) return y(d, c, m, w);
      $r(d, m)
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" +
      m, c !== null && c.tag === 6 ? (n(d, c.sibling), c = o(c, m), c.return =
        d, d = c) : (n(d, c), c = _l(m, d.mode, w), c.return = d, d = c), i(d)
    ) : n(d, c)
  }
  return x
}
var Nn = jc(!0),
  Rc = jc(!1),
  ko = At(null),
  Co = null,
  dn = null,
  is = null;

function ss() {
  is = dn = Co = null
}

function as(e) {
  var t = ko.current;
  W(ko), e._currentValue = t
}

function ci(e, t, n) {
  for (; e !== null;) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r
        .childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r
        .childLanes |= t), e === n) break;
    e = e.return
  }
}

function yn(e, t) {
  Co = e, is = dn = null, e = e.dependencies, e !== null && e.firstContext !==
    null && (e.lanes & t && (ye = !0), e.firstContext = null)
}

function Ue(e) {
  var t = e._currentValue;
  if (is !== e)
    if (e = {
        context: e,
        memoizedValue: t,
        next: null
      }, dn === null) {
      if (Co === null) throw Error(k(308));
      dn = e, Co.dependencies = {
        lanes: 0,
        firstContext: e
      }
    } else dn = dn.next = e;
  return t
}
var Vt = null;

function us(e) {
  Vt === null ? Vt = [e] : Vt.push(e)
}

function Lc(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, us(t)) : (n.next = o.next, o.next = n), t
    .interleaved = n, ut(e, r)
}

function ut(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e
    .childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e,
    e = e.return;
  return n.tag === 3 ? n.stateNode : null
}
var gt = !1;

function cs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0
    },
    effects: null
  }
}

function Ic(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
    baseState: e.baseState,
    firstBaseUpdate: e.firstBaseUpdate,
    lastBaseUpdate: e.lastBaseUpdate,
    shared: e.shared,
    effects: e.effects
  })
}

function it(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  }
}

function Tt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, U & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending =
      t, ut(e, n)
  }
  return o = r.interleaved, o === null ? (t.next = t, us(r)) : (t.next = o.next,
    o.next = t), r.interleaved = t, ut(e, n)
}

function qr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Yi(e, n)
  }
}

function Ca(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null,
      l = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        };
        l === null ? o = l = i : l = l.next = i, n = n.next
      } while (n !== null);
      l === null ? o = l = t : l = l.next = t
    } else o = l = t;
    n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects
    }, e.updateQueue = n;
    return
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n
    .lastBaseUpdate = t
}

function No(e, t, n, r) {
  var o = e.updateQueue;
  gt = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s,
      u = a.next;
    a.next = null, i === null ? l = u : i.next = u, i = a;
    var f = e.alternate;
    f !== null && (f = f.updateQueue, s = f.lastBaseUpdate, s !== i && (s ===
      null ? f.firstBaseUpdate = u : s.next = u, f.lastBaseUpdate = a))
  }
  if (l !== null) {
    var p = o.baseState;
    i = 0, f = u = a = null, s = l;
    do {
      var v = s.lane,
        S = s.eventTime;
      if ((r & v) === v) {
        f !== null && (f = f.next = {
          eventTime: S,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var E = e,
            y = s;
          switch (v = t, S = n, y.tag) {
            case 1:
              if (E = y.payload, typeof E == "function") {
                p = E.call(S, p, v);
                break e
              }
              p = E;
              break e;
            case 3:
              E.flags = E.flags & -65537 | 128;
            case 0:
              if (E = y.payload, v = typeof E == "function" ? E.call(S, p,
                  v) : E, v == null) break e;
              p = G({}, p, v);
              break e;
            case 2:
              gt = !0
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, v = o.effects,
          v === null ? o.effects = [s] : v.push(s))
      } else S = {
        eventTime: S,
        lane: v,
        tag: s.tag,
        payload: s.payload,
        callback: s.callback,
        next: null
      }, f === null ? (u = f = S, a = p) : f = f.next = S, i |= v;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null) break;
        v = s, s = v.next, v.next = null, o.lastBaseUpdate = v, o.shared
          .pending = null
      }
    } while (!0);
    if (f === null && (a = p), o.baseState = a, o.firstBaseUpdate = u, o
      .lastBaseUpdate = f, t = o.shared.interleaved, t !== null) {
      o = t;
      do i |= o.lane, o = o.next; while (o !== t)
    } else l === null && (o.shared.lanes = 0);
    Yt |= i, e.lanes = i, e.memoizedState = p
  }
}

function Na(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function") throw Error(k(191,
          o));
        o.call(r)
      }
    }
}
var Nr = {},
  qe = At(Nr),
  hr = At(Nr),
  vr = At(Nr);

function Bt(e) {
  if (e === Nr) throw Error(k(174));
  return e
}

function ds(e, t) {
  switch ($(vr, t), $(hr, e), $(qe, Nr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Wl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName,
        t = Wl(t, e)
  }
  W(qe), $(qe, t)
}

function Pn() {
  W(qe), W(hr), W(vr)
}

function Mc(e) {
  Bt(vr.current);
  var t = Bt(qe.current),
    n = Wl(t, e.type);
  t !== n && ($(hr, e), $(qe, n))
}

function fs(e) {
  hr.current === e && (W(qe), W(hr))
}
var Q = At(0);

function Po(e) {
  for (var t = e; t !== null;) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n
          .data === "$!")) return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue
    }
    if (t === e) break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e) return null;
      t = t.return
    }
    t.sibling.return = t.return, t = t.sibling
  }
  return null
}
var El = [];

function ps() {
  for (var e = 0; e < El.length; e++) El[e]._workInProgressVersionPrimary =
    null;
  El.length = 0
}
var eo = dt.ReactCurrentDispatcher,
  kl = dt.ReactCurrentBatchConfig,
  Gt = 0,
  K = null,
  ee = null,
  ne = null,
  To = !1,
  qn = !1,
  gr = 0,
  Fm = 0;

function ue() {
  throw Error(k(321))
}

function ms(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ke(e[n], t[n])) return !1;
  return !0
}

function hs(e, t, n, r, o, l) {
  if (Gt = l, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0,
    eo.current = e === null || e.memoizedState === null ? Vm : Bm, e = n(r, o),
    qn) {
    l = 0;
    do {
      if (qn = !1, gr = 0, 25 <= l) throw Error(k(301));
      l += 1, ne = ee = null, t.updateQueue = null, eo.current = Wm, e = n(r, o)
    } while (qn)
  }
  if (eo.current = _o, t = ee !== null && ee.next !== null, Gt = 0, ne = ee =
    K = null, To = !1, t) throw Error(k(300));
  return e
}

function vs() {
  var e = gr !== 0;
  return gr = 0, e
}

function Xe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  return ne === null ? K.memoizedState = ne = e : ne = ne.next = e, ne
}

function be() {
  if (ee === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null
  } else e = ee.next;
  var t = ne === null ? K.memoizedState : ne.next;
  if (t !== null) ne = t, ee = e;
  else {
    if (e === null) throw Error(k(310));
    ee = e, e = {
      memoizedState: ee.memoizedState,
      baseState: ee.baseState,
      baseQueue: ee.baseQueue,
      queue: ee.queue,
      next: null
    }, ne === null ? K.memoizedState = ne = e : ne = ne.next = e
  }
  return ne
}

function yr(e, t) {
  return typeof t == "function" ? t(e) : t
}

function Cl(e) {
  var t = be(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = ee,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      o.next = l.next, l.next = i
    }
    r.baseQueue = o = l, n.pending = null
  }
  if (o !== null) {
    l = o.next, r = r.baseState;
    var s = i = null,
      a = null,
      u = l;
    do {
      var f = u.lane;
      if ((Gt & f) === f) a !== null && (a = a.next = {
        lane: 0,
        action: u.action,
        hasEagerState: u.hasEagerState,
        eagerState: u.eagerState,
        next: null
      }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var p = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (s = a = p, i = r) : a = a.next = p, K.lanes |= f, Yt |= f
      }
      u = u.next
    } while (u !== null && u !== l);
    a === null ? i = r : a.next = s, Ke(r, t.memoizedState) || (ye = !0), t
      .memoizedState = r, t.baseState = i, t.baseQueue = a, n
      .lastRenderedState = r
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do l = o.lane, K.lanes |= l, Yt |= l, o = o.next; while (o !== e)
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch]
}

function Nl(e) {
  var t = be(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do l = e(l, i.action), i = i.next; while (i !== o);
    Ke(l, t.memoizedState) || (ye = !0), t.memoizedState = l, t.baseQueue ===
      null && (t.baseState = l), n.lastRenderedState = l
  }
  return [l, r]
}

function Oc() {}

function zc(e, t) {
  var n = K,
    r = be(),
    o = t(),
    l = !Ke(r.memoizedState, o);
  if (l && (r.memoizedState = o, ye = !0), r = r.queue, gs(Fc.bind(null, n, r,
      e), [e]), r.getSnapshot !== t || l || ne !== null && ne.memoizedState
    .tag & 1) {
    if (n.flags |= 2048, xr(9, Dc.bind(null, n, r, o, t), void 0, null), re ===
      null) throw Error(k(349));
    Gt & 30 || Ac(n, t, o)
  }
  return o
}

function Ac(e, t, n) {
  e.flags |= 16384, e = {
    getSnapshot: t,
    value: n
  }, t = K.updateQueue, t === null ? (t = {
    lastEffect: null,
    stores: null
  }, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t
    .stores = [e] : n.push(e))
}

function Dc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Uc(t) && bc(e)
}

function Fc(e, t, n) {
  return n(function() {
    Uc(t) && bc(e)
  })
}

function Uc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ke(e, n)
  } catch {
    return !0
  }
}

function bc(e) {
  var t = ut(e, 1);
  t !== null && Qe(t, e, 1, -1)
}

function Pa(e) {
  var t = Xe();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e,
    e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: yr,
      lastRenderedState: e
    }, t.queue = e, e = e.dispatch = $m.bind(null, K, e), [t.memoizedState, e]
}

function xr(e, t, n, r) {
  return e = {
    tag: e,
    create: t,
    destroy: n,
    deps: r,
    next: null
  }, t = K.updateQueue, t === null ? (t = {
    lastEffect: null,
    stores: null
  }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n ===
    null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t
      .lastEffect = e)), e
}

function $c() {
  return be()
    .memoizedState
}

function to(e, t, n, r) {
  var o = Xe();
  K.flags |= e, o.memoizedState = xr(1 | t, n, void 0, r === void 0 ? null : r)
}

function Wo(e, t, n, r) {
  var o = be();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (ee !== null) {
    var i = ee.memoizedState;
    if (l = i.destroy, r !== null && ms(r, i.deps)) {
      o.memoizedState = xr(t, n, l, r);
      return
    }
  }
  K.flags |= e, o.memoizedState = xr(1 | t, n, l, r)
}

function Ta(e, t) {
  return to(8390656, 8, e, t)
}

function gs(e, t) {
  return Wo(2048, 8, e, t)
}

function Vc(e, t) {
  return Wo(4, 2, e, t)
}

function Bc(e, t) {
  return Wo(4, 4, e, t)
}

function Wc(e, t) {
  if (typeof t == "function") return e = e(), t(e),
    function() {
      t(null)
    };
  if (t != null) return e = e(), t.current = e,
    function() {
      t.current = null
    }
}

function Hc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Wo(4, 4, Wc.bind(null, t, e), n)
}

function ys() {}

function Qc(e, t) {
  var n = be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ms(t, r[1]) ? r[0] : (n.memoizedState = [e,
    t
  ], e)
}

function Kc(e, t) {
  var n = be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ms(t, r[1]) ? r[0] : (e = e(), n
    .memoizedState = [e, t], e)
}

function Gc(e, t, n) {
  return Gt & 21 ? (Ke(n, t) || (n = qu(), K.lanes |= n, Yt |= n, e
    .baseState = !0), t) : (e.baseState && (e.baseState = !1, ye = !0), e
    .memoizedState = n)
}

function Um(e, t) {
  var n = b;
  b = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = kl.transition;
  kl.transition = {};
  try {
    e(!1), t()
  } finally {
    b = n, kl.transition = r
  }
}

function Yc() {
  return be()
    .memoizedState
}

function bm(e, t, n) {
  var r = jt(e);
  if (n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Xc(e)) Zc(t, n);
  else if (n = Lc(e, t, n, r), n !== null) {
    var o = me();
    Qe(n, e, r, o), Jc(n, t, r)
  }
}

function $m(e, t, n) {
  var r = jt(e),
    o = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
  if (Xc(e)) Zc(t, o);
  else {
    var l = e.alternate;
    if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t
        .lastRenderedReducer, l !== null)) try {
      var i = t.lastRenderedState,
        s = l(i, n);
      if (o.hasEagerState = !0, o.eagerState = s, Ke(s, i)) {
        var a = t.interleaved;
        a === null ? (o.next = o, us(t)) : (o.next = a.next, a.next = o), t
          .interleaved = o;
        return
      }
    } catch {} finally {}
    n = Lc(e, t, o, r), n !== null && (o = me(), Qe(n, e, r, o), Jc(n, t, r))
  }
}

function Xc(e) {
  var t = e.alternate;
  return e === K || t !== null && t === K
}

function Zc(e, t) {
  qn = To = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Jc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Yi(e, n)
  }
}
var _o = {
    readContext: Ue,
    useCallback: ue,
    useContext: ue,
    useEffect: ue,
    useImperativeHandle: ue,
    useInsertionEffect: ue,
    useLayoutEffect: ue,
    useMemo: ue,
    useReducer: ue,
    useRef: ue,
    useState: ue,
    useDebugValue: ue,
    useDeferredValue: ue,
    useTransition: ue,
    useMutableSource: ue,
    useSyncExternalStore: ue,
    useId: ue,
    unstable_isNewReconciler: !1
  },
  Vm = {
    readContext: Ue,
    useCallback: function(e, t) {
      return Xe()
        .memoizedState = [e, t === void 0 ? null : t], e
    },
    useContext: Ue,
    useEffect: Ta,
    useImperativeHandle: function(e, t, n) {
      return n = n != null ? n.concat([e]) : null, to(4194308, 4, Wc.bind(
        null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
      return to(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
      return to(4, 2, e, t)
    },
    useMemo: function(e, t) {
      var n = Xe();
      return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
    },
    useReducer: function(e, t, n) {
      var r = Xe();
      return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t,
        e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
        }, r.queue = e, e = e.dispatch = bm.bind(null, K, e), [r
          .memoizedState, e
        ]
    },
    useRef: function(e) {
      var t = Xe();
      return e = {
        current: e
      }, t.memoizedState = e
    },
    useState: Pa,
    useDebugValue: ys,
    useDeferredValue: function(e) {
      return Xe()
        .memoizedState = e
    },
    useTransition: function() {
      var e = Pa(!1),
        t = e[0];
      return e = Um.bind(null, e[1]), Xe()
        .memoizedState = e, [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
      var r = K,
        o = Xe();
      if (H) {
        if (n === void 0) throw Error(k(407));
        n = n()
      } else {
        if (n = t(), re === null) throw Error(k(349));
        Gt & 30 || Ac(r, t, n)
      }
      o.memoizedState = n;
      var l = {
        value: n,
        getSnapshot: t
      };
      return o.queue = l, Ta(Fc.bind(null, r, l, e), [e]), r.flags |= 2048,
        xr(9, Dc.bind(null, r, l, n, t), void 0, null), n
    },
    useId: function() {
      var e = Xe(),
        t = re.identifierPrefix;
      if (H) {
        var n = lt,
          r = ot;
        n = (r & ~(1 << 32 - He(r) - 1))
          .toString(32) + n, t = ":" + t + "R" + n, n = gr++, 0 < n && (t +=
            "H" + n.toString(32)), t += ":"
      } else n = Fm++, t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
  },
  Bm = {
    readContext: Ue,
    useCallback: Qc,
    useContext: Ue,
    useEffect: gs,
    useImperativeHandle: Hc,
    useInsertionEffect: Vc,
    useLayoutEffect: Bc,
    useMemo: Kc,
    useReducer: Cl,
    useRef: $c,
    useState: function() {
      return Cl(yr)
    },
    useDebugValue: ys,
    useDeferredValue: function(e) {
      var t = be();
      return Gc(t, ee.memoizedState, e)
    },
    useTransition: function() {
      var e = Cl(yr)[0],
        t = be()
        .memoizedState;
      return [e, t]
    },
    useMutableSource: Oc,
    useSyncExternalStore: zc,
    useId: Yc,
    unstable_isNewReconciler: !1
  },
  Wm = {
    readContext: Ue,
    useCallback: Qc,
    useContext: Ue,
    useEffect: gs,
    useImperativeHandle: Hc,
    useInsertionEffect: Vc,
    useLayoutEffect: Bc,
    useMemo: Kc,
    useReducer: Nl,
    useRef: $c,
    useState: function() {
      return Nl(yr)
    },
    useDebugValue: ys,
    useDeferredValue: function(e) {
      var t = be();
      return ee === null ? t.memoizedState = e : Gc(t, ee.memoizedState, e)
    },
    useTransition: function() {
      var e = Nl(yr)[0],
        t = be()
        .memoizedState;
      return [e, t]
    },
    useMutableSource: Oc,
    useSyncExternalStore: zc,
    useId: Yc,
    unstable_isNewReconciler: !1
  };

function Ve(e, t) {
  if (e && e.defaultProps) {
    t = G({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t
  }
  return t
}

function di(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : G({}, t, n), e
    .memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ho = {
  isMounted: function(e) {
    return (e = e._reactInternals) ? qt(e) === e : !1
  },
  enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = me(),
      o = jt(e),
      l = it(r, o);
    l.payload = t, n != null && (l.callback = n), t = Tt(e, l, o), t !==
      null && (Qe(t, e, o, r), qr(t, e, o))
  },
  enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = me(),
      o = jt(e),
      l = it(r, o);
    l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Tt(e, l,
      o), t !== null && (Qe(t, e, o, r), qr(t, e, o))
  },
  enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = me(),
      r = jt(e),
      o = it(n, r);
    o.tag = 2, t != null && (o.callback = t), t = Tt(e, o, r), t !== null &&
      (Qe(t, e, r, n), qr(t, e, r))
  }
};

function _a(e, t, n, r, o, l, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e
    .shouldComponentUpdate(r, l, i) : t.prototype && t.prototype
    .isPureReactComponent ? !dr(n, r) || !dr(o, l) : !0
}

function qc(e, t, n) {
  var r = !1,
    o = It,
    l = t.contextType;
  return typeof l == "object" && l !== null ? l = Ue(l) : (o = we(t) ? Qt : fe
      .current, r = t.contextTypes, l = (r = r != null) ? kn(e, o) : It), t =
    new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t
    .state : null, t.updater = Ho, e.stateNode = t, t._reactInternals = e, r &&
    (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e
      .__reactInternalMemoizedMaskedChildContext = l), t
}

function ja(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t
    .componentWillReceiveProps(n, r), typeof t
    .UNSAFE_componentWillReceiveProps == "function" && t
    .UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ho
    .enqueueReplaceState(t, t.state, null)
}

function fi(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, cs(e);
  var l = t.contextType;
  typeof l == "object" && l !== null ? o.context = Ue(l) : (l = we(t) ? Qt : fe
      .current, o.context = kn(e, l)), o.state = e.memoizedState, l = t
    .getDerivedStateFromProps, typeof l == "function" && (di(e, t, l, n), o
      .state = e.memoizedState), typeof t.getDerivedStateFromProps ==
    "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o
    .UNSAFE_componentWillMount != "function" && typeof o.componentWillMount !=
    "function" || (t = o.state, typeof o.componentWillMount == "function" && o
      .componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" &&
      o.UNSAFE_componentWillMount(), t !== o.state && Ho.enqueueReplaceState(o,
        o.state, null), No(e, n, o, r), o.state = e.memoizedState), typeof o
    .componentDidMount == "function" && (e.flags |= 4194308)
}

function Tn(e, t) {
  try {
    var n = "",
      r = t;
    do n += yp(r), r = r.return; while (r);
    var o = n
  } catch (l) {
    o = `
Error generating stack: ` + l.message + `
` + l.stack
  }
  return {
    value: e,
    source: t,
    stack: o,
    digest: null
  }
}

function Pl(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n ?? null,
    digest: t ?? null
  }
}

function pi(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function() {
      throw n
    })
  }
}
var Hm = typeof WeakMap == "function" ? WeakMap : Map;

function ed(e, t, n) {
  n = it(-1, n), n.tag = 3, n.payload = {
    element: null
  };
  var r = t.value;
  return n.callback = function() {
    Ro || (Ro = !0, ki = r), pi(e, t)
  }, n
}

function td(e, t, n) {
  n = it(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o)
    }, n.callback = function() {
      pi(e, t)
    }
  }
  var l = e.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback =
    function() {
      pi(e, t), typeof r != "function" && (_t === null ? _t = new Set([
        this
      ]) : _t.add(this));
      var i = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: i !== null ? i : ""
      })
    }), n
}

function Ra(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Hm;
    var o = new Set;
    r.set(t, o)
  } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
  o.has(n) || (o.add(n), e = lh.bind(null, e, t, n), t.then(e, e))
}

function La(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t
        .dehydrated !== null : !0), t) return e;
    e = e.return
  } while (e !== null);
  return null
}

function Ia(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |=
    65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag ===
      1 && (n.alternate === null ? n.tag = 17 : (t = it(-1, 1), t.tag = 2, Tt(
        n, t, 1))), n.lanes |= 1), e)
}
var Qm = dt.ReactCurrentOwner,
  ye = !1;

function pe(e, t, n, r) {
  t.child = e === null ? Rc(t, null, n, r) : Nn(t, e.child, n, r)
}

function Ma(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return yn(t, o), r = hs(e, t, n, r, l, o), n = vs(), e !== null && !ye ? (t
    .updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, ct(e, t, o)
  ) : (H && n && rs(t), t.flags |= 1, pe(e, t, r, o), t.child)
}

function Oa(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" && !Ps(l) && l.defaultProps === void 0 && n
      .compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l,
        nd(e, t, l, r, o)) : (e = lo(n.type, null, r, t, t.mode, o), e.ref = t
        .ref, e.return = t, t.child = e)
  }
  if (l = e.child, !(e.lanes & o)) {
    var i = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : dr, n(i, r) && e.ref === t.ref)
      return ct(e, t, o)
  }
  return t.flags |= 1, e = Rt(l, r), e.ref = t.ref, e.return = t, t.child = e
}

function nd(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (dr(l, r) && e.ref === t.ref)
      if (ye = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags &
        131072 && (ye = !0);
      else return t.lanes = e.lanes, ct(e, t, o)
  }
  return mi(e, t, n, r, o)
}

function rd(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1)) t.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, $(pn, Ne), Ne |= n;
    else {
      if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t
        .lanes = t.childLanes = 1073741824, t.memoizedState = {
          baseLanes: e,
          cachePool: null,
          transitions: null
        }, t.updateQueue = null, $(pn, Ne), Ne |= e, null;
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, r = l !== null ? l.baseLanes : n, $(pn, Ne), Ne |= r
    }
  else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, $(pn,
    Ne), Ne |= r;
  return pe(e, t, o, n), t.child
}

function od(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t
    .flags |= 2097152)
}

function mi(e, t, n, r, o) {
  var l = we(n) ? Qt : fe.current;
  return l = kn(t, l), yn(t, o), n = hs(e, t, n, r, l, o), r = vs(), e !==
    null && !ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~
      o, ct(e, t, o)) : (H && r && rs(t), t.flags |= 1, pe(e, t, n, o), t.child)
}

function za(e, t, n, r, o) {
  if (we(n)) {
    var l = !0;
    wo(t)
  } else l = !1;
  if (yn(t, o), t.stateNode === null) no(e, t), qc(t, n, r), fi(t, n, r, o),
    r = !0;
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var a = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null ? u = Ue(u) : (u = we(n) ? Qt : fe
      .current, u = kn(t, u));
    var f = n.getDerivedStateFromProps,
      p = typeof f == "function" || typeof i.getSnapshotBeforeUpdate ==
      "function";
    p || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i
      .componentWillReceiveProps != "function" || (s !== r || a !== u) && ja(t,
        i, r, u), gt = !1;
    var v = t.memoizedState;
    i.state = v, No(t, r, i, o), a = t.memoizedState, s !== r || v !== a || xe
      .current || gt ? (typeof f == "function" && (di(t, n, f, r), a = t
        .memoizedState), (s = gt || _a(t, n, s, r, v, a, u)) ? (p || typeof i
        .UNSAFE_componentWillMount != "function" && typeof i
        .componentWillMount != "function" || (typeof i.componentWillMount ==
          "function" && i.componentWillMount(), typeof i
          .UNSAFE_componentWillMount == "function" && i
          .UNSAFE_componentWillMount()), typeof i.componentDidMount ==
        "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount ==
        "function" && (t.flags |= 4194308), t.memoizedProps = r, t
        .memoizedState = a), i.props = r, i.state = a, i.context = u, r = s) : (
        typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1
      )
  } else {
    i = t.stateNode, Ic(e, t), s = t.memoizedProps, u = t.type === t
      .elementType ? s : Ve(t.type, s), i.props = u, p = t.pendingProps, v = i
      .context, a = n.contextType, typeof a == "object" && a !== null ? a = Ue(
        a) : (a = we(n) ? Qt : fe.current, a = kn(t, a));
    var S = n.getDerivedStateFromProps;
    (f = typeof S == "function" || typeof i.getSnapshotBeforeUpdate ==
      "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" &&
      typeof i.componentWillReceiveProps != "function" || (s !== p || v !==
        a) && ja(t, i, r, a), gt = !1, v = t.memoizedState, i.state = v, No(t,
        r,
        i, o);
    var E = t.memoizedState;
    s !== p || v !== E || xe.current || gt ? (typeof S == "function" && (di(t,
      n, S, r), E = t.memoizedState), (u = gt || _a(t, n, u, r, v, E, a) ||
      !1) ? (f || typeof i.UNSAFE_componentWillUpdate != "function" &&
      typeof i.componentWillUpdate != "function" || (typeof i
        .componentWillUpdate == "function" && i.componentWillUpdate(r, E,
          a), typeof i.UNSAFE_componentWillUpdate == "function" && i
        .UNSAFE_componentWillUpdate(r, E, a)), typeof i
      .componentDidUpdate == "function" && (t.flags |= 4), typeof i
      .getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (
      typeof i.componentDidUpdate != "function" || s === e.memoizedProps &&
      v === e.memoizedState || (t.flags |= 4), typeof i
      .getSnapshotBeforeUpdate != "function" || s === e.memoizedProps &&
      v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t
      .memoizedState = E), i.props = r, i.state = E, i.context = a, r = u) : (
      typeof i.componentDidUpdate != "function" || s === e.memoizedProps &&
      v === e.memoizedState || (t.flags |= 4), typeof i
      .getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && v ===
      e.memoizedState || (t.flags |= 1024), r = !1)
  }
  return hi(e, t, n, r, l, o)
}

function hi(e, t, n, r, o, l) {
  od(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && wa(t, n, !1), ct(e, t, l);
  r = t.stateNode, Qm.current = t;
  var s = i && typeof n.getDerivedStateFromError != "function" ? null : r
    .render();
  return t.flags |= 1, e !== null && i ? (t.child = Nn(t, e.child, null, l), t
      .child = Nn(t, null, s, l)) : pe(e, t, s, l), t.memoizedState = r.state,
    o && wa(t, n, !0), t.child
}

function ld(e) {
  var t = e.stateNode;
  t.pendingContext ? xa(e, t.pendingContext, t.pendingContext !== t.context) : t
    .context && xa(e, t.context, !1), ds(e, t.containerInfo)
}

function Aa(e, t, n, r, o) {
  return Cn(), ls(o), t.flags |= 256, pe(e, t, n, r), t.child
}
var vi = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0
};

function gi(e) {
  return {
    baseLanes: e,
    cachePool: null,
    transitions: null
  }
}

function id(e, t, n) {
  var r = t.pendingProps,
    o = Q.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    s;
  if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !==
      0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !==
      null) && (o |= 1), $(Q, o & 1), e === null) return ui(t), e = t
    .memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode &
      1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
      null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child,
      i = {
        mode: "hidden",
        children: i
      }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) :
      l = Go(i, r, 0, null), e = Ht(e, r, n, null), l.return = t, e.return =
      t, l.sibling = e, t.child = l, t.child.memoizedState = gi(n), t
      .memoizedState = vi, e) : xs(t, i));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return Km(e, t, i, r, s, o, n);
  if (l) {
    l = r.fallback, i = t.mode, o = e.child, s = o.sibling;
    var a = {
      mode: "hidden",
      children: r.children
    };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r
        .pendingProps = a, t.deletions = null) : (r = Rt(o, a), r.subtreeFlags =
        o.subtreeFlags & 14680064), s !== null ? l = Rt(s, l) : (l = Ht(l, i, n,
        null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t
      .child = r, r = l, l = t.child, i = e.child.memoizedState, i = i ===
      null ? gi(n) : {
        baseLanes: i.baseLanes | n,
        cachePool: null,
        transitions: i.transitions
      }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t
      .memoizedState = vi, r
  }
  return l = e.child, e = l.sibling, r = Rt(l, {
      mode: "visible",
      children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !==
    null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) :
      n.push(e)), t.child = r, t.memoizedState = null, r
}

function xs(e, t) {
  return t = Go({
    mode: "visible",
    children: t
  }, e.mode, 0, null), t.return = e, e.child = t
}

function Vr(e, t, n, r) {
  return r !== null && ls(r), Nn(t, e.child, null, n), e = xs(t, t.pendingProps
    .children), e.flags |= 2, t.memoizedState = null, e
}

function Km(e, t, n, r, o, l, i) {
  if (n) return t.flags & 256 ? (t.flags &= -257, r = Pl(Error(k(422))), Vr(e,
    t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |=
    128, null) : (l = r.fallback, o = t.mode, r = Go({
      mode: "visible",
      children: r.children
    }, o, 0, null), l = Ht(l, o, i, null), l.flags |= 2, r.return = t, l
    .return = t, r.sibling = l, t.child = r, t.mode & 1 && Nn(t, e.child,
      null, i), t.child.memoizedState = gi(i), t.memoizedState = vi, l);
  if (!(t.mode & 1)) return Vr(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
    return r = s, l = Error(k(419)), r = Pl(l, r, void 0), Vr(e, t, i, r)
  }
  if (s = (i & e.childLanes) !== 0, ye || s) {
    if (r = re, r !== null) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0
      }
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l
        .retryLane = o, ut(e, o), Qe(r, e, o, -1))
    }
    return Ns(), r = Pl(Error(k(421))), Vr(e, t, i, r)
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ih.bind(null,
    e), o._reactRetry = t, null) : (e = l.treeContext, Te = Pt(o.nextSibling),
    _e = t, H = !0, We = null, e !== null && (ze[Ae++] = ot, ze[Ae++] = lt,
      ze[Ae++] = Kt, ot = e.id, lt = e.overflow, Kt = t), t = xs(t, r
      .children), t.flags |= 4096, t)
}

function Da(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ci(e.return, t, n)
}

function Tl(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = {
    isBackwards: t,
    rendering: null,
    renderingStartTime: 0,
    last: r,
    tail: n,
    tailMode: o
  } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l
    .last = r, l.tail = n, l.tailMode = o)
}

function sd(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if (pe(e, t, r.children, n), r = Q.current, r & 2) r = r & 1 | 2, t.flags |=
    128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
      if (e.tag === 13) e.memoizedState !== null && Da(e, n, t);
      else if (e.tag === 19) Da(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue
      }
      if (e === t) break e;
      for (; e.sibling === null;) {
        if (e.return === null || e.return === t) break e;
        e = e.return
      }
      e.sibling.return = e.return, e = e.sibling
    }
    r &= 1
  }
  if ($(Q, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null &&
        Po(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n
        .sibling = null), Tl(t, !1, o, n, l);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null;) {
        if (e = o.alternate, e !== null && Po(e) === null) {
          t.child = o;
          break
        }
        e = o.sibling, o.sibling = n, n = o, o = e
      }
      Tl(t, !0, n, null, l);
      break;
    case "together":
      Tl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null
  }
  return t.child
}

function no(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t
    .flags |= 2)
}

function ct(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Yt |= t.lanes, !(n & t
      .childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (e = t.child, n = Rt(e, e.pendingProps), t.child = n, n.return = t; e
      .sibling !== null;) e = e.sibling, n = n.sibling = Rt(e, e.pendingProps),
      n.return = t;
    n.sibling = null
  }
  return t.child
}

function Gm(e, t, n) {
  switch (t.tag) {
    case 3:
      ld(t), Cn();
      break;
    case 5:
      Mc(t);
      break;
    case 1:
      we(t.type) && wo(t);
      break;
    case 4:
      ds(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      $(ko, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? ($(Q,
        Q.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? id(
        e, t, n) : ($(Q, Q.current & 1), e = ct(e, t, n), e !== null ? e
        .sibling : null);
      $(Q, Q.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return sd(e, t, n);
        t.flags |= 128
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null,
          o.lastEffect = null), $(Q, Q.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, rd(e, t, n)
  }
  return ct(e, t, n)
}
var ad, yi, ud, cd;
ad = function(e, t) {
  for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue
    }
    if (n === t) break;
    for (; n.sibling === null;) {
      if (n.return === null || n.return === t) return;
      n = n.return
    }
    n.sibling.return = n.return, n = n.sibling
  }
};
yi = function() {};
ud = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Bt(qe.current);
    var l = null;
    switch (n) {
      case "input":
        o = bl(e, o), r = bl(e, r), l = [];
        break;
      case "select":
        o = G({}, o, {
          value: void 0
        }), r = G({}, r, {
          value: void 0
        }), l = [];
        break;
      case "textarea":
        o = Bl(e, o), r = Bl(e, r), l = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e
          .onclick = yo)
    }
    Hl(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
        } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !==
          "suppressContentEditableWarning" && u !==
          "suppressHydrationWarning" && u !== "autoFocus" && (or
            .hasOwnProperty(u) ? l || (l = []) : (l = l || [])
            .push(u, null));
    for (u in r) {
      var a = r[u];
      if (s = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== s && (
          a != null || s != null))
        if (u === "style")
          if (s) {
            for (i in s) !s.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (
              n || (n = {}), n[i] = "");
            for (i in a) a.hasOwnProperty(i) && s[i] !== a[i] && (n || (
              n = {}), n[i] = a[i])
          } else n || (l || (l = []), l.push(u, n)), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s =
          s ? s.__html : void 0, a != null && s !== a && (l = l || [])
          .push(u, a)) : u === "children" ? typeof a != "string" &&
        typeof a != "number" || (l = l || [])
        .push(u, "" + a) : u !== "suppressContentEditableWarning" && u !==
        "suppressHydrationWarning" && (or.hasOwnProperty(u) ? (a != null &&
            u === "onScroll" && B("scroll", e), l || s === a || (l = [])) : (
            l = l || [])
          .push(u, a))
    }
    n && (l = l || [])
      .push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4)
  }
};
cd = function(e, t, n, r) {
  n !== r && (t.flags |= 4)
};

function bn(e, t) {
  if (!H) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t
        .sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n
        .sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling =
        null : r.sibling = null
  }
}

function ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o
      .subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o
      .sibling;
  else
    for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o
      .subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t
}

function Ym(e, t, n) {
  var r = t.pendingProps;
  switch (os(t), t.tag) {
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
      return ce(t), null;
    case 1:
      return we(t.type) && xo(), ce(t), null;
    case 3:
      return r = t.stateNode, Pn(), W(xe), W(fe), ps(), r.pendingContext && (r
        .context = r.pendingContext, r.pendingContext = null), (e === null ||
        e.child === null) && (br(t) ? t.flags |= 4 : e === null || e
        .memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
          We !== null && (Pi(We), We = null))), yi(e, t), ce(t), null;
    case 5:
      fs(t);
      var o = Bt(vr.current);
      if (n = t.type, e !== null && t.stateNode != null) ud(e, t, n, r, o), e
        .ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return ce(t), null
        }
        if (e = Bt(qe.current), br(t)) {
          r = t.stateNode, n = t.type;
          var l = t.memoizedProps;
          switch (r[Ze] = t, r[mr] = l, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Kn.length; o++) B(Kn[o], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", r), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              Qs(r, l), B("invalid", r);
              break;
            case "select":
              r._wrapperState = {
                wasMultiple: !!l.multiple
              }, B("invalid", r);
              break;
            case "textarea":
              Gs(r, l), B("invalid", r)
          }
          Hl(n, l), o = null;
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var s = l[i];
              i === "children" ? typeof s == "string" ? r.textContent !== s && (
                  l.suppressHydrationWarning !== !0 && Ur(r.textContent, s, e),
                  o = ["children", s]) : typeof s == "number" && r
                .textContent !== "" + s && (l.suppressHydrationWarning !== !0 &&
                  Ur(r.textContent, s, e), o = ["children", "" + s]) : or
                .hasOwnProperty(i) && s != null && i === "onScroll" && B(
                  "scroll", r)
            } switch (n) {
            case "input":
              Lr(r), Ks(r, l, !0);
              break;
            case "textarea":
              Lr(r), Ys(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = yo)
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e ===
            "http://www.w3.org/1999/xhtml" && (e = Fu(n)), e ===
            "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i
              .createElement("div"), e.innerHTML = "<script><\/script>", e = e
              .removeChild(e.firstChild)) : typeof r.is == "string" ? e = i
            .createElement(n, {
              is: r.is
            }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ?
              i.multiple = !0 : r.size && (i.size = r.size))) : e = i
            .createElementNS(e, n), e[Ze] = t, e[mr] = r, ad(e, t, !1, !1), t
            .stateNode = e;
          e: {
            switch (i = Ql(n, r), n) {
              case "dialog":
                B("cancel", e), B("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Kn.length; o++) B(Kn[o], e);
                o = r;
                break;
              case "source":
                B("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                B("error", e), B("load", e), o = r;
                break;
              case "details":
                B("toggle", e), o = r;
                break;
              case "input":
                Qs(e, r), o = bl(e, r), B("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = {
                  wasMultiple: !!r.multiple
                }, o = G({}, r, {
                  value: void 0
                }), B("invalid", e);
                break;
              case "textarea":
                Gs(e, r), o = Bl(e, r), B("invalid", e);
                break;
              default:
                o = r
            }
            Hl(n, o),
            s = o;
            for (l in s)
              if (s.hasOwnProperty(l)) {
                var a = s[l];
                l === "style" ? $u(e, a) : l === "dangerouslySetInnerHTML" ? (
                    a = a ? a.__html : void 0, a != null && Uu(e, a)) : l ===
                  "children" ? typeof a == "string" ? (n !== "textarea" ||
                    a !== "") && lr(e, a) : typeof a == "number" && lr(e, "" +
                    a) : l !== "suppressContentEditableWarning" && l !==
                  "suppressHydrationWarning" && l !== "autoFocus" && (or
                    .hasOwnProperty(l) ? a != null && l === "onScroll" && B(
                      "scroll", e) : a != null && Bi(e, l, a, i))
              } switch (n) {
              case "input":
                Lr(e), Ks(e, r, !1);
                break;
              case "textarea":
                Lr(e), Ys(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Lt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, l = r.value, l != null ? mn(e, !!r
                  .multiple, l, !1) : r.defaultValue != null && mn(e, !!r
                  .multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = yo)
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
      }
      return ce(t), null;
    case 6:
      if (e && t.stateNode != null) cd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (n = Bt(vr.current), Bt(qe.current), br(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ze] = t, (l = r
              .nodeValue !== n) && (e = _e, e !== null)) switch (e.tag) {
            case 3:
              Ur(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Ur(r
                .nodeValue, n, (e.mode & 1) !== 0)
          }
          l && (t.flags |= 4)
        } else r = (n.nodeType === 9 ? n : n.ownerDocument)
          .createTextNode(r), r[Ze] = t, t.stateNode = r
      }
      return ce(t), null;
    case 13:
      if (W(Q), r = t.memoizedState, e === null || e.memoizedState !== null && e
        .memoizedState.dehydrated !== null) {
        if (H && Te !== null && t.mode & 1 && !(t.flags & 128)) _c(), Cn(), t
          .flags |= 98560, l = !1;
        else if (l = br(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!l) throw Error(k(318));
            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l)
              throw Error(k(317));
            l[Ze] = t
          } else Cn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |=
            4;
          ce(t), l = !1
        } else We !== null && (Pi(We), We = null), l = !0;
        if (!l) return t.flags & 65536 ? t : null
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !==
        null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t
        .mode & 1 && (e === null || Q.current & 1 ? te === 0 && (te = 3) :
          Ns())), t.updateQueue !== null && (t.flags |= 4), ce(t), null);
    case 4:
      return Pn(), yi(e, t), e === null && fr(t.stateNode.containerInfo), ce(t),
        null;
    case 10:
      return as(t.type._context), ce(t), null;
    case 17:
      return we(t.type) && xo(), ce(t), null;
    case 19:
      if (W(Q), l = t.memoizedState, l === null) return ce(t), null;
      if (r = (t.flags & 128) !== 0, i = l.rendering, i === null)
        if (r) bn(l, !1);
        else {
          if (te !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null;) {
              if (i = Po(e), i !== null) {
                for (t.flags |= 128, bn(l, !1), r = i.updateQueue, r !== null &&
                  (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n,
                  n = t.child; n !== null;) l = n, e = r, l.flags &= 14680066,
                  i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e,
                    l.child = null, l.subtreeFlags = 0, l.memoizedProps = null,
                    l.memoizedState = null, l.updateQueue = null, l
                    .dependencies = null, l.stateNode = null) : (l.childLanes =
                    i.childLanes, l.lanes = i.lanes, l.child = i.child, l
                    .subtreeFlags = 0, l.deletions = null, l.memoizedProps = i
                    .memoizedProps, l.memoizedState = i.memoizedState, l
                    .updateQueue = i.updateQueue, l.type = i.type, e = i
                    .dependencies, l.dependencies = e === null ? null : {
                      lanes: e.lanes,
                      firstContext: e.firstContext
                    }), n = n.sibling;
                return $(Q, Q.current & 1 | 2), t.child
              }
              e = e.sibling
            }
          l.tail !== null && J() > _n && (t.flags |= 128, r = !0, bn(l, !1), t
            .lanes = 4194304)
        }
      else {
        if (!r)
          if (e = Po(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t
                .updateQueue = n, t.flags |= 4), bn(l, !0), l.tail === null && l
              .tailMode === "hidden" && !i.alternate && !H) return ce(t), null
          } else 2 * J() - l.renderingStartTime > _n && n !== 1073741824 && (t
            .flags |= 128, r = !0, bn(l, !1), t.lanes = 4194304);
        l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !==
          null ? n.sibling = i : t.child = i, l.last = i)
      }
      return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling,
        l.renderingStartTime = J(), t.sibling = null, n = Q.current, $(Q, r ?
          n & 1 | 2 : n & 1), t) : (ce(t), null);
    case 22:
    case 23:
      return Cs(), r = t.memoizedState !== null, e !== null && e
        .memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ?
        Ne & 1073741824 && (ce(t), t.subtreeFlags & 6 && (t.flags |= 8192)) :
        ce(t), null;
    case 24:
      return null;
    case 25:
      return null
  }
  throw Error(k(156, t.tag))
}

function Xm(e, t) {
  switch (os(t), t.tag) {
    case 1:
      return we(t.type) && xo(), e = t.flags, e & 65536 ? (t.flags = e & -
        65537 | 128, t) : null;
    case 3:
      return Pn(), W(xe), W(fe), ps(), e = t.flags, e & 65536 && !(e & 128) ? (t
        .flags = e & -65537 | 128, t) : null;
    case 5:
      return fs(t), null;
    case 13:
      if (W(Q), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(k(340));
        Cn()
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return W(Q), null;
    case 4:
      return Pn(), null;
    case 10:
      return as(t.type._context), null;
    case 22:
    case 23:
      return Cs(), null;
    case 24:
      return null;
    default:
      return null
  }
}
var Br = !1,
  de = !1,
  Zm = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;

function fn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function") try {
      n(null)
    } catch (r) {
      Z(e, t, r)
    } else n.current = null
}

function xi(e, t, n) {
  try {
    n()
  } catch (r) {
    Z(e, t, r)
  }
}
var Fa = !1;

function Jm(e, t) {
  if (ni = ho, e = hc(), ns(e)) {
    if ("selectionStart" in e) var n = {
      start: e.selectionStart,
      end: e.selectionEnd
    };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset,
          l = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, l.nodeType
        } catch {
          n = null;
          break e
        }
        var i = 0,
          s = -1,
          a = -1,
          u = 0,
          f = 0,
          p = e,
          v = null;
        t: for (;;) {
          for (var S; p !== n || o !== 0 && p.nodeType !== 3 || (s = i + o),
            p !== l || r !== 0 && p.nodeType !== 3 || (a = i + r), p
            .nodeType === 3 && (i += p.nodeValue.length), (S = p
              .firstChild) !== null;) v = p, p = S;
          for (;;) {
            if (p === e) break t;
            if (v === n && ++u === o && (s = i), v === l && ++f === r && (
                a = i), (S = p.nextSibling) !== null) break;
            p = v, v = p.parentNode
          }
          p = S
        }
        n = s === -1 || a === -1 ? null : {
          start: s,
          end: a
        }
      } else n = null
    }
    n = n || {
      start: 0,
      end: 0
    }
  } else n = null;
  for (ri = {
      focusedElem: e,
      selectionRange: n
    }, ho = !1, j = t; j !== null;)
    if (t = j, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e
      .return = t, j = e;
    else
      for (; j !== null;) {
        t = j;
        try {
          var E = t.alternate;
          if (t.flags & 1024) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (E !== null) {
                var y = E.memoizedProps,
                  x = E.memoizedState,
                  d = t.stateNode,
                  c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? y :
                    Ve(t.type, y), x);
                d.__reactInternalSnapshotBeforeUpdate = c
              }
              break;
            case 3:
              var m = t.stateNode.containerInfo;
              m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m
                .documentElement && m.removeChild(m.documentElement);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(k(163))
          }
        } catch (w) {
          Z(t, t.return, w)
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, j = e;
          break
        }
        j = t.return
      }
  return E = Fa, Fa = !1, E
}

function er(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        o.destroy = void 0, l !== void 0 && xi(t, n, l)
      }
      o = o.next
    } while (o !== r)
  }
}

function Qo(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}

function wi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n
    }
    typeof t == "function" ? t(e) : t.current = e
  }
}

function dd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, dd(t)), e.child = null, e.deletions = null,
    e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[
      Ze], delete t[mr], delete t[ii], delete t[Om], delete t[zm])), e
    .stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps =
    null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e
    .updateQueue = null
}

function fd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Ua(e) {
  e: for (;;) {
    for (; e.sibling === null;) {
      if (e.return === null || fd(e.return)) return null;
      e = e.return
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !==
      6 && e.tag !== 18;) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}

function Si(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode
    .insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n
        .parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n
      ._reactRootContainer, n != null || t.onclick !== null || (t.onclick = yo)
    );
  else if (r !== 4 && (e = e.child, e !== null))
    for (Si(e, t, n), e = e.sibling; e !== null;) Si(e, t, n), e = e.sibling
}

function Ei(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n
    .appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Ei(e, t, n), e = e.sibling; e !== null;) Ei(e, t, n), e = e.sibling
}
var ie = null,
  Be = !1;

function ft(e, t, n) {
  for (n = n.child; n !== null;) pd(e, t, n), n = n.sibling
}

function pd(e, t, n) {
  if (Je && typeof Je.onCommitFiberUnmount == "function") try {
    Je.onCommitFiberUnmount(Fo, n)
  } catch {}
  switch (n.tag) {
    case 5:
      de || fn(n, t);
    case 6:
      var r = ie,
        o = Be;
      ie = null, ft(e, t, n), ie = r, Be = o, ie !== null && (Be ? (e = ie, n =
        n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e
        .removeChild(n)) : ie.removeChild(n.stateNode));
      break;
    case 18:
      ie !== null && (Be ? (e = ie, n = n.stateNode, e.nodeType === 8 ? wl(e
        .parentNode, n) : e.nodeType === 1 && wl(e, n), ur(e)) : wl(ie, n
        .stateNode));
      break;
    case 4:
      r = ie, o = Be, ie = n.stateNode.containerInfo, Be = !0, ft(e, t, n), ie =
        r, Be = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!de && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !==
          null))) {
        o = r = r.next;
        do {
          var l = o,
            i = l.destroy;
          l = l.tag, i !== void 0 && (l & 2 || l & 4) && xi(n, t, i), o = o.next
        } while (o !== r)
      }
      ft(e, t, n);
      break;
    case 1:
      if (!de && (fn(n, t), r = n.stateNode, typeof r.componentWillUnmount ==
          "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r
          .componentWillUnmount()
      } catch (s) {
        Z(n, t, s)
      }
      ft(e, t, n);
      break;
    case 21:
      ft(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (de = (r = de) || n.memoizedState !== null, ft(e, t, n), de =
        r) : ft(e, t, n);
      break;
    default:
      ft(e, t, n)
  }
}

function ba(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Zm), t.forEach(function(r) {
      var o = sh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o))
    })
  }
}

function $e(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          i = t,
          s = i;
        e: for (; s !== null;) {
          switch (s.tag) {
            case 5:
              ie = s.stateNode, Be = !1;
              break e;
            case 3:
              ie = s.stateNode.containerInfo, Be = !0;
              break e;
            case 4:
              ie = s.stateNode.containerInfo, Be = !0;
              break e
          }
          s = s.return
        }
        if (ie === null) throw Error(k(160));
        pd(l, i, o), ie = null, Be = !1;
        var a = o.alternate;
        a !== null && (a.return = null), o.return = null
      } catch (u) {
        Z(o, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;) md(t, e), t = t.sibling
}

function md(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ($e(t, e), Ye(e), r & 4) {
        try {
          er(3, e, e.return), Qo(3, e)
        } catch (y) {
          Z(e, e.return, y)
        }
        try {
          er(5, e, e.return)
        } catch (y) {
          Z(e, e.return, y)
        }
      }
      break;
    case 1:
      $e(t, e), Ye(e), r & 512 && n !== null && fn(n, n.return);
      break;
    case 5:
      if ($e(t, e), Ye(e), r & 512 && n !== null && fn(n, n.return), e.flags &
        32) {
        var o = e.stateNode;
        try {
          lr(o, "")
        } catch (y) {
          Z(e, e.return, y)
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          s = e.type,
          a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          s === "input" && l.type === "radio" && l.name != null && Au(o, l),
            Ql(s, i);
          var u = Ql(s, l);
          for (i = 0; i < a.length; i += 2) {
            var f = a[i],
              p = a[i + 1];
            f === "style" ? $u(o, p) : f === "dangerouslySetInnerHTML" ? Uu(o,
              p) : f === "children" ? lr(o, p) : Bi(o, f, p, u)
          }
          switch (s) {
            case "input":
              $l(o, l);
              break;
            case "textarea":
              Du(o, l);
              break;
            case "select":
              var v = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!l.multiple;
              var S = l.value;
              S != null ? mn(o, !!l.multiple, S, !1) : v !== !!l.multiple && (
                l.defaultValue != null ? mn(o, !!l.multiple, l.defaultValue,
                  !0) : mn(o, !!l.multiple, l.multiple ? [] : "", !1))
          }
          o[mr] = l
        } catch (y) {
          Z(e, e.return, y)
        }
      }
      break;
    case 6:
      if ($e(t, e), Ye(e), r & 4) {
        if (e.stateNode === null) throw Error(k(162));
        o = e.stateNode, l = e.memoizedProps;
        try {
          o.nodeValue = l
        } catch (y) {
          Z(e, e.return, y)
        }
      }
      break;
    case 3:
      if ($e(t, e), Ye(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          ur(t.containerInfo)
        } catch (y) {
          Z(e, e.return, y)
        }
      break;
    case 4:
      $e(t, e), Ye(e);
      break;
    case 13:
      $e(t, e), Ye(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !==
        null, o.stateNode.isHidden = l, !l || o.alternate !== null && o
        .alternate.memoizedState !== null || (Es = J())), r & 4 && ba(e);
      break;
    case 22:
      if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (de = (u =
          de) || f, $e(t, e), de = u) : $e(t, e), Ye(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !f && e
          .mode & 1)
          for (j = e, f = e.child; f !== null;) {
            for (p = j = f; j !== null;) {
              switch (v = j, S = v.child, v.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  er(4, v, v.return);
                  break;
                case 1:
                  fn(v, v.return);
                  var E = v.stateNode;
                  if (typeof E.componentWillUnmount == "function") {
                    r = v, n = v.return;
                    try {
                      t = r, E.props = t.memoizedProps, E.state = t
                        .memoizedState, E.componentWillUnmount()
                    } catch (y) {
                      Z(r, n, y)
                    }
                  }
                  break;
                case 5:
                  fn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    Va(p);
                    continue
                  }
              }
              S !== null ? (S.return = v, j = S) : Va(p)
            }
            f = f.sibling
          }
        e: for (f = null, p = e;;) {
          if (p.tag === 5) {
            if (f === null) {
              f = p;
              try {
                o = p.stateNode, u ? (l = o.style, typeof l.setProperty ==
                  "function" ? l.setProperty("display", "none",
                    "important") : l.display = "none") : (s = p.stateNode,
                  a =
                  p.memoizedProps.style, i = a != null && a.hasOwnProperty(
                    "display") ? a.display : null, s.style.display = bu(
                    "display", i))
              } catch (y) {
                Z(e, e.return, y)
              }
            }
          } else if (p.tag === 6) {
            if (f === null) try {
              p.stateNode.nodeValue = u ? "" : p.memoizedProps
            } catch (y) {
              Z(e, e.return, y)
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState ===
              null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue
          }
          if (p === e) break e;
          for (; p.sibling === null;) {
            if (p.return === null || p.return === e) break e;
            f === p && (f = null), p = p.return
          }
          f === p && (f = null), p.sibling.return = p.return, p = p.sibling
        }
      }
      break;
    case 19:
      $e(t, e), Ye(e), r & 4 && ba(e);
      break;
    case 21:
      break;
    default:
      $e(t, e), Ye(e)
  }
}

function Ye(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null;) {
          if (fd(n)) {
            var r = n;
            break e
          }
          n = n.return
        }
        throw Error(k(160))
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (lr(o, ""), r.flags &= -33);
          var l = Ua(e);
          Ei(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = Ua(e);
          Si(e, s, i);
          break;
        default:
          throw Error(k(161))
      }
    }
    catch (a) {
      Z(e, e.return, a)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}

function qm(e, t, n) {
  j = e, hd(e)
}

function hd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null;) {
    var o = j,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Br;
      if (!i) {
        var s = o.alternate,
          a = s !== null && s.memoizedState !== null || de;
        s = Br;
        var u = de;
        if (Br = i, (de = a) && !u)
          for (j = o; j !== null;) i = j, a = i.child, i.tag === 22 && i
            .memoizedState !== null ? Ba(o) : a !== null ? (a.return = i, j =
              a) : Ba(o);
        for (; l !== null;) j = l, hd(l), l = l.sibling;
        j = o, Br = s, de = u
      }
      $a(e)
    } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, j = l) : $a(e)
  }
}

function $a(e) {
  for (; j !== null;) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            de || Qo(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !de)
              if (n === null) r.componentDidMount();
              else {
                var o = t.elementType === t.type ? n.memoizedProps : Ve(t
                  .type, n.memoizedProps);
                r.componentDidUpdate(o, n.memoizedState, r
                  .__reactInternalSnapshotBeforeUpdate)
              } var l = t.updateQueue;
            l !== null && Na(t, l, r);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode
              }
              Na(t, i, n)
            }
            break;
          case 5:
            var s = t.stateNode;
            if (n === null && t.flags & 4) {
              n = s;
              var a = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src)
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
              var u = t.alternate;
              if (u !== null) {
                var f = u.memoizedState;
                if (f !== null) {
                  var p = f.dehydrated;
                  p !== null && ur(p)
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
            throw Error(k(163))
        }
        de || t.flags & 512 && wi(t)
      } catch (v) {
        Z(t, t.return, v)
      }
    }
    if (t === e) {
      j = null;
      break
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, j = n;
      break
    }
    j = t.return
  }
}

function Va(e) {
  for (; j !== null;) {
    var t = j;
    if (t === e) {
      j = null;
      break
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, j = n;
      break
    }
    j = t.return
  }
}

function Ba(e) {
  for (; j !== null;) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Qo(4, t)
          } catch (a) {
            Z(t, n, a)
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount()
            } catch (a) {
              Z(t, o, a)
            }
          }
          var l = t.return;
          try {
            wi(t)
          } catch (a) {
            Z(t, l, a)
          }
          break;
        case 5:
          var i = t.return;
          try {
            wi(t)
          } catch (a) {
            Z(t, i, a)
          }
      }
    } catch (a) {
      Z(t, t.return, a)
    }
    if (t === e) {
      j = null;
      break
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, j = s;
      break
    }
    j = t.return
  }
}
var eh = Math.ceil,
  jo = dt.ReactCurrentDispatcher,
  ws = dt.ReactCurrentOwner,
  Fe = dt.ReactCurrentBatchConfig,
  U = 0,
  re = null,
  q = null,
  se = 0,
  Ne = 0,
  pn = At(0),
  te = 0,
  wr = null,
  Yt = 0,
  Ko = 0,
  Ss = 0,
  tr = null,
  ge = null,
  Es = 0,
  _n = 1 / 0,
  nt = null,
  Ro = !1,
  ki = null,
  _t = null,
  Wr = !1,
  St = null,
  Lo = 0,
  nr = 0,
  Ci = null,
  ro = -1,
  oo = 0;

function me() {
  return U & 6 ? J() : ro !== -1 ? ro : ro = J()
}

function jt(e) {
  return e.mode & 1 ? U & 2 && se !== 0 ? se & -se : Dm.transition !== null ? (
    oo === 0 && (oo = qu()), oo) : (e = b, e !== 0 || (e = window.event, e =
    e === void 0 ? 16 : ic(e.type)), e) : 1
}

function Qe(e, t, n, r) {
  if (50 < nr) throw nr = 0, Ci = null, Error(k(185));
  Er(e, n, r), (!(U & 2) || e !== re) && (e === re && (!(U & 2) && (Ko |= n),
      te === 4 && xt(e, se)), Se(e, r), n === 1 && U === 0 && !(t.mode & 1) &&
    (_n = J() + 500, Bo && Dt()))
}

function Se(e, t) {
  var n = e.callbackNode;
  Dp(e, t);
  var r = mo(e, e === re ? se : 0);
  if (r === 0) n !== null && Js(n), e.callbackNode = null, e.callbackPriority =
    0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Js(n), t === 1) e.tag === 0 ? Am(Wa.bind(null, e)) : Nc(Wa
      .bind(null, e)), Im(function() {
      !(U & 6) && Dt()
    }), n = null;
    else {
      switch (ec(r)) {
        case 1:
          n = Gi;
          break;
        case 4:
          n = Zu;
          break;
        case 16:
          n = po;
          break;
        case 536870912:
          n = Ju;
          break;
        default:
          n = po
      }
      n = kd(n, vd.bind(null, e))
    }
    e.callbackPriority = t, e.callbackNode = n
  }
}

function vd(e, t) {
  if (ro = -1, oo = 0, U & 6) throw Error(k(327));
  var n = e.callbackNode;
  if (xn() && e.callbackNode !== n) return null;
  var r = mo(e, e === re ? se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Io(e, r);
  else {
    t = r;
    var o = U;
    U |= 2;
    var l = yd();
    (re !== e || se !== t) && (nt = null, _n = J() + 500, Wt(e, t));
    do try {
      rh();
      break
    } catch (s) {
      gd(e, s)
    }
    while (!0);
    ss(), jo.current = l, U = o, q !== null ? t = 0 : (re = null, se = 0, t =
      te)
  }
  if (t !== 0) {
    if (t === 2 && (o = Zl(e), o !== 0 && (r = o, t = Ni(e, o))), t === 1)
      throw n = wr, Wt(e, 0), xt(e, r), Se(e, J()), n;
    if (t === 6) xt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !th(o) && (t = Io(e, r), t ===
          2 && (l = Zl(e), l !== 0 && (r = l, t = Ni(e, l))), t === 1))
        throw n = wr, Wt(e, 0), xt(e, r), Se(e, J()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          bt(e, ge, nt);
          break;
        case 3:
          if (xt(e, r), (r & 130023424) === r && (t = Es + 500 - J(), 10 < t)) {
            if (mo(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              me(), e.pingedLanes |= e.suspendedLanes & o;
              break
            }
            e.timeoutHandle = li(bt.bind(null, e, ge, nt), t);
            break
          }
          bt(e, ge, nt);
          break;
        case 4:
          if (xt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r;) {
            var i = 31 - He(r);
            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l
          }
          if (r = o, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 >
              r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 :
              1960 * eh(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = li(bt.bind(null, e, ge, nt), r);
            break
          }
          bt(e, ge, nt);
          break;
        case 5:
          bt(e, ge, nt);
          break;
        default:
          throw Error(k(329))
      }
    }
  }
  return Se(e, J()), e.callbackNode === n ? vd.bind(null, e) : null
}

function Ni(e, t) {
  var n = tr;
  return e.current.memoizedState.isDehydrated && (Wt(e, t)
    .flags |= 256), e = Io(e, t), e !== 2 && (t = ge, ge = n, t !== null &&
    Pi(t)), e
}

function Pi(e) {
  ge === null ? ge = e : ge.push.apply(ge, e)
}

function th(e) {
  for (var t = e;;) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!Ke(l(), o)) return !1
          } catch {
            return !1
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return !0;
        t = t.return
      }
      t.sibling.return = t.return, t = t.sibling
    }
  }
  return !0
}

function xt(e, t) {
  for (t &= ~Ss, t &= ~Ko, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e
    .expirationTimes; 0 < t;) {
    var n = 31 - He(t),
      r = 1 << n;
    e[n] = -1, t &= ~r
  }
}

function Wa(e) {
  if (U & 6) throw Error(k(327));
  xn();
  var t = mo(e, 0);
  if (!(t & 1)) return Se(e, J()), null;
  var n = Io(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Zl(e);
    r !== 0 && (t = r, n = Ni(e, r))
  }
  if (n === 1) throw n = wr, Wt(e, 0), xt(e, t), Se(e, J()), n;
  if (n === 6) throw Error(k(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, bt(e, ge,
    nt), Se(e, J()), null
}

function ks(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t)
  } finally {
    U = n, U === 0 && (_n = J() + 500, Bo && Dt())
  }
}

function Xt(e) {
  St !== null && St.tag === 0 && !(U & 6) && xn();
  var t = U;
  U |= 1;
  var n = Fe.transition,
    r = b;
  try {
    if (Fe.transition = null, b = 1, e) return e()
  } finally {
    b = r, Fe.transition = n, U = t, !(U & 6) && Dt()
  }
}

function Cs() {
  Ne = pn.current, W(pn)
}

function Wt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Lm(n)), q !== null)
    for (n = q.return; n !== null;) {
      var r = n;
      switch (os(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && xo();
          break;
        case 3:
          Pn(), W(xe), W(fe), ps();
          break;
        case 5:
          fs(r);
          break;
        case 4:
          Pn();
          break;
        case 13:
          W(Q);
          break;
        case 19:
          W(Q);
          break;
        case 10:
          as(r.type._context);
          break;
        case 22:
        case 23:
          Cs()
      }
      n = n.return
    }
  if (re = e, q = e = Rt(e.current, null), se = Ne = t, te = 0, wr = null, Ss =
    Ko = Yt = 0, ge = tr = null, Vt !== null) {
    for (t = 0; t < Vt.length; t++)
      if (n = Vt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          l.next = o, r.next = i
        }
        n.pending = r
      } Vt = null
  }
  return e
}

function gd(e, t) {
  do {
    var n = q;
    try {
      if (ss(), eo.current = _o, To) {
        for (var r = K.memoizedState; r !== null;) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next
        }
        To = !1
      }
      if (Gt = 0, ne = ee = K = null, qn = !1, gr = 0, ws.current = null, n ===
        null || n.return === null) {
        te = 1, wr = t, q = null;
        break
      }
      e: {
        var l = e,
          i = n.return,
          s = n,
          a = t;
        if (t = se, s.flags |= 32768, a !== null && typeof a == "object" &&
          typeof a.then == "function") {
          var u = a,
            f = s,
            p = f.tag;
          if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var v = f.alternate;
            v ? (f.updateQueue = v.updateQueue, f.memoizedState = v
              .memoizedState, f.lanes = v.lanes) : (f.updateQueue = null, f
              .memoizedState = null)
          }
          var S = La(i);
          if (S !== null) {
            S.flags &= -257, Ia(S, i, s, l, t), S.mode & 1 && Ra(l, u, t), t =
              S, a = u;
            var E = t.updateQueue;
            if (E === null) {
              var y = new Set;
              y.add(a), t.updateQueue = y
            } else E.add(a);
            break e
          } else {
            if (!(t & 1)) {
              Ra(l, u, t), Ns();
              break e
            }
            a = Error(k(426))
          }
        } else if (H && s.mode & 1) {
          var x = La(i);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), Ia(x, i, s, l, t), ls(Tn(
              a, s));
            break e
          }
        }
        l = a = Tn(a, s),
        te !== 4 && (te = 2),
        tr === null ? tr = [l] : tr.push(l),
        l = i;do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, t &= -t, l.lanes |= t;
              var d = ed(l, a, t);
              Ca(l, d);
              break e;
            case 1:
              s = a;
              var c = l.type,
                m = l.stateNode;
              if (!(l.flags & 128) && (typeof c.getDerivedStateFromError ==
                  "function" || m !== null && typeof m.componentDidCatch ==
                  "function" && (_t === null || !_t.has(m)))) {
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var w = td(l, s, t);
                Ca(l, w);
                break e
              }
          }
          l = l.return
        } while (l !== null)
      }
      wd(n)
    } catch (C) {
      t = C, q === n && n !== null && (q = n = n.return);
      continue
    }
    break
  } while (!0)
}

function yd() {
  var e = jo.current;
  return jo.current = _o, e === null ? _o : e
}

function Ns() {
  (te === 0 || te === 3 || te === 2) && (te = 4), re === null || !(Yt &
    268435455) && !(Ko & 268435455) || xt(re, se)
}

function Io(e, t) {
  var n = U;
  U |= 2;
  var r = yd();
  (re !== e || se !== t) && (nt = null, Wt(e, t));
  do try {
    nh();
    break
  } catch (o) {
    gd(e, o)
  }
  while (!0);
  if (ss(), U = n, jo.current = r, q !== null) throw Error(k(261));
  return re = null, se = 0, te
}

function nh() {
  for (; q !== null;) xd(q)
}

function rh() {
  for (; q !== null && !_p();) xd(q)
}

function xd(e) {
  var t = Ed(e.alternate, e, Ne);
  e.memoizedProps = e.pendingProps, t === null ? wd(e) : q = t, ws.current =
    null
}

function wd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Xm(n, t), n !== null) {
        n.flags &= 32767, q = n;
        return
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        te = 6, q = null;
        return
      }
    } else if (n = Ym(n, t, Ne), n !== null) {
      q = n;
      return
    }
    if (t = t.sibling, t !== null) {
      q = t;
      return
    }
    q = t = e
  } while (t !== null);
  te === 0 && (te = 5)
}

function bt(e, t, n) {
  var r = b,
    o = Fe.transition;
  try {
    Fe.transition = null, b = 1, oh(e, t, n, r)
  } finally {
    Fe.transition = o, b = r
  }
  return null
}

function oh(e, t, n, r) {
  do xn(); while (St !== null);
  if (U & 6) throw Error(k(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(
    k(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if (Fp(e, l), e === re && (q = re = null, se = 0), !(n.subtreeFlags & 2064) &&
    !(n.flags & 2064) || Wr || (Wr = !0, kd(po, function() {
      return xn(), null
    })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = Fe.transition, Fe.transition = null;
    var i = b;
    b = 1;
    var s = U;
    U |= 4, ws.current = null, Jm(e, n), md(n, e), Cm(ri), ho = !!ni, ri = ni =
      null, e.current = n, qm(n), jp(), U = s, b = i, Fe.transition = l
  } else e.current = n;
  if (Wr && (Wr = !1, St = e, Lo = o), l = e.pendingLanes, l === 0 && (_t =
      null), Ip(n.stateNode), Se(e, J()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o
      .value, {
        componentStack: o.stack,
        digest: o.digest
      });
  if (Ro) throw Ro = !1, e = ki, ki = null, e;
  return Lo & 1 && e.tag !== 0 && xn(), l = e.pendingLanes, l & 1 ? e === Ci ?
    nr++ : (nr = 0, Ci = e) : nr = 0, Dt(), null
}

function xn() {
  if (St !== null) {
    var e = ec(Lo),
      t = Fe.transition,
      n = b;
    try {
      if (Fe.transition = null, b = 16 > e ? 16 : e, St === null) var r = !1;
      else {
        if (e = St, St = null, Lo = 0, U & 6) throw Error(k(331));
        var o = U;
        for (U |= 4, j = e.current; j !== null;) {
          var l = j,
            i = l.child;
          if (j.flags & 16) {
            var s = l.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (j = u; j !== null;) {
                  var f = j;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      er(8, f, l)
                  }
                  var p = f.child;
                  if (p !== null) p.return = f, j = p;
                  else
                    for (; j !== null;) {
                      f = j;
                      var v = f.sibling,
                        S = f.return;
                      if (dd(f), f === u) {
                        j = null;
                        break
                      }
                      if (v !== null) {
                        v.return = S, j = v;
                        break
                      }
                      j = S
                    }
                }
              }
              var E = l.alternate;
              if (E !== null) {
                var y = E.child;
                if (y !== null) {
                  E.child = null;
                  do {
                    var x = y.sibling;
                    y.sibling = null, y = x
                  } while (y !== null)
                }
              }
              j = l
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) i.return = l, j = i;
          else e: for (; j !== null;) {
            if (l = j, l.flags & 2048) switch (l.tag) {
              case 0:
              case 11:
              case 15:
                er(9, l, l.return)
            }
            var d = l.sibling;
            if (d !== null) {
              d.return = l.return, j = d;
              break e
            }
            j = l.return
          }
        }
        var c = e.current;
        for (j = c; j !== null;) {
          i = j;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) m.return = i, j = m;
          else e: for (i = c; j !== null;) {
            if (s = j, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Qo(9, s)
              }
            } catch (C) {
              Z(s, s.return, C)
            }
            if (s === i) {
              j = null;
              break e
            }
            var w = s.sibling;
            if (w !== null) {
              w.return = s.return, j = w;
              break e
            }
            j = s.return
          }
        }
        if (U = o, Dt(), Je && typeof Je.onPostCommitFiberRoot == "function")
          try {
            Je.onPostCommitFiberRoot(Fo, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      b = n, Fe.transition = t
    }
  }
  return !1
}

function Ha(e, t, n) {
  t = Tn(n, t), t = ed(e, t, 1), e = Tt(e, t, 1), t = me(), e !== null && (Er(e,
    1, t), Se(e, t))
}

function Z(e, t, n) {
  if (e.tag === 3) Ha(e, e, n);
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        Ha(t, e, n);
        break
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r
          .componentDidCatch == "function" && (_t === null || !_t.has(r))) {
          e = Tn(n, e), e = td(t, e, 1), t = Tt(t, e, 1), e = me(), t !==
            null && (Er(t, 1, e), Se(t, e));
          break
        }
      }
      t = t.return
    }
}

function lh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = me(), e.pingedLanes |= e.suspendedLanes & n,
    re === e && (se & n) === n && (te === 4 || te === 3 && (se & 130023424) ===
      se && 500 > J() - Es ? Wt(e, 0) : Ss |= n), Se(e, t)
}

function Sd(e, t) {
  t === 0 && (e.mode & 1 ? (t = Or, Or <<= 1, !(Or & 130023424) && (Or =
    4194304)) : t = 1);
  var n = me();
  e = ut(e, t), e !== null && (Er(e, t, n), Se(e, n))
}

function ih(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Sd(e, n)
}

function sh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314))
  }
  r !== null && r.delete(t), Sd(e, n)
}
var Ed;
Ed = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || xe.current) ye = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ye = !1, Gm(e, t, n);
      ye = !!(e.flags & 131072)
    }
  else ye = !1, H && t.flags & 1048576 && Pc(t, Eo, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      no(e, t), e = t.pendingProps;
      var o = kn(t, fe.current);
      yn(t, n), o = hs(null, t, r, e, o, n);
      var l = vs();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o
        .render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t
          .memoizedState = null, t.updateQueue = null, we(r) ? (l = !0, wo(
            t)) : l = !1, t.memoizedState = o.state !== null && o.state !==
          void 0 ? o.state : null, cs(t), o.updater = Ho, t.stateNode = o, o
          ._reactInternals = t, fi(t, r, e, n), t = hi(null, t, r, !0, l, n)
        ) : (t.tag = 0, H && l && rs(t), pe(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (no(e, t), e = t.pendingProps, o = r._init, r = o(r
            ._payload), t.type = r, o = t.tag = uh(r), e = Ve(r, e), o) {
          case 0:
            t = mi(null, t, r, e, n);
            break e;
          case 1:
            t = za(null, t, r, e, n);
            break e;
          case 11:
            t = Ma(null, t, r, e, n);
            break e;
          case 14:
            t = Oa(null, t, r, Ve(r.type, e), n);
            break e
        }
        throw Error(k(306, r, ""))
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ve(
        r, o), mi(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ve(
        r, o), za(e, t, r, o, n);
    case 3:
      e: {
        if (ld(t), e === null) throw Error(k(387));r = t.pendingProps,
        l = t.memoizedState,
        o = l.element,
        Ic(e, t),
        No(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, l.isDehydrated)
          if (l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions
            }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags &
            256) {
            o = Tn(Error(k(423)), t), t = Aa(e, t, r, n, o);
            break e
          } else if (r !== o) {
          o = Tn(Error(k(424)), t), t = Aa(e, t, r, n, o);
          break e
        } else
          for (Te = Pt(t.stateNode.containerInfo.firstChild), _e = t, H = !
            0, We = null, n = Rc(t, null, r, n), t.child = n; n;) n.flags =
            n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Cn(), r === o) {
            t = ct(e, t, n);
            break e
          }
          pe(e, t, r, n)
        }
        t = t.child
      }
      return t;
    case 5:
      return Mc(t), e === null && ui(t), r = t.type, o = t.pendingProps, l =
        e !== null ? e.memoizedProps : null, i = o.children, oi(r, o) ? i =
        null : l !== null && oi(r, l) && (t.flags |= 32), od(e, t), pe(e, t,
          i, n), t.child;
    case 6:
      return e === null && ui(t), null;
    case 13:
      return id(e, t, n);
    case 4:
      return ds(t, t.stateNode.containerInfo), r = t.pendingProps, e ===
        null ? t.child = Nn(t, null, r, n) : pe(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ve(
        r, o), Ma(e, t, r, o, n);
    case 7:
      return pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps,
          i = o.value, $(ko, r._currentValue), r._currentValue = i, l !==
          null)
          if (Ke(l.value, i)) {
            if (l.children === o.children && !xe.current) {
              t = ct(e, t, n);
              break e
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null;) {
              var s = l.dependencies;
              if (s !== null) {
                i = l.child;
                for (var a = s.firstContext; a !== null;) {
                  if (a.context === r) {
                    if (l.tag === 1) {
                      a = it(-1, n & -n), a.tag = 2;
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null ? a.next = a : (a.next = f.next, f.next =
                          a), u.pending = a
                      }
                    }
                    l.lanes |= n, a = l.alternate, a !== null && (a.lanes |=
                      n), ci(l.return, n, t), s.lanes |= n;
                    break
                  }
                  a = a.next
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l
                .child;
              else if (l.tag === 18) {
                if (i = l.return, i === null) throw Error(k(341));
                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n),
                  ci(i, n, t), i = l.sibling
              } else i = l.child;
              if (i !== null) i.return = l;
              else
                for (i = l; i !== null;) {
                  if (i === t) {
                    i = null;
                    break
                  }
                  if (l = i.sibling, l !== null) {
                    l.return = i.return, i = l;
                    break
                  }
                  i = i.return
                }
              l = i
            }
        pe(e, t, o.children, n),
        t = t.child
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, yn(t, n), o = Ue(o), r =
        r(o), t.flags |= 1, pe(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Ve(r, t.pendingProps), o = Ve(r.type, o), Oa(e,
        t, r, o, n);
    case 15:
      return nd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ve(
        r, o), no(e, t), t.tag = 1, we(r) ? (e = !0, wo(t)) : e = !1, yn(t,
        n), qc(t, r, o), fi(t, r, o, n), hi(null, t, r, !0, e, n);
    case 19:
      return sd(e, t, n);
    case 22:
      return rd(e, t, n)
  }
  throw Error(k(156, t.tag))
};

function kd(e, t) {
  return Xu(e, t)
}

function ah(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this
    .stateNode = this.type = this.elementType = null, this.index = 0, this.ref =
    null, this.pendingProps = t, this.dependencies = this.memoizedState = this
    .updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags =
    this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0,
    this.alternate = null
}

function De(e, t, n, r) {
  return new ah(e, t, n, r)
}

function Ps(e) {
  return e = e.prototype, !(!e || !e.isReactComponent)
}

function uh(e) {
  if (typeof e == "function") return Ps(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Hi) return 11;
    if (e === Qi) return 14
  }
  return 2
}

function Rt(e, t) {
  var n = e.alternate;
  return n === null ? (n = De(e.tag, t, e.key, e.mode), n.elementType = e
      .elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e,
      e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n
      .subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n
    .childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n
    .memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n
    .updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t ===
    null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function lo(e, t, n, r, o, l) {
  var i = 2;
  if (r = e, typeof e == "function") Ps(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case nn:
      return Ht(n.children, o, l, t);
    case Wi:
      i = 8, o |= 8;
      break;
    case Al:
      return e = De(12, n, t, o | 2), e.elementType = Al, e.lanes = l, e;
    case Dl:
      return e = De(13, n, t, o), e.elementType = Dl, e.lanes = l, e;
    case Fl:
      return e = De(19, n, t, o), e.elementType = Fl, e.lanes = l, e;
    case Mu:
      return Go(n, o, l, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Lu:
          i = 10;
          break e;
        case Iu:
          i = 9;
          break e;
        case Hi:
          i = 11;
          break e;
        case Qi:
          i = 14;
          break e;
        case vt:
          i = 16, r = null;
          break e
      }
      throw Error(k(130, e == null ? e : typeof e, ""))
  }
  return t = De(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t
}

function Ht(e, t, n, r) {
  return e = De(7, e, r, t), e.lanes = n, e
}

function Go(e, t, n, r) {
  return e = De(22, e, r, t), e.elementType = Mu, e.lanes = n, e.stateNode = {
    isHidden: !1
  }, e
}

function _l(e, t, n) {
  return e = De(6, e, null, t), e.lanes = n, e
}

function jl(e, t, n) {
  return t = De(4, e.children !== null ? e.children : [], e.key, t), t.lanes =
    n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t
}

function ch(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache =
    this.current = this.pendingChildren = null, this.timeoutHandle = -1, this
    .callbackNode = this.pendingContext = this.context = null, this
    .callbackPriority = 0, this.eventTimes = ul(0), this.expirationTimes = ul(-
      1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes =
    this.expiredLanes = this.pingedLanes = this.suspendedLanes = this
    .pendingLanes = 0, this.entanglements = ul(0), this.identifierPrefix = r,
    this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function Ts(e, t, n, r, o, l, i, s, a) {
  return e = new ch(e, t, n, s, a), t === 1 ? (t = 1, l === !0 && (t |= 8)) :
    t = 0, l = De(3, null, null, t), e.current = l, l.stateNode = e, l
    .memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }, cs(l), e
}

function dh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: tn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}

function Cd(e) {
  if (!e) return It;
  e = e._reactInternals;
  e: {
    if (qt(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (we(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e
          }
      }
      t = t.return
    } while (t !== null);
    throw Error(k(171))
  }
  if (e.tag === 1) {
    var n = e.type;
    if (we(n)) return Cc(e, n, t)
  }
  return t
}

function Nd(e, t, n, r, o, l, i, s, a) {
  return e = Ts(n, r, !0, e, o, l, i, s, a), e.context = Cd(null), n = e
    .current, r = me(), o = jt(n), l = it(r, o), l.callback = t ?? null, Tt(n,
      l, o), e.current.lanes = o, Er(e, o, r), Se(e, r), e
}

function Yo(e, t, n, r) {
  var o = t.current,
    l = me(),
    i = jt(o);
  return n = Cd(n), t.context === null ? t.context = n : t.pendingContext = n,
    t = it(l, i), t.payload = {
      element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Tt(o, t,
      i), e !== null && (Qe(e, o, i, l), qr(e, o, i)), i
}

function Mo(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode
  }
}

function Qa(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t
  }
}

function _s(e, t) {
  Qa(e, t), (e = e.alternate) && Qa(e, t)
}

function fh() {
  return null
}
var Pd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e)
};

function js(e) {
  this._internalRoot = e
}
Xo.prototype.render = js.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Yo(e, t, null, null)
};
Xo.prototype.unmount = js.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Xt(function() {
      Yo(null, e, null, null)
    }), t[at] = null
  }
};

function Xo(e) {
  this._internalRoot = e
}
Xo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = rc();
    e = {
      blockedOn: null,
      target: e,
      priority: t
    };
    for (var n = 0; n < yt.length && t !== 0 && t < yt[n].priority; n++);
    yt.splice(n, 0, e), n === 0 && lc(e)
  }
};

function Rs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Zo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e
    .nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Ka() {}

function ph(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var u = Mo(i);
        l.call(u)
      }
    }
    var i = Nd(t, r, e, 0, null, !1, !1, "", Ka);
    return e._reactRootContainer = i, e[at] = i.current, fr(e.nodeType === 8 ? e
      .parentNode : e), Xt(), i
  }
  for (; o = e.lastChild;) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = Mo(a);
      s.call(u)
    }
  }
  var a = Ts(e, 0, !1, null, null, !1, !1, "", Ka);
  return e._reactRootContainer = a, e[at] = a.current, fr(e.nodeType === 8 ? e
    .parentNode : e), Xt(function() {
    Yo(t, a, n, r)
  }), a
}

function Jo(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var a = Mo(i);
        s.call(a)
      }
    }
    Yo(t, i, e, o)
  } else i = ph(n, t, e, o, r);
  return Mo(i)
}
tc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Qn(t.pendingLanes);
        n !== 0 && (Yi(t, n | 1), Se(t, J()), !(U & 6) && (_n = J() + 500,
          Dt()))
      }
      break;
    case 13:
      Xt(function() {
        var r = ut(e, 1);
        if (r !== null) {
          var o = me();
          Qe(r, e, 1, o)
        }
      }), _s(e, 1)
  }
};
Xi = function(e) {
  if (e.tag === 13) {
    var t = ut(e, 134217728);
    if (t !== null) {
      var n = me();
      Qe(t, e, 134217728, n)
    }
    _s(e, 134217728)
  }
};
nc = function(e) {
  if (e.tag === 13) {
    var t = jt(e),
      n = ut(e, t);
    if (n !== null) {
      var r = me();
      Qe(n, e, t, r)
    }
    _s(e, t)
  }
};
rc = function() {
  return b
};
oc = function(e, t) {
  var n = b;
  try {
    return b = e, t()
  } finally {
    b = n
  }
};
Gl = function(e, t, n) {
  switch (t) {
    case "input":
      if ($l(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode;) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) +
            '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Vo(r);
            if (!o) throw Error(k(90));
            zu(r), $l(r, o)
          }
        }
      }
      break;
    case "textarea":
      Du(e, n);
      break;
    case "select":
      t = n.value, t != null && mn(e, !!n.multiple, t, !1)
  }
};
Wu = ks;
Hu = Xt;
var mh = {
    usingClientEntryPoint: !1,
    Events: [Cr, sn, Vo, Vu, Bu, ks]
  },
  $n = {
    findFiberByHostInstance: $t,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  },
  hh = {
    bundleType: $n.bundleType,
    version: $n.version,
    rendererPackageName: $n.rendererPackageName,
    rendererConfig: $n.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: dt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
      return e = Gu(e), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: $n.findFiberByHostInstance || fh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Hr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Hr.isDisabled && Hr.supportsFiber) try {
    Fo = Hr.inject(hh), Je = Hr
  } catch {}
}
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mh;
Re.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] :
    null;
  if (!Rs(t)) throw Error(k(200));
  return dh(e, t, null, n)
};
Re.createRoot = function(e, t) {
  if (!Rs(e)) throw Error(k(299));
  var n = !1,
    r = "",
    o = Pd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t
    .identifierPrefix !== void 0 && (r = t.identifierPrefix), t
    .onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Ts(e,
    1, !1, null, null, n, !1, r, o), e[at] = t.current, fr(e.nodeType ===
    8 ? e.parentNode : e), new js(t)
};
Re.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(k(188)) : (e =
    Object.keys(e)
    .join(","), Error(k(268, e)));
  return e = Gu(t), e = e === null ? null : e.stateNode, e
};
Re.flushSync = function(e) {
  return Xt(e)
};
Re.hydrate = function(e, t, n) {
  if (!Zo(t)) throw Error(k(200));
  return Jo(null, e, t, !0, n)
};
Re.hydrateRoot = function(e, t, n) {
  if (!Rs(e)) throw Error(k(405));
  var r = n != null && n.hydratedSources || null,
    o = !1,
    l = "",
    i = Pd;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n
      .identifierPrefix !== void 0 && (l = n.identifierPrefix), n
      .onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Nd(t,
      null, e, 1, n ?? null, o, !1, l, i), e[at] = t.current, fr(e), r)
    for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n
        ._source), t.mutableSourceEagerHydrationData == null ? t
      .mutableSourceEagerHydrationData = [n, o] : t
      .mutableSourceEagerHydrationData.push(n, o);
  return new Xo(t)
};
Re.render = function(e, t, n) {
  if (!Zo(t)) throw Error(k(200));
  return Jo(null, e, t, !1, n)
};
Re.unmountComponentAtNode = function(e) {
  if (!Zo(e)) throw Error(k(40));
  return e._reactRootContainer ? (Xt(function() {
    Jo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[at] = null
    })
  }), !0) : !1
};
Re.unstable_batchedUpdates = ks;
Re.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Zo(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Jo(e, t, n, !1, r)
};
Re.version = "18.3.1-next-f1338f8080-20240426";

function Td() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Td)
  } catch (e) {
    console.error(e)
  }
}
Td(), Tu.exports = Re;
var qo = Tu.exports;
const vh = mu(qo);
var _d, Ga = qo;
_d = Ga.createRoot, Ga.hydrateRoot;
const gh = 1,
  yh = 1e6;
let Rl = 0;

function xh() {
  return Rl = (Rl + 1) % Number.MAX_SAFE_INTEGER, Rl.toString()
}
const Ll = new Map,
  Ya = e => {
    if (Ll.has(e)) return;
    const t = setTimeout(() => {
      Ll.delete(e), rr({
        type: "REMOVE_TOAST",
        toastId: e
      })
    }, yh);
    Ll.set(e, t)
  },
  wh = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return {
          ...e, toasts: [t.toast, ...e.toasts].slice(0, gh)
        };
      case "UPDATE_TOAST":
        return {
          ...e, toasts: e.toasts.map(n => n.id === t.toast.id ? {
            ...n,
            ...t.toast
          } : n)
        };
      case "DISMISS_TOAST": {
        const {
          toastId: n
        } = t;
        return n ? Ya(n) : e.toasts.forEach(r => {
          Ya(r.id)
        }), {
          ...e,
          toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
            ...r,
            open: !1
          } : r)
        }
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
          ...e,
          toasts: []
        } : {
          ...e,
          toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
  },
  io = [];
let so = {
  toasts: []
};

function rr(e) {
  so = wh(so, e), io.forEach(t => {
    t(so)
  })
}

function Sh({
  ...e
}) {
  const t = xh(),
    n = o => rr({
      type: "UPDATE_TOAST",
      toast: {
        ...o,
        id: t
      }
    }),
    r = () => rr({
      type: "DISMISS_TOAST",
      toastId: t
    });
  return rr({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: o => {
        o || r()
      }
    }
  }), {
    id: t,
    dismiss: r,
    update: n
  }
}

function jd() {
  const [e, t] = g.useState(so);
  return g.useEffect(() => (io.push(t), () => {
    const n = io.indexOf(t);
    n > -1 && io.splice(n, 1)
  }), [e]), {
    ...e,
    toast: Sh,
    dismiss: n => rr({
      type: "DISMISS_TOAST",
      toastId: n
    })
  }
}

function Pe(e, t, {
  checkForDefaultPrevented: n = !0
} = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ?
      void 0 : t(o)
  }
}

function Xa(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t)
}

function Rd(...e) {
  return t => {
    let n = !1;
    const r = e.map(o => {
      const l = Xa(o, t);
      return !n && typeof l == "function" && (n = !0), l
    });
    if (n) return () => {
      for (let o = 0; o < r.length; o++) {
        const l = r[o];
        typeof l == "function" ? l() : Xa(e[o], null)
      }
    }
  }
}

function Zt(...e) {
  return g.useCallback(Rd(...e), e)
}

function Ls(e, t = []) {
  let n = [];

  function r(l, i) {
    const s = g.createContext(i),
      a = n.length;
    n = [...n, i];
    const u = p => {
      var d;
      const {
        scope: v,
        children: S,
        ...E
      } = p, y = ((d = v == null ? void 0 : v[e]) == null ? void 0 : d[a]) ||
        s, x = g.useMemo(() => E, Object.values(E));
      return h.jsx(y.Provider, {
        value: x,
        children: S
      })
    };
    u.displayName = l + "Provider";

    function f(p, v) {
      var y;
      const S = ((y = v == null ? void 0 : v[e]) == null ? void 0 : y[a]) || s,
        E = g.useContext(S);
      if (E) return E;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${l}\``)
    }
    return [u, f]
  }
  const o = () => {
    const l = n.map(i => g.createContext(i));
    return function(s) {
      const a = (s == null ? void 0 : s[e]) || l;
      return g.useMemo(() => ({
        [`__scope${e}`]: {
          ...s,
          [e]: a
        }
      }), [s, a])
    }
  };
  return o.scopeName = e, [r, Eh(o, ...t)]
}

function Eh(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map(o => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(l) {
      const i = r.reduce((s, {
        useScope: a,
        scopeName: u
      }) => {
        const p = a(l)[`__scope${u}`];
        return {
          ...s,
          ...p
        }
      }, {});
      return g.useMemo(() => ({
        [`__scope${t.scopeName}`]: i
      }), [i])
    }
  };
  return n.scopeName = t.scopeName, n
}

function Oo(e) {
  const t = Ch(e),
    n = g.forwardRef((r, o) => {
      const {
        children: l,
        ...i
      } = r, s = g.Children.toArray(l), a = s.find(Ph);
      if (a) {
        const u = a.props.children,
          f = s.map(p => p === a ? g.Children.count(u) > 1 ? g.Children.only(
            null) : g.isValidElement(u) ? u.props.children : null : p);
        return h.jsx(t, {
          ...i,
          ref: o,
          children: g.isValidElement(u) ? g.cloneElement(u, void 0, f) :
            null
        })
      }
      return h.jsx(t, {
        ...i,
        ref: o,
        children: l
      })
    });
  return n.displayName = `${e}.Slot`, n
}
var kh = Oo("Slot");

function Ch(e) {
  const t = g.forwardRef((n, r) => {
    const {
      children: o,
      ...l
    } = n;
    if (g.isValidElement(o)) {
      const i = _h(o),
        s = Th(l, o.props);
      return o.type !== g.Fragment && (s.ref = r ? Rd(r, i) : i), g
        .cloneElement(o, s)
    }
    return g.Children.count(o) > 1 ? g.Children.only(null) : null
  });
  return t.displayName = `${e}.SlotClone`, t
}
var Nh = Symbol("radix.slottable");

function Ph(e) {
  return g.isValidElement(e) && typeof e.type == "function" && "__radixId" in e
    .type && e.type.__radixId === Nh
}

function Th(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r],
      l = t[r];
    /^on[A-Z]/.test(r) ? o && l ? n[r] = (...s) => {
      const a = l(...s);
      return o(...s), a
    } : o && (n[r] = o) : r === "style" ? n[r] = {
      ...o,
      ...l
    } : r === "className" && (n[r] = [o, l].filter(Boolean)
      .join(" "))
  }
  return {
    ...e,
    ...n
  }
}

function _h(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ?
    void 0 : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) ==
    null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}

function jh(e) {
  const t = e + "CollectionProvider",
    [n, r] = Ls(t),
    [o, l] = n(t, {
      collectionRef: {
        current: null
      },
      itemMap: new Map
    }),
    i = y => {
      const {
        scope: x,
        children: d
      } = y, c = ht.useRef(null), m = ht.useRef(new Map)
        .current;
      return h.jsx(o, {
        scope: x,
        itemMap: m,
        collectionRef: c,
        children: d
      })
    };
  i.displayName = t;
  const s = e + "CollectionSlot",
    a = Oo(s),
    u = ht.forwardRef((y, x) => {
      const {
        scope: d,
        children: c
      } = y, m = l(s, d), w = Zt(x, m.collectionRef);
      return h.jsx(a, {
        ref: w,
        children: c
      })
    });
  u.displayName = s;
  const f = e + "CollectionItemSlot",
    p = "data-radix-collection-item",
    v = Oo(f),
    S = ht.forwardRef((y, x) => {
      const {
        scope: d,
        children: c,
        ...m
      } = y, w = ht.useRef(null), C = Zt(x, w), P = l(f, d);
      return ht.useEffect(() => (P.itemMap.set(w, {
        ref: w,
        ...m
      }), () => void P.itemMap.delete(w))), h.jsx(v, {
        [p]: "",
        ref: C,
        children: c
      })
    });
  S.displayName = f;

  function E(y) {
    const x = l(e + "CollectionConsumer", y);
    return ht.useCallback(() => {
      const c = x.collectionRef.current;
      if (!c) return [];
      const m = Array.from(c.querySelectorAll(`[${p}]`));
      return Array.from(x.itemMap.values())
        .sort((P, N) => m.indexOf(P.ref.current) - m.indexOf(N.ref.current))
    }, [x.collectionRef, x.itemMap])
  }
  return [{
    Provider: i,
    Slot: u,
    ItemSlot: S
  }, E, r]
}
var Rh = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label",
    "li", "nav", "ol", "p", "select", "span", "svg", "ul"
  ],
  Ie = Rh.reduce((e, t) => {
    const n = Oo(`Primitive.${t}`),
      r = g.forwardRef((o, l) => {
        const {
          asChild: i,
          ...s
        } = o, a = i ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          h.jsx(a, {
            ...s,
            ref: l
          })
      });
    return r.displayName = `Primitive.${t}`, {
      ...e,
      [t]: r
    }
  }, {});

function Ld(e, t) {
  e && qo.flushSync(() => e.dispatchEvent(t))
}

function Mt(e) {
  const t = g.useRef(e);
  return g.useEffect(() => {
    t.current = e
  }), g.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n)
  }, [])
}

function Lh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Mt(e);
  g.useEffect(() => {
    const r = o => {
      o.key === "Escape" && n(o)
    };
    return t.addEventListener("keydown", r, {
      capture: !0
    }), () => t.removeEventListener("keydown", r, {
      capture: !0
    })
  }, [n, t])
}
var Ih = "DismissableLayer",
  Ti = "dismissableLayer.update",
  Mh = "dismissableLayer.pointerDownOutside",
  Oh = "dismissableLayer.focusOutside",
  Za, Id = g.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
  }),
  Md = g.forwardRef((e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: l,
      onInteractOutside: i,
      onDismiss: s,
      ...a
    } = e, u = g.useContext(Id), [f, p] = g.useState(null), v = (f == null ?
        void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis
        .document), [, S] = g.useState({}), E = Zt(t, N => p(N)), y = Array
      .from(u.layers), [x] = [...u.layersWithOutsidePointerEventsDisabled]
      .slice(-1), d = y.indexOf(x), c = f ? y.indexOf(f) : -1, m = u
      .layersWithOutsidePointerEventsDisabled.size > 0, w = c >= d, C = Ah(
        N => {
          const _ = N.target,
            D = [...u.branches].some(L => L.contains(_));
          !w || D || (o == null || o(N), i == null || i(N), N
            .defaultPrevented || s == null || s())
        }, v), P = Dh(N => {
        const _ = N.target;
        [...u.branches].some(L => L.contains(_)) || (l == null || l(N), i ==
          null || i(N), N.defaultPrevented || s == null || s())
      }, v);
    return Lh(N => {
      c === u.layers.size - 1 && (r == null || r(N), !N
        .defaultPrevented && s && (N.preventDefault(), s()))
    }, v), g.useEffect(() => {
      if (f) return n && (u.layersWithOutsidePointerEventsDisabled
        .size === 0 && (Za = v.body.style.pointerEvents, v.body.style
          .pointerEvents = "none"), u
        .layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(
        f), Ja(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (v
          .body.style.pointerEvents = Za)
      }
    }, [f, v, n, u]), g.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled
        .delete(f), Ja())
    }, [f, u]), g.useEffect(() => {
      const N = () => S({});
      return document.addEventListener(Ti, N), () => document
        .removeEventListener(Ti, N)
    }, []), h.jsx(Ie.div, {
      ...a,
      ref: E,
      style: {
        pointerEvents: m ? w ? "auto" : "none" : void 0,
        ...e.style
      },
      onFocusCapture: Pe(e.onFocusCapture, P.onFocusCapture),
      onBlurCapture: Pe(e.onBlurCapture, P.onBlurCapture),
      onPointerDownCapture: Pe(e.onPointerDownCapture, C
        .onPointerDownCapture)
    })
  });
Md.displayName = Ih;
var zh = "DismissableLayerBranch",
  Od = g.forwardRef((e, t) => {
    const n = g.useContext(Id),
      r = g.useRef(null),
      o = Zt(t, r);
    return g.useEffect(() => {
      const l = r.current;
      if (l) return n.branches.add(l), () => {
        n.branches.delete(l)
      }
    }, [n.branches]), h.jsx(Ie.div, {
      ...e,
      ref: o
    })
  });
Od.displayName = zh;

function Ah(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Mt(e),
    r = g.useRef(!1),
    o = g.useRef(() => {});
  return g.useEffect(() => {
    const l = s => {
        if (s.target && !r.current) {
          let a = function() {
            zd(Mh, n, u, {
              discrete: !0
            })
          };
          const u = {
            originalEvent: s
          };
          s.pointerType === "touch" ? (t.removeEventListener("click", o
            .current), o.current = a, t.addEventListener("click", o
            .current, {
              once: !0
            })) : a()
        } else t.removeEventListener("click", o.current);
        r.current = !1
      },
      i = window.setTimeout(() => {
        t.addEventListener("pointerdown", l)
      }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", l), t
        .removeEventListener("click", o.current)
    }
  }, [t, n]), {
    onPointerDownCapture: () => r.current = !0
  }
}

function Dh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Mt(e),
    r = g.useRef(!1);
  return g.useEffect(() => {
    const o = l => {
      l.target && !r.current && zd(Oh, n, {
        originalEvent: l
      }, {
        discrete: !1
      })
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener(
      "focusin", o)
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  }
}

function Ja() {
  const e = new CustomEvent(Ti);
  document.dispatchEvent(e)
}

function zd(e, t, n, {
  discrete: r
}) {
  const o = n.originalEvent.target,
    l = new CustomEvent(e, {
      bubbles: !1,
      cancelable: !0,
      detail: n
    });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? Ld(o, l) : o.dispatchEvent(l)
}
var Fh = Md,
  Uh = Od,
  Ot = globalThis != null && globalThis.document ? g.useLayoutEffect : () => {},
  bh = "Portal",
  Ad = g.forwardRef((e, t) => {
    var s;
    const {
      container: n,
      ...r
    } = e, [o, l] = g.useState(!1);
    Ot(() => l(!0), []);
    const i = n || o && ((s = globalThis == null ? void 0 : globalThis
      .document) == null ? void 0 : s.body);
    return i ? vh.createPortal(h.jsx(Ie.div, {
      ...r,
      ref: t
    }), i) : null
  });
Ad.displayName = bh;

function $h(e, t) {
  return g.useReducer((n, r) => t[n][r] ?? n, e)
}
var Dd = e => {
  const {
    present: t,
    children: n
  } = e, r = Vh(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : g.Children.only(n), l = Zt(r.ref, Bh(o));
  return typeof n == "function" || r.isPresent ? g.cloneElement(o, {
    ref: l
  }) : null
};
Dd.displayName = "Presence";

function Vh(e) {
  const [t, n] = g.useState(), r = g.useRef(null), o = g.useRef(e), l = g
    .useRef("none"), i = e ? "mounted" : "unmounted", [s, a] = $h(i, {
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
  return g.useEffect(() => {
    const u = Qr(r.current);
    l.current = s === "mounted" ? u : "none"
  }, [s]), Ot(() => {
    const u = r.current,
      f = o.current;
    if (f !== e) {
      const v = l.current,
        S = Qr(u);
      e ? a("MOUNT") : S === "none" || (u == null ? void 0 : u.display) ===
        "none" ? a("UNMOUNT") : a(f && v !== S ? "ANIMATION_OUT" :
          "UNMOUNT"), o.current = e
    }
  }, [e, a]), Ot(() => {
    if (t) {
      let u;
      const f = t.ownerDocument.defaultView ?? window,
        p = S => {
          const y = Qr(r.current)
            .includes(S.animationName);
          if (S.target === t && y && (a("ANIMATION_END"), !o.current)) {
            const x = t.style.animationFillMode;
            t.style.animationFillMode = "forwards", u = f.setTimeout(() => {
              t.style.animationFillMode === "forwards" && (t.style
                .animationFillMode = x)
            })
          }
        },
        v = S => {
          S.target === t && (l.current = Qr(r.current))
        };
      return t.addEventListener("animationstart", v), t.addEventListener(
          "animationcancel", p), t.addEventListener("animationend", p),
        () => {
          f.clearTimeout(u), t.removeEventListener("animationstart", v), t
            .removeEventListener("animationcancel", p), t
            .removeEventListener("animationend", p)
        }
    } else a("ANIMATION_END")
  }, [t, a]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: g.useCallback(u => {
      r.current = u ? getComputedStyle(u) : null, n(u)
    }, [])
  }
}

function Qr(e) {
  return (e == null ? void 0 : e.animationName) || "none"
}

function Bh(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ?
    void 0 : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) ==
    null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var Wh = Nu[" useInsertionEffect ".trim()
  .toString()] || Ot;

function Hh({
  prop: e,
  defaultProp: t,
  onChange: n = () => {},
  caller: r
}) {
  const [o, l, i] = Qh({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, a = s ? e : o;
  {
    const f = g.useRef(e !== void 0);
    g.useEffect(() => {
      const p = f.current;
      p !== s && console.warn(
        `${r} is changing from ${p?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = s
    }, [s, r])
  }
  const u = g.useCallback(f => {
    var p;
    if (s) {
      const v = Kh(f) ? f(e) : f;
      v !== e && ((p = i.current) == null || p.call(i, v))
    } else l(f)
  }, [s, e, l, i]);
  return [a, u]
}

function Qh({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = g.useState(e), o = g.useRef(n), l = g.useRef(t);
  return Wh(() => {
    l.current = t
  }, [t]), g.useEffect(() => {
    var i;
    o.current !== n && ((i = l.current) == null || i.call(l, n), o.current =
      n)
  }, [n, o]), [n, r, l]
}

function Kh(e) {
  return typeof e == "function"
}
var Gh = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
  }),
  Yh = "VisuallyHidden",
  Is = g.forwardRef((e, t) => h.jsx(Ie.span, {
    ...e,
    ref: t,
    style: {
      ...Gh,
      ...e.style
    }
  }));
Is.displayName = Yh;
var Ms = "ToastProvider",
  [Os, Xh, Zh] = jh("Toast"),
  [Fd, wy] = Ls("Toast", [Zh]),
  [Jh, el] = Fd(Ms),
  Ud = e => {
    const {
      __scopeToast: t,
      label: n = "Notification",
      duration: r = 5e3,
      swipeDirection: o = "right",
      swipeThreshold: l = 50,
      children: i
    } = e, [s, a] = g.useState(null), [u, f] = g.useState(0), p = g.useRef(!1),
      v = g.useRef(!1);
    return n.trim() || console.error(
      `Invalid prop \`label\` supplied to \`${Ms}\`. Expected non-empty \`string\`.`
    ), h.jsx(Os.Provider, {
      scope: t,
      children: h.jsx(Jh, {
        scope: t,
        label: n,
        duration: r,
        swipeDirection: o,
        swipeThreshold: l,
        toastCount: u,
        viewport: s,
        onViewportChange: a,
        onToastAdd: g.useCallback(() => f(S => S + 1), []),
        onToastRemove: g.useCallback(() => f(S => S - 1), []),
        isFocusedToastEscapeKeyDownRef: p,
        isClosePausedRef: v,
        children: i
      })
    })
  };
Ud.displayName = Ms;
var bd = "ToastViewport",
  qh = ["F8"],
  _i = "toast.viewportPause",
  ji = "toast.viewportResume",
  $d = g.forwardRef((e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = qh,
      label: o = "Notifications ({hotkey})",
      ...l
    } = e, i = el(bd, n), s = Xh(n), a = g.useRef(null), u = g.useRef(null),
      f = g.useRef(null), p = g.useRef(null), v = Zt(t, p, i
        .onViewportChange), S = r.join("+")
      .replace(/Key/g, "")
      .replace(/Digit/g, ""), E = i.toastCount > 0;
    g.useEffect(() => {
      const x = d => {
        var m;
        r.length !== 0 && r.every(w => d[w] || d.code === w) && ((m = p
          .current) == null || m.focus())
      };
      return document.addEventListener("keydown", x), () => document
        .removeEventListener("keydown", x)
    }, [r]), g.useEffect(() => {
      const x = a.current,
        d = p.current;
      if (E && x && d) {
        const c = () => {
            if (!i.isClosePausedRef.current) {
              const P = new CustomEvent(_i);
              d.dispatchEvent(P), i.isClosePausedRef.current = !0
            }
          },
          m = () => {
            if (i.isClosePausedRef.current) {
              const P = new CustomEvent(ji);
              d.dispatchEvent(P), i.isClosePausedRef.current = !1
            }
          },
          w = P => {
            !x.contains(P.relatedTarget) && m()
          },
          C = () => {
            x.contains(document.activeElement) || m()
          };
        return x.addEventListener("focusin", c), x.addEventListener(
            "focusout", w), x.addEventListener("pointermove", c), x
          .addEventListener("pointerleave", C), window.addEventListener(
            "blur", c), window.addEventListener("focus", m), () => {
            x.removeEventListener("focusin", c), x.removeEventListener(
                "focusout", w), x.removeEventListener("pointermove", c), x
              .removeEventListener("pointerleave", C), window
              .removeEventListener("blur", c), window.removeEventListener(
                "focus", m)
          }
      }
    }, [E, i.isClosePausedRef]);
    const y = g.useCallback(({
      tabbingDirection: x
    }) => {
      const c = s()
        .map(m => {
          const w = m.ref.current,
            C = [w, ...fv(w)];
          return x === "forwards" ? C : C.reverse()
        });
      return (x === "forwards" ? c.reverse() : c)
        .flat()
    }, [s]);
    return g.useEffect(() => {
      const x = p.current;
      if (x) {
        const d = c => {
          var C, P, N;
          const m = c.altKey || c.ctrlKey || c.metaKey;
          if (c.key === "Tab" && !m) {
            const _ = document.activeElement,
              D = c.shiftKey;
            if (c.target === x && D) {
              (C = u.current) == null || C.focus();
              return
            }
            const z = y({
                tabbingDirection: D ? "backwards" : "forwards"
              }),
              Ce = z.findIndex(I => I === _);
            Il(z.slice(Ce + 1)) ? c.preventDefault() : D ? (P = u
                .current) == null || P.focus() : (N = f.current) ==
              null || N.focus()
          }
        };
        return x.addEventListener("keydown", d), () => x
          .removeEventListener("keydown", d)
      }
    }, [s, y]), h.jsxs(Uh, {
      ref: a,
      role: "region",
      "aria-label": o.replace("{hotkey}", S),
      tabIndex: -1,
      style: {
        pointerEvents: E ? void 0 : "none"
      },
      children: [E && h.jsx(Ri, {
        ref: u,
        onFocusFromOutsideViewport: () => {
          const x = y({
            tabbingDirection: "forwards"
          });
          Il(x)
        }
      }), h.jsx(Os.Slot, {
        scope: n,
        children: h.jsx(Ie.ol, {
          tabIndex: -1,
          ...l,
          ref: v
        })
      }), E && h.jsx(Ri, {
        ref: f,
        onFocusFromOutsideViewport: () => {
          const x = y({
            tabbingDirection: "backwards"
          });
          Il(x)
        }
      })]
    })
  });
$d.displayName = bd;
var Vd = "ToastFocusProxy",
  Ri = g.forwardRef((e, t) => {
    const {
      __scopeToast: n,
      onFocusFromOutsideViewport: r,
      ...o
    } = e, l = el(Vd, n);
    return h.jsx(Is, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: {
        position: "fixed"
      },
      onFocus: i => {
        var u;
        const s = i.relatedTarget;
        !((u = l.viewport) != null && u.contains(s)) && r()
      }
    })
  });
Ri.displayName = Vd;
var Pr = "Toast",
  ev = "toast.swipeStart",
  tv = "toast.swipeMove",
  nv = "toast.swipeCancel",
  rv = "toast.swipeEnd",
  Bd = g.forwardRef((e, t) => {
    const {
      forceMount: n,
      open: r,
      defaultOpen: o,
      onOpenChange: l,
      ...i
    } = e, [s, a] = Hh({
      prop: r,
      defaultProp: o ?? !0,
      onChange: l,
      caller: Pr
    });
    return h.jsx(Dd, {
      present: n || s,
      children: h.jsx(iv, {
        open: s,
        ...i,
        ref: t,
        onClose: () => a(!1),
        onPause: Mt(e.onPause),
        onResume: Mt(e.onResume),
        onSwipeStart: Pe(e.onSwipeStart, u => {
          u.currentTarget.setAttribute("data-swipe", "start")
        }),
        onSwipeMove: Pe(e.onSwipeMove, u => {
          const {
            x: f,
            y: p
          } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"), u
            .currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x", `${f}px`), u
            .currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y", `${p}px`)
        }),
        onSwipeCancel: Pe(e.onSwipeCancel, u => {
          u.currentTarget.setAttribute("data-swipe", "cancel"), u
            .currentTarget.style.removeProperty(
              "--radix-toast-swipe-move-x"), u.currentTarget.style
            .removeProperty("--radix-toast-swipe-move-y"), u
            .currentTarget.style.removeProperty(
              "--radix-toast-swipe-end-x"), u.currentTarget.style
            .removeProperty("--radix-toast-swipe-end-y")
        }),
        onSwipeEnd: Pe(e.onSwipeEnd, u => {
          const {
            x: f,
            y: p
          } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"), u
            .currentTarget.style.removeProperty(
              "--radix-toast-swipe-move-x"), u.currentTarget.style
            .removeProperty("--radix-toast-swipe-move-y"), u
            .currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x", `${f}px`), u
            .currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y", `${p}px`), a(!1)
        })
      })
    })
  });
Bd.displayName = Pr;
var [ov, lv] = Fd(Pr, {
  onClose() {}
}), iv = g.forwardRef((e, t) => {
  const {
    __scopeToast: n,
    type: r = "foreground",
    duration: o,
    open: l,
    onClose: i,
    onEscapeKeyDown: s,
    onPause: a,
    onResume: u,
    onSwipeStart: f,
    onSwipeMove: p,
    onSwipeCancel: v,
    onSwipeEnd: S,
    ...E
  } = e, y = el(Pr, n), [x, d] = g.useState(null), c = Zt(t, I => d(I)), m =
    g.useRef(null), w = g.useRef(null), C = o || y.duration, P = g.useRef(
      0), N = g.useRef(C), _ = g.useRef(0), {
      onToastAdd: D,
      onToastRemove: L
    } = y, Y = Mt(() => {
      var oe;
      (x == null ? void 0 : x.contains(document.activeElement)) && ((oe =
        y.viewport) == null || oe.focus()), i()
    }), z = g.useCallback(I => {
      !I || I === 1 / 0 || (window.clearTimeout(_.current), P.current =
        new Date()
        .getTime(), _.current = window.setTimeout(Y, I))
    }, [Y]);
  g.useEffect(() => {
    const I = y.viewport;
    if (I) {
      const oe = () => {
          z(N.current), u == null || u()
        },
        le = () => {
          const Oe = new Date()
            .getTime() - P.current;
          N.current = N.current - Oe, window.clearTimeout(_.current),
            a == null || a()
        };
      return I.addEventListener(_i, le), I.addEventListener(ji, oe),
        () => {
          I.removeEventListener(_i, le), I.removeEventListener(ji, oe)
        }
    }
  }, [y.viewport, C, a, u, z]), g.useEffect(() => {
    l && !y.isClosePausedRef.current && z(C)
  }, [l, C, y.isClosePausedRef, z]), g.useEffect(() => (D(), () => L()), [
    D, L
  ]);
  const Ce = g.useMemo(() => x ? Xd(x) : null, [x]);
  return y.viewport ? h.jsxs(h.Fragment, {
    children: [Ce && h.jsx(sv, {
      __scopeToast: n,
      role: "status",
      "aria-live": r === "foreground" ? "assertive" : "polite",
      "aria-atomic": !0,
      children: Ce
    }), h.jsx(ov, {
      scope: n,
      onClose: Y,
      children: qo.createPortal(h.jsx(Os.ItemSlot, {
        scope: n,
        children: h.jsx(Fh, {
          asChild: !0,
          onEscapeKeyDown: Pe(s, () => {
            y.isFocusedToastEscapeKeyDownRef
              .current || Y(), y
              .isFocusedToastEscapeKeyDownRef
              .current = !1
          }),
          children: h.jsx(Ie.li, {
            role: "status",
            "aria-live": "off",
            "aria-atomic": !0,
            tabIndex: 0,
            "data-state": l ? "open" : "closed",
            "data-swipe-direction": y
              .swipeDirection,
            ...E,
            ref: c,
            style: {
              userSelect: "none",
              touchAction: "none",
              ...e.style
            },
            onKeyDown: Pe(e.onKeyDown, I => {
              I.key === "Escape" && (s ==
                null || s(I.nativeEvent), I
                .nativeEvent
                .defaultPrevented || (y
                  .isFocusedToastEscapeKeyDownRef
                  .current = !0, Y()))
            }),
            onPointerDown: Pe(e.onPointerDown,
              I => {
                I.button === 0 && (m.current = {
                  x: I.clientX,
                  y: I.clientY
                })
              }),
            onPointerMove: Pe(e.onPointerMove,
              I => {
                if (!m.current) return;
                const oe = I.clientX - m.current
                  .x,
                  le = I.clientY - m.current.y,
                  Oe = !!w.current,
                  T = ["left", "right"].includes(y
                    .swipeDirection),
                  R = ["left", "up"].includes(y
                    .swipeDirection) ? Math.min :
                  Math.max,
                  M = T ? R(0, oe) : 0,
                  F = T ? 0 : R(0, le),
                  X = I.pointerType === "touch" ?
                  10 : 2,
                  et = {
                    x: M,
                    y: F
                  },
                  Ge = {
                    originalEvent: I,
                    delta: et
                  };
                Oe ? (w.current = et, Kr(tv, p,
                    Ge, {
                      discrete: !1
                    })) : qa(et, y.swipeDirection,
                    X) ? (w.current = et, Kr(ev,
                      f, Ge, {
                        discrete: !1
                      }), I.target
                    .setPointerCapture(I
                      .pointerId)) : (Math.abs(
                    oe) > X || Math.abs(le) >
                  X) && (m.current = null)
              }),
            onPointerUp: Pe(e.onPointerUp, I => {
              const oe = w.current,
                le = I.target;
              if (le.hasPointerCapture(I
                  .pointerId) && le
                .releasePointerCapture(I
                  .pointerId), w.current = null,
                m.current = null, oe) {
                const Oe = I.currentTarget,
                  T = {
                    originalEvent: I,
                    delta: oe
                  };
                qa(oe, y.swipeDirection, y
                  .swipeThreshold) ? Kr(rv, S,
                  T, {
                    discrete: !0
                  }) : Kr(nv, v, T, {
                  discrete: !0
                }), Oe.addEventListener(
                  "click", R => R
                  .preventDefault(), {
                    once: !0
                  })
              }
            })
          })
        })
      }), y.viewport)
    })]
  }) : null
}), sv = e => {
  const {
    __scopeToast: t,
    children: n,
    ...r
  } = e, o = el(Pr, t), [l, i] = g.useState(!1), [s, a] = g.useState(!1);
  return cv(() => i(!0)), g.useEffect(() => {
    const u = window.setTimeout(() => a(!0), 1e3);
    return () => window.clearTimeout(u)
  }, []), s ? null : h.jsx(Ad, {
    asChild: !0,
    children: h.jsx(Is, {
      ...r,
      children: l && h.jsxs(h.Fragment, {
        children: [o.label, " ", n]
      })
    })
  })
}, av = "ToastTitle", Wd = g.forwardRef((e, t) => {
  const {
    __scopeToast: n,
    ...r
  } = e;
  return h.jsx(Ie.div, {
    ...r,
    ref: t
  })
});
Wd.displayName = av;
var uv = "ToastDescription",
  Hd = g.forwardRef((e, t) => {
    const {
      __scopeToast: n,
      ...r
    } = e;
    return h.jsx(Ie.div, {
      ...r,
      ref: t
    })
  });
Hd.displayName = uv;
var Qd = "ToastAction",
  Kd = g.forwardRef((e, t) => {
    const {
      altText: n,
      ...r
    } = e;
    return n.trim() ? h.jsx(Yd, {
      altText: n,
      asChild: !0,
      children: h.jsx(zs, {
        ...r,
        ref: t
      })
    }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${Qd}\`. Expected non-empty \`string\`.`
    ), null)
  });
Kd.displayName = Qd;
var Gd = "ToastClose",
  zs = g.forwardRef((e, t) => {
    const {
      __scopeToast: n,
      ...r
    } = e, o = lv(Gd, n);
    return h.jsx(Yd, {
      asChild: !0,
      children: h.jsx(Ie.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: Pe(e.onClick, o.onClose)
      })
    })
  });
zs.displayName = Gd;
var Yd = g.forwardRef((e, t) => {
  const {
    __scopeToast: n,
    altText: r,
    ...o
  } = e;
  return h.jsx(Ie.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t
  })
});

function Xd(e) {
  const t = [];
  return Array.from(e.childNodes)
    .forEach(r => {
      if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r
          .textContent), dv(r)) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          l = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (l) {
            const i = r.dataset.radixToastAnnounceAlt;
            i && t.push(i)
          } else t.push(...Xd(r))
      }
    }), t
}

function Kr(e, t, n, {
  discrete: r
}) {
  const o = n.originalEvent.currentTarget,
    l = new CustomEvent(e, {
      bubbles: !0,
      cancelable: !0,
      detail: n
    });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? Ld(o, l) : o.dispatchEvent(l)
}
var qa = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    l = r > o;
  return t === "left" || t === "right" ? l && r > n : !l && o > n
};

function cv(e = () => {}) {
  const t = Mt(e);
  Ot(() => {
    let n = 0,
      r = 0;
    return n = window.requestAnimationFrame(() => r = window
      .requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r)
    }
  }, [t])
}

function dv(e) {
  return e.nodeType === e.ELEMENT_NODE
}

function fv(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: r => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r
          .tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
      }
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t
}

function Il(e) {
  const t = document.activeElement;
  return e.some(n => n === t ? !0 : (n.focus(), document.activeElement !== t))
}
var pv = Ud,
  Zd = $d,
  Jd = Bd,
  qd = Wd,
  ef = Hd,
  tf = Kd,
  nf = zs;

function rf(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (n = rf(e[t])) && (r && (r += " "), r +=
        n)
    } else
      for (n in e) e[n] && (r && (r += " "), r += n);
  return r
}

function of() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[
    n]) && (t = rf(e)) && (r && (r += " "), r += t);
  return r
}
const eu = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e,
  tu = of,
  lf = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null) return tu(e, n == null ?
      void 0 : n.class, n == null ? void 0 : n.className);
    const {
      variants: o,
      defaultVariants: l
    } = t, i = Object.keys(o)
      .map(u => {
        const f = n == null ? void 0 : n[u],
          p = l == null ? void 0 : l[u];
        if (f === null) return null;
        const v = eu(f) || eu(p);
        return o[u][v]
      }), s = n && Object.entries(n)
      .reduce((u, f) => {
        let [p, v] = f;
        return v === void 0 || (u[p] = v), u
      }, {}), a = t == null || (r = t.compoundVariants) === null || r ===
      void 0 ? void 0 : r.reduce((u, f) => {
        let {
          class: p,
          className: v,
          ...S
        } = f;
        return Object.entries(S)
          .every(E => {
            let [y, x] = E;
            return Array.isArray(x) ? x.includes({
              ...l,
              ...s
            } [y]) : {
              ...l,
              ...s
            } [y] === x
          }) ? [...u, p, v] : u
      }, []);
    return tu(e, i, a, n == null ? void 0 : n.class, n == null ? void 0 : n
      .className)
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mv = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2")
  .toLowerCase(),
  sf = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(
    t) === n)
  .join(" ")
  .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var hv = {
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
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vv = g.forwardRef(({
  color: e = "currentColor",
  size: t = 24,
  strokeWidth: n = 2,
  absoluteStrokeWidth: r,
  className: o = "",
  children: l,
  iconNode: i,
  ...s
}, a) => g.createElement("svg", {
  ref: a,
  ...hv,
  width: t,
  height: t,
  stroke: e,
  strokeWidth: r ? Number(n) * 24 / Number(t) : n,
  className: sf("lucide", o),
  ...s
}, [...i.map(([u, f]) => g.createElement(u, f)), ...Array.isArray(l) ? l :
  [l]
]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ke = (e, t) => {
  const n = g.forwardRef(({
    className: r,
    ...o
  }, l) => g.createElement(vv, {
    ref: l,
    iconNode: t,
    className: sf(`lucide-${mv(e)}`, r),
    ...o
  }));
  return n.displayName = `${e}`, n
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gv = ke("Award", [
  ["path", {
    d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
    key: "1yiouv"
  }],
  ["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yv = ke("Briefcase", [
  ["path", {
    d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
    key: "jecpp"
  }],
  ["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "6",
    rx: "2",
    key: "i6l2r4"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xv = ke("CalendarDays", [
  ["path", {
    d: "M8 2v4",
    key: "1cmpym"
  }],
  ["path", {
    d: "M16 2v4",
    key: "4m81vk"
  }],
  ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
  }],
  ["path", {
    d: "M3 10h18",
    key: "8toen8"
  }],
  ["path", {
    d: "M8 14h.01",
    key: "6423bh"
  }],
  ["path", {
    d: "M12 14h.01",
    key: "1etili"
  }],
  ["path", {
    d: "M16 14h.01",
    key: "1gbofw"
  }],
  ["path", {
    d: "M8 18h.01",
    key: "lrp35t"
  }],
  ["path", {
    d: "M12 18h.01",
    key: "mhygvu"
  }],
  ["path", {
    d: "M16 18h.01",
    key: "kzsmim"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wv = ke("ExternalLink", [
  ["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
  }],
  ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
  }],
  ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sv = ke("FolderGit2", [
  ["path", {
    d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",
    key: "1w6njk"
  }],
  ["circle", {
    cx: "13",
    cy: "12",
    r: "2",
    key: "1j92g6"
  }],
  ["path", {
    d: "M18 19c-2.8 0-5-2.2-5-5v8",
    key: "pkpw2h"
  }],
  ["circle", {
    cx: "20",
    cy: "19",
    r: "2",
    key: "1obnsp"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Li = ke("Github", [
  ["path", {
    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
    key: "tonef"
  }],
  ["path", {
    d: "M9 18c-4.51 2-5-2-7-2",
    key: "9comsn"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ev = ke("GraduationCap", [
  ["path", {
    d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
    key: "j76jl0"
  }],
  ["path", {
    d: "M22 10v6",
    key: "1lu8f3"
  }],
  ["path", {
    d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
    key: "1r8lef"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kv = ke("Linkedin", [
  ["path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    key: "c2jq9f"
  }],
  ["rect", {
    width: "4",
    height: "12",
    x: "2",
    y: "9",
    key: "mk3on5"
  }],
  ["circle", {
    cx: "4",
    cy: "4",
    r: "2",
    key: "bt5ra8"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const af = ke("Mail", [
  ["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
  }],
  ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uf = ke("MapPin", [
  ["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
  }],
  ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cv = ke("Phone", [
  ["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nv = ke("Send", [
  ["path", {
    d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
    key: "1ffxy3"
  }],
  ["path", {
    d: "m21.854 2.147-10.94 10.939",
    key: "12cjpa"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pv = ke("Twitter", [
  ["path", {
    d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
    key: "pff0z6"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tv = ke("X", [
    ["path", {
      d: "M18 6 6 18",
      key: "1bl5f8"
    }],
    ["path", {
      d: "m6 6 12 12",
      key: "d8bk6v"
    }]
  ]),
  As = "-",
  _v = e => {
    const t = Rv(e),
      {
        conflictingClassGroups: n,
        conflictingClassGroupModifiers: r
      } = e;
    return {
      getClassGroupId: i => {
        const s = i.split(As);
        return s[0] === "" && s.length !== 1 && s.shift(), cf(s, t) || jv(i)
      },
      getConflictingClassGroupIds: (i, s) => {
        const a = n[i] || [];
        return s && r[i] ? [...a, ...r[i]] : a
      }
    }
  },
  cf = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? cf(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const l = e.join(As);
    return (i = t.validators.find(({
      validator: s
    }) => s(l))) == null ? void 0 : i.classGroupId
  },
  nu = /^\[(.+)\]$/,
  jv = e => {
    if (nu.test(e)) {
      const t = nu.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n
    }
  },
  Rv = e => {
    const {
      theme: t,
      prefix: n
    } = e, r = {
      nextPart: new Map,
      validators: []
    };
    return Iv(Object.entries(e.classGroups), n)
      .forEach(([l, i]) => {
        Ii(i, r, l, t)
      }), r
  },
  Ii = (e, t, n, r) => {
    e.forEach(o => {
      if (typeof o == "string") {
        const l = o === "" ? t : ru(t, o);
        l.classGroupId = n;
        return
      }
      if (typeof o == "function") {
        if (Lv(o)) {
          Ii(o(r), t, n, r);
          return
        }
        t.validators.push({
          validator: o,
          classGroupId: n
        });
        return
      }
      Object.entries(o)
        .forEach(([l, i]) => {
          Ii(i, ru(t, l), n, r)
        })
    })
  },
  ru = (e, t) => {
    let n = e;
    return t.split(As)
      .forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
          nextPart: new Map,
          validators: []
        }), n = n.nextPart.get(r)
      }), n
  },
  Lv = e => e.isThemeGetter,
  Iv = (e, t) => t ? e.map(([n, r]) => {
    const o = r.map(l => typeof l == "string" ? t + l : typeof l == "object" ?
      Object.fromEntries(Object.entries(l)
        .map(([i, s]) => [t + i, s])) : l);
    return [n, o]
  }) : e,
  Mv = e => {
    if (e < 1) return {
      get: () => {},
      set: () => {}
    };
    let t = 0,
      n = new Map,
      r = new Map;
    const o = (l, i) => {
      n.set(l, i), t++, t > e && (t = 0, r = n, n = new Map)
    };
    return {
      get(l) {
        let i = n.get(l);
        if (i !== void 0) return i;
        if ((i = r.get(l)) !== void 0) return o(l, i), i
      },
      set(l, i) {
        n.has(l) ? n.set(l, i) : o(l, i)
      }
    }
  },
  df = "!",
  Ov = e => {
    const {
      separator: t,
      experimentalParseClassName: n
    } = e, r = t.length === 1, o = t[0], l = t.length, i = s => {
      const a = [];
      let u = 0,
        f = 0,
        p;
      for (let x = 0; x < s.length; x++) {
        let d = s[x];
        if (u === 0) {
          if (d === o && (r || s.slice(x, x + l) === t)) {
            a.push(s.slice(f, x)), f = x + l;
            continue
          }
          if (d === "/") {
            p = x;
            continue
          }
        }
        d === "[" ? u++ : d === "]" && u--
      }
      const v = a.length === 0 ? s : s.substring(f),
        S = v.startsWith(df),
        E = S ? v.substring(1) : v,
        y = p && p > f ? p - f : void 0;
      return {
        modifiers: a,
        hasImportantModifier: S,
        baseClassName: E,
        maybePostfixModifierPosition: y
      }
    };
    return n ? s => n({
      className: s,
      parseClassName: i
    }) : i
  },
  zv = e => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
      r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r)
    }), t.push(...n.sort()), t
  },
  Av = e => ({
    cache: Mv(e.cacheSize),
    parseClassName: Ov(e),
    ..._v(e)
  }),
  Dv = /\s+/,
  Fv = (e, t) => {
    const {
      parseClassName: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: o
    } = t, l = [], i = e.trim()
      .split(Dv);
    let s = "";
    for (let a = i.length - 1; a >= 0; a -= 1) {
      const u = i[a],
        {
          modifiers: f,
          hasImportantModifier: p,
          baseClassName: v,
          maybePostfixModifierPosition: S
        } = n(u);
      let E = !!S,
        y = r(E ? v.substring(0, S) : v);
      if (!y) {
        if (!E) {
          s = u + (s.length > 0 ? " " + s : s);
          continue
        }
        if (y = r(v), !y) {
          s = u + (s.length > 0 ? " " + s : s);
          continue
        }
        E = !1
      }
      const x = zv(f)
        .join(":"),
        d = p ? x + df : x,
        c = d + y;
      if (l.includes(c)) continue;
      l.push(c);
      const m = o(y, E);
      for (let w = 0; w < m.length; ++w) {
        const C = m[w];
        l.push(d + C)
      }
      s = u + (s.length > 0 ? " " + s : s)
    }
    return s
  };

function Uv() {
  let e = 0,
    t, n, r = "";
  for (; e < arguments.length;)(t = arguments[e++]) && (n = ff(t)) && (r && (
    r += " "), r += n);
  return r
}
const ff = e => {
  if (typeof e == "string") return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++) e[r] && (t = ff(e[r])) && (n && (n +=
    " "), n += t);
  return n
};

function bv(e, ...t) {
  let n, r, o, l = i;

  function i(a) {
    const u = t.reduce((f, p) => p(f), e());
    return n = Av(u), r = n.cache.get, o = n.cache.set, l = s, s(a)
  }

  function s(a) {
    const u = r(a);
    if (u) return u;
    const f = Fv(a, n);
    return o(a, f), f
  }
  return function() {
    return l(Uv.apply(null, arguments))
  }
}
const V = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0, t
  },
  pf = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  $v = /^\d+\/\d+$/,
  Vv = new Set(["px", "full", "screen"]),
  Bv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Wv =
  /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Hv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Qv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Kv =
  /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  tt = e => wn(e) || Vv.has(e) || $v.test(e),
  pt = e => Mn(e, "length", tg),
  wn = e => !!e && !Number.isNaN(Number(e)),
  Ml = e => Mn(e, "number", wn),
  Vn = e => !!e && Number.isInteger(Number(e)),
  Gv = e => e.endsWith("%") && wn(e.slice(0, -1)),
  O = e => pf.test(e),
  mt = e => Bv.test(e),
  Yv = new Set(["length", "size", "percentage"]),
  Xv = e => Mn(e, Yv, mf),
  Zv = e => Mn(e, "position", mf),
  Jv = new Set(["image", "url"]),
  qv = e => Mn(e, Jv, rg),
  eg = e => Mn(e, "", ng),
  Bn = () => !0,
  Mn = (e, t, n) => {
    const r = pf.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[
      2]) : !1
  },
  tg = e => Wv.test(e) && !Hv.test(e),
  mf = () => !1,
  ng = e => Qv.test(e),
  rg = e => Kv.test(e),
  og = () => {
    const e = V("colors"),
      t = V("spacing"),
      n = V("blur"),
      r = V("brightness"),
      o = V("borderColor"),
      l = V("borderRadius"),
      i = V("borderSpacing"),
      s = V("borderWidth"),
      a = V("contrast"),
      u = V("grayscale"),
      f = V("hueRotate"),
      p = V("invert"),
      v = V("gap"),
      S = V("gradientColorStops"),
      E = V("gradientColorStopPositions"),
      y = V("inset"),
      x = V("margin"),
      d = V("opacity"),
      c = V("padding"),
      m = V("saturate"),
      w = V("scale"),
      C = V("sepia"),
      P = V("skew"),
      N = V("space"),
      _ = V("translate"),
      D = () => ["auto", "contain", "none"],
      L = () => ["auto", "hidden", "clip", "visible", "scroll"],
      Y = () => ["auto", O, t],
      z = () => [O, t],
      Ce = () => ["", tt, pt],
      I = () => ["auto", wn, O],
      oe = () => ["bottom", "center", "left", "left-bottom", "left-top",
        "right", "right-bottom", "right-top", "top"
      ],
      le = () => ["solid", "dashed", "dotted", "double", "none"],
      Oe = () => ["normal", "multiply", "screen", "overlay", "darken",
        "lighten", "color-dodge", "color-burn", "hard-light", "soft-light",
        "difference", "exclusion", "hue", "saturation", "color", "luminosity"
      ],
      T = () => ["start", "end", "center", "between", "around", "evenly",
        "stretch"
      ],
      R = () => ["", "0", O],
      M = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right",
        "column"
      ],
      F = () => [wn, O];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Bn],
        spacing: [tt, pt],
        blur: ["none", "", mt, O],
        brightness: F(),
        borderColor: [e],
        borderRadius: ["none", "", "full", mt, O],
        borderSpacing: z(),
        borderWidth: Ce(),
        contrast: F(),
        grayscale: R(),
        hueRotate: F(),
        invert: R(),
        gap: z(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Gv, pt],
        inset: Y(),
        margin: Y(),
        opacity: F(),
        padding: z(),
        saturate: F(),
        scale: F(),
        sepia: R(),
        skew: F(),
        space: z(),
        translate: z()
      },
      classGroups: {
        aspect: [{
          aspect: ["auto", "square", "video", O]
        }],
        container: ["container"],
        columns: [{
          columns: [mt]
        }],
        "break-after": [{
          "break-after": M()
        }],
        "break-before": [{
          "break-before": M()
        }],
        "break-inside": [{
          "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
        }],
        "box-decoration": [{
          "box-decoration": ["slice", "clone"]
        }],
        box: [{
          box: ["border", "content"]
        }],
        display: ["block", "inline-block", "inline", "flex", "inline-flex",
          "table", "inline-table", "table-caption", "table-cell",
          "table-column", "table-column-group", "table-footer-group",
          "table-header-group", "table-row-group", "table-row", "flow-root",
          "grid", "inline-grid", "contents", "list-item", "hidden"
        ],
        float: [{
          float: ["right", "left", "none", "start", "end"]
        }],
        clear: [{
          clear: ["left", "right", "both", "none", "start", "end"]
        }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [{
          object: ["contain", "cover", "fill", "none", "scale-down"]
        }],
        "object-position": [{
          object: [...oe(), O]
        }],
        overflow: [{
          overflow: L()
        }],
        "overflow-x": [{
          "overflow-x": L()
        }],
        "overflow-y": [{
          "overflow-y": L()
        }],
        overscroll: [{
          overscroll: D()
        }],
        "overscroll-x": [{
          "overscroll-x": D()
        }],
        "overscroll-y": [{
          "overscroll-y": D()
        }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{
          inset: [y]
        }],
        "inset-x": [{
          "inset-x": [y]
        }],
        "inset-y": [{
          "inset-y": [y]
        }],
        start: [{
          start: [y]
        }],
        end: [{
          end: [y]
        }],
        top: [{
          top: [y]
        }],
        right: [{
          right: [y]
        }],
        bottom: [{
          bottom: [y]
        }],
        left: [{
          left: [y]
        }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{
          z: ["auto", Vn, O]
        }],
        basis: [{
          basis: Y()
        }],
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        "flex-wrap": [{
          flex: ["wrap", "wrap-reverse", "nowrap"]
        }],
        flex: [{
          flex: ["1", "auto", "initial", "none", O]
        }],
        grow: [{
          grow: R()
        }],
        shrink: [{
          shrink: R()
        }],
        order: [{
          order: ["first", "last", "none", Vn, O]
        }],
        "grid-cols": [{
          "grid-cols": [Bn]
        }],
        "col-start-end": [{
          col: ["auto", {
            span: ["full", Vn, O]
          }, O]
        }],
        "col-start": [{
          "col-start": I()
        }],
        "col-end": [{
          "col-end": I()
        }],
        "grid-rows": [{
          "grid-rows": [Bn]
        }],
        "row-start-end": [{
          row: ["auto", {
            span: [Vn, O]
          }, O]
        }],
        "row-start": [{
          "row-start": I()
        }],
        "row-end": [{
          "row-end": I()
        }],
        "grid-flow": [{
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
        }],
        "auto-cols": [{
          "auto-cols": ["auto", "min", "max", "fr", O]
        }],
        "auto-rows": [{
          "auto-rows": ["auto", "min", "max", "fr", O]
        }],
        gap: [{
          gap: [v]
        }],
        "gap-x": [{
          "gap-x": [v]
        }],
        "gap-y": [{
          "gap-y": [v]
        }],
        "justify-content": [{
          justify: ["normal", ...T()]
        }],
        "justify-items": [{
          "justify-items": ["start", "end", "center", "stretch"]
        }],
        "justify-self": [{
          "justify-self": ["auto", "start", "end", "center", "stretch"]
        }],
        "align-content": [{
          content: ["normal", ...T(), "baseline"]
        }],
        "align-items": [{
          items: ["start", "end", "center", "baseline", "stretch"]
        }],
        "align-self": [{
          self: ["auto", "start", "end", "center", "stretch", "baseline"]
        }],
        "place-content": [{
          "place-content": [...T(), "baseline"]
        }],
        "place-items": [{
          "place-items": ["start", "end", "center", "baseline", "stretch"]
        }],
        "place-self": [{
          "place-self": ["auto", "start", "end", "center", "stretch"]
        }],
        p: [{
          p: [c]
        }],
        px: [{
          px: [c]
        }],
        py: [{
          py: [c]
        }],
        ps: [{
          ps: [c]
        }],
        pe: [{
          pe: [c]
        }],
        pt: [{
          pt: [c]
        }],
        pr: [{
          pr: [c]
        }],
        pb: [{
          pb: [c]
        }],
        pl: [{
          pl: [c]
        }],
        m: [{
          m: [x]
        }],
        mx: [{
          mx: [x]
        }],
        my: [{
          my: [x]
        }],
        ms: [{
          ms: [x]
        }],
        me: [{
          me: [x]
        }],
        mt: [{
          mt: [x]
        }],
        mr: [{
          mr: [x]
        }],
        mb: [{
          mb: [x]
        }],
        ml: [{
          ml: [x]
        }],
        "space-x": [{
          "space-x": [N]
        }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{
          "space-y": [N]
        }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{
          w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", O, t]
        }],
        "min-w": [{
          "min-w": [O, t, "min", "max", "fit"]
        }],
        "max-w": [{
          "max-w": [O, t, "none", "full", "min", "max", "fit", "prose", {
            screen: [mt]
          }, mt]
        }],
        h: [{
          h: [O, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
        }],
        "min-h": [{
          "min-h": [O, t, "min", "max", "fit", "svh", "lvh", "dvh"]
        }],
        "max-h": [{
          "max-h": [O, t, "min", "max", "fit", "svh", "lvh", "dvh"]
        }],
        size: [{
          size: [O, t, "auto", "min", "max", "fit"]
        }],
        "font-size": [{
          text: ["base", mt, pt]
        }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{
          font: ["thin", "extralight", "light", "normal", "medium",
            "semibold", "bold", "extrabold", "black", Ml
          ]
        }],
        "font-family": [{
          font: [Bn]
        }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{
          tracking: ["tighter", "tight", "normal", "wide", "wider",
            "widest", O
          ]
        }],
        "line-clamp": [{
          "line-clamp": ["none", wn, Ml]
        }],
        leading: [{
          leading: ["none", "tight", "snug", "normal", "relaxed", "loose",
            tt, O
          ]
        }],
        "list-image": [{
          "list-image": ["none", O]
        }],
        "list-style-type": [{
          list: ["none", "disc", "decimal", O]
        }],
        "list-style-position": [{
          list: ["inside", "outside"]
        }],
        "placeholder-color": [{
          placeholder: [e]
        }],
        "placeholder-opacity": [{
          "placeholder-opacity": [d]
        }],
        "text-alignment": [{
          text: ["left", "center", "right", "justify", "start", "end"]
        }],
        "text-color": [{
          text: [e]
        }],
        "text-opacity": [{
          "text-opacity": [d]
        }],
        "text-decoration": ["underline", "overline", "line-through",
          "no-underline"
        ],
        "text-decoration-style": [{
          decoration: [...le(), "wavy"]
        }],
        "text-decoration-thickness": [{
          decoration: ["auto", "from-font", tt, pt]
        }],
        "underline-offset": [{
          "underline-offset": ["auto", tt, O]
        }],
        "text-decoration-color": [{
          decoration: [e]
        }],
        "text-transform": ["uppercase", "lowercase", "capitalize",
          "normal-case"
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{
          text: ["wrap", "nowrap", "balance", "pretty"]
        }],
        indent: [{
          indent: z()
        }],
        "vertical-align": [{
          align: ["baseline", "top", "middle", "bottom", "text-top",
            "text-bottom", "sub", "super", O
          ]
        }],
        whitespace: [{
          whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap",
            "break-spaces"
          ]
        }],
        break: [{
          break: ["normal", "words", "all", "keep"]
        }],
        hyphens: [{
          hyphens: ["none", "manual", "auto"]
        }],
        content: [{
          content: ["none", O]
        }],
        "bg-attachment": [{
          bg: ["fixed", "local", "scroll"]
        }],
        "bg-clip": [{
          "bg-clip": ["border", "padding", "content", "text"]
        }],
        "bg-opacity": [{
          "bg-opacity": [d]
        }],
        "bg-origin": [{
          "bg-origin": ["border", "padding", "content"]
        }],
        "bg-position": [{
          bg: [...oe(), Zv]
        }],
        "bg-repeat": [{
          bg: ["no-repeat", {
            repeat: ["", "x", "y", "round", "space"]
          }]
        }],
        "bg-size": [{
          bg: ["auto", "cover", "contain", Xv]
        }],
        "bg-image": [{
          bg: ["none", {
            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, qv]
        }],
        "bg-color": [{
          bg: [e]
        }],
        "gradient-from-pos": [{
          from: [E]
        }],
        "gradient-via-pos": [{
          via: [E]
        }],
        "gradient-to-pos": [{
          to: [E]
        }],
        "gradient-from": [{
          from: [S]
        }],
        "gradient-via": [{
          via: [S]
        }],
        "gradient-to": [{
          to: [S]
        }],
        rounded: [{
          rounded: [l]
        }],
        "rounded-s": [{
          "rounded-s": [l]
        }],
        "rounded-e": [{
          "rounded-e": [l]
        }],
        "rounded-t": [{
          "rounded-t": [l]
        }],
        "rounded-r": [{
          "rounded-r": [l]
        }],
        "rounded-b": [{
          "rounded-b": [l]
        }],
        "rounded-l": [{
          "rounded-l": [l]
        }],
        "rounded-ss": [{
          "rounded-ss": [l]
        }],
        "rounded-se": [{
          "rounded-se": [l]
        }],
        "rounded-ee": [{
          "rounded-ee": [l]
        }],
        "rounded-es": [{
          "rounded-es": [l]
        }],
        "rounded-tl": [{
          "rounded-tl": [l]
        }],
        "rounded-tr": [{
          "rounded-tr": [l]
        }],
        "rounded-br": [{
          "rounded-br": [l]
        }],
        "rounded-bl": [{
          "rounded-bl": [l]
        }],
        "border-w": [{
          border: [s]
        }],
        "border-w-x": [{
          "border-x": [s]
        }],
        "border-w-y": [{
          "border-y": [s]
        }],
        "border-w-s": [{
          "border-s": [s]
        }],
        "border-w-e": [{
          "border-e": [s]
        }],
        "border-w-t": [{
          "border-t": [s]
        }],
        "border-w-r": [{
          "border-r": [s]
        }],
        "border-w-b": [{
          "border-b": [s]
        }],
        "border-w-l": [{
          "border-l": [s]
        }],
        "border-opacity": [{
          "border-opacity": [d]
        }],
        "border-style": [{
          border: [...le(), "hidden"]
        }],
        "divide-x": [{
          "divide-x": [s]
        }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{
          "divide-y": [s]
        }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{
          "divide-opacity": [d]
        }],
        "divide-style": [{
          divide: le()
        }],
        "border-color": [{
          border: [o]
        }],
        "border-color-x": [{
          "border-x": [o]
        }],
        "border-color-y": [{
          "border-y": [o]
        }],
        "border-color-s": [{
          "border-s": [o]
        }],
        "border-color-e": [{
          "border-e": [o]
        }],
        "border-color-t": [{
          "border-t": [o]
        }],
        "border-color-r": [{
          "border-r": [o]
        }],
        "border-color-b": [{
          "border-b": [o]
        }],
        "border-color-l": [{
          "border-l": [o]
        }],
        "divide-color": [{
          divide: [o]
        }],
        "outline-style": [{
          outline: ["", ...le()]
        }],
        "outline-offset": [{
          "outline-offset": [tt, O]
        }],
        "outline-w": [{
          outline: [tt, pt]
        }],
        "outline-color": [{
          outline: [e]
        }],
        "ring-w": [{
          ring: Ce()
        }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{
          ring: [e]
        }],
        "ring-opacity": [{
          "ring-opacity": [d]
        }],
        "ring-offset-w": [{
          "ring-offset": [tt, pt]
        }],
        "ring-offset-color": [{
          "ring-offset": [e]
        }],
        shadow: [{
          shadow: ["", "inner", "none", mt, eg]
        }],
        "shadow-color": [{
          shadow: [Bn]
        }],
        opacity: [{
          opacity: [d]
        }],
        "mix-blend": [{
          "mix-blend": [...Oe(), "plus-lighter", "plus-darker"]
        }],
        "bg-blend": [{
          "bg-blend": Oe()
        }],
        filter: [{
          filter: ["", "none"]
        }],
        blur: [{
          blur: [n]
        }],
        brightness: [{
          brightness: [r]
        }],
        contrast: [{
          contrast: [a]
        }],
        "drop-shadow": [{
          "drop-shadow": ["", "none", mt, O]
        }],
        grayscale: [{
          grayscale: [u]
        }],
        "hue-rotate": [{
          "hue-rotate": [f]
        }],
        invert: [{
          invert: [p]
        }],
        saturate: [{
          saturate: [m]
        }],
        sepia: [{
          sepia: [C]
        }],
        "backdrop-filter": [{
          "backdrop-filter": ["", "none"]
        }],
        "backdrop-blur": [{
          "backdrop-blur": [n]
        }],
        "backdrop-brightness": [{
          "backdrop-brightness": [r]
        }],
        "backdrop-contrast": [{
          "backdrop-contrast": [a]
        }],
        "backdrop-grayscale": [{
          "backdrop-grayscale": [u]
        }],
        "backdrop-hue-rotate": [{
          "backdrop-hue-rotate": [f]
        }],
        "backdrop-invert": [{
          "backdrop-invert": [p]
        }],
        "backdrop-opacity": [{
          "backdrop-opacity": [d]
        }],
        "backdrop-saturate": [{
          "backdrop-saturate": [m]
        }],
        "backdrop-sepia": [{
          "backdrop-sepia": [C]
        }],
        "border-collapse": [{
          border: ["collapse", "separate"]
        }],
        "border-spacing": [{
          "border-spacing": [i]
        }],
        "border-spacing-x": [{
          "border-spacing-x": [i]
        }],
        "border-spacing-y": [{
          "border-spacing-y": [i]
        }],
        "table-layout": [{
          table: ["auto", "fixed"]
        }],
        caption: [{
          caption: ["top", "bottom"]
        }],
        transition: [{
          transition: ["none", "all", "", "colors", "opacity", "shadow",
            "transform", O
          ]
        }],
        duration: [{
          duration: F()
        }],
        ease: [{
          ease: ["linear", "in", "out", "in-out", O]
        }],
        delay: [{
          delay: F()
        }],
        animate: [{
          animate: ["none", "spin", "ping", "pulse", "bounce", O]
        }],
        transform: [{
          transform: ["", "gpu", "none"]
        }],
        scale: [{
          scale: [w]
        }],
        "scale-x": [{
          "scale-x": [w]
        }],
        "scale-y": [{
          "scale-y": [w]
        }],
        rotate: [{
          rotate: [Vn, O]
        }],
        "translate-x": [{
          "translate-x": [_]
        }],
        "translate-y": [{
          "translate-y": [_]
        }],
        "skew-x": [{
          "skew-x": [P]
        }],
        "skew-y": [{
          "skew-y": [P]
        }],
        "transform-origin": [{
          origin: ["center", "top", "top-right", "right", "bottom-right",
            "bottom", "bottom-left", "left", "top-left", O
          ]
        }],
        accent: [{
          accent: ["auto", e]
        }],
        appearance: [{
          appearance: ["none", "auto"]
        }],
        cursor: [{
          cursor: ["auto", "default", "pointer", "wait", "text", "move",
            "help", "not-allowed", "none", "context-menu", "progress",
            "cell", "crosshair", "vertical-text", "alias", "copy",
            "no-drop", "grab", "grabbing", "all-scroll", "col-resize",
            "row-resize", "n-resize", "e-resize", "s-resize", "w-resize",
            "ne-resize", "nw-resize", "se-resize", "sw-resize",
            "ew-resize", "ns-resize", "nesw-resize", "nwse-resize",
            "zoom-in", "zoom-out", O
          ]
        }],
        "caret-color": [{
          caret: [e]
        }],
        "pointer-events": [{
          "pointer-events": ["none", "auto"]
        }],
        resize: [{
          resize: ["none", "y", "x", ""]
        }],
        "scroll-behavior": [{
          scroll: ["auto", "smooth"]
        }],
        "scroll-m": [{
          "scroll-m": z()
        }],
        "scroll-mx": [{
          "scroll-mx": z()
        }],
        "scroll-my": [{
          "scroll-my": z()
        }],
        "scroll-ms": [{
          "scroll-ms": z()
        }],
        "scroll-me": [{
          "scroll-me": z()
        }],
        "scroll-mt": [{
          "scroll-mt": z()
        }],
        "scroll-mr": [{
          "scroll-mr": z()
        }],
        "scroll-mb": [{
          "scroll-mb": z()
        }],
        "scroll-ml": [{
          "scroll-ml": z()
        }],
        "scroll-p": [{
          "scroll-p": z()
        }],
        "scroll-px": [{
          "scroll-px": z()
        }],
        "scroll-py": [{
          "scroll-py": z()
        }],
        "scroll-ps": [{
          "scroll-ps": z()
        }],
        "scroll-pe": [{
          "scroll-pe": z()
        }],
        "scroll-pt": [{
          "scroll-pt": z()
        }],
        "scroll-pr": [{
          "scroll-pr": z()
        }],
        "scroll-pb": [{
          "scroll-pb": z()
        }],
        "scroll-pl": [{
          "scroll-pl": z()
        }],
        "snap-align": [{
          snap: ["start", "end", "center", "align-none"]
        }],
        "snap-stop": [{
          snap: ["normal", "always"]
        }],
        "snap-type": [{
          snap: ["none", "x", "y", "both"]
        }],
        "snap-strictness": [{
          snap: ["mandatory", "proximity"]
        }],
        touch: [{
          touch: ["auto", "none", "manipulation"]
        }],
        "touch-x": [{
          "touch-pan": ["x", "left", "right"]
        }],
        "touch-y": [{
          "touch-pan": ["y", "up", "down"]
        }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{
          select: ["none", "text", "all", "auto"]
        }],
        "will-change": [{
          "will-change": ["auto", "scroll", "contents", "transform", O]
        }],
        fill: [{
          fill: [e, "none"]
        }],
        "stroke-w": [{
          stroke: [tt, pt, Ml]
        }],
        stroke: [{
          stroke: [e, "none"]
        }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{
          "forced-color-adjust": ["auto", "none"]
        }]
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom",
          "left"
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
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure",
          "fvn-spacing", "fvn-fraction"
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r",
          "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee",
          "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r",
          "border-w-b", "border-w-l"
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-s", "border-color-e", "border-color-t",
          "border-color-r", "border-color-b", "border-color-l"
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me",
          "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe",
          "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"
        ],
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
    }
  },
  lg = bv(og);

function Me(...e) {
  return lg(of(e))
}
const ig = pv,
  hf = g.forwardRef(({
    className: e,
    ...t
  }, n) => h.jsx(Zd, {
    ref: n,
    className: Me(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      e),
    ...t
  }));
hf.displayName = Zd.displayName;
const sg = lf(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
      },
      defaultVariants: {
        variant: "default"
      }
    }),
  vf = g.forwardRef(({
    className: e,
    variant: t,
    ...n
  }, r) => h.jsx(Jd, {
    ref: r,
    className: Me(sg({
      variant: t
    }), e),
    ...n
  }));
vf.displayName = Jd.displayName;
const ag = g.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx(tf, {
  ref: n,
  className: Me(
    "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
    e),
  ...t
}));
ag.displayName = tf.displayName;
const gf = g.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx(nf, {
  ref: n,
  className: Me(
    "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
    e),
  "toast-close": "",
  ...t,
  children: h.jsx(Tv, {
    className: "h-4 w-4"
  })
}));
gf.displayName = nf.displayName;
const yf = g.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx(qd, {
  ref: n,
  className: Me("text-sm font-semibold", e),
  ...t
}));
yf.displayName = qd.displayName;
const xf = g.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx(ef, {
  ref: n,
  className: Me("text-sm opacity-90", e),
  ...t
}));
xf.displayName = ef.displayName;

function ug() {
  const {
    toasts: e
  } = jd();
  return h.jsxs(ig, {
    children: [e.map(function({
      id: t,
      title: n,
      description: r,
      action: o,
      ...l
    }) {
      return h.jsxs(vf, {
        ...l,
        children: [h.jsxs("div", {
          className: "grid gap-1",
          children: [n && h.jsx(yf, {
            children: n
          }), r && h.jsx(xf, {
            children: r
          })]
        }), o, h.jsx(gf, {})]
      }, t)
    }), h.jsx(hf, {})]
  })
}
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function zo() {
  return zo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] =
        n[r])
    }
    return e
  }, zo.apply(this, arguments)
}
var Et;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Et || (Et = {}));
const ou = "popstate";

function cg(e) {
  e === void 0 && (e = {});

  function t(o, l) {
    let {
      pathname: i = "/",
      search: s = "",
      hash: a = ""
    } = Tr(o.location.hash.substr(1));
    return !i.startsWith("/") && !i.startsWith(".") && (i = "/" + i), Mi("", {
      pathname: i,
      search: s,
      hash: a
    }, l.state && l.state.usr || null, l.state && l.state.key || "default")
  }

  function n(o, l) {
    let i = o.document.querySelector("base"),
      s = "";
    if (i && i.getAttribute("href")) {
      let a = o.location.href,
        u = a.indexOf("#");
      s = u === -1 ? a : a.slice(0, u)
    }
    return s + "#" + (typeof l == "string" ? l : wf(l))
  }

  function r(o, l) {
    Ds(o.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" + JSON
      .stringify(l) + ")")
  }
  return fg(t, n, r, e)
}

function Ee(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function Ds(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t)
    } catch {}
  }
}

function dg() {
  return Math.random()
    .toString(36)
    .substr(2, 8)
}

function lu(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  }
}

function Mi(e, t, n, r) {
  return n === void 0 && (n = null), zo({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? Tr(t) : t, {
    state: n,
    key: t && t.key || r || dg()
  })
}

function wf(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !==
    "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function Tr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname =
      e)
  }
  return t
}

function fg(e, t, n, r) {
  r === void 0 && (r = {});
  let {
    window: o = document.defaultView,
    v5Compat: l = !1
  } = r, i = o.history, s = Et.Pop, a = null, u = f();
  u == null && (u = 0, i.replaceState(zo({}, i.state, {
    idx: u
  }), ""));

  function f() {
    return (i.state || {
        idx: null
      })
      .idx
  }

  function p() {
    s = Et.Pop;
    let x = f(),
      d = x == null ? null : x - u;
    u = x, a && a({
      action: s,
      location: y.location,
      delta: d
    })
  }

  function v(x, d) {
    s = Et.Push;
    let c = Mi(y.location, x, d);
    n && n(c, x), u = f() + 1;
    let m = lu(c, u),
      w = y.createHref(c);
    try {
      i.pushState(m, "", w)
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      o.location.assign(w)
    }
    l && a && a({
      action: s,
      location: y.location,
      delta: 1
    })
  }

  function S(x, d) {
    s = Et.Replace;
    let c = Mi(y.location, x, d);
    n && n(c, x), u = f();
    let m = lu(c, u),
      w = y.createHref(c);
    i.replaceState(m, "", w), l && a && a({
      action: s,
      location: y.location,
      delta: 0
    })
  }

  function E(x) {
    let d = o.location.origin !== "null" ? o.location.origin : o.location.href,
      c = typeof x == "string" ? x : wf(x);
    return c = c.replace(/ $/, "%20"), Ee(d,
      "No window.location.(origin|href) available to create URL for href: " +
      c), new URL(c, d)
  }
  let y = {
    get action() {
      return s
    },
    get location() {
      return e(o, i)
    },
    listen(x) {
      if (a) throw new Error("A history only accepts one active listener");
      return o.addEventListener(ou, p), a = x, () => {
        o.removeEventListener(ou, p), a = null
      }
    },
    createHref(x) {
      return t(o, x)
    },
    createURL: E,
    encodeLocation(x) {
      let d = E(x);
      return {
        pathname: d.pathname,
        search: d.search,
        hash: d.hash
      }
    },
    push: v,
    replace: S,
    go(x) {
      return i.go(x)
    }
  };
  return y
}
var iu;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error =
    "error"
})(iu || (iu = {}));

function pg(e, t, n) {
  return n === void 0 && (n = "/"), mg(e, t, n, !1)
}

function mg(e, t, n, r) {
  let o = typeof t == "string" ? Tr(t) : t,
    l = kf(o.pathname || "/", n);
  if (l == null) return null;
  let i = Sf(e);
  hg(i);
  let s = null;
  for (let a = 0; s == null && a < i.length; ++a) {
    let u = Pg(l);
    s = Cg(i[a], u, r)
  }
  return s
}

function Sf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (l, i, s) => {
    let a = {
      relativePath: s === void 0 ? l.path || "" : s,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: i,
      route: l
    };
    a.relativePath.startsWith("/") && (Ee(a.relativePath.startsWith(r),
        'Absolute route path "' + a.relativePath + '" nested under path ' +
        ('"' + r + '" is not valid. An absolute child route path ') +
        "must start with the combined path of all its parent routes."), a
      .relativePath = a.relativePath.slice(r.length));
    let u = Sn([r, a.relativePath]),
      f = n.concat(a);
    l.children && l.children.length > 0 && (Ee(l.index !== !0,
      "Index routes must not have child routes. Please remove " + (
        'all child routes from route path "' + u + '".')), Sf(l.children,
      t, f, u)), !(l.path == null && !l.index) && t.push({
      path: u,
      score: Eg(u, l.index),
      routesMeta: f
    })
  };
  return e.forEach((l, i) => {
    var s;
    if (l.path === "" || !((s = l.path) != null && s.includes("?"))) o(l,
      i);
    else
      for (let a of Ef(l.path)) o(l, i, a)
  }), t
}

function Ef(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t, o = n.endsWith("?"), l = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [l, ""] : [l];
  let i = Ef(r.join("/")),
    s = [];
  return s.push(...i.map(a => a === "" ? l : [l, a].join("/"))), o && s.push(...
    i), s.map(a => e.startsWith("/") && a === "" ? "/" : a)
}

function hg(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : kg(t.routesMeta
    .map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const vg = /^:[\w-]+$/,
  gg = 3,
  yg = 2,
  xg = 1,
  wg = 10,
  Sg = -2,
  su = e => e === "*";

function Eg(e, t) {
  let n = e.split("/"),
    r = n.length;
  return n.some(su) && (r += Sg), t && (r += yg), n.filter(o => !su(o))
    .reduce((o, l) => o + (vg.test(l) ? gg : l === "" ? xg : wg), r)
}

function kg(e, t) {
  return e.length === t.length && e.slice(0, -1)
    .every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function Cg(e, t, n) {
  let {
    routesMeta: r
  } = e, o = {}, l = "/", i = [];
  for (let s = 0; s < r.length; ++s) {
    let a = r[s],
      u = s === r.length - 1,
      f = l === "/" ? t : t.slice(l.length) || "/",
      p = au({
        path: a.relativePath,
        caseSensitive: a.caseSensitive,
        end: u
      }, f),
      v = a.route;
    if (!p && u && n && !r[r.length - 1].route.index && (p = au({
        path: a.relativePath,
        caseSensitive: a.caseSensitive,
        end: !1
      }, f)), !p) return null;
    Object.assign(o, p.params), i.push({
      params: o,
      pathname: Sn([l, p.pathname]),
      pathnameBase: Tg(Sn([l, p.pathnameBase])),
      route: v
    }), p.pathnameBase !== "/" && (l = Sn([l, p.pathnameBase]))
  }
  return i
}

function au(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = Ng(e.path, e.caseSensitive, e.end), o = t.match(n);
  if (!o) return null;
  let l = o[0],
    i = l.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: r.reduce((u, f, p) => {
      let {
        paramName: v,
        isOptional: S
      } = f;
      if (v === "*") {
        let y = s[p] || "";
        i = l.slice(0, l.length - y.length)
          .replace(/(.)\/+$/, "$1")
      }
      const E = s[p];
      return S && !E ? u[v] = void 0 : u[v] = (E || "")
        .replace(/%2F/g, "/"), u
    }, {}),
    pathname: l,
    pathnameBase: i,
    pattern: e
  }
}

function Ng(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), Ds(e === "*" || !e
    .endsWith("*") || e.endsWith("/*"), 'Route path "' + e +
    '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") +
      '" because the `*` character must ') +
    "always follow a `/` in the pattern. To get rid of this warning, " + (
      'please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [],
    o = "^" + e.replace(/\/*\*?$/, "")
    .replace(/^\/*/, "/")
    .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
    .replace(/\/:([\w-]+)(\?)?/g, (i, s, a) => (r.push({
      paramName: s,
      isOptional: a != null
    }), a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push({
      paramName: "*"
    }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o +=
    "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o,
      t ? void 0 : "i"), r]
}

function Pg(e) {
  try {
    return e.split("/")
      .map(t => decodeURIComponent(t)
        .replace(/\//g, "%2F"))
      .join("/")
  } catch (t) {
    return Ds(!1, 'The URL path "' + e +
      '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
      ("encoding (" + t + ").")), e
  }
}

function kf(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase()
    .startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/"
}
const Sn = e => e.join("/")
  .replace(/\/\/+/g, "/"),
  Tg = e => e.replace(/\/+$/, "")
  .replace(/^\/*/, "/");

function _g(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText ==
    "string" && typeof e.internal == "boolean" && "data" in e
}
const Cf = ["post", "put", "patch", "delete"];
new Set(Cf);
const jg = ["get", ...Cf];
new Set(jg);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ao() {
  return Ao = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] =
        n[r])
    }
    return e
  }, Ao.apply(this, arguments)
}
const Rg = g.createContext(null),
  Lg = g.createContext(null),
  Nf = g.createContext(null),
  tl = g.createContext(null),
  nl = g.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
  }),
  Pf = g.createContext(null);

function Fs() {
  return g.useContext(tl) != null
}

function Tf() {
  return Fs() || Ee(!1), g.useContext(tl)
    .location
}

function Ig(e, t) {
  return Mg(e, t)
}

function Mg(e, t, n, r) {
  Fs() || Ee(!1);
  let {
    navigator: o
  } = g.useContext(Nf), {
    matches: l
  } = g.useContext(nl), i = l[l.length - 1], s = i ? i.params : {};
  i && i.pathname;
  let a = i ? i.pathnameBase : "/";
  i && i.route;
  let u = Tf(),
    f;
  if (t) {
    var p;
    let x = typeof t == "string" ? Tr(t) : t;
    a === "/" || (p = x.pathname) != null && p.startsWith(a) || Ee(!1), f = x
  } else f = u;
  let v = f.pathname || "/",
    S = v;
  if (a !== "/") {
    let x = a.replace(/^\//, "")
      .split("/");
    S = "/" + v.replace(/^\//, "")
      .split("/")
      .slice(x.length)
      .join("/")
  }
  let E = pg(e, {
      pathname: S
    }),
    y = Fg(E && E.map(x => Object.assign({}, x, {
      params: Object.assign({}, s, x.params),
      pathname: Sn([a, o.encodeLocation ? o.encodeLocation(x.pathname)
        .pathname : x.pathname
      ]),
      pathnameBase: x.pathnameBase === "/" ? a : Sn([a, o.encodeLocation ?
        o.encodeLocation(x.pathnameBase)
        .pathname : x.pathnameBase
      ])
    })), l, n, r);
  return t && y ? g.createElement(tl.Provider, {
    value: {
      location: Ao({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, f),
      navigationType: Et.Pop
    }
  }, y) : y
}

function Og() {
  let e = Vg(),
    t = _g(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message :
    JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = {
      padding: "0.5rem",
      backgroundColor: "rgba(200,200,200, 0.5)"
    };
  return g.createElement(g.Fragment, null, g.createElement("h2", null,
    "Unexpected Application Error!"), g.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), n ? g.createElement("pre", {
    style: o
  }, n) : null, null)
}
const zg = g.createElement(Og, null);
class Ag extends g.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    }
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    }
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || n.revalidation !== "idle" && t
      .revalidation === "idle" ? {
        error: t.error,
        location: t.location,
        revalidation: t.revalidation
      } : {
        error: t.error !== void 0 ? t.error : n.error,
        location: n.location,
        revalidation: t.revalidation || n.revalidation
      }
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render",
      t, n)
  }
  render() {
    return this.state.error !== void 0 ? g.createElement(nl.Provider, {
      value: this.props.routeContext
    }, g.createElement(Pf.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children
  }
}

function Dg(e) {
  let {
    routeContext: t,
    match: n,
    children: r
  } = e, o = g.useContext(Rg);
  return o && o.static && o.staticContext && (n.route.errorElement || n.route
    .ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route
    .id), g.createElement(nl.Provider, {
    value: t
  }, r)
}

function Fg(e, t, n, r) {
  var o;
  if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r =
      null), e == null) {
    var l;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if ((l = r) != null && l.v7_partialHydration && t.length === 0 && !n
      .initialized && n.matches.length > 0) e = n.matches;
    else return null
  }
  let i = e,
    s = (o = n) == null ? void 0 : o.errors;
  if (s != null) {
    let f = i.findIndex(p => p.route.id && (s == null ? void 0 : s[p.route
      .id]) !== void 0);
    f >= 0 || Ee(!1), i = i.slice(0, Math.min(i.length, f + 1))
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < i.length; f++) {
      let p = i[f];
      if ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u =
          f), p.route.id) {
        let {
          loaderData: v,
          errors: S
        } = n, E = p.route.loader && v[p.route.id] === void 0 && (!S || S[p
          .route.id] === void 0);
        if (p.route.lazy || E) {
          a = !0, u >= 0 ? i = i.slice(0, u + 1) : i = [i[0]];
          break
        }
      }
    }
  return i.reduceRight((f, p, v) => {
    let S, E = !1,
      y = null,
      x = null;
    n && (S = s && p.route.id ? s[p.route.id] : void 0, y = p.route
      .errorElement || zg, a && (u < 0 && v === 0 ? (E = !0, x = null) :
        u === v && (E = !0, x = p.route.hydrateFallbackElement || null)));
    let d = t.concat(i.slice(0, v + 1)),
      c = () => {
        let m;
        return S ? m = y : E ? m = x : p.route.Component ? m = g
          .createElement(p.route.Component, null) : p.route.element ? m = p
          .route.element : m = f, g.createElement(Dg, {
            match: p,
            routeContext: {
              outlet: f,
              matches: d,
              isDataRoute: n != null
            },
            children: m
          })
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || v === 0) ?
      g.createElement(Ag, {
        location: n.location,
        revalidation: n.revalidation,
        component: y,
        error: S,
        children: c(),
        routeContext: {
          outlet: null,
          matches: d,
          isDataRoute: !0
        }
      }) : c()
  }, null)
}
var Oi = function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e
    .UseActionData = "useActionData", e.UseRouteError = "useRouteError", e
    .UseNavigation = "useNavigation", e.UseRouteLoaderData =
    "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator =
    "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId =
    "useRouteId", e
}(Oi || {});

function Ug(e) {
  let t = g.useContext(Lg);
  return t || Ee(!1), t
}

function bg(e) {
  let t = g.useContext(nl);
  return t || Ee(!1), t
}

function $g(e) {
  let t = bg(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Ee(!1), n.route.id
}

function Vg() {
  var e;
  let t = g.useContext(Pf),
    n = Ug(Oi.UseRouteError),
    r = $g(Oi.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function Bg(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath
}

function zi(e) {
  Ee(!1)
}

function Wg(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Et.Pop,
    navigator: l,
    static: i = !1,
    future: s
  } = e;
  Fs() && Ee(!1);
  let a = t.replace(/^\/*/, "/"),
    u = g.useMemo(() => ({
      basename: a,
      navigator: l,
      static: i,
      future: Ao({
        v7_relativeSplatPath: !1
      }, s)
    }), [a, s, l, i]);
  typeof r == "string" && (r = Tr(r));
  let {
    pathname: f = "/",
    search: p = "",
    hash: v = "",
    state: S = null,
    key: E = "default"
  } = r, y = g.useMemo(() => {
    let x = kf(f, a);
    return x == null ? null : {
      location: {
        pathname: x,
        search: p,
        hash: v,
        state: S,
        key: E
      },
      navigationType: o
    }
  }, [a, f, p, v, S, E, o]);
  return y == null ? null : g.createElement(Nf.Provider, {
    value: u
  }, g.createElement(tl.Provider, {
    children: n,
    value: y
  }))
}

function Hg(e) {
  let {
    children: t,
    location: n
  } = e;
  return Ig(Ai(t), n)
}
new Promise(() => {});

function Ai(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return g.Children.forEach(e, (r, o) => {
    if (!g.isValidElement(r)) return;
    let l = [...t, o];
    if (r.type === g.Fragment) {
      n.push.apply(n, Ai(r.props.children, l));
      return
    }
    r.type !== zi && Ee(!1), !r.props.index || !r.props.children || Ee(!1);
    let i = {
      id: r.props.id || l.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      Component: r.props.Component,
      index: r.props.index,
      path: r.props.path,
      loader: r.props.loader,
      action: r.props.action,
      errorElement: r.props.errorElement,
      ErrorBoundary: r.props.ErrorBoundary,
      hasErrorBoundary: r.props.ErrorBoundary != null || r.props
        .errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle,
      lazy: r.props.lazy
    };
    r.props.children && (i.children = Ai(r.props.children, l)), n.push(i)
  }), n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const Qg = "6";
try {
  window.__reactRouterVersion = Qg
} catch {}
const Kg = "startTransition",
  uu = Nu[Kg];

function Gg(e) {
  let {
    basename: t,
    children: n,
    future: r,
    window: o
  } = e, l = g.useRef();
  l.current == null && (l.current = cg({
    window: o,
    v5Compat: !0
  }));
  let i = l.current,
    [s, a] = g.useState({
      action: i.action,
      location: i.location
    }),
    {
      v7_startTransition: u
    } = r || {},
    f = g.useCallback(p => {
      u && uu ? uu(() => a(p)) : a(p)
    }, [a, u]);
  return g.useLayoutEffect(() => i.listen(f), [i, f]), g.useEffect(() => Bg(r),
    [r]), g.createElement(Wg, {
    basename: t,
    children: n,
    location: s.location,
    navigationType: s.action,
    navigator: i,
    future: r
  })
}
var cu;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e
    .useViewTransitionState = "useViewTransitionState"
})(cu || (cu = {}));
var du;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e
    .UseScrollRestoration = "useScrollRestoration"
})(du || (du = {}));
var _f = {
    exports: {}
  },
  jf = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jn = g;

function Yg(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Xg = typeof Object.is == "function" ? Object.is : Yg,
  Zg = jn.useState,
  Jg = jn.useEffect,
  qg = jn.useLayoutEffect,
  ey = jn.useDebugValue;

function ty(e, t) {
  var n = t(),
    r = Zg({
      inst: {
        value: n,
        getSnapshot: t
      }
    }),
    o = r[0].inst,
    l = r[1];
  return qg(function() {
    o.value = n, o.getSnapshot = t, Ol(o) && l({
      inst: o
    })
  }, [e, n, t]), Jg(function() {
    return Ol(o) && l({
      inst: o
    }), e(function() {
      Ol(o) && l({
        inst: o
      })
    })
  }, [e]), ey(n), n
}

function Ol(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Xg(e, n)
  } catch {
    return !0
  }
}

function ny(e, t) {
  return t()
}
var ry = typeof window > "u" || typeof window.document > "u" || typeof window
  .document.createElement > "u" ? ny : ty;
jf.useSyncExternalStore = jn.useSyncExternalStore !== void 0 ? jn
  .useSyncExternalStore : ry;
_f.exports = jf;
var oy = _f.exports;

function ly() {
  return oy.useSyncExternalStore(iy, () => !0, () => !1)
}

function iy() {
  return () => {}
}
var Us = "Avatar",
  [sy, Sy] = Ls(Us),
  [ay, Rf] = sy(Us),
  Lf = g.forwardRef((e, t) => {
    const {
      __scopeAvatar: n,
      ...r
    } = e, [o, l] = g.useState("idle");
    return h.jsx(ay, {
      scope: n,
      imageLoadingStatus: o,
      onImageLoadingStatusChange: l,
      children: h.jsx(Ie.span, {
        ...r,
        ref: t
      })
    })
  });
Lf.displayName = Us;
var If = "AvatarImage",
  Mf = g.forwardRef((e, t) => {
    const {
      __scopeAvatar: n,
      src: r,
      onLoadingStatusChange: o = () => {},
      ...l
    } = e, i = Rf(If, n), s = uy(r, l), a = Mt(u => {
      o(u), i.onImageLoadingStatusChange(u)
    });
    return Ot(() => {
      s !== "idle" && a(s)
    }, [s, a]), s === "loaded" ? h.jsx(Ie.img, {
      ...l,
      ref: t,
      src: r
    }) : null
  });
Mf.displayName = If;
var Of = "AvatarFallback",
  zf = g.forwardRef((e, t) => {
    const {
      __scopeAvatar: n,
      delayMs: r,
      ...o
    } = e, l = Rf(Of, n), [i, s] = g.useState(r === void 0);
    return g.useEffect(() => {
      if (r !== void 0) {
        const a = window.setTimeout(() => s(!0), r);
        return () => window.clearTimeout(a)
      }
    }, [r]), i && l.imageLoadingStatus !== "loaded" ? h.jsx(Ie.span, {
      ...o,
      ref: t
    }) : null
  });
zf.displayName = Of;

function fu(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ?
    "loaded" : "loading") : "error" : "idle"
}

function uy(e, {
  referrerPolicy: t,
  crossOrigin: n
}) {
  const r = ly(),
    o = g.useRef(null),
    l = r ? (o.current || (o.current = new window.Image), o.current) : null,
    [i, s] = g.useState(() => fu(l, e));
  return Ot(() => {
    s(fu(l, e))
  }, [l, e]), Ot(() => {
    const a = p => () => {
      s(p)
    };
    if (!l) return;
    const u = a("loaded"),
      f = a("error");
    return l.addEventListener("load", u), l.addEventListener("error", f),
      t && (l.referrerPolicy = t), typeof n == "string" && (l.crossOrigin =
        n), () => {
        l.removeEventListener("load", u), l.removeEventListener("error", f)
      }
  }, [l, n, t]), i
}
var Af = Lf,
  Df = Mf,
  Ff = zf;
const Uf = g.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx(Af, {
  ref: n,
  className: Me(
    "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", e),
  ...t
}));
Uf.displayName = Af.displayName;
const bf = g.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx(Df, {
  ref: n,
  className: Me("aspect-square h-full w-full", e),
  ...t
}));
bf.displayName = Df.displayName;
const $f = g.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx(Ff, {
  ref: n,
  className: Me(
    "flex h-full w-full items-center justify-center rounded-full bg-muted",
    e),
  ...t
}));
$f.displayName = Ff.displayName;
const cy = ({
    name: e,
    role: t,
    email: n,
    location: r,
    avatarUrl: o
  }) => {
    const l = [{
      icon: Li,
      href: "https://github.com/daftercool",
      label: "GitHub"
    }, {
      icon: kv,
      href: "https://www.linkedin.com/in/salim-amrouche-62801a192/",
      label: "LinkedIn"
    }, {
      icon: Pv,
      href: "#",
      label: "Twitter"
    }];
    return h.jsxs("aside", {
      className: "glass-sidebar fixed left-0 top-0 h-screen w-72 p-8 flex flex-col items-center z-50 slide-in-left",
      children: [h.jsxs("div", {
        className: "relative mb-6",
        children: [h.jsx("div", {
          className: "absolute inset-0 rounded-full bg-primary/20 animate-pulse-glow blur-xl"
        }), h.jsxs(Uf, {
          className: "w-36 h-36 border-4 border-primary/30 relative",
          children: [h.jsx(bf, {
            src: o,
            alt: e
          }), h.jsx($f, {
            className: "bg-secondary text-3xl font-semibold text-foreground",
            children: e.split(" ")
              .map(i => i[0])
              .join("")
          })]
        })]
      }), h.jsx("h1", {
        className: "text-xl font-semibold text-foreground text-center mb-1",
        children: e
      }), h.jsx("p", {
        className: "text-primary text-sm font-medium mb-6",
        children: t
      }), h.jsx("div", {
        className: "w-full h-px bg-border/50 mb-6"
      }), h.jsxs("div", {
        className: "w-full space-y-4 mb-8",
        children: [h.jsxs("div", {
          className: "flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors",
          children: [h.jsx("div", {
            className: "w-10 h-10 rounded-lg bg-secondary flex items-center justify-center",
            children: h.jsx(af, {
              className: "w-4 h-4 text-primary"
            })
          }), h.jsxs("div", {
            className: "flex-1 min-w-0",
            children: [h.jsx("p", {
              className: "text-xs text-muted-foreground uppercase tracking-wider",
              children: "Email"
            }), h.jsx("p", {
              className: "text-sm text-foreground truncate",
              children: n
            })]
          })]
        }), h.jsxs("div", {
          className: "flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors",
          children: [h.jsx("div", {
            className: "w-10 h-10 rounded-lg bg-secondary flex items-center justify-center",
            children: h.jsx(uf, {
              className: "w-4 h-4 text-primary"
            })
          }), h.jsxs("div", {
            className: "flex-1 min-w-0",
            children: [h.jsx("p", {
              className: "text-xs text-muted-foreground uppercase tracking-wider",
              children: "Location"
            }), h.jsx("p", {
              className: "text-sm text-foreground",
              children: r
            })]
          })]
        })]
      }), h.jsx("div", {
        className: "w-full h-px bg-border/50 mb-6"
      }), h.jsx("div", {
        className: "flex gap-3 mt-auto",
        children: l.map(({
          icon: i,
          href: s,
          label: a
        }) => h.jsx("a", {
          href: s,
          "aria-label": a,
          className: "w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-300",
          children: h.jsx(i, {
            className: "w-4 h-4"
          })
        }, a))
      })]
    })
  },
  dy = ({
    activeTab: e,
    onTabChange: t
  }) => {
    const n = [{
      id: "about",
      label: "About"
    }, {
      id: "resume",
      label: "Resume"
    }, {
      id: "projects",
      label: "Projects"
    }, {
      id: "contact",
      label: "Contact"
    }];
    return h.jsx("nav", {
      className: "flex items-center justify-end gap-1 px-6 py-4 border-b border-border/30",
      children: n.map(r => h.jsx("button", {
        onClick: () => t(r.id),
        className: Me("nav-item text-sm font-medium", e === r.id &&
          "active"),
        children: r.label
      }, r.id))
    })
  },
  pu = () => {
    const e = [{
      date: "Oct. 2025",
      content: "Data science student at National Institute Specialized in Technology, Rahmania, Algiers Centre ."
    }, {
      date: "Nov. 2024",
      content: "Diploma in Administration Systems Reseaux / Certificate Lead Auditor ISO/IEC 27001: 2022."
    }, {
      date: "Jan. 2024",
      content: "boot-camp in computer science (python)"
    }, {
      date: "June. 2022",
      content: "Graduated from Law school of algeria."
    }];
    return h.jsxs("section", {
      className: "fade-in",
      children: [h.jsx("h2", {
        className: "section-title",
        children: "About Me"
      }), h.jsxs("div", {
        className: "space-y-4 text-muted-foreground leading-relaxed mb-10",
        children: [h.jsx("p", {
          children: "I am an undergraduate data science student at the National Institute Specialized in Technology, Rahmania, Algiers Centre."
        }), h.jsx("p", {
          children: "I have experience as a data scientist in the construction sector, where I specialize in driving innovation through data science and data analysis. My current research interests include learning new technologies, studying advanced data science research papers, and acquiring a wide range of new skills."
        })]
      }), h.jsxs("div", {
        children: [h.jsxs("h3", {
          className: "text-xl font-semibold text-foreground mb-6 flex items-center gap-2",
          children: [h.jsx(xv, {
            className: "w-5 h-5 text-primary"
          }), "News"]
        }), h.jsx("div", {
          className: "relative pl-6 border-l-2 border-border/50 space-y-6",
          children: e.map((t, n) => h.jsxs("div", {
            className: "relative",
            children: [h.jsx("div", {
              className: "timeline-dot absolute -left-[25px] top-1"
            }), h.jsxs("div", {
              className: "ml-4",
              children: [h.jsx("span", {
                className: "text-sm font-medium text-primary",
                children: t.date
              }), h.jsx("p", {
                className: "text-muted-foreground mt-1",
                children: t.content
              })]
            })]
          }, n))
        })]
      })]
    })
  },
  fy = () => {
    const e = [{
        degree: "BTS, Data Science",
        institution: "National Institute Specialized in Technology, Rahmania",
        period: "Oct 2025 - Feb 2028",
        details: ""
      }, {
        degree: "Law, Private Law",
        institution: "Faculty of Law Said Hamdine",
        period: "2019 - 2022",
        details: ""
      }],
      t = [{
        title: "Data Science Stage",
        company: "Cosider Carrières · Apprenticeship",
        period: "Oct 2025 - Present",
        details: "Algeria · On-site"
      }, {
        title: "Remote Help Desk",
        company: "",
        period: "2024",
        details: "Remotely working and problem solving"
      }],
      n = [{
        title: "Python bootcamp",
        organization: "Esoftdz",
        year: "2024"
      }, {
        title: "Cisco Certified Network Professional - Enterprise",
        organization: "global development leaders academy",
        year: "2024"
      }, {
        title: "ISO/IEC 27001:2022 Lead Auditor",
        organization: "Mastermind",
        year: "2024"
      }];
    return h.jsxs("section", {
      className: "fade-in space-y-12",
      children: [h.jsxs("div", {
        children: [h.jsxs("h2", {
          className: "section-title",
          children: [h.jsx(Ev, {
            className: "w-6 h-6 text-primary"
          }), "Education"]
        }), h.jsx("div", {
          className: "space-y-6",
          children: e.map((r, o) => h.jsxs("div", {
            className: "glass-card p-5 hover:border-primary/30 transition-colors",
            children: [h.jsxs("div", {
              className: "flex justify-between items-start mb-2",
              children: [h.jsx("h3", {
                className: "font-semibold text-foreground",
                children: r.degree
              }), h.jsx("span", {
                className: "text-sm text-primary font-medium",
                children: r.period
              })]
            }), h.jsx("p", {
              className: "text-muted-foreground text-sm mb-1",
              children: r.institution
            }), h.jsx("p", {
              className: "text-muted-foreground/70 text-sm",
              children: r.details
            })]
          }, o))
        })]
      }), h.jsxs("div", {
        children: [h.jsxs("h2", {
          className: "section-title",
          children: [h.jsx(yv, {
            className: "w-6 h-6 text-primary"
          }), "Experience"]
        }), h.jsx("div", {
          className: "space-y-6",
          children: t.map((r, o) => h.jsxs("div", {
            className: "glass-card p-5 hover:border-primary/30 transition-colors",
            children: [h.jsxs("div", {
              className: "flex justify-between items-start mb-2",
              children: [h.jsx("h3", {
                className: "font-semibold text-foreground",
                children: r.title
              }), h.jsx("span", {
                className: "text-sm text-primary font-medium",
                children: r.period
              })]
            }), h.jsx("p", {
              className: "text-muted-foreground text-sm mb-1",
              children: r.company
            }), h.jsx("p", {
              className: "text-muted-foreground/70 text-sm",
              children: r.details
            })]
          }, o))
        })]
      }), h.jsxs("div", {
        children: [h.jsxs("h2", {
          className: "section-title",
          children: [h.jsx(gv, {
            className: "w-6 h-6 text-primary"
          }), "Licenses & certifications"]
        }), h.jsx("div", {
          className: "grid gap-4",
          children: n.map((r, o) => h.jsxs("div", {
            className: "glass-card p-4 flex items-center justify-between hover:border-primary/30 transition-colors",
            children: [h.jsxs("div", {
              children: [h.jsx("h3", {
                className: "font-medium text-foreground",
                children: r.title
              }), h.jsx("p", {
                className: "text-muted-foreground text-sm",
                children: r.organization
              })]
            }), h.jsx("span", {
              className: "text-sm text-primary font-medium",
              children: r.year
            })]
          }, o))
        })]
      })]
    })
  },
  py = () => {
    const e = [{
      title: "Feeling Analizer",
      description: "AI-powered sentiment analysis tool that uses Natural Language Processing to detect and classify emotional tones in text, identifying sentiments like positive, negative, or neutral.",
      technologies: ["Python", "NLP", "scikit-learn"],
      github: "https://github.com/daftercool/feeling-analizer",
      demo: "https://lovable.dev/projects/aec25892-a779-4a80-9f1e-aea22dc1cee0"
    }, {
      title: "Model-D-tection-des-fractures-osseuses.-x-ray-",
      description: "Deep learning model for automatic detection of bone fractures in X-ray images, designed to assist radiologists with quick and accurate diagnosis.",
      technologies: ["Python", "TensorFlow", "Computer Vision"],
      github: "https://github.com/daftercool/model-d-tection-des-fractures-osseuses-xray",
      
    },{
      title: "CRUD api created by FASTAPI -",
      description: "an api craeated with FASTAPI to test a database and learn the basics.",
      technologies: ["PYTHON ,FASTAPI,UVICORN,sqlite"],
      github: "https://github.com/daftercool/api-",
      
    }];
    return h.jsxs("section", {
      className: "fade-in",
      children: [h.jsxs("div", {
        className: "flex items-center justify-between mb-6",
        children: [h.jsxs("h2", {
          className: "section-title mb-0",
          children: [h.jsx(Sv, {
            className: "w-6 h-6 text-primary"
          }), "Projects"]
        }), h.jsxs("a", {
          href: "https://github.com/daftercool",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all",
          children: [h.jsx(Li, {
            className: "w-5 h-5"
          }), h.jsx("span", {
            className: "text-sm font-medium",
            children: "View GitHub"
          })]
        })]
      }), h.jsx("div", {
        className: "grid gap-6",
        children: e.map((t, n) => h.jsxs("div", {
          className: "glass-card p-6 hover:border-primary/30 transition-all group",
          children: [h.jsxs("div", {
            className: "flex items-start justify-between mb-3",
            children: [h.jsx("h3", {
              className: "text-lg font-semibold text-foreground group-hover:text-primary transition-colors",
              children: t.title
            }), h.jsxs("div", {
              className: "flex gap-2",
              children: [t.github && h.jsx("a", {
                href: t.github,
                className: "w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all",
                "aria-label": "View on GitHub",
                children: h.jsx(Li, {
                  className: "w-4 h-4"
                })
              }), t.demo && h.jsx("a", {
                href: t.demo,
                className: "w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all",
                "aria-label": "View demo",
                children: h.jsx(wv, {
                  className: "w-4 h-4"
                })
              })]
            })]
          }), h.jsx("p", {
            className: "text-muted-foreground text-sm leading-relaxed mb-4",
            children: t.description
          }), h.jsx("div", {
            className: "flex flex-wrap gap-2",
            children: t.technologies.map((r, o) => h.jsx(
              "span", {
                className: "px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20",
                children: r
              }, o))
          })]
        }, n))
      })]
    })
  },
  my = lf(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10"
        }
      },
      defaultVariants: {
        variant: "default",
        size: "default"
      }
    }),
  Vf = g.forwardRef(({
    className: e,
    variant: t,
    size: n,
    asChild: r = !1,
    ...o
  }, l) => {
    const i = r ? kh : "button";
    return h.jsx(i, {
      className: Me(my({
        variant: t,
        size: n,
        className: e
      })),
      ref: l,
      ...o
    })
  });
Vf.displayName = "Button";
const ao = g.forwardRef(({
  className: e,
  type: t,
  ...n
}, r) => h.jsx("input", {
  type: t,
  className: Me(
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
    e),
  ref: r,
  ...n
}));
ao.displayName = "Input";
const Bf = g.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx("textarea", {
  className: Me(
    "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    e),
  ref: n,
  ...t
}));
Bf.displayName = "Textarea";
const hy = () => {
    const {
      toast: e
    } = jd(), [t, n] = g.useState({
      name: "",
      email: "",
      subject: "",
      message: ""
    }), r = i => {
      i.preventDefault(), e({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon."
      }), n({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
    }, o = i => {
      n(s => ({
        ...s,
        [i.target.name]: i.target.value
      }))
    }, l = [{
      icon: af,
      label: "Email",
      value: "salimamrouche6@gmail.com",
      href: "mailto:salimamrouche6@gmail.com"
    }, {
      icon: uf,
      label: "Location",
      value: "Algeria, Alger Centre"
    }, {
      icon: Cv,
      label: "Phone",
      value: "+213 657394867",
      href: "tel:+213657394867"
    }];
    return h.jsxs("section", {
      className: "fade-in",
      children: [h.jsx("h2", {
        className: "section-title",
        children: "Get in Touch"
      }), h.jsxs("div", {
        className: "grid lg:grid-cols-5 gap-8",
        children: [h.jsxs("div", {
          className: "lg:col-span-2 space-y-6",
          children: [h.jsx("p", {
            className: "text-muted-foreground leading-relaxed",
            children: "Feel free to reach out if you have any questions about my research, collaboration opportunities, or just want to connect."
          }), h.jsx("div", {
            className: "space-y-4",
            children: l.map((i, s) => h.jsxs("div", {
              className: "flex items-center gap-4",
              children: [h.jsx("div", {
                className: "w-12 h-12 rounded-xl bg-secondary flex items-center justify-center",
                children: h.jsx(i.icon, {
                  className: "w-5 h-5 text-primary"
                })
              }), h.jsxs("div", {
                children: [h.jsx("p", {
                  className: "text-xs text-muted-foreground uppercase tracking-wider",
                  children: i.label
                }), i.href ? h.jsx("a", {
                  href: i.href,
                  className: "text-foreground hover:text-primary transition-colors",
                  children: i.value
                }) : h.jsx("p", {
                  className: "text-foreground",
                  children: i.value
                })]
              })]
            }, s))
          })]
        }), h.jsxs("form", {
          onSubmit: r,
          className: "lg:col-span-3 space-y-4",
          children: [h.jsxs("div", {
            className: "grid sm:grid-cols-2 gap-4",
            children: [h.jsx(ao, {
              name: "name",
              placeholder: "Your Name",
              value: t.name,
              onChange: o,
              required: !0,
              className: "bg-secondary border-border focus:border-primary"
            }), h.jsx(ao, {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              value: t.email,
              onChange: o,
              required: !0,
              className: "bg-secondary border-border focus:border-primary"
            })]
          }), h.jsx(ao, {
            name: "subject",
            placeholder: "Subject",
            value: t.subject,
            onChange: o,
            required: !0,
            className: "bg-secondary border-border focus:border-primary"
          }), h.jsx(Bf, {
            name: "message",
            placeholder: "Your Message",
            value: t.message,
            onChange: o,
            required: !0,
            rows: 5,
            className: "bg-secondary border-border focus:border-primary resize-none"
          }), h.jsxs(Vf, {
            type: "submit",
            className: "w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90",
            children: [h.jsx(Nv, {
              className: "w-4 h-4 mr-2"
            }), "Send Message"]
          })]
        })]
      })]
    })
  },
  vy = "" + new URL("profile-avatar-B4r6CRgo.png", import.meta.url)
  .href,
  gy = () => {
    const [e, t] = g.useState("about"), n = () => {
      switch (e) {
        case "about":
          return h.jsx(pu, {});
        case "resume":
          return h.jsx(fy, {});
        case "projects":
          return h.jsx(py, {});
        case "contact":
          return h.jsx(hy, {});
        default:
          return h.jsx(pu, {})
      }
    };
    return h.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [h.jsx(cy, {
        name: "Salim Amrouche",
        role: "Data Scientist",
        email: "salimamrouche6@gmail.com",
        location: "Algeria ,Alger Centre",
        avatarUrl: vy
      }), h.jsx("main", {
        className: "ml-72 min-h-screen p-8",
        children: h.jsx("div", {
          className: "max-w-4xl mx-auto",
          children: h.jsxs("div", {
            className: "glass-card overflow-hidden",
            children: [h.jsx(dy, {
              activeTab: e,
              onTabChange: t
            }), h.jsx("div", {
              className: "p-8",
              children: n()
            }, e)]
          })
        })
      })]
    })
  },
  yy = () => {
    const e = Tf();
    return g.useEffect(() => {
      console.error(
        "404 Error: User attempted to access non-existent route:", e
        .pathname)
    }, [e.pathname]), h.jsx("div", {
      className: "flex min-h-screen items-center justify-center bg-muted",
      children: h.jsxs("div", {
        className: "text-center",
        children: [h.jsx("h1", {
          className: "mb-4 text-4xl font-bold",
          children: "404"
        }), h.jsx("p", {
          className: "mb-4 text-xl text-muted-foreground",
          children: "Oops! Page not found"
        }), h.jsx("a", {
          href: "/",
          className: "text-primary underline hover:text-primary/90",
          children: "Return to Home"
        })]
      })
    })
  },
  xy = () => h.jsxs(h.Fragment, {
    children: [h.jsx(ug, {}), h.jsx(Gg, {
      children: h.jsxs(Hg, {
        children: [h.jsx(zi, {
          path: "/",
          element: h.jsx(gy, {})
        }), h.jsx(zi, {
          path: "*",
          element: h.jsx(yy, {})
        })]
      })
    })]
  });
_d(document.getElementById("root"))
  .render(h.jsx(xy, {}));
  