import React from "react";

function SinglePageApp() {
  return (
    <>
      <h1>Single-Page Application vs Multi-Page Application</h1>
      <div className="content-section">
        <p>
          For a moment, let’s go back in time before SPAs existed: In the past,
          websites and web applications were rendered from the server. A user
          visits a URL in a browser and requests one HTML file and all its
          associated HTML, CSS, and JavaScript files from a web server. After
          some network delay, the user sees the rendered HTML in the browser
          (client) and starts to interact with it. Every additional page
          transition (meaning: visiting another URL) would initiate this chain
          of events again. In this version from the past, essentially everything
          crucial is done by the server, whereas the client plays a minimal role
          by just rendering page by page. While barebones HTML and CSS was used
          to structure the application, just a little bit of JavaScript was
          thrown into the mix to make interactions (e.g. toggling a dropdown) or
          advanced styling (e.g. positioning a tooltip) possible. A popular
          JavaScript library for this kind of work was jQuery
        </p>
        <p>
          <strong> In contrast, </strong> modern JavaScript shifted the focus
          from the server to the client. The most extreme version of it: A user
          visits a URL and requests one minimal HTML file and one associated
          JavaScript file. After some network delay, the user sees the by
          JavaScript rendered HTML in the browser and starts to interact with
          it. Every additional page transition wouldn’t request more files from
          the web server, but would use the initially requested JavaScript to
          render the new page. Also every additional interaction by the user is
          handled on the client too. In this modern version, the server delivers
          mainly JavaScript across the wire with one minimal HTML file. The HTML
          file then executes all the linked JavaScript on the client-side to
          render the entire application with HTML and JavaScript for its
          interactions
        </p>
        <p>
          React, among the other SPA solutions, makes this possible. Essentially
          a SPA is one bulk of JavaScript, which is neatly organized in folders
          and files, to create a whole application whereas the SPA framework
          gives you all the tools to architect it. This JavaScript focused
          application is delivered once over the network to your browser when a
          user visits the URL for your web application. From there, React, or
          any other SPA framework, takes over for rendering everything in the
          browser and for dealing with user interactions.
        </p>
      </div>
    </>
  );
}

export default SinglePageApp;
