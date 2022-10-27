import React from "react";
import { useEffect } from "react";
import PropTypes from 'prop-types';

import config from '../../config.json';
import './ProgramList.styled.css';
import { useState } from "react";
import ErrorScreen from "../ErrorScreen";
import ProgramSlide from "../ProgramSlide";

const urlExtension = "?orderBy=views&programType="

const ProgramList = ({ categories }) => {

    const [programsData, setProgramsData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {

      if(categories.length === 0){
        setProgramsData([]);
        return;
      }

        const fetchData = async () => {
            try {
                const response = await fetch(config.fetchCongif.baseURL + urlExtension + categories.join(","));
              if (!response.ok) {
                throw new Error(
                  `Bad response from server: ${response.status}`
                );
              }
              const responseJSON = await response.json();
              setProgramsData(responseJSON.data);
              setError(null);
            } catch(err) {
              setError(err.message);
            } finally {
              // setLoading(false);
            }  
          }

          fetchData();
    }, [categories])

    if(error){
        return <ErrorScreen />
    }

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