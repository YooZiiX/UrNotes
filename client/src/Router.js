import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NotesPage from "./pages/NotesPage";
import ProfilePage from "./pages/ProfilePage";
import CreateNote from "./pages/CreateNotePage";
import LoginPage from "./pages/LoginPage";
import NotePage from "./pages/NotePage";
import SignupPage from "./pages/SignupPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/note/:id" element={<NotePage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/createnote" element={<CreateNote />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dev" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
