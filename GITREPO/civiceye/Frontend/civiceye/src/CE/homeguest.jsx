import React, { useEffect, useRef } from 'react';
import por from '../assets/porsche.jpg';
import celogofull from '../assets/celogofull.png';
import tick from '../assets/tick.png';
import reports from '../assets/reports.png';
import prize from '../assets/prize.png';
import law from '../assets/law.png';
import mail from '../assets/mail.png';
import call from '../assets/call.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export const Homeguest = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: 'ease-in-out', once: true });
  }, []);
  const contactRef = useRef(null);
  const scrollToContact = (e) => {
    e.preventDefault();
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="mx-auto flex justify-between items-center h-20 px-4 sm:px-20">
          <img src={celogofull} width="200" height="80" alt="CivicEye" className="w-40 sm:w-48" />
          <ul className="flex items-center space-x-4 sm:space-x-10">
            <li><a href="#" className="text-black font-bold hover:text-blue-600">Home</a></li>
            <li><a href="#" className="text-black font-bold hover:text-blue-600">My Complaints</a></li>
            <li><a href="#" className="text-black font-bold hover:text-blue-600">About</a></li>
            <li><a href="#" onClick={scrollToContact} className="text-black font-bold hover:text-blue-600">Contact</a></li>
          </ul>
          <Link to='/' className="bg-blue-500 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-bold hover:bg-blue-600">Login</Link>
        </div>
      </nav>

      {/* Carousel Section */}
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={2000} className="h-[50vh]">
        <div>
          <img src={por} alt="Porsche" className="w-full object-cover h-[50vh]" />
        </div>
        <div>
          <img src={por} alt="Porsche" className="w-full object-cover h-[50vh]" />
        </div>
        <div>
          <img src={por} alt="Porsche" className="w-full object-cover h-[50vh]" />
        </div>
      </Carousel>

      {/* Register Complaints Section */}
      <section className="bg-black text-white p-10 text-center" data-aos="fade-up">
        <h2 className="text-3xl sm:text-5xl mb-5">Make your voice heard! Report Problems, Help Your City, and Earn Rewards!</h2>
        <Link to="/signup">
          <button className="bg-blue-500 px-6 py-2 rounded-lg font-bold hover:bg-blue-600 transition duration-300">Sign Up</button>
        </Link>
      </section>

      {/* Complaint Reports Section */}
      <section className="w-full mx-auto py-10 space-y-10">
        <div className="bg-white mx-4 sm:mx-40 p-6 sm:p-10 rounded-lg shadow-2xl" data-aos="zoom-in">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Complaint Reports</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white py-10 sm:py-20 cursor-pointer hover:bg-blue-200 rounded-lg shadow text-center">
              <img src={tick} alt="Complaints Registered" className="mx-auto mb-4" width={100} />
              <h3 className="text-xl font-bold">Complaints Registered</h3>
              <p className="text-3xl font-semibold">1002</p>
            </div>
            <div className="bg-white py-10 sm:py-20 cursor-pointer hover:bg-blue-200 rounded-lg shadow text-center">
              <img src={reports} alt="Reports Filed" className="mx-auto mb-4" width={100} />
              <h3 className="text-xl font-bold">Reports Filed</h3>
              <p className="text-3xl font-semibold">992</p>
            </div>
            <div className="bg-white py-10 sm:py-20 cursor-pointer hover:bg-blue-200 rounded-lg shadow text-center">
              <img src={prize} alt="Rewards Distributed" className="mx-auto mb-4" width={100} />
              <h3 className="text-xl font-bold">Rewards Distributed</h3>
              <p className="text-3xl font-semibold">886</p>
            </div>
            <div className="bg-white py-10 sm:py-20 cursor-pointer hover:bg-blue-200 rounded-lg shadow text-center">
              <img src={law} alt="Impact Made" className="mx-auto mb-4" width={100} />
              <h3 className="text-xl font-bold">Impact Made</h3>
              <p className="text-3xl font-semibold">695</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-8 mx-4 sm:mx-40" data-aos="fade-right">
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
      </section>

      {/* Testimonials and Contact Section */}
      <section className="py-16" data-aos="fade-up">
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">What our users have to say</h2>
  
  {/* Carousel for Testimonials */}
  <Carousel
    showArrows={true} // Show navigation arrows
    showStatus={false} // Hide status indicator
    showThumbs={false} // Hide thumbnail navigation
    infiniteLoop={true} // Enable infinite loop
    autoPlay={true} // Enable auto-play
    interval={2000} // Auto-play interval in milliseconds
    stopOnHover={true} // Pause on hover
    className="w-full max-w-4xl mx-auto" // Adjust width and center the carousel
  >
    {/* Testimonial 1 */}
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full sm:w-2/4 mx-auto">
      <p className="text-lg font-semibold mb-2">"This is an awesome website. Simplifies the complaint registration process."</p>
      <p className="text-gray-600">- Joimon</p>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-white p-6 sm:p-5 rounded-lg shadow-lg w-full sm:w-1/3 mx-auto">
      <p className="text-lg font-semibold mb-2">"Great platform for civic engagement. Highly recommended!"</p>
      <p className="text-gray-600">- Jane Doe</p>
    </div>

    {/* Add more testimonials as needed */}
  </Carousel>
</section>

        {/* Feedback Form */}
        <div className="flex justify-center mb-16">
          <div className="w-full sm:w-2/3 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            <textarea className="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none" placeholder="Write your feedback"></textarea>
            <button className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-lg hover:bg-blue-600 transition duration-300">Submit</button>
          </div>
        </div>

        {/* Contact Info Section */}
        <div ref={contactRef} id="contact" className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-4 sm:mx-40">
          <div className="bg-white p-6 sm:p-10 rounded-lg shadow-lg text-center">
            <img src={mail} alt="Support Mail" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Support Mail</h3>
            <p className="text-gray-600 mb-4">For assistance, feel free to reach out.</p>
            <p className="text-blue-600 font-semibold">support@civiceye.com</p>
          </div>
          <div className="bg-white p-6 sm:p-10 rounded-lg shadow-lg text-center">
            <img src={call} alt="Make A Call" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Make A Call</h3>
            <p className="text-gray-600 mb-4">For assistance, feel free to reach out.</p>
            <p className="text-blue-600 font-semibold">+123 456 7890</p>
          </div>
        </div>
      

        <div className="bg-black text-white py-10">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 px-4 sm:px-20">
    {/* Phone Numbers Section */}
    <div>
      <h3 className="text-xl font-semibold border-l-4 border-blue-500 pl-2 mb-4">Phone Numbers</h3>
      <ul className="space-y-2">
        <li>(123) 456-7890</li>
        <li>(123) 456-7540</li>
      </ul>
    </div>

    {/* Contact Info Section */}
    <div>
      <h3 className="text-xl font-semibold border-l-4 border-blue-500 pl-2 mb-4">Contact Info</h3>
      <ul className="space-y-2">
        <li>📍 Softronics</li>
        <li>📞 (+12) 34-5678</li>
        <li>✉️ Softronics@gmail.com</li>
      </ul>
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

  {/* Copyright Section */}
  <div className="text-center mt-10 text-gray-400">
    © CivicEye 2025 | Empowering Citizens, Improving Communities.
  </div>
</div>
    </div>
  );
} 