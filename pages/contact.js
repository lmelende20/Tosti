import React from 'react'

function contact() {
  return (
    <div className='lg:px-[80px] md:px-[55px] px-[30px] pb-[80px] '>
      <div className='flex md:flex-row flex-col md:justify-between justify-center items-center'>
        <div className='text-center md:text-left md:pb-[0px] pb-[30px]'>
          <h1 className='lg:text-[50px] md:text-[40px] text-[30px] font-Raleway font-bold pb-[10px]'>Contact</h1>
          <p className='lg:text-[25px] md:text-[20px] text-[15px] font-Raleway pb-[25px]'>
            Tel (201) 683-7060
          </p>
          <h1 className='lg:text-[50px] md:text-[40px] text-[30px] font-Raleway font-bold pb-[10px]'>Location</h1>
          <p className='lg:text-[25px] md:text-[20px] text-[15px] font-Raleway pb-[25px] '>
            1024 Washington St, Hoboken, NJ 07030
          </p>
          <h1 className='lg:text-[50px] md:text-[40px] text-[30px] font-Raleway font-bold pb-[10px]'>Hours</h1>
          <p className='lg:text-[25px] md:text-[20px] text-[15px] font-Raleway pb-[10px] '>
            Monday - Friday: 9am - 9pm
          </p>
          <p className='lg:text-[25px] md:text-[20px] text-[15px] font-Raleway pb-[25px]'>
            Saturday & Sunday: 9am - 5pm
          </p>
        </div>
        <div className='md:pl-[30px] pl-[0px]'>
          <div className='hidden lg:flex'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12090.286342403791!2d-74.0275125!3d40.7494515!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf2a1f6ed1ed8c01f!2sTosti!5e0!3m2!1sen!2sus!4v1646084991483!5m2!1sen!2sus" width="500" height="500" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
          </div>
          <div className='lg:hidden sm:flex hidden'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12090.286342403791!2d-74.0275125!3d40.7494515!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf2a1f6ed1ed8c01f!2sTosti!5e0!3m2!1sen!2sus!4v1646084991483!5m2!1sen!2sus" width="400" height="400" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
          </div>
          <div className='sm:hidden flex'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12090.286342403791!2d-74.0275125!3d40.7494515!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf2a1f6ed1ed8c01f!2sTosti!5e0!3m2!1sen!2sus!4v1646084991483!5m2!1sen!2sus" width="250" height="250" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
      <h2 className='lg:text-[25px] md:text-[20px] text-[15px] text-yellow font-bold text-center font-Raleway pt-[50px]'>
        Your opinion is very important to continue improving and offer you a better service for the next opportunity.
      </h2>
      
      
    </div>
  )
}

export default contact