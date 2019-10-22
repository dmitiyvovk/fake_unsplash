import React from 'react';
import logo from "./logo.svg";
import "./App.css";
import Unsplash, { toJson } from "unsplash-js";
import { useState, useEffect } from 'react';



function App() {
  // const [string, setString] = useState('');

  useEffect(()=>{
    const unsplash = new Unsplash({ accessKey: "{53ec565b24a6b2693d113c196c5469b528a86d715005fda60afc3ad3e7b8485d}" });

    // unsplash.users.profile("worldcompass")
    // .catch(err => {
    //   console.log(err);
    // });
    
    unsplash.search.collections("dogs", 1)
    .then(toJson)
    .then(json => {
      console.log(json);
    });

  });

  return (
    <div className="App">
      <header className="App-header">
      <img src="https://source.unsplash.com/collection/190727/1600x900" width="20%"/>
        <p>
          Edit <code> src / App.js </code> and save to reload.
        </p>
        <input
          type="text"          
          placeholder="enter your search query"
        />
        <button>submit</button>
        

      </header>
    </div>
  );
}

export default App;
