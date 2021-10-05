import React from "react";
import { Link } from "react-router-dom";
import { Menu, Layout } from "antd";
import {  ReconciliationOutlined, } from "@ant-design/icons";

import logo from "../../assets/img/logo_correos.png";
import "./siderMenu.css";

const { Sider } = Layout;

const MainSider = () => {

  return (
    <Sider
      breakpoint="lg"
      onBreakpoint={(broken) => { }}
      onCollapse={(collapsed, type) => { }}
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

export default MainSider;