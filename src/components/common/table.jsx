import React from "react";
import Tableheader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ movies, columns, sortColumn, handleSort, filteredMovies }) => {
  return (
    <table className="table">
      <Tableheader
        movies={movies}
        columns={columns}
        sortColumn={sortColumn}
        handleSort={handleSort}
      />
      <TableBody data={filteredMovies} columns={columns} />
    </table>
  );
};

export default Table;
