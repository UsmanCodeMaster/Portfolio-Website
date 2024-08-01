import React, { memo } from 'react'

const Page5AnimatorComponent = (i) => {
  return (
    <>
        <img src={i.imgName} className='w-full h-full object-cover object-center' />
        <div className='w-full h-full absolute top-0 left-0' style={{backgroundColor: "rgba(0,0,0,0.4)"}}></div>
    </>
  )
}

export default memo(Page5AnimatorComponent)