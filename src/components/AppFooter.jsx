import React from 'react';
import { Layout, Row, Col } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: 'center', background: '#001529', color: '#fff', padding: '10px 15px' }}>
      <Row>
        <Col xs={24} sm={12} md={8}>
          <h4 style={{ color: '#fff' }}>About Us</h4>
          <p style={{ color: '#ccc' }}>We are a company dedicated to providing the best service.</p>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <h4 style={{ color: '#fff' }}>Contact</h4>
          <p style={{ color: '#ccc' }}>Email: info@example.com</p>
          <p style={{ color: '#ccc' }}>Phone: +123456789</p>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <h4 style={{ color: '#fff' }}>Follow Us</h4>
          <p>
            <a href="#" style={{ color: '#1890ff' }}>Facebook</a> | <a href="#" style={{ color: '#1890ff' }}>Twitter</a> | <a href="#" style={{ color: '#1890ff' }}>Instagram</a>
          </p>
        </Col>
      </Row>
      <div style={{ marginTop: '5px' }}>
        MyApp ©2024 Created by MyCompany
      </div>
    </Footer>
  );
};

export default AppFooter;

