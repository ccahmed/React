import React, { useState } from "react";

// Exercice 1 : Counter Component
const Counter = ({ initialCount = 0, step = 1 }) => {
    const [count, setCount] = useState(initialCount);
  
    return (
      <div>
        <h2>Compteur : {count}</h2>
        <button onClick={() => setCount(count + step)}>+{step}</button>
        <button onClick={() => setCount(count - step)}>-{step}</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    );
  };
  
// Exercice 2 : ListManager Component
const ListManager = ({ initialItems = [], placeholder = "Ajouter un élément" }) => {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  return (
    <div>
      <h2>Liste des éléments</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder={placeholder}
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Ajouter</button>
    </div>
  );
};

// Exercice 3 : ColorBox Component
const ColorBox = ({ initialColor = "#ffffff", colorOptions = ["#ff0000", "#00ff00", "#0000ff"] }) => {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    const randomIndex = Math.floor(Math.random() * colorOptions.length);
    setColor(colorOptions[randomIndex]);
  };

  return (
    <div>
      <div style={{ width: 100, height: 100, backgroundColor: color, margin: "10px auto" }}></div>
      <button onClick={changeColor}>Changer de couleur</button>
    </div>
  );
};

// Exercice 4 : NotesManager Component
const NotesManager = ({ initialNotes = [] }) => {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    const noteValue = parseFloat(newNote);
    if (!isNaN(noteValue) && noteValue >= 0 && noteValue <= 20) {
      setNotes([...notes, noteValue]);
      setNewNote("");
    }
  };

  const removeNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const average = notes.length ? (notes.reduce((a, b) => a + b, 0) / notes.length).toFixed(2) : "N/A";

  return (
    <div>
      <h2>Gestionnaire de notes</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note} <button onClick={() => removeNote(index)}>Supprimer</button></li>
        ))}
      </ul>
      <p>Moyenne : {average}</p>
      <input type="number" value={newNote} onChange={(e) => setNewNote(e.target.value)} />
      <button onClick={addNote}>Ajouter Note</button>
    </div>
  );
};

// Exercice 5 : TodoList Component
const TodoList = ({ initialTasks = [] }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Moyenne");

  const addTask = () => {
    if (taskName.trim() !== "") {
      setTasks([...tasks, { name: taskName, priority, completed: false }]);
      setTaskName("");
    }
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.name} ({task.priority}) - {task.completed ? "Terminé" : "En cours"}
            <button onClick={() => toggleComplete(index)}>{task.completed ? "Annuler" : "Terminer"}</button>
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Nouvelle tâche" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Haute</option>
        <option>Moyenne</option>
        <option>Basse</option>
      </select>
      <button onClick={addTask}>Ajouter</button>
    </div>
  );
};

export { Counter, ListManager, ColorBox, NotesManager, TodoList };