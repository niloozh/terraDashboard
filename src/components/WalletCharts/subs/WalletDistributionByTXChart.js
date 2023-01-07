import React, { useMemo, useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Chart from '@/baseComponents/Chart';
import Anchor from '@/baseComponents/Anchor';
import Icon from '@/baseComponents/Icon';
import { GET_WALLET_DISTRIBUTION_BY_TRANSACTION_CODE } from '@/constants/apiRoutes';
import { GET_WALLET_DISTRIBUTION_BY_TRANSACTION } from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';
import styles from '../WalletCharts.module.scss';

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

const WalletDistributionByTXChart = () => {
  const [getDataReq, setGetDataReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: getDataReq,
    setSendReq: setGetDataReq,
    method: 'GET',
    url: GET_WALLET_DISTRIBUTION_BY_TRANSACTION
  });

  const chartData = useMemo(() => {
    if (data) {
      const labels = [];
      const percentages = [];
      data.forEach((d) => {
        labels.push(d['TYPE']);
        percentages.push(d['USER']);
      });
      const localData = {
        labels: labels,
        datasets: [
          {
            label: 'Number of transactions',
            data: percentages,
            borderColor: ['rgb(192, 255, 195)', 'pink', 'rgb(145, 220, 223)', 'rgb(255, 255, 134)'],
            backgroundColor: [
              'rgb(192, 255, 195)',
              'pink',
              'rgb(145, 220, 223)',
              'rgb(255, 255, 134)'
            ],
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
        <Div type="flex" hAlign="end" className="mb1">
          <Anchor to={GET_WALLET_DISTRIBUTION_BY_TRANSACTION_CODE} internal={false}>
            <Icon type="code" color="white" className={'mouse-hand'} />
          </Anchor>
        </Div>
        <Chart
          type="pie"
          data={chartData}
          showLegend={true}
          titleText="Distribution of wallets by transactions "
          showDataLabel={true}
          dataLabelFormatter={DATA_LABEL_FORMATER}
        />
      </Div>
    </>
  );
};

export default WalletDistributionByTXChart;
