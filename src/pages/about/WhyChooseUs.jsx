import React from 'react';

// images import
import service1 from '../../assets/img/home/service-web.png';
import service2 from '../../assets/img/home/service-logo.png';
import service3 from '../../assets/img/home/service-app.png';
import service4 from '../../assets/img/home/service-ui-ux.png';

export default function ServiceSection() {
  return (
    <section className="home-service lg:py-24 py-16 relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[380px]
      before:bg-contain before:z-[-1]">
      <div className="container max-w-6xl mx-auto px-2">
        <div className='mb-14'>
          <p className="uppercase text-pink text-center mb-3">we are awesome</p>
          <h2 className="text-blue font-semibold text-4xl font-poppins text-center">Why Choose Us</h2>
        </div>
        <div className="grid lg:grid-cols-[1fr_1fr_1fr_1fr] grid-cols-1 gap-6">
          <div className='card text-center px-6 pt-10 pb-8 shadow-md rounded-lg'>
            <div>
              <img src={ service1 } alt="service" className="w-24 h-auto mb-10 mx-auto" />
            </div>
            <h4 className='font-semibold text-blue text-2xl leading-8 font-poppins mb-3'>Network Services</h4>
            <p className='mb-5'>From small single office networks or a multi-site Enterprise solution, our network consultants will consult with you, determine your needs and implement an efficient and cost effective solution.</p>
            <p>
              <a href="#fd" className='flex items-center justify-center font-medium font-poppins'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </p>
          </div>

          <div className='card text-center px-6 pt-10 pb-8 shadow-md rounded-lg'>
            <div>
              <img src={ service2 } alt="service" className="w-24 h-auto mb-10 mx-auto" />
            </div>
            <h4 className='font-semibold text-blue text-2xl leading-8 font-poppins mb-3'>Design & Development Services</h4>
            <p className='mb-5'>When it comes to website development needs, we understand every client is different. Our solutions are based on a thorough understanding of your needs including your intended audience, member services, technical staff, maintenance requirements and web site budget. Our goal is to deliver a website that meets your needs, not ours.</p>
            <p>
              <a href="#fd" className='flex items-center justify-center font-medium font-poppins'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </p>
          </div>

          <div className='card text-center px-6 pt-10 pb-8 shadow-md rounded-lg'>
            <div>
              <img src={ service3 } alt="service" className="w-24 h-auto mb-10 mx-auto" />
            </div>
            <h4 className='font-semibold text-blue text-2xl leading-8 font-poppins mb-3'>Managed Cloud Hosting</h4>
            <p className='mb-5'>We specialize in site hosting for banks and credit unions who want reliable, high quality, high-touch and personalized service. We understand the need for SSAE 16 Type II audited data centers for financial institutions and maintain this designation. </p>
            <p>
              <a href="#fd" className='flex items-center justify-center font-medium font-poppins'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </p>
          </div>
          
          <div className='card text-center px-6 pt-10 pb-8 shadow-md rounded-lg'>
            <div>
              <img src={ service4 } alt="service" className="w-24 h-auto mb-10 mx-auto" />
            </div>
            <h4 className='font-semibold text-blue text-2xl leading-8 font-poppins mb-3'>IT Consulting</h4>
            <p className='mb-5'>We offer consulting services in Information Technology for addressing organizational and business needs. These services include IT strategy development, budgeting, organizational structure, Information security and IT management. </p>
            <p>
              <a href="#fd" className='flex items-center justify-center font-medium font-poppins'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
