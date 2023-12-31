import React, { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Container from "../components/elements/Container";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import { updateUser } from "../actions/userActions";

export default function ProfilePage() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const fixFirstname = `${userInfo.firstname}`;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, success } = userUpdate;

  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (!userInfo) {
      window.location.href = "/";
    } else {
      setFirstname(userInfo.firstname);
      setLastname(userInfo.lastname);
      setEmail(userInfo.email);
    }
  }, [userInfo]);

  const resetHandler = () => {
    setFirstname(`${userInfo.firstname}`);
    setLastname(`${userInfo.lastname}`);
    setEmail(`${userInfo.email}`);
    setPassword("");
    setConfirmPassword("");
  };

  const logoutHandler = () => {
    dispatch(logout());
    window.location.href = "/";
  };

  const updateHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword)
      dispatch(updateUser({ firstname, lastname, email, password }));
    window.location.href = "/profile";
  };

  return (
    <div className="overflow-auto">
      <Header />
      <Container>
        <div className="w-full flex justify-center m-6">
          <h1 className="font-primary text-4xl">
            {fixFirstname}, voilà tes <strong>informations</strong>
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
                autoComplete="off"
                className="focus:border block w-full border border-gray-400 rounded-md p-4 uppercase"
                value={lastname}
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
                autoComplete="off"
                className="focus:border block w-full border border-gray-400 rounded-md p-4"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
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
                autoComplete="off"
                className="focus:border block w-full border border-gray-400 rounded-md p-4"
                value={email}
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
                id="password"
                autoComplete="off"
                className="focus:border block w-full border border-gray-400 rounded-md p-4 uppercase"
                placeholder="Mot de passe"
                value={password}
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
                autoComplete="off"
                className="focus:border block w-full border border-gray-400 rounded-md p-4 uppercase"
                placeholder="Confirmation"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="mx-auto">
              <input
                type="button"
                value="Modifier"
                onClick={updateHandler}
                className="bg-blue-500 hover:bg-blue-700 text-white w-36 h-12 font-primary tracking-widest uppercase cursor-pointer rounded-md animate"
              />
            </div>
            <div className="mx-auto">
              <input
                type="button"
                value="Réinitialiser"
                onClick={resetHandler}
                className="bg-danger hover:bg-danger-hover text-white w-36 h-12 font-primary tracking-widest uppercase cursor-pointer rounded-md animate"
              />
            </div>
          </form>
        </div>
        <div className="w-full flex justify-center">
          <div
            onClick={logoutHandler}
            className="mx-auto flex justify-center items-center bg-danger hover:bg-danger-hover text-white w-48 h-12 font-primary tracking-widest uppercase cursor-pointer rounded-md animate"
          >
            Déconnection
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
