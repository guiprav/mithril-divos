import { bindable } from 'aurelia-framework';

export class WmRoot {
  @bindable active;

  wnds = [
    { tag: 'web', vm: 'browser' },
  ];

  activeChanged() {
    let activeWnd = this.active;
    let activeTag = desktopMenuTags.active;

    if (!activeTag) {
      return;
    }

    activeTag.lastActive = activeWnd;
  }

  attached() {
    window.wmRoot = this;
  }

  dettached() {
    delete window.wmRoot;
  }
}
