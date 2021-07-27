import Component from '../../lib/Component';
import { Count, Name } from '../../store';

const onClickButton = () => {
  Count.incrementCount();
};

const onClickAsyncButton = () => {
  Count.asyncIncrementCount();
};

const onClickNameButton = () => {
  Name.changeName();
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
    <div>
      <h1>${count} ${name}</h1>
      <button id="increment"> + </button>
      <button id="async"> async + </button>
      <button id="name">name</button>
    </div>
    `;
  }

  setEvent() {
    this.addEvent('click', '#increment', onClickButton);
    this.addEvent('click', '#async', onClickAsyncButton);
    this.addEvent('click', '#name', onClickNameButton);
  }
}

export default MainPage;
