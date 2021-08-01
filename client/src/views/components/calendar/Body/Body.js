import Component from '@lib/Component';
import './Body.scss';

class CalendarBody extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    const { today, current, history } = this.props;

    const hasToday =
      today.year === current.year && today.month === current.month;

    const $calendarBody = document.createElement('table');
    $calendarBody.className = 'calendar-body';

    let date = -current.firstDay + 1;
    while (date <= current.lastDate) {
      const $dayRow = document.createElement('tr');
      $dayRow.className = 'calendar-body__week';

      for (let day = 0; day < 7; day += 1) {
        const curHistory = history && history.find(h => h.date === date);

        $dayRow.innerHTML += `
          <td class="calendar-body__day ${
            hasToday && today.date === date ? 'today' : ''
          }">
            <div class="day-content">
              <div class="day-content__info">
              ${
                curHistory
                  ? `<span class="plus">${
                      curHistory.income === 0 ? '' : curHistory.income
                    }</span>
                    <span class="minus">${
                      curHistory.expenses === 0 ? '' : curHistory.expenses
                    }</span>
                    <span>${curHistory.earning}</span>
                    `
                  : ''
              }
              </div>
              <div class="day-content__num">
                ${date > 0 && date <= current.lastDate ? date : ''}
              </div>
            </div>
          </td>
        `;
        date += 1;
      }

      $calendarBody.appendChild($dayRow);
    }

    return $calendarBody;
  }
}

export default CalendarBody;
