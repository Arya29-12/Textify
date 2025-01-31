// src/components/TaskManager.js
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const fetchTasks = async () => {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    const taskList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setTasks(taskList);
  };

  const addTask = async () => {
    if (!newTask) return;
    await addDoc(collection(db, "tasks"), { task: newTask });
    setNewTask("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Task Manager</h2>
      <input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="New Task" />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.task}
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
