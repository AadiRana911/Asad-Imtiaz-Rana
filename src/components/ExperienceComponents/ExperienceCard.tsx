import React from 'react';
import { motion } from 'framer-motion';

type ExperienceCardProps = {
  companyLogo: string;
  jobTitle: string;
  companyName: string;
  technologies: string[];
  startDate: string;
  endDate: string;
  summaryPoints: string[];
};

const ExperienceCard = (props: ExperienceCardProps) => {
  const {
    companyLogo,
    jobTitle,
    companyName,
    technologies,
    startDate,
    endDate,
    summaryPoints,
  } = props;

  return (
    <article className='flex flex-col rounded-lg items-center space-y-1 flex-shrink-0
    w-[300px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-5 md:p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden mt-10'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className='w-28 h-28 rounded-full xl:w-36 xl:h-36 object-cover object-start'
        src={companyLogo} // Use the companyLogo prop for the image source
        alt={`${companyName} Logo`} // Provide an alt text for the logo
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-2xl md:text-4xl font-light'>{jobTitle}</h4>
        <p className='font-bold text-2l mt-1'>{companyName}</p>
        <div className='flex space-x-2 my-1'>
          {/* Use the technologies prop to map through the technologies array */}
          {technologies.map((tech, index) => (
            <img
              key={index}
              className='h-7 w-7 rounded-full'
              src={`${baseUrl}${tech}`} // Assuming baseUrl holds the path to your technology images
              alt={tech} // Provide alt text for each technology image
            />
          ))}
        </div>
        <p className='uppercase py-3 text-gray-300'>{`${startDate} - ${endDate}`}</p>

        <ul className='list-disc space-y-2 ml-5 text-base md:text-lg'>
          {/* Use the summaryPoints prop to map through the summary points */}
          {summaryPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
