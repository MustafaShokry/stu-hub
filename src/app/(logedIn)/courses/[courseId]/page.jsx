// "use client";
// import React, { useState, useEffect } from 'react'
// import { Card, Typography, List, message } from 'antd';

// import axios from 'axios';

// const { Title, Paragraph } = Typography;

// function CourseOverview({ params }) {
//     const [course, setCourse] = useState(null);
//     const [videos, setVideos] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         setLoading(true);
//         setError(null);
//         const fetchCourse = async () => {
//         try {
//             const response = await axios.get(`http://localhost:8000/api/v1/course/${params.courseId}`);
//             console.log(response.data.data);
//             setCourse(response.data.data);
//             const videosR = await response.data.data.videos;
//             // map the array of links to an array of objects with title and url properties using the index as the key and title
//             let videosRa = await videosR.map((video, index) => ({ title: `Video ${index + 1}`, url: video }));
//             setVideos(videosRa);
//             setLoading(false);
//         } catch (error) {
//             console.error(error);
//             if (error.response && error.response.data && error.response.data.errors) {
//                 message.error(error.response.data.errors[0].msg);
//             } else {
//                 message.error("An unexpected error occurred.");
//             }
//             setError(error);
//             setLoading(false);
//         }}

//         fetchCourse();
//     }, [params.courseId]);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (error) {
//         return <p>{error.message}</p>;
//     }

//     return (
//         <Card title="Course Overview">
//             <Title level={4}><strong>Title:</strong> {course.title}</Title>
//             <Paragraph>
//                 <strong>Description:</strong> {course.description}
//             </Paragraph>

//             <Title level={5}>Videos:</Title>
//             <List
//                 dataSource={videos}
//                 renderItem={(video) => (
//                     <List.Item>
//                         <a href={video.url} target="_blank" rel="noopener noreferrer">
//                             {video.title}
//                         </a>
//                     </List.Item>
//                 )}
//             />
//         </Card>
//     );
// }

// export default CourseOverview;
"use client";
import React, { useState, useEffect } from 'react';
import { Card, Typography, List, message, Spin, Avatar } from 'antd';
import axios from 'axios';
import ReactPlayer from 'react-player';
import styles from './CourseOverview.module.css';

const { Title, Paragraph } = Typography;
const { Meta } = Card;

function CourseOverview({ params }) {
    const [course, setCourse] = useState(null);
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        const fetchCourse = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/v1/course/${params.courseId}`);
                setCourse(response.data.data);
                const videosR = response.data.data.videos;
                let videosRa = videosR.map((video, index) => ({ title: `Video ${index + 1}`, url: video }));
                setVideos(videosRa);
                setLoading(false);
            } catch (error) {
                console.error(error);
                if (error.response && error.response.data && error.response.data.errors) {
                    message.error(error.response.data.errors[0].msg);
                } else {
                    message.error("An unexpected error occurred.");
                }
                setError(error);
                setLoading(false);
            }
        };

        fetchCourse();
    }, [params.courseId]);

    if (loading) {
        return <div className={styles.loading}><Spin tip="Loading..." /></div>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
            }}
        >
            <Card className={styles.courseCard}>
                <Meta
                    avatar={<Avatar src={course.image} size={64} />}
                    title={<Title level={4} className={styles.courseTitle}>{course.title}</Title>}
                    description={
                        <>
                            <Paragraph className={styles.courseDescription}>{course.description}</Paragraph>
                            <Paragraph className={styles.instructorName}><strong>Instructor:</strong> {course.instructorName}</Paragraph>
                        </>
                    }
                />

                <Title level={5} className={styles.videosTitle}>Videos:</Title>
                <List
                    dataSource={videos}
                    renderItem={(video) => (
                        <List.Item className={styles.videoItem}>
                            <div className={styles.videoTitle}>{video.title}</div>
                            <ReactPlayer url={video.url} controls width="100%" />
                        </List.Item>
                    )}
                />
            </Card>
        </div>
    );
}

export default CourseOverview;
