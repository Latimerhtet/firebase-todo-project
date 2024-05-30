import React from "react";
import Note from "./Note";
const Notes = ({ notes, errorMessage, getNotes }) => {
  return (
    <>
      {errorMessage !== "" ? (
        <p className="error">{errorMessage}</p>
      ) : (
        <div className="notes-div">
          {notes.map((note) => {
            return <Note key={note.key} data={note} getNotes={getNotes} />;
          })}
        </div>
      )}
    </>
  );
};

export default Notes;
