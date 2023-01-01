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
    scales: {
      y: {
        ticks: {
          callback: function (value, index, ticks) {
            return parseFloat(value).toFixed(2);
          }
        },
        title: {
          display: true,
          text: 'Average Fee',
          font: {
            size: 14
          }
        }
      },
      x: {
        title: {
          display: true,
          text: 'Date',
          font: {
            size: 14
          }
        }
      }
    },
    plugins: {
      legend: {
        display: showLegend,
        position: 'top',
        labels: {
          font: {
            size: 12
          }
        }
      },
      title: {
        display: showTitle,
        text: titleText,
        font: {
          size: 14
        }
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
