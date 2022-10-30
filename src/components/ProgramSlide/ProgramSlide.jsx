import React from "react";
import PropTypes from 'prop-types';


import './ProgramSlide.styled.css';

const urlExtension = '?height='
const targetHeight = window.innerWidth > 768 ? 180 : 90;

const ProgramSlide = ({ programData }) => {

    const { title, playProviders, genres, imageLandscape, imdb } = programData;


    console.log(playProviders);
    console.log(window.innerWidth);

    return(
        <div className="psMain">
            <div className="psImageContainer">
                <img src={imageLandscape + urlExtension + targetHeight} alt="" />
            </div>
            <div className="psData">
                <div>
                    <div className="psTitle">{title}</div>
                    <div className="desktopOnly">{genres.join(', ')}</div>
                </div>
                <div className="desktopOnly">
                    Streaming: { 
                        playProviders.length > 0 
                        ? playProviders.flat().map(({name})=> name).join(', ')
                        : " - "
                    }
                </div>
                <div>
                    {
                        imdb?.rating
                        ? <span className="psRating">{imdb?.rating} </span>
                        : "- " 
                    }IMDb
                </div>
                
            </div>            
        </div>
    )
};

ProgramSlide.propTypes = {
    programData: PropTypes.object,
}

export default ProgramSlide;