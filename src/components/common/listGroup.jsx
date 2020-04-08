import React from "react";

const Filter = ({
  genres,
  handleGenre,
  currGenre,
  textProperty,
  valueProperty,
}) => {
  return (
    <React.Fragment>
      <ul className="list-group">
        {genres.map((each) => (
          <li
            key={each[valueProperty]}
            className={
              each[textProperty] === currGenre
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => handleGenre(each[textProperty])}
          >
            {each[textProperty]}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

Filter.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default Filter;
