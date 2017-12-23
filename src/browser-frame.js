import { bindable } from 'aurelia-framework';

export class BrowserFrame {
  @bindable url;

  urlChanged() {
    if (!this.iframe) {
      return;
    }

    this.iframe.src = this.url;
  }

  get iframe() {
    return this.el && this.el.querySelector(
      '.browser-frame__iframe'
    );
  }

  attached() {
    this.urlChanged();
  }
}
