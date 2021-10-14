const express = require("express");
const faker = require("faker");
const app = express();

const PORT = 3000;

const tasks = [];
const tags = [];

app.use(express.json());

// --------------------------------- TASKS ---------------------------------

app.get("/tasks", (_req, res) => {
  return res.json(
    tasks.map(({ tag_id, ...task }) => {
      return {
        ...task,
        tag: tags.find((tag) => tag.id === tag_id),
      };
    })
  );
});

app.get("/tasks/:id", (req, res) => {
  const taskFound = tasks.find((item) => item.id === req.params.id);

  if (!taskFound) {
    return res.status(404).json({ message: "Tarefa não encontrada" });
  }

  const { tag_id, ...task } = taskFound;

  if (tag_id) {
    task.tag = tags.find((tag) => tag.id === tag_id);
  }

  return res.json(task);
});

app.post("/tasks", (req, res) => {
  const { tag: tagTitle, ...task } = req.body;

  let taskData = {
    id: faker.datatype.uuid(),
    tag_id: undefined,
    done: false,
    ...task,
  };

  if (tagTitle) {
    const tag = tags.find((item) => item.title === tagTitle);
    if (!tag) {
      return res.status(400).json({ message: "Tag não existe" });
    }

    taskData.tag_id = tag.id;
  }

  tasks.push(taskData);

  return res.json(taskData);
});

app.put("/tasks/:id", (req, res) => {
  const taskIndex = tasks.findIndex((task) => req.params.id === task.id);

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Tarefa não existe" });
  }

  const { tag: tagTitle, ...task } = req.body;

  let taskData = {
    ...tasks[taskIndex],
    ...task,
  };

  if (tagTitle) {
    const tag = tags.find((item) => item.title === tagTitle);
    if (!tag) {
      return res.status(400).json({ message: "Tag não existe" });
    }

    taskData.tag_id = tag.id;
  }

  tasks[taskIndex] = taskData;

  return res.json(taskData);
});

app.delete("/tasks/:id", (req, res) => {
  const taskIndex = tasks.findIndex((task) => req.params.id === task.id);

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Tarefa não existe" });
  }

  tasks.slice(taskIndex, 1);

  return res.status(204);
});

app.post("task/:id/check", (req, res) => {
  const taskIndex = tasks.findIndex((task) => req.params.id === task.id);

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Tarefa não existe" });
  }

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    done: !tasks[taskIndex].done,
  };
});

// --------------------------------- TAGS ---------------------------------

app.get("/tags", (_req, res) => {
  return res.json(tags);
});

app.get("/tags/:id", (_req, res) => {
  const tagFound = tags.find((tag) => tag.id === req.params.id);

  if (tagFound) {
    return res.status(404).json({ message: "Tag não encontrada" });
  }

  return res.json(tagFound);
});

app.post("/tags", (req, res) => {
  const tagData = {
    id: faker.datatype.uuid(),
    ...req.body,
  };

  tags.push(tagData);

  return res.json(tagData);
});

app.put("/tags/:id", (req, res) => {
  const tagIndex = tags.findIndex((tag) => tag.id === req.params.id);

  if (tagIndex === -1) {
    return res.status(404).json({ message: "Tag não encontrada" });
  }

  const updatedTag = {
    ...tags[tagIndex],
    ...req.body,
  };

  tags[tagIndex] = updatedTag;

  return res.json(updatedTag);
});

app.delete("/tags/:id", (req, res) => {
  const tagIndex = tags.findIndex((tag) => req.params.id === tag.id);

  if (tagIndex === -1) {
    return res.status(404).json({ message: "Tag não existe" });
  }

  tags.slice(tagIndex, 1);

  return res.status(204);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
