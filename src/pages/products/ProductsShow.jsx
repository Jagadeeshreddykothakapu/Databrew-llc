import React from 'react';
import prod1 from '../../assets/img/home/prod-1.jpg';
import prod2 from '../../assets/img/home/prod-2.jpg';
import prod3 from '../../assets/img/home/prod-3.jpg';

export default function ProductsShow() {
  return (
    <section className="lg:py-16 py-8">
      <div className="container max-w-6xl mx-auto px-2">
        <div className="mb-8">
          <p className="text-lg text-gray-700 mb-4">
            For DataBrew LLC, service partnerships are vital for the growth and success of the company. Collaborating with other companies in the industry provides access to new technologies and solutions that can help expand the company's service offerings and stay ahead of the competition. Service partnerships also allow DataBrew LLC to reach new customers and markets that they may not have been able to tap into on their own, and facilitate expertise and knowledge sharing, leading to better solutions and improved customer service. By reducing development costs and increasing credibility, service partnerships help DataBrew LLC build a strong reputation and increase business opportunities. Overall, service partnerships are a key component of DataBrew LLC's strategy to improve its offerings and grow its business.
          </p>
          <p className="text-xl font-semibold text-blue mb-4">
            Our current partnerships and are growing at a rapid pace:
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          <div>
            <a href="#live">
              <img src={prod1} alt="product img" className="w-100 rounded-lg mb-4" />
              <h4 className="text-blue font-semibold text-2xl font-poppins mb-4">Snowflake</h4>
            </a>
          </div>
          <div>
            <a href="#live">
              <img src={prod2} alt="product img" className="w-100 rounded-lg mb-4" />
              
            </a>
          </div>
          <div>
            <a href="#live">
              <img src={prod3} alt="product img" className="w-100 rounded-lg mb-4" />
              
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}