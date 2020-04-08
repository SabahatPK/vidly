export function Paginate(page, moviesArray, moviesPerPage) {
  let allSlices = [];

  for (let i = 0; i < moviesArray.length; i += moviesPerPage) {
    allSlices.push(moviesArray.slice(i, i + moviesPerPage));
  }

  return allSlices[page - 1];
}
