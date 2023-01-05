import React from 'react';
import cx from 'classnames';
import { Div, Row, Column } from 'basedesign-iswad';

import styles from './WalletCharts.module.scss';
import NewWalletsCharts from './subs/NewWalletCharts';
import CumNewWalletsCharts from './subs/CumNewWalletsCharts';

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
      </Row>
    </>
  );
};

export default WalletCharts;
