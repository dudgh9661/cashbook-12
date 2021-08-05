import Component from '@lib/Component';
import $ from '@utils/dom';
import { User } from '@store';
import { GITHUB_REDIRECT_URL } from '@constants';
import github from '@assets/svgs/github.svg';
import LoginGuide from '../LoginGuide/LoginGuide';
import './LoginForm.scss';

const createUser = name => {
  User.createUser(name);
};

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    return $(
      'form',
      { class: 'login-form' },
      new LoginGuide(),
      $(
        'div',
        { class: 'login-form__name' },
        $('input', {
          type: 'text',
          placeholder: '아이디를 입력하세요.',
          id: 'id-input',
        }),
        $(
          'button',
          { type: 'button', class: 'id-login-btn' },
          '아이디 생성 및 로그인',
        ),
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
    this.addEvent('keypress', '#id-input', e => {
      if (e.keyCode === 13) {
        e.preventDefault();
        this.handleCreateUser();
      }
    });

    this.addEvent('click', '.id-login-btn', this.handleCreateUser.bind(this));

    this.addEvent('click', '.github-login-btn', () => {
      window.location.href = GITHUB_REDIRECT_URL;
    });
  }

  handleCreateUser() {
    const idInputValue = this.$element.querySelector('#id-input').value;
    createUser(idInputValue);
  }
}

export default LoginForm;
