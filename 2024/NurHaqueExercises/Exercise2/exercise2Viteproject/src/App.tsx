import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DropDownComponent from "./Components/DropDownComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row w-full h-fit items-center gap-3">
        <DropDownComponent type="Source" />
        <DropDownComponent type="Target" />
      </div>
      <div className="flex flex-row w-full h-fit items-center gap-3">
        <input type="text" className="w-full h-[50px] p-3 border" />
        <input type="text" className="w-full h-[50px] p-3 border" />
      </div>
    </div>
  );
}

export default App;
