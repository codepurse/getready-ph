import Default from "../../layouts/default";
import Head from "next/head";

function ShopPage() {
  return (
    <Default>
      <Head>
      <link href="Css/main.css" rel="stylesheet" type="text/css" />
        <link href="Css/shop.css" rel="stylesheet" type="text/css" />
      </Head>
      <div>
        <div className="container con maincon">
          <div className="row align-items-center justift-content-center">
            <div
              className="col-lg-6"
              style={{ marginTop: "70px", paddingLeft: "35px" }}
            >
              <p className="plifekit">LifeKit Bag</p>
              <p className="plifekit1">
                Our LifeKit back is designed and developed after an extensive
                R&amp;D process taking into consideration the victim's Emotional
                State of Mind and the most pressing needs during emergency
                situations.
              </p>
              <div className="row">
                <div className="col-lg-2">
                  <div className="form-group">
                    <p className="psubtitle">Color</p>
                    <div
                      className="forms"
                      style={{
                        marginLeft: "0px",
                        marginTop: "-10px",
                        backgroundColor: "white",
                        width: "95px",
                        height: "40px",
                        borderRadius: "5px"
                      }}
                    >
                      <label htmlFor="rdo1">
                        <input type="radio" id="rdo1" name="radio" />
                        <span className="rdo" />
                      </label>
                      <label htmlFor="rdo2" style={{ marginLeft: "-5px" }}>
                        <input
                          type="radio"
                          id="rdo2"
                          name="radio"
                          defaultChecked
                        />
                        <span className="rdo rdo1" />
                      </label>
                      <label htmlFor="rdo3" style={{ marginLeft: "-5px" }}>
                        <input
                          type="radio"
                          id="rdo2"
                          name="radio"
                          defaultChecked
                        />
                        <span className="rdo rdo2" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2" style={{ marginLeft: "20px" }}>
                  <p className="psubtitle">Quantity</p>
                  <div
                    className="form-group"
                    style={{
                      backgroundColor: "white",
                      width: "67px",
                      height: "40px",
                      marginTop: "-10px"
                    }}
                  >
                    <div style={{ paddingTop: "7px" }}>
                      <button className="btnminus btn1" disabled>
                        −
                      </button>
                      <label className="p1">0</label>
                      <button className="btnplus btn1">+</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <button className="btnaddtocart">ADD TO CART</button>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="Image/item1.png"
                className="img-fluid mx-auto d-block"
                style={{ width: "450px" }}
              />
            </div>
          </div>
        </div>
        <div className="container con">
          <div className="row" style={{ marginTop: "40px" }}>
            <div className="col-lg-12">
              <p className="plist">List of all products</p>
            </div>
          </div>
          <div className="row" style={{ marginTop: "10px" }}>
            <div className="col-lg-3">
              <div
                className="card"
                style={{
                  width: "18rem",
                  border: "0px",
                  backgroundColor: "#EDF1F2"
                }}
              >
                <img
                  src="Image/item1.png"
                  className="card-img-top img-fluid mx-auto d-block"
                  style={{ width: "250px", padding: "20px 0px" }}
                />
                <div className="card-body" style={{ backgroundColor: "white" }}>
                  <h5 className="card-title">
                    Fullkit<span className="float-right">₱999</span>
                  </h5>
                  <p className="card-text">
                    For possible trapped situational needs
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="card"
                style={{
                  width: "18rem",
                  border: "0px",
                  backgroundColor: "#EDF1F2"
                }}
              >
                <img
                  src="Image/item1.png"
                  className="card-img-top img-fluid mx-auto d-block"
                  style={{ width: "250px", padding: "20px 0px" }}
                />
                <div className="card-body" style={{ backgroundColor: "white" }}>
                  <h5 className="card-title">
                    Slingkit<span className="float-right">₱999</span>
                  </h5>
                  <p className="card-text">
                    For possible evacuation and escape situational needs
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="card"
                style={{
                  width: "18rem",
                  border: "0px",
                  backgroundColor: "#EDF1F2"
                }}
              >
                <img
                  src="Image/item1.png"
                  className="card-img-top img-fluid mx-auto d-block"
                  style={{ width: "250px", padding: "20px 0px" }}
                />
                <div className="card-body" style={{ backgroundColor: "white" }}>
                  <h5 className="card-title">
                    Solokit<span className="float-right">₱999</span>
                  </h5>
                  <p className="card-text">For individual situational needs</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="card"
                style={{
                  width: "18rem",
                  border: "0px",
                  backgroundColor: "#EDF1F2"
                }}
              >
                <img
                  src="Image/item1.png"
                  className="card-img-top img-fluid mx-auto d-block"
                  style={{ width: "250px", padding: "20px 0px" }}
                />
                <div className="card-body" style={{ backgroundColor: "white" }}>
                  <h5 className="card-title">
                    Fullkit<span className="float-right">₱999</span>
                  </h5>
                  <p className="card-text">
                    For possible trapped situational needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container con">
          <div className="row" style={{ marginTop: "10px" }}>
            <div className="col-lg-3">
              <div
                className="card"
                style={{
                  width: "18rem",
                  border: "0px",
                  backgroundColor: "#EDF1F2"
                }}
              >
                <img
                  src="Image/item1.png"
                  className="card-img-top img-fluid mx-auto d-block"
                  style={{ width: "250px", padding: "20px 0px" }}
                />
                <div className="card-body" style={{ backgroundColor: "white" }}>
                  <h5 className="card-title">
                    Fullkit<span className="float-right">₱999</span>
                  </h5>
                  <p className="card-text">
                    For possible trapped situational needs
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="card"
                style={{
                  width: "18rem",
                  border: "0px",
                  backgroundColor: "#EDF1F2"
                }}
              >
                <img
                  src="Image/item1.png"
                  className="card-img-top img-fluid mx-auto d-block"
                  style={{ width: "250px", padding: "20px 0px" }}
                />
                <div className="card-body" style={{ backgroundColor: "white" }}>
                  <h5 className="card-title">
                    Slingkit<span className="float-right">₱999</span>
                  </h5>
                  <p className="card-text">
                    For possible evacuation and escape situational needs
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="card"
                style={{
                  width: "18rem",
                  border: "0px",
                  backgroundColor: "#EDF1F2"
                }}
              >
                <img
                  src="Image/item1.png"
                  className="card-img-top img-fluid mx-auto d-block"
                  style={{ width: "250px", padding: "20px 0px" }}
                />
                <div className="card-body" style={{ backgroundColor: "white" }}>
                  <h5 className="card-title">
                    Solokit<span className="float-right">₱999</span>
                  </h5>
                  <p className="card-text">For individual situational needs</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="card"
                style={{
                  width: "18rem",
                  border: "0px",
                  backgroundColor: "#EDF1F2"
                }}
              >
                <img
                  src="Image/item1.png"
                  className="card-img-top img-fluid mx-auto d-block"
                  style={{ width: "250px", padding: "20px 0px" }}
                />
                <div className="card-body" style={{ backgroundColor: "white" }}>
                  <h5 className="card-title">
                    Fullkit<span className="float-right">₱999</span>
                  </h5>
                  <p className="card-text">
                    For possible trapped situational needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container con">
          <div className="row align-items-center" style={{ marginTop: "40px" }}>
            <div className="col-lg-6">
              <img
                src="Image/try.jpg"
                className="img-fluid"
                style={{
                  width: "600px",
                  borderRadius: "10px",
                  WebkitBoxShadow: "1px 1px 15px -7px #000000",
                  boxShadow: "1px 1px 15px -7px #000000"
                }}
              />
            </div>
            <div className="col-lg-6">
              <p className="pcoltitle">Lorem ipsum dolor sit amet</p>
              <p className="pcoltitle1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="form-group">
                <div className="row" style={{ marginTop: "25px" }}>
                  <div className="col-sm-4">
                    <img src="Image/health.png" className="img-fluid" />
                    <label className="pfirstaid">First aid</label>
                  </div>
                  <div className="col-sm-4">
                    <img src="Image/survival.png" className="img-fluid" />
                    <label className="pfirstaid">Survival Kit</label>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-sm-4">
                    <img src="Image/info.png" className="img-fluid" />
                    <label className="pfirstaid">Emergency info</label>
                  </div>
                  <div className="col-sm-4">
                    <img src="Image/bubbles.png" className="img-fluid" />
                    <label className="pfirstaid">Hygiene</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-fluid"
          style={{ marginTop: "40px", backgroundColor: "#EDF1F2" }}
        >
          <div
            className="row"
            style={{ marginTop: "70px", paddingBottom: "70px" }}
          >
            <div className="col-lg-12 text-center">
              <p className="pnewsletter">SIGN UP TO NEWSLETTER</p>
              <p className="pnewsletter1">
                Sign up for our weekly newsletter for all the latest and special
                offers
              </p>
              <input type="text" className="txtnewsletter" />
              <button className="btnsubscribe1">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </Default>
  );
}
export default ShopPage;
