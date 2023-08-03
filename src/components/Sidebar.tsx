import { useState } from "react";
import { BiHide } from "react-icons/bi";
import { MdOutlineDashboard } from "react-icons/md";
import Logo from "../assets/Logo";
import { Column } from "./Dashboard";
import NewBoardModal from "./modal/NewBoardModal";

interface SidebarProps {
  hiding: boolean;
  boards: Board[];
  currentTab: string;
  setHiding: (hiding: boolean) => void;
  setBoards: (boards: Board[]) => void;
  setCurrentTab: (currentTab: string) => void;
}

export interface Board {
  id: string;
  name: string;
  columns: Column[];
}

const Sidebar: React.FC<SidebarProps> = ({
  hiding,
  setHiding,
  boards,
  currentTab,
  setCurrentTab,
  setBoards,
}) => {
  const [showNewBoardModal, setShowNewBoardModal] = useState(false);

  return (
    <div className={`col-start-1 col-end-4 xl:col-end-3  h-full flex flex-col`}>
      <div className="h-24 flex items-center bg-white">
        <Logo themed="dark" />
      </div>
      <div
        className={`flex flex-col transition-transform bg-white flex-grow ${
          hiding ? "-translate-x-full" : ""
        }`}
      >
        <div className="space-y-2">
          <h1 className="uppercase font-medium text-xs text-secondary-500 px-5">
            All Boards ({boards.length})
          </h1>
          <div className="flex flex-col gap-2">
            {boards.map((board, idx) => (
              <div
                key={idx}
                className={`flex flex-row items-center text-secondary-500 gap-2 py-2 rounded-e-full px-5 hover:bg-primary-300 hover:text-white ${
                  currentTab === board.name ? "bg-primary-400 text-white" : ""
                }`}
              >
                <MdOutlineDashboard />
                <span className="font-bold">{board.name}</span>
              </div>
            ))}
          </div>
          <button
            className="flex flex-row items-center gap-2 px-5 "
            onClick={() => setShowNewBoardModal(true)}
          >
            <MdOutlineDashboard className="text-primary-400" />
            <span className="font-bold text-primary-400">
              +Create New Board
            </span>
          </button>
          {showNewBoardModal && (
            <NewBoardModal
              setShowModal={setShowNewBoardModal}
              boards={boards}
              setBoards={setBoards}
            />
          )}
        </div>
        <div className="mt-auto px-5 mb-3">
          <button
            className="flex p-2 items-center gap-2 text-secondary-500"
            onClick={() => setHiding(true)}
          >
            <BiHide />
            <span className="font-bold">Hide Sidebar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
