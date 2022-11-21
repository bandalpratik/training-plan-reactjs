import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../home";
import HtmlCss from "../htmlCss";
import IntroReactJS from "../introreactjs";
import NodeJs from "../nodejs";
import ReactPartOne from "../reactPartOne";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/html/css/:page" element={<HtmlCss />} />
      <Route path="/introduction-reactjs/:page" element={<IntroReactJS />} />
      <Route path="/introduction-nodejs/:page" element={<NodeJs />} />
      <Route path="/reactjs-part1/:page" element={<ReactPartOne />} />
    </Routes>
  );
}

export default Routing;
