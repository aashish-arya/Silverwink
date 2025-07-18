import React, { useEffect, useState } from 'react'

// libraries
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion'
import CountUp from 'react-countup';


//components 
import ScrollCountUp from './ScrollCountup';
import ScrollReveal from './Scrollreveal';
import AutoSlider from './AutoSlider';

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


    const cards = [
        {
            title: "Technology IT",
            image: "https://html.kodesolution.com/2025/finclix-html/images/home-1/project/project-01.jpg",
        },
        {
            title: "Orion Finance",
            image: "https://html.kodesolution.com/2025/finclix-html/images/home-1/project/project-02.jpg",
        },
        {
            title: "Business firm",
            image: "https://html.kodesolution.com/2025/finclix-html/images/home-1/project/project-03.jpg",
        },
        {
            title: "Additional Data",
            image: "https://html.kodesolution.com/2025/finclix-html/images/home-1/project/project-02.jpg",
        },
    ];

    return (

        <div>
            <div
                className="first w-full min-h-screen relative bg-cover bg-center"
                style={{ backgroundImage: `url(${heroimg})` }}
            >
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>

                {/* Main Content */}
                <div className="relative z-10 flex flex-col justify-center items-center text-white px-4 py-16 sm:py-20 lg:py-32">
                    {/* Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold leading-snug sm:leading-tight">
                        <Typewriter
                            words={['WELCOME TO SILVERWINK IT SOLUTIONS']}
                            cursor
                            cursorStyle=""
                            typeSpeed={50}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h1>

                    {/* Box Reveal on Scroll */}
                    {showBox && (
                        <ScrollReveal className="bg-white/10 backdrop-blur-md w-full max-w-4xl mt-10 space-y-5 px-6 sm:px-10 py-10 rounded-2xl text-center text-white">

                            {/* Highlight Box */}
                            {/* Highlight Box */}
                            <div className="w-fit mx-auto text-white transition-all duration-200 cursor-pointer hover:scale-101 hover:shadow-2xl shadow-stone-700 hover:border-white px-3 sm:px-6 py-2 rounded-full border border-gray-500 flex items-center gap-2 sm:gap-4">
                                {/* Icon Box */}
                                <span className="p-2 sm:px-4 sm:py-3 rounded-full border bg-gradient-to-r from-[#0f2027] to-[#2c5364] text-green-400 flex items-center justify-center">
                                    <BsLightningChargeFill size={16} />
                                </span>

                                {/* Text */}
                                <span className="text-base sm:text-xl font-medium whitespace-nowrap">
                                    Reliable And Fast Solutions
                                </span>
                            </div>


                            {/* Tagline */}
                            <div className="text-2xl sm:text-3xl lg:text-5xl text-center mt-3 px-4">
                                Empower your Business with Our Solutions.
                            </div>

                            {/* Description */}
                            <div className="text-base sm:text-lg mt-4 px-4">
                                Everyone with high and useful reward for his/her trading, purchase and investment. Our goal is to make the
                            </div>

                            {/* Button */}
                            <div className="border border-gray-600 bg-[#132730] hover:shadow-2xl hover:bg-[#167e4a] hover:border-white hover:scale-105 duration-200 group rounded-full flex items-center justify-center gap-2 sm:gap-4 mt-10 w-fit mx-auto px-4 sm:px-6 py-2 sm:py-3">

                                {/* Button Text */}
                                <span className="text-base sm:text-xl md:text-2xl font-semibold whitespace-nowrap">
                                    Let’s Talk With Us
                                </span>

                                {/* Arrow Icon Box */}
                                <span className="rotate-135 border border-gray-600 bg-[#167e4a] group-hover:border-white group-hover:bg-[#132730] group-hover:rotate-180 transition-all duration-300 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                                    <FaArrowLeftLong size={20} className="sm:size-[24px]" />
                                </span>
                            </div>

                        </ScrollReveal>
                    )}
                </div>
            </div>

            <div className="second px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row gap-6 py-10">

                {/* Left Card */}
                <ScrollReveal delay={0.2} className="flex-1 h-96 bg-[#e4f4f2] py-4 px-6 rounded-xl">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-left">
                        Providing the Best Business Solutions
                    </div>

                    {/* Clients Image Row */}
                    <div className="flex mt-6 sm:mt-8 xl:mt-16 gap-3 sm:gap-4">
                        <img className="w-10 sm:w-12 md:w-14 rounded-full" src={client1} alt="" />
                        <img className="w-10 sm:w-12 md:w-14 rounded-full" src={client2} alt="" />
                        <img className="w-10 sm:w-12 md:w-14 rounded-full" src={client3} alt="" />
                        <img className="w-10 sm:w-12 md:w-14 rounded-full" src={client4} alt="" />
                    </div>

                    {/* Star Rating */}
                    <div className="mt-12 xl:mt-16 flex gap-1 items-center">
                        <MdOutlineStar size={20} color="gold" />
                        <MdOutlineStar size={20} color="gold" />
                        <MdOutlineStar size={20} color="gold" />
                        <MdOutlineStar size={20} color="gold" />
                        <MdOutlineStar size={20} color="gold" />
                        <span className="font-bold ml-1 text-sm sm:text-base">(4.9)</span>
                    </div>
                </ScrollReveal>

                {/* Middle Card */}
                <ScrollReveal delay={0.5} className="flex-1 h-96 flex flex-col overflow-hidden rounded-xl">
                    <div className="h-1/2 bg-black overflow-hidden">
                        <img className="w-full h-full object-cover xl:object-top-right" src={meeting1} alt="" />
                    </div>
                    <div className="h-1/2 bg-[#144443] text-white px-4 sm:px-6 md:px-8 lg:px-10">
                        <h1 className="text-2xl sm:text-3xl font-semibold pt-4">Consultancy</h1>
                        <p className="text-base sm:text-lg py-3">
                            everyone with high and useful reward for his/her trading,
                        </p>
                    </div>
                </ScrollReveal>

                {/* Right Card */}
                <ScrollReveal delay={0.8} className="flex-1 h-96 flex flex-col overflow-hidden rounded-xl">
                    <div className="h-1/2 bg-[#144443] text-white px-4 sm:px-6 md:px-8 lg:px-10 py-4">
                        <h1 className="text-2xl sm:text-3xl font-semibold">Business Mentor</h1>
                        <p className="text-base sm:text-lg mt-2 sm:mt-4">
                            everyone with high and useful reward for his/her trading,
                        </p>
                    </div>
                    <div className="h-1/2 overflow-hidden">
                        <img className="w-full h-full object-cover xl:object-bottom-left" src={meeting2} alt="" />
                    </div>
                </ScrollReveal>

            </div>

            <div className="third px-6 md:px-12 lg:px-16 xl:px-20 py-12 flex flex-col justify-between md:flex-row gap-6 items-center min-h-[105vh] max-w-[1300px] mx-auto">

                {/* Left Image */}
                <ScrollReveal direction="right" className="flex-1 max-w-full">
                    <img src={aboutimg} alt="About" className="w-full h-auto object-cover rounded-xl" />
                </ScrollReveal>

                {/* Right Content */}
                <ScrollReveal direction="left" className="flex-1 space-y-6 px-4 sm:px-6 md:px-10 min-h-[90vh] flex flex-col items-center md:items-start text-center md:text-left">

                    {/* Who We Are */}
                    <ScrollReveal direction='left' delay={0.1} className="flex justify-center lg:justify-start items-center gap-3 mt-10 md:mt-0">
                        <span className="text-[#113c3d]"><IoDiamondSharp size={28} /></span>
                        <span className="text-gray-500 text-sm sm:text-base uppercase tracking-wide">Who We Are</span>
                    </ScrollReveal>

                    {/* Heading */}
                    <ScrollReveal direction='left' delay={0.2} className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#0b3130] leading-tight">
                        Increase your money systematically
                    </ScrollReveal>

                    {/* Icon + Text Row */}
                    <ScrollReveal direction='left' delay={0.3} className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 mt-6 py-2">
                        <span className="hover:scale-110 transition-transform duration-200 cursor-pointer bg-gradient-to-r from-[#b8e96d] to-[#0a9695] w-28 h-16 flex justify-center items-center rounded-full">
                            <RiBriefcase2Line size={30} className="text-white" />
                        </span>
                        <p className="text-xl underline text-[#0b3130] max-w-xl px-4 sm:px-0">
                            Everyone with high and useful reward for his/her trading, purchase and investment
                        </p>
                    </ScrollReveal>

                    {/* Description Paragraph */}
                    <ScrollReveal delay={0.4} direction='left' className="text-gray-500 mt-8 max-w-xl leading-relaxed">
                        Everyone with high and useful reward for his/her trading, purchase and investment. Our goal is to make the...
                    </ScrollReveal>

                    {/* Points + 25+ Box container */}
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-8 mt-12 w-full">

                        {/* Points List */}
                        {/* Points List */}
                        <ScrollReveal
                            delay={0.5}
                            direction='left'
                            className="w-full sm:w-72 space-y-3 text-[#0b3130] text-center sm:text-left mx-auto"
                        >
                            <p className="text-lg flex justify-center sm:justify-start items-center gap-3">
                                <FaCheckCircle className="text-[#0a9695]" /> Protecting your company
                            </p>
                            <p className="text-lg flex justify-center sm:justify-start items-center gap-3">
                                <FaCheckCircle className="text-[#0a9695]" /> We offer you solutions
                            </p>
                            <p className="text-lg flex justify-center sm:justify-start items-center gap-3">
                                <FaCheckCircle className="text-[#0a9695]" /> We take care of you
                            </p>
                            <p className="text-lg flex justify-center sm:justify-start items-center gap-3">
                                <FaCheckCircle className="text-[#0a9695]" /> Everyone with high
                            </p>
                        </ScrollReveal>


                        {/* 25+ Years Box */}
                        <ScrollReveal delay={0.6} direction="left" style={{ minWidth: '180px', maxWidth: '180px' }}>
                            <div className="bg-gradient-to-r from-[#b8e96d] to-[#0a9695] text-white px-14 py-6 rounded-2xl cursor-pointer hover:scale-110 transition-transform duration-300">
                                <h1 className="text-5xl font-bold text-center">25 +</h1>
                                <div className="text-xl w-full text-center">Years of Experience</div>
                            </div>
                        </ScrollReveal>
                    </div>

                </ScrollReveal>
            </div>

            <div className="fourth flex flex-wrap justify-center items-center gap-8 px-4 sm:px-8 md:px-16 py-12 bg-white text-[#0b3130]">
                {/* 1 */}
                <ScrollReveal delay={0.1} >
                    <div className="w-72 h-72 rounded-full border border-gray-400 shadow-md flex flex-col justify-center items-center text-center p-6 transition-transform duration-300 hover:scale-105">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
                            <ScrollCountUp end={1} duration={5} suffix="M" />
                        </h1>
                        <p className="mt-4 text-base sm:text-lg font-medium w-40">Worldwide Business Grow</p>
                    </div>
                </ScrollReveal>

                {/* 2 */}
                <ScrollReveal delay={0.2} >
                    <div className="w-72 h-72 rounded-full border border-gray-400 shadow-md flex flex-col justify-center items-center text-center p-6 transition-transform duration-300 hover:scale-105" >
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
                            <ScrollCountUp end={12} duration={5} suffix="K+" />
                        </h1>
                        <p className="mt-4 text-base sm:text-lg font-medium w-40">Satisfied Clients</p>
                    </div>

                </ScrollReveal>

                {/* 3 */}
                <ScrollReveal delay={0.3}>
                    <div className="w-72 h-72 rounded-full border border-gray-400 shadow-md flex flex-col justify-center items-center text-center p-6 transition-transform duration-300 hover:scale-105">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
                            <ScrollCountUp end={119} duration={5} suffix="M" />
                        </h1>
                        <p className="mt-4 text-base sm:text-lg font-medium w-40">Countries Served</p>
                    </div>
                </ScrollReveal>

                {/* 4 */}
                <ScrollReveal delay={0.8} >
                    <div className="w-72 h-72 rounded-full border border-gray-400 shadow-md flex flex-col justify-center items-center text-center p-6 transition-transform duration-300 hover:scale-105">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
                            <ScrollCountUp end={33} duration={5} />
                        </h1>
                        <p className="mt-4 text-base sm:text-lg font-medium w-40">Award Winning Contests</p>
                    </div>
                </ScrollReveal>
            </div>

            <ScrollReveal className="fifth rounded-3xl w-[97%] max-w-[1300px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 py-16 bg-gradient-to-r from-[#578451] to-[#144443] min-h-screen">

                {/* Header Section */}
                <ScrollReveal className="flex flex-col md:flex-row justify-between h-1/2 mb-10 md:mb-16">
                    {/* Left Text */}
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <p className="flex items-center gap-3 text-white text-sm sm:text-base font-semibold uppercase tracking-wider">
                            <span className="text-green-900"><FaArrowRight size={25} /></span>
                            LATEST SERVICES
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-6 md:mt-12 leading-tight text-white">
                            Guidance for Personal and Professional Growth.
                        </h1>
                    </div>

                    {/* Right Number Section */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-end">
                        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white leading-none">5K+</h1>
                        <p className="text-xl sm:text-2xl text-white mt-2">Satisfied Clients</p>
                    </div>
                </ScrollReveal>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">

                    <ScrollReveal delay={0.1}>
                        <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-[8px] rounded-3xl px-6 py-6 text-white border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.015] hover:shadow-[0_0_25px_rgba(0,255,200,0.15)] cursor-pointer h-full flex flex-col">
                            <div className="mb-4"><FaNfcDirectional size={50} /></div>
                            <h1 className="text-2xl font-semibold mb-3">Business Consulting</h1>
                            <p className="text-gray-300 flex-grow">
                                We promise cost-effective business consulting solutions designed to help you lower expenses and boost profits.
                            </p>
                            <div className="mt-6 flex justify-start">
                                <span className="inline-block rotate-[-35deg] transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-1">
                                    <FaArrowRightLong size={30} />
                                </span>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-[8px] rounded-3xl px-6 py-6 text-white border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.015] hover:shadow-[0_0_25px_rgba(0,255,200,0.15)] cursor-pointer h-full flex flex-col">
                            <div className="mb-4"><FaNfcDirectional size={50} /></div>
                            <h1 className="text-2xl font-semibold mb-3">Business Consulting</h1>
                            <p className="text-gray-300 flex-grow">
                                We promise cost-effective business consulting solutions designed to help you lower expenses and boost profits.
                            </p>
                            <div className="mt-6 flex justify-start">
                                <span className="inline-block rotate-[-35deg] transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-1">
                                    <FaArrowRightLong size={30} />
                                </span>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-[8px] rounded-3xl px-6 py-6 text-white border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.015] hover:shadow-[0_0_25px_rgba(0,255,200,0.15)] cursor-pointer h-full flex flex-col">
                            <div className="mb-4"><FaNfcDirectional size={50} /></div>
                            <h1 className="text-2xl font-semibold mb-3">Business Consulting</h1>
                            <p className="text-gray-300 flex-grow">
                                We promise cost-effective business consulting solutions designed to help you lower expenses and boost profits.
                            </p>
                            <div className="mt-6 flex justify-start">
                                <span className="inline-block rotate-[-35deg] transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-1">
                                    <FaArrowRightLong size={30} />
                                </span>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-[8px] rounded-3xl px-6 py-6 text-white border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.015] hover:shadow-[0_0_25px_rgba(0,255,200,0.15)] cursor-pointer h-full flex flex-col">
                            <div className="mb-4"><FaNfcDirectional size={50} /></div>
                            <h1 className="text-2xl font-semibold mb-3">Business Consulting</h1>
                            <p className="text-gray-300 flex-grow">
                                We promise cost-effective business consulting solutions designed to help you lower expenses and boost profits.
                            </p>
                            <div className="mt-6 flex justify-start">
                                <span className="inline-block rotate-[-35deg] transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-1">
                                    <FaArrowRightLong size={30} />
                                </span>
                            </div>
                        </div>
                    </ScrollReveal>

                </div>
            </ScrollReveal>

            <div className=' h-[60vh] py-10 px-4 w-[97%] mx-auto'>
                <AutoSlider slides={cards} />
            </div>
        </div>
    )
}

export default Hero