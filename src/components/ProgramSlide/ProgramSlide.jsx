import React from "react";
import PropTypes from 'prop-types';


import './ProgramSlide.styled.css';

const ProgramSlide = ({ programData }) => {

    const { title, playProviders, genres, imageLandscape, imdb } = programData;

    return(
        <div>
            <div>{imageLandscape}</div>
            <div>
                <div>{title}</div>
                <div>{imdb?.rating}</div>
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