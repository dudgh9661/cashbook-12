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

      const $tag = document.createElement('span');
      $tag.innerHTML = Tag(label, color);

      const $pct = document.createElement('span');
      $pct.innerText = `${Math.round((value / 834640) * 100)}%`;

      const $value = document.createElement('span');
      $value.innerText = moneyWithComma(value);

      $item.append($tag, $pct, $value);
      $dataList.appendChild($item);
    });

    return $dataList;
  }
}

export default DataList;
