import React from 'react';
import MainHeader from "./components/Headers/MainHeader"
import Routes from "./config/Routes"

function App() {
  return (
    <div className="App">
      <MainHeader />
      { Routes }
    </div>
  );
}

export default App;
