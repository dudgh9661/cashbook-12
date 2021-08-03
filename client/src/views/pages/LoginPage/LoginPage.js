import Component from '@lib/Component';
import $ from '@utils/dom';
import './LoginPage.scss';

class LoginPage extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    return $('div', { class: 'login-page' }, 'This is Login Page');
  }
}

export default LoginPage;
