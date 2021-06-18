import React from 'react';
import './App.css'
import Sidebar from './Sidebar';
import Feed from './Feed';
import Rightbar from './Rightbar';
function App() {
  return (
    <div className="app">
  <Sidebar/>
  <Feed/>
  <Rightbar/>
    </div>
  );
}

export default App;
