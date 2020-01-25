import React from "react";
import "./App.css";
import MenuBar from "./components/MenuBar";
import Screen from "./components/FrontScreen";

function App() {
  return (
    <div className="App">
      <Screen />
      <MenuBar />
    </div>
  );
}

export default App;
