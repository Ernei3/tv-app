import React from "react";
import { useEffect } from "react";
import PropTypes from 'prop-types';

import config from '../../config.json';
import mockData from '../../mockData.json'
import './ProgramList.styled.css';
import { useState } from "react";
import ErrorScreen from "../ErrorScreen";
import ProgramSlide from "../ProgramSlide";

const ProgramList = ({ categories }) => {

    const [programsData, setProgramsData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(config.fetchCongif.baseURL);
              if (!response.ok) {
                throw new Error(
                  `Bad response from server: ${response.status}`
                );
              }
              const data = await response.json();
              setProgramsData(data);
              setError(null);
            } catch(err) {
              setError(err.message);
              setProgramsData(mockData.programs);
            } finally {
              // setLoading(false);
            }  
          }

          fetchData();
    }, [])

    // if(error){
    //     return <ErrorScreen />
    // }

    return (
        <div className="plMain">
            {categories}
            {programsData.map(( program ) => (<ProgramSlide key={program.id} programData={program} />))}
        </div>
    )
};

ProgramList.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.oneOf(['series', 'movie'])),
}

export default ProgramList;