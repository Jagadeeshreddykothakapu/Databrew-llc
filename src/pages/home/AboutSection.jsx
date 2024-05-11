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
            <p className="uppercase text-pink mb-3">Why we're unique</p>
            <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">IT Partner You Can Depend On</h2>
            <p className='mb-8'> 
            We are consultants, not just technicians – trusted advisors you can depend on for your critical technology needs. We ask the right questions, understand your unique challenges, and provide tailored, flexible technology solutions that help you run your business more efficiently. We can take care of your day-to-day IT operations, guide you through the complex maze of new and emerging technologies, and assist with planning for your future technology needs.
              <br />
              
            </p>
            <p className="font-medium font-poppins px-5 py-6 bg-slate-100 border-l-4 border-[#e60072]">
            Managing multiple technology vendors is not only stressful but may also lead to a fractured IT vision. We help you focus on your business without getting bogged down by daily IT worries. That is why we offer a comprehensive range of IT services that can take care of all your IT needs - whether it is IT Strategy & Consulting, Network & Managed Services, Web Design & Development, or Managed Hosting & Cloud Solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
