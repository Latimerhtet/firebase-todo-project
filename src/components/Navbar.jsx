import React from "react";

const Navbar = ({ getNotes }) => {
  return (
    <section className="navbar">
      <h2 className="navHeading">My--Note!</h2>
      <button onClick={getNotes} className="button">
        Refresh Notes
      </button>
    </section>
  );
};

export default Navbar;
