import React from 'react';
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function MainChart({chartData}) {
  const labels = Object.keys(chartData);

  const options = {
    // Відораження графіка по горизонталі
    indexAxis: 'y',
    scales: {
      y: {
        ticks: false,

        // crossAlign: 'far',

      }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      subtitle: {
        display: true,
        text: 'Custom Chart Subtitle'
      },
      tooltip: {
        enable: true,
        position: 'top',

        // intersect: true,
      },

      // scales: {
      // y: {
      //   beginAtZero: true,
      //   ticks: {
      //     display: false
      //   },
      //   grid: {
      //     borderColor: 'red',
      //     borderWidth: 6
      //   }
      // },




    },

  };

const data = {
  labels,
  datasets: [
    {
      data: labels.map((el) => chartData[el]),
      tension: 0.0,
      borderRadius: 10,
      backgroundColor: ['#FF751D', '#FFDAC0', '#FFDAC0'],
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

// // config
// const config = {
//   type: 'bar',
//   data,
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: {
//           display: false
//         },
//         grid: {
//           borderColor: 'red',
//           borderWidth: 6
//         }
//       }
//     }
//   }
// };
return (
  <>
    <Bar options={options} data={data}/>
  </>
);
}
