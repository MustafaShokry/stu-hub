'use client';
// import { Form, Input, Button, Checkbox, Select } from 'antd';

// const { Option } = Select;

// const SignUpForm = () => {
//   const onFinish = (values) => {
//     console.log('Received values of form: ', values);
//   };

//   return (
//     <Form
//       name="signup"
//       onFinish={onFinish}
//       scrollToFirstError
//       style={{ maxWidth: '400px', margin: 'auto', padding: '20px', background: '#fff', borderRadius: '8px' }}
//     >
//       <h2>Sign Up</h2>
//       <Form.Item
//         name="username"
//         label="Username"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your Username!',
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         name="email"
//         label="Email"
//         rules={[
//           {
//             type: 'email',
//             message: 'The input is not valid E-mail!',
//           },
//           {
//             required: true,
//             message: 'Please input your E-mail!',
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         name="password"
//         label="Password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your password!',
//           },
//         ]}
//         hasFeedback
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item
//         name="confirm"
//         label="Confirm Password"
//         dependencies={['password']}
//         hasFeedback
//         rules={[
//           {
//             required: true,
//             message: 'Please confirm your password!',
//           },
//           ({ getFieldValue }) => ({
//             validator(_, value) {
//               if (!value || getFieldValue('password') === value) {
//                 return Promise.resolve();
//               }
//               return Promise.reject(new Error('The two passwords that you entered do not match!'));
//             },
//           }),
//         ]}
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item
//         name="role"
//         label="Role"
//         rules={[{ required: true, message: 'Please select your role!' }]}
//       >
//         <Select placeholder="Select your role">
//           <Option value="user">User</Option>
//           <Option value="instructor">Instructor</Option>
//         </Select>
//       </Form.Item>

//       <Form.Item
//         name="agreement"
//         valuePropName="checked"
//         rules={[
//           {
//             validator: (_, value) =>
//               value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
//           },
//         ]}
//       >
//         <Checkbox>
//           I have read the <a href="">agreement</a>
//         </Checkbox>
//       </Form.Item>

//       <Form.Item>
//         <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
//           Sign Up
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default SignUpForm;

import React, { useState } from "react";
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
      alert("Passwords do not match!");
      return;
    }
    if (!formData.agree) {
      alert("You must agree to the terms and privacy policy!");
      return;
    }
    // Perform your form submission logic here
    console.log("Form data submitted:", formData);
    formData.role = "instructor";

    try {
      const response = await axios.post("http://localhost:8000/api/v1/auth/signup", formData);

      if (response.data.errors) {
        setError(response.data.errors[0].msg);
        return;
      }

      console.log("SignUp successful:", response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.data));
      router.push("/featured");
    } catch (error) {
      console.error("There was a problem with the signup request:", error);
      if (error.response && error.response.data && error.response.data.errors) {
        setError(error.response.data.errors[0].msg);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="signup">
      {/* <div className="backWhite">
        <div className="logo">
          <i className="fa-solid fa-book-open"></i>
          <h1>STU-HUB</h1>
        </div>
      </div> */}
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
        <i className="fa-solid fa-check"></i>
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
          required
        />
        <label id="checkbox" style = {{marginTop:'0px', display:'inline'}}>
          I agree with the Terms and Privacy Policy.
        </label>
        
        <div className="btn">
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

