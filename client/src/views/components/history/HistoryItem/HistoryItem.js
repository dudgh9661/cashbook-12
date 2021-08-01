import Component from '@lib/Component';
import { Tag } from '@components';
import './HistoryItem.scss';

const moneyFormat = number => `${number.toLocaleString()} 원`;
const timestampFormat = date => {
  const dateObj = new Date(date);
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  return [dateObj.getMonth() + 1, dateObj.getDate(), days[dateObj.getDay()]];
};

class HistoryItem extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    const { historyItemList, timestamp } = this.props;
    const [month, date, day] = timestampFormat(timestamp);

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
                  ${Tag(history.category.text, history.category.color)}
                  <span>${history.description}</span>
                </td>          
                <td class="history-item-col-payment">
                  <span class="history-item-col-payment-method">${
                    history.paymentMethod
                  }</span>
                  <span>${moneyFormat(history.amount)}</span>
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
