import React from "react";
import codesetup from "../../../assets/images/codesetup/codesetup.PNG";
import codesetupTwo from "../../../assets/images/codesetup/codesetup2.PNG";

function CodeBaseSetup() {
  return (
    <>
      <h1>Codebase Setup - Text Instructions (Windows)</h1>
      <div className="content-section">
        <p>
          You can set up any React application using the following command-line
          instructions:
        </p>
        <p>
          <strong>Instructions for Windows:</strong>{" "}
        </p>
        <p>
          <strong>Step 1.</strong> In the search bar, type Command Prompt. Click
          on the first search result to open it. Alternatively, press Win+R. In
          the Run window that pops up, type cmd inside the Open text field and
          press OK.
        </p>

        <p>
          <strong>Step 2.</strong> Check if Node.js is installed on your machine
          by writing the following command:
        </p>

        <div
          id="code-snippet-cke_7522"
          data-lang="bash"
          className="code-snippet-container"
          style={{ position: "relative" }}
        >
          <div className="code" contenteditable="false">
            <pre style={{ margin: 0, lineHeight: "125%" }}>
              <span></span>node -v
            </pre>
          </div>
        </div>

        <p>Press Enter.</p>

        <p>
          If you see any version being returned to you, it means that Node.js is
          installed on your machine. If this version is greater than 6, you can
          skip the steps 3 and 4 and directly jump to step 5.
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
            src={codesetup}
            alt=""
          />
        </p>

        <p>
          If the version is not greater than 6 or if you see the message{" "}
          <em>
            "'node' is not recognized as an internal or external command,
            operable program or batch file.",
          </em>{" "}
          which means that Node.js is not installed on your computer, close your
          <em> Command Prompt </em>and proceed to the next step.
        </p>

        <p>
          <strong>Step 3.</strong> Go to{" "}
          <a href="https://nodejs.org/en/download/" target="_blank" rel="noreferrer">
            this
          </a>{" "}
          link to download Node.js::
        </p>
        <p>
          On the webpage under LTS (Recommended For Most Users) tab, click on
          Windows Installer (.msi) - either 32-bit or 64-bit, depending upon
          your processor. This will download the latest version for you, which
          is definitely greater than 6.
        </p>

        <p>
          <strong>Step 4.</strong> Double-click on the downloaded file. Proceed
          with the default instructions to install Node.js. In order to verify
          that it has been correctly installed, open Command Prompt again and go
          back to step 2. If you see a version (greater than 6) of Node.js being
          returned to you, it means that you have successfully installed its
          required version on your machine.
        </p>

        <p>
          <strong>Step 5.</strong> After Node.js is successfully installed on
          your system, type the following command in your Command Prompt:
        </p>

        <div
          id="code-snippet-cke_7522"
          data-lang="bash"
          className="code-snippet-container"
          style={{ position: "relative" }}
        >
          <div className="code" contenteditable="false">
            <pre style={{ margin: 0, lineHeight: "125%" }}>
              <span></span>npx create-react-app test-app
            </pre>
          </div>
        </div>

        <p>
          <em>npm </em>
          stands for Node Package Manager, which gets installed while installing
          <em> Node.js.</em> i stands for install, which is a command. You can
          also write install in place of i. g stands for global and is preceded
          with a hyphen because it is a flag. create-react-app is the name of
          the package that you need to install. It is a CLI tool that allows you
          to quickly create and run React applications, with no configuration
          required from the user.
        </p>

        <p>
          This command will create a React application with the app name you
          specified on your system.
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
            src={codesetupTwo}
            alt=""
          />
        </p>
        <p>
          This command will create a folder with the name that you mentioned
          inside your current path in the Command Prompt. This folder will
          consist of all the necessary configuration files that you need as the
          starter code for a React application.
        </p>

        <p>
          <strong>Step 6.</strong> Go the application folder that you created on
          your current path inside the Command Prompt.
        </p>
        <p>
          For example, here, the name of your application is phone-directory.
          Thus, you can write the following command in order to go into this
          application folder:
        </p>

        <div
          id="code-snippet-cke_7522"
          data-lang="bash"
          className="code-snippet-container"
          style={{ position: "relative" }}
        >
          <div className="code" contenteditable="false">
            <pre style={{ margin: 0, lineHeight: "125%" }}>
              <span></span>cd test-app
            </pre>
          </div>
        </div>

        <p>
          <strong>Step 7.</strong> Now you are ready to start a development
          server locally on your machine and run your application in development
          mode. For this, write the following command in your Command Prompt:
        </p>

        <div
          id="code-snippet-cke_7522"
          data-lang="bash"
          className="code-snippet-container"
          style={{ position: "relative" }}
        >
          <div className="code" contenteditable="false">
            <pre style={{ margin: 0, lineHeight: "125%" }}>
              <span></span>npm start
            </pre>
          </div>
        </div>

        <p>
          You can see that the development server has been started on the
          mentioned URL on your local machine. Here, the server has been started
          on the localhost with port number 3000.
        </p>

        <p>
          This will open a browser tab/window that displays the landing page of
          the application, which looks something like this:
        </p>

        <p>
          <strong>Step 8.</strong> Now you can start making changes to your
          phone-directory application. Any code change that you make will get
          reflected immediately on the browser, where the application is
          running.
        </p>
      </div>
    </>
  );
}

export default CodeBaseSetup;
