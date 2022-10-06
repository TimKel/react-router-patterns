import { Route, Routes, Navigate} from 'react-router-dom';
  import DogList from './DogList';
  import FilterDogDetails from './FilterDogDetails';
  
  function Routing({dogs}) {
    return (
      <Routes>
        <Route path="/dogs" exact>
          <DogList dogs={dogs} />
        </Route>
        <Route path="/dogs/:name">
          <FilterDogDetails dogs={dogs} />
        </Route>
        <Navigate to="/dogs" />
      </Routes>
    );
  }
  
  export default Routing;