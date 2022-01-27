import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, filters, filteredData } = useContext(StarWarsContext);
  const [tableTitle, setTableTitle] = useState([]);

  useEffect(() => {
    const objectOne = data[0];
    if (objectOne) {
      setTableTitle(Object.keys(objectOne)
        .filter((item) => item !== 'residents'));
    }
  }, [data]);

  const renderTable = (optionToFilter) => (
    optionToFilter.map((info) => (
      <tr key={ info.name }>
        <td>{ info.name }</td>
        <td>{ info.rotation_period }</td>
        <td>{ info.orbital_period }</td>
        <td>{ info.diameter }</td>
        <td>{ info.climate }</td>
        <td>{ info.gravity }</td>
        <td>{ info.terrain }</td>
        <td>{ info.surface_water }</td>
        <td>{ info.population }</td>
        <td>{ info.films }</td>
        <td>{ info.created }</td>
        <td>{ info.edited }</td>
        <td>{ info.url }</td>
      </tr>
    ))
  );

  const conditionalRender = () => {
    if (filters.byName) {
      return renderTable(data.filter((planet) => planet.name.includes(filters.byName)));
    }
    if (filters.filterNumericsValues && filteredData.length > 0) {
      return renderTable(filteredData);
    }
    return renderTable(data);
  };

  return (
    <table>
      <thead>
        <tr>
          {
            tableTitle.map((title, index) => <th key={ index }>{ title }</th>)
          }
        </tr>
      </thead>
      <tbody>
        { conditionalRender() }
      </tbody>
    </table>
  );
}

export default Table;

// fazer a verificação com length quando array.
