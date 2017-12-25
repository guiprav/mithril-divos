import $ from 'jquery';
import { observable } from 'aurelia-framework';

export class DesktopMenuTags {
  tags = [];
  @observable active = null;

  activeChanged() {
    let { active } = this;

    $(`.wnd:not(.wnd--tag_${active.name})`).hide();
    $(`.wnd--tag_${active.name}`).show();
  }

  constructor() {
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
    window.desktopMenuTags = this;
  }

  dettached() {
    delete window.desktopMenuTags;
  }
}
