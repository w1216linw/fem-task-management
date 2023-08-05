import { Dispatch, useState } from "react";
import { Column } from "../Dashboard";
import Modal from "./Modal";

interface ModalProps {
  setShowModal: (showModal: boolean) => void;
  setColumns: Dispatch<React.SetStateAction<Column[]>>;
}

const NewColumnModal: React.FC<ModalProps> = ({ setShowModal, setColumns }) => {
  const [name, setName] = useState("");

  const handleAddNewColumn = () => {
    setColumns((prevColumns) => {
      let updatedColumns = [
        ...prevColumns,
        { name, tasks: [], id: prevColumns.length + 1 },
      ];
      return updatedColumns;
    });
    setName("");
    setShowModal(false);
  };

  return (
    <Modal setShowModal={setShowModal}>
      <>
        <h1 className="text-xl font-bold">Add New Column</h1>
        <div>
          <h2 className="text-secondary-500 font-bold text-sm mb-2">Title</h2>
          <input
            className="w-full border-lines-light border rounded-lg p-2 text-sm"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <h2 className="text-secondary-500 font-bold text-sm mb-2">Color</h2>
          <input type="color" />
        </div>
        <button
          className="w-full py-2 bg-primary-400 rounded-full text-white mt-4 text-sm font-bold"
          onClick={handleAddNewColumn}
        >
          Save Column
        </button>
      </>
    </Modal>
  );
};

export default NewColumnModal;
