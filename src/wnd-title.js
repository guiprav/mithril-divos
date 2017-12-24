import $ from 'jquery';
import { bindable } from 'aurelia-framework';

export class WndTitle {
  @bindable looks = 'default';
  @bindable maximized;

  toggleMaximized() {
    this.maximized = !this.maximized;
  }

  attached() {
    $(this.el).dblclick(() => {
      !this.maximized && this.toggleMaximized();
    });
  }
}
