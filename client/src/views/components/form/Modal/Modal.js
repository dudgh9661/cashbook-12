import Component from '@lib/Component';
import $ from '@utils/dom';
import './Modal.scss';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    const {
      visible,
      headerText = '',
      cancelText = '취소',
      confirmText = '확인',
      children = [],
    } = this.props;

    return $(
      'div',
      { class: `modal ${visible ? 'modal--open' : ''}` },
      $(
        'div',
        { class: 'modal-content' },
        $('div', { class: 'modal-content__header' }, headerText),
        $('div', { class: 'modal-content__body' }, ...children),
        $(
          'div',
          { class: 'modal-content__footer' },
          $('button', { type: 'button', class: 'cancel-btn' }, cancelText),
          $('button', { type: 'button', class: 'confirm-btn' }, confirmText),
        ),
      ),
    );
  }

  setEvent() {
    const { toggleModal, onCancelHandler, onConfirmHandler } = this.props;
    if (!toggleModal) return;

    this.addEvent('click', '.cancel-btn', onCancelHandler || toggleModal);
    this.addEvent('click', '.confirm-btn', onConfirmHandler || toggleModal);

    this.addEvent('click', '.modal', e => {
      if (e.target === this.$element) toggleModal();
    });
  }
}

export default Modal;
