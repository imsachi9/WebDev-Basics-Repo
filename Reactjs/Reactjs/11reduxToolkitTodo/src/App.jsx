import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
          Task Master
        </h1>
        <div className="bg-slate-800/70 backdrop-blur-lg rounded-xl shadow-2xl p-6 border border-slate-700/50">
          <AddTodo />
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default App;
