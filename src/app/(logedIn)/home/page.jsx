"use client";
import React, { useEffect, useState } from "react";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Empty, Space } from 'antd';
const { Meta } = Card;
import { Spin } from 'antd';
import "./FeaturedCourses.css";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";



// Aos
import Aos from "aos";
import "aos/dist/aos.css";

const EnrolledCourses = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [courses, setCourses] = useState([]);
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
                for (let i = 0; i < enrolledCourses.length; i++) {
                    const instructorResponse = await axios.get(`http://localhost:8000/api/v1/user/${enrolledCourses[i].instructor}`);
                    console.log(instructorResponse);
                    enrolledCourses[i].instructor = instructorResponse.data.data.username;
                    enrolledCourses[i].image = instructorResponse.data.data.image;
                }
                console.log(enrolledCourses);
                setCourses(enrolledCourses);
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

    if (loading) {
        return (
            <div className="flex justify-center flex-wrap h-[100%]">
                <Spin size="large" />
            </div>
        );
    }
    return (
        <>
            <div className="title">
                <h1 className="text-3xl text-center mt-5">
                    Enrolled Courses
                </h1>
            </div>
            <div className="flex flex-wrap justify-center">
                { courses.length === 0 ? (
                    <div className="flex justify-center flex-wrap h-[100%]">
                    <Empty
                      className="mt-40"
                      description="No courses available. Buy a course to get started"
                    />
                  </div>
                ) :
                courses.map((course) => (

                    <Card
                        key={course._id}
                        style={{
                            width: 260,
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
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src={course.image} />}
                            title={course.title}
                            description={
                                <Space size="small" direction="vertical">
                                  <p>{course.description}</p>
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

export default EnrolledCourses;
