import React, { useEffect } from 'react';
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
import law from '../assets/law.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Homeguest = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="mx-auto flex justify-between items-center h-20 px-20">
          <img src={celogofull} width="200" height="80" alt="CivicEye" />
          <ul className="flex items-center space-x-10">
            <li><a href="#" className="text-black font-bold hover:text-blue-600">Home</a></li>
            <li><a href="#" className="text-black font-bold hover:text-blue-600">My Complaints</a></li>
            <li><a href="#" className="text-black font-bold hover:text-blue-600">About</a></li>
            <li><a href="#" className="text-black font-bold hover:text-blue-600">Contact</a></li>
          </ul>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-600">Login</button>
        </div>
      </nav>

      {/* Carousel Section */}
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={2000} className="h-[50vh]">
        {[...Array(3)].map((_, i) => (
          <div key={i}>
            <img src={por} alt="Porsche" className="w-full object-cover h-[50vh]" />
          </div>
        ))}
      </Carousel>

      {/* Register Complaints Section */}
      <section className="bg-black text-white p-10 text-center" data-aos="fade-up">
        <h2 className="text-5xl mb-5">Make your voice heard! Report Problems, Help Your City, and Earn Rewards!</h2>
        <button className="bg-blue-500 px-6 py-2 rounded-lg font-bold hover:bg-blue-600 transition duration-300">Sign Up</button>
      </section>

      {/* Complaint Reports Section */}
      <section className="w-full mx-auto py-10 space-y-10">
        <div className="bg-white mx-40 p-10 rounded-lg shadow-2xl" data-aos="zoom-in">
          <h2 className="text-3xl font-bold text-center mb-8">Complaint Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { img: tick, title: "Complaints Registered", count: "1002" },
              { img: reports, title: "Reports Filed", count: "992" },
              { img: prize, title: "Rewards Distributed", count: "886" },
              { img: law, title: "Impact Made", count: "695" }
            ].map((item, index) => (
              <div key={index} className="bg-white py-20 cursor-pointer hover:bg-blue-200 rounded-lg shadow text-center">
                <img src={item.img} alt={item.title} className="mx-auto mb-4" width={100} />
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-3xl font-semibold">{item.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-8 mx-40" data-aos="fade-right">
        <h2 className="text-4xl font-bold text-center mb-8">What We Do</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            "You Register the Complaint",
            "Our Team Verifies and Shares it to the Responsible Authorities",
            "The Responsible Authorities Process the Complaint",
            "Your Incentive is Provided Once the Complaint is Processed"
          ].map((text, i) => (
            <div key={i} className="bg-white w-80 border-2 border-blue-500 py-6 px-10 rounded-lg hover:bg-amber-400 text-center">
              <p className="text-black font-medium">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials and Contact Section */}
      <section className="py-16" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-10">What our users have to say</h2>
        <div className="flex justify-center space-x-8 mb-10">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-lg w-1/3">
              <p className="text-lg font-semibold mb-2">"This is an awesome website. Simplifies the complaint registration process."</p>
              <p className="text-gray-600">- Joimon</p>
            </div>
          ))}
        </div>

        {/* Feedback Form */}
        <div className="flex justify-center mb-16">
          <div className="w-2/3 bg-white p-8 rounded-lg shadow-lg">
            <textarea className="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none" placeholder="Write your feedback"></textarea>
            <button className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-lg hover:bg-blue-600 transition duration-300">Submit</button>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-40">
          {[{ img: mail, title: "Support Mail", text: "support@civiceye.com" }, { img: call, title: "Make A Call", text: "+123 456 7890" }].map((contact, i) => (
            <div key={i} className="bg-white p-10 rounded-lg shadow-lg text-center">
              <img src={contact.img} alt={contact.title} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{contact.title}</h3>
              <p className="text-gray-600 mb-4">For assistance, feel free to reach out.</p>
              <p className="text-blue-600 font-semibold">{contact.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-20">
          <FooterSection title="Phone Numbers" content={["(123) 456-7890", "(123) 456-7540"]} />
          <FooterSection title="Contact Info" content={["📍 Softronics", "📞 (+12) 34-5678", "✉️ Softronics@gmail.com"]} />
          <FooterSection title="Quick Links" content={["Home", "Complaints", "Register", "Login"]} />
        </div>
        <div className="text-center mt-10 text-gray-400">© CivicEye 2025 | Empowering Citizens, Improving Communities.</div>
      </footer>
    </div>
  );
};

const FooterSection = ({ title, content }) => (
  <div>
    <h3 className="text-xl font-semibold border-l-4 border-blue-500 pl-2 mb-4">{title}</h3>
    <ul className="space-y-2">
      {content.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);
  