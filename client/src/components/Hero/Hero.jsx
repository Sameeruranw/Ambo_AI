import React from 'react'
import Service from '../Service/Service'

const Hero = () => {
  return (
   <>
   <div className=' flex flex-col items-center gap-4 '>
    <h1 className=' text-2xl font-bold'>Welcome to AI Solutions</h1>
    <p className=' text-3xl'>Your partner in transforming the digital workplace with AI Powered Solution </p>
    <div>
        <Service/>
    </div>
   </div>
   </>
  )
}

export default Hero