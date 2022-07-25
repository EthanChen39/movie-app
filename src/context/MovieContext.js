import React, { createContext, useReducer, useState, useEffect } from 'react'
import axios from "axios";


export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'RELOAD_BOARD':
            return {
                ...state,
            };
    }
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    // Initialize state
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch data
    // useEffect(() => {
    //     let url = "https://api.themoviedb.org/3/movie/popular?api_key=4665044edc9b6a07a677e680f198a442&language=en-US&page=1";
    //     fetch(url)
    //         .then(res => setData(res.json()))
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
        <AppContext.Provider value={{ data, isLoading, setData, setIsLoading }}>
            {props.children}
        </AppContext.Provider>
    );
};