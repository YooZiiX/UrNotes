import React from "react";
import { Header } from "../components/Header/Header";
import Content from "../components/Content";
import { Footer } from "../components/Footer/Footer";

export default function LandingPage() {
  return (
    <>
      <Header isConnected={false} />
      <Content isConnected={false} />
      <Footer />
    </>
  );
}
