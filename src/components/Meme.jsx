import React, { useState } from "react";
import data from "../memeData.js";

export const Meme = () => {
  // const [memeImage,setMemeImage] = useState("")
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(data);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    console.log(randomNumber);
    const url = memesArray[randomNumber].url;
    console.log(url);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          value={meme.topText}
          name="topText"
          onChange={handleChange}
          className="form--input"
          placeholder="Top text"
        />
        <input
          type="text"
          value={meme.bottomText}
          name="bottomText"
          onChange={handleChange}
          className="form--input"
          placeholder="Bottom text"
        />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image
        </button>
      </div>

      <div className="meme">
        <img className="meme--image" src={meme.randomImage} alt="" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};


