import $ from 'jquery';
import 'jquery-ui';
import { bindable } from 'aurelia-framework';

export class WApp {
  @bindable name;
  @bindable title;

  url = 'https://gnu.org';

  attached() {
    $(this.el)
      .resizable({
        containment: 'wm-root',
        handles: 'all',
      })
      .draggable({
        containment: 'wm-root',
        handle: '.w-top-bar',
      })
      .css('height', $('wm-root').height());
  }
}
