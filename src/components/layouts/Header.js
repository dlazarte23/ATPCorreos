import React, { useState } from "react";
import {
  Layout,
  Popover,
  Button,
  Avatar,
  Badge,
  Menu,
  Breadcrumb,
  Row,
  Col,
} from "antd";
import avatarwomen from "../../../public/images/avatar.jpg";
import { UserOutlined, ExportOutlined } from "@ant-design/icons";
import Breadcrumbs from "./Breadcrumbs";
import "./header.css";
import { deslogearUsuario } from "../../stateManagement/actions/usuarioAction";
import { useSelector, useDispatch } from "react-redux";

const { Header } = Layout;

export default function MainHeader() {
  const usuario = useSelector((state) => state.usuario.usuario);
  const dispatch = useDispatch();

  const logoutUsuario = () => dispatch(deslogearUsuario());

  const handleLogOut = () => {
    localStorage.removeItem("IS_AUTHENTICATED");
    logoutUsuario();
  };

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>
        <Button
          type="link"
          className="btn-close"
          onClick={() => handleLogOut()}
        >
          <ExportOutlined />
          &nbsp;Cerrar Sesión
        </Button>
      </p>
    </div>
  );

  return (
    <Header
      className="site-layout-sub-header-background"
      style={{ padding: 0 }}
    >
      <Row>
        <Col span={10} offset={1}>
          <Breadcrumbs />
        </Col>
        <Col span={1} offset={12}>
          <span>
            <Popover content={content} title={`${usuario.username}@everis.com`}>
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
