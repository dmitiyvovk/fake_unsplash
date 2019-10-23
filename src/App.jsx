import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Unsplash, { toJson } from "unsplash-js";
import { useState, useEffect } from "react";
import InputBlock from "./components/InputBlock";

function App() {
  const [string, setString] = useState("hello");

  useEffect(() => {
    const unsplash = new Unsplash({
      accessKey:
        "2ce42e713393445561de25c8e06b7c9a55e579a391c3fb63f2191e816b3d872a"
    });

    unsplash.search
      .photos(string)
      .then(toJson)
      .then(json => {
        console.log(json);
      });

    console.log({ string });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://source.unsplash.com/collection/190727/1600x900"
          width="20%"
        />
        <p>Вы хотите найти фотографии {string}</p>
        <InputBlock updateData={setString} />
      </header>
    </div>
  );
}

export default App;
