import Default from "../../layouts/default";
import Head from "next/head";
import ReactSlider from 'react-slider';
import IonRangeSlider  from 'react-ion-slider'

function ShopPage() {
  return (
    <Default>
      <Head>
        <link href="Css/main.css" rel="stylesheet" type="text/css" />
        <link href="Css/shop.css" rel="stylesheet" type="text/css" />

      </Head>
      <div className="container-fluid">
        <div className="container con conMain">
          <div className="row" style={{ marginTop: "40px" }}>
            <div className="col-lg-12">
              <p className="pAll">All Products</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-inline">
                <img src="Image/filter.png" className="img-fluid" style={{ width: "15px", marginRight: "5px" }}></img>
                <p className="pFilter">Filter</p>
                <span className="pResults">( 26 Results )</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="dropdown" style={{ backgroundColor: "#ffffff" }}>
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Sort by:
        </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Latest</a>
                  <a className="dropdown-item" href="#">Popular</a>
                  <a className="dropdown-item" href="#">Limited</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <input type="text" className="txtSearch" placeholder="Search here.."></input>

              <IonRangeSlider type={flat} min={100} max={500} from={120} to={240} step={1} values={2} keyboard={true}  />

              <p className="pCategory">Category</p>

              <div className="divCategory">
                <p className="pCategoryList">Sample ( 1 )</p>
                <p className="pCategoryList">Sample ( 2 )</p>
                <p className="pCategoryList">Sample ( 3 )</p>
                <p className="pCategoryList">Sample ( 4 )</p>
                <p className="pCategoryList">Sample ( 5 )</p>
                <p className="pCategoryList">Sample ( 6 )</p>
                <p className="pCategoryList">Sample ( 7 )</p>
              </div>

              <p className="pCategory">Colors</p>

              <div className="divCategory">
                <p className="pCategoryList">Black ( 1 )</p>
                <p className="pCategoryList">Orange ( 2 )</p>
                <p className="pCategoryList">Red ( 3 )</p>
                <p className="pCategoryList">Blue ( 4 )</p>
                <p className="pCategoryList">Green ( 5 )</p>
              </div>

              <p className="pCategory">Sizes</p>

              <div className="divCategory">
                <p className="pCategoryList">Sample ( 1 )</p>
                <p className="pCategoryList">Sample ( 2 )</p>
                <p className="pCategoryList">Sample ( 3 )</p>
                <p className="pCategoryList">Sample ( 4 )</p>
                <p className="pCategoryList">Sample ( 5 )</p>
              </div>

            </div>
            <div className="col-lg-9">
              <div className="card-deck">
                <div className="card ">
                  <div className="divImageCard d-flex align-items-center justify-content-center">
                    <img className="card-img-top img-fluid imgItem" src="Image/Bag Photos/Carry Kit/Carry.png" alt="Card image cap" />
                    <div className="middle">
                      <div className="addCard"><img src="Image/carthoverwhite.png"></img></div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Carry Kit <span className="float-right">500.00</span></h5>
                    <p className="card-text">Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
                <div className="card ">
                  <div className="divImageCard d-flex align-items-center justify-content-center">
                    <img className="card-img-top img-fluid imgItem" src="Image/Bag Photos/Auto Kit/autologo.png" alt="Card image cap" />
                    <div className="middle">
                      <div className="addCard"><img src="Image/carthoverwhite.png"></img></div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Carry Kit <span className="float-right">500.00</span></h5>
                    <p className="card-text">Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
                <div className="card ">
                  <div className="divImageCard d-flex align-items-center justify-content-center">
                    <img className="card-img-top img-fluid imgItem" src="Image/Bag Photos/Belt Kit/EnforcerNew.png" alt="Card image cap" />
                    <div className="middle">
                      <div className="addCard"><img src="Image/carthoverwhite.png"></img></div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Carry Kit <span className="float-right">500.00</span></h5>
                    <p className="card-text">Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
                <div className="card ">
                  <div className="divImageCard d-flex align-items-center justify-content-center">
                    <img className="card-img-top img-fluid imgItem" src="Image/Bag Photos/EDC Kit/EDCnew.png" alt="Card image cap" />
                    <div className="middle">
                      <div className="addCard"><img src="Image/carthoverwhite.png"></img></div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Carry Kit <span className="float-right">500.00</span></h5>
                    <p className="card-text">Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
                <div className="card ">
                  <div className="divImageCard d-flex align-items-center justify-content-center">
                    <img className="card-img-top img-fluid imgItem" src="Image/Bag Photos/Flexi Kit/flexikit.png" alt="Card image cap" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Carry Kit <span className="float-right">500.00</span></h5>
                    <p className="card-text">Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
                <div className="card">
                  <div className="divImageCard d-flex align-items-center justify-content-center">
                    <img className="card-img-top imgItem" src="Image/Bag Photos/KIDZ/LifeKit Kidz.png" alt="Card image cap" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Carry Kit <span className="float-right">500.00</span></h5>
                    <p className="card-text">Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
                <div className="card ">
                  <div className="divImageCard d-flex align-items-center justify-content-center">
                    <img className="card-img-top img-fluid imgItem" src="Image/Bag Photos/Mega Kit/MegaKit.png" alt="Card image cap" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Carry Kit <span className="float-right">500.00</span></h5>
                    <p className="card-text">Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
                <div className="card ">
                  <div className="divImageCard d-flex align-items-center justify-content-center">
                    <img className="card-img-top img-fluid imgItem" src="Image/Bag Photos/Sling/sling.png" alt="Card image cap" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Carry Kit <span className="float-right">500.00</span></h5>
                    <p className="card-text">Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
                <div className="card ">
                  <div className="divImageCard d-flex align-items-center justify-content-center">
                    <img className="card-img-top img-fluid imgItem" src="Image/Bag Photos/Trauma Kit/trauma.png" alt="Card image cap" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Carry Kit <span className="float-right">500.00</span></h5>
                    <p className="card-text">Lorem ipsum dolor sit amet</p>
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
export default ShopPage;
