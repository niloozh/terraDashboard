import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import TotalTXsPerWeek from './subs/TotalTXsPerWeek';
import styles from './TransactionCharts.module.scss';
import TotalFeesPerWeek from './subs/TotalFeesPerWeek';
import AvgTXsFeesPerWeek from './subs/AvgTXsFeesPerWeek';
import TPS from './subs/TPS';
import AvgBlockTime from './subs/AvgBlockTime';
import TXsPerBlock from './subs/TXsPerBlock';

const TransactionCharts = () => {
  return (
    <>
      <Div className="fs-px-30 w-per-30 textPink br-bottom-solid-1 br-color-pink mb3">
        Transactions Count
      </Div>
      <Div type="flex">
        <Div className="w-per-50 m1">
          <TotalTXsPerWeek />
        </Div>
        <Div className="w-per-50 m1">
          <TPS />
        </Div>
      </Div>

      <Div className="fs-px-30 w-per-30 textPink br-bottom-solid-1 br-color-pink mb3 mt3">
        Transactions Fee
      </Div>
      <Div type="flex">
        <Div className="w-per-50 m1">
          <AvgTXsFeesPerWeek />
        </Div>
        <Div className="w-per-50 m1">
          <TotalFeesPerWeek />
        </Div>
      </Div>

      <Div className="fs-px-30 w-per-30 textPink br-bottom-solid-1 br-color-pink mb3 mt3">
        Block
      </Div>
      <Div type="flex">
        <Div className="w-per-50 m1">
          <TXsPerBlock />
        </Div>
        <Div className="w-per-50 m1">
          <AvgBlockTime />
        </Div>
      </Div>
    </>
  );
};

export default TransactionCharts;
