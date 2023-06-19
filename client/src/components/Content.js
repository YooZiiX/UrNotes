import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/elements/Container";

export default function Content({ isConnected }) {
  let name = "Jérémy";
  return (
    <Container>
      <div className="w-full flex justify-center items-center m-6">
        <h1 className="font-primary text-4xl font-semibold">
          Bienvenue à {name}, sur <span className="font-normal">Ur</span>
          <strong>Notes</strong>
          <span className="text-danger">.</span>
        </h1>
      </div>
      <div className="w-full flex justify-center m-6">
        <Link to={isConnected ? "/createnote" : "/login"}>
          <button className="bg-blue-500 hover:bg-blue-700 rounded-md px-4 py-2 uppercase shadow-md text-white text-xl font-medium animate">
            Créer une nouvelle Note
          </button>
        </Link>
      </div>
    </Container>
  );
}
