import $ from 'jquery';
import 'jquery-ui';
import { bindable } from 'aurelia-framework';

export class Wnd {
  @bindable tag;
  @bindable name = 'Web Browser';
  @bindable title = 'Web Browser';
  @bindable maximized = true;
  @bindable active;
  @bindable x = 70;
  @bindable y = 60;
  @bindable width = $('body').width() - 720;
  @bindable height = $('body').height() - 360;
  @bindable dragging;
  @bindable resizing;
  @bindable vm;

  constructor() {
    for (let k of ['onFrame']) {
      this[k] = this[k].bind(this);
    }
  }

  get $el() {
    if (!this._$el) {
      this._$el = $(this.el);
    }

    return this._$el;
  }

  maximizedChanged() {
    let method = this.maximized ? 'disable' : 'enable';

    this.$el
      .resizable(method)
      .draggable(method);
  }

  activeChanged() {
    if (this.active) {
      wmRoot.active = this;
    }
  }

  attached() {
    this.$el.data('model', this);

    this.$el
      .resizable({ handles: 'all' })
      .draggable();

    let activeTag = desktopMenuTags.active;

    if (this.tag !== activeTag.name) {
      this.$el.hide();
    }

    this.maximizedChanged();
    this.onFrame();
  }

  kill() {
    if (wmRoot.active === this) {
      wmRoot.active = null;
    }

    wmRoot.wnds.splice(
      wmRoot.wnds.indexOf(this), 1
    );

    this.dead = true;
  }

  checkFocus() {
    return (
      this.el === document.activeElement ||
      $.contains(this.el, document.activeElement)
    );
  }

  onFrame() {
    if (this.dead) {
      return;
    }

    requestAnimationFrame(this.onFrame);

    if (this.checkFocus()) {
      if (!this.active) {
        this.active = true;
      }
    }
    else {
      if (this.active) {
        this.active = false;
      }
    }

    let draggingSel = '.ui-draggable-dragging';
    let resizingSel = '.ui-resizable-resizing';

    this.dragging = this.$el.is(draggingSel);
    this.resizing = this.$el.is(resizingSel);

    if (!this.maximized) {
      if (this.dragging || this.resizing) {
        let style = getComputedStyle(this.el);

        let values = {
          x: Number(style.left),
          y: Number(style.top),
          width: Number(style.width),
          height: Number(style.height),
        };

        for (let k of Object.keys(values)) {
          if (this[k] === values[k]) {
            return;
          }

          this[k] = values[k];
        }
      }
      else {
        this.$el
          .css('left', `${this.x}px`)
          .css('top', `${this.y}px`)
          .css('width', `${this.width}px`)
          .css('height', `${this.height}px`);
      }
    }
  }
}
