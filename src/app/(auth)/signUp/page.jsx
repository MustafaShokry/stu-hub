'use client';

import React, { useState } from "react";
import { Form, Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./SignUp.css";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    conPassword: "",
    agree: false
  });
  const [error, setError] = useState("");
  const router = useRouter();
  const [fileList, setFileList] = useState([]);

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

  // const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();
    // Perform validation here if needed
    if (formData.password !== formData.conPassword) {
      message.error("Passwords do not match!");
      return;
    }
    if (!formData.agree) {
      message.error("You must agree to the terms and conditions!");
      return;
    }
    if (fileList.length === 0) {
      message.error("Please upload an image!");
      return;
    }
    formData.role = "user";
    const vformData = new FormData();
    vformData.append("fullName", formData.fullName);
    vformData.append("email", formData.email);
    vformData.append("username", formData.username);
    vformData.append("password", formData.password);
    vformData.append("role", formData.role);
    vformData.append("image", fileList[0]);

    try {
      const response = await axios.post("http://localhost:8000/api/v1/auth/signup", vformData);

      if (response.data.errors) {
        setError(response.data.errors[0].msg);
        return;
      }

      console.log("SignUp successful:", response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.data));
      router.push("/courses");
    } catch (error) {
      console.error("An error occurred:", error); 
      if (error.response && error.response.data && error.response.data.errors) {
        message.error(error.response.data.errors[0].msg);
      } else {
        message.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="signup">
      <div className="title">
        <h1>Sign Up</h1>
        <p>Join STU-HUB and start learning</p>
      </div>
      <form onSubmit={handleSubmit}>
        <span id="error">
          {error}
        </span>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter Your Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <i className="fa-solid fa-user"></i>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <i className="fa-solid fa-envelope"></i>
        <label htmlFor="username">
          Username
        </label>
        <input
          type="text"
          name="username"
          placeholder="Enter a Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <i className="fa-solid fa-id-card"></i>
        <label htmlFor="password">Create a Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter strong Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <i className="fa-solid fa-lock"></i>
        <label htmlFor="conPassword">Confirm Password</label>
        <input
          type="password"
          name="conPassword"
          placeholder="Confirm your Password"
          value={formData.conPassword}
          onChange={handleChange}
          required
        />
        <Form.Item
          label="Image"
          name="image"
          style={{
            width: "100%",
            textAlign: "left",
            marginTop: "15px",
          }}
          rules={[{ required: true, message: 'Please upload the image cover' }]}
        >
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
          required
        />
        <label id="checkbox" style={{ marginTop: '0px', display: 'inline' }}>
          I agree with the Terms and Privacy Policy.
        </label>



        <div className="mylgbtn">
          <button type="submit">Sign Up</button>
        </div>
        <p id="theEnd">
          Already have an account?{" "}
          <Link href="/login" className="hover:underline text-[#20A4A0]">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;

