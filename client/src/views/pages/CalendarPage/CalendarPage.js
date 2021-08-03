import Component from '@lib/Component';
import { Layout, Calendar } from '@components';
import $ from '@utils/dom';
import './CalendarPage.scss';

class CalendarPage extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    return $(
      'div',
      { class: 'calendar-page' },
      new Layout({ children: [new Calendar()] }),
    );
  }
}

export default CalendarPage;
