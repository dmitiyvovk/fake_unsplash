import React from "react";

function Grid(props) {
  const imageUrls = props.images.map(val => ({
    alt: val.alt_description,
    url: val.urls.full
  }));
  console.log(props.images);
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "10px",
        border: "1px solid palevioletred"
      }}
    >
      {imageUrls.map(val => (
        <p style={{ fontSize: "12px" }}>{val.alt}</p>
      ))}
    </div>
  );
}

export default Grid;