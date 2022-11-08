import "./App.css";
import Button from "./components/button.jsx";
import LanguageMap from "./components/language.jsx";
import { useState } from "react";

function App() {
  //states allowing global access
  let textIncrease = 2;
  let [text, setText] = useState(24);
  let [langaugeText, setLangaugeText] = useState("Good Morning!");
  const zoomIn = () => {
    setText((text += textIncrease));
  };
  const zoomOut = () => {
    setText((text -= textIncrease));
  };


  //Targeting keys: Eng, Chinese.. etc
  const langaugeArray = Object.keys(LanguageMap);

  return (
    <div id="app-body">
      <div>
        <Button value="-" onClick={zoomOut} />
        <Button value="+" onClick={zoomIn} />
      </div>
      <h1 style={{ fontSize: text }}>{langaugeText}</h1>
      <div>
        {langaugeArray.map((language) => (
          <Button
            key={language} //Eng
            value={language} //Good Morning
            onClick={() => setLangaugeText(LanguageMap[language])} //Click event to change accordingly
          />
        ))}
      </div>
    </div>
  );
}

export default App;