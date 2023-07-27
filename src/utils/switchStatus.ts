import { Column, Task } from "../components/Dashboard";

export default function switchStatus(
  editTask: Task,
  columnX: Column,
  columnY: Column
) {
  columnX.tasks = columnX.tasks.filter((task) => task.id !== editTask.id);
  columnY.tasks.push(editTask);
}
