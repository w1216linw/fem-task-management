import React, { useState } from "react";
import { BiDotsVertical } from "react-icons/bi";
import { Column } from "./Dashboard";
import { Board } from "./Sidebar";
import NewTaskModal from "./modal/NewTaskModal";

interface HeaderProps {
  columns: Column[];
  setColumns: React.Dispatch<React.SetStateAction<Column[]>>;
  setBoards: React.Dispatch<React.SetStateAction<Board[]>>;
  selectedBoard: Board;
  setSelectedBoard: (board: Board) => void;
}

const Header: React.FC<HeaderProps> = ({
  columns,
  setColumns,
  setBoards,
  selectedBoard,
  setSelectedBoard,
}) => {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleDeleteBoard = () => {
    setBoards((boards) => {
      const updatedBoards = boards.filter(
        (board) => board.id !== selectedBoard.id
      );
      if (updatedBoards.length > 0) {
        setSelectedBoard(updatedBoards[0]);
      }
      return updatedBoards;
    });
  };

  return (
    <header className="flex justify-between items-center h-20 py-5 bg-white px-5 w-full border-s border-secondary-200">
      <h1 className="text-2xl font-bold capitalize">{selectedBoard.name}</h1>
      <div className="space-x-2 flex items-center">
        <button
          className="bg-primary-400 rounded-full py-2 px-4 text-white"
          onClick={() => setShowTaskModal(true)}
        >
          + Add New Task
        </button>
        <div className="relative">
          <button onClick={() => setShowMenu(!showMenu)}>
            <BiDotsVertical />
          </button>
          <div
            className={`absolute -bottom-24 right-0 w-max flex flex-col bg-white p-4 rounded-lg items-start ${
              showMenu || "hidden"
            } `}
          >
            <button className="text-secondary-500">Edit Board</button>
            <button className="text-accent-dark" onClick={handleDeleteBoard}>
              Delete Board
            </button>
          </div>
        </div>
      </div>
      {showTaskModal && (
        <NewTaskModal
          setShowModal={setShowTaskModal}
          setColumns={setColumns}
          columns={columns}
        />
      )}
    </header>
  );
};

export default Header;
