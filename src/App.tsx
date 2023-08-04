import { useEffect, useState } from "react";
import { BiShow } from "react-icons/bi";
import Logo from "./assets/Logo";
import Dashboard, { Column } from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar, { Board } from "./components/Sidebar";
import { sampleBoard } from "./lib/exampleSetting";

function App() {
  const [hiding, setHiding] = useState<boolean>(false);

  const [boards, setBoards] = useState<Board[]>(sampleBoard);
  const [selectedBoard, setSelectedBoard] = useState<Board>(sampleBoard[0]);
  const [columns, setColumns] = useState<Column[]>(selectedBoard.columns);

  useEffect(() => {
    setColumns(selectedBoard.columns);
  }, [selectedBoard]);

  return (
    <main className="h-screen bg-secondary-200 grid grid-cols-12">
      <Sidebar
        hiding={hiding}
        setHiding={setHiding}
        boards={boards}
        selectedBoard={selectedBoard}
        setBoards={setBoards}
        setSelectedBoard={setSelectedBoard}
      />

      <div
        className={` col-end-13 flex flex-col ${
          hiding ? "col-start-1" : "col-start-4 xl:col-start-3"
        }`}
      >
        <div className="flex">
          {hiding && (
            <div className="h-20 ps-2 flex items-center bg-white border-r-2 px-5">
              <Logo themed="dark" />
            </div>
          )}
          <Header
            columns={columns}
            setColumns={setColumns}
            setBoards={setBoards}
            selectedBoard={selectedBoard}
            setSelectedBoard={setSelectedBoard}
          />
        </div>
        <Dashboard columns={columns} setColumns={setColumns} />
      </div>

      <button
        className={`absolute py-2 px-3 bg-primary-400 text-white rounded-e-full bottom-10 left-0 ${
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
