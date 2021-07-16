import React  from 'react'

function Popup({ selected,closePopup }) {
    return (
        <section className="Popup">
            <div className="content">
<h2>{ selected.Title } <span>({ selected.year })</span></h2>
<p className="Rating">Rating: {selected.imdbRating}</p>
<div className="plot">
    <img src={selected.poster} />
    <p>{selected.plot}</p>
</div>
<button className="close" onClick={closePopup}>close</button>
            </div>
        </section>
    )
}

export default Popup
