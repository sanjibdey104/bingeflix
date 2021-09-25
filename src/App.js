import React from "react";
import { Header, Layout } from "./components";
import Billboard from "./components/Billboard/Billboard";
import { GlobalStyles } from "./styles/globalStyles";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MovieList from "./containers/MovieList";
import MovieDetails from "./containers/MovieDetails";
import { Home } from "./components/Home/Home";

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
            <Route path="/movies" component={MovieList} />
            <Route path="/movie/:movieId" component={MovieDetails} />
            <Route>404 page not found</Route>
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
