import React from "react";
import ReactDOM from "react-dom/client";

import one from "../src/assets/images/dog1.jpg";
import two from "../src/assets/images/dog2.jpg";
import three from "../src/assets/images/dog3.jpg";
import four from "../src/assets/images/dog2.jpg";
import five from "../src/assets/images/dog3.jpg";
import six from "../src/assets/images/dog1.jpg";
import seven from "../src/assets/images/dog2.jpg";
import eight from "../src/assets/images/dog3.jpg";
import "./style.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

let gallery = [
  { images: one, para: "Fluffy" },
  { images: two, para: "Fluffy" },
  { images: three, para: "Playful" },
  { images: four, para: " Fluffy" },
  { images: five, para: "Playful" },
  { images: six, para: "Fluffy" },
  { images: seven, para: "Playful" },
  { images: eight, para: "Fluffy" },
];

function Image({ images, para }) {
  return (
    <div className="image-section">
      <img src={images} alt="Gallery Image" className="img" />
      <p className="para">{para}</p>
    </div>
  );
}

root.render(
  <div>
    <h1 className="title">Image Gallery</h1>
    <div className="image-item">
      {gallery.map((item, index) => (
        <Image key={index} images={item.images} para={item.para} />
      ))}
    </div>
  </div>
);
