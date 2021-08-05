import Component from '@lib/Component';
import $ from '@utils/dom';
import { User } from '@store';
import welcomeImg from '@assets/pngs/welcome.png';
import Wrapper from '../../common/Wrapper/Wrapper';
import './UserInfo.scss';

const handleLogout = () => {
  User.removeUser();
};

class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    const { name } = this.props;

    return new Wrapper({
      children: [
        $(
          'div',
          { class: 'user-info' },
          $(
            'div',
            { class: 'user-info__account' },
            $(
              'h1',
              { class: 'user-info__msg' },
              $('span', {}, `${name || 'Woowahan'}님,`),
              $('span', {}, '안녕하세요!'),
            ),
            $(
              'button',
              { type: 'button', class: 'user-info__logout logout-btn' },
              '로그아웃하기',
            ),
          ),
          $(
            'div',
            { class: 'user-info__img' },
            $('img', { src: welcomeImg, alt: 'welcome' }),
          ),
        ),
      ],
    }).getElement();
  }

  setEvent() {
    this.addEvent('click', '.logout-btn', handleLogout);
  }
}

export default UserInfo;
