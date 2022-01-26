import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import requestAPI from '../services/requestAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    byName: '',
    filterNumericsValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '0',
      },
    ],
  });

  useEffect(() => {
    const getPlanetsAPI = async () => {
      const dataAPI = await requestAPI();
      setData(dataAPI);
    };
    getPlanetsAPI();
  }, [setData]);

  const handleFilterName = ({ target: { value } }) => {
    setFilters({ ...filters, byName: value });
  };

  const comparisonLogicImplicit = {
    'maior que': (a, b) => Number(a) > Number(b),
    'menor que': (a, b) => Number(a) < Number(b),
    'igual a': (a, b) => Number(a) === Number(b),
  };

  const handleFilterData = () => {
    const { filterNumericsValues } = filters;
    const filterData = (data.filter((planet) => filterNumericsValues
      .every(({ column, value, comparison }) => (
        comparisonLogicImplicit[comparison](planet[column], value)
      )))
    );
    setFilteredData(filterData);
  };
  const context = {
    data,
    setData,
    filters,
    setFilters,
    handleFilterName,
    filteredData,
    handleFilterData,
  };

  return (
    <StarWarsContext.Provider
      value={ context }
    >
      { children }
    </StarWarsContext.Provider>
  );
}

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
