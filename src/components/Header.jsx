import React from 'react'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full z-[520]'>
        <nav className='flex justify-between items-center px-10'>
            <div>
                <img src="/UsmanNav.png" className='w-28 mix-blend-difference' />
            </div>
            <div className='flex justify-center items-center gap-x-8 text-[15px]'>
                <div>Home</div>
                <div>Projects</div>
                <div>Services</div>
                <div>About</div>
                <div className=' mix-blend-difference'>Contact</div>
            </div>
        </nav>
    </header>
  )
}

export default Header