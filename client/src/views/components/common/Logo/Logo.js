import Component from '@lib/Component';
import $ from '@utils/dom';
import route from '@utils/route';
import './Logo.scss';

class Logo extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    const { className, name } = this.props;

    return $(
      'div',
      { class: `logo ${className}` },
      $('span', {}, name ? `${name}님의` : ''),
      $('span', {}, '우아한 가계부'),
    );
  }

  setEvent() {
    this.addEvent('click', '.logo', route.goUserPage);
  }
}

export default Logo;
