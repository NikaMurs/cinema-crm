import React from 'react';

export default function MoviePoster({ src, alt }) {
    return (
        <div className="movie__poster">
            <img className="movie__poster-image" alt={alt} src={src} />
        </div>
    );
}