import { Dispatch } from "react";
import { Column, Subtask } from "./Dashboard";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import StatusDropdown from "./StatusDropdown";
import SubTaskInput from "./SubTaskInput";

interface TaskFormProps {
  title: string;
  description: string;
  status: string;
  subtasks: Subtask[];
  columns: Column[];
  onTitleChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onSubtasksChange: Dispatch<React.SetStateAction<Subtask[]>>;
  onSubmit: () => void;
  submitButtonText: string;
}

const TaskForm: React.FC<TaskFormProps> = ({
  title,
  description,
  status,
  subtasks,
  columns,
  onTitleChange,
  onDescriptionChange,
  onStatusChange,
  onSubtasksChange,
  onSubmit,
  submitButtonText,
}) => {
  const handleAddSubtask = () => {
    onSubtasksChange((prev) => [
      ...prev,
      { id: prev.length, description: "", completed: false },
    ]);
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="space-y-4">
      <FormInput
        label="Title"
        value={title}
        onChange={onTitleChange}
        placeholder="Enter task title"
        required
      />

      <FormTextarea
        label="Description"
        value={description}
        onChange={onDescriptionChange}
        placeholder="Enter task description"
        rows={4}
      />

      <div className="flex flex-col gap-2">
        <h2 className="text-secondary-500 font-bold text-sm">Subtasks</h2>
        {subtasks.length > 0 &&
          subtasks.map((subtask) => (
            <SubTaskInput
              key={subtask.id}
              subtask={subtask}
              setSubtasks={onSubtasksChange}
            />
          ))}
        <button
          type="button"
          className="w-full py-2 bg-lines-light rounded-full text-primary-400 mt-4 text-sm font-bold hover:bg-gray-100"
          onClick={handleAddSubtask}
        >
          + Add New Subtask
        </button>
      </div>

      <StatusDropdown
        label="Status"
        value={status}
        options={columns}
        onChange={onStatusChange}
        required
      />

      <button
        type="submit"
        className="w-full py-2 bg-primary-400 rounded-full text-white mt-4 text-sm font-bold hover:bg-primary-500"
      >
        {submitButtonText}
      </button>
    </form>
  );
};

export default TaskForm;