import Component from '@lib/Component';
import { Dropdown, Input, Modal } from '@components';
import { moneyWithComma } from '@utils';
import $ from '@utils/dom';
import { User, History, Payment, FormStore } from '@store';
import { plus, minus, check, cancel } from '@assets/icons';
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
  if ($button && $button.dataset.delete && $button.dataset.id !== undefined) {
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
  if (!FormStore.state.isValid) {
    return;
  }
  const amount = +FormStore.state.amount.replaceAll(',', '');
  const body = {
    date: FormStore.state.date,
    content: FormStore.state.content,
    amount: FormStore.state.isIncome ? Math.abs(amount) : -amount,
    categoryId: FormStore.state.categoryId,
    paymentId: FormStore.state.paymentId,
    userId: User.state.user && User.state.user.id,
  };

  History.addHistory(body);
  FormStore.resetState();
};

const editButtonActive = () => {
  const $btn = document.querySelector('.form__edit-btn--edit');
  if (!$btn) {
    return;
  }
  if (FormStore.state.isValid) {
    $btn.classList.add('form__edit-btn--active');
    $btn.classList.add('form__btn--active');
    $btn.removeAttribute('disabled');
  } else {
    $btn.classList.remove('form__edit-btn--active');
    $btn.setAttribute('disabled', 'true');
  }
};

const postButttonActive = () => {
  const $btn = document.querySelector('.form__btn');
  if (!$btn) {
    return;
  }
  if (FormStore.state.isValid) {
    $btn.classList.add('form__btn--active');
    $btn.removeAttribute('disabled');
  } else {
    $btn.classList.remove('form__btn--active');
    $btn.setAttribute('disabled', 'true');
  }
};

const formButtonToggleActive = () => {
  if (FormStore.state.id) {
    editButtonActive();
  } else {
    postButttonActive();
  }
};

const closeDropdown = () => {
  const $activeDropdown = document.querySelector('.dropdown__list--active');
  if ($activeDropdown) {
    $activeDropdown.classList.remove('dropdown__list--active');
  }
};

const addDropdownCloseGlobalEvent = () => {
  document.removeEventListener('click', closeDropdown);
  document.addEventListener('click', closeDropdown);
};

const paymentsDropdownListItem = (id, name) =>
  `<span class="dropdown__payment-item">
    ${name}
    <button class="dropdown__payment-delete" type="button" data-delete="true" data-id="${id}">
      ${cancel}
    </button>
  </span>`;

const onClickExpenditure = () => {
  const $expenditureBtn = document.querySelector(
    '.form__toggle-btn--expenditure',
  );
  const $incomeBtn = document.querySelector('.form__toggle-btn--income');

  $expenditureBtn.classList.add('active');
  $incomeBtn.classList.remove('active');

  FormStore.setIsIncome(false);
};

const onClickIncome = () => {
  const $expenditureBtn = document.querySelector(
    '.form__toggle-btn--expenditure',
  );
  const $incomeBtn = document.querySelector('.form__toggle-btn--income');

  $expenditureBtn.classList.remove('active');
  $incomeBtn.classList.add('active');

  FormStore.setIsIncome(true);
};

const onClickEditCancel = () => {
  FormStore.resetState();
};

const onClickEdit = () => {
  const amount = +FormStore.state.amount.replaceAll(',', '');

  History.updateHistory(FormStore.state.id, {
    date: FormStore.state.date,
    content: FormStore.state.content,
    amount: FormStore.state.isIncome ? Math.abs(amount) : -amount,
    categoryId: FormStore.state.categoryId,
    paymentId: FormStore.state.paymentId,
    userId: User.state.user && User.state.user.id,
  });

  FormStore.resetState();
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false,
      isValid: false,
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

  onClickAddPaymentModalConfirm() {
    const $modalInput = document.querySelector('.modal-input');
    const name = $modalInput.value;

    if (!name) {
      alert('??????????????? ???????????????!');
      return;
    }
    if (Payment.state.payments.find(p => p.name === name)) {
      alert('?????? ????????? ?????? ???????????????!');
    }

    Payment.addPayment(name);
    this.onClickModalCancel();
  }

  setObserver() {
    FormStore.observe('isValid', formButtonToggleActive);
    FormStore.observe('categoryName', this.reRender.bind(this));
    FormStore.observe('paymentName', this.reRender.bind(this));
    FormStore.observe('isIncome', this.reRender.bind(this));
    FormStore.observe('showMobileForm', this.reRender.bind(this));

    History.observe('categories', this.reRender.bind(this));
    Payment.observe('payments', this.reRender.bind(this));
  }

  render() {
    const { custom } = this.props;
    this.state.isValid = FormStore.isValid;
    const $form = document.createElement('form');
    $form.classList.add('form');
    if (FormStore.state.showMobileForm) {
      $form.classList.add('form--mobile-show');
    }

    if (custom) {
      $form.classList.add(custom);
    }

    const $btnWrapper = document.createElement('div');
    const $btn = document.createElement('button');
    $btn.type = 'button';
    $btn.classList.add('form__btn');
    if (!FormStore.state.isValid) {
      $btn.setAttribute('disabled', 'true');
    }
    $btn.innerHTML = check();
    $btnWrapper.append($btn);

    const $modalInput = document.createElement('input');
    $modalInput.className = 'modal-input';
    $modalInput.placeholder = '???????????????.';

    const categories = History.state.categories
      .filter(c =>
        FormStore.state.isIncome ? c.type === 'income' : c.type !== 'income',
      )
      .map(category => ({
        content: category.name,
        name: category.name,
        id: category.id,
      }));

    $form.append(
      $(
        'div',
        { class: 'form__toggle-btn' },
        $(
          'button',
          {
            class: `form__toggle-btn--income ${
              FormStore.state.isIncome ? 'active' : ''
            }`,
            type: 'button',
          },
          '??????',
        ),
        $(
          'button',
          {
            class: `form__toggle-btn--expenditure ${
              FormStore.state.isIncome ? '' : 'active'
            } `,
            type: 'button',
          },
          '??????',
        ),
      ),
      new Input({
        id: 'input-date',
        label: '??????',
        placeholder: '???????????????',
        type: 'date',
        value: FormStore.state.date,
      }).getElement(),
      new Dropdown({
        id: 'category',
        selectedItem: FormStore.state.categoryName,
        label: '??????',
        listItems: categories,
      }).getElement(),
      new Input({
        id: 'input-content',
        label: '??????',
        placeholder: '???????????????',
        value: FormStore.state.content,
      }).getElement(),

      FormStore.state.isIncome
        ? new Input({
            id: 'input-source',
            label: '?????????',
            value: '??????',
            readonly: true,
          }).getElement()
        : new Dropdown({
            id: 'payment',
            selectedItem: FormStore.state.paymentName,
            label: '????????????',
            listItems: [
              ...Payment.state.payments.map(payment => ({
                content: paymentsDropdownListItem(payment.id, payment.name),
                name: payment.name,
                id: payment.id,
              })),
              { name: 'add-payment', id: 'add', content: '????????????' },
            ],
          }).getElement(),

      new Input({
        id: 'input-amount',
        label: '??????',
        prefix: FormStore.state.isIncome ? plus : minus,
        suffix: '???',
        placeholder: '00,000',
        customClass: 'input-amount',
        value: FormStore.state.amount,
      }).getElement(),

      FormStore.state.id !== null
        ? $(
            'div',
            { class: 'form__edit-btn' },
            $(
              'button',
              {
                class: 'form__edit-btn--edit',
                type: 'button',
                disabled: true,
              },
              '??????',
            ),
            $(
              'button',
              {
                class: 'form__edit-btn--cancel',
                type: 'button',
              },
              '??????',
            ),
          )
        : $btnWrapper,

      new Modal({
        visible: this.state.openModal,
        headerText: '???????????? ??????????????? ???????????????.',
        confirmText: '??????',
        onCancelHadnler: this.onClickModalCancel.bind(this),
        onConfirmHandler: this.onClickAddPaymentModalConfirm.bind(this),
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
    this.addEvent(
      'click',
      '.form__toggle-btn--expenditure',
      onClickExpenditure,
    );
    this.addEvent('click', '.form__toggle-btn--income', onClickIncome);
    this.addEvent(
      'click',
      '.form__toggle-btn--expenditure',
      onClickExpenditure,
    );
    this.addEvent('click', '.form__edit-btn--edit', onClickEdit);
    this.addEvent('click', '.form__edit-btn--cancel', onClickEditCancel);
    addDropdownCloseGlobalEvent();
  }

  didMount() {
    Payment.setPayments();
    History.setCategories();
  }
}

export default Form;
