import React, { useEffect, useRef } from 'react'

const CustomCursor = () => {
    let crsr = useRef()
    useEffect(() => {
        window.addEventListener("mousemove", (i) => {
            crsr.current.style.display ="block"
            if (window.innerWidth > 800) {
                crsr.current.style.left = `${i.clientX}px`;
                crsr.current.style.top = `${i.clientY}px`;
            }
        })
    })
return (<>
    <div ref={crsr} className='w-20 h-20 hidden duration-300 ease-linear rounded-full bg-white mix-blend-difference pointer-events-none fixed top-0 left-0 z-[50] -translate-x-1/2 -translate-y-1/2'></div>
    <div>
        {}
    </div>
    </>
  )
}

export default CustomCursor