import Component from '@lib/Component';
import { moneyWithComma } from '@utils';
import Tooltip from '../../common/Tooltip/Tooltip';
import './Body.scss';

const hideTooltip = $target => {
  $target.classList.remove('active');
  $target.removeChild($target.querySelector('.tooltip'));
};

const showTooltip = $target => {
  $target.classList.add('active');

  const $info = document.createDocumentFragment();
  $target
    .querySelectorAll('.day-content__info span')
    .forEach(element => $info.appendChild(element.cloneNode(true)));

  const tooltip = new Tooltip({ content: $info });
  $target.appendChild(tooltip.getElement());

  const parentWidth = $target.getBoundingClientRect().width;
  const tooltipWidth = tooltip.getDOMRect().width;
  tooltip.setPosition({
    top: '103%',
    left: `${(parentWidth - tooltipWidth) / 2}px`,
  });
};

class CalendarBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      $curTooltipTarget: null,
    };

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
          <td 
            class="calendar-body__day 
            ${hasToday && today.date === date ? 'today' : ''} 
            ${curHistory ? 'exist' : ''}">
            <div class="day-content">
              <div class="day-content__info">
              ${
                curHistory
                  ? `<span class="plus">${
                      curHistory.income === 0
                        ? ''
                        : moneyWithComma(curHistory.income)
                    }</span>
                    <span class="minus">${
                      curHistory.expenses === 0
                        ? ''
                        : `-${moneyWithComma(curHistory.expenses)}`
                    }</span>
                    <span>${moneyWithComma(curHistory.earning)}</span>
                    <div class="circle"></div>
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

  setEvent() {
    this.addEvent(
      'click',
      '.calendar-body__day.exist',
      this.toggleTooltip.bind(this),
    );
    window.addEventListener('resize', this.onResizeHandler.bind(this));
  }

  toggleTooltip(e) {
    if (window.innerWidth > 768) return;

    const { $curTooltipTarget } = this.state;
    const $target = e.target.closest('.calendar-body__day');

    if ($curTooltipTarget) {
      if ($target !== $curTooltipTarget) {
        hideTooltip($curTooltipTarget);
      } else {
        hideTooltip($target);
        this.state.$curTooltipTarget = null;
        return;
      }
    }

    showTooltip($target);
    this.state.$curTooltipTarget = $target;
  }

  onResizeHandler() {
    const { $curTooltipTarget } = this.state;
    if (window.innerWidth > 768 || !$curTooltipTarget) return;

    setPositionTooltip(
      $curTooltipTarget,
      $curTooltipTarget.querySelector('.tooltip'),
    );
  }
}

export default CalendarBody;
