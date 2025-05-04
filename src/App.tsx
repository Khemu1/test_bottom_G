import { useState } from "react";

import "./App.css";
import VideoUploader from "./components/VideoUploader";

function App() {
  const [count] = useState(0);

  return (
    <>
      <div className="flex flex-col gap-4">
        <ul className="flex flex-col gap-2">
          <li>use shadcn for creating custom components</li>
          <li>understand how useRef and forwradRef work</li>
        </ul>
        <VideoUploader />
      </div>
    </>
  );
}

export default App;
