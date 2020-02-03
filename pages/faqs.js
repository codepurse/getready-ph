import Default from "../layouts/default";
import Head from "next/head";
const meta = {
  title: "GetReady - FAQ"
};
function FAQPage() {
  return (
    <Default meta={meta}>
      <Head>
        <script src="/Script/bootstrap-combobox.js"></script>
        <link href="/Css/faq.css" rel="stylesheet" type="text/css" />
        <link
          href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
        <script src="/Script/faq.js"></script>
      </Head>
      <div>
        <div className="container con">
          <div className="row" style={{ marginTop: "30px" }}>
            <div className="col-lg-12 text-center">
              <p className="pFaq">FREQUENTLY ASKED QUESTIONS</p>
              <p className="pFaqSub">
                You can also browse the topics below to find what you are
                looking for.
              </p>
            </div>
          </div>
        </div>
        <div className="container con">
          <div className="row" style={{ marginTop: "40px" }}>
            <div className="col-lg-3">
              <ul>
                <li>
                  <a href="#order" className="ulNav">
                    Order
                  </a>
                </li>
                <li>
                  <a href="#shipping" className="ulNav">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#payment" className="ulNav">
                    Payment
                  </a>
                </li>
                <li>
                  <a href="#return" className="ulNav">
                    Return
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="form-inline" id="order">
                <img
                  src="Image/order.png"
                  className="img-fluid"
                  style={{ width: "15px" }}
                />
                <p className="pNumber">1. ORDER</p>
              </div>
              <div
                className="accordion"
                style={{ marginTop: "-20px", marginLeft: "20px" }}
              >
                <div className="accordion-item">
                  <a>How can i order?</a>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                      pretium viverra suspendisse potenti.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <a>I ordered, what happens then?</a>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                      pretium viverra suspendisse potenti.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <a>Is there a minumum order?</a>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                      pretium viverra suspendisse potenti.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="form-inline"
                style={{ marginTop: "40px" }}
                id="shipping"
              >
                <img
                  src="Image/boat.png"
                  className="img-fluid"
                  style={{ width: "15px" }}
                />
                <p className="pNumber">2. SHIPPING</p>
              </div>
              <div
                className="accordion"
                style={{ marginTop: "-20px", marginLeft: "20px" }}
              >
                <div className="accordion-item">
                  <a>Who send the product?</a>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                      pretium viverra suspendisse potenti.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <a>Can i also order outside PH?</a>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                      pretium viverra suspendisse potenti.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <a>When does my order arrive?</a>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                      pretium viverra suspendisse potenti.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <a>Shipping PH</a>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                      pretium viverra suspendisse potenti.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="form-inline"
                style={{ marginTop: "40px" }}
                id="payment"
              >
                <img
                  src="Image/wallet.png"
                  className="img-fluid"
                  style={{ width: "15px" }}
                />
                <p className="pNumber">3. PAYMENT</p>
              </div>
              <div
                className="accordion"
                style={{ marginTop: "-20px", marginLeft: "20px" }}
              >
                <div className="accordion-item">
                  <a>Who send the product?</a>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                      pretium viverra suspendisse potenti.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <a>Can I also order outside PH?</a>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                      pretium viverra suspendisse potenti.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <a>When does my order arrive?</a>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                      pretium viverra suspendisse potenti.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <a>Shipping PH</a>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                      pretium viverra suspendisse potenti.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="form-inline"
                style={{ marginTop: "40px" }}
                id="return"
              >
                <img
                  src="Image/return.png"
                  className="img-fluid"
                  style={{ width: "15px" }}
                />
                <p className="pNumber">4. RETURN</p>
              </div>
              <div
                className="accordion"
                style={{ marginTop: "-20px", marginLeft: "20px" }}
              >
                <div className="accordion-item">
                  <a>Who send the product?</a>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                      pretium viverra suspendisse potenti.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <a>Can i also order outside PH?</a>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                      pretium viverra suspendisse potenti.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <a>When does my order arrive?</a>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                      pretium viverra suspendisse potenti.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <a>Shipping PH</a>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                      pretium viverra suspendisse potenti.
                    </p>
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
export default FAQPage;
