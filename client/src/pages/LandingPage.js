import React from "react";
import { Header } from "../components/Header/Header";
import Content from "../components/Content";
import { Footer } from "../components/Footer/Footer";

export default function LandingPage() {
  return (
    <div className="w-full">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
