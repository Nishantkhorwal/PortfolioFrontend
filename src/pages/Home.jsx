
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
  const [activeTab, setActiveTab] = useState("software")

  const buttonFill = useMotionValue(0);
  const buttonColor = useTransform(buttonFill, [0, 1], ['#00bcd4', '#000000']);
  const textColor = useTransform(buttonFill, [0, 1], ['#000000', '#ffffff']);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openSoftware, setOpenSoftware] = useState(null)

  const toggleSoftware = (index)=>{
    setOpenSoftware(openSoftware === index ? null : index)
  }


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
  "01 Software Developer – ROF",
  "02 Enterprise Software Development",
  "03 Freelance Development & Client Projects"
];

const contents = [
  {
    title: "Software Developer | ROF",
    points: [
      "Currently working as a Software Developer responsible for designing and developing internal business software solutions.",
      "Develop and maintain full-stack applications using the MERN stack including React.js, Node.js, Express.js, and MongoDB.",
      "Handle complete software lifecycle including architecture design, development, testing, and deployment.",
      "Deploy and manage production applications on servers ensuring performance, reliability, and security.",
      "Continuously improve and scale internal systems to support business operations."
    ]
  },
  {
    title: "Enterprise Software Development",
    points: [
      "Designed and developed a complete Sales Management System for managing leads, clients, and sales operations.",
      "Built an Inventory Management System to track and manage organizational assets and inventory efficiently.",
      "Developed an Asset Management System to monitor company resources and operational assets.",
      "Created a comprehensive HRMS platform for managing employee records, internal processes, and administrative workflows.",
      "Architected and developed these enterprise systems independently including frontend, backend, database design, and deployment."
    ]
  },
  {
    title: "Freelance Development & Client Projects",
    points: [
      "Work as an independent freelance developer building modern websites and digital platforms for clients.",
      "Developed the corporate website for AdstechIndia with a fully responsive design and optimized performance.",
      "Build custom websites and business platforms tailored to client requirements.",
      "Provide full development services including UI design, backend API development, database management, and deployment.",
      "Focus on delivering scalable, high-performance, and production-ready applications."
    ]
  }
];


  const skills = [
    'JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'Express', 'MongoDB',
    'Tailwind CSS', 'Bootstrap', 'Git', 'GitHub', 'Webpack', 'Babel',
    'TypeScript', 'Redux', 'Next.js', 'SASS', 'GraphQL', 'Firebase',
    'Jest', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Heroku', 'Netlify'
  ];


 const softwareProjects = [
  {
    title: "Sales Management System",
    image: "sales9.png",
    description: "Enterprise platform for managing leads, deals and client relationships.",
    details: [
      "Lead management and sales pipeline tracking",
      "Client database with activity history",
      "Meeting records and follow-up management",
      "Sales analytics and performance tracking"
    ],
    images: ["sales1.png","sales2.png","sales3.png","sales4.png","sales5.png","sales6.png","sales7.png","sales9.png"]
  },

  {
    title: "Inventory Management System",
    image: "/inv3.png",
    description: "System for monitoring stock levels and asset inventory.",
    details: [
      "Real-time inventory tracking",
      "Role Based inventory access",
      "Inventory analytics dashboard",
      "Project Based Inventory"
    ],
    images: ["inv1.png","inv2.png","inv3.png","inv4.png","inv5.png","inv6.png","inv7.png","inv8.png"]
  },

  {
    title: "Asset Management System",
    image: "asset4.png",
    description: "Centralized platform for managing company assets and resources.",
    details: [
      "Asset lifecycle management",
      "Location and department allocation",
      "Asset condition tracking",
      "Operational asset reporting"
    ],
    images: ["asset1.png","asset2.png","asset3.png","asset4.png","asset5.png","asset6.png","asset7.png","asset8.png","asset9.png","asset10.png",]
  },

  {
    title: "HRMS Platform",
    image: "hrms4.png",
    description: "Internal HR software for employee and administration management.",
    details: [
      "Employee records and profiles",
      "Department management",
      "Attendance and HR workflows",
      "Administrative management tools"
    ],
    images: ["hrms1.png","hrms2.png","hrms3.png","hrms4.png","hrms5.png","hrms6.png","hrms7.png","hrms8.png","hrms9.png","hrms10.png","hrms11.png"]
  }
]


const liveWebsites = [
  {
    title: "Adstechindia Website",
    image: "adstech.png",
    link: "https://adstech.uk/",
    tech: ["React", "MongoDB", "Tailwind","Node","Netlify"]
  },
  {
    title: "ROF Website",
    image: "rof.png",
    link: "https://rof.co.in/",
    tech: ["Codeigniter", "PHP","Hostinger","Bootstrap"]
  },
]

const designWebsites = [
  {
    title: "School Website",
    image: "schoolWeb.png",
    link: "https://main--kalikakeshariweb.netlify.app/",
    tech: ["React", "MongoDB", "Tailwind","Node","Netlify"]
  },
  {
    title: "Service Business Website",
    image: "ServiceWeb.png",
    link: "https://main--servicefullstack.netlify.app/",
    tech: ["React", "MongoDB", "Tailwind","Node","Netlify"]
  },
  {
    title: "Ecommerce Concept",
    image: "Ecom.png",
    link: "https://ecommerce-git-main-nishants-projects-97a5ecc4.vercel.app/",
    tech: ["Next.js", "MongoDB","Tailwind","Node","Vercel"]
  }
]


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

  const [viewerOpen, setViewerOpen] = useState(false)
const [viewerImages, setViewerImages] = useState([])
const [currentIndex, setCurrentIndex] = useState(0)

const openViewer = (images) => {
  setViewerImages(images)
  setCurrentIndex(0)
  setViewerOpen(true)
}

const nextImage = () => {
  setCurrentIndex((prev) => (prev + 1) % viewerImages.length)
}

const prevImage = () => {
  setCurrentIndex((prev) => (prev - 1 + viewerImages.length) % viewerImages.length)
}


  const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: ""
});

const [errors, setErrors] = useState({});


const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

  const validateEmail = (email) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return isValidEmail.test(email);
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
          <div className='text-center pt-24 pb-40 px-6'>
            <h3 className='text-gray-400 text-sm mb-6 tracking-widest uppercase'>
              Full Stack Developer
            </h3>

            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6'>
              I Build Fast, Scalable <br />
              <span className='text-cyan-400'>Web Experiences</span>
            </h1>

            <p className='text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10'>
              I design and develop modern web applications using the MERN stack.
              My focus is building high-performance, user-friendly, and scalable
              digital products that help businesses grow online.
            </p>

            <div className='flex justify-center'>
              <button
                onClick={scrollToContact}
                className='flex items-center gap-3 px-8 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition duration-300'
              >
                Start a Project
                <LuArrowRight />
              </button>
            </div>
          </div>

          <div className='py-24 px-6 md:px-12 lg:px-20' id='about'>

            {/* SECTION TITLE */}

            <div className='mb-16'>
              <p className='text-gray-400 uppercase tracking-widest text-sm mb-3'>
                About Me
              </p>
              <h1 className='text-white font-bold text-4xl md:text-5xl lg:text-6xl'>
                Developer & Problem Solver
              </h1>
            </div>

            <div className='grid lg:grid-cols-2 gap-16 items-center'>

              {/* LEFT SIDE - IMAGE */}

              <div className='flex justify-center lg:justify-center'>

                <div className='relative group'>

                  <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 blur opacity-25 group-hover:opacity-60 transition duration-500'></div>

                  <img
                    src='/photo2.png'   // replace with your image
                    className='relative w-[320px] md:w-[380px] lg:w-[420px] rounded-2xl object-cover border border-gray-800'
                  />

                </div>

              </div>


              {/* RIGHT SIDE - CONTENT */}

              <div>

                <h2 className='text-white text-3xl font-semibold mb-6'>
                  Hi, I'm Nishant — Software Developer & Full-Stack MERN Engineer
                </h2>

                <p className='text-gray-300 text-lg leading-relaxed mb-10'>
                  I am a Full-Stack Software Developer with 2+ years of experience building
                  scalable web applications, business platforms, and enterprise software
                  solutions. Currently, I work as a Software Developer at ROF where I design,
                  develop, and deploy internal software systems used for business operations.

                  I have independently developed complex business applications including
                  Sales Management Systems, Inventory Management Systems, Asset Management
                  Systems, and HRMS software for my organization. These systems were
                  architected, developed, and deployed entirely by me, covering both frontend
                  and backend development along with server deployment.

                  Alongside my professional role, I actively work as a freelance developer,
                  helping businesses build modern websites and digital platforms. I have also
                  developed the corporate website for AdstechIndia, delivering a responsive
                  and performance-optimized web experience.

                  My expertise lies in building high-performance applications using the
                  MERN stack, designing scalable backend architectures, and delivering
                  reliable production-ready software solutions.
                </p>



                {/* ACCORDION */}

                <div className='space-y-4'>

                  {headings.map((heading, index) => (

                    <div
                      key={index}
                      className='bg-[#0f0f0f] border border-gray-800 rounded-xl overflow-hidden'
                    >

                      <button
                        onClick={() => toggleAccordion(index)}
                        className='flex justify-between items-center w-full px-6 py-4 text-left'
                      >

                        <span className='text-white font-semibold text-lg'>
                          {heading}
                        </span>

                        <span className='text-2xl text-gray-400'>
                          {activeIndex === index ? '-' : '+'}
                        </span>

                      </button>

                      <div
                        className={`px-6 pb-6 transition-all duration-300 ${
                          activeIndex === index ? "block" : "hidden"
                        }`}
                      >

                        <h3 className='text-gray-200 mb-4'>
                          {contents[index].title}
                        </h3>

                        <ul className='space-y-2 text-gray-400'>
                          {contents[index].points.map((point, idx) => (
                            <li key={idx}>• {point}</li>
                          ))}
                        </ul>

                      </div>

                    </div>

                  ))}

                </div>

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
                <div className='mb-8 lg:mb-4'>
                  <h1 className='text-white text-4xl font-bold mb-4'>
                    Website Design
                  </h1>
                  <p className='text-gray-300 text-lg max-w-xl'>
                    Modern and responsive website design focused on clean UI,
                    excellent user experience, and strong brand presence.
                    Every website is optimized for performance, mobile devices,
                    and conversion.
                  </p>


                </div>
                <div className='lg:w-32 w-44  lg:h-32 z-30 bg-black lg:bg-opacity-50 lg:opacity-0 transition-all duration-300 transform lg:scale-0 lg:rotate-3 lg:group-hover:opacity-100 lg:group-hover:w-44 lg:group-hover:h-44 lg:group-hover:scale-110 lg:group-hover:rotate-[20deg] mb-10 lg:mb-0'>
                  <img src='Webdesign.jpeg' className='rounded-lg w-full h-full object-cover' alt='Web Design' />
                </div>
                <div className='flex flex-col  lg:opacity-0 transition-all duration-300 transform lg:scale-0 lg:group-hover:opacity-100 lg:group-hover:scale-110'>
                  <a onClick={() => scrollToContact()} style={{ cursor: 'pointer' }}><button className='border border-gray-100 px-6 py-2 rounded-3xl text-white'>Discuss The Project</button></a>
                </div>
              </div>
              <div className='flex flex-col lg:flex-row justify-between px-16 relative group lg:brightness-50 lg:hover:brightness-100 items-center cursor-pointer  border-b border-b-gray-500 py-10 lg:py-2'>
              <div className='mb-8 lg:mb-0'>
                  <h1 className='text-white text-xl lg:text-4xl font-bold mb-4'>
                    Launch Your Website: Development + Production
                  </h1>
                  <p className='text-gray-300 text-lg max-w-xl'>
                  Full-stack development using modern technologies like React,
                  Node.js and MongoDB. From idea to production deployment,
                  I build scalable web applications ready for real users.
                  </p>


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

        <div className="py-24" id="projects">
        <h1 className='text-white font-bold text-2xl lg:text-6xl lg:px-20 px-4 mb-16'>Projects</h1>
        {/* CATEGORY SELECTOR */}

        <div className="px-6 md:px-12 lg:px-20 mb-16 flex gap-4">
         
        <button
        onClick={()=>setActiveTab("software")}
        className={`px-6 py-3 rounded-full border transition ${
        activeTab === "software"
        ? "bg-cyan-500 text-black border-cyan-500"
        : "border-gray-700 text-gray-300 hover:border-cyan-400"
        }`}
        >
        Enterprise Software
        </button>

        <button
        onClick={()=>setActiveTab("websites")}
        className={`px-6 py-3 rounded-full border transition ${
        activeTab === "websites"
        ? "bg-cyan-500 text-black border-cyan-500"
        : "border-gray-700 text-gray-300 hover:border-cyan-400"
        }`}
        >
        Websites
        </button>

        </div>
        {activeTab === "software" && (

        <div className="px-6 md:px-12 lg:px-20 mb-24">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {softwareProjects.map((project,i)=>(

        <div
        key={i}
        className="bg-[#0f0f0f] border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-400 transition"
        >

        {/* SOFTWARE IMAGE */}

        <div className="overflow-hidden">

        <img
        src={project.image}
        className="w-full h-[200px] object-cover hover:scale-110 transition duration-700"
        />

        </div>

        {/* CONTENT */}

        <div className="p-6">

        <h3 className="text-white text-xl font-semibold mb-2">
        {project.title}
        </h3>

        <p className="text-gray-400 text-sm mb-4">
        {project.description}
        </p>

        {/* ACCORDION */}

        <button
        onClick={()=>toggleSoftware(i)}
        className="flex justify-between items-center w-full text-left border-t border-gray-800 pt-3"
        >

        <span className="text-gray-300 text-sm">
        Project Details
        </span>

        <span className="text-xl text-gray-400">
        {openSoftware === i ? "-" : "+"}
        </span>

        </button>

        {openSoftware === i && (

        <div className="mt-4 space-y-2">

        {project.details.map((point,index)=>(
        <p key={index} className="text-gray-400 text-sm">
        • {point}
        </p>
        ))}

        </div>

        )}

        {/* VIEW SCREENSHOTS */}

        <button
        onClick={()=>openViewer(project.images)}
        className="mt-5 text-cyan-400 text-sm hover:underline"
        >
        View Screenshots →
        </button>

        </div>

        </div>

        ))}

        </div>

        </div>

        )}


        {activeTab === "websites" && (

        <div>

        {/* LIVE WEBSITES */}

        <div className="px-6 md:px-12 lg:px-20 mb-20">

        <h2 className="text-white text-3xl font-semibold mb-10">
        Live Websites
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {liveWebsites.map((site,i)=>(

        <a key={i} href={site.link} target="_blank" className="group">

        <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-400 transition">

        <div className="overflow-hidden">

        <img
        src={site.image}
        className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-700"
        />

        </div>

        <div className="p-6">

        <h3 className="text-white text-xl font-semibold mb-3">
        {site.title}
        </h3>

        <div className="flex flex-wrap gap-2">

        {site.tech.map((t,idx)=>(
        <span
        key={idx}
        className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-300"
        >
        {t}
        </span>
        ))}

        </div>

        </div>

        </div>

        </a>

        ))}

        </div>

        </div>


        {/* WEBSITE DESIGNS */}

        <div className="px-6 md:px-12 lg:px-20">
        
        <h2 className="text-white text-3xl font-semibold mb-10">
        Individual Projects (Showcasing My Skills)
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {designWebsites.map((site,i)=>(
        <a key={i} href={site.link} target="_blank" className="group">
        <div>

        <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl overflow-hidden">

        <div className="overflow-hidden">

        <img
        src={site.image}
        className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-700"
        />

        </div>

        <div className="p-6">

        <h3 className="text-white text-xl font-semibold mb-3">
        {site.title}
        </h3>

        <div className="flex gap-2 flex-wrap">

        {site.tech.map((t,idx)=>(
        <span
        key={idx}
        className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-300"
        >
        {t}
        </span>
        ))}

        </div>

        </div>

        </div>

        </div>
        </a>

        ))}

        </div>

        </div>

        </div>

        )}




        </div>



        {viewerOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* BLUR BACKGROUND */}

            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-xl"
              onClick={() => setViewerOpen(false)}
            />

            {/* LEFT ARROW */}

            <button
              onClick={prevImage}
              className="absolute left-10 text-white text-5xl z-50 hover:scale-125 transition"
            >
              ‹
            </button>

            {/* IMAGE */}

            <img
              src={viewerImages[currentIndex]}
              className="relative max-h-[80vh] rounded-xl shadow-[0_0_60px_rgba(0,255,255,0.4)]"
            />

            {/* RIGHT ARROW */}

            <button
              onClick={nextImage}
              className="absolute right-10 text-white text-5xl z-50 hover:scale-125 transition"
            >
              ›
            </button>

          </div>
        )}


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
