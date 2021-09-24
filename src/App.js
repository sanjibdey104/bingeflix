import React from "react";
import { Header, Layout } from "./components";
import { GlobalStyles } from "./styles/globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Layout>
        <Header />
      </Layout>
    </div>
  );
}

export default App;
