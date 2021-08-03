import Component from '@lib/Component';
import { Layout, Form, History, LoginModal } from '@components';
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

    const $logoutTest = document.createElement('button');
    $logoutTest.textContent = '로그아웃 테스트';
    $logoutTest.href = 'https://localhost:5000/api/auth/logout';
    $logoutTest.onclick = () => {
      console.log('dd');
      fetch('http://localhost:5000/api/auth/logout', {
        method: 'POST',
      }).then(res => {
        console.log(res.ok, '@@');
        if (res.ok) {
          window.location.reload();
        }
      });
    };

    const $mainPageFrag = document.createDocumentFragment();
    $mainPageFrag.append(
      $logoutTest,
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
