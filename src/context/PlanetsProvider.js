import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import requestAPI from '../services/requestAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [nameFilter, setNameFilter] = useState({
    name: '',
  });
  const [dataName, setDataName] = useState('');

  useEffect(() => {
    const getPlanetsAPI = async () => {
      const dataAPI = await requestAPI();
      setData(dataAPI);
    };
    getPlanetsAPI();
  }, []);

  return (
    <StarWarsContext.Provider
      value={
        {
          data,
          nameFilter,
          setNameFilter,
          setData,
          dataName,
          setDataName }
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
