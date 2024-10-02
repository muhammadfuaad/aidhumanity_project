import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Raised',
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: '#00ade9',
      borderColor: '#00ade9',
    },
    {
      label: 'Given',
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      backgroundColor: '#00C98B',
      borderColor: '#00C98B',
    },
  ],
};

function Line_chart() {
  return <Line data={data} />;
}

export default Line_chart;
