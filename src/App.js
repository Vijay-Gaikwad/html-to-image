import React, { useEffect, useRef } from 'react'
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';

import logo from './logo.svg';
import './App.css';

const App = () => {
  const onButtonClick = () => {
    var domElement = document.getElementById('my-node');
    htmlToImage.toJpeg(domElement)
      .then(function (dataUrl) {
        console.log(dataUrl);
        download(dataUrl, 'image.jpeg');
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  };
  return (
    <div className="App" id="my-node">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a><br></br>
        <button onClick={onButtonClick}>Download as JPEG</button>
      </header>
    </div>
  );
}

export default App;
