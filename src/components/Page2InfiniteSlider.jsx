import React, { memo } from 'react'

const Page2InfiniteSlider = () => {
  return (<>
    <div className='flex justify-center items-center flex-shrink-0 flex-nowrap gap-x-5'>
        <div className='font-["rej"] text-[50px] leading-[70px]'>frontend</div>
        <img src="page5_1.webp" className='w-14 h-14 rounded-full object-cover object-center' />
    </div>
    <div className='flex justify-center items-center flex-shrink-0 flex-nowrap gap-x-5'>
        <div className='font-["rej"] text-[50px] leading-[70px]'>javascript</div>
        <img src="page5_2.webp" className='w-14 h-14 rounded-full object-cover object-center' />
    </div>
    <div className='flex justify-center items-center flex-shrink-0 flex-nowrap gap-x-5'>
        <div className='font-["rej"] text-[50px] leading-[70px]'>webdev</div>
        <img src="page5_3.webp" className='w-14 h-14 rounded-full object-cover object-center' />
    </div>
    <div className='flex justify-center items-center flex-shrink-0 flex-nowrap gap-x-5'>
        <div className='font-["rej"] text-[50px] leading-[70px]'>backend</div>
        <img src="page6_2.webp" className='w-14 h-14 rounded-full object-cover object-center' />
    </div>
    <div className='flex justify-center items-center flex-shrink-0 flex-nowrap gap-x-5'>
        <div className='font-["rej"] text-[50px] leading-[70px]'>greensock</div>
        <img src="page6_1.webp" className='w-14 h-14 rounded-full object-cover object-center' />
    </div>
</>)
}

export default memo(Page2InfiniteSlider)