import Link from "next/link";

export const Footer = () => (
  <div className="container-fluid confooter ">
    <div className="container con ">
      <div className="row " style={{ marginTop: "40px", paddingTop: "40px" }}>
        <div className="col-lg-4 ">
          <p className="pfootertitle ">Address</p>
          <p className="pfooterdesc ">
            GF Savana Commercial Bldg 3, Venecia St., cor, Metropolitan Ave,
            Makati, Metro Manila
          </p>
        </div>
        <div className="col-lg-4 ">
          <p className="pfootertitle ">Other Pages</p>
          <div className="form-inline ">
            <p className="pfooterdesc " style={{ marginRight: "25px" }}>
              <Link href="/faqs">
                <a className="text-white">FAQ's</a>
              </Link>
            </p>
            <p className="pfooterdesc " style={{ marginRight: "25px" }}>
              <Link href="/contact">
                <a className="text-white">Contact Us</a>
              </Link>
            </p>
          </div>
        </div>
        <div className="col-lg-4 ">
          <p className="pfootertitle ">Follow Us</p>
          <div className="form-inline ">
            <img
              src="/Image/facebooknew.png "
              className="img-fluid "
              style={{ width: "20px", marginRight: "30px" }}
            />
            <img
              src="/Image/instagramnew.png "
              className="img-fluid "
              style={{ width: "20px", marginRight: "30px" }}
            />
            <img
              src="/Image/twitternew.png "
              className="img-fluid "
              style={{ width: "20px", marginRight: "30px" }}
            />
          </div>
        </div>
      </div>
      <div
        className="row "
        style={{ marginTop: "20px", paddingBottom: "20px" }}
      >
        <div className="col-lg-4 ">
          <p className="pfootertitle ">Products</p>
          <div className="form-inline ">
            <p className="pfooterdesc " style={{ marginRight: "30px" }}>
              / Auto Kit
            </p>
            <p className="pfooterdesc " style={{ marginRight: "30px" }}>
              / Belt Kit
            </p>
            <p className="pfooterdesc " style={{ marginRight: "30px" }}>
              / Sling Kit
            </p>
          </div>
          <div className="form-inline ">
            <p className="pfooterdesc " style={{ marginRight: "30px" }}>
              / Kidz Kit
            </p>
            <p className="pfooterdesc " style={{ marginRight: "30px" }}>
              / Mega Kit
            </p>
            <p className="pfooterdesc " style={{ marginRight: "30px" }}>
              / Flexi Kit
            </p>
          </div>
        </div>
        <div className="col-lg-4 ">
          <p
            className="pfootertitle "
            style={{ color: "white", fontSize: "1.2rem" }}
          >
            Sign Up For New Stories <br /> And Personal Offers
          </p>
          <input
            type="text "
            placeholder="Enter email.. "
            className="txtnewsletter "
          />
        </div>
      </div>
    </div>
  </div>
);
export const ShopFooter = () => (
  <div className="container-fluid confooter">
    <div className="container">
      <div className="row" style={{ marginTop: "70px", paddingBottom: "40px" }}>
        <div className="col-lg-5" style={{ marginTop: "40px" }}>
          <p className="pconnect">Connect with us</p>
          <div className="form-inline">
            <img
              src="Image/facebook.png"
              className="img-fluid"
              style={{ width: "30px", marginRight: "25px" }}
            />
            <img
              src="Image/twitter.png"
              className="img-fluid"
              style={{ width: "30px", marginRight: "25px" }}
            />
            <img
              src="Image/instagram.png"
              className="img-fluid"
              style={{ width: "30px", marginRight: "25px" }}
            />
            <img
              src="Image/youtube.png"
              className="img-fluid"
              style={{ width: "30px", marginRight: "25px" }}
            />
          </div>
          <p className="pconnect" style={{ marginTop: "20px" }}>
            Stay up to date with GetreadyPh
          </p>
          <p className="pconnectsub" style={{ marginTop: "-5px" }}>
            Subscribe to our newsletter to receive updates on the latest news,
            releases and special offers. We Respect your privacy. Your
            infomation is safe and will never be shared.
          </p>
        </div>
        <div className="col-lg-2" style={{ marginTop: "40px" }}>
          <p className="pconnect">Pages</p>
          <p className="ptitlesub">Home</p>
          <p className="ptitlesub">Product</p>
          <p className="ptitlesub">About</p>
          <p className="ptitlesub">Contact</p>
        </div>
        <div className="col-lg-2" style={{ marginTop: "40px" }}>
          <p className="pconnect">Address</p>
          <p className="ptitlesub">
            G/F Savana Commercial Building 3, Venecia St., cor. Metropolitan
            Avenue, Brgy Sta. Cruz Makati 1203
          </p>
        </div>
        <div className="col-lg-3" style={{ marginTop: "40px" }}>
          <img src="Image/logo.png" className="img-fluid" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <hr style={{ backgroundColor: "#424242" }} />
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <p className="pcopyright">
            Copyright Ⓒ <span style={{ color: "white" }}>GetReadyPh</span>. All
            rights reserved.
          </p>
        </div>
        <div className="col-lg-6">
          <div
            className="form-inline float-right"
            style={{ marginTop: "-20px" }}
          >
            <img
              src="Image/visa.png"
              className="img-fluid"
              style={{ marginRight: "10px" }}
            />
            <img src="Image/mastercard.png" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
