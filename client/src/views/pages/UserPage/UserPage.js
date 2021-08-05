import Component from '@lib/Component';
import { User } from '@store';
import { Layout, UserInfo, SmallChart, SmallCalendar } from '@components';
import $ from '@utils/dom';
import './UserPage.scss';

class UserPage extends Component {
  constructor() {
    super();

    this.init();
  }

  setObserver() {
    User.observe('user', this.reRender.bind(this));
  }

  render() {
    const { user } = User.state;
    const name = user && user.name;

    return $(
      'div',
      { class: `user-page ${!user ? 'blur' : ''}` },
      new Layout({
        children: [
          $(
            'div',
            { class: 'user-page__main' },
            $(
              'div',
              { class: 'user-page__main--left' },
              new UserInfo({ name }),
            ),
            $(
              'div',
              { class: 'user-page__main--right' },
              new SmallChart({ isSample: !user }),
              new SmallCalendar({ isSample: !user }),
            ),
          ),
        ],
      }),
    );
  }
}

export default UserPage;
