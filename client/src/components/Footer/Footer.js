import React from "react";

export const Footer = () => {
  return (
    <div className="bg-white z-50 fixed bottom-0 w-full shadow">
      <div className="bg-white max-w-5xl mx-auto font-primary flex items-center justify-between">
        <div>
          <span>
            Ur<strong>Notes</strong>
            <span className="text-danger">.</span>
          </span>{" "}
          All rights reserved
        </div>
        <div>Contact Us</div>
      </div>
    </div>
  );
};
