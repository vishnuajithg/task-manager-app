import React, { useState } from 'react'

const AddTask = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')
  const [priority, setPriority] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    const TaskDetails = {
        title: title,
        description: description,
        status:status,
        priority:priority
    };
    console.log(TaskDetails,"before calling the function");
    addingTask(TaskDetails);
};
const addingTask = async (TaskDetails) => {
    const response = await fetch('/api/addTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(TaskDetails),
    });
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
    }

    console.log('Task Added Successfully');
    console.log(data);
}

  return (
    <div>
      <form onSubmit={submitHandler} className='flex flex-col items-left mt-10'>
        <div>
          <label htmlFor="title" className='m-2'>Title</label>
          <input type="text" className='border border-black rounded m-2' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="description" className='m-2'>Description</label>
          <input type="text" className='border border-black rounded m-2' value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label htmlFor="status" className='m-2'>Status</label>
          <select name="status" id="status" className='border border-black rounded m-2' value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div>
          <label htmlFor="priority" className='m-2'>Priority</label>
          <select name="priority" id="priority" className='border border-black rounded m-2' value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <button type='submit' className='border border-black rounded m-2 p-2 bg-slate-600 text-white'>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTask
