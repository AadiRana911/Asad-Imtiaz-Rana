// import { Inter } from 'next/font/google'
import Head from 'next/head';
import About from '@/components/About';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
// const inter = Inter({ subsets: ['latin'] })

const  Home = () : JSX.Element => {
  return (
    <div className='bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    sm:scrollbar md:scrollbar lg:scrollbar xl:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin scroll-smooth'>
      <Head>
        <title className='text-blue-800'>Asad Imtiaz Rana</title>
      </Head>

      {/* Header  Section -- Done */}
      <Header />

      {/* Hero Section */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About Section */}

      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experience Section */}

      <section id='experience' className='snap-center'>
        <Experience />
      </section>

      {/* Skills  Section */}

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* Projects Section */}

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact Section */}
      
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

    </div>
  )
}

export default Home;