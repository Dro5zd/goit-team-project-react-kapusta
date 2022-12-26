import React, { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
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

export const MainChart = ({ chartData }) => {
  const chartRef = useRef(null);
  const [chartsData, setChartsData] = useState({ datasets: [] });
  console.log("chartRef", chartRef);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      // title: {
      //   display: false,
      // },

      // line: {
      //   enabled: true
      // }
    },
  };

  const labels = Object.keys(chartData);

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

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        borderColor: "blue",
      })),
    };

    setChartsData(chartData);
  }, []);

  return (
    <>
      <p>CHART</p>
      <Bar ref={chartRef} options={options} data={chartsData} />
    </>
  );
};
