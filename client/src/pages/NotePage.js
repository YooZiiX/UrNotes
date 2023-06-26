import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/elements/Container";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import axios from "axios";

export default function NotePage() {
  const id = useParams().id;

  const [note, setNote] = useState([]);

  const fetchNote = async () => {
    const { data } = await axios.get(`notes/${id}`);
    setNote(data);
  };

  useEffect(() => {
    fetchNote();
  }, []);

  const deleteHandler = (id) => {
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
                value={note.title}
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
                value={note.content}
              />
            </div>
            <div className="text-lg font-bold">
              <label htmlFor="category" className="">
                Catégorie
              </label>
              <select
                name="category"
                id="category"
                value={note.category}
                className="focus:border block w-full border border-gray-400 rounded-md p-4"
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
              />
              <input
                type="button"
                value="Supprimer"
                onClick={`deleteHandler(${id})`}
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
