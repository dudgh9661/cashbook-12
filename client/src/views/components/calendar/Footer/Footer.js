import Component from '@lib/Component';
import './Footer.scss';

class CalendarFooter extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $calendarFooter = document.createElement('div');
    $calendarFooter.className = 'calendar-footer';

    $calendarFooter.innerHTML = `
      <h1>Calendar Footer</h1>
    `;

    return $calendarFooter;
  }
}

export default CalendarFooter;
