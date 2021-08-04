import Component from '@lib/Component';
import { DateInfo, History } from '@store';
import $ from '@utils/dom';
import CalendarHeader from './Header/Header';
import CalendarBody from './Body/Body';
import CalendarFooter from './Footer/Footer';

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

    return $(
      'section',
      { class: 'calendar' },
      new CalendarHeader(),
      new CalendarBody({ today, current, history }),
      new CalendarFooter({ total }),
    );
  }

  didMount() {
    History.setCurrentMonthHistory();
    History.setCurrentMonthTotal();
  }
}

export default Calendar;
