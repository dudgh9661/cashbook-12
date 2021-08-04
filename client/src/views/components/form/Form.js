import Component from '@lib/Component';
import { Dropdown, Input, Modal } from '@components';
import { minus, check, cancel } from '@assets/icons';
import { moneyWithComma } from '@utils';
import History from '@store/History';
import FormStore from './FormStore';

import './Form.scss';

const onInputDate = e => FormStore.setDate(e.target.value);
const onInputContent = e => FormStore.setContent(e.target.value);
const onInputAmount = e => {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
  e.target.value = moneyWithComma(+e.target.value);
  if (e.target.value === '0') {
    e.target.value = '';
  }
  FormStore.setAmount(e.target.value);
};
const onClickCategoryItem = e => {
  const $item = e.target.closest('li');
  if ($item) {
    const { id, name } = $item.dataset;
    FormStore.setCategory(id, name);
  }
};
const onClickPaymentItem = e => {
  const $item = e.target.closest('li');
  if ($item) {
    const { id, name } = $item.dataset;
    if (id !== 'add') {
      FormStore.setPayment(id, name);
    }
  }
};
const onClickAddpayment = () => {
  const $modal = document.querySelector('.modal');
  $modal.classList.add('modal--open');
};

const onClickButton = async () => {
  History.addHistory({
    date: FormStore.state.date,
    content: FormStore.state.content,
    // todo 수입, 지출 구분
    amount: +FormStore.state.amount.replaceAll(',', '') * -1,
    categoryId: FormStore.state.categoryId,
    paymentId: FormStore.state.paymentId,
    // todo 로그인 머지후 수정
    userId: 1,
  });
  FormStore.resetState();
};

const toggleButttonActive = () => {
  const $btn = document.querySelector('.form__btn');
  if (FormStore.state.isValid) {
    $btn.classList.add('form__btn--active');
    $btn.disabled = false;
  } else {
    $btn.classList.remove('form__btn--active');
    $btn.disabled = true;
  }
};

const paymentsDropdownListItem = name =>
  `<span class="dropdown__payment-item">${name}${cancel}</span>`;

class Form extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  setObserver() {
    FormStore.observe('isValid', toggleButttonActive);
    FormStore.observe('categoryName', this.reRender.bind(this));
    FormStore.observe('paymentName', this.reRender.bind(this));
  }

  render() {
    const $form = document.createElement('form');
    $form.classList.add('form');

    const $btn = document.createElement('button');
    $btn.type = 'button';
    $btn.classList.add('form__btn');
    $btn.innerHTML = check();

    $form.append(
      new Input({
        id: 'input-date',
        label: '일자',
        placeholder: '입력하세요',
        value: FormStore.state.date,
      }).getElement(),
      new Dropdown({
        id: 'category',
        selectedItem: FormStore.state.categoryName,
        label: '분류',
        listItems: this.props.categories.map(category => ({
          content: category.name,
          name: category.name,
          id: category.id,
        })),
      }).getElement(),
      new Input({
        id: 'input-content',
        label: '내용',
        placeholder: '입력하세요',
        value: FormStore.state.content,
      }).getElement(),
      new Dropdown({
        id: 'payment',
        selectedItem: FormStore.state.paymentName,
        label: '결제수단',
        listItems: [
          ...this.props.paymentMethods.map(payment => ({
            content: paymentsDropdownListItem(payment.name),
            name: payment.name,
            id: payment.id,
          })),
          { name: 'add-payment', id: 'add', content: '추가하기' },
        ],
      }).getElement(),
      new Input({
        id: 'input-amount',
        label: '금액',
        prefix: minus,
        suffix: '원',
        placeholder: '입력하세요',
        customClass: 'input-amount',
        value: FormStore.state.amount,
      }).getElement(),
      $btn,
      new Modal({}).getElement(),
    );
    return $form;
  }

  setEvent() {
    this.addEvent('input', '#input-date', onInputDate);
    this.addEvent('input', '#input-content', onInputContent);
    this.addEvent('input', '#input-amount', onInputAmount);
    this.addEvent('click', '.dropdown--category', onClickCategoryItem);
    this.addEvent('click', '.dropdown--payment', onClickPaymentItem);
    this.addEvent('click', '#dropdown-add-payment-0', onClickAddpayment);
    this.addEvent('click', '.form__btn', onClickButton);
  }
}

export default Form;
