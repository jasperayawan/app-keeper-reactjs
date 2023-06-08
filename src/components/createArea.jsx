import { useState } from "react";
import {IoMdAdd} from 'react-icons/io'

export default function CreateArea(props){
    const [note, setNote] = useState({
        title: "",
        content: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });

    }

    const submitNote = (e) => {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        e.preventDefault();

    }

    return(
        <div className="max-w-5xl mx-auto py-4 px-4 rounded-md shadow-lg my-4 bg-white">
            <form className="flex flex-col gap-2">
                <input 
                    type="text" 
                    value={note.title} 
                    name="title" 
                    onChange={handleChange}
                    className="outline-none" 
                    placeholder="Title" 
                    id="" />
                <textarea 
                    name="content" 
                    value={note.content} 
                    onChange={handleChange}
                    placeholder="Take a note..."
                    className="outline-none" 
                    cols="20" >
                </textarea>
                <div className="text-center">
                    <button onClick={submitNote} className="bg-orange-500 p-2 rounded-full">{<IoMdAdd/>}</button>
                </div>
            </form>
        </div>
    )
}