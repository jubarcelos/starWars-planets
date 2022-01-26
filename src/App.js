import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import NameFilter from './components/NameFilter';
import Table from './components/Table';

function App() {
  return (
    <PlanetsProvider>
      <NameFilter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
