import React from 'react'

function Result({ result, openPopup }) {
    return (
        <div className="result" onClick={openPopup}>
            <img src={result.poster}/>
            <h3>{result.title}</h3>
        </div>
    )
}

export default Result
