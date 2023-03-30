import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const SideCart = ({ watchTime }) => {

  const [time, setTime] = useState(watchTime);
  const [breakTime, setBreakTime] = useState(0)

  const handelBreakTime = (bt) =>{
    localStorage.setItem('breakTime',bt)
    setBreakTime(bt)

  }
  const handleComplete = () =>{
    toast("Wow so easy!");
  }

  useEffect(() => {
    const getWatchTimeFromStorage = localStorage.getItem("watchTime");
    setTime(getWatchTimeFromStorage);
    const getBreakTime= localStorage.getItem("breakTime");
    setBreakTime(getBreakTime)
  }, [watchTime]);
  
  return (
    <div className="text-center sticky-top">
      <h1 className="">My Cart</h1>

      <div className="mt-4 text-center">
        <p className="fs-4">total watch time</p>
        <input type="text" value={time} disabled />
      </div>
      <h5 className="mt-5">Add Break time</h5>
      <button
        onClick={()=> handelBreakTime(15)}
        className="w-25 btn-circle m-1 btn btn-info"
      >
        15
      </button>
      <button className="w-25 btn-circle bg-warning btn btn-info">20</button>
      <button className="w-25 btn-circle m-1 bg-danger btn btn-info">25</button>
      <input className="mt-3" type="text" value={breakTime} disabled />
      <button onClick={()=>handleComplete()} className="mt-5 btn btn-info w-100">Complete</button>
    </div>
  );
};

export default SideCart;
