import React, { memo } from 'react'
import Page7SkillComponent from './Page7SkillComponent'
import FresherDes from './FresherDes'

const Page7 = () => {
  return (
    <div className='w-full flex justify-between items-start pl-[6.5vw] pr-[10vw] pt-6 pb-20 relative'>
      <div>
        <h1 className='text-black font-["rej"] text-[7vw] leading-[6vw] w-[300px] mt-10'>Skills I Have</h1>
        <div className='flex justify-center items-center gap-x-3 mt-5'>
          <div className='w-8 h-[2px] bg-zinc-900'></div>
          <p className='text-black w-[350px]'>I can build ambitious, awesome and driving web experiences that will provide a tremendous experience to your viewers.</p>
        </div>
      </div>
      <div className='w-[450px]'>
        <Page7SkillComponent heading="Frontend Development" skills="React JS, JavaScript (Dom Manipulation), React Router Dom, Version Control, Git, GitHub, CSS, Tailwnd CSS, HTML, HTML5" num="1" />
        <Page7SkillComponent heading="Animaions" skills="GreenSock Animation Platform (GSAP), Scroll Trigger (Gsap Plugin), Locomotive JS, GSAP and Scroll Trigger with React JS" num="2" />
        <Page7SkillComponent heading="Backend Development" skills="Node JS, Express JS, Mongoose ODM, Mongo DB, Template Engine (EJS), JWT Authentication, Bcrypt, Flash Messages, ServerSide Rendering => (All Intermediate)" num="3" />
      </div>
      <div className='absolute bottom-8 left-10'>
        <FresherDes />
      </div>
    </div>
  )
}

export default memo(Page7)