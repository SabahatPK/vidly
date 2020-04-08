import React, { Component } from "react";
import { getMovies } from "./../services/fakeMovieService";
import { getGenres } from "./../services/fakeGenreService";
import Pagination from "./common/pagination";
import { Paginate } from "./../services/paginate";
import Filter from "./common/listGroup";
import MoviesTable from "./moviesTable";
import Warning from "./common/warning";

// OUTS: once this is done, another project is to wrap d3 project in React.

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    moviesPerPage: 4,
    currentPage: 1,
    currentGenre: "All Genres",
    sortColumn: { path: "", order: "" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (id) => {
    let movies = this.state.movies.filter((each) => each._id !== id);
    this.setState({ movies });
  };

  handleLike = (movie_id) => {
    let movies = this.state.movies;
    movies
      .filter((each) => each._id === movie_id)
      .map((each) => (each.liked = !each.liked));
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenre = (genre) => {
    this.setState({ currentGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const {
      currentPage,
      movies,
      moviesPerPage,
      genres,
      currentGenre,
      sortColumn,
    } = this.state;

    if (this.state.movies.length === 0)
      return <p>There are no movies left in the DB.</p>;

    let genreOfMovies =
      currentGenre !== "All Genres"
        ? movies.filter((each) => each.genre.name === currentGenre)
        : movies;

    let filteredMovies = Paginate(currentPage, genreOfMovies, moviesPerPage);

    return (
      <React.Fragment>
        <Warning />
        <div className="row">
          <div className="col-3">
            <Filter
              genres={genres}
              handleGenre={this.handleGenre}
              currGenre={currentGenre}
            />
          </div>
          <div className="col">
            <p>
              Showing {genreOfMovies.length} of {this.state.movies.length}{" "}
              movies in the DB.
            </p>
            <MoviesTable
              movies={movies}
              filteredMovies={filteredMovies}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              handleSort={this.handleSort}
              sortColumn={sortColumn}
            />

            <Pagination
              movieCount={genreOfMovies.length}
              moviesPerPage={moviesPerPage}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
