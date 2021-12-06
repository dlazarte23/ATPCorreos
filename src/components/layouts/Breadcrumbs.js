import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { breadcrumbRoutes } from "../../routes/routes";
import { Breadcrumb } from "antd";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(breadcrumbRoutes);

  return (
    <Breadcrumb>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <Breadcrumb.Item key={match.url}>{breadcrumb}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
