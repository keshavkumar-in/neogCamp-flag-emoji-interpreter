import { useState } from "react";
import "./styles.css";

const flagsDictionary = [
  {
    emoji: "🏁",
    name: "Checkered Flag",
    facts:
      "Chequered Flag was approved as part of Unicode 6.0 in 2010 and added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🚩",
    name: "Red Flag",
    facts:
      "Triangular Flag was approved as part of Unicode 6.0 in 2010 under the name “Triangular Flag on Post” and added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🎌",
    name: "Crossed Flags",
    facts:
      "Crossed Flags was approved as part of Unicode 6.0 in 2010 and added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🏳️‍🌈",
    name: "Pride Flag",
    facts: "Rainbow Flag was added to Emoji 4.0 in 2016."
  },
  {
    emoji: "🇦🇨",
    name: "Flag of Ascension Island",
    facts: "Flag: Ascension Island was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇦🇩",
    name: "Flag: Andorra",
    facts: "Flag: Andorra was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇦🇪",
    name: "UAE Flag",
    facts: "Flag: United Arab Emirates was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇦🇫",
    name: "Afghan Flag",
    facts: "Flag: Afghanistan was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇧🇷",
    name: "Brazilian Flag",
    facts: "Flag: Brazil was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇧🇹",
    name: "Bhutanese Flag",
    facts: "Flag: Bhutan was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇨🇦",
    name: "Canadian Flag",
    facts: "Flag: Canada was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇨🇭",
    name: "Swiss Flag",
    facts: "Flag: Switzerland was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇨🇱",
    name: "Chilean Flag",
    facts: "Flag: Chile was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇨🇳",
    name: "Chinese Flag",
    facts: "Flag: China was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇩🇪",
    name: "German Flag",
    facts: "Flag: Germany was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇩🇬",
    name: "Flag: Diego Garcia",
    facts: "Flag: Diego Garcia was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇨🇾",
    name: "Cypriot Flag",
    facts: "Flag: Cyprus was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇨🇿",
    name: "Czech Flag",
    facts: "Flag: Czechia was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇩🇲",
    name: "Flag: Dominica",
    facts: "Flag: Dominica was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇪🇬",
    name: "Egyptian Flag",
    facts: "Flag: Egypt was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇪🇸",
    name: "Spanish Flag",
    facts: "Flag: Spain was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇪🇹",
    name: "Ethiopian Flag",
    facts: "Flag: Ethiopia was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇪🇺",
    name: "EU Flag",
    facts: "Flag: European Union was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇫🇮",
    name: "Finnish Flag",
    facts: "Flag: Finland was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇫🇯",
    name: "Fijian Flag",
    facts: "Flag: Fiji was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇫🇷",
    name: "French Flag",
    facts: "Flag: France was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇬🇧",
    name: "UK Flag",
    facts: "Flag: United Kingdom was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇮🇳",
    name: "Indian Flag",
    facts: "Flag: India was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇮🇸",
    name: "Icelandic Flag",
    facts: "Flag: Iceland was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇯🇵",
    name: "Japanese Flag",
    facts: "Flag: Japan was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "🇰🇷",
    name: "South Korean Flag",
    facts: "Flag: South Korea was added to Emoji 1.0 in 2015."
  }
];

export default function App() {
  const [name, setName] = useState("");
  const [facts, setFacts] = useState("");

  const flagChangeHandler = (event) => {
    const input = event.target.value;

    const result = flagsDictionary.find(
      (flagEmoji) => flagEmoji.emoji === input
    );

    if (result === undefined) {
      setName("Sorry!!! We don't have details about this flag.");
      setFacts("");
    } else {
      setName(result.name);
      setFacts(result.facts);
    }
  };

  const flagClickHandler = (flag) => {
    const result = flagsDictionary.find(
      (flagEmoji) => flagEmoji.emoji === flag
    );
    setName(result.name);
    setFacts(result.facts);
  };
  return (
    <div className="App">
      <span role="img" aria-label="Indian Flag" style={{ fontSize: "5rem" }}>
        🇮🇳
      </span>
      <h1>Flag Emojis Interpreter</h1>
      <p>
        <span role="img" aria-label="Fire Emoji">
          🔥
        </span>{" "}
        Search for flag emojis and some facts.
      </p>
      <div>
        <input
          onChange={flagChangeHandler}
          autoFocus
          placeholder="Put a flag emoji here to know its name & some facts..."
        />
        <div className="meaning">
          <strong>
            <em>{name}</em>
          </strong>
          <p>{facts}</p>
        </div>
        <ul>
          {flagsDictionary.map((flag) => {
            return (
              <li key={flag.name} onClick={() => flagClickHandler(flag.emoji)}>
                {flag.emoji}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
