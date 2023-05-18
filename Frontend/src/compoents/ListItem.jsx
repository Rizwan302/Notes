import React from 'react'

export default function ListItem({ note }) {
  return (
    <div>
      <h3>{note.body}</h3>
    </div>
  )
}
