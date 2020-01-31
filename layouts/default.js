import React from "react";
import Meta from "../components/meta";
import { GuestHeader } from "../components/header";
import { Footer } from '../components/footer';
export default ({ children, meta, announcement}) => (
  <div>
    <Meta props={meta} />
    <GuestHeader announcement={announcement}/>
    {children}
    <Footer />
  </div>
);
