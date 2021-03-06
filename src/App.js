import { useState } from "react";
import "./styles.css";

const flagsDictionary = [
  {
    emoji: "π",
    name: "Checkered Flag",
    facts:
      "Chequered Flag was approved as part of Unicode 6.0 in 2010 and added to Emoji 1.0 in 2015."
  },
  {
    emoji: "π©",
    name: "Red Flag",
    facts:
      "Triangular Flag was approved as part of Unicode 6.0 in 2010 under the name βTriangular Flag on Postβ and added to Emoji 1.0 in 2015."
  },
  {
    emoji: "π",
    name: "Crossed Flags",
    facts:
      "Crossed Flags was approved as part of Unicode 6.0 in 2010 and added to Emoji 1.0 in 2015."
  },
  {
    emoji: "π³οΈβπ",
    name: "Pride Flag",
    facts: "Rainbow Flag was added to Emoji 4.0 in 2016."
  },
  {
    emoji: "π¦π¨",
    name: "Flag of Ascension Island",
    facts: "Flag: Ascension Island was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "π¦π©",
    name: "Flag: Andorra",
    facts: "Flag: Andorra was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "π¦πͺ",
    name: "UAE Flag",
    facts: "Flag: United Arab Emirates was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "π¦π«",
    name: "Afghan Flag",
    facts: "Flag: Afghanistan was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "π§π·",
    name: "Brazilian Flag",
    facts: "Flag: Brazil was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "π§πΉ",
    name: "Bhutanese Flag",
    facts: "Flag: Bhutan was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "π¨π¦",
    name: "Canadian Flag",
    facts: "Flag: Canada was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "π¨π­",
    name: "Swiss Flag",
    facts: "Flag: Switzerland was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "π¨π±",
    name: "Chilean Flag",
    facts: "Flag: Chile was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "π¨π³",
    name: "Chinese Flag",
    facts: "Flag: China was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "π©πͺ",
    name: "German Flag",
    facts: "Flag: Germany was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "π©π¬",
    name: "Flag: Diego Garcia",
    facts: "Flag: Diego Garcia was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "π¨πΎ",
    name: "Cypriot Flag",
    facts: "Flag: Cyprus was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "π¨πΏ",
    name: "Czech Flag",
    facts: "Flag: Czechia was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "π©π²",
    name: "Flag: Dominica",
    facts: "Flag: Dominica was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "πͺπ¬",
    name: "Egyptian Flag",
    facts: "Flag: Egypt was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "πͺπΈ",
    name: "Spanish Flag",
    facts: "Flag: Spain was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "πͺπΉ",
    name: "Ethiopian Flag",
    facts: "Flag: Ethiopia was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "πͺπΊ",
    name: "EU Flag",
    facts: "Flag: European Union was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "π«π?",
    name: "Finnish Flag",
    facts: "Flag: Finland was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "π«π―",
    name: "Fijian Flag",
    facts: "Flag: Fiji was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "π«π·",
    name: "French Flag",
    facts: "Flag: France was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "π¬π§",
    name: "UK Flag",
    facts: "Flag: United Kingdom was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "π?π³",
    name: "Indian Flag",
    facts: "Flag: India was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "π?πΈ",
    name: "Icelandic Flag",
    facts: "Flag: Iceland was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "π―π΅",
    name: "Japanese Flag",
    facts: "Flag: Japan was added to Emoji 1.0 in 2015."
  },
  {
    emoji: "π°π·",
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
        π?π³
      </span>
      <h1>Flag Emojis Interpreter</h1>
      <p>
        <span role="img" aria-label="Fire Emoji">
          π₯
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
