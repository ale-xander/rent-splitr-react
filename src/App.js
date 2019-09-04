import React from 'react';
import './App.css';

import UpdateGroup from './components/Group/UpdateGroup'
import CreateMember from './components/Members/CreateMember'
import MemberExpenses from './components/Members/MemberExpenses'


function App() {
  return (
    <div className="App">
    {/* <UpdateGroup /> */}
    <MemberExpenses />
    </div>
  );
}

export default App;
