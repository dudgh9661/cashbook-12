import Component from '@lib/Component';
import { moneyWithComma } from '@utils';
import $ from '@utils/dom';
import './Footer.scss';

class CalendarFooter extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    const { total } = this.props;

    const incomeValue = total.income && moneyWithComma(total.income);
    const expensesValue = total.expenses && moneyWithComma(total.expenses);
    const earningValue = total.earning && moneyWithComma(total.earning);

    return $(
      'div',
      { class: 'calendar-footer' },
      $(
        'div',
        { class: 'calendar-footer__left' },
        $('div', {}, '총수입 ', $('span', {}, incomeValue)),
        $('div', {}, '총지출 ', $('span', {}, expensesValue)),
      ),
      $(
        'div',
        { class: 'calendar-footer__right' },
        '총계 ',
        $('span', {}, earningValue),
      ),
    );
  }
}

export default CalendarFooter;
