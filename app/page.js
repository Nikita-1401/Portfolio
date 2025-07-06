"use client";

import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Contact from '@/components/contact';
import Navbar from '@/components/Navbar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Home() {
  const controls = useAnimation();
  const sliderRef = useRef(null);
  const [xPos, setXPos] = useState(0);

  
  const skills = [
    {
      icon: "./icons/html.svg",
      alt: "HTML",
      skills: "HTML",
      text: "The art of organizing chaos on the internet. 🎨",
    },
    {
      icon: "./icons/css.svg",
      alt: "CSS",
      skills:"CSS",
      text: "The secret behind every beautiful website.",
    },
    {
      icon: "./icons/js.svg",
      alt: "JavaScript",
      skills:"JavaScript",
      text: "The brain behind every interactive website.",
    },
    {
      icon: "./icons/react.svg",
      alt: "React",
      skills:"React",
      text: "Powering modern, dynamic UIs with reusable components.",
    },
    {
      icon: "./icons/tailwind.svg",
      alt: "Tailwind CSS",
      skills:"Tailwind CSS",
      text: "Crafting clean and responsive designs with utility classes.",
    },
    {
      icon: "./icons/next.svg",
      alt: "Next.js",
      skills:"Next Js",
      text: "Fast, scalable, and SEO-friendly apps.",
    },
    {
      icon: "./icons/Nodejs.png",
      alt: "Node.js",
      skills:"Node Js",
      text: "JavaScript runtime for building fast backend services.",
    },
    {
      icon: "./icons/python.svg",
      alt: "Python",
      skills:"Python",
      text: "Versatile and beginner-friendly for AI, web, and more.",
    },
    {
      icon: "./icons/mongo.svg",
      alt: "MongoDB",
      skills:"MongoDB",
      text: "NoSQL database for flexible and scalable data storage.",
    },
    {
      icon: "./icons/express.png",
      alt: "Express.js",
      skills:"Express Js",
      text: "Minimal and powerful backend framework for Node.js.",
    },


  ];

   const projects = [
    {
      id: 1,
      title: "Spotify clone",
      description: "This project is a clone of Spotify. It is a working model with features",
      image: "/images/spotify.png",
      githubLink: "https://github.com/Nikita-1401/Spotify",
      demoLink: "#" // Add your demo link if available
    },
    {
      id: 2,
      title: "Password Manager",
      description: "An application which will manage all your password securely and properly in the database",
      image: "/images/passop.jpeg",
      githubLink: "https://github.com/Nikita-1401/passOpMongo",
      demoLink: "#"
    },

    {
      id: 3,
      title: "Bit links",
      description: "Bit links is a url shorten tool which helps you to shorten your links",
      image: "/images/bitlink.jpg",
      githubLink: "https://github.com/Nikita-1401/bitlink",
      demoLink: "#"
    },

    {
      id: 4,
      title: "Brainwave",
      description: "A react based website with some cool designs",
      image: "/images/brainwave.jpeg",
      githubLink: "https://github.com/Nikita-1401/WebsitePro",
      demoLink: "#"
    },
    {
      id: 5,
      title: "Todolist",
      description: "A modern todo list application with drag-and-drop functionality.",
      image: "/images/Todolist.avif",
      githubLink: "https://github.com/Nikita-1401/TodoList",
      demoLink: "#"
    },
    {
      id: 6,
      title: "Bit Tree",
      description: "An application which manages all your links.",
      image: "/images/bittree.jpg",
      githubLink: "https://github.com/Nikita-1401/bit-tree",
      demoLink: "#"
    }

  ];

  const handlePause = () => {
    controls.stop();
    if (sliderRef.current) {
      const matrix = new DOMMatrixReadOnly(
        getComputedStyle(sliderRef.current).transform
      );
      setXPos(matrix.m41);
    }
  };

  const handleResume = () => {
    const width = sliderRef.current.offsetWidth / 2;
    controls.set({ x: xPos });
    controls.start({
      x: [xPos, xPos - width],
      transition: {
        repeat: Infinity,
        duration: 25,
        ease: "linear",
      },
    });
  };

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 25,
        ease: "linear",
      },
    });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        }
      }
    ]
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
       
      <section className="relative min-h-screen bg-black text-white ">
        {/* Red Side Wave Background */}

        <svg
          className="absolute top-0 left-0 w-full h-screen z-0"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <path
            fill="#e91e63"
            d="
        M1440,0 
        C1200,100 1100,300 1000,400 
        C800,600 600,700 0,800 
        L1440,800 
        Z"
          />
        </svg>

        {/* Hero Content */}

        <div id='home' className="flex flex-col lg:flex-row items-center justify-between px-10  relative z-10 ">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-5xl font-bold">I'm Nikita</h1>
            <h2 className="text-4xl sm:text-4xl font-extrabold text-white mt-2">
              A Full Stack developer
            </h2>
            <p className="mt-4 text-gray-300">
              I build modern, fullstack web experiences — from clean UI to robust backend.
              Crafting fast, responsive, and scalable apps with a touch of creativity and a lot of code.
            </p>
            <a
              href="/images/Nikita resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full font-semibold"
            >
              Resume
            </a>


          </div>

         {/* Image Section */}
        <motion.div
  className="md:w-1/2 relative mt-20"  
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.3 }}
>
  <div className="relative w-[75%] mx-auto">
    <div className="w-full h-full relative rounded-full overflow-hidden shadow-lg border-4 border-pink-500/20 hover:border-pink-500/40 transition duration-500 group">
      <Image
        src="/images/Nikitaji.jpg"
        alt="Developer Portrait"
        width={600}
        height={600}
        priority
        className="object-cover group-hover:scale-105 transition duration-500"
      />
      <div className="absolute inset-0 bg-pink-600/10 group-hover:bg-transparent transition duration-500"></div>
    </div>
  </div>
</motion.div>

        </div>
      </section>


      {/* About Section */}
     <motion.div
  id="about"
  className="relative min-h-[90vh] bg-black text-white overflow-hidden py-8"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8 }}
>
  <div className="flex flex-col lg:flex-row items-center justify-center w-full min-h-[90vh] px-4 sm:px-6 py-8 gap-6 sm:gap-8"> {/* min-h kam kiya */}
    <motion.div
      className="w-full lg:w-1/2 border-2 border-pink-600 rounded-2xl p-6 sm:p-8 shadow-2xl mx-4"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sora text-white">About Me</h2>
      <p className="text-sm sm:text-base mt-4 text-white font-grotesk font-medium leading-relaxed">
        I'm <span className="text-pink-600 font-bold">Nikita</span>, a
        <span className="text-pink-600 font-bold"> Full Stack Developer</span> passionate about crafting
        dynamic and user-friendly web applications.
      </p>
      <p className="text-sm sm:text-base mt-2 text-white font-grotesk font-semibold leading-relaxed">
        Skilled in <span className="text-pink-600 font-bold">React.js</span>,
        <span className="text-pink-600 font-bold"> Tailwind CSS</span>,
        <span className="text-pink-600 font-bold"> MongoDB</span>, and
        <span className="text-pink-600 font-bold"> Next.js</span>.
      </p>
      <p className="text-sm sm:text-base mt-2 text-white font-grotesk font-medium leading-relaxed">
        Beyond coding, I enjoy problem-solving and optimizing apps for performance.
      </p>
    </motion.div>

    <motion.div
      className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-r from-pink-600 via-red-500 to-orange-400 hover:scale-105 mx-4 mt-4 lg:mt-0" // mt-8 to mt-4 (thoda upar)
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <img
        src="/about.jpg"
        alt="Nikita - Full Stack Developer"
        className="w-full h-full object-cover rounded-xl p-1"
        loading="lazy"
      />
    </motion.div>
  </div>
</motion.div>


      {/* Skills Section */}
      <motion.div
        id="skills"
        className="w-full min-h-screen bg-black text-white flex items-center justify-center px-4 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="bg-black rounded-2xl shadow-2xl px-4 sm:px-6 md:px-10 py-12 sm:py-20 max-w-6xl w-full min-h-[500px] sm:min-h-[600px] flex flex-col"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12">
            My Skills
          </h2>

          <div
            className="relative overflow-hidden w-full"
            onMouseEnter={handlePause}
            onMouseLeave={handleResume}
          >
            <motion.div
              className="flex gap-4 sm:gap-6 w-max"
              ref={sliderRef}
              animate={controls}
              initial={{ x: 0 }}
            >
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="w-[250px] sm:w-[300px] h-[200px] sm:h-[220px] md:h-[260px] flex-shrink-0 bg-black bg-opacity-80 border border-pink-500 shadow-md rounded-2xl p-4 sm:p-6 md:p-8 text-center transition-all duration-300 hover:bg-pink-600"
                >
                  <img
                    src={skill.icon}
                    alt={skill.alt}
                    className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4"
                  />
                  <p className='font-extrabold text-lg sm:text-xl'>
                    {skill.skills}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed">
                    {skill.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Projects Section */}
      <div
  id="project"
  className="w-full min-h-screen pt-24 pb-16 bg-black text-white relative overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sora text-center mb-3 mt-2 text-white">
      My Projects
    </h2>
    <p className="text-pink-400 font-extrabold font-sora mb-8 max-w-2xl mx-auto text-center text-sm sm:text-base px-4">
      This is where ideas come to life, transforming concepts into beautifully crafted digital experiences.
    </p>

    <div className="mt-6 md:mt-10">
      <Slider {...sliderSettings} className="px-2 sm:px-4 mt-6">
        {projects.map((project) => (
          <div key={project.id} className="px-2 sm:px-4 h-[420px] sm:h-[480px] mt-6">
            <div className="transition-transform duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-pink-600 via-red-500 to-orange-400 p-[2px] rounded-2xl">
                <div className="bg-black rounded-2xl h-[350px] sm:h-[390px] w-full shadow-lg flex flex-col">
                  <div className="h-40 sm:h-48 relative overflow-hidden rounded-t-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4 sm:p-5 flex-grow flex flex-col">
                    <h3 className="font-bold text-lg sm:text-xl text-white font-sora mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white font-grotesk mb-3 flex-grow text-xs sm:text-sm line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex gap-2 sm:gap-3">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-white text-pink-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-xs sm:text-sm"
                      >
                        <FiGithub size={14} /> Code
                      </a>
                      {project.demoLink !== "#" && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors text-xs sm:text-sm"
                        >
                          <FiExternalLink size={14} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
</div>


      {/* Contact Section */}
      <motion.div
        id='contact'
        className="w-full min-h-screen bg-black py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Contact />
      </motion.div>
    </>
  );
}