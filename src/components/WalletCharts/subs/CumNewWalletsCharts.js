import React, { useMemo, useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import dayjs from 'dayjs';

import Chart from '@/baseComponents/Chart';

import { GET_WALLET_DATA_API_ROUTE } from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';
import styles from '../WalletCharts.module.scss';

const Y_AXIS_OPTIONS = {
  ticks: {
    callback: function (value, index, ticks) {
      return `${value / 1000}K`;
    },
    beginAtZero: true,
    color: 'white'
  },
  title: {
    display: true,
    text: 'Average Fee',
    font: {
      size: 14
    }
  },
  grid: {
    display: true,
    drawTicks: true,
    drawOnChartArea: true,
    color: 'white'
  }
};

const X_AXIS_OPTIONS = {
  ticks: {
    beginAtZero: true,
    color: 'white'
  },
  title: {
    display: true,
    text: 'Date',
    font: {
      size: 14
    }
  },
  grid: {
    display: true,
    drawTicks: true,
    drawOnChartArea: false,
    color: 'white'
  }
};

const CumNewWalletsCharts = () => {
  const [getDataReq, setGetDataReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: getDataReq,
    setSendReq: setGetDataReq,
    method: 'GET',
    url: GET_WALLET_DATA_API_ROUTE
  });

  const chartData = useMemo(() => {
    if (data) {
      const x = [];
      const y = [];
      data.forEach((d) => {
        x.push(dayjs(d['WEEK']).format('DD-MMM-YYYY'));
        y.push(d['CUM_NEW_WALLETS']);
      });
      const localData = {
        labels: x,
        datasets: [
          {
            label: '',
            fill: false,
            data: y,
            borderColor: 'pink',
            backgroundColor: 'pink'
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
    <>
      <Div className="bgThemeOne br-rad-px-10 p3">
        <Chart
          type="line"
          data={chartData}
          showLegend={false}
          titleText="Cumulative Count of New Wallets"
          yAxisOptions={Y_AXIS_OPTIONS}
          xAxisOptions={X_AXIS_OPTIONS}
          lineBorderWidth={2}
          pointBorderWidth={1}
          pointRadius={4}
        />
      </Div>
    </>
  );
};

export default CumNewWalletsCharts;
