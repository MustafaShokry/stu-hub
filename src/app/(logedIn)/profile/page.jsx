"use client";
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from "react";
import { Empty, Spin, message } from 'antd';
import { useRouter } from "next/navigation";
import { ArrowRightOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Aos from "aos";
import "/node_modules/aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import "../../demo.css";
import "../../../assets/css/paper-dashboard.css";







const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState({});
  const [hoverStates, setHoverStates] = useState({});

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const router = useRouter();


  const generateRandomPercentage = (courseId) => {
    // Simple hash function to convert courseId to a number
    let hash = 0;
    for (let i = 0; i < courseId.length; i++) {
      const char = courseId.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    // Use the absolute value of the hash, mod 100 to get a "random" number between 0 and 99
    const random = Math.abs(hash) % 100;
    return random;
  };

  // Handlers to set hover state
  const handleMouseEnter = (id) => {
    setHoverStates({ ...hoverStates, [id]: true });
  };

  const handleMouseLeave = (id) => {
    setHoverStates({ ...hoverStates, [id]: false });
  };

  useEffect(() => {
    if (localStorage.getItem('token') === null || localStorage.getItem('user') === null || localStorage.getItem('token') === 'undefined' || localStorage.getItem('user') === 'undefined') {
      router.replace('/login');
      router.refresh();
    } else {
      const userData = JSON.parse(localStorage.getItem('user'));
      setUser(userData);
      setUsername(userData.username);
      setEmail(userData.email);
    }

    // setPassword(userData.password);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authToken = localStorage.getItem('token');
    try {
      const response = await axios.put(`http://localhost:8000/api/v1/user/${user._id}`, {
        username,
        email,
      }, {
        headers: {
          ' Authorization': 'Bearer ' + authToken
        }
      });
      console.log(response);
      message.success('Profile updated successfully');
      setUser(response.data.data);
      localStorage.setItem('user', JSON.stringify(response.data.data));
    } catch (err) {
      console.log(err);
      message.error('Failed to update profile. Please try again later');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center flex-wrap h-[100%]">
        <Spin size="large" />
      </div>
    );
  }

  const defaultStyle = {
    color: '#6bd098',
  };

  const hoverStyle = {
    color: 'white',
  };

  return (
    <div className="content text-center" style={{
      padding: "30px",
      marginTop: "30px",
      marginLeft: "70px",
    }}>
      {/* <BootstrapStyles /> */}
      <Row>
        <Col md="4">
          <Card className="card-user flex justify-center items-center">
            <CardBody>
              <div className="author " style={{
                margin: 0,
                height: "100%",
              }}>

                <Image
                  alt="..."
                  className="avatar border-gray"
                  src={user.image}
                  width={100}
                  height={100}
                  style={{
                    margin: 0,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <h4 className="title">
                  {user.username}
                </h4>
              </div>
              <p className="description text-center">
                {user.email}
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle tag="h4">
                Courses
              </CardTitle>
            </CardHeader>
            <CardBody>
              <ul className="list-unstyled team-members">
                {courses.length === 0 ? (
                  <div className="flex justify-center flex-wrap h-[100%]">
                    <Empty
                      description="No courses available. Buy a course to get started"
                    />
                  </div>
                ) : courses.map((course) => (
                  <li
                    key={course._id}
                  >
                    <Row >
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <Image
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={course.imageCover}
                            width={70}
                            height={70}
                          />
                        </div>
                      </Col>
                      <Col md="7" xs="7">
                        {course.title} <br />
                        <span className="text-muted">
                          <small>
                            {generateRandomPercentage(course._id)}% complete{" "}
                          </small>
                        </span>
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                        <Button
                          className="btn-round btn-icon"
                          color="success"
                          outline
                          size="sm"
                          onMouseEnter={() => handleMouseEnter(course._id)}
                          onMouseLeave={() => handleMouseLeave(course._id)}
                        >
                          <Link href={`/courses/${course._id}`}>
                            <ArrowRightOutlined style={hoverStates[course._id] ? hoverStyle : defaultStyle} />
                          </Link>
                        </Button>
                      </Col>
                    </Row>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card className="card-user">
            <CardHeader>
              <CardTitle tag="h5">Edit Profile</CardTitle>
            </CardHeader>
            <CardBody>
              <Form
                onSubmit={handleSubmit}
              >
                <Row>

                  <Col className="px-1" md="6">
                    <FormGroup>
                      <label>Username</label>
                      <Input
                        defaultValue={username}
                        placeholder={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-1" md="6">
                    <FormGroup>
                      <label>
                        Email address
                      </label>
                      <Input
                        placeholder={email}
                        defaultValue={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="6">
                    <FormGroup>
                      <label>role</label>
                      <Input
                        defaultValue={user.role}
                        disabled
                        placeholder={user.role}
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-1" md="6">
                    <FormGroup>
                      <label>
                        Password
                      </label>
                      <Input
                        defaultValue="*********"
                        type="password"
                        disabled
                      // onChange={(e) => setPassword(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <div className="update ml-auto mr-auto">
                    <Button
                      className="btn-round"
                      color="primary"
                      type="submit"
                    >
                      Update Profile
                    </Button>
                  </div>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </div>
  )
}

export default Profile