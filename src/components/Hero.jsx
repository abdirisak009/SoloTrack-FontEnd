import React from 'react'
import Banner from "../assets/mages/banner (1).jpg"

export const Hero = () => {
  return (
    <div className='pt-6  overflow-hidden'>
<h1 className='text-[40px] font-bold text-black text-center  relative pt-6 z-10'>
  Lorem ipsum dolor amet,
  <br></br>repellendus tempora.
</h1> 
<img className='mt-7 md-flex w-3vh  absolute' src={Banner} alt="" />




    </div>
  )
}

export default Hero
