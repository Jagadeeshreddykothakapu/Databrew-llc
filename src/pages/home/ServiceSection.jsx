import React from 'react';
import { Link } from 'react-router-dom';

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
          <p className="uppercase text-pink text-center mb-3">Discover how our services can help your association, financial institution, or professional service firm.</p>
          <p>We offer the core IT services small and medium sized businesses need, which enables us to become your IT department. By outsourcing your IT services to us, you have an experienced group of technology experts as a resource instead of limited staff and knowledge.</p>
        </div>
        <div className="grid lg:grid-cols-[1fr_1fr_1fr_1fr] grid-cols-1 gap-6">
          <div className='card text-center px-6 pt-10 pb-8 shadow-md rounded-lg'>
            <div>
              <img src={ service1 } alt="service" className="w-24 h-auto mb-10 mx-auto" />
            </div>
            <h4 className='font-semibold text-blue text-2xl leading-8 font-poppins mb-3'>Network Services</h4>
            <p className='mb-5'></p>
            <p>
              <Link to="/about" className='flex items-center justify-center font-medium font-poppins'>Learn More
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </p>
          </div>

          <div className='card text-center px-6 pt-10 pb-8 shadow-md rounded-lg'>
            <div>
              <img src={ service2 } alt="service" className="w-24 h-auto mb-10 mx-auto" />
            </div>
            <h4 className='font-semibold text-blue text-2xl leading-8 font-poppins mb-3'>Design & Development Services</h4>
            <p className='mb-5'></p>
            <p>
              <Link to="/contact" className='flex items-center justify-center font-medium font-poppins'>Learn More
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </p>
          </div>

          <div className='card text-center px-6 pt-10 pb-8 shadow-md rounded-lg'>
            <div>
              <img src={ service3 } alt="service" className="w-24 h-auto mb-10 mx-auto" />
            </div>
            <h4 className='font-semibold text-blue text-2xl leading-8 font-poppins mb-3'>Managed Cloud Hosting</h4>
            <p className='mb-5'></p>
            <p>
              <Link to="/contact" className='flex items-center justify-center font-medium font-poppins'>Learn More
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </p>
          </div>
          
          <div className='card text-center px-6 pt-10 pb-8 shadow-md rounded-lg'>
            <div>
              <img src={ service4 } alt="service" className="w-24 h-auto mb-10 mx-auto" />
            </div>
            <h4 className='font-semibold text-blue text-2xl leading-8 font-poppins mb-3'>IT Consulting</h4>
            <p className='mb-5'></p>
            <p>
              <Link to="/contact" className='flex items-center justify-center font-medium font-poppins'>Learn More
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
