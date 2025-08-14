import React, { Dispatch, useState } from "react";
import { Column, Subtask } from "../Dashboard";
import TaskForm from "../TaskForm";
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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(columns[0]?.name || "");
  const [subtasks, setSubtasks] = useState<Subtask[]>([]);

  const handleAddTask = () => {
    if (!title.trim()) return;

    setColumns((prevColumns) => {
      const updatedColumns = prevColumns.map((column) => {
        if (column.name.toLowerCase() === status.toLowerCase()) {
          if (column.tasks) {
            column.tasks.push({
              created_at: new Date(),
              title,
              description,
              status,
              id: column.tasks.length + 1,
              deadline: new Date(),
              Subtasks: subtasks,
            });
          } else {
            column.tasks = [
              {
                created_at: new Date(),
                title,
                description,
                status,
                id: 0,
                deadline: new Date(),
                Subtasks: subtasks,
              },
            ];
          }
        }
        return column;
      });
      return updatedColumns;
    });

    setShowModal(false);
  };

  return (
    <Modal setShowModal={setShowModal}>
      <div>
        <h1 className="text-xl font-bold mb-4">Add New Task</h1>
        <TaskForm
          title={title}
          description={description}
          status={status}
          subtasks={subtasks}
          columns={columns}
          onTitleChange={setTitle}
          onDescriptionChange={setDescription}
          onStatusChange={setStatus}
          onSubtasksChange={setSubtasks}
          onSubmit={handleAddTask}
          submitButtonText="Create Task"
        />
      </div>
    </Modal>
  );
};

export default NewTaskModal;
