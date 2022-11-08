import Button from './components/button.jsx';
import './App.css';
import { useState } from "react"

function App() {
  let [size, setTextSize] = useState(24)
  let [text, setTextLanguage] = useState("Good Morning!")
  let pageSizing = 2
  const zoomIn = () => {
    console.log(size)
    setTextSize(size += pageSizing)
  }
  const zoomOut = () => {
    console.log(size)
    setTextSize(size -= pageSizing)
    
  }
  const getLanguage = (langaugeText) => {
    setTextLanguage(langaugeText)
  }
  return (
    //- and + buttons
    <div id="body">
      <div>
        <Button
          value="-"
          event={zoomOut}
        />
        <Button
          value="+"
          event={zoomIn}
        />
      </div>
      <h1 style={{ fontSize: size }}>{text}</h1>
      {/* all langauges and button events */}
      <div className="langauges">
        <Button
          value="English"
          //execution flow in passing between getLanguage function expression
          event={function () { getLanguage("Good Morning") }}
        />
        <Button
          value="Chinese"
          event={() => { getLanguage("早上好") }}
        />
        <Button
          value="Spanish"
          event={() => { getLanguage("Buenos días") }}
        />
        <Button
          value="Haitian"
          event={() => { getLanguage("Bonjou") }}
        />
        <Button
          value="Portuguese"
          event={() => { getLanguage("Dom Dia") }}
        />
      </div>
    </div>
  );
}

export default App;
