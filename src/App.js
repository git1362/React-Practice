import StarRating from "./use-state/index.js"
import VoiceRecoder from "./use-reducer/index.js";
import Colorify from "./use-ref/index.js";
import CustomComponent from "./custom-hooks";
import ShowTrees from "./use-context/index.js";

import './App.css';



function App()
{
  return (
    <div className="App">
      <h2>Use State</h2>
      <StarRating />
      <h2>Use Reducer</h2>
      <VoiceRecoder />
      <Colorify />

      <h2>Custom Hoos</h2>
      <CustomComponent />

      <h2>Use Context</h2>
      <ShowTrees />
    </div>
  );
}

export default App;
