import React, { Dispatch, useState } from "react";
import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import { Column } from "../Dashboard";
import Modal from "./Modal";

interface NewTaskModalProps {
  columns: Column[];
  setColumns: Dispatch<React.SetStateAction<Column[]>>;
  setShowModal: (showModal: boolean) => void;
}

const NewTaskModal: React.FC<NewTaskModalProps> = ({
  columns,
  setColumns,
  setShowModal,
}) => {
  const [showStatusOption, setShowStatusOption] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(columns[0].name);
  const [subtasks, setSubtasks] = useState<string[]>([]);

  const handleAddTask = () => {
    setColumns((prevColumns) => {
      let updatedColumns = prevColumns.map((column) => {
        if (column.name.toLowerCase() === status.toLowerCase()) {
          if (column.tasks)
            column.tasks.push({
              created_at: new Date(),
              title,
              description,
              status,
              id: column?.tasks?.length + 1 || 0,
              deadline: new Date(),
            });
          else {
            column.tasks = [
              {
                created_at: new Date(),
                title,
                description,
                status,
                id: 0,
                deadline: new Date(),
              },
            ];
          }
        }

        return column;
      });

      return updatedColumns;
    });
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
          <div className="flex items-center gap-2">
            <input
              className="flex-grow border-lines-light border rounded-lg p-2 text-sm"
              type="text"
            />
            <button>
              <FaTimes size={20} className="text-secondary-500" />
            </button>
          </div>
          <button className="w-full py-2 bg-lines-light rounded-full text-primary-400 mt-4 text-sm font-bold">
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
                className="capitalize text-secondary-500"
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
          onClick={handleAddTask}
        >
          Create Task
        </button>
      </>
    </Modal>
  );
};

export default NewTaskModal;
