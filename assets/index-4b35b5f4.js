;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) {
    return
  }
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r)
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === 'childList') {
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && s(i)
      }
  }).observe(document, {
    childList: true,
    subtree: true,
  })
  function n(r) {
    const o = {}
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : r.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    )
  }
  function s(r) {
    if (r.ep) {
      return
    }
    r.ep = true
    const o = n(r)
    fetch(r.href, o)
  }
})()
function Vn(e, t) {
  const n = Object.create(null),
    s = e.split(',')
  for (let r = 0; r < s.length; r++) {
    n[s[r]] = true
  }
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r]
}
function Xn(e) {
  if (F(e)) {
    const t = { o: r[o] }
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = te(s) ? _o(s) : Xn(s)
      if (r) {
        for (const o in r);
      }
    }
    return t
  } else {
    if (te(e)) {
      return e
    }
    if (V(e)) {
      return e
    }
  }
}
const ho = /;(?![^(]*\))/g,
  po = /:([^]+)/,
  go = /\/\*.*?\*\//gs
function _o(e) {
  const t = {}
  return (
    e
      .replace(go, '')
      .split(ho)
      .forEach((n) => {
        if (n) {
          const s = n.split(po)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function nn(e) {
  let t = ''
  if (te(e)) {
    t = e
  } else {
    if (F(e)) {
      for (let n = 0; n < e.length; n++) {
        const s = nn(e[n])
        s && (t += s + ' ')
      }
    } else {
      if (V(e)) {
        for (const n in e) e[n] && (t += n + ' ')
      }
    }
  }
  return t.trim()
}
const mo =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  bo = Vn(mo)
function Js(e) {
  return !!e || e === ''
}
function yo(e, t) {
  if (e.length !== t.length) {
    return false
  }
  let n = true
  for (let s = 0; n && s < e.length; s++) {
    n = sn(e[s], t[s])
  }
  return n
}
function sn(e, t) {
  if (e === t) {
    return true
  }
  let n = bs(e),
    s = bs(t)
  if (n || s) {
    return n && s ? e.getTime() === t.getTime() : false
  }
  if (((n = Ft(e)), (s = Ft(t)), n || s)) {
    return e === t
  }
  if (((n = F(e)), (s = F(t)), n || s)) {
    return n && s ? yo(e, t) : false
  }
  if (((n = V(e)), (s = V(t)), n || s)) {
    if (!n || !s) {
      return false
    }
    const r = Object.keys(e).length,
      o = Object.keys(t).length
    if (r !== o) {
      return false
    }
    for (const i in e) {
      const l = e.hasOwnProperty(i),
        f = t.hasOwnProperty(i)
      if ((l && !f) || (!l && f) || !sn(e[i], t[i])) {
        return false
      }
    }
  }
  return String(e) === String(t)
}
function Ys(e, t) {
  return e.findIndex((n) => sn(n, t))
}
const Qs = (e) =>
    te(e)
      ? e
      : e == null
      ? ''
      : F(e) || (V(e) && (e.toString === tr || !M(e.toString)))
      ? JSON.stringify(e, Gs, 2)
      : String(e),
  Gs = (e, t) =>
    t && t.__v_isRef
      ? Gs(e, t.value)
      : ht(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, r]) => ((n[`${s} =>`] = r), n),
            {}
          ),
        }
      : on(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : V(t) && !F(t) && !nr(t)
      ? String(t)
      : t,
  W = {},
  dt = [],
  Oe = () => {},
  xo = () => false,
  vo = /^on[^a-z]/,
  rn = (e) => vo.test(e),
  qn = (e) => e.startsWith('onUpdate:'),
  re = Object.assign,
  Zn = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  wo = Object.prototype.hasOwnProperty,
  $ = (e, t) => wo.call(e, t),
  F = Array.isArray,
  ht = (e) => $t(e) === '[object Map]',
  on = (e) => $t(e) === '[object Set]',
  bs = (e) => $t(e) === '[object Date]',
  M = (e) => typeof e == 'function',
  te = (e) => typeof e == 'string',
  Ft = (e) => typeof e == 'symbol',
  V = (e) => e !== null && typeof e == 'object',
  er = (e) => V(e) && M(e.then) && M(e.catch),
  tr = Object.prototype.toString,
  $t = (e) => tr.call(e),
  So = (e) => $t(e).slice(8, -1),
  nr = (e) => $t(e) === '[object Object]',
  Jn = (e) =>
    te(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Wt = Vn(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  ln = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  Co = /-(\w)/g,
  gt = ln((e) => e.replace(Co, (t, n) => (n ? n.toUpperCase() : ''))),
  Eo = /\B([A-Z])/g,
  yt = ln((e) => e.replace(Eo, '-$1').toLowerCase()),
  sr = ln((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  vn = ln((e) => (e ? `on${sr(e)}` : '')),
  Pt = (e, t) => !Object.is(e, t),
  Vt = (e, t) => {
    for (let n = 0; n < e.length; n++) {
      e[n](t)
    }
  },
  Jt = (e, t, n) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      value: n,
    })
  },
  Fn = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let ys
const Oo = () =>
  ys ||
  (ys =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {})
let he
class rr {
  constructor(t = false) {
    this.detached = t
    this._active = true
    this.effects = []
    this.cleanups = []
    this.parent = he
    !t && he && (this.index = (he.scopes || (he.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = he
      try {
        return (he = this), t()
      } finally {
        he = n
      }
    }
  }
  on() {
    he = this
  }
  off() {
    he = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) {
        this.effects[n].stop()
      }
      for (n = 0, s = this.cleanups.length; n < s; n++) {
        this.cleanups[n]()
      }
      if (this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++) {
          this.scopes[n].stop(true)
        }
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop()
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index))
      }
      this.parent = void 0
      this._active = false
    }
  }
}
function or(e) {
  return new rr(e)
}
function Io(e, t = he) {
  t && t.active && t.effects.push(e)
}
function ir() {
  return he
}
function To(e) {
  he && he.cleanups.push(e)
}
const Yn = (e) => {
    const t = new Set(e)
    return (t.w = 0), (t.n = 0), t
  },
  lr = (e) => (e.w & Ve) > 0,
  cr = (e) => (e.n & Ve) > 0,
  Fo = ({ deps: e }) => {
    if (e.length) {
      for (let t = 0; t < e.length; t++) {
        e[t].w |= Ve
      }
    }
  },
  Po = (e) => {
    const { deps: t } = e
    if (t.length) {
      let n = 0
      for (let s = 0; s < t.length; s++) {
        const r = t[s]
        lr(r) && !cr(r) ? r.delete(e) : (t[n++] = r)
        r.w &= ~Ve
        r.n &= ~Ve
      }
      t.length = n
    }
  },
  Yt = new WeakMap()
let Ct = 0,
  Ve = 1
const Pn = 30
let Ce
const rt = Symbol(''),
  An = Symbol('')
class Qn {
  constructor(t, n = null, s) {
    this.fn = t
    this.scheduler = n
    this.active = true
    this.deps = []
    this.parent = void 0
    Io(this, s)
  }
  run() {
    if (!this.active) {
      return this.fn()
    }
    let t = Ce,
      n = ze
    for (; t; ) {
      if (t === this) {
        return
      }
      t = t.parent
    }
    try {
      return (
        (this.parent = Ce),
        (Ce = this),
        (ze = true),
        (Ve = 1 << ++Ct),
        Ct <= Pn ? Fo(this) : xs(this),
        this.fn()
      )
    } finally {
      Ct <= Pn && Po(this)
      Ve = 1 << --Ct
      Ce = this.parent
      ze = n
      this.parent = void 0
      this.deferStop && this.stop()
    }
  }
  stop() {
    Ce === this
      ? (this.deferStop = true)
      : this.active &&
        (xs(this), this.onStop && this.onStop(), (this.active = false))
  }
}
function xs(e) {
  const { deps: t } = e
  if (t.length) {
    for (let n = 0; n < t.length; n++) {
      t[n].delete(e)
    }
    t.length = 0
  }
}
let ze = true
const fr = []
function xt() {
  fr.push(ze)
  ze = false
}
function vt() {
  const e = fr.pop()
  ze = e === void 0 ? true : e
}
function ae(e, t, n) {
  if (ze && Ce) {
    let s = Yt.get(e)
    s || Yt.set(e, (s = new Map()))
    let r = s.get(n)
    r || s.set(n, (r = Yn()))
    ur(r)
  }
}
function ur(e, t) {
  let n = false
  Ct <= Pn ? cr(e) || ((e.n |= Ve), (n = !lr(e))) : (n = !e.has(Ce))
  n && (e.add(Ce), Ce.deps.push(e))
}
function He(e, t, n, s, r, o) {
  const i = Yt.get(e)
  if (!i) {
    return
  }
  let l = []
  if (t === 'clear') {
    l = [...i.values()]
  } else {
    if (n === 'length' && F(e)) {
      const f = Number(s)
      i.forEach((a, h) => {
        ;(h === 'length' || h >= f) && l.push(a)
      })
    } else {
      switch ((n !== void 0 && l.push(i.get(n)), t)) {
        case 'add':
          F(e)
            ? Jn(n) && l.push(i.get('length'))
            : (l.push(i.get(rt)), ht(e) && l.push(i.get(An)))
          break
        case 'delete':
          F(e) || (l.push(i.get(rt)), ht(e) && l.push(i.get(An)))
          break
        case 'set':
          ht(e) && l.push(i.get(rt))
          break
      }
    }
  }
  if (l.length === 1) {
    l[0] && Mn(l[0])
  } else {
    const f = []
    for (const a of l) a && f.push(...a)
    Mn(Yn(f))
  }
}
function Mn(e, t) {
  const n = F(e) ? e : [...e]
  for (const s of n) s.computed && vs(s)
  for (const s of n) s.computed || vs(s)
}
function vs(e, t) {
  ;(e !== Ce || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
function Ao(e, t) {
  var n
  return (n = Yt.get(e)) === null || n === void 0 ? void 0 : n.get(t)
}
const Mo = Vn('__proto__,__v_isRef,__isVue'),
  ar = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(Ft)
  ),
  Ro = Gn(),
  Lo = Gn(false, true),
  No = Gn(true),
  ws = $o()
function $o() {
  const e = {
    t: function (...n) {
      const s = N(this)
      for (let o = 0, i = this.length; o < i; o++) {
        ae(s, 'get', o + '')
      }
      const r = s[t](...n)
      return r === -1 || r === false ? s[t](...n.map(N)) : r
    },
    t: function (...n) {
      xt()
      const s = N(this)[t].apply(this, n)
      return vt(), s
    },
  }
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {}),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {}),
    e
  )
}
function Bo(e) {
  const t = N(this)
  return ae(t, 'has', e), t.hasOwnProperty(e)
}
function Gn(e = false, t = false) {
  return function (s, r, o) {
    if (r === '__v_isReactive') {
      return !e
    }
    if (r === '__v_isReadonly') {
      return e
    }
    if (r === '__v_isShallow') {
      return t
    }
    if (r === '__v_raw' && o === (e ? (t ? Go : _r) : t ? gr : pr).get(s)) {
      return s
    }
    const i = F(s)
    if (!e) {
      if (i && $(ws, r)) {
        return Reflect.get(ws, r, o)
      }
      if (r === 'hasOwnProperty') {
        return Bo
      }
    }
    const l = Reflect.get(s, r, o)
    return (Ft(r) ? ar.has(r) : Mo(r)) || (e || ae(s, 'get', r), t)
      ? l
      : q(l)
      ? i && Jn(r)
        ? l
        : l.value
      : V(l)
      ? e
        ? mr(l)
        : fn(l)
      : l
  }
}
const jo = dr(),
  Ho = dr(true)
function dr(e = false) {
  return function (n, s, r, o) {
    let i = n[s]
    if (_t(i) && q(i) && !q(r)) {
      return false
    }
    if (
      !e &&
      (!Qt(r) && !_t(r) && ((i = N(i)), (r = N(r))), !F(n) && q(i) && !q(r))
    ) {
      return (i.value = r), true
    }
    const l = F(n) && Jn(s) ? Number(s) < n.length : $(n, s),
      f = Reflect.set(n, s, r, o)
    return (
      n === N(o) && (l ? Pt(r, i) && He(n, 'set', s, r) : He(n, 'add', s, r)), f
    )
  }
}
function Do(e, t) {
  const n = $(e, t)
  e[t]
  const s = Reflect.deleteProperty(e, t)
  return s && n && He(e, 'delete', t, void 0), s
}
function Uo(e, t) {
  const n = Reflect.has(e, t)
  return (!Ft(t) || !ar.has(t)) && ae(e, 'has', t), n
}
function ko(e) {
  return ae(e, 'iterate', F(e) ? 'length' : rt), Reflect.ownKeys(e)
}
const hr = {
    get: Ro,
    set: jo,
    deleteProperty: Do,
    has: Uo,
    ownKeys: ko,
  },
  Ko = {
    get: No,
    set(e, t) {
      return true
    },
    deleteProperty(e, t) {
      return true
    },
  },
  zo = re({}, hr, {
    get: Lo,
    set: Ho,
  }),
  es = (e) => e,
  cn = (e) => Reflect.getPrototypeOf(e)
function Ht(e, t, n = false, s = false) {
  e = e.__v_raw
  const r = N(e),
    o = N(t)
  n || (t !== o && ae(r, 'get', t), ae(r, 'get', o))
  const { has: i } = cn(r),
    l = s ? es : n ? ss : At
  if (i.call(r, t)) {
    return l(e.get(t))
  }
  if (i.call(r, o)) {
    return l(e.get(o))
  }
  e !== r && e.get(t)
}
function Dt(e, t = false) {
  const n = this.__v_raw,
    s = N(n),
    r = N(e)
  return (
    t || (e !== r && ae(s, 'has', e), ae(s, 'has', r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  )
}
function Ut(e, t = false) {
  return (
    (e = e.__v_raw), !t && ae(N(e), 'iterate', rt), Reflect.get(e, 'size', e)
  )
}
function Ss(e) {
  e = N(e)
  const t = N(this)
  return cn(t).has.call(t, e) || (t.add(e), He(t, 'add', e, e)), this
}
function Cs(e, t) {
  t = N(t)
  const n = N(this),
    { has: s, get: r } = cn(n)
  let o = s.call(n, e)
  o || ((e = N(e)), (o = s.call(n, e)))
  const i = r.call(n, e)
  return (
    n.set(e, t), o ? Pt(t, i) && He(n, 'set', e, t) : He(n, 'add', e, t), this
  )
}
function Es(e) {
  const t = N(this),
    { has: n, get: s } = cn(t)
  let r = n.call(t, e)
  r || ((e = N(e)), (r = n.call(t, e)))
  s && s.call(t, e)
  const o = t.delete(e)
  return r && He(t, 'delete', e, void 0), o
}
function Os() {
  const e = N(this),
    t = e.size !== 0,
    n = e.clear()
  return t && He(e, 'clear', void 0, void 0), n
}
function kt(e, t) {
  return function (s, r) {
    const o = this,
      i = o.__v_raw,
      l = N(i),
      f = t ? es : e ? ss : At
    return (
      !e && ae(l, 'iterate', rt), i.forEach((a, h) => s.call(r, f(a), f(h), o))
    )
  }
}
function Kt(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      o = N(r),
      i = ht(o),
      l = e === 'entries' || (e === Symbol.iterator && i),
      f = e === 'keys' && i,
      a = r[e](...s),
      h = n ? es : t ? ss : At
    return (
      !t && ae(o, 'iterate', f ? An : rt),
      {
        next() {
          const { value: m, done: x } = a.next()
          return x
            ? {
                value: m,
                done: x,
              }
            : {
                value: l ? [h(m[0]), h(m[1])] : h(m),
                done: x,
              }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function Ue(e) {
  return function (...t) {
    return e === 'delete' ? false : this
  }
}
function Wo() {
  const e = {
      get(o) {
        return Ht(this, o)
      },
      get size() {
        return Ut(this)
      },
      has: Dt,
      add: Ss,
      set: Cs,
      delete: Es,
      clear: Os,
      forEach: kt(false, false),
    },
    t = {
      get(o) {
        return Ht(this, o, false, true)
      },
      get size() {
        return Ut(this)
      },
      has: Dt,
      add: Ss,
      set: Cs,
      delete: Es,
      clear: Os,
      forEach: kt(false, true),
    },
    n = {
      get(o) {
        return Ht(this, o, true)
      },
      get size() {
        return Ut(this, true)
      },
      has(o) {
        return Dt.call(this, o, true)
      },
      add: Ue('add'),
      set: Ue('set'),
      delete: Ue('delete'),
      clear: Ue('clear'),
      forEach: kt(true, false),
    },
    s = {
      get(o) {
        return Ht(this, o, true, true)
      },
      get size() {
        return Ut(this, true)
      },
      has(o) {
        return Dt.call(this, o, true)
      },
      add: Ue('add'),
      set: Ue('set'),
      delete: Ue('delete'),
      clear: Ue('clear'),
      forEach: kt(true, true),
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((o) => {
      e[o] = Kt(o, false, false)
      n[o] = Kt(o, true, false)
      t[o] = Kt(o, false, true)
      s[o] = Kt(o, true, true)
    }),
    [e, n, t, s]
  )
}
const [Vo, Xo, qo, Zo] = Wo()
function ts(e, t) {
  const n = t ? (e ? Zo : qo) : e ? Xo : Vo
  return (s, r, o) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
      ? e
      : r === '__v_raw'
      ? s
      : Reflect.get($(n, r) && r in s ? n : s, r, o)
}
const Jo = { get: ts(false, false) },
  Yo = { get: ts(false, true) },
  Qo = { get: ts(true, false) },
  pr = new WeakMap(),
  gr = new WeakMap(),
  _r = new WeakMap(),
  Go = new WeakMap()
function ei(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function ti(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ei(So(e))
}
function fn(e) {
  return _t(e) ? e : ns(e, false, hr, Jo, pr)
}
function ni(e) {
  return ns(e, false, zo, Yo, gr)
}
function mr(e) {
  return ns(e, true, Ko, Qo, _r)
}
function ns(e, t, n, s, r) {
  if (!V(e) || (e.__v_raw && !(t && e.__v_isReactive))) {
    return e
  }
  const o = r.get(e)
  if (o) {
    return o
  }
  const i = ti(e)
  if (i === 0) {
    return e
  }
  const l = new Proxy(e, i === 2 ? s : n)
  return r.set(e, l), l
}
function je(e) {
  return _t(e) ? je(e.__v_raw) : !!(e && e.__v_isReactive)
}
function _t(e) {
  return !!(e && e.__v_isReadonly)
}
function Qt(e) {
  return !!(e && e.__v_isShallow)
}
function br(e) {
  return je(e) || _t(e)
}
function N(e) {
  const t = e && e.__v_raw
  return t ? N(t) : e
}
function mt(e) {
  return Jt(e, '__v_skip', true), e
}
const At = (e) => (V(e) ? fn(e) : e),
  ss = (e) => (V(e) ? mr(e) : e)
function yr(e) {
  ze && Ce && ((e = N(e)), ur(e.dep || (e.dep = Yn())))
}
function xr(e, t) {
  e = N(e)
  const n = e.dep
  n && Mn(n)
}
function q(e) {
  return !!(e && e.__v_isRef === true)
}
function Me(e) {
  return si(e, false)
}
function si(e, t) {
  return q(e) ? e : new ri(e, t)
}
class ri {
  constructor(t, n) {
    this.__v_isShallow = n
    this.dep = void 0
    this.__v_isRef = true
    this._rawValue = n ? t : N(t)
    this._value = n ? t : At(t)
  }
  get value() {
    return yr(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || Qt(t) || _t(t)
    t = n ? t : N(t)
    Pt(t, this._rawValue) &&
      ((this._rawValue = t), (this._value = n ? t : At(t)), xr(this))
  }
}
function Te(e) {
  return q(e) ? e.value : e
}
const oi = {
  get: (e, t, n) => Te(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t]
    return q(r) && !q(n) ? ((r.value = n), true) : Reflect.set(e, t, n, s)
  },
}
function vr(e) {
  return je(e) ? e : new Proxy(e, oi)
}
function ii(e) {
  const t = F(e) ? new Array(e.length) : {}
  for (const n in e) t[n] = wr(e, n)
  return t
}
class li {
  constructor(t, n, s) {
    this._object = t
    this._key = n
    this._defaultValue = s
    this.__v_isRef = true
  }
  get value() {
    const t = this._object[this._key]
    return t === void 0 ? this._defaultValue : t
  }
  set value(t) {
    this._object[this._key] = t
  }
  get dep() {
    return Ao(N(this._object), this._key)
  }
}
function wr(e, t, n) {
  const s = e[t]
  return q(s) ? s : new li(e, t, n)
}
var Sr
class ci {
  constructor(t, n, s, r) {
    this._setter = n
    this.dep = void 0
    this.__v_isRef = true
    this[Sr] = false
    this._dirty = true
    this.effect = new Qn(t, () => {
      this._dirty || ((this._dirty = true), xr(this))
    })
    this.effect.computed = this
    this.effect.active = this._cacheable = !r
    this.__v_isReadonly = s
  }
  get value() {
    const t = N(this)
    return (
      yr(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = false), (t._value = t.effect.run())),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
}
Sr = '__v_isReadonly'
function fi(e, t, n = false) {
  let s, r
  const o = M(e)
  return (
    o ? ((s = e), (r = Oe)) : ((s = e.get), (r = e.set)),
    new ci(s, r, o || !r, n)
  )
}
function We(e, t, n, s) {
  let r
  try {
    r = s ? e(...s) : e()
  } catch (o) {
    un(o, t, n)
  }
  return r
}
function ye(e, t, n, s) {
  if (M(e)) {
    const o = We(e, t, n, s)
    return (
      o &&
        er(o) &&
        o.catch((i) => {
          un(i, t, n)
        }),
      o
    )
  }
  const r = []
  for (let o = 0; o < e.length; o++) {
    r.push(ye(e[o], t, n, s))
  }
  return r
}
function un(e, t, n, s = true) {
  const r = t ? t.vnode : null
  if (t) {
    let o = t.parent
    const i = t.proxy,
      l = n
    for (; o; ) {
      const a = o.ec
      if (a) {
        for (let h = 0; h < a.length; h++) {
          if (a[h](e, i, l) === false) {
            return
          }
        }
      }
      o = o.parent
    }
    const f = t.appContext.config.errorHandler
    if (f) {
      We(f, null, 10, [e, i, l])
      return
    }
  }
  ui(e, n, r, s)
}
function ui(e, t, n, s = true) {
  console.error(e)
}
let Mt = false,
  Rn = false
const se = []
let Le = 0
const pt = []
let Be = null,
  Ge = 0
const Cr = Promise.resolve()
let rs = null
function Er(e) {
  const t = rs || Cr
  return e ? t.then(this ? e.bind(this) : e) : t
}
function ai(e) {
  let t = Le + 1,
    n = se.length
  for (; t < n; ) {
    const s = (t + n) >>> 1
    Rt(se[s]) < e ? (t = s + 1) : (n = s)
  }
  return t
}
function os(e) {
  ;(!se.length || !se.includes(e, Mt && e.allowRecurse ? Le + 1 : Le)) &&
    (e.id == null ? se.push(e) : se.splice(ai(e.id), 0, e), Or())
}
function Or() {
  !Mt && !Rn && ((Rn = true), (rs = Cr.then(Tr)))
}
function di(e) {
  const t = se.indexOf(e)
  t > Le && se.splice(t, 1)
}
function hi(e) {
  F(e)
    ? pt.push(...e)
    : (!Be || !Be.includes(e, e.allowRecurse ? Ge + 1 : Ge)) && pt.push(e)
  Or()
}
function Is(e, t = Mt ? Le + 1 : 0) {
  for (; t < se.length; t++) {
    const n = se[t]
    n && n.pre && (se.splice(t, 1), t--, n())
  }
}
function Ir(e) {
  if (pt.length) {
    const t = [...new Set(pt)]
    if (((pt.length = 0), Be)) {
      Be.push(...t)
      return
    }
    for (
      Be = t, Be.sort((n, s) => Rt(n) - Rt(s)), Ge = 0;
      Ge < Be.length;
      Ge++
    ) {
      Be[Ge]()
    }
    Be = null
    Ge = 0
  }
}
const Rt = (e) => (e.id == null ? 1e400 : e.id),
  pi = (e, t) => {
    const n = Rt(e) - Rt(t)
    if (n === 0) {
      if (e.pre && !t.pre) {
        return -1
      }
      if (t.pre && !e.pre) {
        return 1
      }
    }
    return n
  }
function Tr(e) {
  Rn = false
  Mt = true
  se.sort(pi)
  const t = Oe
  try {
    for (Le = 0; Le < se.length; Le++) {
      const n = se[Le]
      n && n.active !== false && We(n, null, 14)
    }
  } finally {
    Le = 0
    se.length = 0
    Ir()
    Mt = false
    rs = null
    ;(se.length || pt.length) && Tr()
  }
}
function gi(e, t, ...n) {
  if (e.isUnmounted) {
    return
  }
  const s = e.vnode.props || W
  let r = n
  const o = t.startsWith('update:'),
    i = o && t.slice(7)
  if (i && i in s) {
    const h = `${i === 'modelValue' ? 'model' : i}Modifiers`,
      { number: m, trim: x } = s[h] || W
    x && (r = n.map((E) => (te(E) ? E.trim() : E)))
    m && (r = n.map(Fn))
  }
  let l,
    f = s[(l = vn(t))] || s[(l = vn(gt(t)))]
  !f && o && (f = s[(l = vn(yt(t)))])
  f && ye(f, e, 6, r)
  const a = s[l + 'Once']
  if (a) {
    if (!e.emitted) {
      e.emitted = {}
    } else {
      if (e.emitted[l]) {
        return
      }
    }
    e.emitted[l] = true
    ye(a, e, 6, r)
  }
}
function Fr(e, t, n = false) {
  const s = t.emitsCache,
    r = s.get(e)
  if (r !== void 0) {
    return r
  }
  const o = e.emits
  let i = {},
    l = false
  if (!M(e)) {
    const f = (a) => {
      const h = Fr(a, t, true)
      h && ((l = true), re(i, h))
    }
    !n && t.mixins.length && t.mixins.forEach(f)
    e.extends && f(e.extends)
    e.mixins && e.mixins.forEach(f)
  }
  return !o && !l
    ? (V(e) && s.set(e, null), null)
    : (F(o) ? o.forEach((f) => (i[f] = null)) : re(i, o),
      V(e) && s.set(e, i),
      i)
}
function an(e, t) {
  return !e || !rn(t)
    ? false
    : ((t = t.slice(2).replace(/Once$/, '')),
      $(e, t[0].toLowerCase() + t.slice(1)) || $(e, yt(t)) || $(e, t))
}
let be = null,
  dn = null
function Gt(e) {
  const t = be
  return (be = e), (dn = (e && e.type.__scopeId) || null), t
}
function _i(e) {
  dn = e
}
function mi() {
  dn = null
}
function bi(e, t = be, n) {
  if (!t || e._n) {
    return e
  }
  const s = (...r) => {
    s._d && $s(-1)
    const o = Gt(t)
    let i
    try {
      i = e(...r)
    } finally {
      Gt(o)
      s._d && $s(1)
    }
    return i
  }
  return (s._n = true), (s._c = true), (s._d = true), s
}
function wn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: o,
    propsOptions: [i],
    slots: l,
    attrs: f,
    emit: a,
    render: h,
    renderCache: m,
    data: x,
    setupState: E,
    ctx: R,
    inheritAttrs: T,
  } = e
  let Z, j
  const ce = Gt(e)
  try {
    if (n.shapeFlag & 4) {
      const X = r || s
      Z = Re(h.call(X, X, m, o, E, x, R))
      j = f
    } else {
      const X = t
      Z = Re(
        X.length > 1
          ? X(o, {
              attrs: f,
              slots: l,
              emit: a,
            })
          : X(o, null)
      )
      j = t.props ? f : yi(f)
    }
  } catch (X) {
    It.length = 0
    un(X, e, 1)
    Z = ue(Ie)
  }
  let A = Z
  if (j && T !== false) {
    const X = Object.keys(j),
      { shapeFlag: U } = A
    X.length && U & 7 && (i && X.some(qn) && (j = xi(j, i)), (A = Xe(A, j)))
  }
  return (
    n.dirs && ((A = Xe(A)), (A.dirs = A.dirs ? A.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (A.transition = n.transition),
    (Z = A),
    Gt(ce),
    Z
  )
}
const yi = (e) => {
    let t
    for (const n in e)
      (n === 'class' || n === 'style' || rn(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  xi = (e, t) => {
    const n = {}
    for (const s in e) (!qn(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function vi(e, t, n) {
  const { props: s, children: r, component: o } = e,
    { props: i, children: l, patchFlag: f } = t,
    a = o.emitsOptions
  if (t.dirs || t.transition) {
    return true
  }
  if (n && f >= 0) {
    if (f & 1024) {
      return true
    }
    if (f & 16) {
      return s ? Ts(s, i, a) : !!i
    }
    if (f & 8) {
      const h = t.dynamicProps
      for (let m = 0; m < h.length; m++) {
        const x = h[m]
        if (i[x] !== s[x] && !an(a, x)) {
          return true
        }
      }
    }
  } else {
    return (r || l) && (!l || !l.$stable)
      ? true
      : s === i
      ? false
      : s
      ? i
        ? Ts(s, i, a)
        : true
      : !!i
  }
  return false
}
function Ts(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) {
    return true
  }
  for (let r = 0; r < s.length; r++) {
    const o = s[r]
    if (t[o] !== e[o] && !an(n, o)) {
      return true
    }
  }
  return false
}
function wi({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) {
    ;(e = t.vnode).el = n
    t = t.parent
  }
}
const Si = (e) => e.__isSuspense
function Ci(e, t) {
  t && t.pendingBranch
    ? F(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : hi(e)
}
function Ei(e, t) {
  if (Q) {
    let n = Q.provides
    const s = Q.parent && Q.parent.provides
    s === n && (n = Q.provides = Object.create(s))
    n[e] = t
  }
}
function Et(e, t, n = false) {
  const s = Q || be
  if (s) {
    const r =
      s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
    if (r && e in r) {
      return r[e]
    }
    if (arguments.length > 1) {
      return n && M(t) ? t.call(s.proxy) : t
    }
  }
}
const zt = {}
function Xt(e, t, n) {
  return Pr(e, t, n)
}
function Pr(
  e,
  t,
  { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i } = W
) {
  const l = ir() === (Q == null ? void 0 : Q.scope) ? Q : null
  let f,
    a = false,
    h = false
  if (
    (q(e)
      ? ((f = () => e.value), (a = Qt(e)))
      : je(e)
      ? ((f = () => e), (s = true))
      : F(e)
      ? ((h = true),
        (a = e.some((A) => je(A) || Qt(A))),
        (f = () =>
          e.map((A) => {
            if (q(A)) {
              return A.value
            }
            if (je(A)) {
              return st(A)
            }
            if (M(A)) {
              return We(A, l, 2)
            }
          })))
      : M(e)
      ? t
        ? (f = () => We(e, l, 2))
        : (f = () => {
            if (!(l && l.isUnmounted)) {
              return m && m(), ye(e, l, 3, [x])
            }
          })
      : (f = Oe),
    t && s)
  ) {
    const A = f
    f = () => st(A())
  }
  let m,
    x = (A) => {
      m = j.onStop = () => {
        We(A, l, 4)
      }
    },
    E
  if (Nt) {
    if (
      ((x = Oe),
      t ? n && ye(t, l, 3, [f(), h ? [] : void 0, x]) : f(),
      r === 'sync')
    ) {
      const A = yl()
      E = A.__watcherHandles || (A.__watcherHandles = [])
    } else {
      return Oe
    }
  }
  let R = h ? new Array(e.length).fill(zt) : zt
  const T = () => {
    if (j.active) {
      if (t) {
        const A = j.run()
        ;(s || a || (h ? A.some((X, U) => Pt(X, R[U])) : Pt(A, R))) &&
          (m && m(),
          ye(t, l, 3, [A, R === zt ? void 0 : h && R[0] === zt ? [] : R, x]),
          (R = A))
      } else {
        j.run()
      }
    }
  }
  T.allowRecurse = !!t
  let Z
  r === 'sync'
    ? (Z = T)
    : r === 'post'
    ? (Z = () => fe(T, l && l.suspense))
    : ((T.pre = true), l && (T.id = l.uid), (Z = () => os(T)))
  const j = new Qn(f, Z)
  t
    ? n
      ? T()
      : (R = j.run())
    : r === 'post'
    ? fe(j.run.bind(j), l && l.suspense)
    : j.run()
  const ce = () => {
    j.stop()
    l && l.scope && Zn(l.scope.effects, j)
  }
  return E && E.push(ce), ce
}
function Oi(e, t, n) {
  const s = this.proxy,
    r = te(e) ? (e.includes('.') ? Ar(s, e) : () => s[e]) : e.bind(s, s)
  let o
  M(t) ? (o = t) : ((o = t.handler), (n = t))
  const i = Q
  bt(this)
  const l = Pr(r, o.bind(s), n)
  return i ? bt(i) : ot(), l
}
function Ar(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) {
      s = s[n[r]]
    }
    return s
  }
}
function st(e, t) {
  if (!V(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) {
    return e
  }
  if ((t.add(e), q(e))) {
    st(e.value, t)
  } else {
    if (F(e)) {
      for (let n = 0; n < e.length; n++) {
        st(e[n], t)
      }
    } else {
      if (on(e) || ht(e)) {
        e.forEach((n) => {
          st(n, t)
        })
      } else {
        if (nr(e)) {
          for (const n in e) st(e[n], t)
        }
      }
    }
  }
  return e
}
function Ii() {
  const e = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: new Map(),
  }
  return (
    ls(() => {
      e.isMounted = true
    }),
    Nr(() => {
      e.isUnmounting = true
    }),
    e
  )
}
const me = [Function, Array],
  Ti = {
    name: 'BaseTransition',
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: me,
      onEnter: me,
      onAfterEnter: me,
      onEnterCancelled: me,
      onBeforeLeave: me,
      onLeave: me,
      onAfterLeave: me,
      onLeaveCancelled: me,
      onBeforeAppear: me,
      onAppear: me,
      onAfterAppear: me,
      onAppearCancelled: me,
    },
    setup(e, { slots: t }) {
      const n = qr(),
        s = Ii()
      let r
      return () => {
        const o = t.default && Rr(t.default(), true)
        if (!o || !o.length) {
          return
        }
        let i = o[0]
        if (o.length > 1) {
          for (const T of o)
            if (T.type !== Ie) {
              i = T
              break
            }
        }
        const l = N(e),
          { mode: f } = l
        if (s.isLeaving) {
          return Sn(i)
        }
        const a = Fs(i)
        if (!a) {
          return Sn(i)
        }
        const h = Ln(a, l, s, n)
        Nn(a, h)
        const m = n.subTree,
          x = m && Fs(m)
        let E = false
        const { getTransitionKey: R } = a.type
        if (R) {
          const T = R()
          r === void 0 ? (r = T) : T !== r && ((r = T), (E = true))
        }
        if (x && x.type !== Ie && (!et(a, x) || E)) {
          const T = Ln(x, l, s, n)
          if ((Nn(x, T), f === 'out-in')) {
            return (
              (s.isLeaving = true),
              (T.afterLeave = () => {
                s.isLeaving = false
                n.update.active !== false && n.update()
              }),
              Sn(i)
            )
          }
          f === 'in-out' &&
            a.type !== Ie &&
            (T.delayLeave = (Z, j, ce) => {
              const A = Mr(s, x)
              A[String(x.key)] = x
              Z._leaveCb = () => {
                j()
                Z._leaveCb = void 0
                delete h.delayedLeave
              }
              h.delayedLeave = ce
            })
        }
        return i
      }
    },
  },
  Fi = Ti
function Mr(e, t) {
  const { leavingVNodes: n } = e
  let s = n.get(t.type)
  return s || ((s = Object.create(null)), n.set(t.type, s)), s
}
function Ln(e, t, n, s) {
  const {
      appear: r,
      mode: o,
      persisted: i = false,
      onBeforeEnter: l,
      onEnter: f,
      onAfterEnter: a,
      onEnterCancelled: h,
      onBeforeLeave: m,
      onLeave: x,
      onAfterLeave: E,
      onLeaveCancelled: R,
      onBeforeAppear: T,
      onAppear: Z,
      onAfterAppear: j,
      onAppearCancelled: ce,
    } = t,
    A = String(e.key),
    X = Mr(n, e),
    U = (S, k) => {
      S && ye(S, s, 9, k)
    },
    ge = (S, k) => {
      const H = k[1]
      U(S, k)
      F(S) ? S.every((G) => G.length <= 1) && H() : S.length <= 1 && H()
    },
    B = {
      mode: o,
      persisted: i,
      beforeEnter(S) {
        let k = l
        if (!n.isMounted) {
          if (r) {
            k = T || l
          } else {
            return
          }
        }
        S._leaveCb && S._leaveCb(true)
        const H = X[A]
        H && et(e, H) && H.el._leaveCb && H.el._leaveCb()
        U(k, [S])
      },
      enter(S) {
        let k = f,
          H = a,
          G = h
        if (!n.isMounted) {
          if (r) {
            k = Z || f
            H = j || a
            G = ce || h
          } else {
            return
          }
        }
        let _e = false
        const xe = (S._enterCb = (ve) => {
          _e ||
            ((_e = true),
            ve ? U(G, [S]) : U(H, [S]),
            B.delayedLeave && B.delayedLeave(),
            (S._enterCb = void 0))
        })
        k ? ge(k, [S, xe]) : xe()
      },
      leave(S, k) {
        const H = String(e.key)
        if ((S._enterCb && S._enterCb(true), n.isUnmounting)) {
          return k()
        }
        U(m, [S])
        let G = false
        const _e = (S._leaveCb = (xe) => {
          G ||
            ((G = true),
            k(),
            xe ? U(R, [S]) : U(E, [S]),
            (S._leaveCb = void 0),
            X[H] === e && delete X[H])
        })
        X[H] = e
        x ? ge(x, [S, _e]) : _e()
      },
      clone(S) {
        return Ln(S, t, n, s)
      },
    }
  return B
}
function Sn(e) {
  if (hn(e)) {
    return (e = Xe(e)), (e.children = null), e
  }
}
function Fs(e) {
  return hn(e) ? (e.children ? e.children[0] : void 0) : e
}
function Nn(e, t) {
  e.shapeFlag & 6 && e.component
    ? Nn(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t)
}
function Rr(e, t = false, n) {
  let s = [],
    r = 0
  for (let o = 0; o < e.length; o++) {
    let i = e[o]
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o)
    i.type === Se
      ? (i.patchFlag & 128 && r++, (s = s.concat(Rr(i.children, t, l))))
      : (t || i.type !== Ie) && s.push(l != null ? Xe(i, { key: l }) : i)
  }
  if (r > 1) {
    for (let o = 0; o < s.length; o++) {
      s[o].patchFlag = -2
    }
  }
  return s
}
function is(e) {
  return M(e)
    ? {
        setup: e,
        name: e.name,
      }
    : e
}
const qt = (e) => !!e.type.__asyncLoader,
  hn = (e) => e.type.__isKeepAlive
function Pi(e, t) {
  Lr(e, 'a', t)
}
function Ai(e, t) {
  Lr(e, 'da', t)
}
function Lr(e, t, n = Q) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) {
          return
        }
        r = r.parent
      }
      return e()
    })
  if ((pn(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) {
      hn(r.parent.vnode) && Mi(s, t, n, r)
      r = r.parent
    }
  }
}
function Mi(e, t, n, s) {
  const r = pn(t, e, s, true)
  $r(() => {
    Zn(s[t], r)
  }, n)
}
function pn(e, t, n = Q, s = false) {
  if (n) {
    const r = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) {
            return
          }
          xt()
          bt(n)
          const l = ye(t, n, e, i)
          return ot(), vt(), l
        })
    return s ? r.unshift(o) : r.push(o), o
  }
}
const De =
    (e) =>
    (t, n = Q) =>
      (!Nt || e === 'sp') && pn(e, (...s) => t(...s), n),
  Ri = De('bm'),
  ls = De('m'),
  Li = De('bu'),
  Ni = De('u'),
  Nr = De('bum'),
  $r = De('um'),
  $i = De('sp'),
  Bi = De('rtg'),
  ji = De('rtc')
function Hi(e, t = Q) {
  pn('ec', e, t)
}
function Br(e, t) {
  const n = be
  if (n === null) {
    return e
  }
  const s = mn(n) || n.proxy,
    r = e.dirs || (e.dirs = [])
  for (let o = 0; o < t.length; o++) {
    let [i, l, f, a = W] = t[o]
    i &&
      (M(i) &&
        (i = {
          mounted: i,
          updated: i,
        }),
      i.deep && st(l),
      r.push({
        dir: i,
        instance: s,
        value: l,
        oldValue: void 0,
        arg: f,
        modifiers: a,
      }))
  }
  return e
}
function Je(e, t, n, s) {
  const r = e.dirs,
    o = t && t.dirs
  for (let i = 0; i < r.length; i++) {
    const l = r[i]
    o && (l.oldValue = o[i].value)
    let f = l.dir[s]
    f && (xt(), ye(f, n, 8, [e.el, l, e, t]), vt())
  }
}
const Di = Symbol()
function Ui(e, t, n, s) {
  let r
  const o = n && n[s]
  if (F(e) || te(e)) {
    r = new Array(e.length)
    for (let i = 0, l = e.length; i < l; i++) {
      r[i] = t(e[i], i, void 0, o && o[i])
    }
  } else {
    if (typeof e == 'number') {
      r = new Array(e)
      for (let i = 0; i < e; i++) {
        r[i] = t(i + 1, i, void 0, o && o[i])
      }
    } else {
      if (V(e)) {
        if (e[Symbol.iterator]) {
          r = Array.from(e, (i, l) => t(i, l, void 0, o && o[l]))
        } else {
          const i = Object.keys(e)
          r = new Array(i.length)
          for (let l = 0, f = i.length; l < f; l++) {
            const a = i[l]
            r[l] = t(e[a], a, l, o && o[l])
          }
        }
      } else {
        r = []
      }
    }
  }
  return n && (n[s] = r), r
}
const $n = (e) => (e ? (Zr(e) ? mn(e) || e.proxy : $n(e.parent)) : null),
  Ot = re(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => $n(e.parent),
    $root: (e) => $n(e.root),
    $emit: (e) => e.emit,
    $options: (e) => cs(e),
    $forceUpdate: (e) => e.f || (e.f = () => os(e.update)),
    $nextTick: (e) => e.n || (e.n = Er.bind(e.proxy)),
    $watch: (e) => Oi.bind(e),
  }),
  Cn = (e, t) => e !== W && !e.__isScriptSetup && $(e, t),
  ki = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: o,
        accessCache: i,
        type: l,
        appContext: f,
      } = e
      let a
      if (t[0] !== '$') {
        const E = i[t]
        if (E !== void 0) {
          switch (E) {
            case 1:
              return s[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return o[t]
          }
        } else {
          if (Cn(s, t)) {
            return (i[t] = 1), s[t]
          }
          if (r !== W && $(r, t)) {
            return (i[t] = 2), r[t]
          }
          if ((a = e.propsOptions[0]) && $(a, t)) {
            return (i[t] = 3), o[t]
          }
          if (n !== W && $(n, t)) {
            return (i[t] = 4), n[t]
          }
          Bn && (i[t] = 0)
        }
      }
      const h = Ot[t]
      let m, x
      if (h) {
        return t === '$attrs' && ae(e, 'get', t), h(e)
      }
      if ((m = l.__cssModules) && (m = m[t])) {
        return m
      }
      if (n !== W && $(n, t)) {
        return (i[t] = 4), n[t]
      }
      if (((x = f.config.globalProperties), $(x, t))) {
        return x[t]
      }
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: o } = e
      return Cn(r, t)
        ? ((r[t] = n), true)
        : s !== W && $(s, t)
        ? ((s[t] = n), true)
        : $(e.props, t) || (t[0] === '$' && t.slice(1) in e)
        ? false
        : ((o[t] = n), true)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: o,
        },
      },
      i
    ) {
      let l
      return (
        !!n[i] ||
        (e !== W && $(e, i)) ||
        Cn(t, i) ||
        ((l = o[0]) && $(l, i)) ||
        $(s, i) ||
        $(Ot, i) ||
        $(r.config.globalProperties, i)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : $(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
let Bn = true
function Ki(e) {
  const t = cs(e),
    n = e.proxy,
    s = e.ctx
  Bn = false
  t.beforeCreate && Ps(t.beforeCreate, e, 'bc')
  const {
    data: r,
    computed: o,
    methods: i,
    watch: l,
    provide: f,
    inject: a,
    created: h,
    beforeMount: m,
    mounted: x,
    beforeUpdate: E,
    updated: R,
    activated: T,
    deactivated: Z,
    beforeDestroy: j,
    beforeUnmount: ce,
    destroyed: A,
    unmounted: X,
    render: U,
    renderTracked: ge,
    renderTriggered: B,
    errorCaptured: S,
    serverPrefetch: k,
    expose: H,
    inheritAttrs: G,
    components: _e,
    directives: xe,
    filters: ve,
  } = t
  if ((a && zi(a, s, null, e.appContext.config.unwrapInjectedRef), i)) {
    for (const J in i) {
      const K = i[J]
      M(K) && (s[J] = K.bind(n))
    }
  }
  if (r) {
    const J = r.call(n, n)
    V(J) && (e.data = fn(J))
  }
  if (((Bn = true), o)) {
    for (const J in o) {
      const K = o[J],
        qe = M(K) ? K.bind(n, n) : M(K.get) ? K.get.bind(n, n) : Oe,
        Bt = !M(K) && M(K.set) ? K.set.bind(n) : Oe,
        Ze = Yr({
          get: qe,
          set: Bt,
        })
      Object.defineProperty(s, J, {
        enumerable: true,
        configurable: true,
        get: () => Ze.value,
        set: (Fe) => (Ze.value = Fe),
      })
    }
  }
  if (l) {
    for (const J in l) jr(l[J], s, n, J)
  }
  if (f) {
    const J = M(f) ? f.call(n) : f
    Reflect.ownKeys(J).forEach((K) => {
      Ei(K, J[K])
    })
  }
  h && Ps(h, e, 'c')
  function ie(J, K) {
    F(K) ? K.forEach((qe) => J(qe.bind(n))) : K && J(K.bind(n))
  }
  if (
    (ie(Ri, m),
    ie(ls, x),
    ie(Li, E),
    ie(Ni, R),
    ie(Pi, T),
    ie(Ai, Z),
    ie(Hi, S),
    ie(ji, ge),
    ie(Bi, B),
    ie(Nr, ce),
    ie($r, X),
    ie($i, k),
    F(H))
  ) {
    if (H.length) {
      const J = e.exposed || (e.exposed = {})
      H.forEach((K) => {
        Object.defineProperty(J, K, {
          get: () => n[K],
          set: (qe) => (n[K] = qe),
        })
      })
    } else {
      e.exposed || (e.exposed = {})
    }
  }
  U && e.render === Oe && (e.render = U)
  G != null && (e.inheritAttrs = G)
  _e && (e.components = _e)
  xe && (e.directives = xe)
}
function zi(e, t, n = Oe, s = false) {
  F(e) && (e = jn(e))
  for (const r in e) {
    const o = e[r]
    let i
    V(o)
      ? 'default' in o
        ? (i = Et(o.from || r, o.default, true))
        : (i = Et(o.from || r))
      : (i = Et(o))
    q(i) && s
      ? Object.defineProperty(t, r, {
          enumerable: true,
          configurable: true,
          get: () => i.value,
          set: (l) => (i.value = l),
        })
      : (t[r] = i)
  }
}
function Ps(e, t, n) {
  ye(F(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function jr(e, t, n, s) {
  const r = s.includes('.') ? Ar(n, s) : () => n[s]
  if (te(e)) {
    const o = t[e]
    M(o) && Xt(r, o)
  } else {
    if (M(e)) {
      Xt(r, e.bind(n))
    } else {
      if (V(e)) {
        if (F(e)) {
          e.forEach((o) => jr(o, t, n, s))
        } else {
          const o = M(e.handler) ? e.handler.bind(n) : t[e.handler]
          M(o) && Xt(r, o, e)
        }
      }
    }
  }
}
function cs(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = o.get(t)
  let f
  return (
    l
      ? (f = l)
      : !r.length && !n && !s
      ? (f = t)
      : ((f = {}),
        r.length && r.forEach((a) => en(f, a, i, true)),
        en(f, t, i)),
    V(t) && o.set(t, f),
    f
  )
}
function en(e, t, n, s = false) {
  const { mixins: r, extends: o } = t
  o && en(e, o, n, true)
  r && r.forEach((i) => en(e, i, n, true))
  for (const i in t)
    if (!(s && i === 'expose')) {
      const l = Wi[i] || (n && n[i])
      e[i] = l ? l(e[i], t[i]) : t[i]
    }
  return e
}
const Wi = {
  data: As,
  props: Qe,
  emits: Qe,
  methods: Qe,
  computed: Qe,
  beforeCreate: le,
  created: le,
  beforeMount: le,
  mounted: le,
  beforeUpdate: le,
  updated: le,
  beforeDestroy: le,
  beforeUnmount: le,
  destroyed: le,
  unmounted: le,
  activated: le,
  deactivated: le,
  errorCaptured: le,
  serverPrefetch: le,
  components: Qe,
  directives: Qe,
  watch: Xi,
  provide: As,
  inject: Vi,
}
function As(e, t) {
  return t
    ? e
      ? function () {
          return re(
            M(e) ? e.call(this, this) : e,
            M(t) ? t.call(this, this) : t
          )
        }
      : t
    : e
}
function Vi(e, t) {
  return Qe(jn(e), jn(t))
}
function jn(e) {
  if (F(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      t[e[n]] = e[n]
    }
    return t
  }
  return e
}
function le(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Qe(e, t) {
  return e ? re(re(Object.create(null), e), t) : t
}
function Xi(e, t) {
  if (!e) {
    return t
  }
  if (!t) {
    return e
  }
  const n = re(Object.create(null), e)
  for (const s in t) n[s] = le(e[s], t[s])
  return n
}
function qi(e, t, n, s = false) {
  const r = {},
    o = {}
  Jt(o, _n, 1)
  e.propsDefaults = Object.create(null)
  Hr(e, t, r, o)
  for (const i in e.propsOptions[0]) i in r || (r[i] = void 0)
  n ? (e.props = s ? r : ni(r)) : e.type.props ? (e.props = r) : (e.props = o)
  e.attrs = o
}
function Zi(e, t, n, s) {
  const {
      props: r,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    l = N(r),
    [f] = e.propsOptions
  let a = false
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const h = e.vnode.dynamicProps
      for (let m = 0; m < h.length; m++) {
        let x = h[m]
        if (an(e.emitsOptions, x)) {
          continue
        }
        const E = t[x]
        if (f) {
          if ($(o, x)) {
            E !== o[x] && ((o[x] = E), (a = true))
          } else {
            const R = gt(x)
            r[R] = Hn(f, l, R, E, e, false)
          }
        } else {
          E !== o[x] && ((o[x] = E), (a = true))
        }
      }
    }
  } else {
    Hr(e, t, r, o) && (a = true)
    let h
    for (const m in l)
      (!t || (!$(t, m) && ((h = yt(m)) === m || !$(t, h)))) &&
        (f
          ? n &&
            (n[m] !== void 0 || n[h] !== void 0) &&
            (r[m] = Hn(f, l, m, void 0, e, true))
          : delete r[m])
    if (o !== l) {
      for (const m in o) (!t || !$(t, m)) && (delete o[m], (a = true))
    }
  }
  a && He(e, 'set', '$attrs')
}
function Hr(e, t, n, s) {
  const [r, o] = e.propsOptions
  let i = false,
    l
  if (t) {
    for (let f in t) {
      if (Wt(f)) {
        continue
      }
      const a = t[f]
      let h
      r && $(r, (h = gt(f)))
        ? !o || !o.includes(h)
          ? (n[h] = a)
          : ((l || (l = {}))[h] = a)
        : an(e.emitsOptions, f) ||
          ((!(f in s) || a !== s[f]) && ((s[f] = a), (i = true)))
    }
  }
  if (o) {
    const f = N(n),
      a = l || W
    for (let h = 0; h < o.length; h++) {
      const m = o[h]
      n[m] = Hn(r, f, m, a[m], e, !$(a, m))
    }
  }
  return i
}
function Hn(e, t, n, s, r, o) {
  const i = e[n]
  if (i != null) {
    const l = $(i, 'default')
    if (l && s === void 0) {
      const f = i.default
      if (i.type !== Function && M(f)) {
        const { propsDefaults: a } = r
        n in a ? (s = a[n]) : (bt(r), (s = a[n] = f.call(null, t)), ot())
      } else {
        s = f
      }
    }
    i[0] &&
      (o && !l ? (s = false) : i[1] && (s === '' || s === yt(n)) && (s = true))
  }
  return s
}
function Dr(e, t, n = false) {
  const s = t.propsCache,
    r = s.get(e)
  if (r) {
    return r
  }
  const o = e.props,
    i = {},
    l = []
  let f = false
  if (!M(e)) {
    const h = (m) => {
      f = true
      const [x, E] = Dr(m, t, true)
      re(i, x)
      E && l.push(...E)
    }
    !n && t.mixins.length && t.mixins.forEach(h)
    e.extends && h(e.extends)
    e.mixins && e.mixins.forEach(h)
  }
  if (!o && !f) {
    return V(e) && s.set(e, dt), dt
  }
  if (F(o)) {
    for (let h = 0; h < o.length; h++) {
      const m = gt(o[h])
      Ms(m) && (i[m] = W)
    }
  } else {
    if (o) {
      for (const h in o) {
        const m = gt(h)
        if (Ms(m)) {
          const x = o[h],
            E = (i[m] = F(x) || M(x) ? { type: x } : Object.assign({}, x))
          if (E) {
            const R = Ns(Boolean, E.type),
              T = Ns(String, E.type)
            E[0] = R > -1
            E[1] = T < 0 || R < T
            ;(R > -1 || $(E, 'default')) && l.push(m)
          }
        }
      }
    }
  }
  const a = [i, l]
  return V(e) && s.set(e, a), a
}
function Ms(e) {
  return e[0] !== '$'
}
function Rs(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
  return t ? t[2] : e === null ? 'null' : ''
}
function Ls(e, t) {
  return Rs(e) === Rs(t)
}
function Ns(e, t) {
  return F(t) ? t.findIndex((n) => Ls(n, e)) : M(t) && Ls(t, e) ? 0 : -1
}
const Ur = (e) => e[0] === '_' || e === '$stable',
  fs = (e) => (F(e) ? e.map(Re) : [Re(e)]),
  Ji = (e, t, n) => {
    if (t._n) {
      return t
    }
    const s = bi((...r) => fs(t(...r)), n)
    return (s._c = false), s
  },
  kr = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (Ur(r)) {
        continue
      }
      const o = e[r]
      if (M(o)) {
        t[r] = Ji(r, o, s)
      } else {
        if (o != null) {
          const i = fs(o)
          t[r] = () => i
        }
      }
    }
  },
  Kr = (e, t) => {
    const n = fs(t)
    e.slots.default = () => n
  },
  Yi = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = N(t)), Jt(t, '_', n)) : kr(t, (e.slots = {}))
    } else {
      e.slots = {}
      t && Kr(e, t)
    }
    Jt(e.slots, _n, 1)
  },
  Qi = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let o = true,
      i = W
    if (s.shapeFlag & 32) {
      const l = t._
      l
        ? n && l === 1
          ? (o = false)
          : (re(r, t), !n && l === 1 && delete r._)
        : ((o = !t.$stable), kr(t, r))
      i = t
    } else {
      t && (Kr(e, t), (i = { default: 1 }))
    }
    if (o) {
      for (const l in r) !Ur(l) && !(l in i) && delete r[l]
    }
  }
function zr() {
  return {
    app: null,
    config: {
      isNativeTag: xo,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let Gi = 0
function el(e, t) {
  return function (s, r = null) {
    M(s) || (s = Object.assign({}, s))
    r != null && !V(r) && (r = null)
    const o = zr(),
      i = new Set()
    let l = false
    const f = (o.app = {
      _uid: Gi++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: xl,
      get config() {
        return o.config
      },
      set config(a) {},
      use(a, ...h) {
        return (
          i.has(a) ||
            (a && M(a.install)
              ? (i.add(a), a.install(f, ...h))
              : M(a) && (i.add(a), a(f, ...h))),
          f
        )
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), f
      },
      component(a, h) {
        return h ? ((o.components[a] = h), f) : o.components[a]
      },
      directive(a, h) {
        return h ? ((o.directives[a] = h), f) : o.directives[a]
      },
      mount(a, h, m) {
        if (!l) {
          const x = ue(s, r)
          return (
            (x.appContext = o),
            h && t ? t(x, a) : e(x, a, m),
            (l = true),
            (f._container = a),
            (a.__vue_app__ = f),
            mn(x.component) || x.component.proxy
          )
        }
      },
      unmount() {
        l && (e(null, f._container), delete f._container.__vue_app__)
      },
      provide(a, h) {
        return (o.provides[a] = h), f
      },
    })
    return f
  }
}
function Dn(e, t, n, s, r = false) {
  if (F(e)) {
    e.forEach((x, E) => Dn(x, t && (F(t) ? t[E] : t), n, s, r))
    return
  }
  if (qt(s) && !r) {
    return
  }
  const o = s.shapeFlag & 4 ? mn(s.component) || s.component.proxy : s.el,
    i = r ? null : o,
    { i: l, r: f } = e,
    a = t && t.r,
    h = l.refs === W ? (l.refs = {}) : l.refs,
    m = l.setupState
  if (
    (a != null &&
      a !== f &&
      (te(a)
        ? ((h[a] = null), $(m, a) && (m[a] = null))
        : q(a) && (a.value = null)),
    M(f))
  ) {
    We(f, l, 12, [i, h])
  } else {
    const x = te(f),
      E = q(f)
    if (x || E) {
      const R = () => {
        if (e.f) {
          const T = x ? ($(m, f) ? m[f] : h[f]) : f.value
          r
            ? F(T) && Zn(T, o)
            : F(T)
            ? T.includes(o) || T.push(o)
            : x
            ? ((h[f] = [o]), $(m, f) && (m[f] = h[f]))
            : ((f.value = [o]), e.k && (h[e.k] = f.value))
        } else {
          x
            ? ((h[f] = i), $(m, f) && (m[f] = i))
            : E && ((f.value = i), e.k && (h[e.k] = i))
        }
      }
      i ? ((R.id = -1), fe(R, n)) : R()
    }
  }
}
const fe = Ci
function tl(e) {
  return nl(e)
}
function nl(e, t) {
  const n = Oo()
  n.__VUE__ = true
  const {
      insert: s,
      remove: r,
      patchProp: o,
      createElement: i,
      createText: l,
      createComment: f,
      setText: a,
      setElementText: h,
      parentNode: m,
      nextSibling: x,
      setScopeId: E = Oe,
      insertStaticContent: R,
    } = e,
    T = (
      c,
      u,
      d,
      g = null,
      p = null,
      y = null,
      w = false,
      b = null,
      v = !!u.dynamicChildren
    ) => {
      if (c === u) {
        return
      }
      c && !et(c, u) && ((g = jt(c)), Fe(c, p, y, true), (c = null))
      u.patchFlag === -2 && ((v = false), (u.dynamicChildren = null))
      const { type: _, ref: O, shapeFlag: C } = u
      switch (_) {
        case gn:
          Z(c, u, d, g)
          break
        case Ie:
          j(c, u, d, g)
          break
        case En:
          c == null && ce(u, d, g, w)
          break
        case Se:
          _e(c, u, d, g, p, y, w, b, v)
          break
        default:
          C & 1
            ? U(c, u, d, g, p, y, w, b, v)
            : C & 6
            ? xe(c, u, d, g, p, y, w, b, v)
            : (C & 64 || C & 128) && _.process(c, u, d, g, p, y, w, b, v, ct)
      }
      O != null && p && Dn(O, c && c.ref, y, u || c, !u)
    },
    Z = (c, u, d, g) => {
      if (c == null) {
        s((u.el = l(u.children)), d, g)
      } else {
        const p = (u.el = c.el)
        u.children !== c.children && a(p, u.children)
      }
    },
    j = (c, u, d, g) => {
      c == null ? s((u.el = f(u.children || '')), d, g) : (u.el = c.el)
    },
    ce = (c, u, d, g) => {
      ;[c.el, c.anchor] = R(c.children, u, d, g, c.el, c.anchor)
    },
    A = ({ el: c, anchor: u }, d, g) => {
      let p
      for (; c && c !== u; ) {
        p = x(c)
        s(c, d, g)
        c = p
      }
      s(u, d, g)
    },
    X = ({ el: c, anchor: u }) => {
      let d
      for (; c && c !== u; ) {
        d = x(c)
        r(c)
        c = d
      }
      r(u)
    },
    U = (c, u, d, g, p, y, w, b, v) => {
      w = w || u.type === 'svg'
      c == null ? ge(u, d, g, p, y, w, b, v) : k(c, u, p, y, w, b, v)
    },
    ge = (c, u, d, g, p, y, w, b) => {
      let v, _
      const { type: O, props: C, shapeFlag: I, transition: P, dirs: L } = c
      if (
        ((v = c.el = i(c.type, y, C && C.is, C)),
        I & 8
          ? h(v, c.children)
          : I & 16 &&
            S(c.children, v, null, g, p, y && O !== 'foreignObject', w, b),
        L && Je(c, null, g, 'created'),
        B(v, c, c.scopeId, w, g),
        C)
      ) {
        for (const D in C)
          D !== 'value' &&
            !Wt(D) &&
            o(v, D, null, C[D], y, c.children, g, p, $e)
        'value' in C && o(v, 'value', null, C.value)
        ;(_ = C.onVnodeBeforeMount) && Ae(_, g, c)
      }
      L && Je(c, null, g, 'beforeMount')
      const z = (!p || (p && !p.pendingBranch)) && P && !P.persisted
      z && P.beforeEnter(v)
      s(v, u, d)
      ;((_ = C && C.onVnodeMounted) || z || L) &&
        fe(() => {
          _ && Ae(_, g, c)
          z && P.enter(v)
          L && Je(c, null, g, 'mounted')
        }, p)
    },
    B = (c, u, d, g, p) => {
      if ((d && E(c, d), g)) {
        for (let y = 0; y < g.length; y++) {
          E(c, g[y])
        }
      }
      if (p) {
        let y = p.subTree
        if (u === y) {
          const w = p.vnode
          B(c, w, w.scopeId, w.slotScopeIds, p.parent)
        }
      }
    },
    S = (c, u, d, g, p, y, w, b, v = 0) => {
      for (let _ = v; _ < c.length; _++) {
        const O = (c[_] = b ? ke(c[_]) : Re(c[_]))
        T(null, O, u, d, g, p, y, w, b)
      }
    },
    k = (c, u, d, g, p, y, w) => {
      const b = (u.el = c.el)
      let { patchFlag: v, dynamicChildren: _, dirs: O } = u
      v |= c.patchFlag & 16
      const C = c.props || W,
        I = u.props || W
      let P
      d && Ye(d, false)
      ;(P = I.onVnodeBeforeUpdate) && Ae(P, d, u, c)
      O && Je(u, c, d, 'beforeUpdate')
      d && Ye(d, true)
      const L = p && u.type !== 'foreignObject'
      if (
        (_
          ? H(c.dynamicChildren, _, b, d, g, L, y)
          : w || K(c, u, b, null, d, g, L, y, false),
        v > 0)
      ) {
        if (v & 16) {
          G(b, u, C, I, d, g, p)
        } else {
          if (
            (v & 2 && C.class !== I.class && o(b, 'class', null, I.class, p),
            v & 4 && o(b, 'style', C.style, I.style, p),
            v & 8)
          ) {
            const z = u.dynamicProps
            for (let D = 0; D < z.length; D++) {
              const Y = z[D],
                we = C[Y],
                ft = I[Y]
              ;(ft !== we || Y === 'value') &&
                o(b, Y, we, ft, p, c.children, d, g, $e)
            }
          }
        }
        v & 1 && c.children !== u.children && h(b, u.children)
      } else {
        !w && _ == null && G(b, u, C, I, d, g, p)
      }
      ;((P = I.onVnodeUpdated) || O) &&
        fe(() => {
          P && Ae(P, d, u, c)
          O && Je(u, c, d, 'updated')
        }, g)
    },
    H = (c, u, d, g, p, y, w) => {
      for (let b = 0; b < u.length; b++) {
        const v = c[b],
          _ = u[b],
          O =
            v.el && (v.type === Se || !et(v, _) || v.shapeFlag & 70)
              ? m(v.el)
              : d
        T(v, _, O, null, g, p, y, w, true)
      }
    },
    G = (c, u, d, g, p, y, w) => {
      if (d !== g) {
        if (d !== W) {
          for (const b in d)
            !Wt(b) && !(b in g) && o(c, b, d[b], null, w, u.children, p, y, $e)
        }
        for (const b in g) {
          if (Wt(b)) {
            continue
          }
          const v = g[b],
            _ = d[b]
          v !== _ && b !== 'value' && o(c, b, _, v, w, u.children, p, y, $e)
        }
        'value' in g && o(c, 'value', d.value, g.value)
      }
    },
    _e = (c, u, d, g, p, y, w, b, v) => {
      const _ = (u.el = c ? c.el : l('')),
        O = (u.anchor = c ? c.anchor : l(''))
      let { patchFlag: C, dynamicChildren: I, slotScopeIds: P } = u
      P && (b = b ? b.concat(P) : P)
      c == null
        ? (s(_, d, g), s(O, d, g), S(u.children, d, O, p, y, w, b, v))
        : C > 0 && C & 64 && I && c.dynamicChildren
        ? (H(c.dynamicChildren, I, d, p, y, w, b),
          (u.key != null || (p && u === p.subTree)) && Wr(c, u, true))
        : K(c, u, d, O, p, y, w, b, v)
    },
    xe = (c, u, d, g, p, y, w, b, v) => {
      u.slotScopeIds = b
      c == null
        ? u.shapeFlag & 512
          ? p.ctx.activate(u, d, g, w, v)
          : ve(u, d, g, p, y, w, v)
        : oe(c, u, v)
    },
    ve = (c, u, d, g, p, y, w) => {
      const b = (c.component = dl(c, g, p))
      if ((hn(c) && (b.ctx.renderer = ct), hl(b), b.asyncDep)) {
        if ((p && p.registerDep(b, ie), !c.el)) {
          const v = (b.subTree = ue(Ie))
          j(null, v, u, d)
        }
        return
      }
      ie(b, c, u, d, p, y, w)
    },
    oe = (c, u, d) => {
      const g = (u.component = c.component)
      if (vi(c, u, d)) {
        if (g.asyncDep && !g.asyncResolved) {
          J(g, u, d)
          return
        } else {
          g.next = u
          di(g.update)
          g.update()
        }
      } else {
        u.el = c.el
        g.vnode = u
      }
    },
    ie = (c, u, d, g, p, y, w) => {
      const b = () => {
          if (c.isMounted) {
            let { next: O, bu: C, u: I, parent: P, vnode: L } = c,
              z = O,
              D
            Ye(c, false)
            O ? ((O.el = L.el), J(c, O, w)) : (O = L)
            C && Vt(C)
            ;(D = O.props && O.props.onVnodeBeforeUpdate) && Ae(D, P, O, L)
            Ye(c, true)
            const Y = wn(c),
              we = c.subTree
            c.subTree = Y
            T(we, Y, m(we.el), jt(we), c, p, y)
            O.el = Y.el
            z === null && wi(c, Y.el)
            I && fe(I, p)
            ;(D = O.props && O.props.onVnodeUpdated) &&
              fe(() => Ae(D, P, O, L), p)
          } else {
            let O
            const { el: C, props: I } = u,
              { bm: P, m: L, parent: z } = c,
              D = qt(u)
            if (
              (Ye(c, false),
              P && Vt(P),
              !D && (O = I && I.onVnodeBeforeMount) && Ae(O, z, u),
              Ye(c, true),
              C && xn)
            ) {
              const Y = () => {
                c.subTree = wn(c)
                xn(C, c.subTree, c, p, null)
              }
              D ? u.type.__asyncLoader().then(() => !c.isUnmounted && Y()) : Y()
            } else {
              const Y = (c.subTree = wn(c))
              T(null, Y, d, g, c, p, y)
              u.el = Y.el
            }
            if ((L && fe(L, p), !D && (O = I && I.onVnodeMounted))) {
              const Y = u
              fe(() => Ae(O, z, Y), p)
            }
            ;(u.shapeFlag & 256 ||
              (z && qt(z.vnode) && z.vnode.shapeFlag & 256)) &&
              c.a &&
              fe(c.a, p)
            c.isMounted = true
            u = d = g = null
          }
        },
        v = (c.effect = new Qn(b, () => os(_), c.scope)),
        _ = (c.update = () => v.run())
      _.id = c.uid
      Ye(c, true)
      _()
    },
    J = (c, u, d) => {
      u.component = c
      const g = c.vnode.props
      c.vnode = u
      c.next = null
      Zi(c, u.props, g, d)
      Qi(c, u.children, d)
      xt()
      Is()
      vt()
    },
    K = (c, u, d, g, p, y, w, b, v = false) => {
      const _ = c && c.children,
        O = c ? c.shapeFlag : 0,
        C = u.children,
        { patchFlag: I, shapeFlag: P } = u
      if (I > 0) {
        if (I & 128) {
          Bt(_, C, d, g, p, y, w, b, v)
          return
        } else {
          if (I & 256) {
            qe(_, C, d, g, p, y, w, b, v)
            return
          }
        }
      }
      P & 8
        ? (O & 16 && $e(_, p, y), C !== _ && h(d, C))
        : O & 16
        ? P & 16
          ? Bt(_, C, d, g, p, y, w, b, v)
          : $e(_, p, y, true)
        : (O & 8 && h(d, ''), P & 16 && S(C, d, g, p, y, w, b, v))
    },
    qe = (c, u, d, g, p, y, w, b, v) => {
      c = c || dt
      u = u || dt
      const _ = c.length,
        O = u.length,
        C = Math.min(_, O)
      let I
      for (I = 0; I < C; I++) {
        const P = (u[I] = v ? ke(u[I]) : Re(u[I]))
        T(c[I], P, d, null, p, y, w, b, v)
      }
      _ > O ? $e(c, p, y, true, false, C) : S(u, d, g, p, y, w, b, v, C)
    },
    Bt = (c, u, d, g, p, y, w, b, v) => {
      let _ = 0
      const O = u.length
      let C = c.length - 1,
        I = O - 1
      for (; _ <= C && _ <= I; ) {
        const P = c[_],
          L = (u[_] = v ? ke(u[_]) : Re(u[_]))
        if (et(P, L)) {
          T(P, L, d, null, p, y, w, b, v)
        } else {
          break
        }
        _++
      }
      for (; _ <= C && _ <= I; ) {
        const P = c[C],
          L = (u[I] = v ? ke(u[I]) : Re(u[I]))
        if (et(P, L)) {
          T(P, L, d, null, p, y, w, b, v)
        } else {
          break
        }
        C--
        I--
      }
      if (_ > C) {
        if (_ <= I) {
          const P = I + 1,
            L = P < O ? u[P].el : g
          for (; _ <= I; ) {
            T(null, (u[_] = v ? ke(u[_]) : Re(u[_])), d, L, p, y, w, b, v)
            _++
          }
        }
      } else {
        if (_ > I) {
          for (; _ <= C; ) {
            Fe(c[_], p, y, true)
            _++
          }
        } else {
          const P = _,
            L = _,
            z = new Map()
          for (_ = L; _ <= I; _++) {
            const de = (u[_] = v ? ke(u[_]) : Re(u[_]))
            de.key != null && z.set(de.key, _)
          }
          let D,
            Y = 0
          const we = I - L + 1
          let ft = false,
            gs = 0
          const St = new Array(we)
          for (_ = 0; _ < we; _++) {
            St[_] = 0
          }
          for (_ = P; _ <= C; _++) {
            const de = c[_]
            if (Y >= we) {
              Fe(de, p, y, true)
              continue
            }
            let Pe
            if (de.key != null) {
              Pe = z.get(de.key)
            } else {
              for (D = L; D <= I; D++) {
                if (St[D - L] === 0 && et(de, u[D])) {
                  Pe = D
                  break
                }
              }
            }
            Pe === void 0
              ? Fe(de, p, y, true)
              : ((St[Pe - L] = _ + 1),
                Pe >= gs ? (gs = Pe) : (ft = true),
                T(de, u[Pe], d, null, p, y, w, b, v),
                Y++)
          }
          const _s = ft ? sl(St) : dt
          for (D = _s.length - 1, _ = we - 1; _ >= 0; _--) {
            const de = L + _,
              Pe = u[de],
              ms = de + 1 < O ? u[de + 1].el : g
            St[_] === 0
              ? T(null, Pe, d, ms, p, y, w, b, v)
              : ft && (D < 0 || _ !== _s[D] ? Ze(Pe, d, ms, 2) : D--)
          }
        }
      }
    },
    Ze = (c, u, d, g, p = null) => {
      const { el: y, type: w, transition: b, children: v, shapeFlag: _ } = c
      if (_ & 6) {
        Ze(c.component.subTree, u, d, g)
        return
      }
      if (_ & 128) {
        c.suspense.move(u, d, g)
        return
      }
      if (_ & 64) {
        w.move(c, u, d, ct)
        return
      }
      if (w === Se) {
        s(y, u, d)
        for (let C = 0; C < v.length; C++) {
          Ze(v[C], u, d, g)
        }
        s(c.anchor, u, d)
        return
      }
      if (w === En) {
        A(c, u, d)
        return
      }
      if (g !== 2 && _ & 1 && b) {
        if (g === 0) {
          b.beforeEnter(y)
          s(y, u, d)
          fe(() => b.enter(y), p)
        } else {
          const { leave: C, delayLeave: I, afterLeave: P } = b,
            L = () => s(y, u, d),
            z = () => {
              C(y, () => {
                L()
                P && P()
              })
            }
          I ? I(y, L, z) : z()
        }
      } else {
        s(y, u, d)
      }
    },
    Fe = (c, u, d, g = false, p = false) => {
      const {
        type: y,
        props: w,
        ref: b,
        children: v,
        dynamicChildren: _,
        shapeFlag: O,
        patchFlag: C,
        dirs: I,
      } = c
      if ((b != null && Dn(b, null, d, c, true), O & 256)) {
        u.ctx.deactivate(c)
        return
      }
      const P = O & 1 && I,
        L = !qt(c)
      let z
      if ((L && (z = w && w.onVnodeBeforeUnmount) && Ae(z, u, c), O & 6)) {
        ao(c.component, d, g)
      } else {
        if (O & 128) {
          c.suspense.unmount(d, g)
          return
        }
        P && Je(c, null, u, 'beforeUnmount')
        O & 64
          ? c.type.remove(c, u, d, p, ct, g)
          : _ && (y !== Se || (C > 0 && C & 64))
          ? $e(_, u, d, false, true)
          : ((y === Se && C & 384) || (!p && O & 16)) && $e(v, u, d)
        g && hs(c)
      }
      ;((L && (z = w && w.onVnodeUnmounted)) || P) &&
        fe(() => {
          z && Ae(z, u, c)
          P && Je(c, null, u, 'unmounted')
        }, d)
    },
    hs = (c) => {
      const { type: u, el: d, anchor: g, transition: p } = c
      if (u === Se) {
        uo(d, g)
        return
      }
      if (u === En) {
        X(c)
        return
      }
      const y = () => {
        r(d)
        p && !p.persisted && p.afterLeave && p.afterLeave()
      }
      if (c.shapeFlag & 1 && p && !p.persisted) {
        const { leave: w, delayLeave: b } = p,
          v = () => w(d, y)
        b ? b(c.el, y, v) : v()
      } else {
        y()
      }
    },
    uo = (c, u) => {
      let d
      for (; c !== u; ) {
        d = x(c)
        r(c)
        c = d
      }
      r(u)
    },
    ao = (c, u, d) => {
      const { bum: g, scope: p, update: y, subTree: w, um: b } = c
      g && Vt(g)
      p.stop()
      y && ((y.active = false), Fe(w, c, u, d))
      b && fe(b, u)
      fe(() => {
        c.isUnmounted = true
      }, u)
      u &&
        u.pendingBranch &&
        !u.isUnmounted &&
        c.asyncDep &&
        !c.asyncResolved &&
        c.suspenseId === u.pendingId &&
        (u.deps--, u.deps === 0 && u.resolve())
    },
    $e = (c, u, d, g = false, p = false, y = 0) => {
      for (let w = y; w < c.length; w++) {
        Fe(c[w], u, d, g, p)
      }
    },
    jt = (c) =>
      c.shapeFlag & 6
        ? jt(c.component.subTree)
        : c.shapeFlag & 128
        ? c.suspense.next()
        : x(c.anchor || c.el),
    ps = (c, u, d) => {
      c == null
        ? u._vnode && Fe(u._vnode, null, null, true)
        : T(u._vnode || null, c, u, null, null, null, d)
      Is()
      Ir()
      u._vnode = c
    },
    ct = {
      p: T,
      um: Fe,
      m: Ze,
      r: hs,
      mt: ve,
      mc: S,
      pc: K,
      pbc: H,
      n: jt,
      o: e,
    }
  let yn, xn
  return (
    t && ([yn, xn] = t(ct)),
    {
      render: ps,
      hydrate: yn,
      createApp: el(ps, yn),
    }
  )
}
function Ye({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function Wr(e, t, n = false) {
  const s = e.children,
    r = t.children
  if (F(s) && F(r)) {
    for (let o = 0; o < s.length; o++) {
      const i = s[o]
      let l = r[o]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[o] = ke(r[o])), (l.el = i.el)),
        n || Wr(i, l))
      l.type === gn && (l.el = i.el)
    }
  }
}
function sl(e) {
  const t = e.slice(),
    n = [0]
  let s, r, o, i, l
  const f = e.length
  for (s = 0; s < f; s++) {
    const a = e[s]
    if (a !== 0) {
      if (((r = n[n.length - 1]), e[r] < a)) {
        t[s] = r
        n.push(s)
        continue
      }
      for (o = 0, i = n.length - 1; o < i; ) {
        l = (o + i) >> 1
        e[n[l]] < a ? (o = l + 1) : (i = l)
      }
      a < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s))
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) {
    n[o] = i
    i = t[i]
  }
  return n
}
const rl = (e) => e.__isTeleport,
  Se = Symbol(void 0),
  gn = Symbol(void 0),
  Ie = Symbol(void 0),
  En = Symbol(void 0),
  It = []
let Ee = null
function pe(e = false) {
  It.push((Ee = e ? null : []))
}
function ol() {
  It.pop()
  Ee = It[It.length - 1] || null
}
let Lt = 1
function $s(e) {
  Lt += e
}
function Vr(e) {
  return (
    (e.dynamicChildren = Lt > 0 ? Ee || dt : null),
    ol(),
    Lt > 0 && Ee && Ee.push(e),
    e
  )
}
function Ne(e, t, n, s, r, o) {
  return Vr(ne(e, t, n, s, r, o, true))
}
function us(e, t, n, s, r) {
  return Vr(ue(e, t, n, s, r, true))
}
function il(e) {
  return e ? e.__v_isVNode === true : false
}
function et(e, t) {
  return e.type === t.type && e.key === t.key
}
const _n = '__vInternal',
  Xr = ({ key: e }) => e ?? null,
  Zt = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? te(e) || q(e) || M(e)
        ? {
            i: be,
            r: e,
            k: t,
            f: !!n,
          }
        : e
      : null
function ne(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  o = e === Se ? 0 : 1,
  i = false,
  l = false
) {
  const f = {
    __v_isVNode: true,
    __v_skip: true,
    type: e,
    props: t,
    key: t && Xr(t),
    ref: t && Zt(t),
    scopeId: dn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: be,
  }
  return (
    l
      ? (ds(f, n), o & 128 && e.normalize(f))
      : n && (f.shapeFlag |= te(n) ? 8 : 16),
    Lt > 0 &&
      !i &&
      Ee &&
      (f.patchFlag > 0 || o & 6) &&
      f.patchFlag !== 32 &&
      Ee.push(f),
    f
  )
}
const ue = ll
function ll(e, t = null, n = null, s = 0, r = null, o = false) {
  if (((!e || e === Di) && (e = Ie), il(e))) {
    const l = Xe(e, t, true)
    return (
      n && ds(l, n),
      Lt > 0 &&
        !o &&
        Ee &&
        (l.shapeFlag & 6 ? (Ee[Ee.indexOf(e)] = l) : Ee.push(l)),
      (l.patchFlag |= -2),
      l
    )
  }
  if ((ml(e) && (e = e.__vccOpts), t)) {
    t = cl(t)
    let { class: l, style: f } = t
    l && !te(l) && (t.class = nn(l))
    V(f) && (br(f) && !F(f) && (f = re({}, f)), (t.style = Xn(f)))
  }
  const i = te(e) ? 1 : Si(e) ? 128 : rl(e) ? 64 : V(e) ? 4 : M(e) ? 2 : 0
  return ne(e, t, n, s, r, i, o, true)
}
function cl(e) {
  return e ? (br(e) || _n in e ? re({}, e) : e) : null
}
function Xe(e, t, n = false) {
  const { props: s, ref: r, patchFlag: o, children: i } = e,
    l = t ? fl(s || {}, t) : s
  return {
    __v_isVNode: true,
    __v_skip: true,
    type: e.type,
    props: l,
    key: l && Xr(l),
    ref:
      t && t.ref ? (n && r ? (F(r) ? r.concat(Zt(t)) : [r, Zt(t)]) : Zt(t)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Se ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Xe(e.ssContent),
    ssFallback: e.ssFallback && Xe(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  }
}
function as(e = ' ', t = 0) {
  return ue(gn, null, e, t)
}
function Un(e = '', t = false) {
  return t ? (pe(), us(Ie, null, e)) : ue(Ie, null, e)
}
function Re(e) {
  return e == null || typeof e == 'boolean'
    ? ue(Ie)
    : F(e)
    ? ue(Se, null, e.slice())
    : typeof e == 'object'
    ? ke(e)
    : ue(gn, null, String(e))
}
function ke(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Xe(e)
}
function ds(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) {
    t = null
  } else {
    if (F(t)) {
      n = 16
    } else {
      if (typeof t == 'object') {
        if (s & 65) {
          const r = t.default
          r && (r._c && (r._d = false), ds(e, r()), r._c && (r._d = true))
          return
        } else {
          n = 32
          const r = t._
          !r && !(_n in t)
            ? (t._ctx = be)
            : r === 3 &&
              be &&
              (be.slots._ === 1
                ? (t._ = 1)
                : ((t._ = 2), (e.patchFlag |= 1024)))
        }
      } else {
        M(t)
          ? ((t = {
              default: t,
              _ctx: be,
            }),
            (n = 32))
          : ((t = String(t)), s & 64 ? ((n = 16), (t = [as(t)])) : (n = 8))
      }
    }
  }
  e.children = t
  e.shapeFlag |= n
}
function fl(...e) {
  const t = {
    style: Xn([t.style, s.style]),
  }
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class') {
        t.class !== s.class && (t.class = nn([t.class, s.class]))
      } else {
        if (r === 'style') {
        } else {
          if (rn(r)) {
            const o = t[r],
              i = s[r]
            i &&
              o !== i &&
              !(F(o) && o.includes(i)) &&
              (t[r] = o ? [].concat(o, i) : i)
          } else {
            r !== '' && (t[r] = s[r])
          }
        }
      }
  }
  return t
}
function Ae(e, t, n, s = null) {
  ye(e, t, 7, [n, s])
}
const ul = zr()
let al = 0
function dl(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || ul,
    o = {
      uid: al++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new rr(true),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Dr(s, r),
      emitsOptions: Fr(s, r),
      emit: null,
      emitted: null,
      propsDefaults: W,
      inheritAttrs: s.inheritAttrs,
      ctx: W,
      data: W,
      props: W,
      attrs: W,
      slots: W,
      refs: W,
      setupState: W,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: false,
      isMounted: false,
      isUnmounted: false,
      isDeactivated: false,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = gi.bind(null, o)),
    e.ce && e.ce(o),
    o
  )
}
let Q = null
const qr = () => Q || be,
  bt = (e) => {
    Q = e
    e.scope.on()
  },
  ot = () => {
    Q && Q.scope.off()
    Q = null
  }
function Zr(e) {
  return e.vnode.shapeFlag & 4
}
let Nt = false
function hl(e, t = false) {
  Nt = t
  const { props: n, children: s } = e.vnode,
    r = Zr(e)
  qi(e, n, r, t)
  Yi(e, s)
  const o = r ? pl(e, t) : void 0
  return (Nt = false), o
}
function pl(e, t) {
  const n = e.type
  e.accessCache = Object.create(null)
  e.proxy = mt(new Proxy(e.ctx, ki))
  const { setup: s } = n
  if (s) {
    const r = (e.setupContext = s.length > 1 ? _l(e) : null)
    bt(e)
    xt()
    const o = We(s, e, 0, [e.props, r])
    if ((vt(), ot(), er(o))) {
      if ((o.then(ot, ot), t)) {
        return o
          .then((i) => {
            Bs(e, i, t)
          })
          .catch((i) => {
            un(i, e, 0)
          })
      }
      e.asyncDep = o
    } else {
      Bs(e, o, t)
    }
  } else {
    Jr(e, t)
  }
}
function Bs(e, t, n) {
  M(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : V(t) && (e.setupState = vr(t))
  Jr(e, n)
}
let js
function Jr(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && js && !s.render) {
      const r = s.template || cs(e).template
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: f } = s,
          a = re(
            re(
              {
                isCustomElement: o,
                delimiters: l,
              },
              i
            ),
            f
          )
        s.render = js(r, a)
      }
    }
    e.render = s.render || Oe
  }
  bt(e)
  xt()
  Ki(e)
  vt()
  ot()
}
function gl(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return ae(e, 'get', '$attrs'), t[n]
    },
  })
}
function _l(e) {
  const t = (s) => {
    e.exposed = s || {}
  }
  let n
  return {
    get attrs() {
      return n || (n = gl(e))
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function mn(e) {
  if (e.exposed) {
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(vr(mt(e.exposed)), {
        get(t, n) {
          if (n in t) {
            return t[n]
          }
          if (n in Ot) {
            return Ot[n](e)
          }
        },
        has(t, n) {
          return n in t || n in Ot
        },
      }))
    )
  }
}
function ml(e) {
  return M(e) && '__vccOpts' in e
}
const Yr = (e, t) => fi(e, t, Nt),
  bl = Symbol(''),
  yl = () => Et(bl),
  xl = '3.2.47',
  vl = 'http://www.w3.org/2000/svg',
  tt = typeof document < 'u' ? document : null,
  Hs = tt && tt.createElement('template'),
  wl = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const r = t
        ? tt.createElementNS(vl, e)
        : tt.createElement(e, n ? { is: n } : void 0)
      return (
        e === 'select' &&
          s &&
          s.multiple != null &&
          r.setAttribute('multiple', s.multiple),
        r
      )
    },
    createText: (e) => tt.createTextNode(e),
    createComment: (e) => tt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => tt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, r, o) {
      const i = n ? n.previousSibling : t.lastChild
      if (r && (r === o || r.nextSibling)) {
        for (
          ;
          t.insertBefore(r.cloneNode(true), n),
            !(r === o || !(r = r.nextSibling));

        ) {}
      } else {
        Hs.innerHTML = s ? `<svg>${e}</svg>` : e
        const l = Hs.content
        if (s) {
          const f = l.firstChild
          for (; f.firstChild; ) {
            l.appendChild(f.firstChild)
          }
          l.removeChild(f)
        }
        t.insertBefore(l, n)
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ]
    },
  }
function Sl(e, t, n) {
  const s = e._vtc
  s && (t = (t ? [t, ...s] : [...s]).join(' '))
  t == null
    ? e.removeAttribute('class')
    : n
    ? e.setAttribute('class', t)
    : (e.className = t)
}
function Cl(e, t, n) {
  const s = e.style,
    r = te(n)
  if (n && !r) {
    if (t && !te(t)) {
      for (const o in t) n[o] == null && kn(s, o, '')
    }
    for (const o in n) kn(s, o, n[o])
  } else {
    const o = s.display
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute('style')
    '_vod' in e && (s.display = o)
  }
}
const Ds = /\s*!important$/
function kn(e, t, n) {
  if (F(n)) {
    n.forEach((s) => kn(e, t, s))
  } else {
    if ((n == null && (n = ''), t.startsWith('--'))) {
      e.setProperty(t, n)
    } else {
      const s = El(e, t)
      Ds.test(n)
        ? e.setProperty(yt(s), n.replace(Ds, ''), 'important')
        : (e[s] = n)
    }
  }
}
const Us = ['Webkit', 'Moz', 'ms'],
  On = {}
function El(e, t) {
  const n = On[t]
  if (n) {
    return n
  }
  let s = gt(t)
  if (s !== 'filter' && s in e) {
    return (On[t] = s)
  }
  s = sr(s)
  for (let r = 0; r < Us.length; r++) {
    const o = Us[r] + s
    if (o in e) {
      return (On[t] = o)
    }
  }
  return t
}
const ks = 'http://www.w3.org/1999/xlink'
function Ol(e, t, n, s, r) {
  if (s && t.startsWith('xlink:')) {
    n == null
      ? e.removeAttributeNS(ks, t.slice(6, t.length))
      : e.setAttributeNS(ks, t, n)
  } else {
    const o = bo(t)
    n == null || (o && !Js(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? '' : n)
  }
}
function Il(e, t, n, s, r, o, i) {
  if (t === 'innerHTML' || t === 'textContent') {
    s && i(s, r, o)
    e[t] = n ?? ''
    return
  }
  if (t === 'value' && e.tagName !== 'PROGRESS' && !e.tagName.includes('-')) {
    e._value = n
    const f = n ?? ''
    ;(e.value !== f || e.tagName === 'OPTION') && (e.value = f)
    n == null && e.removeAttribute(t)
    return
  }
  let l = false
  if (n === '' || n == null) {
    const f = typeof e[t]
    f === 'boolean'
      ? (n = Js(n))
      : n == null && f === 'string'
      ? ((n = ''), (l = true))
      : f === 'number' && ((n = 0), (l = true))
  }
  try {
    e[t] = n
  } catch {}
  l && e.removeAttribute(t)
}
function nt(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function Tl(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
function Fl(e, t, n, s, r = null) {
  const o = e._vei || (e._vei = {}),
    i = o[t]
  if (s && i) {
    i.value = s
  } else {
    const [l, f] = Pl(t)
    if (s) {
      const a = (o[t] = Rl(s, r))
      nt(e, l, a, f)
    } else {
      i && (Tl(e, l, i, f), (o[t] = void 0))
    }
  }
}
const Ks = /(?:Once|Passive|Capture)$/
function Pl(e) {
  let t
  if (Ks.test(e)) {
    t = {}
    let s
    for (; (s = e.match(Ks)); ) {
      e = e.slice(0, e.length - s[0].length)
      t[s[0].toLowerCase()] = true
    }
  }
  return [e[2] === ':' ? e.slice(3) : yt(e.slice(2)), t]
}
let In = 0
const Al = Promise.resolve(),
  Ml = () => In || (Al.then(() => (In = 0)), (In = Date.now()))
function Rl(e, t) {
  const n = (s) => {
    if (!s._vts) {
      s._vts = Date.now()
    } else {
      if (s._vts <= n.attached) {
        return
      }
    }
    ye(Ll(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = Ml()), n
}
function Ll(e, t) {
  if (F(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e)
        e._stopped = true
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    )
  } else {
    return t
  }
}
const zs = /^on[a-z]/,
  Nl = (e, t, n, s, r = false, o, i, l, f) => {
    t === 'class'
      ? Sl(e, s, r)
      : t === 'style'
      ? Cl(e, n, s)
      : rn(t)
      ? qn(t) || Fl(e, t, n, s, i)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), true)
            : t[0] === '^'
            ? ((t = t.slice(1)), false)
            : $l(e, t, s, r)
        )
      ? Il(e, t, s, o, i, l, f)
      : (t === 'true-value'
          ? (e._trueValue = s)
          : t === 'false-value' && (e._falseValue = s),
        Ol(e, t, s, r))
  }
function $l(e, t, n, s) {
  return s
    ? !!(
        t === 'innerHTML' ||
        t === 'textContent' ||
        (t in e && zs.test(t) && M(n))
      )
    : t === 'spellcheck' ||
      t === 'draggable' ||
      t === 'translate' ||
      t === 'form' ||
      (t === 'list' && e.tagName === 'INPUT') ||
      (t === 'type' && e.tagName === 'TEXTAREA') ||
      (zs.test(t) && te(n))
    ? false
    : t in e
}
const Bl = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true,
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
}
Fi.props
const tn = (e) => {
  const t = e.props['onUpdate:modelValue'] || false
  return F(t) ? (n) => Vt(t, n) : t
}
function jl(e) {
  e.target.composing = true
}
function Ws(e) {
  const t = e.target
  t.composing && ((t.composing = false), t.dispatchEvent(new Event('input')))
}
const Hl = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
      e._assign = tn(r)
      const o = s || (r.props && r.props.type === 'number')
      nt(e, t ? 'change' : 'input', (i) => {
        if (i.target.composing) {
          return
        }
        let l = e.value
        n && (l = l.trim())
        o && (l = Fn(l))
        e._assign(l)
      })
      n &&
        nt(e, 'change', () => {
          e.value = e.value.trim()
        })
      t ||
        (nt(e, 'compositionstart', jl),
        nt(e, 'compositionend', Ws),
        nt(e, 'change', Ws))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ''
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: s, number: r } },
      o
    ) {
      if (
        ((e._assign = tn(o)),
        e.composing ||
          (document.activeElement === e &&
            e.type !== 'range' &&
            (n ||
              (s && e.value.trim() === t) ||
              ((r || e.type === 'number') && Fn(e.value) === t))))
      ) {
        return
      }
      const i = t ?? ''
      e.value !== i && (e.value = i)
    },
  },
  Dl = {
    deep: true,
    created(e, t, n) {
      e._assign = tn(n)
      nt(e, 'change', () => {
        const s = e._modelValue,
          r = Ul(e),
          o = e.checked,
          i = e._assign
        if (F(s)) {
          const l = Ys(s, r),
            f = l !== -1
          if (o && !f) {
            i(s.concat(r))
          } else {
            if (!o && f) {
              const a = [...s]
              a.splice(l, 1)
              i(a)
            }
          }
        } else {
          if (on(s)) {
            const l = new Set(s)
            o ? l.add(r) : l.delete(r)
            i(l)
          } else {
            i(Qr(e, o))
          }
        }
      })
    },
    mounted: Vs,
    beforeUpdate(e, t, n) {
      e._assign = tn(n)
      Vs(e, t, n)
    },
  }
function Vs(e, { value: t, oldValue: n }, s) {
  e._modelValue = t
  F(t)
    ? (e.checked = Ys(t, s.props.value) > -1)
    : on(t)
    ? (e.checked = t.has(s.props.value))
    : t !== n && (e.checked = sn(t, Qr(e, true)))
}
function Ul(e) {
  return '_value' in e ? e._value : e.value
}
function Qr(e, t) {
  const n = t ? '_trueValue' : '_falseValue'
  return n in e ? e[n] : t
}
const kl = re({ patchProp: Nl }, wl)
let Xs
function Kl() {
  return Xs || (Xs = tl(kl))
}
const zl = (...e) => {
  const t = Kl().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (s) => {
      const r = Wl(s)
      if (!r) {
        return
      }
      const o = t._component
      !M(o) && !o.render && !o.template && (o.template = r.innerHTML)
      r.innerHTML = ''
      const i = n(r, false, r instanceof SVGElement)
      return (
        r instanceof Element &&
          (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')),
        i
      )
    }),
    t
  )
}
function Wl(e) {
  return te(e) ? document.querySelector(e) : e
}
var Vl = false
let Gr
const bn = (e) => (Gr = e),
  eo = Symbol()
function Kn(e) {
  return (
    e &&
    typeof e == 'object' &&
    Object.prototype.toString.call(e) === '[object Object]' &&
    typeof e.toJSON != 'function'
  )
}
var Tt
;(function (e) {
  e.direct = 'direct'
  e.patchObject = 'patch object'
  e.patchFunction = 'patch function'
})(Tt || (Tt = {}))
function Xl() {
  const e = or(true),
    t = e.run(() => Me({}))
  let n = [],
    s = []
  const r = mt({
    install(o) {
      bn(r)
      r._a = o
      o.provide(eo, r)
      o.config.globalProperties.$pinia = r
      s.forEach((i) => n.push(i))
      s = []
    },
    use(o) {
      return !this._a && !Vl ? s.push(o) : n.push(o), this
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  })
  return r
}
const to = () => {}
function qs(e, t, n, s = to) {
  e.push(t)
  const r = () => {
    const o = e.indexOf(t)
    o > -1 && (e.splice(o, 1), s())
  }
  return !n && ir() && To(r), r
}
function ut(e, ...t) {
  e.slice().forEach((n) => {
    n(...t)
  })
}
function zn(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, s) => e.set(s, n))
  e instanceof Set && t instanceof Set && t.forEach(e.add, e)
  for (const n in t) {
    if (!t.hasOwnProperty(n)) {
      continue
    }
    const s = t[n],
      r = e[n]
    Kn(r) && Kn(s) && e.hasOwnProperty(n) && !q(s) && !je(s)
      ? (e[n] = zn(r, s))
      : (e[n] = s)
  }
  return e
}
const ql = Symbol()
function Zl(e) {
  return !Kn(e) || !e.hasOwnProperty(ql)
}
const { assign: Ke } = Object
function Jl(e) {
  return !!(q(e) && e.effect)
}
function Yl(e, t, n, s) {
  const { state: r, actions: o, getters: i } = t,
    l = n.state.value[e]
  let f
  function a() {
    l || (n.state.value[e] = r ? r() : {})
    const h = ii(n.state.value[e])
    return Ke(
      h,
      o,
      Object.keys(i || {}).reduce(
        (m, x) => (
          (m[x] = mt(
            Yr(() => {
              bn(n)
              const E = n._s.get(e)
              return i[x].call(E, E)
            })
          )),
          m
        ),
        {}
      )
    )
  }
  return (
    (f = no(e, a, t, n, s, true)),
    (f.$reset = function () {
      const m = r ? r() : {}
      this.$patch((x) => {
        Ke(x, m)
      })
    }),
    f
  )
}
function no(e, t, n = {}, s, r, o) {
  let i
  const l = Ke({ actions: {} }, n)
  let a,
    h,
    m = mt([]),
    x = mt([]),
    E
  const R = s.state.value[e]
  !o && !R && (s.state.value[e] = {})
  Me({})
  let T
  function Z(B) {
    let S
    a = h = false
    typeof B == 'function'
      ? (B(s.state.value[e]),
        (S = {
          type: Tt.patchFunction,
          storeId: e,
          events: E,
        }))
      : (zn(s.state.value[e], B),
        (S = {
          type: Tt.patchObject,
          payload: B,
          storeId: e,
          events: E,
        }))
    const k = (T = Symbol())
    Er().then(() => {
      T === k && (a = true)
    })
    h = true
    ut(m, S, s.state.value[e])
  }
  const j = to
  function ce() {
    i.stop()
    m = []
    x = []
    s._s.delete(e)
  }
  function A(B, S) {
    return function () {
      bn(s)
      const k = Array.from(arguments),
        H = [],
        G = []
      function _e(oe) {
        H.push(oe)
      }
      function xe(oe) {
        G.push(oe)
      }
      ut(x, {
        args: k,
        name: B,
        store: U,
        after: _e,
        onError: xe,
      })
      let ve
      try {
        ve = S.apply(this && this.$id === e ? this : U, k)
      } catch (oe) {
        throw (ut(G, oe), oe)
      }
      return ve instanceof Promise
        ? ve
            .then((oe) => (ut(H, oe), oe))
            .catch((oe) => (ut(G, oe), Promise.reject(oe)))
        : (ut(H, ve), ve)
    }
  }
  const X = {
      _p: s,
      $id: e,
      $onAction: qs.bind(null, x),
      $patch: Z,
      $reset: j,
      $subscribe(B, S = {}) {
        const k = qs(m, B, S.detached, () => H()),
          H = i.run(() =>
            Xt(
              () => s.state.value[e],
              (G) => {
                ;(S.flush === 'sync' ? h : a) &&
                  B(
                    {
                      storeId: e,
                      type: Tt.direct,
                      events: E,
                    },
                    G
                  )
              },
              Ke({}, f, S)
            )
          )
        return k
      },
      $dispose: ce,
    },
    U = fn(X)
  s._s.set(e, U)
  const ge = s._e.run(() => ((i = or()), i.run(() => t())))
  for (const B in ge) {
    const S = ge[B]
    if ((q(S) && !Jl(S)) || je(S)) {
      o ||
        (R && Zl(S) && (q(S) ? (S.value = R[B]) : zn(S, R[B])),
        (s.state.value[e][B] = S))
    } else {
      if (typeof S == 'function') {
        const k = A(B, S)
        ge[B] = k
        l.actions[B] = S
      }
    }
  }
  return (
    Ke(U, ge),
    Ke(N(U), ge),
    Object.defineProperty(U, '$state', {
      get: () => s.state.value[e],
      set: (B) => {
        Z((S) => {
          Ke(S, B)
        })
      },
    }),
    s._p.forEach((B) => {
      Ke(
        U,
        i.run(() =>
          B({
            store: U,
            app: s._a,
            pinia: s,
            options: l,
          })
        )
      )
    }),
    R && o && n.hydrate && n.hydrate(U.$state, R),
    (a = true),
    (h = true),
    U
  )
}
function Ql(e, t, n) {
  let s, r
  const o = typeof t == 'function'
  typeof e == 'string' ? ((s = e), (r = o ? n : t)) : ((r = e), (s = e.id))
  function i(l, f) {
    const a = qr()
    return (
      (l = l || (a && Et(eo, null))),
      l && bn(l),
      (l = Gr),
      l._s.has(s) || (o ? no(s, t, r, l) : Yl(s, r, l)),
      l._s.get(s)
    )
  }
  return (i.$id = s), i
}
function wt(e) {
  {
    e = N(e)
    const t = {}
    for (const n in e) {
      const s = e[n]
      ;(q(s) || je(s)) && (t[n] = wr(e, n))
    }
    return t
  }
}
const Gl = (e, t) =>
    new Promise(function (n, s) {
      const r = new XMLHttpRequest()
      r.responseType = 'arraybuffer'
      r.onprogress = (o) => {
        if (o.lengthComputable) {
          const i = Math.round((o.loaded / o.total) * 100)
          t(i)
        }
      }
      r.onload = () => {
        const o = r.response
        n(o)
      }
      r.onerror = () => s()
      r.open('GET', e)
      r.send()
    }),
  ec = 'Engine downloaded!',
  tc = 'Module menu loaded as 1',
  nc = 'Module client loaded as 2',
  sc = 'Module server loaded as 3',
  so = 'Scripts downloaded!',
  rc = (e) => {
    switch (e) {
      case ec:
        return 20
      case tc:
        return 30
      case nc:
        return 50
      case sc:
        return 70
      case so:
        return 100
      default:
        return 0
    }
  }
var ro = false,
  oc = 'valve',
  Zs = 0
let oo = 0
var at
let io
var Wn
try {
  oo = Math.round(window.location.hash.substring(1))
} catch {}
function ic(e) {
  this.totalDependencies = Math.max(this.totalDependencies, e)
  e &&
    ee.setStatus(
      'Preparing... (' +
        (this.totalDependencies - e) +
        '/' +
        this.totalDependencies +
        ')'
    )
}
window.onerror = function (e) {
  if (
    (ro &&
      FS.syncfs(false, function (n) {
        ee.print('Saving IDBFS: ' + n)
      }),
    !(('' + e).indexOf('SimulateInfiniteLoop') > 0))
  ) {
    var t = 'Exception thrown: ' + e
    t = t.replace(/&/g, '&amp;')
    t = t.replace(/</g, '&lt;')
    t = t.replace(/>/g, '&gt;')
    t = t.replace(
      `
`,
      '<br>',
      'g'
    )
    ee.setStatus(t)
    ee.print('Exception thrown: ' + e)
  }
}
function Tn(e, t) {
  var n = t ? `/${t}` : '',
    s = BrowserFS.BFSRequire('buffer').Buffer
  at.mount(`/zip${n}`, new BrowserFS.FileSystem.ZipFS(s.from(e)))
  t && FS.mkdir(`/rodir${n}`)
  FS.mount(new BrowserFS.EmscriptenFS(), { root: `/zip${n}` }, `/rodir${n}`)
  ee.print(`Loaded zip data (${n})`)
}
function lc(e) {
  const t = window.FS
  t.mkdir('/rodir')
  t.mkdir('/xash')
  try {
    at = new BrowserFS.FileSystem.MountableFileSystem()
    BrowserFS.initialize(at)
  } catch (n) {
    at = void 0
    ee.print('Failed to initialize BrowserFS: ' + n)
  }
  e === 'IndexedDB' &&
    (t.mount(IDBFS, {}, '/xash'),
    t.syncfs(true, function (n) {
      n && ee.print('Loading IDBFS: ' + n)
    }),
    (ro = true))
  e === 'LocalStorage' &&
    at &&
    (at.mount('/ls', new BrowserFS.FileSystem.LocalStorage()),
    t.mount(new BrowserFS.EmscriptenFS(), { root: '/ls' }, '/xash'),
    ee.print('LocalStorage mounted'))
  t.chdir('/xash/')
}
function cc() {
  Wn = run
  ee.run = () => {}
  run = () => {}
  ee.setStatus('Engine downloaded!')
  window.ENV.XASH3D_GAMEDIR = oc
  window.ENV.XASH3D_RODIR = '/rodir'
  uc()
}
function fc(e) {
  var t = document.createElement('script')
  t.src = `xash.js`
  document.body.appendChild(t)
}
function uc() {
  function e(t) {
    var n = document.createElement('script')
    n.onload = function () {
      Zs++
      Zs == 3 && ee.setStatus('Scripts downloaded!')
    }
    document.body.appendChild(n)
    n.src = `/${t}.js`
  }
  e('server')
  e('client')
  e('menu')
}
var ee = {
  TOTAL_MEMORY: oo * 1024 * 1024,
  preRun: [],
  postRun: [],
  print: console.log,
  printErr: console.error,
  setStatus: console.info,
  totalDependencies: 0,
  monitorRunDependencies: ic,
  preInit: [cc],
  websocket: [],
}
function ac(e) {
  if (((io = e), !e.canvas)) {
    return console.error('No canvas element provided')
  }
  ee.canvas = e.canvas
  e.setStatus && (ee.setStatus = e.setStatus)
  ee.setStatus('Downloading...')
  ee.memoryInitializerPrefixURL = e.location + '/'
  fc()
}
function dc(e) {
  console.log('Starting with params: ' + JSON.stringify(e))
  lc(e.filesystem)
  let t = []
  if (
    (e.mod && (t.push('-game'), t.push(e.mod)),
    e.map && (t.push('+map'), t.push(e.map)),
    (ee.arguments = [...t, ...e.args]),
    (ee.run = run = Wn),
    e.zip)
  ) {
    Tn(e.zip)
  } else {
    if (e.zipValve) {
      Tn(e.zipValve, 'valve')
      e.zipMod && Tn(e.zipMod, e.mod)
    } else {
      throw new Error('No .zip of game files provided')
    }
  }
  Wn()
  e.fullscreen && ee.requestFullscreen(true, false)
}
window.Module = ee
const lo = ['+hud_scale', '2.5', '+volume', '0.5'],
  hc = [
    '-height',
    `${window.innerHeight}`,
    '-width',
    `${window.innerWidth}`,
    ...lo,
  ],
  pc = [
    '-height',
    `${window.outerHeight}`,
    '-width',
    `${window.outerWidth}`,
    ...lo,
  ],
  it = Ql('xash', () => {
    const e = Me(150),
      t = Me(''),
      n = Me(true),
      s = Me(50),
      r = Me(true),
      o = Me(''),
      i = Me(false)
    return {
      memory: e,
      selectedGame: t,
      loading: n,
      loadingProgress: s,
      showXashSettingUI: r,
      launchOptions: o,
      fullScreen: i,
      downloadZip: async () => {
        if (t.value) {
          return (
            (s.value = 0),
            (n.value = true),
            await Gl(t.value, (h) => (s.value = h))
          )
        }
      },
      setStatus: (h) => {
        s.value = rc(h)
        h === so && (n.value = false)
        console.info(h)
      },
      startXash: (h) => {
        var E, R, T
        const m = i.value ? pc : hc,
          x = {
            mod:
              (T =
                (R = (E = t.value) == null ? void 0 : E.split) == null
                  ? void 0
                  : R.call(E, '.')) == null
                ? void 0
                : T[0],
            map: null,
            filesystem: 'RAM',
            fullscreen: i.value,
            zip: h,
            args: [...m, ...o.value.split(' ')],
          }
        dc(x)
        n.value = false
        r.value = false
      },
    }
  }),
  gc = [
    {
      name: 'HLDM (85M)',
      packageName: 'hldm.zip',
    },
    {
      name: 'Hazard Course (33M)',
      packageName: 'hc.zip',
    },
    {
      name: 'Uplink (45M)',
      packageName: 'uplink.zip',
    },
    {
      name: 'Day One (78M)',
      packageName: 'dayone.zip',
    },
  ],
  _c = {
    class: 'window',
    name: 'Games',
  },
  mc = { class: 'box inset' },
  bc = ['onClick'],
  yc = {
    __name: 'XashGames',
    setup(e) {
      const t = it(),
        { selectedGame: n } = wt(t)
      return (s, r) => (
        pe(),
        Ne('div', _c, [
          ne('div', mc, [
            (pe(true),
            Ne(
              Se,
              null,
              Ui(
                Te(gc),
                (o) => (
                  pe(),
                  Ne(
                    'p',
                    {
                      class: nn([
                        'menu-item',
                        { 'menu-item--selected': Te(n) === o.packageName },
                      ]),
                      key: o.name,
                      onClick: (i) => (n.value = o.packageName),
                    },
                    Qs(o.name),
                    11,
                    bc
                  )
                )
              ),
              128
            )),
          ]),
        ])
      )
    },
  },
  xc = () => {
    const e = document.getElementById('canvas')
    e && (e.className += ' loading')
  },
  vc = {
    class: 'window',
    name: 'Start',
  },
  wc = { class: 'box' },
  Sc = { class: 'options' },
  Cc = { for: 'fullscreen' },
  Ec = ['disabled'],
  Oc = is({
    __name: 'XashStart',
    setup(e) {
      const t = it(),
        { selectedGame: n, fullScreen: s } = wt(t),
        { downloadZip: r, startXash: o } = t,
        i = async () => {
          xc()
          const l = await r()
          if (!l) {
            alert('Selected game could not be loaded!')
            return
          }
          await o(l)
        }
      return (l, f) => (
        pe(),
        Ne('div', vc, [
          ne('div', wc, [
            ne('div', Sc, [
              ne('label', Cc, [
                Br(
                  ne(
                    'input',
                    {
                      'onUpdate:modelValue':
                        f[0] || (f[0] = (a) => (q(s) ? (s.value = a) : null)),
                      id: 'fullscreen',
                      name: 'fullscreen',
                      type: 'checkbox',
                    },
                    null,
                    512
                  ),
                  [[Dl, Te(s)]]
                ),
                as(' Fullscreen '),
              ]),
            ]),
            ne(
              'button',
              {
                class: 'start-button',
                onClick: i,
                disabled: !Te(n),
              },
              ' Start ',
              8,
              Ec
            ),
          ]),
        ])
      )
    },
  })
const lt = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, r] of t) n[s] = r
    return n
  },
  Ic = lt(Oc, [['__scopeId', 'data-v-cda649c9']])
const Tc = {
    class: 'half window xash-loading',
    name: 'Loading',
  },
  Fc = { class: 'xash-loading__container' },
  Pc = ['value'],
  Ac = {
    __name: 'XashLoading',
    setup(e) {
      const t = it(),
        { loadingProgress: n } = wt(t)
      return (s, r) => (
        pe(),
        Ne('div', Tc, [
          ne('div', Fc, [
            as(Qs(Te(n)) + '% ', 1),
            ne(
              'progress',
              {
                value: Te(n),
                max: '100',
              },
              null,
              8,
              Pc
            ),
          ]),
        ])
      )
    },
  },
  Mc = lt(Ac, [['__scopeId', 'data-v-9781e8c5']])
const Rc = {
    class: 'window',
    name: 'Launch Options',
  },
  Lc = { class: 'box' },
  Nc = {
    __name: 'XashLaunchOptions',
    setup(e) {
      const t = it(),
        { launchOptions: n } = wt(t)
      return (s, r) => (
        pe(),
        Ne('div', Rc, [
          ne('div', Lc, [
            Br(
              ne(
                'input',
                {
                  class: 'xash-launch-options',
                  type: 'text',
                  'onUpdate:modelValue':
                    r[0] || (r[0] = (o) => (q(n) ? (n.value = o) : null)),
                },
                null,
                512
              ),
              [[Hl, Te(n)]]
            ),
          ]),
        ])
      )
    },
  },
  $c = lt(Nc, [['__scopeId', 'data-v-775fd58d']])
const Bc = {},
  co = (e) => (_i('data-v-76fd90fb'), (e = e()), mi(), e),
  jc = { class: 'box attribution-box' },
  Hc = co(() =>
    ne('a', { href: 'https://github.com/x8BitRain/webXash/' }, 'GitHub', -1)
  ),
  Dc = co(() =>
    ne('a', { href: 'https://github.com/FWGS/xash3d-fwgs' }, 'Xash3D', -1)
  ),
  Uc = [Hc, Dc]
function kc(e, t) {
  return pe(), Ne('div', jc, Uc)
}
const Kc = lt(Bc, [
    ['render', kc],
    ['__scopeId', 'data-v-76fd90fb'],
  ]),
  zc = {
    class: 'window',
    name: 'Open ZIP',
  },
  Wc = { class: 'box' },
  Vc = is({
    __name: 'XashLoadZip',
    setup(e) {
      const t = it(),
        n = Me(null),
        { startXash: s } = t,
        r = async () => {
          var i
          ;(i = n.value) == null || i.click()
        },
        o = () => {
          var l, f
          const i = new FileReader()
          i.onload = () => {
            if (!i.result) {
              alert('Unable to load zip!')
              return
            }
            s == null || s(i.result)
          }
          i.readAsArrayBuffer(
            (f = (l = n.value) == null ? void 0 : l.files) == null
              ? void 0
              : f[0]
          )
        }
      return (i, l) => (
        pe(),
        Ne('div', zc, [
          ne('div', Wc, [
            ne(
              'button',
              {
                class: 'start-button',
                onClick: r,
              },
              'Open ZIP'
            ),
            ne(
              'input',
              {
                type: 'file',
                ref_key: 'zipSelector',
                ref: n,
                hidden: '',
                accept: '.zip',
                onChange: o,
              },
              null,
              544
            ),
          ]),
        ])
      )
    },
  })
const Xc = lt(Vc, [['__scopeId', 'data-v-24a591f3']])
const qc = { class: 'xash-settings' },
  Zc = { key: 0 },
  Jc = {
    __name: 'XashSettings',
    setup(e) {
      const t = it(),
        { loading: n } = wt(t)
      return (s, r) => (
        pe(),
        Ne('div', qc, [
          Te(n)
            ? Un('', true)
            : (pe(), Ne('div', Zc, [ue(yc), ue(Xc), ue($c), ue(Ic), ue(Kc)])),
          Te(n) ? (pe(), us(Mc, { key: 1 })) : Un('', true),
        ])
      )
    },
  },
  Yc = lt(Jc, [['__scopeId', 'data-v-0d42106a']]),
  Qc = is({
    __name: 'App',
    setup(e) {
      const t = it(),
        { showXashSettingUI: n } = wt(t),
        { setStatus: s } = t
      return (
        ls(() => {
          ac({
            canvas: document.getElementById('canvas') || null,
            location: '/',
            setStatus: s,
          })
        }),
        (r, o) => (Te(n) ? (pe(), us(Yc, { key: 0 })) : Un('', true))
      )
    },
  })
const Gc = lt(Qc, [['__scopeId', 'data-v-4efff960']])
const fo = zl(Gc)
fo.use(Xl())
fo.mount('#app')
