import Component from '@lib/Component';
import { Layout, Form, History } from '@components';
import './MainPage.scss';
import categoryData from '../../../_dummies/category.json';
import paymentMethod from '../../../_dummies/paymentMethod.json';

class MainPage extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const $mainPage = document.createElement('div');
    $mainPage.className = 'main-page';

    const $loginTest = document.createElement('a');
    $loginTest.textContent = '로그인 테스트';
    $loginTest.href =
      'https://github.com/login/oauth/authorize?client_id=04986225983a20a0d8c4';

    const $mainPageFrag = document.createDocumentFragment();
    $mainPageFrag.append(
      $loginTest,
      new Form({
        categories: categoryData.categories,
        paymentMethods: paymentMethod.methods,
      }).getElement(),
      new History({}).getElement(),
    );
    $mainPage.appendChild(
      new Layout({
        children: [$mainPageFrag],
      }).getElement(),
    );

    return $mainPage;
  }
}

export default MainPage;
