import Observable from '@lib/Observable';

const initState = () => ({
  content: '',
  amount: '',
  date: '',
  categoryId: '',
  categoryName: '',
  paymentId: '',
  paymentName: '',
  isValid: false,
  id: null,
});

class FormStore extends Observable {
  setId(id) {
    this.state.id = id;
  }

  setContent(content) {
    this.state.content = content;
    this.setValid();
  }

  setAmount(amount) {
    this.state.amount = amount;
    this.setValid();
  }

  setCategory(id, name) {
    this.state.categoryId = id;
    this.state.categoryName = name;
    this.setValid();
  }

  setPayment(id, name) {
    this.state.paymentId = id;
    this.state.paymentName = name;
    this.setValid();
  }

  setDate(date) {
    this.state.date = date;
    this.setValid();
  }

  setValid() {
    this.state.isValid = !!(
      this.state.content &&
      this.state.amount &&
      this.state.categoryId &&
      this.state.paymentId &&
      this.state.date
    );
  }

  resetState() {
    Object.assign(this.state, initState());
  }
}

const initialState = initState();

export default new FormStore(initialState);
