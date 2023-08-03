import React, { useState } from "react";
import Column from "../Column";
import { Column as ColumnType } from "../Dashboard";
import { Board } from "../Sidebar";
import Modal from "./Modal";

interface ModalProps {
  boards: Board[];
  setShowModal: (showModal: boolean) => void;
  setBoards: (boards: Board[]) => void;
}

const NewBoardModal: React.FC<ModalProps> = ({
  setShowModal,
  boards,
  setBoards,
}) => {
  const [name, setName] = useState("");
  const [columns, setColumns] = useState<ColumnType[]>([]);

  const newColumn = () => {
    setColumns([...columns, { id: columns.length, name: "" }]);
  };

  const addNewBoard = () => {
    if (!name) return;

    setBoards([...boards, { name, columns, id: boards.length + name }]);
    setShowModal(false);
  };

  return (
    <Modal setShowModal={setShowModal}>
      <>
        <h1 className="text-xl font-bold">Add New Board</h1>
        <div>
          <h2 className="text-secondary-500 font-bold text-sm mb-2">Name</h2>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-full border-lines-light border rounded-lg p-2 text-sm"
            type="text"
          />
        </div>
        <div>
          <h2 className="text-secondary-500 font-bold text-sm mb-2">Columns</h2>
          <div className="flex flex-col gap-2">
            {columns.map((column, idx) => (
              <Column
                key={idx}
                column={column}
                columns={columns}
                setColumns={setColumns}
              />
            ))}
          </div>
          <button
            className="w-full py-2 bg-lines-light rounded-full text-primary-400 mt-4 text-sm font-bold"
            onClick={newColumn}
          >
            + Add New Column
          </button>
        </div>
        <button
          className="w-full py-2 bg-primary-400 rounded-full text-white mt-4 text-sm font-bold"
          onClick={addNewBoard}
        >
          Create New Board
        </button>
      </>
    </Modal>
  );
};

export default NewBoardModal;
