"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { Form, Input, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import "bootstrap/dist/css/bootstrap.css";
import "../../demo.css";
import "../../../assets/css/paper-dashboard.css";
import axios from 'axios';
import {
    // Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    FormGroup,
    // Form,
    // Input,
    Row,
    Col,
} from "reactstrap";
import { text } from '@fortawesome/fontawesome-svg-core';

const { TextArea } = Input;

const AddCourse = () => {
    const [fileList, setFileList] = useState([]);
    const [fileListV, setFileListV] = useState([]);
    const [uploading, setUploading] = useState(false);

    const router = useRouter();

    const onFinish = (values) => {
        const formData = new FormData();
        for (let i = 0; i < fileList.length; i++) {
            formData.append('imageCover', fileList[i]);
        }
        for (let i = 0; i < fileListV.length; i++) {
            formData.append('videos', fileListV[i]);
        }
        formData.append('title', values.title);
        formData.append('description', values.description);
        formData.append('videos', values.videos);
        formData.append('price', values.price);
        formData.append('instructorID', JSON.parse(localStorage.getItem('user'))._id);
        console.log('Received values of form:', formData);

        setUploading(true);
        const authToken = localStorage.getItem('token');
        axios.post('http://localhost:8000/api/v1/course', formData, {
            headers: {
                'Authorization': 'Bearer ' + authToken
            }
        })
            .then((response) => {
                console.log(response.data);
                message.success('Course added successfully');
                setUploading(false);
                router.push('/courses');
            })
            .catch((error) => {
                console.error(error);
                message.error('Failed to add course, you are not authorized to perform this action');
                setUploading(false);
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    const props = {
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        beforeUpload: (file) => {
            setFileList([...fileList, file]);
            return false;
        },
        fileList,
    };

    const propsV = {
        onRemove: (file) => {
            const index = fileListV.indexOf(file);
            const newFileListV = fileListV.slice();
            newFileListV.splice(index, 1);
            setFileListV(newFileListV);
        },
        beforeUpload: (file) => {
            setFileListV([...fileListV, file]);
            return false;
        },
        fileListV,
    };

    return (
        <div className="content text-center" style={{
            padding: "30px",
        }}>
            <Row>
                <Col md="6">
                    <Card className="card-user">
                        <CardHeader>
                            <CardTitle tag="h5">Add Course</CardTitle>
                        </CardHeader>

                        <CardBody>
                            <Row>
                                <Col md="12">
                                    <Form
                                        name="addCourseForm"
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                        layout="vertical"
                                        style={{
                                        }}
                                    >
                                        <Row>
                                            <Col className="px-1" md="7">
                                                <FormGroup>
                                                    <Form.Item
                                                        label="Title"
                                                        name="title"
                                                        rules={[{ required: true, message: 'Please enter the title' }]}
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col className="px-1" md="7">
                                                <FormGroup>
                                                    <Form.Item
                                                        label="Description"
                                                        name="description"
                                                        rules={[{ required: true, message: 'Please enter the description' }]}
                                                    >
                                                        <TextArea rows={4} />
                                                    </Form.Item>
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col className="px-1" md="7">
                                                <FormGroup>

                                                    <Form.Item
                                                        label="Image Cover"
                                                        name="imageCover"
                                                        style={{
                                                            width: "100%",
                                                            textAlign: "left",
                                                        }}
                                                        rules={[{ required: true, message: 'Please upload the image cover' }]}
                                                    >
                                                        <Upload {...props}>
                                                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                                                        </Upload>
                                                    </Form.Item>
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col className="px-1" md="7">
                                                <FormGroup>

                                                    <Form.Item
                                                        label="Price"
                                                        name="price"
                                                        rules={[{ required: true, message: 'Please enter the price' }]}
                                                    >
                                                        <Input />
                                                    </Form.Item>

                                                </FormGroup>
                                            </Col>
                                        </Row>


                                        <Row>
                                            <Col className="px-1" md="7">
                                                <FormGroup>
                                                    <Form.Item
                                                        label="Videos"
                                                        name="videos"
                                                        style={{
                                                            width: "100%",
                                                            textAlign: "left",
                                                        }}
                                                        rules={[{ required: true, message: 'Please enter the videos' }]}
                                                    >
                                                        <Upload {...propsV}>
                                                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                                                        </Upload>
                                                    </Form.Item>

                                                </FormGroup>
                                            </Col>
                                        </Row>


                                        <Row>
                                            <Col className="px-1" md="7">
                                                <FormGroup>
                                                    <Form.Item>
                                                        <Button type="primary" htmlType="submit">
                                                            Submit
                                                        </Button>
                                                    </Form.Item>

                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AddCourse;