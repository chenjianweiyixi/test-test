/**
* Created by [object Object] on 2017/08/28.
* @fileoverview 不依赖基础库的交叉营销
* @author [object Object]
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@alife/crossmarket", [], factory);
	else if(typeof exports === 'object')
		exports["@alife/crossmarket"] = factory();
	else
		root["@alife/crossmarket"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(2);
	
	var Utils = _interopRequireWildcard(_utils);
	
	var _tpl = __webpack_require__(3);
	
	var Tpl = _interopRequireWildcard(_tpl);
	
	var _juicer = __webpack_require__(4);
	
	var _juicer2 = _interopRequireDefault(_juicer);
	
	var _dom = __webpack_require__(5);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _lazyload = __webpack_require__(6);
	
	var _lazyload2 = _interopRequireDefault(_lazyload);
	
	__webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// Polyfill
	if (typeof Object.assign != 'function') {
	    Object.assign = function (target) {
	        'use strict';
	
	        if (target == null) {
	            throw new TypeError('Cannot convert undefined or null to object');
	        }
	
	        target = Object(target);
	        for (var index = 1; index < arguments.length; index++) {
	            var source = arguments[index];
	            if (source != null) {
	                for (var key in source) {
	                    if (Object.prototype.hasOwnProperty.call(source, key)) {
	                        target[key] = source[key];
	                    }
	                }
	            }
	        }
	        return target;
	    };
	}
	if (!Array.prototype.includes) {
	    Array.prototype.includes = function (searchElement /*, fromIndex*/) {
	        'use strict';
	
	        if (this == null) {
	            throw new TypeError('Array.prototype.includes called on null or undefined');
	        }
	
	        var O = Object(this);
	        var len = parseInt(O.length, 10) || 0;
	        if (len === 0) {
	            return false;
	        }
	        var n = parseInt(arguments[1], 10) || 0;
	        var k = void 0;
	        if (n >= 0) {
	            k = n;
	        } else {
	            k = len + n;
	            if (k < 0) {
	                k = 0;
	            }
	        }
	        var currentElement = void 0;
	        while (k < len) {
	            currentElement = O[k];
	            if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
	                // NaN !== NaN
	                return true;
	            }
	            k++;
	        }
	        return false;
	    };
	}
	
	/***
	 * 接口定义：https://aone.alibaba-inc.com/project/587037/req/10238004
	 * @type {string}
	 */
	var MTOP_API = 'mtop.trip.walle.position.recommcontent.get';
	var ACTION_API = 'mtop.trip.walle.position.action.process';
	var BACKUP_IMG = {
	    // small: "//img.alicdn.com/tfs/TB1sFigQpXXXXbfXVXXXXXXXXXX-180-120.png",
	    small: "//gw.alicdn.com/tfs/TB1IE23SFXXXXXyXVXXXXXXXXXX-117-120.png",
	    middle: "//img.alicdn.com/tfs/TB1kCiMQpXXXXXMXXXXXXXXXXXX-226-226.png"
	};
	
	// TODO 老架构可能直接取不到Bridge, MTop
	var Bridge = void 0,
	    MTop = void 0;
	try {
	    if (window.base) {
	        Bridge = window.base.Bridge.Global;
	        MTop = window.base.MTop;
	    } else {}
	} catch (e) {}
	
	var defaultAttr = {
	    tplConfig: [],
	    params: {},
	    getRecommendData: false,
	    recommendData: null
	};
	
	var CrossMarket = function () {
	    /**
	     * @param opt.tplConfig         营销位模板配置
	     * @param opt.params            特殊业务参数配置,例如机票列表页出发地,目的地
	     * @param opt.getRecommendData  是否立刻获取数据；由于大部分业务线都是先请求数据，再渲染页面，插入接点还没有渲染；如果此种情况设置为false，如果需要立刻请求数据设置为true
	     */
	    function CrossMarket(opt) {
	        _classCallCheck(this, CrossMarket);
	
	        Object.assign(this, defaultAttr, opt);
	        Object.assign(this.params, {
	            clientSource: CrossMarket._getClientSource(),
	            clientPlatform: 'h5'
	        });
	
	        if (opt.complete && typeof opt.complete === "function") {
	            this.on("render-complete", function (data) {
	                opt.complete(data);
	            });
	        }
	
	        if (opt.error && typeof opt.error === "function") {
	            this.on("render-error", function (err) {
	                opt.error(err);
	            });
	        }
	    }
	
	    // 初始话交叉营销组件全局状态
	
	
	    _createClass(CrossMarket, [{
	        key: 'generatePage',
	
	
	        /**
	         * 获取交叉营销数据
	         */
	        value: function generatePage() {
	            var _this = this;
	
	            var config = CrossMarket._dealConfig({
	                tplConfig: this.tplConfig,
	                params: this.params,
	                recommendData: this.recommendData
	            });
	
	            if (!this.getRecommendData && config.recommendData && Object.keys(config.recommendData).length) {
	                this.dealActiveData(config, config.recommendData);
	                return;
	            }
	
	            if (!config.params.orderId) return;
	
	            var extraParams = {
	                needLogin: true,
	                useNative: true, //是否使用native发送mtop请求
	                taobao: false, //手淘客户端是否使用native发送mtop请求
	                tmall: false, //天猫客户端是否使用native发送mtop请求
	                alipay: false, //支付宝户端是否使用native发送mtop请求
	                issec: "1" //手淘、天猫、支付宝是否使用黑匣子：1使用；0不使用
	            };
	
	            var source = '';
	            if (Bridge.isTaobao) {
	                source = 'mtb';
	            } else if (Bridge.isAlipay) {
	                source = 'zfb';
	            } else if (Bridge.isAlitrip) {
	                source = 'trip';
	            }
	
	            MTop.request({
	                'api': MTOP_API,
	                'v': '1.0',
	                'params': extraParams,
	                'data': {
	                    resourceHolderNames: '[' + config.resourceHolderNames + ']',
	                    extraParams: JSON.stringify(config.params || {}),
	                    issec: "1", //去啊安全识别
	                    clientPlatform: 'h5',
	                    source: source
	                }
	            }).then(function (resp) {
	                _this.dealActiveData(config, resp.data);
	            }, function (resp) {
	                //统计被插入的模块信息
	                var showResourceInfo = { num: 0, resource: [] };
	                _this.fire('render-complete', { e: config, showResourceInfo: showResourceInfo });
	                _this.fire('render-error', resp);
	            });
	        }
	
	        /**
	         * 处理活动数据  + 渲染页面 + 发送曝光埋点 + 图片懒加载
	         * @param config
	         * @param data
	         */
	
	    }, {
	        key: 'dealActiveData',
	        value: function dealActiveData(config, data) {
	            var showResourceInfo = {
	                num: 0,
	                resource: []
	            };
	
	            config.tplConfig.forEach(function (item) {
	                var html = '',
	                    tplKey = '';
	
	                item.tpl.forEach(function (one) {
	                    //如果后端没有数据或模板，则直接返回
	                    if (!data[one] || !data[one].templateId) return;
	
	                    //获取资源位对应的html片段
	                    tplKey = data[one].templateId;
	                    var tplHtml = Tpl.mods[tplKey] || '';
	                    html += (0, _juicer2.default)(tplHtml, Object.assign({ resourceHolderName: one }, data[one]));
	
	                    showResourceInfo.resource.push(data[one]);
	                    showResourceInfo.num++;
	                });
	
	                CrossMarket._insertToPage((0, _dom2.default)(item.referenceNode), item.insertType, html);
	                var cmodMods = (0, _dom2.default)(item.referenceNode)[0] && (0, _dom2.default)(item.referenceNode)[0].getElementsByClassName("cmod-module-item") || [];
	
	                [].slice.call(cmodMods).forEach(function (node) {
	                    CrossMarket._recordGoldExposure(node);
	                    CrossMarket._exhibitNodes.push(node);
	                });
	            });
	
	            CrossMarket.checkImageError();
	            CrossMarket._lazyLoadImg('.cmod-goods-item img');
	            this.fire('render-complete', { e: config, showResourceInfo: showResourceInfo });
	        }
	    }, {
	        key: 'on',
	        value: function on(event, fn, scope) {
	            event = event.toLowerCase();
	            fn = fn || function () {};
	            scope = scope || null;
	            this.eventList = this.eventList || {};
	            this.eventList[event] = this.eventList[event] || [];
	            this.eventList[event.toLowerCase()].push({
	                fn: fn,
	                scope: scope
	            });
	        }
	    }, {
	        key: 'fire',
	        value: function fire() {
	            if (!this.eventList) {
	                return;
	            }
	            var args = Array.prototype.slice.call(arguments);
	            var event = args.shift().toLowerCase();
	            var fnList = this.eventList[event] || [];
	            fnList.forEach(function (fnItem) {
	                fnItem['fn'].apply(fnItem['scope'], args);
	            });
	        }
	    }], [{
	        key: '_initGlobalState',
	        value: function _initGlobalState() {
	            this._bindJuicerHandler();
	            this._bindEvent();
	        }
	
	        // 交叉营销调用入口函数
	
	    }, {
	        key: 'exhibit',
	        value: function exhibit(config) {
	            var instance = new CrossMarket(config);
	            instance.generatePage();
	
	            // 集团新的埋点方案
	            var q = window.goldlog_queue || (window.goldlog_queue = []);
	            q.push({
	                action: 'goldlog.setMetaInfo',
	                arguments: ['aplus-auto-exp', JSON.stringify([{
	                    logkey: "/tbtrip.crossmarket.marketingModule",
	                    tag: "div",
	                    filter: "data-cross-market",
	                    props: ["data-resource-holder", "data-template-id", "data-trackargs"]
	                }])]
	            });
	        }
	    }, {
	        key: 'goToLinK',
	        value: function goToLinK(target) {
	            var action = target.getAttribute('data-action');
	            var link = target.getAttribute('data-link');
	            link = link ? this._absoultePath(link) : "";
	            var page = this._absoultePath(target.getAttribute('data-page'));
	
	            var gotoPage = function gotoPage() {
	                // 判断是否为去啊客户端，且有native地址，则取native，如果没有去H5
	                // 若不是去啊客户端，则判断h5Url是否有值，有则跳转，无值则走默认流程
	                var isPage = /^(page):\/\/.?/.test(page);
	
	                if (Bridge.isAlitrip && page && isPage) {
	                    var pageName = page.replace(/\?.*$/i, '').match(/page\:\/\/(.*)/),
	                        params = page.replace(/^.*\?/i, '').match(/params\=(.*)$/);
	
	                    if (pageName) {
	                        pageName = pageName[1];
	                    }
	
	                    if (params) {
	                        try {
	                            params = JSON.parse(decodeURIComponent(params[1]));
	                        } catch (err) {
	                            params = null;
	                        }
	                    }
	
	                    Bridge.open(pageName, params || {}, function () {}, 0, 2);
	                } else if (link || page) {
	                    Bridge.goTo({
	                        href: link || page,
	                        triggerNode: target
	                    });
	                }
	            };
	
	            // 有action时要调用action接口，出发其它行为
	            if (action) {
	                this.handleActionRequest(action, gotoPage);
	            } else {
	                gotoPage();
	            }
	        }
	
	        /**
	         * 触发其它行为，如发红包利益
	         * @param param
	         * */
	
	    }, {
	        key: 'handleActionRequest',
	        value: function handleActionRequest(param, fn) {
	
	            var extraParams = {
	                useNative: true, //是否使用native发送mtop请求
	                taobao: false, //手淘客户端是否使用native发送mtop请求
	                tmall: false, //天猫客户端是否使用native发送mtop请求
	                alipay: false, //支付宝户端是否使用native发送mtop请求
	                issec: "1" //手淘、天猫、支付宝是否使用黑匣子：1使用；0不使用
	            };
	
	            MTop.request({
	                'api': ACTION_API,
	                'v': '1.0',
	                'params': extraParams,
	                'data': {
	                    actionParam: param,
	                    issec: "1", //去啊安全识别
	                    clientPlatform: 'h5'
	                }
	            }).then(function (resp) {
	                console.log('发奖成功');
	                fn && fn();
	            }, function (e) {
	                console.error(e.message);
	                fn && fn();
	            });
	        }
	
	        //黄金令箭打点
	
	    }, {
	        key: '_recordGoldExposure',
	        value: function _recordGoldExposure(node) {
	            // 若是已经曝光，则直接返回
	            if (node.exposed) return;
	
	            var viewHeight = window.innerHeight;
	            var resHolderName = node.getAttribute('data-resource-holder');
	            var templateId = node.getAttribute('data-template-id');
	            var trackArgs = void 0;
	
	            try {
	                trackArgs = JSON.parse(node.getAttribute('data-trackargs'));
	            } catch (e) {
	                console.log(e);
	            }
	
	            // 初始化页面后判断是否在可是区域内，在区域内算一次曝光，一个页面只会有一次曝光请求
	            if (viewHeight > node.getBoundingClientRect().top) {
	                node.exposed = true;
	                if (trackArgs) {
	                    // 曝光埋点
	                    // let goKey = `templateId=${templateId}&resourceHoldName=${resHolderName}${this.transfer2Params(trackArgs)}`;
	                    // window.goldlog && window.goldlog.record('/tbtrip.crossmarket.marketingModule','EXP',goKey,'H1510124625');
	                }
	            }
	        }
	    }, {
	        key: '_insertToPage',
	        value: function _insertToPage(referenceNode, insertType, html) {
	            if (!referenceNode) return;
	
	            var insertTypeArr = ['append', 'prepend', 'before', 'after'];
	
	            if (insertTypeArr.includes(insertType)) {
	                referenceNode[insertType](html);
	            }
	        }
	
	        // 图片懒加载
	
	    }, {
	        key: '_lazyLoadImg',
	        value: function _lazyLoadImg(selector) {
	            var CMLazyLoad = new LazyLoad({
	                nodes: selector, //懒加载节点
	                delay: 50, //延时检查，默认为30
	                margin: 15, //懒加载节点距离视窗边距，默认为15
	                preciseMode: true, //精确模式，元素必须在视窗内部，默认为false
	                autoDestroy: false, //所有懒加载完成之后自动销毁，默认为true
	                useAnim: false, //是否使用动画，for图片
	                loadBeforeScroll: false, //For ios6，touchstart时加载下一节点
	                speed: '0.5s', //动画transition时间
	                autoReload: false, //图片加载失败后reload
	                type: 'img', //懒加载类型,img
	                attr: 'lazysrc', //懒加载内容标签
	                imgSize: '60', //图片质量，对tps图片有效
	                weakSize: '30', //弱网图片质量
	                useWebp: true, //是否在支持的浏览器下启用webp
	                heightOnly: true, //只检查高度是否在视窗内，懒加载元素
	                enableDomainMerge: false
	            });
	        }
	    }, {
	        key: '_dealConfig',
	        value: function _dealConfig(config) {
	            var resourceHolderNames = [];
	
	            config.tplConfig.forEach(function (item) {
	                item.tpl.forEach(function (one) {
	                    resourceHolderNames.push('"' + one + '"');
	                });
	            });
	
	            // 解析OrderId. 兼容直传和URL解析两种模式
	            for (var key in config.params) {
	                if (key == 'orderId' || key == 'returnOrderId') {
	                    config.params[key] = this._dealOrderId(config.params[key]);
	                }
	            }
	
	            config.resourceHolderNames = resourceHolderNames.join(',');
	            return config;
	        }
	    }, {
	        key: '_dealOrderId',
	        value: function _dealOrderId(orderId) {
	            if (/^[0-9]*$/.test(orderId)) return orderId;
	            return Utils.getUrlParam(orderId, null, true);
	        }
	    }, {
	        key: 'checkImageError',
	        value: function checkImageError(data) {
	            var images = document.querySelectorAll('.J_crossMarketingImage');
	            if (images && images.length) {
	                [].slice.call(images).forEach(function (img) {
	                    img.addEventListener('error', function () {
	                        var backImg = img.getAttribute('data-backup');
	                        if (backImg) {
	                            img.setAttribute('src', BACKUP_IMG[backImg]);
	                        }
	                    });
	                });
	            }
	        }
	    }, {
	        key: '_absoultePath',
	        value: function _absoultePath(href) {
	            if (!href) return '';
	
	            var link = document.createElement('a');
	            link.href = href;
	            return link.protocol + '//' + link.host + link.pathname + link.search + link.hash;
	        }
	
	        // 获取客户端来源  1-客户端  2-淘宝  3-支付宝  4-其他H5  5-PC
	
	    }, {
	        key: '_getClientSource',
	        value: function _getClientSource() {
	            var ua = navigator.userAgent;
	            var isAlitrip = /AliTrip/i.test(ua),
	                isAlipay = /AlipayClient/i.test(ua),
	                isTaobao = /Aliapp\(TB/i.test(ua);
	
	            if (isAlitrip) return "1";
	            if (isTaobao) return "2";
	            if (isAlipay) return "3";
	            return "4";
	        }
	    }, {
	        key: '_bindJuicerHandler',
	        value: function _bindJuicerHandler() {
	            _juicer2.default.register("removeProtocol", function (src) {
	                return src ? src.replace(/^(http(s)?:\/\/)/g, '//') : "";
	            });
	
	            _juicer2.default.register('serialize', function (obj) {
	                return obj ? JSON.stringify(obj) : '';
	            });
	
	            //获取string中加粗信息,例如：“您获得{[20元]}红包”
	            _juicer2.default.register("getStrongWorld", function (src) {
	                return src.replace(/\{\[(.*)\]\}/g, function ($1, $2) {
	                    return '<span>' + $2 + '</span>';
	                });
	            });
	
	            // 交叉营销二期: 新增模版Subtitle解析
	            _juicer2.default.register('parseSubTitle', function (content, num) {
	                return content.split(/{\s*content\s*}/i)[Number(num)] || "";
	            });
	
	            // 交叉营销二期: price字符解析
	            _juicer2.default.register('parsePrice', function (price, num) {
	                var priceStrs = [];
	
	                if (/(￥|¥)/i.test(price)) {
	                    priceStrs.push("¥");
	                    priceStrs.push(price.replace("￥", "").replace("¥", ""));
	                } else {
	                    priceStrs.push(price);
	                }
	
	                return priceStrs[num] || "";
	            });
	
	            // Object转换为url params参数形式
	            _juicer2.default.register('transfer2Params', function (object) {
	                return CrossMarket.transfer2Params(object);
	            });
	        }
	
	        // Object转换为url params参数形式
	
	    }, {
	        key: 'transfer2Params',
	        value: function transfer2Params(object) {
	            var key = '';
	            try {
	                Object.keys(object).forEach(function (item) {
	                    key += '&' + item + '=' + encodeURIComponent(object[item]);
	                });
	            } catch (e) {
	                console.log(e);
	            }
	            return key;
	        }
	    }, {
	        key: '_bindEvent',
	        value: function _bindEvent() {
	            var _this2 = this;
	
	            // TODO 触发的最外层容器
	            [].slice.call(document.querySelectorAll('body>div')).forEach(function (item) {
	                item.addEventListener('click', function (e) {
	                    var target = e.target;
	                    var links = document.querySelectorAll('.J_crossMarketingLink');
	
	                    if (links && links.length) {
	                        [].slice.call(links).forEach(function (l) {
	                            if (target == l || l.contains(target)) {
	                                // 发送黄金令箭点击埋点
	                                var resHolderName = l.getAttribute('data-resource-holder');
	                                var templateId = l.getAttribute('data-template-id');
	                                var trackArgs = void 0;
	                                try {
	                                    trackArgs = JSON.parse(l.getAttribute('data-trackargs'));
	                                } catch (e) {
	                                    console.log(e);
	                                }
	                                var goKey = 'templateId=' + templateId + '&resourceHoldName=' + resHolderName + _this2.transfer2Params(trackArgs);
	                                window.goldlog && window.goldlog.record('/tbtrip.crossmarket.marketingModule', 'CLK', goKey, 'H1510124625');
	                                _this2.goToLinK(l);
	                            }
	                        });
	                    }
	                });
	            });
	
	            // 监听页面滚动，检测营销区块曝光状态
	            document.addEventListener('scroll', function (e) {
	                CrossMarket._exhibitNodes.forEach(function (node) {
	                    CrossMarket._recordGoldExposure(node); //曝光埋点
	                });
	            });
	        }
	    }]);
	
	    return CrossMarket;
	}();
	
	// 营销区块节点
	
	
	CrossMarket._exhibitNodes = [];
	// 区块露出偏移量
	CrossMarket.exposureOffset = 0;
	
	CrossMarket._initGlobalState();
	window.CrossMarket = CrossMarket;
	exports.default = CrossMarket;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getUrlParam = getUrlParam;
	exports.parseURL = parseURL;
	exports.isType = isType;
	exports.hasClass = hasClass;
	exports.addClass = addClass;
	exports.removeClass = removeClass;
	
	/** copy kissy.escapeHtml方法 **/
	var escapeReg = void 0,
	    htmlEntities = {
	    '&amp;': '&',
	    '&gt;': '>',
	    '&lt;': '<',
	    '&#x60;': '`',
	    '&#x2F;': '/',
	    '&quot;': '"',
	    '&#x27;': "'"
	},
	    reverseEntities = {};
	
	(function () {
	    for (var k in htmlEntities) {
	        reverseEntities[htmlEntities[k]] = k;
	    }
	})();
	
	function getEscapeReg() {
	    if (escapeReg) {
	        return escapeReg;
	    }
	    var str = '';
	
	    for (var k in htmlEntities) {
	        str += htmlEntities[k] + '|';
	    }
	    str = str.slice(0, -1);
	    escapeReg = new RegExp(str, 'g');
	    return escapeReg;
	}
	
	function escapeHtml(str) {
	    return (str + '').replace(getEscapeReg(), function (m) {
	        return reverseEntities[m];
	    });
	}
	/** copy end **/
	
	function getUrlParam(name, url, isEscape) {
	    url = url || window.location.href;
	    var params = parseURL(url, isEscape).params || {};
	    return params[name];
	}
	function parseURL(url, isEscape) {
	    var a = document.createElement('a');
	    a.href = url || window.location.href;
	
	    //处理params
	    var _params = a.search.replace(/^\?/, '').split('&'),
	        params = {};
	
	    for (var i = 0, len = _params.length; i < len; i++) {
	        var key = _params[i].split('=')[0];
	        var val = _params[i].split('=')[1] || '';
	        if (key) {
	            params[key] = isEscape ? escapeHtml(val) : val;
	        }
	    }
	
	    return {
	        origin: a.origin,
	        href: a.href,
	        host: a.host,
	        hostname: a.hostname,
	        port: a.port,
	        search: a.search,
	        params: params,
	        protocol: a.protocol.replace(':', ''),
	        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
	        hash: a.hash,
	        pathname: a.pathname, //.replace(/^([^\/])/, '/$1')
	        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
	        segments: a.pathname.replace(/^\//, '').split('/')
	    };
	}
	
	function isType(type) {
	    return function (obj) {
	        return {}.toString.call(obj) == '[object ' + type + ']';
	    };
	}
	
	function hasClass(el, name) {
	    var re = new RegExp("(^|\\s)" + name + "(\\s|$)");
	    return re.test(el.className);
	}
	
	function addClass(el, name) {
	
	    if (isType('NodeList')(el)) {
	        el = [].slice.call(el);
	    } else if (!isType('Array')(el)) {
	        el = [el];
	    }
	
	    el.forEach(function (e) {
	        if (!hasClass(e, name)) {
	            var newclass = e.className.split(' ');
	            newclass.push(name);
	            e.className = newclass.join(' ');
	        }
	    });
	}
	
	function removeClass(el, name) {
	    if (isType('NodeList')(el)) {
	        el = [].slice.call(el);
	    } else if (!isType('Array')(el)) {
	        el = [el];
	    }
	
	    el.forEach(function (e) {
	        if (hasClass(e, name)) {
	            var re = new RegExp("(^|\\s)" + name + "(\\s|$)", 'g');
	            e.className = e.className.replace(re, ' ');
	        }
	    });
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * @fileoverview H5CrossMarketing - tpl.
	 * @author 君木<junmu.cjw@alibaba-inc.com>.
	 */
	
	var mods = exports.mods = {
	    /** 交叉营销二期模板 start **/
	    crossMarketing_card_2: '{@if items && items.length > 0}' + '<div class="cmod-entrance" data-spm="cmv2c2">' + '{@if title}' + '<div class="cmod-entrance-title">${title}</div>' + '{@/if}' + '{@each items as item, index}' + '<div class="cmod-entrance-item J_crossMarketingLink cmod-module-item"  data-cross-market data-resource-holder="${resourceHolderName}" data-template-id="${templateId}" data-action="${item.actionParam}" data-link="${item.link}" data-trackargs="${item.trackArgs|serialize}" data-spm-click="gostr=/tbtrip;locaid=d0${index}">' + '<div class="cmod-entrance-left">' + '<img class="J_crossMarketingImage" data-backup="small" src="${item.picUrl | removeProtocol}"/>' + '<div class="cmod-entrance-desc">' + '<div class="cmod-entrance-item-title">${item.title}</div>' + '<div class="cmod-entrance-item-subtitle">' + '${item.subTitle}' + '</div>' + '</div>' + '</div>' + '<div class="cmod-entrance-benefit">${item.text}</div>' + '</div>' + '{@/each}' + '</div>' + '{@/if}',
	
	    crossMarketing_item_1: '{@if items && items.length > 0 }' + '<div class="cmod-goods cmod-module" data-spm="cmv2i1">' + '{@if title}' + '<div class="cmod-goods-title">${title}</div>' + '{@/if}' + '<div class="cmod-goods-items">' + '{@each items as item, index}' + '<div class="cmod-goods-item J_crossMarketingLink cmod-module-item" data-cross-market data-resource-holder="${resourceHolderName}" data-template-id="${templateId}" data-action="${item.actionParam}" data-link="${item.link}" data-trackargs="${item.trackArgs|serialize}" data-spm-click="gostr=/tbtrip;locaid=d0${index}" >' + '<div class="cmod-goods-item-content">' + '<img class="J_crossMarketingImage" data-backup="middle" lazysrc="${item.picUrl | removeProtocol}" src="//img.alicdn.com/tfs/TB1kCiMQpXXXXXMXXXXXXXXXXXX-226-226.png"/>' + '<div class="cmod-goods-mark">' + '<span>${item.location}</span>' + '{@if title}' + '<span class="cmod-goods-mark-sep">|</span>' + '{@/if}' + '<span>${item.text}</span>' + '</div>' + '{@if item.recommendReason}' + '<div class="cmod-goods-recommend"><div class="cmod-goods-recommend-content">${item.recommendReason}</div></div>' + '{@/if}' + '<div class="cmod-goods-item-title">${item.title}</div>' + '<div class="cmod-goods-item-tag">' + '<div class="cmod-goods-price"><span>${item.price | parsePrice, 0}</span><span class="cm-price-hignlight">${item.price | parsePrice, 1}</span></div>' + '<div class="cmod-goods-summary">${item.summary}</div>' + '</div>' + '</div>' + '</div>' + '{@/each}' + '</div>' + '</div>' + '{@/if}'
	    /** 交叉营销二期模板 end **/
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var juicer = function juicer() {
	    var args = [].slice.call(arguments);
	
	    args.push(juicer.options);
	
	    if (args[0].match(/^\s*#([\w:\-\.]+)\s*$/igm)) {
	        args[0].replace(/^\s*#([\w:\-\.]+)\s*$/igm, function ($, $id) {
	            var _document = document;
	            var elem = _document && _document.getElementById($id);
	            args[0] = elem ? elem.value || elem.innerHTML : $;
	        });
	    }
	
	    if (juicer.documentHTML) {
	        juicer.compile.call(juicer, juicer.documentHTML);
	        juicer.documentHTML = '';
	    }
	
	    if (arguments.length == 1) {
	        return juicer.compile.apply(juicer, args);
	    }
	
	    if (arguments.length >= 2) {
	        return juicer.to_html.apply(juicer, args);
	    }
	};
	
	var __escapehtml = {
	    escapehash: {
	        '<': '&lt;',
	        '>': '&gt;',
	        '&': '&amp;',
	        '"': '&quot;',
	        "'": '&#x27;',
	        '/': '&#x2f;'
	    },
	    escapereplace: function escapereplace(k) {
	        return __escapehtml.escapehash[k];
	    },
	    escaping: function escaping(str) {
	        return typeof str !== 'string' ? str : str.replace(/[&<>"']/igm, this.escapereplace);
	    },
	    detection: function detection(data) {
	        return typeof data === 'undefined' ? '' : data;
	    }
	};
	
	var __throw = function __throw(error) {
	    if (typeof console !== 'undefined') {
	        if (console.warn) {
	            console.warn(error);
	            return;
	        }
	
	        if (console.log) {
	            console.log(error);
	            return;
	        }
	    }
	
	    throw error;
	};
	
	var __creator = function __creator(o, proto) {
	    o = o !== Object(o) ? {} : o;
	
	    if (o.__proto__) {
	        o.__proto__ = proto;
	        return o;
	    }
	
	    var empty = function empty() {};
	    var n = Object.create ? Object.create(proto) : new (empty.prototype = proto, empty)();
	
	    for (var i in o) {
	        if (o.hasOwnProperty(i)) {
	            n[i] = o[i];
	        }
	    }
	
	    return n;
	};
	
	var annotate = function annotate(fn) {
	    var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
	    var FN_ARG_SPLIT = /,/;
	    var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
	    var FN_BODY = /^function[^{]+{([\s\S]*)}/m;
	    var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
	    var args = [],
	        fnText,
	        fnBody,
	        argDecl;
	
	    if (typeof fn === 'function') {
	        if (fn.length) {
	            fnText = fn.toString();
	        }
	    } else if (typeof fn === 'string') {
	        fnText = fn;
	    }
	
	    fnText = fnText.trim();
	    argDecl = fnText.match(FN_ARGS);
	    fnBody = fnText.match(FN_BODY)[1].trim();
	
	    for (var i = 0; i < argDecl[1].split(FN_ARG_SPLIT).length; i++) {
	        var arg = argDecl[1].split(FN_ARG_SPLIT)[i];
	        arg.replace(FN_ARG, function (all, underscore, name) {
	            args.push(name);
	        });
	    }
	
	    return [args, fnBody];
	};
	
	juicer.__cache = {};
	juicer.version = '0.6.14';
	juicer.settings = {};
	juicer.documentHTML = '';
	
	juicer.tags = {
	    operationOpen: '{@',
	    operationClose: '}',
	    interpolateOpen: '\\${',
	    interpolateClose: '}',
	    noneencodeOpen: '\\$\\${',
	    noneencodeClose: '}',
	    commentOpen: '\\{#',
	    commentClose: '\\}'
	};
	
	juicer.options = {
	    cache: true,
	    strip: true,
	    errorhandling: true,
	    detection: true,
	    _method: __creator({
	        __escapehtml: __escapehtml,
	        __throw: __throw,
	        __juicer: juicer
	    }, {})
	};
	
	juicer.tagInit = function () {
	    var forstart = juicer.tags.operationOpen + 'each\\s*([^}]*?)\\s*as\\s*(\\w*?)\\s*(,\\s*\\w*?)?' + juicer.tags.operationClose;
	    var forend = juicer.tags.operationOpen + '\\/each' + juicer.tags.operationClose;
	    var ifstart = juicer.tags.operationOpen + 'if\\s*([^}]*?)' + juicer.tags.operationClose;
	    var ifend = juicer.tags.operationOpen + '\\/if' + juicer.tags.operationClose;
	    var elsestart = juicer.tags.operationOpen + 'else' + juicer.tags.operationClose;
	    var elseifstart = juicer.tags.operationOpen + 'else if\\s*([^}]*?)' + juicer.tags.operationClose;
	    var interpolate = juicer.tags.interpolateOpen + '([\\s\\S]+?)' + juicer.tags.interpolateClose;
	    var noneencode = juicer.tags.noneencodeOpen + '([\\s\\S]+?)' + juicer.tags.noneencodeClose;
	    var inlinecomment = juicer.tags.commentOpen + '[^}]*?' + juicer.tags.commentClose;
	    var rangestart = juicer.tags.operationOpen + 'each\\s*(\\w*?)\\s*in\\s*range\\(([^}]+?)\\s*,\\s*([^}]+?)\\)' + juicer.tags.operationClose;
	    var include = juicer.tags.operationOpen + 'include\\s*([^}]*?)\\s*,\\s*([^}]*?)' + juicer.tags.operationClose;
	    var helperRegisterStart = juicer.tags.operationOpen + 'helper\\s*([^}]*?)\\s*' + juicer.tags.operationClose;
	    var helperRegisterBody = '([\\s\\S]*?)';
	    var helperRegisterEnd = juicer.tags.operationOpen + '\\/helper' + juicer.tags.operationClose;
	
	    juicer.settings.forstart = new RegExp(forstart, 'igm');
	    juicer.settings.forend = new RegExp(forend, 'igm');
	    juicer.settings.ifstart = new RegExp(ifstart, 'igm');
	    juicer.settings.ifend = new RegExp(ifend, 'igm');
	    juicer.settings.elsestart = new RegExp(elsestart, 'igm');
	    juicer.settings.elseifstart = new RegExp(elseifstart, 'igm');
	    juicer.settings.interpolate = new RegExp(interpolate, 'igm');
	    juicer.settings.noneencode = new RegExp(noneencode, 'igm');
	    juicer.settings.inlinecomment = new RegExp(inlinecomment, 'igm');
	    juicer.settings.rangestart = new RegExp(rangestart, 'igm');
	    juicer.settings.include = new RegExp(include, 'igm');
	    juicer.settings.helperRegister = new RegExp(helperRegisterStart + helperRegisterBody + helperRegisterEnd, 'igm');
	};
	
	juicer.tagInit();
	
	// Using this method to set the options by given conf-name and conf-value,
	// you can also provide more than one key-value pair wrapped by an object.
	// this interface also used to custom the template tag delimater, for this
	// situation, the conf-name must begin with tag::, for example: juicer.set
	// ('tag::operationOpen', '{@').
	
	juicer.set = function (conf, value) {
	    var that = this;
	
	    var escapePattern = function escapePattern(v) {
	        return v.replace(/[\$\(\)\[\]\+\^\{\}\?\*\|\.]/igm, function ($) {
	            return '\\' + $;
	        });
	    };
	
	    var set = function set(conf, value) {
	        var tag = conf.match(/^tag::(.*)$/i);
	
	        if (tag) {
	            that.tags[tag[1]] = escapePattern(value);
	            that.tagInit();
	            return;
	        }
	
	        that.options[conf] = value;
	    };
	
	    if (arguments.length === 2) {
	        set(conf, value);
	        return;
	    }
	
	    if (conf === Object(conf)) {
	        for (var i in conf) {
	            if (conf.hasOwnProperty(i)) {
	                set(i, conf[i]);
	            }
	        }
	    }
	};
	
	// Before you're using custom functions in your template like ${name | fnName},
	// you need to register this fn by juicer.register('fnName', fn).
	
	juicer.register = function (fname, fn) {
	    var _method = this.options._method;
	
	    if (_method.hasOwnProperty(fname)) {
	        return false;
	    }
	
	    return _method[fname] = fn;
	};
	
	// remove the registered function in the memory by the provided function name.
	// for example: juicer.unregister('fnName').
	
	juicer.unregister = function (fname) {
	    var _method = this.options._method;
	
	    if (_method.hasOwnProperty(fname)) {
	        return delete _method[fname];
	    }
	};
	
	juicer.template = function (options) {
	    var that = this;
	
	    this.options = options;
	
	    this.__interpolate = function (_name, _escape, options) {
	        var _define = _name.split('|'),
	            _fn = _define[0] || '',
	            _cluster;
	
	        if (_define.length > 1) {
	            _name = _define.shift();
	            _cluster = _define.shift().split(',');
	            _fn = '_method.' + _cluster.shift() + '.call({}, ' + [_name].concat(_cluster) + ')';
	        }
	
	        return '<%= ' + (_escape ? '_method.__escapehtml.escaping' : '') + '(' + (!options || options.detection !== false ? '_method.__escapehtml.detection' : '') + '(' + _fn + ')' + ')' + ' %>';
	    };
	
	    this.__removeShell = function (tpl, options) {
	        var _counter = 0;
	
	        tpl = tpl
	        // inline helper register
	        .replace(juicer.settings.helperRegister, function ($, helperName, fnText) {
	            var anno = annotate(fnText);
	            var fnArgs = anno[0];
	            var fnBody = anno[1];
	            var fn = new Function(fnArgs.join(','), fnBody);
	
	            juicer.register(helperName, fn);
	            return $;
	        })
	
	        // for expression
	        .replace(juicer.settings.forstart, function ($, _name, alias, key) {
	            var alias = alias || 'value',
	                key = key && key.substr(1);
	            var _iterate = 'i' + _counter++;
	            return '<% ~function() {' + 'for(var ' + _iterate + ' in ' + _name + ') {' + 'if(' + _name + '.hasOwnProperty(' + _iterate + ')) {' + 'var ' + alias + '=' + _name + '[' + _iterate + '];' + (key ? 'var ' + key + '=' + _iterate + ';' : '') + ' %>';
	        }).replace(juicer.settings.forend, '<% }}}(); %>')
	
	        // if expression
	        .replace(juicer.settings.ifstart, function ($, condition) {
	            return '<% if(' + condition + ') { %>';
	        }).replace(juicer.settings.ifend, '<% } %>')
	
	        // else expression
	        .replace(juicer.settings.elsestart, function ($) {
	            return '<% } else { %>';
	        })
	
	        // else if expression
	        .replace(juicer.settings.elseifstart, function ($, condition) {
	            return '<% } else if(' + condition + ') { %>';
	        })
	
	        // interpolate without escape
	        .replace(juicer.settings.noneencode, function ($, _name) {
	            return that.__interpolate(_name, false, options);
	        })
	
	        // interpolate with escape
	        .replace(juicer.settings.interpolate, function ($, _name) {
	            return that.__interpolate(_name, true, options);
	        })
	
	        // clean up comments
	        .replace(juicer.settings.inlinecomment, '')
	
	        // range expression
	        .replace(juicer.settings.rangestart, function ($, _name, start, end) {
	            var _iterate = 'j' + _counter++;
	            return '<% ~function() {' + 'for(var ' + _iterate + '=' + start + ';' + _iterate + '<' + end + ';' + _iterate + '++) {{' + 'var ' + _name + '=' + _iterate + ';' + ' %>';
	        })
	
	        // include sub-template
	        .replace(juicer.settings.include, function ($, tpl, data) {
	            // compatible for node.js
	            if (tpl.match(/^file\:\/\//igm)) return $;
	            return '<%= _method.__juicer(' + tpl + ', ' + data + '); %>';
	        });
	
	        // exception handling
	        if (!options || options.errorhandling !== false) {
	            tpl = '<% try { %>' + tpl;
	            tpl += '<% } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} %>';
	        }
	
	        return tpl;
	    };
	
	    this.__toNative = function (tpl, options) {
	        return this.__convert(tpl, !options || options.strip);
	    };
	
	    this.__lexicalAnalyze = function (tpl) {
	        var buffer = [];
	        var method = [];
	        var prefix = '';
	        var reserved = ['if', 'each', '_', '_method', 'console', 'break', 'case', 'catch', 'continue', 'debugger', 'default', 'delete', 'do', 'finally', 'for', 'function', 'in', 'instanceof', 'new', 'return', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with', 'null', 'typeof', 'class', 'enum', 'export', 'extends', 'import', 'super', 'implements', 'interface', 'let', 'package', 'private', 'protected', 'public', 'static', 'yield', 'const', 'arguments', 'true', 'false', 'undefined', 'NaN'];
	
	        var indexOf = function indexOf(array, item) {
	            if (Array.prototype.indexOf && array.indexOf === Array.prototype.indexOf) {
	                return array.indexOf(item);
	            }
	
	            for (var i = 0; i < array.length; i++) {
	                if (array[i] === item) return i;
	            }
	
	            return -1;
	        };
	
	        var variableAnalyze = function variableAnalyze($, statement) {
	            statement = statement.match(/\w+/igm)[0];
	
	            if (indexOf(buffer, statement) === -1 && indexOf(reserved, statement) === -1 && indexOf(method, statement) === -1) {
	
	                // avoid re-declare native function, if not do this, template
	                // `{@if encodeURIComponent(name)}` could be throw undefined.
	
	                if (typeof window !== 'undefined' && typeof window[statement] === 'function' && window[statement].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)) {
	                    return $;
	                }
	
	                // compatible for node.js
	                if (typeof global !== 'undefined' && typeof global[statement] === 'function' && global[statement].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)) {
	                    return $;
	                }
	
	                // avoid re-declare registered function, if not do this, template
	                // `{@if registered_func(name)}` could be throw undefined.
	
	                if (typeof juicer.options._method[statement] === 'function' || juicer.options._method.hasOwnProperty(statement)) {
	                    method.push(statement);
	                    return $;
	                }
	
	                // avoid SyntaxError: Unexpected number
	
	                if (statement.match(/^\d+/igm)) {
	                    return $;
	                }
	
	                buffer.push(statement); // fuck ie
	            }
	
	            return $;
	        };
	
	        tpl.replace(juicer.settings.forstart, variableAnalyze).replace(juicer.settings.interpolate, variableAnalyze).replace(juicer.settings.ifstart, variableAnalyze).replace(juicer.settings.elseifstart, variableAnalyze).replace(juicer.settings.include, variableAnalyze).replace(/[\+\-\*\/%!\?\|\^&~<>=,\(\)\[\]]\s*([A-Za-z_0-9]+)/igm, variableAnalyze);
	
	        for (var i = 0; i < buffer.length; i++) {
	            prefix += 'var ' + buffer[i] + '=_.' + buffer[i] + ';';
	        }
	
	        for (var i = 0; i < method.length; i++) {
	            prefix += 'var ' + method[i] + '=_method.' + method[i] + ';';
	        }
	
	        return '<% ' + prefix + ' %>';
	    };
	
	    this.__convert = function (tpl, strip) {
	        var buffer = [].join('');
	
	        buffer += "'use strict';"; // use strict mode
	        buffer += "var _=_||{};";
	        buffer += "var _out='';_out+='";
	
	        if (strip !== false) {
	            buffer += tpl.replace(/\\/g, "\\\\").replace(/[\r\t\n]/g, " ").replace(/'(?=[^%]*%>)/g, "\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='") + "';return _out;";
	
	            return buffer;
	        }
	
	        buffer += tpl.replace(/\\/g, "\\\\").replace(/[\r]/g, "\\r").replace(/[\t]/g, "\\t").replace(/[\n]/g, "\\n").replace(/'(?=[^%]*%>)/g, "\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='") + "';return _out.replace(/[\\r\\n]\\s+[\\r\\n]/g, '\\r\\n');";
	
	        return buffer;
	    };
	
	    this.parse = function (tpl, options) {
	        var _that = this;
	
	        if (!options || options.loose !== false) {
	            tpl = this.__lexicalAnalyze(tpl) + tpl;
	        }
	
	        tpl = this.__removeShell(tpl, options);
	        tpl = this.__toNative(tpl, options);
	
	        this._render = new Function('_, _method', tpl);
	
	        this.render = function (_, _method) {
	            if (!_method || _method !== that.options._method) {
	                _method = __creator(_method, that.options._method);
	            }
	
	            return _that._render.call(this, _, _method);
	        };
	
	        return this;
	    };
	};
	
	juicer.compile = function (tpl, options) {
	    if (!options || options !== this.options) {
	        options = __creator(options, this.options);
	    }
	
	    var that = this;
	    var cacheStore = {
	        get: function get(tpl) {
	            if (options.cachestore) {
	                return options.cachestore.get(tpl);
	            }
	
	            return that.__cache[tpl];
	        },
	
	        set: function set(tpl, val) {
	            if (options.cachestore) {
	                return options.cachestore.set(tpl, val);
	            }
	
	            return that.__cache[tpl] = val;
	        }
	    };
	
	    try {
	        var engine = cacheStore.get(tpl) ? cacheStore.get(tpl) : new this.template(this.options).parse(tpl, options);
	
	        if (!options || options.cache !== false) {
	            cacheStore.set(tpl, engine);
	        }
	
	        return engine;
	    } catch (e) {
	        __throw('Juicer Compile Exception: ' + e.message);
	
	        return {
	            render: function render() {} // noop
	        };
	    }
	};
	
	juicer.to_html = function (tpl, data, options) {
	    if (!options || options !== this.options) {
	        options = __creator(options, this.options);
	    }
	
	    return this.compile(tpl, options).render(data, options._method);
	};
	
	// avoid memory leak for node.js
	if (typeof global !== 'undefined' && typeof window === 'undefined') {
	    juicer.set('cache', false);
	}
	
	if (typeof document !== 'undefined' && document.body) {
	    juicer.documentHTML = document.body.innerHTML;
	}
	
	window.Juicer = juicer;
	
	exports.default = juicer;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var RE_XHTML_TAG = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	    RE_SINGLE_TAG = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
	    DIV = document.createElement('div');
	
	var slice = [].slice,
	    forEach = [].forEach;
	
	var $ = function $(selector) {
	    var ret = [];
	
	    if (selector) {
	        if (selector[0] == '<' && /<([\w:]+)/.test(selector)) {
	            ret = node.create(selector);
	        } else {
	            ret = document.querySelectorAll(selector);
	        }
	    }
	
	    return $.node(slice.call(ret));
	};
	
	var node = {
	    create: function create(html) {
	        var ret = [],
	            container;
	
	        if (!html) {
	            return ret;
	        }
	
	        if (RE_SINGLE_TAG.test(html)) {
	            ret = $(document.createElement(RegExp.$1));
	        } else {
	            html = html.replace(RE_XHTML_TAG, '<$1></$2>');
	
	            container = DIV;
	            container.innerHTML = html;
	
	            ret = each(slice.call(container.childNodes), function (el) {
	                container.removeChild(el);
	            });
	        }
	        return ret;
	    }
	};
	
	$.node = function (els) {
	    els = els || [];
	    els.__proto__ = node;
	    return els;
	};
	
	$.node.prototype = node;
	
	$.isNode = function (obj) {
	    return obj instanceof $.node;
	};
	
	each(['after', 'prepend', 'before', 'append'], function (method, index) {
	    var inside = index % 2;
	
	    node[method] = function (html) {
	        var nodes = $.isNode(html) ? html : node.create(html + ''),
	            isCopy = this.length > 1,
	            parent,
	            target;
	
	        if (nodes.length) {
	            nodes = nodeListToFragment(nodes);
	        } else {
	            return this;
	        }
	
	        return each(this, function (el) {
	            parent = inside ? el : el.parentNode;
	
	            switch (index) {
	                case 0:
	                    target = el.nextSibling;
	                    break;
	                case 1:
	                    target = el.firstChild;
	                    break;
	                case 2:
	                    target = el;
	                    break;
	                default:
	                    target = null;
	            }
	
	            parent.insertBefore(isCopy ? nodes.cloneNode(true) : nodes, target);
	        });
	    };
	});
	
	function each(els, callback) {
	    els && forEach.call(els, callback);
	    return els;
	}
	
	function nodeListToFragment(nodes) {
	    var ret = null;
	
	    if (nodes) {
	        ret = document.createDocumentFragment();
	
	        each(nodes, function (node) {
	            ret.appendChild(node);
	        });
	    }
	
	    return ret;
	}
	
	exports.default = $;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 *
	 * 摘用kissy lazyload组件
	 *
	 * 懒加载
	 * @module lazyload
	 * @author huya.nzb@alibaba-inc.com
	 * @date 2014-05-12
	 */
	
	//合并属性
	function mix(r, s, o) {
	
	    if (r && s) {
	        for (var k in s) {
	            if (s.hasOwnProperty(k) && (o || typeof r[k] === 'undefined')) {
	                r[k] = s[k];
	            }
	        }
	    }
	
	    return r;
	}
	
	//绑定上下文
	function _bind(fn, context) {
	    return fn.bind ? fn.bind(context) : function () {
	        fn.apply(context, arguments);
	    };
	}
	
	/**
	 * 懒加载
	
	 new LazyLoad({
	        nodes: '.lazyimg',
	        delay: 30,
	        margin: 15,
	        onload: function(node) {
	            node.src = node.getAttribute('lazysrc');
	        }
	    });
	
	 * @class LazyLoad
	 * @param {Object} config 见init
	 * @constructor
	 */
	
	function LazyLoad(config) {
	    this.init.apply(this, arguments);
	}
	
	//添加原型方法
	mix(LazyLoad.prototype, {
	
	    /**
	     * 初始化
	     * @method init
	     * @param {Object} config 配置参数
	     * @param {String|HTMLCollection} config.nodes 懒加载节点
	     * @param {Number|Boolean} config.delay 延时（false时不延时）
	     * @param {Number} config.margin 边距
	     * @param {Boolean} config.preciseMode 是否是精确模式，即节点必须在视窗范围内，在视窗之上不会触发
	     * @param {Boolean} config.autoDestroy 懒加载完成之后是否自动销毁
	     * @param {Function} config.onload 加载回调
	     * @public
	     */
	    init: function init(config) {
	        var self = this;
	
	        //默认配置
	        this._config = {
	            container: window,
	            nodes: [],
	            delay: 30,
	            margin: 15,
	            onload: null,
	            preciseMode: false,
	            autoDestroy: true,
	            useAnim: true,
	            speed: '0.5s',
	            loadBeforeScroll: false,
	            loadOnTouchMove: false,
	            autoReload: true,
	            imgSize: false,
	            weakSize: false,
	            useWebp: false,
	            runScript: true,
	            heightOnly: false,
	            enableDomainMerge: false, // 是否开启域名收敛
	            mergeDomain: "gw.alicdn.com" // 收敛到的域名
	        };
	
	        // this._containerWidth  =  S.one(this._config.container).width();
	        // this._containerHeight =  S.one(this._config.container).height(
	        // S.augment(LazyLoad, S.Event.Target);
	
	        this._containerWidth = window.innerWidth;
	        this._containerHeight = window.innerHeight;
	
	        this.config(config);
	        //弱网图片质量降级
	        this._isWeakNet(function (isWeakNet) {
	            if (self._config.weakSize && isWeakNet) {
	                self._config.imgSize = self._config.weakSize;
	            }
	        });
	
	        this.refresh();
	        this.bind();
	        this.check();
	    },
	
	    /**
	     * 销毁
	     * @method destroy
	     * @chainable
	     * @public
	     */
	    destroy: function destroy() {
	        this.rmDetach();
	
	        this._nodes = null;
	        this._config = null;
	
	        delete this._nodes;
	        delete this._config;
	        delete this._delayTimeout;
	        delete this._eventCallbackBinded;
	
	        this.destroyed = true;
	
	        return this;
	    },
	
	    /**
	     * 配置参数
	     * @method config
	     * @param {Object} 见init
	     * @chainable
	     * @public
	     */
	    config: function config(_config) {
	        this._config = mix(this._config, _config, true);
	        return this;
	    },
	
	    /**
	     * 刷新懒加载节点
	     * @method refresh
	     * @chainable
	     * @public
	     */
	    refresh: function refresh() {
	        var nodes = this._config.nodes;
	
	        nodes = typeof nodes === 'string' ? document.querySelectorAll(nodes) : nodes;
	        nodes = nodes && nodes.length ? Array.prototype.slice.call(nodes, 0) : [];
	
	        //过滤已经loaded的
	        this._nodes = nodes.filter(function (node) {
	            return !node._lazyloaded;
	        });
	
	        return this;
	    },
	
	    /**
	     * 追加懒加载的图片节点
	     * @param imgNodes
	     */
	    appendLazyLoadImageNodes: function appendLazyLoadImageNodes(imgNodes) {
	        imgNodes = typeof imgNodes === 'string' ? document.querySelectorAll(imgNodes) : imgNodes;
	
	        if (imgNodes.length) {
	            this._nodes.push.apply(this._nodes, imgNodes);
	            //过滤已经loaded的
	            this._nodes = this._nodes.filter(function (node) {
	                return !node._lazyloaded;
	            });
	            this.check();
	        }
	        return this;
	    },
	    /**
	     * 绑定事件
	     * @method bind
	     * @chainable
	     * @public
	     */
	    bind: function bind() {
	
	        //事件回调是否绑定上下文
	        if (!this._eventCallbackBinded) {
	            this._onResize = _bind(this._onResize, this);
	            this._onScroll = _bind(this._onScroll, this);
	            this._onTouchStart = _bind(this._onTouchStart, this);
	            this._onOrientationChange = _bind(this._onOrientationChange, this);
	            this._eventCallbackBinded = true;
	        }
	
	        this._config.container.addEventListener('scroll', this._onScroll, false);
	        window.addEventListener('resize', this._onResize, false);
	        window.addEventListener('orientationchange', this._onOrientationChange, false);
	
	        if (this._config.loadBeforeScroll) {
	            window.addEventListener('touchstart', this._onTouchStart, false);
	        }
	
	        if (this._config.loadOnTouchMove) {
	            this._config.container.addEventListener('touchmove', this._onScroll, false);
	        }
	
	        return this;
	    },
	
	    /**
	     * 解除事件绑定
	     * @method detach
	     * @chainable
	     * @public
	     */
	    rmDetach: function rmDetach() {
	        this._config.container.removeEventListener('scroll', this._onScroll, false);
	        window.removeEventListener('resize', this._onResize, false);
	        window.removeEventListener('orientationchange', this._onOrientationChange, false);
	
	        if (this._config.loadBeforeScroll) {
	            window.removeEventListener('touchstart', this._onTouchStart, false);
	        }
	
	        if (this._config.loadOnTouchMove) {
	            this._config.container.removeEventListener('touchmove', this._onScroll, false);
	        }
	        return this;
	    },
	
	    /**
	     * 检查元素是否在视窗内
	     * @method check
	     * @chainable
	     * @public
	     */
	    check: function check(tmp) {
	
	        var that = this;
	
	        //清除延时
	        clearTimeout(this._delayTimeout);
	        this._delayTimeout = null;
	
	        //有可能有延时的回调
	        //如果销毁了或者节点数为空，则停止执行
	        if (this.destroyed || this._nodes.length === 0) {
	            return this;
	        }
	        //var winWidth = this._config.container.offsetWidth,
	        //	winHeight = this._config.container.offsetHeight,
	        var winWidth = this._containerWidth,
	            winHeight = this._containerHeight,
	            config = this._config,
	            margin = tmp || config.margin,
	            precise = config.preciseMode,
	            destroy = config.autoDestroy,
	            useAnim = config.useAnim,
	            autoReload = config.autoReload,
	            heightOnly = config.heightOnly,
	            nodes = this._nodes,
	            type = this._config.type,
	            i = 0,
	            node,
	            display,
	            offset,
	            loadable;
	
	        while (i < nodes.length) {
	            node = nodes[i++];
	
	            if (useAnim && !node.isBind && type == 'img') {
	                node.style.opacity = 0;
	            }
	
	            if (!node.isBind && type == 'img') {
	                node.onload = function () {
	                    var self = this;
	                    if (useAnim) {
	                        //fix for 图片在红米上提前载入问题
	                        this.style.webkitTransition = 'opacity ' + config.speed + ' ease-in';
	                        this.style.opacity = 1;
	                    }
	                    // that.fire('load', {
	                    //     node: self
	                    // });
	                };
	                node.onerror = function () {
	                    //避免多次重复加载
	                    if (autoReload) {
	                        this.onerror = null;
	                        this.src = this.src;
	                    }
	                };
	            }
	
	            node.isBind = true;
	
	            //如果已经加载过一次，则从数组中移除
	            if (node._lazyloaded) {
	                nodes.splice(--i, 1);
	                continue;
	            }
	
	            display = node.style.display || document.defaultView.getComputedStyle(node, null).getPropertyValue('display');
	
	            //display:none时不检查
	            if (display === 'none') {
	                continue;
	            }
	
	            offset = node.getBoundingClientRect();
	
	            //父元素display:none时也不检查
	            if (!offset.top && !offset.bottom && !offset.left && !offset.right) {
	                continue;
	            }
	
	            //普通模式节点只要在视窗之内及以上即可
	            //精确模式节点必须在视窗范围内
	            loadable = winHeight + margin >= offset.top && (heightOnly || winWidth + margin >= offset.left) && (!precise || offset.bottom + margin >= 0 && (heightOnly || offset.right + margin >= 0));
	
	            if (loadable) {
	                i--;
	                this.load(node);
	            }
	        }
	
	        destroy && !nodes.length && this.destroy();
	
	        return this;
	    },
	
	    load: function load(node) {
	        var that = this;
	        var index = that._nodes.indexOf(node),
	            attr = that._config.attr,
	            type = that._config.type,
	            size = that._config.imgSize,
	            useWebp = that._config.useWebp,
	            runScript = that._config.runScript;
	
	        this._nodes.splice(index, 1);
	        node._lazyloaded = true;
	
	        size && this.resize(node);
	
	        switch (type) {
	            case 'img':
	                if (useWebp) isSupportWebp(function (rs) {
	                    node.src = rs ? that.webpReplace(node) : node.getAttribute(attr);
	                    node.removeAttribute(attr);
	                });else {
	                    node.src = node.getAttribute(attr);
	                    node.removeAttribute(attr);
	                }
	                break;
	            case 'bg':
	                node.style['backgroundImage'] = 'url("' + node.getAttribute(attr) + '")';
	                node.removeAttribute('lazybg');
	                break;
	            case 'script':
	                var script = S.one(node).one('script');
	                script.before(script.html().trim());
	                script.remove();
	                break;
	            case 'textarea':
	                var textarea = S.one(node).one('textarea');
	                if (runScript) textarea.before(textarea.html().trim().replace(/&lt;/ig, '<').replace(/&gt;/ig, '>'));else textarea.before(textarea.html().trim());
	                textarea.remove();
	                break;
	        }
	
	        //onload && onload.call(this, node);
	    },
	    webpReplace: function webpReplace(node) {
	        var attr = this._config.attr,
	            lazySrc = node.getAttribute(attr),
	            typeReg = /(\.jpg|\.png)$/i,
	            cdnReg = /taobaocdn|alicdn/ig;
	
	        return typeReg.test(lazySrc) && cdnReg.test(lazySrc) ? lazySrc + '_.webp' : lazySrc;
	    },
	
	    // 根据srcset获取最佳图片
	    getSrcsetImg: function getSrcsetImg(node) {
	        // 根据 data-srcset 和 devicePixelRatio 获取最佳图片
	        var srcset = node.getAttribute("data-srcset"),
	            lazysrc = false;
	
	        if (srcset) {
	            var srcsetInfo = this.srcsetInfo(srcset),
	                getBestImage = this.getBestImage(srcsetInfo);
	
	            lazysrc = getBestImage.url;
	        }
	
	        return lazysrc;
	    },
	
	    // 处理data-srcset
	    srcsetInfo: function srcsetInfo(srcset) {
	        var input = srcset,
	            position = 0,
	            rawCandidates = [],
	            url,
	            descriptors;
	        if (!input) {
	            return;
	        }
	        while (input !== "") {
	            while (input.charAt(0) === " ") {
	                input = input.slice(1);
	            }
	            position = input.indexOf(" ");
	            if (position !== -1) {
	                url = input.slice(0, position);
	                if (url === "") {
	                    break;
	                }
	                input = input.slice(position + 1);
	                position = input.indexOf(",");
	                if (position === -1) {
	                    descriptors = input;
	                    input = "";
	                } else {
	                    descriptors = input.slice(0, position);
	                    input = input.slice(position + 1);
	                }
	                rawCandidates.push({
	                    url: url,
	                    descriptors: descriptors
	                });
	            } else {
	                rawCandidates.push({
	                    url: input,
	                    descriptors: ""
	                });
	                input = "";
	            }
	        }
	
	        for (var i = 0, len = rawCandidates.length; i < len; i++) {
	            var candidate = rawCandidates[i],
	                desc = this._parseDescriptors(candidate.descriptors);
	            candidate.x = desc.x;
	        }
	
	        return rawCandidates;
	    },
	    // 处理图片w/h/x等
	    _parseDescriptors: function _parseDescriptors(descString) {
	        var INT_REGEXP = /^[0-9]+$/;
	        var descriptors = descString.split(/\s/);
	        var out = {};
	        for (var i = 0; i < descriptors.length; i++) {
	            var desc = descriptors[i];
	            if (desc.length > 0) {
	                var lastChar = desc[desc.length - 1];
	                var value = desc.substring(0, desc.length - 1);
	                var intVal = parseInt(value, 10);
	                var floatVal = parseFloat(value);
	                if (value.match(INT_REGEXP) && lastChar === "w") {
	                    out[lastChar] = intVal;
	                } else if (value.match(INT_REGEXP) && lastChar == "h") {
	                    out[lastChar] = intVal;
	                } else if (!isNaN(floatVal) && lastChar == "x") {
	                    out[lastChar] = floatVal;
	                } else {
	                    this.error = 'Invalid srcset descriptor found in "' + desc + '".';
	                    this.isValid = false;
	                }
	            }
	        }
	        return out;
	    },
	
	    // 根据 devicePixelRatio 获取最佳显示图片
	    getBestImage: function getBestImage(srcsetInfo) {
	        var dpr = window.devicePixelRatio;
	        var bestMatch = null;
	        var images = srcsetInfo;
	
	        for (var i = 0, l = images.length; i < l; i++) {
	            var imageCandidate = images[i];
	            var bestMatchX = bestMatch ? bestMatch.x : 0;
	            if (bestMatchX <= imageCandidate.x && imageCandidate.x <= dpr) {
	                bestMatch = imageCandidate;
	                continue;
	            }
	        }
	        return bestMatch;
	    },
	
	    resize: function resize(node) {
	        var attr = this._config.attr,
	            lazySrc = this.getSrcsetImg(node) || node.getAttribute(attr),
	            size = this._config.imgSize,
	            cdnReg = /taobaocdn|alicdn/ig,
	            sizeReg = /(\.jpg_\w*q)\d{2}(\w*\.jpg)/ig;
	
	        //图片质量q优化
	        if (cdnReg.test(lazySrc) && sizeReg.test(lazySrc)) {
	            lazySrc = lazySrc.replace(sizeReg, '$1' + size + '$2');
	        }
	
	        // 若开启域名收敛 且 lazySrc存在
	        if (this._config.enableDomainMerge && lazySrc) {
	            lazySrc = this._domainMerge(lazySrc);
	        }
	
	        node.setAttribute(attr, lazySrc);
	    },
	
	    // 图片域名收敛
	    _domainMerge: function _domainMerge(lazySrc) {
	        var enableDomainMerge = this._config.enableDomainMerge,
	            mergeDomain = this._config.mergeDomain;
	        // 图片url的正则表达式
	        var REG_IMG_URL = /^(?:(?:http|https):)?\/\/(.+\.(?:alicdn|taobaocdn|taobao)\.com)\/(.*(?:\.(jpg|png|gif|jpeg|webp))?)$/i;
	        var ret = lazySrc.match(REG_IMG_URL);
	        // 如果需要域名收敛
	        if (enableDomainMerge) {
	            lazySrc = lazySrc.replace(ret[1], mergeDomain);
	        }
	        return lazySrc;
	    },
	
	    //检测是否弱网
	    _isWeakNet: function _isWeakNet(callback) {
	        var self = this;
	
	        this.isWeakNet = false;
	
	        if (window.MT && window.MT.Tracker) {
	            MT.Tracker._getNetstat(function (type) {
	                self.isWeakNet = ['2g', '3g'].indexOf(type) >= 0;
	                callback && callback(self.isWeakNet);
	            });
	        }
	    },
	
	    /**
	     * 延时检查是否在视窗之内
	     * @method _interval
	     * @protected
	     */
	    _interval: function _interval(tmp) {
	        var that = this;
	        var delay = that._config.delay;
	
	        //delay为false时不延时，delay为0时延时0ms
	        if (typeof delay == 'number') {
	
	            //前面有延时的话，则不新添加延时，保证每隔一段时间执行一次
	            //类似 throttle
	            !that._delayTimeout && (that._delayTimeout = setTimeout(function () {
	                that.check(tmp);
	            }, delay));
	        } else {
	            that.check(tmp);
	        }
	    },
	
	    pause: function pause() {
	        if (this.destroyed) return;
	
	        this.detach();
	    },
	
	    resume: function resume() {
	        if (this.destroyed) return;
	
	        this.bind();
	    },
	
	    /**
	     * 窗口变化事件回调
	     * @method _onResize
	     * @param {Number} delay 延时时间
	     * @protected
	     */
	    _onResize: function _onResize() {
	        this._interval();
	    },
	
	    /**
	     * 滚动事件回调
	     * @method _onScroll
	     * @protected
	     */
	    _onScroll: function _onScroll() {
	        this._interval();
	    },
	
	    /**
	     * 横竖屏切换事件回调
	     * @method _onOrientationChange
	     * @protected
	     */
	    _onOrientationChange: function _onOrientationChange() {
	        //横竖屏切换延时400ms，保证页面能够完全切换过来
	        setTimeout(_bind(this._interval, this), 400);
	    },
	    _onTouchStart: function _onTouchStart() {
	        var tmp = window.innerHeight;
	        this._interval(tmp);
	    }
	
	}, true);
	
	//helper
	function isSupportWebp(exec) {
	    var img = new Image(),
	        loaded,
	        _isSupport;
	    if (window.localStorage && window.localStorage.hasOwnProperty('isSupportWebp')) {
	        _isSupport = localStorage.getItem('isSupportWebp') == 'true' ? true : false;
	        exec(_isSupport);
	        return;
	    }
	    img.onload = img.onerror = function () {
	        if (!loaded) {
	            loaded = true;
	            exec(img.width === 2 && img.height === 2);
	            window.localStorage && window.localStorage.setItem('isSupportWebp', img.width === 2 && img.height === 2);
	        }
	    };
	    setTimeout(function () {
	        if (!loaded) {
	            loaded = true;
	            exec(false);
	            window.localStorage && window.localStorage.setItem('isSupportWebp', false);
	        }
	    }, 16);
	    img.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
	}
	
	//添加航旅命名空间
	//@deprecated window.LazyLoad
	// window.MT = window.MT || {};
	// MT.LazyLoad = window.LazyLoad = LazyLoad;
	window.LazyLoad = LazyLoad;
	
	exports.default = LazyLoad;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.cmod {\n  margin-top: 10px; }\n\n.cmod-slideBanner .cmod-slideBanner-list {\n  position: relative;\n  width: 100%;\n  padding-bottom: 23.4375%;\n  line-height: 0;\n  background-size: 100% 100%;\n  overflow: hidden; }\n\n.cmod-slideBanner ul {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: 100% auto;\n  overflow: hidden; }\n\n.cmod-slideBanner ul li {\n  width: 100%;\n  height: 100%; }\n\n.cmod-slideBanner ul img {\n  width: 100%;\n  height: 100%; }\n\n.cmod-slideBanner .cmod-slideBanner-nav {\n  position: absolute;\n  left: 0;\n  bottom: 10px;\n  width: 100%;\n  text-align: center; }\n\n.cmod-slideBanner .cmod-slideBanner-nav em {\n  display: inline-block;\n  margin-right: 5px;\n  width: 6px;\n  height: 6px;\n  border: 1px solid #fff;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px; }\n\n.cmod-slideBanner .cmod-slideBanner-nav em.cmod-slideBanner-nav-current {\n  background: #fff; }\n\n.cmod-slideBanner .cmod-slideBanner-nav em:last-child {\n  margin: 0; }\n\n.cmod-normalLink {\n  margin-top: 0px;\n  width: 100%;\n  height: 25px;\n  line-height: 25px;\n  font-size: 14px;\n  overflow: hidden;\n  background: #fff; }\n\n.cmod-normalLink .cmod-normalLink-inn,\n.cmod-normalLink .cmod-noLink-inn {\n  position: relative;\n  padding: 0px 13px;\n  height: 100%;\n  color: #2cb0f1; }\n\n.cmod-normalLink .cmod-normalLink-inn:after {\n  content: '';\n  position: absolute;\n  right: 13px;\n  top: 6px;\n  width: 7px;\n  height: 12px;\n  background: url(https://gw.alicdn.com/tps/TB1AhB.KFXXXXc7XXXXXXXXXXXX-15-25.png) no-repeat center;\n  background-size: 100%; }\n\n.cmod-suggestProduct {\n  margin-top: 0px; }\n\n.cmod-suggestProduct .cmod-suggestProduct-message {\n  padding: 15px 0;\n  display: -webkit-box;\n  -webkit-box-orient: horizontal;\n  -webkit-box-pack: start;\n  -webkit-box-align: center; }\n\n.cmod-suggestProduct .cmod-suggestProduct-message .cmod-suggestProduct-message-img {\n  position: relative;\n  margin-left: 11px;\n  background-size: 32px 32px;\n  background-repeat: no-repeat;\n  width: 32px;\n  height: 32px; }\n\n.cmod-suggestProduct .cmod-suggestProduct-message .cmod-suggestProduct-message-img:before {\n  content: '';\n  width: 2px;\n  height: 15px;\n  display: block;\n  position: absolute;\n  top: -15px;\n  left: 16px;\n  background-color: #e0e0e0; }\n\n.cmod-suggestProduct .cmod-suggestProduct-message .cmod-suggestProduct-message-img:after {\n  content: '';\n  width: 2px;\n  height: 15px;\n  display: block;\n  position: absolute;\n  top: 32px;\n  left: 16px;\n  background-color: #e0e0e0; }\n\n.cmod-suggestProduct .cmod-suggestProduct-message .cmod-suggestProduct-message-img img {\n  width: 100%;\n  vertical-align: initial; }\n\n.cmod-suggestProduct .cmod-suggestProduct-message .cmod-suggestProduct-message-info {\n  -webkit-box-flex: 1;\n  margin-left: 5px;\n  padding-right: 6px;\n  font-size: 15px;\n  font-weight: normal;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap; }\n\n.cmod-suggestProduct .cmod-suggestProduct-reserve {\n  height: 135px;\n  margin: 0 12.5px;\n  text-decoration: none; }\n\n.cmod-suggestProduct .cmod-suggestProduct-reserve .cmod-suggestProduct-reserve-inn {\n  display: -webkit-box;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  background-color: #fff; }\n\n.cmod-suggestProduct .cmod-suggestProduct-reserve .cmod-suggestProduct-reserve-img {\n  width: 100px;\n  height: 135px;\n  overflow: hidden; }\n\n.cmod-suggestProduct .cmod-suggestProduct-reserve .cmod-suggestProduct-reserve-img img {\n  margin: 0 -10px;\n  width: 120px;\n  height: 100%; }\n\n.cmod-suggestProduct .cmod-suggestProduct-reserve .cmod-suggestProduct-reserve-info {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-box-flex: 1;\n  margin: 15px 13px 0 13px;\n  position: relative;\n  text-align: center; }\n\n.cmod-suggestProduct .cmod-suggestProduct-reserve .cmod-suggestProduct-reserve-info h3 {\n  color: #333333;\n  font-size: 18px;\n  margin-bottom: 5px;\n  line-height: 1.2;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap; }\n\n.cmod-suggestProduct .cmod-suggestProduct-reserve .cmod-suggestProduct-reserve-info .cmod-suggestProduct-reserve-desc {\n  color: #666666;\n  font-size: 12px;\n  line-height: 1.2;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap; }\n\n.cmod-suggestProduct .cmod-suggestProduct-reserve .cmod-suggestProduct-reserve-info .cmod-suggestProduct-reserve-operate {\n  position: absolute;\n  bottom: 10px;\n  width: 100%; }\n\n.cmod-suggestProduct .cmod-suggestProduct-reserve .cmod-suggestProduct-reserve-info .cmod-suggestProduct-reserve-operate .cmod-suggestProduct-reserve-state {\n  font-size: 10px;\n  color: #333333;\n  margin-bottom: 5px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap; }\n\n.cmod-suggestProduct .cmod-suggestProduct-reserve .cmod-suggestProduct-reserve-info .cmod-suggestProduct-reserve-operate .cmod-suggestProduct-reserve-state font {\n  font-size: 12px;\n  font-weight: bold; }\n\n.cmod-suggestProduct .cmod-suggestProduct-reserve .cmod-suggestProduct-reserve-info .cmod-suggestProduct-reserve-operate .cmod-suggestProduct-reserve-btn {\n  position: relative;\n  height: 37px;\n  line-height: 37px;\n  font-size: 15px;\n  color: #3d3d3d;\n  background: #ffc900;\n  background-size: auto 100%;\n  text-align: center; }\n\n.cmod-suggestLink {\n  padding: 12px;\n  background: #fff; }\n\n.cmod-suggestLink .cmod-suggestLink-header {\n  color: #333333;\n  font-size: 15px;\n  height: 28px;\n  line-heigh: 40px; }\n\n.cmod-suggestLink .cmod-suggestLink-container {\n  display: -webkit-box;\n  -webkit-box-orient: horizontal; }\n\n.cmod-suggestLink .cmod-suggestLink-item {\n  -webkit-box-flex: 1;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  box-pack: center;\n  -webkit-box-pack: center;\n  background: #FAFAFA;\n  margin-right: 6px;\n  position: relative; }\n\n.cmod-suggestLink .cmod-suggestLink-item:last-child {\n  margin-right: 0px; }\n\n.cmod-suggestLink .cmod-suggestLink-item .cmod-suggestLink-item-body {\n  -webkit-box-flex: 1;\n  display: -webkit-box;\n  -webkit-box-orient: horizontal;\n  box-pack: center;\n  -webkit-box-pack: center;\n  color: #333333;\n  font-size: 13px;\n  -webkit-border-top-left-radius: 6px;\n  -webkit-border-top-right-radius: 6px; }\n\n.cmod-suggestLink .cmod-suggestLink-item .cmod-suggestLink-img {\n  width: 90px;\n  height: 60px; }\n\n.cmod-suggestLink .cmod-suggestLink-item .cmod-suggestLink-txt {\n  -webkit-box-flex: 1;\n  display: -webkit-box;\n  -webkit-box-orient: horizontal;\n  -webkit-box-pack: center;\n  -webkit-box-align: center;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.cmod-suggestLink .cmod-suggestLink-item .cmod-suggestLink-label {\n  background: #ff5000;\n  color: #ffffff;\n  font-size: 10px;\n  padding: 6px 0px;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-border-bottom-left-radius: 6px;\n  -webkit-border-bottom-right-radius: 6px; }\n\n.cmod-suggestCategory {\n  background-color: #ffffff;\n  padding-left: 12px;\n  font-weight: normal;\n  margin-top: 12px;\n  margin-bottom: 12px; }\n\n.cmod-suggestCategory .cmod-suggestCategory-title {\n  color: #333333;\n  font-size: 15px;\n  font-weight: normal;\n  height: 40px;\n  line-height: 40px; }\n\n.cmod-suggestCategory .cmod-suggestCategory-more {\n  display: inline-block;\n  text-align: right;\n  font-size: 12px;\n  float: right;\n  margin-right: 10px;\n  min-width: 100px; }\n\n.cmod-suggestCategory .cmod-suggestCategory-container {\n  display: -webkit-box;\n  -webkit-box-orient: horizontal;\n  overflow: scroll;\n  padding-right: 12px; }\n\n.cmod-suggestCategory .cmod-suggestCategory-container .cmod-suggestCategory-item {\n  margin-right: 6px;\n  width: 113px; }\n\n.cmod-suggestCategory .cmod-suggestCategory-container .cmod-suggestCategory-item-12 {\n  margin-right: 12px; }\n\n.cmod-suggestCategory .cmod-suggestCategory-container .cmod-suggestCategory-item .cmod-suggestCategory-itemin {\n  position: relative; }\n\n.cmod-suggestCategory .cmod-suggestCategory-container .cmod-suggestCategory-item .cmod-suggestCategory-img {\n  width: 113px;\n  height: 113px;\n  margin-bottom: 6px;\n  position: relative;\n  background: #FAFAFA;\n  -webkit-box-flex: 1;\n  display: -webkit-box;\n  -webkit-box-orient: horizontal;\n  -webkit-box-pack: center;\n  -webkit-box-align: center;\n  text-align: center;\n  color: #ee9900; }\n\n.cmod-suggestCategory .cmod-suggestCategory-container .cmod-suggestCategory-item .cmod-suggestCategory-more-box {\n  border: 1px solid #e0e0e0; }\n\n.cmod-suggestCategory .cmod-suggestCategory-container .cmod-suggestCategory-item .cmod-suggestCategory-new {\n  position: absolute;\n  background: rgba(0, 0, 0, 0.5);\n  color: #ffffff;\n  font-size: 12px;\n  padding: 6px 6px;\n  box-sizing: border-box;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.cmod-suggestCategory .cmod-suggestCategory-container .cmod-suggestCategory-item .cmod-suggestCategory-txt {\n  color: #3D3D3D;\n  font-size: 13px;\n  text-align: left;\n  margin-bottom: 6px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  line-height: 20px; }\n\n.cmod-suggestCategory .cmod-suggestCategory-container .cmod-suggestCategory-item .cmod-suggestCategory-subTxt {\n  color: #a5a5a5;\n  font-size: 12px;\n  text-align: left;\n  margin-bottom: 12px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.cmod-banners .cmod-banners-item {\n  margin-top: 10px; }\n\n.cmod-banners .cmod-banners-item img {\n  width: 100%; }\n\n.cmod-simpleRedpacket .cmod-simpleRedpacket-out {\n  position: fixed;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  color: #fff;\n  background: url(//img.alicdn.com/tfs/TB16WEYNVXXXXa1apXXXXXXXXXX-640-919.png) no-repeat center bottom;\n  background-size: 100% auto;\n  z-index: 10001; }\n\n.cmod-simpleRedpacket .cmod-simpleRedpacket-out .cmod-simpleRedpacket-close {\n  background: url(//gw.alicdn.com/tps/TB1.jbkLXXXXXXyXVXXXXXXXXXX-48-48.png) no-repeat center center;\n  width: 24px;\n  height: 24px;\n  background-size: 100% 100%;\n  position: absolute;\n  right: 15px;\n  top: 30px; }\n\n.cmod-simpleRedpacket .cmod-simpleRedpacket-out .cmod-simpleRedpacket-close span {\n  opacity: 0; }\n\n.cmod-simpleRedpacket .cmod-simpleRedpacket-out .cmod-simpleRedpacket-content {\n  position: absolute;\n  left: 15.625%;\n  padding-bottom: 23.4375%;\n  width: 68.75%;\n  bottom: 0; }\n\n.cmod-simpleRedpacket .cmod-simpleRedpacket-out .cmod-simpleRedpacket-inn {\n  padding-bottom: 132.954545%;\n  width: 100%; }\n\n.cmod-simpleRedpacket .cmod-simpleRedpacket-out .cmod-simpleRedpacket-title {\n  position: absolute;\n  right: 50%;\n  -webkit-transform: translate(50%, 0) scale(1);\n  top: 13.675214%;\n  width: 180px;\n  height: 82px;\n  text-align: center; }\n\n.cmod-simpleRedpacket .cmod-simpleRedpacket-out .cmod-simpleRedpacket-title .cmod-simpleRedpacket-t1 {\n  font-size: 15px; }\n\n.cmod-simpleRedpacket .cmod-simpleRedpacket-out .cmod-simpleRedpacket-title .cmod-simpleRedpacket-t2 {\n  margin-top: 14px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-box-align: center; }\n\n.cmod-simpleRedpacket .cmod-simpleRedpacket-out .cmod-simpleRedpacket-title .cmod-simpleRedpacket-t2 .cmod-simpleRedpacket-tinner {\n  -webkit-box-flex: 1; }\n\n.cmod-simpleRedpacket .cmod-simpleRedpacket-out .cmod-simpleRedpacket-title .cmod-simpleRedpacket-t2 .cmod-simpleRedpacket-priceicon {\n  position: relative;\n  display: inline-block;\n  top: -4px;\n  width: 25px;\n  font-weight: bold; }\n\n.cmod-simpleRedpacket .cmod-simpleRedpacket-out .cmod-simpleRedpacket-title .cmod-simpleRedpacket-t2 .cmod-simpleRedpacket-priceicon em {\n  display: block;\n  font-size: 18px;\n  text-align: right; }\n\n.cmod-simpleRedpacket .cmod-simpleRedpacket-out .cmod-simpleRedpacket-title .cmod-simpleRedpacket-t2 .cmod-simpleRedpacket-priceicon span {\n  display: block;\n  margin-top: -1px;\n  font-size: 12px; }\n\n.cmod-simpleRedpacket .cmod-simpleRedpacket-out .cmod-simpleRedpacket-title .cmod-simpleRedpacket-t2 .cmod-simpleRedpacket-price {\n  font-size: 50px;\n  font-weight: bold; }\n\n.cmod-simpleRedpacket .cmod-simpleRedpacket-out .cmod-simpleRedpacket-main {\n  background: url(//gw.alicdn.com/tps/TB1G2G7LXXXXXXEapXXXXXXXXXX-392-92.png) no-repeat center center;\n  background-size: 100% 100%;\n  margin-left: -98px;\n  width: 196px;\n  height: 46px;\n  line-height: 42px;\n  font-size: 17px;\n  font-weight: bold;\n  text-shadow: 0px 2px 4px #cc4600;\n  position: absolute;\n  bottom: 36.931624%;\n  left: 50%;\n  text-align: center; }\n\n.cmod-simpleRedpacket .cmod-simpleRedpacket-out .cmod-simpleRedpacket-use {\n  margin-left: -72.5px;\n  width: 150px;\n  opacity: 0.8;\n  color: #fcd7d3;\n  font-size: 10px;\n  line-height: 14px;\n  position: absolute;\n  bottom: 23.8%;\n  left: 50%;\n  text-align: center; }\n\n.cmod-simpleRedpacket .cmod-simpleRedpacket-mask {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n  z-index: 10000;\n  display: block;\n  opacity: 0.6;\n  background: #000; }\n\n.cmod-seriousRedpacket .cmod-seriousRedpacket-out {\n  position: fixed;\n  left: 50%;\n  top: 20%;\n  margin-left: -135px;\n  width: 270px;\n  background: #fff;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n  z-index: 10000; }\n\n.cmod-seriousRedpacket .cmod-seriousRedpacket-out .cmod-seriousRedpacket-help {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 16.5px;\n  height: 16.5px;\n  background: url(//gtms04.alicdn.com/tps/i4/TB11cUBLXXXXXX0XXXXCBGNFFXX-24-24.png) no-repeat center;\n  background-size: 13px 13px; }\n\n.cmod-seriousRedpacket .cmod-seriousRedpacket-out .cmod-seriousRedpacket-inn {\n  padding: 50px 12px 12px;\n  text-align: center; }\n\n.cmod-seriousRedpacket .cmod-seriousRedpacket-out .cmod-seriousRedpacket-inn img {\n  width: 120px;\n  height: 112.5px; }\n\n.cmod-seriousRedpacket .cmod-seriousRedpacket-out .cmod-seriousRedpacket-inn .cmod-seriousRedpacket-t1 {\n  margin: 18px 0 6px 0;\n  color: #666;\n  font-size: 15px; }\n\n.cmod-seriousRedpacket .cmod-seriousRedpacket-out .cmod-seriousRedpacket-inn .cmod-seriousRedpacket-t1 span {\n  color: #ff5b45;\n  font-size: 20px;\n  font-weight: bold; }\n\n.cmod-seriousRedpacket .cmod-seriousRedpacket-out .cmod-seriousRedpacket-inn .cmod-seriousRedpacket-use {\n  margin: 0 18px;\n  line-height: 1.2;\n  color: #a5a5a5;\n  font-size: 12px; }\n\n.cmod-seriousRedpacket .cmod-seriousRedpacket-out .cmod-seriousRedpacket-main {\n  background: #ff5b45;\n  margin: 12px auto 0;\n  width: 245px;\n  height: 45px;\n  line-height: 46px;\n  font-size: 18px;\n  font-weight: bold;\n  left: 50%;\n  text-align: center;\n  color: #fff;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px; }\n\n.cmod-seriousRedpacket .cmod-seriousRedpacket-mask {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n  z-index: 10000;\n  display: block;\n  opacity: 0.6;\n  background: #000; }\n\n.cmod-seriousRedpacket .cmod-seriousRedpacket-mask span {\n  opacity: 0; }\n\n/* 交叉营销二期template */\n/* 入口型模板 */\n.cmod-entrance {\n  background-color: #FFFFFF;\n  width: 100%;\n  margin-top: 12px;\n  margin-bottom: 12px; }\n\n.cmod-entrance-title {\n  display: flex;\n  height: 1.04rem;\n  justify-content: flex-start;\n  align-items: center;\n  margin-left: 0.32rem;\n  font-size: 0.4rem;\n  color: #333333; }\n\n.cmod-entrance-item {\n  display: flex;\n  font-family: PingFangSC-Regular;\n  color: #3D3D3D;\n  height: 0.96rem;\n  padding: 10px 12px 14px 12px;\n  justify-content: space-between;\n  align-items: center; }\n\n.cmod-entrance-left {\n  display: flex;\n  align-items: center; }\n\n.cmod-entrance-left img {\n  width: 0.96rem;\n  height: 0.96rem;\n  margin-right: 0.4rem; }\n\n.cmod-entrance-desc {\n  height: 0.8rem;\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between; }\n\n.cmod-entrance-item-title {\n  line-height: 1;\n  font-size: 0.4rem;\n  max-width: 5.86667rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.cmod-entrance-item-subtitle {\n  line-height: 1;\n  font-size: 0.32rem;\n  max-width: 5.86667rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.cmod-entrance-highlight {\n  color: #FF4F00; }\n\n.cmod-entrance-benefit {\n  width: 2rem;\n  min-width: 66px;\n  height: 0.8rem;\n  background: #FF5000;\n  border-radius: 3px;\n  color: #FFFFFF;\n  font-size: 0.34667rem;\n  font-family: PingFangSC-Semibold;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n/* 入口型模板2 */\n.cmod-goods {\n  background-color: #f2f3f4;\n  width: 100%;\n  margin-top: 12px;\n  margin-bottom: 12px; }\n\n.cmod-goods-title {\n  display: flex;\n  height: 1.04rem;\n  justify-content: flex-start;\n  align-items: center;\n  padding-left: 0.32rem;\n  font-size: 0.4rem;\n  color: #333333;\n  background: linear-gradient(180deg, #ffffff, #f2f3f4); }\n\n.cmod-goods-items {\n  padding: 0 0.32rem 0.2rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n\n.cmod-goods-item {\n  padding-bottom: 0.24rem; }\n\n.cmod-goods-item-content {\n  position: relative;\n  background: #FFFFFF;\n  width: 4.6rem;\n  height: 6.85333rem; }\n\n.cmod-goods-item img {\n  width: 4.6rem;\n  height: 4.6rem; }\n\n.cmod-goods-mark {\n  height: 0.64rem;\n  line-height: 0.64rem;\n  border-radius: 24px 0 24px 24px;\n  font-family: PingFangSC-Medium;\n  color: #fff;\n  font-size: 0.32rem;\n  text-align: center;\n  display: inline-flex;\n  padding-left: 0.24rem;\n  padding-right: 0.24rem;\n  position: absolute;\n  left: 0.16rem;\n  top: 0.16rem;\n  background: rgba(0, 0, 0, 0.6); }\n\n.cmod-goods-mark-sep {\n  margin-left: 5px;\n  margin-right: 5px;\n  font-family: inherit; }\n\n.cmod-goods-recommend {\n  background: rgba(0, 0, 0, 0.5);\n  color: #FFFFFF;\n  font-size: 0.32rem;\n  line-height: 0.64rem;\n  top: 3.96rem;\n  position: absolute;\n  width: 4.6rem; }\n\n.cmod-goods-recommend-content {\n  line-height: 0.64rem;\n  padding-left: 0.16rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.cmod-goods-item-title {\n  margin: 0.24rem 0.16rem 0;\n  font-family: PingFangSC-Regular;\n  color: #3d3d3d;\n  font-size: 0.34667rem;\n  word-break: break-all;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  line-height: 0.52rem; }\n\n.cmod-goods-item-tag {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  position: absolute;\n  width: 4.12rem;\n  left: 0.16rem;\n  bottom: 0.24rem; }\n\n.cmod-goods-price {\n  font-family: PingFangSC-Medium;\n  color: #FF4F00;\n  font-size: 0.34667rem; }\n\n.cmod-goods-price .cm-price-hignlight {\n  font-size: 0.4rem; }\n\n.cmod-goods-summary {\n  color: #A5A5A5;\n  font-size: 0.29333rem; }\n", ""]);
	
	// exports


/***/ },
/* 9 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map