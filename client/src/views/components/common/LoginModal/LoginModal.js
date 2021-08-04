import Component from '@lib/Component';
import { User } from '@store';
import { github } from '@assets/icons';
import { GITHUB_REDIRECT_URL } from '@constants';
import $ from '@utils/dom';
import './LoginModal.scss';

class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  setObserver() {
    User.observe('user', this.toggleModal.bind(this));
  }

  toggleModal() {
    if (User.state.user) {
      this.$element.classList.remove('login-modal--active');
    } else {
      this.$element.classList.add('login-modal--active');
    }
  }

  render() {
    const $button = $(
      'a',
      {
        class: 'login-modal__button',
        href: GITHUB_REDIRECT_URL,
      },
      `${github} <span>깃헙으로 로그인</span>`,
    );

    return $('div', { class: 'login-modal login-modal--active' }, $button);
  }
}

export default LoginModal;
