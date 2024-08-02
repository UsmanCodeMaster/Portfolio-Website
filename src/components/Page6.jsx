import { useGSAP } from '@gsap/react'
import React, { memo, useRef, useState } from 'react'
import gsap from 'gsap'

const Page6 = () => {
    const page6Con = useRef()
    const skill = useRef()


    useGSAP(() => {
        if (window.innerWidth < 1400) {
            scaleAnimation(230, 700)
        } else if (window.innerWidth > 1400 && window.innerWidth < 1500) {
            scaleAnimation(250, 700)
        } else if (window.innerWidth > 1500) {
            scaleAnimation(300, 700)
        }
        function scaleAnimation(a, b) {
            gsap.to(skill.current, {
                scale: a,
                ease: "ease.out.in",
                scrollTrigger: {
                    trigger: page6Con.current,
                    scroller: "body",
                    start: 'top 0%',
                    end: `top -${b}%`,
                    scrub: 1,
                    pin: true,
                }
            })
        }


    })
return (
    <div ref={page6Con} className='w-full h-screen flex justify-center items-center overflow-hidden'>
        <div ref={skill} className='font-["rej"] text-[55px] font-extrabold tracking-wider origin-center'>Skills</div>
    </div>
  )
}

export default memo(Page6)