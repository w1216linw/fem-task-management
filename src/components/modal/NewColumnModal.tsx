import { Dispatch, useState } from "react";
import { Column } from "../Dashboard";
import FormInput from "../FormInput";
import Modal from "./Modal";

interface ModalProps {
  setShowModal: (showModal: boolean) => void;
  setColumns: Dispatch<React.SetStateAction<Column[]>>;
}

const NewColumnModal: React.FC<ModalProps> = ({ setShowModal, setColumns }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#3b82f6");

  const handleAddNewColumn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setColumns((prevColumns) => {
      const updatedColumns = [
        ...prevColumns,
        { name: name.trim(), tasks: [], id: prevColumns.length + 1 },
      ];
      return updatedColumns;
    });
    setName("");
    setShowModal(false);
  };

  return (
    <Modal setShowModal={setShowModal}>
      <div>
        <h1 className="text-xl font-bold mb-4">Add New Column</h1>
        <form onSubmit={handleAddNewColumn} className="space-y-4">
          <FormInput
            label="Title"
            value={name}
            onChange={setName}
            placeholder="Enter column name"
            required
          />
          
          <div>
            <label className="text-secondary-500 font-bold text-sm mb-2 block">
              Color
            </label>
            <input 
              type="color" 
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full h-10 border border-lines-light rounded-lg cursor-pointer"
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-2 bg-primary-400 rounded-full text-white mt-4 text-sm font-bold hover:bg-primary-500"
          >
            Save Column
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default NewColumnModal;
