"use client";
import React, { useEffect, useState } from "react";
import "./FeaturedCourses.css";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

// //Images
import c1 from "../../imgs/2.jpg"
import c2 from "../../imgs/2.jpg"

// React Icons
import { IoMdTime } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { Si365Datascience } from "react-icons/si";
import { MdDeviceHub } from "react-icons/md";
import { SiGooglemarketingplatform } from "react-icons/si";
import { BsStars } from "react-icons/bs";


// Aos
import Aos from "aos";
import "aos/dist/aos.css";

const FeaturedCourses = () => {
    const [coursesIds, setCoursesIds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        Aos.init({
            duration: 1500,
        });

        const authToken = localStorage.getItem('token');
        const fetchCoursesIds = async () => {
            try {
                //get the user courses ids
                const response = await axios.get("http://localhost:8000/api/v1/user/profile", {}, {
                    headers: {
                        'Authorization': 'Bearer ' + authToken
                    }
                });
                setCoursesIds(response.data.course);
                console.log(response.data.data);
            } catch (err) {
                console.log(err);
                setError("Failed href fetch courses. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        const fetchCourses = async () => {
            try {
                for (let i = 0; i < coursesIds.length; i++) {
                    const response = await axios.get(`http://localhost:8000/api/v1/course/${courses[i]}`);
                    setCourses((prev) => [...prev, response.data.data]);
                    console.log(response.data.data);
                }
            } catch (err) {
                setError("Failed href fetch courses. Please try again later.");
            } finally {
                setLoading(false);
            }
        };


        fetchCoursesIds().then(() => fetchCourses());
    }, [coursesIds, courses]);

    return (
        <>

            <div className="title">
                <h1 className="text-3xl relative left-[12%] top-[25px] font-medium">
                    Featured Courses
                </h1>
            </div>

            {/* <section
                data-aos="fade-up"
                className="cards flex justify-evenly flex-wrap wrapper relative left-[5%] top-[65px]">
                <a
                    href="#"
                    className="relative w-[350px] h-[250px] block bg-gray-200 shadow-3xl overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
                    <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-href-r from-green-300 via-blue-500 href-purple-600"></span>

                    <div className="sm:flex sm:justify-between sm:gap-4 relative top-[-12px]">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                Node.js Express
                            </h3>

                            <p className="mt-1 text-xs font-medium text-gray-600">
                                By John Doe
                            </p>
                        </div>

                        <div className="hidden sm:block sm:shrink-0">
                            <Image
                                alt=""
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                className="size-16 rounded-lg object-cover shadow-sm"
                            />
                        </div>
                    </div>

                    <div className="mt-4 relative top-[-25px]">
                        <p className="text-pretty text-sm text-gray-500">
                            Node.js Express MongoDB
                        </p>
                    </div>

                    <dl className="mt-6 relative top-[-30px] flex gap-4 sm:gap-6">
                        <div className="flex flex-col-reverse">
                            <dt className="text-sm font-medium text-gray-600">Published</dt>
                            <dd className="text-lg font-medium text-gray-600">
                                {" "}
                                <IoMdTime className="text-xl" /> 1h 53m
                            </dd>
                        </div>

                        <div className="flex flex-col-reverse">
                            <dt className="text-sm font-medium text-gray-600">Rating</dt>
                            <dd className="text-lg font-medium text-gray-600">
                                {" "}
                                <FaStar /> 4.5/5
                            </dd>
                        </div>

                        <div className="flex flex-col-reverse">
                            <div className="flex ml-[50px] flex-col-reverse">
                                <Link
                                    className="bg-teal-500 p-2 hover:bg-teal-400 rounded text-lg font-medium"
                                    href="/overview">
                                    Enroll
                                </Link>
                            </div>
                        </div>
                    </dl>
                </a>

                <a
                    href="#"
                    className="relative w-[350px] h-[250px] block bg-gray-200 shadow-3xl overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
                    <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-href-r from-green-300 via-blue-500 href-purple-600"></span>

                    <div className="sm:flex sm:justify-between sm:gap-4 relative top-[-12px]">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                Node.js Express
                            </h3>

                            <p className="mt-1 text-xs font-medium text-gray-600">
                                By John Doe
                            </p>
                        </div>

                        <div className="hidden sm:block sm:shrink-0">
                            <Image
                                alt=""
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                className="size-16 rounded-lg object-cover shadow-sm"
                            />
                        </div>
                    </div>

                    <div className="mt-4 relative top-[-25px]">
                        <p className="text-pretty text-sm text-gray-500">
                            Node.js Express MongoDB
                        </p>
                    </div>

                    <dl className="mt-6 relative top-[-30px] flex gap-4 sm:gap-6">
                        <div className="flex flex-col-reverse">
                            <dt className="text-sm font-medium text-gray-600">Published</dt>
                            <dd className="text-lg font-medium text-gray-600">
                                {" "}
                                <IoMdTime className="text-xl" /> 1h 53m
                            </dd>
                        </div>

                        <div className="flex flex-col-reverse">
                            <dt className="text-sm font-medium text-gray-600">Rating</dt>
                            <dd className="text-lg font-medium text-gray-600">
                                {" "}
                                <FaStar /> 4.5/5
                            </dd>
                        </div>

                        <div className="flex ml-[50px] flex-col-reverse">
                            <Link
                                className="bg-teal-500 p-2 hover:bg-teal-400 rounded text-lg font-medium"
                                href="/overview">
                                Enroll
                            </Link>
                        </div>
                    </dl>
                </a>

                <a
                    href="#"
                    className="relative w-[350px] h-[250px] block bg-gray-200 shadow-3xl overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
                    <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-href-r from-green-300 via-blue-500 href-purple-600"></span>

                    <div className="sm:flex sm:justify-between sm:gap-4 relative top-[-12px]">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                Node.js Express
                            </h3>

                            <p className="mt-1 text-xs font-medium text-gray-600">
                                By John Doe
                            </p>
                        </div>

                        <div className="hidden sm:block sm:shrink-0">
                            <Image
                                alt=""
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                className="size-16 rounded-lg object-cover shadow-sm"
                            />
                        </div>
                    </div>

                    <div className="mt-4 relative top-[-25px]">
                        <p className="text-pretty text-sm text-gray-500">
                            Node.js Express MongoDB
                        </p>
                    </div>

                    <dl className="mt-6 relative top-[-30px] flex gap-4 sm:gap-6">
                        <div className="flex flex-col-reverse">
                            <dt className="text-sm font-medium text-gray-600">Published</dt>
                            <dd className="text-lg font-medium text-gray-600">
                                {" "}
                                <IoMdTime className="text-xl" /> 1h 53m
                            </dd>
                        </div>

                        <div className="flex flex-col-reverse">
                            <dt className="text-sm font-medium text-gray-600">Rating</dt>
                            <dd className="text-lg font-medium text-gray-600">
                                {" "}
                                <FaStar /> 4.5/5
                            </dd>
                        </div>

                        <div className="flex flex-col-reverse">
                            <div className="flex ml-[50px] flex-col-reverse">
                                <Link
                                    className="bg-teal-500 p-2 hover:bg-teal-400 rounded text-lg font-medium"
                                    href="/overview">
                                    Enroll
                                </Link>
                            </div>
                        </div>
                    </dl>
                </a>
            </section>

            <div className="title2">
                <h1 className="text-3xl relative left-[12%] top-[100px] font-medium">
                    Categories
                </h1>
            </div>

            <section data-aos="fade-up" className="categories relative left-[10%] ">
                <div className="boxes flex flex-wrap wrapper relative top-[150px]">
                    <div className=" box ml-8">
                        <MdOutlineDesignServices className="text-3xl relative left-[50%] translate-x-[-50%]" />
                        <p className="text-lg font-medium">Design</p>
                    </div>
                    <div className=" box ml-8">
                        <FaUsers className="text-3xl relative left-[50%] translate-x-[-50%]" />
                        <p className="text-lg font-medium">Business</p>
                    </div>
                    <div className=" box ml-8">
                        <FaChartLine className="text-3xl relative left-[50%] translate-x-[-50%]" />
                        <p className="text-lg font-medium">Art</p>
                    </div>
                    <div className=" box ml-8">
                        <Si365Datascience className="text-3xl relative left-[50%] translate-x-[-50%]" />
                        <p className="text-lg font-medium">Data Science</p>
                    </div>
                    <div className=" box ml-8">
                        <MdDeviceHub className="text-3xl relative left-[50%] translate-x-[-50%]" />
                        <p className="text-lg font-medium">Web Development</p>
                    </div>
                    <div className=" box ml-8">
                        <SiGooglemarketingplatform className="text-3xl relative left-[50%] translate-x-[-50%]" />
                        <p className="text-lg font-medium">Marketing</p>
                    </div>
                    <div className=" box ml-8">
                        <BsStars className="text-3xl relative left-[50%] translate-x-[-50%]" />
                        <p className="text-lg font-medium">Astronomy</p>
                    </div>
                </div>
            </section>

            <div className="title3">
                <h1 className="text-3xl relative left-[12%] top-[200px] font-medium">
                    My Courses
                </h1>
            </div>

            <section
                data-aos="fade-up"
                className="myCourses relative left-[2%] top-[250px] flex justify-evenly flex-wrap wrapper">
                <div className="courses flex align-middle gap-52">
                    <div className="course shadow-xl flex bg-gray-300 p-3 rounded-md w-[450px]">
                        <div className="img">
                            <Image
                                className="w-[250px] h-[150px] rounded-md"
                                src={c1}
                                alt="course"
                            />
                        </div>
                        <div className="text ml-[20px] mt-[10px]">
                            <h2 className="text-1xl font-medium">Node.js</h2>
                            <p>Jonas</p>
                            <br />
                            <p className="font-medium">87% Complete</p>
                        </div>
                        <div className="icon mt-[10px]">
                            <Link href="/saved">
                                <FaStar className="text-4xl mr-[50px] bg-teal-500 rounded-full p-2" />
                            </Link>
                        </div>
                    </div>
                    <div className="course shadow-2xl flex bg-gray-300 p-3 rounded-md w-[450px]">
                        <div className="img">
                            <Image
                                className="w-[250px] h-[150px] rounded-md"
                                src={c2}
                                alt="course"
                            />
                        </div>
                        <div className="text ml-[20px] mt-[10px]">
                            <h2 className="text-1xl font-medium">HTML</h2>
                            <p>Jonas</p>
                            <br />
                            <p className="font-medium">85% Complete</p>
                        </div>
                        <div className="icon mt-[10px]">
                            <Link href="/saved">
                                <FaStar className="text-4xl mr-[50px] bg-teal-500 rounded-full p-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="moreC relative left-[45%] top-[300px]">
                <Link
                    href="/courses"
                    className="bg-teal-400 p-2 text-xl font-medium mb-[100px] rounded-3xl">
                    View all Courses
                </Link>
            </div> */}
        </>
    );
};

export default FeaturedCourses;
