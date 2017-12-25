import { bindable } from 'aurelia-framework';

export class MenuWndTitle {
  @bindable active;

  attached() {
    requestAnimationFrame(() => {
      this.wmRoot = window.wmRoot;
    });
  }
}
