import React, { useState, useEffect } from 'react';
function Student() {
    const [Student, setstudent] = useState([
        { name: 'عمرو داوودي', id: 'amr_daodi_321859', class: 'C2' },
        { name: ' اليسار مصطفى مصطفى', id: ' alissar_323332', class: 'C2' },
        { name: 'إيمان عدنان المقداد', id: ' eman_331911', class: 'C1' },
        { name: 'اسراء أبو غيدة', id: 'esraa_331478', class: 'C1' },
        { name: 'داليا الباش', id: 'dalia_322150', class: 'C1' },
      ]);
  return (
    <>
    <div className="container mx-auto  flex flex-col space-y-5 justify-center items-center py-10 w-full " id='student' >
        <h1 className='font-bold' dir='rtl'> تحليل البيانات WDA_S24</h1>
        <h1 className='font-bold'> بإشراف الدكتور باسل الخطيب</h1>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full ">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 text-center" >
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            اسم الطالب
                        </th>
                        <th scope="col" className="px-6 py-3">
                            الصف
                        </th>   
                        <th scope="col" className="px-6 py-3">
                            رقم الطالب
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                            {Student.map((item , index)=>(

                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 ">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.name}
                        </th>
                        <td className="px-6 py-4 text-gray-900">
                        {item.class}
                        </td>
                        <td className="px-6 py-4 text-gray-900">
                        {item.id}
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

export default Student