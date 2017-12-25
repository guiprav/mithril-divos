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

    $input.on('focus', () => {
      $input.select();
    });

    $input.on('keydown', ev => {
      if (ev.key === 'Enter') {
        this.navigate($input.val());
        $input.blur();
      }
    });
  }

  navigate(url) {
    this.url = this._url = url;
  }
}
