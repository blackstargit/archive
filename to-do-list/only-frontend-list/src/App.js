import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");
	const [newTaskDetails, setNewTaskDetails] = useState({
		time: "",
		place: "",
	});
	const [editIndex, setEditIndex] = useState(null);
	const taskInputRef = useRef(null); // for reference
	const [error, setError] = useState("");

	useEffect(() => {
		// Focus on the input when in edit mode
		if (taskInputRef.current) {
			taskInputRef.current.focus();
		}
	}, [editIndex]);

	const addTask = () => {
		if (
			newTask.trim() !== "" &&
			newTaskDetails.time.trim() !== "" &&
			newTaskDetails.place.trim() !== ""
		) {
			const updatedTasks = [
				...tasks,
				{ text: newTask, done: false, ...newTaskDetails },
			];
			setTasks(updatedTasks);
			// updateTasksOnServer(updatedTasks);
			setNewTask("");
			setNewTaskDetails({ time: "", place: "" });
			setError("");
		} else {
			setError("Please fill in all fields.");
		}
	};
	const removeTask = (index) => {
		const updatedTasks = [...tasks];
		updatedTasks.splice(index, 1);
		setTasks(updatedTasks);
		setEditIndex(null);
	};

	const toggleDone = (index) => {
		const updatedTasks = [...tasks];
		updatedTasks[index].done = !updatedTasks[index].done;
		setTasks(updatedTasks);
		setEditIndex(null);
  };
  
  const removeAll = () => {
    setTasks([]);
  }

	const editTask = (index) => {
		const taskToEdit = tasks[index];
		setNewTask(taskToEdit.text);
		setNewTaskDetails({
			time: taskToEdit.time || "",
			place: taskToEdit.place || "",
		});
		setEditIndex(index);
	};

	return (
		<div className="page">
			<div className="container">
				<div>
					<h1>Todo App</h1>
				</div>
				<div className="current-tasks">
					<h2>Current Tasks:</h2>
					<button onClick={removeAll}>X</button>
					<ul>
						{tasks.map((task, index) => (
							<li key={index}>
								<span
									className={
										task.done ? "completed" : ""
									}
								>
									{task.text}
									{task.time &&
										` | Time: ${task.time}`}
									{task.place &&
										` | Place: ${task.place}`}
								</span>
								<button
									onClick={() => toggleDone(index)}
								>
									{task.done ? "Undo" : "Done"}
								</button>
								<button onClick={() => editTask(index)}>
									Edit
								</button>
								<button
									onClick={() => removeTask(index)}
								>
									Remove
								</button>
							</li>
						))}
					</ul>
				</div>
				<div>
					<input
						type="text"
						value={newTask}
						onChange={(e) => setNewTask(e.target.value)}
						placeholder="Add a new task"
						autoFocus // Set the autoFocus attribute
						ref={taskInputRef}
					/>
					<input
						type="text"
						value={newTaskDetails.time}
						onChange={(e) =>
							setNewTaskDetails({
								...newTaskDetails,
								time: e.target.value,
							})
						}
						required
						placeholder="Task Time"
					/>
					<input
						type="text"
						value={newTaskDetails.place}
						onChange={(e) =>
							setNewTaskDetails({
								...newTaskDetails,
								place: e.target.value,
							})
						}
						required
						placeholder="Task Place"
					/>
					<button onClick={addTask}>
						{editIndex !== null ? "Update" : "Add"}
					</button>
					{error && <p style={{ color: "red" }}>{error}</p>}
				</div>
			</div>
		</div>
	);
};

export default App;
