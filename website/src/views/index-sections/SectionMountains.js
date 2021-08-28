import React from "react";
import extension from "components/Compatability/Webp"


function SectionMountains() {
  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage: "url(" + require("assets/img/mountains." + extension).default + ")",
        }}
      >
      </div>{" "}
    </>
  );
}

export default SectionMountains;
