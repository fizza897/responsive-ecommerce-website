import React from 'react'
import Heading from '../Shared/Heading/Heading'
import Blog1 from "../Images/blog-1.jpg"
import Blog2 from "../Images/blog-2.jpg"
import Blog3 from "../Images/blog-3.jpg"

const blogData=[
    {
        title:"How to choose perfect smartwatch",
        subtle:"minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi",
        published:"Jan 20, 2024 by Dilshad",
        img: Blog1,
        aosDelay:"0"
    },
    {
        title:"How to choose perfect gadget",
        subtle:"minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi",
        published:"Jan 20, 2024 by Satya",
        img: Blog2,
        aosDelay:"200"

    },
    {
        title:"How to choose perfect VR headset",
        subtle:"minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi",
        published:"Jan 20, 2024 by Sabir",
        img: Blog3,
        aosDelay:"400"

    },
    
]
 const Blogs = () => {
  return (
    <>
    <div className='my-12'>
    <div className='container'>
        <Heading title={"Recent News"} subtitle={"Explore Our Blogs"}/>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
            {blogData.map((data)=>(
                <div key={data.title}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className='bg-white dark:bg-gray-900'>
                <div className='overflow-hidden rounded-2xl mb-2'>
                    <img src={data.img} className='w-full h-[200px] object-cover rounded-2xl hover:scale-105 duration-500' alt="" srcset="" />
                </div>
                <div className='space-y-2'>
                    <p className='text-xs text-gray-500'>
                        {data.published}
                    </p>
                    <p className='font-bold line-clamp-1'>
                        {data.title}
                    </p>
                    <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtle}</p>
                </div>
                </div>
            ))}

        </div>
    </div>
    </div>
    
    </>
  )
}
export default Blogs