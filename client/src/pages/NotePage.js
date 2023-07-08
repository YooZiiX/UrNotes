import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/elements/Container";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateNote } from "../actions/notesActions";

export default function NotePage() {
  const { id } = useParams();

  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [category, setCategory] = useState();
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { loading, error } = noteUpdate;

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/notes/${id}`);

      setTitle(data.title);
      setContent(data.content);
      setCategory(data.category);
      setDate(data.updatedAt);
    };

    fetching();
  }, [id, date]);

  const updateHandler = (e) => {
    e.preventDefault();

    if (!title || !content || !category) return;
    dispatch(updateNote(id, title, content, category));

    resetHandler();
    window.location.href = "/notes";
  };

  const resetHandler = () => {
    setTitle("");
    setContent("");
    setCategory("");
  };

  const deleteHandler = () => {
    if (window.confirm("Es-tu sûre ?")) {
    }
  };

  return (
    <>
      <Header />
      <Container>
        <div className="w-full flex justify-center items-center m-6">
          <h1 className="font-primary text-4xl font-semibold">
            Créer une Note <span className="text-danger">:</span>
          </h1>
        </div>
        <div className="w-full flex justify-center m-6 my-5">
          <form className="grid grid-rows-4 gap-y-6 mt-16">
            <div className="">
              <label htmlFor="title" className="text-lg font-bold">
                Titre
              </label>
              <input
                type="text"
                name="title"
                id="title"
                autoComplete="off"
                className="focus:border block w-full border border-gray-400 rounded-md p-4"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="">
              <label htmlFor="content" className="text-lg font-bold">
                Contenu
              </label>
              <textarea
                type="text"
                name="content"
                id="content"
                autoComplete="off"
                className="focus:border block w-full border border-gray-400 rounded-md p-4"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="text-lg font-bold">
              <label htmlFor="category" className="">
                Catégorie
              </label>
              <select
                name="category"
                id="category"
                value={category}
                className="focus:border block w-full border border-gray-400 rounded-md p-4"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="divertissement">Divertissement</option>
                <option value="professionnel">Professionel</option>
                <option value="scientifique">Scientifique</option>
                <option value="technologique">Technologique</option>
              </select>
            </div>
            <div className="flex justify-center m-2">
              <input
                type="button"
                value="Modifier"
                className="bg-blue-500 hover:bg-blue-700 text-white w-36 m-2 font-primary tracking-widest uppercase cursor-pointer rounded-md animate"
                onClick={updateHandler}
              />
              <input
                type="button"
                value="Supprimer"
                onClick={`deleteHandler`}
                className="bg-danger hover:bg-danger-hover text-white w-36 m-2 font-primary tracking-widest uppercase cursor-pointer rounded-md animate"
              />
            </div>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
}
