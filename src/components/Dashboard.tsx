import { useState } from "react";
import TaskModal from "./TaskModal";

interface Subtask {
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
  title: string;
  tasks: Task[];
}

const sampleTasks: Task[] = [
  {
    id: 1,
    title: "Task 1",
    description: "Task 1 description",
    status: "todo",
    deadline: new Date(),
    created_at: new Date(),
    Subtasks: [
      {
        id: 1,
        completed: true,
        description: "Subtask 1",
      },
      {
        id: 2,
        completed: false,
        description: "Subtask 2",
      },
    ],
  },
  {
    id: 2,
    title: "Task 2",
    description: "Task 2 description",
    deadline: new Date(),
    status: "todo",
    created_at: new Date(),
    Subtasks: [
      {
        id: 1,
        completed: false,
        description: "Subtask 1",
      },
      {
        id: 2,
        completed: false,
        description: "Subtask 2",
      },
    ],
  },
];

const sampleColumn: Column[] = [
  {
    id: 1,
    title: "Todo",
    tasks: sampleTasks,
  },
  {
    id: 2,
    title: "Doing",
    tasks: sampleTasks,
  },
  {
    id: 3,
    title: "Done",
    tasks: sampleTasks,
  },
];

const Dashboard = () => {
  const [columns, setColumns] = useState<Column[]>(sampleColumn);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [showTaskModal, setShowTaskModal] = useState(false);

  const openTaskModal = (task: Task) => {
    setSelectedTask(task);
    setShowTaskModal(true);
  };

  return (
    <div className="h-full overflow-scroll w-full p-4">
      <div className="flex w-min h-full gap-4">
        {columns.map((column) => (
          <div key={column.id} className="w-64">
            <h1 className="capitalize text-secondary-500 font-bold mb-4">
              {column.title} ({column.tasks.length})
            </h1>
            <div className="flex flex-col gap-4">
              {column.tasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => openTaskModal(task)}
                  className="bg-white px-2 py-4 rounded-md shadow-md"
                >
                  <h2 className="font-bold">{task.title}</h2>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="w-64 grid place-items-center bg-lines-light rounded-md">
          <button className="capitalize text-secondary-500 font-bold text-2xl ">
            + new column
          </button>
        </div>
      </div>
      {showTaskModal && selectedTask && (
        <TaskModal task={selectedTask} setShowTaskModal={setShowTaskModal} />
      )}
    </div>
  );
};

export default Dashboard;
