import router from '@lib/Router';
import Component from '@lib/Component';
import './LoginPage.scss';

const onClickMainBitton = () => {
  router.push('/');
};
class LoginPage extends Component {
  template() {
    return `
      <div class="login-page">        
        <button id="main">main</button>
      </div>
    `;
  }

  setEvent() {
    this.addEvent('click', '#main', onClickMainBitton);
  }
}

export default LoginPage;
