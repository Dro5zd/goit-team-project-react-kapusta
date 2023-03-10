import React from "react";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { addIncome } from "../../redux/transaction/transactions-operations";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ChartDataLabels,
  Tooltip,
  Legend
);

export function MainChart({ chartData }) {
  const labels = Object.keys(chartData);
  const options = {
    plugins: [ChartDataLabels],
    options: {
      plugins: {
        legend: {
          display: false,
        },
        datalabels: {
          color: 'white',
          anchor: "end",
          align: "end",
          offset: 10,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },

    type: "bar",

    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
        ticks: { display: false },
        grig: {
          drawTicets: false,
          drawOnChartArea: false,
        },

        responsive: true,
        maintainAspectRatio: false,

        plugins: {
          subtitle: {
            display: true,
            text: "Custom Chart Subtitle",
          },
          tooltip: {
            enable: true,
            position: "top",
            grid: {
              borderColor: "red",
              borderWidth: 6,
            },
          },
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        data: labels.map((el) => chartData[el]),
        tension: 0.0,
        borderRadius: 10,
        backgroundColor: ["#FF751D", "#FFDAC0", "#FFDAC0"],
        datalabels: {
          color: 'black',
          anchor: "end",
          align: "end",
          offset: 5,
        }
        // indexAxis: 'y',

        // scales: {
        //   y: {
        //     beginAtZero: true,
        //     ticks: {
        //       display: false
        //     },
        //     grid: {
        //       borderColor: 'red',
        //       borderWidth: 6
        //     }
        //   }
        // }
      },
    ],
  };

  return (



      <Bar options={options} data={data} />
  );
}
