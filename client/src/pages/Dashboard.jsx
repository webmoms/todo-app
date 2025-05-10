import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const navigate = useNavigate();

  const fetchTasks = async () => {
    const res = await fetch("/api/tasks", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    });
    const data = await res.json();
    setTasks(data);
  };

  const addTask = async () => {
    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ title: newTask }),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
    setNewTask("");
  };

  const deleteTask = async (id) => {
    await fetch("/api/tasks/" + id, {
      method: "DELETE",
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    });
    setTasks(tasks.filter((task) => task._id !== id));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-4 max-w-xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">Your Tasks</h1>
      <div className="flex gap-2 mb-4">
        <input value={newTask} onChange={(e) => setNewTask(e.target.value)} className="input flex-grow" placeholder="New task..." />
        <button onClick={addTask} className="btn btn-primary">Add</button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task._id} className="flex justify-between items-center p-2 border rounded">
            {task.title}
            <button onClick={() => deleteTask(task._id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => { localStorage.removeItem("token"); navigate("/login"); }} className="mt-4 text-blue-500 underline">Logout</button>
    </div>
  );
};

export default Dashboard;
