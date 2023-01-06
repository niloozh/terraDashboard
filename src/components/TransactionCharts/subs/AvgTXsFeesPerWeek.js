import React, { useEffect, useMemo, useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import dayjs from 'dayjs';

import Chart from '@/baseComponents/Chart';
import Anchor from '@/baseComponents/Anchor';
import Icon from '@/baseComponents/Icon';
import { GET_TX_CODE } from '@/constants/apiRoutes';
import { GET_TX_DATA_API_ROUTE } from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';

import styles from '../TransactionCharts.module.scss';

const Y_AXIS_OPTIONS = {
  ticks: {
    callback: function (value, index, ticks) {
      return value;
    },
    // stepSize: 50000,
    beginAtZero: true,
    color: 'white'
  },
  title: {
    display: true,
    text: 'Average Transaction Fee',
    color: 'white',
    font: {
      size: 14
    }
  },
  grid: {
    display: true,
    drawTicks: true,
    drawOnChartArea: true,
    color: 'white'
  },
  stacked: false
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
  stacked: false
};

const AvgTXsFeesPerWeek = () => {
  const [getDataReq, setGetDataReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: getDataReq,
    setSendReq: setGetDataReq,
    method: 'GET',
    url: GET_TX_DATA_API_ROUTE
  });
  const chartData = useMemo(() => {
    if (data) {
      const x = [];
      const y1 = [];
      data.forEach((d) => {
        x.push(dayjs(d['WEEK']).format('DD-MMM-YYYY'));
        y1.push(d['AVG_TX_FEE']);
      });
      const localData = {
        labels: x,
        datasets: [
          {
            label: 'Average transaction fee',
            data: y1,
            borderColor: 'pink',
            backgroundColor: 'pin'
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
        <Div type="flex" hAlign="end">
          <Anchor to={GET_TX_CODE} internal={false}>
            <Icon type="code" color="white" className={'mouse-hand'} />
          </Anchor>
        </Div>
        <Chart
          type="bar"
          data={chartData}
          showLegend={false}
          titleText="Average Transactions Fee Per Week"
          yAxisOptions={Y_AXIS_OPTIONS}
          xAxisOptions={X_AXIS_OPTIONS}
          showDataLabels={false}
          barBorderWidth={2}
          indexAxis="x"
        />
      </Div>
    </>
  );
};

export default AvgTXsFeesPerWeek;
