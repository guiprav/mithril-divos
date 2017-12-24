export class DesktopMenu {
  attached() {
    window.mTop = this;
  }

  dettached() {
    delete window.mTop;
  }
}
