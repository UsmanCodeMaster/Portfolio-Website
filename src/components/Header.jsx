import React from 'react'

const Header = () => {
  return (
    <header>
        <nav className='flex justify-between items-center px-7'>
            <a href='/'>
                <img src="Usman.jpg" className='w-32' />
            </a>
            <div className='flex justify-center items-center gap-x-7'>
                <a href="#">Home</a>
                <a href="#">Projects</a>
                <a href="#">Services</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
            <a href='/' className='bg-white text-black px-5 py-3 rounded-[50px]' style={{backgroundColor: "rgba(248, 195, 1, 1)",
backgroundImage: "linear-gradient(139deg, rgba(248, 195, 1, 1) 0%, rgba(230, 120, 23, 1) 68%)"}}>
                Download CV
            </a>
        </nav>
    </header>
  )
}

export default Header