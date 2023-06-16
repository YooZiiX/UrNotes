import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Container from "../components/elements/Container";

export default function NotesPage() {
  let name = "Jérémy";
  let number = 6;
  return (
    <>
      <Header />
      <Container>
        <div className="w-full flex justify-center items-center m-6">
          <h1 className="font-primary text-4xl">
            {name}, voilà vos {number} <strong>Notes</strong>
            <span className="text-danger">:</span>
          </h1>
        </div>
        <div className="w-full flex justify-center m-6 my-10">
          <div className="grid grid-cols-2 gap-4">
            <Link to="#">
              <div className="">Note 1</div>
            </Link>
            <Link to="#">
              <div className="">Note 2</div>
            </Link>
            <Link to="#">
              <div className="">Note 3</div>
            </Link>
            <Link to="#">
              <div className="">Note 4</div>
            </Link>
            <Link to="#">
              <div className="">Note 5</div>
            </Link>
            <Link to="#">
              <div className="">Note 6</div>
            </Link>
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
    </>
  );
}
