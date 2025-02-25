import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Complaint } from "./Complaint";

// Import assets
import por from "../assets/porsche.jpg";
import waste from "../assets/waste.png";
import alert from "../assets/alert.png";
import traffic from "../assets/traffic.png";
import others from "../assets/others.png";
import tick from "../assets/tick.png";
import reports from "../assets/reports.png";
import prize from "../assets/prize.png";
import mail from "../assets/mail.png";
import celogofull from "../assets/celogofull.png";
import male from "../assets/male.png";
import call from "../assets/call.png";

export const Reghome = () => {
  const [popup, setPopup] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);  

  const scrollToContact = (e) => {
    e.preventDefault();
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = (e) => {
    e.preventDefault();
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="mx-auto flex justify-between items-center h-20 px-4 sm:px-20">
          <img src={celogofull} width="200" height="80" alt="Civiceye" />
          <ul className="flex items-center space-x-4 sm:space-x-10">
            <li>
              <a href="#" className="text-black font-bold hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black font-bold hover:text-blue-600">
                My Complaints
              </a>
            </li>
            <li>
              <a href="#about"
              onClick={scrollToAbout}
               className="text-black font-bold hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={scrollToContact}
                className="text-black font-bold hover:text-blue-600"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Dropdown Menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdown(!dropdown)}
              className="text-black font-bold hover:text-blue-600 focus:outline-none"
            >
              <img src={male} alt="User Icon" className="w-10 h-10 rounded-full" />
            </button>

            {dropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 py-2 z-50">
                <Link
                  to="/userprofile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropdown(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropdown(false)}
                >
                  Delete Account
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropdown(false)}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <Carousel
        autoPlay
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        interval={3000}
        className="h-[50vh]"
      >
        <div>
          <img src={por} alt="Slide 1" className="w-full object-cover h-[50vh]" />
        </div>
        <div>
          <img src={por} alt="Slide 2" className="w-full object-cover h-[50vh]" />
        </div>
        <div>
          <img src={por} alt="Slide 3" className="w-full object-cover h-[50vh]" />
        </div>
      </Carousel>

      {/* Complaint Popup */}
      {popup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-gray-950/80">
          <div className="relative flex items-center justify-center bg-white p-6 rounded-lg shadow-lg">
            <button
              onClick={() => setPopup(false)}
              className="absolute top-4 right-4 text-3xl text-black hover:text-red-500"
            >
              ✖
            </button>
            <Complaint />
          </div>
        </div>
      )}

      {/* Register Complaints Section */}
      <div className="w-full mx-auto py-10 space-y-10 px-4 sm:px-20">
        <div className="px-6 sm:px-24 py-10 sm:py-20 mx-4 sm:mx-40 rounded-4xl shadow-2xl" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center mb-8">Register Complaints</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <button
              onClick={() => setPopup(true)}
              className="bg-white p-8 cursor-pointer hover:bg-blue-200 rounded-lg shadow-md"
            >
              <div className="flex justify-center">
                <img src={waste} alt="Waste Dumping" />
              </div>
              <p className="text-gray-800 text-center mt-5 font-semibold">Waste Dumping</p>
            </button>
            <button
              onClick={() => setPopup(true)}
              className="bg-white p-8 cursor-pointer hover:bg-blue-200 rounded-lg shadow-md"
            >
              <div className="flex justify-center">
                <img src={alert} alt="Public Nuisance" />
              </div>
              <p className="text-gray-800 text-center mt-5 font-semibold">Public Nuisance</p>
            </button>
            <button
              onClick={() => setPopup(true)}
              className="bg-white p-8 cursor-pointer hover:bg-blue-200 rounded-lg shadow-md"
            >
              <div className="flex justify-center">
                <img src={traffic} alt="Traffic Violations" />
              </div>
              <p className="text-gray-800 text-center mt-5 font-semibold">Traffic Violations</p>
            </button>
            <button
              onClick={() => setPopup(true)}
              className="bg-white p-8 cursor-pointer hover:bg-blue-200 rounded-lg shadow-md"
            >
              <div className="flex justify-center">
                <img src={others} alt="Others" />
              </div>
              <p className="text-gray-800 text-center mt-5 font-semibold">Others</p>
            </button>
          </div>
        </div>
      </div>

      {/* Complaint Reports Section */}
      <div className="bg-white mx-4 sm:mx-40 p-6 sm:p-10 rounded-lg shadow-2xl" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-8">Complaint Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white py-10 sm:py-20 cursor-pointer hover:bg-blue-200 rounded-lg shadow-md">
            <div className="flex justify-center">
              <img src={tick} width={100} alt="Complaints Registered" />
            </div>
            <h3 className="text-xl font-bold text-center">Complaints Registered</h3>
            <p className="text-3xl font-semibold text-center">1002</p>
          </div>
          <div className="bg-white py-10 sm:py-20 cursor-pointer hover:bg-blue-200 rounded-lg shadow-md">
            <div className="flex justify-center">
              <img src={reports} width={100} alt="Reports Filed" />
            </div>
            <h3 className="text-xl font-bold text-center">Reports Filed</h3>
            <p className="text-3xl font-semibold text-center">992</p>
          </div>
          <div className="bg-white py-10 sm:py-20 cursor-pointer hover:bg-blue-200 rounded-lg shadow-md">
            <div className="flex justify-center">
              <img src={prize} width={100} alt="Rewards Distributed" />
            </div>
            <h3 className="text-xl font-bold text-center">Rewards Distributed</h3>
            <p className="text-3xl font-semibold text-center">886</p>
          </div>
        </div>
      </div>

     {/* What We Do Section */}
<section>
  <div ref={aboutRef} className="py-8 mx-4 sm:mx-40" data-aos="fade-right">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">What We Do</h2>
    <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
      <div className="bg-white w-full sm:w-80 border-2 border-blue-500 py-6 px-6 sm:px-10 rounded-lg hover:bg-amber-400 text-center">
        <p className="text-black font-medium">You Register the Complaint</p>
      </div>
      <div className="bg-white w-full sm:w-80 border-2 border-blue-500 py-6 px-6 sm:px-10 rounded-lg hover:bg-amber-400 text-center">
        <p className="text-black font-medium">Our Team Verifies and Shares it to the Responsible Authorities</p>
      </div>
      <div className="bg-white w-full sm:w-80 border-2 border-blue-500 py-6 px-6 sm:px-10 rounded-lg hover:bg-amber-400 text-center">
        <p className="text-black font-medium">The Responsible Authorities Process the Complaint</p>
      </div>
      <div className="bg-white w-full sm:w-80 border-2 border-blue-500 py-6 px-6 sm:px-10 rounded-lg hover:bg-amber-400 text-center">
        <p className="text-black font-medium">Your Incentive is Provided Once the Complaint is Processed</p>
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <div ref={contactRef} id="contact" className="py-16 mx-4 sm:mx-40">
        <h2 className="text-4xl font-bold text-center mb-10" data-aos="fade-up">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center bg-white p-10 rounded-lg shadow-lg" data-aos="fade-up">
            <img src={mail} alt="Support Mail" className="mb-4" />
            <h3 className="text-2xl font-bold mb-2">Support Mail</h3>
            <p className="text-blue-600 font-semibold cursor-pointer">
              support@civiceye.com
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-10 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <img src={call} alt="Make A Call" className="mb-4" />
            <h3 className="text-2xl font-bold mb-2">Make A Call</h3>
            <p className="text-blue-600 font-semibold cursor-pointer">
              +123 456 7890
            </p>
          </div>
        </div>
      </div>

      {/* Feedback Form */}
      <div className="flex justify-center mb-16 px-4 sm:px-0">
        <div className="w-full sm:w-2/3 bg-white p-8 rounded-lg shadow-lg">
          <textarea
            className="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none"
            placeholder="Write your feedback"
          ></textarea>
          <button className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-lg hover:bg-blue-600 transition duration-300">
            Submit
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-white w-full py-10">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-30">
    {/* Phone Numbers Section */}
    <div className="mb-8 md:mb-0">
      <h3 className="text-xl font-semibold border-l-4 border-blue-500 pl-2 mb-4">
        Phone Numbers
      </h3>
      <p className="mb-2">
        <strong>Military</strong>
      </p>
      <p className="mb-1">(123) 456-7890</p>
      <p className="mb-4">(123) 456-7540</p>
      <p className="mb-2">
        <strong>State Police</strong>
      </p>
      <p className="mb-1">(123) 456-7891</p>
      <p className="mb-4">(123) 456-7892</p>
      <p className="mb-2">
        <strong>Fire Department</strong>
      </p>
      <p className="mb-1">(123) 456-7892</p>
    </div>

    {/* Contact Info Section */}
    <div className="mb-8 md:mb-0">
      <h3 className="text-xl font-semibold border-l-4 border-blue-500 pl-2 mb-4">
        Contact Info
      </h3>
      <div className="flex items-center mb-3">
        <span className="mr-2">📍</span>
        <p>Softronics</p>
      </div>
      <div className="flex items-center mb-3">
        <span className="mr-2">📞</span>
        <p>(+12) 34-5678</p>
      </div>
      <div className="flex items-center">
        <span className="mr-2">✉️</span>
        <p>Softronics@gmail.com</p>
      </div>
    </div>

    {/* Quick Links Section */}
    <div>
      <h3 className="text-xl font-semibold border-l-4 border-blue-500 pl-2 mb-4">
        Quick Links
      </h3>
      <ul className="space-y-3">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Complaints
          </a>
        </li>
        <li>
          <Link to="/signup" className="hover:underline">
            Register
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:underline">
            Login
       </Link>
        </li>
      </ul>
    </div>
  </div>

  {/* Footer Copyright */}
  <div className="text-center mt-10 text-gray-400">
    © CivicEye 2025 | Empowering Citizens, Improving Communities.
  </div>
</div>
    </div>
  );
} 