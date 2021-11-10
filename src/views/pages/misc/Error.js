import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import errorImg from "@src/assets/images/pages/error.svg";

import "@styles/base/pages/page-misc.scss";

const Error = () => {
  return (
    <div className="misc-wrapper">
      <a className="brand-logo" href="/">
        <h2 className="brand-text text-primary ml-1">لیارا سیت</h2>
      </a>
      <div className="misc-inner p-2 p-sm-3">
        <div className="w-100 text-center">
          <h2 className="mb-1">صفحه مورد نظر پیدا نشد 🕵🏻‍♀️</h2>
          <p className="mb-2">
            اوه ! 😖 پیوندی که درخواست کرده بودید سمت سرور پیدا شد
          </p>
          <Button
            tag={Link}
            to="/"
            color="primary"
            className="btn-sm-block mb-2"
          >
            بازگشت به خانه
          </Button>
          <img className="img-fluid" src={errorImg} alt="Not authorized page" />
        </div>
      </div>
    </div>
  );
};
export default Error;
