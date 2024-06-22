"use client";
import React, { useEffect, useState } from "react";
import { Button, Empty, Typography, Spin, Card, Space, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import { text } from "@fortawesome/fontawesome-svg-core";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [eCourses, setECourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    Aos.init({
      duration: 1500,
    });

    const authToken = localStorage.getItem('token');
    console.log(authToken);
    const fetchCoursesIds = async () => {
      try {
        //get the user courses ids
        const response = await axios.get("http://localhost:8000/api/v1/user/profile", {
          headers: {
            'Authorization': 'Bearer ' + authToken
          }
        });
        console.log(response);
        return response.data.data.course;
      } catch (err) {
        console.log(err);
        setError("Failed href fetch courses. Please try again later.");
      }
    };

    const fetchCourses = async (coursesIds) => {
      try {
        // get all courses
        const response = await axios.get("http://localhost:8000/api/v1/course");
        console.log(response);
        const allCourses = response.data.data;
        
        const enrolledCourses = allCourses.filter(course => coursesIds.includes(course._id));
        // get the instructor name for each course
        for (let i = 0; i < allCourses.length; i++) {
          const instructorResponse = await axios.get(`http://localhost:8000/api/v1/user/${allCourses[i].instructor}`);
          console.log(instructorResponse);
          allCourses[i].instructor = instructorResponse.data.data.username;
          allCourses[i].image = instructorResponse.data.data.image;
        }
        console.log(enrolledCourses);
        setECourses(enrolledCourses);
        setCourses(allCourses);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError("Failed href fetch courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchCoursesIds().then((r) => fetchCourses(r));
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
      <div className="title">
        <h1 className="text-3xl text-center mt-5">
          Courses
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {courses.length === 0 ? (
          <div className="flex justify-center flex-wrap h-[100%]">
            <Empty
              className="mt-40"
              description="No courses available. Please check back later."
            />
          </div>
        ) :
          courses.map((course) => (

            <Card
              hoverable
              key={course._id}
              style={{
                width: 240,
                margin: 20,
              }}
              cover={
                <Image
                  alt="example"
                  src={course.imageCover}
                  width={200}
                  height={200}
                />
              }
              actions={[
                eCourses.includes(course) ? <Button type="primary" disabled>Enrolled</Button> : <Button type="primary" onClick={() => handleCheckout(course._id)}>Buy</Button>,
              ]}
              body={<Link href={`/course/${course._id}`}><a>View Course</a></Link>}
            >
              <Meta
                avatar={<Avatar src={course.image} />}
                title={course.title}
                description={
                  <Space size="small" direction="vertical">
                    <p>{course.instructor}</p>
                    <p style={{
                      color: 'black',
                      fontWeight: 'bold'
                    }}>{course.price} EGP</p>
                  </Space>
                }
              />
            </Card>
          ))}
      </div>

    </>
  );
};

export default Courses;
