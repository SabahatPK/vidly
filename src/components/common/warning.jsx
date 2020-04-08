import React from "react";

const Warning = () => {
  return (
    <div className="alert alert-danger" role="alert">
      <p>
        NOTE: I am building this website as part of the{" "}
        <a href="https://codewithmosh.com/p/mastering-react" target="_blank">
          Mastering React
        </a>
        &nbsp;course. It is a work in progress.
      </p>
    </div>
  );
};

export default Warning;
