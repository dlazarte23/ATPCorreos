import React from "react";
import { Layout } from "antd";
import { Avatar, Badge } from 'antd';
import avatarwomen from "../../../public/images/avatar.jpg";
import {UserOutlined} from "@ant-design/icons";
import "./siderMenu.css";
import { Row, Col } from 'antd';

const { Header } = Layout;

export default function MainHeader() {
  return (
    // <Header
    //   className="site-layout-sub-header-background"
    //   style={{ padding: 0 }}
    // />
    <Row>
      <Col span={1} offset={23}>
      <span className="avatar-item">
          <Badge dot>
            <Avatar src={avatarwomen} icon={<UserOutlined />}/>
          </Badge>
        </span>
      
      </Col>
    </Row>
    
    
    // otra opcion de Avatar
/* <span className="avatar-item">
      <Badge count={1}>
        <Avatar icon={<UserOutlined />} />
      </Badge>
    </span> */

  );
}
