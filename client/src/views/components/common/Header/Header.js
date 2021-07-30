import Component from '@lib/Component';
import './Header.scss';
import { calendar, chart, fileText } from '@assets/icons';

class Header extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $header = document.createElement('header');
    $header.className = 'header';

    const $logo = document.createElement('div');
    $logo.className = 'header__logo';
    $logo.innerText = '우아한 가계부';

    const $nav = document.createElement('nav');
    $nav.className = 'header__nav';
    $nav.innerText = '7월';

    const $tab = document.createElement('div');
    $tab.className = 'header__tab';
    $tab.innerHTML += fileText;
    $tab.innerHTML += calendar;
    $tab.innerHTML += chart;

    $header.appendChild($logo);
    $header.appendChild($nav);
    $header.appendChild($tab);

    return $header;
  }
}

export default Header;
