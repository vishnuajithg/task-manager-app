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
       <table className='table-auto border border-grey p-2'>
        <tr className='table-auto border border-grey p-2'>
            <td className='table-auto border border-grey p-2'>title</td>
            <td className='table-auto border border-grey p-2'>description</td>
            <td className='table-auto border border-grey p-2'>status</td>
            <td className='table-auto border border-grey p-2'>priority</td>
        </tr>
        {
            tasks.map((task) => (
                <tr key={task._id}>
                    <td className='table-auto border border-grey p-2'>{task.title}</td>
                    <td className='table-auto border border-grey p-2'>{task.description}</td>
                    <td className='table-auto border border-grey p-2'>{task.status}</td>
                    <td className='table-auto border border-grey p-2'>{task.priority}</td>
                </tr>
            ))
        }
       </table>
    </>
  )
}

export default ViewTask
