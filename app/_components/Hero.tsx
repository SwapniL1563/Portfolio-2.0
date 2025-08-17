import React from 'react'
import Button from '../_components/Button'
import Link from 'next/link'
import { Download } from 'lucide-react';
import Image from 'next/image';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const Hero = ({value}:any) => {
  return (
    <div className='py-24 md:py-32 relative  flex items-center justify-center'>
        < Image src='/grid-final.png' priority width={500} height={500} className='object-cover md:object-fill w-full h-screen absolute top-0 z-[-1] opacity-[0.06] ' alt='grid'></Image>

        {/* Hero-content */}
        <div className='text-white flex flex-col justify-center items-center gap-4 md:gap-5 text-center z-0 w-full '>
            <h2 className='primary md:text-lg'>Based in India</h2>
            <div className=' md:w-[60%] h-auto pb-4 md:pb-4 flex flex-col'>
              <TextGenerateEffect words="Building Creative &"  className="text-4xl md:text-8xl lg:text-[10rem] text-center primary" />
              <TextGenerateEffect words="Functional Web Solutions"  className="text-4xl md:text-8xl lg:text-[10rem]  text-center primary" />
            </div>
            {/* <h1 className='text-4xl md:text-6xl lg:text-[3.85rem] font-semibold w-3/4 md:w-1/2 text-center leading-snug md:leading-snug'>Building Creative & Functional <span className='primary'>Web Solution</span></h1> */}
            <p className='secondary md:text-lg w-[90%] md:w-1/4'>Hi, I'm Swapnil, I create  visually stunning 
            and highly functional web applications.</p>

            {/* Hero-button */}
            <div className='flex  md:flex-row  items-center gap-1 md:gap-2 mt-5 md:mt-4 '>
            <Link href='/projects'  ><Button value="See My Work"></Button></Link>
            <Link target='/' href="swapnil resume.pdf" download="resume"  className='flex justify-center gap-4 px-3 py-2 md:px-6 md:py-3 text-md rounded-md text-gray-300 hover:text-white'><h1>Resume</h1> <Download className="primary"/></Link>
            </div>
        </div>
    </div>
  )
}

export default Hero