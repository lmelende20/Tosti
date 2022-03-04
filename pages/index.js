import React, { useState } from 'react'
import Image from 'next/image'
import Navbar from '../Components/Navbar'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import {motion, transform} from "framer-motion"
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  const imgList = [
    "/img1.png", '/img2.png', '/img3.png', '/img4.png', '/img5.png'
  ]

  return (
    <div>
      <div className='flex flex-col h-screen w-screen' >
        <Navbar/>
        <motion.div className='lg:px-[100px] md:px-[60px] px-[30px] h-full flex md:justify-between justify-center items-center md:flex-row flex-col-reverse' initial={{opacity: 0, y: 5}} animate={{opacity: 1, y: 0}} transition={{ ease: "easeIn", duration: 1 }}>
          <motion.div className='md:text-left text-center md:pt-[0px] pt-[20px]' >
            <h1 className='lg:text-[50px] md:text-[40px] text-[30px] font-Raleway font-bold pb-[25px]'>Welcome to Tosti</h1>
            <p className='lg:text-[25px] md:text-[20px] text-[15px] font-Raleway pb-[25px] md:pr-[20px] pr-[0px]'>Come on in and enjoy some delicious food with us! We offer more than just a tasty breakfast. 
              Enjoy a range of foods at any time of the day!
            </p>
            <motion.button className='font-Raleway lg:text-[25px] md:text-[20px] text-[15px] text-black lg:px-[30px] md:px-[25px] px-[20px] border-4 border-yellow bg-yellow text-white rounded-[30px] border-opacity-100' onClick={() => window.open("https://www.clover.com/online-ordering/tos-ti-cafe--kitchen-hoboken", '_blank')} whileHover={{scale: 1.2}}>
              Order Now
            </motion.button>
          </motion.div>
            
            <div className="slide-container lg:w-[450px] md:w-[350px] w-[225px]">
              <Fade arrows={false} duration={1500}>
                {imgList.map((img, index) => (
                  <div className="each-fade" key={index}>
                    <div className="image-container">
                      <Image src={img} alt={index} width={600} height={405}/>
                      {/* <img src={img} /> */}
                    </div>
                    
                  </div>
                ))}
              </Fade>
            </div>
        
        </motion.div>
          


      </div>
        
      
      <div className='bg-lightPink lg:px-[80px] md:px-[55px] px-[30px] lg:py-[80px] md:py-[55px] py-[35px]'>
        <h1 className='lg:text-[50px] md:text-[40px] text-[30px] font-Raleway font-bold md:pb-[25px] pb-[15px] text-center'>Real Customer Reviews From Yelp</h1>
        <div className='flex md:flex-row flex-col items-center md:justify-evenly pt-[50px]'>
          <div className='md:text-left text-center'>
            <p className='font-Raleway lg:text-[30px] md:text-[25px] text-[20px] lg:w-[200px] md:w-[175px] w-[250px]'>“My main regret about Tosti is that I didn&apost make it here sooner.”</p>
            <p className='font-Raleway text-[20px] italic lg:text-[30px] md:text-[25px] text-[20px] md:pt-[0px] md:pb-[0px] pt-[20px] pb-[50px]'>- Michael B.</p>
          </div>

          <div className='md:text-left text-center'>
            <p className='font-Raleway lg:text-[30px] md:text-[25px] text-[20px] lg:w-[200px] md:w-[175px] w-[250px]'>“One of the best cafe in Hoboken.”</p>
            <p className='font-Raleway text-[20px] italic lg:text-[30px] md:text-[25px] text-[20px] md:pt-[0px] md:pb-[0px] pt-[20px] pb-[50px]'>- Dewan A.</p>
          </div>

          <div className='md:pb-[25px] pb-[15px] md:text-left text-center'>
            <p className='font-Raleway lg:text-[30px] md:text-[25px] text-[20px] lg:w-[200px] md:w-[175px] w-[250px]'>“Fast service, amazing food, great portion and good prices.”</p>
            <p className='font-Raleway text-[20px] italic lg:text-[30px] md:text-[25px] text-[20px]'>- Carola B.</p>
          </div>
        </div>
      </div>

      <div className='lg:px-[80px] md:px-[55px] px-[30px] py-[80px]'>
        <h1 className='lg:text-[50px] md:text-[40px] text-[30px] font-Raleway font-bold lg:pb-[100px] md:pb-[75px] pb-[50px] text-center'>Explore Our Offerings</h1>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 place-items-center'>
          <button className='text-yellow w-[180px] h-[90px] text-yellow text-center font-Raleway text-[25px] px-[30px] border-4 border-yellow hover:bg-yellow hover:text-white' onClick={() => window.open("/breakfast.pdf", '_blank')}>Breakfast</button>
          <button className='text-yellow w-[180px] h-[90px] text-yellow text-center font-Raleway text-[25px] px-[30px] border-4 border-yellow hover:bg-yellow hover:text-white' onClick={() => window.open("https://tosticafe.com/wp-content/uploads/2021/12/Brunch-January-2022.pdf", '_blank')}>Brunch</button>
          <button className='text-yellow w-[180px] h-[90px] text-yellow text-center font-Raleway text-[25px] px-[30px] border-4 border-yellow hover:bg-yellow hover:text-white' onClick={() => window.open("https://tosticafe.com/wp-content/uploads/2021/12/Lunch-January-2022.pdf", '_blank')}>Lunch</button>
          <button className='text-yellow w-[180px] h-[90px] text-yellow text-center font-Raleway text-[25px] px-[30px] border-4 border-yellow hover:bg-yellow hover:text-white' onClick={() => window.open("https://tosticafe.com/wp-content/uploads/2021/12/Dinner-January-2022.pdf", '_blank')}>Dinner</button>
          <button className='text-yellow w-[180px] h-[90px] text-yellow text-center font-Raleway text-[25px] px-[30px] border-4 border-yellow hover:bg-yellow hover:text-white' onClick={() => window.open("/drinks.pdf", '_blank')}>Drinks & Dessert</button>
        </div>
      </div>
    </div>
  )
}
