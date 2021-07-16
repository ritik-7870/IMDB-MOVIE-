import React, { useState } from "react";

import Search from './componets/Search';
import Results from './componets/Results';
import Popup from "./componets/Popup";

function App() {

  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=ca711b28";

  const search = (e) => {
    if (e.key === "Enter") {
      state.axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;
        setState(prevState => {
          return { ...prevState, results: results }
        }
        )

      });
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;
    setState(prevState => {
      return { ...prevState, s: s }
    });
    const openpopup = id => {
      state.axios(apiurl + "&s=" + id).then(({ data }) => {
        let result = data;
        console.log(result);
        setState(prevState => {
          return { ...prevState, selected: result }
        });
      });
    }
    const closepopup = () => {
      setState(prevState => {
        return { ...prevState, selected: {} }
      });
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} />
        <Results results={state.results} openPopup={openPopup} />
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}

      </main>
    </div>
  );
}

export default App;
