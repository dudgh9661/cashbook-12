import Component from '@lib/Component';
import { User } from '@store';
import $ from '@utils/dom';
import congratsImg from '@assets/gifs/congrats.gif';
import './NotFoundPage.scss';

class NotFoundPage extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const { user } = User.state;
    const name = user && user.name;

    return $(
      'div',
      { class: `not-found-page layout` },
      $('div', { class: 'layout__point-bg' }),
      $(
        'div',
        { class: 'not-found-page__content layout__container' },
        $('span', { class: 'text-404' }, '404'),
        $('img', { src: congratsImg, alt: 'congrats' }),
        $(
          'span',
          { class: 'text-guide' },
          `${name ? `${name}님은` : '당신은'} 미지의 영역에 들어오셨습니다!`,
        ),
      ),
    );
  }
}

export default NotFoundPage;
