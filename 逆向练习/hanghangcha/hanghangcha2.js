var window = global;
(function (e) {
  function c(c) {
    for (
      var u, a, h = c[0], d = c[1], p = c[2], k = 0, r = [];
      k < h.length;
      k++
    )
      (a = h[k]),
        Object.prototype.hasOwnProperty.call(t, a) && t[a] && r.push(t[a][0]),
        (t[a] = 0);
    for (u in d) Object.prototype.hasOwnProperty.call(d, u) && (e[u] = d[u]);
    l && l(c);
    while (r.length) r.shift()();
    return f.push.apply(f, p || []), n();
  }
  function n() {
    for (var e, c = 0; c < f.length; c++) {
      for (var n = f[c], u = !0, a = 1; a < n.length; a++) {
        var h = n[a];
        0 !== t[h] && (u = !1);
      }
      u && (f.splice(c--, 1), (e = d((d.s = n[0]))));
    }
    return e;
  }
  var u = {},
    a = {
      app: 0,
    },
    t = {
      app: 0,
    },
    f = [];
  function h(e) {
    return (
      d.p +
      "js/" +
      ({
        "chunk-tinymce": "chunk-tinymce",
        "chunk-echarts": "chunk-echarts",
      }[e] || e) +
      ".1737709086033.js"
    );
  }
  function d(c) {
    if (u[c]) return u[c].exports;
    var n = (u[c] = {
      i: c,
      l: !1,
      exports: {},
    });
    console.log(`下一个模块是: ${c}`);
    
    return e[c].call(n.exports, n, n.exports, d), (n.l = !0), n.exports;
  }
  (d.e = function (e) {
    var c = [],
      n = {
        "chunk-04119264": 1,
        "chunk-079c429b": 1,
        "chunk-7b0ee4d6": 1,
        "chunk-a21ced54": 1,
        "chunk-ba6b3ffc": 1,
        "chunk-0df42666": 1,
        "chunk-08d1f114": 1,
        "chunk-11432e8a": 1,
        "chunk-1750a291": 1,
        "chunk-195722e9": 1,
        "chunk-1bff4b5f": 1,
        "chunk-234e3914": 1,
        "chunk-238d5182": 1,
        "chunk-2bf763c9": 1,
        "chunk-1ccfe871": 1,
        "chunk-277778b9": 1,
        "chunk-b0eb5f70": 1,
        "chunk-32bcb25a": 1,
        "chunk-549bf542": 1,
        "chunk-64073603": 1,
        "chunk-043558d2": 1,
        "chunk-0afda106": 1,
        "chunk-4ddc3090": 1,
        "chunk-340f9100": 1,
        "chunk-37e5db1c": 1,
        "chunk-39ba6540": 1,
        "chunk-43597266": 1,
        "chunk-43ad5da4": 1,
        "chunk-4b759e92": 1,
        "chunk-530ddf10": 1,
        "chunk-5d3d8577": 1,
        "chunk-5e1ef975": 1,
        "chunk-603f6e2a": 1,
        "chunk-61bd8b41": 1,
        "chunk-68789ccd": 1,
        "chunk-72be4605": 1,
        "chunk-78242a18": 1,
        "chunk-8683ef2a": 1,
        "chunk-0e046d58": 1,
        "chunk-1ac42c9e": 1,
        "chunk-443b455f": 1,
        "chunk-df486f2e": 1,
        "chunk-a8cc7738": 1,
        "chunk-21a6cbae": 1,
        "chunk-24d87c80": 1,
        "chunk-285ae472": 1,
        "chunk-29e8c510": 1,
        "chunk-6a018600": 1,
        "chunk-67c8df80": 1,
        "chunk-bb9e0c72": 1,
        "chunk-c0bef1d4": 1,
        "chunk-42bff343": 1,
        "chunk-436c05e7": 1,
        "chunk-01bac230": 1,
        "chunk-1d250540": 1,
        "chunk-30865a7f": 1,
        "chunk-421f45fe": 1,
        "chunk-50400e98": 1,
        "chunk-4631e697": 1,
        "chunk-48e26a32": 1,
        "chunk-3963f3ad": 1,
        "chunk-10ee87c9": 1,
        "chunk-1acb9a0b": 1,
        "chunk-1ba3a71a": 1,
        "chunk-240e0b24": 1,
        "chunk-3e7b6286": 1,
        "chunk-09a68863": 1,
        "chunk-077a60e1": 1,
        "chunk-eca18592": 1,
        "chunk-2a45e87a": 1,
        "chunk-3e92b88a": 1,
        "chunk-6d77c09e": 1,
        "chunk-6d3b6cdc": 1,
        "chunk-9212d460": 1,
        "chunk-309aa558": 1,
        "chunk-f8cc91b8": 1,
        "chunk-30f50e96": 1,
        "chunk-38d2fd8b": 1,
        "chunk-4402c2a8": 1,
        "chunk-4a9315a4": 1,
        "chunk-1496d6ee": 1,
        "chunk-6c097fe7": 1,
        "chunk-55e9a4c5": 1,
        "chunk-5f53eda5": 1,
        "chunk-867b0f6a": 1,
        "chunk-56367da6": 1,
        "chunk-9984e450": 1,
        "chunk-4b664934": 1,
        "chunk-4c854871": 1,
        "chunk-4c9e554a": 1,
        "chunk-4e18f77f": 1,
        "chunk-4f093d8e": 1,
        "chunk-4f983bb0": 1,
        "chunk-533df999": 1,
        "chunk-57e8280f": 1,
        "chunk-01f90773": 1,
        "chunk-102ce998": 1,
        "chunk-7ace27ae": 1,
        "chunk-5eecad5c": 1,
        "chunk-6f2bac4c": 1,
        "chunk-70e371e3": 1,
        "chunk-04d0e326": 1,
        "chunk-2f50cb72": 1,
        "chunk-79c726dc": 1,
        "chunk-10a354d5": 1,
        "chunk-7c171454": 1,
        "chunk-ae39c31e": 1,
        "chunk-d16f64d2": 1,
        "chunk-d1808256": 1,
        "chunk-df30eec4": 1,
        "chunk-e422a7ac": 1,
        "chunk-ef8d6552": 1,
        "chunk-3a6c9546": 1,
        "chunk-4fca1143": 1,
        "chunk-67c77cb6": 1,
        "chunk-9875f5ec": 1,
        "chunk-6c05664c": 1,
        "chunk-8d2ecdd6": 1,
        "chunk-2d99989d": 1,
        "chunk-bd438c86": 1,
        "chunk-14686473": 1,
        "chunk-a2e3fd24": 1,
        "chunk-b2439080": 1,
        "chunk-82e49a66": 1,
        "chunk-457c2eb4": 1,
        "chunk-ed3a21be": 1,
        "chunk-f1eb5212": 1,
        "chunk-87f9e454": 1,
        "chunk-8fab131a": 1,
        "chunk-92614486": 1,
        "chunk-983bf66e": 1,
        "chunk-a420c0cc": 1,
        "chunk-124c3414": 1,
        "chunk-7c70939b": 1,
        "chunk-ba5ff702": 1,
        "chunk-71280992": 1,
        "chunk-bcafef74": 1,
        "chunk-d03221b8": 1,
        "chunk-e4ea3336": 1,
        "chunk-f6206eb8": 1,
        "chunk-3077ad74": 1,
        "chunk-ca7a483e": 1,
      };
    a[e]
      ? c.push(a[e])
      : 0 !== a[e] &&
        n[e] &&
        c.push(
          (a[e] = new Promise(function (c, n) {
            for (
              var u =
                  "css/" +
                  ({
                    "chunk-tinymce": "chunk-tinymce",
                    "chunk-echarts": "chunk-echarts",
                  }[e] || e) +
                  ".1737709086033.css",
                t = d.p + u,
                f = document.getElementsByTagName("link"),
                h = 0;
              h < f.length;
              h++
            ) {
              var p = f[h],
                k = p.getAttribute("data-href") || p.getAttribute("href");
              if ("stylesheet" === p.rel && (k === u || k === t)) return c();
            }
            var r = document.getElementsByTagName("style");
            for (h = 0; h < r.length; h++) {
              (p = r[h]), (k = p.getAttribute("data-href"));
              if (k === u || k === t) return c();
            }
            var l = document.createElement("link");
            (l.rel = "stylesheet"),
              (l.type = "text/css"),
              (l.onload = c),
              (l.onerror = function (c) {
                var u = (c && c.target && c.target.src) || t,
                  f = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + u + ")"
                  );
                (f.code = "CSS_CHUNK_LOAD_FAILED"),
                  (f.request = u),
                  delete a[e],
                  l.parentNode.removeChild(l),
                  n(f);
              }),
              (l.href = t);
            var o = document.getElementsByTagName("head")[0];
            o.appendChild(l);
          }).then(function () {
            a[e] = 0;
          }))
        );
    var u = t[e];
    if (0 !== u)
      if (u) c.push(u[2]);
      else {
        var f = new Promise(function (c, n) {
          u = t[e] = [c, n];
        });
        c.push((u[2] = f));
        var p,
          k = document.createElement("script");
        (k.charset = "utf-8"),
          (k.timeout = 120),
          d.nc && k.setAttribute("nonce", d.nc),
          (k.src = h(e));
        var r = new Error();
        p = function (c) {
          (k.onerror = k.onload = null), clearTimeout(l);
          var n = t[e];
          if (0 !== n) {
            if (n) {
              var u = c && ("load" === c.type ? "missing" : c.type),
                a = c && c.target && c.target.src;
              (r.message =
                "Loading chunk " + e + " failed.\n(" + u + ": " + a + ")"),
                (r.name = "ChunkLoadError"),
                (r.type = u),
                (r.request = a),
                n[1](r);
            }
            t[e] = void 0;
          }
        };
        var l = setTimeout(function () {
          p({
            type: "timeout",
            target: k,
          });
        }, 12e4);
        (k.onerror = k.onload = p), document.head.appendChild(k);
      }
    return Promise.all(c);
  }),
    (d.m = e),
    (d.c = u),
    (d.d = function (e, c, n) {
      d.o(e, c) ||
        Object.defineProperty(e, c, {
          enumerable: !0,
          get: n,
        });
    }),
    (d.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0,
        });
    }),
    (d.t = function (e, c) {
      if ((1 & c && (e = d(e)), 8 & c)) return e;
      if (4 & c && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (d.r(n),
        Object.defineProperty(n, "default", {
          enumerable: !0,
          value: e,
        }),
        2 & c && "string" != typeof e)
      )
        for (var u in e)
          d.d(
            n,
            u,
            function (c) {
              return e[c];
            }.bind(null, u)
          );
      return n;
    }),
    (d.n = function (e) {
      var c =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return d.d(c, "a", c), c;
    }),
    (d.o = function (e, c) {
      return Object.prototype.hasOwnProperty.call(e, c);
    }),
    (d.p = "/"),
    (d.oe = function (e) {
      throw (console.error(e), e);
    });
  var p = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    k = p.push.bind(p);
  (p.push = c), (p = p.slice());
  for (var r = 0; r < p.length; r++) c(p[r]);
  var l = k;
  f.push([
    3,
    "default~app~748942c6",
    "default~app~f5fb4fe9",
    "default~app~fd7b36e3",
    "default~app~bd00be3d",
    "default~app~c703ebae",
    "default~app~1eb76925",
    "default~app~e3fe641f",
    "default~app~92dba14a",
    "default~app~7cd23e6e",
    "default~app~df3e6a35",
    "default~app~925edb7f",
    "default~app~7a21556b",
    "default~app~71c3fde4",
    "default~app~74323ea1",
    "default~app~5457f0f8",
    "default~app~e16a5e20",
    "default~app~1b3d7245",
    "default~app~8a5ed85a",
    "default~app~03b9f7c6",
    "default~app~53149c07",
    "default~app~47b58bfd",
    "default~app~07ed228c",
    "default~app~450cdd0b",
    "default~app~a6c11223",
    "default~app~b0bf20cc",
    "default~app~dc47b2ca",
    "default~app~c3e87ea2",
    "default~app~7007f42b",
    "default~app~1b1cbdc6",
    "default~app~dedbb77f",
    "default~app~380d4593",
    "default~app~2df767f4",
    "default~app~399d9d0d",
    "default~app~b8578adc",
    "default~app~d32499a1",
    "default~app~a544c2b6",
    "default~app~fd5f5330",
    "default~app~ca753f6e",
    "default~app~06837ae4",
    "default~app~4695c423",
    "default~app~bd29b02a",
    "default~app~63d7bb8b",
    "default~app~9fa6e2cd",
    "default~app~ef57e875",
    "default~app~32e83609",
    "default~app~9f34d74f",
    "default~app~51e98cd6",
    "default~app~c7a1907d",
    "default~app~988485ea",
    "default~app~912ca48d",
    "default~app~196395eb",
    "default~app~21833f8f",
    "default~app~c714bc7b",
  ]),
    n();
    window.nnn = d
})({
  7936: function (e, t, n) {
    "use strict";
    const o = n("3560");
    class r {
      static stringToArrayBufferInUtf8(e) {
        const t =
          "undefined" === typeof window
            ? n("49a5").TextEncoder
            : window.TextEncoder;
        let o = new t();
        return o.encode(e);
      }
      static utf8ArrayBufferToString(e) {
        const t =
          "undefined" === typeof window
            ? n("49a5").TextDecoder
            : window.TextDecoder;
        let o = new t("utf-8");
        return o.decode(e);
      }
      static arrayBufferToBase64(e) {
        return o.fromByteArray(e);
      }
      static base64ToArrayBuffer(e) {
        return o.toByteArray(e);
      }
    }
    e.exports = r;
  },
  3560: function(t, r, e) {
    "use strict";
    r.byteLength = a,
    r.toByteArray = l,
    r.fromByteArray = y;
    for (var n = [], i = [], o = "undefined" !== typeof Uint8Array ? Uint8Array : Array, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", f = 0, s = u.length; f < s; ++f)
        n[f] = u[f],
        i[u.charCodeAt(f)] = f;
    function h(t) {
        var r = t.length;
        if (r % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
        var e = t.indexOf("=");
        -1 === e && (e = r);
        var n = e === r ? 0 : 4 - e % 4;
        return [e, n]
    }
    function a(t) {
        var r = h(t)
          , e = r[0]
          , n = r[1];
        return 3 * (e + n) / 4 - n
    }
    function c(t, r, e) {
        return 3 * (r + e) / 4 - e
    }
    function l(t) {
        var r, e, n = h(t), u = n[0], f = n[1], s = new o(c(t, u, f)), a = 0, l = f > 0 ? u - 4 : u;
        for (e = 0; e < l; e += 4)
            r = i[t.charCodeAt(e)] << 18 | i[t.charCodeAt(e + 1)] << 12 | i[t.charCodeAt(e + 2)] << 6 | i[t.charCodeAt(e + 3)],
            s[a++] = r >> 16 & 255,
            s[a++] = r >> 8 & 255,
            s[a++] = 255 & r;
        return 2 === f && (r = i[t.charCodeAt(e)] << 2 | i[t.charCodeAt(e + 1)] >> 4,
        s[a++] = 255 & r),
        1 === f && (r = i[t.charCodeAt(e)] << 10 | i[t.charCodeAt(e + 1)] << 4 | i[t.charCodeAt(e + 2)] >> 2,
        s[a++] = r >> 8 & 255,
        s[a++] = 255 & r),
        s
    }
    function p(t) {
        return n[t >> 18 & 63] + n[t >> 12 & 63] + n[t >> 6 & 63] + n[63 & t]
    }
    function g(t, r, e) {
        for (var n, i = [], o = r; o < e; o += 3)
            n = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2]),
            i.push(p(n));
        return i.join("")
    }
    function y(t) {
        for (var r, e = t.length, i = e % 3, o = [], u = 16383, f = 0, s = e - i; f < s; f += u)
            o.push(g(t, f, f + u > s ? s : f + u));
        return 1 === i ? (r = t[e - 1],
        o.push(n[r >> 2] + n[r << 4 & 63] + "==")) : 2 === i && (r = (t[e - 2] << 8) + t[e - 1],
        o.push(n[r >> 10] + n[r >> 4 & 63] + n[r << 2 & 63] + "=")),
        o.join("")
    }
    i["-".charCodeAt(0)] = 62,
    i["_".charCodeAt(0)] = 63
},
});

const o = window.nnn("7936"),
  r = 16,
  i = Uint8Array.from([
    214, 144, 233, 254, 204, 225, 61, 183, 22, 182, 20, 194, 40, 251, 44, 5, 43,
    103, 154, 118, 42, 190, 4, 195, 170, 68, 19, 38, 73, 134, 6, 153, 156, 66,
    80, 244, 145, 239, 152, 122, 51, 84, 11, 67, 237, 207, 172, 98, 228, 179,
    28, 169, 201, 8, 232, 149, 128, 223, 148, 250, 117, 143, 63, 166, 71, 7,
    167, 252, 243, 115, 23, 186, 131, 89, 60, 25, 230, 133, 79, 168, 104, 107,
    129, 178, 113, 100, 218, 139, 248, 235, 15, 75, 112, 86, 157, 53, 30, 36,
    14, 94, 99, 88, 209, 162, 37, 34, 124, 59, 1, 33, 120, 135, 212, 0, 70, 87,
    159, 211, 39, 82, 76, 54, 2, 231, 160, 196, 200, 158, 234, 191, 138, 210,
    64, 199, 56, 181, 163, 247, 242, 206, 249, 97, 21, 161, 224, 174, 93, 164,
    155, 52, 26, 85, 173, 147, 50, 48, 245, 140, 177, 227, 29, 246, 226, 46,
    130, 102, 202, 96, 192, 41, 35, 171, 13, 83, 78, 111, 213, 219, 55, 69, 222,
    253, 142, 47, 3, 255, 106, 114, 109, 108, 91, 81, 141, 27, 175, 146, 187,
    221, 188, 127, 17, 217, 92, 65, 31, 16, 90, 216, 10, 193, 49, 136, 165, 205,
    123, 189, 45, 116, 208, 18, 184, 229, 180, 176, 137, 105, 151, 74, 12, 150,
    119, 126, 101, 185, 241, 9, 197, 110, 198, 132, 24, 240, 125, 236, 58, 220,
    77, 32, 121, 238, 95, 62, 215, 203, 57, 72,
  ]),
  s = Uint32Array.from([
    462357, 472066609, 943670861, 1415275113, 1886879365, 2358483617,
    2830087869, 3301692121, 3773296373, 4228057617, 404694573, 876298825,
    1347903077, 1819507329, 2291111581, 2762715833, 3234320085, 3705924337,
    4177462797, 337322537, 808926789, 1280531041, 1752135293, 2223739545,
    2695343797, 3166948049, 3638552301, 4110090761, 269950501, 741554753,
    1213159005, 1684763257,
  ]),
  a = Uint32Array.from([2746333894, 1453994832, 1736282519, 2993693404]);

class SM4Cryptor {
  constructor(e) {
    let t = o.stringToArrayBufferInUtf8(e.key);
    if (16 !== t.length) throw new Error("key should be a 16 bytes string");
    this.key = t;
    let n = new Uint8Array(0);
    if (
      void 0 !== e.iv &&
      null !== e.iv &&
      ((n = o.stringToArrayBufferInUtf8(e.iv)), 16 !== n.length)
    )
      throw new Error("iv should be a 16 bytes string");
    (this.iv = n),
      (this.mode = "cbc"),
      ["cbc", "ecb"].indexOf(e.mode) >= 0 && (this.mode = e.mode),
      (this.cipherType = "base64"),
      ["base64", "text"].indexOf(e.outType) >= 0 &&
        (this.cipherType = e.outType),
      (this.encryptRoundKeys = new Uint32Array(32)),
      this.spawnEncryptRoundKeys(),
      (this.decryptRoundKeys = Uint32Array.from(this.encryptRoundKeys)),
      this.decryptRoundKeys.reverse();
  }
  doBlockCrypt(e, t) {
    let n = new Uint32Array(36);
    n.set(e, 0);
    for (let r = 0; r < 32; r++)
      n[r + 4] = n[r] ^ this.tTransform1(n[r + 1] ^ n[r + 2] ^ n[r + 3] ^ t[r]);
    let o = new Uint32Array(4);
    return (o[0] = n[35]), (o[1] = n[34]), (o[2] = n[33]), (o[3] = n[32]), o;
  }
  spawnEncryptRoundKeys() {
    let e = new Uint32Array(4);
    (e[0] =
      (this.key[0] << 24) |
      (this.key[1] << 16) |
      (this.key[2] << 8) |
      this.key[3]),
      (e[1] =
        (this.key[4] << 24) |
        (this.key[5] << 16) |
        (this.key[6] << 8) |
        this.key[7]),
      (e[2] =
        (this.key[8] << 24) |
        (this.key[9] << 16) |
        (this.key[10] << 8) |
        this.key[11]),
      (e[3] =
        (this.key[12] << 24) |
        (this.key[13] << 16) |
        (this.key[14] << 8) |
        this.key[15]);
    let t = new Uint32Array(36);
    (t[0] = e[0] ^ a[0]),
      (t[1] = e[1] ^ a[1]),
      (t[2] = e[2] ^ a[2]),
      (t[3] = e[3] ^ a[3]);
    for (let n = 0; n < 32; n++)
      (t[n + 4] =
        t[n] ^ this.tTransform2(t[n + 1] ^ t[n + 2] ^ t[n + 3] ^ s[n])),
        (this.encryptRoundKeys[n] = t[n + 4]);
  }
  rotateLeft(e, t) {
    return (e << t) | (e >>> (32 - t));
  }
  linearTransform1(e) {
    return (
      e ^
      this.rotateLeft(e, 2) ^
      this.rotateLeft(e, 10) ^
      this.rotateLeft(e, 18) ^
      this.rotateLeft(e, 24)
    );
  }
  linearTransform2(e) {
    return e ^ this.rotateLeft(e, 13) ^ this.rotateLeft(e, 23);
  }
  tauTransform(e) {
    return (
      (i[(e >>> 24) & 255] << 24) |
      (i[(e >>> 16) & 255] << 16) |
      (i[(e >>> 8) & 255] << 8) |
      i[255 & e]
    );
  }
  tTransform1(e) {
    let t = this.tauTransform(e),
      n = this.linearTransform1(t);
    return n;
  }
  tTransform2(e) {
    let t = this.tauTransform(e),
      n = this.linearTransform2(t);
    return n;
  }
  padding(e) {
    if (null === e) return null;
    let t = r - (e.length % r),
      n = new Uint8Array(e.length + t);
    return n.set(e, 0), n.fill(t, e.length), n;
  }
  dePadding(e) {
    if (null === e) return null;
    let t = e[e.length - 1],
      n = e.slice(0, e.length - t);
    return n;
  }
  uint8ToUint32Block(e, t = 0) {
    let n = new Uint32Array(4);
    return (
      (n[0] = (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]),
      (n[1] = (e[t + 4] << 24) | (e[t + 5] << 16) | (e[t + 6] << 8) | e[t + 7]),
      (n[2] =
        (e[t + 8] << 24) | (e[t + 9] << 16) | (e[t + 10] << 8) | e[t + 11]),
      (n[3] =
        (e[t + 12] << 24) | (e[t + 13] << 16) | (e[t + 14] << 8) | e[t + 15]),
      n
    );
  }
  encrypt(e) {
    let t = o.stringToArrayBufferInUtf8(e),
      n = this.padding(t),
      i = n.length / r,
      s = new Uint8Array(n.length);
    if ("cbc" === this.mode) {
      if (null === this.iv || 16 !== this.iv.length)
        throw new Error("iv error");
      let e = this.uint8ToUint32Block(this.iv);
      for (let t = 0; t < i; t++) {
        let o = t * r,
          i = this.uint8ToUint32Block(n, o);
        (e[0] = e[0] ^ i[0]),
          (e[1] = e[1] ^ i[1]),
          (e[2] = e[2] ^ i[2]),
          (e[3] = e[3] ^ i[3]);
        let a = this.doBlockCrypt(e, this.encryptRoundKeys);
        e = a;
        for (let e = 0; e < r; e++)
          s[o + e] = (a[parseInt(e / 4)] >> (((3 - e) % 4) * 8)) & 255;
      }
    } else
      for (let o = 0; o < i; o++) {
        let e = o * r,
          t = this.uint8ToUint32Block(n, e),
          i = this.doBlockCrypt(t, this.encryptRoundKeys);
        for (let n = 0; n < r; n++)
          s[e + n] = (i[parseInt(n / 4)] >> (((3 - n) % 4) * 8)) & 255;
      }
    return "base64" === this.cipherType
      ? o.arrayBufferToBase64(s)
      : o.utf8ArrayBufferToString(s);
  }
  decrypt(e) {
    let t = new Uint8Array();
    t =
      "base64" === this.cipherType
        ? o.base64ToArrayBuffer(e)
        : o.stringToArrayBufferInUtf8(e);
    let n = t.length / r,
      i = new Uint8Array(t.length);
    if ("cbc" === this.mode) {
      if (null === this.iv || 16 !== this.iv.length)
        throw new Error("iv error");
      let e = this.uint8ToUint32Block(this.iv);
      for (let o = 0; o < n; o++) {
        let n = o * r,
          s = this.uint8ToUint32Block(t, n),
          a = this.doBlockCrypt(s, this.decryptRoundKeys),
          l = new Uint32Array(4);
        (l[0] = e[0] ^ a[0]),
          (l[1] = e[1] ^ a[1]),
          (l[2] = e[2] ^ a[2]),
          (l[3] = e[3] ^ a[3]),
          (e = s);
        for (let e = 0; e < r; e++)
          i[n + e] = (l[parseInt(e / 4)] >> (((3 - e) % 4) * 8)) & 255;
      }
    } else
      for (let o = 0; o < n; o++) {
        let e = o * r,
          n = this.uint8ToUint32Block(t, e),
          s = this.doBlockCrypt(n, this.decryptRoundKeys);
        for (let t = 0; t < r; t++)
          i[e + t] = (s[parseInt(t / 4)] >> (((3 - t) % 4) * 8)) & 255;
      }
    let s = this.dePadding(i);
    return o.utf8ArrayBufferToString(s);
  }
}

// 示例使用
const config = {
  key: "MbzgvXzBWynQrtpy", // 16字节
  mode: "cbc",
  iv: "kDrvPQfPIuArAzkF", // 16字节
  cipherType: "base64",
  // padding: "pkcs7", // 确保使用 PKCS7 填充
};

const cryptor = new SM4Cryptor(config);

try {
  const plainText = "Hello, SM4!";

  // 加密
  const encryptedData = cryptor.encrypt(plainText);
  console.log("Encrypted data:", encryptedData);

  // 解密
  const decryptedData = cryptor.decrypt(encryptedData);
  console.log("Decrypted data:", decryptedData.toString());
} catch (error) {
  console.error("Error:", error.message);
}
