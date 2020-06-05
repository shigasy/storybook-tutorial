import React from "react";

import TaskList from "./TaskList";
import { taskData, actionsData } from "./Task.stories";

export default {
  component: TaskList,
  title: "TaskList",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>], // ストーリーをwrapする 表示の共通styleなど
  excludeStories: /.*Data$/,
};

export const defaultTasksData = [
  { ...taskData, id: "1", title: "Task 1" },
  { ...taskData, id: "2", title: "Task 2" },
  { ...taskData, id: "3", title: "Task 3" },
  { ...taskData, id: "4", title: "Task 4" },
  { ...taskData, id: "5", title: "Task 5" },
  { ...taskData, id: "6", title: "Task 6" },
];

export const withPinnedTaskData = [
  ...defaultTasksData.slice(0, 5),
  { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
];

// 表示は順番

export const Default = () => (
  <TaskList tasks={defaultTasksData} {...actionsData} />
);

export const WithPinnedTasks = () => (
  <TaskList tasks={withPinnedTaskData} {...actionsData} />
);

export const Loading = () => <TaskList loading tasks={[]} {...actionsData} />;

export const Empty = () => <TaskList tasks={[]} {...actionsData} />;