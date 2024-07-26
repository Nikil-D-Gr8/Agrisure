// // import React, { useEffect, useState } from 'react';
// // import { Line, Bar, Pie, Radar, Scatter } from 'react-chartjs-2';
// // import {
// //   Chart as ChartJS,
// //   CategoryScale,
// //   LinearScale,
// //   PointElement,
// //   LineElement,
// //   ArcElement,
// //   Tooltip,
// //   Legend,
// //   BarElement,
// //   RadarController,
// //   ScatterController,
// //   RadialLinearScale
// // } from 'chart.js';
// // import dataJSON from './data.json'; // Import your JSON data
// // import Navbar from './Navbar';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faPlus,faRobot } from '@fortawesome/free-solid-svg-icons';


// // ChartJS.register(
// //   CategoryScale,
// //   LinearScale,
// //   PointElement,
// //   LineElement,
// //   ArcElement,
// //   Tooltip,
// //   Legend,
// //   BarElement,
// //   RadarController,
// //   ScatterController,
// //   RadialLinearScale
// // );

// // const Dashboard = () => {
// //   const [chartData, setChartData] = useState({
// //     sludgeLevel: [],
// //     pressure: [],
// //     moisture: [],
// //     co2Level: [],
// //     temperature: [],
// //     humidity: [],
// //     methaneLevel: []
// //   });

// //   useEffect(() => {
// //     const labels = Object.keys(dataJSON);
// //     const sludgeLevel = labels.map(key => parseFloat(dataJSON[key].sludge_level));
// //     const pressure = labels.map(key => parseFloat(dataJSON[key].pressure));
// //     const moisture = labels.map(key => parseFloat(dataJSON[key].moisture));
// //     const co2Level = labels.map(key => parseFloat(dataJSON[key].CO2_level));
// //     const temperature = labels.map(key => parseFloat(dataJSON[key].temperature));
// //     const humidity = labels.map(key => parseFloat(dataJSON[key].humidity));
// //     const methaneLevel = labels.map(key => parseFloat(dataJSON[key].methane_level_in_ppm));

// //     setChartData({
// //       sludgeLevel,
// //       pressure,
// //       moisture,
// //       co2Level,
// //       temperature,
// //       humidity,
// //       methaneLevel
// //     });
// //   }, []);

// //   const createChartData = (label, dataKey) => ({
// //     labels: Object.keys(dataJSON),
// //     datasets: [
// //       {
// //         label,
// //         data: chartData[dataKey],
// //         backgroundColor: 'rgba(75, 192, 192, 0.2)',
// //         borderColor: 'rgba(75, 192, 192, 1)',
// //         borderWidth: 1
// //       }
// //     ]
// //   });

// //   const options = {
// //     responsive: true,
// //     plugins: {
// //       legend: {
// //         labels: {
// //           color: 'white'
// //         },
// //         position: 'top',
// //       },
// //       tooltip: {
// //         callbacks: {
// //           label: function (tooltipItem) {
// //             return tooltipItem.label + ': ' + tooltipItem.raw;
// //           }
// //         },
// //         titleColor: 'white',
// //         bodyColor: 'white'
// //       }
// //     },
// //     scales: {
// //       x: {
// //         ticks: {
// //           color: 'white'
// //         },
// //         grid: {
// //           color: 'rgba(255, 255, 255, 0.2)'
// //         }
// //       },
// //       y: {
// //         ticks: {
// //           color: 'white'
// //         },
// //         grid: {
// //           color: 'rgba(255, 255, 255, 0.2)'
// //         }
// //       }
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-r from-blue-700 via-green-700 to-blue-800 text-white p-8">
// //       <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //         <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20">
// //           <h2 className="text-2xl mb-4">Sludge Level</h2>
// //           <Line data={createChartData('Sludge Level', 'sludgeLevel')} options={options} />
// //         </div>
// //         <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20">
// //           <h2 className="text-2xl mb-4">Pressure</h2>
// //           <Bar data={createChartData('Pressure', 'pressure')} options={options} />
// //         </div>
// //         <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20">
// //           <h2 className="text-2xl mb-4">Moisture</h2>
// //           <Pie data={createChartData('Moisture', 'moisture')} options={options} />
// //         </div>
// //         <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20">
// //           <h2 className="text-2xl mb-4">CO2 Level</h2>
// //           <Scatter data={createChartData('CO2 Level', 'co2Level')} options={options} />
// //         </div>
// //         <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20">
// //           <h2 className="text-2xl mb-4">Temperature</h2>
// //           <Line data={createChartData('Temperature', 'temperature')} options={options} />
// //         </div>
// //         <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20">
// //           <h2 className="text-2xl mb-4">Humidity</h2>
// //           <Radar data={createChartData('Humidity', 'humidity')} options={options} />
// //         </div>
// //       </div>
// //       <button
// //         className=" animate-floatUp fixed bottom-8 right-8 bg-green-500 animate- text-white p-4 rounded-full shadow-xl hover:scale-125 transition duration-300 ease-in-out"
// //         onClick={() => window.open('https://huggingface.co/spaces/Livewires/BioWhizz')}
// //       >
// //         <FontAwesomeIcon icon={faRobot} className="animate-pulse w-10 h-10 " />
// //       </button>
// //     </div>
// //   );
// // };

// // export default Dashboard;


// import React, { useEffect, useState } from 'react';
// import { Line, Bar, Pie, Radar, Scatter } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   ArcElement,
//   Tooltip,
//   Legend,
//   BarElement,
//   RadarController,
//   ScatterController,
//   RadialLinearScale
// } from 'chart.js';
// import { ref, onValue } from 'firebase/database';
// import { database } from '../Config/firebaseConfig'; // Ensure this path is correct
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRobot } from '@fortawesome/free-solid-svg-icons';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   ArcElement,
//   Tooltip,
//   Legend,
//   BarElement,
//   RadarController,
//   ScatterController,
//   RadialLinearScale
// );

// const Dashboard = () => {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     sludgeLevel: [],
//     pressure: [],
//     moisture: [],
//     co2Level: [],
//     temperature: [],
//     humidity: [],
//     methaneLevel: []
//   });

//   useEffect(() => {
//     const dataRef = ref(database, '/'); // Listening to the root path of the database

//     const unsubscribe = onValue(dataRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         const labels = Object.keys(data);
//         const sludgeLevel = labels.map(key => parseFloat(data[key].sludge_level || 0));
//         const pressure = labels.map(key => parseFloat(data[key].pressure || 0));
//         const moisture = labels.map(key => parseFloat(data[key].moisture || 0));
//         const CO2_level = labels.map(key => parseFloat(data[key].CO2_level || 0));
//         const temperature = labels.map(key => parseFloat(data[key].temperature || 0));
//         const humidity = labels.map(key => parseFloat(data[key].humidity || 0));
//         const methaneLevel = labels.map(key => parseFloat(data[key].methane_level_in_ppm || 0));

//         setChartData({
//           labels,
//           sludgeLevel,
//           pressure,
//           moisture,
//           CO2Level,
//           temperature,
//           humidity,
//           methaneLevel
//         });
//       }
//     });

//     // Cleanup listener on component unmount
//     return () => unsubscribe();

//   }, []);

//   const createChartData = (label, dataKey) => ({
//     labels: chartData.labels,
//     datasets: [
//       {
//         label,
//         data: chartData[dataKey],
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1
//       }
//     ]
//   });

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         labels: {
//           color: 'white'
//         },
//         position: 'top',
//       },
//       tooltip: {
//         callbacks: {
//           label: function (tooltipItem) {
//             return tooltipItem.label + ': ' + tooltipItem.raw;
//           }
//         },
//         titleColor: 'white',
//         bodyColor: 'white'
//       }
//     },
//     scales: {
//       x: {
//         ticks: {
//           color: 'white'
//         },
//         grid: {
//           color: 'rgba(255, 255, 255, 0.2)'
//         }
//       },
//       y: {
//         ticks: {
//           color: 'white'
//         },
//         grid: {
//           color: 'rgba(255, 255, 255, 0.2)'
//         }
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-700 via-green-700 to-blue-800 text-white p-8">
//               <h1 className=" mt-28 text-6xl font-semibold text-zinc-100 text-center">Dashboard </h1>
//       <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20">
//           <h2 className="text-2xl mb-11">Sludge Level</h2>
//           <Line data={createChartData('Sludge Level', 'sludgeLevel')} options={options} />
//         </div>
//         <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20">
//           <h2 className="text-2xl mb-4">Pressure</h2>
//           <Bar data={createChartData('Pressure', 'pressure')} options={options} />
//         </div>
//         <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20">
//           <h2 className="text-2xl mb-4">Moisture</h2>
//           <Pie data={createChartData('Moisture', 'moisture')} options={options} />
//         </div>
//         <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20">
//           <h2 className="text-2xl mb-4">CO2 Level</h2>
//           <Scatter data={createChartData('CO2_level', 'CO2_level')} options={options} />
//         </div>
//         <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20">
//           <h2 className="text-2xl mb-4">Temperature</h2>
//           <Line data={createChartData('Temperature', 'temperature')} options={options} />
//         </div>
//         <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20">
//           <h2 className="text-2xl mb-4">Humidity</h2>
//           <Radar data={createChartData('Humidity', 'humidity')} options={options} />
//         </div>
//       </div>
//       <button
//         className="animate-floatUp fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-125 transition duration-300 ease-in-out"
//         onClick={() => window.open('https://huggingface.co/spaces/Livewires/BioWhizz')}
//       >
//         <FontAwesomeIcon icon={faRobot} className="animate-pulse w-10 h-10" />
//       </button>
//     </div>
//   );
// };

// export default Dashboard;



import React, { useEffect, useState } from 'react';
import { Line, Bar, Radar, Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  RadarController,
  ScatterController,
  RadialLinearScale
} from 'chart.js';
import { ref, onValue } from 'firebase/database';
import { database } from '../Config/firebaseConfig'; // Ensure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  RadarController,
  ScatterController,
  RadialLinearScale
);

const Dashboard = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    sludgeLevel: [],
    pressure: [],
    moisture: [],
    co2level: [],
    temperature: [],
    humidity: [],
    methaneLevel: []
  });

  useEffect(() => {
    const dataRef = ref(database, '/'); // Listening to the root path of the database

    const unsubscribe = onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        console.log("Fetched data:", data); // Debugging line

        const labels = Object.keys(data);
        const sludgeLevel = labels.map(key => parseFloat(data[key].sludge_level || 0));
        const pressure = labels.map(key => parseFloat(data[key].pressure || 0));
        const moisture = labels.map(key => parseFloat(data[key].moisture || 0));
        const co2level = labels.map(key => parseFloat(data[key].CO2_level || 0));
        const temperature = labels.map(key => parseFloat(data[key].temperature || 0));
        const humidity = labels.map(key => parseFloat(data[key].humidity || 0));
        const methaneLevel = labels.map(key => parseFloat(data[key].methane_level_in_ppm || 0));

        console.log("CO2 Levels:", co2level); // Debugging line

        setChartData({
          labels,
          sludgeLevel,
          pressure,
          moisture,
          co2level,
          temperature,
          humidity,
          methaneLevel
        });
      }
    });

    // Cleanup listener on component unmount
    return () => unsubscribe();

  }, []);

  const createChartData = (label, dataKey) => {
    console.log("Creating chart data for:", label, chartData[dataKey]); // Debugging line

    const formattedData = dataKey === 'co2level'
      ? chartData[dataKey].map((value, index) => ({ x: index, y: value }))
      : chartData[dataKey];

    // Use fewer colors or adjust the dataset to make it less congested
    const colors = ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'];
    const borderColors = ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'];

    const datasets = [{
      label: label,
      data: formattedData,
      backgroundColor: colors[0],
      borderColor: borderColors[0],
      borderWidth: 1,
      pointRadius: 5,  // Adjust size of points for better visibility
      pointHoverRadius: 7 // Adjust size of points on hover
    }];

    return {
      labels: chartData.labels,
      datasets
    };
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: 'white'
        },
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw;
          }
        },
        titleColor: 'white',
        bodyColor: 'white'
      }
    },
    scales: {
      x: {
        ticks: {
          color: 'white'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)'
        }
      },
      y: {
        ticks: {
          color: 'white'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)'
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 via-green-700 to-blue-800 text-white p-8">
      <h1 className="mt-28 text-6xl font-semibold text-zinc-100 text-center">Dashboard</h1>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20">
          <h2 className="text-2xl mb-11">Sludge Level</h2>
          <Line data={createChartData('Sludge Level', 'sludgeLevel')} options={options} />
        </div>
        <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20">
          <h2 className="text-2xl mb-4">Pressure</h2>
          <Bar data={createChartData('Pressure', 'pressure')} options={options} />
        </div>
        <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20">
          <h2 className="text-2xl mb-4">Moisture</h2>
          <Radar data={createChartData('Moisture', 'moisture')} options={options} />
        </div>
        <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20">
          <h2 className="text-2xl mb-4">Humidity</h2>
          <Radar data={createChartData('Humidity', 'humidity')} options={options} />
        </div>
        <div className="bg-white/30 backdrop-blur-md  p-6 rounded-lg shadow-lg border border-white/20">
          <h2 className="text-2xl mb-4">CO2 Level</h2>
          <Scatter data={createChartData('CO2 Level', 'co2level')} options={options}  />
        </div>
        <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20">
          <h2 className="text-2xl mb-4">Temperature</h2>
          <Line data={createChartData('Temperature', 'temperature')} options={options} />
        </div>
        
      </div>
      <button
        className="animate-floatUp fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-125 transition duration-300 ease-in-out"
        onClick={() => window.open('https://huggingface.co/spaces/Livewires/BioWhizz')}
      >
        <FontAwesomeIcon icon={faRobot} className="animate-pulse w-10 h-10" />
      </button>
    </div>
  );
};

export default Dashboard;
