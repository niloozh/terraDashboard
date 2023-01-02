import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import styles from './BarChart.module.scss';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ barData, showLegend = true, showTitle = true, titleText = '' }) => {
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
      <Div>{barData?.labels && <Bar options={options} data={barData} />}</Div>
    </>
  );
};

export default BarChart;
