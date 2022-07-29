import React from 'react';

export const ReviewCard = (props) => {
    const {author, content} = props.reviewInfo;

    return (
        <div className="card my-5">
            <div className="card-header">
                <h5>User: {author}</h5>
            </div>
            <div className="card-body">
                <p className="mb-0">
                    <p>{content}</p>
                </p>
            </div>
        </div>
    );
};