import { Dispatch, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Column, Subtask, Task } from "../Dashboard";
import SubTaskInput from "../SubTaskInput";
import Modal from "./Modal";

interface EditTaskModalProps {
  columns: Column[];
  setShowModal: (showModal: boolean) => void;
  task: Task;
  setColumns: Dispatch<React.SetStateAction<Column[]>>;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({
  setShowModal,
  task,
  columns,
  setColumns,
}) => {
  const [showStatusOption, setShowStatusOption] = useState(false);

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const [subtasks, setSubtasks] = useState<Subtask[]>(task.Subtasks || []);

  const handleSaveChanges = () => {
    setColumns((prev) => {
      const updateColumns = prev.map((column) => {
        if (column.name.toLowerCase() === task.status.toLowerCase()) {
          if (column.tasks) {
            column.tasks = column.tasks.filter((elem) => elem.id !== task.id);
            column.tasks.push({
              ...task,
              title: title,
              description: description,
              Subtasks: subtasks,
            });
          }
        }
        return column;
      });

      return updateColumns;
    });

    setShowModal(false);
  };

  const handleAddSubtask = () => {
    setSubtasks((prev) => [
      ...prev,
      { id: prev.length, description: "", completed: false },
    ]);
  };

  return (
    <Modal setShowModal={setShowModal}>
      <>
        <h1 className="text-xl font-bold">Add New Task</h1>
        <div>
          <h2 className="text-secondary-500 font-bold text-sm mb-2">Title</h2>
          <input
            className="w-full border-lines-light border rounded-lg p-2 text-sm"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div>
          <h2 className="text-secondary-500 font-bold text-sm mb-2">
            Description
          </h2>
          <textarea
            className="w-full border-lines-light border rounded-lg p-2 text-sm "
            rows={4}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-secondary-500 font-bold text-sm ">Subtasks</h2>
          {subtasks.length > 0 &&
            subtasks.map((subtask) => (
              <SubTaskInput
                key={subtask.id}
                subtask={subtask}
                setSubtasks={setSubtasks}
              />
            ))}
          <button
            className="w-full py-2 bg-lines-light rounded-full text-primary-400 mt-4 text-sm font-bold"
            onClick={handleAddSubtask}
          >
            + Add New Subtask
          </button>
        </div>

        {/* show status */}
        <div
          className="relative"
          onClick={() => setShowStatusOption(!showStatusOption)}
        >
          <h1 className="capitalize text-secondary-500 font-bold text-sm mb-2">
            status
          </h1>
          <div
            className={`border border-lines-light px-4 py-2 flex justify-between items-center active:border-primary-300 rounded-lg ${
              showStatusOption ? "border-primary-300" : ""
            }`}
          >
            <p className="capitalize">{status}</p>
            {showStatusOption ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div
            className={`p-4 flex flex-col gap-2 absolute -bottom-30 left-0 bg-white w-full rounded-lg ${
              showStatusOption ? "" : "hidden"
            }`}
          >
            {columns.map((columns) => (
              <button
                className="capitalize text-secondary-500 text-left"
                key={columns.id}
                onClick={() => setStatus(columns.name)}
              >
                {columns.name}
              </button>
            ))}
          </div>
        </div>
        {/* end of show status */}
        <button
          className="w-full py-2 bg-primary-400 rounded-full text-white mt-4 text-sm font-bold"
          onClick={handleSaveChanges}
        >
          Save Changes
        </button>
      </>
    </Modal>
  );
};

export default EditTaskModal;
