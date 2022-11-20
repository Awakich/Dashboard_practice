import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Sales/ month",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
    },
  ],
};

const data1 = {
  labels: ["Organic", "Social Media", "Websites"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      borderColor: 'transparent'
    },
  ],
};

const DashBoard = () => {
  return (
    <div className="flex flex-col ml-32 md:ml-20 space-y-20 items-center xl:items-stretch">
      <div className="flex flex-col pt-5 justify-center items-center">
        <div className="space-y-10 xl:space-y-0 space-x-0 xl:space-x-24 flex items-center flex-col xl:flex-row">
          <div className="rounded-xl bg-white  xl:px-12 md:px-52 sm:px-44 px-20 py-6 text-center">
            <h2 className="font-bold md:text-3xl text-2xl">Companies</h2>
          </div>

          <div className="rounded-xl bg-white  xl:px-12 md:px-52 sm:px-44 px-20 py-6 text-center">
            <h2 className="font-bold md:text-3xl text-2xl">Customers</h2>
          </div>

          <div className="rounded-xl bg-white  xl:px-12 md:px-52 sm:px-44 px-20 py-6 text-center">
            <h2 className="font-bold md:text-3xl text-2xl">User</h2>
          </div>

          <div className="rounded-xl bg-white xl:px-12 md:px-52 sm:px-44 px-20 py-6 text-center">
            <h2 className="font-bold md:text-3xl text-2xl">Projects</h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row justify-evenly space-y-20 sm:space-y-14 xl:space-y-0">
        <div className="xl:w-96 w-72 sm:w-96">
          <h2 className="font-bold text-2xl sm:text-3xl">Sales</h2>
          <Line data={data} width={400} height={400} />
        </div>

        <div className="xl:w-96 w-72 sm:w-96">
          <h2 className="font-bold text-2xl sm:text-3xl">Customers Arrived</h2>
          <Doughnut data={data1} width={400} height={400} />
        </div>
      </div>
      
    </div>
  );
};

export default DashBoard;
