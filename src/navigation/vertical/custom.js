import {
  Mail,
  Menu,
  MessageSquare,
  CheckSquare,
  Calendar,
  FileText,
  Circle,
  ShoppingCart,
  User,
} from "react-feather";

export default [
  {
    header: "ایجاد پروژه",
  },
  {
    id: "project",
    title: "پروژه ها",
    icon: <Menu size={20} />,
    children: [
      {
        id: "peroject",
        title: "ایجاد پروژه ",
        icon: <Circle size={12} />,
        navLink: "/projects",
      },
      {
        id: "expert",
        title: "متخصص",
        icon: <Circle size={12} />,
        navLink: "/commingSoon",
      },
    ],
  },
];
