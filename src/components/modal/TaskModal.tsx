import { useEffect, useState } from "react";
import { BiDotsVertical } from "react-icons/bi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Column, Task } from "../Dashboard";
import Subtask from "../SubTask";
import Modal from "./Modal";

interface TaskModalProps {
  task: Task;
  columns: Column[];
  setColumns: (columns: Column[]) => void;
  setShowTaskModal: (showModal: boolean) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({
  task,
  setShowTaskModal,
  columns,
  setColumns,
}) => {
  const [showStatusOption, setShowStatusOption] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string>(task.status);

  useEffect(() => {
    const handleStatusChange = () => {
      if (selectedStatus.toLowerCase() === task.status.toLowerCase()) return;

      setColumns(
        columns.map((column) => {
          if (column.name.toLowerCase() === task.status.toLowerCase()) {
            column.tasks = column.tasks?.filter((elem) => elem.id !== task.id);
          }
          return column;
        })
      );
      setColumns(
        columns.map((column) => {
          if (column.name.toLowerCase() === selectedStatus.toLowerCase()) {
            task.status = selectedStatus;
            if (column.tasks) {
              column.tasks.push(task);
            } else {
              column.tasks = [task];
            }
          }
          return column;
        })
      );
    };
    handleStatusChange();
  }, [selectedStatus]);

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
                <Subtask subtask={subtask} key={idx} />
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
            {columns?.map((column) => (
              <button
                className="capitalize text-secondary-500 text-left"
                key={column.name}
                onClick={() => setSelectedStatus(column.name)}
              >
                {column.name}
              </button>
            ))}
          </div>
        </div>
        {/* end of show status */}
      </>
    </Modal>
  );
};

export default TaskModal;
