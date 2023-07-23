import { useState } from "react";
import { BiHide } from "react-icons/bi";
import { MdOutlineDashboard } from "react-icons/md";

interface SidebarProps {
  hiding: boolean;
  setHiding: (hiding: boolean) => void;
}

const Sidebar = ({ hiding, setHiding }: SidebarProps) => {
  const boards = ["board1", "board2", "board3"];
  const [currentTab, setCurrentTab] = useState<string>("board1");

  return (
    <div
      className={`flex-1 max-w-[360px] pr-4 bg-white h-full flex flex-col transition-transform ${
        hiding ? "-translate-x-full" : ""
      }`}
    >
      <div>
        <h1 className="uppercase font-medium text-xs text-secondary-500 px-5">
          All Boards ({boards.length})
        </h1>
        {boards.map((board) => (
          <div
            className={`flex flex-row items-center text-secondary-500 gap-2 py-2 rounded-e-full px-5 hover:bg-primary-300 hover:text-white ${
              currentTab === board ? "bg-primary-300 text-white" : ""
            }`}
          >
            <MdOutlineDashboard />
            <span className="font-bold">{board}</span>
          </div>
        ))}
        <button className="flex flex-row items-center gap-2 px-5 ">
          <MdOutlineDashboard className="text-primary-400" />
          <span className="font-bold text-primary-400">+Create New Board</span>
        </button>
      </div>
      <div className="mt-auto px-5 mb-3">
        <button
          className="flex p-2 items-center gap-2 text-secondary-500"
          onClick={() => setHiding(true)}
        >
          <BiHide />
          <span className="font-bold">Hide Sidebar</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
