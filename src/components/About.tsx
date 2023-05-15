import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { baseUrl, asad } from '@/utilities/images'
type Props = {}

const About = (props: Props) => {
    const intro = `Hi, I'm Asad Imtiaz Rana and I'm a software developer with over three years of experience. 
    I've had the opportunity to work on various projects throughout my career, including ChallengeIt, Touristo, Swipefox, and Skillgigs. 
    For the past year, I've been working as a Full-Stack developer, specializing in AWS technologies like Cognito, Elastic Beanstalk, CodeBuild, CodePipeline, CloudWatch, Lambda, Serverless, and DynamoDB. 
    I'm also proficient in several programming languages and their frameworks such as Python (Flask, OpenCV, CNN, GAN), NodeJS (ExpressJS, NestJS), ReactJS, NEXTJS, React Native, and Flutter, as well as databases such as MySQL and MongoDB. 
    My passion for development and ability to adapt to different projects make me a valuable asset to any team.`


  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[24px] text-gray-500 text-2xl'>About</h3>
        <motion.img 
            // className=''
            initial={{
                x: -100
            }}
            whileInView={{
                x: 0  
            }}
            transition={{
                duration: 1.5,
            }}
            viewport={{once: true}}
            src={`${baseUrl}${asad}`}
            alt='Asad Image'
            className='-mb-32 md:mb-0 flex-shrink-0 object-cover rounded-full w-24 h-24 sm:w-32 sm:h-32
            md:rounded-lg md:w-64 md:h-95 xl:w-[450px] xl:h-[550px]'

        />
        <div className='space-y-3 px-0 sm:px-10'>
            <h4 className='text-xl sm:text-2xl md:text-4xl font-semibold'>
                Here is a {" "}
                <span className='underline decoration-[#F7AB0A]/50'>little</span>
                {" "}background
            </h4>
            <p className='text-xs sm:text-base'>{intro}</p>
        </div>
    </motion.div>
  )
}

export default About