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
              FAQ's
            </p>            
            <p className="pfooterdesc " style={{ marginRight: "25px" }}>
              Contacts
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
