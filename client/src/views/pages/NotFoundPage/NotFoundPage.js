import Component from '../../../lib/Component';
import router from '../../../lib/Router';

const onClickBackButton = () => {
  router.back();
};

class NotFoundPage extends Component {
  template() {
    return `
      <div class="not-found-page">
        Not Found Page
        <button id="back">back</button>
      </div>
    `;
  }

  setEvent() {
    this.addEvent('click', '#back', onClickBackButton);
  }
}

export default NotFoundPage;
