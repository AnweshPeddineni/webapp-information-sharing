import React from "react";
import { Bar } from "react-chartjs-2";

const data1 = {
  labels: ["2020", "2021"],
  datasets: [
    {
      label: "Yearly Return %",
      barPercentage: 0.5,
      barThickness: 30,
      maxBarThickness: 30,
      data: [98, 0],
      backgroundColor: ["rgb(106,168,79)"],
      borderColor: ["rgb(106,168,79)"],
      borderWidth: 1,
    },
  ],
};
const data2 = {
  labels: ["2020", "2021"],
  datasets: [
    {
      label: "Yearly Return %",
      barPercentage: 0.5,
      barThickness: 30,
      maxBarThickness: 30,
      data: [0, 0],
      backgroundColor: ["rgb(106,168,79)"],
      borderColor: ["rgb(106,168,79)"],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

export const IndianChart = () => (
  <>
    <Bar data={data1} options={options} />
  </>
);

export const UsChart = () => (
  <>
    <Bar data={data2} options={options} />
  </>
);
