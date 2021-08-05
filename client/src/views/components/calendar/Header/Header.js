import Component from '@lib/Component';
import { DAYS_OF_WEEK } from '@constants';
import $ from '@utils/dom';
import './Header.scss';

class CalendarHeader extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    return $(
      'div',
      { class: 'calendar-header' },
      ...DAYS_OF_WEEK.map(day => {
        return $('div', { class: 'calendar-header__day' }, day);
      }),
    );
  }
}

export default CalendarHeader;
