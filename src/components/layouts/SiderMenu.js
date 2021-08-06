import React from "react";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
import logo from "../../../public/images/logo_correos.png";
import "./siderMenu.css";
import {
  ReconciliationOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

export default function MainSider() {

  return (
    <Sider
      breakpoint="lg"
      onBreakpoint={(broken) => {
      }}
      onCollapse={(collapsed, type) => {
      }}
      style={{ position: "sticky", height: "100vh" }}
    >
      <div className="logo">
        <img src={logo} className="appLogo" alt="ATPCorreos"></img>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="sider"
      >
        <Menu.Item key="1" icon={<ReconciliationOutlined />}>
          <Link to="/peticiones">Peticiones</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
