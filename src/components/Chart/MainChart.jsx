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
import {useAppSelector} from '../../redux/store';
import {selectExpenseCategories, selectMonthExpensesStats} from '../../redux/transaction/transactions-selectors';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

// export const options = {
//     responsive: true,
//     plugins: {
//         legend: {
//             position: 'top' as const,
//         },
//         title: {
//             display: true,
//             text: 'MainChart.js Bar MainChart',
//         },
//     },
// };


// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


export function MainChart() {
const labels = useAppSelector(selectExpenseCategories);
    console.log('labels', labels);
    console.log(typeof labels);
const data = {
    // labels,
    // datasets: [
    //     {
    //         label: 'Dataset 1',
    //         data: labels.map((month) => {
    //
    //         })),
    //         backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //     },
    // ],
};
console.log('label', labels)
    return <></>
    // return <Bar  data={data} />;
}
