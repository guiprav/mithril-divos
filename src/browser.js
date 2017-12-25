import { bindable } from 'aurelia-framework';

export class Browser {
  url = 'https://suckless.org';

  activate(data) {
    Object.assign(this, data);
  }
}
