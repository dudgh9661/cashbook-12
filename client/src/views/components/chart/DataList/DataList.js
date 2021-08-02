import Component from '@lib/Component';
import { moneyWithComma } from '@utils';
import Tag from '../../common/Tag/Tag';
import './DataList.scss';

class DataList extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    const { data } = this.props;

    const $dataList = document.createElement('ul');
    $dataList.className = 'data-list';

    data.forEach(({ label, value, color }) => {
      const $item = document.createElement('li');
      $item.className = 'data-list__item';

      $item.innerHTML = `
        <div class="data-list__item--left">
          <span class="tag">${Tag(label, color)}</span>
          <span class="pct">${Math.round((value / 834640) * 100)}%</span>
        </div>
        <div class="data-list__item--right">
          <span class="value">${moneyWithComma(value)}</span>
        </div>
      `;

      $dataList.appendChild($item);
    });

    return $dataList;
  }
}

export default DataList;
