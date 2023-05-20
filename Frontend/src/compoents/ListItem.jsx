import React from "react";
import { Link } from "react-router-dom";


let getTitle = (note) =>{
  let title = note.body.split('\n')[0]
  if(title.length > 45){
    return title.slice(0, 45)
  }
  return title
}

let getTime = (node) => {
  return new Date(node.updated).toLocaleDateString()
}

let getContent = (node) => {
  let title = getTitle(node)
  let content = node.body.replaceAll('\n', ' ')
  content = content.replaceAll(title, '')

  if(content.length > 45){
    return content.slice(0, 45) + '...'
  }
  else{
    return content
  }
}

export default function ListItem({ note }) {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
        {/* <h3>{note.body}</h3> */}
        <p><span>{getTime(note)}</span>{getContent(note)}</p>
        <h3>{getTitle(note)}</h3>
      </div>
    </Link>
  );
}
