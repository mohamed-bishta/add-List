import React, { useState } from 'react'

export default function Home() {

    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    function addtask() {

        setTasks([...tasks, task]);

        setTask("");

    }

    function Delete(task) {

        setTasks(tasks.filter(item => (item !== task)));
    }

    return (

        <div className='element'>
            <div className="addelement">
                <input type='text' value={task} onChange={e => setTask(e.target.value)} />
                <button onClick={addtask}>click</button>
            </div>

            <div>
                {tasks.map((task, index) => (
                    <div className='content' key={index}>
                        <p>{task}</p>
                        <button onClick={() => Delete(task)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>

    )
}
