import React from 'react';
import { motion } from 'framer-motion';
import { useSpring } from 'react-spring';
import bannerImg from '../../assets/img/home/hero-image.png';
import { Link } from 'react-router-dom';

export default function BannerSection() {
  const parallaxProps = useSpring({
    from: { backgroundPositionY: '0%' },
    to: { backgroundPositionY: '100%' },
    config: { mass: 1, tension: 280, friction: 60 },
  });

  return (
    <section
      className="home-banner py-20 min-h-screen relative"
      style={{
        ...parallaxProps,
        backgroundImage: 'linear-gradient(to bottom, #c7ecff 0, #f9efff 100%)',
      }}
     >
      <div className="container max-w-6xl mx-auto relative z-10 px-2">
        <div className="grid grid-cols-[1fr_1fr] items-center gap-5 min-h-[calc(100vh-160px)]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-blue font-bold font-poppins lg:text-3xl text-2xl lg:leading-snug leading-snug mb-8">
              Brewing data to gain actionable insights into performance, security and management to fit in the ever changing IT landscapes
            </h4>
            <p className="lg:text-lg text-base leading-relaxed mb-10">
              Comprehensive Information Security Services for Information
              Intensive Organizations to develop world class solutions to
              provide unparalleled IT consulting services and support to small
              and mid-sized organizations that often have complex IT needs just
              like large organizations, but lack access to high quality
              consulting support. We have proven to be a true IT partner to our
              clients, taking care of their day-to-day IT operations as well as
              strategic and long-term technology planning.
            </p>
            <div>
              <Link
                to="/products"
                className="btn bg-pink text-white font-bold py-2 px-8 rounded-full hover:bg-blue transition-colors duration-300 text-lg"
              >
                View Partnerships
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="lg:block hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={bannerImg}
              alt="banner img"
              className="max-w-full h-auto rounded-3xl shadow-xl ml-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}