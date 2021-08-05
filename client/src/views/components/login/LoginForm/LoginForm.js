import Component from '@lib/Component';
import $ from '@utils/dom';
import { GITHUB_REDIRECT_URL } from '@constants';
import github from '@assets/svgs/github.svg';
import './LoginForm.scss';

class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    return $(
      'form',
      { class: 'login-form' },
      $(
        'div',
        { class: 'login-form__name' },
        $('input', { type: 'text', placeholder: '아이디를 입력하세요.' }),
        $('button', { type: 'button' }, '아이디로 로그인'),
      ),
      $('div', { class: 'login-form__div' }, $('span', {}, 'or')),
      $(
        'div',
        { class: 'login-form__github' },
        $(
          'button',
          { type: 'button', class: 'github-login-btn' },
          $('img', { src: github, alt: 'github' }),
          'Github로 로그인',
        ),
      ),
    );
  }

  setEvent() {
    this.addEvent('click', '.github-login-btn', () => {
      window.location.href = GITHUB_REDIRECT_URL;
    });
  }
}

export default LoginModal;
