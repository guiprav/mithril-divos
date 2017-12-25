import $ from 'jquery';
import { observable } from 'aurelia-framework';

let digitsRe = /^[0-9]$/;

export class DesktopMenuTags {
  tags = [];
  @observable active = null;

  activeChanged() {
    let activeTag = this.active;

    if (!activeTag) {
      $('.wnd').hide();

      if (window.wmRoot) {
        wmRoot.active = null;
      }

      return;
    }

    $(`.wnd:not(.wnd--tag_${activeTag.name})`).hide();

    let $showing = $(`.wnd--tag_${activeTag.name}`);

    if (!$showing.length && window.wmRoot) {
      wmRoot.active = null;
    }

    $showing.show();

    let lastActiveWnd = activeTag.lastActive;

    if (lastActiveWnd) {
      lastActiveWnd.active = true;
    }
  }

  constructor() {
    for (let k of ['onKeyboardEvent']) {
      this[k] = this[k].bind(this);
    }

    this.tags = [
      { name: 'web', sym: '\ue1ba' },
      { name: 'term', sym: '\ue21a' },
      { name: 'draw', sym: '\ue858' },
      { name: 'im', sym: '\ue11f' },
      { name: 'game', sym: '\ue216' },
    ];

    this.active = this.tags[0];
  }

  attached() {
    for (let ev of ['keydown', 'keypress', 'keyup']) {
      document.addEventListener(
        ev, this.onKeyboardEvent
      );
    }

    window.desktopMenuTags = this;
  }

  dettached() {
    delete window.desktopMenuTags;
  }

  onKeyboardEvent(ev) {
    if (ev.type === 'keydown' && ev.metaKey) {
      if (digitsRe.test(ev.key)) {
        this.switchTagCmd(Number(ev.key));
      }
    }
  }

  switchTagCmd(i) {
    if (i === 0) {
      i = 10;
    }

    let tag = this.tags[i - 1];

    if (!tag) {
      return;
    }

    if (tag === this.active) {
      this.active = null;
      return;
    }

    this.active = tag;
  }
}
