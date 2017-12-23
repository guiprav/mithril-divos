export class MTop {
  attached() {
    window.mTop = this;
  }

  dettached() {
    delete window.mTop;
  }
}
