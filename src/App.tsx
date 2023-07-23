import { useState } from "react";
import { BiShow } from "react-icons/bi";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [hiding, setHiding] = useState<boolean>(false);

  return (
    <main className="border-secondary-900 border h-screen bg-secondary-200">
      <Header />
      <div className="flex h-full">
        <Sidebar hiding={hiding} setHiding={setHiding} />
        <div>s</div>
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
