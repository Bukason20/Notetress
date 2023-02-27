import Header from "./Header"
import React, { useState } from "react"
import {FaGreaterThan} from 'react-icons/fa'
import { useHistory } from "react-router"

function CreateNote({handleAdd, sideBarActive}) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Reminders");
    const [details, setDetails] = useState("")
    const [titleError, setTitleError] = useState("")
    const [detailsError, setDetailsError] = useState("")
    const [isDisabled, setIsDisabled] = useState(true)
    const [titleCount, setTitleCount] = useState(0)
    const [countColor, setCountColor] = useState(false)

    const history = useHistory()
    

    const checkTitle = (e) => {
        if(e.target.value.trim().length == 0 && title.length > 0){
            setTitleError("Please Put in a Valid Title")
            setIsDisabled(true)
        }else if(title.length == 0){
            setTitleError(true)
            setIsDisabled(true)
        }else if(title.length > 0){
            setIsDisabled(false)
        }
    }


    const checkDetails = () => {
        if(details.trim().length == 0){
            setDetailsError("Please put in a valid Description")
        }else{
            setDetailsError("")
        }
    }

    const submitNote = (e) => {
        e.preventDefault();
        const newNote = {
            title : title,
            category: category,
            details: details,
        }
        handleAdd(newNote)

        setTitle("")
        setDetails("")
        history.push("/")
        sideBarActive()
    }
    return (
        <div className = "create">
            <Header>
                <h3>Create Note</h3>
            </Header>
            <form onSubmit = {submitNote}>
                <div className="input-title">
                    <p>Title</p>
                    <input type="title" 
                        maxLength = "30" 
                        onKeyUp = {checkTitle} 
                        onChange = {(e) => (
                            setTitle(e.target.value),
                            setTitleCount(e.target.value.length),
                            e.target.value.length > 24 ? setCountColor(true) : setCountColor(false)
                        )} 
                        value = {title} 
                        required
                    />
                    <div className="title-count-container">
                        <p className = "title-error">{titleError}</p>
                        <div className="title-count">
                            <p className = {`title-count ${countColor && "about"}`}>{`${titleCount}`}</p>
                            <p>/30</p>
                        </div>
                        
                    </div>
                </div>

                    
                    <div className="input-details">
                        <p>Description</p>
                        <textarea
                            id="" cols="30" rows="10" 
                            onKeyUp = {checkDetails} 
                            placeholder = "Type Something..." 
                            onChange = {(e) => setDetails(e.target.value)} value = {details} 
                            required>
                            
                        </textarea>
                        <div className="category-select" onChange = {(e) => setCategory(e.target.value)} value = {category}>
                            <div className="input-btn">
                                <input type="radio" name="category" value = "Reminder" defaultChecked/>
                                <p>Reminder</p> 
                            </div>
                            <div className="input-btn">
                                <input type="radio" name="category" value = "Health"/> 
                                <p>Health</p> 
                            </div>
                            <div className="input-btn">
                                <input type="radio" name="category" value = "Business"/>
                                <p>Business</p> 
                            </div>
                            <div className="input-btn">
                            <input type="radio" name="category" value = "Education"/>
                                <p>Education</p> 
                            </div>
                        </div>
                    </div>

                    <button type = "submit" disabled = {isDisabled} className = {`input-submit ${isDisabled ? "disabled" : ""}`}>
                        <p>Submit</p>
                        <FaGreaterThan color = "white"/> 
                    </button>
            </form>
        

                
            </div>

    
    )
}

export default CreateNote
