import { Dispatch, SetStateAction } from "react";

interface ModalProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const NewColumnModal: React.FC<ModalProps> = ({ setShowModal }) => {
  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-black bg-opacity-40 absolute inset-0"
      onClick={() => setShowModal(false)}
    >
      <div
        className="w-3/5 max-w-xl p-6 bg-white rounded-lg space-y-3"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-xl font-bold">Add New Column</h1>
        <div>
          <h2 className="text-secondary-500 font-bold text-sm mb-2">Title</h2>
          <input
            className="w-full border-lines-light border rounded-lg p-2 text-sm"
            type="text"
          />
        </div>
        <div>
          <h2 className="text-secondary-500 font-bold text-sm mb-2">Color</h2>
          <input type="color" />
        </div>
        <button className="w-full py-2 bg-primary-400 rounded-full text-white mt-4 text-sm font-bold">
          Save Column
        </button>
      </div>
    </div>
  );
};

export default NewColumnModal;
