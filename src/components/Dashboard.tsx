import { useState } from "react";
import NewColumnModal from "./modal/NewColumnModal";
import TaskModal from "./modal/TaskModal";

export interface Subtask {
  id: number;
  description: string;
  completed: boolean;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  Subtasks?: Subtask[];
  deadline: Date;
  created_at: Date;
  status: string;
}

export interface Column {
  id: number;
  name: string;
  tasks?: Task[];
}

interface DashboardProps {
  columns: Column[];
  setColumns: (columns: Column[]) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ columns, setColumns }) => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showColumnModal, setShowColumnModal] = useState(false);
  const openTaskModal = (task: Task) => {
    setSelectedTask(task);
    setShowTaskModal(true);
  };

  return (
    <div className="h-full overflow-scroll w-full p-4">
      <div className="flex w-min h-full gap-4">
        {columns?.map((column) => (
          <div key={column.id} className="w-64">
            <h1 className="capitalize text-secondary-500 font-bold mb-4">
              {column.name} {column.tasks && `(${column.tasks.length})`}
            </h1>
            <div className="flex flex-col gap-4">
              {column?.tasks?.map((task) => (
                <div
                  key={task.id}
                  onClick={() => openTaskModal(task)}
                  className="bg-white px-2 py-4 rounded-md shadow-md cursor-pointer"
                >
                  <h2 className="font-bold">{task.title}</h2>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="w-64 grid place-items-center bg-lines-light rounded-md">
          <button
            onClick={() => setShowColumnModal(true)}
            className="capitalize text-secondary-500 font-bold text-2xl "
          >
            + new column
          </button>
        </div>
      </div>
      {showTaskModal && selectedTask && (
        <TaskModal
          columns={columns}
          setColumns={setColumns}
          task={selectedTask}
          setShowTaskModal={setShowTaskModal}
        />
      )}
      {showColumnModal && <NewColumnModal setShowModal={setShowColumnModal} />}
    </div>
  );
};

export default Dashboard;
