import React from 'react';
import Note from "./Note"
import Header from "./Header"
import SearchBar from './SearchBar';

class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            today: new Date(),
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        };
    }

    render() {
        const {notes, handleDelete, filterText, handleFilter, searchResults} = this.props;
        const {today, months} = this.state;

        

        if(filterText.length >= 1 && searchResults.length === 0){
            return (
                <div>
                    <Header>
                    <p>{`Today is the ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`}</p>
                    <SearchBar filterText = {filterText} handleFilter = {handleFilter}/>
                </Header>
                <p className = "none">No match!</p>
                </div>
                
            )
        }else if(notes.length < 1 && filterText.length < 1){
            return (
                <div>
                    <Header>
                    <p>{`Today is the ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`}</p>
                    <SearchBar filterText = {filterText} handleFilter = {handleFilter}/>
                </Header>
                <p className = "none">No Notes!</p>
                </div>
                
            ) 
        }


        return (
            <div>
                <Header>
                    <p>{`Today is the ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`}</p>
                    <SearchBar filterText = {filterText} handleFilter = {handleFilter}/>
                </Header>
                
                <div className="notes">
                    {filterText.length < 1 ? notes.map((note, index) => {
                        return (
                            <Note key={index} note={note} handleDelete={handleDelete}/>
                        )
                    }) : searchResults.map((note, index) => {
                        return (
                            <Note key={index} note={note} handleDelete={handleDelete}/>
                        )
                    })} 
                </div>
               

            </div>
        );
    }
}

export default Notes;