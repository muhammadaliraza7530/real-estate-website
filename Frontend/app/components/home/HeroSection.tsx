// frontend/src/components/home/HeroSection.tsx
'use client';

import Image from 'next/image';
import HeroStats from './HeroStats';
import HeroCards from './HeroCards';
import heroSection from '../../../public/images/home/heroSection.png'

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-gray-900 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-custom relative ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
           

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold text-white leading-tight">
              Discover Your Dream Property with Estatein
            </h1>

            {/* Description */}
            <p className="mt-4 text-md text-gray-600 leading-relaxed">
              Your journey to finding the perfect property begins here. Explore our listings 
              to find the home that matches your dreams.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-transparent border border-white text-white rounded-xl px-3 py-1 group relative overflow-hidden">
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              <button className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-xl px-3 py-2.5 group relative overflow-hidden">
                Browse Properties
                <svg 
                  className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Stats Section */}
            <HeroStats />
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 z-10"></div>
              <Image
                src={heroSection}
                alt="Luxury Modern Property"
                width={600}
                height={500}
                className="object-cover w-full h-auto transform hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

          </div>
        </div>

        {/* Hero Cards Section */}
        <HeroCards />
      </div>
    </section>
  );
};

export default HeroSection;