import React, { useMemo, useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import dayjs from 'dayjs';

import Chart from '@/baseComponents/Chart';

import { GET_DEPLOYMENT_DATA_API_ROUTE } from '@/constants/apiRoutes';
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
    text: 'Count of New Contracts',
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
    color: 'white'
  }
};

const NewContractChart = () => {
  const [getDataReq, setGetDataReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: getDataReq,
    setSendReq: setGetDataReq,
    method: 'GET',
    url: GET_DEPLOYMENT_DATA_API_ROUTE
  });

  const chartData = useMemo(() => {
    if (data) {
      const x = [];
      const y1 = [];
      const y2 = [];
      data.forEach((d) => {
        x.push(dayjs(d['DATE']).format('DD-MMM-YYYY'));
        y1.push(d['NO_OF_NEW_CONTRACTS']);
        y2.push(d['prior_7_days_avg_no_of_new_contracts']);
      });
      const localData = {
        labels: x,
        datasets: [
          {
            type: 'line',
            label: "MA of last week's new contracts",
            fill: false,
            data: y2,
            borderColor: 'rgb(145, 220, 223)',
            backgroundColor: 'rgb(145, 220, 223)'
          },
          {
            type: 'bar',
            label: 'new contract',
            fill: false,
            data: y1,
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
          showLegend={true}
          titleText="Number of New Contracts"
          yAxisOptions={Y_AXIS_OPTIONS}
          xAxisOptions={X_AXIS_OPTIONS}
          showDataLabels={false}
          barBorderWidth={2}
          indexAxis="x"
          lineBorderWidth={2}
          pointBorderWidth={1}
          pointRadius={4}
        />
      </Div>
    </>
  );
};

export default NewContractChart;
