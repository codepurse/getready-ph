import React from "react";
import Meta from "../components/meta";
import { GuestHeader } from "../components/header";
import { Footer, ShopFooter } from "../components/footer";
import { withRouter } from "next/router";

function Default({ router, children, meta, announcement }) {
  return (
    <div>
      <Meta props={meta} />
      <GuestHeader announcement={announcement} />
      {children}
      {console.log(router.pathname)}
      {router.pathname === '/shop' ? <ShopFooter /> : <Footer/>}
    </div>
  );
}
export default withRouter(Default);
