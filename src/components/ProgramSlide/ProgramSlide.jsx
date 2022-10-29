import React from "react";
import PropTypes from 'prop-types';


import './ProgramSlide.styled.css';

const urlExtension = '?height='
const targetWidth = 90;

const ProgramSlide = ({ programData }) => {

    const { title, playProviders, genres, imageLandscape, imdb } = programData;

    return(
        <div className="psMain">
            <div className="psImageContainer">
                <img src={imageLandscape + urlExtension + targetWidth} alt="" />
            </div>
            <div className="psData">
                <div className="psTitle">{title}</div>
                <div>
                    {
                        imdb?.rating
                        ? <span className="psRating">{imdb?.rating} </span>
                        : "- " 
                    }IMDb
                </div>
                
            </div>
            {/* <div>provider: {playProviders.name}</div>
            <div>{genres}</div> */}
        </div>
    )
};

ProgramSlide.propTypes = {
    programData: PropTypes.object,
}

export default ProgramSlide;