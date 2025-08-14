import { useEffect, useRef } from "react";

interface ModalProps {
  setShowModal: (value: boolean) => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ setShowModal, children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      dialog.showModal();
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setShowModal(false);
        }
      };
      
      dialog.addEventListener('keydown', handleKeyDown);
      
      return () => {
        dialog.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [setShowModal]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (dialog && e.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      const clickedInDialog = (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      );
      
      if (!clickedInDialog) {
        setShowModal(false);
      }
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="backdrop:bg-black backdrop:bg-opacity-40 w-3/5 max-w-xl p-6 bg-white rounded-lg space-y-3"
      onClick={handleBackdropClick}
      aria-modal="true"
    >
      {children}
    </dialog>
  );
};

export default Modal;
