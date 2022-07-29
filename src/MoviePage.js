import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom'
import { API_Key } from "./API_Key";
import { useState, useEffect } from "react";
import {ReviewCard} from "./component/ReviewCard";



function MoviePage() {
    const location = useLocation();
    const state = location.state;
    const mid = state.mid;

    const reviewAPI = `https://api.themoviedb.org/3/movie/${mid}/reviews?api_key=${API_Key}&language=en-US&page=1`;
    const detailsAPI = `https://api.themoviedb.org/3/movie/${mid}?api_key=${API_Key}&language=en-US`;


    const [reviews, setReviews] = useState([]);

    const [details, setDetails] = useState();
    const [title, setTitle] = useState('');

    const [backdropPath, setBackdropPath] = useState('');

    const posterPath = `https://image.tmdb.org/t/p/w500${backdropPath}`;


    // Fetch review and store it in 'reviews'
    useEffect(() => {
            fetch(reviewAPI)
                .then(res => res.json())
                .then(data => setReviews(data.results))
                .catch(error => console.log(error));

            fetch(detailsAPI)
                .then(res => res.json())
                .then(data => {
                    setDetails(data);
                    setBackdropPath(data.backdrop_path);
                    setTitle(data.title);
                })
                .catch(error => console.log(error));



    }, []);


    return (
        <div>
            <div className="top-section">


                <div className="container">
                    <div className="row-cols-3">
                        <div className="col movie-description mt-5">
                            <img src={posterPath} className="rounded d-flex justify-content-center backdrop" alt="Loading" />
                            <h3 className="movie-title text-center mt-5">{title}</h3>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="">
                    {reviews.length === 0 ? <h2 className="mt-lg-5">No Reviews</h2> :
                        reviews.map(review => (
                            <ReviewCard reviewInfo={review} />
                        ))}
                </div>
            </div>
    </div>
    );
}

export default MoviePage;