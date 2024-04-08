import React from 'react'
import Brand1 from "../Images/Brand1.png"
import Brand2 from "../Images/Brand2.png"
import Brand3 from "../Images/Brand3.png"
import Brand4 from "../Images/Brand4.png"
import Brand5 from "../Images/Brand5.png"


 const Partner = () => {
  return (
    <>
    <div data-aos="zoom-out" className='py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10'>
        <div className='container'>
            <div className='grid grid-cols-5 gap-3 place-items-center opacity-50'>
                <img src={Brand1} alt="brand" className='w-[80px] dark:invert' srcset="" />
                <img src={Brand2} alt="brand" className='w-[80px] dark:invert' srcset="" />
                <img src={Brand3} alt="brand" className='w-[80px] dark:invert' srcset="" />
                <img src={Brand4} alt="brand" className='w-[80px] dark:invert' srcset="" />
                <img src={Brand5} alt="brand" className='w-[80px] dark:invert' srcset="" />


            </div>
        </div>
    </div>
    
     </>
  )
}
export default Partner;