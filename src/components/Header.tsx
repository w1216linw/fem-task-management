import { BiDotsVertical } from "react-icons/bi";
import Logo from "../assets/Logo";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-24 bg-white">
      <div>
        <Logo themed="dark" />
      </div>

      <div>
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
