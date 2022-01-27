import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const [numericFilters, setNumericFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const { handleFilterName,
    filters,
    setFilters,
    filterNumericsValues,
  } = useContext(StarWarsContext);

  const selectColumnOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const selectComparisonOptions = ['maior que', 'menor que', 'igual a'];

  const handleByNumericValues = ({ target: { name, value } }) => {
    const byNumericValues = {
      ...numericFilters,
      [name]: value,
    };
    setNumericFilters(byNumericValues);
  };

  const handleSubmit = () => {
    setFilters({
      ...filters,
      filterNumericsValues: [...filterNumericsValues.concat(numericFilters)],
    });
  };

  return (
    <form className="filters">
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Filtre por nome"
        id="nameFilter"
        value={ filters.byName }
        onChange={ handleFilterName }
      />
      <div className="numeric-filter">
        <select
          data-testid="column-filter"
          name="column"
          value={ filters.filterNumericsValues.column }
          onChange={ handleByNumericValues }
        >
          {
            selectColumnOptions.filter((columnOption) => (
              !filters.filterNumericsValues.some(({ column }) => column === columnOption)
            ))
              .map((option) => (
                <option key={ option } value={ option }>{ option }</option>))
          }
        </select>
      </div>
      <div className="comparisonFilter">
        <select
          data-testid="comparison-filter"
          name="comparison"
          value={ filters.filterNumericsValues.comparison }
          onChange={ handleByNumericValues }
        >
          { selectComparisonOptions.map((option) => (
            <option key={ option } value={ option }>{ option }</option>)) }
        </select>
      </div>
      <input
        type="number"
        data-testid="value-filter"
        placeholder="number"
        id="valueFilter"
        name="value"
        value={ numericFilters.value }
        onChange={ handleByNumericValues }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleSubmit() }
      >
        Filter
      </button>
    </form>
  );
}

export default Filters;
