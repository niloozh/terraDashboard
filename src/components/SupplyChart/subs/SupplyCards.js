import React, { useMemo, useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import dayjs from 'dayjs';
import Card from '@/baseComponents/Card';
import Chart from '@/baseComponents/Chart';
import { GET_SUPPLY_CARD_CODE } from '@/constants/apiRoutes';
import { GET_SUPPLY_CARD_DATA_API_ROUTE } from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';
import styles from '../SupplyChart.module.scss';

const SupplyCards = () => {
  const [getDataReq, setGetDataReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: getDataReq,
    setSendReq: setGetDataReq,
    method: 'GET',
    url: GET_SUPPLY_CARD_DATA_API_ROUTE
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
        {console.log(data)}
        <Card
          type="stat"
          number={Number((data?.[0]['Total supply'] / 1000000000).toFixed(2)) + 'B'}
          title="Total Supply"
          to={GET_SUPPLY_CARD_CODE}
        />
        <Card
          type="stat"
          number={Number((data?.[0]['circulating supply'] / 1000000).toFixed(2)) + 'M'}
          title="Circulating Supply"
          to={GET_SUPPLY_CARD_CODE}
        />
        <Card
          type="stat"
          number={
            Number((data?.[0]['ratio of circulation supply from total supply']).toFixed(2)) + '%'
          }
          title="Ratio of circulation supply from total supply"
          to={GET_SUPPLY_CARD_CODE}
        />
      </Div>
    </>
  );
};

export default SupplyCards;
