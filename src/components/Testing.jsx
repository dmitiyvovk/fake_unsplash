import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Div = styled.div`
  color: blueviolet;
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
  const numbers = [1, 2, 3, 4, 5];
  const ListItems = numbers.map(x => <li key={x.toString()}>{x}</li>);
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchChange = event => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const isSearched = searchTerm => x =>
    x.title.toLowerCase().includes(searchTerm.toLowerCase());

  return (
    <div className="App">
      <form>
        <input type="text" onChange={onSearchChange} />
      </form>
      {list.filter(isSearched(searchTerm)).map(x => (
        <div key={x.objectID}>
          <span>
            <a href={x.url}>{x.title}</a>
          </span>
          <span>{x.author}</span>
          <span>{x.num_comments}</span>
          <span>{x.poins}</span>
          <button onClick={() => console.log(x.objectID)} type="button">
            Dismiss
          </button>
        </div>
      ))}
      <ul>{ListItems}</ul>
    </div>
  );
}

export default Testing;
