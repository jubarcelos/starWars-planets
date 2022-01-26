import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NameFilter() {
  const { setNameFilter, setDataName, data } = useContext(StarWarsContext);

  function handleSubmit(event) {
    event.preventDefault();
    const filterPlanetName = data.filter((item) => item.name.includes(event));
    setDataName(filterPlanetName);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="nameFilter">
        <input
          data-testid="name-filter"
          name="nameFilter"
          placeholder="Filtro por nome"
          id="nameFilter"
          onChange={ (event) => setNameFilter(event.target.value) }
        />
      </label>
    </form>
  );
}

export default NameFilter;
