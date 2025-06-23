import React from 'react'
import Button from './Button'
import Link from 'next/link'
import { ArrowLeftSquare, ArrowRight, ArrowRightSquare, MoveUpRight } from 'lucide-react'

const Projects = () => {
  return (
    <div className='  my-14 flex justify-center '>
        <div className=' md:w-3/4 w-10/12'>
         
         {/* Project's-Title */}
        <div className="flex justify-between items-center mb-3">
        <h1 className='text-xl md:text-3xl font-semibold text-white'>
            Projects Build</h1>
        <Link target='/' href='https://github.com/SwapniL1563'> <Button value='All projects >'></Button>
        </Link>
        </div>
        
        {/* Projects-grid */}
        <div className='grid grid-cols-1  md:grid-cols-2 gap-2'>

         <div className='px-4 pt-5 pb-7 md:px-7 mb:pt-7 md:pb-8 glass rounded-2xl  overflow-hidden relative '>
              <div className='w-full relative mx-auto h-auto overflow-hidden rounded-2xl'>
              <img src="/m0.png"  className='z-0 relative w-full rounded-2xl transition-all duration-300 hover:scale-110' alt="" /> 
              </div>
             
              <div className='pt-6 '>
               <h1 className='text-white text-md md:text-xl font-semibold'>Med Nutri</h1>
               <div className='grid grid-cols-3  md:w-2/3 gap-1 md:gap-2 text-center  mt-3 mb-2 md:mb-2 text-xs '>
                <Button value='MERN stack' ></Button>
                <Button value='Tailwind CSS'></Button>
                <Button value='Gemini'></Button>
                <Button value='Jwt'></Button>
                <Button value='Nodemailer'></Button>
                <Button value='RechartJS'></Button>
                <Button value='Postman'></Button>
               </div>

               <div className=' flex justify-end rounded-lg '>
               <Link target='/' href='https://forever-frontend-73ey.onrender.com/'>
                <button title='bt1' className='px-7 py-3 md:px-10 md:py-4 primary-bg rounded-xl hover:bg-[#2174fb] '> <MoveUpRight size={30}/></button>
               </Link>
               </div>
              </div>
         </div>

          <div className='px-4 pt-5 pb-7 md:px-7 mb:pt-7 md:pb-8 glass rounded-2xl  overflow-hidden relative '>
              <div className='w-full relative mx-auto h-auto overflow-hidden rounded-2xl'>
              <img src="/m1.jpg"  className='z-0 relative w-full rounded-2xl transition-all duration-300 hover:scale-110' alt="" /> 
              </div>
             
              <div className='pt-6 '>
               <h1 className='text-white text-md md:text-xl font-semibold'>FOREVER ECOMMERCE</h1>
               <div className='grid grid-cols-3  md:w-2/3 gap-1 md:gap-2 text-center  mt-3 mb-2 md:mb-2 text-xs '>
                <Button value='ReactJS' ></Button>
                <Button value='NodeJS'></Button>
                <Button value='Express'></Button>
                <Button value='MongoDB'></Button>
                <Button value='Tailwind'></Button>
               </div>

               <div className=' flex justify-end rounded-lg '>
               <Link target='/' href='https://forever-frontend-73ey.onrender.com/'>
                <button title='bt1' className='px-7 py-3 md:px-10 md:py-4 primary-bg rounded-xl hover:bg-[#2174fb] '> <MoveUpRight size={30}/></button>
               </Link>
               </div>
              </div>
         </div>

         <div className='px-4 pt-5 pb-7 md:px-7 mb:pt-7 md:pb-8 glass rounded-2xl  overflow-hidden relative '>
              <div className='w-full relative mx-auto h-auto overflow-hidden rounded-2xl'>
              <img src="/m3.jpg"  className='z-0 relative w-full rounded-2xl transition-all duration-300 hover:scale-110' alt="" /> 
              </div>
             
              <div className='pt-6 '>
               <h1 className='text-white text-md md:text-xl font-semibold'>AI CONTENT GENERATION</h1>
               <div className='grid grid-cols-3  md:w-2/3 gap-1 md:gap-2 text-center  mt-3 mb-2 md:mb-2 text-xs '>
                <Button value='NextJS' ></Button>
                <Button value='PostgreSQL'></Button>
                <Button value='Clerk'></Button>
                <Button value='Gemini'></Button>
               </div>

               <div className=' flex justify-end rounded-lg '>
               <Link target='/' href='https://ai-content-generation-swapnil.vercel.app/'>
                <button title='bt1' className='px-7 py-3 md:px-10 md:py-4 primary-bg rounded-xl hover:bg-[#2174fb] '> <MoveUpRight size={30}/></button>
               </Link>
               </div>
              </div>
         </div>

         <div className='px-4 pt-5 pb-7 md:px-7 mb:pt-7 md:pb-8 glass rounded-2xl  overflow-hidden relative '>
              <div className='w-full relative mx-auto h-auto overflow-hidden rounded-2xl'>
              <img src="/m4.jpg"  className='z-0 relative w-full rounded-2xl transition-all duration-300 hover:scale-110' alt="" /> 
              </div>
             
              <div className='pt-6 '>
               <h1 className='text-white text-md md:text-xl font-semibold'>VIRTUAL REALITY</h1>
               <div className='grid grid-cols-3  md:w-2/3 gap-1 md:gap-2 text-center  mt-3 mb-2 md:mb-2 text-xs '>
                <Button value='ReactJS' ></Button>
                <Button value='Tailwind'></Button>
                <Button value='Framer'></Button>
                <Button value='Javascript'></Button>
               </div>

               <div className=' flex justify-end rounded-lg '>
               <Link target='/' href='https://swapnil1563.github.io/Virtual-Reality/'>
                <button title='bt1' className='px-7 py-3 md:px-10 md:py-4 primary-bg rounded-xl hover:bg-[#2174fb] '> <MoveUpRight size={30}/></button>
               </Link>
               </div>
              </div>
         </div>

         </div>
        </div>
    </div>
  )
}

export default Projects