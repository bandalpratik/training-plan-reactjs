import React from "react";
import moviesly from "../../../assets/images/moviesly.PNG";
import RenderImageText from "../../reusableComponents/RenderImageText";

function ReactExercise() {
  return (
    <>
      <h1>Exercise</h1>
      <div className="content-section">
        <p>
          Develop a web application using HTML/CSS/Bootstrap to display a list
          of popular movies using React JS.
        </p>
        <p>Functionalities to includes:</p>
        <ul>
          <li>Integrate APIs using mock data (list of movies).</li>
          <li>Search bar (Should be able to search movie on user input).</li>
          <li>Select movie and display info.</li>
          <li>Option to sort movie based on release date and rating.</li>
        </ul>
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

export default ReactExercise;
