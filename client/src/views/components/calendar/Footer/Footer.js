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
      <div class="calendar-footer__left">
        <div class="calendar-footer__left--pr">
          총 수입 <span>1,822,480</span>
        </div>
        <div>총 지출 <span>834,640</span></div>
      </div>
      <div class="calendar-footer__right">
        총계 <span>987,840</span>
      </div>
    `;

    return $calendarFooter;
  }
}

export default CalendarFooter;
