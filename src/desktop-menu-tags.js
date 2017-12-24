export class DesktopMenuTags {
  tags = [];
  active = null;

  constructor() {
    this.tags = [
      { name: 'web', sym: '\ue1ba' },
      { name: 'term', sym: '\ue21a' },
      { name: 'draw', sym: '\ue858' },
      { name: 'im', sym: '\ue11f' },
      { name: 'game', sym: '\ue216' },
    ];

    this.active = this.tags[0];

    window.desktopMenuTags = this;
  }
}
