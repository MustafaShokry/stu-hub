'use client';

// function Home() {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home

import React, { useEffect } from "react";
import Image from "next/image";
import { Layout, Button } from "antd";
import { TwitterOutlined, FacebookOutlined, DribbbleOutlined, GithubOutlined } from '@ant-design/icons';



const { Header, Footer } = Layout;


import mainImg from "./imgs/img1.jpg";
import _1 from "./imgs/1.png";
import _2 from "./imgs/3.png";
import _3 from "./imgs/4.png";
import _4 from "./imgs/2.png";
import _5 from "./imgs/3.png";
import _6 from "./imgs/4.png";
import _7 from "./imgs/8.jpg";
import _8 from "./imgs/image-01.jpg";
import _9 from "./imgs/image-02.jpg";
import _10 from "./imgs/image-03.jpg";


import Link from "next/link";


// Aos
import Aos from "aos";
import "aos/dist/aos.css";
import LHeader from "@/components/LHeader";
import LFooter from "@/components/LFooter";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
      {/* <header className="w-[100%] absolute right-0 top-0">
        <nav className="bg-gray-800 shadow-lg border-gray-200 py-2.5">
          <div className="flex flex-wrap items-center justify-between px-8 mx-auto">
            <Link href="/" className="flex items-center">
              <Image src={logo} className=" h-12 w-12 mr-3" alt="Landwind Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                STU-HUB
              </span>
            </Link>
            <div className="flex items-center lg:order-2">
              <div className="hidden mt-2 mr-4 sm:inline-block">
                <Link
                  href="/login"
                  className="github-button text-gray-50"
                  data-size="large"
                  data-icon="octicon-star"
                  data-show-count="true"
                  aria-label="Star themesberg/landwind on GitHub">
                  Login
                </Link>
              </div>

              <Link
                href="/signUp"
                className="text-white bg-[#11ab9e] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0  focus:outline-none">
                Sign Up
              </Link>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    href="/"
                    className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                    aria-current="page">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/aboutus"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contactus"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header> */}

      <Header  style={{ margin: '8px' }}>
        <LHeader />
      </Header>
      <br />
      <br />
      <section className=" relative ">
        <section className="text-gray-700 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div
              data-aos="fade-left"
              className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Discover The World OF Online
                <br className="hidden lg:inline-block" />
                Courses
              </h1>
              <p className="mb-8 leading-relaxed">
               Unlock Your potential with our courses 
              </p>
              <div className="flex justify-center">
                
                <Link
                style={{ width: '100%' }}
                  href="/app/(auth)/signUp"
                  className="inline-flex text-white bg-[#11ab9e] border-0 py-2 px-6 focus:outline-none rounded text-lg homecontainer">
                  Start Learning Now
                </Link>
                
              </div>
            </div>
            <div
              data-aos="fade-right"
              className=" md:w-1/2 w-5/6">
              <Image
                className="object-cover object-center rounded"
                alt="hero"
                src={mainImg}
              />
            </div>
          </div>
        </section>
{/* Second Section */}
        <section
          data-aos="fade-up"
          className="text-gray-700 body-font border-t border-gray-200">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xs text-[#11ab9e] tracking-widest font-medium title-font mb-1">
                
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Unlock Your Potential with Expert Instructors
              </h1>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#11ab9e] text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                    Learn effectively and easily
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                    Subject text: We offer you an accessible and effective learning experience, focused on delivering high-quality content without unnecessary complexity or clutter. Join us for a streamlined learning experience that suits your needs.
                    Learn from the experts
                    </p>
                   
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#11ab9e] text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                    Topic text:
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                    Whether you are a beginner or an experienced professional, we offer you courses to suit all levels. Our trainers are experts in their field, passionate about sharing their knowledge and helping you succeed.
                    Education for all
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#11ab9e] text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24">
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                    Subject text:
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                    We designed our courses to deliver a personalized learning experience that meets your individual needs. We focus on providing high educational content 
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        
{/* Our Team */}
        <section
          data-aos="fade-up"
          className="text-gray-700 body-font border-t border-gray-200">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Our Team
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                havent heard of them.
              </p>
            </div>


            <div className="flex flex-wrap -m-2">
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <Image
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={_1}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Basel Tariq
                    </h2>
                    <p className="text-gray-500">BackEnd developer</p>
                  </div>
                </div>
              </div>


              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <Image
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={_2}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Ephraim Bushra
                    </h2>
                    <p className="text-gray-500">BackEnd developer</p>
                  </div>
                </div>
              </div>


              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <Image
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={_3}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Khaled Mohamed
                    </h2>
                    <p className="text-gray-500">Frontend Developer</p>
                  </div>
                </div>
              </div>


              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <Image
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={_4}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Mostafa Mohamed
                    </h2>
                    <p className="text-gray-500">BackEnd developer</p>
                  </div>
                </div>
              </div>


              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <Image
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={_3}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Mohamed Galal
                    </h2>
                    <p className="text-gray-500">Frontend Developer</p>
                  </div>
                </div>
              </div>

              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <Image
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={_1}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Magdy Mohamed
                    </h2>
                    <p className="text-gray-500">Frontend Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          data-aos="fade-up"
          className="text-gray-700 body-font border-t border-gray-200">
          <div className="container px-5 py-24 mx-auto">
            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-8 h-8 text-gray-400 mb-8"
                viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-lg">
              The process of preparing programs for a digital computer is especially attractive because it not only can be economically and scientifically rewarding, it can also be an aesthetic experience much like composing poetry or music
              </p>
              <span className="inline-block h-1 w-10 rounded bg-[#11ab9e] mt-8 mb-6"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              Donald Knuth
              </h2>
            </div>
          </div>
        </section>
      </section>

      {/* <section
        data-aos="fade-up"
        className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 relative left-[6.5%]">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <span className="font-semibold text-lg text-primary mb-2 block">
                  Our Blogs
                </span>
                <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  ">
                  Our Recent News
                </h2>
                <p className="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <Image
                    src={_8}
                    alt="image"
                    className="w-full"
                    width={370}
                    height={370}
                  />
                </div>
                <div className="relative top-[-80px]">
                  <span
                    className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     ">
                    Dec 22, 2023
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        ">
                      Meet AutoManage, the best AI management tools
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <Image
                    src={_9}
                    alt="image"
                    className="w-full"
                    width={370}
                    height={370}
                  />
                </div>
                <div className="relative top-[-80px]">
                  <span
                    className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     ">
                    Mar 15, 2023
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        ">
                      How to earn more money as a wellness coach
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <Image
                    src={_10}
                    alt="image"
                    className="w-full"
                    width={370}
                    height={370}
                  />
                </div>
                <div className=" relative top-[-80px]">
                  <span
                    className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     ">
                    Jan 05, 2023
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        ">
                      The no-fuss guide to upselling and cross selling
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section data-aos="fade-up">
        <div className="m-10 mx-auto p-16 sm:p-24 lg:p-48 bg-gray-200">
          <div
            className="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl"
            style={{ minHeight: "19rem" }}>
            <div
              className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
              style={{ minHeight: "19rem" }}>
              <Image
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={_1}
                alt=""
              />
              <div className="absolute inset-0 w-full h-full bg-[#11ab9e] opacity-75"></div>
              <div className="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
                <svg
                  className="w-full h-24"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 239 120">
                  <path d="M4.21 86.4V33.31h8.94l4 28.85.86 9.52.87-9.52 4-28.85h9.02V86.4h-5.19V42.83l-.87 7.22-5.19 36.35h-5.19l-5.2-36.93-.57-6.64V86.4zm35.79 0h6V33.31h-6zm114.24 0h6.06V33.31h-6.06zm46.16-24h5.48v-6.01h-5.48v-17h9.23v-6.08h-15.31V86.4h15.29v-6.06h-9.23zm-60-29.14v44.19a2.89 2.89 0 1 1-5.77 0V33.31h-6.34v44.14a9.23 9.23 0 1 0 18.46 0V33.31zm40.11 44.14V42.55a2.9 2.9 0 0 0-2.89-2.89h-2.88v41h2.88a3.68 3.68 0 0 0 2.89-3.18zm-3.21-44.09a9.12 9.12 0 0 1 9.23 9.24v34.9a9.12 9.12 0 0 1-9.23 9.24h-9.23V33.31h9.23m51.64 44.14v-34.9a2.89 2.89 0 0 0-2.88-2.89h-2.89v41h2.89a3.67 3.67 0 0 0 2.88-3.18zm-2.88-44.14a9.06 9.06 0 0 1 8.94 9.24v34.9a9.12 9.12 0 0 1-9.23 9.24h-9.23V33.31h9.52M89.31 57.55c-2.88-2.6-5.19-4.91-5.19-9.23v-5.77A2.89 2.89 0 0 1 87 39.66a3.1 3.1 0 0 1 2.89 2.89v6.05H96v-6.05a9.24 9.24 0 1 0-18.47 0v6.05c.58 6.93 4.62 10.68 7.5 13.56 2.89 2.6 5.2 4.91 5.2 9.24v6a2.89 2.89 0 1 1-5.77 0v-8.89h-6.11v8.94a9.23 9.23 0 1 0 18.46 0v-6c-.57-7.22-4.32-10.68-7.5-13.85m-25.1 0C61.33 55 59 52.64 59 48.32v-5.77a2.89 2.89 0 1 1 5.77 0v6.05h6.06v-6.05a9.24 9.24 0 1 0-18.47 0v6.05c0 6.93 4 10.68 6.93 13.56 2.88 2.6 5.19 4.91 5.19 9.24v6a2.89 2.89 0 0 1-2.88 2.89 3.1 3.1 0 0 1-2.89-2.89v-8.89h-5.46v8.94a9.23 9.23 0 1 0 18.46 0v-6c-.28-7.22-4.32-10.68-7.5-13.85m56.84-9.23v-5.82a9.24 9.24 0 1 0-18.47 0v34.9a9.45 9.45 0 0 0 9 9.24 6.63 6.63 0 0 0 6.34-4l2.89 4V62.45h-9.23v6.06h2.88v8.94a2.73 2.73 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89v-34.9a2.9 2.9 0 0 1 2.89-2.89 3.1 3.1 0 0 1 2.88 2.89v6.05h6.64z"></path>
                </svg>
              </div>
            </div>
            <div className="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
              <div className="p-12 md:pr-24 md:pl-16 md:py-12">
                <p className="text-gray-600">
                  <span className="text-gray-900">Missguided</span> is a UK-based
                  fashion retailer that has nearly doubled in size since last
                  year. They integrated Stripe to deliver seamless checkout
                  across mobile and web for customers in 100+ countries, all
                  while automatically combating fraud.
                </p>
                <a className="flex items-baseline mt-3 text-[#11ab9e]">
                  <span>Learn more about our users</span>
                  <span className="text-xs ml-1">&#x279c;</span>
                </a>
              </div>
              <svg
                className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
                viewBox="0 0 100 100"
                preserveAspectRatio="none">
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
            </div>
            <button className="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-[#11ab9e] -ml-6 focus:outline-none focus:shadow-outline">
              <span className="block" style={{ transform: "scale(1)" }}>
                &#x279c;
              </span>
            </button>
            <button className="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-[#11ab9e] -mr-6 focus:outline-none focus:shadow-outline">
              <span className="block" style={{ transform: "scale(1)" }}>
                &#x279c;
              </span>
            </button>
          </div>

          <div className="flex items-center pt-5 justify-between">
            <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
              <Image
                className="w-full"
                src={_1}
                alt=""
                style={{ maxHeight: "60px" }}
              />
            </button>
            <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
              <Image
                className="w-full"
                src={_2}
                alt=""
                style={{ maxHeight: "60px" }}
              />
            </button>
            <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
              <Image
                className="w-full"
                src={_3}
                alt=""
                style={{ maxHeight: "60px" }}
              />
            </button>
            <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
              <Image
                className="w-full"
                src={_4}
                alt=""
                style={{ maxHeight: "60px" }}
              />
            </button>
            <button className="px-2 opacity-100 hover:opacity-100 focus:opacity-100">
              <Image
                className="w-full"
                src={_5}
                alt=""
                style={{ maxHeight: "60px" }}
              />
            </button>
          </div>
        </div>
      </section> */}

      <Footer style={{ padding: 0}}>
        <LFooter />
      </Footer>
    </>
  );
};

export default Home;