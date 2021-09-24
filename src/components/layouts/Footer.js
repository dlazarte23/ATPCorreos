import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const MainFooter = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        padding: 10,
      }}
    >
      ATPCorreos ©{ new Date().getFullYear() }
    </Footer>
  );
}

export default MainFooter;