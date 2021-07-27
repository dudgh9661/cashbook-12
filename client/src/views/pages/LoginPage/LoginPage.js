import Component from '../../../lib/Component';
import router from '../../../lib/Router';
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
