import React from 'react';
import cx from 'classnames';
import { Div, Row, Column } from 'basedesign-iswad';

import styles from './WalletCharts.module.scss';
import NewWalletsCharts from './subs/NewWalletCharts';
import CumNewWalletsCharts from './subs/CumNewWalletsCharts';
import UniqueWalletsCard from './subs/uniqueWalletsCard';
import WalletDistributionByTXChart from './subs/WalletDistributionByTXChart';

const WalletCharts = () => {
  return (
    <>
      <Row>
        <Column xs={12} sm={12} md={8} lg={8} className="">
          <Div className="w-per-100 mb1">
            <NewWalletsCharts />
          </Div>
          <Div className="w-per-100 mb1">
            <CumNewWalletsCharts />
          </Div>
        </Column>
        <Column xs={12} sm={12} md={4} lg={4} className="pl1">
          <Div className="w-per-100">
            <Div className="w-per-100 mb1">
              <UniqueWalletsCard />
            </Div>
            <Div className="w-per-100 mb1">
              <WalletDistributionByTXChart />
            </Div>
          </Div>
        </Column>
      </Row>
    </>
  );
};

export default WalletCharts;
