import { useState } from "react";
import { BiShow } from "react-icons/bi";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [hiding, setHiding] = useState<boolean>(false);

  return (
    <main className="h-screen bg-secondary-200 grid grid-cols-12">
      <Sidebar hiding={hiding} setHiding={setHiding} />
      <div className="col-start-4 col-end-13 lg:col-start-3 flex flex-col">
        <Header />
        <Dashboard />
      </div>

      <button
        className={`absolute py-2 px-3 bg-primary-400 text-white rounded-e-full bottom-20 left-0 ${
          !hiding ? "hidden" : ""
        } `}
        onClick={() => setHiding(false)}
      >
        <BiShow size={30} />
      </button>
    </main>
  );
}

export default App;
