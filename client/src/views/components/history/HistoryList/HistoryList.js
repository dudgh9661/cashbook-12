import Component from '@lib/Component';
import { HistoryItem } from '@components';
import './HistoryList.scss';

class HistoryList extends Component {
  constructor() {
    super();

    this.init();
  }

  render() {
    const dummyData = {
      timestamp: '2021-07-15',
      historyItemList: [
        {
          category: { text: '문화/여가', color: '#D092E2' },
          description: '스트리밍 서비스 정기 결제',
          paymentMethod: '현대카드',
          amount: -10990,
        },
        {
          category: { text: '교통', color: '#94D3CC' },
          description: '후불 교통비 결제',
          paymentMethod: '현대카드',
          amount: -45340,
        },
        {
          category: { text: '미분류', color: '#817DCE' },
          description: '온라인 세미나 신청',
          paymentMethod: '현대카드',
          amount: -10000,
        },
      ],
    };
    const $historyList = document.createElement('ul');
    $historyList.append(
      new HistoryItem({
        timestamp: dummyData.timestamp,
        historyItemList: dummyData.historyItemList,
      }).getElement(),
      new HistoryItem({
        timestamp: dummyData.timestamp,
        historyItemList: dummyData.historyItemList,
      }).getElement(),
      new HistoryItem({
        timestamp: dummyData.timestamp,
        historyItemList: dummyData.historyItemList,
      }).getElement(),
    );

    return $historyList;
  }
}

export default HistoryList;
