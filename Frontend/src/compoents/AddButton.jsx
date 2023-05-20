import React from 'react'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';

export default function AddButton() {
  return (
    <Link to="/note/new" className='floating-button'>
      <AddIcon />
      {/* <h1>ADD</h1> */}
    </Link>
  )
}
