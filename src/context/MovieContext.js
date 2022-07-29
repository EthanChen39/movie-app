import React, { createContext, useState, useEffect } from 'react'
import axios from "axios";


export const AppContext = createContext();

export const AppProvider = (props) => {
    // Initialize state
    const [data, setData] = useState([]);
    const [currentQuery, setCurrentQuery] = useState('https://api.themoviedb.org/3/movie/popular?api_key=4665044edc9b6a07a677e680f198a442&language=en-US&page=1');
    const [isLoading, setIsLoading] = useState(true);

    // Fetch data
    // useEffect(() => {
    //     let url = "https://api.themoviedb.org/3/movie/popular?api_key=4665044edc9b6a07a677e680f198a442&language=en-US&page=1";
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(d => {
    //             setData(d.results);
    //             setIsLoading(false);
    //         })
    //         .catch((error) => console.log(error));
    // }, []);
    useEffect(() => {
        return () => {
            const { results } = require('../data.json');
            setData(results);
            setIsLoading(false);
        };
    }, []);
    

    return (
        <AppContext.Provider value={{ data, isLoading,
            setData, setIsLoading,
            currentQuery, setCurrentQuery }}>
            {props.children}
        </AppContext.Provider>
    );
};