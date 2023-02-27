import React, { Component } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

class Note extends Component {
  render() {
    const { note, handleDelete} = this.props;
    return (
        <div className="note-container">
            <Link to={`/details/${note.id}`} className="note-link">
                <div className="note-heading">
                    <div className="first-part">
                        <div className={`note-avatar ${note.category == "Personal" ? "personal" : ""} ${note.category == "Work" ? "work" : ""} ${note.category == "Education" ? "education" : ""} ${note.category == "Others" ? "others" : ""}`}>{note.category.charAt(0)}</div>
                        <div className="note-contents">
                            <p className = {`note-title`}>{note.title}</p>
                            <p className = {`note-category ${note.category == "Personal" ? "personal" : ""} ${note.category == "Work" ? "work" : ""} ${note.category == "Education" ? "education" : ""} ${note.category == "Others" ? "others" : ""}`}>{note.category}</p>
                        </div>
                    </div>
                </div>

                <div className="note-details">
                    <p>
                        {note.details.length > 65 ? note.details.slice(0, 250) + "..." : note.details}
                    </p>
                </div>
            </Link>
            <div className="note-btns">
                <button onClick={() => handleDelete(note.id)} className="delete">
                    <FaTrash color="red" />
                </button>
            </div>
            

        </div>
    );
  }
}

export default Note;
