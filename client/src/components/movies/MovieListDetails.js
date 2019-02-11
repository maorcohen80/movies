import React from 'react';
import { connect } from 'react-redux';
import { fetchMoviesDetails } from '../../actions';
import ButtonCard from '../ButtonCard';

class MovieListDetails extends React.Component {

  componentDidMount() {
    this.props.fetchMoviesDetails(this.props.movieId);
  }
  render() {
    console.log(this.props.movieDetail);
    const { movieDetail } = this.props;
    if (!movieDetail) {
      return null;
    }
    return (
      <React.Fragment>
        <div>
          <span>Run Time: {movieDetail.Runtime}</span><br />
          <span>Genre: {movieDetail.Genre}</span><br />
          <span>Director: {movieDetail.Director}</span>
        </div>
        <br />
        <ButtonCard />
      </React.Fragment >

    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { movieDetail: state.movieDetails.find(movie => movie.imdbID === ownProps.movieId) };

}

export default connect(mapStateToProps, { fetchMoviesDetails })(MovieListDetails);

