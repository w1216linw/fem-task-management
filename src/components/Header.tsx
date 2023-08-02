import { useState } from "react";
import { BiDotsVertical } from "react-icons/bi";
import NewTaskModal from "./NewTaskModal";

const Header = () => {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex justify-between items-center h-24 bg-white px-5 w-full border-s border-secondary-200">
      <h1 className="text-2xl font-bold capitalize">board 1</h1>
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
            <button className="text-accent-dark">Delete Board</button>
          </div>
        </div>
      </div>
      {showTaskModal && <NewTaskModal setShowTaskModal={setShowTaskModal} />}
    </header>
  );
};

export default Header;
