import React from 'react'

function Information() {
  return (
    <div className="container mx-auto  py-10" id='compare' >
        <div className='w-full flex flex-col justify-end items-end 	 space-y-5 max-sm:p-5 '>
            <h1 className='font-bold text-2xl'>النتيجة </h1>
            <span className='font-bold text-2xl'dir='rtl'>Products</span>
                <p className='leading-10 ' dir='rtl'>  عائدات المرتفعة مثل S18_3232 وS12_4675. </p>
            <span className='font-bold text-2xl' dir='rtl'>المبيعات حسب التاريخ:</span>
            <p className='leading-10 ' dir='rtl'> تشير الزيادة في مايو 2005 إلى فرص موسمية. .</p>
            <h1 className='font-bold text-2xl'  dir='rtl'> من جهة المدن الأكثر مبيعا:  </h1>
            <p className='leading-10 	' dir='rtl' >
              تمثل مدريد وسان رافائيل أكبر الأسواق من حيث المبيعات. 
            </p>

            <span className='font-bold text-2xl'>في النهاية</span>
            <p className='leading-10 ' dir="rtl">تظهر الإيرادات تباينًا معتدلاً، مع وجود فارق ملحوظ من الحد الأدنى إلى الحد الأقصى، مما يشير إلى تباين في إيرادات المنتج أو أدائه بمرور الوقت.كما تظهر الوحدات المباعة بعض التباين، مما يشير إلى اختلافات في الطلب أو المبيعات عبر العناصر.
                      متوسط ​​السعر لكل وحدة مستقر، مع تقلبات ضئيلة، مما يشير إلى استراتيجيات تسعير أو قيم منتجات ثابتة.</p>
            </div>
    </div>

  )
}

export default Information