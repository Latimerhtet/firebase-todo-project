import React from "react";

const Notes = ({ notes, errorMessage }) => {
  return (
    <>
      {errorMessage !== "" ? (
        <p className="error">{errorMessage}</p>
      ) : (
        <div className="notes-div">
          {notes.map((note, index) => {
            return (
              <div className="note" key={index}>
                <input id={index} type="checkbox" />
                <label htmlFor={index}>{note}</label>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Notes;
