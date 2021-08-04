import Component from '@lib/Component';
import { moneyWithComma } from '@utils';
import $ from '@utils/dom';
import './DataList.scss';

class DataList extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    return $('ul', { class: 'data-list' }, ...this.renderItem());
  }

  renderItem() {
    const { data, total } = this.props;

    return data.map(({ label, value, color }) => {
      return $(
        'li',
        { class: 'data-list__item' },
        $(
          'div',
          { class: 'data-list__item--left' },
          $('span', { class: 'tag', style: `background: ${color}` }, label),
          $('span', { class: 'pct' }, `${Math.round((value / total) * 100)}%`),
        ),
        $(
          'div',
          { class: 'data-list__item--right' },
          $('span', { class: 'value' }, moneyWithComma(value)),
        ),
      );
    });
  }
}

export default DataList;
