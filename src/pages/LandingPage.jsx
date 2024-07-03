import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination,} from 'swiper/modules';

import InputSection from '../components/InputSection/InputSection'
import { Landingsliders } from '../data/LandingPageSlider';
import { wave } from '../assets/images';
import { GiTeacher } from "react-icons/gi";
import CtaCard from '../components/cta/CtaCard';
import { FaSchoolFlag } from "react-icons/fa6";
import { LiaSchoolSolid } from "react-icons/lia";
import { IoSchoolSharp } from "react-icons/io5";


export default function LandingPage() {
  return (
    <>
    <div className='px-20 bg-tertiaryBlueColor'>
      {/* Start of Hero Section */}
      <div className='flex flex-col-reverse justify-center md:flex-row items-center w-full min-h-[100vh] gap-4'>
      <div className='w-full md:w-1/2 text-center md:text-start flex flex-col space-y-5 justify-between items-center md:items-start'>
        <h1 className='uppercase text-2xl md:text-6xl font-bold'>FIND THE <span className='text-primaryBlueColor'>BEST SCHOOLS NEAR</span> YOU</h1>
        <p className='text-md md:text-xl'>Welcome to Schools Mine, your ultimate guide to choosing the best schools for your child or children. At Schools Mine we offer detailed profiles of both public and private schools across the nation. Our mission is to provide a user friendly platform for easy school search and comparison.</p>
        <InputSection formAction="" inputPlaceHolder="Search for a school here" btnTitle="Search School" btnBackground="primaryBlueColor" btnBorder="border" btnfuncWord="" />
      </div>
      <div className='w-full md:w-1/2 rounded overflow-hidden mt-[40%] md:mt-0'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper bg-primaryBlueColor max-h-96 rounded overflow-hidden"
        >
          {Landingsliders.map((slide, i)=>(
            <SwiperSlide className='rounded overflow-hidden max-h-52 md:max-h-96 object-cover'><img src={slide.image} alt={slide.alt} key={i} width="100%" height="100%" className='w-full md:w-auto h-full md:h-auto'/></SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
    </div>
    <img src={wave} alt="image of a wave svg"/>
      {/* End of Hero Section */}

      {/* start of cta section */}
        <div className='w-full text-center'>
          <h2 className='text-primaryBlueColor  font-bold md:text-4xl'>ELEVATE <span className='text-primaryBlackColor'>YOUR</span> LEARNING</h2>
          <p className='text-secondaryBlackColor text-sm md:text-xl'>This platform supports schools of different categories as listed below</p>
        </div>
        <div className='px-20 flex items-center flex-wrap justify-center gap-3 mt-8 md:gap-10'>
       <CtaCard icon={<GiTeacher />} label="Kindergartens"/>
       <CtaCard icon={<LiaSchoolSolid/>} label="Primary Schools"/>
       <CtaCard icon={<FaSchoolFlag />} label="High Schools"/>
       <CtaCard icon={<IoSchoolSharp />} label="Universities"/>
        </div>
      {/* end of cta section */}
    
    </>
  )
}