'use client';

import React, { useState, useEffect } from "react";
import { message } from "antd";
import "./Login.css";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import axios from "axios";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    try {
      const response = await axios.post("http://localhost:8000/api/v1/auth/login", formData);

      if (response.data.errors) {
        setError(response.data.errors[0].msg);
        return;
      }

      console.log("Login successful:", response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.data));
      router.push("/courses");
    } catch (error) {
      console.error("There was a problem with the Login request:", error);
      if (error.response && error.response.data ) {
        message.error(error.response.data.errors[0].msg);
      } else {
        message.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="login">
      <div className="title">
        <h1 className="text-4xl">Login</h1>
        <p className="" style={{ fontSize: "16px" }}>
          Join STU-HUB and start learning
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <span id="error">
          {error}
        </span>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <i className="fa-solid fa-id-card"></i>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter strong Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <i className="fa-solid fa-lock"></i>
        <div className="mylgbtn">
          <button type="submit">Login</button>
        </div>
        <p className="font-bold" id="theEnd">
          Dont have an account?{" "}
          <Link href="/signUp" className="hover:underline text-[#20A4A0]">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

