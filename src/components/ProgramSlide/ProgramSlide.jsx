import React from "react";
import PropTypes from 'prop-types';


import './ProgramSlide.styled.css';

const ProgramSlide = ({ programData }) => {

    const { title, playProviders, genreGroups, landscapeImage, imdb } = programData;

    return(
        <div>
            <div>{title}</div>
            <div>{landscapeImage.url}</div>
            <div>{playProviders.map((provider) => {
                //console.log(title, provider)
                return null;
            })}</div>
            <div>{genreGroups}</div>
            <div>{imdb.rating}</div>
        </div>
    )
};

ProgramSlide.propTypes = {
    programData: PropTypes.object,
}

export default ProgramSlide;