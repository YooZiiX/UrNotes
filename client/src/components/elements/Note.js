import React from "react";

export default function Note({ title, content, category, date, id }) {
  return (
    <div className="flex justify-center">
      <div className=" border-2 w-96 p-2 rounded-md">
        <div className="text-xl">
          <div className="flex justify-center text-3xl font-semibold">
            {title}
          </div>
          <div className="">
            <div className="font-medium">Contenu :</div>
            <div className="flex justify-center px-4 text-lg">{content}</div>
          </div>
          <div className="">
            <span className="font-medium">Catégorie :</span>{" "}
            <span className="text-lg">{category}</span>
          </div>
          <div className="flex justify-between text-sm italic text-gray-500 py-2">
            <div>Créé le : {date}</div>
            <div>id : {id}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
