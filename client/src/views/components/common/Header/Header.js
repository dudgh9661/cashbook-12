import Component from '@lib/Component';
import { DateInfo, History } from '@store';
import router from '@lib/Router';
import './Header.scss';
import {
  calendar,
  chart,
  fileText,
  chevronLeft,
  chevronRight,
} from '@assets/icons';

const onClickNextMonth = () => {
  DateInfo.setNextMonth();
  History.setCurrentMonthHistory();
  History.setCurrentMonthTotal();
};
const onClickPrevtMonth = () => {
  DateInfo.setPrevMonth();
  History.setCurrentMonthHistory();
  History.setCurrentMonthTotal();
};
const onClickMainTab = () => router.push('/');
const onClickCalendarTab = () => router.push('/calendar');
const onClickChartTab = () => router.push('/chart');

class Header extends Component {
  constructor(props) {
    super(props);

    this.currentPath = window.location.pathname;
    this.init();
  }

  setObserver() {
    DateInfo.observe('current', this.reRender.bind(this));
  }

  render() {
    const $header = document.createElement('header');
    $header.className = 'header';

    const $logo = document.createElement('div');
    $logo.className = 'header__logo';
    $logo.innerText = '우아한 가계부';

    const $nav = document.createElement('nav');
    $nav.innerHTML = `
      <button id="go-left">${chevronLeft}</button>
        <div class="header__nav-middle">
          <span class="month">${DateInfo.state.current.month}월</span>
          <span class="year">${DateInfo.state.current.year}</span>
        </div>
      <button id="go-right">${chevronRight}</button>
    `;
    $nav.className = 'header__nav';

    const $tab = document.createElement('div');
    $tab.className = 'header__tab';
    $tab.innerHTML = `
      <button id="tab-main" class="${
        this.currentPath === '/' ? 'header__tab-active' : ''
      }">
      ${fileText}
      </button> 
      <button id="tab-calendar" class="${
        this.currentPath === '/calendar' ? 'header__tab-active' : ''
      }">
      ${calendar}
      </button> 
      <button id="tab-chart" class="${
        this.currentPath === '/chart' ? 'header__tab-active' : ''
      }">
        ${chart}
      </button> 
    `;

    $header.append($logo, $nav, $tab);

    return $header;
  }

  setEvent() {
    this.addEvent('click', '#go-left', onClickPrevtMonth);
    this.addEvent('click', '#go-right', onClickNextMonth);
    this.addEvent('click', '#tab-main', onClickMainTab);
    this.addEvent('click', '#tab-calendar', onClickCalendarTab);
    this.addEvent('click', '#tab-chart', onClickChartTab);
  }
}

export default Header;
