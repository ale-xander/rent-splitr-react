import React from 'react'
import { Icon, Input, Label } from 'semantic-ui-react'

const Expenses = () => (
  <div className=''>
    <div>
      <Input icon className='input-expense' placeholder='Expense'>
        <input />
      </Input>
      <Input
        labelPosition='right'
        type='text'
        className='input-amount'
        placeholder='Amount'
      >
        <Label basic>$</Label>
        <input />
      </Input>
      <Icon className='delete-expense' link name='close' />
    </div>
   
  </div>
)

export default Expenses
