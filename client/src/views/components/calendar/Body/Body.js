import Component from '@lib/Component';
import { DateInfo } from '@store';
import './Body.scss';

const prevMonthHandler = () => {
  DateInfo.setPrevMonth();
};

class CalendarBody extends Component {
  constructor() {
    super();

    this.init();
  }

  setObserver() {
    DateInfo.observe('current', this.reRender.bind(this));
  }

  render() {
    const { current } = DateInfo.state;

    const $calendarBody = document.createElement('table');
    $calendarBody.className = 'calendar-body';

    let date = -current.firstDay + 1;
    while (date <= current.date) {
      const $dayRow = document.createElement('tr');
      $dayRow.className = 'calendar-body__week';

      for (let day = 0; day < 7; day += 1) {
        $dayRow.innerHTML += `
          <td class="calendar-body__day">
            <div class="day-content">
              <span></span>
              <span class="day-content__num">
                ${date > 0 && date <= current.date ? date : ''}
              </span>
            </div>
          </td>
        `;
        date += 1;
      }

      $calendarBody.appendChild($dayRow);
    }

    return $calendarBody;
  }

  setEvent() {
    this.addEvent('click', '.calendar-body', prevMonthHandler);
  }
}

export default CalendarBody;
