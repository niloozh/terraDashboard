import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { Line } from 'react-chartjs-2';
import { Div } from 'basedesign-iswad';

import useApiCalls from '@/hooks/useApiCalls';

import { GET_BAR_DATA_API_ROUTE } from '@/constants/apiRoutes';

import styles from './LineChart.module.scss';

const LineChart = () => {
  const [getBarDataReq, setGetBarDataReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: getBarDataReq,
    setSendReq: setGetBarDataReq,
    method: 'GET',
    url: GET_BAR_DATA_API_ROUTE
  });
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  useEffect(() => {
    setGetBarDataReq(true);
  }, []);

  return (
    <>
      <Div>LineChart</Div>
      <Div>
        {/* <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: 'THICCNESS SCALE', display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        /> */}
      </Div>
    </>
  );
};

export default LineChart;
