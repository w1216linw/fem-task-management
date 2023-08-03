interface ModalProps {
  setShowModal: (value: boolean) => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ setShowModal, children }) => {
  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-black bg-opacity-40 absolute inset-0"
      onClick={() => setShowModal(false)}
    >
      <div
        className="w-3/5 max-w-xl p-6 bg-white rounded-lg space-y-3"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
