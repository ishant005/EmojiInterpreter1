import React, { useState } from "react";
import "./styles.css";

const emojis = {
  "😊": "Smiling face",
  "😏": "Smirking face",
  "😚": "Kissing face with closed eyes",
  "😝": "Squinting face with tongue",
  "😖": "Confounded face",
  "😨": "Fearful face",
  "🥺": "Pleading face",
  "👋": "Wave",
  "🤔": "Curious",
  "😎": "Smart",
  "🙂": "Sarcastic"
};
var emojisWeknow = Object.keys(emojis);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojis[userInput];
    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojis[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside out</h1>
      <input onChange={emojiInputHandler} />
      <h2> {meaning}</h2>
      <h3> emojis we Know</h3>
      {emojisWeknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
