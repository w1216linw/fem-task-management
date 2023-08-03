import Modal from "./Modal";

interface ModalProps {
  setShowModal: (showModal: boolean) => void;
}

const NewColumnModal: React.FC<ModalProps> = ({ setShowModal }) => {
  return (
    <Modal setShowModal={setShowModal}>
      <>
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
      </>
    </Modal>
  );
};

export default NewColumnModal;
