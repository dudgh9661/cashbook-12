import Component from '@lib/Component';
import { Checkbox } from '@components';
import { History } from '@store';
import { moneyWithComma } from '@utils';
import './HistoryHeader.scss';

const onChangeCheckbox = e => {
  if (e.target.checked) {
    History.setFilter([e.target.value, ...History.state.filter]);
  } else {
    History.setFilter(History.state.filter.filter(f => f !== e.target.value));
  }
};

class HistoryHeader extends Component {
  constructor() {
    super();

    this.init();
  }

  setObserver() {
    History.observe('historyArr', this.reRender.bind(this));
  }

  render() {
    const $header = document.createElement('header');
    $header.classList.add('history-header');

    const historyCount = History.state.historyArr.length;
    const incomeTotal = moneyWithComma(
      History.state.historyArr.reduce(
        (sum, h) => (+h.amount >= 0 ? sum + +h.amount : sum),
        0,
      ),
    );
    const expenditureTotal = moneyWithComma(
      History.state.historyArr.reduce(
        (sum, h) => (+h.amount < 0 ? sum + +h.amount : sum),
        0,
      ),
    );

    $header.innerHTML = `
      <span>전체 내역 ${historyCount}건</span>
      <div class="history-header__category">
        ${Checkbox(
          `수입 ${incomeTotal}`,
          'income',
          'checkbox-income',
          History.state.filter.includes('income'),
        )}
        ${Checkbox(
          `지출 ${expenditureTotal}`,
          'expenditure',
          'checkbox-expenditure',
          History.state.filter.includes('expenditure'),
        )}
      </div>
    `;

    return $header;
  }

  setEvent() {
    this.addEvent('input', '#checkbox-income', onChangeCheckbox);
    this.addEvent('change', '#checkbox-expenditure', onChangeCheckbox);
  }
}

export default HistoryHeader;
