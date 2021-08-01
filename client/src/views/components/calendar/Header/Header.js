import Component from '@lib/Component';
import './Header.scss';

class CalendarHeader extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $calendarHeader = document.createElement('div');
    $calendarHeader.className = 'calendar-header';

    $calendarHeader.innerHTML = `
      ${['일', '월', '화', '수', '목', '금', '토']
        .map(day => {
          return `<div class="calendar-header__day">${day}</div>`;
        })
        .join('')}
    `;

    return $calendarHeader;
  }
}

export default CalendarHeader;
