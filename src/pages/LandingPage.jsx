import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import InputSection from "../components/InputSection/InputSection";
import { Landingsliders } from "../data/LandingPageSlider";
import {
  aboutimage1,
  aboutimage2,
  testimonialParent,
  testimonialPrincipal,
  testimonialStudent,
  testimonialTeacher,
  wave,
  waveUp,
} from "../assets/images";
import { GiTeacher } from "react-icons/gi";
import CtaCard from "../components/cta/CtaCard";
import { FaSchoolFlag, FaHandshakeAngle } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import { LiaSchoolSolid } from "react-icons/lia";
import { IoSchoolSharp } from "react-icons/io5";
import Button from "../components/button/Button";
import EvidenceCard from "../components/evidencecard/EvidenceCard";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineGroupAdd } from "react-icons/md";
import TestimonialCard from "../components/testimonial/TestimonialCard";

export default function LandingPage() {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <>
      <div className="px-20 bg-tertiaryBlueColor">
        {/* Start of Hero Section */}
        <div className="flex flex-col-reverse justify-center md:flex-row items-center w-full min-h-[100vh] gap-4">
          <div className="w-full md:w-1/2 text-center md:text-start flex flex-col space-y-5 justify-between items-center md:items-start">
            <h1 className="uppercase text-2xl md:text-6xl font-bold">
              FIND THE{" "}
              <span className="text-primaryBlueColor">BEST SCHOOLS NEAR</span>{" "}
              YOU
            </h1>
            <p className="text-md md:text-xl">
              Welcome to Schools Mine, your ultimate guide to choosing the best
              schools for your child or children. At Schools Mine we offer
              detailed profiles of both public and private schools across the
              nation. Our mission is to provide a user friendly platform for
              easy school search and comparison.
            </p>
            <InputSection
              formAction=""
              inputPlaceHolder="Search for a school here"
              btnMarginTop="0"
              btnTitle="Search School"
              btnBackground="primaryBlueColor"
              btnBorder="border"
              btnfuncWord=""
            />
          </div>
          <div className="w-full md:w-1/2 rounded overflow-hidden mt-[40%] md:mt-0">
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
              {Landingsliders.map((slide, i) => (
                <SwiperSlide className="rounded overflow-hidden max-h-52 md:max-h-96 object-cover">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    key={i}
                    width="100%"
                    height="100%"
                    className="w-full md:w-auto h-full md:h-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <img src={wave} alt="image of a wave svg" />
      {/* End of Hero Section */}

      {/* start of cta section */}
      <div className="w-full text-center">
        <h2 className="text-primaryBlueColor  font-bold md:text-4xl">
          ELEVATE <span className="text-primaryBlackColor">YOUR</span> LEARNING
        </h2>
        <p className="text-secondaryBlackColor text-sm md:text-xl">
          This platform supports schools of different categories as listed below
        </p>
      </div>
      <div className="px-20 flex items-center flex-wrap justify-center gap-3 mt-8 md:gap-10">
        <CtaCard icon={<GiTeacher />} label="Kindergartens" />
        <CtaCard icon={<LiaSchoolSolid />} label="Primary Schools" />
        <CtaCard icon={<FaSchoolFlag />} label="High Schools" />
        <CtaCard icon={<IoSchoolSharp />} label="Universities" />
      </div>
      {/* end of cta section */}

      {/* start of about us section */}
      <div className="flex flex-col md:flex-row mt-20 px-20">
        <div className="mx-auto w-1/2 justify-center items-center">
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
        <div className="w-full mt-6 md:mt-0 md:w-1/2 text-center md:text-start flex flex-col items-center">
          <h2 className="text-primaryBlackColor font-bold md:text-4xl">
            GET <span className="text-primaryBlueColor">TO KNOW</span> Us
          </h2>
          <p className="text-secondaryBlackColor text-sm md:text-xl mt-5">
            We are committed to helping you find your find the perfect
            educational environment and are striving to be your trusted resource
            in securing a bright and successful future for your child. Choose us
            as your go-to source for reliable school information and rankings.
          </p>
          <a href="/about-us">
            <Button
              title="Read More"
              backgroundColor="primaryBlueColor"
              icon={<FaArrowCircleRight />}
            />
          </a>
        </div>
      </div>
      {/* end of about us section */}

      {/* start of testimonial section */}
      <img src={waveUp} alt="wave image" className="mt-4" />
      <div className="bg-tertiaryBlueColor flex items-center flex-wrap justify-center gap-2 md:gap-6 px-20">
        <EvidenceCard
          icon={<RiCustomerService2Fill />}
          label="Happy customers"
          count="1500+"
        />
        <EvidenceCard
          icon={<MdOutlineGroupAdd />}
          label="Happy customers"
          count="11500+"
        />
        <EvidenceCard
          icon={<FaHandshakeAngle />}
          label="Top Partners"
          count="110+"
        />
        <EvidenceCard icon={<FaSchoolFlag />} label="Schools" count="800+" />
      </div>
      <div className="w-full text-center bg-tertiaryBlueColor pt-6">
        <h2 className="text-primaryBlueColor  font-bold md:text-4xl uppercase">
          What people{" "}
          <span className="text-primaryBlackColor">say about us</span>
        </h2>
        <p className="text-secondaryBlackColor text-sm md:text-xl mt-2">
          Here some amazing testimonials from our esteemed clients
        </p>
      </div>
      <img src={wave} alt="image of a wave svg" />
      <div className="flex flex-col md:flex-row items-center px-20 gap-3 mt-4">
        <div className="w-full md:w-1/2 rounded md:overflow-hidden shadow-primaryBlackColor hover:shadow-primaryBlueColor">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper bg-primaryBlueColor max-h-96 rounded overflow-hidden"
          >
            <SwiperSlide className="rounded md:max-h-96">
              <TestimonialCard
                title="parent"
                image={testimonialParent}
                alt="A Parent"
                name="Mary Anne Wambui"
                message="This app gave me a platform to have my child enrolled in one of the best schools I could afford."
              />
            </SwiperSlide>
            <SwiperSlide className="rounded md:max-h-96">
              <TestimonialCard
                title="principal"
                image={testimonialPrincipal}
                alt="A Principal"
                name="Daisy Naiteo"
                message="Ever since we registered our school in this platform, we have witnessed considerable increase in our students."
              />
            </SwiperSlide>
            <SwiperSlide className="rounded md:max-h-96">
              <TestimonialCard
                title="student"
                image={testimonialStudent}
                alt="A Student"
                name="Brian Kamau"
                message="I am really grateful that such an app exists. I can truly attest that I was able to find a great school here."
              />
            </SwiperSlide>
            <SwiperSlide className="rounded md:max-h-96">
              <TestimonialCard
                title="teacher"
                image={testimonialTeacher}
                alt="A Teacher"
                name="Johnson Ledama"
                message="This app has given schools and students as well as teachers an opportuunity to make a mark and better learning wholesomely."
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full md:w-1/2 rounded overflow-hidden shadow-primaryBlackColor hover:shadow-primaryBlueColor">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper bg-primaryBlueColor max-h-96 rounded overflow-hidden"
          >
            <SwiperSlide className="rounded md:max-h-96">
              <TestimonialCard
                title="student"
                image={testimonialStudent}
                alt="A Student"
                name="Brian Kamau"
                message="I am really grateful that such an app exists. I can truly attest that I was able to find a great school here."
              />
            </SwiperSlide>
            <SwiperSlide className="rounded md:max-h-96">
              <TestimonialCard
                title="teacher"
                image={testimonialTeacher}
                alt="A Teacher"
                name="Johnson Ledama"
                message="This app has given schools and students as well as teachers an opportuunity to make a mark and better learning wholesomely."
              />
            </SwiperSlide>
            <SwiperSlide className="rounded md:max-h-96">
              <TestimonialCard
                title="parent"
                image={testimonialParent}
                alt="A Parent"
                name="Mary Anne Wambui"
                message="This app gave me a platform to have my child enrolled in one of the best schools I could afford."
              />
            </SwiperSlide>
            <SwiperSlide className="rounded md:max-h-96">
              <TestimonialCard
                title="principal"
                image={testimonialPrincipal}
                alt="A Principal"
                name="Daisy Naiteo"
                message="Ever since we registered our school in this platform, we have witnessed considerable increase in our students."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* end of testimonial section */}
    </>
  );
}
