import React from 'react';
import { Card, Rating } from 'react-rainbow-components';


const cardStyles = {
    width: 260,
};



export const MovieCard = (props) => {
    const { original_title, poster_path, vote_average } = props.info;
    // Round the rating to two decimal places
    const star = Math.round(vote_average / 2 * 100) / 100;

    const imageStyles = {
        borderTopLeftRadius: '0.875rem',
        borderTopRightRadius: '0.875rem',
        height: 350,
        width: '100%',
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`,
        backgroundSize: 'cover',
    };

    return (
        <div className="col-3">
        <div className="rainbow-p-bottom_xx-large mt-lg-5">
            <a onClick={() => alert(original_title)}>
                <Card
                    style={cardStyles}
                    className="hvr-bounce-in"
                    footer={
                        <div>
                            <div className="rainbow-flex rainbow-flex_column rainbow-align_center rainbow-m-bottom_x-small">
                                <p className="rainbow-font-size-heading_medium film_title">
                                    {original_title}
                                </p>
                            </div>
                            <Rating value={star} readOnly label={`${vote_average} of 10`} />
                        </div>
                    }
                >
                    <div style={imageStyles} />
                </Card>
            </a>
        </div>
        </div>
    );
};