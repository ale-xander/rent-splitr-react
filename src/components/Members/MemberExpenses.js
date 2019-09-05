import React from 'react'
import { Icon, Input, Label } from 'semantic-ui-react';
import Expenses from '../Expenses/Expenses'

const MemberExpenses = () => (
  <div className=''>
     
    <Expenses />
    
    <Icon.Group size='huge'>
      <Icon className='more-expenses' name='addNewMember' />
      <Icon corner name='add' />
    </Icon.Group>
  </div>
)

export default MemberExpenses
