import React, { useMemo, useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import dayjs from 'dayjs';

import Chart from '@/baseComponents/Chart';
import Anchor from '@/baseComponents/Anchor';
import Icon from '@/baseComponents/Icon';
import { GET_IBC_CODE } from '@/constants/apiRoutes';
import { GET_IBC_DATA } from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';
import styles from '../SupplyChart.module.scss';

const Y_AXIS_OPTIONS = {
  ticks: {
    callback: function (value, index, ticks) {
      return `${value / 1000}K`;
    },
    // stepSize: 40000,
    beginAtZero: true,
    color: 'white'
  },
  title: {
    display: true,
    text: 'Unique Transfers Count',
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
      return `${value / 1000000000}B`;
    },
    beginAtZero: true,
    color: 'white'
  },
  title: {
    display: true,
    text: '# of Luna',
    font: {
      size: 14
    },
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

const IBCAmountChart = () => {
  const [getDataReq, setGetDataReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: getDataReq,
    setSendReq: setGetDataReq,
    method: 'GET',
    url: GET_IBC_DATA
  });

  const chartData = useMemo(() => {
    if (data) {
      const x = [];
      const amount = [];
      const count = [];
      data.forEach((d) => {
        x.push(dayjs(d['DATE']).format('DD-MMM-YYYY'));
        count.push(d['UNIQUE_TRANSFERS']);
        amount.push(d['AMOUNT']);
      });
      const localData = {
        labels: x,
        datasets: [
          {
            label: 'Transfers count',
            data: count,
            borderColor: 'pink',
            backgroundColor: 'pink',
            yAxisID: 'y'
          },
          {
            label: 'LUNA IBC-ed out',
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
        <Div type="flex" hAlign="end">
          <Anchor to={GET_IBC_CODE} internal={false}>
            <Icon type="code" color="white" className={'mouse-hand'} />
          </Anchor>
        </Div>
        <Chart
          type="bar"
          data={chartData}
          showLegend={true}
          titleText="$ and # of Weekly IBC-ed out transfers"
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

export default IBCAmountChart;
