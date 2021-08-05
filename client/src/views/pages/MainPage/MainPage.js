import Component from '@lib/Component';
import { Layout, Form, History } from '@components';
import $ from '@utils/dom';
import './MainPage.scss';

class MainPage extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    return $(
      'div',
      { class: 'main-page' },
      new Layout({
        children: [new Form({}), new History()],
      }),
    );
  }
}

export default MainPage;
