import Component from '@lib/Component';
import { Tag } from '@components';
import { moneyWithComma, getDateFromString } from '@utils';
import { formDateFormat } from '@utils/helper';
import { trashBin, pencil } from '@assets/icons';
import History from '@store/History';
import FormStore from '../../form/FormStore';
import './HistoryItem.scss';

const onClickDelete = e => {
  const $btn = e.target.closest('button');
  const { id } = $btn.dataset;

  if (id && window.confirm('정말 삭제하실건가요!?')) {
    History.deleteHistory(id);
  }
};

class HistoryItem extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  onClickEdit(e) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const $button = e.target.closest('button');
    const { id } = $button.dataset;
    const { timestamp, historyItemList } = this.props;
    const { content, category, amount, payment } = historyItemList.find(
      h => +h.id === +id,
    );

    FormStore.setId(id);
    FormStore.setContent(content);
    FormStore.setAmount(amount);
    FormStore.setDate(formDateFormat(timestamp));
    FormStore.setCategory(category.id, category.name);
    FormStore.setPayment(payment.id, payment.name);
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
                <td class="history-item__menu">
                  <button type="button"data-id="${
                    history.id
                  }" id="history-item__menu-edit">${pencil(
                25,
                25,
              )}/<button>                  
                  <button type="button" data-id="${
                    history.id
                  }" id="history-item__menu-delete">${trashBin(25, 25)}/<button>
                </td>
              </tr>
            `,
          )
          .join('')}  
      </table>        
    `;

    return $history;
  }

  setEvent() {
    this.addEvent(
      'click',
      '#history-item__menu-edit',
      this.onClickEdit.bind(this),
    );
    this.addEvent('click', '#history-item__menu-delete', onClickDelete);
  }
}

export default HistoryItem;
