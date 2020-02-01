import Link from "next/link";
export const GuestHeader = props => (
  <div>
    {props.announcement ? props.announcement() : null}
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#F5F5F5",
        borderBottom: "1px solid lightgrey"
      }}
    >
      <div className="container con">
        <nav className="navbar navbar-expand">
          <button
            className="navbar-toggler"
            data-toggle="navbar-collapse"
            data-target="#collapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapse">
            <div className="mr-auto">
              <ul className="nav navbar-nav">
                <ul className="nav navbar-nav navLeftTop">
                  <li>
                    <Link href="/about">
                      <a
                        className="nav-link btnabout"
                        style={{
                          color: "#142132",
                          fontFamily: "Proxima Nova Semibold",
                          fontSize: "16px"
                        }}
                      >
                        About <span className="vl" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faqs">
                      <a
                        className="nav-link btnfaq"
                        style={{
                          color: "#142132",
                          fontFamily: "Proxima Nova Semibold",
                          fontSize: "16px",
                          marginLeft: "-7px"
                        }}
                      >
                        FAQ's
                        <span className="vl" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a
                        className="nav-link btncontact"
                        style={{
                          color: "#142132",
                          fontFamily: "Proxima Nova Semibold",
                          fontSize: "16px"
                        }}
                      >
                        Contact
                        <span className="vl" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a
                      className="nav-link btncontact"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      style={{
                        color: "#142132",
                        fontFamily: "Proxima Nova Semibold",
                        fontSize: "16px"
                      }}
                    >
                      Terms and Conditions
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="ml-auto navSearch">
              <label
                className="pSearch"
                style={{
                  color: "#142132",
                  fontFamily: "Proxima Nova Semibold",
                  fontSize: "16px",
                  marginRight: "5px"
                }}
              >
                Product Search
              </label>
              <input
                type="text"
                className="txtsearch"
                placeholder="Search here.."
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div className="container-fluid">
      <div className="container con">
        <nav className="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#collapse1"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <nav className="navbar-brand" href="#">
            <Link href="/">
              <a>
                <img
                  src="Image/newlogo.png"
                  className="imglogo"
                  style={{ width: "200px" }}
                />
              </a>
            </Link>
          </nav>
          <div className="collapse navbar-collapse" id="collapse1">
            <div className="mr-auto">
              <ul className="nav navbar-nav">
                <ul className="nav navbar-nav">
                  <li>
                    <Link href="/">
                      <a
                        className="nav-link btnhome"
                        style={{
                          color: "#142132",
                          fontFamily: "Proxima Nova Semibold",
                          fontSize: "17px"
                        }}
                      >
                        Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop">
                      <a
                        className="nav-link btnproduct"
                        style={{
                          color: "#141414",
                          fontFamily: "Proxima Nova Semibold",
                          fontSize: "17px"
                        }}
                      >
                        Shop
                      </a>
                    </Link>
                  </li>
                  {/* <li>
                    <a
                      className="nav-link btncontact"
                      style={{
                        color: "#142132",
                        fontFamily: "Proxima Nova Semibold",
                        fontSize: "17px"
                      }}
                      href="updates.html"
                    >
                      Updates
                    </a>
                  </li> */}
                  <li>
                    <Link href="/news">
                      <a
                        className="nav-link btnnews"
                        style={{
                          color: "#142132",
                          fontFamily: "Proxima Nova Semibold",
                          fontSize: "17px"
                        }}
                      >
                        Newsfeed
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a
                        className="nav-link btnabout"
                        style={{
                          color: "#142132",
                          fontFamily: "Proxima Nova Semibold",
                          fontSize: "17px",
                          display: "none"
                        }}
                      >
                        About
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/stores">
                      <a
                        className="nav-link btnstores"
                        style={{
                          color: "#141414",
                          fontFamily: "Proxima Nova Semibold",
                          fontSize: "17px",
                          display: "none"
                        }}
                      >
                        Stores
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a
                        className="nav-link btnfaq"
                        style={{
                          color: "#142132",
                          fontFamily: "Proxima Nova Semibold",
                          fontSize: "17px",
                          display: "none"
                        }}
                      >
                        FAQ's
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a
                        className="nav-link btncontact"
                        style={{
                          color: "#142132",
                          fontFamily: "Proxima Nova Semibold",
                          fontSize: "17px",
                          display: "none"
                        }}
                      >
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="ml-auto">
              <ul className="nav navbar-nav">
                <ul className="nav navbar-nav">
                  <li>
                    <Link href="/login">
                      <a
                        className="nav-link btnlogin"
                        style={{
                          color: "#142132",
                          fontFamily: "Proxima Nova Semibold",
                          fontSize: "17px"
                        }}
                      >
                        Login <span className="vl" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a
                      className="nav-link btncart"
                      style={{
                        color: "#141414",
                        fontFamily: "Proxima Nova Semibold",
                        fontSize: "17px"
                      }}
                      href="item.html"
                    >
                      Cart(0){" "}
                      <img
                        src="Image/cartblack.png"
                        className="img-fluid"
                        style={{ width: "20px", marginLeft: "5px" }}
                      />
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Getready terms and conditions
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <p className="pmodaltitle">General Information and Guidelines</p>
            <p className="pmodaltext">
              Thank you for visiting GetReadyPH and welcome to our online world
              of Safety, Emergency and Security Preparedness! GetReadyPH is
              developed to try and provide you with the most complete and
              dedicated online resource center and an e-market place not only
              for you to source from and to equip all your SESP needs but to
              also be an information center for you to learn from and be well
              informed.
            </p>
            <p className="pmodaltext">
              It is important for you to please read the following terms and
              conditions carefully as they govern your use and access of this
              online platform, and the use of the services and features within.
              By accessing the information and all features of this online
              platform, participating in its programs directly or indirectly
              and/or using the Services it offers, you agree to be bound by
              these Terms of Use. If you do not agree to these Terms of Use, we
              politely and humbly insist that you please log out or exit this
              site and do not access and/or use this online platform or the
              Services it offers.
            </p>
            <p className="pmodaltext">
              While some of GetReadyPH’s pages are for public access, there
              exist pages, parts or/and features which are secured and are
              accessible for viewing and use only through user log in and
              protected password with different access levels for Members,
              Customers, Vendors, Administrators, Moderators and any other
              classifications which GetReadyPH shall have the full rights to
              edit, include, omit or delete from time to time at its own
              discretion without any prior notice. Access to and use of password
              protected and/or secure areas of the online platform and/or use of
              the Services are restricted to those intended registered audience
              and users only. You may not obtain or attempt to obtain
              unauthorized access to such parts of this online platform and/or
              Services, or to any other protected information, through any means
              not intentionally made available by us for your specific use.
            </p>
            <p className="pmodaltext">
              If you are below 18 years old please obtain consent from your
              parent(s) or legal guardian(s), and have their acceptance of these
              Terms of Use and their agreement to take full responsibility for:
              (i) your actions; (ii) any charges associated with your use of any
              of the Services or purchase of Products; and (iii) your acceptance
              and compliance with these Terms of Use. If you do not have consent
              from your parent(s) or legal guardian(s), we politely and humbly
              insist that you please log out or exit this site and do not access
              and/or use this online platform or the Services it offers.
            </p>
            <br />
            <p className="pmodaltitle">Terms of Use</p>
            <p className="pmodalsubtitle">1. Definitions</p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-5px" }}
            >
              <span style={{ color: "#e83b4f" }}>1.1</span> “GetReadyPH”,
              “online platform owner”, “operator”, “we”, “our” and “us” refer to
              First Survival Needs Philippines, Inc., a company incorporated
              pursuant to the laws of Philippines.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>1.2</span> “Listing Price”
              means the price of Products listed for sale to Customers, as
              stated in GetReadyPH.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>1.3</span> “Bid Starting Price”
              means the lowest asking price of Products listed for sale to
              Customers under the auction feature, as stated in GetReadyPH and
              does not constitute the final price sold to Customers.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>1.4</span>“Bid Closing Price”
              means the final price offered by Customers for Products listed for
              sale to Customers under the auction feature, as stated in
              GetReadyPH and shall constitute the final price sold to Customers
              if the amount is above the Bid Starting Price.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>1.5</span>“Losses” means all
              penalties, losses, settlement sums, costs (including legal fees
              and expenses on a solicitor-client basis), charges, expenses,
              actions, proceedings, claims, demands and other liabilities,
              whether foreseeable or not.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>1.6</span>“Materials” means,
              collectively, all web pages on the online platform, including the
              information, images, links, sounds, graphics, video, software,
              applications and other materials displayed or made available on
              GetReadyPH and the functionalities or services provided on the
              online platform
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>1.7</span>“Order” means your
              order for Products sent through GetReadyPH in accordance with its
              agreed Terms &amp; Conditions of Sale, whether expressed or not.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>1.8</span> “Password” refers to
              the valid password that a Customer who has an account with
              GetReadyPH may use in conjunction with the Username to access the
              relevant online platform and/or Services.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>1.9</span> “Personal Data”
              means data, whether true or not, that can be used to identify,
              contact or locate you. Personal Data can include your name, e-mail
              address, billing address, shipping address, phone number and
              credit card information. “Personal Data” shall be deemed to
              include any data that you have provided to us when placing an
              Order, regardless of whether you have an account with us.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>1.10</span> “Online Platform”
              means (a) both the web and mobile versions of the website operated
              and/or owned by First Survival Needs Philippines, Inc., which is
              presently located at the following URL: www.GetReadyPH.com; and
              (b) the mobile applications made available from time to time by
              GetReadyPH, including the iOS and Android versions.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>1.11</span> “Product” means a
              product (including any individual item, bundles or any parts
              thereof) available for sale to Customers on the online platform.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>1.12</span> “Prohibited
              Material” means any information, graphics, photographs, data
              and/or any other material that:
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>a.</span> contains any computer
              virus or other invasive or damaging code, program or macro;
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>b.</span> infringes any
              third-party Intellectual Property or any other proprietary rights;
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>c.</span> is defamatory,
              libelous or threatening;
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>d.</span> is obscene,
              pornographic, indecent, counterfeited, fraudulent, stolen, harmful
              or otherwise illegal under the applicable law; and/or
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>e.</span> is or may be
              construed as offensive and/or otherwise objectionable, in our sole
              opinion.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>1.13</span>“Services” means
              services, information and functions made available by us
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>1.14</span>“Trademark” means
              the trademarks, service marks, trade names and logos used and
              displayed on the Platform, including the GetReadyPH trademark.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>1.15</span>“Username” refers to
              the unique login identification name or code which identifies a
              Customer who has an account with GetReadyPH.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>1.16</span>“Voucher” means any
              voucher for credit or discount related or redeemable which may be
              offered by us to be used by a Customer, subject to other terms and
              conditions
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>1.17</span>“You” and “Your”
              refer to individuals over the age of 18 or otherwise under the
              supervision of a parent or legal guardian.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>1.19</span>“Intellectual
              Property” means all copyright, patents, utility innovations,
              trademarks and service marks, geographical indications, domain
              names, layout design rights, registered designs, design rights,
              database rights, trade or business names, rights protecting trade
              secrets and confidential information, rights protecting goodwill
              and reputation, and all other similar or corresponding proprietary
              rights and all applications for the same, whether presently
              existing or created in the future, anywhere in the world, whether
              registered or not, and all benefits, privileges, rights to sue,
              recover damages and obtain relief or other remedies for any past,
              current or future infringement, misappropriation or violation of
              any of the foregoing rights.
            </p>
            <p className="pmodaltitle" style={{ marginTop: "5px" }}>
              General Information and Guidelines
            </p>
            <p className="pmodaltext">
              Any reference in these Terms of Use to any provision of a statute
              shall be construed as a reference to that provision as amended,
              re-enacted or extended at the relevant time. In the Agreement,
              whenever the words “include”, “includes” or “including” are used,
              they will be deemed to be followed by the words “without
              limitation”. Unless expressly indicated otherwise, all references
              to a number of days mean calendar days, and the words “month” or
              “monthly” as well as all references to a number of months means
              calendar months. Clause headings are inserted for convenience only
              and shall not affect the interpretation of these Terms of Use. In
              the event of a conflict or inconsistency between any two or more
              provisions under these Terms of Use, whether such provisions are
              contained in the same or different documents, such conflict or
              inconsistency shall be resolved in favor of GetReadyPH and the
              provision which is more favorable to GetReadyPH shall prevail.
            </p>
            <p className="pmodaltitle">
              General Use of Services and/or Access of GetReadyPH
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>3.1</span>You hereby agree to
              comply with any and all the guidelines, notices, operating rules
              and policies and instructions pertaining to the use of the
              Services and/or access to the online platform, as well as any
              amendments to the aforementioned, issued by us, from time to time.
              We reserve the right to revise these guidelines, notices,
              operating rules and regulations, policies and instructions at any
              time and you are deemed to be aware of and bound by any changes to
              the foregoing upon their publication on the online platform or
              through any form of communication.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>3.2</span>You hereby agree and
              undertake NOT to:
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>a.</span> assume the identity
              or impersonate any person or entity or to falsely state or
              otherwise misrepresent your affiliation with any person or entity;
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>b.</span> use the online
              platform or services for any illegal intentions or purposes;;
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>c.</span> attempt to hack
              or/and gain unauthorized access to or otherwise interfere or
              disrupt other computer systems or networks connected to the online
              platform or services;
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>d.</span> post, promote or
              transmit through the online platform or any other platforms
              related or associated with GetReadyPH any Prohibited Materials;
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>e.</span> disrupt and interfere
              with any other party’s utilization and enjoyment of the online
              platform or services;
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>f.</span> in any way, use or
              upload any software, content, link or material that contains, or
              which you have reason to suspect that contains, viruses, damaging
              components, malicious code or harmful components which may
              disrupt, impair or corrupt the online platform’s data or damage or
              interfere with the operation of another user’s computer or mobile
              device or the online platform or Services; and
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>g.</span> use the online
              platform or services other than in conformance with the acceptable
              policies of any connected computer networks, any applicable
              Internet standards and any other applicable laws.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>3.2.1</span>Failing to adhere
              to any of the above may subject you to be legally charged to the
              full extent of the law.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>3.3</span>Online Platform and
              Services Availability and Accessibility: We may, from time to time
              and without giving any reason or prior notice, upgrade, modify,
              suspend or discontinue the provision of or remove, whether in
              whole or in part, the online platform or any functions or services
              and shall not be liable if any such upgrade, modification,
              suspension or removal prevents you from accessing GetReadyPH or
              any part of the Services.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>3.4</span>Content monitoring:
              We reserve the right, but shall not be obliged to:
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>a.</span> monitor, screen or
              otherwise control any activity, content or material on the online
              platform and/or through any of the services offered. We may in our
              sole and absolute discretion, investigate any violation of the
              terms and conditions contained herein and may take any action it
              deems appropriate;
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>b.</span> ban, prevent or
              restrict access of any online visitor or Customer to the online
              platform and/or any of the services offered.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>c.</span> report any activity
              it suspects to be in violation of any applicable law, statute or
              regulation to the appropriate authorities and to co-operate with
              such authorities; and/or
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>d.</span> to request any
              information and data from you in connection with your use of the
              services and/or access of the online platform at any time and to
              exercise our right under this paragraph if you refuse to divulge
              such information and/or data or if you provide or if we have
              reasonable grounds to suspect that you have provided inaccurate,
              misleading or fraudulent information and/or data.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>3.5</span>Privacy Policy: You
              acknowledge that you have read and agree to the Privacy Policy set
              out by GetReadyPH and you provide full consent to our collection,
              use and disclosure of your Personal Data for the purposes as
              permitted by law.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>3.6</span>Terms &amp;
              Conditions of Sale: Purchases of any Product would be subject to
              the Terms &amp; Conditions Of Sale as set out by GetReadyPH which
              may at its own discretion be updated and amended from time to time
              without prior notice given.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>3.7</span>Additional terms: In
              addition, the use of specific aspects of the contents and
              services, more comprehensive or updated versions of the materials
              offered by us or our designated sub-contractors, may be subject to
              additional terms and conditions, which will apply in full force
              and effect.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>3.8</span>Restrictions: Use of
              the services is limited to authorized online viewers and Customers
              that are of legal age and who have the legal capacity to enter
              into and form contracts under any applicable law. Customers who
              have breached or are in breach of the terms and conditions
              contained herein and Customers who have been permanently or
              temporarily suspended from use of any of the Services may not use
              the Services even if they satisfy some of, part of or even all the
              requirements of the Terms and Conditions.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>3.9</span>You hereby agree:
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>a.</span>to access and/or use
              GetReadyPH only for lawful purposes and in a lawful manner at all
              times and further agree to conduct any activity relating to the
              services in good faith; and
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>b.</span>to ensure that any
              information or data you post, submitted for posting approval or
              cause to appear on the online platform in connection with the
              services is accurate and agree to take sole responsibility for
              such information and data.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>3.10</span>Product description:
              While we endeavor to provide an accurate description of the
              Products, we do not warrant that such description is accurate,
              current or free from error.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>3.11</span> Prices of Products:
              All Listing Prices are subject to taxes, unless otherwise stated.
              We reserve the right to amend the Listing Prices or the Bidding
              Prices at any time without giving any reason or prior notice.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>3.12</span> Third Party Vendors
              or Sellers: You acknowledge that parties other than GetReadyPH
              (eg. Third Party Vendors or Sellers) list with the approval of
              GetReadyPh and sell their Products on the online platform without
              the need for GetReadyPH to reveal the identity of the Third Party
              Vendors or Sellers. For the avoidance of doubt, each agreement
              entered into for the sale of a Third Party Vendor’s Products to a
              Customer shall be an agreement entered into directly and only
              between GetReadyPH and the Customer.
            </p>
            <p className="pmodaltitle" style={{ marginTop: "5px" }}>
              Trademark and Intellectual Property
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>4.1</span>Ownership: The
              Trademark and Intellectual Property displayed and used in
              GetReadyPH and its contents are owned, licensed to or controlled
              by us, our licensors or our service providers. We reserve the
              right to enforce its Intellectual Property to the fullest extent
              of the law.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>4.2</span>Restricted Use: No
              part or parts of GetReadyPH, or any contents may be reproduced,
              reverse engineered, decompiled, disassembled, separated, altered,
              distributed, republished, displayed, broadcast, hyperlinked,
              mirrored, framed, transferred or transmitted in any manner or by
              any means or stored in an information retrieval system or
              installed on any servers, system or equipment without our prior
              written permission or that of the relevant copyright owners.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>4.3</span>Trademarks: The
              Trademarks are registered and unregistered trademarks of us or
              third parties. Nothing on GetReadyPH and in these Terms of Use
              shall be construed as granting, by implication, estoppel, or
              otherwise, any license or right to use in any manner any
              Trademarks displayed on the Services, without our written
              permission or any other applicable trademark owner.
            </p>
            <p className="pmodaltitle" style={{ marginTop: "5px" }}>
              Limitations of Our Responsibility and Liability
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>5.1</span>No representations or
              warranties: GetReadyPH and all the materials and contents within
              are provided on an “as is” and “as available” basis. All data
              and/or information contained are provided for informational
              purposes only. No representations or warranties of any kind,
              implied, express or statutory, including the warranties of
              non-infringement of third party rights, title, merchantability,
              satisfactory quality or fitness for a particular purpose, are
              given in conjunction with the online platform, the services or the
              materials. Without prejudice to the generality of the foregoing,
              we do not warrant:
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>a.</span> the accuracy,
              timeliness, adequacy, commercial value or completeness of all data
              and/or information contained in GetReadyPH;
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>b.</span> that the online
              platform, the services, information or that any of the contents
              will be provided uninterrupted, secure or free from errors or
              omissions, or that any identified defect will be corrected;
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>c.</span> that the online
              platform and/or its contents, links and ads are free from any
              computer virus or other malicious, destructive or corrupting code,
              agent, program or macros; and
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>d.</span> the security of any
              information transmitted by you or to you through any part or
              feature of GetReadyPH, and you accept the risk that any
              information transmitted or received through it may be accessed by
              unauthorized third parties and/or disclosed by us or our officers,
              employees or agents to third parties purporting to be you or
              purporting to act under your authority. Transmissions over the
              Internet and electronic mail may be subject to interruption,
              transmission blackout, delayed transmission due to internet
              traffic or incorrect data transmission due to the public nature of
              the Internet.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>5.2</span>Liability Exclusion:
              GetReadyPH or any of its owners, officers, or agents, or
              employees, or viewers, or Third Party Vendors or Service Providers
              shall not be liable to you for any Losses whatsoever or howsoever
              caused (regardless of the form of action) arising directly or
              indirectly in connection with:
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>a.</span> any access, use
              and/or inability to use GetReadyPH;
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>b.</span> reliance on any data
              or information made available through GetReadyPH .You are highly
              advised not to act on such data or information without first
              independently verifying its contents;
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>c.</span> any system, server or
              connection failure, error, omission, interruption, delay in
              transmission, computer virus or other malicious, destructive or
              corrupting code, agent program or macros; and
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>d.</span> any use of or access
              to any other website or webpage linked to the Platform, even if we
              or our officers or agents or employees may have been advised of,
              or otherwise might have anticipated, the possibility of the same.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>5.3</span>At your own risk: Any
              risk of misunderstanding, error, damage, expense or Losses
              resulting from the use of the Platform is entirely at your own
              risk and we shall not be liable therefore.
            </p>
            <p className="pmodaltitle" style={{ marginTop: "5px" }}>
              Users and/or Customers with GetReadyPH accounts
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>6.1</span>Username/Password:
              Certain Services that may be made available on GetReadyPH may
              require creation of an account with us or for you to provide
              Personal Data. If you request to create an account with us, a
              Username and Password may either be: (i) determined and issued to
              you by us; or (ii) provided by you and accepted by us in our sole
              and absolute discretion in connection with the use of the Services
              and/or access to the relevant Platform. We may at any time in our
              sole and absolute discretion, request that you update your
              Personal Data or forthwith invalidate the Username and/or Password
              without giving any reason or prior notice and shall not be liable
              or responsible for any Losses suffered by or caused by you or
              arising out of or in connection with or by reason of such request
              or invalidation. You hereby agree to change your Password from
              time to time and to keep the Username and Password confidential
              and shall be responsible for the security of your account and
              liable for any disclosure or use (whether such use is authorized
              or not) of the Username and/or Password. You should notify us
              immediately if you have knowledge that or have reason for
              suspecting that the confidentiality of the Username and/or
              Password has been compromised or if there has been any
              unauthorized use of the Username and/or Password or if your
              Personal Data requires updating.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>6.2</span>Purported Use/Access:
              You agree and acknowledge that any use of the Services and/or any
              access to GetReadyPH and any information, data or communications
              referable to your Username and Password shall be deemed to be, as
              the case may be:
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>a.</span> access to the
              relevant online platform and/or use of the services by you; or
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>b.</span> information, data or
              communications posted, transmitted and validly issued by you.
            </p>
            <p className="pmodaltext">
              You agree to be bound by any access of GetReadyPH (whether such
              access or use are authorized by you or not) and you agree that we
              shall be entitled (but not obliged) to act upon, rely on or hold
              you solely responsible and liable in respect thereof as if the
              same were carried out or transmitted by you. You further agree and
              acknowledge that you shall be bound by and agree to fully
              indemnify us against any and all Losses attributable to any use of
              any services and/or or access to GetReadyPH referable to your
              Username and Password.
            </p>
            <p className="pmodaltitle" style={{ marginTop: "5px" }}>
              Hyperlinks, and Alerts
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>7.1</span>Hyperlinks: For your
              convenience, we may include hyperlinks to other websites or
              content on the internet that are owned or operated by third
              parties. Such linked websites or content are not under our control
              and we are not liable for any errors, omissions, delays,
              defamation, libel, slander, falsehood, obscenity, pornography,
              profanity, inaccuracy or any other objectionable material
              contained in the contents, or the consequences of accessing, any
              linked website. Any hyperlinks to any other websites or content
              are not an endorsement or verification of such websites or content
              and you agree that your access to or use of such linked websites
              or content is entirely at your own risk
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>7.2</span>Promotions: We may
              attach banners, java applets and/or such other materials to the
              online platform for the purposes of promoting our or our
              Third-Party Vendors’ products and/or services. For the avoidance
              of doubt, you shall not be entitled to receive any payment, fee
              and/or commission in respect of any such promotional materials.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>7.3</span> Alerts: We may
              prompt or provide message or promotional alerts and such alerts
              shall also apply both to conventional and mobile alerts and are
              also subjected to similar terms and conditions as stipulated in
              Clauses 7.1 and 7.2.
            </p>
            <p className="pmodaltitle" style={{ marginTop: "5px" }}>
              Submissions and Information
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>8.1</span> Submissions by You:
              We are automatically granted a non-exclusive license to use the
              materials or information that you submit to GetReadyPH and/or
              provide to us, including but not limited to, questions, reviews,
              comments, and suggestions (collectively, “Submissions”). When you
              post comments or reviews to GetReadyPH, you also grant us the
              right to use the name that you submit or your Username in
              connection with such review, comment, or other content. You shall
              not use a false e-mail address, pretend to be someone other than
              yourself or otherwise mislead us or third parties as to the origin
              of any Submissions. We may, but shall not be obligated to,
              publish, remove or edit your Submissions.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>8.2</span> E-mails: You give
              your full, free, and unequivocal consent and authority to the
              collection, processing and use by us of any information provided
              by you (including Personal Data) for the purposes of sending
              informational and promotional e-mails and any and all
              communications, notices, updates and other information to you,
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>8.3</span> Audit and
              Investigation: GetReadyPH may, from time to time, be required by
              government agencies to disclose certain information in connection
              with any audit or investigation. You understand that we are not
              required to contest any demand made by any relevant authority for
              such information.
            </p>
            <p className="pmodaltitle" style={{ marginTop: "5px" }}>
              Termination
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>9.1</span> Termination by Us:
              In our sole and absolute discretion, we may with immediate effect,
              upon giving you notice, terminate your use of GetReadyPH and/or
              disable your Username and Password. We may bar access to the
              online platform (or any part thereof) for any reason whatsoever,
              including a breach of any of these Terms of Use or where if we
              believe that you have violated or acted inconsistently with any
              terms or conditions set out herein, or if in our opinion or the
              opinion of any regulatory authority, it is not suitable to
              continue providing the services relating to the online platform.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>9.2</span> Termination by you:
              You may terminate these Terms of Use by giving 7 (seven) business
              days’ notice in writing to us.
            </p>
            <p className="pmodaltitle" style={{ marginTop: "5px" }}>
              Notices
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>10.1</span> Notices from us:
              All notices or other communications given to you if:
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>a.</span> communicated through
              any print or electronic media as we may select will be deemed to
              be notified to you on the date of publication or broadcast; or
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "20px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>b.</span> sent by post or left
              at your last known address will be deemed to be received by you on
              the day following such posting or on the day when it was so left
            </p>
            <p className="pmodaltitle" style={{ marginTop: "5px" }}>
              General
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>11.1</span> Cumulative rights
              and remedies: Unless otherwise provided under these Terms of Use,
              the provisions of these Terms of Use and our rights and remedies
              under these Terms of Use are cumulative and are without prejudice
              and in addition to any rights or remedies we may have in law or in
              equity, and no exercise by us of any one right or remedy under
              these Terms of Use, or at law or in equity, shall (save to the
              extent, if any, provided expressly in these Terms of Use or at law
              or in equity) operate so as to hinder or prevent our exercise of
              any other such right or remedy as at law or in equity.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>11.2</span>No waiver: Our
              failure to enforce these Terms of Use shall not constitute a
              waiver of these terms, and such failure shall not affect the right
              later to enforce these Terms of Use. We would still be entitled to
              use our rights and remedies in any other situation where you
              breach these Terms of Use.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>11.3</span>Severability: If at
              any time any provision of these Terms of Use shall be or shall
              become illegal, invalid or unenforceable in any respect, the
              legality, validity and enforceability of the remaining provisions
              of this Agreement shall not be affected or impaired thereby, and
              shall continue in force as if such illegal, invalid or
              unenforceable provision was severed from these Terms of Use.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>11.4</span> Rights of third
              parties: A person or entity who is not a party to these Terms of
              Use shall have no right under any legislation in any jurisdiction
              to enforce any term of these Terms of Use, regardless of whether
              such person or entity has been identified by name, as a member of
              a class or as answering a particular description. For the
              avoidance of doubt, nothing in this Clause shall affect the rights
              of any permitted assignee or transferee of these Terms of Use.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>11.5</span> Governing law: Use
              of the online platform and/or the services and these Terms of Use
              shall be governed by and construed in accordance with laws of the
              Philippines. If any dispute arises in connection with these Terms
              of Use, the Parties shall attempt, in fair dealing and in good
              faith, to settle such dispute. If the Parties are not able to
              reach an amicable settlement pursuant to the preceding section
              they shall try to agree on an appropriate arbitration proceeding
              (for example mediation, conciliation, expert determination,
              dispute board, adjudication). If they do not reach agreement on
              the appropriate arbitration proceeding within 60 (sixty) days
              after failure of the settlement negotiations or if the dispute is
              not settled through such proceedings within a period of 120 (one
              hundred and twenty) days after initiation of the arbitration
              preceding, each Party may initiate an arbitration proceeding
              pursuant to the following paragraph.All disputes arising out of or
              in connection with the present contract, including any question
              regarding its existence, validity or termination, shall be finally
              settled in accordance with the rules of the Philippine Dispute
              Resolution Center, Inc. (“PDRCI”) for the time being in force,
              which rules are deemed incorporated by reference into this clause.
              The arbitral tribunal shall consist of three arbitrators to be
              chosen in accordance with the rules of the PDRCI. The seat of
              arbitration shall be the Philippines. The procedural law of this
              seat applicable to commercial arbitration proceedings shall apply
              where the Rules are silent. The language to be used in the
              arbitration proceedings shall be English.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>11.6</span> Injunctive relief:
              We may seek immediate injunctive relief if we make a good faith
              determination that a breach or non-performance is such that a
              temporary restraining order or other immediate injunctive relief
              is the only appropriate or adequate remedy.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>11.7</span> Amendments: We may
              by notice through the online platform or by such other method of
              notification as we may designate (which may include notification
              by way of e-mail), vary the terms and conditions of these Terms of
              Use, such variation to take effect on the date we specify through
              the above means. If you use the online platform or the services
              after such date, you are deemed to have accepted such variation.
              If you do not accept the variation, you must stop access or using
              the online platform and the services and terminate these Terms of
              Use. Our right to vary these Terms of Use in the manner aforesaid
              will be exercised without the consent of any person or entity who
              is not a party to these Terms of Use
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>11.8</span> Correction of
              errors: Any typographical, clerical or other error or omission in
              any acceptance, invoice or other document on our part shall be
              subject to correction without any liability on our part.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>11.9</span> Currency: Money
              references under these Terms of Use shall be in Philippines Peso.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>11.10</span> Entire agreement:
              These Terms of Use shall constitute the entire agreement between
              you and us relating to the subject matter hereof and supersedes
              and replaces in full all prior understandings, communications and
              agreements with respect to the subject matter hereof.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>11.11</span> Binding and
              conclusive: You acknowledge and agree that any records (including
              records of any telephone conversations relating to the services,
              if any) maintained by us or our service providers relating to or
              in connection with the online platform and services shall be
              binding and conclusive on you for all purposes whatsoever and
              shall be conclusive evidence of any information and/or data
              transmitted between us and you. You hereby agree that all such
              records are admissible in evidence and that you shall not
              challenge or dispute the admissibility, reliability, accuracy or
              the authenticity of such records merely on the basis that such
              records are in electronic form or are the output of a computer
              system, and you hereby waive any of your rights, if any, to so
              object.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>11.12</span> Sub-contracting
              and delegation: We reserve the right to delegate or sub-contract
              the performance of any of our functions in connection with
              GetReadyPH and reserve the right to use any service providers,
              subcontractors and/or agents on such terms as we deem appropriate.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>11.13</span> Assignment: You
              may not assign your rights under these Terms of Use without our
              prior written consent. We may assign our rights under these Terms
              of Use to any third party without any prior notice to you.
            </p>
            <p
              className="pmodaltext"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              <span style={{ color: "#e83b4f" }}>11.14</span> Force Majeure: We
              shall not be liable for non-performance, error, loss, damage,
              hurt, injury, death, interruption or delay in the performance of
              its obligations under these Terms of Use (or any part thereof) or
              for any inaccuracy, unreliability or unsuitability of the online
              platform's and/or services’ contents if this is due, in whole or
              in part, directly or indirectly to an event or failure which is
              beyond our reasonable control.
            </p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btndecline" data-dismiss="modal">
              Decline
            </button>
            <button type="button" className="btnaccept" data-dismiss="modal">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
