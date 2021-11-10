import { Button, Form, Input, Row, Col } from "reactstrap";
import comingSoonImg from "@src/assets/images/pages/coming-soon.svg";

import "@styles/base/pages/page-misc.scss";

const ComingSoon = () => {
  return (
    <div className="misc-wrapper">
      <a className="brand-logo" href="/">
        <h2 className="brand-text text-primary ml-1">لیارا سایت</h2>
      </a>
      <div className="misc-inner p-2 p-sm-3">
        <div className="w-100 text-center">
          <h2 className="mb-1 ">به زودی باز می گردیم 🚀</h2>
          <p className="mb-3 ">در حال بروزرسانی هستیم. لطفا بعدا تلاش نمایید</p>
          <Form
            tag={Row}
            className="justify-content-center m-0 mb-2"
            inline
            onSubmit={(e) => e.preventDefault()}
          >
            <Col
              tag={Input}
              className="mb-1 mr-md-2"
              md="5"
              sm="12"
              placeholder="john@example.com"
            />
            <Button className="btn-sm-block mb-1" color="primary">
              اطلاع رسانی
            </Button>
          </Form>
          <img
            className="img-fluid"
            src={comingSoonImg}
            alt="Coming soon page"
          />
        </div>
      </div>
    </div>
  );
};
export default ComingSoon;
