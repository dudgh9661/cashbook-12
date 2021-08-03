import Component from '@lib/Component';
import $ from '@utils/dom';

class NotFoundPage extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    return $('div', { class: 'not-found-page' }, 'This is Not Found Page');
  }
}

export default NotFoundPage;
