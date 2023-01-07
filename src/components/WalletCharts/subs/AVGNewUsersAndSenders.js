import React, { useMemo, useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import dayjs from 'dayjs';
import Card from '@/baseComponents/Card';
import Chart from '@/baseComponents/Chart';
import UniqueWalletsCard from './uniqueWalletsCard';
import { GET_AVG_UNIQUE_SENDERS_CODE } from '@/constants/apiRoutes';
import { GET_AVG_UNIQUE_SENDERS } from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';
import styles from '../WalletCharts.module.scss';

const AVGNewUsersAndSenders = () => {
  const [getDataReq, setGetDataReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: getDataReq,
    setSendReq: setGetDataReq,
    method: 'GET',
    url: GET_AVG_UNIQUE_SENDERS
  });

  useEffect(() => {
    setGetDataReq(true);
  }, []);

  return (
    <>
      <Card
        type="stat"
        number={Number((data?.[0]['Total Senders']).toFixed(2))}
        title="Total Senders"
        to={GET_AVG_UNIQUE_SENDERS_CODE}
      />
      <Card
        type="stat"
        number={Number((data?.[0]['Total Receivers']).toFixed(2))}
        title="Total Receivers"
        to={GET_AVG_UNIQUE_SENDERS_CODE}
      />
      <Card
        type="stat"
        number={Number((data?.[0]['Average Senders']).toFixed(2))}
        title="Avg senders per week"
        to={GET_AVG_UNIQUE_SENDERS_CODE}
      />
      <Card
        type="stat"
        number={Number((data?.[0]['Average Receivers']).toFixed(2))}
        title="Avg receivers per week"
        to={GET_AVG_UNIQUE_SENDERS_CODE}
      />
      <UniqueWalletsCard />
    </>
  );
};

export default AVGNewUsersAndSenders;
