import Component from '@lib/Component';
import { DateInfo, History } from '@store';
import CalendarHeader from './Header/Header';
import CalendarBody from './Body/Body';
import CalendarFooter from './Footer/Footer';

const prevMonthHandler = () => {
  DateInfo.setPrevMonth();
  History.getCurrentMonthHistory();
  History.getCurrentMonthTotal();
};

class Calendar extends Component {
  constructor() {
    super();

    this.init();
  }

  setObserver() {
    DateInfo.observe('current', this.reRender.bind(this));
    History.observe('history', this.reRender.bind(this));
    History.observe('total', this.reRender.bind(this));
  }

  render() {
    const { today, current } = DateInfo.state;
    const { history, total } = History.state;

    const $calendar = document.createElement('section');
    $calendar.className = 'calendar';

    $calendar.append(
      new CalendarHeader().getElement(),
      new CalendarBody({ today, current, history }).getElement(),
      new CalendarFooter({ total }).getElement(),
    );

    return $calendar;
  }

  setEvent() {
    this.addEvent('click', '.calendar', prevMonthHandler);
  }

  didMount() {
    History.getCurrentMonthHistory();
    History.getCurrentMonthTotal();
  }
}

export default Calendar;
