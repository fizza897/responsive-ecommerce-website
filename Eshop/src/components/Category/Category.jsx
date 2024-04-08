import React from 'react'
import Earphones from "../Images/earphone.png"
import Watch from "../Images/watch.png"
import Button from '../Shared/Button/Button';
import Laptops from "../Images/macbook.png"

 const Category = () => {
  return (
    <>
    <div className='py-8'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className=' py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-100 '>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                            <Button
                            text="Browser"
                            bgColor={"bg-primary"}
                            textColor={"text-white"}
                            />
                        </div>
                    </div>
                    <img src={Earphones} className='w-[320px] absolute bottom-0' alt="" />
                </div>
                <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow/90 to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white '>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Gadgets</p>
                            <Button
                            text="Browser"
                            bgColor={"bg-white"}
                            textColor={"text-brandYellow"}
                            />
                        </div>
                    </div>
                    <img src={Watch} className='w-[320px] absolute -right-4 lg:top-[40px]' alt="" />
                </div>
                <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white '>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px] opacity-40'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Laptops</p>
                            <Button
                            text="Browser"
                            bgColor={"bg-white"}
                            textColor={"text-brandYellow"}
                            />
                        </div>
                    </div>
                    <img src={Laptops} className='w-[250px] absolute top-1/2 -translate-y-1/2 -right-0' alt="" />
                </div>

            </div>
            
        </div>
    </div>
    
    
    </>
  )
}
export default Category;