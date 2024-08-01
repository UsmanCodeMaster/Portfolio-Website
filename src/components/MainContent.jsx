import React, { memo , useRef} from 'react'
import LandingPage from './LandingPage'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import Page2 from './Page2';
import ScrollTrigger from 'gsap/ScrollTrigger'
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';

const MainContent = () => {
  const landingpage = useRef()
  const landingPageAnimator = useRef()
  const page2Animator = useRef()


  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.to(landingpage.current, {
      clipPath: "circle(0% at 50% 50%)",
      scrollTrigger: {
        trigger: landingPageAnimator.current,
        scroller: "body",
        start: "top 0%",
        end: 'top -100%',
        pin: true,
        scrub: 1,
      }
    })
  })

  return (
    <main className='min-h-screen'>
      <div className='relative overflow-hidden'>
        <div className='w-full h-screen'>
          <div ref={landingPageAnimator} className='w-full h-screen relative z-[3]'></div>
          <div ref={landingpage} className='fixed top-0 left-0 w-full min-h-screen overflow-hidden z-[2] bg-zinc-900' style={{clipPath: "circle(100% at 50% 50%)"}}>
            <LandingPage />
          </div>
        </div>
        <div className='w-full h-screen'>
          <div ref={page2Animator} className='w-full h-screen relative z-[13]'></div>
          <div className='w-full h-full bg-zinc-950 min-h-screen fixed top-0 left-0 z-[1] flex justify-center items-center'>
            <Page2 page2Animator={page2Animator} />
          </div>
        </div>
        <div className='w-full min-h-screen bg-zinc-900 relative z-[14] py-40'>
          <Page3 />
        </div>
        <div className='relative z-[15] bg-zinc-900'>
          <Page4 />
        </div>
        <div className='relative z-[16]'>
          <Page5 />
        </div>
      </div>
    </main>
  )
}

export default memo(MainContent)