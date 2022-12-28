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


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function ChartVertical({ chartData }) {
  const labels = Object.keys(chartData);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    type: "bar",

    scales: {
      y: {
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
      },
    ],
  };

  return (
    <Bar options={options} data={data}/>
  );
}
