import React, { useEffect } from "react";
import "./Layout.css";

function Layout(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="layout_content">
      <div style={{ width: "100%", opacity: "1", transform: "none" }}>
        <div className="content-wrapper">{props.children}</div>
      </div>
    </div>
  );
}

export default Layout;
