import { useState } from "react";
import "./App.css";
import Header from "./compoents/Header";
import NotesListPage from "./pages/NotesListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotePage from "./pages/NotePage";

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<NotesListPage />} />
          <Route path="/node/:id" element={<NotePage/>} />
        </Routes>
      </BrowserRouter>

      
    </>
  );
}

export default App;
