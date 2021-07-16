import React from 'react';

function Search({ handleInput, search }) {

    return (
        <section className="searchbox-wrap">
            <input
                type="text"
                placeholder="Search for a movie.."
                className="searchbox"
                onChange={handleInput} />
               onKeypress={ search } 
        </section>
    )
}

export default Search;
  