import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NameFilter() {
  const { handleFilterName, filters } = useContext(StarWarsContext);

  return (
    <div className="filters">
      {/* onSubmit={ handleSubmit } */ }
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Filtre por nome"
        id="nameFilter"
        value={ filters.byName }
        onChange={ handleFilterName }
      />
    </div>
  );
}

export default NameFilter;
