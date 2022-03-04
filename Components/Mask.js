import React from 'react'
import Image from 'next/image'

function Mask({img}) {
  return (
    <div>
        <div className={`bg-clip-content`+img}>
            <div className='rounded-[30px] w-[129px] h-[360px]'/>
            <div className='rounded-[30px] w-[129px] h-[415px]'/>
            <div className='rounded-[30px] w-[129px] h-[367px]'/>
            <div className='rounded-[30px] w-[129px] h-[438px]'/>
            <div className='rounded-[30px] w-[129px] h-[360px]'/>
        </div>

        
    </div>
  )
}

export default Mask