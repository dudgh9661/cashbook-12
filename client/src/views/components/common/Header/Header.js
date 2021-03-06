import Component from '@lib/Component';
import { User, DateInfo, History, HistoryReport } from '@store';
import $ from '@utils/dom';
import { chevronLeft, chevronRight } from '@assets/icons';
import Icon from '../Icon/Icon';
import Logo from '../Logo/Logo';
import Tab from '../Tab/Tab';
import './Header.scss';

const onClickNextMonth = () => {
  DateInfo.setNextMonth();
  History.setCurrentMonthHistory();
  HistoryReport.setMonthReport();
};

const onClickPrevtMonth = () => {
  DateInfo.setPrevMonth();
  History.setCurrentMonthHistory();
  HistoryReport.setMonthReport();
};

class Header extends Component {
  constructor() {
    super();

    this.currentPath = window.location.pathname;
    this.init();
  }

  setObserver() {
    DateInfo.observe('current', this.reRender.bind(this));
    User.observe('user', this.reRender.bind(this));
  }

  render() {
    const { year, month } = DateInfo.state.current;
    const { user } = User.state;
    const name = user && user.name;

    return $(
      'header',
      { class: 'header' },
      new Logo({ className: 'header__logo', name }),
      $(
        'nav',
        { class: 'header__nav' },
        Icon($('button', { id: 'go-left' }), chevronLeft),
        $(
          'div',
          { class: 'header__nav--middle' },
          $('span', { class: 'header__nav--middle-month' }, `${month}월`),
          $('span', { class: 'header__nav--middle-year' }, `${year}`),
        ),
        Icon($('button', { id: 'go-right' }), chevronRight),
      ),
      new Tab({
        className: 'header__tab',
        link: this.currentPath,
      }),
    );
  }

  setEvent() {
    this.addEvent('click', '#go-left', onClickPrevtMonth);
    this.addEvent('click', '#go-right', onClickNextMonth);
  }
}

export default Header;
