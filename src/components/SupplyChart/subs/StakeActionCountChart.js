import React, { useMemo, useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Chart from '@/baseComponents/Chart';

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
  let percentage = ((value * 100) / sum).toFixed(1) + '%';
  return ` ${percentage}`;
};

const StakeActionCountChart = () => {
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
        percentages.push(d['action count']);
      });
      const localData = {
        labels: labels,
        datasets: [
          {
            label: '% of population',
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
      <Div className="bgThemeOne br-rad-px-10 p3 w-per-100">
        <Chart
          type="pie"
          data={chartData}
          showLegend={true}
          titleText="Distribution of Luna staked count based on action"
          showDataLabel={true}
          dataLabelFormatter={DATA_LABEL_FORMATER}
        />
      </Div>
    </>
  );
};

export default StakeActionCountChart;
