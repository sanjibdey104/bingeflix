import React from "react";
import { Home, Header, Layout } from "./components";
import { GlobalStyles } from "./styles/globalStyles";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MovieListContainer from "./containers/MovieListContainer";
import MovieDetailsContainer from "./containers/MovieDetailsContainer";

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
            <Route exact path="/movies" component={MovieListContainer} />
            <Route path="/movies/:movieId" component={MovieDetailsContainer} />
            <Route path="/tvshows" component={Home} />
            <Route path="/new&popular" component={MovieListContainer} />
            <Route path="/mylist" component={Home} />
            <Route>404 page not found</Route>
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
