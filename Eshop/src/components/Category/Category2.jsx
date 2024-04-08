import React from "react";
import Game from "../Images/gaming.png";
import Vr from "../Images/vr.png";
import Button from "../Shared/Button/Button";
import Speaker from "../Images/speaker.png";
const Category2 = () => {
  return (
    <>
      <div className='py-8'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white '>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Laptop</p>
                            <Button
                            text="Browser"
                            bgColor={"bg-primary"}
                            textColor={"text-white"}
                            />
                        </div>
                    </div>
                    <img src={Game} className='w-[250px] absolute top-1/2 -translate-y-1/2 -right-0' alt="" />
                </div>
                <div className=' py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-start'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white '>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Earphone</p>
                            <Button
                            text="Browser"
                            bgColor={"bg-white"}
                            textColor={"text-brandGreen"}
                            />
                        </div>
                    </div>
                    <img src={Vr} className='w-[320px] absolute bottom-0 right-[5px]' alt="" />
                </div>
                <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue/90 to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white '>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Gadgets</p>
                            <Button
                            text="Browser"
                            bgColor={"bg-white"}
                            textColor={"text-brandBlue"}
                            />
                        </div>
                    </div>
                    <img src={Speaker} className='w-[200px] absolute bottom-0 right-0' alt="" />
                </div>
            </div>
            
        </div>
    </div>
    </>
  );
};
export default Category2;
