import React from 'react';
import cx from 'classnames';
import { Div, Row, Column } from 'basedesign-iswad';

import TotalTXsPerWeek from './subs/TotalTXsPerWeek';
import styles from './TransactionCharts.module.scss';
import TotalFeesPerWeek from './subs/TotalFeesPerWeek';
import AvgTXsFeesPerWeek from './subs/AvgTXsFeesPerWeek';
import TPS from './subs/TPS';
import AvgBlockTime from './subs/AvgBlockTime';
import TXsPerBlock from './subs/TXsPerBlock';
import TransactionCards from './subs/TransactionCards';

const TransactionCharts = () => {
  return (
    <>
      <Row>
        <Column xs={12} sm={12} md={4} lg={4} className="pr2">
          <Div className="w-per-100">
            <Div type="flex" hAlign="center" className="mr1 ml1 mb1 w-per-100">
              <TransactionCards />
            </Div>
          </Div>
        </Column>
        <Column xs={12} sm={12} md={8} lg={8} className="">
          <Div className="w-per-100 mb1">
            <TotalTXsPerWeek />
          </Div>
          <Div className="w-per-100 mb1">
            <TPS />
          </Div>
          <Div className="w-per-100 mb1">
            <AvgTXsFeesPerWeek />
          </Div>
          <Div className="w-per-100 mb1">
            <TotalFeesPerWeek />
          </Div>
          <Div className="w-per-100 mb1">
            <TXsPerBlock />
          </Div>
          <Div className="w-per-100 mb1">
            <AvgBlockTime />
          </Div>
        </Column>
      </Row>
    </>
  );
};

export default TransactionCharts;
