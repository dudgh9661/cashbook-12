import Component from '@lib/Component';
import './CalendarPage.scss';

class CalendarPage extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $div = document.createElement('div');
    $div.className = 'calendar-page';
    $div.innerText = 'This is Calendar Page';

    return $div;
  }
}

export default CalendarPage;
