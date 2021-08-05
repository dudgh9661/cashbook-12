import Component from '@lib/Component';
import { debounce } from '@utils/helper';
import { moneyWithComma } from '@utils';
import $ from '@utils/dom';
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

  return tooltip;
};

class CalendarBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTooltip: null,
      $curTooltipTarget: null,
    };

    this.init();
  }

  render() {
    return $('table', { class: 'calendar-body' }, ...this.renderCalendar());
  }

  renderCalendar() {
    const { today, current, history, isSmall = false } = this.props;
    const hasToday =
      today.year === current.year && today.month === current.month;

    const calendar = [];

    let date = -current.firstDay + 1;
    while (date <= current.lastDate) {
      const week = [];

      for (let day = 0; day < 7; day += 1) {
        const curHistory = history && history[date];
        week.push(
          $(
            'td',
            {
              class: `calendar-body__day ${isSmall ? 'small' : ''} ${
                hasToday && today.date === date ? 'today' : ''
              } ${!isSmall && curHistory ? 'exist' : ''}`,
            },
            this.renderDay(curHistory, date),
          ),
        );

        date += 1;
      }

      calendar.push($('tr', { class: 'calendar-body__week' }, ...week));
    }

    return calendar;
  }

  renderDay(curHistory, date) {
    const { current } = this.props;

    let history = [];
    const dateValue = date > 0 && date <= current.lastDate ? date : '';

    if (curHistory) {
      const { income, expenses, earning } = curHistory;

      const incomeValue = income === 0 ? '' : moneyWithComma(income);
      const expensesValue = expenses === 0 ? '' : moneyWithComma(expenses);
      const earningValue = moneyWithComma(earning);

      history = [
        $('span', { class: 'plus' }, incomeValue),
        $('span', { class: 'minus' }, expensesValue),
        $('span', {}, earningValue),
        $('div', { class: 'circle' }),
      ];
    }

    return $(
      'div',
      { class: 'day-content' },
      $('div', { class: 'day-content__info' }, ...history),
      $('div', { class: 'day-content__num' }, dateValue),
    );
  }

  setEvent() {
    this.addEvent(
      'click',
      '.calendar-body__day.exist',
      this.toggleTooltip.bind(this),
    );
    window.addEventListener(
      'resize',
      debounce(this.onResizeHandler.bind(this), 100),
    );
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
        this.state.curTooltip = null;
        this.state.$curTooltipTarget = null;
        return;
      }
    }

    this.state.curTooltip = showTooltip($target);
    this.state.$curTooltipTarget = $target;
  }

  onResizeHandler() {
    const { curTooltip, $curTooltipTarget } = this.state;
    if (window.innerWidth > 768 || !curTooltip) return;

    const parentWidth = $curTooltipTarget.getBoundingClientRect().width;
    const tooltipWidth = curTooltip.getDOMRect().width;
    curTooltip.setPosition({
      left: `${(parentWidth - tooltipWidth) / 2}px`,
    });
  }
}

export default CalendarBody;
