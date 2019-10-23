import React from "react";
import { useState, useEffect } from "react";

function InputBlock(props) {
  const [childState, setChildState] = useState('hello');

  useEffect(() => {
    props.handler(childState);
  }, [childState]);

  const inputOnChangeHandler = e => {
    setChildState(e.target.value);
  }

  return (
    <div>
      <p>Вы хотите найти фотографии {childState} </p>
      <input
        type="text"
        placeholder="enter your search query"
        onChange={inputOnChangeHandler}
        value={childState}
      />
      <button>submit</button>
    </div>
  );
}

export default InputBlock;
