import React, { Component } from 'react';
import MemberExpenses from '../components/Members/MemberExpenses'

class MemberContainer extends Component {
    state = {
        members: []
    }
    render(){
        return(
           <div className="member-container">
             
               <div className="member">
                  <MemberExpenses />
               </div>
               <div className="member">
               <MemberExpenses />
               </div>
               <div className="member">
               <MemberExpenses /> 
               
               </div>
             
           </div>
        )
    }
}
export default MemberContainer;