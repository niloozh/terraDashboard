import React, { useMemo, useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import dayjs from 'dayjs';
import Card from '@/baseComponents/Card';
import Chart from '@/baseComponents/Chart';

import { GET_TRANSACTIONS_CARD_DATA } from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';
import styles from '../TransactionCharts.module.scss';
import BlocksCards from './BlocksCards';

const TransactionCards = () => {
  const [getDataReq, setGetDataReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: getDataReq,
    setSendReq: setGetDataReq,
    method: 'GET',
    url: GET_TRANSACTIONS_CARD_DATA
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
        <Card
          type="stat"
          number={Number((data?.[0]['Total Transactions'] / 1000).toFixed(2)) + 'K'}
          title="Total Transactions"
        />
        <Card
          type="stat"
          number={Number((data?.[0]['Total Luna Volume'] / 1000000).toFixed(2)) + 'M'}
          title="Total Luna Volume"
        />
        <Card
          type="stat"
          number={Number((data?.[0]['Total Fees'] / 1000).toFixed(2)) + 'K'}
          title="Total Fees"
        />
        <Card
          type="stat"
          number={Number((data?.[0]['Average Transactions per Week'] / 1000).toFixed(2)) + 'K'}
          title="Average Count of Transactions per Week"
        />
        <Card
          type="stat"
          number={Number((data?.[0]['Average Volume per Week'] / 1000000).toFixed(2)) + 'M'}
          title="Average Total Transactions Volume per Week"
        />
        <Card
          type="stat"
          number={Number((data?.[0]['Average Fees per Week'] / 1000).toFixed(2)) + 'K'}
          title="Average of Total Fees per Week"
        />
        <Card
          type="stat"
          number={Number((data?.[0]['Average TPS per Week']).toFixed(3))}
          title="Average TPS per Week"
        />
        <BlocksCards />
      </Div>
    </>
  );
};

export default TransactionCards;
