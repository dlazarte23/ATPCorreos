import React from "react";
import { Layout, Popover, Button, Avatar, Badge, Menu, Breadcrumb } from "antd";
import avatarwomen from "../../../public/images/avatar.jpg";
import { UserOutlined, ExportOutlined } from "@ant-design/icons";
import "./header.css";
import { Row, Col } from "antd";

const { Header } = Layout;

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
    <p>
      <Button type="link" className="btn-close">
        <ExportOutlined />
        &nbsp;Cerrar Sesión
      </Button>
    </p>
  </div>
);

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        General
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Layout
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Navigation
      </a>
    </Menu.Item>
  </Menu>
);

export default function MainHeader() {
  return (
    <Header
      className="site-layout-sub-header-background"
      style={{ padding: 0 }}
    >
      <Row>
        <Col span={10} offset={1}>
          <Breadcrumb style={{ paddingTop: 10 }}>
            <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Component</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item overlay={menu}>
              <a href="">General</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Button</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col span={1} offset={12}>
          <span>
            <Popover content={content} title="admin@everis.com">
              <Badge dot>
                <Avatar
                  src={avatarwomen}
                  icon={<UserOutlined />}
                  className="avatar-item"
                />
              </Badge>
            </Popover>
          </span>
        </Col>
      </Row>
    </Header>
  );
}
