import Component from '@lib/Component';
import { DateInfo, History } from '@store';
import { moneyWithComma, animateNumber } from '@utils';
import $ from '@utils/dom';
import route from '@utils/route';
import { CALENDAR_SAMPLE_DATA } from '@constants';
import Wrapper from '../../common/Wrapper/Wrapper';
import CalendarHeader from '../Header/Header';
import CalendarBody from '../Body/Body';
import './SmallCalendar.scss';

class SmallCalendar extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  setData() {
    const { isSample } = this.props;
    if (isSample) return CALENDAR_SAMPLE_DATA;
    return History.state;
  }

  setObserver() {
    DateInfo.observe('current', this.reRender.bind(this));
    History.observe('history', this.reRender.bind(this));
    History.observe('total', this.reRender.bind(this));
  }

  render() {
    const { today, current } = DateInfo.state;
    const { history, total } = this.setData();
    const curMonth =
      today.year === current.year && today.month === current.month
        ? '이번 달'
        : `${current.month}월`;
    const incomeValue = total.income && moneyWithComma(total.income);
    const expensesValue = total.expenses && moneyWithComma(total.expenses);
    const earningValue = total.earning && moneyWithComma(total.earning);

    const $calendarContent = $(
      'div',
      { class: 'small-calendar' },
      $(
        'div',
        { class: 'small-calendar__total' },
        $(
          'h1',
          { class: 'small-calendar__total--title' },
          `${curMonth} 총계 `,
          $('span', { class: 'value total-value' }, earningValue),
        ),
        $(
          'div',
          { class: 'small-calendar__total--value' },
          $('span', {}, '총 수입 '),
          $('span', { class: 'value' }, incomeValue),
        ),
        $(
          'div',
          { class: 'small-calendar__total--value' },
          $('span', {}, '총 지출 '),
          $('span', { class: 'value' }, expensesValue),
        ),
      ),
      $(
        'div',
        { class: 'small-calendar__calendar' },
        new CalendarHeader(),
        new CalendarBody({ today, current, history, isSmall: true }),
        $(
          'button',
          { type: 'button', class: 'small-calendar__calendar--btn detail-btn' },
          `${curMonth} 달력 상세히 보러가기`,
        ),
      ),
    );

    return new Wrapper({
      children: [$calendarContent],
    }).getElement();
  }

  setEvent() {
    const { earning } = this.setData().total;
    const $target = this.$element.querySelector('.total-value');
    if (!$target) return;

    animateNumber(0, earning, $target);

    this.addEvent('click', '.detail-btn', route.goCalendarPage);
  }

  didMount() {
    const { isSample } = this.props;
    if (!isSample) History.setCurrentMonthHistory();
  }

  toggleModal() {
    this.state.modalVisible = !this.state.modalVisible;
    this.reRender();
  }
}

export default SmallCalendar;
