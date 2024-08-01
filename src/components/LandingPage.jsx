import React , { memo } from 'react'

const LandingPage = () => {
  return (
    <div className='min-h-screen w-full flex justify-center items-center relative'>
      <div className='text-[18vw] leading-[13vw]'>
        <h1 className='text-center font-["braked"] mix-blend-difference'>Web Designer &</h1>
        <h1 className='text-center font-["braked"] mix-blend-difference'>Backend Developer</h1>
      </div>
      <div></div>
      <div className='absolute left-10 bottom-10 opacity-75'>
        <h4>Usman Haider</h4>
        <p className='text-[12px] w-52 my-2'>I am a web developer, seeking for an internship to start my job career. I am very dedicated to my tasks.</p>
      </div>
      <div className='absolute right-10 bottom-10 opacity-75'>
        <p className='text-[14px] text-right'>Scroll Down <br /> To See Magic</p>
      </div>
    </div>
  )
}

export default memo(LandingPage)