import MainModel from '../../models';

class Main {
  constructor($parent, router) {
    this.$parent = $parent;
    this.router = router;

    MainModel.observe('count', this.render.bind(this));
  }

  onClickButton() {
    MainModel.incrementCount();
  }

  onClickAsyncButton() {
    MainModel.asyncIncrementCount();
  }

  onClickLoginButton() {
    this.router.push('/login');
  }

  onClickBackButton() {
    this.router.back();
  }

  render() {
    const { count } = MainModel.state;
    this.$parent.innerHTML = `
    <div>
      <h1>${count}</h1>
      <button id="icrement"> + </button>
      <button id="async"> async + </button>
      <button id="login"> login </button>
      <button id="back"> back </button>
    </div>
    `;
    this.addEvents();
  }

  addEvents() {
    const $btn = document.getElementById('icrement');
    $btn.addEventListener('click', this.onClickButton);

    const $asyncBtn = document.getElementById('async');
    $asyncBtn.addEventListener('click', this.onClickAsyncButton);

    const $login = document.getElementById('login');
    $login.addEventListener('click', this.onClickLoginButton.bind(this));

    const $back = document.getElementById('back');
    $back.addEventListener('click', this.onClickBackButton.bind(this));
  }
}

export default Main;
