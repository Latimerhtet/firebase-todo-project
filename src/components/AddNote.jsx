import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
const AddNote = ({ getNotes }) => {
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [loading, isLoading] = useState(false);
  const addNote = async (e) => {
    e.preventDefault();
    try {
      isLoading(true);
      await fetch(
        "https://my-firenote-d5c0e-default-rtdb.firebaseio.com/notes.json",
        {
          method: "POST",
          body: JSON.stringify(note),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setNote("");
      isLoading(false);
      getNotes();
    } catch (err) {
      alert("Something went wrong!!");
      setError(err);
    }
  };
  return (
    <div className="addYourNoteArea">
      <form onSubmit={addNote}>
        <input
          type="text"
          placeholder="Note your todo here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button type="submit" className="button">
          <FontAwesomeIcon icon={faSquarePlus} />
        </button>
      </form>
      {loading && (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default AddNote;
