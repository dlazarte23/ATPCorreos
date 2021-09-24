import React, { useEffect } from "react";
import { Layout, Popover, Button, Avatar, Badge, Row, Col } from "antd";
import avatarwomen from "../../assets/img/avatar.jpg";
import { UserOutlined, ExportOutlined } from "@ant-design/icons";
import Breadcrumbs from "./Breadcrumbs";
import "./header.css";
import {
  deslogearUsuario,
  verificarLogeoAction,
} from "../../stateManagement/actions/usuarioAction";
import { useSelector, useDispatch } from "react-redux";

const { Header } = Layout;

const MainHeader = () => {
  const dispatch = useDispatch();

  const usuario = useSelector((state) => state.usuario.usuario);

  const verificarLogeo = (usuario) => dispatch(verificarLogeoAction(usuario));

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("IS_AUTHENTICATED");

    if (isAuthenticated && Object.keys(usuario).length === 0) {
      const user = localStorage.getItem("DATA_SESION");

      verificarLogeo(JSON.parse(user));
    }
     // eslint-disable-next-line
  }, [usuario]);

  const logoutUsuario = () => dispatch(deslogearUsuario());

  const handleLogOut = () => {
    localStorage.removeItem("IS_AUTHENTICATED");
    localStorage.removeItem("DATA_SESION");

    logoutUsuario();
  };

  const content = (
    <div>
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
            <Popover
              content={content}
              title={`${usuario.shortUser}@everis.com`}
            >
              <Badge dot={true}>
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

export default MainHeader;