import moment from 'moment';

export class MenuClock {
  constructor() {
    for (let k of ['update']) {
      this[k] = this[k].bind(this);
    }
  }

  attached() {
    this.update();
    this.interval = setInterval(this.update, 100);
  }

  update() {
    this.date = moment().format('ddd DD MMM');
    this.time = moment().format('hh:mm');
  }
}
