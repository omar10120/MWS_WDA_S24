import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const TopProductsChart = () => {
  // Data extracted from the chart to replicate the same values
  const productCodes = [
    'S18_3232', 'S12_4675', 'S24_3856', 'S32_1374', 'S24_1578',
    'S18_3856', 'S18_1129', 'S12_2823', 'S700_3167', 'S18_1749'
  ];
  const revenues = [
    33534.95, 26016.86, 23789.89, 22275.6, 21246,
    19690.6, 19387.52, 19167.08, 19026.08, 18900
  ];

  // Chart data and configuration
  const data = {
    labels: productCodes,
    datasets: [
      {
        label: 'Revenue',
        data: revenues,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend for a cleaner look
      },
      tooltip: {
        callbacks: {
          label: (context) => `Revenue: $${context.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Product Code',
        },
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Revenue',
        },
        ticks: {
          beginAtZero: true,
          callback: (value) => `$${value.toLocaleString()}`,
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '400px', margin: 'auto' }}>
      <h3 style={{ textAlign: 'center' }}>Top 10 Products by Revenue</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TopProductsChart;
