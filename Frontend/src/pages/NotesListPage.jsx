import React, { useEffect, useState } from 'react'
import ListItem from '../compoents/ListItem'
import AddButton from '../compoents/AddButton'


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
    <div className='notes'>
      <div className="notes-header">
        <h2 className='notes-title'>&#9782; Notes</h2>
        <div className="notes-count">{notes.length}</div>
      </div>
      <div className="notes_list">
        {notes.map((note, index)=>(
            // <h3 key={index}>{note.body}</h3>
            <ListItem key={index} note={note} />
        ))}
      </div>
      <AddButton/>
    </div>
  )
}
