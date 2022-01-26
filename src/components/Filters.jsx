import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { handleFilterName,
    filters,
    handleFilterData,
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
    const byNumericValues = { [name]: value };
    return byNumericValues;
  };

  const handleSubmit = () => {
    setFilters({
      ...filters,
      filterNumericsValues: [...filterNumericsValues.concat(handleByNumericValues)],
    });
  };

  // formula o objeto e depois seta no array.
  // Rever essa lógica pq mudou de objeto para array.

  return (
    <form className="filters" onSubmit={ () => { handleSubmit(); } }>
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
          { selectColumnOptions.map((option) => (
            <option key={ option } value={ option }>{ option }</option>)) }
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
        placeholder="Filtre por nome"
        id="valueFilter"
        name="value"
        value={ filters.filterNumericsValues.value }
        onChange={ handleByNumericValues }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilterData }
      >
        Filter
      </button>
    </form>
  );
}

export default Filters;
