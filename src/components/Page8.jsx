import React, { memo } from 'react'
import Page8EDUcomponent from './Page8EDUcomponent'
import FresherDes from './FresherDes'

const Page8 = () => {
  return (
    <div className='page8 flex justify-between items-start px-20 pt-5 relative'>
      <div>
          <h1 className='text-black text-[7vw] leading-[6vw] w-[31vw] mt-10'>Education & tech Studies</h1>
      </div>
      <div className='pt-14 pr-14 w-[50%]'>
          <h1 className='text-[35px] font-semibold mb-5'>Education</h1>
          <Page8EDUcomponent time="Currently" degree="Bachelor of Science" degName="Information Technology" des="Studing from Government Islamia College afiliated with The University of Punjab" />
          <Page8EDUcomponent time="2021 - 2023" degree="Intermediate" degName="Pre-Medical" des='I passed my inter from Government Islamia College Civilines, Lahore with grade "A".' />
          <Page8EDUcomponent time="2019 - 2021" degree="Matriculation" degName="Science Subjects" des='I passed my matriculation from United Academy, Shahdra, Lahore with grade "A+".' />
      </div>
      <div className='absolute bottom-0 left-10'>
      <FresherDes />
      </div>
    </div>
  )
}

export default memo(Page8)