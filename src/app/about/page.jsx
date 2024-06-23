'use client';

import React, { useEffect } from "react";
import Image from "next/image";
import { Layout, Button } from "antd";

const { Header, Footer } = Layout;

//images
import _2 from "../imgs/3.png";
import _1 from "../imgs/1.png";
import _3 from "../imgs/4.png";
import _4 from "../imgs/2.png";
import _5 from "../imgs/3.png";
import _6 from "../imgs/4.png";
import _7 from "../imgs/8.jpg";
import _8 from "../imgs/image-01.jpg";
import _9 from "../imgs/image-02.jpg";
import _10 from "../imgs/image-03.jpg";


import Link from "next/link";


// Aos
import Aos from "aos";
import "aos/dist/aos.css";
import LHeader from "@/components/LHeader";
import LFooter from "@/components/LFooter";





function About() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
    <Header  style={{ margin: '8px' }}>
        <LHeader />
      </Header>
      <br />
      <br />
    <div className="about">
    <div className="container relative  "
     style={{ display: 'contents' }} >
      <section
      
          data-aos="fade-up"
          className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center text-gray-700 body-font border-t border-gray-200">
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
    </div>
    </div>
    </>
  )
}

export default About