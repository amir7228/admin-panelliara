import Avatar from "@components/avatar";

// ** Third Party Components

import { MoreVertical, Edit, FileText, Trash } from "react-feather";
import {
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

// ** Vars

const statusApproved = {
  true: { title: "تایید شده", color: "light-primary" },
  false: { title: "تایید نشده", color: "light-danger" },
};

// ** Table Zero Config Column
export const multiLingColumns = [
  {
    name: "ردیف",
    selector: "id",
    sortable: true,
    maxWidth: "125px",
  },
  {
    name: "نام پروژه",
    selector: "title",
    sortable: true,
    minWidth: "125px",
  },
  {
    name: "توضیحات پروژه",
    selector: "description",
    sortable: true,
    minWidth: "125px",
  },
  {
    name: "تعداد فصل ها",
    selector: "chapters",
    sortable: true,
    minWidth: "110px",
  },
  {
    name: "تعداد دورس",
    selector: "lessons",
    sortable: true,
    minWidth: "310px",
  },
  {
    name: "زمان پروژه",
    selector: "duration",
    sortable: true,
    minWidth: "250px",
  },
  {
    name: "قیمت پروژه",
    selector: "price",
    sortable: true,
    minWidth: "175px",
  },
  {
    name: "وضعیت تایید",
    selector: "approved",
    sortable: true,
    minWidth: "150px",
    minWidth: "120px",
    cell: (row) => {
      return (
        <Badge color={statusApproved[row.approved].color} pill>
          {statusApproved[row.approved].title}
        </Badge>
      );
    },
  },
  {
    name: "عملیات",
    allowOverflow: true,
    cell: (row) => {
      return (
        <div className="d-flex">
          <UncontrolledDropdown>
            <DropdownToggle className="pr-1 cursor-pointer" tag="span">
              {/* <MoreVertical size={15} /> */}
              <Edit size={15} />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem className="w-100">
                <FileText size={15} />
                <span className="align-middle ml-50">جزئیات</span>
              </DropdownItem>
              <DropdownItem className="w-100">
                <Trash size={15} />
                <span className="align-middle ml-50">حذف</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      );
    },
  },
];

// ** Table Server Side Column
