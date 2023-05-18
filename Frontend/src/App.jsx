import { useState } from 'react'
import './App.css'
import Header from './compoents/Header'
import NotesListPage from './pages/NotesListPage'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
    {/* <Route path="/" element={<Header />} /> */}
    <Route path="/" element={<NotesListPage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
