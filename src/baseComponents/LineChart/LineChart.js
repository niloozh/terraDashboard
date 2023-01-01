import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Div } from 'basedesign-iswad';

import styles from './LineChart.module.scss';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ lineData, showLegend = true, showTitle = true, titleText = '' }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: showLegend,
        position: 'top'
      },
      title: {
        display: showTitle,
        text: titleText
      }
    }
  };

  return (
    <>
      <Div>{lineData?.labels && <Line options={options} data={lineData} />}</Div>
    </>
  );
};

export default LineChart;
