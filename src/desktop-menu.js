export class DesktopMenu {
  attached() {
    window.desktopMenu = this;
  }

  dettached() {
    delete window.desktopMenu;
  }
}
