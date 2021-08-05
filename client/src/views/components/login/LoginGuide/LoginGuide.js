import Component from '@lib/Component';
import $ from '@utils/dom';
import './LoginGuide.scss';
import helloImg from '@assets/pngs/hello.png';

class LoginGuide extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    return $(
      'div',
      { class: 'login-guide' },
      $('img', { src: helloImg, alt: 'hello' }),
      $('h1', { class: 'login-guide__msg' }, '내 맘에 드는걸로 로그인해요'),
    );
  }
}

export default LoginGuide;
