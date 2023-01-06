import React, { useMemo, useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import dayjs from 'dayjs';
import Card from '@/baseComponents/Card';
import Chart from '@/baseComponents/Chart';

import { GET_TOTAL_STAKING_REWARD } from '@/constants/apiRoutes';
import { GET_TOTAL_STAKING_REWARD_CODE } from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';
import styles from '../SupplyChart.module.scss';

const CumStakingRewardCard = () => {
  const [getDataReq, setGetDataReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: getDataReq,
    setSendReq: setGetDataReq,
    method: 'GET',
    url: GET_TOTAL_STAKING_REWARD
  });

  useEffect(() => {
    setGetDataReq(true);
  }, []);

  return (
    <>
      <Card
        type="stat"
        number={Number((data?.[0]['CUMULATIVE_STAKING_REWARDS'] / 1000000).toFixed(2)) + 'M $'}
        title="Total staking reward"
        to={GET_TOTAL_STAKING_REWARD_CODE}
      />
    </>
  );
};

export default CumStakingRewardCard;
