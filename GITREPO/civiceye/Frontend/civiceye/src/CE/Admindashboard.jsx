import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
} from 'chart.js';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement
);

const Admindashboard = () => {
  const navigate = useNavigate();

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Active Users',
        data: [700, 600, 650, 550, 600, 500, 600, 650, 700, 800, 850, 900],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3, 20, 15, 10, 8, 11, 5],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  const pieData = {
    labels: ['New Visitors', 'Subscribers', 'Active Users'],
    datasets: [
      {
        label: '# of Votes',
        data: [10, 35, 50],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const doughnutData = {
    labels: ['Red', 'Yellow', 'Blue'],
    datasets: [
      {
        label: '# of Points',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(54, 162, 235, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex w-full h-screen bg-gray-900 text-white">
      <aside className="bg-gray-800 w-64 p-6 flex flex-col shadow-md">
        <div className="text-2xl font-bold mb-6 text-center">Admin Panel</div>
        <nav className="space-y-3 flex-grow">
          <button onClick={() => navigate("/")} className="w-full p-3 rounded-lg hover:bg-gray-700 transition">
            📊 Dashboard
          </button>
          <button onClick={() => navigate("/admincom")} className="w-full p-3 rounded-lg hover:bg-gray-700 transition">
            ⚖️ Complaints
          </button>
          <button onClick={() => navigate("/admin")} className="w-full p-3 rounded-lg hover:bg-gray-700 transition">
            👤 Users
          </button>
          <button onClick={() => navigate("/feedback")} className="w-full p-3 rounded-lg hover:bg-gray-700 transition">
            📄 Reports
          </button>
        </nav>
        <button className="w-full p-3 bg-gray-700 rounded-md hover:bg-gray-600 transition">
          📤 Logout
        </button>
      </aside>

      <main className="flex-1 p-10">
        <div className="text-3xl font-bold mb-6">Dashboard Overview</div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-lg">Line Chart</h3>
            <Line data={lineData} />
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-lg">Bar Chart</h3>
            <Bar data={barData} />
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-lg">Pie Chart</h3>
            <Pie data={pieData} />
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-lg">Doughnut Chart</h3>
            <Doughnut data={doughnutData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admindashboard;