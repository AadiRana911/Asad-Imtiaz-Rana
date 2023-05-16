import React from 'react'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './HeroComponents/BackgroundCircles'
import Link from 'next/link'
import { asad, baseUrl } from '@/utilities/images'
type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: ['Hi, The Name\'s Asad Imtiaz Rana', 'Problem Solver', '<MobileAppDeveloper />', '<webdeveloper />', '#UI/UX Designer'],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img
        className='relative rounded-full h-32 w-32 object-cover'
        src={`${baseUrl}${asad}`}
        alt='Asad Image' width={100} height={100} />
        <div className='z-20'>
            <div>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]'>Software Engineer</h2>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A' />
                </h1>
            </div>
            <div className='pt-5'>
                <Link href="#about">
                <button className="hero-buttons">About</button>
                </Link>
                <Link href="#experience">
                <button className="hero-buttons">Experience</button>
                </Link>
                <Link href="#skills">
                <button className="hero-buttons">Skills</button>
                </Link>
                <Link href="#projects">
                <button className="hero-buttons">Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero