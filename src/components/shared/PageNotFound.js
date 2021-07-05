import { Result, Button } from "antd";

const PageNotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Lo sentimos, la página que busca no existe."
      extra={<Button type="primary">Volver al inicio</Button>}
    />
  );
};

export default PageNotFound;
