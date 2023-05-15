import { aws, baseUrl, globewyze, mongoDB, mySql, nest, next, onescreen, tailwind } from '@/utilities/images'
import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

const ExperienceCard = (props: Props) => {
    
  return (
    <article className='flex flex-col rounded-lg items-center space-y-1 flex-shrink-0
    w-[300px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-5 md:p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden mt-10'>
        <motion.img
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{duration: 1.2}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true}}
            className='w-28 h-28 rounded-full xl:w-36 xl:h-36 object-cover object-start'
            src={`${baseUrl}${globewyze}`}
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-2xl md:text-4xl font-light'>Full Stack Developer</h4>
            <p className='font-bold text-2l mt-1'>Globewyze Inc</p>
            <div className='flex space-x-2 my-1'>
                <img className='h-7 w-7 rounded-full' src={`${baseUrl}${next}`} />
                <img className='h-7 w-7 rounded-full' src={`${baseUrl}${aws}`} />
                <img className='h-7 w-7 rounded-full' src={`${baseUrl}${nest}`} />
                <img className='h-7 w-7 rounded-full' src={`${baseUrl}${mongoDB}`} />
                <img className='h-7 w-7 rounded-full' src={`${baseUrl}${mySql}`} />
                <img className='h-7 w-7 rounded-full' src={`${baseUrl}${tailwind}`} />

            </div>
            <p className='uppercase py-3 text-gray-300'>Started Work... - Ended...</p>

            <ul className='list-disc space-y-2 ml-5 text-base md:text-lg'>
                <li>Summary points Summary points </li>
                <li>Summary points Summary points </li>
                <li>Summary points Summary points </li>
                <li>Summary points Summary points </li>
                <li>Summary points Summary points </li>
            </ul>
            
        </div>
    </article>
  )
}

export default ExperienceCard