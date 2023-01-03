import React, { useState, useEffect, useMemo } from 'react';
import cx from 'classnames';
import dayjs from 'dayjs';
import { Div, Heading } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';
import LineChart from '@/baseComponents/LineChart';
import BarChart from '@/baseComponents/BarChart';
import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';

import useApiCalls from '@/hooks/useApiCalls';

import { GET_BAR_DATA_API_ROUTE } from '@/constants/apiRoutes';
import { GET_TX_DATA_API_ROUTE } from '@/constants/apiRoutes';

import styles from './Index.module.scss';

const Index = () => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const [getDataReq, setGetDataReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: getDataReq,
    setSendReq: setGetDataReq,
    method: 'GET',
    url: GET_BAR_DATA_API_ROUTE
  });
  const lineData = useMemo(() => {
    if (data) {
      const dates = [];
      const fees = [];
      data.forEach((d) => {
        dates.push(dayjs(d['WEEK']).format('DD-MMM-YYYY'));
        fees.push(d['AVG_FEE']);
      });
      const localData = {
        labels: dates,
        datasets: [
          {
            label: '',
            data: fees,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
          }
        ]
      };
      return localData;
    }
  }, [data]);

  useEffect(() => {
    setGetDataReq(true);
  }, []);

  return (
    <PublicRoute>
      <Seo>
        <PageContainer>
          <Heading className="textWhite mb2" type={3}>
            Wallets
          </Heading>
          <Div type="flex">
            <Card type="stat" number={230} title="Number of active wallets" className="m1" />
            <Card type="stat" number={230} title="Number of active wallets" className="m1" />
          </Div>
          <Div className="textWhite fs-px-24"> Average transaction fees per week</Div>
          <Div className="bgWhite card p2 w-per-50">
            {console.log(lineData)}
            <LineChart
              lineData={lineData}
              showLegend={false}
              titleText="Line Chart for average fee"
            />
          </Div>
          <Div className="textWhite fs-px-24"> Total transaction fees per week</Div>

          {/* <Div className="bgWhite card p2 w-per-50">
            <BarChart
              barData={lineData}
              showLegend={false}
              titleText="Line Chart for average fee"
            />
          </Div> */}
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
