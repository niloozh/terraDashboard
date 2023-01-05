import React from 'react';
import cx from 'classnames';
import { Div, Row, Column } from 'basedesign-iswad';

import NewContractChart from './subs/NewContractChart';
import CumNewContractsCharts from './subs/CumNewContractCharts';

import styles from './DevelopmentCharts.module.scss';
import ActiveContractsChart from './subs/ActiveContractsChart';
import DeployedContractsChart from './subs/DeployedContractsChart';
import CumDeployedContractsCharts from './subs/CumDeployedContractsChart';

const DevelopmentCharts = () => {
  return (
    <>
      <Row>
        <Column xs={12} sm={12} md={8} lg={8} className="">
          <Div className="w-per-100 mb1">
            <NewContractChart />
          </Div>
          <Div className="w-per-100 mb1">
            <CumNewContractsCharts />
          </Div>
          <Div className="w-per-100 mb1">
            <DeployedContractsChart />
          </Div>
          <Div className="w-per-100 mb1">
            <CumNewContractsCharts />
          </Div>
          <Div className="w-per-100 mb1">
            <CumDeployedContractsCharts />
          </Div>
          <Div className="w-per-100 mb1">
            <ActiveContractsChart />
          </Div>
        </Column>
      </Row>
    </>
  );
};

export default DevelopmentCharts;
