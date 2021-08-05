import Component from '@lib/Component';
import $ from '@utils/dom';
import { Modal, LoginForm } from '@components';
import UserPage from '../UserPage/UserPage';
import './LoginPage.scss';

class LoginPage extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    return $(
      'div',
      { class: 'login-page' },
      new UserPage(),
      new Modal({
        visible: true,
        hasFooter: false,
        children: [new LoginForm()],
      }),
    );
  }
}

export default LoginPage;
