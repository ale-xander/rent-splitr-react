import React from 'react'
import { Icon, Input, Label } from 'semantic-ui-react'

const MemberExpenses = () => (
  <div className=''>
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

    <Icon.Group size='huge'>
      <Icon className='more-items' name='addNewMember' />
      <Icon corner name='add' />
    </Icon.Group>
  </div>
)

export default MemberExpenses
