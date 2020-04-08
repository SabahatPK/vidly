import React, { Component } from "react";
import { sort } from "../../services/sortFunc";

class Tableheader extends Component {
  raiseSort = (path) => {
    let movies = this.props.movies;
    let sortColumn = this.props.sortColumn;

    sort(movies, path, sortColumn);
    sortColumn.path = path;
    sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    this.props.handleSort(sortColumn);
  };

  sortIcon = (column) => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") {
      return <i className="fas fa-sort-up"></i>;
    } else {
      return <i className="fas fa-sort-down"></i>;
    }
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((each) => (
            <th
              className="clickable"
              key={each.path || each.key}
              onClick={() => this.raiseSort(each.path)}
            >
              {each.label} {this.sortIcon(each)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default Tableheader;
