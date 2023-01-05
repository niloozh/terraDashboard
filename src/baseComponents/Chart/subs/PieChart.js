import React from 'react';
import cx from 'classnames';
import { Doughnut } from 'react-chartjs-2';
import { Div } from 'basedesign-iswad';

import styles from '../Chart.module.scss';

const PieChart = ({
  data,
  showLegend = true,
  showTitle = true,
  titleText = '',
  showDataLabel = true,
  dataLabelFormatter = null
}) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: showLegend,
        position: 'top',
        labels: {
          font: {
            size: 12,
            family: 'Poppins'
          },
          color: 'white'
        }
      },
      title: {
        display: showTitle,
        text: titleText,
        font: {
          size: 14,
          family: 'Poppins'
        },
        color: 'white'
      },
      datalabels: {
        display: showDataLabel,
        formatter: dataLabelFormatter,
        align: 'center',
        padding: {
          right: 0
        },
        font: {
          family: 'Poppins'
        },
        color: 'black'
      }
    }
  };

  return (
    <>
      <Div>{data?.labels && <Doughnut options={options} data={data} />}</Div>
    </>
  );
};

export default PieChart;
