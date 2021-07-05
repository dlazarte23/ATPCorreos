import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Lo sentimos, la página que busca no existe."
      extra={
        <Button type="primary">
          <Link to="/">Volver al inicio</Link>
        </Button>
      }
    />
  );
};

export default PageNotFound;
