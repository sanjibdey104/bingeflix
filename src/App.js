import React from "react";
import { Home, Header, Layout, Billboard } from "./components";
import { GlobalStyles } from "./styles/globalStyles";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MovieListContainer from "./containers/MovieListContainer";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Layout>
        <Router>
          <Header />
          <Billboard />
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" component={Home} />
            <Route path="/movies" component={MovieListContainer} />
            {/* <Route path="/movie/:movieId" component={MovieDetailsC} /> */}
            <Route>404 page not found</Route>
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
