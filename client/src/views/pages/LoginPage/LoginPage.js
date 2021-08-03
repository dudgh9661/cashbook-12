import Component from '@lib/Component';
import $ from '@utils/dom';
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

    const $loginTest = document.createElement('a');
    $loginTest.textContent = '이거 눌러서 로그인 하세용~';
    $loginTest.href =
      'https://github.com/login/oauth/authorize?client_id=04986225983a20a0d8c4';

    $div.append($loginTest);

    return $div;
  }
}

export default LoginPage;
