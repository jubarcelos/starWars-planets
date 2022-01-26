import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import requestAPI from '../services/requestAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    byName: '',
  });

  useEffect(() => {
    const getPlanetsAPI = async () => {
      const dataAPI = await requestAPI();
      setData(dataAPI);
    };
    getPlanetsAPI();
  }, []);

  const handleFilterName = ({ target: { value } }) => {
    setFilters({ ...filters, byName: value });
  };

  return (
    <StarWarsContext.Provider
      value={
        {
          data,
          setData,
          filters,
          setFilters,
          handleFilterName }
      }
    >
      { children }
    </StarWarsContext.Provider>
  );
}

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
