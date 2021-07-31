import Component from '@lib/Component';
import CalendarHeader from './Header/Header';
import CalendarBody from './Body/Body';
import CalendarFooter from './Footer/Footer';

class Calendar extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $calendar = document.createElement('section');
    $calendar.className = 'calendar';

    $calendar.append(
      new CalendarHeader().getElement(),
      new CalendarBody().getElement(),
      new CalendarFooter().getElement(),
    );

    return $calendar;
  }
}

export default Calendar;
