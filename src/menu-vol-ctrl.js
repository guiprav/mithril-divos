import { observable } from 'aurelia-framework';

export class MenuVolCtrl {
  @observable volume = 1;

  volumeChanged() {
    this._volume = Math.round(this.volume * 100);
  }

  constructor() {
    this.volumeChanged();
  }
}
