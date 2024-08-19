import React, { useState } from 'react';

function TaskList() {
    const [tasks, setTasks] = useState([
        { nome: "Exemplo do nome tarefa 1", status: true },
        { nome: "Exemplo do nome tarefa 2", status: false },
        { nome: "Exemplo do nome tarefa 3", status: true }
    ]);
    const [showAddTask, setShowAddTask] = useState(false)
    const [filtered, setFiltered] = useState(false)
    const [newTaskName, setNewTaskName] = useState('')

    const filter = () => {
        setFiltered(!filtered)
    }

    const concluded = (index) => {
        const updatedTasks = tasks.map((task, i) => 
            i === index ? { ...task, status: !task.status } : task
        );
        setTasks(updatedTasks);
    }

    const openAddTask = () => {
        setShowAddTask(!showAddTask)
    }

    const addTask = () => {
        const newTask = {nome: newTaskName, status:false}
        setTasks([...tasks, newTask])
        setNewTaskName('')
    }

    return (
        <div className="tasks">
            {filtered === false ? (
                <>
                    <button onClick={openAddTask}>
                        {showAddTask === false ? "Adicionar Tarefa" : "Fechar"}
                    </button>
                    {showAddTask === true && filtered === false ? (
                        <div className='addTask'>
                            <h1>Adicionar Tarefa</h1>
                            <h1>
                                Nome: 
                                <input 
                                    type='text' 
                                    value={newTaskName} 
                                    onChange={(e) => setNewTaskName(e.target.value)} 
                                />
                            </h1>
                            <button onClick={addTask}>Adicionar</button>
                        </div>
                    ) : null}
                </>
            ) : null}
            <div className="concluded">
                <p>Filtar por tarefas concluídas</p>
                <input type="checkbox" onChange={filter}></input>
            </div>
            {filtered === true ? (
                tasks.filter(task => task.status === true).length === 0 ? (
                    <div className='no-task'>
                        <p>Não há tarefas concluídas</p>
                    </div>
                ) : (
                    tasks.filter(task => task.status === true).map((task, index) => (
                        <div key={index}>
                            <h1>Nome: {task.nome}</h1>
                        </div>
                    ))
                )
            ) 
            : 
                tasks.map((task, index) => (
                    <div key={index}>
                        <h1>Nome: {task.nome}</h1>
                        <div className='status'>
                            {task.status === true ?
                            <>
                                <h1>Status: Concluída</h1>
                                <input type="checkbox" checked onChange={() => concluded(index)}/>
                            </> 
                            :
                            <>
                                <h1>Status: Pendente</h1>
                                <input type="checkbox" onChange={() => concluded(index)}/>
                            </> 
                            }
                        </div>
                    </div>
                ))
            }
        </div> 
    );
}

export default TaskList