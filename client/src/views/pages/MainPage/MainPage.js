import Component from '@lib/Component';
import { Layout, Form, History } from '@components';
import $ from '@utils/dom';
import './MainPage.scss';
import categoryData from '../../../_dummies/category.json';
import paymentMethod from '../../../_dummies/paymentMethod.json';

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
        children: [
          new Form({
            categories: categoryData.categories,
            paymentMethods: paymentMethod.methods,
          }),
          new History(),
        ],
      }),
    );
  }
}

export default MainPage;
