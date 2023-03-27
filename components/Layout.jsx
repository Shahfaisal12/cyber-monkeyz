// components/Layout.js

import React from "react";
import ChatButton from "./elements/ChatButton";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      {/*  <div className="btn-chat fixed-bottom d-flex justify-content-end mx-5" >
        <ChatButton />
      </div> */}
    </div>
  );
};

export default Layout;
