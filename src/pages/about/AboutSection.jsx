import React from 'react';

// img import
import AboutImg from '../../assets/img/home/about-image.png';

export default function AboutSection() {
  return (
    <section className='home-about lg:py-24 py-12'>
      <div className="container max-w-6xl mx-auto px-2">
        <div className="grid lg:grid-cols-[1fr_1fr] grid-cols-1 gap-5 items-center">
          <div>
              <img src={ AboutImg } alt="about img" className="max-w-full h-auto" />
          </div>
          <div>
            <p className="uppercase text-pink mb-3">About Us</p>
            <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">IT Partner You Can Depend On</h2>
            <p className='mb-8'>
            We hire only the most experienced and qualified IT professionals, help them stay on the leading edge of their areas of expertise, and foster a culture where they can do their best work and advance their careers.
              <br />
              All of our work is performed at our own U.S. locations, meaning that a knowledgeable ATS consultant is always available to assist you — at any hour of the day, every day of the year.
            </p>
            <p className="font-medium font-poppins px-5 py-6 bg-slate-100 border-l-4 border-[#e60072]">
            It is one thing to say that we’re unique, and another to prove it. Contact us at info@databrew-llc.com to find out how we can help you eliminate IT obstacles and achieve your technology vision or explore our services.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
