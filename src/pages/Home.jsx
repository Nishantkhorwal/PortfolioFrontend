
import Loader from '../components/Loader'
import React, { useEffect, useState,useRef } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { FaCircle } from 'react-icons/fa';
import CountUp from 'react-countup';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import FollowCursor from '../components/FollowCursor';
import '../App.css'
import { LuArrowRight } from "react-icons/lu";
const menuVariants = {
  hidden: {
    width: 0,
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  },
  visible: {
    width: '450px', // Adjust as needed
    height: '600px', // Adjust as needed
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.2
    }
  }
};

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const buttonFill = useMotionValue(0);
  const buttonColor = useTransform(buttonFill, [0, 1], ['#00bcd4', '#000000']);
  const textColor = useTransform(buttonFill, [0, 1], ['#000000', '#ffffff']);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }
  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const headings = [
    "01 Full Stack Developer Intern",
    "02 Freelance(Full Stack Developer)",
    "03  Freelance(Full Stack Developer)"
  ];

  const contents = [
    {
      title: "WEB DEVELOPMENT INTERN, Binary Bug IT Solutions Pvt Ltd., Indore",
      points: [
        "Worked on frontend using ReactJs.",
        "Worked on Backend using Django",
        "Worked on Designing using Tailwind CSS."
      ]
    },
    {
      title: "Freelance Full Stack Developer(Created a website for a school)",
      points: [
        "Worked on frontend using React.js.",
        "Implemented UI/UX designs.",
        "Implemented API integration for the school forms.",
        "Used MongoDb Atlas for the database management."
      ]
    },
    {
      title: "Freelance Full Stack Developer(Created a service website for a company)",
      points: [
        "Worked on frontend using React.js.",
        "Developed RESTful APIs using Node.js.",
        "Managed database with MongoDB.",
        "Ensured application security and data protection.",
        "Used Expressjs for the backend server"

      ]
    }
  ];
  const skills = [
    'JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'Express', 'MongoDB',
    'Tailwind CSS', 'Bootstrap', 'Git', 'GitHub', 'Webpack', 'Babel',
    'TypeScript', 'Redux', 'Next.js', 'SASS', 'GraphQL', 'Firebase',
    'Jest', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Heroku', 'Netlify'
  ];

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      buttonFill.set(1);
    } else {
      buttonFill.set(0);
    }
  }, [isMenuOpen, buttonFill]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    email: '',
  });
  const validateEmail = (email) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return isValidEmail.test(email);
  };
 

  const handleChange = (e)=>{
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  
    // Clear error message when user starts typing
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
    if (name === 'email' && !validateEmail(value)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: 'Enter a valid email address'
      }));
    }  
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsFormLoading(true);
      const response = await fetch('https://portfoliobackend-ij0n.onrender.com/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      setIsFormLoading(false);
      console.log(formData);
      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000); // Reset success message after 3 seconds
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        }); // Clear form fields after successful submission
      } else {
        const responseData = await response.text(); // Read response body as text
        console.error('Failed to submit form:', responseData || 'Empty response');
      }
    } catch (error) {
      setIsFormLoading(false);
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <Loader />
      {!isLoading && <FollowCursor delay={200} />}
      {!isLoading && (
        <div className='bg-black w-full'>
          <div className="progress-container" style={{ width: `${scrollProgress}%` }}></div>
          <div className='justify-between w-full flex flex-row lg:px-20 py-10'>
            <h1 className='text-gray-500 pt-3 text-lg font-semibold'>The Portfolio</h1>
            <motion.button
              className='relative px-8 font-semibold py-3 rounded-3xl overflow-hidden'
              style={{ backgroundColor: buttonColor, color: textColor }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <motion.div
                className='absolute inset-0 bg-black z-40'
                style={{ scaleY: buttonFill, originY: 1 }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: isMenuOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className='relative z-40'>{isMenuOpen ? 'Close' : 'Menu'}</span>
            </motion.button>
          </div>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className='absolute top-7 right-0 lg:right-16  z-30 bg-cyan-500 rounded-3xl p-4 overflow-hidden w-full'
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
              >
                <motion.ul
                  className='flex flex-col items-center lg:items-start  md:px-10 py-20'
                  variants={{
                    visible: {
                      transition: { staggerChildren: 0.1 }
                    }
                  }}
                >
                  <a href='/'><motion.li className='py-2 text-black text-4xl' variants={itemVariants}>Home</motion.li></a>
                  <a href='#about'><motion.li className='py-2 text-black text-4xl' variants={itemVariants}>About</motion.li></a>
                  <a href='#services'><motion.li className='py-2 text-black text-4xl' variants={itemVariants}>Services</motion.li></a>
                  <a href='#projects'><motion.li className='py-2 text-black text-4xl' variants={itemVariants}>Projects</motion.li></a>
                  <a href='#contact'><motion.li className='py-2 text-black text-4xl' variants={itemVariants}>Contact</motion.li></a>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
          <div className='text-center pt-20 pb-48'>
            <h3 className='text-gray-400 text-md mb-8'>Nishant</h3>
            <h1 className='text-7xl font-bold text-white opacity-90'>Hello! I AM Nishant</h1>
            <h1 className='text-7xl  text-white mb-6 opacity-90'>Web Developer</h1>
            <p className='text-gray-400 text-lg mb-10'>I develop user interfaces and web applications</p>
            <div className='flex flex-row justify-center items-center group'>
              <a onClick={() => scrollToContact()} style={{ cursor: 'pointer' }}><div className='px-7 py-3 rounded-3xl bg-transparent text-white flex flex-row justify-center items-center border border-opacity-60 text-md border-white'>
                Lets Talk<LuArrowRight className='ms-3 text-white group-hover:rotate-90' />
              </div></a>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row px-4 lg:px-20 pb-20' id='about'>
            <div className='w-full lg:w-1/2'>
              <h1 className='font-bold text-white text-6xl mb-6'>About</h1>
              <p className='text-2xl text-gray-100 mb-10'>
                I am a Full-Stack Web Developer specializing in the MERN stack with expertise in Next.js, deployment, Docker, AWS, and scalable web applications. With over six months of experience as a MERN Developer and a year of honing my skills in web development, I have worked on both professional and self-learning projects.  

My professional projects include an Inventory Management System, while my self-learning projects include an eCommerce website built with Next.js. I focus on creating efficient, user-friendly applications that solve real-world problems. As a quick learner and problem solver, I am always eager to explore new technologies and optimize development processes.
              </p>
              <div className="accordion" id="accordionExample">
                {headings.map((heading, index) => (
                  <div key={index} className="accordion-item mb-2 border-b border-gray-400">
                    <h2 className="accordion-header" id={`heading${index + 1}`}>
                      <button
                        className="accordion-button flex justify-between items-center bg-transparent text-white w-full border-b border-white pb-2"
                        type="button"
                        onClick={() => toggleAccordion(index)}
                      >
                        <span className="font-bold text-xl">{heading}</span>
                        <span className="text-3xl">{activeIndex === index ? '-' : '+'}</span>
                      </button>
                    </h2>
                    <div
                      id={`collapse${index + 1}`}
                      className={`accordion-collapse ${activeIndex === index ? 'show' : ''}`}
                      aria-labelledby={`heading${index + 1}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body bg-transparent text-white p-4">
                        <h1 className='text-lg text-gray-100 mb-4'>
                          {contents[index].title}
                        </h1>
                        <ul className='text-gray-100'>
                          {contents[index].points.map((point, idx) => (
                            <li key={idx} className='mb-3'>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='py-14'>
            <div className='sliders-container'>
              {Array.from({ length: 3 }).map((_, index) => (
                <div className={`slider ${index === 1 ? 'reverse' : ''}`} key={index}>
                  <div className='slider-track'>
                    {skills.map((skill, idx) => (
                      <React.Fragment key={idx}>
                        <div className='slide'><FaCircle className='icon' />{skill}</div>
                        <FaCircle className='icon' />
                      </React.Fragment>
                    ))}
                    {skills.map((skill, idx) => (
                      <React.Fragment key={idx + skills.length}>
                        <div className='slide'>{skill}</div>
                        <FaCircle className='icon' />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='py-20' id='services'>
            <h1 className=' text-4xl lg:text-7xl text-white font-bold px-6 lg:px-20  mb-20'>Here's How<br /> I Can Help You</h1>
            <div className='flex flex-col '>
              <div className='flex flex-col lg:flex-row justify-between px-16 relative group lg:brightness-50 lg:hover:brightness-100 items-center cursor-pointer  border-b border-b-gray-500 py-10 lg:py-0'>
                <div className='mb-8 lg:mb-0'>
                  <h1 className='text-white text-4xl font-bold mb-4'>
                    Website Design
                  </h1>
                  <p className='text-gray-200 text-lg'>Take your business to the next level with my cultural insight and strategic vision.</p>

                </div>
                <div className='lg:w-32 w-44  lg:h-32 z-30 bg-black lg:bg-opacity-50 lg:opacity-0 transition-all duration-300 transform lg:scale-0 lg:rotate-3 lg:group-hover:opacity-100 lg:group-hover:w-44 lg:group-hover:h-44 lg:group-hover:scale-110 lg:group-hover:rotate-[20deg] mb-10 lg:mb-0'>
                  <img src='Webdesign.jpeg' className='rounded-lg w-full h-full object-cover' alt='Web Design' />
                </div>
                <div className='flex flex-col  lg:opacity-0 transition-all duration-300 transform lg:scale-0 lg:group-hover:opacity-100 lg:group-hover:scale-110'>
                  <a onClick={() => scrollToContact()} style={{ cursor: 'pointer' }}><button className='border border-gray-100 px-6 py-2 rounded-3xl text-white'>Discuss The Project</button></a>
                </div>
              </div>
              <div className='flex flex-col lg:flex-row justify-between px-16 relative group lg:brightness-50 lg:hover:brightness-100 items-center cursor-pointer  border-b border-b-gray-500 py-10 lg:py-0'>
              <div className='mb-8 lg:mb-0'>
                  <h1 className='text-white text-xl lg:text-4xl font-bold mb-4'>
                    Launch Your Website: Development + Production
                  </h1>
                  <p className='text-gray-200 text-sm lg:text-lg'>Take your business to the next level with my cultural insight and strategic vision.</p>

                </div>
                <div className='lg:w-32 w-44  lg:h-32 z-30 bg-black lg:bg-opacity-50 lg:opacity-0 transition-all duration-300 transform lg:scale-0 lg:rotate-3 lg:group-hover:opacity-100 lg:group-hover:w-44 lg:group-hover:h-44 lg:group-hover:scale-110 lg:group-hover:rotate-[20deg] mb-10 lg:mb-0'>
                  <img src='template.png' className='rounded-lg w-full h-full object-cover' alt='Web Design' />
                </div>
                <div className='flex flex-col  lg:opacity-0 transition-all duration-300 transform lg:scale-0 lg:group-hover:opacity-100 lg:group-hover:scale-110'>
                <a onClick={() => scrollToContact()} style={{ cursor: 'pointer' }}><button className='border border-gray-100 px-6 py-2 rounded-3xl text-white'>Discuss The Project</button></a>
                </div>
              </div>
            </div>
          </div>
         <div className='py-20 ' id='projects'>
          <h1 className='text-white font-bold text-2xl lg:text-6xl lg:px-20 px-4 mb-16'>Projects</h1>
          <div className='flex flex-col flex-wrap lg:flex-row   lg:px-20'>
          <a target='_blank' href='https://main--kalikakeshariweb.netlify.app/'><div className=' group rounded-xl cursor-pointer  w-[320px] md:w-[680px] lg:w-[450px] me-8 border-t border-t-gray-300 mb-8 '>
            <div className='rounded-t-xl border-b border-b-gray-300 px-3 py-4'>
              <div className='flex  flex-row justify-between '><h1 className='text-4xl mb-3 text-white'>Project 1</h1><GoArrowUpRight className='text-white text-5xl lg:group-hover:rotate-45 transform duration-300'/></div>
              <div className='lg:opacity-0 lg:group-hover:opacity-100 lg:h-0  lg:group-hover:h-auto transition-all duration-300 transform lg:scale-0  lg:group-hover:scale-110 lg:ms-6 '>
                <h1 className='text-gray-100 text-lg text-start'>School Website</h1>

              </div>
            </div>
            <div className=' w-[320px] md:w-[680px] lg:w-[450px]'>
              <img src='schoolWeb.png' className='rounded-b-xl w-full h-full object-cover'></img>
            </div>

          </div></a>
          <a target='_blank' href='https://main--servicefullstack.netlify.app/'><div className=' group rounded-xl cursor-pointer w-[320px] md:w-[680px] lg:w-[450px] me-8 border-t border-t-gray-300'>
            <div className='rounded-t-xl border-b border-b-gray-300 px-3 py-4'>
              <div className='flex  flex-row justify-between '><h1 className='text-4xl mb-3 text-white'>Project 2</h1><GoArrowUpRight className='text-white text-5xl lg:group-hover:rotate-45 transform duration-300'/></div>
              <div className='lg:opacity-0 lg:group-hover:opacity-100 lg:h-0  lg:group-hover:h-auto transition-all duration-300 transform lg:scale-0  lg:group-hover:scale-110 lg:ms-6 '>
                <h1 className='text-gray-100 text-lg text-start'>Service Website</h1>

              </div>
            </div>
            <div className=' w-[320px] md:w-[680px] lg:w-[450px]'>
              <img src='ServiceWeb.png' className='rounded-b-xl w-full h-full object-cover'></img>
            </div>

          </div></a>
          <a target='_blank' href='https://ecommerce-git-main-nishants-projects-97a5ecc4.vercel.app'><div className=' group rounded-xl cursor-pointer w-[320px] md:w-[680px] lg:w-[450px] me-8 border-t border-t-gray-300'>
            <div className='rounded-t-xl border-b border-b-gray-300 px-3 py-4'>
              <div className='flex  flex-row justify-between '><h1 className='text-4xl mb-3 text-white'>Project 3</h1><GoArrowUpRight className='text-white text-5xl lg:group-hover:rotate-45 transform duration-300'/></div>
              <div className='lg:opacity-0 lg:group-hover:opacity-100 lg:h-0  lg:group-hover:h-auto transition-all duration-300 transform lg:scale-0  lg:group-hover:scale-110 lg:ms-6 '>
                <h1 className='text-gray-100 text-lg text-start'>Ecommerce Website</h1>

              </div>
            </div>
            <div className=' w-[320px] md:w-[680px] lg:w-[450px]'>
              <img src='Ecom.png' className='rounded-b-xl w-full h-full object-cover'></img>
            </div>

          </div></a>  
          
          </div>
         </div>
         <div ref={contactRef} className='py-20 transition-all transform duration-300' id='contact'>
          <h1 className='text-white text-3xl lg:text-6xl px-8 lg:px-20 font-bold brightness-75 mb-2'>Interested In Talking,</h1>
          <h1 className='text-white text-3xl lg:text-6xl px-8 lg:px-20 font-bold mb-16'>Let's Do it.</h1>
          <div className='flex flex-col lg:flex-row px-4 lg:px-20 lg:justify-between '>
          <form method='POST' className='flex w-full lg:w-[50%] flex-row flex-wrap justify-between mb-16 lg:mb-0' onSubmit={handleSubmit} >
            <input id='name' name='name' className='border-b border-gray-300 w-[48%] mb-10 bg-transparent py-2 px-4 text-white focus:outline-none focus:border-b focus:border-gray-600 focus:bg-transparent' value={formData.name} onChange={handleChange} placeholder='Name'/>
            
            <input id='email' name='email' className='border-b border-gray-300 w-[48%] mb-10 bg-transparent py-2 px-4 text-white focus:outline-none focus:border-b focus:border-gray-600' value={formData.email} onChange={handleChange} placeholder='Email' />
           
            <input id='subject' name='subject' className='border-b border-gray-300 w-full mb-10 bg-transparent py-2 px-4 text-white focus:outline-none focus:border-b  focus:border-gray-600' value={formData.subject} onChange={handleChange} placeholder='Subject' />
            <textarea id='message' name='message' className='border-b border-gray-300 w-full mb-10 bg-transparent py-2 px-4 text-white focus:outline-none focus:border-b focus:border-gray-600 resize-none' value={formData.message} onChange={handleChange} placeholder='Message' />
            <button type='submit' className='px-6 py-2 border border-gray-300 rounded-3xl text-gray-400 text-lg hover:text-white hover:border-white'>Discuss The Project</button>

            {errors.email && <span className="text-red-500">{errors.email}</span>}
            {isSuccess && <p className="text-green-500">Form submitted successfully!</p>}
    
          </form>
          <div className='flex flex-col justify-between'>
            <div className='mb-20 lg:mb-0'>
            <h1 className='text-gray-300 mb-2'>Get in touch</h1>
            <p className='text-gray-100 text-lg md:text-3xl font-bold mb-4'>khorwalnishant@gmail.com</p>
            <p className='text-gray-300 mb-1'>+91-7701839633</p>
            <p className='text-gray-300 '>Karol Bagh, New Delhi</p>
            </div>
            <div className='flex justify-between mb-9 '><a target='_blank' href='https://www.instagram.com/nishant_weeb?igsh=MWhlMGx2OWtrdTFuNw==' className='text-gray-300 text-lg cursor-pointer hover:text-xl hover:text-pink-700'>Instagram</a><a target='_blank' href='https://www.linkedin.com/in/nishant-khorwal-1a7519215/' className='text-gray-300 text-lg cursor-pointer hover:text-xl hover:text-blue-700'>LinkedIn</a><a target='_blank' href='https://github.com/Nishantkhorwal' className='text-gray-300 text-lg cursor-pointer hover:text-xl hover:text-gray-600'>Github</a><a target='_blank' href='https://x.com/KhorwalNishant?t=EQRxM9Ir0bS71i65Kmd9cw&s=09' className='text-gray-300 text-lg cursor-pointer hover:text-xl hover:text-blue-500'>Twitter</a></div>
          </div>

          </div>
         </div>
         <div className='flex flex-row justify-between lg:px-20 px-4 pb-10'>
          <h1 className='text-gray-300 text-sm lg:text-lg'>Copyright 2024 Portfolio</h1>
          <h1 className='text-gray-300 text-sm lg:text-lg'>Developed by Nishant</h1>

         </div>
        </div>
      )}
    </>
  );
}

export default Home;
