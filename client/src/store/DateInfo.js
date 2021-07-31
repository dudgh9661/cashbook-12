import Observable from '@lib/Observable';

class DateInfo extends Observable {
  setNextMonth() {
    const { current } = this.state;

    if (current.month === 12) {
      this.state.current = {
        year: current.year + 1,
        month: 1,
        lastDate: new Date(current.year + 1, 1, 0).getDate(),
        firstDay: new Date(current.year + 1, 0, 1).getDay(),
      };
    } else {
      this.state.current = {
        year: current.year,
        month: current.month + 1,
        lastDate: new Date(current.year, current.month + 1, 0).getDate(),
        firstDay: new Date(current.year, current.month, 1).getDay(),
      };
    }
  }

  setPrevMonth() {
    const { current } = this.state;

    if (current.month === 1) {
      this.state.current = {
        year: current.year - 1,
        month: 12,
        lastDate: new Date(current.year - 1, 12, 0).getDate(),
        firstDay: new Date(current.year - 1, 11, 1).getDay(),
      };
    } else {
      this.state.current = {
        year: current.year,
        month: current.month - 1,
        lastDate: new Date(current.year, current.month - 1, 0).getDate(),
        firstDay: new Date(current.year, current.month - 2, 1).getDay(),
      };
    }
  }
}

const date = new Date();

const initialState = {
  today: {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
  },
  current: {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    lastDate: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
    firstDay: new Date(date.getFullYear(), date.getMonth(), 1).getDay(),
  },
};

export default new DateInfo(initialState);
