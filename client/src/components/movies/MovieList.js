import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions';
import MovieListDetails from './MovieListDetails';
import Modal from '../Modal';


class MovieList extends React.Component {
  componentDidMount() {
    this.props.fetchMovies();
  }


  renderList = () => {
    return this.props.movies.map(movie => {
      return (
        <div key={movie.imdbID} className="item">
          <div className="content center">
            <div className="description">
              <h4 className="header">{movie.Title}</h4>
              <span>Year: {movie.Year}</span>
            </div>
            <MovieListDetails movieId={movie.imdbID} />
          </div>
          <br />
          <hr />
        </div>
      )
    })
  }

  render() {
    return <div className="relaxed divided list">

      {this.renderList()}
    </div>
  }
}

const mapStateToProps = (state) => {

  return { movies: state.movies }
}

export default connect(mapStateToProps, { fetchMovies })(MovieList);