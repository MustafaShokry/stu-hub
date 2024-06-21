// 'use client';
// import { SearchOutlined, HomeOutlined, PlayCircleOutlined, BookOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
// import { Menu } from 'antd';
// const items = [
//     {
//         key: 'sub1',
//         label: 'Home',
//         icon: <HomeOutlined />,
//     },
//     {
//         key: 'sub2',
//         label: 'Search',
//         icon: <SearchOutlined />,
//     },
//     {
//         key: 'sub3',
//         label: 'Courses',
//         icon: <PlayCircleOutlined />,
//     },
//     {
//         key: 'sub4',
//         label: 'Saved',
//         icon: <BookOutlined />,
//     },
//     {
//         key: 'sub5',
//         label: 'Intenships',
//         icon: <SolutionOutlined />,
//     },
//     {
//         key: 'sub6',
//         label: 'Profile',
//         icon: <UserOutlined />,
//     },

// ];
// function AppSider() {
//     const onClick = (e) => {
//         console.log('click ', e);
//     };
//     return (
//         <Menu
//             onClick={onClick}
//             defaultSelectedKeys={['1']}
//             defaultOpenKeys={['sub1']}
//             mode="inline"
//             items={items}
//         />
//     );
// };
// export default AppSider;
'use client';

import React from 'react';
import { Layout, Menu } from 'antd';
import {
    SearchOutlined,
    HomeOutlined,
    PlayCircleOutlined,
    BookOutlined,
    SolutionOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const items = [
    {
        key: 'sub1',
        label: 'Home',
        icon: <HomeOutlined />,
    },
    {
        key: 'sub2',
        label: 'Search',
        icon: <SearchOutlined />,
    },
    {
        key: 'sub3',
        label: 'Courses',
        icon: <PlayCircleOutlined />,
    },
    {
        key: 'sub4',
        label: 'Saved',
        icon: <BookOutlined />,
    },
    {
        key: 'sub5',
        label: 'Internships',
        icon: <SolutionOutlined />,
    },
    {
        key: 'sub6',
        label: 'Profile',
        icon: <UserOutlined />,
    },
];

function AppSider() {
    const onClick = (e) => {
        console.log('click ', e);
    };

    return (
        <Sider>
            <Menu
                onClick={onClick}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
                style={{ height: '100%', borderRight: 0 }}
            />
        </Sider>
    );
}

export default AppSider;
