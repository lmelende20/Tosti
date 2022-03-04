import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Menu from './Menu'
import DropDown from './Dropdown'

function Navbar() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(true);
    const [showMenu, setShowMenu] = useState(false);

    function onClick2(page){
        setIsOpen(!isOpen)
        setTimeout(() => router.push(page), 100);
    }
  return (
    <div className='lg:px-[80px] md:px-[55px] px-[30px] py-[30px] w-[100%] items-center flex justify-between'>
        <Image src='/blackLogo.svg' alt='Black Tosti logo' width={100} height={100} onClick={() => router.push("/")} className="cursor-pointer"/>
        <div className='flex justify-between w-[100%] hidden lg:flex'>
            <div className='flex pl-[50px]'>
                <button className={`font-Raleway text-[25px] text-black pr-[50px] hover:text-pink hover:underline ${router.pathname == '/' ? 'font-bold' : 'font-regular'}`} onClick={() => router.push("/")}>Home</button>
                <button className={`font-Raleway text-[25px] text-black pr-[50px] hover:text-pink hover:underline ${router.pathname == '/about' ? 'font-bold' : 'font-regular'}`} onClick={() => router.push("/about")}>About Us</button>
                <button className={`font-Raleway text-[25px] text-black pr-[50px] hover:text-pink hover:underline ${router.pathname == '/contact' ? 'font-bold' : 'font-regular'}`} onClick={() => router.push("/contact")}>Contact Us</button>
            </div>
            <div className='flex'>
                <div onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)} className={`font-Raleway text-[25px] text-black flex pr-[50px] items-center hover:text-pink hover:underline cursor-default relative`}>
                    <h3 className='pr-[20px]'>Menu</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/></svg>
                    
                    {showMenu ? <Menu /> : <></>}
                </div>
                <button className='font-Raleway text-[25px] px-[30px] border-4 border-pink rounded-[30px] text-pink hover:bg-pink hover:text-white' onClick={() => window.open("https://www.clover.com/online-ordering/tos-ti-cafe--kitchen-hoboken", '_blank')}>Order Now</button>
            </div>
            
        </div>
        <div className='flex lg:hidden'> 
            <button onClick={() => setIsOpen(!isOpen)}>
                <Image src="/menu.svg" alt="menu" width={30} height={30}/>
            </button>
                
            <div className={`flex flex-col md:pt-[300px] pt-[27vh] h-screen w-screen bg-green fixed top-0 left-0 z-[100] transition-transform overflow-x-hidden duration-500 ${isOpen ? "translate-x-full" : ""}`}>
                <div className='flex justify-between items-center'>
                    <div className='absolute top-0 right-left sm:m-[70px] m-5'>
                        <button onClick={() => onClick2("/")}>
                            <Image src='/whiteLogo.svg' alt='Black Tosti logo' width={100} height={100} onClick={() => router.push("/")} className="cursor-pointer"/>
                        </button>
                    </div>
                    <div className='absolute top-0 right-0 sm:m-[105px] m-16 text-2xl'>
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <Image src="/closeMenu.svg" alt="close menu" width={30} height={30}/>
                        </button>
                    </div>                
                </div>
                
                <button className={`font-Raleway md:text-[45px] sm:text-[35px] text-[25px]  hover:text-lightGreen hover:underline text-white ${router.pathname == '/' ? 'font-bold' : 'font-regular'}`} onClick={() => onClick2("/")}>Home</button>
                <button className={`font-Raleway md:text-[45px] sm:text-[35px] text-[25px]  hover:text-lightGreen hover:underline text-white ${router.pathname == '/about' ? 'font-bold' : 'font-regular'}`} onClick={() => onClick2("/about")}>About Us</button>
                <button className={`font-Raleway md:text-[45px] sm:text-[35px] text-[25px]  hover:text-lightGreen hover:underline text-white ${router.pathname == '/contact' ? 'font-bold' : 'font-regular'}`} onClick={() => onClick2("/contact")}>Contact Us</button>
                <div>
                    <DropDown>
                        <div className='bg-green flex flex-col'>
                            <button className='font-Raleway lg:text-[35px] md:text-[25px] text-[15px] hover:text-[#434D4A] hover:underline text-white pb-[20px]' onClick={() => window.open("/breakfast.pdf", '_blank')}>
                                Breakfast
                            </button>
                            <button className='font-Raleway lg:text-[35px] md:text-[25px] text-[15px] hover:text-[#434D4A] hover:underline text-white pb-[20px]' onClick={() => window.open("https://tosticafe.com/wp-content/uploads/2021/12/Brunch-January-2022.pdf", '_blank')}>
                                Brunch
                            </button>
                            <button className='font-Raleway lg:text-[35px] md:text-[25px] text-[15px] hover:text-[#434D4A] hover:underline text-white pb-[20px]' onClick={() => window.open("https://tosticafe.com/wp-content/uploads/2021/12/Lunch-January-2022.pdf", '_blank')}>
                                Lunch
                            </button>
                            <button className='font-Raleway lg:text-[35px] md:text-[25px] text-[15px] hover:text-[#434D4A] hover:underline text-white pb-[20px]' onClick={() => window.open("https://tosticafe.com/wp-content/uploads/2021/12/Dinner-January-2022.pdf", '_blank')}>
                                Dinner
                            </button>
                            <button className='font-Raleway lg:text-[35px] md:text-[25px] text-[15px] hover:text-[#434D4A] hover:underline text-white' onClick={() => window.open("/drinks.pdf", '_blank')}>
                                Drinks & Dessert
                            </button>       
                        </div>
                    </DropDown>
                    {showMenu ? <Menu /> : <></>}
                </div>
                {/*}
                <div onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)} className='relative font-Raleway text-[25px]  flex items-center justify-center text-white hover:text-lightGreen hover:underline cursor-pointer'>
                    <h3 className='pr-[20px]'>Menu</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/></svg>
                    {showMenu ? <Menu /> : <></>}
  </div>*/}
                <button className='mx-auto font-Raleway md:text-[45px] sm:text-[35px] text-[25px] mt-[40px] px-[30px] border-4 border-white rounded-[50px] text-white hover:bg-lightGreen hover:border-lightGreen hover:text-green' onClick={() => window.open("https://www.clover.com/online-ordering/tos-ti-cafe--kitchen-hoboken", '_blank')}>Order Now</button>
            </div> 
        
        </div>
        
    </div>
  )
}

export default Navbar