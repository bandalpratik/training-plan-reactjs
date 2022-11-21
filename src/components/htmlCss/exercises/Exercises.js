import React from "react";
import moviesly from "../../../assets/images/moviesly.PNG";
import RenderImageText from "../../reusableComponents/RenderImageText";

function Exercises() {
  return (
    <>
      <h1>Exercises</h1>
      <div className="content-section">
        <p>
          Develop a webpage using HTML/CSS/Bootstrap to display a list of
          popular movies. Must include a{" "}
          <strong>navbar, search box, footer.</strong>
        </p>
        <p>For reference:</p>
        <div style={{ textAlign: "center" }}>
          <img
            class="image-editor"
            data-width="649"
            data-height="371"
            width="800"
            height="400"
            src={moviesly}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Exercises;
