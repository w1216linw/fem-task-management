import React, { useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";

interface SubtaskProps {
  subtask: {
    id: number;
    description: string;
    completed: boolean;
  };
}

const Subtask: React.FC<SubtaskProps> = ({ subtask }) => {
  const [completed, setCompleted] = React.useState(subtask.completed);
  const handleCompleted = () => {
    setCompleted(!completed);
  };

  useEffect(() => {
    subtask.completed = completed;
  }, [completed]);

  return (
    <div
      className="flex gap-2 items-center bg-secondary-200 p-2 rounded-md cursor-pointer"
      onClick={handleCompleted}
    >
      <div
        className={`grid place-items-center w-[18px] h-[18px] rounded-md flex-shrink-0 ${
          completed ? "bg-primary-400" : "bg-white border"
        } text-2xl`}
      >
        {completed && <AiOutlineCheck size={14} color="white" />}
      </div>
      <p className={` ${completed ? "line-through text-secondary-500" : ""}`}>
        {subtask.description}
      </p>
    </div>
  );
};

export default Subtask;
