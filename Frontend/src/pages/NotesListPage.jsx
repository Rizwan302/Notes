import React, { useEffect, useState } from 'react'
import ListItem from '../compoents/ListItem'

export default function NotesListPage() {
    let [notes, setNotes] = useState([])

    useEffect(()=>{
        getNotes()
    }, [])

    let getNotes = async () =>{
        let response = await fetch("http://127.0.0.1:8000/api/notes/")
        let data = await response.json()
        console.log(data)
        setNotes(data)
    }
  return (
    <div>
      <div className="notes_list">
        {notes.map((note, index)=>(
            // <h3 key={index}>{note.body}</h3>
            <ListItem key={index} note={note} />
        ))}
      </div>
    </div>
  )
}
