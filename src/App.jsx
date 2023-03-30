import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SideCart from "./components/SideCart/SideCart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [watchTime,setWatchTime] = useState('')
  const handleWatchTime =(time) =>{
    const previousWatchTime = JSON.parse(localStorage.getItem('watchTime'))
    if(previousWatchTime){
      const sum = previousWatchTime + time
      localStorage.setItem('watchTime',sum)
      setWatchTime(sum)
    }else{
      localStorage.setItem('watchTime',time)
      setWatchTime(time)
    }
  }
  return (
    <div className="App">
      <Header></Header>
      <div className="main row container mx-auto mt-5">
        <div className="home-container col-md-8">
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>
        <div className="side-cart col-md-4 card">
          <SideCart watchTime={watchTime}></SideCart>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
