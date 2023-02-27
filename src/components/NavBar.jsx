import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    const { createActive, notesActive, activeNote } = this.props;
    return (
      <div className="navbar">
        <h2>Notetress</h2>
        <Link to ="/" onClick={activeNote} className={notesActive ? "active" : ""}>My Notes</Link>
        <Link to= "/create" onClick={activeNote} className={createActive ? "active" : ""}>Create Note</Link>
      </div>
    );
  }
}

export default NavBar;
