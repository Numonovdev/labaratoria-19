import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const RechartGrafik = () => {
  const [chartInfo, setChartInfo] = useState([]);
  const sampleData = [12, 33, 55, 70, 23, 40, 58];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://trello.vimlc.uz/knowlodge");
        const data = await response.json();

        const apiData = data?.map((item) => item.value) || []; 
        setChartInfo(apiData);
      } catch (error) {
        console.error("Ma'lumotni olishda xatolik yuz berdi:", error);
      }
    };

    fetchData();
  }, []);
console.log(chartInfo);

  const canvasData = {
    labels: [12.06, 18.06, "03.07", 13.07, 14.07, 20.07, 24.07],
    datasets: [
      {
        label: "Home",
        borderColor: "#0E9CFF",
        pointRadius: 4,
        fill: true,
        backgroundColor: "transparent",
        lineTension: 0.4,
        data: chartInfo.length > 0 ? chartInfo : sampleData,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          color: "black",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
      y: {
        border: {
          display: false,
        },
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
          color: "black",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const graphStyle = {
    minHeight: "193px",
    maxWidth: "333px",
    width: "100%",
    borderRadius: "0.375rem",
    padding: "0.5rem",
  };

  return (
    <div style={graphStyle}>
      {chartInfo.length > 0 || sampleData.length > 0 ? (
        <Line id="home" options={options} data={canvasData} />
      ) : (
        <p>Yuklanmoqda...</p>
      )}
    </div>
  );
};

export default RechartGrafik;
