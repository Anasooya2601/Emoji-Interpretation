import React, { useState } from "react";
import "./styles.css";

/**
 * concept notes: styling in react
 */

/**
 * concept of hashmap (object as hashmap)
 * O(1) and why we are doing this.
 */
const emojiDictionary = {
  "🎄": "Christmas Tree",
  "🎓": "Graduation",
  "🥱": "sleepy",
  "😊": "Smiling",
  "🎃": "Halloween",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "🕉️": "Holi",
  "⛄": "Winter",
  "🌎": "World Emoji Day",
  "🎂": "Birthday",
  "🪔": "Diwali",
  "🕎": "Hanukkah",
  "💕": "Hearts",
  "🤱": "Mother’s Day",
  "🦃": "Thanksgiving"
  /** add some more to show how the app now expands when there's new data */
};

/**
 * Bonus feature
 * converting an object to array of keys
 */
const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
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
    /** concept 3 is onchange */
    <div className="App">
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
      <h2> {emoji} </h2> {/** Concept 1: JSX */}
      <h3> {meaning} </h3> {/** how much part is re-rendered. */}
      {
        /** Bonus feature; if time permmits */
        /**
         * concepts to cover: mapping a list
         * click handler on list item
         */
        emojis.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontfamily: "'Roboto', sans-serif",
              fontSize: "2rem",
              padding: "0.5rem",
              cursor: "pointer"
            }}
          >
            {" "}
            {emoji}{" "}
          </span>
        ))
      }
    </div>
  );
}
