import React from 'react'
import Button from '../_components/Button'
import Link from 'next/link'
import { Download } from 'lucide-react';
import Image from 'next/image';

const Hero = ({value}:any) => {
  return (
    <div className='py-24 md:py-32 relative  '>
        < Image src='/grid-final.png' priority width={500} height={500} className='object-cover md:object-fill w-full h-screen absolute top-0 z-[-1] opacity-[0.06] ' alt='grid'></Image>

        {/* Hero-content */}
        <div className='text-white flex flex-col justify-center items-center gap-4 md:gap-5 text-center z-0'>
            <h2 className='primary md:text-lg'>Based in India</h2>
            <h1 className='text-4xl md:text-6xl lg:text-[3.85rem] font-semibold w-3/4 md:w-1/2 text-center leading-snug md:leading-snug'>Building Creative & Functional <span className='primary'>Web Solution</span></h1>
            <p className='secondary  md:text-lg w-2/3 md:w-1/4'>Hi, I'm Swapnil, I create  visually stunning 
            and highly functional web applications.</p>

            {/* Hero-button */}
            <div className='flex  md:flex-row  items-center gap-1 md:gap-2 mt-4 '>
            <Link href='/projects'  ><Button value="See My Work"></Button></Link>
            <Link target='/' href="resume swapnil.pdf" download="resume"  className='flex justify-center gap-4 px-3 py-2 md:px-6 md:py-3 text-md rounded-md text-gray-300 hover:text-white'><h1>Resume</h1> <Download className="primary"/></Link>
            </div>
        </div>
    </div>
  )
}

export default Hero