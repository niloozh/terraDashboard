import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import NewContractChart from './subs/NewContractChart';
import CumNewContractsCharts from './subs/CumNewContractCharts';

import styles from './DevelopmentCharts.module.scss';
import ActiveContractsChart from './subs/ActiveContractsChart';
import DeployedContractsChart from './subs/DeployedContractsChart';
import CumDeployedContractsCharts from './subs/CumDeployedContractsChart';

const DevelopmentCharts = () => {
  return (
    <>
      <Div type="flex" className="">
        <Div className="w-per-50 p1">
          <NewContractChart />
        </Div>
        <Div className="w-per-50 p1">
          <CumNewContractsCharts />
        </Div>
      </Div>
      <Div type="flex" className="">
        <Div className="w-per-50 p1">
          <DeployedContractsChart />
        </Div>
        <Div className="w-per-50 p1">
          <CumDeployedContractsCharts />
        </Div>
      </Div>
      <Div className="w-per-50">
        <ActiveContractsChart />
      </Div>
    </>
  );
};

export default DevelopmentCharts;
