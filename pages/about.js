import React from 'react'
import Image from 'next/image'

function about() {
  return (
    <div className='lg:px-[80px] md:px-[55px] px-[30px] flex justify-between lg:flex-row flex-col items-center pb-[80px]'>
      <div className='lg:pr-[75px] pr-[0px]'>
        <div className='hidden lg:flex'>
          <Image src="/tostiExt.png" alt="Exterior of Tosti" width={475} height={475} layout="fixed"/>
          
        </div>
        <div className='lg:hidden sm:flex hidden'>
          <Image src="/tostiExt.png" alt="Exterior of Tosti" width={300} height={300} layout="fixed"/>
        </div>
        <div className='sm:hidden flex'>
          <Image src="/tostiExt.png" alt="Exterior of Tosti" width={275} height={275} layout="fixed"/>
        </div>
      </div>
      
      <div className='text-center lg:text-left lg:pt-[0px] pt-[30px]'>
        <h1 className='lg:text-[50px] md:text-[40px] text-[30px] font-Raleway font-bold pb-[25px]'>About Us</h1>
        <p className='lg:text-[25px] md:text-[20px] text-[15px] font-Raleway pb-[25px]'>Come on in and enjoy some delicious food with us! We offer more than just a tasty breakfast. 
          Our restaurant is a collective of amazing people striving to build a delightful American kitchen.
        </p>
        <p className='lg:text-[25px] md:text-[20px] text-[15px] font-Raleway '> 
          Tosti Cafe & Kitchen is a premier and contemporary american cusine that has been proudly serving the Hoboken 
          area and beyond since 2018. Since then, Our mission has been to provide fresh healthy tasty food and service 
          for all those that wish to combine fun and enjoyable ambiance into one extraordinary dining experience.
        </p>
      </div>
    </div>
  )
}

export default about