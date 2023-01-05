import React, { useMemo, useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import dayjs from 'dayjs';

import Chart from '@/baseComponents/Chart';

import { REWARD_DISTRIBUTION } from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';
import styles from '../SupplyChart.module.scss';

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
    text: 'Count of reward receivers',
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

const X_AXIS_OPTIONS = {
  ticks: {
    beginAtZero: true,
    color: 'white'
  },
  title: {
    display: true,
    text: '',
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

const RewardDistribution = () => {
  const [getDataReq, setGetDataReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: getDataReq,
    setSendReq: setGetDataReq,
    method: 'GET',
    url: REWARD_DISTRIBUTION
  });

  const chartData = useMemo(() => {
    if (data) {
      const x = [];

      const count = [];
      data.forEach((d) => {
        x.push(d['REWARD_RANGE']);
        count.push(d['NUMBER']);
      });
      const localData = {
        labels: x,
        datasets: [
          {
            label: 'Count of reward receivers',
            data: count,
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
          type="bar"
          data={chartData}
          showLegend={false}
          titleText="Distribution of rewards based on USD"
          yAxisOptions={Y_AXIS_OPTIONS}
          xAxisOptions={X_AXIS_OPTIONS}
          barBorderWidth={2}
          indexAxis="x"
        />
      </Div>
    </>
  );
};

export default RewardDistribution;
