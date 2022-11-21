import React from "react";

function RenderImageText({ img, text }) {
  return (
    <>
      <p style={{ textAlign: "center" }}>
        <img
          class="image-editor"
          data-width="649"
          data-height="371"
          width="600"
          height="342.98921417565487"
          src={img}
          alt=""
        />
      </p>
      <p>{text}</p>
    </>
  );
}

export default RenderImageText;
