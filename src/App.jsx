import React, { useEffect, useState } from "react";
import AddNote from "./components/AddNote";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import { faL } from "@fortawesome/free-solid-svg-icons";
const App = () => {
  const [notes, setNotes] = useState([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://my-firenote-d5c0e-default-rtdb.firebaseio.com/notes.json"
      );
      if (!response.ok) {
        throw new Error("There is something wrong with add your note!");
      } else {
        const data = await response.json();
        const myNotes = [];
        for (let datum in data) {
          myNotes.push(data[datum]);
        }
        setNotes(myNotes);
      }
    } catch (error) {
      setErr(error.message);
    }
    setLoading(false);
  };
  return (
    <div>
      <Navbar getNotes={getNotes} />
      <AddNote getNotes={getNotes} />
      {loading ? (
        <div className="center">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="notes-container">
          <Notes errorMessage={err} notes={notes} />
        </div>
      )}
    </div>
  );
};

export default App;
