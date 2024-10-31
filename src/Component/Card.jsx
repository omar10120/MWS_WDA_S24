import React, { useState, useEffect } from 'react';
function Card() {
    const [Student, setstudent] = useState([
        { YEAR_ID: '2005', MONTH_ID: '42%',TOTAL_REVENU	:'283680.46',TOTAL_UNITS_SOLD  :'3395',AVG_PRICE_PER_UNIT:'84.162323' },
        { YEAR_ID: '2005', MONTH_ID: '42%',TOTAL_REVENU	:'289902.30',TOTAL_UNITS_SOLD  :'3393',AVG_PRICE_PER_UNIT:'84.930103' },
        { YEAR_ID: '2005', MONTH_ID: '15%',TOTAL_REVENU	:'315131.94',TOTAL_UNITS_SOLD  :'3852',AVG_PRICE_PER_UNIT:'81.688208' },
        { YEAR_ID: '2005', MONTH_ID: '15%',TOTAL_REVENU	:'217977.63',TOTAL_UNITS_SOLD  :'2634',AVG_PRICE_PER_UNIT:'81.362321' },
        { YEAR_ID: '2005', MONTH_ID: '15%',TOTAL_REVENU	:'372343.65',TOTAL_UNITS_SOLD  :'4357',AVG_PRICE_PER_UNIT:'84.177500' },
      ]);
      
      useEffect(() => {
        let text = "monthly metrics";
        let result = text.toUpperCase();
        document.getElementById('mm').innerHTML = result;
      });

  return (
    <>
    
    <div className="container mx-auto  flex flex-col space-y-5 justify-center items-center py-10   " id='card'>
            <h1 className='font-bold flex py-2 ' id='mm'></h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 text-center"  >
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >
                <tr>
                <th scope="col" className="px-6 py-3">
                    YEAR_ID  
                    </th>
                <th scope="col" className="px-6 py-3">
                    MONTH_ID  
                    </th>
                    <th scope="col" className="px-6 py-3">
                    TOTAL_REVENUE  
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                    TOTAL_UNITS_SOLD  
                    </th>
                    <th scope="col" className="px-6 py-3">
                    AVG_PRICE_PER_UNIT
                    </th>
        
                </tr>
                </thead>
                <tbody>
                        {Student.map((item , index)=>(

                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.YEAR_ID}
                    </th>
                    <td className="px-6 py-4 text-gray-900">
                    {item.MONTH_ID}
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                    {item.TOTAL_REVENU}
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                    {item.TOTAL_UNITS_SOLD  }
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                    {item.AVG_PRICE_PER_UNIT}
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>

</div>
</>
  )
}

export default Card