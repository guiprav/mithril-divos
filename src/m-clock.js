function leftPad(ch, len, str) {
  str = str.toString();
  len -= str.length;

  while (len-- > 0) {
    str = ch + str;
  }

  return str;
}

export class MClock {
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
    let now = new Date();

    let hh = leftPad(0, 2, now.getHours());
    let mm = leftPad(0, 2, now.getMinutes());
    let ss = leftPad(0, 2, now.getSeconds());

    this.label = `${hh}:${mm}:${ss}`;
  }
}
