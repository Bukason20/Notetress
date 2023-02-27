import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

class Note extends Component {
  render() {
    const { note, handleDelete } = this.props;
    return (
        <div className="note-container">
            <Link to={`/details/${note.id}`} className="note-link">
                <div className="note-heading">
                    <div className="first-part">
                        <div className="note-avatar">{note.category.charAt(0)}</div>
                        <div className="note-contents">
                            <p>{note.title}</p>
                            <p>{note.category}</p>
                        </div>
                    </div>
                </div>

                <div className="note-details">
                    <p>
                        {note.details.length > 65 ? note.details.slice(0, 250) + "..." : note.details}
                    </p>
                </div>
            </Link>
            <button onClick={() => handleDelete(note.id)} className="delete">
                <FaTrash color="red" />
            </button>
        </div>
    );
  }
}

export default Note;
