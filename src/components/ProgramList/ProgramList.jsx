import React from "react";
import PropTypes from 'prop-types';

import './ProgramList.styled.css';

const ProgramList = ({ categories }) => {


    return(
        <div className="plMain">
            {categories}
        </div>
    )
};

ProgramList.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.oneOf(['series', 'movie'])),
}

export default ProgramList;