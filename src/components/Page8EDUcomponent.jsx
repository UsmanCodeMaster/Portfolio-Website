import React, { memo } from 'react'

const Page8EDUcomponent = (i) => {
  return (
    <div className='w-full flex justify-start items-start border-t-[1px] border-t-solid border-t-black pt-4 mb-10'>
        <div className='text-[14px] w-[120px] translate-y-2'>{i.time}</div>
        <div className='w-[70%]'>
            <h4 className='font-semibold text-[25px]'>{i.degree}</h4>
            <p className='text-[15px]'>
                <span className='text-[16px] font-semibold'>{i.degName} :</span> &nbsp; {i.des}
            </p>
        </div>
    </div>
  )
}

export default memo(Page8EDUcomponent)