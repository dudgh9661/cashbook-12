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
      <h1>Calendar Header</h1>
    `;

    return $calendarHeader;
  }
}

export default CalendarHeader;
