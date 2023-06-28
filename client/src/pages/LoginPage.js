import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Container from "../components/elements/Container";

export default function LoginPage({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");
  //   if (userInfo) {
  //     history.push("/");
  //   }
  // }, [history]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);

      const { data } = await axios.post(
        "/users/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

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
          <form
            className="grid grid-cols-2 grid-rows-3 gap-x-6 gap-y-4"
            onSubmit={submitHandler}
          >
            <div className="col-span-2">
              <label htmlFor="email" className="text-lg font-bold">
                E-Mail
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                autoComplete="off"
                className="focus:border block w-full border border-gray-400 rounded-md p-4"
                placeholder="john.doe@mail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="password" className="text-lg font-bold">
                Mot de passe
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                autoComplete="off"
                className="focus:border block w-full border border-gray-400 rounded-md p-4"
                placeholder="mypassword123"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mx-auto col-span-2">
              <input
                type="button"
                value="Se connecter"
                onClick={submitHandler}
                className="bg-blue-500 hover:bg-blue-700 text-white w-36 h-12 font-primary tracking-widest uppercase cursor-pointer rounded-md animate"
              />
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
