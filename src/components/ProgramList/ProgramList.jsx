import React from "react";
import { useEffect } from "react";
import PropTypes from 'prop-types';

import config from '../../config.json';
import { useState } from "react";
import ErrorScreen from "../ErrorScreen";
import ProgramSlide from "../ProgramSlide";

import './ProgramList.styled.css';

const urlExtension = "?orderBy=views&programType="

const ProgramList = ({ categories, sortingFunction }) => {

    const [rawData, setRawData] = useState([])
    const [programsData, setProgramsData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {

      if(categories.length === 0){
        setRawData([]);
        setError(null);
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
              setRawData(responseJSON.data);
              setError(null);
            } catch(err) {
              setError(err.message);
            }  
          }

          fetchData();
    }, [categories])

    useEffect(()=>{
      if(sortingFunction){
        setProgramsData([...rawData].sort(sortingFunction))
      }
    }, [rawData, sortingFunction])

    if(error){
        return <ErrorScreen />
    }

    return (
        <div className="plContainer">
            {programsData.map(( program ) => (<ProgramSlide key={program.id} programData={program} />))}
        </div>
    )
};

ProgramList.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string),
    sortingFunction: PropTypes.func,
}

export default ProgramList;