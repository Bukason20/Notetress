import React, { Component } from "react";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Notes from "./components/Notes";
import CreateNote from "./components/CreateNote";
import {v4 as uuidv4} from "uuid"
import NoteDetails from "./components/NoteDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: localStorage.getItem("notes") === null ? [] :  JSON.parse(localStorage.getItem("notes")),
      notesActive: false,
      createActive: false,
      filterText: "",
      searchResults: []
    };

    this.sideBarActive = this.sideBarActive.bind(this);
    this.activeNote = this.activeNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.filterEvent = this.filterEvent.bind(this)
  }

  addNote = (newNote) => {
    newNote.id = uuidv4();
    const notes = [...this.state.notes];
    notes.unshift(newNote);
    this.setState({ notes });
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  deleteNote = (id) => {
    const notes = this.state.notes.filter(note => (note.id !== id));
    this.setState({ notes });
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  sideBarActive() {
    if (window.location.pathname === "/") {
      this.setState({createActive: false, notesActive: true});
    } else if (window.location.pathname === "/create") {
      this.setState({notesActive: false, createActive: true});
    }
  }

  activeNote = (e) => {
    const notes = [...this.state.notes];
    if (e.target.innerHTML === `My Notes(${notes.length})`) {
      this.setState({createActive: false, notesActive: true});
    } else if (e.target.innerHTML === "Create Note") {
      this.setState({notesActive: false, createActive: true});
    }
  }

  filterEvent = (searchTerm) => {
    this.setState({filterText : searchTerm})
    const notes = [...this.state.notes];
    if(searchTerm !== ""){
      const newNote = notes.filter((note) => {
        return Object.values(note).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
      })

      this.setState({searchResults : newNote})
    }else {
      this.setState({searchResults : notes})
    }
  }

  componentDidMount() {
    this.sideBarActive();
  }

  render() {
    return (
      <Router>
        <div className="app">
          <NavBar
            sideBarActive={this.sideBarActive}
            notesActive={this.state.notesActive}
            createActive={this.state.createActive}
            activeNote={this.activeNote}
            notes = {this.state.notes}
          />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Notes notes={this.state.notes} handleDelete={this.deleteNote} filterText = {this.state.filterText} handleFilter = {this.filterEvent} searchResults = {this.state.searchResults}/>
              </Route>
              <Route path="/create">
                <CreateNote handleAdd={this.addNote} sideBarActive={this.sideBarActive} />
              </Route>
              <Route path="/details/:id">
                <NoteDetails notes={this.state.notes} />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
