import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-slate-600 p-4">
      <div className="text-white ml-10  text-2xl text-bold flex justify-start">
        <h1>TASK MANAGER</h1>
      </div>
      <div className="text-white mr-10 flex justify-end">
        <a href="/"><div className="px-4">Home</div></a>
        <a href="/addTask"><div className="px-4">Add Task</div></a>
        <a href="/viewTask"><div className="px-4">View Task</div></a>
      </div>
    </div>
  );
};

export default Navbar;
