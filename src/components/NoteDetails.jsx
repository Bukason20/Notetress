import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { FaLessThan } from "react-icons/fa";

class NoteDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNote: {}
        };
    }

    componentDidMount() {
        const { notes } = this.props;
        const { id } = this.props.match.params;

        notes.map((note) => {
            if (note.id == id) {
                this.setState({ currentNote: note });
            }
        });
    }

    render() {
        const { currentNote } = this.state;

        return (
            <div className="currentNote">
                <Link to = "/" className="back"><FaLessThan /></Link>
                <div className="currentNote-head">
                    <h2 className="currentNote-title">{currentNote.title}</h2>
                    <p className = {`current-category ${currentNote.category == "Personal" ? "personal" : ""} ${currentNote.category == "Work" ? "work" : ""} ${currentNote.category == "Education" ? "education" : ""} ${currentNote.category == "Others" ? "others" : ""}`}>{currentNote.category}</p>
                </div>
                <p className="currentNote-details">{currentNote.details}</p>
            </div>
        );
    }
}

export default withRouter(NoteDetails);