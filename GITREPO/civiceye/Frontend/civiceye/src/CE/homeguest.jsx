import React from 'react';
import por from '../assets/porsche.jpg'
import waste from '../assets/waste.png'
import alert from '../assets/alert.png'
import traffic from '../assets/traffic.png'
import others from '../assets/others.png'
import tick from '../assets/tick.png'
import reports from '../assets/reports.png'
import prize from '../assets/prize.png';
import mail from '../assets/mail.png';
import celogofull from '../assets/celogofull.png'
import male from '../assets/male.png';
import call from '../assets/call.png';
import law from "../assets/law.png";
export const Homeguest = () => {
    return (
        <div class="bg-white ">
         <nav class="bg-white shadow-lg">
          <div class="mx-auto flex justify-between items-center h-20 px-20">
            <img src={celogofull} width="200" height="80" title="Flipkart" />
            <ul class="flex items-center  space-x-35">
              <li class="flex items-center"><a href="#" class="text-black font-bold hover:text-blue-600">Home</a></li>
              <li class="flex items-center"><a href="#" class="text-black font-bold hover:text-blue-600">My Complaints</a></li>
              <li class="flex items-center"><a href="#" class="text-black font-bold hover:text-blue-600">About</a></li>
              <li class="flex items-center"><a href="#" class="text-black font-bold hover:text-blue-600">Contact</a></li>
            </ul>
            <div>
              <button class="bg-blue-500 text-white cursor-pointer px-6 py-2 rounded-lg font-bold hover:bg-blue-600 ">Login</button>
          </div>
          </div>
          
        </nav>
        
        
        
              <div class="relative bg-white text-white">
                <div class="h-100 bg-cover bg-center">
                  <img src={por} alt="porshch" class="w-full h-full object-cover" />
                </div>
              </div>
        
              
                {/* Register Complaints Section */}
                <div class="bg-black gap-y-10 text-white p-10 h-100 flex flex-col items-center justify-center text-center">
    <div class="text-5xl">
        Make your voice heard! Report Problems,Help Your City, and Earn Rewards!
    </div>
    <button class="bg-blue-500 text-white cursor-pointer px-6 py-2 mt-4 rounded-lg font-bold hover:bg-blue-600 transition duration-300">
        Sign up
    </button>
</div>


                
                <div class="w-full  mx-auto py-10 space-y-10">
                {/* Complaint Reports Section */}
                <div class="bg-white mx-40 p-10 rounded-lg shadow-2xl">
                  <div class=" text-center">
                    <h2 class="text-3xl font-bold mb-4">Complaint Reports</h2>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div class="bg-white py-20 h-90 cursor-pointer hover:bg-blue-200 rounded-lg shadow">
                        <div class="flex justify-center">
                          <img src={tick} width={100} alt="Public Nuisance" />
                        </div>
                        <div class="text-xl font-bold">Complaints Registered</div>
                        <p class="text-3xl font-semibold">1002</p>
                      </div>
                      <div class="bg-white py-20 h-90 cursor-pointer hover:bg-blue-200 rounded-lg shadow">
                        <div class="flex justify-center">
                          <img src={reports} width={100} alt="Public Nuisance" />
                        </div>
                        <h3 class="text-xl font-bold">Reports Filed</h3>
                        <p class="text-2xl font-semibold">992</p>
                      </div>
                      <div class="bg-white py-20 h-90 cursor-pointer hover:bg-blue-200 rounded-lg shadow">
                        <div class="flex justify-center">
                          <img src={prize} width={100} alt="Public Nuisance" />
                        </div>
                        <h3 class="text-xl font-bold">Rewards Distributed</h3>
                        <p class="text-2xl font-semibold">886</p>
                        
                      </div>
                      <div class="bg-white py-20 h-90 cursor-pointer hover:bg-blue-200 rounded-lg shadow">
                        <div class="flex justify-center">
                          <img src={law} width={100} alt="Public Nuisance" />
                        </div>
                        <div class="text-xl font-bold">Impact Made</div>
                        <p class="text-3xl font-semibold">695</p>
                      </div>
                    </div>
                  </div>
                </div>
        
                {/* What We Do Section */}
                <div class="py-8 mx-40">
                  <h2 class="text-4xl  font-bold text-center mb-8">What We Do</h2>
                  <div class="flex flex-wrap justify-center gap-8">
                    <div class="bg-white border-2 cursor-pointer w-80 border-[#1fc1ff] py-15 px-10 rounded-lg hover:bg-amber-400">
                      <p class="text-black text-center font-medium">You Register the Complaint</p>
                    </div>
                    <div class="bg-white w-80 border-2  cursor-pointer border-[#1fc1ff] py-15 px-10 rounded-lg hover:bg-amber-400">
                      <p class="text-black text-center font-medium">Our Team Verifies and Shares it to the responsible authorities</p>
                    </div>
                    <div class="bg-white border-2 w-80 cursor-pointer border-[#1fc1ff] py-15 px-10 rounded-lg hover:bg-amber-400">
                      <p class="text-black text-center font-medium">The responsible authorities Process the Complaint</p>
                    </div>
                    <div class="bg-white border-2 w-80 cursor-pointer   border-[#1fc1ff] py-15 px-10 rounded-lg hover:bg-amber-400">
                      <p class="text-black text-center font-medium">Your Incentive is Provided once the complaint is processed </p>
                    </div>
                  </div>
                </div>
        
                {/* Testimonials and Contact Section */}
                <div class=" py-16">
                  <h2 class="text-4xl font-bold text-center mb-10">What our users have to say</h2>
        
                  {/* Testimonials Section */}
                  <div class="flex justify-center space-x-8 mb-10">
                    <div class="bg-white p-8 rounded-lg shadow-lg w-1/3">
                      <p class="text-lg font-semibold mb-2">"This is an awesome website. Simplifies the complaint registration process."</p>
                      <p class="text-gray-600">- Joimon</p>
                    </div>
                    <div class="bg-white p-8 rounded-lg shadow-lg w-1/3">
                      <p class="text-lg font-semibold mb-2">"This is an awesome website. Simplifies the complaint registration process."</p>
                      <p class="text-gray-600">- Joimon</p>
                    </div>
                  </div>
        
                  {/* Feedback Form */}
                  <div class="flex justify-center mb-16">
                    <div class="w-2/3 bg-white p-8 rounded-lg shadow-lg">
                      <textarea class="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none" placeholder="Write your feedback"></textarea>
                      <button class="bg-blue-500 text-white   cursor-pointer px-6 py-2 mt-4 rounded-lg hover:bg-blue-600 transition duration-300">
                        Submit
                      </button>
                    </div>
                  </div>
        
                  {/* Contact Info Section */}
                  <div class="grid mx-40 grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="flex flex-col items-center bg-white p-10 rounded-lg  shadow-lg">
                      <div class="mb-4">
                        <img src={mail} alt="mail" />
                      </div>
                      <h3 class="text-2xl font-bold mb-2">Support Mail</h3>
                      <p class="text-gray-600 mb-4">For any assistance or inquiries, feel free to reach out.</p>
                      <p class="text-blue-600 font-semibold cursor-pointer">support@civiceye.com</p>
                    </div>
        
                    <div class="flex flex-col items-center bg-white p-10 rounded-lg shadow-lg">
                      <div class="mb-4">
                        <img src={call} alt="call" />
                      </div>
                      <h3 class="text-2xl font-bold mb-2">Make A Call</h3>
                      <p class="text-gray-600 mb-4">For immediate assistance, give us a call.</p>
                      <p class="text-blue-600 font-semibold cursor-pointer">+123 456 7890</p>
                    </div>
                  </div>
                </div>
        
                {/* Footer Section */}
               {/* Footer Section */}
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
    )}