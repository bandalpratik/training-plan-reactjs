import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import htmlPdf from "../../../assets/docs/html.pdf";

function NodeJsPartOne() {
  return (
    <>
      <h1>Node JS</h1>
      <div className="content-section">
        <h2>Go to this links:</h2>
        {/* <CustomAccordian /> */}

        <p>
          Best way to learn NodeJS -{" "}
          <a
            href="https://www.geeksforgeeks.org/best-way-to-learn-node-js-a-complete-roadmap/"
            target="_blank"
            rel="noreferrer"
          >
            geeksforgeeks
          </a>
        </p>

        <p>
          Learn HTML and CSS -{" "}
          <a
            href="https://scrimba.com/learn/htmlandcss"
            target="_blank"
            rel="noreferrer"
          >
            Scrimba
          </a>
        </p>

        <p>
          CSS Tutorial-{" "}
          <a
            href="https://www.w3schools.com/css/default.asp"
            target="_blank"
            rel="noreferrer"
          >
            W3 Schools
          </a>
        </p>

        <div
          style={{ display: "flex", justifyContent: "space-around" }}
          className="topics-covered"
        >
          <div className="topics-covered-html">
            <h3>Primary topics covered in HTML:</h3>

            <ul>
              <li>HTML Tags</li>
              <li>The {"<img>"} tag</li>
              <li>Nesting</li>
              <li>Anchor Tags</li>
              <li>Input tags, Button</li>
            </ul>
          </div>

          <div className="topics-covered-css">
            <h3>Primary topics covered in CSS:</h3>

            <ul>
              <li>Margin & Padding</li>
              <li>Borders</li>
              <li>Box model wrap up</li>
              <li>Flex box</li>
              <li>Grid</li>
            </ul>
          </div>
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
                <a style={{ textDecoration: "none" }} href={htmlPdf} download>
                  Head First HTML and CSS
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

export default NodeJsPartOne;
