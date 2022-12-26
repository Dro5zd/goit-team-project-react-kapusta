import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);




export function MainChart({chartData}) {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      // title: {
      //   display: false,
      // },

      // line: {
      //   enabled: true
      // }
    },
  };

  const labels = Object.keys(chartData)

  const data = {
    labels,
    datasets: [
      {
        data: labels.map((el) => chartData[el]),
        borderColor: "#FF751D",
        width: 30,
        borderRadius: 15,
        backgroundColor: "#FF751D",
      },
    ],
  };
  return (

  <>
    <p>CHART</p>
  <Bar options={options} data={data} />
  </>
    )
}
