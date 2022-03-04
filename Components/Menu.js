import React from 'react'

function Menu() {
  return (
    <div className='absolute top-0 ml-[-50px] z-[100]'>
        <div className='bg-white h-[10px] mt-[37px]'/>
        <div className='bg-pink flex flex-col p-[20px]'>
            <button className='font-Raleway text-[20px] hover:text-lightPink hover:underline text-white pb-[30px]' onClick={() => window.open("/breakfast.pdf", '_blank')}>
                Breakfast
            </button>
            <button className='font-Raleway text-[20px] hover:text-lightPink hover:underline text-white pb-[30px]' onClick={() => window.open("https://tosticafe.com/wp-content/uploads/2021/12/Brunch-January-2022.pdf", '_blank')}>
                Brunch
            </button>
            <button className='font-Raleway text-[20px] hover:text-lightPink hover:underline text-white pb-[30px]' onClick={() => window.open("https://tosticafe.com/wp-content/uploads/2021/12/Lunch-January-2022.pdf", '_blank')}>
                Lunch
            </button>
            <button className='font-Raleway text-[20px] hover:text-lightPink hover:underline text-white pb-[30px]' onClick={() => window.open("https://tosticafe.com/wp-content/uploads/2021/12/Dinner-January-2022.pdf", '_blank')}>
                Dinner
            </button>
            <button className='font-Raleway text-[20px] hover:text-lightPink hover:underline text-white' onClick={() => window.open("/drinks.pdf", '_blank')}>
                Drinks & Dessert
            </button>       
        </div>
                
    </div>
  )
}

export default Menu