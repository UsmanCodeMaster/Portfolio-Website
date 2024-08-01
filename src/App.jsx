import React, { memo } from 'react'
import Header from './Components/Header'
import MainContent from './Components/MainContent'
// import Footer from './Components/Footer'
// import CustomCursor from './Components/CustomCursor'

const App = () => {
  return (
    <div className='min-h-screen w-full'>
      {/* <CustomCursor /> */}
      <Header />
      <MainContent />
      {/* <Footer/> */}
    </div>
  )
}

export default memo(App)