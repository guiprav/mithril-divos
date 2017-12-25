export class WmRoot {
  wnds = [
    { tag: 'web', vm: 'browser' },
  ];

  attached() {
    window.wmRoot = this;
  }

  dettached() {
    delete window.wmRoot;
  }
}
