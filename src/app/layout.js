"use client";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Layout, FloatButton } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

import './global.css'
import AppSider from '@/components/AppSider';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';


const { Header, Content, Sider, Footer } = Layout

// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          {/* <Layout className='main-container'>
            <AppSider />
            <Layout>
              <AppHeader />
              <Content>
                {children}
              </Content>
              <AppFooter />
            </Layout>
          </Layout> */}

          {/* <Layout className='main-container'>
            <AppHeader />
            <Layout>
              <AppSider />
              <Content>
                {children}
              </Content>
            </Layout>
            <AppFooter />
          </Layout> */}

          {/* <Layout className='main-container' style={{ background: '#fff' }}>
            <AppHeader />
            <Content>
              {children}
            </Content>
          </Layout> */}
          {children}
        </AntdRegistry>
      </body>
    </html>
  )
}
