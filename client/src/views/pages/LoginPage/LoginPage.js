import Component from '@lib/Component';
import { User } from '@store';
import { Layout, Modal, LoginForm, Welcome, MonthChart } from '@components';
import $ from '@utils/dom';
import './LoginPage.scss';

class LoginPage extends Component {
  constructor() {
    super();

    this.init();
  }

  setObserver() {
    User.observe('user', this.toggleModal.bind(this));
  }

  render() {
    return $(
      'div',
      { class: 'login-page' },
      new Layout({
        className: 'blur',
        children: [
          $(
            'div',
            { class: 'login-page__main' },
            $('div', { class: 'login-page__main--left' }, new Welcome()),
            $('div', { class: 'login-page__main--right' }, new MonthChart()),
          ),
        ],
      }),
      new Modal({
        visible: true,
        hasFooter: false,
        children: [new LoginForm()],
      }),
    );
  }

  toggleModal() {
    if (User.state.user) {
      this.$element.classList.remove('login-modal--active');
    } else {
      this.$element.classList.add('login-modal--active');
    }
  }
}

export default LoginPage;
