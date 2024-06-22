"use client";
import React, { useEffect, useState } from "react";
import { Button, Empty, Typography, Spin } from 'antd';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    Aos.init({
      duration: 1500,
    });

    const fetchuser = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/user");
        setCourses(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        setError("Failed to fetch courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchuser();
  }, []);

  const handleCheckout = async (courseId) => {
    const authToken = localStorage.getItem('token');
    const response = await axios.post(`http://localhost:8000/api/v1/order/checkoutSession/${courseId}`, {}, {
      headers: {
        'Authorization': 'Bearer ' + authToken
      }
    });
    console.log(response);

    // open stripe checkout
    window.location.href = response.data.data.url;
  };

  if (loading) {
    return (
      <div className="flex justify-center flex-wrap h-[100%]">
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {courses.length === 0 ? (
        <div className="flex justify-center flex-wrap h-[100%]">
          <Empty
            className="mt-40"
            description="No courses available. Please check back later."
          />
        </div>
      ) : (
        <>
          {/* <Typography.Title level={2} className="text-center mt-10">
            Courses
          </Typography.Title> */}
          <section className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-10 gap-x-6 mt-10 mb-5 w-fit mx-auto justify-items-center justify-center">
            {courses.map((course) => (
              <div

                key={course._id}
                className="bg-white shadow-md rounded-xl overflow-hidden transition duration-200 hover:scale-105  hover:shadow-lg hover:cursor-pointer">
                <div data-aos="fade-up" href="#">
                  <div className="relative h-40" onClick={() => router.push(`/courses/${course._id}`)}>
                    <Image
                      src={course.imageCover || "default_image_path.jpg"}
                      alt={course.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-xl"
                    />
                  </div>
                  <div className="p-4">
                    <div onClick={() => router.push(`/courses/${course._id}`)}>
                      <span className="text-gray-400 text-xs uppercase mb-2" >
                        Brand
                      </span>
                      <p className="text-lg font-bold text-black truncate capitalize mb-2">
                        {course.title}
                      </p>
                    </div>
                    <div className="flex items-center mb-2" onClick={() => router.push(`/courses/${course._id}`)}>
                      <p className="text-lg font-semibold text-black cursor-auto">
                        ${course.price}
                      </p>
                      <del className="text-sm text-gray-600 ml-2">
                        ${course.originalPrice}
                      </del>
                    </div>
                    <div className="flex justify-end">
                      <Link
                        href="/cart"
                        className="bg-[#0fd0c8] px-3 py-2 rounded text-black hover:text-white mr-2">
                        Add to Cart
                      </Link>
                      <button
                        onClick={() => handleCheckout(course._id)}
                        className="bg-[#0fd0c8] px-3 py-2 rounded text-black hover:text-white mr-2">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </>
      )}
    </>
  );
};

export default Courses;
{/* <section className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-10 gap-x-6 mt-10 mb-5">
  {courses.map((course) => (
    <div
      key={course._id}
      className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
      <a data-aos="fade-up" href="#">
        <div className="relative h-40">
          <Image
            src={course.imageCover || "default_image_path.jpg"}
            alt={course.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
        </div>

      </a>
    </div>
  ))}
</section> */}

