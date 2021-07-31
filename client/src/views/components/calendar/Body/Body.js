import Component from '@lib/Component';
import './Body.scss';

class CalendarBody extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $calendarBody = document.createElement('div');
    $calendarBody.className = 'calendar-body';

    $calendarBody.innerHTML = `
      <h1>Calendar Body</h1>
    `;

    return $calendarBody;
  }
}

export default CalendarBody;
