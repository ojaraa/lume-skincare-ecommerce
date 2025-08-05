import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <div className=" flex  flex-col sm:flex-row sm:gap-y-6 sm:justify-between items-center py-6 ">
      <div className="w-full sm:w-1/2 py-8 pb-16 sm:py-0">
        <h1 className={`antialiased text-4xl sm:text-[50px] font-medium` }>Get the best deals on skincare products here</h1>
        <p className="text-lg text-gray-600 mt-4">
          Discover a wide range of skincare products tailored to your needs. From moisturizers to serums, we have it all.
        </p>
        <Button className="mt-4">
          Shop now
          <span className="ml-2">→</span>
        </Button>
        <p></p>
      </div>
      <div className=" ">
        <Image
          src="/assets/images/girl.jpg"
          alt="Hero Image"
          width={500}
          height={500}
          className=" object-cover rounded-lg h-[600px]"
        />
      </div>
    </div>
  )
}

export default HeroSection