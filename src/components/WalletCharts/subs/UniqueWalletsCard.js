import React, { useMemo, useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import dayjs from 'dayjs';
import Card from '@/baseComponents/Card';
import Chart from '@/baseComponents/Chart';
import { GET_ALL_TIME_WALLET_COUNT_CODE } from '@/constants/apiRoutes';
import { GET_ALL_TIME_WALLET_COUNT } from '@/constants/apiRoutes';
import AVGNewUsersAndSenders from './AVGNewUsersAndSenders';
import useApiCalls from '@/hooks/useApiCalls';
import styles from '../WalletCharts.module.scss';

const UniqueWalletsCard = () => {
  const [getDataReq, setGetDataReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: getDataReq,
    setSendReq: setGetDataReq,
    method: 'GET',
    url: GET_ALL_TIME_WALLET_COUNT
  });

  useEffect(() => {
    setGetDataReq(true);
  }, []);

  return (
    <>
      <Card
        type="stat"
        number={Number((data?.[0]['ACTIVE_USERS'] / 1000).toFixed(2)) + 'K'}
        title="All time active users"
        to={GET_ALL_TIME_WALLET_COUNT_CODE}
      />
    </>
  );
};

export default UniqueWalletsCard;
