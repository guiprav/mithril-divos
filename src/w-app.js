import $ from 'jquery';
import 'jquery-ui';
import { bindable } from 'aurelia-framework';

export class WApp {
  @bindable name;
  @bindable title;
  @bindable maximized = true;
  @bindable x;
  @bindable y;
  @bindable width;
  @bindable height;

  url = 'https://gnu.org';

  constructor() {
    for (let k of ['onFrame']) {
      this[k] = this[k].bind(this);
    }
  }

  get $el() {
    return $(this.el);
  }

  maximizedChanged() {
    console.log('maxChan');
    let method = this.maximized ? 'disable' : 'enable';

    this.$el
      .resizable(method)
      .draggable(method);
  }

  attached() {
    this.$el
      .resizable({
        containment: 'wm-root',
        handles: 'all',
      })
      .draggable({
        containment: 'wm-root',
        handle: '.w-top-bar',
      });

    this.maximizedChanged();

    if (!this.maximized) {
      this.height = $('wm-root').height();
    }

    this.onFrame();
  }

  dettached() {
    this.isDettached = true;
  }

  onFrame() {
    if (this.isDettached) {
      return;
    }

    requestAnimationFrame(this.onFrame);

    if (!this.maximized) {
      if (this.$el.is('.ui-draggable-dragging')) {
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
