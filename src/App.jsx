import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "flowbite-react";

import './App.css'
import Information from './Component/Information'
import Card  from './Component/Card'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Student from './Component/Student'
import TopCitiesSales from './Component/TopCitiesSales';
import PriceTrendChart from './Component/PriceTrendChart';
import Monthly_metrics from './Component/Monthly_metrics';
import Metrics_Products from './Component/Metrics_Products';
import Top10Products from './Component/Top10Products';



function App() {
  const [count, setCount] = useState(0)



  const topCities = [
    { name: 'Madrid', sales: 266457.49 },
    { name: 'San Rafael', sales: 173160.50 },
    { name: 'Nantes', sales: 84115.58 },
    { name: 'San Jose', sales: 77690.15 },
    { name: 'Reims', sales: 48728.82 }
  ];

  
  const totalR = 'Total Revenue Over Time';
  const totalRData = [
    { year: 2005, month: 1, price: 283680.46 },
    { year: 2005, month: 2, price: 289902.30},
    { year: 2005, month: 3, price: 315131.94  },
    { year: 2005, month: 4, price:  217977.63  },
    { year: 2005, month: 5, price:   372343.65},
  ];
  
  const total = 'Total Units Sold Over Time';
  const AverageData = [
    { year: 2005, month: 1, price: 3395 },
    { year: 2005, month: 2, price: 3393 },
    { year: 2005, month: 3, price: 3852 },
    { year: 2005, month: 4, price: 2636 },
    { year: 2005, month: 5, price:  4357},
  ];
  const Average = 'Average Price per Unit over Time';
  const priceData = [
    { year: 2005, month: 1, price: 84.177500 },
    { year: 2005, month: 2, price: 84.930103 },
    { year: 2005, month: 3, price: 81.688208 },  
    { year: 2005, month: 4, price: 81.362321 },
    { year: 2005, month: 5, price: 84.162323},
  ];
  
  return (
    <>

          <Navbar/>
 
    <div className='relative flex flex-col justify-center w-full '>

     
             <div className="container mx-auto   containerApp" >
          <Student/>
          <Card/>
          <div className="App bg-gray-200  flex items-center justify-center p-10 ">
              <Metrics_Products/>
          </div>
          <div className="App bg-gray-200  flex items-center justify-center p-10 ">
              <Top10Products/>
          </div>
          <div className="App bg-gray-200 py-20 flex items-center justify-center ">
               <PriceTrendChart dataPoints={totalRData} title={totalR} />
          </div>
          <div className="App bg-gray-200 py-20 flex items-center justify-center ">
               <PriceTrendChart dataPoints={AverageData} title={total} />
          </div>
         <div className="App bg-gray-200 py-20  flex items-center justify-center ">
               <PriceTrendChart dataPoints={priceData}  title={Average} />
          </div>

          <div className="flex flex-col    justify-center items-center py-20 bg-gray-200">
               <TopCitiesSales cities={topCities} />
         </div>
         <div className="App bg-gray-200  flex items-center justify-center p-10 ">
              <Information/>
          </div>

          
      </div>
    </div>
    </>
  ) 
}

export default App
