import React, { useState, useContext } from 'react';
import { MovieCard } from "./MovieCard";
import {Button, Pagination, Spinner} from 'react-rainbow-components';
import { AppContext } from "../context/MovieContext";

var page = 2;
export const MovieBoard = () => {
    const { data, isLoading, setData } = useContext(AppContext);

    const results = data;



    // const [currentPage, setCurrentPage] = useState(1);
    //
    // const handleChange = (event, page) => {
    //     setCurrentPage(page);
    // };

    const handleOnClick = () => {
        const loadMoreUrl = `https://api.themoviedb.org/3/movie/popular?api_key=4665044edc9b6a07a677e680f198a442&language=en-US&page=${page}`;

        fetch(loadMoreUrl)
            .then(res => res.json())
            .then(newData => setData(data.concat(newData.results)))
            .catch(error => console.log(error));
        page++;
    };

    return (
        <>
        <div className="row">
            {isLoading ? <Spinner size="large" /> : (
                results.map( movieInfo => <MovieCard className="col" key={movieInfo.id} info={movieInfo} />)
            ) }

            {/*<Pagination*/}
            {/*    className="rainbow-l_auto mt-lg-5 mb-lg-5"*/}
            {/*    pages={6}*/}
            {/*    activePage={currentPage}*/}
            {/*    onChange={handleChange}*/}
            {/*/>*/}
        </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-warning btn-lg my-lg-5" type="button" onClick={handleOnClick}>Load More</button>
            </div>
        </>

    );
};