import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import por from '../assets/porsche.jpg';
import celogofull from '../assets/celogofull.png';
import tick from '../assets/tick.png';
import reports from '../assets/reports.png';
import prize from '../assets/prize.png';
import law from '../assets/law.png';
import mail from '../assets/mail.png';
import call from '../assets/call.png';
import waste from '../assets/waste.png';
import alert from '../assets/alert.png';
import traffic from '../assets/traffic.png';
import others from '../assets/others.png';

export const Homeguest = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    },);

    const contactRef = useRef(null);
    const scrollToContact = (e) => {
        e.preventDefault();
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const aboutRef = useRef(null);
    const scrollToAbout = (e) => {
        e.preventDefault();
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="bg-gray-900 min-h-screen">
            {/* Navbar */}
            <nav className="bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
                <div className="mx-auto flex justify-between items-center h-20 px-4 sm:px-20">
                    <img src={celogofull} width="200" height="80" alt="Civiceye" className="object-contain" />
                    <ul className="hidden md:flex items-center space-x-10">
                        <li>
                            <a href="#" className="text-white font-semibold hover:text-blue-500 transition duration-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white font-semibold hover:text-blue-500 transition duration-300">
                                My Complaints
                            </a>
                        </li>
                        <li>
                            <a href="#about" onClick={scrollToAbout} className="text-white font-semibold hover:text-blue-500 transition duration-300">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={scrollToContact} className="text-white font-semibold hover:text-blue-500 transition duration-300">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition duration-300">
                        Login
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <div className="pt-20">
                {/* Carousel */}
                <Carousel
                    autoPlay
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    interval={5000}
                    className="h-[60vh]"
                >
                    <div>
                        <img src={por} alt="Civic Engagement" className="w-full object-cover h-[60vh]" />
                        <div className="absolute inset-0 flex items-center bg-opacity-40">
                            <div className="container mx-auto px-4 sm:px-20">
                                <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Report Issues in Your Community</h2>
                                <p className="text-xl text-white mb-6">Help create a better environment for everyone</p>
                                <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition duration-300">
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={por} alt="Community Safety" className="w-full object-cover h-[60vh]" />
                        <div className="absolute inset-0 flex items-center bg-opacity-40">
                            <div className="container mx-auto px-4 sm:px-20">
                                <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Building Safer Communities Together</h2>
                                <p className="text-xl text-white mb-6">Your vigilance makes a difference</p>
                                <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition duration-300">
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={por} alt="Civic Responsibility" className="w-full object-cover h-[60vh]" />
                        <div className="absolute inset-0 flex items-center bg-opacity-20">
                            <div className="container mx-auto px-4 sm:px-20">
                                <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Earn Rewards for Civic Responsibility</h2>
                                <p className="text-xl text-white mb-6">Get incentives for making a positive impact</p>
                                <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition duration-300">
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </div>
                </Carousel>

                {/* Register Complaints Section */}
                <div className="w-full mx-auto py-16 space-y-10 px-4 sm:px-20 bg-gray-900">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-4 text-white" data-aos="fade-up">Register Complaints</h2>
                        <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                            Select the type of issue you'd like to report. Your vigilance helps keep our community safe and clean.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="200">
                            <Link to="/signup" className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex justify-center mb-4">
                                    <img src={waste} alt="Waste Dumping" className="w-16 h-16" />
                                </div>
                                <p className="text-white text-center font-semibold">Waste Dumping</p>
                                <p className="text-gray-400 text-center text-sm mt-2">Report illegal waste disposal</p>
                            </Link>
                            <Link to="/signup" className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex justify-center mb-4">
                                    <img src={alert} alt="Public Nuisance" className="w-16 h-16" />
                                </div>
                                <p className="text-white text-center font-semibold">Public Nuisance</p>
                                <p className="text-gray-400 text-center text-sm mt-2">Report disturbances and hazards</p>
                            </Link>
                            <Link to="/signup" className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex justify-center mb-4">
                                    <img src={traffic} alt="Traffic Violations" className="w-16 h-16" />
                                </div>
                                <p className="text-white text-center font-semibold">Traffic Violations</p>
                                <p className="text-gray-400 text-center text-sm mt-2">Report unsafe driving or violations</p>
                            </Link>
                            <Link to="/signup" className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex justify-center mb-4">
                                    <img src={others} alt="Others" className="w-16 h-16" />
                                </div>
                                <p className="text-white text-center font-semibold">Others</p>
                                <p className="text-gray-400 text-center text-sm mt-2">Report other community issues</p>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Statistics Section */}
                <div className="bg-gray-900 py-16 px-4 sm:px-20" data-aos="fade-up">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-4 text-white">Impact Statistics</h2>
                        <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
                            Together we're making a difference in our communities. See the real impact of citizen reports.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                                <div className="flex justify-center mb-6">
                                    <img src={tick} alt="Complaints Registered" className="w-16 h-16" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Complaints Registered</h3>
                                <p className="text-4xl font-bold text-blue-500">1,002</p>
                                <p className="text-gray-400 mt-2">Citizen reports submitted</p>
                            </div>
                            <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                                <div className="flex justify-center mb-6">
                                    <img src={reports} alt="Reports Filed" className="w-16 h-16" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Reports Filed</h3>
                                <p className="text-4xl font-bold text-blue-500">992</p>
                                <p className="text-gray-400 mt-2">Cases processed by authorities</p>
                            </div>
                            <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                                <div className="flex justify-center mb-6">
                                    <img src={prize} alt="Rewards Distributed" className="w-16 h-16" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Rewards Distributed</h3>
                                <p className="text-4xl font-bold text-blue-500">886</p>
                                <p className="text-gray-400 mt-2">Incentives for civic participation</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How It Works Section */}
                <section className="py-16 bg-gray-900">
                    <div ref={aboutRef} id="about" className="max-w-6xl mx-auto px-4 sm:px-20" data-aos="fade-right">
                        <h2 className="text-3xl font-bold text-center mb-4 text-white" data-aos="fade-up">
                            How It Works
                        </h2>
                        <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto" data-aos="fade-up">
                            Our streamlined process makes it easy to report issues and get rewarded for your civic participation.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8">
                            <div className="relative flex flex-col items-center max-w-xs">
                                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                                    1
                                </div>
                                <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center h-full">
                                    <p className="text-white font-medium">
                                        You Register the Complaint
                                    </p>
                                </div>
                            </div>
                            <div className="relative flex flex-col items-center max-w-xs">
                                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                                    2
                                </div>
                                <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center h-full">
                                    <p className="text-white font-medium">
                                        Our Team Verifies and Shares it to the Responsible Authorities
                                    </p>
                                </div>
                            </div>
                            <div className="relative flex flex-col items-center max-w-xs">
                                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                                    3
                                </div>
                                <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center h-full">
                                    <p className="text-white font-medium">
                                        The Responsible Authorities Process the Complaint
                                    </p>
                                </div>
                            </div>
                            <div className="relative flex flex-col items-center max-w-xs">
                                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                                    4
                                </div>
                                <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center h-full">
                                    <p className="text-white font-medium">
                                        Your Incentive is Provided Once the Complaint is Processed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <div ref={contactRef} id="contact" className="py-16 bg-gray-900">
                    <div className="max-w-6xl mx-auto px-4 sm:px-20">
                        <h2 className="text-3xl font-bold text-center mb-4 text-white" data-aos="fade-up">
                            Contact Us
                        </h2>
                        <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto" data-aos="fade-up">
                            Have questions or need assistance? Our support team is here to help.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col items-center bg-gray-800 p-8 rounded-xl shadow-lg" data-aos="fade-up">
                                <div className="bg-blue-900 p-4 rounded-full mb-6">
                                    <img src={mail} alt="Support Mail" className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white">
                                    Support Mail
                                </h3>
                                <p className="text-blue-500 font-medium cursor-pointer hover:underline">
                                    support@civiceye.com
                                </p>
                                <p className="text-gray-400 text-center mt-4">
                                    For general inquiries and support requests
                                </p>
                            </div>
                            <div className="flex flex-col items-center bg-gray-800 p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
                                <div className="bg-blue-900 p-4 rounded-full mb-6">
                                    <img src={call} alt="Make A Call" className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white">
                                    Make A Call
                                </h3>
                                <p className="text-blue-500 font-medium cursor-pointer hover:underline">
                                    +123 456 7890
                                </p>
                                <p className="text-gray-400 text-center mt-4">
                                    Available Monday-Friday, 9am-5pm
                                </p>
                            </div>
                        </div>

                        {/* Feedback Form */}
                        <div className="mt-16 bg-gray-800 p-8 rounded-xl shadow-lg max-w-3xl mx-auto" data-aos="fade-up">
                            <h3 className="text-xl font-bold mb-4 text-white">
                                Send Us Feedback
                            </h3>
                            <p className="text-gray-400 mb-6">
                                We value your opinion and are constantly working to improve our service.
                            </p>
                            <textarea
                                className="w-full h-32 p-4 border border-gray-700 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-gray-900 text-gray-300"
                                placeholder="Write your feedback or suggestions here..."
                            ></textarea>
                            <button className="bg-blue-600 text-white px-6 py-3 mt-4 rounded-lg hover:bg-blue-700 transition duration-300 font-medium">
                                Submit Feedback
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-gray-800 text-white">
                    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Emergency Numbers Section */}
                            <div>
                                <h3 className="text-lg font-semibold border-l-4 border-blue-500 pl-3 mb-6">
                                    Emergency Numbers
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="font-medium text-gray-300 mb-2">Military</p>
                                        <p className="text-gray-400">(123) 456-7890</p>
                                        <p className="text-gray-400">(123) 456-7540</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-300 mb-2">
                                            State Police
                                        </p>
                                        <p className="text-gray-400">(123) 456-7891</p>
                                        <p className="text-gray-400">(123) 456-7892</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-300 mb-2">
                                            Fire Department
                                        </p>
                                        <p className="text-gray-400">(123) 456-7892</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Info Section */}
                            <div>
                                <h3 className="text-lg font-semibold border-l-4 border-blue-500 pl-3 mb-6">
                                    Contact Information
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3 mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <p className="text-gray-400">
                                            Softronics, Techpark, Innovation District
                                        </p>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3 mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                        </span>
                                        <p className="text-gray-400">(+12) 34-5678</p>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3 mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                        </span>
                                        <p className="text-gray-400">Softronics@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Links Section */}
                            <div>
                                <h3 className="text-lg font-semibold border-l-4 border-blue-500 pl-3 mb-6">
                                    Quick Links
                                    </h3>
                                        <ul className="space-y-2">
                                            <li>
                                                <a href="#" className="text-blue-400 hover:text-blue-300">
                                                    Home
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="text-blue-400 hover:text-blue-300">
                                                    About Us
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="text-blue-400 hover:text-blue-300">
                                                    Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="text-blue-400 hover:text-blue-300">
                                                    Contact Us
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="text-center mt-8">
                                    <p className="text-gray-400">
                                        © 2024 Softronics. All rights reserved.
                                    </p>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
        );
}

