import React from "react";
import "./App.css";
import Unsplash, { toJson } from "unsplash-js";
import { useState, useEffect } from "react";
import Grid from "./components/Grid";
import InputBlock from "./components/InputBlock";
import Faker from "faker";
import Testing from "./components/Testing";

function App() {
  const [string, setString] = useState(Faker.hacker.noun());
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState(string);

  useEffect(() => {
    const unsplash = new Unsplash({
      accessKey:
        "2ce42e713393445561de25c8e06b7c9a55e579a391c3fb63f2191e816b3d872a"
    });

    unsplash.search
      .photos(query)
      .then(toJson)
      .then(json => {
        setImages(json.results);
      });
  }, [images]);

  const handler = e => {
    setString(e.target.value);
  };

  const clickHandler = e => {
    e.preventDefault();
    setQuery(string);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://source.unsplash.com/collection/190727/1600x900"
          width="20%"
        />
        <InputBlock
          string={string}
          handler={handler}
          clickHandler={clickHandler}
        />
        <Grid images={images} />
        <div>Parent State: {string}</div>
      </header>
      <Testing />
    </div>
  );
}

export default App;
