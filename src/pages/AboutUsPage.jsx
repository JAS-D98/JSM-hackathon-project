import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import {
  aboutimage1,
  aboutimage2,
  blueWave,
  blueWaveDown,
  coloredimage,
} from "../assets/images";
import Button from "../components/button/Button";
import { Link } from "react-router-dom";

export default function AboutUsPage() {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <>
      <div className="px-20">
        <div className="w-full h-[100vh] flex items-center justify-center pt-20">
          <span className="absolute hidden md:flex md:w-[88%] h-[70%] bg-blackGradient z-10 mx-20 rounded-xl">
            <div className="w-full h-96 flex items-center justify-center flex-col opacity-100">
              <h1 className="font-bold text-3xl md:text-6xl text-primaryWhiteColor ">
                <span className="text-primaryBlueColor">We help you </span>find
                the best <span className="text-primaryBlueColor">schools</span>
              </h1>
              <p className="text-md md:text-2xl text-primaryWhiteColor mt-2">
                Envision a new world of learning with us
              </p>
            </div>
          </span>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            modules={[Autoplay, Pagination]}
            className="mySwiper hidden md:flex"
          >
            <SwiperSlide>
              <div className="w-full h-[70vh] object-cover bg-primaryBlueColor overflow-hidden rounded-xl">
                <img
                  src={coloredimage}
                  alt="chalks"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[70vh] object-cover bg-primaryBlueColor overflow-hidden rounded-xl">
                <img
                  src={aboutimage1}
                  alt="stationary"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[70vh] object-cover bg-primaryBlackColor overflow-hidden rounded-xl">
                <img
                  src={aboutimage2}
                  alt="crayons"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="w-full h-96 flex items-center justify-center flex-col opacity-100 md:hidden text-center">
            <h1 className="font-bold text-3xl md:text-6xl text-primaryBlackColor capitalize">
              <span className="text-primaryBlueColor">We help you </span>find
              the best <span className="text-primaryBlueColor">schools</span>
            </h1>
            <p className="text-md md:text-2xl text-secondaryBlackColor mt-2">
              Envision a new world of learning with us. At Schools Mine, we
              believe every child deserves the best education tailored to their
              unique needs. Our app simplifies the school search process,
              providing comprehensive, up-to-date information on schools near
              you. Whether you’re looking for academic excellence,
              extracurricular activities, or a nurturing environment, we’re here
              to help you find the ideal match for your child's educational
              journey.
            </p>
          </div>
        </div>
      </div>
      <img src={blueWave} alt="image of a wave svg" />
      <div className="bg-primaryBlueColor px-20 flex flex-col md:flex-row">
        <div className="w-full md:mt-0 md:w-1/2 md:text-start flex flex-col items-center">
          <h2 className="text-primaryBlackColor font-bold md:text-4xl">
            GET <span className="text-primaryWhiteColor">TO KNOW</span> Us
          </h2>
          <p className="text-primaryWhiteColor text-sm md:text-xl mt-5">
            We are committed to helping you find your find the perfect
            educational environment and are striving to be your trusted resource
            in securing a bright and successful future for your child. Choose us
            as your go-to source for reliable school information and rankings.
          </p>
        </div>
        <div className="mx-auto justify-center items-center">
          <img
            src={aboutimage1}
            alt="Some stationery"
            className="w-[10em] md:w-[15em] ml-32 shadow-md"
          />
          <img
            src={aboutimage2}
            alt="Some stationery"
            className="w-[10em] md:w-[15em] -mt-32 shadow-md"
          />
        </div>
      </div>
      <img src={blueWaveDown} alt="image of a wave" />
      <div className="px-20">
        <div className="w-full text-center flex flex-col items-center justify-center">
          <h2 className="text-blackGradient  font-bold md:text-4xl">
            Do you have a story to tell?
          </h2>
          <p className="text-blackGradient text-sm md:text-xl mt-4">
            Is there sth you have realized over the course of your career about
            how to get students excited about learning, a strategy you recently
            tried that didn’t quite work out and how you changed / an Aha!
            moment that led you to rethink how you teach a particular
            subject/lesson? If so, you’re in the right place. Write to us a n
            article and we’ll get to showcase it to millions of users.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3 flex-wrap">
            <Link to="/contact-us">
              <Button title="Contact Us" backgroundColor="primaryBlueColor" />
            </Link>
            <Link to="/articles-write">
              <Button
                title="Write An Article"
                backgroundColor="primaryBlueColor"
              />
            </Link>
            <Link to="/schools-register">
              <Button
                title="Register School"
                backgroundColor="primaryBlueColor"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
