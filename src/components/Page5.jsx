import { useGSAP } from '@gsap/react'
import React , { memo , useRef } from 'react'
import gsap from 'gsap'
import Page5AnimatorComponent from './Page5AnimatorComponent'

const Page5 = () => {
  const con = useRef()
  const one = useRef()
  const two = useRef()
  const three = useRef()
  const four = useRef()

  useGSAP(() => {
    let tl = gsap.timeline({scrollTrigger: {
      trigger: con.current,
      scroller: "body",
      start: "top 0",
      end: "top -150%",
      pin: true,
      scrub: 1,
      markers: true
    }})
    tl.to(one.current.querySelector("img"), {
      scale: 1.2
    })
    tl.to(two.current, {
      clipPath: "circle(80% at 50% 50%)"
    })
    tl.to(two.current.querySelector("img"), {
      scale: 1.2
    })
    tl.to(three.current, {
      clipPath: "circle(80% at 50% 50%)"
    })
    tl.to(three.current.querySelector("img"), {
      scale: 1.2
    })
    tl.to(four.current, {
      clipPath: "circle(80% at 50% 50%)"
    })
    tl.to(four.current.querySelector("img"), {
      scale: 1.2
    })
  })

  return (
    <div ref={con} className='w-full h-screen bg-zinc-900'>
      <div ref={one} className='w-full h-full absolute top-0 left-0 overflow-hidden' style={{clipPath: "circle(100% at 50% 50%)"}}>
        <Page5AnimatorComponent imgName="page5_1.webp" />
      </div>
      <div ref={two} className='w-full h-full absolute top-0 left-0 overflow-hidden' style={{clipPath: "circle(0% at 50% 50%)"}}>
        <Page5AnimatorComponent imgName="page5_2.webp" />
      </div>
      <div ref={three} className='w-full h-full absolute top-0 left-0 overflow-hidden' style={{clipPath: "circle(0% at 50% 50%)"}}>
        <Page5AnimatorComponent imgName="page5_3.webp" />
      </div>
      <div ref={four} className='w-full h-full absolute top-0 left-0 overflow-hidden' style={{clipPath: "circle(0% at 50% 50%)"}}>
        <Page5AnimatorComponent imgName="page5_4.webp" />
      </div>
    </div>
  )
}

export default memo(Page5)