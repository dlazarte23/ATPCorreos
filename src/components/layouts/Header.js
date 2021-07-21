import React from "react";
import { Layout, Popover, Button, Avatar, Badge } from "antd";
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

export default function MainHeader() {
  return (
    <Header
      className="site-layout-sub-header-background"
      style={{ padding: 0 }}
    >
      <Row>
        <Col span={1} offset={23}>
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
