import useBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink } from "react-router-dom";
import { breadcrumbRoutes } from "../../routes/routes";
import { Breadcrumb } from "antd";

export default function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs(breadcrumbRoutes);

  return (
    <Breadcrumb>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <Breadcrumb.Item key={match.url}>
          <NavLink to={match.url}> {breadcrumb}</NavLink>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}
