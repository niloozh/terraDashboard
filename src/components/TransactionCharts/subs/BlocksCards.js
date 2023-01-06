import React, { useMemo, useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import dayjs from 'dayjs';
import Card from '@/baseComponents/Card';
import Chart from '@/baseComponents/Chart';
import { GET_BLOCK_CODE } from '@/constants/apiRoutes';
import { GET_BLOCK_DATA_ } from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';

import styles from '../TransactionCharts.module.scss';

const BlocksCards = () => {
  const [getDataReq, setGetDataReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: getDataReq,
    setSendReq: setGetDataReq,
    method: 'GET',
    url: GET_BLOCK_DATA_
  });

  useEffect(() => {
    setGetDataReq(true);
  }, []);

  return (
    <>
      <Card
        type="stat"
        number={Number((data?.[0]['Average Time Between Blocks']).toFixed(2)) + 'Sec'}
        title="Average Time Between Blocks"
        to={GET_BLOCK_CODE}
      />

      <Card
        type="stat"
        number={Number((data?.[0]['Average Transactions Per Block']).toFixed(2))}
        title="Average Transactions Per Block"
        to={GET_BLOCK_CODE}
      />
    </>
  );
};

export default BlocksCards;
