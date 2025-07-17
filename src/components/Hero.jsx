import React, { useEffect, useState } from 'react'

// libraries
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion'
import CountUp from 'react-countup';

//components 
import ScrollCountUp from './ScrollCountup';
import ScrollReveal from './Scrollreveal';

// React icons
import { BsLightningChargeFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaNfcDirectional } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
import { IoDiamondSharp } from "react-icons/io5";
import { RiBriefcase2Line } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";

// images
import heroimg from '../assets/hero1.jpg'
import client1 from '../assets/client-1.png'
import client2 from '../assets/client-2.png'
import client3 from '../assets/client-3.png'
import client4 from '../assets/client-4.png'
import meeting1 from '../assets/meeting1.jpg'
import meeting2 from '../assets/meeting2.jpg'
import aboutimg from '../assets/about-image.png'

// start
const Hero = () => {

    const [showBox, setShowBox] = useState(false);

    // box delay after heading completion
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowBox(true);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <div className="w-full min-h-[90vh] md:min-h-screen relative bg-cover bg-center" style={{ backgroundImage: `url(${heroimg})` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                <div className="relative z-10 flex flex-col justify-center items-center text-white p-4 sm:p-6 md:p-8 lg:p-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold leading-normal">
                        <Typewriter
                            words={['WELCOME TO SILVERWINK IT SOLUTIONS']}
                            cursor
                            cursorStyle=""
                            typeSpeed={50}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h1>
                    {showBox && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            className="bg-white/10 backdrop-blur-md w-full lg:w-3/4 xl:w-1/2 mt-6 sm:mt-8 md:mt-10 space-y-3 sm:space-y-4 md:space-y-5 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 rounded-2xl text-center text-white"
                        >
                            <div className='w-full sm:w-fit mx-auto text-white transition-all duration-200 cursor-pointer hover:scale-[1.02] hover:shadow-lg shadow-stone-700 hover:border-white px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-gray-500 flex justify-center items-center'>
                                <span className='p-2 sm:p-3 rounded-full border bg-gradient-to-r from-[#0f2027] to-[#2c5364] text-green-400'>
                                    <BsLightningChargeFill size={12} className="sm:w-4 sm:h-4" />
                                </span>
                                <span className='text-lg sm:text-xl md:text-2xl px-2'>Reliable And Fast Solutions</span>
                            </div>
                            <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mt-2 sm:mt-3 px-2 sm:px-3 md:px-4'>
                                Empower your Business with Our Solutions.
                            </div>
                            <div className='text-base sm:text-lg md:text-xl text-center mt-3 sm:mt-4 px-2 sm:px-3'>
                                Everyone with high and useful reward for his/her trading, purchase and investment. Our goal is to make the
                            </div>
                            <div className='border cursor-pointer border-gray-600 hover:shadow-lg shadow-stone-700 hover:bg-[#167e4a] hover:border-white bg-[#132730] hover:scale-[1.03] duration-200 group rounded-full flex justify-center items-center gap-2 sm:gap-3 mt-6 sm:mt-8 w-full sm:w-fit mx-auto px-3 py-2 sm:px-4 sm:py-2'>
                                <span className='text-base sm:text-lg md:text-xl'>Lets Talk With Us</span>
                                <span className='border border-gray-600 bg-[#167e4a] group-hover:border-white group-hover:bg-[#132730] group-hover:rotate-180 transition-all duration-300 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex justify-center items-center'>
                                    <FaArrowLeftLong size={16} className="sm:w-5 sm:h-5" />
                                </span>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Services Section */}
            <div className='second px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 min-h-80 py-8 sm:py-10'>
                <ScrollReveal delay={0.2} className='flex-1 bg-[#e4f4f2] p-4 sm:p-5 md:p-6 rounded-xl h-auto lg:h-96'>
                    <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4 sm:px-5 md:px-6 text-left'>Providing the Best Business Solutions</div>
                    <div className='relative flex mt-6 sm:mt-8 md:mt-10 h-12'>
                        <img className='absolute left-0 sm:left-4 w-8 h-8 sm:w-10 sm:h-10' src={client1} alt="" />
                        <img className='absolute left-8 sm:left-12 w-8 h-8 sm:w-10 sm:h-10' src={client2} alt="" />
                        <img className='absolute left-16 sm:left-20 w-8 h-8 sm:w-10 sm:h-10' src={client3} alt="" />
                        <img className='absolute left-24 sm:left-28 w-8 h-8 sm:w-10 sm:h-10' src={client4} alt="" />
                    </div>
                    <div className='mt-20 sm:mt-24 px-4 sm:px-5 flex gap-2 justify-start items-center'>
                        {[...Array(5)].map((_, i) => (
                            <MdOutlineStar key={i} size={16} className="sm:w-5 sm:h-5" color='gold' />
                        ))}
                        <span className='font-bold text-sm sm:text-base'>(4.9)</span>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.5} className='flex-1 h-80 sm:h-96'>
                    <div className='bg-black h-1/2 overflow-hidden'>
                        <img className='object-cover w-full h-full' src={meeting1} alt="" />
                    </div>
                    <div className='bg-[#144443] h-1/2 text-white p-4 sm:p-5 md:p-6'>
                        <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold'>Consultancy</h1>
                        <p className='text-base sm:text-lg md:text-xl mt-2 sm:mt-3'>everyone with high and useful reward for his/her trading,</p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.8} className='flex-1 h-80 sm:h-96'>
                    <div className='bg-[#144443] h-1/2 text-white p-4 sm:p-5 md:p-6'>
                        <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold'>Business Mentor</h1>
                        <p className='text-base sm:text-lg md:text-xl mt-2 sm:mt-3'>everyone with high and useful reward for his/her trading,</p>
                    </div>
                    <div className='h-1/2 overflow-hidden'>
                        <img className='object-cover w-full h-full' src={meeting2} alt="" />
                    </div>
                </ScrollReveal>
            </div>

            {/* About Section */}
            <div className='third px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6 items-center min-h-auto md:min-h-[80vh]'>
                <ScrollReveal direction='right' className="w-full md:w-1/2">
                    <img className='w-full h-auto rounded-xl' src={aboutimg} alt="" />
                </ScrollReveal>

                <ScrollReveal direction='left' className='w-full md:w-1/2 space-y-3 sm:space-y-4 px-4 sm:px-5 md:px-6'>
                    <div className='flex justify-center md:justify-start gap-2 sm:gap-3 items-center'>
                        <IoDiamondSharp size={20} className="text-[#113c3d]" />
                        <span className='text-gray-500 text-sm sm:text-base'>Who We Are</span>
                    </div>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0b3130] font-semibold text-left mt-4 sm:mt-5'>Increase your money systematically</h1>

                    <div className='flex flex-col sm:flex-row justify-center items-center mt-4 sm:mt-5 py-2 gap-3 sm:gap-4'>
                        <div className='hover:scale-105 cursor-pointer transition-all duration-200 bg-gradient-to-r from-[#b8e96d] to-[#0a9695] w-12 h-12 sm:w-14 sm:h-14 flex justify-center items-center rounded-full'>
                            <RiBriefcase2Line size={24} className="text-white" />
                        </div>
                        <p className='text-lg sm:text-xl text-[#0b3130] underline text-center sm:text-left'>
                            Everyone with high and useful reward for his/her trading, purchase and investment
                        </p>
                    </div>

                    <p className='text-gray-500 text-base sm:text-lg mt-4 sm:mt-5'>
                        everyone with high and useful reward for his/her trading, purchase and investment. Our goal is to make the
                    </p>

                    <div className='flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-8 gap-4 sm:gap-6'>
                        <div className='w-full sm:w-1/2'>
                            <p className='text-base sm:text-lg flex items-center gap-2 sm:gap-3 mb-2'><FaCheckCircle className="text-green-500" />Protecting your company</p>
                            <p className='text-base sm:text-lg flex items-center gap-2 sm:gap-3 mb-2'><FaCheckCircle className="text-green-500" />We offer you solutions</p>
                            <p className='text-base sm:text-lg flex items-center gap-2 sm:gap-3 mb-2'><FaCheckCircle className="text-green-500" />we take care of you</p>
                            <p className='text-base sm:text-lg flex items-center gap-2 sm:gap-3'><FaCheckCircle className="text-green-500" />everyone with high</p>
                        </div>
                        <div className='bg-gradient-to-r hover:scale-105 cursor-pointer duration-300 from-[#b8e96d] to-[#0a9695] text-white px-6 sm:px-8 py-4 sm:py-5 rounded-2xl w-full sm:w-auto mt-4 sm:mt-0'>
                            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>25 +</h1>
                            <div className='text-lg sm:text-xl'>Years of Experience</div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Stats Section */}
            <div className="fourth flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 bg-white text-[#0b3130]">
                <ScrollReveal >
                    <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-gray-300 shadow-sm flex flex-col justify-center items-center text-center p-4 sm:p-5 md:p-6 transition-transform duration-300 hover:scale-[1.03]">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                            <ScrollCountUp end={1} duration={5} suffix="M" />
                        </h1>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium">Worldwide Business Grow</p>
                    </div>
                </ScrollReveal>

                <ScrollReveal >
                    <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-gray-300 shadow-sm flex flex-col justify-center items-center text-center p-4 sm:p-5 md:p-6 transition-transform duration-300 hover:scale-[1.03]">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                            <ScrollCountUp end={12} duration={5} suffix="K+" />
                        </h1>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium">Satisfied Clients</p>
                    </div>
                </ScrollReveal>

                <ScrollReveal >
                    <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-gray-300 shadow-sm flex flex-col justify-center items-center text-center p-4 sm:p-5 md:p-6 transition-transform duration-300 hover:scale-[1.03]">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                            <ScrollCountUp end={119} duration={5} suffix="M" />
                        </h1>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium">Countries Served</p>
                    </div>
                </ScrollReveal>

                <ScrollReveal >
                    <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-gray-300 shadow-sm flex flex-col justify-center items-center text-center p-4 sm:p-5 md:p-6 transition-transform duration-300 hover:scale-[1.03]">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                            <ScrollCountUp end={33} duration={5} />
                        </h1>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium">Award Winning Contests</p>
                    </div>
                </ScrollReveal>
            </div>

            {/* Services Section */}
            <ScrollReveal className="fifth rounded-3xl w-[95%] max-w-[1920px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 mx-auto bg-gradient-to-r from-[#578451] to-[#144443] min-h-screen">
                <div className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-8 h-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <p className="flex justify-start gap-2 sm:gap-3 text-white items-center mb-3 sm:mb-4 md:mb-5">
                            <FaArrowRight size={20} className="text-green-300" />
                            <span className="text-xs sm:text-sm md:text-base font-medium tracking-wider">LATEST SERVICES</span>
                        </p>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                            Guidance for Personal and Professional Growth.
                        </h1>
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-end mt-6 sm:mt-8 lg:mt-0">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">5K+</h1>
                        <p className="text-lg sm:text-xl text-white/90 mt-1 sm:mt-2">Satisfied Clients</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 w-full">
                    <ScrollReveal>
                        <div className="h-full bg-black/80 hover:bg-black/90 px-4 sm:px-5 py-5 sm:py-6 rounded-3xl space-y-3 transition-all duration-300 text-white shadow-md hover:shadow-lg hover:-translate-y-1 border border-white/10 flex flex-col">
                            <div className="text-blue-400">
                                <FaNfcDirectional size={36} className="sm:w-10 sm:h-10" />
                            </div>
                            <h1 className="text-lg sm:text-xl font-bold">Business Consulting</h1>
                            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                                We promise cost-effective business consulting solutions designed to help you lower expenses and boost profits.
                            </p>
                            <div className="mt-auto pt-4 sm:pt-5 cursor-pointer group">
                                <span className="inline-block transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-1 -rotate-[35deg]">
                                    <FaArrowRightLong size={20} className="text-blue-400" />
                                </span>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="h-full bg-black/80 hover:bg-black/90 px-4 sm:px-5 py-5 sm:py-6 rounded-3xl space-y-3 transition-all duration-300 text-white shadow-md hover:shadow-lg hover:-translate-y-1 border border-white/10 flex flex-col">
                            <div className="text-green-400">
                                <FaNfcDirectional size={36} className="sm:w-10 sm:h-10" />
                            </div>
                            <h1 className="text-lg sm:text-xl font-bold">Market Analysis</h1>
                            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                                Comprehensive market research and competitive analysis to help you make informed business decisions.
                            </p>
                            <div className="mt-auto pt-4 sm:pt-5 cursor-pointer group">
                                <span className="inline-block transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-1 -rotate-[35deg]">
                                    <FaArrowRightLong size={20} className="text-green-400" />
                                </span>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="h-full bg-black/80 hover:bg-black/90 px-4 sm:px-5 py-5 sm:py-6 rounded-3xl space-y-3 transition-all duration-300 text-white shadow-md hover:shadow-lg hover:-translate-y-1 border border-white/10 flex flex-col">
                            <div className="text-purple-400">
                                <FaNfcDirectional size={36} className="sm:w-10 sm:h-10" />
                            </div>
                            <h1 className="text-lg sm:text-xl font-bold">Financial Planning</h1>
                            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                                Strategic financial planning services to optimize your investments and maximize returns.
                            </p>
                            <div className="mt-auto pt-4 sm:pt-5 cursor-pointer group">
                                <span className="inline-block transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-1 -rotate-[35deg]">
                                    <FaArrowRightLong size={20} className="text-purple-400" />
                                </span>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="h-full bg-black/80 hover:bg-black/90 px-4 sm:px-5 py-5 sm:py-6 rounded-3xl space-y-3 transition-all duration-300 text-white shadow-md hover:shadow-lg hover:-translate-y-1 border border-white/10 flex flex-col">
                            <div className="text-yellow-400">
                                <FaNfcDirectional size={36} className="sm:w-10 sm:h-10" />
                            </div>
                            <h1 className="text-lg sm:text-xl font-bold">Digital Strategy</h1>
                            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                                Innovative digital strategies to enhance your online presence and customer engagement.
                            </p>
                            <div className="mt-auto pt-4 sm:pt-5 cursor-pointer group">
                                <span className="inline-block transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-1 -rotate-[35deg]">
                                    <FaArrowRightLong size={20} className="text-yellow-400" />
                                </span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </ScrollReveal>
        </div>
    )
}

export default Hero