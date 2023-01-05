import React from 'react';
import cx from 'classnames';
import { Div, Row, Column } from 'basedesign-iswad';
import SupplyCards from './subs/SupplyCards';
import styles from './SupplyChart.module.scss';
import StakedAmountChart from './subs/StakedAmountChart';
import StakedTypeChart from './subs/StakedTypeChart';
import StakeActionCountChart from './subs/StakeActionCountChart';
import StakeActionAmountChart from './subs/StakeActionAmountChart';
import LunaVestingChart from './subs/LunaVestingChart';
import IBCAmountChart from './subs/IBCAmountChart';
import StakedLunaPerCard from './subs/StakedLunaPerCard';
import RewardReceiversCards from './subs/RewardReceiversCards';
import RichListTable from './subs/RichListTable';

const SupplyChart = () => {
  return (
    <>
      <Row>
        <Column xs={12} sm={12} md={8} lg={8} className="">
          <Div className="w-per-100 mb1">
            <StakedAmountChart />
          </Div>
          <Div className="w-per-100 mb1">
            <StakedTypeChart />
          </Div>
          <Div className="w-per-100 mb1">
            <LunaVestingChart />
          </Div>
          <Div className="w-per-100">
            <IBCAmountChart />
          </Div>
          <Div className="w-per-100">
            <RichListTable />
          </Div>
        </Column>
        <Column xs={12} sm={12} md={4} lg={4} className="flex flex--jc--center flex--ai--start">
          <Div className="w-per-100">
            <Div type="flex" hAlign="center" className="mr1 ml1 mb1 w-per-100">
              <SupplyCards />
            </Div>
            <Div type="flex" hAlign="center" className="mr1 ml1 mb1 w-per-100">
              <StakeActionCountChart />
            </Div>
            <Div type="flex" hAlign="center" className="mr1 mb1 ml1 w-per-100">
              <StakeActionAmountChart />
            </Div>
            <Div type="flex" hAlign="center" className="mr1 ml1 w-per-100">
              <RewardReceiversCards />
            </Div>
          </Div>
        </Column>
      </Row>
    </>
  );
};

export default SupplyChart;
