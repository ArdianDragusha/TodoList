import { useState } from "react";

function TodoList() {
    const [date, setDate] = useState("");
    const [desc, setDesc] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        setTodos([...todos, { desc, date }]);
        setDesc("");
        setDate("");
    };

    return (
        <>
            <div>
                <label>
                    Description:
                    <input value={desc} onChange={(e) => setDesc(e.target.value)} />
                    Date:
                    <input value={date} onChange={(e) => setDate(e.target.value)} />
                    <button onClick={addTodo}>Add</button>
                </label>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.desc}</td>
                            <td>{todo.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TodoList;
