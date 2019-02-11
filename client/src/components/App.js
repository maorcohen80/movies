import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieCreate from './movies/MovieCreate';
import MovieDelete from './movies/MovieDelete';
import MovieEdit from './movies/MovieEdit';
import MovieList from './movies/MovieList';



const App = () => {
  return (
    <div className="ui container">
      <h1>Movies List App</h1>
      <hr />
      <BrowserRouter>
        <div>
          <Route path="/" exact component={MovieList} />
          <Route path="/movies/new" exact component={MovieCreate} />
          <Route path="/movies/edit" exact component={MovieEdit} />
          <Route path="/movies/delete" exact component={MovieDelete} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;