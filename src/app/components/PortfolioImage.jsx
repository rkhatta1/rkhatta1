import React from 'react'
import Image from 'next/image'

const PortfolioImage = () => {
  return (
    <div className='flex flex-col w-full'>
        <div className='items-start w-full mx-auto'>
            <Image
            src='/Me-Portfolio.png'
            alt='Portfolio Image'
            width={600}
            height={600}
            className='h-[5rem] w-[5rem]'
            />
        </div>
    </div>
  )
}

export default PortfolioImage