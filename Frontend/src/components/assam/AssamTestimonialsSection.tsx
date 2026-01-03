import React, { useState, useEffect } from 'react';
import BikramSaikiaImage from '../../assets/images/Bikram Saikia.webp';
import MadhurimaDasImage from '../../assets/images/Madhurima Das.webp';
import ManjitBaruahImage from '../../assets/images/Manjit Baruah.webp';
import PranabHazarikaImage from '../../assets/images/Pranab Hazarika.webp';
import RituparnaGogoiImage from '../../assets/images/Rituparna Gogoi.webp';

export const AssamTestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      name: 'Bikram Saikia',
      designation: 'Community Volunteer, Guwahati',
      image: BikramSaikiaImage,
      rating: 4.7,
      text: 'While supporting local development initiatives, having clear access to public information is essential. This platform helped us move forward with better clarity and coordination. The team was responsive and guided us through every step, making the RTI filing process smooth and hassle-free. We successfully obtained the information we needed to advance our community projects.'
    },
    {
      name: 'Madhurima Das',
      designation: 'Education Support Worker, Nagaon',
      image: MadhurimaDasImage,
      rating: 4.6,
      text: 'For community-level education matters, understanding the correct process can be challenging. The guidance available here made it easier to proceed and stay informed. The platform\'s user-friendly interface and expert support helped us file multiple RTI applications for school-related information without any difficulties. Highly recommended for anyone working in the education sector.'
    },
    {
      name: 'Manjit Baruah',
      designation: 'Local Business Representative, Dibrugarh',
      image: ManjitBaruahImage,
      rating: 4.8,
      text: 'Addressing civic and administrative concerns requires effective communication with public offices. This service helped streamline that interaction and supported our community work. The professional approach and timely responses made a significant difference in resolving our business-related queries with government departments. The tracking system kept us updated throughout the process.'
    },
    {
      name: 'Pranab Hazarika',
      designation: 'Social Development Coordinator, Jorhat',
      image: PranabHazarikaImage,
      rating: 4.9,
      text: 'Managing community-related work requires clear and reliable information. This platform helped us approach public departments with better understanding and confidence. The expert assistance in drafting RTI queries ensured we received comprehensive responses. The service saved us valuable time and resources, allowing us to focus more on our development initiatives.'
    },
    {
      name: 'Rituparna Gogoi',
      designation: 'Community Outreach Worker, Sivasagar',
      image: RituparnaGogoiImage,
      rating: 4.7,
      text: 'While working closely with local residents, having clear guidance makes a real difference. This platform supported our efforts by making processes easier to understand. The support team was always available to answer our questions, and the step-by-step assistance helped us successfully file RTI applications for various community welfare schemes. This service has become an essential tool in our outreach work.'
    }
  ];

  const nextTestimonial = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsAnimating(false);
    }, 150);
  };

  const prevTestimonial = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 150);
  };

  const goToTestimonial = (index: number) => {
    if (index !== currentIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
      }, 150);
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-primary-50 pt-6 pb-12 md:pt-8 md:pb-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <h2 className="mb-2 text-2xl md:text-3xl font-semibold text-gray-900">
            50,000+ CITIZENS TRUST US
          </h2>
          <div className="mx-auto h-1 w-24 bg-yellow-500"></div>
        </div>

        <div className="relative">
          {/* Testimonial Card */}
          <div className={`bg-white p-6 md:p-8 rounded-xl shadow-lg relative transition-all duration-300 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* LEFT COLUMN - Avatar & Details (25-30% width) */}
              <div className="flex-shrink-0 lg:w-[30%] flex flex-col items-center lg:items-start">
                {/* Circular Avatar */}
                <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full overflow-hidden mb-3 ring-2 ring-primary-100 bg-gray-100">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '50% 20%' }}
                    loading="lazy"
                  />
                </div>
                
                {/* Name */}
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 text-center lg:text-left">
                  {currentTestimonial.name}
                </h3>
                
                {/* Role & City */}
                <p className="text-sm md:text-base text-gray-600 mb-3 text-center lg:text-left">
                  {currentTestimonial.designation}
                </p>
                
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(currentTestimonial.rating) ? 'text-yellow-500 fill-yellow-500' : i < currentTestimonial.rating ? 'text-yellow-500 fill-yellow-500 opacity-50' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{currentTestimonial.rating}</span>
                </div>
              </div>

              {/* RIGHT COLUMN - Testimonial Text (70-75% width) */}
              <div className="flex-1 lg:w-[70%] relative">
                {/* Opening Quote Icon - Top Left */}
                <div className="absolute top-0 left-0 text-primary-400 text-4xl md:text-5xl font-serif opacity-60 leading-none">
                  "
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed relative z-10 pt-4 lg:pt-0 pl-6 lg:pl-8">
                  {currentTestimonial.text}
                </p>

                {/* Closing Quote Icon - Bottom Right */}
                <div className="absolute bottom-0 right-0 text-primary-400 text-4xl md:text-5xl font-serif transform rotate-180 opacity-60 leading-none">
                  "
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows - Outside card, aligned with content */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 lg:-left-12 top-1/2 -translate-y-1/2 z-20 transition-all duration-300 hover:scale-110 active:scale-95 group hidden lg:flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-8 h-8 text-gray-600 group-hover:text-primary-600 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2 z-20 transition-all duration-300 hover:scale-110 active:scale-95 group hidden lg:flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <svg
              className="w-8 h-8 text-gray-600 group-hover:text-primary-600 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Mobile Navigation Arrows */}
          <div className="flex justify-between items-center mt-6 lg:hidden">
            <button
              onClick={prevTestimonial}
              className="flex items-center justify-center p-2 rounded-full bg-white shadow-md hover:bg-primary-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="flex items-center justify-center p-2 rounded-full bg-white shadow-md hover:bg-primary-50 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`rounded-full transition-all duration-300 hover:scale-125 active:scale-95 ${
                  index === currentIndex 
                    ? 'bg-primary-600 w-10 h-3 shadow-md' 
                    : 'bg-gray-300 hover:bg-primary-400 w-3 h-3'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

