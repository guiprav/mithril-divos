export class MenuNetmon {
  rx = 1024;
  tx = 2048;

  rxChanged() {
    this._rx = Math.round(this.rx / 1024);
  }

  txChanged() {
    this._tx = Math.round(this.tx / 1024);
  }

  constructor() {
    this.rxChanged();
    this.txChanged();
  }
}
