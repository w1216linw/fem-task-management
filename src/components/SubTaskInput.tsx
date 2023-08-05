import { Dispatch, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Subtask } from "./Dashboard";

interface SubtaskProps {
  subtask: Subtask;

  setSubtasks: Dispatch<React.SetStateAction<Subtask[]>>;
}

const SubTaskInput: React.FC<SubtaskProps> = ({ setSubtasks, subtask }) => {
  const [description, setDescription] = useState("");
  const handleDeleteSubtask = () => {
    setSubtasks((prevSubtasks) =>
      prevSubtasks.filter((prevSubtask) => prevSubtask.id !== subtask.id)
    );
  };

  useEffect(() => {
    subtask.description = description;
  }, [description]);

  return (
    <div className="flex items-center gap-2">
      <input
        className="flex-grow border-lines-light border rounded-lg p-2 text-sm"
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button onClick={handleDeleteSubtask}>
        <FaTimes size={20} className="text-secondary-500" />
      </button>
    </div>
  );
};

export default SubTaskInput;
