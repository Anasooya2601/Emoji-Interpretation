import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🎄": "Christmas Tree",
  "🚣": "Person Rowing Boat",
  "🗾": "Map of Japan",
  "🏔️": "Snow-Capped Mountain",
  "⛰️": "Mountain",
  "🌋": "Volcano",
  "🗻": "Mount Fuji",
  "🏕️": "Camping",
  "🏖️": "Beach with Umbrella",
  "🏜️": "Desert",
  "🏝️": "Desert Island",
  "🏞️": "National Park",
  "🏟️": "Stadium",
  "🏛️": "Classical Building",
  "🏗️": "Building Construction",
  "🕋": "Kaaba",
  "⛲": "Fountain",
  "⛺": "Tent",
  "🌁": "Foggy",
  "🌃": "Night with Stars",
  "🏙️": "Cityscape",
  "🌄": "Sunrise Over Mountains",
  "🌅": "Sunrise",
  "🌆": "Cityscape at Dusk",
  "🌇": "Sunset",
  "🌉": "Bridge at Night",
  "🎠": "Carousel Horse",
  "🎡": " Ferris",
  "🎢": "Roller Coaster",
  "🚂": "Locomotive"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("couldn't find ");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h2> 🌇 Travel & Places</h2>
      <h1>Emoji Interpreter</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2> {}
      <h3> {meaning} </h3> {}
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{
            // fontfamily: "'Roboto', sans-serif",
            fontfamily: "'Langar', cursive",
            fontSize: "2rem",
            padding: "0.5rem",
            cursor: "pointer"
          }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
