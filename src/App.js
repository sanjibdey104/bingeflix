import React from "react";
import { Header, Layout } from "./components";
import Billboard from "./components/Billboard/Billboard";
import { GlobalStyles } from "./styles/globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Layout>
        <Header />
        <Billboard />
      </Layout>
    </div>
  );
}

export default App;
