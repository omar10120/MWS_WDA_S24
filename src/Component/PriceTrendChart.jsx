import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const PriceTrendChart = ({ dataPoints , title }) => {
  const labels = dataPoints.map(point => `${point.year}-${point.month}`);
  const data = {
    labels,
    datasets: [
      {
        label: 'Average Price per Unit',
        data: dataPoints.map(point => point.price),
        borderColor: '#3b82f6', // blue color for the line
        backgroundColor: 'rgba(59, 130, 246, 0.2)', // translucent blue for points
        pointBackgroundColor: '#3b82f6',
        pointBorderColor: '#ffffff',
        fill: true,
        tension: 0.3, // adds smooth curve to the line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#333', // color of the legend text
          font: { size: 14 },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date (Year-Month)',
          color: '#333',
          font: { size: 14 },
        },
        ticks: {
          color: '#333',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Average Price per Unit',
          color: '#333',
          font: { size: 14 },
        },
        ticks: {
          color: '#333',
        },
      },
    },
  };

  return (
    <div className=" w-4/5 mx-auto p-4 bg-white shadow-lg rounded-lg " id='draw'>
      <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">{title}</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default PriceTrendChart;
