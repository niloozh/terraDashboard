import React, { useMemo, useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import dayjs from 'dayjs';

import Chart from '@/baseComponents/Chart';

import { GET_CONTRACT_DATA_API_ROUTE } from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';
import styles from '../DevelopmentCharts.module.scss';

const Y_AXIS_OPTIONS = {
  ticks: {
    callback: function (value, index, ticks) {
      return value;
    },

    beginAtZero: true,
    color: 'white'
  },
  title: {
    display: true,
    text: 'Wallets Count',
    font: {
      size: 14
    },
    color: 'white'
  },
  grid: {
    display: true,
    drawTicks: true,
    drawOnChartArea: true,
    color: 'white'
  },
  stacked: true
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
    },
    color: 'white'
  },
  grid: {
    display: true,
    drawTicks: true,
    drawOnChartArea: false,
    color: 'black'
  },
  stacked: true
};

const DeployedContractsChart = () => {
  const [getDataReq, setGetDataReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: getDataReq,
    setSendReq: setGetDataReq,
    method: 'GET',
    url: GET_CONTRACT_DATA_API_ROUTE
  });

  const chartData = useMemo(() => {
    if (data) {
      const x = [];
      const y1 = [];
      const y2 = [];
      data.forEach((d) => {
        x.push(dayjs(d['WEEK']).format('DD-MMM-YYYY'));
        y1.push(d['CONTRACTS_DEPLOYED']);
        y2.push(d['CUMU_CONTRACTS_DEPLOYED']);
      });
      const localData = {
        labels: x,
        datasets: [
          {
            label: 'Contracts Deployed Weekly',
            data: y1,
            borderColor: 'pink',
            backgroundColor: 'pink'
          },
          {
            type: 'line',
            label: 'Cumulative Number of Contracts Deployed Weekly',
            data: y2,
            borderColor: 'rgb(145, 220, 223)',
            backgroundColor: 'rgb(145, 220, 223)'
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
          type="bar"
          data={chartData}
          showLegend={true}
          titleText="New and Active Wallets"
          yAxisOptions={Y_AXIS_OPTIONS}
          xAxisOptions={X_AXIS_OPTIONS}
          barBorderWidth={2}
          indexAxis="x"
        />
      </Div>
    </>
  );
};

export default DeployedContractsChart;
