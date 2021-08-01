import Component from '@lib/Component';
import { DAYS_OF_WEEK } from '@constants';
import { DateInfo } from '@store';
import './Header.scss';

const onClickNextMonth = () => DateInfo.setNextMonth();
const onClickPrevMonth = () => DateInfo.setPrevMonth();

class CalendarHeader extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $calendarHeader = document.createElement('div');
    $calendarHeader.className = 'calendar-header';

    $calendarHeader.innerHTML = `
      ${DAYS_OF_WEEK.map(day => {
        return `<div class="calendar-header__day">${day}</div>`;
      }).join('')}
    `;

    return $calendarHeader;
  }
}

export default CalendarHeader;
