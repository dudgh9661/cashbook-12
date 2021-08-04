import Component from '@lib/Component';
import { Modal, Form } from '@components';
import $ from '@utils/dom';
import './ModalForm.scss';
import categoryData from '../../../../_dummies/category.json';
import History from '@store/History';
import FormStore from '../FormStore';

class ModalForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.openModal = true;
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
    this.onClickModalCancel();
  }

  render() {
    return new Modal({
      visible: this.state.openModal,
      custom: 'modal-form',
      confirmText: '등록',
      onCancelHadnler: this.onClickModalCancel.bind(this),
      onConfirmHandler: this.onClickModalConfirm.bind(this),
      toggleModal: this.onClickModalCancel.bind(this),
      children: [
        new Form({
          custom: 'modal-form',
          categories: categoryData.categories,
        }),
      ],
    }).getElement();
  }

  didMount() {
    if (this.props.history) {
      const { date, content, category, payment, amount } = this.props.history;
      FormStore.setDate(date);
      FormStore.setCategory(content);
      FormStore.setContent(category.id, category.name);
      FormStore.setPayment(payment.id, payment.name);
      FormStore.setAmount(amount);
    }
  }
}

export default ModalForm;
