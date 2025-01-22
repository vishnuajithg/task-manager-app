import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ViewTask = () => {

    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        const fetchTasks = async () => {
          try {
            const response = await fetch("/api/viewTask");
            if (response.ok) {
              const data = await response.json();
              setTasks(data);
              console.log(data);
            } else {
              console.error("Failed to fetch tasks");
            }
          } catch (error) {
            console.error("Error:", error);
          }
        };
    
        fetchTasks();
      }, []);

  return (
    <>
       view task ! 
       <table>
        <tr>
            <td>title</td>
            <td>description</td>
            <td>status</td>
            <td>priority</td>
        </tr>
        {
            tasks.map((task) => (
                <tr key={task._id}>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.status}</td>
                    <td>{task.priority}</td>
                </tr>
            ))
        }
       </table>
    </>
  )
}

export default ViewTask
