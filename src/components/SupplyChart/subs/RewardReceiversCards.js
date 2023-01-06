import React, { useMemo, useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import dayjs from 'dayjs';
import Card from '@/baseComponents/Card';
import Chart from '@/baseComponents/Chart';
import { GET_REWARD_RECEIVER_CODE } from '@/constants/apiRoutes';
import { GET_REWARD_RECEIVER_DATA } from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';

import StakedLunaPerCard from './StakedLunaPerCard';
import styles from '../SupplyChart.module.scss';
import CumStakingRewardCard from './CumStakingRewardCard';

const RewardReceiversCards = () => {
  const [getDataReq, setGetDataReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: getDataReq,
    setSendReq: setGetDataReq,
    method: 'GET',
    url: GET_REWARD_RECEIVER_DATA
  });

  useEffect(() => {
    setGetDataReq(true);
  }, []);

  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        className="bgThemeOne br-rad-px-10 p3 w-per-100">
        <StakedLunaPerCard />
        <CumStakingRewardCard />
        <Card
          type="stat"
          number={(data?.[0]['REWARD_RECIVER'] / 1000).toFixed(0) + 'K'}
          title="Number of reward receivers"
          to={GET_REWARD_RECEIVER_CODE}
        />
        <Card
          type="stat"
          number={Number((data?.[0]['REWARDE_PER_STAKER']).toFixed(2)) + '$'}
          title="Average reward per staker"
          to={GET_REWARD_RECEIVER_CODE}
        />
        <Card
          type="stat"
          number={Number((data?.[0]['NUMBER'] / 1000).toFixed(0)) + 'K'}
          title="Number of reward transaction"
          to={GET_REWARD_RECEIVER_CODE}
        />
      </Div>
    </>
  );
};

export default RewardReceiversCards;
