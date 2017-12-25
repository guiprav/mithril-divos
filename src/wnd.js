import $ from 'jquery';
import 'jquery-ui';
import { bindable } from 'aurelia-framework';

export class Wnd {
  @bindable name = 'Web Browser';
  @bindable title = 'Web Browser';
  @bindable maximized = false;
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

  attached() {
    this.$el
      .resizable({ handles: 'all' })
      .draggable();

    this.maximizedChanged();
    this.onFrame();

    window.desktopMenu.activeApp = this;
  }

  dettached() {
    this.isDettached = true;
  }

  onFrame() {
    if (this.isDettached) {
      return;
    }

    requestAnimationFrame(this.onFrame);

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
