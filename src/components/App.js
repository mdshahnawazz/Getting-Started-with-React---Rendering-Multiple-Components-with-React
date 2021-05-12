import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const heading="Shopping website";
  const description="Do what ever you want to shopping in this website.";
  return (
    <div id="main">
      <h1 data-ns-test="project-name">{heading}</h1>
      <p data-ns-test="project-description">{description}</p>
    </div>
  );
};


export default App;
