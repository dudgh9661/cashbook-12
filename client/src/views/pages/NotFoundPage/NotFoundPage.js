import Component from '@lib/Component';

class NotFoundPage extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $div = document.createElement('div');
    $div.className = 'not-found-page';
    $div.innerText = 'This is Not Found Page';

    return $div;
  }
}

export default NotFoundPage;
