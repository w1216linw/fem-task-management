import { useState } from "react";

export interface Task {
  id: number;
  title: string;
  description: string;
  done: boolean;
  deadline: Date;
  created_at: Date;
}

const sampleTasks: Task[] = [
  {
    id: 1,
    title: "Task 1",
    description: "Task 1 description",
    done: false,
    deadline: new Date(),
    created_at: new Date(),
  },
  {
    id: 2,
    title: "Task 2",
    description: "Task 2 description",
    done: false,
    deadline: new Date(),
    created_at: new Date(),
  },
];

interface Column {
  id: number;
  title: string;
  tasks: Task[];
}

const sampleColumn: Column[] = [
  {
    id: 1,
    title: "Daily",
    tasks: sampleTasks,
  },
  {
    id: 2,
    title: "Weekly",
    tasks: sampleTasks,
  },
  {
    id: 3,
    title: "Monthly",
    tasks: sampleTasks,
  },
];

const Dashboard = () => {
  const [columns, setColumns] = useState<Column[]>(sampleColumn);
  return (
    <div className="h-full overflow-scroll w-full p-4">
      <div className="flex w-min h-full gap-4">
        {columns.map((column) => (
          <div key={column.id} className="w-64">
            <h1 className="capitalize text-secondary-500 font-bold mb-4">
              {column.title} ({column.tasks.length})
            </h1>
            <div className="flex flex-col gap-2">
              {column.tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-white px-2 py-4 rounded-md shadow-md"
                >
                  <h2 className="font-bold">{task.title}</h2>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="w-64 grid place-items-center">
          <button className="capitalize text-secondary-500 font-bold text-2xl">
            + new column
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
