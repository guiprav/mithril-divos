import { bindable } from 'aurelia-framework';

export class WTopBar {
  @bindable maximized;

  toggleMaximized() {
    this.maximized = !this.maximized;
  }
}
