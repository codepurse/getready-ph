import Head from "next/head";
import Meta from "../components/meta";
import Link from "next/link";
import Router from "next/router";
const meta = {
  title: "GetReady - Login"
};
function LoginPage() {
  return (
    <div className="body">
      <Meta meta={meta} />
      <Head>
        <link href="Css/login.css" rel="stylesheet" type="text/css" />
      </Head>
      <div
        className="divLogo"
        onClick={() => Router.push("/")}
        style={{ zIndex: 999999, cursor: "pointer" }}
      >
        <img
          src="Image/logo1.png"
          className="img-fluid"
          style={{ width: "150px" }}
        />
      </div>
      <div className="container-fluid h-100">
        <div className="row h-100 align-items-center">
          <div
            className="col-lg-12 text-center"
            style={{ paddingLeft: "60px", paddingRight: "40px" }}
          >
            <p className="pwelcome">SIGN IN</p>
            <label className="pwelcomeback">
              Welcome Back! Please login to your account.
            </label>
            <div className="form-group" style={{ marginTop: "40px" }}>
              <label htmlFor="inp" className="inp">
                <input
                  type="text"
                  id="inp"
                  placeholder=" "
                  style={{
                    background:
                      "url(Image/user.png) no-repeat 97.25% 15px white",
                    paddingRight: "30px"
                  }}
                />
                <span className="label">Email address</span>
                <span className="border" />
              </label>
            </div>
            <div className="form-group" style={{ marginTop: "20px" }}>
              <label htmlFor="inp" className="inp">
                <input
                  type="password"
                  id="inp"
                  placeholder=" "
                  style={{
                    background:
                      "url(Image/password.png) no-repeat 97.25% 15px white",
                    paddingRight: "30px"
                  }}
                />
                <span className="label">Password</span>
                <span className="border" />
              </label>
            </div>
            <div
              className="form-group divCheck"
              style={{ marginTop: "20px", marginLeft: "-120px" }}
            >
              <input type="checkbox" id="cbx" style={{ display: "none" }} />
              <label htmlFor="cbx" className="check">
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                  <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                  <polyline points="1 9 7 14 15 4" />
                </svg>
              </label>
              <span className="lblremember">Remember me</span>
            </div>
            <div className="form-group" style={{ marginTop: "10px" }}>
              <button className="btnlogin">LOG IN</button>
              <p className="pdonthave text-center">
                <Link href="/register">
                  <a
                    style={{
                      textDecoration: "none !important",
                      color: "#e53935"
                    }}
                  >
                    Dont have an account?
                  </a>
                </Link>
              </p>
              <p className="pdonthave text-center">
                <Link href="#">
                  <a
                    style={{
                      textDecoration: "none !important",
                      color: "#e53935"
                    }}
                  >
                    Forgot password?
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
