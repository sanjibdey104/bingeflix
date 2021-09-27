import React from "react";
import { Home, Header, Layout } from "./components";
import { GlobalStyles } from "./styles/globalStyles";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailsContainer from "./containers/ItemDetailsContainer";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Layout>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" component={Home} />
            <Route exact path="/movies">
              <ItemListContainer itemType={"movie"} />
            </Route>
            <Route exact path="/movies/:itemId">
              <ItemDetailsContainer itemType={"movie"} />
            </Route>
            <Route path="/tvshows/:itemId">
              <ItemDetailsContainer itemType={"tv"} />
            </Route>
            <Route path="/tvshows">
              <ItemListContainer itemType={"tv"} />
            </Route>
            <Route path="/new&popular">
              <ItemListContainer itemType={"movie"} />
            </Route>
            <Route path="/mylist">
              <ItemListContainer itemType={"tv"} />
            </Route>
            <Route>404 page not found</Route>
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
