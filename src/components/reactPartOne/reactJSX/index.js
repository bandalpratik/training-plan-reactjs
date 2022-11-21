import React from "react";
import jsx from "../../../assets/images/jsx/jsx.PNG";
import jsxtWO from "../../../assets/images/jsx/jsx2.PNG";

function ReactJsx() {
  return (
    <>
      <h1>React JSX</h1>
      <div className="content-section">
        <p>
          Recall that I mentioned the returned output of the App component
          resembles HTML. This output is called JSX, which mixes HTML and
          JavaScript. Let’s see how this works for displaying the variable:
        </p>

        <p dir="ltr" style={{ textAlign: "justify" }}>
          &nbsp;
        </p>

        <p style={{ textAlign: "center" }}>
          <img
            class="image-editor"
            data-width="649"
            data-height="371"
            width="600"
            height="342.98921417565487"
            src={jsx}
            alt=""
          />
        </p>

        <p>
          Start your application with npm start again, and look for the rendered
          variable in browser, which should read: “Hello React”. Let’s focus on
          the HTML, which is expressed almost the same in JSX. An input field
          with a label can be defined as follows:
        </p>

        <p>
          Let’s focus on the HTML, which is expressed almost the same in JSX. An
          input field with a label can be defined as follows:
        </p>

        <p dir="ltr" style={{ textAlign: "justify" }}>
          &nbsp;
        </p>

        <p style={{ textAlign: "center" }}>
          <img
            class="image-editor"
            data-width="649"
            data-height="371"
            width="600"
            height="342.98921417565487"
            src={jsxtWO}
            alt=""
          />
        </p>
        <p>
          JSX was initially invented for React, but it became useful for other
          modern libraries and frameworks after it gained popularity. It is one
          of my favorite things about React. Without any extra templating syntax
          (except for the curly braces), we are now able to use JavaScript in
          HTML.
        </p>

        <p>
          Remember, everything in curly braces in JSX can be used for JavaScript
          expressions (e.g. function execution):
        </p>
      </div>
    </>
  );
}

export default ReactJsx;
