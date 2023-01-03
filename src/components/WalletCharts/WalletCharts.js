import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from './WalletCharts.module.scss';
import NewWalletsCharts from './subs/NewWalletCharts';
import CumNewWalletsCharts from './subs/CumNewWalletsCharts';

const WalletCharts = () => {
  return (
    <>
      <Div type="flex" className="">
        <Div className="w-per-50 p1">
          <NewWalletsCharts />
        </Div>
        <Div className="w-per-50 p1">
          <CumNewWalletsCharts />
        </Div>
      </Div>
    </>
  );
};

export default WalletCharts;
