import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

export default function MainFooter() {
  return (
    <Footer
      style={{
        textAlign: "center",
        padding: 10,
      }}
    >
      ATPCorreos ©2021
    </Footer>
  );
}
