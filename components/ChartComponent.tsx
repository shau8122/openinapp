import React from "react";
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

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      type: 'category' as const, 
      grid: {
        display: false
      },
      barPercentage: 0.1,
      categoryPercentage: 0.4,
    },
    y: {
      type: 'linear' as const, 
      ticks: {
        stepSize: 100  
      }
    }
  }
};


const labels = ["Week1", "Week2", "Week3", "Week4","Week5","Week6","Week7","Week8"];

export const data = {
  labels,
  datasets: [
    {
      label: "User",
      data:[500, 380, 200, 400,500, 380, 90, 100],
      backgroundColor: "#98D89E",
      borderRadius:4
    },
    {
      label: "Guest",
      data:[400, 450, 300, 350,400, 450, 30, 50],
      backgroundColor: "#EE8484",
      borderRadius:4
    },
  ],
};
const ChartComponent =()=> {
  return (
    <div className=" h-full w-full flex flex-col">
      <div className="h-[20%] flex justify-between items-center">
        <div className="flex flex-col py-5">
          <h1 className="text-lg font-bold font-montserrat text-black">
            Activities
          </h1>
          <p className="text-secondary font-montserrat text-sm my-2">
          May - June 2021
          </p>
        </div>
        <div className="flex justify-between items-center gap-6 px-20">
        <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#EE8484]">
            </div>
            <div className="font-lato text-sm text-black ">
              Guest
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#98D89E]">
            </div>
            <div className="font-lato text-sm text-black ">
              User
            </div>
          </div>
          
        </div>
      </div>
      <div className="h-[80%]">
       <Bar options={options}  data={data} />
      </div>
    </div>
  );
}
export default ChartComponent;