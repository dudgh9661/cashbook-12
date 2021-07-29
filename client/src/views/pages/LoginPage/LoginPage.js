import Component from '@lib/Component';
import './LoginPage.scss';

class LoginPage extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $div = document.createElement('div');
    $div.className = 'login-page';
    $div.innerText = 'This is Login Page';

    return $div;
  }
}

export default LoginPage;
