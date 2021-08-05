import Component from '@lib/Component';
import $ from '@utils/dom';
import welcomeImg from '@assets/pngs/welcome.png';
import './Welcome.scss';
import Wrapper from '../../common/Wrapper/Wrapper';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  render() {
    return new Wrapper({
      children: [
        $(
          'div',
          { class: 'welcome' },
          $(
            'h1',
            { class: 'welcome__msg' },
            $('span', {}, 'Woowahan님,'),
            $('span', {}, '안녕하세요!'),
          ),
          $('img', { src: welcomeImg, alt: 'welcome' }),
        ),
      ],
    }).getElement();
  }
}

export default Welcome;
