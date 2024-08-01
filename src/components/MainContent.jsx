import React, { memo , useRef} from 'react'
import LandingPage from './LandingPage'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import Page2 from './Page2';
import ScrollTrigger from 'gsap/ScrollTrigger'

const MainContent = () => {
  const landingpage = useRef()


  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    const tl = gsap.timeline({scrollTrigger: {
      trigger: landingpage.current,
      scroller: "body",
      start: "top 0%",
      end: 'top -100%',
      pin: true,
      scrub: 1,
    }})
    tl.to(landingpage.current, {
      clipPath: "circle(0% at 50% 50%)"
    })
  })

  return (
    <main className='min-h-screen'>
      <div className='relative overflow-hidden'>
        <div ref={landingpage} className='relative z-[6] bg-zinc-900' style={{clipPath: "circle(100% at 50% 50%)"}}>
            <LandingPage />
        </div>
        <div className='fixed top-0 left-0 z-[5]'>
          <Page2 />
        </div>
      </div>
    </main>
  )
}

export default memo(MainContent)