import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  
 

  return (
    <>
      {/* Contact Section */}
      <div>
        <Header/>
        <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: 'url(/banner.png)' }}>
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">Cntact</h1>
          <nav className="mt-4 text-sm text-gray-600">
            <ol className="inline-flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-700">Contact</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-black">Get In Touch With Us</h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              For More Information About Our Product & Services, Please Feel Free To Drop Us An Email. 
              Our Staff Will Always Be There To Help You Out. Do Not Hesitate!
            </p>
            </div>

          {/* Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Column (Transparent with Dark Navy Blue Border) */}
            <div className="border-4 border-blue-900 p-8 rounded-lg space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-black">Address</h2>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-black">Phone</h2>
                <p className="text-gray-600">
                  Mobile: +(84) 546-6789<br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-black">Working Time</h2>
                <p className="text-gray-600">
                  Monday-Friday: 9:00 - 22:00<br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
{/* Second Column (Contact Form) */}
<div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <form className="space-y-6" >
                {/* Your Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Abc"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Abc@def.com"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="This is an optional"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                   id="message"
                   placeholder="I'd like to ask about"
                   className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                   required
                 ></textarea>
               </div>

               {/* Submit Button */}
               <button
                 type="submit"
                 className="w-full py-3 border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition"
               >
                 Submit
               </button>
             </form>
           </div>
         </div>
       </div>
     </section>

     {/* Concept Posts Section */}
     <section className="bg-gray-100 text-black py-10">
       <div className="container mx-auto px-4">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
           {/* First Column */}
           <div >
              <h2 className="text-black font-bold text-3xl text-center">High Quality</h2>
              <p className="text-lg text-gray-700">crafted from top materials</p>
            </div>

            {/* Second Column */}
            <div >
              <h2 className="text-black font-bold text-3xl text-center">Warranty Protection</h2>
              <p className="text-lg text-gray-700 text-">Over 2 years</p>
            </div>

            {/* Third Column */}
            <div >
              <h2 className="text-black font-bold text-3xl text-center">Free Shipping</h2>
              <p className="text-lg text-gray-700">Order over 150 $</p>
            </div>
            <div >
              <h2 className="text-black font-bold text-3xl text-center">24 / 7 Support</h2>
              <p className="text-lg text-gray-700">Dedicated support</p>
            </div>

          
          </div>
        </div>
      </section>
      <Footer/>
      </div>
    </>
  );
};

export default Contact;