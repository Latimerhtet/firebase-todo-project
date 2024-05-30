import React from "react";

const Navbar = ({ notes }) => {
  return (
    <section className="navbar">
      <h2 className="navHeading">My--Note!</h2>

      <div className="button">Your notes ({notes.length})</div>
    </section>
  );
};

export default Navbar;
