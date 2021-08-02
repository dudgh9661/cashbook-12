import Component from '@lib/Component';
import { Checkbox } from '@components';
import './HistoryHeader.scss';

class HistoryHeader extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $header = document.createElement('header');
    $header.classList.add('history-header');

    $header.innerHTML = `
      <span>전체 내역 13건</span>
      <div class="history-header-category">
        ${Checkbox('수입 1,882,480', 'income', 'checkbox-income')}
        ${Checkbox('지출 798,180', 'expenditure', 'checkbox-expenditure')}
      </div>
    `;

    return $header;
  }
}

export default HistoryHeader;
