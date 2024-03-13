import { Link } from "react-router-dom"


export function Navbar() {

    return(
        <>
          
          <Link to="/" >
            <button className='nav-buttons'>Home</button>
            </Link>
          <Link to="/counter">
            <button className='nav-buttons'>Counter</button>
            </Link>
            <Link to="/orderForm">
            <button className='nav-buttons'>Order Form</button>
            </Link>
            {/*
            <Link to="/updateStateArr">
            <button className='nav-buttons'>UpdateStateArr</button>
            </Link>*/}
            <Link to="/taskList">
            <button className='nav-buttons'>Task List</button>
            </Link>
            <Link to="/digitalClock">
            <button className='nav-buttons'>Digital Clock</button>
            </Link>
            <Link to="/stopWatch">
            <button className='nav-buttons'>Stop Watch</button>
            </Link>
          
        </>
      );  
}