import React from 'react';
import ExperienceCard from './ExperienceComponents/ExperienceCard';
import { aws, baseUrl, globewyze, mongoDB, mySql, nest, next, onescreen, tailwind } from '@/utilities/images';

type Props = {};

const Experience = (props: Props) => {
  const experiences = [
    {
      companyLogo: `${baseUrl}${globewyze}`,
      jobTitle: 'Full Stack Developer',
      companyName: 'Globewyze Inc',
      technologies: [next, aws, nest, mongoDB, mySql, tailwind], // Provide the correct image paths for each technology
      startDate: 'August 2020',
      endDate: 'Present',
      summaryPoints: [
        'Developed and maintained full-stack applications for internal and external use.',
        'Collaborated with cross-functional teams to deliver high-quality software solutions.',
        'Implemented RESTful APIs and integrated with various third-party services.',
      ],
    },
    {
      companyLogo: `${baseUrl}${onescreen}`,
      jobTitle: 'Frontend Developer',
      companyName: 'OneScreen Solutions',
      technologies: [react, redux, typescript, html, css], // Provide the correct image paths for each technology
      startDate: 'June 2019',
      endDate: 'July 2020',
      summaryPoints: [
        'Designed and implemented user interfaces for web applications.',
        'Worked closely with UX designers to ensure a seamless user experience.',
        'Optimized website performance and accessibility.',
      ],
    },
    // Add experiences for Swipefox and any other companies in a similar format
  ];

  return (
    <div className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>
      <div
        className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'
      >
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
