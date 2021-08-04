import Component from '@lib/Component';
import { Tag } from '@components';
import { moneyWithComma, getDateFromString } from '@utils';
import './HistoryItem.scss';

class HistoryItem extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    const { historyItemList, timestamp } = this.props;
    const [month, date, day] = getDateFromString(timestamp);

    const incomeTotal = moneyWithComma(
      historyItemList.reduce(
        (sum, h) => (+h.amount >= 0 ? sum + +h.amount : sum),
        0,
      ),
    );
    const expenditureTotal = moneyWithComma(
      historyItemList.reduce(
        (sum, h) => (+h.amount < 0 ? sum + +h.amount : sum),
        0,
      ),
    );

    const $history = document.createElement('li');
    $history.classList.add('history-item');
    $history.innerHTML = `
      <div class="history-item__header">
        <span>
          <b>${month}월 ${date}일</b>
          ${day}
        </span>
        <div> 
          <span class="history-item__header-income">수입  ${incomeTotal}</span>
          <span>지출  ${expenditureTotal}</span>
        </div>        
      </div>
      <table>
        ${historyItemList
          .map(
            history =>
              `<tr class="history-item__row">
                <td class="history-item__col-description">
                  ${Tag(history.category.name, history.category.color)}
                  <span>${history.content}</span>
                </td>          
                <td class="history-item__col-payment">
                  <span class="history-item__col-payment-method">${
                    history.payment.name
                  }</span>
                  <span class="history-item__col-payment-amount">${moneyWithComma(
                    +history.amount,
                  )}원</span>
                </td> 
              </tr>
            `,
          )
          .join('')}  
      </table>        
    `;

    return $history;
  }
}

export default HistoryItem;
