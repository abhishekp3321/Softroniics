import React from 'react';
import por from '../assets/porsche.jpg';
import waste from '../assets/waste.png';
import alert from '../assets/alert.png';
import traffic from '../assets/traffic.png';
import others from '../assets/others.png';
import tick from '../assets/tick.png';
import reports from '../assets/reports.png';
import prize from '../assets/prize.png';
import mail from '../assets/mail.png';
import celogofull from '../assets/celogofull.png';
import male from '../assets/male.png';
import call from '../assets/call.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Reghome = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="mx-auto flex justify-between items-center h-20 px-20">
          <img src={celogofull} width="200" height="80" alt="Civiceye" />
          <ul className="flex items-center space-x-10">
            <li><a href="#" className="text-black font-bold hover:text-blue-600">Home</a></li>
            <li><a href="#" className="text-black font-bold hover:text-blue-600">My Complaints</a></li>
            <li><a href="#" className="text-black font-bold hover:text-blue-600">About</a></li>
            <li><a href="#" className="text-black font-bold hover:text-blue-600">Contact</a></li>
          </ul>
          <img src={male} alt="User Icon" />
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

      {/* Register Complaints Section */}
      <div className="w-full mx-auto py-10 space-y-10">
        <div className="px-24 py-20 mx-40 rounded-4xl shadow-2xl" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center mb-8">Register Complaints</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { src: waste, label: "Waste Dumping" },
              { src: alert, label: "Public Nuisance" },
              { src: traffic, label: "Traffic Violations" },
              { src: others, label: "Others" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 cursor-pointer hover:bg-blue-200 rounded-lg shadow-md" data-aos="zoom-in">
                <div className="flex justify-center">
                  <img src={item.src} alt={item.label} />
                </div>
                <p className="text-gray-800 text-center mt-5 font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Complaint Reports Section */}
        <div className="bg-white mx-40 p-10 rounded-lg shadow-2xl" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center mb-8">Complaint Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: tick, label: "Complaints Registered", count: "1002" },
              { src: reports, label: "Reports Filed", count: "992" },
              { src: prize, label: "Rewards Distributed", count: "886" }
            ].map((item, index) => (
              <div key={index} className="bg-white py-20 cursor-pointer hover:bg-blue-200 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex justify-center">
                  <img src={item.src} width={100} alt={item.label} />
                </div>
                <h3 className="text-xl font-bold text-center">{item.label}</h3>
                <p className="text-3xl font-semibold text-center">{item.count}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What We Do Section */}
        <div className="py-8 mx-40" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center mb-8">What We Do</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "You Register the Complaint",
              "Our Team Verifies and Shares it to the Responsible Authorities",
              "The Responsible Authorities Process the Complaint",
              "Your Incentive is Provided once the Complaint is Processed"
            ].map((step, index) => (
              <div key={index} className="bg-white border-2 border-[#1fc1ff] py-10 px-6 rounded-lg hover:bg-amber-400" data-aos="fade-up" data-aos-delay={index * 200}>
                <p className="text-black text-center font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="py-16 mx-40">
          <h2 className="text-4xl font-bold text-center mb-10" data-aos="fade-up">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { src: mail, title: "Support Mail", text: "support@civiceye.com" },
              { src: call, title: "Make A Call", text: "+123 456 7890" }
            ].map((contact, index) => (
              <div key={index} className="flex flex-col items-center bg-white p-10 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay={index * 200}>
                <img src={contact.src} alt={contact.title} className="mb-4" />
                <h3 className="text-2xl font-bold mb-2">{contact.title}</h3>
                <p className="text-blue-600 font-semibold cursor-pointer">{contact.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div class="bg-black text-white  w-full py-10">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10 ">
              <div className='px-50'>
                <h3 class="text-xl font-semibold border-l-4  border-blue-500 pl-2 mb-4">Phone Numbers</h3>
                <p class="mb-2"><strong>Military</strong></p>
                <p>(123) 456-7890</p>
                <p>(123) 456-7540</p>
                <p class="mt-4"><strong>State Police</strong></p>
                <p>(123) 456-7891</p>
                <p class="mt-4"><strong>Fire Department</strong></p>
                <p>(123) 456-7892</p>
              </div>

              <div className='px-50'>
                <h3 class="text-xl font-semibold border-l-4 border-blue-500 pl-2 mb-4">Contact Info</h3>
                <div class="flex items-center mb-2">
                  <span class="mr-2">📍</span> <p>Softronics</p>
                </div>
                <div class="flex items-center mb-2">
                  <span class="mr-2">📞</span> <p>(+12) 34-5678</p>
                </div>
                <div class="flex items-center">
                  <span class="mr-2">✉️</span> <p>Softronics@gmail.com</p>
                </div>
              </div>

              <div className='px-50'>
                <h3 class="text-xl font-semibold border-l-4 border-blue-500 pl-2 mb-4">Quick Links</h3>
                <ul class="space-y-2">
                  <li><a href="#" class="hover:underline">Home</a></li>
                  <li><a href="#" class="hover:underline">Complaints</a></li>
                  <li><a href="#" class="hover:underline">Register</a></li>
                  <li><a href="#" class="hover:underline">Login</a></li>
                </ul>
              </div>
            </div>

            <div class="text-center mt-10 text-gray-400">
              © CivicEye 2025 | Empowering Citizens, Improving Communities.
            </div>
          </div>
      </div>
    </div>
  );
};