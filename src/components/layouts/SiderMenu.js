import React, { useState } from "react";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
//import { ExportOutlined } from "@ant-design/icons";
import logo from "../../../public/images/logo_correos.png";
//import css
import "./siderMenu.css";
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
    <Sider
      breakpoint="lg"
      //collapsedWidth="0"
      onBreakpoint={(broken) => {
        //console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        //console.log(collapsed, type);
      }}
      /* collapsible
      collapsed={collapsed}
      onCollapse={onCollapse} */
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
        {/* <Menu.Item key="5" icon={<ExportOutlined />} className="btn-close">
          <Link to="/">Cerrar Sesión </Link>
        </Menu.Item> */}
      </Menu>
    </Sider>
  );
}
