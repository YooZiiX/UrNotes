import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Container from "../components/elements/Container";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstame] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      window.location.href = "/";
    }
  }, [userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(firstname, lastname, email, password, confirmPassword);
    if (password !== confirmPassword) {
      setMessage("Password do not match");
    } else {
      dispatch(register(firstname, lastname, email, password));
    }
  };

  return (
    <div className="overflow-auto">
      <Header />
      <Container>
        <div className="w-full flex justify-center m-6">
          <h1 className="font-primary text-4xl">
            Bonjour, inscris-toi
            <span className="text-danger">:</span>
          </h1>
        </div>
        <div className="w-full flex justify-center m-6">
          <form className="grid grid-cols-2 grid-rows-3 gap-x-6 gap-y-4">
            <div className="">
              <label htmlFor="lastname" className="text-lg font-bold">
                Nom
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={lastname}
                autoComplete="off"
                className="focus:border block w-full border border-gray-400 rounded-md p-4 uppercase"
                placeholder="Doe"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="">
              <label htmlFor="firstname" className="text-lg font-bold">
                Prénom
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={firstname}
                autoComplete="off"
                className="focus:border block w-full border border-gray-400 rounded-md p-4"
                placeholder="John"
                onChange={(e) => setFirstame(e.target.value)}
              />
            </div>
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
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="">
              <label htmlFor="password" className="text-lg font-bold">
                Mot de passe
              </label>
              <input
                type="password"
                name="password"
                id="email"
                value={password}
                autoComplete="off"
                className="focus:border block w-full border border-gray-400 rounded-md p-4 uppercase"
                placeholder="Mot de passe"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="">
              <label htmlFor="confirmation" className="text-lg font-bold">
                Confirmation
              </label>
              <input
                type="password"
                name="confirmation"
                id="confirmation"
                value={confirmPassword}
                autoComplete="off"
                className="focus:border block w-full border border-gray-400 rounded-md p-4 uppercase"
                placeholder="Confirmation"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="mx-auto col-span-2">
              <input
                type="button"
                value="Valider"
                onClick={submitHandler}
                className="bg-blue-500 hover:bg-blue-700 text-white w-36 h-12 font-primary tracking-widest uppercase cursor-pointer rounded-md animate"
              />
            </div>
          </form>
        </div>
        <div className="w-full flex justify-center">
          <p className="m-1">Tu as déjà un compte ?</p>
          <Link to="/login" className="m-1 text-blue-500">
            <a href="/login">Connectes-toi</a>
          </Link>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
