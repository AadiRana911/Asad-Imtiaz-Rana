import React from 'react'
import {motion} from 'framer-motion'
import { baseUrl, tailwind } from '@/utilities/images'
type Props = {
    directionLeft: boolean
}

const Skill = ({directionLeft}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            initial={{x: directionLeft ? -100 : 100, opacity: 0}}
            transition={{duration: 1}}
            whileInView={{x: 0, opacity: 1}}
            viewport={{once: true}}
            src={`${baseUrl}${tailwind}`}
            className='h-16 w-16 rounded-full object-cover border border-gray-500 xl:w-20 xl:h-20
            filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
        group-hover:bg-white h-16 w-16 xl:w-20 xl:h-20 rounded-full z-0'>
            <div className='flex items-center justify-center h-full '>
                <p className='text-3xl font-bold text-black opacity-100 '>100%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill