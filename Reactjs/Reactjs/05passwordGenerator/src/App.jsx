import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <div className="w-full max-w-md mx-auto shadow-lg rounded-xl px-6 py-5 bg-gray-800 border border-gray-700 transform transition-all hover:shadow-xl">
        <h1 className="text-2xl font-bold text-center mb-6 text-orange-500">
          Password Generator
        </h1>

        <div className="flex shadow-md rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-3 px-4 bg-gray-700 text-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-600 hover:bg-blue-700 text-white px-4 py-0.5 shrink-0 transition-colors font-medium"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="text-orange-400 font-medium">
              Length: {length}
            </label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer accent-orange-500 w-full"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
          </div>

          <div className="flex justify-between gap-4 text-sm">
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                className="w-4 h-4 accent-orange-500 cursor-pointer"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label
                htmlFor="numberInput"
                className="text-gray-200 cursor-pointer"
              >
                Numbers
              </label>
            </div>
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                className="w-4 h-4 accent-orange-500 cursor-pointer"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label
                htmlFor="characterInput"
                className="text-gray-200 cursor-pointer"
              >
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
