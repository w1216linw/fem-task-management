import { Dispatch, SetStateAction } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BiDotsVertical } from "react-icons/bi";
import { Task } from "./Dashboard";
interface TaskModalProps {
  task: Task;
  setShowTaskModal: Dispatch<SetStateAction<boolean>>;
}

const TaskModal = ({ task, setShowTaskModal }: TaskModalProps) => {
  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-black bg-opacity-40 absolute inset-0"
      onClick={() => setShowTaskModal(false)}
    >
      <div
        className="w-3/5 max-w-xl px-4 py-2 bg-white"
        onClick={(e) => e.stopPropagation()}
      >
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
            <h1>Subtasks ({task.Subtasks.length})</h1>
            <div className="flex flex-col gap-2">
              {task.Subtasks.map((subtask) => (
                <div className="flex gap-2 items-center bg-secondary-200 p-2 rounded-md">
                  <div
                    className={`grid place-items-center w-[18px] h-[18px] rounded-md ${
                      subtask.completed ? "bg-primary-400" : "bg-white border"
                    } text-2xl`}
                  >
                    {subtask.completed && (
                      <AiOutlineCheck size={14} color="white" />
                    )}
                  </div>
                  <p
                    className={`${
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
        <div>
          <h1 className="capitalize">current status</h1>
          <div>
            <p>{task.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
