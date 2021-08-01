import Component from '@lib/Component';
import './Footer.scss';

class CalendarFooter extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    const { total } = this.props;

    const $calendarFooter = document.createElement('div');
    $calendarFooter.className = 'calendar-footer';

    $calendarFooter.innerHTML = `
      <div class="calendar-footer__left">
        <div class="calendar-footer__left--pr">
          총 수입 <span>${total.income}</span>
        </div>
        <div>총 지출 <span>${total.expenses}</span></div>
      </div>
      <div class="calendar-footer__right">
        총계 <span>${total.earning}</span>
      </div>
    `;

    return $calendarFooter;
  }
}

export default CalendarFooter;
