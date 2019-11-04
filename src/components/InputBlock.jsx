import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

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
      <Button onClick={props.clickHandler}>submit</Button>
    </div>
  );
}

export default InputBlock;
