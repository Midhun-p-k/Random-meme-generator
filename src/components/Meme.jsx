import React, { useState } from "react";

export const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    console.log(randomNumber);
    const url = allMemes[randomNumber].url;
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
