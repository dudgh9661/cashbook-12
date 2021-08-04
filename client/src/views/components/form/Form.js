import Component from '@lib/Component';
import { Dropdown, Input, Modal } from '@components';
import { minus, check, cancel } from '@assets/icons';
import { moneyWithComma } from '@utils';
import History from '@store/History';
import Payment from '@store/Payment';
import User from '@store/User';
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
  const $button = e.target.closest('button');
  if ($button.dataset.delete && $button.dataset.id !== undefined) {
    const paymentId = $button.dataset.id;
    Payment.deletePayment(paymentId);
    return;
  }

  const $item = e.target.closest('li');
  if ($item) {
    const { id, name } = $item.dataset;
    if (id !== 'add') {
      FormStore.setPayment(id, name);
    }
  }
};

const onClickButton = async () => {
  History.addHistory({
    date: FormStore.state.date,
    content: FormStore.state.content,
    // todo 수입, 지출 구분
    amount: +FormStore.state.amount.replaceAll(',', '') * -1,
    categoryId: FormStore.state.categoryId,
    paymentId: FormStore.state.paymentId,
    userId: User.state.user && User.state.user.id,
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

const paymentsDropdownListItem = (id, name) =>
  `<span class="dropdown__payment-item">
    ${name}
    <button class="dropdown__payment-delete" type="button" data-delete="true" data-id="${id}">
      ${cancel}
    </button>
  </span>`;

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false,
    };
    this.init();
  }

  onClickAddpayment() {
    this.state.openModal = true;
    this.reRender();
  }

  onClickModalCancel() {
    this.state.openModal = false;
    this.reRender();
  }

  onClickModalConfirm() {
    const $modalInput = document.querySelector('.modal-input');
    const name = $modalInput.value;

    if (!name) {
      alert('결제수단을 적어주세요!');
      return;
    }

    Payment.addPayment(name);
    this.onClickModalCancel();
  }

  setObserver() {
    FormStore.observe('isValid', toggleButttonActive);
    FormStore.observe('categoryName', this.reRender.bind(this));
    FormStore.observe('paymentName', this.reRender.bind(this));

    Payment.observe('payments', this.reRender.bind(this));
  }

  render() {
    const $form = document.createElement('form');
    $form.classList.add('form');

    const $btn = document.createElement('button');
    $btn.type = 'button';
    $btn.classList.add('form__btn');
    $btn.innerHTML = check();

    const $modalInput = document.createElement('input');
    $modalInput.className = 'modal-input';
    $modalInput.placeholder = '입력하세요.';

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
          ...Payment.state.payments.map(payment => ({
            content: paymentsDropdownListItem(payment.id, payment.name),
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
      new Modal({
        visible: this.state.openModal,
        headerText: '추가하실 결제수단을 적어주세요.',
        confirmText: '등록',
        onCancelHadnler: this.onClickModalCancel.bind(this),
        onConfirmHandler: this.onClickModalConfirm.bind(this),
        toggleModal: this.onClickModalCancel.bind(this),
        children: [$modalInput],
      }).getElement(),
    );
    return $form;
  }

  setEvent() {
    this.addEvent('input', '#input-date', onInputDate);
    this.addEvent('input', '#input-content', onInputContent);
    this.addEvent('input', '#input-amount', onInputAmount);
    this.addEvent('click', '.dropdown--category', onClickCategoryItem);
    this.addEvent('click', '.dropdown--payment', onClickPaymentItem);
    this.addEvent(
      'click',
      '#dropdown-add-payment-add',
      this.onClickAddpayment.bind(this),
    );
    this.addEvent('click', '.form__btn', onClickButton);
  }

  didMount() {
    Payment.setPayments();
  }
}

export default Form;
