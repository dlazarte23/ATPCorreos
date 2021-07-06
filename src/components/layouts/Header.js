import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

export default function MainHeader() {
  return (
    <Header
      className="site-layout-sub-header-background"
      style={{ padding: 0 }}
    />
  );
}
