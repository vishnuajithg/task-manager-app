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
   view task
    </>
  )
}

export default ViewTask
