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

import React, {useState} from 'react';
import { useRouter } from 'next/navigation'
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
        key: 'Home',
        label: 'Home',
        icon: <HomeOutlined />,
        to: '/home',
    },
    {
        key: 'Search',
        label: 'Search',
        icon: <SearchOutlined />,
        to: '/search',
    },
    {
        key: 'Courses',
        label: 'Courses',
        icon: <PlayCircleOutlined />,
        to: '/courses',
    },
    {
        key: 'Saved',
        label: 'Saved',
        icon: <BookOutlined />,
        to: '/saved',
    },
    {
        key: 'Internships',
        label: 'Internships',
        icon: <SolutionOutlined />,
        to: '/internships',
    },
    {
        key: 'Profile',
        label: 'Profile',
        icon: <UserOutlined />,
        to: '/profile',
    },
];

function AppSider() {
    const [active, setActive] = useState('Home');
    const router = useRouter();
    const onClick = (e) => {
        setActive(e.key);
        router.push(e.item.props.to);
    };

    return (
        <Sider>
            <Menu
                onClick={onClick}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['Home']}
                mode="inline"
                items={items}
                style={{ height: '100%', borderRight: 0 }}
            />
        </Sider>
    );
}

export default AppSider;
