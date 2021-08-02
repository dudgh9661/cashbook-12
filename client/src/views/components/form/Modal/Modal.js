import Component from '@lib/Component';
import './Modal.scss';

const closeModal = () => {
  const $modal = document.querySelector('.modal');
  $modal.classList.remove('open');
};

class Modal extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    const $modal = document.createElement('div');
    $modal.classList.add('modal');

    $modal.innerHTML = `
      <div class="modal-input">
        <header>
          추가하실 결제수단을 적어주세요.
        </header>
        <div>
          <input placeholder="입력하세요">
        </div>
        <footer>
          <button type="button" id="modal-cancel" class="cancel">취소</button>
          <button type="button" id="modal-confirm" class="confirm">등록</button>
        </footer>
      </div>
    `;
    return $modal;
  }

  setEvent() {
    this.addEvent('click', '#modal-cancel', closeModal);
    this.addEvent('click', '#modal-confirm', this.props.callback);
  }
}
export default Modal;
