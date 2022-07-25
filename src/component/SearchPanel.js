import React, { useState, useContext } from 'react';
import { AppContext } from "../context/MovieContext";

export const SearchPanel = () => {
    const [userInput, setUserInput] = useState("");
    const [currentSearchLabel, setCurrentSearchLabel] = useState('Popular');
    const { setData, setCurrentQuery } = useContext(AppContext);
    const searchQuery = `https://api.themoviedb.org/3/search/movie?api_key=4665044edc9b6a07a677e680f198a442&language=en-US&query=${userInput}&page=1&include_adult=false`;

    const handleClick = () => {
        setCurrentQuery(searchQuery);
        fetch(searchQuery)
            .then(res => res.json())
            .then(data => setData(data.results))
            .catch(error => console.log(error))
        setCurrentSearchLabel(userInput);
        setUserInput("");
    };

    return (
        <>
        <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
                <div className="input-group mb-3 input-group-lg">
                    <input type="text" className="form-control " placeholder="Name of the movie..."
                           aria-label="Recipient's username" value={userInput}
                            onChange={e => setUserInput(e.target.value)} />
                        <button className="btn btn-outline-warning" type="button" id="search-btn"
                                onClick={handleClick}>Search</button>
                </div>
            </div>
        </div>
        <h1 className="mt-5">
            Current Search:
            <span className="badge bg-primary mx-4">{currentSearchLabel}</span>
        </h1>
    </>
    );
};