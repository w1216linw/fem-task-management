import { Dispatch, useState } from "react";
import { Column, Subtask, Task } from "../Dashboard";
import TaskForm from "../TaskForm";
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
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const [subtasks, setSubtasks] = useState<Subtask[]>(task.Subtasks || []);

  const handleSaveChanges = () => {
    if (!title.trim()) return;

    setColumns((prev) => {
      const updateColumns = prev.map((column) => {
        // Remove task from original column
        if (column.name.toLowerCase() === task.status.toLowerCase()) {
          if (column.tasks) {
            column.tasks = column.tasks.filter((elem) => elem.id !== task.id);
          }
        }
        
        // Add updated task to new column
        if (column.name.toLowerCase() === status.toLowerCase()) {
          if (column.tasks) {
            column.tasks.push({
              ...task,
              title,
              description,
              status,
              Subtasks: subtasks,
            });
          } else {
            column.tasks = [{
              ...task,
              title,
              description,
              status,
              Subtasks: subtasks,
            }];
          }
        }
        
        return column;
      });

      return updateColumns;
    });

    setShowModal(false);
  };

  return (
    <Modal setShowModal={setShowModal}>
      <div>
        <h1 className="text-xl font-bold mb-4">Edit Task</h1>
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
          onSubmit={handleSaveChanges}
          submitButtonText="Save Changes"
        />
      </div>
    </Modal>
  );
};

export default EditTaskModal;
