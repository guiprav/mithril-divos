define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.message = 'Hello World!';
  };
});
define('browser-frame',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BrowserFrame = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _desc, _value, _class, _descriptor;

  var BrowserFrame = exports.BrowserFrame = (_class = function () {
    function BrowserFrame() {
      _classCallCheck(this, BrowserFrame);

      _initDefineProp(this, 'url', _descriptor, this);
    }

    BrowserFrame.prototype.urlChanged = function urlChanged() {
      if (!this.iframe) {
        return;
      }

      this.iframe.src = this.url;
    };

    BrowserFrame.prototype.attached = function attached() {
      this.urlChanged();
    };

    _createClass(BrowserFrame, [{
      key: 'iframe',
      get: function get() {
        return this.el && this.el.querySelector('.browser-frame__iframe');
      }
    }]);

    return BrowserFrame;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'url', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('browser-nav',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BrowserNav = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _desc, _value, _class, _descriptor;

  var BrowserNav = exports.BrowserNav = (_class = function BrowserNav() {
    _classCallCheck(this, BrowserNav);

    _initDefineProp(this, 'url', _descriptor, this);
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'url', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('m-app',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MApp = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _desc, _value, _class, _descriptor;

  var MApp = exports.MApp = (_class = function MApp() {
    _classCallCheck(this, MApp);

    _initDefineProp(this, 'active', _descriptor, this);

    this.name = 'Desktop';
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'active', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('m-clock',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function leftPad(ch, len, str) {
    str = str.toString();
    len -= str.length;

    while (len-- > 0) {
      str = ch + str;
    }

    return str;
  }

  var MClock = exports.MClock = function () {
    function MClock() {
      _classCallCheck(this, MClock);

      var _arr = ['update'];

      for (var _i = 0; _i < _arr.length; _i++) {
        var k = _arr[_i];
        this[k] = this[k].bind(this);
      }
    }

    MClock.prototype.attached = function attached() {
      this.update();
      this.interval = setInterval(this.update, 100);
    };

    MClock.prototype.update = function update() {
      var now = new Date();

      var hh = leftPad(0, 2, now.getHours());
      var mm = leftPad(0, 2, now.getMinutes());
      var ss = leftPad(0, 2, now.getSeconds());

      this.label = hh + ':' + mm + ':' + ss;
    };

    return MClock;
  }();
});
define('m-top',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var MTop = exports.MTop = function () {
    function MTop() {
      _classCallCheck(this, MTop);
    }

    MTop.prototype.attached = function attached() {
      window.mTop = this;
    };

    MTop.prototype.dettached = function dettached() {
      delete window.mTop;
    };

    return MTop;
  }();
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('w-app',['exports', 'jquery', 'aurelia-framework', 'jquery-ui'], function (exports, _jquery, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.WApp = undefined;

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

  var WApp = exports.WApp = (_class = function () {
    function WApp() {
      _classCallCheck(this, WApp);

      _initDefineProp(this, 'name', _descriptor, this);

      _initDefineProp(this, 'title', _descriptor2, this);

      _initDefineProp(this, 'maximized', _descriptor3, this);

      _initDefineProp(this, 'x', _descriptor4, this);

      _initDefineProp(this, 'y', _descriptor5, this);

      _initDefineProp(this, 'width', _descriptor6, this);

      _initDefineProp(this, 'height', _descriptor7, this);

      _initDefineProp(this, 'dragging', _descriptor8, this);

      _initDefineProp(this, 'resizing', _descriptor9, this);

      this.url = 'https://suckless.org';
      var _arr = ['onFrame'];

      for (var _i = 0; _i < _arr.length; _i++) {
        var k = _arr[_i];
        this[k] = this[k].bind(this);
      }
    }

    WApp.prototype.maximizedChanged = function maximizedChanged() {
      console.log('maxChan');
      var method = this.maximized ? 'disable' : 'enable';

      this.$el.resizable(method).draggable(method);
    };

    WApp.prototype.attached = function attached() {
      this.title = this.title || this.url.replace(/^https?:\/\/|\/.+$/g, '');

      this.$el.resizable({
        containment: 'wm-root',
        handles: 'all'
      }).draggable({
        containment: 'wm-root',
        handle: '.w-top-bar'
      });

      this.maximizedChanged();

      if (!this.maximized) {
        this.height = (0, _jquery2.default)('wm-root').height();
      }

      this.onFrame();

      window.mTop.activeApp = this;
    };

    WApp.prototype.dettached = function dettached() {
      this.isDettached = true;
    };

    WApp.prototype.onFrame = function onFrame() {
      if (this.isDettached) {
        return;
      }

      requestAnimationFrame(this.onFrame);

      var draggingSel = '.ui-draggable-dragging';
      var resizingSel = '.ui-resizable-resizing';

      this.dragging = this.$el.is(draggingSel);
      this.resizing = this.$el.is(resizingSel);

      if (!this.maximized) {
        if (this.dragging || this.resizing) {
          var style = getComputedStyle(this.el);

          var values = {
            x: Number(style.left),
            y: Number(style.top),
            width: Number(style.width),
            height: Number(style.height)
          };

          for (var _iterator = Object.keys(values), _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
              if (_i2 >= _iterator.length) break;
              _ref = _iterator[_i2++];
            } else {
              _i2 = _iterator.next();
              if (_i2.done) break;
              _ref = _i2.value;
            }

            var k = _ref;

            if (this[k] === values[k]) {
              return;
            }

            this[k] = values[k];
          }
        } else {
          this.$el.css('left', this.x + 'px').css('top', this.y + 'px').css('width', this.width + 'px').css('height', this.height + 'px');
        }
      }
    };

    _createClass(WApp, [{
      key: '$el',
      get: function get() {
        if (!this._$el) {
          this._$el = (0, _jquery2.default)(this.el);
        }

        return this._$el;
      }
    }]);

    return WApp;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'name', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 'Web Browser';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'title', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'maximized', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'x', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 60;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'y', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 60;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'width', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return (0, _jquery2.default)('body').width() - 120;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'height', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return (0, _jquery2.default)('body').height() - 120;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'dragging', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'resizing', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('w-top-bar',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.WTopBar = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _desc, _value, _class, _descriptor, _descriptor2;

  var WTopBar = exports.WTopBar = (_class = function () {
    function WTopBar() {
      _classCallCheck(this, WTopBar);

      _initDefineProp(this, 'looks', _descriptor, this);

      _initDefineProp(this, 'maximized', _descriptor2, this);
    }

    WTopBar.prototype.toggleMaximized = function toggleMaximized() {
      this.maximized = !this.maximized;
    };

    return WTopBar;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'looks', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 'default';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'maximized', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('wm-root',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var WmRoot = exports.WmRoot = function WmRoot() {
    _classCallCheck(this, WmRoot);
  };
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./app.css\"></require>\n\n  <require from=\"./m-top\"></require>\n  <require from=\"./wm-root\"></require>\n\n  <video\n    autoplay\n    loop\n    muted\n    src=\"/wallpaper.webm\"\n    class=\"app__wallpaper\"\n  ></video>\n\n  <m-top></m-top>\n  <wm-root></wm-root>\n</template>\n"; });
define('text!app.css', ['module'], function(module) { module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans\");\n@import url(\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\");\n* {\n  box-sizing: border-box;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  margin: 0;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 13px;\n}\n.app__wallpaper {\n  transform: translate(-50%, -50%);\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  min-width: 100vw;\n  min-height: 100vh;\n  width: auto;\n  height: auto;\n  pointer-events: none;\n}\n.ui-resizable {\n  position: relative;\n}\n.ui-resizable-handle {\n  position: absolute;\n  font-size: 0.1px;\n  display: block;\n}\n.ui-resizable-disabled .ui-resizable-handle,\n.ui-resizable-autohide .ui-resizable-handle {\n  display: none;\n}\n.ui-resizable-n {\n  cursor: n-resize;\n  height: 7px;\n  width: 100%;\n  top: -5px;\n  left: 0;\n}\n.ui-resizable-s {\n  cursor: s-resize;\n  height: 7px;\n  width: 100%;\n  bottom: -5px;\n  left: 0;\n}\n.ui-resizable-e {\n  cursor: e-resize;\n  width: 7px;\n  right: -5px;\n  top: 0;\n  height: 100%;\n}\n.ui-resizable-w {\n  cursor: w-resize;\n  width: 7px;\n  left: -5px;\n  top: 0;\n  height: 100%;\n}\n.ui-resizable-se {\n  cursor: se-resize;\n  width: 12px;\n  height: 12px;\n  right: 1px;\n  bottom: 1px;\n}\n.ui-resizable-sw {\n  cursor: sw-resize;\n  width: 9px;\n  height: 9px;\n  left: -5px;\n  bottom: -5px;\n}\n.ui-resizable-nw {\n  cursor: nw-resize;\n  width: 9px;\n  height: 9px;\n  left: -5px;\n  top: -5px;\n}\n.ui-resizable-ne {\n  cursor: ne-resize;\n  width: 9px;\n  height: 9px;\n  right: -5px;\n  top: -5px;\n}\n"; });
define('text!browser-frame.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./browser-frame.css\"></require>\n\n  <div ref=\"el\" class=\"browser-frame\">\n    <iframe class=\"browser-frame__iframe\"></iframe>\n  </div>\n</template>\n"; });
define('text!browser-frame.css', ['module'], function(module) { module.exports = "browser-frame {\n  position: relative;\n  flex-grow: 1;\n}\n.browser-frame {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  border: 1px solid #757575;\n  border-top: 0;\n  background-color: #fff;\n}\n.browser-frame__iframe {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n"; });
define('text!browser-nav.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./browser-nav.css\"></require>\n\n  <div class=\"browser-nav\">\n    <input\n      autocomplete=\"off\"\n      autocorrect=\"off\"\n      autocapitalize=\"off\"\n      spellcheck=\"false\"\n      value.bind=\"url\"\n      class=\"browser-nav__url-input\"\n    >\n  </div>\n</template>\n"; });
define('text!browser-nav.css', ['module'], function(module) { module.exports = ".browser-nav {\n  display: flex;\n  align-items: center;\n  height: 36px;\n  border: 1px solid #949494;\n  border-top-color: #666;\n  border-bottom-color: #89898b;\n  border-top: 0;\n  padding: 4px 8px;\n  background-image: linear-gradient(to bottom, #dedede 0%, #aaaaab 100%);\n}\n.browser-nav__url-input {\n  width: 100%;\n  height: 27px;\n  border: 1px solid #bdbdbd;\n  border-radius: 4px;\n  padding: 0 7px;\n  padding-top: 2px;\n  color: #111;\n}\n.browser-nav__url-input:focus {\n  outline: none;\n}\n"; });
define('text!m-app.css', ['module'], function(module) { module.exports = ""; });
define('text!m-app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./m-app.css\"></require>\n  <require from=\"./w-top-bar\"></require>\n\n  <div class=\"\n    m-app\n    ${active.maximized ? 'm-app--maximized' : ''}\n  \">\n    <template if.bind=\"!active.maximized\">\n      ${active.name || name}\n    </template>\n\n    <template if.bind=\"active.maximized\">\n      <w-top-bar\n        looks=\"inline\"\n        maximized.two-way=\"active.maximized\"\n      >\n        <span slot=\"title\">\n          ${active.title ?\n          active.title + ' - ' + active.name :\n          active.name}\n        </span>\n      </w-top-bar>\n    </template>\n  </div>\n</template>\n"; });
define('text!m-clock.css', ['module'], function(module) { module.exports = ""; });
define('text!m-clock.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./m-clock.css\"></require>\n\n  <div class=\"m-clock\">\n    ${label}\n  </div>\n</template>\n"; });
define('text!m-top.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./m-top.css\"></require>\n  <require from=\"./m-app\"></require>\n  <require from=\"./m-clock\"></require>\n\n  <div class=\"\n    m-top\n    ${activeApp.maximized ? 'm-top--maximized' : ''}\n  \">\n    <div class=\"m-top__left-box\">\n      <m-app active.bind=\"activeApp\"></m-app>\n    </div>\n\n    <div class=\"m-top__right-box\">\n      <m-clock></m-clock>\n    </div>\n  </div>\n</template>\n"; });
define('text!m-top.css', ['module'], function(module) { module.exports = "m-top {\n  z-index: 100;\n}\n.m-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 24px;\n  padding: 0 10px;\n  background-image: linear-gradient(to bottom, #5a584f 0%, #403f3a 100%);\n  color: #dfdbd2;\n  font-weight: bold;\n  box-shadow: 0 3px 3px 0 rgba(0,0,0,0.75);\n}\n.m-top--maximized {\n  box-shadow: none;\n}\n.m-top__right-box {\n  display: flex;\n}\n.m-top__right-box > * + * {\n  margin-left: 3px;\n}\n"; });
define('text!w-app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./w-app.css\"></require>\n  <require from=\"./w-top-bar\"></require>\n  <require from=\"./browser-nav\"></require>\n  <require from=\"./browser-frame\"></require>\n\n  <div ref=\"el\" class=\"\n    w-app\n    ${maximized ? 'w-app--maximized' : ''}\n  \">\n    <w-top-bar maximized.two-way=\"maximized\">\n      <span slot=\"title\">\n        ${title || name}\n      </span>\n    </w-top-bar>\n\n    <browser-nav\n      url.bind=\"url\"\n    ></browser-nav>\n\n    <browser-frame\n      url.bind=\"url\"\n    ></browser-frame>\n  </div>\n</template>\n"; });
define('text!w-app.css', ['module'], function(module) { module.exports = ".w-app {\n  display: flex;\n  flex-direction: column;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  box-shadow: 0 0 20px rgba(0,0,0,0.5);\n}\n.w-app--maximized {\n  position: absolute;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  width: auto !important;\n  height: auto !important;\n}\n.w-app--maximized w-top-bar {\n  display: none;\n}\n"; });
define('text!w-top-bar.css', ['module'], function(module) { module.exports = ".w-top-bar {\n  position: relative;\n  display: flex;\n  color: #fff;\n}\n.w-top-bar__close-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 17px;\n  height: 17px;\n  border: 1px solid #43423d;\n  border-radius: 50%;\n}\n.w-top-bar__close-btn {\n  background-image: linear-gradient(to bottom, #f28463 0%, #db4e1d 100%);\n  color: #563f35;\n  text-shadow: 0 1px rgba(200,200,200,0.35);\n}\n.w-top-bar__close-btn:before {\n  content: '×';\n}\n.w-top-bar__max-toggle {\n  margin-left: 10px;\n}\n.w-top-bar__title {\n  margin-left: 10px;\n}\n.w-top-bar--default {\n  height: 28px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  padding: 5px 10px;\n  background-image: linear-gradient(to bottom, #626055 0%, #41403b 100%);\n}\n.w-top-bar--default:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 1px;\n  height: 26px;\n  border-radius: 5px;\n  box-shadow: inset 0px 2px 0px -1px rgba(150,150,150,0.15);\n  pointer-events: none;\n}\n"; });
define('text!w-top-bar.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./w-top-bar.css\"></require>\n\n  <div class=\"\n    w-top-bar\n    w-top-bar--${looks}\n  \">\n    <div class=\"w-top-bar__left-box\">\n      <button class=\"w-top-bar__close-btn\">\n      </button>\n\n      <button\n        class=\"w-top-bar__max-toggle\"\n        click.delegate=\"toggleMaximized()\"\n      >\n        [max]\n      </button>\n    </div>\n\n    <div class=\"w-top-bar__title\">\n      <slot name=\"title\"></slot>\n    </div>\n  </div>\n</template>\n"; });
define('text!wm-root.css', ['module'], function(module) { module.exports = "wm-root {\n  position: relative;\n  flex-grow: 1;\n}\n"; });
define('text!wm-root.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./wm-root.css\"></require>\n  <require from=\"./w-app\"></require>\n\n  <w-app name=\"Web Browser\"></w-app>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map