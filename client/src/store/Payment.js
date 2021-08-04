import Observable from '@lib/Observable';
import Api from '../utils/api';

class Payment extends Observable {
  async setPayments() {}

  async addPayment() {}
}

const initialState = {
  payments: [],
};

export default new Payment(initialState);
