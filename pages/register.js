import Head from "next/head";
import Meta from "../components/meta";
import Link from "next/link";
import Router from 'next/router';
const meta = {
  title: "GetReady - Register"
};
function RegisterPage() {
  return (
    <div className="body">
      <Meta meta={meta} />
      <Head>
        <link href="Css/signup.css" rel="stylesheet" type="text/css" />
      </Head>
        <div className="divLogo" onClick={() => Router.push('/')} style={{zIndex: 999999, cursor: "pointer"}}> 
          <img
            src="Image/logo1.png"
            className="img-fluid"
            style={{ width: "150px" }}
          />
        </div>
        <div className="container-fluid h-100">
          <div className="container h-100">
            <div className="row align-items-center h-100 justify-content-center">
              <div className="col-lg-12 text-center">
                <p className="pGetting">GETTING STARTED</p>
                <label className="pwelcomeback">
                  Please fill all the information below to create your account
                </label>
                <div className="form-group" style={{ marginTop: "40px" }}>
                  <label htmlFor="inp" className="inp">
                    <input
                      type="text txtName"
                      id="inp"
                      placeholder=" "
                      style={{
                        background:
                          "url(Image/user.png) no-repeat 97.25% 15px white"
                      }}
                    />
                    <span className="label">Full name</span>
                    <span className="border" />
                  </label>
                </div>
                <div className="form-group" style={{ marginTop: "20px" }}>
                  <label htmlFor="inp" className="inp">
                    <input
                      type="text"
                      id="inp"
                      placeholder=" "
                      style={{
                        background:
                          "url(Image/mail.png) no-repeat 97.25% 15px white"
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
                          "url(Image/password.png) no-repeat 97.25% 15px white"
                      }}
                    />
                    <span className="label">Password</span>
                    <span className="border" />
                  </label>
                </div>
                <p className="lblremember text-center">
                  By clicking "Sign up", you agree to our privacy statement.
                </p>
                <button className="btnlogin">SIGN UP</button>
                <p className="pdonthave text-center">
                  <Link href="/login">
                    <a
                      style={{
                        textDecoration: "none !important",
                        color: "#e53935"
                      }}
                    >
                      Already have an account?
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
export default RegisterPage;
