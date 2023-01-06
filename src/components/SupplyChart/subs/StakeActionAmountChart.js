import React, { useMemo, useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Chart from '@/baseComponents/Chart';
import Anchor from '@/baseComponents/Anchor';
import Icon from '@/baseComponents/Icon';
import { GET_STAKE_ACTION_COUNT_CODE } from '@/constants/apiRoutes';
import { GET_STAKE_ACTION_COUNT_DATA } from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';
import styles from '../SupplyChart.module.scss';

const DATA_LABEL_FORMATER = (value, ctx) => {
  const curLabel = ctx.chart.data.labels[ctx.dataIndex];
  let sum = 0;
  let dataArr = ctx.chart.data.datasets[0].data;
  dataArr.map((data) => {
    sum += data;
  });
  let percentage = ((value * 100) / sum).toFixed(2) + '%';
  return `${percentage}`;
};

const StakeActionAmountChart = () => {
  const [getDataReq, setGetDataReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: getDataReq,
    setSendReq: setGetDataReq,
    method: 'GET',
    url: GET_STAKE_ACTION_COUNT_DATA
  });

  const chartData = useMemo(() => {
    if (data) {
      const labels = [];
      const percentages = [];
      data.forEach((d) => {
        labels.push(d['Action']);
        percentages.push(d['action volume']);
      });
      const localData = {
        labels: labels,
        datasets: [
          {
            label: '% of volume',
            data: percentages,
            borderColor: ['rgb(192, 255, 195)', 'pink', 'rgb(145, 220, 223)'],
            backgroundColor: ['rgb(192, 255, 195)', 'pink', 'rgb(145, 220, 223)'],
            borderWidth: 1
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
      <Div hAlign="center" className="bgThemeOne br-rad-px-10 p3 w-per-100">
        {' '}
        <Div type="flex" hAlign="end" className="mb1">
          <Anchor to={GET_STAKE_ACTION_COUNT_CODE} internal={false}>
            <Icon type="code" color="white" className={'mouse-hand'} />
          </Anchor>
        </Div>
        <Chart
          type="pie"
          data={chartData}
          showLegend={true}
          titleText="Distribution of Luna staked amount based on action"
          showDataLabel={true}
          dataLabelFormatter={DATA_LABEL_FORMATER}
        />
      </Div>
    </>
  );
};

export default StakeActionAmountChart;
