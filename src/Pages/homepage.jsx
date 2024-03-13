
import { Link } from "react-router-dom"
import '../CSS/box.scss'
import React from 'react';


export function Home() {
  
  return (
    <>
    <h1 className="home">Apps home page</h1>
      <div className="cube">
        <div className="top">
          <span>Counter</span></div>
        <div className="bottom">
          <span >React</span></div>
        <div className="cube-text">
          <span style={{ "--i": 0 }}>Stop Watch</span>
          <span style={{ "--i": 1 }}>Order Form</span>
          <span style={{ "--i": 2 }}>Task List</span>
          <span style={{ "--i": 3 }}>Digital Clock</span>
        </div>
      </div>
    </>
  );
}


