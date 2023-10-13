import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChartComponent = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [55, 31, 14],
        backgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
        hoverBackgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
        borderWidth: 0, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="w-full h-full flex items-center flex-col">
      <div className="flex items-center w-full justify-between">
        <h2 className="mb-6 text-lg font-montserrat font-bold">Top Products</h2>
        <h2 className="text-secondary font-sm font-montserrat">
          May - June 2021
        </h2>
      </div>
      <div className="w-full flex justify-evenly items-center gap-10">
        <div className="flex justify-center items-center w-40 h-40 ">
          <Doughnut
            data={data}
            options={options}
            className=" w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#98D89E] mt-1 "></div>
            <div className="flex flex-col  justify-start">
              <div className="font-bold font-montserrat text-sm">Basic Tees</div>
              <div className=" text-sm  font-lato text-secondary ">55%</div>
            </div>
          </div>
          <div className="flex gap-2 ">
            <div className="w-3 h-3 rounded-full bg-[#F6DC7D] mt-1 "></div>
            <div className="flex flex-col  justify-start">
              <div className="font-bold font-montserrat text-sm">Custom Short Pants</div>
              <div className=" text-sm  font-lato text-secondary ">31%</div>
            </div>
          </div>
          <div className="flex gap-2  ">
            <div className="w-3 h-3 rounded-full bg-[#EE8484] mt-1"></div>
            <div className="flex flex-col  justify-start">
              <div className="font-bold font-montserrat text-sm">Super Hoodies</div>
              <div className=" text-sm  font-lato text-secondary ">14%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DonutChartComponent;
