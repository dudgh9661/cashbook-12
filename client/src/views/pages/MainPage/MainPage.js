import Component from '@lib/Component';
import { Layout, Form, History } from '@components';
import categoryData from '../../../_dummies/category.json';
import paymentMethod from '../../../_dummies/paymentMethod.json';
import './MainPage.scss';

class MainPage extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $mainPage = document.createElement('div');
    $mainPage.className = 'main-page';

    const $mainPageFrag = document.createDocumentFragment();
    $mainPageFrag.append(
      new Form({
        categories: categoryData.categories,
        paymentMethods: paymentMethod.methods,
      }).getElement(),
      new History({}).getElement(),
    );
    $mainPage.appendChild(
      new Layout({
        content: $mainPageFrag,
      }).getElement(),
    );

    return $mainPage;
  }
}

export default MainPage;
