import React from "react";
import { useState, useEffect } from "react";

function InputBlock(props) {

  return (
    <div>
      <p>Вы хотите найти фотографии {props.string} </p>
      <input
        type="text"
        placeholder="enter your search query"
        onChange={props.handler}
        value={props.string}        
      />
      <button >submit</button>
    </div>
  );
}

export default InputBlock;
