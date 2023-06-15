import React from "react";

export const Footer = () => {
  return (
    <div className="bg-white z-50 fixed bottom-1 w-full shadow">
      <div className="bg-white max-w-5xl mx-auto font-primary flex items-center justify-between">
        <div className="text-lg">
          <span>
            Ur<strong>Notes</strong>
            <span className="text-danger">. </span>
          </span>
          All rights reserved
        </div>
        <div className="text-base">
          Developped by{" "}
          <span className="text-lg">
            Jérémy <strong>LUCAS</strong>
          </span>
          <span className="text-danger text-lg">.</span>
        </div>
      </div>
    </div>
  );
};
