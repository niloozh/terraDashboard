import React, { useMemo, useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import dayjs from 'dayjs';

import Chart from '@/baseComponents/Chart';
import Anchor from '@/baseComponents/Anchor';
import Icon from '@/baseComponents/Icon';
import { GET_DEPLOYMENT_CODE } from '@/constants/apiRoutes';
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
    text: 'Cumulative Number of New Contracts',
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

const CumNewContractsCharts = () => {
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
      const y = [];
      data.forEach((d) => {
        x.push(dayjs(d['DATE']).format('DD-MMM-YYYY'));
        y.push(d['CUM_NO_OF_CONTRACTS']);
      });
      const localData = {
        labels: x,
        datasets: [
          {
            label: '',
            fill: true,
            data: y,
            borderColor: 'rgba(255, 192, 203)',
            backgroundColor: 'rgba(255, 192, 203, 0.822)'
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
          <Anchor to={GET_DEPLOYMENT_CODE} internal={false}>
            <Icon type="code" color="white" className={'mouse-hand'} />
          </Anchor>
        </Div>
        <Chart
          type="line"
          data={chartData}
          showLegend={false}
          titleText="Cumulative Count of New Contracts"
          yAxisOptions={Y_AXIS_OPTIONS}
          xAxisOptions={X_AXIS_OPTIONS}
          lineBorderWidth={2}
          pointBorderWidth={1}
          pointRadius={2}
        />
      </Div>
    </>
  );
};

export default CumNewContractsCharts;
