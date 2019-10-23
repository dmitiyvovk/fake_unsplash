import React from "react";

function InputBlock() {
  return (
    <div>
      <input
        type="text"
        placeholder="enter your search query"
        onChange={e => {
          updateData(e.target.value);
        }}
      />
      <button>submit</button>
    </div>
  );
}

export default InputBlock;
