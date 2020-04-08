import React, { Component } from "react";
import Like from "./common/Like";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "Like",
      content: (movie) => (
        <Like onLike={() => this.props.onLike(movie._id)} liked={movie.liked} />
      ),
    },
    {
      key: "Delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie._id)}
          type="button"
          className="btn btn-danger .bt-xs"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, filteredMovies, handleSort, sortColumn } = this.props;

    //OUTS: Go to 3rd page, delete only movie on that page, system crashes. B/c it thinks
    //that there are no more movies. It should just flip to the page right before it.

    return (
      <React.Fragment>
        <Table
          movies={movies}
          filteredMovies={filteredMovies}
          columns={this.columns}
          sortColumn={sortColumn}
          handleSort={handleSort}
        />
      </React.Fragment>
    );
  }
}

export default MoviesTable;
