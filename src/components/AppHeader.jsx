'use client';
// import Image from 'next/image'
// import logo from '../../public/logo.png';

// const MyHeader = () => {
//     return (
//         <>
//             <div className="logo">
//                 <Image src={logo} alt="logo" width={50} height={50} />
//             </div>
//         </>
//     );
// };

// export default MyHeader;


import { Layout, Menu, Avatar, Dropdown, Button } from 'antd';
import { UserOutlined, DownOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import Image from 'next/image'
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
  return (
    <Header className="site-layout-background" style={{ padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className="logo" style={{ marginLeft: '20px', fontSize: '24px', fontWeight: 'bold', color: '#fff' }}>
      <Image src={logo} alt="logo" width={50} height={50} />
      </div>
      <div style={{ marginRight: '20px', display: 'flex', alignItems: 'center' }}>
        <Button type="primary" style={{ marginRight: '10px', backgroundColor:'#0cd09f' }} >
          Action
        </Button>
        <Dropdown overlay={UserMenu} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{ display: 'flex', alignItems: 'center', color: '#fff' }}>
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            <span style={{ marginLeft: '8px', color: '#fff' }}>Username</span>
            <DownOutlined style={{ marginLeft: '8px' }} />
          </a>
        </Dropdown>
      </div>
    </Header>
  );
};

export default MyHeader;

