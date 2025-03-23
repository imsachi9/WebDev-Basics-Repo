import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen transition-all duration-300 ease-in-out"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center inset-0 m-auto h-fit px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white/50 backdrop-blur-md px-5 py-3 rounded-3xl shadow-xl border border-white/40">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-5 py-2 rounded-full text-white font-bold shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-5 py-2 rounded-full text-white font-bold shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-5 py-2 rounded-full text-white font-bold shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-5 py-2 rounded-full text-white font-bold shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-5 py-2 rounded-full text-white font-bold shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-5 py-2 rounded-full text-black font-bold shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-5 py-2 rounded-full text-white font-bold shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("teal")}
            className="outline-none px-5 py-2 rounded-full text-white font-bold shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl"
            style={{ backgroundColor: "teal" }}
          >
            Teal
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
