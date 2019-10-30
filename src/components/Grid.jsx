import React from "react";

function Grid(props) {
  const imageUrls = props.images.map(val => ({
    alt: val.alt_description,
    url: val.urls.full
  }));
  // console.log(props);
  return (
    <div
      className="paragraph"
      style={{
        marginTop: "20px",
        padding: "10px",
        border: "1px solid palevioletred"
      }}
    >
      {imageUrls.map(val => (
        <div>
          {/* <p 
          style={{ fontSize: "12px" }} 
          >
          {val.alt}
          </p> */}
          <img src={val.url} style={{ width: "20%" }} />
        </div>
      ))}
    </div>
  );
}

export default Grid;
