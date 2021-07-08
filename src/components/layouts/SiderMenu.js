import React, { useState } from "react";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
import logo from "../../../public/images/logo_correos.png";
import {
  UploadOutlined,
  UserOutlined,
  ProfileOutlined,
  ReconciliationOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

export default function MainSider() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <img src={logo} className="appLogo" alt="ATPCorreos"></img>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<ReconciliationOutlined />}>
          <Link to="/peticiones">Peticiones</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<ProfileOutlined />}>
          <Link to="/">
            nav 2
          </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          <Link to="/">nav 3</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          <Link to="/">nav 4</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
