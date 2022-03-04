import React, { useState, useRef, useEffect } from 'react'

function DropDown({children, label}) {
    const [size, setSize] = useState('300px');
    const [isOpen, setIsOpen] = useState(false);
    const content = useRef();


    useEffect(() => {
        if (!content.current) return;
        if(!content.current.offsetHeight) return;

        const resize = () => {
            setSize(`${content.current.offsetHeight}px`)
        }
        
        window.addEventListener('resize', resize);
        resize();

        return (() => {
            window.removeEventListener('resize', resize);
        })

    }, [content])

    return (
        <div className='flex flex-col lg:px-[100px] md:px-[60px] px-[30px]'>
            <div onClick={() => setIsOpen(!isOpen)} className='relative font-Raleway md:text-[45px] sm:text-[35px] text-[25px]  flex items-center justify-center text-white hover:text-lightGreen hover:underline cursor-pointer'>
                <h3 className='pr-[20px]'>Menu</h3>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/></svg>
            </div>
            <div className='slide px-[30px]' style={{height: isOpen ? size : '0px'}}>
                <div ref={content}>
                    {children}
                </div> 
            </div>
        </div>
    )
}

export default DropDown
