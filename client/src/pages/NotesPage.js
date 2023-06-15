import React from "react";
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
            <div className="">Note 1</div>
            <div className="">Note 2</div>
            <div className="">Note 3</div>
            <div className="">Note 4</div>
            <div className="">Note 5</div>
            <div className="">Note 6</div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
