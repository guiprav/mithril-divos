export class DesktopMenu {
  attached() {
    requestAnimationFrame(() => {
      this.wmRoot = window.wmRoot;
    });

    window.desktopMenu = this;
  }

  dettached() {
    delete window.desktopMenu;
  }
}
