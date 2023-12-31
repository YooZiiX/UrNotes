import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Container from "../components/elements/Container";
import Note from "../components/elements/Note";
import { listNotes } from "../actions/notesActions";

export default function NotesPage() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { notes } = noteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;

  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      window.location.href = "/";
    }
  }, [dispatch, successCreate, successUpdate, userInfo]);

  return (
    <div className="">
      <Header />
      <Container>
        <div className="flex justify-center m-6">
          <form>
            <input
              type="text"
              name="title"
              id="title"
              autoComplete="off"
              className="focus:border block w-96 border border-gray-400 rounded-md p-4"
              placeholder="Recherche"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
        <div className="w-full flex justify-center m-6">
          <Link to="/createnote">
            <button className="bg-blue-500 hover:bg-blue-700 rounded-md px-4 py-2 uppercase shadow-md text-white text-xl font-medium animate">
              Créer une nouvelle Note
            </button>
          </Link>
        </div>
        <div className="w-full flex justify-center items-center m-6">
          <h1 className="font-primary text-4xl">
            {`${userInfo.firstname}`}, voilà vos <strong>Notes</strong>
            <span className="text-danger">:</span>
          </h1>
        </div>
        <div className="w-full flex justify-center m-6">
          <div className="grid grid-cols-2 gap-4">
            {notes
              ?.reverse()
              .filter((filteredNotes) =>
                filteredNotes.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((note) => (
                <Link to={`/note/${note._id}`} key={note._id}>
                  <Note
                    title={note.title}
                    content={note.content}
                    category={note.category}
                    date={note.createdAt.substring(0, 10)}
                    id={note._id}
                  />
                </Link>
              ))}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
