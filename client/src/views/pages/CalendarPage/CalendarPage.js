import Component from '@lib/Component';
import { Layout, Calendar } from '@components';
import './CalendarPage.scss';

class CalendarPage extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $calendarPage = document.createElement('div');
    $calendarPage.className = 'calendar-page';

    $calendarPage.appendChild(
      new Layout({
        content: new Calendar().getElement(),
      }).getElement(),
    );

    return $calendarPage;
  }
}

export default CalendarPage;
