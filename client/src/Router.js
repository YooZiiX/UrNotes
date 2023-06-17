import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NotesPage from "./pages/NotesPage";
import ProfilePage from "./pages/ProfilePage";
import CreateNote from "./pages/CreateNotePage";
import Note from "./components/elements/Note";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/createnote" element={<CreateNote />} />
        <Route path="/signup" element="" />
        <Route path="/login" element="" />
        <Route path="/dev" element={<Note />} />
      </Routes>
    </BrowserRouter>
  );
}
