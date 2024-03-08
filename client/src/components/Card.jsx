import React from "react";

export default function Card({ key, name, image, char, ingredients }) {
  return (
    <div className="flex flex-col justify-center items-center border rounded-lg max-h-auto border-grey p-1 shadow-black">
      <div className="text-center w-full rounded-lg p-3 bg-slate-400">{name}</div>
      <div>
        <img className="py-1"
          src={
            image
              ? image
              : "http://2.bp.blogspot.com/_LYnjZQ_c4yo/TQog-hpyLEI/AAAAAAAAAD8/Wp8Y0_YovOA/s1600/IMG_0194.JPG"
          }
          alt="potion"
        />
      </div>
      <div className="flex flex-col bg-slate-300 w-full rounded-lg p-2">
        <div>
          <b>Characteristics : </b>
          <span className="font-lg">{char ? char : name}</span>
        </div>
        <div>
          <b>Ingredients : </b>
          <span className="font-lg m-1">{ingredients}</span>
        </div>
      </div>
    </div>
  );
}
