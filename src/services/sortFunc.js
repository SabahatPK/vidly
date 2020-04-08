export function sort(allMovies, path, sortColumn) {
  if (path === "title") {
    allMovies.sort(function(a, b) {
      var nameA = a[path].toUpperCase(); // ignore upper and lowercase
      var nameB = b[path].toUpperCase(); // ignore upper and lowercase

      if (
        (path === sortColumn.path && sortColumn.order === "desc") ||
        path !== sortColumn.path
      ) {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      } else if (path === sortColumn.path && sortColumn.order === "asc") {
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      }
    });
  } else if (path === "genre.name") {
    path = "name";
    sortColumn.path = "name";
    allMovies.sort(function(a, b) {
      var nameA = a.genre[path].toUpperCase(); // ignore upper and lowercase
      var nameB = b.genre[path].toUpperCase(); // ignore upper and lowercase

      if (
        (path === sortColumn.path && sortColumn.order === "desc") ||
        path !== sortColumn.path
      ) {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      } else if (path === sortColumn.path && sortColumn.order === "asc") {
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      }
    });
  } else if (path === "numberInStock" || "dailyRentalRate") {
    allMovies.sort(function(a, b) {
      if (
        (path === sortColumn.path && sortColumn.order === "desc") ||
        path !== sortColumn.path
      ) {
        return a[path] - b[path];
      } else if (path === sortColumn.path && sortColumn.order === "asc") {
        return b[path] - a[path];
      }
    });
  }

  return allMovies;
}
