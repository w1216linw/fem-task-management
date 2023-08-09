import React from "react";
import { Column, Task } from "../Dashboard";

interface TaskSettingModalProps {
  task: Task;
  setColumns: React.Dispatch<React.SetStateAction<Column[]>>;
  setShowTaskModal: (showModal: boolean) => void;
  setShowEditTaskModal: (showModal: boolean) => void;
  setShowSettingModal: (showModal: boolean) => void;
}

const TaskSettingModal: React.FC<TaskSettingModalProps> = ({
  task,
  setColumns,
  setShowTaskModal,
  setShowEditTaskModal,
  setShowSettingModal,
}) => {
  const handleDeleteTask = () => {
    setColumns((columns) => {
      const updatedColumns = columns.map((column) => {
        column.tasks = column?.tasks?.filter((elem) => elem.id !== task.id);
        return column;
      });
      return updatedColumns;
    });
    setShowTaskModal(false);
  };

  const handleEditTask = () => {
    setShowEditTaskModal(true);
    setShowSettingModal(false);
  };
  return (
    <div className="absolute -bottom-20 right-0 translate-x-1/2 flex flex-col items-start bg-white p-4 rounded-lg">
      <button className="text-secondary-500" onClick={handleEditTask}>
        Edit Task
      </button>
      <button className="text-accent-dark" onClick={handleDeleteTask}>
        Delete Task
      </button>
    </div>
  );
};

export default TaskSettingModal;
