import React ,{useState} from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";
import SearchParams from './searchParams';
import Details from './Details';
import ThemeContext from './ThemeContext';


const App = () => {
  const themehook =useState('peru');
  return(
    <React.StrictMode>
      <ThemeContext.Provider value ={themehook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div> 
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
