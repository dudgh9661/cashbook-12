import Component from '../../../lib/Component';
import { Count, Name } from '../../../store';
import './MainPage.scss';
import calendarIcon from '../../../assets/icons/calendar.svg';
import router from '../../../lib/Router';

const onClickButton = () => {
  Count.incrementCount();
};

const onClickAsyncButton = () => {
  Count.asyncIncrementCount();
};

const onClickNameButton = () => {
  Name.changeName();
};
const onClickLoginButton = () => {
  router.push('/login');
};

class MainPage extends Component {
  init() {
    Count.observe('count', this.render.bind(this));
    Name.observe('name', this.render.bind(this));
  }

  template() {
    const { count } = Count.state;
    const { name } = Name.state;
    return `
      <div class="main-page">
        <h1 class="main-page__header">${count} ${name}</h1>
        <img src="${calendarIcon}" alt="icon" />
        <button id="increment"> + </button>
        <button id="async"> async + </button>
        <button id="name">name</button>
        <button id="login">login</button>
      </div>
    `;
  }

  setEvent() {
    this.addEvent('click', '#increment', onClickButton);
    this.addEvent('click', '#async', onClickAsyncButton);
    this.addEvent('click', '#name', onClickNameButton);
    this.addEvent('click', '#login', onClickLoginButton);
  }
}

export default MainPage;
