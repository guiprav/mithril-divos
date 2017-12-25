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
  }

  attached() {
    for (let k of this.keyboardEventNames) {
      document.addEventListener(k, this.onKeyboardEvent);
    }

    window.app = this;
  }

  dettached() {
    for (let k of this.keyboardEventNames) {
      document.removeEventListener(
        k, this.onKeyboardEvent
      );
    }

    delete window.app;
  }

  onKeyboardEvent(ev) {
    switch (ev.key) {
      case 'Meta':
        this.metaKey = ev.type === 'keydown';
        break;

      // FIXME: Move to wmRoot.
      case 'q': {
        if (ev.type !== 'keydown' || !ev.metaKey) {
          break;
        }

        let activeWnd = wmRoot.active;
        activeWnd && activeWnd.kill();

        break;
      }

      // FIXME: Move to wmRoot.
      case 'm': {
        if (ev.type !== 'keydown' || !ev.metaKey) {
          break;
        }

        let activeWnd = wmRoot.active;

        if (!activeWnd) {
          break;
        }

        activeWnd.maximized = !activeWnd.maximized;

        break;
      }
    }
  }
}
