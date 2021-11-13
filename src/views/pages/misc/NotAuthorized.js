import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import notAuthImg from "@src/assets/images/pages/not-authorized.svg";
import { useDispatch } from "react-redux";
import { handleLogout } from "@store/actions/auth";
import "@styles/base/pages/page-misc.scss";

const NotAuthorized = () => {
  const dispatch = useDispatch();
  return (
    <div className="misc-wrapper">
      <a className="brand-logo" href="/">
        <h2 className="brand-text text-primary ml-1">لیارا</h2>
      </a>
      <div className="misc-inner p-2 p-sm-3">
        <div className="w-100 text-center">
          <h2 className="mb-1">شما وارد نشدید 🔐</h2>
          <p className="mb-2">لطفا دوباره وارد سامانه شوید</p>
          <Button
            onClick={() => dispatch(handleLogout())}
            tag={Link}
            to="/login"
            color="primary"
            className="btn-sm-block mb-1"
          >
            بازگشت به صفحه ورود
          </Button>
          <img
            className="img-fluid"
            src={notAuthImg}
            alt="Not authorized page"
          />
        </div>
      </div>
    </div>
  );
};
export default NotAuthorized;
