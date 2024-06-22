'use client';
import React, { useState, useEffect } from "react";
import { Layout, Menu, Avatar, Dropdown, Button } from 'antd';
import { UserOutlined, DownOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import logo from '../../public/logo.png';
const { Header } = Layout;

const UserMenu = () => (
  <Menu>
    <Menu.Item key="profile">
      <UserOutlined />
      Profile
    </Menu.Item>
    <Menu.Item key="settings">
      <SettingOutlined />
      Settings
    </Menu.Item>
    <Menu.Item key="logout">
      <LogoutOutlined />
      Logout
    </Menu.Item>
  </Menu>
);

const MyHeader = () => {
  const [username, setUsernamea] = useState('');
  const [role, setRole] = useState('');
  const router = useRouter();

  useEffect(() => {
    setUsernamea(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).username : '');
    setRole(localStorage.getItem('user') ? (JSON.parse(localStorage.getItem('user')).role) : '');
  }, []);

  return (
    <Header className="site-layout-background" style={{ padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link href="/" className="flex items-center">
        <Image src={logo} className=" h-11 w-11 mr-3" alt="Landwind Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          STU-HUB
        </span>
      </Link>




      {/* <div
        className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1 "
        id="mobile-menu-2">
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <Link
              href="/"
              className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
              aria-current="page">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/aboutus"
              className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contactus"
              className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
              Contact Us
            </Link>
          </li>
        </ul>
      </div> */}

      <div style={{ marginRight: '20px', display: 'flex', alignItems: 'center' }} className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-2">
        <Button type="primary" style={{ marginRight: '10px' }}
          onClick={() => {
            role === 'instructor' ? router.push('/addcourse') : router.push('/home')
          }}
        >
          {
            role === 'instructor' ? 'Create Course' : 'Become an Instructor'
          }
        </Button>
        <Dropdown overlay={UserMenu} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{ display: 'flex', alignItems: 'center', color: '#fff' }}>
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            <span style={{ marginLeft: '8px', color: '#fff' }}>{
              username
            }</span>
            <DownOutlined style={{ marginLeft: '8px' }} />
          </a>
        </Dropdown>
      </div>

    </Header>
  );
};

export default MyHeader;

