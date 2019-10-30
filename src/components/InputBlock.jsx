import React from "react";

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
      <button onClick={props.clickHandler}>submit</button>
    </div>
  );
}

export default InputBlock;
