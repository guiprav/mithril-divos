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

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);

      this.keyboardEventNames = ['keydown', 'keypress', 'keyup'];
      var _arr = ['onKeyboardEvent'];

      for (var _i = 0; _i < _arr.length; _i++) {
        var k = _arr[_i];
        this[k] = this[k].bind(this);
      }
    }

    App.prototype.attached = function attached() {
      for (var _iterator = this.keyboardEventNames, _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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

        document.addEventListener(k, this.onKeyboardEvent);
      }

      window.app = this;
    };

    App.prototype.dettached = function dettached() {
      for (var _iterator2 = this.keyboardEventNames, _isArray2 = Array.isArray(_iterator2), _i3 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i3 >= _iterator2.length) break;
          _ref2 = _iterator2[_i3++];
        } else {
          _i3 = _iterator2.next();
          if (_i3.done) break;
          _ref2 = _i3.value;
        }

        var k = _ref2;

        document.removeEventListener(k, this.onKeyboardEvent);
      }

      delete window.app;
    };

    App.prototype.onKeyboardEvent = function onKeyboardEvent(ev) {
      switch (ev.key) {
        case 'Meta':
          this.metaKey = ev.type === 'keydown';
          break;

        case 'q':
          {
            if (ev.type !== 'keydown' || !ev.metaKey) {
              break;
            }

            var activeWnd = wmRoot.active;
            activeWnd && activeWnd.kill();

            break;
          }

        case 'm':
          {
            if (ev.type !== 'keydown' || !ev.metaKey) {
              break;
            }

            var _activeWnd = wmRoot.active;

            if (!_activeWnd) {
              break;
            }

            _activeWnd.maximized = !_activeWnd.maximized;

            break;
          }
      }
    };

    return App;
  }();
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

  var BrowserNav = exports.BrowserNav = (_class = function () {
    function BrowserNav() {
      _classCallCheck(this, BrowserNav);

      _initDefineProp(this, 'url', _descriptor, this);
    }

    BrowserNav.prototype.urlChanged = function urlChanged() {
      this._url = this.url;
    };

    BrowserNav.prototype.attached = function attached() {
      var _this = this;

      this.urlChanged();

      var $input = $(this.el).find('.browser-nav__url-input');

      $input.on('dblclick', function () {
        _this.active = true;
        $input.focus().select();
      });

      $input.on('click focus', function (ev) {
        if (!_this.active) {
          $input.blur();
        }
      });

      $input.on('keydown', function (ev) {
        switch (ev.key) {
          case 'Escape':
            requestAnimationFrame(function () {
              _this._url = _this.url;
            });

            _this.active = false;
            $input.blur();
            break;

          case 'Enter':
            _this.navigate($input.val());
            _this.active = false;
            $input.blur();
            break;
        }
      });
    };

    BrowserNav.prototype.navigate = function navigate(url) {
      this.url = this._url = url;
    };

    return BrowserNav;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'url', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('browser',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Browser = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Browser = exports.Browser = function () {
    function Browser() {
      _classCallCheck(this, Browser);

      this.url = 'https://suckless.org';
    }

    Browser.prototype.activate = function activate(data) {
      Object.assign(this, data);
    };

    return Browser;
  }();
});
define('desktop-menu-tags',['exports', 'jquery', 'aurelia-framework'], function (exports, _jquery, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DesktopMenuTags = undefined;

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

  var digitsRe = /^[0-9]$/;

  var DesktopMenuTags = exports.DesktopMenuTags = (_class = function () {
    DesktopMenuTags.prototype.activeChanged = function activeChanged() {
      var activeTag = this.active;

      if (!activeTag) {
        (0, _jquery2.default)('.wnd').hide();

        if (window.wmRoot) {
          wmRoot.active = null;
        }

        return;
      }

      (0, _jquery2.default)('.wnd:not(.wnd--tag_' + activeTag.name + ')').hide();

      var $showing = (0, _jquery2.default)('.wnd--tag_' + activeTag.name);

      if (!$showing.length && window.wmRoot) {
        wmRoot.active = null;
      }

      $showing.show();

      var lastActiveWnd = activeTag.lastActive;

      if (window.wmRoot) {
        wmRoot.active = lastActiveWnd;
      }
    };

    function DesktopMenuTags() {
      _classCallCheck(this, DesktopMenuTags);

      this.tags = [];

      _initDefineProp(this, 'active', _descriptor, this);

      var _arr = ['onKeyboardEvent'];

      for (var _i = 0; _i < _arr.length; _i++) {
        var k = _arr[_i];
        this[k] = this[k].bind(this);
      }

      this.tags = [{ name: 'web', sym: '\uE1BA' }, { name: 'term', sym: '\uE21A' }, { name: 'draw', sym: '\uE858' }, { name: 'im', sym: '\uE11F' }, { name: 'game', sym: '\uE216' }];

      this.active = this.tags[0];
    }

    DesktopMenuTags.prototype.attached = function attached() {
      var _arr2 = ['keydown', 'keypress', 'keyup'];

      for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
        var ev = _arr2[_i2];
        document.addEventListener(ev, this.onKeyboardEvent);
      }

      window.desktopMenuTags = this;
    };

    DesktopMenuTags.prototype.dettached = function dettached() {
      delete window.desktopMenuTags;
    };

    DesktopMenuTags.prototype.onKeyboardEvent = function onKeyboardEvent(ev) {
      if (ev.type === 'keydown' && ev.metaKey) {
        if (digitsRe.test(ev.key)) {
          this.switchTagCmd(Number(ev.key));
        }
      }
    };

    DesktopMenuTags.prototype.switchTagCmd = function switchTagCmd(i) {
      if (i === 0) {
        i = 10;
      }

      var tag = this.tags[i - 1];

      if (!tag) {
        return;
      }

      if (tag === this.active) {
        this.active = null;
        return;
      }

      this.active = tag;
    };

    return DesktopMenuTags;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'active', [_aureliaFramework.observable], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  })), _class);
});
define('desktop-menu',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var DesktopMenu = exports.DesktopMenu = function () {
    function DesktopMenu() {
      _classCallCheck(this, DesktopMenu);
    }

    DesktopMenu.prototype.attached = function attached() {
      var _this = this;

      requestAnimationFrame(function () {
        _this.wmRoot = window.wmRoot;
      });

      window.desktopMenu = this;
    };

    DesktopMenu.prototype.dettached = function dettached() {
      delete window.desktopMenu;
    };

    return DesktopMenu;
  }();
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
define('menu-clock',['exports', 'moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MenuClock = undefined;

  var _moment2 = _interopRequireDefault(_moment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var MenuClock = exports.MenuClock = function () {
    function MenuClock() {
      _classCallCheck(this, MenuClock);

      var _arr = ['update'];

      for (var _i = 0; _i < _arr.length; _i++) {
        var k = _arr[_i];
        this[k] = this[k].bind(this);
      }
    }

    MenuClock.prototype.attached = function attached() {
      this.update();
      this.interval = setInterval(this.update, 100);
    };

    MenuClock.prototype.update = function update() {
      this.date = (0, _moment2.default)().format('ddd DD MMM');
      this.time = (0, _moment2.default)().format('hh:mm');
    };

    return MenuClock;
  }();
});
define('menu-im',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var MenuIm = exports.MenuIm = function MenuIm() {
    _classCallCheck(this, MenuIm);

    this.whom = 'arthur';
    this.when = '06:52';
  };
});
define('menu-netmon',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var MenuNetmon = exports.MenuNetmon = function () {
    MenuNetmon.prototype.rxChanged = function rxChanged() {
      this._rx = Math.round(this.rx / 1024);
    };

    MenuNetmon.prototype.txChanged = function txChanged() {
      this._tx = Math.round(this.tx / 1024);
    };

    function MenuNetmon() {
      _classCallCheck(this, MenuNetmon);

      this.rx = 1024;
      this.tx = 2048;

      this.rxChanged();
      this.txChanged();
    }

    return MenuNetmon;
  }();
});
define('menu-vol-ctrl',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MenuVolCtrl = undefined;

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

  var MenuVolCtrl = exports.MenuVolCtrl = (_class = function () {
    MenuVolCtrl.prototype.volumeChanged = function volumeChanged() {
      this._volume = Math.round(this.volume * 100);
    };

    function MenuVolCtrl() {
      _classCallCheck(this, MenuVolCtrl);

      _initDefineProp(this, 'volume', _descriptor, this);

      this.volumeChanged();
    }

    return MenuVolCtrl;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'volume', [_aureliaFramework.observable], {
    enumerable: true,
    initializer: function initializer() {
      return 1;
    }
  })), _class);
});
define('menu-wnd-title',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MenuWndTitle = undefined;

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

  var MenuWndTitle = exports.MenuWndTitle = (_class = function () {
    function MenuWndTitle() {
      _classCallCheck(this, MenuWndTitle);

      _initDefineProp(this, 'active', _descriptor, this);
    }

    MenuWndTitle.prototype.attached = function attached() {
      var _this = this;

      requestAnimationFrame(function () {
        _this.wmRoot = window.wmRoot;
      });
    };

    return MenuWndTitle;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'active', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('wm-root',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.WmRoot = undefined;

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

  var WmRoot = exports.WmRoot = (_class = function () {
    function WmRoot() {
      _classCallCheck(this, WmRoot);

      _initDefineProp(this, 'active', _descriptor, this);

      this.wnds = [{ tag: 'web', vm: 'browser' }];
    }

    WmRoot.prototype.activeChanged = function activeChanged() {
      var activeWnd = this.active;
      var activeTag = desktopMenuTags.active;

      if (!activeTag) {
        return;
      }

      activeTag.lastActive = activeWnd;
    };

    WmRoot.prototype.attached = function attached() {
      window.wmRoot = this;
    };

    WmRoot.prototype.dettached = function dettached() {
      delete window.wmRoot;
    };

    return WmRoot;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'active', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('wnd',['exports', 'jquery', 'aurelia-framework', 'jquery-ui'], function (exports, _jquery, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Wnd = undefined;

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

  var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;

  var Wnd = exports.Wnd = (_class = function () {
    function Wnd() {
      _classCallCheck(this, Wnd);

      _initDefineProp(this, 'tag', _descriptor, this);

      _initDefineProp(this, 'name', _descriptor2, this);

      _initDefineProp(this, 'title', _descriptor3, this);

      _initDefineProp(this, 'maximized', _descriptor4, this);

      _initDefineProp(this, 'x', _descriptor5, this);

      _initDefineProp(this, 'y', _descriptor6, this);

      _initDefineProp(this, 'width', _descriptor7, this);

      _initDefineProp(this, 'height', _descriptor8, this);

      _initDefineProp(this, 'dragging', _descriptor9, this);

      _initDefineProp(this, 'resizing', _descriptor10, this);

      _initDefineProp(this, 'vm', _descriptor11, this);

      this.params = { wnd: this };

      var _arr = ['onFrame'];
      for (var _i = 0; _i < _arr.length; _i++) {
        var k = _arr[_i];
        this[k] = this[k].bind(this);
      }
    }

    Wnd.prototype.maximizedChanged = function maximizedChanged() {
      var method = this.maximized ? 'disable' : 'enable';

      this.$el.resizable(method).draggable(method);
    };

    Wnd.prototype.makeActive = function makeActive() {
      wmRoot.active = this;
    };

    Wnd.prototype.attached = function attached() {
      var _this = this;

      this.$el.data('model', this);

      this.$el.resizable({ handles: 'all' }).draggable();

      this.$el.on('click', function () {
        return _this.makeActive();
      }).on('dragstart', function () {
        return _this.makeActive();
      }).on('resizestart', function () {
        return _this.makeActive();
      });

      var activeTag = desktopMenuTags.active;

      if (this.tag !== activeTag.name) {
        this.$el.hide();
      }

      this.maximizedChanged();
      this.onFrame();
    };

    Wnd.prototype.kill = function kill() {
      if (wmRoot.active === this) {
        wmRoot.active = null;
      }

      wmRoot.wnds.splice(wmRoot.wnds.indexOf(this), 1);

      this.dead = true;
    };

    Wnd.prototype.checkFocus = function checkFocus() {
      return this.el === document.activeElement || _jquery2.default.contains(this.el, document.activeElement);
    };

    Wnd.prototype.onFrame = function onFrame() {
      if (this.dead) {
        return;
      }

      requestAnimationFrame(this.onFrame);

      if (this.checkFocus() && !this.active) {
        this.makeActive();
      }

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

    _createClass(Wnd, [{
      key: '$el',
      get: function get() {
        if (!this._$el) {
          this._$el = (0, _jquery2.default)(this.el);
        }

        return this._$el;
      }
    }, {
      key: 'active',
      get: function get() {
        return window.wmRoot && wmRoot.active === this;
      }
    }]);

    return Wnd;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'tag', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'name', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 'Web Browser';
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'title', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 'Web Browser';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'maximized', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'x', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 70;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'y', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 60;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'width', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return (0, _jquery2.default)('body').width() - 720;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'height', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return (0, _jquery2.default)('body').height() - 360;
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'dragging', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'resizing', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, 'vm', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./app.css\"></require>\n\n  <require from=\"./desktop-menu\"></require>\n  <require from=\"./wm-root\"></require>\n\n  <div class=\"\n    app\n    ${metaKey ? 'meta-key' : ''}\n  \">\n    <desktop-menu></desktop-menu>\n    <wm-root></wm-root>\n  </div>\n</template>\n"; });
define('text!app.css', ['module'], function(module) { module.exports = "@import url(\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\");\n@font-face {\n  font-family: 'Droid Sans Mono Awesome';\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"droid-sans-mono-awesome.ttf\");\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  --desktop-menu-bg: #1d1f21;\n  --desktop-menu-bg-2: #282a2e;\n  --green-text: #b5bd68;\n  --grey-text: #373b41;\n  --purple-text: #b294bb;\n  --red-text: #c66;\n  --white-text: #c5c8c6;\n  --yellow-text: #f0c674;\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  margin: 0;\n  font-family: 'Droid Sans Mono Awesome', monospace;\n  font-size: 15px;\n  background-color: #000;\n  background-image: url(\"wallpaper.jpg\");\n  background-size: cover;\n}\n.left-sep {\n  position: relative;\n  margin-left: 1.4em;\n  padding-left: 0.25em;\n  padding-right: 0.45em;\n  background-color: var(--bg-color);\n}\n.left-sep:after {\n  content: '';\n  position: absolute;\n  right: 100%;\n  top: 0;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n  border-width: 0.74em;\n  border-right-color: var(--bg-color);\n}\n.left-sep:before {\n  content: '';\n  position: absolute;\n  right: calc(100% + 1px);\n  top: 0;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n  border-width: 0.74em;\n  border-right-color: var(--sep-color);\n}\n.right-sep {\n  position: relative;\n  margin-right: 1.4em;\n  padding-right: 0.25em;\n  padding-left: 0.45em;\n  background-color: var(--bg-color);\n}\n.right-sep:after {\n  content: '';\n  position: absolute;\n  left: 100%;\n  top: 0;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n  border-width: 0.74em;\n  border-left-color: var(--bg-color);\n}\n.right-sep:before {\n  content: '';\n  position: absolute;\n  left: calc(100% + 1px);\n  top: 0;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n  border-width: 0.74em;\n  border-left-color: var(--sep-color);\n}\n.join-left-sep {\n  padding-left: 2em;\n  margin-left: -2em;\n}\n.join-right-sep {\n  padding-right: 2em;\n  margin-right: -2em;\n}\n.ui-resizable {\n  position: relative;\n}\n.ui-resizable-handle {\n  position: absolute;\n  font-size: 0.1px;\n  display: block;\n}\n.ui-resizable-disabled .ui-resizable-handle,\n.ui-resizable-autohide .ui-resizable-handle {\n  display: none;\n}\n.ui-resizable-n {\n  cursor: n-resize;\n  height: 7px;\n  width: 100%;\n  top: -5px;\n  left: 0;\n}\n.ui-resizable-s {\n  cursor: s-resize;\n  height: 7px;\n  width: 100%;\n  bottom: -5px;\n  left: 0;\n}\n.ui-resizable-e {\n  cursor: e-resize;\n  width: 7px;\n  right: -5px;\n  top: 0;\n  height: 100%;\n}\n.ui-resizable-w {\n  cursor: w-resize;\n  width: 7px;\n  left: -5px;\n  top: 0;\n  height: 100%;\n}\n.ui-resizable-se {\n  cursor: se-resize;\n  width: 12px;\n  height: 12px;\n  right: 1px;\n  bottom: 1px;\n}\n.ui-resizable-sw {\n  cursor: sw-resize;\n  width: 9px;\n  height: 9px;\n  left: -5px;\n  bottom: -5px;\n}\n.ui-resizable-nw {\n  cursor: nw-resize;\n  width: 9px;\n  height: 9px;\n  left: -5px;\n  top: -5px;\n}\n.ui-resizable-ne {\n  cursor: ne-resize;\n  width: 9px;\n  height: 9px;\n  right: -5px;\n  top: -5px;\n}\n"; });
define('text!browser-frame.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./browser-frame.css\"></require>\n\n  <div ref=\"el\" class=\"browser-frame\">\n    <iframe class=\"browser-frame__iframe\"></iframe>\n  </div>\n</template>\n"; });
define('text!browser-frame.css', ['module'], function(module) { module.exports = "browser-frame {\n  position: relative;\n  flex-grow: 1;\n}\n.browser-frame {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  border: 1px solid #757575;\n  border-top: 0;\n  background-color: #fff;\n}\n.browser-frame__iframe {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.ui-draggable-dragging .browser-frame__iframe,\n.ui-resizable-resizing .browser-frame__iframe {\n  pointer-events: none;\n}\n"; });
define('text!browser-nav.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./browser-nav.css\"></require>\n\n  <div ref=\"el\" class=\"browser-nav\">\n    <input\n      autocomplete=\"off\"\n      autocorrect=\"off\"\n      autocapitalize=\"off\"\n      spellcheck=\"false\"\n      value.bind=\"_url\"\n\n      class=\"\n        browser-nav__url-input\n        ${active ? 'browser-nav__url-input--active' : ''}\n      \"\n    >\n  </div>\n</template>\n"; });
define('text!browser-nav.css', ['module'], function(module) { module.exports = ".browser-nav__url-input {\n  width: 100%;\n  height: 22px;\n  border: 0;\n  padding: 0 7px;\n  padding-top: 2px;\n  background-color: var(--desktop-menu-bg);\n  color: #fff;\n  cursor: default;\n}\n.browser-nav__url-input:focus {\n  outline: none;\n}\n.browser-nav__url-input--active {\n  cursor: initial;\n}\n"; });
define('text!browser.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./browser.css\"></require>\n  <require from=\"./browser-nav\"></require>\n  <require from=\"./browser-frame\"></require>\n\n  <div class=\"browser\">\n    <browser-nav\n      if.bind=\"!wnd.maximized\"\n      url.two-way=\"url\"\n    ></browser-nav>\n\n    <browser-frame url.two-way=\"url\"></browser-frame>\n  </div>\n</template>\n"; });
define('text!browser.css', ['module'], function(module) { module.exports = ".wnd--vm_browser.wnd--floating {\n  overflow: hidden;\n  border-radius: 4px;\n}\n.browser {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n"; });
define('text!desktop-menu-tags.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./desktop-menu-tags.css\"></require>\n\n  <div class=\"desktop-menu-tags right-sep\">\n    <button\n      repeat.for=\"tag of tags\"\n      click.delegate=\"switchTagCmd($index + 1)\"\n\n      class=\"\n        desktop-menu-tags__tag\n        desktop-menu-tags__tag--${tag.name}\n        ${tag === active ?\n        'desktop-menu-tags__tag--active' : ''}\n      \"\n    >\n      ${tag.sym}\n    </button>\n  </div>\n</template>\n"; });
define('text!desktop-menu-tags.css', ['module'], function(module) { module.exports = "desktop-menu-tags,\n.desktop-menu-tags {\n  display: flex;\n}\n.desktop-menu-tags {\n  --sep-color: var(--grey-text);\n  --bg-color: var(--desktop-menu-bg);\n}\n.desktop-menu-tags__tag {\n  position: relative;\n  display: flex;\n  line-height: inherit;\n  border: 0;\n  padding: 0;\n  padding-left: 8px;\n  padding-right: 5px;\n  font-family: inherit;\n  color: var(--grey-text);\n  background-color: transparent;\n}\n.desktop-menu-tags__tag:focus {\n  outline: none;\n}\n.desktop-menu-tags__tag:before {\n  content: '';\n  position: absolute;\n  box-sizing: border-box;\n  left: 2px;\n  top: 2px;\n  width: 3px;\n  height: 3px;\n  border: 1px solid #373b41;\n}\n.desktop-menu-tags__tag--active {\n  color: #c5c8c6;\n}\n.desktop-menu-tags__tag--active:before {\n  border: 1px solid transparent;\n  background-color: #c5c8c6;\n}\n"; });
define('text!desktop-menu.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./desktop-menu.css\"></require>\n  <require from=\"./desktop-menu-tags\"></require>\n  <require from=\"./menu-wnd-title\"></require>\n  <require from=\"./menu-vol-ctrl\"></require>\n  <require from=\"./menu-clock\"></require>\n\n  <div class=\"desktop-menu ${wmRoot.active.maximized ?\n    'desktop-menu--maximized' : ''\n  }\">\n    <div class=\"desktop-menu__left-box\">\n      <desktop-menu-tags></desktop-menu-tags>\n      <menu-wnd-title></menu-wnd-title>\n    </div>\n\n    <div class=\"desktop-menu__right-box\">\n      <menu-vol-ctrl></menu-vol-ctrl>\n      <menu-clock></menu-clock>\n    </div>\n  </div>\n</template>\n"; });
define('text!desktop-menu.css', ['module'], function(module) { module.exports = "desktop-menu {\n  z-index: 100;\n}\n.desktop-menu {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  line-height: 22px;\n  background-color: var(--desktop-menu-bg);\n  color: var(--white-text);\n  user-select: none;\n  cursor: default;\n  box-shadow: 0 1px 10px rgba(0,0,0,0.5);\n}\n.desktop-menu--maximized {\n  box-shadow: none;\n}\n.desktop-menu__left-box,\n.desktop-menu__right-box {\n  display: flex;\n}\n.desktop-menu__right-box > * + * {\n  margin-left: 3px;\n}\n"; });
define('text!menu-clock.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./menu-clock.css\"></require>\n\n  <div class=\"menu-clock\">\n    <div class=\"menu-clock__date left-sep join-right-sep\">\n      &#xe846; ${date}\n    </div>\n\n    <div class=\"menu-clock__time left-sep\">\n      ${time}\n    </div>\n  </div>\n</template>\n"; });
define('text!menu-clock.css', ['module'], function(module) { module.exports = ".menu-clock {\n  display: flex;\n}\n.menu-clock__date {\n  --sep-color: var(--desktop-menu-bg);\n  --bg-color: var(--desktop-menu-bg);\n}\n.menu-clock__time {\n  --sep-color: var(--white-text);\n  --bg-color: var(--desktop-menu-bg);\n}\n"; });
define('text!menu-im.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./menu-im.css\"></require>\n\n  <div class=\"menu-im\">\n    <div class=\"menu-im__whom left-sep\">\n      &#xe82b; ${whom}\n    </div>\n\n    <div class=\"menu-im__when left-sep join-right-sep\">\n      ${when}\n    </div>\n  </div>\n</template>\n"; });
define('text!menu-im.css', ['module'], function(module) { module.exports = ".menu-im {\n  display: flex;\n  color: var(--yellow-text);\n}\n.menu-im__whom {\n  --sep-color: var(--desktop-menu-bg);\n  --bg-color: var(--desktop-menu-bg);\n}\n.menu-im__when {\n  --sep-color: var(--yellow-text);\n  --bg-color: var(--desktop-menu-bg);\n}\n"; });
define('text!menu-netmon.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./menu-netmon.css\"></require>\n\n  <div class=\"menu-netmon\">\n    <div class=\"menu-netmon__rx left-sep\">\n      &#xe8a1; ${_rx}K\n    </div>\n\n    <div class=\"menu-netmon__tx left-sep join-right-sep\">\n      &#xe8a0; ${_tx}K\n    </div>\n  </div>\n</template>\n"; });
define('text!menu-netmon.css', ['module'], function(module) { module.exports = ".menu-netmon {\n  display: flex;\n}\n.menu-netmon__rx {\n  --sep-color: var(--desktop-menu-bg);\n  --bg-color: var(--desktop-menu-bg);\n  color: var(--green-text);\n}\n.menu-netmon__tx {\n  --sep-color: var(--desktop-menu-bg-2);\n  --bg-color: var(--desktop-menu-bg);\n  color: var(--red-text);\n}\n"; });
define('text!menu-vol-ctrl.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./menu-vol-ctrl.css\"></require>\n\n  <div class=\"menu-vol-ctrl left-sep join-right-sep\">\n    &#xe13d; ${_volume}%\n  </div>\n</template>\n"; });
define('text!menu-vol-ctrl.css', ['module'], function(module) { module.exports = ".menu-vol-ctrl {\n  --sep-color: var(--desktop-menu-bg-2);\n  --bg-color: var(--desktop-menu-bg-2);\n  color: var(--purple-text);\n}\n"; });
define('text!menu-wnd-title.css', ['module'], function(module) { module.exports = ""; });
define('text!menu-wnd-title.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./menu-wnd-title.css\"></require>\n\n  <div class=\"menu-wnd-title ${wmRoot.active.maximized ?\n    'menu-wnd-title--maximized' : ''\n  }\">\n    ${wmRoot.active.title || wmRoot.active.name || name}\n  </div>\n</template>\n"; });
define('text!wm-root.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./wm-root.css\"></require>\n  <require from=\"./wnd\"></require>\n\n  <wnd\n    repeat.for=\"wnd of wnds\"\n    tag.bind=\"wnd.tag\"\n    vm.bind=\"wnd.vm\"\n    view-model.ref=\"wnd.ref\"\n  ></wnd>\n</template>\n"; });
define('text!wm-root.css', ['module'], function(module) { module.exports = "wm-root {\n  position: fixed;\n  left: 0;\n  top: 22px;\n  width: 100vw;\n  height: calc(100vh - 22px);\n}\n"; });
define('text!wnd.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./wnd.css\"></require>\n\n  <div ref=\"el\" class=\"\n    wnd\n    wnd--tag_${tag}\n    wnd--vm_${vm}\n    ${active ? 'wnd--active' : ''}\n    ${maximized ? 'wnd--maximized' : 'wnd--floating'}\n  \">\n    <compose\n      view-model.ref=\"compose\"\n      view-model=\"./${vm}\"\n      model.bind=\"params\"\n      class=\"wnd__compose\"\n    ></compose>\n  </div>\n</template>\n"; });
define('text!wnd.css', ['module'], function(module) { module.exports = ".wnd {\n  display: flex;\n  flex-direction: column;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  box-shadow: 0 0 20px rgba(0,0,0,0.5);\n  transition: opacity ease 0.2s;\n}\n.wnd.ui-draggable-dragging {\n  opacity: 0.8;\n}\n.wnd--active {\n  z-index: 100;\n}\n.wnd--maximized {\n  position: absolute;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  width: auto !important;\n  height: auto !important;\n}\n.meta-key .wnd--floating {\n  cursor: pointer;\n}\n.meta-key .wnd--floating > * {\n  pointer-events: none;\n}\n.wnd__compose {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  background-color: var(--desktop-menu-bg);\n}\n"; });
//# sourceMappingURL=app-bundle.js.map