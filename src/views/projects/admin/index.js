import TableMultilingual from "./TableMultilingual";
// ** React Imports
import { Fragment } from "react";

// ** Custom Components
import Breadcrumbs from "@components/breadcrumbs";

const Projects = () => {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle="پروژه ها"
        //breadCrumbParent="صفحه اصلی"
        breadCrumbActive="پروژه های ایجاد شده"
        isUncontrolledDropdown={false}
      />
      <TableMultilingual />
    </Fragment>
  );
};

export default Projects;
