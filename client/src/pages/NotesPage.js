import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Container from "../components/elements/Container";
import Note from "../components/elements/Note";
import axios from "axios";

export default function NotesPage() {
  let name = "Jérémy";

  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const { data } = await axios.get("/notes");
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="">
      <Header />
      <Container>
        <div className="w-full flex justify-center items-center m-6">
          <h1 className="font-primary text-4xl">
            {name}, voilà vos {notes.length} <strong>Notes</strong>
            <span className="text-danger">:</span>
          </h1>
        </div>
        <div className="w-full flex justify-center m-6">
          <div className="grid grid-cols-2 gap-4">
            {notes.map((note) => (
              <Link to={`/note/${note._id}`} key={note._id}>
                <Note
                  title={note.title}
                  content={note.content}
                  category={note.category}
                  date="19/06/23"
                  id={note._id}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center m-6">
          <Link to="/createnote">
            <button className="bg-blue-500 hover:bg-blue-700 rounded-md px-4 py-2 uppercase shadow-md text-white text-xl font-medium animate">
              Créer une nouvelle Note
            </button>
          </Link>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
