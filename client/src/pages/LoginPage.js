import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Container from "../components/elements/Container";

export default function LoginPage() {
  return (
    <div className="overflow-auto">
      <Header />
      <Container>
        <div className="w-full flex justify-center m-6">
          <h1 className="font-primary text-4xl">
            Bonjour, connecte-toi
            <span className="text-danger">:</span>
          </h1>
        </div>
        <div className="w-full flex justify-center m-6">
          <form className="grid grid-cols-2 grid-rows-3 gap-x-6 gap-y-4">
            <div className="col-span-2">
              <label htmlFor="email" className="text-lg font-bold">
                E-Mail
              </label>
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                className="focus:border block w-full border border-gray-400 rounded-md p-4"
                placeholder="E-Mail"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="password" className="text-lg font-bold">
                Mot de passe
              </label>
              <input
                type="password"
                name="password"
                id="email"
                autoComplete="off"
                className="focus:border block w-full border border-gray-400 rounded-md p-4 uppercase"
                placeholder="Mot de passe"
              />
            </div>
            <div className="mx-auto">
              <input
                type="button"
                value="Se connecter"
                className="bg-blue-500 hover:bg-blue-700 text-white w-36 h-12 font-primary tracking-widest uppercase cursor-pointer rounded-md animate"
              />
            </div>
            <div className="mx-auto">
              <Link to="/signup">
                <input
                  type="button"
                  value="S'inscrire"
                  className="bg-danger hover:bg-danger-hover text-white w-36 h-12 font-primary tracking-widest uppercase cursor-pointer rounded-md animate"
                />
              </Link>
            </div>
          </form>
        </div>
        <div className="w-full flex justify-center">
          <p className="m-1">Tu es nouveau ici ?</p>
          <Link to="/login" className="m-1 text-blue-500">
            <a href="/login">Inscris-toi</a>
          </Link>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
