window.__require = function e(t, n, c) {
    function o(a, r) {
        if (!n[a]) {
            if (!t[a]) {
                var s = a.split("/");
                if (s = s[s.length - 1],
                !t[s]) {
                    var l = "function" == typeof __require && __require;
                    if (!r && l)
                        return l(s, !0);
                    if (i)
                        return i(s, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
            }
            var u = n[a] = {
                exports: {}
            };
            t[a][0].call(u.exports, function(e) {
                return o(t[a][1][e] || e)
            }, u, u.exports, e, t, n, c)
        }
        return n[a].exports
    }
    for (var i = "function" == typeof __require && __require, a = 0; a < c.length; a++)
        o(c[a]);
    return o
}({
    LanguageData: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "61de062n4dJ7ZM9/Xdumozn", "LanguageData");
        var c = e("polyglot.min")
          , o = null;
        function i(e) {
            return window.i18n.languages[e]
        }
        function a(e) {
            e && (o ? o.replace(e) : o = new c({
                phrases: e,
                allowMissing: !0
            }))
        }
        window.i18n || (window.i18n = {
            languages: {},
            curLang: ""
        }),
        t.exports = {
            init: function(e) {
                if (e !== window.i18n.curLang) {
                    var t = i(e) || {};
                    window.i18n.curLang = e,
                    a(t),
                    this.inst = o
                }
            },
            t: function(e, t) {
                if (o)
                    return o.t(e, t)
            },
            inst: o,
            updateSceneRenderers: function() {
                for (var e = cc.director.getScene().children, t = [], n = 0; n < e.length; ++n) {
                    var c = e[n].getComponentsInChildren("LocalizedLabel");
                    Array.prototype.push.apply(t, c)
                }
                for (var o = 0; o < t.length; ++o) {
                    var i = t[o];
                    i.node.active && i.updateLabel()
                }
                for (var a = [], r = 0; r < e.length; ++r) {
                    var s = e[r].getComponentsInChildren("LocalizedSprite");
                    Array.prototype.push.apply(a, s)
                }
                for (var l = 0; l < a.length; ++l) {
                    var u = a[l];
                    u.node.active && u.updateSprite(window.i18n.curLang)
                }
            }
        },
        cc._RF.pop()
    }
    , {
        "polyglot.min": "polyglot.min"
    }],
    LocalizedLabel: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "744dcs4DCdNprNhG0xwq6FK", "LocalizedLabel");
        var c = e("LanguageData");
        cc.Class({
            extends: cc.Component,
            editor: {
                executeInEditMode: !0,
                menu: "i18n/LocalizedLabel"
            },
            properties: {
                dataID: {
                    get: function() {
                        return this._dataID
                    },
                    set: function(e) {
                        this._dataID !== e && (this._dataID = e,
                        this.updateLabel())
                    }
                },
                _dataID: ""
            },
            onLoad: function() {
                c.inst || c.init(),
                this.fetchRender()
            },
            fetchRender: function() {
                var e = this.getComponent(cc.Label);
                if (e)
                    return this.label = e,
                    void this.updateLabel()
            },
            updateLabel: function() {
                this.label ? c.t(this.dataID) && (this.label.string = c.t(this.dataID)) : cc.error("Failed to update localized label, label component is invalid!")
            }
        }),
        cc._RF.pop()
    }
    , {
        LanguageData: "LanguageData"
    }],
    LocalizedSprite: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f34ac2GGiVOBbG6XlfvgYP4", "LocalizedSprite");
        var c = e("SpriteFrameSet");
        cc.Class({
            extends: cc.Component,
            editor: {
                executeInEditMode: !0,
                inspector: "packages://i18n/inspector/localized-sprite.js",
                menu: "i18n/LocalizedSprite"
            },
            properties: {
                spriteFrameSet: {
                    default: [],
                    type: c
                }
            },
            onLoad: function() {
                this.fetchRender()
            },
            fetchRender: function() {
                var e = this.getComponent(cc.Sprite);
                if (e)
                    return this.sprite = e,
                    void this.updateSprite(window.i18n.curLang)
            },
            getSpriteFrameByLang: function(e) {
                for (var t = 0; t < this.spriteFrameSet.length; ++t)
                    if (this.spriteFrameSet[t].language === e)
                        return this.spriteFrameSet[t].spriteFrame
            },
            updateSprite: function(e) {
                if (this.sprite) {
                    var t = this.getSpriteFrameByLang(e);
                    !t && this.spriteFrameSet[0] && (t = this.spriteFrameSet[0].spriteFrame),
                    this.sprite.spriteFrame = t
                } else
                    cc.error("Failed to update localized sprite, sprite component is invalid!")
            }
        }),
        cc._RF.pop()
    }
    , {
        SpriteFrameSet: "SpriteFrameSet"
    }],
    SpriteFrameSet: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "97019Q80jpE2Yfz4zbuCZBq", "SpriteFrameSet");
        var c = cc.Class({
            name: "SpriteFrameSet",
            properties: {
                language: "",
                spriteFrame: cc.SpriteFrame
            }
        });
        t.exports = c,
        cc._RF.pop()
    }
    , {}],
    aotu: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "770799JJ4NJrZvpH8h8BTLv", "aotu"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
				//修改
               // cc.director.preloadScene("welcome");
				cc.director.loadScene("welcome");
            },
            start: function() {
				//修改
				//cc.director.loadScene("welcome");
               /* var e = 3;
                this.schedule(function() {
                    e < 1 && cc.director.loadScene("welcome"),
                    e -= 1
                }, 1)*/
            }
        }),
        cc._RF.pop()
    }
    , {}],
    bianjie: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ee5cbAulMRCrYvQq0865aI6", "bianjie"),
        cc.Class({
            extends: cc.Component,
            properties: {
                hengbianjie_up: {
                    default: null,
                    type: cc.Node
                },
                hengbianjie_down: {
                    default: null,
                    type: cc.Node
                },
                shubianjie_left: {
                    default: null,
                    type: cc.Node
                },
                shubianjie_right: {
                    default: null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                var e = cc.view.getVisibleSize();
                this.hengbianjie_up.setPosition(cc.v2(0, e.height / 2 + 15)),
                this.hengbianjie_down.setPosition(cc.v2(0, -e.height / 2 - 15)),
                this.shubianjie_left.setPosition(cc.v2(-(e.width / 2 + 15), 0)),
                this.shubianjie_right.setPosition(cc.v2(e.width / 2 + 15, 0))
            },
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    common: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3d6c3H7gKFBK6G9ODlIVyML", "common");
        t.exports = {
            Speed_X: 0,
            Speed_Y: 0,
            is_Success: 0,
            haoshi: 0,
            playTime: 0,
            num_door: 0,
            num_yinli: 0,
            lastest_door: 0,
            is_pengzhuang: 0,
            center_x: [],
            center_y: [],
            actions: "",
            avatarUrl: "",
            ppppp: 0
        },
        cc._RF.pop()
    }
    , {}],
    door: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "6247ezi/zdEwa9KBSxjOfi8", "door");
        t.exports = {
            guanqia: [{
                name_guanqia: "round 1 \u5f00\u59cb",
                player_location: [-320, 0],
                sun_location: [368, 0],
                playTime: 10,
                num_yinli: 1,
                array_bolck: []
            }, {
                name_guanqia: "round 2 \u6b63\u65b9\u5f62",
                player_location: [-240, 240],
                sun_location: [320, -240],
                playTime: 15,
                num_yinli: 2,
                array_bolck: [{
                    x: 0,
                    y: -75,
                    where: 0
                }, {
                    x: 0,
                    y: 75,
                    where: 0
                }, {
                    x: -75,
                    y: 0,
                    where: 90
                }, {
                    x: 75,
                    y: 0,
                    where: 90
                }]
            }, {
                name_guanqia: "round 3 \u6124\u6012",
                player_location: [0, 200],
                sun_location: [0, -218],
                playTime: 15,
                num_yinli: 2,
                array_bolck: [{
                    x: -244,
                    y: 131,
                    where: 32
                }, {
                    x: -161,
                    y: 81,
                    where: 32
                }, {
                    x: 226,
                    y: 121,
                    where: -32
                }, {
                    x: 157,
                    y: 77,
                    where: -32
                }, {
                    x: -72,
                    y: -145,
                    where: -32
                }, {
                    x: 60,
                    y: -145,
                    where: 32
                }]
            }, {
                name_guanqia: "round 4 \u5b57\u6bcd T",
                player_location: [-100, 150],
                sun_location: [100, 150],
                playTime: 15,
                num_yinli: 2,
                array_bolck: [{
                    x: 0,
                    y: -89,
                    where: 90
                }, {
                    x: 0,
                    y: 138,
                    where: 90
                }, {
                    x: 0,
                    y: 66,
                    where: 90
                }, {
                    x: 80,
                    y: 227,
                    where: 0
                }, {
                    x: 240,
                    y: 227,
                    where: 0
                }, {
                    x: -238,
                    y: 227,
                    where: 0
                }, {
                    x: -78,
                    y: 227,
                    where: 0
                }]
            }, {
                name_guanqia: "round 5 \u03c0",
                player_location: [-363, 195],
                sun_location: [198, -200],
                playTime: 15,
                num_yinli: 2,
                array_bolck: [{
                    x: -400,
                    y: 259,
                    where: 0
                }, {
                    x: -248,
                    y: 259,
                    where: 0
                }, {
                    x: -96,
                    y: 259,
                    where: 0
                }, {
                    x: 54,
                    y: 259,
                    where: 0
                }, {
                    x: 204,
                    y: 259,
                    where: 0
                }, {
                    x: 349,
                    y: 259,
                    where: 0
                }, {
                    x: 416,
                    y: 259,
                    where: 0
                }, {
                    x: -400,
                    y: 146,
                    where: 0
                }, {
                    x: -243,
                    y: 146,
                    where: 0
                }, {
                    x: 41,
                    y: 146,
                    where: 0
                }, {
                    x: 408,
                    y: 146,
                    where: 0
                }, {
                    x: 348,
                    y: 146,
                    where: 0
                }, {
                    x: -167,
                    y: 65,
                    where: 90
                }, {
                    x: -33,
                    y: 65,
                    where: 90
                }, {
                    x: 117.8,
                    y: 70.7,
                    where: 90
                }, {
                    x: 273,
                    y: 70.7,
                    where: 90
                }, {
                    x: 273,
                    y: -89,
                    where: 90
                }, {
                    x: 273,
                    y: -174,
                    where: 90
                }, {
                    x: 118,
                    y: -89,
                    where: 90
                }, {
                    x: 118,
                    y: -174,
                    where: 90
                }, {
                    x: -134,
                    y: -189,
                    where: 120
                }, {
                    x: -72,
                    y: -81,
                    where: 120
                }, {
                    x: -205.1,
                    y: -81,
                    where: 120
                }, {
                    x: -261,
                    y: -179,
                    where: 120
                }]
            }, {
                name_guanqia: "round 6 \u5173\u5361",
                player_location: [-214, -169],
                sun_location: [240, -138],
                playTime: 25,
                num_yinli: 4,
                array_bolck: [{
                    x: -80,
                    y: 185,
                    where: -90
                }, {
                    x: -80,
                    y: -73,
                    where: -90
                }, {
                    x: -80,
                    y: -172,
                    where: -90
                }, {
                    x: 88,
                    y: 172,
                    where: -90
                }, {
                    x: 88,
                    y: 102,
                    where: -90
                }, {
                    x: 88,
                    y: -172,
                    where: -90
                }]
            }, {
                name_guanqia: "round 7 \u4e00\u6761\u9c7c",
                player_location: [-175, -20],
                sun_location: [0, -20],
                playTime: 60,
                num_yinli: 7,
                array_bolck: [{
                    x: -232,
                    y: 54,
                    where: -34
                }, {
                    x: -156,
                    y: 105,
                    where: -34
                }, {
                    x: -66,
                    y: 166,
                    where: -34
                }, {
                    x: -228,
                    y: -107,
                    where: 34
                }, {
                    x: -153,
                    y: -157,
                    where: 34
                }, {
                    x: -88.3,
                    y: 74,
                    where: 90
                }, {
                    x: -88.3,
                    y: -125,
                    where: 90
                }, {
                    x: -20.8,
                    y: 105,
                    where: 34
                }, {
                    x: 54.1,
                    y: 54.5,
                    where: 34
                }, {
                    x: 180,
                    y: 56,
                    where: -34
                }, {
                    x: -73,
                    y: -211,
                    where: 34
                }, {
                    x: -20,
                    y: -156.3,
                    where: -34
                }, {
                    x: 53,
                    y: -107,
                    where: -34
                }, {
                    x: 180,
                    y: -106,
                    where: 34
                }]
            }, {
                name_guanqia: "round 8 \u53e6\u4e00\u6761\u9c7c",
                player_location: [0, -20],
                sun_location: [-175, -20],
                playTime: 60,
                num_yinli: 7,
                array_bolck: [{
                    x: -232,
                    y: 54,
                    where: -34
                }, {
                    x: -156,
                    y: 105,
                    where: -34
                }, {
                    x: -66,
                    y: 166,
                    where: -34
                }, {
                    x: -228,
                    y: -107,
                    where: 34
                }, {
                    x: -153,
                    y: -157,
                    where: 34
                }, {
                    x: -88.3,
                    y: 74,
                    where: 90
                }, {
                    x: -88.3,
                    y: -125,
                    where: 90
                }, {
                    x: -20.8,
                    y: 105,
                    where: 34
                }, {
                    x: 54.1,
                    y: 54.5,
                    where: 34
                }, {
                    x: 180,
                    y: 56,
                    where: -34
                }, {
                    x: -73,
                    y: -211,
                    where: 34
                }, {
                    x: -20,
                    y: -156.3,
                    where: -34
                }, {
                    x: 53,
                    y: -107,
                    where: -34
                }, {
                    x: 180,
                    y: -106,
                    where: 34
                }]
            }, {
                name_guanqia: "round 9 \u4e24\u5ba4\u4e00\u5385",
                player_location: [-281, 176],
                sun_location: [-281, -160],
                playTime: 30,
                num_yinli: 5,
                array_bolck: [{
                    x: 0,
                    y: 187,
                    where: 90
                }, {
                    x: 0,
                    y: -168,
                    where: 90
                }, {
                    x: 0,
                    y: 0,
                    where: 0
                }, {
                    x: -160.7000161,
                    y: 0,
                    where: 0
                }, {
                    x: -321.4000482,
                    y: 0,
                    where: 0
                }, {
                    x: -482.1000964,
                    y: 0,
                    where: 0
                }]
            }, {
                name_guanqia: "round 10 \u7b80\u5355\u5417?",
                player_location: [-287, 0],
                sun_location: [300, 0],
                playTime: 10,
                num_yinli: 1,
                array_bolck: [{
                    x: -211,
                    y: 179,
                    where: 45
                }, {
                    x: -47,
                    y: 15,
                    where: 45
                }, {
                    x: 99,
                    y: -131,
                    where: 45
                }, {
                    x: 160,
                    y: -192,
                    where: 45
                }]
            }, {
                name_guanqia: "round 11 Money",
                player_location: [-45, -53],
                sun_location: [77, -185],
                playTime: 25,
                num_yinli: 4,
                array_bolck: [{
                    x: -40,
                    y: 96,
                    where: 60
                }, {
                    x: 40,
                    y: 96,
                    where: -60
                }, {
                    x: 0,
                    y: -50,
                    where: 90
                }, {
                    x: 0,
                    y: -178.6,
                    where: 90
                }, {
                    x: 0,
                    y: 0,
                    where: 0
                }, {
                    x: 0,
                    y: -98,
                    where: 0
                }]
            }, {
                name_guanqia: "round 12 \u5b57\u6bcd W",
                player_location: [-298, 84],
                sun_location: [317, 84],
                playTime: 25,
                num_yinli: 5,
                array_bolck: [{
                    x: -170,
                    y: 188,
                    where: 90
                }, {
                    x: -170,
                    y: 27,
                    where: 90
                }, {
                    x: 0,
                    y: 0,
                    where: 90
                }, {
                    x: 0,
                    y: -156,
                    where: 90
                }, {
                    x: 170,
                    y: 188,
                    where: 90
                }, {
                    x: 170,
                    y: 27,
                    where: 90
                }]
            }, {
                name_guanqia: "round 13 \u5c0f\u4eba\u513f",
                player_location: [0, -148],
                sun_location: [0, 167],
                playTime: 25,
                num_yinli: 4,
                array_bolck: [{
                    x: 0,
                    y: 40,
                    where: 90
                }, {
                    x: -100,
                    y: 50,
                    where: 0
                }, {
                    x: 100,
                    y: 50,
                    where: 0
                }, {
                    x: -41,
                    y: -105,
                    where: -60
                }, {
                    x: 41,
                    y: -105,
                    where: 60
                }]
            }, {
                name_guanqia: "round 14 Letter H",
                player_location: [0, -100],
                sun_location: [0, 100],
                playTime: 25,
                num_yinli: 4,
                array_bolck: [{
                    x: 0,
                    y: 0,
                    where: 0
                }, {
                    x: -125,
                    y: 125,
                    where: 90
                }, {
                    x: -125,
                    y: 0,
                    where: 90
                }, {
                    x: -125,
                    y: -100,
                    where: 90
                }, {
                    x: 125,
                    y: 125,
                    where: 90
                }, {
                    x: 125,
                    y: 0,
                    where: 90
                }, {
                    x: 125,
                    y: -100,
                    where: 90
                }]
            }, {
                name_guanqia: "round 15  \u7ba1\u9053",
                player_location: [-216, 181],
                sun_location: [212, -152],
                playTime: 30,
                num_yinli: 4,
                array_bolck: [{
                    x: -212,
                    y: 240,
                    where: 0
                }, {
                    x: -212,
                    y: -221,
                    where: 0
                }, {
                    x: -61,
                    y: 40,
                    where: 0
                }, {
                    x: 56,
                    y: -37,
                    where: 0
                }, {
                    x: 209,
                    y: 240,
                    where: 0
                }, {
                    x: 209,
                    y: -221,
                    where: 0
                }, {
                    x: -287,
                    y: 165,
                    where: 90
                }, {
                    x: -136,
                    y: 165,
                    where: 90
                }, {
                    x: 132,
                    y: 165,
                    where: 90
                }, {
                    x: 286,
                    y: 165,
                    where: 90
                }, {
                    x: -287,
                    y: 8,
                    where: 90
                }, {
                    x: 286,
                    y: 8,
                    where: 90
                }, {
                    x: -287,
                    y: -146,
                    where: 90
                }, {
                    x: -136,
                    y: -146,
                    where: 90
                }, {
                    x: 132,
                    y: -146,
                    where: 90
                }, {
                    x: 286,
                    y: -146,
                    where: 90
                }]
            }, {
                name_guanqia: "round 16  \u534a\u4e2aZ",
                player_location: [-260, 173],
                sun_location: [190, -108],
                playTime: 25,
                num_yinli: 4,
                array_bolck: [{
                    x: -236,
                    y: 231,
                    where: 0
                }, {
                    x: -79,
                    y: 231,
                    where: 0
                }, {
                    x: 76,
                    y: 231,
                    where: 0
                }, {
                    x: 225,
                    y: 231,
                    where: 0
                }, {
                    x: -236,
                    y: 120,
                    where: 0
                }, {
                    x: -79,
                    y: 120,
                    where: 0
                }, {
                    x: 74,
                    y: 120,
                    where: 0
                }, {
                    x: -236,
                    y: -223,
                    where: 0
                }, {
                    x: -82,
                    y: -223,
                    where: 0
                }, {
                    x: 72,
                    y: -223,
                    where: 0
                }, {
                    x: 224,
                    y: -223,
                    where: 0
                }, {
                    x: -319,
                    y: 158,
                    where: 90
                }, {
                    x: -319,
                    y: 1,
                    where: 90
                }, {
                    x: -319,
                    y: -149,
                    where: 90
                }, {
                    x: 300,
                    y: 158,
                    where: 90
                }, {
                    x: 300,
                    y: 7,
                    where: 90
                }, {
                    x: 300,
                    y: -148,
                    where: 90
                }, {
                    x: 83,
                    y: 79,
                    where: -30
                }, {
                    x: -48,
                    y: 4,
                    where: -30
                }, {
                    x: 235,
                    y: 40,
                    where: -30
                }, {
                    x: 100,
                    y: -38,
                    where: -30
                }, {
                    x: 5,
                    y: -93,
                    where: -30
                }]
            }, {
                name_guanqia: "round 17  \u62fe\u9636\u800c\u4e0a",
                player_location: [119, -224],
                sun_location: [-265, 198],
                playTime: 25,
                num_yinli: 4,
                array_bolck: [{
                    x: -64,
                    y: 183,
                    where: 0
                }, {
                    x: 337,
                    y: 149,
                    where: 0
                }, {
                    x: -261,
                    y: 113,
                    where: 0
                }, {
                    x: 113,
                    y: 104,
                    where: 0
                }, {
                    x: -46,
                    y: 23,
                    where: 0
                }, {
                    x: -360,
                    y: -17,
                    where: 0
                }, {
                    x: 281,
                    y: -14,
                    where: 0
                }, {
                    x: -380,
                    y: -115,
                    where: 0
                }, {
                    x: 160,
                    y: -115,
                    where: 0
                }, {
                    x: -133,
                    y: -195,
                    where: 0
                }, {
                    x: 296,
                    y: -224,
                    where: 0
                }, {
                    x: -116,
                    y: -107,
                    where: 0
                }]
            }]
        },
        cc._RF.pop()
    }
    , {}],
    gameover: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "36d32eLIPVPgKEb3p+tJYNb", "gameover");
        var c = e("common");
        e("door");
        cc.Class({
            extends: cc.Component,
            properties: {
                label_tittle: {
                    default: null,
                    type: cc.Label
                },
                label_time: {
                    default: null,
                    type: cc.Label
                },
                label_leijitime: {
                    default: null,
                    type: cc.Label
                },
                backBtn: {
                    default: null,
                    type: cc.Node
                },
                continueBtn: {
                    default: null,
                    type: cc.Node
                },
                success: {
                    default: null,
                    type: cc.Node
                },
                defeat: {
                    default: null,
                    type: cc.Node
                },
                success_btn: {
                    default: null,
                    type: cc.Node
                },
                defeat_btn: {
                    default: null,
                    type: cc.Node
                },
                rank_btn: {
                    default: null,
                    type: cc.Node
                }
            },
            wxupdate: function() {
                // var e = c.num_door;
                // cc.sys.platform === cc.sys.WECHAT_GAME ? window.wx.postMessage({
                //     messageType: 3,
                //     MAIN_MENU_NUM: "x1",
                //     score: e
                // }) : cc.log("\u63d0\u4ea4\u5f97\u5206: x1 : " + e)
            },
            onLoad: function() {
                cc.director.preloadScene("main"),
                cc.director.preloadScene("success"),
                cc.director.preloadScene("welcome"),
                cc.director.preloadScene("rank"),
                this.label_tittle = cc.find("Canvas/tittle"),
                this.label_time = cc.find("Canvas/time"),
                this.label_leijitime = cc.find("Canvas/leijitime");
                var e = cc.scaleTo(.8, .9)
                  , t = cc.scaleTo(.8, 1)
                  , n = cc.sequence(e, t)
                  , o = cc.repeatForever(n);
                if (this.rank_btn.on("touchstart", function() {
					//埋点 排行榜
					//console.log("ranking");
					if(window.h5api){
						if (window.h5api.isLogin()) {
						 window.h5api.showRanking();
						} else if (confirm("登录后才能看到好友哦~")) {
							window.h5api.login(function (obj) { });
						}
					}
                 /*   cc.sys.platform === cc.sys.WECHAT_GAME ? window.wx.postMessage({
                        messageType: 1,
                        MAIN_MENU_NUM: "x1"
                    }) : cc.log("\u83b7\u53d6\u597d\u53cb\u6392\u884c\u699c\u6570\u636e\u3002x1"),
                    cc.director.loadScene("rank")*/
                }),
                this.backBtn.on("touchstart", function() {
                    cc.director.loadScene("welcome")
                }),
                this.continueBtn.on("touchstart", function() {
                    c.num_door < c.lastest_door ? cc.director.loadScene("main") : (c.num_door = 0,
                    cc.sys.platform === cc.sys.WECHAT_GAME && wx.setStorageSync("time", 0),
                    cc.director.loadScene("success"))
                }),
                this.success_btn.on("touchstart", function() {
					//埋点 分享
					//console.log("share");
					window.h5api && window.h5api.share();
                }),
                this.defeat_btn.on("touchstart", function() {
                    // cc.log("\u8f6c\u53d1");
                    // var e = c.num_door + 1;
                    // cc.sys.platform === cc.sys.WECHAT_GAME && wx.shareAppMessage({
                    //     title: "@\u6211 \u6211\u5361\u5728\u7b2c" + e + "\u5173\u4e86\uff0c\u5feb\u6765\u5e2e\u5e2e\u6211\u5427",
                    //     imageUrl: "https://www.ldfangqi.cn/yinlidanzhures/res/tupian/share.png",
                    //     success: function(e) {
                    //         console.log("\u8f6c\u53d1\u6210\u529f!!!"),
                    //         wx.showToast({
                    //             title: "\u8f6c\u53d1\u6210\u529f",
                    //             icon: "success"
                    //         }),
                    //         c.num_door++,
                    //         this.wxupdate()
                    //     },
                    //     fail: function(e) {
                    //         console.log("\u8f6c\u53d1\u5931\u8d25"),
                    //         wx.showToast({
                    //             title: "\u8f6c\u53d1\u5931\u8d25",
                    //             icon: "none"
                    //         })
                    //     }
                    // })
                }),
                0 == c.is_Success) {
                    if (this.success.active = !1,
                    this.defeat.active = !0,
                    this.success_btn.active = !1,
                    this.defeat_btn.active = !1,
                    this.defeat_btn.runAction(o),
                    this.label_tittle.getComponent(cc.Label).string = "\u5931\u8d25",
                    this.label_time.getComponent(cc.Label).string = c.haoshi + " s",
                    cc.sys.platform === cc.sys.WECHAT_GAME) {
                        var i = parseInt(wx.getStorageSync("time")) + c.haoshi;
                        this.label_leijitime.getComponent(cc.Label).string = +i + " s";
                        //wx.setStorageSync("time", i)
                    }
                } else if (this.success.active = !0,
                this.defeat.active = !1,
                this.success_btn.active = !0,
                this.defeat_btn.active = !1,
                this.success_btn.runAction(o),
                this.label_tittle.getComponent(cc.Label).string = "\u6210\u529f",
                this.label_time.getComponent(cc.Label).string = c.haoshi + " s",
                c.num_door++,
                this.wxupdate());
            //    if( cc.sys.platform === cc.sys.WECHAT_GAME) {
            //         var a = parseInt(wx.getStorageSync("time")) + c.haoshi;
            //         this.label_leijitime.getComponent(cc.Label).string = a + " s",
            //         wx.setStorageSync("time", a),
            //         c.num_door >= parseInt(wx.getStorageSync("level")) ? wx.setStorageSync("level", c.num_door) : 0 == c.ppppp && (c.num_door = parseInt(wx.getStorageSync("level")))
            //     }
            }
        }),
        cc._RF.pop()
    }
    , {
        common: "common",
        door: "door"
    }],
    heidong: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "0d629CAPwNN760sHFyzK942", "heidong");
        var c = e("common");
        cc.Class({
            extends: cc.Component,
            properties: {
                angle: 0,
                audio: {
                    default: null,
                    type: cc.AudioClip
                }
            },
            onLoad: function() {
                cc.director.getCollisionManager().enabled = !0,
                cc.director.getPhysicsManager().enabled = !0,
                cc.director.getPhysicsManager().gravity = cc.v2(),
                cc.director.preloadScene("gameover"),
                cc.director.preloadScene("success")
            },
            onBeginContact: function(e, t, n) {
                c.is_Success = 1,
                this.current = cc.audioEngine.play(this.audio, !1, .2),
                c.num_door < c.lastest_door ? cc.director.loadScene("gameover") : (c.num_door = 0,
                cc.director.loadScene("success"))
            },
            start: function() {},
            update: function(e) {
                this.angle = this.angle - 45,
                this.node.setRotation(this.angle * Math.PI / 180)
            }
        }),
        cc._RF.pop()
    }
    , {
        common: "common"
    }],
    main: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9c1b1GZMOhBN5Cpn/gKPIV3", "main");
        var c = e("common")
          , o = e("door");
        cc.Class({
            extends: cc.Component,
            properties: {
                player: {
                    default: null,
                    type: cc.Node
                },
                sun: {
                    default: null,
                    type: cc.Node
                },
                titleboard: {
                    default: null,
                    type: cc.Node
                },
                mianbanboard: {
                    default: null,
                    type: cc.Node
                },
                restart: {
                    default: null,
                    type: cc.Node
                },
                back: {
                    default: null,
                    type: cc.Node
                },
                zhengE: {
                    default: null,
                    type: cc.Prefab
                },
                timeLabe: {
                    default: null,
                    type: cc.Label
                },
                yinliLabe: {
                    default: null,
                    type: cc.Label
                },
                nameLabe: {
                    default: null,
                    type: cc.Label
                },
                block: {
                    default: null,
                    type: cc.Prefab
                },
                block1: {
                    default: null,
                    type: cc.Prefab
                },
                block2: {
                    default: null,
                    type: cc.Prefab
                },
                block3: {
                    default: null,
                    type: cc.Prefab
                },
                block4: {
                    default: null,
                    type: cc.Prefab
                },
                block5: {
                    default: null,
                    type: cc.Prefab
                },
                block6: {
                    default: null,
                    type: cc.Prefab
                },
                temp: 0
            },
            createnum: function() {
                return parseInt(6 * Math.random() + 1, 10)
            },
            initgame: function() {
                c.num_door >= c.lastest_door && cc.director.loadScene("success"),
                c.center_x = [],
                c.center_y = [],
                c.Speed_X = 0,
                c.Speed_Y = 0,
                c.is_Success = 0,
                c.haoshi = 0,
                c.playTime = o.guanqia[c.num_door].playTime,
                c.num_yinli = o.guanqia[c.num_door].num_yinli,
                this.temp = o.guanqia[c.num_door].num_yinli;
                var e = o.guanqia[c.num_door].array_bolck.length;
                this.player.setPosition(cc.v2(o.guanqia[c.num_door].player_location[0], o.guanqia[c.num_door].player_location[1])),
                this.sun.setPosition(cc.v2(o.guanqia[c.num_door].sun_location[0], o.guanqia[c.num_door].sun_location[1]));
                for (var t = 0; t < e; t++) {
                    var n = o.guanqia[c.num_door].array_bolck[t].x
                      , i = o.guanqia[c.num_door].array_bolck[t].y;
                    switch (this.createnum()) {
                    case 1:
                        this.Newblock = cc.instantiate(this.block1);
                        break;
                    case 2:
                        this.Newblock = cc.instantiate(this.block2);
                        break;
                    case 3:
                        this.Newblock = cc.instantiate(this.block3);
                        break;
                    case 4:
                        this.Newblock = cc.instantiate(this.block4);
                        break;
                    case 5:
                        this.Newblock = cc.instantiate(this.block5);
                        break;
                    case 6:
                        this.Newblock = cc.instantiate(this.block6);
                        break;
                    default:
                        this.Newblock = cc.instantiate(this.block)
                    }
                    this.node.addChild(this.Newblock),
                    this.Newblock.setPosition(cc.v2(n, i)),
                    this.Newblock.setRotation(o.guanqia[c.num_door].array_bolck[t].where)
                }
            },
            mean_array: function(e, t) {
                for (var n = 0, c = 0; c < e.length; c++)
                    n += e[c];
                return (n + t) / (e.length + 1)
            },
            setJumpAction: function(e, t, n, c) {
                var o = cc.v2(e, t).sub(cc.v2(n, c)).mag() / 150
                  , i = cc.moveTo(o, cc.v2(n, c)).easing(cc.easeQuadraticActionIn())
                  , a = cc.moveTo(o, cc.v2(n + n - e, c + c - t)).easing(cc.easeQuadraticActionOut())
                  , r = cc.moveTo(o, cc.v2(e, t)).easing(cc.easeQuadraticActionOut());
                return cc.repeatForever(cc.sequence(i, a, i, r))
            },
            onLoad: function() {
                this.timeLabe = cc.find("Canvas/mianban/timebiao/time"),
                this.yinliLabe = cc.find("Canvas/mianban/zhengE/yinli"),
                this.nameLabe = cc.find("Canvas/titleboard/name"),
                cc.director.preloadScene("gameover"),
                cc.director.preloadScene("success"),
                cc.director.preloadScene("welcome"),
                this.initgame();
                var e = cc.view.getVisibleSize();
                this.mianbanboard.setPosition(cc.v2(0, -e.height / 2 - 58)),
                this.yinliLabe.getComponent(cc.Label).string = ": " + c.num_yinli + " \u4e2a",
                this.titleboard.setPosition(cc.v2(0, e.height / 2 + 45)),
                this.nameLabe.getComponent(cc.Label).string = o.guanqia[c.num_door].name_guanqia,
                this.timeLabe.getComponent(cc.Label).string = ": " + c.playTime + " s",
                this.mianbanboard_Action = cc.moveTo(1, cc.v2(0, -e.height / 2)).easing(cc.easeCubicActionOut()),
                this.mianbanboard.runAction(this.mianbanboard_Action),
                this.titleboard_Action = cc.moveTo(1, cc.v2(0, e.height / 2)).easing(cc.easeCubicActionOut()),
                this.titleboard.runAction(this.titleboard_Action),
                this.node.on("touchstart", function(e) {
                    if (c.num_yinli > 0) {
                        var t = e.getCurrentTarget().convertToNodeSpaceAR(e.getLocation());
                        if (!this.sun.getBoundingBoxToWorld().contains(e.getLocation()) && !this.titleboard.getBoundingBoxToWorld().contains(e.getLocation()) && !this.mianbanboard.getBoundingBoxToWorld().contains(e.getLocation())) {
                            var n = cc.instantiate(this.zhengE);
                            this.node.addChild(n),
                            n.setPosition(cc.v2(t.x, t.y)),
                            c.center_x.push(t.x),
                            c.center_y.push(t.y),
                            c.num_yinli--,
                            this.yinliLabe.getComponent(cc.Label).string = ": " + c.num_yinli + " \u4e2a"
                        }
                    }
                }, this),
                this.ctx = this.node.getChildByName("tu").getComponent(cc.Graphics),
                this.ctx.clear(),
                this.restart.on("touchstart", function() {
                    cc.director.loadScene("main")
                }),
                this.back.on("touchstart", function() {
                    cc.director.loadScene("welcome")
                }),
                this.begin_x = this.player.x,
                this.begin_y = this.player.y;
				
				//修改 
				//时间按键
				var thisObj = this;
				var timebiao = cc.find("mianban/timebiao", this.node);
				timebiao.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, 1.02), cc.scaleTo(.5, 0.98))));
				
				//黑洞按钮
				var zhengE = cc.find("mianban/zhengE", this.node);
				zhengE.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, 1.02), cc.scaleTo(.5, 0.98))));
				
				//埋点 检查激励 
				this.TimerCheckAd = setInterval(function(){
					window.h5api && window.h5api.canPlayAd(function(data){
						var canPlay = data.canPlayAd;
						thisObj.CanPlayVideo = canPlay;
						if(!canPlay){
							timebiao.stopAllActions();
							zhengE.stopAllActions();
						}
					}.bind(this));
				}, 500);
				
				timebiao.on(cc.Node.EventType.TOUCH_START, function(event){
					//埋点 激励获得时间10s。 激励回调下面
					if(thisObj.CanPlayVideo){
						this.unschedule(this.timerFun);
						if(window.h5api && confirm("是否播放视频,获得相应奖励？")){
							window.h5api.playAd(function(obj){
								console.log('代码:' + obj.code + ',消息:' + obj.message);
								if (obj.code === 10000) {
									console.log('开始播放');
								} else if (obj.code === 10001) {
									c.playTime += 10;
									thisObj.timeLabe.getComponent(cc.Label).string = ": " + c.playTime + " s";
									this.schedule(this.timerFun, 1);
								} else {
									console.log('广告异常');
									this.schedule(this.timerFun, 1);
								}
							}.bind(this));
						}else{
							this.schedule(this.timerFun, 1);
						}
					}		
				}, this);
				zhengE.on(cc.Node.EventType.TOUCH_START, function(event){
					//埋点 激励获得黑洞1个  激励回调下面
					if(thisObj.CanPlayVideo){
						this.unschedule(this.timerFun);
						if(window.h5api && confirm("是否播放视频,获得相应奖励？")){
							window.h5api.playAd(function(obj){
								console.log('代码:' + obj.code + ',消息:' + obj.message);
								if (obj.code === 10000) {
									console.log('开始播放');
								} else if (obj.code === 10001) {
									c.num_yinli += 1;
									thisObj.yinliLabe.getComponent(cc.Label).string = ": " + c.num_yinli + " \u4e2a";
									 this.schedule(this.timerFun, 1);
								} else {
									console.log('广告异常');
									this.schedule(this.timerFun, 1);
								}
							}.bind(this));
						}else{
							this.schedule(this.timerFun, 1);
						}
					}
				}, this);
            },
            start: function() {
				//c.playTime = 9999;
                this.schedule(this.timerFun, 1);
            },
			timerFun:function(){
				c.playTime--,
                    c.haoshi++,
                    this.timeLabe.getComponent(cc.Label).string = ": " + c.playTime + " s",
                    c.playTime < 1 && (c.is_Success = 0,
                    cc.eventManager.removeListener(c.listener),
                    cc.director.loadScene("gameover"),
                    this.ctx.clear())
			},
			onDestroy:function(){
				clearInterval(this.TimerCheckAd);
			},
            update: function(e) {
                if (c.center_x.length > 0) {
                    var t = this.mean_array(c.center_x, this.player.x)
                      , n = this.mean_array(c.center_y, this.player.y);
                    cc.director.getPhysicsManager().gravity = cc.v2((t - this.player.x) / 2, (n - this.player.y) / 2)
                }
                this.ctx.moveTo(this.begin_x, this.begin_y),
                this.ctx.lineTo(this.player.x, this.player.y),
                this.begin_x = this.player.x,
                this.begin_y = this.player.y,
                this.ctx.stroke()
            }
        }),
        cc._RF.pop()
    }
    , {
        common: "common",
        door: "door"
    }],
    player: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c0c91B9kEJAm6NH0dmoTIv6", "player");
        e("common");
        cc.Class({
            extends: cc.Component,
            properties: {
                audio: {
                    default: null,
                    type: cc.AudioClip
                }
            },
            onBeginContact: function(e, t, n) {
                this.current = cc.audioEngine.play(this.audio, !1, .2)
            },
            onEndContact: function(e, t, n) {},
            onPreSolve: function(e, t, n) {},
            onPostSolve: function(e, t, n) {},
            onLoad: function() {},
            start: function() {},
            update: function(e) {}
        }),
        cc._RF.pop()
    }
    , {
        common: "common"
    }],
    "polyglot.min": [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e26fd9yy65A4q3/JkpVnFYg", "polyglot.min");
        var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        (function(e, o) {
            "function" == typeof define && define.amd ? define([], function() {
                return o(e)
            }) : "object" == (void 0 === n ? "undefined" : c(n)) ? t.exports = o(e) : e.Polyglot = o(e)
        }
        )(void 0, function(e) {
            function t(e) {
                e = e || {},
                this.phrases = {},
                this.extend(e.phrases || {}),
                this.currentLocale = e.locale || "en",
                this.allowMissing = !!e.allowMissing,
                this.warn = e.warn || l
            }
            function n(e) {
                var t, n, c, o = {};
                for (t in e)
                    if (e.hasOwnProperty(t))
                        for (c in n = e[t])
                            o[n[c]] = t;
                return o
            }
            function o(e) {
                return e.replace(/^\s+|\s+$/g, "")
            }
            function i(e, t, n) {
                var c, i;
                return null != n && e ? c = o((i = e.split(h))[r(t, n)] || i[0]) : c = e,
                c
            }
            function a(e) {
                var t = n(p);
                return t[e] || t.en
            }
            function r(e, t) {
                return d[a(e)](t)
            }
            function s(e, t) {
                for (var n in t)
                    "_" !== n && t.hasOwnProperty(n) && (e = e.replace(new RegExp("%\\{" + n + "\\}","g"), t[n]));
                return e
            }
            function l(t) {
                e.console && e.console.warn && e.console.warn("WARNING: " + t)
            }
            function u(e) {
                var t = {};
                for (var n in e)
                    t[n] = e[n];
                return t
            }
            t.VERSION = "0.4.3",
            t.prototype.locale = function(e) {
                return e && (this.currentLocale = e),
                this.currentLocale
            }
            ,
            t.prototype.extend = function(e, t) {
                var n;
                for (var o in e)
                    e.hasOwnProperty(o) && (n = e[o],
                    t && (o = t + "." + o),
                    "object" == (void 0 === n ? "undefined" : c(n)) ? this.extend(n, o) : this.phrases[o] = n)
            }
            ,
            t.prototype.clear = function() {
                this.phrases = {}
            }
            ,
            t.prototype.replace = function(e) {
                this.clear(),
                this.extend(e)
            }
            ,
            t.prototype.t = function(e, t) {
                var n, c;
                return "number" == typeof (t = null == t ? {} : t) && (t = {
                    smart_count: t
                }),
                "string" == typeof this.phrases[e] ? n = this.phrases[e] : "string" == typeof t._ ? n = t._ : this.allowMissing ? n = e : (this.warn('Missing translation for key: "' + e + '"'),
                c = e),
                "string" == typeof n && (t = u(t),
                c = s(c = i(n, this.currentLocale, t.smart_count), t)),
                c
            }
            ,
            t.prototype.has = function(e) {
                return e in this.phrases
            }
            ;
            var h = "||||"
              , d = {
                chinese: function(e) {
                    return 0
                },
                german: function(e) {
                    return 1 !== e ? 1 : 0
                },
                french: function(e) {
                    return e > 1 ? 1 : 0
                },
                russian: function(e) {
                    return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
                },
                czech: function(e) {
                    return 1 === e ? 0 : e >= 2 && e <= 4 ? 1 : 2
                },
                polish: function(e) {
                    return 1 === e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
                },
                icelandic: function(e) {
                    return e % 10 != 1 || e % 100 == 11 ? 1 : 0
                }
            }
              , p = {
                chinese: ["fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh"],
                german: ["da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv"],
                french: ["fr", "tl", "pt-br"],
                russian: ["hr", "ru"],
                czech: ["cs"],
                polish: ["pl"],
                icelandic: ["is"]
            };
            return t
        }),
        cc._RF.pop()
    }
    , {}],
    rankcaozuo: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d4c50X+Y1JAIJK0NMR6FrII", "rankcaozuo");
        var c = e("common");
        cc.Class({
            extends: cc.Component,
            properties: {
                backBtn: {
                    default: null,
                    type: cc.Node
                },
                continueBtn: {
                    default: null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                cc.director.preloadScene("main"),
                cc.director.preloadScene("welcome"),
                cc.director.preloadScene("success"),
                this.backBtn.on("touchstart", function() {
                    cc.director.loadScene("welcome")
                }),
                this.continueBtn.on("touchstart", function() {
                    c.num_door < c.lastest_door ? cc.director.loadScene("main") : cc.director.loadScene("success")
                })
            },
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {
        common: "common"
    }],
    rank: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ff367nC0jdGQ70otFG79rwa", "rank"),
        cc.Class({
            extends: cc.Component,
            properties: {
                display: cc.Sprite
            },
            start: function() {
                this.tex = new cc.Texture2D
            },
            _updateSubDomainCanvas: function() {
                if (this.tex) {
                    // if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                    //     var e = wx.getOpenDataContext().canvas;
                    //     this.tex.initWithElement(e)
                    // }
                    this.tex.handleLoadedTexture(),
                    this.display.spriteFrame = new cc.SpriteFrame(this.tex)
                }
            },
            update: function() {
                this._updateSubDomainCanvas()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    success_fire: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "131e5dc2GJK/ZnMVosVBuiD", "success_fire");
        var c = e("common");
        cc.Class({
            extends: cc.Component,
            properties: {
                backBtn: {
                    default: null,
                    type: cc.Node
                },
                coldstar: {
                    default: null,
                    type: cc.Node
                },
                angel: 0
            },
            onLoad: function() {
                cc.director.preloadScene("welcome"),
                this.node.on("touchstart", function() {
                    c.ppppp = 1,
                    cc.director.loadScene("welcome")
                })
            },
            start: function() {},
            update: function(e) {
                this.angel = this.angel + 60,
                this.coldstar.setRotation(this.angel * Math.PI / 180)
            }
        }),
        cc._RF.pop()
    }
    , {
        common: "common"
    }],
    teach: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "799f8kihq1LMb4SwGcllMOf", "teach");
        var c = e("common");
        e("door");
        cc.Class({
            extends: cc.Component,
            properties: {
                dialog_daojishi: {
                    default: null,
                    type: cc.Node
                },
                dialog_yinliqiu: {
                    default: null,
                    type: cc.Node
                },
                dialog_back: {
                    default: null,
                    type: cc.Node
                },
                dialog_location: {
                    default: null,
                    type: cc.Node
                },
                dialog_restart: {
                    default: null,
                    type: cc.Node
                },
                player: {
                    default: null,
                    type: cc.Node
                },
                sun: {
                    default: null,
                    type: cc.Node
                },
                zhengE: {
                    default: null,
                    type: cc.Prefab
                },
                skip: {
                    default: null,
                    type: cc.Node
                },
                gotogame: {
                    default: null,
                    type: cc.Node
                },
                titleboard: {
                    default: null,
                    type: cc.Node
                },
                mianbanboard: {
                    default: null,
                    type: cc.Node
                }
            },
            mean_array: function(e, t) {
                for (var n = 0, c = 0; c < e.length; c++)
                    n += e[c];
                return (n + t) / (e.length + 1)
            },
            onLoad: function() {
                cc.director.preloadScene("main"),
                cc.director.getCollisionManager().enabled = !0,
                cc.director.getPhysicsManager().enabled = !0,
                cc.director.getPhysicsManager().gravity = cc.v2(),
                this.btn = 0,
                c.center_x = [],
                c.center_y = [],
                this.gotogame.active = !1,
                this.dialog_daojishi.active = !1,
                this.dialog_yinliqiu.active = !1,
                this.dialog_restart.active = !1,
                this.dialog_back.active = !1,
                this.dialog_location.active = !1,
                this.sun.active = !1,
                this.node.on("touchstart", function(e) {
                    switch (this.btn) {
                    case 0:
                        this.dialog_daojishi.active = !0,
                        this.btn++;
                        break;
                    case 1:
                        this.dialog_daojishi.active = !1,
                        this.dialog_yinliqiu.active = !0,
                        this.btn++;
                        break;
                    case 2:
                        this.dialog_yinliqiu.active = !1,
                        this.dialog_restart.active = !0,
                        this.btn++;
                        break;
                    case 3:
                        this.dialog_restart.active = !1,
                        this.dialog_back.active = !0,
                        this.btn++;
                        break;
                    case 4:
                        this.dialog_back.active = !1,
                        this.dialog_location.active = !0,
                        this.btn++;
                        break;
                    case 5:
                        this.gotogame.active = !0,
                        this.dialog_location.active = !1;
                        var t = e.getCurrentTarget().convertToNodeSpaceAR(e.getLocation());
                        if (!this.sun.getBoundingBoxToWorld().contains(e.getLocation()) && !this.titleboard.getBoundingBoxToWorld().contains(e.getLocation()) && !this.mianbanboard.getBoundingBoxToWorld().contains(e.getLocation())) {
                            var n = cc.instantiate(this.zhengE);
                            this.node.addChild(n),
                            n.setPosition(cc.v2(t.x, t.y)),
                            c.center_x.push(t.x),
                            c.center_y.push(t.y);
                            break
                        }
                    }
                }, this),
                this.skip.on("touchstart", function() {
                    cc.director.loadScene("main")
                }),
                this.gotogame.on("touchstart", function() {
                    cc.director.loadScene("main")
                }),
                this.ctx = this.node.getChildByName("tu").getComponent(cc.Graphics),
                this.ctx.clear(),
                this.begin_x = this.player.x,
                this.begin_y = this.player.y
            },
            start: function() {},
            update: function(e) {
                if (c.center_x.length > 0) {
                    var t = this.mean_array(c.center_x, this.player.x)
                      , n = this.mean_array(c.center_y, this.player.y);
                    cc.director.getPhysicsManager().gravity = cc.v2(t - this.player.x, n - this.player.y)
                }
                this.ctx.moveTo(this.begin_x, this.begin_y),
                this.ctx.lineTo(this.player.x, this.player.y),
                this.begin_x = this.player.x,
                this.begin_y = this.player.y,
                this.ctx.stroke()
            }
        }),
        cc._RF.pop()
    }
    , {
        common: "common",
        door: "door"
    }],
    welcome: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "98ee4MSwktMzK+Tflm5Q997", "welcome");
        var c = e("common")
          , o = e("door");
        cc.Class({
            extends: cc.Component,
            properties: {
                startBtn: {
                    default: null,
                    type: cc.Node
                },
                rank_btn: {
                    default: null,
                    type: cc.Node
                },
                audio: {
                    default: null,
                    type: cc.AudioClip
                }
            },
            onLoad: function() {
                var e = 0;
                try {
                    if (cc.sys.platform === cc.sys.WECHAT_GAME)
                        wx.getStorageSync("level");
                    else
                        ;value ? c.num_door = 0 : (cc.sys.platform === cc.sys.WECHAT_GAME && (wx.setStorageSync("time", 0),
                    wx.setStorageSync("level", 0)),
                    e = 1,
                    c.num_door = 0)
                } catch (e) {}
                cc.director.preloadScene("main"),
                cc.director.preloadScene("rank"),
                cc.director.preloadScene("teach"),
                cc.audioEngine.stopAll(),
                this.current = cc.audioEngine.play(this.audio, !0, .2),
                c.lastest_door = o.guanqia.length,
                cc.sys.platform === cc.sys.WECHAT_GAME && (this.GameClubButton = wx.createGameClubButton({
                    icon: "green",
                    style: {
                        left: 0,
                        top: 100,
                        width: 40,
                        height: 40
                    }
                }),
                wx.showShareMenu(),
                wx.onShareAppMessage(function(e) {
                    
                    // return {
                    //     title: "@\u6211 \u8fd9\u4e2a\u5c0f\u6e38\u620f\u771f\u7684\u597d\u706b\uff01",
                    //     imageUrl: "https://www.ldfangqi.cn/yinlidanzhures/res/tupian/share.png",
                    //     success: function(e) {
                    //         console.log("\u8f6c\u53d1\u6210\u529f!!!"),
                    //         wx.showToast({
                    //             title: "\u8f6c\u53d1\u6210\u529f",
                    //             icon: "success"
                    //         })
                    //     },
                    //     fail: function(e) {
                    //         console.log("\u8f6c\u53d1\u5931\u8d25!!!"),
                    //         wx.showToast({
                    //             title: "\u8f6c\u53d1\u5931\u8d25",
                    //             icon: "none"
                    //         })
                    //     }
                    // }
                }));
                var t = cc.scaleTo(.8, .9)
                  , n = cc.scaleTo(.8, 1)
                  , i = cc.sequence(t, n)
                  , a = cc.repeatForever(i);
                this.startBtn.runAction(a),
                this.startBtn.on("touchstart", function() {
                    1 == e ? cc.director.loadScene("teach") : cc.director.loadScene("main")
                }),
                this.rank_btn.on("touchstart", function() {
                  /*  cc.sys.platform === cc.sys.WECHAT_GAME ? window.wx.postMessage({
                        messageType: 1,
                        MAIN_MENU_NUM: "x1"
                    }) : cc.log("\u83b7\u53d6\u597d\u53cb\u6392\u884c\u699c\u6570\u636e\u3002x1"),
                    cc.director.loadScene("rank")*/
					//埋点 排行榜
					//console.log("ranking");
					if(window.h5api){
						if (window.h5api.isLogin()) {
						 window.h5api.showRanking();
						} else if (confirm("登录后才能看到好友哦~")) {
							window.h5api.login(function (obj) { });
						}
					}
                });
				
				var recomNode = new cc.Node();
				recomNode.y = -(this.node.height/2) + 80;
				
				var lable = recomNode.addComponent(cc.Label);
				lable.string = "更多好玩";
				lable.fontSize = 50;
				lable.lineHeight = 50;
				var action = cc.sequence(cc.scaleTo(.5, 1.2), cc.scaleTo(.5, 0.9));
				action = cc.repeatForever(action);
				recomNode.runAction(action);
				recomNode.on(cc.Node.EventType.TOUCH_START, function(){
					//埋点 推荐更多好玩
					//console.log("more game");
					window.h5api && window.h5api.showRecommend();
				}, this);	
				this.node.addChild(recomNode);	
            },
            start: function() {},
            onDestroy: function() {
                this.GameClubButton && this.GameClubButton.destroy()
            }
        }),
        cc._RF.pop()
    }
    , {
        common: "common",
        door: "door"
    }],
    zhengE: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b3c2alvWnlHnZgaAQSeI93v", "zhengE");
        e("common");
        cc.Class({
            extends: cc.Component,
            properties: {
                player: {
                    default: null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                this.player = cc.find("Canvas/xiaoqiu")
            },
            start: function() {},
            whereinarray: function(e, t) {
                for (var n = 0; n < e.length; n++)
                    if (e[n] === t)
                        return n;
                return -1
            },
            update: function(e) {}
        }),
        cc._RF.pop()
    }
    , {
        common: "common"
    }]
}, {}, ["LanguageData", "LocalizedLabel", "LocalizedSprite", "SpriteFrameSet", "polyglot.min", "aotu", "bianjie", "common", "door", "gameover", "heidong", "main", "player", "rank", "rankcaozuo", "success_fire", "teach", "welcome", "zhengE"]);
