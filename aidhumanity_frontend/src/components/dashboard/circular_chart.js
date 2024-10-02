import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Disaster & Emergency Appeals', 'Water for All', 'Hunger Appeal'],
  datasets: [
    {
      label: '# of Votes',
      data: [57, 18, 12],
      backgroundColor: [       
        '#00ade9',
        '#00C98B',
        '#FFC100',
      ],
      borderWidth: 0,
    },
  ],
};

function Circular_chart() {
  return <Doughnut data={data} />;
};

export default Circular_chart;
