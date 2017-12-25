export class App {
  keyboardEventNames = [
    'keydown',
    'keypress',
    'keyup',
  ];

  constructor() {
    for (let k of ['onKeyboardEvent']) {
      this[k] = this[k].bind(this);
    }

    window.app = this;
  }

  attached() {
    for (let k of this.keyboardEventNames) {
      document.addEventListener(k, this.onKeyboardEvent);
    }
  }

  dettached() {
    for (let k of this.keyboardEventNames) {
      document.removeEventListener(
        k, this.onKeyboardEvent
      );
    }
  }

  onKeyboardEvent(ev) {
    switch (ev.key) {
      case 'Meta':
        this.metaKey = ev.type === 'keydown';
        break;
    }
  }
}
