import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import reactjs from "../../../assets/docs/reactjs.pdf";

function IntroReact() {
  return (
    <>
      <h1>Introduction to React JS</h1>
      <div className="content-section">
        This session introduces to you ReactJS and the notion of it being a
        popular JavaScript library to build user-interfaces. You’ll briefly look
        at the history of this library. You’ll witness various advantages that
        it offers. You’ll also get to know about the environment in which
        ReactJS works. In the end, you’ll learn about single-page applications
        and how React is one of the popular libraries to build such
        applications.
        <br />
        <strong>
          "React is JavaScript library for building user-interfaces."
        </strong>
        <p>
          React has been designed in such a way that it can be adopted
          gradually. You are free to use React in an application to the extent
          you require. You can use as little of it as required or as much as you
          want. To learn more about React, you can click{" "}
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            here
          </a>{" "}
          to go to its official website.
        </p>
        <div className="content-topics">
          <span style={{ fontSize: "19px" }}> Modules to be covered</span>
          <ul>
            <li>History of React</li>
            <li>Advantages of React</li>
            <li>Single Page VS Multi Page Application</li>
          </ul>
        </div>
        <h3>Addition Resources</h3>
        <div
          style={{
            position: "relative",
            border: "1px solid black",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <div className="code" contenteditable="false">
            <pre
              style={{
                margin: 0,
                lineHeight: "125%",
                fontWeight: "700",
                display: "flex",
                alignItems: "Center",
              }}
            >
              <span style={{ marginRight: "10px" }}>
                <a style={{ textDecoration: "none" }} href={reactjs} download>
                  The Road To Learn React
                </a>
              </span>
              <DownloadIcon />
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroReact;
