import React, { useMemo, useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import dayjs from 'dayjs';

import Chart from '@/baseComponents/Chart';

import { GET_VESTING_DATA } from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';
import styles from '../SupplyChart.module.scss';

const Y_AXIS_OPTIONS = {
  ticks: {
    callback: function (value, index, ticks) {
      return `${value / 1000000}M`;
    },
    // stepSize: 40000,
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
  }
};

const Y2_AXIS_OPTIONS = {
  display: true,
  position: 'right',
  ticks: {
    callback: function (value, index, ticks) {
      return value;
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
    },
    color: 'white'
  },
  grid: {
    display: true,
    drawTicks: true,
    drawOnChartArea: false,
    color: 'black'
  }
};

const LunaVestingChart = () => {
  const [getDataReq, setGetDataReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: getDataReq,
    setSendReq: setGetDataReq,
    method: 'GET',
    url: GET_VESTING_DATA
  });

  const chartData = useMemo(() => {
    if (data) {
      const x = [];
      const amount = [];
      const count = [];
      data.forEach((d) => {
        x.push(d['Vesting Event']);
        amount.push(d['Total Transactions']);
        count.push(d['$LUNA from Vesting']);
      });
      const localData = {
        labels: x,
        datasets: [
          {
            label: 'Total Transactions',
            data: count,
            borderColor: 'pink',
            backgroundColor: 'pink',
            yAxisID: 'y'
          },
          {
            label: '$LUNA from Vesting',
            data: amount,
            borderColor: 'rgb(145, 220, 223)',
            backgroundColor: 'rgb(145, 220, 223)',
            yAxisID: 'y2'
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
          titleText="Luna Staking Activities on Weekly Basis"
          yAxisOptions={Y_AXIS_OPTIONS}
          y2AxisOptions={Y2_AXIS_OPTIONS}
          xAxisOptions={X_AXIS_OPTIONS}
          barBorderWidth={2}
          indexAxis="x"
        />
      </Div>
    </>
  );
};

export default LunaVestingChart;
