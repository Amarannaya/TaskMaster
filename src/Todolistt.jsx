import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "./constant/index";

function Todolistt() {
  const [tasks, setTasks] = useState([]);
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  class App extends React.Component {

    handleRefresh = () => {
      // by calling this method react re-renders the component
      this.setState({});
    };
  }

  async function fetchTasks() {
    const tasks = await contract.viewTasks();
    setTasks(tasks);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async () => {
  await contract.addTask(newTaskDescription).then(() => {
    fetchTasks();
    setNewTaskDescription("");
  });
};

const handleCompleteTask = async (index) => {
  await contract.completeTask(index).then(() => {
    fetchTasks().then(tasks => {
      setTasks(tasks.map((task, i) => {
        if (i === index) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      }));
    });
  });
};

const handleDeleteCompletedTasks = async () => {
  await contract.deleteCompletedTasks().then(() => {
    fetchTasks().then(tasks => {
      setTasks(tasks.filter((task) => !task.isCompleted));

      // @refresh reset
    });
  });
};

  return (
    <div id='task'>
     
    <div style={{textAlign:'end'}}>
    
      <h1 style={{color:'orange', fontSize:'28px', textAlign:'center',backgroundColor:'#160F29'}}>Tasks</h1>
      <ul style={{color:'white'}}>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.description}
            {!task.isCompleted && (
              
              <button 
                  style={{borderRadius:'5px',fontSize:'14px',padding:'5px',margin:'10px',backgroundColor:'red',color:'white',border:'20px',borderColor:'aqua'}}

              onClick={() => handleCompleteTask(index)}>
                Complete?
              </button>
            )}
            {task.isCompleted && (
              <button 
                  style={{borderRadius:'10px',fontSize:'14px',padding:'5px',margin:'10px',backgroundColor:'green',color:'white',border:'20px',borderColor:'aqua'}}

              onClick={() => handleCompleteTask(index)}>
                Completed
              </button>
            )}
          </li>
        ))}
      </ul>
      <input
            style={{borderRadius:'10px',fontSize:'18px',padding:'5px',margin:'10px',backgroundColor:'wheat',color:'purple',border:'20px'}}
      
        type="text"
        value={newTaskDescription}
        onChange={(e) => setNewTaskDescription(e.target.value)}
      />
      <button onClick={handleAddTask}     style={{borderRadius:'10px',fontSize:'14px',padding:'5px',margin:'10px',backgroundColor:'#160F29',color:'white',border:'20px',borderColor:'aqua'}}
>Add Task</button>
      <button onClick={handleDeleteCompletedTasks}
          style={{borderRadius:'10px',fontSize:'14px',padding:'5px',margin:'10px',backgroundColor:'#160F29',color:'white',border:'20px',borderColor:'aqua'}}
>
        Delete Completed Tasks
      </button>
    </div>
    </div>
  );
}

export default Todolistt;