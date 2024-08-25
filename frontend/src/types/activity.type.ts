type Activity = {
    type: 'Transaction' | 'Bridged';
    points: number;
    date: string;
    txid: string;
  };

  export type { Activity };