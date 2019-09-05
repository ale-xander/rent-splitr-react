import React from 'react';
import './App.css';

import UpdateGroup from './components/Group/UpdateGroup'
import CreateMember from './components/Members/CreateMember'
import MemberExpenses from './components/Members/MemberExpenses'
import MemberContainer from './containers/MemberContainer'
import MemberBalances from './components/Members/MemberBalances'


function App() {
  return (
    <div className="App">
    {/* <UpdateGroup /> */}
    {/* <MemberExpenses /> */}
    {/* <MemberContainer /> */}
    <MemberBalances />
    </div>
  );
}

export default App;
