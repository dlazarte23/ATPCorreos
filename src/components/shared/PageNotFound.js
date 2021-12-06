import React from "react";
import { Result, Button } from "antd";

import { ArrowLeftOutlined } from '@ant-design/icons'

const PageNotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Lo sentimos, la página que busca no existe."
      extra={
        <Button 
          icon={<ArrowLeftOutlined />}
          type="primary" 
          onClick={ () => window.history.back() }>
          Volver Atras
        </Button>
      }
    />
  );
};

export default PageNotFound;
