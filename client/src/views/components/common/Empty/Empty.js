import Component from '@lib/Component';
import './Empty.scss';
import $ from '@utils/dom';

class Empty extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    return $(
      'div',
      { class: `empty` },
      $('h1', { class: 'empty__text' }, '텅'),
    );
  }
}

export default Empty;
