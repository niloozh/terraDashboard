import React, { useMemo, useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import dayjs from 'dayjs';

import Chart from '@/baseComponents/Chart';
import Anchor from '@/baseComponents/Anchor';
import Icon from '@/baseComponents/Icon';
import { GET_STAKED_TYPE_CODE } from '@/constants/apiRoutes';
import { GET_STAKED_TYPE_API_ROUTE } from '@/constants/apiRoutes';
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

const StakedTypeChart = () => {
  const [getDataReq, setGetDataReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: getDataReq,
    setSendReq: setGetDataReq,
    method: 'GET',
    url: GET_STAKED_TYPE_API_ROUTE
  });

  const chartData = useMemo(() => {
    if (data) {
      const testData = {};
      data.forEach((d) => {
        let currentKey = dayjs(d['WEEK']).format('DD-MMM-YYYY');
        if (currentKey in testData) {
          testData[currentKey] = { ...testData[currentKey] };
        } else {
          testData[currentKey] = {};
        }
        if (d['ACTION'] === 'Undelegate') {
          testData[currentKey]['Undel'] = d['TOTAL_AMOUNT_STAKED'];
        } else if (d['ACTION'] === 'Delegate') {
          testData[currentKey]['Del'] = d['TOTAL_AMOUNT_STAKED'];
        } else if (d['ACTION'] === 'Redelegate') {
          testData[currentKey]['Redel'] = d['TOTAL_AMOUNT_STAKED'];
        }
      });
      const x = [];
      const undel = [];
      const del = [];
      const redel = [];
      Object.keys(testData).forEach((currentKey) => {
        x.push(currentKey);
        undel.push(testData[currentKey]['Undel']);
        redel.push(testData[currentKey]['Redel']);
        del.push(testData[currentKey]['Del']);
      });
      const localData = {
        labels: x,
        datasets: [
          {
            label: 'Delegate',
            data: del,
            borderColor: 'pink',
            backgroundColor: 'pink'
          },
          {
            label: 'Undelegate',
            data: undel,
            borderColor: 'rgb(145, 220, 223)',
            backgroundColor: 'rgb(145, 220, 223)'
          },
          {
            label: 'Redelegate',
            data: redel,
            borderColor: 'rgb(192, 255, 195)',
            backgroundColor: 'rgb(192, 255, 195)'
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
        {' '}
        <Div type="flex" hAlign="end">
          <Anchor to={GET_STAKED_TYPE_CODE} internal={false}>
            <Icon type="code" color="white" className={'mouse-hand'} />
          </Anchor>
        </Div>
        <Chart
          type="bar"
          data={chartData}
          showLegend={true}
          titleText="Luna Staking Activities on Weekly Basis"
          yAxisOptions={Y_AXIS_OPTIONS}
          xAxisOptions={X_AXIS_OPTIONS}
          barBorderWidth={2}
          indexAxis="x"
        />
      </Div>
    </>
  );
};

export default StakedTypeChart;
