import { Column, Task } from "../components/Dashboard";

export const state = ["todos", "doing", "done"];

export const sampleTasks: Task[] = [
  {
    id: 1,
    title: "Task 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet tempor enim. Vivamus rutrum vehicula elit, sed gravida arcu commodo vel. Fusce eget consectetur dui.",
    status: "todo",
    deadline: new Date(),
    created_at: new Date(),
    Subtasks: [
      {
        id: 1,
        completed: true,
        description:
          "Vivamus sapien tortor, viverra ac dui at, laoreet porta metus.",
      },
      {
        id: 2,
        completed: false,
        description:
          "Vivamus sapien tortor, viverra ac dui at, laoreet porta metus.",
      },
    ],
  },
  {
    id: 2,
    title: "Task 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet tempor enim. Vivamus rutrum vehicula elit, sed gravida arcu commodo vel. Fusce eget consectetur dui.",
    deadline: new Date(),
    status: "todo",
    created_at: new Date(),
    Subtasks: [
      {
        id: 1,
        completed: false,
        description:
          "Praesent tortor dolor, aliquam id ligula ac, fringilla tempor ante. Donec magna ex, commodo a viverra quis, feugiat ut velit. Cras ac mi augue. ",
      },
      {
        id: 2,
        completed: false,
        description:
          "Praesent tortor dolor, aliquam id ligula ac, fringilla tempor ante. Donec magna ex, commodo a viverra quis, feugiat ut velit. Cras ac mi augue. ",
      },
    ],
  },
];

export const sampleColumn: Column[] = [
  {
    id: 1,
    title: "Todo",
    tasks: sampleTasks,
  },
  {
    id: 2,
    title: "Doing",
  },
  {
    id: 3,
    title: "Done",
  },
];
