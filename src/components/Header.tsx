import { BiDotsVertical } from "react-icons/bi";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-24 bg-white px-5 w-full border-s border-secondary-200">
      <h1 className="text-2xl font-bold capitalize">board 1</h1>
      <div className="space-x-2">
        <button className="bg-primary-400 rounded-full py-2 px-4 text-white">
          + Add New Task
        </button>
        <button>
          <BiDotsVertical />
        </button>
      </div>
    </header>
  );
};

export default Header;
