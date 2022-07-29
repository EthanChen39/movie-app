import React, { useContext } from 'react';
import { MovieCard } from "./MovieCard";
import { Spinner } from 'react-rainbow-components';
import { AppContext } from "../context/MovieContext";
import { Link } from "react-router-dom";

export const MovieBoard = () => {
    const { data, isLoading, setData, setIsLoading, currentQuery, setCurrentQuery } = useContext(AppContext);
    const results = data;

    const incrementPage = (oldUrl) => {
        // Replace page=# with page=#+1
        let newUrl = oldUrl.replace(/page=\d+/gi, x => {
             let newPageNum = parseInt(x.substring(x.indexOf('=')+1))+1;
             return 'page='+newPageNum;
        });
        return newUrl;
    };

    const handleOnClick = () => {
        const newUrl = incrementPage(currentQuery);
        setCurrentQuery(newUrl);

        setIsLoading(true);
        fetch(newUrl)
            .then(res => res.json())
            .then(setIsLoading(false))
            .then(newData => setData(data.concat(newData.results)))
            .catch(error => console.log(error));
    };

    return (
        <>
            <div className="row">
                {isLoading ? <Spinner size="large" className="mt-lg-5" /> : (
                    results.map( movieInfo => (
                        <Link className="col" to="../MoviePage" state={{ mid: movieInfo.id }}>
                            <MovieCard key={movieInfo.id} info={movieInfo} />
                        </Link>
                    )))}
            </div>

            <div className="d-flex justify-content-center">
                <button className="btn btn-warning btn-lg my-lg-5" type="button" onClick={handleOnClick}>Load More</button>
            </div>
        </>

    );
};