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

    const $history = document.createElement('li');
    $history.classList.add('history-item');
    $history.innerHTML = `
      <div class="history-item-header">
        <span>
          <b>${month}월 ${date}일</b>
          ${day}
        </span>
        <span>지출 56,240</span>
      </div>
      <table>
        ${historyItemList
          .map(
            history =>
              `<tr class="history-item-row">
                <td class="history-item-col-description">
                  ${Tag(history.category.name, history.category.color)}
                  <span>${history.content}</span>
                </td>          
                <td class="history-item-col-payment">
                  <span class="history-item-col-payment-method">${
                    history.payment
                  }</span>
                  <span class="history-item-col-payment-amount">${moneyWithComma(
                    history.amount,
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
