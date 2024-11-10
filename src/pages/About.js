import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
  };

  return (
    <>
      <div className="w-full max-w-[1280px] h-auto bg-white flex flex-col items-center mx-auto">
        <Header />
        <div className="w-full max-w-[1280px] px-5 py-5">
          <div className="text-center mb-8">
            <div className="text-[#111616] text-[32px] font-bold font-['Plus Jakarta Sans'] leading-10">
              About Us
            </div>
            <p className="text-[#111616] text-base font-normal font-['Plus Jakarta Sans'] leading-normal mt-4">
              <p>The Weather App, developed by Group 4, offers precise and up-to-date weather forecasts to help you plan your day.</p>
              <p>Featuring radar maps and severe weather alerts, our app ensures you stay well-informed about current weather conditions.</p>
            </p>
          </div>
          <div className="flex justify-center mb-8">
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 flex items-center justify-center rounded-full overflow-hidden bg-transparent border border-gray-300">
                <img src="/images/Ilker.jpg" alt="Ilker" className="w-full h-full object-cover" />
                </div>
                <div className="mt-2 text-sm font-medium text-[#111616]">Ilker</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 flex items-center justify-center rounded-full overflow-hidden bg-transparent border border-gray-300">
                <img src="/images/Kaila.jpg" alt="Kaila" className="w-full h-full object-cover" />
                </div>
                <div className="mt-2 text-sm font-medium text-[#111616]">Kaila</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 flex items-center justify-center rounded-full overflow-hidden bg-transparent border border-gray-300">
                <img src="/images/AJi.jpg" alt="AJ" className="w-full h-full object-cover" />
                </div>
                <div className="mt-2 text-sm font-medium text-[#111616]">AJ</div>
              </div>
            </div>
          </div>
          <div className="text-center mb-8">
            <h2 className="text-[#111616] text-[28px] font-bold font-['Plus Jakarta Sans'] leading-8">
              Contact Us
            </h2>
          </div>
          <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 border border-[#dbe2e5] rounded-lg"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="p-3 border border-[#dbe2e5] rounded-lg"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="p-3 border border-[#dbe2e5] rounded-lg"
                rows="4"
                required
              />
              <button
                type="submit"
                className="bg-[#33b2e5] text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}