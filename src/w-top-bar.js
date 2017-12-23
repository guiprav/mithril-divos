import { bindable } from 'aurelia-framework';

export class WTopBar {
  @bindable looks = 'default';
  @bindable maximized;

  toggleMaximized() {
    this.maximized = !this.maximized;
  }
}
