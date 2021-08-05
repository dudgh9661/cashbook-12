import Observable from '@lib/Observable';
import api from '../utils/api';
import FormStore from './Form';

class Payment extends Observable {
  async setPayments() {
    const payments = await api.fetchPayments();

    this.state.payments = payments;
  }

  async addPayment(name) {
    const payment = await api.postPayment({ name });

    FormStore.setPayment(payment.id, payment.name);
    this.state.payments = [payment, ...this.state.payments];
  }

  async deletePayment(id) {
    await api.deletePayment(id);

    this.state.payments = this.state.payments.filter(p => +p.id !== +id);
  }
}

const initialState = {
  payments: [],
};

export default new Payment(initialState);
