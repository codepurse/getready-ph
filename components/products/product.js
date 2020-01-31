export const HomeProduct = (props) => (
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
      <div className="row ">
        <div className="col-lg-12 show-image " style={{ position: "relative" }}>
          <img
            src={props.image}
            className="card-img-top img-fluid mx-auto d-block image "
            style={{ width: "150px", marginTop: "20px" }}
            alt="... "
          />
          <div className="middle ">
            <button className="btnaddtocart ">
              <img
                src="Image/carthover.png "
                onmouseover="this.src='Image/carthoverwhite.png' "
                onmouseout="this.src='Image/carthover.png' "
                className="img-fluid "
              />
            </button>
            <button className="btnaddtocart ">
              <img
                src="Image/viewcart.png "
                onmouseover="this.src='Image/viewcartwhite.png' "
                onmouseout="this.src='Image/viewcart.png' "
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
        {props.name}
        <span className="float-right " style={{ fontWeight: "bold" }}>
          ₱{props.price}
        </span>
      </h5>
      <p className="card-text ">{props.description}</p>
    </div>
  </div>
);
