import React, { useMemo, useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import dayjs from 'dayjs';
import Card from '@/baseComponents/Card';
import Chart from '@/baseComponents/Chart';

import { GET_STAKED_LUNA_PER } from '@/constants/apiRoutes';
import { GET_STAKED_LUNA_PER_CODE } from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';
import styles from '../SupplyChart.module.scss';

const StakedLunaPerCard = () => {
  const [getDataReq, setGetDataReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: getDataReq,
    setSendReq: setGetDataReq,
    method: 'GET',
    url: GET_STAKED_LUNA_PER
  });

  useEffect(() => {
    setGetDataReq(true);
  }, []);

  return (
    <>
      <Card
        type="stat"
        number={Number((data?.[0]['STAKED_LUNA_PER']).toFixed(2)) + '%'}
        title="Percantage of staked Luna"
        to={GET_STAKED_LUNA_PER_CODE}
      />
    </>
  );
};

export default StakedLunaPerCard;
