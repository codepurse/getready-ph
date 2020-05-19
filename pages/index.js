import Default from "../layouts/default";
import Head from "next/head";
const meta = {
  title: "GetReady - Home"
};

var x = 1;
function shoot() {
  $(".text").toggleClass("clamp");
  if (x == 1) {
    $(".pReadMore").text("Close");
    x = 0;
  } else {
    $(".pReadMore").text("Read More");
    x = 1;
  }
}

const announcement = () => (
  <div
    className="container-fluid conannouncement"
    style={{ backgroundColor: "#212121", paddingTop: "10px" }}
  >
    <div className="container con">
      <div className="row align-items-center">
        <div className="col-lg-12 text-center">
          <p className="pannouncement">
            <i>
              <b>Enjoy and extra 20% off</b>
            </i>{" "}
            on selected bundled items.. <b className="preadmore">Read More</b>
            <span className="pclose float-right">X</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

function HomePage() {
  return (
    <Default meta={meta} announcement={announcement}>
      <Head>
        <link
          href="/Css/main.css"
          rel="stylesheet"
          type="text/css"
          key="main-css"
        />
      </Head>
      <div>
        <div className="container con conNews">
          <div className="row" style={{ padding: "0px 15px" }}>
            <div className="col-lg-1 col-md-1 col-sm-1 col-1 colNewsButton">
              <button className="btnNews ">NEWS</button>
            </div>
            <div className="col-lg-11 col-md-11 col-sm-11 col-11 colNews">
              <div className="divNews " style={{ width: "100%" }}>
                <span className="lblNews " style={{ padding: "0px" }}>
                  <div className="marquee">
                    <div>
                      <span className="pNews1 ">
                        Vinta death toll in Lanao del Norte mountain village
                        rises to
                      </span>{" "}
                      .&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="pNews2 ">
                        {" "}
                        Startups tapped to rescue disaster-prone ASEAN region.
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="pNews3 ">
                        Duterte creates task force to speed up Yolanda rehab.
                      </span>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="pNews4 ">
                        #MMShakeDrill trends, racks up over 3.8 billion
                        impressions
                      </span>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container con ">
          <div
            className="row "
            style={{ marginTop: "20px", padding: "0px 15px" }}
          >
            <div className="col-lg-8 ">
              <div
                id="carouselExampleSlidesOnly "
                className="carousel slide "
                data-ride="carousel "
                style={{
                  WebkitBoxShadow: "1px 1px 15px -7px #000000",
                  boxShadow: "1px 1px 17px -7px #000000"
                }}
              >
                <div className="carousel-inner ">
                  <div className="carousel-item active ">
                    <img
                      className="d-block w-100 "
                      src="Image/carousel1.jpg "
                      alt="First slide "
                      style={{ height: "370px !important" }}
                    />
                  </div>
                  <div className="carousel-item ">
                    <img
                      className="d-block w-100 "
                      src="Image/carousel2.jpg "
                      alt="Second slide "
                      style={{ height: "370px !important" }}
                    />
                  </div>
                  <div className="carousel-item ">
                    <img
                      className="d-block w-100 "
                      src="Image/carousel3.jpg "
                      alt="Third slide "
                      style={{ height: "370px !important" }}
                    />
                  </div>
                </div>
              </div>
              <p
                className="paboutus1 text"
                style={{
                  marginTop: "10px",
                  fontSize: "1rem",
                  backgroundColor: "#FF5722",
                  color: "#F5F5F5",
                  padding: "5px"
                }}
              >
                The world as we know it is no longer a safe place. Man induced
                terrors, accidents and natural disasters are making headlines
                all over the world. Countless lives are lost, livelihoods
                destroyed in one unexpected moment. YET many of us go about our
                daily routine as if it could never happen to us, only to find
                out too late when it does. An earthquake, typhoon, flood, fire
                and even household, industrial or an auto accident can happen
                anytime, anywhere. BUT knowing the latest information on what to
                do, understanding what you may need, and trying to find out
                where to get them, seem to be the common challenges mentioned
                when we did a survey about preparedness. Here you will get all
                the answers. It is now up to us to keep ourselves safe. It is
                time to start getting prepared. It is time for GetReadyPH!
              </p>
              <p onClick={shoot} className="pReadMore">
                Read More
              </p>
            </div>
            <div className="col-lg-4 ">
              <div className="row rowNews">
                <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                  <img
                    src="Image/Banner.jpg"
                    className="img-fluid"
                    data-toggle="modal"
                    data-target="#exampleModal1"
                  />
                </div>
                <div
                  className="col-lg-7 col-md-7 col-sm-7 col-7"
                  style={{ height: "100% !important" }}
                >
                  <p className="ptitle ">
                    {" "}
                    Basic Emergencies <br /> What to do before help arrives{" "}
                    <br /> Tips from Lifeline 16911
                  </p>
                  <p className="pnewstitle ">Click here</p>
                </div>
              </div>
              <div className="row " style={{ marginTop: "5px" }}>
                <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                  <img src="Image/banner 1.jpg" className="img-fluid" />
                </div>
                <div className="col-lg-7 col-md-7 col-sm-7 col-7">
                  <p className="ptitle ">PAGASA & PHILVOCS live updates</p>
                  <p className="pnewstitle ">Click here</p>
                </div>
              </div>
              <div className="row " style={{ marginTop: "5px" }}>
                <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                  <img src="Image/Banner 1-1.jpg" className="img-fluid " />
                </div>
                <div className="col-lg-7 col-md-7 col-sm-7 col-7">
                  <p className="ptitle ">Videos</p>
                  <p className="pnewstitle ">Click here</p>
                </div>
              </div>
              <div className="row " style={{ marginTop: "5px" }}>
                <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                  <img src="Image/Untitled-1.png" className="img-fluid " />
                </div>
                <div className="col-lg-7col-md-7 col-sm-7 col-7">
                  <p className="ptitle ">Circle of Experts What they say</p>
                  <p className="pnewstitle ">Click here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container con ">
          <div
            className="row "
            style={{ marginTop: "40px", padding: "0px 15px" }}
          >
            <div className="col-lg-3 ">
              <ul className="ulside ">
                <li>EMERGENCY HOTLINE</li>
                <li>PRODUCT/SERVICE CATEGORY</li>
                <li>HOW TO BUY</li>
                <li>BE AN AFFLIATE</li>
              </ul>
              <div className="row ">
                <div className="col-lg-12 ">
                  <div className="box1">
                    <p>GET YOURSELF READY</p>
                    <p style={{ marginTop: "-15px" }}>BUY NOW!</p>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#e83b4f",
                        marginTop: "-10px",
                        marginBottom: "0px",
                        right: "0px"
                      }}
                    >
                      Click here
                    </p>
                  </div>
                </div>
              </div>
              <div className="row" style={{ marginTop: "20px" }}>
                <div className="col-lg-12">
                  <div className="box1">
                    <p>JOIN US. IT'S FREE!</p>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#e83b4f",
                        marginTop: "-10px",
                        marginBottom: "0px"
                      }}
                    >
                      Click here
                    </p>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-lg-12" style={{ marginTop: "20px" }}>
                  <div className="box1">
                    <p>WHAT YOU NEED TO KNOW</p>
                    <p style={{ marginTop: "-15px", fontSize: "1rem" }}>
                      Earthquake, Typhoon, Fire & Pandemic
                    </p>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#e83b4f",
                        marginTop: "-10px",
                        marginBottom: "0px"
                      }}
                    >
                      Click here
                    </p>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-lg-12" style={{ marginTop: "20px" }}>
                  <div className="box1">
                    <p>TRAININGS</p>
                    <p style={{ marginTop: "-15px", fontSize: "1rem" }}>
                      Learn What To Do
                    </p>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#e83b4f",
                        marginTop: "-10px",
                        marginBottom: "0px"
                      }}
                    >
                      Click here
                    </p>
                  </div>
                </div>
              </div>
              <div className="row " style={{ marginTop: "10px" }}>
                <div className="col-lg-12 ">
                  <img src="Image/1.jpg" className="img-fluid " />
                </div>
              </div>
              <div className="row " style={{ marginTop: "20px" }}>
                <div className="col-lg-12 ">
                  <p className="psocial ">Social Media</p>
                  <div className="form-inline ">
                    <img
                      src="Image/sidefacebook.png "
                      style={{ marginRight: "18px", width: "24px" }}
                    />
                    <img
                      src="Image/sideinstagram.png "
                      style={{ marginRight: "18px", width: "24px" }}
                    />
                    <img
                      src="Image/sidetwitter.png "
                      style={{ marginRight: "18px", width: "24px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group ">
                <p className="pcategories ">
                  Looking for and emergency preparedness expert?
                </p>
                <p className="plifekit1 ">
                  If your company is planning to organize a disaster preparation
                  and management activity, we can help you! Click this link..
                </p>
              </div>
              <div className="form-group ">
                <p className="pcategories ">Are you at risk?</p>
                <p className="plifekit1 ">
                  Is your barangay located on or near an active earthquake
                  fault? Click this link to find out.
                </p>
              </div>
            </div>
            <div className="col-lg-9 ">
              <div className="row rowLatest">
                <div
                  className="col-lg-12 colLatest"
                  style={{ padding: "0px 5px" }}
                >
                  <label className="platest ">LATEST</label>
                  <label className="pviewmore float-right ">VIEW MORE</label>
                </div>
              </div>
              <div className="row ">
                <div className="col-lg-12" style={{ padding: "0px 5px" }}>
                  <div className="card-deck">
                    <div
                      className="card"
                      style={{
                        width: "18rem",
                        backgroundColor: "#F5F5F5",
                        border: "0px",
                        position: "relative"
                      }}
                    >
                      <div className="divimage " style={{ height: "240px" }}>
                        <div
                          className="row align-items-center"
                          style={{ height: "100%" }}
                        >
                          <div
                            className="col-lg-12 show-image "
                            style={{ position: "relative" }}
                          >
                            <img
                              src="Image/Bag Photos/Auto Kit/AutoFinalWarningUp.png"
                              className="card-img-top img-fluid mx-auto image "
                              style={{ width: "150px" }}
                              alt="... "
                            />
                            <div className="middle ">
                              <button className="btnaddtocart ">
                                <img
                                  src="Image/carthover.png "
                                  onMouseOver={e =>
                                    (e.currentTarget.src =
                                      "Image/carthoverwhite.png")
                                  }
                                  onMouseOut={e =>
                                    (e.currentTarget.src =
                                      "Image/carthover.png")
                                  }
                                  className="img-fluid "
                                />
                              </button>
                              <button className="btnaddtocart ">
                                <img
                                  src="Image/viewcart.png "
                                  onMouseOver={e =>
                                    (e.currentTarget.src =
                                      "Image/viewcartwhite.png")
                                  }
                                  onMouseOut={e =>
                                    (e.currentTarget.src = "Image/viewcart.png")
                                  }
                                  className="img-fluid "
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-body "
                        style={{
                          backgroundColor: "white",
                          paddingLeft: "0px",
                          paddingRight: "0px"
                        }}
                      >
                        <h5 className="card-title ">
                          Auto Kit{" "}
                          <span
                            className="float-right "
                            style={{ fontWeight: "bold" }}
                          >
                            ₱200
                          </span>
                        </h5>
                        <p className="card-text ">Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                    <div
                      className="card show-image "
                      style={{
                        width: "18rem",
                        backgroundColor: "#F5F5F5",
                        border: "0px",
                        position: "relative"
                      }}
                    >
                      <div className="divimage " style={{ height: "240px" }}>
                        <div
                          className="row align-items-center"
                          style={{ height: "100%" }}
                        >
                          <div className="col-lg-12">
                            <img
                              src="Image/Bag Photos/Trauma Kit/trauma.png"
                              className="card-img-top img-fluid mx-auto image"
                              style={{ width: "160px" }}
                              alt="... "
                            />
                            <div className="middle ">
                              <button className="btnaddtocart ">
                                <img
                                  src="Image/carthover.png "
                                  onMouseOver={e =>
                                    (e.currentTarget.src =
                                      "Image/carthoverwhite.png")
                                  }
                                  onMouseOut={e =>
                                    (e.currentTarget.src =
                                      "Image/carthover.png")
                                  }
                                  className="img-fluid "
                                />
                              </button>
                              <button className="btnaddtocart ">
                                <img
                                  src="Image/viewcart.png "
                                  onMouseOver={e =>
                                    (e.currentTarget.src =
                                      "Image/viewcartwhite.png")
                                  }
                                  onMouseOut={e =>
                                    (e.currentTarget.src = "Image/viewcart.png")
                                  }
                                  className="img-fluid "
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-body "
                        style={{
                          backgroundColor: "white",
                          paddingLeft: "0px",
                          paddingRight: "0px"
                        }}
                      >
                        <h5 className="card-title ">
                          Trauma Kit
                          <span
                            className="float-right "
                            style={{ fontWeight: "bold" }}
                          >
                            ₱500
                          </span>
                        </h5>
                        <p className="card-text ">Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                    <div
                      className="card "
                      style={{
                        width: "18rem",
                        backgroundColor: "#F5F5F5",
                        border: "0px"
                      }}
                    >
                      <div className="divimage " style={{ height: "240px" }}>
                        <div
                          className="row align-items-center"
                          style={{ height: "100%" }}
                        >
                          <div
                            className="col-lg-12 show-image "
                            style={{ position: "relative" }}
                          >
                            <img
                              src="Image/Bag Photos/Carry Kit/Carry.png "
                              className="card-img-top img-fluid mx-auto image "
                              style={{ width: "150px" }}
                              alt="... "
                            />
                            <div className="middle ">
                              <button className="btnaddtocart ">
                                <img
                                  src="Image/carthover.png "
                                  onMouseOver={e =>
                                    (e.currentTarget.src =
                                      "Image/carthoverwhite.png")
                                  }
                                  onMouseOut={e =>
                                    (e.currentTarget.src =
                                      "Image/carthover.png")
                                  }
                                  className="img-fluid "
                                />
                              </button>
                              <button className="btnaddtocart ">
                                <img
                                  src="Image/viewcart.png "
                                  onMouseOver={e =>
                                    (e.currentTarget.src =
                                      "Image/viewcartwhite.png")
                                  }
                                  onMouseOut={e =>
                                    (e.currentTarget.src = "Image/viewcart.png")
                                  }
                                  className="img-fluid "
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-body "
                        style={{
                          backgroundColor: "white",
                          paddingLeft: "0px",
                          paddingRight: "0px"
                        }}
                      >
                        <h5 className="card-title ">
                          Carry Kit{" "}
                          <span
                            className="float-right "
                            style={{ fontWeight: "bold" }}
                          >
                            ₱200
                          </span>
                        </h5>
                        <p className="card-text ">Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row " style={{ marginTop: "15px" }}>
                <div
                  className="col-lg-12 colPopular"
                  style={{ padding: "0px 5px" }}
                >
                  <p className="platest text-center">PRODUCTS AND SERVICES</p>
                </div>
                <div className="col-lg-12 " style={{ padding: "0px 5px" }}>
                  <div className="card-deck ">
                    <div
                      className="card "
                      style={{
                        width: "18rem",
                        backgroundColor: "#F5F5F5",
                        border: "0px"
                      }}
                    >
                      <div className="divimage">
                        <div
                          className="row align-items-center"
                          style={{ height: "100%" }}
                        >
                          <div
                            className="col-lg-12 show-image "
                            style={{ position: "relative" }}
                          >
                            <img
                              src="Image/pandemic.jpg"
                              className="card-img-top img-fluid mx-auto image serviceImage"
                              alt="... "
                            />
                            <div className="middle">
                              <button className="btnaddtocart">
                                <img
                                  src="Image/viewcart.png "
                                  onMouseOver={e =>
                                    (e.currentTarget.src =
                                      "Image/viewcartwhite.png")
                                  }
                                  onMouseOut={e =>
                                    (e.currentTarget.src = "Image/viewcart.png")
                                  }
                                  className="img-fluid "
                                />
                              </button>
                            </div>
                            <h5 className="card-title serviceName">
                                  PANDEMIC{" "}
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-body "
                        style={{
                          backgroundColor: "white",
                          paddingLeft: "0px",
                          paddingRight: "0px"
                        }}
                      >
                      </div>
                    </div>
                    <div
                      className="card "
                      style={{
                        width: "18rem",
                        backgroundColor: "#F5F5F5",
                        border: "0px"
                      }}
                    >
                      <div className="divimage">
                        <div
                          className="row align-items-center"
                          style={{ height: "100%" }}
                        >
                          <div
                            className="col-lg-12 show-image "
                            style={{ position: "relative" }}
                          >
                            <img
                              src="Image/earthquake.jpg"
                              className="card-img-top img-fluid image mx-auto serviceImage"
                              alt="... "
                            />
                            <div className="middle">
                              <button className="btnaddtocart">
                                <img
                                  src="Image/viewcart.png "
                                  onMouseOver={e =>
                                    (e.currentTarget.src =
                                      "Image/viewcartwhite.png")
                                  }
                                  onMouseOut={e =>
                                    (e.currentTarget.src = "Image/viewcart.png")
                                  }
                                  className="img-fluid "
                                />
                              </button>
                            </div>
                            <h5 className="card-title serviceName">
                                  EARTHQUAKE{" "}
                                </h5>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-body "
                        style={{
                          backgroundColor: "white",
                          paddingLeft: "0px",
                          paddingRight: "0px"
                        }}
                      >
                        
                      </div>
                    </div>
                    <div
                      className="card "
                      style={{
                        width: "18rem",
                        backgroundColor: "#F5F5F5",
                        border: "0px"
                      }}
                    >
                      <div className="divimage " style={{ height: "240px" }}>
                        <div
                          className="row align-items-center"
                          style={{ height: "100%" }}
                        >
                          <div
                            className="col-lg-12 show-image "
                            style={{ position: "relative" }}
                          >
                            <img
                              src="Image/fire.jpg"
                              className="card-img-top img-fluid mx-auto image serviceImage"
                              alt="... "
                            />
                            <div className="middle">
                              <button className="btnaddtocart">
                                <img
                                  src="Image/viewcart.png "
                                  onMouseOver={e =>
                                    (e.currentTarget.src =
                                      "Image/viewcartwhite.png")
                                  }
                                  onMouseOut={e =>
                                    (e.currentTarget.src = "Image/viewcart.png")
                                  }
                                  className="img-fluid "
                                />
                              </button>
                            </div>
                            <h5 className="card-title serviceName">
                                  FIRE{" "}
                                </h5>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-body "
                        style={{
                          backgroundColor: "white",
                          paddingLeft: "0px",
                          paddingRight: "0px"
                        }}
                      >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row " style={{ marginTop: "15px" }}>
                <div className="col-lg-12 " style={{ padding: "0px 5px" }}>
                  <div className="card-deck ">
                    <div
                      className="card "
                      style={{
                        width: "18rem",
                        backgroundColor: "#F5F5F5",
                        border: "0px"
                      }}
                    >
                      <div className="divimage " style={{ height: "240px" }}>
                        <div
                          className="row align-items-center"
                          style={{ height: "100%" }}
                        >
                          <div
                            className="col-lg-12 show-image "
                            style={{ position: "relative" }}
                          >
                            <img
                              src="Image/typhoon.jpg"
                              className="card-img-top img-fluid mx-auto image serviceImage"
                              alt="... "
                            />
                            <div className="middle">
                              <button className="btnaddtocart">
                                <img
                                  src="Image/viewcart.png "
                                  onMouseOver={e =>
                                    (e.currentTarget.src =
                                      "Image/viewcartwhite.png")
                                  }
                                  onMouseOut={e =>
                                    (e.currentTarget.src = "Image/viewcart.png")
                                  }
                                  className="img-fluid "
                                />
                              </button>
                            </div>
                            <h5 className="card-title serviceName">
                                  TYPHOON{" "}
                                </h5>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-body "
                        style={{
                          backgroundColor: "white",
                          paddingLeft: "0px",
                          paddingRight: "0px"
                        }}
                      >
                        
                      </div>
                    </div>
                    <div
                      className="card "
                      style={{
                        width: "18rem",
                        backgroundColor: "#F5F5F5",
                        border: "0px"
                      }}
                    >
                      <div className="divimage " style={{ height: "240px" }}>
                        <div
                          className="row align-items-center"
                          style={{ height: "100%" }}
                        >
                          <div
                            className="col-lg-12 show-image"
                            style={{ position: "relative" }}
                          >
                            <img
                              src="Image/emt.jpg"
                              className="card-img-top img-fluid mx-auto image serviceImage"
                              alt="... "
                            />
                            <div className="middle">
                              <button className="btnaddtocart">
                                <img
                                  src="Image/viewcart.png "
                                  onMouseOver={e =>
                                    (e.currentTarget.src =
                                      "Image/viewcartwhite.png")
                                  }
                                  onMouseOut={e =>
                                    (e.currentTarget.src = "Image/viewcart.png")
                                  }
                                  className="img-fluid "
                                />
                              </button>
                            </div>
                            <h5 className="card-title serviceName mb-0">
                                  MEDICAL / EMT{" "}
                                </h5>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-body "
                        style={{
                          backgroundColor: "white",
                          paddingLeft: "0px",
                          paddingRight: "0px"
                        }}
                      >
                      </div>
                    </div>
                    <div
                      className="card "
                      style={{
                        width: "18rem",
                        backgroundColor: "#F5F5F5",
                        border: "0px"
                      }}
                    >
                      <div className="divimage " style={{ height: "240px" }}>
                        <div
                          className="row align-items-center"
                          style={{ height: "100%" }}
                        >
                          <div
                            className="col-lg-12 show-image "
                            style={{ position: "relative" }}
                          >
                            <img
                              src="Image/emergency.jpg"
                              className="card-img-top img-fluid mx-auto image serviceImage"
                              alt="... "
                            />
                            <div className="middle">
                              <button className="btnaddtocart">
                                <img
                                  src="Image/viewcart.png "
                                  onMouseOver={e =>
                                    (e.currentTarget.src =
                                      "Image/viewcartwhite.png")
                                  }
                                  onMouseOut={e =>
                                    (e.currentTarget.src = "Image/viewcart.png")
                                  }
                                  className="img-fluid "
                                />
                              </button>
                            </div>
                            <h5 className="card-title serviceName mb-0">
                                  AUTO EMERGENCY{" "}
                                </h5>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-body "
                        style={{
                          backgroundColor: "white",
                          paddingLeft: "0px",
                          paddingRight: "0px"
                        }}
                      >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal1"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <p className="pTell">Tell us what you want to do.</p>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="box">
                        <div className="form-inline">
                          <img
                            src="Image/knife.png"
                            className="img-fluid"
                            style={{ width: "25px" }}
                          ></img>
                          <label className="lblModal">Bleed and Cuts</label>
                        </div>
                      </div>
                      <div className="box">
                        <div className="form-inline">
                          <img
                            src="Image/cardiac.png"
                            className="img-fluid"
                            style={{ width: "25px" }}
                          ></img>
                          <label className="lblModal">Cardiac Arrest</label>
                        </div>
                      </div>
                      <div className="box">
                        <div className="form-inline">
                          <img
                            src="Image/emoji.png"
                            className="img-fluid"
                            style={{ width: "25px" }}
                          ></img>
                          <label className="lblModal">Concussion</label>
                        </div>
                      </div>
                      <div className="box">
                        <div className="form-inline">
                          <img
                            src="Image/drown.png"
                            className="img-fluid"
                            style={{ width: "25px" }}
                          ></img>
                          <label className="lblModal">Drowning</label>
                        </div>
                      </div>
                      <div className="box">
                        <div className="form-inline">
                          <img
                            src="Image/knife.png"
                            className="img-fluid"
                            style={{ width: "25px" }}
                          ></img>
                          <label className="lblModal">Fainting</label>
                        </div>
                      </div>
                      <div className="box">
                        <div className="form-inline">
                          <img
                            src="Image/skin-care.png"
                            className="img-fluid"
                            style={{ width: "25px" }}
                          ></img>
                          <label className="lblModal">Seizure</label>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="box">
                        <div className="form-inline">
                          <img
                            src="Image/fire.png"
                            className="img-fluid"
                            style={{ width: "25px" }}
                          ></img>
                          <label className="lblModal">Burns</label>
                        </div>
                      </div>
                      <div className="box">
                        <div className="form-inline">
                          <img
                            src="Image/choking.png"
                            className="img-fluid"
                            style={{ width: "25px" }}
                          ></img>
                          <label className="lblModal">Choking</label>
                        </div>
                      </div>
                      <div className="box">
                        <div className="form-inline">
                          <img
                            src="Image/dizziness.png"
                            className="img-fluid"
                            style={{ width: "25px" }}
                          ></img>
                          <label className="lblModal">Dizziness</label>
                        </div>
                      </div>
                      <div className="box">
                        <div className="form-inline">
                          <img
                            src="Image/electrocute.png"
                            className="img-fluid"
                            style={{ width: "25px" }}
                          ></img>
                          <label className="lblModal">Elochocution</label>
                        </div>
                      </div>
                      <div className="box">
                        <div className="form-inline">
                          <img
                            src="Image/fracture.png"
                            className="img-fluid"
                            style={{ width: "25px" }}
                          ></img>
                          <label className="lblModal">Fracture</label>
                        </div>
                      </div>
                      <div className="box">
                        <div className="form-inline">
                          <img
                            src="Image/headache.png"
                            className="img-fluid"
                            style={{ width: "25px" }}
                          ></img>
                          <label className="lblModal">Stroke</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Default>
  );
}

export default HomePage;
