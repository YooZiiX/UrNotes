import React from "react";
import Container from "../components/Elements/Container";
import { Header } from "../components/Header/Header";
import Content from "../components/Content/Content";
import { Footer } from "../components/Footer/Footer";

export default function LandingPage() {
  return (
    <div className="w-full bg-secondary">
      <Container>
        <Header />
        <Content />
        <Footer />
      </Container>
    </div>
  );
}
