import React from "react";
import { Header } from "./components";
import { GlobalStyles } from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Header />
      </div>
    </>
  );
}

export default App;
