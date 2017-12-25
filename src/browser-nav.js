import { bindable } from 'aurelia-framework';

export class BrowserNav {
  @bindable url;

  urlChanged() {
    this._url = this.url;
  }

  attached() {
    this.urlChanged();

    let $input =
      $(this.el).find('.browser-nav__url-input');

    $input.on('dblclick', () => {
      this.active = true;
      $input.focus().select();
    });

    $input.on('click focus', ev => {
      if (!this.active) {
        $input.blur();
      }
    });

    $input.on('keydown', ev => {
      switch (ev.key) {
        case 'Escape':
          requestAnimationFrame(() => {
            this._url = this.url;
          });

          this.active = false;
          $input.blur();
          break;

        case 'Enter':
          this.navigate($input.val());
          this.active = false;
          $input.blur();
          break;
      }
    });
  }

  navigate(url) {
    this.url = this._url = url;
  }
}
