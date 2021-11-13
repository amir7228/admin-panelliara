import { useState, useContext, Fragment } from "react";
import Avatar from "@components/avatar";
import { useSkin } from "@hooks/useSkin";
import useJwt from "@src/auth/jwt/useJwt";
import { useDispatch } from "react-redux";
import { toast, Slide } from "react-toastify";
import { handleLogin } from "@store/actions/auth";
import { AbilityContext } from "@src/utility/context/Can";
import { Link, useHistory } from "react-router-dom";
import InputPasswordToggle from "@components/input-password-toggle";
import { getHomeRouteForLoggedInUser } from "@utils";
import {
  Facebook,
  Twitter,
  Mail,
  GitHub,
  HelpCircle,
  Coffee,
} from "react-feather";
import { AvForm, AvInput } from "availity-reactstrap-validation-safe";
import {
  Alert,
  Row,
  Col,
  CardTitle,
  CardText,
  FormGroup,
  Label,
  CustomInput,
  Button,
  UncontrolledTooltip,
} from "reactstrap";

import "@styles/base/pages/page-auth.scss";
import axios from "axios";
const ToastContent = ({ name }) => (
  <Fragment>
    <div className="toastify-header">
      <div className="title-wrapper">
        <Avatar size="sm" color="success" icon={<Coffee size={12} />} />
        <h6 className="toast-title font-weight-bold">خوش آمدید {name}</h6>
      </div>
    </div>
    <div className="toastify-body">
      <span>شما وارد شدید</span>
    </div>
  </Fragment>
);

const Login = (props) => {
  const [skin, setSkin] = useSkin();
  const ability = useContext(AbilityContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("projects_admin");
  const [password, setPassword] = useState("projects_admin");

  const illustration = skin === "dark" ? "login-v2-dark.svg" : "login-v2.svg",
    source = require(`@src/assets/images/pages/${illustration}`).default;

  const handleSubmit = (event, errors) => {
    if (errors && !errors.length) {
      const form = new FormData();
      form.append("username", email);
      form.append("password", password);
      const typeLogin = "admin";
      useJwt
        .login(`/${typeLogin}/`, form)
        .then((res) => {
          const data = {
            ...res.data.userData,
            accessToken: res.data.accessToken,
            refreshToken: res.data.refreshToken,
          };
          Axios.defaults.headers.common["Authorization"] = data.accessToken;
          dispatch(handleLogin(data));
          ability.update(data.ability);
          history.push(getHomeRouteForLoggedInUser(data.role));
          toast.success(
            <ToastContent name={data.fullName || data.wallet.name || "مدیر"} />,
            { transition: Slide, hideProgressBar: true, autoClose: 2000 }
          );
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="auth-wrapper auth-v2">
      <Row className="auth-inner m-0">
        <Link className="brand-logo" to="/" onClick={(e) => e.preventDefault()}>
          <h2 className="brand-text text-primary ml-1">سایت لیارا</h2>
        </Link>
        <Col className="d-none d-lg-flex align-items-center p-5" lg="8" sm="12">
          <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
            <img className="img-fluid" src={source} alt="Login V2" />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5"
          lg="4"
          sm="12"
        >
          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="font-weight-bold mb-1">
              به سامانه خوش آمدید
            </CardTitle>
            <CardText className="mb-2">لطفا وارد حساب خود شوید</CardText>

            <AvForm className="auth-login-form mt-2" onSubmit={handleSubmit}>
              <FormGroup>
                <Label className="form-label" for="login-email">
                  نام کاربری
                </Label>
                <AvInput
                  required
                  autoFocus
                  type="text"
                  value={email}
                  id="login-email"
                  name="login-email"
                  placeholder="نام کاربری"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <div className="d-flex justify-content-between">
                  <Label className="form-label" for="login-password">
                    رمز عبور
                  </Label>
                  <Link to="/forgot-password">
                    <small>رمز عبور خود را فراموش کرده اید؟</small>
                  </Link>
                </div>
                <InputPasswordToggle
                  required
                  tag={AvInput}
                  value={password}
                  id="login-password"
                  name="login-password"
                  className="input-group-merge"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  className="custom-control-Primary"
                  id="remember-me"
                  label="Remember Me"
                />
              </FormGroup>
              <Button.Ripple
                color="primary"
                block
                disabled={!email.length || !password.length}
              >
                Sign in
              </Button.Ripple>
            </AvForm>
            <p className="text-center mt-2">
              <span className="mr-25">حساب کاربری ندارید</span>
              <Link to="/register">
                <span>یکی بسازید</span>
              </Link>
            </p>
            <div className="divider my-2">
              <div className="divider-text">یا</div>
            </div>
            <div className="auth-footer-btn d-flex justify-content-center">
              <Button.Ripple color="facebook">
                <Facebook size={14} />
              </Button.Ripple>
              <Button.Ripple color="twitter">
                <Twitter size={14} />
              </Button.Ripple>
              <Button.Ripple color="google">
                <Mail size={14} />
              </Button.Ripple>
              <Button.Ripple className="mr-0" color="github">
                <GitHub size={14} />
              </Button.Ripple>
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
