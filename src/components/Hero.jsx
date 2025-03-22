import React from 'react'
import Banner from "./assets/images/banner.jpg"

export const Hero = () => {
  return (
    <div className='pt-6  overflow-hidden'>
<h1 className='text-[40px] font-bold text-black text-center pt-6 '>
  Lorem ipsum dolor amet,
  <br></br>repellendus tempora.
</h1> 
<img className='m-7 md-flex w-3vh'src={Banner} alt="" />




    </div>
  )
}

export default Hero
