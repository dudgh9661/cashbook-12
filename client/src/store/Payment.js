import Observable from '@lib/Observable';
import api from '../utils/api';

class Payment extends Observable {
  async setPayments() {
    const payments = await api.fetchPayments();

    this.state.payments = payments;
  }

  async addPayment(name) {
    const payment = await api.postPayment(name);

    this.state.payments = [payment, ...this.state.payments];
  }
}

const initialState = {
  payments: [],
};

export default new Payment(initialState);
