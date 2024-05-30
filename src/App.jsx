import React, { useEffect, useState } from "react";
import AddNote from "./components/AddNote";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import Intro from "./components/Intro";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [intro, setIntro] = useState(false);
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
        for (let key in data) {
          myNotes.push({
            key,
            datum: data[key],
          });
        }
        console.log(myNotes);
        setNotes(myNotes);
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };
  return (
    <div>
      <Navbar notes={notes} />
      <AddNote getNotes={getNotes} />
      {loading && (
        <div className="center">
          <span className="loader"></span>
        </div>
      )}
      {!loading && (
        <div className="notes-container">
          <Notes errorMessage={error} notes={notes} getNotes={getNotes} />
        </div>
      )}
      {notes.length == 0 && (
        <div>
          <p style={{ textAlign: "center" }}>
            Your list is empty! Start to note your todo!
          </p>
        </div>
      )}
      {!intro && <Intro setIntro={setIntro} introduction={intro} />}
    </div>
  );
};

export default App;
