import React from "react";
import styled from "styled-components";

const Div = styled.div`
  color: blueviolet;
  && div: {
    border: 1px solid red;
  }
`;

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

function Testing() {
  return (
    <Div className="App">
      {list.map(x => {
        return (
          <div>
            <span>
              <a href={x.url}>{x.title}</a>
            </span>
            <span>{x.author}</span>
            <span>{x.num_comments}</span>
            <span>{x.poins}</span>
          </div>
        );
      })}
    </Div>
  );
}

export default Testing;
