import React from 'react';
import Note from "./Note"
import Header from "./Header"

class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            today: new Date(),
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        };
    }

    render() {
        const {notes, handleDelete} = this.props;
        const {today, months} = this.state;


        return (
            <div>
                <Header>
                    <p>{`Today is the ${today.getDate()}th ${months[today.getMonth()]}`}</p>
                    {/* <input type="search" placeholder="Search" /> */}
                    <p>Notes({notes.length})</p>
                </Header>
                {/* <h1>My Notes</h1> */}

                {notes.length == 0 ? "You have no notes" : (
                    <div className="notes">
                        {notes.map((note, index) => (
                            <Note key={index} note={note} handleDelete={handleDelete} />
                        ))}
                    </div>
                )}

            </div>
        );
    }
}

export default Notes;