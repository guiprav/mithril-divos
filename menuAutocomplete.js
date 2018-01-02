module.exports = {
  oninit: function({ attrs }) {
    this.attrs = attrs;

    this.cols = attrs.cols || [];
    this.rows = [];

    let getCb = k => attrs[k] || function() {};

    this.onBlur = getCb('onBlur');
    this.onClose = getCb('onClose');
    this.onSelect = getCb('onSelect');

    this.onSearch = val => {
      this.rows = getCb('onSearch')(val) || [];
      m.redraw();

      requestAnimationFrame(() => {
        this.$table =
          this.$dom.find('.menuAutocomplete-table');

        this.$cursor = this.$table
          .children('.menuAutocomplete-cursor');

        if (!this.$cursor.length) {
          this.$cursor = this.$table
            .children('tr').first()
            .addClass('menuAutocomplete-cursor');
        }
      });
    };

    this.onKeyDown = ev => {
      if (ev.key === 'Escape') {
        this.onClose();
        return;
      }

      if (ev.key === 'Enter') {
        if (!this.$cursor.length) {
          return;
        }

        this.onSelect(this.rows[
          this.$cursor.index('tr')
        ]);

        return;
      }

      if (ev.key === 'ArrowUp') {
        ev.preventDefault();

        this.$cursor = this.$cursor
          .removeClass('menuAutocomplete-cursor')
          .prev('tr')
          .addClass('menuAutocomplete-cursor');

        if (!this.$cursor.length) {
          this.$cursor = this.$table
            .children('tr').last()
            .addClass('menuAutocomplete-cursor');
        }

        return;
      }

      if (ev.key === 'ArrowDown') {
        ev.preventDefault();

        this.$cursor = this.$cursor
          .removeClass('menuAutocomplete-cursor')
          .next('tr')
          .addClass('menuAutocomplete-cursor');

        if (!this.$cursor.length) {
          this.$cursor = this.$table
            .children('tr').first()
            .addClass('menuAutocomplete-cursor');
        }

        return;
      }

      requestAnimationFrame(() => {
        this.onSearch(ev.target.value);
      });
    };
  },

  oncreate: function({ dom }) {
    this.dom = dom;
    this.$dom = $(dom);

    this.$input =
      this.$dom.find('.menuAutocomplete-input');

    this.$input.focus();
    this.onSearch('');
  },

  view: function({ attrs }) { 
    this.looks = attrs.looks || 'default';

    let dropdownBox;

    if (this.rows.length) {
      let th = !!this.cols.length && m('th', [
        ...this.cols.map(col => {
          if (typeof col !== 'object') {
            col = m('.menuAutocomplete-colLabel', {
              class: makeClassString({
                'menuAutocomplete-colLabel--': this.looks,
              }),
            }, [
              col,
            ]);
          }

          return m('td', col);
        }),
      ]);

      let rows = this.rows.map(row => {
        let { cols, key } = row;

        if (!Array.isArray(cols)) {
          cols = [cols];
        }

        return m('tr', { key }, cols.map(col => {
          if (typeof col !== 'object') {
            col = m('.menuAutocomplete-colData', {
              class: makeClassString({
                'menuAutocomplete-colData--': this.looks,
              }),
            }, [
              col,
            ]);
          }

          return m('td', col);
        }));
      });

      dropdownBox = m('.menuAutocomplete-dropdownBox', {
        class: makeClassString({
          'menuAutocomplete-dropdownBox--': this.looks,
        }),
      }, [
        m('table.menuAutocomplete-table', {
          class: makeClassString({
            'menuAutocomplete-table--': this.looks,
          }),
        }, [
          th, ...rows,
        ]),
      ]);
    }

    return m('.menuAutocomplete', {
      class: makeClassString({
        'menuAutocomplete--': this.looks,
      }),
    }, [
      m('input.menuAutocomplete-input', {
        // TODO: Add other stuff.
        autocomplete: 'off',
        autocorrect: 'off',

        class: makeClassString({
          'menuAutocomplete-input--': this.looks,
        }),

        //onblur: this.onBlur,
        onkeydown: this.onKeyDown,
      }),

      dropdownBox || '',
    ]);
  },
};
