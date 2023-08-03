import { useState } from "react";
import { BiShow } from "react-icons/bi";
import Dashboard, { Column } from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar, { Board } from "./components/Sidebar";
import { sampleBoard } from "./lib/exampleSetting";

function App() {
  const [hiding, setHiding] = useState<boolean>(false);

  const [selectedBoard, setSelectedBoard] = useState<Board>(sampleBoard[0]);
  const [currentTab, setCurrentTab] = useState<string>(sampleBoard[0].name);
  const [boards, setBoards] = useState<Board[]>(sampleBoard);
  const [columns, setColumns] = useState<Column[]>(selectedBoard.columns);

  return (
    <main className="h-screen bg-secondary-200 grid grid-cols-12">
      <Sidebar
        hiding={hiding}
        setHiding={setHiding}
        boards={boards}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        setBoards={setBoards}
      />
      <div className="col-start-4 col-end-13 xl:col-start-3 flex flex-col">
        <Header />
        <Dashboard columns={columns} setColumns={setColumns} />
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
