import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
const Note = ({ data, getNotes }) => {
  const { key, datum } = data;
  const { err, setErr } = useState(null);
  const { isChecked, setChecked } = useState(false);
  const deleteNote = async () => {
    try {
      const response = await fetch(
        `https://my-firenote-d5c0e-default-rtdb.firebaseio.com/notes/${key}.json`,
        { method: "DELETE" }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      getNotes();
    } catch (error) {
      setErr(error.message);
    }
  };
  return (
    <div className="note">
      <div className="note-div">
        <input
          className="check"
          id={key}
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              setChecked(true);
            } else {
              setChecked(false);
            }
          }}
        />
        <label className={isChecked ? "line-through" : null} htmlFor={key}>
          {datum}
        </label>
      </div>
      <FontAwesomeIcon icon={faCircleMinus} onClick={deleteNote} />
    </div>
  );
};

export default Note;
