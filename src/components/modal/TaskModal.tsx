import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BiDotsVertical } from "react-icons/bi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { state } from "../../lib/exampleSetting";
import { Task } from "../Dashboard";
import Modal from "./Modal";

interface TaskModalProps {
  task: Task;
  setShowTaskModal: (showModal: boolean) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ task, setShowTaskModal }) => {
  const [showStatusOption, setShowStatusOption] = useState(false);

  return (
    <Modal setShowModal={setShowTaskModal}>
      <>
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">{task.title}</h1>
          <button>
            <BiDotsVertical />
          </button>
        </div>
        <p className="text-secondary-500">{task.description}</p>
        {/* show subtasks */}
        {task.Subtasks && (
          <div>
            <h1 className="text-secondary-500 font-bold text-sm mb-2">
              Subtasks ({task.Subtasks.length})
            </h1>
            <div className="flex flex-col gap-2">
              {task.Subtasks.map((subtask, idx) => (
                <div
                  className="flex gap-2 items-center bg-secondary-200 p-2 rounded-md"
                  key={idx}
                >
                  <div
                    className={`grid place-items-center w-[18px] h-[18px] rounded-md flex-shrink-0 ${
                      subtask.completed ? "bg-primary-400" : "bg-white border"
                    } text-2xl`}
                  >
                    {subtask.completed && (
                      <AiOutlineCheck size={14} color="white" />
                    )}
                  </div>
                  <p
                    className={` ${
                      subtask.completed ? "line-through text-secondary-500" : ""
                    }`}
                  >
                    {subtask.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* end of subtasks */}
        {/* show status */}
        <div
          className="relative"
          onClick={() => setShowStatusOption(!showStatusOption)}
        >
          <h1 className="capitalize text-secondary-500 font-bold text-sm mb-2">
            current status
          </h1>
          <div
            className={`border border-lines-light px-4 py-2 flex justify-between items-center active:border-primary-300 rounded-lg ${
              showStatusOption ? "border-primary-300" : ""
            }`}
          >
            <p className="capitalize">{task.status}</p>
            {showStatusOption ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div
            className={`p-4 flex flex-col gap-2 absolute -bottom-30 left-0 bg-white w-full rounded-lg ${
              showStatusOption ? "" : "hidden"
            }`}
          >
            {state.map((state) => (
              <p className="capitalize text-secondary-500" key={state}>
                {state}
              </p>
            ))}
          </div>
        </div>
        {/* end of show status */}
      </>
    </Modal>
  );
};

export default TaskModal;
